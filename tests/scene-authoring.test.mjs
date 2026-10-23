import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync,writeFileSync,cpSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {spawnSync} from 'node:child_process';
import {validateSources,SOURCE_HASHES} from './scene-authoring.mjs';
const root=process.cwd(),out=mkdtempSync(join(tmpdir(),'scene-authoring-'));
const read=f=>JSON.parse(readFileSync(join(out,f),'utf8'));
let baseline;
function extract(mode){
 const result=spawnSync(process.execPath,['--max-old-space-size=400','tests/scene-authoring.mjs',mode,out],{cwd:root,encoding:'utf8',timeout:60000,maxBuffer:1024*1024});
 assert.equal(result.status,0,result.stdout+result.stderr);
 return read(mode+'-report.json');
}
test('fixed inputs and missing/modified source fail before execution',()=>{
 validateSources(root);
 const fixture=join(out,'source');cpSync(root+'/engine.js',fixture+'/engine.js',{recursive:true});
 assert.throws(()=>validateSources(fixture));
 for(const f of Object.keys(SOURCE_HASHES))cpSync(join(root,f),join(fixture,f));
 writeFileSync(join(fixture,'handling.js'),readFileSync(join(fixture,'handling.js'),'utf8')+'\n// mutation\n');
 assert.throws(()=>validateSources(fixture),/Pinned source mismatch: handling.js/);
 const unknown=spawnSync(process.execPath,['tests/scene-authoring.mjs','unknown',out],{cwd:root,encoding:'utf8'});assert.equal(unknown.status,1);assert.match(unknown.stderr,/Unknown authoring mode/);
});
test('untagged vs identity annotation preserve original geometry/camera; repeat deterministic',()=>{
 const a=extract('raw',out),b=extract('baseline',out),c=extract('baseline',out);
 assert.equal(a.geometryHash,b.geometryHash);assert.deepEqual(b,c);
 assert.equal(b.objects,60);assert.equal(b.taggedObjects,54);baseline=read('baseline.json');
});
test('single source placement scale candidate preserves all other objects, mesh and cameras',()=>{
 extract('candidate',out);const candidate=read('candidate.json');
 assert.deepEqual(baseline.meshes,candidate.meshes);assert.deepEqual(baseline.cameras,candidate.cameras);
 const changed=baseline.objects.filter((o,i)=>JSON.stringify(o)!==JSON.stringify(candidate.objects[i]));
 assert.equal(changed.length,1);assert.equal(changed[0].id,'coast/chunk/2/cherry0/90/-12.5');
 const n=candidate.objects.find(o=>o.id===changed[0].id);assert.equal(n.author.scale,.65);
 assert.deepEqual(changed[0].m.slice(12),n.m.slice(12));
});
function blender(args,env={}){
 const result=spawnSync('blender',args,{cwd:root,encoding:'utf8',timeout:90000,maxBuffer:4*1024*1024,env:{...process.env,...env}});
 if(result.error)throw result.error;
 return result;
}
const script=resolve('tests/scene-authoring.py');
const cmd=(blend,action)=>['--background',...(blend?[blend]:['--factory-startup']),'--threads','2','--python-exit-code','1','--python',script,'--',action,'--output',out];
if(process.argv.includes('--blender')){
 test('Blender actual create/save/reopen roundtrip',()=>{
  let r=blender(cmd(null,'create'));assert.equal(r.status,0,r.stdout+r.stderr);
  r=blender(cmd(join(out,'baseline.blend'),'verify'));assert.equal(r.status,0,r.stdout+r.stderr);assert.equal(read('roundtrip-report.json').passed,true);
 });
 test('Blender rejects missing source and changed transform',()=>{
  let r=blender(cmd(join(out,'baseline.blend'),'verify'),{P128_VERIFY_INPUT:join(out,'missing.json')});assert.equal(r.status,1);
  const bad=structuredClone(baseline);bad.objects[0].m[12]+=1;writeFileSync(join(out,'bad-transform.json'),JSON.stringify(bad));
  r=blender(cmd(join(out,'baseline.blend'),'verify'),{P128_VERIFY_INPUT:join(out,'bad-transform.json')});assert.equal(r.status,1);
 });
 test('Blender rejects object mesh rebinding with unchanged metadata',()=>{
  const corrupt=join(out,'wrong-binding.blend');
  const expression=`import bpy; o=next(o for o in bpy.data.objects if 'source_id' in o); o.data=next(m for m in bpy.data.meshes if m.name.startswith('source_mesh_') and m is not o.data); bpy.ops.wm.save_as_mainfile(filepath=${JSON.stringify(corrupt)})`;
  let r=blender(['--background',join(out,'baseline.blend'),'--threads','2','--python-exit-code','1','--python-expr',expression]);assert.equal(r.status,0,r.stdout+r.stderr);
  r=blender(cmd(corrupt,'verify'));assert.equal(r.status,1);
 });
 test('Blender rejects duplicated source identity',()=>{
  const corrupt=join(out,'duplicate-id.blend');
  const expression=`import bpy; o=next(o for o in bpy.data.objects if 'source_id' in o); duplicate=o.copy(); bpy.context.collection.objects.link(duplicate); bpy.ops.wm.save_as_mainfile(filepath=${JSON.stringify(corrupt)})`;
  let r=blender(['--background',join(out,'baseline.blend'),'--threads','2','--python-exit-code','1','--python-expr',expression]);assert.equal(r.status,0,r.stdout+r.stderr);
  r=blender(cmd(corrupt,'verify'));assert.equal(r.status,1);
 });
 test('Blender single-tree revision maps back to original placement code and retains other objects',()=>{
  const r=blender(cmd(join(out,'baseline.blend'),'revise'));assert.equal(r.status,0,r.stdout+r.stderr);
  const report=read('revision-report.json'),candidate=read('candidate.json'),o=candidate.objects.find(o=>o.id===report.baselineId);
  assert(report.afterMatrix.every((n,i)=>Math.abs(n-o.m[i])<1e-6));assert.equal(report.unchangedObjectCount,59);
  assert.equal(report.unchangedObjectHashBefore,report.unchangedObjectHashAfter);assert.equal(report.allMeshHashBefore,report.allMeshHashAfter);
 });
}
// Tests leave no private or large artifacts in the repository. Use CLI commands to retain author views.
test.after(()=>rmSync(out,{recursive:true,force:true}));
