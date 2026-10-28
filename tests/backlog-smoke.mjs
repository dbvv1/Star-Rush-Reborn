// Serial production Worker smoke for the accepted backlog. No desktop automation.
import assert from 'node:assert/strict';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve,join,dirname} from 'node:path';
import {execFileSync} from 'node:child_process';
import {chromium} from 'playwright';
import {PNG} from 'pngjs';
import worker from '../dist/server/index.js';
import {startSmokeServer} from './smoke-server.mjs';
import {cleanupSmoke} from './smoke-cleanup.mjs';
import {classifyRenderer} from '../capture-mode.mjs';
const directory=resolve(process.argv[2]||'outputs/backlog-smoke-'+Date.now());
await mkdir(dirname(directory),{recursive:true});
await mkdir(directory,{recursive:false});
const report={passed:false,startedAt:new Date().toISOString(),commit:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),routes:[],errors:[]};
const git=(...args)=>execFileSync('git',args,{encoding:'utf8'}).trim();
const identity=async()=>({commit:git('rev-parse','HEAD'),tree:git('rev-parse','HEAD^{tree}'),dirty:git('status','--porcelain','--untracked-files=no'),sha256:Object.fromEntries(await Promise.all(['dist/server/index.js','dist/client/game.js','dist/client/road/game.js','dist/client/legacy/game.js','dist/client/rapier/comparison.js','tests/backlog-smoke.mjs'].map(async file=>[file,createHash('sha256').update(await readFile(file)).digest('hex')])))});
let browser,resources,disconnected=false;

try{
 report.startIdentity=await identity();assert.equal(report.startIdentity.dirty,'','fixed tracked source and rebuilt artifacts must be clean');
 resources=await startSmokeServer(worker);report.serverOrigin=resources.origin;
 const options={headless:true,chromiumSandbox:true,ignoreDefaultArgs:['--enable-unsafe-swiftshader'],args:[],...(process.env.STAR_RUSH_SMOKE_CHROMIUM?{executablePath:process.env.STAR_RUSH_SMOKE_CHROMIUM}:{}),timeout:30000};
 report.launchOptions=options;browser=await chromium.launch(options);report.browser=browser.version();browser.on('disconnected',()=>{disconnected=true});
 for(const path of ['/','/road/','/legacy/','/rapier/','/?shot=coast-chase&t=0']){
  const context=await browser.newContext({viewport:{width:1280,height:720}}),page=await context.newPage();page.setDefaultTimeout(45000);
  const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});page.on('response',r=>{if(r.status()>=400)errors.push('HTTP '+r.status()+' '+r.url())});page.on('requestfailed',r=>errors.push(r.url()+': '+r.failure()?.errorText));
  await page.route('**/*',r=>new URL(r.request().url()).origin===resources.origin?r.continue():r.abort());
  await page.goto(resources.origin+path,{waitUntil:'networkidle'});
  if(path==='/rapier/'){
   await page.waitForFunction(()=>window.rapierComparison?.snapshot().ticks>1);
   await page.keyboard.down('KeyW');try{await page.waitForFunction(()=>Number(document.querySelector('#speed').textContent)>2)}finally{await page.keyboard.up('KeyW')}
   await page.locator('#pause').click();const paused=await page.evaluate(()=>window.rapierComparison.snapshot());assert.equal(paused.paused,true);
   await page.waitForTimeout(250);assert.equal(await page.evaluate(()=>window.rapierComparison.snapshot().ticks),paused.ticks);
   await page.locator('#pause').click();await page.waitForFunction(n=>window.rapierComparison.snapshot().ticks>n,paused.ticks);
   await page.locator('#reset').click();const reset=await page.evaluate(()=>window.rapierComparison.snapshot());assert.ok(Math.abs(reset.s-170)<2);assert.ok(Math.hypot(reset.velocity.x,reset.velocity.z)<1);await page.waitForFunction(n=>window.rapierComparison.snapshot().ticks>n,reset.ticks);
  }else if(path.includes('?shot=')){
   await page.waitForFunction(()=>window.__shot?.ready===true);
  }else{
   await page.locator('#loading.done').waitFor({state:'attached'});assert.equal(await page.locator('#error').isVisible(),false);
   await page.locator('#startBtn').click();await page.waitForFunction(()=>document.querySelector('#welcome').hidden&&document.querySelector('#countdown').hidden);
   await page.keyboard.down('KeyW');try{await page.waitForFunction(()=>Number(document.querySelector('#speed').textContent)>5)}finally{await page.keyboard.up('KeyW')}
   await page.locator('#pauseBtn').click();assert.equal(await page.locator('#paused').isVisible(),true);await page.waitForTimeout(150);const pausedTime=await page.locator('#raceTime').textContent();await page.waitForTimeout(250);assert.equal(await page.locator('#raceTime').textContent(),pausedTime);
   await page.locator('#resumeBtn').click();await page.waitForFunction(t=>document.querySelector('#paused').hidden&&document.querySelector('#raceTime').textContent!==t,pausedTime);
   await page.locator('#pauseBtn').click();await page.locator('#restartPause').click();await page.waitForFunction(()=>document.querySelector('#paused').hidden&&!document.querySelector('#countdown').hidden);await page.waitForFunction(()=>document.querySelector('#countdown').hidden);
   await page.keyboard.down('KeyW');try{await page.waitForFunction(()=>Number(document.querySelector('#speed').textContent)>5)}finally{await page.keyboard.up('KeyW')}
   await page.locator('#pauseBtn').click();await page.locator('#pauseHome').click();assert.equal(await page.locator('#welcome').isVisible(),true);assert.equal(await page.locator('#paused').isVisible(),false);
   await page.locator('#startBtn').click();await page.waitForFunction(()=>document.querySelector('#welcome').hidden&&document.querySelector('#countdown').hidden);

  }
  const renderer=await page.locator('#scene').evaluate(canvas=>{const gl=canvas.getContext('webgl2');if(!gl||gl.isContextLost())return null;const ext=gl.getExtension('WEBGL_debug_renderer_info');return {version:gl.getParameter(gl.VERSION),renderer:gl.getParameter(gl.RENDERER),vendor:gl.getParameter(gl.VENDOR),unmaskedRenderer:ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):null,unmaskedVendor:ext?gl.getParameter(ext.UNMASKED_VENDOR_WEBGL):null}});
  assert.ok(renderer,'Live WebGL2 required');
  const png=PNG.sync.read(await page.locator('#scene').screenshot({path:join(directory,'route-'+report.routes.length+'.png')})),colors=new Set();for(let i=0;i<png.data.length;i+=4)colors.add(`${png.data[i]>>3},${png.data[i+1]>>3},${png.data[i+2]>>3}`);assert.ok(colors.size>100,'non-background canvas pixels');
  if(path==='/rapier/'){await page.locator('#exit').click();assert.equal(await page.evaluate(()=>window.rapierComparison.snapshot().closed),true);await page.goto(resources.origin);await page.locator('#loading.done').waitFor({state:'attached'});}
  assert.deepEqual(errors,[]);report.routes.push({path,renderer,class:classifyRenderer(renderer.unmaskedRenderer||renderer.renderer),colors:colors.size,passed:true});await context.close();
 }
 report.endIdentity=await identity();assert.deepEqual(report.endIdentity,report.startIdentity,'source and actual production artifacts must remain unchanged');report.passed=true;
}catch(error){report.errors.push(error.stack||String(error));process.exitCode=1}
finally{report.cleanupErrors=await cleanupSmoke({browser,server:resources?.server||{listening:false},db:resources?.db||{close(){}}});if(report.cleanupErrors.length){report.passed=false;process.exitCode=1}report.resourcesAfterClose={browserDisconnected:browser?disconnected:null,browserConnected:browser?browser.isConnected():false,serverListening:resources?.server.listening??false,serverAddress:resources?.server.address()??null};if(report.resourcesAfterClose.browserConnected||report.resourcesAfterClose.serverListening||(browser&&!disconnected)){report.passed=false;process.exitCode=1;report.cleanupErrors.push('owned browser connection or listener did not close')}report.finishedAt=new Date().toISOString();await writeFile(join(directory,'report.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2))}
