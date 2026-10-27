import {execFileSync,spawnSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const defaults={...process.env,STAR_RUSH_COAST_FLOW:'baseline'};delete defaults.STAR_RUSH_DRIVING_MODEL;
const run=(file,env=defaults)=>execFileSync(process.execPath,[file],{env,stdio:'inherit'});
run('build.mjs');
const files=['dist/index.html','dist/client/game.js','dist/client/road/index.html','dist/client/road/game.js','dist/client/legacy/index.html','dist/client/legacy/game.js','dist/server/index.js','worker/index.js'];
const original=files.map(f=>readFileSync(f));
assert.deepEqual(readFileSync(files[1]),readFileSync(files[3]),'no-option build defaults to road');
try{
 run('build.mjs',{...defaults,STAR_RUSH_DRIVING_MODEL:'legacy'});
 assert.deepEqual(readFileSync(files[1]),readFileSync(files[5]),'explicit legacy root override');
 assert.notDeepEqual(readFileSync(files[1]),readFileSync(files[3]));
 run('tests/road-client.mjs');
 for(const profile of ['', 'unknown']){
  const bad=spawnSync(process.execPath,['build.mjs'],{env:{...defaults,STAR_RUSH_DRIVING_MODEL:profile},encoding:'utf8'});
  assert.notEqual(bad.status,0);assert.match(bad.stderr,/Unknown driving model/);
 }
 const mixed=spawnSync(process.execPath,['build.mjs'],{env:{...defaults,STAR_RUSH_COAST_FLOW:'candidate'},encoding:'utf8'});
 assert.notEqual(mixed.status,0);assert.match(mixed.stderr,/must not be mixed/);
}finally{run('build.mjs');}
files.forEach((f,i)=>assert.deepEqual(readFileSync(f),original[i],f+' exact default-road restoration'));
