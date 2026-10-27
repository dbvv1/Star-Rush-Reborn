// Use a dedicated sandboxed Chromium. Never attach to a shared desktop browser.
import assert from 'node:assert/strict';
import {mkdir, writeFile, readFile} from 'node:fs/promises';
import {resolve, isAbsolute, join} from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {chromium} from 'playwright';
import {PNG} from 'pngjs';
import {CAPTURE_PRESETS} from '../capture-presets.mjs';
import {parseCaptureOptions, classifyRenderer} from '../capture-mode.mjs';

const [base, output, shot='coast-chase', ...args]=process.argv.slice(2);
if(!base||!output)throw Error('Usage: npm run capture -- <local-base-url> <new-output-directory> [shot] [--repeat] [--software] [--headful] [--seed n] [--t seconds] [--frames n] [--input name] [--hardware-evidence file]');
const url=new URL(base);url.searchParams.set('shot',shot);
let repeat=false,software=false,headful=false,hardwareEvidencePath=null;
for(let index=0;index<args.length;index++){
 const arg=args[index];
 if(arg==='--repeat')repeat=true;
 else if(arg==='--software')software=true;
 else if(arg==='--headful')headful=true;
 else if(['--seed','--t','--frames','--input','--hardware-evidence'].includes(arg)){
  const value=args[++index];if(value===undefined)throw Error('Missing '+arg+' value');
  if(arg==='--hardware-evidence')hardwareEvidencePath=value;else url.searchParams.set(arg.slice(2),value);
 }else throw Error('Unknown argument: '+arg);
}
const options=parseCaptureOptions(url.search),preset=CAPTURE_PRESETS[shot];
const evidence=hardwareEvidencePath?JSON.parse(await readFile(hardwareEvidencePath,'utf8')):null;
if(evidence&&(!evidence.source||!evidence.renderer||evidence.hardwareAccelerated!==true))throw Error('Hardware evidence needs source, exact renderer, and hardwareAccelerated: true');
const directory=resolve(output);await mkdir(directory,{recursive:false}); // Never reuse a stale passing receipt.
const executablePath=process.env.STAR_RUSH_CAPTURE_CHROMIUM;
if(executablePath&&!isAbsolute(executablePath))throw Error('STAR_RUSH_CAPTURE_CHROMIUM must be absolute');
const launchOptions={headless:!headful,chromiumSandbox:true,ignoreDefaultArgs:['--enable-unsafe-swiftshader'],
 args:[...(software?['--use-angle=swiftshader']:[]),'--disable-background-timer-throttling','--disable-renderer-backgrounding','--disable-backgrounding-occluded-windows'],
 ...(executablePath?{executablePath}:{}),timeout:30000};
const report={passed:false,scope:'deterministic-scene-only',shot,options:{...options,preset:undefined},launchOptions,runs:[],errors:[]};
try{report.commit=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();report.dirty=Boolean(execFileSync('git',['status','--porcelain','--untracked-files=no'],{encoding:'utf8'}).trim());}catch{report.commit=null;}
let browser;
const save=()=>writeFile(join(directory,'report.json'),JSON.stringify(report,null,2)+'\n');
await save();
try{
 browser=await chromium.launch(launchOptions);report.browser=browser.version();
 for(let run=0;run<(repeat?2:1);run++){
  const context=await browser.newContext({viewport:{width:preset.width,height:preset.height},deviceScaleFactor:1,locale:'en-US',timezoneId:'UTC'});
  try{
   const page=await context.newPage(),failures=[];
   page.on('pageerror',error=>failures.push(String(error)));
   page.on('console',message=>{if(message.type()==='error')failures.push(message.text());});
   page.on('requestfailed',request=>failures.push(request.url()+': '+request.failure()?.errorText));
   page.on('response',response=>{if(response.status()>=400)failures.push(response.status()+' '+response.url());});
   // Preserve the application's assets, but refuse unrelated third-party requests.
   await page.route('**/*',route=>new URL(route.request().url()).origin===url.origin?route.continue():route.abort('blockedbyclient'));
   await page.goto(url.href,{waitUntil:'domcontentloaded'});
   const script=await page.locator('script[src]').last().getAttribute('src');
   const served=await page.request.get(new URL(script,url).href);assert(served.ok(),'game bundle must load');
   const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
   report.servedBundleSha256=hash(await served.body());
   assert.equal(report.servedBundleSha256,hash(await readFile(new URL('../dist/client/road/game.js',import.meta.url))),'served bundle must match the local road build whose commit is recorded');
   const captured=[];
   for(let frame=0;frame<options.frames;frame++){
    await page.waitForFunction(()=>window.__shot?.ready||window.__shot?.error,null,{polling:100,timeout:120000});
    const metadata=await page.evaluate(()=>window.__shot);
    assert(!metadata.error,metadata.error);assert.equal(metadata.frame,frame);
    assert.equal(metadata.viewport.width,preset.width);assert.equal(metadata.viewport.height,preset.height);assert.equal(metadata.viewport.dpr,1);
    const hardwareVerified=Boolean(evidence&&evidence.renderer===metadata.renderer);
    if(evidence)assert(hardwareVerified,'hardware evidence renderer must match the exact current raw renderer');
    const classification=classifyRenderer(metadata.renderer||metadata.rendererInfo.maskedRenderer,{canvas:metadata.rendererInfo.api==='canvas2d',hardwareVerified});
    if(software)assert.equal(classification,'software','software launch must not be labelled GPU');
    const stem=`${shot}-${classification}-run${run+1}-${String(frame).padStart(5,'0')}`;
    assert.equal(await page.locator('#error').isVisible(),false,'visible game error');
    const sceneBytes=await page.locator('#scene').screenshot({path:join(directory,stem+'-scene.png'),style:'#game > :not(#scene), #captureExit {visibility:hidden!important}'});
    const scene=PNG.sync.read(sceneBytes),colors=new Map();
    for(let i=0;i<scene.data.length;i+=4){const key=`${scene.data[i]>>3},${scene.data[i+1]>>3},${scene.data[i+2]>>3}`;colors.set(key,(colors.get(key)||0)+1);}
    assert(colors.size>100&&Math.max(...colors.values())/(scene.width*scene.height)<.99,'scene must contain non-background pixels, not only a HUD');
    const bytes=await page.screenshot({path:join(directory,stem+'.png'),animations:'disabled'});
    const png=PNG.sync.read(bytes),hash=createHash('sha256').update(png.data).digest('hex');
    const record={...metadata,classification,hardwareEvidence:hardwareVerified?evidence:null,file:stem+'.png',sceneFile:stem+'-scene.png',scenePixelSha256:createHash('sha256').update(scene.data).digest('hex'),pixelSha256:hash};
    await writeFile(join(directory,stem+'.json'),JSON.stringify(record,null,2)+'\n');captured.push(record);
    if(frame+1<options.frames)await page.evaluate(()=>window.__shotNext());
   }
   assert.deepEqual(failures,[],'browser errors');report.runs.push(captured);await save();
  }finally{await context.close();}
 }
 if(repeat){
  for(let frame=0;frame<options.frames;frame++){
   assert.equal(report.runs[0][frame].pixelSha256,report.runs[1][frame].pixelSha256,'repeat pixels differ at frame '+frame);
   assert.equal(report.runs[0][frame].scenePixelSha256,report.runs[1][frame].scenePixelSha256,'repeat scene pixels differ at frame '+frame);
   for(const key of ['player','camera','t','tick','seed','state','elapsed','rendererInfo'])assert.deepEqual(report.runs[0][frame][key],report.runs[1][frame][key],key+' differs at frame '+frame);
  }
 }
 report.passed=true;
}catch(error){report.errors.push(error.stack||String(error));process.exitCode=1;}
finally{if(browser)await browser.close();await save();console.log(JSON.stringify({passed:report.passed,directory,errors:report.errors},null,2));}
