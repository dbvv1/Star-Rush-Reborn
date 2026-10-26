// Offline, original-source signboard candidates. Never imported by the game build.
import {readFileSync, mkdirSync, writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {loadSignboardStyles,applySignboardStyle} from '../../signboard-assets.mjs';
const hash = text => createHash('sha256').update(text).digest('hex');
const engine = readFileSync('engine.js', 'utf8'), scenery = readFileSync('scenery.js', 'utf8');
const original = scenery.slice(scenery.indexOf('function signBoard('), scenery.indexOf('function scenicProp('));
assert.equal(hash(engine), 'baa90e01c1eee30ba88ee1316a7a390a168415826208f379b2b608c4b89d505a');
assert.equal(hash(original), '10e0b7908dc656ca6c55e05ce5f48b089c30984138c9e267456b016f4f483bb6');
const variants = Object.entries(loadSignboardStyles()).map(([id,style])=>({id,...style}));
const meshes = [];
for (const variant of variants) for (const direction of ['left', 'right']) {
  const modified=applySignboardStyle(scenery,variant);
  const source=modified.slice(modified.indexOf('function signBoard('),modified.indexOf('function scenicProp('));
  const scope = {result: null};
  vm.runInNewContext(engine + '\n' + source + `\nconst c = new Collector(); signBoard(c, '${direction}');result={data:c.data,indices:c.indices};`, scope, {timeout: 5000});
  const {data, indices} = scope.result;
  assert.ok(data.every(Number.isFinite)); assert.equal(indices.length % 3, 0);
  assert.ok(indices.every(i => Number.isInteger(i) && i >= 0 && i < data.length / 10));
  meshes.push({id: `${variant.id}-${direction}`, variant: variant.id, direction, data, indices, geometryHash: hash(JSON.stringify(data.filter((_,i)=>i%10<6))), colorsHash: hash(JSON.stringify(data.filter((_,i)=>i%10>=6&&i%10<9)))});
}
for (const direction of ['left', 'right']) {
  const a=meshes.find(m=>m.id===`baseline-${direction}`),b=meshes.find(m=>m.id===`navy-v1-${direction}`);
  assert.equal(a.geometryHash,b.geometryHash); assert.deepEqual(Array.from(a.indices),Array.from(b.indices)); assert.notEqual(a.colorsHash,b.colorsHash);
}
for (const direction of ['left', 'right']) {
  const a=meshes.find(m=>m.id===`navy-v1-${direction}`),b=meshes.find(m=>m.id===`navy-v2-${direction}`);
  assert.deepEqual(Array.from(a.indices),Array.from(b.indices)); assert.equal(a.colorsHash,b.colorsHash); assert.notEqual(a.geometryHash,b.geometryHash);
  // Pole and panel are first: 38 cylinder vertices + 216 rounded-box vertices.
  assert.deepEqual(Array.from(a.data.slice(0,2540)),Array.from(b.data.slice(0,2540)));
}
const report = {sourceCommit: '32b2d3abde569f182c13780077669f3ab628f946', engineHash: hash(engine), signBoardHash: hash(original), scope: 'Offline author preview only, no game scene/physics/runtime integration', variants, meshes};
mkdirSync('outputs/signboard-author', {recursive: true});
writeFileSync('outputs/signboard-author/source.json', JSON.stringify(report));
console.log(JSON.stringify(meshes.map(({id,data,indices,geometryHash,colorsHash})=>({id,vertices:data.length/10,triangles:indices.length/3,geometryHash,colorsHash})),null,2));
