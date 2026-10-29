import {isAbsolute} from 'node:path';

// Same initial renderer policy as backlog-smoke: use the selected browser's
// normal renderer once. No fallback launch, unsafe flags or renderer retries.
export function raceReviewSmokeLaunchOptions(env=process.env){
 const executablePath=env.STAR_RUSH_SMOKE_CHROMIUM;
 if(executablePath&&!isAbsolute(executablePath))throw Error('STAR_RUSH_SMOKE_CHROMIUM must be an absolute path');
 if(env.STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX!==undefined)throw Error('sandbox override is not allowed for race-review smoke');
 return {headless:true,chromiumSandbox:true,ignoreDefaultArgs:['--enable-unsafe-swiftshader'],args:[],...(executablePath?{executablePath}:{}),timeout:30000};
}

// Serializable observer passed directly to Playwright evaluate. Never mutates
// game state, clock, input or renderer configuration.
export function readSmokeWebGL(canvas){
 const gl=canvas.getContext('webgl2');
 if(!gl||gl.isContextLost())return null;
 const ext=gl.getExtension('WEBGL_debug_renderer_info');
 return {version:gl.getParameter(gl.VERSION),renderer:gl.getParameter(gl.RENDERER),vendor:gl.getParameter(gl.VENDOR),unmaskedRenderer:ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):null,unmaskedVendor:ext?gl.getParameter(ext.UNMASKED_VENDOR_WEBGL):null};
}
