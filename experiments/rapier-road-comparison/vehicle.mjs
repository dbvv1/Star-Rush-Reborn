import RAPIER from '@dimforge/rapier3d-compat';
import {CONFIG as C,clamp,approach} from './config.mjs';
import {courseGeometry,project,spawn} from './course.mjs';
let initialized;
export const initializeRapier=()=>initialized??=(async()=>{await RAPIER.init();return RAPIER;})();
const copy=v=>({...v});
const ZERO=Object.freeze({x:0,y:0,z:0});
export function forward(q) {
  return {x:1-2*(q.y*q.y+q.z*q.z),y:2*(q.x*q.y+q.w*q.z),z:2*(q.x*q.z-q.w*q.y)};
}
export class RoadComparison {
  static async create(){await initializeRapier();return new RoadComparison();}
  constructor() {
    this.world=new RAPIER.World({x:0,y:-9.81,z:0});
    this.world.timestep=C.fixedStep;
    this.events=new RAPIER.EventQueue(true);
    this.geometry=courseGeometry();
    for(const geo of [this.geometry.surface,...this.geometry.rails])
      this.world.createCollider(RAPIER.ColliderDesc.trimesh(geo.vertices,geo.indices,RAPIER.TriMeshFlags.FIX_INTERNAL_EDGES).setFriction(.65).setRestitution(.02));
    this.reset();
  }
  reset(s=C.startS,l=0) {
    this.assertLive();
    if(!Number.isFinite(s)||s<C.roadStartS+5||s>C.roadEndS-5||!Number.isFinite(l)||Math.abs(l)>7)throw Error('Invalid reset pose');
    // Recreate controller AND chassis so cached suspension, wheel rotation, contact
    // impulses and forces cannot survive a reset. This is an explicit user reset.
    if(this.controller)this.world.removeVehicleController(this.controller);
    if(this.body)this.world.removeRigidBody(this.body);
    const pose=spawn(s,l);
    this.body=this.world.createRigidBody(RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(pose.position.x,pose.position.y,pose.position.z).setRotation(pose.rotation)
      .setCanSleep(false).setCcdEnabled(true).setLinearDamping(C.linearDamping));
    this.chassisCollider=this.world.createCollider(RAPIER.ColliderDesc.cuboid(C.halfLength,C.halfHeight,C.halfWidth)
      .setMass(C.mass).setFriction(.18).setRestitution(.02).setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS),this.body);
    this.controller=this.world.createVehicleController(this.body);
    this.controller.indexUpAxis=1;
    this.controller.setIndexForwardAxis=0; // This is the actual 0.21.0 setter name.
    this.wheels=[];
    for(const x of [C.rearX,C.frontX])for(const z of [-C.wheelZ,C.wheelZ]) {
      const i=this.wheels.length;
      this.wheels.push({x,z,front:x>0});
      // +Y cross +Z = +X rolling direction. Positive steering turns toward -Z.
      this.controller.addWheel({x,y:C.connectionY,z},{x:0,y:-1,z:0},{x:0,y:0,z:1},C.suspensionRest,C.wheelRadius);
      this.controller.setWheelMaxSuspensionTravel(i,C.suspensionTravel);
      this.controller.setWheelSuspensionStiffness(i,C.suspensionStiffness);
      this.controller.setWheelSuspensionCompression(i,C.suspensionCompression);
      this.controller.setWheelSuspensionRelaxation(i,C.suspensionRelaxation);
      this.controller.setWheelMaxSuspensionForce(i,C.suspensionMaxForce);
      this.controller.setWheelFrictionSlip(i,C.frictionSlip);
      this.controller.setWheelSideFrictionStiffness(i,C.sideFrictionStiffness);
    }
    this.accumulator=0;this.time=0;this.ticks=0;this.steering=0;this.throttle=0;
    this.paused=false;this.projection={s,l};this.checkpointIndex=C.checkpoints.findIndex(cp=>cp>s);
    if(this.checkpointIndex<0)this.checkpointIndex=C.checkpoints.length;
    this.contacts=0;this.collisionStarts=0;this.lostTime=0;this.control={steer:0,gas:0,brake:0,reverse:0};
    this.previous=this.snapshot();this.current=this.previous;
  }
  assertLive(){if(this.disposed)throw Error('Comparison disposed');}
  setPaused(value){this.assertLive();this.paused=Boolean(value);this.accumulator=0;this.control={steer:0,gas:0,brake:0,reverse:0};this.previous=this.current=this.snapshot();}
  advance(seconds,input={}) {
    this.assertLive();
    if(!Number.isFinite(seconds)||seconds<0)throw Error('Invalid frame duration');
    if(this.paused)return 0;
    this.control={steer:clamp(Number(input.steer)||0,-1,1),gas:clamp(Number(input.gas)||0,0,1),brake:clamp(Number(input.brake)||0,0,1),reverse:clamp(Number(input.reverse)||0,0,1)};
    this.lostTime+=Math.max(0,seconds-C.maxFrame);this.accumulator+=Math.min(seconds,C.maxFrame);
    let steps=0;
    while(this.accumulator+1e-10>=C.fixedStep){this.step();this.accumulator=Math.max(0,this.accumulator-C.fixedStep);steps++;}
    return steps;
  }
  step() {
    const dt=C.fixedStep,input=this.control,v=this.body.linvel(),q=this.body.rotation(),f=forward(q);
    this.previous=this.current;
    const speed=Math.hypot(v.x,v.y,v.z),signedSpeed=v.x*f.x+v.y*f.y+v.z*f.z;
    this.steering=approach(this.steering,input.steer,dt*(input.steer?C.steeringRise:C.steeringReturn));
    // S brakes; a separate reverse key deliberately avoids brake/reverse ambiguity.
    const brake=input.brake>0 || (input.reverse>0&&signedSpeed>1) || (input.gas>0&&signedSpeed< -1);
    const target=brake?0:input.reverse>0?-input.reverse:input.gas;
    this.throttle=approach(this.throttle,target,dt*(Math.abs(target)>Math.abs(this.throttle)?C.throttleRise:C.throttleFall));
    // Brake priority is not optional: Rapier skips wheelBrake whenever engineForce != 0.
    const engine=brake?0:this.throttle*(this.throttle<0?C.reverseForce:C.engineForce)/4;
    const angle=-this.steering*C.steeringLowSpeed/(1+(speed/C.steeringSpeedScale)**2);
    for(let i=0;i<4;i++) {
      this.controller.setWheelEngineForce(i,engine);
      this.controller.setWheelBrake(i,brake?C.mass*C.brakeDeceleration*dt/4:0);
      this.controller.setWheelSteering(i,this.wheels[i].front?angle:0);
    }
    this.body.resetForces(false);
    this.body.addForce({x:-v.x*speed*C.aerodynamicDrag,y:0,z:-v.z*speed*C.aerodynamicDrag},true);
    // The only physics timeline: controller velocity impulses, then world integration.
    this.controller.updateVehicle(dt,RAPIER.QueryFilterFlags.EXCLUDE_DYNAMIC);
    this.world.step(this.events);
    this.events.drainCollisionEvents((a,b,started)=>{if(a===this.chassisCollider.handle||b===this.chassisCollider.handle){this.contacts=Math.max(0,this.contacts+(started?1:-1));if(started)this.collisionStarts++;}});
    this.ticks++;this.time=this.ticks*dt;
    const before=this.projection;this.projection=project(this.body.translation(),before.s);
    const next=C.checkpoints[this.checkpointIndex];
    if(next!==undefined&&before.s<next&&this.projection.s>=next&&Math.abs(this.projection.l)<C.roadHalfWidth&&this.projection.s-before.s<5)this.checkpointIndex++;
    this.current=this.snapshot();
  }
  snapshot() {
    return {position:copy(this.body.translation()),rotation:copy(this.body.rotation()),velocity:copy(this.body.linvel()),angularVelocity:copy(this.body.angvel()),
      wheels:this.wheels.map((w,i)=>({...w,suspension:this.controller.wheelSuspensionLength(i)??C.suspensionRest,
        steering:this.controller.wheelSteering(i)??0,rotation:this.controller.wheelRotation(i)??0,contact:this.controller.wheelIsInContact(i)}))};
  }
  dispose(){if(this.disposed)return;this.events.free();this.world.free();this.disposed=true;this.controller=null;this.body=null;}
}
