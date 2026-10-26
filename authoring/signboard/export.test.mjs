import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, readFileSync, writeFileSync, rmSync, existsSync, mkdirSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join, resolve} from 'node:path';
import {execFileSync} from 'node:child_process';
const script=resolve('authoring/signboard/export.mjs');
function fixture(run) {
  const root=mkdtempSync(join(tmpdir(),'star-signboard-'));
  try { mkdirSync(join(root,'assets/signboard'),{recursive:true});for(const name of ['engine.js','scenery.js','assets/signboard/styles.json']) writeFileSync(join(root,name),readFileSync(name)); run(root); }
  finally { rmSync(root,{recursive:true,force:true}); }
}
test('fixed original sources reproduce candidates deterministically',()=>fixture(root=>{
  execFileSync(process.execPath,[script],{cwd:root});
  const path=join(root,'outputs/signboard-author/source.json'),first=readFileSync(path,'utf8');
  execFileSync(process.execPath,[script],{cwd:root});
  assert.equal(readFileSync(path,'utf8'),first);
  const result=JSON.parse(first);assert.equal(result.meshes.length,6);
  assert.ok(result.meshes.every(m=>m.data.length/10===482&&m.indices.length/3===524));
}));
for(const name of ['engine.js','scenery.js']) test(`source drift in ${name} fails before producing output`,()=>fixture(root=>{
  const path=join(root,name);let text=readFileSync(path,'utf8');
  text=name==='engine.js'?text+'\n// changed source\n':text.replace("const side=kind==='left'?-1:1;", "const side=kind==='left'?-1:2;");
  writeFileSync(path,text);
  assert.throws(()=>execFileSync(process.execPath,[script],{cwd:root,stdio:'pipe'}));
  assert.equal(existsSync(join(root,'outputs')),false);
}));
