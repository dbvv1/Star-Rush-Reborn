import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,cpSync,readFileSync,writeFileSync,rmSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {mapConsumers} from './consumer.mjs';
import {SOURCE_HASHES} from '../../tests/scene-authoring.mjs';

test('actual full-course consumers match original meshes and repeat deterministically',()=>{
  const a=mapConsumers(),b=mapConsumers();
  assert.deepEqual(a,b);
  assert.deepEqual(a.tracks.map(t=>[t.id,t.boards.length,t.boards.filter(b=>b.key==='left').length,t.boards[0].s]),[
    ['coast-reborn',19,12,405],['sakura-reborn',11,8,525],['academy-reborn',12,12,245]
  ]);
  const ids=a.tracks.flatMap(t=>t.boards.map(b=>b.id));assert.equal(new Set(ids).size,42);
  for(const track of a.tracks)for(const board of track.boards){
    assert.equal(board.scale,1);assert.equal(board.l,board.key==='left'?9.4:-9.4);
    assert.equal(board.rot,board.key==='left'?Math.PI/2:-Math.PI/2);
    assert.equal(board.world.length,16);assert.equal(board.world[15],1);
  }
});
test('consumer source drift is rejected before scene execution',t=>{
  const root=mkdtempSync(join(tmpdir(),'signboard-consumer-'));
  t.after(()=>rmSync(root,{recursive:true,force:true}));
  for(const file of Object.keys(SOURCE_HASHES))cpSync(file,join(root,file));
  writeFileSync(join(root,'scenery.js'),readFileSync(join(root,'scenery.js'),'utf8')+'\nthrow Error("must not execute")');
  assert.throws(()=>mapConsumers(root),/Pinned source mismatch: scenery.js/);
});
