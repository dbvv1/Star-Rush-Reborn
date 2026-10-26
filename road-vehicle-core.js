// Original lightweight planar single-track experiment. No imported vehicle code
// or licensed car parameters. Axle locations and mass/inertia match our own mesh
// and existing contact body. This is not a Forza physics implementation.
export const RoadVehicleModel=(()=>{
 const clamp=(x,a,b)=>Math.min(b,Math.max(a,x)),wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
 const config=Object.freeze({mass:220,inertia:245,frontAxle:1.06,rearAxle:1.02,cruise:32.5,gripAcceleration:10.5,brakeAcceleration:7.5,driveAcceleration:5.5});
 function steeringLimit(speed){return Math.min(.50,Math.atan(.85*config.gripAcceleration*(config.frontAxle+config.rearAxle)/Math.max(16,speed*speed)))}
 function step(p,c,dt,tune={}){
  const {mass,inertia,frontAxle:a,rearAxle:b}=config,L=a+b;
  const cy=Math.cos(p.yaw),sy=Math.sin(p.yaw);
  let u=p.vS*cy+p.vL*sy,v=-p.vS*sy+p.vL*cy,r=p.spin||0;
  const speed=Math.hypot(u,v),steer=clamp((Number(c.steer)||0)*(tune.sensitivity||1),-1,1);
  const reversing=!!c.brake&&!c.gas&&(u<0||speed<1),braking=!!c.brake&&!reversing,drive=c.gas&&!braking?Math.min(config.driveAcceleration,Math.max(0,(config.cruise-u)*1.5)):0;
  const resistance=.18*u+.0007*u*Math.abs(u);
  const brake=braking?Math.sign(u)*Math.min(config.brakeAcceleration,Math.abs(u)/dt):0;
  const fx=mass*((reversing?-Math.min(2,Math.max(0,(u+3)*2)):drive)-brake-resistance);
  const grip=mass*config.gripAcceleration,frontLimit=grip*b/L,rearLimit=grip*a/L;
  // Steering is a continuous driver request, not cancelled by braking.
  // The force solver below shares each axle's finite circle continuously.
  const steerLimit=steeringLimit(u),desired=steer*steerLimit;
  // Normalize slew to the speed-dependent range: a high-speed key press must
  // not reach full lock in 60 ms just because its wheel angle is small.
  const reversingSteer=desired*(p.roadSteer||0)<0;
  const rate=(steer===0||reversingSteer?5:3)*steeringLimit(u);
  p.roadSteer=(p.roadSteer||0)+clamp(desired-(p.roadSteer||0),-rate*dt,rate*dt);
  const delta=p.roadSteer;
  // Resolve each axle's actual contact velocity in its tire frame. The finite
  // denominator regularizes low-speed stiffness; it adds no force or damping.
  // In particular, zero longitudinal speed is NOT evidence of a stationary car.
  const frontSide=-u*Math.sin(delta)+(v+a*r)*Math.cos(delta);
  const frontForward=u*Math.cos(delta)+(v+a*r)*Math.sin(delta);
  const frontSlip=Math.atan2(frontSide,Math.max(3,Math.abs(frontForward)));
  const rearSlip=Math.atan2(v-b*r,Math.max(3,Math.abs(u)));
  const frontDemand=[braking?fx*.55:0,-mass*55*frontSlip];
  const rearDemand=[braking?fx*.45:fx,-mass*60*rearSlip];
  const frontScale=Math.min(1,frontLimit/Math.max(1e-9,Math.hypot(...frontDemand)));
  const rearScale=Math.min(1,rearLimit/Math.max(1e-9,Math.hypot(...rearDemand)));
  const [fxf,fyf]=frontDemand.map(f=>f*frontScale),[fxr,fyr]=rearDemand.map(f=>f*rearScale);
  const frontLateral=fxf*Math.sin(delta)+fyf*Math.cos(delta);
  const nextR=r+(a*frontLateral-b*fyr)/inertia*dt;
  const du=(fxf*Math.cos(delta)+fxr-fyf*Math.sin(delta))/mass+r*v;
  const dv=(frontLateral+fyr)/mass-r*u;
  u+=du*dt;v+=dv*dt;r=nextR;
  p.yaw=wrap(p.yaw+r*dt);p.spin=r;p.turnRate=r;
  const nc=Math.cos(p.yaw),ns=Math.sin(p.yaw);
  p.vS=u*nc-v*ns;p.vL=u*ns+v*nc;
  p.speed=Math.hypot(p.vS,p.vL);p.velocityYaw=p.speed>.01?Math.atan2(p.vL,p.vS):p.yaw;
  p.lateralSpeed=p.vL;p.steering=steerLimit?delta/steerLimit:0;
  const slip=wrap(p.yaw-p.velocityYaw);
  p.drifting=u>5&&Math.abs(slip)>.08;p.driftSide=Math.sign(slip);p.driftPhase=p.drifting?(slip*steer<0?'counter':'hold'):'grip';
  return {slip,counter:slip*steer<0,thrust:0,boost:false,speed:p.speed};
 }
 return {step,config,wrap,steeringLimit};
})();
