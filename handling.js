// Arcade trajectory curvature and visual body slip are separate.
// Road coordinates provide a frame and contacts, never automatic steering.
const wrapAngle=a=>Math.atan2(Math.sin(a),Math.cos(a));
function chargeNitro(amount){
 if(player.nitro>=2){player.energy=Math.min(99,player.energy+amount);return}player.energy+=amount;
 while(player.energy>=100&&player.nitro<2){player.energy-=100;player.nitro++;announce('NITRO READY','氮气已装瓶 · E 释放 3.2 秒',1.2);tone(1050,.09)}
}
function registerJet(kind){
 player.jetHistory.push({kind,t:elapsed});player.jetHistory=player.jetHistory.filter(x=>elapsed-x.t<2.5).slice(-3);
 const combo=player.jetHistory.map(x=>x.kind).join('');
 if(combo==='CWW'||combo==='WCW'){player.combo=combo;player.comboTimer=1.3;player.mini=Math.max(player.mini,.88);if(combo==='WCW')player.nitroTime+=.35;announce(combo+' 喷',combo==='CWW'?'氮气 → 小喷 → 小喷 · 高速出弯':'小喷 → 氮气 → 小喷 · 延长喷射',1.35);jetSound('combo')}
}
function useNitro(){if(state!=='running'||player.nitro<1||player.nitroTime>0)return;player.nitro--;player.nitroTime=3.2;announce('NITRO','氮气喷射 · 3.2 秒',.8);registerJet('C');jetSound('nitro')}
function useSmallJet(){
 if(state!=='running'||player.smallJets<1||player.smallWindow<=0||player.jetCooldown>0)return;
 player.smallJets--;player.jetCooldown=.18;player.mini=.72;player.smallWindow=player.smallJets?1.15:0;player.smallCount++;registerJet('W');jetSound('small');
 if(player.comboTimer<=0)announce(player.smallCount>1?'DOUBLE BOOST':'MINI BOOST',player.smallCount>1?'双喷 · 连续出弯加速':'小喷 · 及时接下一喷',.75)
}
function awardSmallJets(count=2,label='小喷已就绪'){player.smallJets=Math.max(player.smallJets,count);player.smallWindow=1.5;player.smallCount=0;announce(label,handlingCandidate?'点 空格 / Q 主动小喷 · 连点两次双喷':'点 空格 / Q，或重新按 W · 连点两次双喷',1.1);tone(760,.06)}
function rewardDrift(){
 if(player.driftRewarded||player.driftCharge<.10||player.driftDuration<.11)return;
 player.driftRewarded=true;awardSmallJets(player.driftCharge>.35?2:1,player.driftCharge>.35?'双喷已就绪':'小喷已就绪');
}
function endDrift(reward=true){
 if(!player.drifting)return;
 if(reward)rewardDrift();player.drifting=false;player.driftPhase='exit';player.exitTime=.45;player.exitFromGrip=player.tireGrip||3.6;player.exitFromLimit=player.tireLimit||38;
 player.driftCharge=0;player.driftDuration=0;player.driftSide=0;player.driftReleasing=false;
 // Ending a slide does not rotate the velocity or cancel the steering rate.
}
function beginDrift(side){
 player.drifting=true;player.driftSide=side;player.driftCharge=0;player.driftDuration=0;player.driftPhase='entry';player.driftRewarded=false;player.driftReleasing=false;player.releaseAge=0;
 player.driftLatch=true;player.driftCooldown=.16;player.exitTime=0;player.turnRate+=side*.38;player.gripRecovery=0;jetSound('drift');
}
function physics(dt){
 player.prevPose={s:player.s,l:player.l,yaw:player.yaw,jump:player.jump};
 const r=road(player.s),oldS=player.s,rawSteer=typeof assistedSteer==='number'?assistedSteer:(input.right?1:0)-(input.left?1:0);
 player.speed=Math.hypot(player.vS,player.vL);
 for(const k of ['pad','mini','nitroTime','smallWindow','jetCooldown','comboTimer','exitTime','driftCooldown','driftBuffer','lastSteerTime','jetInputBuffer','boostInputBuffer'])player[k]=Math.max(0,player[k]-dt);
 if(player.smallWindow===0)player.smallJets=0;
 steering=mix(steering,rawSteer,1-Math.exp(-dt*(rawSteer?26:20)));
 const driftPressed=controlEdges.drift>0||input.drift&&!player.prevDrift,steerPressed=rawSteer&&rawSteer!==player.prevSteer;
 controlEdges.drift=0;if(!input.drift)player.driftLatch=false;if(driftPressed)player.driftBuffer=.26;
 if(rawSteer){player.lastSteer=Math.sign(rawSteer);player.lastSteerTime=.20}
 const grounded=player.jump<.12,velocityAngle=player.speed>.4?Math.atan2(player.vL,player.vS):player.yaw,slipBefore=wrapAngle(player.yaw-velocityAngle);
 const intent=(Math.abs(rawSteer)>.12?Math.sign(rawSteer):0)||(player.lastSteerTime>0?player.lastSteer:Math.abs(slipBefore)>.07?Math.sign(slipBefore):0);
 // Either input may come first; a short tap survives one physics boundary.
 if(!player.drifting&&player.driftCooldown===0&&grounded&&player.speed>5&&intent&&((input.drift&&(!player.driftLatch||steerPressed&&intent!==player.lastDriftSide))||player.driftBuffer>0)){
  beginDrift(intent);player.lastDriftSide=intent;player.driftBuffer=0;
 }else if(player.drifting&&driftPressed&&player.driftDuration>.18&&(rawSteer*player.driftSide<0||player.driftReleasing)){
  rewardDrift();player.driftReleasing=true;player.releaseAge=Math.max(.18,player.releaseAge);player.driftBuffer=0;
 }
 if(player.drifting){
  player.driftDuration+=dt;
  const counter=rawSteer*player.driftSide<0;
  if(player.speed<3.5||!grounded)endDrift(false);
  else{
   if(!input.drift&&player.driftDuration>.14)player.driftReleasing=true;
   if(player.driftReleasing)player.releaseAge+=dt;
   player.driftPhase=player.driftReleasing?'release':counter?'counter':player.driftDuration<.18?'entry':'hold';
   if((counter||player.driftReleasing)&&Math.abs(slipBefore)<.75)rewardDrift();
   if(player.driftReleasing&&(player.releaseAge>.55||Math.abs(slipBefore)<.065&&player.releaseAge>.16))endDrift(true);
   else if(counter&&Math.abs(slipBefore)<.075&&player.driftDuration>.22)endDrift(true);
  }
 }
 if(controlEdges.boost>0||input.boost&&!player.prevBoost)player.boostInputBuffer=.15;
 if(controlEdges.small>0||input.small&&!player.prevSmall||!handlingCandidate&&input.gas&&!player.prevGas)player.jetInputBuffer=.15;controlEdges.boost=0;controlEdges.small=0;
 if(player.boostInputBuffer>0&&player.nitro>0&&player.nitroTime<=0){useNitro();player.boostInputBuffer=0}
 if(player.jetInputBuffer>0&&player.smallJets>0&&player.jetCooldown<=0){useSmallJet();player.jetInputBuffer=0}
 const movement=VehicleModel.step(player,{steer:typeof assistedSteer==='number'?assistedSteer:rawSteer,gas:input.gas||settings.autoGas&&!input.brake||demoDriving&&!input.brake,brake:input.brake},dt,{sensitivity:settings.sensitivity,arcadeCandidate:handlingCandidate});
 steering=player.steering;player.boostActive=player.nitroTime>0;player.boostBlend=mix(player.boostBlend,movement.boost?1:0,1-Math.exp(-dt*7));
 const metric=clamp(1-r.curv*player.l,.45,1.55),ds=player.vS/metric*dt;player.s=Math.max(-8,player.s+ds);player.l+=player.vL*dt;
 const next=road(player.s),turn=wrapAngle(next.h-r.h),vs=player.vS,vl=player.vL;
 player.vS=vs*Math.cos(turn)+vl*Math.sin(turn);player.vL=-vs*Math.sin(turn)+vl*Math.cos(turn);player.yaw=wrapAngle(player.yaw-turn);
 const wasAir=player.jump>0;if(wasAir||player.vy>0){player.vy-=17*dt;player.jump=Math.max(0,player.jump+player.vy*dt);if(player.jump<=0){player.vy=0;if(wasAir){awardSmallJets(1,'落地喷已就绪');jetSound('land')}}}
 resolveContacts(dt);wheelSpin-=player.vS*dt/.4;elapsed+=dt;gameTime+=dt;player.score+=Math.max(0,ds)*.85;
 const slip=Math.abs(wrapAngle(player.yaw-player.velocityYaw));if(player.drifting&&slip>.035&&player.speed>5&&Math.abs(player.l)<7){const amount=dt*clamp((slip+.025)*player.speed*.11,0,3);player.driftCharge+=amount;chargeNitro(amount*42);player.score+=dt*35}
 wasDrift=player.drifting;
 if((input.gas||settings.autoGas)&&!input.brake&&player.speed<.7&&Math.abs(player.l)>5.8)player.stuckTime+=dt;else player.stuckTime=0;if(player.stuckTime>1.6)recoverCar(true);
 for(const ch of chunks.values())for(const e of ch.entities){
  if(e.kind==='cone'||e.kind==='barrier')continue;let es=e.s;if(raceMode==='circuit')es+=Math.round((player.s-es)/CIRCUIT_LENGTH)*CIRCUIT_LENGTH;
  const lap=raceMode==='circuit'?Math.max(0,Math.floor(es/CIRCUIT_LENGTH)):0;
  if(e.hitLap===lap||es<Math.min(oldS,player.s)-1.4||es>Math.max(oldS,player.s)+1.4||Math.abs(player.l-e.l)>e.width)continue;
  if(e.kind==='coin'){e.hitLap=lap;e.hit=true;player.coins++;chargeNitro(3);player.score+=50;tone(700+player.coins%5*80,.04)}
  else if(e.kind==='pad'){e.hitLap=lap;player.pad=1.55;announce('BOOST STRIP','加速带 · 保持路线',1);jetSound('nitro')}
  else if(e.kind==='ramp'&&player.vS>7){e.hitLap=lap;player.vy=8;player.jump=.1;player.score+=120;awardSmallJets(1,'空喷已就绪')}
 }
 if(player.s>=player.checkpoint){player.checkpoint+=500;player.score+=500;announce('CHECKPOINT',Math.floor(player.s/500)*500+' m',1)}
 player.prevSteer=rawSteer;player.prevDrift=input.drift;player.prevBoost=input.boost;player.prevSmall=input.small;player.prevGas=input.gas;
 recordSkids(dt);stream();updateRaceFeatures(dt);if(raceMode==='circuit'&&player.s>=raceDistance())finish();
}
