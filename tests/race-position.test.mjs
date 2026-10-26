import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const source=readFileSync('race-features.js','utf8');
const functions=source.slice(source.indexOf('function updateLocalPosition('),source.indexOf('// Keep the established'));
function result({times=[10,11,12],time=13,dnf=false,progress=100,state='finished'}={}){
  const nodes={};const context={net:{room:null},player:{s:progress},raceBots:times.map(finishAt=>({s:finishAt===null?90:100,finishAt})),state,raceDNF:dnf,raceClock:()=>time,eventType:'race',firstFinish:10,elapsed:time,raceMode:'circuit',trackInfo:()=>({name:'course'}),$:id=>nodes[id]??={}};
  vm.runInNewContext(functions,context);context.updateLocalPosition();return {nodes,context};
}
test('finished HUD follows result times, including elapsed penalties and stable ties',()=>{
  for(const [time,pos] of [[9,1],[10,2],[10.5,2],[13,4]]) {
    const {nodes}=result({time});assert.equal(nodes.localPosition.textContent,`POS ${pos} / 4`);assert.equal(nodes.eventLabel.textContent,'已完赛');
  }
});
test('finished cars stay ahead of unfinished cars; DNF uses progress and has no countdown',()=>{
  assert.equal(result({times:[10,null,null],time:12}).nodes.localPosition.textContent,'POS 2 / 4');
  const {nodes}=result({times:[10,null,null],dnf:true,progress:95});
  assert.equal(nodes.localPosition.textContent,'POS 2 / 4');assert.equal(nodes.eventLabel.textContent,'未完赛');
  assert.equal(result({state:'running',progress:99}).nodes.eventLabel.textContent,'完赛倒计时 27 s');
});
test('manual endless end is not labelled as a circuit finish',()=>{
  const {nodes,context}=result();context.raceMode='endless';context.raceBots=[];context.updateLocalPosition();
  assert.equal(nodes.eventLabel.textContent,'巡游结束');
});
test('online mode retains its own label',()=>{
  const {nodes,context}=result();context.net.room={code:'TEST'};context.updateLocalPosition();
  assert.equal(nodes.localPosition.textContent,'ONLINE');assert.equal(nodes.eventLabel.textContent,'好友房间 · TEST');
});
