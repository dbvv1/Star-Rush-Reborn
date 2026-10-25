import {readFileSync,writeFileSync,mkdirSync,cpSync,rmSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join} from 'node:path';
import {build} from 'esbuild';
import {loadImpactAssets} from './impact-assets.mjs';
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
const courseArtwork=loadCourseArtwork();
rmSync('dist/client/assets/course-art',{recursive:true,force:true});mkdirSync('dist/client/assets/course-art',{recursive:true});
for(const [url,base64] of Object.entries(courseArtwork.assets))writeFileSync('dist/client'+url,Buffer.from(base64,'base64'));
const impactArtwork=loadImpactAssets('assets/impact-audio',process.env.STAR_RUSH_RAIL_SOURCE??'kenney');
rmSync('dist/client/assets/impact-audio',{recursive:true,force:true});mkdirSync('dist/client/assets/impact-audio',{recursive:true});
for(const [url,base64] of Object.entries(impactArtwork.assets))writeFileSync('dist/client'+url,Buffer.from(base64,'base64'));
const houseAnchors=process.env.STAR_RUSH_CANVAS_HOUSE_ANCHORS??'off';
if(!['off','on'].includes(houseAnchors))throw Error('Unknown Canvas house anchor option: '+houseAnchors);
const engine=read('engine.js');
const intro=`import {createRailImpactPlayer} from './impact-audio.js';\nimport {createThreeBackend} from './render-three.js';\nimport {initCourseArt} from './course-art.js';\n(()=>{'use strict';const canvas=document.getElementById('scene'),error=document.getElementById('error'),loading=document.getElementById('loading');function fail(message){error.hidden=false;document.getElementById('error-text').textContent=message;loading.classList.add('done')}\n`;
const setup=`\nconst railImpactUrls=${JSON.stringify(impactArtwork.client)};const softwareHouseAnchorsEnabled=${houseAnchors==='on'};\nlet threeBackend=createThreeBackend(canvas),software=!threeBackend,softwareContext=software?canvas.getContext('2d'):null;\ntry{\n`;
const files=['racer.js','circuit.js','scenery.js','audio.js','vehicle-core.js','handling.js','race.js','ranking.js','music.js','network.js','race-features.js','ui.js'];
export function clientSource(tail=''){return intro+setup+read('software-renderer.js')+engine+'\n'+files.map(f=>read(f).replace('export const VehicleModel','const VehicleModel')).join('\n')+'\ninitCourseArt(document,'+JSON.stringify(courseArtwork.client)+');'+tail+"\n}catch(e){console.error(e);fail('游戏初始化异常：'+e.message)}\n})();"}
const contents=clientSource();
const result=await build({stdin:{contents,resolveDir:process.cwd(),loader:'js',sourcefile:'star-rush-client.js'},bundle:true,minify:true,target:'es2022',format:'iife',write:false,legalComments:'eof'});const game=result.outputFiles[0].text+'\n/*! Three.js license\n'+read('node_modules/three/LICENSE')+'*/\n';
const page=read('game-shell.html').replace('<!--GAME_SCRIPT-->','<script src="/game.js?v=reborn-1"></script>');writeFileSync('dist/index.html',page);writeFileSync('dist/client/game.js',game);
const worker='const PAGE='+JSON.stringify(page)+';\nconst GAME='+JSON.stringify(game)+';\nconst COURSE_ARTWORK='+JSON.stringify(courseArtwork.assets)+';\nconst IMPACT_AUDIO='+JSON.stringify(impactArtwork.assets)+';\n'+read('worker/rooms.js')+'\n'+read('worker/api.js');writeFileSync('dist/server/index.js',worker);writeFileSync('worker/index.js',worker);cpSync('.openai/hosting.json','dist/.openai/hosting.json');cpSync('drizzle','dist/drizzle',{recursive:true});console.log('Reborn built: '+Math.round(game.length/1024)+' KB client, '+Object.keys(courseArtwork.assets).length+' course illustrations');
