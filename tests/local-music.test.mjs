import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const source=readFileSync(new URL('../music.js',import.meta.url),'utf8');
const flush=()=>new Promise(resolve=>setImmediate(resolve));

function fixture(...responses){
 const nodes=new Map(),element=()=>({textContent:'',value:'',hidden:false,disabled:false,classList:{toggle(){}},removeAttribute(k){delete this[k]}});
 const $=id=>{if(!nodes.has(id))nodes.set(id,element());return nodes.get(id)};
 const document={hidden:false},plays=[];
 let media;
 class Audio {
  paused=true;error=null;
  constructor(){media=this}
  set src(url){this.url=url;this.error=null}
  pause(){this.paused=true}
  play(){
   plays.push(this.url);
   const response=responses.shift();
   if(typeof response==='string')return Promise.reject(Object.assign(new Error(response),{name:response}));
   if(response)return response;
   this.paused=false;return Promise.resolve();
  }
 }
 const context={$: $, Audio,document,URL:{createObjectURL:f=>'blob:'+f.name,revokeObjectURL(){}},localStorage:{getItem(){return null},setItem(){}},sound:true,audioInit(){},audio:{ctx:{
  state:'running',currentTime:0,destination:{},createGain:()=>({gain:{setTargetAtTime(){}},connect(){}}),createDynamicsCompressor:()=>({threshold:{},ratio:{},connect(){}}),createMediaElementSource:()=>({connect(){}})
 }}};
 const api=runInNewContext(source+'\n;({updateMusic,music,musicSettings})',context);
 return {$,document,context,plays,update:api.updateMusic,get media(){return media},select(...names){$('musicFiles').onchange({target:{files:names.map(name=>({name}))}})}};
}

test('a playable local file starts once, resumes, and advances the existing playlist',async()=>{
 const f=fixture();f.select('one.ogg','two.ogg');await flush();
 for(let i=0;i<120;i++)f.update();
 assert.deepEqual(f.plays,['blob:one.ogg']);assert.equal(f.$('nowPlaying').textContent,'one.ogg');
 f.document.hidden=true;f.update();assert.equal(f.media.paused,true);
 f.document.hidden=false;f.update();await flush();assert.equal(f.media.paused,false);
 f.context.sound=false;f.update();assert.equal(f.media.paused,true);
 f.context.sound=true;f.update();await flush();
 f.media.onended();await flush();
 assert.deepEqual(f.plays,['blob:one.ogg','blob:one.ogg','blob:one.ogg','blob:two.ogg']);
 assert.equal(f.$('nowPlaying').textContent,'two.ogg');
});

test('a local play rejection is not retried by frames; the Play gesture retries once immediately',async()=>{
 const f=fixture('NotAllowedError');f.select('one.ogg');await flush();
 for(let i=0;i<120;i++)f.update();
 await flush();
 assert.deepEqual(f.plays,['blob:one.ogg']);
 assert.equal(f.$('musicToggle').textContent,'播放音乐');
 assert.equal(f.$('nowPlaying').textContent,'点击“播放音乐”后继续');
 f.$('musicToggle').onclick();assert.deepEqual(f.plays,['blob:one.ogg','blob:one.ogg']);
 await flush();f.update();assert.equal(f.media.paused,false);
 assert.equal(f.$('nowPlaying').textContent,'one.ogg');
 assert.equal(f.$('musicToggle').textContent,'暂停音乐');
 f.$('musicToggle').onclick();assert.equal(f.media.paused,true);
 f.update();assert.equal(f.plays.length,2);
});

test('unsupported and decode-error files ask for a different file, not another frame or click',async()=>{
 const f=fixture('NotSupportedError');f.select('bad.ogg','next.ogg');await flush();
 assert.match(f.$('nowPlaying').textContent,/无法解码.*换一首/);
 assert.equal(f.$('musicToggle').disabled,true);
 for(let i=0;i<120;i++)f.update();
 f.$('musicToggle').onclick();assert.deepEqual(f.plays,['blob:bad.ogg']);
 f.$('nextSong').onclick();await flush();assert.equal(f.$('musicToggle').disabled,false);
 assert.equal(f.$('nowPlaying').textContent,'next.ogg');
 f.media.error={code:3};f.media.pause();f.media.onerror();f.update();
 assert.match(f.$('nowPlaying').textContent,/无法解码.*换一首/);
 f.select('good.wav');await flush();
 assert.deepEqual(f.plays,['blob:bad.ogg','blob:next.ogg','blob:good.wav']);
 assert.equal(f.$('nowPlaying').textContent,'good.wav');
});

test('pending and stale starts cannot multiply or block a replacement file or next mode',async()=>{
 let rejectOld,rejectNext;
 const old=new Promise((_r,reject)=>{rejectOld=reject});
 const next=new Promise((_r,reject)=>{rejectNext=reject});
 const f=fixture(old,undefined,next);
 f.select('old.ogg');for(let i=0;i<120;i++)f.update();assert.deepEqual(f.plays,['blob:old.ogg']);
 f.select('current.ogg');rejectOld(Object.assign(new Error('old'),{name:'NotSupportedError'}));await flush();
 assert.equal(f.$('nowPlaying').textContent,'current.ogg');
 assert.equal(f.$('musicToggle').disabled,false);
 f.select('pending.ogg');f.$('synthMusic').onclick();rejectNext(new Error('old mode'));await flush();
 assert.equal(f.$('nowPlaying').textContent,'STARLINE · 原创电子竞速配乐');
 assert.equal(f.$('musicToggle').disabled,false);
 assert.deepEqual(f.plays,['blob:old.ogg','blob:current.ogg','blob:pending.ogg']);
});
