import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {execFileSync} from 'node:child_process';
import {parseCaptureCli,captureSourceEvidence} from './capture-cli.mjs';
const sha='6a409a7d4b189d0d59b9be7e02b2935965ed1e23';
const base=['http://127.0.0.1:4173/road','out','coast-chase'];
test('current scene query and arbitrary full source SHA are preserved',()=>{
 const r=parseCaptureCli([...base,'--commit',sha,'--query','scene=coast-afternoon-v1','--repeat']);
 assert.equal(r.expectedCommit,sha);assert.equal(r.url.pathname,'/road');assert.equal(r.url.searchParams.get('scene'),'coast-afternoon-v1');assert.equal(r.options.shot,'coast-chase');assert(r.repeat);
});
test('base URL queries work without extra query flags and old CLI stays valid',()=>{
 const r=parseCaptureCli(['http://localhost:4173/road?scene=coast-afternoon-v1','out','academy-depth','--software']);
 assert.equal(r.url.searchParams.get('scene'),'coast-afternoon-v1');assert.equal(r.options.shot,'academy-depth');assert.equal(r.expectedCommit,null);
});
test('missing, invalid, duplicate and capture-overriding input fails before launch',()=>{
 for(const args of [[],[...base,'--commit'],[...base,'--commit','oldsha'],[...base,'--query',''],[...base,'--query','shot=academy-depth'],[...base,'--query','scene=x&scene=y'],[...base,'--unknown']])assert.throws(()=>parseCaptureCli(args));
 assert.throws(()=>parseCaptureCli(['https://example.com/','out']));
 assert.throws(()=>parseCaptureCli([...base,'--commit',sha,'--commit',sha]));
});
test('base duplicate and conflicting shot queries cannot silently disable a candidate',()=>{
 for(const query of ['scene=coast-afternoon-v1&scene=off','shot=coast-chase&shot=coast-chase','shot=academy-depth'])assert.throws(()=>parseCaptureCli(['http://localhost:4173/road?'+query,'out','coast-chase']));
});
test('source receipt resolves explicit game root and rejects mismatched HEAD',()=>{
 const root=mkdtempSync(join(tmpdir(),'capture-cli-test-'));
 const git=(...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim();
 try{
  git('init','-q');writeFileSync(join(root,'scene.txt'),'fixture');git('add','scene.txt');
  git('-c','user.name=Test','-c','user.email=test@users.noreply.github.com','commit','-qm','fixture');
  const actual=git('rev-parse','HEAD');const r=captureSourceEvidence(root,actual);
  assert.equal(r.commit,actual);assert.equal(r.tree,git('rev-parse','HEAD^{tree}'));assert.equal(r.dirty,false);
  assert.throws(()=>captureSourceEvidence(root,sha),/differs/);
  writeFileSync(join(root,'scene.txt'),'changed');assert.equal(captureSourceEvidence(root,actual).dirty,true);
 }finally{rmSync(root,{recursive:true,force:true});}
});
