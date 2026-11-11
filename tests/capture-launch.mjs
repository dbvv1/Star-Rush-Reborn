import assert from 'node:assert/strict';
import {win32} from 'node:path';
import {smokeLaunchOptions, assertArgv} from './smoke-launch.mjs';
import {classifyRenderer} from '../capture-mode.mjs';

const timingArgs=Object.freeze(['--disable-background-timer-throttling','--disable-renderer-backgrounding','--disable-backgrounding-occluded-windows']);
export const hardwareArgs=Object.freeze(['--enable-gpu','--use-angle=d3d11','--enable-automation']);

export function parseCaptureArguments(args){
 const result={profile:'software',repeat:false,hardwareEvidencePath:null,query:{}};
 let selected=null;
 const seen=new Set();
 for(let i=0;i<args.length;i++){
  const arg=args[i];
  assert(!seen.has(arg),'Duplicate argument: '+arg);seen.add(arg);
  if(arg==='--headful')throw Error('Only headless capture is supported');
  if(arg==='--repeat')result.repeat=true;
  else if(arg==='--software'||arg==='--hardware'){
   assert(selected===null,'Select one capture rendering profile');
   selected=arg;result.profile=arg==='--hardware'?'hardware':'software';
  }else if(['--seed','--t','--frames','--input','--hardware-evidence'].includes(arg)){
   const value=args[++i];assert(typeof value==='string'&&value.trim()&&!value.startsWith('--'),'Missing '+arg+' value');
   if(arg==='--hardware-evidence')result.hardwareEvidencePath=value;
   else result.query[arg.slice(2)]=value;
  }else throw Error('Unknown argument: '+arg);
 }
 assert(result.profile==='hardware'||result.hardwareEvidencePath===null,'Hardware evidence requires --hardware');
 assert(result.profile!=='hardware'||result.hardwareEvidencePath,'--hardware requires independent --hardware-evidence');
 return result;
}

export function captureLaunchOptions({profile='software',env=process.env,platform=process.platform}={}){
 assert(['software','hardware'].includes(profile),'Unknown capture rendering profile');
 const executablePath=env.STAR_RUSH_CAPTURE_CHROMIUM;
 if(profile==='software'){
  const options=smokeLaunchOptions({...env,STAR_RUSH_SMOKE_CHROMIUM:executablePath});
  return {...options,args:[...options.args,...timingArgs]};
 }
 assert.equal(platform,'win32','D3D11 capture requires the existing Windows receiver');
 assert(typeof executablePath==='string'&&win32.isAbsolute(executablePath),'Hardware capture requires a verified existing absolute Chromium path');
 assert(env.STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX===undefined,'Hardware capture does not accept a no-sandbox override');
 // No retry or backend fallback. Unlike the existing software profile, keep Chromium's sandbox.
 return {headless:true,chromiumSandbox:true,executablePath,args:[...hardwareArgs,...timingArgs],timeout:30000};
}

export function assertCaptureArgv(argv,profile='software'){
 if(profile==='software')return assertArgv(argv,{headless:true});
 assert.equal(profile,'hardware','Unknown capture rendering profile');
 assert(Array.isArray(argv)&&argv.every(a=>typeof a==='string'),'Actual Chromium argv required');
 assert(argv.some(a=>a==='--headless'||a==='--headless=new'),'Headless Chromium required');
 assert(argv.filter(a=>a.startsWith('--headless')).every(a=>a==='--headless'||a==='--headless=new'),'Conflicting headless mode');
 for(const flag of hardwareArgs)assert(argv.includes(flag),'Missing hardware browser argument: '+flag);
 assert(argv.filter(a=>a.startsWith('--use-angle')).every(a=>a==='--use-angle=d3d11'),'Conflicting ANGLE backend');
 assert(!argv.some(a=>/^--(?:no-sandbox|disable-setuid-sandbox|disable-gpu|disable-gpu-compositing|enable-unsafe-swiftshader)(?:=|$)/.test(a)),'Unsafe or software-only hardware argument');
 assert(!argv.some(a=>a.startsWith('--use-gl')||a.startsWith('--use-vulkan')),'Conflicting graphics backend');
}

export function assertCaptureEvidence(profile,evidence){
 assert(['software','hardware'].includes(profile),'Unknown capture rendering profile');
 if(profile==='software'){assert(evidence===null,'Software capture must not claim hardware evidence');return;}
 assert(evidence&&evidence.hardwareAccelerated===true&&typeof evidence.source==='string'&&evidence.source.trim()&&typeof evidence.renderer==='string'&&evidence.renderer.trim(),'Hardware evidence needs independent source, exact renderer, and hardwareAccelerated: true');
 assert.equal(classifyRenderer(evidence.renderer,{hardwareVerified:true}),'gpu','Software evidence cannot authorize a hardware label');
}

export function assertCaptureRenderer(metadata,profile,evidence){
 assertCaptureEvidence(profile,evidence);
 const raw=metadata.renderer||metadata.rendererInfo?.maskedRenderer;
 const verified=profile==='hardware'&&typeof metadata.renderer==='string'&&evidence.renderer===metadata.renderer;
 if(profile==='hardware')assert(verified,'Hardware evidence must match the exact current unmasked renderer');
 const classification=classifyRenderer(raw,{canvas:metadata.rendererInfo?.api==='canvas2d',hardwareVerified:verified});
 assert.equal(classification,profile==='hardware'?'gpu':'software','Renderer does not match the selected capture profile');
 return classification;
}

// Derive expectations before launch; a typo must not silently request default.
// Academy keeps the requested space flag even though its scenery is unchanged.
export function captureSideExpectation(url){
 assert(['/', '/road', '/road/'].includes(url.pathname),'Capture requires the default or road entry');
 const expected={space:false,power:false};
 for(const [key,value,flag] of [['environment','coast-space-v1','space'],['handling','power-tires-v1','power']]){
  const values=url.searchParams.getAll(key);
  assert(values.length<=1,'Duplicate candidate parameter: '+key);
  if(values.length){assert.equal(values[0],value,'Unknown candidate parameter: '+key);expected[flag]=true;}
 }
 return expected;
}
export function assertCaptureSideStatus(status,expected){
 assert(status&&typeof status==='object','Missing starSideStatus');
 assert.equal(status.space,expected.space,'Space candidate mismatch or fallback');
 assert.equal(status.power,expected.power,'Power candidate mismatch or fallback');
 assert.deepEqual(status.warnings,[],'Candidate warnings');
 assert.equal(status.backend,'webgl2','Candidate backend mismatch');
 assert(Number.isSafeInteger(status.ticks)&&status.ticks>=0,'Invalid candidate ticks');
}
