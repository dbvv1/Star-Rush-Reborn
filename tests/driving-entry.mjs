// Both real bundles and same-origin storage boundary; drawing is stubbed, not visual QA.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Window} from 'happy-dom';
import {build} from 'esbuild';
import {clientSource,clientSyntaxSupport} from '../build.mjs';
import vm from 'node:vm';
const {default:worker}=await import('../dist/server/index.js');
const request=path=>worker.fetch(new Request('https://race.test'+path),{});
for(const path of ['/','/road','/road/','/road/index.html'])assert.equal((await request(path)).status,200);
assert.match(await (await request('/')).text(),/src="\/game.js/);
assert.match(await (await request('/road')).text(),/src="\/road\/game.js/);
assert.equal(await (await request('/road/game.js')).text(),readFileSync('dist/client/road/game.js','utf8'));
const stored=new Map([['star-rush-runs-reborn',JSON.stringify([{mode:'circuit',track:'coast-reborn',timeMs:1234}])],['star-rush-best-distance','777'],['star-rush-best-score','888'],['star-rush-best-reborn-coast-reborn',JSON.stringify({time:1,points:[]})],['star-rush-best-reborn-road-v1-coast-reborn',JSON.stringify({time:2,points:[]})]]);
const old=new Map(stored);
async function environment(model,instrumented){
 const w=new Window({url:'https://race.test'+(model==='road'?'/road':'/'),settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}}),errors=[],requests=[];
 w.console.error=(...a)=>errors.push(a.join(' '));w.requestAnimationFrame=()=>1;
 w.fetch=async(url)=>{requests.push(String(url));return new Response(JSON.stringify({runs:[]}));};
 const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:()=>{}});
 w.HTMLCanvasElement.prototype.getContext=t=>t==='2d'?ctx:null;
 Object.defineProperties(w.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
 for(const [k,v]of stored)w.localStorage.setItem(k,v);
 w.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
 const hooks=`window.entryQA={renderingOptions,start,finish,goHome,chooseMode,showBoard,loadBoard,roomRequest,localRuns,ghostKey,getBestGhost,get state(){return state},get mode(){return raceMode},get pending(){return pendingRun}};`;
 const code=instrumented?(await build({stdin:{contents:clientSource(hooks,model),resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2022',logLevel:'silent'})).outputFiles[0].text:readFileSync(model==='road'?'dist/client/road/game.js':'dist/client/game.js','utf8');
 w.eval(code);if(instrumented)assert.deepEqual(JSON.parse(JSON.stringify(w.entryQA.renderingOptions)),model==='road'?{shading:'lambert',hemisphereIntensity:.7}:{shading:'toon',hemisphereIntensity:2.2});assert.deepEqual(errors,[]);assert.equal(w.document.querySelector('#error').hidden,true);
 assert.equal(w.document.querySelector('#drivingProfileLink').getAttribute('href'),model==='road'?'/':'/road');
 return {w,q:w.entryQA,requests};
}
for(const model of ['legacy','road']){const {w}=await environment(model,false);w.document.querySelector('#startBtn').click();assert.equal(w.document.querySelector('#welcome').hidden,true);await w.happyDOM.close();}
const {w,q,requests}=await environment('road',true);
assert.equal(q.ghostKey(),'star-rush-best-reborn-road-v2-coast-reborn');assert.equal(q.getBestGhost(),null);assert.equal(q.localRuns().length,0);
q.chooseMode('endless');assert.equal(q.mode,'circuit');q.start();assert.equal(q.state,'countdown');q.goHome();assert.equal(q.state,'ready');q.start();q.finish();assert.equal(q.state,'finished');assert.equal(q.pending,null);
assert.equal(w.document.querySelector('#submitRun').disabled,true);w.document.querySelector('#submitRun').click();await q.loadBoard();await assert.rejects(q.roomRequest('create'),/仅本机/);assert.deepEqual(requests,[]);
assert.equal(q.localRuns().length,1);for(const [k,v]of old)assert.equal(w.localStorage.getItem(k),v,'legacy/old candidate storage must stay untouched: '+k);
q.goHome();q.start();assert.equal(q.state,'countdown');await w.happyDOM.close();
const legacy=await environment('legacy',true);assert.equal(legacy.q.localRuns()[0].timeMs,1234);assert.equal(legacy.q.ghostKey(),'star-rush-best-reborn-coast-reborn');await legacy.q.loadBoard();assert.equal(legacy.requests.length,1);await legacy.w.happyDOM.close();
console.log('Dual entry: actual bundles/start, restart, road-only records/ghost, no road API requests, legacy API/storage unchanged');

// esbuild preserves all real Three shader strings; formatting is not shader trimming.
const shaderValues=[];
for(const supported of [{'template-literal':true},clientSyntaxSupport]){
 const built=await build({stdin:{contents:"import {ShaderChunk} from 'three';globalThis.shaders=ShaderChunk;",resolveDir:process.cwd()},bundle:true,minify:true,target:'es2022',supported,format:'iife',write:false,logLevel:'silent'});
 const scope={};vm.runInNewContext(built.outputFiles[0].text,scope);shaderValues.push(JSON.parse(JSON.stringify(scope.shaders)));
}
assert.deepEqual(shaderValues[0],shaderValues[1]);assert(Object.keys(shaderValues[0]).length>100);
for(const file of ['dist/client/game.js','dist/client/road/game.js']){const text=readFileSync(file,'utf8');assert.doesNotMatch(text,/[ \t]+$/m,file+' trailing whitespace');assert.doesNotMatch(text,/^ +\t/m,file+' space before tab');}
console.log('Three ShaderChunk strings byte-identical across literal encoding; generated clients whitespace-clean');
