import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {Window} from 'happy-dom';
import {build} from 'esbuild';
import {clientSource} from '../build.mjs';
test('Canvas and mesh ghost consumers share interpolated pose and clear stale states',()=>{
 const source=readFileSync('race-features.js','utf8');
 const render=source.slice(source.indexOf('function renderRaceFeatures('),source.indexOf('let frameDurations='));
 const canvas=readFileSync('software-renderer.js','utf8').split('\n').find(line=>line.includes('if(ghostPose&&'));
 assert(canvas,'actual Canvas consumer must use the shared pose');
 const calls=[],node={},context={raceBots:[],ghostPose:null,ghostNode:node,ghostRun:{points:[[0,0,0,3.12,0],[.1,10,2,-3.12,1]]},state:'running',ghostCursor:0,raceClock:()=>.05,settings:{line:false,ghost:true},world:{add(){}},clamp:(x,a,b)=>Math.max(a,Math.min(b,x)),mix:(a,b,u)=>a+(b-a)*u,wrapAngle:x=>Math.atan2(Math.sin(x),Math.cos(x)),road:()=>({h:0}),atRoad:(s,l,y)=>[s,y,l],sub:(a,b)=>a.map((v,i)=>v-b[i]),trs:(position,scale,rotation)=>({position,scale,rotation}),drawKart:(...args)=>calls.push(args)};
 vm.createContext(context);vm.runInContext(render,context);context.renderRaceFeatures([0,0,0],1/60);vm.runInContext(canvas,context);
 assert.equal(context.ghostPose.s,5);assert.equal(context.ghostPose.l,1);assert.equal(context.ghostPose.jump,.5);assert(Math.abs(context.ghostPose.yaw-Math.PI)<1e-9,'yaw crosses shortest arc');
 assert.deepEqual(calls[0],[5,1,context.ghostPose.yaw,.5,'#b8e9e6',.35]);assert.equal(node.local.position[0],5);assert(Math.abs(node.local.position[1]-.57)<1e-9);
 for(const state of ['paused','ready','finished']){context.state=state;context.renderRaceFeatures([0,0,0],1/60);vm.runInContext(canvas,context);assert.equal(context.ghostPose,null)}
 assert.equal(calls.length,1);context.state='running';context.settings.ghost=false;context.renderRaceFeatures([0,0,0],1/60);vm.runInContext(canvas,context);assert.equal(context.ghostPose,null);assert.equal(calls.length,1,'disabled Canvas consumer draws no ghost');
 context.settings.ghost=true;context.renderRaceFeatures([0,0,0],1/60);vm.runInContext(canvas,context);assert.equal(calls.length,2,'restored Canvas consumer uses the shared pose');
 context.ghostNode=null;context.renderRaceFeatures([0,0,0],1/60);assert.equal(context.ghostPose,null);
});

test('ghost eligibility stays offline circuit time trial, independent of display preference',()=>{
 const source=readFileSync('race-features.js','utf8'),prepare=source.slice(source.indexOf('function prepareRaceFeatures('),source.indexOf('function roadDriverControls('));
 for(const setting of [false,true])for(const [mode,event,online,best,eligible] of [
  ['circuit','timeTrial',false,true,true],['circuit','timeTrial',true,true,false],
  ['circuit','race',false,true,false],['circuit','practice',false,true,false],
  ['endless','timeTrial',false,true,false],['circuit','timeTrial',false,false,false]
 ]){
  const c={raceMode:mode,eventType:event,net:{room:online?{}:null},settings:{ghost:setting},player:{},rivalPaint:['a','b','c'],rivalNames:['a','b','c'],getBestGhost:()=>best?{points:[[0,0,0,0,0],[1,10,0,0,0]]}:null,$:()=>({replaceChildren(){}}),cloneCar:()=>({root:{}}),updateLocalPosition(){},updateCoach(){}};
  vm.createContext(c);vm.runInContext(prepare,c);c.prepareRaceFeatures();
  assert.equal(!!c.ghostNode,eligible,JSON.stringify({setting,mode,event,online,best}));
 }
});

// Real assembled client, ordinary start/settings handlers, natural fixed-step clocks.
// Canvas/audio/network are stubs. This is CPU consumer proof, not browser input or pixels.
const savedGhost={time:100,points:[[0,0,0,0,0],[5,50,.5,.1,0],[10,100,1,.2,0],[20,200,0,.3,0],[100,1000,0,0,0]],splits:[30,60,100],laps:[100],date:1};
const hooks=`window.ghostQA={frame,get snapshot(){return JSON.parse(JSON.stringify({state,eventType,raceMode,setting:settings.ghost,node:!!ghostNode,pose:ghostPose,inScene:!!ghostNode&&world.children.includes(ghostNode),cursor:ghostCursor,clock:raceClock(),simulation:{routeSeed,elapsed,player,ghostPoints,ghostClock,raceSplits,lapTimes,nextSector,nextLap,ghostRun}}))}};`;
const compiled=new Map();
async function environment(model){
 if(!compiled.has(model))compiled.set(model,(await build({stdin:{contents:clientSource(hooks,model),resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2022',logLevel:'silent'})).outputFiles[0].text);
 const ghostKey='star-rush-best-reborn-'+(model==='road'?'road-v2-':'')+'coast-reborn',settingsKey=model==='road'?'star-rush-settings-road-v2':'star-rush-settings-reborn';
 const data=new Map([[ghostKey,JSON.stringify(savedGhost)]]),errors=[];
 const w=new Window({url:'https://ghost.test/'+(model==='road'?'road/':'legacy/'),settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}});
 Object.defineProperty(w,'localStorage',{configurable:true,get:()=>({getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,String(v))})});
 w.console.error=(...a)=>errors.push(a.join(' '));w.requestAnimationFrame=()=>1;w.fetch=async()=>{throw Error('offline')};
 const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:()=>{}});
 w.HTMLCanvasElement.prototype.getContext=t=>t==='2d'?ctx:null;
 Object.defineProperties(w.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
 w.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
 w.eval(compiled.get(model));assert.deepEqual(errors,[]);assert(w.ghostQA);
 const q=w.ghostQA,$=id=>w.document.getElementById(id);let frame=0;
 const step=(n=1)=>{for(let i=0;i<n;i++)q.frame(++frame*1000/60,1/60,false)};
 const setting=value=>{
  const prior=q.snapshot,sim=JSON.stringify(prior.simulation);
  $('settingsBtn').onclick();assert.equal(q.snapshot.state,prior.state==='running'?'paused':prior.state);assert.equal($('settingsPanel').hidden,false);
  $('ghostSetting').checked=value;$('ghostSetting').onchange({target:$('ghostSetting')});
  assert.equal(q.snapshot.setting,value);assert.equal(JSON.parse(data.get(settingsKey)).ghost,value);
  assert.equal(JSON.stringify(q.snapshot.simulation),sim,'setting does not reset replay, clocks or recording');
  $('closeSettings').onclick();assert.equal(q.snapshot.state,prior.state);
 };
 const start=()=>{$('startBtn').onclick();for(let i=0;i<240&&q.snapshot.state==='countdown';i++)step();assert.equal(q.snapshot.state,'running');step()};
 $('eventType').value='timeTrial';$('eventType').onchange({target:$('eventType')});
 return {w,q,step,setting,start,errors,data,ghostKey};
}
const digest=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
for(const model of ['road','legacy'])test(model+' assembled settings hide, catch up and enable a ghost without restarting',async t=>{
 const e=await environment(model),control=await environment(model);t.after(()=>Promise.all([e.w.happyDOM.close(),control.w.happyDOM.close()]));
 const {q}=e,rows=[];
 const record=label=>{const s=q.snapshot;rows.push({label,clock:s.clock,pose:s.pose,inScene:s.inScene,cursor:s.cursor,recorded:s.simulation.ghostPoints.length,simulationHash:digest(s.simulation)})};
 const sameSimulation=()=>assert.equal(digest(q.snapshot.simulation),digest(control.q.snapshot.simulation),'display preference must not change simulation, saved replay, splits or recording');
 const visible=()=>{const s=q.snapshot;assert(s.node&&s.inScene&&s.pose,'both shared scene node and Canvas pose are present');assert(Math.abs(s.pose.s-s.clock*10)<1e-8,'ghost is sampled at current race clock');assert.equal(JSON.stringify(s.pose),JSON.stringify(control.q.snapshot.pose));sameSimulation()};
 e.start();control.start();visible();record('initial true');
 e.setting(false);control.setting(true);e.step();control.step();
 assert.equal(q.snapshot.pose,null,'unchecked setting must clear the Canvas pose on resume');assert.equal(q.snapshot.inScene,false,'unchecked setting must remove the shared mesh node');sameSimulation();record('hidden on resume');
 const pointsBefore=q.snapshot.simulation.ghostPoints.length;e.step(1200);control.step(1200);
 assert.equal(q.snapshot.pose,null);assert.equal(q.snapshot.inScene,false);assert(q.snapshot.clock>20);assert(q.snapshot.simulation.ghostPoints.length>pointsBefore,'recording continues while hidden');sameSimulation();record('hidden for 20 seconds');
 e.setting(true);control.setting(true);e.step();control.step();visible();assert(q.snapshot.cursor>=3,'cursor catches up across hidden replay segments');record('restored at current clock');
 e.setting(false);control.setting(true);e.start();control.start();assert.equal(q.snapshot.pose,null);assert.equal(q.snapshot.inScene,false);sameSimulation();record('new race starts false');
 e.step(600);control.step(600);e.setting(true);control.setting(true);e.step();control.step();visible();assert(q.snapshot.cursor>=2);record('enabled in same initially-hidden race');
 assert.equal(e.data.get(e.ghostKey),JSON.stringify(savedGhost),'best replay data remains byte-identical');assert.deepEqual(e.errors,[]);assert.deepEqual(control.errors,[]);
 t.diagnostic(JSON.stringify({model,assembledSha256:createHash('sha256').update(compiled.get(model)).digest('hex'),rows}));
});
