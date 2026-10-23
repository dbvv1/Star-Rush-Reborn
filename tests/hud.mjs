// Dependency-free source HUD regression. Browser layout/GPU verification is separate.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const shell=readFileSync(new URL('../game-shell.html',import.meta.url),'utf8');
const race=readFileSync(new URL('../race.js',import.meta.url),'utf8');
const bindingSource=race.match(/^const textIds=.*$/m)?.[0];
assert(bindingSource,'real HUD bindings must be tested');
const shellIds=new Set([...shell.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]));
const updateSource=race.slice(race.indexOf('let uiClock=0;'),race.indexOf('\n',race.indexOf('let uiClock=0;')));

function makeHUD(bindings=bindingSource){
 const nodes=new Map();
 const $=id=>{
  assert(shellIds.has(id),`Missing shell element #${id}`);
  if(!nodes.has(id))nodes.set(id,{textContent:'',style:{},attrs:{},classList:{toggle(){}},setAttribute(key,value){this.attrs[key]=value}});
  return nodes.get(id);
 };
 const path=$('turnArrowPath');
 path.attrs.d=shell.match(/id="turnArrowPath" d="([^"]+)"/)[1];
 // Fail if an update accidentally returns to replacing the SVG with font text.
 Object.defineProperty($('turnArrow'),'textContent',{set(){throw Error('SVG must not be replaced by text')}});
 const context={$,player:{s:0,score:0,coins:0,speed:0,nitro:1,nitroTime:0,energy:0,smallJets:0,driftCharge:0},document:{querySelectorAll:()=>[]},formatTime:()=> '00:00.00',raceClock:()=>0,raceMode:'circuit',trackInfo:()=>({laps:1}),CIRCUIT_LENGTH:100,raceDistance:()=>100,road:s=>({h:s===62?context.turn:0}),turn:0,wrapAngle:x=>x,districtAt:()=>({name:'汐见海岸'}),minimap(){}};
 vm.createContext(context);
 vm.runInContext(bindings,context);
 vm.runInContext(updateSource,context);
 return {context,$,path};
}

test('straight / right / left / straight updates preserve the SVG and route text',()=>{
 assert.match(shell,/<svg id="turnArrow"[^>]*aria-hidden="true"[^>]*><path id="turnArrowPath"/);
 const {context,$,path}=makeHUD();
 for(const [turn,label,d] of [
  [0,'前方直道','M12 21V3M5 10L12 3L19 10'],
  [.2,'前方右弯','M5 21V8H21M14 1L21 8L14 15'],
  [-.2,'前方左弯','M19 21V8H3M10 1L3 8L10 15'],
  [.049,'前方直道','M12 21V3M5 10L12 3L19 10'],
 ]){
  context.turn=turn;
  vm.runInContext('updateHUD(.061)',context);
  assert.equal($('turnText').textContent,label);
  assert.equal($('turnArrowPath'),path);
  assert.equal(path.attrs.d,d);
 }
 assert.doesNotMatch(race,/hud\.turnArrow\.(?:textContent|innerHTML)\s*=/);
});

test('missing or stale real HUD bindings are rejected',()=>{
 const stale=bindingSource.replace("'turnArrowPath'","'turnArrow'");
 assert.notEqual(stale,bindingSource,'mutation must remove the real path binding');
 const {context}=makeHUD(stale);
 assert.throws(()=>vm.runInContext('updateHUD(.061)',context),/setAttribute/);
 assert.throws(()=>makeHUD(bindingSource.replace("'turnArrowPath'","'missingHUDNode'")),/Missing shell element #missingHUDNode/);
});

test('pause and recovery have visible text, retain names, and retain existing handlers',()=>{
 assert.match(shell,/<button id="recoverBtn"[^>]*aria-label="赛车回正，不重开比赛">回正<\/button>/);
 assert.match(shell,/<button id="pauseBtn"[^>]*aria-label="暂停游戏">暂停<\/button>/);
 assert.match(race,/\$\('pauseBtn'\)\.onclick=pauseGame/);
 assert.match(race,/\$\('resumeBtn'\)\.onclick=pauseGame/);
 assert.match(race,/\$\('recoverBtn'\)\.onclick=\(\)=>recoverCar\(false\)/);
 assert.match(race,/if\(e.code==='KeyP'\|\|e.code==='Escape'\)pauseGame\(\)/);
 assert.match(race,/if\(e.code==='Backspace'\)\{e.preventDefault\(\);if\(!e.repeat\)recoverCar\(false\)/);
});

test('critical panels have dark backing, bounded width and non-intercepting overlays',()=>{
 const rule=selector=>shell.match(new RegExp(selector.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\{([^}]*)\\}'))?.[1];
 for(const selector of ['.race-clock','.race-feed,.split-hud']){
  assert.match(rule(selector),/background:#171d32eb/);
  assert.match(rule(selector),/pointer-events:none/);
 }
 assert.match(rule('.race-feed,.split-hud'),/max-width:calc\(100vw - 240px\)/);
 assert.match(shell,/@media\(max-width:700px\)/);
 assert.match(shell,/\.race-feed,\.split-hud\{max-width:calc\(100vw - 160px\)/);
 assert.match(shell,/\.menu-open \.race-feed,\.menu-open \.split-hud\{visibility:hidden\}/);
 assert.match(shell,/\.menu-open \.right-hud[^}]*visibility:hidden/);
 assert.match(rule('.route svg'),/flex:0 0 24px/);
});


test('HUD text contrast stays above 4.5 against panels composited over white',()=>{
 // A numerical bright-scene lower bound, not a browser layout/visibility test.
 const cssRule=selector=>[...shell.matchAll(new RegExp(selector.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\{([^}]*)\\}','g'))].map(match=>match[1]).join(';');
 const hex=(rule,property)=>{
  const value=[...rule.matchAll(new RegExp('(?:^|;)'+property+':(#[0-9a-f]{6}(?:[0-9a-f]{2})?)(?=;|$)','gi'))].at(-1)?.[1];
  assert(value,`Missing ${property} in ${rule}`);
  return value.slice(1).match(/../g).map(v=>parseInt(v,16));
 };
 const luminance=rgb=>rgb.slice(0,3).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
 const ink=hex(cssRule(':root'),'--ink');
 const groups=[
  ['.race-clock',[ink,hex(cssRule('.race-clock span'),'color')]],
  ['.race-feed,.split-hud',[hex(cssRule('.race-feed'),'color'),hex(cssRule('.split-hud'),'color'),hex(cssRule('.split-hud b'),'color')]],
  ['.route',[ink,hex(cssRule(':root'),'--pink')]],
 ];
 // Include the real runtime ahead/behind split colors, not only the default.
 const features=readFileSync(new URL('../race-features.js',import.meta.url),'utf8');
 const splitColors=features.match(/splitDelta'\)\.style\.color=delta>0\?'(#[0-9a-f]{6})':'(#[0-9a-f]{6})'/i);
 assert(splitColors,'runtime split colors must be covered');
 groups[1][1].push(...splitColors.slice(1).map(color=>hex('color:'+color,'color')));
 for(const [selector,colors] of groups){
  const rgba=hex(cssRule(selector),'background'),alpha=(rgba[3]??255)/255;
  const background=rgba.slice(0,3).map(v=>v*alpha+255*(1-alpha));
  for(const color of colors){
   const ratio=(luminance(color)+.05)/(luminance(background)+.05);
   assert(ratio>=4.5,`${selector}: text contrast ${ratio.toFixed(2)} must be >= 4.5`);
  }
 }
});
