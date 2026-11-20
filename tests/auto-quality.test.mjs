import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';
import {Window} from 'happy-dom';
import {createVisibleAutoQualityGovernor} from '../auto-quality.mjs';
import {clientSource} from '../build.mjs';

class Visibility extends EventTarget {
 hidden=false;
 set(hidden){this.hidden=hidden;this.dispatchEvent(new Event('visibilitychange'))}
}
const policy=visibility=>createVisibleAutoQualityGovernor(visibility);
for(const [interval,want] of [[100,[1000,2000]],[180,[1080,2160]],[443,[1329,2658]],[1200,[3600,7200]]])test(`visible ${interval} ms cadence lowers two tiers with corroborated elapsed budget`,()=>{
 const g=policy();let tier=g.update('auto',0),transitions=[];assert.equal(tier,'high');
 for(let frame=1;frame<=25;frame++){
  const at=frame*interval,next=g.update('auto',at);
  if(next!==tier){transitions.push([at,next]);tier=next;}
 }
 assert.deepEqual(transitions,[[want[0],'medium'],[want[1],'low']]);
});
test('alternating severe and brief fast frames still lower both tiers',()=>{
 const g=policy();let now=0,tier=g.update('auto',now),transitions=[];
 for(let frame=0;frame<12;frame++){
  now+=frame%2?16.7:443;
  const next=g.update('auto',now);
  if(next!==tier){transitions.push([Number(now.toFixed(1)),next]);tier=next;}
 }
 assert.deepEqual(transitions,[[1362.4,'medium'],[2741.5,'low']]);
});
test('sparse long frames outside the rolling window do not accumulate',()=>{
 const g=policy();let now=0;g.update('auto',now);
 for(let spike=0;spike<8;spike++){
  assert.equal(g.update('auto',now+=443),'high');
  for(let i=0;i<250;i++)assert.equal(g.update('auto',now+=16.7),'high');
 }
});
test('rapid recovery cannot upshift while recent long-frame evidence remains',()=>{
 const g=policy();let now=0,tier=g.update('auto',now);
 for(let n=0;n<12;n++)tier=g.update('auto',now+=180);assert.equal(tier,'low');
 assert.equal(g.update('auto',now+=443),'low');
 for(let n=0;n<1000;n++)assert.equal(g.update('auto',now+=4),'low');
 for(let n=0;n<361;n++)tier=g.update('auto',now+=4);assert.equal(tier,'medium');
});
test('isolated gap, hidden epoch and manual interval do not count as long frames',()=>{
 const visibility=new Visibility(),g=policy(visibility);
 g.update('auto',0);assert.equal(g.update('auto',5000),'high');assert.equal(g.update('auto',5016),'high');
 g.update('auto',5459);g.update('auto',5902);
 visibility.set(true);visibility.set(false);
 assert.equal(g.update('auto',25000),'high','first visible render establishes a new epoch');
 assert.equal(g.update('auto',25443),'high');assert.equal(g.update('auto',25886),'high');
 assert.equal(g.update('auto',26329),'medium');
 visibility.set(true);assert.equal(g.update('auto',100000),'medium');visibility.set(false);
 assert.equal(g.update('auto',150000),'medium');assert.equal(g.update('high',151000),'high');
 assert.equal(g.update('auto',160000),'medium');assert.equal(g.update('auto',160443),'medium');
 assert.equal(g.update('auto',160886),'medium');assert.equal(g.update('auto',161329),'low');
 g.dispose();
});
test('short cadence still downshifts and sustained fast rendering can recover',()=>{
 const g=policy();let now=0,quality=g.update('auto',now);
 for(let i=0;i<210;i++)quality=g.update('auto',now+=50);assert.equal(quality,'low');
 for(let i=0;i<1000;i++)quality=g.update('auto',now+=16.7);assert.equal(quality,'high');
});
test('Auto downshift never increases pixel ratio at tested device DPRs',()=>{
 const g=policy();for(const [dpr,ratios] of [[1,[1,1,1]],[1.25,[1.25,1.2,1]],[2,[1.5,1.2,1]],[.8,[.8,.8,.8]]]){
  assert.deepEqual(['high','medium','low'].map(tier=>g.pixelRatio(tier,dpr)),ratios);
 }
});

// Assemble the ordinary entry with actual selectors, scene adapters and quality
// choices. Replace only the GPU renderer at its construction boundary.
const gpuDouble=`class QualityDrawStub {
 constructor({canvas,context}){this.canvas=canvas;this.context=context;this.shadowMap={};this.info={render:{calls:0,triangles:0}}}
 getContext(){return this.context} render(){}
 sync(){if(this.size){this.canvas.width=Math.floor(this.size[0]*this.ratio);this.canvas.height=Math.floor(this.size[1]*this.ratio)}}
 setPixelRatio(ratio){this.ratio=ratio;this.sync()} setSize(w,h){this.size=[w,h];this.sync()}
}\n`;
const hooks=`window.qualityQA={renderingOptions,software,render(now,quality='auto'){
 const result=threeBackend.render([],{eye:[0,2,5],target:[0,0,0]},317,233,62,{quality},now);
 return JSON.stringify({tier:result.effectiveQuality,ratio:threeBackend.renderer.ratio,dimensions:threeBackend.renderer.size,
  buffer:[canvas.width,canvas.height],shadows:threeBackend.renderer.shadowMap.enabled,sceneFog:threeBackend.scene.fog.color.getHexString()});
}};`;
const builds=new Map();
async function fixture(t,search,model='road',dpr=1){
 if(!builds.has(model))builds.set(model,(await build({stdin:{contents:clientSource(hooks,model),resolveDir:process.cwd()},bundle:true,write:false,format:'iife',target:'es2022',logLevel:'silent',plugins:[{name:'quality-gpu-double',setup(builder){
  builder.onLoad({filter:/render-three(-island)?\.js$/},({path})=>{
   const source=readFileSync(path,'utf8'),needle='new THREE.WebGLRenderer(';
   assert.equal(source.split(needle).length,2);
   return {contents:gpuDouble+source.replace(needle,'new QualityDrawStub('),loader:'js'};
  });
 }}]})).outputFiles[0].text);
 const w=new Window({url:`https://race.test/${model}/`+search,settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}});
 t.after(()=>w.happyDOM.close());
 const errors=[],ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),createRadialGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:()=>{}});
 const gl={isContextLost:()=>false,finish(){},getExtension:()=>null,getParameter:()=>null,RENDERER:1,VERSION:2};
 w.console.error=(...args)=>errors.push(args.join(' '));w.console.warn=()=>{};w.requestAnimationFrame=()=>1;w.fetch=async()=>{throw Error('offline fixture')};
 w.HTMLCanvasElement.prototype.getContext=type=>type==='webgl2'?gl:type==='2d'?ctx:null;
 w.HTMLCanvasElement.prototype.toDataURL=()=> 'data:image/png;base64,AA==';
 Object.defineProperty(w,'devicePixelRatio',{value:dpr,configurable:true});
 Object.defineProperties(w.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
 w.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
 w.eval(builds.get(model));assert.deepEqual(errors,[]);assert(w.qualityQA);assert.equal(w.qualityQA.software,false);
 return {w,options:w.qualityQA.renderingOptions,setDpr:value=>Object.defineProperty(w,'devicePixelRatio',{value}),render:(at,quality)=>JSON.parse(w.qualityQA.render(at,quality))};
}
const selection='autoQuality=visible-slow-v1';
for(const [look,query,fog] of [['island','', 'cfe2ef'],['rollback','scene=baseline&','cbddec']]){
 test(`${look} ordinary entry enables shared Auto and applies tier, shadows and dimensions`,async t=>{
  const f=await fixture(t,'?'+query+selection);
  assert.equal(f.options.autoQuality,true);
  const dprs=[1,1.25,2],sample=at=>dprs.map(dpr=>{f.setDpr(dpr);return f.render(at)});
  const high=sample(1);for(const at of [444,460.7,903.7,920.4])f.render(at);const medium=sample(1363.4);
  for(const at of [1380.1,1823.1,1839.8,2282.8,2299.5])f.render(at);const low=sample(2742.5);
  for(const [tier,rows,ratios,shadow] of [['high',high,[1,1.25,1.5],true],['medium',medium,[1,1.2,1.2],true],['low',low,[1,1,1],false]]){
   assert.deepEqual(rows.map(r=>r.ratio),ratios);
   for(const r of rows){assert.equal(r.tier,tier);assert.equal(r.shadows,shadow);assert.equal(r.sceneFog,fog);assert.deepEqual(r.dimensions,[317,233]);assert.deepEqual(r.buffer,[Math.floor(317*r.ratio),Math.floor(233*r.ratio)]);}
  }
  f.setDpr(1);
  const manual=f.render(3102,'medium');assert.equal(manual.ratio,1.2);assert.equal(manual.shadows,true);assert.deepEqual(manual.buffer,[380,279]);
  assert.equal(f.render(3545,'low').shadows,false);assert.equal(f.render(3988,'high').ratio,1);
  t.diagnostic(JSON.stringify({look,controlledIntervalsMs:[443,16.7],atMs:[1,1363.4,2742.5],tiers:[high,medium,low].map(rows=>rows[0].tier),limits:'CPU fixture, not observed frame time'}));
 });
 test(`${look} off preserves original Auto behavior at severe cadence`,async t=>{
  const f=await fixture(t,query?'?'+query.slice(0,-1):'', 'road',2);assert.equal(f.options.autoQuality,undefined);
  let now=1;assert.equal(f.render(now).tier,'high');
  for(let n=0;n<221;n++)assert.equal(f.render(now+=n%2?16.7:443).tier,'high');
  const old=f.render(now+16.7);assert.equal(old.ratio,1.5);assert.equal(old.shadows,true);assert.deepEqual(old.buffer,[475,349]);
 });
}
for(const [name,query,model] of [['malformed','autoQuality=wrong','road'],['duplicate',selection+'&'+selection,'road'],['legacy',selection,'legacy']])test(`${name} does not opt in`,async t=>{
 const f=await fixture(t,'?'+query,model);assert.equal(f.options.autoQuality,undefined);
 assert.equal(f.render(1).tier,'high');
});
for(const query of ['','scene=baseline&'])test(`fixed capture ignores Auto opt-in ${query||'island'}`,async t=>{
 const f=await fixture(t,'?'+query+'shot=coast-chase&t=0&frames=1&'+selection,'road',2);
 assert.equal(f.options.capture,true);assert.equal(f.options.autoQuality,undefined);
 const frame=f.render(1,'high');assert.equal(frame.tier,'high');assert.equal(frame.ratio,1);assert.equal(frame.shadows,true);
 assert.deepEqual(frame.dimensions,[1280,720]);assert.deepEqual(frame.buffer,[1280,720]);
});
