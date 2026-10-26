import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {loadDrivingAudioAssets} from '../driving-audio-assets.mjs';
const source=readFileSync('audio.js','utf8');
const create=new Function(source+';return createDrivingAudioProfile')();
function fixture(fetchImpl=async()=>({ok:true,arrayBuffer:async()=>new ArrayBuffer(100)})){
 const nodes=[],gains=[];const param=()=>({value:0,setTargetAtTime(v){this.target=v}});
 const ctx={currentTime:1,decodeAudioData:async()=>({numberOfChannels:1,duration:1}),createBufferSource(){const n={playbackRate:param(),connect(){},disconnect(){this.disconnected=true},start(){this.started=true},stop(){this.stopped=true}};nodes.push(n);return n;},createGain(){const n={gain:param(),connect(){},disconnect(){}};gains.push(n);return n;},createBiquadFilter(){return {frequency:{},connect(){},disconnect(){}}}};
 const p=create(ctx,{}, {},{engine:'/assets/impact-audio/driving-engine.wav',tire:'/assets/impact-audio/driving-tire.wav'},{fetchImpl,timeoutMs:10});return {p,ctx,nodes,gains};
}
test('profile is disabled by default, opt-in loads exactly two licensed clips',()=>{
 assert.deepEqual(loadDrivingAudioAssets().assets,{});const x=loadDrivingAudioAssets('assets/driving-audio','sample-v1');assert.equal(Object.keys(x.assets).length,2);assert.throws(()=>loadDrivingAudioAssets('assets/driving-audio','oops'));
});
test('real profile load coalesces, follows gas/coast and stops layer gain while paused',async()=>{
 const {p,nodes,gains}=fixture();assert.deepEqual(p.update({running:true,rpm:120,gas:true,scrub:.5}),{engine:false,tire:false});const a=p.load();assert.equal(a,p.load());await a;
 assert.equal(nodes.length,2);assert(nodes.every(x=>x.loop&&x.started));assert.deepEqual(p.update({running:true,rpm:120,gas:true,scrub:.5}),{engine:true,tire:true});assert.equal(nodes[0].playbackRate.target,1);
 p.update({running:false,rpm:120,gas:false,scrub:0});assert.equal(nodes[0].playbackRate.target,.85);assert(gains.every(n=>n.gain.target===0));p.dispose();assert(nodes.every(x=>x.stopped&&x.disconnected));
});
test('failed layer immediately preserves procedural fallback without blocking successful layer',async()=>{
 const {p}=fixture(async url=>({ok:url.includes('engine'),arrayBuffer:async()=>new ArrayBuffer(100)}));await p.load();assert.deepEqual(p.update({running:true,rpm:100,gas:true,scrub:1}),{engine:true,tire:false});assert.equal(p.status().states.tire,'fallback');p.dispose();
});
test('timeout and disposed loading cannot resurrect loops',async()=>{
 const slow=fixture(()=>new Promise(()=>{}));await slow.p.load();assert.equal(slow.nodes.length,0);assert.equal(slow.p.status().states.engine,'fallback');
 const f=fixture();let release;f.ctx.decodeAudioData=()=>new Promise(r=>release=r);const p=f.p.load();await new Promise(r=>setTimeout(r,0));f.p.dispose();release({numberOfChannels:1,duration:1});await p;assert.equal(f.nodes.length,0);
});
test('actual updateAudio routes existing state, leaves event handlers intact',()=>{
 assert.match(source,/drivingAudioConfig.profile==='sample-v1'/);assert.match(source,/a.driving\?\.update\(\{running:running&&sound&&musicSettings.sfxVolume>0,rpm,gas:input.gas,scrub\}\)/);
 assert.match(source,/if\(kind==='rail'&&audio.rail\?\.play\(speed\)\)return/);
});
