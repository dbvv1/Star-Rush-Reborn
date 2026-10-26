// Source HUD regression using the existing happy-dom test dependency.
// Browser layout/GPU verification is separate.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const shell=readFileSync(new URL('../game-shell.html',import.meta.url),'utf8');
const race=readFileSync(new URL('../race.js',import.meta.url),'utf8');
const features=readFileSync(new URL('../race-features.js',import.meta.url),'utf8');
const routeSource=features.slice(features.indexOf('function routePreview('),features.indexOf('function updateCoach('));
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
 const context={roadDriving:false,$,player:{s:0,score:0,coins:0,speed:0,nitro:1,nitroTime:0,energy:0,smallJets:0,driftCharge:0},document:{querySelectorAll:()=>[]},formatTime:()=> '00:00.00',raceClock:()=>0,raceMode:'circuit',trackInfo:()=>({laps:1}),CIRCUIT_LENGTH:100,raceDistance:()=>100,eventType:'timeTrial',net:{room:null},road:s=>({h:s===62?context.turn:0,curv:0}),turn:0,wrapAngle:x=>x,districtAt:()=>({name:'汐见海岸'}),minimap(){}};
 vm.createContext(context);
 vm.runInContext(bindings,context);
 vm.runInContext(routeSource,context);
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

const compactToastRule=html=>html.match(/\.driving-hud \.toast\.show\{([^}]*)\}/)?.[1]??'';

// Structural checks deliberately do not claim browser layout correctness.
// The 679×435 / 396×253 / 1188×761 fine-pointer previews are a separate gate.
test('compact HUD keeps functional groups in independent flow regions with unique bindings',async()=>{
 const {Window}=await import('happy-dom');
 const window=new Window();
 window.document.write(shell);
 const document=window.document;
 const ids=[...document.querySelectorAll('[id]')].map(node=>node.id);
 assert.equal(new Set(ids).size,ids.length,'wrapping must not duplicate runtime bindings');
 const hud=document.querySelector('.driving-hud');
 assert(hud);
 for(const selector of ['.top','.right-hud','.race-status','.nitro','.speed','.coach']){
  assert.equal(hud.querySelector(selector).parentElement,hud,`${selector} needs its own flow region`);
 }
 const status=hud.querySelector('.race-status');
 assert.deepEqual([...status.children].map(node=>node.className),['network-hud','race-feed','split-hud','drift']);
 for(const id of ['turnText','turnArrow','raceTime','lapLabel','speed','energyText','energyBar','jetCount','coach','recoverBtn','pauseBtn','localPosition','eventLabel','splitLabel','splitDelta','lapTimeLabel','driftText','driftBar','minimap']){
  assert(hud.querySelector(`#${id}`),`${id} must remain in the HUD`);
 }
 for(const id of ['recoverBtn','pauseBtn','garageBtn','musicBtn','roomBtn','rankBtn','settingsBtn','helpBtn','soundBtn','viewBtn']){
  const button=document.getElementById(id);
  assert.equal(button.closest('.actions').closest('.top').parentElement,hud);
  assert.equal(button.hidden,false);
  assert.equal(button.disabled,false);
 }
 assert.equal(document.getElementById('countdown').parentElement.id,'game','countdown retains the original central overlay');
 assert.equal(document.getElementById('toast').parentElement,hud,'temporary toast stays in compact flow rather than covering driving controls');
 assert.equal(document.getElementById('networkHud').parentElement,status,'network information must share status flow');
 assert.equal(document.getElementById('networkHud').hidden,true,'existing network visibility remains runtime-controlled');
 assert.match(compactToastRule(shell),/display:block/);
 assert.equal(document.querySelector('.touch').parentElement.id,'game','touch placement and pointer policy stay independent');
 assert.match(shell,/\[hidden\]\{display:none!important\}/);
 assert.match(shell,/@media\(pointer:coarse\)\{\.touch\{display:flex\}/);
 const compact=shell.slice(shell.indexOf('@media(max-height:500px) and (pointer:fine)'));
 // Guard against passing a compact screen by deleting functionality.
 const hiddenSelectors=[...compact.matchAll(/([^{}]+)\{[^{}]*(?:display:none|visibility:hidden)[^{}]*\}/g)].map(match=>match[1].trim());
 assert.deepEqual(hiddenSelectors,['.driving-hud .brand','.driving-hud .guide','.driving-hud .toast']);
 window.happyDOM.abort();
});

test('driving school teaches brake keys and the low-speed reverse boundary',()=>{
 const lesson=shell.match(/<section class="board-overlay" id="helpPanel"[\s\S]*?<\/section>/)?.[0];
 assert.match(lesson,/前进时松开油门，按 S \/ ↓ 制动减速/);
 assert.match(lesson,/接近停下时松开制动，避免继续按住进入倒车/);
 assert.match(lesson,/松开油门后，低速持续按 S \/ ↓ 会倒车/);
 assert.doesNotMatch(lesson,/W\s*\+\s*S/,'simultaneous gas/brake is not the normal lesson');
 assert.match(shell,/<kbd>S\/↓<\/kbd> 制动/);
 assert.match(race,/KeyS:'brake',ArrowDown:'brake'/,'both taught keys use the actual brake input');
 assert.match(shell,/<button data-key="brake">刹车<\/button>/,'existing touch control remains intact');
});
