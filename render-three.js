import * as THREE from 'three';
import {createSkyPanorama} from './sky-panorama.js';
export function createThreeBackend(canvas,{shading='toon',hemisphereIntensity=2.2,skyPanorama=null,capture=false,coastalScene=false,onSceneFailure=message=>console.warn(message)}={}){
 if(!['toon','lambert'].includes(shading))throw new Error('Unknown shading model: '+shading);
 if(!Number.isFinite(hemisphereIntensity)||hemisphereIntensity<0)throw new Error('Invalid hemisphere intensity');
 let renderer,phase='context';
 try{
  const context=canvas.getContext('webgl2',{antialias:true,alpha:false,...(capture?{preserveDrawingBuffer:true}:{})});
  if(!context){console.warn('[Star Rush WebGL] webgl2 context unavailable; returning null for fallback handling');return null}
  phase='renderer';renderer=new THREE.WebGLRenderer({canvas,context,antialias:true,alpha:false,powerPreference:'default',preserveDrawingBuffer:capture});
 }catch(e){console.warn('[Star Rush WebGL] '+phase+' initialization failed; returning null for fallback handling:',e?.message||String(e));return null}
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.setPixelRatio(capture?1:Math.min(devicePixelRatio||1,1.5));
 const scene=new THREE.Scene();scene.fog=new THREE.Fog('#cbddec',125,460);
 const camera=new THREE.PerspectiveCamera(62,1,.12,850),hemi=new THREE.HemisphereLight('#e7f4ff','#a08ba5',hemisphereIntensity),sun=new THREE.DirectionalLight('#fff0de',2.4);sun.position.set(-30,60,25);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-55,right:55,top:45,bottom:-45,near:1,far:160});sun.shadow.bias=-.0004;scene.add(hemi,sun,sun.target);
 const tones=shading==='toon'?new THREE.DataTexture(new Uint8Array([95,145,195,245]),4,1,THREE.RedFormat):null;if(tones){tones.minFilter=THREE.NearestFilter;tones.magFilter=THREE.NearestFilter;tones.needsUpdate=true;}
 let sceneFailed=false,shaderFailed=false;const baselineShaderError=renderer.debug?.onShaderError;if(coastalScene&&renderer.debug)renderer.debug.onShaderError=(...args)=>{if(!sceneFailed)shaderFailed=true;else baselineShaderError?.(...args);};
 const sceneUniforms={active:{value:0},origin:{value:new THREE.Vector3()},time:{value:0}};
 const batches=new Map(),matrix=new THREE.Matrix4(),materials=new Map(),geometries=new Map();
 const sky=new THREE.Mesh(new THREE.SphereGeometry(650,16,8),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{top:{value:new THREE.Color('#8fbee6')},bottom:{value:new THREE.Color('#f0e8f0')}},vertexShader:'varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'varying vec3 vDirection;uniform vec3 top,bottom;void main(){float h=smoothstep(-.05,.8,normalize(vDirection).y);gl_FragColor=vec4(mix(bottom,top,h),1.0);}'}));sky.renderOrder=-100;scene.add(sky);
 const panorama=createSkyPanorama(scene,skyPanorama);
 const releaseSky=()=>{panorama?.dispose();globalThis.removeEventListener?.('pagehide',onPageHide);canvas.removeEventListener?.('webglcontextlost',releaseSky);};
 const onPageHide=event=>{if(!event.persisted)releaseSky();};
 if(panorama){globalThis.addEventListener?.('pagehide',onPageHide);canvas.addEventListener?.('webglcontextlost',releaseSky);}
 let nextId=1,lastW=0,lastH=0,lastScale=0,lastFrame=0,frameAverage=16.7,slowFrames=0,fastFrames=0,autoTier=2;const tiers=['low','medium','high'];
 function geometry(mesh,paint){
  if(!mesh.renderId)mesh.renderId=nextId++;const key=mesh.renderId+':'+(mesh.paintable&&paint?paint:'');if(geometries.has(key))return geometries.get(key);
  const data=mesh.sourceData,positions=[],normals=[],colors=[];const tint=paint?new THREE.Color(paint):null;
  for(let i=0;i<data.length;i+=10){positions.push(data[i],data[i+1],data[i+2]);normals.push(data[i+3],data[i+4],data[i+5]);const r=data[i+6],g=data[i+7],b=data[i+8],isPaint=mesh.paintable&&tint&&g-r>.14&&b-r>.2;colors.push(isPaint?tint.r:r,isPaint?tint.g:g,isPaint?tint.b:b)}
  const g=new THREE.BufferGeometry();g.userData.surfaceKind=mesh.surfaceKind||(mesh.coastStreet?'facade':'plain');g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.setIndex(Array.from(mesh.sourceIndices));g.computeBoundingSphere();geometries.set(key,g);mesh.onDispose=()=>{for(const [id,geo] of geometries)if(id.startsWith(mesh.renderId+':')){for(const [bk,batch] of batches)if(batch.geometry===geo){scene.remove(batch);batch.dispose();batches.delete(bk)}geo.dispose();geometries.delete(id)}};return g;
 }
 function render(list,view,width,height,fov,options={},now=performance.now()){
  if(lastFrame){const frame=now-lastFrame;if(frame<100)frameAverage+=(frame-frameAverage)*.035}lastFrame=now;if(options.quality==='auto'){if(frameAverage>23){slowFrames++;fastFrames=0}else if(frameAverage<16.9){fastFrames++;slowFrames=0}else {slowFrames=0;fastFrames=0}if(slowFrames>90&&autoTier>0){autoTier--;slowFrames=0}if(fastFrames>360&&autoTier<2){autoTier++;fastFrames=0}}const quality=options.quality==='auto'?tiers[autoTier]:options.quality;
  if(capture){width=1280;height=720;}
  const scale=capture?1:quality==='low'?1:quality==='medium'?1.2:Math.min(devicePixelRatio||1,1.5);if(scale!==lastScale){renderer.setPixelRatio(scale);lastScale=scale}
  if(width!==lastW||height!==lastH){renderer.setSize(width,height,false);lastW=width;lastH=height}camera.aspect=width/height;camera.fov=fov;camera.updateProjectionMatrix();camera.position.fromArray(view.eye);camera.lookAt(new THREE.Vector3(...view.target));sky.position.copy(camera.position);panorama?.update(camera);sky.visible=!panorama?.active;
  const sceneActive=coastalScene&&!sceneFailed&&options.coastalSceneActive===true;
  if(coastalScene){if(panorama)panorama.mesh.visible=panorama.active&&!sceneActive;sky.visible=sceneActive||!panorama?.active;}
  sceneUniforms.active.value=sceneActive?1:0;sceneUniforms.origin.value.fromArray(view.origin||[0,0,0]);sceneUniforms.time.value=now/1000;
  if(coastalScene){
   hemi.color.set(sceneActive?'#b6d9ef':'#e7f4ff');hemi.groundColor.set(sceneActive?'#786b51':'#a08ba5');hemi.intensity=sceneActive?.58:hemisphereIntensity;
   sun.color.set(sceneActive?'#ffddb0':'#fff0de');sun.intensity=sceneActive?2.7:2.4;
   scene.fog.color.set(sceneActive?'#afced8':'#cbddec');scene.fog.near=sceneActive?190:125;scene.fog.far=sceneActive?590:460;
   renderer.toneMappingExposure=sceneActive?.92:1;
   sky.material.uniforms.top.value.set(sceneActive?'#4b91b6':'#8fbee6');sky.material.uniforms.bottom.value.set(sceneActive?'#f4dfbb':'#f0e8f0');
   if(sceneActive){sun.position.set(view.target[0]-55,view.target[1]+70,view.target[2]+35);sun.target.position.fromArray(view.target);}else{sun.position.set(-30,60,25);sun.target.position.set(0,0,0);}
  }
  const desired=new Map();for(const d of list){if(!d.mesh.sourceIndices.length)continue;const g=geometry(d.mesh,d.tint),opacity=d.opacity??1,key=g.uuid+':'+d.shadow+':'+opacity;let group=desired.get(key);if(!group){group={geometry:g,shadow:d.shadow,opacity,items:[]};desired.set(key,group)}group.items.push(d)}
  for(const b of batches.values())b.visible=false;
  for(const [key,g] of desired){let batch=batches.get(key);if(!batch||batch.instanceMatrix.count<g.items.length){if(batch){scene.remove(batch);batch.dispose()}const materialKey=coastalScene?g.opacity+':'+g.geometry.userData.surfaceKind:g.opacity;let material=materials.get(materialKey);if(!material){const params={vertexColors:true,transparent:g.opacity<1,opacity:g.opacity,depthWrite:g.opacity>=1};material=shading==='lambert'?new THREE.MeshLambertMaterial(params):new THREE.MeshToonMaterial({...params,gradientMap:tones});if(coastalScene&&!sceneFailed&&g.opacity===1)decorateSurface(material,g.geometry.userData.surfaceKind);materials.set(materialKey,material)}batch=new THREE.InstancedMesh(g.geometry,material,Math.max(4,g.items.length+8));batch.instanceMatrix.setUsage(THREE.DynamicDrawUsage);batch.frustumCulled=true;batch.receiveShadow=g.opacity>=1;scene.add(batch);batches.set(key,batch)}batch.count=g.items.length;batch.castShadow=g.shadow&&quality!=='low';batch.visible=true;for(let i=0;i<g.items.length;i++){matrix.fromArray(g.items[i].m);batch.setMatrixAt(i,matrix)}batch.instanceMatrix.needsUpdate=true;batch.computeBoundingSphere()}
  renderer.shadowMap.enabled=quality!=='low';renderer.render(scene,camera);
  if(shaderFailed&&!sceneFailed){
   sceneFailed=true;shaderFailed=false;if(renderer.debug)renderer.debug.onShaderError=baselineShaderError;
   for(const material of materials.values()){material.onBeforeCompile=()=>{};material.customProgramCacheKey=()=>'';material.needsUpdate=true;}
   onSceneFailure('海岸视听候选初始化失败，已回退原场景。');
   return render(list,view,width,height,fov,options,now);
  }
  return {drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,effectiveQuality:quality};
 }
 function decorateSurface(material,kind){
  if(!['sea','landscape','facade'].includes(kind))return;
  material.customProgramCacheKey=()=> 'coast-afternoon-v1:'+kind;
  material.onBeforeCompile=shader=>{
   shader.uniforms.coastActive=sceneUniforms.active;shader.uniforms.coastOrigin=sceneUniforms.origin;shader.uniforms.coastTime=sceneUniforms.time;
   shader.vertexShader='varying vec3 coastPosition;\nuniform vec3 coastOrigin;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>',`#include <worldpos_vertex>
    vec4 coastWorld=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     coastWorld=instanceMatrix*coastWorld;
    #endif
    coastPosition=(modelMatrix*coastWorld).xyz+coastOrigin;`);
   shader.fragmentShader='varying vec3 coastPosition;\nuniform float coastActive;\nuniform float coastTime;\n'+shader.fragmentShader;
   const detail=kind==='sea'?`
    float wave=sin(coastPosition.x*.17+coastPosition.z*.11+coastTime*.42)*sin(coastPosition.z*.27-coastTime*.31);
    float glint=pow(max(0.0,wave),12.0);
    diffuseColor.rgb=mix(vec3(.055,.28,.32),vec3(.12,.42,.46),wave*.5+.5)+glint*.10;`
    :kind==='landscape'?`
    float organic=smoothstep(.01,.09,vColor.g-vColor.b)*smoothstep(-.02,.04,vColor.g-vColor.r)*smoothstep(-.6,.6,coastPosition.y);
    float patch=.5+.5*sin(coastPosition.x*.19+sin(coastPosition.z*.13)*1.7)*sin(coastPosition.z*.23);
    float grain=sin(coastPosition.x*4.1)*sin(coastPosition.z*3.7);
    diffuseColor.rgb*=1.0+organic*((patch-.5)*.25+grain*.025);`
    :`
    float plaster=smoothstep(.16,.48,min(vColor.r,min(vColor.g,vColor.b)));
    float patina=.96+.04*sin(coastPosition.x*1.8+coastPosition.z*1.3)*sin(coastPosition.y*2.7);
    diffuseColor.rgb*=mix(1.0,patina,plaster);`;
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\nif(coastActive>0.5){'+detail+'}');
  };
 }
 return {render,renderer,scene,assetsReady:panorama?.ready??Promise.resolve({status:'disabled'}),get skyReady(){return Boolean(panorama?.active);},disposeSky:releaseSky};
}
