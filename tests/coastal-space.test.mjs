import {createCoastFencePlan,decodeCoastFenceSource} from '../coast-fence-runtime.mjs';
import {createCoastVergePlan,decodeCoastVergeSource} from '../coast-verge-runtime.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {createCoastStreetPlan,decodeCoastStreetSource,coastWallData} from '../coast-street-runtime.mjs';
import {verifyFixedSource} from '../authoring/coast-street-placement/fixed-source-contract.mjs';
const parts=decodeCoastStreetSource(fs.readFileSync('authoring/coast-street-placement/fixed-source/street.glb').toString('base64'));
const read=p=>fs.readFileSync(p,'utf8'),hash=x=>createHash('sha256').update(x).digest('hex');
function context(enabled=true,id='coast-reborn',road=true){
 const ctx={createCoastFencePlan,coastFenceSource:()=>decodeCoastFenceSource(fs.readFileSync('assets/coast-verge/verge.glb').toString('base64')),createCoastVergePlan,coastVergeSource:()=>decodeCoastVergeSource(fs.readFileSync('assets/coast-verge/verge.glb').toString('base64')),createCoastStreetPlan,coastWallData,coastStreetSource:()=>parts};vm.runInNewContext(`const roadDriving=${road};let coastalSpaceCandidate=${enabled};${read('engine.js')}\n${read('race.js').split('\n').find(line=>line.startsWith('function quad('))}\n${read('circuit.js')}\n${read('assets/landscape/coastal-rocks.js')}\n${read('coastal-space.js')}\n${read('scenery.js')}\nactiveTrackId=${JSON.stringify(id)};rebuildCircuit();function road(s){return circuitRoad(s)}function atRoad(s,l,y=0){const r=road(s);return add(r.p,add(mul(r.R,l),[0,y,0]))}function wrapAngle(a){return Math.atan2(Math.sin(a),Math.cos(a))}this.model=coastalSpaceModel;this.active=coastalSpaceEnabled;this.run=s=>eval(s);`,ctx);return ctx;
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

test('verge uses actual six CC0 bushes, bounded feet and proper rotations, not fences',()=>{
 const c=context(),m=c.model();assert(m.verge.instances.length>0);
 const source=decodeCoastVergeSource(fs.readFileSync('assets/coast-verge/verge.glb').toString('base64'));for(const p of source){assert.deepEqual(p.pivot,[0,0,0]);let minY=Infinity;for(let i=1;i<p.sourceData.length;i+=10)minY=Math.min(minY,p.sourceData[i]);assert.equal(minY,0);}
 for(const e of m.verge.instances){assert.match(e.part.name,/^bush-/);assert(e.range.max-e.range.min<=.18);assert(e.range.min>=-.65);assert(e.part.sourceData.every(Number.isFinite));const ys=[];for(let i=1;i<e.part.sourceData.length;i+=10)ys.push(e.part.sourceData[i]);assert(Math.abs(Math.min(...ys)-(e.range.min-.02))<1e-6);}
 const result=c.run('const root=decorateChunk(8,road(320).p,()=>.4);({nodes:root.children.filter(n=>[...coastalVergeMeshes.values()].includes(n.mesh)).length,meshes:coastalVergeMeshes.size})');
 assert.equal(result.nodes,m.verge.instances.length);assert.equal(result.meshes,result.nodes);
 c.run('disableCoastalSpace()');assert.equal(c.run('coastalVergeMeshes.size'),0);
});

test('verge rejects road, house, water and full-cell slope hazards',()=>{
 const c=context(),m=c.model(),parts=decodeCoastVergeSource(fs.readFileSync('assets/coast-verge/verge.glb').toString('base64')),road=c.run('circuitRoad'),samples=c.run('circuitSamples');
 const make=(model=m,rs=samples)=>createCoastVergePlan(parts,model,road,rs);
 const house={...m,street:{instances:[{placement:{bbox:{minX:-1000,maxX:1000,minZ:-1000,maxZ:1000}}}]}};assert(make(house).rejected.every(e=>e.reason==='house'));
 const wet={...m,vertices:m.vertices.map(p=>[p[0],-1,p[2]])};assert(make(wet).rejected.every(e=>e.reason==='water'));
 const slope={...m,vertices:m.vertices.map((p,i)=>[p[0],i%2?4:0,p[2]])};assert(make(slope).rejected.every(e=>e.reason==='slope'));
 const r=road(340),mid=[r.p[0]-r.R[0]*24,0,r.p[2]-r.R[2]*24],rs=[{p:[mid[0]-30*r.T[0],0,mid[2]-30*r.T[2]]},{p:[mid[0]+30*r.T[0],0,mid[2]+30*r.T[2]]}];assert(make(m,rs).rejected.every(e=>e.reason==='road'));
});

test('existing prop bounds suppress verge instead of moving or removing the old prop',()=>{
 const c=context();const result=c.run('const root=new Node(),prop=new Node();prop.mesh={sourceData:new Float32Array([-1000,0,-1000,0,0,0,0,0,0,0,1000,0,1000,0,0,0,0,0,0,0])};coastalSpaceDecorate(root,8,[0,0,0],[{node:prop}]);({count:coastalVergeMeshes.size,old:prop.mesh.sourceData.length})');assert.equal(result.count,0);assert.equal(result.old,20);
});

test('verge cached real chunk rolls back exactly and source failure restores default',()=>{
 const base=context(false),off=base.run('const root=decorateChunk(8,road(320).p,()=>.4);JSON.stringify(root.children.map(n=>({m:n.local,d:Array.from(n.mesh.sourceData),i:Array.from(n.mesh.sourceIndices)})))');
 const c=context();c.run('this.root=decorateChunk(8,road(320).p,()=>.4);this.verge=[...coastalVergeMeshes.values()]');assert(c.run('verge.length')>0);c.run('disableCoastalSpace()');assert.equal(c.run('JSON.stringify(root.children.map(n=>({m:n.local,d:Array.from(n.mesh.sourceData),i:Array.from(n.mesh.sourceIndices)})))'),off);assert.equal(c.run('coastalVergeMeshes.size+coastalVergeObstacles.size'),0);
 const failed=context();failed.coastVergeSource=()=>{throw Error('broken source')};failed.run('buildLandscape()');assert.equal(failed.active(),false);
});

test('chosen verge patch has no foreign-chunk original prop overlap over whole circuit',()=>{
 const c=context();const result=c.run(`const patch=coastalSpaceModel().verge.instances.map(e=>e.bbox),hits=[];coastalSpaceCandidate=false;
 for(let q=0;q<Math.ceil(CIRCUIT_LENGTH/40);q++){
  if(q>=7&&q<=9)continue;
  const boxes=[],o=road(q*40).p;
  for(const position of [0,1])for(const scale of [0,1]){let draw=0;const root=decorateChunk(q,o,()=>draw++%2===0?position:scale);root.children.forEach((node,j)=>{const a=boxes[j]??={minX:Infinity,maxX:-Infinity,minZ:Infinity,maxZ:-Infinity},d=node.mesh.sourceData;for(let i=0;i<d.length;i+=10){const p=add(transform(node.local,[d[i],d[i+1],d[i+2]]),o);a.minX=Math.min(a.minX,p[0]);a.maxX=Math.max(a.maxX,p[0]);a.minZ=Math.min(a.minZ,p[2]);a.maxZ=Math.max(a.maxZ,p[2]);}});}
  for(const a of boxes)for(const b of patch)if(b.minX<a.maxX+.5&&b.maxX>a.minX-.5&&b.minZ<a.maxZ+.5&&b.maxZ>a.minZ-.5)hits.push(q);
 }({hits,patch:patch.length,chunks:Math.ceil(CIRCUIT_LENGTH/40)})`);assert.equal(JSON.stringify(result.hits),'[]');assert(result.patch>0);console.log('verge whole-circuit swept-prop check',result);
});

test('fence consumer recalculates live supports and emits unchanged source matrices in streamed chunks',()=>{
 const c=context(),model=c.model();assert.equal(model.fence.accepted.length,13);assert.equal(model.fence.rejected.length,27);
 for(const entry of model.fence.instances){
  const k=Math.floor(entry.row.s/40),root=c.run(`decorateChunk(${k},road(${k*40}).p,()=>.37)`),origin=c.run(`road(${k*40}).p`);
  const node=root.children.find(n=>n.mesh===c.run(`coastalFenceMeshes.get(${JSON.stringify(entry.partId)})`)&&Math.abs(n.local[12]+origin[0]-entry.matrix[12])<.001&&Math.abs(n.local[14]+origin[2]-entry.matrix[14])<.001);
  assert(node);assert.deepEqual(Array.from(node.mesh.sourceData),Array.from(entry.part.sourceData));assert.deepEqual(Array.from(node.mesh.sourceIndices),Array.from(entry.part.sourceIndices));
  for(let i=0;i<16;i++)assert(Math.abs(node.local[i]-(entry.matrix[i]-([12,13,14].includes(i)?origin[i-12]:0)))<.001);
 }
});
test('fence source failure restores original scene and disposal releases all fence meshes',()=>{
 const c=context(),baseline=context(false);const serialize=x=>x.run('JSON.stringify(decorateChunk(8,road(320).p,()=>.4).children.map(n=>({m:Array.from(n.local),d:Array.from(n.mesh.sourceData)})))');
 const old=serialize(baseline);c.run('this.root=decorateChunk(8,road(320).p,()=>.4);this.fences=[...coastalFenceMeshes.values()]');assert(c.run('fences.length')>0);
 c.run('this.disposed=0;for(const mesh of fences){const original=mesh.dispose.bind(mesh);mesh.dispose=()=>{disposed++;original()}};disableCoastalSpace()');assert.equal(c.run('disposed'),c.run('fences.length'));assert.equal(c.run('coastalFenceMeshes.size'),0);
 const bad=context();bad.coastFenceSource=()=>{throw Error('broken fence source')};assert.equal(serialize(bad),old);assert.equal(bad.active(),false);
});
test('fence decoding stays off on default, other tracks, legacy and endless',()=>{
 for(const [enabled,id,road,endless] of [[false,'coast-reborn',true,false],[true,'academy-reborn',true,false],[true,'coast-reborn',false,false],[true,'coast-reborn',true,true]]){
  const c=context(enabled,id,road);let calls=0;c.coastFenceSource=()=>{calls++;throw Error('must stay lazy')};if(endless)c.run("raceMode='endless'");
  c.run('decorateChunk(8,road(320).p,()=>.4)');assert.equal(calls,0);assert.equal(c.run('coastalFenceMeshes.size'),0);
 }
});

test('inland bank relaxation reduces grid height curvature without moving protected geometry',()=>{
 const before=context();before.run('smoothCoastalSlopes=()=>{}');const a=before.model(),b=context().model(),stride=Math.round((a.bounds.x1-a.bounds.x0)/a.bounds.step)+1;
 let changed=0,oldBend=0,newBend=0;
 for(let i=stride;i<a.vertices.length-stride;i++){
  if(i%stride===0||i%stride===stride-1)continue;
  const bend=m=>Math.abs(4*m.vertices[i][1]-[i-1,i+1,i-stride,i+stride].reduce((v,j)=>v+m.vertices[j][1],0));
  oldBend+=bend(a);newBend+=bend(b);
  if(a.vertices[i][1]!==b.vertices[i][1]){
   changed++;assert(a.nearest(a.vertices[i][0],a.vertices[i][2]).d>38);
   assert(b.vertices[i][1]>-.82,'no new water crossings');
   assert(Math.abs(b.vertices[i][1]-a.vertices[i][1])<1,'bounded slope adjustment');
  }
 }
 assert(changed>50,'whole inland bank, not a single decorative patch');
 assert(newBend<oldBend,'less discrete height curvature, not a visual quality score');
 console.log('inland bank relaxation',{changed,oldBend,newBend});
});
