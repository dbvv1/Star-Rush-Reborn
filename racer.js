// Original chibi driver and open-cockpit arcade sports car, fully procedural.
const car=world.add(new Node()),carBody=new Collector();
const paint='#83cde4',pearl='#eff0f6',violet='#9c8ad5',carbon='#343952',pink='#ed94bd',skin='#f8d1b5',hair='#a3a9e5',hairDark='#7479b7';
box(carBody,[0,.47,0],[3.15,.43,1.42],paint,.16);
box(carBody,[.90,.68,0],[1.40,.27,1.42],pearl,.13,[0,0,-.065],.5);
box(carBody,[.96,.83,0],[1.08,.035,.14],violet,.015,[0,0,-.065],.5);
box(carBody,[.0,.38,0],[3.30,.15,1.48],carbon,.07);
box(carBody,[1.53,.31,0],[.50,.075,1.90],violet,.035);
box(carBody,[-1.40,.39,0],[.45,.22,1.55],violet,.07);
for(const z of [-.70,.70]){
 box(carBody,[-.15,.64,z],[2.55,.35,.29],paint,.12,[0,0,0],.45);
 box(carBody,[.1,.81,z],[1.55,.05,.20],pearl,.02);
 box(carBody,[-.17,.69,z*1.19],[.62,.19,.032],carbon,.02,[0,0,-.12]);
 for(let k=0;k<4;k++)box(carBody,[-.38+k*.12,.69,z*1.22],[.035,.13,.015],'#758ab5',.007,[0,0,-.15]);
 box(carBody,[1.54,.66,z*.75],[.055,.14,.33],'#fff0b9',.035,[0,0,-.1],.65);
 box(carBody,[-1.57,.62,z*.79],[.035,.12,.28],pink,.035,[0,0,0],.6);
 box(carBody,[-1.32,.85,z*.83],[.07,.55,.07],carbon,.02);
 box(carBody,[-1.38,1.13,z*1.34],[.43,.16,.055],violet,.025);
}
box(carBody,[1.60,.44,0],[.04,.15,.67],carbon,.03);
for(let j=0;j<5;j++)box(carBody,[1.63,.44,(j-2)*.115],[.014,.10,.024],'#6d7990',.006);
box(carBody,[-1.37,1.12,0],[.38,.065,1.94],pearl,.03);
box(carBody,[-1.37,1.16,0],[.18,.018,1.68],violet,.007);
box(carBody,[-.42,.77,0],[1.05,.08,.94],carbon,.05);
box(carBody,[-.69,1.00,0],[.18,.53,.64],carbon,.08,[0,0,-.12]);
box(carBody,[-.60,1.23,0],[.18,.15,.50],violet,.05);
// Aero screen, side mirrors, steering column and a visible wheel.
box(carBody,[.28,.94,0],[.075,.26,.91],'#bedde9',.025,[0,0,-.33],.6);
for(const z of [-.75,.75]){bar(carBody,[.22,.91,z*.84],[.31,1.04,z*1.1],.018,carbon);ball(carBody,[.31,1.04,z*1.11],[.13,.055,.09],pearl,true,.6)}
bar(carBody,[.35,.82,0],[.10,1.08,0],.035,carbon);carBody.add(torus(.16,.025,28,8),trs([.10,1.08,0],[1,1,1],[0,PI/2,-.35]),carbon,.2);
for(const z of [-.34,.34])carBody.add(CY,trs([-1.64,.43,z],[.085,.20,.085],[0,0,PI/2]),'#9babc2',.75);
// Q-proportioned seated driver: oversized head, violet jacket and white gloves.
ball(carBody,[-.42,1.04,0],[.24,.29,.22],violet);ball(carBody,[-.36,1.29,0],[.095,.10,.09],skin,true);
for(const side of [-1,1]){const shoulder=[-.38,1.17,side*.22],elbow=[-.13,1.02,side*.29],hand=[.09,1.09,side*.14];bar(carBody,shoulder,elbow,.075,violet,.14,true);bar(carBody,elbow,hand,.06,violet,.14,true);ball(carBody,hand,[.085,.065,.065],pearl,true)}
box(carBody,[-.18,1.08,0],[.05,.31,.08],pearl,.01);
const bodyNode=car.add(new Node(carBody.finish()));bodyNode.mesh.paintable=true;
const headCol=new Collector();ball(headCol,[0,0,0],[.335,.355,.30],skin);
ball(headCol,[-.19,-.01,0],[.20,.35,.32],hairDark);ball(headCol,[-.025,.19,0],[.37,.255,.33],hair);
for(const side of [-1,1]){
 ball(headCol,[-.035,-.04,side*.29],[.13,.28,.095],hair);
 ball(headCol,[.308,.025,side*.13],[.020,.10,.067],pearl,true);
 ball(headCol,[.326,.023,side*.13],[.012,.075,.043],'#5c72a5',true,.4);
 ball(headCol,[.338,.015,side*.13],[.008,.048,.027],'#303c65',true);
 ball(headCol,[.347,.058,side*.135],[.008,.020,.018],'#fffaf1',true,.6);
 ball(headCol,[.296,-.10,side*.20],[.014,.038,.045],'#e9a6ab',true);
 path(headCol,[[.320,.132,side*.075],[.322,.148,side*.13],[.310,.132,side*.19]],.011,hairDark);
 cone(headCol,[.215,.165,side*.18],[.10,.24,.085],hair,[0,0,PI+.20]);
 headCol.add(torus(.084,.014,24,7),trs([.330,.24,side*.125],[1,1,1],[0,PI/2,0]),'#e8c58c',.6);
 ball(headCol,[.335,.24,side*.125],[.012,.064,.066],'#a0d8e8',true,.6);
}
path(headCol,[[.317,-.148,-.037],[.326,-.16,0],[.317,-.148,.037]],.009,'#b77787');
headCol.add(torus(.313,.020,40,7),trs([-.025,.225,0],[1.05,1,1],[PI/2,0,0]),carbon);
cone(headCol,[.26,.17,-.04],[.10,.25,.08],hair,[0,0,PI+.25]);
const headNode=car.add(new Node(headCol.finish()));
// Four independent wheel assemblies; front wheels also steer.
const tires=[];for(const x of [-1.02,1.06])for(const side of [-1,1]){const wc=new Collector();wc.add(torus(.315,.095,40,12),I,'#343b4c',.22);wc.add(torus(.255,.027,32,8),translation(0,0,side*.075),'#e4e6ef',.7);wc.add(CY,trs([0,0,side*.07],[.238,.07,.238],[PI/2,0,0]),'#4d5576',.35);for(let j=0;j<5;j++){const a=j*TAU/5;bar(wc,[0,0,side*.116],[.23*Math.cos(a),.23*Math.sin(a),side*.116],.025,pearl,.65)}ball(wc,[0,0,side*.14],[.075,.075,.022],violet,true,.6);const n=car.add(new Node(wc.finish()));tires.push({n,x,z:side*.83,front:x>0})}
const flames=[];for(const side of [-1,1]){const fc=new Collector();ball(fc,[0,0,0],[.65,.105,.105],'#a6f4ff',true,.8);ball(fc,[-.3,0,0],[.35,.065,.065],'#e9d1ff',true,.7);const n=car.add(new Node(fc.finish()));n.shadow=false;flames.push({n,side})}
// Reused shared geometry for pickups and traffic objects.
const oc=new Collector();box(oc,[0,.36,0],[.60,.72,2.1],'#ef97aa',.08);box(oc,[0,.78,0],[.69,.16,2.20],pearl,.035);for(let k=0;k<5;k++)box(oc,[.312,.40,(k-2)*.38],[.018,.29,.16],'#fff0c7',.015,[.28,0,0]);for(const z of [-.85,.85])bar(oc,[0,.05,z],[0,.77,z],.045,'#636986');const obstacleMesh=oc.finish();
const coneCol=new Collector();box(coneCol,[0,.07,0],[.80,.12,.80],carbon,.04);cone(coneCol,[0,.49,0],[.28,.78,.28],'#e4b281');cone(coneCol,[0,.53,0],[.20,.16,.20],pearl);const coneMesh=coneCol.finish();
const coinCol=new Collector();coinCol.add(torus(.34,.068,28,8),trs([0,0,0],[1,1,1],[0,PI/2,0]),'#f0d085',.7);ball(coinCol,[0,0,0],[.04,.22,.22],'#ffe7a7',true,.55);const coinMesh=coinCol.finish();
const padCol=new Collector();box(padCol,[0,.025,0],[5.5,.045,3.0],'#7ecadc',.02);for(let j=0;j<3;j++){const x=-1.8+j*1.6;bar(padCol,[x-.45,.075,-.9],[x+.35,.075,0],.055,'#eef9d0',.3);bar(padCol,[x+.35,.075,0],[x-.45,.075,.9],.055,'#eef9d0',.3)}const padMesh=padCol.finish();
const rampCol=new Collector();
const pp=[-2.5,0,-1.6,2.5,0,-1.6,2.5,1,-1.6,-2.5,0,1.6,2.5,0,1.6,2.5,1,1.6],ii=[0,1,2,3,5,4,0,2,5,0,5,3,1,4,5,1,5,2],pv=[],nv=[],iv=[];
for(let k=0;k<ii.length;k+=3){const a=pp.slice(ii[k]*3,ii[k]*3+3),b=pp.slice(ii[k+1]*3,ii[k+1]*3+3),c=pp.slice(ii[k+2]*3,ii[k+2]*3+3),nn=norm(cross(sub(b,a),sub(c,a))),i=pv.length/3;pv.push(...a,...b,...c);nv.push(...nn,...nn,...nn);iv.push(i,i+1,i+2)}rampCol.add(shape(pv,nv,iv),I,'#d9b1e0');for(const z of [-1.4,1.4])bar(rampCol,[-2.5,.06,z],[2.5,1.06,z],.045,pearl);const rampMesh=rampCol.finish();
const particleMesh=new Collector().add(SS,I,'#b4eaff',.2).finish();const particles=Array.from({length:45},()=>({life:0,p:[0,0,0],v:[0,0,0],size:.1,node:new Node(particleMesh)}));for(const p of particles){p.node.shadow=false}
function animateCar(t,dt,steer){const roll=-steer*Math.min(.09,player.speed*.003),bob=Math.sin(t*18)*Math.min(.012,player.speed*.0005);bodyNode.local=trs([0,bob,0],[1,1,1],[roll,0,0]);headNode.local=trs([-.31,1.57+bob,0],[1,1,1],[-roll*.5,-steer*.13,0]);for(const w of tires)w.n.local=mm(translation(w.x,.41,w.z),mm(ry(w.front?(roadDriving?-(player.roadSteer||0):-(player.drifting?steer*.12-wrapAngle(player.yaw-player.velocityYaw)*.62:steer*.26)):0),rz(wheelSpin)));for(const f of flames){const size=player.boostActive?1.25+.17*Math.sin(t*38+f.side):player.pad>0?1.0+.12*Math.sin(t*36):player.mini>0?.65+.12*Math.sin(t*42+f.side):.001;f.n.local=trs([-1.9,.43,f.side*.34],[size,Math.max(.01,size),Math.max(.01,size)])}}
