import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {parseSmokeArgs,installRaceObserver,validateFullRace,runFullRace,validateRaceCandidate,verifyRaceRestart} from './smoke-full-race.mjs';
const result=()=>({event:'已完赛',time:'01:30.00',label:'1 圈用时',lap:'LAP 1 / 1 · 剩余 0 m',position:'POS 4 / 4',rows:[{name:'1. Bot A',time:'01:29.00'},{name:'2. Bot B',time:'01:29.50'},{name:'3. Bot C',time:'01:29.80'},{name:'4. Driver（你）',time:'01:30.00'}],saves:[{track:'coast-reborn',mode:'circuit',seed:73121,timeMs:90000,distance:2000}]});
const receipt=()=>({started:true,finished:true,violations:[],startMs:10,endMs:100,initialLap:'LAP 1 / 1 · 剩余 2000 m',frames:[{fromMs:10,toMs:30,phase:'countdown'},{fromMs:30,toMs:70,phase:'running'},{fromMs:70,toMs:100,phase:'finished'}],result:result()});
test('options reject missing, invalid and virtual capture inputs',()=>{
 assert.deepEqual(parseSmokeArgs([]),{fullRace:false,timeoutMs:900000,path:'/'});
 assert.equal(parseSmokeArgs(['--full-race','--path','/road?environment=coast-space-v1','--timeout-ms','1234']).fullRace,true);
 for(const args of [['--timeout-ms'],['--timeout-ms','NaN'],['--timeout-ms','0'],['--path'],['--path','//remote.test'],['--path','/legacy'],['--path','/?shot=coast-chase'],['--wat']]) assert.throws(()=>parseSmokeArgs(args));
});
test('full coverage yields whole-run cadence',()=>{
 const stats=validateFullRace(receipt());assert.equal(stats.samples,3);assert.equal(stats.durationMs,90);assert.equal(stats.p95Ms,40);assert.equal(stats.rivalDNF,0);
});
test('missing, truncated, invalid, interrupted and non-terminal records fail closed',()=>{
 assert.throws(()=>validateFullRace());
 for(const mutate of [r=>r.started=false,r=>r.finished=false,r=>r.frames=[],r=>r.frames[1].fromMs++,r=>r.frames[1].toMs=NaN,r=>r.endMs++,r=>r.frames[1].phase='paused',r=>r.violations.push('hidden'),r=>r.result.event='未完赛',r=>r.result.rows.pop(),r=>r.result.rows[0].time='比赛中',r=>r.result.rows[0].time='未完赛',r=>r.result.rows[0].time='01:59.00',r=>r.result.position='POS 1 / 4',r=>r.result.saves=[],r=>r.result.saves[0].timeMs=1000,r=>r.result.saves[0].distance=3,r=>delete r.initialLap]) {
  const r=receipt();mutate(r);assert.throws(()=>validateFullRace(r));
 }
});
test('actual serialized observer captures every scheduled interval through result',()=>{
 const r=result(), elements={};
 for(const id of ['welcome','countdown','finished','paused','error']) elements[id]={hidden:true};
 elements.welcome.hidden=false;
 for(const [id,textContent] of Object.entries({lapLabel:'LAP 1 / 1 · 剩余 2000 m',eventLabel:r.event,resultDistance:r.time,resultMainLabel:r.label,localPosition:r.position})) elements[id]={textContent};
 elements.qualitySetting={value:'high'};
 const queue=[], context={window:{},document:{addEventListener(){},removeEventListener(){},hidden:false,getElementById:id=>elements[id],querySelectorAll:()=>r.rows.map(row=>({querySelector:tag=>({textContent:tag==='span'?row.name:row.time})}))},localStorage:{getItem:()=>JSON.stringify(r.saves)},requestAnimationFrame:fn=>queue.push(fn)};
 vm.runInNewContext(`(${installRaceObserver.toString()})()`,context);
 queue.shift()(0);assert.equal(context.window.__fullRaceSmoke.started,false);
 elements.welcome.hidden=true;elements.countdown.hidden=false;queue.shift()(10);queue.shift()(30);
 elements.countdown.hidden=true;queue.shift()(70);elements.finished.hidden=false;queue.shift()(100);
 const observed=JSON.parse(JSON.stringify(context.window.__fullRaceSmoke));
 assert.equal(validateFullRace(observed).samples,3);assert.equal(queue.length,0);
});
test('timeout retains partial receipt and never marks completion',async()=>{
 const report={}, partial={started:true,finished:false,frames:[]};
 const page={locator:()=>({click:async()=>{},selectOption:async()=>{}}),evaluate:async fn=>fn===installRaceObserver?undefined:fn.toString().includes('starSideStatus')?{space:false,power:false,backend:'webgl2',warnings:[],ticks:0}:partial,waitForFunction:async()=>{throw Error('timeout')}};
 await assert.rejects(runFullRace(page,{timeoutMs:1000},report),/timeout/);
 assert.equal(report.fullRace,partial);assert.equal(report.frameCadence,undefined);
});

test('candidate activation and fallback are verified against the requested path',()=>{
 const status={space:false,power:false,backend:'webgl2',warnings:[],ticks:0};
 validateRaceCandidate(status,'/');
 validateRaceCandidate({...status,space:true},'/road?environment=coast-space-v1');
 for(const bad of [undefined,{...status,space:true},{...status,power:true},{...status,backend:'canvas2d'},{...status,warnings:['fallback']}]) assert.throws(()=>validateRaceCandidate(bad,'/'));
 assert.throws(()=>validateRaceCandidate(status,'/?environment=coast-space-v1'));
 for(const path of ['/?environment=unknown','/?environment=coast-space-v1&environment=coast-space-v1','/?handling=power-tires-v1','/?ignored=true']) assert.throws(()=>parseSmokeArgs(['--path',path]));
});

test('restart requires movement and changing time, and releases input on failure',async()=>{
 for(const fails of [false,true]) {
  const calls=[],report={fullRace:{}},page={
   locator:id=>({click:async()=>calls.push(id),textContent:async()=>'00:00.00',isVisible:async()=>id==='#welcome'}),
   keyboard:{down:async key=>calls.push('down '+key),up:async key=>calls.push('up '+key)},
   waitForFunction:async(fn,value)=>{
    if(value===undefined)return;
    const run=(speed,time)=>vm.runInNewContext(`(${fn.toString()})('00:00.00')`,{document:{querySelector:id=>({textContent:id==='#speed'?speed:time})}});
    assert.equal(run('0','00:01.00'),false);assert.equal(run('6','00:00.00'),false);assert.equal(run('6','00:01.00'),true);
    if(fails)throw Error('no progress');
   }
  };
  if(fails){await assert.rejects(verifyRaceRestart(page,report),/no progress/);assert.equal(report.fullRace.restartAndReturn,undefined);}
  else {await verifyRaceRestart(page,report);assert.equal(report.fullRace.restartAndReturn,true);}
  assert.ok(calls.includes('up KeyW'));
 }
});
