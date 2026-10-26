import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {Window} from 'happy-dom';
const circuit=readFileSync('circuit.js','utf8');
const formatter=circuit.match(/^function formatTime\(.*$/m)[0];
test('display rounding carries centiseconds into seconds and minutes',()=>{
 const context={};vm.runInNewContext(formatter,context);
 for(const [seconds,expected] of [[0,'00:00.00'],[9.999,'00:10.00'],[59.994,'00:59.99'],[59.995,'01:00.00'],[60,'01:00.00'],[119.999,'02:00.00'],[3599.999,'60:00.00'],[6000,'100:00.00']])assert.equal(context.formatTime(seconds),expected);
});
test('result rows and leaderboard share carried display without changing rank times',async()=>{
 const window=new Window();const grid=window.document.createElement('div');
 const features=readFileSync('race-features.js','utf8');
 const comparator=features.slice(features.indexOf('function compareRaceResults('),features.indexOf('// Keep the established'));
 const results=features.slice(features.indexOf('function drawRaceResults('),features.indexOf('function completeRaceFeatures('));
 const ranking=readFileSync('ranking.js','utf8').match(/^function rankRow\(.*$/m)[0];
 const context={document:window.document,$:()=>grid,net:{room:null},raceBots:[{name:'Earlier',finishAt:59.994,s:100}],profile:{name:'Player'},raceDNF:false,raceClock:()=>59.999,player:{s:100}};
 try{vm.runInNewContext(formatter+'\n'+comparator+'\n'+results+'\n'+ranking,context);context.drawRaceResults();
 assert.deepEqual([...grid.querySelectorAll('b')].map(n=>n.textContent),['00:59.99','01:00.00']);
 assert.equal(grid.firstChild.firstChild.textContent,'1. Earlier');
 assert.equal(context.rankRow(1,{mode:'circuit',timeMs:59999,name:'Player',score:0}).children[2].textContent,'01:00.00');
 assert.equal(context.raceClock(),59.999);assert.equal(context.raceBots[0].finishAt,59.994);
 }finally{await window.happyDOM.close()}
});
