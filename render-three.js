import * as THREE from 'three';
import {createSkyPanorama} from './sky-panorama.js';
export function createThreeBackend(canvas,{shading='toon',hemisphereIntensity=2.2,skyPanorama=null,capture=false}={}){
 if(!['toon','lambert','standard'].includes(shading))throw new Error('Unknown shading model: '+shading);
 if(!Number.isFinite(hemisphereIntensity)||hemisphereIntensity<0)throw new Error('Invalid hemisphere intensity');
 let renderer,phase='context';
 try{
  const context=canvas.getContext('webgl2',{antialias:true,alpha:false,...(capture?{preserveDrawingBuffer:true}:{})});
  if(!context){console.warn('[Star Rush WebGL] webgl2 context unavailable; returning null for fallback handling');return null}
  phase='renderer';renderer=new THREE.WebGLRenderer({canvas,context,antialias:true,alpha:false,powerPreference:'default',preserveDrawingBuffer:capture});
 }catch(e){console.warn('[Star Rush WebGL] '+phase+' initialization failed; returning null for fallback handling:',e?.message||String(e));return null}
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.NeutralToneMapping;renderer.toneMappingExposure=1.03;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.setPixelRatio(capture?1:Math.min(devicePixelRatio||1,1.5));
 const scene=new THREE.Scene();scene.fog=new THREE.Fog('#cfe2ef',150,560);
 // A tiny code-generated equirectangular gradient gives every standard
 // material a broad warm-sky/cool-ground reflection without an image asset.
 function gradientEnvironment(){
  if(typeof document==='undefined')return null;
  try{
   const surface=document.createElement('canvas');surface.width=128;surface.height=64;
   const ctx=surface.getContext('2d');if(!ctx)return null;
   const gradient=ctx.createLinearGradient(0,0,0,64);
   gradient.addColorStop(0,'#5ea9df');gradient.addColorStop(.34,'#a9dcf6');gradient.addColorStop(.52,'#fff3df');gradient.addColorStop(.64,'#efd6ad');gradient.addColorStop(1,'#7f9274');
   ctx.fillStyle=gradient;ctx.fillRect(0,0,128,64);
   const glow=ctx.createRadialGradient(30,27,2,30,27,25);
   glow.addColorStop(0,'rgba(255,248,219,.95)');glow.addColorStop(1,'rgba(255,248,219,0)');
   ctx.fillStyle=glow;ctx.fillRect(0,0,128,64);
   const texture=new THREE.CanvasTexture(surface);texture.mapping=THREE.EquirectangularReflectionMapping;texture.colorSpace=THREE.SRGBColorSpace;texture.needsUpdate=true;return texture;
  }catch{return null}
 }
 const environment=gradientEnvironment();if(environment){scene.environment=environment;scene.environmentIntensity=.62;}
 const camera=new THREE.PerspectiveCamera(62,1,.4,850),hemi=new THREE.HemisphereLight('#dff1ff','#e3c79b',hemisphereIntensity),sun=new THREE.DirectionalLight('#fff3df',shading==='standard'?2.45:2.4);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-36,right:36,top:26,bottom:-26,near:2,far:165});sun.shadow.camera.updateProjectionMatrix();sun.shadow.bias=-.00025;sun.shadow.normalBias=.035;sun.shadow.radius=2.6;sun.position.set(-30,60,25);scene.add(hemi,sun,sun.target);
 const tones=shading==='toon'?new THREE.DataTexture(new Uint8Array([95,145,195,245]),4,1,THREE.RedFormat):null;if(tones){tones.minFilter=THREE.NearestFilter;tones.magFilter=THREE.NearestFilter;tones.needsUpdate=true;}
 const batches=new Map(),matrix=new THREE.Matrix4(),materials=new Map(),geometries=new Map();
 const stripeTextures=new Map(),lightForward=new THREE.Vector3(),lightLeft=new THREE.Vector3(),worldUp=new THREE.Vector3(0,1,0);
 // Code-generated stripe maps keep the awnings graphic without external assets.
 function stripeTexture(mesh){
  if(!mesh.stripeTexture)return null;
  const key=mesh.stripeTexture.join('|')+'|'+(mesh.stripePattern||'vertical');if(stripeTextures.has(key))return stripeTextures.get(key);
  if(typeof document==='undefined'){stripeTextures.set(key,null);return null}
  try{
   const canvas=document.createElement('canvas');canvas.width=256;canvas.height=64;
   const ctx=canvas.getContext('2d');if(!ctx)throw Error('2d unavailable');
   ctx.fillStyle=mesh.stripeTexture[0];ctx.fillRect(0,0,256,64);
   ctx.fillStyle=mesh.stripeTexture[1];
   if(mesh.stripePattern==='diagonal'){
    ctx.save();ctx.translate(0,32);ctx.rotate(-Math.PI/4);
    for(let i=-5;i<10;i++)ctx.fillRect(i*54-12,-96,27,192);
    ctx.restore();
   }else for(let i=0;i<4;i++)ctx.fillRect(i*64,0,32,64);
   const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=THREE.RepeatWrapping;texture.wrapT=THREE.RepeatWrapping;texture.anisotropy=4;texture.needsUpdate=true;
   stripeTextures.set(key,texture);return texture;
  }catch{stripeTextures.set(key,null);return null}
 }
 // Wide, sparse foam arcs generated at runtime. The strip mesh carries a
 // repeating alpha map so the shoreline gets broken surf without new assets.
 function foamTexture(mesh){
  if(!mesh.foamTexture)return null;
  const key='foam'+(mesh.foamVariant||'');if(stripeTextures.has(key))return stripeTextures.get(key);
  if(typeof document==='undefined'){stripeTextures.set(key,null);return null}
  try{
   const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;
   const ctx=canvas.getContext('2d');if(!ctx)throw Error('2d unavailable');
   ctx.clearRect(0,0,256,256);ctx.lineCap='round';ctx.strokeStyle='#f7ffff';
   const arcs=[[-24,188,142,192,86],[36,142,178,118,58],[126,226,244,198,74],[188,86,318,116,64],[-38,64,88,40,52],[172,232,282,244,44]];
   for(let i=0;i<arcs.length;i++){const [x0,y0,x1,y1,r]=arcs[i];ctx.globalAlpha=i%3===0?.78:.5;ctx.lineWidth=i%2===0?15:10;ctx.beginPath();ctx.moveTo(x0,y0);ctx.quadraticCurveTo((x0+x1)*.5,y0-r,x1,y1);ctx.stroke()}
   ctx.globalAlpha=.34;ctx.lineWidth=5;for(let i=0;i<4;i++){const x=24+i*64;ctx.beginPath();ctx.moveTo(x,250);ctx.quadraticCurveTo(x+22,216,x+46,250);ctx.stroke()}
   const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=THREE.RepeatWrapping;texture.wrapT=THREE.RepeatWrapping;texture.anisotropy=4;texture.needsUpdate=true;
   stripeTextures.set(key,texture);return texture;
  }catch{stripeTextures.set(key,null);return null}
 }
 function meshRoughness(mesh){
  if(Number.isFinite(mesh.roughness))return mesh.roughness;
  if(!Number.isFinite(mesh.autoRoughness)){let sum=0,count=0;for(let i=9;i<mesh.sourceData.length;i+=10){sum+=mesh.sourceData[i];count++}mesh.autoRoughness=Math.min(.92,Math.max(.42,1-(sum/(count||1))*2.1))}
  return mesh.autoRoughness;
 }
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
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));if(mesh.stripeTexture||mesh.foamTexture){const uv=[],[su,sv]=mesh.uvScale||[.26,.34];for(let i=0;i<positions.length;i+=3)uv.push((positions[i]+positions[i+2])*su,positions[i+1]*sv);g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2))}g.setIndex(Array.from(mesh.sourceIndices));g.computeBoundingSphere();geometries.set(key,g);mesh.onDispose=()=>{for(const [id,geo] of geometries)if(id.startsWith(mesh.renderId+':')){for(const [bk,batch] of batches)if(batch.geometry===geo){scene.remove(batch);batch.dispose();batches.delete(bk)}geo.dispose();geometries.delete(id)}};return g;
 }
 function render(list,view,width,height,fov,options={},now=performance.now()){
  if(lastFrame){const frame=now-lastFrame;if(frame<100)frameAverage+=(frame-frameAverage)*.035}lastFrame=now;if(options.quality==='auto'){if(frameAverage>23){slowFrames++;fastFrames=0}else if(frameAverage<16.9){fastFrames++;slowFrames=0}else {slowFrames=0;fastFrames=0}if(slowFrames>90&&autoTier>0){autoTier--;slowFrames=0}if(fastFrames>360&&autoTier<2){autoTier++;fastFrames=0}}const quality=options.quality==='auto'?tiers[autoTier]:options.quality;
  if(capture){width=1280;height=720;}
  const scale=capture?1:quality==='low'?1:quality==='medium'?1.2:Math.min(devicePixelRatio||1,1.5);if(scale!==lastScale){renderer.setPixelRatio(scale);lastScale=scale}
  if(width!==lastW||height!==lastH){renderer.setSize(width,height,false);lastW=width;lastH=height}camera.aspect=width/height;camera.fov=fov;camera.updateProjectionMatrix();camera.position.fromArray(view.eye);camera.lookAt(new THREE.Vector3(...view.target));
  // The sun rides with the driver view: warm key light from the left front and
  // above. The shadow frustum follows the visible range: tight around the car
  // in chase view, wider for the elevated survey/view camera.
  const highView=Math.abs(view.eye[1])>45;
  const shadowHalfW=highView?112:38,shadowHalfH=highView?82:28,shadowFar=highView?280:168;
  const shadowCamera=sun.shadow.camera;
  if(shadowCamera.right!==shadowHalfW||shadowCamera.top!==shadowHalfH){Object.assign(shadowCamera,{left:-shadowHalfW,right:shadowHalfW,top:shadowHalfH,bottom:-shadowHalfH,near:2,far:shadowFar});shadowCamera.updateProjectionMatrix();}
  lightForward.fromArray(view.target).sub(camera.position);if(lightForward.lengthSq()<1e-6)lightForward.set(0,0,-1);else lightForward.normalize();
  lightLeft.crossVectors(worldUp,lightForward);if(lightLeft.lengthSq()<1e-6)lightLeft.set(1,0,0);else lightLeft.normalize();
  sun.position.copy(camera.position).addScaledVector(lightLeft,34).addScaledVector(lightForward,30).addScaledVector(worldUp,62);
  sun.target.position.copy(camera.position).addScaledVector(lightForward,10);sun.target.updateMatrixWorld();
  scene.fog.near=highView?900:150;scene.fog.far=highView?1400:560;
  sky.position.copy(camera.position);panorama?.update(camera);sky.visible=!panorama?.active;
  const desired=new Map();for(const d of list){if(!d.mesh.sourceIndices.length)continue;const g=geometry(d.mesh,d.tint),opacity=d.opacity??1,key=g.uuid+':'+d.shadow+':'+opacity;let group=desired.get(key);if(!group){group={geometry:g,shadow:d.shadow,opacity,items:[]};desired.set(key,group)}group.items.push(d)}
  for(const b of batches.values())b.visible=false;
  for(const [key,g] of desired){let batch=batches.get(key);if(!batch||batch.instanceMatrix.count<g.items.length){if(batch){scene.remove(batch);batch.dispose()}const sample=g.items[0].mesh,roughness=meshRoughness(sample),foam=Boolean(sample.foamTexture),special=sample.stripeTexture?sample.stripeTexture.join('|')+'|'+(sample.stripePattern||'vertical'):foam?'waves'+(sample.foamVariant||''):'',materialKey=g.opacity+'|'+roughness.toFixed(2)+'|'+special;let material=materials.get(materialKey);if(!material){const params={vertexColors:true,transparent:g.opacity<1,opacity:g.opacity,depthWrite:g.opacity>=1},map=sample.stripeTexture?stripeTexture(sample):foam?foamTexture(sample):null;if(map)params.map=map;if(foam){params.transparent=true;params.alphaTest=.025;params.depthWrite=false}const envStrength=roughness<.45?1.5:roughness<.72?.85:.38;material=shading==='standard'?new THREE.MeshStandardMaterial({...params,roughness,metalness:roughness<.4?.10:.015,envMapIntensity:envStrength}):shading==='lambert'?new THREE.MeshLambertMaterial(params):new THREE.MeshToonMaterial({...params,gradientMap:tones});materials.set(materialKey,material)}batch=new THREE.InstancedMesh(g.geometry,material,Math.max(4,g.items.length+8));batch.instanceMatrix.setUsage(THREE.DynamicDrawUsage);batch.frustumCulled=true;batch.receiveShadow=g.opacity>=1;scene.add(batch);batches.set(key,batch)}batch.count=g.items.length;batch.castShadow=g.shadow&&quality!=='low';batch.visible=true;for(let i=0;i<g.items.length;i++){matrix.fromArray(g.items[i].m);batch.setMatrixAt(i,matrix)}batch.instanceMatrix.needsUpdate=true;batch.computeBoundingSphere()}
  renderer.shadowMap.enabled=quality!=='low';renderer.render(scene,camera);return {drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,effectiveQuality:quality};
 }
 return {render,renderer,scene,assetsReady:panorama?.ready??Promise.resolve({status:'disabled'}),get skyReady(){return Boolean(panorama?.active);},disposeSky:releaseSky};
}
