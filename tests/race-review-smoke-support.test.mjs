import test from 'node:test';
import assert from 'node:assert/strict';
import {raceReviewSmokeLaunchOptions,readSmokeWebGL} from './race-review-smoke-support.mjs';
test('focused smoke uses the backlog initial sandbox and renderer policy',()=>{
 assert.deepEqual(raceReviewSmokeLaunchOptions({}),{headless:true,chromiumSandbox:true,ignoreDefaultArgs:['--enable-unsafe-swiftshader'],args:[],timeout:30000});
 assert.equal(raceReviewSmokeLaunchOptions({STAR_RUSH_SMOKE_CHROMIUM:'/usr/bin/chromium'}).executablePath,'/usr/bin/chromium');
 assert.throws(()=>raceReviewSmokeLaunchOptions({STAR_RUSH_SMOKE_CHROMIUM:'chromium'}),/absolute/);
 for(const value of ['1','0',''])assert.throws(()=>raceReviewSmokeLaunchOptions({STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX:value}),/not allowed/);
});
const values={version:'WebGL 2.0 raw',renderer:'WebKit WebGL raw',vendor:'WebKit raw',unmaskedRenderer:'ANGLE raw identity',unmaskedVendor:'Vendor raw identity'};
function canvas(extension=true,lost=false){return {getContext(name){assert.equal(name,'webgl2');return {VERSION:'version',RENDERER:'renderer',VENDOR:'vendor',isContextLost(){return lost},getExtension(name){assert.equal(name,'WEBGL_debug_renderer_info');return extension?{UNMASKED_RENDERER_WEBGL:'unmaskedRenderer',UNMASKED_VENDOR_WEBGL:'unmaskedVendor'}:null},getParameter(key){return values[key]}}}};}
test('observer retains all five raw identity fields without normalization',()=>assert.deepEqual(readSmokeWebGL(canvas()),values));
test('missing debug extension keeps native fields and explicit nulls',()=>assert.deepEqual(readSmokeWebGL(canvas(false)),{...values,unmaskedRenderer:null,unmaskedVendor:null}));
test('missing or lost contexts cannot produce renderer evidence',()=>{assert.equal(readSmokeWebGL({getContext(){return null}}),null);assert.equal(readSmokeWebGL(canvas(true,true)),null)});
