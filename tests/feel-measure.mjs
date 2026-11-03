// CPU-only measurement of the shipped road model and real assembled physics.
// No rendering, browser, audio timing or Rapier claims. Run from repository root.
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
import {Window} from 'happy-dom';
import {clientSource} from '../build.mjs';
import {RoadVehicleModel as Road} from '../road-vehicle-core.js';
const dt=1/120, out=process.argv[2], candidate=process.argv.includes('--power-tires');
if(!out)throw Error('Provide a new output directory');
mkdirSync(out,{recursive:false});
const fixture=JSON.parse(readFileSync('tests/fixtures/feel-inputs.json','utf8'));
const rows=[], summaries=[];
function record(id,tick,p,input){const row={id,tick,time:tick*dt,input:{...input},s:p.s??null,l:p.l??null,kmh:p.speed*3.6,yaw:p.yaw,spin:p.spin,steer:p.roadSteer,slip:Road.wrap(p.yaw-p.velocityYaw),drifting:!!p.drifting,...(candidate?{ax:p.roadAx??null,ay:p.roadAy??null,loads:p.roadLoads??null}:{})};assert(Object.values(row).filter(x=>typeof x==='number').every(Number.isFinite));rows.push(row);return row;}
function summarize(id,run){const crossing=run.find(r=>r.kmh>=100),firstYaw=run.find(r=>Math.abs(r.yaw)>1e-9);return {id,ticks:run.length-1,endKmh:run.at(-1).kmh,maxKmh:Math.max(...run.map(r=>r.kmh)),zeroTo100Seconds:crossing?.time??null,firstYawTick:firstYaw?.tick??null,maxAbsSlipDegrees:Math.max(...run.map(r=>Math.abs(r.slip)))*180/Math.PI,atOneSecond:run[120]?{kmh:run[120].kmh,yawDegrees:run[120].yaw*180/Math.PI,slipDegrees:run[120].slip*180/Math.PI,s:run[120].s,l:run[120].l}:null,driftSeconds:run.filter(r=>r.tick>0&&r.drifting).length*dt};}
function replayModel(f){const p={s:0,l:0,vS:f.initialKmh/3.6,vL:0,speed:f.initialKmh/3.6,yaw:0,spin:0,roadSteer:0,velocityYaw:0},run=[record(f.id,0,p,{})];let tick=0;for(const phase of f.phases)for(let i=0;i<phase.ticks;i++){Road.step(p,phase.input,dt,{powerTires:candidate});p.s+=p.vS*dt;p.l+=p.vL*dt;run.push(record(f.id,++tick,p,phase.input));}summaries.push(summarize(f.id,run));return run;}
for(const f of fixture.model)replayModel(f);
// Isolated model repeat must be exactly identical, not just close on final state.
const before=rows.length,again=replayModel(fixture.model[0]);assert.deepEqual(again,rows.slice(0,again.length));rows.splice(before);summaries.pop();
const w=new Window({url:'http://race.test/'+(candidate?'?handling=power-tires-v1':''),settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}}),errors=[];
w.console.error=(...a)=>errors.push(a.join(' '));w.requestAnimationFrame=()=>1;w.fetch=async()=>new Response(JSON.stringify({runs:[]}),{headers:{'content-type':'application/json'}});
const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:()=>{}});
w.HTMLCanvasElement.prototype.getContext=t=>t==='2d'?ctx:null;
Object.defineProperties(w.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
w.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
const source=clientSource(`window.feelQA={player,input,physics,choose(){activeTrackId='academy-reborn';raceMode='circuit';eventType='practice';settings.autoGas=false;settings.sensitivity=1;demoDriving=false;assistedSteer=null;start();state='running'},};`,'road');
const compiled=await build({stdin:{contents:source,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2022',logLevel:'silent'});w.eval(compiled.outputFiles[0].text);
const q=w.feelQA;assert(q,errors.join('\n'));
for(const f of fixture.client){q.choose();Object.assign(q.player,{vS:f.initialKmh/3.6,vL:0,speed:f.initialKmh/3.6});const run=[record(f.id,0,q.player,{})];let tick=0;for(const phase of f.phases)for(let i=0;i<phase.ticks;i++){Object.assign(q.input,{gas:false,brake:false,left:false,right:false,drift:false,small:false,boost:false},phase.input);q.physics(dt);run.push(record(f.id,++tick,q.player,phase.input));}summaries.push(summarize(f.id,run));}
assert.deepEqual(errors,[]);await w.happyDOM.close();
const byId=Object.fromEntries(summaries.map(s=>[s.id,s]));
assert(byId['model-60-brake'].endKmh<byId['model-60-coast'].endKmh);
assert(byId['model-60-turn-release'].firstYawTick===1);
assert(Math.abs(byId['client-academy-60-brake'].endKmh-byId['model-60-brake'].endKmh)<1e-8);
assert(Math.abs(byId['client-academy-60-coast'].endKmh-byId['model-60-coast'].endKmh)<1e-8);
const hashes=Object.fromEntries(['road-vehicle-core.js','vehicle-core.js','handling.js','race.js','circuit.js','tests/fixtures/feel-inputs.json','tests/feel-measure.mjs'].map(p=>[p,createHash('sha256').update(readFileSync(p)).digest('hex')]));
writeFileSync(out+'/ticks.jsonl',rows.map(r=>JSON.stringify(r)).join('\n')+'\n');
writeFileSync(out+'/summary.json',JSON.stringify({kind:'CPU simulation; not screen frames',candidate,dt,hashes,fixture,summaries},null,2)+'\n');
console.log(JSON.stringify(summaries,null,2));
