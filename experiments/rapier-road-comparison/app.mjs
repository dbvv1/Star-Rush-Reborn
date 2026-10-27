import {RoadComparison} from './vehicle.mjs';
import {ComparisonView} from './render.mjs';
import {CONFIG as C} from './config.mjs';
import sky from './.generated/sky.json';
const $=id=>document.getElementById(id),held=new Set(),listeners=[];
let sim,view,raf=0,last=0,closed=false;
const listen=(target,type,fn,options)=>{target.addEventListener(type,fn,options);listeners.push(()=>target.removeEventListener(type,fn,options));};
const input=()=>({gas:held.has('KeyW')||held.has('ArrowUp')?1:0,brake:held.has('KeyS')||held.has('ArrowDown')||held.has('Space')?1:0,
  steer:(held.has('KeyD')||held.has('ArrowRight')?1:0)-(held.has('KeyA')||held.has('ArrowLeft')?1:0),reverse:held.has('KeyX')?1:0});
function clearInput(){held.clear();}
function pause(value=!sim.paused){clearInput();sim.setPaused(value);last=0;$('pause').textContent=value?'继续':'暂停';$('state').textContent=value?'已暂停（物理不追赶）':'同弯试驾 · 无成绩写入';}
function reset(){clearInput();sim.reset();view.resetCamera();last=0;$('pause').textContent='暂停';$('state').textContent='已回到 170 m；车速、角速度、悬挂缓存已清零';}
function close(){if(closed)return;closed=true;cancelAnimationFrame(raf);clearInput();for(const remove of listeners)remove();view?.dispose();sim?.dispose();$('exit-screen').hidden=false;$('controls').hidden=true;}
function fail(error){close();$('exit-title').textContent='候选无法继续';$('exit-note').textContent=error.message;console.error(error);}
function frame(now){if(closed)return;try{const dt=last?Math.min((now-last)/1000,C.maxFrame):0;last=now;sim.advance(dt,input());view.render(sim,dt);
  const c=sim.current,speed=Math.hypot(c.velocity.x,c.velocity.z)*3.6,ground=c.wheels.filter(w=>w.contact).length;
  $('speed').textContent=speed.toFixed(0);$('telemetry').textContent=`s ${sim.projection.s.toFixed(1)} m · 横距 ${sim.projection.l.toFixed(2)} m · 接地 ${ground}/4 · ${sim.contacts?'碰撞接触':'无车身接触'} · 顺序点 ${sim.checkpointIndex}/${C.checkpoints.length}`;
  if(!sim.paused&&(sim.projection.s>=C.endS||c.position.y< -10)){$('state').textContent=c.position.y< -10?'已离开测试道路：按 R 显式复位（不吸回赛道）':'片段结束，可继续驾驶或按 R 重来；不记录成绩';}
  raf=requestAnimationFrame(frame);
}catch(error){fail(error);}}
try {
  sim=await RoadComparison.create();view=new ComparisonView($('scene'),sim,sky);
  $('loading').hidden=true;$('parameters').textContent=JSON.stringify(C,null,2);
  listen(window,'keydown',e=>{if(['KeyW','KeyS','KeyA','KeyD','KeyX','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','KeyR','Escape'].includes(e.code)){e.preventDefault();if(e.repeat)return;if(e.code==='Escape')pause();else if(e.code==='KeyR')reset();else held.add(e.code);}});
  listen(window,'keyup',e=>held.delete(e.code));
  listen(window,'blur',()=>pause(true));listen(document,'visibilitychange',()=>{if(document.hidden)pause(true);});
  listen(window,'pagehide',close);listen($('scene'),'webglcontextlost',e=>{e.preventDefault();fail(Error('WebGL 上下文丢失。资源已释放，请重新打开候选。'));});
  listen($('pause'),'click',()=>pause());listen($('reset'),'click',reset);listen($('exit'),'click',close);
  for(const button of document.querySelectorAll('[data-key]')) {
    const key=button.dataset.key;
    listen(button,'pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);held.add(key);});
    const release=()=>held.delete(key);listen(button,'pointerup',release);listen(button,'pointercancel',release);listen(button,'lostpointercapture',release);
  }
  // Read-only diagnostic snapshot. No control/teleport/network/storage API exposed.
  Object.defineProperty(window,'rapierComparison',{value:Object.freeze({snapshot:()=>closed?{closed:true}:{...sim.snapshot(),s:sim.projection.s,l:sim.projection.l,ticks:sim.ticks,paused:sim.paused,checkpoints:sim.checkpointIndex},version:'rapier-0.21.0-unadopted'})});
  raf=requestAnimationFrame(frame);
}catch(error){fail(error);}
