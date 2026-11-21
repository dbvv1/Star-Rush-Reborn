import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const race=read('race.js'),features=read('race-features.js');
const line=(source,prefix)=>{const match=source.split('\n').find(value=>value.startsWith(prefix));assert(match,prefix);return match};
const start=features.indexOf('function updateDrivingAssists(');
assert(start>=0);
const poller=features.slice(start);
const state=features.slice(features.indexOf('let frameDurations='),features.indexOf('function updateDiagnostics('));
const code=[
 line(race,'const $='),line(race,'const heldCodes='),line(race,'const keyMap='),
 line(race,'function refreshControls('),state,poller,
 '({input,heldCodes,touchPointers,controlEdges,updateDrivingAssists,steer:()=>assistedSteer})',
].join('\n');
const pad=(index,{id='pad-'+index,axes=.5,gas=.8,brake=0,actions=[],mapping='standard',connected=true}={})=>({
 id,index,connected,mapping,axes:[axes,0,0,0],buttons:Array.from({length:17},(_,i)=>({value:i===7?gas:i===6?brake:Number(actions.includes(i)),pressed:actions.includes(i)}))
});

function create(){
 let slots=[],reads=0;
 const world={document:{getElementById(){}},navigator:{getGamepads(){reads++;return slots}},state:'running',assistedSteer:null,
  demoDriving:false,roadDriving:true,player:{},roadDriverControls:()=>({steer:-.3,gas:false,brake:true}),captureRuntime:{active:false},gameClock:{now:()=>0}};
 const app=runInNewContext(code,world);
 return {world,app,get reads(){return reads},poll(value){slots=value;app.updateDrivingAssists(1/60);return {steer:app.steer(),...app.input}}};
}
const actions=({small,boost,drift})=>[small,boost,drift];

test('first slot-zero pad keeps existing mapping, deadzone and first digital press',()=>{
 const f=create();
 const state=f.poll([pad(0,{axes:.12,actions:[0],mapping:''})]);
 assert.equal(state.steer,null);assert.equal(state.gas,true);
 assert.deepEqual(actions(state),[true,false,false]);assert.equal(f.app.controlEdges.small,1);
 assert.equal(f.poll([pad(0,{axes:-.5,gas:.12,brake:.8,actions:[0],mapping:''})]).steer,-.5);
 assert.equal(f.app.input.gas,false);assert.equal(f.app.input.brake,true);assert.equal(f.app.controlEdges.small,1);
});

test('cold sparse standard slot is read and remains active when an earlier slot appears',()=>{
 const f=create();
 assert.equal(f.poll([null,pad(1)]).steer,.5);assert.equal(f.app.input.gas,true);
 assert.equal(f.poll([pad(0,{axes:-.8,gas:0}),pad(1)]).steer,.5);
 assert.equal(f.app.input.gas,true);
 assert.equal(f.poll([pad(0,{axes:-.8}),pad(1,{connected:false})]).steer,-.8);
 const g=create();
 assert.equal(g.poll([null,pad(1,{mapping:''}),pad(2,{axes:.75})]).steer,.75);
});

test('replacement held digital actions are not consumed until each releases; analog and keys stay live',()=>{
 const f=create();
 f.poll([pad(0)]);
 const held=pad(1,{actions:[0,1,2],brake:.85});
 const replacements=[null,held];
 let state=f.poll(replacements);
 assert.equal(state.steer,.5);assert.equal(state.gas,true);assert.equal(state.brake,true);
 assert.deepEqual(actions(state),[false,false,false]);assert.deepEqual(actions(f.app.controlEdges),[0,0,0]);
 f.app.heldCodes.add('KeyQ');f.app.touchPointers.set(5,'boost');
 assert.deepEqual(actions(f.poll(replacements)),[true,true,false]);
 assert.deepEqual(actions(f.app.controlEdges),[1,1,0]);
 f.app.heldCodes.clear();f.app.touchPointers.clear();
 assert.deepEqual(actions(f.poll(replacements)),[false,false,false]);
 f.poll([null,pad(1,{actions:[1,2]})]);
 assert.deepEqual(actions(f.poll(replacements)),[true,false,false]);
 assert.deepEqual(actions(f.app.controlEdges),[2,1,0]);
 f.app.heldCodes.add('KeyW');f.app.touchPointers.set(5,'left');
 state=f.poll([]);assert.equal(state.steer,null);assert.equal(state.gas,true);assert.equal(state.left,true);assert.deepEqual(actions(state),[false,false,false]);
 f.app.heldCodes.clear();f.app.touchPointers.clear();
 assert.deepEqual(actions(f.poll([pad(0,{id:'replacement',actions:[0,1,2]})])),[false,false,false]);
 assert.equal(f.app.controlEdges.small,2);
});

test('a different controller in the same slot is still a replacement',()=>{
 const f=create();
 f.poll([pad(0)]);
 assert.deepEqual(actions(f.poll([pad(0,{id:'changed',actions:[0,1,2]})])),[false,false,false]);
 assert.deepEqual(actions(f.app.controlEdges),[0,0,0]);
});

test('demo and fixed capture retain their existing priority without polling real devices',()=>{
 const f=create();
 f.world.demoDriving=true;
 const demo=f.poll([null,pad(1)]);
 assert.equal(demo.steer,-.3);assert.equal(demo.gas,false);assert.equal(demo.brake,true);assert.equal(f.reads,0);
 f.world.demoDriving=false;f.world.captureRuntime.active=true;
 assert.equal(f.poll([null,pad(1)]).steer,null);assert.equal(f.reads,0);
});
