import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
const read=p=>fs.readFileSync(p,'utf8'),hash=x=>createHash('sha256').update(x).digest('hex');
function context(enabled=true,id='coast-reborn',road=true){
 const ctx={};vm.runInNewContext(`const roadDriving=${road},coastalSpaceCandidate=${enabled};${read('engine.js')}\n${read('race.js').split('\n').find(line=>line.startsWith('function quad('))}\n${read('circuit.js')}\n${read('assets/landscape/coastal-rocks.js')}\n${read('coastal-space.js')}\n${read('scenery.js')}\nactiveTrackId=${JSON.stringify(id)};rebuildCircuit();function road(s){return circuitRoad(s)}function atRoad(s,l,y=0){const r=road(s);return add(r.p,add(mul(r.R,l),[0,y,0]))}function wrapAngle(a){return Math.atan2(Math.sin(a),Math.cos(a))}this.model=coastalSpaceModel;this.active=coastalSpaceEnabled;this.run=s=>eval(s);`,ctx);return ctx;
}
test('coastal grid is deterministic, bounded, upward and protects entire road corridor',()=>{
 const c=context(),a=c.model(),b=context().model();assert.equal(hash(JSON.stringify(a)),hash(JSON.stringify(b)));assert.equal(a.triangles.length,11250);
 for(const ids of a.triangles){const [p,q,r]=ids.map(i=>a.vertices[i]);assert([...p,...q,...r].every(Number.isFinite));const y=(q[2]-p[2])*(r[0]-p[0])-(q[0]-p[0])*(r[2]-p[2]);assert(y>0,'front face points upward');}
 const samples=c.run('circuitSamples');
 for(const r of samples)for(let l=-28;l<=28;l+=2){const x=r.p[0]-Math.sin(r.h)*l,z=r.p[2]+Math.cos(r.h)*l;if(x<a.bounds.x0||x>a.bounds.x1||z<a.bounds.z0||z>a.bounds.z1)continue;assert(a.surface(x,z)<r.p[1]-.12,'terrain triangle interior stays below protected roadway/verge');}
 for(const p of a.vertices)if(p[0]===a.bounds.x0||p[0]===a.bounds.x1||p[2]===a.bounds.z0||p[2]===a.bounds.z1)assert.equal(p[1],-1.35,'mesh boundary hidden beneath sea');
});
test('full prop footprints remain beyond all road segments and share existing meshes',()=>{
 const c=context(),m=c.model();
 for(const p of m.props){assert(p.minRoadDistance-p.radius*Math.SQRT2>28.3);assert(p.y>-.5,'no submerged building anchor');const data=c.run(`const p=${JSON.stringify(p)};const mesh=p.key==='coast-beacon'?scenicMesh('coast-beacon',coastalBeacon):scenicProp(p.key);Array.from(mesh.sourceData)`);for(let i=0;i<data.length;i+=10)assert(Math.hypot(data[i],data[i+2])*p.scale<=p.radius+.02,'declared radius bounds every source vertex');}
});
test('default, legacy and academy landscape bytes remain unchanged',()=>{
 for(const [road,id] of [[true,'coast-reborn'],[true,'academy-reborn'],[false,'coast-reborn']]){
  const off=context(false,id,road),on=context(true,id,road);const serialize=c=>c.run('buildLandscape();JSON.stringify([Array.from(landscapeNode.mesh.sourceData),Array.from(landscapeNode.mesh.sourceIndices)])');
  if(id==='coast-reborn'&&road){assert.equal(off.active(),false);assert.equal(on.active(),true);assert.notEqual(hash(serialize(off)),hash(serialize(on)));}else{assert.equal(on.active(),false);assert.equal(hash(serialize(off)),hash(serialize(on)));}
 }
});
test('existing prop prefix and RNG consumption do not change when fixed additions are enabled',()=>{
 const code=`let draws=0;const rr=()=>{draws++;return .4};const root=decorateChunk(12,road(480).p,rr);({draws,items:root.children.map(n=>({matrix:Array.from(n.local),data:Array.from(n.mesh.sourceData),indices:Array.from(n.mesh.sourceIndices)}))})`;
 const a=context(false).run(code),b=context(true).run(code);assert.equal(a.draws,b.draws);assert.equal(JSON.stringify(a.items),JSON.stringify(b.items.slice(0,a.items.length)));assert(b.items.length>a.items.length);
});
