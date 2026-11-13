import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import * as THREE from 'three';
import {createThreeBackend} from '../render-three.js';
import {createSkyPanorama} from '../sky-panorama.js';

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
function sceneBackend(options,dpr=1,failShader=false){
 class Renderer {
  constructor(){this.debug={};this.shadowMap={};this.info={render:{calls:0,triangles:0}}}
  setPixelRatio(value){this.ratio=value;} setSize(width,height){this.size=[width,height];} render(){if(failShader){failShader=false;this.debug.onShaderError();}}
 }
 const scope={createSkyPanorama,THREE:{...THREE,WebGLRenderer:Renderer},devicePixelRatio:dpr,performance};
 vm.runInNewContext(readFileSync(new URL('../render-three.js',import.meta.url),'utf8').replace("import * as THREE from 'three';",'').replace("import {createSkyPanorama} from './sky-panorama.js';",'').replace('export function','function'),scope);
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

test('actual Three backend fixes capture buffer and DPR independently of host and quality settings',()=>{
 const captured=sceneBackend({capture:true},3),normal=sceneBackend({},3);
 captured.render([],view,317,233,62,{quality:'high'});assert.deepEqual(captured.renderer.size,[1280,720]);assert.equal(captured.renderer.ratio,1);
 captured.render([],view,900,500,62,{quality:'medium'});assert.deepEqual(captured.renderer.size,[1280,720]);assert.equal(captured.renderer.ratio,1);
 normal.render([],view,317,233,62,{quality:'high'});assert.deepEqual(normal.renderer.size,[317,233]);assert.equal(normal.renderer.ratio,1.5);
});

test('afternoon scene scopes lights and world-locked surface shaders to eligible coast only',()=>{
 const backend=sceneBackend({shading:'lambert',hemisphereIntensity:.7,coastalScene:true});
 const sea=triangle();sea.surfaceKind='sea';const land=triangle();land.surfaceKind='landscape';const facade=triangle();facade.coastStreet=true;
 const list=[sea,land,facade].map(mesh=>({mesh,m:identity,shadow:true}));
 const draw=active=>backend.render(list,{...view,origin:[100,0,-50]},1280,720,60,{quality:'high',coastalSceneActive:active},12000);
 draw(true);const sun=backend.scene.children.find(x=>x.isDirectionalLight);assert.equal(sun.intensity,2.7);assert.equal(backend.scene.fog.near,190);
 const batches=backend.scene.children.filter(x=>x.isInstancedMesh);assert.equal(new Set(batches.map(x=>x.material)).size,3);
 for(const b of batches){const shader={uniforms:{},vertexShader:'#include <worldpos_vertex>',fragmentShader:'#include <color_fragment>'};b.material.onBeforeCompile(shader);assert.equal(shader.uniforms.coastActive.value,1);assert.deepEqual(shader.uniforms.coastOrigin.value.toArray(),[100,0,-50]);assert.match(shader.vertexShader,/instanceMatrix\*coastWorld/);assert.match(shader.fragmentShader,/if\(coastActive>0.5\)/);}
 draw(false);assert.equal(sun.intensity,2.4);assert.deepEqual(sun.position.toArray(),[-30,60,25]);assert.equal(backend.scene.fog.near,125);assert.equal(backend.renderer.toneMappingExposure,1);
 const shader={uniforms:{},vertexShader:'',fragmentShader:''};batches[0].material.onBeforeCompile(shader);assert.equal(shader.uniforms.coastActive.value,0);
});


test('candidate shader failure restores baseline materials/lights and warns once',()=>{
 const warnings=[];const backend=sceneBackend({shading:'lambert',coastalScene:true,onSceneFailure:message=>warnings.push(message)},1,true);
 const mesh=triangle();mesh.surfaceKind='sea';const draw=()=>backend.render([{mesh,m:identity,shadow:true}],view,1280,720,60,{quality:'high',coastalSceneActive:true},1000);
 draw();assert.equal(warnings.length,1);assert.equal(backend.renderer.debug.onShaderError,undefined);assert.match(warnings[0],/已回退/);assert.equal(backend.scene.fog.near,125);
 const material=backend.scene.children.find(x=>x.isInstancedMesh).material;const shader={uniforms:{},vertexShader:'untouched',fragmentShader:'untouched'};material.onBeforeCompile(shader);assert.equal(shader.fragmentShader,'untouched');assert.equal(material.customProgramCacheKey(),'');
 draw();assert.equal(warnings.length,1);
});
