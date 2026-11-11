// Browser-independent assertions and a serializable browser observer. No game hooks.
import assert from 'node:assert/strict';

export function parseSmokeArgs(args) {
  const result={fullRace:false, timeoutMs:900000, path:'/'};
  for(let i=0;i<args.length;i++) {
    if(args[i]==='--full-race') result.fullRace=true;
    else if(args[i]==='--timeout-ms') {
      const value=args[++i];
      if(!/^\d+$/.test(value||'') || Number(value)<1000 || Number(value)>3600000) throw Error('timeout-ms must be 1000–3600000');
      result.timeoutMs=Number(value);
    } else if(args[i]==='--path') {
      const value=args[++i];
      if(!value || !/^\/(?:road\/?)?(?:\?.*)?$/.test(value)) throw Error('path must be / or /road with optional query');
      const url=new URL(value,'http://localhost');
      for(const [key,value] of url.searchParams) {
        if(key!=='environment'||value!=='coast-space-v1'||url.searchParams.getAll(key).length!==1) throw Error('Only one environment=coast-space-v1 candidate is supported');
      }
      result.path=value;
    } else throw Error('Unknown smoke argument: '+args[i]);
  }
  return result;
}

// Called by Playwright before the real menu button is clicked. rAF remains real-time.
export function installRaceObserver() {
  const read=id=>document.getElementById(id);
  const visible=id=>read(id)&&!read(id).hidden;
  const text=id=>read(id)?.textContent||'';
  const receipt={started:false,finished:false,frames:[],violations:[],startMs:null,endMs:null,phase:'armed'};
  window.__fullRaceSmoke=receipt;
  let previous=null;
  const visibility=()=>{if(receipt.started&&!receipt.finished&&document.hidden)receipt.violations.push('document hidden');};
  document.addEventListener('visibilitychange',visibility);
  const observe=now=>{
    if(!receipt.started && visible('countdown') && !visible('welcome')) {
      receipt.started=true;receipt.startMs=now;receipt.phase='countdown';
      receipt.initialLap=text('lapLabel');
    }
    if(receipt.started && !receipt.finished) {
      const phase=visible('finished')?'finished':visible('countdown')?'countdown':'running';
      if(previous!==null) receipt.frames.push({fromMs:previous,toMs:now,phase});
      previous=now;
      if(document.hidden) receipt.violations.push('document hidden');
      if(visible('paused') || visible('welcome')) receipt.violations.push('race interrupted');
      if(read('qualitySetting')?.value!=='high') receipt.violations.push('quality changed');
      if(visible('error')) receipt.violations.push('runtime overlay');
      receipt.phase=phase;
      if(phase==='finished') {
        receipt.finished=true;receipt.endMs=now;document.removeEventListener('visibilitychange',visibility);
        receipt.result={event:text('eventLabel'),time:text('resultDistance'),label:text('resultMainLabel'),lap:text('lapLabel'),position:text('localPosition'),
          rows:[...document.querySelectorAll('#resultGrid .result-row')].map(row=>({name:row.querySelector('span')?.textContent,time:row.querySelector('b')?.textContent})),
          saves:JSON.parse(localStorage.getItem('star-rush-runs-road-v2')||'[]')};
        return;
      }
    }
    requestAnimationFrame(observe);
  };
  requestAnimationFrame(observe);
}

export function validateFullRace(receipt) {
  assert.ok(receipt?.started && receipt.finished,'full race must reach countdown and result');
  assert.deepEqual(receipt.violations,[],'uninterrupted fixed-quality race required');
  const frames=receipt.frames;
  assert.ok(Array.isArray(frames)&&frames.length>=2,'full frame series required');
  assert.ok(Number.isFinite(receipt.startMs)&&Number.isFinite(receipt.endMs)&&receipt.endMs>receipt.startMs,'invalid race boundaries');
  let previous=receipt.startMs;
  for(const frame of frames) {
    assert.equal(frame.fromMs,previous,'frame coverage gap');
    assert.ok(Number.isFinite(frame.toMs)&&frame.toMs>frame.fromMs,'invalid frame duration');
    assert.ok(['countdown','running','finished'].includes(frame.phase),'invalid race phase');
    previous=frame.toMs;
  }
  assert.equal(previous,receipt.endMs,'frames must include result boundary');
  assert.equal(frames.at(-1).phase,'finished');
  assert.ok(frames.some(frame=>frame.phase==='running'),'running frames required');
  const r=receipt.result;
  assert.equal(r?.event,'已完赛','missing player cutoff evidence: DNF requires an observed natural deadline, not only a terminal label');
  assert.match(r.time,/^\d+:\d{2}\.\d{2}$/,'valid finish time required');
  assert.match(r.label,/^[1-9]\d* 圈用时$/);
  assert.equal(r.rows?.length,4,'three rivals and player required');
  assert.equal(new Set(r.rows.map(row=>row.name)).size,4,'unique standings required');
  for(let i=0;i<4;i++) {
    assert.ok(r.rows[i].name.startsWith(`${i+1}. `),'ordered result ranks required');
    assert.match(r.rows[i].time,/^(?:\d+:\d{2}\.\d{2}|未完赛)$/,'terminal rival result required');
  }
  // This runtime exposes a player-finish snapshot, not an observed rival deadline.
  // DNF is legal; without a cutoff observation it is not proof of complete closure.
  assert.ok(r.rows.every(row=>row.time!=='未完赛'),'missing rival closure evidence: player-finish snapshot does not observe a rival deadline');
  const timeSeconds=text=>{const [m,s]=text.split(':').map(Number);return m*60+s;};
  for(let i=1;i<r.rows.length;i++) assert.ok(timeSeconds(r.rows[i].time)>=timeSeconds(r.rows[i-1].time),'result times must match rank order');
  const playerIndex=r.rows.findIndex(row=>row.name.endsWith('（你）'));
  assert.ok(playerIndex>=0,'player row required');
  assert.equal(r.rows[playerIndex].time,r.time,'player time must match result');
  assert.equal(r.position,`POS ${playerIndex+1} / 4`,'HUD/result position mismatch');
  const distance=Number(receipt.initialLap?.match(/剩余 (\d+) m$/)?.[1]);
  assert.ok(distance>0,'initial full circuit distance required');
  assert.equal(r.saves?.length,1,'fresh context must save exactly one completed run');
  const run=r.saves[0];
  assert.ok(run.track==='coast-reborn'&&run.mode==='circuit'&&run.seed===73121&&run.timeMs>0&&run.distance>=distance-1,'completed local record required');
  const [minutes,seconds]=r.time.split(':').map(Number);
  assert.ok(Math.abs(run.timeMs-(minutes*60+seconds)*1000)<=10,'local time/result mismatch');
  const intervals=frames.map(frame=>frame.toMs-frame.fromMs).sort((a,b)=>a-b);
  const percentile=p=>intervals[Math.ceil(intervals.length*p)-1];
  return {scope:'real-time-browser-raf-cadence-countdown-through-result',samples:frames.length,
    durationMs:receipt.endMs-receipt.startMs,meanMs:(receipt.endMs-receipt.startMs)/frames.length,
    p50Ms:percentile(.5),p95Ms:percentile(.95),p99Ms:percentile(.99),maxMs:intervals.at(-1),
    over50Ms:intervals.filter(n=>n>50).length,rivalDNF:r.rows.filter(row=>row.time==='未完赛').length};
}

export function validateRaceCandidate(status,path) {
  const expected=new URL(path,'http://localhost').searchParams.has('environment');
  assert.ok(status,'runtime candidate status missing');
  assert.equal(status.space,expected,'requested environment fell back or did not activate');
  assert.equal(status.power,false,'unexpected handling candidate');
  assert.equal(status.backend,'webgl2');
  assert.deepEqual(status.warnings,[],'runtime fallback warning');
  assert.ok(Number.isFinite(status.ticks),'runtime tick count missing');
}

export async function runFullRace(page,{timeoutMs,path='/'},report) {
  await page.locator('[data-track="coast-reborn"]').click();
  await page.locator('#eventType').selectOption('race');
  // Setup only, not player UI acceptance: the menu keeps settingsPanel hidden.
  // Force skips actionability but still dispatches input/change to its real handler.
  await page.locator('#qualitySetting').selectOption('high',{force:true});
  report.raceCandidateBefore=await page.evaluate(()=>window.starSideStatus);
  validateRaceCandidate(report.raceCandidateBefore,path);
  await page.evaluate(installRaceObserver);
  await page.locator('#demoBtn').click();
  try {
    await page.waitForFunction(()=>window.__fullRaceSmoke?.finished,null,{polling:100,timeout:timeoutMs});
  } finally {
    report.fullRace=await page.evaluate(()=>window.__fullRaceSmoke);
  }
  report.raceCandidateAfter=await page.evaluate(()=>window.starSideStatus);
  validateRaceCandidate(report.raceCandidateAfter,path);
  assert.ok(report.raceCandidateAfter.ticks>report.raceCandidateBefore.ticks,'simulation ticks did not advance');
  report.frameCadence=validateFullRace(report.fullRace);
}

export async function verifyRaceRestart(page,report) {
  await page.locator('#retryBtn').click();
  await page.waitForFunction(()=>!document.querySelector('#countdown').hidden&&document.querySelector('#finished').hidden);
  await page.waitForFunction(()=>document.querySelector('#countdown').hidden);
  const before=await page.locator('#raceTime').textContent();
  await page.keyboard.down('KeyW');
  try {
    await page.waitForFunction(value=>Number(document.querySelector('#speed').textContent)>5&&document.querySelector('#raceTime').textContent!==value,before);
  } finally { await page.keyboard.up('KeyW'); }
  await page.locator('#pauseBtn').click();
  await page.locator('#pauseHome').click();
  assert.equal(await page.locator('#welcome').isVisible(),true);
  assert.equal(await page.locator('#error').isVisible(),false,'restart runtime error overlay');
  report.fullRace.restartAndReturn=true;
}
