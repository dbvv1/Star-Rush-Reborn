// Layered procedural audio. The two optional rail-impact WAVs are decoded into
// buffers; every other layer and all fallback sounds remain synthesized here.
let audio=null,sound=true;
const RAIL_AUDIO_KINDS=['light-scrape','medium-hit'],railAudio={state:'idle',sources:null,buffers:null,loading:null,error:null};
function initRailAudio(sources){
 if(railAudio.state==='loading'||railAudio.state==='ready')return;
 railAudio.sources=sources&&typeof sources==='object'?sources:null;
 if(railAudio.state==='failed'){railAudio.state='idle';railAudio.error=null}
 if(audio)loadRailAudio();
}
function railAudioReady(){const buffers=railAudio.buffers;return railAudio.state==='ready'&&!!buffers&&RAIL_AUDIO_KINDS.every(kind=>!!buffers[kind])}
function decodeRailData(ctx,data){
 return new Promise((resolve,reject)=>{
  let settled=false;const ok=buffer=>{if(!settled){settled=true;resolve(buffer)}},fail=error=>{if(!settled){settled=true;reject(error)}};
  try{const task=ctx.decodeAudioData(data,ok,fail);if(task&&typeof task.then==='function')task.then(ok,fail)}catch(error){fail(error)}
 });
}
function loadRailAudio(){
 if(!audio)return Promise.resolve(railAudio.state);
 if(railAudio.state==='ready'||railAudio.state==='failed')return Promise.resolve(railAudio.state);
 if(railAudio.loading)return railAudio.loading;
 const sources=railAudio.sources;
 if(!sources||!RAIL_AUDIO_KINDS.every(kind=>typeof sources[kind]==='string'))return Promise.resolve(railAudio.state);
 railAudio.state='loading';railAudio.error=null;
 const task=Promise.all(RAIL_AUDIO_KINDS.map(async kind=>{
  const response=await fetch(sources[kind],{cache:'force-cache'});
  if(!response||!response.ok)throw Error('Rail audio request failed: '+kind);
  const bytes=await response.arrayBuffer();
  if(!bytes||bytes.byteLength<44||bytes.byteLength>131072)throw Error('Rail audio has invalid size: '+kind);
  return [kind,await decodeRailData(audio.ctx,bytes)];
 })).then(entries=>{
  const buffers={};for(const [kind,buffer] of entries){if(!buffer||!Number.isFinite(buffer.duration)||buffer.duration<=0)throw Error('Rail audio decode returned no buffer: '+kind);buffers[kind]=buffer}
  railAudio.buffers=buffers;railAudio.state='ready';return railAudio.state;
 },error=>{railAudio.buffers=null;railAudio.state='failed';railAudio.error=error;return railAudio.state});
 railAudio.loading=task.finally(()=>{railAudio.loading=null});return railAudio.loading;
}
function audioInit(){if(audio)return;try{
 const ctx=new (window.AudioContext||window.webkitAudioContext)(),master=ctx.createGain(),compressor=ctx.createDynamicsCompressor();master.gain.value=sound?.48:0;master.connect(compressor);compressor.threshold.value=-18;compressor.ratio.value=4;compressor.connect(ctx.destination);
 const engineGain=ctx.createGain(),engineFilter=ctx.createBiquadFilter();engineFilter.type='lowpass';engineFilter.frequency.value=1000;engineGain.gain.value=0;engineFilter.connect(engineGain);engineGain.connect(master);
 const engine1=ctx.createOscillator(),engine2=ctx.createOscillator(),sub=ctx.createOscillator(),subGain=ctx.createGain();engine1.type='sawtooth';engine2.type='triangle';sub.type='sine';engine2.detune.value=9;subGain.gain.value=.6;for(const o of [engine1,engine2]){o.connect(engineFilter);o.start()}sub.connect(subGain);subGain.connect(engineFilter);sub.start();
 const noise=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate),data=noise.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
 function noiseLayer(type,freq){const source=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain();source.buffer=noise;source.loop=true;filter.type=type;filter.frequency.value=freq;gain.gain.value=0;source.connect(filter);filter.connect(gain);gain.connect(master);source.start();return {source,filter,gain}}
 const wind=noiseLayer('lowpass',1100),tire=noiseLayer('bandpass',1800),turbo=noiseLayer('highpass',2200);tire.filter.Q.value=3.5;
 audio={ctx,master,engine1,engine2,sub,engineGain,engineFilter,noise,wind,tire,turbo,oldSpeed:0,oldBoost:false,gear:0};
 loadRailAudio();
}catch(e){}}
function tone(freq=620,duration=.10){if(!sound||!audio)return;const {ctx,master}=audio,o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.setValueAtTime(freq,ctx.currentTime);o.frequency.exponentialRampToValueAtTime(freq*1.28,ctx.currentTime+duration);g.gain.setValueAtTime(.07,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+duration);o.connect(g);g.connect(master);o.start();o.stop(ctx.currentTime+duration+.02)}
function railImpactMix(impact){
 // collisionFeedback passes normal impact speed (not vehicle speed). Below 2 it
 // is a light scrape; 2–6 crossfades with equal power; above 6 is the medium hit.
 const level=clamp(Number.isFinite(impact)?impact:.7,.7,10),blend=clamp((level-2)/4,0,1);
 return {level,blend,light:Math.cos(blend*Math.PI/2),hit:Math.sin(blend*Math.PI/2),gain:clamp(.045+level*.022,.06,.3)};
}
function playRailImpact(impact){
 if(!railAudioReady())return false;
 const mix=railImpactMix(impact),{ctx,master}=audio,t=ctx.currentTime,started=[];
 try{
  for(const [kind,weight] of [['light-scrape',mix.light],['medium-hit',mix.hit]]){
   if(weight<.001)continue;
   const src=ctx.createBufferSource(),gain=ctx.createGain();
   src.buffer=railAudio.buffers[kind];gain.gain.setValueAtTime(mix.gain*weight,t);src.connect(gain);gain.connect(master);src.start(t);started.push(src);
  }
 }catch(e){
  // A partially started sample is still louder evidence than a second copy of
  // the fallback; stop what began and report handled so the caller does not double-play.
  for(const src of started){try{src.stop(ctx.currentTime)}catch(_){}}
 }
 return started.length>0;
}
function impactSound(kind,impact){
 if(!sound||!audio)return;
 if(kind==='rail'&&playRailImpact(impact))return;
 const {ctx,master,noise}=audio,strength=clamp(Number.isFinite(impact)?impact:0,0,20),src=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),g=ctx.createGain(),t=ctx.currentTime;src.buffer=noise;filter.type='bandpass';filter.frequency.value=kind==='rail'?1400:kind==='cone'?450:700;filter.Q.value=kind==='rail'?1.5:.6;g.gain.setValueAtTime(Math.min(.3,.035+strength*.018),t);g.gain.exponentialRampToValueAtTime(.001,t+.16);src.connect(filter);filter.connect(g);g.connect(master);src.start();src.stop(t+.20);if(kind==='rail'){const o=ctx.createOscillator(),gain=ctx.createGain();o.type='triangle';o.frequency.setValueAtTime(330,t);o.frequency.exponentialRampToValueAtTime(140,t+.15);gain.gain.setValueAtTime(.07,t);gain.gain.exponentialRampToValueAtTime(.001,t+.2);o.connect(gain);gain.connect(master);o.start();o.stop(t+.21)}}
function updateAudio(){if(!audio)return;const a=audio,t=a.ctx.currentTime,running=state==='running',speed=player.speed,gear=Math.min(5,Math.floor(speed/9)),rpm=48+speed*2.2+(speed%9)*5;
 a.master.gain.setTargetAtTime(sound?.48*musicSettings.sfxVolume:0,t,.05);
 const volume=running?.012+Math.min(.04,speed*.0007)+(input.gas?.013:0):.0;
 a.engineGain.gain.setTargetAtTime(volume,t,.07);a.engineFilter.frequency.setTargetAtTime(550+speed*25+(input.gas?500:0),t,.12);
 const shift=gear!==a.gear?.80:1;a.gear=gear;a.engine1.frequency.setTargetAtTime(rpm*shift,t,.045);a.engine2.frequency.setTargetAtTime(rpm*1.5*shift,t,.065);a.sub.frequency.setTargetAtTime(rpm*.5,t,.07);
 a.wind.gain.gain.setTargetAtTime(running?Math.pow(speed/65,2)*.12:0,t,.15);a.wind.filter.frequency.setTargetAtTime(700+speed*25,t,.12);
 const slip=Math.abs(wrapAngle(player.yaw-player.velocityYaw)),braking=input.brake&&speed>5,scrub=player.jump<.1?Math.min(1,(player.drifting?slip*1.8:Math.max(0,slip-.18)*2)+(braking?.55:0)):0;
 a.tire.gain.gain.setTargetAtTime(running?scrub*.075:0,t,.045);a.tire.filter.frequency.setTargetAtTime(1300+speed*24+Math.sin(gameTime*40)*90,t,.05);
 a.turbo.gain.gain.setTargetAtTime(running?player.boostBlend*.075:0,t,.10);a.turbo.filter.frequency.setTargetAtTime(1600+player.boostBlend*2400,t,.12);
 if(running&&player.boostActive&&!a.oldBoost)tone(340,.17);a.oldBoost=player.boostActive;a.oldSpeed=speed;
}
function jetSound(kind){
 if(!sound||!audio)return;const {ctx,master,noise}=audio,t=ctx.currentTime,src=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain(),long=kind==='nitro'||kind==='combo',duration=long?.48:kind==='drift'?.12:.23;
 src.buffer=noise;filter.type=kind==='land'?'lowpass':'bandpass';filter.Q.value=.75;filter.frequency.setValueAtTime(kind==='land'?300:long?650:1500,t);filter.frequency.exponentialRampToValueAtTime(long?5500:700,t+duration);gain.gain.setValueAtTime(.001,t);gain.gain.linearRampToValueAtTime(long?.19:.10,t+.025);gain.gain.exponentialRampToValueAtTime(.001,t+duration);src.connect(filter);filter.connect(gain);gain.connect(master);src.start();src.stop(t+duration+.03);
 if(kind==='combo'||kind==='small')tone(kind==='combo'?1080:820,.08);
}
