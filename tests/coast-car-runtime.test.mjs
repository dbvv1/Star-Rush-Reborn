import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createCoastCarConsumer,decodeCoastCarSource} from '../coast-car-runtime.mjs';
const read=p=>fs.readFileSync(p,'utf8');
const collectSource=read('race.js').split('\n').find(line=>line.startsWith('const drawList=[];function collect('));
assert(collectSource,'use the actual renderer collection traversal');
const parts=()=>decodeCoastCarSource(fs.readFileSync('assets/coast-car/car.glb').toString('base64'));
function setup(source=parts){const c={createCoastCarConsumer,coastCarSource:source};vm.runInNewContext(`${read('engine.js')}\n${read('racer.js')}\n${read('coast-car-client.js')}\n${collectSource}\nthis.visible=()=>{drawList.length=0;collect(car);return drawList.slice()};\nlet player={speed:25,roadSteer:.2},wheelSpin=2,roadDriving=true,enabled=false;function coastalSpaceEnabled(){return enabled}function disableCoastalSpace(){enabled=false}function wrapAngle(v){return v};this.run=s=>eval(s);this.api={car,animateCar,Mesh,Node,translation,mm,ry,rz,trs};`,c);return c;}
test('real racer lazily poses five parts and restores original on track exit',()=>{
 let calls=0;const c=setup(()=>{calls++;return parts()}),old=c.api.car.children.slice();
 c.api.animateCar(1,.01,.4);assert.equal(calls,0);assert.deepEqual(c.api.car.children,old);
 c.run('enabled=true');c.api.animateCar(1,.01,.4);assert.equal(calls,1);assert.equal(c.api.car.children.length,7);
 const matrices=c.api.car.children.map(n=>Array.from(n.local));assert(matrices.flat().every(Number.isFinite));
 c.run('wheelSpin=3;player.roadSteer=-.2');c.api.animateCar(2,.01,.4);assert.equal(calls,1);assert.notDeepEqual(c.api.car.children.map(n=>Array.from(n.local)),matrices);
 c.run('enabled=false');c.api.animateCar(2,.01,.4);assert.deepEqual(c.api.car.children,old);
 c.run('enabled=true');c.api.animateCar(2,.01,.4);assert.equal(calls,2);
});
test('decode and invalid identity failures restore old car and disable existing candidate',()=>{
 for(const source of [()=>{throw Error('bad')},()=>{const p=parts();p[0].action='wrong';return p}]){const c=setup(source),old=c.api.car.children.slice();c.run('enabled=true');c.api.animateCar(1,.01,0);assert.deepEqual(c.api.car.children,old);assert.equal(c.run('enabled'),false);assertVisibleRider(c,false);}
});
test('partial allocations dispose on failure without retry or simulation mutation',()=>{
 const c=setup(),old=c.api.car.children.slice();let allocated=0,disposed=0,failures=0;
 const consumer=createCoastCarConsumer(c.api.car,parts,{...c.api,Mesh:class{constructor(){if(++allocated===3)throw Error('allocation')}dispose(){disposed++}}},()=>failures++);
 const pose=Object.freeze({steer:.1,wheelSpin:2,roll:.03,bob:.01});assert.equal(consumer.update(true,pose),false);assert.equal(disposed,2);assert.equal(failures,1);assert.deepEqual(c.api.car.children,old);consumer.update(true,pose);assert.equal(allocated,3);
});
test('node allocation failure disposes the just-created mesh',()=>{
 const c=setup();let disposed=0,failed=0;const old=c.api.car.children.slice();
 const consumer=createCoastCarConsumer(c.api.car,parts,{...c.api,Mesh:class{dispose(){disposed++}},Node:class{constructor(){throw Error('node')}}},()=>failed++);
 assert.equal(consumer.update(true,{wheelSpin:1}),false);assert.equal(disposed,1);assert.equal(failed,1);assert.deepEqual(c.api.car.children,old);
});
test('garage paint mask follows explicit source material, excluding glass and rubber',()=>{
 const p=parts(),body=p.find(p=>p.name==='body');assert(body.paintMask.some(Boolean));assert(body.paintMask.some(v=>!v));
 assert(p.filter(p=>p.name!=='body').every(p=>p.paintMask.every(v=>!v)));
 assert(p.every(p=>p.paintMask.length===p.sourceData.length/10));
 const c=setup();c.run('enabled=true');c.api.animateCar(0,0,0);assert(c.api.car.children.slice(0,5).every(n=>n.mesh.paintable&&n.mesh.paintMask));
});

function riderState(c){return c.run('({bodyNode,headNode,driverBodyNode,coastDriverBodyNode,tires,flames})');}
function assertVisibleRider(c,candidate){
 const r=riderState(c),draw=c.visible();
 assert.equal(draw.filter(d=>d.mesh===r.headNode.mesh).length,1,'head rendered exactly once');
 const torso=draw.filter(d=>d.mesh===r.driverBodyNode.mesh);
 assert.equal(torso.length,1,'complete original torso/arms rendered exactly once');
 assert.deepEqual(Array.from(torso[0].m),Array.from(r.bodyNode.local),'torso retains original animated body transform');
 assert.deepEqual(Array.from(draw.find(d=>d.mesh===r.headNode.mesh).m),Array.from(r.headNode.local),'original head feedback reaches draw list');
 if(candidate){
  assert.equal(draw.length,7);
  assert(!draw.some(d=>d.mesh===r.bodyNode.mesh),'no legacy car shell');
  for(const w of r.tires)assert(!draw.some(d=>d.mesh===w.n.mesh),'no legacy wheel');
  for(const f of r.flames)assert(!draw.some(d=>d.mesh===f.n.mesh),'no legacy flame');
 }
 return draw;
}
test('actual draw traversal retains full original driver and animated feedback across repeat and exit',()=>{
 const c=setup(),r=riderState(c),old=c.api.car.children.slice();
 assert.equal(old.length,8);assert.equal(old[0],r.bodyNode);assert.equal(old[1],r.headNode);
 r.tires.forEach((w,i)=>assert.equal(old[2+i],w.n));r.flames.forEach((f,i)=>assert.equal(old[6+i],f.n));
 assert.equal(r.coastDriverBodyNode.mesh,r.driverBodyNode.mesh,'reuse original geometry/material data');
 const data=Array.from(r.driverBodyNode.mesh.sourceData),indices=Array.from(r.driverBodyNode.mesh.sourceIndices);
 c.api.animateCar(1,.01,.4);assertVisibleRider(c,false);
 c.run('enabled=true');c.api.animateCar(1,.01,.4);assertVisibleRider(c,true);
 const nodes=c.api.car.children.slice(),head=Array.from(r.headNode.local),torso=Array.from(r.coastDriverBodyNode.local);
 for(let i=0;i<3;i++){c.api.animateCar(2+i,.01,-.4);assert.deepEqual(c.api.car.children,nodes);assertVisibleRider(c,true);}
 assert.notDeepEqual(Array.from(r.headNode.local),head);assert.notDeepEqual(Array.from(r.coastDriverBodyNode.local),torso);
 c.run('enabled=false');c.api.animateCar(5,.01,.2);assert.deepEqual(c.api.car.children,old);assertVisibleRider(c,false);
 c.run('enabled=true');c.api.animateCar(6,.01,-.2);assertVisibleRider(c,true);
 c.run('coastCarConsumer.dispose()');assert.deepEqual(c.api.car.children,old);assertVisibleRider(c,false);
 assert.deepEqual(Array.from(r.driverBodyNode.mesh.sourceData),data);assert.deepEqual(Array.from(r.driverBodyNode.mesh.sourceIndices),indices);
});
test('failed pose after active replacement restores visible original driver without disposal or retries',()=>{
 let calls=0;const c=setup(()=>{calls++;return parts()}),r=riderState(c),old=c.api.car.children.slice();let disposed=0;
 r.driverBodyNode.mesh.onDispose=()=>disposed++;r.headNode.mesh.onDispose=()=>disposed++;
 c.run('enabled=true');c.api.animateCar(1,.01,.4);assertVisibleRider(c,true);
 c.run('wheelSpin=NaN');c.api.animateCar(2,.01,-.4);
 assert.deepEqual(c.api.car.children,old);assert.equal(c.run('enabled'),false);assertVisibleRider(c,false);
 c.run('wheelSpin=2;enabled=true');c.api.animateCar(3,.01,.2);assert.deepEqual(c.api.car.children,old);assertVisibleRider(c,false);
 assert.equal(calls,1);assert.equal(disposed,0,'borrowed driver meshes survive candidate failure');
});
