import assert from 'node:assert/strict';
import {isAbsolute} from 'node:path';

// Dedicated case-only browsers. The outer execution sandbox remains unchanged.
export const requiredBrowserArgs=Object.freeze(['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']);
export const caseOrigins=Object.freeze([
 'https://dbvv1-moba-like.pretty-llama-9945.chatgpt.site',
 'https://dbvv1-fps-like.pretty-llama-9945.chatgpt.site',
 'https://dbvv1-star-rush.pretty-llama-9945.chatgpt.site',
]);
export function assertCaseUrl(value){
 const url=new URL(value);
 assert(!url.username&&!url.password,'Credentials are not allowed in capture URLs');
 const loopback=url.protocol==='http:'&&['127.0.0.1','localhost','[::1]'].includes(url.hostname);
 assert(loopback||caseOrigins.includes(url.origin),'Only local previews or the three case sites are allowed');
 return url;
}
export function assertArgv(argv,{headless=true}={}){
 assert(Array.isArray(argv)&&argv.every(a=>typeof a==='string'),'Actual Chromium argv required');
 if(headless)assert(argv.some(a=>/^--headless(?:=|$)/.test(a)),'Headless Chromium required');
 for(const flag of requiredBrowserArgs)assert(argv.includes(flag),'Missing required browser argument: '+flag);
 assert(argv.filter(a=>a.startsWith('--use-angle=')).every(a=>a==='--use-angle=swiftshader'),'Conflicting ANGLE backend');
}
export async function restrictCaseContext(context,base){
 const origin=assertCaseUrl(base).origin;
 // Context routing includes popups; service workers must be blocked at creation.
 await context.route('**/*',async route=>{
  try{
   assert.equal(assertCaseUrl(route.request().url()).origin,origin);
   // Playwright only routes the first URL in a redirect chain. Never follow it.
   const response=await route.fetch({maxRedirects:0});
   if(response.status()>=300&&response.status()<400)return route.abort('blockedbyclient');
   return route.fulfill({response});
  }catch{return route.abort('blockedbyclient');}
 });
 // Fixed captures do not need WebSocket services, even on the preview origin.
 await context.routeWebSocket('**/*',socket=>socket.close());
}

// Dedicated software capture. No executable fallback or outer-sandbox change.
export function smokeLaunchOptions(env=process.env){
 const executablePath=env.STAR_RUSH_SMOKE_CHROMIUM;
 if(executablePath&&!isAbsolute(executablePath))throw Error('STAR_RUSH_SMOKE_CHROMIUM must be an absolute path');
 const legacyOverride=env.STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX;
 if(legacyOverride!==undefined&&legacyOverride!=='1')throw Error('STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX must be unset or 1');
 return {headless:true,chromiumSandbox:false,args:[...requiredBrowserArgs],timeout:30000,...(executablePath?{executablePath}:{})};
}
