// Use a dedicated case-only Chromium inside the execution sandbox. Never attach to a shared desktop browser.
import assert from 'node:assert/strict';
import {mkdir, writeFile, readFile} from 'node:fs/promises';
import {resolve, join} from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {assertCaseUrl,restrictCaseContext} from './smoke-launch.mjs';
import {parseCaptureArguments,captureLaunchOptions,assertCaptureArgv,assertCaptureEvidence,assertCaptureRenderer} from './capture-launch.mjs';
import {CAPTURE_PRESETS} from '../capture-presets.mjs';
import {parseCaptureOptions} from '../capture-mode.mjs';

const [base, output, shot='coast-chase', ...args]=process.argv.slice(2);
if(!base||!output)throw Error('Usage: npm run capture -- <local-base-url> <new-output-directory> [shot] [--repeat] [--software | --hardware --hardware-evidence file] [--seed n] [--t seconds] [--frames n] [--input name]');
const url=assertCaseUrl(base);url.searchParams.set('shot',shot);
const {profile,repeat,hardwareEvidencePath,query}=parseCaptureArguments(args);
for(const [key,value] of Object.entries(query))url.searchParams.set(key,value);
const options=parseCaptureOptions(url.search),preset=CAPTURE_PRESETS[shot];
const evidence=hardwareEvidencePath?JSON.parse(await readFile(hardwareEvidencePath,'utf8')):null;
assertCaptureEvidence(profile,evidence);
const launchOptions=captureLaunchOptions({profile});
const {chromium}=await import('playwright'),{PNG}=await import('pngjs');
const directory=resolve(output);await mkdir(directory,{recursive:false}); // Never reuse a stale passing receipt.
const report={passed:false,scope:'deterministic-scene-only',shot,renderingProfile:profile,options:{...options,preset:undefined},launchOptions,runs:[],errors:[]};
try{report.commit=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();report.dirty=Boolean(execFileSync('git',['status','--porcelain','--untracked-files=no'],{encoding:'utf8'}).trim());}catch{report.commit=null;}
let browser;
const save=()=>writeFile(join(directory,'report.json'),JSON.stringify(report,null,2)+'\n');
await save();
try{
 browser=await chromium.launch(launchOptions);report.browser=browser.version();
 const session=await browser.newBrowserCDPSession();const argv=(await session.send('Browser.getBrowserCommandLine')).arguments;assertCaptureArgv(argv,profile);await session.detach();report.actualRequiredArgs=launchOptions.args.filter(arg=>argv.includes(arg));
 for(let run=0;run<(repeat?2:1);run++){
  const context=await browser.newContext({viewport:{width:preset.width,height:preset.height},deviceScaleFactor:1,locale:'en-US',timezoneId:'UTC',serviceWorkers:'block'});
  try{
   const page=await context.newPage(),failures=[];
   page.on('pageerror',error=>failures.push(String(error)));
   page.on('console',message=>{if(message.type()==='error')failures.push(message.text());});
   page.on('requestfailed',request=>failures.push(request.url()+': '+request.failure()?.errorText));
   page.on('response',response=>{if(response.status()>=400)failures.push(response.status()+' '+response.url());});
   // Preserve the application's assets, but refuse unrelated third-party requests.
   await restrictCaseContext(context,url.href);
   await page.goto(url.href,{waitUntil:'domcontentloaded'});
   const script=await page.locator('script[src]').last().getAttribute('src');
   const bundleUrl=assertCaseUrl(new URL(script,url).href);assert.equal(bundleUrl.origin,url.origin);
   const served=await page.request.get(bundleUrl.href,{maxRedirects:0});assert.equal(served.status(),200,'game bundle must load without redirects');
   const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
   report.servedBundleSha256=hash(await served.body());
   assert.equal(report.servedBundleSha256,hash(await readFile(new URL('../dist/client/road/game.js',import.meta.url))),'served bundle must match the local road build whose commit is recorded');
   const captured=[];
   for(let frame=0;frame<options.frames;frame++){
    await page.waitForFunction(()=>window.__shot?.ready||window.__shot?.error,null,{polling:100,timeout:120000});
    const metadata=await page.evaluate(()=>window.__shot);
    assert(!metadata.error,metadata.error);assert.equal(metadata.frame,frame);
    assert.equal(metadata.viewport.width,preset.width);assert.equal(metadata.viewport.height,preset.height);assert.equal(metadata.viewport.dpr,1);
    report.lastRendererObservation={renderer:metadata.renderer,rendererInfo:metadata.rendererInfo,backend:metadata.backend};
    await save(); // Preserve the actual failure observation before enforcing the selected profile.
    const classification=assertCaptureRenderer(metadata,profile,evidence);
    const hardwareVerified=classification==='gpu';
    const stem=`${shot}-${classification}-run${run+1}-${String(frame).padStart(5,'0')}`;
    assert.equal(await page.locator('#error').isVisible(),false,'visible game error');
    assert.equal(metadata.backend,'webgl2');assert.match(metadata.pngDataUrl,/^data:image\/png;base64,/);
    const sceneBytes=Buffer.from(metadata.pngDataUrl.split(',')[1],'base64');
    await writeFile(join(directory,stem+'-scene.png'),sceneBytes);
    const scene=PNG.sync.read(sceneBytes),colors=new Map();
    assert.equal(scene.width,1280);assert.equal(scene.height,720);
    for(let i=0;i<scene.data.length;i+=4){const key=`${scene.data[i]>>3},${scene.data[i+1]>>3},${scene.data[i+2]>>3}`;colors.set(key,(colors.get(key)||0)+1);}
    assert(colors.size>100&&Math.max(...colors.values())/(scene.width*scene.height)<.99,'scene must contain non-background pixels, not only a HUD');
    const bytes=sceneBytes;await writeFile(join(directory,stem+'.png'),bytes);
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
