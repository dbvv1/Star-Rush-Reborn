// CPU-only street standard placement adapter.
//
// Contract (see README.md and fixed-source/contract.json):
//   placeStreet(parts, sampleRoad, centerS, side, setback)
//
// - parts: parsed fixed-source street parts (house-a/house-g/house-m). Layout
//   pivot.x is the along-street offset, pivot.z the extra depth (house-g +2 m).
// - sampleRoad(s): read-only current circuitRoad(s) frame source returning
//   {p:[x,y,z],h,T,R,curv,slope}. T/R are the horizontal basis and p[1] is the
//   only height.
// - side: -1 or +1. setback: non-negative metres beyond the 8 m road edge.
//
// Each house is queried at centerS + pivot.x and receives exactly one rigid
// yaw+translation. Local +X follows side*T, local +Z follows side*R, so the
// door face (-Z) always points at the road and no wall/eave is stretched.
// The bottom pivot (local origin, y=0) lands on p[1] of its own station.
// Lateral distance is one shared base offset plus each house's pivot.z.
//
// The shared base offset starts at the nominal value that puts the nearest
// front face at 8 m + setback, then is expanded by a deterministic fixed-point
// search until every world XZ bounding box is at least 8 m + setback from the
// sampled 1 m road polyline. Curved road frames make an axis-aligned box reach
// closer than its nominal front face, so the search is part of the contract,
// not a tolerance fudge. Unmet limits are returned as per-house violations.
import {decodeStandardPart} from './fixed-source/upstream-adapter.mjs';

export const STREET_PLACEMENT_SCHEMA = 1;
export const CLEARANCE_BASE_M = 8;
export const CLEARANCE_STEP_M = 1;
export const DOOR_LOCAL = Object.freeze([0, 0, -1]);
export const UP = Object.freeze([0, 1, 0]);

const FRAME_EPS = 1e-4;
const HORIZONTAL_EPS = 1e-5;
const CLEARANCE_EPS = 1e-9;
const MAX_FIT_STEPS = 200;
// Curved rows are fitted 1 cm above the hard limit to absorb the ~0.1 mm
// shortfall from the 1 m polyline discretisation in the usual case. This is
// not a general guarantee for the mandated 4 m -> 6 m second pass: shiftSetback
// does not re-fit baseOffset, so a sharp bend can still return a violation
// (measured at centerS 510, side -1). Callers must check result.ok/violations.
const FIT_MARGIN_M = 0.01;

export class StreetPlacementError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = 'StreetPlacementError';
    this.code = code;
    this.details = details;
    for (const [key, value] of Object.entries(details)) {
      if (!(key in this)) this[key] = value;
    }
  }
}

function fail(code, message, details = {}) {
  throw new StreetPlacementError(code, message, details);
}

const isFiniteNumber = value => typeof value === 'number' && Number.isFinite(value);
const isVector3 = value =>
  Array.isArray(value) && value.length === 3 && value.every(isFiniteNumber);

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function distance3(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

function frameLabel(station, context) {
  if (context.phase === 'clearance') return `clearance polyline station ${station}`;
  if (context.phase === 'shift') return `shift frame for ${context.houseId ?? 'house'} at station ${station}`;
  return `${context.houseId ?? 'house'} at station ${station}`;
}

/** Validate one circuitRoad frame and return its reason without mutating it. */
export function validateFrame(frame, station, context = {}) {
  const where = frameLabel(station, context);
  const reject = (reason, details = {}) =>
    fail('invalid_frame', `Invalid circuit frame for ${where}: ${reason}`, {station, reason, ...context, ...details});

  if (!frame || typeof frame !== 'object') reject('frame is not an object');
  if (!isVector3(frame.p)) reject('p must be a finite 3-vector');
  for (const key of ['h', 'curv', 'slope']) {
    if (!isFiniteNumber(frame[key])) reject(`${key} must be a finite number`);
  }
  if (!isVector3(frame.T)) reject('T must be a finite 3-vector');
  if (!isVector3(frame.R)) reject('R must be a finite 3-vector');

  const t = frame.T, r = frame.R;
  const tLength = Math.hypot(...t), rLength = Math.hypot(...r);
  if (Math.abs(tLength - 1) > FRAME_EPS) reject(`T is not unit length (${tLength})`);
  if (Math.abs(rLength - 1) > FRAME_EPS) reject(`R is not unit length (${rLength})`);
  if (Math.abs(dot(t, r)) > FRAME_EPS) reject('T and R are not orthogonal');
  if (Math.abs(t[1]) > HORIZONTAL_EPS || Math.abs(r[1]) > HORIZONTAL_EPS) {
    reject('T and R must be horizontal (no banking component)');
  }
  const right = cross(t, UP);
  if (distance3(right, r) > FRAME_EPS) {
    reject('T/R basis is not right-handed horizontal (T x up must equal R)');
  }
  if (Math.abs(Math.cos(frame.h) - t[0]) > FRAME_EPS ||
      Math.abs(Math.sin(frame.h) - t[2]) > FRAME_EPS) {
    reject('h does not match the T heading');
  }
  return frame;
}

function frameAt(sampleRoad, station, context) {
  let frame;
  try {
    frame = sampleRoad(station);
  } catch (error) {
    fail('invalid_frame',
      `sampleRoad threw for ${frameLabel(station, context)}: ${error.message}`,
      {station, reason: `sampleRoad threw: ${error.message}`, ...context});
  }
  return validateFrame(frame, station, context);
}

/**
 * Parse the fixed-source street GLB through the pinned upstream adapter.
 * Does not fetch, patch, render or mutate the asset.
 */
export function parseStreetStandard(bytes) {
  let parts;
  try {
    parts = decodeStandardPart(bytes);
  } catch (error) {
    fail('invalid_glb', `Fixed-source street GLB rejected: ${error.message}`, {reason: error.message});
  }
  if (!Array.isArray(parts) || !parts.length) {
    fail('invalid_glb', 'Fixed-source street GLB contains no parts');
  }
  return parts;
}

/** Local axis-aligned bounds over a part's unconditionally consumed vertices. */
export function localBounds(part) {
  const data = part?.sourceData;
  if (!data || typeof data.length !== 'number' || data.length === 0 || data.length % 10 !== 0) {
    fail('invalid_parts', `Part ${part?.name ?? '?'} has an invalid stride-10 sourceData buffer`);
  }
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < data.length; i += 10) {
    for (let k = 0; k < 3; k++) {
      const value = data[i + k];
      if (!isFiniteNumber(value)) {
        fail('invalid_parts', `Part ${part.name} has a non-finite vertex coordinate`);
      }
      if (value < min[k]) min[k] = value;
      if (value > max[k]) max[k] = value;
    }
  }
  return {min, max};
}

function normalizeParts(parts) {
  if (!Array.isArray(parts) || !parts.length) {
    fail('invalid_parts', 'placeStreet requires a non-empty parts array');
  }
  const names = new Set();
  return parts.map(part => {
    if (!part || typeof part !== 'object') fail('invalid_parts', 'Part must be an object');
    if (typeof part.name !== 'string' || !part.name) fail('invalid_parts', 'Part is missing a string name');
    if (names.has(part.name)) fail('invalid_parts', `Duplicate house id ${part.name}`, {houseId: part.name});
    names.add(part.name);
    if (!isVector3(part.pivot)) {
      fail('invalid_parts', `Part ${part.name} has an invalid pivot`, {houseId: part.name});
    }
    if (Math.abs(part.pivot[1]) > 1e-12) {
      fail('unsupported_pivot', `Part ${part.name} has non-zero pivot.y ${part.pivot[1]}; bottom pivot must be on y=0`, {houseId: part.name});
    }
    const data = part.sourceData, indices = part.sourceIndices;
    if (!data || typeof data.length !== 'number' || data.length % 10 !== 0) {
      fail('invalid_parts', `Part ${part.name} sourceData must be a multiple of stride 10`, {houseId: part.name});
    }
    if (!indices || typeof indices.length !== 'number' || indices.length % 3 !== 0) {
      fail('invalid_parts', `Part ${part.name} sourceIndices must be triangle indices`, {houseId: part.name});
    }
    const vertexCount = data.length / 10;
    for (let i = 0; i < indices.length; i++) {
      const index = indices[i];
      if (!Number.isInteger(index) || index < 0 || index >= vertexCount) {
        fail('invalid_parts', `Part ${part.name} has an index outside its vertices`, {houseId: part.name});
      }
    }
    const bounds = localBounds(part);
    return {part, bounds};
  });
}

function validateCall(sampleRoad, centerS, side, setback) {
  if (typeof sampleRoad !== 'function') {
    fail('invalid_sample_road', 'sampleRoad must be a function');
  }
  if (!isFiniteNumber(centerS)) {
    fail('invalid_center', `centerS must be a finite number (received ${String(centerS)})`);
  }
  if (side !== -1 && side !== 1) {
    fail('invalid_side', `side must be -1 or 1 (received ${String(side)})`);
  }
  if (!isFiniteNumber(setback)) {
    fail('invalid_setback', `setback must be a finite number of metres (received ${String(setback)})`);
  }
  if (setback < 0) {
    fail('invalid_setback', `setback must be non-negative metres (received ${setback})`);
  }
}

// Frames that can possibly sit within `required` of a house box must be
// sampled; anything farther along the road is farther than `required` away.
// `bodyRadius` is the horizontal circumradius of the local mesh hull, so the
// window covers a yawed box's full reach instead of only its local X extent.
function clearanceWindow(centerS, rows, required) {
  let halfSpan = 0;
  for (const {part} of rows) {
    let bodyRadius = 0;
    for (const [x, z] of localXZHull(part)) {
      const radius = Math.hypot(x, z);
      if (radius > bodyRadius) bodyRadius = radius;
    }
    halfSpan = Math.max(halfSpan, Math.abs(part.pivot[0]) + bodyRadius);
  }
  halfSpan += required + CLEARANCE_STEP_M;
  return {
    from: Math.floor(centerS - halfSpan),
    to: Math.ceil(centerS + halfSpan),
    step: CLEARANCE_STEP_M,
  };
}

function buildPolyline(sampleRoad, window) {
  const frames = new Map();
  const sample = station => {
    if (!frames.has(station)) {
      frames.set(station, frameAt(sampleRoad, station, {phase: 'clearance'}));
    }
    return frames.get(station);
  };
  const segments = [];
  for (let s = window.from; s < window.to; s += window.step) {
    const a = sample(s), b = sample(s + window.step);
    segments.push({s, a: [a.p[0], a.p[2]], b: [b.p[0], b.p[2]]});
  }
  return segments;
}

function pointSegmentDistance(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const lengthSq = dx * dx + dz * dz;
  let t = lengthSq ? ((px - ax) * dx + (pz - az) * dz) / lengthSq : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t));
}

function orientation(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
}

function onSegment(a, b, p) {
  return Math.min(a[0], b[0]) - 1e-12 <= p[0] && p[0] <= Math.max(a[0], b[0]) + 1e-12 &&
    Math.min(a[1], b[1]) - 1e-12 <= p[1] && p[1] <= Math.max(a[1], b[1]) + 1e-12;
}

function segmentsIntersect(a, b, c, d) {
  const o1 = orientation(a, b, c), o2 = orientation(a, b, d);
  const o3 = orientation(c, d, a), o4 = orientation(c, d, b);
  if (((o1 > 0 && o2 < 0) || (o1 < 0 && o2 > 0)) &&
      ((o3 > 0 && o4 < 0) || (o3 < 0 && o4 > 0))) return true;
  if (Math.abs(o1) <= 1e-12 && onSegment(a, b, c)) return true;
  if (Math.abs(o2) <= 1e-12 && onSegment(a, b, d)) return true;
  if (Math.abs(o3) <= 1e-12 && onSegment(c, d, a)) return true;
  if (Math.abs(o4) <= 1e-12 && onSegment(c, d, b)) return true;
  return false;
}

function segmentDistance(a, b, c, d) {
  if (segmentsIntersect(a, b, c, d)) return 0;
  return Math.min(
    pointSegmentDistance(c[0], c[1], a[0], a[1], b[0], b[1]),
    pointSegmentDistance(d[0], d[1], a[0], a[1], b[0], b[1]),
    pointSegmentDistance(a[0], a[1], c[0], c[1], d[0], d[1]),
    pointSegmentDistance(b[0], b[1], c[0], c[1], d[0], d[1]),
  );
}

function pointInBox(bbox, p) {
  return p[0] >= bbox.minX && p[0] <= bbox.maxX && p[1] >= bbox.minZ && p[1] <= bbox.maxZ;
}

/** Minimum XZ distance between a world axis-aligned building box and one polyline segment. */
export function boxSegmentDistance(bbox, a, b) {
  if (pointInBox(bbox, a) || pointInBox(bbox, b)) return 0;
  const corners = [
    [bbox.minX, bbox.minZ], [bbox.maxX, bbox.minZ],
    [bbox.maxX, bbox.maxZ], [bbox.minX, bbox.maxZ],
  ];
  let min = Infinity;
  for (let i = 0; i < 4; i++) {
    const d = segmentDistance(corners[i], corners[(i + 1) % 4], a, b);
    if (d < min) min = d;
  }
  return min;
}

const hullCache = new WeakMap();

/**
 * Convex hull of the local XZ projection. The world XZ bounding box of a
 * yaw-rotated house is the bounding box of these hull points; using the four
 * corners of the local box would invent corners that are not part of the mesh.
 */
export function localXZHull(part) {
  if (hullCache.has(part)) return hullCache.get(part);
  const data = part.sourceData;
  const unique = new Map();
  for (let i = 0; i < data.length; i += 10) {
    const key = `${data[i]},${data[i + 2]}`;
    if (!unique.has(key)) unique.set(key, [data[i], data[i + 2]]);
  }
  const points = [...unique.values()].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (points.length <= 2) {
    hullCache.set(part, points);
    return points;
  }
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower = [];
  for (const point of points) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) lower.pop();
    lower.push(point);
  }
  const upper = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const point = points[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) upper.pop();
    upper.push(point);
  }
  const hull = lower.slice(0, -1).concat(upper.slice(0, -1));
  hullCache.set(part, hull);
  return hull;
}

function transformBounds(part, bounds, matrix) {
  let minX = Infinity, maxX = -Infinity;
  let minZ = Infinity, maxZ = -Infinity;
  for (const [x, z] of localXZHull(part)) {
    const wx = matrix[0] * x + matrix[8] * z + matrix[12];
    const wz = matrix[2] * x + matrix[10] * z + matrix[14];
    if (wx < minX) minX = wx;
    if (wx > maxX) maxX = wx;
    if (wz < minZ) minZ = wz;
    if (wz > maxZ) maxZ = wz;
  }
  const minY = matrix[5] * bounds.min[1] + matrix[13];
  const maxY = matrix[5] * bounds.max[1] + matrix[13];
  return {minX, maxX, minY, maxY, minZ, maxZ};
}

function placeAtBase(rows, side, baseOffset) {
  return rows.map(({part, bounds, frame, station}) => {
    const T = frame.T, R = frame.R;
    const xAxis = [side * T[0], 0, side * T[2]];
    const zAxis = [side * R[0], 0, side * R[2]];
    const lateral = side * (baseOffset + part.pivot[2]);
    const pivot = [
      frame.p[0] + lateral * R[0],
      frame.p[1],
      frame.p[2] + lateral * R[2],
    ];
    // Column-major, matching engine.js transform().
    const matrix = [
      xAxis[0], xAxis[1], xAxis[2], 0,
      0, 1, 0, 0,
      zAxis[0], zAxis[1], zAxis[2], 0,
      pivot[0], pivot[1], pivot[2], 1,
    ];
    const front = [-zAxis[0], 0, -zAxis[2]];
    const toRoad = [frame.p[0] - pivot[0], 0, frame.p[2] - pivot[2]];
    const toRoadLength = Math.hypot(toRoad[0], toRoad[2]);
    return {
      id: part.name,
      station,
      pivot,
      matrix,
      bbox: transformBounds(part, bounds, matrix),
      front,
      frontDotRoad: toRoadLength > 1e-12
        ? (front[0] * toRoad[0] + front[2] * toRoad[2]) / toRoadLength
        : 0,
    };
  });
}

function measurePlacements(placements, segments) {
  let overall = {min: Infinity, houseId: null, at: null};
  for (const placement of placements) {
    let min = Infinity, at = null;
    for (const segment of segments) {
      const d = boxSegmentDistance(placement.bbox, segment.a, segment.b);
      if (d < min) { min = d; at = segment.s; }
    }
    placement.clearance = min;
    placement.clearanceAt = at;
    if (min < overall.min) overall = {min, houseId: placement.id, at};
  }
  return overall;
}

function clearanceViolations(placements, required) {
  const violations = [];
  for (const placement of placements) {
    if (placement.clearance < required - CLEARANCE_EPS) {
      violations.push({
        houseId: placement.id,
        code: 'clearance',
        reason: `house ${placement.id} world XZ box is ${placement.clearance.toFixed(6)} m from the road polyline at station ${placement.clearanceAt}, below the required ${required} m`,
        measured: placement.clearance,
        required,
        at: placement.clearanceAt,
      });
    }
  }
  return violations;
}

/**
 * Recompute the sample window for a shifted setback. The required distance
 * grows with the setback, so reusing placeStreet's window would drop segments
 * that were farther than the old requirement but are within the new one.
 * The body radius is taken from the stored box around its own pivot, which
 * matches the mesh reach used by placeStreet without assuming parts are kept.
 */
function shiftedClearanceWindow(result, required) {
  let halfSpan = 0;
  for (const placement of result.placements) {
    const {bbox, pivot} = placement;
    const ex = Math.max(Math.abs(bbox.minX - pivot[0]), Math.abs(bbox.maxX - pivot[0]));
    const ez = Math.max(Math.abs(bbox.minZ - pivot[2]), Math.abs(bbox.maxZ - pivot[2]));
    halfSpan = Math.max(halfSpan, Math.abs(placement.station - result.centerS) + Math.hypot(ex, ez));
  }
  halfSpan += required + CLEARANCE_STEP_M;
  return {
    from: Math.floor(result.centerS - halfSpan),
    to: Math.ceil(result.centerS + halfSpan),
    step: CLEARANCE_STEP_M,
  };
}

/**
 * Place the street standard as rigid bodies beside the road.
 * Returns {schema, centerS, side, setback, requiredClearance, baseOffset,
 * nominalBaseOffset, window, placements, clearance, violations, ok}.
 */
export function placeStreet(parts, sampleRoad, centerS, side, setback) {
  validateCall(sampleRoad, centerS, side, setback);
  const normalized = normalizeParts(parts);

  const rows = normalized.map(({part, bounds}) => {
    const station = centerS + part.pivot[0];
    if (!isFiniteNumber(station)) {
      fail('invalid_parts', `Part ${part.name} produced a non-finite station`, {houseId: part.name});
    }
    const frame = frameAt(sampleRoad, station, {houseId: part.name, phase: 'placement'});
    return {part, bounds, station, frame};
  });

  const required = CLEARANCE_BASE_M + setback;
  const nominalBaseOffset = required -
    Math.min(...rows.map(({part, bounds}) => part.pivot[2] + bounds.min[2]));
  const window = clearanceWindow(centerS, rows, required);
  const segments = buildPolyline(sampleRoad, window);

  let baseOffset = nominalBaseOffset;
  let placements = placeAtBase(rows, side, baseOffset);
  let overall = measurePlacements(placements, segments);
  if (overall.min < required - CLEARANCE_EPS) {
    const fitTarget = required + FIT_MARGIN_M;
    for (let step = 0; step < MAX_FIT_STEPS; step++) {
      const deficit = fitTarget - overall.min;
      if (deficit <= CLEARANCE_EPS) break;
      const next = baseOffset + deficit + CLEARANCE_EPS;
      if (!Number.isFinite(next) || next === baseOffset) break;
      baseOffset = next;
      const previousMin = overall.min;
      placements = placeAtBase(rows, side, baseOffset);
      overall = measurePlacements(placements, segments);
      // A radial move that stops improving means the road polyline crosses the
      // row elsewhere; report the violation instead of walking a huge offset.
      if (overall.min <= previousMin + 1e-6) break;
    }
  }

  // Final evaluation at the committed base offset.
  placements = placeAtBase(rows, side, baseOffset);
  overall = measurePlacements(placements, segments);
  const violations = clearanceViolations(placements, required);

  return {
    schema: STREET_PLACEMENT_SCHEMA,
    centerS,
    side,
    setback,
    requiredClearance: required,
    nominalBaseOffset,
    baseOffset,
    matrixAppliesTo: 'part.sourceData mesh coordinates; pivot.x selects the station and pivot.z is folded into the lateral offset',
    doorLocal: [...DOOR_LOCAL],
    window,
    placements,
    clearance: overall.min,
    violations,
    ok: violations.length === 0,
  };
}

/**
 * Second-pass adjustment: move an existing placement outward by `delta`
 * metres along the R axis at the same stations. Rotation (linear 3x3), mesh,
 * materials and dimensions are left untouched.
 */
export function shiftSetback(result, sampleRoad, delta) {
  if (!result || result.schema !== STREET_PLACEMENT_SCHEMA || !Array.isArray(result.placements)) {
    fail('invalid_result', 'shiftSetback expects a result from placeStreet');
  }
  if (typeof sampleRoad !== 'function') {
    fail('invalid_sample_road', 'sampleRoad must be a function');
  }
  if (!isFiniteNumber(delta)) {
    fail('invalid_setback', `setback delta must be a finite number of metres (received ${String(delta)})`);
  }
  const setback = result.setback + delta;
  if (setback < 0) {
    fail('invalid_setback', `resulting setback must be non-negative (received ${setback})`);
  }
  const required = CLEARANCE_BASE_M + setback;
  const window = shiftedClearanceWindow(result, required);
  const segments = buildPolyline(sampleRoad, window);
  const placements = result.placements.map(placement => {
    // Re-validate that the stored Z axis is still the side*R of the same station.
    const frame = frameAt(sampleRoad, placement.station, {houseId: placement.id, phase: 'shift'});
    const expectedZ = [result.side * frame.R[0], result.side * frame.R[2]];
    if (Math.abs(placement.matrix[8] - expectedZ[0]) > FRAME_EPS ||
        Math.abs(placement.matrix[10] - expectedZ[1]) > FRAME_EPS) {
      fail('stale_frame', `Stored frame for house ${placement.id} at station ${placement.station} no longer matches sampleRoad`,
        {houseId: placement.id, station: placement.station});
    }
    const zx = placement.matrix[8], zz = placement.matrix[10];
    const shiftX = delta * zx, shiftZ = delta * zz;
    const matrix = placement.matrix.slice();
    matrix[12] += shiftX;
    matrix[14] += shiftZ;
    const next = {
      ...placement,
      pivot: [placement.pivot[0] + shiftX, placement.pivot[1], placement.pivot[2] + shiftZ],
      matrix,
      bbox: {
        minX: placement.bbox.minX + shiftX,
        maxX: placement.bbox.maxX + shiftX,
        minY: placement.bbox.minY,
        maxY: placement.bbox.maxY,
        minZ: placement.bbox.minZ + shiftZ,
        maxZ: placement.bbox.maxZ + shiftZ,
      },
    };
    return next;
  });

  const overall = measurePlacements(placements, segments);
  const violations = clearanceViolations(placements, required);
  return {
    ...result,
    setback,
    requiredClearance: required,
    nominalBaseOffset: result.nominalBaseOffset + delta,
    baseOffset: result.baseOffset + delta,
    window,
    placements,
    clearance: overall.min,
    violations,
    ok: violations.length === 0,
    shiftedFrom: {setback: result.setback, delta},
  };
}
