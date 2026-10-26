(()=>{function Uu(i,t,e,{fetchImpl:n=globalThis.fetch,timeoutMs:s=5e3}={}){let r=new Map,o={light:"idle",medium:"idle"},c=new Set,h=null,u=!1,g="none",v=0,f=new Set;function M(){return h||(h=Promise.all(["light","medium"].map(async p=>{if(u)return;o[p]="loading";let I=new AbortController;f.add(I);let O;try{let E=(async()=>{if(typeof e[p]!="string"||!e[p].startsWith("/assets/impact-audio/"))throw Error("Missing rail asset");let D=await n(e[p],{signal:I.signal});if(!D.ok)throw Error("Rail asset HTTP error");let z=await D.arrayBuffer();if(z.byteLength>5e4)throw Error("Rail asset oversized");let T=await i.decodeAudioData(z);if(!(T.duration>0&&T.duration<=1)||T.numberOfChannels!==1)throw Error("Invalid rail clip");return T})(),L=await Promise.race([E,new Promise((D,z)=>{O=setTimeout(()=>{I.abort(),z(Error("Rail asset timeout"))},s)})]);u||(r.set(p,L),o[p]="ready")}catch{u||(o[p]="fallback")}finally{clearTimeout(O),f.delete(I)}})),h)}function w(){for(let p of[...c]){try{p.source.stop()}catch{}p.cleanup()}}function P(p){if(u||i.state!=="running"||!Number.isFinite(p)||p<.7)return!1;let I=p>5?"medium":"light",O=r.get(I);if(!O)return g=I+" fallback",!1;if(c.size>=4){let z=c.values().next().value;try{z.source.stop()}catch{}z.cleanup()}let E,L,D;try{return E=i.createBufferSource(),L=i.createGain(),E.buffer=O,L.gain.value=.15,E.connect(L),L.connect(t),D={source:E,cleanup(){c.delete(D),E.onended=null,E.disconnect(),L.disconnect()}},E.onended=()=>D.cleanup(),c.add(D),E.start(),E.stop(i.currentTime+O.duration+.02),g=I,v++,!0}catch{return D?D.cleanup():(E?.disconnect(),L?.disconnect()),g=I+" fallback",!1}}function x(){u=!0;for(let p of f)p.abort();w(),r.clear()}return{load:M,play:P,stop:w,dispose:x,status:()=>({states:{...o},active:c.size,last:g,played:v})}}var rd=0,dh=1,ad=2;var Ea=1,pl=2,br=3,is=0,pn=1,vi=2,yi=0,Tr=1,fh=2,ph=3,mh=4,od=5;var Rs=100,ld=101,cd=102,hd=103,ud=104,dd=200,fd=201,pd=202,md=203,gh=204,_h=205,gd=206,_d=207,xd=208,vd=209,yd=210,Md=211,Sd=212,bd=213,Td=214,Fo=0,Oo=1,Bo=2,mr=3,ko=4,zo=5,Vo=6,Go=7,xh=0,wd=1,Ad=2,ri=0,vh=1,yh=2,Mh=3,Ca=4,Sh=5,bh=6,Th=7;var wh=300,ss=301,Ps=302,ml=303,gl=304,Ra=306,Ho=1e3,pi=1001,Wo=1002,$e=1003,Ed=1004;var Pa=1005;var fn=1006,_l=1007;var rs=1008;var Dn=1009,Ah=1010,Eh=1011,wr=1012,xl=1013,ai=1014,qn=1015,oi=1016,vl=1017,yl=1018,Ar=1020,Ch=35902,Rh=35899,Ph=1021,Ih=1022,Yn=1023,mi=1026,as=1027,Er=1028,Ml=1029,os=1030,Sl=1031;var bl=1033,Ia=33776,La=33777,Da=33778,Na=33779,Tl=35840,wl=35841,Al=35842,El=35843,Cl=36196,Rl=37492,Pl=37496,Il=37488,Ll=37489,Ua=37490,Dl=37491,Nl=37808,Ul=37809,Fl=37810,Ol=37811,Bl=37812,kl=37813,zl=37814,Vl=37815,Gl=37816,Hl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,Jl=36492,Zl=36494,Kl=36495,$l=36283,jl=36284,Fa=36285,Ql=36286;var sa=2300,Xo=2301,No=2302,rh=2303,ah=2400,oh=2401,lh=2402;var Cd=3200;var tc=0,Rd=1,Ui="",Cn="srgb",ra="srgb-linear",aa="linear",Ne="srgb";var Uo=7680;var Pd=519,Id=512,Ld=513,Dd=514,ec=515,Nd=516,Ud=517,nc=518,Fd=519,Od=35044,Lh=35048;var Dh="300 es",si=2e3,gr=2001;function xp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bd(){let i=oa("canvas");return i.style.display="block",i}var Fu={},_r=null;function Nh(...i){let t="THREE."+i.shift();_r?_r("log",t,...i):console.log(t,...i)}function kd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function se(...i){i=kd(i);let t="THREE."+i.shift();if(_r)_r("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function oe(...i){i=kd(i);let t="THREE."+i.shift();if(_r)_r("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Es(...i){let t=i.join(" ");t in Fu||(Fu[t]=!0,se(...i))}function zd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vd={[Fo]:Oo,[Bo]:Vo,[ko]:Go,[mr]:zo,[Oo]:Fo,[Vo]:Bo,[Go]:ko,[zo]:mr},gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fc=Math.PI/180,qo=180/Math.PI;function Oa(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function yp(i,t){return(i%t+t)%t}function Oc(i,t,e){return(1-e)*i+e*t}function $r(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ae=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_i=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,c){let h=n[s+0],u=n[s+1],g=n[s+2],v=n[s+3],f=r[o+0],M=r[o+1],w=r[o+2],P=r[o+3];if(v!==P||h!==f||u!==M||g!==w){let x=h*f+u*M+g*w+v*P;x<0&&(f=-f,M=-M,w=-w,P=-P,x=-x);let p=1-c;if(x<.9995){let I=Math.acos(x),O=Math.sin(I);p=Math.sin(p*I)/O,c=Math.sin(c*I)/O,h=h*p+f*c,u=u*p+M*c,g=g*p+w*c,v=v*p+P*c}else{h=h*p+f*c,u=u*p+M*c,g=g*p+w*c,v=v*p+P*c;let I=1/Math.sqrt(h*h+u*u+g*g+v*v);h*=I,u*=I,g*=I,v*=I}}t[e]=h,t[e+1]=u,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,o){let c=n[s],h=n[s+1],u=n[s+2],g=n[s+3],v=r[o],f=r[o+1],M=r[o+2],w=r[o+3];return t[e]=c*w+g*v+h*M-u*f,t[e+1]=h*w+g*f+u*v-c*M,t[e+2]=u*w+g*M+c*f-h*v,t[e+3]=g*w-c*v-h*f-u*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,c=Math.cos,h=Math.sin,u=c(n/2),g=c(s/2),v=c(r/2),f=h(n/2),M=h(s/2),w=h(r/2);switch(o){case"XYZ":this._x=f*g*v+u*M*w,this._y=u*M*v-f*g*w,this._z=u*g*w+f*M*v,this._w=u*g*v-f*M*w;break;case"YXZ":this._x=f*g*v+u*M*w,this._y=u*M*v-f*g*w,this._z=u*g*w-f*M*v,this._w=u*g*v+f*M*w;break;case"ZXY":this._x=f*g*v-u*M*w,this._y=u*M*v+f*g*w,this._z=u*g*w+f*M*v,this._w=u*g*v-f*M*w;break;case"ZYX":this._x=f*g*v-u*M*w,this._y=u*M*v+f*g*w,this._z=u*g*w-f*M*v,this._w=u*g*v+f*M*w;break;case"YZX":this._x=f*g*v+u*M*w,this._y=u*M*v+f*g*w,this._z=u*g*w-f*M*v,this._w=u*g*v-f*M*w;break;case"XZY":this._x=f*g*v-u*M*w,this._y=u*M*v-f*g*w,this._z=u*g*w+f*M*v,this._w=u*g*v+f*M*w;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],c=e[5],h=e[9],u=e[2],g=e[6],v=e[10],f=n+c+v;if(f>0){let M=.5/Math.sqrt(f+1);this._w=.25/M,this._x=(g-h)*M,this._y=(r-u)*M,this._z=(o-s)*M}else if(n>c&&n>v){let M=2*Math.sqrt(1+n-c-v);this._w=(g-h)/M,this._x=.25*M,this._y=(s+o)/M,this._z=(r+u)/M}else if(c>v){let M=2*Math.sqrt(1+c-n-v);this._w=(r-u)/M,this._x=(s+o)/M,this._y=.25*M,this._z=(h+g)/M}else{let M=2*Math.sqrt(1+v-n-c);this._w=(o-s)/M,this._x=(r+u)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=e._x,h=e._y,u=e._z,g=e._w;return this._x=n*g+o*c+s*u-r*h,this._y=s*g+o*h+r*c-n*u,this._z=r*g+o*u+n*h-s*c,this._w=o*g-n*c-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=this.dot(t);c<0&&(n=-n,s=-s,r=-r,o=-o,c=-c);let h=1-e;if(c<.9995){let u=Math.acos(c),g=Math.sin(u);h=Math.sin(h*u)/g,e=Math.sin(e*u)/g,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},it=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ou.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,c=t.z,h=t.w,u=2*(o*s-c*n),g=2*(c*e-r*s),v=2*(r*n-o*e);return this.x=e+h*u+o*v-c*g,this.y=n+h*g+c*u-r*v,this.z=s+h*v+r*g-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,c=e.y,h=e.z;return this.x=s*h-r*c,this.y=r*o-n*h,this.z=n*c-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new it,Ou=new _i,le=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,c,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,h,u)}set(t,e,n,s,r,o,c,h,u){let g=this.elements;return g[0]=t,g[1]=s,g[2]=c,g[3]=e,g[4]=r,g[5]=h,g[6]=n,g[7]=o,g[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[3],h=n[6],u=n[1],g=n[4],v=n[7],f=n[2],M=n[5],w=n[8],P=s[0],x=s[3],p=s[6],I=s[1],O=s[4],E=s[7],L=s[2],D=s[5],z=s[8];return r[0]=o*P+c*I+h*L,r[3]=o*x+c*O+h*D,r[6]=o*p+c*E+h*z,r[1]=u*P+g*I+v*L,r[4]=u*x+g*O+v*D,r[7]=u*p+g*E+v*z,r[2]=f*P+M*I+w*L,r[5]=f*x+M*O+w*D,r[8]=f*p+M*E+w*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],g=t[8];return e*o*g-e*c*u-n*r*g+n*c*h+s*r*u-s*o*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],g=t[8],v=g*o-c*u,f=c*h-g*r,M=u*r-o*h,w=e*v+n*f+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/w;return t[0]=v*P,t[1]=(s*u-g*n)*P,t[2]=(c*n-s*o)*P,t[3]=f*P,t[4]=(g*e-s*h)*P,t[5]=(s*r-c*e)*P,t[6]=M*P,t[7]=(n*h-u*e)*P,t[8]=(o*e-n*r)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,c){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*o+u*c)+o+t,-s*u,s*h,-s*(-u*o+h*c)+c+e,0,0,1),this}scale(t,e){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kc.makeScale(t,e)),this}rotate(t){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kc.makeRotation(-t)),this}translate(t,e){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kc=new le,Bu=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){let i={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ne&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ne&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ra]:{primaries:t,whitePoint:n,transfer:aa,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:Ne,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),i}var be=Mp();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var tr,Yo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{tr===void 0&&(tr=oa("canvas")),tr.width=t.width,tr.height=t.height;let s=tr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=tr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=oa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sp=0,xr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Oa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(zc(s[o].image)):r.push(zc(s[o]))}else r=zc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function zc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}var bp=0,Vc=new it,In=class i extends gi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pi,s=pi,r=fn,o=rs,c=Yn,h=Dn,u=i.DEFAULT_ANISOTROPY,g=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Oa(),this.name="",this.source=new xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ho:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ho:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=wh;In.DEFAULT_ANISOTROPY=1;var qe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,u=h[0],g=h[4],v=h[8],f=h[1],M=h[5],w=h[9],P=h[2],x=h[6],p=h[10];if(Math.abs(g-f)<.01&&Math.abs(v-P)<.01&&Math.abs(w-x)<.01){if(Math.abs(g+f)<.1&&Math.abs(v+P)<.1&&Math.abs(w+x)<.1&&Math.abs(u+M+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let O=(u+1)/2,E=(M+1)/2,L=(p+1)/2,D=(g+f)/4,z=(v+P)/4,T=(w+x)/4;return O>E&&O>L?O<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(O),s=D/n,r=z/n):E>L?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=D/s,r=T/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=z/r,s=T/r),this.set(n,s,r,e),this}let I=Math.sqrt((x-w)*(x-w)+(v-P)*(v-P)+(f-g)*(f-g));return Math.abs(I)<.001&&(I=1),this.x=(x-w)/I,this.y=(v-P)/I,this.z=(f-g)/I,this.w=Math.acos((u+M+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this.w=we(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this.w=we(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new In(s),o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new xr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},la=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Oe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,c,h,u,g,v,f,M,w,P,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,h,u,g,v,f,M,w,P,x)}set(t,e,n,s,r,o,c,h,u,g,v,f,M,w,P,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=c,p[13]=h,p[2]=u,p[6]=g,p[10]=v,p[14]=f,p[3]=M,p[7]=w,p[11]=P,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),o=1/er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s),g=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let f=o*g,M=o*v,w=c*g,P=c*v;e[0]=h*g,e[4]=-h*v,e[8]=u,e[1]=M+w*u,e[5]=f-P*u,e[9]=-c*h,e[2]=P-f*u,e[6]=w+M*u,e[10]=o*h}else if(t.order==="YXZ"){let f=h*g,M=h*v,w=u*g,P=u*v;e[0]=f+P*c,e[4]=w*c-M,e[8]=o*u,e[1]=o*v,e[5]=o*g,e[9]=-c,e[2]=M*c-w,e[6]=P+f*c,e[10]=o*h}else if(t.order==="ZXY"){let f=h*g,M=h*v,w=u*g,P=u*v;e[0]=f-P*c,e[4]=-o*v,e[8]=w+M*c,e[1]=M+w*c,e[5]=o*g,e[9]=P-f*c,e[2]=-o*u,e[6]=c,e[10]=o*h}else if(t.order==="ZYX"){let f=o*g,M=o*v,w=c*g,P=c*v;e[0]=h*g,e[4]=w*u-M,e[8]=f*u+P,e[1]=h*v,e[5]=P*u+f,e[9]=M*u-w,e[2]=-u,e[6]=c*h,e[10]=o*h}else if(t.order==="YZX"){let f=o*h,M=o*u,w=c*h,P=c*u;e[0]=h*g,e[4]=P-f*v,e[8]=w*v+M,e[1]=v,e[5]=o*g,e[9]=-c*g,e[2]=-u*g,e[6]=M*v+w,e[10]=f-P*v}else if(t.order==="XZY"){let f=o*h,M=o*u,w=c*h,P=c*u;e[0]=h*g,e[4]=-v,e[8]=u*g,e[1]=f*v+P,e[5]=o*g,e[9]=M*v-w,e[2]=w*v-M,e[6]=c*g,e[10]=P*v+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tp,t,wp)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Wi.crossVectors(n,Un),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Wi.crossVectors(n,Un)),Wi.normalize(),po.crossVectors(Un,Wi),s[0]=Wi.x,s[4]=po.x,s[8]=Un.x,s[1]=Wi.y,s[5]=po.y,s[9]=Un.y,s[2]=Wi.z,s[6]=po.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[4],h=n[8],u=n[12],g=n[1],v=n[5],f=n[9],M=n[13],w=n[2],P=n[6],x=n[10],p=n[14],I=n[3],O=n[7],E=n[11],L=n[15],D=s[0],z=s[4],T=s[8],R=s[12],V=s[1],Y=s[5],J=s[9],tt=s[13],X=s[2],nt=s[6],ht=s[10],ot=s[14],rt=s[3],et=s[7],ct=s[11],ut=s[15];return r[0]=o*D+c*V+h*X+u*rt,r[4]=o*z+c*Y+h*nt+u*et,r[8]=o*T+c*J+h*ht+u*ct,r[12]=o*R+c*tt+h*ot+u*ut,r[1]=g*D+v*V+f*X+M*rt,r[5]=g*z+v*Y+f*nt+M*et,r[9]=g*T+v*J+f*ht+M*ct,r[13]=g*R+v*tt+f*ot+M*ut,r[2]=w*D+P*V+x*X+p*rt,r[6]=w*z+P*Y+x*nt+p*et,r[10]=w*T+P*J+x*ht+p*ct,r[14]=w*R+P*tt+x*ot+p*ut,r[3]=I*D+O*V+E*X+L*rt,r[7]=I*z+O*Y+E*nt+L*et,r[11]=I*T+O*J+E*ht+L*ct,r[15]=I*R+O*tt+E*ot+L*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],c=t[5],h=t[9],u=t[13],g=t[2],v=t[6],f=t[10],M=t[14],w=t[3],P=t[7],x=t[11],p=t[15],I=h*M-u*f,O=c*M-u*v,E=c*f-h*v,L=o*M-u*g,D=o*f-h*g,z=o*v-c*g;return e*(P*I-x*O+p*E)-n*(w*I-x*L+p*D)+s*(w*O-P*L+p*z)-r*(w*E-P*D+x*z)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],c=t[9],h=t[2],u=t[6],g=t[10];return e*(o*g-c*u)-n*(r*g-c*h)+s*(r*u-o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],g=t[8],v=t[9],f=t[10],M=t[11],w=t[12],P=t[13],x=t[14],p=t[15],I=e*c-n*o,O=e*h-s*o,E=e*u-r*o,L=n*h-s*c,D=n*u-r*c,z=s*u-r*h,T=g*P-v*w,R=g*x-f*w,V=g*p-M*w,Y=v*x-f*P,J=v*p-M*P,tt=f*p-M*x,X=I*tt-O*J+E*Y+L*V-D*R+z*T;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let nt=1/X;return t[0]=(c*tt-h*J+u*Y)*nt,t[1]=(s*J-n*tt-r*Y)*nt,t[2]=(P*z-x*D+p*L)*nt,t[3]=(f*D-v*z-M*L)*nt,t[4]=(h*V-o*tt-u*R)*nt,t[5]=(e*tt-s*V+r*R)*nt,t[6]=(x*E-w*z-p*O)*nt,t[7]=(g*z-f*E+M*O)*nt,t[8]=(o*J-c*V+u*T)*nt,t[9]=(n*V-e*J-r*T)*nt,t[10]=(w*D-P*E+p*I)*nt,t[11]=(v*E-g*D-M*I)*nt,t[12]=(c*R-o*Y-h*T)*nt,t[13]=(e*Y-n*R+s*T)*nt,t[14]=(P*O-w*L-x*I)*nt,t[15]=(g*L-v*O+f*I)*nt,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,c=t.y,h=t.z,u=r*o,g=r*c;return this.set(u*o+n,u*c-s*h,u*h+s*c,0,u*c+s*h,g*c+n,g*h-s*o,0,u*h-s*c,g*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,c=e._z,h=e._w,u=r+r,g=o+o,v=c+c,f=r*u,M=r*g,w=r*v,P=o*g,x=o*v,p=c*v,I=h*u,O=h*g,E=h*v,L=n.x,D=n.y,z=n.z;return s[0]=(1-(P+p))*L,s[1]=(M+E)*L,s[2]=(w-O)*L,s[3]=0,s[4]=(M-E)*D,s[5]=(1-(f+p))*D,s[6]=(x+I)*D,s[7]=0,s[8]=(w+O)*z,s[9]=(x-I)*z,s[10]=(1-(f+P))*z,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=er.set(s[0],s[1],s[2]).length(),c=er.set(s[4],s[5],s[6]).length(),h=er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ti.copy(this);let u=1/o,g=1/c,v=1/h;return ti.elements[0]*=u,ti.elements[1]*=u,ti.elements[2]*=u,ti.elements[4]*=g,ti.elements[5]*=g,ti.elements[6]*=g,ti.elements[8]*=v,ti.elements[9]*=v,ti.elements[10]*=v,e.setFromRotationMatrix(ti),n.x=o,n.y=c,n.z=h,this}makePerspective(t,e,n,s,r,o,c=si,h=!1){let u=this.elements,g=2*r/(e-t),v=2*r/(n-s),f=(e+t)/(e-t),M=(n+s)/(n-s),w,P;if(h)w=r/(o-r),P=o*r/(o-r);else if(c===si)w=-(o+r)/(o-r),P=-2*o*r/(o-r);else if(c===gr)w=-o/(o-r),P=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=g,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=v,u[9]=M,u[13]=0,u[2]=0,u[6]=0,u[10]=w,u[14]=P,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,o,c=si,h=!1){let u=this.elements,g=2/(e-t),v=2/(n-s),f=-(e+t)/(e-t),M=-(n+s)/(n-s),w,P;if(h)w=1/(o-r),P=o/(o-r);else if(c===si)w=-2/(o-r),P=-(o+r)/(o-r);else if(c===gr)w=-1/(o-r),P=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=g,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=v,u[9]=0,u[13]=M,u[2]=0,u[6]=0,u[10]=w,u[14]=P,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},er=new it,ti=new Oe,Tp=new it(0,0,0),wp=new it(1,1,1),Wi=new it,po=new it,Un=new it,zu=new Oe,Vu=new _i,Ki=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],c=s[8],h=s[1],u=s[5],g=s[9],v=s[2],f=s[6],M=s[10];switch(e){case"XYZ":this._y=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-we(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-we(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(f,M),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,u),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-g,M),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ap=0,Gu=new it,nr=new _i,Ri=new Oe,mo=new it,jr=new it,Ep=new it,Cp=new _i,Hu=new it(1,0,0),Wu=new it(0,1,0),Xu=new it(0,0,1),qu={type:"added"},Rp={type:"removed"},ir={type:"childadded",child:null},Gc={type:"childremoved",child:null},yn=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new it,e=new Ki,n=new _i,s=new it(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new le}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(Hu,t)}rotateY(t){return this.rotateOnAxis(Wu,t)}rotateZ(t){return this.rotateOnAxis(Xu,t)}translateOnAxis(t,e){return Gu.copy(t).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hu,t)}translateY(t){return this.translateOnAxis(Wu,t)}translateZ(t){return this.translateOnAxis(Xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mo.copy(t):mo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(jr,mo,this.up):Ri.lookAt(mo,jr,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Ri),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qu),ir.child=t,this.dispatchEvent(ir),ir.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rp),Gc.child=t,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qu),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let h=c.shapes;if(Array.isArray(h))for(let u=0,g=h.length;u<g;u++){let v=h[u];r(t.shapes,v)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let h=0,u=this.material.length;h<u;h++)c.push(r(t.materials,this.material[h]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let h=this.animations[c];s.animations.push(r(t.animations,h))}}if(e){let c=o(t.geometries),h=o(t.materials),u=o(t.textures),g=o(t.images),v=o(t.shapes),f=o(t.skeletons),M=o(t.animations),w=o(t.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),g.length>0&&(n.images=g),v.length>0&&(n.shapes=v),f.length>0&&(n.skeletons=f),M.length>0&&(n.animations=M),w.length>0&&(n.nodes=w)}return n.object=s,n;function o(c){let h=[];for(let u in c){let g=c[u];delete g.metadata,h.push(g)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new it(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var As=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pp={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,c=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(let P of t.hand.values()){let x=e.getJointPose(P,n),p=this._getHandJoint(u,P);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let g=u.joints["index-finger-tip"],v=u.joints["thumb-tip"],f=g.position.distanceTo(v.position),M=.02,w=.005;u.inputState.pinching&&f>M+w?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=M-w&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Pp)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new As;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},go={h:0,s:0,l:0};function Hc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var de=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=yp(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hc(o,r,t+1/3),this.g=Hc(o,r,t),this.b=Hc(o,r,t-1/3)}return be.colorSpaceToWorking(this,s),this}setStyle(t,e=Cn){function n(r){r!==void 0&&parseFloat(r)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){let n=Gd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return be.workingToColorSpace(xn.copy(this),t),Math.round(we(xn.r*255,0,255))*65536+Math.round(we(xn.g*255,0,255))*256+Math.round(we(xn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(xn.copy(this),e);let n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),c=Math.min(n,s,r),h,u,g=(c+o)/2;if(c===o)h=0,u=0;else{let v=o-c;switch(u=g<=.5?v/(o+c):v/(2-o-c),o){case n:h=(s-r)/v+(s<r?6:0);break;case s:h=(r-n)/v+2;break;case r:h=(n-s)/v+4;break}h/=6}return t.h=h,t.s=u,t.l=g,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=Cn){be.workingToColorSpace(xn.copy(this),t);let e=xn.r,n=xn.g,s=xn.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(go);let n=Oc(Xi.h,go.h,e),s=Oc(Xi.s,go.s,e),r=Oc(Xi.l,go.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new de;de.NAMES=Gd;var ha=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ua=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new it,Pi=new it,Wc=new it,Ii=new it,sr=new it,rr=new it,Yu=new it,Xc=new it,qc=new it,Yc=new it,Jc=new qe,Zc=new qe,Kc=new qe,Zi=class i{constructor(t=new it,e=new it,n=new it){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ei.subVectors(t,e),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ei.subVectors(s,e),Pi.subVectors(n,e),Wc.subVectors(t,e);let o=ei.dot(ei),c=ei.dot(Pi),h=ei.dot(Wc),u=Pi.dot(Pi),g=Pi.dot(Wc),v=o*u-c*c;if(v===0)return r.set(0,0,0),null;let f=1/v,M=(u*h-c*g)*f,w=(o*g-c*h)*f;return r.set(1-M-w,w,M)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,s,r,o,c,h){return this.getBarycoord(t,e,n,s,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ii.x),h.addScaledVector(o,Ii.y),h.addScaledVector(c,Ii.z),h)}static getInterpolatedAttribute(t,e,n,s,r,o){return Jc.setScalar(0),Zc.setScalar(0),Kc.setScalar(0),Jc.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,n),Kc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Jc,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector(Kc,r.z),o}static isFrontFacing(t,e,n,s){return ei.subVectors(n,e),Pi.subVectors(t,e),ei.cross(Pi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ei.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,c;sr.subVectors(s,n),rr.subVectors(r,n),Xc.subVectors(t,n);let h=sr.dot(Xc),u=rr.dot(Xc);if(h<=0&&u<=0)return e.copy(n);qc.subVectors(t,s);let g=sr.dot(qc),v=rr.dot(qc);if(g>=0&&v<=g)return e.copy(s);let f=h*v-g*u;if(f<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(sr,o);Yc.subVectors(t,r);let M=sr.dot(Yc),w=rr.dot(Yc);if(w>=0&&M<=w)return e.copy(r);let P=M*u-h*w;if(P<=0&&u>=0&&w<=0)return c=u/(u-w),e.copy(n).addScaledVector(rr,c);let x=g*w-M*v;if(x<=0&&v-g>=0&&M-w>=0)return Yu.subVectors(r,s),c=(v-g)/(v-g+(M-w)),e.copy(s).addScaledVector(Yu,c);let p=1/(x+P+f);return o=P*p,c=f*p,e.copy(n).addScaledVector(sr,o).addScaledVector(rr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xi=class{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_o.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(t.matrixWorld),this.union(_o)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qr),xo.subVectors(this.max,Qr),ar.subVectors(t.a,Qr),or.subVectors(t.b,Qr),lr.subVectors(t.c,Qr),qi.subVectors(or,ar),Yi.subVectors(lr,or),Ss.subVectors(ar,lr);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-Ss.z,Ss.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,Ss.z,0,-Ss.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-Ss.y,Ss.x,0];return!$c(e,ar,or,lr,xo)||(e=[1,0,0,0,1,0,0,0,1],!$c(e,ar,or,lr,xo))?!1:(vo.crossVectors(qi,Yi),e=[vo.x,vo.y,vo.z],$c(e,ar,or,lr,xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Li=[new it,new it,new it,new it,new it,new it,new it,new it],ni=new it,_o=new xi,ar=new it,or=new it,lr=new it,qi=new it,Yi=new it,Ss=new it,Qr=new it,xo=new it,vo=new it,bs=new it;function $c(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);let c=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),h=t.dot(bs),u=e.dot(bs),g=n.dot(bs);if(Math.max(-Math.max(h,u,g),Math.min(h,u,g))>c)return!1}return!0}var tn=new it,yo=new Ae,Ip=0,On=class extends gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Od,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$r(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$r(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$r(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$r(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$r(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array),r=Pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var da=class extends On{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fa=class extends On{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var sn=class extends On{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lp=new xi,ta=new it,jc=new it,$i=class{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ta.subVectors(t,this.center);let e=ta.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ta,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ta.copy(t.center).add(jc)),this.expandByPoint(ta.copy(t.center).sub(jc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Dp=0,Xn=new Oe,Qc=new yn,cr=new it,Fn=new xi,ea=new xi,cn=new it,Bn=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xp(t)?fa:da)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let c=e[r];ea.setFromBufferAttribute(c),this.morphTargetsRelative?(cn.addVectors(Fn.min,ea.min),Fn.expandByPoint(cn),cn.addVectors(Fn.max,ea.max),Fn.expandByPoint(cn)):(Fn.expandByPoint(ea.min),Fn.expandByPoint(ea.max))}Fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let c=e[r],h=this.morphTargetsRelative;for(let u=0,g=c.count;u<g;u++)cn.fromBufferAttribute(c,u),h&&(cr.fromBufferAttribute(t,u),cn.add(cr)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new On(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let c=[],h=[];for(let T=0;T<n.count;T++)c[T]=new it,h[T]=new it;let u=new it,g=new it,v=new it,f=new Ae,M=new Ae,w=new Ae,P=new it,x=new it;function p(T,R,V){u.fromBufferAttribute(n,T),g.fromBufferAttribute(n,R),v.fromBufferAttribute(n,V),f.fromBufferAttribute(r,T),M.fromBufferAttribute(r,R),w.fromBufferAttribute(r,V),g.sub(u),v.sub(u),M.sub(f),w.sub(f);let Y=1/(M.x*w.y-w.x*M.y);isFinite(Y)&&(P.copy(g).multiplyScalar(w.y).addScaledVector(v,-M.y).multiplyScalar(Y),x.copy(v).multiplyScalar(M.x).addScaledVector(g,-w.x).multiplyScalar(Y),c[T].add(P),c[R].add(P),c[V].add(P),h[T].add(x),h[R].add(x),h[V].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let T=0,R=I.length;T<R;++T){let V=I[T],Y=V.start,J=V.count;for(let tt=Y,X=Y+J;tt<X;tt+=3)p(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}let O=new it,E=new it,L=new it,D=new it;function z(T){L.fromBufferAttribute(s,T),D.copy(L);let R=c[T];O.copy(R),O.sub(L.multiplyScalar(L.dot(R))).normalize(),E.crossVectors(D,R);let Y=E.dot(h[T])<0?-1:1;o.setXYZW(T,O.x,O.y,O.z,Y)}for(let T=0,R=I.length;T<R;++T){let V=I[T],Y=V.start,J=V.count;for(let tt=Y,X=Y+J;tt<X;tt+=3)z(t.getX(tt+0)),z(t.getX(tt+1)),z(t.getX(tt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,M=n.count;f<M;f++)n.setXYZ(f,0,0,0);let s=new it,r=new it,o=new it,c=new it,h=new it,u=new it,g=new it,v=new it;if(t)for(let f=0,M=t.count;f<M;f+=3){let w=t.getX(f+0),P=t.getX(f+1),x=t.getX(f+2);s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,P),o.fromBufferAttribute(e,x),g.subVectors(o,r),v.subVectors(s,r),g.cross(v),c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),c.add(g),h.add(g),u.add(g),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(P,h.x,h.y,h.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,M=e.count;f<M;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),g.subVectors(o,r),v.subVectors(s,r),g.cross(v),n.setXYZ(f+0,g.x,g.y,g.z),n.setXYZ(f+1,g.x,g.y,g.z),n.setXYZ(f+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(c,h){let u=c.array,g=c.itemSize,v=c.normalized,f=new u.constructor(h.length*g),M=0,w=0;for(let P=0,x=h.length;P<x;P++){c.isInterleavedBufferAttribute?M=h[P]*c.data.stride+c.offset:M=h[P]*g;for(let p=0;p<g;p++)f[w++]=u[M++]}return new On(f,g,v)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let h=s[c],u=t(h,n);e.setAttribute(c,u)}let r=this.morphAttributes;for(let c in r){let h=[],u=r[c];for(let g=0,v=u.length;g<v;g++){let f=u[g],M=t(f,n);h.push(M)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],g=[];for(let v=0,f=u.length;v<f;v++){let M=u[v];g.push(M.toJSON(t.data))}g.length>0&&(s[h]=g,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let g=s[u];this.setAttribute(u,g.clone(e))}let r=t.morphAttributes;for(let u in r){let g=[],v=r[u];for(let f=0,M=v.length;f<M;f++)g.push(v[f].clone(e));this.morphAttributes[u]=g}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let u=0,g=o.length;u<g;u++){let v=o[u];this.addGroup(v.start,v.count,v.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var th=new it,Np=new it,Up=new le,ii=class{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=th.subVectors(n,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(th),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Up.getNormalMatrix(t),s=this.coplanarPoint(th).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Fp=0,ji=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=Tr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let h=r[c];delete h.metadata,o.push(h)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Di=new it,eh=new it,Mo=new it,So=new it,Ko=class{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eh.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),So.copy(this.origin).sub(eh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Mo),c=So.dot(this.direction),h=-So.dot(Mo),u=So.lengthSq(),g=Math.abs(1-o*o),v,f,M,w;if(g>0)if(v=o*h-c,f=o*c-h,w=r*g,v>=0)if(f>=-w)if(f<=w){let P=1/g;v*=P,f*=P,M=v*(v+o*f+2*c)+f*(o*v+f+2*h)+u}else f=r,v=Math.max(0,-(o*f+c)),M=-v*v+f*(f+2*h)+u;else f=-r,v=Math.max(0,-(o*f+c)),M=-v*v+f*(f+2*h)+u;else f<=-w?(v=Math.max(0,-(-o*r+c)),f=v>0?-r:Math.min(Math.max(-r,-h),r),M=-v*v+f*(f+2*h)+u):f<=w?(v=0,f=Math.min(Math.max(-r,-h),r),M=f*(f+2*h)+u):(v=Math.max(0,-(o*r+c)),f=v>0?r:Math.min(Math.max(-r,-h),r),M=-v*v+f*(f+2*h)+u);else f=o>0?-r:r,v=Math.max(0,-(o*f+c)),M=-v*v+f*(f+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(eh).addScaledVector(Mo,f),M}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);let n=Di.dot(this.direction),s=Di.dot(Di)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,h=n+o;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,c,h,u=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),g>=0?(r=(t.min.y-f.y)*g,o=(t.max.y-f.y)*g):(r=(t.max.y-f.y)*g,o=(t.min.y-f.y)*g),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),v>=0?(c=(t.min.z-f.z)*v,h=(t.max.z-f.z)*v):(c=(t.max.z-f.z)*v,h=(t.min.z-f.z)*v),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,c=this.direction,h=c.x,u=c.y,g=c.z,v=t.x-o.x,f=t.y-o.y,M=t.z-o.z,w=e.x-o.x,P=e.y-o.y,x=e.z-o.z,p=n.x-o.x,I=n.y-o.y,O=n.z-o.z,E=Math.abs(h),L=Math.abs(u),D=Math.abs(g),z,T,R,V,Y,J,tt,X,nt,ht,ot,rt;if(E>=L&&E>=D?(R=h,J=v,nt=w,rt=p,h>=0?(z=u,T=g,V=f,Y=M,tt=P,X=x,ht=I,ot=O):(z=g,T=u,V=M,Y=f,tt=x,X=P,ht=O,ot=I)):L>=D?(R=u,J=f,nt=P,rt=I,u>=0?(z=g,T=h,V=M,Y=v,tt=x,X=w,ht=O,ot=p):(z=h,T=g,V=v,Y=M,tt=w,X=x,ht=p,ot=O)):(R=g,J=M,nt=x,rt=O,g>=0?(z=h,T=u,V=v,Y=f,tt=w,X=P,ht=p,ot=I):(z=u,T=h,V=f,Y=v,tt=P,X=w,ht=I,ot=p)),R===0)return null;let et=z/R,ct=T/R,ut=1/R,Vt=V-et*J,Jt=Y-ct*J,Be=tt-et*nt,ye=X-ct*nt,Re=ht-et*rt,pt=ot-ct*rt,_t=Re*ye-pt*Be,Xt=Vt*pt-Jt*Re,ie=Be*Jt-ye*Vt;if(s){if(_t<0||Xt<0||ie<0)return null}else if((_t<0||Xt<0||ie<0)&&(_t>0||Xt>0||ie>0))return null;let Bt=_t+Xt+ie;if(Bt===0)return null;let ue=ut*(_t*J+Xt*nt+ie*rt);return(Bt>0?ue<0:ue>0)?null:this.at(ue/Bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pa=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ju=new Oe,Ts=new Ko,bo=new $i,Zu=new it,To=new it,wo=new it,Ao=new it,nh=new it,Eo=new it,Ku=new it,Co=new it,Mn=class extends yn{constructor(t=new Bn,e=new pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){Eo.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let g=c[h],v=r[h];g!==0&&(nh.fromBufferAttribute(v,t),o?Eo.addScaledVector(nh,g):Eo.addScaledVector(nh.sub(e),g))}e.add(Eo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(bo.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(bo,Zu)===null||Ts.origin.distanceToSquared(Zu)>(t.far-t.near)**2))&&(Ju.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,c=r.index,h=r.attributes.position,u=r.attributes.uv,g=r.attributes.uv1,v=r.attributes.normal,f=r.groups,M=r.drawRange;if(c!==null)if(Array.isArray(o))for(let w=0,P=f.length;w<P;w++){let x=f[w],p=o[x.materialIndex],I=Math.max(x.start,M.start),O=Math.min(c.count,Math.min(x.start+x.count,M.start+M.count));for(let E=I,L=O;E<L;E+=3){let D=c.getX(E),z=c.getX(E+1),T=c.getX(E+2);s=Ro(this,p,t,n,u,g,v,D,z,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),P=Math.min(c.count,M.start+M.count);for(let x=w,p=P;x<p;x+=3){let I=c.getX(x),O=c.getX(x+1),E=c.getX(x+2);s=Ro(this,o,t,n,u,g,v,I,O,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let w=0,P=f.length;w<P;w++){let x=f[w],p=o[x.materialIndex],I=Math.max(x.start,M.start),O=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let E=I,L=O;E<L;E+=3){let D=E,z=E+1,T=E+2;s=Ro(this,p,t,n,u,g,v,D,z,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),P=Math.min(h.count,M.start+M.count);for(let x=w,p=P;x<p;x+=3){let I=x,O=x+1,E=x+2;s=Ro(this,o,t,n,u,g,v,I,O,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Op(i,t,e,n,s,r,o,c){let h;if(t.side===pn?h=n.intersectTriangle(o,r,s,!0,c):h=n.intersectTriangle(s,r,o,t.side===is,c),h===null)return null;Co.copy(c),Co.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Co);return u<e.near||u>e.far?null:{distance:u,point:Co.clone(),object:i}}function Ro(i,t,e,n,s,r,o,c,h,u){i.getVertexPosition(c,To),i.getVertexPosition(h,wo),i.getVertexPosition(u,Ao);let g=Op(i,t,e,n,To,wo,Ao,Ku);if(g){let v=new it;Zi.getBarycoord(Ku,To,wo,Ao,v),s&&(g.uv=Zi.getInterpolatedAttribute(s,c,h,u,v,new Ae)),r&&(g.uv1=Zi.getInterpolatedAttribute(r,c,h,u,v,new Ae)),o&&(g.normal=Zi.getInterpolatedAttribute(o,c,h,u,v,new it),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));let f={a:c,b:h,c:u,normal:new it,materialIndex:0};Zi.getNormal(To,wo,Ao,f.normal),g.face=f,g.barycoord=v}return g}var Cs=class extends In{constructor(t=null,e=1,n=1,s,r,o,c,h,u=$e,g=$e,v,f){super(null,o,c,h,u,g,s,r,v,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ma=class extends On{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hr=new Oe,$u=new Oe,Po=[],ju=new xi,Bp=new Oe,na=new Mn,ia=new $i,ga=class extends Mn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ma(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),ju.copy(t.boundingBox).applyMatrix4(hr),this.boundingBox.union(ju)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),ia.copy(t.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(ia)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let c=0;c<n.length;c++)n[c]=s[o+c]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(na.geometry=this.geometry,na.material=this.material,na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(n),t.ray.intersectsSphere(ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),$u.multiplyMatrices(n,hr),na.matrixWorld=$u,na.raycast(t,Po);for(let o=0,c=Po.length;o<c;o++){let h=Po[o];h.instanceId=r,h.object=this,e.push(h)}Po.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ma(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cs(new Float32Array(s*this.count),s,this.count,Er,qn));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let c=this.geometry.morphTargetsRelative?1:1-o,h=s*t;return r[h]=c,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ws=new $i,kp=new Ae(.5,.5),Io=new it,yr=class{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si,n=!1){let s=this.planes,r=t.elements,o=r[0],c=r[1],h=r[2],u=r[3],g=r[4],v=r[5],f=r[6],M=r[7],w=r[8],P=r[9],x=r[10],p=r[11],I=r[12],O=r[13],E=r[14],L=r[15];if(s[0].setComponents(u-o,M-g,p-w,L-I).normalize(),s[1].setComponents(u+o,M+g,p+w,L+I).normalize(),s[2].setComponents(u+c,M+v,p+P,L+O).normalize(),s[3].setComponents(u-c,M-v,p-P,L-O).normalize(),n)s[4].setComponents(h,f,x,E).normalize(),s[5].setComponents(u-h,M-f,p-x,L-E).normalize();else if(s[4].setComponents(u-h,M-f,p-x,L-E).normalize(),e===si)s[5].setComponents(u+h,M+f,p+x,L+E).normalize();else if(e===gr)s[5].setComponents(h,f,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);let e=kp.distanceTo(t.center);return ws.radius=.7071067811865476+e,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Io.x=s.normal.x>0?t.max.x:t.min.x,Io.y=s.normal.y>0?t.max.y:t.min.y,Io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _a=class extends In{constructor(t=[],e=ss,n,s,r,o,c,h,u,g){super(t,e,n,s,r,o,c,h,u,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Qi=class extends In{constructor(t,e,n=ai,s,r,o,c=$e,h=$e,u,g=mi,v=1){if(g!==mi&&g!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:v};super(f,s,r,o,c,h,g,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},$o=class extends Qi{constructor(t,e=ai,n=ss,s,r,o=$e,c=$e,h,u=mi){let g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,e,n,s,r,o,c,h,u),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xa=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Mr=class i extends Bn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],u=[],g=[],v=[],f=0,M=0;w("z","y","x",-1,-1,n,e,t,o,r,0),w("z","y","x",1,-1,n,e,-t,o,r,1),w("x","z","y",1,1,t,n,e,s,o,2),w("x","z","y",1,-1,t,n,-e,s,o,3),w("x","y","z",1,-1,t,e,n,s,r,4),w("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(v,2));function w(P,x,p,I,O,E,L,D,z,T,R){let V=E/z,Y=L/T,J=E/2,tt=L/2,X=D/2,nt=z+1,ht=T+1,ot=0,rt=0,et=new it;for(let ct=0;ct<ht;ct++){let ut=ct*Y-tt;for(let Vt=0;Vt<nt;Vt++){let Jt=Vt*V-J;et[P]=Jt*I,et[x]=ut*O,et[p]=X,u.push(et.x,et.y,et.z),et[P]=0,et[x]=0,et[p]=D>0?1:-1,g.push(et.x,et.y,et.z),v.push(Vt/z),v.push(1-ct/T),ot+=1}}for(let ct=0;ct<T;ct++)for(let ut=0;ut<z;ut++){let Vt=f+ut+nt*ct,Jt=f+ut+nt*(ct+1),Be=f+(ut+1)+nt*(ct+1),ye=f+(ut+1)+nt*ct;h.push(Vt,Jt,ye),h.push(Jt,Be,ye),rt+=6}c.addGroup(M,rt,R),M+=rt,f+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var va=class i extends Bn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,c=Math.floor(n),h=Math.floor(s),u=c+1,g=h+1,v=t/c,f=e/h,M=[],w=[],P=[],x=[];for(let p=0;p<g;p++){let I=p*f-o;for(let O=0;O<u;O++){let E=O*v-r;w.push(E,-I,0),P.push(0,0,1),x.push(O/c),x.push(1-p/h)}}for(let p=0;p<h;p++)for(let I=0;I<c;I++){let O=I+u*p,E=I+u*(p+1),L=I+1+u*(p+1),D=I+1+u*p;M.push(O,E,D),M.push(E,L,D)}this.setIndex(M),this.setAttribute("position",new sn(w,3)),this.setAttribute("normal",new sn(P,3)),this.setAttribute("uv",new sn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ya=class i extends Bn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(o+c,Math.PI),u=0,g=[],v=new it,f=new it,M=[],w=[],P=[],x=[];for(let p=0;p<=n;p++){let I=[],O=p/n,E=o+O*c,L=t*Math.cos(E),D=Math.sqrt(t*t-L*L),z=0;p===0&&o===0?z=.5/e:p===n&&h===Math.PI&&(z=-.5/e);for(let T=0;T<=e;T++){let R=T/e,V=s+R*r;v.x=-D*Math.cos(V),v.y=L,v.z=D*Math.sin(V),w.push(v.x,v.y,v.z),f.copy(v).normalize(),P.push(f.x,f.y,f.z),x.push(R+z,1-O),I.push(u++)}g.push(I)}for(let p=0;p<n;p++)for(let I=0;I<e;I++){let O=g[p][I+1],E=g[p][I],L=g[p+1][I],D=g[p+1][I+1];(p!==0||o>0)&&M.push(O,E,D),(p!==n-1||h<Math.PI)&&M.push(E,L,D)}this.setIndex(M),this.setAttribute("position",new sn(w,3)),this.setAttribute("normal",new sn(P,3)),this.setAttribute("uv",new sn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Qu(s))s.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Qu(s[0])){let r=[];for(let o=0,c=s.length;o<c;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Sn(i){let t={};for(let e=0;e<i.length;e++){let n=Is(i[e]);for(let s in n)t[s]=n[s]}return t}function Qu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var Hd={clone:Is,merge:Sn},Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new it().fromArray(s.value);break;case"v4":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},jo=class extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ma=class extends ji{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Qo=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tl=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ur(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ih(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let c=e[1];t<c&&(n=2,r=c);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let c=n+o>>>1;t<e[c]?o=c:n=c+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,c=s[r],h=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case oh:r=t,c=2*e-n;break;case lh:r=s.length-2,c=e+s[r]-s[r+1];break;default:r=t,c=n}if(h===void 0)switch(this.getSettings_().endingEnd){case oh:o=t,h=2*n-e;break;case lh:o=1,h=n+s[1]-s[0];break;default:o=t-1,h=e}let u=(n-e)*.5,g=this.valueSize;this._weightPrev=u/(e-c),this._weightNext=u/(h-n),this._offsetPrev=r*g,this._offsetNext=o*g}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,g=this._offsetPrev,v=this._offsetNext,f=this._weightPrev,M=this._weightNext,w=(n-e)/(s-e),P=w*w,x=P*w,p=-f*x+2*f*P-f*w,I=(1+f)*x+(-1.5-2*f)*P+(-.5+f)*w+1,O=(-1-M)*x+(1.5+M)*P+.5*w,E=M*x-M*P;for(let L=0;L!==c;++L)r[L]=p*o[g+L]+I*o[u+L]+O*o[h+L]+E*o[v+L];return r}},nl=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,g=(n-e)/(s-e),v=1-g;for(let f=0;f!==c;++f)r[f]=o[u+f]*v+o[h+f]*g;return r}},il=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sl=class extends ts{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,g=this.inTangents,v=this.outTangents;if(!g||!v){let w=(n-e)/(s-e),P=1-w;for(let x=0;x!==c;++x)r[x]=o[u+x]*P+o[h+x]*w;return r}let f=c*2,M=t-1;for(let w=0;w!==c;++w){let P=o[u+w],x=o[h+w],p=M*f+w*2,I=v[p],O=v[p+1],E=t*f+w*2,L=g[E],D=g[E+1],z=Wp(n,e,I,L,s);r[w]=Wd(z,P,O,D,x)}return r}};function Wd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Hp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Wp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let c=Wd(r,t,e,n,s)-i;if(Math.abs(c)<1e-10)break;let h=Hp(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-c/h))}return r}var kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ur(e,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ur(t.times,Array),values:ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ih(t.settings)&&(n.settings={inTangents:ur(t.settings.inTangents,Array),outTangents:ur(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case sa:e=this.InterpolantFactoryMethodDiscrete;break;case Xo:e=this.InterpolantFactoryMethodLinear;break;case No:e=this.InterpolantFactoryMethodSmooth;break;case rh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return se("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return No;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ih(this.settings)&&(td(this.settings.inTangents,t),td(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(oe("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let c=0;c!==r;c++){let h=n[c];if(typeof h=="number"&&isNaN(h)){oe("KeyframeTrack: Time is not a valid number.",this,c,h),t=!1;break}if(o!==null&&o>h){oe("KeyframeTrack: Out of order keys.",this,c,h,o),t=!1;break}o=h}if(s!==void 0&&vp(s))for(let c=0,h=s.length;c!==h;++c){let u=s[c];if(isNaN(u)){oe("KeyframeTrack: Value is not a valid number.",this,c,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===No,r=t.length-1,o=1;for(let c=1;c<r;++c){let h=!1,u=t[c],g=t[c+1];if(u!==g&&(c!==1||u!==t[0]))if(s)h=!0;else{let v=c*n,f=v-n,M=v+n;for(let w=0;w!==n;++w){let P=e[v+w];if(P!==e[f+w]||P!==e[M+w]){h=!0;break}}}if(h){if(c!==o){t[o]=t[c];let v=c*n,f=o*n;for(let M=0;M!==n;++M)e[f+M]=e[v+M]}++o}}if(r>0){t[o]=t[r];for(let c=r*n,h=o*n,u=0;u!==n;++u)e[h+u]=e[c+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ih(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function td(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Xo;var es=class extends kn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=sa;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};rl.prototype.ValueTypeName="color";var al=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};al.prototype.ValueTypeName="number";var ol=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=(n-e)/(s-e),u=t*c;for(let g=u+c;u!==g;u+=4)_i.slerpFlat(r,0,o,u-c,o,u,h);return r}},Sa=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends kn{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=sa;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};ll.prototype.ValueTypeName="vector";var cl=class{constructor(t,e,n){let s=this,r=!1,o=0,c=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(g){c++,r===!1&&s.onStart!==void 0&&s.onStart(g,o,c),r=!0},this.itemEnd=function(g){o++,s.onProgress!==void 0&&s.onProgress(g,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return u.push(g,v),this},this.removeHandler=function(g){let v=u.indexOf(g);return v!==-1&&u.splice(v,2),this},this.getHandler=function(g){for(let v=0,f=u.length;v<f;v+=2){let M=u[v],w=u[v+1];if(M.global&&(M.lastIndex=0),M.test(g))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xd=new cl,hl=class{constructor(t){this.manager=t!==void 0?t:Xd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ba=class extends yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ta=class extends ba{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},sh=new Oe,ed=new it,nd=new it,ul=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(ed),nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,c=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===gr||t.reversedDepth?e.set(.5*o,0,0,.5*o+h,0,.5*c,0,.5*c+u,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+h,0,.5*c,0,.5*c+u,0,0,.5,.5,0,0,0,1),e.multiply(sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Lo=new it,Do=new _i,fi=new it,wa=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lo,Do,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Lo,Do,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new it,id=new Ae,sd=new Ae,vn=class extends wa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,id,sd),e.subVectors(sd,id)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*n/u,s*=o.width/h,n*=o.height/u}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Sr=class extends wa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,c=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ch=class extends ul{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Aa=class extends ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new ch}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var dr=-90,fr=1,dl=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(dr,fr,t,e);s.layers=this.layers,this.add(s);let r=new vn(dr,fr,t,e);r.layers=this.layers,this.add(r);let o=new vn(dr,fr,t,e);o.layers=this.layers,this.add(o);let c=new vn(dr,fr,t,e);c.layers=this.layers,this.add(c);let h=new vn(dr,fr,t,e);h.layers=this.layers,this.add(h);let u=new vn(dr,fr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,c,h]=e;for(let u of e)this.remove(u);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,h,u,g]=this.children,v=t.getRenderTarget(),f=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=P,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(v,f,M),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},fl=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fh="\\[\\]\\.:\\/",Xp=new RegExp("["+Fh+"]","g"),Oh="[^"+Fh+"]",qp="[^"+Fh.replace("\\.","")+"]",Yp=/((?:WC+[\/:])*)/.source.replace("WC",Oh),Jp=/(WCOD+)?/.source.replace("WCOD",qp),Zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),Kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),$p=new RegExp("^"+Yp+Jp+Zp+Kp+"$"),jp=["material","materials","bones","map"],hh=class{constructor(t,e,n){let s=n||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xp,"")}static parseTrackName(t){let e=$p.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===e||c.uuid===e)return c;let h=n(c.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===u){u=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let o=t[s];if(o===void 0){let u=e.nodeName;oe("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=hh;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zx=new Float32Array(1);var uh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Bh(i,t,e,n){let s=Qp(n);switch(e){case Ph:return i*t;case Er:return i*t/s.components*s.byteLength;case Ml:return i*t/s.components*s.byteLength;case os:return i*t*2/s.components*s.byteLength;case Sl:return i*t*2/s.components*s.byteLength;case Ih:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case bl:return i*t*4/s.components*s.byteLength;case Ia:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:case El:return Math.max(i,16)*Math.max(t,8)/4;case Tl:case Al:return Math.max(i,8)*Math.max(t,8)/2;case Cl:case Rl:case Il:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pl:case Ua:case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jl:case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $l:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fa:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qp(i){switch(i){case Dn:case Ah:return{byteLength:1,components:1};case wr:case Eh:case oi:return{byteLength:2,components:1};case vl:case yl:return{byteLength:2,components:4};case ai:case xl:case qn:return{byteLength:4,components:1};case Ch:case Rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function pf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function em(i){let t=new WeakMap;function e(c,h){let u=c.array,g=c.usage,v=u.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,u,g),c.onUploadCallback();let M;if(u instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)M=i.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)M=i.SHORT;else if(u instanceof Uint32Array)M=i.UNSIGNED_INT;else if(u instanceof Int32Array)M=i.INT;else if(u instanceof Int8Array)M=i.BYTE;else if(u instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:M,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:v}}function n(c,h,u){let g=h.array,v=h.updateRanges;if(i.bindBuffer(u,c),v.length===0)i.bufferSubData(u,0,g);else{v.sort((M,w)=>M.start-w.start);let f=0;for(let M=1;M<v.length;M++){let w=v[f],P=v[M];P.start<=w.start+w.count+1?w.count=Math.max(w.count,P.start+P.count-w.start):(++f,v[f]=P)}v.length=f+1;for(let M=0,w=v.length;M<w;M++){let P=v[M];i.bufferSubData(u,P.start*g.BYTES_PER_ELEMENT,g,P.start,P.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=t.get(c);h&&(i.deleteBuffer(h.buffer),t.delete(c))}function o(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let g=t.get(c);(!g||g.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let u=t.get(c);if(u===void 0)t.set(c,e(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,c,h),u.version=c.version}}return{get:s,remove:r,update:o}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wm=`#define PI 3.141592653589793
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
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Em=`vec3 transformedNormal = objectNormal;
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
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
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
#endif`,t0=`uniform sampler2D dfgLUT;
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
}`,e0=`
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,v0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
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
#endif`,w0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,hg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,vg=`#define LAMBERT
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
}`,yg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Pg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:vm,clipping_planes_vertex:ym,color_fragment:Mm,color_pars_fragment:Sm,color_pars_vertex:bm,color_vertex:Tm,common:wm,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Em,displacementmap_pars_vertex:Cm,displacementmap_vertex:Rm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Nm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Fm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:Jm,envmap_vertex:Bm,fog_vertex:km,fog_pars_vertex:zm,fog_fragment:Vm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Zm,lights_toon_pars_fragment:Km,lights_phong_fragment:$m,lights_phong_pars_fragment:jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:t0,lights_fragment_begin:e0,lights_fragment_maps:n0,lights_fragment_end:i0,lightprobes_pars_fragment:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:h0,map_particle_fragment:u0,map_particle_pars_fragment:d0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:_0,morphtarget_pars_vertex:x0,morphtarget_vertex:v0,normal_fragment_begin:y0,normal_fragment_maps:M0,normal_pars_fragment:S0,normal_pars_vertex:b0,normal_vertex:T0,normalmap_pars_fragment:w0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:R0,opaque_fragment:P0,packing:I0,premultiplied_alpha_fragment:L0,project_vertex:D0,dithering_fragment:N0,dithering_pars_fragment:U0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:k0,shadowmap_vertex:z0,shadowmask_pars_fragment:V0,skinbase_vertex:G0,skinning_pars_vertex:H0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:J0,tonemapping_pars_fragment:Z0,transmission_fragment:K0,transmission_pars_fragment:$0,uv_pars_fragment:j0,uv_pars_vertex:Q0,uv_vertex:tg,worldpos_vertex:eg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:ag,cube_frag:og,depth_vert:lg,depth_frag:cg,distance_vert:hg,distance_frag:ug,equirect_vert:dg,equirect_frag:fg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:_g,meshlambert_vert:xg,meshlambert_frag:vg,meshmatcap_vert:yg,meshmatcap_frag:Mg,meshnormal_vert:Sg,meshnormal_frag:bg,meshphong_vert:Tg,meshphong_frag:wg,meshphysical_vert:Ag,meshphysical_frag:Eg,meshtoon_vert:Cg,meshtoon_frag:Rg,points_vert:Pg,points_frag:Ig,shadow_vert:Lg,shadow_frag:Dg,sprite_vert:Ng,sprite_frag:Ug},Ot={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new it},probesMax:{value:new it},probesResolution:{value:new it}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Si={basic:{uniforms:Sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Sn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Sn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Sn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Sn([Ot.points,Ot.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Sn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Sn([Ot.common,Ot.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Sn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Sn([Ot.sprite,Ot.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Sn([Ot.common,Ot.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Sn([Ot.lights,Ot.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Si.physical={uniforms:Sn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var ic={r:0,b:0,g:0},Fg=new Oe,mf=new le;mf.set(-1,0,0,0,1,0,0,0,1);function Og(i,t,e,n,s,r){let o=new de(0),c=s===!0?0:1,h,u,g=null,v=0,f=null;function M(I){let O=I.isScene===!0?I.background:null;if(O&&O.isTexture){let E=I.backgroundBlurriness>0;O=t.get(O,E)}return O}function w(I){let O=!1,E=M(I);E===null?x(o,c):E&&E.isColor&&(x(E,1),O=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?e.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||O)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(I,O){let E=M(O);E&&(E.isCubeTexture||E.mapping===Ra)?(u===void 0&&(u=new Mn(new Mr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Is(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(O.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(mf),u.material.toneMapped=be.getTransfer(E.colorSpace)!==Ne,(g!==E||v!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,g=E,v=E.version,f=i.toneMapping),u.layers.enableAll(),I.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new Mn(new va(2,2),new Rn({name:"BackgroundMaterial",uniforms:Is(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.toneMapped=be.getTransfer(E.colorSpace)!==Ne,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(g!==E||v!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,g=E,v=E.version,f=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function x(I,O){I.getRGB(ic,Uh(i)),e.buffers.color.setClear(ic.r,ic.g,ic.b,O,r)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(I,O=1){o.set(I),c=O,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(I){c=I,x(o,c)},render:w,addToRenderList:P,dispose:p}}function Bg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function c(Y,J,tt,X,nt){let ht=!1,ot=v(Y,X,tt,J);r!==ot&&(r=ot,u(r.object)),ht=M(Y,X,tt,nt),ht&&w(Y,X,tt,nt),nt!==null&&t.update(nt,i.ELEMENT_ARRAY_BUFFER),(ht||o)&&(o=!1,E(Y,J,tt,X),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function h(){return i.createVertexArray()}function u(Y){return i.bindVertexArray(Y)}function g(Y){return i.deleteVertexArray(Y)}function v(Y,J,tt,X){let nt=X.wireframe===!0,ht=n[J.id];ht===void 0&&(ht={},n[J.id]=ht);let ot=Y.isInstancedMesh===!0?Y.id:0,rt=ht[ot];rt===void 0&&(rt={},ht[ot]=rt);let et=rt[tt.id];et===void 0&&(et={},rt[tt.id]=et);let ct=et[nt];return ct===void 0&&(ct=f(h()),et[nt]=ct),ct}function f(Y){let J=[],tt=[],X=[];for(let nt=0;nt<e;nt++)J[nt]=0,tt[nt]=0,X[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:tt,attributeDivisors:X,object:Y,attributes:{},index:null}}function M(Y,J,tt,X){let nt=r.attributes,ht=J.attributes,ot=0,rt=tt.getAttributes();for(let et in rt)if(rt[et].location>=0){let ut=nt[et],Vt=ht[et];if(Vt===void 0&&(et==="instanceMatrix"&&Y.instanceMatrix&&(Vt=Y.instanceMatrix),et==="instanceColor"&&Y.instanceColor&&(Vt=Y.instanceColor)),ut===void 0||ut.attribute!==Vt||Vt&&ut.data!==Vt.data)return!0;ot++}return r.attributesNum!==ot||r.index!==X}function w(Y,J,tt,X){let nt={},ht=J.attributes,ot=0,rt=tt.getAttributes();for(let et in rt)if(rt[et].location>=0){let ut=ht[et];ut===void 0&&(et==="instanceMatrix"&&Y.instanceMatrix&&(ut=Y.instanceMatrix),et==="instanceColor"&&Y.instanceColor&&(ut=Y.instanceColor));let Vt={};Vt.attribute=ut,ut&&ut.data&&(Vt.data=ut.data),nt[et]=Vt,ot++}r.attributes=nt,r.attributesNum=ot,r.index=X}function P(){let Y=r.newAttributes;for(let J=0,tt=Y.length;J<tt;J++)Y[J]=0}function x(Y){p(Y,0)}function p(Y,J){let tt=r.newAttributes,X=r.enabledAttributes,nt=r.attributeDivisors;tt[Y]=1,X[Y]===0&&(i.enableVertexAttribArray(Y),X[Y]=1),nt[Y]!==J&&(i.vertexAttribDivisor(Y,J),nt[Y]=J)}function I(){let Y=r.newAttributes,J=r.enabledAttributes;for(let tt=0,X=J.length;tt<X;tt++)J[tt]!==Y[tt]&&(i.disableVertexAttribArray(tt),J[tt]=0)}function O(Y,J,tt,X,nt,ht,ot){ot===!0?i.vertexAttribIPointer(Y,J,tt,nt,ht):i.vertexAttribPointer(Y,J,tt,X,nt,ht)}function E(Y,J,tt,X){P();let nt=X.attributes,ht=tt.getAttributes(),ot=J.defaultAttributeValues;for(let rt in ht){let et=ht[rt];if(et.location>=0){let ct=nt[rt];if(ct===void 0&&(rt==="instanceMatrix"&&Y.instanceMatrix&&(ct=Y.instanceMatrix),rt==="instanceColor"&&Y.instanceColor&&(ct=Y.instanceColor)),ct!==void 0){let ut=ct.normalized,Vt=ct.itemSize,Jt=t.get(ct);if(Jt===void 0)continue;let Be=Jt.buffer,ye=Jt.type,Re=Jt.bytesPerElement,pt=ye===i.INT||ye===i.UNSIGNED_INT||ct.gpuType===xl;if(ct.isInterleavedBufferAttribute){let _t=ct.data,Xt=_t.stride,ie=ct.offset;if(_t.isInstancedInterleavedBuffer){for(let Bt=0;Bt<et.locationSize;Bt++)p(et.location+Bt,_t.meshPerAttribute);Y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Bt=0;Bt<et.locationSize;Bt++)x(et.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Bt=0;Bt<et.locationSize;Bt++)O(et.location+Bt,Vt/et.locationSize,ye,ut,Xt*Re,(ie+Vt/et.locationSize*Bt)*Re,pt)}else{if(ct.isInstancedBufferAttribute){for(let _t=0;_t<et.locationSize;_t++)p(et.location+_t,ct.meshPerAttribute);Y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let _t=0;_t<et.locationSize;_t++)x(et.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let _t=0;_t<et.locationSize;_t++)O(et.location+_t,Vt/et.locationSize,ye,ut,Vt*Re,Vt/et.locationSize*_t*Re,pt)}}else if(ot!==void 0){let ut=ot[rt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(et.location,ut);break;case 3:i.vertexAttrib3fv(et.location,ut);break;case 4:i.vertexAttrib4fv(et.location,ut);break;default:i.vertexAttrib1fv(et.location,ut)}}}}I()}function L(){R();for(let Y in n){let J=n[Y];for(let tt in J){let X=J[tt];for(let nt in X){let ht=X[nt];for(let ot in ht)g(ht[ot].object),delete ht[ot];delete X[nt]}}delete n[Y]}}function D(Y){if(n[Y.id]===void 0)return;let J=n[Y.id];for(let tt in J){let X=J[tt];for(let nt in X){let ht=X[nt];for(let ot in ht)g(ht[ot].object),delete ht[ot];delete X[nt]}}delete n[Y.id]}function z(Y){for(let J in n){let tt=n[J];for(let X in tt){let nt=tt[X];if(nt[Y.id]===void 0)continue;let ht=nt[Y.id];for(let ot in ht)g(ht[ot].object),delete ht[ot];delete nt[Y.id]}}}function T(Y){for(let J in n){let tt=n[J],X=Y.isInstancedMesh===!0?Y.id:0,nt=tt[X];if(nt!==void 0){for(let ht in nt){let ot=nt[ht];for(let rt in ot)g(ot[rt].object),delete ot[rt];delete nt[ht]}delete tt[X],Object.keys(tt).length===0&&delete n[J]}}}function R(){V(),o=!0,r!==s&&(r=s,u(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:R,resetDefaultState:V,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:P,enableAttribute:x,disableUnusedAttributes:I}}function kg(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,g){g!==0&&(i.drawArraysInstanced(n,h,u,g),e.update(u,n,g))}function c(h,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,g);let f=0;for(let M=0;M<g;M++)f+=u[M];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c}function zg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let z=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(z){return!(z!==Yn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(z){let T=z===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Dn&&z!==qn&&!T&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",g=h(u);g!==u&&(se("WebGLRenderer:",u,"not supported, using",g,"instead."),u=g);let v=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),O=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:v,reversedDepthBuffer:f,maxTextures:M,maxVertexTextures:w,maxTextureSize:P,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:E,maxSamples:L,samples:D}}function Vg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ii,c=new le,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,f){let M=v.length!==0||f||n!==0||s;return s=f,n=v.length,M},this.beginShadows=function(){r=!0,g(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,f){e=g(v,f,0)},this.setState=function(v,f,M){let w=v.clippingPlanes,P=v.clipIntersection,x=v.clipShadows,p=i.get(v);if(!s||w===null||w.length===0||r&&!x)r?g(null):u();else{let I=r?0:n,O=I*4,E=p.clippingState||null;h.value=E,E=g(w,f,O,M);for(let L=0;L!==O;++L)E[L]=e[L];p.clippingState=E,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=I}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function g(v,f,M,w){let P=v!==null?v.length:0,x=null;if(P!==0){if(x=h.value,w!==!0||x===null){let p=M+P*4,I=f.matrixWorldInverse;c.getNormalMatrix(I),(x===null||x.length<p)&&(x=new Float32Array(p));for(let O=0,E=M;O!==P;++O,E+=4)o.copy(v[O]).applyMatrix4(I,c),o.normal.toArray(x,E),x[E+3]=o.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,x}}var Rr=4,Gg=6,Hg=20,Wg=256,Ba=new Sr,qd=new de,kh=null,zh=0,Vh=0,Gh=!1,Xg=new it,Ls=new it,rc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:c=Xg}=r;kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,c),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,zh,Vh),this._renderer.xr.enabled=Gh,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:oi,format:Yn,colorSpace:ra,depthBuffer:!1},s=Yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qg(r)),this._blurMaterial=Jg(r,t,e),this._ggxMaterial=Yg(r,t,e)}return s}_compileMaterial(t){let e=new Mn(new Bn,t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,s,r){let h=new vn(90,1,e,n),u=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,f=v.autoClear,M=v.toneMapping;v.getClearColor(qd),v.toneMapping=ri,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Mr,new pa({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,x=P.material,p=!1,I=t.background;I?I.isColor&&(x.color.copy(I),t.background=null,p=!0):(x.color.copy(qd),p=!0);for(let O=0;O<6;O++){let E=O%3;E===0?(h.up.set(0,u[O],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+g[O],r.y,r.z)):E===1?(h.up.set(0,0,u[O]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+g[O],r.z)):(h.up.set(0,u[O],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+g[O]));let L=this._cubeSize;Cr(s,E*L,O>2?L:0,L,L),v.setRenderTarget(s),p&&v.render(P,h),v.render(t,h)}v.toneMapping=M,v.autoClear=f,t.background=I}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ss||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let c=r.uniforms;c.envMap.value=t;let h=this._cubeSize;Cr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,Ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;let h=o.uniforms,u=n/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),v=Math.sqrt(u*u-g*g),f=u*1.25,M=v*f,{_lodMax:w}=this,P=this._sizeLods[n],x=3*P*(n>w-Rr?n-w+Rr:0),p=4*(this._cubeSize-P);h.envMap.value=t.texture,h.roughness.value=M,h.mipInt.value=w-e,Cr(r,x,p,3*P,2*P),s.setRenderTarget(r),s.render(c,Ba),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=w-n,Cr(t,x,p,3*P,2*P),s.setRenderTarget(t),s.render(c,Ba)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,c=this._blurMaterial,h=this._lodMeshes[s];h.material=c;let u=c.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let g=this._sizeLods[s],v=3*g*(s>this._lodMax-Rr?s-this._lodMax+Rr:0),f=4*(this._cubeSize-g);Cr(e,v,f,3*g,2*g),o.setRenderTarget(e),o.render(h,Ba)}};function qg(i){let t=[],e=[],n=i,s=i-Rr+1+Gg;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let c=1/(o-2),h=-c,u=1+c,g=[h,h,u,h,u,u,h,h,u,u,h,u],v=6,f=6,M=3,w=new Float32Array(M*f*v),P=new Float32Array(M*f*v);for(let p=0;p<v;p++){let I=p%3*2/3-1,O=p>2?0:-1,E=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];w.set(E,M*f*p);for(let L=0;L<f;L++){let D=g[L*2]*2-1,z=g[L*2+1]*2-1;p===0?Ls.set(1,z,D):p===1?Ls.set(-D,1,-z):p===2?Ls.set(-D,z,1):p===3?Ls.set(-1,z,-D):p===4?Ls.set(-D,-1,z):Ls.set(D,z,-1),Ls.toArray(P,(p*f+L)*M)}}let x=new Bn;x.setAttribute("position",new On(w,M)),x.setAttribute("outputDirection",new On(P,M)),e.push(new Mn(x,null)),n>Rr&&n--}return{lodMeshes:e,sizeLods:t}}function Yd(i,t,e){let n=new Ln(i,t,e);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yg(i,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Jg(i,t,e){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:Hg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Jd(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Zd(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

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
	`}var ac=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _a(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mr(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:yi});r.uniforms.tEquirect.value=e;let o=new Mn(s,r),c=e.minFilter;return e.minFilter===rs&&(e.minFilter=fn),new dl(1,10,this).update(t,o),e.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Zg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,M=!1){return f==null?null:M?o(f):r(f)}function r(f){if(f&&f.isTexture){let M=f.mapping;if(M===ml||M===gl)if(t.has(f)){let w=t.get(f).texture;return c(w,f.mapping)}else{let w=f.image;if(w&&w.height>0){let P=new ac(w.height);return P.fromEquirectangularTexture(i,f),t.set(f,P),f.addEventListener("dispose",u),c(P.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let M=f.mapping,w=M===ml||M===gl,P=M===ss||M===Ps;if(w||P){let x=e.get(f),p=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new rc(i)),x=w?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{let I=f.image;return w&&I&&I.height>0||P&&I&&h(I)?(n===null&&(n=new rc(i)),x=w?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",g),x.texture):null}}}return f}function c(f,M){return M===ml?f.mapping=ss:M===gl&&(f.mapping=Ps),f}function h(f){let M=0,w=6;for(let P=0;P<w;P++)f[P]!==void 0&&M++;return M===w}function u(f){let M=f.target;M.removeEventListener("dispose",u);let w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function g(f){let M=f.target;M.removeEventListener("dispose",g);let w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function Kg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Es("WebGLRenderer: "+n+" extension not supported."),s}}}function $g(i,t,e,n){let s={},r=new WeakMap;function o(v){let f=v.target;f.index!==null&&t.remove(f.index);for(let w in f.attributes)t.remove(f.attributes[w]);f.removeEventListener("dispose",o),delete s[f.id];let M=r.get(f);M&&(t.remove(M),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(v,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function h(v){let f=v.attributes;for(let M in f)t.update(f[M],i.ARRAY_BUFFER)}function u(v){let f=[],M=v.index,w=v.attributes.position,P=0;if(w===void 0)return;if(M!==null){let I=M.array;P=M.version;for(let O=0,E=I.length;O<E;O+=3){let L=I[O+0],D=I[O+1],z=I[O+2];f.push(L,D,D,z,z,L)}}else{let I=w.array;P=w.version;for(let O=0,E=I.length/3-1;O<E;O+=3){let L=O+0,D=O+1,z=O+2;f.push(L,D,D,z,z,L)}}let x=new(w.count>=65535?fa:da)(f,1);x.version=P;let p=r.get(v);p&&t.remove(p),r.set(v,x)}function g(v){let f=r.get(v);if(f){let M=v.index;M!==null&&f.version<M.version&&u(v)}else u(v);return r.get(v)}return{get:c,update:h,getWireframeAttribute:g}}function jg(i,t,e){let n;function s(v){n=v}let r,o;function c(v){r=v.type,o=v.bytesPerElement}function h(v,f){i.drawElements(n,f,r,v*o),e.update(f,n,1)}function u(v,f,M){M!==0&&(i.drawElementsInstanced(n,f,r,v*o,M),e.update(f,n,M))}function g(v,f,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,v,0,M);let P=0;for(let x=0;x<M;x++)P+=f[x];e.update(P,n,1)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=g}function Qg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=c*(r/3);break;case i.LINES:e.lines+=c*(r/2);break;case i.LINE_STRIP:e.lines+=c*(r-1);break;case i.LINE_LOOP:e.lines+=c*r;break;case i.POINTS:e.points+=c*r;break;default:oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function t_(i,t,e){let n=new WeakMap,s=new qe;function r(o,c,h){let u=o.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0,f=n.get(c);if(f===void 0||f.count!==v){let R=function(){z.dispose(),n.delete(c),c.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let M=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,P=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],I=c.morphAttributes.color||[],O=0;M===!0&&(O=1),w===!0&&(O=2),P===!0&&(O=3);let E=c.attributes.position.count*O,L=1;E>t.maxTextureSize&&(L=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let D=new Float32Array(E*L*4*v),z=new la(D,E,L,v);z.type=qn,z.needsUpdate=!0;let T=O*4;for(let V=0;V<v;V++){let Y=x[V],J=p[V],tt=I[V],X=E*L*4*V;for(let nt=0;nt<Y.count;nt++){let ht=nt*T;M===!0&&(s.fromBufferAttribute(Y,nt),D[X+ht+0]=s.x,D[X+ht+1]=s.y,D[X+ht+2]=s.z,D[X+ht+3]=0),w===!0&&(s.fromBufferAttribute(J,nt),D[X+ht+4]=s.x,D[X+ht+5]=s.y,D[X+ht+6]=s.z,D[X+ht+7]=0),P===!0&&(s.fromBufferAttribute(tt,nt),D[X+ht+8]=s.x,D[X+ht+9]=s.y,D[X+ht+10]=s.z,D[X+ht+11]=tt.itemSize===4?s.w:1)}}f={count:v,texture:z,size:new Ae(E,L)},n.set(c,f),c.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let M=0;for(let P=0;P<u.length;P++)M+=u[P];let w=c.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function e_(i,t,e,n,s){let r=new WeakMap;function o(u){let g=s.render.frame,v=u.geometry,f=t.get(u,v);if(r.get(f)!==g&&(t.update(f),r.set(f,g)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==g&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,g))),u.isSkinnedMesh){let M=u.skeleton;r.get(M)!==g&&(M.update(),r.set(M,g))}return f}function c(){r=new WeakMap}function h(u){let g=u.target;g.removeEventListener("dispose",h),n.releaseStatesOfObject(g),e.remove(g.instanceMatrix),g.instanceColor!==null&&e.remove(g.instanceColor)}return{update:o,dispose:c}}var n_={[vh]:"LINEAR_TONE_MAPPING",[yh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[Ca]:"ACES_FILMIC_TONE_MAPPING",[bh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function i_(i,t,e,n,s,r){let o=new Ln(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,h=null,u=new Bn;u.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new sn([0,2,0,0,2,0],2));let g=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Mn(u,g),f=new Sr(-1,1,1,-1,0,1),M=null,w=null,P=!1,x,p=null,I=[],O=!1;this.setSize=function(E,L){o.setSize(E,L),c!==null&&c.setSize(E,L),h!==null&&h.setSize(E,L);for(let D=0;D<I.length;D++){let z=I[D];z.setSize&&z.setSize(E,L)}},this.setEffects=function(E){I=E,O=I.length>0&&I[0].isRenderPass===!0;let L=o.width,D=o.height;I.length>0&&c===null&&(c=new Ln(L,D,{type:oi,depthBuffer:!1,stencilBuffer:!1}),h=new Ln(L,D,{type:oi,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<I.length;z++){let T=I[z];T.setSize&&T.setSize(L,D)}},this.begin=function(E,L){if(P||E.toneMapping===ri&&I.length===0)return!1;if(p=L,L!==null){let D=L.width,z=L.height;(o.width!==D||o.height!==z)&&this.setSize(D,z)}return O===!1&&E.setRenderTarget(o),x=E.toneMapping,E.toneMapping=ri,!0},this.hasRenderPass=function(){return O},this.end=function(E,L){E.toneMapping=x,P=!0;let D=o,z=c;for(let T=0;T<I.length;T++){let R=I[T];R.enabled!==!1&&(R.render(E,z,D,L),R.needsSwap!==!1&&(D=z,z=z===c?h:c))}if(M!==E.outputColorSpace||w!==E.toneMapping){M=E.outputColorSpace,w=E.toneMapping,g.defines={},be.getTransfer(M)===Ne&&(g.defines.SRGB_TRANSFER="");let T=n_[w];T&&(g.defines[T]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,E.setRenderTarget(p),E.render(v,f),p=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),h!==null&&h.dispose(),u.dispose(),g.dispose()}}var gf=new In,Xh=new Qi(1,1),_f=new la,xf=new Zo,vf=new _a,Kd=[],$d=[],jd=new Float32Array(16),Qd=new Float32Array(9),tf=new Float32Array(4);function Ir(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kd[s];if(r===void 0&&(r=new Float32Array(s),Kd[s]=r),t!==0){n.toArray(r,0);for(let o=1,c=0;o!==t;++o)c+=e,i[o].toArray(r,c)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function an(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cc(i,t){let e=$d[t];e===void 0&&(e=new Int32Array(t),$d[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function s_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),an(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),an(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),an(e,t)}}function l_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;tf.set(n),i.uniformMatrix2fv(this.addr,!1,tf),an(e,n)}}function c_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Qd.set(n),i.uniformMatrix3fv(this.addr,!1,Qd),an(e,n)}}function h_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;jd.set(n),i.uniformMatrix4fv(this.addr,!1,jd),an(e,n)}}function u_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),an(e,t)}}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),an(e,t)}}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),an(e,t)}}function m_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),an(e,t)}}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),an(e,t)}}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),an(e,t)}}function v_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xh.compareFunction=e.isReversedDepthBuffer()?nc:ec,r=Xh):r=gf,e.setTexture2D(t||r,s)}function y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xf,s)}function M_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vf,s)}function S_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_f,s)}function b_(i){switch(i){case 5126:return s_;case 35664:return r_;case 35665:return a_;case 35666:return o_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}function T_(i,t){i.uniform1fv(this.addr,t)}function w_(i,t){let e=Ir(t,this.size,2);i.uniform2fv(this.addr,e)}function A_(i,t){let e=Ir(t,this.size,3);i.uniform3fv(this.addr,e)}function E_(i,t){let e=Ir(t,this.size,4);i.uniform4fv(this.addr,e)}function C_(i,t){let e=Ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function R_(i,t){let e=Ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P_(i,t){let e=Ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function I_(i,t){i.uniform1iv(this.addr,t)}function L_(i,t){i.uniform2iv(this.addr,t)}function D_(i,t){i.uniform3iv(this.addr,t)}function N_(i,t){i.uniform4iv(this.addr,t)}function U_(i,t){i.uniform1uiv(this.addr,t)}function F_(i,t){i.uniform2uiv(this.addr,t)}function O_(i,t){i.uniform3uiv(this.addr,t)}function B_(i,t){i.uniform4uiv(this.addr,t)}function k_(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Xh:o=gf;for(let c=0;c!==s;++c)e.setTexture2D(t[c]||o,r[c])}function z_(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xf,r[o])}function V_(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||vf,r[o])}function G_(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_f,r[o])}function H_(i){switch(i){case 5126:return T_;case 35664:return w_;case 35665:return A_;case 35666:return E_;case 35674:return C_;case 35675:return R_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return N_;case 5125:return U_;case 36294:return F_;case 36295:return O_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return G_}}var qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b_(e.type)}},Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H_(e.type)}},Jh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(t,e[c.id],n)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function ef(i,t){i.seq.push(t),i.map[t.id]=t}function W_(i,t,e){let n=i.name,s=n.length;for(Hh.lastIndex=0;;){let r=Hh.exec(n),o=Hh.lastIndex,c=r[1],h=r[2]==="]",u=r[3];if(h&&(c=c|0),u===void 0||u==="["&&o+2===s){ef(e,u===void 0?new qh(c,i,t):new Yh(c,i,t));break}else{let v=e.map[c];v===void 0&&(v=new Jh(c),ef(e,v)),e=v}}}var Pr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let c=t.getActiveUniform(e,o),h=t.getUniformLocation(e,c.name);W_(c,h,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let c=e[r],h=n[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function nf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var X_=37297,q_=0;function Y_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===t?">":" "} ${c}: ${e[o]}`)}return n.join(`
`)}var sf=new le;function J_(i){be._getMatrix(sf,be.workingColorSpace,i);let t=`mat3( ${sf.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(i)){case aa:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Y_(i.getShaderSource(t),c)}else return r}function Z_(i,t){let e=J_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var K_={[vh]:"Linear",[yh]:"Reinhard",[Mh]:"Cineon",[Ca]:"ACESFilmic",[bh]:"AgX",[Th]:"Neutral",[Sh]:"Custom"};function $_(i,t){let e=K_[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sc=new it;function j_(){be.getLuminanceCoefficients(sc);let i=sc.x.toFixed(4),t=sc.y.toFixed(4),e=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function tx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ex(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:c}}return e}function za(i){return i!==""}function af(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function of(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(i){return i.replace(nx,sx)}var ix=new Map;function sx(i,t){let e=pe[t];if(e===void 0){let n=ix.get(t);if(n!==void 0)e=pe[n],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zh(e)}var rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lf(i){return i.replace(rx,ax)}function ax(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var ox={[Ea]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function lx(i){return ox[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cx={[ss]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE_UV"};function hx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":cx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ux={[Ps]:"ENVMAP_MODE_REFRACTION"};function dx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ux[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fx={[xh]:"ENVMAP_BLENDING_MULTIPLY",[wd]:"ENVMAP_BLENDING_MIX",[Ad]:"ENVMAP_BLENDING_ADD"};function px(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fx[i.combine]||"ENVMAP_BLENDING_NONE"}function mx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,c=e.fragmentShader,h=lx(e),u=hx(e),g=dx(e),v=px(e),f=mx(e),M=Q_(e),w=tx(r),P=s.createProgram(),x,p,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(za).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(za).join(`
`),p.length>0&&(p+=`
`)):(x=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),p=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?pe.tonemapping_pars_fragment:"",e.toneMapping!==ri?$_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Z_("linearToOutputTexel",e.outputColorSpace),j_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(za).join(`
`)),o=Zh(o),o=af(o,e),o=of(o,e),c=Zh(c),c=af(c,e),c=of(c,e),o=lf(o),c=lf(c),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let O=I+x+o,E=I+p+c,L=nf(s,s.VERTEX_SHADER,O),D=nf(s,s.FRAGMENT_SHADER,E);s.attachShader(P,L),s.attachShader(P,D),e.index0AttributeName!==void 0?s.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function z(Y){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(P)||"",tt=s.getShaderInfoLog(L)||"",X=s.getShaderInfoLog(D)||"",nt=J.trim(),ht=tt.trim(),ot=X.trim(),rt=!0,et=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,L,D);else{let ct=rf(s,L,"vertex"),ut=rf(s,D,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+nt+`
`+ct+`
`+ut)}else nt!==""?se("WebGLProgram: Program Info Log:",nt):(ht===""||ot==="")&&(et=!1);et&&(Y.diagnostics={runnable:rt,programLog:nt,vertexShader:{log:ht,prefix:x},fragmentShader:{log:ot,prefix:p}})}s.deleteShader(L),s.deleteShader(D),T=new Pr(s,P),R=ex(s,P)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(P,X_)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q_++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=L,this.fragmentShader=D,this}var _x=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $h(t),e.set(t,n)),n}},$h=class{constructor(t){this.id=_x++,this.code=t,this.usedTimes=0}};function xx(i){return i===os||i===Ua||i===Fa}function vx(i,t,e,n,s,r){let o=new ca,c=new Kh,h=new Set,u=[],g=new Map,v=n.logarithmicDepthBuffer,f=n.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return h.add(T),T===0?"uv":`uv${T}`}function P(T,R,V,Y,J,tt){let X=Y.fog,nt=J.geometry,ht=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Y.environment:null,ot=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,rt=t.get(T.envMap||ht,ot),et=rt&&rt.mapping===Ra?rt.image.height:null,ct=M[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&se("WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let ut=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Vt=ut!==void 0?ut.length:0,Jt=0;nt.morphAttributes.position!==void 0&&(Jt=1),nt.morphAttributes.normal!==void 0&&(Jt=2),nt.morphAttributes.color!==void 0&&(Jt=3);let Be,ye,Re,pt;if(ct){let Le=Si[ct];Be=Le.vertexShader,ye=Le.fragmentShader}else{Be=T.vertexShader,ye=T.fragmentShader;let Le=c.getVertexShaderStage(T),Te=c.getFragmentShaderStage(T);c.update(T,Le,Te),Re=Le.id,pt=Te.id}let _t=i.getRenderTarget(),Xt=i.state.buffers.depth.getReversed(),ie=J.isInstancedMesh===!0,Bt=J.isBatchedMesh===!0,ue=!!T.map,He=!!T.matcap,me=!!rt,Pe=!!T.aoMap,Ue=!!T.lightMap,ge=!!T.bumpMap&&T.wireframe===!1,ke=!!T.normalMap,je=!!T.displacementMap,mn=!!T.emissiveMap,We=!!T.metalnessMap,Ie=!!T.roughnessMap,G=T.anisotropy>0,on=T.clearcoat>0,re=T.dispersion>0,N=T.retroreflectivity>0,y=T.iridescence>0,K=T.sheen>0,q=T.transmission>0,B=G&&!!T.anisotropyMap,mt=on&&!!T.clearcoatMap,Et=on&&!!T.clearcoatNormalMap,lt=on&&!!T.clearcoatRoughnessMap,yt=y&&!!T.iridescenceMap,Lt=y&&!!T.iridescenceThicknessMap,jt=K&&!!T.sheenColorMap,Pt=K&&!!T.sheenRoughnessMap,St=!!T.specularMap,$t=!!T.specularColorMap,Zt=!!T.specularIntensityMap,te=q&&!!T.transmissionMap,H=q&&!!T.thicknessMap,Dt=!!T.gradientMap,gt=!!T.alphaMap,It=T.alphaTest>0,kt=!!T.alphaHash,bt=!!T.extensions,zt=ri;T.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Kt={shaderID:ct,shaderType:T.type,shaderName:T.name,vertexShader:Be,fragmentShader:ye,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:pt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&J._colorsTexture!==null,instancing:ie,instancingColor:ie&&J.instanceColor!==null,instancingMorph:ie&&J.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ue,matcap:He,envMap:me,envMapMode:me&&rt.mapping,envMapCubeUVHeight:et,aoMap:Pe,lightMap:Ue,bumpMap:ge,normalMap:ke,displacementMap:je,emissiveMap:mn,normalMapObjectSpace:ke&&T.normalMapType===Rd,normalMapTangentSpace:ke&&T.normalMapType===tc,packedNormalMap:ke&&T.normalMapType===tc&&xx(T.normalMap.format),metalnessMap:We,roughnessMap:Ie,anisotropy:G,anisotropyMap:B,clearcoat:on,clearcoatMap:mt,clearcoatNormalMap:Et,clearcoatRoughnessMap:lt,dispersion:re,retroreflection:N,iridescence:y,iridescenceMap:yt,iridescenceThicknessMap:Lt,sheen:K,sheenColorMap:jt,sheenRoughnessMap:Pt,specularMap:St,specularColorMap:$t,specularIntensityMap:Zt,transmission:q,transmissionMap:te,thicknessMap:H,gradientMap:Dt,opaque:T.transparent===!1&&T.blending===Tr&&T.alphaToCoverage===!1,alphaMap:gt,alphaTest:It,alphaHash:kt,combine:T.combine,mapUv:ue&&w(T.map.channel),aoMapUv:Pe&&w(T.aoMap.channel),lightMapUv:Ue&&w(T.lightMap.channel),bumpMapUv:ge&&w(T.bumpMap.channel),normalMapUv:ke&&w(T.normalMap.channel),displacementMapUv:je&&w(T.displacementMap.channel),emissiveMapUv:mn&&w(T.emissiveMap.channel),metalnessMapUv:We&&w(T.metalnessMap.channel),roughnessMapUv:Ie&&w(T.roughnessMap.channel),anisotropyMapUv:B&&w(T.anisotropyMap.channel),clearcoatMapUv:mt&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Et&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&w(T.sheenRoughnessMap.channel),specularMapUv:St&&w(T.specularMap.channel),specularColorMapUv:$t&&w(T.specularColorMap.channel),specularIntensityMapUv:Zt&&w(T.specularIntensityMap.channel),transmissionMapUv:te&&w(T.transmissionMap.channel),thicknessMapUv:H&&w(T.thicknessMap.channel),alphaMapUv:gt&&w(T.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(ke||G),vertexNormals:!!nt.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!nt.attributes.uv&&(ue||gt),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||nt.attributes.normal===void 0&&ke===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Xt,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:nt.attributes.position!==void 0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Jt,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:tt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:ue&&T.map.isVideoTexture===!0&&be.getTransfer(T.map.colorSpace)===Ne,decodeVideoTextureEmissive:mn&&T.emissiveMap.isVideoTexture===!0&&be.getTransfer(T.emissiveMap.colorSpace)===Ne,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===vi,flipSided:T.side===pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:bt&&T.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&T.extensions.multiDraw===!0||Bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Kt.vertexUv1s=h.has(1),Kt.vertexUv2s=h.has(2),Kt.vertexUv3s=h.has(3),h.clear(),Kt}function x(T){let R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(let V in T.defines)R.push(V),R.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(p(R,T),I(R,T),R.push(i.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function p(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numSunLights),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numSunLightShadows),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function I(T,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),T.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),T.push(o.mask)}function O(T){let R=M[T.type],V;if(R){let Y=Si[R];V=Hd.clone(Y.uniforms)}else V=T.uniforms;return V}function E(T,R){let V=g.get(R);return V!==void 0?++V.usedTimes:(V=new gx(i,R,T,s),u.push(V),g.set(R,V)),V}function L(T){if(--T.usedTimes===0){let R=u.indexOf(T);u[R]=u[u.length-1],u.pop(),g.delete(T.cacheKey),T.destroy()}}function D(T){c.remove(T)}function z(){c.dispose()}return{getParameters:P,getProgramCacheKey:x,getUniforms:O,acquireProgram:E,releaseProgram:L,releaseShaderCache:D,programs:u,dispose:z}}function yx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,h){i.get(o)[c]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function hf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let M=0;return f.isInstancedMesh&&(M+=2),f.isSkinnedMesh&&(M+=1),M}function c(f,M,w,P,x,p){let I=i[t];return I===void 0?(I={id:f.id,object:f,geometry:M,material:w,materialVariant:o(f),groupOrder:P,renderOrder:f.renderOrder,z:x,group:p},i[t]=I):(I.id=f.id,I.object=f,I.geometry=M,I.material=w,I.materialVariant=o(f),I.groupOrder=P,I.renderOrder=f.renderOrder,I.z=x,I.group=p),t++,I}function h(f,M,w,P,x,p,I){I.reversedDepth===!0&&(x=-x);let O=c(f,M,w,P,x,p);w.transmission>0?n.push(O):w.transparent===!0?s.push(O):e.push(O)}function u(f,M,w,P,x,p){let I=c(f,M,w,P,x,p);w.transmission>0?n.unshift(I):w.transparent===!0?s.unshift(I):e.unshift(I)}function g(f,M){e.length>1&&e.sort(f||Mx),n.length>1&&n.sort(M||hf),s.length>1&&s.sort(M||hf)}function v(){for(let f=t,M=i.length;f<M;f++){let w=i[f];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:v,sort:g}}function Sx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new uf,i.set(n,[o])):s>=r.length?(o=new uf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function bx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new it,color:new de};break;case"SpotLight":e={position:new it,direction:new it,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new it,halfWidth:new it,halfHeight:new it};break}return i[t.id]=e,e}}}function Tx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var wx=0;function Ax(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ex(i){let t=new bx,e=Tx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new it);let s=new it,r=new Oe,o=new Oe;function c(u){let g=0,v=0,f=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let M=0,w=0,P=0,x=0,p=0,I=0,O=0,E=0,L=0,D=0,z=0,T=0,R=0,V=0;u.sort(Ax);for(let J=0,tt=u.length;J<tt;J++){let X=u[J],nt=X.color,ht=X.intensity,ot=X.distance,rt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===os?rt=X.shadow.map.texture:rt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=nt.r*ht,v+=nt.g*ht,f+=nt.b*ht;else if(X.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(X.sh.coefficients[et],ht);V++}else if(X.isSunLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let ct=X.shadow,ut=e.get(X);ut.shadowIntensity=ct.intensity,ut.shadowBias=ct.bias,ut.shadowNormalBias=ct.normalBias,ut.shadowRadius=ct.radius,ut.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),n.sunShadow[w]=ut,n.sunShadowMap[w]=rt;let Vt=ct.getViewportCount();for(let Jt=0;Jt<Vt;Jt++)n.sunShadowMatrix[P+Jt]=ct.getMatrix(Jt),n.sunShadowCascade[P+Jt]=ct._cascadeData[Jt];P+=Vt,w++}n.sun[M]=et,M++}else if(X.isDirectionalLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let ct=X.shadow,ut=e.get(X);ut.shadowIntensity=ct.intensity,ut.shadowBias=ct.bias,ut.shadowNormalBias=ct.normalBias,ut.shadowRadius=ct.radius,ut.shadowMapSize=ct.mapSize,n.directionalShadow[x]=ut,n.directionalShadowMap[x]=rt,n.directionalShadowMatrix[x]=X.shadow.matrix,L++}n.directional[x]=et,x++}else if(X.isSpotLight){let et=t.get(X);et.position.setFromMatrixPosition(X.matrixWorld),et.color.copy(nt).multiplyScalar(ht),et.distance=ot,et.coneCos=Math.cos(X.angle),et.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),et.decay=X.decay,n.spot[I]=et;let ct=X.shadow;if(X.map&&(n.spotLightMap[T]=X.map,T++,ct.updateMatrices(X),X.castShadow&&R++),n.spotLightMatrix[I]=ct.matrix,X.castShadow){let ut=e.get(X);ut.shadowIntensity=ct.intensity,ut.shadowBias=ct.bias,ut.shadowNormalBias=ct.normalBias,ut.shadowRadius=ct.radius,ut.shadowMapSize=ct.mapSize,n.spotShadow[I]=ut,n.spotShadowMap[I]=rt,z++}I++}else if(X.isRectAreaLight){let et=t.get(X);et.color.copy(nt).multiplyScalar(ht),et.halfWidth.set(X.width*.5,0,0),et.halfHeight.set(0,X.height*.5,0),n.rectArea[O]=et,O++}else if(X.isPointLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),et.distance=X.distance,et.decay=X.decay,X.castShadow){let ct=X.shadow,ut=e.get(X);ut.shadowIntensity=ct.intensity,ut.shadowBias=ct.bias,ut.shadowNormalBias=ct.normalBias,ut.shadowRadius=ct.radius,ut.shadowMapSize=ct.mapSize,ut.shadowCameraNear=ct.camera.near,ut.shadowCameraFar=ct.camera.far,n.pointShadow[p]=ut,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=X.shadow.matrix,D++}n.point[p]=et,p++}else if(X.isHemisphereLight){let et=t.get(X);et.skyColor.copy(X.color).multiplyScalar(ht),et.groundColor.copy(X.groundColor).multiplyScalar(ht),n.hemi[E]=et,E++}}O>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=v,n.ambient[2]=f;let Y=n.hash;(Y.sunLength!==M||Y.directionalLength!==x||Y.pointLength!==p||Y.spotLength!==I||Y.rectAreaLength!==O||Y.hemiLength!==E||Y.numSunShadows!==w||Y.numDirectionalShadows!==L||Y.numPointShadows!==D||Y.numSpotShadows!==z||Y.numSpotMaps!==T||Y.numLightProbes!==V)&&(n.sun.length=M,n.directional.length=x,n.spot.length=I,n.rectArea.length=O,n.point.length=p,n.hemi.length=E,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.directionalShadowMatrix.length=L,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=z,n.spotShadowMap.length=z,n.spotLightMatrix.length=z+T-R,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=V,Y.sunLength=M,Y.directionalLength=x,Y.pointLength=p,Y.spotLength=I,Y.rectAreaLength=O,Y.hemiLength=E,Y.numSunShadows=w,Y.numDirectionalShadows=L,Y.numPointShadows=D,Y.numSpotShadows=z,Y.numSpotMaps=T,Y.numLightProbes=V,n.version=wx++)}function h(u,g){let v=0,f=0,M=0,w=0,P=0,x=0,p=g.matrixWorldInverse;for(let I=0,O=u.length;I<O;I++){let E=u[I];if(E.isSunLight){let L=n.sun[v];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(p),v++}else if(E.isDirectionalLight){let L=n.directional[f];L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),f++}else if(E.isSpotLight){let L=n.spot[w];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),w++}else if(E.isRectAreaLight){let L=n.rectArea[P];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),P++}else if(E.isPointLight){let L=n.point[M];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(p),M++}else if(E.isHemisphereLight){let L=n.hemi[x];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(p),x++}}}return{setup:c,setupView:h,state:n}}function df(i){let t=new Ex(i),e=[],n=[],s=[];function r(f){v.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function c(f){n.push(f)}function h(f){s.push(f)}function u(){t.setup(e)}function g(f){t.setupView(e,f)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:u,setupLightsView:g,pushLight:o,pushShadow:c,pushLightProbeGrid:h}}function Cx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),c;return o===void 0?(c=new df(i),t.set(s,[c])):r>=o.length?(c=new df(i),o.push(c)):c=o[r],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`,Ix=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],Lx=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],ff=new Oe,ka=new it,Wh=new it;function Dx(i,t,e){let n=new yr,s=new Ae,r=new Ae,o=new qe,c=new Qo,h=new tl,u={},g=e.maxTextureSize,v={[is]:pn,[pn]:is,[vi]:vi},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Rx,fragmentShader:Px}),M=f.clone();M.defines.HORIZONTAL_PASS=1;let w=new Bn;w.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Mn(w,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let p=this.type;this.render=function(D,z,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===pl&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ea);let R=i.getRenderTarget(),V=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),J=i.state;J.setBlending(yi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let tt=p!==this.type;tt&&z.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(nt=>nt.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,nt=D.length;X<nt;X++){let ht=D[X],ot=ht.shadow;if(ot===void 0){se("WebGLShadowMap:",ht,"has no shadow.");continue}if(ot.autoUpdate===!1&&ot.needsUpdate===!1)continue;s.copy(ot.mapSize);let rt=ot.getFrameExtents();s.multiply(rt),r.copy(ot.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(r.x=Math.floor(g/rt.x),s.x=r.x*rt.x,ot.mapSize.x=r.x),s.y>g&&(r.y=Math.floor(g/rt.y),s.y=r.y*rt.y,ot.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(ot.camera._reversedDepth=et,ot.map===null||tt===!0){if(ot.map!==null&&(ot.map.depthTexture!==null&&(ot.map.depthTexture.dispose(),ot.map.depthTexture=null),ot.map.dispose()),this.type===br){if(ht.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ot.map=new Ln(s.x,s.y,{format:os,type:oi,minFilter:fn,magFilter:fn,generateMipmaps:!1}),ot.map.texture.name=ht.name+".shadowMap",ot.map.depthTexture=new Qi(s.x,s.y,qn),ot.map.depthTexture.name=ht.name+".shadowMapDepth",ot.map.depthTexture.format=mi,ot.map.depthTexture.compareFunction=null,ot.map.depthTexture.minFilter=$e,ot.map.depthTexture.magFilter=$e}else ht.isPointLight?(ot.map=new ac(s.x),ot.map.depthTexture=new $o(s.x,ai)):(ot.map=new Ln(s.x,s.y),ot.map.depthTexture=new Qi(s.x,s.y,ai)),ot.map.depthTexture.name=ht.name+".shadowMap",ot.map.depthTexture.format=mi,this.type===Ea?(ot.map.depthTexture.compareFunction=et?nc:ec,ot.map.depthTexture.minFilter=fn,ot.map.depthTexture.magFilter=fn):(ot.map.depthTexture.compareFunction=null,ot.map.depthTexture.minFilter=$e,ot.map.depthTexture.magFilter=$e);ot.camera.updateProjectionMatrix()}ot.map.isWebGLCubeRenderTarget!==!0&&(ot.map.width!==s.x||ot.map.height!==s.y)&&ot.map.setSize(s.x,s.y);let ct=ot.map.isWebGLCubeRenderTarget?6:ot.getViewportCount();ht.isPointLight!==!0&&ot.updateMatrices(ht,T);for(let ut=0;ut<ct;ut++){let Vt=ot.getCamera(ut);if(ht.isPointLight){let Jt=ot.camera,Be=ot.matrix,ye=ht.distance||Jt.far;ye!==Jt.far&&(Jt.far=ye,Jt.updateProjectionMatrix()),ka.setFromMatrixPosition(ht.matrixWorld),Jt.position.copy(ka),Wh.copy(Jt.position),Wh.add(Ix[ut]),Jt.up.copy(Lx[ut]),Jt.lookAt(Wh),Jt.updateMatrixWorld(),Be.makeTranslation(-ka.x,-ka.y,-ka.z),ff.multiplyMatrices(Jt.projectionMatrix,Jt.matrixWorldInverse),ot._frustum.setFromProjectionMatrix(ff,Jt.coordinateSystem,Jt.reversedDepth)}if(ot.map.isWebGLCubeRenderTarget)i.setRenderTarget(ot.map,ut),i.clear();else{ut===0&&(i.setRenderTarget(ot.map),i.clear());let Jt=ot.getViewport(ut);o.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),J.viewport(o)}n=ot.getFrustum(ut),E(z,T,Vt,ht,this.type)}ot.isPointLightShadow!==!0&&this.type===br&&I(ot,T),ot.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(R,V,Y)};function I(D,z){let T=t.update(P);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null?D.mapPass=new Ln(s.x,s.y,{format:os,type:oi}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),f.uniforms.shadow_pass.value=D.map.depthTexture,f.uniforms.resolution.value.set(D.map.width,D.map.height),f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(z,null,T,f,P,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value.set(D.map.width,D.map.height),M.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(z,null,T,M,P,null)}function O(D,z,T,R){let V=null,Y=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(Y!==void 0)V=Y;else if(V=T.isPointLight===!0?h:c,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let J=V.uuid,tt=z.uuid,X=u[J];X===void 0&&(X={},u[J]=X);let nt=X[tt];nt===void 0&&(nt=V.clone(),X[tt]=nt,z.addEventListener("dispose",L)),V=nt}if(V.visible=z.visible,V.wireframe=z.wireframe,R===br?V.side=z.shadowSide!==null?z.shadowSide:z.side:V.side=z.shadowSide!==null?z.shadowSide:v[z.side],V.alphaMap=z.alphaMap,V.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,V.map=z.map,V.clipShadows=z.clipShadows,V.clippingPlanes=z.clippingPlanes,V.clipIntersection=z.clipIntersection,V.displacementMap=z.displacementMap,V.displacementScale=z.displacementScale,V.displacementBias=z.displacementBias,V.wireframeLinewidth=z.wireframeLinewidth,V.linewidth=z.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let J=i.properties.get(V);J.light=T}return V}function E(D,z,T,R,V){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&V===br)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);let tt=t.update(D),X=D.material;if(Array.isArray(X)){let nt=tt.groups;for(let ht=0,ot=nt.length;ht<ot;ht++){let rt=nt[ht],et=X[rt.materialIndex];if(et&&et.visible){let ct=O(D,et,R,V);D.onBeforeShadow(i,D,z,T,tt,ct,rt),i.renderBufferDirect(T,null,tt,ct,D,rt),D.onAfterShadow(i,D,z,T,tt,ct,rt)}}}else if(X.visible){let nt=O(D,X,R,V);D.onBeforeShadow(i,D,z,T,tt,nt,null),i.renderBufferDirect(T,null,tt,nt,D,null),D.onAfterShadow(i,D,z,T,tt,nt,null)}}let J=D.children;for(let tt=0,X=J.length;tt<X;tt++)E(J[tt],z,T,R,V)}function L(D){D.target.removeEventListener("dispose",L);for(let T in u){let R=u[T],V=D.target.uuid;V in R&&(R[V].dispose(),delete R[V])}}}function Nx(i,t){function e(){let H=!1,Dt=new qe,gt=null,It=new qe(0,0,0,0);return{setMask:function(kt){gt!==kt&&!H&&(i.colorMask(kt,kt,kt,kt),gt=kt)},setLocked:function(kt){H=kt},setClear:function(kt,bt,zt,Kt,Le){Le===!0&&(kt*=Kt,bt*=Kt,zt*=Kt),Dt.set(kt,bt,zt,Kt),It.equals(Dt)===!1&&(i.clearColor(kt,bt,zt,Kt),It.copy(Dt))},reset:function(){H=!1,gt=null,It.set(-1,0,0,0)}}}function n(){let H=!1,Dt=!1,gt=null,It=null,kt=null;return{setReversed:function(bt){if(Dt!==bt){let zt=t.get("EXT_clip_control");bt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Dt=bt;let Kt=kt;kt=null,this.setClear(Kt)}},getReversed:function(){return Dt},setTest:function(bt){bt?_t(i.DEPTH_TEST):Xt(i.DEPTH_TEST)},setMask:function(bt){gt!==bt&&!H&&(i.depthMask(bt),gt=bt)},setFunc:function(bt){if(Dt&&(bt=Vd[bt]),It!==bt){switch(bt){case Fo:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=bt}},setLocked:function(bt){H=bt},setClear:function(bt){kt!==bt&&(kt=bt,Dt&&(bt=1-bt),i.clearDepth(bt))},reset:function(){H=!1,gt=null,It=null,kt=null,Dt=!1}}}function s(){let H=!1,Dt=null,gt=null,It=null,kt=null,bt=null,zt=null,Kt=null,Le=null;return{setTest:function(Te){H||(Te?_t(i.STENCIL_TEST):Xt(i.STENCIL_TEST))},setMask:function(Te){Dt!==Te&&!H&&(i.stencilMask(Te),Dt=Te)},setFunc:function(Te,hn,zn){(gt!==Te||It!==hn||kt!==zn)&&(i.stencilFunc(Te,hn,zn),gt=Te,It=hn,kt=zn)},setOp:function(Te,hn,zn){(bt!==Te||zt!==hn||Kt!==zn)&&(i.stencilOp(Te,hn,zn),bt=Te,zt=hn,Kt=zn)},setLocked:function(Te){H=Te},setClear:function(Te){Le!==Te&&(i.clearStencil(Te),Le=Te)},reset:function(){H=!1,Dt=null,gt=null,It=null,kt=null,bt=null,zt=null,Kt=null,Le=null}}}let r=new e,o=new n,c=new s,h=new WeakMap,u=new WeakMap,g={},v={},f={},M=new WeakMap,w=[],P=null,x=!1,p=null,I=null,O=null,E=null,L=null,D=null,z=null,T=new de(0,0,0),R=0,V=!1,Y=null,J=null,tt=null,X=null,nt=null,ht=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ot=!1,rt=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(et)[1]),ot=rt>=1):et.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),ot=rt>=2);let ct=null,ut={},Vt=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),Be=new qe().fromArray(Vt),ye=new qe().fromArray(Jt);function Re(H,Dt,gt,It){let kt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(H,bt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<gt;zt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,kt):i.texImage2D(Dt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,kt);return bt}let pt={};pt[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),_t(i.DEPTH_TEST),o.setFunc(mr),ge(!1),ke(dh),_t(i.CULL_FACE),Pe(yi);function _t(H){g[H]!==!0&&(i.enable(H),g[H]=!0)}function Xt(H){g[H]!==!1&&(i.disable(H),g[H]=!1)}function ie(H,Dt){return f[H]!==Dt?(i.bindFramebuffer(H,Dt),f[H]=Dt,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Dt),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Bt(H,Dt){let gt=w,It=!1;if(H){gt=M.get(Dt),gt===void 0&&(gt=[],M.set(Dt,gt));let kt=H.textures;if(gt.length!==kt.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,zt=kt.length;bt<zt;bt++)gt[bt]=i.COLOR_ATTACHMENT0+bt;gt.length=kt.length,It=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,It=!0);It&&i.drawBuffers(gt)}function ue(H){return P!==H?(i.useProgram(H),P=H,!0):!1}let He={[Rs]:i.FUNC_ADD,[ld]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};He[hd]=i.MIN,He[ud]=i.MAX;let me={[dd]:i.ZERO,[fd]:i.ONE,[pd]:i.SRC_COLOR,[gh]:i.SRC_ALPHA,[yd]:i.SRC_ALPHA_SATURATE,[xd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[_h]:i.ONE_MINUS_SRC_ALPHA,[vd]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[Md]:i.CONSTANT_COLOR,[Sd]:i.ONE_MINUS_CONSTANT_COLOR,[bd]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function Pe(H,Dt,gt,It,kt,bt,zt,Kt,Le,Te){if(H===yi){x===!0&&(Xt(i.BLEND),x=!1);return}if(x===!1&&(_t(i.BLEND),x=!0),H!==od){if(H!==p||Te!==V){if((I!==Rs||L!==Rs)&&(i.blendEquation(i.FUNC_ADD),I=Rs,L=Rs),Te)switch(H){case Tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFunc(i.ONE,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:oe("WebGLState: Invalid blending: ",H);break}else switch(H){case Tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ph:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mh:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",H);break}O=null,E=null,D=null,z=null,T.set(0,0,0),R=0,p=H,V=Te}return}kt=kt||Dt,bt=bt||gt,zt=zt||It,(Dt!==I||kt!==L)&&(i.blendEquationSeparate(He[Dt],He[kt]),I=Dt,L=kt),(gt!==O||It!==E||bt!==D||zt!==z)&&(i.blendFuncSeparate(me[gt],me[It],me[bt],me[zt]),O=gt,E=It,D=bt,z=zt),(Kt.equals(T)===!1||Le!==R)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Le),T.copy(Kt),R=Le),p=H,V=!1}function Ue(H,Dt){H.side===vi?Xt(i.CULL_FACE):_t(i.CULL_FACE);let gt=H.side===pn;Dt&&(gt=!gt),ge(gt),H.blending===Tr&&H.transparent===!1?Pe(yi):Pe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let It=H.stencilWrite;c.setTest(It),It&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),mn(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(H){Y!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),Y=H)}function ke(H){H!==rd?(_t(i.CULL_FACE),H!==J&&(H===dh?i.cullFace(i.BACK):H===ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xt(i.CULL_FACE),J=H}function je(H){H!==tt&&(ot&&i.lineWidth(H),tt=H)}function mn(H,Dt,gt){H?(_t(i.POLYGON_OFFSET_FILL),(X!==Dt||nt!==gt)&&(X=Dt,nt=gt,o.getReversed()&&(Dt=-Dt),i.polygonOffset(Dt,gt))):Xt(i.POLYGON_OFFSET_FILL)}function We(H){H?_t(i.SCISSOR_TEST):Xt(i.SCISSOR_TEST)}function Ie(H){H===void 0&&(H=i.TEXTURE0+ht-1),ct!==H&&(i.activeTexture(H),ct=H)}function G(H,Dt,gt){gt===void 0&&(ct===null?gt=i.TEXTURE0+ht-1:gt=ct);let It=ut[gt];It===void 0&&(It={type:void 0,texture:void 0},ut[gt]=It),(It.type!==H||It.texture!==Dt)&&(ct!==gt&&(i.activeTexture(gt),ct=gt),i.bindTexture(H,Dt||pt[H]),It.type=H,It.texture=Dt)}function on(){let H=ut[ct];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(H){oe("WebGLState:",H)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(H){oe("WebGLState:",H)}}function y(){try{i.texSubImage2D(...arguments)}catch(H){oe("WebGLState:",H)}}function K(){try{i.texSubImage3D(...arguments)}catch(H){oe("WebGLState:",H)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(H){oe("WebGLState:",H)}}function B(){try{i.compressedTexSubImage3D(...arguments)}catch(H){oe("WebGLState:",H)}}function mt(){try{i.texStorage2D(...arguments)}catch(H){oe("WebGLState:",H)}}function Et(){try{i.texStorage3D(...arguments)}catch(H){oe("WebGLState:",H)}}function lt(){try{i.texImage2D(...arguments)}catch(H){oe("WebGLState:",H)}}function yt(){try{i.texImage3D(...arguments)}catch(H){oe("WebGLState:",H)}}function Lt(H){return v[H]!==void 0?v[H]:i.getParameter(H)}function jt(H,Dt){v[H]!==Dt&&(i.pixelStorei(H,Dt),v[H]=Dt)}function Pt(H){Be.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Be.copy(H))}function St(H){ye.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),ye.copy(H))}function $t(H,Dt){let gt=u.get(Dt);gt===void 0&&(gt=new WeakMap,u.set(Dt,gt));let It=gt.get(H);It===void 0&&(It=i.getUniformBlockIndex(Dt,H.name),gt.set(H,It))}function Zt(H,Dt){let It=u.get(Dt).get(H);h.get(Dt)!==It&&(i.uniformBlockBinding(Dt,It,H.__bindingPointIndex),h.set(Dt,It))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),g={},v={},ct=null,ut={},f={},M=new WeakMap,w=[],P=null,x=!1,p=null,I=null,O=null,E=null,L=null,D=null,z=null,T=new de(0,0,0),R=0,V=!1,Y=null,J=null,tt=null,X=null,nt=null,Be.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:_t,disable:Xt,bindFramebuffer:ie,drawBuffers:Bt,useProgram:ue,setBlending:Pe,setMaterial:Ue,setFlipSided:ge,setCullFace:ke,setLineWidth:je,setPolygonOffset:mn,setScissorTest:We,activeTexture:Ie,bindTexture:G,unbindTexture:on,compressedTexImage2D:re,compressedTexImage3D:N,texImage2D:lt,texImage3D:yt,pixelStorei:jt,getParameter:Lt,updateUBOMapping:$t,uniformBlockBinding:Zt,texStorage2D:mt,texStorage3D:Et,texSubImage2D:y,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:B,scissor:Pt,viewport:St,reset:te}}function Ux(i,t,e,n,s,r,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ae,g=new WeakMap,v=new Set,f,M=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(N,y){return w?new OffscreenCanvas(N,y):oa("canvas")}function x(N,y,K){let q=1,B=re(N);if((B.width>K||B.height>K)&&(q=K/Math.max(B.width,B.height)),q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let mt=Math.floor(q*B.width),Et=Math.floor(q*B.height);f===void 0&&(f=P(mt,Et));let lt=y?P(mt,Et):f;return lt.width=mt,lt.height=Et,lt.getContext("2d").drawImage(N,0,0,mt,Et),se("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+mt+"x"+Et+")."),lt}else return"data"in N&&se("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),N;return N}function p(N){return N.generateMipmaps}function I(N){i.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(N,y,K,q,B,mt=!1){if(N!==null){if(i[N]!==void 0)return i[N];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Et;q&&(Et=t.get("EXT_texture_norm16"),Et||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=y;if(y===i.RED&&(K===i.FLOAT&&(lt=i.R32F),K===i.HALF_FLOAT&&(lt=i.R16F),K===i.UNSIGNED_BYTE&&(lt=i.R8),K===i.UNSIGNED_SHORT&&Et&&(lt=Et.R16_EXT),K===i.SHORT&&Et&&(lt=Et.R16_SNORM_EXT)),y===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.R8UI),K===i.UNSIGNED_SHORT&&(lt=i.R16UI),K===i.UNSIGNED_INT&&(lt=i.R32UI),K===i.BYTE&&(lt=i.R8I),K===i.SHORT&&(lt=i.R16I),K===i.INT&&(lt=i.R32I)),y===i.RG&&(K===i.FLOAT&&(lt=i.RG32F),K===i.HALF_FLOAT&&(lt=i.RG16F),K===i.UNSIGNED_BYTE&&(lt=i.RG8),K===i.UNSIGNED_SHORT&&Et&&(lt=Et.RG16_EXT),K===i.SHORT&&Et&&(lt=Et.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RG8UI),K===i.UNSIGNED_SHORT&&(lt=i.RG16UI),K===i.UNSIGNED_INT&&(lt=i.RG32UI),K===i.BYTE&&(lt=i.RG8I),K===i.SHORT&&(lt=i.RG16I),K===i.INT&&(lt=i.RG32I)),y===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),K===i.UNSIGNED_INT&&(lt=i.RGB32UI),K===i.BYTE&&(lt=i.RGB8I),K===i.SHORT&&(lt=i.RGB16I),K===i.INT&&(lt=i.RGB32I)),y===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),K===i.UNSIGNED_INT&&(lt=i.RGBA32UI),K===i.BYTE&&(lt=i.RGBA8I),K===i.SHORT&&(lt=i.RGBA16I),K===i.INT&&(lt=i.RGBA32I)),y===i.RGB&&(K===i.UNSIGNED_SHORT&&Et&&(lt=Et.RGB16_EXT),K===i.SHORT&&Et&&(lt=Et.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),y===i.RGBA){let yt=mt?aa:be.getTransfer(B);K===i.FLOAT&&(lt=i.RGBA32F),K===i.HALF_FLOAT&&(lt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(lt=yt===Ne?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Et&&(lt=Et.RGBA16_EXT),K===i.SHORT&&Et&&(lt=Et.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function L(N,y){let K;return N?y===null||y===ai||y===Ar?K=i.DEPTH24_STENCIL8:y===qn?K=i.DEPTH32F_STENCIL8:y===wr&&(K=i.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ai||y===Ar?K=i.DEPTH_COMPONENT24:y===qn?K=i.DEPTH_COMPONENT32F:y===wr&&(K=i.DEPTH_COMPONENT16),K}function D(N,y){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==$e&&N.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?y.mipmaps.length:1}function z(N){let y=N.target;y.removeEventListener("dispose",z),R(y),y.isVideoTexture&&g.delete(y),y.isHTMLTexture&&v.delete(y)}function T(N){let y=N.target;y.removeEventListener("dispose",T),Y(y)}function R(N){let y=n.get(N);if(y.__webglInit===void 0)return;let K=N.source,q=M.get(K);if(q){let B=q[y.__cacheKey];B.usedTimes--,B.usedTimes===0&&V(N),Object.keys(q).length===0&&M.delete(K)}n.remove(N)}function V(N){let y=n.get(N);i.deleteTexture(y.__webglTexture);let K=N.source,q=M.get(K);delete q[y.__cacheKey],o.memory.textures--}function Y(N){let y=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let B=0;B<y.__webglFramebuffer[q].length;B++)i.deleteFramebuffer(y.__webglFramebuffer[q][B]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let K=N.textures;for(let q=0,B=K.length;q<B;q++){let mt=n.get(K[q]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(K[q])}n.remove(N)}let J=0;function tt(){J=0}function X(){return J}function nt(N){J=N}function ht(){let N=J;return N>=s.maxTextures&&se("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,N}function ot(N){let y=[];return y.push(N.wrapS),y.push(N.wrapT),y.push(N.wrapR||0),y.push(N.magFilter),y.push(N.minFilter),y.push(N.anisotropy),y.push(N.internalFormat),y.push(N.format),y.push(N.type),y.push(N.generateMipmaps),y.push(N.premultiplyAlpha),y.push(N.flipY),y.push(N.unpackAlignment),y.push(N.colorSpace),y.join()}function rt(N,y){let K=n.get(N);if(N.isVideoTexture&&G(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&K.__version!==N.version){let q=N.image;if(q===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(K,N,y);return}}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+y)}function et(N,y){let K=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){Xt(K,N,y);return}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+y)}function ct(N,y){let K=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){Xt(K,N,y);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+y)}function ut(N,y){let K=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&K.__version!==N.version){ie(K,N,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+y)}let Vt={[Ho]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Wo]:i.MIRRORED_REPEAT},Jt={[$e]:i.NEAREST,[Ed]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[_l]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},Be={[Id]:i.NEVER,[Fd]:i.ALWAYS,[Ld]:i.LESS,[ec]:i.LEQUAL,[Dd]:i.EQUAL,[nc]:i.GEQUAL,[Nd]:i.GREATER,[Ud]:i.NOTEQUAL};function ye(N,y){if(y.type===qn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===fn||y.magFilter===_l||y.magFilter===Pa||y.magFilter===rs||y.minFilter===fn||y.minFilter===_l||y.minFilter===Pa||y.minFilter===rs)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Vt[y.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Vt[y.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Vt[y.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Jt[y.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Jt[y.minFilter]),y.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Be[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$e||y.minFilter!==Pa&&y.minFilter!==rs||y.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Re(N,y){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,y.addEventListener("dispose",z));let q=y.source,B=M.get(q);B===void 0&&(B={},M.set(q,B));let mt=ot(y);if(mt!==N.__cacheKey){B[mt]===void 0&&(B[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),B[mt].usedTimes++;let Et=B[N.__cacheKey];Et!==void 0&&(B[N.__cacheKey].usedTimes--,Et.usedTimes===0&&V(y)),N.__cacheKey=mt,N.__webglTexture=B[mt].texture}return K}function pt(N,y,K){return Math.floor(Math.floor(N/K)/y)}function _t(N,y,K,q){let mt=N.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,K,q,y.data);else{mt.sort((jt,Pt)=>jt.start-Pt.start);let Et=0;for(let jt=1;jt<mt.length;jt++){let Pt=mt[Et],St=mt[jt],$t=Pt.start+Pt.count,Zt=pt(St.start,y.width,4),te=pt(Pt.start,y.width,4);St.start<=$t+1&&Zt===te&&pt(St.start+St.count-1,y.width,4)===Zt?Pt.count=Math.max(Pt.count,St.start+St.count-Pt.start):(++Et,mt[Et]=St)}mt.length=Et+1;let lt=e.getParameter(i.UNPACK_ROW_LENGTH),yt=e.getParameter(i.UNPACK_SKIP_PIXELS),Lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let jt=0,Pt=mt.length;jt<Pt;jt++){let St=mt[jt],$t=Math.floor(St.start/4),Zt=Math.ceil(St.count/4),te=$t%y.width,H=Math.floor($t/y.width),Dt=Zt,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,te,H,Dt,gt,K,q,y.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function Xt(N,y,K){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);let B=Re(N,y),mt=y.source;e.bindTexture(q,N.__webglTexture,i.TEXTURE0+K);let Et=n.get(mt);if(mt.version!==Et.__version||B===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let gt=be.getPrimaries(be.workingColorSpace),It=y.colorSpace===Ui?null:be.getPrimaries(y.colorSpace),kt=y.colorSpace===Ui||gt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let yt=x(y.image,!1,s.maxTextureSize);yt=on(y,yt);let Lt=r.convert(y.format,y.colorSpace),jt=r.convert(y.type),Pt=E(y.internalFormat,Lt,jt,y.normalized,y.colorSpace,y.isVideoTexture);ye(q,y);let St,$t=y.mipmaps,Zt=y.isVideoTexture!==!0,te=Et.__version===void 0||B===!0,H=mt.dataReady,Dt=D(y,yt);if(y.isDepthTexture)Pt=L(y.format===as,y.type),te&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Pt,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,yt.width,yt.height,0,Lt,jt,null));else if(y.isDataTexture)if($t.length>0){Zt&&te&&e.texStorage2D(i.TEXTURE_2D,Dt,Pt,$t[0].width,$t[0].height);for(let gt=0,It=$t.length;gt<It;gt++)St=$t[gt],Zt?H&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,St.width,St.height,Lt,jt,St.data):e.texImage2D(i.TEXTURE_2D,gt,Pt,St.width,St.height,0,Lt,jt,St.data);y.generateMipmaps=!1}else Zt?(te&&e.texStorage2D(i.TEXTURE_2D,Dt,Pt,yt.width,yt.height),H&&_t(y,yt,Lt,jt)):e.texImage2D(i.TEXTURE_2D,0,Pt,yt.width,yt.height,0,Lt,jt,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Zt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Pt,$t[0].width,$t[0].height,yt.depth);for(let gt=0,It=$t.length;gt<It;gt++)if(St=$t[gt],y.format!==Yn)if(Lt!==null)if(Zt){if(H)if(y.layerUpdates.size>0){let kt=Bh(St.width,St.height,y.format,y.type);for(let bt of y.layerUpdates){let zt=St.data.subarray(bt*kt/St.data.BYTES_PER_ELEMENT,(bt+1)*kt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,bt,St.width,St.height,1,Lt,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,St.width,St.height,yt.depth,Lt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Pt,St.width,St.height,yt.depth,0,St.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,St.width,St.height,yt.depth,Lt,jt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Pt,St.width,St.height,yt.depth,0,Lt,jt,St.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Zt&&te&&e.texStorage2D(i.TEXTURE_2D,Dt,Pt,$t[0].width,$t[0].height);for(let gt=0,It=$t.length;gt<It;gt++)St=$t[gt],y.format!==Yn?Lt!==null?Zt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,St.width,St.height,Lt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Pt,St.width,St.height,0,St.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?H&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,St.width,St.height,Lt,jt,St.data):e.texImage2D(i.TEXTURE_2D,gt,Pt,St.width,St.height,0,Lt,jt,St.data)}else if(y.isDataArrayTexture)if(Zt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Pt,yt.width,yt.height,yt.depth),H)if(y.layerUpdates.size>0){let gt=Bh(yt.width,yt.height,y.format,y.type);for(let It of y.layerUpdates){let kt=yt.data.subarray(It*gt/yt.data.BYTES_PER_ELEMENT,(It+1)*gt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,It,yt.width,yt.height,1,Lt,jt,kt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Lt,jt,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,yt.width,yt.height,yt.depth,0,Lt,jt,yt.data);else if(y.isData3DTexture)Zt?(te&&e.texStorage3D(i.TEXTURE_3D,Dt,Pt,yt.width,yt.height,yt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Lt,jt,yt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,yt.width,yt.height,yt.depth,0,Lt,jt,yt.data);else if(y.isFramebufferTexture){if(te)if(Zt)e.texStorage2D(i.TEXTURE_2D,Dt,Pt,yt.width,yt.height);else{let gt=yt.width,It=yt.height;for(let kt=0;kt<Dt;kt++)e.texImage2D(i.TEXTURE_2D,kt,Pt,gt,It,0,Lt,jt,null),gt>>=1,It>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),yt.parentNode!==gt){gt.appendChild(yt),v.add(y),gt.onpaint=It=>{let kt=It.changedElements;for(let bt of v)kt.includes(bt.image)&&(bt.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,yt);else{let kt=i.RGBA,bt=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,kt,bt,zt,yt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($t.length>0){if(Zt&&te){let gt=re($t[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Pt,gt.width,gt.height)}for(let gt=0,It=$t.length;gt<It;gt++)St=$t[gt],Zt?H&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Lt,jt,St):e.texImage2D(i.TEXTURE_2D,gt,Pt,Lt,jt,St);y.generateMipmaps=!1}else if(Zt){if(te){let gt=re(yt);e.texStorage2D(i.TEXTURE_2D,Dt,Pt,gt.width,gt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,jt,yt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,Lt,jt,yt);p(y)&&I(q),Et.__version=mt.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function ie(N,y,K){if(y.image.length!==6)return;let q=Re(N,y),B=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+K);let mt=n.get(B);if(B.version!==mt.__version||q===!0){e.activeTexture(i.TEXTURE0+K);let Et=be.getPrimaries(be.workingColorSpace),lt=y.colorSpace===Ui?null:be.getPrimaries(y.colorSpace),yt=y.colorSpace===Ui||Et===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Lt=y.isCompressedTexture||y.image[0].isCompressedTexture,jt=y.image[0]&&y.image[0].isDataTexture,Pt=[];for(let bt=0;bt<6;bt++)!Lt&&!jt?Pt[bt]=x(y.image[bt],!0,s.maxCubemapSize):Pt[bt]=jt?y.image[bt].image:y.image[bt],Pt[bt]=on(y,Pt[bt]);let St=Pt[0],$t=r.convert(y.format,y.colorSpace),Zt=r.convert(y.type),te=E(y.internalFormat,$t,Zt,y.normalized,y.colorSpace),H=y.isVideoTexture!==!0,Dt=mt.__version===void 0||q===!0,gt=B.dataReady,It=D(y,St);ye(i.TEXTURE_CUBE_MAP,y);let kt;if(Lt){H&&Dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,te,St.width,St.height);for(let bt=0;bt<6;bt++){kt=Pt[bt].mipmaps;for(let zt=0;zt<kt.length;zt++){let Kt=kt[zt];y.format!==Yn?$t!==null?H?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt,0,0,Kt.width,Kt.height,$t,Kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt,te,Kt.width,Kt.height,0,Kt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt,0,0,Kt.width,Kt.height,$t,Zt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt,te,Kt.width,Kt.height,0,$t,Zt,Kt.data)}}}else{if(kt=y.mipmaps,H&&Dt){kt.length>0&&It++;let bt=re(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,te,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(jt){H?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Pt[bt].width,Pt[bt].height,$t,Zt,Pt[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,te,Pt[bt].width,Pt[bt].height,0,$t,Zt,Pt[bt].data);for(let zt=0;zt<kt.length;zt++){let Le=kt[zt].image[bt].image;H?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt+1,0,0,Le.width,Le.height,$t,Zt,Le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt+1,te,Le.width,Le.height,0,$t,Zt,Le.data)}}else{H?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,$t,Zt,Pt[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,te,$t,Zt,Pt[bt]);for(let zt=0;zt<kt.length;zt++){let Kt=kt[zt];H?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt+1,0,0,$t,Zt,Kt.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,zt+1,te,$t,Zt,Kt.image[bt])}}}p(y)&&I(i.TEXTURE_CUBE_MAP),mt.__version=B.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function Bt(N,y,K,q,B,mt){let Et=r.convert(K.format,K.colorSpace),lt=r.convert(K.type),yt=E(K.internalFormat,Et,lt,K.normalized,K.colorSpace),Lt=n.get(y),jt=n.get(K);if(jt.__renderTarget=y,!Lt.__hasExternalTextures){let Pt=Math.max(1,y.width>>mt),St=Math.max(1,y.height>>mt);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?e.texImage3D(B,mt,yt,Pt,St,y.depth,0,Et,lt,null):e.texImage2D(B,mt,yt,Pt,St,0,Et,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Ie(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,B,jt.__webglTexture,0,We(y)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,B,jt.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(N,y,K){if(i.bindRenderbuffer(i.RENDERBUFFER,N),y.depthBuffer){let q=y.depthTexture,B=q&&q.isDepthTexture?q.type:null,mt=L(y.stencilBuffer,B),Et=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(y),mt,y.width,y.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(y),mt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,mt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,N)}else{let q=y.textures;for(let B=0;B<q.length;B++){let mt=q[B],Et=r.convert(mt.format,mt.colorSpace),lt=r.convert(mt.type),yt=E(mt.internalFormat,Et,lt,mt.normalized,mt.colorSpace);Ie(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(y),yt,y.width,y.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(y),yt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,yt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(N,y,K){let q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B=n.get(y.depthTexture);if(B.__renderTarget=y,(!B.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(B.__webglInit===void 0&&(B.__webglInit=!0,y.depthTexture.addEventListener("dispose",z)),B.__webglTexture===void 0){B.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),ye(i.TEXTURE_CUBE_MAP,y.depthTexture);let Lt=r.convert(y.depthTexture.format),jt=r.convert(y.depthTexture.type),Pt;y.depthTexture.format===mi?Pt=i.DEPTH_COMPONENT24:y.depthTexture.format===as&&(Pt=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Pt,y.width,y.height,0,Lt,jt,null)}}else rt(y.depthTexture,0);let mt=B.__webglTexture,Et=We(y),lt=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,yt=y.depthTexture.format===as?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===mi)Ie(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,lt,mt,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,yt,lt,mt,0);else if(y.depthTexture.format===as)Ie(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,lt,mt,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,yt,lt,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(N){let y=n.get(N),K=N.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==N.depthTexture){let q=N.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let B=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",B)};q.addEventListener("dispose",B),y.__depthDisposeCallback=B}y.__boundDepthTexture=q}if(N.depthTexture&&!y.__autoAllocateDepthBuffer)if(K)for(let q=0;q<6;q++)He(y.__webglFramebuffer[q],N,q);else{let q=N.texture.mipmaps;q&&q.length>0?He(y.__webglFramebuffer[0],N,0):He(y.__webglFramebuffer,N,0)}else if(K){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),ue(y.__webglDepthbuffer[q],N,!1);else{let B=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,mt)}}else{let q=N.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ue(y.__webglDepthbuffer,N,!1);else{let B=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(N,y,K){let q=n.get(N);y!==void 0&&Bt(q.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&me(N)}function Ue(N){let y=N.texture,K=n.get(N),q=n.get(y);N.addEventListener("dispose",T);let B=N.textures,mt=N.isWebGLCubeRenderTarget===!0,Et=B.length>1;if(Et||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,o.memory.textures++),mt){K.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[lt]=[];for(let yt=0;yt<y.mipmaps.length;yt++)K.__webglFramebuffer[lt][yt]=i.createFramebuffer()}else K.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)K.__webglFramebuffer[lt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Et)for(let lt=0,yt=B.length;lt<yt;lt++){let Lt=n.get(B[lt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Ie(N)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let lt=0;lt<B.length;lt++){let yt=B[lt];K.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[lt]);let Lt=r.convert(yt.format,yt.colorSpace),jt=r.convert(yt.type),Pt=E(yt.internalFormat,Lt,jt,yt.normalized,yt.colorSpace,N.isXRRenderTarget===!0),St=We(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Pt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,K.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(K.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ye(i.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)Bt(K.__webglFramebuffer[lt][yt],N,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,yt);else Bt(K.__webglFramebuffer[lt],N,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(y)&&I(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,yt=B.length;lt<yt;lt++){let Lt=B[lt],jt=n.get(Lt),Pt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Pt,jt.__webglTexture),ye(Pt,Lt),Bt(K.__webglFramebuffer,N,Lt,i.COLOR_ATTACHMENT0+lt,Pt,0),p(Lt)&&I(Pt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(lt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,q.__webglTexture),ye(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)Bt(K.__webglFramebuffer[yt],N,y,i.COLOR_ATTACHMENT0,lt,yt);else Bt(K.__webglFramebuffer,N,y,i.COLOR_ATTACHMENT0,lt,0);p(y)&&I(lt),e.unbindTexture()}N.depthBuffer&&me(N)}function ge(N){let y=N.textures;for(let K=0,q=y.length;K<q;K++){let B=y[K];if(p(B)){let mt=O(N),Et=n.get(B).__webglTexture;e.bindTexture(mt,Et),I(mt),e.unbindTexture()}}}let ke=[],je=[];function mn(N){if(N.samples>0){if(Ie(N)===!1){let y=N.textures,K=N.width,q=N.height,B=i.COLOR_BUFFER_BIT,mt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(N),lt=y.length>1;if(lt)for(let Lt=0;Lt<y.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let yt=N.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Lt=0;Lt<y.length;Lt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Lt]);let jt=n.get(y[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,K,q,0,0,K,q,B,i.NEAREST),h===!0&&(ke.length=0,je.length=0,ke.push(i.COLOR_ATTACHMENT0+Lt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(ke.push(mt),je.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Lt=0;Lt<y.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Lt]);let jt=n.get(y[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&h){let y=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function We(N){return Math.min(s.maxSamples,N.samples)}function Ie(N){let y=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function G(N){let y=o.render.frame;g.get(N)!==y&&(g.set(N,y),N.update())}function on(N,y){let K=N.colorSpace,q=N.format,B=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==ra&&K!==Ui&&(be.getTransfer(K)===Ne?(q!==Yn||B!==Dn)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",K)),y}function re(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=ht,this.resetTextureUnits=tt,this.getTextureUnits=X,this.setTextureUnits=nt,this.setTexture2D=rt,this.setTexture2DArray=et,this.setTexture3D=ct,this.setTextureCube=ut,this.rebindTextures=Pe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Fx(i,t){function e(n,s=Ui){let r,o=be.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ah)return i.BYTE;if(n===Eh)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===Ph)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Yn)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Er)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===os)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Ia||n===La||n===Da||n===Na)if(o===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===wl||n===Al||n===El)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Ua||n===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cl||n===Rl)return o===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Il)return r.COMPRESSED_R11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return r.COMPRESSED_RG11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===Zl||n===Kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jl)return o===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===jl||n===Fa||n===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
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

}`,jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Rn({vertexShader:Ox,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mn(new va(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qh=class extends gi{constructor(t,e){super();let n=this,s=null,r=1,o=null,c="local-floor",h=1,u=null,g=null,v=null,f=null,M=null,w=null,P=typeof XRWebGLBinding<"u",x=new jh,p={},I=e.getContextAttributes(),O=null,E=null,L=[],D=[],z=new Ae,T=null,R=null,V=new vn;V.viewport=new qe;let Y=new vn;Y.viewport=new qe;let J=[V,Y],tt=new fl,X=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let _t=L[pt];return _t===void 0&&(_t=new vr,L[pt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(pt){let _t=L[pt];return _t===void 0&&(_t=new vr,L[pt]=_t),_t.getGripSpace()},this.getHand=function(pt){let _t=L[pt];return _t===void 0&&(_t=new vr,L[pt]=_t),_t.getHandSpace()};function ht(pt){let _t=D.indexOf(pt.inputSource);if(_t===-1)return;let Xt=L[_t];Xt!==void 0&&(Xt.update(pt.inputSource,pt.frame,u||o),Xt.dispatchEvent({type:pt.type,data:pt.inputSource}))}function ot(){s.removeEventListener("select",ht),s.removeEventListener("selectstart",ht),s.removeEventListener("selectend",ht),s.removeEventListener("squeeze",ht),s.removeEventListener("squeezestart",ht),s.removeEventListener("squeezeend",ht),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",rt);for(let pt=0;pt<L.length;pt++){let _t=D[pt];_t!==null&&(D[pt]=null,L[pt].disconnect(_t))}X=null,nt=null,x.reset();for(let pt in p)delete p[pt];if(t.setRenderTarget(O),M=null,f=null,v=null,s=null,E=null,Re.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),R!==null){let pt=R.camera;pt.fov=R.fov,pt.zoom=R.zoom,pt.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){r=pt,n.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){c=pt,n.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(pt){u=pt},this.getBaseLayer=function(){return f!==null?f:M},this.getBinding=function(){return v===null&&P&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(pt){if(s=pt,s!==null){if(O=t.getRenderTarget(),s.addEventListener("select",ht),s.addEventListener("selectstart",ht),s.addEventListener("selectend",ht),s.addEventListener("squeeze",ht),s.addEventListener("squeezestart",ht),s.addEventListener("squeezeend",ht),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",rt),I.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Xt=null,ie=null,Bt=null;I.depth&&(Bt=I.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Xt=I.stencil?as:mi,ie=I.stencil?Ar:ai);let ue={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:r};v=this.getBinding(),f=v.createProjectionLayer(ue),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Ln(f.textureWidth,f.textureHeight,{format:Yn,type:Dn,depthTexture:new Qi(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Xt),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Xt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:r};M=new XRWebGLLayer(s,e,Xt),s.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),E=new Ln(M.framebufferWidth,M.framebufferHeight,{format:Yn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await s.requestReferenceSpace(c),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function rt(pt){for(let _t=0;_t<pt.removed.length;_t++){let Xt=pt.removed[_t],ie=D.indexOf(Xt);ie>=0&&(D[ie]=null,L[ie].disconnect(Xt))}for(let _t=0;_t<pt.added.length;_t++){let Xt=pt.added[_t],ie=D.indexOf(Xt);if(ie===-1){for(let ue=0;ue<L.length;ue++)if(ue>=D.length){D.push(Xt),ie=ue;break}else if(D[ue]===null){D[ue]=Xt,ie=ue;break}if(ie===-1)break}let Bt=L[ie];Bt&&Bt.connect(Xt)}}let et=new it,ct=new it;function ut(pt,_t,Xt){et.setFromMatrixPosition(_t.matrixWorld),ct.setFromMatrixPosition(Xt.matrixWorld);let ie=et.distanceTo(ct),Bt=_t.projectionMatrix.elements,ue=Xt.projectionMatrix.elements,He=Bt[14]/(Bt[10]-1),me=Bt[14]/(Bt[10]+1),Pe=(Bt[9]+1)/Bt[5],Ue=(Bt[9]-1)/Bt[5],ge=(Bt[8]-1)/Bt[0],ke=(ue[8]+1)/ue[0],je=He*ge,mn=He*ke,We=ie/(-ge+ke),Ie=We*-ge;if(_t.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(Ie),pt.translateZ(We),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),Bt[10]===-1)pt.projectionMatrix.copy(_t.projectionMatrix),pt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{let G=He+We,on=me+We,re=je-Ie,N=mn+(ie-Ie),y=Pe*me/on*G,K=Ue*me/on*G;pt.projectionMatrix.makePerspective(re,N,y,K,G,on),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function Vt(pt,_t){_t===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(_t.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(s===null)return;let _t=pt.near,Xt=pt.far;x.texture!==null&&(x.depthNear>0&&(_t=x.depthNear),x.depthFar>0&&(Xt=x.depthFar)),tt.near=Y.near=V.near=_t,tt.far=Y.far=V.far=Xt,(X!==tt.near||nt!==tt.far)&&(s.updateRenderState({depthNear:tt.near,depthFar:tt.far}),X=tt.near,nt=tt.far),tt.layers.mask=pt.layers.mask|6,V.layers.mask=tt.layers.mask&-5,Y.layers.mask=tt.layers.mask&-3;let ie=pt.parent,Bt=tt.cameras;Vt(tt,ie);for(let ue=0;ue<Bt.length;ue++)Vt(Bt[ue],ie);Bt.length===2?ut(tt,V,Y):tt.projectionMatrix.copy(V.projectionMatrix),R===null&&pt.isPerspectiveCamera&&(R={camera:pt,fov:pt.fov,zoom:pt.zoom}),Jt(pt,tt,ie)};function Jt(pt,_t,Xt){Xt===null?pt.matrix.copy(_t.matrixWorld):(pt.matrix.copy(Xt.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(_t.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(_t.projectionMatrix),pt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=qo*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(f===null&&M===null))return h},this.setFoveation=function(pt){h=pt,f!==null&&(f.fixedFoveation=pt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=pt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(tt)},this.getCameraTexture=function(pt){return p[pt]};let Be=null;function ye(pt,_t){if(g=_t.getViewerPose(u||o),w=_t,g!==null){let Xt=g.views;M!==null&&(t.setRenderTargetFramebuffer(E,M.framebuffer),t.setRenderTarget(E));let ie=!1;Xt.length!==tt.cameras.length&&(tt.cameras.length=0,ie=!0);for(let me=0;me<Xt.length;me++){let Pe=Xt[me],Ue=null;if(M!==null)Ue=M.getViewport(Pe);else{let ke=v.getViewSubImage(f,Pe);Ue=ke.viewport,me===0&&(t.setRenderTargetTextures(E,ke.colorTexture,ke.depthStencilTexture),t.setRenderTarget(E))}let ge=J[me];ge===void 0&&(ge=new vn,ge.layers.enable(me),ge.viewport=new qe,J[me]=ge),ge.matrix.fromArray(Pe.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Pe.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),me===0&&(tt.matrix.copy(ge.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),ie===!0&&tt.cameras.push(ge)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){v=n.getBinding();let me=v.getDepthInformation(Xt[0]);me&&me.isValid&&me.texture&&x.init(me,s.renderState)}if(Bt&&Bt.includes("camera-access")&&P){t.state.unbindTexture(),v=n.getBinding();for(let me=0;me<Xt.length;me++){let Pe=Xt[me].camera;if(Pe){let Ue=p[Pe];Ue||(Ue=new xa,p[Pe]=Ue);let ge=v.getCameraImage(Pe);Ue.sourceTexture=ge}}}}for(let Xt=0;Xt<L.length;Xt++){let ie=D[Xt],Bt=L[Xt];ie!==null&&Bt!==void 0&&Bt.update(ie,_t,u||o)}Be&&Be(pt,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),w=null}let Re=new pf;Re.setAnimationLoop(ye),this.setAnimationLoop=function(pt){Be=pt},this.dispose=function(){}}},kx=new Oe,yf=new le;yf.set(-1,0,0,0,1,0,0,0,1);function zx(i,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Uh(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,I,O,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),v(x,p)):p.isMeshPhongMaterial?(r(x,p),g(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),f(x,p),p.isMeshPhysicalMaterial&&M(x,p,E)):p.isMeshMatcapMaterial?(r(x,p),w(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),P(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&c(x,p)):p.isPointsMaterial?h(x,p,I,O):p.isSpriteMaterial?u(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===pn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===pn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let I=t.get(p),O=I.envMap,E=I.envMapRotation;O&&(x.envMap.value=O,x.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(E)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(yf),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function c(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function h(x,p,I,O){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*I,x.scale.value=O*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function g(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function v(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function f(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function M(x,p,I){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,p){p.matcap&&(x.matcap.value=p.matcap)}function P(x,p){let I=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vx(i,t,e,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(E,L){let D=L.program;n.uniformBlockBinding(E,D)}function u(E,L){let D=s[E.id];D===void 0&&(x(E),D=g(E),s[E.id]=D,E.addEventListener("dispose",I));let z=L.program;n.updateUBOMapping(E,z);let T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function g(E){let L=v();E.__bindingPointIndex=L;let D=i.createBuffer(),z=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,z,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,D),D}function v(){for(let E=0;E<c;E++)if(o.indexOf(E)===-1)return o.push(E),E;return oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let L=s[E.id],D=E.uniforms,z=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let T=0,R=D.length;T<R;T++){let V=D[T];if(Array.isArray(V))for(let Y=0,J=V.length;Y<J;Y++)M(V[Y],T,Y,z);else M(V,T,0,z)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(E,L,D,z){if(P(E,L,D,z)===!0){let T=E.__offset,R=E.value;if(Array.isArray(R)){let V=0;for(let Y=0;Y<R.length;Y++){let J=R[Y],tt=p(J);w(J,E.__data,V),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(R,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,E.__data)}}function w(E,L,D){typeof E=="number"||typeof E=="boolean"?L[0]=E:E.isMatrix3?(L[0]=E.elements[0],L[1]=E.elements[1],L[2]=E.elements[2],L[3]=0,L[4]=E.elements[3],L[5]=E.elements[4],L[6]=E.elements[5],L[7]=0,L[8]=E.elements[6],L[9]=E.elements[7],L[10]=E.elements[8],L[11]=0):ArrayBuffer.isView(E)?L.set(new E.constructor(E.buffer,E.byteOffset,L.length)):E.toArray(L,D)}function P(E,L,D,z){let T=E.value,R=L+"_"+D;if(z[R]===void 0)return typeof T=="number"||typeof T=="boolean"?z[R]=T:ArrayBuffer.isView(T)?z[R]=T.slice():z[R]=T.clone(),!0;{let V=z[R];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return z[R]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function x(E){let L=E.uniforms,D=0,z=16;for(let R=0,V=L.length;R<V;R++){let Y=Array.isArray(L[R])?L[R]:[L[R]];for(let J=0,tt=Y.length;J<tt;J++){let X=Y[J],nt=Array.isArray(X.value)?X.value:[X.value];for(let ht=0,ot=nt.length;ht<ot;ht++){let rt=nt[ht],et=p(rt),ct=D%z,ut=ct%et.boundary,Vt=ct+ut;D+=ut,Vt!==0&&z-Vt<et.storage&&(D+=z-Vt),X.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=D,D+=et.storage}}}let T=D%z;return T>0&&(D+=z-T),E.__size=D,E.__cache={},this}function p(E){let L={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(L.boundary=4,L.storage=4):E.isVector2?(L.boundary=8,L.storage=8):E.isVector3||E.isColor?(L.boundary=16,L.storage=12):E.isVector4?(L.boundary=16,L.storage=16):E.isMatrix3?(L.boundary=48,L.storage=48):E.isMatrix4?(L.boundary=64,L.storage=64):E.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(L.boundary=16,L.storage=E.byteLength):se("WebGLRenderer: Unsupported uniform value type.",E),L}function I(E){let L=E.target;L.removeEventListener("dispose",I);let D=o.indexOf(L.__bindingPointIndex);o.splice(D,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function O(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:h,update:u,dispose:O}}var Gx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function Hx(){return Mi===null&&(Mi=new Cs(Gx,16,16,os,oi),Mi.name="DFG_LUT",Mi.minFilter=fn,Mi.magFilter=fn,Mi.wrapS=pi,Mi.wrapT=pi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var oc=class{constructor(t={}){let{canvas:e=Bd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:f=!1,outputBufferType:M=Dn}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=o;let P=M,x=new Set([bl,Sl,Ml]),p=new Set([Dn,ai,wr,Ar,vl,yl]),I=new Uint32Array(4),O=new Int32Array(4),E=new it,L=null,D=null,z=[],T=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,Y=!1,J=null,tt=null,X=null,nt=null;this._outputColorSpace=Cn;let ht=0,ot=0,rt=null,et=-1,ct=null,ut=new qe,Vt=new qe,Jt=null,Be=new de(0),ye=0,Re=e.width,pt=e.height,_t=1,Xt=null,ie=null,Bt=new qe(0,0,Re,pt),ue=new qe(0,0,Re,pt),He=!1,me=new yr,Pe=!1,Ue=!1,ge=new Oe,ke=new it,je=new qe,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ie(){return rt===null?_t:1}let G=n;function on(S,W){return e.getContext(S,W)}let re,N,y,K,q,B,mt,Et,lt,yt,Lt,jt,Pt,St,$t,Zt,te,H,Dt,gt,It,kt,bt;try{let S={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",hn,!1),G===null){let W="webgl2";if(G=on(W,S),G===null)throw on(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(S){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),oe("WebGLRenderer: "+S.message),S}function zt(){re=new Kg(G),re.init(),It=new Fx(G,re),N=new zg(G,re,t,It),y=new Nx(G,re),N.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),tt=G.createFramebuffer(),X=G.createFramebuffer(),nt=G.createFramebuffer(),K=new Qg(G),q=new yx,B=new Ux(G,re,y,q,N,It,K),mt=new Zg(V),Et=new em(G),kt=new Bg(G,Et),lt=new $g(G,Et,K,kt),yt=new e_(G,lt,Et,kt,K),H=new t_(G,N,B),$t=new Vg(q),Lt=new vx(V,mt,re,N,kt,$t),jt=new zx(V,q),Pt=new Sx,St=new Cx(re),te=new Og(V,mt,y,yt,w,h),Zt=new Dx(V,yt,N),bt=new Vx(G,K,N,y),Dt=new kg(G,re,K),gt=new jg(G,re,K),K.programs=Lt.programs,V.capabilities=N,V.extensions=re,V.properties=q,V.renderLists=Pt,V.shadowMap=Zt,V.state=y,V.info=K}P!==Dn&&(R=new i_(P,e.width,e.height,c,s,r));let Kt=new Qh(V,G);this.xr=Kt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(S){S!==void 0&&(_t=S,this.setSize(Re,pt,!1))},this.getSize=function(S){return S.set(Re,pt)},this.setSize=function(S,W,j=!0){if(Kt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=S,pt=W,e.width=Math.floor(S*_t),e.height=Math.floor(W*_t),j===!0&&(e.style.width=S+"px",e.style.height=W+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,S,W)},this.getDrawingBufferSize=function(S){return S.set(Re*_t,pt*_t).floor()},this.setDrawingBufferSize=function(S,W,j){Re=S,pt=W,_t=j,e.width=Math.floor(S*j),e.height=Math.floor(W*j),this.setViewport(0,0,S,W)},this.setEffects=function(S){if(P===Dn){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let W=0;W<S.length;W++)if(S[W].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ut)},this.getViewport=function(S){return S.copy(Bt)},this.setViewport=function(S,W,j,$){S.isVector4?Bt.set(S.x,S.y,S.z,S.w):Bt.set(S,W,j,$),y.viewport(ut.copy(Bt).multiplyScalar(_t).round())},this.getScissor=function(S){return S.copy(ue)},this.setScissor=function(S,W,j,$){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,W,j,$),y.scissor(Vt.copy(ue).multiplyScalar(_t).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(S){y.setScissorTest(He=S)},this.setOpaqueSort=function(S){Xt=S},this.setTransparentSort=function(S){ie=S},this.getClearColor=function(S){return S.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(S=!0,W=!0,j=!0){let $=0;if(S){let Q=!1;if(rt!==null){let Ut=rt.texture.format;Q=x.has(Ut)}if(Q){let Ut=rt.texture.type,Ht=p.has(Ut),At=te.getClearColor(),Nt=te.getClearAlpha(),Wt=At.r,he=At.g,fe=At.b;Ht?(I[0]=Wt,I[1]=he,I[2]=fe,I[3]=Nt,G.clearBufferuiv(G.COLOR,0,I)):(O[0]=Wt,O[1]=he,O[2]=fe,O[3]=Nt,G.clearBufferiv(G.COLOR,0,O))}else $|=G.COLOR_BUFFER_BIT}W&&($|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),J=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),te.dispose(),Pt.dispose(),St.dispose(),q.dispose(),mt.dispose(),yt.dispose(),kt.dispose(),bt.dispose(),Lt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Va),Kt.removeEventListener("sessionend",Fs),Jn.stop()};function Le(S){S.preventDefault(),Nh("WebGLRenderer: Context Lost."),Y=!0}function Te(){Nh("WebGLRenderer: Context Restored."),Y=!1;let S=K.autoReset,W=Zt.enabled,j=Zt.autoUpdate,$=Zt.needsUpdate,Q=Zt.type;zt(),K.autoReset=S,Zt.enabled=W,Zt.autoUpdate=j,Zt.needsUpdate=$,Zt.type=Q}function hn(S){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function zn(S){let W=S.target;W.removeEventListener("dispose",zn),Ds(W)}function Ds(S){hc(S),q.remove(S)}function hc(S){let W=q.get(S).programs;W!==void 0&&(W.forEach(function(j){Lt.releaseProgram(j)}),S.isShaderMaterial&&Lt.releaseShaderCache(S))}this.renderBufferDirect=function(S,W,j,$,Q,Ut){W===null&&(W=mn);let Ht=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,At=en(S,W,j,$,Q);y.setMaterial($,Ht);let Nt=j.index,Wt=1;if($.wireframe===!0){if(Nt=lt.getWireframeAttribute(j),Nt===void 0)return;Wt=2}let he=j.drawRange,fe=j.attributes.position,Yt=he.start*Wt,Me=(he.start+he.count)*Wt;Ut!==null&&(Yt=Math.max(Yt,Ut.start*Wt),Me=Math.min(Me,(Ut.start+Ut.count)*Wt)),Nt!==null?(Yt=Math.max(Yt,0),Me=Math.min(Me,Nt.count)):fe!=null&&(Yt=Math.max(Yt,0),Me=Math.min(Me,fe.count));let Ge=Me-Yt;if(Ge<0||Ge===1/0)return;kt.setup(Q,$,At,j,Nt);let ze,_e=Dt;if(Nt!==null&&(ze=Et.get(Nt),_e=gt,_e.setIndex(ze)),Q.isMesh)$.wireframe===!0?(y.setLineWidth($.wireframeLinewidth*Ie()),_e.setMode(G.LINES)):_e.setMode(G.TRIANGLES);else if(Q.isLine){let Ze=$.linewidth;Ze===void 0&&(Ze=1),y.setLineWidth(Ze*Ie()),Q.isLineSegments?_e.setMode(G.LINES):Q.isLineLoop?_e.setMode(G.LINE_LOOP):_e.setMode(G.LINE_STRIP)}else Q.isPoints?_e.setMode(G.POINTS):Q.isSprite&&_e.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(re.get("WEBGL_multi_draw"))_e.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Ze=Q._multiDrawStarts,Gt=Q._multiDrawCounts,dn=Q._multiDrawCount,Se=Nt?Et.get(Nt).bytesPerElement:1,bn=q.get($).currentProgram.getUniforms();for(let Vn=0;Vn<dn;Vn++)bn.setValue(G,"_gl_DrawID",Vn),_e.render(Ze[Vn]/Se,Gt[Vn])}else if(Q.isInstancedMesh)_e.renderInstances(Yt,Ge,Q.count);else if(j.isInstancedBufferGeometry){let Ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Gt=Math.min(j.instanceCount,Ze);_e.renderInstances(Yt,Ge,Gt)}else _e.render(Yt,Ge)};function Ns(S,W,j,$){J!==null&&S.isNodeMaterial&&J.setObject($,S),Pe===!0&&$t.setState(S,j,!1),S.transparent===!0&&S.side===vi&&S.forceSinglePass===!1?(S.side=pn,S.needsUpdate=!0,Bs(S,W,$),S.side=is,S.needsUpdate=!0,Bs(S,W,$),S.side=vi):Bs(S,W,$)}this.compile=function(S,W,j=null){j===null&&(j=S),J!==null&&J.renderStart(S,W,j),D=St.get(j),D.init(W),T.push(D),j.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),S!==j&&S.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights(),J!==null&&J.updateLights(D.state.lightsArray),Ue=this.localClippingEnabled,Pe=$t.init(this.clippingPlanes,Ue),Pe===!0&&$t.setGlobalState(this.clippingPlanes,W),J!==null&&Zt.render(D.state.shadowsArray,j,W);let $=new Set;return S.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ut=Q.material;if(Ut)if(Array.isArray(Ut))for(let Ht=0;Ht<Ut.length;Ht++){let At=Ut[Ht];Ns(At,j,W,Q),$.add(At)}else Ns(Ut,j,W,Q),$.add(Ut)}),D=T.pop(),J!==null&&J.renderEnd(),$},this.compileAsync=function(S,W,j=null){let $=this.compile(S,W,j);return new Promise(Q=>{function Ut(){if($.forEach(function(Ht){let Nt=q.get(Ht).currentProgram;(Nt===void 0||Nt.isReady())&&$.delete(Ht)}),$.size===0){Q(S);return}setTimeout(Ut,10)}re.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Lr=null;function Us(S){Lr&&Lr(S)}function Va(){Jn.stop()}function Fs(){Jn.start()}let Jn=new pf;Jn.setAnimationLoop(Us),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(S){Lr=S,Kt.setAnimationLoop(S),S===null?Jn.stop():Jn.start()},Kt.addEventListener("sessionstart",Va),Kt.addEventListener("sessionend",Fs),this.render=function(S,W){if(W!==void 0&&W.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;J!==null&&J.renderStart(S,W);let j=Kt.enabled===!0&&Kt.isPresenting===!0,$=R!==null&&(rt===null||j)&&R.begin(V,rt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(W),W=Kt.getCamera()),S.isScene===!0&&S.onBeforeRender(V,S,W,rt),D=St.get(S,T.length),D.init(W),D.state.textureUnits=B.getTextureUnits(),T.push(D),ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),me.setFromProjectionMatrix(ge,si,W.reversedDepth),Ue=this.localClippingEnabled,Pe=$t.init(this.clippingPlanes,Ue),L=Pt.get(S,z.length),L.init(),z.push(L),Kt.enabled===!0&&Kt.isPresenting===!0){let Ht=V.xr.getDepthSensingMesh();Ht!==null&&Zn(Ht,W,-1/0,V.sortObjects)}Zn(S,W,0,V.sortObjects),L.finish(),J!==null&&J.updateLights(D.state.lightsArray),V.sortObjects===!0&&L.sort(Xt,ie),We=Kt.enabled===!1||Kt.isPresenting===!1||Kt.hasDepthSensing()===!1,We&&te.addToRenderList(L,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Pe===!0&&$t.beginShadows();let Q=D.state.shadowsArray;if(Zt.render(Q,S,W),Pe===!0&&$t.endShadows(),($&&R.hasRenderPass())===!1){let Ht=L.opaque,At=L.transmissive;if(D.setupLights(),W.isArrayCamera){let Nt=W.cameras;if(At.length>0)for(let Wt=0,he=Nt.length;Wt<he;Wt++){let fe=Nt[Wt];Dr(Ht,At,S,fe)}We&&te.render(S);for(let Wt=0,he=Nt.length;Wt<he;Wt++){let fe=Nt[Wt];Os(L,S,fe,fe.viewport)}}else At.length>0&&Dr(Ht,At,S,W),We&&te.render(S),Os(L,S,W)}rt!==null&&ot===0&&(B.updateMultisampleRenderTarget(rt),B.updateRenderTargetMipmap(rt)),$&&R.end(V),S.isScene===!0&&S.onAfterRender(V,S,W),kt.resetDefaultState(),et=-1,ct=null,T.pop(),T.length>0?(D=T[T.length-1],B.setTextureUnits(D.state.textureUnits),Pe===!0&&$t.setGlobalState(V.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?L=z[z.length-1]:L=null,J!==null&&J.renderEnd()};function Zn(S,W,j,$){if(S.visible===!1)return;if(S.layers.test(W.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(W);else if(S.isLightProbeGrid)D.pushLightProbeGrid(S);else if(S.isLight)D.pushLight(S),S.castShadow&&D.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(me)){$&&je.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge);let Ht=yt.update(S),At=S.material;At.visible&&L.push(S,Ht,At,j,je.z,null,W)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(me))){let Ht=yt.update(S),At=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),je.copy(S.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),je.copy(Ht.boundingSphere.center)),je.applyMatrix4(S.matrixWorld).applyMatrix4(ge)),Array.isArray(At)){let Nt=Ht.groups;for(let Wt=0,he=Nt.length;Wt<he;Wt++){let fe=Nt[Wt],Yt=At[fe.materialIndex];Yt&&Yt.visible&&L.push(S,Ht,Yt,j,je.z,fe,W)}}else At.visible&&L.push(S,Ht,At,j,je.z,null,W)}}let Ut=S.children;for(let Ht=0,At=Ut.length;Ht<At;Ht++)Zn(Ut[Ht],W,j,$)}function Os(S,W,j,$){let{opaque:Q,transmissive:Ut,transparent:Ht}=S;D.setupLightsView(j),Pe===!0&&$t.setGlobalState(V.clippingPlanes,j),$&&y.viewport(ut.copy($)),Q.length>0&&ls(Q,W,j),Ut.length>0&&ls(Ut,W,j),Ht.length>0&&ls(Ht,W,j),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Dr(S,W,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[$.id]===void 0){let Yt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[$.id]=new Ln(1,1,{generateMipmaps:!0,type:Yt?oi:Dn,minFilter:rs,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}let Ut=D.state.transmissionRenderTarget[$.id],Ht=$.viewport||ut;Ut.setSize(Ht.z*V.transmissionResolutionScale,Ht.w*V.transmissionResolutionScale);let At=V.getRenderTarget(),Nt=V.getActiveCubeFace(),Wt=V.getActiveMipmapLevel();V.setRenderTarget(Ut),V.getClearColor(Be),ye=V.getClearAlpha(),ye<1&&V.setClearColor(16777215,.5),V.clear(),We&&te.render(j);let he=V.toneMapping;V.toneMapping=ri;let fe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),D.setupLightsView($),Pe===!0&&$t.setGlobalState(V.clippingPlanes,$),ls(S,j,$),B.updateMultisampleRenderTarget(Ut),B.updateRenderTargetMipmap(Ut),re.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Me=0,Ge=W.length;Me<Ge;Me++){let ze=W[Me],{object:_e,geometry:Ze,material:Gt,group:dn}=ze;if(Gt.side===vi&&_e.layers.test($.layers)){let Se=Gt.side;Gt.side=pn,Gt.needsUpdate=!0,Ga(_e,j,$,Ze,Gt,dn),Gt.side=Se,Gt.needsUpdate=!0,Yt=!0}}Yt===!0&&(B.updateMultisampleRenderTarget(Ut),B.updateRenderTargetMipmap(Ut))}V.setRenderTarget(At,Nt,Wt),V.setClearColor(Be,ye),fe!==void 0&&($.viewport=fe),V.toneMapping=he}function ls(S,W,j){let $=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Ut=S.length;Q<Ut;Q++){let Ht=S[Q],{object:At,geometry:Nt,group:Wt}=Ht,he=Ht.material;he.allowOverride===!0&&$!==null&&(he=$),At.layers.test(j.layers)&&Ga(At,W,j,Nt,he,Wt)}}function Ga(S,W,j,$,Q,Ut){J!==null&&Q.isNodeMaterial&&J.setObject(S,Q),S.onBeforeRender(V,W,j,$,Q,Ut),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(V,W,j,$,S,Ut),Q.transparent===!0&&Q.side===vi&&Q.forceSinglePass===!1?(Q.side=pn,Q.needsUpdate=!0,V.renderBufferDirect(j,W,$,Q,S,Ut),Q.side=is,Q.needsUpdate=!0,V.renderBufferDirect(j,W,$,Q,S,Ut),Q.side=vi):V.renderBufferDirect(j,W,$,Q,S,Ut),S.onAfterRender(V,W,j,$,Q,Ut)}function Bs(S,W,j){W.isScene!==!0&&(W=mn);let $=q.get(S),Q=D.state.lights,Ut=D.state.shadowsArray,Ht=Q.state.version,At=Lt.getParameters(S,Q.state,Ut,W,j,D.state.lightProbeGridArray),Nt=Lt.getProgramCacheKey(At),Wt=$.programs;$.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?W.environment:null,$.fog=W.fog;let he=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;$.envMap=mt.get(S.envMap||$.environment,he),$.envMapRotation=$.environment!==null&&S.envMap===null?W.environmentRotation:S.envMapRotation,Wt===void 0&&(S.addEventListener("dispose",zn),Wt=new Map,$.programs=Wt);let fe=Wt.get(Nt);if(fe!==void 0){if($.currentProgram===fe&&$.lightsStateVersion===Ht)return Ha(S,At),fe}else At.uniforms=Lt.getUniforms(S),J!==null&&S.isNodeMaterial&&J.build(S,j,At),S.onBeforeCompile(At,V),fe=Lt.acquireProgram(At,Nt),Wt.set(Nt,fe),$.uniforms=At.uniforms;let Yt=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Yt.clippingPlanes=$t.uniform),Ha(S,At),$.needsLights=Kn(S),$.lightsStateVersion=Ht,$.needsLights&&(Yt.ambientLightColor.value=Q.state.ambient,Yt.lightProbe.value=Q.state.probe,Yt.sunLights.value=Q.state.sun,Yt.sunLightShadows.value=Q.state.sunShadow,Yt.directionalLights.value=Q.state.directional,Yt.directionalLightShadows.value=Q.state.directionalShadow,Yt.spotLights.value=Q.state.spot,Yt.spotLightShadows.value=Q.state.spotShadow,Yt.rectAreaLights.value=Q.state.rectArea,Yt.ltc_1.value=Q.state.rectAreaLTC1,Yt.ltc_2.value=Q.state.rectAreaLTC2,Yt.pointLights.value=Q.state.point,Yt.pointLightShadows.value=Q.state.pointShadow,Yt.hemisphereLights.value=Q.state.hemi,Yt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Yt.sunShadowCascade.value=Q.state.sunShadowCascade,Yt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Yt.spotLightMatrix.value=Q.state.spotLightMatrix,Yt.spotLightMap.value=Q.state.spotLightMap,Yt.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.lightProbeGrid=D.state.lightProbeGridArray.length>0,$.currentProgram=fe,$.uniformsList=null,fe}function cs(S){if(S.uniformsList===null){let W=S.currentProgram.getUniforms();S.uniformsList=Pr.seqWithValue(W.seq,S.uniforms)}return S.uniformsList}function Ha(S,W){let j=q.get(S);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function ee(S,W){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;E.setFromMatrixPosition(W.matrixWorld);for(let j=0,$=S.length;j<$;j++){let Q=S[j];if(Q.texture!==null&&Q.boundingBox.containsPoint(E))return Q}return null}function en(S,W,j,$,Q){W.isScene!==!0&&(W=mn),B.resetTextureUnits();let Ut=W.fog,Ht=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?W.environment:null,At=rt===null?V.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:be.workingColorSpace,Nt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Wt=mt.get($.envMap||Ht,Nt),he=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,fe=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Yt=!!j.morphAttributes.position,Me=!!j.morphAttributes.normal,Ge=!!j.morphAttributes.color,ze=ri;$.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ze=V.toneMapping);let _e=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ze=_e!==void 0?_e.length:0,Gt=q.get($),dn=D.state.lights;if(Pe===!0&&(Ue===!0||S!==ct)){let Fe=S===ct&&$.id===et;$t.setState($,S,Fe)}let Se=!1;$.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==dn.state.version||Gt.outputColorSpace!==At||Q.isBatchedMesh&&Gt.batching===!1||!Q.isBatchedMesh&&Gt.batching===!0||Q.isBatchedMesh&&Gt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Gt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Gt.instancing===!1||!Q.isInstancedMesh&&Gt.instancing===!0||Q.isSkinnedMesh&&Gt.skinning===!1||!Q.isSkinnedMesh&&Gt.skinning===!0||Q.isInstancedMesh&&Gt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Gt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Gt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Gt.instancingMorph===!1&&Q.morphTexture!==null||Gt.envMap!==Wt||$.fog===!0&&Gt.fog!==Ut||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==$t.numPlanes||Gt.numIntersection!==$t.numIntersection)||Gt.vertexAlphas!==he||Gt.vertexTangents!==fe||Gt.morphTargets!==Yt||Gt.morphNormals!==Me||Gt.morphColors!==Ge||Gt.toneMapping!==ze||Gt.morphTargetsCount!==Ze||!!Gt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Gt.__version=$.version);let bn=Gt.currentProgram;Se===!0&&(bn=Bs($,W,Q),J&&$.isNodeMaterial&&J.onUpdateProgram($,bn,Gt));let Vn=!1,Tn=!1,bi=!1,Ee=bn.getUniforms(),Ye=Gt.uniforms;if(y.useProgram(bn.program)&&(Vn=!0,Tn=!0,bi=!0),$.id!==et&&(et=$.id,Tn=!0),Gt.needsLights){let Fe=ee(D.state.lightProbeGridArray,Q);Gt.lightProbeGrid!==Fe&&(Gt.lightProbeGrid=Fe,Tn=!0)}if(Vn||ct!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ee.setValue(G,"projectionMatrix",S.projectionMatrix),Ee.setValue(G,"viewMatrix",S.matrixWorldInverse);let ci=Ee.map.cameraPosition;ci!==void 0&&ci.setValue(G,ke.setFromMatrixPosition(S.matrixWorld)),N.logarithmicDepthBuffer&&Ee.setValue(G,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ee.setValue(G,"isOrthographic",S.isOrthographicCamera===!0),ct!==S&&(ct=S,Tn=!0,bi=!0)}if(Gt.needsLights&&(dn.state.sunShadowMap.length>0&&Ee.setValue(G,"sunShadowMap",dn.state.sunShadowMap,B),dn.state.directionalShadowMap.length>0&&Ee.setValue(G,"directionalShadowMap",dn.state.directionalShadowMap,B),dn.state.spotShadowMap.length>0&&Ee.setValue(G,"spotShadowMap",dn.state.spotShadowMap,B),dn.state.pointShadowMap.length>0&&Ee.setValue(G,"pointShadowMap",dn.state.pointShadowMap,B)),Q.isSkinnedMesh){Ee.setOptional(G,Q,"bindMatrix"),Ee.setOptional(G,Q,"bindMatrixInverse");let Fe=Q.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Ee.setValue(G,"boneTexture",Fe.boneTexture,B))}Q.isBatchedMesh&&(Ee.setOptional(G,Q,"batchingTexture"),Ee.setValue(G,"batchingTexture",Q._matricesTexture,B),Ee.setOptional(G,Q,"batchingIdTexture"),Ee.setValue(G,"batchingIdTexture",Q._indirectTexture,B),Ee.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ee.setValue(G,"batchingColorTexture",Q._colorsTexture,B));let li=j.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&H.update(Q,j,bn),(Tn||Gt.receiveShadow!==Q.receiveShadow)&&(Gt.receiveShadow=Q.receiveShadow,Ee.setValue(G,"receiveShadow",Q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&W.environment!==null&&(Ye.envMapIntensity.value=W.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=Hx()),Tn){if(Ee.setValue(G,"toneMappingExposure",V.toneMappingExposure),Gt.needsLights&&Wa(Ye,bi),Ut&&$.fog===!0&&jt.refreshFogUniforms(Ye,Ut),jt.refreshMaterialUniforms(Ye,$,_t,pt,D.state.transmissionRenderTarget[S.id]),Gt.needsLights&&Gt.lightProbeGrid){let Fe=Gt.lightProbeGrid;Ye.probesSH.value=Fe.texture,Ye.probesMin.value.copy(Fe.boundingBox.min),Ye.probesMax.value.copy(Fe.boundingBox.max),Ye.probesResolution.value.copy(Fe.resolution)}Pr.upload(G,cs(Gt),Ye,B)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Pr.upload(G,cs(Gt),Ye,B),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ee.setValue(G,"center",Q.center),Ee.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Ee.setValue(G,"normalMatrix",Q.normalMatrix),Ee.setValue(G,"modelMatrix",Q.matrixWorld),$.uniformsGroups!==void 0){let Fe=$.uniformsGroups;for(let ci=0,Fi=Fe.length;ci<Fi;ci++){let Xa=Fe[ci];bt.update(Xa,bn),bt.bind(Xa,bn)}}return bn}function Wa(S,W){S.ambientLightColor.needsUpdate=W,S.lightProbe.needsUpdate=W,S.sunLights.needsUpdate=W,S.sunLightShadows.needsUpdate=W,S.directionalLights.needsUpdate=W,S.directionalLightShadows.needsUpdate=W,S.pointLights.needsUpdate=W,S.pointLightShadows.needsUpdate=W,S.spotLights.needsUpdate=W,S.spotLightShadows.needsUpdate=W,S.rectAreaLights.needsUpdate=W,S.hemisphereLights.needsUpdate=W}function Kn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return ht},this.getActiveMipmapLevel=function(){return ot},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(S,W,j){let $=q.get(S);$.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),q.get(S.texture).__webglTexture=W,q.get(S.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,W){let j=q.get(S);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(S,W=0,j=0){rt=S,ht=W,ot=j;let $=null,Q=!1,Ut=!1;if(S){let At=q.get(S);if(At.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(G.FRAMEBUFFER,At.__webglFramebuffer),ut.copy(S.viewport),Vt.copy(S.scissor),Jt=S.scissorTest,y.viewport(ut),y.scissor(Vt),y.setScissorTest(Jt),et=-1;return}else if(At.__webglFramebuffer===void 0)B.setupRenderTarget(S);else if(At.__hasExternalTextures)B.rebindTextures(S,q.get(S.texture).__webglTexture,q.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let he=S.depthTexture;if(At.__boundDepthTexture!==he){if(he!==null&&q.has(he)&&(S.width!==he.image.width||S.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(S)}}let Nt=S.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Ut=!0);let Wt=q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Wt[W])?$=Wt[W][j]:$=Wt[W],Q=!0):S.samples>0&&B.useMultisampledRTT(S)===!1?$=q.get(S).__webglMultisampledFramebuffer:Array.isArray(Wt)?$=Wt[j]:$=Wt,ut.copy(S.viewport),Vt.copy(S.scissor),Jt=S.scissorTest}else ut.copy(Bt).multiplyScalar(_t).floor(),Vt.copy(ue).multiplyScalar(_t).floor(),Jt=He;if(j!==0&&($=tt),y.bindFramebuffer(G.FRAMEBUFFER,$)&&y.drawBuffers(S,$),y.viewport(ut),y.scissor(Vt),y.setScissorTest(Jt),Q){let At=q.get(S.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,At.__webglTexture,j)}else if(Ut){let At=W;for(let Nt=0;Nt<S.textures.length;Nt++){let Wt=q.get(S.textures[Nt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Nt,Wt.__webglTexture,j,At)}}else if(S!==null&&j!==0){let At=q.get(S.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,At.__webglTexture,j)}et=-1};function un(S){let W=q.get(S);return(W.__readFormat!==S.format||W.__readType!==S.type)&&(W.__readFormat=S.format,W.__readType=S.type,W.__formatReadable=N.textureFormatReadable(S.format),W.__typeReadable=N.textureTypeReadable(S.type)),W}this.readRenderTargetPixels=function(S,W,j,$,Q,Ut,Ht,At=0){if(!(S&&S.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ht!==void 0&&(Nt=Nt[Ht]),Nt){y.bindFramebuffer(G.FRAMEBUFFER,Nt);try{let Wt=S.textures[At],he=Wt.format,fe=Wt.type;S.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+At);let Yt=un(Wt);if(Yt.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=S.width-$&&j>=0&&j<=S.height-Q&&G.readPixels(W,j,$,Q,It.convert(he),It.convert(fe),Ut)}finally{let Wt=rt!==null?q.get(rt).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(S,W,j,$,Q,Ut,Ht,At=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ht!==void 0&&(Nt=Nt[Ht]),Nt)if(W>=0&&W<=S.width-$&&j>=0&&j<=S.height-Q){y.bindFramebuffer(G.FRAMEBUFFER,Nt);let Wt=S.textures[At],he=Wt.format,fe=Wt.type;S.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+At);let Yt=un(Wt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Me),G.bufferData(G.PIXEL_PACK_BUFFER,Ut.byteLength,G.STREAM_READ),G.readPixels(W,j,$,Q,It.convert(he),It.convert(fe),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Ge=rt!==null?q.get(rt).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,Ge);let ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await zd(G,ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Me),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ut),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Me),G.deleteSync(ze),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,W=null,j=0){let $=Math.pow(2,-j),Q=Math.floor(S.image.width*$),Ut=Math.floor(S.image.height*$),Ht=W!==null?W.x:0,At=W!==null?W.y:0;B.setTexture2D(S,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,Ht,At,Q,Ut),y.unbindTexture()},this.copyTextureToTexture=function(S,W,j=null,$=null,Q=0,Ut=0){let Ht,At,Nt,Wt,he,fe,Yt,Me,Ge,ze=S.isCompressedTexture?S.mipmaps[Ut]:S.image;if(j!==null)Ht=j.max.x-j.min.x,At=j.max.y-j.min.y,Nt=j.isBox3?j.max.z-j.min.z:1,Wt=j.min.x,he=j.min.y,fe=j.isBox3?j.min.z:0;else{let Ye=Math.pow(2,-Q);Ht=Math.floor(ze.width*Ye),At=Math.floor(ze.height*Ye),S.isDataArrayTexture?Nt=ze.depth:S.isData3DTexture?Nt=Math.floor(ze.depth*Ye):Nt=1,Wt=0,he=0,fe=0}$!==null?(Yt=$.x,Me=$.y,Ge=$.z):(Yt=0,Me=0,Ge=0);let _e=It.convert(W.format),Ze=It.convert(W.type),Gt;W.isData3DTexture?(B.setTexture3D(W,0),Gt=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(B.setTexture2DArray(W,0),Gt=G.TEXTURE_2D_ARRAY):(B.setTexture2D(W,0),Gt=G.TEXTURE_2D),y.activeTexture(G.TEXTURE0),y.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),y.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),y.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);let dn=y.getParameter(G.UNPACK_ROW_LENGTH),Se=y.getParameter(G.UNPACK_IMAGE_HEIGHT),bn=y.getParameter(G.UNPACK_SKIP_PIXELS),Vn=y.getParameter(G.UNPACK_SKIP_ROWS),Tn=y.getParameter(G.UNPACK_SKIP_IMAGES);y.pixelStorei(G.UNPACK_ROW_LENGTH,ze.width),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ze.height),y.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),y.pixelStorei(G.UNPACK_SKIP_ROWS,he),y.pixelStorei(G.UNPACK_SKIP_IMAGES,fe);let bi=S.isDataArrayTexture||S.isData3DTexture,Ee=W.isDataArrayTexture||W.isData3DTexture;if(S.isDepthTexture){let Ye=q.get(S),li=q.get(W),Fe=q.get(Ye.__renderTarget),ci=q.get(li.__renderTarget);y.bindFramebuffer(G.READ_FRAMEBUFFER,Fe.__webglFramebuffer),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Fi=0;Fi<Nt;Fi++)bi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(S).__webglTexture,Q,fe+Fi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(W).__webglTexture,Ut,Ge+Fi)),G.blitFramebuffer(Wt,he,Ht,At,Yt,Me,Ht,At,G.DEPTH_BUFFER_BIT,G.NEAREST);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||S.isRenderTargetTexture||q.has(S)){let Ye=q.get(S),li=q.get(W);y.bindFramebuffer(G.READ_FRAMEBUFFER,X),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,nt);for(let Fe=0;Fe<Nt;Fe++)bi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ye.__webglTexture,Q,fe+Fe):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ye.__webglTexture,Q),Ee?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,li.__webglTexture,Ut,Ge+Fe):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,li.__webglTexture,Ut),Q!==0?G.blitFramebuffer(Wt,he,Ht,At,Yt,Me,Ht,At,G.COLOR_BUFFER_BIT,G.NEAREST):Ee?G.copyTexSubImage3D(Gt,Ut,Yt,Me,Ge+Fe,Wt,he,Ht,At):G.copyTexSubImage2D(Gt,Ut,Yt,Me,Wt,he,Ht,At);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ee?S.isDataTexture||S.isData3DTexture?G.texSubImage3D(Gt,Ut,Yt,Me,Ge,Ht,At,Nt,_e,Ze,ze.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Gt,Ut,Yt,Me,Ge,Ht,At,Nt,_e,ze.data):G.texSubImage3D(Gt,Ut,Yt,Me,Ge,Ht,At,Nt,_e,Ze,ze):S.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ut,Yt,Me,Ht,At,_e,Ze,ze.data):S.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ut,Yt,Me,ze.width,ze.height,_e,ze.data):G.texSubImage2D(G.TEXTURE_2D,Ut,Yt,Me,Ht,At,_e,Ze,ze);y.pixelStorei(G.UNPACK_ROW_LENGTH,dn),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Se),y.pixelStorei(G.UNPACK_SKIP_PIXELS,bn),y.pixelStorei(G.UNPACK_SKIP_ROWS,Vn),y.pixelStorei(G.UNPACK_SKIP_IMAGES,Tn),Ut===0&&W.generateMipmaps&&G.generateMipmap(Gt),y.unbindTexture()},this.initRenderTarget=function(S){q.get(S).__webglFramebuffer===void 0&&B.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?B.setTextureCube(S,0):S.isData3DTexture?B.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?B.setTexture2DArray(S,0):B.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){ht=0,ot=0,rt=null,y.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};function Mf(i){let t,e="context";try{let R=i.getContext("webgl2",{antialias:!0,alpha:!1});if(!R)return console.warn("[Star Rush WebGL] webgl2 context unavailable; returning null for fallback handling"),null;e="renderer",t=new oc({canvas:i,context:R,antialias:!0,alpha:!1,powerPreference:"default"})}catch(R){return console.warn("[Star Rush WebGL] "+e+" initialization failed; returning null for fallback handling:",R?.message||String(R)),null}t.outputColorSpace=Cn,t.toneMapping=Ca,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=pl,t.setPixelRatio(Math.min(devicePixelRatio||1,1.5));let n=new ua;n.fog=new ha("#cbddec",125,460);let s=new vn(62,1,.12,850),r=new Ta("#e7f4ff","#a08ba5",2.2),o=new Aa("#fff0de",2.4);o.position.set(-30,60,25),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-55,right:55,top:45,bottom:-45,near:1,far:160}),o.shadow.bias=-4e-4,n.add(r,o,o.target);let c=new Cs(new Uint8Array([95,145,195,245]),4,1,Er);c.minFilter=$e,c.magFilter=$e,c.needsUpdate=!0;let h=new Map,u=new Oe,g=new Map,v=new Map,f=new Mn(new ya(650,16,8),new Rn({side:pn,depthWrite:!1,uniforms:{top:{value:new de("#8fbee6")},bottom:{value:new de("#f0e8f0")}},vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vDirection;uniform vec3 top,bottom;void main(){float h=smoothstep(-.05,.8,normalize(vDirection).y);gl_FragColor=vec4(mix(bottom,top,h),1.0);}"}));f.renderOrder=-100,n.add(f);let M=1,w=0,P=0,x=0,p=0,I=16.7,O=0,E=0,L=2,D=["low","medium","high"];function z(R,V){R.renderId||(R.renderId=M++);let Y=R.renderId+":"+(R.paintable&&V?V:"");if(v.has(Y))return v.get(Y);let J=R.sourceData,tt=[],X=[],nt=[],ht=V?new de(V):null;for(let rt=0;rt<J.length;rt+=10){tt.push(J[rt],J[rt+1],J[rt+2]),X.push(J[rt+3],J[rt+4],J[rt+5]);let et=J[rt+6],ct=J[rt+7],ut=J[rt+8],Vt=R.paintable&&ht&&ct-et>.14&&ut-et>.2;nt.push(Vt?ht.r:et,Vt?ht.g:ct,Vt?ht.b:ut)}let ot=new Bn;return ot.setAttribute("position",new sn(tt,3)),ot.setAttribute("normal",new sn(X,3)),ot.setAttribute("color",new sn(nt,3)),ot.setIndex(Array.from(R.sourceIndices)),ot.computeBoundingSphere(),v.set(Y,ot),R.onDispose=()=>{for(let[rt,et]of v)if(rt.startsWith(R.renderId+":")){for(let[ct,ut]of h)ut.geometry===et&&(n.remove(ut),ut.dispose(),h.delete(ct));et.dispose(),v.delete(rt)}},ot}function T(R,V,Y,J,tt,X={}){let nt=performance.now();if(p){let et=nt-p;et<100&&(I+=(et-I)*.035)}p=nt,X.quality==="auto"&&(I>23?(O++,E=0):I<16.9?(E++,O=0):(O=0,E=0),O>90&&L>0&&(L--,O=0),E>360&&L<2&&(L++,E=0));let ht=X.quality==="auto"?D[L]:X.quality,ot=ht==="low"?1:ht==="medium"?1.2:Math.min(devicePixelRatio||1,1.5);ot!==x&&(t.setPixelRatio(ot),x=ot),(Y!==w||J!==P)&&(t.setSize(Y,J,!1),w=Y,P=J),s.aspect=Y/J,s.fov=tt,s.updateProjectionMatrix(),s.position.fromArray(V.eye),s.lookAt(new it(...V.target)),f.position.copy(s.position);let rt=new Map;for(let et of R){if(!et.mesh.sourceIndices.length)continue;let ct=z(et.mesh,et.tint),ut=et.opacity??1,Vt=ct.uuid+":"+et.shadow+":"+ut,Jt=rt.get(Vt);Jt||(Jt={geometry:ct,shadow:et.shadow,opacity:ut,items:[]},rt.set(Vt,Jt)),Jt.items.push(et)}for(let et of h.values())et.visible=!1;for(let[et,ct]of rt){let ut=h.get(et);if(!ut||ut.instanceMatrix.count<ct.items.length){ut&&(n.remove(ut),ut.dispose());let Vt=g.get(ct.opacity);Vt||(Vt=new Ma({vertexColors:!0,gradientMap:c,transparent:ct.opacity<1,opacity:ct.opacity,depthWrite:ct.opacity>=1}),g.set(ct.opacity,Vt)),ut=new ga(ct.geometry,Vt,Math.max(4,ct.items.length+8)),ut.instanceMatrix.setUsage(Lh),ut.frustumCulled=!0,ut.receiveShadow=ct.opacity>=1,n.add(ut),h.set(et,ut)}ut.count=ct.items.length,ut.castShadow=ct.shadow&&ht!=="low",ut.visible=!0;for(let Vt=0;Vt<ct.items.length;Vt++)u.fromArray(ct.items[Vt].m),ut.setMatrixAt(Vt,u);ut.instanceMatrix.needsUpdate=!0,ut.computeBoundingSphere()}return t.shadowMap.enabled=ht!=="low",t.render(n,s),{drawCalls:t.info.render.calls,triangles:t.info.render.triangles,effectiveQuality:ht}}return{render:T,renderer:t,scene:n}}function Sf(i,t=Mf){let e=t(i);if(e)return{canvas:i,threeBackend:e,software:!1,softwareContext:null};let n=r=>{try{return r.getContext("2d")}catch{return null}},s=n(i);if(!s){let r=i.cloneNode(!1);if(s=n(r),!s)throw new Error("\u65E0\u6CD5\u521D\u59CB\u5316 WebGL \u6216 Canvas \u663E\u793A\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6216\u66F4\u6362\u652F\u6301\u7684\u6D4F\u89C8\u5668\u3002");i.replaceWith(r),i=r}return{canvas:i,threeBackend:null,software:!0,softwareContext:s}}function bf(i,t){for(let e of i.querySelectorAll("#trackPicker [data-track]")){let n=t[e.dataset.track];if(!n||e.querySelector(".course-art"))continue;let s=i.createElement("img");s.className="course-art",s.alt="",s.setAttribute("aria-hidden","true"),s.draggable=!1,s.decoding="async",s.hidden=!0,s.width=512,s.height=256,s.onload=()=>{s.hidden=!1,e.dataset.art="ready"},s.onerror=()=>{s.remove(),delete e.dataset.art},e.prepend(s),s.src=n}}(()=>{"use strict";let i=document.getElementById("scene"),t=document.getElementById("error"),e=document.getElementById("loading");function n(o){t.hidden=!1,document.getElementById("error-text").textContent=o,e.classList.add("done")}let s={light:"/assets/impact-audio/rail-light-v2.e9daa5ac2bd3.wav",medium:"/assets/impact-audio/rail-medium-v2.9e322b68b6d0.wav"},r=!1;try{let g=function(a,l,d){let m=[];if(d){let b=(a%l+l)%l;for(let A=0;A<l;A+=40){let C=A-b;C-=Math.round(C/l)*l,C>=-40&&C<210&&m.push({s:A,ds:C})}}else for(let b=Math.ceil((a-40)/40)*40;b<a+210;b+=40)m.push({s:b,ds:b-a});return m},f=function(a,l,d,m,b){let A=[];for(let C of a){if(!l.includes(C.mesh))continue;let F=d(et(C.m,[0,2.28,0]));!F||F[2]>150||F[0]<-F[3]*3||F[0]>m+F[3]*3||F[1]<-F[3]*3||F[1]>b+F[3]*3||A.push({item:C,q:F})}return A.sort((C,F)=>C.q[2]-F.q[2]).slice(0,6).map(({item:C,q:F})=>{let k=C.mesh,Z=k.sourceData,at=k.sourceIndices,xt=[];for(let Tt=0;Tt<Z.length;Tt+=10)xt.push(d(et(C.m,[Z[Tt],Z[Tt+1],Z[Tt+2]])));let dt=v.get(k);if(!dt){dt=[];for(let Tt=0;Tt<at.length;Tt+=3){let Ct=at[Tt]*10+6;dt.push("rgb("+[0,1,2].map(ce=>Math.round(Math.pow(Z[Ct+ce],1/2.2)*255)).join(",")+")")}v.set(k,dt)}let vt=[];for(let Tt=0;Tt<at.length;Tt+=3){let Ct=[xt[at[Tt]],xt[at[Tt+1]],xt[at[Tt+2]]];Ct.some(ce=>!ce)||vt.push({p:Ct,color:dt[Tt/3],depth:(Ct[0][2]+Ct[1][2]+Ct[2][2])/3})}return vt.sort((Tt,Ct)=>Ct.depth-Tt.depth),{kind:"sign",q:F,triangles:vt}})},M=function(a,l){for(let{p:d,color:m}of l.triangles)a.fillStyle=m,a.beginPath(),a.moveTo(d[0][0],d[0][1]),a.lineTo(d[1][0],d[1][1]),a.lineTo(d[2][0],d[2][1]),a.closePath(),a.fill()},w=function(a){let l=u,d=i.width,m=i.height;l.setTransform(1,0,0,1,0,0);let b=l.createLinearGradient(0,0,0,m);b.addColorStop(0,"#96c8ee"),b.addColorStop(.62,"#f2e6ee"),b.addColorStop(.63,"#cbd8c1"),b.addColorStop(1,"#bdcdb8"),l.fillStyle=b,l.fillRect(0,0,d,m);let A=a.eye,C=a.target,F=T(O(C,A)),k=T(D(F,[0,1,0])),Z=D(k,F),at=m/(2*Math.tan(Vs*Math.PI/360)),xt=Mt=>{let ft=O(Mt,A),Rt=L(ft,F);return Rt<.25?null:[d/2+L(ft,k)*at/Rt,m/2-L(ft,Z)*at/Rt,Rt,at/Rt]},dt=(Mt,ft)=>{let Rt=Mt.map(xt);Rt.some(Ft=>!Ft)||(l.fillStyle=ft,l.beginPath(),Rt.forEach((Ft,qt)=>qt?l.lineTo(Ft[0],Ft[1]):l.moveTo(Ft[0],Ft[1])),l.closePath(),l.fill())},vt=Mt=>O(Mt,a.origin),Tt=[];for(let Mt=-40;Mt<240;Mt+=5){let ft=_.s+Mt,Rt=ve(ft),Ft=ve(ft+5);Tt.push({d:Mt,a:Rt,b:Ft})}for(let Mt of Tt.reverse()){let ft=(Rt,Ft,qt)=>vt(I(I(Rt.p,E(Rt.R,Ft)),[0,qt,0]));if(dt([ft(Mt.a,-10,0),ft(Mt.a,10,0),ft(Mt.b,10,0),ft(Mt.b,-10,0)],"#e3dce5"),dt([ft(Mt.a,-7,.05),ft(Mt.a,7,.05),ft(Mt.b,7,.05),ft(Mt.b,-7,.05)],"#7b829a"),Math.floor(Mt.d/5)%2===0)for(let Rt of[-2.3,2.3])dt([ft(Mt.a,Rt-.04,.06),ft(Mt.a,Rt+.04,.06),ft(Mt.b,Rt+.04,.06),ft(Mt.b,Rt-.04,.06)],"#e9edf1");for(let Rt of[-1,1])dt([ft(Mt.a,Rt*8.1,.4),ft(Mt.a,Rt*8.1,.8),ft(Mt.b,Rt*8.1,.8),ft(Mt.b,Rt*8.1,.4)],"#c0cfe2")}let Ct=typeof zr<"u"&&typeof Tn<"u"?f(zr,[Tn.get("left"),Tn.get("right")],xt,d,m):[];if(typeof r<"u"&&r){let Mt=[...Ct];for(let ft=0;ft<210;ft+=20)for(let Rt of[-1,1]){let Ft=De(Math.floor((_.s+ft)/20)*20,Rt*12,0),qt=xt(vt(Ft));qt&&Mt.push({q:qt,side:Rt,ds:ft,pos:Ft,kind:"tree"})}for(let ft of g(_.s,S,ee==="circuit"))for(let Rt of[-1,1]){let Ft=xt(vt(De(ft.s,Rt*20,0)));Ft&&Mt.push({q:Ft,kind:"house"})}for(let ft of Mt.sort((Rt,Ft)=>Ft.q[2]-Rt.q[2])){if(ft.kind==="sign"){M(l,ft);continue}let[Rt,Ft,,qt]=ft.q;if(ft.kind==="tree"){l.fillStyle="#a78a95",l.fillRect(Rt-qt*.12,Ft-qt*3.5,qt*.24,qt*3.5);for(let wt=0;wt<4;wt++)l.fillStyle=wt%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(Rt+Math.sin(wt*2)*qt,Ft-qt*(3.3+wt*.3),qt*1.6,qt*1.1,0,0,x),l.fill()}else{let wt=ft.q;l.fillStyle="#f3e9dc",l.fillRect(wt[0]-wt[3]*3,wt[1]-wt[3]*5,wt[3]*6,wt[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(wt[0]-wt[3]*3.5,wt[1]-wt[3]*5),l.lineTo(wt[0],wt[1]-wt[3]*6.3),l.lineTo(wt[0]+wt[3]*3.5,wt[1]-wt[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let Je=0;Je<3;Je++)l.fillRect(wt[0]+(Je-1.2)*wt[3]*1.5,wt[1]-wt[3]*3.9,wt[3],wt[3]*1.2)}}}else{let Mt=[...Ct];for(let ft=0;ft<210;ft+=20)for(let Rt of[-1,1]){let Ft=De(Math.floor((_.s+ft)/20)*20,Rt*12,0),qt=xt(vt(Ft));qt&&Mt.push({q:qt,side:Rt,ds:ft,pos:Ft})}for(let ft of Mt.sort((Rt,Ft)=>Ft.q[2]-Rt.q[2])){if(ft.kind==="sign"){M(l,ft);continue}let[Rt,Ft,,qt]=ft.q;l.fillStyle="#a78a95",l.fillRect(Rt-qt*.12,Ft-qt*3.5,qt*.24,qt*3.5);for(let wt=0;wt<4;wt++)l.fillStyle=wt%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(Rt+Math.sin(wt*2)*qt,Ft-qt*(3.3+wt*.3),qt*1.6,qt*1.1,0,0,x),l.fill();if(ft.ds%40===0){let wt=xt(vt(De(_.s+ft.ds,ft.side*20,0)));if(wt){l.fillStyle="#f3e9dc",l.fillRect(wt[0]-wt[3]*3,wt[1]-wt[3]*5,wt[3]*6,wt[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(wt[0]-wt[3]*3.5,wt[1]-wt[3]*5),l.lineTo(wt[0],wt[1]-wt[3]*6.3),l.lineTo(wt[0]+wt[3]*3.5,wt[1]-wt[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let Je=0;Je<3;Je++)l.fillRect(wt[0]+(Je-1.2)*wt[3]*1.5,wt[1]-wt[3]*3.9,wt[3],wt[3]*1.2)}}}}for(let Mt of ds)if(Mt.life>0){let ft=xt(vt(Mt.p));ft&&(l.fillStyle="#414957",l.fillRect(ft[0],ft[1],Math.max(1,ft[3]*.12),Math.max(2,ft[3]*Mt.length)))}for(let Mt of ln.values())for(let ft of Mt.entities){if(Math.abs(At(ft.s,_.s))>170)continue;let Rt=xt(vt(De(ft.s+(ft.ds||0),ft.l+(ft.dl||0),.2)));if(!Rt||ft.kind==="coin"&&ft.hitLap===Math.max(0,Math.floor(_.s/S)))continue;let[Ft,qt,,wt]=Rt;if(ft.kind==="coin")l.fillStyle="#ffe2a0",l.beginPath(),l.ellipse(Ft,qt-wt*.8,wt*.25,wt*.38,0,0,x),l.fill();else if(ft.kind==="pad"){let Je=ve(ft.s),Ve=(En,Ke)=>vt(De(ft.s+En,ft.l+Ke,.07));dt([Ve(-1.2,-1.5),Ve(1.2,-1.5),Ve(1.2,1.5),Ve(-1.2,1.5)],"#92e3e5")}else if(ft.kind==="ramp"){let Je=(Ve,En,Ke)=>vt(De(ft.s+Ve,ft.l+En,Ke));dt([Je(-1.4,-1.5,.08),Je(1.4,-1.5,.85),Je(1.4,1.5,.85),Je(-1.4,1.5,.08)],"#bfa9e3")}else ft.kind==="cone"?(l.fillStyle="#eebd92",l.beginPath(),l.moveTo(Ft,qt-wt*.8),l.lineTo(Ft-wt*.35,qt),l.lineTo(Ft+wt*.35,qt),l.fill()):ft.kind==="barrier"&&(l.fillStyle="#edacbb",l.fillRect(Ft-wt,qt-wt*.7,wt*2,wt*.7))}let ce=(Mt,ft,Rt,Ft,qt,wt=1)=>{let Je=ve(Mt),Ve=De(Mt,ft,.05+Ft),En=xt(vt(Ve));if(!En)return;l.globalAlpha=wt;let Ke=(js,Qs,Hi)=>vt(I(Ve,I(E(Je.T,js*Math.cos(Rt)-Hi*Math.sin(Rt)),I(E(Je.R,js*Math.sin(Rt)+Hi*Math.cos(Rt)),[0,Qs,0]))));dt([Ke(-1.6,.3,-.8),Ke(1.6,.3,-.8),Ke(1.6,.7,.8),Ke(-1.6,.7,.8)],qt),dt([Ke(-1.6,.65,-.8),Ke(1.6,.65,-.8),Ke(1.6,.65,.8),Ke(-1.6,.65,.8)],"#eef1f7");for(let js of[-1,1])for(let Qs of[-.87,.87]){let Hi=xt(Ke(js,.35,Qs));Hi&&(l.fillStyle="#3c4357",l.beginPath(),l.ellipse(Hi[0],Hi[1],En[3]*.24,En[3]*.34,0,0,x),l.fill())}let Ms=xt(Ke(-.3,1.6,0));Ms&&(l.fillStyle="#f3d2be",l.beginPath(),l.arc(Ms[0],Ms[1],En[3]*.33,0,x),l.fill(),l.fillStyle="#a9abe4",l.beginPath(),l.ellipse(Ms[0],Ms[1]-En[3]*.18,En[3]*.36,En[3]*.2,0,Math.PI,x),l.fill()),l.globalAlpha=1};if(nn.line&&ne==="running")for(let Mt=8;Mt>=0;Mt--){let ft=_.s+12+Mt*9,Rt=ve(ft),Ft=R(Rt.curv*80,-2.1,2.1),qt=(wt,Je)=>vt(De(ft+wt,Ft+Je,.09));dt([qt(-.6,-.4),qt(.3,0),qt(-.6,.4),qt(-.2,0)],Math.abs(Rt.curv)*_.speed>.95?"#f0b7c3":"#a5dbe6")}if(Ei&&Ai?.points?.length&&ne==="running"){let Mt=Ai.points[vs];Mt&&ce(Mt[1],Mt[2],Mt[3],Mt[4],"#b8e9e6",.35)}if(typeof Wn<"u")for(let Mt of Wn)ce(Mt.s,Mt.l,Mt.yaw||0,0,Mt.color);if(typeof st<"u"&&st.room)for(let Mt of st.peers.values())Mt.position&&ce(Mt.position.s,Mt.position.l,Mt.position.yaw,Mt.position.jump,"#eab5ce");if(_.mini>0||_.nitroTime>0||_.pad>0){let Mt=ve(_.s),ft=xt(vt(De(_.s-2,_.l,.4+_.jump)));ft&&(l.fillStyle=_.nitroTime>0?"#bcb2ff99":"#95edff99",l.beginPath(),l.ellipse(ft[0],ft[1],ft[3]*.7,ft[3]*.45,0,0,x),l.fill())}ce(_.s,_.l,_.yaw,_.jump,typeof Qe<"u"?Qe.paint:"#8ccde4")},J=function(a,l){let d=new Float32Array(16);for(let m=0;m<4;m++)for(let b=0;b<4;b++)d[m*4+b]=a[b]*l[m*4]+a[4+b]*l[m*4+1]+a[8+b]*l[m*4+2]+a[12+b]*l[m*4+3];return d},tt=function(a,l,d){let m=Y();return m[12]=a,m[13]=l,m[14]=d,m},X=function(a,l,d){let m=Y();return m[0]=a,m[5]=l,m[10]=d,m},nt=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([1,0,0,0,0,l,d,0,0,-d,l,0,0,0,0,1])},ht=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,0,-d,0,0,1,0,0,d,0,l,0,0,0,0,1])},ot=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,d,0,0,-d,l,0,0,0,0,1,0,0,0,0,1])},rt=function(a=[0,0,0],l=[1,1,1],d=[0,0,0]){return J(tt(...a),J(ht(d[1]),J(nt(d[0]),J(ot(d[2]),X(...l)))))},et=function(a,l){return[a[0]*l[0]+a[4]*l[1]+a[8]*l[2]+a[12],a[1]*l[0]+a[5]*l[1]+a[9]*l[2]+a[13],a[2]*l[0]+a[6]*l[1]+a[10]*l[2]+a[14]]},ct=function(a){let l=[a[0],a[1],a[2]],d=[a[4],a[5],a[6]],m=[a[8],a[9],a[10]],b=D(d,m),A=D(m,l),C=D(l,d),F=L(l,b)||1;return new Float32Array([...E(b,1/F),...E(A,1/F),...E(C,1/F)])},ut=function(a,l){return T([a[0]*l[0]+a[3]*l[1]+a[6]*l[2],a[1]*l[0]+a[4]*l[1]+a[7]*l[2],a[2]*l[0]+a[5]*l[1]+a[8]*l[2]])},Vt=function(a,l,d=[0,1,0]){let m=T(O(a,l)),b=T(D(d,m)),A=D(m,b);return new Float32Array([b[0],A[0],m[0],0,b[1],A[1],m[1],0,b[2],A[2],m[2],0,-L(b,a),-L(A,a),-L(m,a),1])},Jt=function(a,l,d,m){let b=1/Math.tan(a/2),A=1/(d-m);return new Float32Array([b/l,0,0,0,0,b,0,0,0,0,(m+d)*A,-1,0,0,2*m*d*A,0])},Be=function(a,l,d,m,b,A){return new Float32Array([2/(l-a),0,0,0,0,2/(m-d),0,0,0,0,-2/(A-b),0,-(l+a)/(l-a),-(m+d)/(m-d),-(A+b)/(A-b),1])},ye=function(a,l,d,m=d){let b=O(l,a),A=T(b),C=T(D(Math.abs(A[2])<.95?[0,0,1]:[1,0,0],A)),F=D(C,A),k=E(I(a,l),.5),Z=z(b);return new Float32Array([C[0]*d,C[1]*d,C[2]*d,0,A[0]*Z,A[1]*Z,A[2]*Z,0,F[0]*m,F[1]*m,F[2]*m,0,...k,1])},Re=function(a){let l=parseInt(a.replace("#",""),16);return[l>>16&255,l>>8&255,l&255].map(d=>Math.pow(d/255,2.2))},_t=function(a,l,d){return{p:a,n:l,i:d}},Xt=function(a=20,l=12){let d=[],m=[],b=[];for(let A=0;A<=l;A++){let C=A*P/l;for(let F=0;F<=a;F++){let k=F*x/a,Z=[Math.sin(C)*Math.cos(k),Math.cos(C),Math.sin(C)*Math.sin(k)];d.push(...Z),m.push(...Z)}}for(let A=0;A<l;A++)for(let C=0;C<a;C++){let F=A*(a+1)+C,k=F+a+1;b.push(F,F+1,k,F+1,k+1,k)}return _t(d,m,b)},ie=function(a=16,l=1){let d=[],m=[],b=[];for(let A=0;A<2;A++)for(let C=0;C<=a;C++){let F=C*x/a,k=A?l:1,Z=T([Math.cos(F),1-l,Math.sin(F)]);d.push(k*Math.cos(F),A-.5,k*Math.sin(F)),m.push(...Z)}for(let A=0;A<a;A++){let C=A,F=A+a+1;b.push(C,F,C+1,C+1,F,F+1)}for(let A=0;A<2;A++){let C=d.length/3,F=A-.5,k=A?l:1;d.push(0,F,0),m.push(0,A?1:-1,0);for(let Z=0;Z<=a;Z++){let at=Z*x/a;d.push(k*Math.cos(at),F,k*Math.sin(at)),m.push(0,A?1:-1,0)}for(let Z=0;Z<a;Z++)b.push(C,C+Z+(A?2:1),C+Z+(A?1:2))}return _t(d,m,b)},Bt=function(a,l,d=48,m=10,b=0,A=x){let C=[],F=[],k=[];for(let Z=0;Z<=d;Z++){let at=b+A*Z/d;for(let xt=0;xt<=m;xt++){let dt=xt*x/m,vt=Math.cos(dt),Tt=Math.sin(dt);C.push((a+l*vt)*Math.cos(at),(a+l*vt)*Math.sin(at),l*Tt),F.push(vt*Math.cos(at),vt*Math.sin(at),Tt)}}for(let Z=0;Z<d;Z++)for(let at=0;at<m;at++){let xt=Z*(m+1)+at,dt=xt+m+1;k.push(xt,dt,xt+1,dt,dt+1,xt+1)}return _t(C,F,k)},He=function(a,l,d,m=.07){let b=[a,l,d,m].join(",");if(ue.has(b))return ue.get(b);m=Math.min(m,a/2*.95,l/2*.95,d/2*.95);let A=[],C=[],F=[],k=[a/2,l/2,d/2],Z=[[[0,0,d/2],[1,0,0],[0,1,0],a,l],[[0,0,-d/2],[-1,0,0],[0,1,0],a,l],[[a/2,0,0],[0,0,-1],[0,1,0],d,l],[[-a/2,0,0],[0,0,1],[0,1,0],d,l],[[0,l/2,0],[1,0,0],[0,0,-1],a,d],[[0,-l/2,0],[1,0,0],[0,0,1],a,d]];for(let[xt,dt,vt,Tt,Ct]of Z){let ce=Ft=>[-Ft/2,-Ft/2+m*.28,-Ft/2+m,Ft/2-m,Ft/2-m*.28,Ft/2],Mt=ce(Tt),ft=ce(Ct),Rt=A.length/3;for(let Ft of ft)for(let qt of Mt){let wt=I(xt,I(E(dt,qt),E(vt,Ft))),Je=wt.map((En,Ke)=>R(En,-k[Ke]+m,k[Ke]-m)),Ve=T(O(wt,Je));A.push(...I(Je,E(Ve,m))),C.push(...Ve)}for(let Ft=0;Ft<5;Ft++)for(let qt=0;qt<5;qt++){let wt=Rt+Ft*6+qt;F.push(wt,wt+1,wt+6,wt+1,wt+7,wt+6)}}let at=_t(A,C,F);return ue.set(b,at),at},me=function(a,l=.04,d=8){let m=[],b=[],A=[];for(let C=0;C<a.length;C++){let F=T(O(a[Math.min(C+1,a.length-1)],a[Math.max(C-1,0)])),k=T(D(F,Math.abs(F[1])<.9?[0,1,0]:[0,0,1])),Z=D(F,k);for(let at=0;at<=d;at++){let xt=at*x/d,dt=I(E(k,Math.cos(xt)),E(Z,Math.sin(xt)));m.push(...I(a[C],E(dt,l))),b.push(...dt)}}for(let C=0;C<a.length-1;C++)for(let F=0;F<d;F++){let k=C*(d+1)+F,Z=k+d+1;A.push(k,k+1,Z,k+1,Z+1,Z)}return _t(m,b,A)},Pe=function(a,l,d,m){let b=[],A=[],C=[];for(let k=0;k<=144;k++){let Z=k*x/144;for(let at of[-1,1])b.push((a+at*d)*Math.cos(Z),m,(l+at*d)*Math.sin(Z)),A.push(0,1,0)}for(let k=0;k<144;k++){let Z=k*2;C.push(Z,Z+2,Z+1,Z+1,Z+2,Z+3)}return _t(b,A,C)},q=function(a,l,d,m=pt.green,b=!1,A=.13){a.add(b?ge:Ue,rt(l,d),m,A)},B=function(a,l,d,m,b=.06,A=[0,0,0],C=.12){a.add(He(...d,b),rt(l,[1,1,1],A),m,C)},mt=function(a,l,d,m,b,A=.2,C=!1){a.add(je,ye(l,d,m),b,A),C&&(q(a,l,[m,m,m],b,!0,A),q(a,d,[m,m,m],b,!0,A))},Et=function(a,l,d,m,b=[0,0,0],A=!1){a.add(A?We:mn,rt(l,d,b),m)},lt=function(a,l,d,m,b=.15){a.add(me(l,d),Ie,m,b)},yt=function(a,l,d,m=100){return Array.from({length:m+1},(b,A)=>[a*Math.cos(A*x/m),d,l*Math.sin(A*x/m)])},jt=function(){return Lt=Lt*1664525+1013904223>>>0,Lt/4294967296},Ha=function(a,l,d){let m=-d*Math.min(.09,_.speed*.003),b=Math.sin(a*18)*Math.min(.012,_.speed*5e-4);bt.local=rt([0,b,0],[1,1,1],[m,0,0]),Kt.local=rt([-.31,1.57+b,0],[1,1,1],[-m*.5,-d*.13,0]);for(let A of Le)A.n.local=J(tt(A.x,.41,A.z),J(ht(A.front?-(_.drifting?d*.12-wn(_.yaw-_.velocityYaw)*.62:d*.26):0),ot(xc)));for(let A of Te){let C=_.boostActive?1.25+.17*Math.sin(a*38+A.side):_.pad>0?1+.12*Math.sin(a*36):_.mini>0?.65+.12*Math.sin(a*42+A.side):.001;A.n.local=rt([-1.9,.43,A.side*.34],[C,Math.max(.01,C),Math.max(.01,C)])}},j=function(){return Kn[en]},$=function(){return S*j().laps},Q=function(a){let l=j().points,d=l.length,m=(a%d+d)%d,b=Math.floor(m),A=m-b,C=l[(b+d-1)%d],F=l[b],k=l[(b+1)%d],Z=l[(b+2)%d];return F.map((at,xt)=>.5*(2*at+(-C[xt]+k[xt])*A+(2*C[xt]-5*at+4*k[xt]-Z[xt])*A*A+(-C[xt]+3*at-3*k[xt]+Z[xt])*A*A*A))},Ut=function(){Wa=en,un=[],S=0;let a=j().points.length*120;for(let m=0;m<=a;m++){let b=m*j().points.length/a,A=Q(b);m&&(S+=z(O(A,un[m-1].p)));let C=O(Q(b+1e-4),Q(b-1e-4));un.push({s:S,p:A,h:Math.atan2(C[2],C[0])})}let l=un.map(m=>m.p[0]),d=un.map(m=>m.p[2]);W={minX:Math.min(...l),maxX:Math.max(...l),minZ:Math.min(...d),maxZ:Math.max(...d)}},Ht=function(a){let l=(a%S+S)%S,d=0,m=un.length-1;for(;d+1<m;){let Z=d+m>>1;un[Z].s<=l?d=Z:m=Z}let b=un[d],A=un[m],C=(l-b.s)/(A.s-b.s||1),F=Math.atan2(Math.sin(A.h-b.h),Math.cos(A.h-b.h)),k=b.h+F*C;return{p:b.p.map((Z,at)=>V(Z,A.p[at],C)),h:k,T:[Math.cos(k),0,Math.sin(k)],R:[-Math.sin(k),0,Math.cos(k)],curv:F/(A.s-b.s),slope:(A.p[1]-b.p[1])/(A.s-b.s)}},At=function(a,l){let d=a-l;return ee==="circuit"&&(d-=Math.round(d/S)*S),d},Nt=function(){return ui+(_.timePenalty||0)},Wt=function(a){let l=Math.floor(a/60),d=a-l*60;return String(l).padStart(2,"0")+":"+d.toFixed(2).padStart(5,"0")},he=function(a,l){if(ee!=="circuit")return!0;let d=I(Ht(a).p,E(Ht(a).R,l));for(let m=0;m<un.length;m+=20){let b=un[m];if(Math.abs(At(b.s,a))>35&&Math.hypot(b.p[0]-d[0],b.p[2]-d[2])<15)return!1}return!0},Gt=function(){return[[Math.cos(_.yaw),Math.sin(_.yaw)],[-Math.sin(_.yaw),Math.cos(_.yaw)]]},dn=function(a){let l=Gt(),d=a.angle||0,m=[[Math.cos(d),Math.sin(d)],[-Math.sin(d),Math.cos(d)]],b=[At(_.s,a.s+(a.ds||0)),_.l-a.l-(a.dl||0)],A=a.kind==="cone"?[.39,.39]:[.35,1.1],C=1/0,F=null;for(let k of[l[0],l[1],m[0],m[1]]){let Z=Math.abs(_e(l[0],k))*Me+Math.abs(_e(l[1],k))*Ge,at=Math.abs(_e(m[0],k))*A[0]+Math.abs(_e(m[1],k))*A[1],xt=Z+at-Math.abs(_e(b,k));if(xt<=0)return null;if(xt<C){C=xt;let dt=_e(b,k)>=0?1:-1;F=k.map(vt=>vt*dt)}}return{normal:F,pen:C}},Se=function(a,l,d=null){let m=1/fe,b=1/Yt,A=d?d.kind==="cone"?9:85:1/0,C=d?1/A:0,F=d?[At(_.s+l[0],d.s+(d.ds||0)),_.l+l[1]-d.l-(d.dl||0)]:[0,0],k=d?1/(A*(d.kind==="cone"?.09:.48)):0,Z=[_.vS-_.spin*l[1],_.vL+_.spin*l[0]],at=d?[(d.vS||0)-(d.omega||0)*F[1],(d.vL||0)+(d.omega||0)*F[0]]:[0,0],xt=[Z[0]-at[0],Z[1]-at[1]],dt=_e(xt,a);if(dt>=0)return 0;let vt=Ze(l,a),Tt=Ze(F,a),Ct=d?.13:.035,ce=-(1+Ct)*dt/(m+C+vt*vt*b+Tt*Tt*k);_.vS+=a[0]*ce*m,_.vL+=a[1]*ce*m,_.spin=R(_.spin+vt*ce*b,-2.3,2.3);let Mt=[-a[1],a[0]],ft=Ze(l,Mt),Rt=Ze(F,Mt),Ft=_e(xt,Mt),qt=d?.22:.1,wt=R(-Ft/(m+C+ft*ft*b+Rt*Rt*k),-qt*ce,qt*ce);return _.vS+=Mt[0]*wt*m,_.vL+=Mt[1]*wt*m,_.spin=R(_.spin+ft*wt*b,-2.3,2.3),d&&(d.vS=(d.vS||0)-(a[0]*ce+Mt[0]*wt)*C,d.vL=(d.vL||0)-(a[1]*ce+Mt[1]*wt)*C,d.omega=R((d.omega||0)-(Tt*ce+Rt*wt)*k,-7,7),d.kind==="cone"&&(d.tilt=Math.min(1.35,(d.tilt||0)+Math.abs(ce)*C*.015))),Math.abs(dt)},bn=function(a,l){a<.7||_.contactSound>0||(_.contactSound=.16,cu(De(_.s,_.l,.45),Math.min(14,Math.ceil(a)),[0,1,0]),Ff(l,a),a>5&&(Or=Math.min(.25,a*.012),_.driftCharge*=.5))},Vn=function(a){_.contactSound=Math.max(0,_.contactSound-a);for(let l of ln.values())for(let d of l.entities)(d.kind==="cone"||d.kind==="barrier")&&(d.vS=(d.vS||0)*Math.exp(-a*2.4),d.vL=(d.vL||0)*Math.exp(-a*2.4),d.ds=R((d.ds||0)+d.vS*a,-18,18),d.dl=R((d.dl||0)+d.vL*a,-7.4-d.l,7.4-d.l),d.angle=(d.angle||0)+(d.omega||0)*a,d.omega=(d.omega||0)*Math.exp(-a*2));for(let l=0;l<3;l++){let d=Gt(),m=Math.abs(d[0][1])*Me+Math.abs(d[1][1])*Ge,b=ze-m;if(Math.abs(_.l)>b){let A=Math.sign(_.l),C=[0,-A];_.l=A*(b-.015);let F=[A*(Math.sign(d[0][1])*Me*d[0][0]+Math.sign(d[1][1])*Ge*d[1][0]),A*m],k=Se(C,F);bn(k,"rail"),k>4&&(Ya(!1),_.turnRate*=.4,to=!1)}if(!(_.jump>.85))for(let A of ln.values())for(let C of A.entities){if(C.kind!=="cone"&&C.kind!=="barrier"||Math.abs(At(C.s+(C.ds||0),_.s))>4.5||Math.abs(C.l+(C.dl||0)-_.l)>4)continue;let F=dn(C);if(!F)continue;let k=C.kind==="cone"?9:85,Z=k/(k+fe),at=Math.max(0,F.pen-.008)*.82;_.s+=F.normal[0]*at*Z,_.l+=F.normal[1]*at*Z,C.ds=(C.ds||0)-F.normal[0]*at*(1-Z),C.dl=(C.dl||0)-F.normal[1]*at*(1-Z);let xt=Gt(),dt=[At(C.s+(C.ds||0),_.s),C.l+(C.dl||0)-_.l],vt=R(_e(dt,xt[0]),-Me,Me),Tt=R(_e(dt,xt[1]),-Ge,Ge),Ct=[xt[0][0]*vt+xt[1][0]*Tt,xt[0][1]*vt+xt[1][1]*Tt],ce=Se(F.normal,Ct,C);bn(ce,C.kind)}}_.speed=Math.hypot(_.vS,_.vL),_.velocityYaw=Math.atan2(_.vL,_.vS),_.lateralSpeed=_.vL},bi=function(a,l){if(!Tn.has(a)){let d=new G;l(d),Tn.set(a,d.finish())}return Tn.get(a)},Ee=function(a,l,d,m,b="#627596"){let A=[-l/2,m,-d/2],C=[l/2,m,-d/2],F=[l/2,m,d/2],k=[-l/2,m,d/2],Z=[-l/2,m+1.3,0],at=[l/2,m+1.3,0];jn(a,A,C,at,Z,b),jn(a,Z,at,F,k,b),jn(a,A,Z,k,k,"#e9e1d2"),jn(a,C,F,at,at,"#e9e1d2");for(let xt=0;xt<9;xt++){let dt=-l/2+xt*l/8;lt(a,[[dt,m,-d/2],[dt,m+1.3,0],[dt,m,d/2]],.025,"#8797b0")}mt(a,[-l/2-.15,m+1.33,0],[l/2+.15,m+1.33,0],.08,b)},Ye=function(a,l=0){let d=["#fff0db","#e9eafa","#f9dbe2","#e0f1ec"][l%4],m=["#7190b6","#9a82b3","#be8f98","#6c9a9a"][l%4];B(a,[0,2.65,0],[6,5.3,4.8],d,.08),B(a,[0,.12,0],[6.4,.24,5.1],"#b9b7c5",.035),Ee(a,6.7,5.8,5.3,m);for(let b of[-1,1])for(let A of[-1.9,0,1.9])for(let C of[1.4,3.85])B(a,[A,C,b*2.425],[1.2,1.35,.055],m,.025),B(a,[A,C,b*2.46],[1.05,1.18,.03],"#b8dfe8",.01,[0,0,0],.45),mt(a,[A,C-.58,b*2.49],[A,C+.58,b*2.49],.025,"#f4f7fa"),B(a,[A,C-.72,b*2.55],[1.35,.12,.28],m,.015);B(a,[0,1.03,2.5],[1.04,2.05,.1],"#798c9c",.025),B(a,[.34,1.03,2.57],[.05,.12,.04],"#f7d5a4",.01);for(let b of[-1,1])B(a,[b*2.65,.48,2.9],[.65,.9,.7],"#b9c9b0",.035),q(a,[b*2.65,1.14,2.9],[.6,.55,.5],"#88ba9a",!0)},li=function(a,l=0){let d=["#ef9ba5","#88bfc9","#a6a0d5"][l%3];B(a,[0,2,0],[7,4,4.8],"#fff1dd",.06),Ee(a,7.7,5.8,4,"#6f7d98");for(let m of[-2.05,0,2.05])B(a,[m,1.4,2.45],[1.8,2.15,.06],"#88afb9",.02),B(a,[m,1.45,2.5],[1.54,1.92,.025],"#c2e4e8",.015),B(a,[m,1.45,2.54],[.045,1.92,.02],"#edf6ee",.005);B(a,[0,3.03,2.65],[7.4,.7,.55],d,.035);for(let m=0;m<12;m++)B(a,[-3.35+m*.61,2.62,2.95],[.59,.24,1.15],m%2?"#fff6e3":d,.025,[.12,0,0]);for(let m of[-1,1])mt(a,[m*3.3,0,3.35],[m*3.3,2.6,3.35],.055,d);for(let m of[-1.9,0,1.9])B(a,[m,3.04,2.96],[.45,.34,.025],"#fff6e6",.02),B(a,[m+.28,3.04,2.97],[.065,.22,.02],"#fff6e6",.01);for(let m of[-2.6,2.7]){B(a,[m,.35,3.35],[.75,.7,.65],"#cda883",.035);for(let b of[-.14,.14])B(a,[m,.52,3.35+b],[.6,.035,.035],"#ecd3a5",.005)}B(a,[1.4,.72,3.5],[.6,1.3,.12],"#7e8f9c",.03,[.08,0,0]);for(let m=0;m<4;m++)B(a,[1.4,.38+m*.2,3.58],[.38,.025,.025],"#e9f1e8",.005)},Fe=function(a,l=0){let d="#997786",m=["#f8c6dc","#f6b8d5","#ffdfeb"];mt(a,[0,0,0],[l?.35:-.25,3.4,0],.18,d),mt(a,[0,1.9,0],[-1.55,3.55,.2],.11,d),mt(a,[.1,2.2,0],[1.55,3.8,-.25],.1,d);let A=[[-1.4,3.9,.1,1.5],[0,4.6,0,1.8],[1.6,4.05,-.2,1.5],[-.4,4,1.35,1.45],[.4,4.1,-1.3,1.5]];for(let C=0;C<A.length;C++){let[F,k,Z,at]=A[C];q(a,[F,k,Z],[at,at*.7,at*.86],m[(C+l)%3],!0,.02),q(a,[F+.2,k+.6,Z+.15],[at*.6,at*.28,at*.52],"#ffe8f1",!0,.01)}for(let C=0;C<12;C++){let F=C*2.399,k=.6+C%4*.38;B(a,[Math.cos(F)*k,.045,Math.sin(F)*k],[.12,.015,.065],m[C%3],.012,[0,F,0])}},ci=function(a){mt(a,[0,0,0],[0,4.2,0],.14,"#9c8c84");for(let l=0;l<3;l++)q(a,[(l-1)*.45,2.7+l*.82,0],[1.9-l*.35,.78,1.25-l*.16],["#7cb5aa","#8fc9b5","#a6d7ba"][l],!0,.02)},Fi=function(a){B(a,[0,.1,0],[.55,.2,.55],"#9da8b9",.025),mt(a,[0,.15,0],[0,5.6,0],.065,"#7e8da8"),lt(a,[[0,5.4,0],[0,5.8,.3],[0,5.8,1.3],[0,5.5,1.55]],.055,"#7e8da8"),B(a,[0,5.46,1.55],[.65,.16,.9],"#e5edee",.05),B(a,[0,5.36,1.55],[.5,.025,.72],"#fff0b3",.025,[0,0,0],.1)},Xa=function(a){for(let l of[-4,4])mt(a,[l,0,0],[l*.94,6.3,0],.29,"#d98085"),mt(a,[l,0,0],[l,.75,0],.31,"#66728c"),mt(a,[l*.95,4.65,0],[l*.95,6.65,0],.32,"#dc8d91");B(a,[0,5,0],[9.8,.36,.48],"#d68183",.06),lt(a,[[-5.65,6.55,0],[-4.5,6.3,0],[0,6.2,0],[4.5,6.3,0],[5.65,6.55,0]],.25,"#6d7089"),mt(a,[0,5,0],[0,6.15,0],.13,"#d68183"),B(a,[0,5.65,.31],[.9,1.12,.15],"#55677e",.02),B(a,[0,5.65,.4],[.5,.69,.025],"#edcf9d",.01)},Tf=function(a){B(a,[0,.25,0],[13,.5,6.8],"#c6c4ce",.04);for(let l of[-5,0,5])for(let d of[-2.2,2.2])mt(a,[l,.5,d],[l,4.1,d],.1,"#8fa2ad");Ee(a,14,7.8,4.1,"#73849c");for(let l=0;l<12;l++)B(a,[-5.8+l*1.05,.53,3],[.8,.025,.2],"#f6dfa0",.008);B(a,[0,3.2,2.6],[4,.9,.22],"#eef5ed",.04),B(a,[-1.55,3.2,2.75],[.45,.45,.04],"#8ec9c5",.03);for(let l=0;l<6;l++)B(a,[-.8+l*.45,3.2,2.75],[.19,.24,.03],"#8294a8",.01);for(let l of[-3.5,3.5]){B(a,[l,1.02,0],[2.7,.15,.65],"#c2a38c",.02);for(let d of[-.95,.95])mt(a,[l+d,.5,0],[l+d,.95,0],.06,"#8c91a3")}},wf=function(a){for(let l of[-1.16,1.16])B(a,[0,.05,l],[20,.1,.09],"#81929f",.015);for(let l=0;l<20;l++)B(a,[-9.5+l,.005,0],[.23,.07,3.4],"#bea58d",.015);B(a,[0,1.65,0],[13,2.7,3],"#edf5dc",.25),B(a,[0,1.25,0],[13.15,.38,3.06],"#83bcb6",.04),B(a,[0,3.08,0],[12.5,.25,3.1],"#b3bfc6",.12);for(let l of[-1,1]){for(let d=0;d<7;d++){let m=-5.2+d*1.73;B(a,[m,2,l*1.52],[1.35,1.05,.06],"#769ba8",.04),B(a,[m,2.1,l*1.56],[1.16,.8,.025],"#bbdfe6",.03)}for(let d of[-4.3,4.3])q(a,[d,.45,l*1.16],[.49,.49,.13],"#596980",!0),B(a,[d,.48,l*1.31],[.19,.19,.03],"#bfccd1",.03)}for(let l of[-6.55,6.55]){B(a,[l,2.1,0],[.06,1.05,2.1],"#acd2dd",.05);for(let d of[-.9,.9])q(a,[l,1.25,d],[.05,.13,.13],"#fff4ba",!0)}lt(a,[[-1.5,3.25,0],[0,4.3,0],[1.5,3.25,0]],.055,"#718699"),mt(a,[-.65,4.3,0],[.65,4.3,0],.07,"#718699")},Af=function(a){B(a,[0,4.8,0],[24,9.6,7],"#f4eedf",.06),Ee(a,25.2,8.2,9.6,"#8095ad"),B(a,[0,6.1,3.7],[4.8,12.2,2],"#e6eaf0",.06),Ee(a,5.4,3.1,12.2,"#879bb4");for(let l of[-10,-7,-4,4,7,10])for(let d of[2,4.8,7.6])B(a,[l,d,3.56],[1.9,1.65,.06],"#8da6b8",.025),B(a,[l,d,3.61],[1.64,1.41,.025],"#c7e9eb",.015),B(a,[l,d,3.65],[.045,1.41,.025],"#f6f5ed",.005);B(a,[0,1.5,4.75],[3.2,2.8,.06],"#9cbdcd",.025);for(let l of[-.75,.75])B(a,[l,1.5,4.81],[.035,2.7,.025],"#f7eee4",.005);q(a,[0,10.2,4.77],[.9,.9,.06],"#fff7df",!0,.02),a.add(Bt(.89,.045,28,7),tt(0,10.2,4.84),"#7f91a8",.08),mt(a,[0,10.2,4.91],[0,10.8,4.91],.03,"#697e98"),mt(a,[0,10.2,4.92],[.43,10.4,4.92],.03,"#697e98"),B(a,[0,-.02,7.5],[23,.1,12],"#e2e1db",.03);for(let l of[-5.5,5.5])B(a,[l,1.5,12.1],[.8,3,.8],"#e8dbc7",.04),B(a,[l,3.06,12.1],[1,.2,1],"#a1acb9",.025);for(let l of[-1,1])for(let d=0;d<8;d++){let m=l*(6.4+d*.65);mt(a,[m,0,12],[m,1.8,12],.025,"#9cacc0")}for(let l of[-1,1])mt(a,[l*6,1.65,12],[l*11.5,1.65,12],.035,"#9cacc0")},Ef=function(a){B(a,[0,1.25,0],[1.2,2.5,.82],"#f3a4ad",.09),B(a,[-.13,1.55,.43],[.82,1.35,.05],"#b6e0e9",.03);for(let l=0;l<3;l++)for(let d=0;d<3;d++)B(a,[-.4+d*.27,1.12+l*.4,.48],[.13,.23,.06],["#f9e2ad","#a3d2cc","#d3c5ec"][d],.025),B(a,[-.4+d*.27,.94+l*.4,.49],[.1,.04,.02],"#fff0c7",.005);B(a,[0,.47,.44],[.75,.24,.055],"#738698",.03),B(a,[.43,1.3,.45],[.13,.18,.04],"#fff0b8",.02)},Cf=function(a){mt(a,[0,0,0],[0,2.6,0],.08,"#8c7e8a"),B(a,[0,2.55,0],[.55,.16,.55],"#877d92",.025),B(a,[0,2.22,0],[.41,.52,.41],"#ffe4ad",.04),B(a,[0,1.93,0],[.52,.12,.52],"#a19caa",.025);for(let l of[-.2,.2])for(let d of[-.2,.2])mt(a,[l,1.98,d],[l,2.49,d],.018,"#927f8d")},Rf=function(a,l){let d=l==="left"?-1:1;mt(a,[0,0,0],[0,2.4,0],.055,"#8499b0"),B(a,[0,2.28,0],[2.9,.78,.18],"#f3eacb",.04);for(let m=0;m<3;m++){let b=-.86+m*.86;mt(a,[b-d*.25,2.02,.12],[b+d*.15,2.28,.12],.055,"#bd8faf"),mt(a,[b+d*.15,2.28,.12],[b-d*.25,2.54,.12],.055,"#bd8faf")}},Pf=function(a){return bi(a,l=>{a.startsWith("house")?Ye(l,Number(a.slice(-1))):a.startsWith("shop")?li(l,Number(a.slice(-1))):a.startsWith("cherry")?Fe(l,Number(a.slice(-1))):a==="pine"?ci(l):a==="lamp"?Fi(l):a==="torii"?Xa(l):a==="station"?Tf(l):a==="tram"?wf(l):a==="vending"?Ef(l):a==="school"?Af(l):a==="lantern"?Cf(l):(a==="left"||a==="right")&&Rf(l,a)})},If=function(a){let l=(a%S+S)%S/S,d=j().sectors,m=d[0];for(let b of d)l>=b.at&&(m=b);return m},Lf=function(a,l,d){let m=new re,b=a*40,A=(k,Z,at,xt=1,dt=0)=>{if(ee==="circuit"&&Z>=S||!he(Z,at))return null;let vt=ve(Z),Tt=De(Z,at,-.05),Ct=-vt.h+(at>0?P:0)+dt,ce=new re(Pf(k),rt(O(Tt,l),[xt,xt,xt],[0,Ct,0]));return m.add(ce),ce},C=ee==="circuit"&&j().biome===1;for(let k of[-1,1]){A("lamp",b+7,k*9.65);for(let Z=0;Z<2;Z++)A("cherry"+(a+Z)%2,b+10+Z*20,k*(C?11.3:12.5),C?1.12:.92);(a%2===0||C)&&a%3!==1&&!(a===2&&k<0)&&!(C&&a===0&&k>0)&&A("house"+(a+(k>0?1:0))%4,b+19,k*(16.5+d()*2),.9+d()*.25),a%3===1&&!(a===2&&k<0)&&A("shop"+a%3,b+18,k*17.5),a%5===0&&A("vending",b+9,k*10.1),a%3===0&&A("pine",b+32,k*22,1.5)}let F=wn(ve(b+37).h-ve(b+7).h);if(Math.abs(F)>.25&&A(F>0?"right":"left",b+5,(F>0?-1:1)*9.4,1,F>0?-P/2:P/2),ee==="circuit"){let k=(b+20)/S;if(C&&a===0&&A("school",b+21,28),a===2&&(A("station",b+17,-20,1),A("tram",b+17,-27,1),A("vending",b+9,-12.8)),k>.66&&k<.74&&a%2===0){A("torii",b+22,-16);for(let Z of[-1,1])A("lantern",b+9,Z*10)}}return m},Nf=function(){hi&&hi.mesh.dispose(),hi&&(hi.mesh.dispose(),hi=null);let a=new G,l=W,d=[(l.minX+l.maxX)*.5,0,(l.minZ+l.maxZ)*.5],m=l.maxX-l.minX,b=l.maxZ-l.minZ;if(j().biome===0)for(let[C,F,k,Z]of[[m*.82,b*.89,-.43,"#eadfce"],[m*.78,b*.85,-.3,"#c7d9b4"]]){let at=[d[0],k,d[2]],xt=[0,1,0],dt=[];for(let vt=0;vt<=96;vt++){let Tt=vt*x/96,Ct=1+.025*Math.sin(Tt*5);at.push(d[0]+Math.cos(Tt)*C*Ct,k,d[2]+Math.sin(Tt)*F*Ct),xt.push(0,1,0),vt&&dt.push(0,vt,vt+1)}a.add(_t(at,xt,dt),Ie,Z,.02)}for(let C=0;C<12;C++){let F=C*x/12,k=320+C%3*36,Z=d[0]+Math.cos(F)*k,at=d[2]+Math.sin(F)*k,xt=40+C%4*18;Et(a,[Z,xt*.5-5,at],[70,xt,60],["#b5c4de","#a6bfd8","#c6cfdf"][C%3],[0,F,0],!0),C%3===0&&Et(a,[Z,xt*.85-5,at],[25,xt*.3,22],"#e5e5f0",[0,F,0],!0)}for(let C=0;C<10;C++){let F=C*x/10,k=[d[0]+Math.cos(F)*260,57+C%3*14,d[2]+Math.sin(F)*250];for(let Z=0;Z<4;Z++)q(a,I(k,[(Z-1.5)*12,Math.sin(Z*2)*4,0]),[17,7+Z%2*3,10],"#fff5f3",!0,.01)}hi=new re(a.finish()),hi.shadow=!1,tu=en,uc=Array.from({length:24},(C,F)=>({phase:F*2.399,node:new re(Df)}));for(let C of uc)C.node.shadow=!1},Uf=function(a,l){if(ee!=="circuit")return;(tu!==en||!hi)&&Nf(),hi.local=tt(-a[0],-a[1],-a[2]),N.add(hi);let d=ve(_.s);for(let m of uc){let b=m.phase,A=(b*13+l*1.7)%55-10,C=Math.sin(b*7)*10+Math.sin(l*.6+b)*2,F=1+((b*2-l*.65)%7+7)%7,k=I(De(_.s+A,C,F),[Math.sin(l+b)*.25,0,0]);m.node.local=rt(O(k,a),[1,1,1],[l*.8+b,b,l]),N.add(m.node)}},qa=function(){if(!xe)try{let xt=function(Ct,ce){let Mt=a.createBufferSource(),ft=a.createBiquadFilter(),Rt=a.createGain();return Mt.buffer=Z,Mt.loop=!0,ft.type=Ct,ft.frequency.value=ce,Rt.gain.value=0,Mt.connect(ft),ft.connect(Rt),Rt.connect(l),Mt.start(),{source:Mt,filter:ft,gain:Rt}},a=new(window.AudioContext||window.webkitAudioContext),l=a.createGain(),d=a.createDynamicsCompressor();l.gain.value=Nn?.48:0,l.connect(d),d.threshold.value=-18,d.ratio.value=4,d.connect(a.destination);let m=a.createGain(),b=a.createBiquadFilter();b.type="lowpass",b.frequency.value=1e3,m.gain.value=0,b.connect(m),m.connect(l);let A=a.createOscillator(),C=a.createOscillator(),F=a.createOscillator(),k=a.createGain();A.type="sawtooth",C.type="triangle",F.type="sine",C.detune.value=9,k.gain.value=.6;for(let Ct of[A,C])Ct.connect(b),Ct.start();F.connect(k),k.connect(b),F.start();let Z=a.createBuffer(1,a.sampleRate*2,a.sampleRate),at=Z.getChannelData(0);for(let Ct=0;Ct<at.length;Ct++)at[Ct]=Math.random()*2-1;let dt=xt("lowpass",1100),vt=xt("bandpass",1800),Tt=xt("highpass",2200);vt.filter.Q.value=3.5,xe={ctx:a,master:l,engine1:A,engine2:C,sub:F,engineGain:m,engineFilter:b,noise:Z,wind:dt,tire:vt,turbo:Tt,oldSpeed:0,oldBoost:!1,gear:0},Object.keys(s).length&&(xe.rail=Uu(a,l,s),xe.rail.load())}catch{}},Oi=function(a=620,l=.1){if(!Nn||!xe)return;let{ctx:d,master:m}=xe,b=d.createOscillator(),A=d.createGain();b.type="sine",b.frequency.setValueAtTime(a,d.currentTime),b.frequency.exponentialRampToValueAtTime(a*1.28,d.currentTime+l),A.gain.setValueAtTime(.07,d.currentTime),A.gain.exponentialRampToValueAtTime(.001,d.currentTime+l),b.connect(A),A.connect(m),b.start(),b.stop(d.currentTime+l+.02)},Ff=function(a,l){if(!Nn||!xe||xe.ctx.state!=="running"||a==="rail"&&xe.rail?.play(l))return;let{ctx:d,master:m,noise:b}=xe,A=d.createBufferSource(),C=d.createBiquadFilter(),F=d.createGain(),k=d.currentTime;if(A.buffer=b,C.type="bandpass",C.frequency.value=a==="rail"?1400:a==="cone"?450:700,C.Q.value=a==="rail"?1.5:.6,F.gain.setValueAtTime(Math.min(.3,.035+l*.018),k),F.gain.exponentialRampToValueAtTime(.001,k+.16),A.connect(C),C.connect(F),F.connect(m),A.start(),A.stop(k+.2),a==="rail"){let Z=d.createOscillator(),at=d.createGain();Z.type="triangle",Z.frequency.setValueAtTime(330,k),Z.frequency.exponentialRampToValueAtTime(140,k+.15),at.gain.setValueAtTime(.07,k),at.gain.exponentialRampToValueAtTime(.001,k+.2),Z.connect(at),at.connect(m),Z.start(),Z.stop(k+.21)}},Of=function(){if(!xe)return;let a=xe,l=a.ctx.currentTime,d=ne==="running",m=_.speed,b=Math.min(5,Math.floor(m/9)),A=48+m*2.2+m%9*5;(!d||!Nn||An.sfxVolume<=0)&&a.rail?.stop(),a.master.gain.setTargetAtTime(Nn?.48*An.sfxVolume:0,l,.05);let C=d?.012+Math.min(.04,m*7e-4)+(Ce.gas?.013:0):0;a.engineGain.gain.setTargetAtTime(C,l,.07),a.engineFilter.frequency.setTargetAtTime(550+m*25+(Ce.gas?500:0),l,.12);let F=b!==a.gear?.8:1;a.gear=b,a.engine1.frequency.setTargetAtTime(A*F,l,.045),a.engine2.frequency.setTargetAtTime(A*1.5*F,l,.065),a.sub.frequency.setTargetAtTime(A*.5,l,.07),a.wind.gain.gain.setTargetAtTime(d?Math.pow(m/65,2)*.12:0,l,.15),a.wind.filter.frequency.setTargetAtTime(700+m*25,l,.12);let k=Math.abs(wn(_.yaw-_.velocityYaw)),Z=Ce.brake&&m>5,at=_.jump<.1?Math.min(1,(_.drifting?k*1.8:Math.max(0,k-.18)*2)+(Z?.55:0)):0;a.tire.gain.gain.setTargetAtTime(d?at*.075:0,l,.045),a.tire.filter.frequency.setTargetAtTime(1300+m*24+Math.sin(Hs*40)*90,l,.05),a.turbo.gain.gain.setTargetAtTime(d?_.boostBlend*.075:0,l,.1),a.turbo.filter.frequency.setTargetAtTime(1600+_.boostBlend*2400,l,.12),d&&_.boostActive&&!a.oldBoost&&Oi(340,.17),a.oldBoost=_.boostActive,a.oldSpeed=m},ks=function(a){if(!Nn||!xe)return;let{ctx:l,master:d,noise:m}=xe,b=l.currentTime,A=l.createBufferSource(),C=l.createBiquadFilter(),F=l.createGain(),k=a==="nitro"||a==="combo",Z=k?.48:a==="drift"?.12:.23;A.buffer=m,C.type=a==="land"?"lowpass":"bandpass",C.Q.value=.75,C.frequency.setValueAtTime(a==="land"?300:k?650:1500,b),C.frequency.exponentialRampToValueAtTime(k?5500:700,b+Z),F.gain.setValueAtTime(.001,b),F.gain.linearRampToValueAtTime(k?.19:.1,b+.025),F.gain.exponentialRampToValueAtTime(.001,b+Z),A.connect(C),C.connect(F),F.connect(d),A.start(),A.stop(b+Z+.03),(a==="combo"||a==="small")&&Oi(a==="combo"?1080:820,.08)},eu=function(a){if(_.nitro>=2){_.energy=Math.min(99,_.energy+a);return}for(_.energy+=a;_.energy>=100&&_.nitro<2;)_.energy-=100,_.nitro++,gn("NITRO READY","\u6C2E\u6C14\u5DF2\u88C5\u74F6 \xB7 E \u91CA\u653E 3.2 \u79D2",1.2),Oi(1050,.09)},nu=function(a){_.jetHistory.push({kind:a,t:ui}),_.jetHistory=_.jetHistory.filter(d=>ui-d.t<2.5).slice(-3);let l=_.jetHistory.map(d=>d.kind).join("");(l==="CWW"||l==="WCW")&&(_.combo=l,_.comboTimer=1.3,_.mini=Math.max(_.mini,.88),l==="WCW"&&(_.nitroTime+=.35),gn(l+" \u55B7",l==="CWW"?"\u6C2E\u6C14 \u2192 \u5C0F\u55B7 \u2192 \u5C0F\u55B7 \xB7 \u9AD8\u901F\u51FA\u5F2F":"\u5C0F\u55B7 \u2192 \u6C2E\u6C14 \u2192 \u5C0F\u55B7 \xB7 \u5EF6\u957F\u55B7\u5C04",1.35),ks("combo"))},kf=function(){ne!=="running"||_.nitro<1||_.nitroTime>0||(_.nitro--,_.nitroTime=3.2,gn("NITRO","\u6C2E\u6C14\u55B7\u5C04 \xB7 3.2 \u79D2",.8),nu("C"),ks("nitro"))},zf=function(){ne!=="running"||_.smallJets<1||_.smallWindow<=0||_.jetCooldown>0||(_.smallJets--,_.jetCooldown=.18,_.mini=.72,_.smallWindow=_.smallJets?1.15:0,_.smallCount++,nu("W"),ks("small"),_.comboTimer<=0&&gn(_.smallCount>1?"DOUBLE BOOST":"MINI BOOST",_.smallCount>1?"\u53CC\u55B7 \xB7 \u8FDE\u7EED\u51FA\u5F2F\u52A0\u901F":"\u5C0F\u55B7 \xB7 \u53CA\u65F6\u63A5\u4E0B\u4E00\u55B7",.75))},dc=function(a=2,l="\u5C0F\u55B7\u5DF2\u5C31\u7EEA"){_.smallJets=Math.max(_.smallJets,a),_.smallWindow=1.5,_.smallCount=0,gn(l,"\u70B9 \u7A7A\u683C / Q\uFF0C\u6216\u91CD\u65B0\u6309 W \xB7 \u8FDE\u70B9\u4E24\u6B21\u53CC\u55B7",1.1),Oi(760,.06)},fc=function(){_.driftRewarded||_.driftCharge<.1||_.driftDuration<.11||(_.driftRewarded=!0,dc(_.driftCharge>.35?2:1,_.driftCharge>.35?"\u53CC\u55B7\u5DF2\u5C31\u7EEA":"\u5C0F\u55B7\u5DF2\u5C31\u7EEA"))},Ya=function(a=!0){_.drifting&&(a&&fc(),_.drifting=!1,_.driftPhase="exit",_.exitTime=.45,_.exitFromGrip=_.tireGrip||3.6,_.exitFromLimit=_.tireLimit||38,_.driftCharge=0,_.driftDuration=0,_.driftSide=0,_.driftReleasing=!1)},Vf=function(a){_.drifting=!0,_.driftSide=a,_.driftCharge=0,_.driftDuration=0,_.driftPhase="entry",_.driftRewarded=!1,_.driftReleasing=!1,_.releaseAge=0,_.driftLatch=!0,_.driftCooldown=.16,_.exitTime=0,_.turnRate+=a*.38,_.gripRecovery=0,ks("drift")},Gf=function(a){_.prevPose={s:_.s,l:_.l,yaw:_.yaw,jump:_.jump};let l=ve(_.s),d=_.s,m=typeof Gi=="number"?Gi:(Ce.right?1:0)-(Ce.left?1:0);_.speed=Math.hypot(_.vS,_.vL);for(let Rt of["pad","mini","nitroTime","smallWindow","jetCooldown","comboTimer","exitTime","driftCooldown","driftBuffer","lastSteerTime","jetInputBuffer","boostInputBuffer"])_[Rt]=Math.max(0,_[Rt]-a);_.smallWindow===0&&(_.smallJets=0),Ws=V(Ws,m,1-Math.exp(-a*(m?26:20)));let b=Gn.drift>0||Ce.drift&&!_.prevDrift,A=m&&m!==_.prevSteer;Gn.drift=0,Ce.drift||(_.driftLatch=!1),b&&(_.driftBuffer=.26),m&&(_.lastSteer=Math.sign(m),_.lastSteerTime=.2);let C=_.jump<.12,F=_.speed>.4?Math.atan2(_.vL,_.vS):_.yaw,k=wn(_.yaw-F),Z=(Math.abs(m)>.12?Math.sign(m):0)||(_.lastSteerTime>0?_.lastSteer:Math.abs(k)>.07?Math.sign(k):0);if(!_.drifting&&_.driftCooldown===0&&C&&_.speed>5&&Z&&(Ce.drift&&(!_.driftLatch||A&&Z!==_.lastDriftSide)||_.driftBuffer>0)?(Vf(Z),_.lastDriftSide=Z,_.driftBuffer=0):_.drifting&&b&&_.driftDuration>.18&&(m*_.driftSide<0||_.driftReleasing)&&(fc(),_.driftReleasing=!0,_.releaseAge=Math.max(.18,_.releaseAge),_.driftBuffer=0),_.drifting){_.driftDuration+=a;let Rt=m*_.driftSide<0;_.speed<3.5||!C?Ya(!1):(!Ce.drift&&_.driftDuration>.14&&(_.driftReleasing=!0),_.driftReleasing&&(_.releaseAge+=a),_.driftPhase=_.driftReleasing?"release":Rt?"counter":_.driftDuration<.18?"entry":"hold",(Rt||_.driftReleasing)&&Math.abs(k)<.75&&fc(),(_.driftReleasing&&(_.releaseAge>.55||Math.abs(k)<.065&&_.releaseAge>.16)||Rt&&Math.abs(k)<.075&&_.driftDuration>.22)&&Ya(!0))}(Gn.boost>0||Ce.boost&&!_.prevBoost)&&(_.boostInputBuffer=.15),(Gn.small>0||Ce.small&&!_.prevSmall||Ce.gas&&!_.prevGas)&&(_.jetInputBuffer=.15),Gn.boost=0,Gn.small=0,_.boostInputBuffer>0&&_.nitro>0&&_.nitroTime<=0&&(kf(),_.boostInputBuffer=0),_.jetInputBuffer>0&&_.smallJets>0&&_.jetCooldown<=0&&(zf(),_.jetInputBuffer=0);let at=Bf.step(_,{steer:typeof Gi=="number"?Gi:m,gas:Ce.gas||nn.autoGas&&!Ce.brake||Vi&&!Ce.brake,brake:Ce.brake},a,{sensitivity:nn.sensitivity});Ws=_.steering,_.boostActive=_.nitroTime>0,_.boostBlend=V(_.boostBlend,at.boost?1:0,1-Math.exp(-a*7));let xt=R(1-l.curv*_.l,.45,1.55),dt=_.vS/xt*a;_.s=Math.max(-8,_.s+dt),_.l+=_.vL*a;let vt=ve(_.s),Tt=wn(vt.h-l.h),Ct=_.vS,ce=_.vL;_.vS=Ct*Math.cos(Tt)+ce*Math.sin(Tt),_.vL=-Ct*Math.sin(Tt)+ce*Math.cos(Tt),_.yaw=wn(_.yaw-Tt);let Mt=_.jump>0;(Mt||_.vy>0)&&(_.vy-=17*a,_.jump=Math.max(0,_.jump+_.vy*a),_.jump<=0&&(_.vy=0,Mt&&(dc(1,"\u843D\u5730\u55B7\u5DF2\u5C31\u7EEA"),ks("land")))),Vn(a),xc-=_.vS*a/.4,ui+=a,Hs+=a,_.score+=Math.max(0,dt)*.85;let ft=Math.abs(wn(_.yaw-_.velocityYaw));if(_.drifting&&ft>.035&&_.speed>5&&Math.abs(_.l)<7){let Rt=a*R((ft+.025)*_.speed*.11,0,3);_.driftCharge+=Rt,eu(Rt*42),_.score+=a*35}to=_.drifting,(Ce.gas||nn.autoGas)&&!Ce.brake&&_.speed<.7&&Math.abs(_.l)>5.8?_.stuckTime+=a:_.stuckTime=0,_.stuckTime>1.6&&Mc(!0);for(let Rt of ln.values())for(let Ft of Rt.entities){if(Ft.kind==="cone"||Ft.kind==="barrier")continue;let qt=Ft.s;ee==="circuit"&&(qt+=Math.round((_.s-qt)/S)*S);let wt=ee==="circuit"?Math.max(0,Math.floor(qt/S)):0;Ft.hitLap===wt||qt<Math.min(d,_.s)-1.4||qt>Math.max(d,_.s)+1.4||Math.abs(_.l-Ft.l)>Ft.width||(Ft.kind==="coin"?(Ft.hitLap=wt,Ft.hit=!0,_.coins++,eu(3),_.score+=50,Oi(700+_.coins%5*80,.04)):Ft.kind==="pad"?(Ft.hitLap=wt,_.pad=1.55,gn("BOOST STRIP","\u52A0\u901F\u5E26 \xB7 \u4FDD\u6301\u8DEF\u7EBF",1),ks("nitro")):Ft.kind==="ramp"&&_.vS>7&&(Ft.hitLap=wt,_.vy=8,_.jump=.1,_.score+=120,dc(1,"\u7A7A\u55B7\u5DF2\u5C31\u7EEA")))}_.s>=_.checkpoint&&(_.checkpoint+=500,_.score+=500,gn("CHECKPOINT",Math.floor(_.s/500)*500+" m",1)),_.prevSteer=m,_.prevDrift=Ce.drift,_.prevBoost=Ce.boost,_.prevSmall=Ce.small,_.prevGas=Ce.gas,qf(a),lu(),lp(a),ee==="circuit"&&_.s>=$()&&yc()},zs=function(){let a={...Ce};for(let l in Ce)Ce[l]=!1;for(let l of Ja)no[l]&&(Ce[no[l]]=!0);for(let l of Za.values())Ce[l]=!0;for(let l in Gn)Ce[l]&&!a[l]&&Gn[l]++},ru=function(){return $a=Math.imul($a,1664525)+1013904223>>>0,$a/4294967296},Xf=function(a){let l=(Math.imul(a+419,2654435761)^Gs)>>>0;return()=>(l=Math.imul(l,1664525)+1013904223>>>0,l/4294967296)},au=function(a){return 1.7*Math.sin(a*.005)+.65*Math.sin(a*.017)},vc=function(a){if(ee!=="circuit")for(;$n[$n.length-1].s<a+8;){let l=$n[$n.length-1],d=l.s+4;d>_c&&(gc=-P/2+(ru()-.5)*2.15,_c=d+90+ru()*130);let m=R((gc-l.h)*.022,-.0175,.0175);ja=V(ja,m,.15);let b=l.h+ja*4;$n.push({s:d,p:[l.p[0]+Math.cos((b+l.h)*.5)*4,au(d),l.p[2]+Math.sin((b+l.h)*.5)*4],h:b})}},ve=function(a){if(ee==="circuit")return Ht(a);vc(a);let l=Math.floor((a+80)/4),d=R(l-Ur,0,$n.length-2),m=$n[d],b=$n[d+1],A=R((a-m.s)/4,0,1),C=V(m.h,b.h,A);return{p:m.p.map((k,Z)=>V(k,b.p[Z],A)),h:C,T:[Math.cos(C),0,Math.sin(C)],R:[-Math.sin(C),0,Math.cos(C)],curv:(b.h-m.h)/4,slope:(b.p[1]-m.p[1])/4}},De=function(a,l=0,d=0){let m=ve(a);return I(I(m.p,E(m.R,l)),[0,d,0])},jn=function(a,l,d,m,b,A){let C=T(D(O(d,l),O(b,l)));C[1]<0&&(C=E(C,-1)),a.add(_t([...l,...d,...m,...b],[...C,...C,...C,...C],[0,1,2,0,2,3]),Ie,A,.06)},ou=function(a){let l=a*40,d=ve(l).p,m=new G,b=Xf(a),A=ee==="circuit"?pc[j().biome]:pc[(Math.floor(Math.max(0,l)/1e3)%3+3)%3],C=at=>O(at,d);for(let at=0;at<10;at++){let xt=l+at*4;if(ee==="circuit"&&xt>=S)break;let dt=ve(xt),vt=ve(ee==="circuit"?Math.min(xt+4,S):xt+4),Tt=(Ct,ce,Mt)=>C(I(I(Ct.p,E(Ct.R,ce)),[0,Mt,0]));jn(m,Tt(dt,-7,.04),Tt(dt,7,.04),Tt(vt,7,.04),Tt(vt,-7,.04),"#69728e");for(let Ct of[-1,1])jn(m,Tt(dt,Ct*7,.06),Tt(dt,Ct*7.65,.06),Tt(vt,Ct*7.65,.06),Tt(vt,Ct*7,.06),(a*10+at)%2?"#d1b5e0":"#f4eced"),jn(m,Tt(dt,Ct*7.65,-.02),Tt(dt,Ct*(ee==="circuit"?11:64),-.08),Tt(vt,Ct*(ee==="circuit"?11:64),-.08),Tt(vt,Ct*7.65,-.02),A.ground);if(ee==="circuit")for(let Ct of[-1,1])jn(m,Tt(dt,Ct*8.6,.06),Tt(dt,Ct*11,.06),Tt(vt,Ct*11,.06),Tt(vt,Ct*8.6,.06),"#d9d9e4"),jn(m,Tt(dt,Ct*11,.06),Tt(dt,Ct*11,-1.25-dt.p[1]),Tt(vt,Ct*11,-1.25-vt.p[1]),Tt(vt,Ct*11,.06),"#b5bbcb");if(ee==="circuit")for(let Ct of[-1,1])he(xt+2,Ct*20)&&(jn(m,Tt(dt,Ct*11,-.12),Tt(dt,Ct*28,-.12),Tt(vt,Ct*28,-.12),Tt(vt,Ct*11,-.12),A.ground),jn(m,Tt(dt,Ct*28,-.12),Tt(dt,Ct*28,-1.25-dt.p[1]),Tt(vt,Ct*28,-1.25-vt.p[1]),Tt(vt,Ct*28,-.12),"#bdc4c7"));if(at%3===0)for(let Ct of[-2.33,2.33]){let ce=De(xt+1.5,Ct,.061);m.add(He(2.2,.015,.07,.004),rt(C(ce),[1,1,1],[0,-dt.h,0]),"#e0e4e8")}}for(let at of[-1,1]){let xt=Array.from({length:11},(dt,vt)=>C(De(l+vt*4,at*8.1,.72)));lt(m,xt,.07,"#b7c6d9"),lt(m,Array.from({length:11},(dt,vt)=>C(De(l+vt*4,at*8.1,.4))),.045,"#c7d5e2");for(let dt=0;dt<5;dt++){let vt=l+3+dt*8;if(ee==="circuit"&&vt>S)break;let Tt=C(De(vt,at*8.1,0));mt(m,Tt,I(Tt,[0,.84,0]),.055,"#9caec2"),B(m,I(Tt,[0,.75,0]),[.12,.15,.19],dt%2?"#f7bbcf":"#fff1b9",.02)}}let F=[];function k(at,xt,dt){if(ee==="circuit"&&xt>S-20)return;let vt=at==="coin"?Lr:at==="pad"?Va:at==="ramp"?Ga:at==="cone"?hc:zn;F.push({kind:at,s:xt,l:dt,node:new re(vt),hit:!1,width:at==="barrier"?1.5:at==="cone"?.85:at==="coin"?1.12:1.9})}if(a>=2){let at=Math.floor(b()*3),xt=[-4.2,0,4.2],dt=ee==="circuit"?Math.abs(ve(l+22).curv)<.013?.42:.12:a<7?.55:.85;if(b()<dt){let vt=(at+1+Math.floor(b()*2))%3;k(b()<.75?"cone":"barrier",l+22,ee==="circuit"?vt===1?-5.5:Math.sign(xt[vt])*5.5:xt[vt]),ee==="endless"&&a>10&&b()<.28&&k("cone",l+22,xt[3-at-vt])}for(let vt=0;vt<4;vt++)k("coin",l+7+vt*7,xt[at]);a%4===0?k("pad",l+14,xt[at]):a>8&&a%7===0&&k("ramp",l+14,xt[at])}if(a===0){for(let dt=0;dt<12;dt++){let vt=De(0,-7+dt*1.16,.075),Tt=ve(0);m.add(He(.9,.015,1.12,.003),rt(C(vt),[1,1,1],[0,-Tt.h,0]),dt%2?"#e8e7ed":"#424b66")}for(let dt of[-1,1]){let vt=C(De(0,dt*7.75,0));mt(m,vt,I(vt,[0,5,0]),.12,te)}let at=C(De(0,-7.75,5)),xt=C(De(0,7.75,5));mt(m,at,xt,.16,te);for(let dt=0;dt<7;dt++)q(m,C(De(0,-4.5+dt*1.5,5)),[.24,.24,.24],dt%2?"#f9d997":"#bfd9f4",!0)}let Z=new re(m.finish());return Z.add(Lf(a,d,b)),{k:a,origin:d,node:Z,entities:F}},lu=function(){if(ee==="circuit"){let m=Math.ceil(S/40);for(let b=0;b<m;b++)ln.has(b)||ln.set(b,ou(b));return}let a=Math.max(-2,Math.floor(_.s/40)-3),l=Math.floor(_.s/40)+9;vc((l+1)*40);for(let m=a;m<=l;m++)ln.has(m)||ln.set(m,ou(m));for(let[m,b]of ln)m<a&&(b.node.mesh.dispose(),ln.delete(m));let d=Math.floor((_.s-210+80)/4);if(d>Ur){let m=Math.min(d-Ur,$n.length-10);$n.splice(0,m),Ur+=m}},fs=function(){Ja.clear(),Za.clear();for(let a in Gn)Gn[a]=0;for(let a in Ce)Ce[a]=!1;for(let a of document.querySelectorAll(".touch button"))a.classList.remove("held")},Qn=function(a=!1){if(ee==="circuit"?(Ut(),Gs=en==="coast-reborn"?73121:95276):a&&(Gs=(Date.now()>>>0)%999999||72319),mc&&ln.size)iu.set(mc,ln);else for(let l of ln.values())l.node.mesh.dispose();ln=ee==="circuit"?iu.get(en)||new Map:new Map,mc=ee==="circuit"?en:null;for(let l of ln.values())for(let d of l.entities){d.hit=!1,delete d.hitLap;for(let m of["ds","dl","vS","vL","angle","omega","tilt"])d[m]=0}$n=[{s:-80,p:[0,au(-80),80],h:-P/2}],Ur=0,gc=-P/2,_c=115,ja=0,$a=Gs,Object.assign(_,{s:0,l:0,speed:0,steering:0,vS:0,vL:0,spin:0,contactSound:0,yaw:0,velocityYaw:0,energy:0,nitro:1,nitroTime:0,turnRate:0,driftDuration:0,driftLatch:!1,driftRewarded:!1,driftReleasing:!1,releaseAge:0,gripRecovery:0,driftCooldown:0,driftBuffer:0,lastSteer:0,lastSteerTime:0,prevSteer:0,lastDriftSide:0,jetInputBuffer:0,boostInputBuffer:0,tireGrip:10.5,tireLimit:68,exitFromGrip:3.6,exitFromLimit:38,driftPhase:"grip",exitTime:0,smallJets:0,smallWindow:0,smallCount:0,jetCooldown:0,jetHistory:[],combo:"",comboTimer:0,prevDrift:!1,prevBoost:!1,prevSmall:!1,prevGas:!1,coins:0,score:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,stuckTime:0,timePenalty:0}),xc=0,ui=0,Hs=0,to=!1,Ws=0,hs=0,Vs=60,us=null,Nr=0;for(let l of ds)l.life=0;for(let l of cs)l.life=0;fs(),vc(420),lu(),qs=null,kr=null,ps=null,_.prevPose=null,U("seedText").textContent=String(Gs).padStart(6,"0"),U("bestText").textContent=Br.toLocaleString(),U("rerollBtn").hidden=ee==="circuit",U("endRunBtn").hidden=ee==="circuit",U("uploadStatus").textContent="",Or=0,Fr=0,U("toast").classList.remove("show"),U("drift").classList.remove("on"),U("modeDistance").textContent=Math.round(S)+" m / \u5708 \xB7 "+j().laps+" \u5708"},gn=function(a,l="",d=2){U("toastTitle").textContent=a,U("toastSub").textContent=l,U("toast").classList.add("show"),Fr=d,U("status").textContent=a+" "+l},Xs=function(a=!1){if(Vi=!1,typeof st<"u"&&st.room){Jr();return}Qn(a),ne="countdown",ki=3.05,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("helpPanel").hidden=!0,U("musicPanel").hidden=!0,U("rankPanel").hidden=!0,Bi.classList.remove("menu-open"),U("countdown").hidden=!1,U("countdown").textContent="3",qa(),xe&&xe.ctx.resume().catch(()=>{}),Eu(),U("status").textContent="\u51C6\u5907\u8D77\u8DD1\u3002W \u52A0\u901F\uFF0CAD \u8F6C\u5411\uFF0CShift \u6F02\u79FB\uFF0C\u7A7A\u683C\u5C0F\u55B7\uFF0CE \u6C2E\u6C14\u3002"},zi=function(){if(typeof st<"u"&&st.room&&ne==="running"){fs(),gn("\u5728\u7EBF\u6BD4\u8D5B\u7EE7\u7EED\u8FDB\u884C","\u8054\u673A\u4E0D\u6682\u505C \xB7 \u70B9\u51FB\u623F\u95F4\u53EF\u9000\u51FA",1.5);return}ne==="running"?(ne="paused",fs(),U("paused").hidden=!1,U("status").textContent="\u6E38\u620F\u5DF2\u6682\u505C\u3002"):ne==="paused"&&(ne="running",U("paused").hidden=!0,Qa=performance.now())},yc=function(){if(ne!=="finished"){ne="finished",fs(),Br=Math.max(Br,Math.floor(_.s)),eo=Math.max(eo,Math.floor(_.score));try{localStorage.setItem("star-rush-best-distance",String(Br)),localStorage.setItem("star-rush-best-score",String(eo))}catch{}U("resultDistance").textContent=ee==="circuit"?Wt(Nt()):Math.floor(_.s).toLocaleString()+" m",U("resultMainLabel").textContent=ee==="circuit"?j().laps+" \u5708\u7528\u65F6":"\u672C\u6B21\u91CC\u7A0B",U("resultScore").textContent=Math.floor(_.score).toLocaleString(),U("resultBest").textContent=_.coins+" \u679A",U("resultBestLabel").textContent="\u6536\u96C6\u91D1\u5E01",U("resultNote").textContent=ee==="circuit"?"\u51B2\u7EBF\u5B8C\u6210\uFF01\u53EF\u4EE5\u4E0A\u4F20\u6210\u7EE9\uFF0C\u548C\u670B\u53CB\u6BD4\u8F83\u5F53\u524D\u8D5B\u9053\u7684\u5B8C\u8D5B\u7528\u65F6\u3002":"\u672C\u6B21\u81EA\u7531\u8DD1\u5DF2\u7ED3\u7B97\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u91CC\u7A0B\u6210\u7EE9\u3002",U("finished").hidden=!1,Bi.classList.add("menu-open"),U("status").textContent="\u672C\u5C40\u7ED3\u675F\u3002",Hr={id:crypto.randomUUID(),mode:ee,track:ee==="circuit"?Wa:"endless-reborn",seed:Gs,distance:Math.round(Math.max(0,_.s)),timeMs:Math.round(Nt()*1e3),score:Math.floor(_.score)},xs||jf(Hr),U("submitRun").disabled=!1,U("submitRun").textContent="\u4E0A\u4F20\u672C\u6B21\u6210\u7EE9",cp(),Oi(1100,.3)}},cu=function(a,l=5,d=[0,1,0]){let m=0;for(let b of cs)b.life<=0&&m++<l&&(b.life=.35+Math.random()*.4,b.p=[...a],b.v=I(d,[(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3]),b.size=.04+Math.random()*.08)},Mc=function(a=!1){if(ne!=="running"&&ne!=="paused")return;let l=[0,-3.7,3.7],d=0;for(let m of l){let b=!0;for(let A of ln.values())for(let C of A.entities)(C.kind==="cone"||C.kind==="barrier")&&Math.abs(At(C.s,_.s))<7&&Math.abs(C.l-m)<C.width+1.1&&(b=!1);if(b){d=m;break}}_.prevPose=null,_.l=d,_.yaw=0,_.turnRate=0,_.velocityYaw=0,_.lateralSpeed=0,_.speed=R(_.speed,2,12),_.vS=_.speed,_.vL=0,_.spin=0,_.stuckTime=0,_.timePenalty=(_.timePenalty||0)+2,_.jump=0,_.vy=0,_.drifting=!1,_.driftSide=0,_.driftCharge=0,_.exitTime=0,_.driftReleasing=!1,_.driftBuffer=0,to=!1,us=null,gn(a?"\u5DF2\u81EA\u52A8\u8131\u56F0":"\u8D5B\u8F66\u5DF2\u56DE\u6B63","\u7EE7\u7EED\u6309 W \u52A0\u901F \xB7 \u56DE\u6B63\u8BA1\u65F6 +2 \u79D2",1.5)},qf=function(a){for(let C of ds)C.life=Math.max(0,C.life-a);let l=Math.abs(wn(_.yaw-_.velocityYaw));if(!_.drifting&&!(_.exitTime>0&&l>.06)||_.speed<4||_.jump>.08){us=null,Nr=0;return}if(Nr+=a,Nr<.025)return;Nr=0;let d=ve(_.s),m=De(_.s,_.l,.085),b=rt(m,[.97,.97,.97],[0,-d.h-_.yaw,Math.atan(d.slope)]),A=[-1,1].map(C=>et(b,[-1.02,0,C*.83]));if(us)for(let C=0;C<2;C++){let F=O(A[C],us[C]),k=Math.hypot(F[0],F[2]);if(k>.05&&k<3){let Z=ds[Wf++%ds.length];Z.p=E(I(A[C],us[C]),.5),Z.length=k+.035,Z.angle=-Math.atan2(F[2],F[0]),Z.life=2.5}}us=A,l>.15&&cu(De(_.s-1,_.l,.2),1,E(d.T,-1.5))},Yf=function(a,l){for(let d of cs)d.life<=0||(d.life-=a,d.v[1]-=a*5,d.p=I(d.p,E(d.v,a)),d.node.local=rt(O(d.p,l),[d.size,d.size,d.size]),N.add(d.node))},Jf=function(a,l){let d=ne==="running"&&_.prevPose?R(hs/Ka,0,1):1,m=_.prevPose||_,b=V(m.s,_.s,d),A=V(m.l,_.l,d),C=m.yaw+wn(_.yaw-m.yaw)*d,F=V(m.jump,_.jump,d),k=ve(b),Z=k.p,at=De(b,A,.06+F),xt=O(at,Z),dt=Math.atan(k.slope);Pt.tint=Qe.paint,Pt.local=rt(xt,[.97,.97,.97],[0,-k.h-C,dt]),N.children=[Pt],Uf(Z,a),ee==="circuit"&&(io.mesh=$f[j().biome],io.local=tt(-Z[0],-.9-Z[1],-Z[2]),io.shadow=!1,N.add(io));for(let Mt of ln.values())if(!(ee==="circuit"&&Math.abs(At(Mt.k*40,_.s))>265)){Mt.node.local=tt(...O(Mt.origin,Z)),Mt.node.shadow=Math.abs(At(Mt.k*40,_.s))<90,N.add(Mt.node);for(let ft of Mt.entities){if(ft.kind==="coin"&&ft.hitLap===Math.max(0,Math.floor(_.s/S)))continue;let Rt=ve(ft.s+(ft.ds||0)),Ft=De(ft.s+(ft.ds||0),ft.l+(ft.dl||0),ft.kind==="coin"?1.05+.12*Math.sin(a*3+ft.s):.08),qt=rt(O(Ft,Z),[1,1,1],[0,-Rt.h+(ft.kind==="coin"?a*2:-(ft.angle||0)),Math.atan(Rt.slope)]);ft.node.local=ft.kind==="cone"&&ft.tilt?J(qt,J(tt(0,.34,0),J(nt(ft.tilt),tt(0,-.25,0)))):qt,ft.node.shadow=Math.abs(At(ft.s,_.s))<65,N.add(ft.node)}}Ha(a,l,Ws),Yf(ne==="running"?l:0,Z);for(let Mt of ds)Mt.life>0&&(Mt.node.local=rt(O(Mt.p,Z),[Mt.length,1,Math.min(1,Mt.life)*1.2],[0,Mt.angle,0]),N.add(Mt.node));let vt=ne==="ready"||ne==="finished",Tt,Ct;if(vt){let Mt=.15*Math.sin(a*.16);Tt=I(at,I(E(k.T,5.6+Mt),I(E(k.R,7.1),[0,3.5,0]))),Ct=I(at,I(E(k.R,-1.25),[0,.8,0]))}else{let Mt=Hn===1?12.5:Hn===2?5.8:8.5,ft=Hn===1?9:Hn===2?2.9:4.5,Rt=k.h+_.velocityYaw;ps===null?ps=Rt:ps+=wn(Rt-ps)*(1-Math.exp(-l*8));let Ft=[Math.cos(ps),0,Math.sin(ps)],qt=I(E(k.T,_.vS/18),E(k.R,_.vL/18));Tt=I(I(at,qt),I(E(Ft,-Mt),[0,ft,0])),Ct=I(I(at,qt),I(E(Ft,10),[0,1+F*.2,0]))}let ce=1-Math.exp(-l*(vt?2.6:18));return qs?(qs=qs.map((Mt,ft)=>V(Mt,Tt[ft],ce)),kr=kr.map((Mt,ft)=>V(Mt,Ct[ft],ce))):(qs=Tt,kr=Ct),{eye:O(qs,Z),target:O(kr,Z),origin:Z}},Zf=function(){if(!Qt)return;let a=Sc.width,l=Sc.height,d=ve(_.s),m=.86;if(ee==="circuit"){Qt.clearRect(0,0,a,l);let F=W,k=Math.min((a-45)/(F.maxX-F.minX),(l-30)/(F.maxZ-F.minZ)),Z=dt=>[a*.5+(dt[0]-(F.minX+F.maxX)*.5)*k,l*.5+(dt[2]-(F.minZ+F.maxZ)*.5)*k];Qt.lineJoin="round";for(let[dt,vt]of[["#737e9d",13],["#dfe8f3",8]]){Qt.strokeStyle=dt,Qt.lineWidth=vt,Qt.beginPath();for(let Tt=0;Tt<un.length;Tt+=6){let Ct=Z(un[Tt].p);Tt?Qt.lineTo(...Ct):Qt.moveTo(...Ct)}Qt.closePath(),Qt.stroke()}if(typeof Wn<"u")for(let dt of Wn){let vt=Z(ve(dt.s).p);Qt.fillStyle=dt.color,Qt.beginPath(),Qt.arc(vt[0],vt[1],3.4,0,x),Qt.fill()}if(typeof st<"u"&&st.room){let dt=0;for(let vt of st.peers.values())if(vt.position){let Tt=Z(ve(vt.position.s).p);Qt.fillStyle=ao[dt++%ao.length],Qt.beginPath(),Qt.arc(Tt[0],Tt[1],4.5,0,x),Qt.fill()}}let at=Z(d.p),xt=Z(un[0].p);Qt.fillStyle="#fff7dc",Qt.fillRect(xt[0]-3,xt[1]-5,6,10),Qt.save(),Qt.translate(...at),Qt.rotate(d.h+Math.PI/2),Qt.fillStyle="#ffe68b",Qt.beginPath(),Qt.moveTo(0,-8),Qt.lineTo(-5,5),Qt.lineTo(5,5),Qt.closePath(),Qt.fill(),Qt.restore();return}Qt.clearRect(0,0,a,l),Qt.strokeStyle="#c0d7e91c",Qt.lineWidth=1;for(let F=20;F<a;F+=30)Qt.beginPath(),Qt.moveTo(F,0),Qt.lineTo(F,l),Qt.stroke();for(let F=15;F<l;F+=30)Qt.beginPath(),Qt.moveTo(0,F),Qt.lineTo(a,F),Qt.stroke();let b=[];for(let F=-15;F<=205;F+=4){let k=O(ve(_.s+F).p,d.p);b.push([a*.5+L(k,d.R)*m,l*.88-L(k,d.T)*m])}for(let[F,k]of[["#7a85a3",15],["#dce8f0",10]]){Qt.strokeStyle=F,Qt.lineWidth=k,Qt.lineJoin="round",Qt.beginPath();for(let Z=0;Z<b.length;Z++)Z?Qt.lineTo(...b[Z]):Qt.moveTo(...b[Z]);Qt.stroke()}Qt.fillStyle="#ffe68b",Qt.beginPath();let A=a*.5+_.l*m,C=l*.88;Qt.moveTo(A,C-10),Qt.lineTo(A-7,C+7),Qt.lineTo(A+7,C+7),Qt.closePath(),Qt.fill()},Kf=function(a){if(bc+=a,bc<.06)return;bc=0,di.distance.textContent=Math.floor(_.s).toLocaleString(),di.score.textContent=String(Math.floor(_.score)).padStart(5,"0"),di.coins.textContent=String(_.coins).padStart(2,"0"),di.speed.textContent=Math.round(_.speed*3.6),U("speedbar").style.width=Math.min(100,_.speed/83*100)+"%",di.energyText.textContent=_.nitro+" \u74F6 / 2 \xB7 "+(_.nitroTime>0?_.nitroTime.toFixed(1)+"s":Math.floor(_.energy)+"%"),U("energyBar").style.width=_.energy+"%";let l=_.boostActive||_.pad>0||_.mini>0;di.gear.textContent=l?"NITRO / BOOST":_.jump>0?"AIR TIME":_.drifting?"DRIFT MODE":_.speed<1?"READY TO RUSH":"SPORT / "+Math.max(1,Math.min(6,Math.ceil(_.speed/8))),U("boostfx").classList.toggle("on",l),U("raceTime").textContent=Wt(Nt()),U("lapLabel").textContent=ee==="circuit"?"LAP "+Math.min(j().laps,Math.floor(Math.max(0,_.s)/S)+1)+" / "+j().laps+" \xB7 \u5269\u4F59 "+Math.max(0,Math.ceil($()-_.s))+" m":"\u65E0\u5C3D\u6A21\u5F0F \xB7 \u81EA\u7531\u7ADE\u901F",U("drift").classList.toggle("on",_.drifting||_.smallJets>0),U("driftBar").style.width=(_.smallJets>0?Math.min(100,_.smallWindow/1.5*100):Math.min(100,_.driftCharge/.55*100))+"%",di.driftText.textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets:_.driftPhase==="entry"?"\u8F7B\u70B9\u8D77\u6F02":_.driftPhase==="counter"?"\u53CD\u6253\u6536\u8F66":_.driftPhase==="release"?"\u60EF\u6027\u6536\u6F02":"\u6F02\u79FB\u96C6\u6C14";for(let m of document.querySelectorAll("[data-key=small]"))m.classList.toggle("smalljet-ready",_.smallJets>0);U("jetCount").textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets+" \xB7 "+_.smallWindow.toFixed(1)+"s":_.drifting?"\u6F02\u79FB\u96C6\u6C14\u4E2D":"\u7A7A\u683C / Q \u5C0F\u55B7";let d=Ru(_.s);di.turnText.textContent=d.direction===0?"\u524D\u65B9\u76F4\u9053":d.direction>0?"\u524D\u65B9\u53F3\u5F2F":"\u524D\u65B9\u5DE6\u5F2F",di.turnArrowPath.setAttribute("d",d.direction===0?"M12 21V3M5 10L12 3L19 10":d.direction>0?"M5 21V8H21M14 1L21 8L14 15":"M19 21V8H3M10 1L3 8L10 15"),Ci==="practice"&&!st.room&&Pu(d),di.biome.textContent=ee==="circuit"?If(_.s).name:pc[(Math.floor(_.s/1e3)%3+3)%3].name,Zf()},hu=function(a,l=Ie,d=!0,m=null,b=1){a.world=J(l,a.local);let A=d&&a.shadow,C=a.tint||m,F=a.opacity??b;a.mesh&&zr.push({mesh:a.mesh,m:a.world,shadow:A,tint:C,opacity:F});for(let k of a.children)hu(k,a.world,A,C,F)},uu=function(){Vr=Math.max(1,i.clientWidth),Gr=Math.max(1,i.clientHeight);let a=Math.min(devicePixelRatio||1,1.5),l=Math.round(Vr*a),d=Math.round(Gr*a);(i.width!==l||i.height!==d)&&(i.width=l,i.height=d)},du=function(a){if(!h&&c.renderer.getContext().isContextLost())return;let l=Math.min(.1,Math.max(0,(a-Qa)/1e3));if(Qa=a,ne==="countdown"){ki=typeof st<"u"&&st.room&&st.startAt?(st.startAt-(Date.now()+st.offset))/1e3:ki-l;let b=ki>.05?String(Math.ceil(ki)):"GO!";U("countdown").textContent!==b&&(U("countdown").textContent=b,Oi(ki>.05?400:900,.12)),ki<=0&&(U("countdown").hidden=!0,ne="running",ui=typeof st<"u"&&st.room&&st.startAt?Math.max(0,(Date.now()+st.offset-st.startAt)/1e3):0,gn("LET\u2019S RUSH!","W \u52A0\u901F \xB7 SHIFT \u6F02\u79FB \xB7 \u7A7A\u683C\u5C0F\u55B7 \xB7 E \u6C2E\u6C14",2))}if(typeof Mu=="function"&&Mu(a,l),dp(l),ne==="running"){hs+=l;let b=0;for(;hs>=Ka&&ne==="running"&&b++<12;)Gf(Ka),hs-=Ka;b>=12&&(hs=0)}else hs=0;(ne==="ready"||ne==="finished")&&(Hs+=l*.25);let d=Jf(Hs,l);hp(d.origin,l),typeof Su=="function"&&Su(d.origin,l),Fr>0&&(Fr-=l,Fr<=0&&U("toast").classList.remove("show")),Or=Math.max(0,Or-l),U("hitflash").style.opacity=Math.min(.24,Or*.6),Of(),typeof _u=="function"&&_u(),zr.length=0,hu(N),Vs=V(Vs,ne==="ready"||ne==="finished"?45:nn.fov+_.boostBlend*3,1-Math.exp(-l*4));let m=J(Jt(Vs*P/180,Vr/Gr,.12,850),Vt(d.eye,d.target));rp(m),h?w(d):Pc=c.render(zr,d,Vr,Gr,Vs,nn),up(a,l),Kf(l),su||(su=!0,e.classList.add("done")),requestAnimationFrame(du)},fu=function(){try{return JSON.parse(localStorage.getItem("star-rush-runs-reborn")||"[]")}catch{return[]}},jf=function(a){try{let l=fu();l.push({...a,name:localStorage.getItem("star-rush-name")||"\u672C\u673A\u8F66\u624B"}),localStorage.setItem("star-rush-runs-reborn",JSON.stringify(l.slice(-100)))}catch{}},Qf=function(a,l){let d=document.createElement("tr"),m=l.mode==="circuit"?Wt(l.timeMs/1e3):l.distance.toLocaleString()+" m";for(let b of[String(a+1).padStart(2,"0"),l.name,m,Math.round(l.score).toLocaleString()]){let A=document.createElement("td");A.textContent=b,d.appendChild(A)}return d},tp=function(){ms=en,U("rankTrack")&&(U("rankTrack").value=ms),Ti=ee,wi=!1,Js("rankPanel"),Wr()},pu=function(a){ee=a;for(let[l,d]of[["circuitMode","circuit"],["endlessMode","endless"]])U(l).classList.toggle("selected",a===d),U(l).setAttribute("aria-pressed",String(a===d));Qn(!0),U("trackPicker").hidden=a!=="circuit",U("trackDescription").hidden=a!=="circuit"},mu=function(a){if(Kn[a]){if(typeof st<"u"&&st.room){gn("\u5DF2\u5728\u8054\u673A\u623F\u95F4","\u9000\u51FA\u623F\u95F4\u540E\u53EF\u66F4\u6362\u5730\u56FE",1.5);return}en=a,Qn(!1),Xr()}},Xr=function(){for(let a of document.querySelectorAll("[data-track]"))a.classList.toggle("selected",a.dataset.track===en),a.setAttribute("aria-pressed",String(a.dataset.track===en));U("trackDescription").textContent=j().description,U("modeDistance").textContent=Math.round(S)+" m / \u5708 \xB7 "+j().laps+" \u5708"},wc=function(){try{localStorage.setItem("star-rush-audio",JSON.stringify(An))}catch{}},qr=function(){if(qa(),!xe)return!1;if(xe.ctx.state==="suspended"&&xe.ctx.resume().catch(()=>{}),ae.bus)return!0;ae.bus=xe.ctx.createGain();let a=xe.ctx.createDynamicsCompressor();return a.threshold.value=-18,a.ratio.value=3,ae.bus.connect(a),a.connect(xe.ctx.destination),ae.next=xe.ctx.currentTime+.08,!0},gs=function(a,l,d,m,b,A=0){let C=xe.ctx,F=C.createOscillator(),k=C.createGain();F.type=m,F.frequency.setValueAtTime(a,l),A&&F.frequency.exponentialRampToValueAtTime(A,l+d),k.gain.setValueAtTime(.001,l),k.gain.exponentialRampToValueAtTime(b,l+.008),k.gain.exponentialRampToValueAtTime(.001,l+d),F.connect(k),k.connect(ae.bus),F.start(l),F.stop(l+d+.02)},gu=function(a,l,d,m){let b=xe.ctx,A=b.createBufferSource(),C=b.createBiquadFilter(),F=b.createGain();A.buffer=xe.noise,C.type="highpass",C.frequency.value=d,F.gain.setValueAtTime(m,a),F.gain.exponentialRampToValueAtTime(.001,a+l),A.connect(C),C.connect(F),F.connect(ae.bus),A.start(a),A.stop(a+l+.02)},ep=function(a,l){let d=.10135135135135136,m=Math.floor(a/16),b=a%16,A=[45,41,48,43],C=A[Math.floor(m/2)%4],F=at=>440*Math.pow(2,(at-69)/12);if(b%4===0&&gs(135,l,.18,"sine",.38,42),(b===4||b===12)&&(gu(l,.13,1200,.12),gs(180,l,.07,"triangle",.1,70)),b%2===0&&gu(l,.035,7500,b%4===2?.065:.04),b%2===0){let at=C+(b===14?12:0);gs(F(at-12),l,d*1.5,"sawtooth",.045),gs(F(at-12),l,d*1.5,"sine",.1)}let k=[0,7,12,15,12,7,10,7],Z=k[Math.floor(b/2)%8];if(b%2===1&&gs(F(C+24+Z),l,.16,"triangle",.045),b===0)for(let at of[0,3,7])gs(F(C+12+at),l,d*12,"triangle",.018);if(m%4>=2&&b%4===2){let at=[12,15,19,22,19,15,14,10][Math.floor(b/4)+4*(m%2)];gs(F(C+24+at),l,d*2.5,"sine",.055)}},_u=function(){if(!xe||!qr())return;let a=An.enabled&&Nn&&!document.hidden&&ae.mode!=="classic",l=xe.ctx.currentTime;if(ae.bus.gain.setTargetAtTime(a?An.volume*.42:0,l,.07),ae.mode==="synth"&&a){ae.next<l-.15&&(ae.next=l+.05);let d=0;for(;ae.next<l+.18&&d++<8;)ep(ae.step++,ae.next),ae.next+=60/148/4}ae.element&&(a&&ae.mode==="local"?ae.element.paused&&ae.element.play().catch(()=>{}):ae.element.paused||ae.element.pause())},so=function(a){ae.mode=a,qr(),U("synthMusic").classList.toggle("selected",a==="synth"),U("classicMusic").classList.toggle("selected",a==="classic"),U("classicPlayer").hidden=a!=="classic",U("localMusicControls").hidden=a!=="local",U("musicToggle").hidden=a==="classic",a==="classic"?(U("spotifyPlayer").src||(U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"),U("nowPlaying").textContent="\u7ECF\u5178\u5916\u8BED\u6B4C\u5355 \xB7 \u5728\u4E0B\u65B9\u64AD\u653E\u5668\u70B9\u51FB\u64AD\u653E"):(U("spotifyPlayer").removeAttribute("src"),U("nowPlaying").textContent=a==="local"?ae.files[ae.index]?.name||"\u8BF7\u9009\u62E9\u97F3\u4E50\u6587\u4EF6":"STARLINE \xB7 \u539F\u521B\u7535\u5B50\u7ADE\u901F\u914D\u4E50")},ro=function(a){!ae.files.length||!qr()||(ae.index=(a+ae.files.length)%ae.files.length,ae.element||(ae.element=new Audio,ae.element.preload="auto",xe.ctx.createMediaElementSource(ae.element).connect(ae.bus),ae.element.onended=()=>ro(ae.index+1),ae.element.onerror=()=>{U("nowPlaying").textContent="\u6B64\u97F3\u9891\u65E0\u6CD5\u89E3\u7801\uFF0C\u8BF7\u6362\u4E00\u9996 MP3 / OGG / WAV"}),ae.element.pause(),ae.url&&URL.revokeObjectURL(ae.url),ae.url=URL.createObjectURL(ae.files[ae.index]),ae.element.src=ae.url,An.enabled=!0,so("local"),ae.element.play().catch(()=>{U("nowPlaying").textContent="\u70B9\u51FB\u201C\u64AD\u653E\u97F3\u4E50\u201D\u540E\u7EE7\u7EED"}),U("musicToggle").textContent="\u6682\u505C\u97F3\u4E50")},Js=function(a){let l=ne==="running"&&!(typeof st<"u"&&st.room);Yr=Yr||l,l&&zi();for(let d of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])d!==a&&(U(d).hidden=!0);fs(),U(a).hidden=!1},_s=function(a){U(a).hidden=!0,Yr&&ne==="paused"&&zi(),Yr=!1},Ac=function(a){function l(b){let A=new re(b.mesh);A.local=new Float32Array(b.local),A.shadow=b.shadow;for(let C of b.children)A.add(l(C));return A}let d=l(Pt),m=d.add(new re(np[a%4]));return{root:d,marker:m,spin:0}},ip=function(){return{s:_.s,l:_.l,vS:_.vS,vL:_.vL,yaw:_.yaw,jump:_.jump,mini:_.mini,nitroTime:_.nitroTime,paint:Qe.paint,time:Nt(),finished:ne==="finished"}},xu=function(){for(let a of st.peers.values())a.label.remove();st.peers.clear()},Cc=function(a){let l=st.room?.status;st.room=a.room,st.members=a.members,st.ready=!!a.members.find(m=>m.id===st.id)?.ready,st.errors=0;let d=new Set(a.members.map(m=>m.id));for(let[m,b]of st.peers)d.has(m)||(b.label.remove(),st.peers.delete(m));for(let m of a.members){if(m.id===st.id)continue;let b=st.peers.get(m.id);if(!b){let C=document.createElement("div");C.className="peer-label",C.textContent=m.name,Bi.appendChild(C),b={...Ac(st.peers.size),label:C,name:m.name,history:[],position:null,lastStamp:0},st.peers.set(m.id,b)}b.label.textContent=m.name,b.name=m.name;let A=m.snapshot;A&&Number.isFinite(A.s)&&m.updatedAt>b.lastStamp&&(b.lastStamp=m.updatedAt,b.history.push({...A,t:m.updatedAt}),b.history.length>12&&b.history.shift())}if(st.room.status==="racing"&&st.room.startAt!==st.runTag){st.runTag=st.room.startAt,st.startAt=st.room.startAt,en=st.room.track,ee="circuit",Qn(!1),Xr(),Eu();for(let b of st.peers.values())b.history=[],b.position=null;let m=a.members.findIndex(b=>b.id===st.id);_.l=(m%2?1:-1)*1.9,_.s=-Math.floor(m/2)*3.8,ne="countdown",ki=(st.startAt-(Date.now()+st.offset))/1e3,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("roomPanel").hidden=!0,U("rankPanel").hidden=!0,Bi.classList.remove("menu-open"),U("countdown").hidden=!1,qa(),xe&&xe.ctx.resume().catch(()=>{})}if(st.room.status==="lobby"&&l&&l!=="lobby"){st.startAt=0,st.runTag=0,ne="ready",en=st.room.track,ee="circuit",Qn(!1),Xr(),U("countdown").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Bi.classList.add("menu-open");for(let m of st.peers.values())m.history=[]}Rc(),ne==="finished"&&Iu()},Rc=function(){let a=!!st.room;if(U("roomActions").hidden=!a,U("networkHud").hidden=!a,U("createRoom").disabled=a,U("joinRoom").disabled=a,U("roomCode").disabled=a,U("circuitMode").disabled=a,U("endlessMode").disabled=a,U("roomName").disabled=a&&st.room.status==="racing",U("startBtn").textContent=a?"\u56DE\u5230\u8054\u673A\u623F\u95F4":"\u5F00\u59CB\u7ADE\u901F\u3000\u2197",!a){U("roomTitle").textContent="\u540C\u4E00\u6761\u8D5B\u9053\uFF0C\u4E00\u8D77\u51FA\u53D1\u3002",U("roomMembers").replaceChildren(),U("roomStatus").textContent="\u6700\u591A 4 \u4EBA \xB7 \u4F7F\u7528\u5F53\u524D\u9009\u62E9\u7684\u8DD1\u5708\u5730\u56FE";return}U("roomCode").value=st.room.code,U("roomTitle").textContent="ROOM "+st.room.code+" \xB7 "+Kn[st.room.track].name,U("roomStatus").textContent=(st.room.status==="racing"?"\u6BD4\u8D5B\u8FDB\u884C\u4E2D":st.room.status==="finished"?"\u6BD4\u8D5B\u5DF2\u7ED3\u675F":"\u5019\u573A\u4E2D")+" \xB7 "+st.members.length+" / 4 \u4EBA \xB7 "+Math.round(st.rtt)+" ms \u5F80\u8FD4",U("roomMembers").replaceChildren();for(let b of st.members){let A=document.createElement("div");A.className="room-member";let C=document.createElement("span");C.textContent=b.name+(b.id===st.id?"\uFF08\u4F60\uFF09":"")+(b.id===st.room.hostId?" \xB7 \u623F\u4E3B":"");let F=document.createElement("b");F.textContent=b.snapshot?.finished?"\u5B8C\u8D5B "+Wt(b.snapshot.time||0):st.room.status==="racing"?"\u6BD4\u8D5B\u4E2D":b.ready?"\u5DF2\u51C6\u5907":"\u7B49\u5F85\u51C6\u5907",A.append(C,F),U("roomMembers").appendChild(A)}let l=st.room.hostId===st.id,d=st.room.status!=="lobby";U("startRoom").hidden=!l,U("startRoom").disabled=!d&&st.members.some(b=>!b.ready),U("startRoom").textContent=d?"\u7ED3\u675F\u672C\u5C40 \xB7 \u8FD4\u56DE\u5019\u573A":"\u5168\u5458\u5C31\u7EEA \xB7 \u5F00\u59CB\u7ADE\u901F",U("readyRoom").hidden=d,U("readyRoom").textContent=st.ready?"\u53D6\u6D88\u51C6\u5907":"\u51C6\u5907",U("connectionText").textContent=st.errors?"\u8FDE\u63A5\u6062\u590D\u4E2D\u2026":"ROOM "+st.room.code+" \xB7 "+Math.round(st.rtt)+" ms";let m=st.members.map(b=>({id:b.id,s:b.id===st.id?_.s:b.snapshot?.s||0,finished:b.id===st.id?ne==="finished":!!b.snapshot?.finished,time:b.id===st.id?Nt():b.snapshot?.time||0})).sort((b,A)=>b.finished&&A.finished?b.time-A.time:A.finished-b.finished||A.s-b.s);U("racePosition").textContent="POS "+(m.findIndex(b=>b.id===st.id)+1)+" / "+st.members.length},Jr=function(){Js("roomPanel"),Rc()},Mu=function(a){if(!st.room||st.busy||document.hidden||a-st.lastSync<(st.room.status==="racing"?125:850))return;st.lastSync=a,st.busy=!0;let l=st.session;Ec("poll",{snapshot:st.room.status!=="lobby"?ip():{}}).then(d=>{st.room&&st.session===l&&Cc(d)}).catch(d=>{st.room&&st.session===l&&(st.errors++,U("connectionText").textContent="\u8FDE\u63A5\u6062\u590D\u4E2D \xB7 "+d.message,U("roomStatus").textContent=d.message)}).finally(()=>{st.busy=!1})},Su=function(a,l){if(!st.room)return;let d=Date.now()+st.offset-R(st.rtt*1.1,170,350);for(let m of st.peers.values()){let b=m.history;if(!b.length){m.label.hidden=!0;continue}let A=b[0],C=A;for(let dt=1;dt<b.length&&(C=b[dt],!(C.t>=d));dt++)A=C;let F=A.t===C.t?0:R((d-A.t)/(C.t-A.t),0,1),k={};for(let dt of["s","l","vS","vL","jump"])k[dt]=V(A[dt]||0,C[dt]||0,F);k.yaw=(A.yaw||0)+wn((C.yaw||0)-(A.yaw||0))*F;let Z=R((d-C.t)/1e3,0,.12);if(k.s+=(C.vS||0)*Z,k.l+=(C.vL||0)*Z,m.position&&Math.abs(k.s-m.position.s)<15){let dt=1-Math.exp(-l*24);k.s=V(m.position.s,k.s,dt),k.l=V(m.position.l,k.l,dt)}m.position=k;let at=ve(k.s),xt=De(k.s,k.l,.06+k.jump);m.worldPos=O(I(xt,[0,3,0]),a),m.root.tint=typeof C.paint=="string"?C.paint:ao[0],m.root.local=rt(O(xt,a),[.97,.97,.97],[0,-at.h-k.yaw,Math.atan(at.slope)]),m.root.shadow=z(O(xt,De(_.s,_.l)))<70,N.add(m.root),m.spin-=(k.vS||0)*l/.4;for(let dt=0;dt<Le.length;dt++){let vt=Le[dt];m.root.children[2+dt].local=J(tt(vt.x,.41,vt.z),ot(m.spin))}for(let dt=0;dt<Te.length;dt++){let vt=Te[dt],Tt=C.nitroTime>0||C.mini>0,Ct=Tt?.85+.16*Math.sin(Hs*38+vt.side):.001;m.root.children[6+dt].local=rt([-1.9,.43,vt.side*.34],[Ct,Ct,Ct])}}},rp=function(a){for(let l of st.peers.values()){if(!l.worldPos||!st.room||ne==="ready"){l.label.hidden=!0;continue}let d=l.worldPos,m=d[0],b=d[1],A=d[2],C=a[3]*m+a[7]*b+a[11]*A+a[15],F=(a[0]*m+a[4]*b+a[8]*A+a[12])/C,k=(a[1]*m+a[5]*b+a[9]*A+a[13])/C;l.label.hidden=C<=0||Math.abs(F)>1.1||Math.abs(k)>1.1,l.label.hidden||(l.label.style.left=(F*.5+.5)*Vr+"px",l.label.style.top=(-k*.5+.5)*Gr+"px")}},Au=function(){return"star-rush-best-reborn-"+en},op=function(){try{return JSON.parse(localStorage.getItem(Au())||"null")}catch{return null}},Eu=function(){if(Wn=[],xs=!1,Ks=null,Ai=op(),vs=0,oo=[],lo=0,co=[],Zs=[],ys=1,Zr=1,ho=0,U("resultGrid").replaceChildren(),U("splitLabel").textContent="SECTOR 1 / 3",U("splitDelta").textContent="",U("lapTimeLabel").textContent="",U("coach").hidden=Ci!=="practice",ee==="circuit"&&Ci==="race"&&!st.room){_.l=-1.8;for(let a=0;a<3;a++){let l=Ac(a);l.root.tint=Tu[a],Wn.push({s:-3.8*Math.floor((a+1)/2),l:(a%2?1:-1)*1.9,speed:0,yaw:0,color:Tu[a],name:ap[a],node:l.root,finishAt:null,index:a})}}Ai&&nn.ghost&&ee==="circuit"&&Ci==="timeTrial"&&!st.room?(Ei=Ac(3).root,Ei.tint="#b8e9e6",Ei.opacity=.27):Ei=null,uo(),Ci==="practice"&&!st.room&&Pu()},lp=function(a){for(let l of Wn){if(l.finishAt!==null)continue;let d=0;for(let F=15;F<=65;F+=10)d=Math.max(d,Math.abs(ve(l.s+F).curv));let m=R(Math.sqrt(24/Math.max(.004,d)),24,53)*(1-l.index*.028);l.speed=V(l.speed,m,1-Math.exp(-a*(l.speed>m?3:1.2)));let b=ve(l.s+20).curv,A=Math.sign(b)*1.6+Math.sin(l.s*.012+l.index)*.45;for(let F of ln.values())for(let k of F.entities)(k.kind==="barrier"||k.kind==="cone")&&At(k.s,l.s)>0&&At(k.s,l.s)<28&&Math.abs(A-k.l)<2.1&&(A=k.l>0?-2.8:2.8);let C=l.l;l.l=V(l.l,A,1-Math.exp(-a*2.3)),l.yaw=Math.atan2((l.l-C)/a,Math.max(5,l.speed))+R(b*12,-.4,.4),l.s+=l.speed*a,l.s>=$()&&(l.s=$(),l.finishAt=ui,Ks??=ui)}if(ee==="circuit"&&!st.room&&(lo+=a,lo>=.1&&(lo=0,oo.push([Number(Nt().toFixed(3)),Number(_.s.toFixed(3)),Number(_.l.toFixed(3)),Number(_.yaw.toFixed(4)),Number(_.jump.toFixed(3))]))),ee==="circuit"){for(;_.s>=ys*S/3&&ys<=j().laps*3;){co.push(Nt());let l=Ai?.splits?.[ys-1];if(U("splitLabel").textContent="SECTOR "+((ys-1)%3+1)+" / 3",l){let d=Nt()-l;U("splitDelta").textContent=(d>0?"+":"\u2212")+Math.abs(d).toFixed(2)+" s",U("splitDelta").style.color=d>0?"#f1b8c6":"#b9edcf"}else U("splitDelta").textContent="\u5206\u6BB5 "+Wt(Nt()-(co[ys-2]||0));ys++}if(_.s>=Zr*S){let l=Zs.reduce((d,m)=>d+m,0);Zs.push(Nt()-l),U("lapTimeLabel").textContent="\u4E0A\u4E00\u5708 "+Wt(Zs.at(-1)),Zr<j().laps&&gn("LAP "+(Zr+1),"\u4E0A\u4E00\u5708 "+Wt(Zs.at(-1)),1.5),Zr++}}if(Ks!==null&&ui-Ks>30&&_.s<$()){xs=!0,yc();return}ho+=a,ho>.18&&(ho=0,uo())},uo=function(){if(st.room){U("localPosition").textContent="ONLINE",U("eventLabel").textContent="\u597D\u53CB\u623F\u95F4 \xB7 "+st.room.code;return}let a=ne==="finished",l={time:a&&!xs?Nt():null,s:_.s},d=1+Wn.filter(m=>a?Cu({time:m.finishAt,s:m.s},l)<=0:m.finishAt!==null||m.s>_.s).length;U("localPosition").textContent=Wn.length?"POS "+d+" / 4":Ci==="practice"?"PRACTICE":"TIME ATTACK",U("eventLabel").textContent=a?xs?"\u672A\u5B8C\u8D5B":ee==="endless"?"\u5DE1\u6E38\u7ED3\u675F":"\u5DF2\u5B8C\u8D5B":Ks!==null?"\u5B8C\u8D5B\u5012\u8BA1\u65F6 "+Math.max(0,30-Math.floor(ui-Ks))+" s":ee==="endless"?"\u65E0\u5C3D\u5DE1\u6E38":j().name},Cu=function(a,l){return a.time===null&&l.time===null?l.s-a.s:a.time===null?1:l.time===null?-1:a.time-l.time},Ru=function(a){let l=wn(ve(a+62).h-ve(a+32).h);return{turn:l,direction:Math.abs(l)<.05?0:Math.sign(l),currentCurve:ve(a).curv}},Pu=function(a=Ru(_.s)){let l=a.direction>0?"\u53F3\u5F2F":a.direction<0?"\u5DE6\u5F2F":"",d=_.smallJets>0&&_.smallWindow>0,m="W / \u2191 \u52A0\u901F\uFF0C\u89C2\u5BDF\u524D\u65B9\u5F2F\u9053\u3002";_.drifting&&_.driftPhase==="counter"?m="\u53CD\u6253\u6536\u8F66\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\u3002":""):_.drifting&&_.driftPhase==="release"||_.driftPhase==="exit"&&_.exitTime>0?m="\u6536\u6F02\u4E2D\uFF1A\u5148\u7A33\u4F4F\u65B9\u5411\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\uFF0C\u8F66\u5934\u7A33\u5B9A\u540E\u8854\u63A5\u3002":""):_.drifting?m=_.driftPhase==="entry"?"\u8D77\u6F02\u4E2D\uFF1A\u5C0F\u5E45\u8F6C\u5411\uFF0C\u51C6\u5907\u53CD\u6253\u6536\u8F66\u3002":"\u6F02\u79FB\u4E2D\uFF1A\u53CD\u6309\u65B9\u5411\u6536\u8F66\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002":d?m="\u5C0F\u55B7 \xD7"+_.smallJets+"\uFF1A\u8F66\u5934\u7A33\u5B9A\u540E\u70B9\u7A7A\u683C / Q\u3002"+(_.smallJets>1?"\u8FDE\u7EED\u4E24\u6B21\u53EF\u53CC\u55B7\u3002":""):_.nitroTime>0?m="\u6C2E\u6C14\u55B7\u5C04\u4E2D\uFF1A"+(l?"\u524D\u65B9"+l+"\uFF0C\u7A33\u4F4F\u65B9\u5411\u3002":"\u4FDD\u6301\u8DEF\u7EBF\uFF0C\u65E0\u9700\u91CD\u590D\u6309 E / C\u3002"):_.speed>10&&(l?m="\u524D\u65B9"+l+"\uFF1A\u5148\u6536\u6CB9\u63A7\u901F\uFF0C\u5E73\u987A\u8F6C\u5411\u3002":_.nitro>0&&_.speed>15&&Math.abs(a.currentCurve)<.006?m="\u524D\u65B9\u76F4\u9053\uFF1A\u8F66\u8EAB\u7A33\u5B9A\u540E\uFF0C\u53EF\u9009 E / C \u6C2E\u6C14\u3002":m="\u524D\u65B9\u76F4\u9053\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u7559\u610F\u4E0B\u4E00\u5F2F\u3002"),U("coach").textContent=m},Iu=function(){let a=st.room?st.members.filter(l=>l.id!==st.id).map(l=>({name:l.name,time:l.snapshot?.finished?l.snapshot.time:null,s:l.snapshot?.s||0})):Wn.map(l=>({name:l.name,time:l.finishAt,s:l.s}));if(a.push({name:Qe.name+"\uFF08\u4F60\uFF09",time:xs?null:Nt(),s:_.s}),a.sort(Cu),U("resultGrid").replaceChildren(),a.length>1)for(let l=0;l<a.length;l++){let d=document.createElement("div");d.className="result-row";let m=document.createElement("span"),b=document.createElement("b");m.textContent=l+1+". "+a[l].name,b.textContent=a[l].time===null?st.room?.status==="racing"?"\u6BD4\u8D5B\u4E2D":"\u672A\u5B8C\u8D5B":Wt(a[l].time),d.append(m,b),U("resultGrid").appendChild(d)}},cp=function(){if(Vi=!1,Iu(),uo(),xs)U("resultDistance").textContent="DNF",U("resultNote").textContent="\u672C\u5C40\u672A\u80FD\u5728\u5012\u8BA1\u65F6\u7ED3\u675F\u524D\u5B8C\u8D5B\uFF0C\u53EF\u4EE5\u518D\u6311\u6218\u4E00\u6B21\u3002",U("submitRun").disabled=!0,Hr=null;else if(!st.room&&ee==="circuit"&&oo.length>10&&(!Ai||Nt()<Ai.time))try{localStorage.setItem(Au(),JSON.stringify({time:Nt(),points:oo,splits:co,laps:Zs,date:Date.now()})),U("resultNote").textContent="\u5237\u65B0\u672C\u673A\u6700\u4F73\uFF01\u5DF2\u4FDD\u5B58\u5E7D\u7075\uFF0C\u53EF\u5728\u8BA1\u65F6\u6311\u6218\u4E2D\u8FFD\u9010\u81EA\u5DF1\u3002"}catch{}U("coach").hidden=!0},hp=function(a,l){for(let d of Wn){let m=ve(d.s);d.node.local=rt(O(De(d.s,d.l,.07),a),[.97,.97,.97],[0,-m.h-d.yaw,Math.atan(m.slope)]),N.add(d.node);for(let b=0;b<Le.length;b++){let A=Le[b];d.node.children[2+b].local=J(tt(A.x,.41,A.z),ot(-d.s/.4))}}if(Ei&&Ai?.points?.length&&ne==="running"){let d=Ai.points,m=Nt();for(;vs<d.length-2&&d[vs+1][0]<m;)vs++;let b=d[vs],A=d[vs+1],C=R((m-b[0])/(A[0]-b[0]||1),0,1),F=V(b[1],A[1],C),k=V(b[2],A[2],C),Z=b[3]+wn(A[3]-b[3])*C,at=ve(F);Ei.local=rt(O(De(F,k,.07+V(b[4],A[4],C)),a),[.97,.97,.97],[0,-at.h-Z,0]),N.add(Ei)}if(nn.line&&ne==="running")for(let d=0;d<Ic.length;d++){let m=_.s+12+d*9,b=ve(m),A=R(b.curv*80,-2.1,2.1),C=Ic[d];C.mesh=wu[Math.abs(b.curv)*_.speed>.95?1:0],C.local=rt(O(De(m,A,.085),a),[1,1,1],[0,-b.h,0]),N.add(C)}},up=function(a,l){let d=a-Lu;if(Lu=a,d>0&&d<1e3&&$s.push(d),$s.length>180&&$s.shift(),Lc+=l,Lc<.25)return;Lc=0;let m=$s.reduce((C,F)=>C+F,0)/($s.length||1),b=[...$s].sort((C,F)=>C-F),A=b[Math.floor(b.length*.95)]||0;U("diagnostics").textContent="REBORN / "+(h?"Canvas compatibility":"Three.js WebGL 2")+`
FPS `+Math.round(1e3/(m||16.7))+" | frame p95 "+A.toFixed(1)+` ms
Draw `+Pc.drawCalls+" | triangles "+Pc.triangles+`
State `+ne+" | event "+Ci+`
s `+_.s.toFixed(1)+" / "+$().toFixed(1)+" | l "+_.l.toFixed(2)+`
speed `+(_.speed*3.6).toFixed(1)+` km/h
steer `+Ws.toFixed(2)+" | slip "+(wn(_.yaw-_.velocityYaw)*180/Math.PI).toFixed(1)+`\xB0
drift `+_.driftPhase+" | small "+_.smallJets+" | nitro "+_.nitro+`
ready `+(st.ready?"yes":"no")+" | peers "+st.peers.size+(xe?.rail?`
rail `+Object.values(xe.rail.status().states).join("/")+" | "+xe.rail.status().last+" #"+xe.rail.status().played:"")},dp=function(a){if(Gi=null,Vi&&ne==="running"){let b=0;for(let xt=15;xt<=90;xt+=10)b=Math.max(b,Math.abs(ve(_.s+xt).curv));let A=R(.85/Math.max(.012,b),14,48),C=ve(_.s),F=De(_.s+R(_.speed*.45,12,26),0,0),k=O(F,De(_.s,_.l,0)),Z=Math.atan2(L(k,C.R),L(k,C.T)),at=wn(Z-_.velocityYaw);Gi=R((at*3+ve(_.s+12).curv*_.speed)/1.04,-1,1),Ce.brake=_.speed>A+1.5,Ce.gas=!Ce.brake;return}let l=navigator.getGamepads?.()[0];if(!l){Nc&&(zs(),Dc={},Nc=!1);return}Nc=!0,zs();let d=Math.abs(l.axes[0]||0)>.13?l.axes[0]:0;d&&(Gi=d);let m={gas:l.buttons[7]?.value>.13,brake:l.buttons[6]?.value>.13,drift:!!l.buttons[2]?.pressed,small:!!l.buttons[0]?.pressed,boost:!!l.buttons[1]?.pressed};for(let[b,A]of Object.entries(m))Ce[b]||=A,A&&!Dc[b]&&b in Gn&&Gn[b]++;Dc=m},Kr=function(){try{localStorage.setItem("star-rush-settings-reborn",JSON.stringify(nn))}catch{}},fo=function(){Qe.name=U("profileName").value.trim().slice(0,16)||Qe.name;try{localStorage.setItem("star-rush-profile",JSON.stringify(Qe)),localStorage.setItem("star-rush-name",Qe.name)}catch{}U("carName").textContent=Qe.car;for(let a of["roomName","racerName","profileName"])U(a).value=Qe.name;U("profileStatus").textContent="\u5DF2\u4FDD\u5B58 \xB7 "+Qe.name,Pt.tint=Qe.paint},Uc=function(){for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).checked=!!nn[l];U("qualitySetting").value=nn.quality,U("steeringSetting").value=nn.sensitivity*100,U("fovSetting").value=nn.fov,U("settingsStatus").textContent=h?"\u5F53\u524D\u6D4F\u89C8\u5668\u4F7F\u7528\u517C\u5BB9\u663E\u793A\u6A21\u5F0F\uFF0C\u6BD4\u8D5B\u903B\u8F91\u548C\u64CD\u4F5C\u4FDD\u6301\u4E00\u81F4\u3002":"Three.js 3D \u6E32\u67D3 \xB7 \u8BBE\u7F6E\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5728\u6B64\u8BBE\u5907\u3002"},Nu=function(){if(st.room){Jr();return}Vi=!1,ne="ready",Qn(!1),Wn=[],Ei=null,fs(),U("welcome").hidden=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("coach").hidden=!0,Bi.classList.add("menu-open"),U("countdown").hidden=!0},pp=function(){for(let a of document.querySelectorAll("[data-track]")){let l=Kn[a.dataset.track],d=a.querySelector("svg");if(!l||!d)continue;let m=l.points.map(vt=>vt[0]),b=l.points.map(vt=>vt[2]),A=Math.min(...m),C=Math.max(...m),F=Math.min(...b),k=Math.max(...b),Z=Math.min(140/(C-A),54/(k-F)),at=l.points.map(vt=>[80+(vt[0]-(A+C)/2)*Z,35+(vt[2]-(F+k)/2)*Z]),xt=document.createElementNS("http://www.w3.org/2000/svg","path");xt.setAttribute("d",at.map((vt,Tt)=>(Tt?"L":"M")+vt.join(",")).join(" ")+"Z"),xt.setAttribute("fill","none"),xt.setAttribute("stroke",l.biome?"#eabfd8":"#a9d8ec"),xt.setAttribute("stroke-width","3"),xt.setAttribute("stroke-linejoin","round"),d.replaceChildren(xt);let dt=document.createElementNS("http://www.w3.org/2000/svg","circle");dt.setAttribute("cx",at[0][0]),dt.setAttribute("cy",at[0][1]),dt.setAttribute("r","3"),dt.setAttribute("fill","#ffe2ac"),d.appendChild(dt)}},o=Sf(i);i=o.canvas;let c=o.threeBackend,h=o.software,u=o.softwareContext,v=new WeakMap,P=Math.PI,x=P*2,p=(a=0,l=0,d=0)=>[a,l,d],I=(a,l)=>a.map((d,m)=>d+l[m]),O=(a,l)=>a.map((d,m)=>d-l[m]),E=(a,l)=>a.map(d=>d*l),L=(a,l)=>a[0]*l[0]+a[1]*l[1]+a[2]*l[2],D=(a,l)=>[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],z=a=>Math.hypot(...a),T=a=>E(a,1/(z(a)||1)),R=(a,l,d)=>Math.min(d,Math.max(l,a)),V=(a,l,d)=>a+(l-a)*d,Y=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),pt={green:"#7fb86c",light:"#a7d27d",dark:"#407750",spine:"#4c8056",belly:"#dfdb96",eye:"#fff2cf",iris:"#325f43",coral:"#df8064",rim:"#f2be8e",rubber:"#344b42",metal:"#b7c8b1",wood:"#b78c57",gold:"#d6b471",cream:"#f1ead2",grass:"#b7cc90",white:"#fff4d7",earth:"#b4976d",water:"#91c6b8",leaf:"#85ad74"},ue=new Map,Ue=Xt(),ge=Xt(12,8),ke=ie(),je=ie(8),mn=ie(10,0),We=ie(4,0),Ie=Y();class G{constructor(){this.data=[],this.indices=[]}add(l,d=Ie,m=pt.green,b=.13){let A=typeof m=="string"?Re(m):m,C=ct(d),F=this.data.length/10;for(let k=0;k<l.p.length;k+=3){let Z=et(d,l.p.slice(k,k+3)),at=ut(C,l.n.slice(k,k+3));this.data.push(...Z,...at,...A,b)}for(let k of l.i)this.indices.push(F+k);return this}finish(l=!1){return new on(this.data,this.indices,l)}}class on{constructor(l,d){this.sourceData=new Float32Array(l),this.sourceIndices=new Uint32Array(d),this.count=d.length}update(l){this.sourceData=new Float32Array(l)}dispose(){this.onDispose&&this.onDispose()}}class re{constructor(l=null,d=Ie){this.mesh=l,this.local=d,this.children=[],this.shadow=!0,this.world=Ie}add(l){return this.children.push(l),l}}let N=new re,y=new G,K=new G,Lt=73121,Pt=N.add(new re),St=new G,$t="#83cde4",Zt="#eff0f6",te="#9c8ad5",H="#343952",Dt="#ed94bd",gt="#f8d1b5",It="#a3a9e5",kt="#7479b7";B(St,[0,.47,0],[3.15,.43,1.42],$t,.16),B(St,[.9,.68,0],[1.4,.27,1.42],Zt,.13,[0,0,-.065],.5),B(St,[.96,.83,0],[1.08,.035,.14],te,.015,[0,0,-.065],.5),B(St,[0,.38,0],[3.3,.15,1.48],H,.07),B(St,[1.53,.31,0],[.5,.075,1.9],te,.035),B(St,[-1.4,.39,0],[.45,.22,1.55],te,.07);for(let a of[-.7,.7]){B(St,[-.15,.64,a],[2.55,.35,.29],$t,.12,[0,0,0],.45),B(St,[.1,.81,a],[1.55,.05,.2],Zt,.02),B(St,[-.17,.69,a*1.19],[.62,.19,.032],H,.02,[0,0,-.12]);for(let l=0;l<4;l++)B(St,[-.38+l*.12,.69,a*1.22],[.035,.13,.015],"#758ab5",.007,[0,0,-.15]);B(St,[1.54,.66,a*.75],[.055,.14,.33],"#fff0b9",.035,[0,0,-.1],.65),B(St,[-1.57,.62,a*.79],[.035,.12,.28],Dt,.035,[0,0,0],.6),B(St,[-1.32,.85,a*.83],[.07,.55,.07],H,.02),B(St,[-1.38,1.13,a*1.34],[.43,.16,.055],te,.025)}B(St,[1.6,.44,0],[.04,.15,.67],H,.03);for(let a=0;a<5;a++)B(St,[1.63,.44,(a-2)*.115],[.014,.1,.024],"#6d7990",.006);B(St,[-1.37,1.12,0],[.38,.065,1.94],Zt,.03),B(St,[-1.37,1.16,0],[.18,.018,1.68],te,.007),B(St,[-.42,.77,0],[1.05,.08,.94],H,.05),B(St,[-.69,1,0],[.18,.53,.64],H,.08,[0,0,-.12]),B(St,[-.6,1.23,0],[.18,.15,.5],te,.05),B(St,[.28,.94,0],[.075,.26,.91],"#bedde9",.025,[0,0,-.33],.6);for(let a of[-.75,.75])mt(St,[.22,.91,a*.84],[.31,1.04,a*1.1],.018,H),q(St,[.31,1.04,a*1.11],[.13,.055,.09],Zt,!0,.6);mt(St,[.35,.82,0],[.1,1.08,0],.035,H),St.add(Bt(.16,.025,28,8),rt([.1,1.08,0],[1,1,1],[0,P/2,-.35]),H,.2);for(let a of[-.34,.34])St.add(ke,rt([-1.64,.43,a],[.085,.2,.085],[0,0,P/2]),"#9babc2",.75);q(St,[-.42,1.04,0],[.24,.29,.22],te),q(St,[-.36,1.29,0],[.095,.1,.09],gt,!0);for(let a of[-1,1]){let l=[-.38,1.17,a*.22],d=[-.13,1.02,a*.29],m=[.09,1.09,a*.14];mt(St,l,d,.075,te,.14,!0),mt(St,d,m,.06,te,.14,!0),q(St,m,[.085,.065,.065],Zt,!0)}B(St,[-.18,1.08,0],[.05,.31,.08],Zt,.01);let bt=Pt.add(new re(St.finish()));bt.mesh.paintable=!0;let zt=new G;q(zt,[0,0,0],[.335,.355,.3],gt),q(zt,[-.19,-.01,0],[.2,.35,.32],kt),q(zt,[-.025,.19,0],[.37,.255,.33],It);for(let a of[-1,1])q(zt,[-.035,-.04,a*.29],[.13,.28,.095],It),q(zt,[.308,.025,a*.13],[.02,.1,.067],Zt,!0),q(zt,[.326,.023,a*.13],[.012,.075,.043],"#5c72a5",!0,.4),q(zt,[.338,.015,a*.13],[.008,.048,.027],"#303c65",!0),q(zt,[.347,.058,a*.135],[.008,.02,.018],"#fffaf1",!0,.6),q(zt,[.296,-.1,a*.2],[.014,.038,.045],"#e9a6ab",!0),lt(zt,[[.32,.132,a*.075],[.322,.148,a*.13],[.31,.132,a*.19]],.011,kt),Et(zt,[.215,.165,a*.18],[.1,.24,.085],It,[0,0,P+.2]),zt.add(Bt(.084,.014,24,7),rt([.33,.24,a*.125],[1,1,1],[0,P/2,0]),"#e8c58c",.6),q(zt,[.335,.24,a*.125],[.012,.064,.066],"#a0d8e8",!0,.6);lt(zt,[[.317,-.148,-.037],[.326,-.16,0],[.317,-.148,.037]],.009,"#b77787"),zt.add(Bt(.313,.02,40,7),rt([-.025,.225,0],[1.05,1,1],[P/2,0,0]),H),Et(zt,[.26,.17,-.04],[.1,.25,.08],It,[0,0,P+.25]);let Kt=Pt.add(new re(zt.finish())),Le=[];for(let a of[-1.02,1.06])for(let l of[-1,1]){let d=new G;d.add(Bt(.315,.095,40,12),Ie,"#343b4c",.22),d.add(Bt(.255,.027,32,8),tt(0,0,l*.075),"#e4e6ef",.7),d.add(ke,rt([0,0,l*.07],[.238,.07,.238],[P/2,0,0]),"#4d5576",.35);for(let b=0;b<5;b++){let A=b*x/5;mt(d,[0,0,l*.116],[.23*Math.cos(A),.23*Math.sin(A),l*.116],.025,Zt,.65)}q(d,[0,0,l*.14],[.075,.075,.022],te,!0,.6);let m=Pt.add(new re(d.finish()));Le.push({n:m,x:a,z:l*.83,front:a>0})}let Te=[];for(let a of[-1,1]){let l=new G;q(l,[0,0,0],[.65,.105,.105],"#a6f4ff",!0,.8),q(l,[-.3,0,0],[.35,.065,.065],"#e9d1ff",!0,.7);let d=Pt.add(new re(l.finish()));d.shadow=!1,Te.push({n:d,side:a})}let hn=new G;B(hn,[0,.36,0],[.6,.72,2.1],"#ef97aa",.08),B(hn,[0,.78,0],[.69,.16,2.2],Zt,.035);for(let a=0;a<5;a++)B(hn,[.312,.4,(a-2)*.38],[.018,.29,.16],"#fff0c7",.015,[.28,0,0]);for(let a of[-.85,.85])mt(hn,[0,.05,a],[0,.77,a],.045,"#636986");let zn=hn.finish(),Ds=new G;B(Ds,[0,.07,0],[.8,.12,.8],H,.04),Et(Ds,[0,.49,0],[.28,.78,.28],"#e4b281"),Et(Ds,[0,.53,0],[.2,.16,.2],Zt);let hc=Ds.finish(),Ns=new G;Ns.add(Bt(.34,.068,28,8),rt([0,0,0],[1,1,1],[0,P/2,0]),"#f0d085",.7),q(Ns,[0,0,0],[.04,.22,.22],"#ffe7a7",!0,.55);let Lr=Ns.finish(),Us=new G;B(Us,[0,.025,0],[5.5,.045,3],"#7ecadc",.02);for(let a=0;a<3;a++){let l=-1.8+a*1.6;mt(Us,[l-.45,.075,-.9],[l+.35,.075,0],.055,"#eef9d0",.3),mt(Us,[l+.35,.075,0],[l-.45,.075,.9],.055,"#eef9d0",.3)}let Va=Us.finish(),Fs=new G,Jn=[-2.5,0,-1.6,2.5,0,-1.6,2.5,1,-1.6,-2.5,0,1.6,2.5,0,1.6,2.5,1,1.6],Zn=[0,1,2,3,5,4,0,2,5,0,5,3,1,4,5,1,5,2],Os=[],Dr=[],ls=[];for(let a=0;a<Zn.length;a+=3){let l=Jn.slice(Zn[a]*3,Zn[a]*3+3),d=Jn.slice(Zn[a+1]*3,Zn[a+1]*3+3),m=Jn.slice(Zn[a+2]*3,Zn[a+2]*3+3),b=T(D(O(d,l),O(m,l))),A=Os.length/3;Os.push(...l,...d,...m),Dr.push(...b,...b,...b),ls.push(A,A+1,A+2)}Fs.add(_t(Os,Dr,ls),Ie,"#d9b1e0");for(let a of[-1.4,1.4])mt(Fs,[-2.5,.06,a],[2.5,1.06,a],.045,Zt);let Ga=Fs.finish(),Bs=new G().add(ge,Ie,"#b4eaff",.2).finish(),cs=Array.from({length:45},()=>({life:0,p:[0,0,0],v:[0,0,0],size:.1,node:new re(Bs)}));for(let a of cs)a.node.shadow=!1;let ee="circuit",en="coast-reborn",Wa="coast-reborn",Kn={"coast-reborn":{name:"\u6C50\u89C1\u6D77\u5CB8",laps:1,biome:0,difficulty:"\u5165\u95E8 \xB7 \u9AD8\u901F\u7EC4\u5408\u5F2F",description:"\u6C50\u89C1\u7AD9\u524D \u2192 \u6D77\u6EE8\u5546\u5E97\u8857 \u2192 \u795E\u793E\u5C71\u9053 \u2192 \u6E2F\u6E7E S \u5F2F",sectors:[{at:0,name:"\u6C50\u89C1\u7AD9\u524D"},{at:.22,name:"\u6D77\u6EE8\u5546\u5E97\u8857"},{at:.48,name:"\u6E2F\u6E7E S \u5F2F"},{at:.66,name:"\u795E\u793E\u5C71\u9053"},{at:.82,name:"\u6D77\u98CE\u5927\u9053"}],points:[[-155,0,70],[-80,0,70],[0,.2,70],[85,.7,65],[135,1.2,30],[130,1.6,-20],[75,2,-28],[38,1.8,0],[0,1.5,-10],[8,.8,-58],[65,.2,-80],[115,0,-85],[130,.4,-125],[75,1,-150],[0,1.6,-145],[-60,2,-100],[-110,1.2,-135],[-155,.5,-100],[-200,0,-25],[-218,0,28],[-215,0,70]]},"sakura-reborn":{name:"\u82B1\u89C1\u5742",laps:2,biome:1,difficulty:"\u8FDB\u9636 \xB7 \u8FDE\u7EED\u53CD\u5411\u5F2F",description:"\u6A31\u82B1\u6821\u95E8 \u2192 \u82B1\u89C1\u5742\u5546\u5E97\u8857 \u2192 \u795E\u793E\u53C2\u9053 \u2192 \u6CB3\u5CB8\u56DE\u73AF",sectors:[{at:0,name:"\u6A31\u82B1\u7AD9\u524D"},{at:.22,name:"\u82B1\u89C1\u5742\u5546\u5E97\u8857"},{at:.47,name:"\u6CB3\u5CB8\u56DE\u73AF"},{at:.66,name:"\u795E\u793E\u53C2\u9053"},{at:.83,name:"\u6A31\u82B1\u5927\u9053"}],points:[[-180,0,70],[-95,0,70],[0,0,70],[95,.4,62],[170,1,16],[160,1.6,-45],[100,2,-70],[55,2.2,-30],[5,2,-55],[-16,1,-110],[-80,.5,-130],[-145,0,-104],[-220,0,-45],[-230,0,25],[-230,0,70]]}};Kn["academy-reborn"]={name:"\u661F\u8DC3\u8BAD\u7EC3\u573A",laps:1,biome:1,difficulty:"\u57FA\u7840\u9A7E\u9A76",description:"\u5BBD\u7F13\u5F2F\u9053 \xB7 \u6E05\u6670\u89C6\u91CE \xB7 \u7EC3\u4E60\u8D77\u6F02\u3001\u53CD\u6253\u4E0E\u51FA\u5F2F\u55B7\u5C04",sectors:[{at:0,name:"\u57FA\u7840\u76F4\u9053"},{at:.33,name:"\u6F02\u79FB\u5F27\u7EBF"},{at:.66,name:"\u51FA\u5F2F\u52A0\u901F"}],points:[[-100,0,65],[0,0,65],[100,0,65],[145,.3,25],[145,.4,-25],[100,.2,-65],[0,0,-65],[-100,0,-65],[-145,.1,-25],[-145,.1,25]]};for(let[a,l]of Object.entries(Kn)){let d=a==="coast-reborn"?1.45:a==="sakura-reborn"?1.5:1.2;l.points=l.points.map(m=>[m[0]*d,m[1],m[2]*d])}let un=[],S=0,W={};Ut();let fe=220,Yt=245,Me=1.57,Ge=.91,ze=8.045,_e=(a,l)=>a[0]*l[0]+a[1]*l[1],Ze=(a,l)=>a[0]*l[1]-a[1]*l[0],Tn=new Map,hi=null,tu=null,uc=[],Df=bi("petal",a=>B(a,[0,0,0],[.12,.025,.075],"#ffd2e8",.025)),xe=null,Nn=!0,Bf=(()=>{let a=(A,C,F)=>Math.min(F,Math.max(C,A)),l=(A,C,F)=>A+(C-A)*F,d=A=>Math.atan2(Math.sin(A),Math.cos(A)),m=Object.freeze({cruise:52,mini:63,nitro:76,combo:83,normalTurn:1.04,driftTurn:1.8,driveAcceleration:27,jetAcceleration:36});function b(A,C,F,k={}){let Z=Math.hypot(A.vS,A.vL),at=Z>.05?Math.atan2(A.vL,A.vS):A.yaw,xt=a(Number(C.steer)||0,-1,1),dt=k.sensitivity||1,vt=A.vS*Math.cos(A.yaw)+A.vL*Math.sin(A.yaw)<-.05;A.steering=l(A.steering||0,xt,1-Math.exp(-F*26));let Tt=!!A.drifting,Ct=A.driftSide||Math.sign(xt)||1,ce=Tt&&xt*Ct<-.1,Mt=Tt&&A.driftReleasing,ft=A.steering*m.normalTurn*dt*a(Z/8,0,1)*(vt?-1:1);if(Tt){let mp=Math.max(0,A.steering*Ct),gp=Ct*(ce?.4:.52+mp*(m.driftTurn-.52)),_p=Mt?a((A.releaseAge||0)/.38,0,1):0;ft=l(gp,ft,_p)*a(Z/9,0,1)}A.jump>.2&&(ft*=.35),A.turnRate=l(A.turnRate||0,ft,1-Math.exp(-F*(Tt?13:19)));let Rt=d(at+A.turnRate*F),Ft=d(at-(vt?Math.PI:0)),qt=d(A.yaw-Ft),wt=Tt?Ct*(ce?.015:Mt?.12:.22+.38*Math.max(0,xt*Ct)):A.steering*.025;Mt&&(wt*=1-a((A.releaseAge||0)/.45,0,1));let Je=ce?13:Tt?9:8;qt=l(qt,wt,1-Math.exp(-F*Je)),A.yaw=d(Rt-(vt?Math.PI:0)+qt+(A.spin||0)*F),A.spin=(A.spin||0)*Math.exp(-F*6);let Ve=Z,En=.7+Z*.018+Z*Z*45e-5,Ke=A.nitroTime>0||A.mini>0||A.pad>0,Ms=A.nitroTime>0?A.comboTimer>0?m.combo:m.nitro:A.pad>0?73:A.mini>0?m.mini:m.cruise,js=C.gas&&!C.brake?a((m.cruise-Ve)*2.8,0,m.driveAcceleration):0,Qs=Ke&&!C.brake?a((Ms-Ve)*2.8,0,m.jetAcceleration):0,Hi=Tt?(ce?1.3:3.3)*Math.abs(qt):0;return Ve=Math.max(0,Ve+(js+Qs-En-Hi)*F),!Ke&&Ve>m.cruise&&(Ve=Math.max(m.cruise,Ve-Math.min(8,(Ve-m.cruise)*.7)*F)),C.brake&&(Ve=Math.max(0,Ve-36*F)),vt&&C.gas&&(Ve=Math.max(0,Ve-32*F)),C.brake&&!C.gas&&(Z<1.3||vt)?(A.vS=l(A.vS,-Math.cos(A.yaw)*5,1-Math.exp(-F*5)),A.vL=l(A.vL,-Math.sin(A.yaw)*5,1-Math.exp(-F*5))):(A.vS=Math.cos(Rt)*Ve,A.vL=Math.sin(Rt)*Ve),A.speed=Math.hypot(A.vS,A.vL),A.velocityYaw=Rt,A.lateralSpeed=A.vL,{slip:qt,counter:ce,thrust:Qs,boost:Ke,speed:A.speed}}return{step:b,config:m,wrap:d}})(),wn=a=>Math.atan2(Math.sin(a),Math.cos(a)),U=a=>document.getElementById(a),Bi=U("game"),Ce={gas:!1,brake:!1,left:!1,right:!1,drift:!1,boost:!1,small:!1},Ja=new Set,Za=new Map,Gn={drift:0,boost:0,small:0},pc=[{name:"\u6C50\u89C1\u6D77\u5CB8",ground:"#cbdcbd",tree:"#b9d5bb",accent:"#afc8e4",fog:"#c8deef"},{name:"\u82B1\u89C1\u5742",ground:"#d9d7c7",tree:"#f0bfd5",accent:"#c9c1e5",fog:"#dcdff1"},{name:"\u661F\u5149\u5CE1\u8C37",ground:"#c4b8c3",tree:"#a7a5d3",accent:"#d8b4d8",fog:"#dbdce8"}],_={s:0,l:0,speed:0,yaw:0,velocityYaw:0,energy:0,coins:0,score:0,inv:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,wallRecover:0,wallSide:0,stuckTime:0},Ka=1/120,Xx=7.02,iu=new Map,mc=null,hs=0,Vs=60,Nr=0,us=null,Hf=new G().add(He(1,.009,.12,.003),Ie,"#414957",.01).finish(),ds=Array.from({length:160},()=>({life:0,p:[0,0,0],angle:0,length:1,node:new re(Hf)}));for(let a of ds)a.node.shadow=!1;let Wf=0,ne="ready",Gs=(Date.now()>>>0)%999999||24681,$a=1,$n=[],Ur=0,gc=-P/2,_c=100,ja=0,ln=new Map,xc=0,ui=0,Hs=0,Qa=performance.now(),ki=3,Hn=0,Ws=0,Fr=0,Or=0,su=!1,to=!1,Br=0,eo=0;try{Br=Number(localStorage.getItem("star-rush-best-distance")||0),eo=Number(localStorage.getItem("star-rush-best-score")||0)}catch{}let di=Object.fromEntries(["distance","score","coins","speed","gear","energyText","biome","turnText","turnArrowPath","driftText"].map(a=>[a,U(a)])),qs=null,kr=null,ps=null,Sc=U("minimap"),Qt=Sc.getContext("2d"),bc=0,no={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"small",KeyQ:"small",ShiftLeft:"drift",ShiftRight:"drift",KeyE:"boost",KeyC:"boost"};window.addEventListener("keydown",a=>{if(!a.target.closest("input,select,textarea")){if(a.code==="Escape"){for(let l of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])if(!U(l).hidden){_s(l);return}}if(!["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)){if(no[a.code]&&(a.preventDefault(),Ja.add(a.code),zs()),a.code==="Backspace"){a.preventDefault(),a.repeat||Mc(!1);return}a.repeat||(a.code==="F2"&&(a.preventDefault(),U("diagnostics").hidden=!U("diagnostics").hidden),(a.code==="KeyP"||a.code==="Escape")&&zi(),a.code==="KeyV"&&(Hn=(Hn+1)%3,gn("CAMERA "+(Hn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Hn],1)),a.code==="KeyR"&&Xs(!1),a.code==="Enter"&&(ne==="ready"||ne==="finished"?Xs(!1):ne==="paused"&&zi()))}}}),window.addEventListener("keyup",a=>{["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)||no[a.code]&&(a.preventDefault(),Ja.delete(a.code),zs())}),window.addEventListener("blur",()=>{fs(),ne==="running"&&zi()});for(let a of document.querySelectorAll("[data-key]")){a.addEventListener("pointerdown",d=>{d.preventDefault(),a.setPointerCapture(d.pointerId),Za.set(d.pointerId,a.dataset.key),zs(),a.classList.add("held")});let l=d=>{Za.delete(d.pointerId),zs(),a.classList.remove("held")};for(let d of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(d,l)}U("endRunBtn").onclick=()=>{ee==="endless"&&(ne==="running"||ne==="paused")&&(U("paused").hidden=!0,yc())},U("recoverBtn").onclick=()=>Mc(!1),U("startBtn").onclick=()=>Xs(!1),U("retryBtn").onclick=()=>Xs(!1),U("newRouteBtn").onclick=()=>{if(typeof st<"u"&&st.room){Jr();return}ne="ready",Qn(!0),U("finished").hidden=!0,U("welcome").hidden=!1},U("rerollBtn").onclick=()=>Qn(!0),U("pauseBtn").onclick=zi,U("resumeBtn").onclick=zi,U("restartPause").onclick=()=>Xs(!1),U("viewBtn").onclick=()=>{Hn=(Hn+1)%3,gn("CAMERA "+(Hn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Hn],1)},U("soundBtn").onclick=()=>{qa(),Nn=!Nn,xe&&xe.ctx.resume().catch(()=>{}),U("soundBtn").textContent=Nn?"\u266B":"\u266A",U("soundBtn").setAttribute("aria-label",Nn?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),U("soundBtn").title=Nn?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED",Nn&&Oi(600)};let $f=["#a1cddd","#c2d4bc"].map(a=>new G().add(He(1100,.16,1100,.04),Ie,a,.02).finish()),io=new re,zr=[],Vr=1,Gr=1;new ResizeObserver(uu).observe(i),uu(),Qn(!1),i.addEventListener("webglcontextlost",a=>{a.preventDefault(),n("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u6E38\u620F\u3002")}),document.addEventListener("visibilitychange",()=>{document.hidden&&ne==="running"&&zi(),Qa=performance.now()}),requestAnimationFrame(du);let ms=en,Hr=null,Ti="circuit",wi=!1,Tc=0;async function Wr(){let a=++Tc,l=U("rankRows");U("rankTrack")&&(U("rankTrack").hidden=Ti!=="circuit"),l.replaceChildren(),U("rankStatus").textContent=wi?"\u672C\u673A\u8BB0\u5F55":"\u6B63\u5728\u83B7\u53D6\u5728\u7EBF\u6210\u7EE9\u2026";for(let[d,m]of[["boardCircuit","circuit"],["boardEndless","endless"]])U(d).classList.toggle("selected",!wi&&Ti===m);U("boardLocal").classList.toggle("selected",wi);try{let d;if(wi)d=fu().filter(m=>m.mode===Ti&&(m.mode==="endless"||m.track===ms)).sort((m,b)=>Ti==="circuit"?m.timeMs-b.timeMs:b.distance-m.distance).slice(0,20);else{let m=await fetch("/api/leaderboard?mode="+Ti+"&track="+encodeURIComponent(ms));if(!m.ok)throw new Error("\u699C\u5355\u670D\u52A1\u6682\u4E0D\u53EF\u7528");d=(await m.json()).runs}if(a!==Tc)return;for(let m=0;m<d.length;m++)l.appendChild(Qf(m,d[m]));U("rankStatus").textContent=d.length?(wi?"\u5F53\u524D\u8BBE\u5907 \xB7 ":"\u5728\u7EBF \xB7 ")+(Ti==="circuit"?Kn[ms].name+" / "+Kn[ms].laps+" \u5708 / \u6309\u6700\u5FEB\u7528\u65F6":"\u65E0\u5C3D\u6A21\u5F0F / \u6309\u6700\u8FDC\u91CC\u7A0B"):"\u8FD8\u6CA1\u6709\u6210\u7EE9\uFF0C\u6765\u8DD1\u7B2C\u4E00\u5708\u3002"}catch{if(a!==Tc)return;U("rankStatus").textContent="\u5728\u7EBF\u699C\u6682\u65F6\u672A\u80FD\u52A0\u8F7D\uFF0C\u53EF\u5207\u6362\u201C\u672C\u673A\u8BB0\u5F55\u201D\u3002"}}U("rankBtn").onclick=tp,U("closeRank").onclick=()=>_s("rankPanel"),U("boardCircuit").onclick=()=>{Ti="circuit",wi=!1,Wr()},U("boardEndless").onclick=()=>{Ti="endless",wi=!1,Wr()},U("boardLocal").onclick=()=>{wi=!0,Wr()},U("circuitMode").onclick=()=>pu("circuit"),U("endlessMode").onclick=()=>pu("endless");try{U("racerName").value=localStorage.getItem("star-rush-name")||""}catch{}U("submitRun").onclick=async()=>{if(!Hr)return;let a=U("racerName").value.trim().slice(0,16)||"\u533F\u540D\u8F66\u624B";try{localStorage.setItem("star-rush-name",a)}catch{}U("submitRun").disabled=!0,U("uploadStatus").textContent="\u6B63\u5728\u4E0A\u4F20\u6210\u7EE9\u2026";try{if(!(await fetch("/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...Hr,name:a})})).ok)throw new Error;U("submitRun").textContent="\u5DF2\u4E0A\u4F20",U("uploadStatus").textContent="\u4E0A\u4F20\u6210\u529F\uFF01\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u699C\u201D\u67E5\u770B\u548C\u670B\u53CB\u7684\u6392\u540D\u3002"}catch{U("submitRun").disabled=!1,U("uploadStatus").textContent="\u6682\u65F6\u672A\u80FD\u4E0A\u4F20\uFF0C\u672C\u673A\u6210\u7EE9\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u91CD\u8BD5\u3002"}};for(let a of document.querySelectorAll("[data-track]"))a.onclick=()=>mu(a.dataset.track);Xr();let Ys=document.createElement("select");Ys.id="rankTrack",Ys.setAttribute("aria-label","\u6392\u884C\u699C\u8D5B\u9053");for(let[a,l]of Object.entries(Kn)){let d=document.createElement("option");d.value=a,d.textContent=l.name,Ys.appendChild(d)}U("rankStatus").before(Ys),Ys.onchange=()=>{ms=Ys.value,Wr()};let An={enabled:!0,volume:.4,sfxVolume:.75};try{Object.assign(An,JSON.parse(localStorage.getItem("star-rush-audio")||"{}"))}catch{}let ae={mode:"synth",bus:null,step:0,next:0,files:[],index:0,url:null,element:null},Yr=!1;U("musicBtn").onclick=()=>{qr(),Js("musicPanel")},U("closeMusic").onclick=()=>_s("musicPanel"),U("helpBtn").onclick=U("welcomeHelp").onclick=()=>Js("helpPanel"),U("closeHelp").onclick=()=>_s("helpPanel"),U("synthMusic").onclick=()=>so("synth"),U("classicMusic").onclick=()=>so("classic"),U("musicFiles").onchange=a=>{ae.files=Array.from(a.target.files||[]),ro(0)},U("nextSong").onclick=()=>ro(ae.index+1),U("previousSong").onclick=()=>ro(ae.index-1),U("musicToggle").onclick=()=>{qr(),An.enabled=!An.enabled,U("musicToggle").textContent=An.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",wc()},U("musicVolume").value=Math.round(An.volume*100),U("sfxVolume").value=Math.round(An.sfxVolume*100),U("musicToggle").textContent=An.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",U("musicVolume").oninput=a=>{An.volume=Number(a.target.value)/100,wc()},U("sfxVolume").oninput=a=>{An.sfxVolume=Number(a.target.value)/100,wc()},U("classicTrack").onchange=()=>{so("classic"),U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"};let st={id:crypto.randomUUID(),room:null,members:[],ready:!1,busy:!1,lastSync:0,offset:0,startAt:0,runTag:0,peers:new Map,errors:0,rtt:0,session:0},ao=["#f6aec9","#ffd88b","#baafff","#a8efce"],np=ao.map(a=>{let l=new G;return Et(l,[0,2.55,0],[.14,.28,.14],a,[0,0,P]),l.finish()});async function Ec(a,l={}){let d=Date.now(),m=await fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:a,id:st.id,code:st.room?.code||U("roomCode").value.trim(),name:U("roomName").value.trim()||"\u533F\u540D\u8F66\u624B",track:en,...l}),signal:AbortSignal.timeout(4e3)}),b=await m.json();if(!m.ok)throw new Error(b.error||"\u623F\u95F4\u8BF7\u6C42\u5931\u8D25");if(st.rtt=Date.now()-d,b.serverTime){let A=b.serverTime-(d+Date.now())/2;st.offset=st.room?V(st.offset,A,.25):A}return b}async function vu(a){if(!st.busy){st.busy=!0,U("roomStatus").textContent="\u6B63\u5728\u8FDE\u63A5\u623F\u95F4\u2026";try{let l=await Ec(a);st.session++,xu(),en=l.room.track,ee="circuit",Qn(!1),Xr(),Cc(l),ne="ready",Yr=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Bi.classList.add("menu-open");try{localStorage.setItem("star-rush-name",U("roomName").value.trim())}catch{}}catch(l){U("roomStatus").textContent=l.message}finally{st.busy=!1}}}async function yu(a,l={}){if(st.busy)return;st.busy=!0;let d=st.session;try{let m=await Ec(a,l);d===st.session&&st.room&&Cc(m)}catch(m){U("roomStatus").textContent=m.message}finally{st.busy=!1}}async function sp(){if(!st.room)return;let a={action:"leave",id:st.id,code:st.room.code,name:U("roomName").value};st.session++,st.room=null,st.startAt=0,st.runTag=0,st.members=[],xu(),ne="ready",Qn(!1),U("finished").hidden=!0,U("paused").hidden=!0,U("countdown").hidden=!0,U("welcome").hidden=!1,Bi.classList.add("menu-open"),Rc(),fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),keepalive:!0}).catch(()=>{})}U("roomBtn").onclick=U("welcomeRoom").onclick=Jr,U("closeRoom").onclick=()=>_s("roomPanel"),U("createRoom").onclick=()=>vu("create"),U("joinRoom").onclick=()=>vu("join"),U("readyRoom").onclick=()=>yu("ready",{ready:!st.ready}),U("startRoom").onclick=()=>yu(st.room?.status!=="lobby"?"reset":"start"),U("leaveRoom").onclick=sp,U("copyRoom").onclick=async()=>{if(!st.room)return;let a=new URL(location.href);a.searchParams.set("room",st.room.code);try{await navigator.clipboard.writeText(a.toString()),U("roomStatus").textContent="\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5373\u53EF\u52A0\u5165"}catch{U("roomStatus").textContent="\u623F\u95F4\u7801 "+st.room.code+" \xB7 \u590D\u5236\u6D4F\u89C8\u5668\u5730\u5740\u5E76\u52A0\u4E0A ?room="+st.room.code}};try{U("roomName").value=localStorage.getItem("star-rush-name")||"\u8F66\u624B"+Math.floor(100+Math.random()*900)}catch{}let bu=new URLSearchParams(location.search).get("room");bu&&(U("roomCode").value=bu.toUpperCase().slice(0,6),Jr()),window.addEventListener("pagehide",()=>{st.room&&navigator.sendBeacon("/api/rooms",new Blob([JSON.stringify({action:"leave",id:st.id,code:st.room.code})],{type:"application/json"}))});let Wn=[],Vi=!1,Gi=null,Pc={drawCalls:0,triangles:0},xs=!1,Ai=null,Ei=null,vs=0,oo=[],lo=0,co=[],Zs=[],ys=1,Zr=1,Ks=null,ho=0,ap=["Aoi / AI","Haru / AI","Rin / AI"],Tu=["#f0a7c8","#b6a7e6","#f1cd90"],wu=["#a5dbe6","#f0b7c3"].map(a=>{let l=new G;return mt(l,[-.6,.03,-.38],[.1,.03,0],.055,a),mt(l,[.1,.03,0],[-.6,.03,.38],.055,a),l.finish()}),Ic=Array.from({length:9},()=>new re(wu[0]));for(let a of Ic)a.shadow=!1;let $s=[],Lc=0,Lu=performance.now(),Dc={},Nc=!1,Du={quality:"auto",sensitivity:1,fov:62,autoGas:!1,line:!0,ghost:!0},nn={...Du},Qe={name:"\u8F66\u624B"+Math.floor(100+Math.random()*900),paint:"#83cde4",car:"Mint Comet"},Ci="race";try{Object.assign(nn,JSON.parse(localStorage.getItem("star-rush-settings-reborn")||"{}")),Object.assign(Qe,JSON.parse(localStorage.getItem("star-rush-profile")||"{}")),Qe.name=localStorage.getItem("star-rush-name")||Qe.name}catch{}let fp=[["Mint Comet","#83cde4","\u8584\u8377\u5F57\u661F"],["Sakura Bloom","#efabc8","\u6A31\u82B1\u7EFD\u653E"],["Violet Hour","#b1a0df","\u66AE\u8272\u7D2B"],["Solar Flare","#edc784","\u65E5\u5149\u91D1"]];U("settingsBtn").onclick=()=>{Uc(),Js("settingsPanel")},U("closeSettings").onclick=()=>_s("settingsPanel");for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).onchange=d=>{nn[l]=d.target.checked,Kr()};U("qualitySetting").onchange=a=>{nn.quality=a.target.value,Kr()},U("steeringSetting").oninput=a=>{nn.sensitivity=Number(a.target.value)/100,Kr()},U("fovSetting").oninput=a=>{nn.fov=Number(a.target.value),Kr()},U("resetSettings").onclick=()=>{nn={...Du},Kr(),Uc()};for(let[a,l,d]of fp){let m=document.createElement("button");m.type="button",m.style.setProperty("--paint",l),m.setAttribute("aria-label",d+"\u6D82\u88C5");let b=document.createElement("i"),A=document.createElement("b"),C=document.createElement("small");A.textContent=a,C.textContent=d,m.append(b,A,C),m.onclick=()=>{Qe.paint=l,Qe.car=a;for(let F of U("garageGrid").children)F.classList.toggle("selected",F===m);fo()},Qe.paint===l&&m.classList.add("selected"),U("garageGrid").appendChild(m)}U("garageBtn").onclick=()=>Js("garagePanel"),U("closeGarage").onclick=()=>_s("garagePanel"),U("saveProfile").onclick=fo,U("profileName").value=Qe.name,fo(),U("eventType").onchange=a=>{Ci=a.target.value,Ci==="practice"&&mu("academy-reborn")},U("pauseHome").onclick=Nu,U("newRouteBtn").onclick=Nu,U("demoBtn").onclick=()=>{Xs(!1),Vi=!0,gn("DEMO DRIVE","\u81EA\u52A8\u8BD5\u9A7E \xB7 \u6309\u4EFB\u610F\u65B9\u5411\u952E\u63A5\u7BA1",2)},window.addEventListener("keydown",a=>{a.target.closest("input,select,textarea")||["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a.code)&&Vi&&(Vi=!1,Gi=null,gn("YOUR TURN","\u5DF2\u63A5\u7BA1\u8D5B\u8F66",1))}),U("compatNotice").hidden=!h,pp(),Uc(),uo();for(let a of["racerName","roomName"])U(a).addEventListener("change",()=>{U("profileName").value=U(a).value,fo()});bf(document,{"coast-reborn":"/assets/course-art/coast-v2.bd2e4837727f.webp","sakura-reborn":"/assets/course-art/sakura-v1.3b94eedaa6d8.webp","academy-reborn":"/assets/course-art/academy-v1.9c6071e18e14.webp"})}catch(o){console.error(o),n("\u6E38\u620F\u521D\u59CB\u5316\u5F02\u5E38\uFF1A"+o.message)}})();})();
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
