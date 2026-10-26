// Offline map of actual production signboard consumers; no scene edits or GPU claims.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {validateSources,SOURCE_HASHES} from '../../tests/scene-authoring.mjs';

export function mapConsumers(root=process.cwd()) {
  validateSources(root);
  const read=f=>readFileSync(join(root,f),'utf8');
  let source='';
  for(const file of ['engine.js','racer.js','circuit.js','scenery.js','race.js']) {
    let code=read(file);
    if(file==='race.js')code=code.slice(0,code.indexOf('function stream()'));
    if(file==='scenery.js') {
      const needle='root.add(n);return n';
      assert.equal(code.split(needle).length,2);
      code=code.replace(needle,"if(key==='left'||key==='right')n.author={key,k,s,l,scale,rot};"+needle);
    }
    source+=code+'\n';
  }
  source+=read('handling.js').split('\n').find(line=>line.startsWith('const wrapAngle')||line.startsWith('function wrapAngle'))+'\n';
  source+=`const tracks=[];for(const id of Object.keys(TRACKS)){
    activeTrackId=id;rebuildCircuit();routeSeed=id==='coast-reborn'?73121:95276;
    const boards=[];
    for(let k=0;k<Math.ceil(CIRCUIT_LENGTH/40);k++){
      const chunk=chunkMesh(k);
      function walk(n,parent){const world=mm(parent,n.local);
        if(n.author){const c=new Collector();signBoard(c,n.author.key);
          const expected=new Float32Array(c.data);
          if(expected.length!==n.mesh.sourceData.length||expected.some((v,i)=>v!==n.mesh.sourceData[i])||c.indices.length!==n.mesh.sourceIndices.length||c.indices.some((v,i)=>v!==n.mesh.sourceIndices[i]))throw Error('consumer mesh differs from original signBoard');
          boards.push({...n.author,id:id+'/chunk/'+k+'/'+n.author.key,world:Array.from(world),vertices:expected.length/10,triangles:c.indices.length/3});
        }
        for(const child of n.children)walk(child,world);
      }
      walk(chunk.node,translation(...chunk.origin));
    }
    tracks.push({id,seed:routeSeed,length:CIRCUIT_LENGTH,boards});
  }result=tracks;`;
  const scope={document:{getElementById:()=>({})},localStorage:{getItem:()=>null},performance:{now:()=>0},console,result:null};
  vm.runInNewContext(source,scope,{timeout:60000});
  const tracks=JSON.parse(JSON.stringify(scope.result));
  for(const track of tracks) {
    assert.ok(track.boards.length>0);
    for(const b of track.boards){assert.ok(b.world.every(Number.isFinite));assert.ok(b.s>=0&&b.s<track.length);assert.equal(b.vertices,482);assert.equal(b.triangles,524)}
  }
  return {sourceHashes:SOURCE_HASHES,scope:'Actual pinned chunkMesh/decorateChunk/scenicProp consumers, with metadata only. Original geometry, fixed production circuit seeds. No candidate injection, camera capture, renderer or visibility acceptance.',tracks};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href) {
  const report=mapConsumers();
  mkdirSync('outputs/signboard-author',{recursive:true});
  writeFileSync('outputs/signboard-author/consumers.json',JSON.stringify(report,null,2)+'\n');
  console.log(report.tracks.map(t=>({track:t.id,boards:t.boards.length,first:t.boards[0].id,s:t.boards[0].s})));
}
