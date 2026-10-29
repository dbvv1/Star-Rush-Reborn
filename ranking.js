let boardTrack=activeTrackId;
let pendingRun=null,boardMode='circuit',boardLocal=false,boardRequest=0;
const raceSave=createLocalRaceSave({storage:()=>localStorage,roadDriving,drivingRevision,trackIds:Object.keys(TRACKS)});
function localRuns(){return raceSave.readRuns().value}
function clearLocalSaveAttempt(){localSaveAttempt=null;$('retryLocalSave').hidden=true}
function saveFinishedRun(run){
 const ghost=!net.room&&raceMode==='circuit'&&ghostPoints.length>10
  ?{time:raceClock(),points:ghostPoints.map(p=>[...p]),splits:[...raceSplits],laps:[...lapTimes],date:gameClock.wallNow()}:null;
 let name='本机车手';try{name=localStorage.getItem('star-rush-name')||name}catch(e){}
 const input={run:{...run},name,dnf:raceDNF,ghost};
 localSaveAttempt={input,receipt:raceSave.finish(input),note:''};
}
function retryableLocalSave(result){return !result.ok&&(result.status==='read-failed'||result.status==='write-failed')}
function showLocalSaveReceipt(){
 if(!localSaveAttempt)return;
 $('resultNote').textContent=localSaveAttempt.note+' '+localRaceSaveMessage(localSaveAttempt.receipt);
 $('resultNote').classList.toggle('save-failed',Object.values(localSaveAttempt.receipt).some(result=>!result.ok));
 const button=$('retryLocalSave'),focused=document.activeElement===button;
 button.hidden=!Object.values(localSaveAttempt.receipt).some(retryableLocalSave);
 if(focused&&button.hidden)$('retryBtn').focus();
}
function retryLocalSave(){
 if(state!=='finished'||!localSaveAttempt)return;
 const {input,receipt}=localSaveAttempt;
 // Successful items are never rewritten; keep the original completion snapshot.
 if(retryableLocalSave(receipt.record))receipt.record=raceSave.appendRun(input.run,input.name);
 if(retryableLocalSave(receipt.ghost))receipt.ghost=raceSave.saveBestGhost(input.run.track,input.ghost);
 showLocalSaveReceipt();
}
$('retryLocalSave').onclick=retryLocalSave;
function rankRow(i,r){const tr=document.createElement('tr'),result=r.mode==='circuit'?formatTime(r.timeMs/1000):r.distance.toLocaleString()+' m';for(const text of [String(i+1).padStart(2,'0'),r.name,result,Math.round(r.score).toLocaleString()]){const td=document.createElement('td');td.textContent=text;tr.appendChild(td)}return tr}
async function loadBoard(){if(roadDriving){boardLocal=true;boardMode='circuit';}const request=++boardRequest,rows=$('rankRows');if($('rankTrack'))$('rankTrack').hidden=boardMode!=='circuit';rows.replaceChildren();$('rankStatus').textContent=boardLocal?'本机记录':'正在获取在线成绩…';for(const [id,mode] of [['boardCircuit','circuit'],['boardEndless','endless']])$(id).classList.toggle('selected',!boardLocal&&boardMode===mode);$('boardLocal').classList.toggle('selected',boardLocal);
 try{let results;if(boardLocal){const saved=raceSave.readRuns();if(!saved.ok){$('rankStatus').textContent=saved.status==='invalid-data'?'本机记录数据异常，原记录未覆盖。':'本机记录暂时无法读取；请稍后重试。';return}results=saved.value.filter(r=>r.mode===boardMode&&(r.mode==='endless'||r.track===boardTrack)).sort((a,b)=>boardMode==='circuit'?a.timeMs-b.timeMs:b.distance-a.distance).slice(0,20)}else{const response=await fetch('/api/leaderboard?mode='+boardMode+'&track='+encodeURIComponent(boardTrack));if(!response.ok)throw new Error('榜单服务暂不可用');const data=await response.json();results=data.runs}
  if(request!==boardRequest)return;for(let i=0;i<results.length;i++)rows.appendChild(rankRow(i,results[i]));$('rankStatus').textContent=results.length?(boardLocal?'当前设备 · ':'在线 · ')+(boardMode==='circuit'?TRACKS[boardTrack].name+' / '+TRACKS[boardTrack].laps+' 圈 / 按最快用时':'无尽模式 / 按最远里程'):'还没有成绩，来跑第一圈。';
 }catch(e){if(request!==boardRequest)return;$('rankStatus').textContent='在线榜暂时未能加载，可切换“本机记录”。'}
}
function showBoard(){boardTrack=activeTrackId;if($('rankTrack'))$('rankTrack').value=boardTrack;boardMode=raceMode;boardLocal=false;openPanel('rankPanel');loadBoard()}
$('rankBtn').onclick=showBoard;$('closeRank').onclick=()=>closePanel('rankPanel');
$('boardCircuit').onclick=()=>{boardMode='circuit';boardLocal=false;loadBoard()};$('boardEndless').onclick=()=>{boardMode='endless';boardLocal=false;loadBoard()};$('boardLocal').onclick=()=>{boardLocal=true;loadBoard()};
function chooseMode(mode){if(roadDriving&&mode!=='circuit')return;raceMode=mode;for(const [id,value] of [['circuitMode','circuit'],['endlessMode','endless']]){$(id).classList.toggle('selected',mode===value);$(id).setAttribute('aria-pressed',String(mode===value))}reset(true);$('trackPicker').hidden=mode!=='circuit';$('trackDescription').hidden=mode!=='circuit'}
$('circuitMode').onclick=()=>chooseMode('circuit');$('endlessMode').onclick=()=>chooseMode('endless');
try{$('racerName').value=localStorage.getItem('star-rush-name')||''}catch(e){}
$('submitRun').onclick=async()=>{
 if(roadDriving||!pendingRun||!localSaveAttempt)return;
 const name=$('racerName').value.trim().slice(0,16)||'匿名车手',run={...pendingRun},attempt=localSaveAttempt;
 const current=()=>state==='finished'&&localSaveAttempt===attempt&&pendingRun?.id===run.id;
 try{localStorage.setItem('star-rush-name',name)}catch(e){}
 $('submitRun').disabled=true;$('uploadStatus').textContent='正在上传成绩…';
 try{
  const response=await fetch('/api/leaderboard',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...run,name})});
  if(!response.ok)throw new Error();if(!current())return;
  $('submitRun').textContent='已上传';$('uploadStatus').textContent='上传成功！点击右上角“榜”查看和朋友的排名。';
 }catch(e){
  if(!current())return;
  $('submitRun').disabled=false;
  $('uploadStatus').textContent='暂时未能上传，可以重试上传。';
 }
};

function chooseTrack(id){if(!TRACKS[id])return;if(typeof net!=='undefined'&&net.room){announce('已在联机房间','退出房间后可更换地图',1.5);return}activeTrackId=id;reset(false);refreshTrackUI()}
function refreshTrackUI(){if(typeof updateRaceBrief==='function')updateRaceBrief();for(const b of document.querySelectorAll('[data-track]')){b.classList.toggle('selected',b.dataset.track===activeTrackId);b.setAttribute('aria-pressed',String(b.dataset.track===activeTrackId))}$('trackDescription').textContent=trackInfo().description;$('modeDistance').textContent=Math.round(CIRCUIT_LENGTH)+' m / 圈 · '+trackInfo().laps+' 圈'}
for(const b of document.querySelectorAll('[data-track]'))b.onclick=()=>chooseTrack(b.dataset.track);refreshTrackUI();

const rankTrackSelect=document.createElement('select');rankTrackSelect.id='rankTrack';rankTrackSelect.setAttribute('aria-label','排行榜赛道');for(const [id,t] of Object.entries(TRACKS)){const o=document.createElement('option');o.value=id;o.textContent=t.name;rankTrackSelect.appendChild(o)}$('rankStatus').before(rankTrackSelect);rankTrackSelect.onchange=()=>{boardTrack=rankTrackSelect.value;loadBoard()};
