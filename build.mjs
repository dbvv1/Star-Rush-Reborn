import {readFileSync,writeFileSync,mkdirSync,cpSync} from 'node:fs';
import {build} from 'esbuild';
const read=p=>readFileSync(p,'utf8');mkdirSync('dist/server',{recursive:true});mkdirSync('dist/client',{recursive:true});mkdirSync('dist/.openai',{recursive:true});
const engine=read('engine.js');
const intro=`import {createThreeBackend} from './render-three.js';\n(()=>{'use strict';const canvas=document.getElementById('scene'),error=document.getElementById('error'),loading=document.getElementById('loading');function fail(message){error.hidden=false;document.getElementById('error-text').textContent=message;loading.classList.add('done')}\n`;
const setup=`\nlet threeBackend=createThreeBackend(canvas),software=!threeBackend,softwareContext=software?canvas.getContext('2d'):null;\ntry{\n`;
const files=['racer.js','circuit.js','scenery.js','audio.js','vehicle-core.js','handling.js','race.js','ranking.js','music.js','network.js','race-features.js','ui.js'];
export function clientSource(tail=''){return intro+setup+read('software-renderer.js')+engine+'\n'+files.map(f=>read(f).replace('export const VehicleModel','const VehicleModel')).join('\n')+tail+"\n}catch(e){console.error(e);fail('游戏初始化异常：'+e.message)}\n})();"}
const contents=clientSource();
const result=await build({stdin:{contents,resolveDir:process.cwd(),loader:'js',sourcefile:'star-rush-client.js'},bundle:true,minify:true,target:'es2022',format:'iife',write:false,legalComments:'eof'});const game=result.outputFiles[0].text+'\n/*! Three.js license\n'+read('node_modules/three/LICENSE')+'*/\n';
const page=read('game-shell.html').replace('<!--GAME_SCRIPT-->','<script src="/game.js?v=reborn-1"></script>');writeFileSync('dist/index.html',page);writeFileSync('dist/client/game.js',game);
const worker='const PAGE='+JSON.stringify(page)+';\nconst GAME='+JSON.stringify(game)+';\n'+read('worker/rooms.js')+'\n'+read('worker/api.js');writeFileSync('dist/server/index.js',worker);writeFileSync('worker/index.js',worker);cpSync('.openai/hosting.json','dist/.openai/hosting.json');cpSync('drizzle','dist/drizzle',{recursive:true});console.log('Reborn built: '+Math.round(game.length/1024)+' KB client');
