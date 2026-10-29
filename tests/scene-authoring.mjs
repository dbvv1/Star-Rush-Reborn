// Fixed-source CPU authoring probe, not a renderer replacement or runtime asset pipeline.
import {readFileSync,writeFileSync as write,mkdirSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const hash=x=>createHash('sha256').update(x).digest('hex');
export const SOURCE='07e18395bff8a172f7d552ccae0f6cefe7458fce';
// Original scene baseline; circuit's display-only formatter was amended later.
// Exact hashes remain authoritative; quad winding amended as noted, vertex positions/camera unchanged.
export const SOURCE_AMENDMENTS={'scenery.js':'distant snow joins share an uncapped ring; road coast alone uses CC0 low headlands; training road adds separate low verge plants; optional road panorama hides only the original cloud suffix after successful decode; original legacy chunk props and placement unchanged; guarded coast-space-v1 terrain/prop hooks are inactive in this legacy authoring probe','circuit.js':'formatTime centisecond carry and road-only academy teaching text; no geometry or simulation changes','race.js':'road profile moves runner obstacles outside rails, removes pickups and changes runtime HUD; legacy scene preserved; road-only record storage isolated; default-road result wording; quad indices now agree with existing upward normals, positions unchanged; completion saves now expose per-key receipts and bounded retry; opt-in capture injects a clock, seeded random, isolated storage and render scheduling, no geometry or normal camera change','handling.js':'opt-in road vehicle control; legacy branch and author geometry preserved','racer.js':'opt-in front wheel animation uses actual road steering; rest geometry preserved'};
export const SOURCE_HASHES={
  "engine.js": "baa90e01c1eee30ba88ee1316a7a390a168415826208f379b2b608c4b89d505a",
  "racer.js": "4e6008c7fcce64342078cd06051a931edc4153f23756bbb4498abdd9022d7d39",
  "circuit.js": "3ffe538eb89f13ca2373d001ce152658e52155db8a172ebe75d0e283f16e4147",
  "scenery.js": "d7272aa0ce98a5ba08beb24ca6aaf190031d2f23c319166be47fe57ba09fe0c5",
  "race.js": "0ad353ad9d0ae489f1e21e9088d00eeae365499a791da4e69f7f03057147eab9",
  "handling.js": "9426ed5f9e7fdc301e1a1ba315db3edfbd22ecddcfeb482fe47cf3e352854af9"
};
export function validateSources(root=process.cwd()){
  for(const [file,expected] of Object.entries(SOURCE_HASHES))
    assert.equal(hash(readFileSync(join(root,file))),expected,'Pinned source mismatch: '+file);
}
export function extract(mode='baseline',output='outputs/scene-authoring',root=process.cwd()){
assert(['raw','baseline','candidate'].includes(mode),'Unknown authoring mode');
validateSources(root); // Fail before executing any input or writing output.
const read=(f,encoding)=>readFileSync(join(root,f),encoding);
mkdirSync(output,{recursive:true});
const sourceFiles=['engine.js','racer.js','circuit.js','scenery.js','race.js'];
let src='const coastFlowCandidate=false,roadDriving=false;\n';
for(const f of sourceFiles){let code=read(f,'utf8');if(f==='race.js')code=code.slice(0,code.indexOf('function stream()'));
if(f==='scenery.js'&&mode==='candidate'){const needle='const place=(key,s,l,scale=1,rot=0)=>{';assert.equal(code.split(needle).length,2);code=code.replace(needle,needle+"if(k===2&&key==='cherry0'&&s===90&&l===-12.5)scale=.65;")}
if(f==='scenery.js'&&mode!=='raw'){const old='root.add(n);return n';assert.equal(code.split(old).length,2);code=code.replace(old,`n.author={id:'coast/chunk/'+k+'/'+key+'/'+s+'/'+l,key,k,s,l,scale,rot};root.add(n);return n`)}src+=code+'\n';}
src+=read('handling.js','utf8').split('\n').find(x=>x.startsWith('const wrapAngle')||x.startsWith('function wrapAngle'))+'\n';
const camerasource=read('race.js','utf8').split('function sceneFrame(t,dt){')[1].split('\nconst mini=')[0];
const camblock=camerasource.slice(camerasource.indexOf(' const menu='));
src+=`routeSeed=73121;const cameras=[];for(const s of [60,85,115]){const r=road(s),pos=atRoad(s,0,.06),origin=r.p,visualJump=0;state='running';player.vS=0;player.vL=0;player.velocityYaw=0;let cameraEye=null,cameraLook=null,cameraHeading=null;const dt=0,t=0;const view=(()=>{${camblock})();cameras.push({s,eye:add(view.eye,origin),target:add(view.target,origin),fov:60,aspect:16/9,mode:0,speed:0})}const meshes=[],meshMap=new Map(),objects=[];for(const k of [0,1,2,3,4,5]){const ch=chunkMesh(k);function walk(n,m,path){const mat=mm(m,n.local);if(n.mesh){if(!meshMap.has(n.mesh)){meshMap.set(n.mesh,meshes.length);meshes.push({data:Array.from(n.mesh.sourceData),indices:Array.from(n.mesh.sourceIndices)})}objects.push({id:n.author?.id||path,author:n.author||null,m:Array.from(mat),mesh:meshMap.get(n.mesh)})}n.children.forEach((c,i)=>walk(c,mat,path+'/'+i))}walk(ch.node,translation(...ch.origin),'coast/chunk/'+k)}result={meshes,objects,cameras,length:CIRCUIT_LENGTH};`;
const context={document:{getElementById:()=>({})},localStorage:{getItem:()=>null},gameClock:{now:()=>0,wallNow:()=>1700000000000},console,result:null};
vm.runInNewContext(src,context,{timeout:60000});
const d=context.result,geo=hash(JSON.stringify({meshes:d.meshes,objects:d.objects.map(o=>({mesh:o.mesh,m:o.m})),cameras:d.cameras}));
const report={source:SOURCE,sourceAmendments:SOURCE_AMENDMENTS,sourceHashes:SOURCE_HASHES,mode,objects:d.objects.length,meshes:d.meshes.length,taggedObjects:d.objects.filter(o=>o.author).length,geometryHash:geo,identityHash:hash(JSON.stringify(d.objects)),triangles:d.meshes.reduce((n,m)=>n+m.indices.length/3,0),cameraSourceHash:hash(camblock),scope:'Six original chunkMesh calls k=0..5, fixed original coast seed 73121; same localRand and entity generation consume random draws before decorateChunk. Production sceneFrame camera block at rest, not full client or gameplay.'};
assert.equal(new Set(d.objects.map(o=>o.id)).size,d.objects.length);
write(join(output,mode+'-report.json'),JSON.stringify(report,null,2));
if(mode!=='raw')write(join(output,(mode==='candidate'?'candidate':'baseline')+'.json'),JSON.stringify({report,...d}));
return report;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href)
  console.log(extract(process.argv[2]||'baseline',process.argv[3]||'outputs/scene-authoring'));
