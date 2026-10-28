import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
test('Canvas does not report unmeasured WebGL counters; Three keeps real counts',()=>{
 const source=readFileSync('race-features.js','utf8');
 const text={};const context={gameClock:{now:()=>0},$:()=>text,software:true,renderStats:{drawCalls:23,triangles:456},state:'running',eventType:'race',player:{s:123,l:0,speed:10,yaw:0,velocityYaw:0,driftPhase:'grip',smallJets:0,nitro:1},raceDistance:()=>1000,steering:0,wrapAngle:x=>x,net:{ready:false,peers:new Map()},audio:null};
 vm.runInNewContext(source.slice(source.indexOf('let frameDurations='),source.indexOf('function updateDrivingAssists(')),context);
 context.updateDiagnostics(16.7,.25);
 assert.match(text.textContent,/Canvas compatibility\nFPS 60 \| frame p95 16.7 ms\nWebGL draw\/triangles: n\/a\nState running/);
 assert.doesNotMatch(text.textContent,/Draw 23|triangles 456|Draw 0/);
 context.software=false;context.updateDiagnostics(33.4,.25);
 assert.match(text.textContent,/Three.js WebGL 2\nFPS 60 \| frame p95 16.7 ms\nDraw 23 \| triangles 456\nState running/);
 assert.deepEqual(context.renderStats,{drawCalls:23,triangles:456});
});
