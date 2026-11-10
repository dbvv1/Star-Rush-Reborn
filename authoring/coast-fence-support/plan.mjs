import {vergeTerrainRange} from '../../coast-verge-runtime.mjs';
import {boxSegmentDistance} from '../coast-street-placement/adapter.mjs';
const distance=(a,b)=>Math.hypot(Math.max(0,a.minX-b.maxX,b.minX-a.maxX),Math.max(0,a.minZ-b.maxZ,b.minZ-a.maxZ));
const minimum=xs=>xs.length?Math.min(...xs):null;
/** Matrices are column-major and apply directly to decoder sourceData (not pivoted data).
 * Source XZ pivot is applied once. Source local bottom is normalized to zero by Y translation.
 * Unknown original decoration coverage fails closed, rather than deleting decorations.
 */
export function planFenceSupports(parts,model,sampleRoad,samples,rows){
 const fences=parts.filter(p=>p.name.startsWith('fence'));
 if(fences.length!==2||new Set(fences.map(p=>p.name)).size!==2)throw Error('Expected two distinct fences');
 if(!Array.isArray(samples)||samples.length<2)throw Error('Missing road segments');
 const validBox=b=>b&&['minX','maxX','minZ','maxZ'].every(k=>Number.isFinite(b[k]))&&b.minX<=b.maxX&&b.minZ<=b.maxZ;
 if(samples.some(v=>!v?.p||v.p.length!==3||!v.p.every(Number.isFinite)))throw Error('Invalid road samples');
 if(!Array.isArray(model.street?.instances)||model.street.instances.some(e=>!validBox(e?.placement?.bbox)))throw Error('Invalid house bounds');
 if(!Array.isArray(model.verge?.instances)||model.verge.instances.some(e=>!validBox(e?.bbox)))throw Error('Invalid bush bounds');
 if(model.fenceSceneryCoverage==='complete-conservative'&&(!Array.isArray(model.fenceSceneryBounds)||model.fenceSceneryBounds.some(b=>!validBox(b))))throw Error('Invalid scenery bounds');
 const accepted=[],rejected=[],seen=new Set();
 for(const row of rows){
  const valid=row&&Number.isFinite(row.s)&&[1,-1].includes(row.side)&&Number.isFinite(row.setback)&&row.setback>=0;
  const key=valid?JSON.stringify([row.s,row.side,row.setback]):null;
  const invalid=!valid?'invalid-row':seen.has(key)?'duplicate-row':null;
  if(valid)seen.add(key);
  if(invalid){rejected.push({partId:null,row:valid?{...row}:null,matrix:null,terrain:null,clearance:null,reasons:[invalid]});continue;}
  const r=sampleRoad(row.s),side=row.side;
  if(!r||![r.p,r.T,r.R].every(v=>v?.length===3&&v.every(Number.isFinite))||Math.abs(r.T[1])+Math.abs(r.R[1])>1e-6||Math.abs(Math.hypot(...r.T)-1)>1e-6||Math.abs(Math.hypot(...r.R)-1)>1e-6||r.T[0]*r.R[2]-r.T[2]*r.R[0]<.999999)throw Error('Invalid horizontal rigid frame');
  for(const p of fences){
   const d=p.sourceData;if(!d.length||d.length%10||!Array.from(d).every(Number.isFinite)||!p.pivot.every(Number.isFinite))throw Error('Invalid source');
   const tx=r.p[0]+side*(r.T[0]*p.pivot[0]+r.R[0]*(row.setback+p.pivot[2]));
   const tz=r.p[2]+side*(r.T[2]*p.pivot[0]+r.R[2]*(row.setback+p.pivot[2]));
   const xs=[],zs=[],ys=[];
   for(let i=0;i<d.length;i+=10){xs.push(tx+side*(r.T[0]*d[i]+r.R[0]*d[i+2]));zs.push(tz+side*(r.T[2]*d[i]+r.R[2]*d[i+2]));ys.push(d[i+1]);}
   const bbox={minX:Math.min(...xs),maxX:Math.max(...xs),minZ:Math.min(...zs),maxZ:Math.max(...zs)};
   const reasons=[];let terrain=null;
   try{terrain=vergeTerrainRange(model,bbox);}catch{reasons.push('terrain-unproven');}
   if(terrain){if(terrain.min<-.65)reasons.push('water');if(terrain.max-terrain.min>.18)reasons.push('slope');}
   const road=minimum(samples.slice(1).map((v,i)=>boxSegmentDistance(bbox,[samples[i].p[0],samples[i].p[2]],[v.p[0],v.p[2]])));
   const house=minimum(model.street.instances.map(e=>distance(bbox,e.placement.bbox)));
   const bush=minimum((model.verge?.instances||[]).map(e=>distance(bbox,e.bbox)));
   const fence=minimum(accepted.map(e=>distance(bbox,e.bbox)));
   // Caller must supply an exhaustive, conservative swept bound set, not sampled frames.
   const scenery=minimum((model.fenceSceneryBounds||[]).map(b=>distance(bbox,b)));
   if(road<12)reasons.push('road');if(house!==null&&house<1)reasons.push('house');if(bush!==null&&bush<.5)reasons.push('bush');if(fence!==null&&fence<.5)reasons.push('fence');
   if(model.fenceSceneryCoverage!=='complete-conservative')reasons.push('scenery-unproven');else if(scenery!==null&&scenery<.5)reasons.push('scenery');
   const matrix=terrain?[side*r.T[0],0,side*r.T[2],0,0,1,0,0,side*r.R[0],0,side*r.R[2],0,tx,terrain.min-.02-Math.min(...ys),tz,1]:null;
   const result={partId:p.name,row:{...row},matrix,bbox,terrain,clearance:{road,house,bush,fence,scenery},reasons};
   (reasons.length?rejected:accepted).push(result);
  }
 }
 return {accepted,rejected};
}
