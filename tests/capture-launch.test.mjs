import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {Window} from 'happy-dom';
import {createSideCandidates} from '../side-candidates.mjs';
import {mkdtempSync,existsSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {parseCaptureArguments,captureLaunchOptions,hardwareArgs,assertCaptureArgv,assertCaptureEvidence,assertCaptureRenderer,captureSideExpectation,assertCaptureSideStatus} from './capture-launch.mjs';

test('default remains software; hardware is explicit and needs independent evidence',()=>{
 assert.deepEqual(parseCaptureArguments([]),{profile:'software',repeat:false,hardwareEvidencePath:null,query:{}});
 assert.equal(parseCaptureArguments(['--software','--repeat']).profile,'software');
 assert.deepEqual(parseCaptureArguments(['--hardware','--hardware-evidence','proof.json','--seed','73121','--t','28','--frames','1','--input','road-tour']),{profile:'hardware',repeat:false,hardwareEvidencePath:'proof.json',query:{seed:'73121',t:'28',frames:'1',input:'road-tour'}});
 for(const args of [['--headful'],['--hardware'],['--hardware-evidence','proof.json'],['--hardware','--software'],['--software','--hardware'],['--repeat','--repeat'],['--seed'],['--seed',''],['--seed','--repeat'],['--unknown'],['--seed','1','--seed','2']])assert.throws(()=>parseCaptureArguments(args));
});

test('D3D11 profile is headless Windows only, with sandbox and exact installed executable',()=>{
 const hardware=captureLaunchOptions({profile:'hardware',platform:'win32',env:{STAR_RUSH_CAPTURE_CHROMIUM:'C:\\approved\\chrome.exe'}});
 assert.equal(hardware.headless,true);assert.equal(hardware.chromiumSandbox,true);
 assert.equal(hardware.ignoreDefaultArgs,undefined);assert.equal(hardware.executablePath,'C:\\approved\\chrome.exe');
 for(const flag of hardwareArgs)assert(hardware.args.includes(flag));
 assertCaptureArgv(['--headless=new',...hardware.args],'hardware');
 assert(!hardware.args.some(a=>/swiftshader|no-sandbox/.test(a)));
 for(const options of [{profile:'other'},{profile:'hardware',platform:'linux',env:{}},{profile:'hardware',platform:'win32',env:{}},{profile:'hardware',platform:'win32',env:{STAR_RUSH_CAPTURE_CHROMIUM:'chrome.exe'}},{profile:'hardware',platform:'win32',env:{STAR_RUSH_CAPTURE_CHROMIUM:'C:\\approved\\chrome.exe',STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX:'1'}}])assert.throws(()=>captureLaunchOptions(options));
 assert.throws(()=>captureLaunchOptions({env:{STAR_RUSH_CAPTURE_CHROMIUM:'chrome.exe'}}),/absolute/);
});

test('actual hardware argv rejects missing, unsafe and conflicting arguments',()=>{
 const argv=['--headless',...hardwareArgs];assertCaptureArgv(argv,'hardware');
 for(const flag of argv)assert.throws(()=>assertCaptureArgv(argv.filter(a=>a!==flag),'hardware'));
 for(const extra of ['--no-sandbox','--no-sandbox=1','--disable-setuid-sandbox','--disable-gpu','--disable-gpu-compositing','--enable-unsafe-swiftshader','--use-angle=swiftshader','--use-angle','--use-gl=angle','--use-vulkan=native','--headless=false'])assert.throws(()=>assertCaptureArgv([...argv,extra],'hardware'));
 for(const argv of [null,[],[null]])assert.throws(()=>assertCaptureArgv(argv,'hardware'));
 assert.throws(()=>assertCaptureArgv(['--headless',...hardwareArgs],'software'));
});

test('renderer evidence cannot label software, masked-only or mismatched output as hardware',()=>{
 const renderer='ANGLE (NVIDIA, Direct3D11)',evidence={hardwareAccelerated:true,renderer,source:'independent GPU diagnostic'};
 const metadata={renderer,rendererInfo:{api:'webgl2',maskedRenderer:'WebKit WebGL'}};
 assertCaptureEvidence('hardware',evidence);assert.equal(assertCaptureRenderer(metadata,'hardware',evidence),'gpu');
 assert.equal(assertCaptureRenderer({renderer:'Google SwiftShader',rendererInfo:{api:'webgl2'}},'software',null),'software');
 for(const value of [null,{}, {...evidence,source:''},{...evidence,source:' '},{...evidence,renderer:''},{...evidence,hardwareAccelerated:false},{...evidence,renderer:'SwiftShader'}])assert.throws(()=>assertCaptureEvidence('hardware',value));
 for(const sample of [{...metadata,renderer:'other GPU'},{...metadata,renderer:null},{renderer:'SwiftShader',rendererInfo:{api:'webgl2'}},{...metadata,rendererInfo:{api:'canvas2d'}}])assert.throws(()=>assertCaptureRenderer(sample,'hardware',evidence));
 assert.throws(()=>assertCaptureEvidence('software',evidence));assert.throws(()=>assertCaptureRenderer(metadata,'software',null));
});

test('real CLI rejects unsafe or missing inputs before output creation or browser launch',()=>{
 const root=mkdtempSync(join(tmpdir(),'star-capture-cli-'));
 try{
  for(const [index,args] of [['--headful'],['--hardware'],['--hardware','--hardware-evidence',join(root,'missing.json')],['--hardware','--software']].entries()){
   const output=join(root,String(index));
   const result=spawnSync(process.execPath,['tests/capture.mjs','http://127.0.0.1:4173/road',output,'coast-chase',...args],{encoding:'utf8',timeout:10000,windowsHide:true});
   assert.equal(result.error,undefined);assert.notEqual(result.status,0);assert.equal(existsSync(output),false);
   assert.match(result.stderr,/headless|requires|ENOENT|Select one/);
  }
 }finally{rmSync(root,{recursive:true,force:true});}
});


test('capture side expectations distinguish default, space, power and combined on both road entries',()=>{
 for(const path of ['/', '/road', '/road/'])for(const [query,space,power] of [['',false,false],['environment=coast-space-v1',true,false],['handling=power-tires-v1',false,true],['environment=coast-space-v1&handling=power-tires-v1',true,true]]){
  const url=new URL('http://127.0.0.1:4173'+path+'?'+query+'&shot=academy-depth');
  const expected=captureSideExpectation(url);assert.deepEqual(expected,{space,power});
  assertCaptureSideStatus({space,power,backend:'webgl2',warnings:[],ticks:0},expected);
  assertCaptureSideStatus({space,power,backend:'webgl2',warnings:[],ticks:1680},expected);
 }
 for(const path of ['/legacy','/rapier/','/unknown'])assert.throws(()=>captureSideExpectation(new URL('http://127.0.0.1'+path)));
 for(const query of ['environment=','environment=typo','handling=typo','environment=coast-space-v1&environment=coast-space-v1','handling=power-tires-v1&handling=power-tires-v1'])assert.throws(()=>captureSideExpectation(new URL('http://127.0.0.1/?'+query)));
});

test('missing diagnostics, fallback, warnings and switch mismatch fail for every requested combination',()=>{
 for(const space of [false,true])for(const power of [false,true]){
  const expected={space,power},valid={space,power,backend:'webgl2',warnings:[],ticks:1680};
  for(const invalid of [null,undefined,{}, {...valid,space:!space},{...valid,power:!power},{...valid,warnings:['fallback']},{...valid,warnings:undefined},{...valid,backend:'canvas2d'},{...valid,ticks:-1},{...valid,ticks:NaN},{...valid,ticks:1.5}])assert.throws(()=>assertCaptureSideStatus(invalid,expected));
 }
});


test('capture checks consume the real diagnostic getter and reject its actual rollback',async()=>{
 const w=new Window({url:'http://127.0.0.1:4173/road?environment=coast-space-v1&shot=academy-depth'});
 try{
  const expected=captureSideExpectation(new URL(w.location.href));
  const side=createSideCandidates(w,true,{step(){}});side.renderer('webgl2');side.tick();
  assertCaptureSideStatus(w.starSideStatus,expected);
  side.disable('space');assert.throws(()=>assertCaptureSideStatus(w.starSideStatus,expected),/fallback/);
  assert.equal(w.starSideStatus.space,false);assert.equal(w.starSideStatus.warnings.length,1);
 }finally{await w.happyDOM.close();}
});
