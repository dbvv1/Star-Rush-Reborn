import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Window} from 'happy-dom';

for(const entry of ['game.js','road/game.js'])test(entry+' startup recovers Canvas after WebGL renderer constructor fails',async()=>{
  const window=new Window({url:'https://race.test/',settings:{disableIframePageLoading:true,handleDisabledFileLoadingAsSuccess:true}});
  try {
    const frames=[],errors=[];let draws=0;
    window.console.error=(...args)=>errors.push(args.map(String).join(' '));window.console.warn=()=>{};
    window.requestAnimationFrame=fn=>{frames.push(fn);return frames.length};window.fetch=async()=>new Response(JSON.stringify({runs:[]}));
    const contexts=new WeakMap();const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}}),measureText:()=>({width:10})},{get:(o,k)=>k in o?o[k]:()=>{draws++},set:(o,k,v)=>{o[k]=v;return true}});
    window.HTMLCanvasElement.prototype.getContext=function(type){
      const mode=contexts.get(this);
      if(mode&&mode!==type)return null;
      contexts.set(this,type);
      return type==='webgl2'?{}:ctx; // acquired context, deliberately insufficient for Three construction
    };
    Object.defineProperties(window.HTMLElement.prototype,{clientWidth:{get(){return 1280}},clientHeight:{get(){return 720}}});
    window.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
    const original=window.document.querySelector('#scene');
    window.eval(readFileSync('dist/client/'+entry,'utf8'));
    assert.equal(window.document.querySelector('#error').hidden,true,errors.join('\n'));
    assert(frames.length);assert.doesNotThrow(()=>frames.shift()(16.67));assert(draws>100);
    const current=window.document.querySelector('#scene');assert.notEqual(current,original);assert.equal(current.getAttribute('aria-label'),original.getAttribute('aria-label'));
    current.dispatchEvent(new window.Event('webglcontextlost',{cancelable:true}));
    assert.equal(window.document.querySelector('#error').hidden,false);assert.match(window.document.querySelector('#error-text').textContent,/图形上下文已中断/);
  } finally {await window.happyDOM.close();}
});


for(const entry of ['game.js','road/game.js'])test(entry+' startup shows an error and schedules no frames when both backends are unavailable',async()=>{
  const window=new Window({url:'https://race.test/'});
  try {
    const frames=[];window.console.warn=()=>{};window.console.error=()=>{};
    window.requestAnimationFrame=fn=>{frames.push(fn);return frames.length};
    window.HTMLCanvasElement.prototype.getContext=()=>null;
    window.document.write(readFileSync('game-shell.html','utf8').replace('<!--GAME_SCRIPT-->','').replace(/<iframe[^>]*id="spotifyPlayer"[^>]*><\/iframe>/g,'<div id="spotifyPlayer"></div>'));
    assert.doesNotThrow(()=>window.eval(readFileSync('dist/client/'+entry,'utf8')));
    assert.equal(window.document.querySelector('#error').hidden,false);
    assert.match(window.document.querySelector('#error-text').textContent,/无法初始化/);
    assert.equal(window.document.querySelector('#loading').classList.contains('done'),true);assert.equal(frames.length,0);
  }finally{await window.happyDOM.close();}
});
