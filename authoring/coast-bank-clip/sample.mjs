/** Minimal CPU sample: decode the fixed road.glb with the fixed adapter, then
 * trim its 192 outer-bank triangles against sample-corridors.json.
 *
 * Run from the repository root:
 *   node authoring/coast-bank-clip/sample.mjs
 *
 * This is an authoring/CPU check only. It does not fetch, render, bend, or
 * modify the game scene, and it writes no files.
 */
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {clipOuterBank, verifyBankSideband} from './clip.mjs';
import {loadFixedRoad} from './fixed-source.mjs';

const corridors = JSON.parse(readFileSync(fileURLToPath(new URL('./sample-corridors.json', import.meta.url)), 'utf8'));
const {parts, sideband} = await loadFixedRoad();
const verified = verifyBankSideband(parts, sideband);
const {parts: clipped, stats} = clipOuterBank(parts, sideband, corridors);
const before = parts.find(part => part.name === sideband.part);
const after = clipped.find(part => part.name === sideband.part);

process.stdout.write(JSON.stringify({
  part: sideband.part,
  bankTriangles: verified.triangles.length,
  trianglesBefore: before.sourceIndices.length / 3,
  trianglesAfter: after.sourceIndices.length / 3,
  verticesBefore: before.sourceData.length / 10,
  verticesAfter: after.sourceData.length / 10,
  stats,
}, null, 2) + '\n');
