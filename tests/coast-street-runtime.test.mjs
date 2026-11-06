import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import * as THREE from 'three';
import {createSkyPanorama} from '../sky-panorama.js';
import {createCoastStreetPlan,decodeCoastStreetSource,COAST_STREET_ROWS} from '../coast-street-runtime.mjs';
import {verifyFixedSource,meshDigest,readFixedSource} from '../authoring/coast-street-placement/fixed-source-contract.mjs';
import {placeStreet,boxSegmentDistance} from '../authoring/coast-street-placement/adapter.mjs';
import {planStreetRows,inspectStreetRowPairs} from '../authoring/coast-street-layout/layout.mjs';
const read=p=>fs.readFileSync(p,'utf8'),fixed=verifyFixedSource(),parts=fixed.parts;
const serialize=nodes=>JSON.stringify(nodes.map(n=>({m:Array.from(n.local),data:Array.from(n.mesh.sourceData),indices:Array.from(n.mesh.sourceIndices)})));
function context(enabled=true,id='coast-reborn',road=true,extra={}){
 const scope={createCoastStreetPlan,coastStreetSource:()=>parts,...extra};
 vm.runInNewContext(`const roadDriving=${road};let coastalSpaceCandidate=${enabled};${read('engine.js')}\n${read('race.js').split('\n').find(line=>line.startsWith('function quad('))}\n${read('circuit.js')}\n${read('assets/landscape/coastal-rocks.js')}\n${read('coastal-space.js')}\n${read('scenery.js')}\n${extra.softwareSource??read('software-renderer.js')}\nactiveTrackId=${JSON.stringify(id)};rebuildCircuit();function road(s){return circuitRoad(s)}function atRoad(s,l,y=0){const r=road(s);return add(r.p,add(mul(r.R,l),[0,y,0]))}function wrapAngle(a){return Math.atan2(Math.sin(a),Math.cos(a))}this.run=s=>eval(s);this.api={Mesh,Node,mm,translation,transform,coastalSpaceModel,coastalSpaceDecorate,decorateChunk,disableCoastalSpace,softwareCoastStreet,drawSoftwareSign};`,scope);
 return scope;
}
const scene=context(),model=scene.api.coastalSpaceModel();

test('build payload decodes exact pinned source bytes, normals, colors and dimensions',()=>{
 const decoded=decodeCoastStreetSource(readFixedSource('street.glb').toString('base64'));
 assert.equal(decoded.length,3);
 for(let j=0;j<parts.length;j++){
  assert.equal(meshDigest(decoded[j]),fixed.contract.parts[j].mesh_sha256);
  assert.deepEqual(decoded[j].pivot,parts[j].pivot);
 }
 assert.throws(()=>decodeCoastStreetSource('AAAA'),/Invalid GLB/);
});

test('live 320–680 plan is deterministic, complete-row filtered and identical to accepted report',()=>{
 const expected=JSON.parse(read('authoring/coast-street-layout/out/coast-layout-320-680.json')).setback4;
 assert.equal(JSON.stringify(model.street.plan.accepted),JSON.stringify(expected.accepted));
 assert.equal(JSON.stringify(model.street.plan.rejected),JSON.stringify(expected.rejected));
 const again=planStreetRows(parts,scene.run('circuitRoad'),COAST_STREET_ROWS.slice().reverse());
 assert.equal(JSON.stringify(again.accepted.map(r=>r.placements)),JSON.stringify(model.street.plan.accepted.map(r=>r.placements)));
 assert.equal(model.street.instances.length,30);assert.equal(model.street.plan.rejected.length,10);
 const placed=model.street.plan.accepted.map(({row})=>placeStreet(parts,scene.run('circuitRoad'),row.centerS,row.side,row.setback));
 assert(inspectStreetRowPairs(parts,placed).pairs.every(p=>p.pass));
 assert(!model.street.plan.accepted.some(r=>r.row.centerS===600&&r.row.side===-1));
});

test('actual scene nodes retain raw source geometry and original matrices, with only chunk-origin rebasing',()=>{
 const {Node,coastalSpaceDecorate}=scene.api,counts=new Map(),origin=[123.25,-2.125,-74.5];
 for(let k=7;k<=17;k++){
  const root=new Node();coastalSpaceDecorate(root,k,origin);
  const expected=model.street.instances.filter(e=>Math.floor(e.placement.station/40)===k);
  const houseNodes=root.children.filter(n=>parts.some(p=>p.sourceIndices.length===n.mesh.sourceIndices.length));
  assert.equal(houseNodes.length,expected.length);
  for(let j=0;j<expected.length;j++){
   const node=houseNodes[j],{part,placement}=expected[j];
   assert.equal(meshDigest({sourceData:node.mesh.sourceData,sourceIndices:node.mesh.sourceIndices}),meshDigest(part));
   const matrix=placement.matrix.slice();for(let axis=0;axis<3;axis++)matrix[12+axis]-=origin[axis];
   assert.deepEqual(Array.from(node.local),matrix);
   const world=scene.api.mm(scene.api.translation(...origin),node.local);
   for(let i=0;i<16;i++)assert(Math.abs(world[i]-placement.matrix[i])<.00002);
   if(counts.has(part.name))assert.equal(counts.get(part.name).mesh,node.mesh,'same source mesh is shared');
   counts.set(part.name,{mesh:node.mesh,count:(counts.get(part.name)?.count||0)+1});
  }
 }
 assert.deepEqual([...counts.values()].map(x=>x.count),[10,10,10]);
});

test('separate foundations meet the original house base and contain terrain without expanding footprints',()=>{
 const samples=scene.run('circuitSamples');
 for(const e of model.street.instances){
  const {placement:p,foundation:g,terrainRange}=e;
  assert(terrainRange.max<p.matrix[13]-.02);
  assert.equal(Math.max(...g.p.filter((_,i)=>i%3===1)),0);
  assert(Math.abs(Math.min(...g.p.filter((_,i)=>i%3===1))+p.matrix[13]-(terrainRange.min-.15))<1e-12);
  for(let j=0;j<g.p.length;j+=3){const q=scene.api.transform(p.matrix,g.p.slice(j,j+3));assert(q[0]>=p.bbox.minX-1e-9&&q[0]<=p.bbox.maxX+1e-9);assert(q[2]>=p.bbox.minZ-1e-9&&q[2]<=p.bbox.maxZ+1e-9);}
  for(let j=1;j<samples.length;j++)assert(boxSegmentDistance(p.bbox,[samples[j-1].p[0],samples[j-1].p[2]],[samples[j].p[0],samples[j].p[2]])>=12-1e-6);
  for(let j=0;j<g.i.length;j+=3){const [a,b,c]=g.i.slice(j,j+3).map(i=>g.p.slice(i*3,i*3+3)),u=b.map((x,i)=>x-a[i]),v=c.map((x,i)=>x-a[i]),n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],normal=g.n.slice(g.i[j]*3,g.i[j]*3+3);assert(n.reduce((s,x,i)=>s+x*normal[i],0)>0);}
 }
 const bad={...model,vertices:model.vertices.map(p=>[p[0],50,p[2]])};
 assert.throws(()=>createCoastStreetPlan(parts,scene.run('circuitRoad'),bad,samples),/Terrain intersects/);
});

test('off, legacy, other tracks and endless do not decode the source or create street resources',()=>{
 for(const [enabled,id,road] of [[false,'coast-reborn',true],[true,'coast-reborn',false],[true,'sakura-reborn',true],[true,'academy-reborn',true]]){
  const c=context(enabled,id,road,{coastStreetSource(){throw Error('must remain lazy')}});
  c.run('buildLandscape();for(let k=7;k<19;k++)decorateChunk(k,road(k*40).p,()=>.4)');
  assert.equal(c.run('coastalStreetMeshes.size+coastalStreetFoundations.size'),0);
 }
 const c=context(true,'coast-reborn',true,{coastStreetSource(){throw Error('must remain lazy')}});c.run("raceMode='endless';decorateChunk(8,road(320).p,()=>.4)");assert.equal(c.run('coastalStreetMeshes.size'),0);
});

test('candidate source failure and late replacement failure restore original cached chunks and terrain exactly',()=>{
 const base=context(false),pack=`JSON.stringify([Array.from(landscapeNode.mesh.sourceData),Array.from(landscapeNode.mesh.sourceIndices)])`;
 base.run('buildLandscape()');const baselineLandscape=base.run(pack);
 const bad=context(true,'coast-reborn',true,{coastStreetSource(){throw Error('bad asset')}});bad.run('buildLandscape()');assert.equal(bad.run('coastalSpaceEnabled()'),false);assert.equal(bad.run(pack),baselineLandscape);
 const c=context();c.run('buildLandscape();this.roots=[];for(let k=7;k<=17;k++)roots.push(decorateChunk(k,road(k*40).p,()=>.4))');
 const baseline=Array.from({length:11},(_,i)=>serialize(base.api.decorateChunk(i+7,base.run(`road(${(i+7)*40}).p`),()=>.4).children));
 assert(c.run('coastalStreetMeshes.size')===3);
 c.run("coastalStreetRemoved=()=>{throw Error('late replacement failure')};decorateChunk(18,road(720).p,()=>.4)");
 assert.equal(c.run('coastalSpaceEnabled()'),false);assert.equal(c.run(pack),baselineLandscape);
 assert.deepEqual(Array.from(c.roots,r=>serialize(r.children)),baseline);
 assert.equal(c.run('coastalStreetMeshes.size+coastalStreetFoundations.size'),0);
});

// Real Three scene/material/buffer/instance code, GPU renderer stubbed. No GPU/browser proof.
function backend(){
 class Renderer{constructor(){this.shadowMap={};this.info={render:{calls:0,triangles:0}}}setPixelRatio(){}setSize(){}render(){}}
 const c={createSkyPanorama,THREE:{...THREE,WebGLRenderer:Renderer},devicePixelRatio:1,performance};
 vm.runInNewContext(read('render-three.js').replace("import * as THREE from 'three';",'').replace("import {createSkyPanorama} from './sky-panorama.js';",'').replace('export function','function'),c);
 return c.createThreeBackend({getContext:()=>({})},{shading:'lambert',hemisphereIntensity:.7});
}
test('actual Three consumer receives all source attributes/indices and the rigid instance transform',()=>{
 const b=backend(),items=parts.map((part,j)=>({mesh:new scene.api.Mesh(part.sourceData,part.sourceIndices),m:model.street.instances[j].placement.matrix,shadow:true}));
 b.render(items,{eye:[0,2,5],target:[0,0,0]},1280,720,62,{quality:'high'});
 const batches=b.scene.children.filter(n=>n.isInstancedMesh);assert.equal(batches.length,3);
 for(let j=0;j<3;j++){
  const batch=batches[j],part=parts[j];assert.equal(batch.material.type,'MeshLambertMaterial');assert.equal(batch.count,1);
  for(const [name,offset] of [['position',0],['normal',3],['color',6]])assert.deepEqual(Array.from(batch.geometry.attributes[name].array),Array.from(part.sourceData).filter((_,i)=>i%10>=offset&&i%10<offset+3));
  assert.deepEqual(Array.from(batch.geometry.index.array),Array.from(part.sourceIndices));assert.deepEqual(Array.from(batch.instanceMatrix.array.slice(0,16)),Array.from(new Float32Array(items[j].m)));
 }
 for(const item of items)item.mesh.dispose();assert.equal(b.scene.children.filter(n=>n.isInstancedMesh).length,0);
});

test('actual Canvas street consumer projects original triangles/colors, sorts depth, and rejects unrelated meshes',()=>{
 const project=p=>[500+p[0]*5,300-p[1]*5,p[2]+100,5];
 const meshes=parts.map(part=>{const mesh=new scene.api.Mesh(part.sourceData,part.sourceIndices);mesh.coastStreet=true;return mesh});
 const items=meshes.map((mesh,i)=>({mesh,m:scene.api.translation(i*15,2,0)}));
 const faces=scene.api.softwareCoastStreet([...items,{mesh:new scene.api.Mesh(parts[0].sourceData,parts[0].sourceIndices),m:scene.api.translation(0,0,0)}],project,1000,600);
 assert.equal(faces.length,3317);
 const expected=items.flatMap(({mesh,m})=>Array.from({length:mesh.sourceIndices.length/3},(_,j)=>Array.from(mesh.sourceIndices.slice(j*3,j*3+3),index=>project(scene.api.transform(m,Array.from(mesh.sourceData.slice(index*10,index*10+3)))))));
 const normalize=a=>a.map(x=>JSON.stringify(x)).sort();assert.deepEqual(normalize(Array.from(faces,f=>f.triangles[0].p)),normalize(expected));
 assert(faces.every((f,i)=>i===0||f.q[2]<=faces[i-1].q[2]));
 let draws=0;const ctx={beginPath(){},moveTo(){},lineTo(){},closePath(){},fill(){draws++}};
 for(const f of faces)scene.api.drawSoftwareSign(ctx,f);assert.equal(draws,3317);
 assert.equal(scene.api.softwareCoastStreet(items,()=>null,1000,600).length,0);
 assert.equal(scene.api.softwareCoastStreet(items,p=>[500,300,300,5],1000,600).length,0);
});

test('actual drawSoftware consumes street faces, removes duplicate icons, and paints near road after far houses',()=>{
 for(const anchors of [false,true]){
  const paints=[];let color=null,path=[];
  const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),beginPath(){path=[]},moveTo(x,y){path.push([x,y])},lineTo(x,y){path.push([x,y])},fill(){paints.push({color,path})},fillRect(){paints.push({color,rect:true})}}, {get:(o,k)=>o[k]??(()=>{}),set:(o,k,v)=>{if(k==='fillStyle')color=v;o[k]=v;return true}});
  const c=context(true,'coast-reborn',true,{softwareContext:ctx,canvas:{width:1000,height:600},cameraFov:60,player:{s:400,l:0,yaw:0,jump:0},skids:[],chunks:new Map(),settings:{line:false},ghostPose:null,state:'paused',softwareHouseAnchorsEnabled:anchors});
  // One real stride-10 candidate triangle, at known depth beyond a nearer
  // road segment, through the complete compatibility draw function.
  c.run(`road=s=>({p:[0,0,s],R:[1,0,0],T:[0,0,1],h:0});atRoad=(s,l,y=0)=>[l,y,s];this.drawList=[];const c=new Collector();c.add(shape([11,0,0,11,5,0,16,0,0],[0,0,-1,0,0,-1,0,0,-1],[0,1,2]),I,[.25,.5,.75]);const mesh=c.finish();mesh.coastStreet=true;drawList.push({mesh,m:translation(0,0,460)});drawSoftware({eye:[0,3,390],target:[0,3,500],origin:[0,0,0]});`);
  const streetColor='rgb(136,186,224)',streetIndex=paints.findIndex(p=>p.color===streetColor);
  assert(streetIndex>=0,'complete draw function paints actual source mesh');
  assert(paints.slice(streetIndex+1).some(p=>p.color==='#7b829a'),'near road draws over more distant street faces');
  assert(!paints.some(p=>p.color==='#f3e9dc'),'no synthetic house icon in replacement band');
  assert(!paints.some(p=>p.color==='#efbbd4'),'no synthetic tree icon in replacement band');
  assert.equal(c.api.softwareCoastStreet(c.drawList,p=>[500+p[0],300-p[1],p[2],1],1000,600,[0,3,500]).length,0,'back side is culled');
 }
});

test('real smooth-normal street sources use geometric winding, not shading normals, at six driving views',()=>{
 const w=1280,h=720,f=h/(2*Math.tan(Math.PI/6));
 const sub=(a,b)=>a.map((v,i)=>v-b[i]),dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0),cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],norm=a=>a.map(v=>v/Math.hypot(...a));
 const items=model.street.instances.map(({part,placement})=>{const mesh=new scene.api.Mesh(part.sourceData,part.sourceIndices);mesh.coastStreet=true;return {mesh,m:placement.matrix}});
 const before=items.map(({mesh})=>meshDigest(mesh)),counts=[];
 for(const station of [320,400,480,560,640,680]){
  const eye=Array.from(scene.run(`atRoad(${station-10},0,4)`)),target=Array.from(scene.run(`atRoad(${station+20},0,1)`));
  const z=norm(sub(target,eye)),right=norm(cross(z,[0,1,0])),up=cross(right,z);
  const project=p=>{const d=sub(p,eye),depth=dot(d,z);return depth<.25?null:[w/2+dot(d,right)*f/depth,h/2-dot(d,up)*f/depth,depth,f/depth]};
  const expected=[];let shadingWrong=0;
  for(const {mesh,m} of items){
   const q=project(scene.api.transform(m,[0,2.5,0]));if(!q||q[2]>210||q[0]<-q[3]*12||q[0]>w+q[3]*12||q[1]<-q[3]*12||q[1]>h+q[3]*12)continue;
   const data=mesh.sourceData,indices=mesh.sourceIndices;
   for(let j=0;j<indices.length;j+=3){
    const points=Array.from(indices.slice(j,j+3),index=>scene.api.transform(m,Array.from(data.slice(index*10,index*10+3)))),p=points.map(project);
    if(p.some(v=>!v)||p.every(v=>v[0]<0)||p.every(v=>v[0]>w)||p.every(v=>v[1]<0)||p.every(v=>v[1]>h))continue;
    const [a,b,c]=points,facing=dot(cross(sub(b,a),sub(c,a)),sub(eye,a))>0,at=indices[j]*10;
    const normal=[m[0]*data[at+3]+m[4]*data[at+4]+m[8]*data[at+5],m[1]*data[at+3]+m[5]*data[at+4]+m[9]*data[at+5],m[2]*data[at+3]+m[6]*data[at+4]+m[10]*data[at+5]];
    if((dot(normal,sub(eye,a))>0)!==facing)shadingWrong++;
    if(facing)expected.push(p);
   }
  }
  const actual=scene.api.softwareCoastStreet(items,project,w,h,eye);
  const normalize=a=>a.map(p=>JSON.stringify(p)).sort();
  assert.deepEqual(normalize(Array.from(actual,face=>face.triangles[0].p)),normalize(expected),`station ${station}: exact front-facing triangle set`);
  assert(shadingWrong>0,`station ${station}: real smoothed normals differ from geometry, so this catches the old bug`);
  counts.push({station,faces:expected.length,shadingWrong});
 }
 assert.equal(counts.find(x=>x.station===480).faces,5115);
 assert.deepEqual(items.map(({mesh})=>meshDigest(mesh)),before,'culling never rewrites source normals or geometry');
});

test('actual Canvas road interior stays continuously covered when street depth sorting is enabled',()=>{
 const w=1280,h=720,f=h/(2*Math.tan(Math.PI/6)),roadColors=new Set(['#e3dce5','#7b829a','#e9edf1','#c0cfe2']);
 const sub=(a,b)=>a.map((v,i)=>v-b[i]),dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0),cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],norm=a=>a.map(v=>v/Math.hypot(...a));
 const inside=(p,polygon)=>{let hit=false;for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){const a=polygon[i],b=polygon[j];if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])hit=!hit;}return hit;};
 function frame(enabled,station){
  const paints=[];let color=null,path=[];
  const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),beginPath(){path=[]},moveTo(x,y){path.push([x,y])},lineTo(x,y){path.push([x,y])},fill(){if(roadColors.has(color)&&path.length>=3)paints.push({color,p:path})}}, {get:(o,k)=>o[k]??(()=>{}),set:(o,k,v)=>{if(k==='fillStyle')color=v;o[k]=v;return true}});
  const c=context(enabled,'coast-reborn',true,{softwareContext:ctx,canvas:{width:w,height:h},cameraFov:60,player:{s:station,l:0,yaw:0,jump:0},skids:[],chunks:new Map(),settings:{line:false},ghostPose:null,state:'paused'});
  const view=c.run(`(()=>{const origin=road(${station}).p;return {origin,eye:sub(atRoad(${station-10},0,4),origin),target:sub(atRoad(${station+20},0,1),origin)}})()`);
  c.drawSoftware(view);
  return {paints,c,view};
 }
 for(const station of [298,320,400,480,560,640,680]){
  const before=frame(false,station),after=frame(true,station),{eye,target,origin}=before.view;
  // Same original quads and surface layers, not independently sorted halves.
  assert.equal(JSON.stringify(after.paints),JSON.stringify(before.paints),`station ${station}: all original road quads and their complete paint order retained`);
  const z=norm(sub(target,eye)),right=norm(cross(z,[0,1,0])),up=cross(right,z);
  const project=p=>{const d=sub(sub(p,origin),eye),depth=dot(d,z);return depth<.25?null:[w/2+dot(d,right)*f/depth,h/2-dot(d,up)*f/depth]};
  const paintAt=(paints,p)=>{for(let i=paints.length-1;i>=0;i--)if(inside(p,paints[i].p))return paints[i].color;return null;};
  let checked=0;
  for(let ds=1;ds<180;ds+=2)for(let l=-6.5;l<=6.5;l+=.5){
   const point=project(before.c.run(`atRoad(${station+ds},${l},.05)`));
   if(!point||point[0]<1||point[0]>w-1||point[1]<1||point[1]>h-1)continue;
   const expected=paintAt(before.paints,point);
   if(expected!=='#7b829a'&&expected!=='#e9edf1')continue;
   const actual=paintAt(after.paints,point);
   assert(actual==='#7b829a'||actual==='#e9edf1',`station ${station}, ds ${ds}, lateral ${l}: road interior was overwritten by ${actual}`);checked++;
  }
  assert(checked>400,`station ${station}: enough actual road-surface screen samples`);
 }
});
