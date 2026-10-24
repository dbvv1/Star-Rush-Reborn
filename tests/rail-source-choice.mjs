// Author build selection only; no listening or browser claim.
import assert from 'node:assert/strict';
import {readFileSync,cpSync,mkdtempSync,rmSync,writeFileSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync,spawnSync} from 'node:child_process';
import {loadImpactAssets} from '../impact-assets.mjs';
const env={...process.env};delete env.STAR_RUSH_RAIL_SOURCE;
execFileSync('python3',['assets/impact-audio/candidates/synth-v1/generate.py','--check'],{stdio:'inherit'});
const baseline=loadImpactAssets(),candidate=loadImpactAssets('assets/impact-audio','synth-v1');
assert.deepEqual(loadImpactAssets('assets/impact-audio','kenney'),baseline);
for(const bad of ['', 'synth', '../synth-v1'])assert.throws(()=>loadImpactAssets('assets/impact-audio',bad),/Unknown/);
assert.equal(Object.keys(candidate.assets).length,2);
assert.equal(Object.values(candidate.assets).reduce((sum,b)=>sum+Buffer.from(b,'base64').length,0),54772);
const dir=mkdtempSync(join(tmpdir(),'rail-source-'));
try{
 cpSync('assets/impact-audio',dir,{recursive:true});
 const recipe=join(dir,'candidates/synth-v1/generate.py');
 writeFileSync(recipe,readFileSync(recipe,'utf8').replace('\"durationSeconds\": 0.24,','\"durationSeconds\": 0.245,'));
 execFileSync('python3',[recipe]);assert.equal(Object.keys(loadImpactAssets(dir,'synth-v1').assets).length,2);
 const manifestPath=join(dir,'candidates/synth-v1/manifest.json'),manifest=JSON.parse(readFileSync(manifestPath));assert.equal(manifest.candidates['light-scrape'].frames,10804);assert.equal(manifest.candidates['light-scrape'].durationSeconds,.244989);manifest.candidates['light-scrape'].durationSeconds=.25;writeFileSync(manifestPath,JSON.stringify(manifest));assert.throws(()=>loadImpactAssets(dir,'synth-v1'));execFileSync('python3',[recipe]);
 const p=join(dir,'candidates/synth-v1/rail-light-v1.wav');writeFileSync(p,'broken');assert.throws(()=>loadImpactAssets(dir,'synth-v1'));
 rmSync(p);assert.throws(()=>loadImpactAssets(dir,'synth-v1'));
}finally{rmSync(dir,{recursive:true,force:true})}
execFileSync('node',['build.mjs'],{env,stdio:'inherit'});
assert.deepEqual(readdirSync('dist/client/assets/impact-audio'),[]);
const paths=['dist/client/game.js','dist/server/index.js','worker/index.js'];const before=paths.map(p=>readFileSync(p));
try{
 const bad=spawnSync('node',['build.mjs'],{env:{...env,STAR_RUSH_RAIL_SOURCE:'unknown'},encoding:'utf8'});assert.notEqual(bad.status,0);assert.match(bad.stderr,/Unknown rail audio source/);
 for(const [source,selected,excluded] of [['kenney',baseline,candidate],['synth-v1',candidate,baseline]]){
 execFileSync('node',['build.mjs'],{env:{...env,STAR_RUSH_RAIL_SOURCE:source},stdio:'inherit'});
 const worker=(await import('../dist/server/index.js?rail-source='+source)).default;
 assert.equal(readdirSync('dist/client/assets/impact-audio').length,2);
 for(const url of Object.values(selected.client)){
  const response=await worker.fetch(new Request('https://test.invalid'+url),{});assert.equal(response.status,200);assert.equal(response.headers.get('content-type'),'audio/wav');assert.match(response.headers.get('cache-control'),/immutable/);
  const bytes=Buffer.from(selected.assets[url],'base64');assert.deepEqual(Buffer.from(await response.arrayBuffer()),bytes);assert.deepEqual(readFileSync('dist/client'+url),bytes);
  const head=await worker.fetch(new Request('https://test.invalid'+url,{method:'HEAD'}),{});assert.equal(head.headers.get('content-length'),String(bytes.length));assert.equal((await head.arrayBuffer()).byteLength,0);
  assert.equal((await worker.fetch(new Request('https://test.invalid'+url,{method:'POST'}),{})).status,405);
  assert(readFileSync('dist/client/game.js','utf8').includes(url));
 }
 for(const url of [...Object.values(excluded.client),'/assets/impact-audio/candidates/synth-v1/generate.py'])assert.equal((await worker.fetch(new Request('https://test.invalid'+url),{})).status,404);
 }
}finally{execFileSync('node',['build.mjs'],{env,stdio:'inherit'})}
paths.forEach((p,i)=>assert.deepEqual(readFileSync(p),before[i]));
assert.deepEqual(readdirSync('dist/client/assets/impact-audio').sort(),[]);
console.log('Rail source choice passed: reproducible candidate, opt-in packaging, exact default restoration (not listening)');
