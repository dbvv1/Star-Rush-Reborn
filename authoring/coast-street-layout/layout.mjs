// CPU-only conservative footprint filter for street rows already placed by
// ../coast-street-placement/adapter.mjs.
//
// Contract (see README.md):
//   planStreetRows(parts, sampleRoad, rows, minGap = 0.5)
//     -> {accepted, rejected}
//   checkPlacedStreetRows(parts, placedRows, minGap = 0.5)
//     -> {accepted, rejected}
//
// planStreetRows only sorts and calls placeStreet once per row, then delegates
// every acceptance decision to checkPlacedStreetRows. checkPlacedStreetRows
// accepts existing placeStreet / shiftSetback results, validates them, and
// never re-places or moves anything. It keeps the original placement matrices
// and road clearance values in accepted rows.
//
// Footprints are the world XZ convex hulls of each part's real localXZHull
// points transformed by that placement's original 4x4 matrix. A row is
// accepted only when every pair of its houses, and every pair against houses
// in all previously accepted rows, is strictly disjoint (no intersection,
// containment or boundary contact) and at least minGap metres apart measured
// between all edge segments. The whole row is accepted or rejected; nothing is
// deleted, moved, scaled or stretched. This is a conservative 2D footprint
// contract, not full 3D triangle collision.
import {
  STREET_PLACEMENT_SCHEMA,
  StreetPlacementError,
  localXZHull,
  placeStreet,
} from '../coast-street-placement/adapter.mjs';

export const DEFAULT_MIN_GAP_M = 0.5;
// Conservative boundary-contact tolerance in metres. It may reject tiny
// apparent separations caused by roundoff, but never lowers the requested
// minGap: computed distances are compared against that threshold directly.
export const LAYOUT_EPS = 1e-9;

const MATRIX_EPS = 1e-6;

export class StreetLayoutError extends StreetPlacementError {
  constructor(code, message, details = {}) {
    super(code, message, details);
    this.name = 'StreetLayoutError';
  }
}

function fail(code, message, details = {}) {
  throw new StreetLayoutError(code, message, details);
}

const isFiniteNumber = value => typeof value === 'number' && Number.isFinite(value);

function rowLabel(row) {
  return `centerS=${row.centerS} side=${row.side} setback=${row.setback}`;
}

function readRowFields(source, context) {
  const centerS = source?.centerS;
  const side = source?.side;
  const setback = source?.setback;
  if (!isFiniteNumber(centerS)) {
    fail('invalid_center',
      `${context}: centerS must be a finite number (received ${String(centerS)})`,
      {centerS});
  }
  if (side !== -1 && side !== 1) {
    fail('invalid_side',
      `${context}: side must be -1 or 1 (received ${String(side)})`,
      {centerS, side});
  }
  if (!isFiniteNumber(setback) || setback < 0) {
    fail('invalid_setback',
      `${context}: setback must be a finite non-negative number of metres (received ${String(setback)})`,
      {centerS, side, setback});
  }
  return {centerS, side, setback};
}

function validateMinGap(minGap) {
  if (!isFiniteNumber(minGap) || minGap < 0) {
    fail('invalid_min_gap',
      `minGap must be a finite non-negative number of metres (received ${String(minGap)})`,
      {minGap});
  }
}

function normalizeRow(row, rowIndex) {
  if (!row || typeof row !== 'object' || Array.isArray(row)) {
    fail('invalid_row', `rows[${rowIndex}] must be an object`, {rowIndex});
  }
  return readRowFields(row, `rows[${rowIndex}]`);
}

function validateRows(rows) {
  if (!Array.isArray(rows)) {
    fail('invalid_rows', 'rows must be an array of {centerS, side, setback} objects');
  }
  const normalized = rows.map(normalizeRow);
  const seen = new Map();
  normalized.forEach((row, index) => {
    const key = `${row.centerS}|${row.side}`;
    if (seen.has(key)) {
      fail('duplicate_row',
        `Duplicate row centerS=${row.centerS} side=${row.side} at rows[${seen.get(key)}] and rows[${index}]`,
        {centerS: row.centerS, side: row.side, rowIndexes: [seen.get(key), index]});
    }
    seen.set(key, index);
  });
  return normalized;
}

// Deterministic evaluation order: centerS ascending, side -1 before +1, and
// the original input index as the final stable tie-breaker. Duplicate
// centerS/side pairs are rejected before this point, so the index only makes
// stability explicit.
function sortedEntries(entries) {
  return entries.slice().sort((a, b) =>
    a.row.centerS - b.row.centerS ||
    a.row.side - b.row.side ||
    a.inputIndex - b.inputIndex);
}

function indexParts(parts) {
  if (!Array.isArray(parts) || parts.length === 0) {
    fail('invalid_parts', 'parts must be a non-empty array of parsed street parts');
  }
  const byName = new Map();
  for (const part of parts) {
    if (!part || typeof part !== 'object') {
      fail('invalid_parts', 'Every part must be an object');
    }
    if (typeof part.name !== 'string' || !part.name) {
      fail('invalid_parts', 'Every part needs a non-empty string name');
    }
    if (byName.has(part.name)) {
      fail('invalid_parts', `Duplicate part name ${part.name}`, {houseId: part.name});
    }
    const data = part.sourceData;
    if (!data || typeof data.length !== 'number' || data.length === 0 || data.length % 10 !== 0) {
      fail('invalid_parts', `Part ${part.name} needs a non-empty stride-10 sourceData buffer`,
        {houseId: part.name});
    }
    for (let i = 0; i < data.length; i++) {
      if (!isFiniteNumber(data[i])) {
        fail('invalid_parts', `Part ${part.name} has a non-finite vertex coordinate`,
          {houseId: part.name});
      }
    }
    const hull = localXZHull(part);
    if (!Array.isArray(hull) || hull.length < 3) {
      fail('invalid_parts', `Part ${part.name} footprint hull needs at least 3 distinct XZ points`,
        {houseId: part.name});
    }
    for (const point of hull) {
      if (!Array.isArray(point) || point.length !== 2 || !point.every(isFiniteNumber)) {
        fail('invalid_parts', `Part ${part.name} has an invalid footprint hull point`,
          {houseId: part.name});
      }
    }
    byName.set(part.name, part);
  }
  return byName;
}

// A placed matrix must still be the rigid yaw+translation the adapter
// produced: finite, affine bottom row, Y up, horizontal unit X/Z axes, and a
// right-handed basis with determinant 1. shiftSetback preserves all of this.
function validateMatrix(matrix, houseId) {
  const label = `house ${houseId}`;
  if (!Array.isArray(matrix) || matrix.length !== 16) {
    fail('invalid_matrix', `${label} matrix must be a 16-element column-major 4x4`,
      {houseId});
  }
  for (let index = 0; index < 16; index++) {
    const value = matrix[index];
    if (!isFiniteNumber(value)) {
      fail('invalid_matrix', `${label} matrix[${index}] is not finite (${String(value)})`,
        {houseId, index});
    }
  }
  if (Math.abs(matrix[3]) > MATRIX_EPS || Math.abs(matrix[7]) > MATRIX_EPS ||
      Math.abs(matrix[11]) > MATRIX_EPS || Math.abs(matrix[15] - 1) > MATRIX_EPS) {
    fail('invalid_matrix', `${label} matrix bottom row must be [0, 0, 0, 1]`, {houseId});
  }
  if (Math.abs(matrix[4]) > MATRIX_EPS || Math.abs(matrix[5] - 1) > MATRIX_EPS ||
      Math.abs(matrix[6]) > MATRIX_EPS) {
    fail('invalid_matrix', `${label} Y axis must stay [0, 1, 0]`, {houseId});
  }
  const x = [matrix[0], matrix[1], matrix[2]];
  const z = [matrix[8], matrix[9], matrix[10]];
  if (Math.abs(x[1]) > MATRIX_EPS || Math.abs(z[1]) > MATRIX_EPS) {
    fail('invalid_matrix', `${label} X/Z axes must stay horizontal`, {houseId});
  }
  if (Math.abs(Math.hypot(...x) - 1) > MATRIX_EPS ||
      Math.abs(Math.hypot(...z) - 1) > MATRIX_EPS) {
    fail('invalid_matrix', `${label} X/Z axes must be unit length`, {houseId});
  }
  if (Math.abs(x[0] * z[0] + x[2] * z[2]) > MATRIX_EPS) {
    fail('invalid_matrix', `${label} X/Z axes must be orthogonal`, {houseId});
  }
  // x cross y = (-x.z, 0, x.x) must equal z for a right-handed rotation.
  if (Math.abs(-x[2] - z[0]) > MATRIX_EPS || Math.abs(x[0] - z[2]) > MATRIX_EPS) {
    fail('invalid_matrix', `${label} matrix basis is not right-handed`, {houseId});
  }
}

function validateViolations(violations, result) {
  for (const violation of violations) {
    if (!violation || typeof violation !== 'object' ||
        typeof violation.houseId !== 'string' || !violation.houseId) {
      fail('invalid_result',
        `Row ${rowLabel(result)} has a road violation without a house id`,
        {centerS: result.centerS, side: result.side});
    }
    for (const key of ['measured', 'required']) {
      if (!isFiniteNumber(violation[key])) {
        fail('invalid_result',
          `Row ${rowLabel(result)} road violation for ${violation.houseId} has non-finite ${key}`,
          {houseId: violation.houseId});
      }
    }
    if (violation.at !== null && !isFiniteNumber(violation.at)) {
      fail('invalid_result',
        `Row ${rowLabel(result)} road violation for ${violation.houseId} has non-finite at`,
        {houseId: violation.houseId});
    }
  }
}

function validatePlacedRow(result, inputIndex, byName) {
  if (!result || typeof result !== 'object' || Array.isArray(result)) {
    fail('invalid_result', `placedRows[${inputIndex}] must be a placeStreet or shiftSetback result`,
      {inputIndex});
  }
  if (result.schema !== STREET_PLACEMENT_SCHEMA) {
    fail('invalid_result',
      `placedRows[${inputIndex}] schema must be ${STREET_PLACEMENT_SCHEMA} (received ${String(result.schema)})`,
      {inputIndex, schema: result.schema});
  }
  const row = readRowFields(result, `placedRows[${inputIndex}]`);
  if (!Array.isArray(result.placements) || result.placements.length === 0) {
    fail('invalid_result', `Row ${rowLabel(row)} has no placements`, {inputIndex, ...row});
  }
  if (typeof result.ok !== 'boolean') {
    fail('invalid_result', `Row ${rowLabel(row)} ok must be a boolean`, {inputIndex, ...row});
  }
  if (!Array.isArray(result.violations)) {
    fail('invalid_result', `Row ${rowLabel(row)} violations must be an array`, {inputIndex, ...row});
  }
  if (result.ok !== (result.violations.length === 0)) {
    fail('invalid_result',
      `Row ${rowLabel(row)} ok (${result.ok}) disagrees with ${result.violations.length} violations`,
      {inputIndex, ...row});
  }
  if (!isFiniteNumber(result.requiredClearance) || result.requiredClearance < 0) {
    fail('invalid_result', `Row ${rowLabel(row)} requiredClearance must be finite and non-negative`,
      {inputIndex, ...row});
  }
  if (!isFiniteNumber(result.clearance) || result.clearance < 0) {
    fail('invalid_result', `Row ${rowLabel(row)} clearance must be finite and non-negative`,
      {inputIndex, ...row});
  }
  validateViolations(result.violations, row);

  const ids = new Set();
  for (const placement of result.placements) {
    if (!placement || typeof placement !== 'object') {
      fail('invalid_result', `Row ${rowLabel(row)} has a non-object placement`, {inputIndex, ...row});
    }
    const id = placement.id;
    if (typeof id !== 'string' || !id) {
      fail('invalid_result', `Row ${rowLabel(row)} has a placement without a house id`, {inputIndex, ...row});
    }
    if (!byName.has(id)) {
      fail('invalid_result', `Row ${rowLabel(row)} references unknown house ${id}`, {inputIndex, ...row, houseId: id});
    }
    if (ids.has(id)) {
      fail('invalid_result', `Row ${rowLabel(row)} repeats house ${id}`, {inputIndex, ...row, houseId: id});
    }
    ids.add(id);
    if (!isFiniteNumber(placement.station)) {
      fail('invalid_result', `House ${id} in row ${rowLabel(row)} has a non-finite station`,
        {inputIndex, ...row, houseId: id});
    }
    if (!isFiniteNumber(placement.clearance) || placement.clearance < 0) {
      fail('invalid_result', `House ${id} in row ${rowLabel(row)} has a non-finite clearance`,
        {inputIndex, ...row, houseId: id});
    }
    validateMatrix(placement.matrix, id);
  }
  // Unknown and duplicate IDs were rejected above, so equal set sizes also
  // prove completeness. The required set comes from parts, not a fixed count.
  if (ids.size !== byName.size) {
    const missingHouseIds = [...byName.keys()].filter(id => !ids.has(id));
    fail('invalid_result',
      `Row ${rowLabel(row)} is missing placements for ${missingHouseIds.join(', ')}`,
      {inputIndex, ...row, missingHouseIds});
  }
  return {row, inputIndex, result};
}

function prepare(parts, placedRows, minGap) {
  validateMinGap(minGap);
  const byName = indexParts(parts);
  if (!Array.isArray(placedRows)) {
    fail('invalid_rows', 'placedRows must be an array of placeStreet or shiftSetback results');
  }
  const entries = placedRows.map((result, inputIndex) =>
    validatePlacedRow(result, inputIndex, byName));
  const seen = new Map();
  for (const entry of entries) {
    const key = `${entry.row.centerS}|${entry.row.side}`;
    if (seen.has(key)) {
      fail('duplicate_row',
        `Duplicate placed row centerS=${entry.row.centerS} side=${entry.row.side} at placedRows[${seen.get(key)}] and placedRows[${entry.inputIndex}]`,
        {centerS: entry.row.centerS, side: entry.row.side,
          rowIndexes: [seen.get(key), entry.inputIndex]});
    }
    seen.set(key, entry.inputIndex);
  }
  return {byName, entries: sortedEntries(entries)};
}

function worldHull(part, matrix) {
  return localXZHull(part).map(([x, z]) => [
    matrix[0] * x + matrix[8] * z + matrix[12],
    matrix[2] * x + matrix[10] * z + matrix[14],
  ]);
}

function projection(polygon, axis) {
  let min = Infinity, max = -Infinity;
  for (const point of polygon) {
    const value = point[0] * axis[0] + point[1] * axis[1];
    if (value < min) min = value;
    if (value > max) max = value;
  }
  return {min, max};
}

function edgeAxes(polygon) {
  const axes = [];
  for (let i = 0; i < polygon.length; i++) {
    const a = polygon[i], b = polygon[(i + 1) % polygon.length];
    const dx = b[0] - a[0], dz = b[1] - a[1];
    const length = Math.hypot(dx, dz);
    if (length > LAYOUT_EPS) axes.push([-dz / length, dx / length]);
  }
  return axes;
}

/**
 * Separating-axis test for two convex XZ polygons. Touching and containment
 * both count as overlap. `depth` is the smallest projection overlap in metres,
 * so 0 includes numerical boundary contact and positive values mean
 * penetration. Separations within LAYOUT_EPS are conservatively contact.
 */
function polygonOverlap(a, b) {
  let depth = Infinity;
  for (const polygon of [a, b]) {
    for (const axis of edgeAxes(polygon)) {
      const pa = projection(a, axis), pb = projection(b, axis);
      const overlap = Math.min(pa.max, pb.max) - Math.max(pa.min, pb.min);
      if (overlap < -LAYOUT_EPS) return {overlap: false, depth: 0};
      if (overlap < depth) depth = Math.max(0, overlap);
    }
  }
  return {overlap: true, depth: depth === Infinity ? 0 : depth};
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

function pointSegmentDistance(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const lengthSq = dx * dx + dz * dz;
  let t = lengthSq ? ((px - ax) * dx + (pz - az) * dz) / lengthSq : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t));
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

/** Shortest distance between all edge segments of two disjoint polygons. */
function polygonDistance(a, b) {
  let min = Infinity;
  for (let i = 0; i < a.length; i++) {
    const a0 = a[i], a1 = a[(i + 1) % a.length];
    for (let j = 0; j < b.length; j++) {
      const d = segmentDistance(a0, a1, b[j], b[(j + 1) % b.length]);
      if (d < min) min = d;
    }
  }
  return min;
}

/**
 * Inspect one pair of world footprints. `pass` is true only when the polygons
 * are disjoint and their shortest edge distance is at least minGap. Boundary
 * contact is overlap, so it never passes, even with minGap 0.
 */
function pairRecord(houseA, rowA, polygonA, houseB, rowB, polygonB, minGap, sameRow) {
  const sat = polygonOverlap(polygonA, polygonB);
  const edgeDistance = sat.overlap ? 0 : polygonDistance(polygonA, polygonB);
  // The edge test is also a conservative contact guard when projection
  // roundoff makes SAT report separation. In particular, distance 0 must
  // never pass even when minGap is 0.
  const overlap = sat.overlap || edgeDistance <= LAYOUT_EPS;
  const overlapDepth = sat.overlap ? sat.depth : 0;
  const distance = overlap ? 0 : edgeDistance;
  const gapShort = !overlap && distance < minGap;
  const pass = !overlap && !gapShort;
  return {
    sameRow,
    rows: [
      {centerS: rowA.centerS, side: rowA.side, setback: rowA.setback},
      {centerS: rowB.centerS, side: rowB.side, setback: rowB.setback},
    ],
    houseIds: [houseA, houseB],
    overlap,
    overlapDepth,
    boundaryContact: overlap && overlapDepth <= LAYOUT_EPS,
    distance,
    minGap,
    pass,
    code: overlap ? 'footprint-overlap' : (gapShort ? 'footprint-gap' : null),
    measured: overlap ? overlapDepth : distance,
    required: overlap ? 0 : minGap,
  };
}

function pairReason(pair) {
  if (pair.pass) return null;
  const [a, b] = pair.houseIds;
  const where = pair.sameRow
    ? `in the same row ${rowLabel(pair.rows[0])}`
    : `between rows ${rowLabel(pair.rows[0])} and ${rowLabel(pair.rows[1])}`;
  const reason = {
    code: pair.code,
    houseIds: [...pair.houseIds],
    rows: pair.rows.map(row => ({...row})),
    sameRow: pair.sameRow,
    measured: pair.measured,
    required: pair.required,
    message: '',
  };
  if (pair.code === 'footprint-overlap') {
    reason.overlapDepth = pair.overlapDepth;
    reason.boundaryContact = pair.boundaryContact;
    reason.message =
      `houses ${a} and ${b} world XZ footprints overlap by ${pair.overlapDepth.toFixed(6)} m ` +
      `(${pair.boundaryContact ? 'boundary contact' : 'penetration'}) ${where}`;
  } else {
    reason.distance = pair.distance;
    reason.message =
      `houses ${a} and ${b} shortest footprint edge distance ${pair.distance.toFixed(6)} m ` +
      `is below minGap ${pair.minGap} m ${where}`;
  }
  return reason;
}

function rowHouseIds(entry) {
  return entry.result.placements.map(placement => placement.id);
}

function reasonHouseIds(reasons, fallback) {
  const ids = new Set();
  for (const reason of reasons) for (const id of reason.houseIds) ids.add(id);
  if (ids.size === 0) for (const id of fallback) ids.add(id);
  return [...ids].sort();
}

function publicPlacements(result) {
  return result.placements.map(placement => placement);
}

function acceptEntry(entry) {
  const {row, result} = entry;
  return {
    row: {...row},
    inputIndex: entry.inputIndex,
    ok: result.ok,
    violations: result.violations,
    requiredClearance: result.requiredClearance,
    clearance: result.clearance,
    nominalBaseOffset: result.nominalBaseOffset,
    baseOffset: result.baseOffset,
    placements: publicPlacements(result),
  };
}

function rejectEntry(entry, reasons) {
  const {row, result} = entry;
  return {
    row: {...row},
    inputIndex: entry.inputIndex,
    houseIds: reasonHouseIds(reasons, rowHouseIds(entry)),
    reasons,
    source: {
      ok: result.ok,
      violations: result.violations,
      requiredClearance: result.requiredClearance,
      clearance: result.clearance,
    },
  };
}

/**
 * Validate and filter already-placed rows. Never re-places: it only reads the
 * stored centerS/side/setback, ok/violations, matrices and clearance values.
 */
export function checkPlacedStreetRows(parts, placedRows, minGap = DEFAULT_MIN_GAP_M) {
  const {byName, entries} = prepare(parts, placedRows, minGap);
  const accepted = [];
  const rejected = [];
  const acceptedGeometry = [];

  for (const entry of entries) {
    const {row, result} = entry;
    if (!result.ok) {
      const reasons = result.violations.map(violation => ({
        code: 'road-clearance',
        houseIds: [violation.houseId],
        rows: [{...row}, {...row}],
        sameRow: true,
        measured: violation.measured,
        required: violation.required,
        at: violation.at ?? null,
        message: violation.reason ?? `house ${violation.houseId} is below the road clearance ${violation.required} m`,
      }));
      rejected.push(rejectEntry(entry, reasons));
      continue;
    }

    const geometry = result.placements.map(placement => ({
      id: placement.id,
      polygon: worldHull(byName.get(placement.id), placement.matrix),
    }));

    const reasons = [];
    for (let i = 0; i < geometry.length; i++) {
      for (let j = i + 1; j < geometry.length; j++) {
        const pair = pairRecord(
          geometry[i].id, row, geometry[i].polygon,
          geometry[j].id, row, geometry[j].polygon,
          minGap, true);
        const reason = pairReason(pair);
        if (reason) reasons.push(reason);
      }
    }
    for (const other of acceptedGeometry) {
      for (const mine of geometry) {
        for (const theirs of other.geometry) {
          const pair = pairRecord(
            theirs.id, other.row, theirs.polygon,
            mine.id, row, mine.polygon,
            minGap, false);
          const reason = pairReason(pair);
          if (reason) reasons.push(reason);
        }
      }
    }

    if (reasons.length) {
      rejected.push(rejectEntry(entry, reasons));
    } else {
      accepted.push(acceptEntry(entry));
      acceptedGeometry.push({row, geometry});
    }
  }

  return {accepted, rejected};
}

/**
 * Inspect all house pairs across the supplied placed rows without filtering.
 * Used by the report and reviews to check named rows (for example 600/-1 or
 * the 640 and 680 +1 pair) even when a row would fail its own same-row check
 * and therefore never appear in an accepted set.
 */
export function inspectStreetRowPairs(parts, placedRows, minGap = DEFAULT_MIN_GAP_M) {
  const {byName, entries} = prepare(parts, placedRows, minGap);
  const rows = entries.map(entry => {
    if (!entry.result.ok) {
      // Geometry is still well-defined for a road-rejected placement, but the
      // caller asked for footprint inspection, so report the road status
      // separately instead of silently pretending the row is placeable.
      return {
        row: {...entry.row},
        inputIndex: entry.inputIndex,
        roadOk: false,
        geometry: entry.result.placements.map(placement => ({
          id: placement.id,
          polygon: worldHull(byName.get(placement.id), placement.matrix),
        })),
      };
    }
    return {
      row: {...entry.row},
      inputIndex: entry.inputIndex,
      roadOk: true,
      geometry: entry.result.placements.map(placement => ({
        id: placement.id,
        polygon: worldHull(byName.get(placement.id), placement.matrix),
      })),
    };
  });

  const pairs = [];
  for (let i = 0; i < rows.length; i++) {
    for (let a = 0; a < rows[i].geometry.length; a++) {
      for (let b = a + 1; b < rows[i].geometry.length; b++) {
        pairs.push(pairRecord(
          rows[i].geometry[a].id, rows[i].row, rows[i].geometry[a].polygon,
          rows[i].geometry[b].id, rows[i].row, rows[i].geometry[b].polygon,
          minGap, true));
      }
    }
    for (let j = i + 1; j < rows.length; j++) {
      for (const mine of rows[i].geometry) {
        for (const theirs of rows[j].geometry) {
          pairs.push(pairRecord(
            mine.id, rows[i].row, mine.polygon,
            theirs.id, rows[j].row, theirs.polygon,
            minGap, false));
        }
      }
    }
  }
  return {rows: rows.map(({row, inputIndex, roadOk}) => ({row, inputIndex, roadOk})), pairs};
}

/**
 * Place each row through the accepted adapter, then delegate every acceptance
 * decision to checkPlacedStreetRows. No footprint logic is duplicated here.
 */
export function planStreetRows(parts, sampleRoad, rows, minGap = DEFAULT_MIN_GAP_M) {
  const normalized = validateRows(rows);
  validateMinGap(minGap);
  const entries = sortedEntries(normalized.map((row, inputIndex) => ({row, inputIndex})));
  const placedRows = entries.map(({row}) =>
    placeStreet(parts, sampleRoad, row.centerS, row.side, row.setback));
  const plan = checkPlacedStreetRows(parts, placedRows, minGap);
  // checkPlacedStreetRows numbers its input array; map that position back to
  // the caller's original row index so accepted/rejected items can be traced
  // to the rows array that was passed in, not to the sorted evaluation order.
  const originalIndex = new Map(entries.map((entry, position) => [position, entry.inputIndex]));
  for (const item of [...plan.accepted, ...plan.rejected]) {
    item.inputIndex = originalIndex.get(item.inputIndex);
  }
  return plan;
}
