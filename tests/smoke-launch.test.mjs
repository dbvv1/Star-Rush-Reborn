import test from 'node:test';
import assert from 'node:assert/strict';
import {smokeLaunchOptions,requiredBrowserArgs,caseOrigins,assertArgv,assertCaseUrl,restrictCaseContext} from './smoke-launch.mjs';
const launch=smokeLaunchOptions({});
test('required launch flags retain all Playwright defaults',()=>{
 assert.equal(launch.chromiumSandbox,false);assert.equal(launch.ignoreDefaultArgs,undefined);
 assert.deepEqual(launch.args,requiredBrowserArgs);assertArgv(['--headless=new',...launch.args]);
 for(const flag of requiredBrowserArgs)assert.throws(()=>assertArgv(['--headless',...launch.args.filter(a=>a!==flag)]));
 for(const argv of [null,[],[null],launch.args,['--headless',...launch.args,'--use-angle=gl']])assert.throws(()=>assertArgv(argv));
});
test('only exact case origins and HTTP loopback previews are accepted',()=>{
 for(const base of ['http://127.0.0.1:1234','http://localhost:1234','http://[::1]:1234',...caseOrigins])assertCaseUrl(base+'/road/?shot=coast-chase');
 for(const url of ['', 'not a URL','file:///tmp/test','data:text/html,test','https://example.com','http://192.168.1.1','http://127.0.0.2','https://localhost','http://localhost.example.com',caseOrigins[0]+'.example.com',caseOrigins[0]+':444','http://user:password@localhost:1',caseOrigins[0].replace('https:','http:')])assert.throws(()=>assertCaseUrl(url));
});
test('context guard permits only selected origin and blocks external, other local ports and websockets',async()=>{
 let route,websocket;await restrictCaseContext({route:async(_,fn)=>{route=fn;},routeWebSocket:async(_,fn)=>{websocket=fn;}},'http://127.0.0.1:1234');
 const visit=async(url,status=200)=>{let result;await route({request:()=>({url:()=>url}),fetch:async options=>{assert.deepEqual(options,{maxRedirects:0});return {status:()=>status};},fulfill:()=>{result='allow';},abort:()=>{result='block';}});return result;};
 assert.equal(await visit('http://127.0.0.1:1234/road/game.js'),'allow');
 for(const url of ['https://example.com/','http://127.0.0.1:9999/','http://user:pw@127.0.0.1:1234/',caseOrigins[0]])assert.equal(await visit(url),'block');
 for(const status of [301,302,303,307,308])assert.equal(await visit('http://127.0.0.1:1234/redirect',status),'block');
 let closed=false;websocket({close:()=>{closed=true;}});assert.equal(closed,true);
 await assert.rejects(restrictCaseContext({},'https://example.com/'));
});

test('explicit executable is absolute and does not filter defaults',()=>{
 assert.equal(smokeLaunchOptions({STAR_RUSH_SMOKE_CHROMIUM:'/usr/bin/chromium'}).executablePath,'/usr/bin/chromium');
 assert.throws(()=>smokeLaunchOptions({STAR_RUSH_SMOKE_CHROMIUM:'chromium'}),/absolute path/);
 assert.equal(smokeLaunchOptions({STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX:'1'}).chromiumSandbox,false);
 for(const value of ['', '0', 'true'])assert.throws(()=>smokeLaunchOptions({STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX:value}),/unset or 1/);
});
