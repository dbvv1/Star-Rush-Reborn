(()=>{function Fu(i,t,e,{fetchImpl:n=globalThis.fetch,timeoutMs:s=5e3}={}){let r=new Map,o={light:"idle",medium:"idle"},c=new Set,h=null,u=!1,g="none",v=0,f=new Set;function M(){return h||(h=Promise.all(["light","medium"].map(async p=>{if(u)return;o[p]="loading";let I=new AbortController;f.add(I);let O;try{let E=(async()=>{if(typeof e[p]!="string"||!e[p].startsWith("/assets/impact-audio/"))throw Error("Missing rail asset");let D=await n(e[p],{signal:I.signal});if(!D.ok)throw Error("Rail asset HTTP error");let z=await D.arrayBuffer();if(z.byteLength>5e4)throw Error("Rail asset oversized");let w=await i.decodeAudioData(z);if(!(w.duration>0&&w.duration<=1)||w.numberOfChannels!==1)throw Error("Invalid rail clip");return w})(),L=await Promise.race([E,new Promise((D,z)=>{O=setTimeout(()=>{I.abort(),z(Error("Rail asset timeout"))},s)})]);u||(r.set(p,L),o[p]="ready")}catch{u||(o[p]="fallback")}finally{clearTimeout(O),f.delete(I)}})),h)}function T(){for(let p of[...c]){try{p.source.stop()}catch{}p.cleanup()}}function P(p){if(u||i.state!=="running"||!Number.isFinite(p)||p<.7)return!1;let I=p>5?"medium":"light",O=r.get(I);if(!O)return g=I+" fallback",!1;if(c.size>=4){let z=c.values().next().value;try{z.source.stop()}catch{}z.cleanup()}let E,L,D;try{return E=i.createBufferSource(),L=i.createGain(),E.buffer=O,L.gain.value=.15,E.connect(L),L.connect(t),D={source:E,cleanup(){c.delete(D),E.onended=null,E.disconnect(),L.disconnect()}},E.onended=()=>D.cleanup(),c.add(D),E.start(),E.stop(i.currentTime+O.duration+.02),g=I,v++,!0}catch{return D?D.cleanup():(E?.disconnect(),L?.disconnect()),g=I+" fallback",!1}}function x(){u=!0;for(let p of f)p.abort();T(),r.clear()}return{load:M,play:P,stop:T,dispose:x,status:()=>({states:{...o},active:c.size,last:g,played:v})}}var ad=0,fh=1,od=2;var Ca=1,ml=2,wr=3,is=0,pn=1,vi=2,yi=0,Tr=1,ph=2,mh=3,gh=4,ld=5;var Rs=100,cd=101,hd=102,ud=103,dd=104,fd=200,pd=201,md=202,gd=203,_h=204,xh=205,_d=206,xd=207,vd=208,yd=209,Md=210,Sd=211,bd=212,wd=213,Td=214,Oo=0,Bo=1,ko=2,gr=3,zo=4,Vo=5,Go=6,Ho=7,vh=0,Ad=1,Ed=2,ri=0,yh=1,Mh=2,Sh=3,Ra=4,bh=5,wh=6,Th=7;var Ah=300,ss=301,Ps=302,gl=303,_l=304,Pa=306,Wo=1e3,pi=1001,Xo=1002,je=1003,Cd=1004;var Ia=1005;var fn=1006,xl=1007;var rs=1008;var Dn=1009,Eh=1010,Ch=1011,Ar=1012,vl=1013,ai=1014,qn=1015,oi=1016,yl=1017,Ml=1018,Er=1020,Rh=35902,Ph=35899,Ih=1021,Lh=1022,Yn=1023,mi=1026,as=1027,Cr=1028,Sl=1029,os=1030,bl=1031;var wl=1033,La=33776,Da=33777,Na=33778,Ua=33779,Tl=35840,Al=35841,El=35842,Cl=35843,Rl=36196,Pl=37492,Il=37496,Ll=37488,Dl=37489,Fa=37490,Nl=37491,Ul=37808,Fl=37809,Ol=37810,Bl=37811,kl=37812,zl=37813,Vl=37814,Gl=37815,Hl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,Jl=37821,Zl=36492,Kl=36494,$l=36495,jl=36283,Ql=36284,Oa=36285,tc=36286;var ra=2300,qo=2301,Uo=2302,ah=2303,oh=2400,lh=2401,ch=2402;var Rd=3200;var ec=0,Pd=1,Di="",Cn="srgb",aa="srgb-linear",oa="linear",Ne="srgb";var Fo=7680;var Id=519,Ld=512,Dd=513,Nd=514,nc=515,Ud=516,Fd=517,ic=518,Od=519,Bd=35044,Dh=35048;var Nh="300 es",si=2e3,_r=2001;function vp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kd(){let i=la("canvas");return i.style.display="block",i}var Ou={},xr=null;function Uh(...i){let t="THREE."+i.shift();xr?xr("log",t,...i):console.log(t,...i)}function zd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function se(...i){i=zd(i);let t="THREE."+i.shift();if(xr)xr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function oe(...i){i=zd(i);let t="THREE."+i.shift();if(xr)xr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Es(...i){let t=i.join(" ");t in Ou||(Ou[t]=!0,se(...i))}function Vd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Gd={[Oo]:Bo,[ko]:Go,[zo]:Ho,[gr]:Vo,[Bo]:Oo,[Go]:ko,[Ho]:zo,[Vo]:gr},gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oc=Math.PI/180,Yo=180/Math.PI;function Ba(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Mp(i,t){return(i%t+t)%t}function Bc(i,t,e){return(1-e)*i+e*t}function jr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ae=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_i=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,c){let h=n[s+0],u=n[s+1],g=n[s+2],v=n[s+3],f=r[o+0],M=r[o+1],T=r[o+2],P=r[o+3];if(v!==P||h!==f||u!==M||g!==T){let x=h*f+u*M+g*T+v*P;x<0&&(f=-f,M=-M,T=-T,P=-P,x=-x);let p=1-c;if(x<.9995){let I=Math.acos(x),O=Math.sin(I);p=Math.sin(p*I)/O,c=Math.sin(c*I)/O,h=h*p+f*c,u=u*p+M*c,g=g*p+T*c,v=v*p+P*c}else{h=h*p+f*c,u=u*p+M*c,g=g*p+T*c,v=v*p+P*c;let I=1/Math.sqrt(h*h+u*u+g*g+v*v);h*=I,u*=I,g*=I,v*=I}}t[e]=h,t[e+1]=u,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,o){let c=n[s],h=n[s+1],u=n[s+2],g=n[s+3],v=r[o],f=r[o+1],M=r[o+2],T=r[o+3];return t[e]=c*T+g*v+h*M-u*f,t[e+1]=h*T+g*f+u*v-c*M,t[e+2]=u*T+g*M+c*f-h*v,t[e+3]=g*T-c*v-h*f-u*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,c=Math.cos,h=Math.sin,u=c(n/2),g=c(s/2),v=c(r/2),f=h(n/2),M=h(s/2),T=h(r/2);switch(o){case"XYZ":this._x=f*g*v+u*M*T,this._y=u*M*v-f*g*T,this._z=u*g*T+f*M*v,this._w=u*g*v-f*M*T;break;case"YXZ":this._x=f*g*v+u*M*T,this._y=u*M*v-f*g*T,this._z=u*g*T-f*M*v,this._w=u*g*v+f*M*T;break;case"ZXY":this._x=f*g*v-u*M*T,this._y=u*M*v+f*g*T,this._z=u*g*T+f*M*v,this._w=u*g*v-f*M*T;break;case"ZYX":this._x=f*g*v-u*M*T,this._y=u*M*v+f*g*T,this._z=u*g*T-f*M*v,this._w=u*g*v+f*M*T;break;case"YZX":this._x=f*g*v+u*M*T,this._y=u*M*v+f*g*T,this._z=u*g*T-f*M*v,this._w=u*g*v-f*M*T;break;case"XZY":this._x=f*g*v-u*M*T,this._y=u*M*v-f*g*T,this._z=u*g*T+f*M*v,this._w=u*g*v+f*M*T;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],c=e[5],h=e[9],u=e[2],g=e[6],v=e[10],f=n+c+v;if(f>0){let M=.5/Math.sqrt(f+1);this._w=.25/M,this._x=(g-h)*M,this._y=(r-u)*M,this._z=(o-s)*M}else if(n>c&&n>v){let M=2*Math.sqrt(1+n-c-v);this._w=(g-h)/M,this._x=.25*M,this._y=(s+o)/M,this._z=(r+u)/M}else if(c>v){let M=2*Math.sqrt(1+c-n-v);this._w=(r-u)/M,this._x=(s+o)/M,this._y=.25*M,this._z=(h+g)/M}else{let M=2*Math.sqrt(1+v-n-c);this._w=(o-s)/M,this._x=(r+u)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=e._x,h=e._y,u=e._z,g=e._w;return this._x=n*g+o*c+s*u-r*h,this._y=s*g+o*h+r*c-n*u,this._z=r*g+o*u+n*h-s*c,this._w=o*g-n*c-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=this.dot(t);c<0&&(n=-n,s=-s,r=-r,o=-o,c=-c);let h=1-e;if(c<.9995){let u=Math.acos(c),g=Math.sin(u);h=Math.sin(h*u)/g,e=Math.sin(e*u)/g,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},it=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,c=t.z,h=t.w,u=2*(o*s-c*n),g=2*(c*e-r*s),v=2*(r*n-o*e);return this.x=e+h*u+o*v-c*g,this.y=n+h*g+c*u-r*v,this.z=s+h*v+r*g-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,c=e.y,h=e.z;return this.x=s*h-r*c,this.y=r*o-n*h,this.z=n*c-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kc.copy(this).projectOnVector(t),this.sub(kc)}reflect(t){return this.sub(kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kc=new it,Bu=new _i,le=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,c,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,h,u)}set(t,e,n,s,r,o,c,h,u){let g=this.elements;return g[0]=t,g[1]=s,g[2]=c,g[3]=e,g[4]=r,g[5]=h,g[6]=n,g[7]=o,g[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[3],h=n[6],u=n[1],g=n[4],v=n[7],f=n[2],M=n[5],T=n[8],P=s[0],x=s[3],p=s[6],I=s[1],O=s[4],E=s[7],L=s[2],D=s[5],z=s[8];return r[0]=o*P+c*I+h*L,r[3]=o*x+c*O+h*D,r[6]=o*p+c*E+h*z,r[1]=u*P+g*I+v*L,r[4]=u*x+g*O+v*D,r[7]=u*p+g*E+v*z,r[2]=f*P+M*I+T*L,r[5]=f*x+M*O+T*D,r[8]=f*p+M*E+T*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],g=t[8];return e*o*g-e*c*u-n*r*g+n*c*h+s*r*u-s*o*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],g=t[8],v=g*o-c*u,f=c*h-g*r,M=u*r-o*h,T=e*v+n*f+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/T;return t[0]=v*P,t[1]=(s*u-g*n)*P,t[2]=(c*n-s*o)*P,t[3]=f*P,t[4]=(g*e-s*h)*P,t[5]=(s*r-c*e)*P,t[6]=M*P,t[7]=(n*h-u*e)*P,t[8]=(o*e-n*r)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,c){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*o+u*c)+o+t,-s*u,s*h,-s*(-u*o+h*c)+c+e,0,0,1),this}scale(t,e){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(t,e)),this}rotate(t){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-t)),this}translate(t,e){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zc=new le,ku=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zu=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sp(){let i={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ne&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ne&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[aa]:{primaries:t,whitePoint:n,transfer:oa,toXYZ:ku,fromXYZ:zu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:Ne,toXYZ:ku,fromXYZ:zu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),i}var be=Sp();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var er,Jo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{er===void 0&&(er=la("canvas")),er.width=t.width,er.height=t.height;let s=er.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=er}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=la("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bp=0,vr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ba(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(Vc(s[o].image)):r.push(Vc(s[o]))}else r=Vc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}var wp=0,Gc=new it,In=class i extends gi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pi,s=pi,r=fn,o=rs,c=Yn,h=Dn,u=i.DEFAULT_ANISOTROPY,g=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Ba(),this.name="",this.source=new vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Ah;In.DEFAULT_ANISOTROPY=1;var qe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,u=h[0],g=h[4],v=h[8],f=h[1],M=h[5],T=h[9],P=h[2],x=h[6],p=h[10];if(Math.abs(g-f)<.01&&Math.abs(v-P)<.01&&Math.abs(T-x)<.01){if(Math.abs(g+f)<.1&&Math.abs(v+P)<.1&&Math.abs(T+x)<.1&&Math.abs(u+M+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let O=(u+1)/2,E=(M+1)/2,L=(p+1)/2,D=(g+f)/4,z=(v+P)/4,w=(T+x)/4;return O>E&&O>L?O<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(O),s=D/n,r=z/n):E>L?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=D/s,r=w/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=z/r,s=w/r),this.set(n,s,r,e),this}let I=Math.sqrt((x-T)*(x-T)+(v-P)*(v-P)+(f-g)*(f-g));return Math.abs(I)<.001&&(I=1),this.x=(x-T)/I,this.y=(v-P)/I,this.z=(f-g)/I,this.w=Math.acos((u+M+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new In(s),o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ca=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ko=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Oe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,c,h,u,g,v,f,M,T,P,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,h,u,g,v,f,M,T,P,x)}set(t,e,n,s,r,o,c,h,u,g,v,f,M,T,P,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=c,p[13]=h,p[2]=u,p[6]=g,p[10]=v,p[14]=f,p[3]=M,p[7]=T,p[11]=P,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/nr.setFromMatrixColumn(t,0).length(),r=1/nr.setFromMatrixColumn(t,1).length(),o=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s),g=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let f=o*g,M=o*v,T=c*g,P=c*v;e[0]=h*g,e[4]=-h*v,e[8]=u,e[1]=M+T*u,e[5]=f-P*u,e[9]=-c*h,e[2]=P-f*u,e[6]=T+M*u,e[10]=o*h}else if(t.order==="YXZ"){let f=h*g,M=h*v,T=u*g,P=u*v;e[0]=f+P*c,e[4]=T*c-M,e[8]=o*u,e[1]=o*v,e[5]=o*g,e[9]=-c,e[2]=M*c-T,e[6]=P+f*c,e[10]=o*h}else if(t.order==="ZXY"){let f=h*g,M=h*v,T=u*g,P=u*v;e[0]=f-P*c,e[4]=-o*v,e[8]=T+M*c,e[1]=M+T*c,e[5]=o*g,e[9]=P-f*c,e[2]=-o*u,e[6]=c,e[10]=o*h}else if(t.order==="ZYX"){let f=o*g,M=o*v,T=c*g,P=c*v;e[0]=h*g,e[4]=T*u-M,e[8]=f*u+P,e[1]=h*v,e[5]=P*u+f,e[9]=M*u-T,e[2]=-u,e[6]=c*h,e[10]=o*h}else if(t.order==="YZX"){let f=o*h,M=o*u,T=c*h,P=c*u;e[0]=h*g,e[4]=P-f*v,e[8]=T*v+M,e[1]=v,e[5]=o*g,e[9]=-c*g,e[2]=-u*g,e[6]=M*v+T,e[10]=f-P*v}else if(t.order==="XZY"){let f=o*h,M=o*u,T=c*h,P=c*u;e[0]=h*g,e[4]=-v,e[8]=u*g,e[1]=f*v+P,e[5]=o*g,e[9]=M*v-T,e[2]=T*v-M,e[6]=c*g,e[10]=P*v+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tp,t,Ap)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Wi.crossVectors(n,Un),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Wi.crossVectors(n,Un)),Wi.normalize(),mo.crossVectors(Un,Wi),s[0]=Wi.x,s[4]=mo.x,s[8]=Un.x,s[1]=Wi.y,s[5]=mo.y,s[9]=Un.y,s[2]=Wi.z,s[6]=mo.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[4],h=n[8],u=n[12],g=n[1],v=n[5],f=n[9],M=n[13],T=n[2],P=n[6],x=n[10],p=n[14],I=n[3],O=n[7],E=n[11],L=n[15],D=s[0],z=s[4],w=s[8],R=s[12],V=s[1],J=s[5],Z=s[9],tt=s[13],X=s[2],nt=s[6],ut=s[10],ot=s[14],at=s[3],et=s[7],ht=s[11],dt=s[15];return r[0]=o*D+c*V+h*X+u*at,r[4]=o*z+c*J+h*nt+u*et,r[8]=o*w+c*Z+h*ut+u*ht,r[12]=o*R+c*tt+h*ot+u*dt,r[1]=g*D+v*V+f*X+M*at,r[5]=g*z+v*J+f*nt+M*et,r[9]=g*w+v*Z+f*ut+M*ht,r[13]=g*R+v*tt+f*ot+M*dt,r[2]=T*D+P*V+x*X+p*at,r[6]=T*z+P*J+x*nt+p*et,r[10]=T*w+P*Z+x*ut+p*ht,r[14]=T*R+P*tt+x*ot+p*dt,r[3]=I*D+O*V+E*X+L*at,r[7]=I*z+O*J+E*nt+L*et,r[11]=I*w+O*Z+E*ut+L*ht,r[15]=I*R+O*tt+E*ot+L*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],c=t[5],h=t[9],u=t[13],g=t[2],v=t[6],f=t[10],M=t[14],T=t[3],P=t[7],x=t[11],p=t[15],I=h*M-u*f,O=c*M-u*v,E=c*f-h*v,L=o*M-u*g,D=o*f-h*g,z=o*v-c*g;return e*(P*I-x*O+p*E)-n*(T*I-x*L+p*D)+s*(T*O-P*L+p*z)-r*(T*E-P*D+x*z)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],c=t[9],h=t[2],u=t[6],g=t[10];return e*(o*g-c*u)-n*(r*g-c*h)+s*(r*u-o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],g=t[8],v=t[9],f=t[10],M=t[11],T=t[12],P=t[13],x=t[14],p=t[15],I=e*c-n*o,O=e*h-s*o,E=e*u-r*o,L=n*h-s*c,D=n*u-r*c,z=s*u-r*h,w=g*P-v*T,R=g*x-f*T,V=g*p-M*T,J=v*x-f*P,Z=v*p-M*P,tt=f*p-M*x,X=I*tt-O*Z+E*J+L*V-D*R+z*w;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let nt=1/X;return t[0]=(c*tt-h*Z+u*J)*nt,t[1]=(s*Z-n*tt-r*J)*nt,t[2]=(P*z-x*D+p*L)*nt,t[3]=(f*D-v*z-M*L)*nt,t[4]=(h*V-o*tt-u*R)*nt,t[5]=(e*tt-s*V+r*R)*nt,t[6]=(x*E-T*z-p*O)*nt,t[7]=(g*z-f*E+M*O)*nt,t[8]=(o*Z-c*V+u*w)*nt,t[9]=(n*V-e*Z-r*w)*nt,t[10]=(T*D-P*E+p*I)*nt,t[11]=(v*E-g*D-M*I)*nt,t[12]=(c*R-o*J-h*w)*nt,t[13]=(e*J-n*R+s*w)*nt,t[14]=(P*O-T*L-x*I)*nt,t[15]=(g*L-v*O+f*I)*nt,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,c=t.y,h=t.z,u=r*o,g=r*c;return this.set(u*o+n,u*c-s*h,u*h+s*c,0,u*c+s*h,g*c+n,g*h-s*o,0,u*h-s*c,g*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,c=e._z,h=e._w,u=r+r,g=o+o,v=c+c,f=r*u,M=r*g,T=r*v,P=o*g,x=o*v,p=c*v,I=h*u,O=h*g,E=h*v,L=n.x,D=n.y,z=n.z;return s[0]=(1-(P+p))*L,s[1]=(M+E)*L,s[2]=(T-O)*L,s[3]=0,s[4]=(M-E)*D,s[5]=(1-(f+p))*D,s[6]=(x+I)*D,s[7]=0,s[8]=(T+O)*z,s[9]=(x-I)*z,s[10]=(1-(f+P))*z,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=nr.set(s[0],s[1],s[2]).length(),c=nr.set(s[4],s[5],s[6]).length(),h=nr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ti.copy(this);let u=1/o,g=1/c,v=1/h;return ti.elements[0]*=u,ti.elements[1]*=u,ti.elements[2]*=u,ti.elements[4]*=g,ti.elements[5]*=g,ti.elements[6]*=g,ti.elements[8]*=v,ti.elements[9]*=v,ti.elements[10]*=v,e.setFromRotationMatrix(ti),n.x=o,n.y=c,n.z=h,this}makePerspective(t,e,n,s,r,o,c=si,h=!1){let u=this.elements,g=2*r/(e-t),v=2*r/(n-s),f=(e+t)/(e-t),M=(n+s)/(n-s),T,P;if(h)T=r/(o-r),P=o*r/(o-r);else if(c===si)T=-(o+r)/(o-r),P=-2*o*r/(o-r);else if(c===_r)T=-o/(o-r),P=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=g,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=v,u[9]=M,u[13]=0,u[2]=0,u[6]=0,u[10]=T,u[14]=P,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,o,c=si,h=!1){let u=this.elements,g=2/(e-t),v=2/(n-s),f=-(e+t)/(e-t),M=-(n+s)/(n-s),T,P;if(h)T=1/(o-r),P=o/(o-r);else if(c===si)T=-2/(o-r),P=-(o+r)/(o-r);else if(c===_r)T=-1/(o-r),P=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=g,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=v,u[9]=0,u[13]=M,u[2]=0,u[6]=0,u[10]=T,u[14]=P,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},nr=new it,ti=new Oe,Tp=new it(0,0,0),Ap=new it(1,1,1),Wi=new it,mo=new it,Un=new it,Vu=new Oe,Gu=new _i,Ki=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],c=s[8],h=s[1],u=s[5],g=s[9],v=s[2],f=s[6],M=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(f,M),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,u),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-g,M),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";var ha=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ep=0,Hu=new it,ir=new _i,Ei=new Oe,go=new it,Qr=new it,Cp=new it,Rp=new _i,Wu=new it(1,0,0),Xu=new it(0,1,0),qu=new it(0,0,1),Yu={type:"added"},Pp={type:"removed"},sr={type:"childadded",child:null},Hc={type:"childremoved",child:null},yn=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new it,e=new Ki,n=new _i,s=new it(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new le}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(Wu,t)}rotateY(t){return this.rotateOnAxis(Xu,t)}rotateZ(t){return this.rotateOnAxis(qu,t)}translateOnAxis(t,e){return Hu.copy(t).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wu,t)}translateY(t){return this.translateOnAxis(Xu,t)}translateZ(t){return this.translateOnAxis(qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Qr,go,this.up):Ei.lookAt(go,Qr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Ei),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yu),sr.child=t,this.dispatchEvent(sr),sr.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pp),Hc.child=t,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yu),sr.child=t,this.dispatchEvent(sr),sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,Cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let h=c.shapes;if(Array.isArray(h))for(let u=0,g=h.length;u<g;u++){let v=h[u];r(t.shapes,v)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let h=0,u=this.material.length;h<u;h++)c.push(r(t.materials,this.material[h]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let h=this.animations[c];s.animations.push(r(t.animations,h))}}if(e){let c=o(t.geometries),h=o(t.materials),u=o(t.textures),g=o(t.images),v=o(t.shapes),f=o(t.skeletons),M=o(t.animations),T=o(t.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),g.length>0&&(n.images=g),v.length>0&&(n.shapes=v),f.length>0&&(n.skeletons=f),M.length>0&&(n.animations=M),T.length>0&&(n.nodes=T)}return n.object=s,n;function o(c){let h=[];for(let u in c){let g=c[u];delete g.metadata,h.push(g)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new it(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var As=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ip={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,c=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(let P of t.hand.values()){let x=e.getJointPose(P,n),p=this._getHandJoint(u,P);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let g=u.joints["index-finger-tip"],v=u.joints["thumb-tip"],f=g.position.distanceTo(v.position),M=.02,T=.005;u.inputState.pinching&&f>M+T?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=M-T&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new As;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Wc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var de=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=Mp(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wc(o,r,t+1/3),this.g=Wc(o,r,t),this.b=Wc(o,r,t-1/3)}return be.colorSpaceToWorking(this,s),this}setStyle(t,e=Cn){function n(r){r!==void 0&&parseFloat(r)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){let n=Hd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return be.workingToColorSpace(xn.copy(this),t),Math.round(Te(xn.r*255,0,255))*65536+Math.round(Te(xn.g*255,0,255))*256+Math.round(Te(xn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(xn.copy(this),e);let n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),c=Math.min(n,s,r),h,u,g=(c+o)/2;if(c===o)h=0,u=0;else{let v=o-c;switch(u=g<=.5?v/(o+c):v/(2-o-c),o){case n:h=(s-r)/v+(s<r?6:0);break;case s:h=(r-n)/v+2;break;case r:h=(n-s)/v+4;break}h/=6}return t.h=h,t.s=u,t.l=g,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=Cn){be.workingToColorSpace(xn.copy(this),t);let e=xn.r,n=xn.g,s=xn.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(_o);let n=Bc(Xi.h,_o.h,e),s=Bc(Xi.s,_o.s,e),r=Bc(Xi.l,_o.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new de;de.NAMES=Hd;var ua=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},da=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new it,Ci=new it,Xc=new it,Ri=new it,rr=new it,ar=new it,Ju=new it,qc=new it,Yc=new it,Jc=new it,Zc=new qe,Kc=new qe,$c=new qe,Zi=class i{constructor(t=new it,e=new it,n=new it){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ei.subVectors(t,e),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ei.subVectors(s,e),Ci.subVectors(n,e),Xc.subVectors(t,e);let o=ei.dot(ei),c=ei.dot(Ci),h=ei.dot(Xc),u=Ci.dot(Ci),g=Ci.dot(Xc),v=o*u-c*c;if(v===0)return r.set(0,0,0),null;let f=1/v,M=(u*h-c*g)*f,T=(o*g-c*h)*f;return r.set(1-M-T,T,M)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,s,r,o,c,h){return this.getBarycoord(t,e,n,s,Ri)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ri.x),h.addScaledVector(o,Ri.y),h.addScaledVector(c,Ri.z),h)}static getInterpolatedAttribute(t,e,n,s,r,o){return Zc.setScalar(0),Kc.setScalar(0),$c.setScalar(0),Zc.fromBufferAttribute(t,e),Kc.fromBufferAttribute(t,n),$c.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zc,r.x),o.addScaledVector(Kc,r.y),o.addScaledVector($c,r.z),o}static isFrontFacing(t,e,n,s){return ei.subVectors(n,e),Ci.subVectors(t,e),ei.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,c;rr.subVectors(s,n),ar.subVectors(r,n),qc.subVectors(t,n);let h=rr.dot(qc),u=ar.dot(qc);if(h<=0&&u<=0)return e.copy(n);Yc.subVectors(t,s);let g=rr.dot(Yc),v=ar.dot(Yc);if(g>=0&&v<=g)return e.copy(s);let f=h*v-g*u;if(f<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(rr,o);Jc.subVectors(t,r);let M=rr.dot(Jc),T=ar.dot(Jc);if(T>=0&&M<=T)return e.copy(r);let P=M*u-h*T;if(P<=0&&u>=0&&T<=0)return c=u/(u-T),e.copy(n).addScaledVector(ar,c);let x=g*T-M*v;if(x<=0&&v-g>=0&&M-T>=0)return Ju.subVectors(r,s),c=(v-g)/(v-g+(M-T)),e.copy(s).addScaledVector(Ju,c);let p=1/(x+P+f);return o=P*p,c=f*p,e.copy(n).addScaledVector(rr,o).addScaledVector(ar,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xi=class{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ta),vo.subVectors(this.max,ta),or.subVectors(t.a,ta),lr.subVectors(t.b,ta),cr.subVectors(t.c,ta),qi.subVectors(lr,or),Yi.subVectors(cr,lr),Ss.subVectors(or,cr);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-Ss.z,Ss.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,Ss.z,0,-Ss.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-Ss.y,Ss.x,0];return!jc(e,or,lr,cr,vo)||(e=[1,0,0,0,1,0,0,0,1],!jc(e,or,lr,cr,vo))?!1:(yo.crossVectors(qi,Yi),e=[yo.x,yo.y,yo.z],jc(e,or,lr,cr,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pi=[new it,new it,new it,new it,new it,new it,new it,new it],ni=new it,xo=new xi,or=new it,lr=new it,cr=new it,qi=new it,Yi=new it,Ss=new it,ta=new it,vo=new it,yo=new it,bs=new it;function jc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);let c=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),h=t.dot(bs),u=e.dot(bs),g=n.dot(bs);if(Math.max(-Math.max(h,u,g),Math.min(h,u,g))>c)return!1}return!0}var tn=new it,Mo=new Ae,Lp=0,On=class extends gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bd,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array),r=Pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var fa=class extends On{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pa=class extends On{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var sn=class extends On{constructor(t,e,n){super(new Float32Array(t),e,n)}},Dp=new xi,ea=new it,Qc=new it,$i=class{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ea.subVectors(t,this.center);let e=ea.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ea,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ea.copy(t.center).add(Qc)),this.expandByPoint(ea.copy(t.center).sub(Qc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Np=0,Xn=new Oe,th=new yn,hr=new it,Fn=new xi,na=new xi,cn=new it,Bn=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vp(t)?pa:fa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return th.lookAt(t),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let c=e[r];na.setFromBufferAttribute(c),this.morphTargetsRelative?(cn.addVectors(Fn.min,na.min),Fn.expandByPoint(cn),cn.addVectors(Fn.max,na.max),Fn.expandByPoint(cn)):(Fn.expandByPoint(na.min),Fn.expandByPoint(na.max))}Fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let c=e[r],h=this.morphTargetsRelative;for(let u=0,g=c.count;u<g;u++)cn.fromBufferAttribute(c,u),h&&(hr.fromBufferAttribute(t,u),cn.add(hr)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new On(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let c=[],h=[];for(let w=0;w<n.count;w++)c[w]=new it,h[w]=new it;let u=new it,g=new it,v=new it,f=new Ae,M=new Ae,T=new Ae,P=new it,x=new it;function p(w,R,V){u.fromBufferAttribute(n,w),g.fromBufferAttribute(n,R),v.fromBufferAttribute(n,V),f.fromBufferAttribute(r,w),M.fromBufferAttribute(r,R),T.fromBufferAttribute(r,V),g.sub(u),v.sub(u),M.sub(f),T.sub(f);let J=1/(M.x*T.y-T.x*M.y);isFinite(J)&&(P.copy(g).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(J),x.copy(v).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(J),c[w].add(P),c[R].add(P),c[V].add(P),h[w].add(x),h[R].add(x),h[V].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let w=0,R=I.length;w<R;++w){let V=I[w],J=V.start,Z=V.count;for(let tt=J,X=J+Z;tt<X;tt+=3)p(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}let O=new it,E=new it,L=new it,D=new it;function z(w){L.fromBufferAttribute(s,w),D.copy(L);let R=c[w];O.copy(R),O.sub(L.multiplyScalar(L.dot(R))).normalize(),E.crossVectors(D,R);let J=E.dot(h[w])<0?-1:1;o.setXYZW(w,O.x,O.y,O.z,J)}for(let w=0,R=I.length;w<R;++w){let V=I[w],J=V.start,Z=V.count;for(let tt=J,X=J+Z;tt<X;tt+=3)z(t.getX(tt+0)),z(t.getX(tt+1)),z(t.getX(tt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,M=n.count;f<M;f++)n.setXYZ(f,0,0,0);let s=new it,r=new it,o=new it,c=new it,h=new it,u=new it,g=new it,v=new it;if(t)for(let f=0,M=t.count;f<M;f+=3){let T=t.getX(f+0),P=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,T),r.fromBufferAttribute(e,P),o.fromBufferAttribute(e,x),g.subVectors(o,r),v.subVectors(s,r),g.cross(v),c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),c.add(g),h.add(g),u.add(g),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(P,h.x,h.y,h.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,M=e.count;f<M;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),g.subVectors(o,r),v.subVectors(s,r),g.cross(v),n.setXYZ(f+0,g.x,g.y,g.z),n.setXYZ(f+1,g.x,g.y,g.z),n.setXYZ(f+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(c,h){let u=c.array,g=c.itemSize,v=c.normalized,f=new u.constructor(h.length*g),M=0,T=0;for(let P=0,x=h.length;P<x;P++){c.isInterleavedBufferAttribute?M=h[P]*c.data.stride+c.offset:M=h[P]*g;for(let p=0;p<g;p++)f[T++]=u[M++]}return new On(f,g,v)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let h=s[c],u=t(h,n);e.setAttribute(c,u)}let r=this.morphAttributes;for(let c in r){let h=[],u=r[c];for(let g=0,v=u.length;g<v;g++){let f=u[g],M=t(f,n);h.push(M)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],g=[];for(let v=0,f=u.length;v<f;v++){let M=u[v];g.push(M.toJSON(t.data))}g.length>0&&(s[h]=g,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let g=s[u];this.setAttribute(u,g.clone(e))}let r=t.morphAttributes;for(let u in r){let g=[],v=r[u];for(let f=0,M=v.length;f<M;f++)g.push(v[f].clone(e));this.morphAttributes[u]=g}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let u=0,g=o.length;u<g;u++){let v=o[u];this.addGroup(v.start,v.count,v.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var eh=new it,Up=new it,Fp=new le,ii=class{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=eh.subVectors(n,e).cross(Up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(eh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fp.getNormalMatrix(t),s=this.coplanarPoint(eh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Op=0,ji=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=Tr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=xh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let h=r[c];delete h.metadata,o.push(h)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ii=new it,nh=new it,So=new it,bo=new it,$o=class{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nh.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),bo.copy(this.origin).sub(nh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(So),c=bo.dot(this.direction),h=-bo.dot(So),u=bo.lengthSq(),g=Math.abs(1-o*o),v,f,M,T;if(g>0)if(v=o*h-c,f=o*c-h,T=r*g,v>=0)if(f>=-T)if(f<=T){let P=1/g;v*=P,f*=P,M=v*(v+o*f+2*c)+f*(o*v+f+2*h)+u}else f=r,v=Math.max(0,-(o*f+c)),M=-v*v+f*(f+2*h)+u;else f=-r,v=Math.max(0,-(o*f+c)),M=-v*v+f*(f+2*h)+u;else f<=-T?(v=Math.max(0,-(-o*r+c)),f=v>0?-r:Math.min(Math.max(-r,-h),r),M=-v*v+f*(f+2*h)+u):f<=T?(v=0,f=Math.min(Math.max(-r,-h),r),M=f*(f+2*h)+u):(v=Math.max(0,-(o*r+c)),f=v>0?r:Math.min(Math.max(-r,-h),r),M=-v*v+f*(f+2*h)+u);else f=o>0?-r:r,v=Math.max(0,-(o*f+c)),M=-v*v+f*(f+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(nh).addScaledVector(So,f),M}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,h=n+o;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,c,h,u=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),g>=0?(r=(t.min.y-f.y)*g,o=(t.max.y-f.y)*g):(r=(t.max.y-f.y)*g,o=(t.min.y-f.y)*g),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),v>=0?(c=(t.min.z-f.z)*v,h=(t.max.z-f.z)*v):(c=(t.max.z-f.z)*v,h=(t.min.z-f.z)*v),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,c=this.direction,h=c.x,u=c.y,g=c.z,v=t.x-o.x,f=t.y-o.y,M=t.z-o.z,T=e.x-o.x,P=e.y-o.y,x=e.z-o.z,p=n.x-o.x,I=n.y-o.y,O=n.z-o.z,E=Math.abs(h),L=Math.abs(u),D=Math.abs(g),z,w,R,V,J,Z,tt,X,nt,ut,ot,at;if(E>=L&&E>=D?(R=h,Z=v,nt=T,at=p,h>=0?(z=u,w=g,V=f,J=M,tt=P,X=x,ut=I,ot=O):(z=g,w=u,V=M,J=f,tt=x,X=P,ut=O,ot=I)):L>=D?(R=u,Z=f,nt=P,at=I,u>=0?(z=g,w=h,V=M,J=v,tt=x,X=T,ut=O,ot=p):(z=h,w=g,V=v,J=M,tt=T,X=x,ut=p,ot=O)):(R=g,Z=M,nt=x,at=O,g>=0?(z=h,w=u,V=v,J=f,tt=T,X=P,ut=p,ot=I):(z=u,w=h,V=f,J=v,tt=P,X=T,ut=I,ot=p)),R===0)return null;let et=z/R,ht=w/R,dt=1/R,Vt=V-et*Z,Jt=J-ht*Z,Be=tt-et*nt,ye=X-ht*nt,Re=ut-et*at,mt=ot-ht*at,vt=Re*ye-mt*Be,Xt=Vt*mt-Jt*Re,ie=Be*Jt-ye*Vt;if(s){if(vt<0||Xt<0||ie<0)return null}else if((vt<0||Xt<0||ie<0)&&(vt>0||Xt>0||ie>0))return null;let Bt=vt+Xt+ie;if(Bt===0)return null;let ue=dt*(vt*Z+Xt*nt+ie*at);return(Bt>0?ue<0:ue>0)?null:this.at(ue/Bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ma=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zu=new Oe,ws=new $o,wo=new $i,Ku=new it,To=new it,Ao=new it,Eo=new it,ih=new it,Co=new it,$u=new it,Ro=new it,Mn=class extends yn{constructor(t=new Bn,e=new ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){Co.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let g=c[h],v=r[h];g!==0&&(ih.fromBufferAttribute(v,t),o?Co.addScaledVector(ih,g):Co.addScaledVector(ih.sub(e),g))}e.add(Co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),ws.copy(t.ray).recast(t.near),!(wo.containsPoint(ws.origin)===!1&&(ws.intersectSphere(wo,Ku)===null||ws.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&(Zu.copy(r).invert(),ws.copy(t.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,c=r.index,h=r.attributes.position,u=r.attributes.uv,g=r.attributes.uv1,v=r.attributes.normal,f=r.groups,M=r.drawRange;if(c!==null)if(Array.isArray(o))for(let T=0,P=f.length;T<P;T++){let x=f[T],p=o[x.materialIndex],I=Math.max(x.start,M.start),O=Math.min(c.count,Math.min(x.start+x.count,M.start+M.count));for(let E=I,L=O;E<L;E+=3){let D=c.getX(E),z=c.getX(E+1),w=c.getX(E+2);s=Po(this,p,t,n,u,g,v,D,z,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let T=Math.max(0,M.start),P=Math.min(c.count,M.start+M.count);for(let x=T,p=P;x<p;x+=3){let I=c.getX(x),O=c.getX(x+1),E=c.getX(x+2);s=Po(this,o,t,n,u,g,v,I,O,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let T=0,P=f.length;T<P;T++){let x=f[T],p=o[x.materialIndex],I=Math.max(x.start,M.start),O=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let E=I,L=O;E<L;E+=3){let D=E,z=E+1,w=E+2;s=Po(this,p,t,n,u,g,v,D,z,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let T=Math.max(0,M.start),P=Math.min(h.count,M.start+M.count);for(let x=T,p=P;x<p;x+=3){let I=x,O=x+1,E=x+2;s=Po(this,o,t,n,u,g,v,I,O,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Bp(i,t,e,n,s,r,o,c){let h;if(t.side===pn?h=n.intersectTriangle(o,r,s,!0,c):h=n.intersectTriangle(s,r,o,t.side===is,c),h===null)return null;Ro.copy(c),Ro.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Ro);return u<e.near||u>e.far?null:{distance:u,point:Ro.clone(),object:i}}function Po(i,t,e,n,s,r,o,c,h,u){i.getVertexPosition(c,To),i.getVertexPosition(h,Ao),i.getVertexPosition(u,Eo);let g=Bp(i,t,e,n,To,Ao,Eo,$u);if(g){let v=new it;Zi.getBarycoord($u,To,Ao,Eo,v),s&&(g.uv=Zi.getInterpolatedAttribute(s,c,h,u,v,new Ae)),r&&(g.uv1=Zi.getInterpolatedAttribute(r,c,h,u,v,new Ae)),o&&(g.normal=Zi.getInterpolatedAttribute(o,c,h,u,v,new it),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));let f={a:c,b:h,c:u,normal:new it,materialIndex:0};Zi.getNormal(To,Ao,Eo,f.normal),g.face=f,g.barycoord=v}return g}var Cs=class extends In{constructor(t=null,e=1,n=1,s,r,o,c,h,u=je,g=je,v,f){super(null,o,c,h,u,g,s,r,v,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ga=class extends On{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ur=new Oe,ju=new Oe,Io=[],Qu=new xi,kp=new Oe,ia=new Mn,sa=new $i,_a=class extends Mn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ur),Qu.copy(t.boundingBox).applyMatrix4(ur),this.boundingBox.union(Qu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ur),sa.copy(t.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(sa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let c=0;c<n.length;c++)n[c]=s[o+c]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),t.ray.intersectsSphere(sa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),ju.multiplyMatrices(n,ur),ia.matrixWorld=ju,ia.raycast(t,Io);for(let o=0,c=Io.length;o<c;o++){let h=Io[o];h.instanceId=r,h.object=this,e.push(h)}Io.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cs(new Float32Array(s*this.count),s,this.count,Cr,qn));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let c=this.geometry.morphTargetsRelative?1:1-o,h=s*t;return r[h]=c,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new $i,zp=new Ae(.5,.5),Lo=new it,Mr=class{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si,n=!1){let s=this.planes,r=t.elements,o=r[0],c=r[1],h=r[2],u=r[3],g=r[4],v=r[5],f=r[6],M=r[7],T=r[8],P=r[9],x=r[10],p=r[11],I=r[12],O=r[13],E=r[14],L=r[15];if(s[0].setComponents(u-o,M-g,p-T,L-I).normalize(),s[1].setComponents(u+o,M+g,p+T,L+I).normalize(),s[2].setComponents(u+c,M+v,p+P,L+O).normalize(),s[3].setComponents(u-c,M-v,p-P,L-O).normalize(),n)s[4].setComponents(h,f,x,E).normalize(),s[5].setComponents(u-h,M-f,p-x,L-E).normalize();else if(s[4].setComponents(u-h,M-f,p-x,L-E).normalize(),e===si)s[5].setComponents(u+h,M+f,p+x,L+E).normalize();else if(e===_r)s[5].setComponents(h,f,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);let e=zp.distanceTo(t.center);return Ts.radius=.7071067811865476+e,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xa=class extends In{constructor(t=[],e=ss,n,s,r,o,c,h,u,g){super(t,e,n,s,r,o,c,h,u,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Qi=class extends In{constructor(t,e,n=ai,s,r,o,c=je,h=je,u,g=mi,v=1){if(g!==mi&&g!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:v};super(f,s,r,o,c,h,g,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},jo=class extends Qi{constructor(t,e=ai,n=ss,s,r,o=je,c=je,h,u=mi){let g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,e,n,s,r,o,c,h,u),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},va=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Sr=class i extends Bn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],u=[],g=[],v=[],f=0,M=0;T("z","y","x",-1,-1,n,e,t,o,r,0),T("z","y","x",1,-1,n,e,-t,o,r,1),T("x","z","y",1,1,t,n,e,s,o,2),T("x","z","y",1,-1,t,n,-e,s,o,3),T("x","y","z",1,-1,t,e,n,s,r,4),T("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(v,2));function T(P,x,p,I,O,E,L,D,z,w,R){let V=E/z,J=L/w,Z=E/2,tt=L/2,X=D/2,nt=z+1,ut=w+1,ot=0,at=0,et=new it;for(let ht=0;ht<ut;ht++){let dt=ht*J-tt;for(let Vt=0;Vt<nt;Vt++){let Jt=Vt*V-Z;et[P]=Jt*I,et[x]=dt*O,et[p]=X,u.push(et.x,et.y,et.z),et[P]=0,et[x]=0,et[p]=D>0?1:-1,g.push(et.x,et.y,et.z),v.push(Vt/z),v.push(1-ht/w),ot+=1}}for(let ht=0;ht<w;ht++)for(let dt=0;dt<z;dt++){let Vt=f+dt+nt*ht,Jt=f+dt+nt*(ht+1),Be=f+(dt+1)+nt*(ht+1),ye=f+(dt+1)+nt*ht;h.push(Vt,Jt,ye),h.push(Jt,Be,ye),at+=6}c.addGroup(M,at,R),M+=at,f+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ya=class i extends Bn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,c=Math.floor(n),h=Math.floor(s),u=c+1,g=h+1,v=t/c,f=e/h,M=[],T=[],P=[],x=[];for(let p=0;p<g;p++){let I=p*f-o;for(let O=0;O<u;O++){let E=O*v-r;T.push(E,-I,0),P.push(0,0,1),x.push(O/c),x.push(1-p/h)}}for(let p=0;p<h;p++)for(let I=0;I<c;I++){let O=I+u*p,E=I+u*(p+1),L=I+1+u*(p+1),D=I+1+u*p;M.push(O,E,D),M.push(E,L,D)}this.setIndex(M),this.setAttribute("position",new sn(T,3)),this.setAttribute("normal",new sn(P,3)),this.setAttribute("uv",new sn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ma=class i extends Bn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(o+c,Math.PI),u=0,g=[],v=new it,f=new it,M=[],T=[],P=[],x=[];for(let p=0;p<=n;p++){let I=[],O=p/n,E=o+O*c,L=t*Math.cos(E),D=Math.sqrt(t*t-L*L),z=0;p===0&&o===0?z=.5/e:p===n&&h===Math.PI&&(z=-.5/e);for(let w=0;w<=e;w++){let R=w/e,V=s+R*r;v.x=-D*Math.cos(V),v.y=L,v.z=D*Math.sin(V),T.push(v.x,v.y,v.z),f.copy(v).normalize(),P.push(f.x,f.y,f.z),x.push(R+z,1-O),I.push(u++)}g.push(I)}for(let p=0;p<n;p++)for(let I=0;I<e;I++){let O=g[p][I+1],E=g[p][I],L=g[p+1][I],D=g[p+1][I+1];(p!==0||o>0)&&M.push(O,E,D),(p!==n-1||h<Math.PI)&&M.push(E,L,D)}this.setIndex(M),this.setAttribute("position",new sn(T,3)),this.setAttribute("normal",new sn(P,3)),this.setAttribute("uv",new sn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(td(s))s.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(td(s[0])){let r=[];for(let o=0,c=s.length;o<c;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Sn(i){let t={};for(let e=0;e<i.length;e++){let n=Is(i[e]);for(let s in n)t[s]=n[s]}return t}function td(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Vp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var Wd={clone:Is,merge:Sn},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new it().fromArray(s.value);break;case"v4":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qo=class extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Sa=class extends ji{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var tl=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},el=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function dr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function sh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let c=e[1];t<c&&(n=2,r=c);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let c=n+o>>>1;t<e[c]?o=c:n=c+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nl=class extends ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oh,endingEnd:oh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,c=s[r],h=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case lh:r=t,c=2*e-n;break;case ch:r=s.length-2,c=e+s[r]-s[r+1];break;default:r=t,c=n}if(h===void 0)switch(this.getSettings_().endingEnd){case lh:o=t,h=2*n-e;break;case ch:o=1,h=n+s[1]-s[0];break;default:o=t-1,h=e}let u=(n-e)*.5,g=this.valueSize;this._weightPrev=u/(e-c),this._weightNext=u/(h-n),this._offsetPrev=r*g,this._offsetNext=o*g}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,g=this._offsetPrev,v=this._offsetNext,f=this._weightPrev,M=this._weightNext,T=(n-e)/(s-e),P=T*T,x=P*T,p=-f*x+2*f*P-f*T,I=(1+f)*x+(-1.5-2*f)*P+(-.5+f)*T+1,O=(-1-M)*x+(1.5+M)*P+.5*T,E=M*x-M*P;for(let L=0;L!==c;++L)r[L]=p*o[g+L]+I*o[u+L]+O*o[h+L]+E*o[v+L];return r}},il=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,g=(n-e)/(s-e),v=1-g;for(let f=0;f!==c;++f)r[f]=o[u+f]*v+o[h+f]*g;return r}},sl=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rl=class extends ts{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,g=this.inTangents,v=this.outTangents;if(!g||!v){let T=(n-e)/(s-e),P=1-T;for(let x=0;x!==c;++x)r[x]=o[u+x]*P+o[h+x]*T;return r}let f=c*2,M=t-1;for(let T=0;T!==c;++T){let P=o[u+T],x=o[h+T],p=M*f+T*2,I=v[p],O=v[p+1],E=t*f+T*2,L=g[E],D=g[E+1],z=Xp(n,e,I,L,s);r[T]=Xd(z,P,O,D,x)}return r}};function Xd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Wp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Xp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let c=Xd(r,t,e,n,s)-i;if(Math.abs(c)<1e-10)break;let h=Wp(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-c/h))}return r}var kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),sh(t.settings)&&(n.settings={inTangents:dr(t.settings.inTangents,Array),outTangents:dr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new rl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case Uo:e=this.InterpolantFactoryMethodSmooth;break;case ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return se("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Uo;case this.InterpolantFactoryMethodBezier:return ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;sh(this.settings)&&(ed(this.settings.inTangents,t),ed(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(oe("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let c=0;c!==r;c++){let h=n[c];if(typeof h=="number"&&isNaN(h)){oe("KeyframeTrack: Time is not a valid number.",this,c,h),t=!1;break}if(o!==null&&o>h){oe("KeyframeTrack: Out of order keys.",this,c,h,o),t=!1;break}o=h}if(s!==void 0&&yp(s))for(let c=0,h=s.length;c!==h;++c){let u=s[c];if(isNaN(u)){oe("KeyframeTrack: Value is not a valid number.",this,c,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uo,r=t.length-1,o=1;for(let c=1;c<r;++c){let h=!1,u=t[c],g=t[c+1];if(u!==g&&(c!==1||u!==t[0]))if(s)h=!0;else{let v=c*n,f=v-n,M=v+n;for(let T=0;T!==n;++T){let P=e[v+T];if(P!==e[f+T]||P!==e[M+T]){h=!0;break}}}if(h){if(c!==o){t[o]=t[c];let v=c*n,f=o*n;for(let M=0;M!==n;++M)e[f+M]=e[v+M]}++o}}if(r>0){t[o]=t[r];for(let c=r*n,h=o*n,u=0;u!==n;++u)e[h+u]=e[c+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,sh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ed(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=qo;var es=class extends kn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=ra;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};al.prototype.ValueTypeName="color";var ol=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};ol.prototype.ValueTypeName="number";var ll=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=(n-e)/(s-e),u=t*c;for(let g=u+c;u!==g;u+=4)_i.slerpFlat(r,0,o,u-c,o,u,h);return r}},ba=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends kn{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=ra;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};cl.prototype.ValueTypeName="vector";var hl=class{constructor(t,e,n){let s=this,r=!1,o=0,c=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(g){c++,r===!1&&s.onStart!==void 0&&s.onStart(g,o,c),r=!0},this.itemEnd=function(g){o++,s.onProgress!==void 0&&s.onProgress(g,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return u.push(g,v),this},this.removeHandler=function(g){let v=u.indexOf(g);return v!==-1&&u.splice(v,2),this},this.getHandler=function(g){for(let v=0,f=u.length;v<f;v+=2){let M=u[v],T=u[v+1];if(M.global&&(M.lastIndex=0),M.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qd=new hl,ul=class{constructor(t){this.manager=t!==void 0?t:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var wa=class extends yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ta=class extends wa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rh=new Oe,nd=new it,id=new it,dl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nd.setFromMatrixPosition(t.matrixWorld),e.position.copy(nd),id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(id),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(rh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,c=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===_r||t.reversedDepth?e.set(.5*o,0,0,.5*o+h,0,.5*c,0,.5*c+u,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+h,0,.5*c,0,.5*c+u,0,0,.5,.5,0,0,0,1),e.multiply(rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Do=new it,No=new _i,fi=new it,Aa=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Do,No,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Do,No,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new it,sd=new Ae,rd=new Ae,vn=class extends Aa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Oc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,sd,rd),e.subVectors(rd,sd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Oc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*n/u,s*=o.width/h,n*=o.height/u}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var br=class extends Aa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,c=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hh=class extends dl{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new hh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var fr=-90,pr=1,fl=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(fr,pr,t,e);s.layers=this.layers,this.add(s);let r=new vn(fr,pr,t,e);r.layers=this.layers,this.add(r);let o=new vn(fr,pr,t,e);o.layers=this.layers,this.add(o);let c=new vn(fr,pr,t,e);c.layers=this.layers,this.add(c);let h=new vn(fr,pr,t,e);h.layers=this.layers,this.add(h);let u=new vn(fr,pr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,c,h]=e;for(let u of e)this.remove(u);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,h,u,g]=this.children,v=t.getRenderTarget(),f=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;let P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=P,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(v,f,M),t.xr.enabled=T,n.texture.needsPMREMUpdate=!0}},pl=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Oh="\\[\\]\\.:\\/",qp=new RegExp("["+Oh+"]","g"),Bh="[^"+Oh+"]",Yp="[^"+Oh.replace("\\.","")+"]",Jp=/((?:WC+[\/:])*)/.source.replace("WC",Bh),Zp=/(WCOD+)?/.source.replace("WCOD",Yp),Kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),$p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),jp=new RegExp("^"+Jp+Zp+Kp+$p+"$"),Qp=["material","materials","bones","map"],uh=class{constructor(t,e,n){let s=n||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qp,"")}static parseTrackName(t){let e=jp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===e||c.uuid===e)return c;let h=n(c.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===u){u=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let o=t[s];if(o===void 0){let u=e.nodeName;oe("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=uh;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kx=new Float32Array(1);var dh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function kh(i,t,e,n){let s=tm(n);switch(e){case Ih:return i*t;case Cr:return i*t/s.components*s.byteLength;case Sl:return i*t/s.components*s.byteLength;case os:return i*t*2/s.components*s.byteLength;case bl:return i*t*2/s.components*s.byteLength;case Lh:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case wl:return i*t*4/s.components*s.byteLength;case La:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:case Cl:return Math.max(i,16)*Math.max(t,8)/4;case Tl:case El:return Math.max(i,8)*Math.max(t,8)/2;case Rl:case Pl:case Ll:case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Il:case Fa:case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zl:case Kl:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jl:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oa:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tm(i){switch(i){case Dn:case Eh:return{byteLength:1,components:1};case Ar:case Ch:case oi:return{byteLength:2,components:1};case yl:case Ml:return{byteLength:2,components:4};case ai:case vl:case qn:return{byteLength:4,components:1};case Rh:case Ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function mf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nm(i){let t=new WeakMap;function e(c,h){let u=c.array,g=c.usage,v=u.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,u,g),c.onUploadCallback();let M;if(u instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)M=i.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)M=i.SHORT;else if(u instanceof Uint32Array)M=i.UNSIGNED_INT;else if(u instanceof Int32Array)M=i.INT;else if(u instanceof Int8Array)M=i.BYTE;else if(u instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:M,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:v}}function n(c,h,u){let g=h.array,v=h.updateRanges;if(i.bindBuffer(u,c),v.length===0)i.bufferSubData(u,0,g);else{v.sort((M,T)=>M.start-T.start);let f=0;for(let M=1;M<v.length;M++){let T=v[f],P=v[M];P.start<=T.start+T.count+1?T.count=Math.max(T.count,P.start+P.count-T.start):(++f,v[f]=P)}v.length=f+1;for(let M=0,T=v.length;M<T;M++){let P=v[M];i.bufferSubData(u,P.start*g.BYTES_PER_ELEMENT,g,P.start,P.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=t.get(c);h&&(i.deleteBuffer(h.buffer),t.delete(c))}function o(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let g=t.get(c);(!g||g.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let u=t.get(c);if(u===void 0)t.set(c,e(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,c,h),u.version=c.version}}return{get:s,remove:r,update:o}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t0=`PhysicalMaterial material;
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
#endif`,e0=`uniform sampler2D dfgLUT;
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
}`,n0=`
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G0=`float getShadowMask() {
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
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,wg=`#define NORMAL
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define PHONG
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
}`,Eg=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Rg=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Ig=`uniform float size;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Ng=`uniform vec3 color;
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
}`,Ug=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:om,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:_m,clipping_planes_fragment:xm,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:bm,color_pars_vertex:wm,color_vertex:Tm,common:Am,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Pm,emissivemap_fragment:Im,emissivemap_pars_fragment:Lm,colorspace_fragment:Dm,colorspace_pars_fragment:Nm,envmap_fragment:Um,envmap_common_pars_fragment:Fm,envmap_pars_fragment:Om,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:Zm,envmap_vertex:km,fog_vertex:zm,fog_pars_vertex:Vm,fog_fragment:Gm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:Jm,lights_toon_fragment:Km,lights_toon_pars_fragment:$m,lights_phong_fragment:jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:t0,lights_physical_pars_fragment:e0,lights_fragment_begin:n0,lights_fragment_maps:i0,lights_fragment_end:s0,lightprobes_pars_fragment:r0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:h0,map_pars_fragment:u0,map_particle_fragment:d0,map_particle_pars_fragment:f0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:g0,morphcolor_vertex:_0,morphnormal_vertex:x0,morphtarget_pars_vertex:v0,morphtarget_vertex:y0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:b0,normal_pars_vertex:w0,normal_vertex:T0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:P0,opaque_fragment:I0,packing:L0,premultiplied_alpha_fragment:D0,project_vertex:N0,dithering_fragment:U0,dithering_pars_fragment:F0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:z0,shadowmap_vertex:V0,shadowmask_pars_fragment:G0,skinbase_vertex:H0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:Y0,specularmap_pars_fragment:J0,tonemapping_fragment:Z0,tonemapping_pars_fragment:K0,transmission_fragment:$0,transmission_pars_fragment:j0,uv_pars_fragment:Q0,uv_pars_vertex:tg,uv_vertex:eg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:ag,cube_vert:og,cube_frag:lg,depth_vert:cg,depth_frag:hg,distance_vert:ug,distance_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:xg,meshlambert_vert:vg,meshlambert_frag:yg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:bg,meshnormal_frag:wg,meshphong_vert:Tg,meshphong_frag:Ag,meshphysical_vert:Eg,meshphysical_frag:Cg,meshtoon_vert:Rg,meshtoon_frag:Pg,points_vert:Ig,points_frag:Lg,shadow_vert:Dg,shadow_frag:Ng,sprite_vert:Ug,sprite_frag:Fg},Ot={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new it},probesMax:{value:new it},probesResolution:{value:new it}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Si={basic:{uniforms:Sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Sn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Sn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Sn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Sn([Ot.points,Ot.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Sn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Sn([Ot.common,Ot.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Sn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Sn([Ot.sprite,Ot.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Sn([Ot.common,Ot.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Sn([Ot.lights,Ot.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Si.physical={uniforms:Sn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var sc={r:0,b:0,g:0},Og=new Oe,gf=new le;gf.set(-1,0,0,0,1,0,0,0,1);function Bg(i,t,e,n,s,r){let o=new de(0),c=s===!0?0:1,h,u,g=null,v=0,f=null;function M(I){let O=I.isScene===!0?I.background:null;if(O&&O.isTexture){let E=I.backgroundBlurriness>0;O=t.get(O,E)}return O}function T(I){let O=!1,E=M(I);E===null?x(o,c):E&&E.isColor&&(x(E,1),O=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?e.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||O)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(I,O){let E=M(O);E&&(E.isCubeTexture||E.mapping===Pa)?(u===void 0&&(u=new Mn(new Sr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Is(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(O.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(gf),u.material.toneMapped=be.getTransfer(E.colorSpace)!==Ne,(g!==E||v!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,g=E,v=E.version,f=i.toneMapping),u.layers.enableAll(),I.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new Mn(new ya(2,2),new Rn({name:"BackgroundMaterial",uniforms:Is(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.toneMapped=be.getTransfer(E.colorSpace)!==Ne,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(g!==E||v!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,g=E,v=E.version,f=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function x(I,O){I.getRGB(sc,Fh(i)),e.buffers.color.setClear(sc.r,sc.g,sc.b,O,r)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(I,O=1){o.set(I),c=O,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(I){c=I,x(o,c)},render:T,addToRenderList:P,dispose:p}}function kg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function c(J,Z,tt,X,nt){let ut=!1,ot=v(J,X,tt,Z);r!==ot&&(r=ot,u(r.object)),ut=M(J,X,tt,nt),ut&&T(J,X,tt,nt),nt!==null&&t.update(nt,i.ELEMENT_ARRAY_BUFFER),(ut||o)&&(o=!1,E(J,Z,tt,X),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function h(){return i.createVertexArray()}function u(J){return i.bindVertexArray(J)}function g(J){return i.deleteVertexArray(J)}function v(J,Z,tt,X){let nt=X.wireframe===!0,ut=n[Z.id];ut===void 0&&(ut={},n[Z.id]=ut);let ot=J.isInstancedMesh===!0?J.id:0,at=ut[ot];at===void 0&&(at={},ut[ot]=at);let et=at[tt.id];et===void 0&&(et={},at[tt.id]=et);let ht=et[nt];return ht===void 0&&(ht=f(h()),et[nt]=ht),ht}function f(J){let Z=[],tt=[],X=[];for(let nt=0;nt<e;nt++)Z[nt]=0,tt[nt]=0,X[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:tt,attributeDivisors:X,object:J,attributes:{},index:null}}function M(J,Z,tt,X){let nt=r.attributes,ut=Z.attributes,ot=0,at=tt.getAttributes();for(let et in at)if(at[et].location>=0){let dt=nt[et],Vt=ut[et];if(Vt===void 0&&(et==="instanceMatrix"&&J.instanceMatrix&&(Vt=J.instanceMatrix),et==="instanceColor"&&J.instanceColor&&(Vt=J.instanceColor)),dt===void 0||dt.attribute!==Vt||Vt&&dt.data!==Vt.data)return!0;ot++}return r.attributesNum!==ot||r.index!==X}function T(J,Z,tt,X){let nt={},ut=Z.attributes,ot=0,at=tt.getAttributes();for(let et in at)if(at[et].location>=0){let dt=ut[et];dt===void 0&&(et==="instanceMatrix"&&J.instanceMatrix&&(dt=J.instanceMatrix),et==="instanceColor"&&J.instanceColor&&(dt=J.instanceColor));let Vt={};Vt.attribute=dt,dt&&dt.data&&(Vt.data=dt.data),nt[et]=Vt,ot++}r.attributes=nt,r.attributesNum=ot,r.index=X}function P(){let J=r.newAttributes;for(let Z=0,tt=J.length;Z<tt;Z++)J[Z]=0}function x(J){p(J,0)}function p(J,Z){let tt=r.newAttributes,X=r.enabledAttributes,nt=r.attributeDivisors;tt[J]=1,X[J]===0&&(i.enableVertexAttribArray(J),X[J]=1),nt[J]!==Z&&(i.vertexAttribDivisor(J,Z),nt[J]=Z)}function I(){let J=r.newAttributes,Z=r.enabledAttributes;for(let tt=0,X=Z.length;tt<X;tt++)Z[tt]!==J[tt]&&(i.disableVertexAttribArray(tt),Z[tt]=0)}function O(J,Z,tt,X,nt,ut,ot){ot===!0?i.vertexAttribIPointer(J,Z,tt,nt,ut):i.vertexAttribPointer(J,Z,tt,X,nt,ut)}function E(J,Z,tt,X){P();let nt=X.attributes,ut=tt.getAttributes(),ot=Z.defaultAttributeValues;for(let at in ut){let et=ut[at];if(et.location>=0){let ht=nt[at];if(ht===void 0&&(at==="instanceMatrix"&&J.instanceMatrix&&(ht=J.instanceMatrix),at==="instanceColor"&&J.instanceColor&&(ht=J.instanceColor)),ht!==void 0){let dt=ht.normalized,Vt=ht.itemSize,Jt=t.get(ht);if(Jt===void 0)continue;let Be=Jt.buffer,ye=Jt.type,Re=Jt.bytesPerElement,mt=ye===i.INT||ye===i.UNSIGNED_INT||ht.gpuType===vl;if(ht.isInterleavedBufferAttribute){let vt=ht.data,Xt=vt.stride,ie=ht.offset;if(vt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<et.locationSize;Bt++)p(et.location+Bt,vt.meshPerAttribute);J.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Bt=0;Bt<et.locationSize;Bt++)x(et.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Bt=0;Bt<et.locationSize;Bt++)O(et.location+Bt,Vt/et.locationSize,ye,dt,Xt*Re,(ie+Vt/et.locationSize*Bt)*Re,mt)}else{if(ht.isInstancedBufferAttribute){for(let vt=0;vt<et.locationSize;vt++)p(et.location+vt,ht.meshPerAttribute);J.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let vt=0;vt<et.locationSize;vt++)x(et.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let vt=0;vt<et.locationSize;vt++)O(et.location+vt,Vt/et.locationSize,ye,dt,Vt*Re,Vt/et.locationSize*vt*Re,mt)}}else if(ot!==void 0){let dt=ot[at];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(et.location,dt);break;case 3:i.vertexAttrib3fv(et.location,dt);break;case 4:i.vertexAttrib4fv(et.location,dt);break;default:i.vertexAttrib1fv(et.location,dt)}}}}I()}function L(){R();for(let J in n){let Z=n[J];for(let tt in Z){let X=Z[tt];for(let nt in X){let ut=X[nt];for(let ot in ut)g(ut[ot].object),delete ut[ot];delete X[nt]}}delete n[J]}}function D(J){if(n[J.id]===void 0)return;let Z=n[J.id];for(let tt in Z){let X=Z[tt];for(let nt in X){let ut=X[nt];for(let ot in ut)g(ut[ot].object),delete ut[ot];delete X[nt]}}delete n[J.id]}function z(J){for(let Z in n){let tt=n[Z];for(let X in tt){let nt=tt[X];if(nt[J.id]===void 0)continue;let ut=nt[J.id];for(let ot in ut)g(ut[ot].object),delete ut[ot];delete nt[J.id]}}}function w(J){for(let Z in n){let tt=n[Z],X=J.isInstancedMesh===!0?J.id:0,nt=tt[X];if(nt!==void 0){for(let ut in nt){let ot=nt[ut];for(let at in ot)g(ot[at].object),delete ot[at];delete nt[ut]}delete tt[X],Object.keys(tt).length===0&&delete n[Z]}}}function R(){V(),o=!0,r!==s&&(r=s,u(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:R,resetDefaultState:V,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:z,initAttributes:P,enableAttribute:x,disableUnusedAttributes:I}}function zg(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,g){g!==0&&(i.drawArraysInstanced(n,h,u,g),e.update(u,n,g))}function c(h,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,g);let f=0;for(let M=0;M<g;M++)f+=u[M];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c}function Vg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let z=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(z){return!(z!==Yn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(z){let w=z===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Dn&&z!==qn&&!w&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",g=h(u);g!==u&&(se("WebGLRenderer:",u,"not supported, using",g,"instead."),u=g);let v=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),O=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:v,reversedDepthBuffer:f,maxTextures:M,maxVertexTextures:T,maxTextureSize:P,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:E,maxSamples:L,samples:D}}function Gg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ii,c=new le,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,f){let M=v.length!==0||f||n!==0||s;return s=f,n=v.length,M},this.beginShadows=function(){r=!0,g(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,f){e=g(v,f,0)},this.setState=function(v,f,M){let T=v.clippingPlanes,P=v.clipIntersection,x=v.clipShadows,p=i.get(v);if(!s||T===null||T.length===0||r&&!x)r?g(null):u();else{let I=r?0:n,O=I*4,E=p.clippingState||null;h.value=E,E=g(T,f,O,M);for(let L=0;L!==O;++L)E[L]=e[L];p.clippingState=E,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=I}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function g(v,f,M,T){let P=v!==null?v.length:0,x=null;if(P!==0){if(x=h.value,T!==!0||x===null){let p=M+P*4,I=f.matrixWorldInverse;c.getNormalMatrix(I),(x===null||x.length<p)&&(x=new Float32Array(p));for(let O=0,E=M;O!==P;++O,E+=4)o.copy(v[O]).applyMatrix4(I,c),o.normal.toArray(x,E),x[E+3]=o.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,x}}var Pr=4,Hg=6,Wg=20,Xg=256,ka=new br,Yd=new de,zh=null,Vh=0,Gh=0,Hh=!1,qg=new it,Ls=new it,ac=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:c=qg}=r;zh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,c),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,Vh,Gh),this._renderer.xr.enabled=Hh,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:oi,format:Yn,colorSpace:aa,depthBuffer:!1},s=Jd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yg(r)),this._blurMaterial=Zg(r,t,e),this._ggxMaterial=Jg(r,t,e)}return s}_compileMaterial(t){let e=new Mn(new Bn,t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,s,r){let h=new vn(90,1,e,n),u=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,f=v.autoClear,M=v.toneMapping;v.getClearColor(Yd),v.toneMapping=ri,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Sr,new ma({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,x=P.material,p=!1,I=t.background;I?I.isColor&&(x.color.copy(I),t.background=null,p=!0):(x.color.copy(Yd),p=!0);for(let O=0;O<6;O++){let E=O%3;E===0?(h.up.set(0,u[O],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+g[O],r.y,r.z)):E===1?(h.up.set(0,0,u[O]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+g[O],r.z)):(h.up.set(0,u[O],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+g[O]));let L=this._cubeSize;Rr(s,E*L,O>2?L:0,L,L),v.setRenderTarget(s),p&&v.render(P,h),v.render(t,h)}v.toneMapping=M,v.autoClear=f,t.background=I}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ss||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let c=r.uniforms;c.envMap.value=t;let h=this._cubeSize;Rr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;let h=o.uniforms,u=n/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),v=Math.sqrt(u*u-g*g),f=u*1.25,M=v*f,{_lodMax:T}=this,P=this._sizeLods[n],x=3*P*(n>T-Pr?n-T+Pr:0),p=4*(this._cubeSize-P);h.envMap.value=t.texture,h.roughness.value=M,h.mipInt.value=T-e,Rr(r,x,p,3*P,2*P),s.setRenderTarget(r),s.render(c,ka),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=T-n,Rr(t,x,p,3*P,2*P),s.setRenderTarget(t),s.render(c,ka)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,c=this._blurMaterial,h=this._lodMeshes[s];h.material=c;let u=c.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let g=this._sizeLods[s],v=3*g*(s>this._lodMax-Pr?s-this._lodMax+Pr:0),f=4*(this._cubeSize-g);Rr(e,v,f,3*g,2*g),o.setRenderTarget(e),o.render(h,ka)}};function Yg(i){let t=[],e=[],n=i,s=i-Pr+1+Hg;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let c=1/(o-2),h=-c,u=1+c,g=[h,h,u,h,u,u,h,h,u,u,h,u],v=6,f=6,M=3,T=new Float32Array(M*f*v),P=new Float32Array(M*f*v);for(let p=0;p<v;p++){let I=p%3*2/3-1,O=p>2?0:-1,E=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];T.set(E,M*f*p);for(let L=0;L<f;L++){let D=g[L*2]*2-1,z=g[L*2+1]*2-1;p===0?Ls.set(1,z,D):p===1?Ls.set(-D,1,-z):p===2?Ls.set(-D,z,1):p===3?Ls.set(-1,z,-D):p===4?Ls.set(-D,-1,z):Ls.set(D,z,-1),Ls.toArray(P,(p*f+L)*M)}}let x=new Bn;x.setAttribute("position",new On(T,M)),x.setAttribute("outputDirection",new On(P,M)),e.push(new Mn(x,null)),n>Pr&&n--}return{lodMeshes:e,sizeLods:t}}function Jd(i,t,e){let n=new Ln(i,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jg(i,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Zg(i,t,e){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:Wg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Zd(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Kd(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var oc=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Sr(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:yi});r.uniforms.tEquirect.value=e;let o=new Mn(s,r),c=e.minFilter;return e.minFilter===rs&&(e.minFilter=fn),new fl(1,10,this).update(t,o),e.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Kg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,M=!1){return f==null?null:M?o(f):r(f)}function r(f){if(f&&f.isTexture){let M=f.mapping;if(M===gl||M===_l)if(t.has(f)){let T=t.get(f).texture;return c(T,f.mapping)}else{let T=f.image;if(T&&T.height>0){let P=new oc(T.height);return P.fromEquirectangularTexture(i,f),t.set(f,P),f.addEventListener("dispose",u),c(P.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let M=f.mapping,T=M===gl||M===_l,P=M===ss||M===Ps;if(T||P){let x=e.get(f),p=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new ac(i)),x=T?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{let I=f.image;return T&&I&&I.height>0||P&&I&&h(I)?(n===null&&(n=new ac(i)),x=T?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",g),x.texture):null}}}return f}function c(f,M){return M===gl?f.mapping=ss:M===_l&&(f.mapping=Ps),f}function h(f){let M=0,T=6;for(let P=0;P<T;P++)f[P]!==void 0&&M++;return M===T}function u(f){let M=f.target;M.removeEventListener("dispose",u);let T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function g(f){let M=f.target;M.removeEventListener("dispose",g);let T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function $g(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Es("WebGLRenderer: "+n+" extension not supported."),s}}}function jg(i,t,e,n){let s={},r=new WeakMap;function o(v){let f=v.target;f.index!==null&&t.remove(f.index);for(let T in f.attributes)t.remove(f.attributes[T]);f.removeEventListener("dispose",o),delete s[f.id];let M=r.get(f);M&&(t.remove(M),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(v,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function h(v){let f=v.attributes;for(let M in f)t.update(f[M],i.ARRAY_BUFFER)}function u(v){let f=[],M=v.index,T=v.attributes.position,P=0;if(T===void 0)return;if(M!==null){let I=M.array;P=M.version;for(let O=0,E=I.length;O<E;O+=3){let L=I[O+0],D=I[O+1],z=I[O+2];f.push(L,D,D,z,z,L)}}else{let I=T.array;P=T.version;for(let O=0,E=I.length/3-1;O<E;O+=3){let L=O+0,D=O+1,z=O+2;f.push(L,D,D,z,z,L)}}let x=new(T.count>=65535?pa:fa)(f,1);x.version=P;let p=r.get(v);p&&t.remove(p),r.set(v,x)}function g(v){let f=r.get(v);if(f){let M=v.index;M!==null&&f.version<M.version&&u(v)}else u(v);return r.get(v)}return{get:c,update:h,getWireframeAttribute:g}}function Qg(i,t,e){let n;function s(v){n=v}let r,o;function c(v){r=v.type,o=v.bytesPerElement}function h(v,f){i.drawElements(n,f,r,v*o),e.update(f,n,1)}function u(v,f,M){M!==0&&(i.drawElementsInstanced(n,f,r,v*o,M),e.update(f,n,M))}function g(v,f,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,v,0,M);let P=0;for(let x=0;x<M;x++)P+=f[x];e.update(P,n,1)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=g}function t_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=c*(r/3);break;case i.LINES:e.lines+=c*(r/2);break;case i.LINE_STRIP:e.lines+=c*(r-1);break;case i.LINE_LOOP:e.lines+=c*r;break;case i.POINTS:e.points+=c*r;break;default:oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function e_(i,t,e){let n=new WeakMap,s=new qe;function r(o,c,h){let u=o.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0,f=n.get(c);if(f===void 0||f.count!==v){let R=function(){z.dispose(),n.delete(c),c.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let M=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,P=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],I=c.morphAttributes.color||[],O=0;M===!0&&(O=1),T===!0&&(O=2),P===!0&&(O=3);let E=c.attributes.position.count*O,L=1;E>t.maxTextureSize&&(L=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let D=new Float32Array(E*L*4*v),z=new ca(D,E,L,v);z.type=qn,z.needsUpdate=!0;let w=O*4;for(let V=0;V<v;V++){let J=x[V],Z=p[V],tt=I[V],X=E*L*4*V;for(let nt=0;nt<J.count;nt++){let ut=nt*w;M===!0&&(s.fromBufferAttribute(J,nt),D[X+ut+0]=s.x,D[X+ut+1]=s.y,D[X+ut+2]=s.z,D[X+ut+3]=0),T===!0&&(s.fromBufferAttribute(Z,nt),D[X+ut+4]=s.x,D[X+ut+5]=s.y,D[X+ut+6]=s.z,D[X+ut+7]=0),P===!0&&(s.fromBufferAttribute(tt,nt),D[X+ut+8]=s.x,D[X+ut+9]=s.y,D[X+ut+10]=s.z,D[X+ut+11]=tt.itemSize===4?s.w:1)}}f={count:v,texture:z,size:new Ae(E,L)},n.set(c,f),c.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let M=0;for(let P=0;P<u.length;P++)M+=u[P];let T=c.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",T),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function n_(i,t,e,n,s){let r=new WeakMap;function o(u){let g=s.render.frame,v=u.geometry,f=t.get(u,v);if(r.get(f)!==g&&(t.update(f),r.set(f,g)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==g&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,g))),u.isSkinnedMesh){let M=u.skeleton;r.get(M)!==g&&(M.update(),r.set(M,g))}return f}function c(){r=new WeakMap}function h(u){let g=u.target;g.removeEventListener("dispose",h),n.releaseStatesOfObject(g),e.remove(g.instanceMatrix),g.instanceColor!==null&&e.remove(g.instanceColor)}return{update:o,dispose:c}}var i_={[yh]:"LINEAR_TONE_MAPPING",[Mh]:"REINHARD_TONE_MAPPING",[Sh]:"CINEON_TONE_MAPPING",[Ra]:"ACES_FILMIC_TONE_MAPPING",[wh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[bh]:"CUSTOM_TONE_MAPPING"};function s_(i,t,e,n,s,r){let o=new Ln(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,h=null,u=new Bn;u.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new sn([0,2,0,0,2,0],2));let g=new Qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Mn(u,g),f=new br(-1,1,1,-1,0,1),M=null,T=null,P=!1,x,p=null,I=[],O=!1;this.setSize=function(E,L){o.setSize(E,L),c!==null&&c.setSize(E,L),h!==null&&h.setSize(E,L);for(let D=0;D<I.length;D++){let z=I[D];z.setSize&&z.setSize(E,L)}},this.setEffects=function(E){I=E,O=I.length>0&&I[0].isRenderPass===!0;let L=o.width,D=o.height;I.length>0&&c===null&&(c=new Ln(L,D,{type:oi,depthBuffer:!1,stencilBuffer:!1}),h=new Ln(L,D,{type:oi,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<I.length;z++){let w=I[z];w.setSize&&w.setSize(L,D)}},this.begin=function(E,L){if(P||E.toneMapping===ri&&I.length===0)return!1;if(p=L,L!==null){let D=L.width,z=L.height;(o.width!==D||o.height!==z)&&this.setSize(D,z)}return O===!1&&E.setRenderTarget(o),x=E.toneMapping,E.toneMapping=ri,!0},this.hasRenderPass=function(){return O},this.end=function(E,L){E.toneMapping=x,P=!0;let D=o,z=c;for(let w=0;w<I.length;w++){let R=I[w];R.enabled!==!1&&(R.render(E,z,D,L),R.needsSwap!==!1&&(D=z,z=z===c?h:c))}if(M!==E.outputColorSpace||T!==E.toneMapping){M=E.outputColorSpace,T=E.toneMapping,g.defines={},be.getTransfer(M)===Ne&&(g.defines.SRGB_TRANSFER="");let w=i_[T];w&&(g.defines[w]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,E.setRenderTarget(p),E.render(v,f),p=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),h!==null&&h.dispose(),u.dispose(),g.dispose()}}var _f=new In,qh=new Qi(1,1),xf=new ca,vf=new Ko,yf=new xa,$d=[],jd=[],Qd=new Float32Array(16),tf=new Float32Array(9),ef=new Float32Array(4);function Lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$d[s];if(r===void 0&&(r=new Float32Array(s),$d[s]=r),t!==0){n.toArray(r,0);for(let o=1,c=0;o!==t;++o)c+=e,i[o].toArray(r,c)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function an(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hc(i,t){let e=jd[t];e===void 0&&(e=new Int32Array(t),jd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function r_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),an(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),an(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),an(e,t)}}function c_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;ef.set(n),i.uniformMatrix2fv(this.addr,!1,ef),an(e,n)}}function h_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;tf.set(n),i.uniformMatrix3fv(this.addr,!1,tf),an(e,n)}}function u_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Qd.set(n),i.uniformMatrix4fv(this.addr,!1,Qd),an(e,n)}}function d_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),an(e,t)}}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),an(e,t)}}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),an(e,t)}}function g_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),an(e,t)}}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),an(e,t)}}function v_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),an(e,t)}}function y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qh.compareFunction=e.isReversedDepthBuffer()?ic:nc,r=qh):r=_f,e.setTexture2D(t||r,s)}function M_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vf,s)}function S_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yf,s)}function b_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xf,s)}function w_(i){switch(i){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return __;case 36295:return x_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}function T_(i,t){i.uniform1fv(this.addr,t)}function A_(i,t){let e=Lr(t,this.size,2);i.uniform2fv(this.addr,e)}function E_(i,t){let e=Lr(t,this.size,3);i.uniform3fv(this.addr,e)}function C_(i,t){let e=Lr(t,this.size,4);i.uniform4fv(this.addr,e)}function R_(i,t){let e=Lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function P_(i,t){let e=Lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function I_(i,t){let e=Lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function L_(i,t){i.uniform1iv(this.addr,t)}function D_(i,t){i.uniform2iv(this.addr,t)}function N_(i,t){i.uniform3iv(this.addr,t)}function U_(i,t){i.uniform4iv(this.addr,t)}function F_(i,t){i.uniform1uiv(this.addr,t)}function O_(i,t){i.uniform2uiv(this.addr,t)}function B_(i,t){i.uniform3uiv(this.addr,t)}function k_(i,t){i.uniform4uiv(this.addr,t)}function z_(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=qh:o=_f;for(let c=0;c!==s;++c)e.setTexture2D(t[c]||o,r[c])}function V_(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vf,r[o])}function G_(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||yf,r[o])}function H_(i,t,e){let n=this.cache,s=t.length,r=hc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xf,r[o])}function W_(i){switch(i){case 5126:return T_;case 35664:return A_;case 35665:return E_;case 35666:return C_;case 35674:return R_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return F_;case 36294:return O_;case 36295:return B_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return H_}}var Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=w_(e.type)}},Jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W_(e.type)}},Zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(t,e[c.id],n)}}},Wh=/(\w+)(\])?(\[|\.)?/g;function nf(i,t){i.seq.push(t),i.map[t.id]=t}function X_(i,t,e){let n=i.name,s=n.length;for(Wh.lastIndex=0;;){let r=Wh.exec(n),o=Wh.lastIndex,c=r[1],h=r[2]==="]",u=r[3];if(h&&(c=c|0),u===void 0||u==="["&&o+2===s){nf(e,u===void 0?new Yh(c,i,t):new Jh(c,i,t));break}else{let v=e.map[c];v===void 0&&(v=new Zh(c),nf(e,v)),e=v}}}var Ir=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let c=t.getActiveUniform(e,o),h=t.getUniformLocation(e,c.name);X_(c,h,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let c=e[r],h=n[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function sf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var q_=37297,Y_=0;function J_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===t?">":" "} ${c}: ${e[o]}`)}return n.join(`
`)}var rf=new le;function Z_(i){be._getMatrix(rf,be.workingColorSpace,i);let t=`mat3( ${rf.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(i)){case oa:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function af(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+J_(i.getShaderSource(t),c)}else return r}function K_(i,t){let e=Z_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var $_={[yh]:"Linear",[Mh]:"Reinhard",[Sh]:"Cineon",[Ra]:"ACESFilmic",[wh]:"AgX",[Th]:"Neutral",[bh]:"Custom"};function j_(i,t){let e=$_[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rc=new it;function Q_(){be.getLuminanceCoefficients(rc);let i=rc.x.toFixed(4),t=rc.y.toFixed(4),e=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function ex(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:c}}return e}function Va(i){return i!==""}function of(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(i){return i.replace(ix,rx)}var sx=new Map;function rx(i,t){let e=pe[t];if(e===void 0){let n=sx.get(t);if(n!==void 0)e=pe[n],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kh(e)}var ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(i){return i.replace(ax,ox)}function ox(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var lx={[Ca]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function cx(i){return lx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hx={[ss]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE_UV"};function ux(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":hx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var dx={[Ps]:"ENVMAP_MODE_REFRACTION"};function fx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var px={[vh]:"ENVMAP_BLENDING_MULTIPLY",[Ad]:"ENVMAP_BLENDING_MIX",[Ed]:"ENVMAP_BLENDING_ADD"};function mx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":px[i.combine]||"ENVMAP_BLENDING_NONE"}function gx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _x(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,c=e.fragmentShader,h=cx(e),u=ux(e),g=fx(e),v=mx(e),f=gx(e),M=tx(e),T=ex(r),P=s.createProgram(),x,p,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(Va).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(Va).join(`
`),p.length>0&&(p+=`
`)):(x=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),p=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?pe.tonemapping_pars_fragment:"",e.toneMapping!==ri?j_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,K_("linearToOutputTexel",e.outputColorSpace),Q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Va).join(`
`)),o=Kh(o),o=of(o,e),o=lf(o,e),c=Kh(c),c=of(c,e),c=lf(c,e),o=cf(o),c=cf(c),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let O=I+x+o,E=I+p+c,L=sf(s,s.VERTEX_SHADER,O),D=sf(s,s.FRAGMENT_SHADER,E);s.attachShader(P,L),s.attachShader(P,D),e.index0AttributeName!==void 0?s.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function z(J){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(P)||"",tt=s.getShaderInfoLog(L)||"",X=s.getShaderInfoLog(D)||"",nt=Z.trim(),ut=tt.trim(),ot=X.trim(),at=!0,et=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,L,D);else{let ht=af(s,L,"vertex"),dt=af(s,D,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+nt+`
`+ht+`
`+dt)}else nt!==""?se("WebGLProgram: Program Info Log:",nt):(ut===""||ot==="")&&(et=!1);et&&(J.diagnostics={runnable:at,programLog:nt,vertexShader:{log:ut,prefix:x},fragmentShader:{log:ot,prefix:p}})}s.deleteShader(L),s.deleteShader(D),w=new Ir(s,P),R=nx(s,P)}let w;this.getUniforms=function(){return w===void 0&&z(this),w};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(P,q_)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y_++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=L,this.fragmentShader=D,this}var xx=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jh(t),e.set(t,n)),n}},jh=class{constructor(t){this.id=xx++,this.code=t,this.usedTimes=0}};function vx(i){return i===os||i===Fa||i===Oa}function yx(i,t,e,n,s,r){let o=new ha,c=new $h,h=new Set,u=[],g=new Map,v=n.logarithmicDepthBuffer,f=n.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return h.add(w),w===0?"uv":`uv${w}`}function P(w,R,V,J,Z,tt){let X=J.fog,nt=Z.geometry,ut=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?J.environment:null,ot=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,at=t.get(w.envMap||ut,ot),et=at&&at.mapping===Pa?at.image.height:null,ht=M[w.type];w.precision!==null&&(f=n.getMaxPrecision(w.precision),f!==w.precision&&se("WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let dt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Vt=dt!==void 0?dt.length:0,Jt=0;nt.morphAttributes.position!==void 0&&(Jt=1),nt.morphAttributes.normal!==void 0&&(Jt=2),nt.morphAttributes.color!==void 0&&(Jt=3);let Be,ye,Re,mt;if(ht){let Le=Si[ht];Be=Le.vertexShader,ye=Le.fragmentShader}else{Be=w.vertexShader,ye=w.fragmentShader;let Le=c.getVertexShaderStage(w),we=c.getFragmentShaderStage(w);c.update(w,Le,we),Re=Le.id,mt=we.id}let vt=i.getRenderTarget(),Xt=i.state.buffers.depth.getReversed(),ie=Z.isInstancedMesh===!0,Bt=Z.isBatchedMesh===!0,ue=!!w.map,He=!!w.matcap,me=!!at,Pe=!!w.aoMap,Ue=!!w.lightMap,ge=!!w.bumpMap&&w.wireframe===!1,ke=!!w.normalMap,Ze=!!w.displacementMap,mn=!!w.emissiveMap,We=!!w.metalnessMap,Ie=!!w.roughnessMap,G=w.anisotropy>0,on=w.clearcoat>0,re=w.dispersion>0,N=w.retroreflectivity>0,y=w.iridescence>0,K=w.sheen>0,q=w.transmission>0,k=G&&!!w.anisotropyMap,_t=on&&!!w.clearcoatMap,Et=on&&!!w.clearcoatNormalMap,ct=on&&!!w.clearcoatRoughnessMap,yt=y&&!!w.iridescenceMap,Lt=y&&!!w.iridescenceThicknessMap,jt=K&&!!w.sheenColorMap,Rt=K&&!!w.sheenRoughnessMap,St=!!w.specularMap,$t=!!w.specularColorMap,Zt=!!w.specularIntensityMap,te=q&&!!w.transmissionMap,H=q&&!!w.thicknessMap,Dt=!!w.gradientMap,xt=!!w.alphaMap,Pt=w.alphaTest>0,kt=!!w.alphaHash,bt=!!w.extensions,zt=ri;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Kt={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:ye,defines:w.defines,customVertexShaderID:Re,customFragmentShaderID:mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&Z._colorsTexture!==null,instancing:ie,instancingColor:ie&&Z.instanceColor!==null,instancingMorph:ie&&Z.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ue,matcap:He,envMap:me,envMapMode:me&&at.mapping,envMapCubeUVHeight:et,aoMap:Pe,lightMap:Ue,bumpMap:ge,normalMap:ke,displacementMap:Ze,emissiveMap:mn,normalMapObjectSpace:ke&&w.normalMapType===Pd,normalMapTangentSpace:ke&&w.normalMapType===ec,packedNormalMap:ke&&w.normalMapType===ec&&vx(w.normalMap.format),metalnessMap:We,roughnessMap:Ie,anisotropy:G,anisotropyMap:k,clearcoat:on,clearcoatMap:_t,clearcoatNormalMap:Et,clearcoatRoughnessMap:ct,dispersion:re,retroreflection:N,iridescence:y,iridescenceMap:yt,iridescenceThicknessMap:Lt,sheen:K,sheenColorMap:jt,sheenRoughnessMap:Rt,specularMap:St,specularColorMap:$t,specularIntensityMap:Zt,transmission:q,transmissionMap:te,thicknessMap:H,gradientMap:Dt,opaque:w.transparent===!1&&w.blending===Tr&&w.alphaToCoverage===!1,alphaMap:xt,alphaTest:Pt,alphaHash:kt,combine:w.combine,mapUv:ue&&T(w.map.channel),aoMapUv:Pe&&T(w.aoMap.channel),lightMapUv:Ue&&T(w.lightMap.channel),bumpMapUv:ge&&T(w.bumpMap.channel),normalMapUv:ke&&T(w.normalMap.channel),displacementMapUv:Ze&&T(w.displacementMap.channel),emissiveMapUv:mn&&T(w.emissiveMap.channel),metalnessMapUv:We&&T(w.metalnessMap.channel),roughnessMapUv:Ie&&T(w.roughnessMap.channel),anisotropyMapUv:k&&T(w.anisotropyMap.channel),clearcoatMapUv:_t&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Et&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&T(w.sheenRoughnessMap.channel),specularMapUv:St&&T(w.specularMap.channel),specularColorMapUv:$t&&T(w.specularColorMap.channel),specularIntensityMapUv:Zt&&T(w.specularIntensityMap.channel),transmissionMapUv:te&&T(w.transmissionMap.channel),thicknessMapUv:H&&T(w.thicknessMap.channel),alphaMapUv:xt&&T(w.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(ke||G),vertexNormals:!!nt.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!nt.attributes.uv&&(ue||xt),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||nt.attributes.normal===void 0&&ke===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Xt,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:nt.attributes.position!==void 0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Jt,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:tt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:ue&&w.map.isVideoTexture===!0&&be.getTransfer(w.map.colorSpace)===Ne,decodeVideoTextureEmissive:mn&&w.emissiveMap.isVideoTexture===!0&&be.getTransfer(w.emissiveMap.colorSpace)===Ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vi,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:bt&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&w.extensions.multiDraw===!0||Bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Kt.vertexUv1s=h.has(1),Kt.vertexUv2s=h.has(2),Kt.vertexUv3s=h.has(3),h.clear(),Kt}function x(w){let R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(let V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(p(R,w),I(R,w),R.push(i.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function p(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numSunLights),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numSunLightShadows),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function I(w,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),w.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),w.push(o.mask)}function O(w){let R=M[w.type],V;if(R){let J=Si[R];V=Wd.clone(J.uniforms)}else V=w.uniforms;return V}function E(w,R){let V=g.get(R);return V!==void 0?++V.usedTimes:(V=new _x(i,R,w,s),u.push(V),g.set(R,V)),V}function L(w){if(--w.usedTimes===0){let R=u.indexOf(w);u[R]=u[u.length-1],u.pop(),g.delete(w.cacheKey),w.destroy()}}function D(w){c.remove(w)}function z(){c.dispose()}return{getParameters:P,getProgramCacheKey:x,getUniforms:O,acquireProgram:E,releaseProgram:L,releaseShaderCache:D,programs:u,dispose:z}}function Mx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,h){i.get(o)[c]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function uf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function df(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let M=0;return f.isInstancedMesh&&(M+=2),f.isSkinnedMesh&&(M+=1),M}function c(f,M,T,P,x,p){let I=i[t];return I===void 0?(I={id:f.id,object:f,geometry:M,material:T,materialVariant:o(f),groupOrder:P,renderOrder:f.renderOrder,z:x,group:p},i[t]=I):(I.id=f.id,I.object=f,I.geometry=M,I.material=T,I.materialVariant=o(f),I.groupOrder=P,I.renderOrder=f.renderOrder,I.z=x,I.group=p),t++,I}function h(f,M,T,P,x,p,I){I.reversedDepth===!0&&(x=-x);let O=c(f,M,T,P,x,p);T.transmission>0?n.push(O):T.transparent===!0?s.push(O):e.push(O)}function u(f,M,T,P,x,p){let I=c(f,M,T,P,x,p);T.transmission>0?n.unshift(I):T.transparent===!0?s.unshift(I):e.unshift(I)}function g(f,M){e.length>1&&e.sort(f||Sx),n.length>1&&n.sort(M||uf),s.length>1&&s.sort(M||uf)}function v(){for(let f=t,M=i.length;f<M;f++){let T=i[f];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:v,sort:g}}function bx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new df,i.set(n,[o])):s>=r.length?(o=new df,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function wx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new it,color:new de};break;case"SpotLight":e={position:new it,direction:new it,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new it,halfWidth:new it,halfHeight:new it};break}return i[t.id]=e,e}}}function Tx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ax=0;function Ex(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cx(i){let t=new wx,e=Tx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new it);let s=new it,r=new Oe,o=new Oe;function c(u){let g=0,v=0,f=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let M=0,T=0,P=0,x=0,p=0,I=0,O=0,E=0,L=0,D=0,z=0,w=0,R=0,V=0;u.sort(Ex);for(let Z=0,tt=u.length;Z<tt;Z++){let X=u[Z],nt=X.color,ut=X.intensity,ot=X.distance,at=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===os?at=X.shadow.map.texture:at=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=nt.r*ut,v+=nt.g*ut,f+=nt.b*ut;else if(X.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(X.sh.coefficients[et],ut);V++}else if(X.isSunLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let ht=X.shadow,dt=e.get(X);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[T]=dt,n.sunShadowMap[T]=at;let Vt=ht.getViewportCount();for(let Jt=0;Jt<Vt;Jt++)n.sunShadowMatrix[P+Jt]=ht.getMatrix(Jt),n.sunShadowCascade[P+Jt]=ht._cascadeData[Jt];P+=Vt,T++}n.sun[M]=et,M++}else if(X.isDirectionalLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let ht=X.shadow,dt=e.get(X);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize=ht.mapSize,n.directionalShadow[x]=dt,n.directionalShadowMap[x]=at,n.directionalShadowMatrix[x]=X.shadow.matrix,L++}n.directional[x]=et,x++}else if(X.isSpotLight){let et=t.get(X);et.position.setFromMatrixPosition(X.matrixWorld),et.color.copy(nt).multiplyScalar(ut),et.distance=ot,et.coneCos=Math.cos(X.angle),et.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),et.decay=X.decay,n.spot[I]=et;let ht=X.shadow;if(X.map&&(n.spotLightMap[w]=X.map,w++,ht.updateMatrices(X),X.castShadow&&R++),n.spotLightMatrix[I]=ht.matrix,X.castShadow){let dt=e.get(X);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize=ht.mapSize,n.spotShadow[I]=dt,n.spotShadowMap[I]=at,z++}I++}else if(X.isRectAreaLight){let et=t.get(X);et.color.copy(nt).multiplyScalar(ut),et.halfWidth.set(X.width*.5,0,0),et.halfHeight.set(0,X.height*.5,0),n.rectArea[O]=et,O++}else if(X.isPointLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),et.distance=X.distance,et.decay=X.decay,X.castShadow){let ht=X.shadow,dt=e.get(X);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize=ht.mapSize,dt.shadowCameraNear=ht.camera.near,dt.shadowCameraFar=ht.camera.far,n.pointShadow[p]=dt,n.pointShadowMap[p]=at,n.pointShadowMatrix[p]=X.shadow.matrix,D++}n.point[p]=et,p++}else if(X.isHemisphereLight){let et=t.get(X);et.skyColor.copy(X.color).multiplyScalar(ut),et.groundColor.copy(X.groundColor).multiplyScalar(ut),n.hemi[E]=et,E++}}O>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=v,n.ambient[2]=f;let J=n.hash;(J.sunLength!==M||J.directionalLength!==x||J.pointLength!==p||J.spotLength!==I||J.rectAreaLength!==O||J.hemiLength!==E||J.numSunShadows!==T||J.numDirectionalShadows!==L||J.numPointShadows!==D||J.numSpotShadows!==z||J.numSpotMaps!==w||J.numLightProbes!==V)&&(n.sun.length=M,n.directional.length=x,n.spot.length=I,n.rectArea.length=O,n.point.length=p,n.hemi.length=E,n.sunShadow.length=T,n.sunShadowMap.length=T,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.directionalShadowMatrix.length=L,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=z,n.spotShadowMap.length=z,n.spotLightMatrix.length=z+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=V,J.sunLength=M,J.directionalLength=x,J.pointLength=p,J.spotLength=I,J.rectAreaLength=O,J.hemiLength=E,J.numSunShadows=T,J.numDirectionalShadows=L,J.numPointShadows=D,J.numSpotShadows=z,J.numSpotMaps=w,J.numLightProbes=V,n.version=Ax++)}function h(u,g){let v=0,f=0,M=0,T=0,P=0,x=0,p=g.matrixWorldInverse;for(let I=0,O=u.length;I<O;I++){let E=u[I];if(E.isSunLight){let L=n.sun[v];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(p),v++}else if(E.isDirectionalLight){let L=n.directional[f];L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),f++}else if(E.isSpotLight){let L=n.spot[T];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),T++}else if(E.isRectAreaLight){let L=n.rectArea[P];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),P++}else if(E.isPointLight){let L=n.point[M];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(p),M++}else if(E.isHemisphereLight){let L=n.hemi[x];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(p),x++}}}return{setup:c,setupView:h,state:n}}function ff(i){let t=new Cx(i),e=[],n=[],s=[];function r(f){v.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function c(f){n.push(f)}function h(f){s.push(f)}function u(){t.setup(e)}function g(f){t.setupView(e,f)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:u,setupLightsView:g,pushLight:o,pushShadow:c,pushLightProbeGrid:h}}function Rx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),c;return o===void 0?(c=new ff(i),t.set(s,[c])):r>=o.length?(c=new ff(i),o.push(c)):c=o[r],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
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
}`,Lx=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],Dx=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],pf=new Oe,za=new it,Xh=new it;function Nx(i,t,e){let n=new Mr,s=new Ae,r=new Ae,o=new qe,c=new tl,h=new el,u={},g=e.maxTextureSize,v={[is]:pn,[pn]:is,[vi]:vi},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Px,fragmentShader:Ix}),M=f.clone();M.defines.HORIZONTAL_PASS=1;let T=new Bn;T.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Mn(T,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca;let p=this.type;this.render=function(D,z,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===ml&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ca);let R=i.getRenderTarget(),V=i.getActiveCubeFace(),J=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(yi),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let tt=p!==this.type;tt&&z.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(nt=>nt.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,nt=D.length;X<nt;X++){let ut=D[X],ot=ut.shadow;if(ot===void 0){se("WebGLShadowMap:",ut,"has no shadow.");continue}if(ot.autoUpdate===!1&&ot.needsUpdate===!1)continue;s.copy(ot.mapSize);let at=ot.getFrameExtents();s.multiply(at),r.copy(ot.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(r.x=Math.floor(g/at.x),s.x=r.x*at.x,ot.mapSize.x=r.x),s.y>g&&(r.y=Math.floor(g/at.y),s.y=r.y*at.y,ot.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(ot.camera._reversedDepth=et,ot.map===null||tt===!0){if(ot.map!==null&&(ot.map.depthTexture!==null&&(ot.map.depthTexture.dispose(),ot.map.depthTexture=null),ot.map.dispose()),this.type===wr){if(ut.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ot.map=new Ln(s.x,s.y,{format:os,type:oi,minFilter:fn,magFilter:fn,generateMipmaps:!1}),ot.map.texture.name=ut.name+".shadowMap",ot.map.depthTexture=new Qi(s.x,s.y,qn),ot.map.depthTexture.name=ut.name+".shadowMapDepth",ot.map.depthTexture.format=mi,ot.map.depthTexture.compareFunction=null,ot.map.depthTexture.minFilter=je,ot.map.depthTexture.magFilter=je}else ut.isPointLight?(ot.map=new oc(s.x),ot.map.depthTexture=new jo(s.x,ai)):(ot.map=new Ln(s.x,s.y),ot.map.depthTexture=new Qi(s.x,s.y,ai)),ot.map.depthTexture.name=ut.name+".shadowMap",ot.map.depthTexture.format=mi,this.type===Ca?(ot.map.depthTexture.compareFunction=et?ic:nc,ot.map.depthTexture.minFilter=fn,ot.map.depthTexture.magFilter=fn):(ot.map.depthTexture.compareFunction=null,ot.map.depthTexture.minFilter=je,ot.map.depthTexture.magFilter=je);ot.camera.updateProjectionMatrix()}ot.map.isWebGLCubeRenderTarget!==!0&&(ot.map.width!==s.x||ot.map.height!==s.y)&&ot.map.setSize(s.x,s.y);let ht=ot.map.isWebGLCubeRenderTarget?6:ot.getViewportCount();ut.isPointLight!==!0&&ot.updateMatrices(ut,w);for(let dt=0;dt<ht;dt++){let Vt=ot.getCamera(dt);if(ut.isPointLight){let Jt=ot.camera,Be=ot.matrix,ye=ut.distance||Jt.far;ye!==Jt.far&&(Jt.far=ye,Jt.updateProjectionMatrix()),za.setFromMatrixPosition(ut.matrixWorld),Jt.position.copy(za),Xh.copy(Jt.position),Xh.add(Lx[dt]),Jt.up.copy(Dx[dt]),Jt.lookAt(Xh),Jt.updateMatrixWorld(),Be.makeTranslation(-za.x,-za.y,-za.z),pf.multiplyMatrices(Jt.projectionMatrix,Jt.matrixWorldInverse),ot._frustum.setFromProjectionMatrix(pf,Jt.coordinateSystem,Jt.reversedDepth)}if(ot.map.isWebGLCubeRenderTarget)i.setRenderTarget(ot.map,dt),i.clear();else{dt===0&&(i.setRenderTarget(ot.map),i.clear());let Jt=ot.getViewport(dt);o.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),Z.viewport(o)}n=ot.getFrustum(dt),E(z,w,Vt,ut,this.type)}ot.isPointLightShadow!==!0&&this.type===wr&&I(ot,w),ot.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(R,V,J)};function I(D,z){let w=t.update(P);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null?D.mapPass=new Ln(s.x,s.y,{format:os,type:oi}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),f.uniforms.shadow_pass.value=D.map.depthTexture,f.uniforms.resolution.value.set(D.map.width,D.map.height),f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(z,null,w,f,P,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value.set(D.map.width,D.map.height),M.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(z,null,w,M,P,null)}function O(D,z,w,R){let V=null,J=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(J!==void 0)V=J;else if(V=w.isPointLight===!0?h:c,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let Z=V.uuid,tt=z.uuid,X=u[Z];X===void 0&&(X={},u[Z]=X);let nt=X[tt];nt===void 0&&(nt=V.clone(),X[tt]=nt,z.addEventListener("dispose",L)),V=nt}if(V.visible=z.visible,V.wireframe=z.wireframe,R===wr?V.side=z.shadowSide!==null?z.shadowSide:z.side:V.side=z.shadowSide!==null?z.shadowSide:v[z.side],V.alphaMap=z.alphaMap,V.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,V.map=z.map,V.clipShadows=z.clipShadows,V.clippingPlanes=z.clippingPlanes,V.clipIntersection=z.clipIntersection,V.displacementMap=z.displacementMap,V.displacementScale=z.displacementScale,V.displacementBias=z.displacementBias,V.wireframeLinewidth=z.wireframeLinewidth,V.linewidth=z.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let Z=i.properties.get(V);Z.light=w}return V}function E(D,z,w,R,V){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&V===wr)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);let tt=t.update(D),X=D.material;if(Array.isArray(X)){let nt=tt.groups;for(let ut=0,ot=nt.length;ut<ot;ut++){let at=nt[ut],et=X[at.materialIndex];if(et&&et.visible){let ht=O(D,et,R,V);D.onBeforeShadow(i,D,z,w,tt,ht,at),i.renderBufferDirect(w,null,tt,ht,D,at),D.onAfterShadow(i,D,z,w,tt,ht,at)}}}else if(X.visible){let nt=O(D,X,R,V);D.onBeforeShadow(i,D,z,w,tt,nt,null),i.renderBufferDirect(w,null,tt,nt,D,null),D.onAfterShadow(i,D,z,w,tt,nt,null)}}let Z=D.children;for(let tt=0,X=Z.length;tt<X;tt++)E(Z[tt],z,w,R,V)}function L(D){D.target.removeEventListener("dispose",L);for(let w in u){let R=u[w],V=D.target.uuid;V in R&&(R[V].dispose(),delete R[V])}}}function Ux(i,t){function e(){let H=!1,Dt=new qe,xt=null,Pt=new qe(0,0,0,0);return{setMask:function(kt){xt!==kt&&!H&&(i.colorMask(kt,kt,kt,kt),xt=kt)},setLocked:function(kt){H=kt},setClear:function(kt,bt,zt,Kt,Le){Le===!0&&(kt*=Kt,bt*=Kt,zt*=Kt),Dt.set(kt,bt,zt,Kt),Pt.equals(Dt)===!1&&(i.clearColor(kt,bt,zt,Kt),Pt.copy(Dt))},reset:function(){H=!1,xt=null,Pt.set(-1,0,0,0)}}}function n(){let H=!1,Dt=!1,xt=null,Pt=null,kt=null;return{setReversed:function(bt){if(Dt!==bt){let zt=t.get("EXT_clip_control");bt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Dt=bt;let Kt=kt;kt=null,this.setClear(Kt)}},getReversed:function(){return Dt},setTest:function(bt){bt?vt(i.DEPTH_TEST):Xt(i.DEPTH_TEST)},setMask:function(bt){xt!==bt&&!H&&(i.depthMask(bt),xt=bt)},setFunc:function(bt){if(Dt&&(bt=Gd[bt]),Pt!==bt){switch(bt){case Oo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case zo:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=bt}},setLocked:function(bt){H=bt},setClear:function(bt){kt!==bt&&(kt=bt,Dt&&(bt=1-bt),i.clearDepth(bt))},reset:function(){H=!1,xt=null,Pt=null,kt=null,Dt=!1}}}function s(){let H=!1,Dt=null,xt=null,Pt=null,kt=null,bt=null,zt=null,Kt=null,Le=null;return{setTest:function(we){H||(we?vt(i.STENCIL_TEST):Xt(i.STENCIL_TEST))},setMask:function(we){Dt!==we&&!H&&(i.stencilMask(we),Dt=we)},setFunc:function(we,hn,zn){(xt!==we||Pt!==hn||kt!==zn)&&(i.stencilFunc(we,hn,zn),xt=we,Pt=hn,kt=zn)},setOp:function(we,hn,zn){(bt!==we||zt!==hn||Kt!==zn)&&(i.stencilOp(we,hn,zn),bt=we,zt=hn,Kt=zn)},setLocked:function(we){H=we},setClear:function(we){Le!==we&&(i.clearStencil(we),Le=we)},reset:function(){H=!1,Dt=null,xt=null,Pt=null,kt=null,bt=null,zt=null,Kt=null,Le=null}}}let r=new e,o=new n,c=new s,h=new WeakMap,u=new WeakMap,g={},v={},f={},M=new WeakMap,T=[],P=null,x=!1,p=null,I=null,O=null,E=null,L=null,D=null,z=null,w=new de(0,0,0),R=0,V=!1,J=null,Z=null,tt=null,X=null,nt=null,ut=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ot=!1,at=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(et)[1]),ot=at>=1):et.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),ot=at>=2);let ht=null,dt={},Vt=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),Be=new qe().fromArray(Vt),ye=new qe().fromArray(Jt);function Re(H,Dt,xt,Pt){let kt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(H,bt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<xt;zt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,kt):i.texImage2D(Dt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,kt);return bt}let mt={};mt[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),vt(i.DEPTH_TEST),o.setFunc(gr),ge(!1),ke(fh),vt(i.CULL_FACE),Pe(yi);function vt(H){g[H]!==!0&&(i.enable(H),g[H]=!0)}function Xt(H){g[H]!==!1&&(i.disable(H),g[H]=!1)}function ie(H,Dt){return f[H]!==Dt?(i.bindFramebuffer(H,Dt),f[H]=Dt,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Dt),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Bt(H,Dt){let xt=T,Pt=!1;if(H){xt=M.get(Dt),xt===void 0&&(xt=[],M.set(Dt,xt));let kt=H.textures;if(xt.length!==kt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,zt=kt.length;bt<zt;bt++)xt[bt]=i.COLOR_ATTACHMENT0+bt;xt.length=kt.length,Pt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(xt)}function ue(H){return P!==H?(i.useProgram(H),P=H,!0):!1}let He={[Rs]:i.FUNC_ADD,[cd]:i.FUNC_SUBTRACT,[hd]:i.FUNC_REVERSE_SUBTRACT};He[ud]=i.MIN,He[dd]=i.MAX;let me={[fd]:i.ZERO,[pd]:i.ONE,[md]:i.SRC_COLOR,[_h]:i.SRC_ALPHA,[Md]:i.SRC_ALPHA_SATURATE,[vd]:i.DST_COLOR,[_d]:i.DST_ALPHA,[gd]:i.ONE_MINUS_SRC_COLOR,[xh]:i.ONE_MINUS_SRC_ALPHA,[yd]:i.ONE_MINUS_DST_COLOR,[xd]:i.ONE_MINUS_DST_ALPHA,[Sd]:i.CONSTANT_COLOR,[bd]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function Pe(H,Dt,xt,Pt,kt,bt,zt,Kt,Le,we){if(H===yi){x===!0&&(Xt(i.BLEND),x=!1);return}if(x===!1&&(vt(i.BLEND),x=!0),H!==ld){if(H!==p||we!==V){if((I!==Rs||L!==Rs)&&(i.blendEquation(i.FUNC_ADD),I=Rs,L=Rs),we)switch(H){case Tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ph:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:oe("WebGLState: Invalid blending: ",H);break}else switch(H){case Tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ph:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mh:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",H);break}O=null,E=null,D=null,z=null,w.set(0,0,0),R=0,p=H,V=we}return}kt=kt||Dt,bt=bt||xt,zt=zt||Pt,(Dt!==I||kt!==L)&&(i.blendEquationSeparate(He[Dt],He[kt]),I=Dt,L=kt),(xt!==O||Pt!==E||bt!==D||zt!==z)&&(i.blendFuncSeparate(me[xt],me[Pt],me[bt],me[zt]),O=xt,E=Pt,D=bt,z=zt),(Kt.equals(w)===!1||Le!==R)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Le),w.copy(Kt),R=Le),p=H,V=!1}function Ue(H,Dt){H.side===vi?Xt(i.CULL_FACE):vt(i.CULL_FACE);let xt=H.side===pn;Dt&&(xt=!xt),ge(xt),H.blending===Tr&&H.transparent===!1?Pe(yi):Pe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Pt=H.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),mn(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(H){J!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),J=H)}function ke(H){H!==ad?(vt(i.CULL_FACE),H!==Z&&(H===fh?i.cullFace(i.BACK):H===od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xt(i.CULL_FACE),Z=H}function Ze(H){H!==tt&&(ot&&i.lineWidth(H),tt=H)}function mn(H,Dt,xt){H?(vt(i.POLYGON_OFFSET_FILL),(X!==Dt||nt!==xt)&&(X=Dt,nt=xt,o.getReversed()&&(Dt=-Dt),i.polygonOffset(Dt,xt))):Xt(i.POLYGON_OFFSET_FILL)}function We(H){H?vt(i.SCISSOR_TEST):Xt(i.SCISSOR_TEST)}function Ie(H){H===void 0&&(H=i.TEXTURE0+ut-1),ht!==H&&(i.activeTexture(H),ht=H)}function G(H,Dt,xt){xt===void 0&&(ht===null?xt=i.TEXTURE0+ut-1:xt=ht);let Pt=dt[xt];Pt===void 0&&(Pt={type:void 0,texture:void 0},dt[xt]=Pt),(Pt.type!==H||Pt.texture!==Dt)&&(ht!==xt&&(i.activeTexture(xt),ht=xt),i.bindTexture(H,Dt||mt[H]),Pt.type=H,Pt.texture=Dt)}function on(){let H=dt[ht];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(H){oe("WebGLState:",H)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(H){oe("WebGLState:",H)}}function y(){try{i.texSubImage2D(...arguments)}catch(H){oe("WebGLState:",H)}}function K(){try{i.texSubImage3D(...arguments)}catch(H){oe("WebGLState:",H)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(H){oe("WebGLState:",H)}}function k(){try{i.compressedTexSubImage3D(...arguments)}catch(H){oe("WebGLState:",H)}}function _t(){try{i.texStorage2D(...arguments)}catch(H){oe("WebGLState:",H)}}function Et(){try{i.texStorage3D(...arguments)}catch(H){oe("WebGLState:",H)}}function ct(){try{i.texImage2D(...arguments)}catch(H){oe("WebGLState:",H)}}function yt(){try{i.texImage3D(...arguments)}catch(H){oe("WebGLState:",H)}}function Lt(H){return v[H]!==void 0?v[H]:i.getParameter(H)}function jt(H,Dt){v[H]!==Dt&&(i.pixelStorei(H,Dt),v[H]=Dt)}function Rt(H){Be.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Be.copy(H))}function St(H){ye.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),ye.copy(H))}function $t(H,Dt){let xt=u.get(Dt);xt===void 0&&(xt=new WeakMap,u.set(Dt,xt));let Pt=xt.get(H);Pt===void 0&&(Pt=i.getUniformBlockIndex(Dt,H.name),xt.set(H,Pt))}function Zt(H,Dt){let Pt=u.get(Dt).get(H);h.get(Dt)!==Pt&&(i.uniformBlockBinding(Dt,Pt,H.__bindingPointIndex),h.set(Dt,Pt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),g={},v={},ht=null,dt={},f={},M=new WeakMap,T=[],P=null,x=!1,p=null,I=null,O=null,E=null,L=null,D=null,z=null,w=new de(0,0,0),R=0,V=!1,J=null,Z=null,tt=null,X=null,nt=null,Be.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:vt,disable:Xt,bindFramebuffer:ie,drawBuffers:Bt,useProgram:ue,setBlending:Pe,setMaterial:Ue,setFlipSided:ge,setCullFace:ke,setLineWidth:Ze,setPolygonOffset:mn,setScissorTest:We,activeTexture:Ie,bindTexture:G,unbindTexture:on,compressedTexImage2D:re,compressedTexImage3D:N,texImage2D:ct,texImage3D:yt,pixelStorei:jt,getParameter:Lt,updateUBOMapping:$t,uniformBlockBinding:Zt,texStorage2D:_t,texStorage3D:Et,texSubImage2D:y,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:k,scissor:Rt,viewport:St,reset:te}}function Fx(i,t,e,n,s,r,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ae,g=new WeakMap,v=new Set,f,M=new WeakMap,T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(N,y){return T?new OffscreenCanvas(N,y):la("canvas")}function x(N,y,K){let q=1,k=re(N);if((k.width>K||k.height>K)&&(q=K/Math.max(k.width,k.height)),q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let _t=Math.floor(q*k.width),Et=Math.floor(q*k.height);f===void 0&&(f=P(_t,Et));let ct=y?P(_t,Et):f;return ct.width=_t,ct.height=Et,ct.getContext("2d").drawImage(N,0,0,_t,Et),se("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+_t+"x"+Et+")."),ct}else return"data"in N&&se("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),N;return N}function p(N){return N.generateMipmaps}function I(N){i.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(N,y,K,q,k,_t=!1){if(N!==null){if(i[N]!==void 0)return i[N];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Et;q&&(Et=t.get("EXT_texture_norm16"),Et||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=y;if(y===i.RED&&(K===i.FLOAT&&(ct=i.R32F),K===i.HALF_FLOAT&&(ct=i.R16F),K===i.UNSIGNED_BYTE&&(ct=i.R8),K===i.UNSIGNED_SHORT&&Et&&(ct=Et.R16_EXT),K===i.SHORT&&Et&&(ct=Et.R16_SNORM_EXT)),y===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ct=i.R8UI),K===i.UNSIGNED_SHORT&&(ct=i.R16UI),K===i.UNSIGNED_INT&&(ct=i.R32UI),K===i.BYTE&&(ct=i.R8I),K===i.SHORT&&(ct=i.R16I),K===i.INT&&(ct=i.R32I)),y===i.RG&&(K===i.FLOAT&&(ct=i.RG32F),K===i.HALF_FLOAT&&(ct=i.RG16F),K===i.UNSIGNED_BYTE&&(ct=i.RG8),K===i.UNSIGNED_SHORT&&Et&&(ct=Et.RG16_EXT),K===i.SHORT&&Et&&(ct=Et.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ct=i.RG8UI),K===i.UNSIGNED_SHORT&&(ct=i.RG16UI),K===i.UNSIGNED_INT&&(ct=i.RG32UI),K===i.BYTE&&(ct=i.RG8I),K===i.SHORT&&(ct=i.RG16I),K===i.INT&&(ct=i.RG32I)),y===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),K===i.UNSIGNED_INT&&(ct=i.RGB32UI),K===i.BYTE&&(ct=i.RGB8I),K===i.SHORT&&(ct=i.RGB16I),K===i.INT&&(ct=i.RGB32I)),y===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),K===i.UNSIGNED_INT&&(ct=i.RGBA32UI),K===i.BYTE&&(ct=i.RGBA8I),K===i.SHORT&&(ct=i.RGBA16I),K===i.INT&&(ct=i.RGBA32I)),y===i.RGB&&(K===i.UNSIGNED_SHORT&&Et&&(ct=Et.RGB16_EXT),K===i.SHORT&&Et&&(ct=Et.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),y===i.RGBA){let yt=_t?oa:be.getTransfer(k);K===i.FLOAT&&(ct=i.RGBA32F),K===i.HALF_FLOAT&&(ct=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ct=yt===Ne?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Et&&(ct=Et.RGBA16_EXT),K===i.SHORT&&Et&&(ct=Et.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function L(N,y){let K;return N?y===null||y===ai||y===Er?K=i.DEPTH24_STENCIL8:y===qn?K=i.DEPTH32F_STENCIL8:y===Ar&&(K=i.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ai||y===Er?K=i.DEPTH_COMPONENT24:y===qn?K=i.DEPTH_COMPONENT32F:y===Ar&&(K=i.DEPTH_COMPONENT16),K}function D(N,y){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==je&&N.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?y.mipmaps.length:1}function z(N){let y=N.target;y.removeEventListener("dispose",z),R(y),y.isVideoTexture&&g.delete(y),y.isHTMLTexture&&v.delete(y)}function w(N){let y=N.target;y.removeEventListener("dispose",w),J(y)}function R(N){let y=n.get(N);if(y.__webglInit===void 0)return;let K=N.source,q=M.get(K);if(q){let k=q[y.__cacheKey];k.usedTimes--,k.usedTimes===0&&V(N),Object.keys(q).length===0&&M.delete(K)}n.remove(N)}function V(N){let y=n.get(N);i.deleteTexture(y.__webglTexture);let K=N.source,q=M.get(K);delete q[y.__cacheKey],o.memory.textures--}function J(N){let y=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let k=0;k<y.__webglFramebuffer[q].length;k++)i.deleteFramebuffer(y.__webglFramebuffer[q][k]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let K=N.textures;for(let q=0,k=K.length;q<k;q++){let _t=n.get(K[q]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(K[q])}n.remove(N)}let Z=0;function tt(){Z=0}function X(){return Z}function nt(N){Z=N}function ut(){let N=Z;return N>=s.maxTextures&&se("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,N}function ot(N){let y=[];return y.push(N.wrapS),y.push(N.wrapT),y.push(N.wrapR||0),y.push(N.magFilter),y.push(N.minFilter),y.push(N.anisotropy),y.push(N.internalFormat),y.push(N.format),y.push(N.type),y.push(N.generateMipmaps),y.push(N.premultiplyAlpha),y.push(N.flipY),y.push(N.unpackAlignment),y.push(N.colorSpace),y.join()}function at(N,y){let K=n.get(N);if(N.isVideoTexture&&G(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&K.__version!==N.version){let q=N.image;if(q===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(K,N,y);return}}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+y)}function et(N,y){let K=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){Xt(K,N,y);return}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+y)}function ht(N,y){let K=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){Xt(K,N,y);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+y)}function dt(N,y){let K=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&K.__version!==N.version){ie(K,N,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+y)}let Vt={[Wo]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},Jt={[je]:i.NEAREST,[Cd]:i.NEAREST_MIPMAP_NEAREST,[Ia]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[xl]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},Be={[Ld]:i.NEVER,[Od]:i.ALWAYS,[Dd]:i.LESS,[nc]:i.LEQUAL,[Nd]:i.EQUAL,[ic]:i.GEQUAL,[Ud]:i.GREATER,[Fd]:i.NOTEQUAL};function ye(N,y){if(y.type===qn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===fn||y.magFilter===xl||y.magFilter===Ia||y.magFilter===rs||y.minFilter===fn||y.minFilter===xl||y.minFilter===Ia||y.minFilter===rs)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Vt[y.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Vt[y.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Vt[y.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Jt[y.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Jt[y.minFilter]),y.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Be[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===je||y.minFilter!==Ia&&y.minFilter!==rs||y.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Re(N,y){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,y.addEventListener("dispose",z));let q=y.source,k=M.get(q);k===void 0&&(k={},M.set(q,k));let _t=ot(y);if(_t!==N.__cacheKey){k[_t]===void 0&&(k[_t]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),k[_t].usedTimes++;let Et=k[N.__cacheKey];Et!==void 0&&(k[N.__cacheKey].usedTimes--,Et.usedTimes===0&&V(y)),N.__cacheKey=_t,N.__webglTexture=k[_t].texture}return K}function mt(N,y,K){return Math.floor(Math.floor(N/K)/y)}function vt(N,y,K,q){let _t=N.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,K,q,y.data);else{_t.sort((jt,Rt)=>jt.start-Rt.start);let Et=0;for(let jt=1;jt<_t.length;jt++){let Rt=_t[Et],St=_t[jt],$t=Rt.start+Rt.count,Zt=mt(St.start,y.width,4),te=mt(Rt.start,y.width,4);St.start<=$t+1&&Zt===te&&mt(St.start+St.count-1,y.width,4)===Zt?Rt.count=Math.max(Rt.count,St.start+St.count-Rt.start):(++Et,_t[Et]=St)}_t.length=Et+1;let ct=e.getParameter(i.UNPACK_ROW_LENGTH),yt=e.getParameter(i.UNPACK_SKIP_PIXELS),Lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let jt=0,Rt=_t.length;jt<Rt;jt++){let St=_t[jt],$t=Math.floor(St.start/4),Zt=Math.ceil(St.count/4),te=$t%y.width,H=Math.floor($t/y.width),Dt=Zt,xt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,te,H,Dt,xt,K,q,y.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ct),e.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function Xt(N,y,K){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);let k=Re(N,y),_t=y.source;e.bindTexture(q,N.__webglTexture,i.TEXTURE0+K);let Et=n.get(_t);if(_t.version!==Et.__version||k===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let xt=be.getPrimaries(be.workingColorSpace),Pt=y.colorSpace===Di?null:be.getPrimaries(y.colorSpace),kt=y.colorSpace===Di||xt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let yt=x(y.image,!1,s.maxTextureSize);yt=on(y,yt);let Lt=r.convert(y.format,y.colorSpace),jt=r.convert(y.type),Rt=E(y.internalFormat,Lt,jt,y.normalized,y.colorSpace,y.isVideoTexture);ye(q,y);let St,$t=y.mipmaps,Zt=y.isVideoTexture!==!0,te=Et.__version===void 0||k===!0,H=_t.dataReady,Dt=D(y,yt);if(y.isDepthTexture)Rt=L(y.format===as,y.type),te&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Rt,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,yt.width,yt.height,0,Lt,jt,null));else if(y.isDataTexture)if($t.length>0){Zt&&te&&e.texStorage2D(i.TEXTURE_2D,Dt,Rt,$t[0].width,$t[0].height);for(let xt=0,Pt=$t.length;xt<Pt;xt++)St=$t[xt],Zt?H&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,Lt,jt,St.data):e.texImage2D(i.TEXTURE_2D,xt,Rt,St.width,St.height,0,Lt,jt,St.data);y.generateMipmaps=!1}else Zt?(te&&e.texStorage2D(i.TEXTURE_2D,Dt,Rt,yt.width,yt.height),H&&vt(y,yt,Lt,jt)):e.texImage2D(i.TEXTURE_2D,0,Rt,yt.width,yt.height,0,Lt,jt,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Zt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Rt,$t[0].width,$t[0].height,yt.depth);for(let xt=0,Pt=$t.length;xt<Pt;xt++)if(St=$t[xt],y.format!==Yn)if(Lt!==null)if(Zt){if(H)if(y.layerUpdates.size>0){let kt=kh(St.width,St.height,y.format,y.type);for(let bt of y.layerUpdates){let zt=St.data.subarray(bt*kt/St.data.BYTES_PER_ELEMENT,(bt+1)*kt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,bt,St.width,St.height,1,Lt,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,St.width,St.height,yt.depth,Lt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Rt,St.width,St.height,yt.depth,0,St.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,St.width,St.height,yt.depth,Lt,jt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,Rt,St.width,St.height,yt.depth,0,Lt,jt,St.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Zt&&te&&e.texStorage2D(i.TEXTURE_2D,Dt,Rt,$t[0].width,$t[0].height);for(let xt=0,Pt=$t.length;xt<Pt;xt++)St=$t[xt],y.format!==Yn?Lt!==null?Zt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,Lt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,Rt,St.width,St.height,0,St.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?H&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,Lt,jt,St.data):e.texImage2D(i.TEXTURE_2D,xt,Rt,St.width,St.height,0,Lt,jt,St.data)}else if(y.isDataArrayTexture)if(Zt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Rt,yt.width,yt.height,yt.depth),H)if(y.layerUpdates.size>0){let xt=kh(yt.width,yt.height,y.format,y.type);for(let Pt of y.layerUpdates){let kt=yt.data.subarray(Pt*xt/yt.data.BYTES_PER_ELEMENT,(Pt+1)*xt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,yt.width,yt.height,1,Lt,jt,kt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Lt,jt,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,yt.width,yt.height,yt.depth,0,Lt,jt,yt.data);else if(y.isData3DTexture)Zt?(te&&e.texStorage3D(i.TEXTURE_3D,Dt,Rt,yt.width,yt.height,yt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Lt,jt,yt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,yt.width,yt.height,yt.depth,0,Lt,jt,yt.data);else if(y.isFramebufferTexture){if(te)if(Zt)e.texStorage2D(i.TEXTURE_2D,Dt,Rt,yt.width,yt.height);else{let xt=yt.width,Pt=yt.height;for(let kt=0;kt<Dt;kt++)e.texImage2D(i.TEXTURE_2D,kt,Rt,xt,Pt,0,Lt,jt,null),xt>>=1,Pt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let xt=i.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),yt.parentNode!==xt){xt.appendChild(yt),v.add(y),xt.onpaint=Pt=>{let kt=Pt.changedElements;for(let bt of v)kt.includes(bt.image)&&(bt.needsUpdate=!0)},xt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,yt);else{let kt=i.RGBA,bt=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,kt,bt,zt,yt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($t.length>0){if(Zt&&te){let xt=re($t[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Rt,xt.width,xt.height)}for(let xt=0,Pt=$t.length;xt<Pt;xt++)St=$t[xt],Zt?H&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Lt,jt,St):e.texImage2D(i.TEXTURE_2D,xt,Rt,Lt,jt,St);y.generateMipmaps=!1}else if(Zt){if(te){let xt=re(yt);e.texStorage2D(i.TEXTURE_2D,Dt,Rt,xt.width,xt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,jt,yt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,Lt,jt,yt);p(y)&&I(q),Et.__version=_t.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function ie(N,y,K){if(y.image.length!==6)return;let q=Re(N,y),k=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+K);let _t=n.get(k);if(k.version!==_t.__version||q===!0){e.activeTexture(i.TEXTURE0+K);let Et=be.getPrimaries(be.workingColorSpace),ct=y.colorSpace===Di?null:be.getPrimaries(y.colorSpace),yt=y.colorSpace===Di||Et===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Lt=y.isCompressedTexture||y.image[0].isCompressedTexture,jt=y.image[0]&&y.image[0].isDataTexture,Rt=[];for(let bt=0;bt<6;bt++)!Lt&&!jt?Rt[bt]=x(y.image[bt],!0,s.maxCubemapSize):Rt[bt]=jt?y.image[bt].image:y.image[bt],Rt[bt]=on(y,Rt[bt]);let St=Rt[0],$t=r.convert(y.format,y.colorSpace),Zt=r.convert(y.type),te=E(y.internalFormat,$t,Zt,y.normalized,y.colorSpace),H=y.isVideoTexture!==!0,Dt=_t.__version===void 0||q===!0,xt=k.dataReady,Pt=D(y,St);ye(i.TEXTURE_CUBE_MAP,y);let kt;if(Lt){H&&Dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,te,St.width,St.height);for(let bt=0;bt<6;bt++){kt=Rt[bt].mipmaps;for(let zt=0;zt<kt.length;zt++){let Kt=kt[zt];y.format!==Yn?$t!==null?H?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt,0,0,Kt.width,Kt.height,$t,Kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt,te,Kt.width,Kt.height,0,Kt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt,0,0,Kt.width,Kt.height,$t,Zt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt,te,Kt.width,Kt.height,0,$t,Zt,Kt.data)}}}else{if(kt=y.mipmaps,H&&Dt){kt.length>0&&Pt++;let bt=re(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,te,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(jt){H?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Rt[bt].width,Rt[bt].height,$t,Zt,Rt[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,te,Rt[bt].width,Rt[bt].height,0,$t,Zt,Rt[bt].data);for(let zt=0;zt<kt.length;zt++){let Le=kt[zt].image[bt].image;H?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt+1,0,0,Le.width,Le.height,$t,Zt,Le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt+1,te,Le.width,Le.height,0,$t,Zt,Le.data)}}else{H?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,$t,Zt,Rt[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,te,$t,Zt,Rt[bt]);for(let zt=0;zt<kt.length;zt++){let Kt=kt[zt];H?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt+1,0,0,$t,Zt,Kt.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt+1,te,$t,Zt,Kt.image[bt])}}}p(y)&&I(i.TEXTURE_CUBE_MAP),_t.__version=k.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function Bt(N,y,K,q,k,_t){let Et=r.convert(K.format,K.colorSpace),ct=r.convert(K.type),yt=E(K.internalFormat,Et,ct,K.normalized,K.colorSpace),Lt=n.get(y),jt=n.get(K);if(jt.__renderTarget=y,!Lt.__hasExternalTextures){let Rt=Math.max(1,y.width>>_t),St=Math.max(1,y.height>>_t);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?e.texImage3D(k,_t,yt,Rt,St,y.depth,0,Et,ct,null):e.texImage2D(k,_t,yt,Rt,St,0,Et,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Ie(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,k,jt.__webglTexture,0,We(y)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,k,jt.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(N,y,K){if(i.bindRenderbuffer(i.RENDERBUFFER,N),y.depthBuffer){let q=y.depthTexture,k=q&&q.isDepthTexture?q.type:null,_t=L(y.stencilBuffer,k),Et=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(y),_t,y.width,y.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(y),_t,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_t,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,N)}else{let q=y.textures;for(let k=0;k<q.length;k++){let _t=q[k],Et=r.convert(_t.format,_t.colorSpace),ct=r.convert(_t.type),yt=E(_t.internalFormat,Et,ct,_t.normalized,_t.colorSpace);Ie(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(y),yt,y.width,y.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(y),yt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,yt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(N,y,K){let q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let k=n.get(y.depthTexture);if(k.__renderTarget=y,(!k.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(k.__webglInit===void 0&&(k.__webglInit=!0,y.depthTexture.addEventListener("dispose",z)),k.__webglTexture===void 0){k.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),ye(i.TEXTURE_CUBE_MAP,y.depthTexture);let Lt=r.convert(y.depthTexture.format),jt=r.convert(y.depthTexture.type),Rt;y.depthTexture.format===mi?Rt=i.DEPTH_COMPONENT24:y.depthTexture.format===as&&(Rt=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Rt,y.width,y.height,0,Lt,jt,null)}}else at(y.depthTexture,0);let _t=k.__webglTexture,Et=We(y),ct=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,yt=y.depthTexture.format===as?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===mi)Ie(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,ct,_t,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,yt,ct,_t,0);else if(y.depthTexture.format===as)Ie(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,ct,_t,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,yt,ct,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(N){let y=n.get(N),K=N.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==N.depthTexture){let q=N.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let k=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",k)};q.addEventListener("dispose",k),y.__depthDisposeCallback=k}y.__boundDepthTexture=q}if(N.depthTexture&&!y.__autoAllocateDepthBuffer)if(K)for(let q=0;q<6;q++)He(y.__webglFramebuffer[q],N,q);else{let q=N.texture.mipmaps;q&&q.length>0?He(y.__webglFramebuffer[0],N,0):He(y.__webglFramebuffer,N,0)}else if(K){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),ue(y.__webglDepthbuffer[q],N,!1);else{let k=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,_t)}}else{let q=N.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ue(y.__webglDepthbuffer,N,!1);else{let k=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,_t)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(N,y,K){let q=n.get(N);y!==void 0&&Bt(q.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&me(N)}function Ue(N){let y=N.texture,K=n.get(N),q=n.get(y);N.addEventListener("dispose",w);let k=N.textures,_t=N.isWebGLCubeRenderTarget===!0,Et=k.length>1;if(Et||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,o.memory.textures++),_t){K.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[ct]=[];for(let yt=0;yt<y.mipmaps.length;yt++)K.__webglFramebuffer[ct][yt]=i.createFramebuffer()}else K.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let ct=0;ct<y.mipmaps.length;ct++)K.__webglFramebuffer[ct]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ct=0,yt=k.length;ct<yt;ct++){let Lt=n.get(k[ct]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Ie(N)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ct=0;ct<k.length;ct++){let yt=k[ct];K.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ct]);let Lt=r.convert(yt.format,yt.colorSpace),jt=r.convert(yt.type),Rt=E(yt.internalFormat,Lt,jt,yt.normalized,yt.colorSpace,N.isXRRenderTarget===!0),St=We(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Rt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,K.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(K.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ye(i.TEXTURE_CUBE_MAP,y);for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)Bt(K.__webglFramebuffer[ct][yt],N,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt);else Bt(K.__webglFramebuffer[ct],N,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(y)&&I(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ct=0,yt=k.length;ct<yt;ct++){let Lt=k[ct],jt=n.get(Lt),Rt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Rt,jt.__webglTexture),ye(Rt,Lt),Bt(K.__webglFramebuffer,N,Lt,i.COLOR_ATTACHMENT0+ct,Rt,0),p(Lt)&&I(Rt)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ct=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,q.__webglTexture),ye(ct,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)Bt(K.__webglFramebuffer[yt],N,y,i.COLOR_ATTACHMENT0,ct,yt);else Bt(K.__webglFramebuffer,N,y,i.COLOR_ATTACHMENT0,ct,0);p(y)&&I(ct),e.unbindTexture()}N.depthBuffer&&me(N)}function ge(N){let y=N.textures;for(let K=0,q=y.length;K<q;K++){let k=y[K];if(p(k)){let _t=O(N),Et=n.get(k).__webglTexture;e.bindTexture(_t,Et),I(_t),e.unbindTexture()}}}let ke=[],Ze=[];function mn(N){if(N.samples>0){if(Ie(N)===!1){let y=N.textures,K=N.width,q=N.height,k=i.COLOR_BUFFER_BIT,_t=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(N),ct=y.length>1;if(ct)for(let Lt=0;Lt<y.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let yt=N.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Lt=0;Lt<y.length;Lt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(k|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Lt]);let jt=n.get(y[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,K,q,0,0,K,q,k,i.NEAREST),h===!0&&(ke.length=0,Ze.length=0,ke.push(i.COLOR_ATTACHMENT0+Lt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(ke.push(_t),Ze.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Lt=0;Lt<y.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Lt]);let jt=n.get(y[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&h){let y=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function We(N){return Math.min(s.maxSamples,N.samples)}function Ie(N){let y=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function G(N){let y=o.render.frame;g.get(N)!==y&&(g.set(N,y),N.update())}function on(N,y){let K=N.colorSpace,q=N.format,k=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==aa&&K!==Di&&(be.getTransfer(K)===Ne?(q!==Yn||k!==Dn)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",K)),y}function re(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=ut,this.resetTextureUnits=tt,this.getTextureUnits=X,this.setTextureUnits=nt,this.setTexture2D=at,this.setTexture2DArray=et,this.setTexture3D=ht,this.setTextureCube=dt,this.rebindTextures=Pe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ox(i,t){function e(n,s=Di){let r,o=be.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===Ch)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===Ih)return i.ALPHA;if(n===Lh)return i.RGB;if(n===Yn)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Cr)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===os)return i.RG;if(n===bl)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===La||n===Da||n===Na||n===Ua)if(o===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===Al||n===El||n===Cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Pl||n===Il||n===Ll||n===Dl||n===Fa||n===Nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Pl)return o===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ll)return r.COMPRESSED_R11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fa)return r.COMPRESSED_RG11_EAC;if(n===Nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ul||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===Jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ul)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ol)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zl||n===Kl||n===$l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zl)return o===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===Ql||n===Oa||n===tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
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

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new va(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Rn({vertexShader:Bx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mn(new ya(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends gi{constructor(t,e){super();let n=this,s=null,r=1,o=null,c="local-floor",h=1,u=null,g=null,v=null,f=null,M=null,T=null,P=typeof XRWebGLBinding<"u",x=new Qh,p={},I=e.getContextAttributes(),O=null,E=null,L=[],D=[],z=new Ae,w=null,R=null,V=new vn;V.viewport=new qe;let J=new vn;J.viewport=new qe;let Z=[V,J],tt=new pl,X=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(mt){let vt=L[mt];return vt===void 0&&(vt=new yr,L[mt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(mt){let vt=L[mt];return vt===void 0&&(vt=new yr,L[mt]=vt),vt.getGripSpace()},this.getHand=function(mt){let vt=L[mt];return vt===void 0&&(vt=new yr,L[mt]=vt),vt.getHandSpace()};function ut(mt){let vt=D.indexOf(mt.inputSource);if(vt===-1)return;let Xt=L[vt];Xt!==void 0&&(Xt.update(mt.inputSource,mt.frame,u||o),Xt.dispatchEvent({type:mt.type,data:mt.inputSource}))}function ot(){s.removeEventListener("select",ut),s.removeEventListener("selectstart",ut),s.removeEventListener("selectend",ut),s.removeEventListener("squeeze",ut),s.removeEventListener("squeezestart",ut),s.removeEventListener("squeezeend",ut),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",at);for(let mt=0;mt<L.length;mt++){let vt=D[mt];vt!==null&&(D[mt]=null,L[mt].disconnect(vt))}X=null,nt=null,x.reset();for(let mt in p)delete p[mt];if(t.setRenderTarget(O),M=null,f=null,v=null,s=null,E=null,Re.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(z.width,z.height,!1),R!==null){let mt=R.camera;mt.fov=R.fov,mt.zoom=R.zoom,mt.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(mt){r=mt,n.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(mt){c=mt,n.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(mt){u=mt},this.getBaseLayer=function(){return f!==null?f:M},this.getBinding=function(){return v===null&&P&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(mt){if(s=mt,s!==null){if(O=t.getRenderTarget(),s.addEventListener("select",ut),s.addEventListener("selectstart",ut),s.addEventListener("selectend",ut),s.addEventListener("squeeze",ut),s.addEventListener("squeezestart",ut),s.addEventListener("squeezeend",ut),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",at),I.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(z),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Xt=null,ie=null,Bt=null;I.depth&&(Bt=I.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Xt=I.stencil?as:mi,ie=I.stencil?Er:ai);let ue={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:r};v=this.getBinding(),f=v.createProjectionLayer(ue),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Ln(f.textureWidth,f.textureHeight,{format:Yn,type:Dn,depthTexture:new Qi(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Xt),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Xt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:r};M=new XRWebGLLayer(s,e,Xt),s.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),E=new Ln(M.framebufferWidth,M.framebufferHeight,{format:Yn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await s.requestReferenceSpace(c),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function at(mt){for(let vt=0;vt<mt.removed.length;vt++){let Xt=mt.removed[vt],ie=D.indexOf(Xt);ie>=0&&(D[ie]=null,L[ie].disconnect(Xt))}for(let vt=0;vt<mt.added.length;vt++){let Xt=mt.added[vt],ie=D.indexOf(Xt);if(ie===-1){for(let ue=0;ue<L.length;ue++)if(ue>=D.length){D.push(Xt),ie=ue;break}else if(D[ue]===null){D[ue]=Xt,ie=ue;break}if(ie===-1)break}let Bt=L[ie];Bt&&Bt.connect(Xt)}}let et=new it,ht=new it;function dt(mt,vt,Xt){et.setFromMatrixPosition(vt.matrixWorld),ht.setFromMatrixPosition(Xt.matrixWorld);let ie=et.distanceTo(ht),Bt=vt.projectionMatrix.elements,ue=Xt.projectionMatrix.elements,He=Bt[14]/(Bt[10]-1),me=Bt[14]/(Bt[10]+1),Pe=(Bt[9]+1)/Bt[5],Ue=(Bt[9]-1)/Bt[5],ge=(Bt[8]-1)/Bt[0],ke=(ue[8]+1)/ue[0],Ze=He*ge,mn=He*ke,We=ie/(-ge+ke),Ie=We*-ge;if(vt.matrixWorld.decompose(mt.position,mt.quaternion,mt.scale),mt.translateX(Ie),mt.translateZ(We),mt.matrixWorld.compose(mt.position,mt.quaternion,mt.scale),mt.matrixWorldInverse.copy(mt.matrixWorld).invert(),Bt[10]===-1)mt.projectionMatrix.copy(vt.projectionMatrix),mt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let G=He+We,on=me+We,re=Ze-Ie,N=mn+(ie-Ie),y=Pe*me/on*G,K=Ue*me/on*G;mt.projectionMatrix.makePerspective(re,N,y,K,G,on),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert()}}function Vt(mt,vt){vt===null?mt.matrixWorld.copy(mt.matrix):mt.matrixWorld.multiplyMatrices(vt.matrixWorld,mt.matrix),mt.matrixWorldInverse.copy(mt.matrixWorld).invert()}this.updateCamera=function(mt){if(s===null)return;let vt=mt.near,Xt=mt.far;x.texture!==null&&(x.depthNear>0&&(vt=x.depthNear),x.depthFar>0&&(Xt=x.depthFar)),tt.near=J.near=V.near=vt,tt.far=J.far=V.far=Xt,(X!==tt.near||nt!==tt.far)&&(s.updateRenderState({depthNear:tt.near,depthFar:tt.far}),X=tt.near,nt=tt.far),tt.layers.mask=mt.layers.mask|6,V.layers.mask=tt.layers.mask&-5,J.layers.mask=tt.layers.mask&-3;let ie=mt.parent,Bt=tt.cameras;Vt(tt,ie);for(let ue=0;ue<Bt.length;ue++)Vt(Bt[ue],ie);Bt.length===2?dt(tt,V,J):tt.projectionMatrix.copy(V.projectionMatrix),R===null&&mt.isPerspectiveCamera&&(R={camera:mt,fov:mt.fov,zoom:mt.zoom}),Jt(mt,tt,ie)};function Jt(mt,vt,Xt){Xt===null?mt.matrix.copy(vt.matrixWorld):(mt.matrix.copy(Xt.matrixWorld),mt.matrix.invert(),mt.matrix.multiply(vt.matrixWorld)),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.updateMatrixWorld(!0),mt.projectionMatrix.copy(vt.projectionMatrix),mt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),mt.isPerspectiveCamera&&(mt.fov=Yo*2*Math.atan(1/mt.projectionMatrix.elements[5]),mt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(f===null&&M===null))return h},this.setFoveation=function(mt){h=mt,f!==null&&(f.fixedFoveation=mt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=mt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(tt)},this.getCameraTexture=function(mt){return p[mt]};let Be=null;function ye(mt,vt){if(g=vt.getViewerPose(u||o),T=vt,g!==null){let Xt=g.views;M!==null&&(t.setRenderTargetFramebuffer(E,M.framebuffer),t.setRenderTarget(E));let ie=!1;Xt.length!==tt.cameras.length&&(tt.cameras.length=0,ie=!0);for(let me=0;me<Xt.length;me++){let Pe=Xt[me],Ue=null;if(M!==null)Ue=M.getViewport(Pe);else{let ke=v.getViewSubImage(f,Pe);Ue=ke.viewport,me===0&&(t.setRenderTargetTextures(E,ke.colorTexture,ke.depthStencilTexture),t.setRenderTarget(E))}let ge=Z[me];ge===void 0&&(ge=new vn,ge.layers.enable(me),ge.viewport=new qe,Z[me]=ge),ge.matrix.fromArray(Pe.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Pe.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),me===0&&(tt.matrix.copy(ge.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),ie===!0&&tt.cameras.push(ge)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){v=n.getBinding();let me=v.getDepthInformation(Xt[0]);me&&me.isValid&&me.texture&&x.init(me,s.renderState)}if(Bt&&Bt.includes("camera-access")&&P){t.state.unbindTexture(),v=n.getBinding();for(let me=0;me<Xt.length;me++){let Pe=Xt[me].camera;if(Pe){let Ue=p[Pe];Ue||(Ue=new va,p[Pe]=Ue);let ge=v.getCameraImage(Pe);Ue.sourceTexture=ge}}}}for(let Xt=0;Xt<L.length;Xt++){let ie=D[Xt],Bt=L[Xt];ie!==null&&Bt!==void 0&&Bt.update(ie,vt,u||o)}Be&&Be(mt,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),T=null}let Re=new mf;Re.setAnimationLoop(ye),this.setAnimationLoop=function(mt){Be=mt},this.dispose=function(){}}},zx=new Oe,Mf=new le;Mf.set(-1,0,0,0,1,0,0,0,1);function Vx(i,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Fh(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,I,O,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),v(x,p)):p.isMeshPhongMaterial?(r(x,p),g(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),f(x,p),p.isMeshPhysicalMaterial&&M(x,p,E)):p.isMeshMatcapMaterial?(r(x,p),T(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),P(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&c(x,p)):p.isPointsMaterial?h(x,p,I,O):p.isSpriteMaterial?u(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===pn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===pn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let I=t.get(p),O=I.envMap,E=I.envMapRotation;O&&(x.envMap.value=O,x.envMapRotation.value.setFromMatrix4(zx.makeRotationFromEuler(E)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Mf),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function c(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function h(x,p,I,O){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*I,x.scale.value=O*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function g(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function v(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function f(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function M(x,p,I){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,p){p.matcap&&(x.matcap.value=p.matcap)}function P(x,p){let I=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gx(i,t,e,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(E,L){let D=L.program;n.uniformBlockBinding(E,D)}function u(E,L){let D=s[E.id];D===void 0&&(x(E),D=g(E),s[E.id]=D,E.addEventListener("dispose",I));let z=L.program;n.updateUBOMapping(E,z);let w=t.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function g(E){let L=v();E.__bindingPointIndex=L;let D=i.createBuffer(),z=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,z,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,D),D}function v(){for(let E=0;E<c;E++)if(o.indexOf(E)===-1)return o.push(E),E;return oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let L=s[E.id],D=E.uniforms,z=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let w=0,R=D.length;w<R;w++){let V=D[w];if(Array.isArray(V))for(let J=0,Z=V.length;J<Z;J++)M(V[J],w,J,z);else M(V,w,0,z)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(E,L,D,z){if(P(E,L,D,z)===!0){let w=E.__offset,R=E.value;if(Array.isArray(R)){let V=0;for(let J=0;J<R.length;J++){let Z=R[J],tt=p(Z);T(Z,E.__data,V),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(R,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,E.__data)}}function T(E,L,D){typeof E=="number"||typeof E=="boolean"?L[0]=E:E.isMatrix3?(L[0]=E.elements[0],L[1]=E.elements[1],L[2]=E.elements[2],L[3]=0,L[4]=E.elements[3],L[5]=E.elements[4],L[6]=E.elements[5],L[7]=0,L[8]=E.elements[6],L[9]=E.elements[7],L[10]=E.elements[8],L[11]=0):ArrayBuffer.isView(E)?L.set(new E.constructor(E.buffer,E.byteOffset,L.length)):E.toArray(L,D)}function P(E,L,D,z){let w=E.value,R=L+"_"+D;if(z[R]===void 0)return typeof w=="number"||typeof w=="boolean"?z[R]=w:ArrayBuffer.isView(w)?z[R]=w.slice():z[R]=w.clone(),!0;{let V=z[R];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return z[R]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(V.equals(w)===!1)return V.copy(w),!0}}return!1}function x(E){let L=E.uniforms,D=0,z=16;for(let R=0,V=L.length;R<V;R++){let J=Array.isArray(L[R])?L[R]:[L[R]];for(let Z=0,tt=J.length;Z<tt;Z++){let X=J[Z],nt=Array.isArray(X.value)?X.value:[X.value];for(let ut=0,ot=nt.length;ut<ot;ut++){let at=nt[ut],et=p(at),ht=D%z,dt=ht%et.boundary,Vt=ht+dt;D+=dt,Vt!==0&&z-Vt<et.storage&&(D+=z-Vt),X.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=D,D+=et.storage}}}let w=D%z;return w>0&&(D+=z-w),E.__size=D,E.__cache={},this}function p(E){let L={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(L.boundary=4,L.storage=4):E.isVector2?(L.boundary=8,L.storage=8):E.isVector3||E.isColor?(L.boundary=16,L.storage=12):E.isVector4?(L.boundary=16,L.storage=16):E.isMatrix3?(L.boundary=48,L.storage=48):E.isMatrix4?(L.boundary=64,L.storage=64):E.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(L.boundary=16,L.storage=E.byteLength):se("WebGLRenderer: Unsupported uniform value type.",E),L}function I(E){let L=E.target;L.removeEventListener("dispose",I);let D=o.indexOf(L.__bindingPointIndex);o.splice(D,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function O(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:h,update:u,dispose:O}}var Hx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function Wx(){return Mi===null&&(Mi=new Cs(Hx,16,16,os,oi),Mi.name="DFG_LUT",Mi.minFilter=fn,Mi.magFilter=fn,Mi.wrapS=pi,Mi.wrapT=pi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var lc=class{constructor(t={}){let{canvas:e=kd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:f=!1,outputBufferType:M=Dn}=t;this.isWebGLRenderer=!0;let T;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=n.getContextAttributes().alpha}else T=o;let P=M,x=new Set([wl,bl,Sl]),p=new Set([Dn,ai,Ar,Er,yl,Ml]),I=new Uint32Array(4),O=new Int32Array(4),E=new it,L=null,D=null,z=[],w=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,J=!1,Z=null,tt=null,X=null,nt=null;this._outputColorSpace=Cn;let ut=0,ot=0,at=null,et=-1,ht=null,dt=new qe,Vt=new qe,Jt=null,Be=new de(0),ye=0,Re=e.width,mt=e.height,vt=1,Xt=null,ie=null,Bt=new qe(0,0,Re,mt),ue=new qe(0,0,Re,mt),He=!1,me=new Mr,Pe=!1,Ue=!1,ge=new Oe,ke=new it,Ze=new qe,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ie(){return at===null?vt:1}let G=n;function on(S,W){return e.getContext(S,W)}let re,N,y,K,q,k,_t,Et,ct,yt,Lt,jt,Rt,St,$t,Zt,te,H,Dt,xt,Pt,kt,bt;try{let S={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",hn,!1),G===null){let W="webgl2";if(G=on(W,S),G===null)throw on(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(S){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),oe("WebGLRenderer: "+S.message),S}function zt(){re=new $g(G),re.init(),Pt=new Ox(G,re),N=new Vg(G,re,t,Pt),y=new Ux(G,re),N.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),tt=G.createFramebuffer(),X=G.createFramebuffer(),nt=G.createFramebuffer(),K=new t_(G),q=new Mx,k=new Fx(G,re,y,q,N,Pt,K),_t=new Kg(V),Et=new nm(G),kt=new kg(G,Et),ct=new jg(G,Et,K,kt),yt=new n_(G,ct,Et,kt,K),H=new e_(G,N,k),$t=new Gg(q),Lt=new yx(V,_t,re,N,kt,$t),jt=new Vx(V,q),Rt=new bx,St=new Rx(re),te=new Bg(V,_t,y,yt,T,h),Zt=new Nx(V,yt,N),bt=new Gx(G,K,N,y),Dt=new zg(G,re,K),xt=new Qg(G,re,K),K.programs=Lt.programs,V.capabilities=N,V.extensions=re,V.properties=q,V.renderLists=Rt,V.shadowMap=Zt,V.state=y,V.info=K}P!==Dn&&(R=new s_(P,e.width,e.height,c,s,r));let Kt=new tu(V,G);this.xr=Kt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(S){S!==void 0&&(vt=S,this.setSize(Re,mt,!1))},this.getSize=function(S){return S.set(Re,mt)},this.setSize=function(S,W,j=!0){if(Kt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=S,mt=W,e.width=Math.floor(S*vt),e.height=Math.floor(W*vt),j===!0&&(e.style.width=S+"px",e.style.height=W+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,S,W)},this.getDrawingBufferSize=function(S){return S.set(Re*vt,mt*vt).floor()},this.setDrawingBufferSize=function(S,W,j){Re=S,mt=W,vt=j,e.width=Math.floor(S*j),e.height=Math.floor(W*j),this.setViewport(0,0,S,W)},this.setEffects=function(S){if(P===Dn){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let W=0;W<S.length;W++)if(S[W].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(dt)},this.getViewport=function(S){return S.copy(Bt)},this.setViewport=function(S,W,j,$){S.isVector4?Bt.set(S.x,S.y,S.z,S.w):Bt.set(S,W,j,$),y.viewport(dt.copy(Bt).multiplyScalar(vt).round())},this.getScissor=function(S){return S.copy(ue)},this.setScissor=function(S,W,j,$){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,W,j,$),y.scissor(Vt.copy(ue).multiplyScalar(vt).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(S){y.setScissorTest(He=S)},this.setOpaqueSort=function(S){Xt=S},this.setTransparentSort=function(S){ie=S},this.getClearColor=function(S){return S.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(S=!0,W=!0,j=!0){let $=0;if(S){let Q=!1;if(at!==null){let Ft=at.texture.format;Q=x.has(Ft)}if(Q){let Ft=at.texture.type,Ht=p.has(Ft),Ct=te.getClearColor(),Nt=te.getClearAlpha(),Wt=Ct.r,he=Ct.g,fe=Ct.b;Ht?(I[0]=Wt,I[1]=he,I[2]=fe,I[3]=Nt,G.clearBufferuiv(G.COLOR,0,I)):(O[0]=Wt,O[1]=he,O[2]=fe,O[3]=Nt,G.clearBufferiv(G.COLOR,0,O))}else $|=G.COLOR_BUFFER_BIT}W&&($|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),Z=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),te.dispose(),Rt.dispose(),St.dispose(),q.dispose(),_t.dispose(),yt.dispose(),kt.dispose(),bt.dispose(),Lt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Ga),Kt.removeEventListener("sessionend",Fs),Jn.stop()};function Le(S){S.preventDefault(),Uh("WebGLRenderer: Context Lost."),J=!0}function we(){Uh("WebGLRenderer: Context Restored."),J=!1;let S=K.autoReset,W=Zt.enabled,j=Zt.autoUpdate,$=Zt.needsUpdate,Q=Zt.type;zt(),K.autoReset=S,Zt.enabled=W,Zt.autoUpdate=j,Zt.needsUpdate=$,Zt.type=Q}function hn(S){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function zn(S){let W=S.target;W.removeEventListener("dispose",zn),Ds(W)}function Ds(S){uc(S),q.remove(S)}function uc(S){let W=q.get(S).programs;W!==void 0&&(W.forEach(function(j){Lt.releaseProgram(j)}),S.isShaderMaterial&&Lt.releaseShaderCache(S))}this.renderBufferDirect=function(S,W,j,$,Q,Ft){W===null&&(W=mn);let Ht=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ct=en(S,W,j,$,Q);y.setMaterial($,Ht);let Nt=j.index,Wt=1;if($.wireframe===!0){if(Nt=ct.getWireframeAttribute(j),Nt===void 0)return;Wt=2}let he=j.drawRange,fe=j.attributes.position,Yt=he.start*Wt,Me=(he.start+he.count)*Wt;Ft!==null&&(Yt=Math.max(Yt,Ft.start*Wt),Me=Math.min(Me,(Ft.start+Ft.count)*Wt)),Nt!==null?(Yt=Math.max(Yt,0),Me=Math.min(Me,Nt.count)):fe!=null&&(Yt=Math.max(Yt,0),Me=Math.min(Me,fe.count));let Ge=Me-Yt;if(Ge<0||Ge===1/0)return;kt.setup(Q,$,Ct,j,Nt);let ze,xe=Dt;if(Nt!==null&&(ze=Et.get(Nt),xe=xt,xe.setIndex(ze)),Q.isMesh)$.wireframe===!0?(y.setLineWidth($.wireframeLinewidth*Ie()),xe.setMode(G.LINES)):xe.setMode(G.TRIANGLES);else if(Q.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),y.setLineWidth(Ke*Ie()),Q.isLineSegments?xe.setMode(G.LINES):Q.isLineLoop?xe.setMode(G.LINE_LOOP):xe.setMode(G.LINE_STRIP)}else Q.isPoints?xe.setMode(G.POINTS):Q.isSprite&&xe.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(re.get("WEBGL_multi_draw"))xe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Ke=Q._multiDrawStarts,Gt=Q._multiDrawCounts,dn=Q._multiDrawCount,Se=Nt?Et.get(Nt).bytesPerElement:1,bn=q.get($).currentProgram.getUniforms();for(let Vn=0;Vn<dn;Vn++)bn.setValue(G,"_gl_DrawID",Vn),xe.render(Ke[Vn]/Se,Gt[Vn])}else if(Q.isInstancedMesh)xe.renderInstances(Yt,Ge,Q.count);else if(j.isInstancedBufferGeometry){let Ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Gt=Math.min(j.instanceCount,Ke);xe.renderInstances(Yt,Ge,Gt)}else xe.render(Yt,Ge)};function Ns(S,W,j,$){Z!==null&&S.isNodeMaterial&&Z.setObject($,S),Pe===!0&&$t.setState(S,j,!1),S.transparent===!0&&S.side===vi&&S.forceSinglePass===!1?(S.side=pn,S.needsUpdate=!0,Bs(S,W,$),S.side=is,S.needsUpdate=!0,Bs(S,W,$),S.side=vi):Bs(S,W,$)}this.compile=function(S,W,j=null){j===null&&(j=S),Z!==null&&Z.renderStart(S,W,j),D=St.get(j),D.init(W),w.push(D),j.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),S!==j&&S.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights(),Z!==null&&Z.updateLights(D.state.lightsArray),Ue=this.localClippingEnabled,Pe=$t.init(this.clippingPlanes,Ue),Pe===!0&&$t.setGlobalState(this.clippingPlanes,W),Z!==null&&Zt.render(D.state.shadowsArray,j,W);let $=new Set;return S.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ft=Q.material;if(Ft)if(Array.isArray(Ft))for(let Ht=0;Ht<Ft.length;Ht++){let Ct=Ft[Ht];Ns(Ct,j,W,Q),$.add(Ct)}else Ns(Ft,j,W,Q),$.add(Ft)}),D=w.pop(),Z!==null&&Z.renderEnd(),$},this.compileAsync=function(S,W,j=null){let $=this.compile(S,W,j);return new Promise(Q=>{function Ft(){if($.forEach(function(Ht){let Nt=q.get(Ht).currentProgram;(Nt===void 0||Nt.isReady())&&$.delete(Ht)}),$.size===0){Q(S);return}setTimeout(Ft,10)}re.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Dr=null;function Us(S){Dr&&Dr(S)}function Ga(){Jn.stop()}function Fs(){Jn.start()}let Jn=new mf;Jn.setAnimationLoop(Us),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(S){Dr=S,Kt.setAnimationLoop(S),S===null?Jn.stop():Jn.start()},Kt.addEventListener("sessionstart",Ga),Kt.addEventListener("sessionend",Fs),this.render=function(S,W){if(W!==void 0&&W.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;Z!==null&&Z.renderStart(S,W);let j=Kt.enabled===!0&&Kt.isPresenting===!0,$=R!==null&&(at===null||j)&&R.begin(V,at);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(W),W=Kt.getCamera()),S.isScene===!0&&S.onBeforeRender(V,S,W,at),D=St.get(S,w.length),D.init(W),D.state.textureUnits=k.getTextureUnits(),w.push(D),ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),me.setFromProjectionMatrix(ge,si,W.reversedDepth),Ue=this.localClippingEnabled,Pe=$t.init(this.clippingPlanes,Ue),L=Rt.get(S,z.length),L.init(),z.push(L),Kt.enabled===!0&&Kt.isPresenting===!0){let Ht=V.xr.getDepthSensingMesh();Ht!==null&&Zn(Ht,W,-1/0,V.sortObjects)}Zn(S,W,0,V.sortObjects),L.finish(),Z!==null&&Z.updateLights(D.state.lightsArray),V.sortObjects===!0&&L.sort(Xt,ie),We=Kt.enabled===!1||Kt.isPresenting===!1||Kt.hasDepthSensing()===!1,We&&te.addToRenderList(L,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Pe===!0&&$t.beginShadows();let Q=D.state.shadowsArray;if(Zt.render(Q,S,W),Pe===!0&&$t.endShadows(),($&&R.hasRenderPass())===!1){let Ht=L.opaque,Ct=L.transmissive;if(D.setupLights(),W.isArrayCamera){let Nt=W.cameras;if(Ct.length>0)for(let Wt=0,he=Nt.length;Wt<he;Wt++){let fe=Nt[Wt];Nr(Ht,Ct,S,fe)}We&&te.render(S);for(let Wt=0,he=Nt.length;Wt<he;Wt++){let fe=Nt[Wt];Os(L,S,fe,fe.viewport)}}else Ct.length>0&&Nr(Ht,Ct,S,W),We&&te.render(S),Os(L,S,W)}at!==null&&ot===0&&(k.updateMultisampleRenderTarget(at),k.updateRenderTargetMipmap(at)),$&&R.end(V),S.isScene===!0&&S.onAfterRender(V,S,W),kt.resetDefaultState(),et=-1,ht=null,w.pop(),w.length>0?(D=w[w.length-1],k.setTextureUnits(D.state.textureUnits),Pe===!0&&$t.setGlobalState(V.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?L=z[z.length-1]:L=null,Z!==null&&Z.renderEnd()};function Zn(S,W,j,$){if(S.visible===!1)return;if(S.layers.test(W.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(W);else if(S.isLightProbeGrid)D.pushLightProbeGrid(S);else if(S.isLight)D.pushLight(S),S.castShadow&&D.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(me)){$&&Ze.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge);let Ht=yt.update(S),Ct=S.material;Ct.visible&&L.push(S,Ht,Ct,j,Ze.z,null,W)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(me))){let Ht=yt.update(S),Ct=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ze.copy(S.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Ze.copy(Ht.boundingSphere.center)),Ze.applyMatrix4(S.matrixWorld).applyMatrix4(ge)),Array.isArray(Ct)){let Nt=Ht.groups;for(let Wt=0,he=Nt.length;Wt<he;Wt++){let fe=Nt[Wt],Yt=Ct[fe.materialIndex];Yt&&Yt.visible&&L.push(S,Ht,Yt,j,Ze.z,fe,W)}}else Ct.visible&&L.push(S,Ht,Ct,j,Ze.z,null,W)}}let Ft=S.children;for(let Ht=0,Ct=Ft.length;Ht<Ct;Ht++)Zn(Ft[Ht],W,j,$)}function Os(S,W,j,$){let{opaque:Q,transmissive:Ft,transparent:Ht}=S;D.setupLightsView(j),Pe===!0&&$t.setGlobalState(V.clippingPlanes,j),$&&y.viewport(dt.copy($)),Q.length>0&&ls(Q,W,j),Ft.length>0&&ls(Ft,W,j),Ht.length>0&&ls(Ht,W,j),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Nr(S,W,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[$.id]===void 0){let Yt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[$.id]=new Ln(1,1,{generateMipmaps:!0,type:Yt?oi:Dn,minFilter:rs,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}let Ft=D.state.transmissionRenderTarget[$.id],Ht=$.viewport||dt;Ft.setSize(Ht.z*V.transmissionResolutionScale,Ht.w*V.transmissionResolutionScale);let Ct=V.getRenderTarget(),Nt=V.getActiveCubeFace(),Wt=V.getActiveMipmapLevel();V.setRenderTarget(Ft),V.getClearColor(Be),ye=V.getClearAlpha(),ye<1&&V.setClearColor(16777215,.5),V.clear(),We&&te.render(j);let he=V.toneMapping;V.toneMapping=ri;let fe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),D.setupLightsView($),Pe===!0&&$t.setGlobalState(V.clippingPlanes,$),ls(S,j,$),k.updateMultisampleRenderTarget(Ft),k.updateRenderTargetMipmap(Ft),re.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Me=0,Ge=W.length;Me<Ge;Me++){let ze=W[Me],{object:xe,geometry:Ke,material:Gt,group:dn}=ze;if(Gt.side===vi&&xe.layers.test($.layers)){let Se=Gt.side;Gt.side=pn,Gt.needsUpdate=!0,Ha(xe,j,$,Ke,Gt,dn),Gt.side=Se,Gt.needsUpdate=!0,Yt=!0}}Yt===!0&&(k.updateMultisampleRenderTarget(Ft),k.updateRenderTargetMipmap(Ft))}V.setRenderTarget(Ct,Nt,Wt),V.setClearColor(Be,ye),fe!==void 0&&($.viewport=fe),V.toneMapping=he}function ls(S,W,j){let $=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Ft=S.length;Q<Ft;Q++){let Ht=S[Q],{object:Ct,geometry:Nt,group:Wt}=Ht,he=Ht.material;he.allowOverride===!0&&$!==null&&(he=$),Ct.layers.test(j.layers)&&Ha(Ct,W,j,Nt,he,Wt)}}function Ha(S,W,j,$,Q,Ft){Z!==null&&Q.isNodeMaterial&&Z.setObject(S,Q),S.onBeforeRender(V,W,j,$,Q,Ft),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(V,W,j,$,S,Ft),Q.transparent===!0&&Q.side===vi&&Q.forceSinglePass===!1?(Q.side=pn,Q.needsUpdate=!0,V.renderBufferDirect(j,W,$,Q,S,Ft),Q.side=is,Q.needsUpdate=!0,V.renderBufferDirect(j,W,$,Q,S,Ft),Q.side=vi):V.renderBufferDirect(j,W,$,Q,S,Ft),S.onAfterRender(V,W,j,$,Q,Ft)}function Bs(S,W,j){W.isScene!==!0&&(W=mn);let $=q.get(S),Q=D.state.lights,Ft=D.state.shadowsArray,Ht=Q.state.version,Ct=Lt.getParameters(S,Q.state,Ft,W,j,D.state.lightProbeGridArray),Nt=Lt.getProgramCacheKey(Ct),Wt=$.programs;$.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?W.environment:null,$.fog=W.fog;let he=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;$.envMap=_t.get(S.envMap||$.environment,he),$.envMapRotation=$.environment!==null&&S.envMap===null?W.environmentRotation:S.envMapRotation,Wt===void 0&&(S.addEventListener("dispose",zn),Wt=new Map,$.programs=Wt);let fe=Wt.get(Nt);if(fe!==void 0){if($.currentProgram===fe&&$.lightsStateVersion===Ht)return Wa(S,Ct),fe}else Ct.uniforms=Lt.getUniforms(S),Z!==null&&S.isNodeMaterial&&Z.build(S,j,Ct),S.onBeforeCompile(Ct,V),fe=Lt.acquireProgram(Ct,Nt),Wt.set(Nt,fe),$.uniforms=Ct.uniforms;let Yt=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Yt.clippingPlanes=$t.uniform),Wa(S,Ct),$.needsLights=Kn(S),$.lightsStateVersion=Ht,$.needsLights&&(Yt.ambientLightColor.value=Q.state.ambient,Yt.lightProbe.value=Q.state.probe,Yt.sunLights.value=Q.state.sun,Yt.sunLightShadows.value=Q.state.sunShadow,Yt.directionalLights.value=Q.state.directional,Yt.directionalLightShadows.value=Q.state.directionalShadow,Yt.spotLights.value=Q.state.spot,Yt.spotLightShadows.value=Q.state.spotShadow,Yt.rectAreaLights.value=Q.state.rectArea,Yt.ltc_1.value=Q.state.rectAreaLTC1,Yt.ltc_2.value=Q.state.rectAreaLTC2,Yt.pointLights.value=Q.state.point,Yt.pointLightShadows.value=Q.state.pointShadow,Yt.hemisphereLights.value=Q.state.hemi,Yt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Yt.sunShadowCascade.value=Q.state.sunShadowCascade,Yt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Yt.spotLightMatrix.value=Q.state.spotLightMatrix,Yt.spotLightMap.value=Q.state.spotLightMap,Yt.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.lightProbeGrid=D.state.lightProbeGridArray.length>0,$.currentProgram=fe,$.uniformsList=null,fe}function cs(S){if(S.uniformsList===null){let W=S.currentProgram.getUniforms();S.uniformsList=Ir.seqWithValue(W.seq,S.uniforms)}return S.uniformsList}function Wa(S,W){let j=q.get(S);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function ee(S,W){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;E.setFromMatrixPosition(W.matrixWorld);for(let j=0,$=S.length;j<$;j++){let Q=S[j];if(Q.texture!==null&&Q.boundingBox.containsPoint(E))return Q}return null}function en(S,W,j,$,Q){W.isScene!==!0&&(W=mn),k.resetTextureUnits();let Ft=W.fog,Ht=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?W.environment:null,Ct=at===null?V.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:be.workingColorSpace,Nt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Wt=_t.get($.envMap||Ht,Nt),he=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,fe=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Yt=!!j.morphAttributes.position,Me=!!j.morphAttributes.normal,Ge=!!j.morphAttributes.color,ze=ri;$.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ze=V.toneMapping);let xe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ke=xe!==void 0?xe.length:0,Gt=q.get($),dn=D.state.lights;if(Pe===!0&&(Ue===!0||S!==ht)){let Fe=S===ht&&$.id===et;$t.setState($,S,Fe)}let Se=!1;$.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==dn.state.version||Gt.outputColorSpace!==Ct||Q.isBatchedMesh&&Gt.batching===!1||!Q.isBatchedMesh&&Gt.batching===!0||Q.isBatchedMesh&&Gt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Gt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Gt.instancing===!1||!Q.isInstancedMesh&&Gt.instancing===!0||Q.isSkinnedMesh&&Gt.skinning===!1||!Q.isSkinnedMesh&&Gt.skinning===!0||Q.isInstancedMesh&&Gt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Gt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Gt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Gt.instancingMorph===!1&&Q.morphTexture!==null||Gt.envMap!==Wt||$.fog===!0&&Gt.fog!==Ft||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==$t.numPlanes||Gt.numIntersection!==$t.numIntersection)||Gt.vertexAlphas!==he||Gt.vertexTangents!==fe||Gt.morphTargets!==Yt||Gt.morphNormals!==Me||Gt.morphColors!==Ge||Gt.toneMapping!==ze||Gt.morphTargetsCount!==Ke||!!Gt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Gt.__version=$.version);let bn=Gt.currentProgram;Se===!0&&(bn=Bs($,W,Q),Z&&$.isNodeMaterial&&Z.onUpdateProgram($,bn,Gt));let Vn=!1,wn=!1,bi=!1,Ee=bn.getUniforms(),Ye=Gt.uniforms;if(y.useProgram(bn.program)&&(Vn=!0,wn=!0,bi=!0),$.id!==et&&(et=$.id,wn=!0),Gt.needsLights){let Fe=ee(D.state.lightProbeGridArray,Q);Gt.lightProbeGrid!==Fe&&(Gt.lightProbeGrid=Fe,wn=!0)}if(Vn||ht!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ee.setValue(G,"projectionMatrix",S.projectionMatrix),Ee.setValue(G,"viewMatrix",S.matrixWorldInverse);let ci=Ee.map.cameraPosition;ci!==void 0&&ci.setValue(G,ke.setFromMatrixPosition(S.matrixWorld)),N.logarithmicDepthBuffer&&Ee.setValue(G,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ee.setValue(G,"isOrthographic",S.isOrthographicCamera===!0),ht!==S&&(ht=S,wn=!0,bi=!0)}if(Gt.needsLights&&(dn.state.sunShadowMap.length>0&&Ee.setValue(G,"sunShadowMap",dn.state.sunShadowMap,k),dn.state.directionalShadowMap.length>0&&Ee.setValue(G,"directionalShadowMap",dn.state.directionalShadowMap,k),dn.state.spotShadowMap.length>0&&Ee.setValue(G,"spotShadowMap",dn.state.spotShadowMap,k),dn.state.pointShadowMap.length>0&&Ee.setValue(G,"pointShadowMap",dn.state.pointShadowMap,k)),Q.isSkinnedMesh){Ee.setOptional(G,Q,"bindMatrix"),Ee.setOptional(G,Q,"bindMatrixInverse");let Fe=Q.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Ee.setValue(G,"boneTexture",Fe.boneTexture,k))}Q.isBatchedMesh&&(Ee.setOptional(G,Q,"batchingTexture"),Ee.setValue(G,"batchingTexture",Q._matricesTexture,k),Ee.setOptional(G,Q,"batchingIdTexture"),Ee.setValue(G,"batchingIdTexture",Q._indirectTexture,k),Ee.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ee.setValue(G,"batchingColorTexture",Q._colorsTexture,k));let li=j.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&H.update(Q,j,bn),(wn||Gt.receiveShadow!==Q.receiveShadow)&&(Gt.receiveShadow=Q.receiveShadow,Ee.setValue(G,"receiveShadow",Q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&W.environment!==null&&(Ye.envMapIntensity.value=W.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=Wx()),wn){if(Ee.setValue(G,"toneMappingExposure",V.toneMappingExposure),Gt.needsLights&&Xa(Ye,bi),Ft&&$.fog===!0&&jt.refreshFogUniforms(Ye,Ft),jt.refreshMaterialUniforms(Ye,$,vt,mt,D.state.transmissionRenderTarget[S.id]),Gt.needsLights&&Gt.lightProbeGrid){let Fe=Gt.lightProbeGrid;Ye.probesSH.value=Fe.texture,Ye.probesMin.value.copy(Fe.boundingBox.min),Ye.probesMax.value.copy(Fe.boundingBox.max),Ye.probesResolution.value.copy(Fe.resolution)}Ir.upload(G,cs(Gt),Ye,k)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ir.upload(G,cs(Gt),Ye,k),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ee.setValue(G,"center",Q.center),Ee.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Ee.setValue(G,"normalMatrix",Q.normalMatrix),Ee.setValue(G,"modelMatrix",Q.matrixWorld),$.uniformsGroups!==void 0){let Fe=$.uniformsGroups;for(let ci=0,Ni=Fe.length;ci<Ni;ci++){let qa=Fe[ci];bt.update(qa,bn),bt.bind(qa,bn)}}return bn}function Xa(S,W){S.ambientLightColor.needsUpdate=W,S.lightProbe.needsUpdate=W,S.sunLights.needsUpdate=W,S.sunLightShadows.needsUpdate=W,S.directionalLights.needsUpdate=W,S.directionalLightShadows.needsUpdate=W,S.pointLights.needsUpdate=W,S.pointLightShadows.needsUpdate=W,S.spotLights.needsUpdate=W,S.spotLightShadows.needsUpdate=W,S.rectAreaLights.needsUpdate=W,S.hemisphereLights.needsUpdate=W}function Kn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return ot},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(S,W,j){let $=q.get(S);$.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),q.get(S.texture).__webglTexture=W,q.get(S.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,W){let j=q.get(S);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(S,W=0,j=0){at=S,ut=W,ot=j;let $=null,Q=!1,Ft=!1;if(S){let Ct=q.get(S);if(Ct.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(G.FRAMEBUFFER,Ct.__webglFramebuffer),dt.copy(S.viewport),Vt.copy(S.scissor),Jt=S.scissorTest,y.viewport(dt),y.scissor(Vt),y.setScissorTest(Jt),et=-1;return}else if(Ct.__webglFramebuffer===void 0)k.setupRenderTarget(S);else if(Ct.__hasExternalTextures)k.rebindTextures(S,q.get(S.texture).__webglTexture,q.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let he=S.depthTexture;if(Ct.__boundDepthTexture!==he){if(he!==null&&q.has(he)&&(S.width!==he.image.width||S.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(S)}}let Nt=S.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Ft=!0);let Wt=q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Wt[W])?$=Wt[W][j]:$=Wt[W],Q=!0):S.samples>0&&k.useMultisampledRTT(S)===!1?$=q.get(S).__webglMultisampledFramebuffer:Array.isArray(Wt)?$=Wt[j]:$=Wt,dt.copy(S.viewport),Vt.copy(S.scissor),Jt=S.scissorTest}else dt.copy(Bt).multiplyScalar(vt).floor(),Vt.copy(ue).multiplyScalar(vt).floor(),Jt=He;if(j!==0&&($=tt),y.bindFramebuffer(G.FRAMEBUFFER,$)&&y.drawBuffers(S,$),y.viewport(dt),y.scissor(Vt),y.setScissorTest(Jt),Q){let Ct=q.get(S.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ct.__webglTexture,j)}else if(Ft){let Ct=W;for(let Nt=0;Nt<S.textures.length;Nt++){let Wt=q.get(S.textures[Nt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Nt,Wt.__webglTexture,j,Ct)}}else if(S!==null&&j!==0){let Ct=q.get(S.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ct.__webglTexture,j)}et=-1};function un(S){let W=q.get(S);return(W.__readFormat!==S.format||W.__readType!==S.type)&&(W.__readFormat=S.format,W.__readType=S.type,W.__formatReadable=N.textureFormatReadable(S.format),W.__typeReadable=N.textureTypeReadable(S.type)),W}this.readRenderTargetPixels=function(S,W,j,$,Q,Ft,Ht,Ct=0){if(!(S&&S.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ht!==void 0&&(Nt=Nt[Ht]),Nt){y.bindFramebuffer(G.FRAMEBUFFER,Nt);try{let Wt=S.textures[Ct],he=Wt.format,fe=Wt.type;S.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ct);let Yt=un(Wt);if(Yt.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=S.width-$&&j>=0&&j<=S.height-Q&&G.readPixels(W,j,$,Q,Pt.convert(he),Pt.convert(fe),Ft)}finally{let Wt=at!==null?q.get(at).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(S,W,j,$,Q,Ft,Ht,Ct=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ht!==void 0&&(Nt=Nt[Ht]),Nt)if(W>=0&&W<=S.width-$&&j>=0&&j<=S.height-Q){y.bindFramebuffer(G.FRAMEBUFFER,Nt);let Wt=S.textures[Ct],he=Wt.format,fe=Wt.type;S.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ct);let Yt=un(Wt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Me),G.bufferData(G.PIXEL_PACK_BUFFER,Ft.byteLength,G.STREAM_READ),G.readPixels(W,j,$,Q,Pt.convert(he),Pt.convert(fe),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Ge=at!==null?q.get(at).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,Ge);let ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Vd(G,ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Me),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ft),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Me),G.deleteSync(ze),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,W=null,j=0){let $=Math.pow(2,-j),Q=Math.floor(S.image.width*$),Ft=Math.floor(S.image.height*$),Ht=W!==null?W.x:0,Ct=W!==null?W.y:0;k.setTexture2D(S,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,Ht,Ct,Q,Ft),y.unbindTexture()},this.copyTextureToTexture=function(S,W,j=null,$=null,Q=0,Ft=0){let Ht,Ct,Nt,Wt,he,fe,Yt,Me,Ge,ze=S.isCompressedTexture?S.mipmaps[Ft]:S.image;if(j!==null)Ht=j.max.x-j.min.x,Ct=j.max.y-j.min.y,Nt=j.isBox3?j.max.z-j.min.z:1,Wt=j.min.x,he=j.min.y,fe=j.isBox3?j.min.z:0;else{let Ye=Math.pow(2,-Q);Ht=Math.floor(ze.width*Ye),Ct=Math.floor(ze.height*Ye),S.isDataArrayTexture?Nt=ze.depth:S.isData3DTexture?Nt=Math.floor(ze.depth*Ye):Nt=1,Wt=0,he=0,fe=0}$!==null?(Yt=$.x,Me=$.y,Ge=$.z):(Yt=0,Me=0,Ge=0);let xe=Pt.convert(W.format),Ke=Pt.convert(W.type),Gt;W.isData3DTexture?(k.setTexture3D(W,0),Gt=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(k.setTexture2DArray(W,0),Gt=G.TEXTURE_2D_ARRAY):(k.setTexture2D(W,0),Gt=G.TEXTURE_2D),y.activeTexture(G.TEXTURE0),y.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),y.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),y.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);let dn=y.getParameter(G.UNPACK_ROW_LENGTH),Se=y.getParameter(G.UNPACK_IMAGE_HEIGHT),bn=y.getParameter(G.UNPACK_SKIP_PIXELS),Vn=y.getParameter(G.UNPACK_SKIP_ROWS),wn=y.getParameter(G.UNPACK_SKIP_IMAGES);y.pixelStorei(G.UNPACK_ROW_LENGTH,ze.width),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ze.height),y.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),y.pixelStorei(G.UNPACK_SKIP_ROWS,he),y.pixelStorei(G.UNPACK_SKIP_IMAGES,fe);let bi=S.isDataArrayTexture||S.isData3DTexture,Ee=W.isDataArrayTexture||W.isData3DTexture;if(S.isDepthTexture){let Ye=q.get(S),li=q.get(W),Fe=q.get(Ye.__renderTarget),ci=q.get(li.__renderTarget);y.bindFramebuffer(G.READ_FRAMEBUFFER,Fe.__webglFramebuffer),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Ni=0;Ni<Nt;Ni++)bi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(S).__webglTexture,Q,fe+Ni),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(W).__webglTexture,Ft,Ge+Ni)),G.blitFramebuffer(Wt,he,Ht,Ct,Yt,Me,Ht,Ct,G.DEPTH_BUFFER_BIT,G.NEAREST);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||S.isRenderTargetTexture||q.has(S)){let Ye=q.get(S),li=q.get(W);y.bindFramebuffer(G.READ_FRAMEBUFFER,X),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,nt);for(let Fe=0;Fe<Nt;Fe++)bi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ye.__webglTexture,Q,fe+Fe):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ye.__webglTexture,Q),Ee?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,li.__webglTexture,Ft,Ge+Fe):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,li.__webglTexture,Ft),Q!==0?G.blitFramebuffer(Wt,he,Ht,Ct,Yt,Me,Ht,Ct,G.COLOR_BUFFER_BIT,G.NEAREST):Ee?G.copyTexSubImage3D(Gt,Ft,Yt,Me,Ge+Fe,Wt,he,Ht,Ct):G.copyTexSubImage2D(Gt,Ft,Yt,Me,Wt,he,Ht,Ct);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ee?S.isDataTexture||S.isData3DTexture?G.texSubImage3D(Gt,Ft,Yt,Me,Ge,Ht,Ct,Nt,xe,Ke,ze.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Gt,Ft,Yt,Me,Ge,Ht,Ct,Nt,xe,ze.data):G.texSubImage3D(Gt,Ft,Yt,Me,Ge,Ht,Ct,Nt,xe,Ke,ze):S.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ft,Yt,Me,Ht,Ct,xe,Ke,ze.data):S.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ft,Yt,Me,ze.width,ze.height,xe,ze.data):G.texSubImage2D(G.TEXTURE_2D,Ft,Yt,Me,Ht,Ct,xe,Ke,ze);y.pixelStorei(G.UNPACK_ROW_LENGTH,dn),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Se),y.pixelStorei(G.UNPACK_SKIP_PIXELS,bn),y.pixelStorei(G.UNPACK_SKIP_ROWS,Vn),y.pixelStorei(G.UNPACK_SKIP_IMAGES,wn),Ft===0&&W.generateMipmaps&&G.generateMipmap(Gt),y.unbindTexture()},this.initRenderTarget=function(S){q.get(S).__webglFramebuffer===void 0&&k.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?k.setTextureCube(S,0):S.isData3DTexture?k.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?k.setTexture2DArray(S,0):k.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){ut=0,ot=0,at=null,y.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};function Sf(i){let t,e="context";try{let R=i.getContext("webgl2",{antialias:!0,alpha:!1});if(!R)return console.warn("[Star Rush WebGL] webgl2 context unavailable; returning null for fallback handling"),null;e="renderer",t=new lc({canvas:i,context:R,antialias:!0,alpha:!1,powerPreference:"default"})}catch(R){return console.warn("[Star Rush WebGL] "+e+" initialization failed; returning null for fallback handling:",R?.message||String(R)),null}t.outputColorSpace=Cn,t.toneMapping=Ra,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=ml,t.setPixelRatio(Math.min(devicePixelRatio||1,1.5));let n=new da;n.fog=new ua("#cbddec",125,460);let s=new vn(62,1,.12,850),r=new Ta("#e7f4ff","#a08ba5",2.2),o=new Ea("#fff0de",2.4);o.position.set(-30,60,25),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-55,right:55,top:45,bottom:-45,near:1,far:160}),o.shadow.bias=-4e-4,n.add(r,o,o.target);let c=new Cs(new Uint8Array([95,145,195,245]),4,1,Cr);c.minFilter=je,c.magFilter=je,c.needsUpdate=!0;let h=new Map,u=new Oe,g=new Map,v=new Map,f=new Mn(new Ma(650,16,8),new Rn({side:pn,depthWrite:!1,uniforms:{top:{value:new de("#8fbee6")},bottom:{value:new de("#f0e8f0")}},vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vDirection;uniform vec3 top,bottom;void main(){float h=smoothstep(-.05,.8,normalize(vDirection).y);gl_FragColor=vec4(mix(bottom,top,h),1.0);}"}));f.renderOrder=-100,n.add(f);let M=1,T=0,P=0,x=0,p=0,I=16.7,O=0,E=0,L=2,D=["low","medium","high"];function z(R,V){R.renderId||(R.renderId=M++);let J=R.renderId+":"+(R.paintable&&V?V:"");if(v.has(J))return v.get(J);let Z=R.sourceData,tt=[],X=[],nt=[],ut=V?new de(V):null;for(let at=0;at<Z.length;at+=10){tt.push(Z[at],Z[at+1],Z[at+2]),X.push(Z[at+3],Z[at+4],Z[at+5]);let et=Z[at+6],ht=Z[at+7],dt=Z[at+8],Vt=R.paintable&&ut&&ht-et>.14&&dt-et>.2;nt.push(Vt?ut.r:et,Vt?ut.g:ht,Vt?ut.b:dt)}let ot=new Bn;return ot.setAttribute("position",new sn(tt,3)),ot.setAttribute("normal",new sn(X,3)),ot.setAttribute("color",new sn(nt,3)),ot.setIndex(Array.from(R.sourceIndices)),ot.computeBoundingSphere(),v.set(J,ot),R.onDispose=()=>{for(let[at,et]of v)if(at.startsWith(R.renderId+":")){for(let[ht,dt]of h)dt.geometry===et&&(n.remove(dt),dt.dispose(),h.delete(ht));et.dispose(),v.delete(at)}},ot}function w(R,V,J,Z,tt,X={}){let nt=performance.now();if(p){let et=nt-p;et<100&&(I+=(et-I)*.035)}p=nt,X.quality==="auto"&&(I>23?(O++,E=0):I<16.9?(E++,O=0):(O=0,E=0),O>90&&L>0&&(L--,O=0),E>360&&L<2&&(L++,E=0));let ut=X.quality==="auto"?D[L]:X.quality,ot=ut==="low"?1:ut==="medium"?1.2:Math.min(devicePixelRatio||1,1.5);ot!==x&&(t.setPixelRatio(ot),x=ot),(J!==T||Z!==P)&&(t.setSize(J,Z,!1),T=J,P=Z),s.aspect=J/Z,s.fov=tt,s.updateProjectionMatrix(),s.position.fromArray(V.eye),s.lookAt(new it(...V.target)),f.position.copy(s.position);let at=new Map;for(let et of R){if(!et.mesh.sourceIndices.length)continue;let ht=z(et.mesh,et.tint),dt=et.opacity??1,Vt=ht.uuid+":"+et.shadow+":"+dt,Jt=at.get(Vt);Jt||(Jt={geometry:ht,shadow:et.shadow,opacity:dt,items:[]},at.set(Vt,Jt)),Jt.items.push(et)}for(let et of h.values())et.visible=!1;for(let[et,ht]of at){let dt=h.get(et);if(!dt||dt.instanceMatrix.count<ht.items.length){dt&&(n.remove(dt),dt.dispose());let Vt=g.get(ht.opacity);Vt||(Vt=new Sa({vertexColors:!0,gradientMap:c,transparent:ht.opacity<1,opacity:ht.opacity,depthWrite:ht.opacity>=1}),g.set(ht.opacity,Vt)),dt=new _a(ht.geometry,Vt,Math.max(4,ht.items.length+8)),dt.instanceMatrix.setUsage(Dh),dt.frustumCulled=!0,dt.receiveShadow=ht.opacity>=1,n.add(dt),h.set(et,dt)}dt.count=ht.items.length,dt.castShadow=ht.shadow&&ut!=="low",dt.visible=!0;for(let Vt=0;Vt<ht.items.length;Vt++)u.fromArray(ht.items[Vt].m),dt.setMatrixAt(Vt,u);dt.instanceMatrix.needsUpdate=!0,dt.computeBoundingSphere()}return t.shadowMap.enabled=ut!=="low",t.render(n,s),{drawCalls:t.info.render.calls,triangles:t.info.render.triangles,effectiveQuality:ut}}return{render:w,renderer:t,scene:n}}function bf(i,t=Sf){let e=t(i);if(e)return{canvas:i,threeBackend:e,software:!1,softwareContext:null};let n=r=>{try{return r.getContext("2d")}catch{return null}},s=n(i);if(!s){let r=i.cloneNode(!1);if(s=n(r),!s)throw new Error("\u65E0\u6CD5\u521D\u59CB\u5316 WebGL \u6216 Canvas \u663E\u793A\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6216\u66F4\u6362\u652F\u6301\u7684\u6D4F\u89C8\u5668\u3002");i.replaceWith(r),i=r}return{canvas:i,threeBackend:null,software:!0,softwareContext:s}}function wf(i,t){for(let e of i.querySelectorAll("#trackPicker [data-track]")){let n=t[e.dataset.track];if(!n||e.querySelector(".course-art"))continue;let s=i.createElement("img");s.className="course-art",s.alt="",s.setAttribute("aria-hidden","true"),s.draggable=!1,s.decoding="async",s.hidden=!0,s.width=512,s.height=256,s.onload=()=>{s.hidden=!1,e.dataset.art="ready"},s.onerror=()=>{s.remove(),delete e.dataset.art},e.prepend(s),s.src=n}}(()=>{"use strict";let i=document.getElementById("scene"),t=document.getElementById("error"),e=document.getElementById("loading");function n(o){t.hidden=!1,document.getElementById("error-text").textContent=o,e.classList.add("done")}let s={light:"/assets/impact-audio/rail-light-v2.e9daa5ac2bd3.wav",medium:"/assets/impact-audio/rail-medium-v2.9e322b68b6d0.wav"},r=!1;try{let g=function(a,l,d){let m=[];if(d){let b=(a%l+l)%l;for(let A=0;A<l;A+=40){let C=A-b;C-=Math.round(C/l)*l,C>=-40&&C<210&&m.push({s:A,ds:C})}}else for(let b=Math.ceil((a-40)/40)*40;b<a+210;b+=40)m.push({s:b,ds:b-a});return m},f=function(a,l,d,m,b,A){let C=[];for(let F of a){if(!l.includes(F.mesh))continue;let B=d(et(F.m,[0,2.28,0]));!B||B[2]>150||B[0]<-B[3]*3||B[0]>m+B[3]*3||B[1]<-B[3]*3||B[1]>b+B[3]*3||C.push({item:F,q:B})}return C.sort((F,B)=>F.q[2]-B.q[2]).slice(0,6).map(({item:F,q:B})=>{let Y=F.mesh,rt=Y.sourceData,gt=Y.sourceIndices,ft=[],Mt=L(O(A,et(F.m,[0,2.28,0])),[F.m[8],F.m[9],F.m[10]])>=0,Tt=gt.length-6*Ze.i.length;for(let pt=0;pt<rt.length;pt+=10)ft.push(d(et(F.m,[rt[pt],rt[pt+1],rt[pt+2]])));let It=v.get(Y);if(!It){It=[];for(let pt=0;pt<gt.length;pt+=3){let lt=gt[pt]*10+6;It.push("rgb("+[0,1,2].map(At=>Math.round(Math.pow(rt[lt+At],1/2.2)*255)).join(",")+")")}v.set(Y,It)}let ce=[];for(let pt=0;pt<gt.length;pt+=3){let lt=[ft[gt[pt]],ft[gt[pt+1]],ft[gt[pt+2]]];if(lt.some(Ut=>!Ut))continue;let At=pt<Ze.i.length?0:pt>=Tt?Mt?2:1:Mt?1:2;ce.push({p:lt,color:It[pt/3],layer:At,depth:(lt[0][2]+lt[1][2]+lt[2][2])/3})}return ce.sort((pt,lt)=>pt.layer-lt.layer||lt.depth-pt.depth),{kind:"sign",q:B,triangles:ce}})},M=function(a,l){for(let{p:d,color:m}of l.triangles)a.fillStyle=m,a.beginPath(),a.moveTo(d[0][0],d[0][1]),a.lineTo(d[1][0],d[1][1]),a.lineTo(d[2][0],d[2][1]),a.closePath(),a.fill()},T=function(a){let l=u,d=i.width,m=i.height;l.setTransform(1,0,0,1,0,0);let b=l.createLinearGradient(0,0,0,m);b.addColorStop(0,"#96c8ee"),b.addColorStop(.62,"#f2e6ee"),b.addColorStop(.63,"#cbd8c1"),b.addColorStop(1,"#bdcdb8"),l.fillStyle=b,l.fillRect(0,0,d,m);let A=a.eye,C=a.target,F=w(O(C,A)),B=w(D(F,[0,1,0])),Y=D(B,F),rt=m/(2*Math.tan(Vs*Math.PI/360)),gt=pt=>{let lt=O(pt,A),At=L(lt,F);return At<.25?null:[d/2+L(lt,B)*rt/At,m/2-L(lt,Y)*rt/At,At,rt/At]},ft=(pt,lt)=>{let At=pt.map(gt);At.some(Ut=>!Ut)||(l.fillStyle=lt,l.beginPath(),At.forEach((Ut,qt)=>qt?l.lineTo(Ut[0],Ut[1]):l.moveTo(Ut[0],Ut[1])),l.closePath(),l.fill())},Mt=pt=>O(pt,a.origin),Tt=[];for(let pt=-40;pt<240;pt+=5){let lt=_.s+pt,At=ve(lt),Ut=ve(lt+5);Tt.push({d:pt,a:At,b:Ut})}for(let pt of Tt.reverse()){let lt=(At,Ut,qt)=>Mt(I(I(At.p,E(At.R,Ut)),[0,qt,0]));if(ft([lt(pt.a,-10,0),lt(pt.a,10,0),lt(pt.b,10,0),lt(pt.b,-10,0)],"#e3dce5"),ft([lt(pt.a,-7,.05),lt(pt.a,7,.05),lt(pt.b,7,.05),lt(pt.b,-7,.05)],"#7b829a"),Math.floor(pt.d/5)%2===0)for(let At of[-2.3,2.3])ft([lt(pt.a,At-.04,.06),lt(pt.a,At+.04,.06),lt(pt.b,At+.04,.06),lt(pt.b,At-.04,.06)],"#e9edf1");for(let At of[-1,1])ft([lt(pt.a,At*8.1,.4),lt(pt.a,At*8.1,.8),lt(pt.b,At*8.1,.8),lt(pt.b,At*8.1,.4)],"#c0cfe2")}let It=typeof Vr<"u"&&typeof wn<"u"?f(Vr,[wn.get("left"),wn.get("right")],gt,d,m,A):[];if(typeof r<"u"&&r){let pt=[...It];for(let lt=0;lt<210;lt+=20)for(let At of[-1,1]){let Ut=De(Math.floor((_.s+lt)/20)*20,At*12,0),qt=gt(Mt(Ut));qt&&pt.push({q:qt,side:At,ds:lt,pos:Ut,kind:"tree"})}for(let lt of g(_.s,S,ee==="circuit"))for(let At of[-1,1]){let Ut=gt(Mt(De(lt.s,At*20,0)));Ut&&pt.push({q:Ut,kind:"house"})}for(let lt of pt.sort((At,Ut)=>Ut.q[2]-At.q[2])){if(lt.kind==="sign"){M(l,lt);continue}let[At,Ut,,qt]=lt.q;if(lt.kind==="tree"){l.fillStyle="#a78a95",l.fillRect(At-qt*.12,Ut-qt*3.5,qt*.24,qt*3.5);for(let wt=0;wt<4;wt++)l.fillStyle=wt%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(At+Math.sin(wt*2)*qt,Ut-qt*(3.3+wt*.3),qt*1.6,qt*1.1,0,0,x),l.fill()}else{let wt=lt.q;l.fillStyle="#f3e9dc",l.fillRect(wt[0]-wt[3]*3,wt[1]-wt[3]*5,wt[3]*6,wt[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(wt[0]-wt[3]*3.5,wt[1]-wt[3]*5),l.lineTo(wt[0],wt[1]-wt[3]*6.3),l.lineTo(wt[0]+wt[3]*3.5,wt[1]-wt[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let Je=0;Je<3;Je++)l.fillRect(wt[0]+(Je-1.2)*wt[3]*1.5,wt[1]-wt[3]*3.9,wt[3],wt[3]*1.2)}}}else{let pt=[...It];for(let lt=0;lt<210;lt+=20)for(let At of[-1,1]){let Ut=De(Math.floor((_.s+lt)/20)*20,At*12,0),qt=gt(Mt(Ut));qt&&pt.push({q:qt,side:At,ds:lt,pos:Ut})}for(let lt of pt.sort((At,Ut)=>Ut.q[2]-At.q[2])){if(lt.kind==="sign"){M(l,lt);continue}let[At,Ut,,qt]=lt.q;l.fillStyle="#a78a95",l.fillRect(At-qt*.12,Ut-qt*3.5,qt*.24,qt*3.5);for(let wt=0;wt<4;wt++)l.fillStyle=wt%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(At+Math.sin(wt*2)*qt,Ut-qt*(3.3+wt*.3),qt*1.6,qt*1.1,0,0,x),l.fill();if(lt.ds%40===0){let wt=gt(Mt(De(_.s+lt.ds,lt.side*20,0)));if(wt){l.fillStyle="#f3e9dc",l.fillRect(wt[0]-wt[3]*3,wt[1]-wt[3]*5,wt[3]*6,wt[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(wt[0]-wt[3]*3.5,wt[1]-wt[3]*5),l.lineTo(wt[0],wt[1]-wt[3]*6.3),l.lineTo(wt[0]+wt[3]*3.5,wt[1]-wt[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let Je=0;Je<3;Je++)l.fillRect(wt[0]+(Je-1.2)*wt[3]*1.5,wt[1]-wt[3]*3.9,wt[3],wt[3]*1.2)}}}}for(let pt of ds)if(pt.life>0){let lt=gt(Mt(pt.p));lt&&(l.fillStyle="#414957",l.fillRect(lt[0],lt[1],Math.max(1,lt[3]*.12),Math.max(2,lt[3]*pt.length)))}for(let pt of ln.values())for(let lt of pt.entities){if(Math.abs(Ct(lt.s,_.s))>170)continue;let At=gt(Mt(De(lt.s+(lt.ds||0),lt.l+(lt.dl||0),.2)));if(!At||lt.kind==="coin"&&lt.hitLap===Math.max(0,Math.floor(_.s/S)))continue;let[Ut,qt,,wt]=At;if(lt.kind==="coin")l.fillStyle="#ffe2a0",l.beginPath(),l.ellipse(Ut,qt-wt*.8,wt*.25,wt*.38,0,0,x),l.fill();else if(lt.kind==="pad"){let Je=ve(lt.s),Ve=(En,$e)=>Mt(De(lt.s+En,lt.l+$e,.07));ft([Ve(-1.2,-1.5),Ve(1.2,-1.5),Ve(1.2,1.5),Ve(-1.2,1.5)],"#92e3e5")}else if(lt.kind==="ramp"){let Je=(Ve,En,$e)=>Mt(De(lt.s+Ve,lt.l+En,$e));ft([Je(-1.4,-1.5,.08),Je(1.4,-1.5,.85),Je(1.4,1.5,.85),Je(-1.4,1.5,.08)],"#bfa9e3")}else lt.kind==="cone"?(l.fillStyle="#eebd92",l.beginPath(),l.moveTo(Ut,qt-wt*.8),l.lineTo(Ut-wt*.35,qt),l.lineTo(Ut+wt*.35,qt),l.fill()):lt.kind==="barrier"&&(l.fillStyle="#edacbb",l.fillRect(Ut-wt,qt-wt*.7,wt*2,wt*.7))}let ce=(pt,lt,At,Ut,qt,wt=1)=>{let Je=ve(pt),Ve=De(pt,lt,.05+Ut),En=gt(Mt(Ve));if(!En)return;l.globalAlpha=wt;let $e=(Qs,tr,Hi)=>Mt(I(Ve,I(E(Je.T,Qs*Math.cos(At)-Hi*Math.sin(At)),I(E(Je.R,Qs*Math.sin(At)+Hi*Math.cos(At)),[0,tr,0]))));ft([$e(-1.6,.3,-.8),$e(1.6,.3,-.8),$e(1.6,.7,.8),$e(-1.6,.7,.8)],qt),ft([$e(-1.6,.65,-.8),$e(1.6,.65,-.8),$e(1.6,.65,.8),$e(-1.6,.65,.8)],"#eef1f7");for(let Qs of[-1,1])for(let tr of[-.87,.87]){let Hi=gt($e(Qs,.35,tr));Hi&&(l.fillStyle="#3c4357",l.beginPath(),l.ellipse(Hi[0],Hi[1],En[3]*.24,En[3]*.34,0,0,x),l.fill())}let Ms=gt($e(-.3,1.6,0));Ms&&(l.fillStyle="#f3d2be",l.beginPath(),l.arc(Ms[0],Ms[1],En[3]*.33,0,x),l.fill(),l.fillStyle="#a9abe4",l.beginPath(),l.ellipse(Ms[0],Ms[1]-En[3]*.18,En[3]*.36,En[3]*.2,0,Math.PI,x),l.fill()),l.globalAlpha=1};if(nn.line&&ne==="running")for(let pt=8;pt>=0;pt--){let lt=_.s+12+pt*9,At=ve(lt),Ut=R(At.curv*80,-2.1,2.1),qt=(wt,Je)=>Mt(De(lt+wt,Ut+Je,.09));ft([qt(-.6,-.4),qt(.3,0),qt(-.6,.4),qt(-.2,0)],Math.abs(At.curv)*_.speed>.95?"#f0b7c3":"#a5dbe6")}if(Gi&&ne==="running"&&ce(Gi.s,Gi.l,Gi.yaw,Gi.jump,"#b8e9e6",.35),typeof Wn<"u")for(let pt of Wn)ce(pt.s,pt.l,pt.yaw||0,0,pt.color);if(typeof st<"u"&&st.room)for(let pt of st.peers.values())pt.position&&ce(pt.position.s,pt.position.l,pt.position.yaw,pt.position.jump,"#eab5ce");if(_.mini>0||_.nitroTime>0||_.pad>0){let pt=ve(_.s),lt=gt(Mt(De(_.s-2,_.l,.4+_.jump)));lt&&(l.fillStyle=_.nitroTime>0?"#bcb2ff99":"#95edff99",l.beginPath(),l.ellipse(lt[0],lt[1],lt[3]*.7,lt[3]*.45,0,0,x),l.fill())}ce(_.s,_.l,_.yaw,_.jump,typeof Qe<"u"?Qe.paint:"#8ccde4")},Z=function(a,l){let d=new Float32Array(16);for(let m=0;m<4;m++)for(let b=0;b<4;b++)d[m*4+b]=a[b]*l[m*4]+a[4+b]*l[m*4+1]+a[8+b]*l[m*4+2]+a[12+b]*l[m*4+3];return d},tt=function(a,l,d){let m=J();return m[12]=a,m[13]=l,m[14]=d,m},X=function(a,l,d){let m=J();return m[0]=a,m[5]=l,m[10]=d,m},nt=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([1,0,0,0,0,l,d,0,0,-d,l,0,0,0,0,1])},ut=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,0,-d,0,0,1,0,0,d,0,l,0,0,0,0,1])},ot=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,d,0,0,-d,l,0,0,0,0,1,0,0,0,0,1])},at=function(a=[0,0,0],l=[1,1,1],d=[0,0,0]){return Z(tt(...a),Z(ut(d[1]),Z(nt(d[0]),Z(ot(d[2]),X(...l)))))},et=function(a,l){return[a[0]*l[0]+a[4]*l[1]+a[8]*l[2]+a[12],a[1]*l[0]+a[5]*l[1]+a[9]*l[2]+a[13],a[2]*l[0]+a[6]*l[1]+a[10]*l[2]+a[14]]},ht=function(a){let l=[a[0],a[1],a[2]],d=[a[4],a[5],a[6]],m=[a[8],a[9],a[10]],b=D(d,m),A=D(m,l),C=D(l,d),F=L(l,b)||1;return new Float32Array([...E(b,1/F),...E(A,1/F),...E(C,1/F)])},dt=function(a,l){return w([a[0]*l[0]+a[3]*l[1]+a[6]*l[2],a[1]*l[0]+a[4]*l[1]+a[7]*l[2],a[2]*l[0]+a[5]*l[1]+a[8]*l[2]])},Vt=function(a,l,d=[0,1,0]){let m=w(O(a,l)),b=w(D(d,m)),A=D(m,b);return new Float32Array([b[0],A[0],m[0],0,b[1],A[1],m[1],0,b[2],A[2],m[2],0,-L(b,a),-L(A,a),-L(m,a),1])},Jt=function(a,l,d,m){let b=1/Math.tan(a/2),A=1/(d-m);return new Float32Array([b/l,0,0,0,0,b,0,0,0,0,(m+d)*A,-1,0,0,2*m*d*A,0])},Be=function(a,l,d,m,b,A){return new Float32Array([2/(l-a),0,0,0,0,2/(m-d),0,0,0,0,-2/(A-b),0,-(l+a)/(l-a),-(m+d)/(m-d),-(A+b)/(A-b),1])},ye=function(a,l,d,m=d){let b=O(l,a),A=w(b),C=w(D(Math.abs(A[2])<.95?[0,0,1]:[1,0,0],A)),F=D(C,A),B=E(I(a,l),.5),Y=z(b);return new Float32Array([C[0]*d,C[1]*d,C[2]*d,0,A[0]*Y,A[1]*Y,A[2]*Y,0,F[0]*m,F[1]*m,F[2]*m,0,...B,1])},Re=function(a){let l=parseInt(a.replace("#",""),16);return[l>>16&255,l>>8&255,l&255].map(d=>Math.pow(d/255,2.2))},vt=function(a,l,d){return{p:a,n:l,i:d}},Xt=function(a=20,l=12){let d=[],m=[],b=[];for(let A=0;A<=l;A++){let C=A*P/l;for(let F=0;F<=a;F++){let B=F*x/a,Y=[Math.sin(C)*Math.cos(B),Math.cos(C),Math.sin(C)*Math.sin(B)];d.push(...Y),m.push(...Y)}}for(let A=0;A<l;A++)for(let C=0;C<a;C++){let F=A*(a+1)+C,B=F+a+1;b.push(F,F+1,B,F+1,B+1,B)}return vt(d,m,b)},ie=function(a=16,l=1){let d=[],m=[],b=[];for(let A=0;A<2;A++)for(let C=0;C<=a;C++){let F=C*x/a,B=A?l:1,Y=w([Math.cos(F),1-l,Math.sin(F)]);d.push(B*Math.cos(F),A-.5,B*Math.sin(F)),m.push(...Y)}for(let A=0;A<a;A++){let C=A,F=A+a+1;b.push(C,F,C+1,C+1,F,F+1)}for(let A=0;A<2;A++){let C=d.length/3,F=A-.5,B=A?l:1;d.push(0,F,0),m.push(0,A?1:-1,0);for(let Y=0;Y<=a;Y++){let rt=Y*x/a;d.push(B*Math.cos(rt),F,B*Math.sin(rt)),m.push(0,A?1:-1,0)}for(let Y=0;Y<a;Y++)b.push(C,C+Y+(A?2:1),C+Y+(A?1:2))}return vt(d,m,b)},Bt=function(a,l,d=48,m=10,b=0,A=x){let C=[],F=[],B=[];for(let Y=0;Y<=d;Y++){let rt=b+A*Y/d;for(let gt=0;gt<=m;gt++){let ft=gt*x/m,Mt=Math.cos(ft),Tt=Math.sin(ft);C.push((a+l*Mt)*Math.cos(rt),(a+l*Mt)*Math.sin(rt),l*Tt),F.push(Mt*Math.cos(rt),Mt*Math.sin(rt),Tt)}}for(let Y=0;Y<d;Y++)for(let rt=0;rt<m;rt++){let gt=Y*(m+1)+rt,ft=gt+m+1;B.push(gt,ft,gt+1,ft,ft+1,gt+1)}return vt(C,F,B)},He=function(a,l,d,m=.07){let b=[a,l,d,m].join(",");if(ue.has(b))return ue.get(b);m=Math.min(m,a/2*.95,l/2*.95,d/2*.95);let A=[],C=[],F=[],B=[a/2,l/2,d/2],Y=[[[0,0,d/2],[1,0,0],[0,1,0],a,l],[[0,0,-d/2],[-1,0,0],[0,1,0],a,l],[[a/2,0,0],[0,0,-1],[0,1,0],d,l],[[-a/2,0,0],[0,0,1],[0,1,0],d,l],[[0,l/2,0],[1,0,0],[0,0,-1],a,d],[[0,-l/2,0],[1,0,0],[0,0,1],a,d]];for(let[gt,ft,Mt,Tt,It]of Y){let ce=Ut=>[-Ut/2,-Ut/2+m*.28,-Ut/2+m,Ut/2-m,Ut/2-m*.28,Ut/2],pt=ce(Tt),lt=ce(It),At=A.length/3;for(let Ut of lt)for(let qt of pt){let wt=I(gt,I(E(ft,qt),E(Mt,Ut))),Je=wt.map((En,$e)=>R(En,-B[$e]+m,B[$e]-m)),Ve=w(O(wt,Je));A.push(...I(Je,E(Ve,m))),C.push(...Ve)}for(let Ut=0;Ut<5;Ut++)for(let qt=0;qt<5;qt++){let wt=At+Ut*6+qt;F.push(wt,wt+1,wt+6,wt+1,wt+7,wt+6)}}let rt=vt(A,C,F);return ue.set(b,rt),rt},me=function(a,l=.04,d=8){let m=[],b=[],A=[];for(let C=0;C<a.length;C++){let F=w(O(a[Math.min(C+1,a.length-1)],a[Math.max(C-1,0)])),B=w(D(F,Math.abs(F[1])<.9?[0,1,0]:[0,0,1])),Y=D(F,B);for(let rt=0;rt<=d;rt++){let gt=rt*x/d,ft=I(E(B,Math.cos(gt)),E(Y,Math.sin(gt)));m.push(...I(a[C],E(ft,l))),b.push(...ft)}}for(let C=0;C<a.length-1;C++)for(let F=0;F<d;F++){let B=C*(d+1)+F,Y=B+d+1;A.push(B,B+1,Y,B+1,Y+1,Y)}return vt(m,b,A)},Pe=function(a,l,d,m){let b=[],A=[],C=[];for(let B=0;B<=144;B++){let Y=B*x/144;for(let rt of[-1,1])b.push((a+rt*d)*Math.cos(Y),m,(l+rt*d)*Math.sin(Y)),A.push(0,1,0)}for(let B=0;B<144;B++){let Y=B*2;C.push(Y,Y+2,Y+1,Y+1,Y+2,Y+3)}return vt(b,A,C)},q=function(a,l,d,m=mt.green,b=!1,A=.13){a.add(b?ge:Ue,at(l,d),m,A)},k=function(a,l,d,m,b=.06,A=[0,0,0],C=.12){a.add(He(...d,b),at(l,[1,1,1],A),m,C)},_t=function(a,l,d,m,b,A=.2,C=!1){a.add(Ze,ye(l,d,m),b,A),C&&(q(a,l,[m,m,m],b,!0,A),q(a,d,[m,m,m],b,!0,A))},Et=function(a,l,d,m,b=[0,0,0],A=!1){a.add(A?We:mn,at(l,d,b),m)},ct=function(a,l,d,m,b=.15){a.add(me(l,d),Ie,m,b)},yt=function(a,l,d,m=100){return Array.from({length:m+1},(b,A)=>[a*Math.cos(A*x/m),d,l*Math.sin(A*x/m)])},jt=function(){return Lt=Lt*1664525+1013904223>>>0,Lt/4294967296},Wa=function(a,l,d){let m=-d*Math.min(.09,_.speed*.003),b=Math.sin(a*18)*Math.min(.012,_.speed*5e-4);bt.local=at([0,b,0],[1,1,1],[m,0,0]),Kt.local=at([-.31,1.57+b,0],[1,1,1],[-m*.5,-d*.13,0]);for(let A of Le)A.n.local=Z(tt(A.x,.41,A.z),Z(ut(A.front?-(_.drifting?d*.12-Tn(_.yaw-_.velocityYaw)*.62:d*.26):0),ot(vc)));for(let A of we){let C=_.boostActive?1.25+.17*Math.sin(a*38+A.side):_.pad>0?1+.12*Math.sin(a*36):_.mini>0?.65+.12*Math.sin(a*42+A.side):.001;A.n.local=at([-1.9,.43,A.side*.34],[C,Math.max(.01,C),Math.max(.01,C)])}},j=function(){return Kn[en]},$=function(){return S*j().laps},Q=function(a){let l=j().points,d=l.length,m=(a%d+d)%d,b=Math.floor(m),A=m-b,C=l[(b+d-1)%d],F=l[b],B=l[(b+1)%d],Y=l[(b+2)%d];return F.map((rt,gt)=>.5*(2*rt+(-C[gt]+B[gt])*A+(2*C[gt]-5*rt+4*B[gt]-Y[gt])*A*A+(-C[gt]+3*rt-3*B[gt]+Y[gt])*A*A*A))},Ft=function(){Xa=en,un=[],S=0;let a=j().points.length*120;for(let m=0;m<=a;m++){let b=m*j().points.length/a,A=Q(b);m&&(S+=z(O(A,un[m-1].p)));let C=O(Q(b+1e-4),Q(b-1e-4));un.push({s:S,p:A,h:Math.atan2(C[2],C[0])})}let l=un.map(m=>m.p[0]),d=un.map(m=>m.p[2]);W={minX:Math.min(...l),maxX:Math.max(...l),minZ:Math.min(...d),maxZ:Math.max(...d)}},Ht=function(a){let l=(a%S+S)%S,d=0,m=un.length-1;for(;d+1<m;){let Y=d+m>>1;un[Y].s<=l?d=Y:m=Y}let b=un[d],A=un[m],C=(l-b.s)/(A.s-b.s||1),F=Math.atan2(Math.sin(A.h-b.h),Math.cos(A.h-b.h)),B=b.h+F*C;return{p:b.p.map((Y,rt)=>V(Y,A.p[rt],C)),h:B,T:[Math.cos(B),0,Math.sin(B)],R:[-Math.sin(B),0,Math.cos(B)],curv:F/(A.s-b.s),slope:(A.p[1]-b.p[1])/(A.s-b.s)}},Ct=function(a,l){let d=a-l;return ee==="circuit"&&(d-=Math.round(d/S)*S),d},Nt=function(){return ui+(_.timePenalty||0)},Wt=function(a){let l=Math.round(a*100),d=Math.floor(l/6e3),m=Math.floor(l%6e3/100),b=l%100;return String(d).padStart(2,"0")+":"+String(m).padStart(2,"0")+"."+String(b).padStart(2,"0")},he=function(a,l){if(ee!=="circuit")return!0;let d=I(Ht(a).p,E(Ht(a).R,l));for(let m=0;m<un.length;m+=20){let b=un[m];if(Math.abs(Ct(b.s,a))>35&&Math.hypot(b.p[0]-d[0],b.p[2]-d[2])<15)return!1}return!0},Gt=function(){return[[Math.cos(_.yaw),Math.sin(_.yaw)],[-Math.sin(_.yaw),Math.cos(_.yaw)]]},dn=function(a){let l=Gt(),d=a.angle||0,m=[[Math.cos(d),Math.sin(d)],[-Math.sin(d),Math.cos(d)]],b=[Ct(_.s,a.s+(a.ds||0)),_.l-a.l-(a.dl||0)],A=a.kind==="cone"?[.39,.39]:[.35,1.1],C=1/0,F=null;for(let B of[l[0],l[1],m[0],m[1]]){let Y=Math.abs(xe(l[0],B))*Me+Math.abs(xe(l[1],B))*Ge,rt=Math.abs(xe(m[0],B))*A[0]+Math.abs(xe(m[1],B))*A[1],gt=Y+rt-Math.abs(xe(b,B));if(gt<=0)return null;if(gt<C){C=gt;let ft=xe(b,B)>=0?1:-1;F=B.map(Mt=>Mt*ft)}}return{normal:F,pen:C}},Se=function(a,l,d=null){let m=1/fe,b=1/Yt,A=d?d.kind==="cone"?9:85:1/0,C=d?1/A:0,F=d?[Ct(_.s+l[0],d.s+(d.ds||0)),_.l+l[1]-d.l-(d.dl||0)]:[0,0],B=d?1/(A*(d.kind==="cone"?.09:.48)):0,Y=[_.vS-_.spin*l[1],_.vL+_.spin*l[0]],rt=d?[(d.vS||0)-(d.omega||0)*F[1],(d.vL||0)+(d.omega||0)*F[0]]:[0,0],gt=[Y[0]-rt[0],Y[1]-rt[1]],ft=xe(gt,a);if(ft>=0)return 0;let Mt=Ke(l,a),Tt=Ke(F,a),It=d?.13:.035,ce=-(1+It)*ft/(m+C+Mt*Mt*b+Tt*Tt*B);_.vS+=a[0]*ce*m,_.vL+=a[1]*ce*m,_.spin=R(_.spin+Mt*ce*b,-2.3,2.3);let pt=[-a[1],a[0]],lt=Ke(l,pt),At=Ke(F,pt),Ut=xe(gt,pt),qt=d?.22:.1,wt=R(-Ut/(m+C+lt*lt*b+At*At*B),-qt*ce,qt*ce);return _.vS+=pt[0]*wt*m,_.vL+=pt[1]*wt*m,_.spin=R(_.spin+lt*wt*b,-2.3,2.3),d&&(d.vS=(d.vS||0)-(a[0]*ce+pt[0]*wt)*C,d.vL=(d.vL||0)-(a[1]*ce+pt[1]*wt)*C,d.omega=R((d.omega||0)-(Tt*ce+At*wt)*B,-7,7),d.kind==="cone"&&(d.tilt=Math.min(1.35,(d.tilt||0)+Math.abs(ce)*C*.015))),Math.abs(ft)},bn=function(a,l){a<.7||_.contactSound>0||(_.contactSound=.16,hu(De(_.s,_.l,.45),Math.min(14,Math.ceil(a)),[0,1,0]),Of(l,a),a>5&&(Br=Math.min(.25,a*.012),_.driftCharge*=.5))},Vn=function(a){_.contactSound=Math.max(0,_.contactSound-a);for(let l of ln.values())for(let d of l.entities)(d.kind==="cone"||d.kind==="barrier")&&(d.vS=(d.vS||0)*Math.exp(-a*2.4),d.vL=(d.vL||0)*Math.exp(-a*2.4),d.ds=R((d.ds||0)+d.vS*a,-18,18),d.dl=R((d.dl||0)+d.vL*a,-7.4-d.l,7.4-d.l),d.angle=(d.angle||0)+(d.omega||0)*a,d.omega=(d.omega||0)*Math.exp(-a*2));for(let l=0;l<3;l++){let d=Gt(),m=Math.abs(d[0][1])*Me+Math.abs(d[1][1])*Ge,b=ze-m;if(Math.abs(_.l)>b){let A=Math.sign(_.l),C=[0,-A];_.l=A*(b-.015);let F=[A*(Math.sign(d[0][1])*Me*d[0][0]+Math.sign(d[1][1])*Ge*d[1][0]),A*m],B=Se(C,F);bn(B,"rail"),B>4&&(Ja(!1),_.turnRate*=.4,eo=!1)}if(!(_.jump>.85))for(let A of ln.values())for(let C of A.entities){if(C.kind!=="cone"&&C.kind!=="barrier"||Math.abs(Ct(C.s+(C.ds||0),_.s))>4.5||Math.abs(C.l+(C.dl||0)-_.l)>4)continue;let F=dn(C);if(!F)continue;let B=C.kind==="cone"?9:85,Y=B/(B+fe),rt=Math.max(0,F.pen-.008)*.82;_.s+=F.normal[0]*rt*Y,_.l+=F.normal[1]*rt*Y,C.ds=(C.ds||0)-F.normal[0]*rt*(1-Y),C.dl=(C.dl||0)-F.normal[1]*rt*(1-Y);let gt=Gt(),ft=[Ct(C.s+(C.ds||0),_.s),C.l+(C.dl||0)-_.l],Mt=R(xe(ft,gt[0]),-Me,Me),Tt=R(xe(ft,gt[1]),-Ge,Ge),It=[gt[0][0]*Mt+gt[1][0]*Tt,gt[0][1]*Mt+gt[1][1]*Tt],ce=Se(F.normal,It,C);bn(ce,C.kind)}}_.speed=Math.hypot(_.vS,_.vL),_.velocityYaw=Math.atan2(_.vL,_.vS),_.lateralSpeed=_.vL},bi=function(a,l){if(!wn.has(a)){let d=new G;l(d),wn.set(a,d.finish())}return wn.get(a)},Ee=function(a,l,d,m,b="#627596"){let A=[-l/2,m,-d/2],C=[l/2,m,-d/2],F=[l/2,m,d/2],B=[-l/2,m,d/2],Y=[-l/2,m+1.3,0],rt=[l/2,m+1.3,0];jn(a,A,C,rt,Y,b),jn(a,Y,rt,F,B,b),jn(a,A,Y,B,B,"#e9e1d2"),jn(a,C,F,rt,rt,"#e9e1d2");for(let gt=0;gt<9;gt++){let ft=-l/2+gt*l/8;ct(a,[[ft,m,-d/2],[ft,m+1.3,0],[ft,m,d/2]],.025,"#8797b0")}_t(a,[-l/2-.15,m+1.33,0],[l/2+.15,m+1.33,0],.08,b)},Ye=function(a,l=0){let d=["#fff0db","#e9eafa","#f9dbe2","#e0f1ec"][l%4],m=["#7190b6","#9a82b3","#be8f98","#6c9a9a"][l%4];k(a,[0,2.65,0],[6,5.3,4.8],d,.08),k(a,[0,.12,0],[6.4,.24,5.1],"#b9b7c5",.035),Ee(a,6.7,5.8,5.3,m);for(let b of[-1,1])for(let A of[-1.9,0,1.9])for(let C of[1.4,3.85])k(a,[A,C,b*2.425],[1.2,1.35,.055],m,.025),k(a,[A,C,b*2.46],[1.05,1.18,.03],"#b8dfe8",.01,[0,0,0],.45),_t(a,[A,C-.58,b*2.49],[A,C+.58,b*2.49],.025,"#f4f7fa"),k(a,[A,C-.72,b*2.55],[1.35,.12,.28],m,.015);k(a,[0,1.03,2.5],[1.04,2.05,.1],"#798c9c",.025),k(a,[.34,1.03,2.57],[.05,.12,.04],"#f7d5a4",.01);for(let b of[-1,1])k(a,[b*2.65,.48,2.9],[.65,.9,.7],"#b9c9b0",.035),q(a,[b*2.65,1.14,2.9],[.6,.55,.5],"#88ba9a",!0)},li=function(a,l=0){let d=["#ef9ba5","#88bfc9","#a6a0d5"][l%3];k(a,[0,2,0],[7,4,4.8],"#fff1dd",.06),Ee(a,7.7,5.8,4,"#6f7d98");for(let m of[-2.05,0,2.05])k(a,[m,1.4,2.45],[1.8,2.15,.06],"#88afb9",.02),k(a,[m,1.45,2.5],[1.54,1.92,.025],"#c2e4e8",.015),k(a,[m,1.45,2.54],[.045,1.92,.02],"#edf6ee",.005);k(a,[0,3.03,2.65],[7.4,.7,.55],d,.035);for(let m=0;m<12;m++)k(a,[-3.35+m*.61,2.62,2.95],[.59,.24,1.15],m%2?"#fff6e3":d,.025,[.12,0,0]);for(let m of[-1,1])_t(a,[m*3.3,0,3.35],[m*3.3,2.6,3.35],.055,d);for(let m of[-1.9,0,1.9])k(a,[m,3.04,2.96],[.45,.34,.025],"#fff6e6",.02),k(a,[m+.28,3.04,2.97],[.065,.22,.02],"#fff6e6",.01);for(let m of[-2.6,2.7]){k(a,[m,.35,3.35],[.75,.7,.65],"#cda883",.035);for(let b of[-.14,.14])k(a,[m,.52,3.35+b],[.6,.035,.035],"#ecd3a5",.005)}k(a,[1.4,.72,3.5],[.6,1.3,.12],"#7e8f9c",.03,[.08,0,0]);for(let m=0;m<4;m++)k(a,[1.4,.38+m*.2,3.58],[.38,.025,.025],"#e9f1e8",.005)},Fe=function(a,l=0){let d="#997786",m=["#f8c6dc","#f6b8d5","#ffdfeb"];_t(a,[0,0,0],[l?.35:-.25,3.4,0],.18,d),_t(a,[0,1.9,0],[-1.55,3.55,.2],.11,d),_t(a,[.1,2.2,0],[1.55,3.8,-.25],.1,d);let A=[[-1.4,3.9,.1,1.5],[0,4.6,0,1.8],[1.6,4.05,-.2,1.5],[-.4,4,1.35,1.45],[.4,4.1,-1.3,1.5]];for(let C=0;C<A.length;C++){let[F,B,Y,rt]=A[C];q(a,[F,B,Y],[rt,rt*.7,rt*.86],m[(C+l)%3],!0,.02),q(a,[F+.2,B+.6,Y+.15],[rt*.6,rt*.28,rt*.52],"#ffe8f1",!0,.01)}for(let C=0;C<12;C++){let F=C*2.399,B=.6+C%4*.38;k(a,[Math.cos(F)*B,.045,Math.sin(F)*B],[.12,.015,.065],m[C%3],.012,[0,F,0])}},ci=function(a){_t(a,[0,0,0],[0,4.2,0],.14,"#9c8c84");for(let l=0;l<3;l++)q(a,[(l-1)*.45,2.7+l*.82,0],[1.9-l*.35,.78,1.25-l*.16],["#7cb5aa","#8fc9b5","#a6d7ba"][l],!0,.02)},Ni=function(a){k(a,[0,.1,0],[.55,.2,.55],"#9da8b9",.025),_t(a,[0,.15,0],[0,5.6,0],.065,"#7e8da8"),ct(a,[[0,5.4,0],[0,5.8,.3],[0,5.8,1.3],[0,5.5,1.55]],.055,"#7e8da8"),k(a,[0,5.46,1.55],[.65,.16,.9],"#e5edee",.05),k(a,[0,5.36,1.55],[.5,.025,.72],"#fff0b3",.025,[0,0,0],.1)},qa=function(a){for(let l of[-4,4])_t(a,[l,0,0],[l*.94,6.3,0],.29,"#d98085"),_t(a,[l,0,0],[l,.75,0],.31,"#66728c"),_t(a,[l*.95,4.65,0],[l*.95,6.65,0],.32,"#dc8d91");k(a,[0,5,0],[9.8,.36,.48],"#d68183",.06),ct(a,[[-5.65,6.55,0],[-4.5,6.3,0],[0,6.2,0],[4.5,6.3,0],[5.65,6.55,0]],.25,"#6d7089"),_t(a,[0,5,0],[0,6.15,0],.13,"#d68183"),k(a,[0,5.65,.31],[.9,1.12,.15],"#55677e",.02),k(a,[0,5.65,.4],[.5,.69,.025],"#edcf9d",.01)},Tf=function(a){k(a,[0,.25,0],[13,.5,6.8],"#c6c4ce",.04);for(let l of[-5,0,5])for(let d of[-2.2,2.2])_t(a,[l,.5,d],[l,4.1,d],.1,"#8fa2ad");Ee(a,14,7.8,4.1,"#73849c");for(let l=0;l<12;l++)k(a,[-5.8+l*1.05,.53,3],[.8,.025,.2],"#f6dfa0",.008);k(a,[0,3.2,2.6],[4,.9,.22],"#eef5ed",.04),k(a,[-1.55,3.2,2.75],[.45,.45,.04],"#8ec9c5",.03);for(let l=0;l<6;l++)k(a,[-.8+l*.45,3.2,2.75],[.19,.24,.03],"#8294a8",.01);for(let l of[-3.5,3.5]){k(a,[l,1.02,0],[2.7,.15,.65],"#c2a38c",.02);for(let d of[-.95,.95])_t(a,[l+d,.5,0],[l+d,.95,0],.06,"#8c91a3")}},Af=function(a){for(let l of[-1.16,1.16])k(a,[0,.05,l],[20,.1,.09],"#81929f",.015);for(let l=0;l<20;l++)k(a,[-9.5+l,.005,0],[.23,.07,3.4],"#bea58d",.015);k(a,[0,1.65,0],[13,2.7,3],"#edf5dc",.25),k(a,[0,1.25,0],[13.15,.38,3.06],"#83bcb6",.04),k(a,[0,3.08,0],[12.5,.25,3.1],"#b3bfc6",.12);for(let l of[-1,1]){for(let d=0;d<7;d++){let m=-5.2+d*1.73;k(a,[m,2,l*1.52],[1.35,1.05,.06],"#769ba8",.04),k(a,[m,2.1,l*1.56],[1.16,.8,.025],"#bbdfe6",.03)}for(let d of[-4.3,4.3])q(a,[d,.45,l*1.16],[.49,.49,.13],"#596980",!0),k(a,[d,.48,l*1.31],[.19,.19,.03],"#bfccd1",.03)}for(let l of[-6.55,6.55]){k(a,[l,2.1,0],[.06,1.05,2.1],"#acd2dd",.05);for(let d of[-.9,.9])q(a,[l,1.25,d],[.05,.13,.13],"#fff4ba",!0)}ct(a,[[-1.5,3.25,0],[0,4.3,0],[1.5,3.25,0]],.055,"#718699"),_t(a,[-.65,4.3,0],[.65,4.3,0],.07,"#718699")},Ef=function(a){k(a,[0,4.8,0],[24,9.6,7],"#f4eedf",.06),Ee(a,25.2,8.2,9.6,"#8095ad"),k(a,[0,6.1,3.7],[4.8,12.2,2],"#e6eaf0",.06),Ee(a,5.4,3.1,12.2,"#879bb4");for(let l of[-10,-7,-4,4,7,10])for(let d of[2,4.8,7.6])k(a,[l,d,3.56],[1.9,1.65,.06],"#8da6b8",.025),k(a,[l,d,3.61],[1.64,1.41,.025],"#c7e9eb",.015),k(a,[l,d,3.65],[.045,1.41,.025],"#f6f5ed",.005);k(a,[0,1.5,4.75],[3.2,2.8,.06],"#9cbdcd",.025);for(let l of[-.75,.75])k(a,[l,1.5,4.81],[.035,2.7,.025],"#f7eee4",.005);q(a,[0,10.2,4.77],[.9,.9,.06],"#fff7df",!0,.02),a.add(Bt(.89,.045,28,7),tt(0,10.2,4.84),"#7f91a8",.08),_t(a,[0,10.2,4.91],[0,10.8,4.91],.03,"#697e98"),_t(a,[0,10.2,4.92],[.43,10.4,4.92],.03,"#697e98"),k(a,[0,-.02,7.5],[23,.1,12],"#e2e1db",.03);for(let l of[-5.5,5.5])k(a,[l,1.5,12.1],[.8,3,.8],"#e8dbc7",.04),k(a,[l,3.06,12.1],[1,.2,1],"#a1acb9",.025);for(let l of[-1,1])for(let d=0;d<8;d++){let m=l*(6.4+d*.65);_t(a,[m,0,12],[m,1.8,12],.025,"#9cacc0")}for(let l of[-1,1])_t(a,[l*6,1.65,12],[l*11.5,1.65,12],.035,"#9cacc0")},Cf=function(a){k(a,[0,1.25,0],[1.2,2.5,.82],"#f3a4ad",.09),k(a,[-.13,1.55,.43],[.82,1.35,.05],"#b6e0e9",.03);for(let l=0;l<3;l++)for(let d=0;d<3;d++)k(a,[-.4+d*.27,1.12+l*.4,.48],[.13,.23,.06],["#f9e2ad","#a3d2cc","#d3c5ec"][d],.025),k(a,[-.4+d*.27,.94+l*.4,.49],[.1,.04,.02],"#fff0c7",.005);k(a,[0,.47,.44],[.75,.24,.055],"#738698",.03),k(a,[.43,1.3,.45],[.13,.18,.04],"#fff0b8",.02)},Rf=function(a){_t(a,[0,0,0],[0,2.6,0],.08,"#8c7e8a"),k(a,[0,2.55,0],[.55,.16,.55],"#877d92",.025),k(a,[0,2.22,0],[.41,.52,.41],"#ffe4ad",.04),k(a,[0,1.93,0],[.52,.12,.52],"#a19caa",.025);for(let l of[-.2,.2])for(let d of[-.2,.2])_t(a,[l,1.98,d],[l,2.49,d],.018,"#927f8d")},Pf=function(a,l){let d=l==="left"?-1:1;_t(a,[0,0,0],[0,2.4,0],.055,"#8499b0"),k(a,[0,2.28,0],[2.9,.78,.18],"#f3eacb",.04);for(let m=0;m<3;m++){let b=-.86+m*.86;_t(a,[b-d*.25,2.02,.12],[b+d*.15,2.28,.12],.055,"#bd8faf"),_t(a,[b+d*.15,2.28,.12],[b-d*.25,2.54,.12],.055,"#bd8faf")}},If=function(a){return bi(a,l=>{a.startsWith("house")?Ye(l,Number(a.slice(-1))):a.startsWith("shop")?li(l,Number(a.slice(-1))):a.startsWith("cherry")?Fe(l,Number(a.slice(-1))):a==="pine"?ci(l):a==="lamp"?Ni(l):a==="torii"?qa(l):a==="station"?Tf(l):a==="tram"?Af(l):a==="vending"?Cf(l):a==="school"?Ef(l):a==="lantern"?Rf(l):(a==="left"||a==="right")&&Pf(l,a)})},Lf=function(a){let l=(a%S+S)%S/S,d=j().sectors,m=d[0];for(let b of d)l>=b.at&&(m=b);return m},Df=function(a,l,d){let m=new re,b=a*40,A=(B,Y,rt,gt=1,ft=0)=>{if(ee==="circuit"&&Y>=S||!he(Y,rt))return null;let Mt=ve(Y),Tt=De(Y,rt,-.05),It=-Mt.h+(rt>0?P:0)+ft,ce=new re(If(B),at(O(Tt,l),[gt,gt,gt],[0,It,0]));return m.add(ce),ce},C=ee==="circuit"&&j().biome===1;for(let B of[-1,1]){A("lamp",b+7,B*9.65);for(let Y=0;Y<2;Y++)A("cherry"+(a+Y)%2,b+10+Y*20,B*(C?11.3:12.5),C?1.12:.92);(a%2===0||C)&&a%3!==1&&!(a===2&&B<0)&&!(C&&a===0&&B>0)&&A("house"+(a+(B>0?1:0))%4,b+19,B*(16.5+d()*2),.9+d()*.25),a%3===1&&!(a===2&&B<0)&&A("shop"+a%3,b+18,B*17.5),a%5===0&&A("vending",b+9,B*10.1),a%3===0&&A("pine",b+32,B*22,1.5)}let F=Tn(ve(b+37).h-ve(b+7).h);if(Math.abs(F)>.25&&A(F>0?"right":"left",b+5,(F>0?-1:1)*9.4,1,F>0?-P/2:P/2),ee==="circuit"){let B=(b+20)/S;if(C&&a===0&&A("school",b+21,28),a===2&&(A("station",b+17,-20,1),A("tram",b+17,-27,1),A("vending",b+9,-12.8)),B>.66&&B<.74&&a%2===0){A("torii",b+22,-16);for(let Y of[-1,1])A("lantern",b+9,Y*10)}}return m},Uf=function(){hi&&hi.mesh.dispose(),hi&&(hi.mesh.dispose(),hi=null);let a=new G,l=W,d=[(l.minX+l.maxX)*.5,0,(l.minZ+l.maxZ)*.5],m=l.maxX-l.minX,b=l.maxZ-l.minZ;if(j().biome===0)for(let[C,F,B,Y]of[[m*.82,b*.89,-.43,"#eadfce"],[m*.78,b*.85,-.3,"#c7d9b4"]]){let rt=[d[0],B,d[2]],gt=[0,1,0],ft=[];for(let Mt=0;Mt<=96;Mt++){let Tt=Mt*x/96,It=1+.025*Math.sin(Tt*5);rt.push(d[0]+Math.cos(Tt)*C*It,B,d[2]+Math.sin(Tt)*F*It),gt.push(0,1,0),Mt&&ft.push(0,Mt,Mt+1)}a.add(vt(rt,gt,ft),Ie,Y,.02)}for(let C=0;C<12;C++){let F=C*x/12,B=320+C%3*36,Y=d[0]+Math.cos(F)*B,rt=d[2]+Math.sin(F)*B,gt=40+C%4*18;Et(a,[Y,gt*.5-5,rt],[70,gt,60],["#b5c4de","#a6bfd8","#c6cfdf"][C%3],[0,F,0],!0),C%3===0&&Et(a,[Y,gt*.85-5,rt],[25,gt*.3,22],"#e5e5f0",[0,F,0],!0)}for(let C=0;C<10;C++){let F=C*x/10,B=[d[0]+Math.cos(F)*260,57+C%3*14,d[2]+Math.sin(F)*250];for(let Y=0;Y<4;Y++)q(a,I(B,[(Y-1.5)*12,Math.sin(Y*2)*4,0]),[17,7+Y%2*3,10],"#fff5f3",!0,.01)}hi=new re(a.finish()),hi.shadow=!1,eu=en,dc=Array.from({length:24},(C,F)=>({phase:F*2.399,node:new re(Nf)}));for(let C of dc)C.node.shadow=!1},Ff=function(a,l){if(ee!=="circuit")return;(eu!==en||!hi)&&Uf(),hi.local=tt(-a[0],-a[1],-a[2]),N.add(hi);let d=ve(_.s);for(let m of dc){let b=m.phase,A=(b*13+l*1.7)%55-10,C=Math.sin(b*7)*10+Math.sin(l*.6+b)*2,F=1+((b*2-l*.65)%7+7)%7,B=I(De(_.s+A,C,F),[Math.sin(l+b)*.25,0,0]);m.node.local=at(O(B,a),[1,1,1],[l*.8+b,b,l]),N.add(m.node)}},Ya=function(){if(!_e)try{let gt=function(It,ce){let pt=a.createBufferSource(),lt=a.createBiquadFilter(),At=a.createGain();return pt.buffer=Y,pt.loop=!0,lt.type=It,lt.frequency.value=ce,At.gain.value=0,pt.connect(lt),lt.connect(At),At.connect(l),pt.start(),{source:pt,filter:lt,gain:At}},a=new(window.AudioContext||window.webkitAudioContext),l=a.createGain(),d=a.createDynamicsCompressor();l.gain.value=Nn?.48:0,l.connect(d),d.threshold.value=-18,d.ratio.value=4,d.connect(a.destination);let m=a.createGain(),b=a.createBiquadFilter();b.type="lowpass",b.frequency.value=1e3,m.gain.value=0,b.connect(m),m.connect(l);let A=a.createOscillator(),C=a.createOscillator(),F=a.createOscillator(),B=a.createGain();A.type="sawtooth",C.type="triangle",F.type="sine",C.detune.value=9,B.gain.value=.6;for(let It of[A,C])It.connect(b),It.start();F.connect(B),B.connect(b),F.start();let Y=a.createBuffer(1,a.sampleRate*2,a.sampleRate),rt=Y.getChannelData(0);for(let It=0;It<rt.length;It++)rt[It]=Math.random()*2-1;let ft=gt("lowpass",1100),Mt=gt("bandpass",1800),Tt=gt("highpass",2200);Mt.filter.Q.value=3.5,_e={ctx:a,master:l,engine1:A,engine2:C,sub:F,engineGain:m,engineFilter:b,noise:Y,wind:ft,tire:Mt,turbo:Tt,oldSpeed:0,oldBoost:!1,gear:0},Object.keys(s).length&&(_e.rail=Fu(a,l,s),_e.rail.load())}catch{}},Ui=function(a=620,l=.1){if(!Nn||!_e||_e.ctx.state!=="running")return;let{ctx:d,master:m}=_e,b=d.createOscillator(),A=d.createGain();b.type="sine",b.frequency.setValueAtTime(a,d.currentTime),b.frequency.exponentialRampToValueAtTime(a*1.28,d.currentTime+l),A.gain.setValueAtTime(.07,d.currentTime),A.gain.exponentialRampToValueAtTime(.001,d.currentTime+l),b.connect(A),A.connect(m),b.start(),b.stop(d.currentTime+l+.02)},Of=function(a,l){if(!Nn||!_e||_e.ctx.state!=="running"||a==="rail"&&_e.rail?.play(l))return;let{ctx:d,master:m,noise:b}=_e,A=d.createBufferSource(),C=d.createBiquadFilter(),F=d.createGain(),B=d.currentTime;if(A.buffer=b,C.type="bandpass",C.frequency.value=a==="rail"?1400:a==="cone"?450:700,C.Q.value=a==="rail"?1.5:.6,F.gain.setValueAtTime(Math.min(.3,.035+l*.018),B),F.gain.exponentialRampToValueAtTime(.001,B+.16),A.connect(C),C.connect(F),F.connect(m),A.start(),A.stop(B+.2),a==="rail"){let Y=d.createOscillator(),rt=d.createGain();Y.type="triangle",Y.frequency.setValueAtTime(330,B),Y.frequency.exponentialRampToValueAtTime(140,B+.15),rt.gain.setValueAtTime(.07,B),rt.gain.exponentialRampToValueAtTime(.001,B+.2),Y.connect(rt),rt.connect(m),Y.start(),Y.stop(B+.21)}},Bf=function(){if(!_e)return;let a=_e,l=a.ctx.currentTime,d=ne==="running",m=_.speed,b=Math.min(5,Math.floor(m/9)),A=48+m*2.2+m%9*5;(!d||!Nn||An.sfxVolume<=0)&&a.rail?.stop(),a.master.gain.setTargetAtTime(Nn?.48*An.sfxVolume:0,l,.05);let C=d?.012+Math.min(.04,m*7e-4)+(Ce.gas?.013:0):0;a.engineGain.gain.setTargetAtTime(C,l,.07),a.engineFilter.frequency.setTargetAtTime(550+m*25+(Ce.gas?500:0),l,.12);let F=b!==a.gear?.8:1;a.gear=b,a.engine1.frequency.setTargetAtTime(A*F,l,.045),a.engine2.frequency.setTargetAtTime(A*1.5*F,l,.065),a.sub.frequency.setTargetAtTime(A*.5,l,.07),a.wind.gain.gain.setTargetAtTime(d?Math.pow(m/65,2)*.12:0,l,.15),a.wind.filter.frequency.setTargetAtTime(700+m*25,l,.12);let B=Math.abs(Tn(_.yaw-_.velocityYaw)),Y=Ce.brake&&m>5,rt=_.jump<.1?Math.min(1,(_.drifting?B*1.8:Math.max(0,B-.18)*2)+(Y?.55:0)):0;a.tire.gain.gain.setTargetAtTime(d?rt*.075:0,l,.045),a.tire.filter.frequency.setTargetAtTime(1300+m*24+Math.sin(Hs*40)*90,l,.05),a.turbo.gain.gain.setTargetAtTime(d?_.boostBlend*.075:0,l,.1),a.turbo.filter.frequency.setTargetAtTime(1600+_.boostBlend*2400,l,.12),d&&_.boostActive&&!a.oldBoost&&Ui(340,.17),a.oldBoost=_.boostActive,a.oldSpeed=m},ks=function(a){if(!Nn||!_e||_e.ctx.state!=="running")return;let{ctx:l,master:d,noise:m}=_e,b=l.currentTime,A=l.createBufferSource(),C=l.createBiquadFilter(),F=l.createGain(),B=a==="nitro"||a==="combo",Y=B?.48:a==="drift"?.12:.23;A.buffer=m,C.type=a==="land"?"lowpass":"bandpass",C.Q.value=.75,C.frequency.setValueAtTime(a==="land"?300:B?650:1500,b),C.frequency.exponentialRampToValueAtTime(B?5500:700,b+Y),F.gain.setValueAtTime(.001,b),F.gain.linearRampToValueAtTime(B?.19:.1,b+.025),F.gain.exponentialRampToValueAtTime(.001,b+Y),A.connect(C),C.connect(F),F.connect(d),A.start(),A.stop(b+Y+.03),(a==="combo"||a==="small")&&Ui(a==="combo"?1080:820,.08)},nu=function(a){if(_.nitro>=2){_.energy=Math.min(99,_.energy+a);return}for(_.energy+=a;_.energy>=100&&_.nitro<2;)_.energy-=100,_.nitro++,gn("NITRO READY","\u6C2E\u6C14\u5DF2\u88C5\u74F6 \xB7 E \u91CA\u653E 3.2 \u79D2",1.2),Ui(1050,.09)},iu=function(a){_.jetHistory.push({kind:a,t:ui}),_.jetHistory=_.jetHistory.filter(d=>ui-d.t<2.5).slice(-3);let l=_.jetHistory.map(d=>d.kind).join("");(l==="CWW"||l==="WCW")&&(_.combo=l,_.comboTimer=1.3,_.mini=Math.max(_.mini,.88),l==="WCW"&&(_.nitroTime+=.35),gn(l+" \u55B7",l==="CWW"?"\u6C2E\u6C14 \u2192 \u5C0F\u55B7 \u2192 \u5C0F\u55B7 \xB7 \u9AD8\u901F\u51FA\u5F2F":"\u5C0F\u55B7 \u2192 \u6C2E\u6C14 \u2192 \u5C0F\u55B7 \xB7 \u5EF6\u957F\u55B7\u5C04",1.35),ks("combo"))},zf=function(){ne!=="running"||_.nitro<1||_.nitroTime>0||(_.nitro--,_.nitroTime=3.2,gn("NITRO","\u6C2E\u6C14\u55B7\u5C04 \xB7 3.2 \u79D2",.8),iu("C"),ks("nitro"))},Vf=function(){ne!=="running"||_.smallJets<1||_.smallWindow<=0||_.jetCooldown>0||(_.smallJets--,_.jetCooldown=.18,_.mini=.72,_.smallWindow=_.smallJets?1.15:0,_.smallCount++,iu("W"),ks("small"),_.comboTimer<=0&&gn(_.smallCount>1?"DOUBLE BOOST":"MINI BOOST",_.smallCount>1?"\u53CC\u55B7 \xB7 \u8FDE\u7EED\u51FA\u5F2F\u52A0\u901F":"\u5C0F\u55B7 \xB7 \u53CA\u65F6\u63A5\u4E0B\u4E00\u55B7",.75))},fc=function(a=2,l="\u5C0F\u55B7\u5DF2\u5C31\u7EEA"){_.smallJets=Math.max(_.smallJets,a),_.smallWindow=1.5,_.smallCount=0,gn(l,"\u70B9 \u7A7A\u683C / Q\uFF0C\u6216\u91CD\u65B0\u6309 W \xB7 \u8FDE\u70B9\u4E24\u6B21\u53CC\u55B7",1.1),Ui(760,.06)},pc=function(){_.driftRewarded||_.driftCharge<.1||_.driftDuration<.11||(_.driftRewarded=!0,fc(_.driftCharge>.35?2:1,_.driftCharge>.35?"\u53CC\u55B7\u5DF2\u5C31\u7EEA":"\u5C0F\u55B7\u5DF2\u5C31\u7EEA"))},Ja=function(a=!0){_.drifting&&(a&&pc(),_.drifting=!1,_.driftPhase="exit",_.exitTime=.45,_.exitFromGrip=_.tireGrip||3.6,_.exitFromLimit=_.tireLimit||38,_.driftCharge=0,_.driftDuration=0,_.driftSide=0,_.driftReleasing=!1)},Gf=function(a){_.drifting=!0,_.driftSide=a,_.driftCharge=0,_.driftDuration=0,_.driftPhase="entry",_.driftRewarded=!1,_.driftReleasing=!1,_.releaseAge=0,_.driftLatch=!0,_.driftCooldown=.16,_.exitTime=0,_.turnRate+=a*.38,_.gripRecovery=0,ks("drift")},Hf=function(a){_.prevPose={s:_.s,l:_.l,yaw:_.yaw,jump:_.jump};let l=ve(_.s),d=_.s,m=typeof zi=="number"?zi:(Ce.right?1:0)-(Ce.left?1:0);_.speed=Math.hypot(_.vS,_.vL);for(let At of["pad","mini","nitroTime","smallWindow","jetCooldown","comboTimer","exitTime","driftCooldown","driftBuffer","lastSteerTime","jetInputBuffer","boostInputBuffer"])_[At]=Math.max(0,_[At]-a);_.smallWindow===0&&(_.smallJets=0),Ws=V(Ws,m,1-Math.exp(-a*(m?26:20)));let b=Gn.drift>0||Ce.drift&&!_.prevDrift,A=m&&m!==_.prevSteer;Gn.drift=0,Ce.drift||(_.driftLatch=!1),b&&(_.driftBuffer=.26),m&&(_.lastSteer=Math.sign(m),_.lastSteerTime=.2);let C=_.jump<.12,F=_.speed>.4?Math.atan2(_.vL,_.vS):_.yaw,B=Tn(_.yaw-F),Y=(Math.abs(m)>.12?Math.sign(m):0)||(_.lastSteerTime>0?_.lastSteer:Math.abs(B)>.07?Math.sign(B):0);if(!_.drifting&&_.driftCooldown===0&&C&&_.speed>5&&Y&&(Ce.drift&&(!_.driftLatch||A&&Y!==_.lastDriftSide)||_.driftBuffer>0)?(Gf(Y),_.lastDriftSide=Y,_.driftBuffer=0):_.drifting&&b&&_.driftDuration>.18&&(m*_.driftSide<0||_.driftReleasing)&&(pc(),_.driftReleasing=!0,_.releaseAge=Math.max(.18,_.releaseAge),_.driftBuffer=0),_.drifting){_.driftDuration+=a;let At=m*_.driftSide<0;_.speed<3.5||!C?Ja(!1):(!Ce.drift&&_.driftDuration>.14&&(_.driftReleasing=!0),_.driftReleasing&&(_.releaseAge+=a),_.driftPhase=_.driftReleasing?"release":At?"counter":_.driftDuration<.18?"entry":"hold",(At||_.driftReleasing)&&Math.abs(B)<.75&&pc(),(_.driftReleasing&&(_.releaseAge>.55||Math.abs(B)<.065&&_.releaseAge>.16)||At&&Math.abs(B)<.075&&_.driftDuration>.22)&&Ja(!0))}(Gn.boost>0||Ce.boost&&!_.prevBoost)&&(_.boostInputBuffer=.15),(Gn.small>0||Ce.small&&!_.prevSmall||Ce.gas&&!_.prevGas)&&(_.jetInputBuffer=.15),Gn.boost=0,Gn.small=0,_.boostInputBuffer>0&&_.nitro>0&&_.nitroTime<=0&&(zf(),_.boostInputBuffer=0),_.jetInputBuffer>0&&_.smallJets>0&&_.jetCooldown<=0&&(Vf(),_.jetInputBuffer=0);let rt=kf.step(_,{steer:typeof zi=="number"?zi:m,gas:Ce.gas||nn.autoGas&&!Ce.brake||ki&&!Ce.brake,brake:Ce.brake},a,{sensitivity:nn.sensitivity});Ws=_.steering,_.boostActive=_.nitroTime>0,_.boostBlend=V(_.boostBlend,rt.boost?1:0,1-Math.exp(-a*7));let gt=R(1-l.curv*_.l,.45,1.55),ft=_.vS/gt*a;_.s=Math.max(-8,_.s+ft),_.l+=_.vL*a;let Mt=ve(_.s),Tt=Tn(Mt.h-l.h),It=_.vS,ce=_.vL;_.vS=It*Math.cos(Tt)+ce*Math.sin(Tt),_.vL=-It*Math.sin(Tt)+ce*Math.cos(Tt),_.yaw=Tn(_.yaw-Tt);let pt=_.jump>0;(pt||_.vy>0)&&(_.vy-=17*a,_.jump=Math.max(0,_.jump+_.vy*a),_.jump<=0&&(_.vy=0,pt&&(fc(1,"\u843D\u5730\u55B7\u5DF2\u5C31\u7EEA"),ks("land")))),Vn(a),vc-=_.vS*a/.4,ui+=a,Hs+=a,_.score+=Math.max(0,ft)*.85;let lt=Math.abs(Tn(_.yaw-_.velocityYaw));if(_.drifting&&lt>.035&&_.speed>5&&Math.abs(_.l)<7){let At=a*R((lt+.025)*_.speed*.11,0,3);_.driftCharge+=At,nu(At*42),_.score+=a*35}eo=_.drifting,(Ce.gas||nn.autoGas)&&!Ce.brake&&_.speed<.7&&Math.abs(_.l)>5.8?_.stuckTime+=a:_.stuckTime=0,_.stuckTime>1.6&&Sc(!0);for(let At of ln.values())for(let Ut of At.entities){if(Ut.kind==="cone"||Ut.kind==="barrier")continue;let qt=Ut.s;ee==="circuit"&&(qt+=Math.round((_.s-qt)/S)*S);let wt=ee==="circuit"?Math.max(0,Math.floor(qt/S)):0;Ut.hitLap===wt||qt<Math.min(d,_.s)-1.4||qt>Math.max(d,_.s)+1.4||Math.abs(_.l-Ut.l)>Ut.width||(Ut.kind==="coin"?(Ut.hitLap=wt,Ut.hit=!0,_.coins++,nu(3),_.score+=50,Ui(700+_.coins%5*80,.04)):Ut.kind==="pad"?(Ut.hitLap=wt,_.pad=1.55,gn("BOOST STRIP","\u52A0\u901F\u5E26 \xB7 \u4FDD\u6301\u8DEF\u7EBF",1),ks("nitro")):Ut.kind==="ramp"&&_.vS>7&&(Ut.hitLap=wt,_.vy=8,_.jump=.1,_.score+=120,fc(1,"\u7A7A\u55B7\u5DF2\u5C31\u7EEA")))}_.s>=_.checkpoint&&(_.checkpoint+=500,_.score+=500,gn("CHECKPOINT",Math.floor(_.s/500)*500+" m",1)),_.prevSteer=m,_.prevDrift=Ce.drift,_.prevBoost=Ce.boost,_.prevSmall=Ce.small,_.prevGas=Ce.gas,Yf(a),cu(),cp(a),ee==="circuit"&&_.s>=$()&&Mc()},zs=function(){let a={...Ce};for(let l in Ce)Ce[l]=!1;for(let l of Za)io[l]&&(Ce[io[l]]=!0);for(let l of Ka.values())Ce[l]=!0;for(let l in Gn)Ce[l]&&!a[l]&&Gn[l]++},au=function(){return ja=Math.imul(ja,1664525)+1013904223>>>0,ja/4294967296},qf=function(a){let l=(Math.imul(a+419,2654435761)^Gs)>>>0;return()=>(l=Math.imul(l,1664525)+1013904223>>>0,l/4294967296)},ou=function(a){return 1.7*Math.sin(a*.005)+.65*Math.sin(a*.017)},yc=function(a){if(ee!=="circuit")for(;$n[$n.length-1].s<a+8;){let l=$n[$n.length-1],d=l.s+4;d>xc&&(_c=-P/2+(au()-.5)*2.15,xc=d+90+au()*130);let m=R((_c-l.h)*.022,-.0175,.0175);Qa=V(Qa,m,.15);let b=l.h+Qa*4;$n.push({s:d,p:[l.p[0]+Math.cos((b+l.h)*.5)*4,ou(d),l.p[2]+Math.sin((b+l.h)*.5)*4],h:b})}},ve=function(a){if(ee==="circuit")return Ht(a);yc(a);let l=Math.floor((a+80)/4),d=R(l-Fr,0,$n.length-2),m=$n[d],b=$n[d+1],A=R((a-m.s)/4,0,1),C=V(m.h,b.h,A);return{p:m.p.map((B,Y)=>V(B,b.p[Y],A)),h:C,T:[Math.cos(C),0,Math.sin(C)],R:[-Math.sin(C),0,Math.cos(C)],curv:(b.h-m.h)/4,slope:(b.p[1]-m.p[1])/4}},De=function(a,l=0,d=0){let m=ve(a);return I(I(m.p,E(m.R,l)),[0,d,0])},jn=function(a,l,d,m,b,A){let C=w(D(O(d,l),O(b,l)));C[1]<0&&(C=E(C,-1)),a.add(vt([...l,...d,...m,...b],[...C,...C,...C,...C],[0,1,2,0,2,3]),Ie,A,.06)},lu=function(a){let l=a*40,d=ve(l).p,m=new G,b=qf(a),A=ee==="circuit"?mc[j().biome]:mc[(Math.floor(Math.max(0,l)/1e3)%3+3)%3],C=rt=>O(rt,d);for(let rt=0;rt<10;rt++){let gt=l+rt*4;if(ee==="circuit"&&gt>=S)break;let ft=ve(gt),Mt=ve(ee==="circuit"?Math.min(gt+4,S):gt+4),Tt=(It,ce,pt)=>C(I(I(It.p,E(It.R,ce)),[0,pt,0]));jn(m,Tt(ft,-7,.04),Tt(ft,7,.04),Tt(Mt,7,.04),Tt(Mt,-7,.04),"#69728e");for(let It of[-1,1])jn(m,Tt(ft,It*7,.06),Tt(ft,It*7.65,.06),Tt(Mt,It*7.65,.06),Tt(Mt,It*7,.06),(a*10+rt)%2?"#d1b5e0":"#f4eced"),jn(m,Tt(ft,It*7.65,-.02),Tt(ft,It*(ee==="circuit"?11:64),-.08),Tt(Mt,It*(ee==="circuit"?11:64),-.08),Tt(Mt,It*7.65,-.02),A.ground);if(ee==="circuit")for(let It of[-1,1])jn(m,Tt(ft,It*8.6,.06),Tt(ft,It*11,.06),Tt(Mt,It*11,.06),Tt(Mt,It*8.6,.06),"#d9d9e4"),jn(m,Tt(ft,It*11,.06),Tt(ft,It*11,-1.25-ft.p[1]),Tt(Mt,It*11,-1.25-Mt.p[1]),Tt(Mt,It*11,.06),"#b5bbcb");if(ee==="circuit")for(let It of[-1,1])he(gt+2,It*20)&&(jn(m,Tt(ft,It*11,-.12),Tt(ft,It*28,-.12),Tt(Mt,It*28,-.12),Tt(Mt,It*11,-.12),A.ground),jn(m,Tt(ft,It*28,-.12),Tt(ft,It*28,-1.25-ft.p[1]),Tt(Mt,It*28,-1.25-Mt.p[1]),Tt(Mt,It*28,-.12),"#bdc4c7"));if(rt%3===0)for(let It of[-2.33,2.33]){let ce=De(gt+1.5,It,.061);m.add(He(2.2,.015,.07,.004),at(C(ce),[1,1,1],[0,-ft.h,0]),"#e0e4e8")}}for(let rt of[-1,1]){let gt=Array.from({length:11},(ft,Mt)=>C(De(l+Mt*4,rt*8.1,.72)));ct(m,gt,.07,"#b7c6d9"),ct(m,Array.from({length:11},(ft,Mt)=>C(De(l+Mt*4,rt*8.1,.4))),.045,"#c7d5e2");for(let ft=0;ft<5;ft++){let Mt=l+3+ft*8;if(ee==="circuit"&&Mt>S)break;let Tt=C(De(Mt,rt*8.1,0));_t(m,Tt,I(Tt,[0,.84,0]),.055,"#9caec2"),k(m,I(Tt,[0,.75,0]),[.12,.15,.19],ft%2?"#f7bbcf":"#fff1b9",.02)}}let F=[];function B(rt,gt,ft){if(ee==="circuit"&&gt>S-20)return;let Mt=rt==="coin"?Dr:rt==="pad"?Ga:rt==="ramp"?Ha:rt==="cone"?uc:zn;F.push({kind:rt,s:gt,l:ft,node:new re(Mt),hit:!1,width:rt==="barrier"?1.5:rt==="cone"?.85:rt==="coin"?1.12:1.9})}if(a>=2){let rt=Math.floor(b()*3),gt=[-4.2,0,4.2],ft=ee==="circuit"?Math.abs(ve(l+22).curv)<.013?.42:.12:a<7?.55:.85;if(b()<ft){let Mt=(rt+1+Math.floor(b()*2))%3;B(b()<.75?"cone":"barrier",l+22,ee==="circuit"?Mt===1?-5.5:Math.sign(gt[Mt])*5.5:gt[Mt]),ee==="endless"&&a>10&&b()<.28&&B("cone",l+22,gt[3-rt-Mt])}for(let Mt=0;Mt<4;Mt++)B("coin",l+7+Mt*7,gt[rt]);a%4===0?B("pad",l+14,gt[rt]):a>8&&a%7===0&&B("ramp",l+14,gt[rt])}if(a===0){for(let ft=0;ft<12;ft++){let Mt=De(0,-7+ft*1.16,.075),Tt=ve(0);m.add(He(.9,.015,1.12,.003),at(C(Mt),[1,1,1],[0,-Tt.h,0]),ft%2?"#e8e7ed":"#424b66")}for(let ft of[-1,1]){let Mt=C(De(0,ft*7.75,0));_t(m,Mt,I(Mt,[0,5,0]),.12,te)}let rt=C(De(0,-7.75,5)),gt=C(De(0,7.75,5));_t(m,rt,gt,.16,te);for(let ft=0;ft<7;ft++)q(m,C(De(0,-4.5+ft*1.5,5)),[.24,.24,.24],ft%2?"#f9d997":"#bfd9f4",!0)}let Y=new re(m.finish());return Y.add(Df(a,d,b)),{k:a,origin:d,node:Y,entities:F}},cu=function(){if(ee==="circuit"){let m=Math.ceil(S/40);for(let b=0;b<m;b++)ln.has(b)||ln.set(b,lu(b));return}let a=Math.max(-2,Math.floor(_.s/40)-3),l=Math.floor(_.s/40)+9;yc((l+1)*40);for(let m=a;m<=l;m++)ln.has(m)||ln.set(m,lu(m));for(let[m,b]of ln)m<a&&(b.node.mesh.dispose(),ln.delete(m));let d=Math.floor((_.s-210+80)/4);if(d>Fr){let m=Math.min(d-Fr,$n.length-10);$n.splice(0,m),Fr+=m}},fs=function(){Za.clear(),Ka.clear();for(let a in Gn)Gn[a]=0;for(let a in Ce)Ce[a]=!1;for(let a of document.querySelectorAll(".touch button"))a.classList.remove("held")},Qn=function(a=!1){if(ee==="circuit"?(Ft(),Gs=en==="coast-reborn"?73121:95276):a&&(Gs=(Date.now()>>>0)%999999||72319),gc&&ln.size)su.set(gc,ln);else for(let l of ln.values())l.node.mesh.dispose();ln=ee==="circuit"?su.get(en)||new Map:new Map,gc=ee==="circuit"?en:null;for(let l of ln.values())for(let d of l.entities){d.hit=!1,delete d.hitLap;for(let m of["ds","dl","vS","vL","angle","omega","tilt"])d[m]=0}$n=[{s:-80,p:[0,ou(-80),80],h:-P/2}],Fr=0,_c=-P/2,xc=115,Qa=0,ja=Gs,Object.assign(_,{s:0,l:0,speed:0,steering:0,vS:0,vL:0,spin:0,contactSound:0,yaw:0,velocityYaw:0,energy:0,nitro:1,nitroTime:0,turnRate:0,driftDuration:0,driftLatch:!1,driftRewarded:!1,driftReleasing:!1,releaseAge:0,gripRecovery:0,driftCooldown:0,driftBuffer:0,lastSteer:0,lastSteerTime:0,prevSteer:0,lastDriftSide:0,jetInputBuffer:0,boostInputBuffer:0,tireGrip:10.5,tireLimit:68,exitFromGrip:3.6,exitFromLimit:38,driftPhase:"grip",exitTime:0,smallJets:0,smallWindow:0,smallCount:0,jetCooldown:0,jetHistory:[],combo:"",comboTimer:0,prevDrift:!1,prevBoost:!1,prevSmall:!1,prevGas:!1,coins:0,score:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,stuckTime:0,timePenalty:0}),vc=0,ui=0,Hs=0,eo=!1,Ws=0,hs=0,Vs=60,us=null,Ur=0;for(let l of ds)l.life=0;for(let l of cs)l.life=0;fs(),yc(420),cu(),qs=null,zr=null,ps=null,_.prevPose=null,U("seedText").textContent=String(Gs).padStart(6,"0"),U("bestText").textContent=kr.toLocaleString(),U("rerollBtn").hidden=ee==="circuit",U("endRunBtn").hidden=ee==="circuit",U("uploadStatus").textContent="",Br=0,Or=0,U("toast").classList.remove("show"),U("drift").classList.remove("on"),U("modeDistance").textContent=Math.round(S)+" m / \u5708 \xB7 "+j().laps+" \u5708"},gn=function(a,l="",d=2){U("toastTitle").textContent=a,U("toastSub").textContent=l,U("toast").classList.add("show"),Or=d,U("status").textContent=a+" "+l},Xs=function(a=!1){if(ki=!1,typeof st<"u"&&st.room){Zr();return}Qn(a),ne="countdown",Oi=3.05,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("helpPanel").hidden=!0,U("musicPanel").hidden=!0,U("rankPanel").hidden=!0,Fi.classList.remove("menu-open"),U("countdown").hidden=!1,U("countdown").textContent="3",Ya(),_e&&_e.ctx.resume().catch(()=>{}),Cu(),U("status").textContent="\u51C6\u5907\u8D77\u8DD1\u3002W \u52A0\u901F\uFF0CAD \u8F6C\u5411\uFF0CShift \u6F02\u79FB\uFF0C\u7A7A\u683C\u5C0F\u55B7\uFF0CE \u6C2E\u6C14\u3002"},Bi=function(){if(typeof st<"u"&&st.room&&ne==="running"){fs(),gn("\u5728\u7EBF\u6BD4\u8D5B\u7EE7\u7EED\u8FDB\u884C","\u8054\u673A\u4E0D\u6682\u505C \xB7 \u70B9\u51FB\u623F\u95F4\u53EF\u9000\u51FA",1.5);return}ne==="running"?(ne="paused",fs(),U("paused").hidden=!1,U("status").textContent="\u6E38\u620F\u5DF2\u6682\u505C\u3002"):ne==="paused"&&(ne="running",U("paused").hidden=!0,to=performance.now())},Mc=function(){if(ne!=="finished"){ne="finished",fs(),kr=Math.max(kr,Math.floor(_.s)),no=Math.max(no,Math.floor(_.score));try{localStorage.setItem("star-rush-best-distance",String(kr)),localStorage.setItem("star-rush-best-score",String(no))}catch{}U("resultDistance").textContent=ee==="circuit"?Wt(Nt()):Math.floor(_.s).toLocaleString()+" m",U("resultMainLabel").textContent=ee==="circuit"?j().laps+" \u5708\u7528\u65F6":"\u672C\u6B21\u91CC\u7A0B",U("resultScore").textContent=Math.floor(_.score).toLocaleString(),U("resultBest").textContent=_.coins+" \u679A",U("resultBestLabel").textContent="\u6536\u96C6\u91D1\u5E01",U("resultNote").textContent=ee==="circuit"?"\u51B2\u7EBF\u5B8C\u6210\uFF01\u53EF\u4EE5\u4E0A\u4F20\u6210\u7EE9\uFF0C\u548C\u670B\u53CB\u6BD4\u8F83\u5F53\u524D\u8D5B\u9053\u7684\u5B8C\u8D5B\u7528\u65F6\u3002":"\u672C\u6B21\u81EA\u7531\u8DD1\u5DF2\u7ED3\u7B97\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u91CC\u7A0B\u6210\u7EE9\u3002",U("finished").hidden=!1,Fi.classList.add("menu-open"),U("status").textContent="\u672C\u5C40\u7ED3\u675F\u3002",Wr={id:crypto.randomUUID(),mode:ee,track:ee==="circuit"?Xa:"endless-reborn",seed:Gs,distance:Math.round(Math.max(0,_.s)),timeMs:Math.round(Nt()*1e3),score:Math.floor(_.score)},xs||Qf(Wr),U("submitRun").disabled=!1,U("submitRun").textContent="\u4E0A\u4F20\u672C\u6B21\u6210\u7EE9",hp(),Ui(1100,.3)}},hu=function(a,l=5,d=[0,1,0]){let m=0;for(let b of cs)b.life<=0&&m++<l&&(b.life=.35+Math.random()*.4,b.p=[...a],b.v=I(d,[(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3]),b.size=.04+Math.random()*.08)},Sc=function(a=!1){if(ne!=="running"&&ne!=="paused")return;let l=[0,-3.7,3.7],d=0;for(let m of l){let b=!0;for(let A of ln.values())for(let C of A.entities)(C.kind==="cone"||C.kind==="barrier")&&Math.abs(Ct(C.s,_.s))<7&&Math.abs(C.l-m)<C.width+1.1&&(b=!1);if(b){d=m;break}}_.prevPose=null,_.l=d,_.yaw=0,_.turnRate=0,_.velocityYaw=0,_.lateralSpeed=0,_.speed=R(_.speed,2,12),_.vS=_.speed,_.vL=0,_.spin=0,_.stuckTime=0,_.timePenalty=(_.timePenalty||0)+2,_.jump=0,_.vy=0,_.drifting=!1,_.driftSide=0,_.driftCharge=0,_.exitTime=0,_.driftReleasing=!1,_.driftBuffer=0,eo=!1,us=null,gn(a?"\u5DF2\u81EA\u52A8\u8131\u56F0":"\u8D5B\u8F66\u5DF2\u56DE\u6B63","\u7EE7\u7EED\u6309 W \u52A0\u901F \xB7 \u56DE\u6B63\u8BA1\u65F6 +2 \u79D2",1.5)},Yf=function(a){for(let C of ds)C.life=Math.max(0,C.life-a);let l=Math.abs(Tn(_.yaw-_.velocityYaw));if(!_.drifting&&!(_.exitTime>0&&l>.06)||_.speed<4||_.jump>.08){us=null,Ur=0;return}if(Ur+=a,Ur<.025)return;Ur=0;let d=ve(_.s),m=De(_.s,_.l,.085),b=at(m,[.97,.97,.97],[0,-d.h-_.yaw,Math.atan(d.slope)]),A=[-1,1].map(C=>et(b,[-1.02,0,C*.83]));if(us)for(let C=0;C<2;C++){let F=O(A[C],us[C]),B=Math.hypot(F[0],F[2]);if(B>.05&&B<3){let Y=ds[Xf++%ds.length];Y.p=E(I(A[C],us[C]),.5),Y.length=B+.035,Y.angle=-Math.atan2(F[2],F[0]),Y.life=2.5}}us=A,l>.15&&hu(De(_.s-1,_.l,.2),1,E(d.T,-1.5))},Jf=function(a,l){for(let d of cs)d.life<=0||(d.life-=a,d.v[1]-=a*5,d.p=I(d.p,E(d.v,a)),d.node.local=at(O(d.p,l),[d.size,d.size,d.size]),N.add(d.node))},Zf=function(a,l){let d=ne==="running"&&_.prevPose?R(hs/$a,0,1):1,m=_.prevPose||_,b=V(m.s,_.s,d),A=V(m.l,_.l,d),C=m.yaw+Tn(_.yaw-m.yaw)*d,F=V(m.jump,_.jump,d),B=ve(b),Y=B.p,rt=De(b,A,.06+F),gt=O(rt,Y),ft=Math.atan(B.slope);Rt.tint=Qe.paint,Rt.local=at(gt,[.97,.97,.97],[0,-B.h-C,ft]),N.children=[Rt],Ff(Y,a),ee==="circuit"&&(so.mesh=jf[j().biome],so.local=tt(-Y[0],-.9-Y[1],-Y[2]),so.shadow=!1,N.add(so));for(let pt of ln.values())if(!(ee==="circuit"&&Math.abs(Ct(pt.k*40,_.s))>265)){pt.node.local=tt(...O(pt.origin,Y)),pt.node.shadow=Math.abs(Ct(pt.k*40,_.s))<90,N.add(pt.node);for(let lt of pt.entities){if(lt.kind==="coin"&&lt.hitLap===Math.max(0,Math.floor(_.s/S)))continue;let At=ve(lt.s+(lt.ds||0)),Ut=De(lt.s+(lt.ds||0),lt.l+(lt.dl||0),lt.kind==="coin"?1.05+.12*Math.sin(a*3+lt.s):.08),qt=at(O(Ut,Y),[1,1,1],[0,-At.h+(lt.kind==="coin"?a*2:-(lt.angle||0)),Math.atan(At.slope)]);lt.node.local=lt.kind==="cone"&&lt.tilt?Z(qt,Z(tt(0,.34,0),Z(nt(lt.tilt),tt(0,-.25,0)))):qt,lt.node.shadow=Math.abs(Ct(lt.s,_.s))<65,N.add(lt.node)}}Wa(a,l,Ws),Jf(ne==="running"?l:0,Y);for(let pt of ds)pt.life>0&&(pt.node.local=at(O(pt.p,Y),[pt.length,1,Math.min(1,pt.life)*1.2],[0,pt.angle,0]),N.add(pt.node));let Mt=ne==="ready"||ne==="finished",Tt,It;if(Mt){let pt=.15*Math.sin(a*.16);Tt=I(rt,I(E(B.T,5.6+pt),I(E(B.R,7.1),[0,3.5,0]))),It=I(rt,I(E(B.R,-1.25),[0,.8,0]))}else{let pt=Hn===1?12.5:Hn===2?5.8:8.5,lt=Hn===1?9:Hn===2?2.9:4.5,At=B.h+_.velocityYaw;ps===null?ps=At:ps+=Tn(At-ps)*(1-Math.exp(-l*8));let Ut=[Math.cos(ps),0,Math.sin(ps)],qt=I(E(B.T,_.vS/18),E(B.R,_.vL/18));Tt=I(I(rt,qt),I(E(Ut,-pt),[0,lt,0])),It=I(I(rt,qt),I(E(Ut,10),[0,1+F*.2,0]))}let ce=1-Math.exp(-l*(Mt?2.6:18));return qs?(qs=qs.map((pt,lt)=>V(pt,Tt[lt],ce)),zr=zr.map((pt,lt)=>V(pt,It[lt],ce))):(qs=Tt,zr=It),{eye:O(qs,Y),target:O(zr,Y),origin:Y}},Kf=function(){if(!Qt)return;let a=bc.width,l=bc.height,d=ve(_.s),m=.86;if(ee==="circuit"){Qt.clearRect(0,0,a,l);let F=W,B=Math.min((a-45)/(F.maxX-F.minX),(l-30)/(F.maxZ-F.minZ)),Y=ft=>[a*.5+(ft[0]-(F.minX+F.maxX)*.5)*B,l*.5+(ft[2]-(F.minZ+F.maxZ)*.5)*B];Qt.lineJoin="round";for(let[ft,Mt]of[["#737e9d",13],["#dfe8f3",8]]){Qt.strokeStyle=ft,Qt.lineWidth=Mt,Qt.beginPath();for(let Tt=0;Tt<un.length;Tt+=6){let It=Y(un[Tt].p);Tt?Qt.lineTo(...It):Qt.moveTo(...It)}Qt.closePath(),Qt.stroke()}if(typeof Wn<"u")for(let ft of Wn){let Mt=Y(ve(ft.s).p);Qt.fillStyle=ft.color,Qt.beginPath(),Qt.arc(Mt[0],Mt[1],3.4,0,x),Qt.fill()}if(typeof st<"u"&&st.room){let ft=0;for(let Mt of st.peers.values())if(Mt.position){let Tt=Y(ve(Mt.position.s).p);Qt.fillStyle=oo[ft++%oo.length],Qt.beginPath(),Qt.arc(Tt[0],Tt[1],4.5,0,x),Qt.fill()}}let rt=Y(d.p),gt=Y(un[0].p);Qt.fillStyle="#fff7dc",Qt.fillRect(gt[0]-3,gt[1]-5,6,10),Qt.save(),Qt.translate(...rt),Qt.rotate(d.h+Math.PI/2),Qt.fillStyle="#ffe68b",Qt.beginPath(),Qt.moveTo(0,-8),Qt.lineTo(-5,5),Qt.lineTo(5,5),Qt.closePath(),Qt.fill(),Qt.restore();return}Qt.clearRect(0,0,a,l),Qt.strokeStyle="#c0d7e91c",Qt.lineWidth=1;for(let F=20;F<a;F+=30)Qt.beginPath(),Qt.moveTo(F,0),Qt.lineTo(F,l),Qt.stroke();for(let F=15;F<l;F+=30)Qt.beginPath(),Qt.moveTo(0,F),Qt.lineTo(a,F),Qt.stroke();let b=[];for(let F=-15;F<=205;F+=4){let B=O(ve(_.s+F).p,d.p);b.push([a*.5+L(B,d.R)*m,l*.88-L(B,d.T)*m])}for(let[F,B]of[["#7a85a3",15],["#dce8f0",10]]){Qt.strokeStyle=F,Qt.lineWidth=B,Qt.lineJoin="round",Qt.beginPath();for(let Y=0;Y<b.length;Y++)Y?Qt.lineTo(...b[Y]):Qt.moveTo(...b[Y]);Qt.stroke()}Qt.fillStyle="#ffe68b",Qt.beginPath();let A=a*.5+_.l*m,C=l*.88;Qt.moveTo(A,C-10),Qt.lineTo(A-7,C+7),Qt.lineTo(A+7,C+7),Qt.closePath(),Qt.fill()},$f=function(a){if(wc+=a,wc<.06)return;wc=0,di.distance.textContent=Math.floor(_.s).toLocaleString(),di.score.textContent=String(Math.floor(_.score)).padStart(5,"0"),di.coins.textContent=String(_.coins).padStart(2,"0"),di.speed.textContent=Math.round(_.speed*3.6),U("speedbar").style.width=Math.min(100,_.speed/83*100)+"%",di.energyText.textContent=_.nitro+" \u74F6 / 2 \xB7 "+(_.nitroTime>0?_.nitroTime.toFixed(1)+"s":Math.floor(_.energy)+"%"),U("energyBar").style.width=_.energy+"%";let l=_.boostActive||_.pad>0||_.mini>0;di.gear.textContent=l?"NITRO / BOOST":_.jump>0?"AIR TIME":_.drifting?"DRIFT MODE":_.speed<1?"READY TO RUSH":"SPORT / "+Math.max(1,Math.min(6,Math.ceil(_.speed/8))),U("boostfx").classList.toggle("on",l),U("raceTime").textContent=Wt(Nt()),U("lapLabel").textContent=ee==="circuit"?"LAP "+Math.min(j().laps,Math.floor(Math.max(0,_.s)/S)+1)+" / "+j().laps+" \xB7 \u5269\u4F59 "+Math.max(0,Math.ceil($()-_.s))+" m":"\u65E0\u5C3D\u6A21\u5F0F \xB7 \u81EA\u7531\u7ADE\u901F",U("drift").classList.toggle("on",_.drifting||_.smallJets>0),U("driftBar").style.width=(_.smallJets>0?Math.min(100,_.smallWindow/1.5*100):Math.min(100,_.driftCharge/.55*100))+"%",di.driftText.textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets:_.driftPhase==="entry"?"\u8F7B\u70B9\u8D77\u6F02":_.driftPhase==="counter"?"\u53CD\u6253\u6536\u8F66":_.driftPhase==="release"?"\u60EF\u6027\u6536\u6F02":"\u6F02\u79FB\u96C6\u6C14";for(let m of document.querySelectorAll("[data-key=small]"))m.classList.toggle("smalljet-ready",_.smallJets>0);U("jetCount").textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets+" \xB7 "+_.smallWindow.toFixed(1)+"s":_.drifting?"\u6F02\u79FB\u96C6\u6C14\u4E2D":"\u7A7A\u683C / Q \u5C0F\u55B7";let d=Pu(_.s);di.turnText.textContent=d.direction===0?"\u524D\u65B9\u76F4\u9053":d.direction>0?"\u524D\u65B9\u53F3\u5F2F":"\u524D\u65B9\u5DE6\u5F2F",di.turnArrowPath.setAttribute("d",d.direction===0?"M12 21V3M5 10L12 3L19 10":d.direction>0?"M5 21V8H21M14 1L21 8L14 15":"M19 21V8H3M10 1L3 8L10 15"),Ai==="practice"&&!st.room&&Iu(d),di.biome.textContent=ee==="circuit"?Lf(_.s).name:mc[(Math.floor(_.s/1e3)%3+3)%3].name,Kf()},uu=function(a,l=Ie,d=!0,m=null,b=1){a.world=Z(l,a.local);let A=d&&a.shadow,C=a.tint||m,F=a.opacity??b;a.mesh&&Vr.push({mesh:a.mesh,m:a.world,shadow:A,tint:C,opacity:F});for(let B of a.children)uu(B,a.world,A,C,F)},du=function(){Gr=Math.max(1,i.clientWidth),Hr=Math.max(1,i.clientHeight);let a=Math.min(devicePixelRatio||1,1.5),l=Math.round(Gr*a),d=Math.round(Hr*a);(i.width!==l||i.height!==d)&&(i.width=l,i.height=d)},fu=function(a){if(!h&&c.renderer.getContext().isContextLost())return;let l=Math.min(.1,Math.max(0,(a-to)/1e3));if(to=a,ne==="countdown"){Oi=typeof st<"u"&&st.room&&st.startAt?(st.startAt-(Date.now()+st.offset))/1e3:Oi-l;let b=Oi>.05?String(Math.ceil(Oi)):"GO!";U("countdown").textContent!==b&&(U("countdown").textContent=b,Ui(Oi>.05?400:900,.12)),Oi<=0&&(U("countdown").hidden=!0,ne="running",ui=typeof st<"u"&&st.room&&st.startAt?Math.max(0,(Date.now()+st.offset-st.startAt)/1e3):0,gn("LET\u2019S RUSH!","W \u52A0\u901F \xB7 SHIFT \u6F02\u79FB \xB7 \u7A7A\u683C\u5C0F\u55B7 \xB7 E \u6C2E\u6C14",2))}if(typeof Su=="function"&&Su(a,l),fp(l),ne==="running"){hs+=l;let b=0;for(;hs>=$a&&ne==="running"&&b++<12;)Hf($a),hs-=$a;b>=12&&(hs=0)}else hs=0;(ne==="ready"||ne==="finished")&&(Hs+=l*.25);let d=Zf(Hs,l);up(d.origin,l),typeof bu=="function"&&bu(d.origin,l),Or>0&&(Or-=l,Or<=0&&U("toast").classList.remove("show")),Br=Math.max(0,Br-l),U("hitflash").style.opacity=Math.min(.24,Br*.6),Bf(),typeof xu=="function"&&xu(),Vr.length=0,uu(N),Vs=V(Vs,ne==="ready"||ne==="finished"?45:nn.fov+_.boostBlend*3,1-Math.exp(-l*4));let m=Z(Jt(Vs*P/180,Gr/Hr,.12,850),Vt(d.eye,d.target));ap(m),h?T(d):Ic=c.render(Vr,d,Gr,Hr,Vs,nn),dp(a,l),$f(l),ru||(ru=!0,e.classList.add("done")),requestAnimationFrame(fu)},pu=function(){try{return JSON.parse(localStorage.getItem("star-rush-runs-reborn")||"[]")}catch{return[]}},Qf=function(a){try{let l=pu();l.push({...a,name:localStorage.getItem("star-rush-name")||"\u672C\u673A\u8F66\u624B"}),localStorage.setItem("star-rush-runs-reborn",JSON.stringify(l.slice(-100)))}catch{}},tp=function(a,l){let d=document.createElement("tr"),m=l.mode==="circuit"?Wt(l.timeMs/1e3):l.distance.toLocaleString()+" m";for(let b of[String(a+1).padStart(2,"0"),l.name,m,Math.round(l.score).toLocaleString()]){let A=document.createElement("td");A.textContent=b,d.appendChild(A)}return d},ep=function(){ms=en,U("rankTrack")&&(U("rankTrack").value=ms),wi=ee,Ti=!1,Js("rankPanel"),Xr()},mu=function(a){ee=a;for(let[l,d]of[["circuitMode","circuit"],["endlessMode","endless"]])U(l).classList.toggle("selected",a===d),U(l).setAttribute("aria-pressed",String(a===d));Qn(!0),U("trackPicker").hidden=a!=="circuit",U("trackDescription").hidden=a!=="circuit"},gu=function(a){if(Kn[a]){if(typeof st<"u"&&st.room){gn("\u5DF2\u5728\u8054\u673A\u623F\u95F4","\u9000\u51FA\u623F\u95F4\u540E\u53EF\u66F4\u6362\u5730\u56FE",1.5);return}en=a,Qn(!1),qr()}},qr=function(){for(let a of document.querySelectorAll("[data-track]"))a.classList.toggle("selected",a.dataset.track===en),a.setAttribute("aria-pressed",String(a.dataset.track===en));U("trackDescription").textContent=j().description,U("modeDistance").textContent=Math.round(S)+" m / \u5708 \xB7 "+j().laps+" \u5708"},Ac=function(){try{localStorage.setItem("star-rush-audio",JSON.stringify(An))}catch{}},Yr=function(){if(Ya(),!_e)return!1;if(_e.ctx.state==="suspended"&&_e.ctx.resume().catch(()=>{}),ae.bus)return!0;ae.bus=_e.ctx.createGain();let a=_e.ctx.createDynamicsCompressor();return a.threshold.value=-18,a.ratio.value=3,ae.bus.connect(a),a.connect(_e.ctx.destination),ae.next=_e.ctx.currentTime+.08,!0},gs=function(a,l,d,m,b,A=0){let C=_e.ctx,F=C.createOscillator(),B=C.createGain();F.type=m,F.frequency.setValueAtTime(a,l),A&&F.frequency.exponentialRampToValueAtTime(A,l+d),B.gain.setValueAtTime(.001,l),B.gain.exponentialRampToValueAtTime(b,l+.008),B.gain.exponentialRampToValueAtTime(.001,l+d),F.connect(B),B.connect(ae.bus),F.start(l),F.stop(l+d+.02)},_u=function(a,l,d,m){let b=_e.ctx,A=b.createBufferSource(),C=b.createBiquadFilter(),F=b.createGain();A.buffer=_e.noise,C.type="highpass",C.frequency.value=d,F.gain.setValueAtTime(m,a),F.gain.exponentialRampToValueAtTime(.001,a+l),A.connect(C),C.connect(F),F.connect(ae.bus),A.start(a),A.stop(a+l+.02)},np=function(a,l){let d=.10135135135135136,m=Math.floor(a/16),b=a%16,A=[45,41,48,43],C=A[Math.floor(m/2)%4],F=rt=>440*Math.pow(2,(rt-69)/12);if(b%4===0&&gs(135,l,.18,"sine",.38,42),(b===4||b===12)&&(_u(l,.13,1200,.12),gs(180,l,.07,"triangle",.1,70)),b%2===0&&_u(l,.035,7500,b%4===2?.065:.04),b%2===0){let rt=C+(b===14?12:0);gs(F(rt-12),l,d*1.5,"sawtooth",.045),gs(F(rt-12),l,d*1.5,"sine",.1)}let B=[0,7,12,15,12,7,10,7],Y=B[Math.floor(b/2)%8];if(b%2===1&&gs(F(C+24+Y),l,.16,"triangle",.045),b===0)for(let rt of[0,3,7])gs(F(C+12+rt),l,d*12,"triangle",.018);if(m%4>=2&&b%4===2){let rt=[12,15,19,22,19,15,14,10][Math.floor(b/4)+4*(m%2)];gs(F(C+24+rt),l,d*2.5,"sine",.055)}},xu=function(){if(!_e||!Yr())return;let a=An.enabled&&Nn&&!document.hidden&&ae.mode!=="classic",l=_e.ctx.currentTime;if(ae.bus.gain.setTargetAtTime(a?An.volume*.42:0,l,.07),ae.mode==="synth"&&a){ae.next<l-.15&&(ae.next=l+.05);let d=0;for(;ae.next<l+.18&&d++<8;)np(ae.step++,ae.next),ae.next+=60/148/4}ae.element&&(a&&ae.mode==="local"?ae.element.paused&&ae.element.play().catch(()=>{}):ae.element.paused||ae.element.pause())},ro=function(a){ae.mode=a,Yr(),U("synthMusic").classList.toggle("selected",a==="synth"),U("classicMusic").classList.toggle("selected",a==="classic"),U("classicPlayer").hidden=a!=="classic",U("localMusicControls").hidden=a!=="local",U("musicToggle").hidden=a==="classic",a==="classic"?(U("spotifyPlayer").src||(U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"),U("nowPlaying").textContent="\u7ECF\u5178\u5916\u8BED\u6B4C\u5355 \xB7 \u5728\u4E0B\u65B9\u64AD\u653E\u5668\u70B9\u51FB\u64AD\u653E"):(U("spotifyPlayer").removeAttribute("src"),U("nowPlaying").textContent=a==="local"?ae.files[ae.index]?.name||"\u8BF7\u9009\u62E9\u97F3\u4E50\u6587\u4EF6":"STARLINE \xB7 \u539F\u521B\u7535\u5B50\u7ADE\u901F\u914D\u4E50")},ao=function(a){!ae.files.length||!Yr()||(ae.index=(a+ae.files.length)%ae.files.length,ae.element||(ae.element=new Audio,ae.element.preload="auto",_e.ctx.createMediaElementSource(ae.element).connect(ae.bus),ae.element.onended=()=>ao(ae.index+1),ae.element.onerror=()=>{U("nowPlaying").textContent="\u6B64\u97F3\u9891\u65E0\u6CD5\u89E3\u7801\uFF0C\u8BF7\u6362\u4E00\u9996 MP3 / OGG / WAV"}),ae.element.pause(),ae.url&&URL.revokeObjectURL(ae.url),ae.url=URL.createObjectURL(ae.files[ae.index]),ae.element.src=ae.url,An.enabled=!0,ro("local"),ae.element.play().catch(()=>{U("nowPlaying").textContent="\u70B9\u51FB\u201C\u64AD\u653E\u97F3\u4E50\u201D\u540E\u7EE7\u7EED"}),U("musicToggle").textContent="\u6682\u505C\u97F3\u4E50")},Js=function(a){let l=ne==="running"&&!(typeof st<"u"&&st.room);Jr=Jr||l,l&&Bi();for(let d of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])d!==a&&(U(d).hidden=!0);fs(),U(a).hidden=!1},_s=function(a){U(a).hidden=!0,Jr&&ne==="paused"&&Bi(),Jr=!1},Ec=function(a){function l(b){let A=new re(b.mesh);A.local=new Float32Array(b.local),A.shadow=b.shadow;for(let C of b.children)A.add(l(C));return A}let d=l(Rt),m=d.add(new re(ip[a%4]));return{root:d,marker:m,spin:0}},sp=function(){return{s:_.s,l:_.l,vS:_.vS,vL:_.vL,yaw:_.yaw,jump:_.jump,mini:_.mini,nitroTime:_.nitroTime,paint:Qe.paint,time:Nt(),finished:ne==="finished"}},vu=function(){for(let a of st.peers.values())a.label.remove();st.peers.clear()},Rc=function(a){let l=st.room?.status;st.room=a.room,st.members=a.members,st.ready=!!a.members.find(m=>m.id===st.id)?.ready,st.errors=0;let d=new Set(a.members.map(m=>m.id));for(let[m,b]of st.peers)d.has(m)||(b.label.remove(),st.peers.delete(m));for(let m of a.members){if(m.id===st.id)continue;let b=st.peers.get(m.id);if(!b){let C=document.createElement("div");C.className="peer-label",C.textContent=m.name,Fi.appendChild(C),b={...Ec(st.peers.size),label:C,name:m.name,history:[],position:null,lastStamp:0},st.peers.set(m.id,b)}b.label.textContent=m.name,b.name=m.name;let A=m.snapshot;A&&Number.isFinite(A.s)&&m.updatedAt>b.lastStamp&&(b.lastStamp=m.updatedAt,b.history.push({...A,t:m.updatedAt}),b.history.length>12&&b.history.shift())}if(st.room.status==="racing"&&st.room.startAt!==st.runTag){st.runTag=st.room.startAt,st.startAt=st.room.startAt,en=st.room.track,ee="circuit",Qn(!1),qr(),Cu();for(let b of st.peers.values())b.history=[],b.position=null;let m=a.members.findIndex(b=>b.id===st.id);_.l=(m%2?1:-1)*1.9,_.s=-Math.floor(m/2)*3.8,ne="countdown",Oi=(st.startAt-(Date.now()+st.offset))/1e3,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("roomPanel").hidden=!0,U("rankPanel").hidden=!0,Fi.classList.remove("menu-open"),U("countdown").hidden=!1,Ya(),_e&&_e.ctx.resume().catch(()=>{})}if(st.room.status==="lobby"&&l&&l!=="lobby"){st.startAt=0,st.runTag=0,ne="ready",en=st.room.track,ee="circuit",Qn(!1),qr(),U("countdown").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Fi.classList.add("menu-open");for(let m of st.peers.values())m.history=[]}Pc(),ne==="finished"&&Lu()},Pc=function(){let a=!!st.room;if(U("roomActions").hidden=!a,U("networkHud").hidden=!a,U("createRoom").disabled=a,U("joinRoom").disabled=a,U("roomCode").disabled=a,U("circuitMode").disabled=a,U("endlessMode").disabled=a,U("roomName").disabled=a&&st.room.status==="racing",U("startBtn").textContent=a?"\u56DE\u5230\u8054\u673A\u623F\u95F4":"\u5F00\u59CB\u7ADE\u901F\u3000\u2197",!a){U("roomTitle").textContent="\u540C\u4E00\u6761\u8D5B\u9053\uFF0C\u4E00\u8D77\u51FA\u53D1\u3002",U("roomMembers").replaceChildren(),U("roomStatus").textContent="\u6700\u591A 4 \u4EBA \xB7 \u4F7F\u7528\u5F53\u524D\u9009\u62E9\u7684\u8DD1\u5708\u5730\u56FE";return}U("roomCode").value=st.room.code,U("roomTitle").textContent="ROOM "+st.room.code+" \xB7 "+Kn[st.room.track].name,U("roomStatus").textContent=(st.room.status==="racing"?"\u6BD4\u8D5B\u8FDB\u884C\u4E2D":st.room.status==="finished"?"\u6BD4\u8D5B\u5DF2\u7ED3\u675F":"\u5019\u573A\u4E2D")+" \xB7 "+st.members.length+" / 4 \u4EBA \xB7 "+Math.round(st.rtt)+" ms \u5F80\u8FD4",U("roomMembers").replaceChildren();for(let b of st.members){let A=document.createElement("div");A.className="room-member";let C=document.createElement("span");C.textContent=b.name+(b.id===st.id?"\uFF08\u4F60\uFF09":"")+(b.id===st.room.hostId?" \xB7 \u623F\u4E3B":"");let F=document.createElement("b");F.textContent=b.snapshot?.finished?"\u5B8C\u8D5B "+Wt(b.snapshot.time||0):st.room.status==="racing"?"\u6BD4\u8D5B\u4E2D":b.ready?"\u5DF2\u51C6\u5907":"\u7B49\u5F85\u51C6\u5907",A.append(C,F),U("roomMembers").appendChild(A)}let l=st.room.hostId===st.id,d=st.room.status!=="lobby";U("startRoom").hidden=!l,U("startRoom").disabled=!d&&st.members.some(b=>!b.ready),U("startRoom").textContent=d?"\u7ED3\u675F\u672C\u5C40 \xB7 \u8FD4\u56DE\u5019\u573A":"\u5168\u5458\u5C31\u7EEA \xB7 \u5F00\u59CB\u7ADE\u901F",U("readyRoom").hidden=d,U("readyRoom").textContent=st.ready?"\u53D6\u6D88\u51C6\u5907":"\u51C6\u5907",U("connectionText").textContent=st.errors?"\u8FDE\u63A5\u6062\u590D\u4E2D\u2026":"ROOM "+st.room.code+" \xB7 "+Math.round(st.rtt)+" ms";let m=st.members.map(b=>({id:b.id,s:b.id===st.id?_.s:b.snapshot?.s||0,finished:b.id===st.id?ne==="finished":!!b.snapshot?.finished,time:b.id===st.id?Nt():b.snapshot?.time||0})).sort((b,A)=>b.finished&&A.finished?b.time-A.time:A.finished-b.finished||A.s-b.s);U("racePosition").textContent="POS "+(m.findIndex(b=>b.id===st.id)+1)+" / "+st.members.length},Zr=function(){Js("roomPanel"),Pc()},Su=function(a){if(!st.room||st.busy||document.hidden||a-st.lastSync<(st.room.status==="racing"?125:850))return;st.lastSync=a,st.busy=!0;let l=st.session;Cc("poll",{snapshot:st.room.status!=="lobby"?sp():{}}).then(d=>{st.room&&st.session===l&&Rc(d)}).catch(d=>{st.room&&st.session===l&&(st.errors++,U("connectionText").textContent="\u8FDE\u63A5\u6062\u590D\u4E2D \xB7 "+d.message,U("roomStatus").textContent=d.message)}).finally(()=>{st.busy=!1})},bu=function(a,l){if(!st.room)return;let d=Date.now()+st.offset-R(st.rtt*1.1,170,350);for(let m of st.peers.values()){let b=m.history;if(!b.length){m.label.hidden=!0;continue}let A=b[0],C=A;for(let ft=1;ft<b.length&&(C=b[ft],!(C.t>=d));ft++)A=C;let F=A.t===C.t?0:R((d-A.t)/(C.t-A.t),0,1),B={};for(let ft of["s","l","vS","vL","jump"])B[ft]=V(A[ft]||0,C[ft]||0,F);B.yaw=(A.yaw||0)+Tn((C.yaw||0)-(A.yaw||0))*F;let Y=R((d-C.t)/1e3,0,.12);if(B.s+=(C.vS||0)*Y,B.l+=(C.vL||0)*Y,m.position&&Math.abs(B.s-m.position.s)<15){let ft=1-Math.exp(-l*24);B.s=V(m.position.s,B.s,ft),B.l=V(m.position.l,B.l,ft)}m.position=B;let rt=ve(B.s),gt=De(B.s,B.l,.06+B.jump);m.worldPos=O(I(gt,[0,3,0]),a),m.root.tint=typeof C.paint=="string"?C.paint:oo[0],m.root.local=at(O(gt,a),[.97,.97,.97],[0,-rt.h-B.yaw,Math.atan(rt.slope)]),m.root.shadow=z(O(gt,De(_.s,_.l)))<70,N.add(m.root),m.spin-=(B.vS||0)*l/.4;for(let ft=0;ft<Le.length;ft++){let Mt=Le[ft];m.root.children[2+ft].local=Z(tt(Mt.x,.41,Mt.z),ot(m.spin))}for(let ft=0;ft<we.length;ft++){let Mt=we[ft],Tt=C.nitroTime>0||C.mini>0,It=Tt?.85+.16*Math.sin(Hs*38+Mt.side):.001;m.root.children[6+ft].local=at([-1.9,.43,Mt.side*.34],[It,It,It])}}},ap=function(a){for(let l of st.peers.values()){if(!l.worldPos||!st.room||ne==="ready"){l.label.hidden=!0;continue}let d=l.worldPos,m=d[0],b=d[1],A=d[2],C=a[3]*m+a[7]*b+a[11]*A+a[15],F=(a[0]*m+a[4]*b+a[8]*A+a[12])/C,B=(a[1]*m+a[5]*b+a[9]*A+a[13])/C;l.label.hidden=C<=0||Math.abs(F)>1.1||Math.abs(B)>1.1,l.label.hidden||(l.label.style.left=(F*.5+.5)*Gr+"px",l.label.style.top=(-B*.5+.5)*Hr+"px")}},Eu=function(){return"star-rush-best-reborn-"+en},lp=function(){try{return JSON.parse(localStorage.getItem(Eu())||"null")}catch{return null}},Cu=function(){if(Wn=[],xs=!1,$s=null,vs=lp(),Gi=null,Zs=0,lo=[],co=0,ho=[],Ks=[],ys=1,Kr=1,uo=0,U("resultGrid").replaceChildren(),U("splitLabel").textContent="SECTOR 1 / 3",U("splitDelta").textContent="",U("lapTimeLabel").textContent="",U("coach").hidden=Ai!=="practice",ee==="circuit"&&Ai==="race"&&!st.room){_.l=-1.8;for(let a=0;a<3;a++){let l=Ec(a);l.root.tint=Tu[a],Wn.push({s:-3.8*Math.floor((a+1)/2),l:(a%2?1:-1)*1.9,speed:0,yaw:0,color:Tu[a],name:op[a],node:l.root,finishAt:null,index:a})}}vs&&nn.ghost&&ee==="circuit"&&Ai==="timeTrial"&&!st.room?(Vi=Ec(3).root,Vi.tint="#b8e9e6",Vi.opacity=.27):Vi=null,fo(),Ai==="practice"&&!st.room&&Iu()},cp=function(a){for(let l of Wn){if(l.finishAt!==null)continue;let d=0;for(let F=15;F<=65;F+=10)d=Math.max(d,Math.abs(ve(l.s+F).curv));let m=R(Math.sqrt(24/Math.max(.004,d)),24,53)*(1-l.index*.028);l.speed=V(l.speed,m,1-Math.exp(-a*(l.speed>m?3:1.2)));let b=ve(l.s+20).curv,A=Math.sign(b)*1.6+Math.sin(l.s*.012+l.index)*.45;for(let F of ln.values())for(let B of F.entities){if(B.kind!=="barrier"&&B.kind!=="cone")continue;let Y=B.s+(B.ds||0),rt=B.l+(B.dl||0),gt=Ct(Y,l.s);gt>0&&gt<28&&Math.abs(A-rt)<2.1&&(A=rt>0?-2.8:2.8)}let C=l.l;l.l=V(l.l,A,1-Math.exp(-a*2.3)),l.yaw=Math.atan2((l.l-C)/a,Math.max(5,l.speed))+R(b*12,-.4,.4),l.s+=l.speed*a,l.s>=$()&&(l.s=$(),l.finishAt=ui,$s??=ui)}if(ee==="circuit"&&!st.room&&(co+=a,co>=.1&&(co=0,lo.push([Number(Nt().toFixed(3)),Number(_.s.toFixed(3)),Number(_.l.toFixed(3)),Number(_.yaw.toFixed(4)),Number(_.jump.toFixed(3))]))),ee==="circuit"){for(;_.s>=ys*S/3&&ys<=j().laps*3;){ho.push(Nt());let l=vs?.splits?.[ys-1];if(U("splitLabel").textContent="SECTOR "+((ys-1)%3+1)+" / 3",l){let d=Nt()-l;U("splitDelta").textContent=(d>0?"+":"\u2212")+Math.abs(d).toFixed(2)+" s",U("splitDelta").style.color=d>0?"#f1b8c6":"#b9edcf"}else U("splitDelta").textContent="\u5206\u6BB5 "+Wt(Nt()-(ho[ys-2]||0));ys++}if(_.s>=Kr*S){let l=Ks.reduce((d,m)=>d+m,0);Ks.push(Nt()-l),U("lapTimeLabel").textContent="\u4E0A\u4E00\u5708 "+Wt(Ks.at(-1)),Kr<j().laps&&gn("LAP "+(Kr+1),"\u4E0A\u4E00\u5708 "+Wt(Ks.at(-1)),1.5),Kr++}}if($s!==null&&ui-$s>30&&_.s<$()){xs=!0,Mc();return}uo+=a,uo>.18&&(uo=0,fo())},fo=function(){if(st.room){U("localPosition").textContent="ONLINE",U("eventLabel").textContent="\u597D\u53CB\u623F\u95F4 \xB7 "+st.room.code;return}let a=ne==="finished",l={time:a&&!xs?Nt():null,s:_.s},d=1+Wn.filter(m=>a?Ru({time:m.finishAt,s:m.s},l)<=0:m.finishAt!==null||m.s>_.s).length;U("localPosition").textContent=Wn.length?"POS "+d+" / 4":Ai==="practice"?"PRACTICE":"TIME ATTACK",U("eventLabel").textContent=a?xs?"\u672A\u5B8C\u8D5B":ee==="endless"?"\u5DE1\u6E38\u7ED3\u675F":"\u5DF2\u5B8C\u8D5B":$s!==null?"\u5B8C\u8D5B\u5012\u8BA1\u65F6 "+Math.max(0,30-Math.floor(ui-$s))+" s":ee==="endless"?"\u65E0\u5C3D\u5DE1\u6E38":j().name},Ru=function(a,l){return a.time===null&&l.time===null?l.s-a.s:a.time===null?1:l.time===null?-1:a.time-l.time},Pu=function(a){let l=Tn(ve(a+62).h-ve(a+32).h);return{turn:l,direction:Math.abs(l)<.05?0:Math.sign(l),currentCurve:ve(a).curv}},Iu=function(a=Pu(_.s)){let l=a.direction>0?"\u53F3\u5F2F":a.direction<0?"\u5DE6\u5F2F":"",d=_.smallJets>0&&_.smallWindow>0,m="W / \u2191 \u52A0\u901F\uFF0C\u89C2\u5BDF\u524D\u65B9\u5F2F\u9053\u3002";_.drifting&&_.driftPhase==="counter"?m="\u53CD\u6253\u6536\u8F66\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\u3002":""):_.drifting&&_.driftPhase==="release"||_.driftPhase==="exit"&&_.exitTime>0?m="\u6536\u6F02\u4E2D\uFF1A\u5148\u7A33\u4F4F\u65B9\u5411\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\uFF0C\u8F66\u5934\u7A33\u5B9A\u540E\u8854\u63A5\u3002":""):_.drifting?m=_.driftPhase==="entry"?"\u8D77\u6F02\u4E2D\uFF1A\u5C0F\u5E45\u8F6C\u5411\uFF0C\u51C6\u5907\u53CD\u6253\u6536\u8F66\u3002":"\u6F02\u79FB\u4E2D\uFF1A\u53CD\u6309\u65B9\u5411\u6536\u8F66\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002":d?m="\u5C0F\u55B7 \xD7"+_.smallJets+"\uFF1A\u8F66\u5934\u7A33\u5B9A\u540E\u70B9\u7A7A\u683C / Q\u3002"+(_.smallJets>1?"\u8FDE\u7EED\u4E24\u6B21\u53EF\u53CC\u55B7\u3002":""):_.nitroTime>0?m="\u6C2E\u6C14\u55B7\u5C04\u4E2D\uFF1A"+(l?"\u524D\u65B9"+l+"\uFF0C\u7A33\u4F4F\u65B9\u5411\u3002":"\u4FDD\u6301\u8DEF\u7EBF\uFF0C\u65E0\u9700\u91CD\u590D\u6309 E / C\u3002"):_.speed>10&&(l?m="\u524D\u65B9"+l+"\uFF1A\u5148\u6536\u6CB9\u63A7\u901F\uFF0C\u5E73\u987A\u8F6C\u5411\u3002":_.nitro>0&&_.speed>15&&Math.abs(a.currentCurve)<.006?m="\u524D\u65B9\u76F4\u9053\uFF1A\u8F66\u8EAB\u7A33\u5B9A\u540E\uFF0C\u53EF\u9009 E / C \u6C2E\u6C14\u3002":m="\u524D\u65B9\u76F4\u9053\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u7559\u610F\u4E0B\u4E00\u5F2F\u3002"),U("coach").textContent=m},Lu=function(){let a=st.room?st.members.filter(l=>l.id!==st.id).map(l=>({name:l.name,time:l.snapshot?.finished?l.snapshot.time:null,s:l.snapshot?.s||0})):Wn.map(l=>({name:l.name,time:l.finishAt,s:l.s}));if(a.push({name:Qe.name+"\uFF08\u4F60\uFF09",time:xs?null:Nt(),s:_.s}),a.sort(Ru),U("resultGrid").replaceChildren(),a.length>1)for(let l=0;l<a.length;l++){let d=document.createElement("div");d.className="result-row";let m=document.createElement("span"),b=document.createElement("b");m.textContent=l+1+". "+a[l].name,b.textContent=a[l].time===null?st.room?.status==="racing"?"\u6BD4\u8D5B\u4E2D":"\u672A\u5B8C\u8D5B":Wt(a[l].time),d.append(m,b),U("resultGrid").appendChild(d)}},hp=function(){if(ki=!1,Lu(),fo(),xs)U("resultDistance").textContent="DNF",U("resultNote").textContent="\u672C\u5C40\u672A\u80FD\u5728\u5012\u8BA1\u65F6\u7ED3\u675F\u524D\u5B8C\u8D5B\uFF0C\u53EF\u4EE5\u518D\u6311\u6218\u4E00\u6B21\u3002",U("submitRun").disabled=!0,Wr=null;else if(!st.room&&ee==="circuit"&&lo.length>10&&(!vs||Nt()<vs.time))try{localStorage.setItem(Eu(),JSON.stringify({time:Nt(),points:lo,splits:ho,laps:Ks,date:Date.now()})),U("resultNote").textContent="\u5237\u65B0\u672C\u673A\u6700\u4F73\uFF01\u5DF2\u4FDD\u5B58\u5E7D\u7075\uFF0C\u53EF\u5728\u8BA1\u65F6\u6311\u6218\u4E2D\u8FFD\u9010\u81EA\u5DF1\u3002"}catch{}U("coach").hidden=!0},up=function(a,l){Gi=null;for(let d of Wn){let m=ve(d.s);d.node.local=at(O(De(d.s,d.l,.07),a),[.97,.97,.97],[0,-m.h-d.yaw,Math.atan(m.slope)]),N.add(d.node);for(let b=0;b<Le.length;b++){let A=Le[b];d.node.children[2+b].local=Z(tt(A.x,.41,A.z),ot(-d.s/.4))}}if(Vi&&vs?.points?.length&&ne==="running"){let d=vs.points,m=Nt();for(;Zs<d.length-2&&d[Zs+1][0]<m;)Zs++;let b=d[Zs],A=d[Zs+1],C=R((m-b[0])/(A[0]-b[0]||1),0,1),F=V(b[1],A[1],C),B=V(b[2],A[2],C),Y=b[3]+Tn(A[3]-b[3])*C,rt=V(b[4],A[4],C);Gi={s:F,l:B,yaw:Y,jump:rt};let gt=ve(F);Vi.local=at(O(De(F,B,.07+rt),a),[.97,.97,.97],[0,-gt.h-Y,0]),N.add(Vi)}if(nn.line&&ne==="running")for(let d=0;d<Lc.length;d++){let m=_.s+12+d*9,b=ve(m),A=R(b.curv*80,-2.1,2.1),C=Lc[d];C.mesh=Au[Math.abs(b.curv)*_.speed>.95?1:0],C.local=at(O(De(m,A,.085),a),[1,1,1],[0,-b.h,0]),N.add(C)}},dp=function(a,l){let d=a-Du;if(Du=a,d>0&&d<1e3&&js.push(d),js.length>180&&js.shift(),Dc+=l,Dc<.25)return;Dc=0;let m=js.reduce((C,F)=>C+F,0)/(js.length||1),b=[...js].sort((C,F)=>C-F),A=b[Math.floor(b.length*.95)]||0;U("diagnostics").textContent="REBORN / "+(h?"Canvas compatibility":"Three.js WebGL 2")+`
FPS `+Math.round(1e3/(m||16.7))+" | frame p95 "+A.toFixed(1)+` ms
`+(h?"WebGL draw/triangles: n/a":"Draw "+Ic.drawCalls+" | triangles "+Ic.triangles)+`
State `+ne+" | event "+Ai+`
s `+_.s.toFixed(1)+" / "+$().toFixed(1)+" | l "+_.l.toFixed(2)+`
speed `+(_.speed*3.6).toFixed(1)+` km/h
steer `+Ws.toFixed(2)+" | slip "+(Tn(_.yaw-_.velocityYaw)*180/Math.PI).toFixed(1)+`\xB0
drift `+_.driftPhase+" | small "+_.smallJets+" | nitro "+_.nitro+`
ready `+(st.ready?"yes":"no")+" | peers "+st.peers.size+(_e?.rail?`
rail `+Object.values(_e.rail.status().states).join("/")+" | "+_e.rail.status().last+" #"+_e.rail.status().played:"")},fp=function(a){if(zi=null,ki&&ne==="running"){let b=0;for(let gt=15;gt<=90;gt+=10)b=Math.max(b,Math.abs(ve(_.s+gt).curv));let A=R(.85/Math.max(.012,b),14,48),C=ve(_.s),F=De(_.s+R(_.speed*.45,12,26),0,0),B=O(F,De(_.s,_.l,0)),Y=Math.atan2(L(B,C.R),L(B,C.T)),rt=Tn(Y-_.velocityYaw);zi=R((rt*3+ve(_.s+12).curv*_.speed)/1.04,-1,1),Ce.brake=_.speed>A+1.5,Ce.gas=!Ce.brake;return}let l=navigator.getGamepads?.()[0];if(!l){Uc&&(zs(),Nc={},Uc=!1);return}Uc=!0,zs();let d=Math.abs(l.axes[0]||0)>.13?l.axes[0]:0;d&&(zi=d);let m={gas:l.buttons[7]?.value>.13,brake:l.buttons[6]?.value>.13,drift:!!l.buttons[2]?.pressed,small:!!l.buttons[0]?.pressed,boost:!!l.buttons[1]?.pressed};for(let[b,A]of Object.entries(m))Ce[b]||=A,A&&!Nc[b]&&b in Gn&&Gn[b]++;Nc=m},$r=function(){try{localStorage.setItem("star-rush-settings-reborn",JSON.stringify(nn))}catch{}},po=function(){Qe.name=U("profileName").value.trim().slice(0,16)||Qe.name;try{localStorage.setItem("star-rush-profile",JSON.stringify(Qe)),localStorage.setItem("star-rush-name",Qe.name)}catch{}U("carName").textContent=Qe.car;for(let a of["roomName","racerName","profileName"])U(a).value=Qe.name;U("profileStatus").textContent="\u5DF2\u4FDD\u5B58 \xB7 "+Qe.name,Rt.tint=Qe.paint},Fc=function(){for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).checked=!!nn[l];U("qualitySetting").value=nn.quality,U("steeringSetting").value=nn.sensitivity*100,U("fovSetting").value=nn.fov,U("settingsStatus").textContent=h?"\u5F53\u524D\u6D4F\u89C8\u5668\u4F7F\u7528\u517C\u5BB9\u663E\u793A\u6A21\u5F0F\uFF0C\u6BD4\u8D5B\u903B\u8F91\u548C\u64CD\u4F5C\u4FDD\u6301\u4E00\u81F4\u3002":"Three.js 3D \u6E32\u67D3 \xB7 \u8BBE\u7F6E\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5728\u6B64\u8BBE\u5907\u3002"},Uu=function(){if(st.room){Zr();return}ki=!1,ne="ready",Qn(!1),Wn=[],Vi=null,fs(),U("welcome").hidden=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("coach").hidden=!0,Fi.classList.add("menu-open"),U("countdown").hidden=!0},mp=function(){for(let a of document.querySelectorAll("[data-track]")){let l=Kn[a.dataset.track],d=a.querySelector("svg");if(!l||!d)continue;let m=l.points.map(Mt=>Mt[0]),b=l.points.map(Mt=>Mt[2]),A=Math.min(...m),C=Math.max(...m),F=Math.min(...b),B=Math.max(...b),Y=Math.min(140/(C-A),54/(B-F)),rt=l.points.map(Mt=>[80+(Mt[0]-(A+C)/2)*Y,35+(Mt[2]-(F+B)/2)*Y]),gt=document.createElementNS("http://www.w3.org/2000/svg","path");gt.setAttribute("d",rt.map((Mt,Tt)=>(Tt?"L":"M")+Mt.join(",")).join(" ")+"Z"),gt.setAttribute("fill","none"),gt.setAttribute("stroke",l.biome?"#eabfd8":"#a9d8ec"),gt.setAttribute("stroke-width","3"),gt.setAttribute("stroke-linejoin","round"),d.replaceChildren(gt);let ft=document.createElementNS("http://www.w3.org/2000/svg","circle");ft.setAttribute("cx",rt[0][0]),ft.setAttribute("cy",rt[0][1]),ft.setAttribute("r","3"),ft.setAttribute("fill","#ffe2ac"),d.appendChild(ft)}},o=bf(i);i=o.canvas;let c=o.threeBackend,h=o.software,u=o.softwareContext,v=new WeakMap,P=Math.PI,x=P*2,p=(a=0,l=0,d=0)=>[a,l,d],I=(a,l)=>a.map((d,m)=>d+l[m]),O=(a,l)=>a.map((d,m)=>d-l[m]),E=(a,l)=>a.map(d=>d*l),L=(a,l)=>a[0]*l[0]+a[1]*l[1]+a[2]*l[2],D=(a,l)=>[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],z=a=>Math.hypot(...a),w=a=>E(a,1/(z(a)||1)),R=(a,l,d)=>Math.min(d,Math.max(l,a)),V=(a,l,d)=>a+(l-a)*d,J=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),mt={green:"#7fb86c",light:"#a7d27d",dark:"#407750",spine:"#4c8056",belly:"#dfdb96",eye:"#fff2cf",iris:"#325f43",coral:"#df8064",rim:"#f2be8e",rubber:"#344b42",metal:"#b7c8b1",wood:"#b78c57",gold:"#d6b471",cream:"#f1ead2",grass:"#b7cc90",white:"#fff4d7",earth:"#b4976d",water:"#91c6b8",leaf:"#85ad74"},ue=new Map,Ue=Xt(),ge=Xt(12,8),ke=ie(),Ze=ie(8),mn=ie(10,0),We=ie(4,0),Ie=J();class G{constructor(){this.data=[],this.indices=[]}add(l,d=Ie,m=mt.green,b=.13){let A=typeof m=="string"?Re(m):m,C=ht(d),F=this.data.length/10;for(let B=0;B<l.p.length;B+=3){let Y=et(d,l.p.slice(B,B+3)),rt=dt(C,l.n.slice(B,B+3));this.data.push(...Y,...rt,...A,b)}for(let B of l.i)this.indices.push(F+B);return this}finish(l=!1){return new on(this.data,this.indices,l)}}class on{constructor(l,d){this.sourceData=new Float32Array(l),this.sourceIndices=new Uint32Array(d),this.count=d.length}update(l){this.sourceData=new Float32Array(l)}dispose(){this.onDispose&&this.onDispose()}}class re{constructor(l=null,d=Ie){this.mesh=l,this.local=d,this.children=[],this.shadow=!0,this.world=Ie}add(l){return this.children.push(l),l}}let N=new re,y=new G,K=new G,Lt=73121,Rt=N.add(new re),St=new G,$t="#83cde4",Zt="#eff0f6",te="#9c8ad5",H="#343952",Dt="#ed94bd",xt="#f8d1b5",Pt="#a3a9e5",kt="#7479b7";k(St,[0,.47,0],[3.15,.43,1.42],$t,.16),k(St,[.9,.68,0],[1.4,.27,1.42],Zt,.13,[0,0,-.065],.5),k(St,[.96,.83,0],[1.08,.035,.14],te,.015,[0,0,-.065],.5),k(St,[0,.38,0],[3.3,.15,1.48],H,.07),k(St,[1.53,.31,0],[.5,.075,1.9],te,.035),k(St,[-1.4,.39,0],[.45,.22,1.55],te,.07);for(let a of[-.7,.7]){k(St,[-.15,.64,a],[2.55,.35,.29],$t,.12,[0,0,0],.45),k(St,[.1,.81,a],[1.55,.05,.2],Zt,.02),k(St,[-.17,.69,a*1.19],[.62,.19,.032],H,.02,[0,0,-.12]);for(let l=0;l<4;l++)k(St,[-.38+l*.12,.69,a*1.22],[.035,.13,.015],"#758ab5",.007,[0,0,-.15]);k(St,[1.54,.66,a*.75],[.055,.14,.33],"#fff0b9",.035,[0,0,-.1],.65),k(St,[-1.57,.62,a*.79],[.035,.12,.28],Dt,.035,[0,0,0],.6),k(St,[-1.32,.85,a*.83],[.07,.55,.07],H,.02),k(St,[-1.38,1.13,a*1.34],[.43,.16,.055],te,.025)}k(St,[1.6,.44,0],[.04,.15,.67],H,.03);for(let a=0;a<5;a++)k(St,[1.63,.44,(a-2)*.115],[.014,.1,.024],"#6d7990",.006);k(St,[-1.37,1.12,0],[.38,.065,1.94],Zt,.03),k(St,[-1.37,1.16,0],[.18,.018,1.68],te,.007),k(St,[-.42,.77,0],[1.05,.08,.94],H,.05),k(St,[-.69,1,0],[.18,.53,.64],H,.08,[0,0,-.12]),k(St,[-.6,1.23,0],[.18,.15,.5],te,.05),k(St,[.28,.94,0],[.075,.26,.91],"#bedde9",.025,[0,0,-.33],.6);for(let a of[-.75,.75])_t(St,[.22,.91,a*.84],[.31,1.04,a*1.1],.018,H),q(St,[.31,1.04,a*1.11],[.13,.055,.09],Zt,!0,.6);_t(St,[.35,.82,0],[.1,1.08,0],.035,H),St.add(Bt(.16,.025,28,8),at([.1,1.08,0],[1,1,1],[0,P/2,-.35]),H,.2);for(let a of[-.34,.34])St.add(ke,at([-1.64,.43,a],[.085,.2,.085],[0,0,P/2]),"#9babc2",.75);q(St,[-.42,1.04,0],[.24,.29,.22],te),q(St,[-.36,1.29,0],[.095,.1,.09],xt,!0);for(let a of[-1,1]){let l=[-.38,1.17,a*.22],d=[-.13,1.02,a*.29],m=[.09,1.09,a*.14];_t(St,l,d,.075,te,.14,!0),_t(St,d,m,.06,te,.14,!0),q(St,m,[.085,.065,.065],Zt,!0)}k(St,[-.18,1.08,0],[.05,.31,.08],Zt,.01);let bt=Rt.add(new re(St.finish()));bt.mesh.paintable=!0;let zt=new G;q(zt,[0,0,0],[.335,.355,.3],xt),q(zt,[-.19,-.01,0],[.2,.35,.32],kt),q(zt,[-.025,.19,0],[.37,.255,.33],Pt);for(let a of[-1,1])q(zt,[-.035,-.04,a*.29],[.13,.28,.095],Pt),q(zt,[.308,.025,a*.13],[.02,.1,.067],Zt,!0),q(zt,[.326,.023,a*.13],[.012,.075,.043],"#5c72a5",!0,.4),q(zt,[.338,.015,a*.13],[.008,.048,.027],"#303c65",!0),q(zt,[.347,.058,a*.135],[.008,.02,.018],"#fffaf1",!0,.6),q(zt,[.296,-.1,a*.2],[.014,.038,.045],"#e9a6ab",!0),ct(zt,[[.32,.132,a*.075],[.322,.148,a*.13],[.31,.132,a*.19]],.011,kt),Et(zt,[.215,.165,a*.18],[.1,.24,.085],Pt,[0,0,P+.2]),zt.add(Bt(.084,.014,24,7),at([.33,.24,a*.125],[1,1,1],[0,P/2,0]),"#e8c58c",.6),q(zt,[.335,.24,a*.125],[.012,.064,.066],"#a0d8e8",!0,.6);ct(zt,[[.317,-.148,-.037],[.326,-.16,0],[.317,-.148,.037]],.009,"#b77787"),zt.add(Bt(.313,.02,40,7),at([-.025,.225,0],[1.05,1,1],[P/2,0,0]),H),Et(zt,[.26,.17,-.04],[.1,.25,.08],Pt,[0,0,P+.25]);let Kt=Rt.add(new re(zt.finish())),Le=[];for(let a of[-1.02,1.06])for(let l of[-1,1]){let d=new G;d.add(Bt(.315,.095,40,12),Ie,"#343b4c",.22),d.add(Bt(.255,.027,32,8),tt(0,0,l*.075),"#e4e6ef",.7),d.add(ke,at([0,0,l*.07],[.238,.07,.238],[P/2,0,0]),"#4d5576",.35);for(let b=0;b<5;b++){let A=b*x/5;_t(d,[0,0,l*.116],[.23*Math.cos(A),.23*Math.sin(A),l*.116],.025,Zt,.65)}q(d,[0,0,l*.14],[.075,.075,.022],te,!0,.6);let m=Rt.add(new re(d.finish()));Le.push({n:m,x:a,z:l*.83,front:a>0})}let we=[];for(let a of[-1,1]){let l=new G;q(l,[0,0,0],[.65,.105,.105],"#a6f4ff",!0,.8),q(l,[-.3,0,0],[.35,.065,.065],"#e9d1ff",!0,.7);let d=Rt.add(new re(l.finish()));d.shadow=!1,we.push({n:d,side:a})}let hn=new G;k(hn,[0,.36,0],[.6,.72,2.1],"#ef97aa",.08),k(hn,[0,.78,0],[.69,.16,2.2],Zt,.035);for(let a=0;a<5;a++)k(hn,[.312,.4,(a-2)*.38],[.018,.29,.16],"#fff0c7",.015,[.28,0,0]);for(let a of[-.85,.85])_t(hn,[0,.05,a],[0,.77,a],.045,"#636986");let zn=hn.finish(),Ds=new G;k(Ds,[0,.07,0],[.8,.12,.8],H,.04),Et(Ds,[0,.49,0],[.28,.78,.28],"#e4b281"),Et(Ds,[0,.53,0],[.2,.16,.2],Zt);let uc=Ds.finish(),Ns=new G;Ns.add(Bt(.34,.068,28,8),at([0,0,0],[1,1,1],[0,P/2,0]),"#f0d085",.7),q(Ns,[0,0,0],[.04,.22,.22],"#ffe7a7",!0,.55);let Dr=Ns.finish(),Us=new G;k(Us,[0,.025,0],[5.5,.045,3],"#7ecadc",.02);for(let a=0;a<3;a++){let l=-1.8+a*1.6;_t(Us,[l-.45,.075,-.9],[l+.35,.075,0],.055,"#eef9d0",.3),_t(Us,[l+.35,.075,0],[l-.45,.075,.9],.055,"#eef9d0",.3)}let Ga=Us.finish(),Fs=new G,Jn=[-2.5,0,-1.6,2.5,0,-1.6,2.5,1,-1.6,-2.5,0,1.6,2.5,0,1.6,2.5,1,1.6],Zn=[0,1,2,3,5,4,0,2,5,0,5,3,1,4,5,1,5,2],Os=[],Nr=[],ls=[];for(let a=0;a<Zn.length;a+=3){let l=Jn.slice(Zn[a]*3,Zn[a]*3+3),d=Jn.slice(Zn[a+1]*3,Zn[a+1]*3+3),m=Jn.slice(Zn[a+2]*3,Zn[a+2]*3+3),b=w(D(O(d,l),O(m,l))),A=Os.length/3;Os.push(...l,...d,...m),Nr.push(...b,...b,...b),ls.push(A,A+1,A+2)}Fs.add(vt(Os,Nr,ls),Ie,"#d9b1e0");for(let a of[-1.4,1.4])_t(Fs,[-2.5,.06,a],[2.5,1.06,a],.045,Zt);let Ha=Fs.finish(),Bs=new G().add(ge,Ie,"#b4eaff",.2).finish(),cs=Array.from({length:45},()=>({life:0,p:[0,0,0],v:[0,0,0],size:.1,node:new re(Bs)}));for(let a of cs)a.node.shadow=!1;let ee="circuit",en="coast-reborn",Xa="coast-reborn",Kn={"coast-reborn":{name:"\u6C50\u89C1\u6D77\u5CB8",laps:1,biome:0,difficulty:"\u5165\u95E8 \xB7 \u9AD8\u901F\u7EC4\u5408\u5F2F",description:"\u6C50\u89C1\u7AD9\u524D \u2192 \u6D77\u6EE8\u5546\u5E97\u8857 \u2192 \u795E\u793E\u5C71\u9053 \u2192 \u6E2F\u6E7E S \u5F2F",sectors:[{at:0,name:"\u6C50\u89C1\u7AD9\u524D"},{at:.22,name:"\u6D77\u6EE8\u5546\u5E97\u8857"},{at:.48,name:"\u6E2F\u6E7E S \u5F2F"},{at:.66,name:"\u795E\u793E\u5C71\u9053"},{at:.82,name:"\u6D77\u98CE\u5927\u9053"}],points:[[-155,0,70],[-80,0,70],[0,.2,70],[85,.7,65],[135,1.2,30],[130,1.6,-20],[75,2,-28],[38,1.8,0],[0,1.5,-10],[8,.8,-58],[65,.2,-80],[115,0,-85],[130,.4,-125],[75,1,-150],[0,1.6,-145],[-60,2,-100],[-110,1.2,-135],[-155,.5,-100],[-200,0,-25],[-218,0,28],[-215,0,70]]},"sakura-reborn":{name:"\u82B1\u89C1\u5742",laps:2,biome:1,difficulty:"\u8FDB\u9636 \xB7 \u8FDE\u7EED\u53CD\u5411\u5F2F",description:"\u6A31\u82B1\u6821\u95E8 \u2192 \u82B1\u89C1\u5742\u5546\u5E97\u8857 \u2192 \u795E\u793E\u53C2\u9053 \u2192 \u6CB3\u5CB8\u56DE\u73AF",sectors:[{at:0,name:"\u6A31\u82B1\u7AD9\u524D"},{at:.22,name:"\u82B1\u89C1\u5742\u5546\u5E97\u8857"},{at:.47,name:"\u6CB3\u5CB8\u56DE\u73AF"},{at:.66,name:"\u795E\u793E\u53C2\u9053"},{at:.83,name:"\u6A31\u82B1\u5927\u9053"}],points:[[-180,0,70],[-95,0,70],[0,0,70],[95,.4,62],[170,1,16],[160,1.6,-45],[100,2,-70],[55,2.2,-30],[5,2,-55],[-16,1,-110],[-80,.5,-130],[-145,0,-104],[-220,0,-45],[-230,0,25],[-230,0,70]]}};Kn["academy-reborn"]={name:"\u661F\u8DC3\u8BAD\u7EC3\u573A",laps:1,biome:1,difficulty:"\u57FA\u7840\u9A7E\u9A76",description:"\u5BBD\u7F13\u5F2F\u9053 \xB7 \u6E05\u6670\u89C6\u91CE \xB7 \u7EC3\u4E60\u8D77\u6F02\u3001\u53CD\u6253\u4E0E\u51FA\u5F2F\u55B7\u5C04",sectors:[{at:0,name:"\u57FA\u7840\u76F4\u9053"},{at:.33,name:"\u6F02\u79FB\u5F27\u7EBF"},{at:.66,name:"\u51FA\u5F2F\u52A0\u901F"}],points:[[-100,0,65],[0,0,65],[100,0,65],[145,.3,25],[145,.4,-25],[100,.2,-65],[0,0,-65],[-100,0,-65],[-145,.1,-25],[-145,.1,25]]};for(let[a,l]of Object.entries(Kn)){let d=a==="coast-reborn"?1.45:a==="sakura-reborn"?1.5:1.2;l.points=l.points.map(m=>[m[0]*d,m[1],m[2]*d])}let un=[],S=0,W={};Ft();let fe=220,Yt=245,Me=1.57,Ge=.91,ze=8.045,xe=(a,l)=>a[0]*l[0]+a[1]*l[1],Ke=(a,l)=>a[0]*l[1]-a[1]*l[0],wn=new Map,hi=null,eu=null,dc=[],Nf=bi("petal",a=>k(a,[0,0,0],[.12,.025,.075],"#ffd2e8",.025)),_e=null,Nn=!0,kf=(()=>{let a=(A,C,F)=>Math.min(F,Math.max(C,A)),l=(A,C,F)=>A+(C-A)*F,d=A=>Math.atan2(Math.sin(A),Math.cos(A)),m=Object.freeze({cruise:52,mini:63,nitro:76,combo:83,normalTurn:1.04,driftTurn:1.8,driveAcceleration:27,jetAcceleration:36});function b(A,C,F,B={}){let Y=Math.hypot(A.vS,A.vL),rt=Y>.05?Math.atan2(A.vL,A.vS):A.yaw,gt=a(Number(C.steer)||0,-1,1),ft=B.sensitivity||1,Mt=A.vS*Math.cos(A.yaw)+A.vL*Math.sin(A.yaw)<-.05;A.steering=l(A.steering||0,gt,1-Math.exp(-F*26));let Tt=!!A.drifting,It=A.driftSide||Math.sign(gt)||1,ce=Tt&&gt*It<-.1,pt=Tt&&A.driftReleasing,lt=A.steering*m.normalTurn*ft*a(Y/8,0,1)*(Mt?-1:1);if(Tt){let gp=Math.max(0,A.steering*It),_p=It*(ce?.4:.52+gp*(m.driftTurn-.52)),xp=pt?a((A.releaseAge||0)/.38,0,1):0;lt=l(_p,lt,xp)*a(Y/9,0,1)}A.jump>.2&&(lt*=.35),A.turnRate=l(A.turnRate||0,lt,1-Math.exp(-F*(Tt?13:19)));let At=d(rt+A.turnRate*F),Ut=d(rt-(Mt?Math.PI:0)),qt=d(A.yaw-Ut),wt=Tt?It*(ce?.015:pt?.12:.22+.38*Math.max(0,gt*It)):A.steering*.025;pt&&(wt*=1-a((A.releaseAge||0)/.45,0,1));let Je=ce?13:Tt?9:8;qt=l(qt,wt,1-Math.exp(-F*Je)),A.yaw=d(At-(Mt?Math.PI:0)+qt+(A.spin||0)*F),A.spin=(A.spin||0)*Math.exp(-F*6);let Ve=Y,En=.7+Y*.018+Y*Y*45e-5,$e=A.nitroTime>0||A.mini>0||A.pad>0,Ms=A.nitroTime>0?A.comboTimer>0?m.combo:m.nitro:A.pad>0?73:A.mini>0?m.mini:m.cruise,Qs=C.gas&&!C.brake?a((m.cruise-Ve)*2.8,0,m.driveAcceleration):0,tr=$e&&!C.brake?a((Ms-Ve)*2.8,0,m.jetAcceleration):0,Hi=Tt?(ce?1.3:3.3)*Math.abs(qt):0;return Ve=Math.max(0,Ve+(Qs+tr-En-Hi)*F),!$e&&Ve>m.cruise&&(Ve=Math.max(m.cruise,Ve-Math.min(8,(Ve-m.cruise)*.7)*F)),C.brake&&(Ve=Math.max(0,Ve-36*F)),Mt&&C.gas&&(Ve=Math.max(0,Ve-32*F)),C.brake&&!C.gas&&(Y<1.3||Mt)?(A.vS=l(A.vS,-Math.cos(A.yaw)*5,1-Math.exp(-F*5)),A.vL=l(A.vL,-Math.sin(A.yaw)*5,1-Math.exp(-F*5))):(A.vS=Math.cos(At)*Ve,A.vL=Math.sin(At)*Ve),A.speed=Math.hypot(A.vS,A.vL),A.velocityYaw=At,A.lateralSpeed=A.vL,{slip:qt,counter:ce,thrust:tr,boost:$e,speed:A.speed}}return{step:b,config:m,wrap:d}})(),Tn=a=>Math.atan2(Math.sin(a),Math.cos(a)),U=a=>document.getElementById(a),Fi=U("game"),Ce={gas:!1,brake:!1,left:!1,right:!1,drift:!1,boost:!1,small:!1},Za=new Set,Ka=new Map,Gn={drift:0,boost:0,small:0},mc=[{name:"\u6C50\u89C1\u6D77\u5CB8",ground:"#cbdcbd",tree:"#b9d5bb",accent:"#afc8e4",fog:"#c8deef"},{name:"\u82B1\u89C1\u5742",ground:"#d9d7c7",tree:"#f0bfd5",accent:"#c9c1e5",fog:"#dcdff1"},{name:"\u661F\u5149\u5CE1\u8C37",ground:"#c4b8c3",tree:"#a7a5d3",accent:"#d8b4d8",fog:"#dbdce8"}],_={s:0,l:0,speed:0,yaw:0,velocityYaw:0,energy:0,coins:0,score:0,inv:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,wallRecover:0,wallSide:0,stuckTime:0},$a=1/120,qx=7.02,su=new Map,gc=null,hs=0,Vs=60,Ur=0,us=null,Wf=new G().add(He(1,.009,.12,.003),Ie,"#414957",.01).finish(),ds=Array.from({length:160},()=>({life:0,p:[0,0,0],angle:0,length:1,node:new re(Wf)}));for(let a of ds)a.node.shadow=!1;let Xf=0,ne="ready",Gs=(Date.now()>>>0)%999999||24681,ja=1,$n=[],Fr=0,_c=-P/2,xc=100,Qa=0,ln=new Map,vc=0,ui=0,Hs=0,to=performance.now(),Oi=3,Hn=0,Ws=0,Or=0,Br=0,ru=!1,eo=!1,kr=0,no=0;try{kr=Number(localStorage.getItem("star-rush-best-distance")||0),no=Number(localStorage.getItem("star-rush-best-score")||0)}catch{}let di=Object.fromEntries(["distance","score","coins","speed","gear","energyText","biome","turnText","turnArrowPath","driftText"].map(a=>[a,U(a)])),qs=null,zr=null,ps=null,bc=U("minimap"),Qt=bc.getContext("2d"),wc=0,io={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"small",KeyQ:"small",ShiftLeft:"drift",ShiftRight:"drift",KeyE:"boost",KeyC:"boost"};window.addEventListener("keydown",a=>{if(!a.target.closest("input,select,textarea")){if(a.code==="Escape"){for(let l of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])if(!U(l).hidden){_s(l);return}}if(!["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)){if(io[a.code]&&(a.preventDefault(),Za.add(a.code),zs()),a.code==="Backspace"){a.preventDefault(),a.repeat||Sc(!1);return}a.repeat||(a.code==="F2"&&(a.preventDefault(),U("diagnostics").hidden=!U("diagnostics").hidden),(a.code==="KeyP"||a.code==="Escape")&&Bi(),a.code==="KeyV"&&(Hn=(Hn+1)%3,gn("CAMERA "+(Hn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Hn],1)),a.code==="KeyR"&&Xs(!1),a.code==="Enter"&&(ne==="ready"||ne==="finished"?Xs(!1):ne==="paused"&&Bi()))}}}),window.addEventListener("keyup",a=>{["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)||io[a.code]&&(a.preventDefault(),Za.delete(a.code),zs())}),window.addEventListener("blur",()=>{fs(),ne==="running"&&Bi()});for(let a of document.querySelectorAll("[data-key]")){a.addEventListener("pointerdown",d=>{d.preventDefault(),a.setPointerCapture(d.pointerId),Ka.set(d.pointerId,a.dataset.key),zs(),a.classList.add("held")});let l=d=>{Ka.delete(d.pointerId),zs(),a.classList.remove("held")};for(let d of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(d,l)}U("endRunBtn").onclick=()=>{ee==="endless"&&(ne==="running"||ne==="paused")&&(U("paused").hidden=!0,Mc())},U("recoverBtn").onclick=()=>Sc(!1),U("startBtn").onclick=()=>Xs(!1),U("retryBtn").onclick=()=>Xs(!1),U("newRouteBtn").onclick=()=>{if(typeof st<"u"&&st.room){Zr();return}ne="ready",Qn(!0),U("finished").hidden=!0,U("welcome").hidden=!1},U("rerollBtn").onclick=()=>Qn(!0),U("pauseBtn").onclick=Bi,U("resumeBtn").onclick=Bi,U("restartPause").onclick=()=>Xs(!1),U("viewBtn").onclick=()=>{Hn=(Hn+1)%3,gn("CAMERA "+(Hn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Hn],1)},U("soundBtn").onclick=()=>{Ya(),Nn=!Nn,_e&&_e.ctx.resume().catch(()=>{}),U("soundBtn").textContent=Nn?"\u266B":"\u266A",U("soundBtn").setAttribute("aria-label",Nn?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),U("soundBtn").title=Nn?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED",Nn&&Ui(600)};let jf=["#a1cddd","#c2d4bc"].map(a=>new G().add(He(1100,.16,1100,.04),Ie,a,.02).finish()),so=new re,Vr=[],Gr=1,Hr=1;new ResizeObserver(du).observe(i),du(),Qn(!1),i.addEventListener("webglcontextlost",a=>{a.preventDefault(),n("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u6E38\u620F\u3002")}),document.addEventListener("visibilitychange",()=>{document.hidden&&ne==="running"&&Bi(),to=performance.now()}),requestAnimationFrame(fu);let ms=en,Wr=null,wi="circuit",Ti=!1,Tc=0;async function Xr(){let a=++Tc,l=U("rankRows");U("rankTrack")&&(U("rankTrack").hidden=wi!=="circuit"),l.replaceChildren(),U("rankStatus").textContent=Ti?"\u672C\u673A\u8BB0\u5F55":"\u6B63\u5728\u83B7\u53D6\u5728\u7EBF\u6210\u7EE9\u2026";for(let[d,m]of[["boardCircuit","circuit"],["boardEndless","endless"]])U(d).classList.toggle("selected",!Ti&&wi===m);U("boardLocal").classList.toggle("selected",Ti);try{let d;if(Ti)d=pu().filter(m=>m.mode===wi&&(m.mode==="endless"||m.track===ms)).sort((m,b)=>wi==="circuit"?m.timeMs-b.timeMs:b.distance-m.distance).slice(0,20);else{let m=await fetch("/api/leaderboard?mode="+wi+"&track="+encodeURIComponent(ms));if(!m.ok)throw new Error("\u699C\u5355\u670D\u52A1\u6682\u4E0D\u53EF\u7528");d=(await m.json()).runs}if(a!==Tc)return;for(let m=0;m<d.length;m++)l.appendChild(tp(m,d[m]));U("rankStatus").textContent=d.length?(Ti?"\u5F53\u524D\u8BBE\u5907 \xB7 ":"\u5728\u7EBF \xB7 ")+(wi==="circuit"?Kn[ms].name+" / "+Kn[ms].laps+" \u5708 / \u6309\u6700\u5FEB\u7528\u65F6":"\u65E0\u5C3D\u6A21\u5F0F / \u6309\u6700\u8FDC\u91CC\u7A0B"):"\u8FD8\u6CA1\u6709\u6210\u7EE9\uFF0C\u6765\u8DD1\u7B2C\u4E00\u5708\u3002"}catch{if(a!==Tc)return;U("rankStatus").textContent="\u5728\u7EBF\u699C\u6682\u65F6\u672A\u80FD\u52A0\u8F7D\uFF0C\u53EF\u5207\u6362\u201C\u672C\u673A\u8BB0\u5F55\u201D\u3002"}}U("rankBtn").onclick=ep,U("closeRank").onclick=()=>_s("rankPanel"),U("boardCircuit").onclick=()=>{wi="circuit",Ti=!1,Xr()},U("boardEndless").onclick=()=>{wi="endless",Ti=!1,Xr()},U("boardLocal").onclick=()=>{Ti=!0,Xr()},U("circuitMode").onclick=()=>mu("circuit"),U("endlessMode").onclick=()=>mu("endless");try{U("racerName").value=localStorage.getItem("star-rush-name")||""}catch{}U("submitRun").onclick=async()=>{if(!Wr)return;let a=U("racerName").value.trim().slice(0,16)||"\u533F\u540D\u8F66\u624B";try{localStorage.setItem("star-rush-name",a)}catch{}U("submitRun").disabled=!0,U("uploadStatus").textContent="\u6B63\u5728\u4E0A\u4F20\u6210\u7EE9\u2026";try{if(!(await fetch("/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...Wr,name:a})})).ok)throw new Error;U("submitRun").textContent="\u5DF2\u4E0A\u4F20",U("uploadStatus").textContent="\u4E0A\u4F20\u6210\u529F\uFF01\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u699C\u201D\u67E5\u770B\u548C\u670B\u53CB\u7684\u6392\u540D\u3002"}catch{U("submitRun").disabled=!1,U("uploadStatus").textContent="\u6682\u65F6\u672A\u80FD\u4E0A\u4F20\uFF0C\u672C\u673A\u6210\u7EE9\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u91CD\u8BD5\u3002"}};for(let a of document.querySelectorAll("[data-track]"))a.onclick=()=>gu(a.dataset.track);qr();let Ys=document.createElement("select");Ys.id="rankTrack",Ys.setAttribute("aria-label","\u6392\u884C\u699C\u8D5B\u9053");for(let[a,l]of Object.entries(Kn)){let d=document.createElement("option");d.value=a,d.textContent=l.name,Ys.appendChild(d)}U("rankStatus").before(Ys),Ys.onchange=()=>{ms=Ys.value,Xr()};let An={enabled:!0,volume:.4,sfxVolume:.75};try{Object.assign(An,JSON.parse(localStorage.getItem("star-rush-audio")||"{}"))}catch{}let ae={mode:"synth",bus:null,step:0,next:0,files:[],index:0,url:null,element:null},Jr=!1;U("musicBtn").onclick=()=>{Yr(),Js("musicPanel")},U("closeMusic").onclick=()=>_s("musicPanel"),U("helpBtn").onclick=U("welcomeHelp").onclick=()=>Js("helpPanel"),U("closeHelp").onclick=()=>_s("helpPanel"),U("synthMusic").onclick=()=>ro("synth"),U("classicMusic").onclick=()=>ro("classic"),U("musicFiles").onchange=a=>{ae.files=Array.from(a.target.files||[]),ao(0)},U("nextSong").onclick=()=>ao(ae.index+1),U("previousSong").onclick=()=>ao(ae.index-1),U("musicToggle").onclick=()=>{Yr(),An.enabled=!An.enabled,U("musicToggle").textContent=An.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",Ac()},U("musicVolume").value=Math.round(An.volume*100),U("sfxVolume").value=Math.round(An.sfxVolume*100),U("musicToggle").textContent=An.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",U("musicVolume").oninput=a=>{An.volume=Number(a.target.value)/100,Ac()},U("sfxVolume").oninput=a=>{An.sfxVolume=Number(a.target.value)/100,Ac()},U("classicTrack").onchange=()=>{ro("classic"),U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"};let st={id:crypto.randomUUID(),room:null,members:[],ready:!1,busy:!1,lastSync:0,offset:0,startAt:0,runTag:0,peers:new Map,errors:0,rtt:0,session:0},oo=["#f6aec9","#ffd88b","#baafff","#a8efce"],ip=oo.map(a=>{let l=new G;return Et(l,[0,2.55,0],[.14,.28,.14],a,[0,0,P]),l.finish()});async function Cc(a,l={}){let d=Date.now(),m=await fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:a,id:st.id,code:st.room?.code||U("roomCode").value.trim(),name:U("roomName").value.trim()||"\u533F\u540D\u8F66\u624B",track:en,...l}),signal:AbortSignal.timeout(4e3)}),b=await m.json();if(!m.ok)throw new Error(b.error||"\u623F\u95F4\u8BF7\u6C42\u5931\u8D25");if(st.rtt=Date.now()-d,b.serverTime){let A=b.serverTime-(d+Date.now())/2;st.offset=st.room?V(st.offset,A,.25):A}return b}async function yu(a){if(!st.busy){st.busy=!0,U("roomStatus").textContent="\u6B63\u5728\u8FDE\u63A5\u623F\u95F4\u2026";try{let l=await Cc(a);st.session++,vu(),en=l.room.track,ee="circuit",Qn(!1),qr(),Rc(l),ne="ready",Jr=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Fi.classList.add("menu-open");try{localStorage.setItem("star-rush-name",U("roomName").value.trim())}catch{}}catch(l){U("roomStatus").textContent=l.message}finally{st.busy=!1}}}async function Mu(a,l={}){if(st.busy)return;st.busy=!0;let d=st.session;try{let m=await Cc(a,l);d===st.session&&st.room&&Rc(m)}catch(m){U("roomStatus").textContent=m.message}finally{st.busy=!1}}async function rp(){if(!st.room)return;let a={action:"leave",id:st.id,code:st.room.code,name:U("roomName").value};st.session++,st.room=null,st.startAt=0,st.runTag=0,st.members=[],vu(),ne="ready",Qn(!1),U("finished").hidden=!0,U("paused").hidden=!0,U("countdown").hidden=!0,U("welcome").hidden=!1,Fi.classList.add("menu-open"),Pc(),fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),keepalive:!0}).catch(()=>{})}U("roomBtn").onclick=U("welcomeRoom").onclick=Zr,U("closeRoom").onclick=()=>_s("roomPanel"),U("createRoom").onclick=()=>yu("create"),U("joinRoom").onclick=()=>yu("join"),U("readyRoom").onclick=()=>Mu("ready",{ready:!st.ready}),U("startRoom").onclick=()=>Mu(st.room?.status!=="lobby"?"reset":"start"),U("leaveRoom").onclick=rp,U("copyRoom").onclick=async()=>{if(!st.room)return;let a=new URL(location.href);a.searchParams.set("room",st.room.code);try{await navigator.clipboard.writeText(a.toString()),U("roomStatus").textContent="\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5373\u53EF\u52A0\u5165"}catch{U("roomStatus").textContent="\u623F\u95F4\u7801 "+st.room.code+" \xB7 \u590D\u5236\u6D4F\u89C8\u5668\u5730\u5740\u5E76\u52A0\u4E0A ?room="+st.room.code}};try{U("roomName").value=localStorage.getItem("star-rush-name")||"\u8F66\u624B"+Math.floor(100+Math.random()*900)}catch{}let wu=new URLSearchParams(location.search).get("room");wu&&(U("roomCode").value=wu.toUpperCase().slice(0,6),Zr()),window.addEventListener("pagehide",()=>{st.room&&navigator.sendBeacon("/api/rooms",new Blob([JSON.stringify({action:"leave",id:st.id,code:st.room.code})],{type:"application/json"}))});let Wn=[],ki=!1,zi=null,Ic={drawCalls:0,triangles:0},xs=!1,vs=null,Vi=null,Gi=null,Zs=0,lo=[],co=0,ho=[],Ks=[],ys=1,Kr=1,$s=null,uo=0,op=["Aoi / AI","Haru / AI","Rin / AI"],Tu=["#f0a7c8","#b6a7e6","#f1cd90"],Au=["#a5dbe6","#f0b7c3"].map(a=>{let l=new G;return _t(l,[-.6,.03,-.38],[.1,.03,0],.055,a),_t(l,[.1,.03,0],[-.6,.03,.38],.055,a),l.finish()}),Lc=Array.from({length:9},()=>new re(Au[0]));for(let a of Lc)a.shadow=!1;let js=[],Dc=0,Du=performance.now(),Nc={},Uc=!1,Nu={quality:"auto",sensitivity:1,fov:62,autoGas:!1,line:!0,ghost:!0},nn={...Nu},Qe={name:"\u8F66\u624B"+Math.floor(100+Math.random()*900),paint:"#83cde4",car:"Mint Comet"},Ai="race";try{Object.assign(nn,JSON.parse(localStorage.getItem("star-rush-settings-reborn")||"{}")),Object.assign(Qe,JSON.parse(localStorage.getItem("star-rush-profile")||"{}")),Qe.name=localStorage.getItem("star-rush-name")||Qe.name}catch{}let pp=[["Mint Comet","#83cde4","\u8584\u8377\u5F57\u661F"],["Sakura Bloom","#efabc8","\u6A31\u82B1\u7EFD\u653E"],["Violet Hour","#b1a0df","\u66AE\u8272\u7D2B"],["Solar Flare","#edc784","\u65E5\u5149\u91D1"]];U("settingsBtn").onclick=()=>{Fc(),Js("settingsPanel")},U("closeSettings").onclick=()=>_s("settingsPanel");for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).onchange=d=>{nn[l]=d.target.checked,$r()};U("qualitySetting").onchange=a=>{nn.quality=a.target.value,$r()},U("steeringSetting").oninput=a=>{nn.sensitivity=Number(a.target.value)/100,$r()},U("fovSetting").oninput=a=>{nn.fov=Number(a.target.value),$r()},U("resetSettings").onclick=()=>{nn={...Nu},$r(),Fc()};for(let[a,l,d]of pp){let m=document.createElement("button");m.type="button",m.style.setProperty("--paint",l),m.setAttribute("aria-label",d+"\u6D82\u88C5");let b=document.createElement("i"),A=document.createElement("b"),C=document.createElement("small");A.textContent=a,C.textContent=d,m.append(b,A,C),m.onclick=()=>{Qe.paint=l,Qe.car=a;for(let F of U("garageGrid").children)F.classList.toggle("selected",F===m);po()},Qe.paint===l&&m.classList.add("selected"),U("garageGrid").appendChild(m)}U("garageBtn").onclick=()=>Js("garagePanel"),U("closeGarage").onclick=()=>_s("garagePanel"),U("saveProfile").onclick=po,U("profileName").value=Qe.name,po(),U("eventType").onchange=a=>{Ai=a.target.value,Ai==="practice"&&gu("academy-reborn")},U("pauseHome").onclick=Uu,U("newRouteBtn").onclick=Uu,U("demoBtn").onclick=()=>{Xs(!1),ki=!0,gn("DEMO DRIVE","\u81EA\u52A8\u8BD5\u9A7E \xB7 \u6309\u4EFB\u610F\u65B9\u5411\u952E\u63A5\u7BA1",2)},window.addEventListener("keydown",a=>{a.target.closest("input,select,textarea")||["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a.code)&&ki&&(ki=!1,zi=null,gn("YOUR TURN","\u5DF2\u63A5\u7BA1\u8D5B\u8F66",1))}),U("compatNotice").hidden=!h,mp(),Fc(),fo();for(let a of["racerName","roomName"])U(a).addEventListener("change",()=>{U("profileName").value=U(a).value,po()});wf(document,{"coast-reborn":"/assets/course-art/coast-v2.bd2e4837727f.webp","sakura-reborn":"/assets/course-art/sakura-v1.3b94eedaa6d8.webp","academy-reborn":"/assets/course-art/academy-v1.9c6071e18e14.webp"})}catch(o){console.error(o),n("\u6E38\u620F\u521D\u59CB\u5316\u5F02\u5E38\uFF1A"+o.message)}})();})();
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
