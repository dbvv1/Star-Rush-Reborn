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
 const props=[{key:'house0',s:480,l:38,scale:1.18,radius:5.5},{key:'house2',s:500,l:39,scale:1.12,radius:5.3},{key:'shop1',s:530,l:38,scale:1.1,radius:6},{key:'coast-beacon',s:510,l:60,scale:1,radius:7},{key:'pine',s:450,l:47,scale:1.5,radius:4.2},{key:'pine',s:540,l:37,scale:1.7,radius:4.8}].map(row=>{
  const r=circuitRoad(row.s),x=r.p[0]+r.R[0]*row.l,z=r.p[2]+r.R[2]*row.l;
  const heights=[[-1,-1],[-1,1],[1,-1],[1,1],[0,0]].map(([a,b])=>surface(x+a*row.radius,z+b*row.radius));
  return {...row,x,z,y:row.key==='pine'?surface(x,z)-.1:Math.max(...heights)+.12,foundationBottom:Math.min(...heights)-.2,minRoadDistance:nearest(x,z).d};
 });
 return coastalSpaceModelCache={bounds,vertices,triangles,props,nearest,surface};
}
function coastalSpaceTerrain(c){
 const model=coastalSpaceModel();
 for(const ids of model.triangles){const p=ids.map(i=>model.vertices[i]);if(p.every(v=>v[1]<-.9))continue;const n=norm(cross(sub(p[1],p[0]),sub(p[2],p[0]))),y=p.reduce((s,v)=>s+v[1],0)/3;
  const col=y<.15?'#d8c7aa':y>2.5?'#a6b493':'#bfcca8';c.add(shape(p.flat(),[...n,...n,...n],[0,1,2]),I,col,.02);
 }
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
function coastalSpaceDecorate(root,k,origin){
 for(const p of coastalSpaceModel().props){if(Math.floor(p.s/40)!==k)continue;
  if(p.minRoadDistance-p.radius*Math.SQRT2<28)throw Error('Coastal prop intrudes into protected road margin');
  const r=road(p.s),mesh=p.key==='coast-beacon'?scenicMesh('coast-beacon',coastalBeacon):scenicProp(p.key);
  root.add(new Node(mesh,trs([p.x-origin[0],p.y-origin[1],p.z-origin[2]],[p.scale,p.scale,p.scale],[0,-r.h+PI,0])));
 }
}
