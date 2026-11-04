import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
  CLEARANCE_BASE_M,
  StreetPlacementError,
  boxSegmentDistance,
  localBounds,
  placeStreet,
  shiftSetback,
} from './adapter.mjs';
import {
  loadCoastFrameSample,
  meshDigest,
  sha256,
  verifyFixedSource,
} from './fixed-source-contract.mjs';
import {
  COAST_CIRCUIT_LENGTH,
  coastRoad,
  createFixtureSampleRoad,
  loadMasterCircuit,
  straightRoad,
} from './sample-road.mjs';
import {buildCoastReport} from './report-coast.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, '../..');
const SETBACK = 4;
const SECOND_DELTA = 2;
// Every stored clearance is cross-checked against every 1 m segment the
// captured sample contract covers. Do not use result.window here: that would
// re-implement the very assumption the independent check exists to test.
const SAMPLE_SCAN = Object.freeze({from: 280, to: 720, step: 1});

let fixedCache = null;
function fixed() {
  if (!fixedCache) fixedCache = verifyFixedSource();
  return fixedCache;
}

const near = (a, b, tolerance = 1e-9) => Math.abs(a - b) <= tolerance;
const same = (a, b) => a === b || (Number.isNaN(a) && Number.isNaN(b));
const column = (matrix, index) => [matrix[4 * index], matrix[4 * index + 1], matrix[4 * index + 2]];
const transformPoint = (matrix, point) => [
  matrix[0] * point[0] + matrix[4] * point[1] + matrix[8] * point[2] + matrix[12],
  matrix[1] * point[0] + matrix[5] * point[1] + matrix[9] * point[2] + matrix[13],
  matrix[2] * point[0] + matrix[6] * point[1] + matrix[10] * point[2] + matrix[14],
];
const dot3 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross3 = (a, b) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
const partByName = (parts, name) => parts.find(part => part.name === name);
const hashes = parts => parts.map(part => `${part.name}:${meshDigest(part)}`);

function assertRigidMatrix(matrix, label) {
  assert.equal(matrix.length, 16, `${label}: matrix length`);
  matrix.forEach((value, index) => {
    assert.ok(Number.isFinite(value), `${label}: matrix[${index}] is not finite (${value})`);
  });
  const x = column(matrix, 0), y = column(matrix, 1), z = column(matrix, 2);
  assert.deepEqual(y, [0, 1, 0], `${label}: Y axis must stay up`);
  for (const [name, axis] of [['X', x], ['Y', y], ['Z', z]]) {
    assert.ok(near(Math.hypot(...axis), 1, 1e-6), `${label}: ${name} axis is not unit length`);
  }
  assert.ok(Math.abs(dot3(x, y)) <= 1e-6, `${label}: X/Y not orthogonal`);
  assert.ok(Math.abs(dot3(x, z)) <= 1e-6, `${label}: X/Z not orthogonal`);
  assert.ok(Math.abs(dot3(y, z)) <= 1e-6, `${label}: Y/Z not orthogonal`);
  assert.ok(near(dot3(cross3(x, y), z), 1, 1e-6), `${label}: basis is not right-handed / has scale`);
  assert.deepEqual([matrix[3], matrix[7], matrix[11], matrix[15]], [0, 0, 0, 1], `${label}: affine bottom row`);
}

function assertFrameMatch(result, part, placement, sampleRoad) {
  const frame = sampleRoad(placement.station);
  const x = column(placement.matrix, 0), z = column(placement.matrix, 2);
  assert.ok(near(x[0], result.side * frame.T[0], 1e-9), `${placement.id}: X axis follows side*T`);
  assert.ok(near(x[2], result.side * frame.T[2], 1e-9), `${placement.id}: X axis follows side*T`);
  assert.ok(near(z[0], result.side * frame.R[0], 1e-9), `${placement.id}: Z axis follows side*R`);
  assert.ok(near(z[2], result.side * frame.R[2], 1e-9), `${placement.id}: Z axis follows side*R`);
  const lateral = result.side * (result.baseOffset + part.pivot[2]);
  assert.ok(near(placement.pivot[0], frame.p[0] + lateral * frame.R[0], 1e-9), `${placement.id}: pivot X`);
  assert.ok(near(placement.pivot[2], frame.p[2] + lateral * frame.R[2], 1e-9), `${placement.id}: pivot Z`);
  assert.ok(near(placement.station, result.centerS + part.pivot[0], 1e-12), `${placement.id}: station offset`);
}

function assertBottomPivot(bounds, placement, sampleRoad) {
  const frame = sampleRoad(placement.station);
  assert.ok(near(placement.pivot[1], frame.p[1], 1e-9), `${placement.id}: bottom pivot height != p[1]`);
  let minY = Infinity, maxY = -Infinity;
  for (const x of [bounds.min[0], bounds.max[0]]) {
    for (const y of [bounds.min[1], bounds.max[1]]) {
      for (const z of [bounds.min[2], bounds.max[2]]) {
        const world = transformPoint(placement.matrix, [x, y, z]);
        minY = Math.min(minY, world[1]);
        maxY = Math.max(maxY, world[1]);
      }
    }
  }
  assert.ok(near(minY, placement.pivot[1], 1e-9), `${placement.id}: mesh bottom is not on the pivot height`);
  assert.ok(near(maxY - minY, bounds.max[1] - bounds.min[1], 1e-9), `${placement.id}: height changed`);
}

function assertDoorFacesRoad(bounds, placement, sampleRoad) {
  const frame = sampleRoad(placement.station);
  assert.ok(placement.frontDotRoad > 0.999999, `${placement.id}: front does not point at the road (${placement.frontDotRoad})`);
  const yMid = (bounds.min[1] + bounds.max[1]) / 2;
  const front = transformPoint(placement.matrix, [0, yMid, bounds.min[2]]);
  const back = transformPoint(placement.matrix, [0, yMid, bounds.max[2]]);
  const frontDistance = Math.hypot(front[0] - frame.p[0], front[2] - frame.p[2]);
  const backDistance = Math.hypot(back[0] - frame.p[0], back[2] - frame.p[2]);
  assert.ok(frontDistance < backDistance, `${placement.id}: -Z face is not the road-facing face`);
  assert.ok(placement.frontDotRoad > 0.999999, `${placement.id}: stored front vector is inconsistent`);
}

function assertNoStretch(part, placement, triangleLimit = 250) {
  const data = part.sourceData, indices = part.sourceIndices;
  const triangles = Math.min(indices.length / 3, triangleLimit);
  for (let t = 0; t < triangles; t++) {
    const ids = [indices[t * 3], indices[t * 3 + 1], indices[t * 3 + 2]];
    const local = ids.map(i => [data[i * 10], data[i * 10 + 1], data[i * 10 + 2]]);
    const world = local.map(p => transformPoint(placement.matrix, p));
    for (let edge = 0; edge < 3; edge++) {
      const a = edge, b = (edge + 1) % 3;
      const localLength = Math.hypot(...local[a].map((v, k) => v - local[b][k]));
      const worldLength = Math.hypot(...world[a].map((v, k) => v - world[b][k]));
      assert.ok(Math.abs(localLength - worldLength) <= 1e-5 * Math.max(1, localLength),
        `${placement.id}: triangle ${t} edge ${edge} stretched (${localLength} -> ${worldLength})`);
    }
  }
}

function worldVertexBounds(part, placement) {
  const data = part.sourceData;
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (let i = 0; i < data.length; i += 10) {
    const world = transformPoint(placement.matrix, [data[i], data[i + 1], data[i + 2]]);
    if (world[0] < minX) minX = world[0];
    if (world[0] > maxX) maxX = world[0];
    if (world[2] < minZ) minZ = world[2];
    if (world[2] > maxZ) maxZ = world[2];
  }
  return {minX, maxX, minZ, maxZ};
}

function fullSampleClearance(parts, sampleRoad, placement, scan = SAMPLE_SCAN) {
  const part = partByName(parts, placement.id);
  const bbox = worldVertexBounds(part, placement);
  let min = Infinity, at = null;
  for (let s = scan.from; s < scan.to; s += scan.step) {
    const a = sampleRoad(s), b = sampleRoad(s + scan.step);
    const d = boxSegmentDistance(bbox, [a.p[0], a.p[2]], [b.p[0], b.p[2]]);
    if (d < min) { min = d; at = s; }
  }
  return {min, at};
}

function assertClearanceFromVertices(result, parts, sampleRoad, placement, scan) {
  const {min} = fullSampleClearance(parts, sampleRoad, placement, scan);
  assert.ok(near(min, placement.clearance, 1e-6), `${placement.id}: stored clearance ${placement.clearance} != vertex AABB clearance ${min} over the full sample`);
  assert.ok(min >= result.requiredClearance - 1e-9, `${placement.id}: clearance ${min} below ${result.requiredClearance}`);
  return min;
}

function assertPlacementSet(result, parts, sampleRoad, {deep = false, scan = SAMPLE_SCAN} = {}) {
  assert.equal(result.schema, 1);
  assert.equal(result.placements.length, parts.length);
  const before = hashes(parts);
  for (const placement of result.placements) {
    const part = partByName(parts, placement.id);
    assert.ok(part, `unknown house ${placement.id}`);
    assertRigidMatrix(placement.matrix, placement.id);
    assertFrameMatch(result, part, placement, sampleRoad);
    const bounds = localBounds(part);
    assertBottomPivot(bounds, placement, sampleRoad);
    assertDoorFacesRoad(bounds, placement, sampleRoad);
    if (deep) {
      assertNoStretch(part, placement);
      assertClearanceFromVertices(result, parts, sampleRoad, placement, scan);
    }
  }
  assert.deepEqual(hashes(parts), before, 'placement mutated mesh bytes');
  assert.ok(result.clearance >= result.requiredClearance - 1e-9, `overall clearance ${result.clearance} below ${result.requiredClearance}`);
  assert.deepEqual(result.violations, [], 'unexpected clearance violations');
  assert.equal(result.ok, true);
}

function badFrameRoad(base, badStation, mutate) {
  return function sampleRoad(s) {
    if (Math.abs(s - badStation) < 1e-9) {
      return mutate(JSON.parse(JSON.stringify(base(s))));
    }
    return base(s);
  };
}

function expectPlacementError(fn, expected) {
  let thrown = null;
  try { fn(); } catch (error) { thrown = error; }
  assert.ok(thrown, `expected StreetPlacementError ${expected.code}`);
  assert.ok(thrown instanceof StreetPlacementError, `expected StreetPlacementError, got ${thrown?.name}: ${thrown?.message}`);
  assert.equal(thrown.code, expected.code, `code: ${thrown.message}`);
  if (expected.houseId !== undefined) assert.equal(thrown.houseId, expected.houseId, `houseId: ${thrown.message}`);
  if (expected.phase !== undefined) assert.equal(thrown.phase, expected.phase, `phase: ${thrown.message}`);
  if (expected.station !== undefined) assert.equal(thrown.station, expected.station, `station: ${thrown.message}`);
  if (expected.message) assert.match(thrown.message, expected.message);
  return thrown;
}

// ---------------------------------------------------------------------------
// Fixed source: three real parts, pinned bytes, unchanged meshes
// ---------------------------------------------------------------------------

test('fixed source parses three real street parts with pinned hashes', () => {
  const {contract, manifest, parts, fileHashes} = fixed();
  assert.equal(parts.length, 3);
  assert.deepEqual(parts.map(part => part.name), ['house-a', 'house-g', 'house-m']);
  assert.equal(fileHashes.street_glb, contract.asset.sha256);
  assert.equal(fileHashes.manifest, contract.source.files.manifest.sha256);
  assert.equal(fileHashes.upstream_adapter, contract.source.files.upstream_adapter.sha256);
  const street = manifest.assets.find(asset => asset.id === 'street');
  assert.ok(street);
  assert.equal(street.sha256, contract.asset.sha256);
  assert.equal(street.bytes, contract.asset.bytes);
  assert.equal(street.triangles, contract.asset.triangles);
  for (const part of parts) {
    const expected = contract.parts.find(entry => entry.name === part.name);
    assert.ok(expected, `contract missing ${part.name}`);
    assert.equal(meshDigest(part), expected.mesh_sha256, `${part.name} mesh hash`);
    assert.equal(part.sourceIndices.length / 3, expected.triangles);
    assert.equal(part.sourceData.length / 10, expected.vertices);
    assert.deepEqual(part.pivot, expected.pivot_m);
    assert.equal(part.action, 'static');
    const bounds = localBounds(part);
    assert.equal(bounds.min[1], 0, `${part.name} feet must be on local y=0`);
  }
});

test('fixed source door face is on local -Z', () => {
  const {parts} = fixed();
  for (const part of parts) {
    const bounds = localBounds(part);
    let frontNormalSum = 0, frontCount = 0;
    let backNormalSum = 0, backCount = 0;
    for (let i = 0; i < part.sourceData.length; i += 10) {
      const z = part.sourceData[i + 2], normalZ = part.sourceData[i + 5];
      if (Math.abs(z - bounds.min[2]) <= 1e-5) { frontNormalSum += normalZ; frontCount++; }
      if (Math.abs(z - bounds.max[2]) <= 1e-5) { backNormalSum += normalZ; backCount++; }
    }
    assert.ok(frontCount > 0 && frontNormalSum / frontCount < -0.3, `${part.name}: no -Z front face`);
    assert.ok(backCount > 0 && backNormalSum / backCount > 0.3, `${part.name}: no +Z back face`);
  }
});

test('placeStreet rejects malformed source parts without touching the mesh', () => {
  const {parts} = fixed();
  expectPlacementError(() => placeStreet([], straightRoad(), 100, 1, 4), {code: 'invalid_parts'});
  const duplicate = [parts[0], {...parts[1], name: parts[0].name}, parts[2]];
  expectPlacementError(() => placeStreet(duplicate, straightRoad(), 100, 1, 4), {code: 'invalid_parts'});
  const raisedPivot = [parts[0], {...parts[1], pivot: [0, 0.5, 2]}, parts[2]];
  expectPlacementError(() => placeStreet(raisedPivot, straightRoad(), 100, 1, 4), {code: 'unsupported_pivot', houseId: 'house-g'});
  const badStride = [parts[0], {...parts[1], sourceData: parts[1].sourceData.slice(0, -1)}, parts[2]];
  expectPlacementError(() => placeStreet(badStride, straightRoad(), 100, 1, 4), {code: 'invalid_parts', houseId: 'house-g'});
  const badIndex = parts.map((part, index) => {
    if (index !== 2) return part;
    const indices = Uint32Array.from(part.sourceIndices);
    indices[0] = 999999;
    return {...part, sourceIndices: indices};
  });
  expectPlacementError(() => placeStreet(badIndex, straightRoad(), 100, 1, 4), {code: 'invalid_parts', houseId: 'house-m'});
});

// ---------------------------------------------------------------------------
// Fixed frame sample contract: replica == fixture == live master circuit.js
// ---------------------------------------------------------------------------

test('coast frame fixture is pinned to the live master circuit.js', () => {
  const sample = loadCoastFrameSample();
  const liveCircuitHash = sha256(fs.readFileSync(path.join(REPO_ROOT, 'circuit.js')));
  assert.equal(sample.source.sha256, liveCircuitHash);
  assert.match(sample.source.base_ref, /^[0-9a-f]{40}$/, 'base_ref must be a resolved commit id');
  // Provenance check instead of a copied literal: the recorded commit's
  // circuit.js blob must be the exact source the fixture was captured from.
  // This survives unrelated commits and fails when a re-record keeps a stale
  // base_ref after circuit.js changed.
  const blob = execFileSync('git', ['-C', REPO_ROOT, 'cat-file', 'blob', `${sample.source.base_ref}:circuit.js`]);
  assert.equal(sha256(blob), sample.source.sha256, 'base_ref circuit.js blob != recorded circuit sha256');
  assert.equal(sample.frames.length, 441);
  assert.equal(sample.range.from, 280);
  assert.equal(sample.range.to, 720);

  const {circuitRoad, circuitLength} = loadMasterCircuit(REPO_ROOT);
  assert.ok(near(circuitLength, COAST_CIRCUIT_LENGTH, 1e-9), 'circuit length');
  for (const frame of sample.frames) {
    const live = circuitRoad(frame.s);
    const replica = coastRoad(frame.s);
    for (const key of ['p', 'T', 'R']) {
      for (let i = 0; i < 3; i++) {
        assert.ok(same(frame[key][i], live[key][i]), `fixture ${key}[${i}] != live at ${frame.s}`);
        assert.ok(same(frame[key][i], replica[key][i]), `fixture ${key}[${i}] != replica at ${frame.s}`);
      }
    }
    for (const key of ['h', 'curv', 'slope']) {
      assert.ok(same(frame[key], live[key]), `fixture ${key} != live at ${frame.s}`);
      assert.ok(same(frame[key], replica[key]), `fixture ${key} != replica at ${frame.s}`);
    }
  }
});

test('coast replica matches live circuitRoad at fractional stations', () => {
  const {circuitRoad} = loadMasterCircuit(REPO_ROOT);
  for (const s of [320.125, 327.5, 399.999, 411.7, 500.313, 636.75, 679.875]) {
    const live = circuitRoad(s), replica = coastRoad(s);
    for (const key of ['p', 'T', 'R']) {
      for (let i = 0; i < 3; i++) assert.ok(same(live[key][i], replica[key][i]), `${key}[${i}] at ${s}`);
    }
    for (const key of ['h', 'curv', 'slope']) assert.ok(same(live[key], replica[key]), `${key} at ${s}`);
  }
});

test('fixture sample road returns recorded integer frames and survives interpolation', () => {
  const sample = loadCoastFrameSample();
  const sampleRoad = createFixtureSampleRoad(sample.frames);
  const frame = sample.frames[80];
  assert.deepEqual(sampleRoad(frame.s), frame);
  const interpolated = sampleRoad(400.5);
  for (const key of ['p', 'T', 'R']) {
    assert.ok(interpolated[key].every(Number.isFinite), `${key} finite`);
  }
  for (const key of ['h', 'curv', 'slope']) assert.ok(Number.isFinite(interpolated[key]), `${key} finite`);
});

// ---------------------------------------------------------------------------
// Straight road placement
// ---------------------------------------------------------------------------

test('straight-road placement is rigid, road-facing and exactly at the clearance limit', () => {
  const {parts} = fixed();
  const road = straightRoad({height: 0.25});
  const result = placeStreet(parts, road, 100, 1, SETBACK);

  assert.equal(result.centerS, 100);
  assert.equal(result.side, 1);
  assert.equal(result.setback, SETBACK);
  assert.equal(result.requiredClearance, 12);
  assert.equal(result.nominalBaseOffset, 8 + SETBACK + Math.max(
    ...parts.map(part => -localBounds(part).min[2] - part.pivot[2])));
  assert.ok(near(result.baseOffset, result.nominalBaseOffset, 1e-12), 'straight road needs no curvature fit');
  assert.ok(near(result.clearance, 12, 1e-9), `straight clearance ${result.clearance}`);
  assert.deepEqual(result.placements.map(placement => placement.id), ['house-a', 'house-g', 'house-m']);
  assert.deepEqual(result.placements.map(placement => placement.station), [90, 100, 110]);

  assertPlacementSet(result, parts, road, {deep: true, scan: {from: 20, to: 180, step: 1}});
  for (const placement of result.placements) {
    assert.ok(near(placement.pivot[1], 0.25, 1e-12), 'pivot height');
    const frame = road(placement.station);
    const offset = [placement.pivot[0] - frame.p[0], placement.pivot[2] - frame.p[2]];
    const lateral = offset[0] * -Math.sin(frame.h) + offset[1] * Math.cos(frame.h);
    assert.ok(lateral > 0, 'house is on +R side');
  }
});

test('side -1 mirrors the row, keeps stations and still faces the road', () => {
  const {parts} = fixed();
  const road = straightRoad({height: 0.25});
  const positive = placeStreet(parts, road, 100, 1, SETBACK);
  const negative = placeStreet(parts, road, 100, -1, SETBACK);

  assertPlacementSet(negative, parts, road, {deep: true, scan: {from: 20, to: 180, step: 1}});
  assert.deepEqual(negative.placements.map(placement => placement.station), [90, 100, 110]);
  for (let i = 0; i < 3; i++) {
    const a = positive.placements[i], b = negative.placements[i];
    const ax = column(a.matrix, 0), bx = column(b.matrix, 0);
    const az = column(a.matrix, 2), bz = column(b.matrix, 2);
    for (let k = 0; k < 3; k++) {
      assert.ok(near(bx[k], -ax[k], 1e-12), `${a.id} X axis mirrored`);
      assert.ok(near(bz[k], -az[k], 1e-12), `${a.id} Z axis mirrored`);
    }
    assert.ok(near(b.pivot[1], a.pivot[1], 1e-12), `${a.id} height unchanged`);
    assert.ok(b.frontDotRoad > 0.999999);
  }
  const g = negative.placements.find(placement => placement.id === 'house-g');
  const a = negative.placements.find(placement => placement.id === 'house-a');
  const lateralOf = placement => {
    const frame = road(placement.station);
    return (placement.pivot[0] - frame.p[0]) * -frame.R[0] +
      (placement.pivot[2] - frame.p[2]) * -frame.R[2];
  };
  assert.ok(near(lateralOf(g) - lateralOf(a), 2, 1e-9), 'house-g keeps its +2 m depth on side -1');
});

test('setback 0 is accepted and places houses 8 m from the centreline', () => {
  const {parts} = fixed();
  const road = straightRoad();
  const result = placeStreet(parts, road, 100, 1, 0);
  assert.equal(result.requiredClearance, CLEARANCE_BASE_M);
  assert.ok(near(result.baseOffset, 8 + 4.284000396728516, 1e-9));
  assert.ok(near(result.clearance, 8, 1e-9), `clearance ${result.clearance}`);
  assertPlacementSet(result, parts, road);
});

test('fractional centre and heading keep bottom pivots on their own station', () => {
  const {parts} = fixed();
  const road = straightRoad({height: 0.25, heading: 0.3});
  const result = placeStreet(parts, road, 100.25, 1, SETBACK);
  assertPlacementSet(result, parts, road);
  for (const placement of result.placements) {
    const frame = road(placement.station);
    assert.ok(near(placement.pivot[1], frame.p[1], 1e-12));
    assert.ok(near(placement.pivot[1], 0.25, 1e-12));
  }
});

// ---------------------------------------------------------------------------
// Left/right curves, reverse side, curvature-fit clearance
// ---------------------------------------------------------------------------

test('curve station 440 (right-hand bend) and 680 (left-hand bend) both place safely', () => {
  const {parts} = fixed();
  assert.ok(coastRoad(440).curv < 0, 'station 440 should bend one way');
  assert.ok(coastRoad(680).curv > 0, 'station 680 should bend the other way');
  for (const centerS of [440, 680]) {
    for (const side of [1, -1]) {
      const result = placeStreet(parts, coastRoad, centerS, side, SETBACK);
      assert.equal(result.side, side);
      assertPlacementSet(result, parts, coastRoad, {deep: centerS === 440 && side === 1});
      assert.ok(result.baseOffset > result.nominalBaseOffset, `station ${centerS}/${side}: curved AABB fit should expand the base`);
      for (const placement of result.placements) {
        const frame = coastRoad(placement.station);
        assert.ok(near(placement.pivot[1], frame.p[1], 1e-9), 'bottom pivot on slope height');
      }
    }
  }
});

test('curved rows keep the original depth difference and no stretched walls', () => {
  const {parts} = fixed();
  const result = placeStreet(parts, coastRoad, 410, -1, SETBACK);
  assertPlacementSet(result, parts, coastRoad, {deep: true});
  const a = result.placements.find(placement => placement.id === 'house-a');
  const g = result.placements.find(placement => placement.id === 'house-g');
  const lateral = placement => {
    const frame = coastRoad(placement.station);
    return (placement.pivot[0] - frame.p[0]) * -frame.R[0] +
      (placement.pivot[2] - frame.p[2]) * -frame.R[2];
  };
  assert.ok(near(lateral(g) - lateral(a), 2, 1e-9), 'house-g remains 2 m deeper');
});

// ---------------------------------------------------------------------------
// Bad frames
// ---------------------------------------------------------------------------

test('bad placement frames return a specific house and reason', () => {
  const {parts} = fixed();
  const road = straightRoad({height: 0.25});
  const cases = [
    ['missing frame', () => null, /not an object/],
    ['non-finite p', frame => { frame.p[0] = NaN; return frame; }, /p must be a finite 3-vector/],
    ['zero T', frame => { frame.T = [0, 0, 0]; return frame; }, /T is not unit length/],
    ['scaled T', frame => { frame.T = [2, 0, 0]; return frame; }, /T is not unit length/],
    ['degenerate R', frame => { frame.R = [0, 0, 0]; return frame; }, /R is not unit length/],
    ['non-orthogonal basis', frame => { frame.R = [1, 0, 0]; return frame; }, /not orthogonal|right-handed/],
    ['banked basis', frame => { frame.T = [1, 0, 0]; frame.R = [0, 0.1, Math.sqrt(1 - 0.01)]; return frame; }, /horizontal|not orthogonal|right-handed/],
    ['left-handed basis', frame => { frame.T = [0, 0, 1]; frame.R = [1, 0, 0]; return frame; }, /right-handed|h does not match/],
    ['heading mismatch', frame => { frame.h = 1; return frame; }, /h does not match/],
    ['NaN curvature', frame => { frame.curv = NaN; return frame; }, /curv must be a finite number/],
    ['infinite slope', frame => { frame.slope = Infinity; return frame; }, /slope must be a finite number/],
    ['missing R', frame => { delete frame.R; return frame; }, /R must be a finite 3-vector/],
  ];
  for (const [name, mutate, message] of cases) {
    expectPlacementError(
      () => placeStreet(parts, badFrameRoad(road, 110, mutate), 100, 1, SETBACK),
      {code: 'invalid_frame', houseId: 'house-m', phase: 'placement', station: 110, message},
    );
  }
});

test('bad clearance-polyline frames are rejected with the sample station', () => {
  const {parts} = fixed();
  const road = badFrameRoad(straightRoad({height: 0.25}), 95, () => null);
  expectPlacementError(
    () => placeStreet(parts, road, 100, 1, SETBACK),
    {code: 'invalid_frame', phase: 'clearance', station: 95, message: /clearance polyline station 95/},
  );
});

test('sampleRoad exceptions surface as invalid frames with house context', () => {
  const {parts} = fixed();
  const road = straightRoad({height: 0.25});
  const throwing = s => {
    if (s === 110) throw new Error('boom');
    return road(s);
  };
  expectPlacementError(
    () => placeStreet(parts, throwing, 100, 1, SETBACK),
    {code: 'invalid_frame', houseId: 'house-m', station: 110, message: /sampleRoad threw.*boom/},
  );
});

test('clearance near the sample range edges covers every recorded segment', () => {
  const {parts} = fixed();
  // Regressions for a window that only reached max|pivot.x| + local X and
  // ignored the required distance: the true nearest 1 m segment sat outside
  // the window, so 677/678 reported ok with ~11.99 m and 680/1/6 m reported a
  // per-house value that was not the sample minimum.
  for (const centerS of [677, 678]) {
    const result = placeStreet(parts, coastRoad, centerS, 1, SETBACK);
    assert.equal(result.ok, true, `station ${centerS}: unexpected violations ${JSON.stringify(result.violations)}`);
    assert.deepEqual(result.violations, []);
    for (const placement of result.placements) {
      const {min, at} = fullSampleClearance(parts, coastRoad, placement);
      assert.ok(min >= 12 - 1e-9, `station ${centerS}/${placement.id}: full-sample clearance ${min} at ${at} below 12`);
      assert.ok(near(min, placement.clearance, 1e-6),
        `station ${centerS}/${placement.id}: stored ${placement.clearance} != full-sample ${min} at ${at}`);
    }
    if (centerS === 677) {
      const houseA = result.placements.find(placement => placement.id === 'house-a');
      assert.ok(near(houseA.clearance, 12.01, 1e-6), `677/1/4m house-a clearance ${houseA.clearance}`);
    }
  }

  const primary = placeStreet(parts, coastRoad, 680, 1, SETBACK);
  const second = shiftSetback(primary, coastRoad, SECOND_DELTA);
  const houseA = second.placements.find(placement => placement.id === 'house-a');
  const {min, at} = fullSampleClearance(parts, coastRoad, houseA);
  assert.ok(min >= 14 - 1e-9, `680/1/6m house-a: full-sample clearance ${min} at ${at} below 14`);
  assert.ok(near(min, 14.1501325156841, 1e-6), `680/1/6m house-a: full-sample clearance ${min}`);
  assert.equal(at, 663, `680/1/6m house-a: nearest segment station ${at}`);
  assert.ok(near(houseA.clearance, min, 1e-6),
    `680/1/6m house-a: stored ${houseA.clearance} != full-sample ${min} at ${at}`);
});

test('unavoidable clearance failures return the specific house and reason', () => {
  const {parts} = fixed();
  const straight = straightRoad({height: 0.25});
  // A valid but fold-back road: 1 m segments jump across the street envelope at
  // every sample except the three house stations, so no shared radial offset can
  // satisfy the clearance rule. The adapter must report, not silently pass.
  const zigzag = s => {
    const frame = straight(s);
    if (Number.isInteger(s) && s >= 84 && s <= 116 && ![90, 100, 110].includes(s)) {
      return {...frame, p: [frame.p[0], frame.p[1], s % 2 ? 1e6 : -1e6]};
    }
    return frame;
  };
  const result = placeStreet(parts, zigzag, 100, 1, SETBACK);
  assert.equal(result.ok, false);
  assert.equal(result.violations.length, 3);
  assert.equal(result.clearance, 0);
  for (const violation of result.violations) {
    assert.ok(['house-a', 'house-g', 'house-m'].includes(violation.houseId));
    assert.equal(violation.code, 'clearance');
    assert.equal(violation.required, 12);
    assert.match(violation.reason, new RegExp(`house ${violation.houseId}`));
    assert.ok(Number.isFinite(violation.measured));
    assert.equal(result.placements.find(placement => placement.id === violation.houseId).clearance, violation.measured);
    assertRigidMatrix(result.placements.find(placement => placement.id === violation.houseId).matrix, violation.houseId);
  }
});

// ---------------------------------------------------------------------------
// Invalid arguments
// ---------------------------------------------------------------------------

test('negative and non-finite setbacks are rejected', () => {
  const {parts} = fixed();
  for (const value of [-1, -0.001, -Infinity, Infinity, NaN, '4', undefined, null]) {
    expectPlacementError(
      () => placeStreet(parts, straightRoad(), 100, 1, value),
      {code: 'invalid_setback'},
    );
  }
});

test('invalid side, centre and sampleRoad are rejected', () => {
  const {parts} = fixed();
  for (const side of [0, 2, -2, '1', NaN]) {
    expectPlacementError(() => placeStreet(parts, straightRoad(), 100, side, 4), {code: 'invalid_side'});
  }
  for (const centerS of [NaN, Infinity, '100', undefined]) {
    expectPlacementError(() => placeStreet(parts, straightRoad(), centerS, 1, 4), {code: 'invalid_center'});
  }
  for (const sampleRoad of [null, {}, 42]) {
    expectPlacementError(() => placeStreet(parts, sampleRoad, 100, 1, 4), {code: 'invalid_sample_road'});
  }
});

// ---------------------------------------------------------------------------
// Setback 4 m -> 6 m second pass: R-axis translation only
// ---------------------------------------------------------------------------

test('setback 4 to 6 m only translates along R and keeps rotation/size', () => {
  const {parts} = fixed();
  const cases = [
    ['straight', straightRoad({height: 0.25}), 100],
    ['coast-400', coastRoad, 400],
    ['coast-440', coastRoad, 440],
    ['coast-636', coastRoad, 636],
  ];
  for (const [label, road, centerS] of cases) {
    for (const side of [1, -1]) {
      const before = hashes(parts);
      const primary = placeStreet(parts, road, centerS, side, SETBACK);
      const second = shiftSetback(primary, road, SECOND_DELTA);

      assert.equal(second.setback, 6, `${label}/${side}: setback`);
      assert.equal(second.requiredClearance, 14, `${label}/${side}: required`);
      assert.ok(near(second.baseOffset, primary.baseOffset + 2, 1e-12), `${label}/${side}: base offset shift`);
      assert.ok(second.clearance >= 14 - 1e-9, `${label}/${side}: shifted clearance ${second.clearance}`);
      assert.deepEqual(second.violations, [], `${label}/${side}: shifted violations`);
      assert.equal(second.ok, true);
      assert.equal(second.shiftedFrom.setback, 4);
      assert.equal(second.shiftedFrom.delta, 2);
      assert.ok(near(second.nominalBaseOffset, primary.nominalBaseOffset + 2, 1e-12));

      for (let i = 0; i < primary.placements.length; i++) {
        const a = primary.placements[i], b = second.placements[i];
        assert.equal(b.id, a.id);
        assert.equal(b.station, a.station);
        for (const index of [0, 1, 2, 4, 5, 6, 8, 9, 10]) {
          assert.ok(Object.is(b.matrix[index], a.matrix[index]), `${label}/${side}/${a.id}: linear[${index}] changed`);
        }
        const z = column(a.matrix, 2);
        const shift = [b.matrix[12] - a.matrix[12], b.matrix[13] - a.matrix[13], b.matrix[14] - a.matrix[14]];
        assert.ok(near(shift[0], 2 * z[0], 1e-12), `${label}/${side}/${a.id}: shift X is not 2*R`);
        assert.ok(near(shift[1], 0, 1e-12), `${label}/${side}/${a.id}: vertical shift`);
        assert.ok(near(shift[2], 2 * z[2], 1e-12), `${label}/${side}/${a.id}: shift Z is not 2*R`);
        assert.ok(near(dot3(shift, column(a.matrix, 0)), 0, 1e-12), `${label}/${side}/${a.id}: shift has forward component`);
        assert.ok(near(b.pivot[1], a.pivot[1], 1e-12), `${label}/${side}/${a.id}: bottom height changed`);
        assert.equal(b.frontDotRoad, a.frontDotRoad, `${label}/${side}/${a.id}: front direction changed`);
        assert.ok(near(b.bbox.minX - a.bbox.minX, shift[0], 1e-12));
        assert.ok(near(b.bbox.maxZ - a.bbox.maxZ, shift[2], 1e-12));
        assert.ok(near(b.bbox.minY, a.bbox.minY, 1e-12));
      }
      assertPlacementSet(second, parts, road, {deep: label === 'coast-400' && side === 1});
      assert.deepEqual(hashes(parts), before, `${label}/${side}: mesh mutated`);
    }
  }
});

test('shiftSetback rejects bad deltas, results and stale frames', () => {
  const {parts} = fixed();
  const result = placeStreet(parts, straightRoad(), 100, 1, SETBACK);
  expectPlacementError(() => shiftSetback({}, straightRoad(), 2), {code: 'invalid_result'});
  expectPlacementError(() => shiftSetback(result, straightRoad(), NaN), {code: 'invalid_setback'});
  expectPlacementError(() => shiftSetback(result, straightRoad(), -10), {code: 'invalid_setback'});
  expectPlacementError(() => shiftSetback(result, null, 2), {code: 'invalid_sample_road'});
  expectPlacementError(
    () => shiftSetback(result, straightRoad({heading: Math.PI / 2}), 2),
    {code: 'stale_frame', houseId: 'house-a'},
  );
});

test('sharp-bend 4 to 6 m shift can violate clearance and must be checked', () => {
  // Regression for the documented limit of the 1 cm fit margin: the pure
  // R-axis second pass does not re-fit baseOffset, so a sharp bend inside the
  // 320..680 sample range can still report a 6 m shortfall. This case is not
  // one of the report rows (those are sampled every 40 m).
  const {parts} = fixed();
  const fixture = createFixtureSampleRoad(loadCoastFrameSample().frames);
  for (const [label, road] of [['fixture', fixture], ['coastRoad', coastRoad]]) {
    const primary = placeStreet(parts, road, 510, -1, SETBACK);
    assert.equal(primary.ok, true, `${label}: 4 m placement should pass`);
    assert.ok(primary.clearance >= 12 - 1e-9, `${label}: 4 m clearance`);
    const primaryHouseM = primary.placements.find(placement => placement.id === 'house-m');
    assert.ok(near(primaryHouseM.clearance, 12.010, 0.001),
      `${label}: 4 m house-m clearance ${primaryHouseM.clearance}`);

    const second = shiftSetback(primary, road, SECOND_DELTA);
    assert.equal(second.setback, 6, `${label}: setback`);
    assert.equal(second.ok, false, `${label}: 6 m shift must report the sharp-bend shortfall`);
    assert.equal(second.violations.length, 1, `${label}: expected one violation`);
    const violation = second.violations[0];
    assert.equal(violation.houseId, 'house-m', `${label}: violating house`);
    assert.ok(near(violation.measured, 13.967, 0.001), `${label}: measured ${violation.measured}`);
    assert.ok(violation.measured < second.requiredClearance, `${label}: measured below requirement`);
    assert.equal(violation.at, 514, `${label}: nearest segment station`);
  }
});

// ---------------------------------------------------------------------------
// Clearance geometry unit cases
// ---------------------------------------------------------------------------

test('boxSegmentDistance handles separation, crossing and touching', () => {
  const box = {minX: 0, maxX: 1, minZ: 0, maxZ: 1};
  assert.ok(near(boxSegmentDistance(box, [2, 0.5], [3, 0.5]), 1, 1e-12));
  assert.equal(boxSegmentDistance(box, [-1, 0.5], [2, 0.5]), 0);
  assert.equal(boxSegmentDistance(box, [0.5, 0.5], [2, 2]), 0);
  assert.ok(near(boxSegmentDistance(box, [2, 0], [2, 2]), 1, 1e-12));
  assert.ok(near(boxSegmentDistance(box, [-1, 2], [2, 2]), 1, 1e-12));
  assert.ok(near(boxSegmentDistance(box, [1, 1], [2, 2]), 0, 1e-12));
  assert.equal(boxSegmentDistance(box, [0, 0], [0, 1]), 0);
});

// ---------------------------------------------------------------------------
// Coast 320..680 CPU report
// ---------------------------------------------------------------------------

test('coast 320..680 report: every row and both setbacks pass', () => {
  const report = buildCoastReport();
  assert.equal(report.sceneIntegration.startsWith('none'), true);
  assert.equal(report.source.circuitFrameSample, 'fixed-source/coast-280-720.frames.json');
  assert.equal(report.rows.length, 20);
  assert.deepEqual(report.summary.stations, [320, 360, 400, 440, 480, 520, 560, 600, 640, 680]);
  assert.equal(report.summary.allOk4m, true);
  assert.equal(report.summary.allOk6m, true);
  assert.equal(report.summary.rotationsPreserved6m, true);
  assert.ok(report.summary.minClearance4m >= 12 - 1e-9);
  assert.ok(report.summary.minClearance6m >= 14 - 1e-9);
  assert.equal(report.summary.rows, 20);
  assert.ok(report.rows.some(row => row.curvature < 0), 'report should include a right-hand bend');
  assert.ok(report.rows.some(row => row.curvature > 0), 'report should include a left-hand bend');

  const {parts} = fixed();
  for (const row of report.rows) {
    assert.equal(row.setback4.placements.length, 3);
    assert.equal(row.setback6.placements.length, 3);
    for (const placement of [...row.setback4.placements, ...row.setback6.placements]) {
      assert.equal(placement.matrix.length, 16);
      assert.ok(placement.matrix.every(Number.isFinite));
      assert.ok(placement.frontDotRoad > 0.999999);
    }
    for (const placement of row.setback4.placements) {
      const frame = coastRoad(placement.station);
      assert.ok(near(placement.pivot[1], frame.p[1], 1e-9));
    }
  }
  for (const row of report.rows) {
    assert.ok(row.setback4.clearance >= 12 - 1e-9, `row ${row.centerS}/${row.side} 4 m`);
    assert.ok(row.setback6.clearance >= 14 - 1e-9, `row ${row.centerS}/${row.side} 6 m`);
    for (let i = 0; i < 3; i++) {
      const a = row.setback4.placements[i], b = row.setback6.placements[i];
      assert.equal(a.id, b.id);
      for (const index of [0, 1, 2, 4, 5, 6, 8, 9, 10]) {
        assert.ok(Object.is(a.matrix[index], b.matrix[index]), `row ${row.centerS}/${row.side}/${a.id}: linear[${index}] changed`);
      }
      const shiftX = b.matrix[12] - a.matrix[12];
      const shiftZ = b.matrix[14] - a.matrix[14];
      assert.ok(near(shiftX * a.matrix[0] + shiftZ * a.matrix[2], 0, 1e-9), 'shift has forward component');
      assert.ok(near(shiftX * a.matrix[8] + shiftZ * a.matrix[10], SECOND_DELTA, 1e-9), 'shift is not 2 m along R');
      assert.ok(near(a.pivot[1], b.pivot[1], 1e-12), 'bottom height changed');
    }
  }
  assert.equal(parts.length, 3);
});

test('checked-in coast report matches a fresh deterministic build', () => {
  const file = path.join(HERE, 'out', 'coast-320-680.json');
  assert.ok(fs.existsSync(file), 'missing out/coast-320-680.json; run report-coast.mjs');
  const stored = JSON.parse(fs.readFileSync(file, 'utf8'));
  const fresh = buildCoastReport();
  assert.deepEqual(stored, fresh);
});
