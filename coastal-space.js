// Original deterministic coastal-space draft. World coordinates, no RNG or collision data.
// A single merged terrain mesh and shared existing props retain the forward renderer.
function coastalSpaceEnabled(){return typeof coastalSpaceCandidate!=='undefined'&&coastalSpaceCandidate&&roadDriving&&raceMode==='circuit'&&activeTrackId==='coast-reborn'}
let coastalSpaceModelCache=null;
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
 const grass=color('#91a079'),meadow=color('#a9b58b'),earth=color('#aaa186'),rock=color('#96968b'),shore=color('#c1b69d');
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
// The scene recipe changes presentation only: fixed-source placements, XZ hulls,
// foundations and gameplay remain untouched. Copies never mutate source GLB data.
var coastalDistrictReady=true;
const coastalDistrictNodes=[];
function coastalDistrictEnabled(){return typeof renderingOptions!=='undefined'&&renderingOptions.coastalScene&&coastalSpaceEnabled();}
function coastalDistrictMesh(part,entry){
 const band=Math.floor((entry.row.centerS-320)/80),variant=(band+entry.row.side+3)%3;
 const key=part.name+':district:'+variant;
 if(!coastalStreetMeshes.has(key)){
  const data=new Float32Array(part.sourceData),height=[.84,1.12,1][variant];
  const tint=[[1.08,.98,.86],[.90,1.03,1.05],[1.06,.94,.92]][variant];
  for(let i=0;i<data.length;i+=10){
   data[i+1]*=height;
   const n=norm([data[i+3],data[i+4]/height,data[i+5]]);data.set(n,i+3);
   // Broad palette families, not random per-vertex speckle. Glass stays cool.
   if(data[i+8]<data[i+6]*1.18)for(let j=0;j<3;j++)data[i+6+j]=clamp(data[i+6+j]*tint[j],0,1);
  }
  const mesh=new Mesh(data,part.sourceIndices);mesh.coastStreet=true;coastalStreetMeshes.set(key,mesh);
 }
 return coastalStreetMeshes.get(key);
}
function coastalDistrictPlanting(k,origin){
 const model=coastalSpaceModel(),c=new Collector();let count=0;
 // Clusters bridge the large empty lawn between street and shoreline. Keep
 // broad open gaps around the beacon and protect every road segment/house.
 for(let j=0;j<9;j++){
  const s=k*40+4+j*4,side=(k%3===1?-1:1),l=side*(33+(j%3)*5);
  if(s<280||s>735)continue;
  const r=road(s),x=r.p[0]+r.R[0]*l,z=r.p[2]+r.R[2]*l,radius=2.1;
  if(model.nearest(x,z).d<31||x-radius<model.bounds.x0||x+radius>model.bounds.x1||z-radius<model.bounds.z0||z+radius>model.bounds.z1)continue;
  if(model.street.instances.some(({placement:{bbox:b}})=>x+radius>b.minX&&x-radius<b.maxX&&z+radius>b.minZ&&z-radius<b.maxZ))continue;
  if(model.props.some(p=>Math.hypot(x-p.x,z-p.z)<p.radius+radius+2))continue;
  const heights=[[-1,-1],[-1,1],[1,-1],[1,1],[0,0]].map(([a,b])=>model.surface(x+a*radius,z+b*radius));
  if(Math.min(...heights)<-.45||Math.max(...heights)-Math.min(...heights)>.8)continue;
  const y=model.surface(x,z),p=[x-origin[0],y-origin[1]-.18,z-origin[2]];
  // Reuse the vendored CC0 detailed bush (104 triangles), not more spherical
  // crowns. Merge three sizes/rotations per cluster into one chunk mesh.
  const plant=trainingPlantShape();
  c.add(plant,trs(add(p,[-.65,0,0]),[1.1,.85,1.1],[0,k*.73+j,0]),'#65886b',.02);
  c.add(plant,trs(add(p,[.55,0,.2]),[1.35,1.15,1.25],[0,k*.73+j+1.9,0]),'#819a70',.02);
  c.add(plant,trs(add(p,[0,0,-.65]),[.9,.65,.9],[0,k*.73+j+3.7,0]),'#a1ad7b',.02);count++;
 }
 if(!count)return null;const node=new Node(c.finish());node.coastDistrictClusters=count;return node;
}
function rollbackCoastalDistrict(){
 for(const item of coastalDistrictNodes){if(item.original)item.node.mesh=item.original;else{item.node.mesh.dispose();item.node.mesh=null;}}
 coastalDistrictNodes.length=0;
}

function coastalStreetReplaces(s){return coastalSpaceEnabled()&&s>=300&&s<=710;}
function coastalStreetRemoved(placements,origin){
 const street=coastalSpaceModel().street;
 return placements.filter(({node,key,s})=>{
  if((key.startsWith('house')||key.startsWith('shop'))&&coastalStreetReplaces(s))return true;
  if(!key.startsWith('cherry')&&key!=='pine')return false;
  const data=node.mesh.sourceData,b={minX:Infinity,maxX:-Infinity,minZ:Infinity,maxZ:-Infinity};
  for(let i=0;i<data.length;i+=10){const p=add(transform(node.local,[data[i],data[i+1],data[i+2]]),origin);b.minX=Math.min(b.minX,p[0]);b.maxX=Math.max(b.maxX,p[0]);b.minZ=Math.min(b.minZ,p[2]);b.maxZ=Math.max(b.maxZ,p[2]);}
  // Conservative actual mesh AABB, with a half-metre vegetation margin.
  return street.instances.some(({placement:{bbox:a}})=>b.minX<=a.maxX+.5&&b.maxX>=a.minX-.5&&b.minZ<=a.maxZ+.5&&b.maxZ>=a.minZ-.5);
 }).map(p=>p.node);
}
function coastalSpaceDecorate(root,k,origin){
 for(const entry of coastalSpaceModel().street.instances){
  const {part,placement,foundation}=entry;if(Math.floor(placement.station/40)!==k)continue;
  if(!coastalStreetMeshes.has(part.name)){const mesh=new Mesh(part.sourceData,part.sourceIndices);mesh.coastStreet=true;coastalStreetMeshes.set(part.name,mesh);}
  if(!coastalStreetFoundations.has(entry)){const c=new Collector();c.add(foundation,I,'#b7b7aa',.08);const mesh=c.finish();mesh.coastStreet=true;coastalStreetFoundations.set(entry,mesh);}
  // Do not apply source pivot again, rotate/re-scale, or snap height to terrain.
  const matrix=placement.matrix.slice();for(let j=0;j<3;j++)matrix[12+j]-=origin[j];
  root.add(new Node(coastalStreetFoundations.get(entry),matrix));
  const original=coastalStreetMeshes.get(part.name),node=new Node(coastalDistrictEnabled()?coastalDistrictMesh(part,entry):original,matrix);
  root.add(node);if(node.mesh!==original)coastalDistrictNodes.push({node,original});
 }

 if(coastalDistrictEnabled()){const node=coastalDistrictPlanting(k,origin);if(node){root.add(node);coastalDistrictNodes.push({root,node});}}
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
 rollbackCoastalDistrict();coastalSpaceCandidate=false;
 for(const [root,{baseline,nodes}] of coastalSpaceAdditions){const extra=root.children.filter(node=>!nodes.includes(node)&&!baseline.includes(node));root.children=[...baseline,...extra];}
 coastalSpaceAdditions.clear();
 for(const mesh of [...coastalStreetMeshes.values(),...coastalStreetFoundations.values()])mesh.dispose();
 coastalStreetMeshes.clear();coastalStreetFoundations.clear();coastalSpaceModelCache=null;
 if(typeof sideCandidates!=='undefined')sideCandidates.disable('space');
 if(coastalSpaceLandscapeActive){coastalSpaceLandscapeActive=false;buildLandscape();}
}
