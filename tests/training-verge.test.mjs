import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdtempSync,cpSync,rmSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import vm from 'node:vm';
const read=f=>readFileSync(f,'utf8'),hash=x=>createHash('sha256').update(x).digest('hex');
const engine=read('engine.js'),circuit=read('circuit.js'),data=read('assets/landscape/coastal-rocks.js'),source=read('scenery.js'),quad=read('race.js').split('\n').find(line=>line.startsWith('function quad('));
function evaluate(road,id,tail,scene=source){
 return vm.runInNewContext(`const roadDriving=${road};${engine}\n${quad}\n${circuit}\n${data}\n${scene}\nactiveTrackId=${JSON.stringify(id)};rebuildCircuit();function road(s){return circuitRoad(s)}function atRoad(s,l,y=0){const r=road(s);return add(r.p,add(mul(r.R,l),[0,y,0]))}function wrapAngle(a){return Math.atan2(Math.sin(a),Math.cos(a))}\n${tail}`,{}, {timeout:10000});
}
test('training sources keep all source faces, provenance hashes and a repeatable bake',()=>{
 const expected={plant_bushDetailed:'be40d35b392db76f68c7235a1c2ba0452a37fe441d93929ef42918bdb91f4a11'};
 for(const [name,digest] of Object.entries(expected))assert.equal(hash(readFileSync(`assets/landscape/source/${name}.obj`)),digest);
 const shapes=evaluate(true,'academy-reborn','[trainingPlantShape()]');
 assert.deepEqual(Array.from(shapes,g=>g.i.length/3),[104]);
 for(const g of shapes){assert(g.p.every(Number.isFinite));for(let j=0;j<g.p.length;j+=9){const a=g.p.slice(j,j+3),b=g.p.slice(j+3,j+6).map((v,k)=>v-a[k]),c=g.p.slice(j+6,j+9).map((v,k)=>v-a[k]),n=[b[1]*c[2]-b[2]*c[1],b[2]*c[0]-b[0]*c[2],b[0]*c[1]-b[1]*c[0]];assert(Math.hypot(...n)>1e-9);assert(n.reduce((sum,v,k)=>sum+v*g.n[j+k],0)>0);}}
 execFileSync('python3',['assets/landscape/convert.py']);assert.equal(read('assets/landscape/coastal-rocks.js'),data);
});
test('the bake rejects missing source and degenerate faces without producing a partial asset',()=>{
 const tmp=mkdtempSync(join(tmpdir(),'training-verge-'));
 try{
  cpSync('assets/landscape/convert.py',join(tmp,'convert.py'));cpSync('assets/landscape/source',join(tmp,'source'),{recursive:true});
  const target=join(tmp,'source/plant_bushDetailed.obj');rmSync(target);
  assert.throws(()=>execFileSync('python3',[join(tmp,'convert.py')],{stdio:'pipe'}));
  writeFileSync(target,'v 0 0 0\nv 1 1 1\nv 2 2 2\nf 1 2 3\n');
  assert.throws(()=>execFileSync('python3',[join(tmp,'convert.py')],{stdio:'pipe'}),/Degenerate source triangle/);
  assert.throws(()=>readFileSync(join(tmp,'coastal-rocks.js')),/ENOENT/);
 }finally{rmSync(tmp,{recursive:true,force:true});}
});
test('verge plants stay outside rail, below signs, and do not consume the prop random stream',()=>{
 const result=JSON.parse(evaluate(true,'academy-reborn',`let placements=[];const addOriginal=Collector.prototype.add;Collector.prototype.add=function(g,m,col,...rest){if(g===trainingPlantShape())placements.push({m:Array.from(m),col});return addOriginal.call(this,g,m,col,...rest)};const chunks=[];for(let k=0;k<Math.ceil(CIRCUIT_LENGTH/40);k++){const n=trainingVerge(k,[0,0,0]);chunks.push({vertices:n.mesh.sourceData.length/10,triangles:n.mesh.sourceIndices.length/3})}JSON.stringify({placements,chunks,road:circuitSamples.filter((_,i)=>i%20===0).map(x=>x.p)})`));
 assert(result.placements.length>400);assert(result.chunks.every(c=>c.triangles<=2080));
 for(const {m} of result.placements){assert(m.every(Number.isFinite));assert(m[5]<=.683);const nearest=Math.min(...result.road.map(p=>Math.hypot(p[0]-m[12],p[2]-m[14])));assert(nearest>11.9,'plant center has at least 3.8m rail clearance');}
 const original=source.replace(" if(roadDriving&&raceMode==='circuit'&&activeTrackId==='academy-reborn')root.add(trainingVerge(k,origin));",'');
 const tail=`let calls=0;const nodes=[];for(let k=0;k<7;k++){const n=decorateChunk(k,[0,0,0],()=>{calls++;return .5});nodes.push(n.children.map(n=>({m:Array.from(n.local),data:Array.from(n.mesh.sourceData),i:Array.from(n.mesh.sourceIndices)})))}JSON.stringify({calls,nodes})`;
 const baseline=JSON.parse(evaluate(true,'academy-reborn',tail,original)),candidate=JSON.parse(evaluate(true,'academy-reborn',tail));
 assert.equal(candidate.calls,baseline.calls);
 for(let k=0;k<7;k++){assert.equal(candidate.nodes[k].length,baseline.nodes[k].length+1);assert.deepEqual(candidate.nodes[k].slice(0,-1),baseline.nodes[k],'pre-existing decoration geometry and random consumption unchanged');}
});
test('all six actual landscape profiles retain their c4c geometry bytes',()=>{
 const expected={"false/coast-reborn":"eb6433551e95adf31c8cf74ead352d5b4a65d892e1830f0eeab8fbe4e73b2a82","false/sakura-reborn":"53c693773e9b4c01436bd66b452c107bb142b68ea0c239a9b11aff1f96551ac8","false/academy-reborn":"b466cf4ca2aa9045690121e0bbef53e538a74d9ef225b769df0a55bfb9fa2cdc","true/coast-reborn":"b437a850b84bd5d3c4fd0e0b29acaaf60018642cc78b557edac18a25c8ee1a4b","true/sakura-reborn":"53c693773e9b4c01436bd66b452c107bb142b68ea0c239a9b11aff1f96551ac8","true/academy-reborn":"b466cf4ca2aa9045690121e0bbef53e538a74d9ef225b769df0a55bfb9fa2cdc"};
 const tail='buildLandscape();JSON.stringify({data:Array.from(landscapeNode.mesh.sourceData),indices:Array.from(landscapeNode.mesh.sourceIndices)})';
 for(const road of [false,true])for(const id of ['coast-reborn','sakura-reborn','academy-reborn'])assert.equal(hash(evaluate(road,id,tail)),expected[road+'/'+id]);
});
test('legacy and other course prop samples remain byte-identical',()=>{
 const original=source.replace(" if(roadDriving&&raceMode==='circuit'&&activeTrackId==='academy-reborn')root.add(trainingVerge(k,origin));",'');
 const tail='let calls=0;const n=decorateChunk(6,[0,0,0],()=>{calls++;return .5});JSON.stringify({calls,children:n.children.map(n=>({m:Array.from(n.local),data:Array.from(n.mesh.sourceData),i:Array.from(n.mesh.sourceIndices)}))})';
 for(const road of [false,true])for(const id of ['coast-reborn','sakura-reborn','academy-reborn'])if(!(road&&id==='academy-reborn'))assert.equal(hash(evaluate(road,id,tail)),hash(evaluate(road,id,tail,original)));
});
