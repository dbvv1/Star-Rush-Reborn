// Start-grid replay uses throttle, one boost press and bounded analog steering.
// No car/obstacle position, velocity, or bot state is injected.
const dot=(a,b)=>a.reduce((sum,v,i)=>sum+v*b[i],0);
const axes=y=>[[Math.cos(y),Math.sin(y)],[-Math.sin(y),Math.cos(y)]];
const wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
function overlaps(bot,prop,ds,dl){
 // Same road-plane shapes as contactOBB; test bot instead of the player.
 const a=axes(bot.yaw),b=axes(prop.angle||0),half=prop.kind==='cone'?[.39,.39]:[.35,1.1];
 return [...a,...b].every(n=>
  1.57*Math.abs(dot(a[0],n))+.91*Math.abs(dot(a[1],n))+
  half[0]*Math.abs(dot(b[0],n))+half[1]*Math.abs(dot(b[1],n))>Math.abs(dot([ds,dl],n)));
}
export function createObstacleDrive(q,track,offset){
 q.choose(track);q.event='race';q.start();q.state='running';q.demo=false;
 const target=[...q.chunks.values()].flatMap(ch=>ch.entities)
  .filter(e=>['cone','barrier'].includes(e.kind)).sort((a,b)=>a.s-b.s)[0];
 if(!target)throw Error('Track has no existing movable obstacle');
 const result={track,offset,kind:target.kind,s:target.s,l:target.l,maxShift:0,hit:null,minBotGap:Infinity,overlapFrames:0,firstOverlap:null};
 let frame=0;
 function step(){
  if(frame>=960||q.state!=='running')return false;
  const p=q.player,r=q.road(p.s),ahead=Math.max(10,Math.min(24,p.speed*.45));
  const lane=p.s<target.s+8?target.l+offset:0;
  const look=q.atRoad(p.s+ahead,lane,0),at=q.atRoad(p.s,p.l,0),d=look.map((v,i)=>v-at[i]);
  q.assisted=Math.max(-1,Math.min(1,(wrap(Math.atan2(dot(d,r.R),dot(d,r.T))-p.velocityYaw)*3+q.road(p.s+12).curv*p.speed)/1.04));
  q.input.gas=true;q.input.brake=false;q.input.boost=frame===30;
  q.physics(1/120);frame++;
  const shift=Math.hypot(target.ds||0,target.dl||0);
  result.maxShift=Math.max(result.maxShift,shift);
  if(shift>.05&&!result.hit)result.hit={time:q.elapsed,s:p.s,l:p.l};
  if(shift>.5)for(const bot of q.bots){
   const ds=bot.s-target.s-(target.ds||0),dl=bot.l-target.l-(target.dl||0);
   result.minBotGap=Math.min(result.minBotGap,Math.hypot(ds,dl));
   if(overlaps(bot,target,ds,dl)){
    result.overlapFrames++;
    result.firstOverlap??={time:q.elapsed,bot:bot.index,ds,dl};
   }
  }
  return true;
 }
 return {step,result,target};
}
export function observePushedObstacleRaces(q){
 return [['coast-reborn',0],['sakura-reborn',.5],['sakura-reborn',.9],['academy-reborn',.5],['academy-reborn',.9]].map(([track,offset])=>{
  const run=createObstacleDrive(q,track,offset);while(run.step()){}return run.result;
 });
}
