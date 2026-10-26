import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const legacy={...process.env,STAR_RUSH_DRIVING_MODEL:'legacy',STAR_RUSH_COAST_FLOW:'baseline'};
const run=(file,env)=>execFileSync(process.execPath,[file],{env,stdio:'inherit'});
run('build.mjs',legacy);
const files=['dist/index.html','dist/client/game.js','dist/server/index.js','worker/index.js'];
const original=files.map(f=>readFileSync(f));
try{run('tests/road-client.mjs',{...legacy,STAR_RUSH_DRIVING_MODEL:'road'});}
finally{run('build.mjs',legacy);}
files.forEach((f,i)=>assert.deepEqual(readFileSync(f),original[i],f+' exact legacy restoration'));
