import {createThreeBackend} from './render-three.js';

// Runs before game/input listeners bind to the canvas. A canvas whose WebGL
// context was acquired cannot switch to 2D after renderer construction fails.
export function initializeRendering(canvas, options={}, createBackend=createThreeBackend){
 const threeBackend=createBackend(canvas,options);
 if(threeBackend)return {canvas,threeBackend,software:false,softwareContext:null};
 const context2d=element=>{try{return element.getContext('2d')}catch{return null}};
 let softwareContext=context2d(canvas);
 if(!softwareContext){
  const replacement=canvas.cloneNode(false);
  softwareContext=context2d(replacement);
  if(!softwareContext)throw new Error('无法初始化 WebGL 或 Canvas 显示，请刷新页面或更换支持的浏览器。');
  canvas.replaceWith(replacement);canvas=replacement;
 }
 return {canvas,threeBackend:null,software:true,softwareContext};
}
