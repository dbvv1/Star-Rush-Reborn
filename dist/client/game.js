(()=>{function Bu(i,t,e,{fetchImpl:n=globalThis.fetch,timeoutMs:s=5e3}={}){let r=new Map,o={light:"idle",medium:"idle"},c=new Set,u=null,h=!1,g="none",y=0,f=new Set;function M(){return u||(u=Promise.all(["light","medium"].map(async p=>{if(h)return;o[p]="loading";let U=new AbortController;f.add(U);let O;try{let E=(async()=>{if(typeof e[p]!="string"||!e[p].startsWith("/assets/impact-audio/"))throw Error("Missing rail asset");let P=await n(e[p],{signal:U.signal});if(!P.ok)throw Error("Rail asset HTTP error");let z=await P.arrayBuffer();if(z.byteLength>5e4)throw Error("Rail asset oversized");let w=await i.decodeAudioData(z);if(!(w.duration>0&&w.duration<=1)||w.numberOfChannels!==1)throw Error("Invalid rail clip");return w})(),R=await Promise.race([E,new Promise((P,z)=>{O=setTimeout(()=>{U.abort(),z(Error("Rail asset timeout"))},s)})]);h||(r.set(p,R),o[p]="ready")}catch{h||(o[p]="fallback")}finally{clearTimeout(O),f.delete(U)}})),u)}function T(){for(let p of[...c]){try{p.source.stop()}catch{}p.cleanup()}}function D(p){if(h||i.state!=="running"||!Number.isFinite(p)||p<.7)return!1;let U=p>5?"medium":"light",O=r.get(U);if(!O)return g=U+" fallback",!1;if(c.size>=4){let z=c.values().next().value;try{z.source.stop()}catch{}z.cleanup()}let E,R,P;try{return E=i.createBufferSource(),R=i.createGain(),E.buffer=O,R.gain.value=.15,E.connect(R),R.connect(t),P={source:E,cleanup(){c.delete(P),E.onended=null,E.disconnect(),R.disconnect()}},E.onended=()=>P.cleanup(),c.add(P),E.start(),E.stop(i.currentTime+O.duration+.02),g=U,y++,!0}catch{return P?P.cleanup():(E?.disconnect(),R?.disconnect()),g=U+" fallback",!1}}function v(){h=!0;for(let p of f)p.abort();T(),r.clear()}return{load:M,play:D,stop:T,dispose:v,status:()=>({states:{...o},active:c.size,last:g,played:y})}}var ld=0,fh=1,cd=2;var Aa=1,fl=2,br=3,is=0,pn=1,yi=2,Mi=0,wr=1,ph=2,mh=3,gh=4,hd=5;var Ls=100,ud=101,dd=102,fd=103,pd=104,md=200,gd=201,_d=202,xd=203,_h=204,xh=205,vd=206,yd=207,Md=208,Sd=209,bd=210,wd=211,Td=212,Ad=213,Ed=214,Uo=0,Fo=1,Oo=2,mr=3,Bo=4,ko=5,zo=6,Vo=7,vh=0,Cd=1,Rd=2,si=0,yh=1,Mh=2,Sh=3,Ea=4,bh=5,wh=6,Th=7;var Ah=300,ss=301,Ds=302,pl=303,ml=304,Ca=306,Go=1e3,mi=1001,Ho=1002,$e=1003,Pd=1004;var Ra=1005;var fn=1006,gl=1007;var rs=1008;var Dn=1009,Eh=1010,Ch=1011,Tr=1012,_l=1013,ri=1014,Yn=1015,ai=1016,xl=1017,vl=1018,Ar=1020,Rh=35902,Ph=35899,Ih=1021,Lh=1022,Jn=1023,gi=1026,as=1027,Er=1028,yl=1029,os=1030,Ml=1031;var Sl=1033,Pa=33776,Ia=33777,La=33778,Da=33779,bl=35840,wl=35841,Tl=35842,Al=35843,El=36196,Cl=37492,Rl=37496,Pl=37488,Il=37489,Na=37490,Ll=37491,Dl=37808,Nl=37809,Ul=37810,Fl=37811,Ol=37812,Bl=37813,kl=37814,zl=37815,Vl=37816,Gl=37817,Hl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,Jl=36494,Zl=36495,Kl=36283,$l=36284,Ua=36285,jl=36286;var ia=2300,Wo=2301,Do=2302,ah=2303,oh=2400,lh=2401,ch=2402;var Id=3200;var Ql=0,Ld=1,Di="",Cn="srgb",sa="srgb-linear",ra="linear",De="srgb";var No=7680;var Dd=519,Nd=512,Ud=513,Fd=514,tc=515,Od=516,Bd=517,ec=518,kd=519,zd=35044,Dh=35048;var Nh="300 es",ii=2e3,gr=2001;function wp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){let i=aa("canvas");return i.style.display="block",i}var ku={},_r=null;function Uh(...i){let t="THREE."+i.shift();_r?_r("log",t,...i):console.log(t,...i)}function Gd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function se(...i){i=Gd(i);let t="THREE."+i.shift();if(_r)_r("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=Gd(i);let t="THREE."+i.shift();if(_r)_r("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ps(...i){let t=i.join(" ");t in ku||(ku[t]=!0,se(...i))}function Hd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wd={[Uo]:Fo,[Oo]:zo,[Bo]:Vo,[mr]:ko,[Fo]:Uo,[zo]:Oo,[Vo]:Bo,[ko]:mr},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oc=Math.PI/180,Xo=180/Math.PI;function Fa(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[e&63|128]+vn[e>>8&255]+"-"+vn[e>>16&255]+vn[e>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Ap(i,t){return(i%t+t)%t}function Bc(i,t,e){return(1-e)*i+e*t}function Kr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var we=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,c){let u=n[s+0],h=n[s+1],g=n[s+2],y=n[s+3],f=r[o+0],M=r[o+1],T=r[o+2],D=r[o+3];if(y!==D||u!==f||h!==M||g!==T){let v=u*f+h*M+g*T+y*D;v<0&&(f=-f,M=-M,T=-T,D=-D,v=-v);let p=1-c;if(v<.9995){let U=Math.acos(v),O=Math.sin(U);p=Math.sin(p*U)/O,c=Math.sin(c*U)/O,u=u*p+f*c,h=h*p+M*c,g=g*p+T*c,y=y*p+D*c}else{u=u*p+f*c,h=h*p+M*c,g=g*p+T*c,y=y*p+D*c;let U=1/Math.sqrt(u*u+h*h+g*g+y*y);u*=U,h*=U,g*=U,y*=U}}t[e]=u,t[e+1]=h,t[e+2]=g,t[e+3]=y}static multiplyQuaternionsFlat(t,e,n,s,r,o){let c=n[s],u=n[s+1],h=n[s+2],g=n[s+3],y=r[o],f=r[o+1],M=r[o+2],T=r[o+3];return t[e]=c*T+g*y+u*M-h*f,t[e+1]=u*T+g*f+h*y-c*M,t[e+2]=h*T+g*M+c*f-u*y,t[e+3]=g*T-c*y-u*f-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,c=Math.cos,u=Math.sin,h=c(n/2),g=c(s/2),y=c(r/2),f=u(n/2),M=u(s/2),T=u(r/2);switch(o){case"XYZ":this._x=f*g*y+h*M*T,this._y=h*M*y-f*g*T,this._z=h*g*T+f*M*y,this._w=h*g*y-f*M*T;break;case"YXZ":this._x=f*g*y+h*M*T,this._y=h*M*y-f*g*T,this._z=h*g*T-f*M*y,this._w=h*g*y+f*M*T;break;case"ZXY":this._x=f*g*y-h*M*T,this._y=h*M*y+f*g*T,this._z=h*g*T+f*M*y,this._w=h*g*y-f*M*T;break;case"ZYX":this._x=f*g*y-h*M*T,this._y=h*M*y+f*g*T,this._z=h*g*T-f*M*y,this._w=h*g*y+f*M*T;break;case"YZX":this._x=f*g*y+h*M*T,this._y=h*M*y+f*g*T,this._z=h*g*T-f*M*y,this._w=h*g*y-f*M*T;break;case"XZY":this._x=f*g*y-h*M*T,this._y=h*M*y-f*g*T,this._z=h*g*T+f*M*y,this._w=h*g*y+f*M*T;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],c=e[5],u=e[9],h=e[2],g=e[6],y=e[10],f=n+c+y;if(f>0){let M=.5/Math.sqrt(f+1);this._w=.25/M,this._x=(g-u)*M,this._y=(r-h)*M,this._z=(o-s)*M}else if(n>c&&n>y){let M=2*Math.sqrt(1+n-c-y);this._w=(g-u)/M,this._x=.25*M,this._y=(s+o)/M,this._z=(r+h)/M}else if(c>y){let M=2*Math.sqrt(1+c-n-y);this._w=(r-h)/M,this._x=(s+o)/M,this._y=.25*M,this._z=(u+g)/M}else{let M=2*Math.sqrt(1+y-n-c);this._w=(o-s)/M,this._x=(r+h)/M,this._y=(u+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=e._x,u=e._y,h=e._z,g=e._w;return this._x=n*g+o*c+s*h-r*u,this._y=s*g+o*u+r*c-n*h,this._z=r*g+o*h+n*u-s*c,this._w=o*g-n*c-s*u-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=this.dot(t);c<0&&(n=-n,s=-s,r=-r,o=-o,c=-c);let u=1-e;if(c<.9995){let h=Math.acos(c),g=Math.sin(h);u=Math.sin(u*h)/g,e=Math.sin(e*h)/g,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},et=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,c=t.z,u=t.w,h=2*(o*s-c*n),g=2*(c*e-r*s),y=2*(r*n-o*e);return this.x=e+u*h+o*y-c*g,this.y=n+u*g+c*h-r*y,this.z=s+u*y+r*g-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,c=e.y,u=e.z;return this.x=s*u-r*c,this.y=r*o-n*u,this.z=n*c-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kc.copy(this).projectOnVector(t),this.sub(kc)}reflect(t){return this.sub(kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kc=new et,zu=new xi,ce=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,c,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,u,h)}set(t,e,n,s,r,o,c,u,h){let g=this.elements;return g[0]=t,g[1]=s,g[2]=c,g[3]=e,g[4]=r,g[5]=u,g[6]=n,g[7]=o,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],g=n[4],y=n[7],f=n[2],M=n[5],T=n[8],D=s[0],v=s[3],p=s[6],U=s[1],O=s[4],E=s[7],R=s[2],P=s[5],z=s[8];return r[0]=o*D+c*U+u*R,r[3]=o*v+c*O+u*P,r[6]=o*p+c*E+u*z,r[1]=h*D+g*U+y*R,r[4]=h*v+g*O+y*P,r[7]=h*p+g*E+y*z,r[2]=f*D+M*U+T*R,r[5]=f*v+M*O+T*P,r[8]=f*p+M*E+T*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],g=t[8];return e*o*g-e*c*h-n*r*g+n*c*u+s*r*h-s*o*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],g=t[8],y=g*o-c*h,f=c*u-g*r,M=h*r-o*u,T=e*y+n*f+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);let D=1/T;return t[0]=y*D,t[1]=(s*h-g*n)*D,t[2]=(c*n-s*o)*D,t[3]=f*D,t[4]=(g*e-s*u)*D,t[5]=(s*r-c*e)*D,t[6]=M*D,t[7]=(n*u-h*e)*D,t[8]=(o*e-n*r)*D,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,c){let u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*o+h*c)+o+t,-s*h,s*u,-s*(-h*o+u*c)+c+e,0,0,1),this}scale(t,e){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(t,e)),this}rotate(t){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-t)),this}translate(t,e){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zc=new ce,Vu=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ep(){let i={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===De&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===De&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?ra:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sa]:{primaries:t,whitePoint:n,transfer:ra,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:De,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),i}var ye=Ep();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var tr,qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{tr===void 0&&(tr=aa("canvas")),tr.width=t.width,tr.height=t.height;let s=tr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=tr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=aa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cp=0,xr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Fa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(Vc(s[o].image)):r.push(Vc(s[o]))}else r=Vc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}var Rp=0,Gc=new et,In=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=fn,o=rs,c=Jn,u=Dn,h=i.DEFAULT_ANISOTROPY,g=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Fa(),this.name="",this.source=new xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Go:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Go:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Ah;In.DEFAULT_ANISOTROPY=1;var qe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,u=t.elements,h=u[0],g=u[4],y=u[8],f=u[1],M=u[5],T=u[9],D=u[2],v=u[6],p=u[10];if(Math.abs(g-f)<.01&&Math.abs(y-D)<.01&&Math.abs(T-v)<.01){if(Math.abs(g+f)<.1&&Math.abs(y+D)<.1&&Math.abs(T+v)<.1&&Math.abs(h+M+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let O=(h+1)/2,E=(M+1)/2,R=(p+1)/2,P=(g+f)/4,z=(y+D)/4,w=(T+v)/4;return O>E&&O>R?O<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(O),s=P/n,r=z/n):E>R?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=P/s,r=w/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=z/r,s=w/r),this.set(n,s,r,e),this}let U=Math.sqrt((v-T)*(v-T)+(y-D)*(y-D)+(f-g)*(f-g));return Math.abs(U)<.001&&(U=1),this.x=(v-T)/U,this.y=(y-D)/U,this.z=(f-g)/U,this.w=Math.acos((h+M+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new In(s),o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new xr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Yo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},oa=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Be=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,c,u,h,g,y,f,M,T,D,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,u,h,g,y,f,M,T,D,v)}set(t,e,n,s,r,o,c,u,h,g,y,f,M,T,D,v){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=c,p[13]=u,p[2]=h,p[6]=g,p[10]=y,p[14]=f,p[3]=M,p[7]=T,p[11]=D,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),o=1/er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s),g=Math.cos(r),y=Math.sin(r);if(t.order==="XYZ"){let f=o*g,M=o*y,T=c*g,D=c*y;e[0]=u*g,e[4]=-u*y,e[8]=h,e[1]=M+T*h,e[5]=f-D*h,e[9]=-c*u,e[2]=D-f*h,e[6]=T+M*h,e[10]=o*u}else if(t.order==="YXZ"){let f=u*g,M=u*y,T=h*g,D=h*y;e[0]=f+D*c,e[4]=T*c-M,e[8]=o*h,e[1]=o*y,e[5]=o*g,e[9]=-c,e[2]=M*c-T,e[6]=D+f*c,e[10]=o*u}else if(t.order==="ZXY"){let f=u*g,M=u*y,T=h*g,D=h*y;e[0]=f-D*c,e[4]=-o*y,e[8]=T+M*c,e[1]=M+T*c,e[5]=o*g,e[9]=D-f*c,e[2]=-o*h,e[6]=c,e[10]=o*u}else if(t.order==="ZYX"){let f=o*g,M=o*y,T=c*g,D=c*y;e[0]=u*g,e[4]=T*h-M,e[8]=f*h+D,e[1]=u*y,e[5]=D*h+f,e[9]=M*h-T,e[2]=-h,e[6]=c*u,e[10]=o*u}else if(t.order==="YZX"){let f=o*u,M=o*h,T=c*u,D=c*h;e[0]=u*g,e[4]=D-f*y,e[8]=T*y+M,e[1]=y,e[5]=o*g,e[9]=-c*g,e[2]=-h*g,e[6]=M*y+T,e[10]=f-D*y}else if(t.order==="XZY"){let f=o*u,M=o*h,T=c*u,D=c*h;e[0]=u*g,e[4]=-y,e[8]=h*g,e[1]=f*y+D,e[5]=o*g,e[9]=M*y-T,e[2]=T*y-M,e[6]=c*g,e[10]=D*y+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pp,t,Ip)}lookAt(t,e,n){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Wi.crossVectors(n,On),Wi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Wi.crossVectors(n,On)),Wi.normalize(),fo.crossVectors(On,Wi),s[0]=Wi.x,s[4]=fo.x,s[8]=On.x,s[1]=Wi.y,s[5]=fo.y,s[9]=On.y,s[2]=Wi.z,s[6]=fo.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],g=n[1],y=n[5],f=n[9],M=n[13],T=n[2],D=n[6],v=n[10],p=n[14],U=n[3],O=n[7],E=n[11],R=n[15],P=s[0],z=s[4],w=s[8],L=s[12],V=s[1],X=s[5],$=s[9],Q=s[13],W=s[2],nt=s[6],dt=s[10],lt=s[14],xt=s[3],J=s[7],ct=s[11],ft=s[15];return r[0]=o*P+c*V+u*W+h*xt,r[4]=o*z+c*X+u*nt+h*J,r[8]=o*w+c*$+u*dt+h*ct,r[12]=o*L+c*Q+u*lt+h*ft,r[1]=g*P+y*V+f*W+M*xt,r[5]=g*z+y*X+f*nt+M*J,r[9]=g*w+y*$+f*dt+M*ct,r[13]=g*L+y*Q+f*lt+M*ft,r[2]=T*P+D*V+v*W+p*xt,r[6]=T*z+D*X+v*nt+p*J,r[10]=T*w+D*$+v*dt+p*ct,r[14]=T*L+D*Q+v*lt+p*ft,r[3]=U*P+O*V+E*W+R*xt,r[7]=U*z+O*X+E*nt+R*J,r[11]=U*w+O*$+E*dt+R*ct,r[15]=U*L+O*Q+E*lt+R*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],c=t[5],u=t[9],h=t[13],g=t[2],y=t[6],f=t[10],M=t[14],T=t[3],D=t[7],v=t[11],p=t[15],U=u*M-h*f,O=c*M-h*y,E=c*f-u*y,R=o*M-h*g,P=o*f-u*g,z=o*y-c*g;return e*(D*U-v*O+p*E)-n*(T*U-v*R+p*P)+s*(T*O-D*R+p*z)-r*(T*E-D*P+v*z)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],c=t[9],u=t[2],h=t[6],g=t[10];return e*(o*g-c*h)-n*(r*g-c*u)+s*(r*h-o*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],g=t[8],y=t[9],f=t[10],M=t[11],T=t[12],D=t[13],v=t[14],p=t[15],U=e*c-n*o,O=e*u-s*o,E=e*h-r*o,R=n*u-s*c,P=n*h-r*c,z=s*h-r*u,w=g*D-y*T,L=g*v-f*T,V=g*p-M*T,X=y*v-f*D,$=y*p-M*D,Q=f*p-M*v,W=U*Q-O*$+E*X+R*V-P*L+z*w;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let nt=1/W;return t[0]=(c*Q-u*$+h*X)*nt,t[1]=(s*$-n*Q-r*X)*nt,t[2]=(D*z-v*P+p*R)*nt,t[3]=(f*P-y*z-M*R)*nt,t[4]=(u*V-o*Q-h*L)*nt,t[5]=(e*Q-s*V+r*L)*nt,t[6]=(v*E-T*z-p*O)*nt,t[7]=(g*z-f*E+M*O)*nt,t[8]=(o*$-c*V+h*w)*nt,t[9]=(n*V-e*$-r*w)*nt,t[10]=(T*P-D*E+p*U)*nt,t[11]=(y*E-g*P-M*U)*nt,t[12]=(c*L-o*X-u*w)*nt,t[13]=(e*X-n*L+s*w)*nt,t[14]=(D*O-T*R-v*U)*nt,t[15]=(g*R-y*O+f*U)*nt,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,c=t.y,u=t.z,h=r*o,g=r*c;return this.set(h*o+n,h*c-s*u,h*u+s*c,0,h*c+s*u,g*c+n,g*u-s*o,0,h*u-s*c,g*u+s*o,r*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,c=e._z,u=e._w,h=r+r,g=o+o,y=c+c,f=r*h,M=r*g,T=r*y,D=o*g,v=o*y,p=c*y,U=u*h,O=u*g,E=u*y,R=n.x,P=n.y,z=n.z;return s[0]=(1-(D+p))*R,s[1]=(M+E)*R,s[2]=(T-O)*R,s[3]=0,s[4]=(M-E)*P,s[5]=(1-(f+p))*P,s[6]=(v+U)*P,s[7]=0,s[8]=(T+O)*z,s[9]=(v-U)*z,s[10]=(1-(f+D))*z,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=er.set(s[0],s[1],s[2]).length(),c=er.set(s[4],s[5],s[6]).length(),u=er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qn.copy(this);let h=1/o,g=1/c,y=1/u;return Qn.elements[0]*=h,Qn.elements[1]*=h,Qn.elements[2]*=h,Qn.elements[4]*=g,Qn.elements[5]*=g,Qn.elements[6]*=g,Qn.elements[8]*=y,Qn.elements[9]*=y,Qn.elements[10]*=y,e.setFromRotationMatrix(Qn),n.x=o,n.y=c,n.z=u,this}makePerspective(t,e,n,s,r,o,c=ii,u=!1){let h=this.elements,g=2*r/(e-t),y=2*r/(n-s),f=(e+t)/(e-t),M=(n+s)/(n-s),T,D;if(u)T=r/(o-r),D=o*r/(o-r);else if(c===ii)T=-(o+r)/(o-r),D=-2*o*r/(o-r);else if(c===gr)T=-o/(o-r),D=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=g,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=y,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,c=ii,u=!1){let h=this.elements,g=2/(e-t),y=2/(n-s),f=-(e+t)/(e-t),M=-(n+s)/(n-s),T,D;if(u)T=1/(o-r),D=o/(o-r);else if(c===ii)T=-2/(o-r),D=-(o+r)/(o-r);else if(c===gr)T=-1/(o-r),D=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=g,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=y,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=T,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},er=new et,Qn=new Be,Pp=new et(0,0,0),Ip=new et(1,1,1),Wi=new et,fo=new et,On=new et,Hu=new Be,Wu=new xi,Ki=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],c=s[8],u=s[1],h=s[5],g=s[9],y=s[2],f=s[6],M=s[10];switch(e){case"XYZ":this._y=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-y,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-be(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(f,M),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-y,r)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-g,M),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";var la=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lp=0,Xu=new et,nr=new xi,Ei=new Be,po=new et,$r=new et,Dp=new et,Np=new xi,qu=new et(1,0,0),Yu=new et(0,1,0),Ju=new et(0,0,1),Zu={type:"added"},Up={type:"removed"},ir={type:"childadded",child:null},Hc={type:"childremoved",child:null},Sn=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new et,e=new Ki,n=new xi,s=new et(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new ce}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(qu,t)}rotateY(t){return this.rotateOnAxis(Yu,t)}rotateZ(t){return this.rotateOnAxis(Ju,t)}translateOnAxis(t,e){return Xu.copy(t).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qu,t)}translateY(t){return this.translateOnAxis(Yu,t)}translateZ(t){return this.translateOnAxis(Ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?po.copy(t):po.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt($r,po,this.up):Ei.lookAt(po,$r,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Ei),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),ir.child=t,this.dispatchEvent(ir),ir.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Up),Hc.child=t,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,Dp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let u=c.shapes;if(Array.isArray(u))for(let h=0,g=u.length;h<g;h++){let y=u[h];r(t.shapes,y)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(r(t.materials,this.material[u]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let u=this.animations[c];s.animations.push(r(t.animations,u))}}if(e){let c=o(t.geometries),u=o(t.materials),h=o(t.textures),g=o(t.images),y=o(t.shapes),f=o(t.skeletons),M=o(t.animations),T=o(t.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),g.length>0&&(n.images=g),y.length>0&&(n.shapes=y),f.length>0&&(n.skeletons=f),M.length>0&&(n.animations=M),T.length>0&&(n.nodes=T)}return n.object=s,n;function o(c){let u=[];for(let h in c){let g=c[h];delete g.metadata,u.push(g)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Sn.DEFAULT_UP=new et(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rs=class extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fp={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,c=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let D of t.hand.values()){let v=e.getJointPose(D,n),p=this._getHandJoint(h,D);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}let g=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],f=g.position.distanceTo(y.position),M=.02,T=.005;h.inputState.pinching&&f>M+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=M-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return c!==null&&(c.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Rs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Wc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ue=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ye.workingColorSpace){if(t=Ap(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wc(o,r,t+1/3),this.g=Wc(o,r,t),this.b=Wc(o,r,t-1/3)}return ye.colorSpaceToWorking(this,s),this}setStyle(t,e=Cn){function n(r){r!==void 0&&parseFloat(r)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){let n=Xd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return ye.workingToColorSpace(yn.copy(this),t),Math.round(be(yn.r*255,0,255))*65536+Math.round(be(yn.g*255,0,255))*256+Math.round(be(yn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(yn.copy(this),e);let n=yn.r,s=yn.g,r=yn.b,o=Math.max(n,s,r),c=Math.min(n,s,r),u,h,g=(c+o)/2;if(c===o)u=0,h=0;else{let y=o-c;switch(h=g<=.5?y/(o+c):y/(2-o-c),o){case n:u=(s-r)/y+(s<r?6:0);break;case s:u=(r-n)/y+2;break;case r:u=(n-s)/y+4;break}u/=6}return t.h=u,t.s=h,t.l=g,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=Cn){ye.workingToColorSpace(yn.copy(this),t);let e=yn.r,n=yn.g,s=yn.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(mo);let n=Bc(Xi.h,mo.h,e),s=Bc(Xi.s,mo.s,e),r=Bc(Xi.l,mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new ue;ue.NAMES=Xd;var ca=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ha=class extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ti=new et,Ci=new et,Xc=new et,Ri=new et,sr=new et,rr=new et,Ku=new et,qc=new et,Yc=new et,Jc=new et,Zc=new qe,Kc=new qe,$c=new qe,Zi=class i{constructor(t=new et,e=new et,n=new et){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ti.subVectors(t,e),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ti.subVectors(s,e),Ci.subVectors(n,e),Xc.subVectors(t,e);let o=ti.dot(ti),c=ti.dot(Ci),u=ti.dot(Xc),h=Ci.dot(Ci),g=Ci.dot(Xc),y=o*h-c*c;if(y===0)return r.set(0,0,0),null;let f=1/y,M=(h*u-c*g)*f,T=(o*g-c*u)*f;return r.set(1-M-T,T,M)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,s,r,o,c,u){return this.getBarycoord(t,e,n,s,Ri)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Ri.x),u.addScaledVector(o,Ri.y),u.addScaledVector(c,Ri.z),u)}static getInterpolatedAttribute(t,e,n,s,r,o){return Zc.setScalar(0),Kc.setScalar(0),$c.setScalar(0),Zc.fromBufferAttribute(t,e),Kc.fromBufferAttribute(t,n),$c.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zc,r.x),o.addScaledVector(Kc,r.y),o.addScaledVector($c,r.z),o}static isFrontFacing(t,e,n,s){return ti.subVectors(n,e),Ci.subVectors(t,e),ti.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ti.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,c;sr.subVectors(s,n),rr.subVectors(r,n),qc.subVectors(t,n);let u=sr.dot(qc),h=rr.dot(qc);if(u<=0&&h<=0)return e.copy(n);Yc.subVectors(t,s);let g=sr.dot(Yc),y=rr.dot(Yc);if(g>=0&&y<=g)return e.copy(s);let f=u*y-g*h;if(f<=0&&u>=0&&g<=0)return o=u/(u-g),e.copy(n).addScaledVector(sr,o);Jc.subVectors(t,r);let M=sr.dot(Jc),T=rr.dot(Jc);if(T>=0&&M<=T)return e.copy(r);let D=M*h-u*T;if(D<=0&&h>=0&&T<=0)return c=h/(h-T),e.copy(n).addScaledVector(rr,c);let v=g*T-M*y;if(v<=0&&y-g>=0&&M-T>=0)return Ku.subVectors(r,s),c=(y-g)/(y-g+(M-T)),e.copy(s).addScaledVector(Ku,c);let p=1/(v+D+f);return o=D*p,c=f*p,e.copy(n).addScaledVector(sr,o).addScaledVector(rr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vi=class{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)t.isMesh===!0?t.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),_o.subVectors(this.max,jr),ar.subVectors(t.a,jr),or.subVectors(t.b,jr),lr.subVectors(t.c,jr),qi.subVectors(or,ar),Yi.subVectors(lr,or),Ts.subVectors(ar,lr);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-Ts.z,Ts.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,Ts.z,0,-Ts.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-Ts.y,Ts.x,0];return!jc(e,ar,or,lr,_o)||(e=[1,0,0,0,1,0,0,0,1],!jc(e,ar,or,lr,_o))?!1:(xo.crossVectors(qi,Yi),e=[xo.x,xo.y,xo.z],jc(e,ar,or,lr,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pi=[new et,new et,new et,new et,new et,new et,new et,new et],ei=new et,go=new vi,ar=new et,or=new et,lr=new et,qi=new et,Yi=new et,Ts=new et,jr=new et,_o=new et,xo=new et,As=new et;function jc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){As.fromArray(i,r);let c=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),u=t.dot(As),h=e.dot(As),g=n.dot(As);if(Math.max(-Math.max(u,h,g),Math.min(u,h,g))>c)return!1}return!0}var tn=new et,vo=new we,Op=0,kn=class extends _i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zd,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Kr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array),r=Pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ua=class extends kn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var da=class extends kn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var an=class extends kn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bp=new vi,Qr=new et,Qc=new et,$i=class{constructor(t=new et,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(Qc)),this.expandByPoint(Qr.copy(t.center).sub(Qc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kp=0,qn=new Be,th=new Sn,cr=new et,Bn=new vi,ta=new vi,dn=new et,zn=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Fa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wp(t)?da:ua)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return th.lookAt(t),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let c=e[r];ta.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(Bn.min,ta.min),Bn.expandByPoint(dn),dn.addVectors(Bn.max,ta.max),Bn.expandByPoint(dn)):(Bn.expandByPoint(ta.min),Bn.expandByPoint(ta.max))}Bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){let c=e[r],u=this.morphTargetsRelative;for(let h=0,g=c.count;h<g;h++)dn.fromBufferAttribute(c,h),u&&(cr.fromBufferAttribute(t,h),dn.add(cr)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new kn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let c=[],u=[];for(let w=0;w<n.count;w++)c[w]=new et,u[w]=new et;let h=new et,g=new et,y=new et,f=new we,M=new we,T=new we,D=new et,v=new et;function p(w,L,V){h.fromBufferAttribute(n,w),g.fromBufferAttribute(n,L),y.fromBufferAttribute(n,V),f.fromBufferAttribute(r,w),M.fromBufferAttribute(r,L),T.fromBufferAttribute(r,V),g.sub(h),y.sub(h),M.sub(f),T.sub(f);let X=1/(M.x*T.y-T.x*M.y);isFinite(X)&&(D.copy(g).multiplyScalar(T.y).addScaledVector(y,-M.y).multiplyScalar(X),v.copy(y).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(X),c[w].add(D),c[L].add(D),c[V].add(D),u[w].add(v),u[L].add(v),u[V].add(v))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let w=0,L=U.length;w<L;++w){let V=U[w],X=V.start,$=V.count;for(let Q=X,W=X+$;Q<W;Q+=3)p(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let O=new et,E=new et,R=new et,P=new et;function z(w){R.fromBufferAttribute(s,w),P.copy(R);let L=c[w];O.copy(L),O.sub(R.multiplyScalar(R.dot(L))).normalize(),E.crossVectors(P,L);let X=E.dot(u[w])<0?-1:1;o.setXYZW(w,O.x,O.y,O.z,X)}for(let w=0,L=U.length;w<L;++w){let V=U[w],X=V.start,$=V.count;for(let Q=X,W=X+$;Q<W;Q+=3)z(t.getX(Q+0)),z(t.getX(Q+1)),z(t.getX(Q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new kn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,M=n.count;f<M;f++)n.setXYZ(f,0,0,0);let s=new et,r=new et,o=new et,c=new et,u=new et,h=new et,g=new et,y=new et;if(t)for(let f=0,M=t.count;f<M;f+=3){let T=t.getX(f+0),D=t.getX(f+1),v=t.getX(f+2);s.fromBufferAttribute(e,T),r.fromBufferAttribute(e,D),o.fromBufferAttribute(e,v),g.subVectors(o,r),y.subVectors(s,r),g.cross(y),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,v),c.add(g),u.add(g),h.add(g),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(D,u.x,u.y,u.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let f=0,M=e.count;f<M;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),g.subVectors(o,r),y.subVectors(s,r),g.cross(y),n.setXYZ(f+0,g.x,g.y,g.z),n.setXYZ(f+1,g.x,g.y,g.z),n.setXYZ(f+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(c,u){let h=c.array,g=c.itemSize,y=c.normalized,f=new h.constructor(u.length*g),M=0,T=0;for(let D=0,v=u.length;D<v;D++){c.isInterleavedBufferAttribute?M=u[D]*c.data.stride+c.offset:M=u[D]*g;for(let p=0;p<g;p++)f[T++]=h[M++]}return new kn(f,g,y)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let u=s[c],h=t(u,n);e.setAttribute(c,h)}let r=this.morphAttributes;for(let c in r){let u=[],h=r[c];for(let g=0,y=h.length;g<y;g++){let f=h[g],M=t(f,n);u.push(M)}e.morphAttributes[c]=u}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let h=n[u];t.data.attributes[u]=h.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],g=[];for(let y=0,f=h.length;y<f;y++){let M=h[y];g.push(M.toJSON(t.data))}g.length>0&&(s[u]=g,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let g=s[h];this.setAttribute(h,g.clone(e))}let r=t.morphAttributes;for(let h in r){let g=[],y=r[h];for(let f=0,M=y.length;f<M;f++)g.push(y[f].clone(e));this.morphAttributes[h]=g}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,g=o.length;h<g;h++){let y=o[h];this.addGroup(y.start,y.count,y.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var eh=new et,zp=new et,Vp=new ce,ni=class{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=eh.subVectors(n,e).cross(zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(eh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vp.getNormalMatrix(t),s=this.coplanarPoint(eh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gp=0,ji=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Fa(),this.name="",this.type="Material",this.blending=wr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=xh,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let u=r[c];delete u.metadata,o.push(u)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new we().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ii=new et,nh=new et,yo=new et,Mo=new et,Zo=class{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nh.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),Mo.copy(this.origin).sub(nh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(yo),c=Mo.dot(this.direction),u=-Mo.dot(yo),h=Mo.lengthSq(),g=Math.abs(1-o*o),y,f,M,T;if(g>0)if(y=o*u-c,f=o*c-u,T=r*g,y>=0)if(f>=-T)if(f<=T){let D=1/g;y*=D,f*=D,M=y*(y+o*f+2*c)+f*(o*y+f+2*u)+h}else f=r,y=Math.max(0,-(o*f+c)),M=-y*y+f*(f+2*u)+h;else f=-r,y=Math.max(0,-(o*f+c)),M=-y*y+f*(f+2*u)+h;else f<=-T?(y=Math.max(0,-(-o*r+c)),f=y>0?-r:Math.min(Math.max(-r,-u),r),M=-y*y+f*(f+2*u)+h):f<=T?(y=0,f=Math.min(Math.max(-r,-u),r),M=f*(f+2*u)+h):(y=Math.max(0,-(o*r+c)),f=y>0?r:Math.min(Math.max(-r,-u),r),M=-y*y+f*(f+2*u)+h);else f=o>0?-r:r,y=Math.max(0,-(o*f+c)),M=-y*y+f*(f+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,y),s&&s.copy(nh).addScaledVector(yo,f),M}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,c,u,h=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),g>=0?(r=(t.min.y-f.y)*g,o=(t.max.y-f.y)*g):(r=(t.max.y-f.y)*g,o=(t.min.y-f.y)*g),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),y>=0?(c=(t.min.z-f.z)*y,u=(t.max.z-f.z)*y):(c=(t.max.z-f.z)*y,u=(t.min.z-f.z)*y),n>u||c>s)||((c>n||n!==n)&&(n=c),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,c=this.direction,u=c.x,h=c.y,g=c.z,y=t.x-o.x,f=t.y-o.y,M=t.z-o.z,T=e.x-o.x,D=e.y-o.y,v=e.z-o.z,p=n.x-o.x,U=n.y-o.y,O=n.z-o.z,E=Math.abs(u),R=Math.abs(h),P=Math.abs(g),z,w,L,V,X,$,Q,W,nt,dt,lt,xt;if(E>=R&&E>=P?(L=u,$=y,nt=T,xt=p,u>=0?(z=h,w=g,V=f,X=M,Q=D,W=v,dt=U,lt=O):(z=g,w=h,V=M,X=f,Q=v,W=D,dt=O,lt=U)):R>=P?(L=h,$=f,nt=D,xt=U,h>=0?(z=g,w=u,V=M,X=y,Q=v,W=T,dt=O,lt=p):(z=u,w=g,V=y,X=M,Q=T,W=v,dt=p,lt=O)):(L=g,$=M,nt=v,xt=O,g>=0?(z=u,w=h,V=y,X=f,Q=T,W=D,dt=p,lt=U):(z=h,w=u,V=f,X=y,Q=D,W=T,dt=U,lt=p)),L===0)return null;let J=z/L,ct=w/L,ft=1/L,Ht=V-J*$,Zt=X-ct*$,Ue=Q-J*nt,Me=W-ct*nt,Ee=dt-J*xt,gt=lt-ct*xt,St=Ee*Me-gt*Ue,Vt=Ht*gt-Zt*Ee,oe=Ue*Zt-Me*Ht;if(s){if(St<0||Vt<0||oe<0)return null}else if((St<0||Vt<0||oe<0)&&(St>0||Vt>0||oe>0))return null;let Xt=St+Vt+oe;if(Xt===0)return null;let le=ft*(St*$+Vt*nt+oe*xt);return(Xt>0?le<0:le>0)?null:this.at(le/Xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fa=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$u=new Be,Es=new Zo,So=new $i,ju=new et,bo=new et,wo=new et,To=new et,ih=new et,Ao=new et,Qu=new et,Eo=new et,bn=class extends Sn{constructor(t=new zn,e=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){Ao.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let g=c[u],y=r[u];g!==0&&(ih.fromBufferAttribute(y,t),o?Ao.addScaledVector(ih,g):Ao.addScaledVector(ih.sub(e),g))}e.add(Ao)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),Es.copy(t.ray).recast(t.near),!(So.containsPoint(Es.origin)===!1&&(Es.intersectSphere(So,ju)===null||Es.origin.distanceToSquared(ju)>(t.far-t.near)**2))&&($u.copy(r).invert(),Es.copy(t.ray).applyMatrix4($u),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,c=r.index,u=r.attributes.position,h=r.attributes.uv,g=r.attributes.uv1,y=r.attributes.normal,f=r.groups,M=r.drawRange;if(c!==null)if(Array.isArray(o))for(let T=0,D=f.length;T<D;T++){let v=f[T],p=o[v.materialIndex],U=Math.max(v.start,M.start),O=Math.min(c.count,Math.min(v.start+v.count,M.start+M.count));for(let E=U,R=O;E<R;E+=3){let P=c.getX(E),z=c.getX(E+1),w=c.getX(E+2);s=Co(this,p,t,n,h,g,y,P,z,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let T=Math.max(0,M.start),D=Math.min(c.count,M.start+M.count);for(let v=T,p=D;v<p;v+=3){let U=c.getX(v),O=c.getX(v+1),E=c.getX(v+2);s=Co(this,o,t,n,h,g,y,U,O,E),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let T=0,D=f.length;T<D;T++){let v=f[T],p=o[v.materialIndex],U=Math.max(v.start,M.start),O=Math.min(u.count,Math.min(v.start+v.count,M.start+M.count));for(let E=U,R=O;E<R;E+=3){let P=E,z=E+1,w=E+2;s=Co(this,p,t,n,h,g,y,P,z,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{let T=Math.max(0,M.start),D=Math.min(u.count,M.start+M.count);for(let v=T,p=D;v<p;v+=3){let U=v,O=v+1,E=v+2;s=Co(this,o,t,n,h,g,y,U,O,E),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}};function Hp(i,t,e,n,s,r,o,c){let u;if(t.side===pn?u=n.intersectTriangle(o,r,s,!0,c):u=n.intersectTriangle(s,r,o,t.side===is,c),u===null)return null;Eo.copy(c),Eo.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Eo);return h<e.near||h>e.far?null:{distance:h,point:Eo.clone(),object:i}}function Co(i,t,e,n,s,r,o,c,u,h){i.getVertexPosition(c,bo),i.getVertexPosition(u,wo),i.getVertexPosition(h,To);let g=Hp(i,t,e,n,bo,wo,To,Qu);if(g){let y=new et;Zi.getBarycoord(Qu,bo,wo,To,y),s&&(g.uv=Zi.getInterpolatedAttribute(s,c,u,h,y,new we)),r&&(g.uv1=Zi.getInterpolatedAttribute(r,c,u,h,y,new we)),o&&(g.normal=Zi.getInterpolatedAttribute(o,c,u,h,y,new et),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));let f={a:c,b:u,c:h,normal:new et,materialIndex:0};Zi.getNormal(bo,wo,To,f.normal),g.face=f,g.barycoord=y}return g}var Is=class extends In{constructor(t=null,e=1,n=1,s,r,o,c,u,h=$e,g=$e,y,f){super(null,o,c,u,h,g,s,r,y,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pa=class extends kn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hr=new Be,td=new Be,Ro=[],ed=new vi,Wp=new Be,ea=new bn,na=new $i,ma=class extends bn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),ed.copy(t.boundingBox).applyMatrix4(hr),this.boundingBox.union(ed)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),na.copy(t.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let c=0;c<n.length;c++)n[c]=s[o+c]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),t.ray.intersectsSphere(na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),td.multiplyMatrices(n,hr),ea.matrixWorld=td,ea.raycast(t,Ro);for(let o=0,c=Ro.length;o<c;o++){let u=Ro[o];u.instanceId=r,u.object=this,e.push(u)}Ro.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Is(new Float32Array(s*this.count),s,this.count,Er,Yn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let c=this.geometry.morphTargetsRelative?1:1-o,u=s*t;return r[u]=c,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new $i,Xp=new we(.5,.5),Po=new et,yr=class{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){let s=this.planes,r=t.elements,o=r[0],c=r[1],u=r[2],h=r[3],g=r[4],y=r[5],f=r[6],M=r[7],T=r[8],D=r[9],v=r[10],p=r[11],U=r[12],O=r[13],E=r[14],R=r[15];if(s[0].setComponents(h-o,M-g,p-T,R-U).normalize(),s[1].setComponents(h+o,M+g,p+T,R+U).normalize(),s[2].setComponents(h+c,M+y,p+D,R+O).normalize(),s[3].setComponents(h-c,M-y,p-D,R-O).normalize(),n)s[4].setComponents(u,f,v,E).normalize(),s[5].setComponents(h-u,M-f,p-v,R-E).normalize();else if(s[4].setComponents(h-u,M-f,p-v,R-E).normalize(),e===ii)s[5].setComponents(h+u,M+f,p+v,R+E).normalize();else if(e===gr)s[5].setComponents(u,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);let e=Xp.distanceTo(t.center);return Cs.radius=.7071067811865476+e,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ga=class extends In{constructor(t=[],e=ss,n,s,r,o,c,u,h,g){super(t,e,n,s,r,o,c,u,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Qi=class extends In{constructor(t,e,n=ri,s,r,o,c=$e,u=$e,h,g=gi,y=1){if(g!==gi&&g!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:y};super(f,s,r,o,c,u,g,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ko=class extends Qi{constructor(t,e=ri,n=ss,s,r,o=$e,c=$e,u,h=gi){let g={width:t,height:t,depth:1},y=[g,g,g,g,g,g];super(t,t,e,n,s,r,o,c,u,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_a=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Mr=class i extends zn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let u=[],h=[],g=[],y=[],f=0,M=0;T("z","y","x",-1,-1,n,e,t,o,r,0),T("z","y","x",1,-1,n,e,-t,o,r,1),T("x","z","y",1,1,t,n,e,s,o,2),T("x","z","y",1,-1,t,n,-e,s,o,3),T("x","y","z",1,-1,t,e,n,s,r,4),T("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new an(h,3)),this.setAttribute("normal",new an(g,3)),this.setAttribute("uv",new an(y,2));function T(D,v,p,U,O,E,R,P,z,w,L){let V=E/z,X=R/w,$=E/2,Q=R/2,W=P/2,nt=z+1,dt=w+1,lt=0,xt=0,J=new et;for(let ct=0;ct<dt;ct++){let ft=ct*X-Q;for(let Ht=0;Ht<nt;Ht++){let Zt=Ht*V-$;J[D]=Zt*U,J[v]=ft*O,J[p]=W,h.push(J.x,J.y,J.z),J[D]=0,J[v]=0,J[p]=P>0?1:-1,g.push(J.x,J.y,J.z),y.push(Ht/z),y.push(1-ct/w),lt+=1}}for(let ct=0;ct<w;ct++)for(let ft=0;ft<z;ft++){let Ht=f+ft+nt*ct,Zt=f+ft+nt*(ct+1),Ue=f+(ft+1)+nt*(ct+1),Me=f+(ft+1)+nt*ct;u.push(Ht,Zt,Me),u.push(Zt,Ue,Me),xt+=6}c.addGroup(M,xt,L),M+=xt,f+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var xa=class i extends zn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,c=Math.floor(n),u=Math.floor(s),h=c+1,g=u+1,y=t/c,f=e/u,M=[],T=[],D=[],v=[];for(let p=0;p<g;p++){let U=p*f-o;for(let O=0;O<h;O++){let E=O*y-r;T.push(E,-U,0),D.push(0,0,1),v.push(O/c),v.push(1-p/u)}}for(let p=0;p<u;p++)for(let U=0;U<c;U++){let O=U+h*p,E=U+h*(p+1),R=U+1+h*(p+1),P=U+1+h*p;M.push(O,E,P),M.push(E,R,P)}this.setIndex(M),this.setAttribute("position",new an(T,3)),this.setAttribute("normal",new an(D,3)),this.setAttribute("uv",new an(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var va=class i extends zn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let u=Math.min(o+c,Math.PI),h=0,g=[],y=new et,f=new et,M=[],T=[],D=[],v=[];for(let p=0;p<=n;p++){let U=[],O=p/n,E=o+O*c,R=t*Math.cos(E),P=Math.sqrt(t*t-R*R),z=0;p===0&&o===0?z=.5/e:p===n&&u===Math.PI&&(z=-.5/e);for(let w=0;w<=e;w++){let L=w/e,V=s+L*r;y.x=-P*Math.cos(V),y.y=R,y.z=P*Math.sin(V),T.push(y.x,y.y,y.z),f.copy(y).normalize(),D.push(f.x,f.y,f.z),v.push(L+z,1-O),U.push(h++)}g.push(U)}for(let p=0;p<n;p++)for(let U=0;U<e;U++){let O=g[p][U+1],E=g[p][U],R=g[p+1][U],P=g[p+1][U+1];(p!==0||o>0)&&M.push(O,E,P),(p!==n-1||u<Math.PI)&&M.push(E,R,P)}this.setIndex(M),this.setAttribute("position",new an(T,3)),this.setAttribute("normal",new an(D,3)),this.setAttribute("uv",new an(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(nd(s))s.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(nd(s[0])){let r=[];for(let o=0,c=s.length;o<c;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function wn(i){let t={};for(let e=0;e<i.length;e++){let n=Ns(i[e]);for(let s in n)t[s]=n[s]}return t}function nd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var qd={clone:Ns,merge:wn},Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=qp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new we().fromArray(s.value);break;case"v3":this.uniforms[n].value=new et().fromArray(s.value);break;case"v4":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$o=class extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ya=class extends ji{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var jo=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qo=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ur(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function sh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let c=e[1];t<c&&(n=2,r=c);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let c=n+o>>>1;t<e[c]?o=c:n=c+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tl=class extends ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oh,endingEnd:oh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,c=s[r],u=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case lh:r=t,c=2*e-n;break;case ch:r=s.length-2,c=e+s[r]-s[r+1];break;default:r=t,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case lh:o=t,u=2*n-e;break;case ch:o=1,u=n+s[1]-s[0];break;default:o=t-1,u=e}let h=(n-e)*.5,g=this.valueSize;this._weightPrev=h/(e-c),this._weightNext=h/(u-n),this._offsetPrev=r*g,this._offsetNext=o*g}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,g=this._offsetPrev,y=this._offsetNext,f=this._weightPrev,M=this._weightNext,T=(n-e)/(s-e),D=T*T,v=D*T,p=-f*v+2*f*D-f*T,U=(1+f)*v+(-1.5-2*f)*D+(-.5+f)*T+1,O=(-1-M)*v+(1.5+M)*D+.5*T,E=M*v-M*D;for(let R=0;R!==c;++R)r[R]=p*o[g+R]+U*o[h+R]+O*o[u+R]+E*o[y+R];return r}},el=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,g=(n-e)/(s-e),y=1-g;for(let f=0;f!==c;++f)r[f]=o[h+f]*y+o[u+f]*g;return r}},nl=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},il=class extends ts{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,g=this.inTangents,y=this.outTangents;if(!g||!y){let T=(n-e)/(s-e),D=1-T;for(let v=0;v!==c;++v)r[v]=o[h+v]*D+o[u+v]*T;return r}let f=c*2,M=t-1;for(let T=0;T!==c;++T){let D=o[h+T],v=o[u+T],p=M*f+T*2,U=y[p],O=y[p+1],E=t*f+T*2,R=g[E],P=g[E+1],z=Kp(n,e,U,R,s);r[T]=Yd(z,D,O,P,v)}return r}};function Yd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Zp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Kp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let c=Yd(r,t,e,n,s)-i;if(Math.abs(c)<1e-10)break;let u=Zp(r,t,e,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-c/u))}return r}var Vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ur(e,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ur(t.times,Array),values:ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),sh(t.settings)&&(n.settings={inTangents:ur(t.settings.inTangents,Array),outTangents:ur(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new il(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ia:e=this.InterpolantFactoryMethodDiscrete;break;case Wo:e=this.InterpolantFactoryMethodLinear;break;case Do:e=this.InterpolantFactoryMethodSmooth;break;case ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return se("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;sh(this.settings)&&(id(this.settings.inTangents,t),id(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let c=0;c!==r;c++){let u=n[c];if(typeof u=="number"&&isNaN(u)){ae("KeyframeTrack: Time is not a valid number.",this,c,u),t=!1;break}if(o!==null&&o>u){ae("KeyframeTrack: Out of order keys.",this,c,u,o),t=!1;break}o=u}if(s!==void 0&&Tp(s))for(let c=0,u=s.length;c!==u;++c){let h=s[c];if(isNaN(h)){ae("KeyframeTrack: Value is not a valid number.",this,c,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Do,r=t.length-1,o=1;for(let c=1;c<r;++c){let u=!1,h=t[c],g=t[c+1];if(h!==g&&(c!==1||h!==t[0]))if(s)u=!0;else{let y=c*n,f=y-n,M=y+n;for(let T=0;T!==n;++T){let D=e[y+T];if(D!==e[f+T]||D!==e[M+T]){u=!0;break}}}if(u){if(c!==o){t[o]=t[c];let y=c*n,f=o*n;for(let M=0;M!==n;++M)e[f+M]=e[y+M]}++o}}if(r>0){t[o]=t[r];for(let c=r*n,u=o*n,h=0;h!==n;++h)e[u+h]=e[c+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,sh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function id(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Wo;var es=class extends Vn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=ia;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};sl.prototype.ValueTypeName="color";var rl=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};rl.prototype.ValueTypeName="number";var al=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-e)/(s-e),h=t*c;for(let g=h+c;h!==g;h+=4)xi.slerpFlat(r,0,o,h-c,o,h,u);return r}},Ma=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Vn{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=ia;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};ol.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,n){let s=this,r=!1,o=0,c=0,u,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(g){c++,r===!1&&s.onStart!==void 0&&s.onStart(g,o,c),r=!0},this.itemEnd=function(g){o++,s.onProgress!==void 0&&s.onProgress(g,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),u?u(g):g},this.setURLModifier=function(g){return u=g,this},this.addHandler=function(g,y){return h.push(g,y),this},this.removeHandler=function(g){let y=h.indexOf(g);return y!==-1&&h.splice(y,2),this},this.getHandler=function(g){for(let y=0,f=h.length;y<f;y+=2){let M=h[y],T=h[y+1];if(M.global&&(M.lastIndex=0),M.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jd=new ll,cl=class{constructor(t){this.manager=t!==void 0?t:Jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sa=class extends Sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ba=class extends Sa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rh=new Be,sd=new et,rd=new et,hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(sd),rd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(rh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,c=s?s.w/r.y:1,u=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===gr||t.reversedDepth?e.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,.5,.5,0,0,0,1),e.multiply(rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Io=new et,Lo=new xi,pi=new et,wa=class extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Io,Lo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Lo,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Io,Lo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Lo,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new et,ad=new we,od=new we,Mn=class extends wa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Oc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,ad,od),e.subVectors(od,ad)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Oc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/u,e-=o.offsetY*n/h,s*=o.width/u,n*=o.height/h}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Sr=class extends wa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,c=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,c-=g*this.view.offsetY,u=c-g*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hh=class extends hl{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new hh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var dr=-90,fr=1,ul=class extends Sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(dr,fr,t,e);s.layers=this.layers,this.add(s);let r=new Mn(dr,fr,t,e);r.layers=this.layers,this.add(r);let o=new Mn(dr,fr,t,e);o.layers=this.layers,this.add(o);let c=new Mn(dr,fr,t,e);c.layers=this.layers,this.add(c);let u=new Mn(dr,fr,t,e);u.layers=this.layers,this.add(u);let h=new Mn(dr,fr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,c,u]=e;for(let h of e)this.remove(h);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,u,h,g]=this.children,y=t.getRenderTarget(),f=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;let D=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,3,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=D,t.setRenderTarget(n,5,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,g),t.setRenderTarget(y,f,M),t.xr.enabled=T,n.texture.needsPMREMUpdate=!0}},dl=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Oh="\\[\\]\\.:\\/",$p=new RegExp("["+Oh+"]","g"),Bh="[^"+Oh+"]",jp="[^"+Oh.replace("\\.","")+"]",Qp=/((?:WC+[\/:])*)/.source.replace("WC",Bh),tm=/(WCOD+)?/.source.replace("WCOD",jp),em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),nm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),im=new RegExp("^"+Qp+tm+em+nm+"$"),sm=["material","materials","bones","map"],uh=class{constructor(t,e,n){let s=n||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($p,"")}static parseTrackName(t){let e=im.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===e||c.uuid===e)return c;let u=n(c.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===h){h=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=uh;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ev=new Float32Array(1);var dh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function kh(i,t,e,n){let s=rm(n);switch(e){case Ih:return i*t;case Er:return i*t/s.components*s.byteLength;case yl:return i*t/s.components*s.byteLength;case os:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case Lh:return i*t*3/s.components*s.byteLength;case Jn:return i*t*4/s.components*s.byteLength;case Sl:return i*t*4/s.components*s.byteLength;case Pa:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:case Al:return Math.max(i,16)*Math.max(t,8)/4;case bl:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case El:case Cl:case Pl:case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rl:case Na:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yl:case Jl:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kl:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ua:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rm(i){switch(i){case Dn:case Eh:return{byteLength:1,components:1};case Tr:case Ch:case ai:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case ri:case _l:case Yn:return{byteLength:4,components:1};case Rh:case Ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _f(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function om(i){let t=new WeakMap;function e(c,u){let h=c.array,g=c.usage,y=h.byteLength,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,h,g),c.onUploadCallback();let M;if(h instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=i.SHORT;else if(h instanceof Uint32Array)M=i.UNSIGNED_INT;else if(h instanceof Int32Array)M=i.INT;else if(h instanceof Int8Array)M=i.BYTE;else if(h instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:y}}function n(c,u,h){let g=u.array,y=u.updateRanges;if(i.bindBuffer(h,c),y.length===0)i.bufferSubData(h,0,g);else{y.sort((M,T)=>M.start-T.start);let f=0;for(let M=1;M<y.length;M++){let T=y[f],D=y[M];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++f,y[f]=D)}y.length=f+1;for(let M=0,T=y.length;M<T;M++){let D=y[M];i.bufferSubData(h,D.start*g.BYTES_PER_ELEMENT,g,D.start,D.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=t.get(c);u&&(i.deleteBuffer(u.buffer),t.delete(c))}function o(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let g=t.get(c);(!g||g.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let h=t.get(c);if(h===void 0)t.set(c,e(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:s,remove:r,update:o}}var lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cm=`#ifdef USE_ALPHAHASH
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
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
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
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
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
#endif`,_m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mm=`#ifdef USE_IRIDESCENCE
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
#endif`,Sm=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Im=`#define PI 3.141592653589793
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
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
}`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r0=`PhysicalMaterial material;
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
#endif`,a0=`uniform sampler2D dfgLUT;
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
}`,o0=`
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,u0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x0=`#if defined( USE_POINTS_UV )
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
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
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
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y0=`float getShadowMask() {
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
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
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
}`,mg=`#if DEPTH_PACKING == 3200
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
}`,gg=`#define DISTANCE
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
}`,_g=`#define DISTANCE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,bg=`uniform vec3 diffuse;
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
}`,wg=`#define LAMBERT
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
}`,Tg=`#define LAMBERT
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
}`,Ag=`#define MATCAP
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
}`,Eg=`#define MATCAP
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
}`,Cg=`#define NORMAL
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
}`,Rg=`#define NORMAL
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
}`,Pg=`#define PHONG
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
}`,Ig=`#define PHONG
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
}`,Lg=`#define STANDARD
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
}`,Dg=`#define STANDARD
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
}`,Ng=`#define TOON
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
}`,Ug=`#define TOON
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
}`,Fg=`uniform float size;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Bg=`#include <common>
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
}`,kg=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:lm,alphahash_pars_fragment:cm,alphamap_fragment:hm,alphamap_pars_fragment:um,alphatest_fragment:dm,alphatest_pars_fragment:fm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:_m,begin_vertex:xm,beginnormal_vertex:vm,bsdfs:ym,iridescence_fragment:Mm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Am,color_fragment:Em,color_pars_fragment:Cm,color_pars_vertex:Rm,color_vertex:Pm,common:Im,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Nm,displacementmap_vertex:Um,emissivemap_fragment:Fm,emissivemap_pars_fragment:Om,colorspace_fragment:Bm,colorspace_pars_fragment:km,envmap_fragment:zm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Gm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:t0,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:Jm,gradientmap_pars_fragment:Zm,lightmap_pars_fragment:Km,lights_lambert_fragment:$m,lights_lambert_pars_fragment:jm,lights_pars_begin:Qm,lights_toon_fragment:e0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:s0,lights_physical_fragment:r0,lights_physical_pars_fragment:a0,lights_fragment_begin:o0,lights_fragment_maps:l0,lights_fragment_end:c0,lightprobes_pars_fragment:h0,logdepthbuf_fragment:u0,logdepthbuf_pars_fragment:d0,logdepthbuf_pars_vertex:f0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:_0,map_particle_pars_fragment:x0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:y0,morphinstance_vertex:M0,morphcolor_vertex:S0,morphnormal_vertex:b0,morphtarget_pars_vertex:w0,morphtarget_vertex:T0,normal_fragment_begin:A0,normal_fragment_maps:E0,normal_pars_fragment:C0,normal_pars_vertex:R0,normal_vertex:P0,normalmap_pars_fragment:I0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:U0,opaque_fragment:F0,packing:O0,premultiplied_alpha_fragment:B0,project_vertex:k0,dithering_fragment:z0,dithering_pars_fragment:V0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:q0,shadowmask_pars_fragment:Y0,skinbase_vertex:J0,skinning_pars_vertex:Z0,skinning_vertex:K0,skinnormal_vertex:$0,specularmap_fragment:j0,specularmap_pars_fragment:Q0,tonemapping_fragment:tg,tonemapping_pars_fragment:eg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:sg,uv_pars_vertex:rg,uv_vertex:ag,worldpos_vertex:og,background_vert:lg,background_frag:cg,backgroundCube_vert:hg,backgroundCube_frag:ug,cube_vert:dg,cube_frag:fg,depth_vert:pg,depth_frag:mg,distance_vert:gg,distance_frag:_g,equirect_vert:xg,equirect_frag:vg,linedashed_vert:yg,linedashed_frag:Mg,meshbasic_vert:Sg,meshbasic_frag:bg,meshlambert_vert:wg,meshlambert_frag:Tg,meshmatcap_vert:Ag,meshmatcap_frag:Eg,meshnormal_vert:Cg,meshnormal_frag:Rg,meshphong_vert:Pg,meshphong_frag:Ig,meshphysical_vert:Lg,meshphysical_frag:Dg,meshtoon_vert:Ng,meshtoon_frag:Ug,points_vert:Fg,points_frag:Og,shadow_vert:Bg,shadow_frag:kg,sprite_vert:zg,sprite_frag:Vg},zt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new et},probesMax:{value:new et},probesResolution:{value:new et}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},bi={basic:{uniforms:wn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:wn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:wn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:wn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:wn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ue(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:wn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:wn([zt.points,zt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:wn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:wn([zt.common,zt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:wn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:wn([zt.sprite,zt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:wn([zt.common,zt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:wn([zt.lights,zt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};bi.physical={uniforms:wn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var nc={r:0,b:0,g:0},Gg=new Be,xf=new ce;xf.set(-1,0,0,0,1,0,0,0,1);function Hg(i,t,e,n,s,r){let o=new ue(0),c=s===!0?0:1,u,h,g=null,y=0,f=null;function M(U){let O=U.isScene===!0?U.background:null;if(O&&O.isTexture){let E=U.backgroundBlurriness>0;O=t.get(O,E)}return O}function T(U){let O=!1,E=M(U);E===null?v(o,c):E&&E.isColor&&(v(E,1),O=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||O)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function D(U,O){let E=M(O);E&&(E.isCubeTexture||E.mapping===Ca)?(h===void 0&&(h=new bn(new Mr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Ns(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(O.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(xf),h.material.toneMapped=ye.getTransfer(E.colorSpace)!==De,(g!==E||y!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,g=E,y=E.version,f=i.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new bn(new xa(2,2),new Rn({name:"BackgroundMaterial",uniforms:Ns(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,u.material.toneMapped=ye.getTransfer(E.colorSpace)!==De,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(g!==E||y!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,g=E,y=E.version,f=i.toneMapping),u.layers.enableAll(),U.unshift(u,u.geometry,u.material,0,0,null))}function v(U,O){U.getRGB(nc,Fh(i)),e.buffers.color.setClear(nc.r,nc.g,nc.b,O,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(U,O=1){o.set(U),c=O,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(U){c=U,v(o,c)},render:T,addToRenderList:D,dispose:p}}function Wg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function c(X,$,Q,W,nt){let dt=!1,lt=y(X,W,Q,$);r!==lt&&(r=lt,h(r.object)),dt=M(X,W,Q,nt),dt&&T(X,W,Q,nt),nt!==null&&t.update(nt,i.ELEMENT_ARRAY_BUFFER),(dt||o)&&(o=!1,E(X,$,Q,W),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function u(){return i.createVertexArray()}function h(X){return i.bindVertexArray(X)}function g(X){return i.deleteVertexArray(X)}function y(X,$,Q,W){let nt=W.wireframe===!0,dt=n[$.id];dt===void 0&&(dt={},n[$.id]=dt);let lt=X.isInstancedMesh===!0?X.id:0,xt=dt[lt];xt===void 0&&(xt={},dt[lt]=xt);let J=xt[Q.id];J===void 0&&(J={},xt[Q.id]=J);let ct=J[nt];return ct===void 0&&(ct=f(u()),J[nt]=ct),ct}function f(X){let $=[],Q=[],W=[];for(let nt=0;nt<e;nt++)$[nt]=0,Q[nt]=0,W[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Q,attributeDivisors:W,object:X,attributes:{},index:null}}function M(X,$,Q,W){let nt=r.attributes,dt=$.attributes,lt=0,xt=Q.getAttributes();for(let J in xt)if(xt[J].location>=0){let ft=nt[J],Ht=dt[J];if(Ht===void 0&&(J==="instanceMatrix"&&X.instanceMatrix&&(Ht=X.instanceMatrix),J==="instanceColor"&&X.instanceColor&&(Ht=X.instanceColor)),ft===void 0||ft.attribute!==Ht||Ht&&ft.data!==Ht.data)return!0;lt++}return r.attributesNum!==lt||r.index!==W}function T(X,$,Q,W){let nt={},dt=$.attributes,lt=0,xt=Q.getAttributes();for(let J in xt)if(xt[J].location>=0){let ft=dt[J];ft===void 0&&(J==="instanceMatrix"&&X.instanceMatrix&&(ft=X.instanceMatrix),J==="instanceColor"&&X.instanceColor&&(ft=X.instanceColor));let Ht={};Ht.attribute=ft,ft&&ft.data&&(Ht.data=ft.data),nt[J]=Ht,lt++}r.attributes=nt,r.attributesNum=lt,r.index=W}function D(){let X=r.newAttributes;for(let $=0,Q=X.length;$<Q;$++)X[$]=0}function v(X){p(X,0)}function p(X,$){let Q=r.newAttributes,W=r.enabledAttributes,nt=r.attributeDivisors;Q[X]=1,W[X]===0&&(i.enableVertexAttribArray(X),W[X]=1),nt[X]!==$&&(i.vertexAttribDivisor(X,$),nt[X]=$)}function U(){let X=r.newAttributes,$=r.enabledAttributes;for(let Q=0,W=$.length;Q<W;Q++)$[Q]!==X[Q]&&(i.disableVertexAttribArray(Q),$[Q]=0)}function O(X,$,Q,W,nt,dt,lt){lt===!0?i.vertexAttribIPointer(X,$,Q,nt,dt):i.vertexAttribPointer(X,$,Q,W,nt,dt)}function E(X,$,Q,W){D();let nt=W.attributes,dt=Q.getAttributes(),lt=$.defaultAttributeValues;for(let xt in dt){let J=dt[xt];if(J.location>=0){let ct=nt[xt];if(ct===void 0&&(xt==="instanceMatrix"&&X.instanceMatrix&&(ct=X.instanceMatrix),xt==="instanceColor"&&X.instanceColor&&(ct=X.instanceColor)),ct!==void 0){let ft=ct.normalized,Ht=ct.itemSize,Zt=t.get(ct);if(Zt===void 0)continue;let Ue=Zt.buffer,Me=Zt.type,Ee=Zt.bytesPerElement,gt=Me===i.INT||Me===i.UNSIGNED_INT||ct.gpuType===_l;if(ct.isInterleavedBufferAttribute){let St=ct.data,Vt=St.stride,oe=ct.offset;if(St.isInstancedInterleavedBuffer){for(let Xt=0;Xt<J.locationSize;Xt++)p(J.location+Xt,St.meshPerAttribute);X.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Xt=0;Xt<J.locationSize;Xt++)v(J.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let Xt=0;Xt<J.locationSize;Xt++)O(J.location+Xt,Ht/J.locationSize,Me,ft,Vt*Ee,(oe+Ht/J.locationSize*Xt)*Ee,gt)}else{if(ct.isInstancedBufferAttribute){for(let St=0;St<J.locationSize;St++)p(J.location+St,ct.meshPerAttribute);X.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let St=0;St<J.locationSize;St++)v(J.location+St);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let St=0;St<J.locationSize;St++)O(J.location+St,Ht/J.locationSize,Me,ft,Ht*Ee,Ht/J.locationSize*St*Ee,gt)}}else if(lt!==void 0){let ft=lt[xt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(J.location,ft);break;case 3:i.vertexAttrib3fv(J.location,ft);break;case 4:i.vertexAttrib4fv(J.location,ft);break;default:i.vertexAttrib1fv(J.location,ft)}}}}U()}function R(){L();for(let X in n){let $=n[X];for(let Q in $){let W=$[Q];for(let nt in W){let dt=W[nt];for(let lt in dt)g(dt[lt].object),delete dt[lt];delete W[nt]}}delete n[X]}}function P(X){if(n[X.id]===void 0)return;let $=n[X.id];for(let Q in $){let W=$[Q];for(let nt in W){let dt=W[nt];for(let lt in dt)g(dt[lt].object),delete dt[lt];delete W[nt]}}delete n[X.id]}function z(X){for(let $ in n){let Q=n[$];for(let W in Q){let nt=Q[W];if(nt[X.id]===void 0)continue;let dt=nt[X.id];for(let lt in dt)g(dt[lt].object),delete dt[lt];delete nt[X.id]}}}function w(X){for(let $ in n){let Q=n[$],W=X.isInstancedMesh===!0?X.id:0,nt=Q[W];if(nt!==void 0){for(let dt in nt){let lt=nt[dt];for(let xt in lt)g(lt[xt].object),delete lt[xt];delete nt[dt]}delete Q[W],Object.keys(Q).length===0&&delete n[$]}}}function L(){V(),o=!0,r!==s&&(r=s,h(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:L,resetDefaultState:V,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:z,initAttributes:D,enableAttribute:v,disableUnusedAttributes:U}}function Xg(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,g){g!==0&&(i.drawArraysInstanced(n,u,h,g),e.update(h,n,g))}function c(u,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,g);let f=0;for(let M=0;M<g;M++)f+=h[M];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c}function qg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let z=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(z){return!(z!==Jn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(z){let w=z===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Dn&&z!==Yn&&!w&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",g=u(h);g!==h&&(se("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);let y=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),O=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:f,maxTextures:M,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:U,maxVaryings:O,maxFragmentUniforms:E,maxSamples:R,samples:P}}function Yg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ni,c=new ce,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(y,f){let M=y.length!==0||f||n!==0||s;return s=f,n=y.length,M},this.beginShadows=function(){r=!0,g(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(y,f){e=g(y,f,0)},this.setState=function(y,f,M){let T=y.clippingPlanes,D=y.clipIntersection,v=y.clipShadows,p=i.get(y);if(!s||T===null||T.length===0||r&&!v)r?g(null):h();else{let U=r?0:n,O=U*4,E=p.clippingState||null;u.value=E,E=g(T,f,O,M);for(let R=0;R!==O;++R)E[R]=e[R];p.clippingState=E,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=U}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function g(y,f,M,T){let D=y!==null?y.length:0,v=null;if(D!==0){if(v=u.value,T!==!0||v===null){let p=M+D*4,U=f.matrixWorldInverse;c.getNormalMatrix(U),(v===null||v.length<p)&&(v=new Float32Array(p));for(let O=0,E=M;O!==D;++O,E+=4)o.copy(y[O]).applyMatrix4(U,c),o.normal.toArray(v,E),v[E+3]=o.constant}u.value=v,u.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,v}}var Rr=4,Jg=6,Zg=20,Kg=256,Oa=new Sr,Zd=new ue,zh=null,Vh=0,Gh=0,Hh=!1,$g=new et,Us=new et,sc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:c=$g}=r;zh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,c),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,Vh,Gh),this._renderer.xr.enabled=Hh,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ai,format:Jn,colorSpace:sa,depthBuffer:!1},s=Kd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jg(r)),this._blurMaterial=t_(r,t,e),this._ggxMaterial=Qg(r,t,e)}return s}_compileMaterial(t){let e=new bn(new zn,t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,s,r){let u=new Mn(90,1,e,n),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],y=this._renderer,f=y.autoClear,M=y.toneMapping;y.getClearColor(Zd),y.toneMapping=si,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(s),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new Mr,new fa({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let D=this._backgroundBox,v=D.material,p=!1,U=t.background;U?U.isColor&&(v.color.copy(U),t.background=null,p=!0):(v.color.copy(Zd),p=!0);for(let O=0;O<6;O++){let E=O%3;E===0?(u.up.set(0,h[O],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+g[O],r.y,r.z)):E===1?(u.up.set(0,0,h[O]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+g[O],r.z)):(u.up.set(0,h[O],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+g[O]));let R=this._cubeSize;Cr(s,E*R,O>2?R:0,R,R),y.setRenderTarget(s),p&&y.render(D,u),y.render(t,u)}y.toneMapping=M,y.autoClear=f,t.background=U}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ss||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$d());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let c=r.uniforms;c.envMap.value=t;let u=this._cubeSize;Cr(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(o,Oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;let u=o.uniforms,h=n/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),y=Math.sqrt(h*h-g*g),f=h*1.25,M=y*f,{_lodMax:T}=this,D=this._sizeLods[n],v=3*D*(n>T-Rr?n-T+Rr:0),p=4*(this._cubeSize-D);u.envMap.value=t.texture,u.roughness.value=M,u.mipInt.value=T-e,Cr(r,v,p,3*D,2*D),s.setRenderTarget(r),s.render(c,Oa),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=T-n,Cr(t,v,p,3*D,2*D),s.setRenderTarget(t),s.render(c,Oa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,c=this._blurMaterial,u=this._lodMeshes[s];u.material=c;let h=c.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let g=this._sizeLods[s],y=3*g*(s>this._lodMax-Rr?s-this._lodMax+Rr:0),f=4*(this._cubeSize-g);Cr(e,y,f,3*g,2*g),o.setRenderTarget(e),o.render(u,Oa)}};function jg(i){let t=[],e=[],n=i,s=i-Rr+1+Jg;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let c=1/(o-2),u=-c,h=1+c,g=[u,u,h,u,h,h,u,u,h,h,u,h],y=6,f=6,M=3,T=new Float32Array(M*f*y),D=new Float32Array(M*f*y);for(let p=0;p<y;p++){let U=p%3*2/3-1,O=p>2?0:-1,E=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];T.set(E,M*f*p);for(let R=0;R<f;R++){let P=g[R*2]*2-1,z=g[R*2+1]*2-1;p===0?Us.set(1,z,P):p===1?Us.set(-P,1,-z):p===2?Us.set(-P,z,1):p===3?Us.set(-1,z,-P):p===4?Us.set(-P,-1,z):Us.set(P,z,-1),Us.toArray(D,(p*f+R)*M)}}let v=new zn;v.setAttribute("position",new kn(T,M)),v.setAttribute("outputDirection",new kn(D,M)),e.push(new bn(v,null)),n>Rr&&n--}return{lodMeshes:e,sizeLods:t}}function Kd(i,t,e){let n=new Ln(i,t,e);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qg(i,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function t_(i,t,e){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:Zg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function $d(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function jd(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rc=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ga(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mr(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Mi});r.uniforms.tEquirect.value=e;let o=new bn(s,r),c=e.minFilter;return e.minFilter===rs&&(e.minFilter=fn),new ul(1,10,this).update(t,o),e.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function e_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,M=!1){return f==null?null:M?o(f):r(f)}function r(f){if(f&&f.isTexture){let M=f.mapping;if(M===pl||M===ml)if(t.has(f)){let T=t.get(f).texture;return c(T,f.mapping)}else{let T=f.image;if(T&&T.height>0){let D=new rc(T.height);return D.fromEquirectangularTexture(i,f),t.set(f,D),f.addEventListener("dispose",h),c(D.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let M=f.mapping,T=M===pl||M===ml,D=M===ss||M===Ds;if(T||D){let v=e.get(f),p=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new sc(i)),v=T?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{let U=f.image;return T&&U&&U.height>0||D&&U&&u(U)?(n===null&&(n=new sc(i)),v=T?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",g),v.texture):null}}}return f}function c(f,M){return M===pl?f.mapping=ss:M===ml&&(f.mapping=Ds),f}function u(f){let M=0,T=6;for(let D=0;D<T;D++)f[D]!==void 0&&M++;return M===T}function h(f){let M=f.target;M.removeEventListener("dispose",h);let T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function g(f){let M=f.target;M.removeEventListener("dispose",g);let T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function y(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:y}}function n_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ps("WebGLRenderer: "+n+" extension not supported."),s}}}function i_(i,t,e,n){let s={},r=new WeakMap;function o(y){let f=y.target;f.index!==null&&t.remove(f.index);for(let T in f.attributes)t.remove(f.attributes[T]);f.removeEventListener("dispose",o),delete s[f.id];let M=r.get(f);M&&(t.remove(M),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(y,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function u(y){let f=y.attributes;for(let M in f)t.update(f[M],i.ARRAY_BUFFER)}function h(y){let f=[],M=y.index,T=y.attributes.position,D=0;if(T===void 0)return;if(M!==null){let U=M.array;D=M.version;for(let O=0,E=U.length;O<E;O+=3){let R=U[O+0],P=U[O+1],z=U[O+2];f.push(R,P,P,z,z,R)}}else{let U=T.array;D=T.version;for(let O=0,E=U.length/3-1;O<E;O+=3){let R=O+0,P=O+1,z=O+2;f.push(R,P,P,z,z,R)}}let v=new(T.count>=65535?da:ua)(f,1);v.version=D;let p=r.get(y);p&&t.remove(p),r.set(y,v)}function g(y){let f=r.get(y);if(f){let M=y.index;M!==null&&f.version<M.version&&h(y)}else h(y);return r.get(y)}return{get:c,update:u,getWireframeAttribute:g}}function s_(i,t,e){let n;function s(y){n=y}let r,o;function c(y){r=y.type,o=y.bytesPerElement}function u(y,f){i.drawElements(n,f,r,y*o),e.update(f,n,1)}function h(y,f,M){M!==0&&(i.drawElementsInstanced(n,f,r,y*o,M),e.update(f,n,M))}function g(y,f,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,y,0,M);let D=0;for(let v=0;v<M;v++)D+=f[v];e.update(D,n,1)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=g}function r_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=c*(r/3);break;case i.LINES:e.lines+=c*(r/2);break;case i.LINE_STRIP:e.lines+=c*(r-1);break;case i.LINE_LOOP:e.lines+=c*r;break;case i.POINTS:e.points+=c*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function a_(i,t,e){let n=new WeakMap,s=new qe;function r(o,c,u){let h=o.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=g!==void 0?g.length:0,f=n.get(c);if(f===void 0||f.count!==y){let L=function(){z.dispose(),n.delete(c),c.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let M=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,D=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],U=c.morphAttributes.color||[],O=0;M===!0&&(O=1),T===!0&&(O=2),D===!0&&(O=3);let E=c.attributes.position.count*O,R=1;E>t.maxTextureSize&&(R=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let P=new Float32Array(E*R*4*y),z=new oa(P,E,R,y);z.type=Yn,z.needsUpdate=!0;let w=O*4;for(let V=0;V<y;V++){let X=v[V],$=p[V],Q=U[V],W=E*R*4*V;for(let nt=0;nt<X.count;nt++){let dt=nt*w;M===!0&&(s.fromBufferAttribute(X,nt),P[W+dt+0]=s.x,P[W+dt+1]=s.y,P[W+dt+2]=s.z,P[W+dt+3]=0),T===!0&&(s.fromBufferAttribute($,nt),P[W+dt+4]=s.x,P[W+dt+5]=s.y,P[W+dt+6]=s.z,P[W+dt+7]=0),D===!0&&(s.fromBufferAttribute(Q,nt),P[W+dt+8]=s.x,P[W+dt+9]=s.y,P[W+dt+10]=s.z,P[W+dt+11]=Q.itemSize===4?s.w:1)}}f={count:y,texture:z,size:new we(E,R)},n.set(c,f),c.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let M=0;for(let D=0;D<h.length;D++)M+=h[D];let T=c.morphTargetsRelative?1:1-M;u.getUniforms().setValue(i,"morphTargetBaseInfluence",T),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function o_(i,t,e,n,s){let r=new WeakMap;function o(h){let g=s.render.frame,y=h.geometry,f=t.get(h,y);if(r.get(f)!==g&&(t.update(f),r.set(f,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==g&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,g))),h.isSkinnedMesh){let M=h.skeleton;r.get(M)!==g&&(M.update(),r.set(M,g))}return f}function c(){r=new WeakMap}function u(h){let g=h.target;g.removeEventListener("dispose",u),n.releaseStatesOfObject(g),e.remove(g.instanceMatrix),g.instanceColor!==null&&e.remove(g.instanceColor)}return{update:o,dispose:c}}var l_={[yh]:"LINEAR_TONE_MAPPING",[Mh]:"REINHARD_TONE_MAPPING",[Sh]:"CINEON_TONE_MAPPING",[Ea]:"ACES_FILMIC_TONE_MAPPING",[wh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[bh]:"CUSTOM_TONE_MAPPING"};function c_(i,t,e,n,s,r){let o=new Ln(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,u=null,h=new zn;h.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new an([0,2,0,0,2,0],2));let g=new $o({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new bn(h,g),f=new Sr(-1,1,1,-1,0,1),M=null,T=null,D=!1,v,p=null,U=[],O=!1;this.setSize=function(E,R){o.setSize(E,R),c!==null&&c.setSize(E,R),u!==null&&u.setSize(E,R);for(let P=0;P<U.length;P++){let z=U[P];z.setSize&&z.setSize(E,R)}},this.setEffects=function(E){U=E,O=U.length>0&&U[0].isRenderPass===!0;let R=o.width,P=o.height;U.length>0&&c===null&&(c=new Ln(R,P,{type:ai,depthBuffer:!1,stencilBuffer:!1}),u=new Ln(R,P,{type:ai,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<U.length;z++){let w=U[z];w.setSize&&w.setSize(R,P)}},this.begin=function(E,R){if(D||E.toneMapping===si&&U.length===0)return!1;if(p=R,R!==null){let P=R.width,z=R.height;(o.width!==P||o.height!==z)&&this.setSize(P,z)}return O===!1&&E.setRenderTarget(o),v=E.toneMapping,E.toneMapping=si,!0},this.hasRenderPass=function(){return O},this.end=function(E,R){E.toneMapping=v,D=!0;let P=o,z=c;for(let w=0;w<U.length;w++){let L=U[w];L.enabled!==!1&&(L.render(E,z,P,R),L.needsSwap!==!1&&(P=z,z=z===c?u:c))}if(M!==E.outputColorSpace||T!==E.toneMapping){M=E.outputColorSpace,T=E.toneMapping,g.defines={},ye.getTransfer(M)===De&&(g.defines.SRGB_TRANSFER="");let w=l_[T];w&&(g.defines[w]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=P.texture,E.setRenderTarget(p),E.render(y,f),p=null,D=!1},this.isCompositing=function(){return D},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),u!==null&&u.dispose(),h.dispose(),g.dispose()}}var vf=new In,qh=new Qi(1,1),yf=new oa,Mf=new Jo,Sf=new ga,Qd=[],tf=[],ef=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function Ir(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Qd[s];if(r===void 0&&(r=new Float32Array(s),Qd[s]=r),t!==0){n.toArray(r,0);for(let o=1,c=0;o!==t;++o)c+=e,i[o].toArray(r,c)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lc(i,t){let e=tf[t];e===void 0&&(e=new Int32Array(t),tf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function h_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function p_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;sf.set(n),i.uniformMatrix2fv(this.addr,!1,sf),ln(e,n)}}function m_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;nf.set(n),i.uniformMatrix3fv(this.addr,!1,nf),ln(e,n)}}function g_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;ef.set(n),i.uniformMatrix4fv(this.addr,!1,ef),ln(e,n)}}function __(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function v_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function M_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function b_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function w_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function T_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qh.compareFunction=e.isReversedDepthBuffer()?ec:tc,r=qh):r=vf,e.setTexture2D(t||r,s)}function A_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mf,s)}function E_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sf,s)}function C_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yf,s)}function R_(i){switch(i){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return __;case 35667:case 35671:return x_;case 35668:case 35672:return v_;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return S_;case 36295:return b_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return C_}}function P_(i,t){i.uniform1fv(this.addr,t)}function I_(i,t){let e=Ir(t,this.size,2);i.uniform2fv(this.addr,e)}function L_(i,t){let e=Ir(t,this.size,3);i.uniform3fv(this.addr,e)}function D_(i,t){let e=Ir(t,this.size,4);i.uniform4fv(this.addr,e)}function N_(i,t){let e=Ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function U_(i,t){let e=Ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function F_(i,t){let e=Ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function O_(i,t){i.uniform1iv(this.addr,t)}function B_(i,t){i.uniform2iv(this.addr,t)}function k_(i,t){i.uniform3iv(this.addr,t)}function z_(i,t){i.uniform4iv(this.addr,t)}function V_(i,t){i.uniform1uiv(this.addr,t)}function G_(i,t){i.uniform2uiv(this.addr,t)}function H_(i,t){i.uniform3uiv(this.addr,t)}function W_(i,t){i.uniform4uiv(this.addr,t)}function X_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=qh:o=vf;for(let c=0;c!==s;++c)e.setTexture2D(t[c]||o,r[c])}function q_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mf,r[o])}function Y_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sf,r[o])}function J_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yf,r[o])}function Z_(i){switch(i){case 5126:return P_;case 35664:return I_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return O_;case 35667:case 35671:return B_;case 35668:case 35672:return k_;case 35669:case 35673:return z_;case 5125:return V_;case 36294:return G_;case 36295:return H_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return J_}}var Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R_(e.type)}},Jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z_(e.type)}},Zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(t,e[c.id],n)}}},Wh=/(\w+)(\])?(\[|\.)?/g;function rf(i,t){i.seq.push(t),i.map[t.id]=t}function K_(i,t,e){let n=i.name,s=n.length;for(Wh.lastIndex=0;;){let r=Wh.exec(n),o=Wh.lastIndex,c=r[1],u=r[2]==="]",h=r[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===s){rf(e,h===void 0?new Yh(c,i,t):new Jh(c,i,t));break}else{let y=e.map[c];y===void 0&&(y=new Zh(c),rf(e,y)),e=y}}}var Pr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let c=t.getActiveUniform(e,o),u=t.getUniformLocation(e,c.name);K_(c,u,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let c=e[r],u=n[c.id];u.needsUpdate!==!1&&c.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function af(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $_=37297,j_=0;function Q_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===t?">":" "} ${c}: ${e[o]}`)}return n.join(`
`)}var of=new ce;function tx(i){ye._getMatrix(of,ye.workingColorSpace,i);let t=`mat3( ${of.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(i)){case ra:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Q_(i.getShaderSource(t),c)}else return r}function ex(i,t){let e=tx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var nx={[yh]:"Linear",[Mh]:"Reinhard",[Sh]:"Cineon",[Ea]:"ACESFilmic",[wh]:"AgX",[Th]:"Neutral",[bh]:"Custom"};function ix(i,t){let e=nx[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new et;function sx(){ye.getLuminanceCoefficients(ic);let i=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function ax(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ox(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:c}}return e}function ka(i){return i!==""}function cf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(i){return i.replace(lx,hx)}var cx=new Map;function hx(i,t){let e=pe[t];if(e===void 0){let n=cx.get(t);if(n!==void 0)e=pe[n],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kh(e)}var ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(i){return i.replace(ux,dx)}function dx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function df(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var fx={[Aa]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function px(i){return fx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mx={[ss]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Ca]:"ENVMAP_TYPE_CUBE_UV"};function gx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":mx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var _x={[Ds]:"ENVMAP_MODE_REFRACTION"};function xx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_x[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vx={[vh]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};function yx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vx[i.combine]||"ENVMAP_BLENDING_NONE"}function Mx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,c=e.fragmentShader,u=px(e),h=gx(e),g=xx(e),y=yx(e),f=Mx(e),M=rx(e),T=ax(r),D=s.createProgram(),v,p,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(ka).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(ka).join(`
`),p.length>0&&(p+=`
`)):(v=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),p=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+g:"",e.envMap?"#define "+y:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?pe.tonemapping_pars_fragment:"",e.toneMapping!==si?ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,ex("linearToOutputTexel",e.outputColorSpace),sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ka).join(`
`)),o=Kh(o),o=cf(o,e),o=hf(o,e),c=Kh(c),c=cf(c,e),c=hf(c,e),o=uf(o),c=uf(c),e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let O=U+v+o,E=U+p+c,R=af(s,s.VERTEX_SHADER,O),P=af(s,s.FRAGMENT_SHADER,E);s.attachShader(D,R),s.attachShader(D,P),e.index0AttributeName!==void 0?s.bindAttribLocation(D,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(D,0,"position"),s.linkProgram(D);function z(X){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(D)||"",Q=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(P)||"",nt=$.trim(),dt=Q.trim(),lt=W.trim(),xt=!0,J=!0;if(s.getProgramParameter(D,s.LINK_STATUS)===!1)if(xt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,D,R,P);else{let ct=lf(s,R,"vertex"),ft=lf(s,P,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(D,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+nt+`
`+ct+`
`+ft)}else nt!==""?se("WebGLProgram: Program Info Log:",nt):(dt===""||lt==="")&&(J=!1);J&&(X.diagnostics={runnable:xt,programLog:nt,vertexShader:{log:dt,prefix:v},fragmentShader:{log:lt,prefix:p}})}s.deleteShader(R),s.deleteShader(P),w=new Pr(s,D),L=ox(s,D)}let w;this.getUniforms=function(){return w===void 0&&z(this),w};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(D,$_)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(D),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j_++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=R,this.fragmentShader=P,this}var bx=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jh(t),e.set(t,n)),n}},jh=class{constructor(t){this.id=bx++,this.code=t,this.usedTimes=0}};function wx(i){return i===os||i===Na||i===Ua}function Tx(i,t,e,n,s,r){let o=new la,c=new $h,u=new Set,h=[],g=new Map,y=n.logarithmicDepthBuffer,f=n.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return u.add(w),w===0?"uv":`uv${w}`}function D(w,L,V,X,$,Q){let W=X.fog,nt=$.geometry,dt=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,lt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,xt=t.get(w.envMap||dt,lt),J=xt&&xt.mapping===Ca?xt.image.height:null,ct=M[w.type];w.precision!==null&&(f=n.getMaxPrecision(w.precision),f!==w.precision&&se("WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ft=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Ht=ft!==void 0?ft.length:0,Zt=0;nt.morphAttributes.position!==void 0&&(Zt=1),nt.morphAttributes.normal!==void 0&&(Zt=2),nt.morphAttributes.color!==void 0&&(Zt=3);let Ue,Me,Ee,gt;if(ct){let Fe=bi[ct];Ue=Fe.vertexShader,Me=Fe.fragmentShader}else{Ue=w.vertexShader,Me=w.fragmentShader;let Fe=c.getVertexShaderStage(w),_e=c.getFragmentShaderStage(w);c.update(w,Fe,_e),Ee=Fe.id,gt=_e.id}let St=i.getRenderTarget(),Vt=i.state.buffers.depth.getReversed(),oe=$.isInstancedMesh===!0,Xt=$.isBatchedMesh===!0,le=!!w.map,Ye=!!w.matcap,he=!!xt,Te=!!w.aoMap,ke=!!w.lightMap,ge=!!w.bumpMap&&w.wireframe===!1,ze=!!w.normalMap,Ke=!!w.displacementMap,cn=!!w.emissiveMap,We=!!w.metalnessMap,Ze=!!w.roughnessMap,H=w.anisotropy>0,ve=w.clearcoat>0,Pe=w.dispersion>0,I=w.retroreflectivity>0,x=w.iridescence>0,K=w.sheen>0,it=w.transmission>0,tt=H&&!!w.anisotropyMap,Z=ve&&!!w.clearcoatMap,Mt=ve&&!!w.clearcoatNormalMap,ht=ve&&!!w.clearcoatRoughnessMap,_t=x&&!!w.iridescenceMap,Lt=x&&!!w.iridescenceThicknessMap,Kt=K&&!!w.sheenColorMap,Ot=K&&!!w.sheenRoughnessMap,Ct=!!w.specularMap,Tt=!!w.specularColorMap,te=!!w.specularIntensityMap,ee=it&&!!w.transmissionMap,G=it&&!!w.thicknessMap,Et=!!w.gradientMap,vt=!!w.alphaMap,Pt=w.alphaTest>0,Bt=!!w.alphaHash,bt=!!w.extensions,$t=si;w.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&($t=i.toneMapping);let Dt={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:Ue,fragmentShader:Me,defines:w.defines,customVertexShaderID:Ee,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&$._colorsTexture!==null,instancing:oe,instancingColor:oe&&$.instanceColor!==null,instancingMorph:oe&&$.morphTexture!==null,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:le,matcap:Ye,envMap:he,envMapMode:he&&xt.mapping,envMapCubeUVHeight:J,aoMap:Te,lightMap:ke,bumpMap:ge,normalMap:ze,displacementMap:Ke,emissiveMap:cn,normalMapObjectSpace:ze&&w.normalMapType===Ld,normalMapTangentSpace:ze&&w.normalMapType===Ql,packedNormalMap:ze&&w.normalMapType===Ql&&wx(w.normalMap.format),metalnessMap:We,roughnessMap:Ze,anisotropy:H,anisotropyMap:tt,clearcoat:ve,clearcoatMap:Z,clearcoatNormalMap:Mt,clearcoatRoughnessMap:ht,dispersion:Pe,retroreflection:I,iridescence:x,iridescenceMap:_t,iridescenceThicknessMap:Lt,sheen:K,sheenColorMap:Kt,sheenRoughnessMap:Ot,specularMap:Ct,specularColorMap:Tt,specularIntensityMap:te,transmission:it,transmissionMap:ee,thicknessMap:G,gradientMap:Et,opaque:w.transparent===!1&&w.blending===wr&&w.alphaToCoverage===!1,alphaMap:vt,alphaTest:Pt,alphaHash:Bt,combine:w.combine,mapUv:le&&T(w.map.channel),aoMapUv:Te&&T(w.aoMap.channel),lightMapUv:ke&&T(w.lightMap.channel),bumpMapUv:ge&&T(w.bumpMap.channel),normalMapUv:ze&&T(w.normalMap.channel),displacementMapUv:Ke&&T(w.displacementMap.channel),emissiveMapUv:cn&&T(w.emissiveMap.channel),metalnessMapUv:We&&T(w.metalnessMap.channel),roughnessMapUv:Ze&&T(w.roughnessMap.channel),anisotropyMapUv:tt&&T(w.anisotropyMap.channel),clearcoatMapUv:Z&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(w.sheenRoughnessMap.channel),specularMapUv:Ct&&T(w.specularMap.channel),specularColorMapUv:Tt&&T(w.specularColorMap.channel),specularIntensityMapUv:te&&T(w.specularIntensityMap.channel),transmissionMapUv:ee&&T(w.transmissionMap.channel),thicknessMapUv:G&&T(w.thicknessMap.channel),alphaMapUv:vt&&T(w.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(ze||H),vertexNormals:!!nt.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!nt.attributes.uv&&(le||vt),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||nt.attributes.normal===void 0&&ze===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Vt,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:nt.attributes.position!==void 0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:Zt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:le&&w.map.isVideoTexture===!0&&ye.getTransfer(w.map.colorSpace)===De,decodeVideoTextureEmissive:cn&&w.emissiveMap.isVideoTexture===!0&&ye.getTransfer(w.emissiveMap.colorSpace)===De,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===yi,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:bt&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&w.extensions.multiDraw===!0||Xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Dt.vertexUv1s=u.has(1),Dt.vertexUv2s=u.has(2),Dt.vertexUv3s=u.has(3),u.clear(),Dt}function v(w){let L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(let V in w.defines)L.push(V),L.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(p(L,w),U(L,w),L.push(i.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function p(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numSunLights),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numSunLightShadows),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function U(w,L){o.disableAll(),L.instancing&&o.enable(0),L.instancingColor&&o.enable(1),L.instancingMorph&&o.enable(2),L.matcap&&o.enable(3),L.envMap&&o.enable(4),L.normalMapObjectSpace&&o.enable(5),L.normalMapTangentSpace&&o.enable(6),L.clearcoat&&o.enable(7),L.iridescence&&o.enable(8),L.alphaTest&&o.enable(9),L.vertexColors&&o.enable(10),L.vertexAlphas&&o.enable(11),L.vertexUv1s&&o.enable(12),L.vertexUv2s&&o.enable(13),L.vertexUv3s&&o.enable(14),L.vertexTangents&&o.enable(15),L.anisotropy&&o.enable(16),L.alphaHash&&o.enable(17),L.batching&&o.enable(18),L.dispersion&&o.enable(19),L.retroreflection&&o.enable(24),L.batchingColor&&o.enable(20),L.gradientMap&&o.enable(21),L.packedNormalMap&&o.enable(22),L.vertexNormals&&o.enable(23),w.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.reversedDepthBuffer&&o.enable(4),L.skinning&&o.enable(5),L.morphTargets&&o.enable(6),L.morphNormals&&o.enable(7),L.morphColors&&o.enable(8),L.premultipliedAlpha&&o.enable(9),L.shadowMapEnabled&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.decodeVideoTextureEmissive&&o.enable(20),L.alphaToCoverage&&o.enable(21),L.numLightProbeGrids>0&&o.enable(22),L.hasPositionAttribute&&o.enable(23),w.push(o.mask)}function O(w){let L=M[w.type],V;if(L){let X=bi[L];V=qd.clone(X.uniforms)}else V=w.uniforms;return V}function E(w,L){let V=g.get(L);return V!==void 0?++V.usedTimes:(V=new Sx(i,L,w,s),h.push(V),g.set(L,V)),V}function R(w){if(--w.usedTimes===0){let L=h.indexOf(w);h[L]=h[h.length-1],h.pop(),g.delete(w.cacheKey),w.destroy()}}function P(w){c.remove(w)}function z(){c.dispose()}return{getParameters:D,getProgramCacheKey:v,getUniforms:O,acquireProgram:E,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:z}}function Ax(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,u){i.get(o)[c]=u}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ex(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ff(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let M=0;return f.isInstancedMesh&&(M+=2),f.isSkinnedMesh&&(M+=1),M}function c(f,M,T,D,v,p){let U=i[t];return U===void 0?(U={id:f.id,object:f,geometry:M,material:T,materialVariant:o(f),groupOrder:D,renderOrder:f.renderOrder,z:v,group:p},i[t]=U):(U.id=f.id,U.object=f,U.geometry=M,U.material=T,U.materialVariant=o(f),U.groupOrder=D,U.renderOrder=f.renderOrder,U.z=v,U.group=p),t++,U}function u(f,M,T,D,v,p,U){U.reversedDepth===!0&&(v=-v);let O=c(f,M,T,D,v,p);T.transmission>0?n.push(O):T.transparent===!0?s.push(O):e.push(O)}function h(f,M,T,D,v,p){let U=c(f,M,T,D,v,p);T.transmission>0?n.unshift(U):T.transparent===!0?s.unshift(U):e.unshift(U)}function g(f,M){e.length>1&&e.sort(f||Ex),n.length>1&&n.sort(M||ff),s.length>1&&s.sort(M||ff)}function y(){for(let f=t,M=i.length;f<M;f++){let T=i[f];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:u,unshift:h,finish:y,sort:g}}function Cx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new pf,i.set(n,[o])):s>=r.length?(o=new pf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new et,color:new ue};break;case"SpotLight":e={position:new et,direction:new et,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new et,halfWidth:new et,halfHeight:new et};break}return i[t.id]=e,e}}}function Px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ix=0;function Lx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dx(i){let t=new Rx,e=Px(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new et);let s=new et,r=new Be,o=new Be;function c(h){let g=0,y=0,f=0;for(let $=0;$<9;$++)n.probe[$].set(0,0,0);let M=0,T=0,D=0,v=0,p=0,U=0,O=0,E=0,R=0,P=0,z=0,w=0,L=0,V=0;h.sort(Lx);for(let $=0,Q=h.length;$<Q;$++){let W=h[$],nt=W.color,dt=W.intensity,lt=W.distance,xt=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===os?xt=W.shadow.map.texture:xt=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)g+=nt.r*dt,y+=nt.g*dt,f+=nt.b*dt;else if(W.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(W.sh.coefficients[J],dt);V++}else if(W.isSunLight){let J=t.get(W);if(J.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let ct=W.shadow,ft=e.get(W);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),n.sunShadow[T]=ft,n.sunShadowMap[T]=xt;let Ht=ct.getViewportCount();for(let Zt=0;Zt<Ht;Zt++)n.sunShadowMatrix[D+Zt]=ct.getMatrix(Zt),n.sunShadowCascade[D+Zt]=ct._cascadeData[Zt];D+=Ht,T++}n.sun[M]=J,M++}else if(W.isDirectionalLight){let J=t.get(W);if(J.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let ct=W.shadow,ft=e.get(W);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,n.directionalShadow[v]=ft,n.directionalShadowMap[v]=xt,n.directionalShadowMatrix[v]=W.shadow.matrix,R++}n.directional[v]=J,v++}else if(W.isSpotLight){let J=t.get(W);J.position.setFromMatrixPosition(W.matrixWorld),J.color.copy(nt).multiplyScalar(dt),J.distance=lt,J.coneCos=Math.cos(W.angle),J.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),J.decay=W.decay,n.spot[U]=J;let ct=W.shadow;if(W.map&&(n.spotLightMap[w]=W.map,w++,ct.updateMatrices(W),W.castShadow&&L++),n.spotLightMatrix[U]=ct.matrix,W.castShadow){let ft=e.get(W);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,n.spotShadow[U]=ft,n.spotShadowMap[U]=xt,z++}U++}else if(W.isRectAreaLight){let J=t.get(W);J.color.copy(nt).multiplyScalar(dt),J.halfWidth.set(W.width*.5,0,0),J.halfHeight.set(0,W.height*.5,0),n.rectArea[O]=J,O++}else if(W.isPointLight){let J=t.get(W);if(J.color.copy(W.color).multiplyScalar(W.intensity),J.distance=W.distance,J.decay=W.decay,W.castShadow){let ct=W.shadow,ft=e.get(W);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,ft.shadowCameraNear=ct.camera.near,ft.shadowCameraFar=ct.camera.far,n.pointShadow[p]=ft,n.pointShadowMap[p]=xt,n.pointShadowMatrix[p]=W.shadow.matrix,P++}n.point[p]=J,p++}else if(W.isHemisphereLight){let J=t.get(W);J.skyColor.copy(W.color).multiplyScalar(dt),J.groundColor.copy(W.groundColor).multiplyScalar(dt),n.hemi[E]=J,E++}}O>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=y,n.ambient[2]=f;let X=n.hash;(X.sunLength!==M||X.directionalLength!==v||X.pointLength!==p||X.spotLength!==U||X.rectAreaLength!==O||X.hemiLength!==E||X.numSunShadows!==T||X.numDirectionalShadows!==R||X.numPointShadows!==P||X.numSpotShadows!==z||X.numSpotMaps!==w||X.numLightProbes!==V)&&(n.sun.length=M,n.directional.length=v,n.spot.length=U,n.rectArea.length=O,n.point.length=p,n.hemi.length=E,n.sunShadow.length=T,n.sunShadowMap.length=T,n.sunShadowMatrix.length=D,n.sunShadowCascade.length=D,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=z,n.spotShadowMap.length=z,n.spotLightMatrix.length=z+w-L,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=V,X.sunLength=M,X.directionalLength=v,X.pointLength=p,X.spotLength=U,X.rectAreaLength=O,X.hemiLength=E,X.numSunShadows=T,X.numDirectionalShadows=R,X.numPointShadows=P,X.numSpotShadows=z,X.numSpotMaps=w,X.numLightProbes=V,n.version=Ix++)}function u(h,g){let y=0,f=0,M=0,T=0,D=0,v=0,p=g.matrixWorldInverse;for(let U=0,O=h.length;U<O;U++){let E=h[U];if(E.isSunLight){let R=n.sun[y];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(p),y++}else if(E.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),f++}else if(E.isSpotLight){let R=n.spot[T];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),T++}else if(E.isRectAreaLight){let R=n.rectArea[D];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),D++}else if(E.isPointLight){let R=n.point[M];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),M++}else if(E.isHemisphereLight){let R=n.hemi[v];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(p),v++}}}return{setup:c,setupView:u,state:n}}function mf(i){let t=new Dx(i),e=[],n=[],s=[];function r(f){y.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function c(f){n.push(f)}function u(f){s.push(f)}function h(){t.setup(e)}function g(f){t.setupView(e,f)}let y={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:y,setupLights:h,setupLightsView:g,pushLight:o,pushShadow:c,pushLightProbeGrid:u}}function Nx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),c;return o===void 0?(c=new mf(i),t.set(s,[c])):r>=o.length?(c=new mf(i),o.push(c)):c=o[r],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
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
}`,Ox=[new et(1,0,0),new et(-1,0,0),new et(0,1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1)],Bx=[new et(0,-1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1),new et(0,-1,0),new et(0,-1,0)],gf=new Be,Ba=new et,Xh=new et;function kx(i,t,e){let n=new yr,s=new we,r=new we,o=new qe,c=new jo,u=new Qo,h={},g=e.maxTextureSize,y={[is]:pn,[pn]:is,[yi]:yi},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Ux,fragmentShader:Fx}),M=f.clone();M.defines.HORIZONTAL_PASS=1;let T=new zn;T.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let D=new bn(T,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let p=this.type;this.render=function(P,z,w){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;this.type===fl&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Aa);let L=i.getRenderTarget(),V=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Mi),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let Q=p!==this.type;Q&&z.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(nt=>nt.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,nt=P.length;W<nt;W++){let dt=P[W],lt=dt.shadow;if(lt===void 0){se("WebGLShadowMap:",dt,"has no shadow.");continue}if(lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;s.copy(lt.mapSize);let xt=lt.getFrameExtents();s.multiply(xt),r.copy(lt.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(r.x=Math.floor(g/xt.x),s.x=r.x*xt.x,lt.mapSize.x=r.x),s.y>g&&(r.y=Math.floor(g/xt.y),s.y=r.y*xt.y,lt.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(lt.camera._reversedDepth=J,lt.map===null||Q===!0){if(lt.map!==null&&(lt.map.depthTexture!==null&&(lt.map.depthTexture.dispose(),lt.map.depthTexture=null),lt.map.dispose()),this.type===br){if(dt.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}lt.map=new Ln(s.x,s.y,{format:os,type:ai,minFilter:fn,magFilter:fn,generateMipmaps:!1}),lt.map.texture.name=dt.name+".shadowMap",lt.map.depthTexture=new Qi(s.x,s.y,Yn),lt.map.depthTexture.name=dt.name+".shadowMapDepth",lt.map.depthTexture.format=gi,lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=$e,lt.map.depthTexture.magFilter=$e}else dt.isPointLight?(lt.map=new rc(s.x),lt.map.depthTexture=new Ko(s.x,ri)):(lt.map=new Ln(s.x,s.y),lt.map.depthTexture=new Qi(s.x,s.y,ri)),lt.map.depthTexture.name=dt.name+".shadowMap",lt.map.depthTexture.format=gi,this.type===Aa?(lt.map.depthTexture.compareFunction=J?ec:tc,lt.map.depthTexture.minFilter=fn,lt.map.depthTexture.magFilter=fn):(lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=$e,lt.map.depthTexture.magFilter=$e);lt.camera.updateProjectionMatrix()}lt.map.isWebGLCubeRenderTarget!==!0&&(lt.map.width!==s.x||lt.map.height!==s.y)&&lt.map.setSize(s.x,s.y);let ct=lt.map.isWebGLCubeRenderTarget?6:lt.getViewportCount();dt.isPointLight!==!0&&lt.updateMatrices(dt,w);for(let ft=0;ft<ct;ft++){let Ht=lt.getCamera(ft);if(dt.isPointLight){let Zt=lt.camera,Ue=lt.matrix,Me=dt.distance||Zt.far;Me!==Zt.far&&(Zt.far=Me,Zt.updateProjectionMatrix()),Ba.setFromMatrixPosition(dt.matrixWorld),Zt.position.copy(Ba),Xh.copy(Zt.position),Xh.add(Ox[ft]),Zt.up.copy(Bx[ft]),Zt.lookAt(Xh),Zt.updateMatrixWorld(),Ue.makeTranslation(-Ba.x,-Ba.y,-Ba.z),gf.multiplyMatrices(Zt.projectionMatrix,Zt.matrixWorldInverse),lt._frustum.setFromProjectionMatrix(gf,Zt.coordinateSystem,Zt.reversedDepth)}if(lt.map.isWebGLCubeRenderTarget)i.setRenderTarget(lt.map,ft),i.clear();else{ft===0&&(i.setRenderTarget(lt.map),i.clear());let Zt=lt.getViewport(ft);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),$.viewport(o)}n=lt.getFrustum(ft),E(z,w,Ht,dt,this.type)}lt.isPointLightShadow!==!0&&this.type===br&&U(lt,w),lt.needsUpdate=!1}p=this.type,v.needsUpdate=!1,i.setRenderTarget(L,V,X)};function U(P,z){let w=t.update(D);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null?P.mapPass=new Ln(s.x,s.y,{format:os,type:ai}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(z,null,w,f,D,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value.set(P.map.width,P.map.height),M.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(z,null,w,M,D,null)}function O(P,z,w,L){let V=null,X=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(X!==void 0)V=X;else if(V=w.isPointLight===!0?u:c,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let $=V.uuid,Q=z.uuid,W=h[$];W===void 0&&(W={},h[$]=W);let nt=W[Q];nt===void 0&&(nt=V.clone(),W[Q]=nt,z.addEventListener("dispose",R)),V=nt}if(V.visible=z.visible,V.wireframe=z.wireframe,L===br?V.side=z.shadowSide!==null?z.shadowSide:z.side:V.side=z.shadowSide!==null?z.shadowSide:y[z.side],V.alphaMap=z.alphaMap,V.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,V.map=z.map,V.clipShadows=z.clipShadows,V.clippingPlanes=z.clippingPlanes,V.clipIntersection=z.clipIntersection,V.displacementMap=z.displacementMap,V.displacementScale=z.displacementScale,V.displacementBias=z.displacementBias,V.wireframeLinewidth=z.wireframeLinewidth,V.linewidth=z.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let $=i.properties.get(V);$.light=w}return V}function E(P,z,w,L,V){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&V===br)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);let Q=t.update(P),W=P.material;if(Array.isArray(W)){let nt=Q.groups;for(let dt=0,lt=nt.length;dt<lt;dt++){let xt=nt[dt],J=W[xt.materialIndex];if(J&&J.visible){let ct=O(P,J,L,V);P.onBeforeShadow(i,P,z,w,Q,ct,xt),i.renderBufferDirect(w,null,Q,ct,P,xt),P.onAfterShadow(i,P,z,w,Q,ct,xt)}}}else if(W.visible){let nt=O(P,W,L,V);P.onBeforeShadow(i,P,z,w,Q,nt,null),i.renderBufferDirect(w,null,Q,nt,P,null),P.onAfterShadow(i,P,z,w,Q,nt,null)}}let $=P.children;for(let Q=0,W=$.length;Q<W;Q++)E($[Q],z,w,L,V)}function R(P){P.target.removeEventListener("dispose",R);for(let w in h){let L=h[w],V=P.target.uuid;V in L&&(L[V].dispose(),delete L[V])}}}function zx(i,t){function e(){let G=!1,Et=new qe,vt=null,Pt=new qe(0,0,0,0);return{setMask:function(Bt){vt!==Bt&&!G&&(i.colorMask(Bt,Bt,Bt,Bt),vt=Bt)},setLocked:function(Bt){G=Bt},setClear:function(Bt,bt,$t,Dt,Fe){Fe===!0&&(Bt*=Dt,bt*=Dt,$t*=Dt),Et.set(Bt,bt,$t,Dt),Pt.equals(Et)===!1&&(i.clearColor(Bt,bt,$t,Dt),Pt.copy(Et))},reset:function(){G=!1,vt=null,Pt.set(-1,0,0,0)}}}function n(){let G=!1,Et=!1,vt=null,Pt=null,Bt=null;return{setReversed:function(bt){if(Et!==bt){let $t=t.get("EXT_clip_control");bt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Et=bt;let Dt=Bt;Bt=null,this.setClear(Dt)}},getReversed:function(){return Et},setTest:function(bt){bt?St(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(bt){vt!==bt&&!G&&(i.depthMask(bt),vt=bt)},setFunc:function(bt){if(Et&&(bt=Wd[bt]),Pt!==bt){switch(bt){case Uo:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case Bo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case Vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=bt}},setLocked:function(bt){G=bt},setClear:function(bt){Bt!==bt&&(Bt=bt,Et&&(bt=1-bt),i.clearDepth(bt))},reset:function(){G=!1,vt=null,Pt=null,Bt=null,Et=!1}}}function s(){let G=!1,Et=null,vt=null,Pt=null,Bt=null,bt=null,$t=null,Dt=null,Fe=null;return{setTest:function(_e){G||(_e?St(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(_e){Et!==_e&&!G&&(i.stencilMask(_e),Et=_e)},setFunc:function(_e,mn,gn){(vt!==_e||Pt!==mn||Bt!==gn)&&(i.stencilFunc(_e,mn,gn),vt=_e,Pt=mn,Bt=gn)},setOp:function(_e,mn,gn){(bt!==_e||$t!==mn||Dt!==gn)&&(i.stencilOp(_e,mn,gn),bt=_e,$t=mn,Dt=gn)},setLocked:function(_e){G=_e},setClear:function(_e){Fe!==_e&&(i.clearStencil(_e),Fe=_e)},reset:function(){G=!1,Et=null,vt=null,Pt=null,Bt=null,bt=null,$t=null,Dt=null,Fe=null}}}let r=new e,o=new n,c=new s,u=new WeakMap,h=new WeakMap,g={},y={},f={},M=new WeakMap,T=[],D=null,v=!1,p=null,U=null,O=null,E=null,R=null,P=null,z=null,w=new ue(0,0,0),L=0,V=!1,X=null,$=null,Q=null,W=null,nt=null,dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),lt=!1,xt=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec(J)[1]),lt=xt>=1):J.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),lt=xt>=2);let ct=null,ft={},Ht=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),Ue=new qe().fromArray(Ht),Me=new qe().fromArray(Zt);function Ee(G,Et,vt,Pt){let Bt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(G,bt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<vt;$t++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(Et+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return bt}let gt={};gt[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),St(i.DEPTH_TEST),o.setFunc(mr),ge(!1),ze(fh),St(i.CULL_FACE),Te(Mi);function St(G){g[G]!==!0&&(i.enable(G),g[G]=!0)}function Vt(G){g[G]!==!1&&(i.disable(G),g[G]=!1)}function oe(G,Et){return f[G]!==Et?(i.bindFramebuffer(G,Et),f[G]=Et,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Et),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function Xt(G,Et){let vt=T,Pt=!1;if(G){vt=M.get(Et),vt===void 0&&(vt=[],M.set(Et,vt));let Bt=G.textures;if(vt.length!==Bt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,$t=Bt.length;bt<$t;bt++)vt[bt]=i.COLOR_ATTACHMENT0+bt;vt.length=Bt.length,Pt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(vt)}function le(G){return D!==G?(i.useProgram(G),D=G,!0):!1}let Ye={[Ls]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[dd]:i.FUNC_REVERSE_SUBTRACT};Ye[fd]=i.MIN,Ye[pd]=i.MAX;let he={[md]:i.ZERO,[gd]:i.ONE,[_d]:i.SRC_COLOR,[_h]:i.SRC_ALPHA,[bd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[vd]:i.DST_ALPHA,[xd]:i.ONE_MINUS_SRC_COLOR,[xh]:i.ONE_MINUS_SRC_ALPHA,[Sd]:i.ONE_MINUS_DST_COLOR,[yd]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Ed]:i.ONE_MINUS_CONSTANT_ALPHA};function Te(G,Et,vt,Pt,Bt,bt,$t,Dt,Fe,_e){if(G===Mi){v===!0&&(Vt(i.BLEND),v=!1);return}if(v===!1&&(St(i.BLEND),v=!0),G!==hd){if(G!==p||_e!==V){if((U!==Ls||R!==Ls)&&(i.blendEquation(i.FUNC_ADD),U=Ls,R=Ls),_e)switch(G){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ph:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",G);break}else switch(G){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ph:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mh:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",G);break}O=null,E=null,P=null,z=null,w.set(0,0,0),L=0,p=G,V=_e}return}Bt=Bt||Et,bt=bt||vt,$t=$t||Pt,(Et!==U||Bt!==R)&&(i.blendEquationSeparate(Ye[Et],Ye[Bt]),U=Et,R=Bt),(vt!==O||Pt!==E||bt!==P||$t!==z)&&(i.blendFuncSeparate(he[vt],he[Pt],he[bt],he[$t]),O=vt,E=Pt,P=bt,z=$t),(Dt.equals(w)===!1||Fe!==L)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Fe),w.copy(Dt),L=Fe),p=G,V=!1}function ke(G,Et){G.side===yi?Vt(i.CULL_FACE):St(i.CULL_FACE);let vt=G.side===pn;Et&&(vt=!vt),ge(vt),G.blending===wr&&G.transparent===!1?Te(Mi):Te(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Pt=G.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),cn(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(G){X!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),X=G)}function ze(G){G!==ld?(St(i.CULL_FACE),G!==$&&(G===fh?i.cullFace(i.BACK):G===cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),$=G}function Ke(G){G!==Q&&(lt&&i.lineWidth(G),Q=G)}function cn(G,Et,vt){G?(St(i.POLYGON_OFFSET_FILL),(W!==Et||nt!==vt)&&(W=Et,nt=vt,o.getReversed()&&(Et=-Et),i.polygonOffset(Et,vt))):Vt(i.POLYGON_OFFSET_FILL)}function We(G){G?St(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function Ze(G){G===void 0&&(G=i.TEXTURE0+dt-1),ct!==G&&(i.activeTexture(G),ct=G)}function H(G,Et,vt){vt===void 0&&(ct===null?vt=i.TEXTURE0+dt-1:vt=ct);let Pt=ft[vt];Pt===void 0&&(Pt={type:void 0,texture:void 0},ft[vt]=Pt),(Pt.type!==G||Pt.texture!==Et)&&(ct!==vt&&(i.activeTexture(vt),ct=vt),i.bindTexture(G,Et||gt[G]),Pt.type=G,Pt.texture=Et)}function ve(){let G=ft[ct];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Pe(){try{i.compressedTexImage2D(...arguments)}catch(G){ae("WebGLState:",G)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(G){ae("WebGLState:",G)}}function x(){try{i.texSubImage2D(...arguments)}catch(G){ae("WebGLState:",G)}}function K(){try{i.texSubImage3D(...arguments)}catch(G){ae("WebGLState:",G)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(G){ae("WebGLState:",G)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(G){ae("WebGLState:",G)}}function Z(){try{i.texStorage2D(...arguments)}catch(G){ae("WebGLState:",G)}}function Mt(){try{i.texStorage3D(...arguments)}catch(G){ae("WebGLState:",G)}}function ht(){try{i.texImage2D(...arguments)}catch(G){ae("WebGLState:",G)}}function _t(){try{i.texImage3D(...arguments)}catch(G){ae("WebGLState:",G)}}function Lt(G){return y[G]!==void 0?y[G]:i.getParameter(G)}function Kt(G,Et){y[G]!==Et&&(i.pixelStorei(G,Et),y[G]=Et)}function Ot(G){Ue.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function Ct(G){Me.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Me.copy(G))}function Tt(G,Et){let vt=h.get(Et);vt===void 0&&(vt=new WeakMap,h.set(Et,vt));let Pt=vt.get(G);Pt===void 0&&(Pt=i.getUniformBlockIndex(Et,G.name),vt.set(G,Pt))}function te(G,Et){let Pt=h.get(Et).get(G);u.get(Et)!==Pt&&(i.uniformBlockBinding(Et,Pt,G.__bindingPointIndex),u.set(Et,Pt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),g={},y={},ct=null,ft={},f={},M=new WeakMap,T=[],D=null,v=!1,p=null,U=null,O=null,E=null,R=null,P=null,z=null,w=new ue(0,0,0),L=0,V=!1,X=null,$=null,Q=null,W=null,nt=null,Ue.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:St,disable:Vt,bindFramebuffer:oe,drawBuffers:Xt,useProgram:le,setBlending:Te,setMaterial:ke,setFlipSided:ge,setCullFace:ze,setLineWidth:Ke,setPolygonOffset:cn,setScissorTest:We,activeTexture:Ze,bindTexture:H,unbindTexture:ve,compressedTexImage2D:Pe,compressedTexImage3D:I,texImage2D:ht,texImage3D:_t,pixelStorei:Kt,getParameter:Lt,updateUBOMapping:Tt,uniformBlockBinding:te,texStorage2D:Z,texStorage3D:Mt,texSubImage2D:x,texSubImage3D:K,compressedTexSubImage2D:it,compressedTexSubImage3D:tt,scissor:Ot,viewport:Ct,reset:ee}}function Vx(i,t,e,n,s,r,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new we,g=new WeakMap,y=new Set,f,M=new WeakMap,T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(I,x){return T?new OffscreenCanvas(I,x):aa("canvas")}function v(I,x,K){let it=1,tt=Pe(I);if((tt.width>K||tt.height>K)&&(it=K/Math.max(tt.width,tt.height)),it<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Z=Math.floor(it*tt.width),Mt=Math.floor(it*tt.height);f===void 0&&(f=D(Z,Mt));let ht=x?D(Z,Mt):f;return ht.width=Z,ht.height=Mt,ht.getContext("2d").drawImage(I,0,0,Z,Mt),se("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+Mt+")."),ht}else return"data"in I&&se("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),I;return I}function p(I){return I.generateMipmaps}function U(I){i.generateMipmap(I)}function O(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(I,x,K,it,tt,Z=!1){if(I!==null){if(i[I]!==void 0)return i[I];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Mt;it&&(Mt=t.get("EXT_texture_norm16"),Mt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=x;if(x===i.RED&&(K===i.FLOAT&&(ht=i.R32F),K===i.HALF_FLOAT&&(ht=i.R16F),K===i.UNSIGNED_BYTE&&(ht=i.R8),K===i.UNSIGNED_SHORT&&Mt&&(ht=Mt.R16_EXT),K===i.SHORT&&Mt&&(ht=Mt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ht=i.R8UI),K===i.UNSIGNED_SHORT&&(ht=i.R16UI),K===i.UNSIGNED_INT&&(ht=i.R32UI),K===i.BYTE&&(ht=i.R8I),K===i.SHORT&&(ht=i.R16I),K===i.INT&&(ht=i.R32I)),x===i.RG&&(K===i.FLOAT&&(ht=i.RG32F),K===i.HALF_FLOAT&&(ht=i.RG16F),K===i.UNSIGNED_BYTE&&(ht=i.RG8),K===i.UNSIGNED_SHORT&&Mt&&(ht=Mt.RG16_EXT),K===i.SHORT&&Mt&&(ht=Mt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ht=i.RG8UI),K===i.UNSIGNED_SHORT&&(ht=i.RG16UI),K===i.UNSIGNED_INT&&(ht=i.RG32UI),K===i.BYTE&&(ht=i.RG8I),K===i.SHORT&&(ht=i.RG16I),K===i.INT&&(ht=i.RG32I)),x===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),K===i.UNSIGNED_INT&&(ht=i.RGB32UI),K===i.BYTE&&(ht=i.RGB8I),K===i.SHORT&&(ht=i.RGB16I),K===i.INT&&(ht=i.RGB32I)),x===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),K===i.UNSIGNED_INT&&(ht=i.RGBA32UI),K===i.BYTE&&(ht=i.RGBA8I),K===i.SHORT&&(ht=i.RGBA16I),K===i.INT&&(ht=i.RGBA32I)),x===i.RGB&&(K===i.UNSIGNED_SHORT&&Mt&&(ht=Mt.RGB16_EXT),K===i.SHORT&&Mt&&(ht=Mt.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(ht=i.R11F_G11F_B10F)),x===i.RGBA){let _t=Z?ra:ye.getTransfer(tt);K===i.FLOAT&&(ht=i.RGBA32F),K===i.HALF_FLOAT&&(ht=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ht=_t===De?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Mt&&(ht=Mt.RGBA16_EXT),K===i.SHORT&&Mt&&(ht=Mt.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function R(I,x){let K;return I?x===null||x===ri||x===Ar?K=i.DEPTH24_STENCIL8:x===Yn?K=i.DEPTH32F_STENCIL8:x===Tr&&(K=i.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ri||x===Ar?K=i.DEPTH_COMPONENT24:x===Yn?K=i.DEPTH_COMPONENT32F:x===Tr&&(K=i.DEPTH_COMPONENT16),K}function P(I,x){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==$e&&I.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function z(I){let x=I.target;x.removeEventListener("dispose",z),L(x),x.isVideoTexture&&g.delete(x),x.isHTMLTexture&&y.delete(x)}function w(I){let x=I.target;x.removeEventListener("dispose",w),X(x)}function L(I){let x=n.get(I);if(x.__webglInit===void 0)return;let K=I.source,it=M.get(K);if(it){let tt=it[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&V(I),Object.keys(it).length===0&&M.delete(K)}n.remove(I)}function V(I){let x=n.get(I);i.deleteTexture(x.__webglTexture);let K=I.source,it=M.get(K);delete it[x.__cacheKey],o.memory.textures--}function X(I){let x=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(x.__webglFramebuffer[it]))for(let tt=0;tt<x.__webglFramebuffer[it].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[it][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[it]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[it])}else{if(Array.isArray(x.__webglFramebuffer))for(let it=0;it<x.__webglFramebuffer.length;it++)i.deleteFramebuffer(x.__webglFramebuffer[it]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let it=0;it<x.__webglColorRenderbuffer.length;it++)x.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[it]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let K=I.textures;for(let it=0,tt=K.length;it<tt;it++){let Z=n.get(K[it]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(K[it])}n.remove(I)}let $=0;function Q(){$=0}function W(){return $}function nt(I){$=I}function dt(){let I=$;return I>=s.maxTextures&&se("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,I}function lt(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function xt(I,x){let K=n.get(I);if(I.isVideoTexture&&H(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&K.__version!==I.version){let it=I.image;if(it===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(K,I,x);return}}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+x)}function J(I,x){let K=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Vt(K,I,x);return}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+x)}function ct(I,x){let K=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Vt(K,I,x);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+x)}function ft(I,x){let K=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&K.__version!==I.version){oe(K,I,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+x)}let Ht={[Go]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},Zt={[$e]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[Ra]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[gl]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},Ue={[Nd]:i.NEVER,[kd]:i.ALWAYS,[Ud]:i.LESS,[tc]:i.LEQUAL,[Fd]:i.EQUAL,[ec]:i.GEQUAL,[Od]:i.GREATER,[Bd]:i.NOTEQUAL};function Me(I,x){if(x.type===Yn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===gl||x.magFilter===Ra||x.magFilter===rs||x.minFilter===fn||x.minFilter===gl||x.minFilter===Ra||x.minFilter===rs)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Ht[x.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Ht[x.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Ht[x.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Zt[x.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Zt[x.minFilter]),x.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ue[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===$e||x.minFilter!==Ra&&x.minFilter!==rs||x.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ee(I,x){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",z));let it=x.source,tt=M.get(it);tt===void 0&&(tt={},M.set(it,tt));let Z=lt(x);if(Z!==I.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),tt[Z].usedTimes++;let Mt=tt[I.__cacheKey];Mt!==void 0&&(tt[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&V(x)),I.__cacheKey=Z,I.__webglTexture=tt[Z].texture}return K}function gt(I,x,K){return Math.floor(Math.floor(I/K)/x)}function St(I,x,K,it){let Z=I.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,K,it,x.data);else{Z.sort((Kt,Ot)=>Kt.start-Ot.start);let Mt=0;for(let Kt=1;Kt<Z.length;Kt++){let Ot=Z[Mt],Ct=Z[Kt],Tt=Ot.start+Ot.count,te=gt(Ct.start,x.width,4),ee=gt(Ot.start,x.width,4);Ct.start<=Tt+1&&te===ee&&gt(Ct.start+Ct.count-1,x.width,4)===te?Ot.count=Math.max(Ot.count,Ct.start+Ct.count-Ot.start):(++Mt,Z[Mt]=Ct)}Z.length=Mt+1;let ht=e.getParameter(i.UNPACK_ROW_LENGTH),_t=e.getParameter(i.UNPACK_SKIP_PIXELS),Lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Kt=0,Ot=Z.length;Kt<Ot;Kt++){let Ct=Z[Kt],Tt=Math.floor(Ct.start/4),te=Math.ceil(Ct.count/4),ee=Tt%x.width,G=Math.floor(Tt/x.width),Et=te,vt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,ee,G,Et,vt,K,it,x.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ht),e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function Vt(I,x,K){let it=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=i.TEXTURE_3D);let tt=Ee(I,x),Z=x.source;e.bindTexture(it,I.__webglTexture,i.TEXTURE0+K);let Mt=n.get(Z);if(Z.version!==Mt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let vt=ye.getPrimaries(ye.workingColorSpace),Pt=x.colorSpace===Di?null:ye.getPrimaries(x.colorSpace),Bt=x.colorSpace===Di||vt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let _t=v(x.image,!1,s.maxTextureSize);_t=ve(x,_t);let Lt=r.convert(x.format,x.colorSpace),Kt=r.convert(x.type),Ot=E(x.internalFormat,Lt,Kt,x.normalized,x.colorSpace,x.isVideoTexture);Me(it,x);let Ct,Tt=x.mipmaps,te=x.isVideoTexture!==!0,ee=Mt.__version===void 0||tt===!0,G=Z.dataReady,Et=P(x,_t);if(x.isDepthTexture)Ot=R(x.format===as,x.type),ee&&(te?e.texStorage2D(i.TEXTURE_2D,1,Ot,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Ot,_t.width,_t.height,0,Lt,Kt,null));else if(x.isDataTexture)if(Tt.length>0){te&&ee&&e.texStorage2D(i.TEXTURE_2D,Et,Ot,Tt[0].width,Tt[0].height);for(let vt=0,Pt=Tt.length;vt<Pt;vt++)Ct=Tt[vt],te?G&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):e.texImage2D(i.TEXTURE_2D,vt,Ot,Ct.width,Ct.height,0,Lt,Kt,Ct.data);x.generateMipmaps=!1}else te?(ee&&e.texStorage2D(i.TEXTURE_2D,Et,Ot,_t.width,_t.height),G&&St(x,_t,Lt,Kt)):e.texImage2D(i.TEXTURE_2D,0,Ot,_t.width,_t.height,0,Lt,Kt,_t.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){te&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ot,Tt[0].width,Tt[0].height,_t.depth);for(let vt=0,Pt=Tt.length;vt<Pt;vt++)if(Ct=Tt[vt],x.format!==Jn)if(Lt!==null)if(te){if(G)if(x.layerUpdates.size>0){let Bt=kh(Ct.width,Ct.height,x.format,x.type);for(let bt of x.layerUpdates){let $t=Ct.data.subarray(bt*Bt/Ct.data.BYTES_PER_ELEMENT,(bt+1)*Bt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,bt,Ct.width,Ct.height,1,Lt,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Ct.width,Ct.height,_t.depth,Lt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,Ot,Ct.width,Ct.height,_t.depth,0,Ct.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Ct.width,Ct.height,_t.depth,Lt,Kt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,Ot,Ct.width,Ct.height,_t.depth,0,Lt,Kt,Ct.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{te&&ee&&e.texStorage2D(i.TEXTURE_2D,Et,Ot,Tt[0].width,Tt[0].height);for(let vt=0,Pt=Tt.length;vt<Pt;vt++)Ct=Tt[vt],x.format!==Jn?Lt!==null?te?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,Ct.width,Ct.height,Lt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,Ot,Ct.width,Ct.height,0,Ct.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?G&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):e.texImage2D(i.TEXTURE_2D,vt,Ot,Ct.width,Ct.height,0,Lt,Kt,Ct.data)}else if(x.isDataArrayTexture)if(te){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ot,_t.width,_t.height,_t.depth),G)if(x.layerUpdates.size>0){let vt=kh(_t.width,_t.height,x.format,x.type);for(let Pt of x.layerUpdates){let Bt=_t.data.subarray(Pt*vt/_t.data.BYTES_PER_ELEMENT,(Pt+1)*vt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,_t.width,_t.height,1,Lt,Kt,Bt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Lt,Kt,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,_t.width,_t.height,_t.depth,0,Lt,Kt,_t.data);else if(x.isData3DTexture)te?(ee&&e.texStorage3D(i.TEXTURE_3D,Et,Ot,_t.width,_t.height,_t.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Lt,Kt,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,_t.width,_t.height,_t.depth,0,Lt,Kt,_t.data);else if(x.isFramebufferTexture){if(ee)if(te)e.texStorage2D(i.TEXTURE_2D,Et,Ot,_t.width,_t.height);else{let vt=_t.width,Pt=_t.height;for(let Bt=0;Bt<Et;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,Ot,vt,Pt,0,Lt,Kt,null),vt>>=1,Pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let vt=i.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),_t.parentNode!==vt){vt.appendChild(_t),y.add(x),vt.onpaint=Pt=>{let Bt=Pt.changedElements;for(let bt of y)Bt.includes(bt.image)&&(bt.needsUpdate=!0)},vt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_t);else{let Bt=i.RGBA,bt=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Bt,bt,$t,_t)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(te&&ee){let vt=Pe(Tt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Ot,vt.width,vt.height)}for(let vt=0,Pt=Tt.length;vt<Pt;vt++)Ct=Tt[vt],te?G&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Lt,Kt,Ct):e.texImage2D(i.TEXTURE_2D,vt,Ot,Lt,Kt,Ct);x.generateMipmaps=!1}else if(te){if(ee){let vt=Pe(_t);e.texStorage2D(i.TEXTURE_2D,Et,Ot,vt.width,vt.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Kt,_t)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Lt,Kt,_t);p(x)&&U(it),Mt.__version=Z.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function oe(I,x,K){if(x.image.length!==6)return;let it=Ee(I,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+K);let Z=n.get(tt);if(tt.version!==Z.__version||it===!0){e.activeTexture(i.TEXTURE0+K);let Mt=ye.getPrimaries(ye.workingColorSpace),ht=x.colorSpace===Di?null:ye.getPrimaries(x.colorSpace),_t=x.colorSpace===Di||Mt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Lt=x.isCompressedTexture||x.image[0].isCompressedTexture,Kt=x.image[0]&&x.image[0].isDataTexture,Ot=[];for(let bt=0;bt<6;bt++)!Lt&&!Kt?Ot[bt]=v(x.image[bt],!0,s.maxCubemapSize):Ot[bt]=Kt?x.image[bt].image:x.image[bt],Ot[bt]=ve(x,Ot[bt]);let Ct=Ot[0],Tt=r.convert(x.format,x.colorSpace),te=r.convert(x.type),ee=E(x.internalFormat,Tt,te,x.normalized,x.colorSpace),G=x.isVideoTexture!==!0,Et=Z.__version===void 0||it===!0,vt=tt.dataReady,Pt=P(x,Ct);Me(i.TEXTURE_CUBE_MAP,x);let Bt;if(Lt){G&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ee,Ct.width,Ct.height);for(let bt=0;bt<6;bt++){Bt=Ot[bt].mipmaps;for(let $t=0;$t<Bt.length;$t++){let Dt=Bt[$t];x.format!==Jn?Tt!==null?G?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,0,0,Dt.width,Dt.height,Tt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,ee,Dt.width,Dt.height,0,Dt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,0,0,Dt.width,Dt.height,Tt,te,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,ee,Dt.width,Dt.height,0,Tt,te,Dt.data)}}}else{if(Bt=x.mipmaps,G&&Et){Bt.length>0&&Pt++;let bt=Pe(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ee,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Kt){G?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ot[bt].width,Ot[bt].height,Tt,te,Ot[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ee,Ot[bt].width,Ot[bt].height,0,Tt,te,Ot[bt].data);for(let $t=0;$t<Bt.length;$t++){let Fe=Bt[$t].image[bt].image;G?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,0,0,Fe.width,Fe.height,Tt,te,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,ee,Fe.width,Fe.height,0,Tt,te,Fe.data)}}else{G?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Tt,te,Ot[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ee,Tt,te,Ot[bt]);for(let $t=0;$t<Bt.length;$t++){let Dt=Bt[$t];G?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,0,0,Tt,te,Dt.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,ee,Tt,te,Dt.image[bt])}}}p(x)&&U(i.TEXTURE_CUBE_MAP),Z.__version=tt.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function Xt(I,x,K,it,tt,Z){let Mt=r.convert(K.format,K.colorSpace),ht=r.convert(K.type),_t=E(K.internalFormat,Mt,ht,K.normalized,K.colorSpace),Lt=n.get(x),Kt=n.get(K);if(Kt.__renderTarget=x,!Lt.__hasExternalTextures){let Ot=Math.max(1,x.width>>Z),Ct=Math.max(1,x.height>>Z);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,_t,Ot,Ct,x.depth,0,Mt,ht,null):e.texImage2D(tt,Z,_t,Ot,Ct,0,Mt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Ze(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,Kt.__webglTexture,0,We(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,Kt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(I,x,K){if(i.bindRenderbuffer(i.RENDERBUFFER,I),x.depthBuffer){let it=x.depthTexture,tt=it&&it.isDepthTexture?it.type:null,Z=R(x.stencilBuffer,tt),Mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ze(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(x),Z,x.width,x.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(x),Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,I)}else{let it=x.textures;for(let tt=0;tt<it.length;tt++){let Z=it[tt],Mt=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),_t=E(Z.internalFormat,Mt,ht,Z.normalized,Z.colorSpace);Ze(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(x),_t,x.width,x.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(x),_t,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_t,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ye(I,x,K){let it=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(x.depthTexture);if(tt.__renderTarget=x,(!tt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),it){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,x.depthTexture.addEventListener("dispose",z)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Me(i.TEXTURE_CUBE_MAP,x.depthTexture);let Lt=r.convert(x.depthTexture.format),Kt=r.convert(x.depthTexture.type),Ot;x.depthTexture.format===gi?Ot=i.DEPTH_COMPONENT24:x.depthTexture.format===as&&(Ot=i.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Ot,x.width,x.height,0,Lt,Kt,null)}}else xt(x.depthTexture,0);let Z=tt.__webglTexture,Mt=We(x),ht=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,_t=x.depthTexture.format===as?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===gi)Ze(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,ht,Z,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,_t,ht,Z,0);else if(x.depthTexture.format===as)Ze(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,ht,Z,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,_t,ht,Z,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(I){let x=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){let it=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),it){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,it.removeEventListener("dispose",tt)};it.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=it}if(I.depthTexture&&!x.__autoAllocateDepthBuffer)if(K)for(let it=0;it<6;it++)Ye(x.__webglFramebuffer[it],I,it);else{let it=I.texture.mipmaps;it&&it.length>0?Ye(x.__webglFramebuffer[0],I,0):Ye(x.__webglFramebuffer,I,0)}else if(K){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]===void 0)x.__webglDepthbuffer[it]=i.createRenderbuffer(),le(x.__webglDepthbuffer[it],I,!1);else{let tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Z)}}else{let it=I.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),le(x.__webglDepthbuffer,I,!1);else{let tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(I,x,K){let it=n.get(I);x!==void 0&&Xt(it.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&he(I)}function ke(I){let x=I.texture,K=n.get(I),it=n.get(x);I.addEventListener("dispose",w);let tt=I.textures,Z=I.isWebGLCubeRenderTarget===!0,Mt=tt.length>1;if(Mt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=x.version,o.memory.textures++),Z){K.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){K.__webglFramebuffer[ht]=[];for(let _t=0;_t<x.mipmaps.length;_t++)K.__webglFramebuffer[ht][_t]=i.createFramebuffer()}else K.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){K.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)K.__webglFramebuffer[ht]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ht=0,_t=tt.length;ht<_t;ht++){let Lt=n.get(tt[ht]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ze(I)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){let _t=tt[ht];K.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ht]);let Lt=r.convert(_t.format,_t.colorSpace),Kt=r.convert(_t.type),Ot=E(_t.internalFormat,Lt,Kt,_t.normalized,_t.colorSpace,I.isXRRenderTarget===!0),Ct=We(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Ot,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,K.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),le(K.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Me(i.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)Xt(K.__webglFramebuffer[ht][_t],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else Xt(K.__webglFramebuffer[ht],I,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(x)&&U(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,_t=tt.length;ht<_t;ht++){let Lt=tt[ht],Kt=n.get(Lt),Ot=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ot=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ot,Kt.__webglTexture),Me(Ot,Lt),Xt(K.__webglFramebuffer,I,Lt,i.COLOR_ATTACHMENT0+ht,Ot,0),p(Lt)&&U(Ot)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ht=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,it.__webglTexture),Me(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)Xt(K.__webglFramebuffer[_t],I,x,i.COLOR_ATTACHMENT0,ht,_t);else Xt(K.__webglFramebuffer,I,x,i.COLOR_ATTACHMENT0,ht,0);p(x)&&U(ht),e.unbindTexture()}I.depthBuffer&&he(I)}function ge(I){let x=I.textures;for(let K=0,it=x.length;K<it;K++){let tt=x[K];if(p(tt)){let Z=O(I),Mt=n.get(tt).__webglTexture;e.bindTexture(Z,Mt),U(Z),e.unbindTexture()}}}let ze=[],Ke=[];function cn(I){if(I.samples>0){if(Ze(I)===!1){let x=I.textures,K=I.width,it=I.height,tt=i.COLOR_BUFFER_BIT,Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(I),ht=x.length>1;if(ht)for(let Lt=0;Lt<x.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let _t=I.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Lt=0;Lt<x.length;Lt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Lt]);let Kt=n.get(x[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,K,it,0,0,K,it,tt,i.NEAREST),u===!0&&(ze.length=0,Ke.length=0,ze.push(i.COLOR_ATTACHMENT0+Lt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ze.push(Z),Ke.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ze))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Lt=0;Lt<x.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Lt]);let Kt=n.get(x[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&u){let x=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function We(I){return Math.min(s.maxSamples,I.samples)}function Ze(I){let x=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function H(I){let x=o.render.frame;g.get(I)!==x&&(g.set(I,x),I.update())}function ve(I,x){let K=I.colorSpace,it=I.format,tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==sa&&K!==Di&&(ye.getTransfer(K)===De?(it!==Jn||tt!==Dn)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",K)),x}function Pe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=dt,this.resetTextureUnits=Q,this.getTextureUnits=W,this.setTextureUnits=nt,this.setTexture2D=xt,this.setTexture2DArray=J,this.setTexture3D=ct,this.setTextureCube=ft,this.rebindTextures=Te,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Gx(i,t){function e(n,s=Di){let r,o=ye.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===Ch)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===Ih)return i.ALPHA;if(n===Lh)return i.RGB;if(n===Jn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Er)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===os)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===Pa||n===Ia||n===La||n===Da)if(o===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===wl||n===Tl||n===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===Cl||n===Rl||n===Pl||n===Il||n===Na||n===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===El||n===Cl)return o===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return r.COMPRESSED_R11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Na)return r.COMPRESSED_RG11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yl||n===Jl||n===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yl)return o===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===$l||n===Ua||n===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
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

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _a(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Rn({vertexShader:Hx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,o=null,c="local-floor",u=1,h=null,g=null,y=null,f=null,M=null,T=null,D=typeof XRWebGLBinding<"u",v=new Qh,p={},U=e.getContextAttributes(),O=null,E=null,R=[],P=[],z=new we,w=null,L=null,V=new Mn;V.viewport=new qe;let X=new Mn;X.viewport=new qe;let $=[V,X],Q=new dl,W=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(gt){let St=R[gt];return St===void 0&&(St=new vr,R[gt]=St),St.getTargetRaySpace()},this.getControllerGrip=function(gt){let St=R[gt];return St===void 0&&(St=new vr,R[gt]=St),St.getGripSpace()},this.getHand=function(gt){let St=R[gt];return St===void 0&&(St=new vr,R[gt]=St),St.getHandSpace()};function dt(gt){let St=P.indexOf(gt.inputSource);if(St===-1)return;let Vt=R[St];Vt!==void 0&&(Vt.update(gt.inputSource,gt.frame,h||o),Vt.dispatchEvent({type:gt.type,data:gt.inputSource}))}function lt(){s.removeEventListener("select",dt),s.removeEventListener("selectstart",dt),s.removeEventListener("selectend",dt),s.removeEventListener("squeeze",dt),s.removeEventListener("squeezestart",dt),s.removeEventListener("squeezeend",dt),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",xt);for(let gt=0;gt<R.length;gt++){let St=P[gt];St!==null&&(P[gt]=null,R[gt].disconnect(St))}W=null,nt=null,v.reset();for(let gt in p)delete p[gt];if(t.setRenderTarget(O),M=null,f=null,y=null,s=null,E=null,Ee.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(z.width,z.height,!1),L!==null){let gt=L.camera;gt.fov=L.fov,gt.zoom=L.zoom,gt.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(gt){r=gt,n.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(gt){c=gt,n.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(gt){h=gt},this.getBaseLayer=function(){return f!==null?f:M},this.getBinding=function(){return y===null&&D&&(y=new XRWebGLBinding(s,e)),y},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(gt){if(s=gt,s!==null){if(O=t.getRenderTarget(),s.addEventListener("select",dt),s.addEventListener("selectstart",dt),s.addEventListener("selectend",dt),s.addEventListener("squeeze",dt),s.addEventListener("squeezestart",dt),s.addEventListener("squeezeend",dt),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",xt),U.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(z),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Vt=null,oe=null,Xt=null;U.depth&&(Xt=U.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Vt=U.stencil?as:gi,oe=U.stencil?Ar:ri);let le={colorFormat:e.RGBA8,depthFormat:Xt,scaleFactor:r};y=this.getBinding(),f=y.createProjectionLayer(le),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Ln(f.textureWidth,f.textureHeight,{format:Jn,type:Dn,depthTexture:new Qi(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Vt),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Vt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:r};M=new XRWebGLLayer(s,e,Vt),s.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),E=new Ln(M.framebufferWidth,M.framebufferHeight,{format:Jn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await s.requestReferenceSpace(c),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function xt(gt){for(let St=0;St<gt.removed.length;St++){let Vt=gt.removed[St],oe=P.indexOf(Vt);oe>=0&&(P[oe]=null,R[oe].disconnect(Vt))}for(let St=0;St<gt.added.length;St++){let Vt=gt.added[St],oe=P.indexOf(Vt);if(oe===-1){for(let le=0;le<R.length;le++)if(le>=P.length){P.push(Vt),oe=le;break}else if(P[le]===null){P[le]=Vt,oe=le;break}if(oe===-1)break}let Xt=R[oe];Xt&&Xt.connect(Vt)}}let J=new et,ct=new et;function ft(gt,St,Vt){J.setFromMatrixPosition(St.matrixWorld),ct.setFromMatrixPosition(Vt.matrixWorld);let oe=J.distanceTo(ct),Xt=St.projectionMatrix.elements,le=Vt.projectionMatrix.elements,Ye=Xt[14]/(Xt[10]-1),he=Xt[14]/(Xt[10]+1),Te=(Xt[9]+1)/Xt[5],ke=(Xt[9]-1)/Xt[5],ge=(Xt[8]-1)/Xt[0],ze=(le[8]+1)/le[0],Ke=Ye*ge,cn=Ye*ze,We=oe/(-ge+ze),Ze=We*-ge;if(St.matrixWorld.decompose(gt.position,gt.quaternion,gt.scale),gt.translateX(Ze),gt.translateZ(We),gt.matrixWorld.compose(gt.position,gt.quaternion,gt.scale),gt.matrixWorldInverse.copy(gt.matrixWorld).invert(),Xt[10]===-1)gt.projectionMatrix.copy(St.projectionMatrix),gt.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{let H=Ye+We,ve=he+We,Pe=Ke-Ze,I=cn+(oe-Ze),x=Te*he/ve*H,K=ke*he/ve*H;gt.projectionMatrix.makePerspective(Pe,I,x,K,H,ve),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert()}}function Ht(gt,St){St===null?gt.matrixWorld.copy(gt.matrix):gt.matrixWorld.multiplyMatrices(St.matrixWorld,gt.matrix),gt.matrixWorldInverse.copy(gt.matrixWorld).invert()}this.updateCamera=function(gt){if(s===null)return;let St=gt.near,Vt=gt.far;v.texture!==null&&(v.depthNear>0&&(St=v.depthNear),v.depthFar>0&&(Vt=v.depthFar)),Q.near=X.near=V.near=St,Q.far=X.far=V.far=Vt,(W!==Q.near||nt!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),W=Q.near,nt=Q.far),Q.layers.mask=gt.layers.mask|6,V.layers.mask=Q.layers.mask&-5,X.layers.mask=Q.layers.mask&-3;let oe=gt.parent,Xt=Q.cameras;Ht(Q,oe);for(let le=0;le<Xt.length;le++)Ht(Xt[le],oe);Xt.length===2?ft(Q,V,X):Q.projectionMatrix.copy(V.projectionMatrix),L===null&&gt.isPerspectiveCamera&&(L={camera:gt,fov:gt.fov,zoom:gt.zoom}),Zt(gt,Q,oe)};function Zt(gt,St,Vt){Vt===null?gt.matrix.copy(St.matrixWorld):(gt.matrix.copy(Vt.matrixWorld),gt.matrix.invert(),gt.matrix.multiply(St.matrixWorld)),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.updateMatrixWorld(!0),gt.projectionMatrix.copy(St.projectionMatrix),gt.projectionMatrixInverse.copy(St.projectionMatrixInverse),gt.isPerspectiveCamera&&(gt.fov=Xo*2*Math.atan(1/gt.projectionMatrix.elements[5]),gt.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(f===null&&M===null))return u},this.setFoveation=function(gt){u=gt,f!==null&&(f.fixedFoveation=gt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=gt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(Q)},this.getCameraTexture=function(gt){return p[gt]};let Ue=null;function Me(gt,St){if(g=St.getViewerPose(h||o),T=St,g!==null){let Vt=g.views;M!==null&&(t.setRenderTargetFramebuffer(E,M.framebuffer),t.setRenderTarget(E));let oe=!1;Vt.length!==Q.cameras.length&&(Q.cameras.length=0,oe=!0);for(let he=0;he<Vt.length;he++){let Te=Vt[he],ke=null;if(M!==null)ke=M.getViewport(Te);else{let ze=y.getViewSubImage(f,Te);ke=ze.viewport,he===0&&(t.setRenderTargetTextures(E,ze.colorTexture,ze.depthStencilTexture),t.setRenderTarget(E))}let ge=$[he];ge===void 0&&(ge=new Mn,ge.layers.enable(he),ge.viewport=new qe,$[he]=ge),ge.matrix.fromArray(Te.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Te.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(ke.x,ke.y,ke.width,ke.height),he===0&&(Q.matrix.copy(ge.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),oe===!0&&Q.cameras.push(ge)}let Xt=s.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&D){y=n.getBinding();let he=y.getDepthInformation(Vt[0]);he&&he.isValid&&he.texture&&v.init(he,s.renderState)}if(Xt&&Xt.includes("camera-access")&&D){t.state.unbindTexture(),y=n.getBinding();for(let he=0;he<Vt.length;he++){let Te=Vt[he].camera;if(Te){let ke=p[Te];ke||(ke=new _a,p[Te]=ke);let ge=y.getCameraImage(Te);ke.sourceTexture=ge}}}}for(let Vt=0;Vt<R.length;Vt++){let oe=P[Vt],Xt=R[Vt];oe!==null&&Xt!==void 0&&Xt.update(oe,St,h||o)}Ue&&Ue(gt,St),St.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:St}),T=null}let Ee=new _f;Ee.setAnimationLoop(Me),this.setAnimationLoop=function(gt){Ue=gt},this.dispose=function(){}}},Xx=new Be,bf=new ce;bf.set(-1,0,0,0,1,0,0,0,1);function qx(i,t){function e(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,Fh(i)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function s(v,p,U,O,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(v,p):p.isMeshLambertMaterial?(r(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(v,p),y(v,p)):p.isMeshPhongMaterial?(r(v,p),g(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(v,p),f(v,p),p.isMeshPhysicalMaterial&&M(v,p,E)):p.isMeshMatcapMaterial?(r(v,p),T(v,p)):p.isMeshDepthMaterial?r(v,p):p.isMeshDistanceMaterial?(r(v,p),D(v,p)):p.isMeshNormalMaterial?r(v,p):p.isLineBasicMaterial?(o(v,p),p.isLineDashedMaterial&&c(v,p)):p.isPointsMaterial?u(v,p,U,O):p.isSpriteMaterial?h(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,e(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,e(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===pn&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,e(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===pn&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,e(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,e(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);let U=t.get(p),O=U.envMap,E=U.envMapRotation;O&&(v.envMap.value=O,v.envMapRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(E)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(bf),v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,v.aoMapTransform))}function o(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,e(p.map,v.mapTransform))}function c(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function u(v,p,U,O){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*U,v.scale.value=O*.5,p.map&&(v.map.value=p.map,e(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,e(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function g(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function y(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function f(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function M(v,p,U){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.retroreflectivity>0&&(v.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=U.texture,v.transmissionSamplerSize.value.set(U.width,U.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,p){p.matcap&&(v.matcap.value=p.matcap)}function D(v,p){let U=t.get(p).light;v.referencePosition.value.setFromMatrixPosition(U.matrixWorld),v.nearDistance.value=U.shadow.camera.near,v.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yx(i,t,e,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,R){let P=R.program;n.uniformBlockBinding(E,P)}function h(E,R){let P=s[E.id];P===void 0&&(v(E),P=g(E),s[E.id]=P,E.addEventListener("dispose",U));let z=R.program;n.updateUBOMapping(E,z);let w=t.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function g(E){let R=y();E.__bindingPointIndex=R;let P=i.createBuffer(),z=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,z,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,P),P}function y(){for(let E=0;E<c;E++)if(o.indexOf(E)===-1)return o.push(E),E;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let R=s[E.id],P=E.uniforms,z=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let w=0,L=P.length;w<L;w++){let V=P[w];if(Array.isArray(V))for(let X=0,$=V.length;X<$;X++)M(V[X],w,X,z);else M(V,w,0,z)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(E,R,P,z){if(D(E,R,P,z)===!0){let w=E.__offset,L=E.value;if(Array.isArray(L)){let V=0;for(let X=0;X<L.length;X++){let $=L[X],Q=p($);T($,E.__data,V),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(L,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,E.__data)}}function T(E,R,P){typeof E=="number"||typeof E=="boolean"?R[0]=E:E.isMatrix3?(R[0]=E.elements[0],R[1]=E.elements[1],R[2]=E.elements[2],R[3]=0,R[4]=E.elements[3],R[5]=E.elements[4],R[6]=E.elements[5],R[7]=0,R[8]=E.elements[6],R[9]=E.elements[7],R[10]=E.elements[8],R[11]=0):ArrayBuffer.isView(E)?R.set(new E.constructor(E.buffer,E.byteOffset,R.length)):E.toArray(R,P)}function D(E,R,P,z){let w=E.value,L=R+"_"+P;if(z[L]===void 0)return typeof w=="number"||typeof w=="boolean"?z[L]=w:ArrayBuffer.isView(w)?z[L]=w.slice():z[L]=w.clone(),!0;{let V=z[L];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return z[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(V.equals(w)===!1)return V.copy(w),!0}}return!1}function v(E){let R=E.uniforms,P=0,z=16;for(let L=0,V=R.length;L<V;L++){let X=Array.isArray(R[L])?R[L]:[R[L]];for(let $=0,Q=X.length;$<Q;$++){let W=X[$],nt=Array.isArray(W.value)?W.value:[W.value];for(let dt=0,lt=nt.length;dt<lt;dt++){let xt=nt[dt],J=p(xt),ct=P%z,ft=ct%J.boundary,Ht=ct+ft;P+=ft,Ht!==0&&z-Ht<J.storage&&(P+=z-Ht),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=P,P+=J.storage}}}let w=P%z;return w>0&&(P+=z-w),E.__size=P,E.__cache={},this}function p(E){let R={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(R.boundary=4,R.storage=4):E.isVector2?(R.boundary=8,R.storage=8):E.isVector3||E.isColor?(R.boundary=16,R.storage=12):E.isVector4?(R.boundary=16,R.storage=16):E.isMatrix3?(R.boundary=48,R.storage=48):E.isMatrix4?(R.boundary=64,R.storage=64):E.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(R.boundary=16,R.storage=E.byteLength):se("WebGLRenderer: Unsupported uniform value type.",E),R}function U(E){let R=E.target;R.removeEventListener("dispose",U);let P=o.indexOf(R.__bindingPointIndex);o.splice(P,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function O(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:u,update:h,dispose:O}}var Jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function Zx(){return Si===null&&(Si=new Is(Jx,16,16,os,ai),Si.name="DFG_LUT",Si.minFilter=fn,Si.magFilter=fn,Si.wrapS=mi,Si.wrapT=mi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var ac=class{constructor(t={}){let{canvas:e=Vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:f=!1,outputBufferType:M=Dn}=t;this.isWebGLRenderer=!0;let T;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=n.getContextAttributes().alpha}else T=o;let D=M,v=new Set([Sl,Ml,yl]),p=new Set([Dn,ri,Tr,Ar,xl,vl]),U=new Uint32Array(4),O=new Int32Array(4),E=new et,R=null,P=null,z=[],w=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,X=!1,$=null,Q=null,W=null,nt=null;this._outputColorSpace=Cn;let dt=0,lt=0,xt=null,J=-1,ct=null,ft=new qe,Ht=new qe,Zt=null,Ue=new ue(0),Me=0,Ee=e.width,gt=e.height,St=1,Vt=null,oe=null,Xt=new qe(0,0,Ee,gt),le=new qe(0,0,Ee,gt),Ye=!1,he=new yr,Te=!1,ke=!1,ge=new Be,ze=new et,Ke=new qe,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ze(){return xt===null?St:1}let H=n;function ve(b,k){return e.getContext(b,k)}let Pe,I,x,K,it,tt,Z,Mt,ht,_t,Lt,Kt,Ot,Ct,Tt,te,ee,G,Et,vt,Pt,Bt,bt;try{let b={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",mn,!1),H===null){let k="webgl2";if(H=ve(k,b),H===null)throw ve(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(b){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),ae("WebGLRenderer: "+b.message),b}function $t(){Pe=new n_(H),Pe.init(),Pt=new Gx(H,Pe),I=new qg(H,Pe,t,Pt),x=new zx(H,Pe),I.reversedDepthBuffer&&f&&x.buffers.depth.setReversed(!0),Q=H.createFramebuffer(),W=H.createFramebuffer(),nt=H.createFramebuffer(),K=new r_(H),it=new Ax,tt=new Vx(H,Pe,x,it,I,Pt,K),Z=new e_(V),Mt=new om(H),Bt=new Wg(H,Mt),ht=new i_(H,Mt,K,Bt),_t=new o_(H,ht,Mt,Bt,K),G=new a_(H,I,tt),Tt=new Yg(it),Lt=new Tx(V,Z,Pe,I,Bt,Tt),Kt=new qx(V,it),Ot=new Cx,Ct=new Nx(Pe),ee=new Hg(V,Z,x,_t,T,u),te=new kx(V,_t,I),bt=new Yx(H,K,I,x),Et=new Xg(H,Pe,K),vt=new s_(H,Pe,K),K.programs=Lt.programs,V.capabilities=I,V.extensions=Pe,V.properties=it,V.renderLists=Ot,V.shadowMap=te,V.state=x,V.info=K}D!==Dn&&(L=new c_(D,e.width,e.height,c,s,r));let Dt=new tu(V,H);this.xr=Dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(b){b!==void 0&&(St=b,this.setSize(Ee,gt,!1))},this.getSize=function(b){return b.set(Ee,gt)},this.setSize=function(b,k,rt=!0){if(Dt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=b,gt=k,e.width=Math.floor(b*St),e.height=Math.floor(k*St),rt===!0&&(e.style.width=b+"px",e.style.height=k+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(Ee*St,gt*St).floor()},this.setDrawingBufferSize=function(b,k,rt){Ee=b,gt=k,St=rt,e.width=Math.floor(b*rt),e.height=Math.floor(k*rt),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(D===Dn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ft)},this.getViewport=function(b){return b.copy(Xt)},this.setViewport=function(b,k,rt,Y){b.isVector4?Xt.set(b.x,b.y,b.z,b.w):Xt.set(b,k,rt,Y),x.viewport(ft.copy(Xt).multiplyScalar(St).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,k,rt,Y){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,k,rt,Y),x.scissor(Ht.copy(le).multiplyScalar(St).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(b){x.setScissorTest(Ye=b)},this.setOpaqueSort=function(b){Vt=b},this.setTransparentSort=function(b){oe=b},this.getClearColor=function(b){return b.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,rt=!0){let Y=0;if(b){let j=!1;if(xt!==null){let Ft=xt.texture.format;j=v.has(Ft)}if(j){let Ft=xt.texture.type,qt=p.has(Ft),Nt=ee.getClearColor(),Gt=ee.getClearAlpha(),kt=Nt.r,ie=Nt.g,de=Nt.b;qt?(U[0]=kt,U[1]=ie,U[2]=de,U[3]=Gt,H.clearBufferuiv(H.COLOR,0,U)):(O[0]=kt,O[1]=ie,O[2]=de,O[3]=Gt,H.clearBufferiv(H.COLOR,0,O))}else Y|=H.COLOR_BUFFER_BIT}k&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),$=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),ee.dispose(),Ot.dispose(),Ct.dispose(),it.dispose(),Z.dispose(),_t.dispose(),Bt.dispose(),bt.dispose(),Lt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",cs),Dt.removeEventListener("sessionend",Va),Zn.stop()};function Fe(b){b.preventDefault(),Uh("WebGLRenderer: Context Lost."),X=!0}function _e(){Uh("WebGLRenderer: Context Restored."),X=!1;let b=K.autoReset,k=te.enabled,rt=te.autoUpdate,Y=te.needsUpdate,j=te.type;$t(),K.autoReset=b,te.enabled=k,te.autoUpdate=rt,te.needsUpdate=Y,te.type=j}function mn(b){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gn(b){let k=b.target;k.removeEventListener("dispose",gn),cc(k)}function cc(b){Fs(b),it.remove(b)}function Fs(b){let k=it.get(b).programs;k!==void 0&&(k.forEach(function(rt){Lt.releaseProgram(rt)}),b.isShaderMaterial&&Lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,rt,Y,j,Ft){k===null&&(k=cn);let qt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Nt=Qt(b,k,rt,Y,j);x.setMaterial(Y,qt);let Gt=rt.index,kt=1;if(Y.wireframe===!0){if(Gt=ht.getWireframeAttribute(rt),Gt===void 0)return;kt=2}let ie=rt.drawRange,de=rt.attributes.position,Jt=ie.start*kt,Re=(ie.start+ie.count)*kt;Ft!==null&&(Jt=Math.max(Jt,Ft.start*kt),Re=Math.min(Re,(Ft.start+Ft.count)*kt)),Gt!==null?(Jt=Math.max(Jt,0),Re=Math.min(Re,Gt.count)):de!=null&&(Jt=Math.max(Jt,0),Re=Math.min(Re,de.count));let He=Re-Jt;if(He<0||He===1/0)return;Bt.setup(j,Y,Nt,rt,Gt);let Ie,Ne=Et;if(Gt!==null&&(Ie=Mt.get(Gt),Ne=vt,Ne.setIndex(Ie)),j.isMesh)Y.wireframe===!0?(x.setLineWidth(Y.wireframeLinewidth*Ze()),Ne.setMode(H.LINES)):Ne.setMode(H.TRIANGLES);else if(j.isLine){let Ve=Y.linewidth;Ve===void 0&&(Ve=1),x.setLineWidth(Ve*Ze()),j.isLineSegments?Ne.setMode(H.LINES):j.isLineLoop?Ne.setMode(H.LINE_LOOP):Ne.setMode(H.LINE_STRIP)}else j.isPoints?Ne.setMode(H.POINTS):j.isSprite&&Ne.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))Ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Ve=j._multiDrawStarts,Wt=j._multiDrawCounts,nn=j._multiDrawCount,Se=Gt?Mt.get(Gt).bytesPerElement:1,Tn=it.get(Y).currentProgram.getUniforms();for(let Nn=0;Nn<nn;Nn++)Tn.setValue(H,"_gl_DrawID",Nn),Ne.render(Ve[Nn]/Se,Wt[Nn])}else if(j.isInstancedMesh)Ne.renderInstances(Jt,He,j.count);else if(rt.isInstancedBufferGeometry){let Ve=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Wt=Math.min(rt.instanceCount,Ve);Ne.renderInstances(Jt,He,Wt)}else Ne.render(Jt,He)};function za(b,k,rt,Y){$!==null&&b.isNodeMaterial&&$.setObject(Y,b),Te===!0&&Tt.setState(b,rt,!1),b.transparent===!0&&b.side===yi&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,Bs(b,k,Y),b.side=is,b.needsUpdate=!0,Bs(b,k,Y),b.side=yi):Bs(b,k,Y)}this.compile=function(b,k,rt=null){rt===null&&(rt=b),$!==null&&$.renderStart(b,k,rt),P=Ct.get(rt),P.init(k),w.push(P),rt.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(P.pushLight(j),j.castShadow&&P.pushShadow(j))}),b!==rt&&b.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(P.pushLight(j),j.castShadow&&P.pushShadow(j))}),P.setupLights(),$!==null&&$.updateLights(P.state.lightsArray),ke=this.localClippingEnabled,Te=Tt.init(this.clippingPlanes,ke),Te===!0&&Tt.setGlobalState(this.clippingPlanes,k),$!==null&&te.render(P.state.shadowsArray,rt,k);let Y=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ft=j.material;if(Ft)if(Array.isArray(Ft))for(let qt=0;qt<Ft.length;qt++){let Nt=Ft[qt];za(Nt,rt,k,j),Y.add(Nt)}else za(Ft,rt,k,j),Y.add(Ft)}),P=w.pop(),$!==null&&$.renderEnd(),Y},this.compileAsync=function(b,k,rt=null){let Y=this.compile(b,k,rt);return new Promise(j=>{function Ft(){if(Y.forEach(function(qt){let Gt=it.get(qt).currentProgram;(Gt===void 0||Gt.isReady())&&Y.delete(qt)}),Y.size===0){j(b);return}setTimeout(Ft,10)}Pe.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let ls=null;function hc(b){ls&&ls(b)}function cs(){Zn.stop()}function Va(){Zn.start()}let Zn=new _f;Zn.setAnimationLoop(hc),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(b){ls=b,Dt.setAnimationLoop(b),b===null?Zn.stop():Zn.start()},Dt.addEventListener("sessionstart",cs),Dt.addEventListener("sessionend",Va),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;$!==null&&$.renderStart(b,k);let rt=Dt.enabled===!0&&Dt.isPresenting===!0,Y=L!==null&&(xt===null||rt)&&L.begin(V,xt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(k),k=Dt.getCamera()),b.isScene===!0&&b.onBeforeRender(V,b,k,xt),P=Ct.get(b,w.length),P.init(k),P.state.textureUnits=tt.getTextureUnits(),w.push(P),ge.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),he.setFromProjectionMatrix(ge,ii,k.reversedDepth),ke=this.localClippingEnabled,Te=Tt.init(this.clippingPlanes,ke),R=Ot.get(b,z.length),R.init(),z.push(R),Dt.enabled===!0&&Dt.isPresenting===!0){let qt=V.xr.getDepthSensingMesh();qt!==null&&hs(qt,k,-1/0,V.sortObjects)}hs(b,k,0,V.sortObjects),R.finish(),$!==null&&$.updateLights(P.state.lightsArray),V.sortObjects===!0&&R.sort(Vt,oe),We=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,We&&ee.addToRenderList(R,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&Tt.beginShadows();let j=P.state.shadowsArray;if(te.render(j,b,k),Te===!0&&Tt.endShadows(),(Y&&L.hasRenderPass())===!1){let qt=R.opaque,Nt=R.transmissive;if(P.setupLights(),k.isArrayCamera){let Gt=k.cameras;if(Nt.length>0)for(let kt=0,ie=Gt.length;kt<ie;kt++){let de=Gt[kt];Os(qt,Nt,b,de)}We&&ee.render(b);for(let kt=0,ie=Gt.length;kt<ie;kt++){let de=Gt[kt];oi(R,b,de,de.viewport)}}else Nt.length>0&&Os(qt,Nt,b,k),We&&ee.render(b),oi(R,b,k)}xt!==null&&lt===0&&(tt.updateMultisampleRenderTarget(xt),tt.updateRenderTargetMipmap(xt)),Y&&L.end(V),b.isScene===!0&&b.onAfterRender(V,b,k),Bt.resetDefaultState(),J=-1,ct=null,w.pop(),w.length>0?(P=w[w.length-1],tt.setTextureUnits(P.state.textureUnits),Te===!0&&Tt.setGlobalState(V.clippingPlanes,P.state.camera)):P=null,z.pop(),z.length>0?R=z[z.length-1]:R=null,$!==null&&$.renderEnd()};function hs(b,k,rt,Y){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)rt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)P.pushLightProbeGrid(b);else if(b.isLight)P.pushLight(b),b.castShadow&&P.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(he)){Y&&Ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ge);let qt=_t.update(b),Nt=b.material;Nt.visible&&R.push(b,qt,Nt,rt,Ke.z,null,k)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(he))){let qt=_t.update(b),Nt=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ke.copy(b.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Ke.copy(qt.boundingSphere.center)),Ke.applyMatrix4(b.matrixWorld).applyMatrix4(ge)),Array.isArray(Nt)){let Gt=qt.groups;for(let kt=0,ie=Gt.length;kt<ie;kt++){let de=Gt[kt],Jt=Nt[de.materialIndex];Jt&&Jt.visible&&R.push(b,qt,Jt,rt,Ke.z,de,k)}}else Nt.visible&&R.push(b,qt,Nt,rt,Ke.z,null,k)}}let Ft=b.children;for(let qt=0,Nt=Ft.length;qt<Nt;qt++)hs(Ft[qt],k,rt,Y)}function oi(b,k,rt,Y){let{opaque:j,transmissive:Ft,transparent:qt}=b;P.setupLightsView(rt),Te===!0&&Tt.setGlobalState(V.clippingPlanes,rt),Y&&x.viewport(ft.copy(Y)),j.length>0&&us(j,k,rt),Ft.length>0&&us(Ft,k,rt),qt.length>0&&us(qt,k,rt),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Os(b,k,rt,Y){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[Y.id]===void 0){let Jt=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[Y.id]=new Ln(1,1,{generateMipmaps:!0,type:Jt?ai:Dn,minFilter:rs,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ye.workingColorSpace})}let Ft=P.state.transmissionRenderTarget[Y.id],qt=Y.viewport||ft;Ft.setSize(qt.z*V.transmissionResolutionScale,qt.w*V.transmissionResolutionScale);let Nt=V.getRenderTarget(),Gt=V.getActiveCubeFace(),kt=V.getActiveMipmapLevel();V.setRenderTarget(Ft),V.getClearColor(Ue),Me=V.getClearAlpha(),Me<1&&V.setClearColor(16777215,.5),V.clear(),We&&ee.render(rt);let ie=V.toneMapping;V.toneMapping=si;let de=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),P.setupLightsView(Y),Te===!0&&Tt.setGlobalState(V.clippingPlanes,Y),us(b,rt,Y),tt.updateMultisampleRenderTarget(Ft),tt.updateRenderTargetMipmap(Ft),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Re=0,He=k.length;Re<He;Re++){let Ie=k[Re],{object:Ne,geometry:Ve,material:Wt,group:nn}=Ie;if(Wt.side===yi&&Ne.layers.test(Y.layers)){let Se=Wt.side;Wt.side=pn,Wt.needsUpdate=!0,Lr(Ne,rt,Y,Ve,Wt,nn),Wt.side=Se,Wt.needsUpdate=!0,Jt=!0}}Jt===!0&&(tt.updateMultisampleRenderTarget(Ft),tt.updateRenderTargetMipmap(Ft))}V.setRenderTarget(Nt,Gt,kt),V.setClearColor(Ue,Me),de!==void 0&&(Y.viewport=de),V.toneMapping=ie}function us(b,k,rt){let Y=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Ft=b.length;j<Ft;j++){let qt=b[j],{object:Nt,geometry:Gt,group:kt}=qt,ie=qt.material;ie.allowOverride===!0&&Y!==null&&(ie=Y),Nt.layers.test(rt.layers)&&Lr(Nt,k,rt,Gt,ie,kt)}}function Lr(b,k,rt,Y,j,Ft){$!==null&&j.isNodeMaterial&&$.setObject(b,j),b.onBeforeRender(V,k,rt,Y,j,Ft),b.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(V,k,rt,Y,b,Ft),j.transparent===!0&&j.side===yi&&j.forceSinglePass===!1?(j.side=pn,j.needsUpdate=!0,V.renderBufferDirect(rt,k,Y,j,b,Ft),j.side=is,j.needsUpdate=!0,V.renderBufferDirect(rt,k,Y,j,b,Ft),j.side=yi):V.renderBufferDirect(rt,k,Y,j,b,Ft),b.onAfterRender(V,k,rt,Y,j,Ft)}function Bs(b,k,rt){k.isScene!==!0&&(k=cn);let Y=it.get(b),j=P.state.lights,Ft=P.state.shadowsArray,qt=j.state.version,Nt=Lt.getParameters(b,j.state,Ft,k,rt,P.state.lightProbeGridArray),Gt=Lt.getProgramCacheKey(Nt),kt=Y.programs;Y.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Y.envMap=Z.get(b.envMap||Y.environment,ie),Y.envMapRotation=Y.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",gn),kt=new Map,Y.programs=kt);let de=kt.get(Gt);if(de!==void 0){if(Y.currentProgram===de&&Y.lightsStateVersion===qt)return ds(b,Nt),de}else Nt.uniforms=Lt.getUniforms(b),$!==null&&b.isNodeMaterial&&$.build(b,rt,Nt),b.onBeforeCompile(Nt,V),de=Lt.acquireProgram(Nt,Gt),kt.set(Gt,de),Y.uniforms=Nt.uniforms;let Jt=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Jt.clippingPlanes=Tt.uniform),ds(b,Nt),Y.needsLights=Ha(b),Y.lightsStateVersion=qt,Y.needsLights&&(Jt.ambientLightColor.value=j.state.ambient,Jt.lightProbe.value=j.state.probe,Jt.sunLights.value=j.state.sun,Jt.sunLightShadows.value=j.state.sunShadow,Jt.directionalLights.value=j.state.directional,Jt.directionalLightShadows.value=j.state.directionalShadow,Jt.spotLights.value=j.state.spot,Jt.spotLightShadows.value=j.state.spotShadow,Jt.rectAreaLights.value=j.state.rectArea,Jt.ltc_1.value=j.state.rectAreaLTC1,Jt.ltc_2.value=j.state.rectAreaLTC2,Jt.pointLights.value=j.state.point,Jt.pointLightShadows.value=j.state.pointShadow,Jt.hemisphereLights.value=j.state.hemi,Jt.sunShadowMatrix.value=j.state.sunShadowMatrix,Jt.sunShadowCascade.value=j.state.sunShadowCascade,Jt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Jt.spotLightMatrix.value=j.state.spotLightMatrix,Jt.spotLightMap.value=j.state.spotLightMap,Jt.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.lightProbeGrid=P.state.lightProbeGridArray.length>0,Y.currentProgram=de,Y.uniformsList=null,de}function Ga(b){if(b.uniformsList===null){let k=b.currentProgram.getUniforms();b.uniformsList=Pr.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function ds(b,k){let rt=it.get(b);rt.outputColorSpace=k.outputColorSpace,rt.batching=k.batching,rt.batchingColor=k.batchingColor,rt.instancing=k.instancing,rt.instancingColor=k.instancingColor,rt.instancingMorph=k.instancingMorph,rt.skinning=k.skinning,rt.morphTargets=k.morphTargets,rt.morphNormals=k.morphNormals,rt.morphColors=k.morphColors,rt.morphTargetsCount=k.morphTargetsCount,rt.numClippingPlanes=k.numClippingPlanes,rt.numIntersection=k.numClipIntersection,rt.vertexAlphas=k.vertexAlphas,rt.vertexTangents=k.vertexTangents,rt.toneMapping=k.toneMapping}function uc(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;E.setFromMatrixPosition(k.matrixWorld);for(let rt=0,Y=b.length;rt<Y;rt++){let j=b[rt];if(j.texture!==null&&j.boundingBox.containsPoint(E))return j}return null}function Qt(b,k,rt,Y,j){k.isScene!==!0&&(k=cn),tt.resetTextureUnits();let Ft=k.fog,qt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Nt=xt===null?V.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:ye.workingColorSpace,Gt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,kt=Z.get(Y.envMap||qt,Gt),ie=Y.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,de=!!rt.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Jt=!!rt.morphAttributes.position,Re=!!rt.morphAttributes.normal,He=!!rt.morphAttributes.color,Ie=si;Y.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Ie=V.toneMapping);let Ne=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ve=Ne!==void 0?Ne.length:0,Wt=it.get(Y),nn=P.state.lights;if(Te===!0&&(ke===!0||b!==ct)){let Oe=b===ct&&Y.id===J;Tt.setState(Y,b,Oe)}let Se=!1;Y.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==nn.state.version||Wt.outputColorSpace!==Nt||j.isBatchedMesh&&Wt.batching===!1||!j.isBatchedMesh&&Wt.batching===!0||j.isBatchedMesh&&Wt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Wt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Wt.instancing===!1||!j.isInstancedMesh&&Wt.instancing===!0||j.isSkinnedMesh&&Wt.skinning===!1||!j.isSkinnedMesh&&Wt.skinning===!0||j.isInstancedMesh&&Wt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Wt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Wt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Wt.instancingMorph===!1&&j.morphTexture!==null||Wt.envMap!==kt||Y.fog===!0&&Wt.fog!==Ft||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Tt.numPlanes||Wt.numIntersection!==Tt.numIntersection)||Wt.vertexAlphas!==ie||Wt.vertexTangents!==de||Wt.morphTargets!==Jt||Wt.morphNormals!==Re||Wt.morphColors!==He||Wt.toneMapping!==Ie||Wt.morphTargetsCount!==Ve||!!Wt.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Wt.__version=Y.version);let Tn=Wt.currentProgram;Se===!0&&(Tn=Bs(Y,k,j),$&&Y.isNodeMaterial&&$.onUpdateProgram(Y,Tn,Wt));let Nn=!1,li=!1,Un=!1,Le=Tn.getUniforms(),Ge=Wt.uniforms;if(x.useProgram(Tn.program)&&(Nn=!0,li=!0,Un=!0),Y.id!==J&&(J=Y.id,li=!0),Wt.needsLights){let Oe=uc(P.state.lightProbeGridArray,j);Wt.lightProbeGrid!==Oe&&(Wt.lightProbeGrid=Oe,li=!0)}if(Nn||ct!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Le.setValue(H,"projectionMatrix",b.projectionMatrix),Le.setValue(H,"viewMatrix",b.matrixWorldInverse);let hi=Le.map.cameraPosition;hi!==void 0&&hi.setValue(H,ze.setFromMatrixPosition(b.matrixWorld)),I.logarithmicDepthBuffer&&Le.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Le.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),ct!==b&&(ct=b,li=!0,Un=!0)}if(Wt.needsLights&&(nn.state.sunShadowMap.length>0&&Le.setValue(H,"sunShadowMap",nn.state.sunShadowMap,tt),nn.state.directionalShadowMap.length>0&&Le.setValue(H,"directionalShadowMap",nn.state.directionalShadowMap,tt),nn.state.spotShadowMap.length>0&&Le.setValue(H,"spotShadowMap",nn.state.spotShadowMap,tt),nn.state.pointShadowMap.length>0&&Le.setValue(H,"pointShadowMap",nn.state.pointShadowMap,tt)),j.isSkinnedMesh){Le.setOptional(H,j,"bindMatrix"),Le.setOptional(H,j,"bindMatrixInverse");let Oe=j.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Le.setValue(H,"boneTexture",Oe.boneTexture,tt))}j.isBatchedMesh&&(Le.setOptional(H,j,"batchingTexture"),Le.setValue(H,"batchingTexture",j._matricesTexture,tt),Le.setOptional(H,j,"batchingIdTexture"),Le.setValue(H,"batchingIdTexture",j._indirectTexture,tt),Le.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Le.setValue(H,"batchingColorTexture",j._colorsTexture,tt));let ci=rt.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&G.update(j,rt,Tn),(li||Wt.receiveShadow!==j.receiveShadow)&&(Wt.receiveShadow=j.receiveShadow,Le.setValue(H,"receiveShadow",j.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Ge.envMapIntensity.value=k.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=Zx()),li){if(Le.setValue(H,"toneMappingExposure",V.toneMappingExposure),Wt.needsLights&&en(Ge,Un),Ft&&Y.fog===!0&&Kt.refreshFogUniforms(Ge,Ft),Kt.refreshMaterialUniforms(Ge,Y,St,gt,P.state.transmissionRenderTarget[b.id]),Wt.needsLights&&Wt.lightProbeGrid){let Oe=Wt.lightProbeGrid;Ge.probesSH.value=Oe.texture,Ge.probesMin.value.copy(Oe.boundingBox.min),Ge.probesMax.value.copy(Oe.boundingBox.max),Ge.probesResolution.value.copy(Oe.resolution)}Pr.upload(H,Ga(Wt),Ge,tt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Pr.upload(H,Ga(Wt),Ge,tt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Le.setValue(H,"center",j.center),Le.setValue(H,"modelViewMatrix",j.modelViewMatrix),Le.setValue(H,"normalMatrix",j.normalMatrix),Le.setValue(H,"modelMatrix",j.matrixWorld),Y.uniformsGroups!==void 0){let Oe=Y.uniformsGroups;for(let hi=0,Ni=Oe.length;hi<Ni;hi++){let Wa=Oe[hi];bt.update(Wa,Tn),bt.bind(Wa,Tn)}}return Tn}function en(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.sunLights.needsUpdate=k,b.sunLightShadows.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Ha(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return dt},this.getActiveMipmapLevel=function(){return lt},this.getRenderTarget=function(){return xt},this.setRenderTargetTextures=function(b,k,rt){let Y=it.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),it.get(b.texture).__webglTexture=k,it.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:rt,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){let rt=it.get(b);rt.__webglFramebuffer=k,rt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,rt=0){xt=b,dt=k,lt=rt;let Y=null,j=!1,Ft=!1;if(b){let Nt=it.get(b);if(Nt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(H.FRAMEBUFFER,Nt.__webglFramebuffer),ft.copy(b.viewport),Ht.copy(b.scissor),Zt=b.scissorTest,x.viewport(ft),x.scissor(Ht),x.setScissorTest(Zt),J=-1;return}else if(Nt.__webglFramebuffer===void 0)tt.setupRenderTarget(b);else if(Nt.__hasExternalTextures)tt.rebindTextures(b,it.get(b.texture).__webglTexture,it.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ie=b.depthTexture;if(Nt.__boundDepthTexture!==ie){if(ie!==null&&it.has(ie)&&(b.width!==ie.image.width||b.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(b)}}let Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ft=!0);let kt=it.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?Y=kt[k][rt]:Y=kt[k],j=!0):b.samples>0&&tt.useMultisampledRTT(b)===!1?Y=it.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?Y=kt[rt]:Y=kt,ft.copy(b.viewport),Ht.copy(b.scissor),Zt=b.scissorTest}else ft.copy(Xt).multiplyScalar(St).floor(),Ht.copy(le).multiplyScalar(St).floor(),Zt=Ye;if(rt!==0&&(Y=Q),x.bindFramebuffer(H.FRAMEBUFFER,Y)&&x.drawBuffers(b,Y),x.viewport(ft),x.scissor(Ht),x.setScissorTest(Zt),j){let Nt=it.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Nt.__webglTexture,rt)}else if(Ft){let Nt=k;for(let Gt=0;Gt<b.textures.length;Gt++){let kt=it.get(b.textures[Gt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Gt,kt.__webglTexture,rt,Nt)}}else if(b!==null&&rt!==0){let Nt=it.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,rt)}J=-1};function Gn(b){let k=it.get(b);return(k.__readFormat!==b.format||k.__readType!==b.type)&&(k.__readFormat=b.format,k.__readType=b.type,k.__formatReadable=I.textureFormatReadable(b.format),k.__typeReadable=I.textureTypeReadable(b.type)),k}this.readRenderTargetPixels=function(b,k,rt,Y,j,Ft,qt,Nt=0){if(!(b&&b.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&qt!==void 0&&(Gt=Gt[qt]),Gt){x.bindFramebuffer(H.FRAMEBUFFER,Gt);try{let kt=b.textures[Nt],ie=kt.format,de=kt.type;b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt);let Jt=Gn(kt);if(Jt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-Y&&rt>=0&&rt<=b.height-j&&H.readPixels(k,rt,Y,j,Pt.convert(ie),Pt.convert(de),Ft)}finally{let kt=xt!==null?it.get(xt).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(b,k,rt,Y,j,Ft,qt,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&qt!==void 0&&(Gt=Gt[qt]),Gt)if(k>=0&&k<=b.width-Y&&rt>=0&&rt<=b.height-j){x.bindFramebuffer(H.FRAMEBUFFER,Gt);let kt=b.textures[Nt],ie=kt.format,de=kt.type;b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt);let Jt=Gn(kt);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Re),H.bufferData(H.PIXEL_PACK_BUFFER,Ft.byteLength,H.STREAM_READ),H.readPixels(k,rt,Y,j,Pt.convert(ie),Pt.convert(de),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let He=xt!==null?it.get(xt).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,He);let Ie=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Hd(H,Ie,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Re),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ft),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Re),H.deleteSync(Ie),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,rt=0){let Y=Math.pow(2,-rt),j=Math.floor(b.image.width*Y),Ft=Math.floor(b.image.height*Y),qt=k!==null?k.x:0,Nt=k!==null?k.y:0;tt.setTexture2D(b,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,qt,Nt,j,Ft),x.unbindTexture()},this.copyTextureToTexture=function(b,k,rt=null,Y=null,j=0,Ft=0){let qt,Nt,Gt,kt,ie,de,Jt,Re,He,Ie=b.isCompressedTexture?b.mipmaps[Ft]:b.image;if(rt!==null)qt=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,Gt=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,ie=rt.min.y,de=rt.isBox3?rt.min.z:0;else{let Ge=Math.pow(2,-j);qt=Math.floor(Ie.width*Ge),Nt=Math.floor(Ie.height*Ge),b.isDataArrayTexture?Gt=Ie.depth:b.isData3DTexture?Gt=Math.floor(Ie.depth*Ge):Gt=1,kt=0,ie=0,de=0}Y!==null?(Jt=Y.x,Re=Y.y,He=Y.z):(Jt=0,Re=0,He=0);let Ne=Pt.convert(k.format),Ve=Pt.convert(k.type),Wt;k.isData3DTexture?(tt.setTexture3D(k,0),Wt=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(tt.setTexture2DArray(k,0),Wt=H.TEXTURE_2D_ARRAY):(tt.setTexture2D(k,0),Wt=H.TEXTURE_2D),x.activeTexture(H.TEXTURE0),x.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let nn=x.getParameter(H.UNPACK_ROW_LENGTH),Se=x.getParameter(H.UNPACK_IMAGE_HEIGHT),Tn=x.getParameter(H.UNPACK_SKIP_PIXELS),Nn=x.getParameter(H.UNPACK_SKIP_ROWS),li=x.getParameter(H.UNPACK_SKIP_IMAGES);x.pixelStorei(H.UNPACK_ROW_LENGTH,Ie.width),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie.height),x.pixelStorei(H.UNPACK_SKIP_PIXELS,kt),x.pixelStorei(H.UNPACK_SKIP_ROWS,ie),x.pixelStorei(H.UNPACK_SKIP_IMAGES,de);let Un=b.isDataArrayTexture||b.isData3DTexture,Le=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){let Ge=it.get(b),ci=it.get(k),Oe=it.get(Ge.__renderTarget),hi=it.get(ci.__renderTarget);x.bindFramebuffer(H.READ_FRAMEBUFFER,Oe.__webglFramebuffer),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Ni=0;Ni<Gt;Ni++)Un&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,it.get(b).__webglTexture,j,de+Ni),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,it.get(k).__webglTexture,Ft,He+Ni)),H.blitFramebuffer(kt,ie,qt,Nt,Jt,Re,qt,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||it.has(b)){let Ge=it.get(b),ci=it.get(k);x.bindFramebuffer(H.READ_FRAMEBUFFER,W),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,nt);for(let Oe=0;Oe<Gt;Oe++)Un?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.__webglTexture,j,de+Oe):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ge.__webglTexture,j),Le?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ci.__webglTexture,Ft,He+Oe):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ci.__webglTexture,Ft),j!==0?H.blitFramebuffer(kt,ie,qt,Nt,Jt,Re,qt,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):Le?H.copyTexSubImage3D(Wt,Ft,Jt,Re,He+Oe,kt,ie,qt,Nt):H.copyTexSubImage2D(Wt,Ft,Jt,Re,kt,ie,qt,Nt);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Le?b.isDataTexture||b.isData3DTexture?H.texSubImage3D(Wt,Ft,Jt,Re,He,qt,Nt,Gt,Ne,Ve,Ie.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,Ft,Jt,Re,He,qt,Nt,Gt,Ne,Ie.data):H.texSubImage3D(Wt,Ft,Jt,Re,He,qt,Nt,Gt,Ne,Ve,Ie):b.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ft,Jt,Re,qt,Nt,Ne,Ve,Ie.data):b.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ft,Jt,Re,Ie.width,Ie.height,Ne,Ie.data):H.texSubImage2D(H.TEXTURE_2D,Ft,Jt,Re,qt,Nt,Ne,Ve,Ie);x.pixelStorei(H.UNPACK_ROW_LENGTH,nn),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Se),x.pixelStorei(H.UNPACK_SKIP_PIXELS,Tn),x.pixelStorei(H.UNPACK_SKIP_ROWS,Nn),x.pixelStorei(H.UNPACK_SKIP_IMAGES,li),Ft===0&&k.generateMipmaps&&H.generateMipmap(Wt),x.unbindTexture()},this.initRenderTarget=function(b){it.get(b).__webglFramebuffer===void 0&&tt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?tt.setTextureCube(b,0):b.isData3DTexture?tt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?tt.setTexture2DArray(b,0):tt.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){dt=0,lt=0,xt=null,x.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};function wf(i){let t,e="context";try{let L=i.getContext("webgl2",{antialias:!0,alpha:!1});if(!L)return console.warn("[Star Rush WebGL] webgl2 context unavailable; returning null for fallback handling"),null;e="renderer",t=new ac({canvas:i,context:L,antialias:!0,alpha:!1,powerPreference:"default"})}catch(L){return console.warn("[Star Rush WebGL] "+e+" initialization failed; returning null for fallback handling:",L?.message||String(L)),null}t.outputColorSpace=Cn,t.toneMapping=Ea,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=fl,t.setPixelRatio(Math.min(devicePixelRatio||1,1.5));let n=new ha;n.fog=new ca("#cbddec",125,460);let s=new Mn(62,1,.12,850),r=new ba("#e7f4ff","#a08ba5",2.2),o=new Ta("#fff0de",2.4);o.position.set(-30,60,25),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-55,right:55,top:45,bottom:-45,near:1,far:160}),o.shadow.bias=-4e-4,n.add(r,o,o.target);let c=new Is(new Uint8Array([95,145,195,245]),4,1,Er);c.minFilter=$e,c.magFilter=$e,c.needsUpdate=!0;let u=new Map,h=new Be,g=new Map,y=new Map,f=new bn(new va(650,16,8),new Rn({side:pn,depthWrite:!1,uniforms:{top:{value:new ue("#8fbee6")},bottom:{value:new ue("#f0e8f0")}},vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vDirection;uniform vec3 top,bottom;void main(){float h=smoothstep(-.05,.8,normalize(vDirection).y);gl_FragColor=vec4(mix(bottom,top,h),1.0);}"}));f.renderOrder=-100,n.add(f);let M=1,T=0,D=0,v=0,p=0,U=16.7,O=0,E=0,R=2,P=["low","medium","high"];function z(L,V){L.renderId||(L.renderId=M++);let X=L.renderId+":"+(L.paintable&&V?V:"");if(y.has(X))return y.get(X);let $=L.sourceData,Q=[],W=[],nt=[],dt=V?new ue(V):null;for(let xt=0;xt<$.length;xt+=10){Q.push($[xt],$[xt+1],$[xt+2]),W.push($[xt+3],$[xt+4],$[xt+5]);let J=$[xt+6],ct=$[xt+7],ft=$[xt+8],Ht=L.paintable&&dt&&ct-J>.14&&ft-J>.2;nt.push(Ht?dt.r:J,Ht?dt.g:ct,Ht?dt.b:ft)}let lt=new zn;return lt.setAttribute("position",new an(Q,3)),lt.setAttribute("normal",new an(W,3)),lt.setAttribute("color",new an(nt,3)),lt.setIndex(Array.from(L.sourceIndices)),lt.computeBoundingSphere(),y.set(X,lt),L.onDispose=()=>{for(let[xt,J]of y)if(xt.startsWith(L.renderId+":")){for(let[ct,ft]of u)ft.geometry===J&&(n.remove(ft),ft.dispose(),u.delete(ct));J.dispose(),y.delete(xt)}},lt}function w(L,V,X,$,Q,W={}){let nt=performance.now();if(p){let J=nt-p;J<100&&(U+=(J-U)*.035)}p=nt,W.quality==="auto"&&(U>23?(O++,E=0):U<16.9?(E++,O=0):(O=0,E=0),O>90&&R>0&&(R--,O=0),E>360&&R<2&&(R++,E=0));let dt=W.quality==="auto"?P[R]:W.quality,lt=dt==="low"?1:dt==="medium"?1.2:Math.min(devicePixelRatio||1,1.5);lt!==v&&(t.setPixelRatio(lt),v=lt),(X!==T||$!==D)&&(t.setSize(X,$,!1),T=X,D=$),s.aspect=X/$,s.fov=Q,s.updateProjectionMatrix(),s.position.fromArray(V.eye),s.lookAt(new et(...V.target)),f.position.copy(s.position);let xt=new Map;for(let J of L){if(!J.mesh.sourceIndices.length)continue;let ct=z(J.mesh,J.tint),ft=J.opacity??1,Ht=ct.uuid+":"+J.shadow+":"+ft,Zt=xt.get(Ht);Zt||(Zt={geometry:ct,shadow:J.shadow,opacity:ft,items:[]},xt.set(Ht,Zt)),Zt.items.push(J)}for(let J of u.values())J.visible=!1;for(let[J,ct]of xt){let ft=u.get(J);if(!ft||ft.instanceMatrix.count<ct.items.length){ft&&(n.remove(ft),ft.dispose());let Ht=g.get(ct.opacity);Ht||(Ht=new ya({vertexColors:!0,gradientMap:c,transparent:ct.opacity<1,opacity:ct.opacity,depthWrite:ct.opacity>=1}),g.set(ct.opacity,Ht)),ft=new ma(ct.geometry,Ht,Math.max(4,ct.items.length+8)),ft.instanceMatrix.setUsage(Dh),ft.frustumCulled=!0,ft.receiveShadow=ct.opacity>=1,n.add(ft),u.set(J,ft)}ft.count=ct.items.length,ft.castShadow=ct.shadow&&dt!=="low",ft.visible=!0;for(let Ht=0;Ht<ct.items.length;Ht++)h.fromArray(ct.items[Ht].m),ft.setMatrixAt(Ht,h);ft.instanceMatrix.needsUpdate=!0,ft.computeBoundingSphere()}return t.shadowMap.enabled=dt!=="low",t.render(n,s),{drawCalls:t.info.render.calls,triangles:t.info.render.triangles,effectiveQuality:dt}}return{render:w,renderer:t,scene:n}}function Tf(i,t=wf){let e=t(i);if(e)return{canvas:i,threeBackend:e,software:!1,softwareContext:null};let n=r=>{try{return r.getContext("2d")}catch{return null}},s=n(i);if(!s){let r=i.cloneNode(!1);if(s=n(r),!s)throw new Error("\u65E0\u6CD5\u521D\u59CB\u5316 WebGL \u6216 Canvas \u663E\u793A\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6216\u66F4\u6362\u652F\u6301\u7684\u6D4F\u89C8\u5668\u3002");i.replaceWith(r),i=r}return{canvas:i,threeBackend:null,software:!0,softwareContext:s}}function Af(i,t){for(let e of i.querySelectorAll("#trackPicker [data-track]")){let n=t[e.dataset.track];if(!n||e.querySelector(".course-art"))continue;let s=i.createElement("img");s.className="course-art",s.alt="",s.setAttribute("aria-hidden","true"),s.draggable=!1,s.decoding="async",s.hidden=!0,s.width=512,s.height=256,s.onload=()=>{s.hidden=!1,e.dataset.art="ready"},s.onerror=()=>{s.remove(),delete e.dataset.art},e.prepend(s),s.src=n}}(()=>{"use strict";let i=document.getElementById("scene"),t=document.getElementById("error"),e=document.getElementById("loading");function n(c){t.hidden=!1,document.getElementById("error-text").textContent=c,e.classList.add("done")}let s=!1,r={light:"/assets/impact-audio/rail-light-v2.e9daa5ac2bd3.wav",medium:"/assets/impact-audio/rail-medium-v2.9e322b68b6d0.wav"},o=!1;try{let y=function(a,l,d){let m=[];if(d){let S=(a%l+l)%l;for(let A=0;A<l;A+=40){let C=A-S;C-=Math.round(C/l)*l,C>=-40&&C<210&&m.push({s:A,ds:C})}}else for(let S=Math.ceil((a-40)/40)*40;S<a+210;S+=40)m.push({s:S,ds:S-a});return m},M=function(a,l,d,m,S,A){let C=[];for(let F of a){if(!l.includes(F.mesh))continue;let B=d(ct(F.m,[0,2.28,0]));!B||B[2]>150||B[0]<-B[3]*3||B[0]>m+B[3]*3||B[1]<-B[3]*3||B[1]>S+B[3]*3||C.push({item:F,q:B})}return C.sort((F,B)=>F.q[2]-B.q[2]).slice(0,6).map(({item:F,q:B})=>{let q=F.mesh,at=q.sourceData,pt=q.sourceIndices,mt=[],yt=P(E(A,ct(F.m,[0,2.28,0])),[F.m[8],F.m[9],F.m[10]])>=0,Rt=pt.length-6*cn.i.length;for(let ut=0;ut<at.length;ut+=10)mt.push(d(ct(F.m,[at[ut],at[ut+1],at[ut+2]])));let Ut=f.get(q);if(!Ut){Ut=[];for(let ut=0;ut<pt.length;ut+=3){let ot=pt[ut]*10+6;Ut.push("rgb("+[0,1,2].map(At=>Math.round(Math.pow(at[ot+At],1/2.2)*255)).join(",")+")")}f.set(q,Ut)}let fe=[];for(let ut=0;ut<pt.length;ut+=3){let ot=[mt[pt[ut]],mt[pt[ut+1]],mt[pt[ut+2]]];if(ot.some(It=>!It))continue;let At=ut<cn.i.length?0:ut>=Rt?yt?2:1:yt?1:2;fe.push({p:ot,color:Ut[ut/3],layer:At,depth:(ot[0][2]+ot[1][2]+ot[2][2])/3})}return fe.sort((ut,ot)=>ut.layer-ot.layer||ot.depth-ut.depth),{kind:"sign",q:B,triangles:fe}})},T=function(a,l){for(let{p:d,color:m}of l.triangles)a.fillStyle=m,a.beginPath(),a.moveTo(d[0][0],d[0][1]),a.lineTo(d[1][0],d[1][1]),a.lineTo(d[2][0],d[2][1]),a.closePath(),a.fill()},D=function(a){let l=g,d=i.width,m=i.height;l.setTransform(1,0,0,1,0,0);let S=l.createLinearGradient(0,0,0,m);S.addColorStop(0,"#96c8ee"),S.addColorStop(.62,"#f2e6ee"),S.addColorStop(.63,"#cbd8c1"),S.addColorStop(1,"#bdcdb8"),l.fillStyle=S,l.fillRect(0,0,d,m);let A=a.eye,C=a.target,F=L(E(C,A)),B=L(z(F,[0,1,0])),q=z(B,F),at=m/(2*Math.tan(Vs*Math.PI/360)),pt=ut=>{let ot=E(ut,A),At=P(ot,F);return At<.25?null:[d/2+P(ot,B)*at/At,m/2-P(ot,q)*at/At,At,at/At]},mt=(ut,ot)=>{let At=ut.map(pt);At.some(It=>!It)||(l.fillStyle=ot,l.beginPath(),At.forEach((It,Yt)=>Yt?l.lineTo(It[0],It[1]):l.moveTo(It[0],It[1])),l.closePath(),l.fill())},yt=ut=>E(ut,a.origin),Rt=[];for(let ut=-40;ut<240;ut+=5){let ot=_.s+ut,At=xe(ot),It=xe(ot+5);Rt.push({d:ut,a:At,b:It})}for(let ut of Rt.reverse()){let ot=(At,It,Yt)=>yt(O(O(At.p,R(At.R,It)),[0,Yt,0]));if(mt([ot(ut.a,-10,0),ot(ut.a,10,0),ot(ut.b,10,0),ot(ut.b,-10,0)],"#e3dce5"),mt([ot(ut.a,-7,.05),ot(ut.a,7,.05),ot(ut.b,7,.05),ot(ut.b,-7,.05)],"#7b829a"),Math.floor(ut.d/5)%2===0)for(let At of[-2.3,2.3])mt([ot(ut.a,At-.04,.06),ot(ut.a,At+.04,.06),ot(ut.b,At+.04,.06),ot(ut.b,At-.04,.06)],"#e9edf1");for(let At of[-1,1])mt([ot(ut.a,At*8.1,.4),ot(ut.a,At*8.1,.8),ot(ut.b,At*8.1,.8),ot(ut.b,At*8.1,.4)],"#c0cfe2")}let Ut=typeof kr<"u"&&typeof Un<"u"?M(kr,[Un.get("left"),Un.get("right")],pt,d,m,A):[];if(typeof o<"u"&&o){let ut=[...Ut];for(let ot=0;ot<210;ot+=20)for(let At of[-1,1]){let It=Ce(Math.floor((_.s+ot)/20)*20,At*12,0),Yt=pt(yt(It));Yt&&ut.push({q:Yt,side:At,ds:ot,pos:It,kind:"tree"})}for(let ot of y(_.s,k,Qt==="circuit"))for(let At of[-1,1]){let It=pt(yt(Ce(ot.s,At*20,0)));It&&ut.push({q:It,kind:"house"})}for(let ot of ut.sort((At,It)=>It.q[2]-At.q[2])){if(ot.kind==="sign"){T(l,ot);continue}let[At,It,,Yt]=ot.q;if(ot.kind==="tree"){l.fillStyle="#a78a95",l.fillRect(At-Yt*.12,It-Yt*3.5,Yt*.24,Yt*3.5);for(let wt=0;wt<4;wt++)l.fillStyle=wt%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(At+Math.sin(wt*2)*Yt,It-Yt*(3.3+wt*.3),Yt*1.6,Yt*1.1,0,0,p),l.fill()}else{let wt=ot.q;l.fillStyle="#f3e9dc",l.fillRect(wt[0]-wt[3]*3,wt[1]-wt[3]*5,wt[3]*6,wt[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(wt[0]-wt[3]*3.5,wt[1]-wt[3]*5),l.lineTo(wt[0],wt[1]-wt[3]*6.3),l.lineTo(wt[0]+wt[3]*3.5,wt[1]-wt[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let Je=0;Je<3;Je++)l.fillRect(wt[0]+(Je-1.2)*wt[3]*1.5,wt[1]-wt[3]*3.9,wt[3],wt[3]*1.2)}}}else{let ut=[...Ut];for(let ot=0;ot<210;ot+=20)for(let At of[-1,1]){let It=Ce(Math.floor((_.s+ot)/20)*20,At*12,0),Yt=pt(yt(It));Yt&&ut.push({q:Yt,side:At,ds:ot,pos:It})}for(let ot of ut.sort((At,It)=>It.q[2]-At.q[2])){if(ot.kind==="sign"){T(l,ot);continue}let[At,It,,Yt]=ot.q;l.fillStyle="#a78a95",l.fillRect(At-Yt*.12,It-Yt*3.5,Yt*.24,Yt*3.5);for(let wt=0;wt<4;wt++)l.fillStyle=wt%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(At+Math.sin(wt*2)*Yt,It-Yt*(3.3+wt*.3),Yt*1.6,Yt*1.1,0,0,p),l.fill();if(ot.ds%40===0){let wt=pt(yt(Ce(_.s+ot.ds,ot.side*20,0)));if(wt){l.fillStyle="#f3e9dc",l.fillRect(wt[0]-wt[3]*3,wt[1]-wt[3]*5,wt[3]*6,wt[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(wt[0]-wt[3]*3.5,wt[1]-wt[3]*5),l.lineTo(wt[0],wt[1]-wt[3]*6.3),l.lineTo(wt[0]+wt[3]*3.5,wt[1]-wt[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let Je=0;Je<3;Je++)l.fillRect(wt[0]+(Je-1.2)*wt[3]*1.5,wt[1]-wt[3]*3.9,wt[3],wt[3]*1.2)}}}}for(let ut of ms)if(ut.life>0){let ot=pt(yt(ut.p));ot&&(l.fillStyle="#414957",l.fillRect(ot[0],ot[1],Math.max(1,ot[3]*.12),Math.max(2,ot[3]*ut.length)))}for(let ut of hn.values())for(let ot of ut.entities){if(Math.abs(Gt(ot.s,_.s))>170)continue;let At=pt(yt(Ce(ot.s+(ot.ds||0),ot.l+(ot.dl||0),.2)));if(!At||ot.kind==="coin"&&ot.hitLap===Math.max(0,Math.floor(_.s/k)))continue;let[It,Yt,,wt]=At;if(ot.kind==="coin")l.fillStyle="#ffe2a0",l.beginPath(),l.ellipse(It,Yt-wt*.8,wt*.25,wt*.38,0,0,p),l.fill();else if(ot.kind==="pad"){let Je=xe(ot.s),un=(xn,rn)=>yt(Ce(ot.s+xn,ot.l+rn,.07));mt([un(-1.2,-1.5),un(1.2,-1.5),un(1.2,1.5),un(-1.2,1.5)],"#92e3e5")}else if(ot.kind==="ramp"){let Je=(un,xn,rn)=>yt(Ce(ot.s+un,ot.l+xn,rn));mt([Je(-1.4,-1.5,.08),Je(1.4,-1.5,.85),Je(1.4,1.5,.85),Je(-1.4,1.5,.08)],"#bfa9e3")}else ot.kind==="cone"?(l.fillStyle="#eebd92",l.beginPath(),l.moveTo(It,Yt-wt*.8),l.lineTo(It-wt*.35,Yt),l.lineTo(It+wt*.35,Yt),l.fill()):ot.kind==="barrier"&&(l.fillStyle="#edacbb",l.fillRect(It-wt,Yt-wt*.7,wt*2,wt*.7))}let fe=(ut,ot,At,It,Yt,wt=1)=>{let Je=xe(ut),un=Ce(ut,ot,.05+It),xn=pt(yt(un));if(!xn)return;l.globalAlpha=wt;let rn=(Qs,ws,Hi)=>yt(O(un,O(R(Je.T,Qs*Math.cos(At)-Hi*Math.sin(At)),O(R(Je.R,Qs*Math.sin(At)+Hi*Math.cos(At)),[0,ws,0]))));mt([rn(-1.6,.3,-.8),rn(1.6,.3,-.8),rn(1.6,.7,.8),rn(-1.6,.7,.8)],Yt),mt([rn(-1.6,.65,-.8),rn(1.6,.65,-.8),rn(1.6,.65,.8),rn(-1.6,.65,.8)],"#eef1f7");for(let Qs of[-1,1])for(let ws of[-.87,.87]){let Hi=pt(rn(Qs,.35,ws));Hi&&(l.fillStyle="#3c4357",l.beginPath(),l.ellipse(Hi[0],Hi[1],xn[3]*.24,xn[3]*.34,0,0,p),l.fill())}let Qe=pt(rn(-.3,1.6,0));Qe&&(l.fillStyle="#f3d2be",l.beginPath(),l.arc(Qe[0],Qe[1],xn[3]*.33,0,p),l.fill(),l.fillStyle="#a9abe4",l.beginPath(),l.ellipse(Qe[0],Qe[1]-xn[3]*.18,xn[3]*.36,xn[3]*.2,0,Math.PI,p),l.fill()),l.globalAlpha=1};if(sn.line&&ne==="running")for(let ut=8;ut>=0;ut--){let ot=_.s+12+ut*9,At=xe(ot),It=V(At.curv*80,-2.1,2.1),Yt=(wt,Je)=>yt(Ce(ot+wt,It+Je,.09));mt([Yt(-.6,-.4),Yt(.3,0),Yt(-.6,.4),Yt(-.2,0)],Math.abs(At.curv)*_.speed>.95?"#f0b7c3":"#a5dbe6")}if(Gi&&ne==="running"&&fe(Gi.s,Gi.l,Gi.yaw,Gi.jump,"#b8e9e6",.35),typeof Xn<"u")for(let ut of Xn)fe(ut.s,ut.l,ut.yaw||0,0,ut.color);if(typeof st<"u"&&st.room)for(let ut of st.peers.values())ut.position&&fe(ut.position.s,ut.position.l,ut.position.yaw,ut.position.jump,"#eab5ce");if(_.mini>0||_.nitroTime>0||_.pad>0){let ut=xe(_.s),ot=pt(yt(Ce(_.s-2,_.l,.4+_.jump)));ot&&(l.fillStyle=_.nitroTime>0?"#bcb2ff99":"#95edff99",l.beginPath(),l.ellipse(ot[0],ot[1],ot[3]*.7,ot[3]*.45,0,0,p),l.fill())}fe(_.s,_.l,_.yaw,_.jump,typeof je<"u"?je.paint:"#8ccde4")},Q=function(a,l){let d=new Float32Array(16);for(let m=0;m<4;m++)for(let S=0;S<4;S++)d[m*4+S]=a[S]*l[m*4]+a[4+S]*l[m*4+1]+a[8+S]*l[m*4+2]+a[12+S]*l[m*4+3];return d},W=function(a,l,d){let m=$();return m[12]=a,m[13]=l,m[14]=d,m},nt=function(a,l,d){let m=$();return m[0]=a,m[5]=l,m[10]=d,m},dt=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([1,0,0,0,0,l,d,0,0,-d,l,0,0,0,0,1])},lt=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,0,-d,0,0,1,0,0,d,0,l,0,0,0,0,1])},xt=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,d,0,0,-d,l,0,0,0,0,1,0,0,0,0,1])},J=function(a=[0,0,0],l=[1,1,1],d=[0,0,0]){return Q(W(...a),Q(lt(d[1]),Q(dt(d[0]),Q(xt(d[2]),nt(...l)))))},ct=function(a,l){return[a[0]*l[0]+a[4]*l[1]+a[8]*l[2]+a[12],a[1]*l[0]+a[5]*l[1]+a[9]*l[2]+a[13],a[2]*l[0]+a[6]*l[1]+a[10]*l[2]+a[14]]},ft=function(a){let l=[a[0],a[1],a[2]],d=[a[4],a[5],a[6]],m=[a[8],a[9],a[10]],S=z(d,m),A=z(m,l),C=z(l,d),F=P(l,S)||1;return new Float32Array([...R(S,1/F),...R(A,1/F),...R(C,1/F)])},Ht=function(a,l){return L([a[0]*l[0]+a[3]*l[1]+a[6]*l[2],a[1]*l[0]+a[4]*l[1]+a[7]*l[2],a[2]*l[0]+a[5]*l[1]+a[8]*l[2]])},Zt=function(a,l,d=[0,1,0]){let m=L(E(a,l)),S=L(z(d,m)),A=z(m,S);return new Float32Array([S[0],A[0],m[0],0,S[1],A[1],m[1],0,S[2],A[2],m[2],0,-P(S,a),-P(A,a),-P(m,a),1])},Ue=function(a,l,d,m){let S=1/Math.tan(a/2),A=1/(d-m);return new Float32Array([S/l,0,0,0,0,S,0,0,0,0,(m+d)*A,-1,0,0,2*m*d*A,0])},Me=function(a,l,d,m,S,A){return new Float32Array([2/(l-a),0,0,0,0,2/(m-d),0,0,0,0,-2/(A-S),0,-(l+a)/(l-a),-(m+d)/(m-d),-(A+S)/(A-S),1])},Ee=function(a,l,d,m=d){let S=E(l,a),A=L(S),C=L(z(Math.abs(A[2])<.95?[0,0,1]:[1,0,0],A)),F=z(C,A),B=R(O(a,l),.5),q=w(S);return new Float32Array([C[0]*d,C[1]*d,C[2]*d,0,A[0]*q,A[1]*q,A[2]*q,0,F[0]*m,F[1]*m,F[2]*m,0,...B,1])},gt=function(a){let l=parseInt(a.replace("#",""),16);return[l>>16&255,l>>8&255,l&255].map(d=>Math.pow(d/255,2.2))},Vt=function(a,l,d){return{p:a,n:l,i:d}},oe=function(a=20,l=12){let d=[],m=[],S=[];for(let A=0;A<=l;A++){let C=A*v/l;for(let F=0;F<=a;F++){let B=F*p/a,q=[Math.sin(C)*Math.cos(B),Math.cos(C),Math.sin(C)*Math.sin(B)];d.push(...q),m.push(...q)}}for(let A=0;A<l;A++)for(let C=0;C<a;C++){let F=A*(a+1)+C,B=F+a+1;S.push(F,F+1,B,F+1,B+1,B)}return Vt(d,m,S)},Xt=function(a=16,l=1){let d=[],m=[],S=[];for(let A=0;A<2;A++)for(let C=0;C<=a;C++){let F=C*p/a,B=A?l:1,q=L([Math.cos(F),1-l,Math.sin(F)]);d.push(B*Math.cos(F),A-.5,B*Math.sin(F)),m.push(...q)}for(let A=0;A<a;A++){let C=A,F=A+a+1;S.push(C,F,C+1,C+1,F,F+1)}for(let A=0;A<2;A++){let C=d.length/3,F=A-.5,B=A?l:1;d.push(0,F,0),m.push(0,A?1:-1,0);for(let q=0;q<=a;q++){let at=q*p/a;d.push(B*Math.cos(at),F,B*Math.sin(at)),m.push(0,A?1:-1,0)}for(let q=0;q<a;q++)S.push(C,C+q+(A?2:1),C+q+(A?1:2))}return Vt(d,m,S)},le=function(a,l,d=48,m=10,S=0,A=p){let C=[],F=[],B=[];for(let q=0;q<=d;q++){let at=S+A*q/d;for(let pt=0;pt<=m;pt++){let mt=pt*p/m,yt=Math.cos(mt),Rt=Math.sin(mt);C.push((a+l*yt)*Math.cos(at),(a+l*yt)*Math.sin(at),l*Rt),F.push(yt*Math.cos(at),yt*Math.sin(at),Rt)}}for(let q=0;q<d;q++)for(let at=0;at<m;at++){let pt=q*(m+1)+at,mt=pt+m+1;B.push(pt,mt,pt+1,mt,mt+1,pt+1)}return Vt(C,F,B)},he=function(a,l,d,m=.07){let S=[a,l,d,m].join(",");if(Ye.has(S))return Ye.get(S);m=Math.min(m,a/2*.95,l/2*.95,d/2*.95);let A=[],C=[],F=[],B=[a/2,l/2,d/2],q=[[[0,0,d/2],[1,0,0],[0,1,0],a,l],[[0,0,-d/2],[-1,0,0],[0,1,0],a,l],[[a/2,0,0],[0,0,-1],[0,1,0],d,l],[[-a/2,0,0],[0,0,1],[0,1,0],d,l],[[0,l/2,0],[1,0,0],[0,0,-1],a,d],[[0,-l/2,0],[1,0,0],[0,0,1],a,d]];for(let[pt,mt,yt,Rt,Ut]of q){let fe=It=>[-It/2,-It/2+m*.28,-It/2+m,It/2-m,It/2-m*.28,It/2],ut=fe(Rt),ot=fe(Ut),At=A.length/3;for(let It of ot)for(let Yt of ut){let wt=O(pt,O(R(mt,Yt),R(yt,It))),Je=wt.map((xn,rn)=>V(xn,-B[rn]+m,B[rn]-m)),un=L(E(wt,Je));A.push(...O(Je,R(un,m))),C.push(...un)}for(let It=0;It<5;It++)for(let Yt=0;Yt<5;Yt++){let wt=At+It*6+Yt;F.push(wt,wt+1,wt+6,wt+1,wt+7,wt+6)}}let at=Vt(A,C,F);return Ye.set(S,at),at},Te=function(a,l=.04,d=8){let m=[],S=[],A=[];for(let C=0;C<a.length;C++){let F=L(E(a[Math.min(C+1,a.length-1)],a[Math.max(C-1,0)])),B=L(z(F,Math.abs(F[1])<.9?[0,1,0]:[0,0,1])),q=z(F,B);for(let at=0;at<=d;at++){let pt=at*p/d,mt=O(R(B,Math.cos(pt)),R(q,Math.sin(pt)));m.push(...O(a[C],R(mt,l))),S.push(...mt)}}for(let C=0;C<a.length-1;C++)for(let F=0;F<d;F++){let B=C*(d+1)+F,q=B+d+1;A.push(B,B+1,q,B+1,q+1,q)}return Vt(m,S,A)},ke=function(a,l,d,m){let S=[],A=[],C=[];for(let B=0;B<=144;B++){let q=B*p/144;for(let at of[-1,1])S.push((a+at*d)*Math.cos(q),m,(l+at*d)*Math.sin(q)),A.push(0,1,0)}for(let B=0;B<144;B++){let q=B*2;C.push(q,q+2,q+1,q+1,q+2,q+3)}return Vt(S,A,C)},tt=function(a,l,d,m=St.green,S=!1,A=.13){a.add(S?ze:ge,J(l,d),m,A)},Z=function(a,l,d,m,S=.06,A=[0,0,0],C=.12){a.add(he(...d,S),J(l,[1,1,1],A),m,C)},Mt=function(a,l,d,m,S,A=.2,C=!1){a.add(cn,Ee(l,d,m),S,A),C&&(tt(a,l,[m,m,m],S,!0,A),tt(a,d,[m,m,m],S,!0,A))},ht=function(a,l,d,m,S=[0,0,0],A=!1){a.add(A?Ze:We,J(l,d,S),m)},_t=function(a,l,d,m,S=.15){a.add(Te(l,d),H,m,S)},Lt=function(a,l,d,m=100){return Array.from({length:m+1},(S,A)=>[a*Math.cos(A*p/m),d,l*Math.sin(A*p/m)])},Ot=function(){return Kt=Kt*1664525+1013904223>>>0,Kt/4294967296},uc=function(a,l,d){let m=-d*Math.min(.09,_.speed*.003),S=Math.sin(a*18)*Math.min(.012,_.speed*5e-4);$t.local=J([0,S,0],[1,1,1],[m,0,0]),Fe.local=J([-.31,1.57+S,0],[1,1,1],[-m*.5,-d*.13,0]);for(let A of _e)A.n.local=Q(W(A.x,.41,A.z),Q(lt(A.front?-(_.drifting?d*.12-An(_.yaw-_.velocityYaw)*.62:d*.26):0),xt(vc)));for(let A of mn){let C=_.boostActive?1.25+.17*Math.sin(a*38+A.side):_.pad>0?1+.12*Math.sin(a*36):_.mini>0?.65+.12*Math.sin(a*42+A.side):.001;A.n.local=J([-1.9,.43,A.side*.34],[C,Math.max(.01,C),Math.max(.01,C)])}},Y=function(){return Gn[en]},j=function(){return k*Y().laps},Ft=function(a){let l=Y().points,d=l.length,m=(a%d+d)%d,S=Math.floor(m),A=m-S,C=l[(S+d-1)%d],F=l[S],B=l[(S+1)%d],q=l[(S+2)%d];return F.map((at,pt)=>.5*(2*at+(-C[pt]+B[pt])*A+(2*C[pt]-5*at+4*B[pt]-q[pt])*A*A+(-C[pt]+3*at-3*B[pt]+q[pt])*A*A*A))},qt=function(){Ha=en,b=[],k=0;let a=Y().points.length*120;for(let m=0;m<=a;m++){let S=m*Y().points.length/a,A=Ft(S);m&&(k+=w(E(A,b[m-1].p)));let C=E(Ft(S+1e-4),Ft(S-1e-4));b.push({s:k,p:A,h:Math.atan2(C[2],C[0])})}let l=b.map(m=>m.p[0]),d=b.map(m=>m.p[2]);rt={minX:Math.min(...l),maxX:Math.max(...l),minZ:Math.min(...d),maxZ:Math.max(...d)}},Nt=function(a){let l=(a%k+k)%k,d=0,m=b.length-1;for(;d+1<m;){let q=d+m>>1;b[q].s<=l?d=q:m=q}let S=b[d],A=b[m],C=(l-S.s)/(A.s-S.s||1),F=Math.atan2(Math.sin(A.h-S.h),Math.cos(A.h-S.h)),B=S.h+F*C;return{p:S.p.map((q,at)=>X(q,A.p[at],C)),h:B,T:[Math.cos(B),0,Math.sin(B)],R:[-Math.sin(B),0,Math.cos(B)],curv:F/(A.s-S.s),slope:(A.p[1]-S.p[1])/(A.s-S.s)}},Gt=function(a,l){let d=a-l;return Qt==="circuit"&&(d-=Math.round(d/k)*k),d},kt=function(){return di+(_.timePenalty||0)},ie=function(a){let l=Math.round(a*100),d=Math.floor(l/6e3),m=Math.floor(l%6e3/100),S=l%100;return String(d).padStart(2,"0")+":"+String(m).padStart(2,"0")+"."+String(S).padStart(2,"0")},de=function(a,l){if(Qt!=="circuit")return!0;let d=O(Nt(a).p,R(Nt(a).R,l));for(let m=0;m<b.length;m+=20){let S=b[m];if(Math.abs(Gt(S.s,a))>35&&Math.hypot(S.p[0]-d[0],S.p[2]-d[2])<15)return!1}return!0},nn=function(){return[[Math.cos(_.yaw),Math.sin(_.yaw)],[-Math.sin(_.yaw),Math.cos(_.yaw)]]},Se=function(a){let l=nn(),d=a.angle||0,m=[[Math.cos(d),Math.sin(d)],[-Math.sin(d),Math.cos(d)]],S=[Gt(_.s,a.s+(a.ds||0)),_.l-a.l-(a.dl||0)],A=a.kind==="cone"?[.39,.39]:[.35,1.1],C=1/0,F=null;for(let B of[l[0],l[1],m[0],m[1]]){let q=Math.abs(Ve(l[0],B))*He+Math.abs(Ve(l[1],B))*Ie,at=Math.abs(Ve(m[0],B))*A[0]+Math.abs(Ve(m[1],B))*A[1],pt=q+at-Math.abs(Ve(S,B));if(pt<=0)return null;if(pt<C){C=pt;let mt=Ve(S,B)>=0?1:-1;F=B.map(yt=>yt*mt)}}return{normal:F,pen:C}},Tn=function(a,l,d=null){let m=1/Jt,S=1/Re,A=d?d.kind==="cone"?9:85:1/0,C=d?1/A:0,F=d?[Gt(_.s+l[0],d.s+(d.ds||0)),_.l+l[1]-d.l-(d.dl||0)]:[0,0],B=d?1/(A*(d.kind==="cone"?.09:.48)):0,q=[_.vS-_.spin*l[1],_.vL+_.spin*l[0]],at=d?[(d.vS||0)-(d.omega||0)*F[1],(d.vL||0)+(d.omega||0)*F[0]]:[0,0],pt=[q[0]-at[0],q[1]-at[1]],mt=Ve(pt,a);if(mt>=0)return 0;let yt=Wt(l,a),Rt=Wt(F,a),Ut=d?.13:.035,fe=-(1+Ut)*mt/(m+C+yt*yt*S+Rt*Rt*B);_.vS+=a[0]*fe*m,_.vL+=a[1]*fe*m,_.spin=V(_.spin+yt*fe*S,-2.3,2.3);let ut=[-a[1],a[0]],ot=Wt(l,ut),At=Wt(F,ut),It=Ve(pt,ut),Yt=d?.22:.1,wt=V(-It/(m+C+ot*ot*S+At*At*B),-Yt*fe,Yt*fe);return _.vS+=ut[0]*wt*m,_.vL+=ut[1]*wt*m,_.spin=V(_.spin+ot*wt*S,-2.3,2.3),d&&(d.vS=(d.vS||0)-(a[0]*fe+ut[0]*wt)*C,d.vL=(d.vL||0)-(a[1]*fe+ut[1]*wt)*C,d.omega=V((d.omega||0)-(Rt*fe+At*wt)*B,-7,7),d.kind==="cone"&&(d.tilt=Math.min(1.35,(d.tilt||0)+Math.abs(fe)*C*.015))),Math.abs(mt)},Nn=function(a,l){a<.7||_.contactSound>0||(_.contactSound=.16,hu(Ce(_.s,_.l,.45),Math.min(14,Math.ceil(a)),[0,1,0]),zf(l,a),a>5&&(Fr=Math.min(.25,a*.012),_.driftCharge*=.5))},li=function(a){_.contactSound=Math.max(0,_.contactSound-a),s&&(_.railSide=0);for(let l of hn.values())for(let d of l.entities)(d.kind==="cone"||d.kind==="barrier")&&(d.vS=(d.vS||0)*Math.exp(-a*2.4),d.vL=(d.vL||0)*Math.exp(-a*2.4),d.ds=V((d.ds||0)+d.vS*a,-18,18),d.dl=V((d.dl||0)+d.vL*a,-7.4-d.l,7.4-d.l),d.angle=(d.angle||0)+(d.omega||0)*a,d.omega=(d.omega||0)*Math.exp(-a*2));for(let l=0;l<3;l++){let d=nn(),m=Math.abs(d[0][1])*He+Math.abs(d[1][1])*Ie,S=Ne-m;if(Math.abs(_.l)>S){let A=Math.sign(_.l),C=[0,-A];s&&(_.railSide=A),_.l=A*(S-.015);let F=[A*(Math.sign(d[0][1])*He*d[0][0]+Math.sign(d[1][1])*Ie*d[1][0]),A*m],B=Tn(C,F);Nn(B,"rail"),B>4&&(qa(!1),_.turnRate*=.4,Qa=!1)}if(!(_.jump>.85))for(let A of hn.values())for(let C of A.entities){if(C.kind!=="cone"&&C.kind!=="barrier"||Math.abs(Gt(C.s+(C.ds||0),_.s))>4.5||Math.abs(C.l+(C.dl||0)-_.l)>4)continue;let F=Se(C);if(!F)continue;let B=C.kind==="cone"?9:85,q=B/(B+Jt),at=Math.max(0,F.pen-.008)*.82;_.s+=F.normal[0]*at*q,_.l+=F.normal[1]*at*q,C.ds=(C.ds||0)-F.normal[0]*at*(1-q),C.dl=(C.dl||0)-F.normal[1]*at*(1-q);let pt=nn(),mt=[Gt(C.s+(C.ds||0),_.s),C.l+(C.dl||0)-_.l],yt=V(Ve(mt,pt[0]),-He,He),Rt=V(Ve(mt,pt[1]),-Ie,Ie),Ut=[pt[0][0]*yt+pt[1][0]*Rt,pt[0][1]*yt+pt[1][1]*Rt],fe=Tn(F.normal,Ut,C);Nn(fe,C.kind)}}if(s&&_.railSide){let l=Math.max(0,_.railSide*_.turnRate*_.vS);_.vS-=Math.sign(_.vS)*Math.min(Math.abs(_.vS),.65*l*a)}_.speed=Math.hypot(_.vS,_.vL),_.velocityYaw=Math.atan2(_.vL,_.vS),_.lateralSpeed=_.vL},Le=function(a,l){if(!Un.has(a)){let d=new ve;l(d),Un.set(a,d.finish())}return Un.get(a)},Ge=function(a,l,d,m,S="#627596"){let A=[-l/2,m,-d/2],C=[l/2,m,-d/2],F=[l/2,m,d/2],B=[-l/2,m,d/2],q=[-l/2,m+1.3,0],at=[l/2,m+1.3,0];$n(a,A,C,at,q,S),$n(a,q,at,F,B,S),$n(a,A,q,B,B,"#e9e1d2"),$n(a,C,F,at,at,"#e9e1d2");for(let pt=0;pt<9;pt++){let mt=-l/2+pt*l/8;_t(a,[[mt,m,-d/2],[mt,m+1.3,0],[mt,m,d/2]],.025,"#8797b0")}Mt(a,[-l/2-.15,m+1.33,0],[l/2+.15,m+1.33,0],.08,S)},ci=function(a,l=0){let d=["#fff0db","#e9eafa","#f9dbe2","#e0f1ec"][l%4],m=["#7190b6","#9a82b3","#be8f98","#6c9a9a"][l%4];Z(a,[0,2.65,0],[6,5.3,4.8],d,.08),Z(a,[0,.12,0],[6.4,.24,5.1],"#b9b7c5",.035),Ge(a,6.7,5.8,5.3,m);for(let S of[-1,1])for(let A of[-1.9,0,1.9])for(let C of[1.4,3.85])Z(a,[A,C,S*2.425],[1.2,1.35,.055],m,.025),Z(a,[A,C,S*2.46],[1.05,1.18,.03],"#b8dfe8",.01,[0,0,0],.45),Mt(a,[A,C-.58,S*2.49],[A,C+.58,S*2.49],.025,"#f4f7fa"),Z(a,[A,C-.72,S*2.55],[1.35,.12,.28],m,.015);Z(a,[0,1.03,2.5],[1.04,2.05,.1],"#798c9c",.025),Z(a,[.34,1.03,2.57],[.05,.12,.04],"#f7d5a4",.01);for(let S of[-1,1])Z(a,[S*2.65,.48,2.9],[.65,.9,.7],"#b9c9b0",.035),tt(a,[S*2.65,1.14,2.9],[.6,.55,.5],"#88ba9a",!0)},Oe=function(a,l=0){let d=["#ef9ba5","#88bfc9","#a6a0d5"][l%3];Z(a,[0,2,0],[7,4,4.8],"#fff1dd",.06),Ge(a,7.7,5.8,4,"#6f7d98");for(let m of[-2.05,0,2.05])Z(a,[m,1.4,2.45],[1.8,2.15,.06],"#88afb9",.02),Z(a,[m,1.45,2.5],[1.54,1.92,.025],"#c2e4e8",.015),Z(a,[m,1.45,2.54],[.045,1.92,.02],"#edf6ee",.005);Z(a,[0,3.03,2.65],[7.4,.7,.55],d,.035);for(let m=0;m<12;m++)Z(a,[-3.35+m*.61,2.62,2.95],[.59,.24,1.15],m%2?"#fff6e3":d,.025,[.12,0,0]);for(let m of[-1,1])Mt(a,[m*3.3,0,3.35],[m*3.3,2.6,3.35],.055,d);for(let m of[-1.9,0,1.9])Z(a,[m,3.04,2.96],[.45,.34,.025],"#fff6e6",.02),Z(a,[m+.28,3.04,2.97],[.065,.22,.02],"#fff6e6",.01);for(let m of[-2.6,2.7]){Z(a,[m,.35,3.35],[.75,.7,.65],"#cda883",.035);for(let S of[-.14,.14])Z(a,[m,.52,3.35+S],[.6,.035,.035],"#ecd3a5",.005)}Z(a,[1.4,.72,3.5],[.6,1.3,.12],"#7e8f9c",.03,[.08,0,0]);for(let m=0;m<4;m++)Z(a,[1.4,.38+m*.2,3.58],[.38,.025,.025],"#e9f1e8",.005)},hi=function(a,l=0){let d="#997786",m=["#f8c6dc","#f6b8d5","#ffdfeb"];Mt(a,[0,0,0],[l?.35:-.25,3.4,0],.18,d),Mt(a,[0,1.9,0],[-1.55,3.55,.2],.11,d),Mt(a,[.1,2.2,0],[1.55,3.8,-.25],.1,d);let A=[[-1.4,3.9,.1,1.5],[0,4.6,0,1.8],[1.6,4.05,-.2,1.5],[-.4,4,1.35,1.45],[.4,4.1,-1.3,1.5]];for(let C=0;C<A.length;C++){let[F,B,q,at]=A[C];tt(a,[F,B,q],[at,at*.7,at*.86],m[(C+l)%3],!0,.02),tt(a,[F+.2,B+.6,q+.15],[at*.6,at*.28,at*.52],"#ffe8f1",!0,.01)}for(let C=0;C<12;C++){let F=C*2.399,B=.6+C%4*.38;Z(a,[Math.cos(F)*B,.045,Math.sin(F)*B],[.12,.015,.065],m[C%3],.012,[0,F,0])}},Ni=function(a){Mt(a,[0,0,0],[0,4.2,0],.14,"#9c8c84");for(let l=0;l<3;l++)tt(a,[(l-1)*.45,2.7+l*.82,0],[1.9-l*.35,.78,1.25-l*.16],["#7cb5aa","#8fc9b5","#a6d7ba"][l],!0,.02)},Wa=function(a){Z(a,[0,.1,0],[.55,.2,.55],"#9da8b9",.025),Mt(a,[0,.15,0],[0,5.6,0],.065,"#7e8da8"),_t(a,[[0,5.4,0],[0,5.8,.3],[0,5.8,1.3],[0,5.5,1.55]],.055,"#7e8da8"),Z(a,[0,5.46,1.55],[.65,.16,.9],"#e5edee",.05),Z(a,[0,5.36,1.55],[.5,.025,.72],"#fff0b3",.025,[0,0,0],.1)},Ef=function(a){for(let l of[-4,4])Mt(a,[l,0,0],[l*.94,6.3,0],.29,"#d98085"),Mt(a,[l,0,0],[l,.75,0],.31,"#66728c"),Mt(a,[l*.95,4.65,0],[l*.95,6.65,0],.32,"#dc8d91");Z(a,[0,5,0],[9.8,.36,.48],"#d68183",.06),_t(a,[[-5.65,6.55,0],[-4.5,6.3,0],[0,6.2,0],[4.5,6.3,0],[5.65,6.55,0]],.25,"#6d7089"),Mt(a,[0,5,0],[0,6.15,0],.13,"#d68183"),Z(a,[0,5.65,.31],[.9,1.12,.15],"#55677e",.02),Z(a,[0,5.65,.4],[.5,.69,.025],"#edcf9d",.01)},Cf=function(a){Z(a,[0,.25,0],[13,.5,6.8],"#c6c4ce",.04);for(let l of[-5,0,5])for(let d of[-2.2,2.2])Mt(a,[l,.5,d],[l,4.1,d],.1,"#8fa2ad");Ge(a,14,7.8,4.1,"#73849c");for(let l=0;l<12;l++)Z(a,[-5.8+l*1.05,.53,3],[.8,.025,.2],"#f6dfa0",.008);Z(a,[0,3.2,2.6],[4,.9,.22],"#eef5ed",.04),Z(a,[-1.55,3.2,2.75],[.45,.45,.04],"#8ec9c5",.03);for(let l=0;l<6;l++)Z(a,[-.8+l*.45,3.2,2.75],[.19,.24,.03],"#8294a8",.01);for(let l of[-3.5,3.5]){Z(a,[l,1.02,0],[2.7,.15,.65],"#c2a38c",.02);for(let d of[-.95,.95])Mt(a,[l+d,.5,0],[l+d,.95,0],.06,"#8c91a3")}},Rf=function(a){for(let l of[-1.16,1.16])Z(a,[0,.05,l],[20,.1,.09],"#81929f",.015);for(let l=0;l<20;l++)Z(a,[-9.5+l,.005,0],[.23,.07,3.4],"#bea58d",.015);Z(a,[0,1.65,0],[13,2.7,3],"#edf5dc",.25),Z(a,[0,1.25,0],[13.15,.38,3.06],"#83bcb6",.04),Z(a,[0,3.08,0],[12.5,.25,3.1],"#b3bfc6",.12);for(let l of[-1,1]){for(let d=0;d<7;d++){let m=-5.2+d*1.73;Z(a,[m,2,l*1.52],[1.35,1.05,.06],"#769ba8",.04),Z(a,[m,2.1,l*1.56],[1.16,.8,.025],"#bbdfe6",.03)}for(let d of[-4.3,4.3])tt(a,[d,.45,l*1.16],[.49,.49,.13],"#596980",!0),Z(a,[d,.48,l*1.31],[.19,.19,.03],"#bfccd1",.03)}for(let l of[-6.55,6.55]){Z(a,[l,2.1,0],[.06,1.05,2.1],"#acd2dd",.05);for(let d of[-.9,.9])tt(a,[l,1.25,d],[.05,.13,.13],"#fff4ba",!0)}_t(a,[[-1.5,3.25,0],[0,4.3,0],[1.5,3.25,0]],.055,"#718699"),Mt(a,[-.65,4.3,0],[.65,4.3,0],.07,"#718699")},Pf=function(a){Z(a,[0,4.8,0],[24,9.6,7],"#f4eedf",.06),Ge(a,25.2,8.2,9.6,"#8095ad"),Z(a,[0,6.1,3.7],[4.8,12.2,2],"#e6eaf0",.06),Ge(a,5.4,3.1,12.2,"#879bb4");for(let l of[-10,-7,-4,4,7,10])for(let d of[2,4.8,7.6])Z(a,[l,d,3.56],[1.9,1.65,.06],"#8da6b8",.025),Z(a,[l,d,3.61],[1.64,1.41,.025],"#c7e9eb",.015),Z(a,[l,d,3.65],[.045,1.41,.025],"#f6f5ed",.005);Z(a,[0,1.5,4.75],[3.2,2.8,.06],"#9cbdcd",.025);for(let l of[-.75,.75])Z(a,[l,1.5,4.81],[.035,2.7,.025],"#f7eee4",.005);tt(a,[0,10.2,4.77],[.9,.9,.06],"#fff7df",!0,.02),a.add(le(.89,.045,28,7),W(0,10.2,4.84),"#7f91a8",.08),Mt(a,[0,10.2,4.91],[0,10.8,4.91],.03,"#697e98"),Mt(a,[0,10.2,4.92],[.43,10.4,4.92],.03,"#697e98"),Z(a,[0,-.02,7.5],[23,.1,12],"#e2e1db",.03);for(let l of[-5.5,5.5])Z(a,[l,1.5,12.1],[.8,3,.8],"#e8dbc7",.04),Z(a,[l,3.06,12.1],[1,.2,1],"#a1acb9",.025);for(let l of[-1,1])for(let d=0;d<8;d++){let m=l*(6.4+d*.65);Mt(a,[m,0,12],[m,1.8,12],.025,"#9cacc0")}for(let l of[-1,1])Mt(a,[l*6,1.65,12],[l*11.5,1.65,12],.035,"#9cacc0")},If=function(a){Z(a,[0,1.25,0],[1.2,2.5,.82],"#f3a4ad",.09),Z(a,[-.13,1.55,.43],[.82,1.35,.05],"#b6e0e9",.03);for(let l=0;l<3;l++)for(let d=0;d<3;d++)Z(a,[-.4+d*.27,1.12+l*.4,.48],[.13,.23,.06],["#f9e2ad","#a3d2cc","#d3c5ec"][d],.025),Z(a,[-.4+d*.27,.94+l*.4,.49],[.1,.04,.02],"#fff0c7",.005);Z(a,[0,.47,.44],[.75,.24,.055],"#738698",.03),Z(a,[.43,1.3,.45],[.13,.18,.04],"#fff0b8",.02)},Lf=function(a){Mt(a,[0,0,0],[0,2.6,0],.08,"#8c7e8a"),Z(a,[0,2.55,0],[.55,.16,.55],"#877d92",.025),Z(a,[0,2.22,0],[.41,.52,.41],"#ffe4ad",.04),Z(a,[0,1.93,0],[.52,.12,.52],"#a19caa",.025);for(let l of[-.2,.2])for(let d of[-.2,.2])Mt(a,[l,1.98,d],[l,2.49,d],.018,"#927f8d")},Df=function(a,l){let d=l==="left"?-1:1;Mt(a,[0,0,0],[0,2.4,0],.055,"#8499b0"),Z(a,[0,2.28,0],[2.9,.78,.18],"#f3eacb",.04);for(let m=0;m<3;m++){let S=-.86+m*.86;Mt(a,[S-d*.25,2.02,.12],[S+d*.15,2.28,.12],.055,"#bd8faf"),Mt(a,[S+d*.15,2.28,.12],[S-d*.25,2.54,.12],.055,"#bd8faf")}},Nf=function(a){return Le(a,l=>{a.startsWith("house")?ci(l,Number(a.slice(-1))):a.startsWith("shop")?Oe(l,Number(a.slice(-1))):a.startsWith("cherry")?hi(l,Number(a.slice(-1))):a==="pine"?Ni(l):a==="lamp"?Wa(l):a==="torii"?Ef(l):a==="station"?Cf(l):a==="tram"?Rf(l):a==="vending"?If(l):a==="school"?Pf(l):a==="lantern"?Lf(l):(a==="left"||a==="right")&&Df(l,a)})},Uf=function(a){let l=(a%k+k)%k/k,d=Y().sectors,m=d[0];for(let S of d)l>=S.at&&(m=S);return m},Ff=function(a,l,d){let m=new I,S=a*40,A=(B,q,at,pt=1,mt=0)=>{if(Qt==="circuit"&&q>=k||!de(q,at))return null;let yt=xe(q),Rt=Ce(q,at,-.05),Ut=-yt.h+(at>0?v:0)+mt,fe=new I(Nf(B),J(E(Rt,l),[pt,pt,pt],[0,Ut,0]));return m.add(fe),fe},C=Qt==="circuit"&&Y().biome===1;for(let B of[-1,1]){A("lamp",S+7,B*9.65);for(let q=0;q<2;q++)A("cherry"+(a+q)%2,S+10+q*20,B*(C?11.3:12.5),C?1.12:.92);(a%2===0||C)&&a%3!==1&&!(a===2&&B<0)&&!(C&&a===0&&B>0)&&A("house"+(a+(B>0?1:0))%4,S+19,B*(16.5+d()*2),.9+d()*.25),a%3===1&&!(a===2&&B<0)&&A("shop"+a%3,S+18,B*17.5),a%5===0&&A("vending",S+9,B*10.1),a%3===0&&A("pine",S+32,B*22,1.5)}let F=An(xe(S+37).h-xe(S+7).h);if(Math.abs(F)>.25&&A(F>0?"right":"left",S+5,(F>0?-1:1)*9.4,1,F>0?-v/2:v/2),Qt==="circuit"){let B=(S+20)/k;if(C&&a===0&&A("school",S+21,28),a===2&&(A("station",S+17,-20,1),A("tram",S+17,-27,1),A("vending",S+9,-12.8)),B>.66&&B<.74&&a%2===0){A("torii",S+22,-16);for(let q of[-1,1])A("lantern",S+9,q*10)}}return m},Bf=function(){ui&&ui.mesh.dispose(),ui&&(ui.mesh.dispose(),ui=null);let a=new ve,l=rt,d=[(l.minX+l.maxX)*.5,0,(l.minZ+l.maxZ)*.5],m=l.maxX-l.minX,S=l.maxZ-l.minZ;if(Y().biome===0)for(let[C,F,B,q]of[[m*.82,S*.89,-.43,"#eadfce"],[m*.78,S*.85,-.3,"#c7d9b4"]]){let at=[d[0],B,d[2]],pt=[0,1,0],mt=[];for(let yt=0;yt<=96;yt++){let Rt=yt*p/96,Ut=1+.025*Math.sin(Rt*5);at.push(d[0]+Math.cos(Rt)*C*Ut,B,d[2]+Math.sin(Rt)*F*Ut),pt.push(0,1,0),yt&&mt.push(0,yt,yt+1)}a.add(Vt(at,pt,mt),H,q,.02)}for(let C=0;C<12;C++){let F=C*p/12,B=320+C%3*36,q=d[0]+Math.cos(F)*B,at=d[2]+Math.sin(F)*B,pt=40+C%4*18;ht(a,[q,pt*.5-5,at],[70,pt,60],["#b5c4de","#a6bfd8","#c6cfdf"][C%3],[0,F,0],!0),C%3===0&&ht(a,[q,pt*.85-5,at],[25,pt*.3,22],"#e5e5f0",[0,F,0],!0)}for(let C=0;C<10;C++){let F=C*p/10,B=[d[0]+Math.cos(F)*260,57+C%3*14,d[2]+Math.sin(F)*250];for(let q=0;q<4;q++)tt(a,O(B,[(q-1.5)*12,Math.sin(q*2)*4,0]),[17,7+q%2*3,10],"#fff5f3",!0,.01)}ui=new I(a.finish()),ui.shadow=!1,eu=en,dc=Array.from({length:24},(C,F)=>({phase:F*2.399,node:new I(Of)}));for(let C of dc)C.node.shadow=!1},kf=function(a,l){if(Qt!=="circuit")return;(eu!==en||!ui)&&Bf(),ui.local=W(-a[0],-a[1],-a[2]),x.add(ui);let d=xe(_.s);for(let m of dc){let S=m.phase,A=(S*13+l*1.7)%55-10,C=Math.sin(S*7)*10+Math.sin(l*.6+S)*2,F=1+((S*2-l*.65)%7+7)%7,B=O(Ce(_.s+A,C,F),[Math.sin(l+S)*.25,0,0]);m.node.local=J(E(B,a),[1,1,1],[l*.8+S,S,l]),x.add(m.node)}},Xa=function(){if(!me)try{let pt=function(Ut,fe){let ut=a.createBufferSource(),ot=a.createBiquadFilter(),At=a.createGain();return ut.buffer=q,ut.loop=!0,ot.type=Ut,ot.frequency.value=fe,At.gain.value=0,ut.connect(ot),ot.connect(At),At.connect(l),ut.start(),{source:ut,filter:ot,gain:At}},a=new(window.AudioContext||window.webkitAudioContext),l=a.createGain(),d=a.createDynamicsCompressor();l.gain.value=Fn?.48:0,l.connect(d),d.threshold.value=-18,d.ratio.value=4,d.connect(a.destination);let m=a.createGain(),S=a.createBiquadFilter();S.type="lowpass",S.frequency.value=1e3,m.gain.value=0,S.connect(m),m.connect(l);let A=a.createOscillator(),C=a.createOscillator(),F=a.createOscillator(),B=a.createGain();A.type="sawtooth",C.type="triangle",F.type="sine",C.detune.value=9,B.gain.value=.6;for(let Ut of[A,C])Ut.connect(S),Ut.start();F.connect(B),B.connect(S),F.start();let q=a.createBuffer(1,a.sampleRate*2,a.sampleRate),at=q.getChannelData(0);for(let Ut=0;Ut<at.length;Ut++)at[Ut]=Math.random()*2-1;let mt=pt("lowpass",1100),yt=pt("bandpass",1800),Rt=pt("highpass",2200);yt.filter.Q.value=3.5,me={ctx:a,master:l,engine1:A,engine2:C,sub:F,engineGain:m,engineFilter:S,noise:q,wind:mt,tire:yt,turbo:Rt,oldSpeed:0,oldBoost:!1,gear:0},Object.keys(r).length&&(me.rail=Bu(a,l,r),me.rail.load())}catch{}},Ui=function(a=620,l=.1){if(!Fn||!me||me.ctx.state!=="running")return;let{ctx:d,master:m}=me,S=d.createOscillator(),A=d.createGain();S.type="sine",S.frequency.setValueAtTime(a,d.currentTime),S.frequency.exponentialRampToValueAtTime(a*1.28,d.currentTime+l),A.gain.setValueAtTime(.07,d.currentTime),A.gain.exponentialRampToValueAtTime(.001,d.currentTime+l),S.connect(A),A.connect(m),S.start(),S.stop(d.currentTime+l+.02)},zf=function(a,l){if(!Fn||!me||me.ctx.state!=="running"||a==="rail"&&me.rail?.play(l))return;let{ctx:d,master:m,noise:S}=me,A=d.createBufferSource(),C=d.createBiquadFilter(),F=d.createGain(),B=d.currentTime;if(A.buffer=S,C.type="bandpass",C.frequency.value=a==="rail"?1400:a==="cone"?450:700,C.Q.value=a==="rail"?1.5:.6,F.gain.setValueAtTime(Math.min(.3,.035+l*.018),B),F.gain.exponentialRampToValueAtTime(.001,B+.16),A.connect(C),C.connect(F),F.connect(m),A.start(),A.stop(B+.2),a==="rail"){let q=d.createOscillator(),at=d.createGain();q.type="triangle",q.frequency.setValueAtTime(330,B),q.frequency.exponentialRampToValueAtTime(140,B+.15),at.gain.setValueAtTime(.07,B),at.gain.exponentialRampToValueAtTime(.001,B+.2),q.connect(at),at.connect(m),q.start(),q.stop(B+.21)}},Vf=function(){if(!me)return;let a=me,l=a.ctx.currentTime,d=ne==="running",m=_.speed,S=Math.min(5,Math.floor(m/9)),A=48+m*2.2+m%9*5;(!d||!Fn||En.sfxVolume<=0)&&a.rail?.stop(),a.master.gain.setTargetAtTime(Fn?.48*En.sfxVolume:0,l,.05);let C=d?.012+Math.min(.04,m*7e-4)+(Ae.gas?.013:0):0;a.engineGain.gain.setTargetAtTime(C,l,.07),a.engineFilter.frequency.setTargetAtTime(550+m*25+(Ae.gas?500:0),l,.12);let F=S!==a.gear?.8:1;a.gear=S,a.engine1.frequency.setTargetAtTime(A*F,l,.045),a.engine2.frequency.setTargetAtTime(A*1.5*F,l,.065),a.sub.frequency.setTargetAtTime(A*.5,l,.07),a.wind.gain.gain.setTargetAtTime(d?Math.pow(m/65,2)*.12:0,l,.15),a.wind.filter.frequency.setTargetAtTime(700+m*25,l,.12);let B=Math.abs(An(_.yaw-_.velocityYaw)),q=Ae.brake&&m>5,at=_.jump<.1?Math.min(1,(_.drifting?B*1.8:Math.max(0,B-.18)*2)+(q?.55:0)):0;a.tire.gain.gain.setTargetAtTime(d?at*.075:0,l,.045),a.tire.filter.frequency.setTargetAtTime(1300+m*24+Math.sin(Hs*40)*90,l,.05),a.turbo.gain.gain.setTargetAtTime(d?_.boostBlend*.075:0,l,.1),a.turbo.filter.frequency.setTargetAtTime(1600+_.boostBlend*2400,l,.12),d&&_.boostActive&&!a.oldBoost&&Ui(340,.17),a.oldBoost=_.boostActive,a.oldSpeed=m},ks=function(a){if(!Fn||!me||me.ctx.state!=="running")return;let{ctx:l,master:d,noise:m}=me,S=l.currentTime,A=l.createBufferSource(),C=l.createBiquadFilter(),F=l.createGain(),B=a==="nitro"||a==="combo",q=B?.48:a==="drift"?.12:.23;A.buffer=m,C.type=a==="land"?"lowpass":"bandpass",C.Q.value=.75,C.frequency.setValueAtTime(a==="land"?300:B?650:1500,S),C.frequency.exponentialRampToValueAtTime(B?5500:700,S+q),F.gain.setValueAtTime(.001,S),F.gain.linearRampToValueAtTime(B?.19:.1,S+.025),F.gain.exponentialRampToValueAtTime(.001,S+q),A.connect(C),C.connect(F),F.connect(d),A.start(),A.stop(S+q+.03),(a==="combo"||a==="small")&&Ui(a==="combo"?1080:820,.08)},nu=function(a){if(_.nitro>=2){_.energy=Math.min(99,_.energy+a);return}for(_.energy+=a;_.energy>=100&&_.nitro<2;)_.energy-=100,_.nitro++,_n("NITRO READY","\u6C2E\u6C14\u5DF2\u88C5\u74F6 \xB7 E \u91CA\u653E 3.2 \u79D2",1.2),Ui(1050,.09)},iu=function(a){_.jetHistory.push({kind:a,t:di}),_.jetHistory=_.jetHistory.filter(d=>di-d.t<2.5).slice(-3);let l=_.jetHistory.map(d=>d.kind).join("");(l==="CWW"||l==="WCW")&&(_.combo=l,_.comboTimer=1.3,_.mini=Math.max(_.mini,.88),l==="WCW"&&(_.nitroTime+=.35),_n(l+" \u55B7",l==="CWW"?"\u6C2E\u6C14 \u2192 \u5C0F\u55B7 \u2192 \u5C0F\u55B7 \xB7 \u9AD8\u901F\u51FA\u5F2F":"\u5C0F\u55B7 \u2192 \u6C2E\u6C14 \u2192 \u5C0F\u55B7 \xB7 \u5EF6\u957F\u55B7\u5C04",1.35),ks("combo"))},Hf=function(){ne!=="running"||_.nitro<1||_.nitroTime>0||(_.nitro--,_.nitroTime=3.2,_n("NITRO","\u6C2E\u6C14\u55B7\u5C04 \xB7 3.2 \u79D2",.8),iu("C"),ks("nitro"))},Wf=function(){ne!=="running"||_.smallJets<1||_.smallWindow<=0||_.jetCooldown>0||(_.smallJets--,_.jetCooldown=.18,_.mini=.72,_.smallWindow=_.smallJets?1.15:0,_.smallCount++,iu("W"),ks("small"),_.comboTimer<=0&&_n(_.smallCount>1?"DOUBLE BOOST":"MINI BOOST",_.smallCount>1?"\u53CC\u55B7 \xB7 \u8FDE\u7EED\u51FA\u5F2F\u52A0\u901F":"\u5C0F\u55B7 \xB7 \u53CA\u65F6\u63A5\u4E0B\u4E00\u55B7",.75))},fc=function(a=2,l="\u5C0F\u55B7\u5DF2\u5C31\u7EEA"){_.smallJets=Math.max(_.smallJets,a),_.smallWindow=1.5,_.smallCount=0,_n(l,s?"\u70B9 \u7A7A\u683C / Q \u4E3B\u52A8\u5C0F\u55B7 \xB7 \u8FDE\u70B9\u4E24\u6B21\u53CC\u55B7":"\u70B9 \u7A7A\u683C / Q\uFF0C\u6216\u91CD\u65B0\u6309 W \xB7 \u8FDE\u70B9\u4E24\u6B21\u53CC\u55B7",1.1),Ui(760,.06)},pc=function(){_.driftRewarded||_.driftCharge<.1||_.driftDuration<.11||(_.driftRewarded=!0,fc(_.driftCharge>.35?2:1,_.driftCharge>.35?"\u53CC\u55B7\u5DF2\u5C31\u7EEA":"\u5C0F\u55B7\u5DF2\u5C31\u7EEA"))},qa=function(a=!0){_.drifting&&(a&&pc(),_.drifting=!1,_.driftPhase="exit",_.exitTime=.45,_.exitFromGrip=_.tireGrip||3.6,_.exitFromLimit=_.tireLimit||38,_.driftCharge=0,_.driftDuration=0,_.driftSide=0,_.driftReleasing=!1)},Xf=function(a){_.drifting=!0,_.driftSide=a,_.driftCharge=0,_.driftDuration=0,_.driftPhase="entry",_.driftRewarded=!1,_.driftReleasing=!1,_.releaseAge=0,_.driftLatch=!0,_.driftCooldown=.16,_.exitTime=0,_.turnRate+=a*.38,_.gripRecovery=0,ks("drift")},qf=function(a){_.prevPose={s:_.s,l:_.l,yaw:_.yaw,jump:_.jump};let l=xe(_.s),d=_.s,m=typeof zi=="number"?zi:(Ae.right?1:0)-(Ae.left?1:0);_.speed=Math.hypot(_.vS,_.vL);for(let At of["pad","mini","nitroTime","smallWindow","jetCooldown","comboTimer","exitTime","driftCooldown","driftBuffer","lastSteerTime","jetInputBuffer","boostInputBuffer"])_[At]=Math.max(0,_[At]-a);_.smallWindow===0&&(_.smallJets=0),Ws=X(Ws,m,1-Math.exp(-a*(m?26:20)));let S=Hn.drift>0||Ae.drift&&!_.prevDrift,A=m&&m!==_.prevSteer;Hn.drift=0,Ae.drift||(_.driftLatch=!1),S&&(_.driftBuffer=.26),m&&(_.lastSteer=Math.sign(m),_.lastSteerTime=.2);let C=_.jump<.12,F=_.speed>.4?Math.atan2(_.vL,_.vS):_.yaw,B=An(_.yaw-F),q=(Math.abs(m)>.12?Math.sign(m):0)||(_.lastSteerTime>0?_.lastSteer:Math.abs(B)>.07?Math.sign(B):0);if(!_.drifting&&_.driftCooldown===0&&C&&_.speed>5&&q&&(Ae.drift&&(!_.driftLatch||A&&q!==_.lastDriftSide)||_.driftBuffer>0)?(Xf(q),_.lastDriftSide=q,_.driftBuffer=0):_.drifting&&S&&_.driftDuration>.18&&(m*_.driftSide<0||_.driftReleasing)&&(pc(),_.driftReleasing=!0,_.releaseAge=Math.max(.18,_.releaseAge),_.driftBuffer=0),_.drifting){_.driftDuration+=a;let At=m*_.driftSide<0;_.speed<3.5||!C?qa(!1):(!Ae.drift&&_.driftDuration>.14&&(_.driftReleasing=!0),_.driftReleasing&&(_.releaseAge+=a),_.driftPhase=_.driftReleasing?"release":At?"counter":_.driftDuration<.18?"entry":"hold",(At||_.driftReleasing)&&Math.abs(B)<.75&&pc(),(_.driftReleasing&&(_.releaseAge>.55||Math.abs(B)<.065&&_.releaseAge>.16)||At&&Math.abs(B)<.075&&_.driftDuration>.22)&&qa(!0))}(Hn.boost>0||Ae.boost&&!_.prevBoost)&&(_.boostInputBuffer=.15),(Hn.small>0||Ae.small&&!_.prevSmall||!s&&Ae.gas&&!_.prevGas)&&(_.jetInputBuffer=.15),Hn.boost=0,Hn.small=0,_.boostInputBuffer>0&&_.nitro>0&&_.nitroTime<=0&&(Hf(),_.boostInputBuffer=0),_.jetInputBuffer>0&&_.smallJets>0&&_.jetCooldown<=0&&(Wf(),_.jetInputBuffer=0);let at=Gf.step(_,{steer:typeof zi=="number"?zi:m,gas:Ae.gas||sn.autoGas&&!Ae.brake||ki&&!Ae.brake,brake:Ae.brake},a,{sensitivity:sn.sensitivity,arcadeCandidate:s});Ws=_.steering,_.boostActive=_.nitroTime>0,_.boostBlend=X(_.boostBlend,at.boost?1:0,1-Math.exp(-a*7));let pt=V(1-l.curv*_.l,.45,1.55),mt=_.vS/pt*a;_.s=Math.max(-8,_.s+mt),_.l+=_.vL*a;let yt=xe(_.s),Rt=An(yt.h-l.h),Ut=_.vS,fe=_.vL;_.vS=Ut*Math.cos(Rt)+fe*Math.sin(Rt),_.vL=-Ut*Math.sin(Rt)+fe*Math.cos(Rt),_.yaw=An(_.yaw-Rt);let ut=_.jump>0;(ut||_.vy>0)&&(_.vy-=17*a,_.jump=Math.max(0,_.jump+_.vy*a),_.jump<=0&&(_.vy=0,ut&&(fc(1,"\u843D\u5730\u55B7\u5DF2\u5C31\u7EEA"),ks("land")))),li(a),vc-=_.vS*a/.4,di+=a,Hs+=a,_.score+=Math.max(0,mt)*.85;let ot=Math.abs(An(_.yaw-_.velocityYaw));if(_.drifting&&ot>.035&&_.speed>5&&Math.abs(_.l)<7){let At=a*V((ot+.025)*_.speed*.11,0,3);_.driftCharge+=At,nu(At*42),_.score+=a*35}Qa=_.drifting,(Ae.gas||sn.autoGas)&&!Ae.brake&&_.speed<.7&&Math.abs(_.l)>5.8?_.stuckTime+=a:_.stuckTime=0,_.stuckTime>1.6&&Sc(!0);for(let At of hn.values())for(let It of At.entities){if(It.kind==="cone"||It.kind==="barrier")continue;let Yt=It.s;Qt==="circuit"&&(Yt+=Math.round((_.s-Yt)/k)*k);let wt=Qt==="circuit"?Math.max(0,Math.floor(Yt/k)):0;It.hitLap===wt||Yt<Math.min(d,_.s)-1.4||Yt>Math.max(d,_.s)+1.4||Math.abs(_.l-It.l)>It.width||(It.kind==="coin"?(It.hitLap=wt,It.hit=!0,_.coins++,nu(3),_.score+=50,Ui(700+_.coins%5*80,.04)):It.kind==="pad"?(It.hitLap=wt,_.pad=1.55,_n("BOOST STRIP","\u52A0\u901F\u5E26 \xB7 \u4FDD\u6301\u8DEF\u7EBF",1),ks("nitro")):It.kind==="ramp"&&_.vS>7&&(It.hitLap=wt,_.vy=8,_.jump=.1,_.score+=120,fc(1,"\u7A7A\u55B7\u5DF2\u5C31\u7EEA")))}_.s>=_.checkpoint&&(_.checkpoint+=500,_.score+=500,_n("CHECKPOINT",Math.floor(_.s/500)*500+" m",1)),_.prevSteer=m,_.prevDrift=Ae.drift,_.prevBoost=Ae.boost,_.prevSmall=Ae.small,_.prevGas=Ae.gas,Kf(a),cu(),dp(a),Qt==="circuit"&&_.s>=j()&&Mc()},zs=function(){let a={...Ae};for(let l in Ae)Ae[l]=!1;for(let l of Ya)eo[l]&&(Ae[eo[l]]=!0);for(let l of Ja.values())Ae[l]=!0;for(let l in Hn)Ae[l]&&!a[l]&&Hn[l]++},au=function(){return Ka=Math.imul(Ka,1664525)+1013904223>>>0,Ka/4294967296},Zf=function(a){let l=(Math.imul(a+419,2654435761)^Gs)>>>0;return()=>(l=Math.imul(l,1664525)+1013904223>>>0,l/4294967296)},ou=function(a){return 1.7*Math.sin(a*.005)+.65*Math.sin(a*.017)},yc=function(a){if(Qt!=="circuit")for(;Kn[Kn.length-1].s<a+8;){let l=Kn[Kn.length-1],d=l.s+4;d>xc&&(_c=-v/2+(au()-.5)*2.15,xc=d+90+au()*130);let m=V((_c-l.h)*.022,-.0175,.0175);$a=X($a,m,.15);let S=l.h+$a*4;Kn.push({s:d,p:[l.p[0]+Math.cos((S+l.h)*.5)*4,ou(d),l.p[2]+Math.sin((S+l.h)*.5)*4],h:S})}},xe=function(a){if(Qt==="circuit")return Nt(a);yc(a);let l=Math.floor((a+80)/4),d=V(l-Nr,0,Kn.length-2),m=Kn[d],S=Kn[d+1],A=V((a-m.s)/4,0,1),C=X(m.h,S.h,A);return{p:m.p.map((B,q)=>X(B,S.p[q],A)),h:C,T:[Math.cos(C),0,Math.sin(C)],R:[-Math.sin(C),0,Math.cos(C)],curv:(S.h-m.h)/4,slope:(S.p[1]-m.p[1])/4}},Ce=function(a,l=0,d=0){let m=xe(a);return O(O(m.p,R(m.R,l)),[0,d,0])},$n=function(a,l,d,m,S,A){let C=L(z(E(d,l),E(S,l)));C[1]<0&&(C=R(C,-1)),a.add(Vt([...l,...d,...m,...S],[...C,...C,...C,...C],[0,1,2,0,2,3]),H,A,.06)},lu=function(a){let l=a*40,d=xe(l).p,m=new ve,S=Zf(a),A=Qt==="circuit"?mc[Y().biome]:mc[(Math.floor(Math.max(0,l)/1e3)%3+3)%3],C=at=>E(at,d);for(let at=0;at<10;at++){let pt=l+at*4;if(Qt==="circuit"&&pt>=k)break;let mt=xe(pt),yt=xe(Qt==="circuit"?Math.min(pt+4,k):pt+4),Rt=(Ut,fe,ut)=>C(O(O(Ut.p,R(Ut.R,fe)),[0,ut,0]));$n(m,Rt(mt,-7,.04),Rt(mt,7,.04),Rt(yt,7,.04),Rt(yt,-7,.04),"#69728e");for(let Ut of[-1,1])$n(m,Rt(mt,Ut*7,.06),Rt(mt,Ut*7.65,.06),Rt(yt,Ut*7.65,.06),Rt(yt,Ut*7,.06),(a*10+at)%2?"#d1b5e0":"#f4eced"),$n(m,Rt(mt,Ut*7.65,-.02),Rt(mt,Ut*(Qt==="circuit"?11:64),-.08),Rt(yt,Ut*(Qt==="circuit"?11:64),-.08),Rt(yt,Ut*7.65,-.02),A.ground);if(Qt==="circuit")for(let Ut of[-1,1])$n(m,Rt(mt,Ut*8.6,.06),Rt(mt,Ut*11,.06),Rt(yt,Ut*11,.06),Rt(yt,Ut*8.6,.06),"#d9d9e4"),$n(m,Rt(mt,Ut*11,.06),Rt(mt,Ut*11,-1.25-mt.p[1]),Rt(yt,Ut*11,-1.25-yt.p[1]),Rt(yt,Ut*11,.06),"#b5bbcb");if(Qt==="circuit")for(let Ut of[-1,1])de(pt+2,Ut*20)&&($n(m,Rt(mt,Ut*11,-.12),Rt(mt,Ut*28,-.12),Rt(yt,Ut*28,-.12),Rt(yt,Ut*11,-.12),A.ground),$n(m,Rt(mt,Ut*28,-.12),Rt(mt,Ut*28,-1.25-mt.p[1]),Rt(yt,Ut*28,-1.25-yt.p[1]),Rt(yt,Ut*28,-.12),"#bdc4c7"));if(at%3===0)for(let Ut of[-2.33,2.33]){let fe=Ce(pt+1.5,Ut,.061);m.add(he(2.2,.015,.07,.004),J(C(fe),[1,1,1],[0,-mt.h,0]),"#e0e4e8")}}for(let at of[-1,1]){let pt=Array.from({length:11},(mt,yt)=>C(Ce(l+yt*4,at*8.1,.72)));_t(m,pt,.07,"#b7c6d9"),_t(m,Array.from({length:11},(mt,yt)=>C(Ce(l+yt*4,at*8.1,.4))),.045,"#c7d5e2");for(let mt=0;mt<5;mt++){let yt=l+3+mt*8;if(Qt==="circuit"&&yt>k)break;let Rt=C(Ce(yt,at*8.1,0));Mt(m,Rt,O(Rt,[0,.84,0]),.055,"#9caec2"),Z(m,O(Rt,[0,.75,0]),[.12,.15,.19],mt%2?"#f7bbcf":"#fff1b9",.02)}}let F=[];function B(at,pt,mt){if(Qt==="circuit"&&pt>k-20)return;let yt=at==="coin"?hc:at==="pad"?Va:at==="ramp"?Bs:at==="cone"?za:cc;F.push({kind:at,s:pt,l:mt,node:new I(yt),hit:!1,width:at==="barrier"?1.5:at==="cone"?.85:at==="coin"?1.12:1.9})}if(a>=2){let at=Math.floor(S()*3),pt=[-4.2,0,4.2],mt=Qt==="circuit"?Math.abs(xe(l+22).curv)<.013?.42:.12:a<7?.55:.85;if(S()<mt){let yt=(at+1+Math.floor(S()*2))%3;B(S()<.75?"cone":"barrier",l+22,Qt==="circuit"?yt===1?-5.5:Math.sign(pt[yt])*5.5:pt[yt]),Qt==="endless"&&a>10&&S()<.28&&B("cone",l+22,pt[3-at-yt])}for(let yt=0;yt<4;yt++)B("coin",l+7+yt*7,pt[at]);a%4===0?B("pad",l+14,pt[at]):a>8&&a%7===0&&B("ramp",l+14,pt[at])}if(a===0){for(let mt=0;mt<12;mt++){let yt=Ce(0,-7+mt*1.16,.075),Rt=xe(0);m.add(he(.9,.015,1.12,.003),J(C(yt),[1,1,1],[0,-Rt.h,0]),mt%2?"#e8e7ed":"#424b66")}for(let mt of[-1,1]){let yt=C(Ce(0,mt*7.75,0));Mt(m,yt,O(yt,[0,5,0]),.12,G)}let at=C(Ce(0,-7.75,5)),pt=C(Ce(0,7.75,5));Mt(m,at,pt,.16,G);for(let mt=0;mt<7;mt++)tt(m,C(Ce(0,-4.5+mt*1.5,5)),[.24,.24,.24],mt%2?"#f9d997":"#bfd9f4",!0)}let q=new I(m.finish());return q.add(Ff(a,d,S)),{k:a,origin:d,node:q,entities:F}},cu=function(){if(Qt==="circuit"){let m=Math.ceil(k/40);for(let S=0;S<m;S++)hn.has(S)||hn.set(S,lu(S));return}let a=Math.max(-2,Math.floor(_.s/40)-3),l=Math.floor(_.s/40)+9;yc((l+1)*40);for(let m=a;m<=l;m++)hn.has(m)||hn.set(m,lu(m));for(let[m,S]of hn)m<a&&(S.node.mesh.dispose(),hn.delete(m));let d=Math.floor((_.s-210+80)/4);if(d>Nr){let m=Math.min(d-Nr,Kn.length-10);Kn.splice(0,m),Nr+=m}},gs=function(){Ya.clear(),Ja.clear();for(let a in Hn)Hn[a]=0;for(let a in Ae)Ae[a]=!1;for(let a of document.querySelectorAll(".touch button"))a.classList.remove("held")},jn=function(a=!1){if(Qt==="circuit"?(qt(),Gs=en==="coast-reborn"?73121:95276):a&&(Gs=(Date.now()>>>0)%999999||72319),gc&&hn.size)su.set(gc,hn);else for(let l of hn.values())l.node.mesh.dispose();hn=Qt==="circuit"?su.get(en)||new Map:new Map,gc=Qt==="circuit"?en:null;for(let l of hn.values())for(let d of l.entities){d.hit=!1,delete d.hitLap;for(let m of["ds","dl","vS","vL","angle","omega","tilt"])d[m]=0}Kn=[{s:-80,p:[0,ou(-80),80],h:-v/2}],Nr=0,_c=-v/2,xc=115,$a=0,Ka=Gs,Object.assign(_,{s:0,l:0,speed:0,steering:0,vS:0,vL:0,spin:0,contactSound:0,railSide:0,yaw:0,velocityYaw:0,energy:0,nitro:1,nitroTime:0,turnRate:0,driftDuration:0,driftLatch:!1,driftRewarded:!1,driftReleasing:!1,releaseAge:0,gripRecovery:0,driftCooldown:0,driftBuffer:0,lastSteer:0,lastSteerTime:0,prevSteer:0,lastDriftSide:0,jetInputBuffer:0,boostInputBuffer:0,tireGrip:10.5,tireLimit:68,exitFromGrip:3.6,exitFromLimit:38,driftPhase:"grip",exitTime:0,smallJets:0,smallWindow:0,smallCount:0,jetCooldown:0,jetHistory:[],combo:"",comboTimer:0,prevDrift:!1,prevBoost:!1,prevSmall:!1,prevGas:!1,coins:0,score:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,stuckTime:0,timePenalty:0}),vc=0,di=0,Hs=0,Qa=!1,Ws=0,fs=0,Vs=60,ps=null,Dr=0;for(let l of ms)l.life=0;for(let l of ds)l.life=0;gs(),yc(420),cu(),qs=null,Br=null,_s=null,_.prevPose=null,N("seedText").textContent=String(Gs).padStart(6,"0"),N("bestText").textContent=Or.toLocaleString(),N("rerollBtn").hidden=Qt==="circuit",N("endRunBtn").hidden=Qt==="circuit",N("uploadStatus").textContent="",Fr=0,Ur=0,N("toast").classList.remove("show"),N("drift").classList.remove("on"),N("modeDistance").textContent=Math.round(k)+" m / \u5708 \xB7 "+Y().laps+" \u5708"},_n=function(a,l="",d=2){N("toastTitle").textContent=a,N("toastSub").textContent=l,N("toast").classList.add("show"),Ur=d,N("status").textContent=a+" "+l},Xs=function(a=!1){if(ki=!1,typeof st<"u"&&st.room){Yr();return}jn(a),ne="countdown",Oi=3.05,N("welcome").hidden=!0,N("finished").hidden=!0,N("paused").hidden=!0,N("helpPanel").hidden=!0,N("musicPanel").hidden=!0,N("rankPanel").hidden=!0,Fi.classList.remove("menu-open"),N("countdown").hidden=!1,N("countdown").textContent="3",Xa(),me&&me.ctx.resume().catch(()=>{}),Cu(),N("status").textContent="\u51C6\u5907\u8D77\u8DD1\u3002W \u52A0\u901F\uFF0CAD \u8F6C\u5411\uFF0CShift \u6F02\u79FB\uFF0C\u7A7A\u683C\u5C0F\u55B7\uFF0CE \u6C2E\u6C14\u3002"},Bi=function(){if(typeof st<"u"&&st.room&&ne==="running"){gs(),_n("\u5728\u7EBF\u6BD4\u8D5B\u7EE7\u7EED\u8FDB\u884C","\u8054\u673A\u4E0D\u6682\u505C \xB7 \u70B9\u51FB\u623F\u95F4\u53EF\u9000\u51FA",1.5);return}ne==="running"?(ne="paused",gs(),N("paused").hidden=!1,N("status").textContent="\u6E38\u620F\u5DF2\u6682\u505C\u3002"):ne==="paused"&&(ne="running",N("paused").hidden=!0,ja=performance.now())},Mc=function(){if(ne!=="finished"){ne="finished",gs(),Or=Math.max(Or,Math.floor(_.s)),to=Math.max(to,Math.floor(_.score));try{localStorage.setItem("star-rush-best-distance",String(Or)),localStorage.setItem("star-rush-best-score",String(to))}catch{}N("resultDistance").textContent=Qt==="circuit"?ie(kt()):Math.floor(_.s).toLocaleString()+" m",N("resultMainLabel").textContent=Qt==="circuit"?Y().laps+" \u5708\u7528\u65F6":"\u672C\u6B21\u91CC\u7A0B",N("resultScore").textContent=Math.floor(_.score).toLocaleString(),N("resultBest").textContent=_.coins+" \u679A",N("resultBestLabel").textContent="\u6536\u96C6\u91D1\u5E01",N("resultNote").textContent=Qt==="circuit"?"\u51B2\u7EBF\u5B8C\u6210\uFF01\u53EF\u4EE5\u4E0A\u4F20\u6210\u7EE9\uFF0C\u548C\u670B\u53CB\u6BD4\u8F83\u5F53\u524D\u8D5B\u9053\u7684\u5B8C\u8D5B\u7528\u65F6\u3002":"\u672C\u6B21\u81EA\u7531\u8DD1\u5DF2\u7ED3\u7B97\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u91CC\u7A0B\u6210\u7EE9\u3002",N("finished").hidden=!1,Fi.classList.add("menu-open"),N("status").textContent="\u672C\u5C40\u7ED3\u675F\u3002",Gr={id:crypto.randomUUID(),mode:Qt,track:Qt==="circuit"?Ha:"endless-reborn",seed:Gs,distance:Math.round(Math.max(0,_.s)),timeMs:Math.round(kt()*1e3),score:Math.floor(_.score)},Ms||np(Gr),N("submitRun").disabled=!1,N("submitRun").textContent="\u4E0A\u4F20\u672C\u6B21\u6210\u7EE9",fp(),Ui(1100,.3)}},hu=function(a,l=5,d=[0,1,0]){let m=0;for(let S of ds)S.life<=0&&m++<l&&(S.life=.35+Math.random()*.4,S.p=[...a],S.v=O(d,[(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3]),S.size=.04+Math.random()*.08)},Sc=function(a=!1){if(ne!=="running"&&ne!=="paused")return;let l=[0,-3.7,3.7],d=0;for(let m of l){let S=!0;for(let A of hn.values())for(let C of A.entities)(C.kind==="cone"||C.kind==="barrier")&&Math.abs(Gt(C.s,_.s))<7&&Math.abs(C.l-m)<C.width+1.1&&(S=!1);if(S){d=m;break}}_.prevPose=null,_.l=d,_.yaw=0,_.turnRate=0,_.velocityYaw=0,_.lateralSpeed=0,_.speed=V(_.speed,2,12),_.vS=_.speed,_.vL=0,_.spin=0,_.stuckTime=0,_.timePenalty=(_.timePenalty||0)+2,_.jump=0,_.vy=0,_.drifting=!1,_.driftSide=0,_.driftCharge=0,_.exitTime=0,_.driftReleasing=!1,_.driftBuffer=0,Qa=!1,ps=null,_n(a?"\u5DF2\u81EA\u52A8\u8131\u56F0":"\u8D5B\u8F66\u5DF2\u56DE\u6B63","\u7EE7\u7EED\u6309 W \u52A0\u901F \xB7 \u56DE\u6B63\u8BA1\u65F6 +2 \u79D2",1.5)},Kf=function(a){for(let C of ms)C.life=Math.max(0,C.life-a);let l=Math.abs(An(_.yaw-_.velocityYaw));if(!_.drifting&&!(_.exitTime>0&&l>.06)||_.speed<4||_.jump>.08){ps=null,Dr=0;return}if(Dr+=a,Dr<.025)return;Dr=0;let d=xe(_.s),m=Ce(_.s,_.l,.085),S=J(m,[.97,.97,.97],[0,-d.h-_.yaw,Math.atan(d.slope)]),A=[-1,1].map(C=>ct(S,[-1.02,0,C*.83]));if(ps)for(let C=0;C<2;C++){let F=E(A[C],ps[C]),B=Math.hypot(F[0],F[2]);if(B>.05&&B<3){let q=ms[Jf++%ms.length];q.p=R(O(A[C],ps[C]),.5),q.length=B+.035,q.angle=-Math.atan2(F[2],F[0]),q.life=2.5}}ps=A,l>.15&&hu(Ce(_.s-1,_.l,.2),1,R(d.T,-1.5))},$f=function(a,l){for(let d of ds)d.life<=0||(d.life-=a,d.v[1]-=a*5,d.p=O(d.p,R(d.v,a)),d.node.local=J(E(d.p,l),[d.size,d.size,d.size]),x.add(d.node))},jf=function(a,l){let d=ne==="running"&&_.prevPose?V(fs/Za,0,1):1,m=_.prevPose||_,S=X(m.s,_.s,d),A=X(m.l,_.l,d),C=m.yaw+An(_.yaw-m.yaw)*d,F=X(m.jump,_.jump,d),B=xe(S),q=B.p,at=Ce(S,A,.06+F),pt=E(at,q),mt=Math.atan(B.slope);Ct.tint=je.paint,Ct.local=J(pt,[.97,.97,.97],[0,-B.h-C,mt]),x.children=[Ct],kf(q,a),Qt==="circuit"&&(no.mesh=ep[Y().biome],no.local=W(-q[0],-.9-q[1],-q[2]),no.shadow=!1,x.add(no));for(let ut of hn.values())if(!(Qt==="circuit"&&Math.abs(Gt(ut.k*40,_.s))>265)){ut.node.local=W(...E(ut.origin,q)),ut.node.shadow=Math.abs(Gt(ut.k*40,_.s))<90,x.add(ut.node);for(let ot of ut.entities){if(ot.kind==="coin"&&ot.hitLap===Math.max(0,Math.floor(_.s/k)))continue;let At=xe(ot.s+(ot.ds||0)),It=Ce(ot.s+(ot.ds||0),ot.l+(ot.dl||0),ot.kind==="coin"?1.05+.12*Math.sin(a*3+ot.s):.08),Yt=J(E(It,q),[1,1,1],[0,-At.h+(ot.kind==="coin"?a*2:-(ot.angle||0)),Math.atan(At.slope)]);ot.node.local=ot.kind==="cone"&&ot.tilt?Q(Yt,Q(W(0,.34,0),Q(dt(ot.tilt),W(0,-.25,0)))):Yt,ot.node.shadow=Math.abs(Gt(ot.s,_.s))<65,x.add(ot.node)}}uc(a,l,Ws),$f(ne==="running"?l:0,q);for(let ut of ms)ut.life>0&&(ut.node.local=J(E(ut.p,q),[ut.length,1,Math.min(1,ut.life)*1.2],[0,ut.angle,0]),x.add(ut.node));let yt=ne==="ready"||ne==="finished",Rt,Ut;if(yt){let ut=.15*Math.sin(a*.16);Rt=O(at,O(R(B.T,5.6+ut),O(R(B.R,7.1),[0,3.5,0]))),Ut=O(at,O(R(B.R,-1.25),[0,.8,0]))}else{let ut=Wn===1?12.5:Wn===2?5.8:8.5,ot=Wn===1?9:Wn===2?2.9:4.5,At=B.h+_.velocityYaw;_s===null?_s=At:_s+=An(At-_s)*(1-Math.exp(-l*8));let It=[Math.cos(_s),0,Math.sin(_s)],Yt=O(R(B.T,_.vS/18),R(B.R,_.vL/18));Rt=O(O(at,Yt),O(R(It,-ut),[0,ot,0])),Ut=O(O(at,Yt),O(R(It,10),[0,1+F*.2,0]))}let fe=1-Math.exp(-l*(yt?2.6:18));return qs?(qs=qs.map((ut,ot)=>X(ut,Rt[ot],fe)),Br=Br.map((ut,ot)=>X(ut,Ut[ot],fe))):(qs=Rt,Br=Ut),{eye:E(qs,q),target:E(Br,q),origin:q}},Qf=function(){if(!jt)return;let a=bc.width,l=bc.height,d=xe(_.s),m=.86;if(Qt==="circuit"){jt.clearRect(0,0,a,l);let F=rt,B=Math.min((a-45)/(F.maxX-F.minX),(l-30)/(F.maxZ-F.minZ)),q=mt=>[a*.5+(mt[0]-(F.minX+F.maxX)*.5)*B,l*.5+(mt[2]-(F.minZ+F.maxZ)*.5)*B];jt.lineJoin="round";for(let[mt,yt]of[["#737e9d",13],["#dfe8f3",8]]){jt.strokeStyle=mt,jt.lineWidth=yt,jt.beginPath();for(let Rt=0;Rt<b.length;Rt+=6){let Ut=q(b[Rt].p);Rt?jt.lineTo(...Ut):jt.moveTo(...Ut)}jt.closePath(),jt.stroke()}if(typeof Xn<"u")for(let mt of Xn){let yt=q(xe(mt.s).p);jt.fillStyle=mt.color,jt.beginPath(),jt.arc(yt[0],yt[1],3.4,0,p),jt.fill()}if(typeof st<"u"&&st.room){let mt=0;for(let yt of st.peers.values())if(yt.position){let Rt=q(xe(yt.position.s).p);jt.fillStyle=ro[mt++%ro.length],jt.beginPath(),jt.arc(Rt[0],Rt[1],4.5,0,p),jt.fill()}}let at=q(d.p),pt=q(b[0].p);jt.fillStyle="#fff7dc",jt.fillRect(pt[0]-3,pt[1]-5,6,10),jt.save(),jt.translate(...at),jt.rotate(d.h+Math.PI/2),jt.fillStyle="#ffe68b",jt.beginPath(),jt.moveTo(0,-8),jt.lineTo(-5,5),jt.lineTo(5,5),jt.closePath(),jt.fill(),jt.restore();return}jt.clearRect(0,0,a,l),jt.strokeStyle="#c0d7e91c",jt.lineWidth=1;for(let F=20;F<a;F+=30)jt.beginPath(),jt.moveTo(F,0),jt.lineTo(F,l),jt.stroke();for(let F=15;F<l;F+=30)jt.beginPath(),jt.moveTo(0,F),jt.lineTo(a,F),jt.stroke();let S=[];for(let F=-15;F<=205;F+=4){let B=E(xe(_.s+F).p,d.p);S.push([a*.5+P(B,d.R)*m,l*.88-P(B,d.T)*m])}for(let[F,B]of[["#7a85a3",15],["#dce8f0",10]]){jt.strokeStyle=F,jt.lineWidth=B,jt.lineJoin="round",jt.beginPath();for(let q=0;q<S.length;q++)q?jt.lineTo(...S[q]):jt.moveTo(...S[q]);jt.stroke()}jt.fillStyle="#ffe68b",jt.beginPath();let A=a*.5+_.l*m,C=l*.88;jt.moveTo(A,C-10),jt.lineTo(A-7,C+7),jt.lineTo(A+7,C+7),jt.closePath(),jt.fill()},tp=function(a){if(wc+=a,wc<.06)return;wc=0,fi.distance.textContent=Math.floor(_.s).toLocaleString(),fi.score.textContent=String(Math.floor(_.score)).padStart(5,"0"),fi.coins.textContent=String(_.coins).padStart(2,"0"),fi.speed.textContent=Math.round(_.speed*3.6),N("speedbar").style.width=Math.min(100,_.speed/83*100)+"%",fi.energyText.textContent=_.nitro+" \u74F6 / 2 \xB7 "+(_.nitroTime>0?_.nitroTime.toFixed(1)+"s":Math.floor(_.energy)+"%"),N("energyBar").style.width=_.energy+"%";let l=_.boostActive||_.pad>0||_.mini>0;fi.gear.textContent=l?"NITRO / BOOST":_.jump>0?"AIR TIME":_.drifting?"DRIFT MODE":_.speed<1?"READY TO RUSH":"SPORT / "+Math.max(1,Math.min(6,Math.ceil(_.speed/8))),N("boostfx").classList.toggle("on",l),N("raceTime").textContent=ie(kt()),N("lapLabel").textContent=Qt==="circuit"?"LAP "+Math.min(Y().laps,Math.floor(Math.max(0,_.s)/k)+1)+" / "+Y().laps+" \xB7 \u5269\u4F59 "+Math.max(0,Math.ceil(j()-_.s))+" m":"\u65E0\u5C3D\u6A21\u5F0F \xB7 \u81EA\u7531\u7ADE\u901F",N("drift").classList.toggle("on",_.drifting||_.smallJets>0),N("driftBar").style.width=(_.smallJets>0?Math.min(100,_.smallWindow/1.5*100):Math.min(100,_.driftCharge/.55*100))+"%",fi.driftText.textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets:_.driftPhase==="entry"?"\u8F7B\u70B9\u8D77\u6F02":_.driftPhase==="counter"?"\u53CD\u6253\u6536\u8F66":_.driftPhase==="release"?"\u60EF\u6027\u6536\u6F02":"\u6F02\u79FB\u96C6\u6C14";for(let m of document.querySelectorAll("[data-key=small]"))m.classList.toggle("smalljet-ready",_.smallJets>0);N("jetCount").textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets+" \xB7 "+_.smallWindow.toFixed(1)+"s":_.drifting?"\u6F02\u79FB\u96C6\u6C14\u4E2D":"\u7A7A\u683C / Q \u5C0F\u55B7";let d=Pu(_.s);fi.turnText.textContent=d.direction===0?"\u524D\u65B9\u76F4\u9053":d.direction>0?"\u524D\u65B9\u53F3\u5F2F":"\u524D\u65B9\u5DE6\u5F2F",fi.turnArrowPath.setAttribute("d",d.direction===0?"M12 21V3M5 10L12 3L19 10":d.direction>0?"M5 21V8H21M14 1L21 8L14 15":"M19 21V8H3M10 1L3 8L10 15"),Ai==="practice"&&!st.room&&Iu(d),fi.biome.textContent=Qt==="circuit"?Uf(_.s).name:mc[(Math.floor(_.s/1e3)%3+3)%3].name,Qf()},uu=function(a,l=H,d=!0,m=null,S=1){a.world=Q(l,a.local);let A=d&&a.shadow,C=a.tint||m,F=a.opacity??S;a.mesh&&kr.push({mesh:a.mesh,m:a.world,shadow:A,tint:C,opacity:F});for(let B of a.children)uu(B,a.world,A,C,F)},du=function(){zr=Math.max(1,i.clientWidth),Vr=Math.max(1,i.clientHeight);let a=Math.min(devicePixelRatio||1,1.5),l=Math.round(zr*a),d=Math.round(Vr*a);(i.width!==l||i.height!==d)&&(i.width=l,i.height=d)},fu=function(a){if(!h&&u.renderer.getContext().isContextLost())return;let l=Math.min(.1,Math.max(0,(a-ja)/1e3));if(ja=a,ne==="countdown"){Oi=typeof st<"u"&&st.room&&st.startAt?(st.startAt-(Date.now()+st.offset))/1e3:Oi-l;let S=Oi>.05?String(Math.ceil(Oi)):"GO!";N("countdown").textContent!==S&&(N("countdown").textContent=S,Ui(Oi>.05?400:900,.12)),Oi<=0&&(N("countdown").hidden=!0,ne="running",di=typeof st<"u"&&st.room&&st.startAt?Math.max(0,(Date.now()+st.offset-st.startAt)/1e3):0,_n("LET\u2019S RUSH!","W \u52A0\u901F \xB7 SHIFT \u6F02\u79FB \xB7 \u7A7A\u683C\u5C0F\u55B7 \xB7 E \u6C2E\u6C14",2))}if(typeof Su=="function"&&Su(a,l),gp(l),ne==="running"){fs+=l;let S=0;for(;fs>=Za&&ne==="running"&&S++<12;)qf(Za),fs-=Za;S>=12&&(fs=0)}else fs=0;(ne==="ready"||ne==="finished")&&(Hs+=l*.25);let d=jf(Hs,l);pp(d.origin,l),typeof bu=="function"&&bu(d.origin,l),Ur>0&&(Ur-=l,Ur<=0&&N("toast").classList.remove("show")),Fr=Math.max(0,Fr-l),N("hitflash").style.opacity=Math.min(.24,Fr*.6),Vf(),typeof xu=="function"&&xu(),kr.length=0,uu(x),Vs=X(Vs,ne==="ready"||ne==="finished"?45:sn.fov+_.boostBlend*3,1-Math.exp(-l*4));let m=Q(Ue(Vs*v/180,zr/Vr,.12,850),Zt(d.eye,d.target));cp(m),h?D(d):Ic=u.render(kr,d,zr,Vr,Vs,sn),mp(a,l),tp(l),ru||(ru=!0,e.classList.add("done")),requestAnimationFrame(fu)},pu=function(){try{return JSON.parse(localStorage.getItem("star-rush-runs-reborn")||"[]")}catch{return[]}},np=function(a){try{let l=pu();l.push({...a,name:localStorage.getItem("star-rush-name")||"\u672C\u673A\u8F66\u624B"}),localStorage.setItem("star-rush-runs-reborn",JSON.stringify(l.slice(-100)))}catch{}},ip=function(a,l){let d=document.createElement("tr"),m=l.mode==="circuit"?ie(l.timeMs/1e3):l.distance.toLocaleString()+" m";for(let S of[String(a+1).padStart(2,"0"),l.name,m,Math.round(l.score).toLocaleString()]){let A=document.createElement("td");A.textContent=S,d.appendChild(A)}return d},sp=function(){xs=en,N("rankTrack")&&(N("rankTrack").value=xs),wi=Qt,Ti=!1,Js("rankPanel"),Hr()},mu=function(a){Qt=a;for(let[l,d]of[["circuitMode","circuit"],["endlessMode","endless"]])N(l).classList.toggle("selected",a===d),N(l).setAttribute("aria-pressed",String(a===d));jn(!0),N("trackPicker").hidden=a!=="circuit",N("trackDescription").hidden=a!=="circuit"},gu=function(a){if(Gn[a]){if(typeof st<"u"&&st.room){_n("\u5DF2\u5728\u8054\u673A\u623F\u95F4","\u9000\u51FA\u623F\u95F4\u540E\u53EF\u66F4\u6362\u5730\u56FE",1.5);return}en=a,jn(!1),Wr()}},Wr=function(){for(let a of document.querySelectorAll("[data-track]"))a.classList.toggle("selected",a.dataset.track===en),a.setAttribute("aria-pressed",String(a.dataset.track===en));N("trackDescription").textContent=Y().description,N("modeDistance").textContent=Math.round(k)+" m / \u5708 \xB7 "+Y().laps+" \u5708"},Ac=function(){try{localStorage.setItem("star-rush-audio",JSON.stringify(En))}catch{}},Xr=function(){if(Xa(),!me)return!1;if(me.ctx.state==="suspended"&&me.ctx.resume().catch(()=>{}),re.bus)return!0;re.bus=me.ctx.createGain();let a=me.ctx.createDynamicsCompressor();return a.threshold.value=-18,a.ratio.value=3,re.bus.connect(a),a.connect(me.ctx.destination),re.next=me.ctx.currentTime+.08,!0},vs=function(a,l,d,m,S,A=0){let C=me.ctx,F=C.createOscillator(),B=C.createGain();F.type=m,F.frequency.setValueAtTime(a,l),A&&F.frequency.exponentialRampToValueAtTime(A,l+d),B.gain.setValueAtTime(.001,l),B.gain.exponentialRampToValueAtTime(S,l+.008),B.gain.exponentialRampToValueAtTime(.001,l+d),F.connect(B),B.connect(re.bus),F.start(l),F.stop(l+d+.02)},_u=function(a,l,d,m){let S=me.ctx,A=S.createBufferSource(),C=S.createBiquadFilter(),F=S.createGain();A.buffer=me.noise,C.type="highpass",C.frequency.value=d,F.gain.setValueAtTime(m,a),F.gain.exponentialRampToValueAtTime(.001,a+l),A.connect(C),C.connect(F),F.connect(re.bus),A.start(a),A.stop(a+l+.02)},rp=function(a,l){let d=.10135135135135136,m=Math.floor(a/16),S=a%16,A=[45,41,48,43],C=A[Math.floor(m/2)%4],F=at=>440*Math.pow(2,(at-69)/12);if(S%4===0&&vs(135,l,.18,"sine",.38,42),(S===4||S===12)&&(_u(l,.13,1200,.12),vs(180,l,.07,"triangle",.1,70)),S%2===0&&_u(l,.035,7500,S%4===2?.065:.04),S%2===0){let at=C+(S===14?12:0);vs(F(at-12),l,d*1.5,"sawtooth",.045),vs(F(at-12),l,d*1.5,"sine",.1)}let B=[0,7,12,15,12,7,10,7],q=B[Math.floor(S/2)%8];if(S%2===1&&vs(F(C+24+q),l,.16,"triangle",.045),S===0)for(let at of[0,3,7])vs(F(C+12+at),l,d*12,"triangle",.018);if(m%4>=2&&S%4===2){let at=[12,15,19,22,19,15,14,10][Math.floor(S/4)+4*(m%2)];vs(F(C+24+at),l,d*2.5,"sine",.055)}},xu=function(){if(!me||!Xr())return;let a=En.enabled&&Fn&&!document.hidden&&re.mode!=="classic",l=me.ctx.currentTime;if(re.bus.gain.setTargetAtTime(a?En.volume*.42:0,l,.07),re.mode==="synth"&&a){re.next<l-.15&&(re.next=l+.05);let d=0;for(;re.next<l+.18&&d++<8;)rp(re.step++,re.next),re.next+=60/148/4}re.element&&(a&&re.mode==="local"?re.element.paused&&re.element.play().catch(()=>{}):re.element.paused||re.element.pause())},io=function(a){re.mode=a,Xr(),N("synthMusic").classList.toggle("selected",a==="synth"),N("classicMusic").classList.toggle("selected",a==="classic"),N("classicPlayer").hidden=a!=="classic",N("localMusicControls").hidden=a!=="local",N("musicToggle").hidden=a==="classic",a==="classic"?(N("spotifyPlayer").src||(N("spotifyPlayer").src="https://open.spotify.com/embed/track/"+N("classicTrack").value+"?utm_source=generator&theme=0"),N("nowPlaying").textContent="\u7ECF\u5178\u5916\u8BED\u6B4C\u5355 \xB7 \u5728\u4E0B\u65B9\u64AD\u653E\u5668\u70B9\u51FB\u64AD\u653E"):(N("spotifyPlayer").removeAttribute("src"),N("nowPlaying").textContent=a==="local"?re.files[re.index]?.name||"\u8BF7\u9009\u62E9\u97F3\u4E50\u6587\u4EF6":"STARLINE \xB7 \u539F\u521B\u7535\u5B50\u7ADE\u901F\u914D\u4E50")},so=function(a){!re.files.length||!Xr()||(re.index=(a+re.files.length)%re.files.length,re.element||(re.element=new Audio,re.element.preload="auto",me.ctx.createMediaElementSource(re.element).connect(re.bus),re.element.onended=()=>so(re.index+1),re.element.onerror=()=>{N("nowPlaying").textContent="\u6B64\u97F3\u9891\u65E0\u6CD5\u89E3\u7801\uFF0C\u8BF7\u6362\u4E00\u9996 MP3 / OGG / WAV"}),re.element.pause(),re.url&&URL.revokeObjectURL(re.url),re.url=URL.createObjectURL(re.files[re.index]),re.element.src=re.url,En.enabled=!0,io("local"),re.element.play().catch(()=>{N("nowPlaying").textContent="\u70B9\u51FB\u201C\u64AD\u653E\u97F3\u4E50\u201D\u540E\u7EE7\u7EED"}),N("musicToggle").textContent="\u6682\u505C\u97F3\u4E50")},Js=function(a){let l=ne==="running"&&!(typeof st<"u"&&st.room);qr=qr||l,l&&Bi();for(let d of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])d!==a&&(N(d).hidden=!0);gs(),N(a).hidden=!1},ys=function(a){N(a).hidden=!0,qr&&ne==="paused"&&Bi(),qr=!1},Ec=function(a){function l(S){let A=new I(S.mesh);A.local=new Float32Array(S.local),A.shadow=S.shadow;for(let C of S.children)A.add(l(C));return A}let d=l(Ct),m=d.add(new I(ap[a%4]));return{root:d,marker:m,spin:0}},op=function(){return{s:_.s,l:_.l,vS:_.vS,vL:_.vL,yaw:_.yaw,jump:_.jump,mini:_.mini,nitroTime:_.nitroTime,paint:je.paint,time:kt(),finished:ne==="finished"}},vu=function(){for(let a of st.peers.values())a.label.remove();st.peers.clear()},Rc=function(a){let l=st.room?.status;st.room=a.room,st.members=a.members,st.ready=!!a.members.find(m=>m.id===st.id)?.ready,st.errors=0;let d=new Set(a.members.map(m=>m.id));for(let[m,S]of st.peers)d.has(m)||(S.label.remove(),st.peers.delete(m));for(let m of a.members){if(m.id===st.id)continue;let S=st.peers.get(m.id);if(!S){let C=document.createElement("div");C.className="peer-label",C.textContent=m.name,Fi.appendChild(C),S={...Ec(st.peers.size),label:C,name:m.name,history:[],position:null,lastStamp:0},st.peers.set(m.id,S)}S.label.textContent=m.name,S.name=m.name;let A=m.snapshot;A&&Number.isFinite(A.s)&&m.updatedAt>S.lastStamp&&(S.lastStamp=m.updatedAt,S.history.push({...A,t:m.updatedAt}),S.history.length>12&&S.history.shift())}if(st.room.status==="racing"&&st.room.startAt!==st.runTag){st.runTag=st.room.startAt,st.startAt=st.room.startAt,en=st.room.track,Qt="circuit",jn(!1),Wr(),Cu();for(let S of st.peers.values())S.history=[],S.position=null;let m=a.members.findIndex(S=>S.id===st.id);_.l=(m%2?1:-1)*1.9,_.s=-Math.floor(m/2)*3.8,ne="countdown",Oi=(st.startAt-(Date.now()+st.offset))/1e3,N("welcome").hidden=!0,N("finished").hidden=!0,N("paused").hidden=!0,N("roomPanel").hidden=!0,N("rankPanel").hidden=!0,Fi.classList.remove("menu-open"),N("countdown").hidden=!1,Xa(),me&&me.ctx.resume().catch(()=>{})}if(st.room.status==="lobby"&&l&&l!=="lobby"){st.startAt=0,st.runTag=0,ne="ready",en=st.room.track,Qt="circuit",jn(!1),Wr(),N("countdown").hidden=!0,N("finished").hidden=!0,N("welcome").hidden=!1,Fi.classList.add("menu-open");for(let m of st.peers.values())m.history=[]}Pc(),ne==="finished"&&Lu()},Pc=function(){let a=!!st.room;if(N("roomActions").hidden=!a,N("networkHud").hidden=!a,N("createRoom").disabled=a,N("joinRoom").disabled=a,N("roomCode").disabled=a,N("circuitMode").disabled=a,N("endlessMode").disabled=a,N("roomName").disabled=a&&st.room.status==="racing",N("startBtn").textContent=a?"\u56DE\u5230\u8054\u673A\u623F\u95F4":"\u5F00\u59CB\u7ADE\u901F\u3000\u2197",!a){N("roomTitle").textContent="\u540C\u4E00\u6761\u8D5B\u9053\uFF0C\u4E00\u8D77\u51FA\u53D1\u3002",N("roomMembers").replaceChildren(),N("roomStatus").textContent="\u6700\u591A 4 \u4EBA \xB7 \u4F7F\u7528\u5F53\u524D\u9009\u62E9\u7684\u8DD1\u5708\u5730\u56FE";return}N("roomCode").value=st.room.code,N("roomTitle").textContent="ROOM "+st.room.code+" \xB7 "+Gn[st.room.track].name,N("roomStatus").textContent=(st.room.status==="racing"?"\u6BD4\u8D5B\u8FDB\u884C\u4E2D":st.room.status==="finished"?"\u6BD4\u8D5B\u5DF2\u7ED3\u675F":"\u5019\u573A\u4E2D")+" \xB7 "+st.members.length+" / 4 \u4EBA \xB7 "+Math.round(st.rtt)+" ms \u5F80\u8FD4",N("roomMembers").replaceChildren();for(let S of st.members){let A=document.createElement("div");A.className="room-member";let C=document.createElement("span");C.textContent=S.name+(S.id===st.id?"\uFF08\u4F60\uFF09":"")+(S.id===st.room.hostId?" \xB7 \u623F\u4E3B":"");let F=document.createElement("b");F.textContent=S.snapshot?.finished?"\u5B8C\u8D5B "+ie(S.snapshot.time||0):st.room.status==="racing"?"\u6BD4\u8D5B\u4E2D":S.ready?"\u5DF2\u51C6\u5907":"\u7B49\u5F85\u51C6\u5907",A.append(C,F),N("roomMembers").appendChild(A)}let l=st.room.hostId===st.id,d=st.room.status!=="lobby";N("startRoom").hidden=!l,N("startRoom").disabled=!d&&st.members.some(S=>!S.ready),N("startRoom").textContent=d?"\u7ED3\u675F\u672C\u5C40 \xB7 \u8FD4\u56DE\u5019\u573A":"\u5168\u5458\u5C31\u7EEA \xB7 \u5F00\u59CB\u7ADE\u901F",N("readyRoom").hidden=d,N("readyRoom").textContent=st.ready?"\u53D6\u6D88\u51C6\u5907":"\u51C6\u5907",N("connectionText").textContent=st.errors?"\u8FDE\u63A5\u6062\u590D\u4E2D\u2026":"ROOM "+st.room.code+" \xB7 "+Math.round(st.rtt)+" ms";let m=st.members.map(S=>({id:S.id,s:S.id===st.id?_.s:S.snapshot?.s||0,finished:S.id===st.id?ne==="finished":!!S.snapshot?.finished,time:S.id===st.id?kt():S.snapshot?.time||0})).sort((S,A)=>S.finished&&A.finished?S.time-A.time:A.finished-S.finished||A.s-S.s);N("racePosition").textContent="POS "+(m.findIndex(S=>S.id===st.id)+1)+" / "+st.members.length},Yr=function(){Js("roomPanel"),Pc()},Su=function(a){if(!st.room||st.busy||document.hidden||a-st.lastSync<(st.room.status==="racing"?125:850))return;st.lastSync=a,st.busy=!0;let l=st.session;Cc("poll",{snapshot:st.room.status!=="lobby"?op():{}}).then(d=>{st.room&&st.session===l&&Rc(d)}).catch(d=>{st.room&&st.session===l&&(st.errors++,N("connectionText").textContent="\u8FDE\u63A5\u6062\u590D\u4E2D \xB7 "+d.message,N("roomStatus").textContent=d.message)}).finally(()=>{st.busy=!1})},bu=function(a,l){if(!st.room)return;let d=Date.now()+st.offset-V(st.rtt*1.1,170,350);for(let m of st.peers.values()){let S=m.history;if(!S.length){m.label.hidden=!0;continue}let A=S[0],C=A;for(let mt=1;mt<S.length&&(C=S[mt],!(C.t>=d));mt++)A=C;let F=A.t===C.t?0:V((d-A.t)/(C.t-A.t),0,1),B={};for(let mt of["s","l","vS","vL","jump"])B[mt]=X(A[mt]||0,C[mt]||0,F);B.yaw=(A.yaw||0)+An((C.yaw||0)-(A.yaw||0))*F;let q=V((d-C.t)/1e3,0,.12);if(B.s+=(C.vS||0)*q,B.l+=(C.vL||0)*q,m.position&&Math.abs(B.s-m.position.s)<15){let mt=1-Math.exp(-l*24);B.s=X(m.position.s,B.s,mt),B.l=X(m.position.l,B.l,mt)}m.position=B;let at=xe(B.s),pt=Ce(B.s,B.l,.06+B.jump);m.worldPos=E(O(pt,[0,3,0]),a),m.root.tint=typeof C.paint=="string"?C.paint:ro[0],m.root.local=J(E(pt,a),[.97,.97,.97],[0,-at.h-B.yaw,Math.atan(at.slope)]),m.root.shadow=w(E(pt,Ce(_.s,_.l)))<70,x.add(m.root),m.spin-=(B.vS||0)*l/.4;for(let mt=0;mt<_e.length;mt++){let yt=_e[mt];m.root.children[2+mt].local=Q(W(yt.x,.41,yt.z),xt(m.spin))}for(let mt=0;mt<mn.length;mt++){let yt=mn[mt],Rt=C.nitroTime>0||C.mini>0,Ut=Rt?.85+.16*Math.sin(Hs*38+yt.side):.001;m.root.children[6+mt].local=J([-1.9,.43,yt.side*.34],[Ut,Ut,Ut])}}},cp=function(a){for(let l of st.peers.values()){if(!l.worldPos||!st.room||ne==="ready"){l.label.hidden=!0;continue}let d=l.worldPos,m=d[0],S=d[1],A=d[2],C=a[3]*m+a[7]*S+a[11]*A+a[15],F=(a[0]*m+a[4]*S+a[8]*A+a[12])/C,B=(a[1]*m+a[5]*S+a[9]*A+a[13])/C;l.label.hidden=C<=0||Math.abs(F)>1.1||Math.abs(B)>1.1,l.label.hidden||(l.label.style.left=(F*.5+.5)*zr+"px",l.label.style.top=(-B*.5+.5)*Vr+"px")}},Eu=function(){return"star-rush-best-reborn-"+en},up=function(){try{return JSON.parse(localStorage.getItem(Eu())||"null")}catch{return null}},Cu=function(){if(Xn=[],Ms=!1,$s=null,Ss=up(),Gi=null,Zs=0,ao=[],oo=0,lo=[],Ks=[],bs=1,Jr=1,co=0,N("resultGrid").replaceChildren(),N("splitLabel").textContent="SECTOR 1 / 3",N("splitDelta").textContent="",N("lapTimeLabel").textContent="",N("coach").hidden=Ai!=="practice",Qt==="circuit"&&Ai==="race"&&!st.room){_.l=-1.8;for(let a=0;a<3;a++){let l=Ec(a);l.root.tint=Tu[a],Xn.push({s:-3.8*Math.floor((a+1)/2),l:(a%2?1:-1)*1.9,speed:0,yaw:0,color:Tu[a],name:hp[a],node:l.root,finishAt:null,index:a})}}Ss&&sn.ghost&&Qt==="circuit"&&Ai==="timeTrial"&&!st.room?(Vi=Ec(3).root,Vi.tint="#b8e9e6",Vi.opacity=.27):Vi=null,ho(),Ai==="practice"&&!st.room&&Iu()},dp=function(a){for(let l of Xn){if(l.finishAt!==null)continue;let d=0;for(let F=15;F<=65;F+=10)d=Math.max(d,Math.abs(xe(l.s+F).curv));let m=V(Math.sqrt(24/Math.max(.004,d)),24,53)*(1-l.index*.028);l.speed=X(l.speed,m,1-Math.exp(-a*(l.speed>m?3:1.2)));let S=xe(l.s+20).curv,A=Math.sign(S)*1.6+Math.sin(l.s*.012+l.index)*.45;for(let F of hn.values())for(let B of F.entities){if(B.kind!=="barrier"&&B.kind!=="cone")continue;let q=B.s+(B.ds||0),at=B.l+(B.dl||0),pt=Gt(q,l.s);pt>0&&pt<28&&Math.abs(A-at)<2.1&&(A=at>0?-2.8:2.8)}let C=l.l;l.l=X(l.l,A,1-Math.exp(-a*2.3)),l.yaw=Math.atan2((l.l-C)/a,Math.max(5,l.speed))+V(S*12,-.4,.4),l.s+=l.speed*a,l.s>=j()&&(l.s=j(),l.finishAt=di,$s??=di)}if(Qt==="circuit"&&!st.room&&(oo+=a,oo>=.1&&(oo=0,ao.push([Number(kt().toFixed(3)),Number(_.s.toFixed(3)),Number(_.l.toFixed(3)),Number(_.yaw.toFixed(4)),Number(_.jump.toFixed(3))]))),Qt==="circuit"){for(;_.s>=bs*k/3&&bs<=Y().laps*3;){lo.push(kt());let l=Ss?.splits?.[bs-1];if(N("splitLabel").textContent="SECTOR "+((bs-1)%3+1)+" / 3",l){let d=kt()-l;N("splitDelta").textContent=(d>0?"+":"\u2212")+Math.abs(d).toFixed(2)+" s",N("splitDelta").style.color=d>0?"#f1b8c6":"#b9edcf"}else N("splitDelta").textContent="\u5206\u6BB5 "+ie(kt()-(lo[bs-2]||0));bs++}if(_.s>=Jr*k){let l=Ks.reduce((d,m)=>d+m,0);Ks.push(kt()-l),N("lapTimeLabel").textContent="\u4E0A\u4E00\u5708 "+ie(Ks.at(-1)),Jr<Y().laps&&_n("LAP "+(Jr+1),"\u4E0A\u4E00\u5708 "+ie(Ks.at(-1)),1.5),Jr++}}if($s!==null&&di-$s>30&&_.s<j()){Ms=!0,Mc();return}co+=a,co>.18&&(co=0,ho())},ho=function(){if(st.room){N("localPosition").textContent="ONLINE",N("eventLabel").textContent="\u597D\u53CB\u623F\u95F4 \xB7 "+st.room.code;return}let a=ne==="finished",l={time:a&&!Ms?kt():null,s:_.s},d=1+Xn.filter(m=>a?Ru({time:m.finishAt,s:m.s},l)<=0:m.finishAt!==null||m.s>_.s).length;N("localPosition").textContent=Xn.length?"POS "+d+" / 4":Ai==="practice"?"PRACTICE":"TIME ATTACK",N("eventLabel").textContent=a?Ms?"\u672A\u5B8C\u8D5B":Qt==="endless"?"\u5DE1\u6E38\u7ED3\u675F":"\u5DF2\u5B8C\u8D5B":$s!==null?"\u5B8C\u8D5B\u5012\u8BA1\u65F6 "+Math.max(0,30-Math.floor(di-$s))+" s":Qt==="endless"?"\u65E0\u5C3D\u5DE1\u6E38":Y().name},Ru=function(a,l){return a.time===null&&l.time===null?l.s-a.s:a.time===null?1:l.time===null?-1:a.time-l.time},Pu=function(a){let l=An(xe(a+62).h-xe(a+32).h);return{turn:l,direction:Math.abs(l)<.05?0:Math.sign(l),currentCurve:xe(a).curv}},Iu=function(a=Pu(_.s)){let l=a.direction>0?"\u53F3\u5F2F":a.direction<0?"\u5DE6\u5F2F":"",d=_.smallJets>0&&_.smallWindow>0,m="W / \u2191 \u52A0\u901F\uFF0C\u89C2\u5BDF\u524D\u65B9\u5F2F\u9053\u3002";_.drifting&&_.driftPhase==="counter"?m="\u53CD\u6253\u6536\u8F66\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\u3002":""):_.drifting&&_.driftPhase==="release"||_.driftPhase==="exit"&&_.exitTime>0?m="\u6536\u6F02\u4E2D\uFF1A\u5148\u7A33\u4F4F\u65B9\u5411\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\uFF0C\u8F66\u5934\u7A33\u5B9A\u540E\u8854\u63A5\u3002":""):_.drifting?m=_.driftPhase==="entry"?"\u8D77\u6F02\u4E2D\uFF1A\u5C0F\u5E45\u8F6C\u5411\uFF0C\u51C6\u5907\u53CD\u6253\u6536\u8F66\u3002":"\u6F02\u79FB\u4E2D\uFF1A\u53CD\u6309\u65B9\u5411\u6536\u8F66\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002":d?m="\u5C0F\u55B7 \xD7"+_.smallJets+"\uFF1A\u8F66\u5934\u7A33\u5B9A\u540E\u70B9\u7A7A\u683C / Q\u3002"+(_.smallJets>1?"\u8FDE\u7EED\u4E24\u6B21\u53EF\u53CC\u55B7\u3002":""):_.nitroTime>0?m="\u6C2E\u6C14\u55B7\u5C04\u4E2D\uFF1A"+(l?"\u524D\u65B9"+l+"\uFF0C\u7A33\u4F4F\u65B9\u5411\u3002":"\u4FDD\u6301\u8DEF\u7EBF\uFF0C\u65E0\u9700\u91CD\u590D\u6309 E / C\u3002"):_.speed>10&&(l?m="\u524D\u65B9"+l+"\uFF1A\u5148\u6536\u6CB9\u63A7\u901F\uFF0C\u5E73\u987A\u8F6C\u5411\u3002":_.nitro>0&&_.speed>15&&Math.abs(a.currentCurve)<.006?m="\u524D\u65B9\u76F4\u9053\uFF1A\u8F66\u8EAB\u7A33\u5B9A\u540E\uFF0C\u53EF\u9009 E / C \u6C2E\u6C14\u3002":m="\u524D\u65B9\u76F4\u9053\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u7559\u610F\u4E0B\u4E00\u5F2F\u3002"),N("coach").textContent=m},Lu=function(){let a=st.room?st.members.filter(l=>l.id!==st.id).map(l=>({name:l.name,time:l.snapshot?.finished?l.snapshot.time:null,s:l.snapshot?.s||0})):Xn.map(l=>({name:l.name,time:l.finishAt,s:l.s}));if(a.push({name:je.name+"\uFF08\u4F60\uFF09",time:Ms?null:kt(),s:_.s}),a.sort(Ru),N("resultGrid").replaceChildren(),a.length>1)for(let l=0;l<a.length;l++){let d=document.createElement("div");d.className="result-row";let m=document.createElement("span"),S=document.createElement("b");m.textContent=l+1+". "+a[l].name,S.textContent=a[l].time===null?st.room?.status==="racing"?"\u6BD4\u8D5B\u4E2D":"\u672A\u5B8C\u8D5B":ie(a[l].time),d.append(m,S),N("resultGrid").appendChild(d)}},fp=function(){if(ki=!1,Lu(),ho(),Ms)N("resultDistance").textContent="DNF",N("resultNote").textContent="\u672C\u5C40\u672A\u80FD\u5728\u5012\u8BA1\u65F6\u7ED3\u675F\u524D\u5B8C\u8D5B\uFF0C\u53EF\u4EE5\u518D\u6311\u6218\u4E00\u6B21\u3002",N("submitRun").disabled=!0,Gr=null;else if(!st.room&&Qt==="circuit"&&ao.length>10&&(!Ss||kt()<Ss.time))try{localStorage.setItem(Eu(),JSON.stringify({time:kt(),points:ao,splits:lo,laps:Ks,date:Date.now()})),N("resultNote").textContent="\u5237\u65B0\u672C\u673A\u6700\u4F73\uFF01\u5DF2\u4FDD\u5B58\u5E7D\u7075\uFF0C\u53EF\u5728\u8BA1\u65F6\u6311\u6218\u4E2D\u8FFD\u9010\u81EA\u5DF1\u3002"}catch{}N("coach").hidden=!0},pp=function(a,l){Gi=null;for(let d of Xn){let m=xe(d.s);d.node.local=J(E(Ce(d.s,d.l,.07),a),[.97,.97,.97],[0,-m.h-d.yaw,Math.atan(m.slope)]),x.add(d.node);for(let S=0;S<_e.length;S++){let A=_e[S];d.node.children[2+S].local=Q(W(A.x,.41,A.z),xt(-d.s/.4))}}if(Vi&&Ss?.points?.length&&ne==="running"){let d=Ss.points,m=kt();for(;Zs<d.length-2&&d[Zs+1][0]<m;)Zs++;let S=d[Zs],A=d[Zs+1],C=V((m-S[0])/(A[0]-S[0]||1),0,1),F=X(S[1],A[1],C),B=X(S[2],A[2],C),q=S[3]+An(A[3]-S[3])*C,at=X(S[4],A[4],C);Gi={s:F,l:B,yaw:q,jump:at};let pt=xe(F);Vi.local=J(E(Ce(F,B,.07+at),a),[.97,.97,.97],[0,-pt.h-q,0]),x.add(Vi)}if(sn.line&&ne==="running")for(let d=0;d<Lc.length;d++){let m=_.s+12+d*9,S=xe(m),A=V(S.curv*80,-2.1,2.1),C=Lc[d];C.mesh=Au[Math.abs(S.curv)*_.speed>.95?1:0],C.local=J(E(Ce(m,A,.085),a),[1,1,1],[0,-S.h,0]),x.add(C)}},mp=function(a,l){let d=a-Du;if(Du=a,d>0&&d<1e3&&js.push(d),js.length>180&&js.shift(),Dc+=l,Dc<.25)return;Dc=0;let m=js.reduce((C,F)=>C+F,0)/(js.length||1),S=[...js].sort((C,F)=>C-F),A=S[Math.floor(S.length*.95)]||0;N("diagnostics").textContent="REBORN / "+(h?"Canvas compatibility":"Three.js WebGL 2")+`
FPS `+Math.round(1e3/(m||16.7))+" | frame p95 "+A.toFixed(1)+` ms
`+(h?"WebGL draw/triangles: n/a":"Draw "+Ic.drawCalls+" | triangles "+Ic.triangles)+`
State `+ne+" | event "+Ai+`
s `+_.s.toFixed(1)+" / "+j().toFixed(1)+" | l "+_.l.toFixed(2)+`
speed `+(_.speed*3.6).toFixed(1)+` km/h
steer `+Ws.toFixed(2)+" | slip "+(An(_.yaw-_.velocityYaw)*180/Math.PI).toFixed(1)+`\xB0
drift `+_.driftPhase+" | small "+_.smallJets+" | nitro "+_.nitro+`
ready `+(st.ready?"yes":"no")+" | peers "+st.peers.size+(me?.rail?`
rail `+Object.values(me.rail.status().states).join("/")+" | "+me.rail.status().last+" #"+me.rail.status().played:"")},gp=function(a){if(zi=null,ki&&ne==="running"){let S=0;for(let pt=15;pt<=90;pt+=10)S=Math.max(S,Math.abs(xe(_.s+pt).curv));let A=V(.85/Math.max(.012,S),14,48),C=xe(_.s),F=Ce(_.s+V(_.speed*.45,12,26),0,0),B=E(F,Ce(_.s,_.l,0)),q=Math.atan2(P(B,C.R),P(B,C.T)),at=An(q-_.velocityYaw);zi=V((at*3+xe(_.s+12).curv*_.speed)/1.04,-1,1),Ae.brake=_.speed>A+1.5,Ae.gas=!Ae.brake;return}let l=navigator.getGamepads?.()[0];if(!l){Uc&&(zs(),Nc={},Uc=!1);return}Uc=!0,zs();let d=Math.abs(l.axes[0]||0)>.13?l.axes[0]:0;d&&(zi=d);let m={gas:l.buttons[7]?.value>.13,brake:l.buttons[6]?.value>.13,drift:!!l.buttons[2]?.pressed,small:!!l.buttons[0]?.pressed,boost:!!l.buttons[1]?.pressed};for(let[S,A]of Object.entries(m))Ae[S]||=A,A&&!Nc[S]&&S in Hn&&Hn[S]++;Nc=m},Zr=function(){try{localStorage.setItem("star-rush-settings-reborn",JSON.stringify(sn))}catch{}},uo=function(){je.name=N("profileName").value.trim().slice(0,16)||je.name;try{localStorage.setItem("star-rush-profile",JSON.stringify(je)),localStorage.setItem("star-rush-name",je.name)}catch{}N("carName").textContent=je.car;for(let a of["roomName","racerName","profileName"])N(a).value=je.name;N("profileStatus").textContent="\u5DF2\u4FDD\u5B58 \xB7 "+je.name,Ct.tint=je.paint},Fc=function(){for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])N(a).checked=!!sn[l];N("qualitySetting").value=sn.quality,N("steeringSetting").value=sn.sensitivity*100,N("fovSetting").value=sn.fov,N("settingsStatus").textContent=h?"\u5F53\u524D\u6D4F\u89C8\u5668\u4F7F\u7528\u517C\u5BB9\u663E\u793A\u6A21\u5F0F\uFF0C\u6BD4\u8D5B\u903B\u8F91\u548C\u64CD\u4F5C\u4FDD\u6301\u4E00\u81F4\u3002":"Three.js 3D \u6E32\u67D3 \xB7 \u8BBE\u7F6E\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5728\u6B64\u8BBE\u5907\u3002"},Uu=function(){if(st.room){Yr();return}ki=!1,ne="ready",jn(!1),Xn=[],Vi=null,gs(),N("welcome").hidden=!1,N("paused").hidden=!0,N("finished").hidden=!0,N("coach").hidden=!0,Fi.classList.add("menu-open"),N("countdown").hidden=!0},xp=function(){for(let a of document.querySelectorAll("[data-track]")){let l=Gn[a.dataset.track],d=a.querySelector("svg");if(!l||!d)continue;let m=l.points.map(yt=>yt[0]),S=l.points.map(yt=>yt[2]),A=Math.min(...m),C=Math.max(...m),F=Math.min(...S),B=Math.max(...S),q=Math.min(140/(C-A),54/(B-F)),at=l.points.map(yt=>[80+(yt[0]-(A+C)/2)*q,35+(yt[2]-(F+B)/2)*q]),pt=document.createElementNS("http://www.w3.org/2000/svg","path");pt.setAttribute("d",at.map((yt,Rt)=>(Rt?"L":"M")+yt.join(",")).join(" ")+"Z"),pt.setAttribute("fill","none"),pt.setAttribute("stroke",l.biome?"#eabfd8":"#a9d8ec"),pt.setAttribute("stroke-width","3"),pt.setAttribute("stroke-linejoin","round"),d.replaceChildren(pt);let mt=document.createElementNS("http://www.w3.org/2000/svg","circle");mt.setAttribute("cx",at[0][0]),mt.setAttribute("cy",at[0][1]),mt.setAttribute("r","3"),mt.setAttribute("fill","#ffe2ac"),d.appendChild(mt)}},c=Tf(i);i=c.canvas;let u=c.threeBackend,h=c.software,g=c.softwareContext,f=new WeakMap,v=Math.PI,p=v*2,U=(a=0,l=0,d=0)=>[a,l,d],O=(a,l)=>a.map((d,m)=>d+l[m]),E=(a,l)=>a.map((d,m)=>d-l[m]),R=(a,l)=>a.map(d=>d*l),P=(a,l)=>a[0]*l[0]+a[1]*l[1]+a[2]*l[2],z=(a,l)=>[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],w=a=>Math.hypot(...a),L=a=>R(a,1/(w(a)||1)),V=(a,l,d)=>Math.min(d,Math.max(l,a)),X=(a,l,d)=>a+(l-a)*d,$=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),St={green:"#7fb86c",light:"#a7d27d",dark:"#407750",spine:"#4c8056",belly:"#dfdb96",eye:"#fff2cf",iris:"#325f43",coral:"#df8064",rim:"#f2be8e",rubber:"#344b42",metal:"#b7c8b1",wood:"#b78c57",gold:"#d6b471",cream:"#f1ead2",grass:"#b7cc90",white:"#fff4d7",earth:"#b4976d",water:"#91c6b8",leaf:"#85ad74"},Ye=new Map,ge=oe(),ze=oe(12,8),Ke=Xt(),cn=Xt(8),We=Xt(10,0),Ze=Xt(4,0),H=$();class ve{constructor(){this.data=[],this.indices=[]}add(l,d=H,m=St.green,S=.13){let A=typeof m=="string"?gt(m):m,C=ft(d),F=this.data.length/10;for(let B=0;B<l.p.length;B+=3){let q=ct(d,l.p.slice(B,B+3)),at=Ht(C,l.n.slice(B,B+3));this.data.push(...q,...at,...A,S)}for(let B of l.i)this.indices.push(F+B);return this}finish(l=!1){return new Pe(this.data,this.indices,l)}}class Pe{constructor(l,d){this.sourceData=new Float32Array(l),this.sourceIndices=new Uint32Array(d),this.count=d.length}update(l){this.sourceData=new Float32Array(l)}dispose(){this.onDispose&&this.onDispose()}}class I{constructor(l=null,d=H){this.mesh=l,this.local=d,this.children=[],this.shadow=!0,this.world=H}add(l){return this.children.push(l),l}}let x=new I,K=new ve,it=new ve,Kt=73121,Ct=x.add(new I),Tt=new ve,te="#83cde4",ee="#eff0f6",G="#9c8ad5",Et="#343952",vt="#ed94bd",Pt="#f8d1b5",Bt="#a3a9e5",bt="#7479b7";Z(Tt,[0,.47,0],[3.15,.43,1.42],te,.16),Z(Tt,[.9,.68,0],[1.4,.27,1.42],ee,.13,[0,0,-.065],.5),Z(Tt,[.96,.83,0],[1.08,.035,.14],G,.015,[0,0,-.065],.5),Z(Tt,[0,.38,0],[3.3,.15,1.48],Et,.07),Z(Tt,[1.53,.31,0],[.5,.075,1.9],G,.035),Z(Tt,[-1.4,.39,0],[.45,.22,1.55],G,.07);for(let a of[-.7,.7]){Z(Tt,[-.15,.64,a],[2.55,.35,.29],te,.12,[0,0,0],.45),Z(Tt,[.1,.81,a],[1.55,.05,.2],ee,.02),Z(Tt,[-.17,.69,a*1.19],[.62,.19,.032],Et,.02,[0,0,-.12]);for(let l=0;l<4;l++)Z(Tt,[-.38+l*.12,.69,a*1.22],[.035,.13,.015],"#758ab5",.007,[0,0,-.15]);Z(Tt,[1.54,.66,a*.75],[.055,.14,.33],"#fff0b9",.035,[0,0,-.1],.65),Z(Tt,[-1.57,.62,a*.79],[.035,.12,.28],vt,.035,[0,0,0],.6),Z(Tt,[-1.32,.85,a*.83],[.07,.55,.07],Et,.02),Z(Tt,[-1.38,1.13,a*1.34],[.43,.16,.055],G,.025)}Z(Tt,[1.6,.44,0],[.04,.15,.67],Et,.03);for(let a=0;a<5;a++)Z(Tt,[1.63,.44,(a-2)*.115],[.014,.1,.024],"#6d7990",.006);Z(Tt,[-1.37,1.12,0],[.38,.065,1.94],ee,.03),Z(Tt,[-1.37,1.16,0],[.18,.018,1.68],G,.007),Z(Tt,[-.42,.77,0],[1.05,.08,.94],Et,.05),Z(Tt,[-.69,1,0],[.18,.53,.64],Et,.08,[0,0,-.12]),Z(Tt,[-.6,1.23,0],[.18,.15,.5],G,.05),Z(Tt,[.28,.94,0],[.075,.26,.91],"#bedde9",.025,[0,0,-.33],.6);for(let a of[-.75,.75])Mt(Tt,[.22,.91,a*.84],[.31,1.04,a*1.1],.018,Et),tt(Tt,[.31,1.04,a*1.11],[.13,.055,.09],ee,!0,.6);Mt(Tt,[.35,.82,0],[.1,1.08,0],.035,Et),Tt.add(le(.16,.025,28,8),J([.1,1.08,0],[1,1,1],[0,v/2,-.35]),Et,.2);for(let a of[-.34,.34])Tt.add(Ke,J([-1.64,.43,a],[.085,.2,.085],[0,0,v/2]),"#9babc2",.75);tt(Tt,[-.42,1.04,0],[.24,.29,.22],G),tt(Tt,[-.36,1.29,0],[.095,.1,.09],Pt,!0);for(let a of[-1,1]){let l=[-.38,1.17,a*.22],d=[-.13,1.02,a*.29],m=[.09,1.09,a*.14];Mt(Tt,l,d,.075,G,.14,!0),Mt(Tt,d,m,.06,G,.14,!0),tt(Tt,m,[.085,.065,.065],ee,!0)}Z(Tt,[-.18,1.08,0],[.05,.31,.08],ee,.01);let $t=Ct.add(new I(Tt.finish()));$t.mesh.paintable=!0;let Dt=new ve;tt(Dt,[0,0,0],[.335,.355,.3],Pt),tt(Dt,[-.19,-.01,0],[.2,.35,.32],bt),tt(Dt,[-.025,.19,0],[.37,.255,.33],Bt);for(let a of[-1,1])tt(Dt,[-.035,-.04,a*.29],[.13,.28,.095],Bt),tt(Dt,[.308,.025,a*.13],[.02,.1,.067],ee,!0),tt(Dt,[.326,.023,a*.13],[.012,.075,.043],"#5c72a5",!0,.4),tt(Dt,[.338,.015,a*.13],[.008,.048,.027],"#303c65",!0),tt(Dt,[.347,.058,a*.135],[.008,.02,.018],"#fffaf1",!0,.6),tt(Dt,[.296,-.1,a*.2],[.014,.038,.045],"#e9a6ab",!0),_t(Dt,[[.32,.132,a*.075],[.322,.148,a*.13],[.31,.132,a*.19]],.011,bt),ht(Dt,[.215,.165,a*.18],[.1,.24,.085],Bt,[0,0,v+.2]),Dt.add(le(.084,.014,24,7),J([.33,.24,a*.125],[1,1,1],[0,v/2,0]),"#e8c58c",.6),tt(Dt,[.335,.24,a*.125],[.012,.064,.066],"#a0d8e8",!0,.6);_t(Dt,[[.317,-.148,-.037],[.326,-.16,0],[.317,-.148,.037]],.009,"#b77787"),Dt.add(le(.313,.02,40,7),J([-.025,.225,0],[1.05,1,1],[v/2,0,0]),Et),ht(Dt,[.26,.17,-.04],[.1,.25,.08],Bt,[0,0,v+.25]);let Fe=Ct.add(new I(Dt.finish())),_e=[];for(let a of[-1.02,1.06])for(let l of[-1,1]){let d=new ve;d.add(le(.315,.095,40,12),H,"#343b4c",.22),d.add(le(.255,.027,32,8),W(0,0,l*.075),"#e4e6ef",.7),d.add(Ke,J([0,0,l*.07],[.238,.07,.238],[v/2,0,0]),"#4d5576",.35);for(let S=0;S<5;S++){let A=S*p/5;Mt(d,[0,0,l*.116],[.23*Math.cos(A),.23*Math.sin(A),l*.116],.025,ee,.65)}tt(d,[0,0,l*.14],[.075,.075,.022],G,!0,.6);let m=Ct.add(new I(d.finish()));_e.push({n:m,x:a,z:l*.83,front:a>0})}let mn=[];for(let a of[-1,1]){let l=new ve;tt(l,[0,0,0],[.65,.105,.105],"#a6f4ff",!0,.8),tt(l,[-.3,0,0],[.35,.065,.065],"#e9d1ff",!0,.7);let d=Ct.add(new I(l.finish()));d.shadow=!1,mn.push({n:d,side:a})}let gn=new ve;Z(gn,[0,.36,0],[.6,.72,2.1],"#ef97aa",.08),Z(gn,[0,.78,0],[.69,.16,2.2],ee,.035);for(let a=0;a<5;a++)Z(gn,[.312,.4,(a-2)*.38],[.018,.29,.16],"#fff0c7",.015,[.28,0,0]);for(let a of[-.85,.85])Mt(gn,[0,.05,a],[0,.77,a],.045,"#636986");let cc=gn.finish(),Fs=new ve;Z(Fs,[0,.07,0],[.8,.12,.8],Et,.04),ht(Fs,[0,.49,0],[.28,.78,.28],"#e4b281"),ht(Fs,[0,.53,0],[.2,.16,.2],ee);let za=Fs.finish(),ls=new ve;ls.add(le(.34,.068,28,8),J([0,0,0],[1,1,1],[0,v/2,0]),"#f0d085",.7),tt(ls,[0,0,0],[.04,.22,.22],"#ffe7a7",!0,.55);let hc=ls.finish(),cs=new ve;Z(cs,[0,.025,0],[5.5,.045,3],"#7ecadc",.02);for(let a=0;a<3;a++){let l=-1.8+a*1.6;Mt(cs,[l-.45,.075,-.9],[l+.35,.075,0],.055,"#eef9d0",.3),Mt(cs,[l+.35,.075,0],[l-.45,.075,.9],.055,"#eef9d0",.3)}let Va=cs.finish(),Zn=new ve,hs=[-2.5,0,-1.6,2.5,0,-1.6,2.5,1,-1.6,-2.5,0,1.6,2.5,0,1.6,2.5,1,1.6],oi=[0,1,2,3,5,4,0,2,5,0,5,3,1,4,5,1,5,2],Os=[],us=[],Lr=[];for(let a=0;a<oi.length;a+=3){let l=hs.slice(oi[a]*3,oi[a]*3+3),d=hs.slice(oi[a+1]*3,oi[a+1]*3+3),m=hs.slice(oi[a+2]*3,oi[a+2]*3+3),S=L(z(E(d,l),E(m,l))),A=Os.length/3;Os.push(...l,...d,...m),us.push(...S,...S,...S),Lr.push(A,A+1,A+2)}Zn.add(Vt(Os,us,Lr),H,"#d9b1e0");for(let a of[-1.4,1.4])Mt(Zn,[-2.5,.06,a],[2.5,1.06,a],.045,ee);let Bs=Zn.finish(),Ga=new ve().add(ze,H,"#b4eaff",.2).finish(),ds=Array.from({length:45},()=>({life:0,p:[0,0,0],v:[0,0,0],size:.1,node:new I(Ga)}));for(let a of ds)a.node.shadow=!1;let Qt="circuit",en="coast-reborn",Ha="coast-reborn",Gn={"coast-reborn":{name:"\u6C50\u89C1\u6D77\u5CB8",laps:1,biome:0,difficulty:"\u5165\u95E8 \xB7 \u9AD8\u901F\u7EC4\u5408\u5F2F",description:"\u6C50\u89C1\u7AD9\u524D \u2192 \u6D77\u6EE8\u5546\u5E97\u8857 \u2192 \u795E\u793E\u5C71\u9053 \u2192 \u6E2F\u6E7E S \u5F2F",sectors:[{at:0,name:"\u6C50\u89C1\u7AD9\u524D"},{at:.22,name:"\u6D77\u6EE8\u5546\u5E97\u8857"},{at:.48,name:"\u6E2F\u6E7E S \u5F2F"},{at:.66,name:"\u795E\u793E\u5C71\u9053"},{at:.82,name:"\u6D77\u98CE\u5927\u9053"}],points:[[-155,0,70],[-80,0,70],[0,.2,70],[85,.7,65],[135,1.2,30],[130,1.6,-20],[75,2,-28],[38,1.8,0],[0,1.5,-10],[8,.8,-58],[65,.2,-80],[115,0,-85],[130,.4,-125],[75,1,-150],[0,1.6,-145],[-60,2,-100],[-110,1.2,-135],[-155,.5,-100],[-200,0,-25],[-218,0,28],[-215,0,70]]},"sakura-reborn":{name:"\u82B1\u89C1\u5742",laps:2,biome:1,difficulty:"\u8FDB\u9636 \xB7 \u8FDE\u7EED\u53CD\u5411\u5F2F",description:"\u6A31\u82B1\u6821\u95E8 \u2192 \u82B1\u89C1\u5742\u5546\u5E97\u8857 \u2192 \u795E\u793E\u53C2\u9053 \u2192 \u6CB3\u5CB8\u56DE\u73AF",sectors:[{at:0,name:"\u6A31\u82B1\u7AD9\u524D"},{at:.22,name:"\u82B1\u89C1\u5742\u5546\u5E97\u8857"},{at:.47,name:"\u6CB3\u5CB8\u56DE\u73AF"},{at:.66,name:"\u795E\u793E\u53C2\u9053"},{at:.83,name:"\u6A31\u82B1\u5927\u9053"}],points:[[-180,0,70],[-95,0,70],[0,0,70],[95,.4,62],[170,1,16],[160,1.6,-45],[100,2,-70],[55,2.2,-30],[5,2,-55],[-16,1,-110],[-80,.5,-130],[-145,0,-104],[-220,0,-45],[-230,0,25],[-230,0,70]]}};Gn["academy-reborn"]={name:"\u661F\u8DC3\u8BAD\u7EC3\u573A",laps:1,biome:1,difficulty:"\u57FA\u7840\u9A7E\u9A76",description:"\u5BBD\u7F13\u5F2F\u9053 \xB7 \u6E05\u6670\u89C6\u91CE \xB7 \u7EC3\u4E60\u8D77\u6F02\u3001\u53CD\u6253\u4E0E\u51FA\u5F2F\u55B7\u5C04",sectors:[{at:0,name:"\u57FA\u7840\u76F4\u9053"},{at:.33,name:"\u6F02\u79FB\u5F27\u7EBF"},{at:.66,name:"\u51FA\u5F2F\u52A0\u901F"}],points:[[-100,0,65],[0,0,65],[100,0,65],[145,.3,25],[145,.4,-25],[100,.2,-65],[0,0,-65],[-100,0,-65],[-145,.1,-25],[-145,.1,25]]};for(let[a,l]of Object.entries(Gn)){let d=a==="coast-reborn"?1.45:a==="sakura-reborn"?1.5:1.2;l.points=l.points.map(m=>[m[0]*d,m[1],m[2]*d])}let b=[],k=0,rt={};qt();let Jt=220,Re=245,He=1.57,Ie=.91,Ne=8.045,Ve=(a,l)=>a[0]*l[0]+a[1]*l[1],Wt=(a,l)=>a[0]*l[1]-a[1]*l[0],Un=new Map,ui=null,eu=null,dc=[],Of=Le("petal",a=>Z(a,[0,0,0],[.12,.025,.075],"#ffd2e8",.025)),me=null,Fn=!0,Gf=(()=>{let a=(A,C,F)=>Math.min(F,Math.max(C,A)),l=(A,C,F)=>A+(C-A)*F,d=A=>Math.atan2(Math.sin(A),Math.cos(A)),m=Object.freeze({cruise:52,mini:63,nitro:76,combo:83,normalTurn:1.04,driftTurn:1.8,driveAcceleration:27,jetAcceleration:36});function S(A,C,F,B={}){let q=Math.hypot(A.vS,A.vL),at=q>.05?Math.atan2(A.vL,A.vS):A.yaw,pt=a(Number(C.steer)||0,-1,1),mt=B.sensitivity||1,yt=A.vS*Math.cos(A.yaw)+A.vL*Math.sin(A.yaw)<-.05,Rt=A.steering||0,Ut=pt*Rt>=0&&Math.abs(pt)>Math.abs(Rt),fe=B.arcadeCandidate&&Ut?Math.max(8,26/(1+Math.max(0,q-30)/10)):26;A.steering=l(Rt,pt,1-Math.exp(-F*fe));let ut=!!A.drifting,ot=A.driftSide||Math.sign(pt)||1,At=ut&&pt*ot<-.1,It=ut&&A.driftReleasing,Yt=A.steering*m.normalTurn*mt*a(q/8,0,1)*(yt?-1:1);if(ut){let Mp=Math.max(0,A.steering*ot),Sp=ot*(At?.4:.52+Mp*(m.driftTurn-.52)),bp=It?a((A.releaseAge||0)/.38,0,1):0;Yt=l(Sp,Yt,bp)*a(q/9,0,1)}A.jump>.2&&(Yt*=.35),A.turnRate=l(A.turnRate||0,Yt,1-Math.exp(-F*(ut?13:19)));let wt=d(at+A.turnRate*F),Je=d(at-(yt?Math.PI:0)),un=d(A.yaw-Je),xn=ut?ot*(At?.015:It?.12:.22+.38*Math.max(0,pt*ot)):A.steering*.025;It&&(xn*=1-a((A.releaseAge||0)/.45,0,1));let rn=At?13:ut?9:8;un=l(un,xn,1-Math.exp(-F*rn)),A.yaw=d(wt-(yt?Math.PI:0)+un+(A.spin||0)*F),A.spin=(A.spin||0)*Math.exp(-F*6);let Qe=q,Qs=.7+q*.018+q*q*45e-5,ws=A.nitroTime>0||A.mini>0||A.pad>0,Hi=A.nitroTime>0?A.comboTimer>0?m.combo:m.nitro:A.pad>0?73:A.mini>0?m.mini:m.cruise,Fu=B.arcadeCandidate&&A.railSide?a((A.steering*A.railSide-.1)/.9,0,1):0,vp=C.gas&&!C.brake?a((m.cruise-Qe)*2.8,0,m.driveAcceleration)*(1-Fu):0,Ou=ws&&!C.brake?a((Hi-Qe)*2.8,0,m.jetAcceleration)*(1-Fu):0,yp=ut?(At?1.3:3.3)*Math.abs(un):0;return Qe=Math.max(0,Qe+(vp+Ou-Qs-yp)*F),!ws&&Qe>m.cruise&&(Qe=Math.max(m.cruise,Qe-Math.min(8,(Qe-m.cruise)*.7)*F)),C.brake&&(Qe=Math.max(0,Qe-36*F)),yt&&C.gas&&(Qe=Math.max(0,Qe-32*F)),C.brake&&!C.gas&&(q<1.3||yt)?(A.vS=l(A.vS,-Math.cos(A.yaw)*5,1-Math.exp(-F*5)),A.vL=l(A.vL,-Math.sin(A.yaw)*5,1-Math.exp(-F*5))):(A.vS=Math.cos(wt)*Qe,A.vL=Math.sin(wt)*Qe),A.speed=Math.hypot(A.vS,A.vL),A.velocityYaw=wt,A.lateralSpeed=A.vL,{slip:un,counter:At,thrust:Ou,boost:ws,speed:A.speed}}return{step:S,config:m,wrap:d}})(),An=a=>Math.atan2(Math.sin(a),Math.cos(a)),N=a=>document.getElementById(a),Fi=N("game"),Ae={gas:!1,brake:!1,left:!1,right:!1,drift:!1,boost:!1,small:!1},Ya=new Set,Ja=new Map,Hn={drift:0,boost:0,small:0},mc=[{name:"\u6C50\u89C1\u6D77\u5CB8",ground:"#cbdcbd",tree:"#b9d5bb",accent:"#afc8e4",fog:"#c8deef"},{name:"\u82B1\u89C1\u5742",ground:"#d9d7c7",tree:"#f0bfd5",accent:"#c9c1e5",fog:"#dcdff1"},{name:"\u661F\u5149\u5CE1\u8C37",ground:"#c4b8c3",tree:"#a7a5d3",accent:"#d8b4d8",fog:"#dbdce8"}],_={s:0,l:0,speed:0,yaw:0,velocityYaw:0,energy:0,coins:0,score:0,inv:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,wallRecover:0,wallSide:0,stuckTime:0},Za=1/120,$x=7.02,su=new Map,gc=null,fs=0,Vs=60,Dr=0,ps=null,Yf=new ve().add(he(1,.009,.12,.003),H,"#414957",.01).finish(),ms=Array.from({length:160},()=>({life:0,p:[0,0,0],angle:0,length:1,node:new I(Yf)}));for(let a of ms)a.node.shadow=!1;let Jf=0,ne="ready",Gs=(Date.now()>>>0)%999999||24681,Ka=1,Kn=[],Nr=0,_c=-v/2,xc=100,$a=0,hn=new Map,vc=0,di=0,Hs=0,ja=performance.now(),Oi=3,Wn=0,Ws=0,Ur=0,Fr=0,ru=!1,Qa=!1,Or=0,to=0;try{Or=Number(localStorage.getItem("star-rush-best-distance")||0),to=Number(localStorage.getItem("star-rush-best-score")||0)}catch{}let fi=Object.fromEntries(["distance","score","coins","speed","gear","energyText","biome","turnText","turnArrowPath","driftText"].map(a=>[a,N(a)])),qs=null,Br=null,_s=null,bc=N("minimap"),jt=bc.getContext("2d"),wc=0,eo={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"small",KeyQ:"small",ShiftLeft:"drift",ShiftRight:"drift",KeyE:"boost",KeyC:"boost"};window.addEventListener("keydown",a=>{if(!a.target.closest("input,select,textarea")){if(a.code==="Escape"){for(let l of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])if(!N(l).hidden){ys(l);return}}if(!["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!N(l).hidden)){if(eo[a.code]&&(a.preventDefault(),Ya.add(a.code),zs()),a.code==="Backspace"){a.preventDefault(),a.repeat||Sc(!1);return}a.repeat||(a.code==="F2"&&(a.preventDefault(),N("diagnostics").hidden=!N("diagnostics").hidden),(a.code==="KeyP"||a.code==="Escape")&&Bi(),a.code==="KeyV"&&(Wn=(Wn+1)%3,_n("CAMERA "+(Wn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Wn],1)),a.code==="KeyR"&&Xs(!1),a.code==="Enter"&&(ne==="ready"||ne==="finished"?Xs(!1):ne==="paused"&&Bi()))}}}),window.addEventListener("keyup",a=>{["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!N(l).hidden)||eo[a.code]&&(a.preventDefault(),Ya.delete(a.code),zs())}),window.addEventListener("blur",()=>{gs(),ne==="running"&&Bi()});for(let a of document.querySelectorAll("[data-key]")){a.addEventListener("pointerdown",d=>{d.preventDefault(),a.setPointerCapture(d.pointerId),Ja.set(d.pointerId,a.dataset.key),zs(),a.classList.add("held")});let l=d=>{Ja.delete(d.pointerId),zs(),a.classList.remove("held")};for(let d of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(d,l)}N("endRunBtn").onclick=()=>{Qt==="endless"&&(ne==="running"||ne==="paused")&&(N("paused").hidden=!0,Mc())},N("recoverBtn").onclick=()=>Sc(!1),N("startBtn").onclick=()=>Xs(!1),N("retryBtn").onclick=()=>Xs(!1),N("newRouteBtn").onclick=()=>{if(typeof st<"u"&&st.room){Yr();return}ne="ready",jn(!0),N("finished").hidden=!0,N("welcome").hidden=!1},N("rerollBtn").onclick=()=>jn(!0),N("pauseBtn").onclick=Bi,N("resumeBtn").onclick=Bi,N("restartPause").onclick=()=>Xs(!1),N("viewBtn").onclick=()=>{Wn=(Wn+1)%3,_n("CAMERA "+(Wn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Wn],1)},N("soundBtn").onclick=()=>{Xa(),Fn=!Fn,me&&me.ctx.resume().catch(()=>{}),N("soundBtn").textContent=Fn?"\u266B":"\u266A",N("soundBtn").setAttribute("aria-label",Fn?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),N("soundBtn").title=Fn?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED",Fn&&Ui(600)};let ep=["#a1cddd","#c2d4bc"].map(a=>new ve().add(he(1100,.16,1100,.04),H,a,.02).finish()),no=new I,kr=[],zr=1,Vr=1;new ResizeObserver(du).observe(i),du(),jn(!1),i.addEventListener("webglcontextlost",a=>{a.preventDefault(),n("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u6E38\u620F\u3002")}),document.addEventListener("visibilitychange",()=>{document.hidden&&ne==="running"&&Bi(),ja=performance.now()}),requestAnimationFrame(fu);let xs=en,Gr=null,wi="circuit",Ti=!1,Tc=0;async function Hr(){let a=++Tc,l=N("rankRows");N("rankTrack")&&(N("rankTrack").hidden=wi!=="circuit"),l.replaceChildren(),N("rankStatus").textContent=Ti?"\u672C\u673A\u8BB0\u5F55":"\u6B63\u5728\u83B7\u53D6\u5728\u7EBF\u6210\u7EE9\u2026";for(let[d,m]of[["boardCircuit","circuit"],["boardEndless","endless"]])N(d).classList.toggle("selected",!Ti&&wi===m);N("boardLocal").classList.toggle("selected",Ti);try{let d;if(Ti)d=pu().filter(m=>m.mode===wi&&(m.mode==="endless"||m.track===xs)).sort((m,S)=>wi==="circuit"?m.timeMs-S.timeMs:S.distance-m.distance).slice(0,20);else{let m=await fetch("/api/leaderboard?mode="+wi+"&track="+encodeURIComponent(xs));if(!m.ok)throw new Error("\u699C\u5355\u670D\u52A1\u6682\u4E0D\u53EF\u7528");d=(await m.json()).runs}if(a!==Tc)return;for(let m=0;m<d.length;m++)l.appendChild(ip(m,d[m]));N("rankStatus").textContent=d.length?(Ti?"\u5F53\u524D\u8BBE\u5907 \xB7 ":"\u5728\u7EBF \xB7 ")+(wi==="circuit"?Gn[xs].name+" / "+Gn[xs].laps+" \u5708 / \u6309\u6700\u5FEB\u7528\u65F6":"\u65E0\u5C3D\u6A21\u5F0F / \u6309\u6700\u8FDC\u91CC\u7A0B"):"\u8FD8\u6CA1\u6709\u6210\u7EE9\uFF0C\u6765\u8DD1\u7B2C\u4E00\u5708\u3002"}catch{if(a!==Tc)return;N("rankStatus").textContent="\u5728\u7EBF\u699C\u6682\u65F6\u672A\u80FD\u52A0\u8F7D\uFF0C\u53EF\u5207\u6362\u201C\u672C\u673A\u8BB0\u5F55\u201D\u3002"}}N("rankBtn").onclick=sp,N("closeRank").onclick=()=>ys("rankPanel"),N("boardCircuit").onclick=()=>{wi="circuit",Ti=!1,Hr()},N("boardEndless").onclick=()=>{wi="endless",Ti=!1,Hr()},N("boardLocal").onclick=()=>{Ti=!0,Hr()},N("circuitMode").onclick=()=>mu("circuit"),N("endlessMode").onclick=()=>mu("endless");try{N("racerName").value=localStorage.getItem("star-rush-name")||""}catch{}N("submitRun").onclick=async()=>{if(!Gr)return;let a=N("racerName").value.trim().slice(0,16)||"\u533F\u540D\u8F66\u624B";try{localStorage.setItem("star-rush-name",a)}catch{}N("submitRun").disabled=!0,N("uploadStatus").textContent="\u6B63\u5728\u4E0A\u4F20\u6210\u7EE9\u2026";try{if(!(await fetch("/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...Gr,name:a})})).ok)throw new Error;N("submitRun").textContent="\u5DF2\u4E0A\u4F20",N("uploadStatus").textContent="\u4E0A\u4F20\u6210\u529F\uFF01\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u699C\u201D\u67E5\u770B\u548C\u670B\u53CB\u7684\u6392\u540D\u3002"}catch{N("submitRun").disabled=!1,N("uploadStatus").textContent="\u6682\u65F6\u672A\u80FD\u4E0A\u4F20\uFF0C\u672C\u673A\u6210\u7EE9\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u91CD\u8BD5\u3002"}};for(let a of document.querySelectorAll("[data-track]"))a.onclick=()=>gu(a.dataset.track);Wr();let Ys=document.createElement("select");Ys.id="rankTrack",Ys.setAttribute("aria-label","\u6392\u884C\u699C\u8D5B\u9053");for(let[a,l]of Object.entries(Gn)){let d=document.createElement("option");d.value=a,d.textContent=l.name,Ys.appendChild(d)}N("rankStatus").before(Ys),Ys.onchange=()=>{xs=Ys.value,Hr()};let En={enabled:!0,volume:.4,sfxVolume:.75};try{Object.assign(En,JSON.parse(localStorage.getItem("star-rush-audio")||"{}"))}catch{}let re={mode:"synth",bus:null,step:0,next:0,files:[],index:0,url:null,element:null},qr=!1;N("musicBtn").onclick=()=>{Xr(),Js("musicPanel")},N("closeMusic").onclick=()=>ys("musicPanel"),N("helpBtn").onclick=N("welcomeHelp").onclick=()=>Js("helpPanel"),N("closeHelp").onclick=()=>ys("helpPanel"),N("synthMusic").onclick=()=>io("synth"),N("classicMusic").onclick=()=>io("classic"),N("musicFiles").onchange=a=>{re.files=Array.from(a.target.files||[]),so(0)},N("nextSong").onclick=()=>so(re.index+1),N("previousSong").onclick=()=>so(re.index-1),N("musicToggle").onclick=()=>{Xr(),En.enabled=!En.enabled,N("musicToggle").textContent=En.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",Ac()},N("musicVolume").value=Math.round(En.volume*100),N("sfxVolume").value=Math.round(En.sfxVolume*100),N("musicToggle").textContent=En.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",N("musicVolume").oninput=a=>{En.volume=Number(a.target.value)/100,Ac()},N("sfxVolume").oninput=a=>{En.sfxVolume=Number(a.target.value)/100,Ac()},N("classicTrack").onchange=()=>{io("classic"),N("spotifyPlayer").src="https://open.spotify.com/embed/track/"+N("classicTrack").value+"?utm_source=generator&theme=0"};let st={id:crypto.randomUUID(),room:null,members:[],ready:!1,busy:!1,lastSync:0,offset:0,startAt:0,runTag:0,peers:new Map,errors:0,rtt:0,session:0},ro=["#f6aec9","#ffd88b","#baafff","#a8efce"],ap=ro.map(a=>{let l=new ve;return ht(l,[0,2.55,0],[.14,.28,.14],a,[0,0,v]),l.finish()});async function Cc(a,l={}){let d=Date.now(),m=await fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:a,id:st.id,code:st.room?.code||N("roomCode").value.trim(),name:N("roomName").value.trim()||"\u533F\u540D\u8F66\u624B",track:en,...l}),signal:AbortSignal.timeout(4e3)}),S=await m.json();if(!m.ok)throw new Error(S.error||"\u623F\u95F4\u8BF7\u6C42\u5931\u8D25");if(st.rtt=Date.now()-d,S.serverTime){let A=S.serverTime-(d+Date.now())/2;st.offset=st.room?X(st.offset,A,.25):A}return S}async function yu(a){if(!st.busy){st.busy=!0,N("roomStatus").textContent="\u6B63\u5728\u8FDE\u63A5\u623F\u95F4\u2026";try{let l=await Cc(a);st.session++,vu(),en=l.room.track,Qt="circuit",jn(!1),Wr(),Rc(l),ne="ready",qr=!1,N("paused").hidden=!0,N("finished").hidden=!0,N("welcome").hidden=!1,Fi.classList.add("menu-open");try{localStorage.setItem("star-rush-name",N("roomName").value.trim())}catch{}}catch(l){N("roomStatus").textContent=l.message}finally{st.busy=!1}}}async function Mu(a,l={}){if(st.busy)return;st.busy=!0;let d=st.session;try{let m=await Cc(a,l);d===st.session&&st.room&&Rc(m)}catch(m){N("roomStatus").textContent=m.message}finally{st.busy=!1}}async function lp(){if(!st.room)return;let a={action:"leave",id:st.id,code:st.room.code,name:N("roomName").value};st.session++,st.room=null,st.startAt=0,st.runTag=0,st.members=[],vu(),ne="ready",jn(!1),N("finished").hidden=!0,N("paused").hidden=!0,N("countdown").hidden=!0,N("welcome").hidden=!1,Fi.classList.add("menu-open"),Pc(),fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),keepalive:!0}).catch(()=>{})}N("roomBtn").onclick=N("welcomeRoom").onclick=Yr,N("closeRoom").onclick=()=>ys("roomPanel"),N("createRoom").onclick=()=>yu("create"),N("joinRoom").onclick=()=>yu("join"),N("readyRoom").onclick=()=>Mu("ready",{ready:!st.ready}),N("startRoom").onclick=()=>Mu(st.room?.status!=="lobby"?"reset":"start"),N("leaveRoom").onclick=lp,N("copyRoom").onclick=async()=>{if(!st.room)return;let a=new URL(location.href);a.searchParams.set("room",st.room.code);try{await navigator.clipboard.writeText(a.toString()),N("roomStatus").textContent="\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5373\u53EF\u52A0\u5165"}catch{N("roomStatus").textContent="\u623F\u95F4\u7801 "+st.room.code+" \xB7 \u590D\u5236\u6D4F\u89C8\u5668\u5730\u5740\u5E76\u52A0\u4E0A ?room="+st.room.code}};try{N("roomName").value=localStorage.getItem("star-rush-name")||"\u8F66\u624B"+Math.floor(100+Math.random()*900)}catch{}let wu=new URLSearchParams(location.search).get("room");wu&&(N("roomCode").value=wu.toUpperCase().slice(0,6),Yr()),window.addEventListener("pagehide",()=>{st.room&&navigator.sendBeacon("/api/rooms",new Blob([JSON.stringify({action:"leave",id:st.id,code:st.room.code})],{type:"application/json"}))});let Xn=[],ki=!1,zi=null,Ic={drawCalls:0,triangles:0},Ms=!1,Ss=null,Vi=null,Gi=null,Zs=0,ao=[],oo=0,lo=[],Ks=[],bs=1,Jr=1,$s=null,co=0,hp=["Aoi / AI","Haru / AI","Rin / AI"],Tu=["#f0a7c8","#b6a7e6","#f1cd90"],Au=["#a5dbe6","#f0b7c3"].map(a=>{let l=new ve;return Mt(l,[-.6,.03,-.38],[.1,.03,0],.055,a),Mt(l,[.1,.03,0],[-.6,.03,.38],.055,a),l.finish()}),Lc=Array.from({length:9},()=>new I(Au[0]));for(let a of Lc)a.shadow=!1;let js=[],Dc=0,Du=performance.now(),Nc={},Uc=!1,Nu={quality:"auto",sensitivity:1,fov:62,autoGas:!1,line:!0,ghost:!0},sn={...Nu},je={name:"\u8F66\u624B"+Math.floor(100+Math.random()*900),paint:"#83cde4",car:"Mint Comet"},Ai="race";try{Object.assign(sn,JSON.parse(localStorage.getItem("star-rush-settings-reborn")||"{}")),Object.assign(je,JSON.parse(localStorage.getItem("star-rush-profile")||"{}")),je.name=localStorage.getItem("star-rush-name")||je.name}catch{}let _p=[["Mint Comet","#83cde4","\u8584\u8377\u5F57\u661F"],["Sakura Bloom","#efabc8","\u6A31\u82B1\u7EFD\u653E"],["Violet Hour","#b1a0df","\u66AE\u8272\u7D2B"],["Solar Flare","#edc784","\u65E5\u5149\u91D1"]];N("settingsBtn").onclick=()=>{Fc(),Js("settingsPanel")},N("closeSettings").onclick=()=>ys("settingsPanel");for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])N(a).onchange=d=>{sn[l]=d.target.checked,Zr()};N("qualitySetting").onchange=a=>{sn.quality=a.target.value,Zr()},N("steeringSetting").oninput=a=>{sn.sensitivity=Number(a.target.value)/100,Zr()},N("fovSetting").oninput=a=>{sn.fov=Number(a.target.value),Zr()},N("resetSettings").onclick=()=>{sn={...Nu},Zr(),Fc()};for(let[a,l,d]of _p){let m=document.createElement("button");m.type="button",m.style.setProperty("--paint",l),m.setAttribute("aria-label",d+"\u6D82\u88C5");let S=document.createElement("i"),A=document.createElement("b"),C=document.createElement("small");A.textContent=a,C.textContent=d,m.append(S,A,C),m.onclick=()=>{je.paint=l,je.car=a;for(let F of N("garageGrid").children)F.classList.toggle("selected",F===m);uo()},je.paint===l&&m.classList.add("selected"),N("garageGrid").appendChild(m)}N("garageBtn").onclick=()=>Js("garagePanel"),N("closeGarage").onclick=()=>ys("garagePanel"),N("saveProfile").onclick=uo,N("profileName").value=je.name,uo(),N("eventType").onchange=a=>{Ai=a.target.value,Ai==="practice"&&gu("academy-reborn")},N("pauseHome").onclick=Uu,N("newRouteBtn").onclick=Uu,N("demoBtn").onclick=()=>{Xs(!1),ki=!0,_n("DEMO DRIVE","\u81EA\u52A8\u8BD5\u9A7E \xB7 \u6309\u4EFB\u610F\u65B9\u5411\u952E\u63A5\u7BA1",2)},window.addEventListener("keydown",a=>{a.target.closest("input,select,textarea")||["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a.code)&&ki&&(ki=!1,zi=null,_n("YOUR TURN","\u5DF2\u63A5\u7BA1\u8D5B\u8F66",1))}),N("compatNotice").hidden=!h,xp(),Fc(),ho();for(let a of["racerName","roomName"])N(a).addEventListener("change",()=>{N("profileName").value=N(a).value,uo()});Af(document,{"coast-reborn":"/assets/course-art/coast-v2.bd2e4837727f.webp","sakura-reborn":"/assets/course-art/sakura-v1.3b94eedaa6d8.webp","academy-reborn":"/assets/course-art/academy-v1.9c6071e18e14.webp"})}catch(c){console.error(c),n("\u6E38\u620F\u521D\u59CB\u5316\u5F02\u5E38\uFF1A"+c.message)}})();})();
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
