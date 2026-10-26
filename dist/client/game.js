(()=>{function Nu(i,t,e,{fetchImpl:n=globalThis.fetch,timeoutMs:s=5e3}={}){let r=new Map,o={light:"idle",medium:"idle"},c=new Set,h=null,u=!1,g="none",M=0,p=new Set;function y(){return h||(h=Promise.all(["light","medium"].map(async m=>{if(u)return;o[m]="loading";let N=new AbortController;p.add(N);let z;try{let E=(async()=>{if(typeof e[m]!="string"||!e[m].startsWith("/assets/impact-audio/"))throw Error("Missing rail asset");let P=await n(e[m],{signal:N.signal});if(!P.ok)throw Error("Rail asset HTTP error");let F=await P.arrayBuffer();if(F.byteLength>5e4)throw Error("Rail asset oversized");let T=await i.decodeAudioData(F);if(!(T.duration>0&&T.duration<=1)||T.numberOfChannels!==1)throw Error("Invalid rail clip");return T})(),L=await Promise.race([E,new Promise((P,F)=>{z=setTimeout(()=>{N.abort(),F(Error("Rail asset timeout"))},s)})]);u||(r.set(m,L),o[m]="ready")}catch{u||(o[m]="fallback")}finally{clearTimeout(z),p.delete(N)}})),h)}function w(){for(let m of[...c]){try{m.source.stop()}catch{}m.cleanup()}}function C(m){if(u||i.state!=="running"||!Number.isFinite(m)||m<.7)return!1;let N=m>5?"medium":"light",z=r.get(N);if(!z)return g=N+" fallback",!1;if(c.size>=4){let F=c.values().next().value;try{F.source.stop()}catch{}F.cleanup()}let E,L,P;try{return E=i.createBufferSource(),L=i.createGain(),E.buffer=z,L.gain.value=.15,E.connect(L),L.connect(t),P={source:E,cleanup(){c.delete(P),E.onended=null,E.disconnect(),L.disconnect()}},E.onended=()=>P.cleanup(),c.add(P),E.start(),E.stop(i.currentTime+z.duration+.02),g=N,M++,!0}catch{return P?P.cleanup():(E?.disconnect(),L?.disconnect()),g=N+" fallback",!1}}function v(){u=!0;for(let m of p)m.abort();w(),r.clear()}return{load:y,play:C,stop:w,dispose:v,status:()=>({states:{...o},active:c.size,last:g,played:M})}}var sd=0,uh=1,rd=2;var wa=1,dl=2,yr=3,as=0,pn=1,Mi=2,Si=0,Mr=1,dh=2,fh=3,ph=4,ad=5;var Ps=100,od=101,ld=102,cd=103,hd=104,ud=200,dd=201,fd=202,pd=203,mh=204,gh=205,md=206,gd=207,_d=208,xd=209,vd=210,yd=211,Md=212,Sd=213,bd=214,No=0,Uo=1,Fo=2,dr=3,Oo=4,Bo=5,zo=6,ko=7,_h=0,Td=1,wd=2,si=0,xh=1,vh=2,yh=3,Aa=4,Mh=5,Sh=6,bh=7;var Th=300,os=301,Is=302,fl=303,pl=304,Ea=306,Vo=1e3,gi=1001,Go=1002,je=1003,Ad=1004;var Ca=1005;var fn=1006,ml=1007;var ls=1008;var Nn=1009,wh=1010,Ah=1011,Sr=1012,gl=1013,ri=1014,Yn=1015,ai=1016,_l=1017,xl=1018,br=1020,Eh=35902,Ch=35899,Rh=1021,Ph=1022,Jn=1023,_i=1026,cs=1027,Tr=1028,vl=1029,hs=1030,yl=1031;var Ml=1033,Ra=33776,Pa=33777,Ia=33778,La=33779,Sl=35840,bl=35841,Tl=35842,wl=35843,Al=36196,El=37492,Cl=37496,Rl=37488,Pl=37489,Da=37490,Il=37491,Ll=37808,Dl=37809,Nl=37810,Ul=37811,Fl=37812,Ol=37813,Bl=37814,zl=37815,kl=37816,Vl=37817,Gl=37818,Hl=37819,Wl=37820,Xl=37821,ql=36492,Yl=36494,Jl=36495,Zl=36283,Kl=36284,Na=36285,$l=36286;var na=2300,Ho=2301,Lo=2302,sh=2303,rh=2400,ah=2401,oh=2402;var Ed=3200;var jl=0,Cd=1,Bi="",En="srgb",ia="srgb-linear",sa="linear",Ue="srgb";var Do=7680;var Rd=519,Pd=512,Id=513,Ld=514,Ql=515,Dd=516,Nd=517,tc=518,Ud=519,Fd=35044,Ih=35048;var Lh="300 es",ii=2e3,fr=2001;function mp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=ra("canvas");return i.style.display="block",i}var Uu={},pr=null;function Dh(...i){let t="THREE."+i.shift();pr?pr("log",t,...i):console.log(t,...i)}function Bd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ie(...i){i=Bd(i);let t="THREE."+i.shift();if(pr)pr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function re(...i){i=Bd(i);let t="THREE."+i.shift();if(pr)pr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cs(...i){let t=i.join(" ");t in Uu||(Uu[t]=!0,ie(...i))}function zd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kd={[No]:Uo,[Fo]:zo,[Oo]:ko,[dr]:Bo,[Uo]:No,[zo]:Fo,[ko]:Oo,[Bo]:dr},xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Uc=Math.PI/180,Wo=180/Math.PI;function Ua(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function _p(i,t){return(i%t+t)%t}function Fc(i,t,e){return(1-e)*i+e*t}function Zr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ae=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,c){let h=n[s+0],u=n[s+1],g=n[s+2],M=n[s+3],p=r[o+0],y=r[o+1],w=r[o+2],C=r[o+3];if(M!==C||h!==p||u!==y||g!==w){let v=h*p+u*y+g*w+M*C;v<0&&(p=-p,y=-y,w=-w,C=-C,v=-v);let m=1-c;if(v<.9995){let N=Math.acos(v),z=Math.sin(N);m=Math.sin(m*N)/z,c=Math.sin(c*N)/z,h=h*m+p*c,u=u*m+y*c,g=g*m+w*c,M=M*m+C*c}else{h=h*m+p*c,u=u*m+y*c,g=g*m+w*c,M=M*m+C*c;let N=1/Math.sqrt(h*h+u*u+g*g+M*M);h*=N,u*=N,g*=N,M*=N}}t[e]=h,t[e+1]=u,t[e+2]=g,t[e+3]=M}static multiplyQuaternionsFlat(t,e,n,s,r,o){let c=n[s],h=n[s+1],u=n[s+2],g=n[s+3],M=r[o],p=r[o+1],y=r[o+2],w=r[o+3];return t[e]=c*w+g*M+h*y-u*p,t[e+1]=h*w+g*p+u*M-c*y,t[e+2]=u*w+g*y+c*p-h*M,t[e+3]=g*w-c*M-h*p-u*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,c=Math.cos,h=Math.sin,u=c(n/2),g=c(s/2),M=c(r/2),p=h(n/2),y=h(s/2),w=h(r/2);switch(o){case"XYZ":this._x=p*g*M+u*y*w,this._y=u*y*M-p*g*w,this._z=u*g*w+p*y*M,this._w=u*g*M-p*y*w;break;case"YXZ":this._x=p*g*M+u*y*w,this._y=u*y*M-p*g*w,this._z=u*g*w-p*y*M,this._w=u*g*M+p*y*w;break;case"ZXY":this._x=p*g*M-u*y*w,this._y=u*y*M+p*g*w,this._z=u*g*w+p*y*M,this._w=u*g*M-p*y*w;break;case"ZYX":this._x=p*g*M-u*y*w,this._y=u*y*M+p*g*w,this._z=u*g*w-p*y*M,this._w=u*g*M+p*y*w;break;case"YZX":this._x=p*g*M+u*y*w,this._y=u*y*M+p*g*w,this._z=u*g*w-p*y*M,this._w=u*g*M-p*y*w;break;case"XZY":this._x=p*g*M-u*y*w,this._y=u*y*M-p*g*w,this._z=u*g*w+p*y*M,this._w=u*g*M+p*y*w;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],c=e[5],h=e[9],u=e[2],g=e[6],M=e[10],p=n+c+M;if(p>0){let y=.5/Math.sqrt(p+1);this._w=.25/y,this._x=(g-h)*y,this._y=(r-u)*y,this._z=(o-s)*y}else if(n>c&&n>M){let y=2*Math.sqrt(1+n-c-M);this._w=(g-h)/y,this._x=.25*y,this._y=(s+o)/y,this._z=(r+u)/y}else if(c>M){let y=2*Math.sqrt(1+c-n-M);this._w=(r-u)/y,this._x=(s+o)/y,this._y=.25*y,this._z=(h+g)/y}else{let y=2*Math.sqrt(1+M-n-c);this._w=(o-s)/y,this._x=(r+u)/y,this._y=(h+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=e._x,h=e._y,u=e._z,g=e._w;return this._x=n*g+o*c+s*u-r*h,this._y=s*g+o*h+r*c-n*u,this._z=r*g+o*u+n*h-s*c,this._w=o*g-n*c-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=this.dot(t);c<0&&(n=-n,s=-s,r=-r,o=-o,c=-c);let h=1-e;if(c<.9995){let u=Math.acos(c),g=Math.sin(u);h=Math.sin(h*u)/g,e=Math.sin(e*u)/g,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Q=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,c=t.z,h=t.w,u=2*(o*s-c*n),g=2*(c*e-r*s),M=2*(r*n-o*e);return this.x=e+h*u+o*M-c*g,this.y=n+h*g+c*u-r*M,this.z=s+h*M+r*g-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,c=e.y,h=e.z;return this.x=s*h-r*c,this.y=r*o-n*h,this.z=n*c-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oc.copy(this).projectOnVector(t),this.sub(Oc)}reflect(t){return this.sub(Oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new Q,Fu=new vi,le=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,c,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,h,u)}set(t,e,n,s,r,o,c,h,u){let g=this.elements;return g[0]=t,g[1]=s,g[2]=c,g[3]=e,g[4]=r,g[5]=h,g[6]=n,g[7]=o,g[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[3],h=n[6],u=n[1],g=n[4],M=n[7],p=n[2],y=n[5],w=n[8],C=s[0],v=s[3],m=s[6],N=s[1],z=s[4],E=s[7],L=s[2],P=s[5],F=s[8];return r[0]=o*C+c*N+h*L,r[3]=o*v+c*z+h*P,r[6]=o*m+c*E+h*F,r[1]=u*C+g*N+M*L,r[4]=u*v+g*z+M*P,r[7]=u*m+g*E+M*F,r[2]=p*C+y*N+w*L,r[5]=p*v+y*z+w*P,r[8]=p*m+y*E+w*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],g=t[8];return e*o*g-e*c*u-n*r*g+n*c*h+s*r*u-s*o*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],g=t[8],M=g*o-c*u,p=c*h-g*r,y=u*r-o*h,w=e*M+n*p+s*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=M*C,t[1]=(s*u-g*n)*C,t[2]=(c*n-s*o)*C,t[3]=p*C,t[4]=(g*e-s*h)*C,t[5]=(s*r-c*e)*C,t[6]=y*C,t[7]=(n*h-u*e)*C,t[8]=(o*e-n*r)*C,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,c){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*o+u*c)+o+t,-s*u,s*h,-s*(-u*o+h*c)+c+e,0,0,1),this}scale(t,e){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bc.makeScale(t,e)),this}rotate(t){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bc.makeRotation(-t)),this}translate(t,e){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bc=new le,Ou=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xp(){let i={enabled:!0,workingColorSpace:ia,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ue&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ue&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ia]:{primaries:t,whitePoint:n,transfer:sa,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:n,transfer:Ue,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}var Se=xp();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $s,Xo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$s===void 0&&($s=ra("canvas")),$s.width=t.width,$s.height=t.height;let s=$s.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=$s}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ra("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vp=0,mr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ua(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(zc(s[o].image)):r.push(zc(s[o]))}else r=zc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function zc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}var yp=0,kc=new Q,Ln=class i extends xi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gi,s=gi,r=fn,o=ls,c=Jn,h=Nn,u=i.DEFAULT_ANISOTROPY,g=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ua(),this.name="",this.source=new mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vo:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vo:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Th;Ln.DEFAULT_ANISOTROPY=1;var Je=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,u=h[0],g=h[4],M=h[8],p=h[1],y=h[5],w=h[9],C=h[2],v=h[6],m=h[10];if(Math.abs(g-p)<.01&&Math.abs(M-C)<.01&&Math.abs(w-v)<.01){if(Math.abs(g+p)<.1&&Math.abs(M+C)<.1&&Math.abs(w+v)<.1&&Math.abs(u+y+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let z=(u+1)/2,E=(y+1)/2,L=(m+1)/2,P=(g+p)/4,F=(M+C)/4,T=(w+v)/4;return z>E&&z>L?z<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(z),s=P/n,r=F/n):E>L?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=P/s,r=T/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=F/r,s=T/r),this.set(n,s,r,e),this}let N=Math.sqrt((v-w)*(v-w)+(M-C)*(M-C)+(p-g)*(p-g));return Math.abs(N)<.001&&(N=1),this.x=(v-w)/N,this.y=(M-C)/N,this.z=(p-g)/N,this.w=Math.acos((u+y+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this.w=we(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this.w=we(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qo=class extends xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ln(s),o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new mr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends qo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},aa=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var He=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,c,h,u,g,M,p,y,w,C,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,h,u,g,M,p,y,w,C,v)}set(t,e,n,s,r,o,c,h,u,g,M,p,y,w,C,v){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=c,m[13]=h,m[2]=u,m[6]=g,m[10]=M,m[14]=p,m[3]=y,m[7]=w,m[11]=C,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/js.setFromMatrixColumn(t,0).length(),r=1/js.setFromMatrixColumn(t,1).length(),o=1/js.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s),g=Math.cos(r),M=Math.sin(r);if(t.order==="XYZ"){let p=o*g,y=o*M,w=c*g,C=c*M;e[0]=h*g,e[4]=-h*M,e[8]=u,e[1]=y+w*u,e[5]=p-C*u,e[9]=-c*h,e[2]=C-p*u,e[6]=w+y*u,e[10]=o*h}else if(t.order==="YXZ"){let p=h*g,y=h*M,w=u*g,C=u*M;e[0]=p+C*c,e[4]=w*c-y,e[8]=o*u,e[1]=o*M,e[5]=o*g,e[9]=-c,e[2]=y*c-w,e[6]=C+p*c,e[10]=o*h}else if(t.order==="ZXY"){let p=h*g,y=h*M,w=u*g,C=u*M;e[0]=p-C*c,e[4]=-o*M,e[8]=w+y*c,e[1]=y+w*c,e[5]=o*g,e[9]=C-p*c,e[2]=-o*u,e[6]=c,e[10]=o*h}else if(t.order==="ZYX"){let p=o*g,y=o*M,w=c*g,C=c*M;e[0]=h*g,e[4]=w*u-y,e[8]=p*u+C,e[1]=h*M,e[5]=C*u+p,e[9]=y*u-w,e[2]=-u,e[6]=c*h,e[10]=o*h}else if(t.order==="YZX"){let p=o*h,y=o*u,w=c*h,C=c*u;e[0]=h*g,e[4]=C-p*M,e[8]=w*M+y,e[1]=M,e[5]=o*g,e[9]=-c*g,e[2]=-u*g,e[6]=y*M+w,e[10]=p-C*M}else if(t.order==="XZY"){let p=o*h,y=o*u,w=c*h,C=c*u;e[0]=h*g,e[4]=-M,e[8]=u*g,e[1]=p*M+C,e[5]=o*g,e[9]=y*M-w,e[2]=w*M-y,e[6]=c*g,e[10]=C*M+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,Sp)}lookAt(t,e,n){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Yi.crossVectors(n,On),Yi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Yi.crossVectors(n,On)),Yi.normalize(),uo.crossVectors(On,Yi),s[0]=Yi.x,s[4]=uo.x,s[8]=On.x,s[1]=Yi.y,s[5]=uo.y,s[9]=On.y,s[2]=Yi.z,s[6]=uo.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[4],h=n[8],u=n[12],g=n[1],M=n[5],p=n[9],y=n[13],w=n[2],C=n[6],v=n[10],m=n[14],N=n[3],z=n[7],E=n[11],L=n[15],P=s[0],F=s[4],T=s[8],D=s[12],V=s[1],q=s[5],K=s[9],nt=s[13],X=s[2],Y=s[6],lt=s[10],st=s[14],gt=s[3],tt=s[7],ot=s[11],ct=s[15];return r[0]=o*P+c*V+h*X+u*gt,r[4]=o*F+c*q+h*Y+u*tt,r[8]=o*T+c*K+h*lt+u*ot,r[12]=o*D+c*nt+h*st+u*ct,r[1]=g*P+M*V+p*X+y*gt,r[5]=g*F+M*q+p*Y+y*tt,r[9]=g*T+M*K+p*lt+y*ot,r[13]=g*D+M*nt+p*st+y*ct,r[2]=w*P+C*V+v*X+m*gt,r[6]=w*F+C*q+v*Y+m*tt,r[10]=w*T+C*K+v*lt+m*ot,r[14]=w*D+C*nt+v*st+m*ct,r[3]=N*P+z*V+E*X+L*gt,r[7]=N*F+z*q+E*Y+L*tt,r[11]=N*T+z*K+E*lt+L*ot,r[15]=N*D+z*nt+E*st+L*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],c=t[5],h=t[9],u=t[13],g=t[2],M=t[6],p=t[10],y=t[14],w=t[3],C=t[7],v=t[11],m=t[15],N=h*y-u*p,z=c*y-u*M,E=c*p-h*M,L=o*y-u*g,P=o*p-h*g,F=o*M-c*g;return e*(C*N-v*z+m*E)-n*(w*N-v*L+m*P)+s*(w*z-C*L+m*F)-r*(w*E-C*P+v*F)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],c=t[9],h=t[2],u=t[6],g=t[10];return e*(o*g-c*u)-n*(r*g-c*h)+s*(r*u-o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],g=t[8],M=t[9],p=t[10],y=t[11],w=t[12],C=t[13],v=t[14],m=t[15],N=e*c-n*o,z=e*h-s*o,E=e*u-r*o,L=n*h-s*c,P=n*u-r*c,F=s*u-r*h,T=g*C-M*w,D=g*v-p*w,V=g*m-y*w,q=M*v-p*C,K=M*m-y*C,nt=p*m-y*v,X=N*nt-z*K+E*q+L*V-P*D+F*T;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/X;return t[0]=(c*nt-h*K+u*q)*Y,t[1]=(s*K-n*nt-r*q)*Y,t[2]=(C*F-v*P+m*L)*Y,t[3]=(p*P-M*F-y*L)*Y,t[4]=(h*V-o*nt-u*D)*Y,t[5]=(e*nt-s*V+r*D)*Y,t[6]=(v*E-w*F-m*z)*Y,t[7]=(g*F-p*E+y*z)*Y,t[8]=(o*K-c*V+u*T)*Y,t[9]=(n*V-e*K-r*T)*Y,t[10]=(w*P-C*E+m*N)*Y,t[11]=(M*E-g*P-y*N)*Y,t[12]=(c*D-o*q-h*T)*Y,t[13]=(e*q-n*D+s*T)*Y,t[14]=(C*z-w*L-v*N)*Y,t[15]=(g*L-M*z+p*N)*Y,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,c=t.y,h=t.z,u=r*o,g=r*c;return this.set(u*o+n,u*c-s*h,u*h+s*c,0,u*c+s*h,g*c+n,g*h-s*o,0,u*h-s*c,g*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,c=e._z,h=e._w,u=r+r,g=o+o,M=c+c,p=r*u,y=r*g,w=r*M,C=o*g,v=o*M,m=c*M,N=h*u,z=h*g,E=h*M,L=n.x,P=n.y,F=n.z;return s[0]=(1-(C+m))*L,s[1]=(y+E)*L,s[2]=(w-z)*L,s[3]=0,s[4]=(y-E)*P,s[5]=(1-(p+m))*P,s[6]=(v+N)*P,s[7]=0,s[8]=(w+z)*F,s[9]=(v-N)*F,s[10]=(1-(p+C))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=js.set(s[0],s[1],s[2]).length(),c=js.set(s[4],s[5],s[6]).length(),h=js.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qn.copy(this);let u=1/o,g=1/c,M=1/h;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=g,Qn.elements[5]*=g,Qn.elements[6]*=g,Qn.elements[8]*=M,Qn.elements[9]*=M,Qn.elements[10]*=M,e.setFromRotationMatrix(Qn),n.x=o,n.y=c,n.z=h,this}makePerspective(t,e,n,s,r,o,c=ii,h=!1){let u=this.elements,g=2*r/(e-t),M=2*r/(n-s),p=(e+t)/(e-t),y=(n+s)/(n-s),w,C;if(h)w=r/(o-r),C=o*r/(o-r);else if(c===ii)w=-(o+r)/(o-r),C=-2*o*r/(o-r);else if(c===fr)w=-o/(o-r),C=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=g,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=M,u[9]=y,u[13]=0,u[2]=0,u[6]=0,u[10]=w,u[14]=C,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,o,c=ii,h=!1){let u=this.elements,g=2/(e-t),M=2/(n-s),p=-(e+t)/(e-t),y=-(n+s)/(n-s),w,C;if(h)w=1/(o-r),C=o/(o-r);else if(c===ii)w=-2/(o-r),C=-(o+r)/(o-r);else if(c===fr)w=-1/(o-r),C=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=g,u[4]=0,u[8]=0,u[12]=p,u[1]=0,u[5]=M,u[9]=0,u[13]=y,u[2]=0,u[6]=0,u[10]=w,u[14]=C,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},js=new Q,Qn=new He,Mp=new Q(0,0,0),Sp=new Q(1,1,1),Yi=new Q,uo=new Q,On=new Q,zu=new He,ku=new vi,Qi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],c=s[8],h=s[1],u=s[5],g=s[9],M=s[2],p=s[6],y=s[10];switch(e){case"XYZ":this._y=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-we(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-M,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-M,y),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-we(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,u),this._y=Math.atan2(-M,r)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ku.setFromEuler(this),this.setFromQuaternion(ku,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";var oa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bp=0,Vu=new Q,Qs=new vi,Li=new He,fo=new Q,Kr=new Q,Tp=new Q,wp=new vi,Gu=new Q(1,0,0),Hu=new Q(0,1,0),Wu=new Q(0,0,1),Xu={type:"added"},Ap={type:"removed"},tr={type:"childadded",child:null},Vc={type:"childremoved",child:null},Mn=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Q,e=new Qi,n=new vi,s=new Q(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new le}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(Gu,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Wu,t)}translateOnAxis(t,e){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gu,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fo.copy(t):fo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Kr,fo,this.up):Li.lookAt(fo,Kr,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(Li),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xu),tr.child=t,this.dispatchEvent(tr),tr.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap),Vc.child=t,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xu),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,Tp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let h=c.shapes;if(Array.isArray(h))for(let u=0,g=h.length;u<g;u++){let M=h[u];r(t.shapes,M)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let h=0,u=this.material.length;h<u;h++)c.push(r(t.materials,this.material[h]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let h=this.animations[c];s.animations.push(r(t.animations,h))}}if(e){let c=o(t.geometries),h=o(t.materials),u=o(t.textures),g=o(t.images),M=o(t.shapes),p=o(t.skeletons),y=o(t.animations),w=o(t.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),g.length>0&&(n.images=g),M.length>0&&(n.shapes=M),p.length>0&&(n.skeletons=p),y.length>0&&(n.animations=y),w.length>0&&(n.nodes=w)}return n.object=s,n;function o(c){let h=[];for(let u in c){let g=c[u];delete g.metadata,h.push(g)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new Q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Es=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ep={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,c=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(let C of t.hand.values()){let v=e.getJointPose(C,n),m=this._getHandJoint(u,C);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let g=u.joints["index-finger-tip"],M=u.joints["thumb-tip"],p=g.position.distanceTo(M.position),y=.02,w=.005;u.inputState.pinching&&p>y+w?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=y-w&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Ep)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Es;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},po={h:0,s:0,l:0};function Gc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var de=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=_p(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Gc(o,r,t+1/3),this.g=Gc(o,r,t),this.b=Gc(o,r,t-1/3)}return Se.colorSpaceToWorking(this,s),this}setStyle(t,e=En){function n(r){r!==void 0&&parseFloat(r)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){let n=Vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return Se.workingToColorSpace(vn.copy(this),t),Math.round(we(vn.r*255,0,255))*65536+Math.round(we(vn.g*255,0,255))*256+Math.round(we(vn.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(vn.copy(this),e);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),c=Math.min(n,s,r),h,u,g=(c+o)/2;if(c===o)h=0,u=0;else{let M=o-c;switch(u=g<=.5?M/(o+c):M/(2-o-c),o){case n:h=(s-r)/M+(s<r?6:0);break;case s:h=(r-n)/M+2;break;case r:h=(n-s)/M+4;break}h/=6}return t.h=h,t.s=u,t.l=g,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=En){Se.workingToColorSpace(vn.copy(this),t);let e=vn.r,n=vn.g,s=vn.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(po);let n=Fc(Ji.h,po.h,e),s=Fc(Ji.s,po.s,e),r=Fc(Ji.l,po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new de;de.NAMES=Vd;var la=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ca=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ti=new Q,Di=new Q,Hc=new Q,Ni=new Q,er=new Q,nr=new Q,qu=new Q,Wc=new Q,Xc=new Q,qc=new Q,Yc=new Je,Jc=new Je,Zc=new Je,ji=class i{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ti.subVectors(t,e),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ti.subVectors(s,e),Di.subVectors(n,e),Hc.subVectors(t,e);let o=ti.dot(ti),c=ti.dot(Di),h=ti.dot(Hc),u=Di.dot(Di),g=Di.dot(Hc),M=o*u-c*c;if(M===0)return r.set(0,0,0),null;let p=1/M,y=(u*h-c*g)*p,w=(o*g-c*h)*p;return r.set(1-y-w,w,y)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,s,r,o,c,h){return this.getBarycoord(t,e,n,s,Ni)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ni.x),h.addScaledVector(o,Ni.y),h.addScaledVector(c,Ni.z),h)}static getInterpolatedAttribute(t,e,n,s,r,o){return Yc.setScalar(0),Jc.setScalar(0),Zc.setScalar(0),Yc.fromBufferAttribute(t,e),Jc.fromBufferAttribute(t,n),Zc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Yc,r.x),o.addScaledVector(Jc,r.y),o.addScaledVector(Zc,r.z),o}static isFrontFacing(t,e,n,s){return ti.subVectors(n,e),Di.subVectors(t,e),ti.cross(Di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ti.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,c;er.subVectors(s,n),nr.subVectors(r,n),Wc.subVectors(t,n);let h=er.dot(Wc),u=nr.dot(Wc);if(h<=0&&u<=0)return e.copy(n);Xc.subVectors(t,s);let g=er.dot(Xc),M=nr.dot(Xc);if(g>=0&&M<=g)return e.copy(s);let p=h*M-g*u;if(p<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(er,o);qc.subVectors(t,r);let y=er.dot(qc),w=nr.dot(qc);if(w>=0&&y<=w)return e.copy(r);let C=y*u-h*w;if(C<=0&&u>=0&&w<=0)return c=u/(u-w),e.copy(n).addScaledVector(nr,c);let v=g*w-y*M;if(v<=0&&M-g>=0&&y-w>=0)return qu.subVectors(r,s),c=(M-g)/(M-g+(y-w)),e.copy(s).addScaledVector(qu,c);let m=1/(v+C+p);return o=C*m,c=p*m,e.copy(n).addScaledVector(er,o).addScaledVector(nr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yi=class{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)t.isMesh===!0?t.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),go.subVectors(this.max,$r),ir.subVectors(t.a,$r),sr.subVectors(t.b,$r),rr.subVectors(t.c,$r),Zi.subVectors(sr,ir),Ki.subVectors(rr,sr),bs.subVectors(ir,rr);let e=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-bs.z,bs.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,bs.z,0,-bs.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-bs.y,bs.x,0];return!Kc(e,ir,sr,rr,go)||(e=[1,0,0,0,1,0,0,0,1],!Kc(e,ir,sr,rr,go))?!1:(_o.crossVectors(Zi,Ki),e=[_o.x,_o.y,_o.z],Kc(e,ir,sr,rr,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ui=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ei=new Q,mo=new yi,ir=new Q,sr=new Q,rr=new Q,Zi=new Q,Ki=new Q,bs=new Q,$r=new Q,go=new Q,_o=new Q,Ts=new Q;function Kc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ts.fromArray(i,r);let c=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),h=t.dot(Ts),u=e.dot(Ts),g=n.dot(Ts);if(Math.max(-Math.max(h,u,g),Math.min(h,u,g))>c)return!1}return!0}var en=new Q,xo=new Ae,Cp=0,zn=class extends xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fd,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zr(e,this.array)),e}setX(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zr(e,this.array)),e}setY(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zr(e,this.array)),e}setW(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array),s=In(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array),s=In(s,this.array),r=In(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ha=class extends zn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ua=class extends zn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var rn=class extends zn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Rp=new yi,jr=new Q,$c=new Q,ts=class{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Rp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jr.subVectors(t,this.center);let e=jr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(jr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jr.copy(t.center).add($c)),this.expandByPoint(jr.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pp=0,qn=new He,jc=new Mn,ar=new Q,Bn=new yi,Qr=new yi,hn=new Q,kn=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mp(t)?ua:ha)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return jc.lookAt(t),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let c=e[r];Qr.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(Bn.min,Qr.min),Bn.expandByPoint(hn),hn.addVectors(Bn.max,Qr.max),Bn.expandByPoint(hn)):(Bn.expandByPoint(Qr.min),Bn.expandByPoint(Qr.max))}Bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let c=e[r],h=this.morphTargetsRelative;for(let u=0,g=c.count;u<g;u++)hn.fromBufferAttribute(c,u),h&&(ar.fromBufferAttribute(t,u),hn.add(ar)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new zn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let c=[],h=[];for(let T=0;T<n.count;T++)c[T]=new Q,h[T]=new Q;let u=new Q,g=new Q,M=new Q,p=new Ae,y=new Ae,w=new Ae,C=new Q,v=new Q;function m(T,D,V){u.fromBufferAttribute(n,T),g.fromBufferAttribute(n,D),M.fromBufferAttribute(n,V),p.fromBufferAttribute(r,T),y.fromBufferAttribute(r,D),w.fromBufferAttribute(r,V),g.sub(u),M.sub(u),y.sub(p),w.sub(p);let q=1/(y.x*w.y-w.x*y.y);isFinite(q)&&(C.copy(g).multiplyScalar(w.y).addScaledVector(M,-y.y).multiplyScalar(q),v.copy(M).multiplyScalar(y.x).addScaledVector(g,-w.x).multiplyScalar(q),c[T].add(C),c[D].add(C),c[V].add(C),h[T].add(v),h[D].add(v),h[V].add(v))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let T=0,D=N.length;T<D;++T){let V=N[T],q=V.start,K=V.count;for(let nt=q,X=q+K;nt<X;nt+=3)m(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}let z=new Q,E=new Q,L=new Q,P=new Q;function F(T){L.fromBufferAttribute(s,T),P.copy(L);let D=c[T];z.copy(D),z.sub(L.multiplyScalar(L.dot(D))).normalize(),E.crossVectors(P,D);let q=E.dot(h[T])<0?-1:1;o.setXYZW(T,z.x,z.y,z.z,q)}for(let T=0,D=N.length;T<D;++T){let V=N[T],q=V.start,K=V.count;for(let nt=q,X=q+K;nt<X;nt+=3)F(t.getX(nt+0)),F(t.getX(nt+1)),F(t.getX(nt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,y=n.count;p<y;p++)n.setXYZ(p,0,0,0);let s=new Q,r=new Q,o=new Q,c=new Q,h=new Q,u=new Q,g=new Q,M=new Q;if(t)for(let p=0,y=t.count;p<y;p+=3){let w=t.getX(p+0),C=t.getX(p+1),v=t.getX(p+2);s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,C),o.fromBufferAttribute(e,v),g.subVectors(o,r),M.subVectors(s,r),g.cross(M),c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,v),c.add(g),h.add(g),u.add(g),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(C,h.x,h.y,h.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let p=0,y=e.count;p<y;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),g.subVectors(o,r),M.subVectors(s,r),g.cross(M),n.setXYZ(p+0,g.x,g.y,g.z),n.setXYZ(p+1,g.x,g.y,g.z),n.setXYZ(p+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(c,h){let u=c.array,g=c.itemSize,M=c.normalized,p=new u.constructor(h.length*g),y=0,w=0;for(let C=0,v=h.length;C<v;C++){c.isInterleavedBufferAttribute?y=h[C]*c.data.stride+c.offset:y=h[C]*g;for(let m=0;m<g;m++)p[w++]=u[y++]}return new zn(p,g,M)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let h=s[c],u=t(h,n);e.setAttribute(c,u)}let r=this.morphAttributes;for(let c in r){let h=[],u=r[c];for(let g=0,M=u.length;g<M;g++){let p=u[g],y=t(p,n);h.push(y)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],g=[];for(let M=0,p=u.length;M<p;M++){let y=u[M];g.push(y.toJSON(t.data))}g.length>0&&(s[h]=g,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let g=s[u];this.setAttribute(u,g.clone(e))}let r=t.morphAttributes;for(let u in r){let g=[],M=r[u];for(let p=0,y=M.length;p<y;p++)g.push(M[p].clone(e));this.morphAttributes[u]=g}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let u=0,g=o.length;u<g;u++){let M=o[u];this.addGroup(M.start,M.count,M.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Qc=new Q,Ip=new Q,Lp=new le,ni=class{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qc.subVectors(n,e).cross(Ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Qc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lp.getNormalMatrix(t),s=this.coplanarPoint(Qc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Dp=0,es=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Ua(),this.name="",this.type="Material",this.blending=Mr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let h=r[c];delete h.metadata,o.push(h)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fi=new Q,th=new Q,vo=new Q,yo=new Q,Jo=class{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){th.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),yo.copy(this.origin).sub(th);let r=t.distanceTo(e)*.5,o=-this.direction.dot(vo),c=yo.dot(this.direction),h=-yo.dot(vo),u=yo.lengthSq(),g=Math.abs(1-o*o),M,p,y,w;if(g>0)if(M=o*h-c,p=o*c-h,w=r*g,M>=0)if(p>=-w)if(p<=w){let C=1/g;M*=C,p*=C,y=M*(M+o*p+2*c)+p*(o*M+p+2*h)+u}else p=r,M=Math.max(0,-(o*p+c)),y=-M*M+p*(p+2*h)+u;else p=-r,M=Math.max(0,-(o*p+c)),y=-M*M+p*(p+2*h)+u;else p<=-w?(M=Math.max(0,-(-o*r+c)),p=M>0?-r:Math.min(Math.max(-r,-h),r),y=-M*M+p*(p+2*h)+u):p<=w?(M=0,p=Math.min(Math.max(-r,-h),r),y=p*(p+2*h)+u):(M=Math.max(0,-(o*r+c)),p=M>0?r:Math.min(Math.max(-r,-h),r),y=-M*M+p*(p+2*h)+u);else p=o>0?-r:r,M=Math.max(0,-(o*p+c)),y=-M*M+p*(p+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,M),s&&s.copy(th).addScaledVector(vo,p),y}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,h=n+o;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,c,h,u=1/this.direction.x,g=1/this.direction.y,M=1/this.direction.z,p=this.origin;return u>=0?(n=(t.min.x-p.x)*u,s=(t.max.x-p.x)*u):(n=(t.max.x-p.x)*u,s=(t.min.x-p.x)*u),g>=0?(r=(t.min.y-p.y)*g,o=(t.max.y-p.y)*g):(r=(t.max.y-p.y)*g,o=(t.min.y-p.y)*g),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),M>=0?(c=(t.min.z-p.z)*M,h=(t.max.z-p.z)*M):(c=(t.max.z-p.z)*M,h=(t.min.z-p.z)*M),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,c=this.direction,h=c.x,u=c.y,g=c.z,M=t.x-o.x,p=t.y-o.y,y=t.z-o.z,w=e.x-o.x,C=e.y-o.y,v=e.z-o.z,m=n.x-o.x,N=n.y-o.y,z=n.z-o.z,E=Math.abs(h),L=Math.abs(u),P=Math.abs(g),F,T,D,V,q,K,nt,X,Y,lt,st,gt;if(E>=L&&E>=P?(D=h,K=M,Y=w,gt=m,h>=0?(F=u,T=g,V=p,q=y,nt=C,X=v,lt=N,st=z):(F=g,T=u,V=y,q=p,nt=v,X=C,lt=z,st=N)):L>=P?(D=u,K=p,Y=C,gt=N,u>=0?(F=g,T=h,V=y,q=M,nt=v,X=w,lt=z,st=m):(F=h,T=g,V=M,q=y,nt=w,X=v,lt=m,st=z)):(D=g,K=y,Y=v,gt=z,g>=0?(F=h,T=u,V=M,q=p,nt=w,X=C,lt=m,st=N):(F=u,T=h,V=p,q=M,nt=C,X=w,lt=N,st=m)),D===0)return null;let tt=F/D,ot=T/D,ct=1/D,kt=V-tt*K,Jt=q-ot*K,Fe=nt-tt*Y,ce=X-ot*Y,Ee=lt-tt*gt,ht=st-ot*gt,_t=Ee*ce-ht*Fe,Ht=kt*ht-Jt*Ee,ne=Fe*Jt-ce*kt;if(s){if(_t<0||Ht<0||ne<0)return null}else if((_t<0||Ht<0||ne<0)&&(_t>0||Ht>0||ne>0))return null;let Wt=_t+Ht+ne;if(Wt===0)return null;let ge=ct*(_t*K+Ht*Y+ne*gt);return(Wt>0?ge<0:ge>0)?null:this.at(ge/Wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},da=class extends es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yu=new He,ws=new Jo,Mo=new ts,Ju=new Q,So=new Q,bo=new Q,To=new Q,eh=new Q,wo=new Q,Zu=new Q,Ao=new Q,Sn=class extends Mn{constructor(t=new kn,e=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){wo.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let g=c[h],M=r[h];g!==0&&(eh.fromBufferAttribute(M,t),o?wo.addScaledVector(eh,g):wo.addScaledVector(eh.sub(e),g))}e.add(wo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),ws.copy(t.ray).recast(t.near),!(Mo.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Mo,Ju)===null||ws.origin.distanceToSquared(Ju)>(t.far-t.near)**2))&&(Yu.copy(r).invert(),ws.copy(t.ray).applyMatrix4(Yu),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,c=r.index,h=r.attributes.position,u=r.attributes.uv,g=r.attributes.uv1,M=r.attributes.normal,p=r.groups,y=r.drawRange;if(c!==null)if(Array.isArray(o))for(let w=0,C=p.length;w<C;w++){let v=p[w],m=o[v.materialIndex],N=Math.max(v.start,y.start),z=Math.min(c.count,Math.min(v.start+v.count,y.start+y.count));for(let E=N,L=z;E<L;E+=3){let P=c.getX(E),F=c.getX(E+1),T=c.getX(E+2);s=Eo(this,m,t,n,u,g,M,P,F,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let w=Math.max(0,y.start),C=Math.min(c.count,y.start+y.count);for(let v=w,m=C;v<m;v+=3){let N=c.getX(v),z=c.getX(v+1),E=c.getX(v+2);s=Eo(this,o,t,n,u,g,M,N,z,E),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let w=0,C=p.length;w<C;w++){let v=p[w],m=o[v.materialIndex],N=Math.max(v.start,y.start),z=Math.min(h.count,Math.min(v.start+v.count,y.start+y.count));for(let E=N,L=z;E<L;E+=3){let P=E,F=E+1,T=E+2;s=Eo(this,m,t,n,u,g,M,P,F,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let w=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let v=w,m=C;v<m;v+=3){let N=v,z=v+1,E=v+2;s=Eo(this,o,t,n,u,g,M,N,z,E),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}};function Np(i,t,e,n,s,r,o,c){let h;if(t.side===pn?h=n.intersectTriangle(o,r,s,!0,c):h=n.intersectTriangle(s,r,o,t.side===as,c),h===null)return null;Ao.copy(c),Ao.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Ao);return u<e.near||u>e.far?null:{distance:u,point:Ao.clone(),object:i}}function Eo(i,t,e,n,s,r,o,c,h,u){i.getVertexPosition(c,So),i.getVertexPosition(h,bo),i.getVertexPosition(u,To);let g=Np(i,t,e,n,So,bo,To,Zu);if(g){let M=new Q;ji.getBarycoord(Zu,So,bo,To,M),s&&(g.uv=ji.getInterpolatedAttribute(s,c,h,u,M,new Ae)),r&&(g.uv1=ji.getInterpolatedAttribute(r,c,h,u,M,new Ae)),o&&(g.normal=ji.getInterpolatedAttribute(o,c,h,u,M,new Q),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));let p={a:c,b:h,c:u,normal:new Q,materialIndex:0};ji.getNormal(So,bo,To,p.normal),g.face=p,g.barycoord=M}return g}var Rs=class extends Ln{constructor(t=null,e=1,n=1,s,r,o,c,h,u=je,g=je,M,p){super(null,o,c,h,u,g,s,r,M,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fa=class extends zn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},or=new He,Ku=new He,Co=[],$u=new yi,Up=new He,ta=new Sn,ea=new ts,pa=class extends Sn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Up)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),$u.copy(t.boundingBox).applyMatrix4(or),this.boundingBox.union($u)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),ea.copy(t.boundingSphere).applyMatrix4(or),this.boundingSphere.union(ea)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let c=0;c<n.length;c++)n[c]=s[o+c]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(n),t.ray.intersectsSphere(ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Ku.multiplyMatrices(n,or),ta.matrixWorld=Ku,ta.raycast(t,Co);for(let o=0,c=Co.length;o<c;o++){let h=Co[o];h.instanceId=r,h.object=this,e.push(h)}Co.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rs(new Float32Array(s*this.count),s,this.count,Tr,Yn));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let c=this.geometry.morphTargetsRelative?1:1-o,h=s*t;return r[h]=c,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new ts,Fp=new Ae(.5,.5),Ro=new Q,_r=class{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){let s=this.planes,r=t.elements,o=r[0],c=r[1],h=r[2],u=r[3],g=r[4],M=r[5],p=r[6],y=r[7],w=r[8],C=r[9],v=r[10],m=r[11],N=r[12],z=r[13],E=r[14],L=r[15];if(s[0].setComponents(u-o,y-g,m-w,L-N).normalize(),s[1].setComponents(u+o,y+g,m+w,L+N).normalize(),s[2].setComponents(u+c,y+M,m+C,L+z).normalize(),s[3].setComponents(u-c,y-M,m-C,L-z).normalize(),n)s[4].setComponents(h,p,v,E).normalize(),s[5].setComponents(u-h,y-p,m-v,L-E).normalize();else if(s[4].setComponents(u-h,y-p,m-v,L-E).normalize(),e===ii)s[5].setComponents(u+h,y+p,m+v,L+E).normalize();else if(e===fr)s[5].setComponents(h,p,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=Fp.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ro.x=s.normal.x>0?t.max.x:t.min.x,Ro.y=s.normal.y>0?t.max.y:t.min.y,Ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ma=class extends Ln{constructor(t=[],e=os,n,s,r,o,c,h,u,g){super(t,e,n,s,r,o,c,h,u,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ns=class extends Ln{constructor(t,e,n=ri,s,r,o,c=je,h=je,u,g=_i,M=1){if(g!==_i&&g!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:M};super(p,s,r,o,c,h,g,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Zo=class extends ns{constructor(t,e=ri,n=os,s,r,o=je,c=je,h,u=_i){let g={width:t,height:t,depth:1},M=[g,g,g,g,g,g];super(t,t,e,n,s,r,o,c,h,u),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ga=class extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xr=class i extends kn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],u=[],g=[],M=[],p=0,y=0;w("z","y","x",-1,-1,n,e,t,o,r,0),w("z","y","x",1,-1,n,e,-t,o,r,1),w("x","z","y",1,1,t,n,e,s,o,2),w("x","z","y",1,-1,t,n,-e,s,o,3),w("x","y","z",1,-1,t,e,n,s,r,4),w("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new rn(u,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(M,2));function w(C,v,m,N,z,E,L,P,F,T,D){let V=E/F,q=L/T,K=E/2,nt=L/2,X=P/2,Y=F+1,lt=T+1,st=0,gt=0,tt=new Q;for(let ot=0;ot<lt;ot++){let ct=ot*q-nt;for(let kt=0;kt<Y;kt++){let Jt=kt*V-K;tt[C]=Jt*N,tt[v]=ct*z,tt[m]=X,u.push(tt.x,tt.y,tt.z),tt[C]=0,tt[v]=0,tt[m]=P>0?1:-1,g.push(tt.x,tt.y,tt.z),M.push(kt/F),M.push(1-ot/T),st+=1}}for(let ot=0;ot<T;ot++)for(let ct=0;ct<F;ct++){let kt=p+ct+Y*ot,Jt=p+ct+Y*(ot+1),Fe=p+(ct+1)+Y*(ot+1),ce=p+(ct+1)+Y*ot;h.push(kt,Jt,ce),h.push(Jt,Fe,ce),gt+=6}c.addGroup(y,gt,D),y+=gt,p+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var _a=class i extends kn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,c=Math.floor(n),h=Math.floor(s),u=c+1,g=h+1,M=t/c,p=e/h,y=[],w=[],C=[],v=[];for(let m=0;m<g;m++){let N=m*p-o;for(let z=0;z<u;z++){let E=z*M-r;w.push(E,-N,0),C.push(0,0,1),v.push(z/c),v.push(1-m/h)}}for(let m=0;m<h;m++)for(let N=0;N<c;N++){let z=N+u*m,E=N+u*(m+1),L=N+1+u*(m+1),P=N+1+u*m;y.push(z,E,P),y.push(E,L,P)}this.setIndex(y),this.setAttribute("position",new rn(w,3)),this.setAttribute("normal",new rn(C,3)),this.setAttribute("uv",new rn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var xa=class i extends kn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(o+c,Math.PI),u=0,g=[],M=new Q,p=new Q,y=[],w=[],C=[],v=[];for(let m=0;m<=n;m++){let N=[],z=m/n,E=o+z*c,L=t*Math.cos(E),P=Math.sqrt(t*t-L*L),F=0;m===0&&o===0?F=.5/e:m===n&&h===Math.PI&&(F=-.5/e);for(let T=0;T<=e;T++){let D=T/e,V=s+D*r;M.x=-P*Math.cos(V),M.y=L,M.z=P*Math.sin(V),w.push(M.x,M.y,M.z),p.copy(M).normalize(),C.push(p.x,p.y,p.z),v.push(D+F,1-z),N.push(u++)}g.push(N)}for(let m=0;m<n;m++)for(let N=0;N<e;N++){let z=g[m][N+1],E=g[m][N],L=g[m+1][N],P=g[m+1][N+1];(m!==0||o>0)&&y.push(z,E,P),(m!==n-1||h<Math.PI)&&y.push(E,L,P)}this.setIndex(y),this.setAttribute("position",new rn(w,3)),this.setAttribute("normal",new rn(C,3)),this.setAttribute("uv",new rn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ju(s))s.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ju(s[0])){let r=[];for(let o=0,c=s.length;o<c;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function bn(i){let t={};for(let e=0;e<i.length;e++){let n=Ls(i[e]);for(let s in n)t[s]=n[s]}return t}function ju(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Op(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var Gd={clone:Ls,merge:bn},Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=Op(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m3":this.uniforms[n].value=new le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ko=class extends Cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var va=class extends es{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var $o=class extends es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jo=class extends es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function lr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let c=e[1];t<c&&(n=2,r=c);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let c=n+o>>>1;t<e[c]?o=c:n=c+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qo=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,c=s[r],h=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case ah:r=t,c=2*e-n;break;case oh:r=s.length-2,c=e+s[r]-s[r+1];break;default:r=t,c=n}if(h===void 0)switch(this.getSettings_().endingEnd){case ah:o=t,h=2*n-e;break;case oh:o=1,h=n+s[1]-s[0];break;default:o=t-1,h=e}let u=(n-e)*.5,g=this.valueSize;this._weightPrev=u/(e-c),this._weightNext=u/(h-n),this._offsetPrev=r*g,this._offsetNext=o*g}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,g=this._offsetPrev,M=this._offsetNext,p=this._weightPrev,y=this._weightNext,w=(n-e)/(s-e),C=w*w,v=C*w,m=-p*v+2*p*C-p*w,N=(1+p)*v+(-1.5-2*p)*C+(-.5+p)*w+1,z=(-1-y)*v+(1.5+y)*C+.5*w,E=y*v-y*C;for(let L=0;L!==c;++L)r[L]=m*o[g+L]+N*o[u+L]+z*o[h+L]+E*o[M+L];return r}},tl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,g=(n-e)/(s-e),M=1-g;for(let p=0;p!==c;++p)r[p]=o[u+p]*M+o[h+p]*g;return r}},el=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},nl=class extends is{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,g=this.inTangents,M=this.outTangents;if(!g||!M){let w=(n-e)/(s-e),C=1-w;for(let v=0;v!==c;++v)r[v]=o[u+v]*C+o[h+v]*w;return r}let p=c*2,y=t-1;for(let w=0;w!==c;++w){let C=o[u+w],v=o[h+w],m=y*p+w*2,N=M[m],z=M[m+1],E=t*p+w*2,L=g[E],P=g[E+1],F=Vp(n,e,N,L,s);r[w]=Hd(F,C,z,P,v)}return r}};function Hd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function kp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Vp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let c=Hd(r,t,e,n,s)-i;if(Math.abs(c)<1e-10)break;let h=kp(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-c/h))}return r}var Vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lr(e,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lr(t.times,Array),values:lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),nh(t.settings)&&(n.settings={inTangents:lr(t.settings.inTangents,Array),outTangents:lr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new nl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case na:e=this.InterpolantFactoryMethodDiscrete;break;case Ho:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break;case sh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ie("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return Ho;case this.InterpolantFactoryMethodSmooth:return Lo;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;nh(this.settings)&&(Qu(this.settings.inTangents,t),Qu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(re("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(re("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let c=0;c!==r;c++){let h=n[c];if(typeof h=="number"&&isNaN(h)){re("KeyframeTrack: Time is not a valid number.",this,c,h),t=!1;break}if(o!==null&&o>h){re("KeyframeTrack: Out of order keys.",this,c,h,o),t=!1;break}o=h}if(s!==void 0&&gp(s))for(let c=0,h=s.length;c!==h;++c){let u=s[c];if(isNaN(u)){re("KeyframeTrack: Value is not a valid number.",this,c,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lo,r=t.length-1,o=1;for(let c=1;c<r;++c){let h=!1,u=t[c],g=t[c+1];if(u!==g&&(c!==1||u!==t[0]))if(s)h=!0;else{let M=c*n,p=M-n,y=M+n;for(let w=0;w!==n;++w){let C=e[M+w];if(C!==e[p+w]||C!==e[y+w]){h=!0;break}}}if(h){if(c!==o){t[o]=t[c];let M=c*n,p=o*n;for(let y=0;y!==n;++y)e[p+y]=e[M+y]}++o}}if(r>0){t[o]=t[r];for(let c=r*n,h=o*n,u=0;u!==n;++u)e[h+u]=e[c+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,nh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Ho;var ss=class extends Vn{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=na;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};il.prototype.ValueTypeName="color";var sl=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};sl.prototype.ValueTypeName="number";var rl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=(n-e)/(s-e),u=t*c;for(let g=u+c;u!==g;u+=4)vi.slerpFlat(r,0,o,u-c,o,u,h);return r}},ya=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}};ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Vn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=na;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};al.prototype.ValueTypeName="vector";var ol=class{constructor(t,e,n){let s=this,r=!1,o=0,c=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(g){c++,r===!1&&s.onStart!==void 0&&s.onStart(g,o,c),r=!0},this.itemEnd=function(g){o++,s.onProgress!==void 0&&s.onProgress(g,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,M){return u.push(g,M),this},this.removeHandler=function(g){let M=u.indexOf(g);return M!==-1&&u.splice(M,2),this},this.getHandler=function(g){for(let M=0,p=u.length;M<p;M+=2){let y=u[M],w=u[M+1];if(y.global&&(y.lastIndex=0),y.test(g))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wd=new ol,ll=class{constructor(t){this.manager=t!==void 0?t:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ma=class extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Sa=class extends Ma{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ih=new He,td=new Q,ed=new Q,cl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;td.setFromMatrixPosition(t.matrixWorld),e.position.copy(td),ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ed),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ih,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,c=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*o,0,0,.5*o+h,0,.5*c,0,.5*c+u,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+h,0,.5*c,0,.5*c+u,0,0,.5,.5,0,0,0,1),e.multiply(ih)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Po=new Q,Io=new vi,mi=new Q,ba=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Po,Io,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Po,Io,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new Q,nd=new Ae,id=new Ae,yn=class extends ba{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,nd,id),e.subVectors(id,nd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Uc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*n/u,s*=o.width/h,n*=o.height/u}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vr=class extends ba{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,c=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lh=class extends cl{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends Ma{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new lh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var cr=-90,hr=1,hl=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(cr,hr,t,e);s.layers=this.layers,this.add(s);let r=new yn(cr,hr,t,e);r.layers=this.layers,this.add(r);let o=new yn(cr,hr,t,e);o.layers=this.layers,this.add(o);let c=new yn(cr,hr,t,e);c.layers=this.layers,this.add(c);let h=new yn(cr,hr,t,e);h.layers=this.layers,this.add(h);let u=new yn(cr,hr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,c,h]=e;for(let u of e)this.remove(u);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,h,u,g]=this.children,M=t.getRenderTarget(),p=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,3,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=C,t.setRenderTarget(n,5,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(M,p,y),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},ul=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Uh="\\[\\]\\.:\\/",Gp=new RegExp("["+Uh+"]","g"),Fh="[^"+Uh+"]",Hp="[^"+Uh.replace("\\.","")+"]",Wp=/((?:WC+[\/:])*)/.source.replace("WC",Fh),Xp=/(WCOD+)?/.source.replace("WCOD",Hp),qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),Yp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),Jp=new RegExp("^"+Wp+Xp+qp+Yp+"$"),Zp=["material","materials","bones","map"],ch=class{constructor(t,e,n){let s=n||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gp,"")}static parseTrackName(t){let e=Jp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===e||c.uuid===e)return c;let h=n(c.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===u){u=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let o=t[s];if(o===void 0){let u=e.nodeName;re("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=ch;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qx=new Float32Array(1);var hh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Oh(i,t,e,n){let s=Kp(n);switch(e){case Rh:return i*t;case Tr:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case hs:return i*t*2/s.components*s.byteLength;case yl:return i*t*2/s.components*s.byteLength;case Ph:return i*t*3/s.components*s.byteLength;case Jn:return i*t*4/s.components*s.byteLength;case Ml:return i*t*4/s.components*s.byteLength;case Ra:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:case wl:return Math.max(i,16)*Math.max(t,8)/4;case Sl:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case Al:case El:case Rl:case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cl:case Da:case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ql:case Yl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Na:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kp(i){switch(i){case Nn:case wh:return{byteLength:1,components:1};case Sr:case Ah:case ai:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case ri:case gl:case Yn:return{byteLength:4,components:1};case Eh:case Ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ff(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jp(i){let t=new WeakMap;function e(c,h){let u=c.array,g=c.usage,M=u.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,u,g),c.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)y=i.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:M}}function n(c,h,u){let g=h.array,M=h.updateRanges;if(i.bindBuffer(u,c),M.length===0)i.bufferSubData(u,0,g);else{M.sort((y,w)=>y.start-w.start);let p=0;for(let y=1;y<M.length;y++){let w=M[p],C=M[y];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++p,M[p]=C)}M.length=p+1;for(let y=0,w=M.length;y<w;y++){let C=M[y];i.bufferSubData(u,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=t.get(c);h&&(i.deleteBuffer(h.buffer),t.delete(c))}function o(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let g=t.get(c);(!g||g.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let u=t.get(c);if(u===void 0)t.set(c,e(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,c,h),u.version=c.version}}return{get:s,remove:r,update:o}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tm=`#ifdef USE_ALPHAHASH
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
#endif`,em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
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
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
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
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dm=`#ifdef USE_IRIDESCENCE
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
#endif`,fm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
}`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
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
#endif`,$m=`uniform sampler2D dfgLUT;
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
}`,jm=`
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c0=`#if defined( USE_POINTS_UV )
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
#endif`,h0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`#include <common>
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
}`,ag=`#if DEPTH_PACKING == 3200
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
}`,og=`#define DISTANCE
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
}`,lg=`#define DISTANCE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define LAMBERT
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
}`,_g=`#define MATCAP
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
}`,xg=`#define MATCAP
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
}`,vg=`#define NORMAL
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
}`,yg=`#define NORMAL
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
}`,Mg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,bg=`#define STANDARD
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
}`,Tg=`#define STANDARD
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
}`,wg=`#define TOON
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
}`,Ag=`#define TOON
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
}`,Eg=`uniform float size;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Pg=`uniform vec3 color;
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
}`,Ig=`uniform float rotation;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Qp,alphahash_pars_fragment:tm,alphamap_fragment:em,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:am,batching_pars_vertex:om,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:hm,bsdfs:um,iridescence_fragment:dm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:xm,color_pars_fragment:vm,color_pars_vertex:ym,color_vertex:Mm,common:Sm,cube_uv_reflection_fragment:bm,defaultnormal_vertex:Tm,displacementmap_pars_vertex:wm,displacementmap_vertex:Am,emissivemap_fragment:Em,emissivemap_pars_fragment:Cm,colorspace_fragment:Rm,colorspace_pars_fragment:Pm,envmap_fragment:Im,envmap_common_pars_fragment:Lm,envmap_pars_fragment:Dm,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:Xm,envmap_vertex:Um,fog_vertex:Fm,fog_pars_vertex:Om,fog_fragment:Bm,fog_pars_fragment:zm,gradientmap_pars_fragment:km,lightmap_pars_fragment:Vm,lights_lambert_fragment:Gm,lights_lambert_pars_fragment:Hm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:Ym,lights_phong_fragment:Jm,lights_phong_pars_fragment:Zm,lights_physical_fragment:Km,lights_physical_pars_fragment:$m,lights_fragment_begin:jm,lights_fragment_maps:Qm,lights_fragment_end:t0,lightprobes_pars_fragment:e0,logdepthbuf_fragment:n0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:r0,map_fragment:a0,map_pars_fragment:o0,map_particle_fragment:l0,map_particle_pars_fragment:c0,metalnessmap_fragment:h0,metalnessmap_pars_fragment:u0,morphinstance_vertex:d0,morphcolor_vertex:f0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:_0,normal_fragment_maps:x0,normal_pars_fragment:v0,normal_pars_vertex:y0,normal_vertex:M0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:T0,clearcoat_pars_fragment:w0,iridescence_pars_fragment:A0,opaque_fragment:E0,packing:C0,premultiplied_alpha_fragment:R0,project_vertex:P0,dithering_fragment:I0,dithering_pars_fragment:L0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:N0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:F0,shadowmap_vertex:O0,shadowmask_pars_fragment:B0,skinbase_vertex:z0,skinning_pars_vertex:k0,skinning_vertex:V0,skinnormal_vertex:G0,specularmap_fragment:H0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:q0,transmission_fragment:Y0,transmission_pars_fragment:J0,uv_pars_fragment:Z0,uv_pars_vertex:K0,uv_vertex:$0,worldpos_vertex:j0,background_vert:Q0,background_frag:tg,backgroundCube_vert:eg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:sg,depth_vert:rg,depth_frag:ag,distance_vert:og,distance_frag:lg,equirect_vert:cg,equirect_frag:hg,linedashed_vert:ug,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:_g,meshmatcap_frag:xg,meshnormal_vert:vg,meshnormal_frag:yg,meshphong_vert:Mg,meshphong_frag:Sg,meshphysical_vert:bg,meshphysical_frag:Tg,meshtoon_vert:wg,meshtoon_frag:Ag,points_vert:Eg,points_frag:Cg,shadow_vert:Rg,shadow_frag:Pg,sprite_vert:Ig,sprite_frag:Lg},Ot={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ti={basic:{uniforms:bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:bn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:bn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:bn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:bn([Ot.points,Ot.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:bn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:bn([Ot.common,Ot.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:bn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:bn([Ot.sprite,Ot.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:bn([Ot.common,Ot.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:bn([Ot.lights,Ot.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Ti.physical={uniforms:bn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var ec={r:0,b:0,g:0},Dg=new He,pf=new le;pf.set(-1,0,0,0,1,0,0,0,1);function Ng(i,t,e,n,s,r){let o=new de(0),c=s===!0?0:1,h,u,g=null,M=0,p=null;function y(N){let z=N.isScene===!0?N.background:null;if(z&&z.isTexture){let E=N.backgroundBlurriness>0;z=t.get(z,E)}return z}function w(N){let z=!1,E=y(N);E===null?v(o,c):E&&E.isColor&&(v(E,1),z=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?e.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||z)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function C(N,z){let E=y(z);E&&(E.isCubeTexture||E.mapping===Ea)?(u===void 0&&(u=new Sn(new xr(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ls(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(z.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(pf),u.material.toneMapped=Se.getTransfer(E.colorSpace)!==Ue,(g!==E||M!==E.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,g=E,M=E.version,p=i.toneMapping),u.layers.enableAll(),N.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new Sn(new _a(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ls(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,h.material.toneMapped=Se.getTransfer(E.colorSpace)!==Ue,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(g!==E||M!==E.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,g=E,M=E.version,p=i.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function v(N,z){N.getRGB(ec,Nh(i)),e.buffers.color.setClear(ec.r,ec.g,ec.b,z,r)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(N,z=1){o.set(N),c=z,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(N){c=N,v(o,c)},render:w,addToRenderList:C,dispose:m}}function Ug(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function c(q,K,nt,X,Y){let lt=!1,st=M(q,X,nt,K);r!==st&&(r=st,u(r.object)),lt=y(q,X,nt,Y),lt&&w(q,X,nt,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,E(q,K,nt,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return i.createVertexArray()}function u(q){return i.bindVertexArray(q)}function g(q){return i.deleteVertexArray(q)}function M(q,K,nt,X){let Y=X.wireframe===!0,lt=n[K.id];lt===void 0&&(lt={},n[K.id]=lt);let st=q.isInstancedMesh===!0?q.id:0,gt=lt[st];gt===void 0&&(gt={},lt[st]=gt);let tt=gt[nt.id];tt===void 0&&(tt={},gt[nt.id]=tt);let ot=tt[Y];return ot===void 0&&(ot=p(h()),tt[Y]=ot),ot}function p(q){let K=[],nt=[],X=[];for(let Y=0;Y<e;Y++)K[Y]=0,nt[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:nt,attributeDivisors:X,object:q,attributes:{},index:null}}function y(q,K,nt,X){let Y=r.attributes,lt=K.attributes,st=0,gt=nt.getAttributes();for(let tt in gt)if(gt[tt].location>=0){let ct=Y[tt],kt=lt[tt];if(kt===void 0&&(tt==="instanceMatrix"&&q.instanceMatrix&&(kt=q.instanceMatrix),tt==="instanceColor"&&q.instanceColor&&(kt=q.instanceColor)),ct===void 0||ct.attribute!==kt||kt&&ct.data!==kt.data)return!0;st++}return r.attributesNum!==st||r.index!==X}function w(q,K,nt,X){let Y={},lt=K.attributes,st=0,gt=nt.getAttributes();for(let tt in gt)if(gt[tt].location>=0){let ct=lt[tt];ct===void 0&&(tt==="instanceMatrix"&&q.instanceMatrix&&(ct=q.instanceMatrix),tt==="instanceColor"&&q.instanceColor&&(ct=q.instanceColor));let kt={};kt.attribute=ct,ct&&ct.data&&(kt.data=ct.data),Y[tt]=kt,st++}r.attributes=Y,r.attributesNum=st,r.index=X}function C(){let q=r.newAttributes;for(let K=0,nt=q.length;K<nt;K++)q[K]=0}function v(q){m(q,0)}function m(q,K){let nt=r.newAttributes,X=r.enabledAttributes,Y=r.attributeDivisors;nt[q]=1,X[q]===0&&(i.enableVertexAttribArray(q),X[q]=1),Y[q]!==K&&(i.vertexAttribDivisor(q,K),Y[q]=K)}function N(){let q=r.newAttributes,K=r.enabledAttributes;for(let nt=0,X=K.length;nt<X;nt++)K[nt]!==q[nt]&&(i.disableVertexAttribArray(nt),K[nt]=0)}function z(q,K,nt,X,Y,lt,st){st===!0?i.vertexAttribIPointer(q,K,nt,Y,lt):i.vertexAttribPointer(q,K,nt,X,Y,lt)}function E(q,K,nt,X){C();let Y=X.attributes,lt=nt.getAttributes(),st=K.defaultAttributeValues;for(let gt in lt){let tt=lt[gt];if(tt.location>=0){let ot=Y[gt];if(ot===void 0&&(gt==="instanceMatrix"&&q.instanceMatrix&&(ot=q.instanceMatrix),gt==="instanceColor"&&q.instanceColor&&(ot=q.instanceColor)),ot!==void 0){let ct=ot.normalized,kt=ot.itemSize,Jt=t.get(ot);if(Jt===void 0)continue;let Fe=Jt.buffer,ce=Jt.type,Ee=Jt.bytesPerElement,ht=ce===i.INT||ce===i.UNSIGNED_INT||ot.gpuType===gl;if(ot.isInterleavedBufferAttribute){let _t=ot.data,Ht=_t.stride,ne=ot.offset;if(_t.isInstancedInterleavedBuffer){for(let Wt=0;Wt<tt.locationSize;Wt++)m(tt.location+Wt,_t.meshPerAttribute);q.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Wt=0;Wt<tt.locationSize;Wt++)v(tt.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Wt=0;Wt<tt.locationSize;Wt++)z(tt.location+Wt,kt/tt.locationSize,ce,ct,Ht*Ee,(ne+kt/tt.locationSize*Wt)*Ee,ht)}else{if(ot.isInstancedBufferAttribute){for(let _t=0;_t<tt.locationSize;_t++)m(tt.location+_t,ot.meshPerAttribute);q.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let _t=0;_t<tt.locationSize;_t++)v(tt.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let _t=0;_t<tt.locationSize;_t++)z(tt.location+_t,kt/tt.locationSize,ce,ct,kt*Ee,kt/tt.locationSize*_t*Ee,ht)}}else if(st!==void 0){let ct=st[gt];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(tt.location,ct);break;case 3:i.vertexAttrib3fv(tt.location,ct);break;case 4:i.vertexAttrib4fv(tt.location,ct);break;default:i.vertexAttrib1fv(tt.location,ct)}}}}N()}function L(){D();for(let q in n){let K=n[q];for(let nt in K){let X=K[nt];for(let Y in X){let lt=X[Y];for(let st in lt)g(lt[st].object),delete lt[st];delete X[Y]}}delete n[q]}}function P(q){if(n[q.id]===void 0)return;let K=n[q.id];for(let nt in K){let X=K[nt];for(let Y in X){let lt=X[Y];for(let st in lt)g(lt[st].object),delete lt[st];delete X[Y]}}delete n[q.id]}function F(q){for(let K in n){let nt=n[K];for(let X in nt){let Y=nt[X];if(Y[q.id]===void 0)continue;let lt=Y[q.id];for(let st in lt)g(lt[st].object),delete lt[st];delete Y[q.id]}}}function T(q){for(let K in n){let nt=n[K],X=q.isInstancedMesh===!0?q.id:0,Y=nt[X];if(Y!==void 0){for(let lt in Y){let st=Y[lt];for(let gt in st)g(st[gt].object),delete st[gt];delete Y[lt]}delete nt[X],Object.keys(nt).length===0&&delete n[K]}}}function D(){V(),o=!0,r!==s&&(r=s,u(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:D,resetDefaultState:V,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:v,disableUnusedAttributes:N}}function Fg(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,g){g!==0&&(i.drawArraysInstanced(n,h,u,g),e.update(u,n,g))}function c(h,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,g);let p=0;for(let y=0;y<g;y++)p+=u[y];e.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c}function Og(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==Jn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(F){let T=F===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Nn&&F!==Yn&&!T&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",g=h(u);g!==u&&(ie("WebGLRenderer:",u,"not supported, using",g,"instead."),u=g);let M=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&p===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),z=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:M,reversedDepthBuffer:p,maxTextures:y,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:N,maxVaryings:z,maxFragmentUniforms:E,maxSamples:L,samples:P}}function Bg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ni,c=new le,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(M,p){let y=M.length!==0||p||n!==0||s;return s=p,n=M.length,y},this.beginShadows=function(){r=!0,g(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(M,p){e=g(M,p,0)},this.setState=function(M,p,y){let w=M.clippingPlanes,C=M.clipIntersection,v=M.clipShadows,m=i.get(M);if(!s||w===null||w.length===0||r&&!v)r?g(null):u();else{let N=r?0:n,z=N*4,E=m.clippingState||null;h.value=E,E=g(w,p,z,y);for(let L=0;L!==z;++L)E[L]=e[L];m.clippingState=E,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function g(M,p,y,w){let C=M!==null?M.length:0,v=null;if(C!==0){if(v=h.value,w!==!0||v===null){let m=y+C*4,N=p.matrixWorldInverse;c.getNormalMatrix(N),(v===null||v.length<m)&&(v=new Float32Array(m));for(let z=0,E=y;z!==C;++z,E+=4)o.copy(M[z]).applyMatrix4(N,c),o.normal.toArray(v,E),v[E+3]=o.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,v}}var Ar=4,zg=6,kg=20,Vg=256,Fa=new vr,Xd=new de,Bh=null,zh=0,kh=0,Vh=!1,Gg=new Q,Ds=new Q,ic=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:c=Gg}=r;Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,c),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bh,zh,kh),this._renderer.xr.enabled=Vh,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ai,format:Jn,colorSpace:ia,depthBuffer:!1},s=qd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Hg(r)),this._blurMaterial=Xg(r,t,e),this._ggxMaterial=Wg(r,t,e)}return s}_compileMaterial(t){let e=new Sn(new kn,t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,s,r){let h=new yn(90,1,e,n),u=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],M=this._renderer,p=M.autoClear,y=M.toneMapping;M.getClearColor(Xd),M.toneMapping=si,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(s),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new xr,new da({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let C=this._backgroundBox,v=C.material,m=!1,N=t.background;N?N.isColor&&(v.color.copy(N),t.background=null,m=!0):(v.color.copy(Xd),m=!0);for(let z=0;z<6;z++){let E=z%3;E===0?(h.up.set(0,u[z],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+g[z],r.y,r.z)):E===1?(h.up.set(0,0,u[z]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+g[z],r.z)):(h.up.set(0,u[z],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+g[z]));let L=this._cubeSize;wr(s,E*L,z>2?L:0,L,L),M.setRenderTarget(s),m&&M.render(C,h),M.render(t,h)}M.toneMapping=y,M.autoClear=p,t.background=N}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let c=r.uniforms;c.envMap.value=t;let h=this._cubeSize;wr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,Fa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;let h=o.uniforms,u=n/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),M=Math.sqrt(u*u-g*g),p=u*1.25,y=M*p,{_lodMax:w}=this,C=this._sizeLods[n],v=3*C*(n>w-Ar?n-w+Ar:0),m=4*(this._cubeSize-C);h.envMap.value=t.texture,h.roughness.value=y,h.mipInt.value=w-e,wr(r,v,m,3*C,2*C),s.setRenderTarget(r),s.render(c,Fa),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=w-n,wr(t,v,m,3*C,2*C),s.setRenderTarget(t),s.render(c,Fa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,c=this._blurMaterial,h=this._lodMeshes[s];h.material=c;let u=c.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let g=this._sizeLods[s],M=3*g*(s>this._lodMax-Ar?s-this._lodMax+Ar:0),p=4*(this._cubeSize-g);wr(e,M,p,3*g,2*g),o.setRenderTarget(e),o.render(h,Fa)}};function Hg(i){let t=[],e=[],n=i,s=i-Ar+1+zg;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let c=1/(o-2),h=-c,u=1+c,g=[h,h,u,h,u,u,h,h,u,u,h,u],M=6,p=6,y=3,w=new Float32Array(y*p*M),C=new Float32Array(y*p*M);for(let m=0;m<M;m++){let N=m%3*2/3-1,z=m>2?0:-1,E=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];w.set(E,y*p*m);for(let L=0;L<p;L++){let P=g[L*2]*2-1,F=g[L*2+1]*2-1;m===0?Ds.set(1,F,P):m===1?Ds.set(-P,1,-F):m===2?Ds.set(-P,F,1):m===3?Ds.set(-1,F,-P):m===4?Ds.set(-P,-1,F):Ds.set(P,F,-1),Ds.toArray(C,(m*p+L)*y)}}let v=new kn;v.setAttribute("position",new zn(w,y)),v.setAttribute("outputDirection",new zn(C,y)),e.push(new Sn(v,null)),n>Ar&&n--}return{lodMeshes:e,sizeLods:t}}function qd(i,t,e){let n=new Dn(i,t,e);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wg(i,t,e){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Xg(i,t,e){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:kg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Yd(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Jd(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sc=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ma(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xr(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Si});r.uniforms.tEquirect.value=e;let o=new Sn(s,r),c=e.minFilter;return e.minFilter===ls&&(e.minFilter=fn),new hl(1,10,this).update(t,o),e.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function qg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(p,y=!1){return p==null?null:y?o(p):r(p)}function r(p){if(p&&p.isTexture){let y=p.mapping;if(y===fl||y===pl)if(t.has(p)){let w=t.get(p).texture;return c(w,p.mapping)}else{let w=p.image;if(w&&w.height>0){let C=new sc(w.height);return C.fromEquirectangularTexture(i,p),t.set(p,C),p.addEventListener("dispose",u),c(C.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){let y=p.mapping,w=y===fl||y===pl,C=y===os||y===Is;if(w||C){let v=e.get(p),m=v!==void 0?v.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==m)return n===null&&(n=new ic(i)),v=w?n.fromEquirectangular(p,v):n.fromCubemap(p,v),v.texture.pmremVersion=p.pmremVersion,e.set(p,v),v.texture;if(v!==void 0)return v.texture;{let N=p.image;return w&&N&&N.height>0||C&&N&&h(N)?(n===null&&(n=new ic(i)),v=w?n.fromEquirectangular(p):n.fromCubemap(p),v.texture.pmremVersion=p.pmremVersion,e.set(p,v),p.addEventListener("dispose",g),v.texture):null}}}return p}function c(p,y){return y===fl?p.mapping=os:y===pl&&(p.mapping=Is),p}function h(p){let y=0,w=6;for(let C=0;C<w;C++)p[C]!==void 0&&y++;return y===w}function u(p){let y=p.target;y.removeEventListener("dispose",u);let w=t.get(y);w!==void 0&&(t.delete(y),w.dispose())}function g(p){let y=p.target;y.removeEventListener("dispose",g);let w=e.get(y);w!==void 0&&(e.delete(y),w.dispose())}function M(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:M}}function Yg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function Jg(i,t,e,n){let s={},r=new WeakMap;function o(M){let p=M.target;p.index!==null&&t.remove(p.index);for(let w in p.attributes)t.remove(p.attributes[w]);p.removeEventListener("dispose",o),delete s[p.id];let y=r.get(p);y&&(t.remove(y),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(M,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function h(M){let p=M.attributes;for(let y in p)t.update(p[y],i.ARRAY_BUFFER)}function u(M){let p=[],y=M.index,w=M.attributes.position,C=0;if(w===void 0)return;if(y!==null){let N=y.array;C=y.version;for(let z=0,E=N.length;z<E;z+=3){let L=N[z+0],P=N[z+1],F=N[z+2];p.push(L,P,P,F,F,L)}}else{let N=w.array;C=w.version;for(let z=0,E=N.length/3-1;z<E;z+=3){let L=z+0,P=z+1,F=z+2;p.push(L,P,P,F,F,L)}}let v=new(w.count>=65535?ua:ha)(p,1);v.version=C;let m=r.get(M);m&&t.remove(m),r.set(M,v)}function g(M){let p=r.get(M);if(p){let y=M.index;y!==null&&p.version<y.version&&u(M)}else u(M);return r.get(M)}return{get:c,update:h,getWireframeAttribute:g}}function Zg(i,t,e){let n;function s(M){n=M}let r,o;function c(M){r=M.type,o=M.bytesPerElement}function h(M,p){i.drawElements(n,p,r,M*o),e.update(p,n,1)}function u(M,p,y){y!==0&&(i.drawElementsInstanced(n,p,r,M*o,y),e.update(p,n,y))}function g(M,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,M,0,y);let C=0;for(let v=0;v<y;v++)C+=p[v];e.update(C,n,1)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=g}function Kg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=c*(r/3);break;case i.LINES:e.lines+=c*(r/2);break;case i.LINE_STRIP:e.lines+=c*(r-1);break;case i.LINE_LOOP:e.lines+=c*r;break;case i.POINTS:e.points+=c*r;break;default:re("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $g(i,t,e){let n=new WeakMap,s=new Je;function r(o,c,h){let u=o.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,M=g!==void 0?g.length:0,p=n.get(c);if(p===void 0||p.count!==M){let D=function(){F.dispose(),n.delete(c),c.removeEventListener("dispose",D)};p!==void 0&&p.texture.dispose();let y=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],N=c.morphAttributes.color||[],z=0;y===!0&&(z=1),w===!0&&(z=2),C===!0&&(z=3);let E=c.attributes.position.count*z,L=1;E>t.maxTextureSize&&(L=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let P=new Float32Array(E*L*4*M),F=new aa(P,E,L,M);F.type=Yn,F.needsUpdate=!0;let T=z*4;for(let V=0;V<M;V++){let q=v[V],K=m[V],nt=N[V],X=E*L*4*V;for(let Y=0;Y<q.count;Y++){let lt=Y*T;y===!0&&(s.fromBufferAttribute(q,Y),P[X+lt+0]=s.x,P[X+lt+1]=s.y,P[X+lt+2]=s.z,P[X+lt+3]=0),w===!0&&(s.fromBufferAttribute(K,Y),P[X+lt+4]=s.x,P[X+lt+5]=s.y,P[X+lt+6]=s.z,P[X+lt+7]=0),C===!0&&(s.fromBufferAttribute(nt,Y),P[X+lt+8]=s.x,P[X+lt+9]=s.y,P[X+lt+10]=s.z,P[X+lt+11]=nt.itemSize===4?s.w:1)}}p={count:M,texture:F,size:new Ae(E,L)},n.set(c,p),c.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let y=0;for(let C=0;C<u.length;C++)y+=u[C];let w=c.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function jg(i,t,e,n,s){let r=new WeakMap;function o(u){let g=s.render.frame,M=u.geometry,p=t.get(u,M);if(r.get(p)!==g&&(t.update(p),r.set(p,g)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==g&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,g))),u.isSkinnedMesh){let y=u.skeleton;r.get(y)!==g&&(y.update(),r.set(y,g))}return p}function c(){r=new WeakMap}function h(u){let g=u.target;g.removeEventListener("dispose",h),n.releaseStatesOfObject(g),e.remove(g.instanceMatrix),g.instanceColor!==null&&e.remove(g.instanceColor)}return{update:o,dispose:c}}var Qg={[xh]:"LINEAR_TONE_MAPPING",[vh]:"REINHARD_TONE_MAPPING",[yh]:"CINEON_TONE_MAPPING",[Aa]:"ACES_FILMIC_TONE_MAPPING",[Sh]:"AGX_TONE_MAPPING",[bh]:"NEUTRAL_TONE_MAPPING",[Mh]:"CUSTOM_TONE_MAPPING"};function t_(i,t,e,n,s,r){let o=new Dn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,h=null,u=new kn;u.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new rn([0,2,0,0,2,0],2));let g=new Ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),M=new Sn(u,g),p=new vr(-1,1,1,-1,0,1),y=null,w=null,C=!1,v,m=null,N=[],z=!1;this.setSize=function(E,L){o.setSize(E,L),c!==null&&c.setSize(E,L),h!==null&&h.setSize(E,L);for(let P=0;P<N.length;P++){let F=N[P];F.setSize&&F.setSize(E,L)}},this.setEffects=function(E){N=E,z=N.length>0&&N[0].isRenderPass===!0;let L=o.width,P=o.height;N.length>0&&c===null&&(c=new Dn(L,P,{type:ai,depthBuffer:!1,stencilBuffer:!1}),h=new Dn(L,P,{type:ai,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<N.length;F++){let T=N[F];T.setSize&&T.setSize(L,P)}},this.begin=function(E,L){if(C||E.toneMapping===si&&N.length===0)return!1;if(m=L,L!==null){let P=L.width,F=L.height;(o.width!==P||o.height!==F)&&this.setSize(P,F)}return z===!1&&E.setRenderTarget(o),v=E.toneMapping,E.toneMapping=si,!0},this.hasRenderPass=function(){return z},this.end=function(E,L){E.toneMapping=v,C=!0;let P=o,F=c;for(let T=0;T<N.length;T++){let D=N[T];D.enabled!==!1&&(D.render(E,F,P,L),D.needsSwap!==!1&&(P=F,F=F===c?h:c))}if(y!==E.outputColorSpace||w!==E.toneMapping){y=E.outputColorSpace,w=E.toneMapping,g.defines={},Se.getTransfer(y)===Ue&&(g.defines.SRGB_TRANSFER="");let T=Qg[w];T&&(g.defines[T]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=P.texture,E.setRenderTarget(m),E.render(M,p),m=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),h!==null&&h.dispose(),u.dispose(),g.dispose()}}var mf=new Ln,Wh=new ns(1,1),gf=new aa,_f=new Yo,xf=new ma,Zd=[],Kd=[],$d=new Float32Array(16),jd=new Float32Array(9),Qd=new Float32Array(4);function Cr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zd[s];if(r===void 0&&(r=new Float32Array(s),Zd[s]=r),t!==0){n.toArray(r,0);for(let o=1,c=0;o!==t;++o)c+=e,i[o].toArray(r,c)}return r}function an(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oc(i,t){let e=Kd[t];e===void 0&&(e=new Int32Array(t),Kd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function e_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function r_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;Qd.set(n),i.uniformMatrix2fv(this.addr,!1,Qd),on(e,n)}}function a_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;jd.set(n),i.uniformMatrix3fv(this.addr,!1,jd),on(e,n)}}function o_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;$d.set(n),i.uniformMatrix4fv(this.addr,!1,$d),on(e,n)}}function l_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function c_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function d_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function g_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wh.compareFunction=e.isReversedDepthBuffer()?tc:Ql,r=Wh):r=mf,e.setTexture2D(t||r,s)}function __(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_f,s)}function x_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xf,s)}function v_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gf,s)}function y_(i){switch(i){case 5126:return e_;case 35664:return n_;case 35665:return i_;case 35666:return s_;case 35674:return r_;case 35675:return a_;case 35676:return o_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return h_;case 35669:case 35673:return u_;case 5125:return d_;case 36294:return f_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return v_}}function M_(i,t){i.uniform1fv(this.addr,t)}function S_(i,t){let e=Cr(t,this.size,2);i.uniform2fv(this.addr,e)}function b_(i,t){let e=Cr(t,this.size,3);i.uniform3fv(this.addr,e)}function T_(i,t){let e=Cr(t,this.size,4);i.uniform4fv(this.addr,e)}function w_(i,t){let e=Cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function A_(i,t){let e=Cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E_(i,t){let e=Cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function C_(i,t){i.uniform1iv(this.addr,t)}function R_(i,t){i.uniform2iv(this.addr,t)}function P_(i,t){i.uniform3iv(this.addr,t)}function I_(i,t){i.uniform4iv(this.addr,t)}function L_(i,t){i.uniform1uiv(this.addr,t)}function D_(i,t){i.uniform2uiv(this.addr,t)}function N_(i,t){i.uniform3uiv(this.addr,t)}function U_(i,t){i.uniform4uiv(this.addr,t)}function F_(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Wh:o=mf;for(let c=0;c!==s;++c)e.setTexture2D(t[c]||o,r[c])}function O_(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_f,r[o])}function B_(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xf,r[o])}function z_(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gf,r[o])}function k_(i){switch(i){case 5126:return M_;case 35664:return S_;case 35665:return b_;case 35666:return T_;case 35674:return w_;case 35675:return A_;case 35676:return E_;case 5124:case 35670:return C_;case 35667:case 35671:return R_;case 35668:case 35672:return P_;case 35669:case 35673:return I_;case 5125:return L_;case 36294:return D_;case 36295:return N_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}var Xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=y_(e.type)}},qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k_(e.type)}},Yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(t,e[c.id],n)}}},Gh=/(\w+)(\])?(\[|\.)?/g;function tf(i,t){i.seq.push(t),i.map[t.id]=t}function V_(i,t,e){let n=i.name,s=n.length;for(Gh.lastIndex=0;;){let r=Gh.exec(n),o=Gh.lastIndex,c=r[1],h=r[2]==="]",u=r[3];if(h&&(c=c|0),u===void 0||u==="["&&o+2===s){tf(e,u===void 0?new Xh(c,i,t):new qh(c,i,t));break}else{let M=e.map[c];M===void 0&&(M=new Yh(c),tf(e,M)),e=M}}}var Er=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let c=t.getActiveUniform(e,o),h=t.getUniformLocation(e,c.name);V_(c,h,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let c=e[r],h=n[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ef(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var G_=37297,H_=0;function W_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===t?">":" "} ${c}: ${e[o]}`)}return n.join(`
`)}var nf=new le;function X_(i){Se._getMatrix(nf,Se.workingColorSpace,i);let t=`mat3( ${nf.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+W_(i.getShaderSource(t),c)}else return r}function q_(i,t){let e=X_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Y_={[xh]:"Linear",[vh]:"Reinhard",[yh]:"Cineon",[Aa]:"ACESFilmic",[Sh]:"AgX",[bh]:"Neutral",[Mh]:"Custom"};function J_(i,t){let e=Y_[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nc=new Q;function Z_(){Se.getLuminanceCoefficients(nc);let i=nc.x.toFixed(4),t=nc.y.toFixed(4),e=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function $_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function j_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:c}}return e}function Ba(i){return i!==""}function rf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function af(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(i){return i.replace(Q_,ex)}var tx=new Map;function ex(i,t){let e=me[t];if(e===void 0){let n=tx.get(t);if(n!==void 0)e=me[n],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Jh(e)}var nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(i){return i.replace(nx,ix)}function ix(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lf(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var sx={[wa]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function rx(i){return sx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ax={[os]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Ea]:"ENVMAP_TYPE_CUBE_UV"};function ox(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ax[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var lx={[Is]:"ENVMAP_MODE_REFRACTION"};function cx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hx={[_h]:"ENVMAP_BLENDING_MULTIPLY",[Td]:"ENVMAP_BLENDING_MIX",[wd]:"ENVMAP_BLENDING_ADD"};function ux(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hx[i.combine]||"ENVMAP_BLENDING_NONE"}function dx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,c=e.fragmentShader,h=rx(e),u=ox(e),g=cx(e),M=ux(e),p=dx(e),y=K_(e),w=$_(r),C=s.createProgram(),v,m,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ba).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ba).join(`
`),m.length>0&&(m+=`
`)):(v=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),m=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+g:"",e.envMap?"#define "+M:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?me.tonemapping_pars_fragment:"",e.toneMapping!==si?J_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,q_("linearToOutputTexel",e.outputColorSpace),Z_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ba).join(`
`)),o=Jh(o),o=rf(o,e),o=af(o,e),c=Jh(c),c=rf(c,e),c=af(c,e),o=of(o),c=of(c),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let z=N+v+o,E=N+m+c,L=ef(s,s.VERTEX_SHADER,z),P=ef(s,s.FRAGMENT_SHADER,E);s.attachShader(C,L),s.attachShader(C,P),e.index0AttributeName!==void 0?s.bindAttribLocation(C,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C);function F(q){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(C)||"",nt=s.getShaderInfoLog(L)||"",X=s.getShaderInfoLog(P)||"",Y=K.trim(),lt=nt.trim(),st=X.trim(),gt=!0,tt=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(gt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,C,L,P);else{let ot=sf(s,L,"vertex"),ct=sf(s,P,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Y+`
`+ot+`
`+ct)}else Y!==""?ie("WebGLProgram: Program Info Log:",Y):(lt===""||st==="")&&(tt=!1);tt&&(q.diagnostics={runnable:gt,programLog:Y,vertexShader:{log:lt,prefix:v},fragmentShader:{log:st,prefix:m}})}s.deleteShader(L),s.deleteShader(P),T=new Er(s,C),D=j_(s,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(C,G_)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H_++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=L,this.fragmentShader=P,this}var px=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kh(t),e.set(t,n)),n}},Kh=class{constructor(t){this.id=px++,this.code=t,this.usedTimes=0}};function mx(i){return i===hs||i===Da||i===Na}function gx(i,t,e,n,s,r){let o=new oa,c=new Zh,h=new Set,u=[],g=new Map,M=n.logarithmicDepthBuffer,p=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return h.add(T),T===0?"uv":`uv${T}`}function C(T,D,V,q,K,nt){let X=q.fog,Y=K.geometry,lt=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,st=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,gt=t.get(T.envMap||lt,st),tt=gt&&gt.mapping===Ea?gt.image.height:null,ot=y[T.type];T.precision!==null&&(p=n.getMaxPrecision(T.precision),p!==T.precision&&ie("WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let ct=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,kt=ct!==void 0?ct.length:0,Jt=0;Y.morphAttributes.position!==void 0&&(Jt=1),Y.morphAttributes.normal!==void 0&&(Jt=2),Y.morphAttributes.color!==void 0&&(Jt=3);let Fe,ce,Ee,ht;if(ot){let Ve=Ti[ot];Fe=Ve.vertexShader,ce=Ve.fragmentShader}else{Fe=T.vertexShader,ce=T.fragmentShader;let Ve=c.getVertexShaderStage(T),Te=c.getFragmentShaderStage(T);c.update(T,Ve,Te),Ee=Ve.id,ht=Te.id}let _t=i.getRenderTarget(),Ht=i.state.buffers.depth.getReversed(),ne=K.isInstancedMesh===!0,Wt=K.isBatchedMesh===!0,ge=!!T.map,Ke=!!T.matcap,pe=!!gt,be=!!T.aoMap,ke=!!T.lightMap,xe=!!T.bumpMap&&T.wireframe===!1,We=!!T.normalMap,Le=!!T.displacementMap,Ce=!!T.emissiveMap,Xe=!!T.metalnessMap,_e=!!T.roughnessMap,G=T.anisotropy>0,un=T.clearcoat>0,De=T.dispersion>0,I=T.retroreflectivity>0,f=T.iridescence>0,k=T.sheen>0,j=T.transmission>0,rt=G&&!!T.anisotropyMap,Pt=un&&!!T.clearcoatMap,It=un&&!!T.clearcoatNormalMap,dt=un&&!!T.clearcoatRoughnessMap,ft=f&&!!T.iridescenceMap,yt=f&&!!T.iridescenceThicknessMap,$t=k&&!!T.sheenColorMap,Rt=k&&!!T.sheenRoughnessMap,At=!!T.specularMap,Gt=!!T.specularColorMap,te=!!T.specularIntensityMap,oe=j&&!!T.transmissionMap,W=j&&!!T.thicknessMap,Lt=!!T.gradientMap,mt=!!T.alphaMap,wt=T.alphaTest>0,Bt=!!T.alphaHash,Mt=!!T.extensions,Zt=si;T.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Xt={shaderID:ot,shaderType:T.type,shaderName:T.name,vertexShader:Fe,fragmentShader:ce,defines:T.defines,customVertexShaderID:Ee,customFragmentShaderID:ht,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Wt,batchingColor:Wt&&K._colorsTexture!==null,instancing:ne,instancingColor:ne&&K.instanceColor!==null,instancingMorph:ne&&K.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ge,matcap:Ke,envMap:pe,envMapMode:pe&&gt.mapping,envMapCubeUVHeight:tt,aoMap:be,lightMap:ke,bumpMap:xe,normalMap:We,displacementMap:Le,emissiveMap:Ce,normalMapObjectSpace:We&&T.normalMapType===Cd,normalMapTangentSpace:We&&T.normalMapType===jl,packedNormalMap:We&&T.normalMapType===jl&&mx(T.normalMap.format),metalnessMap:Xe,roughnessMap:_e,anisotropy:G,anisotropyMap:rt,clearcoat:un,clearcoatMap:Pt,clearcoatNormalMap:It,clearcoatRoughnessMap:dt,dispersion:De,retroreflection:I,iridescence:f,iridescenceMap:ft,iridescenceThicknessMap:yt,sheen:k,sheenColorMap:$t,sheenRoughnessMap:Rt,specularMap:At,specularColorMap:Gt,specularIntensityMap:te,transmission:j,transmissionMap:oe,thicknessMap:W,gradientMap:Lt,opaque:T.transparent===!1&&T.blending===Mr&&T.alphaToCoverage===!1,alphaMap:mt,alphaTest:wt,alphaHash:Bt,combine:T.combine,mapUv:ge&&w(T.map.channel),aoMapUv:be&&w(T.aoMap.channel),lightMapUv:ke&&w(T.lightMap.channel),bumpMapUv:xe&&w(T.bumpMap.channel),normalMapUv:We&&w(T.normalMap.channel),displacementMapUv:Le&&w(T.displacementMap.channel),emissiveMapUv:Ce&&w(T.emissiveMap.channel),metalnessMapUv:Xe&&w(T.metalnessMap.channel),roughnessMapUv:_e&&w(T.roughnessMap.channel),anisotropyMapUv:rt&&w(T.anisotropyMap.channel),clearcoatMapUv:Pt&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:It&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&w(T.sheenRoughnessMap.channel),specularMapUv:At&&w(T.specularMap.channel),specularColorMapUv:Gt&&w(T.specularColorMap.channel),specularIntensityMapUv:te&&w(T.specularIntensityMap.channel),transmissionMapUv:oe&&w(T.transmissionMap.channel),thicknessMapUv:W&&w(T.thicknessMap.channel),alphaMapUv:mt&&w(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(We||G),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!Y.attributes.uv&&(ge||mt),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&We===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Ht,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:Jt,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:nt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:ge&&T.map.isVideoTexture===!0&&Se.getTransfer(T.map.colorSpace)===Ue,decodeVideoTextureEmissive:Ce&&T.emissiveMap.isVideoTexture===!0&&Se.getTransfer(T.emissiveMap.colorSpace)===Ue,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Mi,flipSided:T.side===pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Mt&&T.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&T.extensions.multiDraw===!0||Wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xt.vertexUv1s=h.has(1),Xt.vertexUv2s=h.has(2),Xt.vertexUv3s=h.has(3),h.clear(),Xt}function v(T){let D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(let V in T.defines)D.push(V),D.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(m(D,T),N(D,T),D.push(i.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function m(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numSunLights),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numSunLightShadows),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function N(T,D){o.disableAll(),D.instancing&&o.enable(0),D.instancingColor&&o.enable(1),D.instancingMorph&&o.enable(2),D.matcap&&o.enable(3),D.envMap&&o.enable(4),D.normalMapObjectSpace&&o.enable(5),D.normalMapTangentSpace&&o.enable(6),D.clearcoat&&o.enable(7),D.iridescence&&o.enable(8),D.alphaTest&&o.enable(9),D.vertexColors&&o.enable(10),D.vertexAlphas&&o.enable(11),D.vertexUv1s&&o.enable(12),D.vertexUv2s&&o.enable(13),D.vertexUv3s&&o.enable(14),D.vertexTangents&&o.enable(15),D.anisotropy&&o.enable(16),D.alphaHash&&o.enable(17),D.batching&&o.enable(18),D.dispersion&&o.enable(19),D.retroreflection&&o.enable(24),D.batchingColor&&o.enable(20),D.gradientMap&&o.enable(21),D.packedNormalMap&&o.enable(22),D.vertexNormals&&o.enable(23),T.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.reversedDepthBuffer&&o.enable(4),D.skinning&&o.enable(5),D.morphTargets&&o.enable(6),D.morphNormals&&o.enable(7),D.morphColors&&o.enable(8),D.premultipliedAlpha&&o.enable(9),D.shadowMapEnabled&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),D.decodeVideoTexture&&o.enable(19),D.decodeVideoTextureEmissive&&o.enable(20),D.alphaToCoverage&&o.enable(21),D.numLightProbeGrids>0&&o.enable(22),D.hasPositionAttribute&&o.enable(23),T.push(o.mask)}function z(T){let D=y[T.type],V;if(D){let q=Ti[D];V=Gd.clone(q.uniforms)}else V=T.uniforms;return V}function E(T,D){let V=g.get(D);return V!==void 0?++V.usedTimes:(V=new fx(i,D,T,s),u.push(V),g.set(D,V)),V}function L(T){if(--T.usedTimes===0){let D=u.indexOf(T);u[D]=u[u.length-1],u.pop(),g.delete(T.cacheKey),T.destroy()}}function P(T){c.remove(T)}function F(){c.dispose()}return{getParameters:C,getProgramCacheKey:v,getUniforms:z,acquireProgram:E,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:F}}function _x(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,h){i.get(o)[c]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function xx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function cf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p){let y=0;return p.isInstancedMesh&&(y+=2),p.isSkinnedMesh&&(y+=1),y}function c(p,y,w,C,v,m){let N=i[t];return N===void 0?(N={id:p.id,object:p,geometry:y,material:w,materialVariant:o(p),groupOrder:C,renderOrder:p.renderOrder,z:v,group:m},i[t]=N):(N.id=p.id,N.object=p,N.geometry=y,N.material=w,N.materialVariant=o(p),N.groupOrder=C,N.renderOrder=p.renderOrder,N.z=v,N.group=m),t++,N}function h(p,y,w,C,v,m,N){N.reversedDepth===!0&&(v=-v);let z=c(p,y,w,C,v,m);w.transmission>0?n.push(z):w.transparent===!0?s.push(z):e.push(z)}function u(p,y,w,C,v,m){let N=c(p,y,w,C,v,m);w.transmission>0?n.unshift(N):w.transparent===!0?s.unshift(N):e.unshift(N)}function g(p,y){e.length>1&&e.sort(p||xx),n.length>1&&n.sort(y||cf),s.length>1&&s.sort(y||cf)}function M(){for(let p=t,y=i.length;p<y;p++){let w=i[p];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:M,sort:g}}function vx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new hf,i.set(n,[o])):s>=r.length?(o=new hf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new de};break;case"SpotLight":e={position:new Q,direction:new Q,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[t.id]=e,e}}}function Mx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Sx=0;function bx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Tx(i){let t=new yx,e=Mx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new Q);let s=new Q,r=new He,o=new He;function c(u){let g=0,M=0,p=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let y=0,w=0,C=0,v=0,m=0,N=0,z=0,E=0,L=0,P=0,F=0,T=0,D=0,V=0;u.sort(bx);for(let K=0,nt=u.length;K<nt;K++){let X=u[K],Y=X.color,lt=X.intensity,st=X.distance,gt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===hs?gt=X.shadow.map.texture:gt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=Y.r*lt,M+=Y.g*lt,p+=Y.b*lt;else if(X.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(X.sh.coefficients[tt],lt);V++}else if(X.isSunLight){let tt=t.get(X);if(tt.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let ot=X.shadow,ct=e.get(X);ct.shadowIntensity=ot.intensity,ct.shadowBias=ot.bias,ct.shadowNormalBias=ot.normalBias,ct.shadowRadius=ot.radius,ct.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[w]=ct,n.sunShadowMap[w]=gt;let kt=ot.getViewportCount();for(let Jt=0;Jt<kt;Jt++)n.sunShadowMatrix[C+Jt]=ot.getMatrix(Jt),n.sunShadowCascade[C+Jt]=ot._cascadeData[Jt];C+=kt,w++}n.sun[y]=tt,y++}else if(X.isDirectionalLight){let tt=t.get(X);if(tt.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let ot=X.shadow,ct=e.get(X);ct.shadowIntensity=ot.intensity,ct.shadowBias=ot.bias,ct.shadowNormalBias=ot.normalBias,ct.shadowRadius=ot.radius,ct.shadowMapSize=ot.mapSize,n.directionalShadow[v]=ct,n.directionalShadowMap[v]=gt,n.directionalShadowMatrix[v]=X.shadow.matrix,L++}n.directional[v]=tt,v++}else if(X.isSpotLight){let tt=t.get(X);tt.position.setFromMatrixPosition(X.matrixWorld),tt.color.copy(Y).multiplyScalar(lt),tt.distance=st,tt.coneCos=Math.cos(X.angle),tt.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),tt.decay=X.decay,n.spot[N]=tt;let ot=X.shadow;if(X.map&&(n.spotLightMap[T]=X.map,T++,ot.updateMatrices(X),X.castShadow&&D++),n.spotLightMatrix[N]=ot.matrix,X.castShadow){let ct=e.get(X);ct.shadowIntensity=ot.intensity,ct.shadowBias=ot.bias,ct.shadowNormalBias=ot.normalBias,ct.shadowRadius=ot.radius,ct.shadowMapSize=ot.mapSize,n.spotShadow[N]=ct,n.spotShadowMap[N]=gt,F++}N++}else if(X.isRectAreaLight){let tt=t.get(X);tt.color.copy(Y).multiplyScalar(lt),tt.halfWidth.set(X.width*.5,0,0),tt.halfHeight.set(0,X.height*.5,0),n.rectArea[z]=tt,z++}else if(X.isPointLight){let tt=t.get(X);if(tt.color.copy(X.color).multiplyScalar(X.intensity),tt.distance=X.distance,tt.decay=X.decay,X.castShadow){let ot=X.shadow,ct=e.get(X);ct.shadowIntensity=ot.intensity,ct.shadowBias=ot.bias,ct.shadowNormalBias=ot.normalBias,ct.shadowRadius=ot.radius,ct.shadowMapSize=ot.mapSize,ct.shadowCameraNear=ot.camera.near,ct.shadowCameraFar=ot.camera.far,n.pointShadow[m]=ct,n.pointShadowMap[m]=gt,n.pointShadowMatrix[m]=X.shadow.matrix,P++}n.point[m]=tt,m++}else if(X.isHemisphereLight){let tt=t.get(X);tt.skyColor.copy(X.color).multiplyScalar(lt),tt.groundColor.copy(X.groundColor).multiplyScalar(lt),n.hemi[E]=tt,E++}}z>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=M,n.ambient[2]=p;let q=n.hash;(q.sunLength!==y||q.directionalLength!==v||q.pointLength!==m||q.spotLength!==N||q.rectAreaLength!==z||q.hemiLength!==E||q.numSunShadows!==w||q.numDirectionalShadows!==L||q.numPointShadows!==P||q.numSpotShadows!==F||q.numSpotMaps!==T||q.numLightProbes!==V)&&(n.sun.length=y,n.directional.length=v,n.spot.length=N,n.rectArea.length=z,n.point.length=m,n.hemi.length=E,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=C,n.sunShadowCascade.length=C,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.directionalShadowMatrix.length=L,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=F,n.spotShadowMap.length=F,n.spotLightMatrix.length=F+T-D,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=V,q.sunLength=y,q.directionalLength=v,q.pointLength=m,q.spotLength=N,q.rectAreaLength=z,q.hemiLength=E,q.numSunShadows=w,q.numDirectionalShadows=L,q.numPointShadows=P,q.numSpotShadows=F,q.numSpotMaps=T,q.numLightProbes=V,n.version=Sx++)}function h(u,g){let M=0,p=0,y=0,w=0,C=0,v=0,m=g.matrixWorldInverse;for(let N=0,z=u.length;N<z;N++){let E=u[N];if(E.isSunLight){let L=n.sun[M];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(m),M++}else if(E.isDirectionalLight){let L=n.directional[p];L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(m),p++}else if(E.isSpotLight){let L=n.spot[w];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(m),L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(m),w++}else if(E.isRectAreaLight){let L=n.rectArea[C];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),C++}else if(E.isPointLight){let L=n.point[y];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(m),y++}else if(E.isHemisphereLight){let L=n.hemi[v];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(m),v++}}}return{setup:c,setupView:h,state:n}}function uf(i){let t=new Tx(i),e=[],n=[],s=[];function r(p){M.camera=p,e.length=0,n.length=0,s.length=0}function o(p){e.push(p)}function c(p){n.push(p)}function h(p){s.push(p)}function u(){t.setup(e)}function g(p){t.setupView(e,p)}let M={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:M,setupLights:u,setupLightsView:g,pushLight:o,pushShadow:c,pushLightProbeGrid:h}}function wx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),c;return o===void 0?(c=new uf(i),t.set(s,[c])):r>=o.length?(c=new uf(i),o.push(c)):c=o[r],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
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
}`,Cx=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],Rx=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],df=new He,Oa=new Q,Hh=new Q;function Px(i,t,e){let n=new _r,s=new Ae,r=new Ae,o=new Je,c=new $o,h=new jo,u={},g=e.maxTextureSize,M={[as]:pn,[pn]:as,[Mi]:Mi},p=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Ax,fragmentShader:Ex}),y=p.clone();y.defines.HORIZONTAL_PASS=1;let w=new kn;w.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new Sn(w,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let m=this.type;this.render=function(P,F,T){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;this.type===dl&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wa);let D=i.getRenderTarget(),V=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Si),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let nt=m!==this.type;nt&&F.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(Y=>Y.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,Y=P.length;X<Y;X++){let lt=P[X],st=lt.shadow;if(st===void 0){ie("WebGLShadowMap:",lt,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);let gt=st.getFrameExtents();s.multiply(gt),r.copy(st.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(r.x=Math.floor(g/gt.x),s.x=r.x*gt.x,st.mapSize.x=r.x),s.y>g&&(r.y=Math.floor(g/gt.y),s.y=r.y*gt.y,st.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(st.camera._reversedDepth=tt,st.map===null||nt===!0){if(st.map!==null&&(st.map.depthTexture!==null&&(st.map.depthTexture.dispose(),st.map.depthTexture=null),st.map.dispose()),this.type===yr){if(lt.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}st.map=new Dn(s.x,s.y,{format:hs,type:ai,minFilter:fn,magFilter:fn,generateMipmaps:!1}),st.map.texture.name=lt.name+".shadowMap",st.map.depthTexture=new ns(s.x,s.y,Yn),st.map.depthTexture.name=lt.name+".shadowMapDepth",st.map.depthTexture.format=_i,st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=je,st.map.depthTexture.magFilter=je}else lt.isPointLight?(st.map=new sc(s.x),st.map.depthTexture=new Zo(s.x,ri)):(st.map=new Dn(s.x,s.y),st.map.depthTexture=new ns(s.x,s.y,ri)),st.map.depthTexture.name=lt.name+".shadowMap",st.map.depthTexture.format=_i,this.type===wa?(st.map.depthTexture.compareFunction=tt?tc:Ql,st.map.depthTexture.minFilter=fn,st.map.depthTexture.magFilter=fn):(st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=je,st.map.depthTexture.magFilter=je);st.camera.updateProjectionMatrix()}st.map.isWebGLCubeRenderTarget!==!0&&(st.map.width!==s.x||st.map.height!==s.y)&&st.map.setSize(s.x,s.y);let ot=st.map.isWebGLCubeRenderTarget?6:st.getViewportCount();lt.isPointLight!==!0&&st.updateMatrices(lt,T);for(let ct=0;ct<ot;ct++){let kt=st.getCamera(ct);if(lt.isPointLight){let Jt=st.camera,Fe=st.matrix,ce=lt.distance||Jt.far;ce!==Jt.far&&(Jt.far=ce,Jt.updateProjectionMatrix()),Oa.setFromMatrixPosition(lt.matrixWorld),Jt.position.copy(Oa),Hh.copy(Jt.position),Hh.add(Cx[ct]),Jt.up.copy(Rx[ct]),Jt.lookAt(Hh),Jt.updateMatrixWorld(),Fe.makeTranslation(-Oa.x,-Oa.y,-Oa.z),df.multiplyMatrices(Jt.projectionMatrix,Jt.matrixWorldInverse),st._frustum.setFromProjectionMatrix(df,Jt.coordinateSystem,Jt.reversedDepth)}if(st.map.isWebGLCubeRenderTarget)i.setRenderTarget(st.map,ct),i.clear();else{ct===0&&(i.setRenderTarget(st.map),i.clear());let Jt=st.getViewport(ct);o.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),K.viewport(o)}n=st.getFrustum(ct),E(F,T,kt,lt,this.type)}st.isPointLightShadow!==!0&&this.type===yr&&N(st,T),st.needsUpdate=!1}m=this.type,v.needsUpdate=!1,i.setRenderTarget(D,V,q)};function N(P,F){let T=t.update(C);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null?P.mapPass=new Dn(s.x,s.y,{format:hs,type:ai}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),p.uniforms.shadow_pass.value=P.map.depthTexture,p.uniforms.resolution.value.set(P.map.width,P.map.height),p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(F,null,T,p,C,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value.set(P.map.width,P.map.height),y.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(F,null,T,y,C,null)}function z(P,F,T,D){let V=null,q=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(q!==void 0)V=q;else if(V=T.isPointLight===!0?h:c,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let K=V.uuid,nt=F.uuid,X=u[K];X===void 0&&(X={},u[K]=X);let Y=X[nt];Y===void 0&&(Y=V.clone(),X[nt]=Y,F.addEventListener("dispose",L)),V=Y}if(V.visible=F.visible,V.wireframe=F.wireframe,D===yr?V.side=F.shadowSide!==null?F.shadowSide:F.side:V.side=F.shadowSide!==null?F.shadowSide:M[F.side],V.alphaMap=F.alphaMap,V.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,V.map=F.map,V.clipShadows=F.clipShadows,V.clippingPlanes=F.clippingPlanes,V.clipIntersection=F.clipIntersection,V.displacementMap=F.displacementMap,V.displacementScale=F.displacementScale,V.displacementBias=F.displacementBias,V.wireframeLinewidth=F.wireframeLinewidth,V.linewidth=F.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let K=i.properties.get(V);K.light=T}return V}function E(P,F,T,D,V){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&V===yr)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);let nt=t.update(P),X=P.material;if(Array.isArray(X)){let Y=nt.groups;for(let lt=0,st=Y.length;lt<st;lt++){let gt=Y[lt],tt=X[gt.materialIndex];if(tt&&tt.visible){let ot=z(P,tt,D,V);P.onBeforeShadow(i,P,F,T,nt,ot,gt),i.renderBufferDirect(T,null,nt,ot,P,gt),P.onAfterShadow(i,P,F,T,nt,ot,gt)}}}else if(X.visible){let Y=z(P,X,D,V);P.onBeforeShadow(i,P,F,T,nt,Y,null),i.renderBufferDirect(T,null,nt,Y,P,null),P.onAfterShadow(i,P,F,T,nt,Y,null)}}let K=P.children;for(let nt=0,X=K.length;nt<X;nt++)E(K[nt],F,T,D,V)}function L(P){P.target.removeEventListener("dispose",L);for(let T in u){let D=u[T],V=P.target.uuid;V in D&&(D[V].dispose(),delete D[V])}}}function Ix(i,t){function e(){let W=!1,Lt=new Je,mt=null,wt=new Je(0,0,0,0);return{setMask:function(Bt){mt!==Bt&&!W&&(i.colorMask(Bt,Bt,Bt,Bt),mt=Bt)},setLocked:function(Bt){W=Bt},setClear:function(Bt,Mt,Zt,Xt,Ve){Ve===!0&&(Bt*=Xt,Mt*=Xt,Zt*=Xt),Lt.set(Bt,Mt,Zt,Xt),wt.equals(Lt)===!1&&(i.clearColor(Bt,Mt,Zt,Xt),wt.copy(Lt))},reset:function(){W=!1,mt=null,wt.set(-1,0,0,0)}}}function n(){let W=!1,Lt=!1,mt=null,wt=null,Bt=null;return{setReversed:function(Mt){if(Lt!==Mt){let Zt=t.get("EXT_clip_control");Mt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Lt=Mt;let Xt=Bt;Bt=null,this.setClear(Xt)}},getReversed:function(){return Lt},setTest:function(Mt){Mt?_t(i.DEPTH_TEST):Ht(i.DEPTH_TEST)},setMask:function(Mt){mt!==Mt&&!W&&(i.depthMask(Mt),mt=Mt)},setFunc:function(Mt){if(Lt&&(Mt=kd[Mt]),wt!==Mt){switch(Mt){case No:i.depthFunc(i.NEVER);break;case Uo:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case dr:i.depthFunc(i.LEQUAL);break;case Oo:i.depthFunc(i.EQUAL);break;case Bo:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Mt}},setLocked:function(Mt){W=Mt},setClear:function(Mt){Bt!==Mt&&(Bt=Mt,Lt&&(Mt=1-Mt),i.clearDepth(Mt))},reset:function(){W=!1,mt=null,wt=null,Bt=null,Lt=!1}}}function s(){let W=!1,Lt=null,mt=null,wt=null,Bt=null,Mt=null,Zt=null,Xt=null,Ve=null;return{setTest:function(Te){W||(Te?_t(i.STENCIL_TEST):Ht(i.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!W&&(i.stencilMask(Te),Lt=Te)},setFunc:function(Te,Un,Rn){(mt!==Te||wt!==Un||Bt!==Rn)&&(i.stencilFunc(Te,Un,Rn),mt=Te,wt=Un,Bt=Rn)},setOp:function(Te,Un,Rn){(Mt!==Te||Zt!==Un||Xt!==Rn)&&(i.stencilOp(Te,Un,Rn),Mt=Te,Zt=Un,Xt=Rn)},setLocked:function(Te){W=Te},setClear:function(Te){Ve!==Te&&(i.clearStencil(Te),Ve=Te)},reset:function(){W=!1,Lt=null,mt=null,wt=null,Bt=null,Mt=null,Zt=null,Xt=null,Ve=null}}}let r=new e,o=new n,c=new s,h=new WeakMap,u=new WeakMap,g={},M={},p={},y=new WeakMap,w=[],C=null,v=!1,m=null,N=null,z=null,E=null,L=null,P=null,F=null,T=new de(0,0,0),D=0,V=!1,q=null,K=null,nt=null,X=null,Y=null,lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,gt=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(tt)[1]),st=gt>=1):tt.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),st=gt>=2);let ot=null,ct={},kt=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),Fe=new Je().fromArray(kt),ce=new Je().fromArray(Jt);function Ee(W,Lt,mt,wt){let Bt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(W,Mt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<mt;Zt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(Lt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return Mt}let ht={};ht[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),_t(i.DEPTH_TEST),o.setFunc(dr),xe(!1),We(uh),_t(i.CULL_FACE),be(Si);function _t(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function Ht(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function ne(W,Lt){return p[W]!==Lt?(i.bindFramebuffer(W,Lt),p[W]=Lt,W===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Lt),W===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Wt(W,Lt){let mt=w,wt=!1;if(W){mt=y.get(Lt),mt===void 0&&(mt=[],y.set(Lt,mt));let Bt=W.textures;if(mt.length!==Bt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Zt=Bt.length;Mt<Zt;Mt++)mt[Mt]=i.COLOR_ATTACHMENT0+Mt;mt.length=Bt.length,wt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(mt)}function ge(W){return C!==W?(i.useProgram(W),C=W,!0):!1}let Ke={[Ps]:i.FUNC_ADD,[od]:i.FUNC_SUBTRACT,[ld]:i.FUNC_REVERSE_SUBTRACT};Ke[cd]=i.MIN,Ke[hd]=i.MAX;let pe={[ud]:i.ZERO,[dd]:i.ONE,[fd]:i.SRC_COLOR,[mh]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[_d]:i.DST_COLOR,[md]:i.DST_ALPHA,[pd]:i.ONE_MINUS_SRC_COLOR,[gh]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[gd]:i.ONE_MINUS_DST_ALPHA,[yd]:i.CONSTANT_COLOR,[Md]:i.ONE_MINUS_CONSTANT_COLOR,[Sd]:i.CONSTANT_ALPHA,[bd]:i.ONE_MINUS_CONSTANT_ALPHA};function be(W,Lt,mt,wt,Bt,Mt,Zt,Xt,Ve,Te){if(W===Si){v===!0&&(Ht(i.BLEND),v=!1);return}if(v===!1&&(_t(i.BLEND),v=!0),W!==ad){if(W!==m||Te!==V){if((N!==Ps||L!==Ps)&&(i.blendEquation(i.FUNC_ADD),N=Ps,L=Ps),Te)switch(W){case Mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dh:i.blendFunc(i.ONE,i.ONE);break;case fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ph:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:re("WebGLState: Invalid blending: ",W);break}else switch(W){case Mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fh:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",W);break}z=null,E=null,P=null,F=null,T.set(0,0,0),D=0,m=W,V=Te}return}Bt=Bt||Lt,Mt=Mt||mt,Zt=Zt||wt,(Lt!==N||Bt!==L)&&(i.blendEquationSeparate(Ke[Lt],Ke[Bt]),N=Lt,L=Bt),(mt!==z||wt!==E||Mt!==P||Zt!==F)&&(i.blendFuncSeparate(pe[mt],pe[wt],pe[Mt],pe[Zt]),z=mt,E=wt,P=Mt,F=Zt),(Xt.equals(T)===!1||Ve!==D)&&(i.blendColor(Xt.r,Xt.g,Xt.b,Ve),T.copy(Xt),D=Ve),m=W,V=!1}function ke(W,Lt){W.side===Mi?Ht(i.CULL_FACE):_t(i.CULL_FACE);let mt=W.side===pn;Lt&&(mt=!mt),xe(mt),W.blending===Mr&&W.transparent===!1?be(Si):be(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let wt=W.stencilWrite;c.setTest(wt),wt&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ce(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(W){q!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),q=W)}function We(W){W!==sd?(_t(i.CULL_FACE),W!==K&&(W===uh?i.cullFace(i.BACK):W===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ht(i.CULL_FACE),K=W}function Le(W){W!==nt&&(st&&i.lineWidth(W),nt=W)}function Ce(W,Lt,mt){W?(_t(i.POLYGON_OFFSET_FILL),(X!==Lt||Y!==mt)&&(X=Lt,Y=mt,o.getReversed()&&(Lt=-Lt),i.polygonOffset(Lt,mt))):Ht(i.POLYGON_OFFSET_FILL)}function Xe(W){W?_t(i.SCISSOR_TEST):Ht(i.SCISSOR_TEST)}function _e(W){W===void 0&&(W=i.TEXTURE0+lt-1),ot!==W&&(i.activeTexture(W),ot=W)}function G(W,Lt,mt){mt===void 0&&(ot===null?mt=i.TEXTURE0+lt-1:mt=ot);let wt=ct[mt];wt===void 0&&(wt={type:void 0,texture:void 0},ct[mt]=wt),(wt.type!==W||wt.texture!==Lt)&&(ot!==mt&&(i.activeTexture(mt),ot=mt),i.bindTexture(W,Lt||ht[W]),wt.type=W,wt.texture=Lt)}function un(){let W=ct[ot];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function De(){try{i.compressedTexImage2D(...arguments)}catch(W){re("WebGLState:",W)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(W){re("WebGLState:",W)}}function f(){try{i.texSubImage2D(...arguments)}catch(W){re("WebGLState:",W)}}function k(){try{i.texSubImage3D(...arguments)}catch(W){re("WebGLState:",W)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(W){re("WebGLState:",W)}}function rt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){re("WebGLState:",W)}}function Pt(){try{i.texStorage2D(...arguments)}catch(W){re("WebGLState:",W)}}function It(){try{i.texStorage3D(...arguments)}catch(W){re("WebGLState:",W)}}function dt(){try{i.texImage2D(...arguments)}catch(W){re("WebGLState:",W)}}function ft(){try{i.texImage3D(...arguments)}catch(W){re("WebGLState:",W)}}function yt(W){return M[W]!==void 0?M[W]:i.getParameter(W)}function $t(W,Lt){M[W]!==Lt&&(i.pixelStorei(W,Lt),M[W]=Lt)}function Rt(W){Fe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Fe.copy(W))}function At(W){ce.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ce.copy(W))}function Gt(W,Lt){let mt=u.get(Lt);mt===void 0&&(mt=new WeakMap,u.set(Lt,mt));let wt=mt.get(W);wt===void 0&&(wt=i.getUniformBlockIndex(Lt,W.name),mt.set(W,wt))}function te(W,Lt){let wt=u.get(Lt).get(W);h.get(Lt)!==wt&&(i.uniformBlockBinding(Lt,wt,W.__bindingPointIndex),h.set(Lt,wt))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),g={},M={},ot=null,ct={},p={},y=new WeakMap,w=[],C=null,v=!1,m=null,N=null,z=null,E=null,L=null,P=null,F=null,T=new de(0,0,0),D=0,V=!1,q=null,K=null,nt=null,X=null,Y=null,Fe.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:_t,disable:Ht,bindFramebuffer:ne,drawBuffers:Wt,useProgram:ge,setBlending:be,setMaterial:ke,setFlipSided:xe,setCullFace:We,setLineWidth:Le,setPolygonOffset:Ce,setScissorTest:Xe,activeTexture:_e,bindTexture:G,unbindTexture:un,compressedTexImage2D:De,compressedTexImage3D:I,texImage2D:dt,texImage3D:ft,pixelStorei:$t,getParameter:yt,updateUBOMapping:Gt,uniformBlockBinding:te,texStorage2D:Pt,texStorage3D:It,texSubImage2D:f,texSubImage3D:k,compressedTexSubImage2D:j,compressedTexSubImage3D:rt,scissor:Rt,viewport:At,reset:oe}}function Lx(i,t,e,n,s,r,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ae,g=new WeakMap,M=new Set,p,y=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(I,f){return w?new OffscreenCanvas(I,f):ra("canvas")}function v(I,f,k){let j=1,rt=De(I);if((rt.width>k||rt.height>k)&&(j=k/Math.max(rt.width,rt.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Pt=Math.floor(j*rt.width),It=Math.floor(j*rt.height);p===void 0&&(p=C(Pt,It));let dt=f?C(Pt,It):p;return dt.width=Pt,dt.height=It,dt.getContext("2d").drawImage(I,0,0,Pt,It),ie("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Pt+"x"+It+")."),dt}else return"data"in I&&ie("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),I;return I}function m(I){return I.generateMipmaps}function N(I){i.generateMipmap(I)}function z(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(I,f,k,j,rt,Pt=!1){if(I!==null){if(i[I]!==void 0)return i[I];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let It;j&&(It=t.get("EXT_texture_norm16"),It||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=f;if(f===i.RED&&(k===i.FLOAT&&(dt=i.R32F),k===i.HALF_FLOAT&&(dt=i.R16F),k===i.UNSIGNED_BYTE&&(dt=i.R8),k===i.UNSIGNED_SHORT&&It&&(dt=It.R16_EXT),k===i.SHORT&&It&&(dt=It.R16_SNORM_EXT)),f===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(dt=i.R8UI),k===i.UNSIGNED_SHORT&&(dt=i.R16UI),k===i.UNSIGNED_INT&&(dt=i.R32UI),k===i.BYTE&&(dt=i.R8I),k===i.SHORT&&(dt=i.R16I),k===i.INT&&(dt=i.R32I)),f===i.RG&&(k===i.FLOAT&&(dt=i.RG32F),k===i.HALF_FLOAT&&(dt=i.RG16F),k===i.UNSIGNED_BYTE&&(dt=i.RG8),k===i.UNSIGNED_SHORT&&It&&(dt=It.RG16_EXT),k===i.SHORT&&It&&(dt=It.RG16_SNORM_EXT)),f===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(dt=i.RG8UI),k===i.UNSIGNED_SHORT&&(dt=i.RG16UI),k===i.UNSIGNED_INT&&(dt=i.RG32UI),k===i.BYTE&&(dt=i.RG8I),k===i.SHORT&&(dt=i.RG16I),k===i.INT&&(dt=i.RG32I)),f===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(dt=i.RGB8UI),k===i.UNSIGNED_SHORT&&(dt=i.RGB16UI),k===i.UNSIGNED_INT&&(dt=i.RGB32UI),k===i.BYTE&&(dt=i.RGB8I),k===i.SHORT&&(dt=i.RGB16I),k===i.INT&&(dt=i.RGB32I)),f===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(dt=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(dt=i.RGBA16UI),k===i.UNSIGNED_INT&&(dt=i.RGBA32UI),k===i.BYTE&&(dt=i.RGBA8I),k===i.SHORT&&(dt=i.RGBA16I),k===i.INT&&(dt=i.RGBA32I)),f===i.RGB&&(k===i.UNSIGNED_SHORT&&It&&(dt=It.RGB16_EXT),k===i.SHORT&&It&&(dt=It.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(dt=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(dt=i.R11F_G11F_B10F)),f===i.RGBA){let ft=Pt?sa:Se.getTransfer(rt);k===i.FLOAT&&(dt=i.RGBA32F),k===i.HALF_FLOAT&&(dt=i.RGBA16F),k===i.UNSIGNED_BYTE&&(dt=ft===Ue?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&It&&(dt=It.RGBA16_EXT),k===i.SHORT&&It&&(dt=It.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function L(I,f){let k;return I?f===null||f===ri||f===br?k=i.DEPTH24_STENCIL8:f===Yn?k=i.DEPTH32F_STENCIL8:f===Sr&&(k=i.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===ri||f===br?k=i.DEPTH_COMPONENT24:f===Yn?k=i.DEPTH_COMPONENT32F:f===Sr&&(k=i.DEPTH_COMPONENT16),k}function P(I,f){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==je&&I.minFilter!==fn?Math.log2(Math.max(f.width,f.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?f.mipmaps.length:1}function F(I){let f=I.target;f.removeEventListener("dispose",F),D(f),f.isVideoTexture&&g.delete(f),f.isHTMLTexture&&M.delete(f)}function T(I){let f=I.target;f.removeEventListener("dispose",T),q(f)}function D(I){let f=n.get(I);if(f.__webglInit===void 0)return;let k=I.source,j=y.get(k);if(j){let rt=j[f.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&V(I),Object.keys(j).length===0&&y.delete(k)}n.remove(I)}function V(I){let f=n.get(I);i.deleteTexture(f.__webglTexture);let k=I.source,j=y.get(k);delete j[f.__cacheKey],o.memory.textures--}function q(I){let f=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(f.__webglFramebuffer[j]))for(let rt=0;rt<f.__webglFramebuffer[j].length;rt++)i.deleteFramebuffer(f.__webglFramebuffer[j][rt]);else i.deleteFramebuffer(f.__webglFramebuffer[j]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[j])}else{if(Array.isArray(f.__webglFramebuffer))for(let j=0;j<f.__webglFramebuffer.length;j++)i.deleteFramebuffer(f.__webglFramebuffer[j]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let j=0;j<f.__webglColorRenderbuffer.length;j++)f.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[j]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}let k=I.textures;for(let j=0,rt=k.length;j<rt;j++){let Pt=n.get(k[j]);Pt.__webglTexture&&(i.deleteTexture(Pt.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(I)}let K=0;function nt(){K=0}function X(){return K}function Y(I){K=I}function lt(){let I=K;return I>=s.maxTextures&&ie("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,I}function st(I){let f=[];return f.push(I.wrapS),f.push(I.wrapT),f.push(I.wrapR||0),f.push(I.magFilter),f.push(I.minFilter),f.push(I.anisotropy),f.push(I.internalFormat),f.push(I.format),f.push(I.type),f.push(I.generateMipmaps),f.push(I.premultiplyAlpha),f.push(I.flipY),f.push(I.unpackAlignment),f.push(I.colorSpace),f.join()}function gt(I,f){let k=n.get(I);if(I.isVideoTexture&&G(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&k.__version!==I.version){let j=I.image;if(j===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(k,I,f);return}}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+f)}function tt(I,f){let k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Ht(k,I,f);return}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+f)}function ot(I,f){let k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Ht(k,I,f);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+f)}function ct(I,f){let k=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&k.__version!==I.version){ne(k,I,f);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+f)}let kt={[Vo]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},Jt={[je]:i.NEAREST,[Ad]:i.NEAREST_MIPMAP_NEAREST,[Ca]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[ml]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},Fe={[Pd]:i.NEVER,[Ud]:i.ALWAYS,[Id]:i.LESS,[Ql]:i.LEQUAL,[Ld]:i.EQUAL,[tc]:i.GEQUAL,[Dd]:i.GREATER,[Nd]:i.NOTEQUAL};function ce(I,f){if(f.type===Yn&&t.has("OES_texture_float_linear")===!1&&(f.magFilter===fn||f.magFilter===ml||f.magFilter===Ca||f.magFilter===ls||f.minFilter===fn||f.minFilter===ml||f.minFilter===Ca||f.minFilter===ls)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,kt[f.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,kt[f.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,kt[f.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Jt[f.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Jt[f.minFilter]),f.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Fe[f.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===je||f.minFilter!==Ca&&f.minFilter!==ls||f.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,s.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function Ee(I,f){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,f.addEventListener("dispose",F));let j=f.source,rt=y.get(j);rt===void 0&&(rt={},y.set(j,rt));let Pt=st(f);if(Pt!==I.__cacheKey){rt[Pt]===void 0&&(rt[Pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),rt[Pt].usedTimes++;let It=rt[I.__cacheKey];It!==void 0&&(rt[I.__cacheKey].usedTimes--,It.usedTimes===0&&V(f)),I.__cacheKey=Pt,I.__webglTexture=rt[Pt].texture}return k}function ht(I,f,k){return Math.floor(Math.floor(I/k)/f)}function _t(I,f,k,j){let Pt=I.updateRanges;if(Pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,k,j,f.data);else{Pt.sort(($t,Rt)=>$t.start-Rt.start);let It=0;for(let $t=1;$t<Pt.length;$t++){let Rt=Pt[It],At=Pt[$t],Gt=Rt.start+Rt.count,te=ht(At.start,f.width,4),oe=ht(Rt.start,f.width,4);At.start<=Gt+1&&te===oe&&ht(At.start+At.count-1,f.width,4)===te?Rt.count=Math.max(Rt.count,At.start+At.count-Rt.start):(++It,Pt[It]=At)}Pt.length=It+1;let dt=e.getParameter(i.UNPACK_ROW_LENGTH),ft=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let $t=0,Rt=Pt.length;$t<Rt;$t++){let At=Pt[$t],Gt=Math.floor(At.start/4),te=Math.ceil(At.count/4),oe=Gt%f.width,W=Math.floor(Gt/f.width),Lt=te,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,oe,W,Lt,mt,k,j,f.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,dt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function Ht(I,f,k){let j=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&(j=i.TEXTURE_3D);let rt=Ee(I,f),Pt=f.source;e.bindTexture(j,I.__webglTexture,i.TEXTURE0+k);let It=n.get(Pt);if(Pt.version!==It.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)===!1){let mt=Se.getPrimaries(Se.workingColorSpace),wt=f.colorSpace===Bi?null:Se.getPrimaries(f.colorSpace),Bt=f.colorSpace===Bi||mt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment);let ft=v(f.image,!1,s.maxTextureSize);ft=un(f,ft);let yt=r.convert(f.format,f.colorSpace),$t=r.convert(f.type),Rt=E(f.internalFormat,yt,$t,f.normalized,f.colorSpace,f.isVideoTexture);ce(j,f);let At,Gt=f.mipmaps,te=f.isVideoTexture!==!0,oe=It.__version===void 0||rt===!0,W=Pt.dataReady,Lt=P(f,ft);if(f.isDepthTexture)Rt=L(f.format===cs,f.type),oe&&(te?e.texStorage2D(i.TEXTURE_2D,1,Rt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Rt,ft.width,ft.height,0,yt,$t,null));else if(f.isDataTexture)if(Gt.length>0){te&&oe&&e.texStorage2D(i.TEXTURE_2D,Lt,Rt,Gt[0].width,Gt[0].height);for(let mt=0,wt=Gt.length;mt<wt;mt++)At=Gt[mt],te?W&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,At.width,At.height,yt,$t,At.data):e.texImage2D(i.TEXTURE_2D,mt,Rt,At.width,At.height,0,yt,$t,At.data);f.generateMipmaps=!1}else te?(oe&&e.texStorage2D(i.TEXTURE_2D,Lt,Rt,ft.width,ft.height),W&&_t(f,ft,yt,$t)):e.texImage2D(i.TEXTURE_2D,0,Rt,ft.width,ft.height,0,yt,$t,ft.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){te&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Rt,Gt[0].width,Gt[0].height,ft.depth);for(let mt=0,wt=Gt.length;mt<wt;mt++)if(At=Gt[mt],f.format!==Jn)if(yt!==null)if(te){if(W)if(f.layerUpdates.size>0){let Bt=Oh(At.width,At.height,f.format,f.type);for(let Mt of f.layerUpdates){let Zt=At.data.subarray(Mt*Bt/At.data.BYTES_PER_ELEMENT,(Mt+1)*Bt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Mt,At.width,At.height,1,yt,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,At.width,At.height,ft.depth,yt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Rt,At.width,At.height,ft.depth,0,At.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,At.width,At.height,ft.depth,yt,$t,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Rt,At.width,At.height,ft.depth,0,yt,$t,At.data);f.layerUpdates.size>0&&f.clearLayerUpdates()}else{te&&oe&&e.texStorage2D(i.TEXTURE_2D,Lt,Rt,Gt[0].width,Gt[0].height);for(let mt=0,wt=Gt.length;mt<wt;mt++)At=Gt[mt],f.format!==Jn?yt!==null?te?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,At.width,At.height,yt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Rt,At.width,At.height,0,At.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?W&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,At.width,At.height,yt,$t,At.data):e.texImage2D(i.TEXTURE_2D,mt,Rt,At.width,At.height,0,yt,$t,At.data)}else if(f.isDataArrayTexture)if(te){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Rt,ft.width,ft.height,ft.depth),W)if(f.layerUpdates.size>0){let mt=Oh(ft.width,ft.height,f.format,f.type);for(let wt of f.layerUpdates){let Bt=ft.data.subarray(wt*mt/ft.data.BYTES_PER_ELEMENT,(wt+1)*mt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,ft.width,ft.height,1,yt,$t,Bt)}f.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,yt,$t,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,ft.width,ft.height,ft.depth,0,yt,$t,ft.data);else if(f.isData3DTexture)te?(oe&&e.texStorage3D(i.TEXTURE_3D,Lt,Rt,ft.width,ft.height,ft.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,yt,$t,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,ft.width,ft.height,ft.depth,0,yt,$t,ft.data);else if(f.isFramebufferTexture){if(oe)if(te)e.texStorage2D(i.TEXTURE_2D,Lt,Rt,ft.width,ft.height);else{let mt=ft.width,wt=ft.height;for(let Bt=0;Bt<Lt;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,Rt,mt,wt,0,yt,$t,null),mt>>=1,wt>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in i){let mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),ft.parentNode!==mt){mt.appendChild(ft),M.add(f),mt.onpaint=wt=>{let Bt=wt.changedElements;for(let Mt of M)Bt.includes(Mt.image)&&(Mt.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ft);else{let Bt=i.RGBA,Mt=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Bt,Mt,Zt,ft)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(te&&oe){let mt=De(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Lt,Rt,mt.width,mt.height)}for(let mt=0,wt=Gt.length;mt<wt;mt++)At=Gt[mt],te?W&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,yt,$t,At):e.texImage2D(i.TEXTURE_2D,mt,Rt,yt,$t,At);f.generateMipmaps=!1}else if(te){if(oe){let mt=De(ft);e.texStorage2D(i.TEXTURE_2D,Lt,Rt,mt.width,mt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,$t,ft)}else e.texImage2D(i.TEXTURE_2D,0,Rt,yt,$t,ft);m(f)&&N(j),It.__version=Pt.version,f.onUpdate&&f.onUpdate(f)}I.__version=f.version}function ne(I,f,k){if(f.image.length!==6)return;let j=Ee(I,f),rt=f.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+k);let Pt=n.get(rt);if(rt.version!==Pt.__version||j===!0){e.activeTexture(i.TEXTURE0+k);let It=Se.getPrimaries(Se.workingColorSpace),dt=f.colorSpace===Bi?null:Se.getPrimaries(f.colorSpace),ft=f.colorSpace===Bi||It===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let yt=f.isCompressedTexture||f.image[0].isCompressedTexture,$t=f.image[0]&&f.image[0].isDataTexture,Rt=[];for(let Mt=0;Mt<6;Mt++)!yt&&!$t?Rt[Mt]=v(f.image[Mt],!0,s.maxCubemapSize):Rt[Mt]=$t?f.image[Mt].image:f.image[Mt],Rt[Mt]=un(f,Rt[Mt]);let At=Rt[0],Gt=r.convert(f.format,f.colorSpace),te=r.convert(f.type),oe=E(f.internalFormat,Gt,te,f.normalized,f.colorSpace),W=f.isVideoTexture!==!0,Lt=Pt.__version===void 0||j===!0,mt=rt.dataReady,wt=P(f,At);ce(i.TEXTURE_CUBE_MAP,f);let Bt;if(yt){W&&Lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,oe,At.width,At.height);for(let Mt=0;Mt<6;Mt++){Bt=Rt[Mt].mipmaps;for(let Zt=0;Zt<Bt.length;Zt++){let Xt=Bt[Zt];f.format!==Jn?Gt!==null?W?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,0,0,Xt.width,Xt.height,Gt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,oe,Xt.width,Xt.height,0,Xt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,0,0,Xt.width,Xt.height,Gt,te,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt,oe,Xt.width,Xt.height,0,Gt,te,Xt.data)}}}else{if(Bt=f.mipmaps,W&&Lt){Bt.length>0&&wt++;let Mt=De(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,oe,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if($t){W?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Rt[Mt].width,Rt[Mt].height,Gt,te,Rt[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,oe,Rt[Mt].width,Rt[Mt].height,0,Gt,te,Rt[Mt].data);for(let Zt=0;Zt<Bt.length;Zt++){let Ve=Bt[Zt].image[Mt].image;W?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,0,0,Ve.width,Ve.height,Gt,te,Ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,oe,Ve.width,Ve.height,0,Gt,te,Ve.data)}}else{W?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Gt,te,Rt[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,oe,Gt,te,Rt[Mt]);for(let Zt=0;Zt<Bt.length;Zt++){let Xt=Bt[Zt];W?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,0,0,Gt,te,Xt.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Zt+1,oe,Gt,te,Xt.image[Mt])}}}m(f)&&N(i.TEXTURE_CUBE_MAP),Pt.__version=rt.version,f.onUpdate&&f.onUpdate(f)}I.__version=f.version}function Wt(I,f,k,j,rt,Pt){let It=r.convert(k.format,k.colorSpace),dt=r.convert(k.type),ft=E(k.internalFormat,It,dt,k.normalized,k.colorSpace),yt=n.get(f),$t=n.get(k);if($t.__renderTarget=f,!yt.__hasExternalTextures){let Rt=Math.max(1,f.width>>Pt),At=Math.max(1,f.height>>Pt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,Pt,ft,Rt,At,f.depth,0,It,dt,null):e.texImage2D(rt,Pt,ft,Rt,At,0,It,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),_e(f)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,rt,$t.__webglTexture,0,Xe(f)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,rt,$t.__webglTexture,Pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(I,f,k){if(i.bindRenderbuffer(i.RENDERBUFFER,I),f.depthBuffer){let j=f.depthTexture,rt=j&&j.isDepthTexture?j.type:null,Pt=L(f.stencilBuffer,rt),It=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(f)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(f),Pt,f.width,f.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(f),Pt,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,I)}else{let j=f.textures;for(let rt=0;rt<j.length;rt++){let Pt=j[rt],It=r.convert(Pt.format,Pt.colorSpace),dt=r.convert(Pt.type),ft=E(Pt.internalFormat,It,dt,Pt.normalized,Pt.colorSpace);_e(f)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(f),ft,f.width,f.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(f),ft,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,ft,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(I,f,k){let j=f.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(f.depthTexture);if(rt.__renderTarget=f,(!rt.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),j){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,f.depthTexture.addEventListener("dispose",F)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),ce(i.TEXTURE_CUBE_MAP,f.depthTexture);let yt=r.convert(f.depthTexture.format),$t=r.convert(f.depthTexture.type),Rt;f.depthTexture.format===_i?Rt=i.DEPTH_COMPONENT24:f.depthTexture.format===cs&&(Rt=i.DEPTH24_STENCIL8);for(let At=0;At<6;At++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Rt,f.width,f.height,0,yt,$t,null)}}else gt(f.depthTexture,0);let Pt=rt.__webglTexture,It=Xe(f),dt=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ft=f.depthTexture.format===cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(f.depthTexture.format===_i)_e(f)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,dt,Pt,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,ft,dt,Pt,0);else if(f.depthTexture.format===cs)_e(f)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,dt,Pt,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,ft,dt,Pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(I){let f=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==I.depthTexture){let j=I.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),j){let rt=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,j.removeEventListener("dispose",rt)};j.addEventListener("dispose",rt),f.__depthDisposeCallback=rt}f.__boundDepthTexture=j}if(I.depthTexture&&!f.__autoAllocateDepthBuffer)if(k)for(let j=0;j<6;j++)Ke(f.__webglFramebuffer[j],I,j);else{let j=I.texture.mipmaps;j&&j.length>0?Ke(f.__webglFramebuffer[0],I,0):Ke(f.__webglFramebuffer,I,0)}else if(k){f.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[j]),f.__webglDepthbuffer[j]===void 0)f.__webglDepthbuffer[j]=i.createRenderbuffer(),ge(f.__webglDepthbuffer[j],I,!1);else{let rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=f.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Pt)}}else{let j=I.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),ge(f.__webglDepthbuffer,I,!1);else{let rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function be(I,f,k){let j=n.get(I);f!==void 0&&Wt(j.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&pe(I)}function ke(I){let f=I.texture,k=n.get(I),j=n.get(f);I.addEventListener("dispose",T);let rt=I.textures,Pt=I.isWebGLCubeRenderTarget===!0,It=rt.length>1;if(It||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=f.version,o.memory.textures++),Pt){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(f.mipmaps&&f.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let ft=0;ft<f.mipmaps.length;ft++)k.__webglFramebuffer[dt][ft]=i.createFramebuffer()}else k.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<f.mipmaps.length;dt++)k.__webglFramebuffer[dt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(It)for(let dt=0,ft=rt.length;dt<ft;dt++){let yt=n.get(rt[dt]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&_e(I)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<rt.length;dt++){let ft=rt[dt];k.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);let yt=r.convert(ft.format,ft.colorSpace),$t=r.convert(ft.type),Rt=E(ft.internalFormat,yt,$t,ft.normalized,ft.colorSpace,I.isXRRenderTarget===!0),At=Xe(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Rt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(k.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Pt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ce(i.TEXTURE_CUBE_MAP,f);for(let dt=0;dt<6;dt++)if(f.mipmaps&&f.mipmaps.length>0)for(let ft=0;ft<f.mipmaps.length;ft++)Wt(k.__webglFramebuffer[dt][ft],I,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,ft);else Wt(k.__webglFramebuffer[dt],I,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(f)&&N(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let dt=0,ft=rt.length;dt<ft;dt++){let yt=rt[dt],$t=n.get(yt),Rt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Rt,$t.__webglTexture),ce(Rt,yt),Wt(k.__webglFramebuffer,I,yt,i.COLOR_ATTACHMENT0+dt,Rt,0),m(yt)&&N(Rt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(dt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),ce(dt,f),f.mipmaps&&f.mipmaps.length>0)for(let ft=0;ft<f.mipmaps.length;ft++)Wt(k.__webglFramebuffer[ft],I,f,i.COLOR_ATTACHMENT0,dt,ft);else Wt(k.__webglFramebuffer,I,f,i.COLOR_ATTACHMENT0,dt,0);m(f)&&N(dt),e.unbindTexture()}I.depthBuffer&&pe(I)}function xe(I){let f=I.textures;for(let k=0,j=f.length;k<j;k++){let rt=f[k];if(m(rt)){let Pt=z(I),It=n.get(rt).__webglTexture;e.bindTexture(Pt,It),N(Pt),e.unbindTexture()}}}let We=[],Le=[];function Ce(I){if(I.samples>0){if(_e(I)===!1){let f=I.textures,k=I.width,j=I.height,rt=i.COLOR_BUFFER_BIT,Pt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(I),dt=f.length>1;if(dt)for(let yt=0;yt<f.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let ft=I.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let yt=0;yt<f.length;yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[yt]);let $t=n.get(f[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,rt,i.NEAREST),h===!0&&(We.length=0,Le.length=0,We.push(i.COLOR_ATTACHMENT0+yt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(We.push(Pt),Le.push(Pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let yt=0;yt<f.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,It.__webglColorRenderbuffer[yt]);let $t=n.get(f[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&h){let f=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function Xe(I){return Math.min(s.maxSamples,I.samples)}function _e(I){let f=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function G(I){let f=o.render.frame;g.get(I)!==f&&(g.set(I,f),I.update())}function un(I,f){let k=I.colorSpace,j=I.format,rt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==ia&&k!==Bi&&(Se.getTransfer(k)===Ue?(j!==Jn||rt!==Nn)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",k)),f}function De(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=lt,this.resetTextureUnits=nt,this.getTextureUnits=X,this.setTextureUnits=Y,this.setTexture2D=gt,this.setTexture2DArray=tt,this.setTexture3D=ot,this.setTextureCube=ct,this.rebindTextures=be,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Wt,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Dx(i,t){function e(n,s=Bi){let r,o=Se.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return i.BYTE;if(n===Ah)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ph)return i.RGB;if(n===Jn)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===Tr)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===Ra||n===Pa||n===Ia||n===La)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===bl||n===Tl||n===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===El||n===Cl||n===Rl||n===Pl||n===Da||n===Il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===El)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rl)return r.COMPRESSED_R11_EAC;if(n===Pl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Da)return r.COMPRESSED_RG11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ll)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ql||n===Yl||n===Jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ql)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Kl||n===Na||n===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
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

}`,$h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ga(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Cn({vertexShader:Nx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sn(new _a(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jh=class extends xi{constructor(t,e){super();let n=this,s=null,r=1,o=null,c="local-floor",h=1,u=null,g=null,M=null,p=null,y=null,w=null,C=typeof XRWebGLBinding<"u",v=new $h,m={},N=e.getContextAttributes(),z=null,E=null,L=[],P=[],F=new Ae,T=null,D=null,V=new yn;V.viewport=new Je;let q=new yn;q.viewport=new Je;let K=[V,q],nt=new ul,X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ht){let _t=L[ht];return _t===void 0&&(_t=new gr,L[ht]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(ht){let _t=L[ht];return _t===void 0&&(_t=new gr,L[ht]=_t),_t.getGripSpace()},this.getHand=function(ht){let _t=L[ht];return _t===void 0&&(_t=new gr,L[ht]=_t),_t.getHandSpace()};function lt(ht){let _t=P.indexOf(ht.inputSource);if(_t===-1)return;let Ht=L[_t];Ht!==void 0&&(Ht.update(ht.inputSource,ht.frame,u||o),Ht.dispatchEvent({type:ht.type,data:ht.inputSource}))}function st(){s.removeEventListener("select",lt),s.removeEventListener("selectstart",lt),s.removeEventListener("selectend",lt),s.removeEventListener("squeeze",lt),s.removeEventListener("squeezestart",lt),s.removeEventListener("squeezeend",lt),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",gt);for(let ht=0;ht<L.length;ht++){let _t=P[ht];_t!==null&&(P[ht]=null,L[ht].disconnect(_t))}X=null,Y=null,v.reset();for(let ht in m)delete m[ht];if(t.setRenderTarget(z),y=null,p=null,M=null,s=null,E=null,Ee.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),D!==null){let ht=D.camera;ht.fov=D.fov,ht.zoom=D.zoom,ht.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ht){r=ht,n.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ht){c=ht,n.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ht){u=ht},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return M===null&&C&&(M=new XRWebGLBinding(s,e)),M},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(ht){if(s=ht,s!==null){if(z=t.getRenderTarget(),s.addEventListener("select",lt),s.addEventListener("selectstart",lt),s.addEventListener("selectend",lt),s.addEventListener("squeeze",lt),s.addEventListener("squeezestart",lt),s.addEventListener("squeezeend",lt),s.addEventListener("end",st),s.addEventListener("inputsourceschange",gt),N.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ht=null,ne=null,Wt=null;N.depth&&(Wt=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ht=N.stencil?cs:_i,ne=N.stencil?br:ri);let ge={colorFormat:e.RGBA8,depthFormat:Wt,scaleFactor:r};M=this.getBinding(),p=M.createProjectionLayer(ge),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),E=new Dn(p.textureWidth,p.textureHeight,{format:Jn,type:Nn,depthTexture:new ns(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Ht),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Ht={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:r};y=new XRWebGLLayer(s,e,Ht),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),E=new Dn(y.framebufferWidth,y.framebufferHeight,{format:Jn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await s.requestReferenceSpace(c),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function gt(ht){for(let _t=0;_t<ht.removed.length;_t++){let Ht=ht.removed[_t],ne=P.indexOf(Ht);ne>=0&&(P[ne]=null,L[ne].disconnect(Ht))}for(let _t=0;_t<ht.added.length;_t++){let Ht=ht.added[_t],ne=P.indexOf(Ht);if(ne===-1){for(let ge=0;ge<L.length;ge++)if(ge>=P.length){P.push(Ht),ne=ge;break}else if(P[ge]===null){P[ge]=Ht,ne=ge;break}if(ne===-1)break}let Wt=L[ne];Wt&&Wt.connect(Ht)}}let tt=new Q,ot=new Q;function ct(ht,_t,Ht){tt.setFromMatrixPosition(_t.matrixWorld),ot.setFromMatrixPosition(Ht.matrixWorld);let ne=tt.distanceTo(ot),Wt=_t.projectionMatrix.elements,ge=Ht.projectionMatrix.elements,Ke=Wt[14]/(Wt[10]-1),pe=Wt[14]/(Wt[10]+1),be=(Wt[9]+1)/Wt[5],ke=(Wt[9]-1)/Wt[5],xe=(Wt[8]-1)/Wt[0],We=(ge[8]+1)/ge[0],Le=Ke*xe,Ce=Ke*We,Xe=ne/(-xe+We),_e=Xe*-xe;if(_t.matrixWorld.decompose(ht.position,ht.quaternion,ht.scale),ht.translateX(_e),ht.translateZ(Xe),ht.matrixWorld.compose(ht.position,ht.quaternion,ht.scale),ht.matrixWorldInverse.copy(ht.matrixWorld).invert(),Wt[10]===-1)ht.projectionMatrix.copy(_t.projectionMatrix),ht.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{let G=Ke+Xe,un=pe+Xe,De=Le-_e,I=Ce+(ne-_e),f=be*pe/un*G,k=ke*pe/un*G;ht.projectionMatrix.makePerspective(De,I,f,k,G,un),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert()}}function kt(ht,_t){_t===null?ht.matrixWorld.copy(ht.matrix):ht.matrixWorld.multiplyMatrices(_t.matrixWorld,ht.matrix),ht.matrixWorldInverse.copy(ht.matrixWorld).invert()}this.updateCamera=function(ht){if(s===null)return;let _t=ht.near,Ht=ht.far;v.texture!==null&&(v.depthNear>0&&(_t=v.depthNear),v.depthFar>0&&(Ht=v.depthFar)),nt.near=q.near=V.near=_t,nt.far=q.far=V.far=Ht,(X!==nt.near||Y!==nt.far)&&(s.updateRenderState({depthNear:nt.near,depthFar:nt.far}),X=nt.near,Y=nt.far),nt.layers.mask=ht.layers.mask|6,V.layers.mask=nt.layers.mask&-5,q.layers.mask=nt.layers.mask&-3;let ne=ht.parent,Wt=nt.cameras;kt(nt,ne);for(let ge=0;ge<Wt.length;ge++)kt(Wt[ge],ne);Wt.length===2?ct(nt,V,q):nt.projectionMatrix.copy(V.projectionMatrix),D===null&&ht.isPerspectiveCamera&&(D={camera:ht,fov:ht.fov,zoom:ht.zoom}),Jt(ht,nt,ne)};function Jt(ht,_t,Ht){Ht===null?ht.matrix.copy(_t.matrixWorld):(ht.matrix.copy(Ht.matrixWorld),ht.matrix.invert(),ht.matrix.multiply(_t.matrixWorld)),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.updateMatrixWorld(!0),ht.projectionMatrix.copy(_t.projectionMatrix),ht.projectionMatrixInverse.copy(_t.projectionMatrixInverse),ht.isPerspectiveCamera&&(ht.fov=Wo*2*Math.atan(1/ht.projectionMatrix.elements[5]),ht.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(p===null&&y===null))return h},this.setFoveation=function(ht){h=ht,p!==null&&(p.fixedFoveation=ht),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ht)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(nt)},this.getCameraTexture=function(ht){return m[ht]};let Fe=null;function ce(ht,_t){if(g=_t.getViewerPose(u||o),w=_t,g!==null){let Ht=g.views;y!==null&&(t.setRenderTargetFramebuffer(E,y.framebuffer),t.setRenderTarget(E));let ne=!1;Ht.length!==nt.cameras.length&&(nt.cameras.length=0,ne=!0);for(let pe=0;pe<Ht.length;pe++){let be=Ht[pe],ke=null;if(y!==null)ke=y.getViewport(be);else{let We=M.getViewSubImage(p,be);ke=We.viewport,pe===0&&(t.setRenderTargetTextures(E,We.colorTexture,We.depthStencilTexture),t.setRenderTarget(E))}let xe=K[pe];xe===void 0&&(xe=new yn,xe.layers.enable(pe),xe.viewport=new Je,K[pe]=xe),xe.matrix.fromArray(be.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(be.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(ke.x,ke.y,ke.width,ke.height),pe===0&&(nt.matrix.copy(xe.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),ne===!0&&nt.cameras.push(xe)}let Wt=s.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&C){M=n.getBinding();let pe=M.getDepthInformation(Ht[0]);pe&&pe.isValid&&pe.texture&&v.init(pe,s.renderState)}if(Wt&&Wt.includes("camera-access")&&C){t.state.unbindTexture(),M=n.getBinding();for(let pe=0;pe<Ht.length;pe++){let be=Ht[pe].camera;if(be){let ke=m[be];ke||(ke=new ga,m[be]=ke);let xe=M.getCameraImage(be);ke.sourceTexture=xe}}}}for(let Ht=0;Ht<L.length;Ht++){let ne=P[Ht],Wt=L[Ht];ne!==null&&Wt!==void 0&&Wt.update(ne,_t,u||o)}Fe&&Fe(ht,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),w=null}let Ee=new ff;Ee.setAnimationLoop(ce),this.setAnimationLoop=function(ht){Fe=ht},this.dispose=function(){}}},Fx=new He,vf=new le;vf.set(-1,0,0,0,1,0,0,0,1);function Ox(i,t){function e(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,Nh(i)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function s(v,m,N,z,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(v,m):m.isMeshLambertMaterial?(r(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(v,m),M(v,m)):m.isMeshPhongMaterial?(r(v,m),g(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(v,m),p(v,m),m.isMeshPhysicalMaterial&&y(v,m,E)):m.isMeshMatcapMaterial?(r(v,m),w(v,m)):m.isMeshDepthMaterial?r(v,m):m.isMeshDistanceMaterial?(r(v,m),C(v,m)):m.isMeshNormalMaterial?r(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&c(v,m)):m.isPointsMaterial?h(v,m,N,z):m.isSpriteMaterial?u(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,e(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===pn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,e(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===pn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,e(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,e(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let N=t.get(m),z=N.envMap,E=N.envMapRotation;z&&(v.envMap.value=z,v.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(E)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(vf),v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform))}function c(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function h(v,m,N,z){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*N,v.scale.value=z*.5,m.map&&(v.map.value=m.map,e(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function g(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function M(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function p(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function y(v,m,N){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.retroreflectivity>0&&(v.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=N.texture,v.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,m){m.matcap&&(v.matcap.value=m.matcap)}function C(v,m){let N=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(N.matrixWorld),v.nearDistance.value=N.shadow.camera.near,v.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bx(i,t,e,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(E,L){let P=L.program;n.uniformBlockBinding(E,P)}function u(E,L){let P=s[E.id];P===void 0&&(v(E),P=g(E),s[E.id]=P,E.addEventListener("dispose",N));let F=L.program;n.updateUBOMapping(E,F);let T=t.render.frame;r[E.id]!==T&&(p(E),r[E.id]=T)}function g(E){let L=M();E.__bindingPointIndex=L;let P=i.createBuffer(),F=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,F,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,P),P}function M(){for(let E=0;E<c;E++)if(o.indexOf(E)===-1)return o.push(E),E;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){let L=s[E.id],P=E.uniforms,F=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let T=0,D=P.length;T<D;T++){let V=P[T];if(Array.isArray(V))for(let q=0,K=V.length;q<K;q++)y(V[q],T,q,F);else y(V,T,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(E,L,P,F){if(C(E,L,P,F)===!0){let T=E.__offset,D=E.value;if(Array.isArray(D)){let V=0;for(let q=0;q<D.length;q++){let K=D[q],nt=m(K);w(K,E.__data,V),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(V+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(D,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,E.__data)}}function w(E,L,P){typeof E=="number"||typeof E=="boolean"?L[0]=E:E.isMatrix3?(L[0]=E.elements[0],L[1]=E.elements[1],L[2]=E.elements[2],L[3]=0,L[4]=E.elements[3],L[5]=E.elements[4],L[6]=E.elements[5],L[7]=0,L[8]=E.elements[6],L[9]=E.elements[7],L[10]=E.elements[8],L[11]=0):ArrayBuffer.isView(E)?L.set(new E.constructor(E.buffer,E.byteOffset,L.length)):E.toArray(L,P)}function C(E,L,P,F){let T=E.value,D=L+"_"+P;if(F[D]===void 0)return typeof T=="number"||typeof T=="boolean"?F[D]=T:ArrayBuffer.isView(T)?F[D]=T.slice():F[D]=T.clone(),!0;{let V=F[D];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return F[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function v(E){let L=E.uniforms,P=0,F=16;for(let D=0,V=L.length;D<V;D++){let q=Array.isArray(L[D])?L[D]:[L[D]];for(let K=0,nt=q.length;K<nt;K++){let X=q[K],Y=Array.isArray(X.value)?X.value:[X.value];for(let lt=0,st=Y.length;lt<st;lt++){let gt=Y[lt],tt=m(gt),ot=P%F,ct=ot%tt.boundary,kt=ot+ct;P+=ct,kt!==0&&F-kt<tt.storage&&(P+=F-kt),X.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=P,P+=tt.storage}}}let T=P%F;return T>0&&(P+=F-T),E.__size=P,E.__cache={},this}function m(E){let L={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(L.boundary=4,L.storage=4):E.isVector2?(L.boundary=8,L.storage=8):E.isVector3||E.isColor?(L.boundary=16,L.storage=12):E.isVector4?(L.boundary=16,L.storage=16):E.isMatrix3?(L.boundary=48,L.storage=48):E.isMatrix4?(L.boundary=64,L.storage=64):E.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(L.boundary=16,L.storage=E.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",E),L}function N(E){let L=E.target;L.removeEventListener("dispose",N);let P=o.indexOf(L.__bindingPointIndex);o.splice(P,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function z(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:h,update:u,dispose:z}}var zx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function kx(){return bi===null&&(bi=new Rs(zx,16,16,hs,ai),bi.name="DFG_LUT",bi.minFilter=fn,bi.magFilter=fn,bi.wrapS=gi,bi.wrapT=gi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var rc=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:p=!1,outputBufferType:y=Nn}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=o;let C=y,v=new Set([Ml,yl,vl]),m=new Set([Nn,ri,Sr,br,_l,xl]),N=new Uint32Array(4),z=new Int32Array(4),E=new Q,L=null,P=null,F=[],T=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,q=!1,K=null,nt=null,X=null,Y=null;this._outputColorSpace=En;let lt=0,st=0,gt=null,tt=-1,ot=null,ct=new Je,kt=new Je,Jt=null,Fe=new de(0),ce=0,Ee=e.width,ht=e.height,_t=1,Ht=null,ne=null,Wt=new Je(0,0,Ee,ht),ge=new Je(0,0,Ee,ht),Ke=!1,pe=new _r,be=!1,ke=!1,xe=new He,We=new Q,Le=new Je,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function _e(){return gt===null?_t:1}let G=n;function un(b,H){return e.getContext(b,H)}let De,I,f,k,j,rt,Pt,It,dt,ft,yt,$t,Rt,At,Gt,te,oe,W,Lt,mt,wt,Bt,Mt;try{let b={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:g,failIfMajorPerformanceCaveat:M};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ve,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Un,!1),G===null){let H="webgl2";if(G=un(H,b),G===null)throw un(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(b){throw e.removeEventListener("webglcontextlost",Ve,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),re("WebGLRenderer: "+b.message),b}function Zt(){De=new Yg(G),De.init(),wt=new Dx(G,De),I=new Og(G,De,t,wt),f=new Ix(G,De),I.reversedDepthBuffer&&p&&f.buffers.depth.setReversed(!0),nt=G.createFramebuffer(),X=G.createFramebuffer(),Y=G.createFramebuffer(),k=new Kg(G),j=new _x,rt=new Lx(G,De,f,j,I,wt,k),Pt=new qg(V),It=new jp(G),Bt=new Ug(G,It),dt=new Jg(G,It,k,Bt),ft=new jg(G,dt,It,Bt,k),W=new $g(G,I,rt),Gt=new Bg(j),yt=new gx(V,Pt,De,I,Bt,Gt),$t=new Ox(V,j),Rt=new vx,At=new wx(De),oe=new Ng(V,Pt,f,ft,w,h),te=new Px(V,ft,I),Mt=new Bx(G,k,I,f),Lt=new Fg(G,De,k),mt=new Zg(G,De,k),k.programs=yt.programs,V.capabilities=I,V.extensions=De,V.properties=j,V.renderLists=Rt,V.shadowMap=te,V.state=f,V.info=k}C!==Nn&&(D=new t_(C,e.width,e.height,c,s,r));let Xt=new jh(V,G);this.xr=Xt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let b=De.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=De.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(b){b!==void 0&&(_t=b,this.setSize(Ee,ht,!1))},this.getSize=function(b){return b.set(Ee,ht)},this.setSize=function(b,H,it=!0){if(Xt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=b,ht=H,e.width=Math.floor(b*_t),e.height=Math.floor(H*_t),it===!0&&(e.style.width=b+"px",e.style.height=H+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(Ee*_t,ht*_t).floor()},this.setDrawingBufferSize=function(b,H,it){Ee=b,ht=H,_t=it,e.width=Math.floor(b*it),e.height=Math.floor(H*it),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(C===Nn){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ct)},this.getViewport=function(b){return b.copy(Wt)},this.setViewport=function(b,H,it,$){b.isVector4?Wt.set(b.x,b.y,b.z,b.w):Wt.set(b,H,it,$),f.viewport(ct.copy(Wt).multiplyScalar(_t).round())},this.getScissor=function(b){return b.copy(ge)},this.setScissor=function(b,H,it,$){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,H,it,$),f.scissor(kt.copy(ge).multiplyScalar(_t).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(b){f.setScissorTest(Ke=b)},this.setOpaqueSort=function(b){Ht=b},this.setTransparentSort=function(b){ne=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,it=!0){let $=0;if(b){let Z=!1;if(gt!==null){let Et=gt.texture.format;Z=v.has(Et)}if(Z){let Et=gt.texture.type,Ft=m.has(Et),Nt=oe.getClearColor(),qt=oe.getClearAlpha(),Kt=Nt.r,ae=Nt.g,he=Nt.b;Ft?(N[0]=Kt,N[1]=ae,N[2]=he,N[3]=qt,G.clearBufferuiv(G.COLOR,0,N)):(z[0]=Kt,z[1]=ae,z[2]=he,z[3]=qt,G.clearBufferiv(G.COLOR,0,z))}else $|=G.COLOR_BUFFER_BIT}H&&($|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),K=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ve,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),oe.dispose(),Rt.dispose(),At.dispose(),j.dispose(),Pt.dispose(),ft.dispose(),Bt.dispose(),Mt.dispose(),yt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",oi),Xt.removeEventListener("sessionend",Us),li.stop()};function Ve(b){b.preventDefault(),Dh("WebGLRenderer: Context Lost."),q=!0}function Te(){Dh("WebGLRenderer: Context Restored."),q=!1;let b=k.autoReset,H=te.enabled,it=te.autoUpdate,$=te.needsUpdate,Z=te.type;Zt(),k.autoReset=b,te.enabled=H,te.autoUpdate=it,te.needsUpdate=$,te.type=Z}function Un(b){re("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Rn(b){let H=b.target;H.removeEventListener("dispose",Rn),lc(H)}function lc(b){Ns(b),j.remove(b)}function Ns(b){let H=j.get(b).programs;H!==void 0&&(H.forEach(function(it){yt.releaseProgram(it)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,it,$,Z,Et){H===null&&(H=Ce);let Ft=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Nt=mn(b,H,it,$,Z);f.setMaterial($,Ft);let qt=it.index,Kt=1;if($.wireframe===!0){if(qt=dt.getWireframeAttribute(it),qt===void 0)return;Kt=2}let ae=it.drawRange,he=it.attributes.position,Yt=ae.start*Kt,fe=(ae.start+ae.count)*Kt;Et!==null&&(Yt=Math.max(Yt,Et.start*Kt),fe=Math.min(fe,(Et.start+Et.count)*Kt)),qt!==null?(Yt=Math.max(Yt,0),fe=Math.min(fe,qt.count)):he!=null&&(Yt=Math.max(Yt,0),fe=Math.min(fe,he.count));let qe=fe-Yt;if(qe<0||qe===1/0)return;Bt.setup(Z,$,Nt,it,qt);let Oe,Be=Lt;if(qt!==null&&(Oe=It.get(qt),Be=mt,Be.setIndex(Oe)),Z.isMesh)$.wireframe===!0?(f.setLineWidth($.wireframeLinewidth*_e()),Be.setMode(G.LINES)):Be.setMode(G.TRIANGLES);else if(Z.isLine){let nn=$.linewidth;nn===void 0&&(nn=1),f.setLineWidth(nn*_e()),Z.isLineSegments?Be.setMode(G.LINES):Z.isLineLoop?Be.setMode(G.LINE_LOOP):Be.setMode(G.LINE_STRIP)}else Z.isPoints?Be.setMode(G.POINTS):Z.isSprite&&Be.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(De.get("WEBGL_multi_draw"))Be.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let nn=Z._multiDrawStarts,Vt=Z._multiDrawCounts,dn=Z._multiDrawCount,ve=qt?It.get(qt).bytesPerElement:1,Tn=j.get($).currentProgram.getUniforms();for(let gn=0;gn<dn;gn++)Tn.setValue(G,"_gl_DrawID",gn),Be.render(nn[gn]/ve,Vt[gn])}else if(Z.isInstancedMesh)Be.renderInstances(Yt,qe,Z.count);else if(it.isInstancedBufferGeometry){let nn=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Vt=Math.min(it.instanceCount,nn);Be.renderInstances(Yt,qe,Vt)}else Be.render(Yt,qe)};function za(b,H,it,$){K!==null&&b.isNodeMaterial&&K.setObject($,b),be===!0&&Gt.setState(b,it,!1),b.transparent===!0&&b.side===Mi&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,jt(b,H,$),b.side=as,b.needsUpdate=!0,jt(b,H,$),b.side=Mi):jt(b,H,$)}this.compile=function(b,H,it=null){it===null&&(it=b),K!==null&&K.renderStart(b,H,it),P=At.get(it),P.init(H),T.push(P),it.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(P.pushLight(Z),Z.castShadow&&P.pushShadow(Z))}),b!==it&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(P.pushLight(Z),Z.castShadow&&P.pushShadow(Z))}),P.setupLights(),K!==null&&K.updateLights(P.state.lightsArray),ke=this.localClippingEnabled,be=Gt.init(this.clippingPlanes,ke),be===!0&&Gt.setGlobalState(this.clippingPlanes,H),K!==null&&te.render(P.state.shadowsArray,it,H);let $=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Et=Z.material;if(Et)if(Array.isArray(Et))for(let Ft=0;Ft<Et.length;Ft++){let Nt=Et[Ft];za(Nt,it,H,Z),$.add(Nt)}else za(Et,it,H,Z),$.add(Et)}),P=T.pop(),K!==null&&K.renderEnd(),$},this.compileAsync=function(b,H,it=null){let $=this.compile(b,H,it);return new Promise(Z=>{function Et(){if($.forEach(function(Ft){let qt=j.get(Ft).currentProgram;(qt===void 0||qt.isReady())&&$.delete(Ft)}),$.size===0){Z(b);return}setTimeout(Et,10)}De.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let us=null;function Rr(b){us&&us(b)}function oi(){li.stop()}function Us(){li.start()}let li=new ff;li.setAnimationLoop(Rr),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(b){us=b,Xt.setAnimationLoop(b),b===null?li.stop():li.start()},Xt.addEventListener("sessionstart",oi),Xt.addEventListener("sessionend",Us),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;K!==null&&K.renderStart(b,H);let it=Xt.enabled===!0&&Xt.isPresenting===!0,$=D!==null&&(gt===null||it)&&D.begin(V,gt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(H),H=Xt.getCamera()),b.isScene===!0&&b.onBeforeRender(V,b,H,gt),P=At.get(b,T.length),P.init(H),P.state.textureUnits=rt.getTextureUnits(),T.push(P),xe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),pe.setFromProjectionMatrix(xe,ii,H.reversedDepth),ke=this.localClippingEnabled,be=Gt.init(this.clippingPlanes,ke),L=Rt.get(b,F.length),L.init(),F.push(L),Xt.enabled===!0&&Xt.isPresenting===!0){let Ft=V.xr.getDepthSensingMesh();Ft!==null&&Fs(Ft,H,-1/0,V.sortObjects)}Fs(b,H,0,V.sortObjects),L.finish(),K!==null&&K.updateLights(P.state.lightsArray),V.sortObjects===!0&&L.sort(Ht,ne),Xe=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,Xe&&oe.addToRenderList(L,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),be===!0&&Gt.beginShadows();let Z=P.state.shadowsArray;if(te.render(Z,b,H),be===!0&&Gt.endShadows(),($&&D.hasRenderPass())===!1){let Ft=L.opaque,Nt=L.transmissive;if(P.setupLights(),H.isArrayCamera){let qt=H.cameras;if(Nt.length>0)for(let Kt=0,ae=qt.length;Kt<ae;Kt++){let he=qt[Kt];Va(Ft,Nt,b,he)}Xe&&oe.render(b);for(let Kt=0,ae=qt.length;Kt<ae;Kt++){let he=qt[Kt];ka(L,b,he,he.viewport)}}else Nt.length>0&&Va(Ft,Nt,b,H),Xe&&oe.render(b),ka(L,b,H)}gt!==null&&st===0&&(rt.updateMultisampleRenderTarget(gt),rt.updateRenderTargetMipmap(gt)),$&&D.end(V),b.isScene===!0&&b.onAfterRender(V,b,H),Bt.resetDefaultState(),tt=-1,ot=null,T.pop(),T.length>0?(P=T[T.length-1],rt.setTextureUnits(P.state.textureUnits),be===!0&&Gt.setGlobalState(V.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,K!==null&&K.renderEnd()};function Fs(b,H,it,$){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)it=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLightProbeGrid)P.pushLightProbeGrid(b);else if(b.isLight)P.pushLight(b),b.castShadow&&P.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(pe)){$&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xe);let Ft=ft.update(b),Nt=b.material;Nt.visible&&L.push(b,Ft,Nt,it,Le.z,null,H)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(pe))){let Ft=ft.update(b),Nt=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Le.copy(Ft.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(xe)),Array.isArray(Nt)){let qt=Ft.groups;for(let Kt=0,ae=qt.length;Kt<ae;Kt++){let he=qt[Kt],Yt=Nt[he.materialIndex];Yt&&Yt.visible&&L.push(b,Ft,Yt,it,Le.z,he,H)}}else Nt.visible&&L.push(b,Ft,Nt,it,Le.z,null,H)}}let Et=b.children;for(let Ft=0,Nt=Et.length;Ft<Nt;Ft++)Fs(Et[Ft],H,it,$)}function ka(b,H,it,$){let{opaque:Z,transmissive:Et,transparent:Ft}=b;P.setupLightsView(it),be===!0&&Gt.setGlobalState(V.clippingPlanes,it),$&&f.viewport(ct.copy($)),Z.length>0&&wi(Z,H,it),Et.length>0&&wi(Et,H,it),Ft.length>0&&wi(Ft,H,it),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function Va(b,H,it,$){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[$.id]===void 0){let Yt=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[$.id]=new Dn(1,1,{generateMipmaps:!0,type:Yt?ai:Nn,minFilter:ls,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Se.workingColorSpace})}let Et=P.state.transmissionRenderTarget[$.id],Ft=$.viewport||ct;Et.setSize(Ft.z*V.transmissionResolutionScale,Ft.w*V.transmissionResolutionScale);let Nt=V.getRenderTarget(),qt=V.getActiveCubeFace(),Kt=V.getActiveMipmapLevel();V.setRenderTarget(Et),V.getClearColor(Fe),ce=V.getClearAlpha(),ce<1&&V.setClearColor(16777215,.5),V.clear(),Xe&&oe.render(it);let ae=V.toneMapping;V.toneMapping=si;let he=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),P.setupLightsView($),be===!0&&Gt.setGlobalState(V.clippingPlanes,$),wi(b,it,$),rt.updateMultisampleRenderTarget(Et),rt.updateRenderTargetMipmap(Et),De.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let fe=0,qe=H.length;fe<qe;fe++){let Oe=H[fe],{object:Be,geometry:nn,material:Vt,group:dn}=Oe;if(Vt.side===Mi&&Be.layers.test($.layers)){let ve=Vt.side;Vt.side=pn,Vt.needsUpdate=!0,Ga(Be,it,$,nn,Vt,dn),Vt.side=ve,Vt.needsUpdate=!0,Yt=!0}}Yt===!0&&(rt.updateMultisampleRenderTarget(Et),rt.updateRenderTargetMipmap(Et))}V.setRenderTarget(Nt,qt,Kt),V.setClearColor(Fe,ce),he!==void 0&&($.viewport=he),V.toneMapping=ae}function wi(b,H,it){let $=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Et=b.length;Z<Et;Z++){let Ft=b[Z],{object:Nt,geometry:qt,group:Kt}=Ft,ae=Ft.material;ae.allowOverride===!0&&$!==null&&(ae=$),Nt.layers.test(it.layers)&&Ga(Nt,H,it,qt,ae,Kt)}}function Ga(b,H,it,$,Z,Et){K!==null&&Z.isNodeMaterial&&K.setObject(b,Z),b.onBeforeRender(V,H,it,$,Z,Et),b.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(V,H,it,$,b,Et),Z.transparent===!0&&Z.side===Mi&&Z.forceSinglePass===!1?(Z.side=pn,Z.needsUpdate=!0,V.renderBufferDirect(it,H,$,Z,b,Et),Z.side=as,Z.needsUpdate=!0,V.renderBufferDirect(it,H,$,Z,b,Et),Z.side=Mi):V.renderBufferDirect(it,H,$,Z,b,Et),b.onAfterRender(V,H,it,$,Z,Et)}function jt(b,H,it){H.isScene!==!0&&(H=Ce);let $=j.get(b),Z=P.state.lights,Et=P.state.shadowsArray,Ft=Z.state.version,Nt=yt.getParameters(b,Z.state,Et,H,it,P.state.lightProbeGridArray),qt=yt.getProgramCacheKey(Nt),Kt=$.programs;$.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,$.fog=H.fog;let ae=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;$.envMap=Pt.get(b.envMap||$.environment,ae),$.envMapRotation=$.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Kt===void 0&&(b.addEventListener("dispose",Rn),Kt=new Map,$.programs=Kt);let he=Kt.get(qt);if(he!==void 0){if($.currentProgram===he&&$.lightsStateVersion===Ft)return Pr(b,Nt),he}else Nt.uniforms=yt.getUniforms(b),K!==null&&b.isNodeMaterial&&K.build(b,it,Nt),b.onBeforeCompile(Nt,V),he=yt.acquireProgram(Nt,qt),Kt.set(qt,he),$.uniforms=Nt.uniforms;let Yt=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Yt.clippingPlanes=Gt.uniform),Pr(b,Nt),$.needsLights=Ir(b),$.lightsStateVersion=Ft,$.needsLights&&(Yt.ambientLightColor.value=Z.state.ambient,Yt.lightProbe.value=Z.state.probe,Yt.sunLights.value=Z.state.sun,Yt.sunLightShadows.value=Z.state.sunShadow,Yt.directionalLights.value=Z.state.directional,Yt.directionalLightShadows.value=Z.state.directionalShadow,Yt.spotLights.value=Z.state.spot,Yt.spotLightShadows.value=Z.state.spotShadow,Yt.rectAreaLights.value=Z.state.rectArea,Yt.ltc_1.value=Z.state.rectAreaLTC1,Yt.ltc_2.value=Z.state.rectAreaLTC2,Yt.pointLights.value=Z.state.point,Yt.pointLightShadows.value=Z.state.pointShadow,Yt.hemisphereLights.value=Z.state.hemi,Yt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Yt.sunShadowCascade.value=Z.state.sunShadowCascade,Yt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Yt.spotLightMatrix.value=Z.state.spotLightMatrix,Yt.spotLightMap.value=Z.state.spotLightMap,Yt.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.lightProbeGrid=P.state.lightProbeGridArray.length>0,$.currentProgram=he,$.uniformsList=null,he}function Qe(b){if(b.uniformsList===null){let H=b.currentProgram.getUniforms();b.uniformsList=Er.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Pr(b,H){let it=j.get(b);it.outputColorSpace=H.outputColorSpace,it.batching=H.batching,it.batchingColor=H.batchingColor,it.instancing=H.instancing,it.instancingColor=H.instancingColor,it.instancingMorph=H.instancingMorph,it.skinning=H.skinning,it.morphTargets=H.morphTargets,it.morphNormals=H.morphNormals,it.morphColors=H.morphColors,it.morphTargetsCount=H.morphTargetsCount,it.numClippingPlanes=H.numClippingPlanes,it.numIntersection=H.numClipIntersection,it.vertexAlphas=H.vertexAlphas,it.vertexTangents=H.vertexTangents,it.toneMapping=H.toneMapping}function Zn(b,H){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;E.setFromMatrixPosition(H.matrixWorld);for(let it=0,$=b.length;it<$;it++){let Z=b[it];if(Z.texture!==null&&Z.boundingBox.containsPoint(E))return Z}return null}function mn(b,H,it,$,Z){H.isScene!==!0&&(H=Ce),rt.resetTextureUnits();let Et=H.fog,Ft=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?H.environment:null,Nt=gt===null?V.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Se.workingColorSpace,qt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Kt=Pt.get($.envMap||Ft,qt),ae=$.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,he=!!it.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Yt=!!it.morphAttributes.position,fe=!!it.morphAttributes.normal,qe=!!it.morphAttributes.color,Oe=si;$.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Oe=V.toneMapping);let Be=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,nn=Be!==void 0?Be.length:0,Vt=j.get($),dn=P.state.lights;if(be===!0&&(ke===!0||b!==ot)){let Ge=b===ot&&$.id===tt;Gt.setState($,b,Ge)}let ve=!1;$.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==dn.state.version||Vt.outputColorSpace!==Nt||Z.isBatchedMesh&&Vt.batching===!1||!Z.isBatchedMesh&&Vt.batching===!0||Z.isBatchedMesh&&Vt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Vt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Vt.instancing===!1||!Z.isInstancedMesh&&Vt.instancing===!0||Z.isSkinnedMesh&&Vt.skinning===!1||!Z.isSkinnedMesh&&Vt.skinning===!0||Z.isInstancedMesh&&Vt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Vt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Vt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Vt.instancingMorph===!1&&Z.morphTexture!==null||Vt.envMap!==Kt||$.fog===!0&&Vt.fog!==Et||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Gt.numPlanes||Vt.numIntersection!==Gt.numIntersection)||Vt.vertexAlphas!==ae||Vt.vertexTangents!==he||Vt.morphTargets!==Yt||Vt.morphNormals!==fe||Vt.morphColors!==qe||Vt.toneMapping!==Oe||Vt.morphTargetsCount!==nn||!!Vt.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,Vt.__version=$.version);let Tn=Vt.currentProgram;ve===!0&&(Tn=jt($,H,Z),K&&$.isNodeMaterial&&K.onUpdateProgram($,Tn,Vt));let gn=!1,ci=!1,zi=!1,Ne=Tn.getUniforms(),Ze=Vt.uniforms;if(f.useProgram(Tn.program)&&(gn=!0,ci=!0,zi=!0),$.id!==tt&&(tt=$.id,ci=!0),Vt.needsLights){let Ge=Zn(P.state.lightProbeGridArray,Z);Vt.lightProbeGrid!==Ge&&(Vt.lightProbeGrid=Ge,ci=!0)}if(gn||ot!==b){f.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ne.setValue(G,"projectionMatrix",b.projectionMatrix),Ne.setValue(G,"viewMatrix",b.matrixWorldInverse);let ui=Ne.map.cameraPosition;ui!==void 0&&ui.setValue(G,We.setFromMatrixPosition(b.matrixWorld)),I.logarithmicDepthBuffer&&Ne.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ne.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),ot!==b&&(ot=b,ci=!0,zi=!0)}if(Vt.needsLights&&(dn.state.sunShadowMap.length>0&&Ne.setValue(G,"sunShadowMap",dn.state.sunShadowMap,rt),dn.state.directionalShadowMap.length>0&&Ne.setValue(G,"directionalShadowMap",dn.state.directionalShadowMap,rt),dn.state.spotShadowMap.length>0&&Ne.setValue(G,"spotShadowMap",dn.state.spotShadowMap,rt),dn.state.pointShadowMap.length>0&&Ne.setValue(G,"pointShadowMap",dn.state.pointShadowMap,rt)),Z.isSkinnedMesh){Ne.setOptional(G,Z,"bindMatrix"),Ne.setOptional(G,Z,"bindMatrixInverse");let Ge=Z.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Ne.setValue(G,"boneTexture",Ge.boneTexture,rt))}Z.isBatchedMesh&&(Ne.setOptional(G,Z,"batchingTexture"),Ne.setValue(G,"batchingTexture",Z._matricesTexture,rt),Ne.setOptional(G,Z,"batchingIdTexture"),Ne.setValue(G,"batchingIdTexture",Z._indirectTexture,rt),Ne.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ne.setValue(G,"batchingColorTexture",Z._colorsTexture,rt));let hi=it.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&W.update(Z,it,Tn),(ci||Vt.receiveShadow!==Z.receiveShadow)&&(Vt.receiveShadow=Z.receiveShadow,Ne.setValue(G,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&H.environment!==null&&(Ze.envMapIntensity.value=H.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=kx()),ci){if(Ne.setValue(G,"toneMappingExposure",V.toneMappingExposure),Vt.needsLights&&Pe(Ze,zi),Et&&$.fog===!0&&$t.refreshFogUniforms(Ze,Et),$t.refreshMaterialUniforms(Ze,$,_t,ht,P.state.transmissionRenderTarget[b.id]),Vt.needsLights&&Vt.lightProbeGrid){let Ge=Vt.lightProbeGrid;Ze.probesSH.value=Ge.texture,Ze.probesMin.value.copy(Ge.boundingBox.min),Ze.probesMax.value.copy(Ge.boundingBox.max),Ze.probesResolution.value.copy(Ge.resolution)}Er.upload(G,Qe(Vt),Ze,rt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Er.upload(G,Qe(Vt),Ze,rt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ne.setValue(G,"center",Z.center),Ne.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ne.setValue(G,"normalMatrix",Z.normalMatrix),Ne.setValue(G,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){let Ge=$.uniformsGroups;for(let ui=0,ki=Ge.length;ui<ki;ui++){let Ha=Ge[ui];Mt.update(Ha,Tn),Mt.bind(Ha,Tn)}}return Tn}function Pe(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.sunLights.needsUpdate=H,b.sunLightShadows.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Ir(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return gt},this.setRenderTargetTextures=function(b,H,it){let $=j.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),j.get(b.texture).__webglTexture=H,j.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:it,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){let it=j.get(b);it.__webglFramebuffer=H,it.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,it=0){gt=b,lt=H,st=it;let $=null,Z=!1,Et=!1;if(b){let Nt=j.get(b);if(Nt.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(G.FRAMEBUFFER,Nt.__webglFramebuffer),ct.copy(b.viewport),kt.copy(b.scissor),Jt=b.scissorTest,f.viewport(ct),f.scissor(kt),f.setScissorTest(Jt),tt=-1;return}else if(Nt.__webglFramebuffer===void 0)rt.setupRenderTarget(b);else if(Nt.__hasExternalTextures)rt.rebindTextures(b,j.get(b.texture).__webglTexture,j.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ae=b.depthTexture;if(Nt.__boundDepthTexture!==ae){if(ae!==null&&j.has(ae)&&(b.width!==ae.image.width||b.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(b)}}let qt=b.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Et=!0);let Kt=j.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[H])?$=Kt[H][it]:$=Kt[H],Z=!0):b.samples>0&&rt.useMultisampledRTT(b)===!1?$=j.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?$=Kt[it]:$=Kt,ct.copy(b.viewport),kt.copy(b.scissor),Jt=b.scissorTest}else ct.copy(Wt).multiplyScalar(_t).floor(),kt.copy(ge).multiplyScalar(_t).floor(),Jt=Ke;if(it!==0&&($=nt),f.bindFramebuffer(G.FRAMEBUFFER,$)&&f.drawBuffers(b,$),f.viewport(ct),f.scissor(kt),f.setScissorTest(Jt),Z){let Nt=j.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Nt.__webglTexture,it)}else if(Et){let Nt=H;for(let qt=0;qt<b.textures.length;qt++){let Kt=j.get(b.textures[qt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+qt,Kt.__webglTexture,it,Nt)}}else if(b!==null&&it!==0){let Nt=j.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Nt.__webglTexture,it)}tt=-1};function $e(b){let H=j.get(b);return(H.__readFormat!==b.format||H.__readType!==b.type)&&(H.__readFormat=b.format,H.__readType=b.type,H.__formatReadable=I.textureFormatReadable(b.format),H.__typeReadable=I.textureTypeReadable(b.type)),H}this.readRenderTargetPixels=function(b,H,it,$,Z,Et,Ft,Nt=0){if(!(b&&b.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ft!==void 0&&(qt=qt[Ft]),qt){f.bindFramebuffer(G.FRAMEBUFFER,qt);try{let Kt=b.textures[Nt],ae=Kt.format,he=Kt.type;b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt);let Yt=$e(Kt);if(Yt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-$&&it>=0&&it<=b.height-Z&&G.readPixels(H,it,$,Z,wt.convert(ae),wt.convert(he),Et)}finally{let Kt=gt!==null?j.get(gt).__webglFramebuffer:null;f.bindFramebuffer(G.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(b,H,it,$,Z,Et,Ft,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ft!==void 0&&(qt=qt[Ft]),qt)if(H>=0&&H<=b.width-$&&it>=0&&it<=b.height-Z){f.bindFramebuffer(G.FRAMEBUFFER,qt);let Kt=b.textures[Nt],ae=Kt.format,he=Kt.type;b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt);let Yt=$e(Kt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,fe),G.bufferData(G.PIXEL_PACK_BUFFER,Et.byteLength,G.STREAM_READ),G.readPixels(H,it,$,Z,wt.convert(ae),wt.convert(he),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let qe=gt!==null?j.get(gt).__webglFramebuffer:null;f.bindFramebuffer(G.FRAMEBUFFER,qe);let Oe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await zd(G,Oe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,fe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Et),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(fe),G.deleteSync(Oe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,it=0){let $=Math.pow(2,-it),Z=Math.floor(b.image.width*$),Et=Math.floor(b.image.height*$),Ft=H!==null?H.x:0,Nt=H!==null?H.y:0;rt.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,it,0,0,Ft,Nt,Z,Et),f.unbindTexture()},this.copyTextureToTexture=function(b,H,it=null,$=null,Z=0,Et=0){let Ft,Nt,qt,Kt,ae,he,Yt,fe,qe,Oe=b.isCompressedTexture?b.mipmaps[Et]:b.image;if(it!==null)Ft=it.max.x-it.min.x,Nt=it.max.y-it.min.y,qt=it.isBox3?it.max.z-it.min.z:1,Kt=it.min.x,ae=it.min.y,he=it.isBox3?it.min.z:0;else{let Ze=Math.pow(2,-Z);Ft=Math.floor(Oe.width*Ze),Nt=Math.floor(Oe.height*Ze),b.isDataArrayTexture?qt=Oe.depth:b.isData3DTexture?qt=Math.floor(Oe.depth*Ze):qt=1,Kt=0,ae=0,he=0}$!==null?(Yt=$.x,fe=$.y,qe=$.z):(Yt=0,fe=0,qe=0);let Be=wt.convert(H.format),nn=wt.convert(H.type),Vt;H.isData3DTexture?(rt.setTexture3D(H,0),Vt=G.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(rt.setTexture2DArray(H,0),Vt=G.TEXTURE_2D_ARRAY):(rt.setTexture2D(H,0),Vt=G.TEXTURE_2D),f.activeTexture(G.TEXTURE0),f.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),f.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),f.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);let dn=f.getParameter(G.UNPACK_ROW_LENGTH),ve=f.getParameter(G.UNPACK_IMAGE_HEIGHT),Tn=f.getParameter(G.UNPACK_SKIP_PIXELS),gn=f.getParameter(G.UNPACK_SKIP_ROWS),ci=f.getParameter(G.UNPACK_SKIP_IMAGES);f.pixelStorei(G.UNPACK_ROW_LENGTH,Oe.width),f.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Oe.height),f.pixelStorei(G.UNPACK_SKIP_PIXELS,Kt),f.pixelStorei(G.UNPACK_SKIP_ROWS,ae),f.pixelStorei(G.UNPACK_SKIP_IMAGES,he);let zi=b.isDataArrayTexture||b.isData3DTexture,Ne=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){let Ze=j.get(b),hi=j.get(H),Ge=j.get(Ze.__renderTarget),ui=j.get(hi.__renderTarget);f.bindFramebuffer(G.READ_FRAMEBUFFER,Ge.__webglFramebuffer),f.bindFramebuffer(G.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let ki=0;ki<qt;ki++)zi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,j.get(b).__webglTexture,Z,he+ki),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,j.get(H).__webglTexture,Et,qe+ki)),G.blitFramebuffer(Kt,ae,Ft,Nt,Yt,fe,Ft,Nt,G.DEPTH_BUFFER_BIT,G.NEAREST);f.bindFramebuffer(G.READ_FRAMEBUFFER,null),f.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||j.has(b)){let Ze=j.get(b),hi=j.get(H);f.bindFramebuffer(G.READ_FRAMEBUFFER,X),f.bindFramebuffer(G.DRAW_FRAMEBUFFER,Y);for(let Ge=0;Ge<qt;Ge++)zi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ze.__webglTexture,Z,he+Ge):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ze.__webglTexture,Z),Ne?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hi.__webglTexture,Et,qe+Ge):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hi.__webglTexture,Et),Z!==0?G.blitFramebuffer(Kt,ae,Ft,Nt,Yt,fe,Ft,Nt,G.COLOR_BUFFER_BIT,G.NEAREST):Ne?G.copyTexSubImage3D(Vt,Et,Yt,fe,qe+Ge,Kt,ae,Ft,Nt):G.copyTexSubImage2D(Vt,Et,Yt,fe,Kt,ae,Ft,Nt);f.bindFramebuffer(G.READ_FRAMEBUFFER,null),f.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ne?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(Vt,Et,Yt,fe,qe,Ft,Nt,qt,Be,nn,Oe.data):H.isCompressedArrayTexture?G.compressedTexSubImage3D(Vt,Et,Yt,fe,qe,Ft,Nt,qt,Be,Oe.data):G.texSubImage3D(Vt,Et,Yt,fe,qe,Ft,Nt,qt,Be,nn,Oe):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Et,Yt,fe,Ft,Nt,Be,nn,Oe.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Et,Yt,fe,Oe.width,Oe.height,Be,Oe.data):G.texSubImage2D(G.TEXTURE_2D,Et,Yt,fe,Ft,Nt,Be,nn,Oe);f.pixelStorei(G.UNPACK_ROW_LENGTH,dn),f.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ve),f.pixelStorei(G.UNPACK_SKIP_PIXELS,Tn),f.pixelStorei(G.UNPACK_SKIP_ROWS,gn),f.pixelStorei(G.UNPACK_SKIP_IMAGES,ci),Et===0&&H.generateMipmaps&&G.generateMipmap(Vt),f.unbindTexture()},this.initRenderTarget=function(b){j.get(b).__webglFramebuffer===void 0&&rt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?rt.setTextureCube(b,0):b.isData3DTexture?rt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?rt.setTexture2DArray(b,0):rt.setTexture2D(b,0),f.unbindTexture()},this.resetState=function(){lt=0,st=0,gt=null,f.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};function yf(i){let t,e="context";try{let D=i.getContext("webgl2",{antialias:!0,alpha:!1});if(!D)return console.warn("[Star Rush WebGL] webgl2 context unavailable; returning null for fallback handling"),null;e="renderer",t=new rc({canvas:i,context:D,antialias:!0,alpha:!1,powerPreference:"default"})}catch(D){return console.warn("[Star Rush WebGL] "+e+" initialization failed; returning null for fallback handling:",D?.message||String(D)),null}t.outputColorSpace=En,t.toneMapping=Aa,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=dl,t.setPixelRatio(Math.min(devicePixelRatio||1,1.5));let n=new ca;n.fog=new la("#cbddec",125,460);let s=new yn(62,1,.12,850),r=new Sa("#e7f4ff","#a08ba5",2.2),o=new Ta("#fff0de",2.4);o.position.set(-30,60,25),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-55,right:55,top:45,bottom:-45,near:1,far:160}),o.shadow.bias=-4e-4,n.add(r,o,o.target);let c=new Rs(new Uint8Array([95,145,195,245]),4,1,Tr);c.minFilter=je,c.magFilter=je,c.needsUpdate=!0;let h=new Map,u=new He,g=new Map,M=new Map,p=new Sn(new xa(650,16,8),new Cn({side:pn,depthWrite:!1,uniforms:{top:{value:new de("#8fbee6")},bottom:{value:new de("#f0e8f0")}},vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vDirection;uniform vec3 top,bottom;void main(){float h=smoothstep(-.05,.8,normalize(vDirection).y);gl_FragColor=vec4(mix(bottom,top,h),1.0);}"}));p.renderOrder=-100,n.add(p);let y=1,w=0,C=0,v=0,m=0,N=16.7,z=0,E=0,L=2,P=["low","medium","high"];function F(D,V){D.renderId||(D.renderId=y++);let q=D.renderId+":"+(D.paintable&&V?V:"");if(M.has(q))return M.get(q);let K=D.sourceData,nt=[],X=[],Y=[],lt=V?new de(V):null;for(let gt=0;gt<K.length;gt+=10){nt.push(K[gt],K[gt+1],K[gt+2]),X.push(K[gt+3],K[gt+4],K[gt+5]);let tt=K[gt+6],ot=K[gt+7],ct=K[gt+8],kt=D.paintable&&lt&&ot-tt>.14&&ct-tt>.2;Y.push(kt?lt.r:tt,kt?lt.g:ot,kt?lt.b:ct)}let st=new kn;return st.setAttribute("position",new rn(nt,3)),st.setAttribute("normal",new rn(X,3)),st.setAttribute("color",new rn(Y,3)),st.setIndex(Array.from(D.sourceIndices)),st.computeBoundingSphere(),M.set(q,st),D.onDispose=()=>{for(let[gt,tt]of M)if(gt.startsWith(D.renderId+":")){for(let[ot,ct]of h)ct.geometry===tt&&(n.remove(ct),ct.dispose(),h.delete(ot));tt.dispose(),M.delete(gt)}},st}function T(D,V,q,K,nt,X={}){let Y=performance.now();if(m){let tt=Y-m;tt<100&&(N+=(tt-N)*.035)}m=Y,X.quality==="auto"&&(N>23?(z++,E=0):N<16.9?(E++,z=0):(z=0,E=0),z>90&&L>0&&(L--,z=0),E>360&&L<2&&(L++,E=0));let lt=X.quality==="auto"?P[L]:X.quality,st=lt==="low"?1:lt==="medium"?1.2:Math.min(devicePixelRatio||1,1.5);st!==v&&(t.setPixelRatio(st),v=st),(q!==w||K!==C)&&(t.setSize(q,K,!1),w=q,C=K),s.aspect=q/K,s.fov=nt,s.updateProjectionMatrix(),s.position.fromArray(V.eye),s.lookAt(new Q(...V.target)),p.position.copy(s.position);let gt=new Map;for(let tt of D){if(!tt.mesh.sourceIndices.length)continue;let ot=F(tt.mesh,tt.tint),ct=tt.opacity??1,kt=ot.uuid+":"+tt.shadow+":"+ct,Jt=gt.get(kt);Jt||(Jt={geometry:ot,shadow:tt.shadow,opacity:ct,items:[]},gt.set(kt,Jt)),Jt.items.push(tt)}for(let tt of h.values())tt.visible=!1;for(let[tt,ot]of gt){let ct=h.get(tt);if(!ct||ct.instanceMatrix.count<ot.items.length){ct&&(n.remove(ct),ct.dispose());let kt=g.get(ot.opacity);kt||(kt=new va({vertexColors:!0,gradientMap:c,transparent:ot.opacity<1,opacity:ot.opacity,depthWrite:ot.opacity>=1}),g.set(ot.opacity,kt)),ct=new pa(ot.geometry,kt,Math.max(4,ot.items.length+8)),ct.instanceMatrix.setUsage(Ih),ct.frustumCulled=!0,ct.receiveShadow=ot.opacity>=1,n.add(ct),h.set(tt,ct)}ct.count=ot.items.length,ct.castShadow=ot.shadow&&lt!=="low",ct.visible=!0;for(let kt=0;kt<ot.items.length;kt++)u.fromArray(ot.items[kt].m),ct.setMatrixAt(kt,u);ct.instanceMatrix.needsUpdate=!0,ct.computeBoundingSphere()}return t.shadowMap.enabled=lt!=="low",t.render(n,s),{drawCalls:t.info.render.calls,triangles:t.info.render.triangles,effectiveQuality:lt}}return{render:T,renderer:t,scene:n}}function Mf(i,t=yf){let e=t(i);if(e)return{canvas:i,threeBackend:e,software:!1,softwareContext:null};let n=r=>{try{return r.getContext("2d")}catch{return null}},s=n(i);if(!s){let r=i.cloneNode(!1);if(s=n(r),!s)throw new Error("\u65E0\u6CD5\u521D\u59CB\u5316 WebGL \u6216 Canvas \u663E\u793A\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6216\u66F4\u6362\u652F\u6301\u7684\u6D4F\u89C8\u5668\u3002");i.replaceWith(r),i=r}return{canvas:i,threeBackend:null,software:!0,softwareContext:s}}function Sf(i,t){for(let e of i.querySelectorAll("#trackPicker [data-track]")){let n=t[e.dataset.track];if(!n||e.querySelector(".course-art"))continue;let s=i.createElement("img");s.className="course-art",s.alt="",s.setAttribute("aria-hidden","true"),s.draggable=!1,s.decoding="async",s.hidden=!0,s.width=512,s.height=256,s.onload=()=>{s.hidden=!1,e.dataset.art="ready"},s.onerror=()=>{s.remove(),delete e.dataset.art},e.prepend(s),s.src=n}}(()=>{"use strict";let i=document.getElementById("scene"),t=document.getElementById("error"),e=document.getElementById("loading");function n(o){t.hidden=!1,document.getElementById("error-text").textContent=o,e.classList.add("done")}let s={light:"/assets/impact-audio/rail-light-v2.e9daa5ac2bd3.wav",medium:"/assets/impact-audio/rail-medium-v2.9e322b68b6d0.wav"},r=!1;try{let g=function(a,l,d){let _=[];if(d){let S=(a%l+l)%l;for(let A=0;A<l;A+=40){let R=A-S;R-=Math.round(R/l)*l,R>=-40&&R<210&&_.push({s:A,ds:R})}}else for(let S=Math.ceil((a-40)/40)*40;S<a+210;S+=40)_.push({s:S,ds:S-a});return _},M=function(a){let l=u,d=i.width,_=i.height;l.setTransform(1,0,0,1,0,0);let S=l.createLinearGradient(0,0,0,_);S.addColorStop(0,"#96c8ee"),S.addColorStop(.62,"#f2e6ee"),S.addColorStop(.63,"#cbd8c1"),S.addColorStop(1,"#bdcdb8"),l.fillStyle=S,l.fillRect(0,0,d,_);let A=a.eye,R=a.target,O=L(v(R,A)),B=L(z(O,[0,1,0])),J=z(B,O),at=_/(2*Math.tan(zs*Math.PI/360)),xt=St=>{let ut=v(St,A),Tt=N(ut,O);return Tt<.25?null:[d/2+N(ut,B)*at/Tt,_/2-N(ut,J)*at/Tt,Tt,at/Tt]},pt=(St,ut)=>{let Tt=St.map(xt);Tt.some(zt=>!zt)||(l.fillStyle=ut,l.beginPath(),Tt.forEach((zt,Ut)=>Ut?l.lineTo(zt[0],zt[1]):l.moveTo(zt[0],zt[1])),l.closePath(),l.fill())},vt=St=>v(St,a.origin),Ct=[];for(let St=-40;St<240;St+=5){let ut=x.s+St,Tt=Me(ut),zt=Me(ut+5);Ct.push({d:St,a:Tt,b:zt})}for(let St of Ct.reverse()){let ut=(Tt,zt,Ut)=>vt(C(C(Tt.p,m(Tt.R,zt)),[0,Ut,0]));if(pt([ut(St.a,-10,0),ut(St.a,10,0),ut(St.b,10,0),ut(St.b,-10,0)],"#e3dce5"),pt([ut(St.a,-7,.05),ut(St.a,7,.05),ut(St.b,7,.05),ut(St.b,-7,.05)],"#7b829a"),Math.floor(St.d/5)%2===0)for(let Tt of[-2.3,2.3])pt([ut(St.a,Tt-.04,.06),ut(St.a,Tt+.04,.06),ut(St.b,Tt+.04,.06),ut(St.b,Tt-.04,.06)],"#e9edf1");for(let Tt of[-1,1])pt([ut(St.a,Tt*8.1,.4),ut(St.a,Tt*8.1,.8),ut(St.b,Tt*8.1,.8),ut(St.b,Tt*8.1,.4)],"#c0cfe2")}if(typeof r<"u"&&r){let St=[];for(let ut=0;ut<210;ut+=20)for(let Tt of[-1,1]){let zt=Ie(Math.floor((x.s+ut)/20)*20,Tt*12,0),Ut=xt(vt(zt));Ut&&St.push({q:Ut,side:Tt,ds:ut,pos:zt,kind:"tree"})}for(let ut of g(x.s,Pe,jt==="circuit"))for(let Tt of[-1,1]){let zt=xt(vt(Ie(ut.s,Tt*20,0)));zt&&St.push({q:zt,kind:"house"})}for(let ut of St.sort((Tt,zt)=>zt.q[2]-Tt.q[2])){let[Tt,zt,,Ut]=ut.q;if(ut.kind==="tree"){l.fillStyle="#a78a95",l.fillRect(Tt-Ut*.12,zt-Ut*3.5,Ut*.24,Ut*3.5);for(let bt=0;bt<4;bt++)l.fillStyle=bt%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(Tt+Math.sin(bt*2)*Ut,zt-Ut*(3.3+bt*.3),Ut*1.6,Ut*1.1,0,0,y),l.fill()}else{let bt=ut.q;l.fillStyle="#f3e9dc",l.fillRect(bt[0]-bt[3]*3,bt[1]-bt[3]*5,bt[3]*6,bt[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(bt[0]-bt[3]*3.5,bt[1]-bt[3]*5),l.lineTo(bt[0],bt[1]-bt[3]*6.3),l.lineTo(bt[0]+bt[3]*3.5,bt[1]-bt[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let ue=0;ue<3;ue++)l.fillRect(bt[0]+(ue-1.2)*bt[3]*1.5,bt[1]-bt[3]*3.9,bt[3],bt[3]*1.2)}}}else{let St=[];for(let ut=0;ut<210;ut+=20)for(let Tt of[-1,1]){let zt=Ie(Math.floor((x.s+ut)/20)*20,Tt*12,0),Ut=xt(vt(zt));Ut&&St.push({q:Ut,side:Tt,ds:ut,pos:zt})}for(let ut of St.sort((Tt,zt)=>zt.q[2]-Tt.q[2])){let[Tt,zt,,Ut]=ut.q;l.fillStyle="#a78a95",l.fillRect(Tt-Ut*.12,zt-Ut*3.5,Ut*.24,Ut*3.5);for(let bt=0;bt<4;bt++)l.fillStyle=bt%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(Tt+Math.sin(bt*2)*Ut,zt-Ut*(3.3+bt*.3),Ut*1.6,Ut*1.1,0,0,y),l.fill();if(ut.ds%40===0){let bt=xt(vt(Ie(x.s+ut.ds,ut.side*20,0)));if(bt){l.fillStyle="#f3e9dc",l.fillRect(bt[0]-bt[3]*3,bt[1]-bt[3]*5,bt[3]*6,bt[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(bt[0]-bt[3]*3.5,bt[1]-bt[3]*5),l.lineTo(bt[0],bt[1]-bt[3]*6.3),l.lineTo(bt[0]+bt[3]*3.5,bt[1]-bt[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let ue=0;ue<3;ue++)l.fillRect(bt[0]+(ue-1.2)*bt[3]*1.5,bt[1]-bt[3]*3.9,bt[3],bt[3]*1.2)}}}}for(let St of ps)if(St.life>0){let ut=xt(vt(St.p));ut&&(l.fillStyle="#414957",l.fillRect(ut[0],ut[1],Math.max(1,ut[3]*.12),Math.max(2,ut[3]*St.length)))}for(let St of ln.values())for(let ut of St.entities){if(Math.abs(Z(ut.s,x.s))>170)continue;let Tt=xt(vt(Ie(ut.s+(ut.ds||0),ut.l+(ut.dl||0),.2)));if(!Tt||ut.kind==="coin"&&ut.hitLap===Math.max(0,Math.floor(x.s/Pe)))continue;let[zt,Ut,,bt]=Tt;if(ut.kind==="coin")l.fillStyle="#ffe2a0",l.beginPath(),l.ellipse(zt,Ut-bt*.8,bt*.25,bt*.38,0,0,y),l.fill();else if(ut.kind==="pad"){let ue=Me(ut.s),Pn=(ze,cn)=>vt(Ie(ut.s+ze,ut.l+cn,.07));pt([Pn(-1.2,-1.5),Pn(1.2,-1.5),Pn(1.2,1.5),Pn(-1.2,1.5)],"#92e3e5")}else if(ut.kind==="ramp"){let ue=(Pn,ze,cn)=>vt(Ie(ut.s+Pn,ut.l+ze,cn));pt([ue(-1.4,-1.5,.08),ue(1.4,-1.5,.85),ue(1.4,1.5,.85),ue(-1.4,1.5,.08)],"#bfa9e3")}else ut.kind==="cone"?(l.fillStyle="#eebd92",l.beginPath(),l.moveTo(zt,Ut-bt*.8),l.lineTo(zt-bt*.35,Ut),l.lineTo(zt+bt*.35,Ut),l.fill()):ut.kind==="barrier"&&(l.fillStyle="#edacbb",l.fillRect(zt-bt,Ut-bt*.7,bt*2,bt*.7))}let Dt=(St,ut,Tt,zt,Ut,bt=1)=>{let ue=Me(St),Pn=Ie(St,ut,.05+zt),ze=xt(vt(Pn));if(!ze)return;l.globalAlpha=bt;let cn=(Ks,Jr,Ii)=>vt(C(Pn,C(m(ue.T,Ks*Math.cos(Tt)-Ii*Math.sin(Tt)),C(m(ue.R,Ks*Math.sin(Tt)+Ii*Math.cos(Tt)),[0,Jr,0]))));pt([cn(-1.6,.3,-.8),cn(1.6,.3,-.8),cn(1.6,.7,.8),cn(-1.6,.7,.8)],Ut),pt([cn(-1.6,.65,-.8),cn(1.6,.65,-.8),cn(1.6,.65,.8),cn(-1.6,.65,.8)],"#eef1f7");for(let Ks of[-1,1])for(let Jr of[-.87,.87]){let Ii=xt(cn(Ks,.35,Jr));Ii&&(l.fillStyle="#3c4357",l.beginPath(),l.ellipse(Ii[0],Ii[1],ze[3]*.24,ze[3]*.34,0,0,y),l.fill())}let Xn=xt(cn(-.3,1.6,0));Xn&&(l.fillStyle="#f3d2be",l.beginPath(),l.arc(Xn[0],Xn[1],ze[3]*.33,0,y),l.fill(),l.fillStyle="#a9abe4",l.beginPath(),l.ellipse(Xn[0],Xn[1]-ze[3]*.18,ze[3]*.36,ze[3]*.2,0,Math.PI,y),l.fill()),l.globalAlpha=1};if(sn.line&&ee==="running")for(let St=8;St>=0;St--){let ut=x.s+12+St*9,Tt=Me(ut),zt=P(Tt.curv*80,-2.1,2.1),Ut=(bt,ue)=>vt(Ie(ut+bt,zt+ue,.09));pt([Ut(-.6,-.4),Ut(.3,0),Ut(-.6,.4),Ut(-.2,0)],Math.abs(Tt.curv)*x.speed>.95?"#f0b7c3":"#a5dbe6")}if(Ri&&Ci?.points?.length&&ee==="running"){let St=Ci.points[Ms];St&&Dt(St[1],St[2],St[3],St[4],"#b8e9e6",.35)}if(typeof Wn<"u")for(let St of Wn)Dt(St.s,St.l,St.yaw||0,0,St.color);if(typeof et<"u"&&et.room)for(let St of et.peers.values())St.position&&Dt(St.position.s,St.position.l,St.position.yaw,St.position.jump,"#eab5ce");if(x.mini>0||x.nitroTime>0||x.pad>0){let St=Me(x.s),ut=xt(vt(Ie(x.s-2,x.l,.4+x.jump)));ut&&(l.fillStyle=x.nitroTime>0?"#bcb2ff99":"#95edff99",l.beginPath(),l.ellipse(ut[0],ut[1],ut[3]*.7,ut[3]*.45,0,0,y),l.fill())}Dt(x.s,x.l,x.yaw,x.jump,typeof tn<"u"?tn.paint:"#8ccde4")},D=function(a,l){let d=new Float32Array(16);for(let _=0;_<4;_++)for(let S=0;S<4;S++)d[_*4+S]=a[S]*l[_*4]+a[4+S]*l[_*4+1]+a[8+S]*l[_*4+2]+a[12+S]*l[_*4+3];return d},V=function(a,l,d){let _=T();return _[12]=a,_[13]=l,_[14]=d,_},q=function(a,l,d){let _=T();return _[0]=a,_[5]=l,_[10]=d,_},K=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([1,0,0,0,0,l,d,0,0,-d,l,0,0,0,0,1])},nt=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,0,-d,0,0,1,0,0,d,0,l,0,0,0,0,1])},X=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,d,0,0,-d,l,0,0,0,0,1,0,0,0,0,1])},Y=function(a=[0,0,0],l=[1,1,1],d=[0,0,0]){return D(V(...a),D(nt(d[1]),D(K(d[0]),D(X(d[2]),q(...l)))))},lt=function(a,l){return[a[0]*l[0]+a[4]*l[1]+a[8]*l[2]+a[12],a[1]*l[0]+a[5]*l[1]+a[9]*l[2]+a[13],a[2]*l[0]+a[6]*l[1]+a[10]*l[2]+a[14]]},st=function(a){let l=[a[0],a[1],a[2]],d=[a[4],a[5],a[6]],_=[a[8],a[9],a[10]],S=z(d,_),A=z(_,l),R=z(l,d),O=N(l,S)||1;return new Float32Array([...m(S,1/O),...m(A,1/O),...m(R,1/O)])},gt=function(a,l){return L([a[0]*l[0]+a[3]*l[1]+a[6]*l[2],a[1]*l[0]+a[4]*l[1]+a[7]*l[2],a[2]*l[0]+a[5]*l[1]+a[8]*l[2]])},tt=function(a,l,d=[0,1,0]){let _=L(v(a,l)),S=L(z(d,_)),A=z(_,S);return new Float32Array([S[0],A[0],_[0],0,S[1],A[1],_[1],0,S[2],A[2],_[2],0,-N(S,a),-N(A,a),-N(_,a),1])},ot=function(a,l,d,_){let S=1/Math.tan(a/2),A=1/(d-_);return new Float32Array([S/l,0,0,0,0,S,0,0,0,0,(_+d)*A,-1,0,0,2*_*d*A,0])},ct=function(a,l,d,_,S,A){return new Float32Array([2/(l-a),0,0,0,0,2/(_-d),0,0,0,0,-2/(A-S),0,-(l+a)/(l-a),-(_+d)/(_-d),-(A+S)/(A-S),1])},kt=function(a,l,d,_=d){let S=v(l,a),A=L(S),R=L(z(Math.abs(A[2])<.95?[0,0,1]:[1,0,0],A)),O=z(R,A),B=m(C(a,l),.5),J=E(S);return new Float32Array([R[0]*d,R[1]*d,R[2]*d,0,A[0]*J,A[1]*J,A[2]*J,0,O[0]*_,O[1]*_,O[2]*_,0,...B,1])},Jt=function(a){let l=parseInt(a.replace("#",""),16);return[l>>16&255,l>>8&255,l&255].map(d=>Math.pow(d/255,2.2))},ce=function(a,l,d){return{p:a,n:l,i:d}},Ee=function(a=20,l=12){let d=[],_=[],S=[];for(let A=0;A<=l;A++){let R=A*p/l;for(let O=0;O<=a;O++){let B=O*y/a,J=[Math.sin(R)*Math.cos(B),Math.cos(R),Math.sin(R)*Math.sin(B)];d.push(...J),_.push(...J)}}for(let A=0;A<l;A++)for(let R=0;R<a;R++){let O=A*(a+1)+R,B=O+a+1;S.push(O,O+1,B,O+1,B+1,B)}return ce(d,_,S)},ht=function(a=16,l=1){let d=[],_=[],S=[];for(let A=0;A<2;A++)for(let R=0;R<=a;R++){let O=R*y/a,B=A?l:1,J=L([Math.cos(O),1-l,Math.sin(O)]);d.push(B*Math.cos(O),A-.5,B*Math.sin(O)),_.push(...J)}for(let A=0;A<a;A++){let R=A,O=A+a+1;S.push(R,O,R+1,R+1,O,O+1)}for(let A=0;A<2;A++){let R=d.length/3,O=A-.5,B=A?l:1;d.push(0,O,0),_.push(0,A?1:-1,0);for(let J=0;J<=a;J++){let at=J*y/a;d.push(B*Math.cos(at),O,B*Math.sin(at)),_.push(0,A?1:-1,0)}for(let J=0;J<a;J++)S.push(R,R+J+(A?2:1),R+J+(A?1:2))}return ce(d,_,S)},_t=function(a,l,d=48,_=10,S=0,A=y){let R=[],O=[],B=[];for(let J=0;J<=d;J++){let at=S+A*J/d;for(let xt=0;xt<=_;xt++){let pt=xt*y/_,vt=Math.cos(pt),Ct=Math.sin(pt);R.push((a+l*vt)*Math.cos(at),(a+l*vt)*Math.sin(at),l*Ct),O.push(vt*Math.cos(at),vt*Math.sin(at),Ct)}}for(let J=0;J<d;J++)for(let at=0;at<_;at++){let xt=J*(_+1)+at,pt=xt+_+1;B.push(xt,pt,xt+1,pt,pt+1,xt+1)}return ce(R,O,B)},ne=function(a,l,d,_=.07){let S=[a,l,d,_].join(",");if(Ht.has(S))return Ht.get(S);_=Math.min(_,a/2*.95,l/2*.95,d/2*.95);let A=[],R=[],O=[],B=[a/2,l/2,d/2],J=[[[0,0,d/2],[1,0,0],[0,1,0],a,l],[[0,0,-d/2],[-1,0,0],[0,1,0],a,l],[[a/2,0,0],[0,0,-1],[0,1,0],d,l],[[-a/2,0,0],[0,0,1],[0,1,0],d,l],[[0,l/2,0],[1,0,0],[0,0,-1],a,d],[[0,-l/2,0],[1,0,0],[0,0,1],a,d]];for(let[xt,pt,vt,Ct,Dt]of J){let St=Ut=>[-Ut/2,-Ut/2+_*.28,-Ut/2+_,Ut/2-_,Ut/2-_*.28,Ut/2],ut=St(Ct),Tt=St(Dt),zt=A.length/3;for(let Ut of Tt)for(let bt of ut){let ue=C(xt,C(m(pt,bt),m(vt,Ut))),Pn=ue.map((cn,Xn)=>P(cn,-B[Xn]+_,B[Xn]-_)),ze=L(v(ue,Pn));A.push(...C(Pn,m(ze,_))),R.push(...ze)}for(let Ut=0;Ut<5;Ut++)for(let bt=0;bt<5;bt++){let ue=zt+Ut*6+bt;O.push(ue,ue+1,ue+6,ue+1,ue+7,ue+6)}}let at=ce(A,R,O);return Ht.set(S,at),at},Wt=function(a,l=.04,d=8){let _=[],S=[],A=[];for(let R=0;R<a.length;R++){let O=L(v(a[Math.min(R+1,a.length-1)],a[Math.max(R-1,0)])),B=L(z(O,Math.abs(O[1])<.9?[0,1,0]:[0,0,1])),J=z(O,B);for(let at=0;at<=d;at++){let xt=at*y/d,pt=C(m(B,Math.cos(xt)),m(J,Math.sin(xt)));_.push(...C(a[R],m(pt,l))),S.push(...pt)}}for(let R=0;R<a.length-1;R++)for(let O=0;O<d;O++){let B=R*(d+1)+O,J=B+d+1;A.push(B,B+1,J,B+1,J+1,J)}return ce(_,S,A)},ge=function(a,l,d,_){let S=[],A=[],R=[];for(let B=0;B<=144;B++){let J=B*y/144;for(let at of[-1,1])S.push((a+at*d)*Math.cos(J),_,(l+at*d)*Math.sin(J)),A.push(0,1,0)}for(let B=0;B<144;B++){let J=B*2;R.push(J,J+2,J+1,J+1,J+2,J+3)}return ce(S,A,R)},I=function(a,l,d,_=Fe.green,S=!1,A=.13){a.add(S?pe:Ke,Y(l,d),_,A)},f=function(a,l,d,_,S=.06,A=[0,0,0],R=.12){a.add(ne(...d,S),Y(l,[1,1,1],A),_,R)},k=function(a,l,d,_,S,A=.2,R=!1){a.add(ke,kt(l,d,_),S,A),R&&(I(a,l,[_,_,_],S,!0,A),I(a,d,[_,_,_],S,!0,A))},j=function(a,l,d,_,S=[0,0,0],A=!1){a.add(A?We:xe,Y(l,d,S),_)},rt=function(a,l,d,_,S=.15){a.add(Wt(l,d),Le,_,S)},Pt=function(a,l,d,_=100){return Array.from({length:_+1},(S,A)=>[a*Math.cos(A*y/_),d,l*Math.sin(A*y/_)])},dt=function(){return It=It*1664525+1013904223>>>0,It/4294967296},Ga=function(a,l,d){let _=-d*Math.min(.09,x.speed*.003),S=Math.sin(a*18)*Math.min(.012,x.speed*5e-4);mt.local=Y([0,S,0],[1,1,1],[_,0,0]),Bt.local=Y([-.31,1.57+S,0],[1,1,1],[-_*.5,-d*.13,0]);for(let A of Mt)A.n.local=D(V(A.x,.41,A.z),D(nt(A.front?-(x.drifting?d*.12-wn(x.yaw-x.velocityYaw)*.62:d*.26):0),X(gc)));for(let A of Zt){let R=x.boostActive?1.25+.17*Math.sin(a*38+A.side):x.pad>0?1+.12*Math.sin(a*36):x.mini>0?.65+.12*Math.sin(a*42+A.side):.001;A.n.local=Y([-1.9,.43,A.side*.34],[R,Math.max(.01,R),Math.max(.01,R)])}},$e=function(){return Zn[Qe]},b=function(){return Pe*$e().laps},H=function(a){let l=$e().points,d=l.length,_=(a%d+d)%d,S=Math.floor(_),A=_-S,R=l[(S+d-1)%d],O=l[S],B=l[(S+1)%d],J=l[(S+2)%d];return O.map((at,xt)=>.5*(2*at+(-R[xt]+B[xt])*A+(2*R[xt]-5*at+4*B[xt]-J[xt])*A*A+(-R[xt]+3*at-3*B[xt]+J[xt])*A*A*A))},it=function(){Pr=Qe,mn=[],Pe=0;let a=$e().points.length*120;for(let _=0;_<=a;_++){let S=_*$e().points.length/a,A=H(S);_&&(Pe+=E(v(A,mn[_-1].p)));let R=v(H(S+1e-4),H(S-1e-4));mn.push({s:Pe,p:A,h:Math.atan2(R[2],R[0])})}let l=mn.map(_=>_.p[0]),d=mn.map(_=>_.p[2]);Ir={minX:Math.min(...l),maxX:Math.max(...l),minZ:Math.min(...d),maxZ:Math.max(...d)}},$=function(a){let l=(a%Pe+Pe)%Pe,d=0,_=mn.length-1;for(;d+1<_;){let J=d+_>>1;mn[J].s<=l?d=J:_=J}let S=mn[d],A=mn[_],R=(l-S.s)/(A.s-S.s||1),O=Math.atan2(Math.sin(A.h-S.h),Math.cos(A.h-S.h)),B=S.h+O*R;return{p:S.p.map((J,at)=>F(J,A.p[at],R)),h:B,T:[Math.cos(B),0,Math.sin(B)],R:[-Math.sin(B),0,Math.cos(B)],curv:O/(A.s-S.s),slope:(A.p[1]-S.p[1])/(A.s-S.s)}},Z=function(a,l){let d=a-l;return jt==="circuit"&&(d-=Math.round(d/Pe)*Pe),d},Et=function(){return fi+(x.timePenalty||0)},Ft=function(a){let l=Math.floor(a/60),d=a-l*60;return String(l).padStart(2,"0")+":"+d.toFixed(2).padStart(5,"0")},Nt=function(a,l){if(jt!=="circuit")return!0;let d=C($(a).p,m($(a).R,l));for(let _=0;_<mn.length;_+=20){let S=mn[_];if(Math.abs(Z(S.s,a))>35&&Math.hypot(S.p[0]-d[0],S.p[2]-d[2])<15)return!1}return!0},Oe=function(){return[[Math.cos(x.yaw),Math.sin(x.yaw)],[-Math.sin(x.yaw),Math.cos(x.yaw)]]},Be=function(a){let l=Oe(),d=a.angle||0,_=[[Math.cos(d),Math.sin(d)],[-Math.sin(d),Math.cos(d)]],S=[Z(x.s,a.s+(a.ds||0)),x.l-a.l-(a.dl||0)],A=a.kind==="cone"?[.39,.39]:[.35,1.1],R=1/0,O=null;for(let B of[l[0],l[1],_[0],_[1]]){let J=Math.abs(fe(l[0],B))*ae+Math.abs(fe(l[1],B))*he,at=Math.abs(fe(_[0],B))*A[0]+Math.abs(fe(_[1],B))*A[1],xt=J+at-Math.abs(fe(S,B));if(xt<=0)return null;if(xt<R){R=xt;let pt=fe(S,B)>=0?1:-1;O=B.map(vt=>vt*pt)}}return{normal:O,pen:R}},nn=function(a,l,d=null){let _=1/qt,S=1/Kt,A=d?d.kind==="cone"?9:85:1/0,R=d?1/A:0,O=d?[Z(x.s+l[0],d.s+(d.ds||0)),x.l+l[1]-d.l-(d.dl||0)]:[0,0],B=d?1/(A*(d.kind==="cone"?.09:.48)):0,J=[x.vS-x.spin*l[1],x.vL+x.spin*l[0]],at=d?[(d.vS||0)-(d.omega||0)*O[1],(d.vL||0)+(d.omega||0)*O[0]]:[0,0],xt=[J[0]-at[0],J[1]-at[1]],pt=fe(xt,a);if(pt>=0)return 0;let vt=qe(l,a),Ct=qe(O,a),Dt=d?.13:.035,St=-(1+Dt)*pt/(_+R+vt*vt*S+Ct*Ct*B);x.vS+=a[0]*St*_,x.vL+=a[1]*St*_,x.spin=P(x.spin+vt*St*S,-2.3,2.3);let ut=[-a[1],a[0]],Tt=qe(l,ut),zt=qe(O,ut),Ut=fe(xt,ut),bt=d?.22:.1,ue=P(-Ut/(_+R+Tt*Tt*S+zt*zt*B),-bt*St,bt*St);return x.vS+=ut[0]*ue*_,x.vL+=ut[1]*ue*_,x.spin=P(x.spin+Tt*ue*S,-2.3,2.3),d&&(d.vS=(d.vS||0)-(a[0]*St+ut[0]*ue)*R,d.vL=(d.vL||0)-(a[1]*St+ut[1]*ue)*R,d.omega=P((d.omega||0)-(Ct*St+zt*ue)*B,-7,7),d.kind==="cone"&&(d.tilt=Math.min(1.35,(d.tilt||0)+Math.abs(St)*R*.015))),Math.abs(pt)},Vt=function(a,l){a<.7||x.contactSound>0||(x.contactSound=.16,lu(Ie(x.s,x.l,.45),Math.min(14,Math.ceil(a)),[0,1,0]),Lf(l,a),a>5&&(Ur=Math.min(.25,a*.012),x.driftCharge*=.5))},dn=function(a){x.contactSound=Math.max(0,x.contactSound-a);for(let l of ln.values())for(let d of l.entities)(d.kind==="cone"||d.kind==="barrier")&&(d.vS=(d.vS||0)*Math.exp(-a*2.4),d.vL=(d.vL||0)*Math.exp(-a*2.4),d.ds=P((d.ds||0)+d.vS*a,-18,18),d.dl=P((d.dl||0)+d.vL*a,-7.4-d.l,7.4-d.l),d.angle=(d.angle||0)+(d.omega||0)*a,d.omega=(d.omega||0)*Math.exp(-a*2));for(let l=0;l<3;l++){let d=Oe(),_=Math.abs(d[0][1])*ae+Math.abs(d[1][1])*he,S=Yt-_;if(Math.abs(x.l)>S){let A=Math.sign(x.l),R=[0,-A];x.l=A*(S-.015);let O=[A*(Math.sign(d[0][1])*ae*d[0][0]+Math.sign(d[1][1])*he*d[1][0]),A*_],B=nn(R,O);Vt(B,"rail"),B>4&&(Xa(!1),x.turnRate*=.4,ja=!1)}if(!(x.jump>.85))for(let A of ln.values())for(let R of A.entities){if(R.kind!=="cone"&&R.kind!=="barrier"||Math.abs(Z(R.s+(R.ds||0),x.s))>4.5||Math.abs(R.l+(R.dl||0)-x.l)>4)continue;let O=Be(R);if(!O)continue;let B=R.kind==="cone"?9:85,J=B/(B+qt),at=Math.max(0,O.pen-.008)*.82;x.s+=O.normal[0]*at*J,x.l+=O.normal[1]*at*J,R.ds=(R.ds||0)-O.normal[0]*at*(1-J),R.dl=(R.dl||0)-O.normal[1]*at*(1-J);let xt=Oe(),pt=[Z(R.s+(R.ds||0),x.s),R.l+(R.dl||0)-x.l],vt=P(fe(pt,xt[0]),-ae,ae),Ct=P(fe(pt,xt[1]),-he,he),Dt=[xt[0][0]*vt+xt[1][0]*Ct,xt[0][1]*vt+xt[1][1]*Ct],St=nn(O.normal,Dt,R);Vt(St,R.kind)}}x.speed=Math.hypot(x.vS,x.vL),x.velocityYaw=Math.atan2(x.vL,x.vS),x.lateralSpeed=x.vL},Tn=function(a,l){if(!ve.has(a)){let d=new Ce;l(d),ve.set(a,d.finish())}return ve.get(a)},gn=function(a,l,d,_,S="#627596"){let A=[-l/2,_,-d/2],R=[l/2,_,-d/2],O=[l/2,_,d/2],B=[-l/2,_,d/2],J=[-l/2,_+1.3,0],at=[l/2,_+1.3,0];$n(a,A,R,at,J,S),$n(a,J,at,O,B,S),$n(a,A,J,B,B,"#e9e1d2"),$n(a,R,O,at,at,"#e9e1d2");for(let xt=0;xt<9;xt++){let pt=-l/2+xt*l/8;rt(a,[[pt,_,-d/2],[pt,_+1.3,0],[pt,_,d/2]],.025,"#8797b0")}k(a,[-l/2-.15,_+1.33,0],[l/2+.15,_+1.33,0],.08,S)},ci=function(a,l=0){let d=["#fff0db","#e9eafa","#f9dbe2","#e0f1ec"][l%4],_=["#7190b6","#9a82b3","#be8f98","#6c9a9a"][l%4];f(a,[0,2.65,0],[6,5.3,4.8],d,.08),f(a,[0,.12,0],[6.4,.24,5.1],"#b9b7c5",.035),gn(a,6.7,5.8,5.3,_);for(let S of[-1,1])for(let A of[-1.9,0,1.9])for(let R of[1.4,3.85])f(a,[A,R,S*2.425],[1.2,1.35,.055],_,.025),f(a,[A,R,S*2.46],[1.05,1.18,.03],"#b8dfe8",.01,[0,0,0],.45),k(a,[A,R-.58,S*2.49],[A,R+.58,S*2.49],.025,"#f4f7fa"),f(a,[A,R-.72,S*2.55],[1.35,.12,.28],_,.015);f(a,[0,1.03,2.5],[1.04,2.05,.1],"#798c9c",.025),f(a,[.34,1.03,2.57],[.05,.12,.04],"#f7d5a4",.01);for(let S of[-1,1])f(a,[S*2.65,.48,2.9],[.65,.9,.7],"#b9c9b0",.035),I(a,[S*2.65,1.14,2.9],[.6,.55,.5],"#88ba9a",!0)},zi=function(a,l=0){let d=["#ef9ba5","#88bfc9","#a6a0d5"][l%3];f(a,[0,2,0],[7,4,4.8],"#fff1dd",.06),gn(a,7.7,5.8,4,"#6f7d98");for(let _ of[-2.05,0,2.05])f(a,[_,1.4,2.45],[1.8,2.15,.06],"#88afb9",.02),f(a,[_,1.45,2.5],[1.54,1.92,.025],"#c2e4e8",.015),f(a,[_,1.45,2.54],[.045,1.92,.02],"#edf6ee",.005);f(a,[0,3.03,2.65],[7.4,.7,.55],d,.035);for(let _=0;_<12;_++)f(a,[-3.35+_*.61,2.62,2.95],[.59,.24,1.15],_%2?"#fff6e3":d,.025,[.12,0,0]);for(let _ of[-1,1])k(a,[_*3.3,0,3.35],[_*3.3,2.6,3.35],.055,d);for(let _ of[-1.9,0,1.9])f(a,[_,3.04,2.96],[.45,.34,.025],"#fff6e6",.02),f(a,[_+.28,3.04,2.97],[.065,.22,.02],"#fff6e6",.01);for(let _ of[-2.6,2.7]){f(a,[_,.35,3.35],[.75,.7,.65],"#cda883",.035);for(let S of[-.14,.14])f(a,[_,.52,3.35+S],[.6,.035,.035],"#ecd3a5",.005)}f(a,[1.4,.72,3.5],[.6,1.3,.12],"#7e8f9c",.03,[.08,0,0]);for(let _=0;_<4;_++)f(a,[1.4,.38+_*.2,3.58],[.38,.025,.025],"#e9f1e8",.005)},Ne=function(a,l=0){let d="#997786",_=["#f8c6dc","#f6b8d5","#ffdfeb"];k(a,[0,0,0],[l?.35:-.25,3.4,0],.18,d),k(a,[0,1.9,0],[-1.55,3.55,.2],.11,d),k(a,[.1,2.2,0],[1.55,3.8,-.25],.1,d);let A=[[-1.4,3.9,.1,1.5],[0,4.6,0,1.8],[1.6,4.05,-.2,1.5],[-.4,4,1.35,1.45],[.4,4.1,-1.3,1.5]];for(let R=0;R<A.length;R++){let[O,B,J,at]=A[R];I(a,[O,B,J],[at,at*.7,at*.86],_[(R+l)%3],!0,.02),I(a,[O+.2,B+.6,J+.15],[at*.6,at*.28,at*.52],"#ffe8f1",!0,.01)}for(let R=0;R<12;R++){let O=R*2.399,B=.6+R%4*.38;f(a,[Math.cos(O)*B,.045,Math.sin(O)*B],[.12,.015,.065],_[R%3],.012,[0,O,0])}},Ze=function(a){k(a,[0,0,0],[0,4.2,0],.14,"#9c8c84");for(let l=0;l<3;l++)I(a,[(l-1)*.45,2.7+l*.82,0],[1.9-l*.35,.78,1.25-l*.16],["#7cb5aa","#8fc9b5","#a6d7ba"][l],!0,.02)},hi=function(a){f(a,[0,.1,0],[.55,.2,.55],"#9da8b9",.025),k(a,[0,.15,0],[0,5.6,0],.065,"#7e8da8"),rt(a,[[0,5.4,0],[0,5.8,.3],[0,5.8,1.3],[0,5.5,1.55]],.055,"#7e8da8"),f(a,[0,5.46,1.55],[.65,.16,.9],"#e5edee",.05),f(a,[0,5.36,1.55],[.5,.025,.72],"#fff0b3",.025,[0,0,0],.1)},Ge=function(a){for(let l of[-4,4])k(a,[l,0,0],[l*.94,6.3,0],.29,"#d98085"),k(a,[l,0,0],[l,.75,0],.31,"#66728c"),k(a,[l*.95,4.65,0],[l*.95,6.65,0],.32,"#dc8d91");f(a,[0,5,0],[9.8,.36,.48],"#d68183",.06),rt(a,[[-5.65,6.55,0],[-4.5,6.3,0],[0,6.2,0],[4.5,6.3,0],[5.65,6.55,0]],.25,"#6d7089"),k(a,[0,5,0],[0,6.15,0],.13,"#d68183"),f(a,[0,5.65,.31],[.9,1.12,.15],"#55677e",.02),f(a,[0,5.65,.4],[.5,.69,.025],"#edcf9d",.01)},ui=function(a){f(a,[0,.25,0],[13,.5,6.8],"#c6c4ce",.04);for(let l of[-5,0,5])for(let d of[-2.2,2.2])k(a,[l,.5,d],[l,4.1,d],.1,"#8fa2ad");gn(a,14,7.8,4.1,"#73849c");for(let l=0;l<12;l++)f(a,[-5.8+l*1.05,.53,3],[.8,.025,.2],"#f6dfa0",.008);f(a,[0,3.2,2.6],[4,.9,.22],"#eef5ed",.04),f(a,[-1.55,3.2,2.75],[.45,.45,.04],"#8ec9c5",.03);for(let l=0;l<6;l++)f(a,[-.8+l*.45,3.2,2.75],[.19,.24,.03],"#8294a8",.01);for(let l of[-3.5,3.5]){f(a,[l,1.02,0],[2.7,.15,.65],"#c2a38c",.02);for(let d of[-.95,.95])k(a,[l+d,.5,0],[l+d,.95,0],.06,"#8c91a3")}},ki=function(a){for(let l of[-1.16,1.16])f(a,[0,.05,l],[20,.1,.09],"#81929f",.015);for(let l=0;l<20;l++)f(a,[-9.5+l,.005,0],[.23,.07,3.4],"#bea58d",.015);f(a,[0,1.65,0],[13,2.7,3],"#edf5dc",.25),f(a,[0,1.25,0],[13.15,.38,3.06],"#83bcb6",.04),f(a,[0,3.08,0],[12.5,.25,3.1],"#b3bfc6",.12);for(let l of[-1,1]){for(let d=0;d<7;d++){let _=-5.2+d*1.73;f(a,[_,2,l*1.52],[1.35,1.05,.06],"#769ba8",.04),f(a,[_,2.1,l*1.56],[1.16,.8,.025],"#bbdfe6",.03)}for(let d of[-4.3,4.3])I(a,[d,.45,l*1.16],[.49,.49,.13],"#596980",!0),f(a,[d,.48,l*1.31],[.19,.19,.03],"#bfccd1",.03)}for(let l of[-6.55,6.55]){f(a,[l,2.1,0],[.06,1.05,2.1],"#acd2dd",.05);for(let d of[-.9,.9])I(a,[l,1.25,d],[.05,.13,.13],"#fff4ba",!0)}rt(a,[[-1.5,3.25,0],[0,4.3,0],[1.5,3.25,0]],.055,"#718699"),k(a,[-.65,4.3,0],[.65,4.3,0],.07,"#718699")},Ha=function(a){f(a,[0,4.8,0],[24,9.6,7],"#f4eedf",.06),gn(a,25.2,8.2,9.6,"#8095ad"),f(a,[0,6.1,3.7],[4.8,12.2,2],"#e6eaf0",.06),gn(a,5.4,3.1,12.2,"#879bb4");for(let l of[-10,-7,-4,4,7,10])for(let d of[2,4.8,7.6])f(a,[l,d,3.56],[1.9,1.65,.06],"#8da6b8",.025),f(a,[l,d,3.61],[1.64,1.41,.025],"#c7e9eb",.015),f(a,[l,d,3.65],[.045,1.41,.025],"#f6f5ed",.005);f(a,[0,1.5,4.75],[3.2,2.8,.06],"#9cbdcd",.025);for(let l of[-.75,.75])f(a,[l,1.5,4.81],[.035,2.7,.025],"#f7eee4",.005);I(a,[0,10.2,4.77],[.9,.9,.06],"#fff7df",!0,.02),a.add(_t(.89,.045,28,7),V(0,10.2,4.84),"#7f91a8",.08),k(a,[0,10.2,4.91],[0,10.8,4.91],.03,"#697e98"),k(a,[0,10.2,4.92],[.43,10.4,4.92],.03,"#697e98"),f(a,[0,-.02,7.5],[23,.1,12],"#e2e1db",.03);for(let l of[-5.5,5.5])f(a,[l,1.5,12.1],[.8,3,.8],"#e8dbc7",.04),f(a,[l,3.06,12.1],[1,.2,1],"#a1acb9",.025);for(let l of[-1,1])for(let d=0;d<8;d++){let _=l*(6.4+d*.65);k(a,[_,0,12],[_,1.8,12],.025,"#9cacc0")}for(let l of[-1,1])k(a,[l*6,1.65,12],[l*11.5,1.65,12],.035,"#9cacc0")},bf=function(a){f(a,[0,1.25,0],[1.2,2.5,.82],"#f3a4ad",.09),f(a,[-.13,1.55,.43],[.82,1.35,.05],"#b6e0e9",.03);for(let l=0;l<3;l++)for(let d=0;d<3;d++)f(a,[-.4+d*.27,1.12+l*.4,.48],[.13,.23,.06],["#f9e2ad","#a3d2cc","#d3c5ec"][d],.025),f(a,[-.4+d*.27,.94+l*.4,.49],[.1,.04,.02],"#fff0c7",.005);f(a,[0,.47,.44],[.75,.24,.055],"#738698",.03),f(a,[.43,1.3,.45],[.13,.18,.04],"#fff0b8",.02)},Tf=function(a){k(a,[0,0,0],[0,2.6,0],.08,"#8c7e8a"),f(a,[0,2.55,0],[.55,.16,.55],"#877d92",.025),f(a,[0,2.22,0],[.41,.52,.41],"#ffe4ad",.04),f(a,[0,1.93,0],[.52,.12,.52],"#a19caa",.025);for(let l of[-.2,.2])for(let d of[-.2,.2])k(a,[l,1.98,d],[l,2.49,d],.018,"#927f8d")},wf=function(a,l){let d=l==="left"?-1:1;k(a,[0,0,0],[0,2.4,0],.055,"#8499b0"),f(a,[0,2.28,0],[2.9,.78,.18],"#f3eacb",.04);for(let _=0;_<3;_++){let S=-.86+_*.86;k(a,[S-d*.25,2.02,.12],[S+d*.15,2.28,.12],.055,"#bd8faf"),k(a,[S+d*.15,2.28,.12],[S-d*.25,2.54,.12],.055,"#bd8faf")}},Af=function(a){return Tn(a,l=>{a.startsWith("house")?ci(l,Number(a.slice(-1))):a.startsWith("shop")?zi(l,Number(a.slice(-1))):a.startsWith("cherry")?Ne(l,Number(a.slice(-1))):a==="pine"?Ze(l):a==="lamp"?hi(l):a==="torii"?Ge(l):a==="station"?ui(l):a==="tram"?ki(l):a==="vending"?bf(l):a==="school"?Ha(l):a==="lantern"?Tf(l):(a==="left"||a==="right")&&wf(l,a)})},Ef=function(a){let l=(a%Pe+Pe)%Pe/Pe,d=$e().sectors,_=d[0];for(let S of d)l>=S.at&&(_=S);return _},Cf=function(a,l,d){let _=new _e,S=a*40,A=(B,J,at,xt=1,pt=0)=>{if(jt==="circuit"&&J>=Pe||!Nt(J,at))return null;let vt=Me(J),Ct=Ie(J,at,-.05),Dt=-vt.h+(at>0?p:0)+pt,St=new _e(Af(B),Y(v(Ct,l),[xt,xt,xt],[0,Dt,0]));return _.add(St),St},R=jt==="circuit"&&$e().biome===1;for(let B of[-1,1]){A("lamp",S+7,B*9.65);for(let J=0;J<2;J++)A("cherry"+(a+J)%2,S+10+J*20,B*(R?11.3:12.5),R?1.12:.92);(a%2===0||R)&&a%3!==1&&!(a===2&&B<0)&&!(R&&a===0&&B>0)&&A("house"+(a+(B>0?1:0))%4,S+19,B*(16.5+d()*2),.9+d()*.25),a%3===1&&!(a===2&&B<0)&&A("shop"+a%3,S+18,B*17.5),a%5===0&&A("vending",S+9,B*10.1),a%3===0&&A("pine",S+32,B*22,1.5)}let O=wn(Me(S+37).h-Me(S+7).h);if(Math.abs(O)>.25&&A(O>0?"right":"left",S+5,(O>0?-1:1)*9.4,1,O>0?-p/2:p/2),jt==="circuit"){let B=(S+20)/Pe;if(R&&a===0&&A("school",S+21,28),a===2&&(A("station",S+17,-20,1),A("tram",S+17,-27,1),A("vending",S+9,-12.8)),B>.66&&B<.74&&a%2===0){A("torii",S+22,-16);for(let J of[-1,1])A("lantern",S+9,J*10)}}return _},Pf=function(){di&&di.mesh.dispose(),di&&(di.mesh.dispose(),di=null);let a=new Ce,l=Ir,d=[(l.minX+l.maxX)*.5,0,(l.minZ+l.maxZ)*.5],_=l.maxX-l.minX,S=l.maxZ-l.minZ;if($e().biome===0)for(let[R,O,B,J]of[[_*.82,S*.89,-.43,"#eadfce"],[_*.78,S*.85,-.3,"#c7d9b4"]]){let at=[d[0],B,d[2]],xt=[0,1,0],pt=[];for(let vt=0;vt<=96;vt++){let Ct=vt*y/96,Dt=1+.025*Math.sin(Ct*5);at.push(d[0]+Math.cos(Ct)*R*Dt,B,d[2]+Math.sin(Ct)*O*Dt),xt.push(0,1,0),vt&&pt.push(0,vt,vt+1)}a.add(ce(at,xt,pt),Le,J,.02)}for(let R=0;R<12;R++){let O=R*y/12,B=320+R%3*36,J=d[0]+Math.cos(O)*B,at=d[2]+Math.sin(O)*B,xt=40+R%4*18;j(a,[J,xt*.5-5,at],[70,xt,60],["#b5c4de","#a6bfd8","#c6cfdf"][R%3],[0,O,0],!0),R%3===0&&j(a,[J,xt*.85-5,at],[25,xt*.3,22],"#e5e5f0",[0,O,0],!0)}for(let R=0;R<10;R++){let O=R*y/10,B=[d[0]+Math.cos(O)*260,57+R%3*14,d[2]+Math.sin(O)*250];for(let J=0;J<4;J++)I(a,C(B,[(J-1.5)*12,Math.sin(J*2)*4,0]),[17,7+J%2*3,10],"#fff5f3",!0,.01)}di=new _e(a.finish()),di.shadow=!1,Qh=Qe,cc=Array.from({length:24},(R,O)=>({phase:O*2.399,node:new _e(Rf)}));for(let R of cc)R.node.shadow=!1},If=function(a,l){if(jt!=="circuit")return;(Qh!==Qe||!di)&&Pf(),di.local=V(-a[0],-a[1],-a[2]),G.add(di);let d=Me(x.s);for(let _ of cc){let S=_.phase,A=(S*13+l*1.7)%55-10,R=Math.sin(S*7)*10+Math.sin(l*.6+S)*2,O=1+((S*2-l*.65)%7+7)%7,B=C(Ie(x.s+A,R,O),[Math.sin(l+S)*.25,0,0]);_.node.local=Y(v(B,a),[1,1,1],[l*.8+S,S,l]),G.add(_.node)}},Wa=function(){if(!ye)try{let xt=function(Dt,St){let ut=a.createBufferSource(),Tt=a.createBiquadFilter(),zt=a.createGain();return ut.buffer=J,ut.loop=!0,Tt.type=Dt,Tt.frequency.value=St,zt.gain.value=0,ut.connect(Tt),Tt.connect(zt),zt.connect(l),ut.start(),{source:ut,filter:Tt,gain:zt}},a=new(window.AudioContext||window.webkitAudioContext),l=a.createGain(),d=a.createDynamicsCompressor();l.gain.value=Fn?.48:0,l.connect(d),d.threshold.value=-18,d.ratio.value=4,d.connect(a.destination);let _=a.createGain(),S=a.createBiquadFilter();S.type="lowpass",S.frequency.value=1e3,_.gain.value=0,S.connect(_),_.connect(l);let A=a.createOscillator(),R=a.createOscillator(),O=a.createOscillator(),B=a.createGain();A.type="sawtooth",R.type="triangle",O.type="sine",R.detune.value=9,B.gain.value=.6;for(let Dt of[A,R])Dt.connect(S),Dt.start();O.connect(B),B.connect(S),O.start();let J=a.createBuffer(1,a.sampleRate*2,a.sampleRate),at=J.getChannelData(0);for(let Dt=0;Dt<at.length;Dt++)at[Dt]=Math.random()*2-1;let pt=xt("lowpass",1100),vt=xt("bandpass",1800),Ct=xt("highpass",2200);vt.filter.Q.value=3.5,ye={ctx:a,master:l,engine1:A,engine2:R,sub:O,engineGain:_,engineFilter:S,noise:J,wind:pt,tire:vt,turbo:Ct,oldSpeed:0,oldBoost:!1,gear:0},Object.keys(s).length&&(ye.rail=Nu(a,l,s),ye.rail.load())}catch{}},Vi=function(a=620,l=.1){if(!Fn||!ye)return;let{ctx:d,master:_}=ye,S=d.createOscillator(),A=d.createGain();S.type="sine",S.frequency.setValueAtTime(a,d.currentTime),S.frequency.exponentialRampToValueAtTime(a*1.28,d.currentTime+l),A.gain.setValueAtTime(.07,d.currentTime),A.gain.exponentialRampToValueAtTime(.001,d.currentTime+l),S.connect(A),A.connect(_),S.start(),S.stop(d.currentTime+l+.02)},Lf=function(a,l){if(!Fn||!ye||ye.ctx.state!=="running"||a==="rail"&&ye.rail?.play(l))return;let{ctx:d,master:_,noise:S}=ye,A=d.createBufferSource(),R=d.createBiquadFilter(),O=d.createGain(),B=d.currentTime;if(A.buffer=S,R.type="bandpass",R.frequency.value=a==="rail"?1400:a==="cone"?450:700,R.Q.value=a==="rail"?1.5:.6,O.gain.setValueAtTime(Math.min(.3,.035+l*.018),B),O.gain.exponentialRampToValueAtTime(.001,B+.16),A.connect(R),R.connect(O),O.connect(_),A.start(),A.stop(B+.2),a==="rail"){let J=d.createOscillator(),at=d.createGain();J.type="triangle",J.frequency.setValueAtTime(330,B),J.frequency.exponentialRampToValueAtTime(140,B+.15),at.gain.setValueAtTime(.07,B),at.gain.exponentialRampToValueAtTime(.001,B+.2),J.connect(at),at.connect(_),J.start(),J.stop(B+.21)}},Df=function(){if(!ye)return;let a=ye,l=a.ctx.currentTime,d=ee==="running",_=x.speed,S=Math.min(5,Math.floor(_/9)),A=48+_*2.2+_%9*5;(!d||!Fn||An.sfxVolume<=0)&&a.rail?.stop(),a.master.gain.setTargetAtTime(Fn?.48*An.sfxVolume:0,l,.05);let R=d?.012+Math.min(.04,_*7e-4)+(Re.gas?.013:0):0;a.engineGain.gain.setTargetAtTime(R,l,.07),a.engineFilter.frequency.setTargetAtTime(550+_*25+(Re.gas?500:0),l,.12);let O=S!==a.gear?.8:1;a.gear=S,a.engine1.frequency.setTargetAtTime(A*O,l,.045),a.engine2.frequency.setTargetAtTime(A*1.5*O,l,.065),a.sub.frequency.setTargetAtTime(A*.5,l,.07),a.wind.gain.gain.setTargetAtTime(d?Math.pow(_/65,2)*.12:0,l,.15),a.wind.filter.frequency.setTargetAtTime(700+_*25,l,.12);let B=Math.abs(wn(x.yaw-x.velocityYaw)),J=Re.brake&&_>5,at=x.jump<.1?Math.min(1,(x.drifting?B*1.8:Math.max(0,B-.18)*2)+(J?.55:0)):0;a.tire.gain.gain.setTargetAtTime(d?at*.075:0,l,.045),a.tire.filter.frequency.setTargetAtTime(1300+_*24+Math.sin(Vs*40)*90,l,.05),a.turbo.gain.gain.setTargetAtTime(d?x.boostBlend*.075:0,l,.1),a.turbo.filter.frequency.setTargetAtTime(1600+x.boostBlend*2400,l,.12),d&&x.boostActive&&!a.oldBoost&&Vi(340,.17),a.oldBoost=x.boostActive,a.oldSpeed=_},Os=function(a){if(!Fn||!ye)return;let{ctx:l,master:d,noise:_}=ye,S=l.currentTime,A=l.createBufferSource(),R=l.createBiquadFilter(),O=l.createGain(),B=a==="nitro"||a==="combo",J=B?.48:a==="drift"?.12:.23;A.buffer=_,R.type=a==="land"?"lowpass":"bandpass",R.Q.value=.75,R.frequency.setValueAtTime(a==="land"?300:B?650:1500,S),R.frequency.exponentialRampToValueAtTime(B?5500:700,S+J),O.gain.setValueAtTime(.001,S),O.gain.linearRampToValueAtTime(B?.19:.1,S+.025),O.gain.exponentialRampToValueAtTime(.001,S+J),A.connect(R),R.connect(O),O.connect(d),A.start(),A.stop(S+J+.03),(a==="combo"||a==="small")&&Vi(a==="combo"?1080:820,.08)},tu=function(a){if(x.nitro>=2){x.energy=Math.min(99,x.energy+a);return}for(x.energy+=a;x.energy>=100&&x.nitro<2;)x.energy-=100,x.nitro++,_n("NITRO READY","\u6C2E\u6C14\u5DF2\u88C5\u74F6 \xB7 E \u91CA\u653E 3.2 \u79D2",1.2),Vi(1050,.09)},eu=function(a){x.jetHistory.push({kind:a,t:fi}),x.jetHistory=x.jetHistory.filter(d=>fi-d.t<2.5).slice(-3);let l=x.jetHistory.map(d=>d.kind).join("");(l==="CWW"||l==="WCW")&&(x.combo=l,x.comboTimer=1.3,x.mini=Math.max(x.mini,.88),l==="WCW"&&(x.nitroTime+=.35),_n(l+" \u55B7",l==="CWW"?"\u6C2E\u6C14 \u2192 \u5C0F\u55B7 \u2192 \u5C0F\u55B7 \xB7 \u9AD8\u901F\u51FA\u5F2F":"\u5C0F\u55B7 \u2192 \u6C2E\u6C14 \u2192 \u5C0F\u55B7 \xB7 \u5EF6\u957F\u55B7\u5C04",1.35),Os("combo"))},Uf=function(){ee!=="running"||x.nitro<1||x.nitroTime>0||(x.nitro--,x.nitroTime=3.2,_n("NITRO","\u6C2E\u6C14\u55B7\u5C04 \xB7 3.2 \u79D2",.8),eu("C"),Os("nitro"))},Ff=function(){ee!=="running"||x.smallJets<1||x.smallWindow<=0||x.jetCooldown>0||(x.smallJets--,x.jetCooldown=.18,x.mini=.72,x.smallWindow=x.smallJets?1.15:0,x.smallCount++,eu("W"),Os("small"),x.comboTimer<=0&&_n(x.smallCount>1?"DOUBLE BOOST":"MINI BOOST",x.smallCount>1?"\u53CC\u55B7 \xB7 \u8FDE\u7EED\u51FA\u5F2F\u52A0\u901F":"\u5C0F\u55B7 \xB7 \u53CA\u65F6\u63A5\u4E0B\u4E00\u55B7",.75))},hc=function(a=2,l="\u5C0F\u55B7\u5DF2\u5C31\u7EEA"){x.smallJets=Math.max(x.smallJets,a),x.smallWindow=1.5,x.smallCount=0,_n(l,"\u70B9 \u7A7A\u683C / Q\uFF0C\u6216\u91CD\u65B0\u6309 W \xB7 \u8FDE\u70B9\u4E24\u6B21\u53CC\u55B7",1.1),Vi(760,.06)},uc=function(){x.driftRewarded||x.driftCharge<.1||x.driftDuration<.11||(x.driftRewarded=!0,hc(x.driftCharge>.35?2:1,x.driftCharge>.35?"\u53CC\u55B7\u5DF2\u5C31\u7EEA":"\u5C0F\u55B7\u5DF2\u5C31\u7EEA"))},Xa=function(a=!0){x.drifting&&(a&&uc(),x.drifting=!1,x.driftPhase="exit",x.exitTime=.45,x.exitFromGrip=x.tireGrip||3.6,x.exitFromLimit=x.tireLimit||38,x.driftCharge=0,x.driftDuration=0,x.driftSide=0,x.driftReleasing=!1)},Of=function(a){x.drifting=!0,x.driftSide=a,x.driftCharge=0,x.driftDuration=0,x.driftPhase="entry",x.driftRewarded=!1,x.driftReleasing=!1,x.releaseAge=0,x.driftLatch=!0,x.driftCooldown=.16,x.exitTime=0,x.turnRate+=a*.38,x.gripRecovery=0,Os("drift")},Bf=function(a){x.prevPose={s:x.s,l:x.l,yaw:x.yaw,jump:x.jump};let l=Me(x.s),d=x.s,_=typeof qi=="number"?qi:(Re.right?1:0)-(Re.left?1:0);x.speed=Math.hypot(x.vS,x.vL);for(let zt of["pad","mini","nitroTime","smallWindow","jetCooldown","comboTimer","exitTime","driftCooldown","driftBuffer","lastSteerTime","jetInputBuffer","boostInputBuffer"])x[zt]=Math.max(0,x[zt]-a);x.smallWindow===0&&(x.smallJets=0),Gs=F(Gs,_,1-Math.exp(-a*(_?26:20)));let S=Gn.drift>0||Re.drift&&!x.prevDrift,A=_&&_!==x.prevSteer;Gn.drift=0,Re.drift||(x.driftLatch=!1),S&&(x.driftBuffer=.26),_&&(x.lastSteer=Math.sign(_),x.lastSteerTime=.2);let R=x.jump<.12,O=x.speed>.4?Math.atan2(x.vL,x.vS):x.yaw,B=wn(x.yaw-O),J=(Math.abs(_)>.12?Math.sign(_):0)||(x.lastSteerTime>0?x.lastSteer:Math.abs(B)>.07?Math.sign(B):0);if(!x.drifting&&x.driftCooldown===0&&R&&x.speed>5&&J&&(Re.drift&&(!x.driftLatch||A&&J!==x.lastDriftSide)||x.driftBuffer>0)?(Of(J),x.lastDriftSide=J,x.driftBuffer=0):x.drifting&&S&&x.driftDuration>.18&&(_*x.driftSide<0||x.driftReleasing)&&(uc(),x.driftReleasing=!0,x.releaseAge=Math.max(.18,x.releaseAge),x.driftBuffer=0),x.drifting){x.driftDuration+=a;let zt=_*x.driftSide<0;x.speed<3.5||!R?Xa(!1):(!Re.drift&&x.driftDuration>.14&&(x.driftReleasing=!0),x.driftReleasing&&(x.releaseAge+=a),x.driftPhase=x.driftReleasing?"release":zt?"counter":x.driftDuration<.18?"entry":"hold",(zt||x.driftReleasing)&&Math.abs(B)<.75&&uc(),(x.driftReleasing&&(x.releaseAge>.55||Math.abs(B)<.065&&x.releaseAge>.16)||zt&&Math.abs(B)<.075&&x.driftDuration>.22)&&Xa(!0))}(Gn.boost>0||Re.boost&&!x.prevBoost)&&(x.boostInputBuffer=.15),(Gn.small>0||Re.small&&!x.prevSmall||Re.gas&&!x.prevGas)&&(x.jetInputBuffer=.15),Gn.boost=0,Gn.small=0,x.boostInputBuffer>0&&x.nitro>0&&x.nitroTime<=0&&(Uf(),x.boostInputBuffer=0),x.jetInputBuffer>0&&x.smallJets>0&&x.jetCooldown<=0&&(Ff(),x.jetInputBuffer=0);let at=Nf.step(x,{steer:typeof qi=="number"?qi:_,gas:Re.gas||sn.autoGas&&!Re.brake||Xi&&!Re.brake,brake:Re.brake},a,{sensitivity:sn.sensitivity});Gs=x.steering,x.boostActive=x.nitroTime>0,x.boostBlend=F(x.boostBlend,at.boost?1:0,1-Math.exp(-a*7));let xt=P(1-l.curv*x.l,.45,1.55),pt=x.vS/xt*a;x.s=Math.max(-8,x.s+pt),x.l+=x.vL*a;let vt=Me(x.s),Ct=wn(vt.h-l.h),Dt=x.vS,St=x.vL;x.vS=Dt*Math.cos(Ct)+St*Math.sin(Ct),x.vL=-Dt*Math.sin(Ct)+St*Math.cos(Ct),x.yaw=wn(x.yaw-Ct);let ut=x.jump>0;(ut||x.vy>0)&&(x.vy-=17*a,x.jump=Math.max(0,x.jump+x.vy*a),x.jump<=0&&(x.vy=0,ut&&(hc(1,"\u843D\u5730\u55B7\u5DF2\u5C31\u7EEA"),Os("land")))),dn(a),gc-=x.vS*a/.4,fi+=a,Vs+=a,x.score+=Math.max(0,pt)*.85;let Tt=Math.abs(wn(x.yaw-x.velocityYaw));if(x.drifting&&Tt>.035&&x.speed>5&&Math.abs(x.l)<7){let zt=a*P((Tt+.025)*x.speed*.11,0,3);x.driftCharge+=zt,tu(zt*42),x.score+=a*35}ja=x.drifting,(Re.gas||sn.autoGas)&&!Re.brake&&x.speed<.7&&Math.abs(x.l)>5.8?x.stuckTime+=a:x.stuckTime=0,x.stuckTime>1.6&&vc(!0);for(let zt of ln.values())for(let Ut of zt.entities){if(Ut.kind==="cone"||Ut.kind==="barrier")continue;let bt=Ut.s;jt==="circuit"&&(bt+=Math.round((x.s-bt)/Pe)*Pe);let ue=jt==="circuit"?Math.max(0,Math.floor(bt/Pe)):0;Ut.hitLap===ue||bt<Math.min(d,x.s)-1.4||bt>Math.max(d,x.s)+1.4||Math.abs(x.l-Ut.l)>Ut.width||(Ut.kind==="coin"?(Ut.hitLap=ue,Ut.hit=!0,x.coins++,tu(3),x.score+=50,Vi(700+x.coins%5*80,.04)):Ut.kind==="pad"?(Ut.hitLap=ue,x.pad=1.55,_n("BOOST STRIP","\u52A0\u901F\u5E26 \xB7 \u4FDD\u6301\u8DEF\u7EBF",1),Os("nitro")):Ut.kind==="ramp"&&x.vS>7&&(Ut.hitLap=ue,x.vy=8,x.jump=.1,x.score+=120,hc(1,"\u7A7A\u55B7\u5DF2\u5C31\u7EEA")))}x.s>=x.checkpoint&&(x.checkpoint+=500,x.score+=500,_n("CHECKPOINT",Math.floor(x.s/500)*500+" m",1)),x.prevSteer=_,x.prevDrift=Re.drift,x.prevBoost=Re.boost,x.prevSmall=Re.small,x.prevGas=Re.gas,Gf(a),ou(),sp(a),jt==="circuit"&&x.s>=b()&&xc()},Bs=function(){let a={...Re};for(let l in Re)Re[l]=!1;for(let l of qa)to[l]&&(Re[to[l]]=!0);for(let l of Ya.values())Re[l]=!0;for(let l in Gn)Re[l]&&!a[l]&&Gn[l]++},su=function(){return Za=Math.imul(Za,1664525)+1013904223>>>0,Za/4294967296},Vf=function(a){let l=(Math.imul(a+419,2654435761)^ks)>>>0;return()=>(l=Math.imul(l,1664525)+1013904223>>>0,l/4294967296)},ru=function(a){return 1.7*Math.sin(a*.005)+.65*Math.sin(a*.017)},_c=function(a){if(jt!=="circuit")for(;Kn[Kn.length-1].s<a+8;){let l=Kn[Kn.length-1],d=l.s+4;d>mc&&(pc=-p/2+(su()-.5)*2.15,mc=d+90+su()*130);let _=P((pc-l.h)*.022,-.0175,.0175);Ka=F(Ka,_,.15);let S=l.h+Ka*4;Kn.push({s:d,p:[l.p[0]+Math.cos((S+l.h)*.5)*4,ru(d),l.p[2]+Math.sin((S+l.h)*.5)*4],h:S})}},Me=function(a){if(jt==="circuit")return $(a);_c(a);let l=Math.floor((a+80)/4),d=P(l-Dr,0,Kn.length-2),_=Kn[d],S=Kn[d+1],A=P((a-_.s)/4,0,1),R=F(_.h,S.h,A);return{p:_.p.map((B,J)=>F(B,S.p[J],A)),h:R,T:[Math.cos(R),0,Math.sin(R)],R:[-Math.sin(R),0,Math.cos(R)],curv:(S.h-_.h)/4,slope:(S.p[1]-_.p[1])/4}},Ie=function(a,l=0,d=0){let _=Me(a);return C(C(_.p,m(_.R,l)),[0,d,0])},$n=function(a,l,d,_,S,A){let R=L(z(v(d,l),v(S,l)));R[1]<0&&(R=m(R,-1)),a.add(ce([...l,...d,..._,...S],[...R,...R,...R,...R],[0,1,2,0,2,3]),Le,A,.06)},au=function(a){let l=a*40,d=Me(l).p,_=new Ce,S=Vf(a),A=jt==="circuit"?dc[$e().biome]:dc[(Math.floor(Math.max(0,l)/1e3)%3+3)%3],R=at=>v(at,d);for(let at=0;at<10;at++){let xt=l+at*4;if(jt==="circuit"&&xt>=Pe)break;let pt=Me(xt),vt=Me(jt==="circuit"?Math.min(xt+4,Pe):xt+4),Ct=(Dt,St,ut)=>R(C(C(Dt.p,m(Dt.R,St)),[0,ut,0]));$n(_,Ct(pt,-7,.04),Ct(pt,7,.04),Ct(vt,7,.04),Ct(vt,-7,.04),"#69728e");for(let Dt of[-1,1])$n(_,Ct(pt,Dt*7,.06),Ct(pt,Dt*7.65,.06),Ct(vt,Dt*7.65,.06),Ct(vt,Dt*7,.06),(a*10+at)%2?"#d1b5e0":"#f4eced"),$n(_,Ct(pt,Dt*7.65,-.02),Ct(pt,Dt*(jt==="circuit"?11:64),-.08),Ct(vt,Dt*(jt==="circuit"?11:64),-.08),Ct(vt,Dt*7.65,-.02),A.ground);if(jt==="circuit")for(let Dt of[-1,1])$n(_,Ct(pt,Dt*8.6,.06),Ct(pt,Dt*11,.06),Ct(vt,Dt*11,.06),Ct(vt,Dt*8.6,.06),"#d9d9e4"),$n(_,Ct(pt,Dt*11,.06),Ct(pt,Dt*11,-1.25-pt.p[1]),Ct(vt,Dt*11,-1.25-vt.p[1]),Ct(vt,Dt*11,.06),"#b5bbcb");if(jt==="circuit")for(let Dt of[-1,1])Nt(xt+2,Dt*20)&&($n(_,Ct(pt,Dt*11,-.12),Ct(pt,Dt*28,-.12),Ct(vt,Dt*28,-.12),Ct(vt,Dt*11,-.12),A.ground),$n(_,Ct(pt,Dt*28,-.12),Ct(pt,Dt*28,-1.25-pt.p[1]),Ct(vt,Dt*28,-1.25-vt.p[1]),Ct(vt,Dt*28,-.12),"#bdc4c7"));if(at%3===0)for(let Dt of[-2.33,2.33]){let St=Ie(xt+1.5,Dt,.061);_.add(ne(2.2,.015,.07,.004),Y(R(St),[1,1,1],[0,-pt.h,0]),"#e0e4e8")}}for(let at of[-1,1]){let xt=Array.from({length:11},(pt,vt)=>R(Ie(l+vt*4,at*8.1,.72)));rt(_,xt,.07,"#b7c6d9"),rt(_,Array.from({length:11},(pt,vt)=>R(Ie(l+vt*4,at*8.1,.4))),.045,"#c7d5e2");for(let pt=0;pt<5;pt++){let vt=l+3+pt*8;if(jt==="circuit"&&vt>Pe)break;let Ct=R(Ie(vt,at*8.1,0));k(_,Ct,C(Ct,[0,.84,0]),.055,"#9caec2"),f(_,C(Ct,[0,.75,0]),[.12,.15,.19],pt%2?"#f7bbcf":"#fff1b9",.02)}}let O=[];function B(at,xt,pt){if(jt==="circuit"&&xt>Pe-20)return;let vt=at==="coin"?lc:at==="pad"?za:at==="ramp"?ka:at==="cone"?Un:Ve;O.push({kind:at,s:xt,l:pt,node:new _e(vt),hit:!1,width:at==="barrier"?1.5:at==="cone"?.85:at==="coin"?1.12:1.9})}if(a>=2){let at=Math.floor(S()*3),xt=[-4.2,0,4.2],pt=jt==="circuit"?Math.abs(Me(l+22).curv)<.013?.42:.12:a<7?.55:.85;if(S()<pt){let vt=(at+1+Math.floor(S()*2))%3;B(S()<.75?"cone":"barrier",l+22,jt==="circuit"?vt===1?-5.5:Math.sign(xt[vt])*5.5:xt[vt]),jt==="endless"&&a>10&&S()<.28&&B("cone",l+22,xt[3-at-vt])}for(let vt=0;vt<4;vt++)B("coin",l+7+vt*7,xt[at]);a%4===0?B("pad",l+14,xt[at]):a>8&&a%7===0&&B("ramp",l+14,xt[at])}if(a===0){for(let pt=0;pt<12;pt++){let vt=Ie(0,-7+pt*1.16,.075),Ct=Me(0);_.add(ne(.9,.015,1.12,.003),Y(R(vt),[1,1,1],[0,-Ct.h,0]),pt%2?"#e8e7ed":"#424b66")}for(let pt of[-1,1]){let vt=R(Ie(0,pt*7.75,0));k(_,vt,C(vt,[0,5,0]),.12,At)}let at=R(Ie(0,-7.75,5)),xt=R(Ie(0,7.75,5));k(_,at,xt,.16,At);for(let pt=0;pt<7;pt++)I(_,R(Ie(0,-4.5+pt*1.5,5)),[.24,.24,.24],pt%2?"#f9d997":"#bfd9f4",!0)}let J=new _e(_.finish());return J.add(Cf(a,d,S)),{k:a,origin:d,node:J,entities:O}},ou=function(){if(jt==="circuit"){let _=Math.ceil(Pe/40);for(let S=0;S<_;S++)ln.has(S)||ln.set(S,au(S));return}let a=Math.max(-2,Math.floor(x.s/40)-3),l=Math.floor(x.s/40)+9;_c((l+1)*40);for(let _=a;_<=l;_++)ln.has(_)||ln.set(_,au(_));for(let[_,S]of ln)_<a&&(S.node.mesh.dispose(),ln.delete(_));let d=Math.floor((x.s-210+80)/4);if(d>Dr){let _=Math.min(d-Dr,Kn.length-10);Kn.splice(0,_),Dr+=_}},ms=function(){qa.clear(),Ya.clear();for(let a in Gn)Gn[a]=0;for(let a in Re)Re[a]=!1;for(let a of document.querySelectorAll(".touch button"))a.classList.remove("held")},jn=function(a=!1){if(jt==="circuit"?(it(),ks=Qe==="coast-reborn"?73121:95276):a&&(ks=(Date.now()>>>0)%999999||72319),fc&&ln.size)nu.set(fc,ln);else for(let l of ln.values())l.node.mesh.dispose();ln=jt==="circuit"?nu.get(Qe)||new Map:new Map,fc=jt==="circuit"?Qe:null;for(let l of ln.values())for(let d of l.entities){d.hit=!1,delete d.hitLap;for(let _ of["ds","dl","vS","vL","angle","omega","tilt"])d[_]=0}Kn=[{s:-80,p:[0,ru(-80),80],h:-p/2}],Dr=0,pc=-p/2,mc=115,Ka=0,Za=ks,Object.assign(x,{s:0,l:0,speed:0,steering:0,vS:0,vL:0,spin:0,contactSound:0,yaw:0,velocityYaw:0,energy:0,nitro:1,nitroTime:0,turnRate:0,driftDuration:0,driftLatch:!1,driftRewarded:!1,driftReleasing:!1,releaseAge:0,gripRecovery:0,driftCooldown:0,driftBuffer:0,lastSteer:0,lastSteerTime:0,prevSteer:0,lastDriftSide:0,jetInputBuffer:0,boostInputBuffer:0,tireGrip:10.5,tireLimit:68,exitFromGrip:3.6,exitFromLimit:38,driftPhase:"grip",exitTime:0,smallJets:0,smallWindow:0,smallCount:0,jetCooldown:0,jetHistory:[],combo:"",comboTimer:0,prevDrift:!1,prevBoost:!1,prevSmall:!1,prevGas:!1,coins:0,score:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,stuckTime:0,timePenalty:0}),gc=0,fi=0,Vs=0,ja=!1,Gs=0,ds=0,zs=60,fs=null,Lr=0;for(let l of ps)l.life=0;for(let l of wi)l.life=0;ms(),_c(420),ou(),Ws=null,Or=null,gs=null,x.prevPose=null,U("seedText").textContent=String(ks).padStart(6,"0"),U("bestText").textContent=Fr.toLocaleString(),U("rerollBtn").hidden=jt==="circuit",U("endRunBtn").hidden=jt==="circuit",U("uploadStatus").textContent="",Ur=0,Nr=0,U("toast").classList.remove("show"),U("drift").classList.remove("on"),U("modeDistance").textContent=Math.round(Pe)+" m / \u5708 \xB7 "+$e().laps+" \u5708"},_n=function(a,l="",d=2){U("toastTitle").textContent=a,U("toastSub").textContent=l,U("toast").classList.add("show"),Nr=d,U("status").textContent=a+" "+l},Hs=function(a=!1){if(Xi=!1,typeof et<"u"&&et.room){Xr();return}jn(a),ee="countdown",Hi=3.05,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("helpPanel").hidden=!0,U("musicPanel").hidden=!0,U("rankPanel").hidden=!0,Gi.classList.remove("menu-open"),U("countdown").hidden=!1,U("countdown").textContent="3",Wa(),ye&&ye.ctx.resume().catch(()=>{}),Au(),U("status").textContent="\u51C6\u5907\u8D77\u8DD1\u3002W \u52A0\u901F\uFF0CAD \u8F6C\u5411\uFF0CShift \u6F02\u79FB\uFF0C\u7A7A\u683C\u5C0F\u55B7\uFF0CE \u6C2E\u6C14\u3002"},Wi=function(){if(typeof et<"u"&&et.room&&ee==="running"){ms(),_n("\u5728\u7EBF\u6BD4\u8D5B\u7EE7\u7EED\u8FDB\u884C","\u8054\u673A\u4E0D\u6682\u505C \xB7 \u70B9\u51FB\u623F\u95F4\u53EF\u9000\u51FA",1.5);return}ee==="running"?(ee="paused",ms(),U("paused").hidden=!1,U("status").textContent="\u6E38\u620F\u5DF2\u6682\u505C\u3002"):ee==="paused"&&(ee="running",U("paused").hidden=!0,$a=performance.now())},xc=function(){if(ee!=="finished"){ee="finished",ms(),Fr=Math.max(Fr,Math.floor(x.s)),Qa=Math.max(Qa,Math.floor(x.score));try{localStorage.setItem("star-rush-best-distance",String(Fr)),localStorage.setItem("star-rush-best-score",String(Qa))}catch{}U("resultDistance").textContent=jt==="circuit"?Ft(Et()):Math.floor(x.s).toLocaleString()+" m",U("resultMainLabel").textContent=jt==="circuit"?$e().laps+" \u5708\u7528\u65F6":"\u672C\u6B21\u91CC\u7A0B",U("resultScore").textContent=Math.floor(x.score).toLocaleString(),U("resultBest").textContent=x.coins+" \u679A",U("resultBestLabel").textContent="\u6536\u96C6\u91D1\u5E01",U("resultNote").textContent=jt==="circuit"?"\u51B2\u7EBF\u5B8C\u6210\uFF01\u53EF\u4EE5\u4E0A\u4F20\u6210\u7EE9\uFF0C\u548C\u670B\u53CB\u6BD4\u8F83\u5F53\u524D\u8D5B\u9053\u7684\u5B8C\u8D5B\u7528\u65F6\u3002":"\u672C\u6B21\u81EA\u7531\u8DD1\u5DF2\u7ED3\u7B97\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u91CC\u7A0B\u6210\u7EE9\u3002",U("finished").hidden=!1,Gi.classList.add("menu-open"),U("status").textContent="\u672C\u5C40\u7ED3\u675F\u3002",kr={id:crypto.randomUUID(),mode:jt,track:jt==="circuit"?Pr:"endless-reborn",seed:ks,distance:Math.round(Math.max(0,x.s)),timeMs:Math.round(Et()*1e3),score:Math.floor(x.score)},ys||Jf(kr),U("submitRun").disabled=!1,U("submitRun").textContent="\u4E0A\u4F20\u672C\u6B21\u6210\u7EE9",rp(),Vi(1100,.3)}},lu=function(a,l=5,d=[0,1,0]){let _=0;for(let S of wi)S.life<=0&&_++<l&&(S.life=.35+Math.random()*.4,S.p=[...a],S.v=C(d,[(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3]),S.size=.04+Math.random()*.08)},vc=function(a=!1){if(ee!=="running"&&ee!=="paused")return;let l=[0,-3.7,3.7],d=0;for(let _ of l){let S=!0;for(let A of ln.values())for(let R of A.entities)(R.kind==="cone"||R.kind==="barrier")&&Math.abs(Z(R.s,x.s))<7&&Math.abs(R.l-_)<R.width+1.1&&(S=!1);if(S){d=_;break}}x.prevPose=null,x.l=d,x.yaw=0,x.turnRate=0,x.velocityYaw=0,x.lateralSpeed=0,x.speed=P(x.speed,2,12),x.vS=x.speed,x.vL=0,x.spin=0,x.stuckTime=0,x.timePenalty=(x.timePenalty||0)+2,x.jump=0,x.vy=0,x.drifting=!1,x.driftSide=0,x.driftCharge=0,x.exitTime=0,x.driftReleasing=!1,x.driftBuffer=0,ja=!1,fs=null,_n(a?"\u5DF2\u81EA\u52A8\u8131\u56F0":"\u8D5B\u8F66\u5DF2\u56DE\u6B63","\u7EE7\u7EED\u6309 W \u52A0\u901F \xB7 \u56DE\u6B63\u8BA1\u65F6 +2 \u79D2",1.5)},Gf=function(a){for(let R of ps)R.life=Math.max(0,R.life-a);let l=Math.abs(wn(x.yaw-x.velocityYaw));if(!x.drifting&&!(x.exitTime>0&&l>.06)||x.speed<4||x.jump>.08){fs=null,Lr=0;return}if(Lr+=a,Lr<.025)return;Lr=0;let d=Me(x.s),_=Ie(x.s,x.l,.085),S=Y(_,[.97,.97,.97],[0,-d.h-x.yaw,Math.atan(d.slope)]),A=[-1,1].map(R=>lt(S,[-1.02,0,R*.83]));if(fs)for(let R=0;R<2;R++){let O=v(A[R],fs[R]),B=Math.hypot(O[0],O[2]);if(B>.05&&B<3){let J=ps[kf++%ps.length];J.p=m(C(A[R],fs[R]),.5),J.length=B+.035,J.angle=-Math.atan2(O[2],O[0]),J.life=2.5}}fs=A,l>.15&&lu(Ie(x.s-1,x.l,.2),1,m(d.T,-1.5))},Hf=function(a,l){for(let d of wi)d.life<=0||(d.life-=a,d.v[1]-=a*5,d.p=C(d.p,m(d.v,a)),d.node.local=Y(v(d.p,l),[d.size,d.size,d.size]),G.add(d.node))},Wf=function(a,l){let d=ee==="running"&&x.prevPose?P(ds/Ja,0,1):1,_=x.prevPose||x,S=F(_.s,x.s,d),A=F(_.l,x.l,d),R=_.yaw+wn(x.yaw-_.yaw)*d,O=F(_.jump,x.jump,d),B=Me(S),J=B.p,at=Ie(S,A,.06+O),xt=v(at,J),pt=Math.atan(B.slope);ft.tint=tn.paint,ft.local=Y(xt,[.97,.97,.97],[0,-B.h-R,pt]),G.children=[ft],If(J,a),jt==="circuit"&&(eo.mesh=Yf[$e().biome],eo.local=V(-J[0],-.9-J[1],-J[2]),eo.shadow=!1,G.add(eo));for(let ut of ln.values())if(!(jt==="circuit"&&Math.abs(Z(ut.k*40,x.s))>265)){ut.node.local=V(...v(ut.origin,J)),ut.node.shadow=Math.abs(Z(ut.k*40,x.s))<90,G.add(ut.node);for(let Tt of ut.entities){if(Tt.kind==="coin"&&Tt.hitLap===Math.max(0,Math.floor(x.s/Pe)))continue;let zt=Me(Tt.s+(Tt.ds||0)),Ut=Ie(Tt.s+(Tt.ds||0),Tt.l+(Tt.dl||0),Tt.kind==="coin"?1.05+.12*Math.sin(a*3+Tt.s):.08),bt=Y(v(Ut,J),[1,1,1],[0,-zt.h+(Tt.kind==="coin"?a*2:-(Tt.angle||0)),Math.atan(zt.slope)]);Tt.node.local=Tt.kind==="cone"&&Tt.tilt?D(bt,D(V(0,.34,0),D(K(Tt.tilt),V(0,-.25,0)))):bt,Tt.node.shadow=Math.abs(Z(Tt.s,x.s))<65,G.add(Tt.node)}}Ga(a,l,Gs),Hf(ee==="running"?l:0,J);for(let ut of ps)ut.life>0&&(ut.node.local=Y(v(ut.p,J),[ut.length,1,Math.min(1,ut.life)*1.2],[0,ut.angle,0]),G.add(ut.node));let vt=ee==="ready"||ee==="finished",Ct,Dt;if(vt){let ut=.15*Math.sin(a*.16);Ct=C(at,C(m(B.T,5.6+ut),C(m(B.R,7.1),[0,3.5,0]))),Dt=C(at,C(m(B.R,-1.25),[0,.8,0]))}else{let ut=Hn===1?12.5:Hn===2?5.8:8.5,Tt=Hn===1?9:Hn===2?2.9:4.5,zt=B.h+x.velocityYaw;gs===null?gs=zt:gs+=wn(zt-gs)*(1-Math.exp(-l*8));let Ut=[Math.cos(gs),0,Math.sin(gs)],bt=C(m(B.T,x.vS/18),m(B.R,x.vL/18));Ct=C(C(at,bt),C(m(Ut,-ut),[0,Tt,0])),Dt=C(C(at,bt),C(m(Ut,10),[0,1+O*.2,0]))}let St=1-Math.exp(-l*(vt?2.6:18));return Ws?(Ws=Ws.map((ut,Tt)=>F(ut,Ct[Tt],St)),Or=Or.map((ut,Tt)=>F(ut,Dt[Tt],St))):(Ws=Ct,Or=Dt),{eye:v(Ws,J),target:v(Or,J),origin:J}},Xf=function(){if(!Qt)return;let a=yc.width,l=yc.height,d=Me(x.s),_=.86;if(jt==="circuit"){Qt.clearRect(0,0,a,l);let O=Ir,B=Math.min((a-45)/(O.maxX-O.minX),(l-30)/(O.maxZ-O.minZ)),J=pt=>[a*.5+(pt[0]-(O.minX+O.maxX)*.5)*B,l*.5+(pt[2]-(O.minZ+O.maxZ)*.5)*B];Qt.lineJoin="round";for(let[pt,vt]of[["#737e9d",13],["#dfe8f3",8]]){Qt.strokeStyle=pt,Qt.lineWidth=vt,Qt.beginPath();for(let Ct=0;Ct<mn.length;Ct+=6){let Dt=J(mn[Ct].p);Ct?Qt.lineTo(...Dt):Qt.moveTo(...Dt)}Qt.closePath(),Qt.stroke()}if(typeof Wn<"u")for(let pt of Wn){let vt=J(Me(pt.s).p);Qt.fillStyle=pt.color,Qt.beginPath(),Qt.arc(vt[0],vt[1],3.4,0,y),Qt.fill()}if(typeof et<"u"&&et.room){let pt=0;for(let vt of et.peers.values())if(vt.position){let Ct=J(Me(vt.position.s).p);Qt.fillStyle=so[pt++%so.length],Qt.beginPath(),Qt.arc(Ct[0],Ct[1],4.5,0,y),Qt.fill()}}let at=J(d.p),xt=J(mn[0].p);Qt.fillStyle="#fff7dc",Qt.fillRect(xt[0]-3,xt[1]-5,6,10),Qt.save(),Qt.translate(...at),Qt.rotate(d.h+Math.PI/2),Qt.fillStyle="#ffe68b",Qt.beginPath(),Qt.moveTo(0,-8),Qt.lineTo(-5,5),Qt.lineTo(5,5),Qt.closePath(),Qt.fill(),Qt.restore();return}Qt.clearRect(0,0,a,l),Qt.strokeStyle="#c0d7e91c",Qt.lineWidth=1;for(let O=20;O<a;O+=30)Qt.beginPath(),Qt.moveTo(O,0),Qt.lineTo(O,l),Qt.stroke();for(let O=15;O<l;O+=30)Qt.beginPath(),Qt.moveTo(0,O),Qt.lineTo(a,O),Qt.stroke();let S=[];for(let O=-15;O<=205;O+=4){let B=v(Me(x.s+O).p,d.p);S.push([a*.5+N(B,d.R)*_,l*.88-N(B,d.T)*_])}for(let[O,B]of[["#7a85a3",15],["#dce8f0",10]]){Qt.strokeStyle=O,Qt.lineWidth=B,Qt.lineJoin="round",Qt.beginPath();for(let J=0;J<S.length;J++)J?Qt.lineTo(...S[J]):Qt.moveTo(...S[J]);Qt.stroke()}Qt.fillStyle="#ffe68b",Qt.beginPath();let A=a*.5+x.l*_,R=l*.88;Qt.moveTo(A,R-10),Qt.lineTo(A-7,R+7),Qt.lineTo(A+7,R+7),Qt.closePath(),Qt.fill()},qf=function(a){if(Mc+=a,Mc<.06)return;Mc=0,pi.distance.textContent=Math.floor(x.s).toLocaleString(),pi.score.textContent=String(Math.floor(x.score)).padStart(5,"0"),pi.coins.textContent=String(x.coins).padStart(2,"0"),pi.speed.textContent=Math.round(x.speed*3.6),U("speedbar").style.width=Math.min(100,x.speed/83*100)+"%",pi.energyText.textContent=x.nitro+" \u74F6 / 2 \xB7 "+(x.nitroTime>0?x.nitroTime.toFixed(1)+"s":Math.floor(x.energy)+"%"),U("energyBar").style.width=x.energy+"%";let l=x.boostActive||x.pad>0||x.mini>0;pi.gear.textContent=l?"NITRO / BOOST":x.jump>0?"AIR TIME":x.drifting?"DRIFT MODE":x.speed<1?"READY TO RUSH":"SPORT / "+Math.max(1,Math.min(6,Math.ceil(x.speed/8))),U("boostfx").classList.toggle("on",l),U("raceTime").textContent=Ft(Et()),U("lapLabel").textContent=jt==="circuit"?"LAP "+Math.min($e().laps,Math.floor(Math.max(0,x.s)/Pe)+1)+" / "+$e().laps+" \xB7 \u5269\u4F59 "+Math.max(0,Math.ceil(b()-x.s))+" m":"\u65E0\u5C3D\u6A21\u5F0F \xB7 \u81EA\u7531\u7ADE\u901F",U("drift").classList.toggle("on",x.drifting||x.smallJets>0),U("driftBar").style.width=(x.smallJets>0?Math.min(100,x.smallWindow/1.5*100):Math.min(100,x.driftCharge/.55*100))+"%",pi.driftText.textContent=x.smallJets>0?"\u5C0F\u55B7 \xD7"+x.smallJets:x.driftPhase==="entry"?"\u8F7B\u70B9\u8D77\u6F02":x.driftPhase==="counter"?"\u53CD\u6253\u6536\u8F66":x.driftPhase==="release"?"\u60EF\u6027\u6536\u6F02":"\u6F02\u79FB\u96C6\u6C14";for(let _ of document.querySelectorAll("[data-key=small]"))_.classList.toggle("smalljet-ready",x.smallJets>0);U("jetCount").textContent=x.smallJets>0?"\u5C0F\u55B7 \xD7"+x.smallJets+" \xB7 "+x.smallWindow.toFixed(1)+"s":x.drifting?"\u6F02\u79FB\u96C6\u6C14\u4E2D":"\u7A7A\u683C / Q \u5C0F\u55B7";let d=Cu(x.s);pi.turnText.textContent=d.direction===0?"\u524D\u65B9\u76F4\u9053":d.direction>0?"\u524D\u65B9\u53F3\u5F2F":"\u524D\u65B9\u5DE6\u5F2F",pi.turnArrowPath.setAttribute("d",d.direction===0?"M12 21V3M5 10L12 3L19 10":d.direction>0?"M5 21V8H21M14 1L21 8L14 15":"M19 21V8H3M10 1L3 8L10 15"),Pi==="practice"&&!et.room&&Ru(d),pi.biome.textContent=jt==="circuit"?Ef(x.s).name:dc[(Math.floor(x.s/1e3)%3+3)%3].name,Xf()},cu=function(a,l=Le,d=!0,_=null,S=1){a.world=D(l,a.local);let A=d&&a.shadow,R=a.tint||_,O=a.opacity??S;a.mesh&&Sc.push({mesh:a.mesh,m:a.world,shadow:A,tint:R,opacity:O});for(let B of a.children)cu(B,a.world,A,R,O)},hu=function(){Br=Math.max(1,i.clientWidth),zr=Math.max(1,i.clientHeight);let a=Math.min(devicePixelRatio||1,1.5),l=Math.round(Br*a),d=Math.round(zr*a);(i.width!==l||i.height!==d)&&(i.width=l,i.height=d)},uu=function(a){if(!h&&c.renderer.getContext().isContextLost())return;let l=Math.min(.1,Math.max(0,(a-$a)/1e3));if($a=a,ee==="countdown"){Hi=typeof et<"u"&&et.room&&et.startAt?(et.startAt-(Date.now()+et.offset))/1e3:Hi-l;let S=Hi>.05?String(Math.ceil(Hi)):"GO!";U("countdown").textContent!==S&&(U("countdown").textContent=S,Vi(Hi>.05?400:900,.12)),Hi<=0&&(U("countdown").hidden=!0,ee="running",fi=typeof et<"u"&&et.room&&et.startAt?Math.max(0,(Date.now()+et.offset-et.startAt)/1e3):0,_n("LET\u2019S RUSH!","W \u52A0\u901F \xB7 SHIFT \u6F02\u79FB \xB7 \u7A7A\u683C\u5C0F\u55B7 \xB7 E \u6C2E\u6C14",2))}if(typeof yu=="function"&&yu(a,l),lp(l),ee==="running"){ds+=l;let S=0;for(;ds>=Ja&&ee==="running"&&S++<12;)Bf(Ja),ds-=Ja;S>=12&&(ds=0)}else ds=0;(ee==="ready"||ee==="finished")&&(Vs+=l*.25);let d=Wf(Vs,l);ap(d.origin,l),typeof Mu=="function"&&Mu(d.origin,l),Nr>0&&(Nr-=l,Nr<=0&&U("toast").classList.remove("show")),Ur=Math.max(0,Ur-l),U("hitflash").style.opacity=Math.min(.24,Ur*.6),Df(),typeof gu=="function"&&gu(),Sc.length=0,cu(G),zs=F(zs,ee==="ready"||ee==="finished"?45:sn.fov+x.boostBlend*3,1-Math.exp(-l*4));let _=D(ot(zs*p/180,Br/zr,.12,850),tt(d.eye,d.target));ep(_),h?M(d):Rc=c.render(Sc,d,Br,zr,zs,sn),op(a,l),qf(l),iu||(iu=!0,e.classList.add("done")),requestAnimationFrame(uu)},du=function(){try{return JSON.parse(localStorage.getItem("star-rush-runs-reborn")||"[]")}catch{return[]}},Jf=function(a){try{let l=du();l.push({...a,name:localStorage.getItem("star-rush-name")||"\u672C\u673A\u8F66\u624B"}),localStorage.setItem("star-rush-runs-reborn",JSON.stringify(l.slice(-100)))}catch{}},Zf=function(a,l){let d=document.createElement("tr"),_=l.mode==="circuit"?Ft(l.timeMs/1e3):l.distance.toLocaleString()+" m";for(let S of[String(a+1).padStart(2,"0"),l.name,_,Math.round(l.score).toLocaleString()]){let A=document.createElement("td");A.textContent=S,d.appendChild(A)}return d},Kf=function(){_s=Qe,U("rankTrack")&&(U("rankTrack").value=_s),Ai=jt,Ei=!1,qs("rankPanel"),Vr()},fu=function(a){jt=a;for(let[l,d]of[["circuitMode","circuit"],["endlessMode","endless"]])U(l).classList.toggle("selected",a===d),U(l).setAttribute("aria-pressed",String(a===d));jn(!0),U("trackPicker").hidden=a!=="circuit",U("trackDescription").hidden=a!=="circuit"},pu=function(a){if(Zn[a]){if(typeof et<"u"&&et.room){_n("\u5DF2\u5728\u8054\u673A\u623F\u95F4","\u9000\u51FA\u623F\u95F4\u540E\u53EF\u66F4\u6362\u5730\u56FE",1.5);return}Qe=a,jn(!1),Gr()}},Gr=function(){for(let a of document.querySelectorAll("[data-track]"))a.classList.toggle("selected",a.dataset.track===Qe),a.setAttribute("aria-pressed",String(a.dataset.track===Qe));U("trackDescription").textContent=$e().description,U("modeDistance").textContent=Math.round(Pe)+" m / \u5708 \xB7 "+$e().laps+" \u5708"},Tc=function(){try{localStorage.setItem("star-rush-audio",JSON.stringify(An))}catch{}},Hr=function(){if(Wa(),!ye)return!1;if(ye.ctx.state==="suspended"&&ye.ctx.resume().catch(()=>{}),se.bus)return!0;se.bus=ye.ctx.createGain();let a=ye.ctx.createDynamicsCompressor();return a.threshold.value=-18,a.ratio.value=3,se.bus.connect(a),a.connect(ye.ctx.destination),se.next=ye.ctx.currentTime+.08,!0},xs=function(a,l,d,_,S,A=0){let R=ye.ctx,O=R.createOscillator(),B=R.createGain();O.type=_,O.frequency.setValueAtTime(a,l),A&&O.frequency.exponentialRampToValueAtTime(A,l+d),B.gain.setValueAtTime(.001,l),B.gain.exponentialRampToValueAtTime(S,l+.008),B.gain.exponentialRampToValueAtTime(.001,l+d),O.connect(B),B.connect(se.bus),O.start(l),O.stop(l+d+.02)},mu=function(a,l,d,_){let S=ye.ctx,A=S.createBufferSource(),R=S.createBiquadFilter(),O=S.createGain();A.buffer=ye.noise,R.type="highpass",R.frequency.value=d,O.gain.setValueAtTime(_,a),O.gain.exponentialRampToValueAtTime(.001,a+l),A.connect(R),R.connect(O),O.connect(se.bus),A.start(a),A.stop(a+l+.02)},$f=function(a,l){let d=.10135135135135136,_=Math.floor(a/16),S=a%16,A=[45,41,48,43],R=A[Math.floor(_/2)%4],O=at=>440*Math.pow(2,(at-69)/12);if(S%4===0&&xs(135,l,.18,"sine",.38,42),(S===4||S===12)&&(mu(l,.13,1200,.12),xs(180,l,.07,"triangle",.1,70)),S%2===0&&mu(l,.035,7500,S%4===2?.065:.04),S%2===0){let at=R+(S===14?12:0);xs(O(at-12),l,d*1.5,"sawtooth",.045),xs(O(at-12),l,d*1.5,"sine",.1)}let B=[0,7,12,15,12,7,10,7],J=B[Math.floor(S/2)%8];if(S%2===1&&xs(O(R+24+J),l,.16,"triangle",.045),S===0)for(let at of[0,3,7])xs(O(R+12+at),l,d*12,"triangle",.018);if(_%4>=2&&S%4===2){let at=[12,15,19,22,19,15,14,10][Math.floor(S/4)+4*(_%2)];xs(O(R+24+at),l,d*2.5,"sine",.055)}},gu=function(){if(!ye||!Hr())return;let a=An.enabled&&Fn&&!document.hidden&&se.mode!=="classic",l=ye.ctx.currentTime;if(se.bus.gain.setTargetAtTime(a?An.volume*.42:0,l,.07),se.mode==="synth"&&a){se.next<l-.15&&(se.next=l+.05);let d=0;for(;se.next<l+.18&&d++<8;)$f(se.step++,se.next),se.next+=60/148/4}se.element&&(a&&se.mode==="local"?se.element.paused&&se.element.play().catch(()=>{}):se.element.paused||se.element.pause())},no=function(a){se.mode=a,Hr(),U("synthMusic").classList.toggle("selected",a==="synth"),U("classicMusic").classList.toggle("selected",a==="classic"),U("classicPlayer").hidden=a!=="classic",U("localMusicControls").hidden=a!=="local",U("musicToggle").hidden=a==="classic",a==="classic"?(U("spotifyPlayer").src||(U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"),U("nowPlaying").textContent="\u7ECF\u5178\u5916\u8BED\u6B4C\u5355 \xB7 \u5728\u4E0B\u65B9\u64AD\u653E\u5668\u70B9\u51FB\u64AD\u653E"):(U("spotifyPlayer").removeAttribute("src"),U("nowPlaying").textContent=a==="local"?se.files[se.index]?.name||"\u8BF7\u9009\u62E9\u97F3\u4E50\u6587\u4EF6":"STARLINE \xB7 \u539F\u521B\u7535\u5B50\u7ADE\u901F\u914D\u4E50")},io=function(a){!se.files.length||!Hr()||(se.index=(a+se.files.length)%se.files.length,se.element||(se.element=new Audio,se.element.preload="auto",ye.ctx.createMediaElementSource(se.element).connect(se.bus),se.element.onended=()=>io(se.index+1),se.element.onerror=()=>{U("nowPlaying").textContent="\u6B64\u97F3\u9891\u65E0\u6CD5\u89E3\u7801\uFF0C\u8BF7\u6362\u4E00\u9996 MP3 / OGG / WAV"}),se.element.pause(),se.url&&URL.revokeObjectURL(se.url),se.url=URL.createObjectURL(se.files[se.index]),se.element.src=se.url,An.enabled=!0,no("local"),se.element.play().catch(()=>{U("nowPlaying").textContent="\u70B9\u51FB\u201C\u64AD\u653E\u97F3\u4E50\u201D\u540E\u7EE7\u7EED"}),U("musicToggle").textContent="\u6682\u505C\u97F3\u4E50")},qs=function(a){let l=ee==="running"&&!(typeof et<"u"&&et.room);Wr=Wr||l,l&&Wi();for(let d of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])d!==a&&(U(d).hidden=!0);ms(),U(a).hidden=!1},vs=function(a){U(a).hidden=!0,Wr&&ee==="paused"&&Wi(),Wr=!1},wc=function(a){function l(S){let A=new _e(S.mesh);A.local=new Float32Array(S.local),A.shadow=S.shadow;for(let R of S.children)A.add(l(R));return A}let d=l(ft),_=d.add(new _e(jf[a%4]));return{root:d,marker:_,spin:0}},Qf=function(){return{s:x.s,l:x.l,vS:x.vS,vL:x.vL,yaw:x.yaw,jump:x.jump,mini:x.mini,nitroTime:x.nitroTime,paint:tn.paint,time:Et(),finished:ee==="finished"}},_u=function(){for(let a of et.peers.values())a.label.remove();et.peers.clear()},Ec=function(a){let l=et.room?.status;et.room=a.room,et.members=a.members,et.ready=!!a.members.find(_=>_.id===et.id)?.ready,et.errors=0;let d=new Set(a.members.map(_=>_.id));for(let[_,S]of et.peers)d.has(_)||(S.label.remove(),et.peers.delete(_));for(let _ of a.members){if(_.id===et.id)continue;let S=et.peers.get(_.id);if(!S){let R=document.createElement("div");R.className="peer-label",R.textContent=_.name,Gi.appendChild(R),S={...wc(et.peers.size),label:R,name:_.name,history:[],position:null,lastStamp:0},et.peers.set(_.id,S)}S.label.textContent=_.name,S.name=_.name;let A=_.snapshot;A&&Number.isFinite(A.s)&&_.updatedAt>S.lastStamp&&(S.lastStamp=_.updatedAt,S.history.push({...A,t:_.updatedAt}),S.history.length>12&&S.history.shift())}if(et.room.status==="racing"&&et.room.startAt!==et.runTag){et.runTag=et.room.startAt,et.startAt=et.room.startAt,Qe=et.room.track,jt="circuit",jn(!1),Gr(),Au();for(let S of et.peers.values())S.history=[],S.position=null;let _=a.members.findIndex(S=>S.id===et.id);x.l=(_%2?1:-1)*1.9,x.s=-Math.floor(_/2)*3.8,ee="countdown",Hi=(et.startAt-(Date.now()+et.offset))/1e3,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("roomPanel").hidden=!0,U("rankPanel").hidden=!0,Gi.classList.remove("menu-open"),U("countdown").hidden=!1,Wa(),ye&&ye.ctx.resume().catch(()=>{})}if(et.room.status==="lobby"&&l&&l!=="lobby"){et.startAt=0,et.runTag=0,ee="ready",Qe=et.room.track,jt="circuit",jn(!1),Gr(),U("countdown").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Gi.classList.add("menu-open");for(let _ of et.peers.values())_.history=[]}Cc(),ee==="finished"&&Pu()},Cc=function(){let a=!!et.room;if(U("roomActions").hidden=!a,U("networkHud").hidden=!a,U("createRoom").disabled=a,U("joinRoom").disabled=a,U("roomCode").disabled=a,U("circuitMode").disabled=a,U("endlessMode").disabled=a,U("roomName").disabled=a&&et.room.status==="racing",U("startBtn").textContent=a?"\u56DE\u5230\u8054\u673A\u623F\u95F4":"\u5F00\u59CB\u7ADE\u901F\u3000\u2197",!a){U("roomTitle").textContent="\u540C\u4E00\u6761\u8D5B\u9053\uFF0C\u4E00\u8D77\u51FA\u53D1\u3002",U("roomMembers").replaceChildren(),U("roomStatus").textContent="\u6700\u591A 4 \u4EBA \xB7 \u4F7F\u7528\u5F53\u524D\u9009\u62E9\u7684\u8DD1\u5708\u5730\u56FE";return}U("roomCode").value=et.room.code,U("roomTitle").textContent="ROOM "+et.room.code+" \xB7 "+Zn[et.room.track].name,U("roomStatus").textContent=(et.room.status==="racing"?"\u6BD4\u8D5B\u8FDB\u884C\u4E2D":et.room.status==="finished"?"\u6BD4\u8D5B\u5DF2\u7ED3\u675F":"\u5019\u573A\u4E2D")+" \xB7 "+et.members.length+" / 4 \u4EBA \xB7 "+Math.round(et.rtt)+" ms \u5F80\u8FD4",U("roomMembers").replaceChildren();for(let S of et.members){let A=document.createElement("div");A.className="room-member";let R=document.createElement("span");R.textContent=S.name+(S.id===et.id?"\uFF08\u4F60\uFF09":"")+(S.id===et.room.hostId?" \xB7 \u623F\u4E3B":"");let O=document.createElement("b");O.textContent=S.snapshot?.finished?"\u5B8C\u8D5B "+Ft(S.snapshot.time||0):et.room.status==="racing"?"\u6BD4\u8D5B\u4E2D":S.ready?"\u5DF2\u51C6\u5907":"\u7B49\u5F85\u51C6\u5907",A.append(R,O),U("roomMembers").appendChild(A)}let l=et.room.hostId===et.id,d=et.room.status!=="lobby";U("startRoom").hidden=!l,U("startRoom").disabled=!d&&et.members.some(S=>!S.ready),U("startRoom").textContent=d?"\u7ED3\u675F\u672C\u5C40 \xB7 \u8FD4\u56DE\u5019\u573A":"\u5168\u5458\u5C31\u7EEA \xB7 \u5F00\u59CB\u7ADE\u901F",U("readyRoom").hidden=d,U("readyRoom").textContent=et.ready?"\u53D6\u6D88\u51C6\u5907":"\u51C6\u5907",U("connectionText").textContent=et.errors?"\u8FDE\u63A5\u6062\u590D\u4E2D\u2026":"ROOM "+et.room.code+" \xB7 "+Math.round(et.rtt)+" ms";let _=et.members.map(S=>({id:S.id,s:S.id===et.id?x.s:S.snapshot?.s||0,finished:S.id===et.id?ee==="finished":!!S.snapshot?.finished,time:S.id===et.id?Et():S.snapshot?.time||0})).sort((S,A)=>S.finished&&A.finished?S.time-A.time:A.finished-S.finished||A.s-S.s);U("racePosition").textContent="POS "+(_.findIndex(S=>S.id===et.id)+1)+" / "+et.members.length},Xr=function(){qs("roomPanel"),Cc()},yu=function(a){if(!et.room||et.busy||document.hidden||a-et.lastSync<(et.room.status==="racing"?125:850))return;et.lastSync=a,et.busy=!0;let l=et.session;Ac("poll",{snapshot:et.room.status!=="lobby"?Qf():{}}).then(d=>{et.room&&et.session===l&&Ec(d)}).catch(d=>{et.room&&et.session===l&&(et.errors++,U("connectionText").textContent="\u8FDE\u63A5\u6062\u590D\u4E2D \xB7 "+d.message,U("roomStatus").textContent=d.message)}).finally(()=>{et.busy=!1})},Mu=function(a,l){if(!et.room)return;let d=Date.now()+et.offset-P(et.rtt*1.1,170,350);for(let _ of et.peers.values()){let S=_.history;if(!S.length){_.label.hidden=!0;continue}let A=S[0],R=A;for(let pt=1;pt<S.length&&(R=S[pt],!(R.t>=d));pt++)A=R;let O=A.t===R.t?0:P((d-A.t)/(R.t-A.t),0,1),B={};for(let pt of["s","l","vS","vL","jump"])B[pt]=F(A[pt]||0,R[pt]||0,O);B.yaw=(A.yaw||0)+wn((R.yaw||0)-(A.yaw||0))*O;let J=P((d-R.t)/1e3,0,.12);if(B.s+=(R.vS||0)*J,B.l+=(R.vL||0)*J,_.position&&Math.abs(B.s-_.position.s)<15){let pt=1-Math.exp(-l*24);B.s=F(_.position.s,B.s,pt),B.l=F(_.position.l,B.l,pt)}_.position=B;let at=Me(B.s),xt=Ie(B.s,B.l,.06+B.jump);_.worldPos=v(C(xt,[0,3,0]),a),_.root.tint=typeof R.paint=="string"?R.paint:so[0],_.root.local=Y(v(xt,a),[.97,.97,.97],[0,-at.h-B.yaw,Math.atan(at.slope)]),_.root.shadow=E(v(xt,Ie(x.s,x.l)))<70,G.add(_.root),_.spin-=(B.vS||0)*l/.4;for(let pt=0;pt<Mt.length;pt++){let vt=Mt[pt];_.root.children[2+pt].local=D(V(vt.x,.41,vt.z),X(_.spin))}for(let pt=0;pt<Zt.length;pt++){let vt=Zt[pt],Ct=R.nitroTime>0||R.mini>0,Dt=Ct?.85+.16*Math.sin(Vs*38+vt.side):.001;_.root.children[6+pt].local=Y([-1.9,.43,vt.side*.34],[Dt,Dt,Dt])}}},ep=function(a){for(let l of et.peers.values()){if(!l.worldPos||!et.room||ee==="ready"){l.label.hidden=!0;continue}let d=l.worldPos,_=d[0],S=d[1],A=d[2],R=a[3]*_+a[7]*S+a[11]*A+a[15],O=(a[0]*_+a[4]*S+a[8]*A+a[12])/R,B=(a[1]*_+a[5]*S+a[9]*A+a[13])/R;l.label.hidden=R<=0||Math.abs(O)>1.1||Math.abs(B)>1.1,l.label.hidden||(l.label.style.left=(O*.5+.5)*Br+"px",l.label.style.top=(-B*.5+.5)*zr+"px")}},wu=function(){return"star-rush-best-reborn-"+Qe},ip=function(){try{return JSON.parse(localStorage.getItem(wu())||"null")}catch{return null}},Au=function(){if(Wn=[],ys=!1,Js=null,Ci=ip(),Ms=0,ro=[],ao=0,oo=[],Ys=[],Ss=1,qr=1,lo=0,U("resultGrid").replaceChildren(),U("splitLabel").textContent="SECTOR 1 / 3",U("splitDelta").textContent="",U("lapTimeLabel").textContent="",U("coach").hidden=Pi!=="practice",jt==="circuit"&&Pi==="race"&&!et.room){x.l=-1.8;for(let a=0;a<3;a++){let l=wc(a);l.root.tint=bu[a],Wn.push({s:-3.8*Math.floor((a+1)/2),l:(a%2?1:-1)*1.9,speed:0,yaw:0,color:bu[a],name:np[a],node:l.root,finishAt:null,index:a})}}Ci&&sn.ghost&&jt==="circuit"&&Pi==="timeTrial"&&!et.room?(Ri=wc(3).root,Ri.tint="#b8e9e6",Ri.opacity=.27):Ri=null,co(),Pi==="practice"&&!et.room&&Ru()},sp=function(a){for(let l of Wn){if(l.finishAt!==null)continue;let d=0;for(let O=15;O<=65;O+=10)d=Math.max(d,Math.abs(Me(l.s+O).curv));let _=P(Math.sqrt(24/Math.max(.004,d)),24,53)*(1-l.index*.028);l.speed=F(l.speed,_,1-Math.exp(-a*(l.speed>_?3:1.2)));let S=Me(l.s+20).curv,A=Math.sign(S)*1.6+Math.sin(l.s*.012+l.index)*.45;for(let O of ln.values())for(let B of O.entities)(B.kind==="barrier"||B.kind==="cone")&&Z(B.s,l.s)>0&&Z(B.s,l.s)<28&&Math.abs(A-B.l)<2.1&&(A=B.l>0?-2.8:2.8);let R=l.l;l.l=F(l.l,A,1-Math.exp(-a*2.3)),l.yaw=Math.atan2((l.l-R)/a,Math.max(5,l.speed))+P(S*12,-.4,.4),l.s+=l.speed*a,l.s>=b()&&(l.s=b(),l.finishAt=fi,Js??=fi)}if(jt==="circuit"&&!et.room&&(ao+=a,ao>=.1&&(ao=0,ro.push([Number(Et().toFixed(3)),Number(x.s.toFixed(3)),Number(x.l.toFixed(3)),Number(x.yaw.toFixed(4)),Number(x.jump.toFixed(3))]))),jt==="circuit"){for(;x.s>=Ss*Pe/3&&Ss<=$e().laps*3;){oo.push(Et());let l=Ci?.splits?.[Ss-1];if(U("splitLabel").textContent="SECTOR "+((Ss-1)%3+1)+" / 3",l){let d=Et()-l;U("splitDelta").textContent=(d>0?"+":"\u2212")+Math.abs(d).toFixed(2)+" s",U("splitDelta").style.color=d>0?"#f1b8c6":"#b9edcf"}else U("splitDelta").textContent="\u5206\u6BB5 "+Ft(Et()-(oo[Ss-2]||0));Ss++}if(x.s>=qr*Pe){let l=Ys.reduce((d,_)=>d+_,0);Ys.push(Et()-l),U("lapTimeLabel").textContent="\u4E0A\u4E00\u5708 "+Ft(Ys.at(-1)),qr<$e().laps&&_n("LAP "+(qr+1),"\u4E0A\u4E00\u5708 "+Ft(Ys.at(-1)),1.5),qr++}}if(Js!==null&&fi-Js>30&&x.s<b()){ys=!0,xc();return}lo+=a,lo>.18&&(lo=0,co())},co=function(){if(et.room){U("localPosition").textContent="ONLINE",U("eventLabel").textContent="\u597D\u53CB\u623F\u95F4 \xB7 "+et.room.code;return}let a=ee==="finished",l={time:a&&!ys?Et():null,s:x.s},d=1+Wn.filter(_=>a?Eu({time:_.finishAt,s:_.s},l)<=0:_.finishAt!==null||_.s>x.s).length;U("localPosition").textContent=Wn.length?"POS "+d+" / 4":Pi==="practice"?"PRACTICE":"TIME ATTACK",U("eventLabel").textContent=a?ys?"\u672A\u5B8C\u8D5B":jt==="endless"?"\u5DE1\u6E38\u7ED3\u675F":"\u5DF2\u5B8C\u8D5B":Js!==null?"\u5B8C\u8D5B\u5012\u8BA1\u65F6 "+Math.max(0,30-Math.floor(fi-Js))+" s":jt==="endless"?"\u65E0\u5C3D\u5DE1\u6E38":$e().name},Eu=function(a,l){return a.time===null&&l.time===null?l.s-a.s:a.time===null?1:l.time===null?-1:a.time-l.time},Cu=function(a){let l=wn(Me(a+62).h-Me(a+32).h);return{turn:l,direction:Math.abs(l)<.05?0:Math.sign(l),currentCurve:Me(a).curv}},Ru=function(a=Cu(x.s)){let l=a.direction>0?"\u53F3\u5F2F":a.direction<0?"\u5DE6\u5F2F":"",d=x.smallJets>0&&x.smallWindow>0,_="W / \u2191 \u52A0\u901F\uFF0C\u89C2\u5BDF\u524D\u65B9\u5F2F\u9053\u3002";x.drifting&&x.driftPhase==="counter"?_="\u53CD\u6253\u6536\u8F66\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\u3002":""):x.drifting&&x.driftPhase==="release"||x.driftPhase==="exit"&&x.exitTime>0?_="\u6536\u6F02\u4E2D\uFF1A\u5148\u7A33\u4F4F\u65B9\u5411\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\uFF0C\u8F66\u5934\u7A33\u5B9A\u540E\u8854\u63A5\u3002":""):x.drifting?_=x.driftPhase==="entry"?"\u8D77\u6F02\u4E2D\uFF1A\u5C0F\u5E45\u8F6C\u5411\uFF0C\u51C6\u5907\u53CD\u6253\u6536\u8F66\u3002":"\u6F02\u79FB\u4E2D\uFF1A\u53CD\u6309\u65B9\u5411\u6536\u8F66\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002":d?_="\u5C0F\u55B7 \xD7"+x.smallJets+"\uFF1A\u8F66\u5934\u7A33\u5B9A\u540E\u70B9\u7A7A\u683C / Q\u3002"+(x.smallJets>1?"\u8FDE\u7EED\u4E24\u6B21\u53EF\u53CC\u55B7\u3002":""):x.nitroTime>0?_="\u6C2E\u6C14\u55B7\u5C04\u4E2D\uFF1A"+(l?"\u524D\u65B9"+l+"\uFF0C\u7A33\u4F4F\u65B9\u5411\u3002":"\u4FDD\u6301\u8DEF\u7EBF\uFF0C\u65E0\u9700\u91CD\u590D\u6309 E / C\u3002"):x.speed>10&&(l?_="\u524D\u65B9"+l+"\uFF1A\u5148\u6536\u6CB9\u63A7\u901F\uFF0C\u5E73\u987A\u8F6C\u5411\u3002":x.nitro>0&&x.speed>15&&Math.abs(a.currentCurve)<.006?_="\u524D\u65B9\u76F4\u9053\uFF1A\u8F66\u8EAB\u7A33\u5B9A\u540E\uFF0C\u53EF\u9009 E / C \u6C2E\u6C14\u3002":_="\u524D\u65B9\u76F4\u9053\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u7559\u610F\u4E0B\u4E00\u5F2F\u3002"),U("coach").textContent=_},Pu=function(){let a=et.room?et.members.filter(l=>l.id!==et.id).map(l=>({name:l.name,time:l.snapshot?.finished?l.snapshot.time:null,s:l.snapshot?.s||0})):Wn.map(l=>({name:l.name,time:l.finishAt,s:l.s}));if(a.push({name:tn.name+"\uFF08\u4F60\uFF09",time:ys?null:Et(),s:x.s}),a.sort(Eu),U("resultGrid").replaceChildren(),a.length>1)for(let l=0;l<a.length;l++){let d=document.createElement("div");d.className="result-row";let _=document.createElement("span"),S=document.createElement("b");_.textContent=l+1+". "+a[l].name,S.textContent=a[l].time===null?et.room?.status==="racing"?"\u6BD4\u8D5B\u4E2D":"\u672A\u5B8C\u8D5B":Ft(a[l].time),d.append(_,S),U("resultGrid").appendChild(d)}},rp=function(){if(Xi=!1,Pu(),co(),ys)U("resultDistance").textContent="DNF",U("resultNote").textContent="\u672C\u5C40\u672A\u80FD\u5728\u5012\u8BA1\u65F6\u7ED3\u675F\u524D\u5B8C\u8D5B\uFF0C\u53EF\u4EE5\u518D\u6311\u6218\u4E00\u6B21\u3002",U("submitRun").disabled=!0,kr=null;else if(!et.room&&jt==="circuit"&&ro.length>10&&(!Ci||Et()<Ci.time))try{localStorage.setItem(wu(),JSON.stringify({time:Et(),points:ro,splits:oo,laps:Ys,date:Date.now()})),U("resultNote").textContent="\u5237\u65B0\u672C\u673A\u6700\u4F73\uFF01\u5DF2\u4FDD\u5B58\u5E7D\u7075\uFF0C\u53EF\u5728\u8BA1\u65F6\u6311\u6218\u4E2D\u8FFD\u9010\u81EA\u5DF1\u3002"}catch{}U("coach").hidden=!0},ap=function(a,l){for(let d of Wn){let _=Me(d.s);d.node.local=Y(v(Ie(d.s,d.l,.07),a),[.97,.97,.97],[0,-_.h-d.yaw,Math.atan(_.slope)]),G.add(d.node);for(let S=0;S<Mt.length;S++){let A=Mt[S];d.node.children[2+S].local=D(V(A.x,.41,A.z),X(-d.s/.4))}}if(Ri&&Ci?.points?.length&&ee==="running"){let d=Ci.points,_=Et();for(;Ms<d.length-2&&d[Ms+1][0]<_;)Ms++;let S=d[Ms],A=d[Ms+1],R=P((_-S[0])/(A[0]-S[0]||1),0,1),O=F(S[1],A[1],R),B=F(S[2],A[2],R),J=S[3]+wn(A[3]-S[3])*R,at=Me(O);Ri.local=Y(v(Ie(O,B,.07+F(S[4],A[4],R)),a),[.97,.97,.97],[0,-at.h-J,0]),G.add(Ri)}if(sn.line&&ee==="running")for(let d=0;d<Pc.length;d++){let _=x.s+12+d*9,S=Me(_),A=P(S.curv*80,-2.1,2.1),R=Pc[d];R.mesh=Tu[Math.abs(S.curv)*x.speed>.95?1:0],R.local=Y(v(Ie(_,A,.085),a),[1,1,1],[0,-S.h,0]),G.add(R)}},op=function(a,l){let d=a-Iu;if(Iu=a,d>0&&d<1e3&&Zs.push(d),Zs.length>180&&Zs.shift(),Ic+=l,Ic<.25)return;Ic=0;let _=Zs.reduce((R,O)=>R+O,0)/(Zs.length||1),S=[...Zs].sort((R,O)=>R-O),A=S[Math.floor(S.length*.95)]||0;U("diagnostics").textContent="REBORN / "+(h?"Canvas compatibility":"Three.js WebGL 2")+`
FPS `+Math.round(1e3/(_||16.7))+" | frame p95 "+A.toFixed(1)+` ms
Draw `+Rc.drawCalls+" | triangles "+Rc.triangles+`
State `+ee+" | event "+Pi+`
s `+x.s.toFixed(1)+" / "+b().toFixed(1)+" | l "+x.l.toFixed(2)+`
speed `+(x.speed*3.6).toFixed(1)+` km/h
steer `+Gs.toFixed(2)+" | slip "+(wn(x.yaw-x.velocityYaw)*180/Math.PI).toFixed(1)+`\xB0
drift `+x.driftPhase+" | small "+x.smallJets+" | nitro "+x.nitro+`
ready `+(et.ready?"yes":"no")+" | peers "+et.peers.size+(ye?.rail?`
rail `+Object.values(ye.rail.status().states).join("/")+" | "+ye.rail.status().last+" #"+ye.rail.status().played:"")},lp=function(a){if(qi=null,Xi&&ee==="running"){let S=0;for(let xt=15;xt<=90;xt+=10)S=Math.max(S,Math.abs(Me(x.s+xt).curv));let A=P(.85/Math.max(.012,S),14,48),R=Me(x.s),O=Ie(x.s+P(x.speed*.45,12,26),0,0),B=v(O,Ie(x.s,x.l,0)),J=Math.atan2(N(B,R.R),N(B,R.T)),at=wn(J-x.velocityYaw);qi=P((at*3+Me(x.s+12).curv*x.speed)/1.04,-1,1),Re.brake=x.speed>A+1.5,Re.gas=!Re.brake;return}let l=navigator.getGamepads?.()[0];if(!l){Dc&&(Bs(),Lc={},Dc=!1);return}Dc=!0,Bs();let d=Math.abs(l.axes[0]||0)>.13?l.axes[0]:0;d&&(qi=d);let _={gas:l.buttons[7]?.value>.13,brake:l.buttons[6]?.value>.13,drift:!!l.buttons[2]?.pressed,small:!!l.buttons[0]?.pressed,boost:!!l.buttons[1]?.pressed};for(let[S,A]of Object.entries(_))Re[S]||=A,A&&!Lc[S]&&S in Gn&&Gn[S]++;Lc=_},Yr=function(){try{localStorage.setItem("star-rush-settings-reborn",JSON.stringify(sn))}catch{}},ho=function(){tn.name=U("profileName").value.trim().slice(0,16)||tn.name;try{localStorage.setItem("star-rush-profile",JSON.stringify(tn)),localStorage.setItem("star-rush-name",tn.name)}catch{}U("carName").textContent=tn.car;for(let a of["roomName","racerName","profileName"])U(a).value=tn.name;U("profileStatus").textContent="\u5DF2\u4FDD\u5B58 \xB7 "+tn.name,ft.tint=tn.paint},Nc=function(){for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).checked=!!sn[l];U("qualitySetting").value=sn.quality,U("steeringSetting").value=sn.sensitivity*100,U("fovSetting").value=sn.fov,U("settingsStatus").textContent=h?"\u5F53\u524D\u6D4F\u89C8\u5668\u4F7F\u7528\u517C\u5BB9\u663E\u793A\u6A21\u5F0F\uFF0C\u6BD4\u8D5B\u903B\u8F91\u548C\u64CD\u4F5C\u4FDD\u6301\u4E00\u81F4\u3002":"Three.js 3D \u6E32\u67D3 \xB7 \u8BBE\u7F6E\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5728\u6B64\u8BBE\u5907\u3002"},Du=function(){if(et.room){Xr();return}Xi=!1,ee="ready",jn(!1),Wn=[],Ri=null,ms(),U("welcome").hidden=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("coach").hidden=!0,Gi.classList.add("menu-open"),U("countdown").hidden=!0},hp=function(){for(let a of document.querySelectorAll("[data-track]")){let l=Zn[a.dataset.track],d=a.querySelector("svg");if(!l||!d)continue;let _=l.points.map(vt=>vt[0]),S=l.points.map(vt=>vt[2]),A=Math.min(..._),R=Math.max(..._),O=Math.min(...S),B=Math.max(...S),J=Math.min(140/(R-A),54/(B-O)),at=l.points.map(vt=>[80+(vt[0]-(A+R)/2)*J,35+(vt[2]-(O+B)/2)*J]),xt=document.createElementNS("http://www.w3.org/2000/svg","path");xt.setAttribute("d",at.map((vt,Ct)=>(Ct?"L":"M")+vt.join(",")).join(" ")+"Z"),xt.setAttribute("fill","none"),xt.setAttribute("stroke",l.biome?"#eabfd8":"#a9d8ec"),xt.setAttribute("stroke-width","3"),xt.setAttribute("stroke-linejoin","round"),d.replaceChildren(xt);let pt=document.createElementNS("http://www.w3.org/2000/svg","circle");pt.setAttribute("cx",at[0][0]),pt.setAttribute("cy",at[0][1]),pt.setAttribute("r","3"),pt.setAttribute("fill","#ffe2ac"),d.appendChild(pt)}},o=Mf(i);i=o.canvas;let c=o.threeBackend,h=o.software,u=o.softwareContext,p=Math.PI,y=p*2,w=(a=0,l=0,d=0)=>[a,l,d],C=(a,l)=>a.map((d,_)=>d+l[_]),v=(a,l)=>a.map((d,_)=>d-l[_]),m=(a,l)=>a.map(d=>d*l),N=(a,l)=>a[0]*l[0]+a[1]*l[1]+a[2]*l[2],z=(a,l)=>[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],E=a=>Math.hypot(...a),L=a=>m(a,1/(E(a)||1)),P=(a,l,d)=>Math.min(d,Math.max(l,a)),F=(a,l,d)=>a+(l-a)*d,T=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Fe={green:"#7fb86c",light:"#a7d27d",dark:"#407750",spine:"#4c8056",belly:"#dfdb96",eye:"#fff2cf",iris:"#325f43",coral:"#df8064",rim:"#f2be8e",rubber:"#344b42",metal:"#b7c8b1",wood:"#b78c57",gold:"#d6b471",cream:"#f1ead2",grass:"#b7cc90",white:"#fff4d7",earth:"#b4976d",water:"#91c6b8",leaf:"#85ad74"},Ht=new Map,Ke=Ee(),pe=Ee(12,8),be=ht(),ke=ht(8),xe=ht(10,0),We=ht(4,0),Le=T();class Ce{constructor(){this.data=[],this.indices=[]}add(l,d=Le,_=Fe.green,S=.13){let A=typeof _=="string"?Jt(_):_,R=st(d),O=this.data.length/10;for(let B=0;B<l.p.length;B+=3){let J=lt(d,l.p.slice(B,B+3)),at=gt(R,l.n.slice(B,B+3));this.data.push(...J,...at,...A,S)}for(let B of l.i)this.indices.push(O+B);return this}finish(l=!1){return new Xe(this.data,this.indices,l)}}class Xe{constructor(l,d){this.sourceData=new Float32Array(l),this.sourceIndices=new Uint32Array(d),this.count=d.length}update(l){this.sourceData=new Float32Array(l)}dispose(){this.onDispose&&this.onDispose()}}class _e{constructor(l=null,d=Le){this.mesh=l,this.local=d,this.children=[],this.shadow=!0,this.world=Le}add(l){return this.children.push(l),l}}let G=new _e,un=new Ce,De=new Ce,It=73121,ft=G.add(new _e),yt=new Ce,$t="#83cde4",Rt="#eff0f6",At="#9c8ad5",Gt="#343952",te="#ed94bd",oe="#f8d1b5",W="#a3a9e5",Lt="#7479b7";f(yt,[0,.47,0],[3.15,.43,1.42],$t,.16),f(yt,[.9,.68,0],[1.4,.27,1.42],Rt,.13,[0,0,-.065],.5),f(yt,[.96,.83,0],[1.08,.035,.14],At,.015,[0,0,-.065],.5),f(yt,[0,.38,0],[3.3,.15,1.48],Gt,.07),f(yt,[1.53,.31,0],[.5,.075,1.9],At,.035),f(yt,[-1.4,.39,0],[.45,.22,1.55],At,.07);for(let a of[-.7,.7]){f(yt,[-.15,.64,a],[2.55,.35,.29],$t,.12,[0,0,0],.45),f(yt,[.1,.81,a],[1.55,.05,.2],Rt,.02),f(yt,[-.17,.69,a*1.19],[.62,.19,.032],Gt,.02,[0,0,-.12]);for(let l=0;l<4;l++)f(yt,[-.38+l*.12,.69,a*1.22],[.035,.13,.015],"#758ab5",.007,[0,0,-.15]);f(yt,[1.54,.66,a*.75],[.055,.14,.33],"#fff0b9",.035,[0,0,-.1],.65),f(yt,[-1.57,.62,a*.79],[.035,.12,.28],te,.035,[0,0,0],.6),f(yt,[-1.32,.85,a*.83],[.07,.55,.07],Gt,.02),f(yt,[-1.38,1.13,a*1.34],[.43,.16,.055],At,.025)}f(yt,[1.6,.44,0],[.04,.15,.67],Gt,.03);for(let a=0;a<5;a++)f(yt,[1.63,.44,(a-2)*.115],[.014,.1,.024],"#6d7990",.006);f(yt,[-1.37,1.12,0],[.38,.065,1.94],Rt,.03),f(yt,[-1.37,1.16,0],[.18,.018,1.68],At,.007),f(yt,[-.42,.77,0],[1.05,.08,.94],Gt,.05),f(yt,[-.69,1,0],[.18,.53,.64],Gt,.08,[0,0,-.12]),f(yt,[-.6,1.23,0],[.18,.15,.5],At,.05),f(yt,[.28,.94,0],[.075,.26,.91],"#bedde9",.025,[0,0,-.33],.6);for(let a of[-.75,.75])k(yt,[.22,.91,a*.84],[.31,1.04,a*1.1],.018,Gt),I(yt,[.31,1.04,a*1.11],[.13,.055,.09],Rt,!0,.6);k(yt,[.35,.82,0],[.1,1.08,0],.035,Gt),yt.add(_t(.16,.025,28,8),Y([.1,1.08,0],[1,1,1],[0,p/2,-.35]),Gt,.2);for(let a of[-.34,.34])yt.add(be,Y([-1.64,.43,a],[.085,.2,.085],[0,0,p/2]),"#9babc2",.75);I(yt,[-.42,1.04,0],[.24,.29,.22],At),I(yt,[-.36,1.29,0],[.095,.1,.09],oe,!0);for(let a of[-1,1]){let l=[-.38,1.17,a*.22],d=[-.13,1.02,a*.29],_=[.09,1.09,a*.14];k(yt,l,d,.075,At,.14,!0),k(yt,d,_,.06,At,.14,!0),I(yt,_,[.085,.065,.065],Rt,!0)}f(yt,[-.18,1.08,0],[.05,.31,.08],Rt,.01);let mt=ft.add(new _e(yt.finish()));mt.mesh.paintable=!0;let wt=new Ce;I(wt,[0,0,0],[.335,.355,.3],oe),I(wt,[-.19,-.01,0],[.2,.35,.32],Lt),I(wt,[-.025,.19,0],[.37,.255,.33],W);for(let a of[-1,1])I(wt,[-.035,-.04,a*.29],[.13,.28,.095],W),I(wt,[.308,.025,a*.13],[.02,.1,.067],Rt,!0),I(wt,[.326,.023,a*.13],[.012,.075,.043],"#5c72a5",!0,.4),I(wt,[.338,.015,a*.13],[.008,.048,.027],"#303c65",!0),I(wt,[.347,.058,a*.135],[.008,.02,.018],"#fffaf1",!0,.6),I(wt,[.296,-.1,a*.2],[.014,.038,.045],"#e9a6ab",!0),rt(wt,[[.32,.132,a*.075],[.322,.148,a*.13],[.31,.132,a*.19]],.011,Lt),j(wt,[.215,.165,a*.18],[.1,.24,.085],W,[0,0,p+.2]),wt.add(_t(.084,.014,24,7),Y([.33,.24,a*.125],[1,1,1],[0,p/2,0]),"#e8c58c",.6),I(wt,[.335,.24,a*.125],[.012,.064,.066],"#a0d8e8",!0,.6);rt(wt,[[.317,-.148,-.037],[.326,-.16,0],[.317,-.148,.037]],.009,"#b77787"),wt.add(_t(.313,.02,40,7),Y([-.025,.225,0],[1.05,1,1],[p/2,0,0]),Gt),j(wt,[.26,.17,-.04],[.1,.25,.08],W,[0,0,p+.25]);let Bt=ft.add(new _e(wt.finish())),Mt=[];for(let a of[-1.02,1.06])for(let l of[-1,1]){let d=new Ce;d.add(_t(.315,.095,40,12),Le,"#343b4c",.22),d.add(_t(.255,.027,32,8),V(0,0,l*.075),"#e4e6ef",.7),d.add(be,Y([0,0,l*.07],[.238,.07,.238],[p/2,0,0]),"#4d5576",.35);for(let S=0;S<5;S++){let A=S*y/5;k(d,[0,0,l*.116],[.23*Math.cos(A),.23*Math.sin(A),l*.116],.025,Rt,.65)}I(d,[0,0,l*.14],[.075,.075,.022],At,!0,.6);let _=ft.add(new _e(d.finish()));Mt.push({n:_,x:a,z:l*.83,front:a>0})}let Zt=[];for(let a of[-1,1]){let l=new Ce;I(l,[0,0,0],[.65,.105,.105],"#a6f4ff",!0,.8),I(l,[-.3,0,0],[.35,.065,.065],"#e9d1ff",!0,.7);let d=ft.add(new _e(l.finish()));d.shadow=!1,Zt.push({n:d,side:a})}let Xt=new Ce;f(Xt,[0,.36,0],[.6,.72,2.1],"#ef97aa",.08),f(Xt,[0,.78,0],[.69,.16,2.2],Rt,.035);for(let a=0;a<5;a++)f(Xt,[.312,.4,(a-2)*.38],[.018,.29,.16],"#fff0c7",.015,[.28,0,0]);for(let a of[-.85,.85])k(Xt,[0,.05,a],[0,.77,a],.045,"#636986");let Ve=Xt.finish(),Te=new Ce;f(Te,[0,.07,0],[.8,.12,.8],Gt,.04),j(Te,[0,.49,0],[.28,.78,.28],"#e4b281"),j(Te,[0,.53,0],[.2,.16,.2],Rt);let Un=Te.finish(),Rn=new Ce;Rn.add(_t(.34,.068,28,8),Y([0,0,0],[1,1,1],[0,p/2,0]),"#f0d085",.7),I(Rn,[0,0,0],[.04,.22,.22],"#ffe7a7",!0,.55);let lc=Rn.finish(),Ns=new Ce;f(Ns,[0,.025,0],[5.5,.045,3],"#7ecadc",.02);for(let a=0;a<3;a++){let l=-1.8+a*1.6;k(Ns,[l-.45,.075,-.9],[l+.35,.075,0],.055,"#eef9d0",.3),k(Ns,[l+.35,.075,0],[l-.45,.075,.9],.055,"#eef9d0",.3)}let za=Ns.finish(),us=new Ce,Rr=[-2.5,0,-1.6,2.5,0,-1.6,2.5,1,-1.6,-2.5,0,1.6,2.5,0,1.6,2.5,1,1.6],oi=[0,1,2,3,5,4,0,2,5,0,5,3,1,4,5,1,5,2],Us=[],li=[],Fs=[];for(let a=0;a<oi.length;a+=3){let l=Rr.slice(oi[a]*3,oi[a]*3+3),d=Rr.slice(oi[a+1]*3,oi[a+1]*3+3),_=Rr.slice(oi[a+2]*3,oi[a+2]*3+3),S=L(z(v(d,l),v(_,l))),A=Us.length/3;Us.push(...l,...d,..._),li.push(...S,...S,...S),Fs.push(A,A+1,A+2)}us.add(ce(Us,li,Fs),Le,"#d9b1e0");for(let a of[-1.4,1.4])k(us,[-2.5,.06,a],[2.5,1.06,a],.045,Rt);let ka=us.finish(),Va=new Ce().add(pe,Le,"#b4eaff",.2).finish(),wi=Array.from({length:45},()=>({life:0,p:[0,0,0],v:[0,0,0],size:.1,node:new _e(Va)}));for(let a of wi)a.node.shadow=!1;let jt="circuit",Qe="coast-reborn",Pr="coast-reborn",Zn={"coast-reborn":{name:"\u6C50\u89C1\u6D77\u5CB8",laps:1,biome:0,difficulty:"\u5165\u95E8 \xB7 \u9AD8\u901F\u7EC4\u5408\u5F2F",description:"\u6C50\u89C1\u7AD9\u524D \u2192 \u6D77\u6EE8\u5546\u5E97\u8857 \u2192 \u795E\u793E\u5C71\u9053 \u2192 \u6E2F\u6E7E S \u5F2F",sectors:[{at:0,name:"\u6C50\u89C1\u7AD9\u524D"},{at:.22,name:"\u6D77\u6EE8\u5546\u5E97\u8857"},{at:.48,name:"\u6E2F\u6E7E S \u5F2F"},{at:.66,name:"\u795E\u793E\u5C71\u9053"},{at:.82,name:"\u6D77\u98CE\u5927\u9053"}],points:[[-155,0,70],[-80,0,70],[0,.2,70],[85,.7,65],[135,1.2,30],[130,1.6,-20],[75,2,-28],[38,1.8,0],[0,1.5,-10],[8,.8,-58],[65,.2,-80],[115,0,-85],[130,.4,-125],[75,1,-150],[0,1.6,-145],[-60,2,-100],[-110,1.2,-135],[-155,.5,-100],[-200,0,-25],[-218,0,28],[-215,0,70]]},"sakura-reborn":{name:"\u82B1\u89C1\u5742",laps:2,biome:1,difficulty:"\u8FDB\u9636 \xB7 \u8FDE\u7EED\u53CD\u5411\u5F2F",description:"\u6A31\u82B1\u6821\u95E8 \u2192 \u82B1\u89C1\u5742\u5546\u5E97\u8857 \u2192 \u795E\u793E\u53C2\u9053 \u2192 \u6CB3\u5CB8\u56DE\u73AF",sectors:[{at:0,name:"\u6A31\u82B1\u7AD9\u524D"},{at:.22,name:"\u82B1\u89C1\u5742\u5546\u5E97\u8857"},{at:.47,name:"\u6CB3\u5CB8\u56DE\u73AF"},{at:.66,name:"\u795E\u793E\u53C2\u9053"},{at:.83,name:"\u6A31\u82B1\u5927\u9053"}],points:[[-180,0,70],[-95,0,70],[0,0,70],[95,.4,62],[170,1,16],[160,1.6,-45],[100,2,-70],[55,2.2,-30],[5,2,-55],[-16,1,-110],[-80,.5,-130],[-145,0,-104],[-220,0,-45],[-230,0,25],[-230,0,70]]}};Zn["academy-reborn"]={name:"\u661F\u8DC3\u8BAD\u7EC3\u573A",laps:1,biome:1,difficulty:"\u57FA\u7840\u9A7E\u9A76",description:"\u5BBD\u7F13\u5F2F\u9053 \xB7 \u6E05\u6670\u89C6\u91CE \xB7 \u7EC3\u4E60\u8D77\u6F02\u3001\u53CD\u6253\u4E0E\u51FA\u5F2F\u55B7\u5C04",sectors:[{at:0,name:"\u57FA\u7840\u76F4\u9053"},{at:.33,name:"\u6F02\u79FB\u5F27\u7EBF"},{at:.66,name:"\u51FA\u5F2F\u52A0\u901F"}],points:[[-100,0,65],[0,0,65],[100,0,65],[145,.3,25],[145,.4,-25],[100,.2,-65],[0,0,-65],[-100,0,-65],[-145,.1,-25],[-145,.1,25]]};for(let[a,l]of Object.entries(Zn)){let d=a==="coast-reborn"?1.45:a==="sakura-reborn"?1.5:1.2;l.points=l.points.map(_=>[_[0]*d,_[1],_[2]*d])}let mn=[],Pe=0,Ir={};it();let qt=220,Kt=245,ae=1.57,he=.91,Yt=8.045,fe=(a,l)=>a[0]*l[0]+a[1]*l[1],qe=(a,l)=>a[0]*l[1]-a[1]*l[0],ve=new Map,di=null,Qh=null,cc=[],Rf=Tn("petal",a=>f(a,[0,0,0],[.12,.025,.075],"#ffd2e8",.025)),ye=null,Fn=!0,Nf=(()=>{let a=(A,R,O)=>Math.min(O,Math.max(R,A)),l=(A,R,O)=>A+(R-A)*O,d=A=>Math.atan2(Math.sin(A),Math.cos(A)),_=Object.freeze({cruise:52,mini:63,nitro:76,combo:83,normalTurn:1.04,driftTurn:1.8,driveAcceleration:27,jetAcceleration:36});function S(A,R,O,B={}){let J=Math.hypot(A.vS,A.vL),at=J>.05?Math.atan2(A.vL,A.vS):A.yaw,xt=a(Number(R.steer)||0,-1,1),pt=B.sensitivity||1,vt=A.vS*Math.cos(A.yaw)+A.vL*Math.sin(A.yaw)<-.05;A.steering=l(A.steering||0,xt,1-Math.exp(-O*26));let Ct=!!A.drifting,Dt=A.driftSide||Math.sign(xt)||1,St=Ct&&xt*Dt<-.1,ut=Ct&&A.driftReleasing,Tt=A.steering*_.normalTurn*pt*a(J/8,0,1)*(vt?-1:1);if(Ct){let dp=Math.max(0,A.steering*Dt),fp=Dt*(St?.4:.52+dp*(_.driftTurn-.52)),pp=ut?a((A.releaseAge||0)/.38,0,1):0;Tt=l(fp,Tt,pp)*a(J/9,0,1)}A.jump>.2&&(Tt*=.35),A.turnRate=l(A.turnRate||0,Tt,1-Math.exp(-O*(Ct?13:19)));let zt=d(at+A.turnRate*O),Ut=d(at-(vt?Math.PI:0)),bt=d(A.yaw-Ut),ue=Ct?Dt*(St?.015:ut?.12:.22+.38*Math.max(0,xt*Dt)):A.steering*.025;ut&&(ue*=1-a((A.releaseAge||0)/.45,0,1));let Pn=St?13:Ct?9:8;bt=l(bt,ue,1-Math.exp(-O*Pn)),A.yaw=d(zt-(vt?Math.PI:0)+bt+(A.spin||0)*O),A.spin=(A.spin||0)*Math.exp(-O*6);let ze=J,cn=.7+J*.018+J*J*45e-5,Xn=A.nitroTime>0||A.mini>0||A.pad>0,Ks=A.nitroTime>0?A.comboTimer>0?_.combo:_.nitro:A.pad>0?73:A.mini>0?_.mini:_.cruise,Jr=R.gas&&!R.brake?a((_.cruise-ze)*2.8,0,_.driveAcceleration):0,Ii=Xn&&!R.brake?a((Ks-ze)*2.8,0,_.jetAcceleration):0,up=Ct?(St?1.3:3.3)*Math.abs(bt):0;return ze=Math.max(0,ze+(Jr+Ii-cn-up)*O),!Xn&&ze>_.cruise&&(ze=Math.max(_.cruise,ze-Math.min(8,(ze-_.cruise)*.7)*O)),R.brake&&(ze=Math.max(0,ze-36*O)),vt&&R.gas&&(ze=Math.max(0,ze-32*O)),R.brake&&!R.gas&&(J<1.3||vt)?(A.vS=l(A.vS,-Math.cos(A.yaw)*5,1-Math.exp(-O*5)),A.vL=l(A.vL,-Math.sin(A.yaw)*5,1-Math.exp(-O*5))):(A.vS=Math.cos(zt)*ze,A.vL=Math.sin(zt)*ze),A.speed=Math.hypot(A.vS,A.vL),A.velocityYaw=zt,A.lateralSpeed=A.vL,{slip:bt,counter:St,thrust:Ii,boost:Xn,speed:A.speed}}return{step:S,config:_,wrap:d}})(),wn=a=>Math.atan2(Math.sin(a),Math.cos(a)),U=a=>document.getElementById(a),Gi=U("game"),Re={gas:!1,brake:!1,left:!1,right:!1,drift:!1,boost:!1,small:!1},qa=new Set,Ya=new Map,Gn={drift:0,boost:0,small:0},dc=[{name:"\u6C50\u89C1\u6D77\u5CB8",ground:"#cbdcbd",tree:"#b9d5bb",accent:"#afc8e4",fog:"#c8deef"},{name:"\u82B1\u89C1\u5742",ground:"#d9d7c7",tree:"#f0bfd5",accent:"#c9c1e5",fog:"#dcdff1"},{name:"\u661F\u5149\u5CE1\u8C37",ground:"#c4b8c3",tree:"#a7a5d3",accent:"#d8b4d8",fog:"#dbdce8"}],x={s:0,l:0,speed:0,yaw:0,velocityYaw:0,energy:0,coins:0,score:0,inv:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,wallRecover:0,wallSide:0,stuckTime:0},Ja=1/120,Gx=7.02,nu=new Map,fc=null,ds=0,zs=60,Lr=0,fs=null,zf=new Ce().add(ne(1,.009,.12,.003),Le,"#414957",.01).finish(),ps=Array.from({length:160},()=>({life:0,p:[0,0,0],angle:0,length:1,node:new _e(zf)}));for(let a of ps)a.node.shadow=!1;let kf=0,ee="ready",ks=(Date.now()>>>0)%999999||24681,Za=1,Kn=[],Dr=0,pc=-p/2,mc=100,Ka=0,ln=new Map,gc=0,fi=0,Vs=0,$a=performance.now(),Hi=3,Hn=0,Gs=0,Nr=0,Ur=0,iu=!1,ja=!1,Fr=0,Qa=0;try{Fr=Number(localStorage.getItem("star-rush-best-distance")||0),Qa=Number(localStorage.getItem("star-rush-best-score")||0)}catch{}let pi=Object.fromEntries(["distance","score","coins","speed","gear","energyText","biome","turnText","turnArrowPath","driftText"].map(a=>[a,U(a)])),Ws=null,Or=null,gs=null,yc=U("minimap"),Qt=yc.getContext("2d"),Mc=0,to={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"small",KeyQ:"small",ShiftLeft:"drift",ShiftRight:"drift",KeyE:"boost",KeyC:"boost"};window.addEventListener("keydown",a=>{if(!a.target.closest("input,select,textarea")){if(a.code==="Escape"){for(let l of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])if(!U(l).hidden){vs(l);return}}if(!["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)){if(to[a.code]&&(a.preventDefault(),qa.add(a.code),Bs()),a.code==="Backspace"){a.preventDefault(),a.repeat||vc(!1);return}a.repeat||(a.code==="F2"&&(a.preventDefault(),U("diagnostics").hidden=!U("diagnostics").hidden),(a.code==="KeyP"||a.code==="Escape")&&Wi(),a.code==="KeyV"&&(Hn=(Hn+1)%3,_n("CAMERA "+(Hn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Hn],1)),a.code==="KeyR"&&Hs(!1),a.code==="Enter"&&(ee==="ready"||ee==="finished"?Hs(!1):ee==="paused"&&Wi()))}}}),window.addEventListener("keyup",a=>{["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)||to[a.code]&&(a.preventDefault(),qa.delete(a.code),Bs())}),window.addEventListener("blur",()=>{ms(),ee==="running"&&Wi()});for(let a of document.querySelectorAll("[data-key]")){a.addEventListener("pointerdown",d=>{d.preventDefault(),a.setPointerCapture(d.pointerId),Ya.set(d.pointerId,a.dataset.key),Bs(),a.classList.add("held")});let l=d=>{Ya.delete(d.pointerId),Bs(),a.classList.remove("held")};for(let d of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(d,l)}U("endRunBtn").onclick=()=>{jt==="endless"&&(ee==="running"||ee==="paused")&&(U("paused").hidden=!0,xc())},U("recoverBtn").onclick=()=>vc(!1),U("startBtn").onclick=()=>Hs(!1),U("retryBtn").onclick=()=>Hs(!1),U("newRouteBtn").onclick=()=>{if(typeof et<"u"&&et.room){Xr();return}ee="ready",jn(!0),U("finished").hidden=!0,U("welcome").hidden=!1},U("rerollBtn").onclick=()=>jn(!0),U("pauseBtn").onclick=Wi,U("resumeBtn").onclick=Wi,U("restartPause").onclick=()=>Hs(!1),U("viewBtn").onclick=()=>{Hn=(Hn+1)%3,_n("CAMERA "+(Hn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Hn],1)},U("soundBtn").onclick=()=>{Wa(),Fn=!Fn,ye&&ye.ctx.resume().catch(()=>{}),U("soundBtn").textContent=Fn?"\u266B":"\u266A",U("soundBtn").setAttribute("aria-label",Fn?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),U("soundBtn").title=Fn?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED",Fn&&Vi(600)};let Yf=["#a1cddd","#c2d4bc"].map(a=>new Ce().add(ne(1100,.16,1100,.04),Le,a,.02).finish()),eo=new _e,Sc=[],Br=1,zr=1;new ResizeObserver(hu).observe(i),hu(),jn(!1),i.addEventListener("webglcontextlost",a=>{a.preventDefault(),n("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u6E38\u620F\u3002")}),document.addEventListener("visibilitychange",()=>{document.hidden&&ee==="running"&&Wi(),$a=performance.now()}),requestAnimationFrame(uu);let _s=Qe,kr=null,Ai="circuit",Ei=!1,bc=0;async function Vr(){let a=++bc,l=U("rankRows");U("rankTrack")&&(U("rankTrack").hidden=Ai!=="circuit"),l.replaceChildren(),U("rankStatus").textContent=Ei?"\u672C\u673A\u8BB0\u5F55":"\u6B63\u5728\u83B7\u53D6\u5728\u7EBF\u6210\u7EE9\u2026";for(let[d,_]of[["boardCircuit","circuit"],["boardEndless","endless"]])U(d).classList.toggle("selected",!Ei&&Ai===_);U("boardLocal").classList.toggle("selected",Ei);try{let d;if(Ei)d=du().filter(_=>_.mode===Ai&&(_.mode==="endless"||_.track===_s)).sort((_,S)=>Ai==="circuit"?_.timeMs-S.timeMs:S.distance-_.distance).slice(0,20);else{let _=await fetch("/api/leaderboard?mode="+Ai+"&track="+encodeURIComponent(_s));if(!_.ok)throw new Error("\u699C\u5355\u670D\u52A1\u6682\u4E0D\u53EF\u7528");d=(await _.json()).runs}if(a!==bc)return;for(let _=0;_<d.length;_++)l.appendChild(Zf(_,d[_]));U("rankStatus").textContent=d.length?(Ei?"\u5F53\u524D\u8BBE\u5907 \xB7 ":"\u5728\u7EBF \xB7 ")+(Ai==="circuit"?Zn[_s].name+" / "+Zn[_s].laps+" \u5708 / \u6309\u6700\u5FEB\u7528\u65F6":"\u65E0\u5C3D\u6A21\u5F0F / \u6309\u6700\u8FDC\u91CC\u7A0B"):"\u8FD8\u6CA1\u6709\u6210\u7EE9\uFF0C\u6765\u8DD1\u7B2C\u4E00\u5708\u3002"}catch{if(a!==bc)return;U("rankStatus").textContent="\u5728\u7EBF\u699C\u6682\u65F6\u672A\u80FD\u52A0\u8F7D\uFF0C\u53EF\u5207\u6362\u201C\u672C\u673A\u8BB0\u5F55\u201D\u3002"}}U("rankBtn").onclick=Kf,U("closeRank").onclick=()=>vs("rankPanel"),U("boardCircuit").onclick=()=>{Ai="circuit",Ei=!1,Vr()},U("boardEndless").onclick=()=>{Ai="endless",Ei=!1,Vr()},U("boardLocal").onclick=()=>{Ei=!0,Vr()},U("circuitMode").onclick=()=>fu("circuit"),U("endlessMode").onclick=()=>fu("endless");try{U("racerName").value=localStorage.getItem("star-rush-name")||""}catch{}U("submitRun").onclick=async()=>{if(!kr)return;let a=U("racerName").value.trim().slice(0,16)||"\u533F\u540D\u8F66\u624B";try{localStorage.setItem("star-rush-name",a)}catch{}U("submitRun").disabled=!0,U("uploadStatus").textContent="\u6B63\u5728\u4E0A\u4F20\u6210\u7EE9\u2026";try{if(!(await fetch("/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...kr,name:a})})).ok)throw new Error;U("submitRun").textContent="\u5DF2\u4E0A\u4F20",U("uploadStatus").textContent="\u4E0A\u4F20\u6210\u529F\uFF01\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u699C\u201D\u67E5\u770B\u548C\u670B\u53CB\u7684\u6392\u540D\u3002"}catch{U("submitRun").disabled=!1,U("uploadStatus").textContent="\u6682\u65F6\u672A\u80FD\u4E0A\u4F20\uFF0C\u672C\u673A\u6210\u7EE9\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u91CD\u8BD5\u3002"}};for(let a of document.querySelectorAll("[data-track]"))a.onclick=()=>pu(a.dataset.track);Gr();let Xs=document.createElement("select");Xs.id="rankTrack",Xs.setAttribute("aria-label","\u6392\u884C\u699C\u8D5B\u9053");for(let[a,l]of Object.entries(Zn)){let d=document.createElement("option");d.value=a,d.textContent=l.name,Xs.appendChild(d)}U("rankStatus").before(Xs),Xs.onchange=()=>{_s=Xs.value,Vr()};let An={enabled:!0,volume:.4,sfxVolume:.75};try{Object.assign(An,JSON.parse(localStorage.getItem("star-rush-audio")||"{}"))}catch{}let se={mode:"synth",bus:null,step:0,next:0,files:[],index:0,url:null,element:null},Wr=!1;U("musicBtn").onclick=()=>{Hr(),qs("musicPanel")},U("closeMusic").onclick=()=>vs("musicPanel"),U("helpBtn").onclick=U("welcomeHelp").onclick=()=>qs("helpPanel"),U("closeHelp").onclick=()=>vs("helpPanel"),U("synthMusic").onclick=()=>no("synth"),U("classicMusic").onclick=()=>no("classic"),U("musicFiles").onchange=a=>{se.files=Array.from(a.target.files||[]),io(0)},U("nextSong").onclick=()=>io(se.index+1),U("previousSong").onclick=()=>io(se.index-1),U("musicToggle").onclick=()=>{Hr(),An.enabled=!An.enabled,U("musicToggle").textContent=An.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",Tc()},U("musicVolume").value=Math.round(An.volume*100),U("sfxVolume").value=Math.round(An.sfxVolume*100),U("musicToggle").textContent=An.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",U("musicVolume").oninput=a=>{An.volume=Number(a.target.value)/100,Tc()},U("sfxVolume").oninput=a=>{An.sfxVolume=Number(a.target.value)/100,Tc()},U("classicTrack").onchange=()=>{no("classic"),U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"};let et={id:crypto.randomUUID(),room:null,members:[],ready:!1,busy:!1,lastSync:0,offset:0,startAt:0,runTag:0,peers:new Map,errors:0,rtt:0,session:0},so=["#f6aec9","#ffd88b","#baafff","#a8efce"],jf=so.map(a=>{let l=new Ce;return j(l,[0,2.55,0],[.14,.28,.14],a,[0,0,p]),l.finish()});async function Ac(a,l={}){let d=Date.now(),_=await fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:a,id:et.id,code:et.room?.code||U("roomCode").value.trim(),name:U("roomName").value.trim()||"\u533F\u540D\u8F66\u624B",track:Qe,...l}),signal:AbortSignal.timeout(4e3)}),S=await _.json();if(!_.ok)throw new Error(S.error||"\u623F\u95F4\u8BF7\u6C42\u5931\u8D25");if(et.rtt=Date.now()-d,S.serverTime){let A=S.serverTime-(d+Date.now())/2;et.offset=et.room?F(et.offset,A,.25):A}return S}async function xu(a){if(!et.busy){et.busy=!0,U("roomStatus").textContent="\u6B63\u5728\u8FDE\u63A5\u623F\u95F4\u2026";try{let l=await Ac(a);et.session++,_u(),Qe=l.room.track,jt="circuit",jn(!1),Gr(),Ec(l),ee="ready",Wr=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Gi.classList.add("menu-open");try{localStorage.setItem("star-rush-name",U("roomName").value.trim())}catch{}}catch(l){U("roomStatus").textContent=l.message}finally{et.busy=!1}}}async function vu(a,l={}){if(et.busy)return;et.busy=!0;let d=et.session;try{let _=await Ac(a,l);d===et.session&&et.room&&Ec(_)}catch(_){U("roomStatus").textContent=_.message}finally{et.busy=!1}}async function tp(){if(!et.room)return;let a={action:"leave",id:et.id,code:et.room.code,name:U("roomName").value};et.session++,et.room=null,et.startAt=0,et.runTag=0,et.members=[],_u(),ee="ready",jn(!1),U("finished").hidden=!0,U("paused").hidden=!0,U("countdown").hidden=!0,U("welcome").hidden=!1,Gi.classList.add("menu-open"),Cc(),fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),keepalive:!0}).catch(()=>{})}U("roomBtn").onclick=U("welcomeRoom").onclick=Xr,U("closeRoom").onclick=()=>vs("roomPanel"),U("createRoom").onclick=()=>xu("create"),U("joinRoom").onclick=()=>xu("join"),U("readyRoom").onclick=()=>vu("ready",{ready:!et.ready}),U("startRoom").onclick=()=>vu(et.room?.status!=="lobby"?"reset":"start"),U("leaveRoom").onclick=tp,U("copyRoom").onclick=async()=>{if(!et.room)return;let a=new URL(location.href);a.searchParams.set("room",et.room.code);try{await navigator.clipboard.writeText(a.toString()),U("roomStatus").textContent="\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5373\u53EF\u52A0\u5165"}catch{U("roomStatus").textContent="\u623F\u95F4\u7801 "+et.room.code+" \xB7 \u590D\u5236\u6D4F\u89C8\u5668\u5730\u5740\u5E76\u52A0\u4E0A ?room="+et.room.code}};try{U("roomName").value=localStorage.getItem("star-rush-name")||"\u8F66\u624B"+Math.floor(100+Math.random()*900)}catch{}let Su=new URLSearchParams(location.search).get("room");Su&&(U("roomCode").value=Su.toUpperCase().slice(0,6),Xr()),window.addEventListener("pagehide",()=>{et.room&&navigator.sendBeacon("/api/rooms",new Blob([JSON.stringify({action:"leave",id:et.id,code:et.room.code})],{type:"application/json"}))});let Wn=[],Xi=!1,qi=null,Rc={drawCalls:0,triangles:0},ys=!1,Ci=null,Ri=null,Ms=0,ro=[],ao=0,oo=[],Ys=[],Ss=1,qr=1,Js=null,lo=0,np=["Aoi / AI","Haru / AI","Rin / AI"],bu=["#f0a7c8","#b6a7e6","#f1cd90"],Tu=["#a5dbe6","#f0b7c3"].map(a=>{let l=new Ce;return k(l,[-.6,.03,-.38],[.1,.03,0],.055,a),k(l,[.1,.03,0],[-.6,.03,.38],.055,a),l.finish()}),Pc=Array.from({length:9},()=>new _e(Tu[0]));for(let a of Pc)a.shadow=!1;let Zs=[],Ic=0,Iu=performance.now(),Lc={},Dc=!1,Lu={quality:"auto",sensitivity:1,fov:62,autoGas:!1,line:!0,ghost:!0},sn={...Lu},tn={name:"\u8F66\u624B"+Math.floor(100+Math.random()*900),paint:"#83cde4",car:"Mint Comet"},Pi="race";try{Object.assign(sn,JSON.parse(localStorage.getItem("star-rush-settings-reborn")||"{}")),Object.assign(tn,JSON.parse(localStorage.getItem("star-rush-profile")||"{}")),tn.name=localStorage.getItem("star-rush-name")||tn.name}catch{}let cp=[["Mint Comet","#83cde4","\u8584\u8377\u5F57\u661F"],["Sakura Bloom","#efabc8","\u6A31\u82B1\u7EFD\u653E"],["Violet Hour","#b1a0df","\u66AE\u8272\u7D2B"],["Solar Flare","#edc784","\u65E5\u5149\u91D1"]];U("settingsBtn").onclick=()=>{Nc(),qs("settingsPanel")},U("closeSettings").onclick=()=>vs("settingsPanel");for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).onchange=d=>{sn[l]=d.target.checked,Yr()};U("qualitySetting").onchange=a=>{sn.quality=a.target.value,Yr()},U("steeringSetting").oninput=a=>{sn.sensitivity=Number(a.target.value)/100,Yr()},U("fovSetting").oninput=a=>{sn.fov=Number(a.target.value),Yr()},U("resetSettings").onclick=()=>{sn={...Lu},Yr(),Nc()};for(let[a,l,d]of cp){let _=document.createElement("button");_.type="button",_.style.setProperty("--paint",l),_.setAttribute("aria-label",d+"\u6D82\u88C5");let S=document.createElement("i"),A=document.createElement("b"),R=document.createElement("small");A.textContent=a,R.textContent=d,_.append(S,A,R),_.onclick=()=>{tn.paint=l,tn.car=a;for(let O of U("garageGrid").children)O.classList.toggle("selected",O===_);ho()},tn.paint===l&&_.classList.add("selected"),U("garageGrid").appendChild(_)}U("garageBtn").onclick=()=>qs("garagePanel"),U("closeGarage").onclick=()=>vs("garagePanel"),U("saveProfile").onclick=ho,U("profileName").value=tn.name,ho(),U("eventType").onchange=a=>{Pi=a.target.value,Pi==="practice"&&pu("academy-reborn")},U("pauseHome").onclick=Du,U("newRouteBtn").onclick=Du,U("demoBtn").onclick=()=>{Hs(!1),Xi=!0,_n("DEMO DRIVE","\u81EA\u52A8\u8BD5\u9A7E \xB7 \u6309\u4EFB\u610F\u65B9\u5411\u952E\u63A5\u7BA1",2)},window.addEventListener("keydown",a=>{a.target.closest("input,select,textarea")||["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a.code)&&Xi&&(Xi=!1,qi=null,_n("YOUR TURN","\u5DF2\u63A5\u7BA1\u8D5B\u8F66",1))}),U("compatNotice").hidden=!h,hp(),Nc(),co();for(let a of["racerName","roomName"])U(a).addEventListener("change",()=>{U("profileName").value=U(a).value,ho()});Sf(document,{"coast-reborn":"/assets/course-art/coast-v2.bd2e4837727f.webp","sakura-reborn":"/assets/course-art/sakura-v1.3b94eedaa6d8.webp","academy-reborn":"/assets/course-art/academy-v1.9c6071e18e14.webp"})}catch(o){console.error(o),n("\u6E38\u620F\u521D\u59CB\u5316\u5F02\u5E38\uFF1A"+o.message)}})();})();
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
