import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdtempSync,rmSync,copyFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import vm from 'node:vm';
import test from 'node:test';
import {loadRailAudioAssets} from '../build.mjs';

const audioSource=readFileSync('audio.js','utf8');
const circuitSource=readFileSync('circuit.js','utf8');
const feedbackStart=circuitSource.indexOf('function collisionFeedback(');
const feedbackEnd=circuitSource.indexOf('\nfunction resolveContacts',feedbackStart);
const resolveStart=circuitSource.indexOf('function resolveContacts(');
assert(feedbackStart>=0&&feedbackEnd>feedbackStart,'the real rail collision feedback source must be present');
assert(resolveStart>feedbackEnd,'the real rail contact resolver source must be present');
const feedbackSource=circuitSource.slice(feedbackStart,feedbackEnd);
const resolveSource=circuitSource.slice(resolveStart);
assert.match(circuitSource,/collisionFeedback\(impact,'rail'\)/,'resolveContacts keeps the real rail event call');
const lightWav=readFileSync('assets/rail-audio/rail-light-v1.wav');
const hitWav=readFileSync('assets/rail-audio/rail-hit-v1.wav');
const railBuild=loadRailAudioAssets();
const sources=railBuild.client;

function responseFor(url){
 if(url.includes('rail-light'))return new Response(lightWav);
 if(url.includes('rail-hit'))return new Response(hitWav);
 return new Response('missing',{status:404});
}

function fakeAudio(decodeMode){
 const startedSources=[],startedOscillators=[];
 class Param {
  constructor(value=0){this.value=value;this.calls=[]}
  setValueAtTime(value,time){this.value=value;this.calls.push(['setValueAtTime',value,time]);return this}
  setTargetAtTime(value,time,constant){this.value=value;this.calls.push(['setTargetAtTime',value,time,constant]);return this}
  exponentialRampToValueAtTime(value,time){this.value=value;this.calls.push(['exponentialRampToValueAtTime',value,time]);return this}
  linearRampToValueAtTime(value,time){this.value=value;this.calls.push(['linearRampToValueAtTime',value,time]);return this}
 }
 class Node {
  constructor(ctx){this.ctx=ctx;this.dest=null}
  connect(destination){this.dest=destination;return destination}
 }
 class BufferSource extends Node {
  constructor(ctx){super(ctx);this.buffer=null;this.loop=false;this.playbackRate=new Param(1)}
  start(time=0){this.startedAt=time;startedSources.push(this)}
  stop(time=0){this.stoppedAt=time}
 }
 class Oscillator extends Node {
  constructor(ctx){super(ctx);this.type='sine';this.frequency=new Param(440);this.detune=new Param(0)}
  start(time=0){this.startedAt=time;startedOscillators.push(this)}
  stop(time=0){this.stoppedAt=time}
 }
 class Context {
  constructor(){
   this.sampleRate=44100;this.currentTime=0;this.state='running';this.destination=new Node(this);
  }
  createGain(){const node=new Node(this);node.gain=new Param(1);return node}
  createDynamicsCompressor(){const node=new Node(this);node.threshold=new Param(-24);node.ratio=new Param(12);return node}
  createBiquadFilter(){const node=new Node(this);node.type='lowpass';node.frequency=new Param(350);node.Q=new Param(1);return node}
  createBuffer(channels,length,rate){
   const data=new Float32Array(length);
   return {numberOfChannels:channels,length,sampleRate:rate,duration:length/rate,getChannelData:()=>data};
  }
  createBufferSource(){return new BufferSource(this)}
  createOscillator(){return new Oscillator(this)}
  resume(){return Promise.resolve()}
  decodeAudioData(data,success,error){
   if(decodeMode==='fail')throw Error('decode failed');
   const length=(data.byteLength-44)/2,buffer={duration:length/44100,length,sampleRate:44100,bytes:data.byteLength};
   if(success)success(buffer);
   return Promise.resolve(buffer);
  }
 }
 return {Context,startedSources,startedOscillators};
}

function makeHarness({fetchImpl,decodeMode='ok'}={}){
 const fake=fakeAudio(decodeMode);
 const context=vm.createContext({
  window:{AudioContext:fake.Context},
  fetch:fetchImpl,
  clamp:(value,min,max)=>Math.max(min,Math.min(max,value)),
  state:'running',
  player:{s:0,l:0,vS:0,vL:0,speed:0,yaw:0,velocityYaw:0,jump:0,turnRate:1,contactSound:0,drifting:false,driftCharge:1,boostBlend:0,boostActive:false},
  input:{gas:false,brake:false,left:false,right:false,drift:false,boost:false,small:false},
  musicSettings:{sfxVolume:.75},
  gameTime:0,
  flash:0,
  chunks:new Map(),
  CAR_HALF_S:1.57,CAR_HALF_L:.91,RAIL_INNER:8.045,
  carAxes:()=>[[1,0],[0,1]],
  impulseContact:()=>4,
  courseDelta:(a,b)=>a-b,
  endDrift:()=>{},
  wasDrift:false,
  wrapAngle:angle=>Math.atan2(Math.sin(angle),Math.cos(angle)),
  atRoad:()=>[0,0,0],
  emit:()=>{},
  __sources:sources,
 });
 vm.runInContext(audioSource,context);
 vm.runInContext(feedbackSource,context);
 vm.runInContext(resolveSource,context);
 vm.runInContext('initRailAudio(__sources);audioInit()',context);
 assert.equal(vm.runInContext('!!audio',context),true,'the test AudioContext must initialize');
 fake.startedSources.length=0;fake.startedOscillators.length=0;
 return {context,...fake};
}

test('real collision feedback selects decoded rail samples by impact without doubling the fallback',async()=>{
 const pending=[];
 const harness=makeHarness({fetchImpl:url=>new Promise(resolve=>pending.push({url,resolve}))});
 const {context}=harness;
 assert.equal(vm.runInContext('railAudio.state',context),'loading');
 assert.equal(pending.length,2,'both named WAV candidates should start loading');
 assert.deepEqual(pending.map(request=>request.url).sort(),Object.values(sources).sort());

 // Unready assets: the real resolveContacts -> collisionFeedback -> impactSound
 // rail branch must keep the existing procedural scrape and triangle body.
 vm.runInContext("Object.assign(player,{l:8,vS:30,vL:12,yaw:.2,speed:32,contactSound:0,jump:0});resolveContacts(1/120)",context);
 assert(vm.runInContext('player.l',context)<7.2,'the real rail contact limit runs');
 assert.equal(harness.startedSources.length,1);
 assert.equal(harness.startedSources[0].buffer,vm.runInContext('audio.noise',context));
 assert.equal(harness.startedOscillators.length,1);
 assert.equal(vm.runInContext('player.contactSound',context),.16);

 for(const request of pending)request.resolve(responseFor(request.url));
 assert.equal(await vm.runInContext('loadRailAudio()',context),'ready');
 assert.deepEqual(Object.keys(vm.runInContext('railAudio.buffers',context)).sort(),['light-scrape','medium-hit']);
 harness.startedSources.length=0;harness.startedOscillators.length=0;

 // Mid-impact uses an equal-power light/medium crossfade, connected to the
 // existing master bus, and does not start the procedural rail copy.
 vm.runInContext("Object.assign(player,{l:8,vS:30,vL:12,yaw:.2,speed:32,contactSound:0,jump:0});resolveContacts(1/120)",context);
 assert.equal(harness.startedSources.length,2);
 assert.equal(harness.startedOscillators.length,0,'successful asset playback must not add the procedural rail osc');
 const buffers=vm.runInContext('railAudio.buffers',context),master=vm.runInContext('audio.master',context);
 assert.deepEqual(harness.startedSources.map(source=>source.buffer),[buffers['light-scrape'],buffers['medium-hit']]);
 for(const source of harness.startedSources){
  assert.equal(source.dest.dest,master,'each sample must reach the existing master/compressor bus');
  const set=source.dest.gain.calls.at(-1);
  assert.equal(set[0],'setValueAtTime');
  assert(Math.abs(set[1]-.133*Math.SQRT1_2)<.001,'impact 4 blends both candidates at equal power');
 }
 assert(!harness.startedSources.some(source=>source.buffer===vm.runInContext('audio.noise',context)));

 harness.startedSources.length=0;harness.startedOscillators.length=0;
 vm.runInContext("impactSound('rail',1.2)",context);
 assert.equal(harness.startedSources.length,1);assert.equal(harness.startedSources[0].buffer,buffers['light-scrape']);
 harness.startedSources.length=0;
 vm.runInContext("impactSound('rail',8)",context);
 assert.equal(harness.startedSources.length,1);assert.equal(harness.startedSources[0].buffer,buffers['medium-hit']);
 const low=vm.runInContext('railImpactMix(-5)',context),high=vm.runInContext('railImpactMix(100)',context);
 assert.equal(low.level,.7);assert.equal(low.hit,0);assert.equal(high.level,10);assert(Math.abs(high.light)<1e-12);
});

test('mute, master sfx gain and non-rail collisions keep existing semantics',async()=>{
 const harness=makeHarness({fetchImpl:async url=>responseFor(url)});
 const {context}=harness;
 assert.equal(await vm.runInContext('loadRailAudio()',context),'ready');
 harness.startedSources.length=0;harness.startedOscillators.length=0;

 // Cone/barrier sounds still use the procedural path and never a rail buffer.
 vm.runInContext("player.contactSound=0;collisionFeedback(4,'cone')",context);
 assert.equal(harness.startedSources.length,1);
 assert.equal(harness.startedSources[0].buffer,vm.runInContext('audio.noise',context));
 assert.equal(harness.startedOscillators.length,0);

 // SFX volume is still applied by the existing master gain, including zero mute.
 const master=vm.runInContext('audio.master',context);
 vm.runInContext('sound=true;musicSettings.sfxVolume=.5;updateAudio()',context);
 let target=master.gain.calls.filter(call=>call[0]==='setTargetAtTime').at(-1);
 assert(Math.abs(target[1]-.48*.5)<1e-12);
 harness.startedSources.length=0;harness.startedOscillators.length=0;
 vm.runInContext("sound=false;player.contactSound=0;collisionFeedback(4,'rail')",context);
 assert.equal(harness.startedSources.length,0,'mute must suppress asset playback');
 assert.equal(harness.startedOscillators.length,0);
 vm.runInContext('sound=false;updateAudio()',context);
 target=master.gain.calls.filter(call=>call[0]==='setTargetAtTime').at(-1);
 assert.equal(target[1],0);

 // Engine, tire and wind nodes remain instantiated; muted playback does not
 // tear down or bypass their existing master routing.
 for(const key of ['engineGain','engineFilter','wind','tire','turbo'])assert(vm.runInContext(`!!audio.${key}`,context),key+' remains available');
});

test('fetch and decode failures keep the procedural rail fallback usable',async()=>{
 for(const mode of ['fetch','decode']){
  const harness=makeHarness({
   fetchImpl:mode==='fetch'?async()=>{throw Error('offline')}:async url=>responseFor(url),
   decodeMode:mode==='decode'?'fail':'ok',
  });
  const {context}=harness;
  assert.equal(await vm.runInContext('loadRailAudio()',context),'failed',mode+' failure state');
  assert.equal(vm.runInContext('railAudio.buffers',context),null);
  harness.startedSources.length=0;harness.startedOscillators.length=0;
  vm.runInContext("player.contactSound=0;collisionFeedback(4,'rail')",context);
  assert.equal(harness.startedSources.length,1,mode+' must fall back');
  assert.equal(harness.startedSources[0].buffer,vm.runInContext('audio.noise',context));
  assert.equal(harness.startedOscillators.length,1,mode+' keeps the procedural body');
 }
});

test('build embeds exact hashed WAV bytes and the Worker serves only named assets',async()=>{
 const {client,assets}=loadRailAudioAssets();
 assert.deepEqual(Object.keys(client).sort(),['light-scrape','medium-hit']);
 assert.equal(Object.keys(assets).length,2);
 const expected={'light-scrape':lightWav,'medium-hit':hitWav};
 const gameSource=readFileSync('dist/client/game.js','utf8');
 for(const [kind,url] of Object.entries(client)){
  assert.match(url,/^\/assets\/rail-audio\/rail-(light|hit)-v[1-9][0-9]*\.[a-f0-9]{12}\.wav$/);
  assert(gameSource.includes(url),kind+' hashed URL appears in the built client');
  assert.deepEqual(Buffer.from(assets[url],'base64'),expected[kind],kind+' embedded bytes');
  assert.deepEqual(readFileSync('dist/client'+url),expected[kind],kind+' copied build asset');
  const response=await (await import('../dist/server/index.js')).default.fetch(new Request('https://race.test'+url),{});
  assert.equal(response.status,200);
  assert.equal(response.headers.get('content-type'),'audio/wav');
  assert.match(response.headers.get('cache-control'),/immutable/);
  assert.equal(response.headers.get('x-content-type-options'),'nosniff');
  assert.equal(response.headers.get('content-length'),String(expected[kind].length));
  assert.deepEqual(Buffer.from(await response.arrayBuffer()),expected[kind]);
  const head=await (await import('../dist/server/index.js')).default.fetch(new Request('https://race.test'+url,{method:'HEAD'}),{});
  assert.equal(head.status,200);assert.equal((await head.arrayBuffer()).byteLength,0);
  const post=await (await import('../dist/server/index.js')).default.fetch(new Request('https://race.test'+url,{method:'POST'}),{});
  assert.equal(post.status,405);assert.equal(post.headers.get('allow'),'GET, HEAD');
 }
 const {default:worker}=await import('../dist/server/index.js');
 assert.equal((await worker.fetch(new Request('https://race.test/assets/rail-audio/missing.wav'),{})).status,404);
 assert.equal((await worker.fetch(new Request('https://race.test/assets/rail-audio/manifest.json'),{})).status,404);
 assert.deepEqual(readFileSync('worker/index.js'),readFileSync('dist/server/index.js'),'generated Worker only changes through the build');
});

test('rail build input rejects missing, malformed and oversized/mismatched candidates',()=>{
 const directory=mkdtempSync(join(tmpdir(),'rail-audio-test-'));
 const base=JSON.parse(readFileSync('assets/rail-audio/manifest.json','utf8'));
 const writeManifest=manifest=>writeFileSync(join(directory,'manifest.json'),JSON.stringify(manifest));
 const reset=()=>{
  writeManifest(structuredClone(base));
  copyFileSync('assets/rail-audio/rail-light-v1.wav',join(directory,'rail-light-v1.wav'));
  copyFileSync('assets/rail-audio/rail-hit-v1.wav',join(directory,'rail-hit-v1.wav'));
 };
 try{
  assert.throws(()=>loadRailAudioAssets(directory),/ENOENT/,'missing manifest');
  reset();
  assert.equal(Object.keys(loadRailAudioAssets(directory).client).length,2);

  let manifest=structuredClone(base);manifest.version=2;writeManifest(manifest);
  assert.throws(()=>loadRailAudioAssets(directory),/Invalid rail audio manifest/);
  manifest=structuredClone(base);delete manifest.candidates['medium-hit'];writeManifest(manifest);
  assert.throws(()=>loadRailAudioAssets(directory),/Invalid rail audio candidates/);
  manifest=structuredClone(base);manifest.candidates['light-scrape'].file='../rail-light-v1.wav';writeManifest(manifest);
  assert.throws(()=>loadRailAudioAssets(directory),/Invalid rail audio entry/);
  manifest=structuredClone(base);delete manifest.candidates['light-scrape'].parameters;writeManifest(manifest);
  assert.throws(()=>loadRailAudioAssets(directory),/Invalid rail audio entry/);
  manifest=structuredClone(base);manifest.candidates['light-scrape'].sha256='0'.repeat(64);writeManifest(manifest);
  assert.throws(()=>loadRailAudioAssets(directory),/Rail audio metadata mismatch/);
  manifest=structuredClone(base);manifest.candidates['light-scrape'].file='rail-light-v2.wav';writeManifest(manifest);
  assert.throws(()=>loadRailAudioAssets(directory),/ENOENT/,'declared but absent WAV');

  const corrupt=Buffer.alloc(24);writeFileSync(join(directory,'rail-light-v1.wav'),corrupt);
  manifest=structuredClone(base);manifest.candidates['light-scrape'].sha256=createHash('sha256').update(corrupt).digest('hex');manifest.candidates['light-scrape'].bytes=corrupt.length;writeManifest(manifest);
  assert.throws(()=>loadRailAudioAssets(directory),/Invalid rail audio rail-light-v1\.wav: size/,'truncated header');
  const truncated=lightWav.subarray(0,lightWav.length-1);writeFileSync(join(directory,'rail-light-v1.wav'),truncated);
  manifest=structuredClone(base);manifest.candidates['light-scrape'].sha256=createHash('sha256').update(truncated).digest('hex');manifest.candidates['light-scrape'].bytes=truncated.length;writeManifest(manifest);
  assert.throws(()=>loadRailAudioAssets(directory),/Invalid rail audio rail-light-v1\.wav: (?:RIFF length|data length)/,'truncated PCM data');
  const oversized=Buffer.alloc(96001);writeFileSync(join(directory,'rail-light-v1.wav'),oversized);
  manifest=structuredClone(base);manifest.candidates['light-scrape'].sha256=createHash('sha256').update(oversized).digest('hex');manifest.candidates['light-scrape'].bytes=oversized.length;writeManifest(manifest);
  assert.throws(()=>loadRailAudioAssets(directory),/Invalid rail audio rail-light-v1\.wav: size/,'oversized WAV');
 }finally{rmSync(directory,{recursive:true,force:true});}
});

test('manifest provenance is exact and regeneration is deterministic',()=>{
 const check=spawnSync('python3',['assets/rail-audio/generate.py','--check'],{encoding:'utf8'});
 assert.equal(check.status,0,(check.stderr||check.stdout).trim());
 const manifest=JSON.parse(readFileSync('assets/rail-audio/manifest.json','utf8'));
 const expectedPeak={'light-scrape':.78,'medium-hit':.86};
 assert.match(manifest.license,/no third-party/i);
 assert.match(manifest.generator,/assets\/rail-audio\/generate\.py/);
 assert.deepEqual(Object.keys(manifest.candidates).sort(),['light-scrape','medium-hit']);
 for(const [kind,entry] of Object.entries(manifest.candidates)){
  const bytes=readFileSync('assets/rail-audio/'+entry.file);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),entry.sha256,kind+' source hash');
  assert.equal(bytes.length,entry.bytes,kind+' source bytes');
  assert.equal((bytes.length-44)/2,entry.frames,kind+' frames');
  assert(Math.abs(entry.durationSeconds-entry.frames/44100)<1e-6,kind+' duration');
  assert(entry.parameters&&typeof entry.parameters==='object',kind+' keeps editable parameters');
  assert.equal(entry.parameters.targetPeak,expectedPeak[kind],kind+' target peak');
  let peak=0,sumSquares=0,frames=0;
  for(let offset=44;offset<bytes.length;offset+=2){const value=bytes.readInt16LE(offset)/32768;peak=Math.max(peak,Math.abs(value));sumSquares+=value*value;frames++}
  assert(Math.abs(peak-entry.parameters.targetPeak)<.001,kind+' audio peak is normalized');
  assert(Math.sqrt(sumSquares/frames)>.05,kind+' contains audible non-silent energy');
  assert.equal(bytes.readInt16LE(bytes.length-2),0,kind+' ends on a zero fade sample');
 }
});
