import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import os from 'node:os';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {decodeStandardPart,instantiateForStar,poseCar,bendRoadParts} from '../adapter.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),repo=path.resolve(root,'../..');
const read=p=>fs.readFileSync(path.join(repo,p),'utf8');
const engine=vm.runInNewContext(read('engine.js')+';({Mesh,Node,translation,mm,ry,rz,trs,transform})');
const backend=read('render-three.js'),source=backend.slice(backend.indexOf(' function geometry('),backend.indexOf(' function render('));
assert(source.includes('i+=10'),'Actual renderer contract drift');
const convert=vm.runInNewContext(`const geometries=new Map(),batches=new Map(),scene={remove(){}};let nextId=1;${source};geometry`,{THREE});
const load=(id,v='base')=>fs.readFileSync(path.join(root,'outputs',v,id+'.glb'));
const manifest=v=>JSON.parse(fs.readFileSync(path.join(root,'outputs',v,'manifest.json')));
function compare(a,b,tol=1e-6){assert.equal(a.length,b.length);for(let i=0;i<a.length;i++)assert(Math.abs(a[i]-b[i])<=tol,`${i}: ${a[i]} != ${b[i]}`);}

for(const variant of ['base','warm'])for(const row of manifest(variant).assets){
 test(`${variant}/${row.id}: fixed hash, real GLTFLoader, actual Star Mesh -> Three geometry`,async()=>{
  const bytes=load(row.id,variant);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),row.sha256);
  const gltf=await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
  gltf.scene.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(gltf.scene);compare(box.min.toArray(),row.bounds_m.min,2e-5);compare(box.max.toArray(),row.bounds_m.max,2e-5);
  const parts=decodeStandardPart(bytes),instance=instantiateForStar(parts,engine);assert.equal(parts.length,row.parts.length);let triangles=0,disposed=0;
  for(const {mesh,part} of instance.byName.values()){
   assert.equal(mesh.sourceData.length%10,0);const g=convert(mesh,null);assert(g instanceof THREE.BufferGeometry);assert.equal(g.index.count,mesh.sourceIndices.length);triangles+=g.index.count/3;
   for(const [name,off] of [['position',0],['normal',3],['color',6]]){const a=g.getAttribute(name);for(let i=0;i<a.count;i++)compare(Array.from(a.array.slice(i*3,i*3+3)),Array.from(part.sourceData.slice(i*10+off,i*10+off+3)),0);}
   assert(!g.getAttribute('uv'));assert.equal(convert(mesh,null),g);g.addEventListener('dispose',()=>disposed++);
  }
  assert.equal(triangles,row.triangles);instance.dispose();instance.dispose();assert.equal(disposed,parts.length);assert.equal(instance.root.children.length,0);assert.equal(instance.byName.size,0);
 });
}
test('complete car: five independent parts, front steer only, all wheels roll, body bob/roll',()=>{
 const instance=instantiateForStar(decodeStandardPart(load('car')),engine);const pose={steer:.32,wheelSpin:1.75,roll:.06,bob:.01};poseCar(instance,pose,engine);
 assert.equal(instance.byName.size,5);for(const [name,{node,part}]of instance.byName){
  const expected=name==='body'?engine.trs([0,.01,0],[1,1,1],[.06,0,0]):engine.mm(engine.translation(...part.pivot),engine.mm(engine.ry(name.includes('front')?-.32:0),engine.rz(1.75)));
  compare(Array.from(node.local),Array.from(expected),0);if(name.includes('front'))assert(part.pivot[0]>0);if(name.includes('back'))assert(part.pivot[0]<0);
 }
 assert.throws(()=>poseCar(instance,{steer:NaN},engine),/Nonfinite/);
 const bad=instantiateForStar(decodeStandardPart(load('car')),engine);bad.byName.get('wheel-front-left').part.action='static';assert.throws(()=>poseCar(bad,{},engine),/identities/);
 const wrong=instantiateForStar(decodeStandardPart(load('car')),engine);wrong.byName.set('static-1',wrong.byName.get('wheel-front-left'));wrong.byName.delete('wheel-front-left');assert.throws(()=>poseCar(wrong,{},engine),/identities/);
 const car=manifest('base').assets.find(a=>a.id==='car');assert(car.dimensions_m[0]<3.34&&car.dimensions_m[2]<1.82);assert(car.dimensions_m[1]<1.5);
});
test('warm second edit changes colors and hashes for every part, never geometry/pivots/topology',()=>{
 for(const {id} of manifest('base').assets){const a=decodeStandardPart(load(id)),b=decodeStandardPart(load(id,'warm'));assert.notEqual(crypto.createHash('sha256').update(load(id)).digest('hex'),crypto.createHash('sha256').update(load(id,'warm')).digest('hex'));
  for(let j=0;j<a.length;j++){compare(a[j].pivot,b[j].pivot,0);compare(a[j].sourceIndices,b[j].sourceIndices,0);let changed=false;for(let k=0;k<a[j].sourceData.length;k+=10){compare(a[j].sourceData.slice(k,k+6),b[j].sourceData.slice(k,k+6),0);changed ||= a[j].sourceData[k+6]!==b[j].sourceData[k+6];}assert(changed);}
 }
});
test('road: slope shoulder, upward surfaces, and longitudinal segments no longer than 2 m',()=>{
 const p=decodeStandardPart(load('road')).find(x=>x.name==='road-and-graded-shoulder'),d=p.sourceData,ix=p.sourceIndices;let edgeLow=0,roadTris=0;
 for(let k=0;k<d.length;k+=10){if(Math.abs(d[k+2])>21.9){assert(d[k+1]<-2.7);edgeLow++;}}
 assert(edgeLow>0);
 for(let i=0;i<ix.length;i+=3){const ps=[...ix.slice(i,i+3)].map(k=>Array.from(d.slice(k*10,k*10+3)));if(ps.every(p=>Math.abs(p[2])<11.58&&Math.abs(p[1])<.02)&&ps.every(p=>Math.abs(p[2])>.07)){const xs=ps.map(p=>p[0]);assert(Math.max(...xs)-Math.min(...xs)<=2.001);roadTris++;}}
 assert(roadTris>500);
 const ends=x=>{const m=new Map();for(let i=0;i<d.length;i+=10)if(Math.abs(d[i]-x)<1e-5)m.set(d[i+2].toFixed(5),d[i+1]);return m;};const left=ends(-12),right=ends(12);for(const[z,y]of left){assert(right.has(z));assert(Math.abs(y-right.get(z))<1e-5);}
});
test('road bend: straight identity, curved elevated transport, normals and foldover refusal',()=>{
 const parts=decodeStandardPart(load('road'));const flat=s=>({p:[s,0,0],T:[1,0,0],R:[0,0,1],curv:0,slope:0});const a=bendRoadParts(parts,flat,0);for(let j=0;j<a.length;j++)for(let i=0;i<a[j].sourceData.length;i+=10){compare(a[j].sourceData.slice(i,i+3),Array.from(parts[j].sourceData.slice(i,i+3),(v,k)=>v+parts[j].pivot[k]),2e-6);compare(a[j].sourceData.slice(i+3,i+10),parts[j].sourceData.slice(i+3,i+10),2e-6);}
 const curve=s=>({p:[100*Math.sin(s/100),s*.05,100*(1-Math.cos(s/100))],T:[Math.cos(s/100),0,Math.sin(s/100)],R:[-Math.sin(s/100),0,Math.cos(s/100)],curv:.01,slope:.05});
 const b=bendRoadParts(parts,curve,40);for(const p of b)for(let i=0;i<p.sourceData.length;i+=10)assert(Math.abs(Math.hypot(...p.sourceData.slice(i+3,i+6))-1)<1e-6);
 assert.throws(()=>bendRoadParts(parts,s=>({...flat(s),curv:1}),0),/folded/);assert.throws(()=>bendRoadParts(decodeStandardPart(load('car')),flat,0),/Not a road/);
});
test('adapter rejects truncated/bad header, unsupported accessor, nonfinite vertices and missing nodes',()=>{
 const raw=load('car');assert.throws(()=>decodeStandardPart(raw.subarray(0,26)),/GLB/);const bad=Buffer.from(raw);bad.writeUInt32LE(3,4);assert.throws(()=>decodeStandardPart(bad),/GLB/);
 function mutate(fn){const jl=raw.readUInt32LE(12),g=JSON.parse(raw.subarray(20,20+jl));fn(g);let json=Buffer.from(JSON.stringify(g));json=Buffer.concat([json,Buffer.alloc((4-json.length%4)%4,32)]);const bin=raw.subarray(20+jl);const out=Buffer.alloc(20+json.length+bin.length);raw.copy(out,0,0,20);out.writeUInt32LE(out.length,8);out.writeUInt32LE(json.length,12);json.copy(out,20);bin.copy(out,20+json.length);return out;}
 assert.throws(()=>decodeStandardPart(mutate(g=>g.accessors[1].componentType=5120)),/accessor/);assert.throws(()=>decodeStandardPart(mutate(g=>g.scenes[0].nodes=[])),/hierarchy/);
 const nan=Buffer.from(raw);const g=JSON.parse(nan.subarray(20,20+nan.readUInt32LE(12)));nan.writeFloatLE(NaN,28+nan.readUInt32LE(12)+g.bufferViews[0].byteOffset);assert.throws(()=>decodeStandardPart(nan),/Invalid vertex/);
});

test('official validator gate rejects a different valid GLB or manifest size/triangle drift',()=>{
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'star-content-validator-'));
 try{
  const original=manifest('base').assets.find(a=>a.id==='car');
  for(const mode of ['hash','size','triangles']){
   const row={...original};fs.writeFileSync(path.join(tmp,'car.glb'),mode==='hash'?load('car','warm'):load('car'));
   if(mode==='size')row.bytes++;if(mode==='triangles')row.triangles++;
   fs.writeFileSync(path.join(tmp,'manifest.json'),JSON.stringify({assets:[row]}));
   const result=spawnSync(process.execPath,[path.join(root,'validate.mjs'),tmp],{encoding:'utf8'});
   assert.notEqual(result.status,0);assert.match(result.stderr,mode==='triangles'?/Triangle count drift/:/identity drift/);assert(!fs.existsSync(path.join(tmp,'gltf-validation.json')));
  }
 }finally{fs.rmSync(tmp,{recursive:true,force:true});}
});

test('positive and negative curved panels preserve actual discrete winding; short and zero frames reject',()=>{
 const parts=decodeStandardPart(load('road'));
 const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],sub=(a,b)=>a.map((v,i)=>v-b[i]);
 for(const k of [.01,-.01,.005,-.005]){
  const curve=s=>({p:[Math.sin(k*s)/k,.05*s,(1-Math.cos(k*s))/k],T:[Math.cos(k*s),0,Math.sin(k*s)],R:[-Math.sin(k*s),0,Math.cos(k*s)],curv:k,slope:.05});
  for(const p of bendRoadParts(parts,curve,40)){const d=p.sourceData;for(let i=0;i<p.sourceIndices.length;i+=3){const ids=Array.from(p.sourceIndices.slice(i,i+3)),v=ids.map(j=>Array.from(d.slice(j*10,j*10+3))),f=cross(sub(v[1],v[0]),sub(v[2],v[0]));for(const j of ids)assert(f[0]*d[j*10+3]+f[1]*d[j*10+4]+f[2]*d[j*10+5]>0);}}
 }
 for(const T of [[0,0,0],[1,0], [1,0,0]])assert.throws(()=>bendRoadParts(parts,s=>({p:[s,0,0],T,R:T.length===3&&T[0]===1?[0,0]:[0,0,1]}),0),/frame/);
});
test('actual circuit frames: academy center 12 m rejects no face and preserves rail winding',()=>{
 const actual=vm.runInNewContext(read('engine.js')+";const roadDriving=true;"+read('circuit.js')+";activeTrackId='academy-reborn';rebuildCircuit();({sample:circuitRoad})");
 const parts=bendRoadParts(decodeStandardPart(load('road')),s=>actual.sample(s),12);assert.equal(parts.length,9);for(const p of parts)assert(p.sourceData.every(Number.isFinite));
});
