const PI=Math.PI,TAU=PI*2,V=(x=0,y=0,z=0)=>[x,y,z],add=(a,b)=>a.map((x,i)=>x+b[i]),sub=(a,b)=>a.map((x,i)=>x-b[i]),mul=(a,s)=>a.map(x=>x*s),dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2],cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],length=a=>Math.hypot(...a),norm=a=>mul(a,1/(length(a)||1)),clamp=(x,a,b)=>Math.min(b,Math.max(a,x)),mix=(a,b,t)=>a+(b-a)*t;
const identity=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
function mm(a,b){const c=new Float32Array(16);for(let j=0;j<4;j++)for(let i=0;i<4;i++)c[j*4+i]=a[i]*b[j*4]+a[4+i]*b[j*4+1]+a[8+i]*b[j*4+2]+a[12+i]*b[j*4+3];return c}
function translation(x,y,z){const m=identity();m[12]=x;m[13]=y;m[14]=z;return m}
function scaling(x,y,z){const m=identity();m[0]=x;m[5]=y;m[10]=z;return m}
function rx(a){const c=Math.cos(a),s=Math.sin(a);return new Float32Array([1,0,0,0,0,c,s,0,0,-s,c,0,0,0,0,1])}
function ry(a){const c=Math.cos(a),s=Math.sin(a);return new Float32Array([c,0,-s,0,0,1,0,0,s,0,c,0,0,0,0,1])}
function rz(a){const c=Math.cos(a),s=Math.sin(a);return new Float32Array([c,s,0,0,-s,c,0,0,0,0,1,0,0,0,0,1])}
function trs(p=[0,0,0],s=[1,1,1],r=[0,0,0]){return mm(translation(...p),mm(ry(r[1]),mm(rx(r[0]),mm(rz(r[2]),scaling(...s)))))}
function transform(m,p){return [m[0]*p[0]+m[4]*p[1]+m[8]*p[2]+m[12],m[1]*p[0]+m[5]*p[1]+m[9]*p[2]+m[13],m[2]*p[0]+m[6]*p[1]+m[10]*p[2]+m[14]]}
function normalMatrix(m){const a=[m[0],m[1],m[2]],b=[m[4],m[5],m[6]],c=[m[8],m[9],m[10]],bc=cross(b,c),ca=cross(c,a),ab=cross(a,b),d=dot(a,bc)||1;return new Float32Array([...mul(bc,1/d),...mul(ca,1/d),...mul(ab,1/d)])}
function tn(m,p){return norm([m[0]*p[0]+m[3]*p[1]+m[6]*p[2],m[1]*p[0]+m[4]*p[1]+m[7]*p[2],m[2]*p[0]+m[5]*p[1]+m[8]*p[2]])}
function lookAt(eye,target,up=[0,1,0]){const z=norm(sub(eye,target)),x=norm(cross(up,z)),y=cross(z,x);return new Float32Array([x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-dot(x,eye),-dot(y,eye),-dot(z,eye),1])}
function perspective(fov,aspect,near,far){const f=1/Math.tan(fov/2),d=1/(near-far);return new Float32Array([f/aspect,0,0,0,0,f,0,0,0,0,(far+near)*d,-1,0,0,2*far*near*d,0])}
function ortho(l,r,b,t,n,f){return new Float32Array([2/(r-l),0,0,0,0,2/(t-b),0,0,0,0,-2/(f-n),0,-(r+l)/(r-l),-(t+b)/(t-b),-(f+n)/(f-n),1])}
function segment(a,b,r1,r2=r1){const d=sub(b,a),y=norm(d),x=norm(cross(Math.abs(y[2])<.95?[0,0,1]:[1,0,0],y)),z=cross(x,y),mid=mul(add(a,b),.5),l=length(d);return new Float32Array([x[0]*r1,x[1]*r1,x[2]*r1,0,y[0]*l,y[1]*l,y[2]*l,0,z[0]*r2,z[1]*r2,z[2]*r2,0,...mid,1])}
function color(hex){const n=parseInt(hex.replace('#',''),16);return [(n>>16)&255,(n>>8)&255,n&255].map(x=>Math.pow(x/255,2.2))}
const C={green:'#7fb86c',light:'#a7d27d',dark:'#407750',spine:'#4c8056',belly:'#dfdb96',eye:'#fff2cf',iris:'#325f43',coral:'#df8064',rim:'#f2be8e',rubber:'#344b42',metal:'#b7c8b1',wood:'#b78c57',gold:'#d6b471',cream:'#f1ead2',grass:'#b7cc90',white:'#fff4d7',earth:'#b4976d',water:'#91c6b8',leaf:'#85ad74'};
// Geometry primitives. Every visible object has full 3D surfaces and normals.
function shape(p,n,i){return {p,n,i}}
function sphere(seg=20,rings=12){const p=[],n=[],ind=[];for(let j=0;j<=rings;j++){const a=j*PI/rings;for(let k=0;k<=seg;k++){const t=k*TAU/seg,q=[Math.sin(a)*Math.cos(t),Math.cos(a),Math.sin(a)*Math.sin(t)];p.push(...q);n.push(...q)}}for(let j=0;j<rings;j++)for(let k=0;k<seg;k++){const a=j*(seg+1)+k,b=a+seg+1;ind.push(a,a+1,b,a+1,b+1,b)}return shape(p,n,ind)}
function cylinder(seg=16,top=1){const p=[],n=[],ind=[];for(let j=0;j<2;j++)for(let k=0;k<=seg;k++){const t=k*TAU/seg,r=j?top:1,nn=norm([Math.cos(t),1-top,Math.sin(t)]);p.push(r*Math.cos(t),j-.5,r*Math.sin(t));n.push(...nn)}for(let k=0;k<seg;k++){let a=k,b=k+seg+1;ind.push(a,b,a+1,a+1,b,b+1)}for(let side=0;side<2;side++){const start=p.length/3,yy=side-.5,rr=side?top:1;p.push(0,yy,0);n.push(0,side?1:-1,0);for(let k=0;k<=seg;k++){const t=k*TAU/seg;p.push(rr*Math.cos(t),yy,rr*Math.sin(t));n.push(0,side?1:-1,0)}for(let k=0;k<seg;k++)ind.push(start,start+k+(side?2:1),start+k+(side?1:2))}return shape(p,n,ind)}
function torus(radius,tube,segments=48,sides=10,start=0,arc=TAU){const p=[],n=[],ind=[];for(let j=0;j<=segments;j++){const a=start+arc*j/segments;for(let k=0;k<=sides;k++){const b=k*TAU/sides,cb=Math.cos(b),sb=Math.sin(b);p.push((radius+tube*cb)*Math.cos(a),(radius+tube*cb)*Math.sin(a),tube*sb);n.push(cb*Math.cos(a),cb*Math.sin(a),sb)}}for(let j=0;j<segments;j++)for(let k=0;k<sides;k++){const a=j*(sides+1)+k,b=a+sides+1;ind.push(a,b,a+1,b,b+1,a+1)}return shape(p,n,ind)}
const roundCache=new Map();
function rounded(w,h,d,r=.07){const key=[w,h,d,r].join(',');if(roundCache.has(key))return roundCache.get(key);r=Math.min(r,w/2*.95,h/2*.95,d/2*.95);const p=[],n=[],ind=[],half=[w/2,h/2,d/2];const faces=[[[0,0,d/2],[1,0,0],[0,1,0],w,h],[[0,0,-d/2],[-1,0,0],[0,1,0],w,h],[[w/2,0,0],[0,0,-1],[0,1,0],d,h],[[-w/2,0,0],[0,0,1],[0,1,0],d,h],[[0,h/2,0],[1,0,0],[0,0,-1],w,d],[[0,-h/2,0],[1,0,0],[0,0,1],w,d]];
for(const [o,u,v,ww,hh] of faces){const levels=a=>[-a/2,-a/2+r*.28,-a/2+r,a/2-r,a/2-r*.28,a/2];const xs=levels(ww),ys=levels(hh),base=p.length/3;for(const y of ys)for(const x of xs){const q=add(o,add(mul(u,x),mul(v,y))),c=q.map((a,i)=>clamp(a,-half[i]+r,half[i]-r)),normal=norm(sub(q,c));p.push(...add(c,mul(normal,r)));n.push(...normal)}for(let j=0;j<5;j++)for(let k=0;k<5;k++){const a=base+j*6+k;ind.push(a,a+1,a+6,a+1,a+7,a+6)}}const g=shape(p,n,ind);roundCache.set(key,g);return g}
function tube(points,r=.04,sides=8){const p=[],n=[],ind=[];for(let i=0;i<points.length;i++){const tangent=norm(sub(points[Math.min(i+1,points.length-1)],points[Math.max(i-1,0)])),x=norm(cross(tangent,Math.abs(tangent[1])<.9?[0,1,0]:[0,0,1])),y=cross(tangent,x);for(let j=0;j<=sides;j++){const a=j*TAU/sides,nn=add(mul(x,Math.cos(a)),mul(y,Math.sin(a)));p.push(...add(points[i],mul(nn,r)));n.push(...nn)}}for(let i=0;i<points.length-1;i++)for(let j=0;j<sides;j++){const a=i*(sides+1)+j,b=a+sides+1;ind.push(a,a+1,b,a+1,b+1,b)}return shape(p,n,ind)}
function annulus(a,b,half,y){const p=[],n=[],ind=[],steps=144;for(let j=0;j<=steps;j++){const t=j*TAU/steps;for(const s of [-1,1]){p.push((a+s*half)*Math.cos(t),y,(b+s*half)*Math.sin(t));n.push(0,1,0)}}for(let j=0;j<steps;j++){const k=j*2;ind.push(k,k+2,k+1,k+1,k+2,k+3)}return shape(p,n,ind)}
const S=sphere(),SS=sphere(12,8),CY=cylinder(),CY8=cylinder(8),CO=cylinder(10,0),SC=cylinder(4,0),I=identity();
class Collector{constructor(){this.data=[];this.indices=[]}add(g,m=I,c=C.green,gloss=.13){const col=typeof c==='string'?color(c):c,nm=normalMatrix(m),base=this.data.length/10;for(let j=0;j<g.p.length;j+=3){const p=transform(m,g.p.slice(j,j+3)),n=tn(nm,g.n.slice(j,j+3));this.data.push(...p,...n,...col,gloss)}for(const i of g.i)this.indices.push(base+i);return this}finish(dynamic=false){return new Mesh(this.data,this.indices,dynamic)}}
// Renderer-neutral geometry; the backend owns GPU resource lifetimes.
class Mesh{constructor(data,indices){this.sourceData=new Float32Array(data);this.sourceIndices=new Uint32Array(indices);this.count=indices.length}update(data){this.sourceData=new Float32Array(data)}dispose(){if(this.onDispose)this.onDispose()}}
class Node{constructor(mesh=null,m=I){this.mesh=mesh;this.local=m;this.children=[];this.shadow=true;this.world=I}add(n){this.children.push(n);return n}}
const world=new Node(),fixed=new Collector(),bikeFixed=new Collector();
function ball(c,p,s,col=C.green,small=false,g=.13){c.add(small?SS:S,trs(p,s),col,g)}
function box(c,p,s,col,r=.06,rot=[0,0,0],gloss=.12){c.add(rounded(...s,r),trs(p,[1,1,1],rot),col,gloss)}
function bar(c,a,b,r,col,gloss=.2,cap=false){c.add(CY8,segment(a,b,r),col,gloss);if(cap){ball(c,a,[r,r,r],col,true,gloss);ball(c,b,[r,r,r],col,true,gloss)}}
function cone(c,p,s,col,rot=[0,0,0],low=false){c.add(low?SC:CO,trs(p,s,rot),col)}
function path(c,points,r,col,gloss=.15){c.add(tube(points,r),I,col,gloss)}
function circularPoints(a,b,y,n=100){return Array.from({length:n+1},(_,i)=>[a*Math.cos(i*TAU/n),y,b*Math.sin(i*TAU/n)])}
let seed=73121;function rand(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}
