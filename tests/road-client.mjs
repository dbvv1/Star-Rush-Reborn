// Real assembled client/DOM and fixed-step simulation. Drawing is stubbed;
// this is NOT browser/WebGL or subjective driving acceptance.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';
import {Window} from 'happy-dom';
const {clientSource}=await import('../build.mjs');
const candidate=process.argv.includes('--power-tires');
const w=new Window({url:'http://race.test/'+(candidate?'?handling=power-tires-v1':''),settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}}),errors=[];
w.console.error=(...a)=>errors.push(a.join(' '));w.requestAnimationFrame=()=>1;w.fetch=async()=>new Response(JSON.stringify({runs:[]}),{headers:{'content-type':'application/json'}});
const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:()=>{}});
w.HTMLCanvasElement.prototype.getContext=t=>t==='2d'?ctx:null;
Object.defineProperties(w.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
w.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
const source=clientSource(`window.roadQA={player,input,physics,start,reset,updateHUD,updateDrivingAssists,updateRaceFeatures,resolveContacts,road,raceDistance,VehicleModel,get bots(){return raceBots},get chunks(){return chunks},get elapsed(){return elapsed},get state(){return state},set state(v){state=v},set demo(v){demoDriving=v},get dnf(){return raceDNF},choose(id,event='practice'){activeTrackId=id;raceMode='circuit';eventType=event;start()},};`,'road');
const compiled=await build({stdin:{contents:source,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2022',logLevel:'silent'});w.eval(compiled.outputFiles[0].text);
const q=w.roadQA;assert.ok(q,errors.join('\n'));assert.equal(w.document.querySelector('.nitro').hidden,true);assert.doesNotMatch(w.document.querySelector('#helpPanel .lesson-grid').textContent,/CWW|WCW|1.5 秒/);
assert.doesNotMatch(w.document.querySelector('.ready-controls').textContent,/小喷|氮气|CWW|双喷/);
assert.doesNotMatch(w.document.querySelector('#settingsPanel .board-note').textContent,/小喷|氮气/);
q.choose('coast-reborn');assert.doesNotMatch(w.document.querySelector('#status').textContent,/小喷|氮气|漂移/);q.state='running';Object.assign(q.input,{gas:true,small:true,boost:true,drift:true,left:false,right:false});
for(let i=0;i<1200;i++)q.physics(1/120);
assert.equal(q.player.mini,0);assert.equal(q.player.nitroTime,0);assert.equal(q.player.pad,0);assert.equal(q.player.smallJets,0);assert.equal(q.player.nitro,0);
assert.ok(q.player.speed>10&&q.player.speed<(candidate?46:33));for(const ch of q.chunks.values()){assert.equal(ch.entities.length,0,'road racing has no runner pickups or lane obstacles');for(const prop of ch.roadsideProps){assert.equal(Math.abs(prop.l),12);assert.ok(ch.node.children.includes(prop.node),'roadside mesh must reach the actual scene consumer');}}
assert.equal(w.document.querySelector('#score').closest('.stat').hidden,true);assert.equal(w.document.querySelector('#coins').closest('.stat').hidden,true);assert.equal(q.player.coins,0);assert.equal(q.player.score,0);
// The existing contact solver's one angular state feeds the next model step.
q.player.l=8.2;q.player.vS=15;q.player.vL=5;q.player.yaw=.15;q.resolveContacts(1/120);const contactSpin=q.player.spin;
assert.ok(Number.isFinite(contactSpin));q.physics(1/120);assert.equal(q.player.spin,q.player.turnRate);
const results=[];
for(const id of ['coast-reborn','sakura-reborn','academy-reborn']){
 q.choose(id);q.state='running';q.demo=true;
 for(let i=0;i<120*240&&q.state==='running';i++){q.updateDrivingAssists(1/120);q.physics(1/120);assert.ok(Number.isFinite(q.player.s+q.player.l+q.player.yaw));}
 results.push({id,state:q.state,s:Math.round(q.player.s),time:q.elapsed,speed:q.player.speed});
 assert.equal(q.state,'finished',id+' actual road-model demo must complete');
}
q.choose('coast-reborn','race');q.state='running';q.demo=true;let maxBot=0;for(let i=0;i<120*240&&q.state==='running';i++){q.updateDrivingAssists(1/120);q.physics(1/120);maxBot=Math.max(maxBot,...q.bots.map(b=>b.speed));}console.log('road-race',{dnf:q.dnf,time:q.elapsed,maxBot,botFinishes:q.bots.map(b=>b.finishAt)});assert.equal(q.dnf,false,'ordinary road-model demo must compete without inherited fast-AI DNF');
console.table(results);assert.deepEqual(errors,[]);await w.happyDOM.close();

if(candidate){assert(q.bots.every(b=>b.roadLoads&&Number.isFinite(b.roadAx)),'bots use candidate tire solver');}
