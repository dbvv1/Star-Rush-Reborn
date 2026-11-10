import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {proveSceneryBounds,sceneryContext,sceneryVertices} from './scenery-bounds.mjs';
test('pinned full loop conservative bounds cover endpoints and interior random pairs',()=>{
 const proof=proveSceneryBounds(),{context}=sceneryContext();assert.equal(proof.chunkCount,47);assert.equal(proof.bounds.length,425);
 for(const [p,s] of [[0,0],[0,1],[1,0],[1,1],[.13,.71],[.93,.23],[.5,.5]]){
  const chunks=sceneryVertices(context,p,s);
  for(let k=0;k<chunks.length;k++)for(let j=0;j<chunks[k].length;j++){
   const b=proof.bounds.find(x=>x.id===`${k}/${j}`);assert(b);
   for(const v of chunks[k][j])assert(v[0]>=b.minX&&v[0]<=b.maxX&&v[2]>=b.minZ&&v[2]<=b.maxZ);
  }
 }
});
test('changed sources fail closed and invalid random values cannot certify',()=>{
 for(const file of ['scenery.js','engine.js','circuit.js','race.js'])assert.throws(()=>proveSceneryBounds(p=>fs.readFileSync(p,'utf8').replace(p===file?(file==='race.js'?'function quad(':'//'):'NO_MATCH',file==='race.js'?'function quad( /*changed*/':'//changed')),/Unproven/);
 const {context}=sceneryContext();for(const v of [-1,1.01,NaN,Infinity])assert.throws(()=>sceneryVertices(context,v,.5),/range/);
});
