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
 const ctx={state:'running',currentTime:0,createBufferSource(){procedural++;return {connect(){},start(){},stop(){}}},createBiquadFilter(){return {frequency:{},Q:{},connect(){}}},createGain(){return {gain:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){}}},createOscillator(){return {frequency:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){},start(){},stop(){}}}};
 const scope={sound:true,audio:{ctx,master:{},noise:{},rail:{play(){sample++;return true}}}};vm.createContext(scope);vm.runInContext(source.slice(source.indexOf('function impactSound'),source.indexOf('function updateAudio')),scope);
 scope.impactSound('rail',2);assert.equal(sample,1);assert.equal(procedural,0);scope.impactSound('cone',2);assert.equal(procedural,1);scope.audio.rail.play=()=>false;scope.impactSound('rail',2);assert.equal(procedural,2);scope.sound=false;scope.impactSound('rail',2);assert.equal(procedural,2);
 assert.match(feedback,/if\(impact<\.7\|\|player.contactSound>0\)return;player.contactSound=\.16/);
});
test('collision entry drops interrupted audio events and only plays fresh events after resume',()=>{
 const source=readFileSync('audio.js','utf8');let starts=0,samples=0;
 const param={setValueAtTime(){},exponentialRampToValueAtTime(){}};
 const ctx={state:'suspended',currentTime:0,
  createBufferSource:()=>({connect(){},start(){starts++},stop(){}}),
  createBiquadFilter:()=>({frequency:{},Q:{},connect(){}}),
  createGain:()=>({gain:param,connect(){}}),
  createOscillator:()=>({frequency:param,connect(){},start(){starts++},stop(){}}),
  resume(){throw Error('collision must not force an audio resume')}
 };
 let ready=false;
 const scope={sound:true,audio:{ctx,master:{},noise:{},rail:{play(){samples++;return ready}}}};
 vm.createContext(scope);vm.runInContext(source.slice(source.indexOf('function impactSound'),source.indexOf('function updateAudio')),scope);
 for(const state of ['suspended','interrupted','closed']){
  ctx.state=state;for(const kind of ['rail','cone','barrier'])scope.impactSound(kind,7);
 }
 assert.equal(samples,0);assert.equal(starts,0);
 ctx.state='running';assert.equal(starts,0,'resuming does not replay old impacts');
 scope.impactSound('rail',2);assert.equal(samples,1);assert.equal(starts,2,'fresh missing clip still uses original procedural fallback');
 ready=true;scope.impactSound('rail',7);assert.equal(samples,2);assert.equal(starts,2,'fresh ready clip does not double-play');
 scope.impactSound('cone',2);assert.equal(starts,3,'non-rail fresh impacts remain procedural');
});
test('hashed PCM files and exact Worker routes survive packaging; reject corrupt/missing source',async()=>{
 const {client,assets}=loadImpactAssets();const worker=(await import('../dist/server/index.js')).default;
 for(const url of Object.values(client)){const response=await worker.fetch(new Request('https://test.invalid'+url),{});assert.equal(response.status,200,'default build serves Kenney samples');assert.deepEqual(Buffer.from(await response.arrayBuffer()),Buffer.from(assets[url],'base64'));}
 for(const path of ['/assets/impact-audio/source/impactMetal_light_000.ogg','/assets/impact-audio/missing.wav'])assert.equal((await worker.fetch(new Request('https://test.invalid'+path),{})).status,404);
 const dir=mkdtempSync(join(tmpdir(),'rail-audio-test-'));try{cpSync('assets/impact-audio',dir,{recursive:true});writeFileSync(join(dir,'runtime/rail-light-v2.wav'),'broken');assert.throws(()=>loadImpactAssets(dir));rmSync(join(dir,'runtime/rail-light-v2.wav'));assert.throws(()=>loadImpactAssets(dir));}finally{rmSync(dir,{recursive:true,force:true})}
});

test('all one-shot feedback drops unavailable events and resumes only fresh running events',()=>{
 const source=readFileSync('audio.js','utf8');const starts=[],stops=[];let resumes=0,samples=0;
 const param={setValueAtTime(){},exponentialRampToValueAtTime(){},linearRampToValueAtTime(){}};
 const node=()=>({frequency:param,gain:param,Q:{},connect(){},start(){starts.push(ctx.currentTime)},stop(at){stops.push(at)}});
 const ctx={state:'suspended',currentTime:10,createOscillator:node,createGain:node,createBufferSource:node,createBiquadFilter:node,resume(){resumes++;return Promise.resolve()}};
 const context={context:ctx,rail:{play(){samples++;return false}}};vm.createContext(context);
 vm.runInContext(source+';audio={ctx:context,master:{},noise:{},rail};',context);
 // tone is shared by menu confirmation, countdown, coin, ready and finish cues.
 const cues=()=>{context.tone(400,.12);for(const kind of ['drift','land','small','nitro','combo'])context.jetSound(kind);for(const kind of ['rail','cone','barrier'])context.impactSound(kind,2)};
 for(const state of ['suspended','interrupted','closed']){ctx.state=state;cues()}
 assert.equal(starts.length,0);assert.equal(samples,0);assert.equal(resumes,0);
 ctx.state='running';ctx.currentTime=20;assert.equal(starts.length,0,'state change does not replay old cues');cues();
 assert.equal(starts.length,12,'one tone, five jets/two companion tones, and four impact voices');
 assert(starts.every(at=>at===20));assert.equal(stops.length,12);assert(stops.every(at=>at>20&&at<=20.51));assert.equal(samples,1);
 vm.runInContext('sound=false',context);cues();assert.equal(starts.length,12);
 vm.runInContext('sound=true',context);ctx.state='interrupted';cues();assert.equal(starts.length,12);
 ctx.state='running';ctx.currentTime=30;context.jetSound('small');assert.deepEqual(starts.slice(-2),[30,30]);
 assert.equal(resumes,0,'event helpers never force audio resume');
});

test('explicit procedural selection initializes original audio without constructing or loading sample player',()=>{
 const source=readFileSync('audio.js','utf8');let players=0;
 const param=()=>({value:0});
 const node=()=>({gain:param(),frequency:param(),detune:param(),threshold:param(),ratio:param(),Q:param(),connect(){},start(){}});
 class Context{sampleRate=10;destination={};createGain=node;createDynamicsCompressor=node;createBiquadFilter=node;createOscillator=node;createBufferSource=node;createBuffer(){return {getChannelData:()=>new Float32Array(20)}}}
 const scope={window:{AudioContext:Context},railImpactUrls:{},createRailImpactPlayer(){players++;return {load(){}}}};
 vm.createContext(scope);vm.runInContext(source+';audioInit();if(!audio)throw Error("audio did not initialize");',scope);assert.equal(players,0);
 assert.deepEqual(loadImpactAssets('assets/impact-audio','procedural'),{client:{},assets:{}});
});
