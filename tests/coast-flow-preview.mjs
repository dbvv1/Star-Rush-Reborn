// Two real Worker builds, isolated memory databases, only ephemeral loopback.
// No browser launch, input replay, injected player state, or public deployment.
import {execFileSync} from 'node:child_process';
import {mkdirSync,copyFileSync} from 'node:fs';
import {startSmokeServer} from './smoke-server.mjs';
import {cleanupSmoke} from './smoke-cleanup.mjs';
const profiles=['baseline','candidate'],resources=[];
mkdirSync('outputs/coast-flow',{recursive:true});
try {
 try {
  for(const profile of profiles){
   execFileSync(process.execPath,['build.mjs'],{stdio:'inherit',env:{...process.env,STAR_RUSH_COAST_FLOW:profile,STAR_RUSH_DRIVING_MODEL:'legacy',STAR_RUSH_SIGNBOARD_VARIANT:'baseline',STAR_RUSH_CANVAS_HOUSE_ANCHORS:'off',STAR_RUSH_COAST_CORNER:'baseline'}});
   copyFileSync('dist/server/index.js',`outputs/coast-flow/${profile}.mjs`);
  }
 } finally {
  execFileSync(process.execPath,['build.mjs'],{stdio:'inherit',env:{...process.env,STAR_RUSH_COAST_FLOW:'baseline',STAR_RUSH_DRIVING_MODEL:'road',STAR_RUSH_SIGNBOARD_VARIANT:'baseline',STAR_RUSH_CANVAS_HOUSE_ANCHORS:'off',STAR_RUSH_COAST_CORNER:'baseline'}});
 }
 for(const profile of profiles){
  const {default:worker}=await import(`../outputs/coast-flow/${profile}.mjs`);
  const resource=await startSmokeServer(worker);resources.push(resource);
  console.log(`${profile}=${resource.origin}`);
 }
 console.log('Same scenery; normal menu/chase camera/keyboard. Candidate is NOT the default. Ctrl+C closes both services.');
} catch(error){
 for(const resource of resources)await cleanupSmoke(resource);
 throw error;
}
let closing=false;
const close=async()=>{if(closing)return;closing=true;for(const resource of resources){const errors=await cleanupSmoke(resource);if(errors.length){console.error(errors);process.exitCode=1}}};
process.on('SIGINT',close);process.on('SIGTERM',close);
