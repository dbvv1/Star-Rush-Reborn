// Same isolated input sweep through actual RoadVehicleModel.step before/after.
// These are CPU force curves, not a real tire/vehicle or screen measurement.
import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
const [before,output]=process.argv.slice(2);if(!before||!output)throw Error('node tests/tire-curve-measure.mjs <original-road-core> <output.json>');
const sha=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const dt=1/120;
async function measure(path){const {RoadVehicleModel:R}=await import(pathToFileURL(resolve(path)));const rows=[];for(let angle=0;angle<=60;angle+=.25){const p={vS:20,vL:20*Math.tan(angle*Math.PI/180),yaw:0,spin:0};R.step(p,{},dt,{powerTires:true});rows.push({degrees:angle,lateralForce:Math.abs(p.roadAy*R.config.mass),loads:p.roadLoads});}
 const peak=rows.reduce((a,b)=>b.lateralForce>a.lateralForce?b:a);const power=[];for(const step of [1/120,1/240]){const p={vS:0,vL:0,yaw:0,spin:0};let crossing=null;for(let i=0;i<60/step;i++){R.step(p,{gas:true},step,{powerTires:true});if(p.speed>=100/3.6){crossing=(i+1)*step;break;}}power.push({dt:step,zeroTo100Seconds:crossing});}
 return {sourceSha256:sha(path),peakDegrees:peak.degrees,peakForce:peak.lateralForce,forceAt30:rows.find(x=>x.degrees===30).lateralForce,forceAt60:rows.at(-1).lateralForce,ratioAt30:rows.find(x=>x.degrees===30).lateralForce/peak.lateralForce,power,rows};}
const result={scope:'isolated CPU, initial wheel loads static; 20 m/s forward and swept initial lateral velocity; no drive/brake; one real step per sample; power from rest full throttle, no road/collisions',dt,samplingDegrees:.25,target:'design hypothesis: nominal axle peak about 8–9 degrees; sliding limit 78% of load-sensitive peak; preserve small-angle stiffness; not real-world tire fitting',before:await measure(before),after:await measure('road-vehicle-core.js')};writeFileSync(output,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({...result,before:{...result.before,rows:undefined},after:{...result.after,rows:undefined}},null,2));
