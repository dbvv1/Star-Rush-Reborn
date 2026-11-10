import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';

const read=p=>fs.readFileSync(p,'utf8'),hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const race=read('race.js'),engine=read('engine.js'),circuit=read('circuit.js'),coastal=read('coastal-space.js'),helper=read('coast-shoulder-client.js');
const quad=race.split('\n').find(line=>line.startsWith('function quad('));
const localRand=race.split('\n').find(line=>line.startsWith('function localRand(k)'));
const biomes=race.split('\n').find(line=>line.startsWith('const BIOMES='));
const chunkSource=race.slice(race.indexOf('function chunkMesh(k){'),race.indexOf('\nfunction stream()'));
const SURFACE='#c4b99f',WALL='#a59f89',MIN_S=300,MAX_S=710;
// Base commit 7fc22e8 digests for the default/off path; the palette consumer
// must leave every default chunk mesh byte-identical.
const BASE_DIGESTS={6:'66ee8d481d6eaf14ff7e5cb7a4a1f957a6b7d2fd9df8fd066af19dd1e22583eb',7:'f77beb6a93657208bb944ddbf5ba8a2fb9a64e11352d037cf6f90c854c9d7250',8:'36aea71a15a766254349ecd470234366ab6e84cebd2cfcb10e5c606e324e6271',12:'af8270b898aac8083abd14ea2664492b8fd0c50b378803b757a04a2d2876c3b7',17:'a324ab42782cd9b351082d27ffcaaff3113fcfdb9d91f153684f431728b2c213',18:'538b8fa2da06f68ce25e751cd4d0149c14e338670ac8e0efc0e85a6e1b0d0e0a'};
const linear=hex=>[1,3,5].map(o=>Math.fround(Math.pow(parseInt(hex.slice(o,o+2),16)/255,2.2)));

// Real Collector/Mesh, real chunkMesh text and real circuit samples. The scene
// decorator is a minimal stand-in for the existing coastal catch/disable path.
function context({enabled=true,road=true,id='coast-reborn',mode='circuit',withHelper=true}={}){
 const scope={};
 const source=`const roadDriving=${road},coastFlowCandidate=false;\nlet coastalSpaceCandidate=${enabled};\nlet routeSeed=73121;\n${biomes}\n${localRand}\n${quad}\n${engine}\n${chunkSource}\n${circuit}\n${coastal}\n${withHelper?helper:''}\nlet decorateFail=-1;\nfunction decorateChunk(k,origin,rr){const node=new Node();if(k===decorateFail)disableCoastalSpace();return node}\nconst coinMesh=new Mesh(new Float32Array(0),new Uint32Array(0)),padMesh=coinMesh,rampMesh=coinMesh,coneMesh=coinMesh,obstacleMesh=coinMesh,violet='#9c8ad5';\nfunction road(s){return circuitRoad(s)}\nfunction atRoad(s,l=0,y=0){const r=road(s);return add(add(r.p,mul(r.R,l)),[0,y,0])}\nfunction wrapAngle(a){return Math.atan2(Math.sin(a),Math.cos(a))}\nraceMode=${JSON.stringify(mode)};activeTrackId=${JSON.stringify(id)};rebuildCircuit();\nthis.run=s=>eval(s);this.api={chunkMesh,disableCoastalSpace,coastalSpaceEnabled,Mesh,color,road};`;
 vm.runInNewContext(source,scope);
 return scope;
}
const bytes=mesh=>Buffer.concat([
 Buffer.from(mesh.sourceData.buffer,mesh.sourceData.byteOffset,mesh.sourceData.byteLength),
 Buffer.from(mesh.sourceIndices.buffer,mesh.sourceIndices.byteOffset,mesh.sourceIndices.byteLength)
]);
const digests=(c,ks)=>[...c.run(`(${JSON.stringify(ks)}).map(k=>chunkMesh(k).node.mesh)`)].map(m=>hash(bytes(m)));

function expectedShoulder(c,start){
 const data=c.run(`(()=>{const start=${start},origin=road(start).p,starts=[],quads=[];const pt=(r,l,y)=>sub(add(add(r.p,mul(r.R,l)),[0,y,0]),origin);for(let j=0;j<10;j++){const s=start+j*4;if(s>=CIRCUIT_LENGTH)break;if(s>=${MIN_S}&&s<=${MAX_S})starts.push(s)}for(const s of starts){const r0=road(s),r1=road(Math.min(s+4,CIRCUIT_LENGTH));for(const side of [-1,1]){quads.push({kind:'surface',p:[pt(r0,side*7.65,-.02),pt(r0,side*11,-.08),pt(r1,side*11,-.08),pt(r1,side*7.65,-.02)]});quads.push({kind:'surface',p:[pt(r0,side*8.6,.06),pt(r0,side*11,.06),pt(r1,side*11,.06),pt(r1,side*8.6,.06)]});quads.push({kind:'wall',p:[pt(r0,side*11,.06),pt(r0,side*11,-1.25-r0.p[1]),pt(r1,side*11,-1.25-r1.p[1]),pt(r1,side*11,.06)]})}}return {starts,quads}})()`);
 const counts=new Map();
 for(const quad of data.quads){const col=linear(quad.kind==='wall'?WALL:SURFACE),key=p=>p.map(Math.fround).join(',')+'|'+col.join(',');
  for(const p of quad.p)counts.set(key(p),(counts.get(key(p))||0)+1);}
 return {starts:[...data.starts],counts};
}
function actualChanged(reference,colored){
 const counts=new Map();let changed=0;
 for(let v=0;v<colored.sourceData.length/10;v++){
  const at=v*10,different=[6,7,8].some(o=>colored.sourceData[at+o]!==reference.sourceData[at+o]);
  if(!different)continue;changed++;
  const key=[0,1,2].map(o=>colored.sourceData[at+o]).join(',')+'|'+[6,7,8].map(o=>colored.sourceData[at+o]).join(',');
  counts.set(key,(counts.get(key)||0)+1);
 }
 return {changed,counts};
}
const sorted=map=>[...map].sort((a,b)=>a[0]<b[0]?-1:a[0]>b[0]?1:0);

test('off, legacy, other tracks, endless and out-of-range chunks keep the pre-change mesh bytes',()=>{
 const scenarios=[
  {name:'default off',enabled:false,road:true,id:'coast-reborn',mode:'circuit',ks:[7,8,12,17]},
  {name:'legacy',enabled:false,road:false,id:'coast-reborn',mode:'circuit',ks:[7,12,17]},
  {name:'sakura',enabled:true,road:true,id:'sakura-reborn',mode:'circuit',ks:[7,12,17]},
  {name:'academy',enabled:true,road:true,id:'academy-reborn',mode:'circuit',ks:[7,12,17]},
  {name:'endless',enabled:true,road:true,id:'coast-reborn',mode:'endless',ks:[7,12,17]},
  {name:'outside 300-710',enabled:true,road:true,id:'coast-reborn',mode:'circuit',ks:[6,18,19]}
 ];
 for(const scenario of scenarios){
  const reference=context({...scenario,withHelper:false}),candidate=context({...scenario,withHelper:true});
  assert.deepEqual(digests(candidate,scenario.ks),digests(reference,scenario.ks),scenario.name+': full source geometry, color and indices unchanged');
  if(scenario.name==='outside 300-710')assert.equal(candidate.run('coastShoulderMeshes.size'),0,scenario.name+': no shoulder mesh is registered');
  else assert.equal(candidate.run('coastalSpaceEnabled()'),false,scenario.name+': shoulder consumer must stay inert');
 }
 const reference=context({withHelper:false}),candidate=context({withHelper:true});
 for(const k of [7,8,12,17])assert.notEqual(digests(candidate,[k])[0],digests(reference,[k])[0],'chunk '+k+' actually carries the shoulder palette');
 const defaultOff=context({enabled:false,withHelper:true});
 for(const [k,expected] of Object.entries(BASE_DIGESTS))assert.equal(digests(defaultOff,[+k])[0],expected,'default/off chunk '+k+' matches base commit 7fc22e8 byte-for-byte');
});

test('active chunks change only the two shoulder RGBs on the three original shoulder surfaces',()=>{
 const reference=context({withHelper:false}),candidate=context({withHelper:true});
 for(const start of [280,320,480,640,680]){
  const base=reference.run(`chunkMesh(${start/40}).node.mesh`);
  const colored=candidate.run(`chunkMesh(${start/40}).node.mesh`);
  const expected=expectedShoulder(candidate,start),actual=actualChanged(base,colored);
  assert.equal(colored.sourceData.length,base.sourceData.length);assert.deepEqual(Array.from(colored.sourceIndices),Array.from(base.sourceIndices));
  for(let i=0;i<colored.sourceData.length;i++)if(i%10<6||i%10===9)assert.equal(colored.sourceData[i],base.sourceData[i],'position/normal/gloss byte '+i+' at '+start);
  assert.deepEqual(sorted(actual.counts),sorted(expected.counts),'exact shoulder vertex set and its two palette colors at '+start);
  assert.equal(actual.changed,expected.starts.length*24,'24 shoulder vertices per active 4 m segment at '+start);
 }
 const expected7=expectedShoulder(candidate,280);
 assert.deepEqual(expected7.starts,[300,304,308,312,316],'start boundary uses the original 4 m segment start and does not split geometry');
 const expected17=expectedShoulder(candidate,680);
 assert.deepEqual(expected17.starts,[680,684,688,692,696,700,704,708],'end boundary keeps 708 and excludes 712');
 assert.deepEqual(expectedShoulder(candidate,240).starts,[],'chunk 6 is before the band');
 assert.deepEqual(expectedShoulder(candidate,720).starts,[],'chunk 18 is after the band');
});

test('disable restores cached chunks in place: dispose first, full source snapshot, retained node/indices, repeated disable is inert',()=>{
 const reference=context({withHelper:false}),candidate=context({withHelper:true});
 candidate.run('this.c7=chunkMesh(7);this.c8=chunkMesh(8);this.c18=chunkMesh(18);this.seen=[];this.m7=c7.node.mesh;this.m8=c8.node.mesh;this.m18=c18.node.mesh;this.indices7=m7.sourceIndices;this.indices8=m8.sourceIndices;for(const m of [m7,m8])m.onDispose=()=>seen.push(Array.from(m.sourceData));this.colored7=Array.from(m7.sourceData);this.colored8=Array.from(m8.sourceData);');
 assert.equal(candidate.run('coastShoulderMeshes.size'),2,'two in-band chunks registered');
 const m7=candidate.m7,m8=candidate.m8,indices7=candidate.indices7,indices8=candidate.indices8;
 const baseline7=digests(reference,[7])[0],baseline8=digests(reference,[8])[0],baseline18=digests(reference,[18])[0];
 assert.notEqual(hash(bytes(m7)),baseline7);assert.notEqual(hash(bytes(m8)),baseline8);
 candidate.run('this.m18.onDispose=()=>seen.push("unexpected");');
 candidate.run('disableCoastalSpace()');
 assert.equal(candidate.run('coastalSpaceEnabled()'),false);
 assert.equal(candidate.run('coastShoulderMeshes.size'),0,'registry cleared');
 assert.equal(candidate.run('seen.length'),2,'only the two recolored meshes were disposed');
 assert.deepEqual(Array.from(candidate.run('seen[0]')),Array.from(candidate.colored7),'dispose ran before sourceData replacement');
 assert.deepEqual(Array.from(candidate.run('seen[1]')),Array.from(candidate.colored8),'dispose ran before sourceData replacement');
 assert.equal(hash(bytes(m7)),baseline7,'cached chunk 7 byte-restored');assert.equal(hash(bytes(m8)),baseline8,'cached chunk 8 byte-restored');
 assert.equal(candidate.m7,m7);assert.equal(candidate.m8,m8);assert.equal(candidate.m7.sourceIndices,indices7);assert.equal(candidate.m8.sourceIndices,indices8);
 assert.equal(hash(bytes(candidate.m18)),baseline18,'chunk without shoulder ranges was not touched');
 candidate.run('disableCoastalSpace()');
 assert.equal(candidate.run('seen.length'),2,'repeated disable must not dispose again');
 assert.equal(candidate.run('coastShoulderMeshes.size'),0);
 candidate.run('coastalSpaceCandidate=true;this.fresh=chunkMesh(7).node.mesh;');
 assert.equal(candidate.run('coastShoulderMeshes.size'),1,'re-enable registers the newly built chunk');
 assert.notEqual(hash(bytes(candidate.fresh)),baseline7,'re-enabled rebuild is recolored again');
 assert.equal(hash(bytes(m7)),baseline7,'restored cached chunk 7 stays restored until rebuilt');
 assert.equal(hash(bytes(m8)),baseline8,'restored cached chunk 8 stays restored until rebuilt');
});

test('early failure and a late failure after two chunks restore every committed shoulder mesh',()=>{
 const reference=context({withHelper:false});
 const early=context({withHelper:true});
 early.run('disableCoastalSpace()');
 assert.equal(early.run('coastShoulderMeshes.size'),0);assert.equal(early.run('coastalSpaceEnabled()'),false);
 const earlyMesh=early.run('chunkMesh(7).node.mesh');
 assert.equal(hash(bytes(earlyMesh)),digests(reference,[7])[0],'pre-chunk failure leaves new chunks untouched');

 const first=context({withHelper:true});
 first.run('decorateFail=7;this.first=chunkMesh(7).node.mesh');
 assert.equal(first.run('coastalSpaceEnabled()'),false);assert.equal(first.run('coastShoulderMeshes.size'),0);
 assert.equal(hash(bytes(first.first)),digests(reference,[7])[0],'first-chunk catch restores the mesh it just built');

 const late=context({withHelper:true});
 late.run('this.c7=chunkMesh(7);this.c8=chunkMesh(8);decorateFail=9;this.c9=chunkMesh(9);this.m7=c7.node.mesh;this.m8=c8.node.mesh;this.m9=c9.node.mesh;');
 assert.equal(late.run('coastalSpaceEnabled()'),false,'late catch disables the existing switch');
 assert.equal(late.run('coastShoulderMeshes.size'),0);
 for(const [k,mesh] of [[7,late.m7],[8,late.m8],[9,late.m9]])assert.equal(hash(bytes(mesh)),digests(reference,[k])[0],'late failure restores chunk '+k);
 assert.equal(hash(bytes(late.run('chunkMesh(10).node.mesh'))),digests(reference,[10])[0],'post-failure chunks use the original colors');
});
