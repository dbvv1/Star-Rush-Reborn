// Real assembled client and real result/ranking/ghost consumers in happy-dom.
// Completion state is controlled; canvas/audio/network are stubs, not browser QA.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {Window} from 'happy-dom';
import {build} from 'esbuild';
import {clientSource} from '../build.mjs';
const track='coast-reborn';
const run={id:'old',mode:'circuit',track,seed:73121,distance:4800,timeMs:140000,score:0,name:'Old driver'};
const ghost={time:140,points:[[0,0,0,0,0],[130,4800,0,0,0]],splits:[40,80,140],laps:[140],date:1};
const hooks=`window.saveQA={start,finish,goHome,loadBoard,getBestGhost,
 get profileName(){return profile.name},get attempt(){return localSaveAttempt},get state(){return state},get pending(){return pendingRun},get ghost(){return ghostRun},
 complete(dnf=false){start();state='running';elapsed=120;player.s=raceDistance();player.timePenalty=0;raceDNF=dnf;
  ghostPoints=Array.from({length:12},(_,i)=>[i*10,i*400,0,0,0]);raceSplits=[40,80,120];lapTimes=[120];finish()},
 mutateAfterFinish(){ghostPoints[0][1]=999999;raceSplits[0]=999999;profile.name='Changed after finish';try{localStorage.setItem('star-rush-name','Changed stored name after finish')}catch(e){}},
 localBoard(){boardLocal=true;return loadBoard()}};`;
const compiled=new Map();
async function environment(model){
 if(!compiled.has(model))compiled.set(model,(await build({stdin:{contents:clientSource(hooks,model),resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2022',logLevel:'silent'})).outputFiles[0].text);
 const w=new Window({url:'https://save.test/'+(model==='road'?'':'legacy'),settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}}),errors=[],data=new Map(),writes=[],failRead=new Set(),failWrite=new Set();
 let getterFails=false;
 const storage={getItem:k=>{if(failRead.has(k))throw Error('unavailable read');return data.get(k)??null},setItem(k,v){if(failWrite.has(k))throw Error('quota');data.set(k,String(v));writes.push(k)}};
 Object.defineProperty(w,'localStorage',{configurable:true,get(){if(getterFails)throw Error('storage unavailable');return storage}});
 w.console.error=(...a)=>errors.push(a.join(' '));w.requestAnimationFrame=()=>1;
 w.fetch=async()=>{throw Error('offline')};
 const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:()=>{}});
 w.HTMLCanvasElement.prototype.getContext=t=>t==='2d'?ctx:null;
 Object.defineProperties(w.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
 w.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
 w.eval(compiled.get(model));assert.deepEqual(errors,[]);assert(w.saveQA,'real client must initialize');
 const q=w.saveQA,$=id=>w.document.getElementById(id),runsKey=model==='road'?'star-rush-runs-road-v2':'star-rush-runs-reborn',ghostKey='star-rush-best-reborn-'+(model==='road'?'road-v2-':'')+track;
 const seed=(best=ghost)=>{q.goHome();getterFails=false;failRead.clear();failWrite.clear();data.clear();writes.length=0;data.set(runsKey,JSON.stringify([run]));data.set(ghostKey,JSON.stringify(best));data.set('star-rush-runs-road-v1','old-v1-untouched');data.set(model==='road'?'star-rush-runs-reborn':'star-rush-runs-road-v2','other-profile-untouched')};
 return {w,q,$,data,writes,failRead,failWrite,runsKey,ghostKey,seed,errors,setGetterFail:v=>{getterFails=v}};
}

test('adopted module body retains exact fixed source and MIT notice',()=>{
 const source=readFileSync('local-race-save.mjs','utf8'),body=source.slice(source.indexOf('*/\n')+3);
 assert.equal(createHash('sha256').update(body).digest('hex'),'1d53967731cc8b7c8f6d13a22be1a683ae5ae7f87d8ae4b079820539ab4bcd41');
 assert.match(source,/MIT License/);assert.match(source,/Copyright \(c\) 2026 dbvv1/);
});

for(const model of ['road','legacy'])test(model+' actual completion: receipts, isolated retries, retained bad data and restart',async t=>{
 const e=await environment(model),{w,q,$,data,writes,failRead,failWrite,runsKey,ghostKey,seed}=e;
 t.after(()=>w.happyDOM.close());
 seed();data.set('star-rush-name','Legacy saved name');assert.notEqual(q.profileName,'Legacy saved name');q.complete();assert.equal(q.attempt.input.name,'Legacy saved name');assert.equal(JSON.parse(data.get(runsKey)).at(-1).name,'Legacy saved name');await q.localBoard();assert.match($('rankRows').textContent,/Legacy saved name/);
 for(const savedName of [null,'']){seed();if(savedName!==null)data.set('star-rush-name',savedName);q.complete();assert.equal(q.attempt.input.name,'本机车手');assert.equal(JSON.parse(data.get(runsKey)).at(-1).name,'本机车手')}
 seed();q.complete();assert.equal(q.state,'finished');assert.equal(q.attempt.receipt.record.status,'saved');assert.equal(q.attempt.receipt.ghost.status,'saved');assert.match($('resultNote').textContent,/成绩已保存至本浏览器；幽灵已保存至本浏览器/);assert.equal($('retryLocalSave').hidden,true);
 const id=q.attempt.input.run.id,first=JSON.stringify([...data]);q.finish();assert.equal(JSON.stringify([...data]),first);assert.equal(JSON.parse(data.get(runsKey)).filter(r=>r.id===id).length,1);
 if(model==='road'){assert.equal(q.pending,null);assert.equal($('submitRun').disabled,true)}
 await q.localBoard();assert.equal($('rankRows').children.length,2);assert.doesNotMatch($('rankStatus').textContent,/还没有成绩/);
 q.start();assert.equal(q.attempt,null);assert.equal(q.ghost.time,120);assert.equal(q.ghost.points[1][1],400);assert.equal($('retryLocalSave').hidden,true);

 for(const failed of [[runsKey],[ghostKey],[runsKey,ghostKey]]){
  seed();for(const key of failed)failWrite.add(key);q.complete();
  assert.equal($('retryLocalSave').hidden,false);assert.match($('resultNote').textContent,/未保存/);assert.equal($('resultNote').classList.contains('save-failed'),true);
  const snapshot=JSON.parse(JSON.stringify(q.attempt.input)),successfulWrites=Object.fromEntries([runsKey,ghostKey].map(k=>[k,writes.filter(x=>x===k).length]));
  q.mutateAfterFinish();failWrite.clear();$('retryLocalSave').focus();$('retryLocalSave').click();
  assert.equal($('retryLocalSave').hidden,true);assert.equal(w.document.activeElement,$('retryBtn'));assert.equal($('resultNote').classList.contains('save-failed'),false);
  assert.equal(JSON.parse(data.get(runsKey)).at(-1).name,snapshot.name);assert.deepEqual(JSON.parse(data.get(ghostKey)),snapshot.ghost);
  for(const key of [runsKey,ghostKey])assert.equal(writes.filter(x=>x===key).length,successfulWrites[key]+(failed.includes(key)?1:0),'only failed key is retried');
  const after=JSON.stringify([...data]);$('retryLocalSave').click();assert.equal(JSON.stringify([...data]),after);
 }
 seed();data.set(runsKey,'{broken');q.complete();assert.equal(data.get(runsKey),'{broken');assert.equal(q.attempt.receipt.record.status,'invalid-data');assert.equal($('retryLocalSave').hidden,true);assert.match($('resultNote').textContent,/现有数据异常，未覆盖/);await q.localBoard();assert.match($('rankStatus').textContent,/数据异常/);assert.equal($('rankRows').children.length,0);
 seed();data.set(ghostKey,'{broken');q.start();assert.equal(q.ghost,null);assert.match($('toastTitle').textContent,/幽灵不可用/);q.complete();assert.equal(data.get(ghostKey),'{broken');assert.equal(q.attempt.receipt.ghost.status,'invalid-data');assert.equal(q.attempt.receipt.record.status,'saved');assert.equal($('retryLocalSave').hidden,true);
 seed({...ghost,time:100,points:[[0,0,0,0,0],[90,4800,0,0,0]]});q.complete();assert.equal(q.attempt.receipt.ghost.status,'not-faster');assert.match($('resultNote').textContent,/幽灵保留原最佳/);assert.equal(writes.filter(k=>k===ghostKey).length,0);
 seed();q.complete(true);assert.equal(q.attempt.receipt.record.status,'skipped');assert.equal(q.attempt.receipt.ghost.status,'skipped');assert.doesNotMatch($('resultNote').textContent,/已保存/);assert.equal(writes.filter(k=>[runsKey,ghostKey].includes(k)).length,0);
 seed();failRead.add(runsKey);await q.localBoard();assert.match($('rankStatus').textContent,/无法读取/);q.complete();assert.equal($('retryLocalSave').hidden,false);failRead.clear();$('retryLocalSave').click();assert.equal(q.attempt.receipt.record.status,'saved');
 seed();e.setGetterFail(true);q.complete();assert.equal(q.attempt.receipt.record.status,'read-failed');assert.equal(q.attempt.receipt.ghost.status,'read-failed');e.setGetterFail(false);$('retryLocalSave').click();assert.equal(q.attempt.receipt.record.status,'saved');assert.equal(q.attempt.receipt.ghost.status,'saved');
 seed();failWrite.add(runsKey);q.complete();q.start();const before=writes.length;failWrite.clear();$('retryLocalSave').click();assert.equal(writes.length,before);assert.equal(q.attempt,null);assert.equal(q.state,'countdown');
 assert.equal(data.get('star-rush-runs-road-v1'),'old-v1-untouched');assert.equal(data.get(model==='road'?'star-rush-runs-reborn':'star-rush-runs-road-v2'),'other-profile-untouched');
 if(model==='legacy'){seed();failWrite.add(runsKey);q.complete();await $('submitRun').onclick();assert.match($('uploadStatus').textContent,/未能上传/);assert.doesNotMatch($('uploadStatus').textContent,/保存/);assert.match($('resultNote').textContent,/成绩未保存/);failWrite.clear();$('retryLocalSave').click();assert.match($('resultNote').textContent,/成绩已保存至本浏览器/);assert.doesNotMatch($('uploadStatus').textContent,/保存/)}
 if(model==='legacy'){
  // A local retry can succeed while an upload awaits; keep one authoritative receipt,
  // and never let a prior result's late response write into the next run.
  seed();failWrite.add(runsKey);q.complete();let rejectUpload;
  w.fetch=()=>new Promise((resolve,reject)=>{rejectUpload=reject});
  let uploading=$('submitRun').onclick();failWrite.clear();$('retryLocalSave').click();rejectUpload(Error('offline'));await uploading;
  assert.doesNotMatch($('uploadStatus').textContent,/保存/);assert.match($('resultNote').textContent,/成绩已保存至本浏览器/);
  uploading=$('submitRun').onclick();q.start();const nextStatus=$('uploadStatus').textContent;rejectUpload(Error('late failure'));await uploading;
  assert.equal($('uploadStatus').textContent,nextStatus);assert.equal(q.state,'countdown');
 }
 assert.deepEqual(e.errors,[]);
});

// Source/cascade contract only; happy-dom does not emulate this media cascade
// or establish pixel layout. Real short-screen scroll/visibility is browser QA.
test('result receipt has a specific visible rule independent of compact intro hiding',async()=>{
 const shell=readFileSync('game-shell.html','utf8'),w=new Window({url:'https://save.test/'});
 try{
  w.document.write(shell.replace('<!--GAME_SCRIPT-->',''));
  assert.match(shell,/@media\(max-height:680px\)[^@]*\.intro\{display:none\}/);
  assert.match(shell,/#finished #resultNote\{display:block;margin:0 0 12px\}/);
  assert.match(shell,/#finished #resultNote\.save-failed\{border-left:3px solid var\(--pink\)/);
  assert.match(shell,/#finished\{overflow:auto;align-items:flex-start\}/);
  assert.match(shell,/#finished \.panel\{margin:auto 0\}/);
  assert.equal(w.document.getElementById('resultNote').getAttribute('role'),'status');
  assert.equal(w.document.getElementById('retryLocalSave').className,'secondary');
  const panel=w.document.querySelector('#finished .panel'),note=w.document.getElementById('resultNote'),retry=w.document.getElementById('retryLocalSave');
  assert.equal(w.document.querySelectorAll('#resultNote').length,1);assert.equal(w.document.querySelectorAll('#retryLocalSave').length,1);
  assert.equal(panel.querySelector('.hero-title').nextElementSibling,note);assert.equal(note.nextElementSibling,retry);assert.equal(retry.nextElementSibling,panel.querySelector('.results'));
  for(const id of ['resultGrid','racerName','submitRun','retryBtn','newRouteBtn'])assert(panel.contains(w.document.getElementById(id)),id+' remains in scrollable result panel');
 }finally{await w.happyDOM.close()}
});
