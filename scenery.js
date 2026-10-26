// Original, reusable 3D props for two anime-inspired Japanese town circuits.
// Buildings, trees and landmarks share GPU meshes; no runtime image downloads.
const scenicCache=new Map();
function scenicMesh(key,build){if(!scenicCache.has(key)){const c=new Collector();build(c);scenicCache.set(key,c.finish())}return scenicCache.get(key)}
function roof(c,w,d,y,col='#627596'){
 const a=[-w/2,y,-d/2],b=[w/2,y,-d/2],cc=[w/2,y,d/2],dd=[-w/2,y,d/2],e=[-w/2,y+1.3,0],f=[w/2,y+1.3,0];
 quad(c,a,b,f,e,col);quad(c,e,f,cc,dd,col);quad(c,a,e,dd,dd,'#e9e1d2');quad(c,b,cc,f,f,'#e9e1d2');
 for(let i=0;i<9;i++){const x=-w/2+i*w/8;path(c,[[x,y,-d/2],[x,y+1.3,0],[x,y,d/2]],.025,'#8797b0')}
 bar(c,[-w/2-.15,y+1.33,0],[w/2+.15,y+1.33,0],.08,col);
}
function townhouse(c,index=0){
 const col=['#fff0db','#e9eafa','#f9dbe2','#e0f1ec'][index%4],trim=['#7190b6','#9a82b3','#be8f98','#6c9a9a'][index%4];
 box(c,[0,2.65,0],[6,5.3,4.8],col,.08);box(c,[0,.12,0],[6.4,.24,5.1],'#b9b7c5',.035);roof(c,6.7,5.8,5.3,trim);
 for(const side of [-1,1])for(const x of [-1.9,0,1.9])for(const y of [1.4,3.85]){
  box(c,[x,y,side*2.425],[1.2,1.35,.055],trim,.025);box(c,[x,y,side*2.46],[1.05,1.18,.03],'#b8dfe8',.01,[0,0,0],.45);
  bar(c,[x,y-.58,side*2.49],[x,y+.58,side*2.49],.025,'#f4f7fa');box(c,[x,y-.72,side*2.55],[1.35,.12,.28],trim,.015);
 }
 box(c,[0,1.03,2.5],[1.04,2.05,.10],'#798c9c',.025);box(c,[.34,1.03,2.57],[.05,.12,.04],'#f7d5a4',.01);
 for(const side of [-1,1]){box(c,[side*2.65,.48,2.9],[.65,.9,.7],'#b9c9b0',.035);ball(c,[side*2.65,1.14,2.9],[.6,.55,.5],'#88ba9a',true)}
}
function shop(c,index=0){
 const accent=['#ef9ba5','#88bfc9','#a6a0d5'][index%3];box(c,[0,2.0,0],[7,4,4.8],'#fff1dd',.06);roof(c,7.7,5.8,4, '#6f7d98');
 for(const x of [-2.05,0,2.05]){box(c,[x,1.4,2.45],[1.8,2.15,.06],'#88afb9',.02);box(c,[x,1.45,2.5],[1.54,1.92,.025],'#c2e4e8',.015);box(c,[x,1.45,2.54],[.045,1.92,.02],'#edf6ee',.005)}
 box(c,[0,3.03,2.65],[7.4,.7,.55],accent,.035);for(let j=0;j<12;j++)box(c,[-3.35+j*.61,2.62,2.95],[.59,.24,1.15],j%2?'#fff6e3':accent,.025,[.12,0,0]);
 for(const side of [-1,1])bar(c,[side*3.3,0,3.35],[side*3.3,2.6,3.35],.055,accent);
 for(const x of [-1.9,0,1.9]){box(c,[x,3.04,2.96],[.45,.34,.025],'#fff6e6',.02);box(c,[x+.28,3.04,2.97],[.065,.22,.02],'#fff6e6',.01)}
 // Stacked crates and a tiny menu board give the shop a street-level scale.
 for(const x of [-2.6,2.7]){box(c,[x,.35,3.35],[.75,.7,.65],'#cda883',.035);for(const z of [-.14,.14])box(c,[x,.52,3.35+z],[.6,.035,.035],'#ecd3a5',.005)}
 box(c,[1.4,.72,3.5],[.6,1.3,.12],'#7e8f9c',.03,[.08,0,0]);for(let i=0;i<4;i++)box(c,[1.4,.38+i*.2,3.58],[.38,.025,.025],'#e9f1e8',.005);
}
function cherry(c,variant=0){
 const trunk='#997786',blossoms=['#f8c6dc','#f6b8d5','#ffdfeb'],lean=variant?.35:-.25;
 bar(c,[0,0,0],[lean,3.4,0],.18,trunk);bar(c,[0,1.9,0],[-1.55,3.55,.2],.11,trunk);bar(c,[.1,2.2,0],[1.55,3.8,-.25],.10,trunk);
 const crowns=[[-1.4,3.9,.1,1.5],[0,4.6,0,1.8],[1.6,4.05,-.2,1.5],[-.4,4.0,1.35,1.45],[.4,4.1,-1.3,1.5]];
 for(let i=0;i<crowns.length;i++){const [x,y,z,r]=crowns[i];ball(c,[x,y,z],[r,r*.70,r*.86],blossoms[(i+variant)%3],true,.02);ball(c,[x+.2,y+.6,z+.15],[r*.6,r*.28,r*.52],'#ffe8f1',true,.01)}
 for(let i=0;i<12;i++){const a=i*2.399,r=.6+(i%4)*.38;box(c,[Math.cos(a)*r,.045,Math.sin(a)*r],[.12,.015,.065],blossoms[i%3],.012,[0,a,0])}
}
function pine(c){bar(c,[0,0,0],[0,4.2,0],.14,'#9c8c84');for(let i=0;i<3;i++){ball(c,[(i-1)*.45,2.7+i*.82,0],[1.9-i*.35,.78,1.25-i*.16],['#7cb5aa','#8fc9b5','#a6d7ba'][i],true,.02)}}
function streetLamp(c){
 box(c,[0,.10,0],[.55,.2,.55],'#9da8b9',.025);bar(c,[0,.15,0],[0,5.6,0],.065,'#7e8da8');path(c,[[0,5.4,0],[0,5.8,.3],[0,5.8,1.3],[0,5.5,1.55]],.055,'#7e8da8');box(c,[0,5.46,1.55],[.65,.16,.9],'#e5edee',.05);box(c,[0,5.36,1.55],[.5,.025,.72],'#fff0b3',.025,[0,0,0],.1);
}
function torii(c){
 for(const x of [-4,4]){bar(c,[x,0,0],[x*.94,6.3,0],.29,'#d98085');bar(c,[x,0,0],[x,.75,0],.31,'#66728c');bar(c,[x*.95,4.65,0],[x*.95,6.65,0],.32,'#dc8d91')}
 box(c,[0,5.0,0],[9.8,.36,.48],'#d68183',.06);path(c,[[-5.65,6.55,0],[-4.5,6.3,0],[0,6.2,0],[4.5,6.3,0],[5.65,6.55,0]],.25,'#6d7089');bar(c,[0,5,0],[0,6.15,0],.13,'#d68183');box(c,[0,5.65,.31],[.9,1.12,.15],'#55677e',.02);box(c,[0,5.65,.4],[.5,.69,.025],'#edcf9d',.01);
}
function station(c){
 box(c,[0,.25,0],[13,.5,6.8],'#c6c4ce',.04);for(const x of [-5,0,5])for(const z of [-2.2,2.2])bar(c,[x,.5,z],[x,4.1,z],.10,'#8fa2ad');roof(c,14,7.8,4.1,'#73849c');
 for(let j=0;j<12;j++)box(c,[-5.8+j*1.05,.53,3.0],[.8,.025,.20],'#f6dfa0',.008);
 box(c,[0,3.2,2.6],[4.0,.9,.22],'#eef5ed',.04);box(c,[-1.55,3.2,2.75],[.45,.45,.04],'#8ec9c5',.03);for(let j=0;j<6;j++)box(c,[-.8+j*.45,3.2,2.75],[.19,.24,.03],'#8294a8',.01);
 for(const x of [-3.5,3.5]){box(c,[x,1.02,0],[2.7,.15,.65],'#c2a38c',.02);for(const xx of [-.95,.95])bar(c,[x+xx,.5,0],[x+xx,.95,0],.06,'#8c91a3')}
}
function tram(c){
 for(const z of [-1.16,1.16])box(c,[0,.05,z],[20,.10,.09],'#81929f',.015);for(let i=0;i<20;i++)box(c,[-9.5+i,.005,0],[.23,.07,3.4],'#bea58d',.015);
 box(c,[0,1.65,0],[13,2.7,3.0],'#edf5dc',.25);box(c,[0,1.25,0],[13.15,.38,3.06],'#83bcb6',.04);box(c,[0,3.08,0],[12.5,.25,3.1],'#b3bfc6',.12);
 for(const side of [-1,1]){for(let i=0;i<7;i++){const x=-5.2+i*1.73;box(c,[x,2.0,side*1.52],[1.35,1.05,.06],'#769ba8',.04);box(c,[x,2.10,side*1.56],[1.16,.8,.025],'#bbdfe6',.03)}for(const x of [-4.3,4.3]){ball(c,[x,.45,side*1.16],[.49,.49,.13],'#596980',true);box(c,[x,.48,side*1.31],[.19,.19,.03],'#bfccd1',.03)}}
 for(const x of [-6.55,6.55]){box(c,[x,2.1,0],[.06,1.05,2.1],'#acd2dd',.05);for(const z of [-.9,.9])ball(c,[x,1.25,z],[.05,.13,.13],'#fff4ba',true)}
 path(c,[[-1.5,3.25,0],[0,4.3,0],[1.5,3.25,0]],.055,'#718699');bar(c,[-.65,4.3,0],[.65,4.3,0],.07,'#718699');
}
function school(c){
 box(c,[0,4.8,0],[24,9.6,7],'#f4eedf',.06);roof(c,25.2,8.2,9.6,'#8095ad');box(c,[0,6.1,3.7],[4.8,12.2,2.0],'#e6eaf0',.06);roof(c,5.4,3.1,12.2,'#879bb4');
 for(const x of [-10,-7,-4,4,7,10])for(const y of [2.0,4.8,7.6]){box(c,[x,y,3.56],[1.9,1.65,.06],'#8da6b8',.025);box(c,[x,y,3.61],[1.64,1.41,.025],'#c7e9eb',.015);box(c,[x,y,3.65],[.045,1.41,.025],'#f6f5ed',.005)}
 box(c,[0,1.5,4.75],[3.2,2.8,.06],'#9cbdcd',.025);for(const x of [-.75,.75])box(c,[x,1.5,4.81],[.035,2.7,.025],'#f7eee4',.005);
 ball(c,[0,10.2,4.77],[.90,.90,.06],'#fff7df',true,.02);c.add(torus(.89,.045,28,7),translation(0,10.2,4.84),'#7f91a8',.08);bar(c,[0,10.2,4.91],[0,10.8,4.91],.03,'#697e98');bar(c,[0,10.2,4.92],[.43,10.4,4.92],.03,'#697e98');
 box(c,[0,-.02,7.5],[23,.10,12],'#e2e1db',.03);for(const x of [-5.5,5.5]){box(c,[x,1.5,12.1],[.8,3,.8],'#e8dbc7',.04);box(c,[x,3.06,12.1],[1,.2,1],'#a1acb9',.025)}
 for(const side of [-1,1])for(let j=0;j<8;j++){const x=side*(6.4+j*.65);bar(c,[x,0,12.0],[x,1.8,12.0],.025,'#9cacc0')}for(const side of [-1,1])bar(c,[side*6.0,1.65,12.0],[side*11.5,1.65,12.0],.035,'#9cacc0');
}
function vending(c){
 box(c,[0,1.25,0],[1.2,2.5,.82],'#f3a4ad',.09);box(c,[-.13,1.55,.43],[.82,1.35,.05],'#b6e0e9',.03);for(let j=0;j<3;j++)for(let i=0;i<3;i++){box(c,[-.4+i*.27,1.12+j*.4,.48],[.13,.23,.06],['#f9e2ad','#a3d2cc','#d3c5ec'][i],.025);box(c,[-.4+i*.27,.94+j*.4,.49],[.10,.04,.02],'#fff0c7',.005)}box(c,[0,.47,.44],[.75,.24,.055],'#738698',.03);box(c,[.43,1.3,.45],[.13,.18,.04],'#fff0b8',.02);
}
function lantern(c){bar(c,[0,0,0],[0,2.6,0],.08,'#8c7e8a');box(c,[0,2.55,0],[.55,.16,.55],'#877d92',.025);box(c,[0,2.22,0],[.41,.52,.41],'#ffe4ad',.04);box(c,[0,1.93,0],[.52,.12,.52],'#a19caa',.025);for(const x of [-.2,.2])for(const z of [-.2,.2])bar(c,[x,1.98,z],[x,2.49,z],.018,'#927f8d')}
function signBoard(c,kind){
 const side=kind==='left'?-1:1;bar(c,[0,0,0],[0,2.4,0],.055,'#8499b0');box(c,[0,2.28,0],[2.9,.78,.18],'#f3eacb',.04);for(let j=0;j<3;j++){const x=-.86+j*.86;bar(c,[x-side*.25,2.02,.12],[x+side*.15,2.28,.12],.055,'#bd8faf');bar(c,[x+side*.15,2.28,.12],[x-side*.25,2.54,.12],.055,'#bd8faf')}
}
function scenicProp(key){
 return scenicMesh(key,c=>{if(key.startsWith('house'))townhouse(c,Number(key.slice(-1)));else if(key.startsWith('shop'))shop(c,Number(key.slice(-1)));else if(key.startsWith('cherry'))cherry(c,Number(key.slice(-1)));else if(key==='pine')pine(c);else if(key==='lamp')streetLamp(c);else if(key==='torii')torii(c);else if(key==='station')station(c);else if(key==='tram')tram(c);else if(key==='vending')vending(c);else if(key==='school')school(c);else if(key==='lantern')lantern(c);else if(key==='left'||key==='right')signBoard(c,key)});
}
function districtAt(s){const u=((s%CIRCUIT_LENGTH)+CIRCUIT_LENGTH)%CIRCUIT_LENGTH/CIRCUIT_LENGTH,sections=trackInfo().sectors;let result=sections[0];for(const section of sections)if(u>=section.at)result=section;return result}
function decorateChunk(k,origin,rr){
 const root=new Node(),start=k*40;
 const place=(key,s,l,scale=1,rot=0)=>{if(raceMode==='circuit'&&s>=CIRCUIT_LENGTH||!sceneryClear(s,l))return null;const r=road(s),pos=atRoad(s,l,-.05),angle=-r.h+(l>0?PI:0)+rot,n=new Node(scenicProp(key),trs(sub(pos,origin),[scale,scale,scale],[0,angle,0]));root.add(n);return n};
 const sakura=raceMode==='circuit'&&trackInfo().biome===1;
 for(const side of [-1,1]){
  place('lamp',start+7,side*9.65);
  for(let j=0;j<2;j++)place('cherry'+((k+j)%2),start+10+j*20,side*(sakura?11.3:12.5),sakura?1.12:.92);
  if((k%2===0||sakura)&&k%3!==1&&!(k===2&&side<0)&&!(sakura&&k===0&&side>0)){place('house'+(k+(side>0?1:0))%4,start+19,side*(16.5+rr()*2),.90+rr()*.25)}
  if(k%3===1&&!(k===2&&side<0))place('shop'+(k%3),start+18,side*17.5);
  if(k%5===0)place('vending',start+9,side*10.1);
  if(k%3===0)place('pine',start+32,side*22,1.5);
 }
 const turn=wrapAngle(road(start+37).h-road(start+7).h);
 if(Math.abs(turn)>.25)place(turn>0?'right':'left',start+5,(turn>0?-1:1)*9.4,1,turn>0?-PI/2:PI/2);
 if(raceMode==='circuit'){
  const percent=(start+20)/CIRCUIT_LENGTH;
  if(sakura&&k===0)place('school',start+21,28);
  if(k===2){place('station',start+17,-20,1);place('tram',start+17,-27,1);place('vending',start+9,-12.8)}
  if(percent>.66&&percent<.74&&k%2===0){place('torii',start+22,-16);for(const side of [-1,1])place('lantern',start+9,side*10.0)}
 }
 return root;
}
let landscapeNode=null,landscapeTrack=null,ambientPetals=[];
// One continuous mountain surface: the snow line shares the lower ring exactly.
// Stacking a wider closed cone here creates a visible dark underside, not a lighting defect.
const mountainLower=(()=>{const g=cylinder(4,.3);for(let i=1;i<g.p.length;i+=3)g.p[i]=g.p[i]*.7-.15;g.n.splice(0,30,...SC.n.slice(0,30));g.i=g.i.slice(0,36);return g})();
const mountainSnow=shape(SC.p.map((v,i)=>i%3===1?v*.3+.35:v*.3),SC.n,SC.i.slice(0,24));
const petalMesh=scenicMesh('petal',c=>box(c,[0,0,0],[.12,.025,.075],'#ffd2e8',.025));
// Two low-poly CC0 rock silhouettes, not additional render objects. Flat normals
// follow each source triangle; a single surface carries both rock and grassy top.
let coastRockShapes=null;
function coastalShapes(){
 if(coastRockShapes)return coastRockShapes;
 coastRockShapes=coastalRockData.map(data=>{
  const parts=[shape([],[],[]),shape([],[],[])];
  for(let j=0;j<data.i.length;j+=3){
   const points=data.i.slice(j,j+3).map(i=>data.p.slice(i*3,i*3+3)),n=norm(cross(sub(points[1],points[0]),sub(points[2],points[0])));
   const top=n[1]>.55&&points.reduce((sum,p)=>sum+p[1],0)/3>.2,g=parts[top?1:0],base=g.p.length/3;
   for(const p of points){g.p.push(...p);g.n.push(...n)}g.i.push(base,base+1,base+2);
  }return parts;
 });return coastRockShapes;
}
function coastalBackdrop(c,center){
 const shapes=coastalShapes();
 const island=(variant,a,w,h,d,turn,far)=>{
  const rx=far?470:440,rz=far?415:340,foot=variant===0?-1-h*.3:-1.15;
  const m=trs([center[0]+Math.cos(a)*rx,foot,center[2]+Math.sin(a)*rz],[w,h,d],[0,turn,0]);
  c.add(shapes[variant][0],m,far?'#a3b8c3':'#8f9c9b',.02);
  c.add(shapes[variant][1],m,far?'#a9bdbe':'#a6b995',.02);
 };
 // Uneven headlands leave sea gaps; a lower, cooler outer band gives depth.
 // Width/depth are full extents. Elliptical spacing fits this long coast;
 // the largeA underside bevel (up to y=.292) is submerged, not lit as a cave.
 for(const [a,w,h,d,variant] of [[.12,112,27,86,1],[1.02,155,26,100,0],[1.92,135,35,100,1],[2.77,150,27,105,0],[3.68,125,33,92,1],[4.51,163,24,106,0],[5.42,136,36,94,1]])island(variant,a,w,h,d,a+.4,false);
 for(const [a,w,h,d,variant] of [[.55,140,25,80,0],[1.62,150,32,90,1],[2.62,135,24,80,0],[3.72,150,31,88,1],[4.74,140,26,85,0],[5.75,145,29,86,1]])island(variant,a,w,h,d,a-.5,true);
}
function buildLandscape(){
 if(landscapeNode)landscapeNode.mesh.dispose();
 if(landscapeNode){landscapeNode.mesh.dispose();landscapeNode=null}
 const c=new Collector(),b=circuitBounds,center=[(b.minX+b.maxX)*.5,0,(b.minZ+b.maxZ)*.5],w=b.maxX-b.minX,d=b.maxZ-b.minZ;
 const coast=trackInfo().biome===0;
 if(coast){for(const [rx,rz,y,col] of [[w*.82,d*.89,-.43,'#eadfce'],[w*.78,d*.85,-.30,'#c7d9b4']]){const verts=[center[0],y,center[2]],normals=[0,1,0],indices=[];for(let j=0;j<=96;j++){const a=j*TAU/96,r=1+.025*Math.sin(a*5);verts.push(center[0]+Math.cos(a)*rx*r,y,center[2]+Math.sin(a)*rz*r);normals.push(0,1,0);if(j)indices.push(0,j,j+1)}c.add(shape(verts,normals,indices),I,col,.02)}}
 if(roadDriving&&coast)coastalBackdrop(c,center);
 else for(let i=0;i<12;i++){
  const a=i*TAU/12,r=320+(i%3)*36,x=center[0]+Math.cos(a)*r,z=center[2]+Math.sin(a)*r,hh=40+(i%4)*18;
  const col=['#b5c4de','#a6bfd8','#c6cfdf'][i%3];
  if(i%3===0){const m=trs([x,hh*.5-5,z],[70,hh,60],[0,a,0]);c.add(mountainLower,m,col);c.add(mountainSnow,m,'#e5e5f0');}
  else cone(c,[x,hh*.5-5,z],[70,hh,60],col,[0,a,0],true);
 }
 // Distant fluffy clouds are full 3D, separate from the sky gradient.
 for(let i=0;i<10;i++){const a=i*TAU/10,pos=[center[0]+Math.cos(a)*260,57+(i%3)*14,center[2]+Math.sin(a)*250];for(let j=0;j<4;j++)ball(c,add(pos,[(j-1.5)*12,Math.sin(j*2)*4,0]),[17,7+(j%2)*3,10],'#fff5f3',true,.01)}
 landscapeNode=new Node(c.finish());landscapeNode.shadow=false;landscapeTrack=activeTrackId;
 ambientPetals=Array.from({length:24},(_,i)=>({phase:i*2.399,node:new Node(petalMesh)}));for(const p of ambientPetals)p.node.shadow=false;
}
function addLandscape(origin,t){
 if(raceMode!=='circuit')return;
 if(landscapeTrack!==activeTrackId||!landscapeNode)buildLandscape();landscapeNode.local=translation(-origin[0],-origin[1],-origin[2]);world.add(landscapeNode);
 const rr=road(player.s);for(const p of ambientPetals){const a=p.phase,forward=((a*13+t*1.7)%55)-10,l=Math.sin(a*7)*10+Math.sin(t*.6+a)*2,y=1.0+((a*2-t*.65)%7+7)%7,pos=add(atRoad(player.s+forward,l,y),[Math.sin(t+a)*.25,0,0]);p.node.local=trs(sub(pos,origin),[1,1,1],[t*.8+a,a,t]);world.add(p.node)}
}
