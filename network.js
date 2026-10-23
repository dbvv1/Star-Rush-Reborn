// Real remote players backed by shared room snapshots, with clock alignment,
// buffered interpolation and capped extrapolation. No local bots are substituted.
// Each open tab is an independent racer; duplicated tabs must not share identity.
const clientId=crypto.randomUUID();
const net={id:clientId,room:null,members:[],ready:false,busy:false,lastSync:0,offset:0,startAt:0,runTag:0,peers:new Map(),errors:0,rtt:0,session:0};
const peerColors=['#f6aec9','#ffd88b','#baafff','#a8efce'];
const peerMarkers=peerColors.map(c=>{const col=new Collector();cone(col,[0,2.55,0],[.14,.28,.14],c,[0,0,PI]);return col.finish()});
function cloneCar(index){function copy(n){const c=new Node(n.mesh);c.local=new Float32Array(n.local);c.shadow=n.shadow;for(const child of n.children)c.add(copy(child));return c}const root=copy(car),marker=root.add(new Node(peerMarkers[index%4]));return {root,marker,spin:0}}
function networkSnapshot(){return {s:player.s,l:player.l,vS:player.vS,vL:player.vL,yaw:player.yaw,jump:player.jump,mini:player.mini,nitroTime:player.nitroTime,paint:profile.paint,time:raceClock(),finished:state==='finished'}}
async function roomRequest(action,extra={}){
 const began=Date.now(),response=await fetch('/api/rooms',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action,id:net.id,code:net.room?.code||$('roomCode').value.trim(),name:$('roomName').value.trim()||'匿名车手',track:activeTrackId,...extra}),signal:AbortSignal.timeout(4000)});
 const data=await response.json();if(!response.ok)throw new Error(data.error||'房间请求失败');
 net.rtt=Date.now()-began;if(data.serverTime){const offset=data.serverTime-(began+Date.now())/2;net.offset=net.room?mix(net.offset,offset,.25):offset}return data;
}
function clearPeers(){for(const p of net.peers.values())p.label.remove();net.peers.clear()}
function receiveRoom(data){
 const previous=net.room?.status;net.room=data.room;net.members=data.members;net.ready=!!data.members.find(m=>m.id===net.id)?.ready;net.errors=0;
 const ids=new Set(data.members.map(m=>m.id));for(const [id,p] of net.peers)if(!ids.has(id)){p.label.remove();net.peers.delete(id)}
 for(const member of data.members){if(member.id===net.id)continue;let peer=net.peers.get(member.id);if(!peer){const label=document.createElement('div');label.className='peer-label';label.textContent=member.name;game.appendChild(label);peer={...cloneCar(net.peers.size),label,name:member.name,history:[],position:null,lastStamp:0};net.peers.set(member.id,peer)}peer.label.textContent=member.name;peer.name=member.name;
  const s=member.snapshot;if(s&&Number.isFinite(s.s)&&member.updatedAt>peer.lastStamp){peer.lastStamp=member.updatedAt;peer.history.push({...s,t:member.updatedAt});if(peer.history.length>12)peer.history.shift()}
 }
 if(net.room.status==='racing'&&net.room.startAt!==net.runTag){
  net.runTag=net.room.startAt;net.startAt=net.room.startAt;activeTrackId=net.room.track;raceMode='circuit';reset(false);refreshTrackUI();prepareRaceFeatures();for(const p of net.peers.values()){p.history=[];p.position=null}
  const order=data.members.findIndex(m=>m.id===net.id);player.l=(order%2?1:-1)*1.9;player.s=-Math.floor(order/2)*3.8;
  state='countdown';countLeft=(net.startAt-(Date.now()+net.offset))/1000;$('welcome').hidden=true;$('finished').hidden=true;$('paused').hidden=true;$('roomPanel').hidden=true;$('rankPanel').hidden=true;game.classList.remove('menu-open');$('countdown').hidden=false;audioInit();if(audio)audio.ctx.resume().catch(()=>{});
 }
 if(net.room.status==='lobby'&&previous&&previous!=='lobby'){
  net.startAt=0;net.runTag=0;state='ready';activeTrackId=net.room.track;raceMode='circuit';reset(false);refreshTrackUI();$('countdown').hidden=true;$('finished').hidden=true;$('welcome').hidden=false;game.classList.add('menu-open');for(const p of net.peers.values())p.history=[];
 }
 updateRoomUI();if(state==='finished')drawRaceResults();
}
function updateRoomUI(){
 const inRoom=!!net.room;$('roomActions').hidden=!inRoom;$('networkHud').hidden=!inRoom;$('createRoom').disabled=inRoom;$('joinRoom').disabled=inRoom;$('roomCode').disabled=inRoom;
 $('circuitMode').disabled=inRoom;$('endlessMode').disabled=inRoom;$('roomName').disabled=inRoom&&net.room.status==='racing';$('startBtn').textContent=inRoom?'回到联机房间':'开始竞速　↗';
 if(!inRoom){$('roomTitle').textContent='同一条赛道，一起出发。';$('roomMembers').replaceChildren();$('roomStatus').textContent='最多 4 人 · 使用当前选择的跑圈地图';return}
 $('roomCode').value=net.room.code;$('roomTitle').textContent='ROOM '+net.room.code+' · '+TRACKS[net.room.track].name;
 $('roomStatus').textContent=(net.room.status==='racing'?'比赛进行中':net.room.status==='finished'?'比赛已结束':'候场中')+' · '+net.members.length+' / 4 人 · '+Math.round(net.rtt)+' ms 往返';
 $('roomMembers').replaceChildren();for(const member of net.members){const row=document.createElement('div');row.className='room-member';const n=document.createElement('span');n.textContent=member.name+(member.id===net.id?'（你）':'')+(member.id===net.room.hostId?' · 房主':'');const status=document.createElement('b');status.textContent=member.snapshot?.finished?'完赛 '+formatTime(member.snapshot.time||0):net.room.status==='racing'?'比赛中':member.ready?'已准备':'等待准备';row.append(n,status);$('roomMembers').appendChild(row)}
 const host=net.room.hostId===net.id,racing=net.room.status!=='lobby';$('startRoom').hidden=!host;$('startRoom').disabled=!racing&&net.members.some(m=>!m.ready);$('startRoom').textContent=racing?'结束本局 · 返回候场':'全员就绪 · 开始竞速';$('readyRoom').hidden=racing;$('readyRoom').textContent=net.ready?'取消准备':'准备';
 $('connectionText').textContent=net.errors?'连接恢复中…':'ROOM '+net.room.code+' · '+Math.round(net.rtt)+' ms';
 const order=net.members.map(m=>({id:m.id,s:m.id===net.id?player.s:m.snapshot?.s||0,finished:m.id===net.id?state==='finished':!!m.snapshot?.finished,time:m.id===net.id?raceClock():m.snapshot?.time||0})).sort((a,b)=>a.finished&&b.finished?a.time-b.time:b.finished-a.finished||b.s-a.s);
 $('racePosition').textContent='POS '+(order.findIndex(m=>m.id===net.id)+1)+' / '+net.members.length;
}
function showRoom(){openPanel('roomPanel');updateRoomUI()}
async function joinAction(action){
 if(net.busy)return;net.busy=true;$('roomStatus').textContent='正在连接房间…';
 try{const data=await roomRequest(action);net.session++;clearPeers();activeTrackId=data.room.track;raceMode='circuit';reset(false);refreshTrackUI();receiveRoom(data);state='ready';panelResume=false;$('paused').hidden=true;$('finished').hidden=true;$('welcome').hidden=false;game.classList.add('menu-open');try{localStorage.setItem('star-rush-name',$('roomName').value.trim())}catch(e){}}catch(e){$('roomStatus').textContent=e.message}finally{net.busy=false}
}
async function roomAction(action,extra={}){if(net.busy)return;net.busy=true;const session=net.session;try{const data=await roomRequest(action,extra);if(session===net.session&&net.room)receiveRoom(data)}catch(e){$('roomStatus').textContent=e.message}finally{net.busy=false}}
async function leaveRoom(){
 if(!net.room)return;const payload={action:'leave',id:net.id,code:net.room.code,name:$('roomName').value};net.session++;net.room=null;net.startAt=0;net.runTag=0;net.members=[];clearPeers();state='ready';reset(false);$('finished').hidden=true;$('paused').hidden=true;$('countdown').hidden=true;$('welcome').hidden=false;game.classList.add('menu-open');updateRoomUI();fetch('/api/rooms',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),keepalive:true}).catch(()=>{});
}
function networkTick(now){
 if(!net.room||net.busy||document.hidden||now-net.lastSync<(net.room.status==='racing'?125:850))return;
 net.lastSync=now;net.busy=true;const session=net.session;
 roomRequest('poll',{snapshot:net.room.status!=='lobby'?networkSnapshot():{}}).then(data=>{if(net.room&&net.session===session)receiveRoom(data)}).catch(e=>{if(net.room&&net.session===session){net.errors++;$('connectionText').textContent='连接恢复中 · '+e.message;$('roomStatus').textContent=e.message}}).finally(()=>{net.busy=false});
}
function renderPeers(origin,dt){
 if(!net.room)return;const target=Date.now()+net.offset-clamp(net.rtt*1.1,170,350);
 for(const peer of net.peers.values()){
  const h=peer.history;if(!h.length){peer.label.hidden=true;continue}let a=h[0],b=a;
  for(let i=1;i<h.length;i++){b=h[i];if(b.t>=target)break;a=b}
  const u=a.t===b.t?0:clamp((target-a.t)/(b.t-a.t),0,1),v={};for(const key of ['s','l','vS','vL','jump'])v[key]=mix(a[key]||0,b[key]||0,u);v.yaw=(a.yaw||0)+wrapAngle((b.yaw||0)-(a.yaw||0))*u;
  const extrap=clamp((target-b.t)/1000,0,.12);v.s+=(b.vS||0)*extrap;v.l+=(b.vL||0)*extrap;
  if(peer.position&&Math.abs(v.s-peer.position.s)<15){const t=1-Math.exp(-dt*24);v.s=mix(peer.position.s,v.s,t);v.l=mix(peer.position.l,v.l,t)}peer.position=v;
  const r=road(v.s),pos=atRoad(v.s,v.l,.06+v.jump);peer.worldPos=sub(add(pos,[0,3.0,0]),origin);peer.root.tint=typeof b.paint==='string'?b.paint:peerColors[0];peer.root.local=trs(sub(pos,origin),[.97,.97,.97],[0,-r.h-v.yaw,Math.atan(r.slope)]);peer.root.shadow=length(sub(pos,atRoad(player.s,player.l)))<70;world.add(peer.root);peer.spin-=(v.vS||0)*dt/.4;
  for(let i=0;i<tires.length;i++){const w=tires[i];peer.root.children[2+i].local=mm(translation(w.x,.41,w.z),rz(peer.spin))}
  for(let i=0;i<flames.length;i++){const f=flames[i],on=b.nitroTime>0||b.mini>0,size=on?.85+.16*Math.sin(gameTime*38+f.side):.001;peer.root.children[6+i].local=trs([-1.9,.43,f.side*.34],[size,size,size])}
 }
}
function projectPeerLabels(vp){
 for(const peer of net.peers.values()){if(!peer.worldPos||!net.room||state==='ready'){peer.label.hidden=true;continue}const p=peer.worldPos,x=p[0],y=p[1],z=p[2],w=vp[3]*x+vp[7]*y+vp[11]*z+vp[15],px=(vp[0]*x+vp[4]*y+vp[8]*z+vp[12])/w,py=(vp[1]*x+vp[5]*y+vp[9]*z+vp[13])/w;
  peer.label.hidden=w<=0||Math.abs(px)>1.1||Math.abs(py)>1.1;if(!peer.label.hidden){peer.label.style.left=(px*.5+.5)*width+'px';peer.label.style.top=(-py*.5+.5)*height+'px'}
 }
}
$('roomBtn').onclick=$('welcomeRoom').onclick=showRoom;$('closeRoom').onclick=()=>closePanel('roomPanel');
$('createRoom').onclick=()=>joinAction('create');$('joinRoom').onclick=()=>joinAction('join');$('readyRoom').onclick=()=>roomAction('ready',{ready:!net.ready});$('startRoom').onclick=()=>roomAction(net.room?.status!=='lobby'?'reset':'start');$('leaveRoom').onclick=leaveRoom;
$('copyRoom').onclick=async()=>{if(!net.room)return;const url=new URL(location.href);url.searchParams.set('room',net.room.code);try{await navigator.clipboard.writeText(url.toString());$('roomStatus').textContent='邀请链接已复制，发给朋友即可加入'}catch(e){$('roomStatus').textContent='房间码 '+net.room.code+' · 复制浏览器地址并加上 ?room='+net.room.code}};
try{$('roomName').value=localStorage.getItem('star-rush-name')||'车手'+Math.floor(100+Math.random()*900)}catch(e){}
const invited=new URLSearchParams(location.search).get('room');if(invited){$('roomCode').value=invited.toUpperCase().slice(0,6);showRoom()}
window.addEventListener('pagehide',()=>{if(net.room)navigator.sendBeacon('/api/rooms',new Blob([JSON.stringify({action:'leave',id:net.id,code:net.room.code})],{type:'application/json'}))});
