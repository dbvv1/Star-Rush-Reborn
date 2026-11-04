import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {
  loadFixedRoad, cloneParts, triangleWorld, triangleRows, REPO_ROOT, SIDEBAND_PATH,
} from './fixed-source.mjs';
import {
  clipOuterBank, verifyBankSideband, triangleIndexSignature, PINNED_SOURCE,
  BANK_SIDEBAND_SCHEMA,
} from './clip.mjs';

const BANK_PART = 'road-and-graded-shoulder';

function getPart(parts, name = BANK_PART) {
  const part = parts.find(candidate => candidate.name === name);
  assert.ok(part, `missing part ${name}`);
  return part;
}

function bytesEqual(a, b) {
  return Buffer.compare(Buffer.from(a.buffer, a.byteOffset, a.byteLength),
    Buffer.from(b.buffer, b.byteOffset, b.byteLength)) === 0;
}

function assertAllPartsByteEqual(actual, expected) {
  assert.equal(actual.length, expected.length);
  for (let i = 0; i < actual.length; i++) {
    assert.ok(bytesEqual(actual[i].sourceData, expected[i].sourceData), `${actual[i].name} sourceData changed`);
    assert.ok(bytesEqual(actual[i].sourceIndices, expected[i].sourceIndices), `${actual[i].name} sourceIndices changed`);
  }
}

function triangleKey(part, triangleId) {
  const base = triangleId * 3;
  return `${part.sourceIndices[base]},${part.sourceIndices[base + 1]},${part.sourceIndices[base + 2]}`;
}

function outputTriangleKeys(part) {
  const keys = new Set();
  for (let triangleId = 0; triangleId < part.sourceIndices.length / 3; triangleId++) {
    keys.add(triangleKey(part, triangleId));
  }
  return keys;
}

function assertNonBankPreserved(inputPart, outputPart, bank) {
  assert.ok(bytesEqual(outputPart.sourceData.subarray(0, inputPart.sourceData.length), inputPart.sourceData),
    'original vertex buffer prefix changed');
  const keys = outputTriangleKeys(outputPart);
  let checked = 0;
  for (let triangleId = 0; triangleId < inputPart.sourceIndices.length / 3; triangleId++) {
    if (bank.has(triangleId)) continue;
    const key = triangleKey(inputPart, triangleId);
    assert.ok(keys.has(key), `non-bank triangle ${triangleId} (${key}) was removed or rewritten`);
    checked++;
  }
  return checked;
}

function assertValidGeometry(part) {
  for (let triangleId = 0; triangleId < part.sourceIndices.length / 3; triangleId++) {
    const rows = triangleRows(part, triangleId);
    for (const row of rows) assert.ok(row.every(Number.isFinite), `${part.name} triangle ${triangleId} is non-finite`);
    const [p0, p1, p2] = rows.map(row => row.slice(0, 3));
    const u = [p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]];
    const v = [p2[0] - p0[0], p2[1] - p0[1], p2[2] - p0[2]];
    const face = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const area = Math.hypot(...face);
    assert.ok(area > 1e-12 && Number.isFinite(area), `${part.name} triangle ${triangleId} is degenerate`);
    const normal = rows.reduce((sum, row) => sum.map((value, k) => value + row[3 + k]), [0, 0, 0]);
    const dot = face[0] * normal[0] + face[1] * normal[1] + face[2] * normal[2];
    assert.ok(dot > 0, `${part.name} triangle ${triangleId} is reversed against its normals`);
  }
}

function rectangles(corridors) {
  const output = [];
  for (const corridor of corridors) {
    const halfWidth = corridor.halfWidth ?? 8;
    for (let i = 0; i < corridor.points.length - 1; i++) {
      const [ax, az] = corridor.points[i], [bx, bz] = corridor.points[i + 1];
      const dx = bx - ax, dz = bz - az, length = Math.hypot(dx, dz);
      const nx = -dz / length, nz = dx / length;
      output.push({
        id: corridor.id, segment: i,
        points: [
          [ax + nx * halfWidth, az + nz * halfWidth],
          [bx + nx * halfWidth, bz + nz * halfWidth],
          [bx - nx * halfWidth, bz - nz * halfWidth],
          [ax - nx * halfWidth, az - nz * halfWidth],
        ],
      });
    }
  }
  return output;
}

function strictlyInside(rectangle, x, z) {
  const points = rectangle.points;
  let sign = 0;
  for (let i = 0; i < points.length; i++) {
    const [ax, az] = points[i], [bx, bz] = points[(i + 1) % points.length];
    const cross = (bx - ax) * (z - az) - (bz - az) * (x - ax);
    if (Math.abs(cross) <= 1e-6) return false;
    const current = Math.sign(cross);
    if (sign === 0) sign = current;
    else if (current !== sign) return false;
  }
  return true;
}

function assertNoCentroidInProtectedArea(outputPart, originalPart, bank, corridors) {
  const rects = rectangles(corridors);
  const originalVertexCount = originalPart.sourceData.length / 10;
  const originalBankKeys = new Set([...bank].map(triangleId => triangleKey(originalPart, triangleId)));
  for (let triangleId = 0; triangleId < outputPart.sourceIndices.length / 3; triangleId++) {
    const base = triangleId * 3;
    const ids = [outputPart.sourceIndices[base], outputPart.sourceIndices[base + 1], outputPart.sourceIndices[base + 2]];
    const clipped = ids.some(id => id >= originalVertexCount);
    const unchangedBank = !clipped && originalBankKeys.has(`${ids[0]},${ids[1]},${ids[2]}`);
    if (!clipped && !unchangedBank) continue;
    const centroid = [0, 0];
    for (const id of ids) {
      const world = triangleWorld(outputPart, id);
      centroid[0] += world[0] / 3;
      centroid[1] += world[2] / 3;
    }
    for (const rectangle of rects) {
      assert.ok(!strictlyInside(rectangle, centroid[0], centroid[1]),
        `bank triangle centroid ${triangleId} remains inside ${rectangle.id}/${rectangle.segment}`);
    }
  }
}

function tangentCorridor(part, triangleId, halfWidth = 8) {
  const [a, b, c] = triangleWorld(part, triangleId);
  const mid = [(a[0] + b[0]) / 2, (a[2] + b[2]) / 2];
  const centroid = [(a[0] + b[0] + c[0]) / 3, (a[2] + b[2] + c[2]) / 3];
  const dx = b[0] - a[0], dz = b[2] - a[2], length = Math.hypot(dx, dz);
  let nx = -dz / length, nz = dx / length;
  if (nx * (centroid[0] - mid[0]) + nz * (centroid[1] - mid[1]) > 0) {
    nx = -nx;
    nz = -nz;
  }
  return {
    id: 'tangent-edge', halfWidth,
    points: [
      [a[0] + nx * halfWidth, a[2] + nz * halfWidth],
      [b[0] + nx * halfWidth, b[2] + nz * halfWidth],
    ],
  };
}

async function fixed() {
  const {parts, sideband, adapter} = await loadFixedRoad();
  return {parts, sideband, adapter};
}

test('fixed source replay is byte-identical and the sideband binds 192 outer-bank triangles', async () => {
  const check = execFileSync('python3', ['authoring/coast-bank-clip/build-sideband.py', '--check'], {
    cwd: REPO_ROOT, encoding: 'utf8', timeout: 180000,
  });
  assert.equal(JSON.parse(check).ok, true);

  const {parts, sideband} = await fixed();
  assert.equal(sideband.schema, BANK_SIDEBAND_SCHEMA);
  assert.equal(sideband.sourceCommit, PINNED_SOURCE.repoCommit);
  assert.equal(sideband.replay.byteIdentical, true);
  assert.equal(sideband.replay.roadGlbSha256, PINNED_SOURCE.roadOutputGlb.sha256);
  assert.equal(sideband.triangleCount, 192);
  assert.deepEqual(sideband.families, {foliage: 96, soil: 96});
  assert.equal(sideband.vertexIndexSignature, PINNED_SOURCE.bankTriangleSignature);

  const part = getPart(parts);
  assert.equal(part.sourceIndices.length / 3, sideband.partTriangleCount);
  const verified = verifyBankSideband(parts, sideband);
  assert.equal(verified.triangles.length, 192);
  assert.equal(triangleIndexSignature(part, sideband.triangles), sideband.vertexIndexSignature);

  for (const record of sideband.records) {
    assert.ok(record.triangle >= 0 && record.triangle < sideband.partTriangleCount);
    assert.ok(record.family === 'foliage' || record.family === 'soil');
    const vertices = triangleWorld(part, record.triangle);
    assert.ok(vertices.every(vertex => Math.abs(vertex[2]) > 8),
      `bank triangle ${record.triangle} reaches the asphalt half-width`);
    assert.ok(vertices.every(vertex => Math.sign(vertex[2]) === record.side));
  }
  const bank = new Set(sideband.triangles);
  for (let triangleId = 0; triangleId < part.sourceIndices.length / 3; triangleId++) {
    if (bank.has(triangleId)) continue;
    const centroidZ = triangleWorld(part, triangleId).reduce((sum, vertex) => sum + vertex[2], 0) / 3;
    if (Math.abs(centroidZ) <= 7.9) assert.ok(!bank.has(triangleId));
  }
});

test('no-intersection keeps every part byte-identical and does not mutate the input', async () => {
  const {parts, sideband} = await fixed();
  const before = cloneParts(parts);
  const corridors = [{id: 'far-neighbor', points: [[100, -120], [100, 120], [140, 120]], halfWidth: 8}];
  const {parts: result, stats} = clipOuterBank(parts, sideband, corridors);
  assert.equal(stats.affectedTriangles, 0);
  assert.equal(stats.addedTriangles, 0);
  assertAllPartsByteEqual(result, before);
  assertAllPartsByteEqual(parts, before);
  const empty = clipOuterBank(parts, sideband, []);
  assert.equal(empty.stats.corridorSegments, 0);
  assertAllPartsByteEqual(empty.parts, before);
});

test('hairpin neighbor clips only outer bank; asphalt, markings and rails stay byte-identical', async () => {
  const {parts, sideband} = await fixed();
  const original = cloneParts(parts);
  const corridors = [{id: 'hairpin-neighbor', points: [[0, -17], [6, -17], [6, 17], [0, 17]], halfWidth: 8}];
  const {parts: result, stats} = clipOuterBank(parts, sideband, corridors);
  assert.ok(stats.affectedTriangles > 0);
  assert.ok(stats.removedTriangles > 0);
  assert.ok(stats.clippedTriangles > 0);
  assert.ok(stats.outputBankArea < stats.inputBankArea - 100);
  assert.deepEqual(stats.partsTouched, [BANK_PART]);

  const bank = new Set(sideband.triangles);
  const originalPart = getPart(original), outputPart = getPart(result);
  const preserved = assertNonBankPreserved(originalPart, outputPart, bank);
  assert.equal(preserved, originalPart.sourceIndices.length / 3 - 192);
  for (let i = 0; i < result.length; i++) {
    if (result[i].name === BANK_PART) continue;
    assert.ok(bytesEqual(result[i].sourceData, original[i].sourceData));
    assert.ok(bytesEqual(result[i].sourceIndices, original[i].sourceIndices));
  }
  for (const part of result) assertValidGeometry(part);
  assertNoCentroidInProtectedArea(outputPart, originalPart, bank, corridors);
  assertAllPartsByteEqual(parts, original);

  const outputKeys = outputTriangleKeys(outputPart);
  let asphalt = 0, markings = 0;
  for (let triangleId = 0; triangleId < originalPart.sourceIndices.length / 3; triangleId++) {
    const vertices = triangleWorld(originalPart, triangleId);
    const centroidZ = vertices.reduce((sum, vertex) => sum + vertex[2], 0) / 3;
    if (Math.abs(centroidZ) <= 7.9) {
      asphalt++;
      assert.ok(outputKeys.has(triangleKey(originalPart, triangleId)), `asphalt triangle ${triangleId} changed`);
    }
    const rows = triangleRows(originalPart, triangleId);
    if (rows.every(row => Math.abs(row[1] - 0.003) < 1e-6) &&
        vertices.every(vertex => Math.abs(vertex[2]) < 2)) {
      markings++;
      assert.ok(outputKeys.has(triangleKey(originalPart, triangleId)), `marking triangle ${triangleId} changed`);
    }
  }
  assert.ok(asphalt > 0);
  assert.equal(markings, 8);

  const again = clipOuterBank(parts, sideband, corridors).parts;
  for (let i = 0; i < result.length; i++) {
    assert.ok(bytesEqual(result[i].sourceData, again[i].sourceData));
    assert.ok(bytesEqual(result[i].sourceIndices, again[i].sourceIndices));
  }

  const pair = [corridors[0], {id: 'aaa-second-bank', points: [[8, 15], [11, 15]], halfWidth: 6}];
  const forward = clipOuterBank(parts, sideband, pair).parts;
  const reverse = clipOuterBank(parts, sideband, [...pair].reverse()).parts;
  for (let i = 0; i < forward.length; i++) {
    assert.ok(bytesEqual(forward[i].sourceData, reverse[i].sourceData), 'corridor order changed sourceData');
    assert.ok(bytesEqual(forward[i].sourceIndices, reverse[i].sourceIndices), 'corridor order changed indices');
  }
});

test('boundary tangency is untouched and bad corridors or partitions are rejected', async () => {
  const {parts, sideband} = await fixed();
  const original = cloneParts(parts);
  const part = getPart(parts);
  const tangent = tangentCorridor(part, sideband.triangles[0]);
  const tangentResult = clipOuterBank(parts, sideband, [tangent]);
  assert.equal(tangentResult.stats.affectedTriangles, 0);
  assertAllPartsByteEqual(tangentResult.parts, original);

  const ok = {id: 'ok', points: [[0, -13], [4, -13]], halfWidth: 8};
  assert.throws(() => clipOuterBank(parts, sideband, [{...ok, points: [[0, -13], [0, -13]]}]), /zero or non-finite length/);
  assert.throws(() => clipOuterBank(parts, sideband, [{...ok, points: [[-1e308, 0], [1e308, 0]]}]), /zero or non-finite length/);
  assert.throws(() => clipOuterBank(parts, sideband, [{...ok, halfWidth: 1e308}]), /non-finite rectangle/);
  assert.throws(() => clipOuterBank(parts, sideband, [{...ok, points: [[0, -13], [NaN, -13]]}]), /not finite/);
  assert.throws(() => clipOuterBank(parts, sideband, [{...ok, points: [[0, -13], [Infinity, -13]]}]), /not finite/);
  assert.throws(() => clipOuterBank(parts, sideband, [{...ok, halfWidth: 0}]), /halfWidth/);
  assert.throws(() => clipOuterBank(parts, sideband, [{...ok, halfWidth: -8}]), /halfWidth/);
  assert.throws(() => clipOuterBank(parts, sideband, [{...ok, points: [[0, -13]]}]), /at least two/);
  assert.throws(() => clipOuterBank(parts, sideband, [{...ok}, {...ok}]), /Duplicate/);
  assert.throws(() => clipOuterBank(parts, sideband, [{...ok, id: ''}]), /stable id/);
  assert.throws(() => clipOuterBank(parts, sideband, 'not-an-array'), /array/);

  const outerRange = structuredClone(sideband);
  outerRange.triangles[0] = sideband.partTriangleCount;
  assert.throws(() => verifyBankSideband(parts, outerRange), /outside decoded part/);

  const wrongTriangle = structuredClone(sideband);
  wrongTriangle.triangles[0] = 0;
  wrongTriangle.records[0].triangle = 0;
  assert.throws(() => verifyBankSideband(parts, wrongTriangle), /signature|binding/);

  const missingRecord = structuredClone(sideband);
  missingRecord.records.pop();
  assert.throws(() => verifyBankSideband(parts, missingRecord), /records are incomplete/);

  const missingPart = structuredClone(sideband);
  missingPart.part = 'not-a-road-part';
  assert.throws(() => verifyBankSideband(parts, missingPart), /missing or ambiguous/);

  const countDrift = structuredClone(sideband);
  countDrift.partTriangleCount--;
  assert.throws(() => verifyBankSideband(parts, countDrift), /count does not match/);

  const sourceDrift = structuredClone(sideband);
  sourceDrift.source.roadOutputGlb.sha256 = '0'.repeat(64);
  assert.throws(() => verifyBankSideband(parts, sourceDrift), /hash drift/);

  const replayDrift = structuredClone(sideband);
  replayDrift.replay.byteIdentical = false;
  assert.throws(() => verifyBankSideband(parts, replayDrift), /byte-identical/);

  const reordered = structuredClone(sideband);
  [reordered.triangles[0], reordered.triangles[1]] = [reordered.triangles[1], reordered.triangles[0]];
  [reordered.records[0].triangle, reordered.records[1].triangle] = [reordered.records[1].triangle, reordered.records[0].triangle];
  assert.throws(() => verifyBankSideband(parts, reordered), /signature|binding/);
});

test('bendRoadParts keeps triangle order and the sideband, and bad frames fail upstream', async () => {
  const {parts, sideband, adapter} = await fixed();
  const straight = station => ({p: [station, 0, 0], T: [1, 0, 0], R: [0, 0, 1], curv: 0, slope: 0});
  const bent = adapter.bendRoadParts(parts, straight, 0);
  for (let i = 0; i < parts.length; i++) {
    assert.ok(bytesEqual(bent[i].sourceIndices, parts[i].sourceIndices), `${parts[i].name} triangle order changed`);
    assert.deepEqual(bent[i].pivot, [0, 0, 0]);
  }
  assert.equal(verifyBankSideband(bent, sideband).triangles.length, 192);
  const corridors = [{id: 'bank-neighbor', points: [[-4, -13], [4, -13]], halfWidth: 8}];
  const {parts: result, stats} = clipOuterBank(bent, sideband, corridors);
  assert.ok(stats.affectedTriangles > 0);
  const bank = new Set(sideband.triangles);
  assertNonBankPreserved(getPart(bent), getPart(result), bank);
  for (const part of result) assertValidGeometry(part);

  const badPosition = station => ({p: [station, NaN, 0], T: [1, 0, 0], R: [0, 0, 1]});
  assert.throws(() => adapter.bendRoadParts(parts, badPosition, 0), /Invalid circuit frame vectors/);
  const badBasis = station => ({p: [station, 0, 0], T: [1, 0, 0], R: [0, 0, 2]});
  assert.throws(() => adapter.bendRoadParts(parts, badBasis, 0), /Invalid circuit frame basis/);
});

test('halfWidth 8 to 8.5 changes only outer bank, not module seams or the seaward edge', async () => {
  const {parts, sideband} = await fixed();
  const corridor = halfWidth => [{id: 'bank-protection', points: [[-4, -11], [4, -11]], halfWidth}];
  const narrow = clipOuterBank(parts, sideband, corridor(8));
  const wide = clipOuterBank(parts, sideband, corridor(8.5));
  for (const result of [narrow, wide]) {
    assert.ok(result.stats.affectedTriangles > 0);
    const bank = new Set(sideband.triangles);
    assertNonBankPreserved(getPart(parts), getPart(result.parts), bank);
    for (let i = 0; i < result.parts.length; i++) {
      if (result.parts[i].name === BANK_PART) continue;
      assert.ok(bytesEqual(result.parts[i].sourceData, parts[i].sourceData));
      assert.ok(bytesEqual(result.parts[i].sourceIndices, parts[i].sourceIndices));
    }
    for (const part of result.parts) assertValidGeometry(part);
  }
  assert.ok(wide.stats.outputBankArea < narrow.stats.outputBankArea);
  for (let i = 0; i < wide.parts.length; i++) {
    if (wide.parts[i].name !== BANK_PART) {
      assert.ok(bytesEqual(wide.parts[i].sourceData, narrow.parts[i].sourceData));
      assert.ok(bytesEqual(wide.parts[i].sourceIndices, narrow.parts[i].sourceIndices));
    }
  }

  const originalPart = getPart(parts), outputNarrow = getPart(narrow.parts), outputWide = getPart(wide.parts);
  const originalCount = originalPart.sourceIndices.length / 3;
  const isModuleSeam = triangleId => triangleWorld(originalPart, triangleId)
    .some(vertex => Math.abs(Math.abs(vertex[0]) - 12) <= 1e-6);
  const isSeaEdge = triangleId => triangleWorld(originalPart, triangleId)
    .some(vertex => Math.abs(Math.abs(vertex[2]) - 22) <= 1e-6);
  for (const predicate of [isModuleSeam, isSeaEdge]) {
    let count = 0;
    for (let triangleId = 0; triangleId < originalCount; triangleId++) {
      if (!predicate(triangleId)) continue;
      count++;
      const key = triangleKey(originalPart, triangleId);
      assert.ok(outputTriangleKeys(outputNarrow).has(key), `seam/sea triangle ${triangleId} changed at halfWidth 8`);
      assert.ok(outputTriangleKeys(outputWide).has(key), `seam/sea triangle ${triangleId} changed at halfWidth 8.5`);
    }
    assert.ok(count > 0);
  }
});

test('sideband JSON stays free of local absolute paths', async () => {
  const {readFileSync} = await import('node:fs');
  const text = readFileSync(SIDEBAND_PATH, 'utf8');
  assert.ok(!/[A-Za-z]:\\\\/.test(text));
  const privateRoots = ['/' + 'Users' + '/', '/' + 'home' + '/'];
  assert.ok(privateRoots.every(root => !text.includes(root)));
});
