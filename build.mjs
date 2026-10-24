import {readFileSync,writeFileSync,mkdirSync,cpSync,rmSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join} from 'node:path';
import {build} from 'esbuild';
const read=p=>readFileSync(p,'utf8');mkdirSync('dist/server',{recursive:true});mkdirSync('dist/client',{recursive:true});mkdirSync('dist/.openai',{recursive:true});
// Only the three decorative course cards use this narrow file route. Source
// PNGs/prompts stay in the repository; only selected WebPs enter the build.
export function loadCourseArtwork(directory='assets/course-art') {
 const manifest=JSON.parse(readFileSync(join(directory,'manifest.json'),'utf8'));
 if(!manifest||Array.isArray(manifest)||typeof manifest!=='object')throw Error('Invalid course artwork manifest');
 const client={},assets={};
 for(const [track,entry] of Object.entries(manifest)) {
  const file=entry?.file;
  if(!['coast-reborn','sakura-reborn','academy-reborn'].includes(track)||typeof file!=='string'||! /^(coast|sakura|academy)-v[1-9][0-9]*\.webp$/.test(file))throw Error('Invalid course artwork entry: '+track);
  const bytes=readFileSync(join(directory,file));
  // Our RGB/Pillow recipe emits one simple VP8 image chunk. Check the
  // container and required image block, not only four-byte format markers.
  const chunk=bytes.toString('ascii',12,16),size=bytes.length>=20?bytes.readUInt32LE(16):0;
  const imageHeader=chunk==='VP8 '&&size>=10&&bytes.toString('hex',23,26)==='9d012a';
  if(bytes.length<30||bytes.length>180000||bytes.toString('ascii',0,4)!=='RIFF'||bytes.toString('ascii',8,12)!=='WEBP'||bytes.readUInt32LE(4)+8!==bytes.length||size+20+(size%2)!==bytes.length||!imageHeader)throw Error('Invalid or oversized course artwork: '+file);
  const hash=createHash('sha256').update(bytes).digest('hex').slice(0,12),url='/assets/course-art/'+file.replace('.webp','.'+hash+'.webp');
  client[track]=url;assets[url]=bytes.toString('base64');
 }
 return {client,assets};
}
export function loadRailAudioAssets(directory='assets/rail-audio') {
 const manifest=JSON.parse(readFileSync(join(directory,'manifest.json'),'utf8'));
 if(!manifest||Array.isArray(manifest)||typeof manifest!=='object'||manifest.version!==1||!manifest.candidates||Array.isArray(manifest.candidates)||typeof manifest.candidates!=='object')throw Error('Invalid rail audio manifest');
 const patterns={'light-scrape':/^rail-light-v[1-9][0-9]*\.wav$/,'medium-hit':/^rail-hit-v[1-9][0-9]*\.wav$/};
 const names=Object.keys(manifest.candidates);
 if(names.length!==2||!Object.keys(patterns).every(name=>Object.hasOwn(manifest.candidates,name)))throw Error('Invalid rail audio candidates');
 const client={},assets={};
 for(const [kind,pattern] of Object.entries(patterns)){
  const entry=manifest.candidates[kind],file=entry?.file;
  if(!entry||typeof entry!=='object'||typeof file!=='string'||!pattern.test(file)||!entry.parameters||typeof entry.parameters!=='object')throw Error('Invalid rail audio entry: '+kind);
  const bytes=readFileSync(join(directory,file)),digest=createHash('sha256').update(bytes).digest('hex');
  if(entry.sha256!==digest||entry.bytes!==bytes.length)throw Error('Rail audio metadata mismatch: '+file);
  // Canonical mono 16-bit PCM WAV emitted by assets/rail-audio/generate.py.
  // Reject malformed/truncated containers and unexpectedly long samples.
  const fail=message=>{throw Error('Invalid rail audio '+file+': '+message)};
  if(bytes.length<44||bytes.length>96000)fail('size');
  if(bytes.toString('ascii',0,4)!=='RIFF'||bytes.toString('ascii',8,12)!=='WAVE'||bytes.toString('ascii',12,16)!=='fmt '||bytes.toString('ascii',36,40)!=='data')fail('container');
  if(bytes.readUInt32LE(4)+8!==bytes.length)fail('RIFF length');
  const format=bytes.readUInt16LE(20),channels=bytes.readUInt16LE(22),rate=bytes.readUInt32LE(24),byteRate=bytes.readUInt32LE(28),align=bytes.readUInt16LE(32),bits=bytes.readUInt16LE(34),dataSize=bytes.readUInt32LE(40);
  if(bytes.readUInt32LE(16)!==16||format!==1||channels!==1||rate!==44100||byteRate!==88200||align!==2||bits!==16)fail('PCM format');
  if(dataSize<=0||dataSize%2||44+dataSize!==bytes.length)fail('data length');
  const frames=dataSize/2,duration=frames/rate;
  if(duration<.12||duration>.5)fail('duration');
  if(entry.frames!==frames||!Number.isFinite(entry.durationSeconds)||Math.abs(entry.durationSeconds-duration)>1e-5)fail('duration metadata');
  const hash=digest.slice(0,12),url='/assets/rail-audio/'+file.replace('.wav','.'+hash+'.wav');
  client[kind]=url;assets[url]=bytes.toString('base64');
 }
 return {client,assets};
}
const courseArtwork=loadCourseArtwork();
rmSync('dist/client/assets/course-art',{recursive:true,force:true});mkdirSync('dist/client/assets/course-art',{recursive:true});
for(const [url,base64] of Object.entries(courseArtwork.assets))writeFileSync('dist/client'+url,Buffer.from(base64,'base64'));
const railAudio=loadRailAudioAssets();
rmSync('dist/client/assets/rail-audio',{recursive:true,force:true});mkdirSync('dist/client/assets/rail-audio',{recursive:true});
for(const [url,base64] of Object.entries(railAudio.assets))writeFileSync('dist/client'+url,Buffer.from(base64,'base64'));
const engine=read('engine.js');
const intro=`import {createThreeBackend} from './render-three.js';\nimport {initCourseArt} from './course-art.js';\n(()=>{'use strict';const canvas=document.getElementById('scene'),error=document.getElementById('error'),loading=document.getElementById('loading');function fail(message){error.hidden=false;document.getElementById('error-text').textContent=message;loading.classList.add('done')}\n`;
const setup=`\nlet threeBackend=createThreeBackend(canvas),software=!threeBackend,softwareContext=software?canvas.getContext('2d'):null;\ntry{\n`;
const files=['racer.js','circuit.js','scenery.js','audio.js','vehicle-core.js','handling.js','race.js','ranking.js','music.js','network.js','race-features.js','ui.js'];
export function clientSource(tail=''){return intro+setup+read('software-renderer.js')+engine+'\n'+files.map(f=>read(f).replace('export const VehicleModel','const VehicleModel')).join('\n')+'\ninitRailAudio('+JSON.stringify(railAudio.client)+');initCourseArt(document,'+JSON.stringify(courseArtwork.client)+');'+tail+"\n}catch(e){console.error(e);fail('游戏初始化异常：'+e.message)}\n})();"}
const contents=clientSource();
const result=await build({stdin:{contents,resolveDir:process.cwd(),loader:'js',sourcefile:'star-rush-client.js'},bundle:true,minify:true,target:'es2022',format:'iife',write:false,legalComments:'eof'});const game=result.outputFiles[0].text+'\n/*! Three.js license\n'+read('node_modules/three/LICENSE')+'*/\n';
const page=read('game-shell.html').replace('<!--GAME_SCRIPT-->','<script src="/game.js?v=reborn-1"></script>');writeFileSync('dist/index.html',page);writeFileSync('dist/client/game.js',game);
const worker='const PAGE='+JSON.stringify(page)+';\nconst GAME='+JSON.stringify(game)+';\nconst COURSE_ARTWORK='+JSON.stringify(courseArtwork.assets)+';\nconst RAIL_AUDIO='+JSON.stringify(railAudio.assets)+';\n'+read('worker/rooms.js')+'\n'+read('worker/api.js');writeFileSync('dist/server/index.js',worker);writeFileSync('worker/index.js',worker);cpSync('.openai/hosting.json','dist/.openai/hosting.json');cpSync('drizzle','dist/drizzle',{recursive:true});console.log('Reborn built: '+Math.round(game.length/1024)+' KB client, '+Object.keys(courseArtwork.assets).length+' course illustrations, '+Object.keys(railAudio.assets).length+' rail samples');
