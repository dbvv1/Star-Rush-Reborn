import {circuitRoad} from './.generated/project.mjs';
import {CONFIG as C,clamp} from './config.mjs';
export {circuitRoad};
export const roadPoint = (s,l=0,y=0) => {
  const r=circuitRoad(s);
  return [r.p[0]+r.R[0]*l,r.p[1]+y,r.p[2]+r.R[2]*l];
};
// Continuous indexed strip; same one-metre vertices feed rendering AND colliders.
// The 2 cm shoulder rise belongs to the frozen road mesh, not an invisible bump.
export function strip(start=C.roadStartS,end=C.roadEndS,profile=[[-7,.04],[7,.04]]) {
  const vertices=[],indices=[], samples=Math.ceil((end-start)/C.sampleSpacing), cols=profile.length;
  for(let i=0;i<=samples;i++)for(const [l,y] of profile)vertices.push(...roadPoint(start+(end-start)*i/samples,l,y));
  for(let i=0;i<samples;i++)for(let j=0;j<cols-1;j++) {
    const a=i*cols+j,b=a+cols;
    // +T cross +R points down. Ascending lateral profiles need reversed
    // winding; descending ones do not. For each rail this also makes its
    // inner/outer vertical faces point out of the solid, and its top face up.
    if(profile.at(-1)[0]>profile[0][0])indices.push(a,a+1,b,a+1,b+1,b);
    else indices.push(a,b,a+1,a+1,b,b+1);
  }
  return {vertices:new Float32Array(vertices),indices:new Uint32Array(indices)};
}
export function courseGeometry() {
  const surface=strip(C.roadStartS,C.roadEndS,[[-C.railInner,.06],[-7.65,.06],[-7.02,.06],[-7,.04],[7,.04],[7.02,.06],[7.65,.06],[C.railInner,.06]]);
  const rails=[-1,1].map(side=>strip(C.roadStartS,C.roadEndS,
    [[side*C.railInner,.02],[side*C.railInner,C.railHeight],[side*(C.railInner+C.railThickness),C.railHeight],[side*(C.railInner+C.railThickness),.02]]));
  return {surface,rails};
}
// Local projection, read-only: can never pull the rigid body onto the road.
// Window is smaller than crossing-road separation and follows the last projection.
export function project(position,previousS=C.startS) {
  const low=Math.max(C.roadStartS,previousS-30),high=Math.min(C.roadEndS,previousS+30);
  let bestS=low,best=Infinity;
  for(let s=low;s<=high;s+=.5) {
    const p=roadPoint(s),d=(p[0]-position.x)**2+(p[2]-position.z)**2;
    if(d<best){best=d;bestS=s;}
  }
  const r=circuitRoad(bestS),dx=position.x-r.p[0],dz=position.z-r.p[2];
  const s=clamp(bestS+dx*r.T[0]+dz*r.T[2],low,high),q=circuitRoad(s);
  return {s,l:(position.x-q.p[0])*q.R[0]+(position.z-q.p[2])*q.R[2]};
}
export function spawn(s=C.startS,l=0) {
  const r=circuitRoad(s),p=roadPoint(s,l,.04+C.visualCOM+.15);
  // Model +X forward, +Y up; yaw about +Y is negative road heading.
  const yaw=-r.h,pitch=Math.atan(r.slope),cy=Math.cos(yaw/2),sy=Math.sin(yaw/2),cz=Math.cos(pitch/2),sz=Math.sin(pitch/2);
  return {position:{x:p[0],y:p[1],z:p[2]},rotation:{x:sy*sz,y:sy*cz,z:cy*sz,w:cy*cz}};
}
