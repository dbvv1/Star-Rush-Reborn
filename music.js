// Original instrumental sequencer + user-selected local audio. Commercial
// classics are played by the external licensed platform's embedded player.
const musicSettings={enabled:true,volume:.4,sfxVolume:.75};
try{Object.assign(musicSettings,JSON.parse(localStorage.getItem('star-rush-audio')||'{}'))}catch(e){}
const music={mode:'synth',bus:null,step:0,next:0,files:[],index:0,url:null,element:null};
function saveAudioSettings(){try{localStorage.setItem('star-rush-audio',JSON.stringify(musicSettings))}catch(e){}}
function ensureMusic(){
 audioInit();if(!audio)return false;if(audio.ctx.state==='suspended')audio.ctx.resume().catch(()=>{});if(music.bus)return true;
 music.bus=audio.ctx.createGain();const comp=audio.ctx.createDynamicsCompressor();comp.threshold.value=-18;comp.ratio.value=3;music.bus.connect(comp);comp.connect(audio.ctx.destination);music.next=audio.ctx.currentTime+.08;
 return true;
}
function musicNote(freq,at,duration,type,volume,endFreq=0){
 const ctx=audio.ctx,o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,at);if(endFreq)o.frequency.exponentialRampToValueAtTime(endFreq,at+duration);g.gain.setValueAtTime(.001,at);g.gain.exponentialRampToValueAtTime(volume,at+.008);g.gain.exponentialRampToValueAtTime(.001,at+duration);o.connect(g);g.connect(music.bus);o.start(at);o.stop(at+duration+.02);
}
function musicNoise(at,duration,frequency,volume){const c=audio.ctx,s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=audio.noise;f.type='highpass';f.frequency.value=frequency;g.gain.setValueAtTime(volume,at);g.gain.exponentialRampToValueAtTime(.001,at+duration);s.connect(f);f.connect(g);g.connect(music.bus);s.start(at);s.stop(at+duration+.02)}
function scheduleBeat(step,t){
 const beat=60/148/4,bar=Math.floor(step/16),six=step%16,roots=[45,41,48,43],root=roots[Math.floor(bar/2)%4],hz=n=>440*Math.pow(2,(n-69)/12);
 if(six%4===0)musicNote(135,t,.18,'sine',.38,42);
 if(six===4||six===12){musicNoise(t,.13,1200,.12);musicNote(180,t,.07,'triangle',.10,70)}
 if(six%2===0)musicNoise(t,.035,7500,six%4===2?.065:.04);
 if(six%2===0){const bass=root+(six===14?12:0);musicNote(hz(bass-12),t,beat*1.5,'sawtooth',.045);musicNote(hz(bass-12),t,beat*1.5,'sine',.10)}
 const arp=[0,7,12,15,12,7,10,7],degree=arp[Math.floor(six/2)%8];
 if(six%2===1)musicNote(hz(root+24+degree),t,.16,'triangle',.045);
 if(six===0){for(const n of [0,3,7])musicNote(hz(root+12+n),t,beat*12,'triangle',.018)}
 if(bar%4>=2&&six%4===2){const melody=[12,15,19,22,19,15,14,10][Math.floor(six/4)+4*(bar%2)];musicNote(hz(root+24+melody),t,beat*2.5,'sine',.055)}
}
function updateMusic(){
 if(!audio)return;if(!ensureMusic())return;
 const active=musicSettings.enabled&&sound&&!document.hidden&&music.mode!=='classic',t=audio.ctx.currentTime;
 music.bus.gain.setTargetAtTime(active?musicSettings.volume*.42:0,t,.07);
 if(music.mode==='synth'&&active){if(music.next<t-.15)music.next=t+.05;let count=0;while(music.next<t+.18&&count++<8){scheduleBeat(music.step++,music.next);music.next+=60/148/4}}
 if(music.element){if(active&&music.mode==='local'){if(music.element.paused)music.element.play().catch(()=>{})}else if(!music.element.paused)music.element.pause()}
}
function setMusicMode(mode){music.mode=mode;ensureMusic();$('synthMusic').classList.toggle('selected',mode==='synth');$('classicMusic').classList.toggle('selected',mode==='classic');$('classicPlayer').hidden=mode!=='classic';$('localMusicControls').hidden=mode!=='local';$('musicToggle').hidden=mode==='classic';if(mode==='classic'){
 if(!$('spotifyPlayer').src)$('spotifyPlayer').src='https://open.spotify.com/embed/track/'+$('classicTrack').value+'?utm_source=generator&theme=0';$('nowPlaying').textContent='经典外语歌单 · 在下方播放器点击播放';
 }else{$('spotifyPlayer').removeAttribute('src');$('nowPlaying').textContent=mode==='local'?(music.files[music.index]?.name||'请选择音乐文件'):'STARLINE · 原创电子竞速配乐'}
}
function playLocal(index){
 if(!music.files.length||!ensureMusic())return;music.index=(index+music.files.length)%music.files.length;
 if(!music.element){music.element=new Audio();music.element.preload='auto';const source=audio.ctx.createMediaElementSource(music.element);source.connect(music.bus);music.element.onended=()=>playLocal(music.index+1);music.element.onerror=()=>{$('nowPlaying').textContent='此音频无法解码，请换一首 MP3 / OGG / WAV'}}
 music.element.pause();if(music.url)URL.revokeObjectURL(music.url);music.url=URL.createObjectURL(music.files[music.index]);music.element.src=music.url;musicSettings.enabled=true;setMusicMode('local');music.element.play().catch(()=>{$('nowPlaying').textContent='点击“播放音乐”后继续'});$('musicToggle').textContent='暂停音乐';
}
let panelResume=false;
function openPanel(id){const resume=state==='running'&&!(typeof net!=='undefined'&&net.room);panelResume=panelResume||resume;if(resume)pauseGame();for(const other of ['helpPanel','musicPanel','roomPanel','rankPanel','garagePanel','settingsPanel'])if(other!==id)$(other).hidden=true;clearKeys();$(id).hidden=false}
function closePanel(id){$(id).hidden=true;if(panelResume&&state==='paused')pauseGame();panelResume=false}
$('musicBtn').onclick=()=>{ensureMusic();openPanel('musicPanel')};$('closeMusic').onclick=()=>closePanel('musicPanel');
$('helpBtn').onclick=$('welcomeHelp').onclick=()=>openPanel('helpPanel');$('closeHelp').onclick=()=>closePanel('helpPanel');
$('synthMusic').onclick=()=>setMusicMode('synth');$('classicMusic').onclick=()=>setMusicMode('classic');
$('musicFiles').onchange=e=>{music.files=Array.from(e.target.files||[]);playLocal(0)};
$('nextSong').onclick=()=>playLocal(music.index+1);$('previousSong').onclick=()=>playLocal(music.index-1);
$('musicToggle').onclick=()=>{ensureMusic();musicSettings.enabled=!musicSettings.enabled;$('musicToggle').textContent=musicSettings.enabled?'暂停音乐':'播放音乐';saveAudioSettings()};
$('musicVolume').value=Math.round(musicSettings.volume*100);$('sfxVolume').value=Math.round(musicSettings.sfxVolume*100);$('musicToggle').textContent=musicSettings.enabled?'暂停音乐':'播放音乐';
$('musicVolume').oninput=e=>{musicSettings.volume=Number(e.target.value)/100;saveAudioSettings()};$('sfxVolume').oninput=e=>{musicSettings.sfxVolume=Number(e.target.value)/100;saveAudioSettings()};

$('classicTrack').onchange=()=>{setMusicMode('classic');$('spotifyPlayer').src='https://open.spotify.com/embed/track/'+$('classicTrack').value+'?utm_source=generator&theme=0'};
