import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
  DEFAULT_MIN_GAP_M,
  StreetLayoutError,
  checkPlacedStreetRows,
  inspectStreetRowPairs,
  planStreetRows,
} from './layout.mjs';
import {
  StreetPlacementError,
  localXZHull,
  placeStreet,
  shiftSetback,
} from '../coast-street-placement/adapter.mjs';
import {
  loadCoastFrameSample,
  meshDigest,
  sha256,
  verifyFixedSource,
} from '../coast-street-placement/fixed-source-contract.mjs';
import {
  coastRoad,
  createFixtureSampleRoad,
  straightRoad,
} from '../coast-street-placement/sample-road.mjs';
import {buildCoastLayoutReport} from './report.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PLACEMENT_DIR = path.resolve(HERE, '../coast-street-placement');
const OUT_FILE = path.join(HERE, 'out', 'coast-layout-320-680.json');
const EPS = 1e-9;
const SETBACK = 4;
const DELTA = 2;

let fixedCache = null;
function fixed() {
  if (!fixedCache) fixedCache = verifyFixedSource();
  return fixedCache;
}

let fixtureCache = null;
function fixtureRoad() {
  if (!fixtureCache) fixtureCache = createFixtureSampleRoad(loadCoastFrameSample().frames);
  return fixtureCache;
}

const clone = value => JSON.parse(JSON.stringify(value));
const rowKey = row => `${row.centerS}/${row.side}`;
const keysOf = items => items.map(item => rowKey(item.row));

function gridRows(setback) {
  const rows = [];
  for (let centerS = 320; centerS <= 680; centerS += 40) {
    for (const side of [-1, 1]) rows.push({centerS, side, setback});
  }
  return rows;
}

function expectLayoutError(fn, code, message) {
  let thrown = null;
  try { fn(); } catch (error) { thrown = error; }
  assert.ok(thrown, `expected ${code}`);
  assert.ok(thrown instanceof StreetLayoutError, `expected StreetLayoutError, got ${thrown?.name}: ${thrown?.message}`);
  assert.ok(thrown instanceof StreetPlacementError, 'StreetLayoutError must stay a StreetPlacementError');
  assert.equal(thrown.code, code, message ?? thrown.message);
  return thrown;
}

// ---------------------------------------------------------------------------
// Synthetic parts and placed results for geometry-only tests
// ---------------------------------------------------------------------------

function makeBoxPart(name, halfX, halfZ, height = 3) {
  const data = [];
  for (const y of [0, height]) {
    for (const [x, z] of [[-halfX, -halfZ], [halfX, -halfZ], [halfX, halfZ], [-halfX, halfZ]]) {
      data.push(x, y, z, 0, 1, 0, 0, 0, 0, 0);
    }
  }
  return {name, action: 'static', pivot: [0, 0, 0], sourceData: data, sourceIndices: []};
}

const HOUSE_IDS = ['house-a', 'house-g', 'house-m'];
const PARTS3 = HOUSE_IDS.map(name => makeBoxPart(name, 2, 1));

function syntheticRow({centerS = 0, side = 1, setback = SETBACK, positions, roadOk = true, violations = []}) {
  const clearance = roadOk ? 100 : 11.5;
  return {
    schema: 1,
    centerS,
    side,
    setback,
    requiredClearance: 8 + setback,
    nominalBaseOffset: 10,
    baseOffset: 10,
    matrixAppliesTo: 'synthetic identity yaw matrices',
    doorLocal: [0, 0, -1],
    window: {from: centerS - 40, to: centerS + 40, step: 1},
    placements: positions.map(({id, x = 0, z = 0}) => ({
      id,
      station: centerS,
      pivot: [x, 0, z],
      matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, 0, z, 1],
      bbox: {minX: x - 10, maxX: x + 10, minY: 0, maxY: 5, minZ: z - 10, maxZ: z + 10},
      clearance,
      clearanceAt: centerS,
      frontDotRoad: 1,
    })),
    ok: roadOk,
    violations,
    clearance,
  };
}

function rowWithOffsets(offsets, {centerS = 0, side = 1, setback = SETBACK, roadOk = true, violations = []} = {}) {
  return syntheticRow({
    centerS,
    side,
    setback,
    roadOk,
    violations,
    positions: offsets.map((x, index) => ({id: HOUSE_IDS[index], x})),
  });
}

function roadViolation(houseId, measured = 11.5, required = 12, at = 400) {
  return {
    houseId,
    code: 'clearance',
    reason: `house ${houseId} world XZ box is ${measured} m from the road polyline at station ${at}, below the required ${required} m`,
    measured,
    required,
    at,
  };
}

// ---------------------------------------------------------------------------
// Independent geometry check used to audit accepted real rows
// ---------------------------------------------------------------------------

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

function auditPair(a, b) {
  let depth = Infinity;
  for (const polygon of [a, b]) {
    for (let i = 0; i < polygon.length; i++) {
      const p = polygon[i], q = polygon[(i + 1) % polygon.length];
      const dx = q[0] - p[0], dz = q[1] - p[1];
      const length = Math.hypot(dx, dz);
      if (length <= EPS) continue;
      const axis = [-dz / length, dx / length];
      const pa = projection(a, axis), pb = projection(b, axis);
      const overlap = Math.min(pa.max, pb.max) - Math.max(pa.min, pb.min);
      if (overlap < 0) return {overlap: false, distance: minEdgeDistance(a, b)};
      depth = Math.min(depth, overlap);
    }
  }
  return {overlap: true, distance: 0, depth: depth === Infinity ? 0 : depth};
}

function pointSegment(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const lengthSq = dx * dx + dz * dz;
  let t = lengthSq ? ((px - ax) * dx + (pz - az) * dz) / lengthSq : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t));
}

function minEdgeDistance(a, b) {
  let min = Infinity;
  for (let i = 0; i < a.length; i++) {
    const a0 = a[i], a1 = a[(i + 1) % a.length];
    for (let j = 0; j < b.length; j++) {
      const b0 = b[j], b1 = b[(j + 1) % b.length];
      min = Math.min(min,
        pointSegment(b0[0], b0[1], a0[0], a0[1], a1[0], a1[1]),
        pointSegment(b1[0], b1[1], a0[0], a0[1], a1[0], a1[1]),
        pointSegment(a0[0], a0[1], b0[0], b0[1], b1[0], b1[1]),
        pointSegment(a1[0], a1[1], b0[0], b0[1], b1[0], b1[1]));
    }
  }
  return min;
}

function auditAcceptedRows(parts, accepted, minGap) {
  const byName = new Map(parts.map(part => [part.name, part]));
  const rows = accepted.map(item => ({
    row: item.row,
    houses: item.placements.map(placement => ({
      id: placement.id,
      polygon: worldHull(byName.get(placement.id), placement.matrix),
    })),
  }));
  for (let i = 0; i < rows.length; i++) {
    for (let a = 0; a < rows[i].houses.length; a++) {
      for (let b = a + 1; b < rows[i].houses.length; b++) {
        const result = auditPair(rows[i].houses[a].polygon, rows[i].houses[b].polygon);
        assert.equal(result.overlap, false,
          `${rowKey(rows[i].row)} ${rows[i].houses[a].id}/${rows[i].houses[b].id} overlaps`);
        assert.ok(result.distance >= minGap - EPS,
          `${rowKey(rows[i].row)} ${rows[i].houses[a].id}/${rows[i].houses[b].id} gap ${result.distance} < ${minGap}`);
      }
    }
    for (let j = i + 1; j < rows.length; j++) {
      for (const mine of rows[i].houses) {
        for (const theirs of rows[j].houses) {
          const result = auditPair(mine.polygon, theirs.polygon);
          assert.equal(result.overlap, false,
            `${rowKey(rows[i].row)} ${mine.id} / ${rowKey(rows[j].row)} ${theirs.id} overlaps`);
          assert.ok(result.distance >= minGap - EPS,
            `${rowKey(rows[i].row)} ${mine.id} / ${rowKey(rows[j].row)} ${theirs.id} gap ${result.distance} < ${minGap}`);
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// planStreetRows on the real fixed source
// ---------------------------------------------------------------------------

test('planStreetRows accepts straight 40 m rows on both sides in deterministic order', () => {
  const {parts} = fixed();
  const rows = [];
  for (const centerS of [0, 40, 80]) {
    for (const side of [-1, 1]) rows.push({centerS, side, setback: SETBACK});
  }
  const before = clone(rows);
  const plan = planStreetRows(parts, straightRoad(), rows, DEFAULT_MIN_GAP_M);
  assert.deepEqual(rows, before, 'planStreetRows mutated its rows input');
  assert.equal(plan.accepted.length, 6);
  assert.equal(plan.rejected.length, 0);
  assert.deepEqual(keysOf(plan.accepted),
    ['0/-1', '0/1', '40/-1', '40/1', '80/-1', '80/1']);
  for (const item of plan.accepted) {
    assert.equal(item.ok, true);
    assert.deepEqual(item.violations, []);
    assert.equal(item.placements.length, 3);
    for (const placement of item.placements) {
      assert.ok(Number.isFinite(placement.clearance));
      assert.equal(placement.matrix.length, 16);
    }
  }
});

test('planStreetRows is byte-deterministic for the same input', () => {
  const {parts} = fixed();
  const rows = gridRows(SETBACK);
  const first = planStreetRows(parts, fixtureRoad(), rows, DEFAULT_MIN_GAP_M);
  const second = planStreetRows(parts, fixtureRoad(), rows, DEFAULT_MIN_GAP_M);
  assert.equal(JSON.stringify(first), JSON.stringify(second));
});

test('real bend rows at 440 and 680 cover both sides and both bend directions', () => {
  const {parts} = fixed();
  const rows = [
    {centerS: 440, side: -1, setback: SETBACK},
    {centerS: 440, side: 1, setback: SETBACK},
    {centerS: 680, side: -1, setback: SETBACK},
    {centerS: 680, side: 1, setback: SETBACK},
  ];
  const plan = planStreetRows(parts, fixtureRoad(), rows, DEFAULT_MIN_GAP_M);
  assert.deepEqual(keysOf(plan.accepted), ['440/1', '680/-1']);
  assert.deepEqual(keysOf(plan.rejected), ['440/-1', '680/1']);
  for (const item of plan.rejected) {
    assert.ok(item.reasons.length > 0);
    assert.equal(item.source.ok, true, 'these rows fail footprint, not road clearance');
  }
});

test('accepted items preserve the original placement matrices and road clearance', () => {
  const {parts} = fixed();
  const rows = gridRows(SETBACK);
  const plan = planStreetRows(parts, fixtureRoad(), rows, DEFAULT_MIN_GAP_M);
  assert.ok(plan.accepted.length > 0);
  for (const item of plan.accepted.slice(0, 4)) {
    const reference = placeStreet(parts, fixtureRoad(), item.row.centerS, item.row.side, item.row.setback);
    assert.equal(item.clearance, reference.clearance);
    assert.equal(item.requiredClearance, reference.requiredClearance);
    assert.equal(item.baseOffset, reference.baseOffset);
    for (let index = 0; index < reference.placements.length; index++) {
      assert.equal(item.placements[index].id, reference.placements[index].id);
      assert.deepEqual(item.placements[index].matrix, reference.placements[index].matrix);
      assert.equal(item.placements[index].clearance, reference.placements[index].clearance);
    }
  }
});

// ---------------------------------------------------------------------------
// Footprint geometry: same row
// ---------------------------------------------------------------------------

test('same-row separation, gap, overlap and boundary contact are classified', () => {
  const accepted = checkPlacedStreetRows(PARTS3, [rowWithOffsets([-6, 0, 6])], DEFAULT_MIN_GAP_M);
  assert.equal(accepted.accepted.length, 1);
  assert.equal(accepted.rejected.length, 0);

  const gap = checkPlacedStreetRows(PARTS3, [rowWithOffsets([-4.2, 0, 4.2])], DEFAULT_MIN_GAP_M);
  assert.equal(gap.accepted.length, 0);
  assert.equal(gap.rejected.length, 1);
  const gapReason = gap.rejected[0].reasons[0];
  assert.equal(gapReason.code, 'footprint-gap');
  assert.ok(Math.abs(gapReason.measured - 0.2) < 1e-9);
  assert.equal(gapReason.required, 0.5);
  assert.equal(gapReason.sameRow, true);
  assert.deepEqual(gapReason.houseIds, ['house-a', 'house-g']);

  const overlap = checkPlacedStreetRows(PARTS3, [rowWithOffsets([-3.5, 0, 3.5])], DEFAULT_MIN_GAP_M);
  assert.equal(overlap.accepted.length, 0);
  const overlapReason = overlap.rejected[0].reasons[0];
  assert.equal(overlapReason.code, 'footprint-overlap');
  assert.ok(Math.abs(overlapReason.measured - 0.5) < 1e-9);
  assert.equal(overlapReason.required, 0);
  assert.equal(overlapReason.boundaryContact, false);

  const touch = checkPlacedStreetRows(PARTS3, [rowWithOffsets([-4, 0, 4])], DEFAULT_MIN_GAP_M);
  assert.equal(touch.accepted.length, 0);
  const touchReason = touch.rejected[0].reasons[0];
  assert.equal(touchReason.code, 'footprint-overlap');
  assert.equal(touchReason.boundaryContact, true);
  assert.equal(touchReason.measured, 0);
});

test('containment is rejected as footprint overlap', () => {
  const big = makeBoxPart('house-a', 5, 5);
  const small = makeBoxPart('house-g', 1, 1);
  const row = syntheticRow({
    positions: [{id: 'house-a', x: 0, z: 0}, {id: 'house-g', x: 0, z: 0}],
  });
  const result = checkPlacedStreetRows([big, small], [row], DEFAULT_MIN_GAP_M);
  assert.equal(result.accepted.length, 0);
  assert.equal(result.rejected.length, 1);
  const reason = result.rejected[0].reasons[0];
  assert.equal(reason.code, 'footprint-overlap');
  assert.deepEqual(reason.houseIds, ['house-a', 'house-g']);
  assert.ok(reason.measured > 0);
});

test('the 0.5 m default is not relaxed and a custom minGap changes only the gap limit', () => {
  assert.equal(DEFAULT_MIN_GAP_M, 0.5);
  const exact = checkPlacedStreetRows(PARTS3, [rowWithOffsets([-4.5, 0, 4.5])], DEFAULT_MIN_GAP_M);
  assert.equal(exact.accepted.length, 1, 'exactly 0.5 m must pass');
  const below = checkPlacedStreetRows(PARTS3, [rowWithOffsets([-4.499, 0, 4.499])], DEFAULT_MIN_GAP_M);
  assert.equal(below.accepted.length, 0, 'below 0.5 m must fail');
  const custom = checkPlacedStreetRows(PARTS3, [rowWithOffsets([-4.499, 0, 4.499])], 0.4);
  assert.equal(custom.accepted.length, 1, 'the limit is the supplied minGap, not a hidden slack');
  const zero = checkPlacedStreetRows(PARTS3, [rowWithOffsets([-4, 0, 4])], 0);
  assert.equal(zero.accepted.length, 0, 'boundary contact fails even with minGap 0');
});

// ---------------------------------------------------------------------------
// Footprint geometry: rows and accepted-set ordering
// ---------------------------------------------------------------------------

test('adjacent rows are checked, non-adjacent rows pass, and input order is sorted', () => {
  const row0 = rowWithOffsets([-10, 0, 10], {centerS: 0});
  const overlapRow = rowWithOffsets([-6.5, 3.5, 13.5], {centerS: 8});
  const gapRow = rowWithOffsets([-5.8, 4.2, 14.2], {centerS: 9});
  const farRow = rowWithOffsets([90, 100, 110], {centerS: 200});

  const overlap = checkPlacedStreetRows(PARTS3, [overlapRow, row0], DEFAULT_MIN_GAP_M);
  assert.deepEqual(keysOf(overlap.accepted), ['0/1']);
  assert.deepEqual(keysOf(overlap.rejected), ['8/1']);
  const overlapReason = overlap.rejected[0].reasons[0];
  assert.equal(overlapReason.code, 'footprint-overlap');
  assert.equal(overlapReason.sameRow, false);
  assert.deepEqual(overlapReason.rows.map(row => row.centerS), [0, 8]);

  const gap = checkPlacedStreetRows(PARTS3, [row0, gapRow], DEFAULT_MIN_GAP_M);
  assert.deepEqual(keysOf(gap.accepted), ['0/1']);
  assert.deepEqual(keysOf(gap.rejected), ['9/1']);
  assert.equal(gap.rejected[0].reasons[0].code, 'footprint-gap');

  const far = checkPlacedStreetRows(PARTS3, [farRow, row0], DEFAULT_MIN_GAP_M);
  assert.deepEqual(keysOf(far.accepted), ['0/1', '200/1']);
  assert.equal(far.rejected.length, 0);
});

test('a rejected row is not used as an obstacle for later rows', () => {
  const row0 = rowWithOffsets([-30, 0, 30], {centerS: 0});
  const badRow1 = rowWithOffsets([-29.5, 0.5, 30.5], {centerS: 10});
  const row2 = rowWithOffsets([20, 50, 80], {centerS: 20});
  const result = checkPlacedStreetRows(PARTS3, [row0, badRow1, row2], DEFAULT_MIN_GAP_M);
  assert.deepEqual(keysOf(result.accepted), ['0/1', '20/1']);
  assert.deepEqual(keysOf(result.rejected), ['10/1']);
});

test('planStreetRows sorts shuffled rows by centerS and side before checking', () => {
  const {parts} = fixed();
  const rows = [
    {centerS: 80, side: 1, setback: SETBACK},
    {centerS: 0, side: 1, setback: SETBACK},
    {centerS: 40, side: -1, setback: SETBACK},
    {centerS: 0, side: -1, setback: SETBACK},
    {centerS: 80, side: -1, setback: SETBACK},
    {centerS: 40, side: 1, setback: SETBACK},
  ];
  const plan = planStreetRows(parts, straightRoad(), rows, DEFAULT_MIN_GAP_M);
  assert.deepEqual(keysOf(plan.accepted),
    ['0/-1', '0/1', '40/-1', '40/1', '80/-1', '80/1']);
  assert.deepEqual(plan.accepted.map(item => item.inputIndex), [3, 1, 2, 5, 4, 0]);
});

// ---------------------------------------------------------------------------
// Road clearance rejection
// ---------------------------------------------------------------------------

test('a road-failed row is rejected whole with road-clearance reasons only', () => {
  const violation = roadViolation('house-g');
  const bad = rowWithOffsets([-3.5, 0, 3.5], {
    centerS: 100,
    roadOk: false,
    violations: [violation],
  });
  const good = rowWithOffsets([-6, 0, 6], {centerS: 200});
  const result = checkPlacedStreetRows(PARTS3, [bad, good], DEFAULT_MIN_GAP_M);
  assert.deepEqual(keysOf(result.accepted), ['200/1']);
  assert.deepEqual(keysOf(result.rejected), ['100/1']);
  const item = result.rejected[0];
  assert.deepEqual(item.houseIds, ['house-g']);
  assert.equal(item.reasons.length, 1);
  assert.equal(item.reasons[0].code, 'road-clearance');
  assert.equal(item.reasons[0].measured, 11.5);
  assert.equal(item.reasons[0].required, 12);
  assert.equal(item.reasons[0].at, 400);
  assert.equal(item.source.ok, false);
  assert.equal(item.source.violations[0].houseId, 'house-g');
  // The houses in this row overlap, but the road failure rejects it first.
  assert.ok(!item.reasons.some(reason => reason.code.startsWith('footprint')));
});

// ---------------------------------------------------------------------------
// Validation: rows, parts, results, matrices
// ---------------------------------------------------------------------------

test('planStreetRows rejects malformed row specs and duplicate centerS/side', () => {
  const {parts} = fixed();
  const road = straightRoad();
  const call = rows => () => planStreetRows(parts, road, rows, DEFAULT_MIN_GAP_M);
  expectLayoutError(call(null), 'invalid_rows');
  expectLayoutError(call([null]), 'invalid_row');
  expectLayoutError(call([{side: 1, setback: 4}]), 'invalid_center');
  expectLayoutError(call([{centerS: NaN, side: 1, setback: 4}]), 'invalid_center');
  expectLayoutError(call([{centerS: 0, side: 0, setback: 4}]), 'invalid_side');
  expectLayoutError(call([{centerS: 0, side: '1', setback: 4}]), 'invalid_side');
  expectLayoutError(call([{centerS: 0, side: 1, setback: -1}]), 'invalid_setback');
  expectLayoutError(call([{centerS: 0, side: 1, setback: NaN}]), 'invalid_setback');
  expectLayoutError(call([{centerS: 0, side: 1, setback: Infinity}]), 'invalid_setback');
  expectLayoutError(call([
    {centerS: 0, side: 1, setback: 4},
    {centerS: 0, side: 1, setback: 6},
  ]), 'duplicate_row');
  expectLayoutError(call([
    {centerS: 0, side: -1, setback: 4},
    {centerS: 0, side: 1, setback: 4},
    {centerS: 0, side: -1, setback: 6},
  ]), 'duplicate_row');
  const empty = planStreetRows(parts, road, [], DEFAULT_MIN_GAP_M);
  assert.deepEqual(empty, {accepted: [], rejected: []});
});

test('minGap must be finite and non-negative', () => {
  const {parts} = fixed();
  const rows = [{centerS: 0, side: 1, setback: SETBACK}];
  for (const minGap of [-0.5, NaN, Infinity, '0.5', null]) {
    expectLayoutError(
      () => planStreetRows(parts, straightRoad(), rows, minGap),
      'invalid_min_gap');
    expectLayoutError(
      () => checkPlacedStreetRows(parts, [], minGap),
      'invalid_min_gap');
  }
});

test('parts validation rejects missing, duplicate and malformed part meshes', () => {
  expectLayoutError(() => checkPlacedStreetRows(null, [], 0.5), 'invalid_parts');
  expectLayoutError(() => checkPlacedStreetRows([], [], 0.5), 'invalid_parts');
  expectLayoutError(() => checkPlacedStreetRows([makeBoxPart('house-a', 2, 1), makeBoxPart('house-a', 2, 1)], [], 0.5), 'invalid_parts');
  const badData = makeBoxPart('house-a', 2, 1);
  badData.sourceData = [0, 0, 0];
  expectLayoutError(() => checkPlacedStreetRows([badData], [], 0.5), 'invalid_parts');
  const nonFinite = makeBoxPart('house-a', 2, 1);
  nonFinite.sourceData[0] = NaN;
  expectLayoutError(() => checkPlacedStreetRows([nonFinite], [], 0.5), 'invalid_parts');
  const degenerate = {name: 'house-a', pivot: [0, 0, 0], sourceData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], sourceIndices: []};
  expectLayoutError(() => checkPlacedStreetRows([degenerate], [], 0.5), 'invalid_parts');
});

test('placed-result validation rejects missing rows, bad fields and unknown houses', () => {
  const valid = rowWithOffsets([-6, 0, 6]);
  const mutate = change => {
    const copy = clone(valid);
    change(copy);
    return copy;
  };
  const check = placedRows => () => checkPlacedStreetRows(PARTS3, placedRows, 0.5);
  expectLayoutError(check(null), 'invalid_rows');
  expectLayoutError(check([null]), 'invalid_result');
  expectLayoutError(check([mutate(row => { row.schema = 2; })]), 'invalid_result');
  expectLayoutError(check([mutate(row => { row.centerS = NaN; })]), 'invalid_center');
  expectLayoutError(check([mutate(row => { row.side = 0; })]), 'invalid_side');
  expectLayoutError(check([mutate(row => { row.setback = -1; })]), 'invalid_setback');
  expectLayoutError(check([mutate(row => { row.placements = []; })]), 'invalid_result');
  expectLayoutError(check([mutate(row => { row.ok = false; })]), 'invalid_result');
  expectLayoutError(check([mutate(row => { row.violations = [{}]; row.ok = false; })]), 'invalid_result');
  expectLayoutError(check([mutate(row => { row.placements[0].id = 'house-z'; })]), 'invalid_result');
  expectLayoutError(check([mutate(row => { row.placements[1].id = 'house-a'; })]), 'invalid_result');
  expectLayoutError(check([mutate(row => { row.placements[0].clearance = NaN; })]), 'invalid_result');
  expectLayoutError(check([mutate(row => { row.placements[0].station = Infinity; })]), 'invalid_result');
  expectLayoutError(check([mutate(row => { row.requiredClearance = -1; })]), 'invalid_result');
  expectLayoutError(check([mutate(row => { row.clearance = NaN; })]), 'invalid_result');
  expectLayoutError(
    () => checkPlacedStreetRows(PARTS3, [valid, clone(valid)], 0.5),
    'duplicate_row');
});

test('bad placement matrices are rejected instead of being silently repaired', () => {
  const valid = rowWithOffsets([-6, 0, 6]);
  const mutateMatrix = change => {
    const copy = clone(valid);
    change(copy.placements[0].matrix);
    return copy;
  };
  const check = matrix => () => checkPlacedStreetRows(PARTS3, [matrix], 0.5);
  expectLayoutError(check(mutateMatrix(m => { m.pop(); })), 'invalid_matrix');
  expectLayoutError(check(mutateMatrix(m => { m[0] = NaN; })), 'invalid_matrix');
  expectLayoutError(check(mutateMatrix(m => { m[0] = 2; m[10] = 2; })), 'invalid_matrix');
  expectLayoutError(check(mutateMatrix(m => { m[6] = 0.1; })), 'invalid_matrix');
  expectLayoutError(check(mutateMatrix(m => { m[15] = 2; })), 'invalid_matrix');
  expectLayoutError(check(mutateMatrix(m => { m[8] = 0; m[10] = -1; })), 'invalid_matrix');
  expectLayoutError(check(mutateMatrix(m => { m[0] = 0.8; m[2] = 0.6; m[10] = 1; })), 'invalid_matrix');
});

test('checkPlacedStreetRows and planStreetRows do not mutate their inputs', () => {
  const rows = [rowWithOffsets([-30, 0, 30], {centerS: 0}), rowWithOffsets([20, 50, 80], {centerS: 20})];
  const beforeRows = clone(rows);
  const result = checkPlacedStreetRows(PARTS3, rows, DEFAULT_MIN_GAP_M);
  assert.deepEqual(rows, beforeRows);
  assert.equal(result.accepted.length, 2);

  const {parts} = fixed();
  const hashesBefore = parts.map(part => `${part.name}:${meshDigest(part)}`);
  const grid = gridRows(SETBACK);
  const gridBefore = clone(grid);
  planStreetRows(parts, fixtureRoad(), grid, DEFAULT_MIN_GAP_M);
  planStreetRows(parts, coastRoad, grid.map(row => ({...row, setback: SETBACK + DELTA})), DEFAULT_MIN_GAP_M);
  assert.deepEqual(grid, gridBefore);
  assert.deepEqual(parts.map(part => `${part.name}:${meshDigest(part)}`), hashesBefore);
});

// ---------------------------------------------------------------------------
// inspectStreetRowPairs: named rows outside accepted sets
// ---------------------------------------------------------------------------

test('inspectStreetRowPairs reports same-row and cross-row pairs with values', () => {
  const row0 = rowWithOffsets([-10, 0, 10], {centerS: 0});
  const row1 = rowWithOffsets([-6.5, 3.5, 13.5], {centerS: 8});
  const inspection = inspectStreetRowPairs(PARTS3, [row0, row1], DEFAULT_MIN_GAP_M);
  assert.equal(inspection.pairs.length, 15, '3 same-row pairs per row plus 9 cross-row pairs');
  const same = inspection.pairs.filter(pair => pair.sameRow);
  const cross = inspection.pairs.filter(pair => !pair.sameRow);
  assert.equal(same.length, 6);
  assert.equal(cross.length, 9);
  assert.ok(same.every(pair => pair.pass));
  const failing = cross.filter(pair => !pair.pass);
  assert.ok(failing.length > 0);
  for (const pair of cross) {
    assert.ok(Number.isFinite(pair.distance));
    assert.ok(Number.isFinite(pair.measured));
    assert.ok(Number.isFinite(pair.required));
    assert.equal(pair.code, pair.pass ? null : (pair.overlap ? 'footprint-overlap' : 'footprint-gap'));
  }
});

test('inspectStreetRowPairs still exposes geometry of a road-failed row', () => {
  const bad = rowWithOffsets([-3.5, 0, 3.5], {
    centerS: 100,
    roadOk: false,
    violations: [roadViolation('house-m')],
  });
  const inspection = inspectStreetRowPairs(PARTS3, [bad], DEFAULT_MIN_GAP_M);
  assert.equal(inspection.rows[0].roadOk, false);
  assert.ok(inspection.pairs.some(pair => pair.overlap));
});

// ---------------------------------------------------------------------------
// Real fixed 20-row sample and the mandated threshold
// ---------------------------------------------------------------------------

test('real 20-row sample has non-empty accepted sets at setback 4 and 6', () => {
  const {parts} = fixed();
  const plan4 = planStreetRows(parts, fixtureRoad(), gridRows(SETBACK), DEFAULT_MIN_GAP_M);
  const plan6 = planStreetRows(parts, fixtureRoad(), gridRows(SETBACK + DELTA), DEFAULT_MIN_GAP_M);
  assert.equal(plan4.accepted.length + plan4.rejected.length, 20);
  assert.equal(plan6.accepted.length + plan6.rejected.length, 20);
  assert.ok(plan4.accepted.length > 0, 'must not invent an empty result or lower the threshold');
  assert.ok(plan6.accepted.length > 0, 'must not invent an empty result or lower the threshold');
  for (const plan of [plan4, plan6]) {
    for (const item of plan.rejected) {
      assert.ok(item.row && Number.isFinite(item.row.centerS));
      assert.ok(item.houseIds.length > 0);
      for (const reason of item.reasons) {
        assert.ok(['road-clearance', 'footprint-overlap', 'footprint-gap'].includes(reason.code));
        assert.ok(Number.isFinite(reason.measured));
        assert.ok(Number.isFinite(reason.required));
        assert.equal(reason.rows.length, 2);
      }
    }
  }
});

test('every accepted real row independently satisfies the 0.5 m footprint contract', () => {
  const {parts} = fixed();
  for (const setback of [SETBACK, SETBACK + DELTA]) {
    const plan = planStreetRows(parts, fixtureRoad(), gridRows(setback), DEFAULT_MIN_GAP_M);
    auditAcceptedRows(parts, plan.accepted, DEFAULT_MIN_GAP_M);
  }
});

test('the fixture plan and the live coastRoad plan are byte-identical', () => {
  const {parts} = fixed();
  for (const setback of [SETBACK, SETBACK + DELTA]) {
    const fixture = planStreetRows(parts, fixtureRoad(), gridRows(setback), DEFAULT_MIN_GAP_M);
    const live = planStreetRows(parts, coastRoad, gridRows(setback), DEFAULT_MIN_GAP_M);
    assert.equal(JSON.stringify(fixture), JSON.stringify(live));
  }
});

test('fixed-source mesh, file and manifest hashes survive planning', () => {
  const before = fixed();
  const beforeStreet = sha256(fs.readFileSync(path.join(PLACEMENT_DIR, 'fixed-source', 'street.glb')));
  const beforeManifest = sha256(fs.readFileSync(path.join(PLACEMENT_DIR, 'fixed-source', 'manifest.json')));
  const beforeMeshes = before.parts.map(part => `${part.name}:${meshDigest(part)}`);
  const beforeFiles = JSON.stringify(before.fileHashes);

  const {parts} = before;
  for (const setback of [SETBACK, SETBACK + DELTA]) {
    planStreetRows(parts, fixtureRoad(), gridRows(setback), DEFAULT_MIN_GAP_M);
  }
  buildCoastLayoutReport();

  assert.equal(sha256(fs.readFileSync(path.join(PLACEMENT_DIR, 'fixed-source', 'street.glb'))), beforeStreet);
  assert.equal(sha256(fs.readFileSync(path.join(PLACEMENT_DIR, 'fixed-source', 'manifest.json'))), beforeManifest);
  assert.deepEqual(parts.map(part => `${part.name}:${meshDigest(part)}`), beforeMeshes);
  assert.equal(JSON.stringify(verifyFixedSource().fileHashes), beforeFiles);
});

// ---------------------------------------------------------------------------
// 4 m -> 6 m shift re-check and the 510/-1 road regression
// ---------------------------------------------------------------------------

test('shifted 4 m batch is re-checked without re-placing and keeps original matrices', () => {
  const {parts} = fixed();
  const rows = gridRows(SETBACK).slice().sort((a, b) => a.centerS - b.centerS || a.side - b.side);
  const placed = rows.map(row => placeStreet(parts, fixtureRoad(), row.centerS, row.side, row.setback));
  const shifted = placed.map(result => shiftSetback(result, fixtureRoad(), DELTA));
  const before = clone(shifted);
  const result = checkPlacedStreetRows(parts, shifted, DEFAULT_MIN_GAP_M);
  assert.deepEqual(shifted, before, 'checkPlacedStreetRows mutated its placedRows input');
  assert.ok(result.accepted.length > 0);
  assert.equal(result.accepted.length + result.rejected.length, 20);
  for (const item of result.accepted) {
    const source = shifted.find(entry => entry.centerS === item.row.centerS && entry.side === item.row.side);
    assert.ok(source);
    assert.equal(item.row.setback, SETBACK + DELTA);
    for (let index = 0; index < source.placements.length; index++) {
      assert.deepEqual(item.placements[index].matrix, source.placements[index].matrix);
      assert.equal(item.placements[index].clearance, source.placements[index].clearance);
    }
  }
  assert.ok(shifted.every(entry => entry.ok), 'all 20 grid rows keep road clearance after the pure shift');
});

test('510/-1 is an independent road regression: 4 m passes, pure +2 m shift fails', () => {
  const {parts} = fixed();
  const primary = placeStreet(parts, fixtureRoad(), 510, -1, SETBACK);
  const shifted = shiftSetback(primary, fixtureRoad(), DELTA);
  assert.equal(primary.ok, true);
  assert.ok(primary.clearance >= 12 - EPS);
  assert.equal(shifted.ok, false);
  assert.equal(shifted.requiredClearance, 14);
  assert.equal(shifted.violations.length, 1);
  assert.equal(shifted.violations[0].houseId, 'house-m');
  assert.ok(shifted.violations[0].measured < 14);
  assert.equal(shifted.violations[0].at, 514);

  const livePrimary = placeStreet(parts, coastRoad, 510, -1, SETBACK);
  const liveShifted = shiftSetback(livePrimary, coastRoad, DELTA);
  assert.equal(JSON.stringify(shifted.violations), JSON.stringify(liveShifted.violations));
  assert.equal(shifted.clearance, liveShifted.clearance);
});

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

test('report: deterministic build matches the checked-in public JSON', () => {
  const first = buildCoastLayoutReport();
  const second = buildCoastLayoutReport();
  const firstJson = `${JSON.stringify(first, null, 2)}\n`;
  const secondJson = `${JSON.stringify(second, null, 2)}\n`;
  assert.equal(firstJson, secondJson);
  assert.ok(fs.existsSync(OUT_FILE), 'out/coast-layout-320-680.json must be checked in');
  assert.equal(fs.readFileSync(OUT_FILE, 'utf8'), firstJson);
});

test('report: 20 rows, both setbacks, cross-check and non-empty accepted sets', () => {
  const report = buildCoastLayoutReport();
  assert.equal(report.summary.rowsPerPlan, 20);
  assert.equal(report.contract.minGapM, 0.5);
  assert.equal(report.summary.crossCheckIdentical, true);
  assert.deepEqual(report.crossCheck.setback4.fixtureAcceptedKeys, report.crossCheck.setback4.liveAcceptedKeys);
  assert.deepEqual(report.crossCheck.setback4.fixtureRejectedKeys, report.crossCheck.setback4.liveRejectedKeys);
  assert.deepEqual(report.crossCheck.setback6.fixtureAcceptedKeys, report.crossCheck.setback6.liveAcceptedKeys);
  assert.deepEqual(report.crossCheck.setback6.fixtureRejectedKeys, report.crossCheck.setback6.liveRejectedKeys);
  assert.equal(report.summary.nonEmptyAcceptedSet, true);
  assert.ok(report.summary.setback4.accepted > 0);
  assert.ok(report.summary.setback6.accepted > 0);
  assert.ok(report.summary.shifted4to6.accepted > 0);
  assert.equal(report.setback4.derivedBy.includes('placeStreet at setback 4'), true);
  assert.equal(report.setback6.derivedBy.includes('not shifted'), true);
  assert.equal(report.shifted4to6.derivedBy.includes('shiftSetback'), true);
  assert.equal(report.shifted4to6.rotationPreserved, true);
  assert.equal(report.shifted4to6.rowsRoadOkAfterShift, 20);
  assert.equal(report.roadRegression510.fixtureMatchesLive, true);
});

test('report: named 600/-1 and 640/680 +1 pairs are checked independently of accepted sets', () => {
  const report = buildCoastLayoutReport();
  const pairs = report.specificPairs;
  assert.equal(pairs.row600SideMinus1SameRow.setback4.pairs.some(pair => pair.overlap), true);
  assert.equal(pairs.row600SideMinus1SameRow.setback6.pairs.some(pair => pair.overlap), true);
  assert.equal(pairs.row600SideMinus1SameRow.shifted4to6.pairs.some(pair => pair.overlap), true);
  const worst600 = pairs.row600SideMinus1SameRow.setback4.pairs
    .filter(pair => pair.overlap)
    .sort((a, b) => b.overlapDepth - a.overlapDepth)[0];
  assert.deepEqual(worst600.houseIds, ['house-g', 'house-m']);
  assert.ok(Math.abs(worst600.overlapDepth - 5.247674019150338) < 1e-9);

  assert.equal(pairs.row640And680SidePlus1Adjacent.setback4.pairs.some(pair => pair.overlap), false);
  assert.ok(pairs.row640And680SidePlus1Adjacent.setback4.pairs.every(pair => pair.distance >= 0.5 - EPS));
  const min4 = Math.min(...pairs.row640And680SidePlus1Adjacent.setback4.pairs.map(pair => pair.distance));
  assert.ok(Math.abs(min4 - 0.8555310413297529) < 1e-9);
  assert.equal(pairs.row640And680SidePlus1Adjacent.setback6.pairs.some(pair => pair.overlap), true);
  const overlap6 = pairs.row640And680SidePlus1Adjacent.setback6.pairs.find(pair => pair.overlap);
  assert.deepEqual(overlap6.houseIds, ['house-m', 'house-a']);
  assert.ok(Math.abs(overlap6.overlapDepth - 0.23293615344589114) < 1e-9);
  assert.equal(pairs.row640And680SidePlus1Adjacent.shifted4to6.pairs.some(pair => pair.overlap), true);

  for (const batch of ['setback4', 'setback6', 'shifted4to6']) {
    assert.equal(pairs.acceptedInFilter[batch]['600/-1'], false);
    assert.equal(pairs.acceptedInFilter[batch]['640/+1'], false);
    assert.equal(pairs.acceptedInFilter[batch]['680/+1'], false);
  }
});

test('report: 510/-1 regression and set comparison do not overclaim', () => {
  const report = buildCoastLayoutReport();
  assert.equal(report.roadRegression510.onGrid, false);
  assert.equal(report.roadRegression510.fixture.setback4.ok, true);
  assert.equal(report.roadRegression510.fixture.shiftedTo6.ok, false);
  assert.equal(report.roadRegression510.fixture.shiftedTo6.violations[0].houseId, 'house-m');
  assert.equal(report.roadRegression510.fixture.shiftedTo6.violations[0].at, 514);
  assert.equal(report.summary.roadRegression510ShiftOk, false);
  assert.match(report.setComparison.note, /pure R translation/);
  assert.match(report.setComparison.note, /independent filters/);
  assert.ok(!JSON.stringify(report).includes('dingbaiwei'));
  assert.ok(!/[A-Za-z]:\\/.test(JSON.stringify(report)));
});
