import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createCoastCarConsumer,decodeCoastCarSource} from '../coast-car-runtime.mjs';
const read=p=>fs.readFileSync(p,'utf8');
const parts=()=>decodeCoastCarSource(fs.readFileSync('assets/coast-car/car.glb').toString('base64'));
function setup(source=parts){const c={createCoastCarConsumer,coastCarSource:source};vm.runInNewContext(`${read('engine.js')}\n${read('racer.js')}\n${read('coast-car-client.js')}\nlet player={speed:25,roadSteer:.2},wheelSpin=2,roadDriving=true,enabled=false;function coastalSpaceEnabled(){return enabled}function disableCoastalSpace(){enabled=false}function wrapAngle(v){return v};this.run=s=>eval(s);this.api={car,animateCar,Mesh,Node,translation,mm,ry,rz,trs};`,c);return c;}
test('real racer lazily poses five parts and restores original on track exit',()=>{
 let calls=0;const c=setup(()=>{calls++;return parts()}),old=c.api.car.children.slice();
 c.api.animateCar(1,.01,.4);assert.equal(calls,0);assert.deepEqual(c.api.car.children,old);
 c.run('enabled=true');c.api.animateCar(1,.01,.4);assert.equal(calls,1);assert.equal(c.api.car.children.length,5);
 const matrices=c.api.car.children.map(n=>Array.from(n.local));assert(matrices.flat().every(Number.isFinite));
 c.run('wheelSpin=3;player.roadSteer=-.2');c.api.animateCar(2,.01,.4);assert.equal(calls,1);assert.notDeepEqual(c.api.car.children.map(n=>Array.from(n.local)),matrices);
 c.run('enabled=false');c.api.animateCar(2,.01,.4);assert.deepEqual(c.api.car.children,old);
 c.run('enabled=true');c.api.animateCar(2,.01,.4);assert.equal(calls,2);
});
test('decode and invalid identity failures restore old car and disable existing candidate',()=>{
 for(const source of [()=>{throw Error('bad')},()=>{const p=parts();p[0].action='wrong';return p}]){const c=setup(source),old=c.api.car.children.slice();c.run('enabled=true');c.api.animateCar(1,.01,0);assert.deepEqual(c.api.car.children,old);assert.equal(c.run('enabled'),false);}
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
 const c=setup();c.run('enabled=true');c.api.animateCar(0,0,0);assert(c.api.car.children.every(n=>n.mesh.paintable&&n.mesh.paintMask));
});
