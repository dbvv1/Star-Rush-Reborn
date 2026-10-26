(()=>{var di=(()=>{let i=(r,o,c)=>Math.min(c,Math.max(o,r)),e=r=>Math.atan2(Math.sin(r),Math.cos(r)),t=Object.freeze({mass:220,inertia:245,frontAxle:1.06,rearAxle:1.02,cruise:32.5,gripAcceleration:10.5,brakeAcceleration:7.5,driveAcceleration:5.5});function n(r){return Math.min(.5,Math.atan(.85*t.gripAcceleration*(t.frontAxle+t.rearAxle)/Math.max(16,r*r)))}function s(r,o,c,u={}){let{mass:h,inertia:g,frontAxle:x,rearAxle:f}=t,M=x+f,T=Math.cos(r.yaw),N=Math.sin(r.yaw),v=r.vS*T+r.vL*N,p=-r.vS*N+r.vL*T,L=r.spin||0,k=Math.hypot(v,p),R=i((Number(o.steer)||0)*(u.sensitivity||1),-1,1),C=!!o.brake&&!o.gas&&(v<0||k<1),P=!!o.brake&&!C,B=o.gas&&!P?Math.min(t.driveAcceleration,Math.max(0,(t.cruise-v)*1.5)):0,b=.18*v+7e-4*v*Math.abs(v),D=P?Math.sign(v)*Math.min(t.brakeAcceleration,Math.abs(v)/c):0,G=h*((C?-Math.min(2,Math.max(0,(v+3)*2)):B)-D-b),q=h*t.gripAcceleration,H=q*f/M,$=q*x/M,W=n(v),j=R*W,ce=j*(r.roadSteer||0)<0,he=(R===0||ce?5:3)*n(v);r.roadSteer=(r.roadSteer||0)+i(j-(r.roadSteer||0),-he*c,he*c);let me=r.roadSteer,se=-v*Math.sin(me)+(p+x*L)*Math.cos(me),de=v*Math.cos(me)+(p+x*L)*Math.sin(me),te=Math.atan2(se,Math.max(3,Math.abs(de))),Fe=Math.atan2(p-f*L,Math.max(3,Math.abs(v))),qe=[P?G*.55:0,-h*55*te],Dt=[P?G*.45:G,-h*60*Fe],Mt=Math.min(1,H/Math.max(1e-9,Math.hypot(...qe))),At=Math.min(1,$/Math.max(1e-9,Math.hypot(...Dt))),[ge,ye]=qe.map(Ft=>Ft*Mt),[Xe,at]=Dt.map(Ft=>Ft*At),Ue=ge*Math.sin(me)+ye*Math.cos(me),pt=L+(x*Ue-f*at)/g*c,Gt=(ge*Math.cos(me)+Xe-ye*Math.sin(me))/h+L*p,ut=(Ue+at)/h-L*v;v+=Gt*c,p+=ut*c,L=pt,r.yaw=e(r.yaw+L*c),r.spin=L,r.turnRate=L;let yt=Math.cos(r.yaw),Et=Math.sin(r.yaw);r.vS=v*yt-p*Et,r.vL=v*Et+p*yt,r.speed=Math.hypot(r.vS,r.vL),r.velocityYaw=r.speed>.01?Math.atan2(r.vL,r.vS):r.yaw,r.lateralSpeed=r.vL,r.steering=W?me/W:0;let ft=e(r.yaw-r.velocityYaw);return r.drifting=v>5&&Math.abs(ft)>.08,r.driftSide=Math.sign(ft),r.driftPhase=r.drifting?ft*R<0?"counter":"hold":"grip",{slip:ft,counter:ft*R<0,thrust:0,boost:!1,speed:r.speed}}return{step:s,config:t,wrap:e,steeringLimit:n}})();function zu(i,e,t,{fetchImpl:n=globalThis.fetch,timeoutMs:s=5e3}={}){let r=new Map,o={light:"idle",medium:"idle"},c=new Set,u=null,h=!1,g="none",x=0,f=new Set;function M(){return u||(u=Promise.all(["light","medium"].map(async p=>{if(h)return;o[p]="loading";let L=new AbortController;f.add(L);let k;try{let R=(async()=>{if(typeof t[p]!="string"||!t[p].startsWith("/assets/impact-audio/"))throw Error("Missing rail asset");let P=await n(t[p],{signal:L.signal});if(!P.ok)throw Error("Rail asset HTTP error");let B=await P.arrayBuffer();if(B.byteLength>5e4)throw Error("Rail asset oversized");let b=await i.decodeAudioData(B);if(!(b.duration>0&&b.duration<=1)||b.numberOfChannels!==1)throw Error("Invalid rail clip");return b})(),C=await Promise.race([R,new Promise((P,B)=>{k=setTimeout(()=>{L.abort(),B(Error("Rail asset timeout"))},s)})]);h||(r.set(p,C),o[p]="ready")}catch{h||(o[p]="fallback")}finally{clearTimeout(k),f.delete(L)}})),u)}function T(){for(let p of[...c]){try{p.source.stop()}catch{}p.cleanup()}}function N(p){if(h||i.state!=="running"||!Number.isFinite(p)||p<.7)return!1;let L=p>5?"medium":"light",k=r.get(L);if(!k)return g=L+" fallback",!1;if(c.size>=4){let B=c.values().next().value;try{B.source.stop()}catch{}B.cleanup()}let R,C,P;try{return R=i.createBufferSource(),C=i.createGain(),R.buffer=k,C.gain.value=.15,R.connect(C),C.connect(e),P={source:R,cleanup(){c.delete(P),R.onended=null,R.disconnect(),C.disconnect()}},R.onended=()=>P.cleanup(),c.add(P),R.start(),R.stop(i.currentTime+k.duration+.02),g=L,x++,!0}catch{return P?P.cleanup():(R?.disconnect(),C?.disconnect()),g=L+" fallback",!1}}function v(){h=!0;for(let p of f)p.abort();T(),r.clear()}return{load:M,play:N,stop:T,dispose:v,status:()=>({states:{...o},active:c.size,last:g,played:x})}}var hd=0,ph=1,ud=2;var Ca=1,pl=2,wr=3,ss=0,gn=1,vi=2,yi=0,Tr=1,mh=2,gh=3,_h=4,dd=5;var Is=100,fd=101,pd=102,md=103,gd=104,_d=200,xd=201,vd=202,yd=203,xh=204,vh=205,Md=206,Sd=207,bd=208,wd=209,Td=210,Ad=211,Ed=212,Cd=213,Rd=214,Fo=0,Oo=1,Bo=2,gr=3,ko=4,zo=5,Vo=6,Go=7,yh=0,Pd=1,Id=2,oi=0,Mh=1,Sh=2,bh=3,Ra=4,wh=5,Th=6,Ah=7;var Eh=300,rs=301,Ls=302,ml=303,gl=304,Pa=306,Ho=1e3,pi=1001,Wo=1002,$t=1003,Ld=1004;var Ia=1005;var mn=1006,_l=1007;var as=1008;var Dn=1009,Ch=1010,Rh=1011,Ar=1012,xl=1013,li=1014,Zn=1015,ci=1016,vl=1017,yl=1018,Er=1020,Ph=35902,Ih=35899,Lh=1021,Dh=1022,Kn=1023,mi=1026,os=1027,Cr=1028,Ml=1029,ls=1030,Sl=1031;var bl=1033,La=33776,Da=33777,Na=33778,Ua=33779,wl=35840,Tl=35841,Al=35842,El=35843,Cl=36196,Rl=37492,Pl=37496,Il=37488,Ll=37489,Fa=37490,Dl=37491,Nl=37808,Ul=37809,Fl=37810,Ol=37811,Bl=37812,kl=37813,zl=37814,Vl=37815,Gl=37816,Hl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,Jl=36492,Zl=36494,Kl=36495,$l=36283,jl=36284,Oa=36285,Ql=36286;var ra=2300,Xo=2301,No=2302,oh=2303,lh=2400,ch=2401,hh=2402;var Dd=3200;var ec=0,Nd=1,Ni="",En="srgb",aa="srgb-linear",oa="linear",Ut="srgb";var Uo=7680;var Ud=519,Fd=512,Od=513,Bd=514,tc=515,kd=516,zd=517,nc=518,Vd=519,Gd=35044,Nh=35048;var Uh="300 es",ai=2e3,_r=2001;function Pp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ip(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hd(){let i=la("canvas");return i.style.display="block",i}var Vu={},xr=null;function Fh(...i){let e="THREE."+i.shift();xr?xr("log",e,...i):console.log(e,...i)}function Wd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ot(...i){i=Wd(i);let e="THREE."+i.shift();if(xr)xr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ht(...i){i=Wd(i);let e="THREE."+i.shift();if(xr)xr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Rs(...i){let e=i.join(" ");e in Vu||(Vu[e]=!0,ot(...i))}function Xd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var qd={[Fo]:Oo,[Bo]:Vo,[ko]:Go,[gr]:zo,[Oo]:Fo,[Vo]:Bo,[Go]:ko,[zo]:gr},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Bc=Math.PI/180,qo=180/Math.PI;function Ba(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function Lp(i,e){return(i%e+e)%e}function kc(i,e,t){return(1-t)*i+t*e}function jr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Rt=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_i=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,c){let u=n[s+0],h=n[s+1],g=n[s+2],x=n[s+3],f=r[o+0],M=r[o+1],T=r[o+2],N=r[o+3];if(x!==N||u!==f||h!==M||g!==T){let v=u*f+h*M+g*T+x*N;v<0&&(f=-f,M=-M,T=-T,N=-N,v=-v);let p=1-c;if(v<.9995){let L=Math.acos(v),k=Math.sin(L);p=Math.sin(p*L)/k,c=Math.sin(c*L)/k,u=u*p+f*c,h=h*p+M*c,g=g*p+T*c,x=x*p+N*c}else{u=u*p+f*c,h=h*p+M*c,g=g*p+T*c,x=x*p+N*c;let L=1/Math.sqrt(u*u+h*h+g*g+x*x);u*=L,h*=L,g*=L,x*=L}}e[t]=u,e[t+1]=h,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,n,s,r,o){let c=n[s],u=n[s+1],h=n[s+2],g=n[s+3],x=r[o],f=r[o+1],M=r[o+2],T=r[o+3];return e[t]=c*T+g*x+u*M-h*f,e[t+1]=u*T+g*f+h*x-c*M,e[t+2]=h*T+g*M+c*f-u*x,e[t+3]=g*T-c*x-u*f-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,c=Math.cos,u=Math.sin,h=c(n/2),g=c(s/2),x=c(r/2),f=u(n/2),M=u(s/2),T=u(r/2);switch(o){case"XYZ":this._x=f*g*x+h*M*T,this._y=h*M*x-f*g*T,this._z=h*g*T+f*M*x,this._w=h*g*x-f*M*T;break;case"YXZ":this._x=f*g*x+h*M*T,this._y=h*M*x-f*g*T,this._z=h*g*T-f*M*x,this._w=h*g*x+f*M*T;break;case"ZXY":this._x=f*g*x-h*M*T,this._y=h*M*x+f*g*T,this._z=h*g*T+f*M*x,this._w=h*g*x-f*M*T;break;case"ZYX":this._x=f*g*x-h*M*T,this._y=h*M*x+f*g*T,this._z=h*g*T-f*M*x,this._w=h*g*x+f*M*T;break;case"YZX":this._x=f*g*x+h*M*T,this._y=h*M*x+f*g*T,this._z=h*g*T-f*M*x,this._w=h*g*x-f*M*T;break;case"XZY":this._x=f*g*x-h*M*T,this._y=h*M*x-f*g*T,this._z=h*g*T+f*M*x,this._w=h*g*x+f*M*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],c=t[5],u=t[9],h=t[2],g=t[6],x=t[10],f=n+c+x;if(f>0){let M=.5/Math.sqrt(f+1);this._w=.25/M,this._x=(g-u)*M,this._y=(r-h)*M,this._z=(o-s)*M}else if(n>c&&n>x){let M=2*Math.sqrt(1+n-c-x);this._w=(g-u)/M,this._x=.25*M,this._y=(s+o)/M,this._z=(r+h)/M}else if(c>x){let M=2*Math.sqrt(1+c-n-x);this._w=(r-h)/M,this._x=(s+o)/M,this._y=.25*M,this._z=(u+g)/M}else{let M=2*Math.sqrt(1+x-n-c);this._w=(o-s)/M,this._x=(r+h)/M,this._y=(u+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,c=t._x,u=t._y,h=t._z,g=t._w;return this._x=n*g+o*c+s*h-r*u,this._y=s*g+o*u+r*c-n*h,this._z=r*g+o*h+n*u-s*c,this._w=o*g-n*c-s*u-r*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,c=this.dot(e);c<0&&(n=-n,s=-s,r=-r,o=-o,c=-c);let u=1-t;if(c<.9995){let h=Math.acos(c),g=Math.sin(h);u=Math.sin(u*h)/g,t=Math.sin(t*h)/g,this._x=this._x*u+n*t,this._y=this._y*u+s*t,this._z=this._z*u+r*t,this._w=this._w*u+o*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+s*t,this._z=this._z*u+r*t,this._w=this._w*u+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ae=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,c=e.z,u=e.w,h=2*(o*s-c*n),g=2*(c*t-r*s),x=2*(r*n-o*t);return this.x=t+u*h+o*x-c*g,this.y=n+u*g+c*h-r*x,this.z=s+u*x+r*g-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,c=t.y,u=t.z;return this.x=s*u-r*c,this.y=r*o-n*u,this.z=n*c-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zc=new ae,Gu=new _i,dt=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,c,u,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,c,u,h)}set(e,t,n,s,r,o,c,u,h){let g=this.elements;return g[0]=e,g[1]=s,g[2]=c,g[3]=t,g[4]=r,g[5]=u,g[6]=n,g[7]=o,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],g=n[4],x=n[7],f=n[2],M=n[5],T=n[8],N=s[0],v=s[3],p=s[6],L=s[1],k=s[4],R=s[7],C=s[2],P=s[5],B=s[8];return r[0]=o*N+c*L+u*C,r[3]=o*v+c*k+u*P,r[6]=o*p+c*R+u*B,r[1]=h*N+g*L+x*C,r[4]=h*v+g*k+x*P,r[7]=h*p+g*R+x*B,r[2]=f*N+M*L+T*C,r[5]=f*v+M*k+T*P,r[8]=f*p+M*R+T*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],u=e[6],h=e[7],g=e[8];return t*o*g-t*c*h-n*r*g+n*c*u+s*r*h-s*o*u}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],u=e[6],h=e[7],g=e[8],x=g*o-c*h,f=c*u-g*r,M=h*r-o*u,T=t*x+n*f+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);let N=1/T;return e[0]=x*N,e[1]=(s*h-g*n)*N,e[2]=(c*n-s*o)*N,e[3]=f*N,e[4]=(g*t-s*u)*N,e[5]=(s*r-c*t)*N,e[6]=M*N,e[7]=(n*u-h*t)*N,e[8]=(o*t-n*r)*N,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,c){let u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*o+h*c)+o+e,-s*h,s*u,-s*(-h*o+u*c)+c+t,0,0,1),this}scale(e,t){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vc.makeScale(e,t)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vc.makeRotation(-e)),this}translate(e,t){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vc=new dt,Hu=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wu=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dp(){let i={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ut&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ut&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[aa]:{primaries:e,whitePoint:n,transfer:oa,toXYZ:Hu,fromXYZ:Wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:n,transfer:Ut,toXYZ:Hu,fromXYZ:Wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}var Tt=Dp();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var tr,Yo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{tr===void 0&&(tr=la("canvas")),tr.width=e.width,tr.height=e.height;let s=tr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=tr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=la("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Np=0,vr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Ba(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(Gc(s[o].image)):r.push(Gc(s[o]))}else r=Gc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}var Up=0,Hc=new ae,In=class i extends gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pi,s=pi,r=mn,o=as,c=Kn,u=Dn,h=i.DEFAULT_ANISOTROPY,g=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Ba(),this.name="",this.source=new vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hc).x}get height(){return this.source.getSize(Hc).y}get depth(){return this.source.getSize(Hc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ho:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ho:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Eh;In.DEFAULT_ANISOTROPY=1;var Yt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,u=e.elements,h=u[0],g=u[4],x=u[8],f=u[1],M=u[5],T=u[9],N=u[2],v=u[6],p=u[10];if(Math.abs(g-f)<.01&&Math.abs(x-N)<.01&&Math.abs(T-v)<.01){if(Math.abs(g+f)<.1&&Math.abs(x+N)<.1&&Math.abs(T+v)<.1&&Math.abs(h+M+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let k=(h+1)/2,R=(M+1)/2,C=(p+1)/2,P=(g+f)/4,B=(x+N)/4,b=(T+v)/4;return k>R&&k>C?k<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(k),s=P/n,r=B/n):R>C?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=P/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=B/r,s=b/r),this.set(n,s,r,t),this}let L=Math.sqrt((v-T)*(v-T)+(x-N)*(x-N)+(f-g)*(f-g));return Math.abs(L)<.001&&(L=1),this.x=(v-T)/L,this.y=(x-N)/L,this.z=(f-g)/L,this.w=Math.acos((h+M+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new In(s),o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ca=class extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var zt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,c,u,h,g,x,f,M,T,N,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,c,u,h,g,x,f,M,T,N,v)}set(e,t,n,s,r,o,c,u,h,g,x,f,M,T,N,v){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=c,p[13]=u,p[2]=h,p[6]=g,p[10]=x,p[14]=f,p[3]=M,p[7]=T,p[11]=N,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s),g=Math.cos(r),x=Math.sin(r);if(e.order==="XYZ"){let f=o*g,M=o*x,T=c*g,N=c*x;t[0]=u*g,t[4]=-u*x,t[8]=h,t[1]=M+T*h,t[5]=f-N*h,t[9]=-c*u,t[2]=N-f*h,t[6]=T+M*h,t[10]=o*u}else if(e.order==="YXZ"){let f=u*g,M=u*x,T=h*g,N=h*x;t[0]=f+N*c,t[4]=T*c-M,t[8]=o*h,t[1]=o*x,t[5]=o*g,t[9]=-c,t[2]=M*c-T,t[6]=N+f*c,t[10]=o*u}else if(e.order==="ZXY"){let f=u*g,M=u*x,T=h*g,N=h*x;t[0]=f-N*c,t[4]=-o*x,t[8]=T+M*c,t[1]=M+T*c,t[5]=o*g,t[9]=N-f*c,t[2]=-o*h,t[6]=c,t[10]=o*u}else if(e.order==="ZYX"){let f=o*g,M=o*x,T=c*g,N=c*x;t[0]=u*g,t[4]=T*h-M,t[8]=f*h+N,t[1]=u*x,t[5]=N*h+f,t[9]=M*h-T,t[2]=-h,t[6]=c*u,t[10]=o*u}else if(e.order==="YZX"){let f=o*u,M=o*h,T=c*u,N=c*h;t[0]=u*g,t[4]=N-f*x,t[8]=T*x+M,t[1]=x,t[5]=o*g,t[9]=-c*g,t[2]=-h*g,t[6]=M*x+T,t[10]=f-N*x}else if(e.order==="XZY"){let f=o*u,M=o*h,T=c*u,N=c*h;t[0]=u*g,t[4]=-x,t[8]=h*g,t[1]=f*x+N,t[5]=o*g,t[9]=M*x-T,t[2]=T*x-M,t[6]=c*g,t[10]=N*x+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fp,e,Op)}lookAt(e,t,n){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Xi.crossVectors(n,Un),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Xi.crossVectors(n,Un)),Xi.normalize(),po.crossVectors(Un,Xi),s[0]=Xi.x,s[4]=po.x,s[8]=Un.x,s[1]=Xi.y,s[5]=po.y,s[9]=Un.y,s[2]=Xi.z,s[6]=po.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],g=n[1],x=n[5],f=n[9],M=n[13],T=n[2],N=n[6],v=n[10],p=n[14],L=n[3],k=n[7],R=n[11],C=n[15],P=s[0],B=s[4],b=s[8],D=s[12],G=s[1],q=s[5],H=s[9],$=s[13],W=s[2],j=s[6],ce=s[10],he=s[14],me=s[3],se=s[7],de=s[11],te=s[15];return r[0]=o*P+c*G+u*W+h*me,r[4]=o*B+c*q+u*j+h*se,r[8]=o*b+c*H+u*ce+h*de,r[12]=o*D+c*$+u*he+h*te,r[1]=g*P+x*G+f*W+M*me,r[5]=g*B+x*q+f*j+M*se,r[9]=g*b+x*H+f*ce+M*de,r[13]=g*D+x*$+f*he+M*te,r[2]=T*P+N*G+v*W+p*me,r[6]=T*B+N*q+v*j+p*se,r[10]=T*b+N*H+v*ce+p*de,r[14]=T*D+N*$+v*he+p*te,r[3]=L*P+k*G+R*W+C*me,r[7]=L*B+k*q+R*j+C*se,r[11]=L*b+k*H+R*ce+C*de,r[15]=L*D+k*$+R*he+C*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],c=e[5],u=e[9],h=e[13],g=e[2],x=e[6],f=e[10],M=e[14],T=e[3],N=e[7],v=e[11],p=e[15],L=u*M-h*f,k=c*M-h*x,R=c*f-u*x,C=o*M-h*g,P=o*f-u*g,B=o*x-c*g;return t*(N*L-v*k+p*R)-n*(T*L-v*C+p*P)+s*(T*k-N*C+p*B)-r*(T*R-N*P+v*B)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],c=e[9],u=e[2],h=e[6],g=e[10];return t*(o*g-c*h)-n*(r*g-c*u)+s*(r*h-o*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],u=e[6],h=e[7],g=e[8],x=e[9],f=e[10],M=e[11],T=e[12],N=e[13],v=e[14],p=e[15],L=t*c-n*o,k=t*u-s*o,R=t*h-r*o,C=n*u-s*c,P=n*h-r*c,B=s*h-r*u,b=g*N-x*T,D=g*v-f*T,G=g*p-M*T,q=x*v-f*N,H=x*p-M*N,$=f*p-M*v,W=L*$-k*H+R*q+C*G-P*D+B*b;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/W;return e[0]=(c*$-u*H+h*q)*j,e[1]=(s*H-n*$-r*q)*j,e[2]=(N*B-v*P+p*C)*j,e[3]=(f*P-x*B-M*C)*j,e[4]=(u*G-o*$-h*D)*j,e[5]=(t*$-s*G+r*D)*j,e[6]=(v*R-T*B-p*k)*j,e[7]=(g*B-f*R+M*k)*j,e[8]=(o*H-c*G+h*b)*j,e[9]=(n*G-t*H-r*b)*j,e[10]=(T*P-N*R+p*L)*j,e[11]=(x*R-g*P-M*L)*j,e[12]=(c*D-o*q-u*b)*j,e[13]=(t*q-n*D+s*b)*j,e[14]=(N*k-T*C-v*L)*j,e[15]=(g*C-x*k+f*L)*j,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,c=e.y,u=e.z,h=r*o,g=r*c;return this.set(h*o+n,h*c-s*u,h*u+s*c,0,h*c+s*u,g*c+n,g*u-s*o,0,h*u-s*c,g*u+s*o,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,c=t._z,u=t._w,h=r+r,g=o+o,x=c+c,f=r*h,M=r*g,T=r*x,N=o*g,v=o*x,p=c*x,L=u*h,k=u*g,R=u*x,C=n.x,P=n.y,B=n.z;return s[0]=(1-(N+p))*C,s[1]=(M+R)*C,s[2]=(T-k)*C,s[3]=0,s[4]=(M-R)*P,s[5]=(1-(f+p))*P,s[6]=(v+L)*P,s[7]=0,s[8]=(T+k)*B,s[9]=(v-L)*B,s[10]=(1-(f+N))*B,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=nr.set(s[0],s[1],s[2]).length(),c=nr.set(s[4],s[5],s[6]).length(),u=nr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ni.copy(this);let h=1/o,g=1/c,x=1/u;return ni.elements[0]*=h,ni.elements[1]*=h,ni.elements[2]*=h,ni.elements[4]*=g,ni.elements[5]*=g,ni.elements[6]*=g,ni.elements[8]*=x,ni.elements[9]*=x,ni.elements[10]*=x,t.setFromRotationMatrix(ni),n.x=o,n.y=c,n.z=u,this}makePerspective(e,t,n,s,r,o,c=ai,u=!1){let h=this.elements,g=2*r/(t-e),x=2*r/(n-s),f=(t+e)/(t-e),M=(n+s)/(n-s),T,N;if(u)T=r/(o-r),N=o*r/(o-r);else if(c===ai)T=-(o+r)/(o-r),N=-2*o*r/(o-r);else if(c===_r)T=-o/(o-r),N=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=g,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=x,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,r,o,c=ai,u=!1){let h=this.elements,g=2/(t-e),x=2/(n-s),f=-(t+e)/(t-e),M=-(n+s)/(n-s),T,N;if(u)T=1/(o-r),N=o/(o-r);else if(c===ai)T=-2/(o-r),N=-(o+r)/(o-r);else if(c===_r)T=-1/(o-r),N=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=g,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=x,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=T,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nr=new ae,ni=new zt,Fp=new ae(0,0,0),Op=new ae(1,1,1),Xi=new ae,po=new ae,Un=new ae,Xu=new zt,qu=new _i,$i=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],c=s[8],u=s[1],h=s[5],g=s[9],x=s[2],f=s[6],M=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-x,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Ct(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(f,M),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-x,r)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qu.setFromEuler(this),this.setFromQuaternion(qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var ha=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bp=0,Yu=new ae,ir=new _i,Ci=new zt,mo=new ae,Qr=new ae,kp=new ae,zp=new _i,Ju=new ae(1,0,0),Zu=new ae(0,1,0),Ku=new ae(0,0,1),$u={type:"added"},Vp={type:"removed"},sr={type:"childadded",child:null},Wc={type:"childremoved",child:null},wn=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new ae,t=new $i,n=new _i,s=new ae(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new dt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Ju,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis(Ku,e)}translateOnAxis(e,t){return Yu.copy(e).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ju,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis(Ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mo.copy(e):mo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Qr,mo,this.up):Ci.lookAt(mo,Qr,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Ci),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($u),sr.child=e,this.dispatchEvent(sr),sr.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vp),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($u),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,zp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let u=c.shapes;if(Array.isArray(u))for(let h=0,g=u.length;h<g;h++){let x=u[h];r(e.shapes,x)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(r(e.materials,this.material[u]));s.material=c}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let u=this.animations[c];s.animations.push(r(e.animations,u))}}if(t){let c=o(e.geometries),u=o(e.materials),h=o(e.textures),g=o(e.images),x=o(e.shapes),f=o(e.skeletons),M=o(e.animations),T=o(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),g.length>0&&(n.images=g),x.length>0&&(n.shapes=x),f.length>0&&(n.skeletons=f),M.length>0&&(n.animations=M),T.length>0&&(n.nodes=T)}return n.object=s,n;function o(c){let u=[];for(let h in c){let g=c[h];delete g.metadata,u.push(g)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wn.DEFAULT_UP=new ae(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cs=class extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gp={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(let N of e.hand.values()){let v=t.getJointPose(N,n),p=this._getHandJoint(h,N);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}let g=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],f=g.position.distanceTo(x.position),M=.02,T=.005;h.inputState.pinching&&f>M+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=M-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Gp)))}return c!==null&&(c.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},go={h:0,s:0,l:0};function Xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var gt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Tt.workingColorSpace){if(e=Lp(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xc(o,r,e+1/3),this.g=Xc(o,r,e),this.b=Xc(o,r,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=En){function n(r){r!==void 0&&parseFloat(r)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){let n=Yd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Tt.workingToColorSpace(Sn.copy(this),e),Math.round(Ct(Sn.r*255,0,255))*65536+Math.round(Ct(Sn.g*255,0,255))*256+Math.round(Ct(Sn.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(n,s,r),c=Math.min(n,s,r),u,h,g=(c+o)/2;if(c===o)u=0,h=0;else{let x=o-c;switch(h=g<=.5?x/(o+c):x/(2-o-c),o){case n:u=(s-r)/x+(s<r?6:0);break;case s:u=(r-n)/x+2;break;case r:u=(n-s)/x+4;break}u/=6}return e.h=u,e.s=h,e.l=g,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=En){Tt.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,s=Sn.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(go);let n=kc(qi.h,go.h,t),s=kc(qi.s,go.s,t),r=kc(qi.l,go.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new gt;gt.NAMES=Yd;var ua=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},da=class extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new ae,Ri=new ae,qc=new ae,Pi=new ae,rr=new ae,ar=new ae,ju=new ae,Yc=new ae,Jc=new ae,Zc=new ae,Kc=new Yt,$c=new Yt,jc=new Yt,Ki=class i{constructor(e=new ae,t=new ae,n=new ae){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),Ri.subVectors(n,t),qc.subVectors(e,t);let o=ii.dot(ii),c=ii.dot(Ri),u=ii.dot(qc),h=Ri.dot(Ri),g=Ri.dot(qc),x=o*h-c*c;if(x===0)return r.set(0,0,0),null;let f=1/x,M=(h*u-c*g)*f,T=(o*g-c*u)*f;return r.set(1-M-T,T,M)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,o,c,u){return this.getBarycoord(e,t,n,s,Pi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Pi.x),u.addScaledVector(o,Pi.y),u.addScaledVector(c,Pi.z),u)}static getInterpolatedAttribute(e,t,n,s,r,o){return Kc.setScalar(0),$c.setScalar(0),jc.setScalar(0),Kc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Kc,r.x),o.addScaledVector($c,r.y),o.addScaledVector(jc,r.z),o}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),Ri.subVectors(e,t),ii.cross(Ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ii.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,c;rr.subVectors(s,n),ar.subVectors(r,n),Yc.subVectors(e,n);let u=rr.dot(Yc),h=ar.dot(Yc);if(u<=0&&h<=0)return t.copy(n);Jc.subVectors(e,s);let g=rr.dot(Jc),x=ar.dot(Jc);if(g>=0&&x<=g)return t.copy(s);let f=u*x-g*h;if(f<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(rr,o);Zc.subVectors(e,r);let M=rr.dot(Zc),T=ar.dot(Zc);if(T>=0&&M<=T)return t.copy(r);let N=M*h-u*T;if(N<=0&&h>=0&&T<=0)return c=h/(h-T),t.copy(n).addScaledVector(ar,c);let v=g*T-M*x;if(v<=0&&x-g>=0&&M-T>=0)return ju.subVectors(r,s),c=(x-g)/(x-g+(M-T)),t.copy(s).addScaledVector(ju,c);let p=1/(v+N+f);return o=N*p,c=f*p,t.copy(n).addScaledVector(rr,o).addScaledVector(ar,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xi=class{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),xo.subVectors(this.max,ea),or.subVectors(e.a,ea),lr.subVectors(e.b,ea),cr.subVectors(e.c,ea),Yi.subVectors(lr,or),Ji.subVectors(cr,lr),ws.subVectors(or,cr);let t=[0,-Yi.z,Yi.y,0,-Ji.z,Ji.y,0,-ws.z,ws.y,Yi.z,0,-Yi.x,Ji.z,0,-Ji.x,ws.z,0,-ws.x,-Yi.y,Yi.x,0,-Ji.y,Ji.x,0,-ws.y,ws.x,0];return!Qc(t,or,lr,cr,xo)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,or,lr,cr,xo))?!1:(vo.crossVectors(Yi,Ji),t=[vo.x,vo.y,vo.z],Qc(t,or,lr,cr,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],si=new ae,_o=new xi,or=new ae,lr=new ae,cr=new ae,Yi=new ae,Ji=new ae,ws=new ae,ea=new ae,xo=new ae,vo=new ae,Ts=new ae;function Qc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ts.fromArray(i,r);let c=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),u=e.dot(Ts),h=t.dot(Ts),g=n.dot(Ts);if(Math.max(-Math.max(u,h,g),Math.min(u,h,g))>c)return!1}return!0}var tn=new ae,yo=new Rt,Hp=0,On=class extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gd,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),s=Pn(s,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var fa=class extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pa=class extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var an=class extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wp=new xi,ta=new ae,eh=new ae,ji=class{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);let t=ta.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ta,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(eh)),this.expandByPoint(ta.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xp=0,Jn=new zt,th=new wn,hr=new ae,Fn=new xi,na=new xi,un=new ae,Bn=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pp(e)?pa:fa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let c=t[r];na.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(Fn.min,na.min),Fn.expandByPoint(un),un.addVectors(Fn.max,na.max),Fn.expandByPoint(un)):(Fn.expandByPoint(na.min),Fn.expandByPoint(na.max))}Fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)un.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(un));if(t)for(let r=0,o=t.length;r<o;r++){let c=t[r],u=this.morphTargetsRelative;for(let h=0,g=c.count;h<g;h++)un.fromBufferAttribute(c,h),u&&(hr.fromBufferAttribute(e,h),un.add(hr)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new On(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let c=[],u=[];for(let b=0;b<n.count;b++)c[b]=new ae,u[b]=new ae;let h=new ae,g=new ae,x=new ae,f=new Rt,M=new Rt,T=new Rt,N=new ae,v=new ae;function p(b,D,G){h.fromBufferAttribute(n,b),g.fromBufferAttribute(n,D),x.fromBufferAttribute(n,G),f.fromBufferAttribute(r,b),M.fromBufferAttribute(r,D),T.fromBufferAttribute(r,G),g.sub(h),x.sub(h),M.sub(f),T.sub(f);let q=1/(M.x*T.y-T.x*M.y);isFinite(q)&&(N.copy(g).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(q),v.copy(x).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(q),c[b].add(N),c[D].add(N),c[G].add(N),u[b].add(v),u[D].add(v),u[G].add(v))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let b=0,D=L.length;b<D;++b){let G=L[b],q=G.start,H=G.count;for(let $=q,W=q+H;$<W;$+=3)p(e.getX($+0),e.getX($+1),e.getX($+2))}let k=new ae,R=new ae,C=new ae,P=new ae;function B(b){C.fromBufferAttribute(s,b),P.copy(C);let D=c[b];k.copy(D),k.sub(C.multiplyScalar(C.dot(D))).normalize(),R.crossVectors(P,D);let q=R.dot(u[b])<0?-1:1;o.setXYZW(b,k.x,k.y,k.z,q)}for(let b=0,D=L.length;b<D;++b){let G=L[b],q=G.start,H=G.count;for(let $=q,W=q+H;$<W;$+=3)B(e.getX($+0)),B(e.getX($+1)),B(e.getX($+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,M=n.count;f<M;f++)n.setXYZ(f,0,0,0);let s=new ae,r=new ae,o=new ae,c=new ae,u=new ae,h=new ae,g=new ae,x=new ae;if(e)for(let f=0,M=e.count;f<M;f+=3){let T=e.getX(f+0),N=e.getX(f+1),v=e.getX(f+2);s.fromBufferAttribute(t,T),r.fromBufferAttribute(t,N),o.fromBufferAttribute(t,v),g.subVectors(o,r),x.subVectors(s,r),g.cross(x),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,N),h.fromBufferAttribute(n,v),c.add(g),u.add(g),h.add(g),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(N,u.x,u.y,u.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let f=0,M=t.count;f<M;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),g.subVectors(o,r),x.subVectors(s,r),g.cross(x),n.setXYZ(f+0,g.x,g.y,g.z),n.setXYZ(f+1,g.x,g.y,g.z),n.setXYZ(f+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(c,u){let h=c.array,g=c.itemSize,x=c.normalized,f=new h.constructor(u.length*g),M=0,T=0;for(let N=0,v=u.length;N<v;N++){c.isInterleavedBufferAttribute?M=u[N]*c.data.stride+c.offset:M=u[N]*g;for(let p=0;p<g;p++)f[T++]=h[M++]}return new On(f,g,x)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let c in s){let u=s[c],h=e(u,n);t.setAttribute(c,h)}let r=this.morphAttributes;for(let c in r){let u=[],h=r[c];for(let g=0,x=h.length;g<x;g++){let f=h[g],M=e(f,n);u.push(M)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let u in n){let h=n[u];e.data.attributes[u]=h.toJSON(e.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],g=[];for(let x=0,f=h.length;x<f;x++){let M=h[x];g.push(M.toJSON(e.data))}g.length>0&&(s[u]=g,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let h in s){let g=s[h];this.setAttribute(h,g.clone(t))}let r=e.morphAttributes;for(let h in r){let g=[],x=r[h];for(let f=0,M=x.length;f<M;f++)g.push(x[f].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let h=0,g=o.length;h<g;h++){let x=o[h];this.addGroup(x.start,x.count,x.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nh=new ae,qp=new ae,Yp=new dt,ri=class{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=nh.subVectors(n,t).cross(qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(nh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yp.getNormalMatrix(e),s=this.coplanarPoint(nh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Jp=0,Qi=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=Tr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=vh,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let u=r[c];delete u.metadata,o.push(u)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ri().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Rt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Li=new ae,ih=new ae,Mo=new ae,So=new ae,Ko=class{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ih.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),So.copy(this.origin).sub(ih);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Mo),c=So.dot(this.direction),u=-So.dot(Mo),h=So.lengthSq(),g=Math.abs(1-o*o),x,f,M,T;if(g>0)if(x=o*u-c,f=o*c-u,T=r*g,x>=0)if(f>=-T)if(f<=T){let N=1/g;x*=N,f*=N,M=x*(x+o*f+2*c)+f*(o*x+f+2*u)+h}else f=r,x=Math.max(0,-(o*f+c)),M=-x*x+f*(f+2*u)+h;else f=-r,x=Math.max(0,-(o*f+c)),M=-x*x+f*(f+2*u)+h;else f<=-T?(x=Math.max(0,-(-o*r+c)),f=x>0?-r:Math.min(Math.max(-r,-u),r),M=-x*x+f*(f+2*u)+h):f<=T?(x=0,f=Math.min(Math.max(-r,-u),r),M=f*(f+2*u)+h):(x=Math.max(0,-(o*r+c)),f=x>0?r:Math.min(Math.max(-r,-u),r),M=-x*x+f*(f+2*u)+h);else f=o>0?-r:r,x=Math.max(0,-(o*f+c)),M=-x*x+f*(f+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(ih).addScaledVector(Mo,f),M}intersectSphere(e,t){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,c,u,h=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),g>=0?(r=(e.min.y-f.y)*g,o=(e.max.y-f.y)*g):(r=(e.max.y-f.y)*g,o=(e.min.y-f.y)*g),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),x>=0?(c=(e.min.z-f.z)*x,u=(e.max.z-f.z)*x):(c=(e.max.z-f.z)*x,u=(e.min.z-f.z)*x),n>u||c>s)||((c>n||n!==n)&&(n=c),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,c=this.direction,u=c.x,h=c.y,g=c.z,x=e.x-o.x,f=e.y-o.y,M=e.z-o.z,T=t.x-o.x,N=t.y-o.y,v=t.z-o.z,p=n.x-o.x,L=n.y-o.y,k=n.z-o.z,R=Math.abs(u),C=Math.abs(h),P=Math.abs(g),B,b,D,G,q,H,$,W,j,ce,he,me;if(R>=C&&R>=P?(D=u,H=x,j=T,me=p,u>=0?(B=h,b=g,G=f,q=M,$=N,W=v,ce=L,he=k):(B=g,b=h,G=M,q=f,$=v,W=N,ce=k,he=L)):C>=P?(D=h,H=f,j=N,me=L,h>=0?(B=g,b=u,G=M,q=x,$=v,W=T,ce=k,he=p):(B=u,b=g,G=x,q=M,$=T,W=v,ce=p,he=k)):(D=g,H=M,j=v,me=k,g>=0?(B=u,b=h,G=x,q=f,$=T,W=N,ce=p,he=L):(B=h,b=u,G=f,q=x,$=N,W=T,ce=L,he=p)),D===0)return null;let se=B/D,de=b/D,te=1/D,Fe=G-se*H,qe=q-de*H,Dt=$-se*j,Mt=W-de*j,At=ce-se*me,ge=he-de*me,ye=At*Mt-ge*Dt,Xe=Fe*ge-qe*At,at=Dt*qe-Mt*Fe;if(s){if(ye<0||Xe<0||at<0)return null}else if((ye<0||Xe<0||at<0)&&(ye>0||Xe>0||at>0))return null;let Ue=ye+Xe+at;if(Ue===0)return null;let pt=te*(ye*H+Xe*j+at*me);return(Ue>0?pt<0:pt>0)?null:this.at(pt/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ma=class extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qu=new zt,As=new Ko,bo=new ji,ed=new ae,wo=new ae,To=new ae,Ao=new ae,sh=new ae,Eo=new ae,td=new ae,Co=new ae,Tn=class extends wn{constructor(e=new Bn,t=new ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let c=this.morphTargetInfluences;if(r&&c){Eo.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let g=c[u],x=r[u];g!==0&&(sh.fromBufferAttribute(x,e),o?Eo.addScaledVector(sh,g):Eo.addScaledVector(sh.sub(t),g))}t.add(Eo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(bo.containsPoint(As.origin)===!1&&(As.intersectSphere(bo,ed)===null||As.origin.distanceToSquared(ed)>(e.far-e.near)**2))&&(Qu.copy(r).invert(),As.copy(e.ray).applyMatrix4(Qu),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,c=r.index,u=r.attributes.position,h=r.attributes.uv,g=r.attributes.uv1,x=r.attributes.normal,f=r.groups,M=r.drawRange;if(c!==null)if(Array.isArray(o))for(let T=0,N=f.length;T<N;T++){let v=f[T],p=o[v.materialIndex],L=Math.max(v.start,M.start),k=Math.min(c.count,Math.min(v.start+v.count,M.start+M.count));for(let R=L,C=k;R<C;R+=3){let P=c.getX(R),B=c.getX(R+1),b=c.getX(R+2);s=Ro(this,p,e,n,h,g,x,P,B,b),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{let T=Math.max(0,M.start),N=Math.min(c.count,M.start+M.count);for(let v=T,p=N;v<p;v+=3){let L=c.getX(v),k=c.getX(v+1),R=c.getX(v+2);s=Ro(this,o,e,n,h,g,x,L,k,R),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let T=0,N=f.length;T<N;T++){let v=f[T],p=o[v.materialIndex],L=Math.max(v.start,M.start),k=Math.min(u.count,Math.min(v.start+v.count,M.start+M.count));for(let R=L,C=k;R<C;R+=3){let P=R,B=R+1,b=R+2;s=Ro(this,p,e,n,h,g,x,P,B,b),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{let T=Math.max(0,M.start),N=Math.min(u.count,M.start+M.count);for(let v=T,p=N;v<p;v+=3){let L=v,k=v+1,R=v+2;s=Ro(this,o,e,n,h,g,x,L,k,R),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}};function Zp(i,e,t,n,s,r,o,c){let u;if(e.side===gn?u=n.intersectTriangle(o,r,s,!0,c):u=n.intersectTriangle(s,r,o,e.side===ss,c),u===null)return null;Co.copy(c),Co.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Co);return h<t.near||h>t.far?null:{distance:h,point:Co.clone(),object:i}}function Ro(i,e,t,n,s,r,o,c,u,h){i.getVertexPosition(c,wo),i.getVertexPosition(u,To),i.getVertexPosition(h,Ao);let g=Zp(i,e,t,n,wo,To,Ao,td);if(g){let x=new ae;Ki.getBarycoord(td,wo,To,Ao,x),s&&(g.uv=Ki.getInterpolatedAttribute(s,c,u,h,x,new Rt)),r&&(g.uv1=Ki.getInterpolatedAttribute(r,c,u,h,x,new Rt)),o&&(g.normal=Ki.getInterpolatedAttribute(o,c,u,h,x,new ae),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));let f={a:c,b:u,c:h,normal:new ae,materialIndex:0};Ki.getNormal(wo,To,Ao,f.normal),g.face=f,g.barycoord=x}return g}var Ps=class extends In{constructor(e=null,t=1,n=1,s,r,o,c,u,h=$t,g=$t,x,f){super(null,o,c,u,h,g,s,r,x,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ga=class extends On{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ur=new zt,nd=new zt,Po=[],id=new xi,Kp=new zt,ia=new Tn,sa=new ji,_a=class extends Tn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),id.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),sa.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let c=0;c<n.length;c++)n[c]=s[o+c]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),e.ray.intersectsSphere(sa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),nd.multiplyMatrices(n,ur),ia.matrixWorld=nd,ia.raycast(e,Po);for(let o=0,c=Po.length;o<c;o++){let u=Po[o];u.instanceId=r,u.object=this,t.push(u)}Po.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ps(new Float32Array(s*this.count),s,this.count,Cr,Zn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let c=this.geometry.morphTargetsRelative?1:1-o,u=s*e;return r[u]=c,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Es=new ji,$p=new Rt(.5,.5),Io=new ae,Mr=class{constructor(e=new ri,t=new ri,n=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){let s=this.planes,r=e.elements,o=r[0],c=r[1],u=r[2],h=r[3],g=r[4],x=r[5],f=r[6],M=r[7],T=r[8],N=r[9],v=r[10],p=r[11],L=r[12],k=r[13],R=r[14],C=r[15];if(s[0].setComponents(h-o,M-g,p-T,C-L).normalize(),s[1].setComponents(h+o,M+g,p+T,C+L).normalize(),s[2].setComponents(h+c,M+x,p+N,C+k).normalize(),s[3].setComponents(h-c,M-x,p-N,C-k).normalize(),n)s[4].setComponents(u,f,v,R).normalize(),s[5].setComponents(h-u,M-f,p-v,C-R).normalize();else if(s[4].setComponents(h-u,M-f,p-v,C-R).normalize(),t===ai)s[5].setComponents(h+u,M+f,p+v,C+R).normalize();else if(t===_r)s[5].setComponents(u,f,v,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);let t=$p.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Io.x=s.normal.x>0?e.max.x:e.min.x,Io.y=s.normal.y>0?e.max.y:e.min.y,Io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xa=class extends In{constructor(e=[],t=rs,n,s,r,o,c,u,h,g){super(e,t,n,s,r,o,c,u,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var es=class extends In{constructor(e,t,n=li,s,r,o,c=$t,u=$t,h,g=mi,x=1){if(g!==mi&&g!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:x};super(f,s,r,o,c,u,g,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$o=class extends es{constructor(e,t=li,n=rs,s,r,o=$t,c=$t,u,h=mi){let g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,t,n,s,r,o,c,u,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},va=class extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Sr=class i extends Bn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let u=[],h=[],g=[],x=[],f=0,M=0;T("z","y","x",-1,-1,n,t,e,o,r,0),T("z","y","x",1,-1,n,t,-e,o,r,1),T("x","z","y",1,1,e,n,t,s,o,2),T("x","z","y",1,-1,e,n,-t,s,o,3),T("x","y","z",1,-1,e,t,n,s,r,4),T("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new an(h,3)),this.setAttribute("normal",new an(g,3)),this.setAttribute("uv",new an(x,2));function T(N,v,p,L,k,R,C,P,B,b,D){let G=R/B,q=C/b,H=R/2,$=C/2,W=P/2,j=B+1,ce=b+1,he=0,me=0,se=new ae;for(let de=0;de<ce;de++){let te=de*q-$;for(let Fe=0;Fe<j;Fe++){let qe=Fe*G-H;se[N]=qe*L,se[v]=te*k,se[p]=W,h.push(se.x,se.y,se.z),se[N]=0,se[v]=0,se[p]=P>0?1:-1,g.push(se.x,se.y,se.z),x.push(Fe/B),x.push(1-de/b),he+=1}}for(let de=0;de<b;de++)for(let te=0;te<B;te++){let Fe=f+te+j*de,qe=f+te+j*(de+1),Dt=f+(te+1)+j*(de+1),Mt=f+(te+1)+j*de;u.push(Fe,qe,Mt),u.push(qe,Dt,Mt),me+=6}c.addGroup(M,me,D),M+=me,f+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ya=class i extends Bn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,c=Math.floor(n),u=Math.floor(s),h=c+1,g=u+1,x=e/c,f=t/u,M=[],T=[],N=[],v=[];for(let p=0;p<g;p++){let L=p*f-o;for(let k=0;k<h;k++){let R=k*x-r;T.push(R,-L,0),N.push(0,0,1),v.push(k/c),v.push(1-p/u)}}for(let p=0;p<u;p++)for(let L=0;L<c;L++){let k=L+h*p,R=L+h*(p+1),C=L+1+h*(p+1),P=L+1+h*p;M.push(k,R,P),M.push(R,C,P)}this.setIndex(M),this.setAttribute("position",new an(T,3)),this.setAttribute("normal",new an(N,3)),this.setAttribute("uv",new an(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ma=class i extends Bn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let u=Math.min(o+c,Math.PI),h=0,g=[],x=new ae,f=new ae,M=[],T=[],N=[],v=[];for(let p=0;p<=n;p++){let L=[],k=p/n,R=o+k*c,C=e*Math.cos(R),P=Math.sqrt(e*e-C*C),B=0;p===0&&o===0?B=.5/t:p===n&&u===Math.PI&&(B=-.5/t);for(let b=0;b<=t;b++){let D=b/t,G=s+D*r;x.x=-P*Math.cos(G),x.y=C,x.z=P*Math.sin(G),T.push(x.x,x.y,x.z),f.copy(x).normalize(),N.push(f.x,f.y,f.z),v.push(D+B,1-k),L.push(h++)}g.push(L)}for(let p=0;p<n;p++)for(let L=0;L<t;L++){let k=g[p][L+1],R=g[p][L],C=g[p+1][L],P=g[p+1][L+1];(p!==0||o>0)&&M.push(k,R,P),(p!==n-1||u<Math.PI)&&M.push(R,C,P)}this.setIndex(M),this.setAttribute("position",new an(T,3)),this.setAttribute("normal",new an(N,3)),this.setAttribute("uv",new an(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ds(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(sd(s))s.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(sd(s[0])){let r=[];for(let o=0,c=s.length;o<c;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function An(i){let e={};for(let t=0;t<i.length;t++){let n=Ds(i[t]);for(let s in n)e[s]=n[s]}return e}function sd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Oh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}var Jd={clone:Ds,merge:An},Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new zt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jo=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Sa=class extends Qi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Qo=class extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},el=class extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function dr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ts=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let c=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let c=t[1];e<c&&(n=2,r=c);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let c=n+o>>>1;e<t[c]?o=c:n=c+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tl=class extends ts{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,c=s[r],u=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case ch:r=e,c=2*t-n;break;case hh:r=s.length-2,c=t+s[r]-s[r+1];break;default:r=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case ch:o=e,u=2*n-t;break;case hh:o=1,u=n+s[1]-s[0];break;default:o=e-1,u=t}let h=(n-t)*.5,g=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=r*g,this._offsetNext=o*g}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,g=this._offsetPrev,x=this._offsetNext,f=this._weightPrev,M=this._weightNext,T=(n-t)/(s-t),N=T*T,v=N*T,p=-f*v+2*f*N-f*T,L=(1+f)*v+(-1.5-2*f)*N+(-.5+f)*T+1,k=(-1-M)*v+(1.5+M)*N+.5*T,R=M*v-M*N;for(let C=0;C!==c;++C)r[C]=p*o[g+C]+L*o[h+C]+k*o[u+C]+R*o[x+C];return r}},nl=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,g=(n-t)/(s-t),x=1-g;for(let f=0;f!==c;++f)r[f]=o[h+f]*x+o[u+f]*g;return r}},il=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},sl=class extends ts{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,g=this.inTangents,x=this.outTangents;if(!g||!x){let T=(n-t)/(s-t),N=1-T;for(let v=0;v!==c;++v)r[v]=o[h+v]*N+o[u+v]*T;return r}let f=c*2,M=e-1;for(let T=0;T!==c;++T){let N=o[h+T],v=o[u+T],p=M*f+T*2,L=x[p],k=x[p+1],R=e*f+T*2,C=g[R],P=g[R+1],B=nm(n,t,L,C,s);r[T]=Zd(B,N,k,P,v)}return r}};function Zd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function tm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function nm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let c=Zd(r,e,t,n,s)-i;if(Math.abs(c)<1e-10)break;let u=tm(r,e,t,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-c/u))}return r}var kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dr(t,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:dr(e.times,Array),values:dr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),rh(e.settings)&&(n.settings={inTangents:dr(e.settings.inTangents,Array),outTangents:dr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case Xo:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break;case oh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ot("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return No;case this.InterpolantFactoryMethodBezier:return oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;rh(this.settings)&&(rd(this.settings.inTangents,e),rd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ht("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ht("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==r;c++){let u=n[c];if(typeof u=="number"&&isNaN(u)){ht("KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(o!==null&&o>u){ht("KeyframeTrack: Out of order keys.",this,c,u,o),e=!1;break}o=u}if(s!==void 0&&Ip(s))for(let c=0,u=s.length;c!==u;++c){let h=s[c];if(isNaN(h)){ht("KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===No,r=e.length-1,o=1;for(let c=1;c<r;++c){let u=!1,h=e[c],g=e[c+1];if(h!==g&&(c!==1||h!==e[0]))if(s)u=!0;else{let x=c*n,f=x-n,M=x+n;for(let T=0;T!==n;++T){let N=t[x+T];if(N!==t[f+T]||N!==t[M+T]){u=!0;break}}}if(u){if(c!==o){e[o]=e[c];let x=c*n,f=o*n;for(let M=0;M!==n;++M)t[f+M]=t[x+M]}++o}}if(r>0){e[o]=e[r];for(let c=r*n,u=o*n,h=0;h!==n;++h)t[u+h]=t[c+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,rh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Xo;var ns=class extends kn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=ra;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};rl.prototype.ValueTypeName="color";var al=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};al.prototype.ValueTypeName="number";var ol=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-t)/(s-t),h=e*c;for(let g=h+c;h!==g;h+=4)_i.slerpFlat(r,0,o,h-c,o,h,u);return r}},ba=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends kn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=ra;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};ll.prototype.ValueTypeName="vector";var cl=class{constructor(e,t,n){let s=this,r=!1,o=0,c=0,u,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(g){c++,r===!1&&s.onStart!==void 0&&s.onStart(g,o,c),r=!0},this.itemEnd=function(g){o++,s.onProgress!==void 0&&s.onProgress(g,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),u?u(g):g},this.setURLModifier=function(g){return u=g,this},this.addHandler=function(g,x){return h.push(g,x),this},this.removeHandler=function(g){let x=h.indexOf(g);return x!==-1&&h.splice(x,2),this},this.getHandler=function(g){for(let x=0,f=h.length;x<f;x+=2){let M=h[x],T=h[x+1];if(M.global&&(M.lastIndex=0),M.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kd=new cl,hl=class{constructor(e){this.manager=e!==void 0?e:Kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var wa=class extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ta=class extends wa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ah=new zt,ad=new ae,od=new ae,ul=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ah.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ah,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,c=s?s.w/r.y:1,u=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===_r||e.reversedDepth?t.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,.5,.5,0,0,0,1),t.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lo=new ae,Do=new _i,fi=new ae,Aa=class extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lo,Do,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Lo,Do,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new ae,ld=new Rt,cd=new Rt,bn=class extends Aa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,ld,cd),t.subVectors(cd,ld)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/u,t-=o.offsetY*n/h,s*=o.width/u,n*=o.height/h}let c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var br=class extends Aa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,c=s+t,u=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,c-=g*this.view.offsetY,u=c-g*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uh=class extends ul{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new uh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var fr=-90,pr=1,dl=class extends wn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(fr,pr,e,t);s.layers=this.layers,this.add(s);let r=new bn(fr,pr,e,t);r.layers=this.layers,this.add(r);let o=new bn(fr,pr,e,t);o.layers=this.layers,this.add(o);let c=new bn(fr,pr,e,t);c.layers=this.layers,this.add(c);let u=new bn(fr,pr,e,t);u.layers=this.layers,this.add(u);let h=new bn(fr,pr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,c,u]=t;for(let h of t)this.remove(h);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,u,h,g]=this.children,x=e.getRenderTarget(),f=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;let N=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,4,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=N,e.setRenderTarget(n,5,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(x,f,M),e.xr.enabled=T,n.texture.needsPMREMUpdate=!0}},fl=class extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Bh="\\[\\]\\.:\\/",im=new RegExp("["+Bh+"]","g"),kh="[^"+Bh+"]",sm="[^"+Bh.replace("\\.","")+"]",rm=/((?:WC+[\/:])*)/.source.replace("WC",kh),am=/(WCOD+)?/.source.replace("WCOD",sm),om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),lm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),cm=new RegExp("^"+rm+am+om+lm+"$"),hm=["material","materials","bones","map"],dh=class{constructor(e,t,n){let s=n||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(im,"")}static parseTrackName(e){let t=cm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===t||c.uuid===t)return c;let u=n(c.children);if(u)return u}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===h){h=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[s];if(o===void 0){let h=t.nodeName;ht("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=dh;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lv=new Float32Array(1);var fh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function zh(i,e,t,n){let s=um(n);switch(t){case Lh:return i*e;case Cr:return i*e/s.components*s.byteLength;case Ml:return i*e/s.components*s.byteLength;case ls:return i*e*2/s.components*s.byteLength;case Sl:return i*e*2/s.components*s.byteLength;case Dh:return i*e*3/s.components*s.byteLength;case Kn:return i*e*4/s.components*s.byteLength;case bl:return i*e*4/s.components*s.byteLength;case La:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:case El:return Math.max(i,16)*Math.max(e,8)/4;case wl:case Al:return Math.max(i,8)*Math.max(e,8)/2;case Cl:case Rl:case Il:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Fa:case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jl:case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $l:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oa:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function um(i){switch(i){case Dn:case Ch:return{byteLength:1,components:1};case Ar:case Rh:case ci:return{byteLength:2,components:1};case vl:case yl:return{byteLength:2,components:4};case li:case xl:case Zn:return{byteLength:4,components:1};case Ph:case Ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function vf(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fm(i){let e=new WeakMap;function t(c,u){let h=c.array,g=c.usage,x=h.byteLength,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,h,g),c.onUploadCallback();let M;if(h instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=i.SHORT;else if(h instanceof Uint32Array)M=i.UNSIGNED_INT;else if(h instanceof Int32Array)M=i.INT;else if(h instanceof Int8Array)M=i.BYTE;else if(h instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:x}}function n(c,u,h){let g=u.array,x=u.updateRanges;if(i.bindBuffer(h,c),x.length===0)i.bufferSubData(h,0,g);else{x.sort((M,T)=>M.start-T.start);let f=0;for(let M=1;M<x.length;M++){let T=x[f],N=x[M];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++f,x[f]=N)}x.length=f+1;for(let M=0,T=x.length;M<T;M++){let N=x[M];i.bufferSubData(h,N.start*g.BYTES_PER_ELEMENT,g,N.start,N.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=e.get(c);u&&(i.deleteBuffer(u.buffer),e.delete(c))}function o(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let g=e.get(c);(!g||g.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:s,remove:r,update:o}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Am=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Em=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Om=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,km=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:xm,alphatest_pars_fragment:vm,aomap_fragment:ym,aomap_pars_fragment:Mm,batching_pars_vertex:Sm,batching_vertex:bm,begin_vertex:wm,beginnormal_vertex:Tm,bsdfs:Am,iridescence_fragment:Em,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Im,clipping_planes_vertex:Lm,color_fragment:Dm,color_pars_fragment:Nm,color_pars_vertex:Um,color_vertex:Fm,common:Om,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:km,displacementmap_pars_vertex:zm,displacementmap_vertex:Vm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Hm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:Jm,envmap_pars_vertex:Zm,envmap_physical_pars_fragment:a0,envmap_vertex:Km,fog_vertex:$m,fog_pars_vertex:jm,fog_fragment:Qm,fog_pars_fragment:e0,gradientmap_pars_fragment:t0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:h0,lights_physical_fragment:u0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,lightprobes_pars_fragment:g0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:y0,map_fragment:M0,map_pars_fragment:S0,map_particle_fragment:b0,map_particle_pars_fragment:w0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:A0,morphinstance_vertex:E0,morphcolor_vertex:C0,morphnormal_vertex:R0,morphtarget_pars_vertex:P0,morphtarget_vertex:I0,normal_fragment_begin:L0,normal_fragment_maps:D0,normal_pars_fragment:N0,normal_pars_vertex:U0,normal_vertex:F0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:V0,opaque_fragment:G0,packing:H0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:q0,dithering_pars_fragment:Y0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:K0,shadowmap_pars_vertex:$0,shadowmap_vertex:j0,shadowmask_pars_fragment:Q0,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:ag,tonemapping_pars_fragment:og,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:hg,uv_pars_vertex:ug,uv_vertex:dg,worldpos_vertex:fg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:_g,cube_vert:xg,cube_frag:vg,depth_vert:yg,depth_frag:Mg,distance_vert:Sg,distance_frag:bg,equirect_vert:wg,equirect_frag:Tg,linedashed_vert:Ag,linedashed_frag:Eg,meshbasic_vert:Cg,meshbasic_frag:Rg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Lg,meshmatcap_frag:Dg,meshnormal_vert:Ng,meshnormal_frag:Ug,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:kg,meshtoon_vert:zg,meshtoon_frag:Vg,points_vert:Gg,points_frag:Hg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:qg,sprite_frag:Yg},Ve={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Si={basic:{uniforms:An([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:An([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:An([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:An([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:An([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new gt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:An([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:An([Ve.points,Ve.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:An([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:An([Ve.common,Ve.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:An([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:An([Ve.sprite,Ve.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:An([Ve.common,Ve.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:An([Ve.lights,Ve.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Si.physical={uniforms:An([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var ic={r:0,b:0,g:0},Jg=new zt,yf=new dt;yf.set(-1,0,0,0,1,0,0,0,1);function Zg(i,e,t,n,s,r){let o=new gt(0),c=s===!0?0:1,u,h,g=null,x=0,f=null;function M(L){let k=L.isScene===!0?L.background:null;if(k&&k.isTexture){let R=L.backgroundBlurriness>0;k=e.get(k,R)}return k}function T(L){let k=!1,R=M(L);R===null?v(o,c):R&&R.isColor&&(v(R,1),k=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function N(L,k){let R=M(k);R&&(R.isCubeTexture||R.mapping===Pa)?(h===void 0&&(h=new Tn(new Sr(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ds(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(k.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(yf),h.material.toneMapped=Tt.getTransfer(R.colorSpace)!==Ut,(g!==R||x!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,g=R,x=R.version,f=i.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new Tn(new ya(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ds(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,u.material.toneMapped=Tt.getTransfer(R.colorSpace)!==Ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||x!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,g=R,x=R.version,f=i.toneMapping),u.layers.enableAll(),L.unshift(u,u.geometry,u.material,0,0,null))}function v(L,k){L.getRGB(ic,Oh(i)),t.buffers.color.setClear(ic.r,ic.g,ic.b,k,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(L,k=1){o.set(L),c=k,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(L){c=L,v(o,c)},render:T,addToRenderList:N,dispose:p}}function Kg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function c(q,H,$,W,j){let ce=!1,he=x(q,W,$,H);r!==he&&(r=he,h(r.object)),ce=M(q,W,$,j),ce&&T(q,W,$,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,R(q,H,$,W),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function u(){return i.createVertexArray()}function h(q){return i.bindVertexArray(q)}function g(q){return i.deleteVertexArray(q)}function x(q,H,$,W){let j=W.wireframe===!0,ce=n[H.id];ce===void 0&&(ce={},n[H.id]=ce);let he=q.isInstancedMesh===!0?q.id:0,me=ce[he];me===void 0&&(me={},ce[he]=me);let se=me[$.id];se===void 0&&(se={},me[$.id]=se);let de=se[j];return de===void 0&&(de=f(u()),se[j]=de),de}function f(q){let H=[],$=[],W=[];for(let j=0;j<t;j++)H[j]=0,$[j]=0,W[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:W,object:q,attributes:{},index:null}}function M(q,H,$,W){let j=r.attributes,ce=H.attributes,he=0,me=$.getAttributes();for(let se in me)if(me[se].location>=0){let te=j[se],Fe=ce[se];if(Fe===void 0&&(se==="instanceMatrix"&&q.instanceMatrix&&(Fe=q.instanceMatrix),se==="instanceColor"&&q.instanceColor&&(Fe=q.instanceColor)),te===void 0||te.attribute!==Fe||Fe&&te.data!==Fe.data)return!0;he++}return r.attributesNum!==he||r.index!==W}function T(q,H,$,W){let j={},ce=H.attributes,he=0,me=$.getAttributes();for(let se in me)if(me[se].location>=0){let te=ce[se];te===void 0&&(se==="instanceMatrix"&&q.instanceMatrix&&(te=q.instanceMatrix),se==="instanceColor"&&q.instanceColor&&(te=q.instanceColor));let Fe={};Fe.attribute=te,te&&te.data&&(Fe.data=te.data),j[se]=Fe,he++}r.attributes=j,r.attributesNum=he,r.index=W}function N(){let q=r.newAttributes;for(let H=0,$=q.length;H<$;H++)q[H]=0}function v(q){p(q,0)}function p(q,H){let $=r.newAttributes,W=r.enabledAttributes,j=r.attributeDivisors;$[q]=1,W[q]===0&&(i.enableVertexAttribArray(q),W[q]=1),j[q]!==H&&(i.vertexAttribDivisor(q,H),j[q]=H)}function L(){let q=r.newAttributes,H=r.enabledAttributes;for(let $=0,W=H.length;$<W;$++)H[$]!==q[$]&&(i.disableVertexAttribArray($),H[$]=0)}function k(q,H,$,W,j,ce,he){he===!0?i.vertexAttribIPointer(q,H,$,j,ce):i.vertexAttribPointer(q,H,$,W,j,ce)}function R(q,H,$,W){N();let j=W.attributes,ce=$.getAttributes(),he=H.defaultAttributeValues;for(let me in ce){let se=ce[me];if(se.location>=0){let de=j[me];if(de===void 0&&(me==="instanceMatrix"&&q.instanceMatrix&&(de=q.instanceMatrix),me==="instanceColor"&&q.instanceColor&&(de=q.instanceColor)),de!==void 0){let te=de.normalized,Fe=de.itemSize,qe=e.get(de);if(qe===void 0)continue;let Dt=qe.buffer,Mt=qe.type,At=qe.bytesPerElement,ge=Mt===i.INT||Mt===i.UNSIGNED_INT||de.gpuType===xl;if(de.isInterleavedBufferAttribute){let ye=de.data,Xe=ye.stride,at=de.offset;if(ye.isInstancedInterleavedBuffer){for(let Ue=0;Ue<se.locationSize;Ue++)p(se.location+Ue,ye.meshPerAttribute);q.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ue=0;Ue<se.locationSize;Ue++)v(se.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let Ue=0;Ue<se.locationSize;Ue++)k(se.location+Ue,Fe/se.locationSize,Mt,te,Xe*At,(at+Fe/se.locationSize*Ue)*At,ge)}else{if(de.isInstancedBufferAttribute){for(let ye=0;ye<se.locationSize;ye++)p(se.location+ye,de.meshPerAttribute);q.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ye=0;ye<se.locationSize;ye++)v(se.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let ye=0;ye<se.locationSize;ye++)k(se.location+ye,Fe/se.locationSize,Mt,te,Fe*At,Fe/se.locationSize*ye*At,ge)}}else if(he!==void 0){let te=he[me];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(se.location,te);break;case 3:i.vertexAttrib3fv(se.location,te);break;case 4:i.vertexAttrib4fv(se.location,te);break;default:i.vertexAttrib1fv(se.location,te)}}}}L()}function C(){D();for(let q in n){let H=n[q];for(let $ in H){let W=H[$];for(let j in W){let ce=W[j];for(let he in ce)g(ce[he].object),delete ce[he];delete W[j]}}delete n[q]}}function P(q){if(n[q.id]===void 0)return;let H=n[q.id];for(let $ in H){let W=H[$];for(let j in W){let ce=W[j];for(let he in ce)g(ce[he].object),delete ce[he];delete W[j]}}delete n[q.id]}function B(q){for(let H in n){let $=n[H];for(let W in $){let j=$[W];if(j[q.id]===void 0)continue;let ce=j[q.id];for(let he in ce)g(ce[he].object),delete ce[he];delete j[q.id]}}}function b(q){for(let H in n){let $=n[H],W=q.isInstancedMesh===!0?q.id:0,j=$[W];if(j!==void 0){for(let ce in j){let he=j[ce];for(let me in he)g(he[me].object),delete he[me];delete j[ce]}delete $[W],Object.keys($).length===0&&delete n[H]}}}function D(){G(),o=!0,r!==s&&(r=s,h(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:D,resetDefaultState:G,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:B,initAttributes:N,enableAttribute:v,disableUnusedAttributes:L}}function $g(i,e,t){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),t.update(h,n,1)}function o(u,h,g){g!==0&&(i.drawArraysInstanced(n,u,h,g),t.update(h,n,g))}function c(u,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,g);let f=0;for(let M=0;M<g;M++)f+=h[M];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c}function jg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let B=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(B){return!(B!==Kn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(B){let b=B===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Dn&&B!==Zn&&!b&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",g=u(h);g!==h&&(ot("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);let x=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:f,maxTextures:M,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:L,maxVaryings:k,maxFragmentUniforms:R,maxSamples:C,samples:P}}function Qg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ri,c=new dt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(x,f){let M=x.length!==0||f||n!==0||s;return s=f,n=x.length,M},this.beginShadows=function(){r=!0,g(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,f){t=g(x,f,0)},this.setState=function(x,f,M){let T=x.clippingPlanes,N=x.clipIntersection,v=x.clipShadows,p=i.get(x);if(!s||T===null||T.length===0||r&&!v)r?g(null):h();else{let L=r?0:n,k=L*4,R=p.clippingState||null;u.value=R,R=g(T,f,k,M);for(let C=0;C!==k;++C)R[C]=t[C];p.clippingState=R,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=L}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(x,f,M,T){let N=x!==null?x.length:0,v=null;if(N!==0){if(v=u.value,T!==!0||v===null){let p=M+N*4,L=f.matrixWorldInverse;c.getNormalMatrix(L),(v===null||v.length<p)&&(v=new Float32Array(p));for(let k=0,R=M;k!==N;++k,R+=4)o.copy(x[k]).applyMatrix4(L,c),o.normal.toArray(v,R),v[R+3]=o.constant}u.value=v,u.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,v}}var Pr=4,e_=6,t_=20,n_=256,ka=new br,$d=new gt,Vh=null,Gh=0,Hh=0,Wh=!1,i_=new ae,Ns=new ae,rc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:c=i_}=r;Vh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,s,u,c),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vh,Gh,Hh),this._renderer.xr.enabled=Wh,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:ci,format:Kn,colorSpace:aa,depthBuffer:!1},s=jd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s_(r)),this._blurMaterial=a_(r,e,t),this._ggxMaterial=r_(r,e,t)}return s}_compileMaterial(e){let t=new Tn(new Bn,e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,n,s,r){let u=new bn(90,1,t,n),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,f=x.autoClear,M=x.toneMapping;x.getClearColor($d),x.toneMapping=oi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tn(new Sr,new ma({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let N=this._backgroundBox,v=N.material,p=!1,L=e.background;L?L.isColor&&(v.color.copy(L),e.background=null,p=!0):(v.color.copy($d),p=!0);for(let k=0;k<6;k++){let R=k%3;R===0?(u.up.set(0,h[k],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+g[k],r.y,r.z)):R===1?(u.up.set(0,0,h[k]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+g[k],r.z)):(u.up.set(0,h[k],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+g[k]));let C=this._cubeSize;Rr(s,R*C,k>2?C:0,C,C),x.setRenderTarget(s),p&&x.render(N,u),x.render(e,u)}x.toneMapping=M,x.autoClear=f,e.background=L}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rs||e.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let c=r.uniforms;c.envMap.value=e;let u=this._cubeSize;Rr(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,ka)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;let u=o.uniforms,h=n/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),x=Math.sqrt(h*h-g*g),f=h*1.25,M=x*f,{_lodMax:T}=this,N=this._sizeLods[n],v=3*N*(n>T-Pr?n-T+Pr:0),p=4*(this._cubeSize-N);u.envMap.value=e.texture,u.roughness.value=M,u.mipInt.value=T-t,Rr(r,v,p,3*N,2*N),s.setRenderTarget(r),s.render(c,ka),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=T-n,Rr(e,v,p,3*N,2*N),s.setRenderTarget(e),s.render(c,ka)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,c=this._blurMaterial,u=this._lodMeshes[s];u.material=c;let h=c.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let g=this._sizeLods[s],x=3*g*(s>this._lodMax-Pr?s-this._lodMax+Pr:0),f=4*(this._cubeSize-g);Rr(t,x,f,3*g,2*g),o.setRenderTarget(t),o.render(u,ka)}};function s_(i){let e=[],t=[],n=i,s=i-Pr+1+e_;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let c=1/(o-2),u=-c,h=1+c,g=[u,u,h,u,h,h,u,u,h,h,u,h],x=6,f=6,M=3,T=new Float32Array(M*f*x),N=new Float32Array(M*f*x);for(let p=0;p<x;p++){let L=p%3*2/3-1,k=p>2?0:-1,R=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];T.set(R,M*f*p);for(let C=0;C<f;C++){let P=g[C*2]*2-1,B=g[C*2+1]*2-1;p===0?Ns.set(1,B,P):p===1?Ns.set(-P,1,-B):p===2?Ns.set(-P,B,1):p===3?Ns.set(-1,B,-P):p===4?Ns.set(-P,-1,B):Ns.set(P,B,-1),Ns.toArray(N,(p*f+C)*M)}}let v=new Bn;v.setAttribute("position",new On(T,M)),v.setAttribute("outputDirection",new On(N,M)),t.push(new Tn(v,null)),n>Pr&&n--}return{lodMeshes:t,sizeLods:e}}function jd(i,e,t){let n=new Ln(i,e,t);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function r_(i,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function a_(i,e,t){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:t_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Qd(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ef(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ac=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new xa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Sr(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:yi});r.uniforms.tEquirect.value=t;let o=new Tn(s,r),c=t.minFilter;return t.minFilter===as&&(t.minFilter=mn),new dl(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function o_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,M=!1){return f==null?null:M?o(f):r(f)}function r(f){if(f&&f.isTexture){let M=f.mapping;if(M===ml||M===gl)if(e.has(f)){let T=e.get(f).texture;return c(T,f.mapping)}else{let T=f.image;if(T&&T.height>0){let N=new ac(T.height);return N.fromEquirectangularTexture(i,f),e.set(f,N),f.addEventListener("dispose",h),c(N.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let M=f.mapping,T=M===ml||M===gl,N=M===rs||M===Ls;if(T||N){let v=t.get(f),p=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new rc(i)),v=T?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{let L=f.image;return T&&L&&L.height>0||N&&L&&u(L)?(n===null&&(n=new rc(i)),v=T?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",g),v.texture):null}}}return f}function c(f,M){return M===ml?f.mapping=rs:M===gl&&(f.mapping=Ls),f}function u(f){let M=0,T=6;for(let N=0;N<T;N++)f[N]!==void 0&&M++;return M===T}function h(f){let M=f.target;M.removeEventListener("dispose",h);let T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function g(f){let M=f.target;M.removeEventListener("dispose",g);let T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function x(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:x}}function l_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rs("WebGLRenderer: "+n+" extension not supported."),s}}}function c_(i,e,t,n){let s={},r=new WeakMap;function o(x){let f=x.target;f.index!==null&&e.remove(f.index);for(let T in f.attributes)e.remove(f.attributes[T]);f.removeEventListener("dispose",o),delete s[f.id];let M=r.get(f);M&&(e.remove(M),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(x,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function u(x){let f=x.attributes;for(let M in f)e.update(f[M],i.ARRAY_BUFFER)}function h(x){let f=[],M=x.index,T=x.attributes.position,N=0;if(T===void 0)return;if(M!==null){let L=M.array;N=M.version;for(let k=0,R=L.length;k<R;k+=3){let C=L[k+0],P=L[k+1],B=L[k+2];f.push(C,P,P,B,B,C)}}else{let L=T.array;N=T.version;for(let k=0,R=L.length/3-1;k<R;k+=3){let C=k+0,P=k+1,B=k+2;f.push(C,P,P,B,B,C)}}let v=new(T.count>=65535?pa:fa)(f,1);v.version=N;let p=r.get(x);p&&e.remove(p),r.set(x,v)}function g(x){let f=r.get(x);if(f){let M=x.index;M!==null&&f.version<M.version&&h(x)}else h(x);return r.get(x)}return{get:c,update:u,getWireframeAttribute:g}}function h_(i,e,t){let n;function s(x){n=x}let r,o;function c(x){r=x.type,o=x.bytesPerElement}function u(x,f){i.drawElements(n,f,r,x*o),t.update(f,n,1)}function h(x,f,M){M!==0&&(i.drawElementsInstanced(n,f,r,x*o,M),t.update(f,n,M))}function g(x,f,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,x,0,M);let N=0;for(let v=0;v<M;v++)N+=f[v];t.update(N,n,1)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=g}function u_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(r/3);break;case i.LINES:t.lines+=c*(r/2);break;case i.LINE_STRIP:t.lines+=c*(r-1);break;case i.LINE_LOOP:t.lines+=c*r;break;case i.POINTS:t.points+=c*r;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function d_(i,e,t){let n=new WeakMap,s=new Yt;function r(o,c,u){let h=o.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=g!==void 0?g.length:0,f=n.get(c);if(f===void 0||f.count!==x){let D=function(){B.dispose(),n.delete(c),c.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let M=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,N=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],L=c.morphAttributes.color||[],k=0;M===!0&&(k=1),T===!0&&(k=2),N===!0&&(k=3);let R=c.attributes.position.count*k,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let P=new Float32Array(R*C*4*x),B=new ca(P,R,C,x);B.type=Zn,B.needsUpdate=!0;let b=k*4;for(let G=0;G<x;G++){let q=v[G],H=p[G],$=L[G],W=R*C*4*G;for(let j=0;j<q.count;j++){let ce=j*b;M===!0&&(s.fromBufferAttribute(q,j),P[W+ce+0]=s.x,P[W+ce+1]=s.y,P[W+ce+2]=s.z,P[W+ce+3]=0),T===!0&&(s.fromBufferAttribute(H,j),P[W+ce+4]=s.x,P[W+ce+5]=s.y,P[W+ce+6]=s.z,P[W+ce+7]=0),N===!0&&(s.fromBufferAttribute($,j),P[W+ce+8]=s.x,P[W+ce+9]=s.y,P[W+ce+10]=s.z,P[W+ce+11]=$.itemSize===4?s.w:1)}}f={count:x,texture:B,size:new Rt(R,C)},n.set(c,f),c.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let M=0;for(let N=0;N<h.length;N++)M+=h[N];let T=c.morphTargetsRelative?1:1-M;u.getUniforms().setValue(i,"morphTargetBaseInfluence",T),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function f_(i,e,t,n,s){let r=new WeakMap;function o(h){let g=s.render.frame,x=h.geometry,f=e.get(h,x);if(r.get(f)!==g&&(e.update(f),r.set(f,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==g&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,g))),h.isSkinnedMesh){let M=h.skeleton;r.get(M)!==g&&(M.update(),r.set(M,g))}return f}function c(){r=new WeakMap}function u(h){let g=h.target;g.removeEventListener("dispose",u),n.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:o,dispose:c}}var p_={[Mh]:"LINEAR_TONE_MAPPING",[Sh]:"REINHARD_TONE_MAPPING",[bh]:"CINEON_TONE_MAPPING",[Ra]:"ACES_FILMIC_TONE_MAPPING",[Th]:"AGX_TONE_MAPPING",[Ah]:"NEUTRAL_TONE_MAPPING",[wh]:"CUSTOM_TONE_MAPPING"};function m_(i,e,t,n,s,r){let o=new Ln(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,u=null,h=new Bn;h.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new an([0,2,0,0,2,0],2));let g=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Tn(h,g),f=new br(-1,1,1,-1,0,1),M=null,T=null,N=!1,v,p=null,L=[],k=!1;this.setSize=function(R,C){o.setSize(R,C),c!==null&&c.setSize(R,C),u!==null&&u.setSize(R,C);for(let P=0;P<L.length;P++){let B=L[P];B.setSize&&B.setSize(R,C)}},this.setEffects=function(R){L=R,k=L.length>0&&L[0].isRenderPass===!0;let C=o.width,P=o.height;L.length>0&&c===null&&(c=new Ln(C,P,{type:ci,depthBuffer:!1,stencilBuffer:!1}),u=new Ln(C,P,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<L.length;B++){let b=L[B];b.setSize&&b.setSize(C,P)}},this.begin=function(R,C){if(N||R.toneMapping===oi&&L.length===0)return!1;if(p=C,C!==null){let P=C.width,B=C.height;(o.width!==P||o.height!==B)&&this.setSize(P,B)}return k===!1&&R.setRenderTarget(o),v=R.toneMapping,R.toneMapping=oi,!0},this.hasRenderPass=function(){return k},this.end=function(R,C){R.toneMapping=v,N=!0;let P=o,B=c;for(let b=0;b<L.length;b++){let D=L[b];D.enabled!==!1&&(D.render(R,B,P,C),D.needsSwap!==!1&&(P=B,B=B===c?u:c))}if(M!==R.outputColorSpace||T!==R.toneMapping){M=R.outputColorSpace,T=R.toneMapping,g.defines={},Tt.getTransfer(M)===Ut&&(g.defines.SRGB_TRANSFER="");let b=p_[T];b&&(g.defines[b]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(p),R.render(x,f),p=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),u!==null&&u.dispose(),h.dispose(),g.dispose()}}var Mf=new In,Yh=new es(1,1),Sf=new ca,bf=new Zo,wf=new xa,tf=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),af=new Float32Array(4);function Lr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=tf[s];if(r===void 0&&(r=new Float32Array(s),tf[s]=r),e!==0){n.toArray(r,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(r,c)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cc(i,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function g_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function y_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;af.set(n),i.uniformMatrix2fv(this.addr,!1,af),ln(t,n)}}function M_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;rf.set(n),i.uniformMatrix3fv(this.addr,!1,rf),ln(t,n)}}function S_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;sf.set(n),i.uniformMatrix4fv(this.addr,!1,sf),ln(t,n)}}function b_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function T_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function E_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function I_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yh.compareFunction=t.isReversedDepthBuffer()?nc:tc,r=Yh):r=Mf,t.setTexture2D(e||r,s)}function L_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bf,s)}function D_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wf,s)}function N_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sf,s)}function U_(i){switch(i){case 5126:return g_;case 35664:return __;case 35665:return x_;case 35666:return v_;case 35674:return y_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return b_;case 35667:case 35671:return w_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return E_;case 36294:return C_;case 36295:return R_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}function F_(i,e){i.uniform1fv(this.addr,e)}function O_(i,e){let t=Lr(e,this.size,2);i.uniform2fv(this.addr,t)}function B_(i,e){let t=Lr(e,this.size,3);i.uniform3fv(this.addr,t)}function k_(i,e){let t=Lr(e,this.size,4);i.uniform4fv(this.addr,t)}function z_(i,e){let t=Lr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V_(i,e){let t=Lr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function G_(i,e){let t=Lr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function H_(i,e){i.uniform1iv(this.addr,e)}function W_(i,e){i.uniform2iv(this.addr,e)}function X_(i,e){i.uniform3iv(this.addr,e)}function q_(i,e){i.uniform4iv(this.addr,e)}function Y_(i,e){i.uniform1uiv(this.addr,e)}function J_(i,e){i.uniform2uiv(this.addr,e)}function Z_(i,e){i.uniform3uiv(this.addr,e)}function K_(i,e){i.uniform4uiv(this.addr,e)}function $_(i,e,t){let n=this.cache,s=e.length,r=cc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Yh:o=Mf;for(let c=0;c!==s;++c)t.setTexture2D(e[c]||o,r[c])}function j_(i,e,t){let n=this.cache,s=e.length,r=cc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||bf,r[o])}function Q_(i,e,t){let n=this.cache,s=e.length,r=cc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||wf,r[o])}function ex(i,e,t){let n=this.cache,s=e.length,r=cc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sf,r[o])}function tx(i){switch(i){case 5126:return F_;case 35664:return O_;case 35665:return B_;case 35666:return k_;case 35674:return z_;case 35675:return V_;case 35676:return G_;case 5124:case 35670:return H_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return J_;case 36295:return Z_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ex}}var Jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=U_(t.type)}},Zh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tx(t.type)}},Kh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(e,t[c.id],n)}}},Xh=/(\w+)(\])?(\[|\.)?/g;function of(i,e){i.seq.push(e),i.map[e.id]=e}function nx(i,e,t){let n=i.name,s=n.length;for(Xh.lastIndex=0;;){let r=Xh.exec(n),o=Xh.lastIndex,c=r[1],u=r[2]==="]",h=r[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===s){of(t,h===void 0?new Jh(c,i,e):new Zh(c,i,e));break}else{let x=t.map[c];x===void 0&&(x=new Kh(c),of(t,x)),t=x}}}var Ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let c=e.getActiveUniform(t,o),u=e.getUniformLocation(t,c.name);nx(c,u,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let c=t[r],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function lf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ix=37297,sx=0;function rx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}var cf=new dt;function ax(i){Tt._getMatrix(cf,Tt.workingColorSpace,i);let e=`mat3( ${cf.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(i)){case oa:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+rx(i.getShaderSource(e),c)}else return r}function ox(i,e){let t=ax(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var lx={[Mh]:"Linear",[Sh]:"Reinhard",[bh]:"Cineon",[Ra]:"ACESFilmic",[Th]:"AgX",[Ah]:"Neutral",[wh]:"Custom"};function cx(i,e){let t=lx[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sc=new ae;function hx(){Tt.getLuminanceCoefficients(sc);let i=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ux(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function dx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function Va(i){return i!==""}function uf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function df(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var px=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(i){return i.replace(px,gx)}var mx=new Map;function gx(i,e){let t=vt[e];if(t===void 0){let n=mx.get(e);if(n!==void 0)t=vt[n],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $h(t)}var _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(i){return i.replace(_x,xx)}function xx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var vx={[Ca]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function yx(i){return vx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mx={[rs]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE_UV"};function Sx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Mx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var bx={[Ls]:"ENVMAP_MODE_REFRACTION"};function wx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":bx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Tx={[yh]:"ENVMAP_BLENDING_MULTIPLY",[Pd]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};function Ax(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Tx[i.combine]||"ENVMAP_BLENDING_NONE"}function Ex(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,c=t.fragmentShader,u=yx(t),h=Sx(t),g=wx(t),x=Ax(t),f=Ex(t),M=ux(t),T=dx(r),N=s.createProgram(),v,p,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Va).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Va).join(`
`),p.length>0&&(p+=`
`)):(v=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),p=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?vt.tonemapping_pars_fragment:"",t.toneMapping!==oi?cx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,ox("linearToOutputTexel",t.outputColorSpace),hx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),o=$h(o),o=uf(o,t),o=df(o,t),c=$h(c),c=uf(c,t),c=df(c,t),o=ff(o),c=ff(c),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let k=L+v+o,R=L+p+c,C=lf(s,s.VERTEX_SHADER,k),P=lf(s,s.FRAGMENT_SHADER,R);s.attachShader(N,C),s.attachShader(N,P),t.index0AttributeName!==void 0?s.bindAttribLocation(N,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(N,0,"position"),s.linkProgram(N);function B(q){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(N)||"",$=s.getShaderInfoLog(C)||"",W=s.getShaderInfoLog(P)||"",j=H.trim(),ce=$.trim(),he=W.trim(),me=!0,se=!0;if(s.getProgramParameter(N,s.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,N,C,P);else{let de=hf(s,C,"vertex"),te=hf(s,P,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(N,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+j+`
`+de+`
`+te)}else j!==""?ot("WebGLProgram: Program Info Log:",j):(ce===""||he==="")&&(se=!1);se&&(q.diagnostics={runnable:me,programLog:j,vertexShader:{log:ce,prefix:v},fragmentShader:{log:he,prefix:p}})}s.deleteShader(C),s.deleteShader(P),b=new Ir(s,N),D=fx(s,N)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(N,ix)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(N),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sx++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=C,this.fragmentShader=P,this}var Rx=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qh(e),t.set(e,n)),n}},Qh=class{constructor(e){this.id=Rx++,this.code=e,this.usedTimes=0}};function Px(i){return i===ls||i===Fa||i===Oa}function Ix(i,e,t,n,s,r){let o=new ha,c=new jh,u=new Set,h=[],g=new Map,x=n.logarithmicDepthBuffer,f=n.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return u.add(b),b===0?"uv":`uv${b}`}function N(b,D,G,q,H,$){let W=q.fog,j=H.geometry,ce=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?q.environment:null,he=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,me=e.get(b.envMap||ce,he),se=me&&me.mapping===Pa?me.image.height:null,de=M[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&ot("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let te=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Fe=te!==void 0?te.length:0,qe=0;j.morphAttributes.position!==void 0&&(qe=1),j.morphAttributes.normal!==void 0&&(qe=2),j.morphAttributes.color!==void 0&&(qe=3);let Dt,Mt,At,ge;if(de){let Ot=Si[de];Dt=Ot.vertexShader,Mt=Ot.fragmentShader}else{Dt=b.vertexShader,Mt=b.fragmentShader;let Ot=c.getVertexShaderStage(b),lt=c.getFragmentShaderStage(b);c.update(b,Ot,lt),At=Ot.id,ge=lt.id}let ye=i.getRenderTarget(),Xe=i.state.buffers.depth.getReversed(),at=H.isInstancedMesh===!0,Ue=H.isBatchedMesh===!0,pt=!!b.map,Gt=!!b.matcap,ut=!!me,yt=!!b.aoMap,Et=!!b.lightMap,ft=!!b.bumpMap&&b.wireframe===!1,Ft=!!b.normalMap,jt=!!b.displacementMap,dn=!!b.emissiveMap,Ht=!!b.metalnessMap,qt=!!b.roughnessMap,J=b.anisotropy>0,cn=b.clearcoat>0,mt=b.dispersion>0,I=b.retroreflectivity>0,y=b.iridescence>0,K=b.sheen>0,Q=b.transmission>0,_e=J&&!!b.anisotropyMap,Pe=cn&&!!b.clearcoatMap,Se=cn&&!!b.clearcoatNormalMap,z=cn&&!!b.clearcoatRoughnessMap,re=y&&!!b.iridescenceMap,Le=y&&!!b.iridescenceThicknessMap,Ye=K&&!!b.sheenColorMap,ke=K&&!!b.sheenRoughnessMap,De=!!b.specularMap,et=!!b.specularColorMap,je=!!b.specularIntensityMap,Be=Q&&!!b.transmissionMap,X=Q&&!!b.thicknessMap,Ee=!!b.gradientMap,fe=!!b.alphaMap,Ce=b.alphaTest>0,Ge=!!b.alphaHash,be=!!b.extensions,Qe=oi;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Qe=i.toneMapping);let Ke={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:Dt,fragmentShader:Mt,defines:b.defines,customVertexShaderID:At,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&H._colorsTexture!==null,instancing:at,instancingColor:at&&H.instanceColor!==null,instancingMorph:at&&H.morphTexture!==null,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:pt,matcap:Gt,envMap:ut,envMapMode:ut&&me.mapping,envMapCubeUVHeight:se,aoMap:yt,lightMap:Et,bumpMap:ft,normalMap:Ft,displacementMap:jt,emissiveMap:dn,normalMapObjectSpace:Ft&&b.normalMapType===Nd,normalMapTangentSpace:Ft&&b.normalMapType===ec,packedNormalMap:Ft&&b.normalMapType===ec&&Px(b.normalMap.format),metalnessMap:Ht,roughnessMap:qt,anisotropy:J,anisotropyMap:_e,clearcoat:cn,clearcoatMap:Pe,clearcoatNormalMap:Se,clearcoatRoughnessMap:z,dispersion:mt,retroreflection:I,iridescence:y,iridescenceMap:re,iridescenceThicknessMap:Le,sheen:K,sheenColorMap:Ye,sheenRoughnessMap:ke,specularMap:De,specularColorMap:et,specularIntensityMap:je,transmission:Q,transmissionMap:Be,thicknessMap:X,gradientMap:Ee,opaque:b.transparent===!1&&b.blending===Tr&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ce,alphaHash:Ge,combine:b.combine,mapUv:pt&&T(b.map.channel),aoMapUv:yt&&T(b.aoMap.channel),lightMapUv:Et&&T(b.lightMap.channel),bumpMapUv:ft&&T(b.bumpMap.channel),normalMapUv:Ft&&T(b.normalMap.channel),displacementMapUv:jt&&T(b.displacementMap.channel),emissiveMapUv:dn&&T(b.emissiveMap.channel),metalnessMapUv:Ht&&T(b.metalnessMap.channel),roughnessMapUv:qt&&T(b.roughnessMap.channel),anisotropyMapUv:_e&&T(b.anisotropyMap.channel),clearcoatMapUv:Pe&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Se&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(b.sheenRoughnessMap.channel),specularMapUv:De&&T(b.specularMap.channel),specularColorMapUv:et&&T(b.specularColorMap.channel),specularIntensityMapUv:je&&T(b.specularIntensityMap.channel),transmissionMapUv:Be&&T(b.transmissionMap.channel),thicknessMapUv:X&&T(b.thicknessMap.channel),alphaMapUv:fe&&T(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ft||J),vertexNormals:!!j.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(pt||fe),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||j.attributes.normal===void 0&&Ft===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Xe,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:qe,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:pt&&b.map.isVideoTexture===!0&&Tt.getTransfer(b.map.colorSpace)===Ut,decodeVideoTextureEmissive:dn&&b.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(b.emissiveMap.colorSpace)===Ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vi,flipSided:b.side===gn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:be&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&b.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function v(b){let D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(let G in b.defines)D.push(G),D.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(p(D,b),L(D,b),D.push(i.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function p(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numSunLights),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numSunLightShadows),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function L(b,D){o.disableAll(),D.instancing&&o.enable(0),D.instancingColor&&o.enable(1),D.instancingMorph&&o.enable(2),D.matcap&&o.enable(3),D.envMap&&o.enable(4),D.normalMapObjectSpace&&o.enable(5),D.normalMapTangentSpace&&o.enable(6),D.clearcoat&&o.enable(7),D.iridescence&&o.enable(8),D.alphaTest&&o.enable(9),D.vertexColors&&o.enable(10),D.vertexAlphas&&o.enable(11),D.vertexUv1s&&o.enable(12),D.vertexUv2s&&o.enable(13),D.vertexUv3s&&o.enable(14),D.vertexTangents&&o.enable(15),D.anisotropy&&o.enable(16),D.alphaHash&&o.enable(17),D.batching&&o.enable(18),D.dispersion&&o.enable(19),D.retroreflection&&o.enable(24),D.batchingColor&&o.enable(20),D.gradientMap&&o.enable(21),D.packedNormalMap&&o.enable(22),D.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.reversedDepthBuffer&&o.enable(4),D.skinning&&o.enable(5),D.morphTargets&&o.enable(6),D.morphNormals&&o.enable(7),D.morphColors&&o.enable(8),D.premultipliedAlpha&&o.enable(9),D.shadowMapEnabled&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),D.decodeVideoTexture&&o.enable(19),D.decodeVideoTextureEmissive&&o.enable(20),D.alphaToCoverage&&o.enable(21),D.numLightProbeGrids>0&&o.enable(22),D.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function k(b){let D=M[b.type],G;if(D){let q=Si[D];G=Jd.clone(q.uniforms)}else G=b.uniforms;return G}function R(b,D){let G=g.get(D);return G!==void 0?++G.usedTimes:(G=new Cx(i,D,b,s),h.push(G),g.set(D,G)),G}function C(b){if(--b.usedTimes===0){let D=h.indexOf(b);h[D]=h[h.length-1],h.pop(),g.delete(b.cacheKey),b.destroy()}}function P(b){c.remove(b)}function B(){c.dispose()}return{getParameters:N,getProgramCacheKey:v,getUniforms:k,acquireProgram:R,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:B}}function Lx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,u){i.get(o)[c]=u}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Dx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function mf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let M=0;return f.isInstancedMesh&&(M+=2),f.isSkinnedMesh&&(M+=1),M}function c(f,M,T,N,v,p){let L=i[e];return L===void 0?(L={id:f.id,object:f,geometry:M,material:T,materialVariant:o(f),groupOrder:N,renderOrder:f.renderOrder,z:v,group:p},i[e]=L):(L.id=f.id,L.object=f,L.geometry=M,L.material=T,L.materialVariant=o(f),L.groupOrder=N,L.renderOrder=f.renderOrder,L.z=v,L.group=p),e++,L}function u(f,M,T,N,v,p,L){L.reversedDepth===!0&&(v=-v);let k=c(f,M,T,N,v,p);T.transmission>0?n.push(k):T.transparent===!0?s.push(k):t.push(k)}function h(f,M,T,N,v,p){let L=c(f,M,T,N,v,p);T.transmission>0?n.unshift(L):T.transparent===!0?s.unshift(L):t.unshift(L)}function g(f,M){t.length>1&&t.sort(f||Dx),n.length>1&&n.sort(M||mf),s.length>1&&s.sort(M||mf)}function x(){for(let f=e,M=i.length;f<M;f++){let T=i[f];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:u,unshift:h,finish:x,sort:g}}function Nx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new gf,i.set(n,[o])):s>=r.length?(o=new gf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ux(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ae,color:new gt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return i[e.id]=t,t}}}function Fx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ox=0;function Bx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kx(i){let e=new Ux,t=Fx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ae);let s=new ae,r=new zt,o=new zt;function c(h){let g=0,x=0,f=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let M=0,T=0,N=0,v=0,p=0,L=0,k=0,R=0,C=0,P=0,B=0,b=0,D=0,G=0;h.sort(Bx);for(let H=0,$=h.length;H<$;H++){let W=h[H],j=W.color,ce=W.intensity,he=W.distance,me=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===ls?me=W.shadow.map.texture:me=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)g+=j.r*ce,x+=j.g*ce,f+=j.b*ce;else if(W.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(W.sh.coefficients[se],ce);G++}else if(W.isSunLight){let se=e.get(W);if(se.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let de=W.shadow,te=t.get(W);te.shadowIntensity=de.intensity,te.shadowBias=de.bias,te.shadowNormalBias=de.normalBias,te.shadowRadius=de.radius,te.shadowMapSize.copy(de.mapSize).multiply(de.getFrameExtents()),n.sunShadow[T]=te,n.sunShadowMap[T]=me;let Fe=de.getViewportCount();for(let qe=0;qe<Fe;qe++)n.sunShadowMatrix[N+qe]=de.getMatrix(qe),n.sunShadowCascade[N+qe]=de._cascadeData[qe];N+=Fe,T++}n.sun[M]=se,M++}else if(W.isDirectionalLight){let se=e.get(W);if(se.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let de=W.shadow,te=t.get(W);te.shadowIntensity=de.intensity,te.shadowBias=de.bias,te.shadowNormalBias=de.normalBias,te.shadowRadius=de.radius,te.shadowMapSize=de.mapSize,n.directionalShadow[v]=te,n.directionalShadowMap[v]=me,n.directionalShadowMatrix[v]=W.shadow.matrix,C++}n.directional[v]=se,v++}else if(W.isSpotLight){let se=e.get(W);se.position.setFromMatrixPosition(W.matrixWorld),se.color.copy(j).multiplyScalar(ce),se.distance=he,se.coneCos=Math.cos(W.angle),se.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),se.decay=W.decay,n.spot[L]=se;let de=W.shadow;if(W.map&&(n.spotLightMap[b]=W.map,b++,de.updateMatrices(W),W.castShadow&&D++),n.spotLightMatrix[L]=de.matrix,W.castShadow){let te=t.get(W);te.shadowIntensity=de.intensity,te.shadowBias=de.bias,te.shadowNormalBias=de.normalBias,te.shadowRadius=de.radius,te.shadowMapSize=de.mapSize,n.spotShadow[L]=te,n.spotShadowMap[L]=me,B++}L++}else if(W.isRectAreaLight){let se=e.get(W);se.color.copy(j).multiplyScalar(ce),se.halfWidth.set(W.width*.5,0,0),se.halfHeight.set(0,W.height*.5,0),n.rectArea[k]=se,k++}else if(W.isPointLight){let se=e.get(W);if(se.color.copy(W.color).multiplyScalar(W.intensity),se.distance=W.distance,se.decay=W.decay,W.castShadow){let de=W.shadow,te=t.get(W);te.shadowIntensity=de.intensity,te.shadowBias=de.bias,te.shadowNormalBias=de.normalBias,te.shadowRadius=de.radius,te.shadowMapSize=de.mapSize,te.shadowCameraNear=de.camera.near,te.shadowCameraFar=de.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=me,n.pointShadowMatrix[p]=W.shadow.matrix,P++}n.point[p]=se,p++}else if(W.isHemisphereLight){let se=e.get(W);se.skyColor.copy(W.color).multiplyScalar(ce),se.groundColor.copy(W.groundColor).multiplyScalar(ce),n.hemi[R]=se,R++}}k>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=x,n.ambient[2]=f;let q=n.hash;(q.sunLength!==M||q.directionalLength!==v||q.pointLength!==p||q.spotLength!==L||q.rectAreaLength!==k||q.hemiLength!==R||q.numSunShadows!==T||q.numDirectionalShadows!==C||q.numPointShadows!==P||q.numSpotShadows!==B||q.numSpotMaps!==b||q.numLightProbes!==G)&&(n.sun.length=M,n.directional.length=v,n.spot.length=L,n.rectArea.length=k,n.point.length=p,n.hemi.length=R,n.sunShadow.length=T,n.sunShadowMap.length=T,n.sunShadowMatrix.length=N,n.sunShadowCascade.length=N,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=B,n.spotShadowMap.length=B,n.spotLightMatrix.length=B+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=G,q.sunLength=M,q.directionalLength=v,q.pointLength=p,q.spotLength=L,q.rectAreaLength=k,q.hemiLength=R,q.numSunShadows=T,q.numDirectionalShadows=C,q.numPointShadows=P,q.numSpotShadows=B,q.numSpotMaps=b,q.numLightProbes=G,n.version=Ox++)}function u(h,g){let x=0,f=0,M=0,T=0,N=0,v=0,p=g.matrixWorldInverse;for(let L=0,k=h.length;L<k;L++){let R=h[L];if(R.isSunLight){let C=n.sun[x];C.direction.setFromMatrixPosition(R.matrixWorld),C.direction.transformDirection(p),x++}else if(R.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),f++}else if(R.isSpotLight){let C=n.spot[T];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),T++}else if(R.isRectAreaLight){let C=n.rectArea[N];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(p),o.identity(),r.copy(R.matrixWorld),r.premultiply(p),o.extractRotation(r),C.halfWidth.set(R.width*.5,0,0),C.halfHeight.set(0,R.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),N++}else if(R.isPointLight){let C=n.point[M];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(p),M++}else if(R.isHemisphereLight){let C=n.hemi[v];C.direction.setFromMatrixPosition(R.matrixWorld),C.direction.transformDirection(p),v++}}}return{setup:c,setupView:u,state:n}}function _f(i){let e=new kx(i),t=[],n=[],s=[];function r(f){x.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function c(f){n.push(f)}function u(f){s.push(f)}function h(){e.setup(t)}function g(f){e.setupView(t,f)}let x={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:x,setupLights:h,setupLightsView:g,pushLight:o,pushShadow:c,pushLightProbeGrid:u}}function zx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),c;return o===void 0?(c=new _f(i),e.set(s,[c])):r>=o.length?(c=new _f(i),o.push(c)):c=o[r],c}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hx=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],Wx=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],xf=new zt,za=new ae,qh=new ae;function Xx(i,e,t){let n=new Mr,s=new Rt,r=new Rt,o=new Yt,c=new Qo,u=new el,h={},g=t.maxTextureSize,x={[ss]:gn,[gn]:ss,[vi]:vi},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Vx,fragmentShader:Gx}),M=f.clone();M.defines.HORIZONTAL_PASS=1;let T=new Bn;T.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let N=new Tn(T,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca;let p=this.type;this.render=function(P,B,b){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;this.type===pl&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ca);let D=i.getRenderTarget(),G=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),H=i.state;H.setBlending(yi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let $=p!==this.type;$&&B.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(j=>j.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,j=P.length;W<j;W++){let ce=P[W],he=ce.shadow;if(he===void 0){ot("WebGLShadowMap:",ce,"has no shadow.");continue}if(he.autoUpdate===!1&&he.needsUpdate===!1)continue;s.copy(he.mapSize);let me=he.getFrameExtents();s.multiply(me),r.copy(he.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(r.x=Math.floor(g/me.x),s.x=r.x*me.x,he.mapSize.x=r.x),s.y>g&&(r.y=Math.floor(g/me.y),s.y=r.y*me.y,he.mapSize.y=r.y));let se=i.state.buffers.depth.getReversed();if(he.camera._reversedDepth=se,he.map===null||$===!0){if(he.map!==null&&(he.map.depthTexture!==null&&(he.map.depthTexture.dispose(),he.map.depthTexture=null),he.map.dispose()),this.type===wr){if(ce.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}he.map=new Ln(s.x,s.y,{format:ls,type:ci,minFilter:mn,magFilter:mn,generateMipmaps:!1}),he.map.texture.name=ce.name+".shadowMap",he.map.depthTexture=new es(s.x,s.y,Zn),he.map.depthTexture.name=ce.name+".shadowMapDepth",he.map.depthTexture.format=mi,he.map.depthTexture.compareFunction=null,he.map.depthTexture.minFilter=$t,he.map.depthTexture.magFilter=$t}else ce.isPointLight?(he.map=new ac(s.x),he.map.depthTexture=new $o(s.x,li)):(he.map=new Ln(s.x,s.y),he.map.depthTexture=new es(s.x,s.y,li)),he.map.depthTexture.name=ce.name+".shadowMap",he.map.depthTexture.format=mi,this.type===Ca?(he.map.depthTexture.compareFunction=se?nc:tc,he.map.depthTexture.minFilter=mn,he.map.depthTexture.magFilter=mn):(he.map.depthTexture.compareFunction=null,he.map.depthTexture.minFilter=$t,he.map.depthTexture.magFilter=$t);he.camera.updateProjectionMatrix()}he.map.isWebGLCubeRenderTarget!==!0&&(he.map.width!==s.x||he.map.height!==s.y)&&he.map.setSize(s.x,s.y);let de=he.map.isWebGLCubeRenderTarget?6:he.getViewportCount();ce.isPointLight!==!0&&he.updateMatrices(ce,b);for(let te=0;te<de;te++){let Fe=he.getCamera(te);if(ce.isPointLight){let qe=he.camera,Dt=he.matrix,Mt=ce.distance||qe.far;Mt!==qe.far&&(qe.far=Mt,qe.updateProjectionMatrix()),za.setFromMatrixPosition(ce.matrixWorld),qe.position.copy(za),qh.copy(qe.position),qh.add(Hx[te]),qe.up.copy(Wx[te]),qe.lookAt(qh),qe.updateMatrixWorld(),Dt.makeTranslation(-za.x,-za.y,-za.z),xf.multiplyMatrices(qe.projectionMatrix,qe.matrixWorldInverse),he._frustum.setFromProjectionMatrix(xf,qe.coordinateSystem,qe.reversedDepth)}if(he.map.isWebGLCubeRenderTarget)i.setRenderTarget(he.map,te),i.clear();else{te===0&&(i.setRenderTarget(he.map),i.clear());let qe=he.getViewport(te);o.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),H.viewport(o)}n=he.getFrustum(te),R(B,b,Fe,ce,this.type)}he.isPointLightShadow!==!0&&this.type===wr&&L(he,b),he.needsUpdate=!1}p=this.type,v.needsUpdate=!1,i.setRenderTarget(D,G,q)};function L(P,B){let b=e.update(N);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null?P.mapPass=new Ln(s.x,s.y,{format:ls,type:ci}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(B,null,b,f,N,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value.set(P.map.width,P.map.height),M.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(B,null,b,M,N,null)}function k(P,B,b,D){let G=null,q=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(q!==void 0)G=q;else if(G=b.isPointLight===!0?u:c,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){let H=G.uuid,$=B.uuid,W=h[H];W===void 0&&(W={},h[H]=W);let j=W[$];j===void 0&&(j=G.clone(),W[$]=j,B.addEventListener("dispose",C)),G=j}if(G.visible=B.visible,G.wireframe=B.wireframe,D===wr?G.side=B.shadowSide!==null?B.shadowSide:B.side:G.side=B.shadowSide!==null?B.shadowSide:x[B.side],G.alphaMap=B.alphaMap,G.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,G.map=B.map,G.clipShadows=B.clipShadows,G.clippingPlanes=B.clippingPlanes,G.clipIntersection=B.clipIntersection,G.displacementMap=B.displacementMap,G.displacementScale=B.displacementScale,G.displacementBias=B.displacementBias,G.wireframeLinewidth=B.wireframeLinewidth,G.linewidth=B.linewidth,b.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let H=i.properties.get(G);H.light=b}return G}function R(P,B,b,D,G){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&G===wr)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);let $=e.update(P),W=P.material;if(Array.isArray(W)){let j=$.groups;for(let ce=0,he=j.length;ce<he;ce++){let me=j[ce],se=W[me.materialIndex];if(se&&se.visible){let de=k(P,se,D,G);P.onBeforeShadow(i,P,B,b,$,de,me),i.renderBufferDirect(b,null,$,de,P,me),P.onAfterShadow(i,P,B,b,$,de,me)}}}else if(W.visible){let j=k(P,W,D,G);P.onBeforeShadow(i,P,B,b,$,j,null),i.renderBufferDirect(b,null,$,j,P,null),P.onAfterShadow(i,P,B,b,$,j,null)}}let H=P.children;for(let $=0,W=H.length;$<W;$++)R(H[$],B,b,D,G)}function C(P){P.target.removeEventListener("dispose",C);for(let b in h){let D=h[b],G=P.target.uuid;G in D&&(D[G].dispose(),delete D[G])}}}function qx(i,e){function t(){let X=!1,Ee=new Yt,fe=null,Ce=new Yt(0,0,0,0);return{setMask:function(Ge){fe!==Ge&&!X&&(i.colorMask(Ge,Ge,Ge,Ge),fe=Ge)},setLocked:function(Ge){X=Ge},setClear:function(Ge,be,Qe,Ke,Ot){Ot===!0&&(Ge*=Ke,be*=Ke,Qe*=Ke),Ee.set(Ge,be,Qe,Ke),Ce.equals(Ee)===!1&&(i.clearColor(Ge,be,Qe,Ke),Ce.copy(Ee))},reset:function(){X=!1,fe=null,Ce.set(-1,0,0,0)}}}function n(){let X=!1,Ee=!1,fe=null,Ce=null,Ge=null;return{setReversed:function(be){if(Ee!==be){let Qe=e.get("EXT_clip_control");be?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ee=be;let Ke=Ge;Ge=null,this.setClear(Ke)}},getReversed:function(){return Ee},setTest:function(be){be?ye(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(be){fe!==be&&!X&&(i.depthMask(be),fe=be)},setFunc:function(be){if(Ee&&(be=qd[be]),Ce!==be){switch(be){case Fo:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=be}},setLocked:function(be){X=be},setClear:function(be){Ge!==be&&(Ge=be,Ee&&(be=1-be),i.clearDepth(be))},reset:function(){X=!1,fe=null,Ce=null,Ge=null,Ee=!1}}}function s(){let X=!1,Ee=null,fe=null,Ce=null,Ge=null,be=null,Qe=null,Ke=null,Ot=null;return{setTest:function(lt){X||(lt?ye(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(lt){Ee!==lt&&!X&&(i.stencilMask(lt),Ee=lt)},setFunc:function(lt,Nn,fn){(fe!==lt||Ce!==Nn||Ge!==fn)&&(i.stencilFunc(lt,Nn,fn),fe=lt,Ce=Nn,Ge=fn)},setOp:function(lt,Nn,fn){(be!==lt||Qe!==Nn||Ke!==fn)&&(i.stencilOp(lt,Nn,fn),be=lt,Qe=Nn,Ke=fn)},setLocked:function(lt){X=lt},setClear:function(lt){Ot!==lt&&(i.clearStencil(lt),Ot=lt)},reset:function(){X=!1,Ee=null,fe=null,Ce=null,Ge=null,be=null,Qe=null,Ke=null,Ot=null}}}let r=new t,o=new n,c=new s,u=new WeakMap,h=new WeakMap,g={},x={},f={},M=new WeakMap,T=[],N=null,v=!1,p=null,L=null,k=null,R=null,C=null,P=null,B=null,b=new gt(0,0,0),D=0,G=!1,q=null,H=null,$=null,W=null,j=null,ce=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),he=!1,me=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(se)[1]),he=me>=1):se.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),he=me>=2);let de=null,te={},Fe=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),Dt=new Yt().fromArray(Fe),Mt=new Yt().fromArray(qe);function At(X,Ee,fe,Ce){let Ge=new Uint8Array(4),be=i.createTexture();i.bindTexture(X,be),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<fe;Qe++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(Ee+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return be}let ge={};ge[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),ye(i.DEPTH_TEST),o.setFunc(gr),ft(!1),Ft(ph),ye(i.CULL_FACE),yt(yi);function ye(X){g[X]!==!0&&(i.enable(X),g[X]=!0)}function Xe(X){g[X]!==!1&&(i.disable(X),g[X]=!1)}function at(X,Ee){return f[X]!==Ee?(i.bindFramebuffer(X,Ee),f[X]=Ee,X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ee),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Ue(X,Ee){let fe=T,Ce=!1;if(X){fe=M.get(Ee),fe===void 0&&(fe=[],M.set(Ee,fe));let Ge=X.textures;if(fe.length!==Ge.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Qe=Ge.length;be<Qe;be++)fe[be]=i.COLOR_ATTACHMENT0+be;fe.length=Ge.length,Ce=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(fe)}function pt(X){return N!==X?(i.useProgram(X),N=X,!0):!1}let Gt={[Is]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[pd]:i.FUNC_REVERSE_SUBTRACT};Gt[md]=i.MIN,Gt[gd]=i.MAX;let ut={[_d]:i.ZERO,[xd]:i.ONE,[vd]:i.SRC_COLOR,[xh]:i.SRC_ALPHA,[Td]:i.SRC_ALPHA_SATURATE,[bd]:i.DST_COLOR,[Md]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[vh]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[Sd]:i.ONE_MINUS_DST_ALPHA,[Ad]:i.CONSTANT_COLOR,[Ed]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(X,Ee,fe,Ce,Ge,be,Qe,Ke,Ot,lt){if(X===yi){v===!0&&(Xe(i.BLEND),v=!1);return}if(v===!1&&(ye(i.BLEND),v=!0),X!==dd){if(X!==p||lt!==G){if((L!==Is||C!==Is)&&(i.blendEquation(i.FUNC_ADD),L=Is,C=Is),lt)switch(X){case Tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mh:i.blendFunc(i.ONE,i.ONE);break;case gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _h:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ht("WebGLState: Invalid blending: ",X);break}else switch(X){case Tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gh:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _h:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",X);break}k=null,R=null,P=null,B=null,b.set(0,0,0),D=0,p=X,G=lt}return}Ge=Ge||Ee,be=be||fe,Qe=Qe||Ce,(Ee!==L||Ge!==C)&&(i.blendEquationSeparate(Gt[Ee],Gt[Ge]),L=Ee,C=Ge),(fe!==k||Ce!==R||be!==P||Qe!==B)&&(i.blendFuncSeparate(ut[fe],ut[Ce],ut[be],ut[Qe]),k=fe,R=Ce,P=be,B=Qe),(Ke.equals(b)===!1||Ot!==D)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Ot),b.copy(Ke),D=Ot),p=X,G=!1}function Et(X,Ee){X.side===vi?Xe(i.CULL_FACE):ye(i.CULL_FACE);let fe=X.side===gn;Ee&&(fe=!fe),ft(fe),X.blending===Tr&&X.transparent===!1?yt(yi):yt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Ce=X.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),dn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(X){q!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),q=X)}function Ft(X){X!==hd?(ye(i.CULL_FACE),X!==H&&(X===ph?i.cullFace(i.BACK):X===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),H=X}function jt(X){X!==$&&(he&&i.lineWidth(X),$=X)}function dn(X,Ee,fe){X?(ye(i.POLYGON_OFFSET_FILL),(W!==Ee||j!==fe)&&(W=Ee,j=fe,o.getReversed()&&(Ee=-Ee),i.polygonOffset(Ee,fe))):Xe(i.POLYGON_OFFSET_FILL)}function Ht(X){X?ye(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function qt(X){X===void 0&&(X=i.TEXTURE0+ce-1),de!==X&&(i.activeTexture(X),de=X)}function J(X,Ee,fe){fe===void 0&&(de===null?fe=i.TEXTURE0+ce-1:fe=de);let Ce=te[fe];Ce===void 0&&(Ce={type:void 0,texture:void 0},te[fe]=Ce),(Ce.type!==X||Ce.texture!==Ee)&&(de!==fe&&(i.activeTexture(fe),de=fe),i.bindTexture(X,Ee||ge[X]),Ce.type=X,Ce.texture=Ee)}function cn(){let X=te[de];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function mt(){try{i.compressedTexImage2D(...arguments)}catch(X){ht("WebGLState:",X)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(X){ht("WebGLState:",X)}}function y(){try{i.texSubImage2D(...arguments)}catch(X){ht("WebGLState:",X)}}function K(){try{i.texSubImage3D(...arguments)}catch(X){ht("WebGLState:",X)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(X){ht("WebGLState:",X)}}function _e(){try{i.compressedTexSubImage3D(...arguments)}catch(X){ht("WebGLState:",X)}}function Pe(){try{i.texStorage2D(...arguments)}catch(X){ht("WebGLState:",X)}}function Se(){try{i.texStorage3D(...arguments)}catch(X){ht("WebGLState:",X)}}function z(){try{i.texImage2D(...arguments)}catch(X){ht("WebGLState:",X)}}function re(){try{i.texImage3D(...arguments)}catch(X){ht("WebGLState:",X)}}function Le(X){return x[X]!==void 0?x[X]:i.getParameter(X)}function Ye(X,Ee){x[X]!==Ee&&(i.pixelStorei(X,Ee),x[X]=Ee)}function ke(X){Dt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Dt.copy(X))}function De(X){Mt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Mt.copy(X))}function et(X,Ee){let fe=h.get(Ee);fe===void 0&&(fe=new WeakMap,h.set(Ee,fe));let Ce=fe.get(X);Ce===void 0&&(Ce=i.getUniformBlockIndex(Ee,X.name),fe.set(X,Ce))}function je(X,Ee){let Ce=h.get(Ee).get(X);u.get(Ee)!==Ce&&(i.uniformBlockBinding(Ee,Ce,X.__bindingPointIndex),u.set(Ee,Ce))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),g={},x={},de=null,te={},f={},M=new WeakMap,T=[],N=null,v=!1,p=null,L=null,k=null,R=null,C=null,P=null,B=null,b=new gt(0,0,0),D=0,G=!1,q=null,H=null,$=null,W=null,j=null,Dt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:ye,disable:Xe,bindFramebuffer:at,drawBuffers:Ue,useProgram:pt,setBlending:yt,setMaterial:Et,setFlipSided:ft,setCullFace:Ft,setLineWidth:jt,setPolygonOffset:dn,setScissorTest:Ht,activeTexture:qt,bindTexture:J,unbindTexture:cn,compressedTexImage2D:mt,compressedTexImage3D:I,texImage2D:z,texImage3D:re,pixelStorei:Ye,getParameter:Le,updateUBOMapping:et,uniformBlockBinding:je,texStorage2D:Pe,texStorage3D:Se,texSubImage2D:y,texSubImage3D:K,compressedTexSubImage2D:Q,compressedTexSubImage3D:_e,scissor:ke,viewport:De,reset:Be}}function Yx(i,e,t,n,s,r,o){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,g=new WeakMap,x=new Set,f,M=new WeakMap,T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(I,y){return T?new OffscreenCanvas(I,y):la("canvas")}function v(I,y,K){let Q=1,_e=mt(I);if((_e.width>K||_e.height>K)&&(Q=K/Math.max(_e.width,_e.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Pe=Math.floor(Q*_e.width),Se=Math.floor(Q*_e.height);f===void 0&&(f=N(Pe,Se));let z=y?N(Pe,Se):f;return z.width=Pe,z.height=Se,z.getContext("2d").drawImage(I,0,0,Pe,Se),ot("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Pe+"x"+Se+")."),z}else return"data"in I&&ot("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function p(I){return I.generateMipmaps}function L(I){i.generateMipmap(I)}function k(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(I,y,K,Q,_e,Pe=!1){if(I!==null){if(i[I]!==void 0)return i[I];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Se;Q&&(Se=e.get("EXT_texture_norm16"),Se||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=y;if(y===i.RED&&(K===i.FLOAT&&(z=i.R32F),K===i.HALF_FLOAT&&(z=i.R16F),K===i.UNSIGNED_BYTE&&(z=i.R8),K===i.UNSIGNED_SHORT&&Se&&(z=Se.R16_EXT),K===i.SHORT&&Se&&(z=Se.R16_SNORM_EXT)),y===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(z=i.R8UI),K===i.UNSIGNED_SHORT&&(z=i.R16UI),K===i.UNSIGNED_INT&&(z=i.R32UI),K===i.BYTE&&(z=i.R8I),K===i.SHORT&&(z=i.R16I),K===i.INT&&(z=i.R32I)),y===i.RG&&(K===i.FLOAT&&(z=i.RG32F),K===i.HALF_FLOAT&&(z=i.RG16F),K===i.UNSIGNED_BYTE&&(z=i.RG8),K===i.UNSIGNED_SHORT&&Se&&(z=Se.RG16_EXT),K===i.SHORT&&Se&&(z=Se.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(z=i.RG8UI),K===i.UNSIGNED_SHORT&&(z=i.RG16UI),K===i.UNSIGNED_INT&&(z=i.RG32UI),K===i.BYTE&&(z=i.RG8I),K===i.SHORT&&(z=i.RG16I),K===i.INT&&(z=i.RG32I)),y===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(z=i.RGB8UI),K===i.UNSIGNED_SHORT&&(z=i.RGB16UI),K===i.UNSIGNED_INT&&(z=i.RGB32UI),K===i.BYTE&&(z=i.RGB8I),K===i.SHORT&&(z=i.RGB16I),K===i.INT&&(z=i.RGB32I)),y===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),K===i.UNSIGNED_INT&&(z=i.RGBA32UI),K===i.BYTE&&(z=i.RGBA8I),K===i.SHORT&&(z=i.RGBA16I),K===i.INT&&(z=i.RGBA32I)),y===i.RGB&&(K===i.UNSIGNED_SHORT&&Se&&(z=Se.RGB16_EXT),K===i.SHORT&&Se&&(z=Se.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(z=i.R11F_G11F_B10F)),y===i.RGBA){let re=Pe?oa:Tt.getTransfer(_e);K===i.FLOAT&&(z=i.RGBA32F),K===i.HALF_FLOAT&&(z=i.RGBA16F),K===i.UNSIGNED_BYTE&&(z=re===Ut?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Se&&(z=Se.RGBA16_EXT),K===i.SHORT&&Se&&(z=Se.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function C(I,y){let K;return I?y===null||y===li||y===Er?K=i.DEPTH24_STENCIL8:y===Zn?K=i.DEPTH32F_STENCIL8:y===Ar&&(K=i.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===li||y===Er?K=i.DEPTH_COMPONENT24:y===Zn?K=i.DEPTH_COMPONENT32F:y===Ar&&(K=i.DEPTH_COMPONENT16),K}function P(I,y){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==$t&&I.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function B(I){let y=I.target;y.removeEventListener("dispose",B),D(y),y.isVideoTexture&&g.delete(y),y.isHTMLTexture&&x.delete(y)}function b(I){let y=I.target;y.removeEventListener("dispose",b),q(y)}function D(I){let y=n.get(I);if(y.__webglInit===void 0)return;let K=I.source,Q=M.get(K);if(Q){let _e=Q[y.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&G(I),Object.keys(Q).length===0&&M.delete(K)}n.remove(I)}function G(I){let y=n.get(I);i.deleteTexture(y.__webglTexture);let K=I.source,Q=M.get(K);delete Q[y.__cacheKey],o.memory.textures--}function q(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let _e=0;_e<y.__webglFramebuffer[Q].length;_e++)i.deleteFramebuffer(y.__webglFramebuffer[Q][_e]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let K=I.textures;for(let Q=0,_e=K.length;Q<_e;Q++){let Pe=n.get(K[Q]);Pe.__webglTexture&&(i.deleteTexture(Pe.__webglTexture),o.memory.textures--),n.remove(K[Q])}n.remove(I)}let H=0;function $(){H=0}function W(){return H}function j(I){H=I}function ce(){let I=H;return I>=s.maxTextures&&ot("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,I}function he(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function me(I,y){let K=n.get(I);if(I.isVideoTexture&&J(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&K.__version!==I.version){let Q=I.image;if(Q===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(K,I,y);return}}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+y)}function se(I,y){let K=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Xe(K,I,y);return}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+y)}function de(I,y){let K=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Xe(K,I,y);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+y)}function te(I,y){let K=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&K.__version!==I.version){at(K,I,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+y)}let Fe={[Ho]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Wo]:i.MIRRORED_REPEAT},qe={[$t]:i.NEAREST,[Ld]:i.NEAREST_MIPMAP_NEAREST,[Ia]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[_l]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},Dt={[Fd]:i.NEVER,[Vd]:i.ALWAYS,[Od]:i.LESS,[tc]:i.LEQUAL,[Bd]:i.EQUAL,[nc]:i.GEQUAL,[kd]:i.GREATER,[zd]:i.NOTEQUAL};function Mt(I,y){if(y.type===Zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===mn||y.magFilter===_l||y.magFilter===Ia||y.magFilter===as||y.minFilter===mn||y.minFilter===_l||y.minFilter===Ia||y.minFilter===as)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Fe[y.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Fe[y.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Fe[y.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,qe[y.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,qe[y.minFilter]),y.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Dt[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$t||y.minFilter!==Ia&&y.minFilter!==as||y.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function At(I,y){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",B));let Q=y.source,_e=M.get(Q);_e===void 0&&(_e={},M.set(Q,_e));let Pe=he(y);if(Pe!==I.__cacheKey){_e[Pe]===void 0&&(_e[Pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),_e[Pe].usedTimes++;let Se=_e[I.__cacheKey];Se!==void 0&&(_e[I.__cacheKey].usedTimes--,Se.usedTimes===0&&G(y)),I.__cacheKey=Pe,I.__webglTexture=_e[Pe].texture}return K}function ge(I,y,K){return Math.floor(Math.floor(I/K)/y)}function ye(I,y,K,Q){let Pe=I.updateRanges;if(Pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,K,Q,y.data);else{Pe.sort((Ye,ke)=>Ye.start-ke.start);let Se=0;for(let Ye=1;Ye<Pe.length;Ye++){let ke=Pe[Se],De=Pe[Ye],et=ke.start+ke.count,je=ge(De.start,y.width,4),Be=ge(ke.start,y.width,4);De.start<=et+1&&je===Be&&ge(De.start+De.count-1,y.width,4)===je?ke.count=Math.max(ke.count,De.start+De.count-ke.start):(++Se,Pe[Se]=De)}Pe.length=Se+1;let z=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),Le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ye=0,ke=Pe.length;Ye<ke;Ye++){let De=Pe[Ye],et=Math.floor(De.start/4),je=Math.ceil(De.count/4),Be=et%y.width,X=Math.floor(et/y.width),Ee=je,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,Be,X,Ee,fe,K,Q,y.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function Xe(I,y,K){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);let _e=At(I,y),Pe=y.source;t.bindTexture(Q,I.__webglTexture,i.TEXTURE0+K);let Se=n.get(Pe);if(Pe.version!==Se.__version||_e===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let fe=Tt.getPrimaries(Tt.workingColorSpace),Ce=y.colorSpace===Ni?null:Tt.getPrimaries(y.colorSpace),Ge=y.colorSpace===Ni||fe===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let re=v(y.image,!1,s.maxTextureSize);re=cn(y,re);let Le=r.convert(y.format,y.colorSpace),Ye=r.convert(y.type),ke=R(y.internalFormat,Le,Ye,y.normalized,y.colorSpace,y.isVideoTexture);Mt(Q,y);let De,et=y.mipmaps,je=y.isVideoTexture!==!0,Be=Se.__version===void 0||_e===!0,X=Pe.dataReady,Ee=P(y,re);if(y.isDepthTexture)ke=C(y.format===os,y.type),Be&&(je?t.texStorage2D(i.TEXTURE_2D,1,ke,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,ke,re.width,re.height,0,Le,Ye,null));else if(y.isDataTexture)if(et.length>0){je&&Be&&t.texStorage2D(i.TEXTURE_2D,Ee,ke,et[0].width,et[0].height);for(let fe=0,Ce=et.length;fe<Ce;fe++)De=et[fe],je?X&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,De.width,De.height,Le,Ye,De.data):t.texImage2D(i.TEXTURE_2D,fe,ke,De.width,De.height,0,Le,Ye,De.data);y.generateMipmaps=!1}else je?(Be&&t.texStorage2D(i.TEXTURE_2D,Ee,ke,re.width,re.height),X&&ye(y,re,Le,Ye)):t.texImage2D(i.TEXTURE_2D,0,ke,re.width,re.height,0,Le,Ye,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){je&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,ke,et[0].width,et[0].height,re.depth);for(let fe=0,Ce=et.length;fe<Ce;fe++)if(De=et[fe],y.format!==Kn)if(Le!==null)if(je){if(X)if(y.layerUpdates.size>0){let Ge=zh(De.width,De.height,y.format,y.type);for(let be of y.layerUpdates){let Qe=De.data.subarray(be*Ge/De.data.BYTES_PER_ELEMENT,(be+1)*Ge/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,be,De.width,De.height,1,Le,Qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,De.width,De.height,re.depth,Le,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,ke,De.width,De.height,re.depth,0,De.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,De.width,De.height,re.depth,Le,Ye,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,ke,De.width,De.height,re.depth,0,Le,Ye,De.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{je&&Be&&t.texStorage2D(i.TEXTURE_2D,Ee,ke,et[0].width,et[0].height);for(let fe=0,Ce=et.length;fe<Ce;fe++)De=et[fe],y.format!==Kn?Le!==null?je?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,De.width,De.height,Le,De.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,ke,De.width,De.height,0,De.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?X&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,De.width,De.height,Le,Ye,De.data):t.texImage2D(i.TEXTURE_2D,fe,ke,De.width,De.height,0,Le,Ye,De.data)}else if(y.isDataArrayTexture)if(je){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,ke,re.width,re.height,re.depth),X)if(y.layerUpdates.size>0){let fe=zh(re.width,re.height,y.format,y.type);for(let Ce of y.layerUpdates){let Ge=re.data.subarray(Ce*fe/re.data.BYTES_PER_ELEMENT,(Ce+1)*fe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,re.width,re.height,1,Le,Ye,Ge)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Le,Ye,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,re.width,re.height,re.depth,0,Le,Ye,re.data);else if(y.isData3DTexture)je?(Be&&t.texStorage3D(i.TEXTURE_3D,Ee,ke,re.width,re.height,re.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Le,Ye,re.data)):t.texImage3D(i.TEXTURE_3D,0,ke,re.width,re.height,re.depth,0,Le,Ye,re.data);else if(y.isFramebufferTexture){if(Be)if(je)t.texStorage2D(i.TEXTURE_2D,Ee,ke,re.width,re.height);else{let fe=re.width,Ce=re.height;for(let Ge=0;Ge<Ee;Ge++)t.texImage2D(i.TEXTURE_2D,Ge,ke,fe,Ce,0,Le,Ye,null),fe>>=1,Ce>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),re.parentNode!==fe){fe.appendChild(re),x.add(y),fe.onpaint=Ce=>{let Ge=Ce.changedElements;for(let be of x)Ge.includes(be.image)&&(be.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let Ge=i.RGBA,be=i.RGBA,Qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ge,be,Qe,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(et.length>0){if(je&&Be){let fe=mt(et[0]);t.texStorage2D(i.TEXTURE_2D,Ee,ke,fe.width,fe.height)}for(let fe=0,Ce=et.length;fe<Ce;fe++)De=et[fe],je?X&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Le,Ye,De):t.texImage2D(i.TEXTURE_2D,fe,ke,Le,Ye,De);y.generateMipmaps=!1}else if(je){if(Be){let fe=mt(re);t.texStorage2D(i.TEXTURE_2D,Ee,ke,fe.width,fe.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Ye,re)}else t.texImage2D(i.TEXTURE_2D,0,ke,Le,Ye,re);p(y)&&L(Q),Se.__version=Pe.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function at(I,y,K){if(y.image.length!==6)return;let Q=At(I,y),_e=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+K);let Pe=n.get(_e);if(_e.version!==Pe.__version||Q===!0){t.activeTexture(i.TEXTURE0+K);let Se=Tt.getPrimaries(Tt.workingColorSpace),z=y.colorSpace===Ni?null:Tt.getPrimaries(y.colorSpace),re=y.colorSpace===Ni||Se===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Le=y.isCompressedTexture||y.image[0].isCompressedTexture,Ye=y.image[0]&&y.image[0].isDataTexture,ke=[];for(let be=0;be<6;be++)!Le&&!Ye?ke[be]=v(y.image[be],!0,s.maxCubemapSize):ke[be]=Ye?y.image[be].image:y.image[be],ke[be]=cn(y,ke[be]);let De=ke[0],et=r.convert(y.format,y.colorSpace),je=r.convert(y.type),Be=R(y.internalFormat,et,je,y.normalized,y.colorSpace),X=y.isVideoTexture!==!0,Ee=Pe.__version===void 0||Q===!0,fe=_e.dataReady,Ce=P(y,De);Mt(i.TEXTURE_CUBE_MAP,y);let Ge;if(Le){X&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Be,De.width,De.height);for(let be=0;be<6;be++){Ge=ke[be].mipmaps;for(let Qe=0;Qe<Ge.length;Qe++){let Ke=Ge[Qe];y.format!==Kn?et!==null?X?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe,0,0,Ke.width,Ke.height,et,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe,Be,Ke.width,Ke.height,0,Ke.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe,0,0,Ke.width,Ke.height,et,je,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe,Be,Ke.width,Ke.height,0,et,je,Ke.data)}}}else{if(Ge=y.mipmaps,X&&Ee){Ge.length>0&&Ce++;let be=mt(ke[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Be,be.width,be.height)}for(let be=0;be<6;be++)if(Ye){X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ke[be].width,ke[be].height,et,je,ke[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Be,ke[be].width,ke[be].height,0,et,je,ke[be].data);for(let Qe=0;Qe<Ge.length;Qe++){let Ot=Ge[Qe].image[be].image;X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe+1,0,0,Ot.width,Ot.height,et,je,Ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe+1,Be,Ot.width,Ot.height,0,et,je,Ot.data)}}else{X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,et,je,ke[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Be,et,je,ke[be]);for(let Qe=0;Qe<Ge.length;Qe++){let Ke=Ge[Qe];X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe+1,0,0,et,je,Ke.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe+1,Be,et,je,Ke.image[be])}}}p(y)&&L(i.TEXTURE_CUBE_MAP),Pe.__version=_e.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Ue(I,y,K,Q,_e,Pe){let Se=r.convert(K.format,K.colorSpace),z=r.convert(K.type),re=R(K.internalFormat,Se,z,K.normalized,K.colorSpace),Le=n.get(y),Ye=n.get(K);if(Ye.__renderTarget=y,!Le.__hasExternalTextures){let ke=Math.max(1,y.width>>Pe),De=Math.max(1,y.height>>Pe);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,Pe,re,ke,De,y.depth,0,Se,z,null):t.texImage2D(_e,Pe,re,ke,De,0,Se,z,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),qt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,_e,Ye.__webglTexture,0,Ht(y)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,_e,Ye.__webglTexture,Pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(I,y,K){if(i.bindRenderbuffer(i.RENDERBUFFER,I),y.depthBuffer){let Q=y.depthTexture,_e=Q&&Q.isDepthTexture?Q.type:null,Pe=C(y.stencilBuffer,_e),Se=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qt(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht(y),Pe,y.width,y.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht(y),Pe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,I)}else{let Q=y.textures;for(let _e=0;_e<Q.length;_e++){let Pe=Q[_e],Se=r.convert(Pe.format,Pe.colorSpace),z=r.convert(Pe.type),re=R(Pe.internalFormat,Se,z,Pe.normalized,Pe.colorSpace);qt(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht(y),re,y.width,y.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht(y),re,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,re,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Gt(I,y,K){let Q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let _e=n.get(y.depthTexture);if(_e.__renderTarget=y,(!_e.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,y.depthTexture.addEventListener("dispose",B)),_e.__webglTexture===void 0){_e.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,y.depthTexture);let Le=r.convert(y.depthTexture.format),Ye=r.convert(y.depthTexture.type),ke;y.depthTexture.format===mi?ke=i.DEPTH_COMPONENT24:y.depthTexture.format===os&&(ke=i.DEPTH24_STENCIL8);for(let De=0;De<6;De++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,ke,y.width,y.height,0,Le,Ye,null)}}else me(y.depthTexture,0);let Pe=_e.__webglTexture,Se=Ht(y),z=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,re=y.depthTexture.format===os?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===mi)qt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,z,Pe,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,re,z,Pe,0);else if(y.depthTexture.format===os)qt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,z,Pe,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,re,z,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(I){let y=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let Q=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){let _e=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",_e)};Q.addEventListener("dispose",_e),y.__depthDisposeCallback=_e}y.__boundDepthTexture=Q}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(K)for(let Q=0;Q<6;Q++)Gt(y.__webglFramebuffer[Q],I,Q);else{let Q=I.texture.mipmaps;Q&&Q.length>0?Gt(y.__webglFramebuffer[0],I,0):Gt(y.__webglFramebuffer,I,0)}else if(K){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),pt(y.__webglDepthbuffer[Q],I,!1);else{let _e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,Pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,Pe)}}else{let Q=I.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),pt(y.__webglDepthbuffer,I,!1);else{let _e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,Pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(I,y,K){let Q=n.get(I);y!==void 0&&Ue(Q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ut(I)}function Et(I){let y=I.texture,K=n.get(I),Q=n.get(y);I.addEventListener("dispose",b);let _e=I.textures,Pe=I.isWebGLCubeRenderTarget===!0,Se=_e.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++),Pe){K.__webglFramebuffer=[];for(let z=0;z<6;z++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[z]=[];for(let re=0;re<y.mipmaps.length;re++)K.__webglFramebuffer[z][re]=i.createFramebuffer()}else K.__webglFramebuffer[z]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let z=0;z<y.mipmaps.length;z++)K.__webglFramebuffer[z]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Se)for(let z=0,re=_e.length;z<re;z++){let Le=n.get(_e[z]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&qt(I)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let z=0;z<_e.length;z++){let re=_e[z];K.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[z]);let Le=r.convert(re.format,re.colorSpace),Ye=r.convert(re.type),ke=R(re.internalFormat,Le,Ye,re.normalized,re.colorSpace,I.isXRRenderTarget===!0),De=Ht(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,ke,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,K.__webglColorRenderbuffer[z])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,y);for(let z=0;z<6;z++)if(y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)Ue(K.__webglFramebuffer[z][re],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,re);else Ue(K.__webglFramebuffer[z],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);p(y)&&L(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let z=0,re=_e.length;z<re;z++){let Le=_e[z],Ye=n.get(Le),ke=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ke=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ke,Ye.__webglTexture),Mt(ke,Le),Ue(K.__webglFramebuffer,I,Le,i.COLOR_ATTACHMENT0+z,ke,0),p(Le)&&L(ke)}t.unbindTexture()}else{let z=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(z=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(z,Q.__webglTexture),Mt(z,y),y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)Ue(K.__webglFramebuffer[re],I,y,i.COLOR_ATTACHMENT0,z,re);else Ue(K.__webglFramebuffer,I,y,i.COLOR_ATTACHMENT0,z,0);p(y)&&L(z),t.unbindTexture()}I.depthBuffer&&ut(I)}function ft(I){let y=I.textures;for(let K=0,Q=y.length;K<Q;K++){let _e=y[K];if(p(_e)){let Pe=k(I),Se=n.get(_e).__webglTexture;t.bindTexture(Pe,Se),L(Pe),t.unbindTexture()}}}let Ft=[],jt=[];function dn(I){if(I.samples>0){if(qt(I)===!1){let y=I.textures,K=I.width,Q=I.height,_e=i.COLOR_BUFFER_BIT,Pe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(I),z=y.length>1;if(z)for(let Le=0;Le<y.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let re=I.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Le=0;Le<y.length;Le++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Le]);let Ye=n.get(y[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,K,Q,0,0,K,Q,_e,i.NEAREST),u===!0&&(Ft.length=0,jt.length=0,Ft.push(i.COLOR_ATTACHMENT0+Le),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Ft.push(Pe),jt.push(Pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),z)for(let Le=0;Le<y.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Le]);let Ye=n.get(y[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&u){let y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ht(I){return Math.min(s.maxSamples,I.samples)}function qt(I){let y=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function J(I){let y=o.render.frame;g.get(I)!==y&&(g.set(I,y),I.update())}function cn(I,y){let K=I.colorSpace,Q=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==aa&&K!==Ni&&(Tt.getTransfer(K)===Ut?(Q!==Kn||_e!==Dn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",K)),y}function mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=ce,this.resetTextureUnits=$,this.getTextureUnits=W,this.setTextureUnits=j,this.setTexture2D=me,this.setTexture2DArray=se,this.setTexture3D=de,this.setTextureCube=te,this.rebindTextures=yt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Jx(i,e){function t(n,s=Ni){let r,o=Tt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ch)return i.BYTE;if(n===Rh)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===ci)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===Dh)return i.RGB;if(n===Kn)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Cr)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===La||n===Da||n===Na||n===Ua)if(o===Ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===Tl||n===Al||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Fa||n===Dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cl||n===Rl)return o===Ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Il)return r.COMPRESSED_R11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fa)return r.COMPRESSED_RG11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===Zl||n===Kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jl)return o===Ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===jl||n===Oa||n===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new va(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:Zx,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new ya(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends gi{constructor(e,t){super();let n=this,s=null,r=1,o=null,c="local-floor",u=1,h=null,g=null,x=null,f=null,M=null,T=null,N=typeof XRWebGLBinding<"u",v=new eu,p={},L=t.getContextAttributes(),k=null,R=null,C=[],P=[],B=new Rt,b=null,D=null,G=new bn;G.viewport=new Yt;let q=new bn;q.viewport=new Yt;let H=[G,q],$=new fl,W=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ge){let ye=C[ge];return ye===void 0&&(ye=new yr,C[ge]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ge){let ye=C[ge];return ye===void 0&&(ye=new yr,C[ge]=ye),ye.getGripSpace()},this.getHand=function(ge){let ye=C[ge];return ye===void 0&&(ye=new yr,C[ge]=ye),ye.getHandSpace()};function ce(ge){let ye=P.indexOf(ge.inputSource);if(ye===-1)return;let Xe=C[ye];Xe!==void 0&&(Xe.update(ge.inputSource,ge.frame,h||o),Xe.dispatchEvent({type:ge.type,data:ge.inputSource}))}function he(){s.removeEventListener("select",ce),s.removeEventListener("selectstart",ce),s.removeEventListener("selectend",ce),s.removeEventListener("squeeze",ce),s.removeEventListener("squeezestart",ce),s.removeEventListener("squeezeend",ce),s.removeEventListener("end",he),s.removeEventListener("inputsourceschange",me);for(let ge=0;ge<C.length;ge++){let ye=P[ge];ye!==null&&(P[ge]=null,C[ge].disconnect(ye))}W=null,j=null,v.reset();for(let ge in p)delete p[ge];if(e.setRenderTarget(k),M=null,f=null,x=null,s=null,R=null,At.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(B.width,B.height,!1),D!==null){let ge=D.camera;ge.fov=D.fov,ge.zoom=D.zoom,ge.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ge){r=ge,n.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ge){c=ge,n.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(ge){h=ge},this.getBaseLayer=function(){return f!==null?f:M},this.getBinding=function(){return x===null&&N&&(x=new XRWebGLBinding(s,t)),x},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(ge){if(s=ge,s!==null){if(k=e.getRenderTarget(),s.addEventListener("select",ce),s.addEventListener("selectstart",ce),s.addEventListener("selectend",ce),s.addEventListener("squeeze",ce),s.addEventListener("squeezestart",ce),s.addEventListener("squeezeend",ce),s.addEventListener("end",he),s.addEventListener("inputsourceschange",me),L.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(B),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Xe=null,at=null,Ue=null;L.depth&&(Ue=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Xe=L.stencil?os:mi,at=L.stencil?Er:li);let pt={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};x=this.getBinding(),f=x.createProjectionLayer(pt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new Ln(f.textureWidth,f.textureHeight,{format:Kn,type:Dn,depthTexture:new es(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Xe),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Xe={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:r};M=new XRWebGLLayer(s,t,Xe),s.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Ln(M.framebufferWidth,M.framebufferHeight,{format:Kn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await s.requestReferenceSpace(c),At.setContext(s),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function me(ge){for(let ye=0;ye<ge.removed.length;ye++){let Xe=ge.removed[ye],at=P.indexOf(Xe);at>=0&&(P[at]=null,C[at].disconnect(Xe))}for(let ye=0;ye<ge.added.length;ye++){let Xe=ge.added[ye],at=P.indexOf(Xe);if(at===-1){for(let pt=0;pt<C.length;pt++)if(pt>=P.length){P.push(Xe),at=pt;break}else if(P[pt]===null){P[pt]=Xe,at=pt;break}if(at===-1)break}let Ue=C[at];Ue&&Ue.connect(Xe)}}let se=new ae,de=new ae;function te(ge,ye,Xe){se.setFromMatrixPosition(ye.matrixWorld),de.setFromMatrixPosition(Xe.matrixWorld);let at=se.distanceTo(de),Ue=ye.projectionMatrix.elements,pt=Xe.projectionMatrix.elements,Gt=Ue[14]/(Ue[10]-1),ut=Ue[14]/(Ue[10]+1),yt=(Ue[9]+1)/Ue[5],Et=(Ue[9]-1)/Ue[5],ft=(Ue[8]-1)/Ue[0],Ft=(pt[8]+1)/pt[0],jt=Gt*ft,dn=Gt*Ft,Ht=at/(-ft+Ft),qt=Ht*-ft;if(ye.matrixWorld.decompose(ge.position,ge.quaternion,ge.scale),ge.translateX(qt),ge.translateZ(Ht),ge.matrixWorld.compose(ge.position,ge.quaternion,ge.scale),ge.matrixWorldInverse.copy(ge.matrixWorld).invert(),Ue[10]===-1)ge.projectionMatrix.copy(ye.projectionMatrix),ge.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{let J=Gt+Ht,cn=ut+Ht,mt=jt-qt,I=dn+(at-qt),y=yt*ut/cn*J,K=Et*ut/cn*J;ge.projectionMatrix.makePerspective(mt,I,y,K,J,cn),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert()}}function Fe(ge,ye){ye===null?ge.matrixWorld.copy(ge.matrix):ge.matrixWorld.multiplyMatrices(ye.matrixWorld,ge.matrix),ge.matrixWorldInverse.copy(ge.matrixWorld).invert()}this.updateCamera=function(ge){if(s===null)return;let ye=ge.near,Xe=ge.far;v.texture!==null&&(v.depthNear>0&&(ye=v.depthNear),v.depthFar>0&&(Xe=v.depthFar)),$.near=q.near=G.near=ye,$.far=q.far=G.far=Xe,(W!==$.near||j!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),W=$.near,j=$.far),$.layers.mask=ge.layers.mask|6,G.layers.mask=$.layers.mask&-5,q.layers.mask=$.layers.mask&-3;let at=ge.parent,Ue=$.cameras;Fe($,at);for(let pt=0;pt<Ue.length;pt++)Fe(Ue[pt],at);Ue.length===2?te($,G,q):$.projectionMatrix.copy(G.projectionMatrix),D===null&&ge.isPerspectiveCamera&&(D={camera:ge,fov:ge.fov,zoom:ge.zoom}),qe(ge,$,at)};function qe(ge,ye,Xe){Xe===null?ge.matrix.copy(ye.matrixWorld):(ge.matrix.copy(Xe.matrixWorld),ge.matrix.invert(),ge.matrix.multiply(ye.matrixWorld)),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.updateMatrixWorld(!0),ge.projectionMatrix.copy(ye.projectionMatrix),ge.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ge.isPerspectiveCamera&&(ge.fov=qo*2*Math.atan(1/ge.projectionMatrix.elements[5]),ge.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&M===null))return u},this.setFoveation=function(ge){u=ge,f!==null&&(f.fixedFoveation=ge),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ge)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh($)},this.getCameraTexture=function(ge){return p[ge]};let Dt=null;function Mt(ge,ye){if(g=ye.getViewerPose(h||o),T=ye,g!==null){let Xe=g.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let at=!1;Xe.length!==$.cameras.length&&($.cameras.length=0,at=!0);for(let ut=0;ut<Xe.length;ut++){let yt=Xe[ut],Et=null;if(M!==null)Et=M.getViewport(yt);else{let Ft=x.getViewSubImage(f,yt);Et=Ft.viewport,ut===0&&(e.setRenderTargetTextures(R,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(R))}let ft=H[ut];ft===void 0&&(ft=new bn,ft.layers.enable(ut),ft.viewport=new Yt,H[ut]=ft),ft.matrix.fromArray(yt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(yt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Et.x,Et.y,Et.width,Et.height),ut===0&&($.matrix.copy(ft.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),at===!0&&$.cameras.push(ft)}let Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&N){x=n.getBinding();let ut=x.getDepthInformation(Xe[0]);ut&&ut.isValid&&ut.texture&&v.init(ut,s.renderState)}if(Ue&&Ue.includes("camera-access")&&N){e.state.unbindTexture(),x=n.getBinding();for(let ut=0;ut<Xe.length;ut++){let yt=Xe[ut].camera;if(yt){let Et=p[yt];Et||(Et=new va,p[yt]=Et);let ft=x.getCameraImage(yt);Et.sourceTexture=ft}}}}for(let Xe=0;Xe<C.length;Xe++){let at=P[Xe],Ue=C[Xe];at!==null&&Ue!==void 0&&Ue.update(at,ye,h||o)}Dt&&Dt(ge,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),T=null}let At=new vf;At.setAnimationLoop(Mt),this.setAnimationLoop=function(ge){Dt=ge},this.dispose=function(){}}},$x=new zt,Tf=new dt;Tf.set(-1,0,0,0,1,0,0,0,1);function jx(i,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,Oh(i)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function s(v,p,L,k,R){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(v,p):p.isMeshLambertMaterial?(r(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(v,p),x(v,p)):p.isMeshPhongMaterial?(r(v,p),g(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(v,p),f(v,p),p.isMeshPhysicalMaterial&&M(v,p,R)):p.isMeshMatcapMaterial?(r(v,p),T(v,p)):p.isMeshDepthMaterial?r(v,p):p.isMeshDistanceMaterial?(r(v,p),N(v,p)):p.isMeshNormalMaterial?r(v,p):p.isLineBasicMaterial?(o(v,p),p.isLineDashedMaterial&&c(v,p)):p.isPointsMaterial?u(v,p,L,k):p.isSpriteMaterial?h(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===gn&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===gn&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);let L=e.get(p),k=L.envMap,R=L.envMapRotation;k&&(v.envMap.value=k,v.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(R)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Tf),v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function o(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function c(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function u(v,p,L,k){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*L,v.scale.value=k*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function g(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function x(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function f(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function M(v,p,L){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.retroreflectivity>0&&(v.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=L.texture,v.transmissionSamplerSize.value.set(L.width,L.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,p){p.matcap&&(v.matcap.value=p.matcap)}function N(v,p){let L=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(L.matrixWorld),v.nearDistance.value=L.shadow.camera.near,v.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qx(i,e,t,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(R,C){let P=C.program;n.uniformBlockBinding(R,P)}function h(R,C){let P=s[R.id];P===void 0&&(v(R),P=g(R),s[R.id]=P,R.addEventListener("dispose",L));let B=C.program;n.updateUBOMapping(R,B);let b=e.render.frame;r[R.id]!==b&&(f(R),r[R.id]=b)}function g(R){let C=x();R.__bindingPointIndex=C;let P=i.createBuffer(),B=R.__size,b=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,B,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,P),P}function x(){for(let R=0;R<c;R++)if(o.indexOf(R)===-1)return o.push(R),R;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let C=s[R.id],P=R.uniforms,B=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let b=0,D=P.length;b<D;b++){let G=P[b];if(Array.isArray(G))for(let q=0,H=G.length;q<H;q++)M(G[q],b,q,B);else M(G,b,0,B)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(R,C,P,B){if(N(R,C,P,B)===!0){let b=R.__offset,D=R.value;if(Array.isArray(D)){let G=0;for(let q=0;q<D.length;q++){let H=D[q],$=p(H);T(H,R.__data,G),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(D,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,R.__data)}}function T(R,C,P){typeof R=="number"||typeof R=="boolean"?C[0]=R:R.isMatrix3?(C[0]=R.elements[0],C[1]=R.elements[1],C[2]=R.elements[2],C[3]=0,C[4]=R.elements[3],C[5]=R.elements[4],C[6]=R.elements[5],C[7]=0,C[8]=R.elements[6],C[9]=R.elements[7],C[10]=R.elements[8],C[11]=0):ArrayBuffer.isView(R)?C.set(new R.constructor(R.buffer,R.byteOffset,C.length)):R.toArray(C,P)}function N(R,C,P,B){let b=R.value,D=C+"_"+P;if(B[D]===void 0)return typeof b=="number"||typeof b=="boolean"?B[D]=b:ArrayBuffer.isView(b)?B[D]=b.slice():B[D]=b.clone(),!0;{let G=B[D];if(typeof b=="number"||typeof b=="boolean"){if(G!==b)return B[D]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(G.equals(b)===!1)return G.copy(b),!0}}return!1}function v(R){let C=R.uniforms,P=0,B=16;for(let D=0,G=C.length;D<G;D++){let q=Array.isArray(C[D])?C[D]:[C[D]];for(let H=0,$=q.length;H<$;H++){let W=q[H],j=Array.isArray(W.value)?W.value:[W.value];for(let ce=0,he=j.length;ce<he;ce++){let me=j[ce],se=p(me),de=P%B,te=de%se.boundary,Fe=de+te;P+=te,Fe!==0&&B-Fe<se.storage&&(P+=B-Fe),W.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=P,P+=se.storage}}}let b=P%B;return b>0&&(P+=B-b),R.__size=P,R.__cache={},this}function p(R){let C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(C.boundary=16,C.storage=R.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",R),C}function L(R){let C=R.target;C.removeEventListener("dispose",L);let P=o.indexOf(C.__bindingPointIndex);o.splice(P,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function k(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:u,update:h,dispose:k}}var ev=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function tv(){return Mi===null&&(Mi=new Ps(ev,16,16,ls,ci),Mi.name="DFG_LUT",Mi.minFilter=mn,Mi.magFilter=mn,Mi.wrapS=pi,Mi.wrapT=pi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var oc=class{constructor(e={}){let{canvas:t=Hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:f=!1,outputBufferType:M=Dn}=e;this.isWebGLRenderer=!0;let T;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=n.getContextAttributes().alpha}else T=o;let N=M,v=new Set([bl,Sl,Ml]),p=new Set([Dn,li,Ar,Er,vl,yl]),L=new Uint32Array(4),k=new Int32Array(4),R=new ae,C=null,P=null,B=[],b=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,q=!1,H=null,$=null,W=null,j=null;this._outputColorSpace=En;let ce=0,he=0,me=null,se=-1,de=null,te=new Yt,Fe=new Yt,qe=null,Dt=new gt(0),Mt=0,At=t.width,ge=t.height,ye=1,Xe=null,at=null,Ue=new Yt(0,0,At,ge),pt=new Yt(0,0,At,ge),Gt=!1,ut=new Mr,yt=!1,Et=!1,ft=new zt,Ft=new ae,jt=new Yt,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function qt(){return me===null?ye:1}let J=n;function cn(w,V){return t.getContext(w,V)}let mt,I,y,K,Q,_e,Pe,Se,z,re,Le,Ye,ke,De,et,je,Be,X,Ee,fe,Ce,Ge,be;try{let w={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ot,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Nn,!1),J===null){let V="webgl2";if(J=cn(V,w),J===null)throw cn(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(w){throw t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),ht("WebGLRenderer: "+w.message),w}function Qe(){mt=new l_(J),mt.init(),Ce=new Jx(J,mt),I=new jg(J,mt,e,Ce),y=new qx(J,mt),I.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),$=J.createFramebuffer(),W=J.createFramebuffer(),j=J.createFramebuffer(),K=new u_(J),Q=new Lx,_e=new Yx(J,mt,y,Q,I,Ce,K),Pe=new o_(G),Se=new fm(J),Ge=new Kg(J,Se),z=new c_(J,Se,K,Ge),re=new f_(J,z,Se,Ge,K),X=new d_(J,I,_e),et=new Qg(Q),Le=new Ix(G,Pe,mt,I,Ge,et),Ye=new jx(G,Q),ke=new Nx,De=new zx(mt),Be=new Zg(G,Pe,y,re,T,u),je=new Xx(G,re,I),be=new Qx(J,K,I,y),Ee=new $g(J,mt,K),fe=new h_(J,mt,K),K.programs=Le.programs,G.capabilities=I,G.extensions=mt,G.properties=Q,G.renderLists=ke,G.shadowMap=je,G.state=y,G.info=K}N!==Dn&&(D=new m_(N,t.width,t.height,c,s,r));let Ke=new tu(G,J);this.xr=Ke,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(w){w!==void 0&&(ye=w,this.setSize(At,ge,!1))},this.getSize=function(w){return w.set(At,ge)},this.setSize=function(w,V,ne=!0){if(Ke.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}At=w,ge=V,t.width=Math.floor(w*ye),t.height=Math.floor(V*ye),ne===!0&&(t.style.width=w+"px",t.style.height=V+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(At*ye,ge*ye).floor()},this.setDrawingBufferSize=function(w,V,ne){At=w,ge=V,ye=ne,t.width=Math.floor(w*ne),t.height=Math.floor(V*ne),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(N===Dn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(te)},this.getViewport=function(w){return w.copy(Ue)},this.setViewport=function(w,V,ne,Z){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,V,ne,Z),y.viewport(te.copy(Ue).multiplyScalar(ye).round())},this.getScissor=function(w){return w.copy(pt)},this.setScissor=function(w,V,ne,Z){w.isVector4?pt.set(w.x,w.y,w.z,w.w):pt.set(w,V,ne,Z),y.scissor(Fe.copy(pt).multiplyScalar(ye).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(w){y.setScissorTest(Gt=w)},this.setOpaqueSort=function(w){Xe=w},this.setTransparentSort=function(w){at=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,ne=!0){let Z=0;if(w){let ee=!1;if(me!==null){let Ae=me.texture.format;ee=v.has(Ae)}if(ee){let Ae=me.texture.type,ze=p.has(Ae),Oe=Be.getClearColor(),Je=Be.getClearAlpha(),$e=Oe.r,it=Oe.g,st=Oe.b;ze?(L[0]=$e,L[1]=it,L[2]=st,L[3]=Je,J.clearBufferuiv(J.COLOR,0,L)):(k[0]=$e,k[1]=it,k[2]=st,k[3]=Je,J.clearBufferiv(J.COLOR,0,k))}else Z|=J.COLOR_BUFFER_BIT}V&&(Z|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Z|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&J.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),H=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),Be.dispose(),ke.dispose(),De.dispose(),Q.dispose(),Pe.dispose(),re.dispose(),Ge.dispose(),be.dispose(),Le.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Fs),Ke.removeEventListener("sessionend",Ha),zn.stop()};function Ot(w){w.preventDefault(),Fh("WebGLRenderer: Context Lost."),q=!0}function lt(){Fh("WebGLRenderer: Context Restored."),q=!1;let w=K.autoReset,V=je.enabled,ne=je.autoUpdate,Z=je.needsUpdate,ee=je.type;Qe(),K.autoReset=w,je.enabled=V,je.autoUpdate=ne,je.needsUpdate=Z,je.type=ee}function Nn(w){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fn(w){let V=w.target;V.removeEventListener("dispose",fn),Us(V)}function Us(w){cs(w),Q.remove(w)}function cs(w){let V=Q.get(w).programs;V!==void 0&&(V.forEach(function(ne){Le.releaseProgram(ne)}),w.isShaderMaterial&&Le.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,ne,Z,ee,Ae){V===null&&(V=dn);let ze=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Oe=zs(w,V,ne,Z,ee);y.setMaterial(Z,ze);let Je=ne.index,$e=1;if(Z.wireframe===!0){if(Je=z.getWireframeAttribute(ne),Je===void 0)return;$e=2}let it=ne.drawRange,st=ne.attributes.position,He=it.start*$e,It=(it.start+it.count)*$e;Ae!==null&&(He=Math.max(He,Ae.start*$e),It=Math.min(It,(Ae.start+Ae.count)*$e)),Je!==null?(He=Math.max(He,0),It=Math.min(It,Je.count)):st!=null&&(He=Math.max(He,0),It=Math.min(It,st.count));let Jt=It-He;if(Jt<0||Jt===1/0)return;Ge.setup(ee,Z,Oe,ne,Je);let Vt,Pt=Ee;if(Je!==null&&(Vt=Se.get(Je),Pt=fe,Pt.setIndex(Vt)),ee.isMesh)Z.wireframe===!0?(y.setLineWidth(Z.wireframeLinewidth*qt()),Pt.setMode(J.LINES)):Pt.setMode(J.TRIANGLES);else if(ee.isLine){let Zt=Z.linewidth;Zt===void 0&&(Zt=1),y.setLineWidth(Zt*qt()),ee.isLineSegments?Pt.setMode(J.LINES):ee.isLineLoop?Pt.setMode(J.LINE_LOOP):Pt.setMode(J.LINE_STRIP)}else ee.isPoints?Pt.setMode(J.POINTS):ee.isSprite&&Pt.setMode(J.TRIANGLES);if(ee.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Zt=ee._multiDrawStarts,We=ee._multiDrawCounts,Wt=ee._multiDrawCount,St=Je?Se.get(Je).bytesPerElement:1,_n=Q.get(Z).currentProgram.getUniforms();for(let Gn=0;Gn<Wt;Gn++)_n.setValue(J,"_gl_DrawID",Gn),Pt.render(Zt[Gn]/St,We[Gn])}else if(ee.isInstancedMesh)Pt.renderInstances(He,Jt,ee.count);else if(ne.isInstancedBufferGeometry){let Zt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,We=Math.min(ne.instanceCount,Zt);Pt.renderInstances(He,Jt,We)}else Pt.render(He,Jt)};function Ga(w,V,ne,Z){H!==null&&w.isNodeMaterial&&H.setObject(Z,w),yt===!0&&et.setState(w,ne,!1),w.transparent===!0&&w.side===vi&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,hs(w,V,Z),w.side=ss,w.needsUpdate=!0,hs(w,V,Z),w.side=vi):hs(w,V,Z)}this.compile=function(w,V,ne=null){ne===null&&(ne=w),H!==null&&H.renderStart(w,V,ne),P=De.get(ne),P.init(V),b.push(P),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),w!==ne&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),P.setupLights(),H!==null&&H.updateLights(P.state.lightsArray),Et=this.localClippingEnabled,yt=et.init(this.clippingPlanes,Et),yt===!0&&et.setGlobalState(this.clippingPlanes,V),H!==null&&je.render(P.state.shadowsArray,ne,V);let Z=new Set;return w.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Ae=ee.material;if(Ae)if(Array.isArray(Ae))for(let ze=0;ze<Ae.length;ze++){let Oe=Ae[ze];Ga(Oe,ne,V,ee),Z.add(Oe)}else Ga(Ae,ne,V,ee),Z.add(Ae)}),P=b.pop(),H!==null&&H.renderEnd(),Z},this.compileAsync=function(w,V,ne=null){let Z=this.compile(w,V,ne);return new Promise(ee=>{function Ae(){if(Z.forEach(function(ze){let Je=Q.get(ze).currentProgram;(Je===void 0||Je.isReady())&&Z.delete(ze)}),Z.size===0){ee(w);return}setTimeout(Ae,10)}mt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Ui=null;function hc(w){Ui&&Ui(w)}function Fs(){zn.stop()}function Ha(){zn.start()}let zn=new vf;zn.setAnimationLoop(hc),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(w){Ui=w,Ke.setAnimationLoop(w),w===null?zn.stop():zn.start()},Ke.addEventListener("sessionstart",Fs),Ke.addEventListener("sessionend",Ha),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;H!==null&&H.renderStart(w,V);let ne=Ke.enabled===!0&&Ke.isPresenting===!0,Z=D!==null&&(me===null||ne)&&D.begin(G,me);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(V),V=Ke.getCamera()),w.isScene===!0&&w.onBeforeRender(G,w,V,me),P=De.get(w,b.length),P.init(V),P.state.textureUnits=_e.getTextureUnits(),b.push(P),ft.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ut.setFromProjectionMatrix(ft,ai,V.reversedDepth),Et=this.localClippingEnabled,yt=et.init(this.clippingPlanes,Et),C=ke.get(w,B.length),C.init(),B.push(C),Ke.enabled===!0&&Ke.isPresenting===!0){let ze=G.xr.getDepthSensingMesh();ze!==null&&Dr(ze,V,-1/0,G.sortObjects)}Dr(w,V,0,G.sortObjects),C.finish(),H!==null&&H.updateLights(P.state.lightsArray),G.sortObjects===!0&&C.sort(Xe,at),Ht=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,Ht&&Be.addToRenderList(C,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&et.beginShadows();let ee=P.state.shadowsArray;if(je.render(ee,w,V),yt===!0&&et.endShadows(),(Z&&D.hasRenderPass())===!1){let ze=C.opaque,Oe=C.transmissive;if(P.setupLights(),V.isArrayCamera){let Je=V.cameras;if(Oe.length>0)for(let $e=0,it=Je.length;$e<it;$e++){let st=Je[$e];Bs(ze,Oe,w,st)}Ht&&Be.render(w);for(let $e=0,it=Je.length;$e<it;$e++){let st=Je[$e];Os(C,w,st,st.viewport)}}else Oe.length>0&&Bs(ze,Oe,w,V),Ht&&Be.render(w),Os(C,w,V)}me!==null&&he===0&&(_e.updateMultisampleRenderTarget(me),_e.updateRenderTargetMipmap(me)),Z&&D.end(G),w.isScene===!0&&w.onAfterRender(G,w,V),Ge.resetDefaultState(),se=-1,de=null,b.pop(),b.length>0?(P=b[b.length-1],_e.setTextureUnits(P.state.textureUnits),yt===!0&&et.setGlobalState(G.clippingPlanes,P.state.camera)):P=null,B.pop(),B.length>0?C=B[B.length-1]:C=null,H!==null&&H.renderEnd()};function Dr(w,V,ne,Z){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)P.pushLightProbeGrid(w);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ut)){Z&&jt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ft);let ze=re.update(w),Oe=w.material;Oe.visible&&C.push(w,ze,Oe,ne,jt.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ut))){let ze=re.update(w),Oe=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),jt.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),jt.copy(ze.boundingSphere.center)),jt.applyMatrix4(w.matrixWorld).applyMatrix4(ft)),Array.isArray(Oe)){let Je=ze.groups;for(let $e=0,it=Je.length;$e<it;$e++){let st=Je[$e],He=Oe[st.materialIndex];He&&He.visible&&C.push(w,ze,He,ne,jt.z,st,V)}}else Oe.visible&&C.push(w,ze,Oe,ne,jt.z,null,V)}}let Ae=w.children;for(let ze=0,Oe=Ae.length;ze<Oe;ze++)Dr(Ae[ze],V,ne,Z)}function Os(w,V,ne,Z){let{opaque:ee,transmissive:Ae,transparent:ze}=w;P.setupLightsView(ne),yt===!0&&et.setGlobalState(G.clippingPlanes,ne),Z&&y.viewport(te.copy(Z)),ee.length>0&&Vn(ee,V,ne),Ae.length>0&&Vn(Ae,V,ne),ze.length>0&&Vn(ze,V,ne),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Bs(w,V,ne,Z){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[Z.id]===void 0){let He=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[Z.id]=new Ln(1,1,{generateMipmaps:!0,type:He?ci:Dn,minFilter:as,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}let Ae=P.state.transmissionRenderTarget[Z.id],ze=Z.viewport||te;Ae.setSize(ze.z*G.transmissionResolutionScale,ze.w*G.transmissionResolutionScale);let Oe=G.getRenderTarget(),Je=G.getActiveCubeFace(),$e=G.getActiveMipmapLevel();G.setRenderTarget(Ae),G.getClearColor(Dt),Mt=G.getClearAlpha(),Mt<1&&G.setClearColor(16777215,.5),G.clear(),Ht&&Be.render(ne);let it=G.toneMapping;G.toneMapping=oi;let st=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),P.setupLightsView(Z),yt===!0&&et.setGlobalState(G.clippingPlanes,Z),Vn(w,ne,Z),_e.updateMultisampleRenderTarget(Ae),_e.updateRenderTargetMipmap(Ae),mt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let It=0,Jt=V.length;It<Jt;It++){let Vt=V[It],{object:Pt,geometry:Zt,material:We,group:Wt}=Vt;if(We.side===vi&&Pt.layers.test(Z.layers)){let St=We.side;We.side=gn,We.needsUpdate=!0,ks(Pt,ne,Z,Zt,We,Wt),We.side=St,We.needsUpdate=!0,He=!0}}He===!0&&(_e.updateMultisampleRenderTarget(Ae),_e.updateRenderTargetMipmap(Ae))}G.setRenderTarget(Oe,Je,$e),G.setClearColor(Dt,Mt),st!==void 0&&(Z.viewport=st),G.toneMapping=it}function Vn(w,V,ne){let Z=V.isScene===!0?V.overrideMaterial:null;for(let ee=0,Ae=w.length;ee<Ae;ee++){let ze=w[ee],{object:Oe,geometry:Je,group:$e}=ze,it=ze.material;it.allowOverride===!0&&Z!==null&&(it=Z),Oe.layers.test(ne.layers)&&ks(Oe,V,ne,Je,it,$e)}}function ks(w,V,ne,Z,ee,Ae){H!==null&&ee.isNodeMaterial&&H.setObject(w,ee),w.onBeforeRender(G,V,ne,Z,ee,Ae),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(G,V,ne,Z,w,Ae),ee.transparent===!0&&ee.side===vi&&ee.forceSinglePass===!1?(ee.side=gn,ee.needsUpdate=!0,G.renderBufferDirect(ne,V,Z,ee,w,Ae),ee.side=ss,ee.needsUpdate=!0,G.renderBufferDirect(ne,V,Z,ee,w,Ae),ee.side=vi):G.renderBufferDirect(ne,V,Z,ee,w,Ae),w.onAfterRender(G,V,ne,Z,ee,Ae)}function hs(w,V,ne){V.isScene!==!0&&(V=dn);let Z=Q.get(w),ee=P.state.lights,Ae=P.state.shadowsArray,ze=ee.state.version,Oe=Le.getParameters(w,ee.state,Ae,V,ne,P.state.lightProbeGridArray),Je=Le.getProgramCacheKey(Oe),$e=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;let it=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=Pe.get(w.envMap||Z.environment,it),Z.envMapRotation=Z.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",fn),$e=new Map,Z.programs=$e);let st=$e.get(Je);if(st!==void 0){if(Z.currentProgram===st&&Z.lightsStateVersion===ze)return Wa(w,Oe),st}else Oe.uniforms=Le.getUniforms(w),H!==null&&w.isNodeMaterial&&H.build(w,ne,Oe),w.onBeforeCompile(Oe,G),st=Le.acquireProgram(Oe,Je),$e.set(Je,st),Z.uniforms=Oe.uniforms;let He=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=et.uniform),Wa(w,Oe),Z.needsLights=tt(w),Z.lightsStateVersion=ze,Z.needsLights&&(He.ambientLightColor.value=ee.state.ambient,He.lightProbe.value=ee.state.probe,He.sunLights.value=ee.state.sun,He.sunLightShadows.value=ee.state.sunShadow,He.directionalLights.value=ee.state.directional,He.directionalLightShadows.value=ee.state.directionalShadow,He.spotLights.value=ee.state.spot,He.spotLightShadows.value=ee.state.spotShadow,He.rectAreaLights.value=ee.state.rectArea,He.ltc_1.value=ee.state.rectAreaLTC1,He.ltc_2.value=ee.state.rectAreaLTC2,He.pointLights.value=ee.state.point,He.pointLightShadows.value=ee.state.pointShadow,He.hemisphereLights.value=ee.state.hemi,He.sunShadowMatrix.value=ee.state.sunShadowMatrix,He.sunShadowCascade.value=ee.state.sunShadowCascade,He.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,He.spotLightMatrix.value=ee.state.spotLightMatrix,He.spotLightMap.value=ee.state.spotLightMap,He.pointShadowMatrix.value=ee.state.pointShadowMatrix),Z.lightProbeGrid=P.state.lightProbeGridArray.length>0,Z.currentProgram=st,Z.uniformsList=null,st}function Nr(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=Ir.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Wa(w,V){let ne=Q.get(w);ne.outputColorSpace=V.outputColorSpace,ne.batching=V.batching,ne.batchingColor=V.batchingColor,ne.instancing=V.instancing,ne.instancingColor=V.instancingColor,ne.instancingMorph=V.instancingMorph,ne.skinning=V.skinning,ne.morphTargets=V.morphTargets,ne.morphNormals=V.morphNormals,ne.morphColors=V.morphColors,ne.morphTargetsCount=V.morphTargetsCount,ne.numClippingPlanes=V.numClippingPlanes,ne.numIntersection=V.numClipIntersection,ne.vertexAlphas=V.vertexAlphas,ne.vertexTangents=V.vertexTangents,ne.toneMapping=V.toneMapping}function uc(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;R.setFromMatrixPosition(V.matrixWorld);for(let ne=0,Z=w.length;ne<Z;ne++){let ee=w[ne];if(ee.texture!==null&&ee.boundingBox.containsPoint(R))return ee}return null}function zs(w,V,ne,Z,ee){V.isScene!==!0&&(V=dn),_e.resetTextureUnits();let Ae=V.fog,ze=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,Oe=me===null?G.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Tt.workingColorSpace,Je=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,$e=Pe.get(Z.envMap||ze,Je),it=Z.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,st=!!ne.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!ne.morphAttributes.position,It=!!ne.morphAttributes.normal,Jt=!!ne.morphAttributes.color,Vt=oi;Z.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Vt=G.toneMapping);let Pt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Zt=Pt!==void 0?Pt.length:0,We=Q.get(Z),Wt=P.state.lights;if(yt===!0&&(Et===!0||w!==de)){let Lt=w===de&&Z.id===se;et.setState(Z,w,Lt)}let St=!1;Z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Wt.state.version||We.outputColorSpace!==Oe||ee.isBatchedMesh&&We.batching===!1||!ee.isBatchedMesh&&We.batching===!0||ee.isBatchedMesh&&We.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&We.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&We.instancing===!1||!ee.isInstancedMesh&&We.instancing===!0||ee.isSkinnedMesh&&We.skinning===!1||!ee.isSkinnedMesh&&We.skinning===!0||ee.isInstancedMesh&&We.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&We.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&We.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&We.instancingMorph===!1&&ee.morphTexture!==null||We.envMap!==$e||Z.fog===!0&&We.fog!==Ae||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==et.numPlanes||We.numIntersection!==et.numIntersection)||We.vertexAlphas!==it||We.vertexTangents!==st||We.morphTargets!==He||We.morphNormals!==It||We.morphColors!==Jt||We.toneMapping!==Vt||We.morphTargetsCount!==Zt||!!We.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,We.__version=Z.version);let _n=We.currentProgram;St===!0&&(_n=hs(Z,V,ee),H&&Z.isNodeMaterial&&H.onUpdateProgram(Z,_n,We));let Gn=!1,$n=!1,bi=!1,Nt=_n.getUniforms(),Bt=We.uniforms;if(y.useProgram(_n.program)&&(Gn=!0,$n=!0,bi=!0),Z.id!==se&&(se=Z.id,$n=!0),We.needsLights){let Lt=uc(P.state.lightProbeGridArray,ee);We.lightProbeGrid!==Lt&&(We.lightProbeGrid=Lt,$n=!0)}if(Gn||de!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Nt.setValue(J,"projectionMatrix",w.projectionMatrix),Nt.setValue(J,"viewMatrix",w.matrixWorldInverse);let hi=Nt.map.cameraPosition;hi!==void 0&&hi.setValue(J,Ft.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&Nt.setValue(J,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Nt.setValue(J,"isOrthographic",w.isOrthographicCamera===!0),de!==w&&(de=w,$n=!0,bi=!0)}if(We.needsLights&&(Wt.state.sunShadowMap.length>0&&Nt.setValue(J,"sunShadowMap",Wt.state.sunShadowMap,_e),Wt.state.directionalShadowMap.length>0&&Nt.setValue(J,"directionalShadowMap",Wt.state.directionalShadowMap,_e),Wt.state.spotShadowMap.length>0&&Nt.setValue(J,"spotShadowMap",Wt.state.spotShadowMap,_e),Wt.state.pointShadowMap.length>0&&Nt.setValue(J,"pointShadowMap",Wt.state.pointShadowMap,_e)),ee.isSkinnedMesh){Nt.setOptional(J,ee,"bindMatrix"),Nt.setOptional(J,ee,"bindMatrixInverse");let Lt=ee.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Nt.setValue(J,"boneTexture",Lt.boneTexture,_e))}ee.isBatchedMesh&&(Nt.setOptional(J,ee,"batchingTexture"),Nt.setValue(J,"batchingTexture",ee._matricesTexture,_e),Nt.setOptional(J,ee,"batchingIdTexture"),Nt.setValue(J,"batchingIdTexture",ee._indirectTexture,_e),Nt.setOptional(J,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Nt.setValue(J,"batchingColorTexture",ee._colorsTexture,_e));let jn=ne.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&X.update(ee,ne,_n),($n||We.receiveShadow!==ee.receiveShadow)&&(We.receiveShadow=ee.receiveShadow,Nt.setValue(J,"receiveShadow",ee.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(Bt.envMapIntensity.value=V.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=tv()),$n){if(Nt.setValue(J,"toneMappingExposure",G.toneMappingExposure),We.needsLights&&dc(Bt,bi),Ae&&Z.fog===!0&&Ye.refreshFogUniforms(Bt,Ae),Ye.refreshMaterialUniforms(Bt,Z,ye,ge,P.state.transmissionRenderTarget[w.id]),We.needsLights&&We.lightProbeGrid){let Lt=We.lightProbeGrid;Bt.probesSH.value=Lt.texture,Bt.probesMin.value.copy(Lt.boundingBox.min),Bt.probesMax.value.copy(Lt.boundingBox.max),Bt.probesResolution.value.copy(Lt.resolution)}Ir.upload(J,Nr(We),Bt,_e)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ir.upload(J,Nr(We),Bt,_e),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Nt.setValue(J,"center",ee.center),Nt.setValue(J,"modelViewMatrix",ee.modelViewMatrix),Nt.setValue(J,"normalMatrix",ee.normalMatrix),Nt.setValue(J,"modelMatrix",ee.matrixWorld),Z.uniformsGroups!==void 0){let Lt=Z.uniformsGroups;for(let hi=0,Fi=Lt.length;hi<Fi;hi++){let Xa=Lt[hi];be.update(Xa,_n),be.bind(Xa,_n)}}return _n}function dc(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function tt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return he},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(w,V,ne){let Z=Q.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Q.get(w.texture).__webglTexture=V,Q.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ne,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let ne=Q.get(w);ne.__webglFramebuffer=V,ne.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,ne=0){me=w,ce=V,he=ne;let Z=null,ee=!1,Ae=!1;if(w){let Oe=Q.get(w);if(Oe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(J.FRAMEBUFFER,Oe.__webglFramebuffer),te.copy(w.viewport),Fe.copy(w.scissor),qe=w.scissorTest,y.viewport(te),y.scissor(Fe),y.setScissorTest(qe),se=-1;return}else if(Oe.__webglFramebuffer===void 0)_e.setupRenderTarget(w);else if(Oe.__hasExternalTextures)_e.rebindTextures(w,Q.get(w.texture).__webglTexture,Q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let it=w.depthTexture;if(Oe.__boundDepthTexture!==it){if(it!==null&&Q.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(w)}}let Je=w.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ae=!0);let $e=Q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($e[V])?Z=$e[V][ne]:Z=$e[V],ee=!0):w.samples>0&&_e.useMultisampledRTT(w)===!1?Z=Q.get(w).__webglMultisampledFramebuffer:Array.isArray($e)?Z=$e[ne]:Z=$e,te.copy(w.viewport),Fe.copy(w.scissor),qe=w.scissorTest}else te.copy(Ue).multiplyScalar(ye).floor(),Fe.copy(pt).multiplyScalar(ye).floor(),qe=Gt;if(ne!==0&&(Z=$),y.bindFramebuffer(J.FRAMEBUFFER,Z)&&y.drawBuffers(w,Z),y.viewport(te),y.scissor(Fe),y.setScissorTest(qe),ee){let Oe=Q.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe.__webglTexture,ne)}else if(Ae){let Oe=V;for(let Je=0;Je<w.textures.length;Je++){let $e=Q.get(w.textures[Je]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Je,$e.__webglTexture,ne,Oe)}}else if(w!==null&&ne!==0){let Oe=Q.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Oe.__webglTexture,ne)}se=-1};function Kt(w){let V=Q.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=I.textureFormatReadable(w.format),V.__typeReadable=I.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,ne,Z,ee,Ae,ze,Oe=0){if(!(w&&w.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Je=Je[ze]),Je){y.bindFramebuffer(J.FRAMEBUFFER,Je);try{let $e=w.textures[Oe],it=$e.format,st=$e.type;w.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Oe);let He=Kt($e);if(He.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Z&&ne>=0&&ne<=w.height-ee&&J.readPixels(V,ne,Z,ee,Ce.convert(it),Ce.convert(st),Ae)}finally{let $e=me!==null?Q.get(me).__webglFramebuffer:null;y.bindFramebuffer(J.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(w,V,ne,Z,ee,Ae,ze,Oe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Je=Je[ze]),Je)if(V>=0&&V<=w.width-Z&&ne>=0&&ne<=w.height-ee){y.bindFramebuffer(J.FRAMEBUFFER,Je);let $e=w.textures[Oe],it=$e.format,st=$e.type;w.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Oe);let He=Kt($e);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,It),J.bufferData(J.PIXEL_PACK_BUFFER,Ae.byteLength,J.STREAM_READ),J.readPixels(V,ne,Z,ee,Ce.convert(it),Ce.convert(st),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);let Jt=me!==null?Q.get(me).__webglFramebuffer:null;y.bindFramebuffer(J.FRAMEBUFFER,Jt);let Vt=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await Xd(J,Vt,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,It),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ae),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(It),J.deleteSync(Vt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,ne=0){let Z=Math.pow(2,-ne),ee=Math.floor(w.image.width*Z),Ae=Math.floor(w.image.height*Z),ze=V!==null?V.x:0,Oe=V!==null?V.y:0;_e.setTexture2D(w,0),J.copyTexSubImage2D(J.TEXTURE_2D,ne,0,0,ze,Oe,ee,Ae),y.unbindTexture()},this.copyTextureToTexture=function(w,V,ne=null,Z=null,ee=0,Ae=0){let ze,Oe,Je,$e,it,st,He,It,Jt,Vt=w.isCompressedTexture?w.mipmaps[Ae]:w.image;if(ne!==null)ze=ne.max.x-ne.min.x,Oe=ne.max.y-ne.min.y,Je=ne.isBox3?ne.max.z-ne.min.z:1,$e=ne.min.x,it=ne.min.y,st=ne.isBox3?ne.min.z:0;else{let Bt=Math.pow(2,-ee);ze=Math.floor(Vt.width*Bt),Oe=Math.floor(Vt.height*Bt),w.isDataArrayTexture?Je=Vt.depth:w.isData3DTexture?Je=Math.floor(Vt.depth*Bt):Je=1,$e=0,it=0,st=0}Z!==null?(He=Z.x,It=Z.y,Jt=Z.z):(He=0,It=0,Jt=0);let Pt=Ce.convert(V.format),Zt=Ce.convert(V.type),We;V.isData3DTexture?(_e.setTexture3D(V,0),We=J.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(_e.setTexture2DArray(V,0),We=J.TEXTURE_2D_ARRAY):(_e.setTexture2D(V,0),We=J.TEXTURE_2D),y.activeTexture(J.TEXTURE0),y.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,V.flipY),y.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),y.pixelStorei(J.UNPACK_ALIGNMENT,V.unpackAlignment);let Wt=y.getParameter(J.UNPACK_ROW_LENGTH),St=y.getParameter(J.UNPACK_IMAGE_HEIGHT),_n=y.getParameter(J.UNPACK_SKIP_PIXELS),Gn=y.getParameter(J.UNPACK_SKIP_ROWS),$n=y.getParameter(J.UNPACK_SKIP_IMAGES);y.pixelStorei(J.UNPACK_ROW_LENGTH,Vt.width),y.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Vt.height),y.pixelStorei(J.UNPACK_SKIP_PIXELS,$e),y.pixelStorei(J.UNPACK_SKIP_ROWS,it),y.pixelStorei(J.UNPACK_SKIP_IMAGES,st);let bi=w.isDataArrayTexture||w.isData3DTexture,Nt=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let Bt=Q.get(w),jn=Q.get(V),Lt=Q.get(Bt.__renderTarget),hi=Q.get(jn.__renderTarget);y.bindFramebuffer(J.READ_FRAMEBUFFER,Lt.__webglFramebuffer),y.bindFramebuffer(J.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Fi=0;Fi<Je;Fi++)bi&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Q.get(w).__webglTexture,ee,st+Fi),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Q.get(V).__webglTexture,Ae,Jt+Fi)),J.blitFramebuffer($e,it,ze,Oe,He,It,ze,Oe,J.DEPTH_BUFFER_BIT,J.NEAREST);y.bindFramebuffer(J.READ_FRAMEBUFFER,null),y.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(ee!==0||w.isRenderTargetTexture||Q.has(w)){let Bt=Q.get(w),jn=Q.get(V);y.bindFramebuffer(J.READ_FRAMEBUFFER,W),y.bindFramebuffer(J.DRAW_FRAMEBUFFER,j);for(let Lt=0;Lt<Je;Lt++)bi?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Bt.__webglTexture,ee,st+Lt):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Bt.__webglTexture,ee),Nt?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,jn.__webglTexture,Ae,Jt+Lt):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,jn.__webglTexture,Ae),ee!==0?J.blitFramebuffer($e,it,ze,Oe,He,It,ze,Oe,J.COLOR_BUFFER_BIT,J.NEAREST):Nt?J.copyTexSubImage3D(We,Ae,He,It,Jt+Lt,$e,it,ze,Oe):J.copyTexSubImage2D(We,Ae,He,It,$e,it,ze,Oe);y.bindFramebuffer(J.READ_FRAMEBUFFER,null),y.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Nt?w.isDataTexture||w.isData3DTexture?J.texSubImage3D(We,Ae,He,It,Jt,ze,Oe,Je,Pt,Zt,Vt.data):V.isCompressedArrayTexture?J.compressedTexSubImage3D(We,Ae,He,It,Jt,ze,Oe,Je,Pt,Vt.data):J.texSubImage3D(We,Ae,He,It,Jt,ze,Oe,Je,Pt,Zt,Vt):w.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Ae,He,It,ze,Oe,Pt,Zt,Vt.data):w.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Ae,He,It,Vt.width,Vt.height,Pt,Vt.data):J.texSubImage2D(J.TEXTURE_2D,Ae,He,It,ze,Oe,Pt,Zt,Vt);y.pixelStorei(J.UNPACK_ROW_LENGTH,Wt),y.pixelStorei(J.UNPACK_IMAGE_HEIGHT,St),y.pixelStorei(J.UNPACK_SKIP_PIXELS,_n),y.pixelStorei(J.UNPACK_SKIP_ROWS,Gn),y.pixelStorei(J.UNPACK_SKIP_IMAGES,$n),Ae===0&&V.generateMipmaps&&J.generateMipmap(We),y.unbindTexture()},this.initRenderTarget=function(w){Q.get(w).__webglFramebuffer===void 0&&_e.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?_e.setTextureCube(w,0):w.isData3DTexture?_e.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?_e.setTexture2DArray(w,0):_e.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){ce=0,he=0,me=null,y.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}};function Af(i){let e,t="context";try{let D=i.getContext("webgl2",{antialias:!0,alpha:!1});if(!D)return console.warn("[Star Rush WebGL] webgl2 context unavailable; returning null for fallback handling"),null;t="renderer",e=new oc({canvas:i,context:D,antialias:!0,alpha:!1,powerPreference:"default"})}catch(D){return console.warn("[Star Rush WebGL] "+t+" initialization failed; returning null for fallback handling:",D?.message||String(D)),null}e.outputColorSpace=En,e.toneMapping=Ra,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=pl,e.setPixelRatio(Math.min(devicePixelRatio||1,1.5));let n=new da;n.fog=new ua("#cbddec",125,460);let s=new bn(62,1,.12,850),r=new Ta("#e7f4ff","#a08ba5",2.2),o=new Ea("#fff0de",2.4);o.position.set(-30,60,25),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-55,right:55,top:45,bottom:-45,near:1,far:160}),o.shadow.bias=-4e-4,n.add(r,o,o.target);let c=new Ps(new Uint8Array([95,145,195,245]),4,1,Cr);c.minFilter=$t,c.magFilter=$t,c.needsUpdate=!0;let u=new Map,h=new zt,g=new Map,x=new Map,f=new Tn(new Ma(650,16,8),new Cn({side:gn,depthWrite:!1,uniforms:{top:{value:new gt("#8fbee6")},bottom:{value:new gt("#f0e8f0")}},vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vDirection;uniform vec3 top,bottom;void main(){float h=smoothstep(-.05,.8,normalize(vDirection).y);gl_FragColor=vec4(mix(bottom,top,h),1.0);}"}));f.renderOrder=-100,n.add(f);let M=1,T=0,N=0,v=0,p=0,L=16.7,k=0,R=0,C=2,P=["low","medium","high"];function B(D,G){D.renderId||(D.renderId=M++);let q=D.renderId+":"+(D.paintable&&G?G:"");if(x.has(q))return x.get(q);let H=D.sourceData,$=[],W=[],j=[],ce=G?new gt(G):null;for(let me=0;me<H.length;me+=10){$.push(H[me],H[me+1],H[me+2]),W.push(H[me+3],H[me+4],H[me+5]);let se=H[me+6],de=H[me+7],te=H[me+8],Fe=D.paintable&&ce&&de-se>.14&&te-se>.2;j.push(Fe?ce.r:se,Fe?ce.g:de,Fe?ce.b:te)}let he=new Bn;return he.setAttribute("position",new an($,3)),he.setAttribute("normal",new an(W,3)),he.setAttribute("color",new an(j,3)),he.setIndex(Array.from(D.sourceIndices)),he.computeBoundingSphere(),x.set(q,he),D.onDispose=()=>{for(let[me,se]of x)if(me.startsWith(D.renderId+":")){for(let[de,te]of u)te.geometry===se&&(n.remove(te),te.dispose(),u.delete(de));se.dispose(),x.delete(me)}},he}function b(D,G,q,H,$,W={}){let j=performance.now();if(p){let se=j-p;se<100&&(L+=(se-L)*.035)}p=j,W.quality==="auto"&&(L>23?(k++,R=0):L<16.9?(R++,k=0):(k=0,R=0),k>90&&C>0&&(C--,k=0),R>360&&C<2&&(C++,R=0));let ce=W.quality==="auto"?P[C]:W.quality,he=ce==="low"?1:ce==="medium"?1.2:Math.min(devicePixelRatio||1,1.5);he!==v&&(e.setPixelRatio(he),v=he),(q!==T||H!==N)&&(e.setSize(q,H,!1),T=q,N=H),s.aspect=q/H,s.fov=$,s.updateProjectionMatrix(),s.position.fromArray(G.eye),s.lookAt(new ae(...G.target)),f.position.copy(s.position);let me=new Map;for(let se of D){if(!se.mesh.sourceIndices.length)continue;let de=B(se.mesh,se.tint),te=se.opacity??1,Fe=de.uuid+":"+se.shadow+":"+te,qe=me.get(Fe);qe||(qe={geometry:de,shadow:se.shadow,opacity:te,items:[]},me.set(Fe,qe)),qe.items.push(se)}for(let se of u.values())se.visible=!1;for(let[se,de]of me){let te=u.get(se);if(!te||te.instanceMatrix.count<de.items.length){te&&(n.remove(te),te.dispose());let Fe=g.get(de.opacity);Fe||(Fe=new Sa({vertexColors:!0,gradientMap:c,transparent:de.opacity<1,opacity:de.opacity,depthWrite:de.opacity>=1}),g.set(de.opacity,Fe)),te=new _a(de.geometry,Fe,Math.max(4,de.items.length+8)),te.instanceMatrix.setUsage(Nh),te.frustumCulled=!0,te.receiveShadow=de.opacity>=1,n.add(te),u.set(se,te)}te.count=de.items.length,te.castShadow=de.shadow&&ce!=="low",te.visible=!0;for(let Fe=0;Fe<de.items.length;Fe++)h.fromArray(de.items[Fe].m),te.setMatrixAt(Fe,h);te.instanceMatrix.needsUpdate=!0,te.computeBoundingSphere()}return e.shadowMap.enabled=ce!=="low",e.render(n,s),{drawCalls:e.info.render.calls,triangles:e.info.render.triangles,effectiveQuality:ce}}return{render:b,renderer:e,scene:n}}function Ef(i,e=Af){let t=e(i);if(t)return{canvas:i,threeBackend:t,software:!1,softwareContext:null};let n=r=>{try{return r.getContext("2d")}catch{return null}},s=n(i);if(!s){let r=i.cloneNode(!1);if(s=n(r),!s)throw new Error("\u65E0\u6CD5\u521D\u59CB\u5316 WebGL \u6216 Canvas \u663E\u793A\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6216\u66F4\u6362\u652F\u6301\u7684\u6D4F\u89C8\u5668\u3002");i.replaceWith(r),i=r}return{canvas:i,threeBackend:null,software:!0,softwareContext:s}}function Cf(i,e){for(let t of i.querySelectorAll("#trackPicker [data-track]")){let n=e[t.dataset.track];if(!n||t.querySelector(".course-art"))continue;let s=i.createElement("img");s.className="course-art",s.alt="",s.setAttribute("aria-hidden","true"),s.draggable=!1,s.decoding="async",s.hidden=!0,s.width=512,s.height=256,s.onload=()=>{s.hidden=!1,t.dataset.art="ready"},s.onerror=()=>{s.remove(),delete t.dataset.art},t.prepend(s),s.src=n}}(()=>{"use strict";let i=document.getElementById("scene"),e=document.getElementById("error"),t=document.getElementById("loading");function n(h){e.hidden=!1,document.getElementById("error-text").textContent=h,t.classList.add("done")}let s=!1,r={profile:"procedural",urls:{}},o=!1,c={light:"/assets/impact-audio/rail-light-v2.e9daa5ac2bd3.wav",medium:"/assets/impact-audio/rail-medium-v2.9e322b68b6d0.wav"},u=!1;try{let M=function(a,l,d){let m=[];if(d){let S=(a%l+l)%l;for(let A=0;A<l;A+=40){let E=A-S;E-=Math.round(E/l)*l,E>=-40&&E<210&&m.push({s:A,ds:E})}}else for(let S=Math.ceil((a-40)/40)*40;S<a+210;S+=40)m.push({s:S,ds:S-a});return m},N=function(a,l,d,m,S,A){let E=[];for(let F of a){if(!l.includes(F.mesh))continue;let O=d(Fe(F.m,[0,2.28,0]));!O||O[2]>150||O[0]<-O[3]*3||O[0]>m+O[3]*3||O[1]<-O[3]*3||O[1]>S+O[3]*3||E.push({item:F,q:O})}return E.sort((F,O)=>F.q[2]-O.q[2]).slice(0,6).map(({item:F,q:O})=>{let Y=F.mesh,pe=Y.sourceData,ie=Y.sourceIndices,ve=[],xe=b(P(A,Fe(F.m,[0,2.28,0])),[F.m[8],F.m[9],F.m[10]])>=0,Me=ie.length-6*qt.i.length;for(let ue=0;ue<pe.length;ue+=10)ve.push(d(Fe(F.m,[pe[ue],pe[ue+1],pe[ue+2]])));let Te=T.get(Y);if(!Te){Te=[];for(let ue=0;ue<ie.length;ue+=3){let le=ie[ue]*10+6;Te.push("rgb("+[0,1,2].map(Ie=>Math.round(Math.pow(pe[le+Ie],1/2.2)*255)).join(",")+")")}T.set(Y,Te)}let Re=[];for(let ue=0;ue<ie.length;ue+=3){let le=[ve[ie[ue]],ve[ie[ue+1]],ve[ie[ue+2]]];if(le.some(Ne=>!Ne))continue;let Ie=ue<qt.i.length?0:ue>=Me?xe?2:1:xe?1:2;Re.push({p:le,color:Te[ue/3],layer:Ie,depth:(le[0][2]+le[1][2]+le[2][2])/3})}return Re.sort((ue,le)=>ue.layer-le.layer||le.depth-ue.depth),{kind:"sign",q:O,triangles:Re}})},v=function(a,l){for(let{p:d,color:m}of l.triangles)a.fillStyle=m,a.beginPath(),a.moveTo(d[0][0],d[0][1]),a.lineTo(d[1][0],d[1][1]),a.lineTo(d[2][0],d[2][1]),a.closePath(),a.fill()},p=function(a){let l=f,d=i.width,m=i.height;l.setTransform(1,0,0,1,0,0);let S=l.createLinearGradient(0,0,0,m);S.addColorStop(0,"#96c8ee"),S.addColorStop(.62,"#f2e6ee"),S.addColorStop(.63,"#cbd8c1"),S.addColorStop(1,"#bdcdb8"),l.fillStyle=S,l.fillRect(0,0,d,m);let A=a.eye,E=a.target,F=q(P(E,A)),O=q(D(F,[0,1,0])),Y=D(O,F),pe=m/(2*Math.tan(Hs*Math.PI/360)),ie=ue=>{let le=P(ue,A),Ie=b(le,F);return Ie<.25?null:[d/2+b(le,O)*pe/Ie,m/2-b(le,Y)*pe/Ie,Ie,pe/Ie]},ve=(ue,le)=>{let Ie=ue.map(ie);Ie.some(Ne=>!Ne)||(l.fillStyle=le,l.beginPath(),Ie.forEach((Ne,Ze)=>Ze?l.lineTo(Ne[0],Ne[1]):l.moveTo(Ne[0],Ne[1])),l.closePath(),l.fill())},xe=ue=>P(ue,a.origin),Me=[];for(let ue=-40;ue<240;ue+=5){let le=_.s+ue,Ie=xt(le),Ne=xt(le+5);Me.push({d:ue,a:Ie,b:Ne})}for(let ue of Me.reverse()){let le=(Ie,Ne,Ze)=>xe(C(C(Ie.p,B(Ie.R,Ne)),[0,Ze,0]));if(ve([le(ue.a,-10,0),le(ue.a,10,0),le(ue.b,10,0),le(ue.b,-10,0)],"#e3dce5"),ve([le(ue.a,-7,.05),le(ue.a,7,.05),le(ue.b,7,.05),le(ue.b,-7,.05)],"#7b829a"),Math.floor(ue.d/5)%2===0)for(let Ie of[-2.3,2.3])ve([le(ue.a,Ie-.04,.06),le(ue.a,Ie+.04,.06),le(ue.b,Ie+.04,.06),le(ue.b,Ie-.04,.06)],"#e9edf1");for(let Ie of[-1,1])ve([le(ue.a,Ie*8.1,.4),le(ue.a,Ie*8.1,.8),le(ue.b,Ie*8.1,.8),le(ue.b,Ie*8.1,.4)],"#c0cfe2")}let Te=typeof Vr<"u"&&typeof Bt<"u"?N(Vr,[Bt.get("left"),Bt.get("right")],ie,d,m,A):[];if(typeof u<"u"&&u){let ue=[...Te];for(let le=0;le<210;le+=20)for(let Ie of[-1,1]){let Ne=wt(Math.floor((_.s+le)/20)*20,Ie*12,0),Ze=ie(xe(Ne));Ze&&ue.push({q:Ze,side:Ie,ds:le,pos:Ne,kind:"tree"})}for(let le of M(_.s,Z,tt==="circuit"))for(let Ie of[-1,1]){let Ne=ie(xe(wt(le.s,Ie*20,0)));Ne&&ue.push({q:Ne,kind:"house"})}for(let le of ue.sort((Ie,Ne)=>Ne.q[2]-Ie.q[2])){if(le.kind==="sign"){v(l,le);continue}let[Ie,Ne,,Ze]=le.q;if(le.kind==="tree"){l.fillStyle="#a78a95",l.fillRect(Ie-Ze*.12,Ne-Ze*3.5,Ze*.24,Ze*3.5);for(let we=0;we<4;we++)l.fillStyle=we%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(Ie+Math.sin(we*2)*Ze,Ne-Ze*(3.3+we*.3),Ze*1.6,Ze*1.1,0,0,k),l.fill()}else{let we=le.q;l.fillStyle="#f3e9dc",l.fillRect(we[0]-we[3]*3,we[1]-we[3]*5,we[3]*6,we[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(we[0]-we[3]*3.5,we[1]-we[3]*5),l.lineTo(we[0],we[1]-we[3]*6.3),l.lineTo(we[0]+we[3]*3.5,we[1]-we[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let kt=0;kt<3;kt++)l.fillRect(we[0]+(kt-1.2)*we[3]*1.5,we[1]-we[3]*3.9,we[3],we[3]*1.2)}}}else{let ue=[...Te];for(let le=0;le<210;le+=20)for(let Ie of[-1,1]){let Ne=wt(Math.floor((_.s+le)/20)*20,Ie*12,0),Ze=ie(xe(Ne));Ze&&ue.push({q:Ze,side:Ie,ds:le,pos:Ne})}for(let le of ue.sort((Ie,Ne)=>Ne.q[2]-Ie.q[2])){if(le.kind==="sign"){v(l,le);continue}let[Ie,Ne,,Ze]=le.q;l.fillStyle="#a78a95",l.fillRect(Ie-Ze*.12,Ne-Ze*3.5,Ze*.24,Ze*3.5);for(let we=0;we<4;we++)l.fillStyle=we%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(Ie+Math.sin(we*2)*Ze,Ne-Ze*(3.3+we*.3),Ze*1.6,Ze*1.1,0,0,k),l.fill();if(le.ds%40===0){let we=ie(xe(wt(_.s+le.ds,le.side*20,0)));if(we){l.fillStyle="#f3e9dc",l.fillRect(we[0]-we[3]*3,we[1]-we[3]*5,we[3]*6,we[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(we[0]-we[3]*3.5,we[1]-we[3]*5),l.lineTo(we[0],we[1]-we[3]*6.3),l.lineTo(we[0]+we[3]*3.5,we[1]-we[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let kt=0;kt<3;kt++)l.fillRect(we[0]+(kt-1.2)*we[3]*1.5,we[1]-we[3]*3.9,we[3],we[3]*1.2)}}}}for(let ue of fs)if(ue.life>0){let le=ie(xe(ue.p));le&&(l.fillStyle="#414957",l.fillRect(le[0],le[1],Math.max(1,le[3]*.12),Math.max(2,le[3]*ue.length)))}for(let ue of nn.values())for(let le of ue.entities.concat(ue.roadsideProps||[])){if(Math.abs(it(le.s,_.s))>170)continue;let Ie=ie(xe(wt(le.s+(le.ds||0),le.l+(le.dl||0),.2)));if(!Ie||le.kind==="coin"&&le.hitLap===Math.max(0,Math.floor(_.s/Z)))continue;let[Ne,Ze,,we]=Ie;if(le.kind==="coin")l.fillStyle="#ffe2a0",l.beginPath(),l.ellipse(Ne,Ze-we*.8,we*.25,we*.38,0,0,k),l.fill();else if(le.kind==="pad"){let kt=xt(le.s),hn=(yn,rn)=>xe(wt(le.s+yn,le.l+rn,.07));ve([hn(-1.2,-1.5),hn(1.2,-1.5),hn(1.2,1.5),hn(-1.2,1.5)],"#92e3e5")}else if(le.kind==="ramp"){let kt=(hn,yn,rn)=>xe(wt(le.s+hn,le.l+yn,rn));ve([kt(-1.4,-1.5,.08),kt(1.4,-1.5,.85),kt(1.4,1.5,.85),kt(-1.4,1.5,.08)],"#bfa9e3")}else le.kind==="cone"?(l.fillStyle="#eebd92",l.beginPath(),l.moveTo(Ne,Ze-we*.8),l.lineTo(Ne-we*.35,Ze),l.lineTo(Ne+we*.35,Ze),l.fill()):le.kind==="barrier"&&(l.fillStyle="#edacbb",l.fillRect(Ne-we,Ze-we*.7,we*2,we*.7))}let Re=(ue,le,Ie,Ne,Ze,we=1)=>{let kt=xt(ue),hn=wt(ue,le,.05+Ne),yn=ie(xe(hn));if(!yn)return;l.globalAlpha=we;let rn=(er,bs,Wi)=>xe(C(hn,C(B(kt.T,er*Math.cos(Ie)-Wi*Math.sin(Ie)),C(B(kt.R,er*Math.sin(Ie)+Wi*Math.cos(Ie)),[0,bs,0]))));ve([rn(-1.6,.3,-.8),rn(1.6,.3,-.8),rn(1.6,.7,.8),rn(-1.6,.7,.8)],Ze),ve([rn(-1.6,.65,-.8),rn(1.6,.65,-.8),rn(1.6,.65,.8),rn(-1.6,.65,.8)],"#eef1f7");for(let er of[-1,1])for(let bs of[-.87,.87]){let Wi=ie(rn(er,.35,bs));Wi&&(l.fillStyle="#3c4357",l.beginPath(),l.ellipse(Wi[0],Wi[1],yn[3]*.24,yn[3]*.34,0,0,k),l.fill())}let en=ie(rn(-.3,1.6,0));en&&(l.fillStyle="#f3d2be",l.beginPath(),l.arc(en[0],en[1],yn[3]*.33,0,k),l.fill(),l.fillStyle="#a9abe4",l.beginPath(),l.ellipse(en[0],en[1]-yn[3]*.18,yn[3]*.36,yn[3]*.2,0,Math.PI,k),l.fill()),l.globalAlpha=1};if(sn.line&&rt==="running")for(let ue=8;ue>=0;ue--){let le=_.s+12+ue*9,Ie=xt(le),Ne=H(Ie.curv*80,-2.1,2.1),Ze=(we,kt)=>xe(wt(le+we,Ne+kt,.09));ve([Ze(-.6,-.4),Ze(.3,0),Ze(-.6,.4),Ze(-.2,0)],Math.abs(Ie.curv)*_.speed>.95?"#f0b7c3":"#a5dbe6")}if(Hi&&rt==="running"&&Re(Hi.s,Hi.l,Hi.yaw,Hi.jump,"#b8e9e6",.35),typeof Yn<"u")for(let ue of Yn)Re(ue.s,ue.l,ue.yaw||0,0,ue.color);if(typeof oe<"u"&&oe.room)for(let ue of oe.peers.values())ue.position&&Re(ue.position.s,ue.position.l,ue.position.yaw,ue.position.jump,"#eab5ce");if(_.mini>0||_.nitroTime>0||_.pad>0){let ue=xt(_.s),le=ie(xe(wt(_.s-2,_.l,.4+_.jump)));le&&(l.fillStyle=_.nitroTime>0?"#bcb2ff99":"#95edff99",l.beginPath(),l.ellipse(le[0],le[1],le[3]*.7,le[3]*.45,0,0,k),l.fill())}Re(_.s,_.l,_.yaw,_.jump,typeof Qt<"u"?Qt.paint:"#8ccde4")},j=function(a,l){let d=new Float32Array(16);for(let m=0;m<4;m++)for(let S=0;S<4;S++)d[m*4+S]=a[S]*l[m*4]+a[4+S]*l[m*4+1]+a[8+S]*l[m*4+2]+a[12+S]*l[m*4+3];return d},ce=function(a,l,d){let m=W();return m[12]=a,m[13]=l,m[14]=d,m},he=function(a,l,d){let m=W();return m[0]=a,m[5]=l,m[10]=d,m},me=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([1,0,0,0,0,l,d,0,0,-d,l,0,0,0,0,1])},se=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,0,-d,0,0,1,0,0,d,0,l,0,0,0,0,1])},de=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,d,0,0,-d,l,0,0,0,0,1,0,0,0,0,1])},te=function(a=[0,0,0],l=[1,1,1],d=[0,0,0]){return j(ce(...a),j(se(d[1]),j(me(d[0]),j(de(d[2]),he(...l)))))},Fe=function(a,l){return[a[0]*l[0]+a[4]*l[1]+a[8]*l[2]+a[12],a[1]*l[0]+a[5]*l[1]+a[9]*l[2]+a[13],a[2]*l[0]+a[6]*l[1]+a[10]*l[2]+a[14]]},qe=function(a){let l=[a[0],a[1],a[2]],d=[a[4],a[5],a[6]],m=[a[8],a[9],a[10]],S=D(d,m),A=D(m,l),E=D(l,d),F=b(l,S)||1;return new Float32Array([...B(S,1/F),...B(A,1/F),...B(E,1/F)])},Dt=function(a,l){return q([a[0]*l[0]+a[3]*l[1]+a[6]*l[2],a[1]*l[0]+a[4]*l[1]+a[7]*l[2],a[2]*l[0]+a[5]*l[1]+a[8]*l[2]])},Mt=function(a,l,d=[0,1,0]){let m=q(P(a,l)),S=q(D(d,m)),A=D(m,S);return new Float32Array([S[0],A[0],m[0],0,S[1],A[1],m[1],0,S[2],A[2],m[2],0,-b(S,a),-b(A,a),-b(m,a),1])},At=function(a,l,d,m){let S=1/Math.tan(a/2),A=1/(d-m);return new Float32Array([S/l,0,0,0,0,S,0,0,0,0,(m+d)*A,-1,0,0,2*m*d*A,0])},ge=function(a,l,d,m,S,A){return new Float32Array([2/(l-a),0,0,0,0,2/(m-d),0,0,0,0,-2/(A-S),0,-(l+a)/(l-a),-(m+d)/(m-d),-(A+S)/(A-S),1])},ye=function(a,l,d,m=d){let S=P(l,a),A=q(S),E=q(D(Math.abs(A[2])<.95?[0,0,1]:[1,0,0],A)),F=D(E,A),O=B(C(a,l),.5),Y=G(S);return new Float32Array([E[0]*d,E[1]*d,E[2]*d,0,A[0]*Y,A[1]*Y,A[2]*Y,0,F[0]*m,F[1]*m,F[2]*m,0,...O,1])},Xe=function(a){let l=parseInt(a.replace("#",""),16);return[l>>16&255,l>>8&255,l&255].map(d=>Math.pow(d/255,2.2))},Ue=function(a,l,d){return{p:a,n:l,i:d}},pt=function(a=20,l=12){let d=[],m=[],S=[];for(let A=0;A<=l;A++){let E=A*L/l;for(let F=0;F<=a;F++){let O=F*k/a,Y=[Math.sin(E)*Math.cos(O),Math.cos(E),Math.sin(E)*Math.sin(O)];d.push(...Y),m.push(...Y)}}for(let A=0;A<l;A++)for(let E=0;E<a;E++){let F=A*(a+1)+E,O=F+a+1;S.push(F,F+1,O,F+1,O+1,O)}return Ue(d,m,S)},Gt=function(a=16,l=1){let d=[],m=[],S=[];for(let A=0;A<2;A++)for(let E=0;E<=a;E++){let F=E*k/a,O=A?l:1,Y=q([Math.cos(F),1-l,Math.sin(F)]);d.push(O*Math.cos(F),A-.5,O*Math.sin(F)),m.push(...Y)}for(let A=0;A<a;A++){let E=A,F=A+a+1;S.push(E,F,E+1,E+1,F,F+1)}for(let A=0;A<2;A++){let E=d.length/3,F=A-.5,O=A?l:1;d.push(0,F,0),m.push(0,A?1:-1,0);for(let Y=0;Y<=a;Y++){let pe=Y*k/a;d.push(O*Math.cos(pe),F,O*Math.sin(pe)),m.push(0,A?1:-1,0)}for(let Y=0;Y<a;Y++)S.push(E,E+Y+(A?2:1),E+Y+(A?1:2))}return Ue(d,m,S)},ut=function(a,l,d=48,m=10,S=0,A=k){let E=[],F=[],O=[];for(let Y=0;Y<=d;Y++){let pe=S+A*Y/d;for(let ie=0;ie<=m;ie++){let ve=ie*k/m,xe=Math.cos(ve),Me=Math.sin(ve);E.push((a+l*xe)*Math.cos(pe),(a+l*xe)*Math.sin(pe),l*Me),F.push(xe*Math.cos(pe),xe*Math.sin(pe),Me)}}for(let Y=0;Y<d;Y++)for(let pe=0;pe<m;pe++){let ie=Y*(m+1)+pe,ve=ie+m+1;O.push(ie,ve,ie+1,ve,ve+1,ie+1)}return Ue(E,F,O)},Et=function(a,l,d,m=.07){let S=[a,l,d,m].join(",");if(yt.has(S))return yt.get(S);m=Math.min(m,a/2*.95,l/2*.95,d/2*.95);let A=[],E=[],F=[],O=[a/2,l/2,d/2],Y=[[[0,0,d/2],[1,0,0],[0,1,0],a,l],[[0,0,-d/2],[-1,0,0],[0,1,0],a,l],[[a/2,0,0],[0,0,-1],[0,1,0],d,l],[[-a/2,0,0],[0,0,1],[0,1,0],d,l],[[0,l/2,0],[1,0,0],[0,0,-1],a,d],[[0,-l/2,0],[1,0,0],[0,0,1],a,d]];for(let[ie,ve,xe,Me,Te]of Y){let Re=Ne=>[-Ne/2,-Ne/2+m*.28,-Ne/2+m,Ne/2-m,Ne/2-m*.28,Ne/2],ue=Re(Me),le=Re(Te),Ie=A.length/3;for(let Ne of le)for(let Ze of ue){let we=C(ie,C(B(ve,Ze),B(xe,Ne))),kt=we.map((yn,rn)=>H(yn,-O[rn]+m,O[rn]-m)),hn=q(P(we,kt));A.push(...C(kt,B(hn,m))),E.push(...hn)}for(let Ne=0;Ne<5;Ne++)for(let Ze=0;Ze<5;Ze++){let we=Ie+Ne*6+Ze;F.push(we,we+1,we+6,we+1,we+7,we+6)}}let pe=Ue(A,E,F);return yt.set(S,pe),pe},ft=function(a,l=.04,d=8){let m=[],S=[],A=[];for(let E=0;E<a.length;E++){let F=q(P(a[Math.min(E+1,a.length-1)],a[Math.max(E-1,0)])),O=q(D(F,Math.abs(F[1])<.9?[0,1,0]:[0,0,1])),Y=D(F,O);for(let pe=0;pe<=d;pe++){let ie=pe*k/d,ve=C(B(O,Math.cos(ie)),B(Y,Math.sin(ie)));m.push(...C(a[E],B(ve,l))),S.push(...ve)}}for(let E=0;E<a.length-1;E++)for(let F=0;F<d;F++){let O=E*(d+1)+F,Y=O+d+1;A.push(O,O+1,Y,O+1,Y+1,Y)}return Ue(m,S,A)},Ft=function(a,l,d,m){let S=[],A=[],E=[];for(let O=0;O<=144;O++){let Y=O*k/144;for(let pe of[-1,1])S.push((a+pe*d)*Math.cos(Y),m,(l+pe*d)*Math.sin(Y)),A.push(0,1,0)}for(let O=0;O<144;O++){let Y=O*2;E.push(Y,Y+2,Y+1,Y+1,Y+2,Y+3)}return Ue(S,A,E)},Se=function(a,l,d,m=at.green,S=!1,A=.13){a.add(S?dn:jt,te(l,d),m,A)},z=function(a,l,d,m,S=.06,A=[0,0,0],E=.12){a.add(Et(...d,S),te(l,[1,1,1],A),m,E)},re=function(a,l,d,m,S,A=.2,E=!1){a.add(qt,ye(l,d,m),S,A),E&&(Se(a,l,[m,m,m],S,!0,A),Se(a,d,[m,m,m],S,!0,A))},Le=function(a,l,d,m,S=[0,0,0],A=!1){a.add(A?cn:J,te(l,d,S),m)},Ye=function(a,l,d,m,S=.15){a.add(ft(l,d),mt,m,S)},ke=function(a,l,d,m=100){return Array.from({length:m+1},(S,A)=>[a*Math.cos(A*k/m),d,l*Math.sin(A*k/m)])},et=function(){return De=De*1664525+1013904223>>>0,De/4294967296},dc=function(a,l,d){let m=-d*Math.min(.09,_.speed*.003),S=Math.sin(a*18)*Math.min(.012,_.speed*5e-4);Ot.local=te([0,S,0],[1,1,1],[m,0,0]),Nn.local=te([-.31,1.57+S,0],[1,1,1],[-m*.5,-d*.13,0]);for(let A of fn)A.n.local=j(ce(A.x,.41,A.z),j(se(A.front?s?-(_.roadSteer||0):-(_.drifting?d*.12-pn(_.yaw-_.velocityYaw)*.62:d*.26):0),de(yc)));for(let A of Us){let E=_.boostActive?1.25+.17*Math.sin(a*38+A.side):_.pad>0?1+.12*Math.sin(a*36):_.mini>0?.65+.12*Math.sin(a*42+A.side):.001;A.n.local=te([-1.9,.43,A.side*.34],[E,Math.max(.01,E),Math.max(.01,E)])}},Ae=function(){return V[Kt]},ze=function(){return Z*Ae().laps},Oe=function(a){let l=Ae().points,d=l.length,m=(a%d+d)%d,S=Math.floor(m),A=m-S,E=l[(S+d-1)%d],F=l[S],O=l[(S+1)%d],Y=l[(S+2)%d];return F.map((pe,ie)=>.5*(2*pe+(-E[ie]+O[ie])*A+(2*E[ie]-5*pe+4*O[ie]-Y[ie])*A*A+(-E[ie]+3*pe-3*O[ie]+Y[ie])*A*A*A))},Je=function(){w=Kt,ne=[],Z=0;let a=Ae().points.length*120;for(let m=0;m<=a;m++){let S=m*Ae().points.length/a,A=Oe(S);m&&(Z+=G(P(A,ne[m-1].p)));let E=P(Oe(S+1e-4),Oe(S-1e-4));ne.push({s:Z,p:A,h:Math.atan2(E[2],E[0])})}let l=ne.map(m=>m.p[0]),d=ne.map(m=>m.p[2]);ee={minX:Math.min(...l),maxX:Math.max(...l),minZ:Math.min(...d),maxZ:Math.max(...d)}},$e=function(a){let l=(a%Z+Z)%Z,d=0,m=ne.length-1;for(;d+1<m;){let Y=d+m>>1;ne[Y].s<=l?d=Y:m=Y}let S=ne[d],A=ne[m],E=(l-S.s)/(A.s-S.s||1),F=Math.atan2(Math.sin(A.h-S.h),Math.cos(A.h-S.h)),O=S.h+F*E;return{p:S.p.map((Y,pe)=>$(Y,A.p[pe],E)),h:O,T:[Math.cos(O),0,Math.sin(O)],R:[-Math.sin(O),0,Math.cos(O)],curv:F/(A.s-S.s),slope:(A.p[1]-S.p[1])/(A.s-S.s)}},it=function(a,l){let d=a-l;return tt==="circuit"&&(d-=Math.round(d/Z)*Z),d},st=function(){return Wn+(_.timePenalty||0)},He=function(a){let l=Math.round(a*100),d=Math.floor(l/6e3),m=Math.floor(l%6e3/100),S=l%100;return String(d).padStart(2,"0")+":"+String(m).padStart(2,"0")+"."+String(S).padStart(2,"0")},It=function(a,l){if(tt!=="circuit")return!0;let d=C($e(a).p,B($e(a).R,l));for(let m=0;m<ne.length;m+=20){let S=ne[m];if(Math.abs(it(S.s,a))>35&&Math.hypot(S.p[0]-d[0],S.p[2]-d[2])<15)return!1}return!0},_n=function(){return[[Math.cos(_.yaw),Math.sin(_.yaw)],[-Math.sin(_.yaw),Math.cos(_.yaw)]]},Gn=function(a){let l=_n(),d=a.angle||0,m=[[Math.cos(d),Math.sin(d)],[-Math.sin(d),Math.cos(d)]],S=[it(_.s,a.s+(a.ds||0)),_.l-a.l-(a.dl||0)],A=a.kind==="cone"?[.39,.39]:[.35,1.1],E=1/0,F=null;for(let O of[l[0],l[1],m[0],m[1]]){let Y=Math.abs(Wt(l[0],O))*Pt+Math.abs(Wt(l[1],O))*Zt,pe=Math.abs(Wt(m[0],O))*A[0]+Math.abs(Wt(m[1],O))*A[1],ie=Y+pe-Math.abs(Wt(S,O));if(ie<=0)return null;if(ie<E){E=ie;let ve=Wt(S,O)>=0?1:-1;F=O.map(xe=>xe*ve)}}return{normal:F,pen:E}},$n=function(a,l,d=null){let m=1/Jt,S=1/Vt,A=d?d.kind==="cone"?9:85:1/0,E=d?1/A:0,F=d?[it(_.s+l[0],d.s+(d.ds||0)),_.l+l[1]-d.l-(d.dl||0)]:[0,0],O=d?1/(A*(d.kind==="cone"?.09:.48)):0,Y=[_.vS-_.spin*l[1],_.vL+_.spin*l[0]],pe=d?[(d.vS||0)-(d.omega||0)*F[1],(d.vL||0)+(d.omega||0)*F[0]]:[0,0],ie=[Y[0]-pe[0],Y[1]-pe[1]],ve=Wt(ie,a);if(ve>=0)return 0;let xe=St(l,a),Me=St(F,a),Te=d?.13:.035,Re=-(1+Te)*ve/(m+E+xe*xe*S+Me*Me*O);_.vS+=a[0]*Re*m,_.vL+=a[1]*Re*m,_.spin=H(_.spin+xe*Re*S,-2.3,2.3);let ue=[-a[1],a[0]],le=St(l,ue),Ie=St(F,ue),Ne=Wt(ie,ue),Ze=d?.22:.1,we=H(-Ne/(m+E+le*le*S+Ie*Ie*O),-Ze*Re,Ze*Re);return _.vS+=ue[0]*we*m,_.vL+=ue[1]*we*m,_.spin=H(_.spin+le*we*S,-2.3,2.3),d&&(d.vS=(d.vS||0)-(a[0]*Re+ue[0]*we)*E,d.vL=(d.vL||0)-(a[1]*Re+ue[1]*we)*E,d.omega=H((d.omega||0)-(Me*Re+Ie*we)*O,-7,7),d.kind==="cone"&&(d.tilt=Math.min(1.35,(d.tilt||0)+Math.abs(Re)*E*.015))),Math.abs(ve)},bi=function(a,l){a<.7||_.contactSound>0||(_.contactSound=.16,du(wt(_.s,_.l,.45),Math.min(14,Math.ceil(a)),[0,1,0]),Wf(l,a),a>5&&(Br=Math.min(.25,a*.012),_.driftCharge*=.5))},Nt=function(a){_.contactSound=Math.max(0,_.contactSound-a);for(let l of nn.values())for(let d of l.entities)(d.kind==="cone"||d.kind==="barrier")&&(d.vS=(d.vS||0)*Math.exp(-a*2.4),d.vL=(d.vL||0)*Math.exp(-a*2.4),d.ds=H((d.ds||0)+d.vS*a,-18,18),d.dl=H((d.dl||0)+d.vL*a,-7.4-d.l,7.4-d.l),d.angle=(d.angle||0)+(d.omega||0)*a,d.omega=(d.omega||0)*Math.exp(-a*2));for(let l=0;l<3;l++){let d=_n(),m=Math.abs(d[0][1])*Pt+Math.abs(d[1][1])*Zt,S=We-m;if(Math.abs(_.l)>S){let A=Math.sign(_.l),E=[0,-A];_.l=A*(S-.015);let F=[A*(Math.sign(d[0][1])*Pt*d[0][0]+Math.sign(d[1][1])*Zt*d[1][0]),A*m],O=$n(E,F);bi(O,"rail"),O>4&&(Ya(!1),_.turnRate*=.4,eo=!1)}if(!(_.jump>.85))for(let A of nn.values())for(let E of A.entities){if(E.kind!=="cone"&&E.kind!=="barrier"||Math.abs(it(E.s+(E.ds||0),_.s))>4.5||Math.abs(E.l+(E.dl||0)-_.l)>4)continue;let F=Gn(E);if(!F)continue;let O=E.kind==="cone"?9:85,Y=O/(O+Jt),pe=Math.max(0,F.pen-.008)*.82;_.s+=F.normal[0]*pe*Y,_.l+=F.normal[1]*pe*Y,E.ds=(E.ds||0)-F.normal[0]*pe*(1-Y),E.dl=(E.dl||0)-F.normal[1]*pe*(1-Y);let ie=_n(),ve=[it(E.s+(E.ds||0),_.s),E.l+(E.dl||0)-_.l],xe=H(Wt(ve,ie[0]),-Pt,Pt),Me=H(Wt(ve,ie[1]),-Zt,Zt),Te=[ie[0][0]*xe+ie[1][0]*Me,ie[0][1]*xe+ie[1][1]*Me],Re=$n(F.normal,Te,E);bi(Re,E.kind)}}_.speed=Math.hypot(_.vS,_.vL),_.velocityYaw=Math.atan2(_.vL,_.vS),_.lateralSpeed=_.vL},jn=function(a,l){if(!Bt.has(a)){let d=new I;l(d),Bt.set(a,d.finish())}return Bt.get(a)},Lt=function(a,l,d,m,S="#627596"){let A=[-l/2,m,-d/2],E=[l/2,m,-d/2],F=[l/2,m,d/2],O=[-l/2,m,d/2],Y=[-l/2,m+1.3,0],pe=[l/2,m+1.3,0];ei(a,A,E,pe,Y,S),ei(a,Y,pe,F,O,S),ei(a,A,Y,O,O,"#e9e1d2"),ei(a,E,F,pe,pe,"#e9e1d2");for(let ie=0;ie<9;ie++){let ve=-l/2+ie*l/8;Ye(a,[[ve,m,-d/2],[ve,m+1.3,0],[ve,m,d/2]],.025,"#8797b0")}re(a,[-l/2-.15,m+1.33,0],[l/2+.15,m+1.33,0],.08,S)},hi=function(a,l=0){let d=["#fff0db","#e9eafa","#f9dbe2","#e0f1ec"][l%4],m=["#7190b6","#9a82b3","#be8f98","#6c9a9a"][l%4];z(a,[0,2.65,0],[6,5.3,4.8],d,.08),z(a,[0,.12,0],[6.4,.24,5.1],"#b9b7c5",.035),Lt(a,6.7,5.8,5.3,m);for(let S of[-1,1])for(let A of[-1.9,0,1.9])for(let E of[1.4,3.85])z(a,[A,E,S*2.425],[1.2,1.35,.055],m,.025),z(a,[A,E,S*2.46],[1.05,1.18,.03],"#b8dfe8",.01,[0,0,0],.45),re(a,[A,E-.58,S*2.49],[A,E+.58,S*2.49],.025,"#f4f7fa"),z(a,[A,E-.72,S*2.55],[1.35,.12,.28],m,.015);z(a,[0,1.03,2.5],[1.04,2.05,.1],"#798c9c",.025),z(a,[.34,1.03,2.57],[.05,.12,.04],"#f7d5a4",.01);for(let S of[-1,1])z(a,[S*2.65,.48,2.9],[.65,.9,.7],"#b9c9b0",.035),Se(a,[S*2.65,1.14,2.9],[.6,.55,.5],"#88ba9a",!0)},Fi=function(a,l=0){let d=["#ef9ba5","#88bfc9","#a6a0d5"][l%3];z(a,[0,2,0],[7,4,4.8],"#fff1dd",.06),Lt(a,7.7,5.8,4,"#6f7d98");for(let m of[-2.05,0,2.05])z(a,[m,1.4,2.45],[1.8,2.15,.06],"#88afb9",.02),z(a,[m,1.45,2.5],[1.54,1.92,.025],"#c2e4e8",.015),z(a,[m,1.45,2.54],[.045,1.92,.02],"#edf6ee",.005);z(a,[0,3.03,2.65],[7.4,.7,.55],d,.035);for(let m=0;m<12;m++)z(a,[-3.35+m*.61,2.62,2.95],[.59,.24,1.15],m%2?"#fff6e3":d,.025,[.12,0,0]);for(let m of[-1,1])re(a,[m*3.3,0,3.35],[m*3.3,2.6,3.35],.055,d);for(let m of[-1.9,0,1.9])z(a,[m,3.04,2.96],[.45,.34,.025],"#fff6e6",.02),z(a,[m+.28,3.04,2.97],[.065,.22,.02],"#fff6e6",.01);for(let m of[-2.6,2.7]){z(a,[m,.35,3.35],[.75,.7,.65],"#cda883",.035);for(let S of[-.14,.14])z(a,[m,.52,3.35+S],[.6,.035,.035],"#ecd3a5",.005)}z(a,[1.4,.72,3.5],[.6,1.3,.12],"#7e8f9c",.03,[.08,0,0]);for(let m=0;m<4;m++)z(a,[1.4,.38+m*.2,3.58],[.38,.025,.025],"#e9f1e8",.005)},Xa=function(a,l=0){let d="#997786",m=["#f8c6dc","#f6b8d5","#ffdfeb"];re(a,[0,0,0],[l?.35:-.25,3.4,0],.18,d),re(a,[0,1.9,0],[-1.55,3.55,.2],.11,d),re(a,[.1,2.2,0],[1.55,3.8,-.25],.1,d);let A=[[-1.4,3.9,.1,1.5],[0,4.6,0,1.8],[1.6,4.05,-.2,1.5],[-.4,4,1.35,1.45],[.4,4.1,-1.3,1.5]];for(let E=0;E<A.length;E++){let[F,O,Y,pe]=A[E];Se(a,[F,O,Y],[pe,pe*.7,pe*.86],m[(E+l)%3],!0,.02),Se(a,[F+.2,O+.6,Y+.15],[pe*.6,pe*.28,pe*.52],"#ffe8f1",!0,.01)}for(let E=0;E<12;E++){let F=E*2.399,O=.6+E%4*.38;z(a,[Math.cos(F)*O,.045,Math.sin(F)*O],[.12,.015,.065],m[E%3],.012,[0,F,0])}},Rf=function(a){re(a,[0,0,0],[0,4.2,0],.14,"#9c8c84");for(let l=0;l<3;l++)Se(a,[(l-1)*.45,2.7+l*.82,0],[1.9-l*.35,.78,1.25-l*.16],["#7cb5aa","#8fc9b5","#a6d7ba"][l],!0,.02)},Pf=function(a){z(a,[0,.1,0],[.55,.2,.55],"#9da8b9",.025),re(a,[0,.15,0],[0,5.6,0],.065,"#7e8da8"),Ye(a,[[0,5.4,0],[0,5.8,.3],[0,5.8,1.3],[0,5.5,1.55]],.055,"#7e8da8"),z(a,[0,5.46,1.55],[.65,.16,.9],"#e5edee",.05),z(a,[0,5.36,1.55],[.5,.025,.72],"#fff0b3",.025,[0,0,0],.1)},If=function(a){for(let l of[-4,4])re(a,[l,0,0],[l*.94,6.3,0],.29,"#d98085"),re(a,[l,0,0],[l,.75,0],.31,"#66728c"),re(a,[l*.95,4.65,0],[l*.95,6.65,0],.32,"#dc8d91");z(a,[0,5,0],[9.8,.36,.48],"#d68183",.06),Ye(a,[[-5.65,6.55,0],[-4.5,6.3,0],[0,6.2,0],[4.5,6.3,0],[5.65,6.55,0]],.25,"#6d7089"),re(a,[0,5,0],[0,6.15,0],.13,"#d68183"),z(a,[0,5.65,.31],[.9,1.12,.15],"#55677e",.02),z(a,[0,5.65,.4],[.5,.69,.025],"#edcf9d",.01)},Lf=function(a){z(a,[0,.25,0],[13,.5,6.8],"#c6c4ce",.04);for(let l of[-5,0,5])for(let d of[-2.2,2.2])re(a,[l,.5,d],[l,4.1,d],.1,"#8fa2ad");Lt(a,14,7.8,4.1,"#73849c");for(let l=0;l<12;l++)z(a,[-5.8+l*1.05,.53,3],[.8,.025,.2],"#f6dfa0",.008);z(a,[0,3.2,2.6],[4,.9,.22],"#eef5ed",.04),z(a,[-1.55,3.2,2.75],[.45,.45,.04],"#8ec9c5",.03);for(let l=0;l<6;l++)z(a,[-.8+l*.45,3.2,2.75],[.19,.24,.03],"#8294a8",.01);for(let l of[-3.5,3.5]){z(a,[l,1.02,0],[2.7,.15,.65],"#c2a38c",.02);for(let d of[-.95,.95])re(a,[l+d,.5,0],[l+d,.95,0],.06,"#8c91a3")}},Df=function(a){for(let l of[-1.16,1.16])z(a,[0,.05,l],[20,.1,.09],"#81929f",.015);for(let l=0;l<20;l++)z(a,[-9.5+l,.005,0],[.23,.07,3.4],"#bea58d",.015);z(a,[0,1.65,0],[13,2.7,3],"#edf5dc",.25),z(a,[0,1.25,0],[13.15,.38,3.06],"#83bcb6",.04),z(a,[0,3.08,0],[12.5,.25,3.1],"#b3bfc6",.12);for(let l of[-1,1]){for(let d=0;d<7;d++){let m=-5.2+d*1.73;z(a,[m,2,l*1.52],[1.35,1.05,.06],"#769ba8",.04),z(a,[m,2.1,l*1.56],[1.16,.8,.025],"#bbdfe6",.03)}for(let d of[-4.3,4.3])Se(a,[d,.45,l*1.16],[.49,.49,.13],"#596980",!0),z(a,[d,.48,l*1.31],[.19,.19,.03],"#bfccd1",.03)}for(let l of[-6.55,6.55]){z(a,[l,2.1,0],[.06,1.05,2.1],"#acd2dd",.05);for(let d of[-.9,.9])Se(a,[l,1.25,d],[.05,.13,.13],"#fff4ba",!0)}Ye(a,[[-1.5,3.25,0],[0,4.3,0],[1.5,3.25,0]],.055,"#718699"),re(a,[-.65,4.3,0],[.65,4.3,0],.07,"#718699")},Nf=function(a){z(a,[0,4.8,0],[24,9.6,7],"#f4eedf",.06),Lt(a,25.2,8.2,9.6,"#8095ad"),z(a,[0,6.1,3.7],[4.8,12.2,2],"#e6eaf0",.06),Lt(a,5.4,3.1,12.2,"#879bb4");for(let l of[-10,-7,-4,4,7,10])for(let d of[2,4.8,7.6])z(a,[l,d,3.56],[1.9,1.65,.06],"#8da6b8",.025),z(a,[l,d,3.61],[1.64,1.41,.025],"#c7e9eb",.015),z(a,[l,d,3.65],[.045,1.41,.025],"#f6f5ed",.005);z(a,[0,1.5,4.75],[3.2,2.8,.06],"#9cbdcd",.025);for(let l of[-.75,.75])z(a,[l,1.5,4.81],[.035,2.7,.025],"#f7eee4",.005);Se(a,[0,10.2,4.77],[.9,.9,.06],"#fff7df",!0,.02),a.add(ut(.89,.045,28,7),ce(0,10.2,4.84),"#7f91a8",.08),re(a,[0,10.2,4.91],[0,10.8,4.91],.03,"#697e98"),re(a,[0,10.2,4.92],[.43,10.4,4.92],.03,"#697e98"),z(a,[0,-.02,7.5],[23,.1,12],"#e2e1db",.03);for(let l of[-5.5,5.5])z(a,[l,1.5,12.1],[.8,3,.8],"#e8dbc7",.04),z(a,[l,3.06,12.1],[1,.2,1],"#a1acb9",.025);for(let l of[-1,1])for(let d=0;d<8;d++){let m=l*(6.4+d*.65);re(a,[m,0,12],[m,1.8,12],.025,"#9cacc0")}for(let l of[-1,1])re(a,[l*6,1.65,12],[l*11.5,1.65,12],.035,"#9cacc0")},Uf=function(a){z(a,[0,1.25,0],[1.2,2.5,.82],"#f3a4ad",.09),z(a,[-.13,1.55,.43],[.82,1.35,.05],"#b6e0e9",.03);for(let l=0;l<3;l++)for(let d=0;d<3;d++)z(a,[-.4+d*.27,1.12+l*.4,.48],[.13,.23,.06],["#f9e2ad","#a3d2cc","#d3c5ec"][d],.025),z(a,[-.4+d*.27,.94+l*.4,.49],[.1,.04,.02],"#fff0c7",.005);z(a,[0,.47,.44],[.75,.24,.055],"#738698",.03),z(a,[.43,1.3,.45],[.13,.18,.04],"#fff0b8",.02)},Ff=function(a){re(a,[0,0,0],[0,2.6,0],.08,"#8c7e8a"),z(a,[0,2.55,0],[.55,.16,.55],"#877d92",.025),z(a,[0,2.22,0],[.41,.52,.41],"#ffe4ad",.04),z(a,[0,1.93,0],[.52,.12,.52],"#a19caa",.025);for(let l of[-.2,.2])for(let d of[-.2,.2])re(a,[l,1.98,d],[l,2.49,d],.018,"#927f8d")},Of=function(a,l){let d=l==="left"?-1:1;re(a,[0,0,0],[0,2.4,0],.055,"#8499b0"),z(a,[0,2.28,0],[2.9,.78,.18],"#f3eacb",.04);for(let m=0;m<3;m++){let S=-.86+m*.86;re(a,[S-d*.25,2.02,.12],[S+d*.15,2.28,.12],.055,"#bd8faf"),re(a,[S+d*.15,2.28,.12],[S-d*.25,2.54,.12],.055,"#bd8faf")}},Bf=function(a){return jn(a,l=>{a.startsWith("house")?hi(l,Number(a.slice(-1))):a.startsWith("shop")?Fi(l,Number(a.slice(-1))):a.startsWith("cherry")?Xa(l,Number(a.slice(-1))):a==="pine"?Rf(l):a==="lamp"?Pf(l):a==="torii"?If(l):a==="station"?Lf(l):a==="tram"?Df(l):a==="vending"?Uf(l):a==="school"?Nf(l):a==="lantern"?Ff(l):(a==="left"||a==="right")&&Of(l,a)})},kf=function(a){let l=(a%Z+Z)%Z/Z,d=Ae().sectors,m=d[0];for(let S of d)l>=S.at&&(m=S);return m},zf=function(a,l,d){let m=new K,S=a*40,A=(O,Y,pe,ie=1,ve=0)=>{if(tt==="circuit"&&Y>=Z||!It(Y,pe))return null;let xe=xt(Y),Me=wt(Y,pe,-.05),Te=-xe.h+(pe>0?L:0)+ve,Re=new K(Bf(O),te(P(Me,l),[ie,ie,ie],[0,Te,0]));return m.add(Re),Re},E=tt==="circuit"&&Ae().biome===1;for(let O of[-1,1]){A("lamp",S+7,O*9.65);for(let Y=0;Y<2;Y++)A("cherry"+(a+Y)%2,S+10+Y*20,O*(E?11.3:12.5),E?1.12:.92);(a%2===0||E)&&a%3!==1&&!(a===2&&O<0)&&!(E&&a===0&&O>0)&&A("house"+(a+(O>0?1:0))%4,S+19,O*(16.5+d()*2),.9+d()*.25),a%3===1&&!(a===2&&O<0)&&A("shop"+a%3,S+18,O*17.5),a%5===0&&A("vending",S+9,O*10.1),a%3===0&&A("pine",S+32,O*22,1.5)}let F=pn(xt(S+37).h-xt(S+7).h);if(Math.abs(F)>.25&&A(F>0?"right":"left",S+5,(F>0?-1:1)*9.4,1,F>0?-L/2:L/2),tt==="circuit"){let O=(S+20)/Z;if(E&&a===0&&A("school",S+21,28),a===2&&(A("station",S+17,-20,1),A("tram",S+17,-27,1),A("vending",S+9,-12.8)),O>.66&&O<.74&&a%2===0){A("torii",S+22,-16);for(let Y of[-1,1])A("lantern",S+9,Y*10)}}return m},Gf=function(){ui&&ui.mesh.dispose(),ui&&(ui.mesh.dispose(),ui=null);let a=new I,l=ee,d=[(l.minX+l.maxX)*.5,0,(l.minZ+l.maxZ)*.5],m=l.maxX-l.minX,S=l.maxZ-l.minZ;if(Ae().biome===0)for(let[E,F,O,Y]of[[m*.82,S*.89,-.43,"#eadfce"],[m*.78,S*.85,-.3,"#c7d9b4"]]){let pe=[d[0],O,d[2]],ie=[0,1,0],ve=[];for(let xe=0;xe<=96;xe++){let Me=xe*k/96,Te=1+.025*Math.sin(Me*5);pe.push(d[0]+Math.cos(Me)*E*Te,O,d[2]+Math.sin(Me)*F*Te),ie.push(0,1,0),xe&&ve.push(0,xe,xe+1)}a.add(Ue(pe,ie,ve),mt,Y,.02)}for(let E=0;E<12;E++){let F=E*k/12,O=320+E%3*36,Y=d[0]+Math.cos(F)*O,pe=d[2]+Math.sin(F)*O,ie=40+E%4*18;Le(a,[Y,ie*.5-5,pe],[70,ie,60],["#b5c4de","#a6bfd8","#c6cfdf"][E%3],[0,F,0],!0),E%3===0&&Le(a,[Y,ie*.85-5,pe],[25,ie*.3,22],"#e5e5f0",[0,F,0],!0)}for(let E=0;E<10;E++){let F=E*k/10,O=[d[0]+Math.cos(F)*260,57+E%3*14,d[2]+Math.sin(F)*250];for(let Y=0;Y<4;Y++)Se(a,C(O,[(Y-1.5)*12,Math.sin(Y*2)*4,0]),[17,7+Y%2*3,10],"#fff5f3",!0,.01)}ui=new K(a.finish()),ui.shadow=!1,nu=Kt,fc=Array.from({length:24},(E,F)=>({phase:F*2.399,node:new K(Vf)}));for(let E of fc)E.node.shadow=!1},Hf=function(a,l){if(tt!=="circuit")return;(nu!==Kt||!ui)&&Gf(),ui.local=ce(-a[0],-a[1],-a[2]),Q.add(ui);let d=xt(_.s);for(let m of fc){let S=m.phase,A=(S*13+l*1.7)%55-10,E=Math.sin(S*7)*10+Math.sin(l*.6+S)*2,F=1+((S*2-l*.65)%7+7)%7,O=C(wt(_.s+A,E,F),[Math.sin(l+S)*.25,0,0]);m.node.local=te(P(O,a),[1,1,1],[l*.8+S,S,l]),Q.add(m.node)}},qa=function(){if(!_t)try{let ve=function(Re,ue){let le=a.createBufferSource(),Ie=a.createBiquadFilter(),Ne=a.createGain();return le.buffer=pe,le.loop=!0,Ie.type=Re,Ie.frequency.value=ue,Ne.gain.value=0,le.connect(Ie),Ie.connect(Ne),Ne.connect(l),le.start(),{source:le,filter:Ie,gain:Ne}},a=new(window.AudioContext||window.webkitAudioContext),l=a.createGain(),d=a.createDynamicsCompressor();l.gain.value=Rn?.48:0,l.connect(d),d.threshold.value=-18,d.ratio.value=4,d.connect(a.destination);let m=a.createGain(),S=a.createBiquadFilter();S.type="lowpass",S.frequency.value=1e3,m.gain.value=0,S.connect(m),m.connect(l);let A=a.createOscillator(),E=a.createOscillator(),F=a.createOscillator(),O=a.createGain(),Y=a.createGain();Y.gain.value=1,Y.connect(S),A.type="sawtooth",E.type="triangle",F.type="sine",E.detune.value=9,O.gain.value=.6;for(let Re of[A,E])Re.connect(Y),Re.start();F.connect(O),O.connect(S),F.start();let pe=a.createBuffer(1,a.sampleRate*2,a.sampleRate),ie=pe.getChannelData(0);for(let Re=0;Re<ie.length;Re++)ie[Re]=Math.random()*2-1;let xe=ve("lowpass",1100),Me=ve("bandpass",1800),Te=ve("highpass",2200);Me.filter.Q.value=3.5,_t={ctx:a,master:l,engine1:A,engine2:E,sub:F,engineGain:m,engineFilter:S,synthGain:Y,subGain:O,noise:pe,wind:xe,tire:Me,turbo:Te,oldSpeed:0,oldBoost:!1,gear:0},typeof r<"u"&&r.profile==="sample-v1"&&(_t.driving=qf(a,l,S,r.urls),_t.driving.load()),Object.keys(c).length&&(_t.rail=zu(a,l,c),_t.rail.load())}catch{}},Oi=function(a=620,l=.1){if(!Rn||!_t||_t.ctx.state!=="running")return;let{ctx:d,master:m}=_t,S=d.createOscillator(),A=d.createGain();S.type="sine",S.frequency.setValueAtTime(a,d.currentTime),S.frequency.exponentialRampToValueAtTime(a*1.28,d.currentTime+l),A.gain.setValueAtTime(.07,d.currentTime),A.gain.exponentialRampToValueAtTime(.001,d.currentTime+l),S.connect(A),A.connect(m),S.start(),S.stop(d.currentTime+l+.02)},Wf=function(a,l){if(!Rn||!_t||_t.ctx.state!=="running"||a==="rail"&&_t.rail?.play(l))return;let{ctx:d,master:m,noise:S}=_t,A=d.createBufferSource(),E=d.createBiquadFilter(),F=d.createGain(),O=d.currentTime;if(A.buffer=S,E.type="bandpass",E.frequency.value=a==="rail"?1400:a==="cone"?450:700,E.Q.value=a==="rail"?1.5:.6,F.gain.setValueAtTime(Math.min(.3,.035+l*.018),O),F.gain.exponentialRampToValueAtTime(.001,O+.16),A.connect(E),E.connect(F),F.connect(m),A.start(),A.stop(O+.2),a==="rail"){let Y=d.createOscillator(),pe=d.createGain();Y.type="triangle",Y.frequency.setValueAtTime(330,O),Y.frequency.exponentialRampToValueAtTime(140,O+.15),pe.gain.setValueAtTime(.07,O),pe.gain.exponentialRampToValueAtTime(.001,O+.2),Y.connect(pe),pe.connect(m),Y.start(),Y.stop(O+.21)}},Xf=function(){if(!_t)return;let a=_t,l=a.ctx.currentTime,d=rt==="running",m=_.speed,S=Math.min(5,Math.floor(m/9)),A=48+m*2.2+m%9*5;(!d||!Rn||vn.sfxVolume<=0)&&a.rail?.stop(),a.master.gain.setTargetAtTime(Rn?.48*vn.sfxVolume:0,l,.05);let E=d?.012+Math.min(.04,m*7e-4)+(bt.gas?.013:0):0;a.engineGain.gain.setTargetAtTime(E,l,.07),a.engineFilter.frequency.setTargetAtTime(550+m*25+(bt.gas?500:0),l,.12);let F=S!==a.gear?.8:1;a.gear=S,a.engine1.frequency.setTargetAtTime(A*F,l,.045),a.engine2.frequency.setTargetAtTime(A*1.5*F,l,.065),a.sub.frequency.setTargetAtTime(A*.5,l,.07),a.wind.gain.gain.setTargetAtTime(d?Math.pow(m/65,2)*.12:0,l,.15),a.wind.filter.frequency.setTargetAtTime(700+m*25,l,.12);let O=Math.abs(pn(_.yaw-_.velocityYaw)),Y=bt.brake&&m>5,pe=_.jump<.1?Math.min(1,(_.drifting?O*1.8:Math.max(0,O-.18)*2)+(Y?.55:0)):0,ie=a.driving?.update({running:d&&Rn&&vn.sfxVolume>0,rpm:A,gas:bt.gas,scrub:pe})??{};a.synthGain?.gain.setTargetAtTime(ie.engine?0:1,l,.13),a.subGain?.gain.setTargetAtTime(ie.engine?.096:.6,l,.13),a.tire.gain.gain.setTargetAtTime(d&&!ie.tire?pe*.075:0,l,.045),a.tire.filter.frequency.setTargetAtTime(1300+m*24+Math.sin(Xs*40)*90,l,.05),a.turbo.gain.gain.setTargetAtTime(d?_.boostBlend*.075:0,l,.1),a.turbo.filter.frequency.setTargetAtTime(1600+_.boostBlend*2400,l,.12),d&&_.boostActive&&!a.oldBoost&&Oi(340,.17),a.oldBoost=_.boostActive,a.oldSpeed=m},Vs=function(a){if(!Rn||!_t||_t.ctx.state!=="running")return;let{ctx:l,master:d,noise:m}=_t,S=l.currentTime,A=l.createBufferSource(),E=l.createBiquadFilter(),F=l.createGain(),O=a==="nitro"||a==="combo",Y=O?.48:a==="drift"?.12:.23;A.buffer=m,E.type=a==="land"?"lowpass":"bandpass",E.Q.value=.75,E.frequency.setValueAtTime(a==="land"?300:O?650:1500,S),E.frequency.exponentialRampToValueAtTime(O?5500:700,S+Y),F.gain.setValueAtTime(.001,S),F.gain.linearRampToValueAtTime(O?.19:.1,S+.025),F.gain.exponentialRampToValueAtTime(.001,S+Y),A.connect(E),E.connect(F),F.connect(d),A.start(),A.stop(S+Y+.03),(a==="combo"||a==="small")&&Oi(a==="combo"?1080:820,.08)},qf=function(a,l,d,m,{fetchImpl:S=globalThis.fetch,timeoutMs:A=5e3}={}){let E={},F={engine:"idle",tire:"idle"},O=new Set,Y=null,pe=!1;function ie(){return Y||(Y=Promise.all(["engine","tire"].map(async Me=>{F[Me]="loading";let Te=new AbortController;O.add(Te);let Re;try{let ue=await Promise.race([(async()=>{let Ne=m[Me];if(typeof Ne!="string"||!Ne.startsWith("/assets/impact-audio/driving-"))throw Error("Missing driving asset");let Ze=await S(Ne,{signal:Te.signal});if(!Ze.ok)throw Error("Driving HTTP");let we=await Ze.arrayBuffer();if(we.byteLength>35e4)throw Error("Driving size");let kt=await a.decodeAudioData(we);if(kt.numberOfChannels!==1||!(kt.duration>.1&&kt.duration<3.1))throw Error("Driving format");return kt})(),new Promise((Ne,Ze)=>{Re=setTimeout(()=>{Te.abort(),Ze(Error("Driving timeout"))},A)})]);if(pe)return;let le=a.createBufferSource(),Ie=a.createGain();if(le.buffer=ue,le.loop=!0,Ie.gain.value=0,le.connect(Ie),Me==="engine")Ie.connect(d);else{let Ne=a.createBiquadFilter();Ne.type="lowpass",Ne.frequency.value=3500,Ie.connect(Ne),Ne.connect(l),E.tireFilter=Ne}le.start(),E[Me]={source:le,gain:Ie},F[Me]="ready"}catch{pe||(F[Me]="fallback")}finally{clearTimeout(Re),O.delete(Te)}})),Y)}function ve({running:Me,rpm:Te,gas:Re,scrub:ue}){let le=a.currentTime;return E.engine&&(E.engine.source.playbackRate.setTargetAtTime(Math.max(.65,Math.min(2,Te/120))*(Re?1:.85),le,.09),E.engine.gain.gain.setTargetAtTime(Me?1:0,le,.13)),E.tire&&E.tire.gain.gain.setTargetAtTime(Me?ue*.075:0,le,.045),{engine:!!E.engine,tire:!!E.tire}}function xe(){pe=!0;for(let Me of O)Me.abort();for(let Me of["engine","tire"]){let Te=E[Me];Te&&(Te.source.stop(),Te.source.disconnect(),Te.gain.disconnect(),delete E[Me])}E.tireFilter?.disconnect()}return{load:ie,update:ve,dispose:xe,status:()=>({states:{...F},disposed:pe})}},iu=function(a){if(!s){if(_.nitro>=2){_.energy=Math.min(99,_.energy+a);return}for(_.energy+=a;_.energy>=100&&_.nitro<2;)_.energy-=100,_.nitro++,xn("NITRO READY","\u6C2E\u6C14\u5DF2\u88C5\u74F6 \xB7 E \u91CA\u653E 3.2 \u79D2",1.2),Oi(1050,.09)}},su=function(a){_.jetHistory.push({kind:a,t:Wn}),_.jetHistory=_.jetHistory.filter(d=>Wn-d.t<2.5).slice(-3);let l=_.jetHistory.map(d=>d.kind).join("");(l==="CWW"||l==="WCW")&&(_.combo=l,_.comboTimer=1.3,_.mini=Math.max(_.mini,.88),l==="WCW"&&(_.nitroTime+=.35),xn(l+" \u55B7",l==="CWW"?"\u6C2E\u6C14 \u2192 \u5C0F\u55B7 \u2192 \u5C0F\u55B7 \xB7 \u9AD8\u901F\u51FA\u5F2F":"\u5C0F\u55B7 \u2192 \u6C2E\u6C14 \u2192 \u5C0F\u55B7 \xB7 \u5EF6\u957F\u55B7\u5C04",1.35),Vs("combo"))},Jf=function(){s||rt!=="running"||_.nitro<1||_.nitroTime>0||(_.nitro--,_.nitroTime=3.2,xn("NITRO","\u6C2E\u6C14\u55B7\u5C04 \xB7 3.2 \u79D2",.8),su("C"),Vs("nitro"))},Zf=function(){s||rt!=="running"||_.smallJets<1||_.smallWindow<=0||_.jetCooldown>0||(_.smallJets--,_.jetCooldown=.18,_.mini=.72,_.smallWindow=_.smallJets?1.15:0,_.smallCount++,su("W"),Vs("small"),_.comboTimer<=0&&xn(_.smallCount>1?"DOUBLE BOOST":"MINI BOOST",_.smallCount>1?"\u53CC\u55B7 \xB7 \u8FDE\u7EED\u51FA\u5F2F\u52A0\u901F":"\u5C0F\u55B7 \xB7 \u53CA\u65F6\u63A5\u4E0B\u4E00\u55B7",.75))},pc=function(a=2,l="\u5C0F\u55B7\u5DF2\u5C31\u7EEA"){s||(_.smallJets=Math.max(_.smallJets,a),_.smallWindow=1.5,_.smallCount=0,xn(l,o?"\u70B9 \u7A7A\u683C / Q \u4E3B\u52A8\u5C0F\u55B7 \xB7 \u8FDE\u70B9\u4E24\u6B21\u53CC\u55B7":"\u70B9 \u7A7A\u683C / Q\uFF0C\u6216\u91CD\u65B0\u6309 W \xB7 \u8FDE\u70B9\u4E24\u6B21\u53CC\u55B7",1.1),Oi(760,.06))},mc=function(){s||_.driftRewarded||_.driftCharge<.1||_.driftDuration<.11||(_.driftRewarded=!0,pc(_.driftCharge>.35?2:1,_.driftCharge>.35?"\u53CC\u55B7\u5DF2\u5C31\u7EEA":"\u5C0F\u55B7\u5DF2\u5C31\u7EEA"))},Ya=function(a=!0){_.drifting&&(a&&mc(),_.drifting=!1,_.driftPhase="exit",_.exitTime=.45,_.exitFromGrip=_.tireGrip||3.6,_.exitFromLimit=_.tireLimit||38,_.driftCharge=0,_.driftDuration=0,_.driftSide=0,_.driftReleasing=!1)},Kf=function(a){s||(_.drifting=!0,_.driftSide=a,_.driftCharge=0,_.driftDuration=0,_.driftPhase="entry",_.driftRewarded=!1,_.driftReleasing=!1,_.releaseAge=0,_.driftLatch=!0,_.driftCooldown=.16,_.exitTime=0,_.turnRate+=a*.38,_.gripRecovery=0,Vs("drift"))},ru=function(a,l,d=xt(a.s)){let m=H(1-d.curv*a.l,.45,1.55),S=a.vS/m*l;a.s=Math.max(-8,a.s+S),a.l+=a.vL*l;let A=xt(a.s),E=pn(A.h-d.h),F=a.vS,O=a.vL;return a.vS=F*Math.cos(E)+O*Math.sin(E),a.vL=-F*Math.sin(E)+O*Math.cos(E),a.yaw=pn(a.yaw-E),S},$f=function(a){_.prevPose={s:_.s,l:_.l,yaw:_.yaw,jump:_.jump};let l=xt(_.s),d=_.s,m=typeof Ai=="number"?Ai:(bt.right?1:0)-(bt.left?1:0);_.speed=Math.hypot(_.vS,_.vL);for(let Me of["pad","mini","nitroTime","smallWindow","jetCooldown","comboTimer","exitTime","driftCooldown","driftBuffer","lastSteerTime","jetInputBuffer","boostInputBuffer"])_[Me]=Math.max(0,_[Me]-a);_.smallWindow===0&&(_.smallJets=0),qs=$(qs,m,1-Math.exp(-a*(m?26:20)));let S=Hn.drift>0||bt.drift&&!_.prevDrift,A=m&&m!==_.prevSteer;Hn.drift=0,bt.drift||(_.driftLatch=!1),S&&(_.driftBuffer=.26),m&&(_.lastSteer=Math.sign(m),_.lastSteerTime=.2);let E=_.jump<.12,F=_.speed>.4?Math.atan2(_.vL,_.vS):_.yaw,O=pn(_.yaw-F),Y=(Math.abs(m)>.12?Math.sign(m):0)||(_.lastSteerTime>0?_.lastSteer:Math.abs(O)>.07?Math.sign(O):0);if(!s&&!_.drifting&&_.driftCooldown===0&&E&&_.speed>5&&Y&&(bt.drift&&(!_.driftLatch||A&&Y!==_.lastDriftSide)||_.driftBuffer>0)?(Kf(Y),_.lastDriftSide=Y,_.driftBuffer=0):!s&&_.drifting&&S&&_.driftDuration>.18&&(m*_.driftSide<0||_.driftReleasing)&&(mc(),_.driftReleasing=!0,_.releaseAge=Math.max(.18,_.releaseAge),_.driftBuffer=0),!s&&_.drifting){_.driftDuration+=a;let Me=m*_.driftSide<0;_.speed<3.5||!E?Ya(!1):(!bt.drift&&_.driftDuration>.14&&(_.driftReleasing=!0),_.driftReleasing&&(_.releaseAge+=a),_.driftPhase=_.driftReleasing?"release":Me?"counter":_.driftDuration<.18?"entry":"hold",(Me||_.driftReleasing)&&Math.abs(O)<.75&&mc(),(_.driftReleasing&&(_.releaseAge>.55||Math.abs(O)<.065&&_.releaseAge>.16)||Me&&Math.abs(O)<.075&&_.driftDuration>.22)&&Ya(!0))}(Hn.boost>0||bt.boost&&!_.prevBoost)&&(_.boostInputBuffer=.15),(Hn.small>0||bt.small&&!_.prevSmall||!o&&bt.gas&&!_.prevGas)&&(_.jetInputBuffer=.15),Hn.boost=0,Hn.small=0,_.boostInputBuffer>0&&_.nitro>0&&_.nitroTime<=0&&(Jf(),_.boostInputBuffer=0),_.jetInputBuffer>0&&_.smallJets>0&&_.jetCooldown<=0&&(Zf(),_.jetInputBuffer=0);let pe=Yf.step(_,{steer:typeof Ai=="number"?Ai:m,gas:bt.gas||sn.autoGas&&!bt.brake||Vi&&!bt.brake,brake:bt.brake},a,{sensitivity:sn.sensitivity,arcadeCandidate:o,road:s});qs=_.steering,_.boostActive=_.nitroTime>0,_.boostBlend=$(_.boostBlend,pe.boost?1:0,1-Math.exp(-a*7));let ie=ru(_,a,l),ve=_.jump>0;(ve||_.vy>0)&&(_.vy-=17*a,_.jump=Math.max(0,_.jump+_.vy*a),_.jump<=0&&(_.vy=0,ve&&(pc(1,"\u843D\u5730\u55B7\u5DF2\u5C31\u7EEA"),Vs("land")))),Nt(a),yc-=_.vS*a/.4,Wn+=a,Xs+=a,s||(_.score+=Math.max(0,ie)*.85);let xe=Math.abs(pn(_.yaw-_.velocityYaw));if(!s&&_.drifting&&xe>.035&&_.speed>5&&Math.abs(_.l)<7){let Me=a*H((xe+.025)*_.speed*.11,0,3);_.driftCharge+=Me,iu(Me*42),_.score+=a*35}eo=_.drifting,(bt.gas||sn.autoGas)&&!bt.brake&&_.speed<.7&&Math.abs(_.l)>5.8?_.stuckTime+=a:_.stuckTime=0,_.stuckTime>1.6&&bc(!0);for(let Me of nn.values())for(let Te of Me.entities){if(Te.kind==="cone"||Te.kind==="barrier")continue;let Re=Te.s;tt==="circuit"&&(Re+=Math.round((_.s-Re)/Z)*Z);let ue=tt==="circuit"?Math.max(0,Math.floor(Re/Z)):0;Te.hitLap===ue||Re<Math.min(d,_.s)-1.4||Re>Math.max(d,_.s)+1.4||Math.abs(_.l-Te.l)>Te.width||(Te.kind==="coin"?(Te.hitLap=ue,Te.hit=!0,_.coins++,iu(3),_.score+=50,Oi(700+_.coins%5*80,.04)):Te.kind==="pad"?(Te.hitLap=ue,_.pad=1.55,xn("BOOST STRIP","\u52A0\u901F\u5E26 \xB7 \u4FDD\u6301\u8DEF\u7EBF",1),Vs("nitro")):Te.kind==="ramp"&&_.vS>7&&(Te.hitLap=ue,_.vy=8,_.jump=.1,_.score+=120,pc(1,"\u7A7A\u55B7\u5DF2\u5C31\u7EEA")))}!s&&_.s>=_.checkpoint&&(_.checkpoint+=500,_.score+=500,xn("CHECKPOINT",Math.floor(_.s/500)*500+" m",1)),_.prevSteer=m,_.prevDrift=bt.drift,_.prevBoost=bt.boost,_.prevSmall=bt.small,_.prevGas=bt.gas,tp(a),uu(),xp(a),tt==="circuit"&&_.s>=ze()&&Sc()},Gs=function(){let a={...bt};for(let l in bt)bt[l]=!1;for(let l of Ja)no[l]&&(bt[no[l]]=!0);for(let l of Za.values())bt[l]=!0;for(let l in Hn)bt[l]&&!a[l]&&Hn[l]++},lu=function(){return $a=Math.imul($a,1664525)+1013904223>>>0,$a/4294967296},ep=function(a){let l=(Math.imul(a+419,2654435761)^Ws)>>>0;return()=>(l=Math.imul(l,1664525)+1013904223>>>0,l/4294967296)},cu=function(a){return 1.7*Math.sin(a*.005)+.65*Math.sin(a*.017)},Mc=function(a){if(tt!=="circuit")for(;Qn[Qn.length-1].s<a+8;){let l=Qn[Qn.length-1],d=l.s+4;d>vc&&(xc=-L/2+(lu()-.5)*2.15,vc=d+90+lu()*130);let m=H((xc-l.h)*.022,-.0175,.0175);ja=$(ja,m,.15);let S=l.h+ja*4;Qn.push({s:d,p:[l.p[0]+Math.cos((S+l.h)*.5)*4,cu(d),l.p[2]+Math.sin((S+l.h)*.5)*4],h:S})}},xt=function(a){if(tt==="circuit")return $e(a);Mc(a);let l=Math.floor((a+80)/4),d=H(l-Fr,0,Qn.length-2),m=Qn[d],S=Qn[d+1],A=H((a-m.s)/4,0,1),E=$(m.h,S.h,A);return{p:m.p.map((O,Y)=>$(O,S.p[Y],A)),h:E,T:[Math.cos(E),0,Math.sin(E)],R:[-Math.sin(E),0,Math.cos(E)],curv:(S.h-m.h)/4,slope:(S.p[1]-m.p[1])/4}},wt=function(a,l=0,d=0){let m=xt(a);return C(C(m.p,B(m.R,l)),[0,d,0])},ei=function(a,l,d,m,S,A){let E=q(D(P(d,l),P(S,l)));E[1]<0&&(E=B(E,-1)),a.add(Ue([...l,...d,...m,...S],[...E,...E,...E,...E],[0,1,2,0,2,3]),mt,A,.06)},hu=function(a){let l=a*40,d=xt(l).p,m=new I,S=ep(a),A=tt==="circuit"?gc[Ae().biome]:gc[(Math.floor(Math.max(0,l)/1e3)%3+3)%3],E=ie=>P(ie,d);for(let ie=0;ie<10;ie++){let ve=l+ie*4;if(tt==="circuit"&&ve>=Z)break;let xe=xt(ve),Me=xt(tt==="circuit"?Math.min(ve+4,Z):ve+4),Te=(Re,ue,le)=>E(C(C(Re.p,B(Re.R,ue)),[0,le,0]));ei(m,Te(xe,-7,.04),Te(xe,7,.04),Te(Me,7,.04),Te(Me,-7,.04),"#69728e");for(let Re of[-1,1])ei(m,Te(xe,Re*7,.06),Te(xe,Re*7.65,.06),Te(Me,Re*7.65,.06),Te(Me,Re*7,.06),(a*10+ie)%2?"#d1b5e0":"#f4eced"),ei(m,Te(xe,Re*7.65,-.02),Te(xe,Re*(tt==="circuit"?11:64),-.08),Te(Me,Re*(tt==="circuit"?11:64),-.08),Te(Me,Re*7.65,-.02),A.ground);if(tt==="circuit")for(let Re of[-1,1])ei(m,Te(xe,Re*8.6,.06),Te(xe,Re*11,.06),Te(Me,Re*11,.06),Te(Me,Re*8.6,.06),"#d9d9e4"),ei(m,Te(xe,Re*11,.06),Te(xe,Re*11,-1.25-xe.p[1]),Te(Me,Re*11,-1.25-Me.p[1]),Te(Me,Re*11,.06),"#b5bbcb");if(tt==="circuit")for(let Re of[-1,1])It(ve+2,Re*20)&&(ei(m,Te(xe,Re*11,-.12),Te(xe,Re*28,-.12),Te(Me,Re*28,-.12),Te(Me,Re*11,-.12),A.ground),ei(m,Te(xe,Re*28,-.12),Te(xe,Re*28,-1.25-xe.p[1]),Te(Me,Re*28,-1.25-Me.p[1]),Te(Me,Re*28,-.12),"#bdc4c7"));if(ie%3===0)for(let Re of[-2.33,2.33]){let ue=wt(ve+1.5,Re,.061);m.add(Et(2.2,.015,.07,.004),te(E(ue),[1,1,1],[0,-xe.h,0]),"#e0e4e8")}}for(let ie of[-1,1]){let ve=Array.from({length:11},(xe,Me)=>E(wt(l+Me*4,ie*8.1,.72)));Ye(m,ve,.07,"#b7c6d9"),Ye(m,Array.from({length:11},(xe,Me)=>E(wt(l+Me*4,ie*8.1,.4))),.045,"#c7d5e2");for(let xe=0;xe<5;xe++){let Me=l+3+xe*8;if(tt==="circuit"&&Me>Z)break;let Te=E(wt(Me,ie*8.1,0));re(m,Te,C(Te,[0,.84,0]),.055,"#9caec2"),z(m,C(Te,[0,.75,0]),[.12,.15,.19],xe%2?"#f7bbcf":"#fff1b9",.02)}}let F=[],O=[];function Y(ie,ve,xe){if(s&&["coin","pad","ramp"].includes(ie)||tt==="circuit"&&ve>Z-20)return;if(o&&tt==="circuit"&&Kt==="coast-reborn"&&ie==="pad"){if(ve===334||ve===494||ve===654)return;ve===174&&(xe=4.2)}let Me=ie==="coin"?Ha:ie==="pad"?Dr:ie==="ramp"?Wa:ie==="cone"?hc:Ga;if(s&&(ie==="cone"||ie==="barrier")){let Te=(Math.sign(xe)||1)*12,Re=xt(ve),ue=new K(Me);ue.local=te(E(wt(ve,Te,.08)),[1,1,1],[0,-Re.h,Math.atan(Re.slope)]),O.push({kind:ie,s:ve,l:Te,node:ue});return}F.push({kind:ie,s:ve,l:xe,node:new K(Me),hit:!1,width:ie==="barrier"?1.5:ie==="cone"?.85:ie==="coin"?1.12:1.9})}if(a>=2){let ie=Math.floor(S()*3),ve=[-4.2,0,4.2],xe=tt==="circuit"?Math.abs(xt(l+22).curv)<.013?.42:.12:a<7?.55:.85;if(S()<xe){let Me=(ie+1+Math.floor(S()*2))%3;Y(S()<.75?"cone":"barrier",l+22,tt==="circuit"?Me===1?-5.5:Math.sign(ve[Me])*5.5:ve[Me]),tt==="endless"&&a>10&&S()<.28&&Y("cone",l+22,ve[3-ie-Me])}for(let Me=0;Me<4;Me++)Y("coin",l+7+Me*7,ve[ie]);a%4===0?Y("pad",l+14,ve[ie]):a>8&&a%7===0&&Y("ramp",l+14,ve[ie])}if(a===0){for(let xe=0;xe<12;xe++){let Me=wt(0,-7+xe*1.16,.075),Te=xt(0);m.add(Et(.9,.015,1.12,.003),te(E(Me),[1,1,1],[0,-Te.h,0]),xe%2?"#e8e7ed":"#424b66")}for(let xe of[-1,1]){let Me=E(wt(0,xe*7.75,0));re(m,Me,C(Me,[0,5,0]),.12,fe)}let ie=E(wt(0,-7.75,5)),ve=E(wt(0,7.75,5));re(m,ie,ve,.16,fe);for(let xe=0;xe<7;xe++)Se(m,E(wt(0,-4.5+xe*1.5,5)),[.24,.24,.24],xe%2?"#f9d997":"#bfd9f4",!0)}let pe=new K(m.finish());pe.add(zf(a,d,S));for(let ie of O)pe.add(ie.node);return{k:a,origin:d,node:pe,entities:F,roadsideProps:O}},uu=function(){if(tt==="circuit"){let m=Math.ceil(Z/40);for(let S=0;S<m;S++)nn.has(S)||nn.set(S,hu(S));return}let a=Math.max(-2,Math.floor(_.s/40)-3),l=Math.floor(_.s/40)+9;Mc((l+1)*40);for(let m=a;m<=l;m++)nn.has(m)||nn.set(m,hu(m));for(let[m,S]of nn)m<a&&(S.node.mesh.dispose(),nn.delete(m));let d=Math.floor((_.s-210+80)/4);if(d>Fr){let m=Math.min(d-Fr,Qn.length-10);Qn.splice(0,m),Fr+=m}},ps=function(){Ja.clear(),Za.clear();for(let a in Hn)Hn[a]=0;for(let a in bt)bt[a]=!1;for(let a of document.querySelectorAll(".touch button"))a.classList.remove("held")},ti=function(a=!1){if(tt==="circuit"?(Je(),Ws=Kt==="coast-reborn"?73121:95276):a&&(Ws=(Date.now()>>>0)%999999||72319),_c&&nn.size)au.set(_c,nn);else for(let l of nn.values())l.node.mesh.dispose();nn=tt==="circuit"?au.get(Kt)||new Map:new Map,_c=tt==="circuit"?Kt:null;for(let l of nn.values())for(let d of l.entities){d.hit=!1,delete d.hitLap;for(let m of["ds","dl","vS","vL","angle","omega","tilt"])d[m]=0}Qn=[{s:-80,p:[0,cu(-80),80],h:-L/2}],Fr=0,xc=-L/2,vc=115,ja=0,$a=Ws,Object.assign(_,{s:0,l:0,speed:0,steering:0,roadSteer:0,vS:0,vL:0,spin:0,contactSound:0,yaw:0,velocityYaw:0,energy:0,nitro:s?0:1,nitroTime:0,turnRate:0,driftDuration:0,driftLatch:!1,driftRewarded:!1,driftReleasing:!1,releaseAge:0,gripRecovery:0,driftCooldown:0,driftBuffer:0,lastSteer:0,lastSteerTime:0,prevSteer:0,lastDriftSide:0,jetInputBuffer:0,boostInputBuffer:0,tireGrip:10.5,tireLimit:68,exitFromGrip:3.6,exitFromLimit:38,driftPhase:"grip",exitTime:0,smallJets:0,smallWindow:0,smallCount:0,jetCooldown:0,jetHistory:[],combo:"",comboTimer:0,prevDrift:!1,prevBoost:!1,prevSmall:!1,prevGas:!1,coins:0,score:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,stuckTime:0,timePenalty:0}),yc=0,Wn=0,Xs=0,eo=!1,qs=0,us=0,Hs=60,ds=null,Ur=0;for(let l of fs)l.life=0;for(let l of zs)l.life=0;ps(),Mc(420),uu(),Js=null,zr=null,ms=null,_.prevPose=null,U("seedText").textContent=String(Ws).padStart(6,"0"),U("bestText").textContent=kr.toLocaleString(),U("rerollBtn").hidden=tt==="circuit",U("endRunBtn").hidden=tt==="circuit",U("uploadStatus").textContent="",Br=0,Or=0,U("toast").classList.remove("show"),U("drift").classList.remove("on"),U("modeDistance").textContent=Math.round(Z)+" m / \u5708 \xB7 "+Ae().laps+" \u5708"},xn=function(a,l="",d=2){U("toastTitle").textContent=a,U("toastSub").textContent=l,U("toast").classList.add("show"),Or=d,U("status").textContent=a+" "+l},Ys=function(a=!1){if(Vi=!1,typeof oe<"u"&&oe.room){Zr();return}ti(a),rt="countdown",ki=3.05,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("helpPanel").hidden=!0,U("musicPanel").hidden=!0,U("rankPanel").hidden=!0,Bi.classList.remove("menu-open"),U("countdown").hidden=!1,U("countdown").textContent="3",qa(),_t&&_t.ctx.resume().catch(()=>{}),Pu(),U("status").textContent=s?"\u51C6\u5907\u8D77\u8DD1\u3002W \u6CB9\u95E8\uFF0CS \u5236\u52A8\uFF0CAD \u8F6C\u5411\u3002":"\u51C6\u5907\u8D77\u8DD1\u3002W \u52A0\u901F\uFF0CAD \u8F6C\u5411\uFF0CShift \u6F02\u79FB\uFF0C\u7A7A\u683C\u5C0F\u55B7\uFF0CE \u6C2E\u6C14\u3002"},zi=function(){if(typeof oe<"u"&&oe.room&&rt==="running"){ps(),xn("\u5728\u7EBF\u6BD4\u8D5B\u7EE7\u7EED\u8FDB\u884C","\u8054\u673A\u4E0D\u6682\u505C \xB7 \u70B9\u51FB\u623F\u95F4\u53EF\u9000\u51FA",1.5);return}rt==="running"?(rt="paused",ps(),U("paused").hidden=!1,U("status").textContent="\u6E38\u620F\u5DF2\u6682\u505C\u3002"):rt==="paused"&&(rt="running",U("paused").hidden=!0,Qa=performance.now())},Sc=function(){if(rt!=="finished"){rt="finished",ps(),kr=Math.max(kr,Math.floor(_.s)),to=Math.max(to,Math.floor(_.score));try{localStorage.setItem("star-rush-best-distance",String(kr)),localStorage.setItem("star-rush-best-score",String(to))}catch{}U("resultDistance").textContent=tt==="circuit"?He(st()):Math.floor(_.s).toLocaleString()+" m",U("resultMainLabel").textContent=tt==="circuit"?Ae().laps+" \u5708\u7528\u65F6":"\u672C\u6B21\u91CC\u7A0B",U("resultScore").textContent=Math.floor(_.score).toLocaleString(),U("resultBest").textContent=_.coins+" \u679A",U("resultBestLabel").textContent="\u6536\u96C6\u91D1\u5E01",U("resultNote").textContent=tt==="circuit"?"\u51B2\u7EBF\u5B8C\u6210\uFF01\u53EF\u4EE5\u4E0A\u4F20\u6210\u7EE9\uFF0C\u548C\u670B\u53CB\u6BD4\u8F83\u5F53\u524D\u8D5B\u9053\u7684\u5B8C\u8D5B\u7528\u65F6\u3002":"\u672C\u6B21\u81EA\u7531\u8DD1\u5DF2\u7ED3\u7B97\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u91CC\u7A0B\u6210\u7EE9\u3002",U("finished").hidden=!1,Bi.classList.add("menu-open"),U("status").textContent="\u672C\u5C40\u7ED3\u675F\u3002",Wr={id:crypto.randomUUID(),mode:tt,track:tt==="circuit"?w:"endless-reborn",seed:Ws,distance:Math.round(Math.max(0,_.s)),timeMs:Math.round(st()*1e3),score:Math.floor(_.score)},vs||op(Wr),U("submitRun").disabled=!1,U("submitRun").textContent="\u4E0A\u4F20\u672C\u6B21\u6210\u7EE9",vp(),Oi(1100,.3)}},du=function(a,l=5,d=[0,1,0]){let m=0;for(let S of zs)S.life<=0&&m++<l&&(S.life=.35+Math.random()*.4,S.p=[...a],S.v=C(d,[(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3]),S.size=.04+Math.random()*.08)},bc=function(a=!1){if(rt!=="running"&&rt!=="paused")return;let l=[0,-3.7,3.7],d=0;for(let m of l){let S=!0;for(let A of nn.values())for(let E of A.entities)(E.kind==="cone"||E.kind==="barrier")&&Math.abs(it(E.s,_.s))<7&&Math.abs(E.l-m)<E.width+1.1&&(S=!1);if(S){d=m;break}}_.prevPose=null,_.l=d,_.yaw=0,_.turnRate=0,_.velocityYaw=0,_.lateralSpeed=0,_.speed=H(_.speed,2,12),_.vS=_.speed,_.vL=0,_.spin=0,_.stuckTime=0,_.timePenalty=(_.timePenalty||0)+2,_.jump=0,_.vy=0,_.drifting=!1,_.driftSide=0,_.driftCharge=0,_.exitTime=0,_.driftReleasing=!1,_.driftBuffer=0,eo=!1,ds=null,xn(a?"\u5DF2\u81EA\u52A8\u8131\u56F0":"\u8D5B\u8F66\u5DF2\u56DE\u6B63","\u7EE7\u7EED\u6309 W \u52A0\u901F \xB7 \u56DE\u6B63\u8BA1\u65F6 +2 \u79D2",1.5)},tp=function(a){for(let E of fs)E.life=Math.max(0,E.life-a);let l=Math.abs(pn(_.yaw-_.velocityYaw));if(!_.drifting&&!(_.exitTime>0&&l>.06)||_.speed<4||_.jump>.08){ds=null,Ur=0;return}if(Ur+=a,Ur<.025)return;Ur=0;let d=xt(_.s),m=wt(_.s,_.l,.085),S=te(m,[.97,.97,.97],[0,-d.h-_.yaw,Math.atan(d.slope)]),A=[-1,1].map(E=>Fe(S,[-1.02,0,E*.83]));if(ds)for(let E=0;E<2;E++){let F=P(A[E],ds[E]),O=Math.hypot(F[0],F[2]);if(O>.05&&O<3){let Y=fs[Qf++%fs.length];Y.p=B(C(A[E],ds[E]),.5),Y.length=O+.035,Y.angle=-Math.atan2(F[2],F[0]),Y.life=2.5}}ds=A,l>.15&&du(wt(_.s-1,_.l,.2),1,B(d.T,-1.5))},np=function(a,l){for(let d of zs)d.life<=0||(d.life-=a,d.v[1]-=a*5,d.p=C(d.p,B(d.v,a)),d.node.local=te(P(d.p,l),[d.size,d.size,d.size]),Q.add(d.node))},ip=function(a,l){let d=rt==="running"&&_.prevPose?H(us/Ka,0,1):1,m=_.prevPose||_,S=$(m.s,_.s,d),A=$(m.l,_.l,d),E=m.yaw+pn(_.yaw-m.yaw)*d,F=$(m.jump,_.jump,d),O=xt(S),Y=O.p,pe=wt(S,A,.06+F),ie=P(pe,Y),ve=Math.atan(O.slope);je.tint=Qt.paint,je.local=te(ie,[.97,.97,.97],[0,-O.h-E,ve]),Q.children=[je],Hf(Y,a),tt==="circuit"&&(io.mesh=ap[Ae().biome],io.local=ce(-Y[0],-.9-Y[1],-Y[2]),io.shadow=!1,Q.add(io));for(let ue of nn.values())if(!(tt==="circuit"&&Math.abs(it(ue.k*40,_.s))>265)){ue.node.local=ce(...P(ue.origin,Y)),ue.node.shadow=Math.abs(it(ue.k*40,_.s))<90,Q.add(ue.node);for(let le of ue.entities){if(le.kind==="coin"&&le.hitLap===Math.max(0,Math.floor(_.s/Z)))continue;let Ie=xt(le.s+(le.ds||0)),Ne=wt(le.s+(le.ds||0),le.l+(le.dl||0),le.kind==="coin"?1.05+.12*Math.sin(a*3+le.s):.08),Ze=te(P(Ne,Y),[1,1,1],[0,-Ie.h+(le.kind==="coin"?a*2:-(le.angle||0)),Math.atan(Ie.slope)]);le.node.local=le.kind==="cone"&&le.tilt?j(Ze,j(ce(0,.34,0),j(me(le.tilt),ce(0,-.25,0)))):Ze,le.node.shadow=Math.abs(it(le.s,_.s))<65,Q.add(le.node)}}dc(a,l,qs),np(rt==="running"?l:0,Y);for(let ue of fs)ue.life>0&&(ue.node.local=te(P(ue.p,Y),[ue.length,1,Math.min(1,ue.life)*1.2],[0,ue.angle,0]),Q.add(ue.node));let xe=rt==="ready"||rt==="finished",Me,Te;if(xe){let ue=.15*Math.sin(a*.16);Me=C(pe,C(B(O.T,5.6+ue),C(B(O.R,7.1),[0,3.5,0]))),Te=C(pe,C(B(O.R,-1.25),[0,.8,0]))}else{let ue=Xn===1?12.5:Xn===2?5.8:8.5,le=Xn===1?9:Xn===2?2.9:4.5,Ie=O.h+_.velocityYaw;ms===null?ms=Ie:ms+=pn(Ie-ms)*(1-Math.exp(-l*8));let Ne=[Math.cos(ms),0,Math.sin(ms)],Ze=C(B(O.T,_.vS/18),B(O.R,_.vL/18));Me=C(C(pe,Ze),C(B(Ne,-ue),[0,le,0])),Te=C(C(pe,Ze),C(B(Ne,10),[0,1+F*.2,0]))}let Re=1-Math.exp(-l*(xe?2.6:18));return Js?(Js=Js.map((ue,le)=>$(ue,Me[le],Re)),zr=zr.map((ue,le)=>$(ue,Te[le],Re))):(Js=Me,zr=Te),{eye:P(Js,Y),target:P(zr,Y),origin:Y}},sp=function(){if(!nt)return;let a=wc.width,l=wc.height,d=xt(_.s),m=.86;if(tt==="circuit"){nt.clearRect(0,0,a,l);let F=ee,O=Math.min((a-45)/(F.maxX-F.minX),(l-30)/(F.maxZ-F.minZ)),Y=ve=>[a*.5+(ve[0]-(F.minX+F.maxX)*.5)*O,l*.5+(ve[2]-(F.minZ+F.maxZ)*.5)*O];nt.lineJoin="round";for(let[ve,xe]of[["#737e9d",13],["#dfe8f3",8]]){nt.strokeStyle=ve,nt.lineWidth=xe,nt.beginPath();for(let Me=0;Me<ne.length;Me+=6){let Te=Y(ne[Me].p);Me?nt.lineTo(...Te):nt.moveTo(...Te)}nt.closePath(),nt.stroke()}if(typeof Yn<"u")for(let ve of Yn){let xe=Y(xt(ve.s).p);nt.fillStyle=ve.color,nt.beginPath(),nt.arc(xe[0],xe[1],3.4,0,k),nt.fill()}if(typeof oe<"u"&&oe.room){let ve=0;for(let xe of oe.peers.values())if(xe.position){let Me=Y(xt(xe.position.s).p);nt.fillStyle=ao[ve++%ao.length],nt.beginPath(),nt.arc(Me[0],Me[1],4.5,0,k),nt.fill()}}let pe=Y(d.p),ie=Y(ne[0].p);nt.fillStyle="#fff7dc",nt.fillRect(ie[0]-3,ie[1]-5,6,10),nt.save(),nt.translate(...pe),nt.rotate(d.h+Math.PI/2),nt.fillStyle="#ffe68b",nt.beginPath(),nt.moveTo(0,-8),nt.lineTo(-5,5),nt.lineTo(5,5),nt.closePath(),nt.fill(),nt.restore();return}nt.clearRect(0,0,a,l),nt.strokeStyle="#c0d7e91c",nt.lineWidth=1;for(let F=20;F<a;F+=30)nt.beginPath(),nt.moveTo(F,0),nt.lineTo(F,l),nt.stroke();for(let F=15;F<l;F+=30)nt.beginPath(),nt.moveTo(0,F),nt.lineTo(a,F),nt.stroke();let S=[];for(let F=-15;F<=205;F+=4){let O=P(xt(_.s+F).p,d.p);S.push([a*.5+b(O,d.R)*m,l*.88-b(O,d.T)*m])}for(let[F,O]of[["#7a85a3",15],["#dce8f0",10]]){nt.strokeStyle=F,nt.lineWidth=O,nt.lineJoin="round",nt.beginPath();for(let Y=0;Y<S.length;Y++)Y?nt.lineTo(...S[Y]):nt.moveTo(...S[Y]);nt.stroke()}nt.fillStyle="#ffe68b",nt.beginPath();let A=a*.5+_.l*m,E=l*.88;nt.moveTo(A,E-10),nt.lineTo(A-7,E+7),nt.lineTo(A+7,E+7),nt.closePath(),nt.fill()},rp=function(a){if(Tc+=a,Tc<.06)return;Tc=0,qn.distance.textContent=Math.floor(_.s).toLocaleString(),qn.score.textContent=String(Math.floor(_.score)).padStart(5,"0"),qn.coins.textContent=String(_.coins).padStart(2,"0"),qn.speed.textContent=Math.round(_.speed*3.6),U("speedbar").style.width=Math.min(100,_.speed/(s?di.config.cruise:83)*100)+"%",qn.energyText.textContent=_.nitro+" \u74F6 / 2 \xB7 "+(_.nitroTime>0?_.nitroTime.toFixed(1)+"s":Math.floor(_.energy)+"%"),U("energyBar").style.width=_.energy+"%";let l=_.boostActive||_.pad>0||_.mini>0;qn.gear.textContent=l?"NITRO / BOOST":_.jump>0?"AIR TIME":_.drifting?"DRIFT MODE":_.speed<1?"READY TO RUSH":"SPORT / "+Math.max(1,Math.min(6,Math.ceil(_.speed/8))),U("boostfx").classList.toggle("on",l),U("raceTime").textContent=He(st()),U("lapLabel").textContent=tt==="circuit"?"LAP "+Math.min(Ae().laps,Math.floor(Math.max(0,_.s)/Z)+1)+" / "+Ae().laps+" \xB7 \u5269\u4F59 "+Math.max(0,Math.ceil(ze()-_.s))+" m":"\u65E0\u5C3D\u6A21\u5F0F \xB7 \u81EA\u7531\u7ADE\u901F",U("drift").classList.toggle("on",_.drifting||_.smallJets>0),U("driftBar").style.width=(_.smallJets>0?Math.min(100,_.smallWindow/1.5*100):Math.min(100,_.driftCharge/.55*100))+"%",qn.driftText.textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets:_.driftPhase==="entry"?"\u8F7B\u70B9\u8D77\u6F02":_.driftPhase==="counter"?"\u53CD\u6253\u6536\u8F66":_.driftPhase==="release"?"\u60EF\u6027\u6536\u6F02":"\u6F02\u79FB\u96C6\u6C14";for(let m of document.querySelectorAll("[data-key=small]"))m.classList.toggle("smalljet-ready",_.smallJets>0);U("jetCount").textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets+" \xB7 "+_.smallWindow.toFixed(1)+"s":_.drifting?"\u6F02\u79FB\u96C6\u6C14\u4E2D":"\u7A7A\u683C / Q \u5C0F\u55B7";let d=Du(_.s);qn.turnText.textContent=d.direction===0?"\u524D\u65B9\u76F4\u9053":d.direction>0?"\u524D\u65B9\u53F3\u5F2F":"\u524D\u65B9\u5DE6\u5F2F",qn.turnArrowPath.setAttribute("d",d.direction===0?"M12 21V3M5 10L12 3L19 10":d.direction>0?"M5 21V8H21M14 1L21 8L14 15":"M19 21V8H3M10 1L3 8L10 15"),Ei==="practice"&&!oe.room&&Nu(d),s&&(qn.gear.textContent=_.drifting?"SLIP / RECOVERY":"ROAD / GRIP",qn.driftText.textContent=_.drifting?"\u4FA7\u6ED1 \xB7 \u5E73\u987A\u56DE\u6B63":"\u6293\u5730",U("driftBar").style.width=Math.min(100,Math.abs(pn(_.yaw-_.velocityYaw))*180/Math.PI/20*100)+"%"),qn.biome.textContent=tt==="circuit"?kf(_.s).name:gc[(Math.floor(_.s/1e3)%3+3)%3].name,sp()},fu=function(a,l=mt,d=!0,m=null,S=1){a.world=j(l,a.local);let A=d&&a.shadow,E=a.tint||m,F=a.opacity??S;a.mesh&&Vr.push({mesh:a.mesh,m:a.world,shadow:A,tint:E,opacity:F});for(let O of a.children)fu(O,a.world,A,E,F)},pu=function(){Gr=Math.max(1,i.clientWidth),Hr=Math.max(1,i.clientHeight);let a=Math.min(devicePixelRatio||1,1.5),l=Math.round(Gr*a),d=Math.round(Hr*a);(i.width!==l||i.height!==d)&&(i.width=l,i.height=d)},mu=function(a){if(!x&&g.renderer.getContext().isContextLost())return;let l=Math.min(.1,Math.max(0,(a-Qa)/1e3));if(Qa=a,rt==="countdown"){ki=typeof oe<"u"&&oe.room&&oe.startAt?(oe.startAt-(Date.now()+oe.offset))/1e3:ki-l;let S=ki>.05?String(Math.ceil(ki)):"GO!";U("countdown").textContent!==S&&(U("countdown").textContent=S,Oi(ki>.05?400:900,.12)),ki<=0&&(U("countdown").hidden=!0,rt="running",Wn=typeof oe<"u"&&oe.room&&oe.startAt?Math.max(0,(Date.now()+oe.offset-oe.startAt)/1e3):0,xn("LET\u2019S RUSH!",s?"W \u6CB9\u95E8 \xB7 S \u5236\u52A8 \xB7 A D \u8F6C\u5411":"W \u52A0\u901F \xB7 SHIFT \u6F02\u79FB \xB7 \u7A7A\u683C\u5C0F\u55B7 \xB7 E \u6C2E\u6C14",2))}if(typeof wu=="function"&&wu(a,l),Sp(l),rt==="running"){us+=l;let S=0;for(;us>=Ka&&rt==="running"&&S++<12;)$f(Ka),us-=Ka;S>=12&&(us=0)}else us=0;(rt==="ready"||rt==="finished")&&(Xs+=l*.25);let d=ip(Xs,l);yp(d.origin,l),typeof Tu=="function"&&Tu(d.origin,l),Or>0&&(Or-=l,Or<=0&&U("toast").classList.remove("show")),Br=Math.max(0,Br-l),U("hitflash").style.opacity=Math.min(.24,Br*.6),Xf(),typeof yu=="function"&&yu(),Vr.length=0,fu(Q),Hs=$(Hs,rt==="ready"||rt==="finished"?45:sn.fov+_.boostBlend*3,1-Math.exp(-l*4));let m=j(At(Hs*L/180,Gr/Hr,.12,850),Mt(d.eye,d.target));pp(m),x?p(d):Lc=g.render(Vr,d,Gr,Hr,Hs,sn),Mp(a,l),rp(l),ou||(ou=!0,t.classList.add("done")),requestAnimationFrame(mu)},gu=function(){try{return JSON.parse(localStorage.getItem("star-rush-runs-reborn")||"[]")}catch{return[]}},op=function(a){try{let l=gu();l.push({...a,name:localStorage.getItem("star-rush-name")||"\u672C\u673A\u8F66\u624B"}),localStorage.setItem("star-rush-runs-reborn",JSON.stringify(l.slice(-100)))}catch{}},lp=function(a,l){let d=document.createElement("tr"),m=l.mode==="circuit"?He(l.timeMs/1e3):l.distance.toLocaleString()+" m";for(let S of[String(a+1).padStart(2,"0"),l.name,m,Math.round(l.score).toLocaleString()]){let A=document.createElement("td");A.textContent=S,d.appendChild(A)}return d},cp=function(){gs=Kt,U("rankTrack")&&(U("rankTrack").value=gs),wi=tt,Ti=!1,Ks("rankPanel"),Xr()},_u=function(a){tt=a;for(let[l,d]of[["circuitMode","circuit"],["endlessMode","endless"]])U(l).classList.toggle("selected",a===d),U(l).setAttribute("aria-pressed",String(a===d));ti(!0),U("trackPicker").hidden=a!=="circuit",U("trackDescription").hidden=a!=="circuit"},xu=function(a){if(V[a]){if(typeof oe<"u"&&oe.room){xn("\u5DF2\u5728\u8054\u673A\u623F\u95F4","\u9000\u51FA\u623F\u95F4\u540E\u53EF\u66F4\u6362\u5730\u56FE",1.5);return}Kt=a,ti(!1),qr()}},qr=function(){for(let a of document.querySelectorAll("[data-track]"))a.classList.toggle("selected",a.dataset.track===Kt),a.setAttribute("aria-pressed",String(a.dataset.track===Kt));U("trackDescription").textContent=Ae().description,U("modeDistance").textContent=Math.round(Z)+" m / \u5708 \xB7 "+Ae().laps+" \u5708"},Ec=function(){try{localStorage.setItem("star-rush-audio",JSON.stringify(vn))}catch{}},Yr=function(){if(qa(),!_t)return!1;if(_t.ctx.state==="suspended"&&_t.ctx.resume().catch(()=>{}),ct.bus)return!0;ct.bus=_t.ctx.createGain();let a=_t.ctx.createDynamicsCompressor();return a.threshold.value=-18,a.ratio.value=3,ct.bus.connect(a),a.connect(_t.ctx.destination),ct.next=_t.ctx.currentTime+.08,!0},_s=function(a,l,d,m,S,A=0){let E=_t.ctx,F=E.createOscillator(),O=E.createGain();F.type=m,F.frequency.setValueAtTime(a,l),A&&F.frequency.exponentialRampToValueAtTime(A,l+d),O.gain.setValueAtTime(.001,l),O.gain.exponentialRampToValueAtTime(S,l+.008),O.gain.exponentialRampToValueAtTime(.001,l+d),F.connect(O),O.connect(ct.bus),F.start(l),F.stop(l+d+.02)},vu=function(a,l,d,m){let S=_t.ctx,A=S.createBufferSource(),E=S.createBiquadFilter(),F=S.createGain();A.buffer=_t.noise,E.type="highpass",E.frequency.value=d,F.gain.setValueAtTime(m,a),F.gain.exponentialRampToValueAtTime(.001,a+l),A.connect(E),E.connect(F),F.connect(ct.bus),A.start(a),A.stop(a+l+.02)},hp=function(a,l){let d=.10135135135135136,m=Math.floor(a/16),S=a%16,A=[45,41,48,43],E=A[Math.floor(m/2)%4],F=pe=>440*Math.pow(2,(pe-69)/12);if(S%4===0&&_s(135,l,.18,"sine",.38,42),(S===4||S===12)&&(vu(l,.13,1200,.12),_s(180,l,.07,"triangle",.1,70)),S%2===0&&vu(l,.035,7500,S%4===2?.065:.04),S%2===0){let pe=E+(S===14?12:0);_s(F(pe-12),l,d*1.5,"sawtooth",.045),_s(F(pe-12),l,d*1.5,"sine",.1)}let O=[0,7,12,15,12,7,10,7],Y=O[Math.floor(S/2)%8];if(S%2===1&&_s(F(E+24+Y),l,.16,"triangle",.045),S===0)for(let pe of[0,3,7])_s(F(E+12+pe),l,d*12,"triangle",.018);if(m%4>=2&&S%4===2){let pe=[12,15,19,22,19,15,14,10][Math.floor(S/4)+4*(m%2)];_s(F(E+24+pe),l,d*2.5,"sine",.055)}},yu=function(){if(!_t||!Yr())return;let a=vn.enabled&&Rn&&!document.hidden&&ct.mode!=="classic",l=_t.ctx.currentTime;if(ct.bus.gain.setTargetAtTime(a?vn.volume*.42:0,l,.07),ct.mode==="synth"&&a){ct.next<l-.15&&(ct.next=l+.05);let d=0;for(;ct.next<l+.18&&d++<8;)hp(ct.step++,ct.next),ct.next+=60/148/4}ct.element&&(a&&ct.mode==="local"?ct.element.paused&&ct.element.play().catch(()=>{}):ct.element.paused||ct.element.pause())},so=function(a){ct.mode=a,Yr(),U("synthMusic").classList.toggle("selected",a==="synth"),U("classicMusic").classList.toggle("selected",a==="classic"),U("classicPlayer").hidden=a!=="classic",U("localMusicControls").hidden=a!=="local",U("musicToggle").hidden=a==="classic",a==="classic"?(U("spotifyPlayer").src||(U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"),U("nowPlaying").textContent="\u7ECF\u5178\u5916\u8BED\u6B4C\u5355 \xB7 \u5728\u4E0B\u65B9\u64AD\u653E\u5668\u70B9\u51FB\u64AD\u653E"):(U("spotifyPlayer").removeAttribute("src"),U("nowPlaying").textContent=a==="local"?ct.files[ct.index]?.name||"\u8BF7\u9009\u62E9\u97F3\u4E50\u6587\u4EF6":"STARLINE \xB7 \u539F\u521B\u7535\u5B50\u7ADE\u901F\u914D\u4E50")},ro=function(a){!ct.files.length||!Yr()||(ct.index=(a+ct.files.length)%ct.files.length,ct.element||(ct.element=new Audio,ct.element.preload="auto",_t.ctx.createMediaElementSource(ct.element).connect(ct.bus),ct.element.onended=()=>ro(ct.index+1),ct.element.onerror=()=>{U("nowPlaying").textContent="\u6B64\u97F3\u9891\u65E0\u6CD5\u89E3\u7801\uFF0C\u8BF7\u6362\u4E00\u9996 MP3 / OGG / WAV"}),ct.element.pause(),ct.url&&URL.revokeObjectURL(ct.url),ct.url=URL.createObjectURL(ct.files[ct.index]),ct.element.src=ct.url,vn.enabled=!0,so("local"),ct.element.play().catch(()=>{U("nowPlaying").textContent="\u70B9\u51FB\u201C\u64AD\u653E\u97F3\u4E50\u201D\u540E\u7EE7\u7EED"}),U("musicToggle").textContent="\u6682\u505C\u97F3\u4E50")},Ks=function(a){let l=rt==="running"&&!(typeof oe<"u"&&oe.room);Jr=Jr||l,l&&zi();for(let d of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])d!==a&&(U(d).hidden=!0);ps(),U(a).hidden=!1},xs=function(a){U(a).hidden=!0,Jr&&rt==="paused"&&zi(),Jr=!1},Cc=function(a){function l(S){let A=new K(S.mesh);A.local=new Float32Array(S.local),A.shadow=S.shadow;for(let E of S.children)A.add(l(E));return A}let d=l(je),m=d.add(new K(up[a%4]));return{root:d,marker:m,spin:0}},dp=function(){return{s:_.s,l:_.l,vS:_.vS,vL:_.vL,yaw:_.yaw,jump:_.jump,mini:_.mini,nitroTime:_.nitroTime,paint:Qt.paint,time:st(),finished:rt==="finished"}},Mu=function(){for(let a of oe.peers.values())a.label.remove();oe.peers.clear()},Pc=function(a){let l=oe.room?.status;oe.room=a.room,oe.members=a.members,oe.ready=!!a.members.find(m=>m.id===oe.id)?.ready,oe.errors=0;let d=new Set(a.members.map(m=>m.id));for(let[m,S]of oe.peers)d.has(m)||(S.label.remove(),oe.peers.delete(m));for(let m of a.members){if(m.id===oe.id)continue;let S=oe.peers.get(m.id);if(!S){let E=document.createElement("div");E.className="peer-label",E.textContent=m.name,Bi.appendChild(E),S={...Cc(oe.peers.size),label:E,name:m.name,history:[],position:null,lastStamp:0},oe.peers.set(m.id,S)}S.label.textContent=m.name,S.name=m.name;let A=m.snapshot;A&&Number.isFinite(A.s)&&m.updatedAt>S.lastStamp&&(S.lastStamp=m.updatedAt,S.history.push({...A,t:m.updatedAt}),S.history.length>12&&S.history.shift())}if(oe.room.status==="racing"&&oe.room.startAt!==oe.runTag){oe.runTag=oe.room.startAt,oe.startAt=oe.room.startAt,Kt=oe.room.track,tt="circuit",ti(!1),qr(),Pu();for(let S of oe.peers.values())S.history=[],S.position=null;let m=a.members.findIndex(S=>S.id===oe.id);_.l=(m%2?1:-1)*1.9,_.s=-Math.floor(m/2)*3.8,rt="countdown",ki=(oe.startAt-(Date.now()+oe.offset))/1e3,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("roomPanel").hidden=!0,U("rankPanel").hidden=!0,Bi.classList.remove("menu-open"),U("countdown").hidden=!1,qa(),_t&&_t.ctx.resume().catch(()=>{})}if(oe.room.status==="lobby"&&l&&l!=="lobby"){oe.startAt=0,oe.runTag=0,rt="ready",Kt=oe.room.track,tt="circuit",ti(!1),qr(),U("countdown").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Bi.classList.add("menu-open");for(let m of oe.peers.values())m.history=[]}Ic(),rt==="finished"&&Uu()},Ic=function(){let a=!!oe.room;if(U("roomActions").hidden=!a,U("networkHud").hidden=!a,U("createRoom").disabled=a,U("joinRoom").disabled=a,U("roomCode").disabled=a,U("circuitMode").disabled=a,U("endlessMode").disabled=a,U("roomName").disabled=a&&oe.room.status==="racing",U("startBtn").textContent=a?"\u56DE\u5230\u8054\u673A\u623F\u95F4":"\u5F00\u59CB\u7ADE\u901F\u3000\u2197",!a){U("roomTitle").textContent="\u540C\u4E00\u6761\u8D5B\u9053\uFF0C\u4E00\u8D77\u51FA\u53D1\u3002",U("roomMembers").replaceChildren(),U("roomStatus").textContent="\u6700\u591A 4 \u4EBA \xB7 \u4F7F\u7528\u5F53\u524D\u9009\u62E9\u7684\u8DD1\u5708\u5730\u56FE";return}U("roomCode").value=oe.room.code,U("roomTitle").textContent="ROOM "+oe.room.code+" \xB7 "+V[oe.room.track].name,U("roomStatus").textContent=(oe.room.status==="racing"?"\u6BD4\u8D5B\u8FDB\u884C\u4E2D":oe.room.status==="finished"?"\u6BD4\u8D5B\u5DF2\u7ED3\u675F":"\u5019\u573A\u4E2D")+" \xB7 "+oe.members.length+" / 4 \u4EBA \xB7 "+Math.round(oe.rtt)+" ms \u5F80\u8FD4",U("roomMembers").replaceChildren();for(let S of oe.members){let A=document.createElement("div");A.className="room-member";let E=document.createElement("span");E.textContent=S.name+(S.id===oe.id?"\uFF08\u4F60\uFF09":"")+(S.id===oe.room.hostId?" \xB7 \u623F\u4E3B":"");let F=document.createElement("b");F.textContent=S.snapshot?.finished?"\u5B8C\u8D5B "+He(S.snapshot.time||0):oe.room.status==="racing"?"\u6BD4\u8D5B\u4E2D":S.ready?"\u5DF2\u51C6\u5907":"\u7B49\u5F85\u51C6\u5907",A.append(E,F),U("roomMembers").appendChild(A)}let l=oe.room.hostId===oe.id,d=oe.room.status!=="lobby";U("startRoom").hidden=!l,U("startRoom").disabled=!d&&oe.members.some(S=>!S.ready),U("startRoom").textContent=d?"\u7ED3\u675F\u672C\u5C40 \xB7 \u8FD4\u56DE\u5019\u573A":"\u5168\u5458\u5C31\u7EEA \xB7 \u5F00\u59CB\u7ADE\u901F",U("readyRoom").hidden=d,U("readyRoom").textContent=oe.ready?"\u53D6\u6D88\u51C6\u5907":"\u51C6\u5907",U("connectionText").textContent=oe.errors?"\u8FDE\u63A5\u6062\u590D\u4E2D\u2026":"ROOM "+oe.room.code+" \xB7 "+Math.round(oe.rtt)+" ms";let m=oe.members.map(S=>({id:S.id,s:S.id===oe.id?_.s:S.snapshot?.s||0,finished:S.id===oe.id?rt==="finished":!!S.snapshot?.finished,time:S.id===oe.id?st():S.snapshot?.time||0})).sort((S,A)=>S.finished&&A.finished?S.time-A.time:A.finished-S.finished||A.s-S.s);U("racePosition").textContent="POS "+(m.findIndex(S=>S.id===oe.id)+1)+" / "+oe.members.length},Zr=function(){Ks("roomPanel"),Ic()},wu=function(a){if(!oe.room||oe.busy||document.hidden||a-oe.lastSync<(oe.room.status==="racing"?125:850))return;oe.lastSync=a,oe.busy=!0;let l=oe.session;Rc("poll",{snapshot:oe.room.status!=="lobby"?dp():{}}).then(d=>{oe.room&&oe.session===l&&Pc(d)}).catch(d=>{oe.room&&oe.session===l&&(oe.errors++,U("connectionText").textContent="\u8FDE\u63A5\u6062\u590D\u4E2D \xB7 "+d.message,U("roomStatus").textContent=d.message)}).finally(()=>{oe.busy=!1})},Tu=function(a,l){if(!oe.room)return;let d=Date.now()+oe.offset-H(oe.rtt*1.1,170,350);for(let m of oe.peers.values()){let S=m.history;if(!S.length){m.label.hidden=!0;continue}let A=S[0],E=A;for(let ve=1;ve<S.length&&(E=S[ve],!(E.t>=d));ve++)A=E;let F=A.t===E.t?0:H((d-A.t)/(E.t-A.t),0,1),O={};for(let ve of["s","l","vS","vL","jump"])O[ve]=$(A[ve]||0,E[ve]||0,F);O.yaw=(A.yaw||0)+pn((E.yaw||0)-(A.yaw||0))*F;let Y=H((d-E.t)/1e3,0,.12);if(O.s+=(E.vS||0)*Y,O.l+=(E.vL||0)*Y,m.position&&Math.abs(O.s-m.position.s)<15){let ve=1-Math.exp(-l*24);O.s=$(m.position.s,O.s,ve),O.l=$(m.position.l,O.l,ve)}m.position=O;let pe=xt(O.s),ie=wt(O.s,O.l,.06+O.jump);m.worldPos=P(C(ie,[0,3,0]),a),m.root.tint=typeof E.paint=="string"?E.paint:ao[0],m.root.local=te(P(ie,a),[.97,.97,.97],[0,-pe.h-O.yaw,Math.atan(pe.slope)]),m.root.shadow=G(P(ie,wt(_.s,_.l)))<70,Q.add(m.root),m.spin-=(O.vS||0)*l/.4;for(let ve=0;ve<fn.length;ve++){let xe=fn[ve];m.root.children[2+ve].local=j(ce(xe.x,.41,xe.z),de(m.spin))}for(let ve=0;ve<Us.length;ve++){let xe=Us[ve],Me=E.nitroTime>0||E.mini>0,Te=Me?.85+.16*Math.sin(Xs*38+xe.side):.001;m.root.children[6+ve].local=te([-1.9,.43,xe.side*.34],[Te,Te,Te])}}},pp=function(a){for(let l of oe.peers.values()){if(!l.worldPos||!oe.room||rt==="ready"){l.label.hidden=!0;continue}let d=l.worldPos,m=d[0],S=d[1],A=d[2],E=a[3]*m+a[7]*S+a[11]*A+a[15],F=(a[0]*m+a[4]*S+a[8]*A+a[12])/E,O=(a[1]*m+a[5]*S+a[9]*A+a[13])/E;l.label.hidden=E<=0||Math.abs(F)>1.1||Math.abs(O)>1.1,l.label.hidden||(l.label.style.left=(F*.5+.5)*Gr+"px",l.label.style.top=(-O*.5+.5)*Hr+"px")}},Ru=function(){return"star-rush-best-reborn-"+(s?"road-v1-":"")+Kt},gp=function(){try{return JSON.parse(localStorage.getItem(Ru())||"null")}catch{return null}},Pu=function(){if(Yn=[],vs=!1,Ss=null,ys=gp(),Hi=null,$s=0,oo=[],lo=0,co=[],js=[],Ms=1,Kr=1,ho=0,U("resultGrid").replaceChildren(),U("splitLabel").textContent="SECTOR 1 / 3",U("splitDelta").textContent="",U("lapTimeLabel").textContent="",U("coach").hidden=Ei!=="practice",tt==="circuit"&&Ei==="race"&&!oe.room){_.l=-1.8;for(let a=0;a<3;a++){let l=Cc(a);l.root.tint=Eu[a],Yn.push({s:-3.8*Math.floor((a+1)/2),l:(a%2?1:-1)*1.9,speed:0,vS:0,vL:0,spin:0,roadSteer:0,yaw:0,color:Eu[a],name:mp[a],node:l.root,finishAt:null,index:a})}}ys&&sn.ghost&&tt==="circuit"&&Ei==="timeTrial"&&!oe.room?(Gi=Cc(3).root,Gi.tint="#b8e9e6",Gi.opacity=.27):Gi=null,uo(),Ei==="practice"&&!oe.room&&Nu()},Iu=function(a,l=0,d=1){let m=0;for(let pe=12;pe<=75;pe+=7){let ie=xt(a.s+pe).curv;m=Math.max(m,Math.abs(ie/H(1-ie*l,.45,1.55)))}let S=Math.min(di.config.cruise*.82,Math.sqrt(di.config.gripAcceleration*.72/Math.max(.004,m)))*d,A=xt(a.s),E=H(a.speed*.65,8,20),F=P(wt(a.s+E,l,0),wt(a.s,a.l,0)),O=pn(Math.atan2(b(F,A.R),b(F,A.T))-a.yaw),Y=Math.atan2(2*(di.config.frontAxle+di.config.rearAxle)*Math.sin(O),E);return{steer:H(Y/di.steeringLimit(a.speed),-1,1),brake:a.speed>S+.5,gas:a.speed<=S+.5}},_p=function(a,l){let d=a.index%2?1.6:-1.6;for(let S of nn.values())for(let A of S.entities){if(A.kind!=="barrier"&&A.kind!=="cone")continue;let E=A.s+(A.ds||0),F=A.l+(A.dl||0),O=it(E,a.s);O>0&&O<32&&Math.abs(d-F)<2.1&&(d=F>0?-2.8:2.8)}di.step(a,Iu(a,d,1-a.index*.025),l),ru(a,l);let m=We-(Math.abs(Math.sin(a.yaw))*Pt+Math.abs(Math.cos(a.yaw))*Zt);if(Math.abs(a.l)>m){let S=Math.sign(a.l);a.l=S*m,a.vL*S>0&&(a.vL=0)}a.speed=Math.hypot(a.vS,a.vL),a.s>=ze()&&(a.s=ze(),a.finishAt=Wn,Ss??=Wn)},xp=function(a){for(let l of Yn){if(l.finishAt!==null)continue;if(s){_p(l,a);continue}let d=0;for(let F=15;F<=65;F+=10)d=Math.max(d,Math.abs(xt(l.s+F).curv));let m=H(Math.sqrt(24/Math.max(.004,d)),24,53)*(1-l.index*.028);l.speed=$(l.speed,m,1-Math.exp(-a*(l.speed>m?3:1.2)));let S=xt(l.s+20).curv,A=Math.sign(S)*1.6+Math.sin(l.s*.012+l.index)*.45;for(let F of nn.values())for(let O of F.entities){if(O.kind!=="barrier"&&O.kind!=="cone")continue;let Y=O.s+(O.ds||0),pe=O.l+(O.dl||0),ie=it(Y,l.s);ie>0&&ie<28&&Math.abs(A-pe)<2.1&&(A=pe>0?-2.8:2.8)}let E=l.l;l.l=$(l.l,A,1-Math.exp(-a*2.3)),l.yaw=Math.atan2((l.l-E)/a,Math.max(5,l.speed))+H(S*12,-.4,.4),l.s+=l.speed*a,l.s>=ze()&&(l.s=ze(),l.finishAt=Wn,Ss??=Wn)}if(tt==="circuit"&&!oe.room&&(lo+=a,lo>=.1&&(lo=0,oo.push([Number(st().toFixed(3)),Number(_.s.toFixed(3)),Number(_.l.toFixed(3)),Number(_.yaw.toFixed(4)),Number(_.jump.toFixed(3))]))),tt==="circuit"){for(;_.s>=Ms*Z/3&&Ms<=Ae().laps*3;){co.push(st());let l=ys?.splits?.[Ms-1];if(U("splitLabel").textContent="SECTOR "+((Ms-1)%3+1)+" / 3",l){let d=st()-l;U("splitDelta").textContent=(d>0?"+":"\u2212")+Math.abs(d).toFixed(2)+" s",U("splitDelta").style.color=d>0?"#f1b8c6":"#b9edcf"}else U("splitDelta").textContent="\u5206\u6BB5 "+He(st()-(co[Ms-2]||0));Ms++}if(_.s>=Kr*Z){let l=js.reduce((d,m)=>d+m,0);js.push(st()-l),U("lapTimeLabel").textContent="\u4E0A\u4E00\u5708 "+He(js.at(-1)),Kr<Ae().laps&&xn("LAP "+(Kr+1),"\u4E0A\u4E00\u5708 "+He(js.at(-1)),1.5),Kr++}}if(Ss!==null&&Wn-Ss>30&&_.s<ze()){vs=!0,Sc();return}ho+=a,ho>.18&&(ho=0,uo())},uo=function(){if(oe.room){U("localPosition").textContent="ONLINE",U("eventLabel").textContent="\u597D\u53CB\u623F\u95F4 \xB7 "+oe.room.code;return}let a=rt==="finished",l={time:a&&!vs?st():null,s:_.s},d=1+Yn.filter(m=>a?Lu({time:m.finishAt,s:m.s},l)<=0:m.finishAt!==null||m.s>_.s).length;U("localPosition").textContent=Yn.length?"POS "+d+" / 4":Ei==="practice"?"PRACTICE":"TIME ATTACK",U("eventLabel").textContent=a?vs?"\u672A\u5B8C\u8D5B":tt==="endless"?"\u5DE1\u6E38\u7ED3\u675F":"\u5DF2\u5B8C\u8D5B":Ss!==null?"\u5B8C\u8D5B\u5012\u8BA1\u65F6 "+Math.max(0,30-Math.floor(Wn-Ss))+" s":tt==="endless"?"\u65E0\u5C3D\u5DE1\u6E38":Ae().name},Lu=function(a,l){return a.time===null&&l.time===null?l.s-a.s:a.time===null?1:l.time===null?-1:a.time-l.time},Du=function(a){let l=pn(xt(a+62).h-xt(a+32).h);return{turn:l,direction:Math.abs(l)<.05?0:Math.sign(l),currentCurve:xt(a).curv}},Nu=function(a=Du(_.s)){if(s){let S=a.direction>0?"\u53F3\u5F2F":a.direction<0?"\u5DE6\u5F2F":"";U("coach").textContent=_.drifting?"\u8F6E\u80CE\u4FA7\u6ED1\uFF1A\u677E\u6CB9\uFF0C\u5E73\u987A\u4FEE\u6B63\u65B9\u5411\u3002":S?"\u524D\u65B9"+S+"\uFF1A\u5165\u5F2F\u524D\u5236\u52A8\uFF0C\u5F2F\u5FC3\u7A33\u4F4F\uFF0C\u51FA\u5F2F\u518D\u52A0\u6CB9\u3002":"W / \u2191 \u6CB9\u95E8 \xB7 S / \u2193 \u5236\u52A8\uFF0C\u89C2\u5BDF\u524D\u65B9\u8DEF\u7EBF\u3002";return}let l=a.direction>0?"\u53F3\u5F2F":a.direction<0?"\u5DE6\u5F2F":"",d=_.smallJets>0&&_.smallWindow>0,m="W / \u2191 \u52A0\u901F\uFF0C\u89C2\u5BDF\u524D\u65B9\u5F2F\u9053\u3002";_.drifting&&_.driftPhase==="counter"?m="\u53CD\u6253\u6536\u8F66\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\u3002":""):_.drifting&&_.driftPhase==="release"||_.driftPhase==="exit"&&_.exitTime>0?m="\u6536\u6F02\u4E2D\uFF1A\u5148\u7A33\u4F4F\u65B9\u5411\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\uFF0C\u8F66\u5934\u7A33\u5B9A\u540E\u8854\u63A5\u3002":""):_.drifting?m=_.driftPhase==="entry"?"\u8D77\u6F02\u4E2D\uFF1A\u5C0F\u5E45\u8F6C\u5411\uFF0C\u51C6\u5907\u53CD\u6253\u6536\u8F66\u3002":"\u6F02\u79FB\u4E2D\uFF1A\u53CD\u6309\u65B9\u5411\u6536\u8F66\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002":d?m="\u5C0F\u55B7 \xD7"+_.smallJets+"\uFF1A\u8F66\u5934\u7A33\u5B9A\u540E\u70B9\u7A7A\u683C / Q\u3002"+(_.smallJets>1?"\u8FDE\u7EED\u4E24\u6B21\u53EF\u53CC\u55B7\u3002":""):_.nitroTime>0?m="\u6C2E\u6C14\u55B7\u5C04\u4E2D\uFF1A"+(l?"\u524D\u65B9"+l+"\uFF0C\u7A33\u4F4F\u65B9\u5411\u3002":"\u4FDD\u6301\u8DEF\u7EBF\uFF0C\u65E0\u9700\u91CD\u590D\u6309 E / C\u3002"):_.speed>10&&(l?m="\u524D\u65B9"+l+"\uFF1A\u5148\u6536\u6CB9\u63A7\u901F\uFF0C\u5E73\u987A\u8F6C\u5411\u3002":_.nitro>0&&_.speed>15&&Math.abs(a.currentCurve)<.006?m="\u524D\u65B9\u76F4\u9053\uFF1A\u8F66\u8EAB\u7A33\u5B9A\u540E\uFF0C\u53EF\u9009 E / C \u6C2E\u6C14\u3002":m="\u524D\u65B9\u76F4\u9053\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u7559\u610F\u4E0B\u4E00\u5F2F\u3002"),U("coach").textContent=m},Uu=function(){let a=oe.room?oe.members.filter(l=>l.id!==oe.id).map(l=>({name:l.name,time:l.snapshot?.finished?l.snapshot.time:null,s:l.snapshot?.s||0})):Yn.map(l=>({name:l.name,time:l.finishAt,s:l.s}));if(a.push({name:Qt.name+"\uFF08\u4F60\uFF09",time:vs?null:st(),s:_.s}),a.sort(Lu),U("resultGrid").replaceChildren(),a.length>1)for(let l=0;l<a.length;l++){let d=document.createElement("div");d.className="result-row";let m=document.createElement("span"),S=document.createElement("b");m.textContent=l+1+". "+a[l].name,S.textContent=a[l].time===null?oe.room?.status==="racing"?"\u6BD4\u8D5B\u4E2D":"\u672A\u5B8C\u8D5B":He(a[l].time),d.append(m,S),U("resultGrid").appendChild(d)}},vp=function(){if(Vi=!1,Uu(),uo(),vs)U("resultDistance").textContent="DNF",U("resultNote").textContent="\u672C\u5C40\u672A\u80FD\u5728\u5012\u8BA1\u65F6\u7ED3\u675F\u524D\u5B8C\u8D5B\uFF0C\u53EF\u4EE5\u518D\u6311\u6218\u4E00\u6B21\u3002",U("submitRun").disabled=!0,Wr=null;else if(!oe.room&&tt==="circuit"&&oo.length>10&&(!ys||st()<ys.time))try{localStorage.setItem(Ru(),JSON.stringify({time:st(),points:oo,splits:co,laps:js,date:Date.now()})),U("resultNote").textContent="\u5237\u65B0\u672C\u673A\u6700\u4F73\uFF01\u5DF2\u4FDD\u5B58\u5E7D\u7075\uFF0C\u53EF\u5728\u8BA1\u65F6\u6311\u6218\u4E2D\u8FFD\u9010\u81EA\u5DF1\u3002"}catch{}U("coach").hidden=!0},yp=function(a,l){Hi=null;for(let d of Yn){let m=xt(d.s);d.node.local=te(P(wt(d.s,d.l,.07),a),[.97,.97,.97],[0,-m.h-d.yaw,Math.atan(m.slope)]),Q.add(d.node);for(let S=0;S<fn.length;S++){let A=fn[S];d.node.children[2+S].local=j(ce(A.x,.41,A.z),de(-d.s/.4))}}if(Gi&&ys?.points?.length&&rt==="running"){let d=ys.points,m=st();for(;$s<d.length-2&&d[$s+1][0]<m;)$s++;let S=d[$s],A=d[$s+1],E=H((m-S[0])/(A[0]-S[0]||1),0,1),F=$(S[1],A[1],E),O=$(S[2],A[2],E),Y=S[3]+pn(A[3]-S[3])*E,pe=$(S[4],A[4],E);Hi={s:F,l:O,yaw:Y,jump:pe};let ie=xt(F);Gi.local=te(P(wt(F,O,.07+pe),a),[.97,.97,.97],[0,-ie.h-Y,0]),Q.add(Gi)}if(sn.line&&rt==="running")for(let d=0;d<Dc.length;d++){let m=_.s+12+d*9,S=xt(m),A=H(S.curv*80,-2.1,2.1),E=Dc[d];E.mesh=Cu[(s?Math.abs(S.curv)*_.speed*_.speed>di.config.gripAcceleration*.8:Math.abs(S.curv)*_.speed>.95)?1:0],E.local=te(P(wt(m,A,.085),a),[1,1,1],[0,-S.h,0]),Q.add(E)}},Mp=function(a,l){let d=a-Fu;if(Fu=a,d>0&&d<1e3&&Qs.push(d),Qs.length>180&&Qs.shift(),Nc+=l,Nc<.25)return;Nc=0;let m=Qs.reduce((E,F)=>E+F,0)/(Qs.length||1),S=[...Qs].sort((E,F)=>E-F),A=S[Math.floor(S.length*.95)]||0;U("diagnostics").textContent="REBORN / "+(x?"Canvas compatibility":"Three.js WebGL 2")+`
FPS `+Math.round(1e3/(m||16.7))+" | frame p95 "+A.toFixed(1)+` ms
`+(x?"WebGL draw/triangles: n/a":"Draw "+Lc.drawCalls+" | triangles "+Lc.triangles)+`
State `+rt+" | event "+Ei+`
s `+_.s.toFixed(1)+" / "+ze().toFixed(1)+" | l "+_.l.toFixed(2)+`
speed `+(_.speed*3.6).toFixed(1)+` km/h
steer `+qs.toFixed(2)+" | slip "+(pn(_.yaw-_.velocityYaw)*180/Math.PI).toFixed(1)+`\xB0
drift `+_.driftPhase+" | small "+_.smallJets+" | nitro "+_.nitro+`
ready `+(oe.ready?"yes":"no")+" | peers "+oe.peers.size+(_t?.rail?`
rail `+Object.values(_t.rail.status().states).join("/")+" | "+_t.rail.status().last+" #"+_t.rail.status().played:"")},Sp=function(a){if(Ai=null,Vi&&rt==="running"){if(s){let ie=Iu(_);Ai=ie.steer,bt.brake=ie.brake,bt.gas=ie.gas;return}let S=0;for(let ie=15;ie<=90;ie+=10)S=Math.max(S,Math.abs(xt(_.s+ie).curv));let A=H(.85/Math.max(.012,S),14,48),E=xt(_.s),F=wt(_.s+H(_.speed*.45,12,26),0,0),O=P(F,wt(_.s,_.l,0)),Y=Math.atan2(b(O,E.R),b(O,E.T)),pe=pn(Y-_.velocityYaw);Ai=H((pe*3+xt(_.s+12).curv*_.speed)/1.04,-1,1),bt.brake=_.speed>A+1.5,bt.gas=!bt.brake;return}let l=navigator.getGamepads?.()[0];if(!l){Fc&&(Gs(),Uc={},Fc=!1);return}Fc=!0,Gs();let d=Math.abs(l.axes[0]||0)>.13?l.axes[0]:0;d&&(Ai=d);let m={gas:l.buttons[7]?.value>.13,brake:l.buttons[6]?.value>.13,drift:!!l.buttons[2]?.pressed,small:!!l.buttons[0]?.pressed,boost:!!l.buttons[1]?.pressed};for(let[S,A]of Object.entries(m))bt[S]||=A,A&&!Uc[S]&&S in Hn&&Hn[S]++;Uc=m},$r=function(){try{localStorage.setItem("star-rush-settings-reborn",JSON.stringify(sn))}catch{}},fo=function(){Qt.name=U("profileName").value.trim().slice(0,16)||Qt.name;try{localStorage.setItem("star-rush-profile",JSON.stringify(Qt)),localStorage.setItem("star-rush-name",Qt.name)}catch{}U("carName").textContent=Qt.car;for(let a of["roomName","racerName","profileName"])U(a).value=Qt.name;U("profileStatus").textContent="\u5DF2\u4FDD\u5B58 \xB7 "+Qt.name,je.tint=Qt.paint},Oc=function(){for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).checked=!!sn[l];U("qualitySetting").value=sn.quality,U("steeringSetting").value=sn.sensitivity*100,U("fovSetting").value=sn.fov,U("settingsStatus").textContent=x?"\u5F53\u524D\u6D4F\u89C8\u5668\u4F7F\u7528\u517C\u5BB9\u663E\u793A\u6A21\u5F0F\uFF0C\u6BD4\u8D5B\u903B\u8F91\u548C\u64CD\u4F5C\u4FDD\u6301\u4E00\u81F4\u3002":"Three.js 3D \u6E32\u67D3 \xB7 \u8BBE\u7F6E\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5728\u6B64\u8BBE\u5907\u3002"},Bu=function(){if(oe.room){Zr();return}Vi=!1,rt="ready",ti(!1),Yn=[],Gi=null,ps(),U("welcome").hidden=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("coach").hidden=!0,Bi.classList.add("menu-open"),U("countdown").hidden=!0},wp=function(){for(let a of document.querySelectorAll("[data-track]")){let l=V[a.dataset.track],d=a.querySelector("svg");if(!l||!d)continue;let m=l.points.map(xe=>xe[0]),S=l.points.map(xe=>xe[2]),A=Math.min(...m),E=Math.max(...m),F=Math.min(...S),O=Math.max(...S),Y=Math.min(140/(E-A),54/(O-F)),pe=l.points.map(xe=>[80+(xe[0]-(A+E)/2)*Y,35+(xe[2]-(F+O)/2)*Y]),ie=document.createElementNS("http://www.w3.org/2000/svg","path");ie.setAttribute("d",pe.map((xe,Me)=>(Me?"L":"M")+xe.join(",")).join(" ")+"Z"),ie.setAttribute("fill","none"),ie.setAttribute("stroke",l.biome?"#eabfd8":"#a9d8ec"),ie.setAttribute("stroke-width","3"),ie.setAttribute("stroke-linejoin","round"),d.replaceChildren(ie);let ve=document.createElementNS("http://www.w3.org/2000/svg","circle");ve.setAttribute("cx",pe[0][0]),ve.setAttribute("cy",pe[0][1]),ve.setAttribute("r","3"),ve.setAttribute("fill","#ffe2ac"),d.appendChild(ve)}},h=Ef(i);i=h.canvas;let g=h.threeBackend,x=h.software,f=h.softwareContext,T=new WeakMap,L=Math.PI,k=L*2,R=(a=0,l=0,d=0)=>[a,l,d],C=(a,l)=>a.map((d,m)=>d+l[m]),P=(a,l)=>a.map((d,m)=>d-l[m]),B=(a,l)=>a.map(d=>d*l),b=(a,l)=>a[0]*l[0]+a[1]*l[1]+a[2]*l[2],D=(a,l)=>[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],G=a=>Math.hypot(...a),q=a=>B(a,1/(G(a)||1)),H=(a,l,d)=>Math.min(d,Math.max(l,a)),$=(a,l,d)=>a+(l-a)*d,W=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),at={green:"#7fb86c",light:"#a7d27d",dark:"#407750",spine:"#4c8056",belly:"#dfdb96",eye:"#fff2cf",iris:"#325f43",coral:"#df8064",rim:"#f2be8e",rubber:"#344b42",metal:"#b7c8b1",wood:"#b78c57",gold:"#d6b471",cream:"#f1ead2",grass:"#b7cc90",white:"#fff4d7",earth:"#b4976d",water:"#91c6b8",leaf:"#85ad74"},yt=new Map,jt=pt(),dn=pt(12,8),Ht=Gt(),qt=Gt(8),J=Gt(10,0),cn=Gt(4,0),mt=W();class I{constructor(){this.data=[],this.indices=[]}add(l,d=mt,m=at.green,S=.13){let A=typeof m=="string"?Xe(m):m,E=qe(d),F=this.data.length/10;for(let O=0;O<l.p.length;O+=3){let Y=Fe(d,l.p.slice(O,O+3)),pe=Dt(E,l.n.slice(O,O+3));this.data.push(...Y,...pe,...A,S)}for(let O of l.i)this.indices.push(F+O);return this}finish(l=!1){return new y(this.data,this.indices,l)}}class y{constructor(l,d){this.sourceData=new Float32Array(l),this.sourceIndices=new Uint32Array(d),this.count=d.length}update(l){this.sourceData=new Float32Array(l)}dispose(){this.onDispose&&this.onDispose()}}class K{constructor(l=null,d=mt){this.mesh=l,this.local=d,this.children=[],this.shadow=!0,this.world=mt}add(l){return this.children.push(l),l}}let Q=new K,_e=new I,Pe=new I,De=73121,je=Q.add(new K),Be=new I,X="#83cde4",Ee="#eff0f6",fe="#9c8ad5",Ce="#343952",Ge="#ed94bd",be="#f8d1b5",Qe="#a3a9e5",Ke="#7479b7";z(Be,[0,.47,0],[3.15,.43,1.42],X,.16),z(Be,[.9,.68,0],[1.4,.27,1.42],Ee,.13,[0,0,-.065],.5),z(Be,[.96,.83,0],[1.08,.035,.14],fe,.015,[0,0,-.065],.5),z(Be,[0,.38,0],[3.3,.15,1.48],Ce,.07),z(Be,[1.53,.31,0],[.5,.075,1.9],fe,.035),z(Be,[-1.4,.39,0],[.45,.22,1.55],fe,.07);for(let a of[-.7,.7]){z(Be,[-.15,.64,a],[2.55,.35,.29],X,.12,[0,0,0],.45),z(Be,[.1,.81,a],[1.55,.05,.2],Ee,.02),z(Be,[-.17,.69,a*1.19],[.62,.19,.032],Ce,.02,[0,0,-.12]);for(let l=0;l<4;l++)z(Be,[-.38+l*.12,.69,a*1.22],[.035,.13,.015],"#758ab5",.007,[0,0,-.15]);z(Be,[1.54,.66,a*.75],[.055,.14,.33],"#fff0b9",.035,[0,0,-.1],.65),z(Be,[-1.57,.62,a*.79],[.035,.12,.28],Ge,.035,[0,0,0],.6),z(Be,[-1.32,.85,a*.83],[.07,.55,.07],Ce,.02),z(Be,[-1.38,1.13,a*1.34],[.43,.16,.055],fe,.025)}z(Be,[1.6,.44,0],[.04,.15,.67],Ce,.03);for(let a=0;a<5;a++)z(Be,[1.63,.44,(a-2)*.115],[.014,.1,.024],"#6d7990",.006);z(Be,[-1.37,1.12,0],[.38,.065,1.94],Ee,.03),z(Be,[-1.37,1.16,0],[.18,.018,1.68],fe,.007),z(Be,[-.42,.77,0],[1.05,.08,.94],Ce,.05),z(Be,[-.69,1,0],[.18,.53,.64],Ce,.08,[0,0,-.12]),z(Be,[-.6,1.23,0],[.18,.15,.5],fe,.05),z(Be,[.28,.94,0],[.075,.26,.91],"#bedde9",.025,[0,0,-.33],.6);for(let a of[-.75,.75])re(Be,[.22,.91,a*.84],[.31,1.04,a*1.1],.018,Ce),Se(Be,[.31,1.04,a*1.11],[.13,.055,.09],Ee,!0,.6);re(Be,[.35,.82,0],[.1,1.08,0],.035,Ce),Be.add(ut(.16,.025,28,8),te([.1,1.08,0],[1,1,1],[0,L/2,-.35]),Ce,.2);for(let a of[-.34,.34])Be.add(Ht,te([-1.64,.43,a],[.085,.2,.085],[0,0,L/2]),"#9babc2",.75);Se(Be,[-.42,1.04,0],[.24,.29,.22],fe),Se(Be,[-.36,1.29,0],[.095,.1,.09],be,!0);for(let a of[-1,1]){let l=[-.38,1.17,a*.22],d=[-.13,1.02,a*.29],m=[.09,1.09,a*.14];re(Be,l,d,.075,fe,.14,!0),re(Be,d,m,.06,fe,.14,!0),Se(Be,m,[.085,.065,.065],Ee,!0)}z(Be,[-.18,1.08,0],[.05,.31,.08],Ee,.01);let Ot=je.add(new K(Be.finish()));Ot.mesh.paintable=!0;let lt=new I;Se(lt,[0,0,0],[.335,.355,.3],be),Se(lt,[-.19,-.01,0],[.2,.35,.32],Ke),Se(lt,[-.025,.19,0],[.37,.255,.33],Qe);for(let a of[-1,1])Se(lt,[-.035,-.04,a*.29],[.13,.28,.095],Qe),Se(lt,[.308,.025,a*.13],[.02,.1,.067],Ee,!0),Se(lt,[.326,.023,a*.13],[.012,.075,.043],"#5c72a5",!0,.4),Se(lt,[.338,.015,a*.13],[.008,.048,.027],"#303c65",!0),Se(lt,[.347,.058,a*.135],[.008,.02,.018],"#fffaf1",!0,.6),Se(lt,[.296,-.1,a*.2],[.014,.038,.045],"#e9a6ab",!0),Ye(lt,[[.32,.132,a*.075],[.322,.148,a*.13],[.31,.132,a*.19]],.011,Ke),Le(lt,[.215,.165,a*.18],[.1,.24,.085],Qe,[0,0,L+.2]),lt.add(ut(.084,.014,24,7),te([.33,.24,a*.125],[1,1,1],[0,L/2,0]),"#e8c58c",.6),Se(lt,[.335,.24,a*.125],[.012,.064,.066],"#a0d8e8",!0,.6);Ye(lt,[[.317,-.148,-.037],[.326,-.16,0],[.317,-.148,.037]],.009,"#b77787"),lt.add(ut(.313,.02,40,7),te([-.025,.225,0],[1.05,1,1],[L/2,0,0]),Ce),Le(lt,[.26,.17,-.04],[.1,.25,.08],Qe,[0,0,L+.25]);let Nn=je.add(new K(lt.finish())),fn=[];for(let a of[-1.02,1.06])for(let l of[-1,1]){let d=new I;d.add(ut(.315,.095,40,12),mt,"#343b4c",.22),d.add(ut(.255,.027,32,8),ce(0,0,l*.075),"#e4e6ef",.7),d.add(Ht,te([0,0,l*.07],[.238,.07,.238],[L/2,0,0]),"#4d5576",.35);for(let S=0;S<5;S++){let A=S*k/5;re(d,[0,0,l*.116],[.23*Math.cos(A),.23*Math.sin(A),l*.116],.025,Ee,.65)}Se(d,[0,0,l*.14],[.075,.075,.022],fe,!0,.6);let m=je.add(new K(d.finish()));fn.push({n:m,x:a,z:l*.83,front:a>0})}let Us=[];for(let a of[-1,1]){let l=new I;Se(l,[0,0,0],[.65,.105,.105],"#a6f4ff",!0,.8),Se(l,[-.3,0,0],[.35,.065,.065],"#e9d1ff",!0,.7);let d=je.add(new K(l.finish()));d.shadow=!1,Us.push({n:d,side:a})}let cs=new I;z(cs,[0,.36,0],[.6,.72,2.1],"#ef97aa",.08),z(cs,[0,.78,0],[.69,.16,2.2],Ee,.035);for(let a=0;a<5;a++)z(cs,[.312,.4,(a-2)*.38],[.018,.29,.16],"#fff0c7",.015,[.28,0,0]);for(let a of[-.85,.85])re(cs,[0,.05,a],[0,.77,a],.045,"#636986");let Ga=cs.finish(),Ui=new I;z(Ui,[0,.07,0],[.8,.12,.8],Ce,.04),Le(Ui,[0,.49,0],[.28,.78,.28],"#e4b281"),Le(Ui,[0,.53,0],[.2,.16,.2],Ee);let hc=Ui.finish(),Fs=new I;Fs.add(ut(.34,.068,28,8),te([0,0,0],[1,1,1],[0,L/2,0]),"#f0d085",.7),Se(Fs,[0,0,0],[.04,.22,.22],"#ffe7a7",!0,.55);let Ha=Fs.finish(),zn=new I;z(zn,[0,.025,0],[5.5,.045,3],"#7ecadc",.02);for(let a=0;a<3;a++){let l=-1.8+a*1.6;re(zn,[l-.45,.075,-.9],[l+.35,.075,0],.055,"#eef9d0",.3),re(zn,[l+.35,.075,0],[l-.45,.075,.9],.055,"#eef9d0",.3)}let Dr=zn.finish(),Os=new I,Bs=[-2.5,0,-1.6,2.5,0,-1.6,2.5,1,-1.6,-2.5,0,1.6,2.5,0,1.6,2.5,1,1.6],Vn=[0,1,2,3,5,4,0,2,5,0,5,3,1,4,5,1,5,2],ks=[],hs=[],Nr=[];for(let a=0;a<Vn.length;a+=3){let l=Bs.slice(Vn[a]*3,Vn[a]*3+3),d=Bs.slice(Vn[a+1]*3,Vn[a+1]*3+3),m=Bs.slice(Vn[a+2]*3,Vn[a+2]*3+3),S=q(D(P(d,l),P(m,l))),A=ks.length/3;ks.push(...l,...d,...m),hs.push(...S,...S,...S),Nr.push(A,A+1,A+2)}Os.add(Ue(ks,hs,Nr),mt,"#d9b1e0");for(let a of[-1.4,1.4])re(Os,[-2.5,.06,a],[2.5,1.06,a],.045,Ee);let Wa=Os.finish(),uc=new I().add(dn,mt,"#b4eaff",.2).finish(),zs=Array.from({length:45},()=>({life:0,p:[0,0,0],v:[0,0,0],size:.1,node:new K(uc)}));for(let a of zs)a.node.shadow=!1;let tt="circuit",Kt="coast-reborn",w="coast-reborn",V={"coast-reborn":{name:"\u6C50\u89C1\u6D77\u5CB8",laps:1,biome:0,difficulty:"\u5165\u95E8 \xB7 \u9AD8\u901F\u7EC4\u5408\u5F2F",description:"\u6C50\u89C1\u7AD9\u524D \u2192 \u6D77\u6EE8\u5546\u5E97\u8857 \u2192 \u795E\u793E\u5C71\u9053 \u2192 \u6E2F\u6E7E S \u5F2F",sectors:[{at:0,name:"\u6C50\u89C1\u7AD9\u524D"},{at:.22,name:"\u6D77\u6EE8\u5546\u5E97\u8857"},{at:.48,name:"\u6E2F\u6E7E S \u5F2F"},{at:.66,name:"\u795E\u793E\u5C71\u9053"},{at:.82,name:"\u6D77\u98CE\u5927\u9053"}],points:[[-155,0,70],[-80,0,70],[0,.2,70],[85,.7,65],[135,1.2,30],[130,1.6,-20],[75,2,-28],[38,1.8,0],[0,1.5,-10],[8,.8,-58],[65,.2,-80],[115,0,-85],[130,.4,-125],[75,1,-150],[0,1.6,-145],[-60,2,-100],[-110,1.2,-135],[-155,.5,-100],[-200,0,-25],[-218,0,28],[-215,0,70]]},"sakura-reborn":{name:"\u82B1\u89C1\u5742",laps:2,biome:1,difficulty:"\u8FDB\u9636 \xB7 \u8FDE\u7EED\u53CD\u5411\u5F2F",description:"\u6A31\u82B1\u6821\u95E8 \u2192 \u82B1\u89C1\u5742\u5546\u5E97\u8857 \u2192 \u795E\u793E\u53C2\u9053 \u2192 \u6CB3\u5CB8\u56DE\u73AF",sectors:[{at:0,name:"\u6A31\u82B1\u7AD9\u524D"},{at:.22,name:"\u82B1\u89C1\u5742\u5546\u5E97\u8857"},{at:.47,name:"\u6CB3\u5CB8\u56DE\u73AF"},{at:.66,name:"\u795E\u793E\u53C2\u9053"},{at:.83,name:"\u6A31\u82B1\u5927\u9053"}],points:[[-180,0,70],[-95,0,70],[0,0,70],[95,.4,62],[170,1,16],[160,1.6,-45],[100,2,-70],[55,2.2,-30],[5,2,-55],[-16,1,-110],[-80,.5,-130],[-145,0,-104],[-220,0,-45],[-230,0,25],[-230,0,70]]}};V["academy-reborn"]={name:"\u661F\u8DC3\u8BAD\u7EC3\u573A",laps:1,biome:1,difficulty:"\u57FA\u7840\u9A7E\u9A76",description:"\u5BBD\u7F13\u5F2F\u9053 \xB7 \u6E05\u6670\u89C6\u91CE \xB7 \u7EC3\u4E60\u8D77\u6F02\u3001\u53CD\u6253\u4E0E\u51FA\u5F2F\u55B7\u5C04",sectors:[{at:0,name:"\u57FA\u7840\u76F4\u9053"},{at:.33,name:"\u6F02\u79FB\u5F27\u7EBF"},{at:.66,name:"\u51FA\u5F2F\u52A0\u901F"}],points:[[-100,0,65],[0,0,65],[100,0,65],[145,.3,25],[145,.4,-25],[100,.2,-65],[0,0,-65],[-100,0,-65],[-145,.1,-25],[-145,.1,25]]};for(let[a,l]of Object.entries(V)){let d=a==="coast-reborn"?1.45:a==="sakura-reborn"?1.5:1.2;l.points=l.points.map(m=>[m[0]*d,m[1],m[2]*d])}let ne=[],Z=0,ee={};Je();let Jt=220,Vt=245,Pt=1.57,Zt=.91,We=8.045,Wt=(a,l)=>a[0]*l[0]+a[1]*l[1],St=(a,l)=>a[0]*l[1]-a[1]*l[0],Bt=new Map,ui=null,nu=null,fc=[],Vf=jn("petal",a=>z(a,[0,0,0],[.12,.025,.075],"#ffd2e8",.025)),_t=null,Rn=!0,Yf=(()=>{let a=(A,E,F)=>Math.min(F,Math.max(E,A)),l=(A,E,F)=>A+(E-A)*F,d=A=>Math.atan2(Math.sin(A),Math.cos(A)),m=Object.freeze({cruise:52,mini:63,nitro:76,combo:83,normalTurn:1.04,driftTurn:1.8,driveAcceleration:27,jetAcceleration:36});function S(A,E,F,O={}){if(O.road)return di.step(A,E,F,O);let Y=Math.hypot(A.vS,A.vL),pe=Y>.05?Math.atan2(A.vL,A.vS):A.yaw,ie=a(Number(E.steer)||0,-1,1),ve=O.sensitivity||1,xe=A.vS*Math.cos(A.yaw)+A.vL*Math.sin(A.yaw)<-.05,Me=A.steering||0,Te=ie*Me>=0&&Math.abs(ie)>Math.abs(Me),Re=O.arcadeCandidate&&Te?Math.max(8,26/(1+Math.max(0,Y-30)/10)):26;A.steering=l(Me,ie,1-Math.exp(-F*Re));let ue=!!A.drifting,le=A.driftSide||Math.sign(ie)||1,Ie=ue&&ie*le<-.1,Ne=ue&&A.driftReleasing,Ze=A.steering*m.normalTurn*ve*a(Y/8,0,1)*(xe?-1:1);if(ue){let Ep=Math.max(0,A.steering*le),Cp=le*(Ie?.4:.52+Ep*(m.driftTurn-.52)),Rp=Ne?a((A.releaseAge||0)/.38,0,1):0;Ze=l(Cp,Ze,Rp)*a(Y/9,0,1)}A.jump>.2&&(Ze*=.35),A.turnRate=l(A.turnRate||0,Ze,1-Math.exp(-F*(ue?13:19)));let we=d(pe+A.turnRate*F),kt=d(pe-(xe?Math.PI:0)),hn=d(A.yaw-kt),yn=ue?le*(Ie?.015:Ne?.12:.22+.38*Math.max(0,ie*le)):A.steering*.025;Ne&&(yn*=1-a((A.releaseAge||0)/.45,0,1));let rn=Ie?13:ue?9:8;hn=l(hn,yn,1-Math.exp(-F*rn)),A.yaw=d(we-(xe?Math.PI:0)+hn+(A.spin||0)*F),A.spin=(A.spin||0)*Math.exp(-F*6);let en=Y,er=.7+Y*.018+Y*Y*45e-5,bs=A.nitroTime>0||A.mini>0||A.pad>0,Wi=A.nitroTime>0?A.comboTimer>0?m.combo:m.nitro:A.pad>0?73:A.mini>0?m.mini:m.cruise,Tp=E.gas&&!E.brake?a((m.cruise-en)*2.8,0,m.driveAcceleration):0,ku=bs&&!E.brake?a((Wi-en)*2.8,0,m.jetAcceleration):0,Ap=ue?(Ie?1.3:3.3)*Math.abs(hn):0;return en=Math.max(0,en+(Tp+ku-er-Ap)*F),!bs&&en>m.cruise&&(en=Math.max(m.cruise,en-Math.min(8,(en-m.cruise)*.7)*F)),E.brake&&(en=Math.max(0,en-36*F)),xe&&E.gas&&(en=Math.max(0,en-32*F)),E.brake&&!E.gas&&(Y<1.3||xe)?(A.vS=l(A.vS,-Math.cos(A.yaw)*5,1-Math.exp(-F*5)),A.vL=l(A.vL,-Math.sin(A.yaw)*5,1-Math.exp(-F*5))):(A.vS=Math.cos(we)*en,A.vL=Math.sin(we)*en),A.speed=Math.hypot(A.vS,A.vL),A.velocityYaw=we,A.lateralSpeed=A.vL,{slip:hn,counter:Ie,thrust:ku,boost:bs,speed:A.speed}}return{step:S,config:m,wrap:d}})(),pn=a=>Math.atan2(Math.sin(a),Math.cos(a)),U=a=>document.getElementById(a),Bi=U("game"),bt={gas:!1,brake:!1,left:!1,right:!1,drift:!1,boost:!1,small:!1},Ja=new Set,Za=new Map,Hn={drift:0,boost:0,small:0},gc=[{name:"\u6C50\u89C1\u6D77\u5CB8",ground:"#cbdcbd",tree:"#b9d5bb",accent:"#afc8e4",fog:"#c8deef"},{name:"\u82B1\u89C1\u5742",ground:"#d9d7c7",tree:"#f0bfd5",accent:"#c9c1e5",fog:"#dcdff1"},{name:"\u661F\u5149\u5CE1\u8C37",ground:"#c4b8c3",tree:"#a7a5d3",accent:"#d8b4d8",fog:"#dbdce8"}],_={s:0,l:0,speed:0,yaw:0,velocityYaw:0,energy:0,coins:0,score:0,inv:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,wallRecover:0,wallSide:0,stuckTime:0},Ka=1/120,iv=7.02,au=new Map,_c=null,us=0,Hs=60,Ur=0,ds=null,jf=new I().add(Et(1,.009,.12,.003),mt,"#414957",.01).finish(),fs=Array.from({length:160},()=>({life:0,p:[0,0,0],angle:0,length:1,node:new K(jf)}));for(let a of fs)a.node.shadow=!1;let Qf=0,rt="ready",Ws=(Date.now()>>>0)%999999||24681,$a=1,Qn=[],Fr=0,xc=-L/2,vc=100,ja=0,nn=new Map,yc=0,Wn=0,Xs=0,Qa=performance.now(),ki=3,Xn=0,qs=0,Or=0,Br=0,ou=!1,eo=!1,kr=0,to=0;try{kr=Number(localStorage.getItem("star-rush-best-distance")||0),to=Number(localStorage.getItem("star-rush-best-score")||0)}catch{}let qn=Object.fromEntries(["distance","score","coins","speed","gear","energyText","biome","turnText","turnArrowPath","driftText"].map(a=>[a,U(a)])),Js=null,zr=null,ms=null,wc=U("minimap"),nt=wc.getContext("2d"),Tc=0,no={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"small",KeyQ:"small",ShiftLeft:"drift",ShiftRight:"drift",KeyE:"boost",KeyC:"boost"};window.addEventListener("keydown",a=>{if(!a.target.closest("input,select,textarea")){if(a.code==="Escape"){for(let l of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])if(!U(l).hidden){xs(l);return}}if(!["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)){if(no[a.code]&&(a.preventDefault(),Ja.add(a.code),Gs()),a.code==="Backspace"){a.preventDefault(),a.repeat||bc(!1);return}a.repeat||(a.code==="F2"&&(a.preventDefault(),U("diagnostics").hidden=!U("diagnostics").hidden),(a.code==="KeyP"||a.code==="Escape")&&zi(),a.code==="KeyV"&&(Xn=(Xn+1)%3,xn("CAMERA "+(Xn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Xn],1)),a.code==="KeyR"&&Ys(!1),a.code==="Enter"&&(rt==="ready"||rt==="finished"?Ys(!1):rt==="paused"&&zi()))}}}),window.addEventListener("keyup",a=>{["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)||no[a.code]&&(a.preventDefault(),Ja.delete(a.code),Gs())}),window.addEventListener("blur",()=>{ps(),rt==="running"&&zi()});for(let a of document.querySelectorAll("[data-key]")){a.addEventListener("pointerdown",d=>{d.preventDefault(),a.setPointerCapture(d.pointerId),Za.set(d.pointerId,a.dataset.key),Gs(),a.classList.add("held")});let l=d=>{Za.delete(d.pointerId),Gs(),a.classList.remove("held")};for(let d of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(d,l)}U("endRunBtn").onclick=()=>{tt==="endless"&&(rt==="running"||rt==="paused")&&(U("paused").hidden=!0,Sc())},U("recoverBtn").onclick=()=>bc(!1),U("startBtn").onclick=()=>Ys(!1),U("retryBtn").onclick=()=>Ys(!1),U("newRouteBtn").onclick=()=>{if(typeof oe<"u"&&oe.room){Zr();return}rt="ready",ti(!0),U("finished").hidden=!0,U("welcome").hidden=!1},U("rerollBtn").onclick=()=>ti(!0),U("pauseBtn").onclick=zi,U("resumeBtn").onclick=zi,U("restartPause").onclick=()=>Ys(!1),U("viewBtn").onclick=()=>{Xn=(Xn+1)%3,xn("CAMERA "+(Xn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Xn],1)},U("soundBtn").onclick=()=>{qa(),Rn=!Rn,_t&&_t.ctx.resume().catch(()=>{}),U("soundBtn").textContent=Rn?"\u266B":"\u266A",U("soundBtn").setAttribute("aria-label",Rn?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),U("soundBtn").title=Rn?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED",Rn&&Oi(600)};let ap=["#a1cddd","#c2d4bc"].map(a=>new I().add(Et(1100,.16,1100,.04),mt,a,.02).finish()),io=new K,Vr=[],Gr=1,Hr=1;new ResizeObserver(pu).observe(i),pu(),ti(!1),i.addEventListener("webglcontextlost",a=>{a.preventDefault(),n("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u6E38\u620F\u3002")}),document.addEventListener("visibilitychange",()=>{document.hidden&&rt==="running"&&zi(),Qa=performance.now()}),requestAnimationFrame(mu);let gs=Kt,Wr=null,wi="circuit",Ti=!1,Ac=0;async function Xr(){let a=++Ac,l=U("rankRows");U("rankTrack")&&(U("rankTrack").hidden=wi!=="circuit"),l.replaceChildren(),U("rankStatus").textContent=Ti?"\u672C\u673A\u8BB0\u5F55":"\u6B63\u5728\u83B7\u53D6\u5728\u7EBF\u6210\u7EE9\u2026";for(let[d,m]of[["boardCircuit","circuit"],["boardEndless","endless"]])U(d).classList.toggle("selected",!Ti&&wi===m);U("boardLocal").classList.toggle("selected",Ti);try{let d;if(Ti)d=gu().filter(m=>m.mode===wi&&(m.mode==="endless"||m.track===gs)).sort((m,S)=>wi==="circuit"?m.timeMs-S.timeMs:S.distance-m.distance).slice(0,20);else{let m=await fetch("/api/leaderboard?mode="+wi+"&track="+encodeURIComponent(gs));if(!m.ok)throw new Error("\u699C\u5355\u670D\u52A1\u6682\u4E0D\u53EF\u7528");d=(await m.json()).runs}if(a!==Ac)return;for(let m=0;m<d.length;m++)l.appendChild(lp(m,d[m]));U("rankStatus").textContent=d.length?(Ti?"\u5F53\u524D\u8BBE\u5907 \xB7 ":"\u5728\u7EBF \xB7 ")+(wi==="circuit"?V[gs].name+" / "+V[gs].laps+" \u5708 / \u6309\u6700\u5FEB\u7528\u65F6":"\u65E0\u5C3D\u6A21\u5F0F / \u6309\u6700\u8FDC\u91CC\u7A0B"):"\u8FD8\u6CA1\u6709\u6210\u7EE9\uFF0C\u6765\u8DD1\u7B2C\u4E00\u5708\u3002"}catch{if(a!==Ac)return;U("rankStatus").textContent="\u5728\u7EBF\u699C\u6682\u65F6\u672A\u80FD\u52A0\u8F7D\uFF0C\u53EF\u5207\u6362\u201C\u672C\u673A\u8BB0\u5F55\u201D\u3002"}}U("rankBtn").onclick=cp,U("closeRank").onclick=()=>xs("rankPanel"),U("boardCircuit").onclick=()=>{wi="circuit",Ti=!1,Xr()},U("boardEndless").onclick=()=>{wi="endless",Ti=!1,Xr()},U("boardLocal").onclick=()=>{Ti=!0,Xr()},U("circuitMode").onclick=()=>_u("circuit"),U("endlessMode").onclick=()=>_u("endless");try{U("racerName").value=localStorage.getItem("star-rush-name")||""}catch{}U("submitRun").onclick=async()=>{if(!Wr)return;let a=U("racerName").value.trim().slice(0,16)||"\u533F\u540D\u8F66\u624B";try{localStorage.setItem("star-rush-name",a)}catch{}U("submitRun").disabled=!0,U("uploadStatus").textContent="\u6B63\u5728\u4E0A\u4F20\u6210\u7EE9\u2026";try{if(!(await fetch("/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...Wr,name:a})})).ok)throw new Error;U("submitRun").textContent="\u5DF2\u4E0A\u4F20",U("uploadStatus").textContent="\u4E0A\u4F20\u6210\u529F\uFF01\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u699C\u201D\u67E5\u770B\u548C\u670B\u53CB\u7684\u6392\u540D\u3002"}catch{U("submitRun").disabled=!1,U("uploadStatus").textContent="\u6682\u65F6\u672A\u80FD\u4E0A\u4F20\uFF0C\u672C\u673A\u6210\u7EE9\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u91CD\u8BD5\u3002"}};for(let a of document.querySelectorAll("[data-track]"))a.onclick=()=>xu(a.dataset.track);qr();let Zs=document.createElement("select");Zs.id="rankTrack",Zs.setAttribute("aria-label","\u6392\u884C\u699C\u8D5B\u9053");for(let[a,l]of Object.entries(V)){let d=document.createElement("option");d.value=a,d.textContent=l.name,Zs.appendChild(d)}U("rankStatus").before(Zs),Zs.onchange=()=>{gs=Zs.value,Xr()};let vn={enabled:!0,volume:.4,sfxVolume:.75};try{Object.assign(vn,JSON.parse(localStorage.getItem("star-rush-audio")||"{}"))}catch{}let ct={mode:"synth",bus:null,step:0,next:0,files:[],index:0,url:null,element:null},Jr=!1;U("musicBtn").onclick=()=>{Yr(),Ks("musicPanel")},U("closeMusic").onclick=()=>xs("musicPanel"),U("helpBtn").onclick=U("welcomeHelp").onclick=()=>Ks("helpPanel"),U("closeHelp").onclick=()=>xs("helpPanel"),U("synthMusic").onclick=()=>so("synth"),U("classicMusic").onclick=()=>so("classic"),U("musicFiles").onchange=a=>{ct.files=Array.from(a.target.files||[]),ro(0)},U("nextSong").onclick=()=>ro(ct.index+1),U("previousSong").onclick=()=>ro(ct.index-1),U("musicToggle").onclick=()=>{Yr(),vn.enabled=!vn.enabled,U("musicToggle").textContent=vn.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",Ec()},U("musicVolume").value=Math.round(vn.volume*100),U("sfxVolume").value=Math.round(vn.sfxVolume*100),U("musicToggle").textContent=vn.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",U("musicVolume").oninput=a=>{vn.volume=Number(a.target.value)/100,Ec()},U("sfxVolume").oninput=a=>{vn.sfxVolume=Number(a.target.value)/100,Ec()},U("classicTrack").onchange=()=>{so("classic"),U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"};let oe={id:crypto.randomUUID(),room:null,members:[],ready:!1,busy:!1,lastSync:0,offset:0,startAt:0,runTag:0,peers:new Map,errors:0,rtt:0,session:0},ao=["#f6aec9","#ffd88b","#baafff","#a8efce"],up=ao.map(a=>{let l=new I;return Le(l,[0,2.55,0],[.14,.28,.14],a,[0,0,L]),l.finish()});async function Rc(a,l={}){let d=Date.now(),m=await fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:a,id:oe.id,code:oe.room?.code||U("roomCode").value.trim(),name:U("roomName").value.trim()||"\u533F\u540D\u8F66\u624B",track:Kt,...l}),signal:AbortSignal.timeout(4e3)}),S=await m.json();if(!m.ok)throw new Error(S.error||"\u623F\u95F4\u8BF7\u6C42\u5931\u8D25");if(oe.rtt=Date.now()-d,S.serverTime){let A=S.serverTime-(d+Date.now())/2;oe.offset=oe.room?$(oe.offset,A,.25):A}return S}async function Su(a){if(!oe.busy){oe.busy=!0,U("roomStatus").textContent="\u6B63\u5728\u8FDE\u63A5\u623F\u95F4\u2026";try{let l=await Rc(a);oe.session++,Mu(),Kt=l.room.track,tt="circuit",ti(!1),qr(),Pc(l),rt="ready",Jr=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Bi.classList.add("menu-open");try{localStorage.setItem("star-rush-name",U("roomName").value.trim())}catch{}}catch(l){U("roomStatus").textContent=l.message}finally{oe.busy=!1}}}async function bu(a,l={}){if(oe.busy)return;oe.busy=!0;let d=oe.session;try{let m=await Rc(a,l);d===oe.session&&oe.room&&Pc(m)}catch(m){U("roomStatus").textContent=m.message}finally{oe.busy=!1}}async function fp(){if(!oe.room)return;let a={action:"leave",id:oe.id,code:oe.room.code,name:U("roomName").value};oe.session++,oe.room=null,oe.startAt=0,oe.runTag=0,oe.members=[],Mu(),rt="ready",ti(!1),U("finished").hidden=!0,U("paused").hidden=!0,U("countdown").hidden=!0,U("welcome").hidden=!1,Bi.classList.add("menu-open"),Ic(),fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),keepalive:!0}).catch(()=>{})}U("roomBtn").onclick=U("welcomeRoom").onclick=Zr,U("closeRoom").onclick=()=>xs("roomPanel"),U("createRoom").onclick=()=>Su("create"),U("joinRoom").onclick=()=>Su("join"),U("readyRoom").onclick=()=>bu("ready",{ready:!oe.ready}),U("startRoom").onclick=()=>bu(oe.room?.status!=="lobby"?"reset":"start"),U("leaveRoom").onclick=fp,U("copyRoom").onclick=async()=>{if(!oe.room)return;let a=new URL(location.href);a.searchParams.set("room",oe.room.code);try{await navigator.clipboard.writeText(a.toString()),U("roomStatus").textContent="\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5373\u53EF\u52A0\u5165"}catch{U("roomStatus").textContent="\u623F\u95F4\u7801 "+oe.room.code+" \xB7 \u590D\u5236\u6D4F\u89C8\u5668\u5730\u5740\u5E76\u52A0\u4E0A ?room="+oe.room.code}};try{U("roomName").value=localStorage.getItem("star-rush-name")||"\u8F66\u624B"+Math.floor(100+Math.random()*900)}catch{}let Au=new URLSearchParams(location.search).get("room");Au&&(U("roomCode").value=Au.toUpperCase().slice(0,6),Zr()),window.addEventListener("pagehide",()=>{oe.room&&navigator.sendBeacon("/api/rooms",new Blob([JSON.stringify({action:"leave",id:oe.id,code:oe.room.code})],{type:"application/json"}))});let Yn=[],Vi=!1,Ai=null,Lc={drawCalls:0,triangles:0},vs=!1,ys=null,Gi=null,Hi=null,$s=0,oo=[],lo=0,co=[],js=[],Ms=1,Kr=1,Ss=null,ho=0,mp=["Aoi / AI","Haru / AI","Rin / AI"],Eu=["#f0a7c8","#b6a7e6","#f1cd90"],Cu=["#a5dbe6","#f0b7c3"].map(a=>{let l=new I;return re(l,[-.6,.03,-.38],[.1,.03,0],.055,a),re(l,[.1,.03,0],[-.6,.03,.38],.055,a),l.finish()}),Dc=Array.from({length:9},()=>new K(Cu[0]));for(let a of Dc)a.shadow=!1;let Qs=[],Nc=0,Fu=performance.now(),Uc={},Fc=!1,Ou={quality:"auto",sensitivity:1,fov:62,autoGas:!1,line:!0,ghost:!0},sn={...Ou},Qt={name:"\u8F66\u624B"+Math.floor(100+Math.random()*900),paint:"#83cde4",car:"Mint Comet"},Ei="race";try{Object.assign(sn,JSON.parse(localStorage.getItem("star-rush-settings-reborn")||"{}")),Object.assign(Qt,JSON.parse(localStorage.getItem("star-rush-profile")||"{}")),Qt.name=localStorage.getItem("star-rush-name")||Qt.name}catch{}let bp=[["Mint Comet","#83cde4","\u8584\u8377\u5F57\u661F"],["Sakura Bloom","#efabc8","\u6A31\u82B1\u7EFD\u653E"],["Violet Hour","#b1a0df","\u66AE\u8272\u7D2B"],["Solar Flare","#edc784","\u65E5\u5149\u91D1"]];U("settingsBtn").onclick=()=>{Oc(),Ks("settingsPanel")},U("closeSettings").onclick=()=>xs("settingsPanel");for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).onchange=d=>{sn[l]=d.target.checked,$r()};U("qualitySetting").onchange=a=>{sn.quality=a.target.value,$r()},U("steeringSetting").oninput=a=>{sn.sensitivity=Number(a.target.value)/100,$r()},U("fovSetting").oninput=a=>{sn.fov=Number(a.target.value),$r()},U("resetSettings").onclick=()=>{sn={...Ou},$r(),Oc()};for(let[a,l,d]of bp){let m=document.createElement("button");m.type="button",m.style.setProperty("--paint",l),m.setAttribute("aria-label",d+"\u6D82\u88C5");let S=document.createElement("i"),A=document.createElement("b"),E=document.createElement("small");A.textContent=a,E.textContent=d,m.append(S,A,E),m.onclick=()=>{Qt.paint=l,Qt.car=a;for(let F of U("garageGrid").children)F.classList.toggle("selected",F===m);fo()},Qt.paint===l&&m.classList.add("selected"),U("garageGrid").appendChild(m)}U("garageBtn").onclick=()=>Ks("garagePanel"),U("closeGarage").onclick=()=>xs("garagePanel"),U("saveProfile").onclick=fo,U("profileName").value=Qt.name,fo(),U("eventType").onchange=a=>{Ei=a.target.value,Ei==="practice"&&xu("academy-reborn")},U("pauseHome").onclick=Bu,U("newRouteBtn").onclick=Bu,U("demoBtn").onclick=()=>{Ys(!1),Vi=!0,xn("DEMO DRIVE","\u81EA\u52A8\u8BD5\u9A7E \xB7 \u6309\u4EFB\u610F\u65B9\u5411\u952E\u63A5\u7BA1",2)},window.addEventListener("keydown",a=>{a.target.closest("input,select,textarea")||["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a.code)&&Vi&&(Vi=!1,Ai=null,xn("YOUR TURN","\u5DF2\u63A5\u7BA1\u8D5B\u8F66",1))}),U("compatNotice").hidden=!x,wp(),Oc(),uo();for(let a of["racerName","roomName"])U(a).addEventListener("change",()=>{U("profileName").value=U(a).value,fo()});if(s){for(let l of["score","coins"])U(l).closest(".stat").hidden=!0;for(let l of["resultScore","resultBest"])U(l).parentElement.hidden=!0;let a=document.querySelector(".ready-controls");for(let l of[...a.childNodes])l!==U("welcomeHelp")&&l.remove();a.prepend(document.createTextNode("W / \u2191 \u6CB9\u95E8 \xB7 S / \u2193 \u5236\u52A8 \xB7 A D \u8F6C\u5411\u3000")),U("welcomeHelp").textContent="\u9A7E\u9A76\u8BFE\u5802\uFF1A\u5236\u52A8 \u2192 \u8F6C\u5411 \u2192 \u6062\u590D \u2197",document.querySelector("#settingsPanel .board-note").textContent="W / \u2191 \u6CB9\u95E8\uFF0CS / \u2193 \u5236\u52A8\uFF0CA D \u8F6C\u5411\uFF0C\u9000\u683C\u56DE\u6B63\u3002\u652F\u6301\u6807\u51C6\u624B\u67C4\uFF1BF2 \u6253\u5F00\u6027\u80FD\u4E0E\u9A7E\u9A76\u6570\u636E\u3002",document.querySelector(".nitro").hidden=!0;for(let l of document.querySelectorAll("[data-key=small],[data-key=boost],[data-key=drift]"))l.hidden=!0;document.querySelector(".guide").textContent="W / \u2191 \u6CB9\u95E8 \xB7 S / \u2193 \u5236\u52A8 \xB7 A D \u8F6C\u5411 \xB7 \u9000\u683C\u56DE\u6B63",document.querySelector("#welcome .intro").textContent="\u516C\u8DEF\u9A7E\u9A76\u5019\u9009\uFF1A\u5165\u5F2F\u524D\u5236\u52A8\uFF0C\u7A33\u5B9A\u8F6C\u5411\uFF0C\u51FA\u5F2F\u518D\u52A0\u6CB9\u3002\u65E0\u55B7\u5C04\u4E0E\u52A0\u901F\u5E26\uFF0C\u9ED8\u8BA4\u57FA\u7EBF\u672A\u6539\u53D8\u3002",document.querySelector("#helpPanel h2").textContent="\u5148\u628A\u4E00\u6BB5\u5F2F\u9053\u5F00\u987A\u3002",document.querySelector("#helpPanel .lesson-grid").innerHTML="<article><b>\u6CB9\u95E8\u4E0E\u5236\u52A8</b><p>W / \u2191 \u52A0\u901F\uFF0CS / \u2193 \u5236\u52A8\u3002\u63A5\u8FD1\u505C\u4E0B\u540E\u7EE7\u7EED\u6309 S \u53EF\u5012\u8F66\u3002\u5148\u5728\u76F4\u7EBF\u4E0A\u51CF\u901F\uFF0C\u518D\u5E73\u987A\u8F6C\u5411\u3002</p></article><article><b>\u4FA7\u6ED1\u4E0E\u6062\u590D</b><p>A D \u6216\u5DE6\u53F3\u65B9\u5411\u952E\u63A7\u5236\u524D\u8F6E\u3002\u6293\u5730\u6709\u9650\uFF0C\u8FC7\u5FEB\u5165\u5F2F\u4F1A\u8F6C\u5411\u4E0D\u8DB3\uFF1B\u8F6E\u80CE\u4FA7\u6ED1\u65F6\u677E\u6CB9\u5E76\u9002\u91CF\u4FEE\u6B63\uFF0C\u907F\u514D\u8FDE\u7EED\u5927\u5E45\u53CD\u6253\u3002</p></article><article><b>\u78B0\u649E\u4E0E\u8DD1\u5708</b><p>\u62A4\u680F\u5212\u5B9A\u771F\u5B9E\u8D5B\u9053\u8FB9\u754C\uFF1B\u968F\u673A\u9525\u6876\u4E0E\u8DEF\u969C\u53EA\u5728\u62A4\u680F\u5916\u88C5\u9970\uFF0C\u8D5B\u9053\u5185\u4E0D\u6536\u96C6\u91D1\u5E01\u3002\u9000\u683C\u56DE\u6B63\u589E\u52A0\u4E24\u79D2\u3002\u5019\u9009\u65E0\u6C2E\u6C14\u3001\u5C0F\u55B7\u3001\u8DF3\u53F0\u4E0E\u52A0\u901F\u5E26\uFF1B\u5BF9\u624B\u4F7F\u7528\u76F8\u540C\u8F66\u4F53\uFF0F\u6293\u5730\u4E0E\u9053\u8DEF\u79EF\u5206\uFF0C\u8DEF\u5F84\u63A7\u5236\u4E0D\u540C\uFF1B\u4ECD\u4E3A\u975E\u63A5\u89E6\u5BF9\u624B\uFF0C\u4E0D\u5192\u5145\u5B8C\u6574\u5BF9\u624B\u78B0\u649E\u3002</p></article>",document.querySelector("#helpPanel .board-note").textContent="\u53C2\u8003\u5730\u5E73\u7EBF\u7684\u9A7E\u9A76\u53CD\u9988\u76EE\u6807\uFF1B\u539F\u521B\u8F7B\u91CF\u6A21\u578B\uFF0C\u5E76\u975E\u5176\u7269\u7406\u5B9E\u73B0\u3002",U("settingsStatus").textContent+=" \u516C\u8DEF\u5019\u9009\uFF1A\u65E0\u55B7\u5C04\u8FDE\u62DB\u3002"}Cf(document,{"coast-reborn":"/assets/course-art/coast-v2.bd2e4837727f.webp","sakura-reborn":"/assets/course-art/sakura-v1.3b94eedaa6d8.webp","academy-reborn":"/assets/course-art/academy-v1.9c6071e18e14.webp"})}catch(h){console.error(h),n("\u6E38\u620F\u521D\u59CB\u5316\u5F02\u5E38\uFF1A"+h.message)}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

/*! Three.js license
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
