import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, readFile, writeFile, rm, access, mkdir} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {runSmoke} from './smoke-run.mjs';

async function fixture(t) {
  const dir=await mkdtemp(join(tmpdir(),'star-smoke-receipt-'));
  t.after(()=>rm(dir,{recursive:true,force:true}));
  const output=pathToFileURL(dir+'/');
  for(const name of ['race.png','canvas.png'])await writeFile(new URL(name,output),'old screenshot');
  await writeFile(new URL('report.json',output),JSON.stringify({passed:true,old:true}));
  return {output, read:async()=>JSON.parse(await readFile(new URL('report.json',output),'utf8'))};
}
test('build failure invalidates previous pass and screenshots before any browser import',async t=>{
  const {output,read}=await fixture(t); let imported=false;
  assert.equal(await runSmoke({output,build:async()=>{throw Error('injected build failure')},browser:async()=>{imported=true}}),1);
  assert.equal(imported,false); const report=await read();
  assert.equal(report.passed,false);assert.equal(report.phase,'build');assert.match(report.failure,/injected build failure/);
  for(const name of ['race.png','canvas.png'])await assert.rejects(access(new URL(name,output)),{code:'ENOENT'});
});
test('browser module import failure produces current failed receipt',async t=>{
  const {output,read}=await fixture(t);
  assert.equal(await runSmoke({output,build:async()=>{},browser:async()=>{throw Error('injected module failure')}}),1);
  assert.equal((await read()).phase,'browser');assert.equal((await read()).passed,false);
});
test('browser success receipt is preserved, absent acceptance cannot pass',async t=>{
  const {output,read}=await fixture(t);
  const result={passed:true,browserVersion:'test-only',pixels:{quantizedColors:101}};
  assert.equal(await runSmoke({output,build:async()=>{},browser:async()=>writeFile(new URL('report.json',output),JSON.stringify(result))}),0);
  assert.deepEqual(await read(),result);
  assert.equal(await runSmoke({output,build:async()=>{},browser:async()=>{}}),1);
  assert.equal((await read()).passed,false);
});
test('browser assertion failure receipt is preserved',async t=>{
  const {output,read}=await fixture(t);
  const result={passed:false,failure:'test assertion',cleanupErrors:[]};
  assert.equal(await runSmoke({output,build:async()=>{},browser:async()=>writeFile(new URL('report.json',output),JSON.stringify(result))}),1);
  assert.deepEqual(await read(),result);
});
test('real browser module preparation keeps a failed receipt before browser startup',async t=>{
  const {output,read}=await fixture(t);
  const source=await readFile(new URL('./smoke.mjs',import.meta.url),'utf8');
  // Execute the actual filesystem preparation, stopping before server/browser startup.
  const start=source.indexOf('await mkdir(output,');
  const end=source.indexOf('let browser, resources;');
  assert.ok(start>0 && end>start);
  const prepare=new Function('output','mkdir','rm','writeFile',`return (async()=>{${source.slice(start,end)}})()`);
  await prepare(output,mkdir,rm,writeFile);
  assert.equal((await read()).passed,false);
  assert.equal((await read()).old,undefined);
  for(const name of ['race.png','canvas.png'])await assert.rejects(access(new URL(name,output)),{code:'ENOENT'});
});
