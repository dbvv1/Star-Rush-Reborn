import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,mkdtempSync,cpSync,writeFileSync,rmSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import vm from 'node:vm';
import * as THREE from 'three';
import {createSkyPanorama} from '../sky-panorama.js';
import {loadSkyAssets} from '../sky-assets.mjs';

const config=loadSkyAssets().client;
function fixture(){
 const scene=new THREE.Scene(),texture=new THREE.Texture();let loaded,failed,disposed=0;
 texture.addEventListener('dispose',()=>disposed++);
 const loader={load(url,onLoad,progress,onError){assert.equal(url,config.url);loaded=onLoad;failed=onError;return texture;}};
 const sky=createSkyPanorama(scene,config,loader);
 return {scene,sky,texture,load(width=2048,height=1024){texture.image={width,height};loaded(texture);},fail(){failed(Error('test failure'));},disposed:()=>disposed};
}
test('panorama is display-only, hidden until decoded, native sRGB, and follows position but not camera rotation',()=>{
 const f=fixture();assert.equal(f.sky.active,false);assert.equal(f.sky.mesh.visible,false);
 f.load();assert.equal(f.sky.active,true);assert.equal(f.texture.colorSpace,THREE.SRGBColorSpace);assert.equal(f.texture.generateMipmaps,false);assert.equal(f.texture.minFilter,THREE.LinearFilter);
 assert.equal(f.sky.mesh.material.toneMapped,false);assert.equal(f.sky.mesh.material.fog,false);assert.equal(f.sky.mesh.material.depthWrite,false);assert.equal(f.sky.mesh.material.side,THREE.BackSide);
 assert.equal(f.scene.environment,null);assert.equal(f.scene.background,null);assert.equal(f.scene.children.filter(n=>n.isLight).length,0);
 const camera=new THREE.PerspectiveCamera();camera.position.set(21,4,-56);camera.rotation.set(.2,1,.4);f.sky.update(camera);
 assert.deepEqual(f.sky.mesh.position.toArray(),camera.position.toArray());assert.equal(f.sky.mesh.rotation.y,config.yaw);assert.equal(f.sky.mesh.rotation.x,0);assert.equal(f.sky.mesh.rotation.z,0);
 f.sky.dispose();f.sky.dispose();assert.equal(f.disposed(),1);assert.equal(f.scene.children.length,0);assert.equal(f.texture.image,null);
});
test('missing configuration performs no image load; invalid config fails before allocations',()=>{
 const scene=new THREE.Scene(),loader={load(){throw Error('no load expected');}};
 assert.equal(createSkyPanorama(scene,null,loader),null);
 assert.throws(()=>createSkyPanorama(scene,{...config,width:4096},loader),/Invalid sky/);assert.equal(scene.children.length,0);
});
test('decode failure and wrong dimensions retain inactive fallback and release the texture once',()=>{
 for(const failure of [f=>f.fail(),f=>f.load(1,1)]){
  const f=fixture();failure(f);assert.equal(f.sky.active,false);assert.equal(f.sky.mesh.visible,false);f.sky.dispose();assert.equal(f.disposed(),1);
 }
});
test('late successful or failed loading cannot revive a disposed sky',()=>{
 for(const late of [f=>f.load(),f=>f.fail()]){
  const f=fixture();f.sky.dispose();late(f);assert.equal(f.sky.active,false);assert.equal(f.sky.mesh.visible,false);assert.equal(f.scene.children.length,0);assert.equal(f.disposed(),1);assert.equal(f.texture.image,null);
 }
});
test('CC0 source and derivative fingerprints reproduce; missing or changed input stops the build',()=>{
 const before=readFileSync('assets/sky/day.webp');execFileSync('python3',['assets/sky/prepare.py']);assert.deepEqual(readFileSync('assets/sky/day.webp'),before);
 const directory=mkdtempSync(join(tmpdir(),'star-sky-'));
 try{
  assert.throws(()=>loadSkyAssets(directory),/ENOENT/);
  cpSync('assets/sky',directory,{recursive:true});assert.deepEqual(loadSkyAssets(directory),loadSkyAssets());
  writeFileSync(join(directory,'day.webp'),Buffer.from('invalid'));assert.throws(()=>loadSkyAssets(directory),/fingerprint/);
  cpSync('assets/sky/day.webp',join(directory,'day.webp'));writeFileSync(join(directory,'source/kenney-day.png'),'changed');assert.throws(()=>loadSkyAssets(directory),/fingerprint/);
  assert.throws(()=>execFileSync('python3',[join(directory,'prepare.py')],{stdio:'pipe'}),/Sky source identity/);
 }finally{rmSync(directory,{recursive:true,force:true});}
});
test('ready road sky removes only original cloud suffix, preserving every terrain face; legacy keeps clouds',()=>{
 const read=p=>readFileSync(p,'utf8'),engine=read('engine.js'),circuit=read('circuit.js'),data=read('assets/landscape/coastal-rocks.js'),scene=read('scenery.js');
 const quad=read('race.js').split('\n').find(line=>line.startsWith('function quad('));
 const evaluate=(road,id,ready)=>JSON.parse(vm.runInNewContext(`const roadDriving=${road};const threeBackend={skyReady:${ready}};${engine}\n${quad}\n${circuit}\n${data}\n${scene}\nactiveTrackId=${JSON.stringify(id)};rebuildCircuit();buildLandscape();JSON.stringify({data:Array.from(landscapeNode.mesh.sourceData),indices:Array.from(landscapeNode.mesh.sourceIndices)})`,{}, {timeout:10000}));
 for(const id of ['coast-reborn','sakura-reborn','academy-reborn']){
  const old=evaluate(true,id,false),sky=evaluate(true,id,true);
  assert(sky.indices.length<old.indices.length);assert.deepEqual(sky.data,old.data.slice(0,sky.data.length));assert.deepEqual(sky.indices,old.indices.slice(0,sky.indices.length));
  assert.deepEqual(evaluate(false,id,false),evaluate(false,id,true));
 }
});
test('one sky load changes landscape only once and releases its replaced mesh once',()=>{
 const source=readFileSync('scenery.js','utf8');
 assert.equal((source.match(/landscapeNode\.mesh\.dispose\(\)/g)||[]).length,1);
 assert.match(source,/landscapeSkyReady!==hasPanoramaSky\(\)/);
 assert.match(readFileSync('render-three.js','utf8'),/if\(!event.persisted\)releaseSky\(\)/);
});
test('built immutable route serves exact sky bytes, but source and recipe are not public runtime assets',async()=>{
 const {default:worker}=await import('../dist/server/index.js');
 const response=await worker.fetch(new Request('https://race.test'+config.url),{});
 assert.equal(response.status,200);assert.equal(response.headers.get('content-type'),'image/webp');assert.match(response.headers.get('cache-control'),/immutable/);
 assert.deepEqual(Buffer.from(await response.arrayBuffer()),readFileSync('assets/sky/day.webp'));
 for(const url of ['/assets/sky/recipe.json','/assets/sky/source/kenney-day.png'])assert.equal((await worker.fetch(new Request('https://race.test'+url),{})).status,404);
});

test('capture readiness settles on decode, failure and disposal without changing normal fallback',async()=>{
 const loaded=fixture();loaded.load();assert.deepEqual(await loaded.sky.ready,{status:'ready'});loaded.sky.dispose();
 const failed=fixture();failed.fail();assert.deepEqual(await failed.sky.ready,{status:'failed'});failed.sky.dispose();
 const disposed=fixture();disposed.sky.dispose();assert.deepEqual(await disposed.sky.ready,{status:'disposed'});
});
