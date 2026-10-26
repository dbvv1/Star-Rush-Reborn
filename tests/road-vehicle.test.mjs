import test from 'node:test';
import assert from 'node:assert/strict';
import {RoadVehicleModel as Road} from '../road-vehicle-core.js';
import {VehicleModel} from '../vehicle-core.js';
const dt=1/120,car=(extra={})=>({vS:0,vL:0,yaw:0,spin:0,...extra});
function drive(p,seconds,c){for(let i=0;i<Math.round(seconds/dt);i++){VehicleModel.step(p,c,dt,{road:true});for(const [k,v]of Object.entries(p))if(typeof v==='number')assert.ok(Number.isFinite(v),k)}return p}
test('ordinary road drive accelerates, brakes and reverses without consuming boost flags',()=>{
 const p=drive(car({nitroTime:8,mini:8,pad:8}),12,{gas:true});assert.ok(p.speed>20&&p.speed<Road.config.cruise);assert.equal(p.yaw,0);
 const before=p.speed;drive(p,1,{brake:true});assert.ok(p.speed<before-6&&p.speed>0);
 drive(p,8,{brake:true});assert.ok(p.vS<0&&Math.abs(p.vS)<3.1);
 drive(p,4,{gas:true});assert.ok(p.vS>0);assert.ok(Math.abs(p.vL)<1e-8);
});
test('tire force creates a recoverable turn, rather than locking trajectory to prior drift side',()=>{
 const p=car({vS:20});drive(p,1,{gas:true,steer:.8});assert.ok(p.spin>.2);assert.ok(p.yaw>0);
 const slip=Math.abs(Road.wrap(p.yaw-p.velocityYaw));drive(p,1,{gas:true,steer:0});assert.ok(Math.abs(p.spin)<.03);assert.ok(Math.abs(Road.wrap(p.yaw-p.velocityYaw))<slip/3);
 drive(p,1,{gas:true,steer:-.8});assert.ok(p.spin<-.2);assert.ok(p.roadSteer<0);
});
test('contact velocity and sole angular state survive one step then settle through grip',()=>{
 const p=car({vS:20,vL:5,spin:1}),start=Math.hypot(p.vS,p.vL);drive(p,dt,{});
 assert.ok(p.vL>4,'impact is not replaced by a desired trajectory');assert.ok(p.spin>.5,'impact yaw rate is not discarded');assert.equal(p.spin,p.turnRate);
 drive(p,2,{});assert.ok(p.speed<start);assert.ok(Math.abs(p.spin)<.01);assert.ok(Math.abs(Road.wrap(p.yaw-p.velocityYaw))<.01);
});
test('equal total simulated time remains close at 120 and 240 Hz',()=>{
 const run=step=>{const p=car({vS:18});for(let i=0;i<2/step;i++)Road.step(p,{gas:true,steer:.5},step);return p};
 const a=run(1/120),b=run(1/240);assert.ok(Math.abs(a.speed-b.speed)<.1);assert.ok(Math.abs(Road.wrap(a.yaw-b.yaw))<.02);
});

test('side impact and stationary yaw recover only within tire force/torque limits',()=>{
 for(const u of [0,2,4]){const p=car({vS:u,vL:5});Road.step(p,{},dt);assert.ok(Math.abs((p.vL-5)/dt)<=Road.config.gripAcceleration+.05,`u=${u} lateral acceleration`);}
 const p=car({spin:2}),{mass,inertia,frontAxle:a,rearAxle:b,gripAcceleration:g}=Road.config;
 Road.step(p,{},dt);const torqueLimit=mass*g*2*a*b/(a+b)/inertia;
 assert.ok(Math.abs((p.spin-2)/dt)<=torqueLimit+.01,'no extra low-speed angular damping');
 const parked=car();drive(parked,2,{steer:1});assert.equal(parked.speed,0);assert.equal(parked.yaw,0,'turning stationary wheels must not rotate or push the car');
});

test('ordinary full-key turn releases without the prior saturated spin across corner entry speeds',()=>{
 for(const kmh of [45,55,65])for(const gas of [false,true]){
  const p=car({vS:kmh/3.6});drive(p,1,{steer:1,gas});
  assert.ok(p.yaw>.15,'ordinary input must still turn, not be disabled');
  drive(p,1,{steer:0,gas});
  assert.ok(Math.abs(p.spin)<.03,`released yaw rate at ${kmh}`);
  assert.ok(Math.abs(Road.wrap(p.yaw-p.velocityYaw))<.01,`released slip at ${kmh}`);
 }
 const p=car({vS:27});drive(p,.4,{gas:true,steer:1});drive(p,.4,{brake:true});
 assert.ok(Math.abs(p.roadSteer)<.001,'braking away all side-force budget must not freeze the old wheel angle');
});

test('brake-turn-release-exit shares grip without cancelling steering or weakening straight braking',()=>{
 for(const kmh of [45,55,65]){
  const straight=car({vS:kmh/3.6}),turn=car({vS:kmh/3.6});
  drive(straight,.5,{brake:true});drive(turn,.5,{brake:true,steer:1});
  assert.ok(straight.speed<kmh/3.6-3.7,'straight brake remains effective');
  assert.ok(turn.speed<kmh/3.6-3,'braking still slows while turning');
  assert.ok(turn.yaw>.05&&turn.roadSteer>.02,'holding direction while braking must turn from entry speed');
  assert.ok(turn.speed>=straight.speed-.02,'turning shares the budget rather than gaining free braking');
  const before=turn.yaw;drive(turn,.25,{steer:1});assert.ok(turn.yaw>before,'releasing brake preserves the held direction');
  drive(turn,1,{gas:true});assert.ok(Math.abs(turn.spin)<.04&&Math.abs(Road.wrap(turn.yaw-turn.velocityYaw))<.02,'exit release recovers');
 }
 const hit=car({vS:15,vL:4,spin:1});drive(hit,.5,{brake:true,steer:-1});assert.ok(hit.roadSteer<-.02,'braking countersteer remains available after impact');
 drive(hit,1,{gas:true});assert.ok(Math.abs(hit.spin)<.04);
});
