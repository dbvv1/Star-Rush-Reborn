// Focused production UI smoke. Normal UI/demo/keyboard only: no capture query,
// simulation hooks, clock override, state setter, snapshot injection or save seeding.
import assert from 'node:assert/strict';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {resolve,join,dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {chromium} from 'playwright';
import {PNG} from 'pngjs';
import worker from '../dist/server/index.js';
import {startSmokeServer} from './smoke-server.mjs';
import {cleanupSmoke} from './smoke-cleanup.mjs';
import {raceReviewSmokeLaunchOptions,readSmokeWebGL} from './race-review-smoke-support.mjs';
import {classifyRenderer} from '../capture-mode.mjs';
const directory=resolve(process.argv[2]||'outputs/race-review-smoke-'+Date.now());
await mkdir(dirname(directory),{recursive:true});await mkdir(directory,{recursive:false});
const git=(...args)=>execFileSync('git',args,{encoding:'utf8'}).trim();
const identity=async()=>({commit:git('rev-parse','HEAD'),tree:git('rev-parse','HEAD^{tree}'),dirty:git('status','--porcelain','--untracked-files=no'),sha256:Object.fromEntries(await Promise.all(['race-review.js','game-shell.html','race-features.js','ranking.js','ui.js','build.mjs','dist/server/index.js','dist/client/game.js','dist/client/road/game.js','dist/client/legacy/game.js','dist/client/rapier/comparison.js','tests/race-review-smoke.mjs','tests/race-review-smoke-support.mjs'].map(async path=>[path,createHash('sha256').update(await readFile(path)).digest('hex')])))});
const report={passed:false,startedAt:new Date().toISOString(),scope:'default regression + academy race-review UI; other tracks CPU-only',stages:[],errors:[],warnings:[]};
await writeFile(join(directory,'report.json'),JSON.stringify(report,null,2)+'\n');
let browser,resources,disconnected=false;
try{
 report.startIdentity=await identity();assert.equal(report.startIdentity.dirty,'','run only the clean fixed commit with its rebuilt artifacts');
 resources=await startSmokeServer(worker);report.origin=resources.origin;
 const options=raceReviewSmokeLaunchOptions();assert.equal(options.chromiumSandbox,true,'this focused smoke requires the established sandboxed browser route');
 report.launchOptions=options;report.argumentScope='requested options only; verify full launch command with DEBUG=pw:browser';
 browser=await chromium.launch(options);browser.on('disconnected',()=>{disconnected=true});report.browser=browser.version();
 const context=await browser.newContext({viewport:{width:1280,height:720}}),page=await context.newPage();page.setDefaultTimeout(45000);
 page.on('pageerror',e=>report.errors.push(String(e)));page.on('console',m=>{if(m.type()==='error')report.errors.push(m.text());if(m.type()==='warning')report.warnings.push(m.text());});page.on('response',r=>{if(r.status()>=400)report.errors.push('HTTP '+r.status()+' '+r.url());});page.on('requestfailed',r=>report.errors.push(r.url()+': '+r.failure()?.errorText));
 await page.route('**/*',r=>new URL(r.request().url()).origin===resources.origin?r.continue():r.abort());
 const visible=async selector=>assert.equal(await page.locator(selector).isVisible(),true,selector);
 const rows=()=>page.locator('#raceReview tbody tr').evaluateAll(list=>list.map(row=>[...row.children].map(cell=>cell.textContent)));
 const running=()=>page.waitForFunction(()=>document.querySelector('#welcome').hidden&&document.querySelector('#countdown').hidden&&document.querySelector('#finished').hidden);
 async function canvasEvidence(name){
  const renderer=await page.locator('#scene').evaluate(readSmokeWebGL);assert.ok(renderer,'live WebGL2, not Canvas fallback');
  const png=PNG.sync.read(await page.locator('#scene').screenshot({path:join(directory,name+'-canvas.png'),style:'#game > :not(#scene){visibility:hidden!important}'})),colors=new Set();for(let i=0;i<png.data.length;i+=4)colors.add(`${png.data[i]>>3},${png.data[i+1]>>3},${png.data[i+2]>>3}`);assert.ok(colors.size>100,'non-background scene pixels');
  return {renderer,class:classifyRenderer(renderer.unmaskedRenderer||renderer.renderer),colors:colors.size};
 }
 // Shared-shell/default regression must be current, not inherited from an older smoke.
 await page.goto(resources.origin+'/',{waitUntil:'networkidle'});await page.locator('#loading.done').waitFor({state:'attached'});
 assert.equal(await page.locator('#error').isVisible(),false);for(const id of ['raceBrief','raceObjective','raceReview'])assert.equal(await page.locator('#'+id).isVisible(),false);
 await page.locator('#startBtn').click();await running();await page.keyboard.down('KeyW');try{await page.waitForFunction(()=>Number(document.querySelector('#speed').textContent)>5);}finally{await page.keyboard.up('KeyW');}
 await page.locator('#pauseBtn').click();await visible('#paused');const pausedTime=await page.locator('#raceTime').textContent();await page.waitForTimeout(250);assert.equal(await page.locator('#raceTime').textContent(),pausedTime);
 await page.locator('#resumeBtn').click();await page.waitForFunction(t=>document.querySelector('#raceTime').textContent!==t,pausedTime);
 await page.locator('#pauseBtn').click();await page.locator('#restartPause').click();await visible('#countdown');await running();
 const defaultCanvas=await canvasEvidence('default');await page.locator('#pauseBtn').click();await page.locator('#pauseHome').click();await visible('#welcome');
 report.stages.push({name:'default start/input/pause/resume/restart/home',...defaultCanvas,passed:true});
 // Two ordinary auto-drive runs on the existing short track. The first creates
 // the reference through normal finish saving; the second must compare to it.
 await page.goto(resources.origin+'/?raceReview=1',{waitUntil:'networkidle'});await page.locator('#loading.done').waitFor({state:'attached'});await visible('#raceBrief');
 async function choose(event,demo=true){await page.locator('#eventType').selectOption(event);await page.locator('[data-track="academy-reborn"]').click();await page.locator(demo?'#demoBtn':'#startBtn').click();await visible('#raceObjective');await running();}
 const ghost=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('star-rush-best-reborn-road-v2-academy-reborn')));
 await choose('timeTrial');assert.match(await page.locator('#raceObjective').textContent(),/圈|第一份/);
 const objectiveLayout=await page.locator('#raceObjective').evaluate(node=>{const rect=node.getBoundingClientRect(),host=node.parentElement,style=getComputedStyle(host);return {parent:host.className,hostPosition:style.position,hostZIndex:style.zIndex,width:rect.width,height:rect.height,x:rect.x,y:rect.y,viewportWidth:innerWidth,viewportHeight:innerHeight};});assert.equal(objectiveLayout.parent,'split-hud');assert.notEqual(objectiveLayout.hostPosition,'static');assert.ok(Number(objectiveLayout.hostZIndex)>0);assert.ok(objectiveLayout.width>0&&objectiveLayout.height>0&&objectiveLayout.x>=0&&objectiveLayout.y>=0&&objectiveLayout.x+objectiveLayout.width<=objectiveLayout.viewportWidth&&objectiveLayout.y+objectiveLayout.height<=objectiveLayout.viewportHeight);
 // HUD is intentionally pointer-events:none; hit-testing would return the canvas.
 // Preserve real screenshots for visible layering rather than changing that style.
 await page.screenshot({path:join(directory,'review-running.png')});await page.locator('#raceObjective').screenshot({path:join(directory,'review-objective.png')});report.objectiveLayout=objectiveLayout;
 await page.locator('#finished').waitFor({state:'visible',timeout:300000});await visible('#raceReview');assert.match(await page.locator('#raceReview').textContent(),/首个完赛基准/);
 const first=await rows(),reference=await ghost();assert.equal(first.length,3);assert.ok(reference?.splits?.length===3);assert.ok(first.every(row=>row[2]==='无基准'));
 const candidateCanvas=await canvasEvidence('review');await page.screenshot({path:join(directory,'review-first.png')});
 await page.locator('#newRouteBtn').click();assert.equal(await page.locator('#raceReview').isVisible(),false);assert.equal(await page.locator('#raceReview').evaluate(n=>n.children.length),0);
 await choose('timeTrial');await page.locator('#finished').waitFor({state:'visible',timeout:300000});
 const second=await rows();assert.equal(second.length,3);assert.ok(second.every(row=>/^[+−±]\d+\.\d{2} s$/.test(row[2])));assert.match(await page.locator('#raceReview').textContent(),/各段差值对比同一份赛前最佳/);
 const parseTime=text=>{const [m,s]=text.split(':').map(Number);return m*60+s;};
 second.forEach((row,i)=>{const expected=parseTime(row[1])-(reference.splits[i]-(reference.splits[i-1]||0)),delta=Number(row[2].replace('−','-').replace('±','').replace(' s',''));assert.ok(Math.abs(delta-expected)<.025,'rounded duration and prior best delta agree');});
 await page.setViewportSize({width:390,height:568});await page.locator('#raceReview').scrollIntoViewIfNeeded();
 const layout=await page.locator('#finished').evaluate(node=>{const review=document.querySelector('#raceReview').getBoundingClientRect();return {overflow:getComputedStyle(node).overflowY,height:node.clientHeight,scrollHeight:node.scrollHeight,left:review.left,right:review.right,width:innerWidth};});assert.equal(layout.overflow,'auto');assert.ok(layout.scrollHeight>layout.height);assert.ok(layout.left>=0&&layout.right<=layout.width);
 await page.screenshot({path:join(directory,'review-small.png')});await page.locator('#retryBtn').scrollIntoViewIfNeeded();const button=await page.locator('#retryBtn').boundingBox();assert.ok(button&&button.y>=0&&button.y+button.height<=568);await page.locator('#retryBtn').click();assert.equal(await page.locator('#raceReview').isVisible(),false);assert.equal(await page.locator('#raceReview').evaluate(n=>n.children.length),0);await running();
 await page.locator('#pauseBtn').click();await page.locator('#pauseHome').click();await page.setViewportSize({width:1280,height:720});
 report.stages.push({name:'academy two normal demo finishes, same pre-race best, small-screen scroll, retry/home cleanup',first,second,layout,...candidateCanvas,passed:true});
 // Actual DNF: drive the first segment, take over and stop; let AI naturally
 // cross and the existing 30-second deadline expire. No firstFinish setter.
 await choose('race');await page.waitForFunction(()=>/已完成 [12] \/ 3 段/.test(document.querySelector('#raceObjective').textContent),null,{timeout:180000});
 await page.keyboard.down('KeyS');try{await page.waitForFunction(()=>Number(document.querySelector('#speed').textContent)<5);}finally{await page.keyboard.up('KeyS');}
 await page.locator('#finished').waitFor({state:'visible',timeout:300000});assert.equal(await page.locator('#resultDistance').textContent(),'DNF');const partial=await rows();assert.ok(partial.length>0&&partial.length<3);assert.match(await page.locator('#raceReview').textContent(),/未完赛/);assert.doesNotMatch(await page.locator('#raceReview').textContent(),/相对赛前最佳/);await page.screenshot({path:join(directory,'review-dnf.png')});
 await page.locator('#newRouteBtn').click();assert.equal(await page.locator('#raceReview').evaluate(n=>n.children.length),0);report.stages.push({name:'natural AI deadline DNF, completed rows only, home cleanup',partial,passed:true});
 assert.equal(await page.locator('#error').isVisible(),false);assert.deepEqual(report.errors,[]);await context.close();
 report.endIdentity=await identity();assert.deepEqual(report.endIdentity,report.startIdentity,'fixed source and rebuilt artifacts did not change');report.passed=true;
}catch(error){report.errors.push(error.stack||String(error));process.exitCode=1;}
finally{report.cleanupErrors=await cleanupSmoke({browser,server:resources?.server||{listening:false},db:resources?.db||{close(){}}});report.resourcesAfterClose={browserConnected:browser?.isConnected()??false,disconnected:browser?disconnected:null,serverListening:resources?.server.listening??false};if(report.cleanupErrors.length||report.resourcesAfterClose.browserConnected||report.resourcesAfterClose.serverListening||(browser&&!disconnected)){report.passed=false;process.exitCode=1;}report.finishedAt=new Date().toISOString();await writeFile(join(directory,'report.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));}
