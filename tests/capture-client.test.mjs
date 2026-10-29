// Exact production consumer, with Canvas drawing stubbed. Not pixel/GPU evidence.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {Window} from 'happy-dom';

async function fixture(search='',entry='game.js',source=null) {
 const w=new Window({url:'https://race.test/'+search,settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}});
 const errors=[],frames=[];let drawCalls=0;
 w.console.error=(...args)=>errors.push(args.map(String).join(' '));w.console.warn=()=>{};
 w.requestAnimationFrame=callback=>{frames.push(callback);return frames.length;};
 const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(target,key)=>key in target?target[key]:()=>{drawCalls++;}});
 w.HTMLCanvasElement.prototype.getContext=type=>type==='2d'?ctx:null;
 Object.defineProperties(w.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
 const original={name:'Saved Driver',paint:'#edc784',car:'Solar Flare'};
 w.localStorage.setItem('star-rush-profile',JSON.stringify(original));
 w.localStorage.setItem('star-rush-name','Saved Driver');
 w.localStorage.setItem('star-rush-settings-road-v2',JSON.stringify({fov:80,quality:'low',autoGas:true}));
 const before=Array.from({length:w.localStorage.length},(_,i)=>[w.localStorage.key(i),w.localStorage.getItem(w.localStorage.key(i))]);
 w.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
 w.eval(source??readFileSync('dist/client/'+entry,'utf8'));
 return {w,errors,frames,before,draws:()=>drawCalls};
}
async function settled(w){
 const deadline=Date.now()+20000;
 while(!w.__shot?.ready&&!w.__shot?.error&&Date.now()<deadline)await new Promise(resolve=>setTimeout(resolve,2));
 assert(!w.__shot?.error,w.__shot?.error);assert.equal(w.__shot?.ready,true);return JSON.parse(JSON.stringify(w.__shot));
}

test('all named production captures repeat state/camera with no rAF, storage, input or real-clock leakage', async()=>{
 for(const shot of ['coast-chase','coast-full-bend','academy-depth']){
  const runs=[];
  for(let repetition=0;repetition<2;repetition++){
   const f=await fixture('?shot='+shot+'&t=4&frames=2');const {w}=f;
   try{
    const first=await settled(w);assert.equal(f.frames.length,0);assert(f.draws()>100);assert.equal(first.rendererInfo.classification,'software');
    assert.equal(first.frame,0);assert.equal(first.tick,240);assert.equal(first.quality,'high');assert.equal(first.audio,'disabled');
    w.dispatchEvent(new w.KeyboardEvent('keydown',{code:'KeyR',bubbles:true,cancelable:true}));
    w.dispatchEvent(new w.Event('blur'));w.document.dispatchEvent(new w.Event('visibilitychange'));
    assert.deepEqual(JSON.parse(JSON.stringify(w.__shot)),first);
    const second=await w.__shotNext();assert.equal(second.frame,1);assert.equal(second.tick,241);assert(second.player.s>first.player.s);
    assert.deepEqual(JSON.parse(JSON.stringify(await w.__shotNext())),JSON.parse(JSON.stringify(second)));
    const after=Array.from({length:w.localStorage.length},(_,i)=>[w.localStorage.key(i),w.localStorage.getItem(w.localStorage.key(i))]);assert.deepEqual(after,f.before);
    assert.match(w.document.getElementById('captureExit').href,/https:\/\/race.test\/$/);
    runs.push(first);assert.deepEqual(f.errors,[]);
    w.dispatchEvent(new w.Event('pagehide'));assert.equal(w.__shot,undefined);assert.equal(w.__shotNext,undefined);assert.equal(w.document.getElementById('captureExit'),null);
   }finally{await w.happyDOM.close();}
  }
  assert.deepEqual(runs[0],runs[1],shot+' repeat metadata');
 }
});

test('normal and legacy entry retain rAF and do not install capture API; idle replay stays stopped',async()=>{
 for(const entry of ['game.js','legacy/game.js']){
  const f=await fixture('',entry);try{
   assert.equal(f.w.__shot,undefined);assert.equal(f.w.__shotNext,undefined);assert(f.frames.length>0);
   f.frames.shift()(20);f.w.document.getElementById('startBtn').click();assert(f.w.document.getElementById('welcome').hidden);
   assert.equal(f.w.document.getElementById('profileName').value,'Saved Driver');assert.deepEqual(f.errors,[]);
  }finally{await f.w.happyDOM.close();}
 }
 const f=await fixture('?shot=coast-chase&input=idle&t=4');try{assert.equal((await settled(f.w)).player.speed,0);}finally{await f.w.happyDOM.close();}
});

test('invalid shot or unsupported legacy capture is an explicit error, never normal-play fallback',async()=>{
 for(const [search,entry] of [['?shot=missing','game.js'],['?shot=coast-chase&t=-1','game.js'],['?shot=coast-chase','legacy/game.js']]){
  const f=await fixture(search,entry);try{assert.equal(f.w.__shot.ready,false);assert(f.w.__shot.error);assert.equal(f.frames.length,0);assert.equal(f.w.document.getElementById('error').hidden,false);}finally{await f.w.happyDOM.close();}
 }
});

test('feel tape uses real physics and scene camera; two ticks per recording frame, clear straight braking',async()=>{
 const runs=[];
 for(let run=0;run<2;run++){
  const f=await fixture('?shot=academy-depth&feel=accelerate-brake');
  try{
   const first=await settled(f.w);assert.equal(first.feel.steps.length,0);assert.equal(first.player.speed,0);
   let last=first;const cameras=[];
   for(let frame=1;frame<=90;frame++){
    last=JSON.parse(JSON.stringify(await f.w.__shotNext()));
    assert.equal(last.frame,frame);assert.equal(last.feel.cameraFrame,frame);
    assert.equal(last.feel.steps.length,frame*2);assert.equal(last.feel.firstVisibleFrame,null);
    cameras.push(last.camera);
    if(frame===1)f.w.__shot.feel.steps[0].after.speed=999;
    if(frame===2)assert.notEqual(last.feel.steps[0].after.speed,999);
   }
   const trace=last.feel;
   assert.deepEqual(trace.inputs.map(i=>[i.id,i.inputFrame,i.targetPhysicsTick]),[['gas-on',1,1],['gas-off-brake-on',61,121]]);
   for(const [i,s] of trace.steps.entries()){
    assert.equal(s.physicsTick,i+1);assert.equal(s.recordingFrame,Math.ceil((i+1)/2));assert.equal(s.dt,1/120);
    assert.equal(s.sampled.gas,i<120);assert.equal(s.sampled.brake,i>=120);assert.equal(s.sampled.assistedSteer,null);
    assert(Math.abs(s.after.l)<1);assert(s.after.s<30);assert(s.after.s>=s.before.s);
   }
   assert(trace.steps[119].after.speed>4);assert(trace.steps[119].after.s-trace.steps[119].before.s>.03);
   assert(trace.steps[120].after.speed<trace.steps[120].before.speed);
   assert(trace.steps[179].after.speed<trace.steps[119].after.speed);
   assert.notDeepEqual(cameras[0],cameras[59]);assert.match(trace.audio,/unknown/);
   // Published trace is copied, not a writable alias into observations.
   assert.equal((await f.w.__shotNext()).frame,90);
   assert.deepEqual(f.errors,[]);runs.push({trace,cameras});
  }finally{await f.w.happyDOM.close();}
 }
 assert.deepEqual(runs[0],runs[1]);
 console.log('feel endpoint',JSON.stringify({beforeBrake:runs[0].trace.steps[119].after,end:runs[0].trace.steps[179].after}));
});

 test('unchanged fixed captures match parent shipped client state and camera exactly',async()=>{
 const baseline=execFileSync('git',['show','e3aa319:dist/client/game.js'],{encoding:'utf8',maxBuffer:8e6});
 for(const shot of ['academy-depth','coast-chase','coast-full-bend']){
  const values=[];for(const source of [baseline,null]){
   const f=await fixture('?shot='+shot+'&t=4&frames=2','game.js',source);try{
    const first=await settled(f.w),second=JSON.parse(JSON.stringify(await f.w.__shotNext()));
    for(const v of [first,second])delete v.feel;values.push([first,second]);
   }finally{await f.w.happyDOM.close();}
  }assert.deepEqual(values[0],values[1],shot);
 }
 });
