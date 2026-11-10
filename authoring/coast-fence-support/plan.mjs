// CPU-only conservative rigid placement for the two fixed-source coastal
// fences in assets/coast-verge/verge.glb.
//
// Contract (see README.md):
//   planFenceSupports(parts, model, sampleRoad, samples, rows)
//     -> {schema, parts, rows, accepted, rejected, summary}
//
// Each row is {s, side, setback}. Every part in `parts` is placed at the row
// station with one rigid yaw+translation: local +X follows side*T, local +Z
// follows side*R, +Y stays up. The whole part is then moved only in Y so its
// horizontal bottom edge sits at (minimum terrain height - 0.02 m). Nothing is
// scaled, stretched, reflected, tipped, re-pivoted or snapped per vertex.
//
// Acceptance is deliberately conservative and per source mesh:
//   - the horizontal footprint must stay inside the bounded model grid;
//   - every consecutive pair of real road samples must be >= 12 m away;
//   - every model.street.instances footprint must be >= 1 m away;
//   - the two fences and every existing model.verge.instances bush must be
//     >= 0.5 m away;
//   - the whole-cell terrain range must not fall into water (< -0.65 m) and
//     must not span more than 0.18 m of relief.
// These are bounds over real source vertices and terrain cells, not a claim
// that the fence can sit on any slope. Rejected rows are reported, never moved
// or deleted to make a candidate pass.
import {decodeStandardPart} from '../coast-street-placement/fixed-source/upstream-adapter.mjs';
import {boxSegmentDistance, validateFrame} from '../coast-street-placement/adapter.mjs';
import {vergeTerrainRange} from '../../coast-verge-runtime.mjs';

export const FENCE_SUPPORT_SCHEMA = 1;
export const FENCE_SOURCE_SHA256 = '0479af55bd3bcc937739aa49648ce4ecc41d739279d548af28ead8df7b433d15';
export const FENCE_SOURCE_BYTES = 150500;
export const ROAD_CLEARANCE_M = 12;
export const HOUSE_CLEARANCE_M = 1;
export const FENCE_GAP_M = 0.5;
export const BUSH_GAP_M = 0.5;
// The runtime verge consumer treats anything below this as water; the actual
// sea top is -0.82 m and this adds a 0.17 m dry margin.
export const WATER_MIN_Y = -0.65;
export const MAX_RELIEF_M = 0.18;
export const BASE_EMBED_M = 0.02;

const POSITION_STRIDE = 10;

export class FenceSupportError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = 'FenceSupportError';
    this.code = code;
    this.details = details;
    for (const [key, value] of Object.entries(details)) {
      if (!(key in this)) this[key] = value;
    }
  }
}

function fail(code, message, details = {}) {
  throw new FenceSupportError(code, message, details);
}

const isFiniteNumber = value => typeof value === 'number' && Number.isFinite(value);
const isVector3 = value =>
  Array.isArray(value) && value.length === 3 && value.every(isFiniteNumber);

function copyRow(row) {
  return {s: row.s, side: row.side, setback: row.setback};
}

function rowLabel(row, index) {
  return `rows[${index}] s=${row.s} side=${row.side} setback=${row.setback}`;
}

// ---------------------------------------------------------------------------
// Fixed source
// ---------------------------------------------------------------------------

/**
 * Decode the pinned verge source through the repository's existing GLB
 * decoder and keep exactly the two fence parts. The six bushes stay in the
 * preserved source but are not consumed here.
 */
export function decodeFenceParts(source) {
  let bytes;
  if (source instanceof Uint8Array) bytes = source;
  else if (ArrayBuffer.isView(source)) bytes = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
  else if (source instanceof ArrayBuffer) bytes = new Uint8Array(source);
  else fail('invalid_source', 'decodeFenceParts expects a Uint8Array or ArrayBuffer');

  let all;
  try {
    all = decodeStandardPart(bytes);
  } catch (error) {
    fail('invalid_source', `Fixed-source verge GLB rejected: ${error.message}`, {reason: error.message});
  }
  const fences = all.filter(part => typeof part?.name === 'string' && /^fence-/.test(part.name));
  if (fences.length !== 2) {
    fail('invalid_parts', `Expected exactly two fence meshes in the fixed source, found ${fences.length}`);
  }
  const names = new Set(fences.map(part => part.name));
  if (names.size !== 2) fail('invalid_parts', 'Fixed-source fence mesh names are not unique');
  return fences;
}

function partGeometry(part) {
  if (!part || typeof part !== 'object') fail('invalid_parts', 'Fence part must be an object');
  if (typeof part.name !== 'string' || !part.name) fail('invalid_parts', 'Fence part is missing a string name');
  if (!isVector3(part.pivot)) fail('invalid_parts', `Part ${part.name} has an invalid pivot`, {partId: part.name});
  const data = part.sourceData;
  if (!data || typeof data.length !== 'number' || data.length === 0 || data.length % POSITION_STRIDE !== 0) {
    fail('invalid_parts', `Part ${part.name} sourceData must be a non-empty multiple of stride ${POSITION_STRIDE}`, {partId: part.name});
  }
  if (!part.sourceIndices || typeof part.sourceIndices.length !== 'number' || part.sourceIndices.length % 3 !== 0) {
    fail('invalid_parts', `Part ${part.name} sourceIndices must be triangle indices`, {partId: part.name});
  }
  let minY = Infinity;
  for (let i = 0; i < data.length; i += POSITION_STRIDE) {
    for (let k = 0; k < 3; k++) {
      if (!isFiniteNumber(data[i + k])) {
        fail('invalid_parts', `Part ${part.name} has a non-finite vertex coordinate`, {partId: part.name});
      }
    }
    const y = data[i + 1] + part.pivot[1];
    if (y < minY) minY = y;
  }
  return {part, minY};
}

function normalizeParts(parts) {
  if (!Array.isArray(parts) || parts.length !== 2) {
    fail('invalid_parts', `planFenceSupports requires exactly the two fence parts, received ${Array.isArray(parts) ? parts.length : typeof parts}`);
  }
  const seen = new Set();
  return parts.map(part => {
    const geometry = partGeometry(part);
    if (seen.has(part.name)) fail('invalid_parts', `Duplicate fence part ${part.name}`, {partId: part.name});
    seen.add(part.name);
    return geometry;
  }).sort((a, b) => a.part.name < b.part.name ? -1 : a.part.name > b.part.name ? 1 : 0);
}

// ---------------------------------------------------------------------------
// Inputs
// ---------------------------------------------------------------------------

function validateModel(model) {
  if (!model || typeof model !== 'object') fail('invalid_model', 'model must be an object');
  const bounds = model.bounds;
  if (!bounds || typeof bounds !== 'object') fail('invalid_model', 'model.bounds is required');
  for (const key of ['x0', 'x1', 'z0', 'z1', 'step']) {
    if (!isFiniteNumber(bounds[key])) fail('invalid_model', `model.bounds.${key} must be a finite number`);
  }
  if (bounds.step <= 0) fail('invalid_model', 'model.bounds.step must be positive');
  if (bounds.x1 <= bounds.x0 || bounds.z1 <= bounds.z0) fail('invalid_model', 'model.bounds must be a non-empty rectangle');
  if (!Array.isArray(model.vertices)) fail('invalid_model', 'model.vertices must be an array');
  const nx = Math.round((bounds.x1 - bounds.x0) / bounds.step);
  const nz = Math.round((bounds.z1 - bounds.z0) / bounds.step);
  if (model.vertices.length < (nx + 1) * (nz + 1)) {
    fail('invalid_model', `model.vertices has ${model.vertices.length} entries, needs ${(nx + 1) * (nz + 1)} for the ${nx}x${nz} grid`);
  }
  if (!Array.isArray(model.street?.instances)) fail('invalid_model', 'model.street.instances must be an array');
  if (!Array.isArray(model.verge?.instances)) fail('invalid_model', 'model.verge.instances must be an array');
  for (const [index, entry] of model.street.instances.entries()) {
    const box = entry?.placement?.bbox;
    validateBox(box, `model.street.instances[${index}].placement.bbox`);
  }
  for (const [index, entry] of model.verge.instances.entries()) {
    validateBox(entry?.bbox, `model.verge.instances[${index}].bbox`);
  }
}

function validateBox(box, label) {
  if (!box || typeof box !== 'object') fail('invalid_model', `${label} is required`);
  for (const key of ['minX', 'maxX', 'minZ', 'maxZ']) {
    if (!isFiniteNumber(box[key])) fail('invalid_model', `${label}.${key} must be a finite number`);
  }
  if (box.maxX < box.minX || box.maxZ < box.minZ) fail('invalid_model', `${label} is inverted`);
}

function validateSamples(sampleRoad, samples) {
  if (typeof sampleRoad !== 'function') fail('invalid_sample_road', 'sampleRoad must be a function');
  if (!Array.isArray(samples) || samples.length < 2) {
    fail('invalid_samples', 'samples must be an array with at least two real road frames');
  }
  for (const [index, sample] of samples.entries()) {
    const p = sample?.p;
    if (!Array.isArray(p) || p.length < 3 || !isFiniteNumber(p[0]) || !isFiniteNumber(p[2])) {
      fail('invalid_samples', `samples[${index}].p must contain finite world X/Z`, {sampleIndex: index});
    }
  }
}

function normalizeRows(rows) {
  if (!Array.isArray(rows)) fail('invalid_rows', 'rows must be an array of {s, side, setback} objects');
  const normalized = rows.map((row, index) => {
    if (!row || typeof row !== 'object' || Array.isArray(row)) {
      fail('invalid_row', `rows[${index}] must be an object`, {rowIndex: index});
    }
    if (!isFiniteNumber(row.s)) {
      fail('invalid_center', `rows[${index}]: s must be a finite station in metres (received ${String(row.s)})`, {rowIndex: index, s: row.s});
    }
    if (row.side !== -1 && row.side !== 1) {
      fail('invalid_side', `rows[${index}]: side must be -1 or 1 (received ${String(row.side)})`, {rowIndex: index, s: row.s, side: row.side});
    }
    if (!isFiniteNumber(row.setback) || row.setback < 0) {
      fail('invalid_setback', `rows[${index}]: setback must be a finite non-negative number of metres (received ${String(row.setback)})`, {rowIndex: index, s: row.s, side: row.side, setback: row.setback});
    }
    return {s: row.s, side: row.side, setback: row.setback};
  });
  const seen = new Map();
  normalized.forEach((row, index) => {
    const key = `${row.s}|${row.side}`;
    if (seen.has(key)) {
      fail('duplicate_row',
        `Duplicate row s=${row.s} side=${row.side} at rows[${seen.get(key)}] and rows[${index}]`,
        {s: row.s, side: row.side, rowIndexes: [seen.get(key), index]});
    }
    seen.set(key, index);
  });
  return normalized;
}

function frameAt(sampleRoad, station, row, index) {
  let frame;
  try {
    frame = sampleRoad(station);
  } catch (error) {
    fail('invalid_frame', `sampleRoad threw for ${rowLabel(row, index)}: ${error.message}`, {s: station, rowIndex: index, reason: error.message});
  }
  try {
    validateFrame(frame, station, {phase: 'placement'});
  } catch (error) {
    fail('invalid_frame', `Invalid road frame for ${rowLabel(row, index)}: ${error.message}`, {s: station, rowIndex: index, reason: error.message});
  }
  return frame;
}

// ---------------------------------------------------------------------------
// Geometry
// ---------------------------------------------------------------------------

// Conservative axis-aligned gap between two world XZ boxes. Touching or
// overlapping boxes return 0. Because each box bounds the real mesh, this is a
// lower bound on the true footprint separation and can only cause rejection.
export function boxGap(a, b) {
  const dx = Math.max(b.minX - a.maxX, a.minX - b.maxX, 0);
  const dz = Math.max(b.minZ - a.maxZ, a.minZ - b.maxZ, 0);
  return Math.hypot(dx, dz);
}

function horizontalMatrix(part, frame, side, setback) {
  const T = frame.T, R = frame.R;
  const xAxis = [side * T[0], 0, side * T[2]];
  const zAxis = [side * R[0], 0, side * R[2]];
  return [
    xAxis[0], xAxis[1], xAxis[2], 0,
    0, 1, 0, 0,
    zAxis[0], zAxis[1], zAxis[2], 0,
    frame.p[0] + side * setback * R[0], frame.p[1], frame.p[2] + side * setback * R[2], 1,
  ];
}

// Every real source vertex contributes to the horizontal footprint.
function footprint(part, matrix) {
  const data = part.sourceData, pivot = part.pivot;
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (let i = 0; i < data.length; i += POSITION_STRIDE) {
    const x = data[i] + pivot[0], z = data[i + 2] + pivot[2];
    const wx = matrix[0] * x + matrix[8] * z + matrix[12];
    const wz = matrix[2] * x + matrix[10] * z + matrix[14];
    if (wx < minX) minX = wx;
    if (wx > maxX) maxX = wx;
    if (wz < minZ) minZ = wz;
    if (wz > maxZ) maxZ = wz;
  }
  return {minX, maxX, minZ, maxZ};
}

function outsideTerrain(bbox, bounds) {
  return bbox.minX < bounds.x0 || bbox.maxX > bounds.x1 ||
    bbox.minZ < bounds.z0 || bbox.maxZ > bounds.z1;
}

function minRoadDistance(bbox, samples) {
  let min = Infinity;
  for (let i = 1; i < samples.length; i++) {
    const a = samples[i - 1].p, b = samples[i].p;
    const distance = boxSegmentDistance(bbox, [a[0], a[2]], [b[0], b[2]]);
    if (distance < min) min = distance;
  }
  return min;
}

function minBoxDistance(bbox, boxes) {
  let min = Infinity;
  for (const box of boxes) {
    const distance = boxGap(bbox, box);
    if (distance < min) min = distance;
  }
  return min;
}

function streetBoxes(model) {
  return model.street.instances.map(entry => entry.placement.bbox);
}

function bushBoxes(model) {
  return model.verge.instances.map(entry => entry.bbox);
}

function formatMetres(value) {
  return Number.isFinite(value) ? value.toFixed(6) : 'Infinity';
}

function evaluate(candidate, model, samples, rowCandidates, placed, houseBoxes, bushBoxes, bounds) {
  const {bbox} = candidate;
  const clearance = {road: null, house: null, fence: null, bush: null};
  if (outsideTerrain(bbox, bounds)) {
    return {
      terrain: null,
      clearance,
      reason: 'outside',
      detail: `footprint x[${bbox.minX.toFixed(6)},${bbox.maxX.toFixed(6)}] z[${bbox.minZ.toFixed(6)},${bbox.maxZ.toFixed(6)}] leaves terrain bounds x[${bounds.x0},${bounds.x1}] z[${bounds.z0},${bounds.z1}]`,
    };
  }

  clearance.road = minRoadDistance(bbox, samples);
  clearance.house = minBoxDistance(bbox, houseBoxes);
  clearance.bush = minBoxDistance(bbox, bushBoxes);
  let fence = Infinity;
  for (const other of rowCandidates) {
    if (other === candidate) continue;
    const distance = boxGap(bbox, other.bbox);
    if (distance < fence) fence = distance;
  }
  for (const other of placed) {
    const distance = boxGap(bbox, other.bbox);
    if (distance < fence) fence = distance;
  }
  clearance.fence = fence;

  let terrain;
  try {
    terrain = vergeTerrainRange(model, bbox);
  } catch (error) {
    return {
      terrain: null,
      clearance,
      reason: 'outside',
      detail: `conservative terrain range rejected the footprint: ${error.message}`,
    };
  }

  let reason = null, detail = null;
  if (clearance.road < ROAD_CLEARANCE_M) {
    reason = 'road';
    detail = `footprint is ${formatMetres(clearance.road)} m from a real road segment, below ${ROAD_CLEARANCE_M} m`;
  } else if (clearance.house < HOUSE_CLEARANCE_M) {
    reason = 'house';
    detail = `footprint is ${formatMetres(clearance.house)} m from an accepted street house, below ${HOUSE_CLEARANCE_M} m`;
  } else if (terrain.min < WATER_MIN_Y) {
    reason = 'water';
    detail = `whole-cell terrain minimum ${formatMetres(terrain.min)} m is below the dry margin ${WATER_MIN_Y} m`;
  } else if (terrain.max - terrain.min > MAX_RELIEF_M) {
    reason = 'slope';
    detail = `whole-cell terrain relief ${(terrain.max - terrain.min).toFixed(6)} m exceeds ${MAX_RELIEF_M} m`;
  } else if (clearance.fence < FENCE_GAP_M) {
    reason = 'fence';
    detail = `footprint is ${formatMetres(clearance.fence)} m from another fence, below ${FENCE_GAP_M} m`;
  } else if (clearance.bush < BUSH_GAP_M) {
    reason = 'bush';
    detail = `footprint is ${formatMetres(clearance.bush)} m from an existing verge bush, below ${BUSH_GAP_M} m`;
  }
  return {terrain, clearance, reason, detail};
}

/**
 * Place the two fixed-source fences at every requested row.
 * Invalid or duplicate rows are rejected before any placement, so a partly
 * valid input can never produce a silently truncated scene.
 */
export function planFenceSupports(parts, model, sampleRoad, samples, rows) {
  const geometries = normalizeParts(parts);
  validateModel(model);
  validateSamples(sampleRoad, samples);
  const normalized = normalizeRows(rows);
  const houseBoxes = streetBoxes(model);
  const bushBounds = bushBoxes(model);

  const entries = normalized.map((row, inputIndex) => ({row, inputIndex}))
    .sort((a, b) => a.row.s - b.row.s || a.row.side - b.row.side || a.inputIndex - b.inputIndex);
  const accepted = [], rejected = [], placed = [];
  for (const {row, inputIndex} of entries) {
    const frame = frameAt(sampleRoad, row.s, row, inputIndex);
    const rowCandidates = geometries.map(({part, minY}) => {
      const matrix = horizontalMatrix(part, frame, row.side, row.setback);
      return {part, minY, matrix, bbox: footprint(part, matrix)};
    });
    for (const candidate of rowCandidates) {
      const result = evaluate(candidate, model, samples, rowCandidates, placed, houseBoxes, bushBounds, model.bounds);
      const base = {
        partId: candidate.part.name,
        row: copyRow(row),
        inputIndex,
        station: row.s,
        bbox: candidate.bbox,
        terrain: result.terrain,
        clearance: result.clearance,
      };
      if (result.reason) {
        rejected.push({...base, matrix: null, reason: result.reason, detail: result.detail});
        continue;
      }
      const matrix = candidate.matrix.slice();
      const bottom = result.terrain.min - BASE_EMBED_M;
      matrix[13] = bottom - candidate.minY;
      const entry = {
        ...base,
        matrix,
        bottom,
        terrain: {min: result.terrain.min, max: result.terrain.max},
      };
      accepted.push(entry);
      placed.push(entry);
    }
  }
  return {
    schema: FENCE_SUPPORT_SCHEMA,
    matrixAppliesTo: 'part.sourceData mesh coordinates; the whole part is rotated around Y and translated, never scaled',
    constants: {
      roadClearanceM: ROAD_CLEARANCE_M,
      houseClearanceM: HOUSE_CLEARANCE_M,
      fenceGapM: FENCE_GAP_M,
      bushGapM: BUSH_GAP_M,
      waterMinY: WATER_MIN_Y,
      maxReliefM: MAX_RELIEF_M,
      baseEmbedM: BASE_EMBED_M,
    },
    parts: geometries.map(({part}) => part.name),
    rows: normalized,
    accepted,
    rejected,
    summary: {
      rows: normalized.length,
      partsPerRow: geometries.length,
      accepted: accepted.length,
      rejected: rejected.length,
    },
  };
}
