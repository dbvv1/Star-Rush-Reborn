import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
  BASE_EMBED_M,
  BUSH_GAP_M,
  FENCE_GAP_M,
  FENCE_SOURCE_BYTES,
  FENCE_SOURCE_SHA256,
  FenceSupportError,
  HOUSE_CLEARANCE_M,
  MAX_RELIEF_M,
  ROAD_CLEARANCE_M,
  WATER_MIN_Y,
  decodeFenceParts,
  planFenceSupports,
} from './plan.mjs';
import {FIXED_ROWS, loadCoastalModel} from './report.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const SOURCE_FILE = path.join(ROOT, 'assets/coast-verge/verge.glb');
const SHA = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const readSource = () => new Uint8Array(fs.readFileSync(SOURCE_FILE));
const realParts = () => decodeFenceParts(readSource());
const clone = value => JSON.parse(JSON.stringify(value));

function expectError(fn, code) {
  let thrown = null;
  try { fn(); } catch (error) { thrown = error; }
  assert.ok(thrown, `expected ${code}`);
  assert.ok(thrown instanceof FenceSupportError, `expected FenceSupportError, got ${thrown?.name}: ${thrown?.message}`);
  assert.equal(thrown.code, code);
  return thrown;
}

// ---------------------------------------------------------------------------
// Synthetic fixtures
// ---------------------------------------------------------------------------

function boxPart(name, {minX, maxX, minZ, maxZ, minY = 0, maxY = 1}) {
  const data = [];
  for (const y of [minY, maxY]) {
    for (const [x, z] of [[minX, minZ], [maxX, minZ], [maxX, maxZ], [minX, maxZ]]) {
      data.push(x, y, z, 0, 1, 0, 0, 0, 0, 0);
    }
  }
  return {name, action: 'static', pivot: [0, 0, 0], sourceData: data, sourceIndices: []};
}

function makeModel({
  height = () => 0,
  street = [],
  verge = [],
  x0 = -120, x1 = 360, z0 = -260, z1 = 260, step = 6,
} = {}) {
  const nx = Math.round((x1 - x0) / step), nz = Math.round((z1 - z0) / step);
  const vertices = [];
  for (let z = 0; z <= nz; z++) {
    for (let x = 0; x <= nx; x++) {
      const xx = x0 + x * step, zz = z0 + z * step;
      vertices.push([xx, height(xx, zz), zz]);
    }
  }
  return {
    bounds: {x0, x1, z0, z1, step},
    vertices,
    triangles: [],
    street: {instances: street},
    verge: {instances: verge},
  };
}

function straightRoad(z = 0) {
  return s => ({
    p: [s, 0, z],
    h: 0,
    T: [1, 0, 0],
    R: [0, 0, 1],
    curv: 0,
    slope: 0,
  });
}

function straightSamples(z = 0, from = -200, to = 800, step = 10) {
  const samples = [];
  for (let s = from; s <= to; s += step) samples.push({s, p: [s, 0, z]});
  return samples;
}

const FLAT_ROAD = straightRoad();
const FLAT_SAMPLES = straightSamples();

function plan(parts, model, rows = [{s: 0, side: 1, setback: 24}], road = FLAT_ROAD, samples = FLAT_SAMPLES) {
  return planFenceSupports(parts, model, road, samples, rows);
}

function hasReason(result, reason) {
  return result.rejected.length === 0 || result.rejected.every(item => item.reason === reason);
}

function determinant3(m) {
  return m[0] * (m[5] * m[10] - m[6] * m[9]) -
    m[4] * (m[1] * m[10] - m[2] * m[9]) +
    m[8] * (m[1] * m[6] - m[2] * m[5]);
}

function sourceMinY(part) {
  let min = Infinity;
  for (let i = 1; i < part.sourceData.length; i += 10) min = Math.min(min, part.sourceData[i]);
  return min;
}

// ---------------------------------------------------------------------------
// Source identity
// ---------------------------------------------------------------------------

test('fixed source bytes and the two real fence meshes are unchanged', () => {
  const bytes = fs.readFileSync(SOURCE_FILE);
  assert.equal(bytes.length, FENCE_SOURCE_BYTES);
  assert.equal(SHA(bytes), FENCE_SOURCE_SHA256);
  const parts = decodeFenceParts(new Uint8Array(bytes));
  assert.deepEqual(parts.map(part => part.name).sort(), ['fence--4.8', 'fence-4.8']);
  assert.ok(fs.existsSync(path.join(ROOT, 'assets/coast-verge/FENCE-LICENSE.txt')));
  for (const part of parts) {
    assert.equal(part.sourceData.length / 10, 852);
    assert.equal(part.sourceIndices.length / 3, 284);
    assert.deepEqual(part.pivot, [0, 0, 0]);
    assert(Math.abs(sourceMinY(part)) < 1e-12);
    assert(part.sourceData.every(Number.isFinite));
  }
  // The six bushes remain in the preserved source but are not consumed here.
  assert(!parts.some(part => /^bush-/.test(part.name)));
});

// ---------------------------------------------------------------------------
// Acceptance, rigid matrices and determinism
// ---------------------------------------------------------------------------

test('flat terrain accepts both fences with one rigid yaw and only a Y translation', () => {
  const parts = realParts();
  const model = makeModel();
  const before = parts.map(part => Array.from(part.sourceData));
  const result = plan(parts, model);

  assert.equal(result.summary.rows, 1);
  assert.equal(result.summary.partsPerRow, 2);
  assert.equal(result.accepted.length, 2);
  assert.equal(result.rejected.length, 0);

  for (const entry of result.accepted) {
    const m = entry.matrix;
    assert.equal(m.length, 16);
    const xAxis = [m[0], m[1], m[2]];
    const yAxis = [m[4], m[5], m[6]];
    const zAxis = [m[8], m[9], m[10]];
    assert(Math.abs(Math.hypot(...xAxis) - 1) < 1e-12);
    assert(Math.abs(Math.hypot(...yAxis) - 1) < 1e-12);
    assert(Math.abs(Math.hypot(...zAxis) - 1) < 1e-12);
    assert.equal(m[4], 0); assert.equal(m[6], 0);
    assert.deepEqual(yAxis, [0, 1, 0]);
    assert(Math.abs(xAxis[0] * zAxis[0] + xAxis[1] * zAxis[1] + xAxis[2] * zAxis[2]) < 1e-12);
    assert(Math.abs(determinant3(m) - 1) < 1e-12);
    assert.equal(entry.terrain.min, 0);
    assert.equal(entry.terrain.max, 0);
    assert.equal(entry.bottom, -BASE_EMBED_M);
    const part = parts.find(candidate => candidate.name === entry.partId);
    assert(Math.abs(m[13] - (entry.bottom - sourceMinY(part))) < 1e-12);
    assert(Math.abs(entry.clearance.road - 22.4) < 1e-6);
    assert.equal(entry.clearance.house, Infinity);
    assert(Math.abs(entry.clearance.fence - 4.5) < 1e-6);
    assert.equal(entry.clearance.bush, Infinity);
  }
  const left = result.accepted.find(entry => entry.partId === 'fence--4.8');
  const right = result.accepted.find(entry => entry.partId === 'fence-4.8');
  assert.deepEqual([left.bbox.minX, left.bbox.maxX, left.bbox.minZ, left.bbox.maxZ].map(v => +v.toFixed(6)), [-7.35, -2.25, 22.4, 25.75]);
  assert.deepEqual([right.bbox.minX, right.bbox.maxX, right.bbox.minZ, right.bbox.maxZ].map(v => +v.toFixed(6)), [2.25, 7.35, 22.4, 25.75]);

  // The planner never edits source geometry or terrain.
  assert.deepEqual(parts.map(part => Array.from(part.sourceData)), before);
  assert(model.vertices.every(vertex => vertex[1] === 0));
});

test('side -1 mirrors the yaw without reflecting or changing proportions', () => {
  const result = plan(realParts(), makeModel(), [{s: 0, side: -1, setback: 24}]);
  assert.equal(result.accepted.length, 2);
  for (const entry of result.accepted) {
    assert(Math.abs(entry.matrix[0] + 1) < 1e-12);
    assert(Math.abs(entry.matrix[2]) < 1e-12);
    assert(Math.abs(entry.matrix[8]) < 1e-12);
    assert(Math.abs(entry.matrix[10] + 1) < 1e-12);
    assert(Math.abs(entry.matrix[1]) < 1e-12);
    assert(Math.abs(entry.matrix[9]) < 1e-12);
    assert.equal(determinant3(entry.matrix), 1);
    assert(+entry.bbox.minZ.toFixed(6) === -25.75);
    assert(+entry.bbox.maxZ.toFixed(6) === -22.4);
  }
});

test('fixed input produces byte-identical JSON twice', () => {
  const parts = realParts();
  const rows = [{s: 0, side: 1, setback: 24}, {s: 40, side: -1, setback: 24}];
  const a = plan(parts, makeModel(), rows);
  const b = plan(parts, makeModel(), rows);
  assert.equal(JSON.stringify(a), JSON.stringify(b));
  assert.equal(JSON.stringify(clone(a)), JSON.stringify(a));
});

// ---------------------------------------------------------------------------
// Terrain hazards
// ---------------------------------------------------------------------------

test('slope beyond 0.18 m relief is rejected for the whole footprint', () => {
  const result = plan(realParts(), makeModel({height: x => 2 + x * 0.1}));
  assert.equal(result.accepted.length, 0);
  assert.equal(result.rejected.length, 2);
  assert.ok(hasReason(result, 'slope'));
  for (const item of result.rejected) {
    assert(item.terrain.max - item.terrain.min > MAX_RELIEF_M);
    assert.match(item.detail, /relief/);
  }
});

test('a step in the footprint is rejected even when each side is flat', () => {
  const result = plan(realParts(), makeModel({height: (x, z) => z >= 24 ? 0.5 : 0}));
  assert.equal(result.accepted.length, 0);
  assert.ok(hasReason(result, 'slope'));
  for (const item of result.rejected) assert.equal(item.terrain.max - item.terrain.min, 0.5);
});

test('water below the dry margin is rejected', () => {
  const result = plan(realParts(), makeModel({height: () => -1}));
  assert.equal(result.accepted.length, 0);
  assert.ok(hasReason(result, 'water'));
  for (const item of result.rejected) {
    assert(item.terrain.min < WATER_MIN_Y);
    assert.match(item.detail, /dry margin/);
  }
});

test('a footprint leaving the bounded terrain grid is rejected as outside', () => {
  const model = makeModel({z0: -20, z1: 20});
  const result = plan(realParts(), model);
  assert.equal(result.accepted.length, 0);
  assert.ok(hasReason(result, 'outside'));
  assert.equal(result.rejected[0].terrain, null);
});

// ---------------------------------------------------------------------------
// Road, house, fence and bush clearance
// ---------------------------------------------------------------------------

test('road clearance below 12 m rejects and the boundary at 12 m passes', () => {
  const near = plan(realParts(), makeModel(), [{s: 0, side: 1, setback: 10}]);
  assert.equal(near.accepted.length, 0);
  assert.ok(hasReason(near, 'road'));
  for (const item of near.rejected) assert(item.clearance.road < ROAD_CLEARANCE_M);

  // The 3.35 m footprint depth means setback 13.6 puts the closest edge at 12 m.
  const boundary = plan(realParts(), makeModel(), [{s: 0, side: 1, setback: 13.6}]);
  assert.equal(boundary.accepted.length, 2);
  assert.equal(+boundary.accepted[0].clearance.road.toFixed(6), 12);
});

test('accepted street houses block a fence within 1 m', () => {
  const house = {placement: {bbox: {minX: -8, maxX: 8, minZ: 22, maxZ: 26}}};
  const result = plan(realParts(), makeModel({street: [house]}));
  assert.equal(result.accepted.length, 0);
  assert.ok(hasReason(result, 'house'));
  for (const item of result.rejected) {
    assert(item.clearance.house < HOUSE_CLEARANCE_M);
    assert.match(item.detail, /street house/);
  }
});

test('existing verge bushes block a fence within 0.5 m', () => {
  const bush = {bbox: {minX: -8, maxX: 8, minZ: 25, maxZ: 26}};
  const result = plan(realParts(), makeModel({verge: [bush]}));
  assert.equal(result.accepted.length, 0);
  assert.ok(hasReason(result, 'bush'));
  for (const item of result.rejected) {
    assert(item.clearance.bush < BUSH_GAP_M);
    assert.match(item.detail, /verge bush/);
  }
});

test('two fences closer than 0.5 m reject each other', () => {
  const parts = [
    boxPart('fence-a', {minX: -0.3, maxX: -0.1, minZ: -0.5, maxZ: 0.5}),
    boxPart('fence-b', {minX: 0.1, maxX: 0.3, minZ: -0.5, maxZ: 0.5}),
  ];
  const result = plan(parts, makeModel());
  assert.equal(result.accepted.length, 0);
  assert.equal(result.rejected.length, 2);
  assert.ok(hasReason(result, 'fence'));
  for (const item of result.rejected) assert(Math.abs(item.clearance.fence - 0.2) < 1e-12);
});

// ---------------------------------------------------------------------------
// Invalid and duplicate rows
// ---------------------------------------------------------------------------

test('duplicate rows are rejected before placement', () => {
  const error = expectError(
    () => plan(realParts(), makeModel(), [
      {s: 0, side: 1, setback: 24},
      {s: 0, side: 1, setback: 30},
    ]),
    'duplicate_row');
  assert.deepEqual(error.rowIndexes, [0, 1]);
});

test('non-finite and out-of-range row fields are rejected', () => {
  expectError(() => plan(realParts(), makeModel(), [{s: Number.NaN, side: 1, setback: 24}]), 'invalid_center');
  expectError(() => plan(realParts(), makeModel(), [{s: Infinity, side: 1, setback: 24}]), 'invalid_center');
  expectError(() => plan(realParts(), makeModel(), [{s: 0, side: 0, setback: 24}]), 'invalid_side');
  expectError(() => plan(realParts(), makeModel(), [{s: 0, side: 1, setback: -1}]), 'invalid_setback');
  expectError(() => plan(realParts(), makeModel(), [{s: 0, side: 1, setback: Number.NaN}]), 'invalid_setback');
  expectError(() => plan(realParts(), makeModel(), [null]), 'invalid_row');
  expectError(() => plan(realParts(), makeModel(), 'rows'), 'invalid_rows');
  expectError(() => plan(realParts(), makeModel(), [
    {s: 0, side: 1, setback: 24},
    {s: 0, side: 1, setback: 24},
  ]), 'duplicate_row');
});

// ---------------------------------------------------------------------------
// Real full model
// ---------------------------------------------------------------------------

test('real fixed rows run against the actual complete coastal model without mutation', () => {
  assert.equal(FIXED_ROWS.length, 20);
  assert.deepEqual([...new Set(FIXED_ROWS.map(row => row.s))], [320, 360, 400, 440, 480, 520, 560, 600, 640, 680]);
  assert.deepEqual([...new Set(FIXED_ROWS.map(row => row.side))].sort(), [-1, 1]);
  assert(FIXED_ROWS.every(row => row.setback === 24));

  const sourceBytes = fs.readFileSync(SOURCE_FILE);
  const sourceHash = SHA(sourceBytes);
  const parts = decodeFenceParts(new Uint8Array(sourceBytes));
  const {model, sampleRoad, samples} = loadCoastalModel();
  assert(model.street.instances.length > 0);
  assert(model.verge.instances.length > 0);
  const modelBefore = SHA(JSON.stringify({
    vertices: model.vertices,
    street: model.street.instances.map(entry => entry.placement.bbox),
    verge: model.verge.instances.map(entry => entry.bbox),
  }));
  const partsBefore = parts.map(part => Array.from(part.sourceData));

  const result = planFenceSupports(parts, model, sampleRoad, samples, FIXED_ROWS);
  assert.equal(result.summary.rows, 20);
  assert.equal(result.summary.partsPerRow, 2);
  assert.equal(result.accepted.length + result.rejected.length, 40);

  const allowed = new Set(['outside', 'road', 'house', 'water', 'slope', 'fence', 'bush']);
  for (const entry of result.accepted) {
    assert(entry.clearance.road >= ROAD_CLEARANCE_M);
    assert(entry.clearance.house >= HOUSE_CLEARANCE_M);
    assert(entry.clearance.fence >= FENCE_GAP_M);
    assert(entry.clearance.bush >= BUSH_GAP_M);
    assert(entry.terrain.min >= WATER_MIN_Y);
    assert(entry.terrain.max - entry.terrain.min <= MAX_RELIEF_M);
    assert.equal(entry.matrix.length, 16);
    assert(Math.abs(determinant3(entry.matrix) - 1) < 1e-9);
    assert(Math.abs(entry.matrix[13] - (entry.terrain.min - BASE_EMBED_M - sourceMinY(parts.find(part => part.name === entry.partId)))) < 1e-9);
  }
  for (const entry of result.rejected) {
    assert(allowed.has(entry.reason), `unexpected reason ${entry.reason}`);
    assert.equal(entry.matrix, null);
    assert.equal(typeof entry.detail, 'string');
  }

  // Determinism on the same real inputs.
  const again = planFenceSupports(parts, model, sampleRoad, samples, FIXED_ROWS);
  assert.equal(JSON.stringify(result), JSON.stringify(again));

  assert.equal(SHA(fs.readFileSync(SOURCE_FILE)), sourceHash);
  assert.equal(sourceHash, FENCE_SOURCE_SHA256);
  assert.deepEqual(parts.map(part => Array.from(part.sourceData)), partsBefore);
  assert.equal(SHA(JSON.stringify({
    vertices: model.vertices,
    street: model.street.instances.map(entry => entry.placement.bbox),
    verge: model.verge.instances.map(entry => entry.bbox),
  })), modelBefore);
  console.log('real fence search', result.summary, result.rejected.map(entry => entry.reason));
});
