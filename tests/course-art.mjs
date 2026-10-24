import assert from 'node:assert/strict';
import {readFileSync,mkdtempSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import test from 'node:test';
import {Window} from 'happy-dom';
import {initCourseArt} from '../course-art.js';
import {loadCourseArtwork} from '../build.mjs';

const shell=readFileSync('game-shell.html','utf8');
function fixture(){
 // No network/image decoding in this unit fixture: explicit load/error events
 // test the UI lifecycle only. Browser decoding is a separate acceptance gate.
 const window=new Window({url:'https://race.test/'});
 window.document.body.innerHTML=shell.match(/<div id="trackPicker"[\s\S]*?<\/div>/)[0];
 const buttons=[...window.document.querySelectorAll('[data-track]')];
 buttons[0].querySelector('svg').innerHTML='<path d="M1 2L3 4Z"/>';
 return {window,buttons};
}
test('decorative loading is non-blocking, idempotent, and preserves real card content',async()=>{
 const {window,buttons}=fixture(),button=buttons[0],original=button.innerHTML;
 let clicks=0;button.onclick=()=>clicks++;
 const assets={'coast-reborn':'/assets/course-art/coast-v1.test.webp'};
 initCourseArt(window.document,assets);initCourseArt(window.document,assets);
 assert.equal(button.querySelectorAll('img').length,1);
 const image=button.querySelector('img');assert(image.hidden);assert.equal(image.alt,'');assert.equal(image.getAttribute('aria-hidden'),'true');
 button.click();assert.equal(clicks,1,'selection must work before artwork finishes');
 image.dispatchEvent(new window.Event('load'));
 assert.equal(image.hidden,false);assert.equal(button.dataset.art,'ready');
 assert.equal(button.querySelector('svg path').getAttribute('d'),'M1 2L3 4Z');assert(button.classList.contains('selected'));
 image.remove();assert.equal(button.innerHTML,original,'only a decorative image may be added');
 assert.equal(buttons[1].querySelector('img'),null,'unmapped cards retain the original display');
 await window.happyDOM.close();
});
test('image error leaves the original usable card and empty/missing mappings do nothing',async()=>{
 const {window,buttons}=fixture(),button=buttons[0],original=button.innerHTML;
 initCourseArt(window.document,{});assert.equal(button.innerHTML,original);
 initCourseArt(window.document,{'coast-reborn':'/missing.webp'});
 button.querySelector('img').dispatchEvent(new window.Event('error'));
 assert.equal(button.innerHTML,original);assert.equal(button.dataset.art,undefined);
 assert.equal(buttons.length,3);assert.equal(button.querySelectorAll('svg').length,1);
 await window.happyDOM.close();
});
test('build accepts only the named small WebP artwork and fails on missing/invalid input',()=>{
 const directory=mkdtempSync(join(tmpdir(),'course-art-test-'));
 const manifest=value=>writeFileSync(join(directory,'manifest.json'),JSON.stringify(value));
 try{
  assert.throws(()=>loadCourseArtwork(directory),/ENOENT/);
  manifest({});assert.deepEqual(loadCourseArtwork(directory),{client:{},assets:{}});
  manifest({'coast-reborn':{file:'coast-v1.webp'}});assert.throws(()=>loadCourseArtwork(directory),/ENOENT/);
  writeFileSync(join(directory,'coast-v1.webp'),'not an image');assert.throws(()=>loadCourseArtwork(directory),/Invalid or oversized/);
  const headerOnly=Buffer.alloc(12);headerOnly.write('RIFF');headerOnly.writeUInt32LE(4,4);headerOnly.write('WEBP',8);
  writeFileSync(join(directory,'coast-v1.webp'),headerOnly);assert.throws(()=>loadCourseArtwork(directory),/Invalid or oversized/,'format markers without image data must be rejected');
  const valid=readFileSync('assets/course-art/coast-v1.webp');
  writeFileSync(join(directory,'coast-v1.webp'),valid.subarray(0,valid.length-1));assert.throws(()=>loadCourseArtwork(directory),/Invalid or oversized/,'truncated image must be rejected');
  writeFileSync(join(directory,'coast-v1.webp'),valid);assert.equal(Object.keys(loadCourseArtwork(directory).assets).length,1);
  manifest({'coast-reborn':{file:'../coast-v1.webp'}});assert.throws(()=>loadCourseArtwork(directory),/Invalid course/);
  manifest({'unknown':{file:'coast-v1.webp'}});assert.throws(()=>loadCourseArtwork(directory),/Invalid course/);
  manifest([]);assert.throws(()=>loadCourseArtwork(directory),/Invalid course/);
  manifest({'coast-reborn':{file:'coast-v1.webp'}});
  const large=Buffer.alloc(180001);large.write('RIFF');large.write('WEBP',8);writeFileSync(join(directory,'coast-v1.webp'),large);
  assert.throws(()=>loadCourseArtwork(directory),/Invalid or oversized/);
 }finally{rmSync(directory,{recursive:true,force:true});}
});
test('the built Worker serves byte-identical artwork with type/cache headers and safe methods',async()=>{
 const {default:worker}=await import('../dist/server/index.js');
 const {client}=loadCourseArtwork();
 assert.equal(Object.keys(client).length,3);
 for(const path of Object.values(client)){
  assert.match(path,/^\/assets\/course-art\/(coast|sakura|academy)-v\d+\.[a-f0-9]{12}\.webp$/);
  const response=await worker.fetch(new Request('https://race.test'+path),{});
  assert.equal(response.status,200);assert.equal(response.headers.get('content-type'),'image/webp');assert.match(response.headers.get('cache-control'),/immutable/);
  const actual=Buffer.from(await response.arrayBuffer()),expected=readFileSync('dist/client'+path);assert.deepEqual(actual,expected);
  assert.equal(response.headers.get('content-length'),String(actual.length));
  const head=await worker.fetch(new Request('https://race.test'+path,{method:'HEAD'}),{});assert.equal(head.status,200);assert.equal((await head.arrayBuffer()).byteLength,0);
  assert.equal((await worker.fetch(new Request('https://race.test'+path,{method:'POST'}),{})).status,405);
 }
 assert.equal((await worker.fetch(new Request('https://race.test/assets/course-art/missing.webp'),{})).status,404);
 assert.equal((await worker.fetch(new Request('https://race.test/assets/course-art/manifest.json'),{})).status,404);
});
test('selected source/derivative and previous revision hashes preserve the recorded edit lineage',()=>{
 const manifest=JSON.parse(readFileSync('assets/course-art/manifest.json','utf8'));
 const check=entry=>{
  for(const [file,hash] of [[entry.source,entry.sourceSha256],[entry.file,entry.derivedSha256]]){
   assert.match(file,/^(coast|sakura|academy)-v\d+\.(png|webp)$/);
   assert.equal(createHash('sha256').update(readFileSync('assets/course-art/'+file)).digest('hex'),hash,file+' provenance hash');
  }
  if(entry.revises)check(entry.revises);
 };
 for(const entry of Object.values(manifest))check(entry);
 assert.equal(manifest['coast-reborn'].editReference,'coast-v1.png');
 assert.equal(manifest['coast-reborn'].revises.source,'coast-v1.png');
 assert.equal(manifest['sakura-reborn'].styleReference,'coast-v1.png');
 assert.equal(manifest['academy-reborn'].styleReference,'coast-v1.png');
});
