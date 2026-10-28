import assert from 'node:assert/strict';
import worker from '../dist/server/index.js';
const fetch = (path,method='GET') => worker.fetch(new Request('https://test.invalid'+path,{method}),{});
for(const path of ['/','/road/','/legacy/']){
 const response=await fetch(path); assert.equal(response.status,200);
 const html=await response.text();assert.match(html,/startBtn/);assert.doesNotMatch(html,/comparison\.js/);
}
assert.equal((await fetch('/rapier')).headers.get('location'),'/rapier/');
for(const path of ['/rapier/','/rapier/index.html']){
 const response=await fetch(path);assert.equal(response.status,200);assert.match(await response.text(),/\.\/comparison\.js/);
}
const script=await fetch('/rapier/comparison.js');assert.match(script.headers.get('content-type'),/javascript/);assert.match(await script.text(),/rapierComparison/);
assert.equal((await fetch('/rapier/comparison.js','HEAD')).status,200);
assert.equal((await fetch('/rapier/comparison.js','POST')).status,405);
assert.match(await (await fetch('/rapier/THIRD_PARTY_NOTICES.txt')).text(),/Apache|MIT/);
for(const path of ['/game.js','/road/game.js','/legacy/game.js'])assert.doesNotMatch(await (await fetch(path)).text(),/coast-ambience-[0-9a-f]{12}\.wav/);
console.log('Default road/legacy routes retained; isolated Rapier assets and method guards pass; default ambience fetch excluded.');
