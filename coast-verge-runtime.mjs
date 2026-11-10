import {decodeStandardPart} from './authoring/coast-street-placement/fixed-source/upstream-adapter.mjs';
import {boxSegmentDistance} from './authoring/coast-street-placement/adapter.mjs';
export function decodeCoastVergeSource(base64){return decodeStandardPart(Uint8Array.from(atob(base64),c=>c.charCodeAt(0))).filter(p=>/^bush-[0-5]$/.test(p.name));}
export const overlaps=(a,b,margin=0)=>a.minX<b.maxX+margin&&a.maxX>b.minX-margin&&a.minZ<b.maxZ+margin&&a.maxZ>b.minZ-margin;
// Every cell touched by the whole footprint contributes all its vertices.
export function vergeTerrainRange(model,b){
 const {x0,x1,z0,z1,step}=model.bounds;if(b.minX<x0||b.maxX>x1||b.minZ<z0||b.maxZ>z1)throw Error('Verge outside terrain');
 const nx=Math.round((x1-x0)/step),nz=Math.round((z1-z0)/step);let min=Infinity,max=-Infinity;
 for(let z=Math.max(0,Math.floor((b.minZ-z0)/step));z<=Math.min(nz,Math.floor((b.maxZ-z0)/step)+1);z++)for(let x=Math.max(0,Math.floor((b.minX-x0)/step));x<=Math.min(nx,Math.floor((b.maxX-x0)/step)+1);x++){const h=model.vertices[z*(nx+1)+x][1];if(!Number.isFinite(h))throw Error('Invalid verge terrain');min=Math.min(min,h);max=Math.max(max,h);}return {min,max};
}
export function createCoastVergePlan(parts,model,sampleRoad,samples){
 if(parts.length!==6||new Set(parts.map(p=>p.name)).size!==6)throw Error('Incomplete verge bushes');
 const s=340,side=-1,l=24,r=sampleRoad(s),instances=[],rejected=[];
 for(const part of parts){
  const data=new Float32Array(part.sourceData);const pts=[];
  for(let i=0;i<data.length;i+=10){const x=(data[i]+part.pivot[0])*side,z=(data[i+2]+part.pivot[2]+l)*side;pts.push([r.p[0]+r.T[0]*x+r.R[0]*z,r.p[2]+r.T[2]*x+r.R[2]*z]);}
  const bbox={minX:Math.min(...pts.map(p=>p[0])),maxX:Math.max(...pts.map(p=>p[0])),minZ:Math.min(...pts.map(p=>p[1])),maxZ:Math.max(...pts.map(p=>p[1]))};
  let reason=null;
  if(samples.some((p,i)=>i&&boxSegmentDistance(bbox,[samples[i-1].p[0],samples[i-1].p[2]],[p.p[0],p.p[2]])<12))reason='road';
  if(model.street.instances.some(e=>overlaps(bbox,e.placement.bbox,1)))reason='house';
  const range=vergeTerrainRange(model,bbox);if(range.min<-.65)reason='water';else if(range.max-range.min>.18)reason='slope';
  if(reason){rejected.push({name:part.name,reason});continue;}
  // Slightly embed the base; bounded <=20cm penetration, no stretched bush or floating foot.
  for(let i=0,j=0;i<data.length;i+=10,j++){data[i]=pts[j][0];data[i+1]+=part.pivot[1]+range.min-.02;data[i+2]=pts[j][1];const x=data[i+3]*side,z=data[i+5]*side;data[i+3]=r.T[0]*x+r.R[0]*z;data[i+5]=r.T[2]*x+r.R[2]*z;}
  instances.push({part:{...part,sourceData:data},bbox,range,station:s});
 }return {instances,rejected};
}
