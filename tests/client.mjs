import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';
import {Window} from 'happy-dom';
import {clientSource} from '../build.mjs';
const window=new Window({url:'https://race.test/',settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}}),errors=[],frames=[];let draws=0;
window.console.error=(...args)=>errors.push(args.map(String).join(' '));
window.requestAnimationFrame=fn=>{frames.push(fn);return frames.length};window.cancelAnimationFrame=()=>{};
window.fetch=async()=>new Response(JSON.stringify({runs:[]}),{headers:{'content-type':'application/json'}});
const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:(...args)=>{assert(args.filter(x=>typeof x==='number').every(Number.isFinite),'nonfinite canvas '+String(k));draws++},set:(o,k,v)=>{o[k]=v;return true}});
window.HTMLCanvasElement.prototype.getContext=function(type){return type==='2d'?ctx:null};
Object.defineProperties(window.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
window.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
// Execute the exact production bundle first: missing DOM bindings and startup
// exceptions must fail even if the instrumented test build later succeeds.
window.eval(readFileSync('dist/client/game.js','utf8'));
assert.equal(window.document.querySelector('#error').hidden,true,errors.join('\n'));
assert(frames.length);frames.shift()(16.67);assert(draws>100);assert.equal(errors.length,0,errors.join('\n'));
await window.happyDOM.close();
const w=new Window({url:'https://race.test/',settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}});w.console.error=(...a)=>errors.push(a.map(String).join(' '));w.requestAnimationFrame=()=>1;w.fetch=window.fetch;w.HTMLCanvasElement.prototype.getContext=window.HTMLCanvasElement.prototype.getContext;
Object.defineProperties(w.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});w.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
const hooks=`\nwindow.qa={player,input,controlEdges,VehicleModel,physics,resolveContacts,beginDrift,endDrift,reset,start,finish,pauseGame,goHome,prepareRaceFeatures,updateRaceFeatures,updateHUD,updateCoach,routePreview,updateDrivingAssists,refreshControls,road,atRoad,trackInfo,raceDistance,sceneFrame,renderRaceFeatures,frame,get state(){return state},get elapsed(){return elapsed},get bots(){return raceBots},get chunks(){return chunks},renderList(){drawList.length=0;collect(world);return drawList},get settings(){return settings},get profile(){return profile},get ghostNode(){return ghostNode},get ghostRun(){return ghostRun},get splits(){return raceSplits},get circuitSamples(){return circuitSamples},set state(v){state=v},set event(v){eventType=v},set demo(v){demoDriving=v},set assisted(v){assistedSteer=v},choose(id){activeTrackId=id;raceMode='circuit';reset(false)},get tracks(){return TRACKS},clearKeys};`;
const compiled=await build({stdin:{contents:clientSource(hooks),resolveDir:process.cwd(),loader:'js'},bundle:true,write:false,format:'iife',target:'es2022',logLevel:'silent'});w.eval(compiled.outputFiles[0].text);assert.equal(errors.length,0,errors.join('\n'));const q=w.qa;assert(q,'initialization must reach QA hooks');
// A new countdown must not retain the previous track, sector or coaching text.
// Seed the stale HUD via the real feature update, then start without advancing a frame.
const hud=id=>w.document.getElementById(id);
q.choose('academy-reborn');q.event='practice';q.start();q.state='running';
Object.assign(q.player,{s:q.raceDistance()*2/3+1,speed:20,nitro:0,smallJets:2,smallWindow:1.5});
q.updateRaceFeatures(.2);q.updateHUD(.061);
assert.equal(hud('eventLabel').textContent,'星跃训练场');
assert.equal(hud('splitLabel').textContent,'SECTOR 2 / 3');
assert.match(hud('coach').textContent,/小喷 ×2/);
q.goHome();q.choose('coast-reborn');q.event='practice';q.start();
assert.equal(q.state,'countdown');assert.equal(q.elapsed,0);assert.equal(q.player.s,0);
assert.equal(hud('eventLabel').textContent,'汐见海岸','countdown must name the new track immediately');
assert.equal(hud('localPosition').textContent,'PRACTICE');
assert.equal(hud('splitLabel').textContent,'SECTOR 1 / 3');
assert.equal(hud('splitDelta').textContent,'');assert.equal(hud('lapTimeLabel').textContent,'');
assert.equal(hud('coach').hidden,false);
assert.equal(hud('coach').textContent,'W / ↑ 加速，观察前方弯道。');
for(const [event,label,bots] of [['race','POS 1 / 4',3],['timeTrial','TIME ATTACK',0],['practice','PRACTICE',0]]){
 q.event=event;q.start();
 assert.equal(q.state,'countdown');assert.equal(q.elapsed,0);assert.equal(q.splits.length,0);
 assert.equal(hud('localPosition').textContent,label,'restart must initialize the current mode');
 assert.equal(hud('eventLabel').textContent,'汐见海岸');assert.equal(q.bots.length,bots);
 assert.equal(hud('coach').hidden,event!=='practice');
}
q.goHome();
// Real academy positions from the manual same-corner run, not a mocked curve.
// Both labels must agree in the same rendered HUD update, including the
// previously stale coach message at 281–286 m and boost advice at 162/189 m.
q.choose('academy-reborn');q.event='practice';q.start();q.state='running';
for(const s of [162,189,281,283.9,286.1]){
 Object.assign(q.player,{s,speed:40,nitro:1,nitroTime:0,smallJets:0,drifting:false,driftPhase:'grip'});
 q.updateRaceFeatures(.2);q.updateHUD(.061);
 assert.equal(hud('turnText').textContent,'前方左弯',`academy ${s} m route`);
 assert.match(hud('coach').textContent,/左弯/,`academy ${s} m coach must agree with route`);
 assert.doesNotMatch(hud('coach').textContent,/直道|消耗一瓶|E \/ C/,`academy ${s} m must not invite nitro into the bend`);
}
// A coach update must not wait for the slower position/sector refresh.
Object.assign(q.player,{s:130,speed:20});q.updateHUD(.061);
assert.equal(hud('turnText').textContent,'前方直道');
assert.match(hud('coach').textContent,/可选 E \/ C 氮气/);
q.player.s=162;q.updateHUD(.061);
assert.equal(hud('turnText').textContent,'前方左弯');
assert.match(hud('coach').textContent,/左弯/);
assert.doesNotMatch(hud('coach').textContent,/E \/ C/);
// Live driving actions have one priority; inventory must not replace recovery,
// and already-running nitro must not invite spending another bottle.
const coachBase={s:281,speed:40,nitro:1,nitroTime:0,smallJets:0,smallWindow:0,drifting:false,driftPhase:'grip',exitTime:0};
const coachCases=[
 [{},/左弯.*收油控速/,/Shift|E \/ C/],
 [{drifting:true,driftPhase:'entry',smallJets:2,smallWindow:1.5,nitroTime:1},/^起漂中/,/点空格|消耗一瓶/],
 [{drifting:true,driftPhase:'hold',smallJets:2,smallWindow:1.5},/^漂移中/,/点空格|E \/ C/],
 [{drifting:true,driftPhase:'counter',smallJets:2,smallWindow:1.5},/^反打收车.*小喷已就绪/,/点空格|E \/ C/],
 [{drifting:true,driftPhase:'release',nitroTime:1},/^收漂中/,/反打收车|松开 Shift|氮气喷射中/],
 [{driftPhase:'exit',exitTime:.45,smallJets:2,smallWindow:1.5},/^收漂中.*小喷已就绪/,/点空格|E \/ C/],
 [{smallJets:2,smallWindow:1.5,nitroTime:1},/^小喷 ×2.*双喷/,/E \/ C/],
 [{smallJets:1,smallWindow:1.5},/^小喷 ×1/,/连续两次|双喷|E \/ C/],
 [{smallJets:2,smallWindow:0},/左弯/,/小喷/],
 [{nitroTime:1},/^氮气喷射中.*左弯/,/消耗一瓶|可选 E \/ C/],
 [{s:130,nitroTime:1},/^氮气喷射中.*无需重复/,/可选|消耗一瓶/],
 [{s:6},/^前方直道：稳住方向/,/可选 E \/ C/],
 [{speed:0},/^W \/ ↑ 加速/,/起漂|消耗一瓶/],
];
for(const [state,expected,forbidden] of coachCases){
 Object.assign(q.player,coachBase,state);q.updateHUD(.061);
 assert.match(hud('coach').textContent,expected,JSON.stringify(state));
 assert.doesNotMatch(hud('coach').textContent,forbidden,JSON.stringify(state));
}
// All shipped circuits keep the same route direction as before, including the
// start/finish seam and wrapped headings. Every grip-mode bend uses that label.
for(const id of Object.keys(q.tracks)){
 q.choose(id);q.event='practice';q.state='running';
 for(let s=-8;s<q.raceDistance()+62;s+=7){
  const dh=q.road(s+62).h-q.road(s+32).h,turn=Math.atan2(Math.sin(dh),Math.cos(dh));
  const direction=Math.abs(turn)<.05?0:Math.sign(turn);
  Object.assign(q.player,coachBase,{s});q.updateHUD(.061);
  assert.equal(q.routePreview(s).direction,direction,`${id} ${s} m`);
  assert.equal(hud('turnText').textContent,direction>0?'前方右弯':direction<0?'前方左弯':'前方直道');
  if(direction){assert.match(hud('coach').textContent,direction>0?/右弯/:/左弯/);assert.doesNotMatch(hud('coach').textContent,/直道|E \/ C/)}
 }
}
q.choose('coast-reborn');q.goHome();
const zero=()=>{q.reset(false);q.state='running';q.event='timeTrial';q.prepareRaceFeatures();q.player.l=0};
// Buffer: drift pressed just before steering still enters on a small input.
zero();q.player.vS=22;q.player.speed=22;q.input.drift=true;q.controlEdges.drift=1;q.physics(1/120);q.input.right=true;q.physics(1/120);assert(q.player.drifting,'buffered drift');assert.equal(q.player.driftSide,1);
for(let i=0;i<55;i++)q.physics(1/120);q.input.right=false;q.input.left=true;for(let i=0;i<18;i++)q.physics(1/120);assert(q.player.smallJets>0,'countersteer awards mini');
q.input.left=false;q.input.drift=false;for(let i=0;i<70;i++)q.physics(1/120);assert(!q.player.drifting,'release exits slide');
// Analog intent follows the same drift path as keyboard.
zero();q.player.vS=22;q.player.speed=22;q.assisted=.35;q.input.drift=true;q.physics(1/120);assert(q.player.drifting,'analog drift');q.assisted=null;
// A mini changes propulsion, not heading: both states get identical steer.
zero();Object.assign(q.player,{vS:22,vL:7,yaw:.65,turnRate:.3,steering:.3});const a={...q.player},b={...a,mini:.7};q.VehicleModel.step(a,{gas:true,steer:.3},1/120);q.VehicleModel.step(b,{gas:true,steer:.3},1/120);assert(Math.abs(Math.atan2(a.vL,a.vS)-Math.atan2(b.vL,b.vS))<1e-10);assert(b.speed>a.speed);
// Rail contact removes penetration without killing tangential travel.
zero();Object.assign(q.player,{l:8,vS:30,vL:12,yaw:.2,speed:32});q.resolveContacts(1/120);assert(q.player.l<7.2);assert(q.player.vS>20);assert(q.player.vL<12);
// Movable obstacle gets momentum and no health penalty.
zero();const cone={kind:'cone',s:0,l:0,width:.85};q.chunks.get(0).entities.push(cone);Object.assign(q.player,{s:-1.7,l:0,vS:25,speed:25});q.resolveContacts(1/120);assert((cone.vS||0)>0,'cone gets momentum');assert(q.player.vS>0);q.chunks.get(0).entities.pop();
// Reversing keeps the nose facing forward over sustained backing.
zero();for(let i=0;i<240;i++)q.VehicleModel.step(q.player,{gas:false,brake:true,steer:0},1/120);assert(q.player.vS< -3);assert(Math.abs(q.player.yaw)<.03,'reverse must not turn nose 180 degrees');
// Menus preserve game state and garage affects real profile.
w.document.querySelector('#settingsBtn').click();assert.equal(q.state,'paused');w.document.querySelector('#closeSettings').click();assert.equal(q.state,'running');w.document.querySelector('#garageBtn').click();w.document.querySelectorAll('#garageGrid button')[1].click();assert.equal(q.profile.paint,'#efabc8');w.document.querySelector('#closeGarage').click();w.document.querySelector('#settingsBtn').click();w.document.querySelector('#garageBtn').click();assert(w.document.querySelector('#settingsPanel').hidden);w.document.querySelector('#closeGarage').click();assert.equal(q.state,'running');q.goHome();assert.equal(q.state,'ready');
const results=[];
for(const id of Object.keys(q.tracks)){
 q.choose(id);q.event='timeTrial';q.state='running';q.prepareRaceFeatures();q.player.l=0;q.demo=true;let maxL=0,steps=0;
 for(;steps<120*240&&q.state==='running';steps++){q.updateDrivingAssists(1/120);q.physics(1/120);assert(Number.isFinite(q.player.s)&&Number.isFinite(q.player.yaw));maxL=Math.max(maxL,Math.abs(q.player.l))}
 results.push({track:id,state:q.state,time:+q.elapsed.toFixed(2),distance:Math.round(q.raceDistance()),maxL:+maxL.toFixed(2),steps});assert.equal(q.state,'finished',id+' demo must finish');assert(maxL<7.3,id+' lane bound');assert(q.splits.length>=3,'sector timing');
 q.event='timeTrial';q.prepareRaceFeatures();assert(q.ghostNode&&q.ghostRun.points.length>10,'best ghost persists and loads');
 const view=q.sceneFrame(0,1/60);q.renderRaceFeatures(view.origin,1/60);
}
// Stress contact, drift and boost transitions at the fixed simulation step.
zero();let seed=3,maxSpeed=0;for(let i=0;i<6000;i++){seed=(Math.imul(seed,1664525)+1013904223)>>>0;if(i%45===0){q.input.left=!!(seed&1);q.input.right=!!(seed&2);q.input.drift=!!(seed&4);q.input.gas=true;q.input.brake=!!(seed&16);q.input.boost=!!(seed&32);q.input.small=!!(seed&64)}q.physics(1/120);assert([q.player.s,q.player.l,q.player.yaw,q.player.speed].every(Number.isFinite));assert(Math.abs(q.player.l)<8);maxSpeed=Math.max(maxSpeed,q.player.speed)}assert(maxSpeed<84);
// Exercise real Three.js geometry/material/instancing APIs with a draw stub.
// This validates scene adaptation, not actual GPU shader output.
globalThis.devicePixelRatio=1;
const rendererSource=readFileSync('render-three.js','utf8').replace('new THREE.WebGLRenderer(', 'new FakeRenderer(');
const fake=`class FakeRenderer{constructor(){this.shadowMap={};this.info={render:{calls:0,triangles:0}}}setPixelRatio(){}setSize(){}render(scene){scene.updateMatrixWorld();this.info.render.calls=scene.children.filter(n=>n.visible&&n.isInstancedMesh).length}}\n`;
const renderBuild=await build({stdin:{contents:fake+rendererSource,resolveDir:process.cwd(),loader:'js'},bundle:true,write:false,format:'esm',target:'es2022',logLevel:'silent'});
const {createThreeBackend}=await import('data:text/javascript;base64,'+Buffer.from(renderBuild.outputFiles[0].text).toString('base64'));
const backend=createThreeBackend({getContext:()=>({})}),view=q.sceneFrame(0,1/60);q.renderRaceFeatures(view.origin,1/60);const drawList=q.renderList();assert(drawList.length>100);
for(const item of drawList){assert(Array.from(item.mesh.sourceData).every(Number.isFinite));assert(Array.from(item.m).every(Number.isFinite))}
const stats=backend.render(drawList,view,1280,720,62,{quality:'high'});assert(stats.drawCalls>20);backend.render(drawList,view,800,600,65,{quality:'low'});assert.equal(backend.renderer.shadowMap.enabled,false);
const disposable=drawList.find(d=>d.mesh.onDispose);disposable.mesh.dispose();backend.render(drawList,view,800,600,65,{quality:'medium'});
assert.equal(errors.length,0,errors.join('\n'));console.log('Client integration passed: startup + fallback drawing, drift buffer/analog/release, mini heading, rail/cone impulses, reverse, menus/garage, full circuits');console.table(results);await w.happyDOM.close();
