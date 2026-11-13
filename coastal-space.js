// Original deterministic coastal-space draft. World coordinates, no RNG or collision data.
// A single merged terrain mesh and shared existing props retain the forward renderer.
function coastalSpaceEnabled(){return typeof coastalSpaceCandidate!=='undefined'&&coastalSpaceCandidate&&roadDriving&&raceMode==='circuit'&&activeTrackId==='coast-reborn'}
let coastalSpaceModelCache=null;
// Carve a lagoon under the elevated boardwalk. The road, rails and camera
// keep their centre-line height; only the ground below is pulled under water.
function coastBridgeBay(s,d){
 if(activeTrackId!=='coast-reborn'||typeof COAST_BRIDGE==='undefined')return 0;
 const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
 return smooth(COAST_BRIDGE.start-18,COAST_BRIDGE.start+52,s)*(1-smooth(COAST_BRIDGE.fallEnd-48,COAST_BRIDGE.fallEnd+28,s))*(1-smooth(25,58,d));
}
function coastBridgeClear(s){return activeTrackId==='coast-reborn'&&typeof COAST_BRIDGE!=='undefined'&&s>=COAST_BRIDGE.start-22&&s<=COAST_BRIDGE.fallEnd+22}
function coastalSpaceModel(){
 if(coastalSpaceModelCache)return coastalSpaceModelCache;
 const samples=circuitSamples.map(r=>({s:r.s,p:r.p.slice(),R:[-Math.sin(r.h),0,Math.cos(r.h)]}));
 const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
 const nearest=(x,z)=>{let best=null,d2=Infinity;for(const r of samples){const dx=x-r.p[0],dz=z-r.p[2],d=dx*dx+dz*dz;if(d<d2){d2=d;best=r}}return {r:best,d:Math.sqrt(d2),side:(x-best.p[0])*best.R[0]+(z-best.p[2])*best.R[2]};};
 const bounds={x0:-108,x1:342,z0:-222,z1:228,step:6},nx=(bounds.x1-bounds.x0)/bounds.step,nz=(bounds.z1-bounds.z0)/bounds.step,vertices=[];
 function height(x,z){
  const {r,d,side}=nearest(x,z),weight=smooth(140,260,r.s)*(1-smooth(800,940,r.s));
  let y=r.p[1]-.28;
  if(d>30){
   const outer=side>0,width=outer?82+12*Math.sin(r.s*.027)+7*Math.sin(r.s*.011):48+6*Math.sin(r.s*.025);
   const t=smooth(30,width,d),ridge=outer?4.5*Math.sin(Math.PI*t)**2:0;
   y=mix(y,-1.35,t)+ridge;
  }
  y=mix(-1.35,y,weight);
  // Every cell touching the protected road corridor has all vertices capped below
  // nearby road elevations. This also protects triangle interiors, not only points.
  if(d<38){let cap=Infinity;for(const a of samples)if(Math.hypot(x-a.p[0],z-a.p[2])<50)cap=Math.min(cap,a.p[1]-.28);y=Math.min(y,cap);}
  const bay=coastBridgeBay(r.s,d);if(bay>0)y=mix(y,-2.35,bay);
  const edge=Math.min(x-bounds.x0,bounds.x1-x,z-bounds.z0,bounds.z1-z);return mix(-1.35,y,smooth(0,24,edge));
 }
 for(let z=0;z<=nz;z++)for(let x=0;x<=nx;x++){const xx=bounds.x0+x*6,zz=bounds.z0+z*6;vertices.push([xx,height(xx,zz),zz]);}
 const triangles=[];for(let z=0;z<nz;z++)for(let x=0;x<nx;x++){const a=z*(nx+1)+x,b=a+1,c=a+nx+1,d=c+1;triangles.push([a,c,b],[b,c,d]);}
 function surface(x,z){const gx=clamp((x-bounds.x0)/6,0,nx-.000001),gz=clamp((z-bounds.z0)/6,0,nz-.000001),ix=Math.floor(gx),iz=Math.floor(gz),u=gx-ix,v=gz-iz,a=iz*(nx+1)+ix;const [h0,h1,h2,h3]=[a,a+1,a+nx+1,a+nx+2].map(i=>vertices[i][1]);return u+v<=1?h0+(h1-h0)*u+(h2-h0)*v:h3+(h2-h3)*(1-u)+(h1-h3)*(1-v);}
 const props=[{key:'coast-beacon',s:510,l:60,scale:1,radius:7},{key:'pine',s:450,l:47,scale:1.5,radius:4.2},{key:'pine',s:540,l:37,scale:1.7,radius:4.8}].map(row=>{
  const r=circuitRoad(row.s),x=r.p[0]+r.R[0]*row.l,z=r.p[2]+r.R[2]*row.l;
  const heights=[[-1,-1],[-1,1],[1,-1],[1,1],[0,0]].map(([a,b])=>surface(x+a*row.radius,z+b*row.radius));
  return {...row,x,z,y:row.key==='pine'?surface(x,z)-.1:Math.max(...heights)+.12,foundationBottom:Math.min(...heights)-.2,minRoadDistance:nearest(x,z).d};
 });
 const model={bounds,vertices,triangles,props,nearest,surface};
 model.street=createCoastStreetPlan(coastStreetSource(),circuitRoad,model,circuitSamples);
 refineCoastalTerrain(model);
 coastalTerrainAppearance(model);
 return coastalSpaceModelCache=model;
}
// Work inside the existing island, not by extending its footprint. Preserve
// every sea-crossing triangle and every complete support cell before shaping
// the few broad inland slopes. No RNG, new props, or simulation inputs.
function refineCoastalTerrain(model){
 const {bounds,vertices,triangles,street,props,nearest}=model,{step}=bounds;
 const nx=Math.round((bounds.x1-bounds.x0)/step),nz=Math.round((bounds.z1-bounds.z0)/step);
 // The water box is centred at -.9 with height .16: its top is -.82.
 const waterTop=-.82,base=vertices.map(p=>p[1]),locked=new Set(),shore=new Set();
 const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
 for(const ids of triangles)if(ids.some(i=>base[i]<=waterTop))for(const i of ids){locked.add(i);shore.add(i);}
 const supports=street.instances.map(e=>e.placement.bbox).concat(props.map(p=>({minX:p.x-p.radius,maxX:p.x+p.radius,minZ:p.z-p.radius,maxZ:p.z+p.radius})));
 for(const b of supports){
  const x0=Math.max(0,Math.floor((b.minX-bounds.x0)/step)),x1=Math.min(nx,Math.floor((b.maxX-bounds.x0)/step)+1);
  const z0=Math.max(0,Math.floor((b.minZ-bounds.z0)/step)),z1=Math.min(nz,Math.floor((b.maxZ-bounds.z0)/step)+1);
  for(let z=z0;z<=z1;z++)for(let x=x0;x<=x1;x++)locked.add(z*(nx+1)+x);
 }
 const distance=(p,b)=>Math.hypot(Math.max(b.minX-p[0],0,p[0]-b.maxX),Math.max(b.minZ-p[2],0,p[2]-b.maxZ));
 // Only the landward edge of the frozen water triangles is needed here.
 const shoreline=[...shore].filter(i=>base[i]>waterTop).map(i=>vertices[i]);
 for(let i=0;i<vertices.length;i++){
  const p=vertices[i];if(locked.has(i))continue;
  const {r,d,side}=nearest(p[0],p[2]);if(d<=38)continue;
  const coast=shoreline.reduce((v,q)=>Math.min(v,Math.hypot(p[0]-q[0],p[2]-q[2])),Infinity);
  const support=supports.reduce((v,b)=>Math.min(v,distance(p,b)),Infinity);
  const envelope=smooth(38,50,d)*smooth(0,18,coast)*smooth(step*Math.SQRT2,24,support);
  const first=Math.exp(-(((r.s-390)/115)**2)),second=Math.exp(-(((r.s-625)/95)**2));
  const shoulder=side>0?Math.exp(-(((d-55)/24)**2)):Math.exp(-(((d-43)/16)**2));
  p[1]=base[i]+envelope*shoulder*(1.7*first+1.15*second);
 }
}
function coastalTerrainAppearance(model){
 const {vertices,triangles,nearest,street}=model;
 const normals=vertices.map(()=>[0,0,0]);
 for(const ids of triangles){const [a,b,c]=ids.map(i=>vertices[i]),n=cross(sub(b,a),sub(c,a));for(const i of ids)normals[i]=add(normals[i],n);}
 model.normals=normals.map(norm);
 const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
 const grass=color('#6fa35b'),meadow=color('#95bf6b'),earth=color('#b49a70'),rock=color('#8d9387'),shore=color('#dcc28b');
 const blend=(a,b,t)=>a.map((v,i)=>mix(v,b[i],t));
 model.colors=vertices.map((p,i)=>{
  const broad=.5+.24*Math.sin(p[0]*.037+p[2]*.019)+.23*Math.cos(p[2]*.029-p[0]*.013);
  const slope=1-model.normals[i][1],d=nearest(p[0],p[2]).d;
  const yard=street.instances.reduce((v,{placement:{bbox:b}})=>Math.min(v,Math.hypot(Math.max(b.minX-p[0],0,p[0]-b.maxX),Math.max(b.minZ-p[2],0,p[2]-b.maxZ))),Infinity);
  let col=blend(grass,meadow,clamp(broad,0,1));
  col=blend(col,earth,.28*(1-smooth(2,12,yard))+.18*(1-smooth(12,26,d)));
  col=blend(col,rock,smooth(.10,.45,slope)*.72);
  return blend(shore,col,smooth(-.55,.65,p[1]));
 });
}
function coastalSpaceTerrain(c){
 const model=coastalSpaceModel();
 // Shared normals and low-frequency vertex colour remove the old per-triangle
 // height stripes without changing the renderer, world light, or water.
 const base=c.data.length/10;
 for(let i=0;i<model.vertices.length;i++)c.data.push(...model.vertices[i],...model.normals[i],...model.colors[i],.02);
 for(const ids of model.triangles)if(!ids.every(i=>model.vertices[i][1]<-.9))c.indices.push(...ids.map(i=>base+i));
 for(const p of model.props)if(p.key!=='pine')box(c,[p.x,(p.y+p.foundationBottom)/2,p.z],[p.radius*2,p.y-p.foundationBottom,p.radius*2],'#b7b7aa',.08);
}
function coastalBeacon(c){
 // Original harbour beacon: simple octagonal masonry, dark cap and muted coral band.
 c.add(cylinder(8,.76),trs([0,5.3,0],[2.7,10.6,2.7]),'#f3e8d4',.03);
 c.add(cylinder(8,.79),trs([0,7.6,0],[2.31,1.15,2.31]),'#cb8e8a',.03);
 c.add(CY8,trs([0,10.7,0],[3.3,.4,3.3]),'#758997',.03);
 c.add(CY8,trs([0,11.65,0],[1.75,1.6,1.75]),'#a9ccd0',.02);
 c.add(cylinder(8,0),trs([0,12.8,0],[2.45,1.0,2.45]),'#6e8194',.02);
 for(let i=0;i<8;i++){const a=i*TAU/8;bar(c,[Math.cos(a)*1.75,10.9,Math.sin(a)*1.75],[Math.cos(a)*1.75,12.4,Math.sin(a)*1.75],.06,'#6e8194');}
 box(c,[0,.8,2.4],[1.1,1.6,.13],'#7c929e',.02);
}
const coastalStreetMeshes=new Map(),coastalStreetFoundations=new Map();
function coastalStreetReplaces(s){return coastalSpaceEnabled()&&s>=280&&s<=730;}
function coastalStreetRemoved(placements,origin){
 const street=coastalSpaceModel().street;
 return placements.filter(({node,key,s})=>{
  if((key.startsWith('house')||key.startsWith('shop'))&&coastalStreetReplaces(s))return true;
  if(coastBridgeClear(s)&&/^(house|shop|cherry|pine|palm|vending|lamp)/.test(key))return true;
  if(!key.startsWith('cherry')&&key!=='pine')return false;
  const data=node.mesh.sourceData,b={minX:Infinity,maxX:-Infinity,minZ:Infinity,maxZ:-Infinity};
  for(let i=0;i<data.length;i+=10){const p=add(transform(node.local,[data[i],data[i+1],data[i+2]]),origin);b.minX=Math.min(b.minX,p[0]);b.maxX=Math.max(b.maxX,p[0]);b.minZ=Math.min(b.minZ,p[2]);b.maxZ=Math.max(b.maxZ,p[2]);}
  // Conservative actual mesh AABB, with a half-metre vegetation margin.
  return street.instances.some(({placement:{bbox:a}})=>b.minX<=a.maxX+.5&&b.maxX>=a.minX-.5&&b.minZ<=a.maxZ+.5&&b.maxZ>=a.minZ-.5);
 }).map(p=>p.node);
}
// One hero harbour district on the seaward side of the bend and two lower
// satellite blocks further south. The street wall faces the circuit; the
// inside verge is deliberately left to low stands and flag poles so the bend
// exit stays readable. Sizes step down from two-storey shops to a clock tower.
const COAST_BLOCK_GROUPS=Object.freeze([
 {s:438,side:1,variant:1,roof:'#3fa9b5',stripes:['#3fa9b5','#f6ead4'],hero:true},
 {s:512,side:1,variant:2,roof:'#f2d38c',stripes:['#f2d38c','#fff7e6']},
 {s:584,side:1,variant:3,roof:'#e2684e',stripes:['#e2684e','#fff7e6'],hero:true},
]);
const COAST_TOWN_GATE_S=394;
const COAST_CLOCK_TOWER={s:665,side:1,l:32};
const COAST_PIT_SHEDS=Object.freeze([{s:406,l:16.6,variant:0},{s:636,l:16.8,variant:1},{s:682,l:24,variant:0}]);
const COAST_GRANDSTANDS=Object.freeze([{s:438,l:-15.5},{s:482,l:-16.2},{s:526,l:-15.4},{s:570,l:-16},{s:614,l:-15.2}]);
const COAST_FLAG_LINE=Object.freeze([{s:410,l:-12.6,c:0},{s:430,l:-12.8,c:1},{s:450,l:-13,c:2},{s:470,l:-12.6,c:3},{s:490,l:-12.8,c:0},{s:510,l:-13,c:1},{s:530,l:-12.6,c:2},{s:550,l:-12.8,c:3},{s:570,l:-13,c:0},{s:590,l:-12.6,c:1},{s:610,l:-12.8,c:2},{s:630,l:-13,c:3}]);
// The bend becomes a race-weekend seaside town. These are intentionally
// broad, chunky forms: two-storey shopfronts, low pit sheds and a far clock
// tower, each with geometric doors/windows and a striped CanvasTexture awning.
function coastRaceGate(){
 return scenicMesh('coast-race-gate',c=>{
  const coral='#e2684e',teal='#3fa9b5',gold='#f2c14e',cream='#fff3dd',navy='#35546d';
  for(const x of [-11.8,11.8]){
   box(c,[x,4.25,0],[2.15,8.5,1.75],cream,.14);
   box(c,[x,4.35,.94],[1.46,6.4,.16],teal,.05);
   for(let i=0;i<4;i++)box(c,[x,1.65+i*1.75,1.06],[1.56,.28,.08],i%2?coral:gold,.03);
   box(c,[x,8.55,0],[2.75,.48,2.2],navy,.06);
   box(c,[x,7.98,.97],[1.5,.2,.16],navy,.03);
  }
  box(c,[0,8.55,0],[26.4,2.35,1.6],coral,.18);
  box(c,[0,8.55,1.01],[23.4,.72,.13],cream,.05);
  for(let i=0;i<7;i++)box(c,[-9+i*3,8.22,1.1],[2.28,1.05,.09],i%2?teal:gold,.03);
  for(let i=0;i<9;i++)box(c,[-10.4+i*2.6,9.58,0],[1.28,.5,1.1],i%2?cream:gold,.025,[0,0,i%2?.18:-.18]);
  box(c,[0,10.0,0],[27.8,.2,.42],navy,.04);
  for(const x of [-12.8,12.8])ball(c,[x,10.15,0],[.28,.34,.28],gold,true,.2);
  for(const x of [-7.4,-3.8,3.8,7.4]){bar(c,[x,7.28,.8],[x,5.55,.8],.035,cream,.12);box(c,[x,5.75,.84],[1.1,.65,.05],x<0?teal:gold,.025,[0,0,x<0?-.18:.18])}
 });
}
function coastRaceGateBanner(){
 const mesh=scenicMesh('coast-race-gate-banner',c=>{
  for(const z of [-.89,.89])box(c,[0,8.55,z],[23.2,1.98,.08],'#ffffff',.02);
  for(const z of [-.87,.87])box(c,[0,7.12,z],[24.8,.42,.07],'#ffffff',.02);
 });
 mesh.stripeTexture=['#e2684e','#fff3dd'];
 mesh.stripePattern='diagonal';
 mesh.uvScale=[.062,.17];
 mesh.roughness=.55;
 return mesh;
}
function coastPitShed(variant){
 return scenicMesh('coast-pit-shed-'+variant,c=>{
  const wall=variant?'#f4d290':'#f6e8d2',trim=variant?'#3fa9b5':'#e2684e';
  box(c,[0,2.35,0],[9.6,4.7,6.2],wall,.14);
  roof(c,10.3,7.0,4.55,variant?'#3fa9b5':'#e2684e');
  box(c,[0,.36,3.18],[9.2,.72,.14],'#7c8f9f',.05);
  for(const x of [-2.55,.5]){
   box(c,[x,2.1,3.16],[3.3,3.45,.18],trim,.06);
   box(c,[x,2.08,3.28],[2.92,3.08,.08],'#62808e',.04);
   for(let i=0;i<7;i++)box(c,[x,1.0+i*.38,3.34],[2.8,.07,.05],'#9eb9bd',.01);
   box(c,[x,3.95,3.31],[3.38,.33,.16],'#fff0c6',.03);
  }
  box(c,[6.1,1.1,2.7],[1.0,2.2,.12],'#7c8f9f',.03);
  for(const x of [-4.1,4.1])box(c,[x,4.88,0],[.38,.42,.38],'#fff1d3',.02);
 });
}
function coastGrandstand(){
 return scenicMesh('coast-grandstand',c=>{
  const teal='#3fa9b5',cream='#fff0d8',coral='#e2684e',navy='#35546d',gold='#f2c14e';
  for(let tier=0;tier<3;tier++){
   const y=.55+tier*.68,z=1.1-tier*1.12;
   box(c,[0,y,z],[12.4,.7,1.34],tier%2?cream:'#dcebe4',.05);
   for(let i=0;i<9;i++)box(c,[-5.4+i*1.35,y+.48,z+.2],[.82,.22,.46],i%3===1?coral:teal,.025);
  }
  box(c,[0,2.52,-2.1],[12.8,2.35,.34],navy,.05);
  for(const x of [-6.2,6.2]){box(c,[x,1.2,.2],[.34,2.4,.34],cream,.03);box(c,[x,2.55,.2],[.78,.3,.7],gold,.03)}
  box(c,[0,3.92,-.8],[13.5,.28,4.9],teal,.04,[-.12,0,0]);
  for(const x of [-5.8,5.8])bar(c,[x,2.7,-2.2],[x,3.98,-.7],.08,cream,.12);
  for(let i=0;i<6;i++)box(c,[-5.2+i*2.08,4.18,-.8],[1.9,.5,.08],i%2?cream:coral,.025,[-.12,0,0]);
 });
}
function coastFlag(kind){
 return scenicMesh('coast-flag-'+kind,c=>{
  const cols=[['#e2684e','#fff1d8'],['#3fa9b5','#fff1d8'],['#f2c14e','#35546d'],['#83cde4','#e2684e']][kind%4];
  box(c,[0,.16,0],[.62,.32,.62],'#fff1d8',.03);
  bar(c,[0,.22,0],[0,5.15,0],.055,'#8da3b1',.15);
  ball(c,[0,5.22,0],[.13,.13,.13],'#f2c14e',true,.4);
  box(c,[.92,4.7,0],[1.9,.82,.055],cols[0],.02,[0,0,-.1]);
  box(c,[1.4,4.7,.03],[.95,.38,.04],cols[1],.01,[0,0,-.1]);
  box(c,[-.8,4.72,0],[1.55,.7,.05],cols[1],.02,[0,0,.12]);
  box(c,[-.32,4.72,.03],[.75,.3,.04],cols[0],.01,[0,0,.12]);
 });
}
function coastTownShop(key,cfg){
 return scenicMesh('coast-town-shop-'+key,c=>{
  const {w,d,h,base,trim,roofCol,floors}=cfg;
  box(c,[0,h/2,0],[w,h,d],base,.12);
  box(c,[0,.24,0],[w+.32,.48,d+.2],'#c9c1ad',.05);
  for(const x of [-w/2+.3,w/2-.3])box(c,[x,h/2,d/2+.02],[.44,h-.28,.14],trim,.04);
  box(c,[0,3.02,d/2+.04],[w-.34,.2,.14],trim,.03);
  box(c,[0,h-.25,d/2+.03],[w-.3,.24,.13],trim,.03);
  const z=d/2+.1,winW=(w-2.2)/3.2;
  const frontWindow=(x,y,ww,hh)=>{
   box(c,[x,y,z],[ww+.32,hh+.32,.15],'#fff2db',.03);
   box(c,[x,y,z+.025],[ww,hh,.13],'#4e7180',.02);
   box(c,[x,y,z+.11],[ww*.86,hh*.82,.035],'#a9dfe1',.02);
   box(c,[x,y,z+.135],[.045,hh*.82,.022],'#fff2db',.005);
   box(c,[x,y,z+.135],[ww*.86,.05,.022],'#fff2db',.005);
  };
  // A central recessed door and two oversized shop windows.
  box(c,[0,1.45,z],[2.0,2.9,.18],trim,.03);
  box(c,[0,1.42,z+.035],[1.66,2.62,.16],'#4e7180',.02);
  box(c,[0,1.48,z+.13],[1.22,2.30,.035],'#a9dfe1',.02);
  box(c,[.58,1.45,z+.17],[.12,.18,.05],'#ffe28a',.03);
  frontWindow(-3.85,1.72,2.2,2.3);frontWindow(3.85,1.72,2.2,2.3);
  // The sign band is a hard-edged shopfront, not a dense texture.
  box(c,[0,3.55,z],[w*.64,.68,.16],trim,.03);
  for(const x of [-2.25,-.45,1.35])box(c,[x,3.55,z+.1],[1.18,.4,.035],'#fff8e8',.01);
  if(floors>1){
   for(const x of [-3.8,0,3.8])frontWindow(x,5.1,2.35,1.65);
   box(c,[0,4.15,z-.02],[w*.82,.16,.1],trim,.02);
   for(const x of [-w*.34,w*.34])box(c,[x,4.65,z+.05],[.6,1.55,.12],trim,.025);
  }
  roof(c,w+1.1,d+1.15,h,roofCol);
  // Roof clutter establishes scale from the survey camera.
  for(const x of [-2.7,2.9])box(c,[x,h+1.35,-.8],[1.05,.9,1.1],'#9eaaa8',.04);
  box(c,[0,h+1.5,-1.1],[1.5,.72,1.7],'#d9d0bd',.04);
  box(c,[0,h+1.86,-1.1],[1.7,.08,1.9],trim,.02);
 });
}
const COAST_SHOP_ROW=Object.freeze([
 {s:414,l:19.0,key:'cream-2',floors:2,awn:0},
 {s:432,l:19.6,key:'coral-2',floors:2,awn:1},
 {s:450,l:18.5,key:'teal-2',floors:2,awn:2},
 {s:468,l:19.3,key:'cream-1',floors:1,awn:0},
 {s:486,l:18.6,key:'coral-1',floors:1,awn:1},
 {s:504,l:19.5,key:'teal-1',floors:1,awn:2},
 {s:522,l:18.7,key:'cream-1',floors:1,awn:0},
 {s:540,l:19.4,key:'coral-2',floors:2,awn:1},
 {s:558,l:18.8,key:'teal-1',floors:1,awn:2},
 {s:576,l:19.5,key:'cream-1',floors:1,awn:0},
 {s:594,l:18.9,key:'coral-2',floors:2,awn:1},
 {s:612,l:19.7,key:'teal-1',floors:1,awn:2},
 {s:630,l:19.1,key:'cream-2',floors:2,awn:0},
 {s:648,l:19.8,key:'coral-1',floors:1,awn:1},
]);
const COAST_SHOP_PALETTE=Object.freeze([
 {base:'#ffe3b1',trim:'#e9a94f',roof:'#3fa9b5',stripes:['#3fa9b5','#fff4dd']},
 {base:'#ef8e7b',trim:'#fff0d8',roof:'#f2c14e',stripes:['#e2684e','#fff4dd']},
 {base:'#79d0ca',trim:'#35546d',roof:'#e2684e',stripes:['#3fa9b5','#fff4dd']},
]);
function coastTownShopMesh(key,floors){
 const index={cream:0,coral:1,teal:2}[key.split('-')[0]],palette=COAST_SHOP_PALETTE[index];
 return coastTownShop(key,{w:13.2,d:6.5,h:floors>1?9.0:5.9,base:palette.base,trim:palette.trim,roofCol:palette.roof,floors});
}
function coastClockTower(){
 return scenicMesh('coast-clock-tower',c=>{
  const cream='#f7ead4',teal='#4eb6b9',coral='#e2684e',navy='#35546d',gold='#f2c14e';
  box(c,[0,3.9,0],[6.1,7.8,5.5],cream,.16);
  box(c,[0,.35,0],[6.6,.7,6.0],'#b9c5c3',.06);
  for(const x of [-1.8,0,1.8]){
   box(c,[x,2.0,2.8],[1.22,2.7,.15],teal,.05);
   box(c,[x,2.0,2.91],[.95,2.32,.08],'#8acfd4',.03);
   box(c,[x,2.0,2.96],[.06,2.32,.04],cream,.005);
  }
  box(c,[0,4.35,2.8],[5.05,.55,.22],coral,.04);
  box(c,[0,5.75,2.78],[4.85,1.65,.14],teal,.05);
  for(const x of [-1.6,0,1.6])box(c,[x,5.75,2.87],[1.05,1.22,.06],'#c5eced',.03);
  box(c,[0,7.9,0],[4.35,2.1,4.05],coral,.12);
  box(c,[0,7.1,2.08],[4.7,.35,.24],cream,.04);
  box(c,[0,9.0,0],[3.55,2.2,3.55],teal,.1);
  for(const side of [-1,1]){
   const z=side*1.83;
   c.add(cylinder(28),trs([0,9.05,z],[1.55,.22,1.55],[PI/2,0,0]),'#fff8e5',.28);
   c.add(torus(1.48,.09,36,8),trs([0,9.05,z+side*.13],[1,1,1]),coral,.2);
   box(c,[0,9.05,z+side*.28],[.12,.9,.06],navy,.02,[0,0,-.55]);
   box(c,[0,9.05,z+side*.28],[.82,.11,.06],navy,.02,[0,0,.22]);
   ball(c,[0,9.05,z+side*.33],[.12,.12,.05],gold,true,.4);
  }
  box(c,[0,10.5,0],[3.05,.45,3.05],cream,.05);
  cone(c,[0,12.0,0],[4.25,3.0,4.25],coral,[0,PI/4,0]);
  box(c,[0,13.4,0],[.12,1.0,.12],gold,.02);ball(c,[0,13.95,0],[.25,.25,.25],gold,true,.4);
  for(const x of [-1.35,1.35])box(c,[x,10.65,0],[.5,.7,.5],navy,.02);
 });
}
function coastBridgeSolid(){
 return scenicMesh('coast-bridge-portal-solid',c=>{
  const cream='#fff1d8',teal='#3fa9b5',coral='#e2684e',navy='#35546d',gold='#f2c14e';
  for(const x of [-12.1,12.1]){
   box(c,[x,4.2,0],[1.9,8.4,1.8],cream,.14);
   box(c,[x,4.2,.95],[1.22,5.9,.16],teal,.05);
   for(let i=0;i<4;i++)box(c,[x,1.6+i*1.6,1.06],[1.3,.32,.08],i%2?coral:gold,.03);
   box(c,[x,8.42,0],[2.55,.45,2.05],navy,.05);
  }
  box(c,[0,8.35,0],[27.2,2.35,1.55],cream,.16);
  box(c,[0,8.35,0],[26.5,.28,1.9],navy,.04);
  for(const x of [-9.2,9.2]){bar(c,[x,8.0,1.0],[x,6.4,1.0],.04,cream,.1);box(c,[x,6.55,1.04],[1.25,.8,.06],gold,.02,[0,0,x<0?-.15:.15])}
 });
}
function coastBridgeBanner(){
 const mesh=scenicMesh('coast-bridge-portal-banner',c=>{
  box(c,[0,8.35,.86],[23.4,1.55,.12],'#ffffff',.04);
  box(c,[0,7.15,.9],[25.2,.48,.15],'#ffffff',.03);
  for(let i=0;i<5;i++)box(c,[-9.5+i*4.75,8.35,.95],[1.0,1.35,.05],'#ffffff',.01);
 });
 mesh.stripeTexture=['#f7f1e2','#e2684e'];
 mesh.stripePattern='diagonal';
 mesh.uvScale=[.07,.16];
 mesh.roughness=.55;
 return mesh;
}

const COAST_BLOCK_HIDDEN_ROWS=new Set([320,360,400,440,480,520,560,600,640,680]);
const COAST_GAP_PALMS=Object.freeze([344,356,430,442,454,548,560,572,668,680]);
// Five deliberately uneven shore groups; the large one sits in the bay that
// reads to the right of the elevated survey camera.
const COAST_SHORE_CLUSTERS=Object.freeze([
 {s:330,l:37,kind:'grove',scale:1.18},
 {s:368,l:54,kind:'rocks',scale:1.55},
 {s:520,l:58,kind:'bay',scale:2.6},
 {s:562,l:78,kind:'rocks',scale:1.8},
 {s:604,l:42,kind:'shrubs',scale:1.1},
]);
const COAST_INLAND_GROVES=Object.freeze([
 {s:148,l:40,kind:'mixed',scale:1.05},
 {s:268,l:-42,kind:'pines',scale:1.0},
 {s:430,l:52,kind:'mixed',scale:1.15},
 {s:402,l:46,kind:'mixed',scale:1.05},
 {s:470,l:60,kind:'mixed',scale:1.2},
 {s:418,l:-54,kind:'pines',scale:1.08},
 {s:560,l:-48,kind:'mixed',scale:1.02},
 {s:704,l:-44,kind:'pines',scale:1.05},
 {s:946,l:46,kind:'mixed',scale:1.15},
 {s:1122,l:-48,kind:'pines',scale:1.1},
 {s:1360,l:40,kind:'mixed',scale:1.05},
]);
function coastClusterNode(root,origin,mesh,s,l,scale,rot=0,dy=-.28){
 if(s<0||s>=CIRCUIT_LENGTH)return null;
 if(typeof sceneryClear==='function'&&!sceneryClear(s,l))return null;
 const r=road(s),pos=sub(atRoad(s,l,dy),origin),sc=Array.isArray(scale)?scale:[scale,scale,scale];
 const node=new Node(mesh,trs(pos,sc,[0,-r.h+(l>0?PI:0)+rot,0]));root.add(node);return node;
}
function coastGroundDy(s,l){const r=road(s),x=r.p[0]+r.R[0]*l,z=r.p[2]+r.R[2]*l;return coastalSpaceModel().surface(x,z)-r.p[1];}
function coastShoreNode(root,origin,mesh,s,l,scale,rot=0,landOnly=false,sink=0){
 if(s<0||s>=CIRCUIT_LENGTH||!sceneryClear(s,l))return null;
 const r=road(s),x=r.p[0]+r.R[0]*l,z=r.p[2]+r.R[2]*l;
 let y=coastalSpaceModel().surface(x,z);
 if(y<-.45){if(landOnly)return null;y=-.70-sink;}
 return root.add(new Node(mesh,trs([x-origin[0],y-.02-origin[1],z-origin[2]],Array.isArray(scale)?scale:[scale,scale,scale],[0,-r.h+(l>0?PI:0)+rot,0])));
}
function coastShoreClusters(root,origin,k){
 for(const c of COAST_SHORE_CLUSTERS)if(Math.floor(c.s/40)===k){
  if(c.kind==='rocks'||c.kind==='bay'){
   const defs=c.kind==='bay'?[[-9,-1,1.65],[0,3,1.35],[8,-5,1.55],[4,9,1.15],[-5,10,1.3],[13,1,1.05]]:[[-5,0,1.3],[2,3,1.1],[7,-2,.95]];
   for(let i=0;i<defs.length;i++){const [ds,dl,sc]=defs[i];coastShoreNode(root,origin,scenicProp(i%2?'coast-rock-b':'coast-rock-a'),c.s+ds,c.l+dl,c.scale*sc,i*1.7,false,i*.04)}
  }
  if(c.kind==='grove'||c.kind==='bay'){
   for(const [ds,dl,sc] of [[-4,-3,.95],[2,2,1.1],[6,-1,.88]])coastShoreNode(root,origin,scenicProp('palm'),c.s+ds,c.l+dl-14,c.scale*sc,0,true);
   if(c.kind==='grove')for(const [ds,dl,sc] of [[-6,4,1.3],[4,6,1.05]])coastShoreNode(root,origin,scenicProp('pine'),c.s+ds,c.l+dl-8,c.scale*sc,0,true);
  }
  if(c.kind==='shrubs'||c.kind==='bay')for(let i=0;i<6;i++)coastShoreNode(root,origin,scenicProp('coast-shrub'),c.s-9+i*3.2,c.l-10+(i%3)*2.6,c.scale*(.8+(i%4)*.16),i*.9,true);
  if(c.kind==='grove')for(let i=0;i<5;i++)coastShoreNode(root,origin,scenicProp('coast-shrub'),c.s-8+i*3.6,c.l-12+(i%2)*4,c.scale*(.75+(i%3)*.2),i*1.1,true);
 }
}
// Inland groves break up the broad empty land in the lower half of the survey
// view without adding another even row along the guardrail.
function coastInlandGroves(root,origin,k){
 for(const c of COAST_INLAND_GROVES)if(Math.floor(c.s/40)===k){
  const trees=c.kind==='mixed'?5:4;
  for(let i=0;i<trees;i++)coastShoreNode(root,origin,scenicProp(i%3===0?'cherry'+(i%3):'pine'),c.s-8+i*4,c.l+(i%2?6:-5),c.scale*(.9+(i%3)*.12),i*1.3,true);
  for(let i=0;i<4;i++)coastShoreNode(root,origin,scenicProp('coast-shrub'),c.s-6+i*4.4,c.l-8+(i%2)*5,c.scale*(.8+(i%3)*.18),i*.9,true);
  if(c.kind==='mixed')coastShoreNode(root,origin,scenicProp('coast-rock-a'),c.s+7,c.l+2,c.scale*.8,.6,true);
 }
}
function coastHarborBlock(root,origin,g){
 const side=g.side,s=g.s,hero=Boolean(g.hero),mainL=side*(hero?33:27),shopL=side*19.2;
 const tree=(ss,l,key,scale,rot=0)=>coastClusterNode(root,origin,scenicProp(key),ss,l,scale,rot,coastGroundDy(ss,l)-.03);
 // Main house: the same townhouse mesh, raised into a small seaside hotel.
 const mainS=s-12,mainBase=coastGroundDy(mainS,mainL),mainScale=hero?[1.55,2.15,1.55]:[1.15,1.6,1.15];
 coastClusterNode(root,origin,coastPlinth(),mainS,mainL,[mainScale[0]*6.3,.62,mainScale[2]*5.5],0,mainBase-.02);
 coastClusterNode(root,origin,scenicProp('house'+g.variant),mainS,mainL,mainScale,0,mainBase);
 coastClusterNode(root,origin,coastRoof('main'+g.variant,g.roof),mainS,mainL,hero?1.14:1.0,0,mainBase+mainScale[1]*5.18);
 if(hero)coastClusterNode(root,origin,coastAwning('hero',g.stripes),mainS,side*28.2,1.12,0,mainBase+3.35);
 // Low shops step along the street; the long arcade ties them together.
 const shops=hero?[[-19,0,.80],[-7,1,.88],[5,2,.84]]:[[-5,1,.80],[7,2,.78]];
 for(const [ds,variant,scale] of shops){
  const ss=s+ds,base=coastGroundDy(ss,shopL);
  coastClusterNode(root,origin,coastPlinth(),ss,shopL,[6.5*scale,.50,5.3*scale],0,base-.01);
  coastClusterNode(root,origin,scenicProp('shop'+variant),ss,shopL,scale,0,base);
  coastClusterNode(root,origin,coastRoof('shop'+variant,g.roof),ss,shopL,scale*.94,0,base+3.05*(scale/.88));
  coastClusterNode(root,origin,coastAwning('s'+variant+g.variant,g.stripes),ss,side*15.3,scale*.96,0,base+2.38*(scale/.88));
 }
 if(hero)coastClusterNode(root,origin,scenicProp('coast-arcade'),s-6,side*15.1,1.16,0,coastGroundDy(s-6,side*15.1)+2.04);
 // Two smaller houses close the block ends, with an open courtyard between.
 const smallA='house'+((g.variant+2)%4),smallB='house'+((g.variant+3)%4),endA=coastGroundDy(s+19,side*22.8),endB=coastGroundDy(s-20,side*19.6);
 coastClusterNode(root,origin,coastPlinth(),s+19,side*22.8,[5.7,.46,4.9],0,endA-.02);
 coastClusterNode(root,origin,scenicProp(smallA),s+19,side*22.8,.82,0,endA);
 coastClusterNode(root,origin,coastRoof('a'+g.variant,g.roof),s+19,side*22.8,.77,0,endA+3.52);
 coastClusterNode(root,origin,coastPlinth(),s-20,side*19.6,[5.3,.44,4.7],0,endB-.02);
 coastClusterNode(root,origin,scenicProp(smallB),s-20,side*19.6,.78,0,endB);
 coastClusterNode(root,origin,coastRoof('b'+g.variant,g.variant===1?'#e2684e':'#f2d38c'),s-20,side*19.6,.73,0,endB+3.35);
 const deckBase=coastGroundDy(s-1,side*21.4);
 coastClusterNode(root,origin,coastDeck(),s-1,side*21.4,[10,.17,5.6],0,deckBase+.03);
 for(const [ds,dl] of [[-5.4,25.0],[3.2,25.0],[-1.2,17.4]]){const base=coastGroundDy(s+ds,side*dl);coastClusterNode(root,origin,coastPlanter(),s+ds,side*dl,1,0,base)}
 const signBase=coastGroundDy(s+2.5,side*15.2);coastClusterNode(root,origin,coastSign(),s+2.5,side*15.2,1,0,signBase+.02);
 coastClusterNode(root,origin,scenicProp('vending'),s-14,side*16.4,.94,0,coastGroundDy(s-14,side*16.4));
 // Pink trees gather at the block ends; palms frame the courtyard.
 for(const end of [-24,24])for(const off of [-2.6,2.5]){
  tree(s+end+off,side*(14.4+Math.abs(off)*.7),'cherry'+((g.variant+(off<0?0:1))%3),1.02+Math.abs(off)*.04,0);
  tree(s+end-off*.4,-side*13.2,'cherry'+((g.variant+(off<0?2:0))%3),.92,0);
 }
 tree(s-2.5,side*30,'palm',1.10,0);tree(s+4.5,side*30.5,'palm',1.00,0);
}

function coastTownNode(root,origin,mesh,s,l,scale=1,rot=0,dy=.02){
 if(s<0||s>=CIRCUIT_LENGTH||!sceneryClear(s,l))return null;
 const r=road(s),base=coastGroundDy(s,l),pos=sub(atRoad(s,l,base+dy),origin);
 return root.add(new Node(mesh,trs(pos,Array.isArray(scale)?scale:[scale,scale,scale],[0,-r.h+(l>0?PI:0)+rot,0])));
}
function coastSeasideTown(root,origin,k){
 // The portal is deliberately tall and open: 11.8 m legs outside the rail,
 // 7.4 m clear under the header, so chase and survey cameras both pass cleanly.
 if(Math.floor(COAST_TOWN_GATE_S/40)===k){
  const s=COAST_TOWN_GATE_S,r=road(s),local=trs(sub(atRoad(s,0,.02),origin),[1.15,1.15,1.15],[0,-PI/2-r.h,0]);
  root.add(new Node(coastRaceGate(),local));
  root.add(new Node(coastRaceGateBanner(),local));
 }
 for(const shop of COAST_SHOP_ROW)if(Math.floor(shop.s/40)===k){
  const node=coastTownNode(root,origin,coastTownShopMesh(shop.key,shop.floors),shop.s,shop.l,shop.floors>1?1.02:1);
  if(node){const awning=new Node(coastAwning('row-'+shop.s,COAST_SHOP_PALETTE[shop.awn].stripes));awning.local=trs([0,3.27,3.28],[2.02,1,1]);node.add(awning)}
 }
 for(const shed of COAST_PIT_SHEDS)if(Math.floor(shed.s/40)===k)coastTownNode(root,origin,coastPitShed(shed.variant),shed.s,shed.l,1.02);
 for(const stand of COAST_GRANDSTANDS)if(Math.floor(stand.s/40)===k)coastTownNode(root,origin,coastGrandstand(),stand.s,stand.l,1.08);
 for(const flag of COAST_FLAG_LINE)if(Math.floor(flag.s/40)===k)coastTownNode(root,origin,coastFlag(flag.c),flag.s,flag.l,1.03);
 if(Math.floor(COAST_CLOCK_TOWER.s/40)===k)coastTownNode(root,origin,coastClockTower(),COAST_CLOCK_TOWER.s,COAST_CLOCK_TOWER.l*COAST_CLOCK_TOWER.side,1.3);
}
// A continuous deck, side fascia and repeated piers under the same centreline
// samples used by the drive surface. Piers stop short of the crest ends so the
// bend exit stays visually open; the water remains visible between bents.
function coastBridgeFace(c,a,b,d,cc,n,col,gloss=.08){
 const base=c.data.length/10,face=norm(cross(sub(b,a),sub(cc,a)));
 const points=dot(face,n)<0?[a,d,cc,b]:[a,b,cc,d];
 for(const p of points)c.data.push(...p,...n,...color(col),gloss);
 c.indices.push(base,base+1,base+2,base,base+2,base+3);
}
function coastBridgeStructure(root,origin,k){
 if(typeof COAST_BRIDGE==='undefined')return;
 const bridge=COAST_BRIDGE,start=Math.max(k*40,bridge.start+4),end=Math.min(k*40+40,bridge.fallEnd-4);
 if(end<=start)return;
 const c=new Collector(),L=p=>sub(p,origin),deckTop=.08,deckBottom=1.55,outer=10.55;
 const stations=[];for(let s=start;s<=end+.01;s+=4)stations.push({s,r:road(s)});
 for(let j=0;j<stations.length-1;j++){
  const a=stations[j],b=stations[j+1];
  for(const side of [-1,1]){
   const l=side*outer,top0=L(atRoad(a.s,l,deckTop)),top1=L(atRoad(b.s,l,deckTop));
   const low0=L(atRoad(a.s,l,-deckBottom)),low1=L(atRoad(b.s,l,-deckBottom));
   const mid=road((a.s+b.s)*.5),n=mul(mid.R,side);
   coastBridgeFace(c,top0,top1,low1,low0,n,'#dfd2b9',.05);
   coastBridgeFace(c,top0,top1,add(top1,[0,-.34,0]),add(top0,[0,-.34,0]),n,'#e2684e',.08);
   coastBridgeFace(c,add(low0,[0,.32,0]),add(low1,[0,.32,0]),low1,low0,n,'#35546d',.06);
  }
  const under0=[L(atRoad(a.s,-outer,-deckBottom)),L(atRoad(a.s,outer,-deckBottom))];
  const under1=[L(atRoad(b.s,-outer,-deckBottom)),L(atRoad(b.s,outer,-deckBottom))];
  coastBridgeFace(c,under0[0],under0[1],under1[1],under1[0],[0,-1,0],'#9e9b91',.04);
  // Repeated cross girders tie the two fascia beams together.
  const mid=road((a.s+b.s)*.5),p=L(atRoad((a.s+b.s)*.5,0,-deckBottom-.18));
  box(c,p,[.32,.34,20.8],'#b7c0bf',.04,[0,-mid.h,0]);
 }
 // Piers and caps: every 20 m, with an outer highlight band.
 const first=Math.ceil((bridge.start+16)/20)*20,last=bridge.fallEnd-24;
 for(let s=first;s<=last;s+=20){
  if(s<start-.01||s>end+.01)continue;
  const r=road(s),low=-1.03,height=Math.max(1,r.p[1]-low-deckBottom),center=(low-r.p[1]-deckBottom)*.5;
  for(const side of [-1,1]){
   const p=L(atRoad(s,side*7.3,center));
   box(c,p,[1.12,height,1.8],'#d8cbb5',.04,[0,-r.h,0]);
   box(c,p,[1.38,.42,2.02],'#b7c0bf',.03,[0,-r.h,0]);
   box(c,L(atRoad(s,side*7.3,low+.24-r.p[1])),[1.65,.46,2.25],'#9fa9a6',.03,[0,-r.h,0]);
  }
  box(c,L(atRoad(s,0,-deckBottom-.18)),[1.25,.62,18.9],'#b7c0bf',.04,[0,-r.h,0]);
  // X-braces on the outer face make the bents read as a bridge, not posts.
  const p1=L(atRoad(s-2.7,-7.3,-deckBottom-1.35)),p2=L(atRoad(s+2.7,-7.3,-deckBottom-.55));
  const p3=L(atRoad(s-2.7,7.3,-deckBottom-1.35)),p4=L(atRoad(s+2.7,7.3,-deckBottom-.55));
  bar(c,p1,p4,.10,'#c98a72',.1);bar(c,p2,p3,.10,'#c98a72',.1);
 }
 const mesh=c.finish();mesh.roughness=.8;root.add(new Node(mesh));
}
function coastBridgePortal(root,origin,k){
 if(typeof COAST_BRIDGE==='undefined')return;
 const s=COAST_BRIDGE.start-7;if(Math.floor(s/40)!==k)return;
 const r=road(s),local=trs(sub(atRoad(s,0,.02),origin),[1,1,1],[0,-PI/2-r.h,0]);
 root.add(new Node(coastBridgeSolid(),local));
 root.add(new Node(coastBridgeBanner(),local));
}
function coastGapPalms(root,origin,k){
 for(const s of COAST_GAP_PALMS)if(Math.floor(s/40)===k)for(const side of [-1,1])
  coastClusterNode(root,origin,scenicProp('palm'),s,side*(11.1+((s/4)%2)*.7),.95+((s/8)%3)*.06,0,-.28);
}
function coastalSpaceDecorate(root,k,origin){
 for(const entry of coastalSpaceModel().street.instances){
  const {part,placement,foundation}=entry;if(Math.floor(placement.station/40)!==k)continue;
  if(!coastalStreetMeshes.has(part.name)){const mesh=new Mesh(part.sourceData,part.sourceIndices);mesh.coastStreet=true;mesh.roughness=.62;coastalStreetMeshes.set(part.name,mesh);}
  if(!coastalStreetFoundations.has(entry)){const c=new Collector();c.add(foundation,I,'#b7b7aa',.08);const mesh=c.finish();mesh.coastStreet=true;mesh.roughness=.78;coastalStreetFoundations.set(entry,mesh);}
  // Do not apply source pivot again, rotate/re-scale, or snap height to terrain.
  const matrix=placement.matrix.slice();for(let j=0;j<3;j++)matrix[12+j]-=origin[j];
  const hidden=COAST_BLOCK_HIDDEN_ROWS.has(entry.row.centerS);
  const foundationNode=new Node(coastalStreetFoundations.get(entry),matrix);if(hidden)foundationNode.hidden=true;root.add(foundationNode);
  const houseNode=new Node(coastalStreetMeshes.get(part.name),matrix);if(hidden)houseNode.hidden=true;root.add(houseNode);
 }

 coastSeasideTown(root,origin,k);
 coastBridgePortal(root,origin,k);
 coastBridgeStructure(root,origin,k);
 coastGapPalms(root,origin,k);
 coastShoreClusters(root,origin,k);
 coastInlandGroves(root,origin,k);

 for(const p of coastalSpaceModel().props){if(Math.floor(p.s/40)!==k)continue;
  if(p.minRoadDistance-p.radius*Math.SQRT2<28)throw Error('Coastal prop intrudes into protected road margin');
  const r=road(p.s),mesh=p.key==='coast-beacon'?scenicMesh('coast-beacon',coastalBeacon):scenicProp(p.key);
  root.add(new Node(mesh,trs([p.x-origin[0],p.y-origin[1],p.z-origin[2]],[p.scale,p.scale,p.scale],[0,-r.h+PI,0])));
 }
}

// Roll back every committed addition, including earlier streamed/cached chunks.
const coastalSpaceAdditions=new Map();
let coastalSpaceLandscapeActive=false;
function commitCoastalSpace(root,additions,removed=[]){const baseline=[...root.children];root.children=root.children.filter(node=>!removed.includes(node));for(const node of additions.children)root.add(node);coastalSpaceAdditions.set(root,{baseline,nodes:[...additions.children]});}
function disableCoastalSpace(){
 coastalSpaceCandidate=false;
 for(const [root,{baseline,nodes}] of coastalSpaceAdditions){const extra=root.children.filter(node=>!nodes.includes(node)&&!baseline.includes(node));root.children=[...baseline,...extra];}
 coastalSpaceAdditions.clear();
 for(const mesh of [...coastalStreetMeshes.values(),...coastalStreetFoundations.values()])mesh.dispose();
 coastalStreetMeshes.clear();coastalStreetFoundations.clear();coastalSpaceModelCache=null;
 if(typeof sideCandidates!=='undefined')sideCandidates.disable('space');
 if(coastalSpaceLandscapeActive){coastalSpaceLandscapeActive=false;buildLandscape();}
}
