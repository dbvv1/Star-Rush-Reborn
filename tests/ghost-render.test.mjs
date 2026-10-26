import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
test('Canvas and mesh ghost consumers share interpolated pose and clear stale states',()=>{
 const source=readFileSync('race-features.js','utf8');
 const render=source.slice(source.indexOf('function renderRaceFeatures('),source.indexOf('let frameDurations='));
 const canvas=readFileSync('software-renderer.js','utf8').split('\n').find(line=>line.includes('if(ghostPose&&'));
 assert(canvas,'actual Canvas consumer must use the shared pose');
 const calls=[],node={},context={raceBots:[],ghostPose:null,ghostNode:node,ghostRun:{points:[[0,0,0,3.12,0],[.1,10,2,-3.12,1]]},state:'running',ghostCursor:0,raceClock:()=>.05,settings:{line:false},world:{add(){}},clamp:(x,a,b)=>Math.max(a,Math.min(b,x)),mix:(a,b,u)=>a+(b-a)*u,wrapAngle:x=>Math.atan2(Math.sin(x),Math.cos(x)),road:()=>({h:0}),atRoad:(s,l,y)=>[s,y,l],sub:(a,b)=>a.map((v,i)=>v-b[i]),trs:(position,scale,rotation)=>({position,scale,rotation}),drawKart:(...args)=>calls.push(args)};
 vm.createContext(context);vm.runInContext(render,context);context.renderRaceFeatures([0,0,0],1/60);vm.runInContext(canvas,context);
 assert.equal(context.ghostPose.s,5);assert.equal(context.ghostPose.l,1);assert.equal(context.ghostPose.jump,.5);assert(Math.abs(context.ghostPose.yaw-Math.PI)<1e-9,'yaw crosses shortest arc');
 assert.deepEqual(calls[0],[5,1,context.ghostPose.yaw,.5,'#b8e9e6',.35]);assert.equal(node.local.position[0],5);assert(Math.abs(node.local.position[1]-.57)<1e-9);
 for(const state of ['paused','ready','finished']){context.state=state;context.renderRaceFeatures([0,0,0],1/60);vm.runInContext(canvas,context);assert.equal(context.ghostPose,null)}
 assert.equal(calls.length,1);context.state='running';context.ghostNode=null;context.renderRaceFeatures([0,0,0],1/60);assert.equal(context.ghostPose,null);
});
