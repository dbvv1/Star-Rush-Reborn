import test from 'node:test';
import assert from 'node:assert/strict';
import {Window} from 'happy-dom';
import {initializeRendering} from '../render-init.js';

test('successful WebGL keeps the original canvas without requesting 2D',()=>{
 const canvas={getContext(){throw Error('must not request 2D')}};const backend={renderer:{}};
 assert.deepEqual(initializeRendering(canvas,()=>backend),{canvas,threeBackend:backend,software:false,softwareContext:null});
});
test('normal Canvas fallback keeps its original canvas and context',()=>{
 const ctx={};const canvas={getContext(type){assert.equal(type,'2d');return ctx}};
 assert.deepEqual(initializeRendering(canvas,()=>null),{canvas,threeBackend:null,software:true,softwareContext:ctx});
});
test('locked canvas is replaced once with attributes preserved before input binding',async()=>{
 const w=new Window();try{
  w.document.body.innerHTML='<canvas id="scene" width="1280" height="720" role="img" aria-label="赛车场景" style="touch-action:none"></canvas>';
  const original=w.document.querySelector('#scene'),ctx={};let requests=0;
  w.HTMLCanvasElement.prototype.getContext=function(type){assert.equal(type,'2d');requests++;return this===original?null:ctx;};
  const result=initializeRendering(original,()=>null);
  assert.equal(requests,2);assert.equal(result.canvas,w.document.querySelector('#scene'));assert.notEqual(result.canvas,original);
  assert.equal(result.canvas.outerHTML,original.outerHTML);assert.equal(result.softwareContext,ctx);assert.equal(original.isConnected,false);
 }finally{await w.happyDOM.close();}
});
test('unavailable 2D is a visible-initialization error, not an unusable frame loop',async()=>{
 const w=new Window();try{
  w.document.body.innerHTML='<canvas id="scene"></canvas>';const original=w.document.querySelector('#scene');let requests=0;
  w.HTMLCanvasElement.prototype.getContext=function(){requests++;throw Error('synthetic unavailable 2D')};
  assert.throws(()=>initializeRendering(original,()=>null),/无法初始化/);assert.equal(requests,2);assert.equal(original.isConnected,true);
 }finally{await w.happyDOM.close();}
});
