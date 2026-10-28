// CPU DOM consumer: real app + Rapier, view stub only. Not GPU acceptance.
import {build} from 'esbuild';
import {Window} from 'happy-dom';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('.',import.meta.url));
const source=await build({absWorkingDir:root,entryPoints:['app.mjs'],bundle:true,format:'esm',write:false,target:'es2022',plugins:[{name:'cpu-only-view',setup(b){b.onResolve({filter:/^\.\/render\.mjs$/},()=>({path:'cpu-view',namespace:'fake'}));b.onLoad({filter:/.*/,namespace:'fake'},()=>({contents:'export class ComparisonView {constructor(){window.viewCreated=(window.viewCreated||0)+1}resetCamera(){}render(){}dispose(){window.viewDisposed=(window.viewDisposed||0)+1}}'}));}}]});
const w=new Window({url:'http://comparison.test/'});w.document.write(readFileSync(root+'/index.html','utf8').replace(/<script[^>]*>[\s\S]*?<\/script>/g,''));
let next=1,raf=new Map();w.requestAnimationFrame=f=>{const id=next++;raf.set(id,f);return id};w.cancelAnimationFrame=id=>raf.delete(id);
let now=0;const frame=()=>{now+=1000/60;const f=[...raf.values()];raf.clear();for(const fn of f)fn(now)};
const key=(type,code)=>w.dispatchEvent(new w.KeyboardEvent(type,{code,cancelable:true,bubbles:true}));
await w.eval('(async()=>{'+source.outputFiles[0].text+'})()');assert.ok(w.rapierComparison);assert.equal(w.document.getElementById('loading').hidden,true);
for(let i=0;i<90;i++)frame();key('keydown','KeyW');for(let i=0;i<120;i++)frame();const moving=w.rapierComparison.snapshot();assert.ok(moving.velocity.x>8);
key('keydown','Escape');const paused=w.rapierComparison.snapshot();for(let i=0;i<300;i++)frame();assert.equal(w.rapierComparison.snapshot().ticks,paused.ticks);
key('keydown','Escape');frame();const resumed=w.rapierComparison.snapshot();assert.equal(resumed.ticks,paused.ticks);for(let i=0;i<60;i++)frame();assert.ok(w.rapierComparison.snapshot().ticks>paused.ticks);
key('keydown','KeyR');const reset=w.rapierComparison.snapshot();assert.equal(reset.velocity.x,0);assert.equal(reset.ticks,0);
w.document.getElementById('exit').click();assert.equal(w.rapierComparison.snapshot().closed,true);assert.equal(raf.size,0);assert.equal(w.viewDisposed,1);key('keydown','KeyW');assert.equal(w.rapierComparison.snapshot().closed,true);
console.log('CPU DOM + real Rapier input / pause / reset / exit passed (renderer stub, not browser acceptance).');await w.happyDOM.close();
