import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const engine=readFileSync('engine.js','utf8'),race=readFileSync('race.js','utf8'),scenery=readFileSync('scenery.js','utf8');
const quad=race.slice(race.indexOf('function quad('),race.indexOf('function chunkMesh('));
const roof=scenery.slice(scenery.indexOf('function roof('),scenery.indexOf('function townhouse('));
const scope={};vm.createContext(scope);
vm.runInContext(engine+'\n'+quad+'\n'+roof+'\napi={quad,roof};function path(){} function bar(){}',scope);
const collect=()=>({shapes:[],add(shape){this.shapes.push(JSON.parse(JSON.stringify(shape)));}});
const subtract=(a,b)=>a.map((v,i)=>v-b[i]);
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
function check(shape){let live=0;for(let j=0;j<shape.i.length;j+=3){const ids=shape.i.slice(j,j+3),p=ids.map(i=>shape.p.slice(i*3,i*3+3)),n=cross(subtract(p[1],p[0]),subtract(p[2],p[0]));if(Math.hypot(...n)<1e-9)continue;live++;for(const i of ids){const stored=shape.n.slice(i*3,i*3+3),dot=n.reduce((a,v,k)=>a+v*stored[k],0);assert(dot>0,'geometric winding must agree with lighting normal');}}return live;}
test('actual shop roof slopes and triangular gables have matching winding and normals',()=>{
 const c=collect();scope.api.roof(c,7.7,5.8,4);assert.equal(c.shapes.length,4);assert.equal(c.shapes.reduce((n,s)=>n+check(s),0),6);
 assert.deepEqual(c.shapes[0].i,[0,2,1,0,3,2]);assert.deepEqual(c.shapes[1].i,[0,2,1,0,3,2]);
 assert.equal(c.shapes[2].n[1],0);assert.equal(c.shapes[3].n[1],0);
});
test('both real road-edge orders face upward on flat and graded segments',()=>{
 for(const rise of [0,.2,-.2])for(const side of [-1,1]){
  const points=[[side*7,.06,0],[side*7.65,.06,0],[side*7.65,.06+rise,-4],[side*7,.06+rise,-4]],c=collect();scope.api.quad(c,...points,'#fff');const s=c.shapes[0];assert.deepEqual(s.p,points.flat(),'positions must not change');assert.equal(check(s),2);assert(s.n[1]>0);
  assert.deepEqual(s.i,side===-1?[0,2,1,0,3,2]:[0,1,2,0,2,3]);
 }
});
test('vertical faces retain authored winding rather than inventing upward normals',()=>{
 for(const sign of [-1,1]){const points=[[sign*11,0,0],[sign*11,-1,0],[sign*11,-1,-4],[sign*11,0,-4]],c=collect();scope.api.quad(c,...points,'#fff');const s=c.shapes[0];assert.equal(check(s),2);assert.equal(s.n[1],0);assert.deepEqual(s.i,[0,1,2,0,2,3]);}
});
