// Real build and client acceptance for opt-in styles; restore default artifacts.
import assert from 'node:assert/strict';
import {execFileSync,spawnSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
const env={...process.env};delete env.STAR_RUSH_SIGNBOARD_VARIANT;
const run=(script,extra={})=>execFileSync(process.execPath,[script],{env:{...env,...extra},stdio:'inherit'});
const files=['dist/client/game.js','dist/server/index.js','worker/index.js'];
run('build.mjs');const baseline=files.map(p=>readFileSync(p));
try {
  for(const variant of ['navy-v1','navy-v2']) {
    run('tests/client.mjs',{STAR_RUSH_SIGNBOARD_VARIANT:variant});
    assert.notDeepEqual(readFileSync(files[0]),baseline[0]);
  }
  const bad=spawnSync(process.execPath,['build.mjs'],{env:{...env,STAR_RUSH_SIGNBOARD_VARIANT:'unknown'},encoding:'utf8'});
  assert.equal(bad.status,1);assert.match(bad.stderr,/Unknown signboard variant/);
} finally {run('build.mjs');}
for(let i=0;i<files.length;i++)assert.deepEqual(readFileSync(files[i]),baseline[i],'Default restoration: '+files[i]);
console.log('Signboard variants passed assembled client consumers; baseline artifacts restored (not GPU acceptance)');
