// Assembled client/DOM with normal menu and input handlers, fixed-step CPU simulation.
// Canvas drawing is stubbed. This is NOT a browser, WebGL or subjective driving test.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';
import {Window} from 'happy-dom';
const {clientSource}=await import('../build.mjs');
const w=new Window({url:'http://race.test/?raceReview=1',settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}}),errors=[];
w.console.error=(...a)=>errors.push(a.join(' '));w.addEventListener('error',event=>errors.push(String(event.error||event.message)));w.requestAnimationFrame=()=>1;w.fetch=async()=>new Response(JSON.stringify({runs:[]}),{headers:{'content-type':'application/json'}});
const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:()=>{}});
w.HTMLCanvasElement.prototype.getContext=t=>t==='2d'?ctx:null;
Object.defineProperties(w.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
w.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
// No state, player, best-record or deadline setter: only the production frame
// advances the simulation. The normal demo button uses the existing AI driver.
const source=clientSource(`window.roadQA={formatTime,raceReviewDelta,step(){frame(gameClock.now(),1/30,false)},get splits(){return [...raceSplits]},get lapTimes(){return [...lapTimes]},get best(){return ghostRun},get tracks(){return TRACKS},get elapsed(){return elapsed},get state(){return state},get dnf(){return raceDNF}};`,'road');
const compiled=await build({stdin:{contents:source,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2022',logLevel:'silent'});w.eval(compiled.outputFiles[0].text);
const q=w.roadQA;assert.ok(q,errors.join('\n'));
const node=id=>w.document.getElementById(id),rows=()=>[...node('raceReview').querySelectorAll('tbody tr')];
function until(predicate,seconds=300){for(let i=0;i<30*seconds&&!predicate();i++)q.step();assert.ok(predicate(),'normal simulation reached expected state within '+seconds+' s');}
function choose(id,event='timeTrial',demo=true){node('eventType').value=event;node('eventType').dispatchEvent(new w.Event('change'));w.document.querySelector(`[data-track="${id}"]`).click();node(demo?'demoBtn':'startBtn').click();assert.equal(q.state,'countdown');}
function home(){node('newRouteBtn').click();assert.equal(q.state,'ready');assert.equal(node('raceReview').hidden,true);assert.equal(node('raceReview').children.length,0);assert.equal(node('raceObjective').hidden,true);}
function checkSegments(reference=null){const expected=q.splits.map((time,i)=>time-(q.splits[i-1]||0));assert.equal(rows().length,expected.length);expected.forEach((seconds,i)=>{assert.equal(rows()[i].children[1].textContent,q.formatTime(seconds),'actual segment '+i);assert.equal(rows()[i].children[2].textContent,reference?q.raceReviewDelta(seconds-(reference.splits[i]-(reference.splits[i-1]||0))):'无基准','same pre-race best segment '+i);});}
try{
 assert.equal(node('raceBrief').hidden,false,'startup briefing follows event settings');
 const results=[];
 for(const id of Object.keys(q.tracks)){
  choose(id);assert.match(node('raceObjective').textContent,/第一份本机计时/);
  until(()=>q.state==='finished');assert.equal(q.dnf,false);assert.equal(rows().length,q.tracks[id].laps*3,id+' actual crossing data reaches result table');
  assert.equal(node('raceReview').hidden,false);assert.equal(node('raceObjective').hidden,true);assert.match(node('raceReview').textContent,/首个完赛基准/);checkSegments();assert.equal(q.lapTimes.length,q.tracks[id].laps);
  const first={track:id,segments:rows().length,time:q.elapsed};home();
  choose(id);assert.ok(q.best,'saved ghost loads on restart');assert.match(node('raceObjective').textContent,/挑战本机最佳用时/);assert.equal(node('raceReview').children.length,0);
  const reference=JSON.parse(JSON.stringify(q.best));until(()=>q.state==='finished');assert.equal(q.dnf,false);assert.deepEqual(JSON.parse(JSON.stringify(q.best)),reference,'finish does not replace the race-start comparison');checkSegments(reference);assert.match(node('raceReview').textContent,/相对赛前最佳/);
  results.push({...first,comparisonTime:q.elapsed});
  node('retryBtn').click();assert.equal(q.state,'countdown');assert.equal(node('raceReview').hidden,true);assert.equal(node('raceReview').children.length,0);
  until(()=>q.state==='running');node('pauseBtn').click();node('pauseHome').click();assert.equal(q.state,'ready');assert.equal(node('raceReview').children.length,0);
 }
 // Natural AI finish deadline, once with a completed segment and once without.
 choose('coast-reborn','race');until(()=>q.splits.length>=1);
 w.document.body.dispatchEvent(new w.KeyboardEvent('keydown',{code:'KeyS',bubbles:true,cancelable:true}));until(()=>q.state==='finished');
 w.document.body.dispatchEvent(new w.KeyboardEvent('keyup',{code:'KeyS',bubbles:true,cancelable:true}));
 assert.equal(q.dnf,true);assert.ok(rows().length>0&&rows().length<3);assert.equal(rows().length,q.splits.length);assert.match(node('raceReview').textContent,/未完赛/);assert.doesNotMatch(node('raceReview').textContent,/相对赛前最佳/);home();
 choose('coast-reborn','race',false);until(()=>q.state==='finished');assert.equal(q.dnf,true);assert.equal(rows().length,0);assert.match(node('raceReview').textContent,/尚未完成第一个/);home();
 choose('academy-reborn','practice');assert.equal(node('raceReview').hidden,true);assert.match(node('raceObjective').textContent,/入弯前制动/);
 assert.deepEqual(errors,[]);console.log('Race review CPU client (normal handlers, fixed-step; no browser):',JSON.stringify(results));
}finally{await w.happyDOM.close();}

// Production bundles: query composition does not replace capture clock/storage
// isolation or leak the feature into legacy/Rapier. No browser is launched here.
async function production(query,entry='game.js'){
 const window=new Window({url:'https://race.test/'+query,settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}}),errors=[],frames=[];
 window.console.error=(...args)=>errors.push(args.map(String).join(' '));window.console.warn=()=>{};
 window.requestAnimationFrame=callback=>{frames.push(callback);return frames.length;};
 window.HTMLCanvasElement.prototype.getContext=type=>type==='2d'?ctx:null;
 Object.defineProperties(window.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
 window.localStorage.setItem('star-rush-profile',JSON.stringify({name:'Saved Driver',paint:'#edc784',car:'Solar Flare'}));
 window.localStorage.setItem('star-rush-settings-road-v2',JSON.stringify({quality:'low',autoGas:true}));
 const storage=()=>Array.from({length:window.localStorage.length},(_,i)=>[window.localStorage.key(i),window.localStorage.getItem(window.localStorage.key(i))]);const before=storage();
 window.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
 window.eval(readFileSync('dist/client/'+entry,'utf8'));
 return {window,errors,frames,before,storage};
}
const captures=[];
for(const query of ['?shot=coast-chase&t=4&frames=2','?shot=coast-chase&t=4&frames=2&raceReview=1']){
 const f=await production(query);try{
  const deadline=Date.now()+20000;while(!f.window.__shot?.ready&&!f.window.__shot?.error&&Date.now()<deadline)await new Promise(resolve=>setTimeout(resolve,2));
  assert.equal(f.window.__shot?.ready,true);assert.equal(f.frames.length,0);assert.deepEqual(f.storage(),f.before);assert.deepEqual(f.errors,[]);
  captures.push(JSON.parse(JSON.stringify(f.window.__shot)));f.window.dispatchEvent(new f.window.Event('pagehide'));
 }finally{await f.window.happyDOM.close();}
}
assert.deepEqual(captures[1],captures[0],'raceReview query leaves exact production capture snapshot unchanged');
for(const [query,entry] of [['','game.js'],['?raceReview=0','game.js'],['?raceReview=1','legacy/game.js']]){
 const f=await production(query,entry);try{for(const id of ['raceBrief','raceObjective','raceReview'])assert.equal(f.window.document.getElementById(id).hidden,true);assert.equal(f.window.__shot,undefined);assert.ok(f.frames.length>0);assert.deepEqual(f.errors,[]);}finally{await f.window.happyDOM.close();}
}
const {default:worker}=await import('../dist/server/index.js');
for(const path of ['/rapier/','/rapier/comparison.js','/game.js','/road/game.js','/legacy/game.js']){
 const body=async query=>{const response=await worker.fetch(new Request('https://race.test'+path+query),{});assert.equal(response.status,200);return response.text();};
 assert.equal(await body('?raceReview=1&shot=coast-chase'),await body(''),path+' query cannot swap isolated route assets');
}
console.log('Race review production CPU guard: default/legacy gating, capture snapshot + storage, and Rapier/route query isolation passed.');
