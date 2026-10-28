import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import * as THREE from 'three';
import {wheelQuaternion} from './render.mjs';
import {createSkyPanorama} from '../../sky-panorama.js';
import {loadSkyAssets} from '../../sky-assets.mjs';
import {fileURLToPath} from 'node:url';
import {RoadComparison,forward} from './vehicle.mjs';
import {CONFIG as C} from './config.mjs';
import {courseGeometry,roadPoint,project,circuitRoad} from './course.mjs';
const speed=s=>Math.hypot(...Object.values(s.body.linvel()));
const run=(s,seconds,input={},frame=1/120)=>{for(let i=0;i<Math.round(seconds/frame);i++)s.advance(frame,input);};
const settle=s=>run(s,1.5);
async function withSim(fn){const sim=await RoadComparison.create();try{await fn(sim);}finally{sim.dispose();}}
const close=(a,b,eps=1e-5)=>assert.ok(Math.abs(a-b)<eps,`${a} != ${b}`);

test('official Rapier 0.21.0 four-wheel consumer and explicit physical starting point',async()=>withSim(s=>{
  assert.equal(JSON.parse(readFileSync(new URL('node_modules/@dimforge/rapier3d-compat/package.json',import.meta.url))).version,'0.21.0');
  assert.equal(s.controller.numWheels(),4);assert.equal(s.controller.indexUpAxis,1);assert.equal(s.controller.indexForwardAxis,0);
  close(s.body.mass(),C.mass,.01);assert.equal(s.world.timestep,Math.fround(1/120));
  settle(s);assert.ok(s.current.wheels.every(w=>w.contact));assert.ok(speed(s)<.1);
  for(let i=0;i<4;i++){assert.ok(s.controller.wheelSuspensionForce(i)>1000);assert.ok(s.current.wheels[i].suspension>.1);assert.ok(s.current.wheels[i].suspension<.3);}
  const ground=roadPoint(C.startS)[1];assert.ok(s.current.position.y>ground+.35&&s.current.position.y<ground+.7);
}));

test('start, release, brake priority and explicit reverse act through the solver',async()=>withSim(s=>{
  settle(s);const p={...s.current.position};run(s,3,{gas:1});const fast=speed(s);assert.ok(fast>12&&fast<17);assert.ok(s.current.position.x>p.x+15);
  assert.ok(s.current.wheels.every(w=>Math.abs(w.rotation)>5));
  run(s,.3,{});for(let i=0;i<4;i++)assert.equal(s.controller.wheelEngineForce(i),0);
  assert.ok(speed(s)>fast*.90,'release must not zero velocity');
  s.advance(C.fixedStep,{gas:1,brake:1});for(let i=0;i<4;i++){assert.equal(s.controller.wheelEngineForce(i),0);assert.ok(s.controller.wheelBrake(i)>0);}
  run(s,2.5,{gas:1,brake:1});assert.ok(speed(s)<.2,'brake overrides held gas');
  run(s,1.5,{reverse:1});const f=forward(s.body.rotation()),v=s.body.linvel();assert.ok(v.x*f.x+v.y*f.y+v.z*f.z< -2);
  s.advance(C.fixedStep,{gas:1});for(let i=0;i<4;i++)assert.equal(s.controller.wheelEngineForce(i),0,'forward while reversing first brakes');
}));

test('progressive steering, release and countersteer are physical, not yaw teleports',async()=>withSim(s=>{
  settle(s);run(s,1,{gas:1});const initial=s.body.rotation().y;
  s.advance(C.fixedStep,{gas:1,steer:1});assert.ok(s.steering>0&&s.steering<.03);assert.ok(Math.abs(s.body.rotation().y-initial)<.01);
  run(s,.5,{gas:1,steer:1});assert.ok(s.projection.l>.5);assert.ok(s.body.rotation().y<initial-.1);
  const q=s.body.rotation().y;s.advance(C.fixedStep,{steer:-1});assert.ok(s.steering>0,'countersteer transitions through zero');assert.ok(Math.abs(s.body.rotation().y-q)<.03);
  run(s,.8,{steer:-1});assert.equal(s.steering,-1);assert.ok(s.controller.wheelSteering(2)>0);
  run(s,.3,{});assert.equal(s.steering,0);assert.ok(speed(s)>1,'steering release must not zero motion');
}));

test('actual rail contacts and tangential motion, no lane clamp',async()=>withSim(s=>{
  s.reset(170,7.0);settle(s);
  const r=circuitRoad(170);s.body.setLinvel({x:r.T[0]*8+r.R[0]*6,y:0,z:r.T[2]*8+r.R[2]*6},true);
  const start=s.current.position.x;let maxL=0;
  for(let i=0;i<360;i++){s.advance(C.fixedStep);maxL=Math.max(maxL,s.projection.l);}
  assert.ok(s.collisionStarts>0,'chassis must contact Rapier rail collider');assert.ok(maxL<8.1,`rail crossed: ${maxL}`);
  assert.ok(s.current.position.x>start+8,'scrape keeps tangential movement');assert.ok(Number.isFinite(speed(s)));
}));

test('continuous track mesh has shared vertices and matches original slopes / curbs',async()=>withSim(s=>{
  const g=courseGeometry();assert.equal(g.surface.vertices.length,(721)*8*3);assert.equal(g.surface.indices.length,720*7*6);
  const index=320-C.roadStartS,vertex=Array.from(g.surface.vertices.slice((index*8+3)*3,(index*8+3)*3+3)),expected=roadPoint(320,-7,.04);
  vertex.forEach((v,i)=>close(v,expected[i],1e-5));
  for(const [at,l] of [[320,7],[500,0],[600,-7]]){s.reset(at,l);settle(s);assert.ok(s.current.wheels.filter(w=>w.contact).length>=3);assert.ok(s.current.position.y>roadPoint(at)[1]+.3);assert.ok(Math.abs(s.current.rotation.z)>1e-4||Math.abs(s.current.rotation.x)>1e-4);}
}));

test('reset destroys stale velocity, contact and suspension caches and is repeatable',async()=>withSim(s=>{
  settle(s);run(s,2,{gas:1,steer:.2});s.body.addForce({x:1000,y:500,z:1000},true);s.reset();
  assert.deepEqual(s.current.velocity,{x:0,y:0,z:0});assert.deepEqual(s.current.angularVelocity,{x:0,y:0,z:0});assert.equal(s.throttle,0);assert.equal(s.steering,0);
  assert.equal(s.contacts,0);assert.equal(s.collisionStarts,0);assert.equal(s.checkpointIndex,0);assert.equal(s.time,0);
  assert.ok(s.current.wheels.every(w=>w.rotation===0));settle(s);const first=s.snapshot();
  s.reset();settle(s);assert.deepEqual(s.snapshot(),first);
}));

test('single fixed clock gives identical 30 / 60 / 120 Hz frame splits',async()=>{
  const results=[];for(const dt of [1/30,1/60,1/120])await withSim(s=>{run(s,1.5,{},dt);run(s,3,{gas:1},dt);run(s,.5,{gas:1,steer:.3},dt);run(s,1,{brake:1},dt);results.push({state:s.snapshot(),ticks:s.ticks,projection:s.projection});});
  assert.deepEqual(results[0],results[1]);assert.deepEqual(results[1],results[2]);
});

test('pause, invalid frame, overrun and disposal are explicit and bounded',async()=>{
  const s=await RoadComparison.create();settle(s);run(s,1,{gas:1});const before=s.snapshot(),ticks=s.ticks;
  s.setPaused(true);assert.equal(s.advance(10,{gas:1}),0);assert.deepEqual(s.snapshot(),before);assert.equal(s.ticks,ticks);
  s.setPaused(false);assert.deepEqual(s.previous,s.current,'resume cannot interpolate back to a stale tick');assert.equal(s.advance(C.fixedStep),1);assert.equal(s.advance(10),30);assert.ok(s.lostTime>9);
  assert.throws(()=>s.advance(-1));assert.throws(()=>s.advance(NaN));assert.throws(()=>s.reset(-5));
  s.dispose();s.dispose();assert.throws(()=>s.advance(.1),/disposed/);
});

test('projection is local/read-only and checkpoints cannot be skipped or counted backwards',async()=>withSim(s=>{
  settle(s);const before=s.snapshot();const point=roadPoint(650);const result=project({x:point[0],y:point[1],z:point[2]},170);
  assert.ok(result.s>=140&&result.s<=200);assert.deepEqual(s.snapshot(),before);
  s.reset(238);settle(s);run(s,1.5,{gas:1});assert.equal(s.checkpointIndex,1);
  s.reset(238,7);settle(s);const position=s.body.translation(),r=circuitRoad(238);
  s.body.setTranslation({x:position.x+r.R[0]*.22,y:position.y,z:position.z+r.R[2]*.22},true);
  s.body.setLinvel({x:8,y:0,z:0},true);run(s,1);assert.ok(s.projection.s>240);assert.equal(s.checkpointIndex,0,'outside main-road width cannot count');
  s.reset(238);settle(s);const jumped=s.body.translation();s.body.setTranslation({x:jumped.x+20,y:jumped.y,z:jumped.z},true);s.advance(C.fixedStep);assert.ok(s.projection.s>250);assert.equal(s.checkpointIndex,0,'nonlocal jump cannot count');
}));

test('experiment import closure excludes product driving, collision, persistence and network',()=>{
  const files=['app.mjs','render.mjs','vehicle.mjs','course.mjs','generate.mjs'];
  const joined=files.map(f=>readFileSync(new URL(f,import.meta.url),'utf8')).join('\n');
  assert.doesNotMatch(joined,/localStorage|sessionStorage|indexedDB|fetch\(|WebSocket|advanceRoadPose|resolveContacts|race-features\.js|road-vehicle-core\.js|handling\.js|network\.js|ranking\.js/);
  const vehicle=readFileSync(new URL('vehicle.mjs',import.meta.url),'utf8');
  assert.equal((vehicle.match(/\.world\.step\(/g)||[]).length,1);assert.equal((vehicle.match(/\.updateVehicle\(/g)||[]).length,1);
  assert.doesNotMatch(vehicle,/setLinvel|setAngvel|setNextKinematic/);
  assert.ok(vehicle.indexOf('this.controller.updateVehicle(dt')<vehicle.indexOf('this.world.step(this.events)'));
});


test('road, shoulder and rail top winding is upward; inner rail faces point into lane',()=>{
  const normal=(g,offset)=>{const [a,b,c]=Array.from(g.indices.slice(offset,offset+3)).map(i=>new THREE.Vector3(...g.vertices.slice(i*3,i*3+3)));return b.sub(a).cross(c.sub(a));};
  const g=courseGeometry();for(let i=0;i<7;i++)assert.ok(normal(g.surface,i*6).y>0,'every road-profile face must be visible from above');
  for(let i=0;i<2;i++){const rail=g.rails[i],side=i===0?-1:1;assert.ok(normal(rail,6).y>0,'rail top');const n=normal(rail,0),r=circuitRoad(C.roadStartS).R;assert.ok((n.x*r[0]+n.z*r[2])*side<0,'inner face points into road');}
});

test('forward wheel spin rolls bottom rim backwards in authored +X / +Z basis',()=>{
  const initial=new THREE.Vector3(0,-C.wheelRadius,0),turned=initial.clone().applyQuaternion(wheelQuaternion(0,.001));
  assert.ok(turned.x<initial.x,'bottom rim displacement opposes forward vehicle travel');
});

test('local isolated server returns actual HTML/JS and rejects product/API paths',{timeout:15000},async()=>{
  // Build in-process first; no browser, remote connection or service account.
  await import('./build.mjs');
  const child=spawn(process.execPath,['server.mjs'],{cwd:new URL('.',import.meta.url),env:{...process.env,PORT:'0'},stdio:['ignore','pipe','pipe']});
  let error='';child.stderr.on('data',b=>error+=b);
  try {
    const url=await new Promise((resolve,reject)=>{let text='';child.stdout.on('data',b=>{text+=b;const m=text.match(/http:\/\/127\.0\.0\.1:\d+\//);if(m)resolve(m[0]);});child.on('error',reject);child.on('exit',code=>reject(Error('Server exited '+code+' '+error)));});
    const html=await fetch(url);assert.equal(html.status,200);assert.match(await html.text(),/未采用对比/);
    const script=await fetch(url+'comparison.js');assert.equal(script.status,200);assert.match(script.headers.get('content-type'),/javascript/);
    const sky=JSON.parse(readFileSync(new URL('.generated/sky.json',import.meta.url)));
    const image=await fetch(new URL(sky.url,url));assert.equal(image.status,200);assert.equal(image.headers.get('content-type'),'image/webp');
    assert.deepEqual(Buffer.from(await image.arrayBuffer()),readFileSync(new URL('../../assets/sky/day.webp',import.meta.url)));
    for(const path of ['road','legacy','api/runs','missing','day.webp'])assert.equal((await fetch(url+path)).status,404);
    assert.equal((await fetch(url,{method:'POST'})).status,405);
  } finally {const done=once(child,'exit');child.kill('SIGTERM');await done;}
});

test('whole existing 170–740 m slice is traversable by a CPU test driver without resets',async()=>withSim(s=>{
  // Test-only pure-pursuit fixture, NOT formal AI and not shipped in the app.
  // It proves continuity / contact on the same bend, never subjective handling.
  settle(s);let maxL=0,minGround=4;
  for(let tick=0;tick<120*70&&s.projection.s<C.endS;tick++) {
    const p=s.current.position,f=forward(s.current.rotation),v=Math.hypot(s.current.velocity.x,s.current.velocity.z),look=roadPoint(s.projection.s+12);
    const angle=Math.atan2(look[2]-p.z,look[0]-p.x)-Math.atan2(f.z,f.x),error=Math.atan2(Math.sin(angle),Math.cos(angle));
    const limit=C.steeringLowSpeed/(1+(v/C.steeringSpeedScale)**2),steer=Math.max(-1,Math.min(1,Math.atan(2*(C.frontX-C.rearX)*Math.sin(error)/12)/limit));
    s.advance(C.fixedStep,{gas:v<13?1:0,brake:v>14?1:0,steer});
    maxL=Math.max(maxL,Math.abs(s.projection.l));minGround=Math.min(minGround,s.current.wheels.filter(w=>w.contact).length);
  }
  assert.ok(s.projection.s>=C.endS);assert.ok(maxL<2);assert.equal(minGround,4);assert.equal(s.collisionStarts,0);assert.equal(s.checkpointIndex,C.checkpoints.length);
}));


test('built sky config initializes the actual frozen sky consumer, not a view stub',()=>{
  const config=JSON.parse(readFileSync(new URL('.generated/sky.json',import.meta.url)));
  assert.deepEqual(config,loadSkyAssets(fileURLToPath(new URL('../../assets/sky/',import.meta.url))).client);
  const scene=new THREE.Scene(),texture=new THREE.Texture();let complete,disposed=0;
  texture.addEventListener('dispose',()=>disposed++);
  const loader={load(url,onLoad){assert.equal(url,config.url);complete=onLoad;return texture;}};
  const sky=createSkyPanorama(scene,config,loader);assert.equal(sky.active,false);
  texture.image={width:config.width,height:config.height};complete(texture);
  assert.equal(sky.active,true);assert.equal(sky.mesh.visible,true);assert.equal(sky.mesh.rotation.y,config.yaw);
  assert.equal(texture.colorSpace,THREE.SRGBColorSpace);assert.equal(scene.environment,null);
  sky.dispose();assert.equal(disposed,1);assert.equal(scene.children.length,0);
  assert.throws(()=>createSkyPanorama(scene,{...config,url:'./day.webp'},loader),/Invalid sky configuration/,'the prior relative URL must remain rejected');
});
