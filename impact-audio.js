// Narrow rail samples. Pending/missing/invalid samples return false immediately,
// so the caller keeps its procedural impact. Never replay a stale collision.
export function createRailImpactPlayer(ctx,output,urls,{fetchImpl=globalThis.fetch,timeoutMs=5000}={}){
 const buffers=new Map(),states={light:'idle',medium:'idle'},voices=new Set();
 let pending=null,disposed=false,last='none',played=0;
 const controllers=new Set();
 function load(){
  if(pending)return pending;
  pending=Promise.all(['light','medium'].map(async key=>{
   if(disposed)return;
   states[key]='loading';const controller=new AbortController();controllers.add(controller);let timer;
   try{
    const work=(async()=>{
     if(typeof urls[key]!=='string'||!urls[key].startsWith('/assets/impact-audio/'))throw Error('Missing rail asset');
     const response=await fetchImpl(urls[key],{signal:controller.signal});if(!response.ok)throw Error('Rail asset HTTP error');
     const bytes=await response.arrayBuffer();if(bytes.byteLength>50000)throw Error('Rail asset oversized');
     const buffer=await ctx.decodeAudioData(bytes);
     if(!(buffer.duration>0&&buffer.duration<=1)||buffer.numberOfChannels!==1)throw Error('Invalid rail clip');
     return buffer;
    })();
    const buffer=await Promise.race([work,new Promise((_,reject)=>{timer=setTimeout(()=>{controller.abort();reject(Error('Rail asset timeout'))},timeoutMs)})]);
    if(!disposed){buffers.set(key,buffer);states[key]='ready'}
   }catch{if(!disposed)states[key]='fallback'}finally{clearTimeout(timer);controllers.delete(controller)}
  }));return pending;
 }
 function stop(){for(const voice of [...voices]){try{voice.source.stop()}catch{}voice.cleanup()}}
 function play(impact){
  if(disposed||ctx.state!=='running'||!Number.isFinite(impact)||impact<.7)return false;
  const key=impact>5?'medium':'light',buffer=buffers.get(key);
  if(!buffer){last=key+' fallback';return false}
  if(voices.size>=4){const oldest=voices.values().next().value;try{oldest.source.stop()}catch{}oldest.cleanup()}
  let source,gain,voice;
  try{
   source=ctx.createBufferSource();gain=ctx.createGain();source.buffer=buffer;
   // Conservative provisional level; no listening-based loudness claim.
   gain.gain.value=.15;source.connect(gain);gain.connect(output);
   voice={source,cleanup(){voices.delete(voice);source.onended=null;source.disconnect();gain.disconnect()}};
   source.onended=()=>voice.cleanup();voices.add(voice);source.start();source.stop(ctx.currentTime+buffer.duration+.02);
   last=key;played++;return true;
  }catch{if(voice)voice.cleanup();else{source?.disconnect();gain?.disconnect()}last=key+' fallback';return false}
 }
 function dispose(){disposed=true;for(const controller of controllers)controller.abort();stop();buffers.clear()}
 return {load,play,stop,dispose,status:()=>({states:{...states},active:voices.size,last,played})};
}
