import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import worker from '../dist/server/index.js';
import {startSmokeServer} from './smoke-server.mjs';
import {cleanupSmoke} from './smoke-cleanup.mjs';

test('smoke service serves production assets/API on ephemeral loopback and closes',async()=>{
  const resources=await startSmokeServer(worker);
  assert.equal(resources.server.address().address,'127.0.0.1');
  try {
    const page=await fetch(resources.origin);assert.equal(page.status,200);assert.match(await page.text(),/Star Rush/);
    const script=await fetch(resources.origin+'/game.js');assert.equal(script.status,200);assert.match(script.headers.get('content-type'),/javascript/);
    const board=await fetch(resources.origin+'/api/leaderboard?mode=circuit&track=coast-reborn');assert.equal(board.status,200);assert.deepEqual((await board.json()).runs,[]);
  } finally {assert.deepEqual(await cleanupSmoke(resources),[]);}
  assert.equal(resources.server.listening,false);
  await assert.rejects(fetch(resources.origin));
});
test('bad migration fails before a running service is returned',async()=>{
  const path=await mkdtemp(join(tmpdir(),'star-smoke-migrations-'));
  try {await writeFile(join(path,'001.sql'),'NOT VALID SQL;');await assert.rejects(startSmokeServer(worker,path));}
  finally {await rm(path,{recursive:true,force:true});}
});
test('request exceptions produce HTTP 500 and resources still close',async()=>{
  const resources=await startSmokeServer({fetch(){throw Error('synthetic handler failure');}});
  try {const response=await fetch(resources.origin);assert.equal(response.status,500);assert.match(await response.text(),/synthetic handler failure/);}
  finally {assert.deepEqual(await cleanupSmoke(resources),[]);}
});
