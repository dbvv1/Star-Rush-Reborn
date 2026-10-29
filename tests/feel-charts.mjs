// Deterministic SVG plots from measured ticks; no browser or external dependency.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {join} from 'node:path';
const [input,output]=process.argv.slice(2);
if(!input||!output)throw Error('Usage: node tests/feel-charts.mjs MEASUREMENT_DIR OUTPUT_DIR');
const bytes=readFileSync(join(input,'ticks.jsonl')),summaryBytes=readFileSync(join(input,'summary.json'));
const summary=JSON.parse(summaryBytes),rows=bytes.toString().trim().split('\n').map(JSON.parse);
const sha=b=>createHash('sha256').update(b).digest('hex');
for(const [file,hash] of Object.entries(summary.hashes))assert.equal(sha(readFileSync(file)),hash,'measurement source changed: '+file);
assert.equal(summary.dt,1/120);
const groups=Object.groupBy(rows,r=>r.id);
for(const run of Object.values(groups))run.forEach((r,i)=>{assert.equal(r.tick,i);assert.equal(r.time,i*summary.dt);for(const k of ['kmh','yaw','slip'])assert(Number.isFinite(r[k]));});
const metadata={scope:'Default road CPU only; no Rapier, screen latency or benchmark curves',sourceBaseline:'f1da86c551ee3ff8541912974823dca07a9509ad',runtimeSource:'8dddac2ce5cd7941a2eb64cceeeb04ef1e17831a',track:'academy-reborn',routeSeed:95276,seedSource:'race.js reset circuit seed (not a random model seed); isolated model has no RNG',ticksSHA256:sha(bytes),summarySHA256:sha(summaryBytes),...summary};
const esc=x=>String(x).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const blue='#1768a7',orange='#bf4c19',green='#267244',gray='#697783';
function text(x,y,s,size=14,color='#172a3a'){return `<text x="${x}" y="${y}" fill="${color}" font-size="${size}">${esc(s)}</text>`;}
function panel(x,y,title,maxX,minY,maxY,yLabel,series,notes=[],threshold=null){
 const w=410,h=175,px=x+55,py=y+47;
 const sx=t=>px+t/maxX*w,sy=v=>py+h-(v-minY)/(maxY-minY)*h;
 let svg=text(x,y+15,title,17)+text(px,py-10,yLabel,12,gray);
 for(let i=0;i<=4;i++){const yy=minY+(maxY-minY)*i/4,xx=maxX*i/4;
 svg+=`<path d="M${px},${sy(yy)}H${px+w}" stroke="#dbe3e8"/>`+text(x+3,sy(yy)+4,Number(yy.toFixed(1)),12,gray)+text(sx(xx)-6,py+h+21,Number(xx.toFixed(2)),12,gray);}
 svg+=text(px+w-46,py+h+40,'Time (s)',12,gray);
 if(threshold!==null)svg+=`<path d="M${px},${sy(threshold)}H${px+w}" stroke="${gray}" stroke-dasharray="5 5"/>`;
 series.forEach((s,index)=>{
 const run=groups[s.id];assert(run,'Missing scenario '+s.id);
 assert(run.every(r=>r.time<=maxX+1e-9&&s.value(r)>=minY-1e-8&&s.value(r)<=maxY+1e-8),'axis would clip data');
 const d=run.map((r,i)=>(i?'L':'M')+sx(r.time).toFixed(2)+','+sy(s.value(r)).toFixed(2)).join(' ');
 svg+=`<path d="${d}" fill="none" stroke="${s.color}" stroke-width="2.1"/>`;
 svg+=text(px,y+278+index*19,s.label,12,s.color);
 });
 notes.forEach((n,i)=>svg+=text(px,y+322+i*18,n,12,gray));
 return svg;
}
function wrap(title,subtitle,body){return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="910" viewBox="0 0 1080 910" role="img"><title>${esc(title)}</title><desc>${esc(subtitle)}</desc><metadata>${esc(JSON.stringify(metadata))}</metadata><rect width="1080" height="910" fill="#f8fafb"/><g font-family="DejaVu Sans,sans-serif">${text(28,36,title,24)}${text(28,63,subtitle,13,gray)}${body}${text(28,866,'Source: default road f1da86c / runtime 8dddac2 | 120 Hz CPU | academy seed 95276',12,gray)}${text(28,888,'No Forza curve; no rendered frames, audio sync or measured screen-input latency.',12,gray)}</g></svg>\n`;}
const last=id=>groups[id].at(-1),speed=(id,label,color)=>({id,label,color,value:r=>r.kmh});
let speedBody=panel(25,100,'Isolated model: full throttle, 0–60 s',60,0,110,'Speed (km/h)',[speed('model-flat-full-throttle','Full throttle from rest',blue)],[`60 s: ${last('model-flat-full-throttle').kmh.toFixed(2)} km/h; 100 km/h not reached`,'Dashed line = 100 km/h measurement threshold'],100);
speedBody+=panel(560,100,'Isolated model: release vs brake',1,0,60,'Speed (km/h)',[speed('model-60-coast','Release throttle from 60 km/h',blue),speed('model-60-brake','Brake from 60 km/h',orange)],[`At 1 s: coast ${last('model-60-coast').kmh.toFixed(2)} / brake ${last('model-60-brake').kmh.toFixed(2)} km/h`]);
speedBody+=panel(25,480,'Actual road physics: academy, 0–10 s',10,0,110,'Speed (km/h)',[speed('client-academy-accelerate','Full throttle; road and contacts retained',green)],[`10 s: ${last('client-academy-accelerate').kmh.toFixed(2)} km/h`,'Different duration from isolated test; no extrapolation'],100);
speedBody+=panel(560,480,'Actual road physics: release vs brake',1,0,60,'Speed (km/h)',[speed('client-academy-60-coast','Release throttle from 60 km/h',blue),speed('client-academy-60-brake','Brake from 60 km/h',orange)],['Matches isolated 1 s speeds at this initial road state']);
const angle=(id,key,label,color)=>({id,label,color,value:r=>r[key]*180/Math.PI});
let turnBody=panel(25,100,'Isolated model: heading response',2,-10,80,'Yaw (degrees; planar initial heading = 0)',[angle('model-60-turn-release','yaw','Right + throttle 0–1 s; straight + throttle 1–2 s',blue)],['First nonzero CPU yaw: tick 1 (8.333 ms)','This is not input-to-screen latency']);
turnBody+=panel(560,100,'Actual road physics: heading response',2,-10,80,'Yaw (degrees; local road-tangent frame)',[angle('client-academy-60-turn-release','yaw','Same input; road frame and contacts retained',green)],['Not global heading: curvature changes the local frame','Do not infer input latency from this curve']);
turnBody+=panel(25,480,'Isolated model: slip response',2,-35,35,'Slip = body yaw minus velocity yaw (degrees)',[angle('model-60-turn-release','slip','Isolated tire-model response',blue)],[`Peak |slip|: ${(Math.max(...groups['model-60-turn-release'].map(r=>Math.abs(r.slip)))*180/Math.PI).toFixed(2)} degrees`,'No road or contact solver in this test']);
turnBody+=panel(560,480,'Actual road physics: slip response',2,-35,35,'Slip = body yaw minus velocity yaw (degrees)',[angle('client-academy-60-turn-release','slip','Road/contact response — not a tire-only peak',orange)],[`Peak |slip|: ${(Math.max(...groups['client-academy-60-turn-release'].map(r=>Math.abs(r.slip)))*180/Math.PI).toFixed(2)} degrees`,'Collision influence must not be attributed to tire tuning']);
mkdirSync(output,{recursive:true});
writeFileSync(join(output,'speed.svg'),wrap('Default road: measured speed response','Physical units (m/s converted to km/h); full tick data, no fitted or benchmark curve.',speedBody));
writeFileSync(join(output,'steering.svg'),wrap('Default road: 60 km/h initial steering step','Throttle held; full right for 1 s, then straight for 1 s. Not constant speed or a completed 90-degree bend.',turnBody));
console.log('Wrote speed.svg and steering.svg; all source hashes and tick order verified.');
