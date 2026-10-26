import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import * as THREE from 'three';
import {createThreeBackend} from '../render-three.js';

test('unavailable WebGL2 keeps null fallback and identifies context failure',t=>{
  const warn=t.mock.method(console,'warn',()=>{});let calls=0;
  assert.equal(createThreeBackend({getContext(type,options){calls++;assert.equal(type,'webgl2');assert.deepEqual(options,{antialias:true,alpha:false});return null;}}),null);
  assert.equal(calls,1);assert.equal(warn.mock.calls.length,1);
  assert.match(warn.mock.calls[0].arguments[0],/webgl2 context unavailable/);
});
test('throwing context request is distinguished without retrying',t=>{
  const warn=t.mock.method(console,'warn',()=>{});let calls=0;
  assert.equal(createThreeBackend({getContext(){calls++;throw Error('synthetic context failure');}}),null);
  assert.equal(calls,1);assert.match(warn.mock.calls[0].arguments[0],/context initialization failed/);
  assert.equal(warn.mock.calls[0].arguments[1],'synthetic context failure');
});
test('renderer construction failure is distinguished from context creation',t=>{
  const warn=t.mock.method(console,'warn',()=>{});t.mock.method(console,'error',()=>{});
  assert.equal(createThreeBackend({getContext(){return {};}}),null);
  assert.equal(warn.mock.calls.length,1);assert.match(warn.mock.calls[0].arguments[0],/renderer initialization failed/);
});

// Real scene/material/geometry code with only the GPU renderer stubbed; not visual QA.
function sceneBackend(options){
 class Renderer {
  constructor(){this.shadowMap={};this.info={render:{calls:0,triangles:0}}}
  setPixelRatio(){} setSize(){} render(){}
 }
 const scope={THREE:{...THREE,WebGLRenderer:Renderer},devicePixelRatio:1,performance};
 vm.runInNewContext(readFileSync(new URL('../render-three.js',import.meta.url),'utf8').replace("import * as THREE from 'three';",'').replace('export function','function'),scope);
 return scope.createThreeBackend({getContext:()=>({})},options);
}
function triangle(){return {sourceData:new Float32Array([0,0,0,0,1,0,.2,.5,.6,0, 1,0,0,0,1,0,.2,.5,.6,0, 0,0,-1,0,1,0,.2,.5,.6,0]),sourceIndices:new Uint32Array([0,1,2]),paintable:true}}
const identity=new THREE.Matrix4().toArray(),view={eye:[0,2,5],target:[0,0,0]};
for(const [name,options,type,intensity] of [['default',undefined,'MeshToonMaterial',2.2],['legacy',{shading:'toon',hemisphereIntensity:2.2},'MeshToonMaterial',2.2],['road',{shading:'lambert',hemisphereIntensity:.7},'MeshLambertMaterial',.7]]){
 test(name+' material preserves shared batches, opacity, tint, lights, shadow settings and disposal',()=>{
  const backend=sceneBackend(options),a=triangle(),b=triangle();
  const first=[{mesh:a,m:identity,shadow:true,tint:'#bada55'},{mesh:b,m:identity,shadow:true},{mesh:a,m:identity,shadow:false,opacity:.45}];
  const render=list=>backend.render(list,view,1280,720,60,{quality:'high'});
  render(first);const batches=()=>backend.scene.children.filter(x=>x.isInstancedMesh);
  const [opaque,other,transparent]=batches(),material=opaque.material;
  assert.equal(material.type,type);assert.equal(other.material,material);assert.equal(material.vertexColors,true);
  assert.equal(material.side,THREE.FrontSide);assert.equal(material.shadowSide,null); // Three's default back-face caster
  assert.equal(opaque.castShadow,true);assert.equal(opaque.receiveShadow,true);
  assert.equal(transparent.material.type,type);assert.notEqual(transparent.material,material);
  assert.equal(transparent.material.opacity,.45);assert.equal(transparent.material.transparent,true);assert.equal(transparent.material.depthWrite,false);assert.equal(transparent.receiveShadow,false);assert.equal(transparent.castShadow,false);
  const color=new THREE.Color('#bada55');assert(Math.abs(opaque.geometry.attributes.color.array[0]-color.r)<1e-6);
  if(type==='MeshToonMaterial')assert.deepEqual(Array.from(material.gradientMap.image.data),[95,145,195,245]);else assert.equal(material.gradientMap,undefined);
  const hemi=backend.scene.children.find(x=>x.isHemisphereLight),sun=backend.scene.children.find(x=>x.isDirectionalLight);
  assert.equal(hemi.intensity,intensity);assert.equal(sun.intensity,2.4);assert.deepEqual(sun.position.toArray(),[-30,60,25]);assert.deepEqual(sun.shadow.mapSize.toArray(),[1024,1024]);assert.equal(sun.shadow.bias,-.0004);assert.equal(sun.shadow.normalBias,0);
  assert.deepEqual(['left','right','top','bottom','near','far'].map(k=>sun.shadow.camera[k]),[-55,55,45,-45,1,160]);
  assert.equal(backend.renderer.shadowMap.type,THREE.PCFSoftShadowMap);assert.equal(backend.renderer.toneMappingExposure,1);
  assert.equal(backend.scene.children.filter(x=>x.material?.isShaderMaterial).length,1);
  let batchDisposed=0,geometryDisposed=0,materialDisposed=0;opaque.addEventListener('dispose',()=>batchDisposed++);opaque.geometry.addEventListener('dispose',()=>geometryDisposed++);material.addEventListener('dispose',()=>materialDisposed++);
  const grown=[...Array.from({length:12},()=>first[0]),first[1],first[2]];render(grown);
  assert.equal(batchDisposed,1);assert.equal(batches().find(x=>x.count===12).material,material);assert.equal(geometryDisposed,0);assert.equal(materialDisposed,0);
  a.onDispose();assert.equal(geometryDisposed,1);assert.equal(materialDisposed,0);assert.equal(batches().length,1);assert.equal(batches()[0],other);
  render([first[1]]);assert.equal(other.material,material);assert.equal(other.visible,true);
 });
}
test('invalid rendering options fail explicitly before asking for a graphics context',()=>{
 const canvas={getContext(){throw Error('must not allocate a context')}};
 assert.throws(()=>createThreeBackend(canvas,{shading:'unknown'}),/Unknown shading/);
 for(const hemisphereIntensity of [-1,NaN,Infinity])assert.throws(()=>createThreeBackend(canvas,{hemisphereIntensity}),/Invalid hemisphere/);
});
