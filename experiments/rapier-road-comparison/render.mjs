import * as THREE from 'three';
import {createThreeBackend} from '../../render-three.js';
import {car,headNode,tires,mm,trs} from './.generated/project.mjs';
import {CONFIG as C} from './config.mjs';
import {strip} from './course.mjs';
import {forward} from './vehicle.mjs';
export const wheelQuaternion=(steering,rotation)=>new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),steering)
  .multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),-rotation));
const array=v=>[v.x,v.y,v.z],add=(a,b)=>a.map((v,i)=>v+b[i]),sub=(a,b)=>a.map((v,i)=>v-b[i]);
const scaled=(v,s)=>v.map(x=>x*s),wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
function neutralMesh(geo,color) {
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(geo.vertices,3));g.setIndex(new THREE.BufferAttribute(geo.indices,1));g.computeVertexNormals();
  const n=g.attributes.normal.array,c=new THREE.Color(color),data=[];
  for(let i=0;i<geo.vertices.length;i+=3)data.push(...geo.vertices.slice(i,i+3),...n.slice(i,i+3),c.r,c.g,c.b,.06);
  g.dispose();
  return {sourceData:new Float32Array(data),sourceIndices:geo.indices,dispose(){this.onDispose?.();}};
}
export class ComparisonView {
  constructor(canvas,sim,sky) {
    this.backend=createThreeBackend(canvas,{shading:'lambert',hemisphereIntensity:.7,skyPanorama:sky});
    if(!this.backend)throw Error('WebGL2 未就绪：未把 Canvas 诊断当成 Three 车模验收。');
    this.meshes=[{mesh:neutralMesh(sim.geometry.surface,'#69728e'),shadow:false},...sim.geometry.rails.map(g=>({mesh:neutralMesh(g,'#b7c6d9'),shadow:true}))];
    for(const side of [-1,1])this.meshes.push({mesh:neutralMesh(strip(C.roadStartS,C.roadEndS,[[side*7.02,.065],[side*7.65,.065]]),'#e0d6df'),shadow:false});
    // Road markers use the same spline, no driving-line assist or steering aid.
    for(let s=C.roadStartS;s<C.roadEndS;s+=12)for(const l of [-2.33,2.33])
      this.meshes.push({mesh:neutralMesh(strip(s,s+2.2,[[l-.035,.067],[l+.035,.067]]),'#e0e4e8'),shadow:false});
    this.resetCamera();this.canvas=canvas;this.disposed=false;
  }
  resetCamera(){this.eye=null;this.look=null;this.heading=null;}
  render(sim,dt) {
    const a=sim.paused?1:sim.accumulator/C.fixedStep,p=sim.previous,c=sim.current;
    const pos=new THREE.Vector3(...array(p.position)).lerp(new THREE.Vector3(...array(c.position)),a);
    const q=new THREE.Quaternion(p.rotation.x,p.rotation.y,p.rotation.z,p.rotation.w).slerp(new THREE.Quaternion(c.rotation.x,c.rotation.y,c.rotation.z,c.rotation.w),a);
    const base=pos.clone().add(new THREE.Vector3(0,-C.visualCOM,0).applyQuaternion(q)),origin=base.toArray();
    const root=new THREE.Matrix4().compose(base.clone().sub(new THREE.Vector3(...origin)),q,new THREE.Vector3(.97,.97,.97));
    car.local=new Float32Array(root.elements);headNode.local=trs([-.31,1.57,0]);
    for(let i=0;i<tires.length;i++) {
      const w=c.wheels[i],prev=p.wheels[i],susp=prev.suspension+(w.suspension-prev.suspension)*a;
      const steering=prev.steering+(w.steering-prev.steering)*a,rotation=prev.rotation+(w.rotation-prev.rotation)*a;
      // Official Three vehicle example's suspension/steering/spin consumption,
      // adapted to the project's +X-forward authored wheel assembly.
      // Rapier spin is positive for +X travel; authored +Z wheel normal
      // needs negative rotation so the bottom rim moves backward (not slides).
      const wheelQ=wheelQuaternion(steering,rotation);
      tires[i].n.local=new Float32Array(new THREE.Matrix4().compose(new THREE.Vector3(w.x/.97,(C.connectionY-susp+C.visualCOM)/.97,w.z/.97),wheelQ,new THREE.Vector3(1,1,1)).elements);
    }
    const list=[];
    const collect=(node,parent)=>{const matrix=mm(parent,node.local);if(node.mesh)list.push({mesh:node.mesh,m:matrix,shadow:node.shadow});for(const child of node.children)collect(child,matrix);};
    collect(car,new Float32Array(new THREE.Matrix4().elements));
    const shift=new Float32Array(new THREE.Matrix4().makeTranslation(...origin.map(x=>-x)).elements);
    for(const item of this.meshes)list.push({...item,m:shift});
    const velocity=array(c.velocity),speed=Math.hypot(velocity[0],velocity[2]),f=forward(c.rotation);
    const wanted=speed>.5?Math.atan2(velocity[2],velocity[0]):Math.atan2(f.z,f.x);
    this.heading=this.heading===null?wanted:this.heading+wrap(wanted-this.heading)*(1-Math.exp(-dt*8));
    const direction=[Math.cos(this.heading),0,Math.sin(this.heading)],lead=scaled([velocity[0],0,velocity[2]],1/18);
    // Frozen normal chase camera: back 8.5 m, up 4.5 m, look 10 m,
    // heading damping 8/s, position damping 18/s. No per-frame .25 lerp.
    const eye=add(add(origin,lead),add(scaled(direction,-8.5),[0,4.5,0]));
    const look=add(add(origin,lead),add(scaled(direction,10),[0,1,0])),d=1-Math.exp(-dt*18);
    this.eye=this.eye?this.eye.map((v,i)=>v+(eye[i]-v)*d):eye;
    this.look=this.look?this.look.map((v,i)=>v+(look[i]-v)*d):look;
    this.backend.render(list,{eye:sub(this.eye,origin),target:sub(this.look,origin)},this.canvas.clientWidth,this.canvas.clientHeight,62,{quality:'low'});
  }
  dispose() {
    if(this.disposed)return;
    this.disposed=true;this.backend.disposeSky();
    const materials=new Set(),geometries=new Set();
    this.backend.scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m);o.dispose?.();});
    for(const g of geometries)g.dispose();for(const m of materials)m.dispose();
    this.backend.renderer.dispose();this.backend.scene.clear();
  }
}
