import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const source=readFileSync('scenery.js','utf8'),engine=readFileSync('engine.js','utf8');
const definitions=source.slice(source.indexOf('const mountainLower='),source.indexOf('const petalMesh='));
const {lower,snow,original}=JSON.parse(vm.runInNewContext(engine+'\n'+definitions+'\nJSON.stringify({lower:mountainLower,snow:mountainSnow,original:SC})',{}));
const vertex=(g,i)=>g.p.slice(i*3,i*3+3),sub=(a,b)=>a.map((v,i)=>v-b[i]);
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
test('snow and mountain share exactly the same ring, not an overhanging capped cone',()=>{
 for(let i=0;i<=4;i++)assert.deepEqual(vertex(lower,5+i),vertex(snow,i));
 assert.deepEqual(lower.n.slice(0,30),original.n.slice(0,30));
 assert.deepEqual(snow.n,original.n);
 for(const g of [lower,snow])for(let i=0;i<10;i++){
  const [x,y,z]=vertex(g,i);assert(Math.abs(Math.abs(x)+Math.abs(z)-(.5-y))<1e-12,'same original mountain side plane');
 }
});
test('snow seam has no horizontal internal faces; actual visible winding agrees with normals',()=>{
 let live=0;
 for(const g of [lower,snow])for(let j=0;j<g.i.length;j+=3){
  const ids=g.i.slice(j,j+3),p=ids.map(i=>vertex(g,i)),n=cross(sub(p[1],p[0]),sub(p[2],p[0]));
  if(Math.hypot(...n)<1e-10)continue;live++;
  assert(!p.every(v=>Math.abs(v[1]-.2)<1e-12),'no snow-line cap to expose a dark underside');
  for(const i of ids)assert(n.reduce((sum,v,k)=>sum+v*g.n[i*3+k],0)>0,'normal and winding agree');
 }
 assert.equal(live,16,'12 lower faces and 4 snow faces; no hidden inner cone');
});
test('non-snow peaks retain original primitive, placement and palette branch',()=>{
 assert.match(source,/else cone\(c,\[x,hh\*\.5-5,z\],\[70,hh,60\],col,\[0,a,0\],true\)/);
 assert.match(source,/if\(i%3===0\).*c\.add\(mountainLower,m,col\);c\.add\(mountainSnow,m,'#e5e5f0'\)/);
});
