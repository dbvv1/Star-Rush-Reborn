// Opt-in capture adapter. Ordinary play neither publishes hooks nor changes input.
if(captureRuntime.active){
 const options=captureRuntime.options;
 game.style.width=options.preset.width+'px';game.style.height=options.preset.height+'px';resize();
 const style=document.createElement('style');style.id='captureStyle';
 style.textContent='*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}#captureExit{position:absolute;z-index:30;left:16px;bottom:8px;padding:4px 8px;background:#172039;color:#fff;font:11px sans-serif}';
 document.head.appendChild(style);
 const exit=document.createElement('a');exit.id='captureExit';exit.href=exitCaptureUrl(window.location.href);
 exit.textContent='拍摄模式 · 自动输入，非手感验收 · 返回正常游戏';document.body.appendChild(exit);
 // Keep live keyboard/touch and hardware gamepads out of a reproducible replay.
 const block=event=>{if(event.target===exit)return;event.preventDefault();event.stopImmediatePropagation();};
 const blocked=['keydown','keyup','pointerdown','pointerup','click','change','input'];
 for(const type of blocked)window.addEventListener(type,block,true);
 Object.assign(settings,defaultSettings,{quality:'high',ghost:false,fov:options.preset.fov});
 profile={name:'Capture Driver',paint:'#83cde4',car:'Mint Comet'};
 activeTrackId=options.preset.track;raceMode='circuit';eventType='practice';start(false);
 cameraFov=options.preset.fov;lastFrame=0;lastPerfTime=0;
 const inputStep=()=>{
  clearKeys();demoDriving=options.input==='road-tour';
  if(options.input==='accelerate-brake'){
   const t=gameClock.now()/1000;
   input.gas=t>=3.05&&t<7;input.brake=t>=7&&t<9;
  }
 };
 inputStep();frame(0,0,false);
 const rendererInfo=readRendererInfo(software?null:threeBackend.renderer.getContext());
 let disposed=false;
 const publishError=error=>{if(disposed)return;window.__shot={ready:false,error:String(error.message||error),shot:options.shot,renderer:rendererInfo.renderer,rendererInfo};fail('拍摄失败：'+(error.message||error));};
 const controller=createCaptureController({runtime:captureRuntime,
  ready:async()=>{
   const status=software?{status:'canvas-fallback'}:await threeBackend.assetsReady;
   if(status.status==='failed'||status.status==='disposed')throw Error('Sky asset not ready: '+status.status);
   if(document.fonts?.ready)await document.fonts.ready;
   frame(0,0,false); // Rebuild the scene after decoded sky changes its landscape suffix.
  },
  step:(now,dt)=>{inputStep();frame(now,dt,false);},
  render:()=>{if(!software&&threeBackend.renderer.getContext().isContextLost())throw Error('WebGL context lost');renderCurrentFrame();},
  snapshot:()=>({renderer:rendererInfo.renderer,rendererInfo,track:activeTrackId,drivingRevision,
   viewport:{width,height,dpr:devicePixelRatio||1},quality:settings.quality,sky:software?'not-used':threeBackend.skyReady?'ready':'disabled',
   state,elapsed,player:{s:player.s,l:player.l,yaw:player.yaw,speed:player.speed},
   camera:{...captureView(currentView),fov:options.preset.fov},audio:'disabled',evidence:'deterministic-scene-only'}),
 });
 window.__shot={ready:false,shot:options.shot};
 window.__shotNext=async()=>{
  if(!window.__shot?.ready)throw Error('Capture frame is not ready');
  window.__shot={...window.__shot,ready:false};
  try{return window.__shot=await controller.next();}catch(error){publishError(error);throw error;}
 };
 window.__shotExit=()=>window.location.replace(exit.href);
 const dispose=()=>{
  if(disposed)return;disposed=true;controller.dispose();clearKeys();
  for(const type of blocked)window.removeEventListener(type,block,true);
  window.removeEventListener('pagehide',dispose);delete window.__shotNext;delete window.__shotExit;
  delete window.__shot;style.remove();exit.remove();
 };
 window.addEventListener('pagehide',dispose);
 window.addEventListener('pageshow',event=>{if(event.persisted)window.location.reload();});
 void controller.start().then(value=>{if(!disposed)window.__shot=value;}).catch(publishError);
}
