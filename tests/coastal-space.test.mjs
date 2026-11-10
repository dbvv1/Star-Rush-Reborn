import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {createCoastStreetPlan} from '../coast-street-runtime.mjs';
import {verifyFixedSource} from '../authoring/coast-street-placement/fixed-source-contract.mjs';
const parts=verifyFixedSource().parts;
const read=p=>fs.readFileSync(p,'utf8'),hash=x=>createHash('sha256').update(x).digest('hex');
function context(enabled=true,id='coast-reborn',road=true){
 const ctx={createCoastStreetPlan,coastStreetSource:()=>parts};vm.runInNewContext(`const roadDriving=${road};let coastalSpaceCandidate=${enabled};${read('engine.js')}\n${read('race.js').split('\n').find(line=>line.startsWith('function quad('))}\n${read('circuit.js')}\n${read('assets/landscape/coastal-rocks.js')}\n${read('coastal-space.js')}\n${read('scenery.js')}\nactiveTrackId=${JSON.stringify(id)};rebuildCircuit();function road(s){return circuitRoad(s)}function atRoad(s,l,y=0){const r=road(s);return add(r.p,add(mul(r.R,l),[0,y,0]))}function wrapAngle(a){return Math.atan2(Math.sin(a),Math.cos(a))}this.model=coastalSpaceModel;this.active=coastalSpaceEnabled;this.run=s=>eval(s);`,ctx);return ctx;
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
test('street replacement preserves RNG and every surviving original node, and records exact rollback order',()=>{
 const code=`let draws=0;const rr=()=>{draws++;return .4};const root=decorateChunk(12,road(480).p,rr);const pack=nodes=>nodes.map(n=>({matrix:Array.from(n.local),data:Array.from(n.mesh.sourceData),indices:Array.from(n.mesh.sourceIndices)}));const record=coastalSpaceAdditions.get(root);({draws,items:pack(root.children),baseline:record?pack(record.baseline):null,survivors:record?pack(root.children.filter(n=>record.baseline.includes(n))):null,originalSurvivors:record?pack(record.baseline.filter(n=>root.children.includes(n))):null})`;
 const a=context(false).run(code),b=context(true).run(code);assert.equal(a.draws,b.draws);assert.equal(JSON.stringify(a.items),JSON.stringify(b.baseline));assert.equal(JSON.stringify(b.survivors),JSON.stringify(b.originalSurvivors));assert(b.survivors.length<b.baseline.length,'old buildings/overlapping vegetation really removed');assert(b.items.length>b.survivors.length,'fixed street is actually attached');
});

test('late decoration failure removes already committed candidate additions',()=>{
 const c=context(true),base=context(false);
 const pack="JSON.stringify(oldRoot.children.map(n=>({matrix:Array.from(n.local),data:Array.from(n.mesh.sourceData),indices:Array.from(n.mesh.sourceIndices)})))";
 const before=c.run("this.oldRoot=decorateChunk(11,road(440).p,()=>.4);"+pack),expected=base.run("this.oldRoot=decorateChunk(11,road(440).p,()=>.4);"+pack);assert.notEqual(before,expected);
 c.run("coastalSpaceDecorate=()=>{throw Error('late injected failure')};decorateChunk(12,road(480).p,()=>.4)");assert.equal(c.active(),false);assert.equal(c.run(pack),expected);
});

// Exact geometry signatures from the published 811646e source tree (the same
// tree as its reviewed local 99cfbd3). These are not visual quality scores.
test('terrain refinement preserves every submerged and water-crossing triangle at the actual sea top',()=>{
 const m=context().model();
 const wet=m.triangles.filter(ids=>ids.some(i=>m.vertices[i][1]<=-.82)).map(ids=>ids.map(i=>m.vertices[i]));
 assert.equal(wet.length,7576);
 assert.equal(hash(JSON.stringify(wet)),'96992efb001d9cf28227a029d39264045b253fd1db0cf53da01e979c0a163fe0');
 assert.equal(hash(JSON.stringify([m.vertices.map(p=>[p[0],p[2]]),m.triangles])),'429a17ee0c9d04db7e5094d592e0923f31db745bd203588b2269446ff92468ac');
 const corridor=m.vertices.filter(p=>m.nearest(p[0],p[2]).d<=38);
 assert.equal(corridor.length,2488);
 assert.equal(hash(JSON.stringify(corridor)),'162b19beecdf1f851f68446d426f3a58546bcfabe912a38b9602d8b5ed7411da');
 assert(m.vertices.reduce((sum,p)=>sum+p[1],0)>-3492.9833983498943+10,'a real inland relief change, not a no-op');
});

test('terrain refinement keeps all original prop anchors, street matrices and complete support cells',()=>{
 const c=context(),m=c.model();
 assert.equal(hash(JSON.stringify(m.props)),'82912127eabdc25901933355538b73aa285723679a9a9ee08e4f7493000051fa');
 const street=m.street.instances.map(e=>({placement:e.placement,foundation:e.foundation,terrainRange:e.terrainRange}));
 assert.equal(hash(JSON.stringify(street)),'15d348398bf70567ba25ed0720ca0ae4136cac14144743c65671c3f3ee65859d');
 // Revalidate against the final mesh, not only the pre-refinement plan.
 const final=createCoastStreetPlan(parts,c.run('circuitRoad'),m,c.run('circuitSamples'));
 assert.equal(JSON.stringify(final.instances.map(e=>({placement:e.placement,foundation:e.foundation,terrainRange:e.terrainRange}))),JSON.stringify(street));
});

test('continuous ground uses finite unit normals and low-frequency linear vertex colours',()=>{
 const m=context().model();assert.equal(m.normals.length,m.vertices.length);assert.equal(m.colors.length,m.vertices.length);
 const colours=new Set();
 for(let i=0;i<m.vertices.length;i++){
  const n=m.normals[i],col=m.colors[i];
  assert.equal(n.length,3);assert.equal(col.length,3);assert([...n,...col].every(Number.isFinite));
  assert(Math.abs(Math.hypot(...n)-1)<1e-10);assert(n[1]>0);
  assert(col.every(v=>v>=0&&v<=1));
  if(m.vertices[i][1]>-.82)colours.add(col.map(v=>v.toFixed(3)).join(','));
 }
 assert(colours.size>100,'continuous broad colour field replaces three per-face colour bands');
});

test('actual terrain collector preserves stride, vertex colours and index offsets after existing geometry',()=>{
 const c=context(),m=c.model();
 const data=c.run("const collector=new Collector();collector.add(shape([0,0,0,1,0,0,0,0,1],[0,1,0,0,1,0,0,1,0],[0,2,1]),I,'#ffffff');coastalSpaceTerrain(collector);({data:collector.data,indices:collector.indices})");
 assert.equal(data.data.length%10,0);assert.deepEqual(Array.from(data.indices.slice(0,3)),[0,2,1]);
 for(let i=0;i<m.vertices.length;i++){
  const actual=Array.from(data.data.slice((i+3)*10,(i+4)*10));
  assert.deepEqual(actual,[...Array.from(m.vertices[i]),...Array.from(m.normals[i]),...Array.from(m.colors[i]),.02]);
 }
 const visible=m.triangles.filter(ids=>!ids.every(i=>m.vertices[i][1]<-.9)).flatMap(ids=>ids.map(i=>i+3));
 assert.deepEqual(Array.from(data.indices.slice(3,3+visible.length)),Array.from(visible));
 assert(data.indices.every(i=>Number.isInteger(i)&&i>=0&&i<data.data.length/10));
});
