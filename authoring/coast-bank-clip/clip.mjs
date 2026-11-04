/** CPU-only outer-bank trim for the fixed coastal road standard.
 *
 * Contract: the caller decodes the pinned road.glb with the pinned
 * asset-pipeline/content-set/adapter.mjs, optionally runs the original
 * bendRoadParts (which preserves triangle order), then calls clipOuterBank
 * with the hash-bound bank sideband produced by build-sideband.py.
 *
 * Only the 192 triangles recorded in the sideband may be split or removed.
 * Every other triangle keeps its original vertex ids, position order and
 * attributes, so asphalt, markings, rails and non-bank shoulder geometry are
 * byte-identical.  The input parts are never mutated.
 */
import {createHash} from 'node:crypto';

export const BANK_SIDEBAND_SCHEMA = 'star-outer-bank-sideband@1';
export const CLIP_STATS_SCHEMA = 'star-outer-bank-clip-stats@1';
export const DEFAULT_HALF_WIDTH = 8;

/** Identity of the fixed content-set source this sideband is bound to. */
export const PINNED_SOURCE = Object.freeze({
  repoCommit: 'ab2655930996b9d81f5fb35469669c72b7be28e1',
  buildPy: Object.freeze({
    path: 'asset-pipeline/content-set/build.py',
    sha256: '945c4ce2fa1958a6f1baed8bf88619834c388e3ed781a2daacb7164f4c3bb714',
  }),
  recipe: Object.freeze({
    path: 'asset-pipeline/content-set/recipe.json',
    sha256: '16becba2cf71feb780927cf8d9f097785922e5b81226de8a7a3f7f8b7246280a',
  }),
  adapter: Object.freeze({
    path: 'asset-pipeline/content-set/adapter.mjs',
    sha256: '31a9e59f476ba705382731b4d91a1d51bea252f00a05590b20ebd9c76b363299',
  }),
  roadSourceGlb: Object.freeze({
    path: 'asset-pipeline/content-set/source/racing/roadStraight.glb',
    sha256: '6b1f92e5859d417951f259e52c9c9eadad5bfceb3b545e074049bbc17d02f00d',
  }),
  roadOutputGlb: Object.freeze({
    path: 'asset-pipeline/content-set/outputs/base/road.glb',
    sha256: '9eb6a584f5dfc625680e7dadfaa7c8a66ff155f7c90c95a07de4f1b43feebd9a',
    bytes: 276056,
    triangles: 2202,
  }),
  bankTriangleSignature: 'e515e78503acaeb8950c85e724d722f1be4af0e988a06574c991510a0b0858cb',
});

const GEOM_EPS = 1e-9; // metres in the XZ plane
const AREA_EPS = 1e-7; // square metres

function fail(message) {
  throw new Error(message);
}

function isHex64(value) {
  return typeof value === 'string' && /^[0-9a-f]{64}$/.test(value);
}

function assertPinnedSource(sideband) {
  if (sideband?.sourceCommit !== PINNED_SOURCE.repoCommit) fail('Bank sideband source commit drift');
  const source = sideband?.source;
  if (!source || typeof source !== 'object') fail('Bank sideband is missing source identity');
  for (const key of ['buildPy', 'recipe', 'adapter', 'roadSourceGlb', 'roadOutputGlb']) {
    const pinned = PINNED_SOURCE[key], actual = source[key];
    if (!actual || actual.path !== pinned.path || actual.sha256 !== pinned.sha256) {
      fail(`Bank sideband ${key} hash drift`);
    }
    if (!isHex64(actual.sha256)) fail(`Bank sideband ${key} hash is malformed`);
  }
  if (source.roadOutputGlb.bytes !== PINNED_SOURCE.roadOutputGlb.bytes) fail('Bank sideband output byte count drift');
  if (source.roadOutputGlb.triangles !== PINNED_SOURCE.roadOutputGlb.triangles) fail('Bank sideband output triangle count drift');
  const replay = sideband.replay;
  if (!replay || replay.byteIdentical !== true || replay.roadGlbSha256 !== PINNED_SOURCE.roadOutputGlb.sha256) {
    fail('Bank sideband was not bound to a byte-identical generator replay');
  }
}

/** SHA-256 over the referenced triangles' three Uint32 vertex ids, in order.
 * bendRoadParts preserves sourceIndices, so this signature stays valid after
 * bending while still rejecting a sideband whose triangle ids point elsewhere.
 */
export function triangleIndexSignature(part, triangles) {
  const h = createHash('sha256');
  const buffer = Buffer.allocUnsafe(12);
  for (const triangle of triangles) {
    const base = triangle * 3;
    for (let k = 0; k < 3; k++) buffer.writeUInt32LE(part.sourceIndices[base + k], k * 4);
    h.update(buffer);
  }
  return h.digest('hex');
}

/** Validate a sideband against the decoded adapter parts.
 * Returns the addressed part, its index and a copied triangle-id array.
 */
export function verifyBankSideband(parts, sideband) {
  if (!Array.isArray(parts) || parts.length < 1) fail('parts must be a non-empty array');
  if (!sideband || sideband.schema !== BANK_SIDEBAND_SCHEMA) fail('Unsupported bank sideband schema');
  assertPinnedSource(sideband);
  if (typeof sideband.part !== 'string' || !sideband.part) fail('Bank sideband has no part name');
  if (!Number.isInteger(sideband.partTriangleCount) || sideband.partTriangleCount < 1) fail('Invalid part triangle count');

  const matches = [];
  for (let i = 0; i < parts.length; i++) if (parts[i]?.name === sideband.part) matches.push(i);
  if (matches.length !== 1) fail(`Bank sideband part ${sideband.part} is missing or ambiguous`);
  const partIndex = matches[0], part = parts[partIndex];
  if (!(part.sourceData instanceof Float32Array) || !(part.sourceIndices instanceof Uint32Array)) {
    fail('Adapter part must expose Float32Array sourceData and Uint32Array sourceIndices');
  }
  if (part.sourceData.length % 10 !== 0) fail('Adapter part stride is not 10');
  if (part.sourceIndices.length % 3 !== 0) fail('Adapter part index count is not a triangle list');
  const triangleCount = part.sourceIndices.length / 3;
  if (sideband.partTriangleCount !== triangleCount) fail('Bank sideband part triangle count does not match decoded part');
  if (!Array.isArray(sideband.triangles) || sideband.triangles.length !== sideband.triangleCount) {
    fail('Bank sideband triangle list does not match its declared count');
  }
  if (!Number.isInteger(sideband.triangleCount) || sideband.triangleCount < 1) fail('Invalid bank triangle count');
  if (sideband.triangleCount !== 192) fail(`Fixed road standard must bind 192 outer-bank triangles, got ${sideband.triangleCount}`);

  const seen = new Set();
  const triangles = sideband.triangles.map(value => {
    if (!Number.isInteger(value) || value < 0 || value >= triangleCount) fail('Bank triangle index outside decoded part');
    if (seen.has(value)) fail('Duplicate bank triangle index');
    seen.add(value);
    return value;
  });
  if (!Array.isArray(sideband.records) || sideband.records.length !== triangles.length) fail('Bank sideband records are incomplete');
  sideband.records.forEach((record, i) => {
    if (!record || record.triangle !== triangles[i]) fail('Bank sideband record/index mismatch');
  });
  if (sideband.vertexIndexSignature !== PINNED_SOURCE.bankTriangleSignature) {
    fail('Bank sideband vertex-index signature is not the pinned outer-bank partition');
  }
  sideband.records.forEach((record, i) => {
    if (!Array.isArray(record.vertices) || record.vertices.length !== 3) {
      fail('Bank sideband record is missing its three vertex indices');
    }
    for (let k = 0; k < 3; k++) {
      if (record.vertices[k] !== part.sourceIndices[triangles[i] * 3 + k]) {
        fail('Bank sideband record vertex binding mismatch');
      }
    }
  });
  if (sideband.vertexIndexSignature !== triangleIndexSignature(part, triangles)) {
    fail('Bank sideband vertex-index signature mismatch');
  }
  return {part, partIndex, triangles};
}

function corridorSegments(corridors) {
  if (!Array.isArray(corridors)) fail('protectedCorridors must be an array');
  const ids = new Set();
  const output = [];
  for (let index = 0; index < corridors.length; index++) {
    const corridor = corridors[index];
    if (!corridor || typeof corridor !== 'object') fail(`Protected corridor ${index} is not an object`);
    const id = corridor.id;
    if (typeof id !== 'string' || !id.trim()) fail(`Protected corridor ${index} has no stable id`);
    if (ids.has(id)) fail(`Duplicate protected corridor id ${id}`);
    ids.add(id);
    const points = corridor.points;
    if (!Array.isArray(points) || points.length < 2) fail(`Protected corridor ${id} needs at least two points`);
    const parsed = points.map((point, pointIndex) => {
      if (!Array.isArray(point) || point.length !== 2) fail(`Protected corridor ${id} point ${pointIndex} is not [x,z]`);
      const [x, z] = point;
      if (!Number.isFinite(x) || !Number.isFinite(z)) fail(`Protected corridor ${id} point ${pointIndex} is not finite`);
      return {x, z};
    });
    const halfWidth = corridor.halfWidth === undefined ? DEFAULT_HALF_WIDTH : corridor.halfWidth;
    if (typeof halfWidth !== 'number' || !Number.isFinite(halfWidth) || halfWidth <= 0) {
      fail(`Protected corridor ${id} has invalid halfWidth`);
    }
    const segments = [];
    for (let i = 0; i < parsed.length - 1; i++) {
      const a = parsed[i], b = parsed[i + 1];
      const dx = b.x - a.x, dz = b.z - a.z;
      const length = Math.hypot(dx, dz);
      if (!Number.isFinite(dx) || !Number.isFinite(dz) || !Number.isFinite(length) || !(length > GEOM_EPS)) {
        fail(`Protected corridor ${id} segment ${i} has zero or non-finite length`);
      }
      const nx = -dz / length, nz = dx / length;
      // No end-cap extension: each adjacent pair is one 2*halfWidth-wide rectangle.
      const rectangle = [
        {x: a.x + nx * halfWidth, z: a.z + nz * halfWidth},
        {x: b.x + nx * halfWidth, z: b.z + nz * halfWidth},
        {x: b.x - nx * halfWidth, z: b.z - nz * halfWidth},
        {x: a.x - nx * halfWidth, z: a.z - nz * halfWidth},
      ];
      if (!rectangle.every(point => Number.isFinite(point.x) && Number.isFinite(point.z)) ||
          !Number.isFinite(signedArea2(rectangle))) {
        fail(`Protected corridor ${id} segment ${i} produces a non-finite rectangle`);
      }
      if (signedArea2(rectangle) < 0) rectangle.reverse();
      const halfplanes = [];
      for (let k = 0; k < 4; k++) {
        const p = rectangle[k], q = rectangle[(k + 1) % 4];
        halfplanes.push({ax: p.x, az: p.z, bx: q.x, bz: q.z});
      }
      segments.push({corridor: id, segment: i, halfWidth, rectangle, halfplanes});
    }
    output.push({id, points: parsed, halfWidth, segments});
  }
  return output;
}

function signedArea2(polygon) {
  let sum = 0;
  for (let i = 0; i < polygon.length; i++) {
    const a = polygon[i], b = polygon[(i + 1) % polygon.length];
    sum += a.x * b.z - b.x * a.z;
  }
  return sum;
}

function sideOf(halfplane, point) {
  return (halfplane.bx - halfplane.ax) * (point.z - halfplane.az) -
    (halfplane.bz - halfplane.az) * (point.x - halfplane.ax);
}

function dedupe(polygon) {
  const output = [];
  for (const point of polygon) {
    const last = output[output.length - 1];
    if (!last || Math.hypot(point.x - last.x, point.z - last.z) > GEOM_EPS) output.push(point);
  }
  if (output.length > 2) {
    const first = output[0], last = output[output.length - 1];
    if (Math.hypot(first.x - last.x, first.z - last.z) <= GEOM_EPS) output.pop();
  }
  return output;
}

/** Sutherland-Hodgman clip of a convex CCW polygon by one half-plane. */
function clipHalfPlane(polygon, halfplane, keepInside, eps = 0) {
  if (polygon.length < 3) return [];
  const sides = polygon.map(point => sideOf(halfplane, point));
  const output = [];
  for (let i = 0; i < polygon.length; i++) {
    const current = polygon[i], next = polygon[(i + 1) % polygon.length];
    const dc = sides[i], dn = sides[(i + 1) % polygon.length];
    const currentIn = keepInside ? dc >= -eps : dc <= eps;
    const nextIn = keepInside ? dn >= -eps : dn <= eps;
    if (currentIn) output.push(current);
    if (currentIn !== nextIn) {
      const denominator = dc - dn;
      if (Math.abs(denominator) > 1e-30) {
        const t = dc / denominator;
        output.push({x: current.x + (next.x - current.x) * t, z: current.z + (next.z - current.z) * t});
      }
    }
  }
  return dedupe(output);
}

function polygonArea(polygon) {
  return Math.abs(signedArea2(polygon)) / 2;
}

/** Split a convex CCW polygon into the parts outside a convex CCW rectangle.
 * Each returned polygon is convex; overlap is handled by calling this once per
 * rectangle on every surviving polygon.
 */
function subtractConvex(polygon, halfplanes) {
  let intersection = polygon;
  for (const halfplane of halfplanes) {
    intersection = clipHalfPlane(intersection, halfplane, true, GEOM_EPS);
    if (intersection.length < 3) break;
  }
  const polygonAreaValue = polygonArea(polygon);
  const intersectionArea = intersection.length < 3 ? 0 : polygonArea(intersection);
  if (intersectionArea <= AREA_EPS) return {polygons: [polygon], changed: false};
  if (intersectionArea >= polygonAreaValue - AREA_EPS) return {polygons: [], changed: true};

  // P \ (H1 and ... and H4) = disjoint union of
  // (P and H1..H(i-1) and not Hi) over i.
  const polygons = [];
  let current = polygon;
  for (const halfplane of halfplanes) {
    const outside = clipHalfPlane(current, halfplane, false, 0);
    if (outside.length >= 3 && polygonArea(outside) > AREA_EPS) polygons.push(outside);
    current = clipHalfPlane(current, halfplane, true, 0);
    if (current.length < 3) break;
  }
  return {polygons, changed: true};
}

function copyPart(part) {
  return {
    ...part,
    sourceData: new Float32Array(part.sourceData),
    sourceIndices: new Uint32Array(part.sourceIndices),
  };
}

/** Interpolate the original triangle plane in world XZ. */
function interpolateVertex(triangle, polygonPoint, pivot) {
  const [a, b, c] = triangle.world;
  const det = (b.z - c.z) * (a.x - c.x) + (c.x - b.x) * (a.z - c.z);
  if (!Number.isFinite(det) || Math.abs(det) < 1e-12) fail('Outer-bank triangle has a degenerate XZ projection');
  let wa = ((b.z - c.z) * (polygonPoint.x - c.x) + (c.x - b.x) * (polygonPoint.z - c.z)) / det;
  let wb = ((c.z - a.z) * (polygonPoint.x - c.x) + (a.x - c.x) * (polygonPoint.z - c.z)) / det;
  let wc = 1 - wa - wb;
  if (![wa, wb, wc].every(value => Number.isFinite(value) && value >= -1e-6 && value <= 1 + 1e-6)) {
    fail('Clipped vertex falls outside its source triangle');
  }
  const weights = [wa, wb, wc].map(value => Math.min(1, Math.max(0, value)));
  const total = weights[0] + weights[1] + weights[2];
  if (!(total > 1e-12) || !Number.isFinite(total)) fail('Clipped vertex has invalid barycentric weights');
  for (let i = 0; i < 3; i++) weights[i] /= total;

  const position = [0, 0, 0], normal = [0, 0, 0], color = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    const source = triangle.vertices[i], weight = weights[i];
    for (let k = 0; k < 3; k++) {
      position[k] += source.world[k] * weight;
      normal[k] += source.normal[k] * weight;
      color[k] += source.color[k] * weight;
    }
  }
  const normalLength = Math.hypot(...normal);
  if (!(normalLength > 1e-12) || !Number.isFinite(normalLength)) fail('Clipped vertex normal degenerated');
  return {
    local: [position[0] - pivot[0], position[1] - pivot[1], position[2] - pivot[2]],
    normal: normal.map(value => value / normalLength),
    color: color.map(value => Math.min(1, Math.max(0, value))),
  };
}

function readTriangle(part, triangleId) {
  const pivot = part.pivot ?? [0, 0, 0];
  const vertices = [];
  for (let k = 0; k < 3; k++) {
    const offset = part.sourceIndices[triangleId * 3 + k] * 10;
    const position = [part.sourceData[offset], part.sourceData[offset + 1], part.sourceData[offset + 2]];
    const world = [position[0] + pivot[0], position[1] + pivot[1], position[2] + pivot[2]];
    vertices.push({
      world,
      normal: [part.sourceData[offset + 3], part.sourceData[offset + 4], part.sourceData[offset + 5]],
      color: [part.sourceData[offset + 6], part.sourceData[offset + 7], part.sourceData[offset + 8]],
    });
  }
  for (const vertex of vertices) {
    if (![...vertex.world, ...vertex.normal, ...vertex.color].every(Number.isFinite)) {
      fail(`Outer-bank triangle ${triangleId} has a non-finite vertex`);
    }
  }
  return {vertices, world: vertices.map(vertex => ({x: vertex.world[0], z: vertex.world[2]}))};
}

function triangulate(polygon, triangle, pivot, originalOrientation) {
  const triangles = [];
  for (let i = 1; i < polygon.length - 1; i++) {
    if (Math.abs(signedArea2([polygon[0], polygon[i], polygon[i + 1]])) / 2 <= AREA_EPS) continue;
    let corners = [polygon[0], polygon[i], polygon[i + 1]].map(point => interpolateVertex(triangle, point, pivot));
    if (originalOrientation < 0) corners = [corners[0], corners[2], corners[1]];
    const [p0, p1, p2] = corners.map(corner => corner.local);
    const u = [p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]];
    const v = [p2[0] - p0[0], p2[1] - p0[1], p2[2] - p0[2]];
    const face = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const area = Math.hypot(...face);
    if (!(area > 1e-12) || !Number.isFinite(area)) fail('Clipped outer-bank triangle is degenerate');
    let dot = 0;
    for (const corner of corners) for (let k = 0; k < 3; k++) dot += face[k] * corner.normal[k];
    if (dot <= 0) fail('Clipped outer-bank triangle is reversed against its normals');
    triangles.push(corners);
  }
  return triangles;
}

/** Remove protected road corridors from the recorded outer-bank triangles.
 *
 * @param {Array} parts adapter output (optionally after bendRoadParts)
 * @param {object} bankTriangleIds hash-bound sideband written by build-sideband.py
 * @param {Array<{id:string, points:Array<[number,number]>, halfWidth?:number}>} protectedCorridors
 * @returns {{parts: Array, stats: object}} new parts and CPU clipping statistics
 */
export function clipOuterBank(parts, bankTriangleIds, protectedCorridors) {
  const {part, partIndex, triangles} = verifyBankSideband(parts, bankTriangleIds);
  const corridors = corridorSegments(protectedCorridors);
  // Stable id / segment order, independent of the caller's array order.
  const ordered = [...corridors].sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  const segments = ordered.flatMap(corridor => corridor.segments);
  const bank = new Set(triangles);
  const pivot = part.pivot ?? [0, 0, 0];
  const originalIndexCount = part.sourceIndices.length;
  const outputIndices = [];
  const extraData = [];
  const stats = {
    schema: CLIP_STATS_SCHEMA,
    corridors: corridors.length,
    corridorSegments: segments.length,
    bankTriangles: triangles.length,
    affectedTriangles: 0,
    unchangedBankTriangles: 0,
    removedTriangles: 0,
    clippedTriangles: 0,
    addedTriangles: 0,
    inputBankArea: 0,
    outputBankArea: 0,
    partsTouched: [],
  };

  for (let triangleId = 0; triangleId < originalIndexCount / 3; triangleId++) {
    const base = triangleId * 3;
    if (!bank.has(triangleId)) {
      outputIndices.push(part.sourceIndices[base], part.sourceIndices[base + 1], part.sourceIndices[base + 2]);
      continue;
    }
    const sourceTriangle = readTriangle(part, triangleId);
    const [a, b, c] = sourceTriangle.world;
    const area2 = (b.x - a.x) * (c.z - a.z) - (b.z - a.z) * (c.x - a.x);
    if (!Number.isFinite(area2) || Math.abs(area2) / 2 <= AREA_EPS) {
      fail(`Outer-bank triangle ${triangleId} has a degenerate XZ projection`);
    }
    const orientation = area2 > 0 ? 1 : -1;
    let polygons = [orientation > 0 ? [a, b, c] : [c, b, a]];
    let changed = false;
    for (const segment of segments) {
      const next = [];
      for (const polygon of polygons) {
        const result = subtractConvex(polygon, segment.halfplanes);
        changed = changed || result.changed;
        next.push(...result.polygons);
      }
      polygons = next;
      if (polygons.length === 0) break;
    }
    const originalArea = Math.abs(area2) / 2;
    stats.inputBankArea += originalArea;
    if (!changed) {
      // No rectangle reached this triangle's interior. Keep original ids,
      // which keeps bytes identical (and preserves boundary tangencies).
      outputIndices.push(part.sourceIndices[base], part.sourceIndices[base + 1], part.sourceIndices[base + 2]);
      stats.unchangedBankTriangles++;
      stats.outputBankArea += originalArea;
      continue;
    }
    stats.affectedTriangles++;
    let added = 0, remainingArea = 0;
    for (const polygon of polygons) {
      remainingArea += polygonArea(polygon);
      const pieces = triangulate(polygon, sourceTriangle, pivot, orientation);
      for (const corners of pieces) {
        const first = (part.sourceData.length + extraData.length) / 10;
        if (!Number.isInteger(first)) fail('Internal vertex-offset error while appending clipped vertices');
        for (const corner of corners) {
          extraData.push(...corner.local, ...corner.normal, ...corner.color, 0.12);
        }
        outputIndices.push(first, first + 1, first + 2);
        added++;
      }
    }
    if (added === 0) stats.removedTriangles++;
    else stats.clippedTriangles++;
    stats.addedTriangles += added;
    stats.outputBankArea += remainingArea;
  }

  if (stats.affectedTriangles === 0) {
    return {parts: parts.map(copyPart), stats};
  }
  if (extraData.length % 10 !== 0) fail('Internal stride error while appending clipped vertices');
  const sourceData = new Float32Array(part.sourceData.length + extraData.length);
  sourceData.set(part.sourceData, 0);
  sourceData.set(extraData, part.sourceData.length);
  const clippedPart = {...part, sourceData, sourceIndices: new Uint32Array(outputIndices)};
  stats.partsTouched.push(part.name);
  const result = parts.map((candidate, index) => index === partIndex ? clippedPart : copyPart(candidate));
  return {parts: result, stats};
}
