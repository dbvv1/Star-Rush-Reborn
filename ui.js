const defaultSettings={quality:'auto',sensitivity:1,fov:62,autoGas:false,line:true,ghost:true};
let settings={...defaultSettings},profile={name:'车手'+Math.floor(100+Math.random()*900),paint:'#83cde4',car:'Mint Comet'},eventType='race';
try{Object.assign(settings,JSON.parse(localStorage.getItem((roadDriving?'star-rush-settings-'+drivingRevision:'star-rush-settings-reborn'))||'{}'));Object.assign(profile,JSON.parse(localStorage.getItem('star-rush-profile')||'{}'));profile.name=localStorage.getItem('star-rush-name')||profile.name}catch(e){}
const garagePaints=[['Mint Comet','#83cde4','薄荷彗星'],['Sakura Bloom','#efabc8','樱花绽放'],['Violet Hour','#b1a0df','暮色紫'],['Solar Flare','#edc784','日光金']];
function saveSettings(){try{localStorage.setItem((roadDriving?'star-rush-settings-'+drivingRevision:'star-rush-settings-reborn'),JSON.stringify(settings))}catch(e){}}
function saveProfile(){profile.name=$('profileName').value.trim().slice(0,16)||profile.name;try{localStorage.setItem('star-rush-profile',JSON.stringify(profile));localStorage.setItem('star-rush-name',profile.name)}catch(e){}$('carName').textContent=profile.car;for(const id of ['roomName','racerName','profileName'])$(id).value=profile.name;$('profileStatus').textContent='已保存 · '+profile.name;car.tint=profile.paint}
function syncSettingsUI(){for(const [id,key] of [['autoGasSetting','autoGas'],['lineSetting','line'],['ghostSetting','ghost']])$(id).checked=!!settings[key];$('qualitySetting').value=settings.quality;$('steeringSetting').value=settings.sensitivity*100;$('fovSetting').value=settings.fov;$('settingsStatus').textContent=software?'当前浏览器使用兼容显示模式，比赛逻辑和操作保持一致。':'Three.js 3D 渲染 · 设置会自动保存在此设备。'}
$('settingsBtn').onclick=()=>{syncSettingsUI();openPanel('settingsPanel')};$('closeSettings').onclick=()=>closePanel('settingsPanel');
for(const [id,key] of [['autoGasSetting','autoGas'],['lineSetting','line'],['ghostSetting','ghost']])$(id).onchange=e=>{settings[key]=e.target.checked;saveSettings()};$('qualitySetting').onchange=e=>{settings.quality=e.target.value;saveSettings()};$('steeringSetting').oninput=e=>{settings.sensitivity=Number(e.target.value)/100;saveSettings()};$('fovSetting').oninput=e=>{settings.fov=Number(e.target.value);saveSettings()};$('resetSettings').onclick=()=>{settings={...defaultSettings};saveSettings();syncSettingsUI()};
for(const [name,paint,chinese] of garagePaints){const b=document.createElement('button');b.type='button';b.style.setProperty('--paint',paint);b.setAttribute('aria-label',chinese+'涂装');const icon=document.createElement('i'),title=document.createElement('b'),sub=document.createElement('small');title.textContent=name;sub.textContent=chinese;b.append(icon,title,sub);b.onclick=()=>{profile.paint=paint;profile.car=name;for(const el of $('garageGrid').children)el.classList.toggle('selected',el===b);saveProfile()};if(profile.paint===paint)b.classList.add('selected');$('garageGrid').appendChild(b)}
$('garageBtn').onclick=()=>openPanel('garagePanel');$('closeGarage').onclick=()=>closePanel('garagePanel');$('saveProfile').onclick=saveProfile;$('profileName').value=profile.name;saveProfile();
$('eventType').onchange=e=>{eventType=e.target.value;if(eventType==='practice')chooseTrack('academy-reborn')};
function goHome(){if(net.room){showRoom();return}demoDriving=false;state='ready';reset(false);raceBots=[];ghostNode=null;clearKeys();$('welcome').hidden=false;$('paused').hidden=true;$('finished').hidden=true;$('coach').hidden=true;game.classList.add('menu-open');$('countdown').hidden=true}
$('pauseHome').onclick=goHome;$('newRouteBtn').onclick=goHome;
$('demoBtn').onclick=()=>{start(false);demoDriving=true;announce('DEMO DRIVE','自动试驾 · 按任意方向键接管',2)};
window.addEventListener('keydown',e=>{if(e.target.closest('input,select,textarea'))return;if(['KeyW','KeyA','KeyS','KeyD','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.code)&&demoDriving){demoDriving=false;assistedSteer=null;announce('YOUR TURN','已接管赛车',1)}});
function drawCourseCards(){for(const b of document.querySelectorAll('[data-track]')){const t=TRACKS[b.dataset.track],svg=b.querySelector('svg');if(!t||!svg)continue;const xs=t.points.map(p=>p[0]),zs=t.points.map(p=>p[2]),minX=Math.min(...xs),maxX=Math.max(...xs),minZ=Math.min(...zs),maxZ=Math.max(...zs),sc=Math.min(140/(maxX-minX),54/(maxZ-minZ));const points=t.points.map(p=>[80+(p[0]-(minX+maxX)/2)*sc,35+(p[2]-(minZ+maxZ)/2)*sc]);const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',points.map((p,i)=>(i?'L':'M')+p.join(',')).join(' ')+'Z');path.setAttribute('fill','none');path.setAttribute('stroke',t.biome?'#eabfd8':'#a9d8ec');path.setAttribute('stroke-width','3');path.setAttribute('stroke-linejoin','round');svg.replaceChildren(path);const start=document.createElementNS('http://www.w3.org/2000/svg','circle');start.setAttribute('cx',points[0][0]);start.setAttribute('cy',points[0][1]);start.setAttribute('r','3');start.setAttribute('fill','#ffe2ac');svg.appendChild(start)}}
$('compatNotice').hidden=!software;drawCourseCards();syncSettingsUI();updateLocalPosition();

for(const id of ['racerName','roomName'])$(id).addEventListener('change',()=>{$('profileName').value=$(id).value;saveProfile()});

const drivingLink=document.createElement('a');drivingLink.id='drivingProfileLink';drivingLink.className='text-btn';drivingLink.href=roadDriving?'/':'/road';drivingLink.textContent=roadDriving?'返回默认街机驾驶 ↗':'试驾普通公路驾驶候选（未定稿） ↗';document.querySelector('#welcome .launch').after(drivingLink);
if(roadDriving){
 for(const id of ['roomBtn','welcomeRoom','endlessMode','boardCircuit','boardEndless','submitRun']){$(id).hidden=true;$(id).disabled=true;}
 document.querySelector('#welcome .eyebrow').textContent='普通公路驾驶候选 · 未定稿 / ROAD V2';
 $('rankBtn').textContent='本机';
 for(const id of ['score','coins'])$(id).closest('.stat').hidden=true;
 for(const id of ['resultScore','resultBest'])$(id).parentElement.hidden=true;
 const ready=document.querySelector('.ready-controls');for(const node of [...ready.childNodes])if(node!==$('welcomeHelp'))node.remove();ready.prepend(document.createTextNode('W / ↑ 油门 · S / ↓ 制动 · A D 转向　'));$('welcomeHelp').textContent='驾驶课堂：制动 → 转向 → 恢复 ↗';
 document.querySelector('#settingsPanel .board-note').textContent='W / ↑ 油门，S / ↓ 制动，A D 转向，退格回正。支持标准手柄；F2 打开性能与驾驶数据。';
 document.querySelector('.nitro').hidden=true;
 for(const el of document.querySelectorAll('[data-key=small],[data-key=boost],[data-key=drift]'))el.hidden=true;
 document.querySelector('.guide').textContent='W / ↑ 油门 · S / ↓ 制动 · A D 转向 · 退格回正';
 document.querySelector('#welcome .intro').textContent='公路驾驶候选：入弯前制动，稳定转向，出弯再加油。无喷射与加速带，默认基线未改变。';
 document.querySelector('#helpPanel h2').textContent='先把一段弯道开顺。';
 document.querySelector('#helpPanel .lesson-grid').innerHTML='<article><b>油门与制动</b><p>W / ↑ 加速，S / ↓ 制动。接近停下后继续按 S 可倒车。先在直线上减速，再平顺转向。</p></article><article><b>侧滑与恢复</b><p>A D 或左右方向键控制前轮。抓地有限，过快入弯会转向不足；轮胎侧滑时松油并适量修正，避免连续大幅反打。</p></article><article><b>碰撞与跑圈</b><p>护栏划定真实赛道边界；随机锥桶与路障只在护栏外装饰，赛道内不收集金币。退格回正增加两秒。候选无氮气、小喷、跳台与加速带；对手使用相同车体／抓地与道路积分，路径控制不同；仍为非接触对手，不冒充完整对手碰撞。</p></article>';
 document.querySelector('#helpPanel .board-note').textContent='参考地平线的驾驶反馈目标；原创轻量模型，并非其物理实现。';
 $('settingsStatus').textContent+=' 公路候选：无喷射连招。';
}
