// Actual Three route-mesh selector and Canvas polygon consumer, not a duplicate UI stub.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {RoadVehicleModel} from '../road-vehicle-core.js';
const software=readFileSync('software-renderer.js','utf8'),features=readFileSync('race-features.js','utf8');
const featureRender=features.slice(features.indexOf('function renderRaceFeatures('),features.indexOf('\nlet frameDurations='));
const helperStart=features.indexOf('function routeArrowNeedsBrake('),helper=helperStart<0?'':features.slice(helperStart,features.indexOf('\nfunction ',helperStart+1));
function fixture({s=400,kmh=100,road=true,track='coast-reborn',line=true,state='running',speedMps=kmh/3.6,curvature}={}){
 const polygons=[],meshes=[];let color,path=[];
 const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),beginPath(){path=[]},moveTo(...p){path.push(p)},lineTo(...p){path.push(p)},fill(){if(color==='#a5dbe6'||color==='#f0b7c3')polygons.push({warn:color==='#f0b7c3',points:path.slice()})}},{get:(o,k)=>k in o?o[k]:()=>{},set:(o,k,v)=>{if(k==='fillStyle')color=v;o[k]=v;return true}});
 const c={RoadVehicleModel,fixedCurvature:curvature,roadDriving:road,softwareContext:ctx,canvas:{width:1280,height:720},cameraFov:62,player:{s,l:0,yaw:0,jump:0,speed:speedMps,mini:0,nitroTime:0,pad:0},state,settings:{line},chunks:new Map(),skids:[],raceBots:[],ghostNode:null,ghostPose:null,routeArrowMeshes:[false,true],routeArrows:Array.from({length:9},()=>({})),world:{add:n=>meshes.push(n)},profile:{paint:'#8ccde4'},trs:(...x)=>x};
 vm.createContext(c);vm.runInContext(`const PI=Math.PI,TAU=PI*2,add=(a,b)=>a.map((v,i)=>v+b[i]),sub=(a,b)=>a.map((v,i)=>v-b[i]),mul=(a,n)=>a.map(v=>v*n),dot=(a,b)=>a.reduce((sum,v,i)=>sum+v*b[i],0),cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],length=a=>Math.hypot(...a),norm=a=>mul(a,1/Math.hypot(...a)),mix=(a,b,t)=>a+(b-a)*t,clamp=(x,a,b)=>Math.max(a,Math.min(b,x));\n`+readFileSync('circuit.js','utf8')+`\nactiveTrackId=${JSON.stringify(track)};rebuildCircuit();function road(s){const r=circuitRoad(s);return fixedCurvature===undefined?r:{...r,curv:fixedCurvature}}function atRoad(s,l,y){const r=road(s);return add(add(r.p,mul(r.R,l)),[0,y,0])}\n`+helper+'\n'+featureRender+'\n'+software+`\nthis.run=()=>{const r=road(player.s),eye=add(mul(r.T,player.speed/18-8.5),[0,4.56,0]),target=add(mul(r.T,player.speed/18+10),[0,1.06,0]),view={eye,target,origin:r.p};renderRaceFeatures(r.p,0);drawSoftware(view);return Array.from({length:9},(_,i)=>road(player.s+12+i*9).curv)};`,c);
 const samples=c.run();return {curvature:samples,three:meshes.map(n=>n.mesh),canvas:polygons.slice().reverse().map(p=>p.warn),polygons};
}
test('road Canvas and Three warn at the same visible normal-view curve samples',()=>{
 for(const sample of [{s:400,kmh:100},{s:430,kmh:60},{s:500,kmh:80}]){
  const f=fixture(sample);assert.equal(f.canvas.length,9);assert.equal(f.three.length,9);assert.deepEqual(f.canvas,f.three,JSON.stringify(sample));
  const visible=f.polygons.filter(p=>p.warn&&p.points.every(([x,y])=>x>=0&&x<=1280&&y>=0&&y<=720));assert(visible.length>0,'warning is actually inside the normal viewport');
 }
});
test('existing road threshold remains tied to current lateral grip with its established margin',()=>{
 for(const s of [0,340,400,430,500,800])for(const kmh of [0,40,60,80,100]){const f=fixture({s,kmh}),expected=Array.from(f.curvature,k=>Math.abs(k)*(kmh/3.6)**2>RoadVehicleModel.config.gripAcceleration*.8);assert.deepEqual(f.three,expected);assert.deepEqual(f.canvas,expected);}
});
test('legacy colors retain their original curvature-speed rule',()=>{
 for(const s of [0,400,430,500])for(const kmh of [0,60,100,200]){const f=fixture({s,kmh,road:false}),expected=Array.from(f.curvature,k=>Math.abs(k)*(kmh/3.6)>.95);assert.deepEqual(f.three,expected);assert.deepEqual(f.canvas,expected);}
});
test('disabled line and non-running states draw neither guidance consumer',()=>{
 for(const options of [{line:false},{state:'paused'},{state:'ready'},{state:'countdown'},{state:'finished'}]){const f=fixture(options);assert.deepEqual(f.three,[]);assert.deepEqual(f.canvas,[]);}
});

test('metres-per-second, zero/straight and both curvature signs preserve the strict boundary',()=>{
 const budget=RoadVehicleModel.config.gripAcceleration*.8;
 for(const speedMps of [0,2,20,30])for(const curvature of [0,.02,-.02,budget/(20*20),-budget/(20*20)]){
  const f=fixture({speedMps,curvature}),warn=Math.abs(curvature)*speedMps*speedMps>budget;
  assert.deepEqual(f.three,Array(9).fill(warn));assert.deepEqual(f.canvas,f.three);
 }
 const k=.02,v=Math.sqrt(budget/k);for(const scale of [1-1e-8,1+1e-8]){const f=fixture({curvature:k,speedMps:v*scale});assert(f.three.every(x=>x===(scale>1)));assert.deepEqual(f.canvas,f.three);}
});
test('reverse travel uses the same physical speed magnitude emitted by the road model',()=>{
 const p={vS:-20,vL:0,yaw:0,spin:0,roadSteer:0};RoadVehicleModel.step(p,{},1/120);
 assert(p.vS<0);assert.equal(p.speed,Math.hypot(p.vS,p.vL));const f=fixture({speedMps:p.speed,curvature:.03});
 assert.deepEqual(f.canvas,f.three);assert(f.three.every(Boolean));
});
