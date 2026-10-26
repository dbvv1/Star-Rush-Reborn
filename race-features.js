let raceBots=[],demoDriving=false,assistedSteer=null,renderStats={drawCalls:0,triangles:0},raceDNF=false;
let ghostRun=null,ghostNode=null,ghostCursor=0,ghostPoints=[],ghostClock=0,raceSplits=[],lapTimes=[],nextSector=1,nextLap=1,firstFinish=null,featureClock=0;
const rivalNames=['Aoi / AI','Haru / AI','Rin / AI'],rivalPaint=['#f0a7c8','#b6a7e6','#f1cd90'];
const routeArrowMeshes=['#a5dbe6','#f0b7c3'].map(col=>{const c=new Collector();bar(c,[-.6,.03,-.38],[.1,.03,0],.055,col);bar(c,[.1,.03,0],[-.6,.03,.38],.055,col);return c.finish()});
const routeArrows=Array.from({length:9},()=>new Node(routeArrowMeshes[0]));for(const n of routeArrows)n.shadow=false;
function ghostKey(){return 'star-rush-best-reborn-'+activeTrackId}
function getBestGhost(){try{return JSON.parse(localStorage.getItem(ghostKey())||'null')}catch(e){return null}}
function prepareRaceFeatures(){
 raceBots=[];raceDNF=false;firstFinish=null;ghostRun=getBestGhost();ghostCursor=0;ghostPoints=[];ghostClock=0;raceSplits=[];lapTimes=[];nextSector=1;nextLap=1;featureClock=0;
 $('resultGrid').replaceChildren();$('splitLabel').textContent='SECTOR 1 / 3';$('splitDelta').textContent='';$('lapTimeLabel').textContent='';$('coach').hidden=eventType!=='practice';
 if(raceMode==='circuit'&&eventType==='race'&&!net.room){player.l=-1.8;for(let i=0;i<3;i++){const model=cloneCar(i);model.root.tint=rivalPaint[i];raceBots.push({s:-3.8*Math.floor((i+1)/2),l:(i%2?1:-1)*1.9,speed:0,yaw:0,color:rivalPaint[i],name:rivalNames[i],node:model.root,finishAt:null,index:i})}}
 if(ghostRun&&settings.ghost&&raceMode==='circuit'&&eventType==='timeTrial'&&!net.room){ghostNode=cloneCar(3).root;ghostNode.tint='#b8e9e6';ghostNode.opacity=.27}else ghostNode=null;
 // Countdown renders before periodic running updates: initialize the new race HUD now.
 updateLocalPosition();if(eventType==='practice'&&!net.room)updateCoach();
}
function updateRaceFeatures(dt){
 for(const bot of raceBots){if(bot.finishAt!==null)continue;let curve=0;for(let d=15;d<=65;d+=10)curve=Math.max(curve,Math.abs(road(bot.s+d).curv));const target=clamp(Math.sqrt(24/Math.max(.004,curve)),24,53)*(1-bot.index*.028);bot.speed=mix(bot.speed,target,1-Math.exp(-dt*(bot.speed>target?3:1.2)));const curv=road(bot.s+20).curv;let lane=Math.sign(curv)*1.6+Math.sin(bot.s*.012+bot.index)*.45;
  for(const ch of chunks.values())for(const e of ch.entities)if((e.kind==='barrier'||e.kind==='cone')&&courseDelta(e.s,bot.s)>0&&courseDelta(e.s,bot.s)<28&&Math.abs(lane-e.l)<2.1)lane=e.l>0?-2.8:2.8;
  const old=bot.l;bot.l=mix(bot.l,lane,1-Math.exp(-dt*2.3));bot.yaw=Math.atan2((bot.l-old)/dt,Math.max(5,bot.speed))+clamp(curv*12,-.4,.4);bot.s+=bot.speed*dt;if(bot.s>=raceDistance()){bot.s=raceDistance();bot.finishAt=elapsed;firstFinish??=elapsed}
 }
 if(raceMode==='circuit'&&!net.room){ghostClock+=dt;if(ghostClock>=.1){ghostClock=0;ghostPoints.push([Number(raceClock().toFixed(3)),Number(player.s.toFixed(3)),Number(player.l.toFixed(3)),Number(player.yaw.toFixed(4)),Number(player.jump.toFixed(3))])}}
 if(raceMode==='circuit'){
  while(player.s>=nextSector*CIRCUIT_LENGTH/3&&nextSector<=trackInfo().laps*3){raceSplits.push(raceClock());const best=ghostRun?.splits?.[nextSector-1];$('splitLabel').textContent='SECTOR '+((nextSector-1)%3+1)+' / 3';if(best){const delta=raceClock()-best;$('splitDelta').textContent=(delta>0?'+':'−')+Math.abs(delta).toFixed(2)+' s';$('splitDelta').style.color=delta>0?'#f1b8c6':'#b9edcf'}else $('splitDelta').textContent='分段 '+formatTime(raceClock()-(raceSplits[nextSector-2]||0));nextSector++}
  if(player.s>=nextLap*CIRCUIT_LENGTH){const previous=lapTimes.reduce((a,b)=>a+b,0);lapTimes.push(raceClock()-previous);$('lapTimeLabel').textContent='上一圈 '+formatTime(lapTimes.at(-1));if(nextLap<trackInfo().laps)announce('LAP '+(nextLap+1),'上一圈 '+formatTime(lapTimes.at(-1)),1.5);nextLap++}
 }
 if(firstFinish!==null&&elapsed-firstFinish>30&&player.s<raceDistance()){raceDNF=true;finish();return}
 featureClock+=dt;if(featureClock>.18){featureClock=0;updateLocalPosition()}
}
function updateLocalPosition(){
 if(net.room){$('localPosition').textContent='ONLINE';$('eventLabel').textContent='好友房间 · '+net.room.code;return}
 const done=state==='finished',result={time:done&&!raceDNF?raceClock():null,s:player.s};
 // Finished bots share the endpoint: progress alone would falsely show first place.
 // Match the result list's stable tie order (bots precede the player).
 const pos=1+raceBots.filter(b=>done?compareRaceResults({time:b.finishAt,s:b.s},result)<=0:b.finishAt!==null||b.s>player.s).length;
 $('localPosition').textContent=raceBots.length?'POS '+pos+' / 4':eventType==='practice'?'PRACTICE':'TIME ATTACK';
 $('eventLabel').textContent=done?(raceDNF?'未完赛':raceMode==='endless'?'巡游结束':'已完赛'):firstFinish!==null?'完赛倒计时 '+Math.max(0,30-Math.floor(elapsed-firstFinish))+' s':raceMode==='endless'?'无尽巡游':trackInfo().name;
}
function compareRaceResults(a,b){return a.time===null&&b.time===null?b.s-a.s:a.time===null?1:b.time===null?-1:a.time-b.time}
// Keep the established 32–62 m route window and threshold in one place.
// The current curvature only suppresses a boost suggestion while still in a bend;
// this is coaching, not a guarantee that a full nitro burst will be safe.
function routePreview(s){
 const turn=wrapAngle(road(s+62).h-road(s+32).h);
 return {turn,direction:Math.abs(turn)<.05?0:Math.sign(turn),currentCurve:road(s).curv};
}
function updateCoach(route=routePreview(player.s)){
 const bend=route.direction>0?'右弯':route.direction<0?'左弯':'',jets=player.smallJets>0&&player.smallWindow>0;
 let text='W / ↑ 加速，观察前方弯道。';
 // One action wins: recovering a slide must not be overwritten by a boost hint.
 if(player.drifting&&player.driftPhase==='counter')text='反打收车：稳住方向，松开 Shift 收漂。'+(jets?'小喷已就绪。':'');
 else if(player.drifting&&player.driftPhase==='release'||player.driftPhase==='exit'&&player.exitTime>0)text='收漂中：先稳住方向。'+(jets?'小喷已就绪，车头稳定后衔接。':'');
 else if(player.drifting)text=player.driftPhase==='entry'?'起漂中：小幅转向，准备反打收车。':'漂移中：反按方向收车，松开 Shift 收漂。';
 else if(jets)text='小喷 ×'+player.smallJets+'：车头稳定后点空格 / Q。'+(player.smallJets>1?'连续两次可双喷。':'');
 else if(player.nitroTime>0)text='氮气喷射中：'+(bend?'前方'+bend+'，稳住方向。':'保持路线，无需重复按 E / C。');
 else if(player.speed>10){
  if(bend)text='前方'+bend+'：先收油控速，平顺转向。';
  else if(player.nitro>0&&player.speed>15&&Math.abs(route.currentCurve)<.006)text='前方直道：车身稳定后，可选 E / C 氮气。';
  else text='前方直道：稳住方向，留意下一弯。';
 }
 $('coach').textContent=text;
}
function drawRaceResults(){
 const list=net.room?net.members.filter(m=>m.id!==net.id).map(m=>({name:m.name,time:m.snapshot?.finished?m.snapshot.time:null,s:m.snapshot?.s||0})):raceBots.map(b=>({name:b.name,time:b.finishAt,s:b.s}));
 list.push({name:profile.name+'（你）',time:raceDNF?null:raceClock(),s:player.s});list.sort(compareRaceResults);$('resultGrid').replaceChildren();
 if(list.length>1)for(let i=0;i<list.length;i++){const row=document.createElement('div');row.className='result-row';const n=document.createElement('span'),t=document.createElement('b');n.textContent=(i+1)+'. '+list[i].name;t.textContent=list[i].time===null?(net.room?.status==='racing'?'比赛中':'未完赛'):formatTime(list[i].time);row.append(n,t);$('resultGrid').appendChild(row)}
}
function completeRaceFeatures(){
 demoDriving=false;drawRaceResults();
 updateLocalPosition();
 if(raceDNF){$('resultDistance').textContent='DNF';$('resultNote').textContent='本局未能在倒计时结束前完赛，可以再挑战一次。';$('submitRun').disabled=true;pendingRun=null}
 else if(!net.room&&raceMode==='circuit'&&ghostPoints.length>10&&(!ghostRun||raceClock()<ghostRun.time)){try{localStorage.setItem(ghostKey(),JSON.stringify({time:raceClock(),points:ghostPoints,splits:raceSplits,laps:lapTimes,date:Date.now()}));$('resultNote').textContent='刷新本机最佳！已保存幽灵，可在计时挑战中追逐自己。'}catch(e){}}
 $('coach').hidden=true;
}
function renderRaceFeatures(origin,dt){
 for(const bot of raceBots){const rr=road(bot.s);bot.node.local=trs(sub(atRoad(bot.s,bot.l,.07),origin),[.97,.97,.97],[0,-rr.h-bot.yaw,Math.atan(rr.slope)]);world.add(bot.node);for(let i=0;i<tires.length;i++){const w=tires[i];bot.node.children[2+i].local=mm(translation(w.x,.41,w.z),rz(-bot.s/.4))}}
 if(ghostNode&&ghostRun?.points?.length&&state==='running'){const points=ghostRun.points,t=raceClock();while(ghostCursor<points.length-2&&points[ghostCursor+1][0]<t)ghostCursor++;const a=points[ghostCursor],b=points[ghostCursor+1],u=clamp((t-a[0])/(b[0]-a[0]||1),0,1),s=mix(a[1],b[1],u),l=mix(a[2],b[2],u),yaw=a[3]+wrapAngle(b[3]-a[3])*u;const rr=road(s);ghostNode.local=trs(sub(atRoad(s,l,.07+mix(a[4],b[4],u)),origin),[.97,.97,.97],[0,-rr.h-yaw,0]);world.add(ghostNode)}
 if(settings.line&&state==='running')for(let i=0;i<routeArrows.length;i++){const s=player.s+12+i*9,rr=road(s),lane=clamp(rr.curv*80,-2.1,2.1),n=routeArrows[i];n.mesh=routeArrowMeshes[Math.abs(rr.curv)*player.speed>.95?1:0];n.local=trs(sub(atRoad(s,lane,.085),origin),[1,1,1],[0,-rr.h,0]);world.add(n)}
}
let frameDurations=[],perfClock=0,lastPerfTime=performance.now(),gamepadPrior={},gamepadConnected=false;
function updateDiagnostics(now,dt){
 const duration=now-lastPerfTime;lastPerfTime=now;if(duration>0&&duration<1000)frameDurations.push(duration);if(frameDurations.length>180)frameDurations.shift();perfClock+=dt;if(perfClock<.25)return;perfClock=0;
 const avg=frameDurations.reduce((a,b)=>a+b,0)/(frameDurations.length||1),sorted=[...frameDurations].sort((a,b)=>a-b),p95=sorted[Math.floor(sorted.length*.95)]||0;
 $('diagnostics').textContent='REBORN / '+(software?'Canvas compatibility':'Three.js WebGL 2')+'\nFPS '+Math.round(1000/(avg||16.7))+' | frame p95 '+p95.toFixed(1)+' ms\nDraw '+renderStats.drawCalls+' | triangles '+renderStats.triangles+'\nState '+state+' | event '+eventType+'\ns '+player.s.toFixed(1)+' / '+raceDistance().toFixed(1)+' | l '+player.l.toFixed(2)+'\nspeed '+(player.speed*3.6).toFixed(1)+' km/h\nsteer '+steering.toFixed(2)+' | slip '+(wrapAngle(player.yaw-player.velocityYaw)*180/Math.PI).toFixed(1)+'°\ndrift '+player.driftPhase+' | small '+player.smallJets+' | nitro '+player.nitro+'\nready '+(net.ready?'yes':'no')+' | peers '+net.peers.size+(audio?.rail?'\nrail '+Object.values(audio.rail.status().states).join('/')+' | '+audio.rail.status().last+' #'+audio.rail.status().played:'');
}
function updateDrivingAssists(dt){
 assistedSteer=null;
 if(demoDriving&&state==='running'){
  let curvature=0;for(let d=15;d<=90;d+=10)curvature=Math.max(curvature,Math.abs(road(player.s+d).curv));const safe=clamp(.85/Math.max(.012,curvature),14,48),r=road(player.s),look=atRoad(player.s+clamp(player.speed*.45,12,26),0,0),delta=sub(look,atRoad(player.s,player.l,0)),target=Math.atan2(dot(delta,r.R),dot(delta,r.T)),error=wrapAngle(target-player.velocityYaw);assistedSteer=clamp((error*3+road(player.s+12).curv*player.speed)/1.04,-1,1);input.brake=player.speed>safe+1.5;input.gas=!input.brake;return;
 }
 const pad=navigator.getGamepads?.()[0];if(!pad){if(gamepadConnected){refreshControls();gamepadPrior={};gamepadConnected=false}return}gamepadConnected=true;
 refreshControls();const axis=Math.abs(pad.axes[0]||0)>.13?pad.axes[0]:0;if(axis)assistedSteer=axis;
 const states={gas:pad.buttons[7]?.value>.13,brake:pad.buttons[6]?.value>.13,drift:!!pad.buttons[2]?.pressed,small:!!pad.buttons[0]?.pressed,boost:!!pad.buttons[1]?.pressed};for(const [k,v] of Object.entries(states)){input[k]||=v;if(v&&!gamepadPrior[k]&&k in controlEdges)controlEdges[k]++}gamepadPrior=states;
}
