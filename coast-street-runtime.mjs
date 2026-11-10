// The accepted CPU contracts are the only source of street placement/filtering.
// This consumer does not edit their parts, matrices, or rejected rows.
import {parseStreetStandard, localXZHull, boxSegmentDistance} from './authoring/coast-street-placement/adapter.mjs';
import {planStreetRows} from './authoring/coast-street-layout/layout.mjs';

export const COAST_STREET_ROWS = Object.freeze(Array.from({length:10},(_,i)=>
  [-1,1].map(side=>Object.freeze({centerS:320+i*40,side,setback:4}))).flat());

export function decodeCoastStreetSource(base64) {
  const bytes=Uint8Array.from(atob(base64),c=>c.charCodeAt(0));
  const parts=parseStreetStandard(bytes);
  // The locked adapter retains source bytes; read explicit GLB material names
  // separately, never infer walls from their color or surface direction.
  const length=new DataView(bytes.buffer).getUint32(12,true);
  const gltf=JSON.parse(new TextDecoder().decode(bytes.subarray(20,20+length)));
  for(const part of parts){
    const node=gltf.nodes.find(node=>node.name===part.name);
    let start=0;
    part.materialRanges=gltf.meshes[node.mesh].primitives.map(primitive=>{
      const count=gltf.accessors[primitive.attributes.POSITION].count;
      const range={start,count,name:gltf.materials?.[primitive.material]?.name};
      start+=count;return range;
    });
  }
  return parts;
}

// Bound the actual piecewise-linear terrain, not just five sampled points.
// Every vertex of every cell touched by the AABB contributes. This is
// conservative outside the hull, and bounds triangle interiors as well.
function terrainRange(terrain,bbox) {
  const {bounds,vertices}=terrain,{x0,x1,z0,z1,step}=bounds;
  if(bbox.minX<x0||bbox.maxX>x1||bbox.minZ<z0||bbox.maxZ>z1)
    throw Error('Street foundation outside coastal terrain');
  const nx=Math.round((x1-x0)/step),nz=Math.round((z1-z0)/step);
  const ix0=Math.max(0,Math.floor((bbox.minX-x0)/step)),ix1=Math.min(nx,Math.floor((bbox.maxX-x0)/step)+1);
  const iz0=Math.max(0,Math.floor((bbox.minZ-z0)/step)),iz1=Math.min(nz,Math.floor((bbox.maxZ-z0)/step)+1);
  let min=Infinity,max=-Infinity;
  for(let iz=iz0;iz<=iz1;iz++)for(let ix=ix0;ix<=ix1;ix++){
    const y=vertices[iz*(nx+1)+ix]?.[1];
    if(!Number.isFinite(y))throw Error('Invalid street terrain vertex');
    min=Math.min(min,y);max=Math.max(max,y);
  }
  return {min,max};
}

// A separate, unscaled foundation inside the same accepted XZ hull. The
// source house remains at the original road-height matrix. No terrain edit,
// oversized axis-aligned platform, lighting change, or floating bottom.
export function streetFoundation(hull,bottom) {
  const p=[],n=[],i=[];
  const tri=(a,b,c,normal)=>{const first=p.length/3;p.push(...a,...b,...c);n.push(...normal,...normal,...normal);i.push(first,first+1,first+2)};
  const center=[hull.reduce((s,p)=>s+p[0],0)/hull.length,0,hull.reduce((s,p)=>s+p[1],0)/hull.length];
  for(let j=0;j<hull.length;j++){
    const a=hull[j],b=hull[(j+1)%hull.length],A=[a[0],0,a[1]],B=[b[0],0,b[1]],C=[a[0],bottom,a[1]],D=[b[0],bottom,b[1]];
    const dx=b[0]-a[0],dz=b[1]-a[1],length=Math.hypot(dx,dz),normal=[dz/length,0,-dx/length];
    tri(center,B,A,[0,1,0]);tri(A,B,C,normal);tri(B,D,C,normal);
  }
  return {p,n,i};
}

export function createCoastStreetPlan(parts,sampleRoad,terrain,roadSamples) {
  const plan=planStreetRows(parts,sampleRoad,COAST_STREET_ROWS,.5);
  if(!plan.accepted.length)throw Error('Coastal street has no accepted rows');
  const byName=new Map(parts.map(part=>[part.name,part]));
  // The accepted adapter checks its local 1 m window. Also protect every
  // other section of this closed circuit before accepting a runtime layer.
  const instances=plan.accepted.flatMap(row=>row.placements.map(placement=>{
    for(let j=1;j<roadSamples.length;j++){
      const a=roadSamples[j-1].p,b=roadSamples[j].p;
      if(boxSegmentDistance(placement.bbox,[a[0],a[2]],[b[0],b[2]])<row.requiredClearance-1e-6)
        throw Error('Street foundation intrudes into another road segment');
    }
    const part=byName.get(placement.id),range=terrainRange(terrain,placement.bbox),base=placement.matrix[13];
    if(range.max>base-.02)throw Error('Terrain intersects fixed street house');
    return {row:row.row,part,placement,terrainRange:range,
      foundation:streetFoundation(localXZHull(part),range.min-.15-base)};
  }));
  return {parts,plan,instances};
}

// Candidate presentation only. Keep source buffers, topology, roof/glass and
// gloss intact. Uniform warm plaster avoids introducing per-face noise.
export function coastWallData(part) {
  const data=new Float32Array(part.sourceData);
  // Match engine.color: Mesh and fixed source consume linear RGB.
  const wall=[0xd9,0xd0,0xbc].map(channel=>Math.pow(channel/255,2.2));
  if(!part.materialRanges?.length)throw Error('Missing street material classification');
  for(const range of part.materialRanges){
    if(range.name!=='wall')continue;
    if(!Number.isInteger(range.start)||!Number.isInteger(range.count)||range.start<0||range.count<1||(range.start+range.count)*10>data.length)throw Error('Invalid wall range');
    for(let v=range.start;v<range.start+range.count;v++)data.set(wall,v*10+6);
  }
  return data;
}
