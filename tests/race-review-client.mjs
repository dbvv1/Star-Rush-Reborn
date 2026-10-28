// Real assembled client/DOM and fixed-step simulation. Drawing is stubbed;
// this is NOT browser/WebGL or subjective driving acceptance.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';
import {Window} from 'happy-dom';
const {clientSource}=await import('../build.mjs');
const w=new Window({url:'http://race.test/?raceReview=1',settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}}),errors=[];
w.console.error=(...a)=>errors.push(a.join(' '));w.requestAnimationFrame=()=>1;w.fetch=async()=>new Response(JSON.stringify({runs:[]}),{headers:{'content-type':'application/json'}});
const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:()=>{}});
w.HTMLCanvasElement.prototype.getContext=t=>t==='2d'?ctx:null;
Object.defineProperties(w.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
w.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
const source=clientSource(`window.roadQA={formatTime,goHome,finish,updateRaceReview,updateRaceBrief,get splits(){return raceSplits},get lapTimes(){return lapTimes},get best(){return ghostRun},get tracks(){return TRACKS},forceDeadline(){firstFinish=elapsed-31},player,input,physics,start,reset,updateHUD,updateDrivingAssists,updateRaceFeatures,resolveContacts,road,raceDistance,VehicleModel,get bots(){return raceBots},get chunks(){return chunks},get elapsed(){return elapsed},get state(){return state},set state(v){state=v},set demo(v){demoDriving=v},get dnf(){return raceDNF},choose(id,event='practice'){activeTrackId=id;raceMode='circuit';eventType=event;start()},};`,'road');
const compiled=await build({stdin:{contents:source,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2022',logLevel:'silent'});w.eval(compiled.outputFiles[0].text);
const q=w.roadQA;assert.ok(q,errors.join('\n'));
const node=id=>w.document.getElementById(id);
assert.equal(node('raceBrief').hidden,false,'actual startup initializes briefing after event settings');
const results=[];
for(const id of Object.keys(q.tracks)){
 q.choose(id,'timeTrial');assert.equal(q.state,'countdown');assert.match(node('raceObjective').textContent,/第一份本机计时/);
 q.state='running';q.demo=true;
 for(let i=0;i<120*240&&q.state==='running';i++){q.updateDrivingAssists(1/120);q.physics(1/120);}
 assert.equal(q.state,'finished',id);assert.equal(q.dnf,false);
 const rows=node('raceReview').querySelectorAll('tbody tr');assert.equal(rows.length,q.tracks[id].laps*3,id+' actual crossing data reaches result table');
 assert.equal(node('raceReview').hidden,false);assert.equal(node('raceObjective').hidden,true);
 assert.match(node('raceReview').textContent,/首个完赛基准/);
 const expected=q.splits.map((time,i)=>time-(q.splits[i-1]||0));assert.equal(rows.length,expected.length);expected.forEach((seconds,i)=>assert.equal(rows[i].children[1].textContent,q.formatTime(seconds),id+' real segment '+i));
 assert.equal(q.lapTimes.length,q.tracks[id].laps);
 results.push({track:id,segments:rows.length,finished:q.state,time:q.elapsed});
 q.goHome();assert.equal(node('raceReview').hidden,true);assert.equal(node('raceObjective').hidden,true);
 q.choose(id,'timeTrial');assert.ok(q.best,'real saved ghost loads on restart');assert.match(node('raceObjective').textContent,/挑战本机最佳用时/);
 assert.equal(node('raceReview').children.length,0);
}
q.choose('coast-reborn','race');q.state='running';q.forceDeadline();q.updateRaceFeatures(1/120);
assert.equal(q.state,'finished');assert.equal(q.dnf,true);assert.match(node('raceReview').textContent,/未完赛/);assert.match(node('raceReview').textContent,/尚未完成第一个/);
q.choose('coast-reborn','practice');assert.equal(node('raceReview').hidden,true);assert.match(node('raceObjective').textContent,/入弯前制动/);
assert.deepEqual(errors,[]);console.log('Race review actual CPU client:',JSON.stringify(results));await w.happyDOM.close();
