// Original arcade handling model. Independent of rendering, DOM, road and jets.
// A speed-only propulsion stage cannot rotate the trajectory; steering, slide
// angle and collision impulses remain distinct stages and can be tested alone.
export const VehicleModel=(()=>{
 const clamp=(x,a,b)=>Math.min(b,Math.max(a,x)),lerp=(a,b,t)=>a+(b-a)*t,wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
 const config=Object.freeze({cruise:52,mini:63,nitro:76,combo:83,normalTurn:1.04,driftTurn:1.80,driveAcceleration:27,jetAcceleration:36});
 function step(p,c,dt,tune={}){
  const v=Math.hypot(p.vS,p.vL),heading=v>.05?Math.atan2(p.vL,p.vS):p.yaw;
  const steer=clamp(Number(c.steer)||0,-1,1),sensitivity=tune.sensitivity||1,reverse=(p.vS*Math.cos(p.yaw)+p.vL*Math.sin(p.yaw))<-.05;
  p.steering=lerp(p.steering||0,steer,1-Math.exp(-dt*26));
  const drifting=!!p.drifting,side=p.driftSide||Math.sign(steer)||1,counter=drifting&&steer*side<-.1,release=drifting&&p.driftReleasing;
  let desired=p.steering*config.normalTurn*sensitivity*clamp(v/8,0,1)*(reverse?-1:1);
  if(drifting){
   // Countersteer pulls the nose back before it reverses the path's curvature.
   const inner=Math.max(0,p.steering*side),arc=side*(counter?.40:.52+inner*(config.driftTurn-.52));
   const recovery=release?clamp((p.releaseAge||0)/.38,0,1):0;
   desired=lerp(arc,desired,recovery)*clamp(v/9,0,1);
  }
  if(p.jump>.2)desired*=.35;
  p.turnRate=lerp(p.turnRate||0,desired,1-Math.exp(-dt*(drifting?13:19)));
  const travel=wrap(heading+p.turnRate*dt);
  const bodyHeading=wrap(heading-(reverse?Math.PI:0));
  let slip=wrap(p.yaw-bodyHeading),target=drifting?side*(counter?.015:release?.12:.22+.38*Math.max(0,steer*side)):p.steering*.025;
  if(release)target*=1-clamp((p.releaseAge||0)/.45,0,1);
  const response=counter?13:drifting?9:8;
  slip=lerp(slip,target,1-Math.exp(-dt*response));
  p.yaw=wrap(travel-(reverse?Math.PI:0)+slip+(p.spin||0)*dt);p.spin=(p.spin||0)*Math.exp(-dt*6);
  let speed=v,drag=.70+v*.018+v*v*.00045;
  const boost=p.nitroTime>0||p.mini>0||p.pad>0,targetSpeed=p.nitroTime>0?(p.comboTimer>0?config.combo:config.nitro):p.pad>0?73:p.mini>0?config.mini:config.cruise;
  const drive=c.gas&&!c.brake?clamp((config.cruise-speed)*2.8,0,config.driveAcceleration):0;
  const thrust=boost&&!c.brake?clamp((targetSpeed-speed)*2.8,0,config.jetAcceleration):0;
  const driftLoss=drifting?(counter?1.3:3.3)*Math.abs(slip):0;
  speed=Math.max(0,speed+(drive+thrust-drag-driftLoss)*dt);
  if(!boost&&speed>config.cruise)speed=Math.max(config.cruise,speed-Math.min(8,(speed-config.cruise)*.7)*dt);
  if(c.brake)speed=Math.max(0,speed-36*dt);
  // Reverse uses the car's forward axis while preserving nose orientation.
  if(reverse&&c.gas)speed=Math.max(0,speed-32*dt);
  if(c.brake&&!c.gas&&(v<1.3||reverse)){p.vS=lerp(p.vS,-Math.cos(p.yaw)*5,1-Math.exp(-dt*5));p.vL=lerp(p.vL,-Math.sin(p.yaw)*5,1-Math.exp(-dt*5))}
  else{p.vS=Math.cos(travel)*speed;p.vL=Math.sin(travel)*speed}
  p.speed=Math.hypot(p.vS,p.vL);p.velocityYaw=travel;p.lateralSpeed=p.vL;
  return {slip,counter,thrust,boost,speed:p.speed};
 }
 return {step,config,wrap};
})();
