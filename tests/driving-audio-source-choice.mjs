import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFileSync,readdirSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
import {loadDrivingAudioAssets} from '../driving-audio-assets.mjs';
const selected=loadDrivingAudioAssets('assets/driving-audio','sample-v1');
const build=profile=>execFileSync(process.execPath,['build.mjs'],{stdio:'pipe',env:{...process.env,STAR_RUSH_DRIVING_AUDIO:profile}});
let baseline;
try {
 for(const profile of ['procedural','sample-v1']){
  build(profile);
  const worker=(await import(pathToFileURL(process.cwd()+'/dist/server/index.js').href+'?driving='+profile)).default;
  const game=await (await worker.fetch(new Request('https://test.invalid/game.js'),{})).text();
  const files=readdirSync('dist/client/assets/impact-audio');
  if(profile==='procedural')baseline=readFileSync('dist/server/index.js');
  assert.equal(files.filter(f=>f.startsWith('driving-')).length,profile==='procedural'?0:2);
  for(const [url,encoded] of Object.entries(selected.assets)){
   const response=await worker.fetch(new Request('https://test.invalid'+url),{});
   assert.equal(response.status,profile==='procedural'?404:200);
   assert.equal(game.includes(url),profile==='sample-v1');
   if(profile==='sample-v1'){
    assert.match(response.headers.get('content-type'),/audio\/wav/);
    assert.deepEqual(Buffer.from(await response.arrayBuffer()),Buffer.from(encoded,'base64'));
   }
  }
 }
} finally {build('procedural');}
assert.deepEqual(readFileSync('dist/server/index.js'),baseline,'default artifact restored exactly');
console.log('Driving audio production profile: default excludes new PCM, candidate exact assets/MIME/consumer URLs, default restoration passed (not listening).');
