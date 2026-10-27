import * as THREE from 'three';

// Display-only LDR panorama. It never sets environment, lights, fog or exposure.
export function createSkyPanorama(scene,config,loader=new THREE.TextureLoader()){
 if(!config)return null;
 if(typeof config.url!=='string'||!config.url.startsWith('/assets/sky/')||config.width!==2048||config.height!==1024||!Number.isFinite(config.yaw))throw Error('Invalid sky configuration');
 const geometry=new THREE.SphereGeometry(650,32,16);
 const material=new THREE.MeshBasicMaterial({side:THREE.BackSide,depthWrite:false,fog:false,toneMapped:false});
 const mesh=new THREE.Mesh(geometry,material);mesh.rotation.y=config.yaw;mesh.renderOrder=-100;mesh.visible=false;mesh.frustumCulled=false;scene.add(mesh);
 let active=false,disposed=false,released=false,texture,settle;
 const ready=new Promise(resolve=>{settle=resolve;});
 const release=()=>{if(texture&&!released){released=true;texture.dispose();texture.image=null;}};
 const fail=()=>{active=false;mesh.visible=false;release();settle({status:'failed'});};
 try{
  texture=loader.load(config.url,loaded=>{
   if(disposed){loaded.image=null;return;}
   if(loaded.image?.width!==config.width||loaded.image?.height!==config.height){fail();return;}
   loaded.colorSpace=THREE.SRGBColorSpace;loaded.generateMipmaps=false;loaded.minFilter=THREE.LinearFilter;loaded.magFilter=THREE.LinearFilter;
   loaded.wrapS=THREE.RepeatWrapping;loaded.wrapT=THREE.ClampToEdgeWrapping;
   material.map=loaded;material.needsUpdate=true;active=true;mesh.visible=true;settle({status:'ready'});
  },undefined,fail);
 }catch(error){scene.remove(mesh);geometry.dispose();material.dispose();release();throw error;}
 return {
  get active(){return active;},mesh,ready,
  update(camera){if(!disposed)mesh.position.copy(camera.position);},
  dispose(){if(disposed)return;disposed=true;active=false;settle({status:'disposed'});scene.remove(mesh);geometry.dispose();material.dispose();release();},
 };
}
