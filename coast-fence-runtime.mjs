import {decodeStandardPart} from './authoring/coast-street-placement/fixed-source/upstream-adapter.mjs';
import {planFenceSupports} from './authoring/coast-fence-support/plan.mjs';
import report from './authoring/coast-fence-support/report.json' with {type:'json'};
export function decodeCoastFenceSource(base64){return decodeStandardPart(Uint8Array.from(atob(base64),c=>c.charCodeAt(0))).filter(p=>p.name.startsWith('fence'));}
export function createCoastFencePlan(parts,model,road,samples){
 const rows=[];for(let s=320;s<=680;s+=40)for(const side of [-1,1])rows.push({s,side,setback:24});
 const result=planFenceSupports(parts,{...model,fenceSceneryCoverage:report.sceneryProof.coverage,fenceSceneryBounds:report.sceneryProof.bounds},road,samples,rows);
 return {...result,instances:result.accepted.map(entry=>({...entry,part:parts.find(p=>p.name===entry.partId)}))};
}
