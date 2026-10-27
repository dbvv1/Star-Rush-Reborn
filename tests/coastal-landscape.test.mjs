import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import vm from 'node:vm';
const read=f=>readFileSync(f,'utf8'),hash=x=>createHash('sha256').update(x).digest('hex');
const engine=read('engine.js'),data=read('assets/landscape/coastal-rocks.js'),source=read('scenery.js');
function evaluate(road,biome,tail){
 return vm.runInNewContext(`const roadDriving=${road},activeTrackId='fixed',circuitBounds={minX:-160,maxX:160,minZ:-150,maxZ:150};function trackInfo(){return {biome:${biome}}}\n${engine}\n${data}\n${source}\n${tail}`,{}, {timeout:3000});
}
test('fixed CC0 source hashes and deterministic geometry-only conversion',()=>{
 const expected={'rock_largeA':'ec0619c243131697d0b62922150741c9f4601b882eaf7e5d2fd910b2919a78e0','rock_tallB':'c4ab8b209b2494de3c57ad973b2325e1e80cf6e43d4de5de940da09d976cf260'};
 for(const [name,digest] of Object.entries(expected))assert.equal(hash(readFileSync(`assets/landscape/source/${name}.obj`)),digest);
 execFileSync('python3',['assets/landscape/convert.py']);assert.equal(read('assets/landscape/coastal-rocks.js'),data);
 assert.match(read('assets/landscape/LICENSE.txt'),/Creative Commons Zero, CC0/);
});
test('baked silhouettes have finite nondegenerate surfaces, matching normals and exact bounds',()=>{
 const rocks=evaluate(true,0,'coastalShapes()');
 assert.deepEqual(Array.from(rocks,r=>r.reduce((sum,g)=>sum+g.i.length/3,0)),[80,172]);
 for(const parts of rocks){
  const points=parts.flatMap(g=>Array.from({length:g.p.length/3},(_,i)=>g.p.slice(i*3,i*3+3)));
  for(let k=0;k<3;k++){assert.equal(Math.min(...points.map(p=>p[k])),k===1?0:-.5);assert.equal(Math.max(...points.map(p=>p[k])),k===1?1:.5);}
  for(const g of parts)for(let j=0;j<g.i.length;j+=3){
   const p=g.i.slice(j,j+3).map(i=>g.p.slice(i*3,i*3+3)),u=p[1].map((v,k)=>v-p[0][k]),v=p[2].map((x,k)=>x-p[0][k]),n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],normal=g.n.slice(g.i[j]*3,g.i[j]*3+3);
   assert(Math.hypot(...n)>1e-9);assert(Math.abs(Math.hypot(...normal)-1)<1e-6);assert(n.reduce((s,x,k)=>s+x*normal[k],0)>0);
  }
 }
});
test('coast uses one shared mesh, all rock feet submerged and clear of the playable center',()=>{
 const geometry=evaluate(true,0,'const c=new Collector();coastalBackdrop(c,[0,0,0]);({data:c.data,indices:c.indices})');
 assert.equal(geometry.indices.length/3,1684);
 const points=Array.from({length:geometry.data.length/10},(_,i)=>geometry.data.slice(i*10,i*10+3));
 assert(Math.abs(Math.min(...points.map(p=>p[1]))+9.1)<1e-5);assert(Math.abs(Math.max(...points.map(p=>p[1]))-34.85)<1e-5);
 assert(points.every(p=>p.every(Number.isFinite)&&Math.hypot(p[0],p[2])>230));
 for(let j=0;j<geometry.indices.length;j+=3){const ids=geometry.indices.slice(j,j+3);if(geometry.data[ids[0]*10+4]<-1e-6)assert(ids.every(i=>geometry.data[i*10+1]<-.82),'no exposed downward bevel above the actual sea plane');}
 assert.match(source,/if\(roadDriving&&coast\)coastalBackdrop\(c,center\);\s*else for/);
 assert.match(source,/landscapeNode=new Node\(c.finish\(\)\);landscapeNode.shadow=false/);
});
test('legacy coast and other biome geometry remain byte-identical to the previous source',()=>{
 // Golden sourceData + sourceIndices from 4cff, fixed synthetic bounds above.
 for(const [road,biome,expected] of [[false,0,'966536bd6e0bdef62d4fee366e341d647d766db08823cb5544c8c230fb64082d'],[false,1,'b466cf4ca2aa9045690121e0bbef53e538a74d9ef225b769df0a55bfb9fa2cdc'],[true,1,'b466cf4ca2aa9045690121e0bbef53e538a74d9ef225b769df0a55bfb9fa2cdc']]){
  const json=evaluate(road,biome,'buildLandscape();JSON.stringify({data:Array.from(landscapeNode.mesh.sourceData),indices:Array.from(landscapeNode.mesh.sourceIndices)})');
  assert.equal(hash(json),expected);
 }
});

test('actual coast headlands fit within the existing finite sea plane',()=>{
 const points=vm.runInNewContext(`const roadDriving=true;\n${engine}\n${read('circuit.js')}\n${data}\n${source}\nconst c=new Collector(),center=[(circuitBounds.minX+circuitBounds.maxX)*.5,0,(circuitBounds.minZ+circuitBounds.maxZ)*.5];coastalBackdrop(c,center);Array.from({length:c.data.length/10},(_,i)=>c.data.slice(i*10,i*10+3))`);
 assert(points.every(p=>Math.abs(p[0])<550&&Math.abs(p[2])<550),'no underside past the finite sea rectangle');
});

// Training-ground-only foliage from the shared landscape source family.
import "./training-verge.test.mjs";
