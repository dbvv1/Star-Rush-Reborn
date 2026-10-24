// Narrow Canvas house anchoring regression; not a browser/visual acceptance test.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
const source=readFileSync(new URL('../software-renderer.js',import.meta.url),'utf8');
const scope={};vm.createContext(scope);vm.runInContext(source,scope);
const anchors=(s,length=903.7,closed=true)=>Array.from(scope.softwareHouseAnchors(s,length,closed),a=>({s:a.s,ds:a.ds}));

test('houses keep identities and move relative to player across 20m/40m cells',()=>{
 for(const [a,b] of [[5,12],[19.9,20.1],[39.9,40.1],[79.9,80.1]]){
  const before=anchors(a),after=anchors(b),common=before.filter(x=>after.some(y=>y.s===x.s));
  assert(common.length>=5);
  for(const x of common){const y=after.find(y=>y.s===x.s);assert(Math.abs(y.ds-x.ds+(b-a))<1e-9)}
  assert(before.every(x=>x.s%40===0));assert(after.every(x=>x.s%40===0));
 }
});

test('non-multiple circuit seam, subsequent laps and reverse retain fixed world anchors',()=>{
 for(const length of [903.7,1621.4,1876.2]){
  assert.deepEqual(anchors(17,length),anchors(17+length,length));
  const before=anchors(length-.1,length),after=anchors(length+.1,length);
  assert(before.some(x=>x.s===0));assert(after.some(x=>x.s===0));
  for(const x of before){const y=after.find(y=>y.s===x.s);if(y)assert(Math.abs(y.ds-x.ds+.2)<1e-9)}
  assert.deepEqual(anchors(-.25,length),anchors(length-.25,length));
  for(const s of [-80,0,39.9,length-.1,length+.1,length*3]){
   const a=anchors(s,length);assert.equal(new Set(a.map(x=>x.s)).size,a.length);
   assert(a.every(x=>x.s>=0&&x.s<length&&x.ds>=-40&&x.ds<210));assert(a.length<=7);
  }
 }
});

test('endless road uses fixed grid, including negative road distance',()=>{
 for(const s of [-85,-.1,0,39.9,40.1,100000]){
  const a=anchors(s,0,false);assert(a.length>=6&&a.length<=7);
  assert(a.every(x=>x.s%40===0&&Math.abs(x.ds-(x.s-s))<1e-9&&x.ds>=-40&&x.ds<210));
 }
});

test('actual drawing projects fixed house anchors and depth-sorts them with trees',()=>{
 const calls=[],paint=[];let color;
 const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),fillRect(...args){if(color==='#f3e9dc')paint.push(args)}},{get:(o,k)=>o[k]??(()=>{}),set:(o,k,v)=>{if(k==='fillStyle')color=v;o[k]=v;return true}});
 const add=(a,b)=>a.map((v,i)=>v+b[i]),sub=(a,b)=>a.map((v,i)=>v-b[i]),mul=(a,n)=>a.map(v=>v*n),dot=(a,b)=>a.reduce((sum,v,i)=>sum+v*b[i],0),cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],norm=a=>mul(a,1/Math.hypot(...a));
 const c={softwareContext:ctx,canvas:{width:800,height:600},cameraFov:60,player:{s:39.9,l:0,yaw:0,jump:0},raceMode:'circuit',CIRCUIT_LENGTH:903.7,add,sub,mul,dot,cross,norm,TAU:Math.PI*2,road:s=>({p:[0,0,s],R:[1,0,0],T:[0,0,1]}),atRoad(s,l,y){if(Math.abs(l)===20)calls.push(s);return [l,y,s]},skids:[],chunks:new Map(),settings:{line:false},ghostNode:null,state:'paused'};
 vm.createContext(c);vm.runInContext(source,c);
 for(const s of [39.9,40.1]){calls.length=paint.length=0;c.player.s=s;c.drawSoftware({eye:[0,2,-10],target:[0,2,10],origin:[0,0,0]});
  assert.deepEqual(calls,anchors(s).flatMap(a=>[a.s,a.s]));assert(paint.length>0);
  // Constant-size billboards become larger as sorted depth gets nearer.
  assert(paint.every((p,i)=>i===0||p[2]>=paint[i-1][2]));
 }
 assert.doesNotMatch(source,/atRoad\(player\.s\+x\.ds,x\.side\*20/);
});
