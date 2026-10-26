// Hand-authored closed splines sampled by arc length, with distinct corner
// sequences, start straights and elevation profiles. Progress stays unwrapped.
let raceMode='circuit',activeTrackId='coast-reborn',CIRCUIT_ID='coast-reborn';
const TRACKS={
 'coast-reborn':{name:'汐见海岸',laps:1,biome:0,difficulty:'入门 · 高速组合弯',description:'汐见站前 → 海滨商店街 → 神社山道 → 港湾 S 弯',sectors:[{at:0,name:'汐见站前'},{at:.22,name:'海滨商店街'},{at:.48,name:'港湾 S 弯'},{at:.66,name:'神社山道'},{at:.82,name:'海风大道'}],points:[[-155,0,70],[-80,0,70],[0,.2,70],[85,.7,65],[135,1.2,30],[130,1.6,-20],[75,2,-28],[38,1.8,0],[0,1.5,-10],[8,.8,-58],[65,.2,-80],[115,0,-85],[130,.4,-125],[75,1,-150],[0,1.6,-145],[-60,2,-100],[-110,1.2,-135],[-155,.5,-100],[-200,0,-25],[-218,0,28],[-215,0,70]]},
 'sakura-reborn':{name:'花见坂',laps:2,biome:1,difficulty:'进阶 · 连续反向弯',description:'樱花校门 → 花见坂商店街 → 神社参道 → 河岸回环',sectors:[{at:0,name:'樱花站前'},{at:.22,name:'花见坂商店街'},{at:.47,name:'河岸回环'},{at:.66,name:'神社参道'},{at:.83,name:'樱花大道'}],points:[[-180,0,70],[-95,0,70],[0,0,70],[95,.4,62],[170,1,16],[160,1.6,-45],[100,2,-70],[55,2.2,-30],[5,2,-55],[-16,1,-110],[-80,.5,-130],[-145,0,-104],[-220,0,-45],[-230,0,25],[-230,0,70]]}
};
TRACKS['academy-reborn']={name:'星跃训练场',laps:1,biome:1,difficulty:'基础驾驶',description:'宽缓弯道 · 清晰视野 · 练习起漂、反打与出弯喷射',sectors:[{at:0,name:'基础直道'},{at:.33,name:'漂移弧线'},{at:.66,name:'出弯加速'}],points:[[-100,0,65],[0,0,65],[100,0,65],[145,.3,25],[145,.4,-25],[100,.2,-65],[0,0,-65],[-100,0,-65],[-145,.1,-25],[-145,.1,25]]};
for(const [id,t] of Object.entries(TRACKS)){const scale=id==='coast-reborn'?1.45:id==='sakura-reborn'?1.5:1.2;t.points=t.points.map(p=>[p[0]*scale,p[1],p[2]*scale])}
let circuitSamples=[],CIRCUIT_LENGTH=0,circuitBounds={};
function trackInfo(){return TRACKS[activeTrackId]}
function raceDistance(){return CIRCUIT_LENGTH*trackInfo().laps}
function circuitPosition(u){
 const pts=trackInfo().points,n=pts.length,x=((u%n)+n)%n,i=Math.floor(x),t=x-i,a=pts[(i+n-1)%n],b=pts[i],c=pts[(i+1)%n],d=pts[(i+2)%n];
 return b.map((v,j)=>.5*((2*v)+(-a[j]+c[j])*t+(2*a[j]-5*v+4*c[j]-d[j])*t*t+(-a[j]+3*v-3*c[j]+d[j])*t*t*t));
}
function rebuildCircuit(){
 CIRCUIT_ID=activeTrackId;circuitSamples=[];CIRCUIT_LENGTH=0;const steps=trackInfo().points.length*120;
 for(let i=0;i<=steps;i++){const t=i*trackInfo().points.length/steps,p=circuitPosition(t);if(i)CIRCUIT_LENGTH+=length(sub(p,circuitSamples[i-1].p));const d=sub(circuitPosition(t+.0001),circuitPosition(t-.0001));circuitSamples.push({s:CIRCUIT_LENGTH,p,h:Math.atan2(d[2],d[0])})}
 const xs=circuitSamples.map(a=>a.p[0]),zs=circuitSamples.map(a=>a.p[2]);circuitBounds={minX:Math.min(...xs),maxX:Math.max(...xs),minZ:Math.min(...zs),maxZ:Math.max(...zs)};
}
rebuildCircuit();
function circuitRoad(s){const u=((s%CIRCUIT_LENGTH)+CIRCUIT_LENGTH)%CIRCUIT_LENGTH;let lo=0,hi=circuitSamples.length-1;while(lo+1<hi){const m=(lo+hi)>>1;if(circuitSamples[m].s<=u)lo=m;else hi=m}const a=circuitSamples[lo],b=circuitSamples[hi],t=(u-a.s)/(b.s-a.s||1),dh=Math.atan2(Math.sin(b.h-a.h),Math.cos(b.h-a.h)),h=a.h+dh*t;return {p:a.p.map((v,i)=>mix(v,b.p[i],t)),h,T:[Math.cos(h),0,Math.sin(h)],R:[-Math.sin(h),0,Math.cos(h)],curv:dh/(b.s-a.s),slope:(b.p[1]-a.p[1])/(b.s-a.s)}}
function courseDelta(a,b){let d=a-b;if(raceMode==='circuit')d-=Math.round(d/CIRCUIT_LENGTH)*CIRCUIT_LENGTH;return d}
function raceClock(){return elapsed+(player.timePenalty||0)}
function formatTime(seconds){const cs=Math.round(seconds*100),m=Math.floor(cs/6000),s=Math.floor(cs%6000/100),fraction=cs%100;return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')+'.'+String(fraction).padStart(2,'0')}
function sceneryClear(s,l){if(raceMode!=='circuit')return true;const p=add(circuitRoad(s).p,mul(circuitRoad(s).R,l));for(let i=0;i<circuitSamples.length;i+=20){const a=circuitSamples[i];if(Math.abs(courseDelta(a.s,s))>35&&Math.hypot(a.p[0]-p[0],a.p[2]-p[2])<15)return false}return true}
// 2D rigid-body contacts on the road plane, with height rejection for jumps.
// Shape normals, penetration, mass, restitution, friction and angular impulses
// determine the result; collisions do not consume health or end the race.
const CAR_MASS=220,CAR_INERTIA=245,CAR_HALF_S=1.57,CAR_HALF_L=.91,RAIL_INNER=8.045;
const d2=(a,b)=>a[0]*b[0]+a[1]*b[1],cross2=(a,b)=>a[0]*b[1]-a[1]*b[0];
function carAxes(){return [[Math.cos(player.yaw),Math.sin(player.yaw)],[-Math.sin(player.yaw),Math.cos(player.yaw)]]}
function contactOBB(e){const a=carAxes(),theta=e.angle||0,b=[[Math.cos(theta),Math.sin(theta)],[-Math.sin(theta),Math.cos(theta)]],delta=[courseDelta(player.s,e.s+(e.ds||0)),player.l-e.l-(e.dl||0)],half=e.kind==='cone'?[.39,.39]:[.35,1.10];let pen=Infinity,normal=null;for(const n of [a[0],a[1],b[0],b[1]]){const ar=Math.abs(d2(a[0],n))*CAR_HALF_S+Math.abs(d2(a[1],n))*CAR_HALF_L,br=Math.abs(d2(b[0],n))*half[0]+Math.abs(d2(b[1],n))*half[1],depth=ar+br-Math.abs(d2(delta,n));if(depth<=0)return null;if(depth<pen){pen=depth;const sign=d2(delta,n)>=0?1:-1;normal=n.map(v=>v*sign)}}return {normal,pen}}
function impulseContact(normal,lever,other=null){
 const invA=1/CAR_MASS,invI=1/CAR_INERTIA,mass=other?(other.kind==='cone'?9:85):Infinity,invB=other?1/mass:0;
 const rb=other?[courseDelta(player.s+lever[0],other.s+(other.ds||0)),player.l+lever[1]-other.l-(other.dl||0)]:[0,0],invIB=other?1/(mass*(other.kind==='cone'?.09:.48)):0;
 const cv=[player.vS-player.spin*lever[1],player.vL+player.spin*lever[0]],ov=other?[(other.vS||0)-(other.omega||0)*rb[1],(other.vL||0)+(other.omega||0)*rb[0]]:[0,0],rel=[cv[0]-ov[0],cv[1]-ov[1]],vn=d2(rel,normal);
 if(vn>=0)return 0;
 const rn=cross2(lever,normal),rbn=cross2(rb,normal),restitution=other?.13:.035,j=-(1+restitution)*vn/(invA+invB+rn*rn*invI+rbn*rbn*invIB);
 player.vS+=normal[0]*j*invA;player.vL+=normal[1]*j*invA;player.spin=clamp(player.spin+rn*j*invI,-2.3,2.3);
 const tangent=[-normal[1],normal[0]],rt=cross2(lever,tangent),rbt=cross2(rb,tangent),vt=d2(rel,tangent),friction=other?.22:.10,jt=clamp(-vt/(invA+invB+rt*rt*invI+rbt*rbt*invIB),-friction*j,friction*j);
 player.vS+=tangent[0]*jt*invA;player.vL+=tangent[1]*jt*invA;player.spin=clamp(player.spin+rt*jt*invI,-2.3,2.3);
 if(other){other.vS=(other.vS||0)-(normal[0]*j+tangent[0]*jt)*invB;other.vL=(other.vL||0)-(normal[1]*j+tangent[1]*jt)*invB;other.omega=clamp((other.omega||0)-(rbn*j+rbt*jt)*invIB,-7,7);if(other.kind==='cone')other.tilt=Math.min(1.35,(other.tilt||0)+Math.abs(j)*invB*.015)}
 return Math.abs(vn);
}
function collisionFeedback(impact,kind){if(impact<.7||player.contactSound>0)return;player.contactSound=.16;emit(atRoad(player.s,player.l,.45),Math.min(14,Math.ceil(impact)),[0,1,0]);impactSound(kind,impact);if(impact>5){flash=Math.min(.25,impact*.012);player.driftCharge*=.5}}
function resolveContacts(dt){
 player.contactSound=Math.max(0,player.contactSound-dt);
 // Integration of lightweight obstacle bodies with ground friction.
 for(const ch of chunks.values())for(const e of ch.entities)if(e.kind==='cone'||e.kind==='barrier'){e.vS=(e.vS||0)*Math.exp(-dt*2.4);e.vL=(e.vL||0)*Math.exp(-dt*2.4);e.ds=clamp((e.ds||0)+e.vS*dt,-18,18);e.dl=clamp((e.dl||0)+e.vL*dt,-7.4-e.l,7.4-e.l);e.angle=(e.angle||0)+(e.omega||0)*dt;e.omega=(e.omega||0)*Math.exp(-dt*2.0)}
 for(let iteration=0;iteration<3;iteration++){
  const axes=carAxes(),extent=Math.abs(axes[0][1])*CAR_HALF_S+Math.abs(axes[1][1])*CAR_HALF_L,limit=RAIL_INNER-extent;
  if(Math.abs(player.l)>limit){const side=Math.sign(player.l),n=[0,-side];player.l=side*(limit-.015);const lever=[side*(Math.sign(axes[0][1])*CAR_HALF_S*axes[0][0]+Math.sign(axes[1][1])*CAR_HALF_L*axes[1][0]),side*extent];const impact=impulseContact(n,lever);collisionFeedback(impact,'rail');if(impact>4){endDrift(false);player.turnRate*=.4;wasDrift=false}}
  if(player.jump>.85)continue;
  for(const ch of chunks.values())for(const e of ch.entities){if((e.kind!=='cone'&&e.kind!=='barrier')||Math.abs(courseDelta(e.s+(e.ds||0),player.s))>4.5||Math.abs(e.l+(e.dl||0)-player.l)>4)continue;const c=contactOBB(e);if(!c)continue;const mass=e.kind==='cone'?9:85,ratio=mass/(mass+CAR_MASS),push=Math.max(0,c.pen-.008)*.82;player.s+=c.normal[0]*push*ratio;player.l+=c.normal[1]*push*ratio;e.ds=(e.ds||0)-c.normal[0]*push*(1-ratio);e.dl=(e.dl||0)-c.normal[1]*push*(1-ratio);const ax=carAxes(),toward=[courseDelta(e.s+(e.ds||0),player.s),e.l+(e.dl||0)-player.l],u=clamp(d2(toward,ax[0]),-CAR_HALF_S,CAR_HALF_S),v=clamp(d2(toward,ax[1]),-CAR_HALF_L,CAR_HALF_L),lever=[ax[0][0]*u+ax[1][0]*v,ax[0][1]*u+ax[1][1]*v];const impact=impulseContact(c.normal,lever,e);collisionFeedback(impact,e.kind)}
 }
 player.speed=Math.hypot(player.vS,player.vL);player.velocityYaw=Math.atan2(player.vL,player.vS);player.lateralSpeed=player.vL;
}
