import test from 'node:test';
import assert from 'node:assert/strict';
import {RoadVehicleModel as R} from '../road-vehicle-core.js';
const car=()=>({vS:0,vL:0,yaw:0,spin:0});
const run=(dt=1/120)=>{const p=car();let crossing=null;for(let i=0;i<10/dt;i++){R.step(p,{gas:true},dt,{powerTires:true});if(crossing===null&&p.speed>=100/3.6)crossing=(i+1)*dt;}return {p,crossing}};
test('candidate reaches sport-coupe acceleration band, repeatable at two timesteps',()=>{const a=run(),b=run(1/240);assert(a.crossing>=5.04&&a.crossing<=7.56);assert(Math.abs(a.crossing-b.crossing)<.03);assert.deepEqual(run(),a);});
test('loads conserve weight and stay nonnegative, including extreme transfers',()=>{const W=R.config.mass*R.powerConfig.gravity;for(const ax of [-100,-8,0,5,100])for(const ay of [-100,-10,0,10,100]){const z=R.axleLoads(ax,ay),flat=[...z.front,...z.rear];assert(flat.every(n=>n>=0&&Number.isFinite(n)));assert(Math.abs(flat.reduce((a,b)=>a+b,0)-W)<1e-9)}const staticZ=R.axleLoads(0,0),accel=R.axleLoads(5,0),brake=R.axleLoads(-5,0);assert(accel.rear[0]>staticZ.rear[0]);assert(brake.front[0]>staticZ.front[0]);});
test('lateral load transfer reduces summed tire capacity instead of adding free grip',()=>{const W=R.config.mass*R.powerConfig.gravity,L=R.config.frontAxle+R.config.rearAxle,z=R.axleLoads(0,0),turn=R.axleLoads(0,8);for(const [key,share]of [['front',R.config.rearAxle/L],['rear',R.config.frontAxle/L]])assert(R.axleCapacity(turn[key],W*share)<R.axleCapacity(z[key],W*share));});
test('accepted body force feeds next tick loads; brakes shift forward',()=>{const p=run().p;R.step(p,{brake:true},1/120,{powerTires:true});assert(p.roadAx<0);R.step(p,{brake:true},1/120,{powerTires:true});assert(p.roadLoads.front[0]>R.axleLoads(0,0).front[0]);});
test('mixed input remains finite; no power while coasting',()=>{const p=car();for(let i=0;i<6000;i++){R.step(p,{gas:i%700<450,brake:i%700>=600,steer:Math.sin(i*.006)},1/120,{powerTires:true});for(const k of ['speed','yaw','spin','roadAx','roadAy'])assert(Number.isFinite(p[k]),k);assert(p.speed<50)}const q=car();q.vS=20;let energy=20;for(let i=0;i<240;i++){R.step(q,{},1/120,{powerTires:true});assert(q.speed<=energy+1e-9);energy=q.speed;}});
test('omitted candidate switch retains exact old planar trajectory',()=>{const a=car(),b=car();for(let i=0;i<1000;i++){const c={gas:true,steer:Math.sin(i*.01)};R.step(a,c,1/120);R.step(b,c,1/120,{powerTires:false});assert.deepEqual(a,b)}assert.equal(a.roadLoads,undefined);});
test('post-peak curve is odd, continuous, dissipative and preserves small-angle stiffness',()=>{
 for(const cap of [0,250,1000,2000]){const k=R.config.mass*55,peak=cap/k*Math.PI/2;
  assert.equal(R.tireForce(0,k,cap),0);if(!cap){assert.equal(R.tireForce(.5,k,cap),0);continue;}
  assert(Math.abs(R.tireForce(1e-7,k,cap)/-1e-7-k)<.001);
  assert(Math.abs(R.tireForce(peak,k,cap)+cap)<1e-9);
  assert(Math.abs(R.tireForce(peak-1e-8,k,cap)-R.tireForce(peak+1e-8,k,cap))<1e-5);
  let last=cap;for(let i=1;i<=100;i++){const a=peak*(1+i/20),f=R.tireForce(a,k,cap);assert(f<0);assert.equal(R.tireForce(-a,k,cap),-f);assert(Math.abs(f)<=last+1e-9);assert(Math.abs(f)>=cap*R.powerConfig.slideGripRatio-1e-9);last=Math.abs(f);}
 }
});
test('real model one-step lateral force falls after peak and still conserves wheel weight',()=>{
 let peak=0,at=0,last=0;for(let degrees=0;degrees<=60;degrees+=.25){const p=car();p.vS=20;p.vL=20*Math.tan(degrees*Math.PI/180);R.step(p,{},1/120,{powerTires:true});const force=Math.abs(p.roadAy*R.config.mass);if(force>peak){peak=force;at=degrees;}last=force;const z=[...p.roadLoads.front,...p.roadLoads.rear];assert(z.every(x=>x>=0&&Number.isFinite(x)));assert(Math.abs(z.reduce((a,b)=>a+b)-R.config.mass*R.powerConfig.gravity)<1e-9);}
 assert(at>3&&at<15);assert(last/peak>.77&&last/peak<.82);
});
test('candidate normal corners recover and extreme input/collision-like states retain finite conserved loads',()=>{
 const step=(p,c,n)=>{for(let i=0;i<n;i++){R.step(p,c,1/120,{powerTires:true});for(const k of ['speed','yaw','spin','roadAx','roadAy'])assert(Number.isFinite(p[k]),k);const z=[...p.roadLoads.front,...p.roadLoads.rear];assert(z.every(x=>Number.isFinite(x)&&x>=0));assert(Math.abs(z.reduce((a,b)=>a+b)-R.config.mass*R.powerConfig.gravity)<1e-9);}};
 for(const kmh of [45,55,65]){const p={...car(),vS:kmh/3.6};step(p,{gas:true,steer:1},120);assert(p.yaw>.15);step(p,{gas:true},240);assert(Math.abs(p.spin)<.03);assert(Math.abs(R.wrap(p.yaw-p.velocityYaw))<.02);}
 for(const initial of [{vS:0,vL:5,spin:2},{vS:35,vL:18,spin:3},{vS:2,vL:-8,spin:-2}]){const p={...car(),...initial};step(p,{brake:true,steer:-1},120);step(p,{gas:true,steer:1},120);step(p,{},240);}
});
