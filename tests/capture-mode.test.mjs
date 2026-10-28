import test from 'node:test';
import assert from 'node:assert/strict';
import {parseCaptureOptions, createCaptureRuntime, createCaptureController, readRendererInfo, classifyRenderer, exitCaptureUrl} from '../capture-mode.mjs';
import {CAPTURE_PRESETS} from '../capture-presets.mjs';

test('capture is absent by default and validates only an explicit shot', () => {
 assert.equal(parseCaptureOptions(''), null); assert.equal(parseCaptureOptions('?seed=wrong'), null);
 for (const shot of Object.keys(CAPTURE_PRESETS)) {
  const options=parseCaptureOptions('?shot='+shot);
  assert.equal(options.preset,CAPTURE_PRESETS[shot]);assert.equal(options.t,options.preset.t);assert.equal(options.frames,1);
 }
 for (const query of ['shot=', 'shot=missing', 'shot=__proto__', 'shot=coast-chase&shot=academy-depth',
  'shot=coast-chase&seed=-1','shot=coast-chase&seed=1.2','shot=coast-chase&seed=4294967296',
  'shot=coast-chase&t=NaN','shot=coast-chase&t=Infinity','shot=coast-chase&t=','shot=coast-chase&t=121',
  'shot=coast-chase&frames=0','shot=coast-chase&frames=1.5','shot=coast-chase&frames=601',
  'shot=coast-chase&t=120&frames=2','shot=coast-chase&input=teleport']) assert.throws(()=>parseCaptureOptions(query),/capture|Capture/);
 assert.equal(parseCaptureOptions('shot=coast-chase&t=0.02&seed=0').t,1/60);
});

test('virtual time/RNG and isolated storage never patch browser globals', () => {
 let getterReads=0;
 const host={performance:{now:()=>123},get localStorage(){getterReads++;throw Error('storage denied');}};
 const normal=createCaptureRuntime('',host);assert.equal(normal.clock.now(),123);assert.equal(getterReads,0);
 assert.throws(()=>normal.storage.getItem('x'),/denied/);assert.throws(()=>normal.clock.advance(),/real clock/);
 const a=createCaptureRuntime('shot=coast-chase&seed=0',host), b=createCaptureRuntime('shot=coast-chase&seed=0',host);
 assert.equal(a.clock.now(),0);for(let i=0;i<120;i++){a.clock.advance();b.clock.advance();assert.equal(a.random(),b.random());}
 assert.equal(a.clock.now(),2000);a.storage.setItem('x',1);assert.equal(a.storage.getItem('x'),'1');assert.equal(b.storage.getItem('x'),null);
 assert.equal(getterReads,1);assert.equal(host.performance.now(),123);
});

test('renderer evidence preserves raw strings and unknown is never inferred as GPU', () => {
 for(const raw of ['Google SwiftShader','Mesa llvmpipe','softpipe','lavapipe','Microsoft Basic Render Driver'])assert.equal(classifyRenderer(raw),'software');
 assert.equal(classifyRenderer('ANGLE (NVIDIA GeForce RTX 5070)'), 'unknown');
 assert.equal(classifyRenderer('WebKit WebGL'),'unknown');assert.equal(classifyRenderer(null),'unknown');
 assert.equal(classifyRenderer('NVIDIA',{hardwareVerified:true}),'gpu');
 assert.equal(classifyRenderer('SwiftShader',{hardwareVerified:true}),'software');
 const gl={RENDERER:1,VERSION:2,getParameter:key=>({1:'WebKit',2:'WebGL 2',3:'raw renderer',4:'raw vendor'})[key],getExtension:()=>({UNMASKED_RENDERER_WEBGL:3,UNMASKED_VENDOR_WEBGL:4})};
 const info=readRendererInfo(gl);assert.equal(info.renderer,'raw renderer');assert.equal(info.maskedRenderer,'WebKit');assert.equal(info.classification,'unknown');
 assert.equal(readRendererInfo(null).classification,'software');
 assert.equal(readRendererInfo({...gl,getExtension:()=>null}).renderer,null);
 assert.equal(readRendererInfo({...gl,getParameter(){throw Error('blocked');}}).classification,'unknown');
});

test('controller uses fixed ticks, non-mutating warmup and frame acknowledgements', async () => {
 const runtime=createCaptureRuntime('shot=coast-chase&t=0.1&frames=3');let steps=0,draws=0,ready=false;
 const controller=createCaptureController({runtime,step:(now,dt)=>{assert(ready);assert.equal(dt,1/60);steps++;assert.equal(now,steps*1000/60);},render:()=>draws++,snapshot:()=>({steps}),ready:async()=>{ready=true;},yieldTask:async()=>{}});
 const first=await controller.start();assert.equal(steps,6);assert.equal(draws,12);assert.equal(first.frame,0);assert.equal(first.done,false);
 const second=await controller.next();assert.equal(steps,7);assert.equal(second.frame,1);
 const last=await controller.next();assert.equal(steps,8);assert.equal(last.done,true);
 assert.deepEqual(await controller.next(),last);assert.equal(steps,8);
 await assert.rejects(controller.start(),/already/);controller.dispose();await assert.rejects(controller.next(),/disposed/);
});

test('controller blocks overlapping advancement and reports ready/asset failures', async () => {
 let release;const gate=new Promise(resolve=>{release=resolve;});
 const runtime=createCaptureRuntime('shot=coast-chase&t=0');
 const c=createCaptureController({runtime,step(){},render(){},snapshot:()=>({}),ready:()=>gate,yieldTask:async()=>{}});
 const started=c.start();await assert.rejects(c.next(),/still/);c.dispose();release();await assert.rejects(started,/disposed/);
 const failed=createCaptureController({runtime,step(){},render(){},snapshot:()=>({}),ready:async()=>{throw Error('missing sky');}});
 await assert.rejects(failed.start(),/missing sky/);
 assert.equal(exitCaptureUrl('https://race.test/road?shot=x&t=1&frames=2&seed=0&input=idle&keep=yes#here'),'https://race.test/road?keep=yes#here');
});
