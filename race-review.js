// Optional race presentation only. Existing clocks, progress and saved ghosts
// remain authoritative; this module never changes driving or result storage.
var raceReviewReady;
function raceReviewActive(){return roadDriving&&new URLSearchParams(window.location.search).get('raceReview')==='1'&&!net.room&&raceMode==='circuit'}
function raceReviewSnapshot(){
 const track=trackInfo(),total=track.laps*3,finished=state==='finished';
 const completed=raceSplits.slice(0,total).map((time,index)=>{
  const previous=index?raceSplits[index-1]:0,best=ghostRun?.splits?.[index],bestPrevious=index?ghostRun?.splits?.[index-1]:0;
  const reference=Number.isFinite(best)&&Number.isFinite(bestPrevious)?best-bestPrevious:null;
  return {lap:Math.floor(index/3)+1,sector:index%3+1,time:time-previous,delta:reference===null?null:time-previous-reference};
 });
 const objective=eventType==='race'?'与 3 位 AI 对手争夺名次；首位对手冲线后 30 秒内完赛。':eventType==='timeTrial'?(ghostRun?'挑战本机最佳用时 '+formatTime(ghostRun.time)+'，按分段找出可以提速的位置。':'完成第一份本机计时；完赛后留下可比较的幽灵。'):'完成既定圈数；入弯前制动、弯心稳住、出弯再加速。';
 return {track:track.name,laps:track.laps,total,completed,objective,finished,dnf:finished&&raceDNF,
  lap:Math.min(track.laps,Math.floor(Math.max(0,player.s)/CIRCUIT_LENGTH)+1),remaining:Math.max(0,Math.ceil(raceDistance()-player.s)),
  best:ghostRun?.time??null,time:finished&&!raceDNF?raceClock():null};
}
function updateRaceBrief(){
 if(!raceReviewReady)return;const node=$('raceBrief');if(!node)return;game.classList.toggle('race-review-enabled',raceReviewActive());node.hidden=!raceReviewActive();if(node.hidden)return;
 // Reading the stored best here must not announce, create or replace a record.
 const track=trackInfo();
 const objective=eventType==='race'?'与 3 位 AI 争夺名次。首位对手冲线后有 30 秒完赛窗口。':eventType==='timeTrial'?'与本机最佳幽灵比较。没有记录时，先完成自己的首个基准。':'练习制动、选线和出弯加速；不需要追逐喷射奖励。';
 node.textContent=track.name+' · '+track.laps+' 圈 / '+(track.laps*3)+' 个计时段。'+objective;
}
function updateRaceReview(){
 const objective=$('raceObjective'),review=$('raceReview');if(!objective||!review)return;
 const active=raceReviewActive();objective.hidden=!active||state==='ready'||state==='finished';review.hidden=!active||state!=='finished';
 if(!active)return;
 const snap=raceReviewSnapshot();
 objective.textContent=state==='countdown'?snap.objective:'第 '+snap.lap+' / '+snap.laps+' 圈 · 已完成 '+snap.completed.length+' / '+snap.total+' 段 · 剩余 '+snap.remaining+' m';
 if(review.hidden){review.replaceChildren();return;}
 const title=document.createElement('h3');title.textContent=snap.dnf?'本次未完赛 · 已完成分段':'本次逐段复盘';review.replaceChildren(title);
 const summary=document.createElement('p');
 summary.textContent=snap.dnf?'完成 '+snap.completed.length+' / '+snap.total+' 段；未完成的段不计时。':snap.best!==null?'相对赛前最佳 '+raceReviewDelta(snap.time-snap.best)+'；各段差值对比同一份赛前最佳。':'首个完赛基准；下次可逐段比较。';review.append(summary);
 if(!snap.completed.length){const empty=document.createElement('p');empty.textContent='尚未完成第一个计时段。';review.append(empty);return;}
 const table=document.createElement('table'),head=document.createElement('thead'),headRow=document.createElement('tr');
 for(const text of ['圈 / 段','本段用时','对比最佳']){const th=document.createElement('th');th.scope='col';th.textContent=text;headRow.append(th);}head.append(headRow);table.append(head);
 const body=document.createElement('tbody');for(const segment of snap.completed){const row=document.createElement('tr');for(const text of [segment.lap+' / S'+segment.sector,formatTime(segment.time),segment.delta===null?'无基准':raceReviewDelta(segment.delta)]){const cell=document.createElement('td');cell.textContent=text;row.append(cell);}body.append(row);}table.append(body);review.append(table);
}
function raceReviewDelta(value){return (value>0?'+':value<0?'−':'±')+Math.abs(value).toFixed(2)+' s'}
