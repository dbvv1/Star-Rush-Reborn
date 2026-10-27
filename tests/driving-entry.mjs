// Both real bundles and same-origin storage boundary; drawing is stubbed, not visual QA.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Window} from 'happy-dom';
import {build} from 'esbuild';
import {clientSource,clientSyntaxSupport} from '../build.mjs';
import vm from 'node:vm';
import {loadSkyAssets} from '../sky-assets.mjs';
const {default:worker}=await import('../dist/server/index.js');
const request=path=>worker.fetch(new Request('https://race.test'+path),{});
for(const path of ['/','/index.html','/road','/road/','/road/index.html','/legacy','/legacy/','/legacy/index.html'])assert.equal((await request(path)).status,200);
assert.match(await (await request('/')).text(),/src="\/game.js/);
assert.match(await (await request('/road')).text(),/src="\/road\/game.js/);
assert.match(await (await request('/legacy')).text(),/src="\/legacy\/game.js/);
assert.equal(await (await request('/game.js')).text(),readFileSync('dist/client/road/game.js','utf8'),'default root is the existing road model');
assert.equal(await (await request('/legacy/game.js')).text(),readFileSync('dist/client/legacy/game.js','utf8'));
assert.equal((await request('/legacy/missing.js')).status,404);
assert.equal(await (await request('/road/game.js')).text(),readFileSync('dist/client/road/game.js','utf8'));
const stored=new Map([['star-rush-runs-reborn',JSON.stringify([{id:'legacy-old',mode:'circuit',track:'coast-reborn',timeMs:1234,seed:73121,distance:4800,score:0,name:'Legacy'}])],['star-rush-best-distance','777'],['star-rush-best-score','888'],['star-rush-best-reborn-coast-reborn',JSON.stringify({time:1,points:[[0,0,0,0,0],[1,10,0,0,0]],splits:[],laps:[1],date:1})],['star-rush-best-reborn-road-v1-coast-reborn',JSON.stringify({time:2,points:[]})]]);
stored.set('star-rush-settings-reborn',JSON.stringify({sensitivity:1.15}));
stored.set('star-rush-settings-road-v1',JSON.stringify({sensitivity:1.1}));
stored.set('star-rush-settings-road-v2',JSON.stringify({sensitivity:.8}));
stored.set('star-rush-runs-road-v1',JSON.stringify([{timeMs:123}]));
stored.set('star-rush-runs-road-v2',JSON.stringify([{id:'road-old',mode:'circuit',track:'coast-reborn',timeMs:9876,score:0,seed:73121,distance:4800,name:'Road'}]));
stored.set('star-rush-best-reborn-road-v2-coast-reborn',JSON.stringify({time:3,points:[[0,0,0,0,0],[1,10,0,0,0]],splits:[],laps:[3],date:1}));
const old=new Map([...stored].filter(([key])=>!key.includes('road-v2')));
async function environment(model,instrumented,initial=stored,storageFails=false){
 const w=new Window({url:'https://race.test'+(model==='road'?'/':'/legacy'),settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}}),errors=[],requests=[];
 w.console.error=(...a)=>errors.push(a.join(' '));w.requestAnimationFrame=()=>1;
 w.fetch=async(url)=>{requests.push(String(url));return new Response(JSON.stringify({runs:[]}));};
 const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:()=>{}});
 w.HTMLCanvasElement.prototype.getContext=t=>t==='2d'?ctx:null;
 Object.defineProperties(w.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
 for(const [k,v]of initial)w.localStorage.setItem(k,v);
 if(storageFails){for(const name of ['getItem','setItem'])Object.defineProperty(w.localStorage,name,{value:()=>{throw new Error('storage unavailable')},configurable:true});}
 w.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
 const hooks=`window.entryQA={renderingOptions,start,finish,goHome,chooseMode,showBoard,loadBoard,roomRequest,localRuns,ghostKey,getBestGhost,get settings(){return settings},get state(){return state},get mode(){return raceMode},get pending(){return pendingRun}};`;
 const code=instrumented?(await build({stdin:{contents:clientSource(hooks,model),resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2022',logLevel:'silent'})).outputFiles[0].text:readFileSync(model==='road'?'dist/client/game.js':'dist/client/legacy/game.js','utf8');
 w.eval(code);if(instrumented)assert.deepEqual(JSON.parse(JSON.stringify(w.entryQA.renderingOptions)),model==='road'?{shading:'lambert',hemisphereIntensity:.7,skyPanorama:process.env.STAR_RUSH_SKY==='baseline'?null:loadSkyAssets().client}:{shading:'toon',hemisphereIntensity:2.2});assert.deepEqual(errors,[]);assert.equal(w.document.querySelector('#error').hidden,true);
 assert.equal(w.document.querySelector('#drivingProfileLink').getAttribute('href'),model==='road'?'/legacy':'/road');
 assert.equal(w.document.querySelector('#game').classList.contains('road-driving'),model==='road');
 assert.equal(w.document.querySelector('#coach').parentElement.classList.contains('right-hud'),model==='road');
 return {w,q:w.entryQA,requests};
}
for(const model of ['legacy','road']){const {w}=await environment(model,false);w.document.querySelector('#startBtn').click();assert.equal(w.document.querySelector('#welcome').hidden,true);await w.happyDOM.close();}
const {w,q,requests}=await environment('road',true);
assert.equal(q.ghostKey(),'star-rush-best-reborn-road-v2-coast-reborn');assert.equal(q.getBestGhost().time,3);assert.equal(q.localRuns().length,1);assert.equal(q.settings.sensitivity,.8);
q.chooseMode('endless');assert.equal(q.mode,'circuit');q.start();assert.equal(q.state,'countdown');q.goHome();assert.equal(q.state,'ready');q.start();q.finish();assert.equal(q.state,'finished');assert.equal(q.pending,null);
assert.equal(w.document.querySelector('#submitRun').disabled,true);w.document.querySelector('#submitRun').click();await q.loadBoard();await assert.rejects(q.roomRequest('create'),/仅本机/);assert.deepEqual(requests,[]);
assert.equal(q.localRuns().length,2);q.finish();assert.equal(q.localRuns().length,2,'duplicate completion does not duplicate record');for(const [k,v]of old)assert.equal(w.localStorage.getItem(k),v,'legacy/old candidate storage must stay untouched: '+k);
w.document.querySelector('#retryBtn').click();assert.equal(q.state,'countdown');q.goHome();assert.equal(q.state,'ready');q.start();assert.equal(q.state,'countdown');q.goHome();
const after=new Map(Array.from({length:w.localStorage.length},(_,i)=>w.localStorage.key(i)).map(k=>[k,w.localStorage.getItem(k)]));await w.happyDOM.close();
const refreshed=await environment('road',true,after);assert.equal(refreshed.q.localRuns().length,2);assert.equal(refreshed.q.settings.sensitivity,.8);assert.equal(refreshed.q.getBestGhost().time,3);await refreshed.w.happyDOM.close();
const legacy=await environment('legacy',true,after);assert.equal(legacy.q.localRuns()[0].timeMs,1234);assert.equal(legacy.q.ghostKey(),'star-rush-best-reborn-coast-reborn');assert.equal(legacy.q.getBestGhost().time,1);assert.equal(legacy.q.settings.sensitivity,1.15);await legacy.q.loadBoard();assert.equal(legacy.requests.length,1);await legacy.w.happyDOM.close();
const unavailable=await environment('road',true,new Map(),true);unavailable.q.start();unavailable.q.finish();assert.equal(unavailable.q.state,'finished');unavailable.q.goHome();unavailable.q.start();assert.equal(unavailable.q.state,'countdown');await unavailable.w.happyDOM.close();
console.log('Default road + legacy entry: bundles/start/retry/home/refresh; current road-v2 retained; legacy/road-v1 untouched; no road API requests; storage failure remains playable (Canvas stub, not visual QA)');

// esbuild preserves all real Three shader strings; formatting is not shader trimming.
const shaderValues=[];
for(const supported of [{'template-literal':true},clientSyntaxSupport]){
 const built=await build({stdin:{contents:"import {ShaderChunk} from 'three';globalThis.shaders=ShaderChunk;",resolveDir:process.cwd()},bundle:true,minify:true,target:'es2022',supported,format:'iife',write:false,logLevel:'silent'});
 const scope={};vm.runInNewContext(built.outputFiles[0].text,scope);shaderValues.push(JSON.parse(JSON.stringify(scope.shaders)));
}
assert.deepEqual(shaderValues[0],shaderValues[1]);assert(Object.keys(shaderValues[0]).length>100);
for(const file of ['dist/client/game.js','dist/client/road/game.js','dist/client/legacy/game.js']){const text=readFileSync(file,'utf8');assert.doesNotMatch(text,/[ \t]+$/m,file+' trailing whitespace');assert.doesNotMatch(text,/^ +\t/m,file+' space before tab');}
console.log('Three ShaderChunk strings byte-identical across literal encoding; generated clients whitespace-clean');
