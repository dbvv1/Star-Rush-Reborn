import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,mkdtempSync,cpSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import vm from 'node:vm';
import {createRailImpactPlayer} from '../impact-audio.js';
import {loadImpactAssets} from '../impact-assets.mjs';
const urls={light:'/assets/impact-audio/light.wav',medium:'/assets/impact-audio/medium.wav'};
function fixture(options={}){
 const nodes=[],ctx={state:'running',currentTime:10,decodeAudioData:async()=>({duration:.3,numberOfChannels:1}),createBufferSource(){const n={connect(){},disconnect(){this.disconnected=true},start(){this.started=true},stop(){this.stopped=true}};nodes.push(n);return n},createGain(){return {gain:{},connect(){},disconnect(){}}}};
 let requests=0;
 const p=createRailImpactPlayer(ctx,{},urls,{fetchImpl:async()=>{requests++;return {ok:true,arrayBuffer:async()=>new ArrayBuffer(10)}},...options});return {p,ctx,nodes,requests:()=>requests};
}
test('async load coalesces; no late collision replay; v2 selects two tiers',async()=>{
 const {p,nodes,requests}=fixture();assert.equal(p.play(2),false);const a=p.load();assert.equal(p.load(),a);await a;assert.equal(requests(),2);assert.equal(nodes.length,0);
 assert(p.play(.7));assert.equal(p.status().last,'light');assert(p.play(5));assert.equal(p.status().last,'light');assert(p.play(5.01));assert.equal(p.status().last,'medium');
 assert.equal(p.play(NaN),false);assert.equal(p.play(.69),false);p.stop();assert.equal(p.status().active,0);
});
test('bounded repeated voices, ended cleanup, pause/mute stop and disposal',async()=>{
 const {p,nodes,ctx}=fixture();await p.load();for(let i=0;i<9;i++)assert(p.play(2));assert.equal(p.status().active,4);assert(nodes[0].stopped&&nodes[0].disconnected);
 nodes.at(-1).onended();assert.equal(p.status().active,3);p.stop();p.stop();assert.equal(p.status().active,0);assert(nodes.every(n=>n.disconnected));
 ctx.state='suspended';assert.equal(p.play(2),false);ctx.state='running';p.dispose();assert.equal(p.play(2),false);
 const source=readFileSync('audio.js','utf8');assert.match(source,/if\(!running\|\|!sound\|\|musicSettings.sfxVolume<=0\)a.rail\?\.stop\(\)/);
});
test('HTTP/decode/timeout failure remains procedural without deferred voice',async()=>{
 for(const fetchImpl of [async()=>({ok:false}),async()=>{throw Error('network')}]){const {p}=fixture({fetchImpl});await p.load();assert.equal(p.play(2),false);assert.equal(p.status().states.light,'fallback')}
 const f=fixture();f.ctx.decodeAudioData=async()=>{throw Error('decode')};await f.p.load();assert.equal(f.p.play(8),false);
 const slow=fixture({fetchImpl:()=>new Promise(()=>{}),timeoutMs:5});await slow.p.load();assert.equal(slow.p.status().states.medium,'fallback');assert.equal(slow.nodes.length,0);
});
test('dispose during decode cannot resurrect buffers or create a late voice',async()=>{
 const f=fixture();let resolve;const wait=new Promise(r=>resolve=r);f.ctx.decodeAudioData=()=>wait;const loaded=f.p.load();await new Promise(r=>setTimeout(r,0));f.p.dispose();resolve({duration:.2,numberOfChannels:1});await loaded;assert.equal(f.p.play(2),false);assert.equal(f.nodes.length,0);
});
test('only rail uses sample, fallback retains procedural and cooldown unchanged',()=>{
 const source=readFileSync('audio.js','utf8'),feedback=readFileSync('circuit.js','utf8');let sample=0,procedural=0;
 const ctx={currentTime:0,createBufferSource(){procedural++;return {connect(){},start(){},stop(){}}},createBiquadFilter(){return {frequency:{},Q:{},connect(){}}},createGain(){return {gain:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){}}},createOscillator(){return {frequency:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){},start(){},stop(){}}}};
 const scope={sound:true,audio:{ctx,master:{},noise:{},rail:{play(){sample++;return true}}}};vm.createContext(scope);vm.runInContext(source.slice(source.indexOf('function impactSound'),source.indexOf('function updateAudio')),scope);
 scope.impactSound('rail',2);assert.equal(sample,1);assert.equal(procedural,0);scope.impactSound('cone',2);assert.equal(procedural,1);scope.audio.rail.play=()=>false;scope.impactSound('rail',2);assert.equal(procedural,2);scope.sound=false;scope.impactSound('rail',2);assert.equal(procedural,2);
 assert.match(feedback,/if\(impact<\.7\|\|player.contactSound>0\)return;player.contactSound=\.16/);
});
test('hashed PCM files and exact Worker routes survive packaging; reject corrupt/missing source',async()=>{
 const {client,assets}=loadImpactAssets();const worker=(await import('../dist/server/index.js')).default;
 for(const url of Object.values(client)){
  const response=await worker.fetch(new Request('https://test.invalid'+url),{});assert.equal(response.status,200);assert.equal(response.headers.get('content-type'),'audio/wav');assert.deepEqual(Buffer.from(await response.arrayBuffer()),Buffer.from(assets[url],'base64'));assert.deepEqual(readFileSync('dist/client'+url),Buffer.from(assets[url],'base64'));
  const head=await worker.fetch(new Request('https://test.invalid'+url,{method:'HEAD'}),{});assert.equal((await head.arrayBuffer()).byteLength,0);assert.equal(head.headers.get('content-length'),String(Buffer.from(assets[url],'base64').length));assert.equal((await worker.fetch(new Request('https://test.invalid'+url,{method:'POST'}),{})).status,405);
 }
 for(const path of ['/assets/impact-audio/source/impactMetal_light_000.ogg','/assets/impact-audio/missing.wav'])assert.equal((await worker.fetch(new Request('https://test.invalid'+path),{})).status,404);
 const dir=mkdtempSync(join(tmpdir(),'rail-audio-test-'));try{cpSync('assets/impact-audio',dir,{recursive:true});writeFileSync(join(dir,'runtime/rail-light-v2.wav'),'broken');assert.throws(()=>loadImpactAssets(dir));rmSync(join(dir,'runtime/rail-light-v2.wav'));assert.throws(()=>loadImpactAssets(dir));}finally{rmSync(dir,{recursive:true,force:true})}
});
