import * as THREE from 'three';
export function createThreeBackend(canvas,{shading='toon',hemisphereIntensity=2.2}={}){
 if(!['toon','lambert'].includes(shading))throw new Error('Unknown shading model: '+shading);
 if(!Number.isFinite(hemisphereIntensity)||hemisphereIntensity<0)throw new Error('Invalid hemisphere intensity');
 let renderer,phase='context';
 try{
  const context=canvas.getContext('webgl2',{antialias:true,alpha:false});
  if(!context){console.warn('[Star Rush WebGL] webgl2 context unavailable; returning null for fallback handling');return null}
  phase='renderer';renderer=new THREE.WebGLRenderer({canvas,context,antialias:true,alpha:false,powerPreference:'default'});
 }catch(e){console.warn('[Star Rush WebGL] '+phase+' initialization failed; returning null for fallback handling:',e?.message||String(e));return null}
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));
 const scene=new THREE.Scene();scene.fog=new THREE.Fog('#cbddec',125,460);
 const camera=new THREE.PerspectiveCamera(62,1,.12,850),hemi=new THREE.HemisphereLight('#e7f4ff','#a08ba5',hemisphereIntensity),sun=new THREE.DirectionalLight('#fff0de',2.4);sun.position.set(-30,60,25);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-55,right:55,top:45,bottom:-45,near:1,far:160});sun.shadow.bias=-.0004;scene.add(hemi,sun,sun.target);
 const tones=shading==='toon'?new THREE.DataTexture(new Uint8Array([95,145,195,245]),4,1,THREE.RedFormat):null;if(tones){tones.minFilter=THREE.NearestFilter;tones.magFilter=THREE.NearestFilter;tones.needsUpdate=true;}
 const batches=new Map(),matrix=new THREE.Matrix4(),materials=new Map(),geometries=new Map();
 const sky=new THREE.Mesh(new THREE.SphereGeometry(650,16,8),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{top:{value:new THREE.Color('#8fbee6')},bottom:{value:new THREE.Color('#f0e8f0')}},vertexShader:'varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'varying vec3 vDirection;uniform vec3 top,bottom;void main(){float h=smoothstep(-.05,.8,normalize(vDirection).y);gl_FragColor=vec4(mix(bottom,top,h),1.0);}'}));sky.renderOrder=-100;scene.add(sky);
 let nextId=1,lastW=0,lastH=0,lastScale=0,lastFrame=0,frameAverage=16.7,slowFrames=0,fastFrames=0,autoTier=2;const tiers=['low','medium','high'];
 function geometry(mesh,paint){
  if(!mesh.renderId)mesh.renderId=nextId++;const key=mesh.renderId+':'+(mesh.paintable&&paint?paint:'');if(geometries.has(key))return geometries.get(key);
  const data=mesh.sourceData,positions=[],normals=[],colors=[];const tint=paint?new THREE.Color(paint):null;
  for(let i=0;i<data.length;i+=10){positions.push(data[i],data[i+1],data[i+2]);normals.push(data[i+3],data[i+4],data[i+5]);const r=data[i+6],g=data[i+7],b=data[i+8],isPaint=mesh.paintable&&tint&&g-r>.14&&b-r>.2;colors.push(isPaint?tint.r:r,isPaint?tint.g:g,isPaint?tint.b:b)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.setIndex(Array.from(mesh.sourceIndices));g.computeBoundingSphere();geometries.set(key,g);mesh.onDispose=()=>{for(const [id,geo] of geometries)if(id.startsWith(mesh.renderId+':')){for(const [bk,batch] of batches)if(batch.geometry===geo){scene.remove(batch);batch.dispose();batches.delete(bk)}geo.dispose();geometries.delete(id)}};return g;
 }
 function render(list,view,width,height,fov,options={}){
  const now=performance.now();if(lastFrame){const frame=now-lastFrame;if(frame<100)frameAverage+=(frame-frameAverage)*.035}lastFrame=now;if(options.quality==='auto'){if(frameAverage>23){slowFrames++;fastFrames=0}else if(frameAverage<16.9){fastFrames++;slowFrames=0}else {slowFrames=0;fastFrames=0}if(slowFrames>90&&autoTier>0){autoTier--;slowFrames=0}if(fastFrames>360&&autoTier<2){autoTier++;fastFrames=0}}const quality=options.quality==='auto'?tiers[autoTier]:options.quality;
  const scale=quality==='low'?1:quality==='medium'?1.2:Math.min(devicePixelRatio||1,1.5);if(scale!==lastScale){renderer.setPixelRatio(scale);lastScale=scale}
  if(width!==lastW||height!==lastH){renderer.setSize(width,height,false);lastW=width;lastH=height}camera.aspect=width/height;camera.fov=fov;camera.updateProjectionMatrix();camera.position.fromArray(view.eye);camera.lookAt(new THREE.Vector3(...view.target));sky.position.copy(camera.position);
  const desired=new Map();for(const d of list){if(!d.mesh.sourceIndices.length)continue;const g=geometry(d.mesh,d.tint),opacity=d.opacity??1,key=g.uuid+':'+d.shadow+':'+opacity;let group=desired.get(key);if(!group){group={geometry:g,shadow:d.shadow,opacity,items:[]};desired.set(key,group)}group.items.push(d)}
  for(const b of batches.values())b.visible=false;
  for(const [key,g] of desired){let batch=batches.get(key);if(!batch||batch.instanceMatrix.count<g.items.length){if(batch){scene.remove(batch);batch.dispose()}let material=materials.get(g.opacity);if(!material){const params={vertexColors:true,transparent:g.opacity<1,opacity:g.opacity,depthWrite:g.opacity>=1};material=shading==='lambert'?new THREE.MeshLambertMaterial(params):new THREE.MeshToonMaterial({...params,gradientMap:tones});materials.set(g.opacity,material)}batch=new THREE.InstancedMesh(g.geometry,material,Math.max(4,g.items.length+8));batch.instanceMatrix.setUsage(THREE.DynamicDrawUsage);batch.frustumCulled=true;batch.receiveShadow=g.opacity>=1;scene.add(batch);batches.set(key,batch)}batch.count=g.items.length;batch.castShadow=g.shadow&&quality!=='low';batch.visible=true;for(let i=0;i<g.items.length;i++){matrix.fromArray(g.items[i].m);batch.setMatrixAt(i,matrix)}batch.instanceMatrix.needsUpdate=true;batch.computeBoundingSphere()}
  renderer.shadowMap.enabled=quality!=='low';renderer.render(scene,camera);return {drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,effectiveQuality:quality};
 }
 return {render,renderer,scene};
}
