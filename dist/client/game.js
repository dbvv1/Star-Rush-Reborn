(()=>{function Nu(i,t,e,{fetchImpl:n=globalThis.fetch,timeoutMs:s=5e3}={}){let r=new Map,o={light:"idle",medium:"idle"},c=new Set,h=null,u=!1,m="none",x=0,f=new Set;function v(){return h||(h=Promise.all(["light","medium"].map(async p=>{if(u)return;o[p]="loading";let N=new AbortController;f.add(N);let z;try{let E=(async()=>{if(typeof e[p]!="string"||!e[p].startsWith("/assets/impact-audio/"))throw Error("Missing rail asset");let L=await n(e[p],{signal:N.signal});if(!L.ok)throw Error("Rail asset HTTP error");let F=await L.arrayBuffer();if(F.byteLength>5e4)throw Error("Rail asset oversized");let S=await i.decodeAudioData(F);if(!(S.duration>0&&S.duration<=1)||S.numberOfChannels!==1)throw Error("Invalid rail clip");return S})(),I=await Promise.race([E,new Promise((L,F)=>{z=setTimeout(()=>{N.abort(),F(Error("Rail asset timeout"))},s)})]);u||(r.set(p,I),o[p]="ready")}catch{u||(o[p]="fallback")}finally{clearTimeout(z),f.delete(N)}})),h)}function b(){for(let p of[...c]){try{p.source.stop()}catch{}p.cleanup()}}function P(p){if(u||i.state!=="running"||!Number.isFinite(p)||p<.7)return!1;let N=p>5?"medium":"light",z=r.get(N);if(!z)return m=N+" fallback",!1;if(c.size>=4){let F=c.values().next().value;try{F.source.stop()}catch{}F.cleanup()}let E,I,L;try{return E=i.createBufferSource(),I=i.createGain(),E.buffer=z,I.gain.value=.15,E.connect(I),I.connect(t),L={source:E,cleanup(){c.delete(L),E.onended=null,E.disconnect(),I.disconnect()}},E.onended=()=>L.cleanup(),c.add(L),E.start(),E.stop(i.currentTime+z.duration+.02),m=N,x++,!0}catch{return L?L.cleanup():(E?.disconnect(),I?.disconnect()),m=N+" fallback",!1}}function M(){u=!0;for(let p of f)p.abort();b(),r.clear()}return{load:v,play:P,stop:b,dispose:M,status:()=>({states:{...o},active:c.size,last:m,played:x})}}var sd=0,dh=1,rd=2;var Ra=1,dl=2,Mr=3,as=0,mn=1,yi=2,Mi=0,Sr=1,fh=2,ph=3,mh=4,ad=5;var Is=100,od=101,ld=102,cd=103,hd=104,ud=200,dd=201,fd=202,pd=203,gh=204,_h=205,md=206,gd=207,_d=208,xd=209,vd=210,yd=211,Md=212,Sd=213,bd=214,No=0,Uo=1,Fo=2,fr=3,Oo=4,Bo=5,zo=6,ko=7,xh=0,Td=1,wd=2,ri=0,vh=1,yh=2,Mh=3,Pa=4,Sh=5,bh=6,Th=7;var wh=300,os=301,Ls=302,fl=303,pl=304,Ia=306,Vo=1e3,mi=1001,Go=1002,je=1003,Ad=1004;var La=1005;var pn=1006,ml=1007;var ls=1008;var Nn=1009,Ah=1010,Eh=1011,br=1012,gl=1013,ai=1014,Jn=1015,oi=1016,_l=1017,xl=1018,Tr=1020,Ch=35902,Rh=35899,Ph=1021,Ih=1022,Zn=1023,gi=1026,cs=1027,wr=1028,vl=1029,hs=1030,yl=1031;var Ml=1033,Da=33776,Na=33777,Ua=33778,Fa=33779,Sl=35840,bl=35841,Tl=35842,wl=35843,Al=36196,El=37492,Cl=37496,Rl=37488,Pl=37489,Oa=37490,Il=37491,Ll=37808,Dl=37809,Nl=37810,Ul=37811,Fl=37812,Ol=37813,Bl=37814,zl=37815,kl=37816,Vl=37817,Gl=37818,Hl=37819,Wl=37820,Xl=37821,ql=36492,Yl=36494,Jl=36495,Zl=36283,Kl=36284,Ba=36285,$l=36286;var aa=2300,Ho=2301,Lo=2302,rh=2303,ah=2400,oh=2401,lh=2402;var Ed=3200;var jl=0,Cd=1,Fi="",Cn="srgb",oa="srgb-linear",la="linear",Oe="srgb";var Do=7680;var Rd=519,Pd=512,Id=513,Ld=514,Ql=515,Dd=516,Nd=517,tc=518,Ud=519,Fd=35044,Lh=35048;var Dh="300 es",si=2e3,pr=2001;function up(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=ca("canvas");return i.style.display="block",i}var Uu={},mr=null;function Nh(...i){let t="THREE."+i.shift();mr?mr("log",t,...i):console.log(t,...i)}function Bd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ie(...i){i=Bd(i);let t="THREE."+i.shift();if(mr)mr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=Bd(i);let t="THREE."+i.shift();if(mr)mr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Rs(...i){let t=i.join(" ");t in Uu||(Uu[t]=!0,ie(...i))}function zd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kd={[No]:Uo,[Fo]:zo,[Oo]:ko,[fr]:Bo,[Uo]:No,[zo]:Fo,[ko]:Oo,[Bo]:fr},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fc=Math.PI/180,Wo=180/Math.PI;function za(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function fp(i,t){return(i%t+t)%t}function Oc(i,t,e){return(1-e)*i+e*t}function Qr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ee=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,c){let h=n[s+0],u=n[s+1],m=n[s+2],x=n[s+3],f=r[o+0],v=r[o+1],b=r[o+2],P=r[o+3];if(x!==P||h!==f||u!==v||m!==b){let M=h*f+u*v+m*b+x*P;M<0&&(f=-f,v=-v,b=-b,P=-P,M=-M);let p=1-c;if(M<.9995){let N=Math.acos(M),z=Math.sin(N);p=Math.sin(p*N)/z,c=Math.sin(c*N)/z,h=h*p+f*c,u=u*p+v*c,m=m*p+b*c,x=x*p+P*c}else{h=h*p+f*c,u=u*p+v*c,m=m*p+b*c,x=x*p+P*c;let N=1/Math.sqrt(h*h+u*u+m*m+x*x);h*=N,u*=N,m*=N,x*=N}}t[e]=h,t[e+1]=u,t[e+2]=m,t[e+3]=x}static multiplyQuaternionsFlat(t,e,n,s,r,o){let c=n[s],h=n[s+1],u=n[s+2],m=n[s+3],x=r[o],f=r[o+1],v=r[o+2],b=r[o+3];return t[e]=c*b+m*x+h*v-u*f,t[e+1]=h*b+m*f+u*x-c*v,t[e+2]=u*b+m*v+c*f-h*x,t[e+3]=m*b-c*x-h*f-u*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,c=Math.cos,h=Math.sin,u=c(n/2),m=c(s/2),x=c(r/2),f=h(n/2),v=h(s/2),b=h(r/2);switch(o){case"XYZ":this._x=f*m*x+u*v*b,this._y=u*v*x-f*m*b,this._z=u*m*b+f*v*x,this._w=u*m*x-f*v*b;break;case"YXZ":this._x=f*m*x+u*v*b,this._y=u*v*x-f*m*b,this._z=u*m*b-f*v*x,this._w=u*m*x+f*v*b;break;case"ZXY":this._x=f*m*x-u*v*b,this._y=u*v*x+f*m*b,this._z=u*m*b+f*v*x,this._w=u*m*x-f*v*b;break;case"ZYX":this._x=f*m*x-u*v*b,this._y=u*v*x+f*m*b,this._z=u*m*b-f*v*x,this._w=u*m*x+f*v*b;break;case"YZX":this._x=f*m*x+u*v*b,this._y=u*v*x+f*m*b,this._z=u*m*b-f*v*x,this._w=u*m*x-f*v*b;break;case"XZY":this._x=f*m*x-u*v*b,this._y=u*v*x-f*m*b,this._z=u*m*b+f*v*x,this._w=u*m*x+f*v*b;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],c=e[5],h=e[9],u=e[2],m=e[6],x=e[10],f=n+c+x;if(f>0){let v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(m-h)*v,this._y=(r-u)*v,this._z=(o-s)*v}else if(n>c&&n>x){let v=2*Math.sqrt(1+n-c-x);this._w=(m-h)/v,this._x=.25*v,this._y=(s+o)/v,this._z=(r+u)/v}else if(c>x){let v=2*Math.sqrt(1+c-n-x);this._w=(r-u)/v,this._x=(s+o)/v,this._y=.25*v,this._z=(h+m)/v}else{let v=2*Math.sqrt(1+x-n-c);this._w=(o-s)/v,this._x=(r+u)/v,this._y=(h+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=e._x,h=e._y,u=e._z,m=e._w;return this._x=n*m+o*c+s*u-r*h,this._y=s*m+o*h+r*c-n*u,this._z=r*m+o*u+n*h-s*c,this._w=o*m-n*c-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=this.dot(t);c<0&&(n=-n,s=-s,r=-r,o=-o,c=-c);let h=1-e;if(c<.9995){let u=Math.acos(c),m=Math.sin(u);h=Math.sin(h*u)/m,e=Math.sin(e*u)/m,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},et=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,c=t.z,h=t.w,u=2*(o*s-c*n),m=2*(c*e-r*s),x=2*(r*n-o*e);return this.x=e+h*u+o*x-c*m,this.y=n+h*m+c*u-r*x,this.z=s+h*x+r*m-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,c=e.y,h=e.z;return this.x=s*h-r*c,this.y=r*o-n*h,this.z=n*c-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new et,Fu=new xi,he=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,c,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,h,u)}set(t,e,n,s,r,o,c,h,u){let m=this.elements;return m[0]=t,m[1]=s,m[2]=c,m[3]=e,m[4]=r,m[5]=h,m[6]=n,m[7]=o,m[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[3],h=n[6],u=n[1],m=n[4],x=n[7],f=n[2],v=n[5],b=n[8],P=s[0],M=s[3],p=s[6],N=s[1],z=s[4],E=s[7],I=s[2],L=s[5],F=s[8];return r[0]=o*P+c*N+h*I,r[3]=o*M+c*z+h*L,r[6]=o*p+c*E+h*F,r[1]=u*P+m*N+x*I,r[4]=u*M+m*z+x*L,r[7]=u*p+m*E+x*F,r[2]=f*P+v*N+b*I,r[5]=f*M+v*z+b*L,r[8]=f*p+v*E+b*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],m=t[8];return e*o*m-e*c*u-n*r*m+n*c*h+s*r*u-s*o*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],m=t[8],x=m*o-c*u,f=c*h-m*r,v=u*r-o*h,b=e*x+n*f+s*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/b;return t[0]=x*P,t[1]=(s*u-m*n)*P,t[2]=(c*n-s*o)*P,t[3]=f*P,t[4]=(m*e-s*h)*P,t[5]=(s*r-c*e)*P,t[6]=v*P,t[7]=(n*h-u*e)*P,t[8]=(o*e-n*r)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,c){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*o+u*c)+o+t,-s*u,s*h,-s*(-u*o+h*c)+c+e,0,0,1),this}scale(t,e){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(t,e)),this}rotate(t){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-t)),this}translate(t,e){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zc=new he,Ou=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pp(){let i={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Oe&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Oe&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?la:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oa]:{primaries:t,whitePoint:n,transfer:la,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:Oe,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),i}var we=pp();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var js,Xo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{js===void 0&&(js=ca("canvas")),js.width=t.width,js.height=t.height;let s=js.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=js}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ca("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mp=0,gr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=za(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(kc(s[o].image)):r.push(kc(s[o]))}else r=kc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function kc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}var gp=0,Vc=new et,Ln=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=pn,o=ls,c=Zn,h=Nn,u=i.DEFAULT_ANISOTROPY,m=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=za(),this.name="",this.source=new gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vo:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vo:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=wh;Ln.DEFAULT_ANISOTROPY=1;var qe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,u=h[0],m=h[4],x=h[8],f=h[1],v=h[5],b=h[9],P=h[2],M=h[6],p=h[10];if(Math.abs(m-f)<.01&&Math.abs(x-P)<.01&&Math.abs(b-M)<.01){if(Math.abs(m+f)<.1&&Math.abs(x+P)<.1&&Math.abs(b+M)<.1&&Math.abs(u+v+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let z=(u+1)/2,E=(v+1)/2,I=(p+1)/2,L=(m+f)/4,F=(x+P)/4,S=(b+M)/4;return z>E&&z>I?z<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(z),s=L/n,r=F/n):E>I?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=L/s,r=S/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=F/r,s=S/r),this.set(n,s,r,e),this}let N=Math.sqrt((M-b)*(M-b)+(x-P)*(x-P)+(f-m)*(f-m));return Math.abs(N)<.001&&(N=1),this.x=(M-b)/N,this.y=(x-P)/N,this.z=(f-m)/N,this.w=Math.acos((u+v+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this.w=Ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this.w=Ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qo=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ln(s),o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends qo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ha=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var He=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,c,h,u,m,x,f,v,b,P,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,h,u,m,x,f,v,b,P,M)}set(t,e,n,s,r,o,c,h,u,m,x,f,v,b,P,M){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=c,p[13]=h,p[2]=u,p[6]=m,p[10]=x,p[14]=f,p[3]=v,p[7]=b,p[11]=P,p[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Qs.setFromMatrixColumn(t,0).length(),r=1/Qs.setFromMatrixColumn(t,1).length(),o=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s),m=Math.cos(r),x=Math.sin(r);if(t.order==="XYZ"){let f=o*m,v=o*x,b=c*m,P=c*x;e[0]=h*m,e[4]=-h*x,e[8]=u,e[1]=v+b*u,e[5]=f-P*u,e[9]=-c*h,e[2]=P-f*u,e[6]=b+v*u,e[10]=o*h}else if(t.order==="YXZ"){let f=h*m,v=h*x,b=u*m,P=u*x;e[0]=f+P*c,e[4]=b*c-v,e[8]=o*u,e[1]=o*x,e[5]=o*m,e[9]=-c,e[2]=v*c-b,e[6]=P+f*c,e[10]=o*h}else if(t.order==="ZXY"){let f=h*m,v=h*x,b=u*m,P=u*x;e[0]=f-P*c,e[4]=-o*x,e[8]=b+v*c,e[1]=v+b*c,e[5]=o*m,e[9]=P-f*c,e[2]=-o*u,e[6]=c,e[10]=o*h}else if(t.order==="ZYX"){let f=o*m,v=o*x,b=c*m,P=c*x;e[0]=h*m,e[4]=b*u-v,e[8]=f*u+P,e[1]=h*x,e[5]=P*u+f,e[9]=v*u-b,e[2]=-u,e[6]=c*h,e[10]=o*h}else if(t.order==="YZX"){let f=o*h,v=o*u,b=c*h,P=c*u;e[0]=h*m,e[4]=P-f*x,e[8]=b*x+v,e[1]=x,e[5]=o*m,e[9]=-c*m,e[2]=-u*m,e[6]=v*x+b,e[10]=f-P*x}else if(t.order==="XZY"){let f=o*h,v=o*u,b=c*h,P=c*u;e[0]=h*m,e[4]=-x,e[8]=u*m,e[1]=f*x+P,e[5]=o*m,e[9]=v*x-b,e[2]=b*x-v,e[6]=c*m,e[10]=P*x+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,xp)}lookAt(t,e,n){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Yi.crossVectors(n,On),Yi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Yi.crossVectors(n,On)),Yi.normalize(),uo.crossVectors(On,Yi),s[0]=Yi.x,s[4]=uo.x,s[8]=On.x,s[1]=Yi.y,s[5]=uo.y,s[9]=On.y,s[2]=Yi.z,s[6]=uo.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[4],h=n[8],u=n[12],m=n[1],x=n[5],f=n[9],v=n[13],b=n[2],P=n[6],M=n[10],p=n[14],N=n[3],z=n[7],E=n[11],I=n[15],L=s[0],F=s[4],S=s[8],U=s[12],V=s[1],X=s[5],j=s[9],Y=s[13],W=s[2],Q=s[6],lt=s[10],rt=s[14],dt=s[3],st=s[7],at=s[11],ft=s[15];return r[0]=o*L+c*V+h*W+u*dt,r[4]=o*F+c*X+h*Q+u*st,r[8]=o*S+c*j+h*lt+u*at,r[12]=o*U+c*Y+h*rt+u*ft,r[1]=m*L+x*V+f*W+v*dt,r[5]=m*F+x*X+f*Q+v*st,r[9]=m*S+x*j+f*lt+v*at,r[13]=m*U+x*Y+f*rt+v*ft,r[2]=b*L+P*V+M*W+p*dt,r[6]=b*F+P*X+M*Q+p*st,r[10]=b*S+P*j+M*lt+p*at,r[14]=b*U+P*Y+M*rt+p*ft,r[3]=N*L+z*V+E*W+I*dt,r[7]=N*F+z*X+E*Q+I*st,r[11]=N*S+z*j+E*lt+I*at,r[15]=N*U+z*Y+E*rt+I*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],c=t[5],h=t[9],u=t[13],m=t[2],x=t[6],f=t[10],v=t[14],b=t[3],P=t[7],M=t[11],p=t[15],N=h*v-u*f,z=c*v-u*x,E=c*f-h*x,I=o*v-u*m,L=o*f-h*m,F=o*x-c*m;return e*(P*N-M*z+p*E)-n*(b*N-M*I+p*L)+s*(b*z-P*I+p*F)-r*(b*E-P*L+M*F)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],c=t[9],h=t[2],u=t[6],m=t[10];return e*(o*m-c*u)-n*(r*m-c*h)+s*(r*u-o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],u=t[7],m=t[8],x=t[9],f=t[10],v=t[11],b=t[12],P=t[13],M=t[14],p=t[15],N=e*c-n*o,z=e*h-s*o,E=e*u-r*o,I=n*h-s*c,L=n*u-r*c,F=s*u-r*h,S=m*P-x*b,U=m*M-f*b,V=m*p-v*b,X=x*M-f*P,j=x*p-v*P,Y=f*p-v*M,W=N*Y-z*j+E*X+I*V-L*U+F*S;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/W;return t[0]=(c*Y-h*j+u*X)*Q,t[1]=(s*j-n*Y-r*X)*Q,t[2]=(P*F-M*L+p*I)*Q,t[3]=(f*L-x*F-v*I)*Q,t[4]=(h*V-o*Y-u*U)*Q,t[5]=(e*Y-s*V+r*U)*Q,t[6]=(M*E-b*F-p*z)*Q,t[7]=(m*F-f*E+v*z)*Q,t[8]=(o*j-c*V+u*S)*Q,t[9]=(n*V-e*j-r*S)*Q,t[10]=(b*L-P*E+p*N)*Q,t[11]=(x*E-m*L-v*N)*Q,t[12]=(c*U-o*X-h*S)*Q,t[13]=(e*X-n*U+s*S)*Q,t[14]=(P*z-b*I-M*N)*Q,t[15]=(m*I-x*z+f*N)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,c=t.y,h=t.z,u=r*o,m=r*c;return this.set(u*o+n,u*c-s*h,u*h+s*c,0,u*c+s*h,m*c+n,m*h-s*o,0,u*h-s*c,m*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,c=e._z,h=e._w,u=r+r,m=o+o,x=c+c,f=r*u,v=r*m,b=r*x,P=o*m,M=o*x,p=c*x,N=h*u,z=h*m,E=h*x,I=n.x,L=n.y,F=n.z;return s[0]=(1-(P+p))*I,s[1]=(v+E)*I,s[2]=(b-z)*I,s[3]=0,s[4]=(v-E)*L,s[5]=(1-(f+p))*L,s[6]=(M+N)*L,s[7]=0,s[8]=(b+z)*F,s[9]=(M-N)*F,s[10]=(1-(f+P))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Qs.set(s[0],s[1],s[2]).length(),c=Qs.set(s[4],s[5],s[6]).length(),h=Qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ti.copy(this);let u=1/o,m=1/c,x=1/h;return ti.elements[0]*=u,ti.elements[1]*=u,ti.elements[2]*=u,ti.elements[4]*=m,ti.elements[5]*=m,ti.elements[6]*=m,ti.elements[8]*=x,ti.elements[9]*=x,ti.elements[10]*=x,e.setFromRotationMatrix(ti),n.x=o,n.y=c,n.z=h,this}makePerspective(t,e,n,s,r,o,c=si,h=!1){let u=this.elements,m=2*r/(e-t),x=2*r/(n-s),f=(e+t)/(e-t),v=(n+s)/(n-s),b,P;if(h)b=r/(o-r),P=o*r/(o-r);else if(c===si)b=-(o+r)/(o-r),P=-2*o*r/(o-r);else if(c===pr)b=-o/(o-r),P=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=m,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=x,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=b,u[14]=P,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,o,c=si,h=!1){let u=this.elements,m=2/(e-t),x=2/(n-s),f=-(e+t)/(e-t),v=-(n+s)/(n-s),b,P;if(h)b=1/(o-r),P=o/(o-r);else if(c===si)b=-2/(o-r),P=-(o+r)/(o-r);else if(c===pr)b=-1/(o-r),P=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=m,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=x,u[9]=0,u[13]=v,u[2]=0,u[6]=0,u[10]=b,u[14]=P,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qs=new et,ti=new He,_p=new et(0,0,0),xp=new et(1,1,1),Yi=new et,uo=new et,On=new et,zu=new He,ku=new xi,Qi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],c=s[8],h=s[1],u=s[5],m=s[9],x=s[2],f=s[6],v=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-x,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-x,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Ae(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,u),this._y=Math.atan2(-x,r)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-m,v),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ku.setFromEuler(this),this.setFromQuaternion(ku,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";var ua=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vp=0,Vu=new et,tr=new xi,Pi=new He,fo=new et,ta=new et,yp=new et,Mp=new xi,Gu=new et(1,0,0),Hu=new et(0,1,0),Wu=new et(0,0,1),Xu={type:"added"},Sp={type:"removed"},er={type:"childadded",child:null},Gc={type:"childremoved",child:null},yn=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new et,e=new Qi,n=new xi,s=new et(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new he}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(Gu,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Wu,t)}translateOnAxis(t,e){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gu,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fo.copy(t):fo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ta,fo,this.up):Pi.lookAt(fo,ta,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Pi),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xu),er.child=t,this.dispatchEvent(er),er.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),Gc.child=t,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xu),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let h=c.shapes;if(Array.isArray(h))for(let u=0,m=h.length;u<m;u++){let x=h[u];r(t.shapes,x)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let h=0,u=this.material.length;h<u;h++)c.push(r(t.materials,this.material[h]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let h=this.animations[c];s.animations.push(r(t.animations,h))}}if(e){let c=o(t.geometries),h=o(t.materials),u=o(t.textures),m=o(t.images),x=o(t.shapes),f=o(t.skeletons),v=o(t.animations),b=o(t.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),m.length>0&&(n.images=m),x.length>0&&(n.shapes=x),f.length>0&&(n.skeletons=f),v.length>0&&(n.animations=v),b.length>0&&(n.nodes=b)}return n.object=s,n;function o(c){let h=[];for(let u in c){let m=c[u];delete m.metadata,h.push(m)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new et(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cs=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},bp={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,c=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(let P of t.hand.values()){let M=e.getJointPose(P,n),p=this._getHandJoint(u,P);M!==null&&(p.matrix.fromArray(M.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=M.radius),p.visible=M!==null}let m=u.joints["index-finger-tip"],x=u.joints["thumb-tip"],f=m.position.distanceTo(x.position),v=.02,b=.005;u.inputState.pinching&&f>v+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=v-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Cs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},po={h:0,s:0,l:0};function Hc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=we.workingColorSpace){if(t=fp(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hc(o,r,t+1/3),this.g=Hc(o,r,t),this.b=Hc(o,r,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,e=Cn){function n(r){r!==void 0&&parseFloat(r)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){let n=Vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return we.workingToColorSpace(xn.copy(this),t),Math.round(Ae(xn.r*255,0,255))*65536+Math.round(Ae(xn.g*255,0,255))*256+Math.round(Ae(xn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(xn.copy(this),e);let n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),c=Math.min(n,s,r),h,u,m=(c+o)/2;if(c===o)h=0,u=0;else{let x=o-c;switch(u=m<=.5?x/(o+c):x/(2-o-c),o){case n:h=(s-r)/x+(s<r?6:0);break;case s:h=(r-n)/x+2;break;case r:h=(n-s)/x+4;break}h/=6}return t.h=h,t.s=u,t.l=m,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=Cn){we.workingToColorSpace(xn.copy(this),t);let e=xn.r,n=xn.g,s=xn.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(po);let n=Oc(Ji.h,po.h,e),s=Oc(Ji.s,po.s,e),r=Oc(Ji.l,po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new pe;pe.NAMES=Vd;var da=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fa=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new et,Ii=new et,Wc=new et,Li=new et,nr=new et,ir=new et,qu=new et,Xc=new et,qc=new et,Yc=new et,Jc=new qe,Zc=new qe,Kc=new qe,ji=class i{constructor(t=new et,e=new et,n=new et){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ei.subVectors(t,e),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ei.subVectors(s,e),Ii.subVectors(n,e),Wc.subVectors(t,e);let o=ei.dot(ei),c=ei.dot(Ii),h=ei.dot(Wc),u=Ii.dot(Ii),m=Ii.dot(Wc),x=o*u-c*c;if(x===0)return r.set(0,0,0),null;let f=1/x,v=(u*h-c*m)*f,b=(o*m-c*h)*f;return r.set(1-v-b,b,v)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,s,r,o,c,h){return this.getBarycoord(t,e,n,s,Li)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Li.x),h.addScaledVector(o,Li.y),h.addScaledVector(c,Li.z),h)}static getInterpolatedAttribute(t,e,n,s,r,o){return Jc.setScalar(0),Zc.setScalar(0),Kc.setScalar(0),Jc.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,n),Kc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Jc,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector(Kc,r.z),o}static isFrontFacing(t,e,n,s){return ei.subVectors(n,e),Ii.subVectors(t,e),ei.cross(Ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ei.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,c;nr.subVectors(s,n),ir.subVectors(r,n),Xc.subVectors(t,n);let h=nr.dot(Xc),u=ir.dot(Xc);if(h<=0&&u<=0)return e.copy(n);qc.subVectors(t,s);let m=nr.dot(qc),x=ir.dot(qc);if(m>=0&&x<=m)return e.copy(s);let f=h*x-m*u;if(f<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(n).addScaledVector(nr,o);Yc.subVectors(t,r);let v=nr.dot(Yc),b=ir.dot(Yc);if(b>=0&&v<=b)return e.copy(r);let P=v*u-h*b;if(P<=0&&u>=0&&b<=0)return c=u/(u-b),e.copy(n).addScaledVector(ir,c);let M=m*b-v*x;if(M<=0&&x-m>=0&&v-b>=0)return qu.subVectors(r,s),c=(x-m)/(x-m+(v-b)),e.copy(s).addScaledVector(qu,c);let p=1/(M+P+f);return o=P*p,c=f*p,e.copy(n).addScaledVector(nr,o).addScaledVector(ir,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vi=class{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ea),go.subVectors(this.max,ea),sr.subVectors(t.a,ea),rr.subVectors(t.b,ea),ar.subVectors(t.c,ea),Zi.subVectors(rr,sr),Ki.subVectors(ar,rr),Ts.subVectors(sr,ar);let e=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-Ts.z,Ts.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,Ts.z,0,-Ts.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-Ts.y,Ts.x,0];return!$c(e,sr,rr,ar,go)||(e=[1,0,0,0,1,0,0,0,1],!$c(e,sr,rr,ar,go))?!1:(_o.crossVectors(Zi,Ki),e=[_o.x,_o.y,_o.z],$c(e,sr,rr,ar,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new et,new et,new et,new et,new et,new et,new et,new et],ni=new et,mo=new vi,sr=new et,rr=new et,ar=new et,Zi=new et,Ki=new et,Ts=new et,ea=new et,go=new et,_o=new et,ws=new et;function $c(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);let c=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),h=t.dot(ws),u=e.dot(ws),m=n.dot(ws);if(Math.max(-Math.max(h,u,m),Math.min(h,u,m))>c)return!1}return!0}var sn=new et,xo=new Ee,Tp=0,zn=class extends _i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fd,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qr(e,this.array)),e}setX(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qr(e,this.array)),e}setY(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qr(e,this.array)),e}setW(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array),s=In(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array),s=In(s,this.array),r=In(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var pa=class extends zn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ma=class extends zn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var an=class extends zn{constructor(t,e,n){super(new Float32Array(t),e,n)}},wp=new vi,na=new et,jc=new et,ts=class{constructor(t=new et,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;na.subVectors(t,this.center);let e=na.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(na,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(na.copy(t.center).add(jc)),this.expandByPoint(na.copy(t.center).sub(jc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ap=0,Yn=new He,Qc=new yn,or=new et,Bn=new vi,ia=new vi,dn=new et,kn=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(up(t)?ma:pa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let c=e[r];ia.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(Bn.min,ia.min),Bn.expandByPoint(dn),dn.addVectors(Bn.max,ia.max),Bn.expandByPoint(dn)):(Bn.expandByPoint(ia.min),Bn.expandByPoint(ia.max))}Bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){let c=e[r],h=this.morphTargetsRelative;for(let u=0,m=c.count;u<m;u++)dn.fromBufferAttribute(c,u),h&&(or.fromBufferAttribute(t,u),dn.add(or)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new zn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let c=[],h=[];for(let S=0;S<n.count;S++)c[S]=new et,h[S]=new et;let u=new et,m=new et,x=new et,f=new Ee,v=new Ee,b=new Ee,P=new et,M=new et;function p(S,U,V){u.fromBufferAttribute(n,S),m.fromBufferAttribute(n,U),x.fromBufferAttribute(n,V),f.fromBufferAttribute(r,S),v.fromBufferAttribute(r,U),b.fromBufferAttribute(r,V),m.sub(u),x.sub(u),v.sub(f),b.sub(f);let X=1/(v.x*b.y-b.x*v.y);isFinite(X)&&(P.copy(m).multiplyScalar(b.y).addScaledVector(x,-v.y).multiplyScalar(X),M.copy(x).multiplyScalar(v.x).addScaledVector(m,-b.x).multiplyScalar(X),c[S].add(P),c[U].add(P),c[V].add(P),h[S].add(M),h[U].add(M),h[V].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let S=0,U=N.length;S<U;++S){let V=N[S],X=V.start,j=V.count;for(let Y=X,W=X+j;Y<W;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let z=new et,E=new et,I=new et,L=new et;function F(S){I.fromBufferAttribute(s,S),L.copy(I);let U=c[S];z.copy(U),z.sub(I.multiplyScalar(I.dot(U))).normalize(),E.crossVectors(L,U);let X=E.dot(h[S])<0?-1:1;o.setXYZW(S,z.x,z.y,z.z,X)}for(let S=0,U=N.length;S<U;++S){let V=N[S],X=V.start,j=V.count;for(let Y=X,W=X+j;Y<W;Y+=3)F(t.getX(Y+0)),F(t.getX(Y+1)),F(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,v=n.count;f<v;f++)n.setXYZ(f,0,0,0);let s=new et,r=new et,o=new et,c=new et,h=new et,u=new et,m=new et,x=new et;if(t)for(let f=0,v=t.count;f<v;f+=3){let b=t.getX(f+0),P=t.getX(f+1),M=t.getX(f+2);s.fromBufferAttribute(e,b),r.fromBufferAttribute(e,P),o.fromBufferAttribute(e,M),m.subVectors(o,r),x.subVectors(s,r),m.cross(x),c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,M),c.add(m),h.add(m),u.add(m),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(P,h.x,h.y,h.z),n.setXYZ(M,u.x,u.y,u.z)}else for(let f=0,v=e.count;f<v;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),m.subVectors(o,r),x.subVectors(s,r),m.cross(x),n.setXYZ(f+0,m.x,m.y,m.z),n.setXYZ(f+1,m.x,m.y,m.z),n.setXYZ(f+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(c,h){let u=c.array,m=c.itemSize,x=c.normalized,f=new u.constructor(h.length*m),v=0,b=0;for(let P=0,M=h.length;P<M;P++){c.isInterleavedBufferAttribute?v=h[P]*c.data.stride+c.offset:v=h[P]*m;for(let p=0;p<m;p++)f[b++]=u[v++]}return new zn(f,m,x)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let h=s[c],u=t(h,n);e.setAttribute(c,u)}let r=this.morphAttributes;for(let c in r){let h=[],u=r[c];for(let m=0,x=u.length;m<x;m++){let f=u[m],v=t(f,n);h.push(v)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],m=[];for(let x=0,f=u.length;x<f;x++){let v=u[x];m.push(v.toJSON(t.data))}m.length>0&&(s[h]=m,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let m=s[u];this.setAttribute(u,m.clone(e))}let r=t.morphAttributes;for(let u in r){let m=[],x=r[u];for(let f=0,v=x.length;f<v;f++)m.push(x[f].clone(e));this.morphAttributes[u]=m}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let u=0,m=o.length;u<m;u++){let x=o[u];this.addGroup(x.start,x.count,x.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var th=new et,Ep=new et,Cp=new he,ii=class{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=th.subVectors(n,e).cross(Ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(th),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cp.getNormalMatrix(t),s=this.coplanarPoint(th).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Rp=0,es=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=za(),this.name="",this.type="Material",this.blending=Sr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let h=r[c];delete h.metadata,o.push(h)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ni=new et,eh=new et,vo=new et,yo=new et,Jo=class{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eh.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),yo.copy(this.origin).sub(eh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(vo),c=yo.dot(this.direction),h=-yo.dot(vo),u=yo.lengthSq(),m=Math.abs(1-o*o),x,f,v,b;if(m>0)if(x=o*h-c,f=o*c-h,b=r*m,x>=0)if(f>=-b)if(f<=b){let P=1/m;x*=P,f*=P,v=x*(x+o*f+2*c)+f*(o*x+f+2*h)+u}else f=r,x=Math.max(0,-(o*f+c)),v=-x*x+f*(f+2*h)+u;else f=-r,x=Math.max(0,-(o*f+c)),v=-x*x+f*(f+2*h)+u;else f<=-b?(x=Math.max(0,-(-o*r+c)),f=x>0?-r:Math.min(Math.max(-r,-h),r),v=-x*x+f*(f+2*h)+u):f<=b?(x=0,f=Math.min(Math.max(-r,-h),r),v=f*(f+2*h)+u):(x=Math.max(0,-(o*r+c)),f=x>0?r:Math.min(Math.max(-r,-h),r),v=-x*x+f*(f+2*h)+u);else f=o>0?-r:r,x=Math.max(0,-(o*f+c)),v=-x*x+f*(f+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(eh).addScaledVector(vo,f),v}intersectSphere(t,e){if(t.radius<0)return null;Ni.subVectors(t.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,h=n+o;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,c,h,u=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),m>=0?(r=(t.min.y-f.y)*m,o=(t.max.y-f.y)*m):(r=(t.max.y-f.y)*m,o=(t.min.y-f.y)*m),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),x>=0?(c=(t.min.z-f.z)*x,h=(t.max.z-f.z)*x):(c=(t.max.z-f.z)*x,h=(t.min.z-f.z)*x),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,c=this.direction,h=c.x,u=c.y,m=c.z,x=t.x-o.x,f=t.y-o.y,v=t.z-o.z,b=e.x-o.x,P=e.y-o.y,M=e.z-o.z,p=n.x-o.x,N=n.y-o.y,z=n.z-o.z,E=Math.abs(h),I=Math.abs(u),L=Math.abs(m),F,S,U,V,X,j,Y,W,Q,lt,rt,dt;if(E>=I&&E>=L?(U=h,j=x,Q=b,dt=p,h>=0?(F=u,S=m,V=f,X=v,Y=P,W=M,lt=N,rt=z):(F=m,S=u,V=v,X=f,Y=M,W=P,lt=z,rt=N)):I>=L?(U=u,j=f,Q=P,dt=N,u>=0?(F=m,S=h,V=v,X=x,Y=M,W=b,lt=z,rt=p):(F=h,S=m,V=x,X=v,Y=b,W=M,lt=p,rt=z)):(U=m,j=v,Q=M,dt=z,m>=0?(F=h,S=u,V=x,X=f,Y=b,W=P,lt=p,rt=N):(F=u,S=h,V=f,X=x,Y=P,W=b,lt=N,rt=p)),U===0)return null;let st=F/U,at=S/U,ft=1/U,Zt=V-st*j,Xt=X-at*j,Be=Y-st*Q,xe=W-at*Q,ve=lt-st*dt,ht=rt-at*dt,xt=ve*xe-ht*Be,qt=Zt*ht-Xt*ve,le=Be*Xt-xe*Zt;if(s){if(xt<0||qt<0||le<0)return null}else if((xt<0||qt<0||le<0)&&(xt>0||qt>0||le>0))return null;let Vt=xt+qt+le;if(Vt===0)return null;let me=ft*(xt*j+qt*Q+le*dt);return(Vt>0?me<0:me>0)?null:this.at(me/Vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ga=class extends es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yu=new He,As=new Jo,Mo=new ts,Ju=new et,So=new et,bo=new et,To=new et,nh=new et,wo=new et,Zu=new et,Ao=new et,Mn=class extends yn{constructor(t=new kn,e=new ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){wo.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let m=c[h],x=r[h];m!==0&&(nh.fromBufferAttribute(x,t),o?wo.addScaledVector(nh,m):wo.addScaledVector(nh.sub(e),m))}e.add(wo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),As.copy(t.ray).recast(t.near),!(Mo.containsPoint(As.origin)===!1&&(As.intersectSphere(Mo,Ju)===null||As.origin.distanceToSquared(Ju)>(t.far-t.near)**2))&&(Yu.copy(r).invert(),As.copy(t.ray).applyMatrix4(Yu),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,c=r.index,h=r.attributes.position,u=r.attributes.uv,m=r.attributes.uv1,x=r.attributes.normal,f=r.groups,v=r.drawRange;if(c!==null)if(Array.isArray(o))for(let b=0,P=f.length;b<P;b++){let M=f[b],p=o[M.materialIndex],N=Math.max(M.start,v.start),z=Math.min(c.count,Math.min(M.start+M.count,v.start+v.count));for(let E=N,I=z;E<I;E+=3){let L=c.getX(E),F=c.getX(E+1),S=c.getX(E+2);s=Eo(this,p,t,n,u,m,x,L,F,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=M.materialIndex,e.push(s))}}else{let b=Math.max(0,v.start),P=Math.min(c.count,v.start+v.count);for(let M=b,p=P;M<p;M+=3){let N=c.getX(M),z=c.getX(M+1),E=c.getX(M+2);s=Eo(this,o,t,n,u,m,x,N,z,E),s&&(s.faceIndex=Math.floor(M/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let b=0,P=f.length;b<P;b++){let M=f[b],p=o[M.materialIndex],N=Math.max(M.start,v.start),z=Math.min(h.count,Math.min(M.start+M.count,v.start+v.count));for(let E=N,I=z;E<I;E+=3){let L=E,F=E+1,S=E+2;s=Eo(this,p,t,n,u,m,x,L,F,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=M.materialIndex,e.push(s))}}else{let b=Math.max(0,v.start),P=Math.min(h.count,v.start+v.count);for(let M=b,p=P;M<p;M+=3){let N=M,z=M+1,E=M+2;s=Eo(this,o,t,n,u,m,x,N,z,E),s&&(s.faceIndex=Math.floor(M/3),e.push(s))}}}};function Pp(i,t,e,n,s,r,o,c){let h;if(t.side===mn?h=n.intersectTriangle(o,r,s,!0,c):h=n.intersectTriangle(s,r,o,t.side===as,c),h===null)return null;Ao.copy(c),Ao.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Ao);return u<e.near||u>e.far?null:{distance:u,point:Ao.clone(),object:i}}function Eo(i,t,e,n,s,r,o,c,h,u){i.getVertexPosition(c,So),i.getVertexPosition(h,bo),i.getVertexPosition(u,To);let m=Pp(i,t,e,n,So,bo,To,Zu);if(m){let x=new et;ji.getBarycoord(Zu,So,bo,To,x),s&&(m.uv=ji.getInterpolatedAttribute(s,c,h,u,x,new Ee)),r&&(m.uv1=ji.getInterpolatedAttribute(r,c,h,u,x,new Ee)),o&&(m.normal=ji.getInterpolatedAttribute(o,c,h,u,x,new et),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));let f={a:c,b:h,c:u,normal:new et,materialIndex:0};ji.getNormal(So,bo,To,f.normal),m.face=f,m.barycoord=x}return m}var Ps=class extends Ln{constructor(t=null,e=1,n=1,s,r,o,c,h,u=je,m=je,x,f){super(null,o,c,h,u,m,s,r,x,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _a=class extends zn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},lr=new He,Ku=new He,Co=[],$u=new vi,Ip=new He,sa=new Mn,ra=new ts,xa=class extends Mn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _a(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ip)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lr),$u.copy(t.boundingBox).applyMatrix4(lr),this.boundingBox.union($u)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lr),ra.copy(t.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(ra)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let c=0;c<n.length;c++)n[c]=s[o+c]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(n),t.ray.intersectsSphere(ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lr),Ku.multiplyMatrices(n,lr),sa.matrixWorld=Ku,sa.raycast(t,Co);for(let o=0,c=Co.length;o<c;o++){let h=Co[o];h.instanceId=r,h.object=this,e.push(h)}Co.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ps(new Float32Array(s*this.count),s,this.count,wr,Jn));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let c=this.geometry.morphTargetsRelative?1:1-o,h=s*t;return r[h]=c,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Es=new ts,Lp=new Ee(.5,.5),Ro=new et,xr=class{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si,n=!1){let s=this.planes,r=t.elements,o=r[0],c=r[1],h=r[2],u=r[3],m=r[4],x=r[5],f=r[6],v=r[7],b=r[8],P=r[9],M=r[10],p=r[11],N=r[12],z=r[13],E=r[14],I=r[15];if(s[0].setComponents(u-o,v-m,p-b,I-N).normalize(),s[1].setComponents(u+o,v+m,p+b,I+N).normalize(),s[2].setComponents(u+c,v+x,p+P,I+z).normalize(),s[3].setComponents(u-c,v-x,p-P,I-z).normalize(),n)s[4].setComponents(h,f,M,E).normalize(),s[5].setComponents(u-h,v-f,p-M,I-E).normalize();else if(s[4].setComponents(u-h,v-f,p-M,I-E).normalize(),e===si)s[5].setComponents(u+h,v+f,p+M,I+E).normalize();else if(e===pr)s[5].setComponents(h,f,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);let e=Lp.distanceTo(t.center);return Es.radius=.7071067811865476+e,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ro.x=s.normal.x>0?t.max.x:t.min.x,Ro.y=s.normal.y>0?t.max.y:t.min.y,Ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var va=class extends Ln{constructor(t=[],e=os,n,s,r,o,c,h,u,m){super(t,e,n,s,r,o,c,h,u,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ns=class extends Ln{constructor(t,e,n=ai,s,r,o,c=je,h=je,u,m=gi,x=1){if(m!==gi&&m!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:x};super(f,s,r,o,c,h,m,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Zo=class extends ns{constructor(t,e=ai,n=os,s,r,o=je,c=je,h,u=gi){let m={width:t,height:t,depth:1},x=[m,m,m,m,m,m];super(t,t,e,n,s,r,o,c,h,u),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ya=class extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vr=class i extends kn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],u=[],m=[],x=[],f=0,v=0;b("z","y","x",-1,-1,n,e,t,o,r,0),b("z","y","x",1,-1,n,e,-t,o,r,1),b("x","z","y",1,1,t,n,e,s,o,2),b("x","z","y",1,-1,t,n,-e,s,o,3),b("x","y","z",1,-1,t,e,n,s,r,4),b("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new an(u,3)),this.setAttribute("normal",new an(m,3)),this.setAttribute("uv",new an(x,2));function b(P,M,p,N,z,E,I,L,F,S,U){let V=E/F,X=I/S,j=E/2,Y=I/2,W=L/2,Q=F+1,lt=S+1,rt=0,dt=0,st=new et;for(let at=0;at<lt;at++){let ft=at*X-Y;for(let Zt=0;Zt<Q;Zt++){let Xt=Zt*V-j;st[P]=Xt*N,st[M]=ft*z,st[p]=W,u.push(st.x,st.y,st.z),st[P]=0,st[M]=0,st[p]=L>0?1:-1,m.push(st.x,st.y,st.z),x.push(Zt/F),x.push(1-at/S),rt+=1}}for(let at=0;at<S;at++)for(let ft=0;ft<F;ft++){let Zt=f+ft+Q*at,Xt=f+ft+Q*(at+1),Be=f+(ft+1)+Q*(at+1),xe=f+(ft+1)+Q*at;h.push(Zt,Xt,xe),h.push(Xt,Be,xe),dt+=6}c.addGroup(v,dt,U),v+=dt,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ma=class i extends kn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,c=Math.floor(n),h=Math.floor(s),u=c+1,m=h+1,x=t/c,f=e/h,v=[],b=[],P=[],M=[];for(let p=0;p<m;p++){let N=p*f-o;for(let z=0;z<u;z++){let E=z*x-r;b.push(E,-N,0),P.push(0,0,1),M.push(z/c),M.push(1-p/h)}}for(let p=0;p<h;p++)for(let N=0;N<c;N++){let z=N+u*p,E=N+u*(p+1),I=N+1+u*(p+1),L=N+1+u*p;v.push(z,E,L),v.push(E,I,L)}this.setIndex(v),this.setAttribute("position",new an(b,3)),this.setAttribute("normal",new an(P,3)),this.setAttribute("uv",new an(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Sa=class i extends kn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(o+c,Math.PI),u=0,m=[],x=new et,f=new et,v=[],b=[],P=[],M=[];for(let p=0;p<=n;p++){let N=[],z=p/n,E=o+z*c,I=t*Math.cos(E),L=Math.sqrt(t*t-I*I),F=0;p===0&&o===0?F=.5/e:p===n&&h===Math.PI&&(F=-.5/e);for(let S=0;S<=e;S++){let U=S/e,V=s+U*r;x.x=-L*Math.cos(V),x.y=I,x.z=L*Math.sin(V),b.push(x.x,x.y,x.z),f.copy(x).normalize(),P.push(f.x,f.y,f.z),M.push(U+F,1-z),N.push(u++)}m.push(N)}for(let p=0;p<n;p++)for(let N=0;N<e;N++){let z=m[p][N+1],E=m[p][N],I=m[p+1][N],L=m[p+1][N+1];(p!==0||o>0)&&v.push(z,E,L),(p!==n-1||h<Math.PI)&&v.push(E,I,L)}this.setIndex(v),this.setAttribute("position",new an(b,3)),this.setAttribute("normal",new an(P,3)),this.setAttribute("uv",new an(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ju(s))s.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ju(s[0])){let r=[];for(let o=0,c=s.length;o<c;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Sn(i){let t={};for(let e=0;e<i.length;e++){let n=Ds(i[e]);for(let s in n)t[s]=n[s]}return t}function ju(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var Gd={clone:Ds,merge:Sn},Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new et().fromArray(s.value);break;case"v4":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new he().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ko=class extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ba=class extends es{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var $o=class extends es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jo=class extends es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function cr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ih(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let c=e[1];t<c&&(n=2,r=c);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let c=n+o>>>1;t<e[c]?o=c:n=c+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qo=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,c=s[r],h=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case oh:r=t,c=2*e-n;break;case lh:r=s.length-2,c=e+s[r]-s[r+1];break;default:r=t,c=n}if(h===void 0)switch(this.getSettings_().endingEnd){case oh:o=t,h=2*n-e;break;case lh:o=1,h=n+s[1]-s[0];break;default:o=t-1,h=e}let u=(n-e)*.5,m=this.valueSize;this._weightPrev=u/(e-c),this._weightNext=u/(h-n),this._offsetPrev=r*m,this._offsetNext=o*m}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,m=this._offsetPrev,x=this._offsetNext,f=this._weightPrev,v=this._weightNext,b=(n-e)/(s-e),P=b*b,M=P*b,p=-f*M+2*f*P-f*b,N=(1+f)*M+(-1.5-2*f)*P+(-.5+f)*b+1,z=(-1-v)*M+(1.5+v)*P+.5*b,E=v*M-v*P;for(let I=0;I!==c;++I)r[I]=p*o[m+I]+N*o[u+I]+z*o[h+I]+E*o[x+I];return r}},tl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,m=(n-e)/(s-e),x=1-m;for(let f=0;f!==c;++f)r[f]=o[u+f]*x+o[h+f]*m;return r}},el=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},nl=class extends is{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,u=h-c,m=this.inTangents,x=this.outTangents;if(!m||!x){let b=(n-e)/(s-e),P=1-b;for(let M=0;M!==c;++M)r[M]=o[u+M]*P+o[h+M]*b;return r}let f=c*2,v=t-1;for(let b=0;b!==c;++b){let P=o[u+b],M=o[h+b],p=v*f+b*2,N=x[p],z=x[p+1],E=t*f+b*2,I=m[E],L=m[E+1],F=Op(n,e,N,I,s);r[b]=Hd(F,P,z,L,M)}return r}};function Hd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Fp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Op(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let c=Hd(r,t,e,n,s)-i;if(Math.abs(c)<1e-10)break;let h=Fp(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-c/h))}return r}var Vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cr(e,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cr(t.times,Array),values:cr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ih(t.settings)&&(n.settings={inTangents:cr(t.settings.inTangents,Array),outTangents:cr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new nl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case aa:e=this.InterpolantFactoryMethodDiscrete;break;case Ho:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break;case rh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ie("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return aa;case this.InterpolantFactoryMethodLinear:return Ho;case this.InterpolantFactoryMethodSmooth:return Lo;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ih(this.settings)&&(Qu(this.settings.inTangents,t),Qu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let c=0;c!==r;c++){let h=n[c];if(typeof h=="number"&&isNaN(h)){ae("KeyframeTrack: Time is not a valid number.",this,c,h),t=!1;break}if(o!==null&&o>h){ae("KeyframeTrack: Out of order keys.",this,c,h,o),t=!1;break}o=h}if(s!==void 0&&dp(s))for(let c=0,h=s.length;c!==h;++c){let u=s[c];if(isNaN(u)){ae("KeyframeTrack: Value is not a valid number.",this,c,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lo,r=t.length-1,o=1;for(let c=1;c<r;++c){let h=!1,u=t[c],m=t[c+1];if(u!==m&&(c!==1||u!==t[0]))if(s)h=!0;else{let x=c*n,f=x-n,v=x+n;for(let b=0;b!==n;++b){let P=e[x+b];if(P!==e[f+b]||P!==e[v+b]){h=!0;break}}}if(h){if(c!==o){t[o]=t[c];let x=c*n,f=o*n;for(let v=0;v!==n;++v)e[f+v]=e[x+v]}++o}}if(r>0){t[o]=t[r];for(let c=r*n,h=o*n,u=0;u!==n;++u)e[h+u]=e[c+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ih(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Ho;var ss=class extends Vn{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=aa;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};il.prototype.ValueTypeName="color";var sl=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};sl.prototype.ValueTypeName="number";var rl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=(n-e)/(s-e),u=t*c;for(let m=u+c;u!==m;u+=4)xi.slerpFlat(r,0,o,u-c,o,u,h);return r}},Ta=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}};Ta.prototype.ValueTypeName="quaternion";Ta.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Vn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=aa;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};al.prototype.ValueTypeName="vector";var ol=class{constructor(t,e,n){let s=this,r=!1,o=0,c=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(m){c++,r===!1&&s.onStart!==void 0&&s.onStart(m,o,c),r=!0},this.itemEnd=function(m){o++,s.onProgress!==void 0&&s.onProgress(m,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,x){return u.push(m,x),this},this.removeHandler=function(m){let x=u.indexOf(m);return x!==-1&&u.splice(x,2),this},this.getHandler=function(m){for(let x=0,f=u.length;x<f;x+=2){let v=u[x],b=u[x+1];if(v.global&&(v.lastIndex=0),v.test(m))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wd=new ol,ll=class{constructor(t){this.manager=t!==void 0?t:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var wa=class extends yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Aa=class extends wa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},sh=new He,td=new et,ed=new et,cl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;td.setFromMatrixPosition(t.matrixWorld),e.position.copy(td),ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ed),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,c=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===pr||t.reversedDepth?e.set(.5*o,0,0,.5*o+h,0,.5*c,0,.5*c+u,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+h,0,.5*c,0,.5*c+u,0,0,.5,.5,0,0,0,1),e.multiply(sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Po=new et,Io=new xi,pi=new et,Ea=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Po,Io,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Po,Io,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Io,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new et,nd=new Ee,id=new Ee,vn=class extends Ea{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,nd,id),e.subVectors(id,nd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*n/u,s*=o.width/h,n*=o.height/u}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var yr=class extends Ea{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,c=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ch=class extends cl{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ca=class extends wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new ch}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var hr=-90,ur=1,hl=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(hr,ur,t,e);s.layers=this.layers,this.add(s);let r=new vn(hr,ur,t,e);r.layers=this.layers,this.add(r);let o=new vn(hr,ur,t,e);o.layers=this.layers,this.add(o);let c=new vn(hr,ur,t,e);c.layers=this.layers,this.add(c);let h=new vn(hr,ur,t,e);h.layers=this.layers,this.add(h);let u=new vn(hr,ur,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,c,h]=e;for(let u of e)this.remove(u);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,h,u,m]=this.children,x=t.getRenderTarget(),f=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;let P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,3,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=P,t.setRenderTarget(n,5,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(x,f,v),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},ul=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fh="\\[\\]\\.:\\/",Bp=new RegExp("["+Fh+"]","g"),Oh="[^"+Fh+"]",zp="[^"+Fh.replace("\\.","")+"]",kp=/((?:WC+[\/:])*)/.source.replace("WC",Oh),Vp=/(WCOD+)?/.source.replace("WCOD",zp),Gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),Hp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),Wp=new RegExp("^"+kp+Vp+Gp+Hp+"$"),Xp=["material","materials","bones","map"],hh=class{constructor(t,e,n){let s=n||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bp,"")}static parseTrackName(t){let e=Wp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===e||c.uuid===e)return c;let h=n(c.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===u){u=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let o=t[s];if(o===void 0){let u=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=hh;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);var uh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Bh(i,t,e,n){let s=qp(n);switch(e){case Ph:return i*t;case wr:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case hs:return i*t*2/s.components*s.byteLength;case yl:return i*t*2/s.components*s.byteLength;case Ih:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case Ml:return i*t*4/s.components*s.byteLength;case Da:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:case wl:return Math.max(i,16)*Math.max(t,8)/4;case Sl:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case Al:case El:case Rl:case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cl:case Oa:case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ql:case Yl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ba:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qp(i){switch(i){case Nn:case Ah:return{byteLength:1,components:1};case br:case Eh:case oi:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case ai:case gl:case Jn:return{byteLength:4,components:1};case Ch:case Rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ff(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jp(i){let t=new WeakMap;function e(c,h){let u=c.array,m=c.usage,x=u.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,u,m),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=i.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:x}}function n(c,h,u){let m=h.array,x=h.updateRanges;if(i.bindBuffer(u,c),x.length===0)i.bufferSubData(u,0,m);else{x.sort((v,b)=>v.start-b.start);let f=0;for(let v=1;v<x.length;v++){let b=x[f],P=x[v];P.start<=b.start+b.count+1?b.count=Math.max(b.count,P.start+P.count-b.start):(++f,x[f]=P)}x.length=f+1;for(let v=0,b=x.length;v<b;v++){let P=x[v];i.bufferSubData(u,P.start*m.BYTES_PER_ELEMENT,m,P.start,P.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=t.get(c);h&&(i.deleteBuffer(h.buffer),t.delete(c))}function o(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let m=t.get(c);(!m||m.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let u=t.get(c);if(u===void 0)t.set(c,e(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,c,h),u.version=c.version}}return{get:s,remove:r,update:o}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
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
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
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
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
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
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xm=`#define PI 3.141592653589793
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
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Em=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
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
#endif`,Ym=`uniform sampler2D dfgLUT;
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
}`,Jm=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$m=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
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
}`,ng=`#if DEPTH_PACKING == 3200
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
}`,ig=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,yg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,Sg=`#define TOON
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
}`,bg=`uniform float size;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,wg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,Eg=`uniform float rotation;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:Zp,alphahash_pars_fragment:Kp,alphamap_fragment:$p,alphamap_pars_fragment:jp,alphatest_fragment:Qp,alphatest_pars_fragment:tm,aomap_fragment:em,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:sm,begin_vertex:rm,beginnormal_vertex:am,bsdfs:om,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:dm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:xm,cube_uv_reflection_fragment:vm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Mm,displacementmap_vertex:Sm,emissivemap_fragment:bm,emissivemap_pars_fragment:Tm,colorspace_fragment:wm,colorspace_pars_fragment:Am,envmap_fragment:Em,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Rm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Vm,envmap_vertex:Im,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Nm,fog_pars_fragment:Um,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:zm,lights_pars_begin:km,lights_toon_fragment:Gm,lights_toon_pars_fragment:Hm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Jm,lights_fragment_maps:Zm,lights_fragment_end:Km,lightprobes_pars_fragment:$m,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:e0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:s0,map_particle_pars_fragment:r0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:o0,morphinstance_vertex:l0,morphcolor_vertex:c0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:d0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:_0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:S0,opaque_fragment:b0,packing:T0,premultiplied_alpha_fragment:w0,project_vertex:A0,dithering_fragment:E0,dithering_pars_fragment:C0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:L0,shadowmap_vertex:D0,shadowmask_pars_fragment:N0,skinbase_vertex:U0,skinning_pars_vertex:F0,skinning_vertex:O0,skinnormal_vertex:B0,specularmap_fragment:z0,specularmap_pars_fragment:k0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:H0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:q0,uv_vertex:Y0,worldpos_vertex:J0,background_vert:Z0,background_frag:K0,backgroundCube_vert:$0,backgroundCube_frag:j0,cube_vert:Q0,cube_frag:tg,depth_vert:eg,depth_frag:ng,distance_vert:ig,distance_frag:sg,equirect_vert:rg,equirect_frag:ag,linedashed_vert:og,linedashed_frag:lg,meshbasic_vert:cg,meshbasic_frag:hg,meshlambert_vert:ug,meshlambert_frag:dg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:_g,meshphong_frag:xg,meshphysical_vert:vg,meshphysical_frag:yg,meshtoon_vert:Mg,meshtoon_frag:Sg,points_vert:bg,points_frag:Tg,shadow_vert:wg,shadow_frag:Ag,sprite_vert:Eg,sprite_frag:Cg},Ft={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new et},probesMax:{value:new et},probesResolution:{value:new et}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},bi={basic:{uniforms:Sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Sn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Sn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Sn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Sn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Sn([Ft.points,Ft.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Sn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Sn([Ft.common,Ft.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Sn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Sn([Ft.sprite,Ft.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Sn([Ft.common,Ft.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Sn([Ft.lights,Ft.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};bi.physical={uniforms:Sn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var ec={r:0,b:0,g:0},Rg=new He,pf=new he;pf.set(-1,0,0,0,1,0,0,0,1);function Pg(i,t,e,n,s,r){let o=new pe(0),c=s===!0?0:1,h,u,m=null,x=0,f=null;function v(N){let z=N.isScene===!0?N.background:null;if(z&&z.isTexture){let E=N.backgroundBlurriness>0;z=t.get(z,E)}return z}function b(N){let z=!1,E=v(N);E===null?M(o,c):E&&E.isColor&&(M(E,1),z=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||z)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(N,z){let E=v(z);E&&(E.isCubeTexture||E.mapping===Ia)?(u===void 0&&(u=new Mn(new vr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Ds(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(z.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(pf),u.material.toneMapped=we.getTransfer(E.colorSpace)!==Oe,(m!==E||x!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,m=E,x=E.version,f=i.toneMapping),u.layers.enableAll(),N.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new Mn(new Ma(2,2),new Rn({name:"BackgroundMaterial",uniforms:Ds(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,h.material.toneMapped=we.getTransfer(E.colorSpace)!==Oe,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(m!==E||x!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,m=E,x=E.version,f=i.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function M(N,z){N.getRGB(ec,Uh(i)),e.buffers.color.setClear(ec.r,ec.g,ec.b,z,r)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(N,z=1){o.set(N),c=z,M(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(N){c=N,M(o,c)},render:b,addToRenderList:P,dispose:p}}function Ig(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function c(X,j,Y,W,Q){let lt=!1,rt=x(X,W,Y,j);r!==rt&&(r=rt,u(r.object)),lt=v(X,W,Y,Q),lt&&b(X,W,Y,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,E(X,j,Y,W),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function h(){return i.createVertexArray()}function u(X){return i.bindVertexArray(X)}function m(X){return i.deleteVertexArray(X)}function x(X,j,Y,W){let Q=W.wireframe===!0,lt=n[j.id];lt===void 0&&(lt={},n[j.id]=lt);let rt=X.isInstancedMesh===!0?X.id:0,dt=lt[rt];dt===void 0&&(dt={},lt[rt]=dt);let st=dt[Y.id];st===void 0&&(st={},dt[Y.id]=st);let at=st[Q];return at===void 0&&(at=f(h()),st[Q]=at),at}function f(X){let j=[],Y=[],W=[];for(let Q=0;Q<e;Q++)j[Q]=0,Y[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Y,attributeDivisors:W,object:X,attributes:{},index:null}}function v(X,j,Y,W){let Q=r.attributes,lt=j.attributes,rt=0,dt=Y.getAttributes();for(let st in dt)if(dt[st].location>=0){let ft=Q[st],Zt=lt[st];if(Zt===void 0&&(st==="instanceMatrix"&&X.instanceMatrix&&(Zt=X.instanceMatrix),st==="instanceColor"&&X.instanceColor&&(Zt=X.instanceColor)),ft===void 0||ft.attribute!==Zt||Zt&&ft.data!==Zt.data)return!0;rt++}return r.attributesNum!==rt||r.index!==W}function b(X,j,Y,W){let Q={},lt=j.attributes,rt=0,dt=Y.getAttributes();for(let st in dt)if(dt[st].location>=0){let ft=lt[st];ft===void 0&&(st==="instanceMatrix"&&X.instanceMatrix&&(ft=X.instanceMatrix),st==="instanceColor"&&X.instanceColor&&(ft=X.instanceColor));let Zt={};Zt.attribute=ft,ft&&ft.data&&(Zt.data=ft.data),Q[st]=Zt,rt++}r.attributes=Q,r.attributesNum=rt,r.index=W}function P(){let X=r.newAttributes;for(let j=0,Y=X.length;j<Y;j++)X[j]=0}function M(X){p(X,0)}function p(X,j){let Y=r.newAttributes,W=r.enabledAttributes,Q=r.attributeDivisors;Y[X]=1,W[X]===0&&(i.enableVertexAttribArray(X),W[X]=1),Q[X]!==j&&(i.vertexAttribDivisor(X,j),Q[X]=j)}function N(){let X=r.newAttributes,j=r.enabledAttributes;for(let Y=0,W=j.length;Y<W;Y++)j[Y]!==X[Y]&&(i.disableVertexAttribArray(Y),j[Y]=0)}function z(X,j,Y,W,Q,lt,rt){rt===!0?i.vertexAttribIPointer(X,j,Y,Q,lt):i.vertexAttribPointer(X,j,Y,W,Q,lt)}function E(X,j,Y,W){P();let Q=W.attributes,lt=Y.getAttributes(),rt=j.defaultAttributeValues;for(let dt in lt){let st=lt[dt];if(st.location>=0){let at=Q[dt];if(at===void 0&&(dt==="instanceMatrix"&&X.instanceMatrix&&(at=X.instanceMatrix),dt==="instanceColor"&&X.instanceColor&&(at=X.instanceColor)),at!==void 0){let ft=at.normalized,Zt=at.itemSize,Xt=t.get(at);if(Xt===void 0)continue;let Be=Xt.buffer,xe=Xt.type,ve=Xt.bytesPerElement,ht=xe===i.INT||xe===i.UNSIGNED_INT||at.gpuType===gl;if(at.isInterleavedBufferAttribute){let xt=at.data,qt=xt.stride,le=at.offset;if(xt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<st.locationSize;Vt++)p(st.location+Vt,xt.meshPerAttribute);X.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Vt=0;Vt<st.locationSize;Vt++)M(st.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Vt=0;Vt<st.locationSize;Vt++)z(st.location+Vt,Zt/st.locationSize,xe,ft,qt*ve,(le+Zt/st.locationSize*Vt)*ve,ht)}else{if(at.isInstancedBufferAttribute){for(let xt=0;xt<st.locationSize;xt++)p(st.location+xt,at.meshPerAttribute);X.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let xt=0;xt<st.locationSize;xt++)M(st.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let xt=0;xt<st.locationSize;xt++)z(st.location+xt,Zt/st.locationSize,xe,ft,Zt*ve,Zt/st.locationSize*xt*ve,ht)}}else if(rt!==void 0){let ft=rt[dt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(st.location,ft);break;case 3:i.vertexAttrib3fv(st.location,ft);break;case 4:i.vertexAttrib4fv(st.location,ft);break;default:i.vertexAttrib1fv(st.location,ft)}}}}N()}function I(){U();for(let X in n){let j=n[X];for(let Y in j){let W=j[Y];for(let Q in W){let lt=W[Q];for(let rt in lt)m(lt[rt].object),delete lt[rt];delete W[Q]}}delete n[X]}}function L(X){if(n[X.id]===void 0)return;let j=n[X.id];for(let Y in j){let W=j[Y];for(let Q in W){let lt=W[Q];for(let rt in lt)m(lt[rt].object),delete lt[rt];delete W[Q]}}delete n[X.id]}function F(X){for(let j in n){let Y=n[j];for(let W in Y){let Q=Y[W];if(Q[X.id]===void 0)continue;let lt=Q[X.id];for(let rt in lt)m(lt[rt].object),delete lt[rt];delete Q[X.id]}}}function S(X){for(let j in n){let Y=n[j],W=X.isInstancedMesh===!0?X.id:0,Q=Y[W];if(Q!==void 0){for(let lt in Q){let rt=Q[lt];for(let dt in rt)m(rt[dt].object),delete rt[dt];delete Q[lt]}delete Y[W],Object.keys(Y).length===0&&delete n[j]}}}function U(){V(),o=!0,r!==s&&(r=s,u(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:U,resetDefaultState:V,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:S,releaseStatesOfProgram:F,initAttributes:P,enableAttribute:M,disableUnusedAttributes:N}}function Lg(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,m){m!==0&&(i.drawArraysInstanced(n,h,u,m),e.update(u,n,m))}function c(h,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,m);let f=0;for(let v=0;v<m;v++)f+=u[v];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c}function Dg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==Zn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(F){let S=F===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Nn&&F!==Jn&&!S&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",m=h(u);m!==u&&(ie("WebGLRenderer:",u,"not supported, using",m,"instead."),u=m);let x=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),z=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:x,reversedDepthBuffer:f,maxTextures:v,maxVertexTextures:b,maxTextureSize:P,maxCubemapSize:M,maxAttributes:p,maxVertexUniforms:N,maxVaryings:z,maxFragmentUniforms:E,maxSamples:I,samples:L}}function Ng(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ii,c=new he,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,f){let v=x.length!==0||f||n!==0||s;return s=f,n=x.length,v},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,f){e=m(x,f,0)},this.setState=function(x,f,v){let b=x.clippingPlanes,P=x.clipIntersection,M=x.clipShadows,p=i.get(x);if(!s||b===null||b.length===0||r&&!M)r?m(null):u();else{let N=r?0:n,z=N*4,E=p.clippingState||null;h.value=E,E=m(b,f,z,v);for(let I=0;I!==z;++I)E[I]=e[I];p.clippingState=E,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=N}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function m(x,f,v,b){let P=x!==null?x.length:0,M=null;if(P!==0){if(M=h.value,b!==!0||M===null){let p=v+P*4,N=f.matrixWorldInverse;c.getNormalMatrix(N),(M===null||M.length<p)&&(M=new Float32Array(p));for(let z=0,E=v;z!==P;++z,E+=4)o.copy(x[z]).applyMatrix4(N,c),o.normal.toArray(M,E),M[E+3]=o.constant}h.value=M,h.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,M}}var Er=4,Ug=6,Fg=20,Og=256,ka=new yr,Xd=new pe,zh=null,kh=0,Vh=0,Gh=!1,Bg=new et,Ns=new et,ic=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:c=Bg}=r;zh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,c),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,kh,Vh),this._renderer.xr.enabled=Gh,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:oi,format:Zn,colorSpace:oa,depthBuffer:!1},s=qd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zg(r)),this._blurMaterial=Vg(r,t,e),this._ggxMaterial=kg(r,t,e)}return s}_compileMaterial(t){let e=new Mn(new kn,t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,s,r){let h=new vn(90,1,e,n),u=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,f=x.autoClear,v=x.toneMapping;x.getClearColor(Xd),x.toneMapping=ri,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new vr,new ga({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,M=P.material,p=!1,N=t.background;N?N.isColor&&(M.color.copy(N),t.background=null,p=!0):(M.color.copy(Xd),p=!0);for(let z=0;z<6;z++){let E=z%3;E===0?(h.up.set(0,u[z],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+m[z],r.y,r.z)):E===1?(h.up.set(0,0,u[z]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+m[z],r.z)):(h.up.set(0,u[z],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+m[z]));let I=this._cubeSize;Ar(s,E*I,z>2?I:0,I,I),x.setRenderTarget(s),p&&x.render(P,h),x.render(t,h)}x.toneMapping=v,x.autoClear=f,t.background=N}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let c=r.uniforms;c.envMap.value=t;let h=this._cubeSize;Ar(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;let h=o.uniforms,u=n/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),x=Math.sqrt(u*u-m*m),f=u*1.25,v=x*f,{_lodMax:b}=this,P=this._sizeLods[n],M=3*P*(n>b-Er?n-b+Er:0),p=4*(this._cubeSize-P);h.envMap.value=t.texture,h.roughness.value=v,h.mipInt.value=b-e,Ar(r,M,p,3*P,2*P),s.setRenderTarget(r),s.render(c,ka),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=b-n,Ar(t,M,p,3*P,2*P),s.setRenderTarget(t),s.render(c,ka)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,c=this._blurMaterial,h=this._lodMeshes[s];h.material=c;let u=c.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let m=this._sizeLods[s],x=3*m*(s>this._lodMax-Er?s-this._lodMax+Er:0),f=4*(this._cubeSize-m);Ar(e,x,f,3*m,2*m),o.setRenderTarget(e),o.render(h,ka)}};function zg(i){let t=[],e=[],n=i,s=i-Er+1+Ug;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let c=1/(o-2),h=-c,u=1+c,m=[h,h,u,h,u,u,h,h,u,u,h,u],x=6,f=6,v=3,b=new Float32Array(v*f*x),P=new Float32Array(v*f*x);for(let p=0;p<x;p++){let N=p%3*2/3-1,z=p>2?0:-1,E=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];b.set(E,v*f*p);for(let I=0;I<f;I++){let L=m[I*2]*2-1,F=m[I*2+1]*2-1;p===0?Ns.set(1,F,L):p===1?Ns.set(-L,1,-F):p===2?Ns.set(-L,F,1):p===3?Ns.set(-1,F,-L):p===4?Ns.set(-L,-1,F):Ns.set(L,F,-1),Ns.toArray(P,(p*f+I)*v)}}let M=new kn;M.setAttribute("position",new zn(b,v)),M.setAttribute("outputDirection",new zn(P,v)),e.push(new Mn(M,null)),n>Er&&n--}return{lodMeshes:e,sizeLods:t}}function qd(i,t,e){let n=new Dn(i,t,e);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function kg(i,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Vg(i,t,e){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:Fg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Yd(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Jd(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sc=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new va(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vr(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Mi});r.uniforms.tEquirect.value=e;let o=new Mn(s,r),c=e.minFilter;return e.minFilter===ls&&(e.minFilter=pn),new hl(1,10,this).update(t,o),e.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Gg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,v=!1){return f==null?null:v?o(f):r(f)}function r(f){if(f&&f.isTexture){let v=f.mapping;if(v===fl||v===pl)if(t.has(f)){let b=t.get(f).texture;return c(b,f.mapping)}else{let b=f.image;if(b&&b.height>0){let P=new sc(b.height);return P.fromEquirectangularTexture(i,f),t.set(f,P),f.addEventListener("dispose",u),c(P.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let v=f.mapping,b=v===fl||v===pl,P=v===os||v===Ls;if(b||P){let M=e.get(f),p=M!==void 0?M.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new ic(i)),M=b?n.fromEquirectangular(f,M):n.fromCubemap(f,M),M.texture.pmremVersion=f.pmremVersion,e.set(f,M),M.texture;if(M!==void 0)return M.texture;{let N=f.image;return b&&N&&N.height>0||P&&N&&h(N)?(n===null&&(n=new ic(i)),M=b?n.fromEquirectangular(f):n.fromCubemap(f),M.texture.pmremVersion=f.pmremVersion,e.set(f,M),f.addEventListener("dispose",m),M.texture):null}}}return f}function c(f,v){return v===fl?f.mapping=os:v===pl&&(f.mapping=Ls),f}function h(f){let v=0,b=6;for(let P=0;P<b;P++)f[P]!==void 0&&v++;return v===b}function u(f){let v=f.target;v.removeEventListener("dispose",u);let b=t.get(v);b!==void 0&&(t.delete(v),b.dispose())}function m(f){let v=f.target;v.removeEventListener("dispose",m);let b=e.get(v);b!==void 0&&(e.delete(v),b.dispose())}function x(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:x}}function Hg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Rs("WebGLRenderer: "+n+" extension not supported."),s}}}function Wg(i,t,e,n){let s={},r=new WeakMap;function o(x){let f=x.target;f.index!==null&&t.remove(f.index);for(let b in f.attributes)t.remove(f.attributes[b]);f.removeEventListener("dispose",o),delete s[f.id];let v=r.get(f);v&&(t.remove(v),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(x,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function h(x){let f=x.attributes;for(let v in f)t.update(f[v],i.ARRAY_BUFFER)}function u(x){let f=[],v=x.index,b=x.attributes.position,P=0;if(b===void 0)return;if(v!==null){let N=v.array;P=v.version;for(let z=0,E=N.length;z<E;z+=3){let I=N[z+0],L=N[z+1],F=N[z+2];f.push(I,L,L,F,F,I)}}else{let N=b.array;P=b.version;for(let z=0,E=N.length/3-1;z<E;z+=3){let I=z+0,L=z+1,F=z+2;f.push(I,L,L,F,F,I)}}let M=new(b.count>=65535?ma:pa)(f,1);M.version=P;let p=r.get(x);p&&t.remove(p),r.set(x,M)}function m(x){let f=r.get(x);if(f){let v=x.index;v!==null&&f.version<v.version&&u(x)}else u(x);return r.get(x)}return{get:c,update:h,getWireframeAttribute:m}}function Xg(i,t,e){let n;function s(x){n=x}let r,o;function c(x){r=x.type,o=x.bytesPerElement}function h(x,f){i.drawElements(n,f,r,x*o),e.update(f,n,1)}function u(x,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,x*o,v),e.update(f,n,v))}function m(x,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,x,0,v);let P=0;for(let M=0;M<v;M++)P+=f[M];e.update(P,n,1)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=m}function qg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=c*(r/3);break;case i.LINES:e.lines+=c*(r/2);break;case i.LINE_STRIP:e.lines+=c*(r-1);break;case i.LINE_LOOP:e.lines+=c*r;break;case i.POINTS:e.points+=c*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Yg(i,t,e){let n=new WeakMap,s=new qe;function r(o,c,h){let u=o.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=m!==void 0?m.length:0,f=n.get(c);if(f===void 0||f.count!==x){let U=function(){F.dispose(),n.delete(c),c.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let v=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,P=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],N=c.morphAttributes.color||[],z=0;v===!0&&(z=1),b===!0&&(z=2),P===!0&&(z=3);let E=c.attributes.position.count*z,I=1;E>t.maxTextureSize&&(I=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let L=new Float32Array(E*I*4*x),F=new ha(L,E,I,x);F.type=Jn,F.needsUpdate=!0;let S=z*4;for(let V=0;V<x;V++){let X=M[V],j=p[V],Y=N[V],W=E*I*4*V;for(let Q=0;Q<X.count;Q++){let lt=Q*S;v===!0&&(s.fromBufferAttribute(X,Q),L[W+lt+0]=s.x,L[W+lt+1]=s.y,L[W+lt+2]=s.z,L[W+lt+3]=0),b===!0&&(s.fromBufferAttribute(j,Q),L[W+lt+4]=s.x,L[W+lt+5]=s.y,L[W+lt+6]=s.z,L[W+lt+7]=0),P===!0&&(s.fromBufferAttribute(Y,Q),L[W+lt+8]=s.x,L[W+lt+9]=s.y,L[W+lt+10]=s.z,L[W+lt+11]=Y.itemSize===4?s.w:1)}}f={count:x,texture:F,size:new Ee(E,I)},n.set(c,f),c.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let P=0;P<u.length;P++)v+=u[P];let b=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Jg(i,t,e,n,s){let r=new WeakMap;function o(u){let m=s.render.frame,x=u.geometry,f=t.get(u,x);if(r.get(f)!==m&&(t.update(f),r.set(f,m)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==m&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,m))),u.isSkinnedMesh){let v=u.skeleton;r.get(v)!==m&&(v.update(),r.set(v,m))}return f}function c(){r=new WeakMap}function h(u){let m=u.target;m.removeEventListener("dispose",h),n.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:o,dispose:c}}var Zg={[vh]:"LINEAR_TONE_MAPPING",[yh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[Pa]:"ACES_FILMIC_TONE_MAPPING",[bh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function Kg(i,t,e,n,s,r){let o=new Dn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,h=null,u=new kn;u.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new an([0,2,0,0,2,0],2));let m=new Ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Mn(u,m),f=new yr(-1,1,1,-1,0,1),v=null,b=null,P=!1,M,p=null,N=[],z=!1;this.setSize=function(E,I){o.setSize(E,I),c!==null&&c.setSize(E,I),h!==null&&h.setSize(E,I);for(let L=0;L<N.length;L++){let F=N[L];F.setSize&&F.setSize(E,I)}},this.setEffects=function(E){N=E,z=N.length>0&&N[0].isRenderPass===!0;let I=o.width,L=o.height;N.length>0&&c===null&&(c=new Dn(I,L,{type:oi,depthBuffer:!1,stencilBuffer:!1}),h=new Dn(I,L,{type:oi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<N.length;F++){let S=N[F];S.setSize&&S.setSize(I,L)}},this.begin=function(E,I){if(P||E.toneMapping===ri&&N.length===0)return!1;if(p=I,I!==null){let L=I.width,F=I.height;(o.width!==L||o.height!==F)&&this.setSize(L,F)}return z===!1&&E.setRenderTarget(o),M=E.toneMapping,E.toneMapping=ri,!0},this.hasRenderPass=function(){return z},this.end=function(E,I){E.toneMapping=M,P=!0;let L=o,F=c;for(let S=0;S<N.length;S++){let U=N[S];U.enabled!==!1&&(U.render(E,F,L,I),U.needsSwap!==!1&&(L=F,F=F===c?h:c))}if(v!==E.outputColorSpace||b!==E.toneMapping){v=E.outputColorSpace,b=E.toneMapping,m.defines={},we.getTransfer(v)===Oe&&(m.defines.SRGB_TRANSFER="");let S=Zg[b];S&&(m.defines[S]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,E.setRenderTarget(p),E.render(x,f),p=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),h!==null&&h.dispose(),u.dispose(),m.dispose()}}var mf=new Ln,Xh=new ns(1,1),gf=new ha,_f=new Yo,xf=new va,Zd=[],Kd=[],$d=new Float32Array(16),jd=new Float32Array(9),Qd=new Float32Array(4);function Rr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zd[s];if(r===void 0&&(r=new Float32Array(s),Zd[s]=r),t!==0){n.toArray(r,0);for(let o=1,c=0;o!==t;++o)c+=e,i[o].toArray(r,c)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oc(i,t){let e=Kd[t];e===void 0&&(e=new Int32Array(t),Kd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function e_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Qd.set(n),i.uniformMatrix2fv(this.addr,!1,Qd),ln(e,n)}}function n_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;jd.set(n),i.uniformMatrix3fv(this.addr,!1,jd),ln(e,n)}}function i_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;$d.set(n),i.uniformMatrix4fv(this.addr,!1,$d),ln(e,n)}}function s_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function l_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function c_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function d_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xh.compareFunction=e.isReversedDepthBuffer()?tc:Ql,r=Xh):r=mf,e.setTexture2D(t||r,s)}function f_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_f,s)}function p_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xf,s)}function m_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gf,s)}function g_(i){switch(i){case 5126:return $g;case 35664:return jg;case 35665:return Qg;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return a_;case 35669:case 35673:return o_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function __(i,t){i.uniform1fv(this.addr,t)}function x_(i,t){let e=Rr(t,this.size,2);i.uniform2fv(this.addr,e)}function v_(i,t){let e=Rr(t,this.size,3);i.uniform3fv(this.addr,e)}function y_(i,t){let e=Rr(t,this.size,4);i.uniform4fv(this.addr,e)}function M_(i,t){let e=Rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function S_(i,t){let e=Rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function b_(i,t){let e=Rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T_(i,t){i.uniform1iv(this.addr,t)}function w_(i,t){i.uniform2iv(this.addr,t)}function A_(i,t){i.uniform3iv(this.addr,t)}function E_(i,t){i.uniform4iv(this.addr,t)}function C_(i,t){i.uniform1uiv(this.addr,t)}function R_(i,t){i.uniform2uiv(this.addr,t)}function P_(i,t){i.uniform3uiv(this.addr,t)}function I_(i,t){i.uniform4uiv(this.addr,t)}function L_(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Xh:o=mf;for(let c=0;c!==s;++c)e.setTexture2D(t[c]||o,r[c])}function D_(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_f,r[o])}function N_(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xf,r[o])}function U_(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gf,r[o])}function F_(i){switch(i){case 5126:return __;case 35664:return x_;case 35665:return v_;case 35666:return y_;case 35674:return M_;case 35675:return S_;case 35676:return b_;case 5124:case 35670:return T_;case 35667:case 35671:return w_;case 35668:case 35672:return A_;case 35669:case 35673:return E_;case 5125:return C_;case 36294:return R_;case 36295:return P_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return U_}}var qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=g_(e.type)}},Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F_(e.type)}},Jh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(t,e[c.id],n)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function tf(i,t){i.seq.push(t),i.map[t.id]=t}function O_(i,t,e){let n=i.name,s=n.length;for(Hh.lastIndex=0;;){let r=Hh.exec(n),o=Hh.lastIndex,c=r[1],h=r[2]==="]",u=r[3];if(h&&(c=c|0),u===void 0||u==="["&&o+2===s){tf(e,u===void 0?new qh(c,i,t):new Yh(c,i,t));break}else{let x=e.map[c];x===void 0&&(x=new Jh(c),tf(e,x)),e=x}}}var Cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let c=t.getActiveUniform(e,o),h=t.getUniformLocation(e,c.name);O_(c,h,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let c=e[r],h=n[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ef(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var B_=37297,z_=0;function k_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===t?">":" "} ${c}: ${e[o]}`)}return n.join(`
`)}var nf=new he;function V_(i){we._getMatrix(nf,we.workingColorSpace,i);let t=`mat3( ${nf.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(i)){case la:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+k_(i.getShaderSource(t),c)}else return r}function G_(i,t){let e=V_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var H_={[vh]:"Linear",[yh]:"Reinhard",[Mh]:"Cineon",[Pa]:"ACESFilmic",[bh]:"AgX",[Th]:"Neutral",[Sh]:"Custom"};function W_(i,t){let e=H_[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nc=new et;function X_(){we.getLuminanceCoefficients(nc);let i=nc.x.toFixed(4),t=nc.y.toFixed(4),e=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function Y_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:c}}return e}function Ga(i){return i!==""}function rf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function af(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(i){return i.replace(Z_,$_)}var K_=new Map;function $_(i,t){let e=_e[t];if(e===void 0){let n=K_.get(t);if(n!==void 0)e=_e[n],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zh(e)}var j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(i){return i.replace(j_,Q_)}function Q_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var tx={[Ra]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function ex(i){return tx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nx={[os]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE_UV"};function ix(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":nx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var sx={[Ls]:"ENVMAP_MODE_REFRACTION"};function rx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ax={[xh]:"ENVMAP_BLENDING_MULTIPLY",[Td]:"ENVMAP_BLENDING_MIX",[wd]:"ENVMAP_BLENDING_ADD"};function ox(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ax[i.combine]||"ENVMAP_BLENDING_NONE"}function lx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function cx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,c=e.fragmentShader,h=ex(e),u=ix(e),m=rx(e),x=ox(e),f=lx(e),v=q_(e),b=Y_(r),P=s.createProgram(),M,p,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Ga).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Ga).join(`
`),p.length>0&&(p+=`
`)):(M=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),p=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",e.envMap?"#define "+x:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?_e.tonemapping_pars_fragment:"",e.toneMapping!==ri?W_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,G_("linearToOutputTexel",e.outputColorSpace),X_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ga).join(`
`)),o=Zh(o),o=rf(o,e),o=af(o,e),c=Zh(c),c=rf(c,e),c=af(c,e),o=of(o),c=of(c),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let z=N+M+o,E=N+p+c,I=ef(s,s.VERTEX_SHADER,z),L=ef(s,s.FRAGMENT_SHADER,E);s.attachShader(P,I),s.attachShader(P,L),e.index0AttributeName!==void 0?s.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function F(X){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(P)||"",Y=s.getShaderInfoLog(I)||"",W=s.getShaderInfoLog(L)||"",Q=j.trim(),lt=Y.trim(),rt=W.trim(),dt=!0,st=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(dt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,I,L);else{let at=sf(s,I,"vertex"),ft=sf(s,L,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+Q+`
`+at+`
`+ft)}else Q!==""?ie("WebGLProgram: Program Info Log:",Q):(lt===""||rt==="")&&(st=!1);st&&(X.diagnostics={runnable:dt,programLog:Q,vertexShader:{log:lt,prefix:M},fragmentShader:{log:rt,prefix:p}})}s.deleteShader(I),s.deleteShader(L),S=new Cr(s,P),U=J_(s,P)}let S;this.getUniforms=function(){return S===void 0&&F(this),S};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(P,B_)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z_++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=I,this.fragmentShader=L,this}var hx=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $h(t),e.set(t,n)),n}},$h=class{constructor(t){this.id=hx++,this.code=t,this.usedTimes=0}};function ux(i){return i===hs||i===Oa||i===Ba}function dx(i,t,e,n,s,r){let o=new ua,c=new Kh,h=new Set,u=[],m=new Map,x=n.logarithmicDepthBuffer,f=n.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return h.add(S),S===0?"uv":`uv${S}`}function P(S,U,V,X,j,Y){let W=X.fog,Q=j.geometry,lt=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?X.environment:null,rt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,dt=t.get(S.envMap||lt,rt),st=dt&&dt.mapping===Ia?dt.image.height:null,at=v[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&ie("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Zt=ft!==void 0?ft.length:0,Xt=0;Q.morphAttributes.position!==void 0&&(Xt=1),Q.morphAttributes.normal!==void 0&&(Xt=2),Q.morphAttributes.color!==void 0&&(Xt=3);let Be,xe,ve,ht;if(at){let ke=bi[at];Be=ke.vertexShader,xe=ke.fragmentShader}else{Be=S.vertexShader,xe=S.fragmentShader;let ke=c.getVertexShaderStage(S),Re=c.getFragmentShaderStage(S);c.update(S,ke,Re),ve=ke.id,ht=Re.id}let xt=i.getRenderTarget(),qt=i.state.buffers.depth.getReversed(),le=j.isInstancedMesh===!0,Vt=j.isBatchedMesh===!0,me=!!S.map,Je=!!S.matcap,ye=!!dt,Ce=!!S.aoMap,ze=!!S.lightMap,ne=!!S.bumpMap&&S.wireframe===!1,ue=!!S.normalMap,Qe=!!S.displacementMap,Le=!!S.emissiveMap,Se=!!S.metalnessMap,Ke=!!S.roughnessMap,H=S.anisotropy>0,oe=S.clearcoat>0,pt=S.dispersion>0,C=S.retroreflectivity>0,y=S.iridescence>0,q=S.sheen>0,nt=S.transmission>0,ct=H&&!!S.anisotropyMap,Ct=oe&&!!S.clearcoatMap,wt=oe&&!!S.clearcoatNormalMap,$=oe&&!!S.clearcoatRoughnessMap,gt=y&&!!S.iridescenceMap,Tt=y&&!!S.iridescenceThicknessMap,zt=q&&!!S.sheenColorMap,Et=q&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,Kt=!!S.specularColorMap,Qt=!!S.specularIntensityMap,ce=nt&&!!S.transmissionMap,G=nt&&!!S.thicknessMap,bt=!!S.gradientMap,mt=!!S.alphaMap,Rt=S.alphaTest>0,Dt=!!S.alphaHash,St=!!S.extensions,$t=ri;S.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&($t=i.toneMapping);let Yt={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:xe,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:ht,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Vt,batchingColor:Vt&&j._colorsTexture!==null,instancing:le,instancingColor:le&&j.instanceColor!==null,instancingMorph:le&&j.morphTexture!==null,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:we.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:me,matcap:Je,envMap:ye,envMapMode:ye&&dt.mapping,envMapCubeUVHeight:st,aoMap:Ce,lightMap:ze,bumpMap:ne,normalMap:ue,displacementMap:Qe,emissiveMap:Le,normalMapObjectSpace:ue&&S.normalMapType===Cd,normalMapTangentSpace:ue&&S.normalMapType===jl,packedNormalMap:ue&&S.normalMapType===jl&&ux(S.normalMap.format),metalnessMap:Se,roughnessMap:Ke,anisotropy:H,anisotropyMap:ct,clearcoat:oe,clearcoatMap:Ct,clearcoatNormalMap:wt,clearcoatRoughnessMap:$,dispersion:pt,retroreflection:C,iridescence:y,iridescenceMap:gt,iridescenceThicknessMap:Tt,sheen:q,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:Pt,specularColorMap:Kt,specularIntensityMap:Qt,transmission:nt,transmissionMap:ce,thicknessMap:G,gradientMap:bt,opaque:S.transparent===!1&&S.blending===Sr&&S.alphaToCoverage===!1,alphaMap:mt,alphaTest:Rt,alphaHash:Dt,combine:S.combine,mapUv:me&&b(S.map.channel),aoMapUv:Ce&&b(S.aoMap.channel),lightMapUv:ze&&b(S.lightMap.channel),bumpMapUv:ne&&b(S.bumpMap.channel),normalMapUv:ue&&b(S.normalMap.channel),displacementMapUv:Qe&&b(S.displacementMap.channel),emissiveMapUv:Le&&b(S.emissiveMap.channel),metalnessMapUv:Se&&b(S.metalnessMap.channel),roughnessMapUv:Ke&&b(S.roughnessMap.channel),anisotropyMapUv:ct&&b(S.anisotropyMap.channel),clearcoatMapUv:Ct&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:wt&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&b(S.sheenRoughnessMap.channel),specularMapUv:Pt&&b(S.specularMap.channel),specularColorMapUv:Kt&&b(S.specularColorMap.channel),specularIntensityMapUv:Qt&&b(S.specularIntensityMap.channel),transmissionMapUv:ce&&b(S.transmissionMap.channel),thicknessMapUv:G&&b(S.thicknessMap.channel),alphaMapUv:mt&&b(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ue||H),vertexNormals:!!Q.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Q.attributes.uv&&(me||mt),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Q.attributes.normal===void 0&&ue===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:qt,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:Xt,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:me&&S.map.isVideoTexture===!0&&we.getTransfer(S.map.colorSpace)===Oe,decodeVideoTextureEmissive:Le&&S.emissiveMap.isVideoTexture===!0&&we.getTransfer(S.emissiveMap.colorSpace)===Oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yi,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:St&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&S.extensions.multiDraw===!0||Vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Yt.vertexUv1s=h.has(1),Yt.vertexUv2s=h.has(2),Yt.vertexUv3s=h.has(3),h.clear(),Yt}function M(S){let U=[];if(S.shaderID?U.push(S.shaderID):(U.push(S.customVertexShaderID),U.push(S.customFragmentShaderID)),S.defines!==void 0)for(let V in S.defines)U.push(V),U.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(p(U,S),N(U,S),U.push(i.outputColorSpace)),U.push(S.customProgramCacheKey),U.join()}function p(S,U){S.push(U.precision),S.push(U.outputColorSpace),S.push(U.envMapMode),S.push(U.envMapCubeUVHeight),S.push(U.mapUv),S.push(U.alphaMapUv),S.push(U.lightMapUv),S.push(U.aoMapUv),S.push(U.bumpMapUv),S.push(U.normalMapUv),S.push(U.displacementMapUv),S.push(U.emissiveMapUv),S.push(U.metalnessMapUv),S.push(U.roughnessMapUv),S.push(U.anisotropyMapUv),S.push(U.clearcoatMapUv),S.push(U.clearcoatNormalMapUv),S.push(U.clearcoatRoughnessMapUv),S.push(U.iridescenceMapUv),S.push(U.iridescenceThicknessMapUv),S.push(U.sheenColorMapUv),S.push(U.sheenRoughnessMapUv),S.push(U.specularMapUv),S.push(U.specularColorMapUv),S.push(U.specularIntensityMapUv),S.push(U.transmissionMapUv),S.push(U.thicknessMapUv),S.push(U.combine),S.push(U.fogExp2),S.push(U.sizeAttenuation),S.push(U.morphTargetsCount),S.push(U.morphAttributeCount),S.push(U.numSunLights),S.push(U.numDirLights),S.push(U.numPointLights),S.push(U.numSpotLights),S.push(U.numSpotLightMaps),S.push(U.numHemiLights),S.push(U.numRectAreaLights),S.push(U.numSunLightShadows),S.push(U.numDirLightShadows),S.push(U.numPointLightShadows),S.push(U.numSpotLightShadows),S.push(U.numSpotLightShadowsWithMaps),S.push(U.numLightProbes),S.push(U.shadowMapType),S.push(U.toneMapping),S.push(U.numClippingPlanes),S.push(U.numClipIntersection),S.push(U.depthPacking)}function N(S,U){o.disableAll(),U.instancing&&o.enable(0),U.instancingColor&&o.enable(1),U.instancingMorph&&o.enable(2),U.matcap&&o.enable(3),U.envMap&&o.enable(4),U.normalMapObjectSpace&&o.enable(5),U.normalMapTangentSpace&&o.enable(6),U.clearcoat&&o.enable(7),U.iridescence&&o.enable(8),U.alphaTest&&o.enable(9),U.vertexColors&&o.enable(10),U.vertexAlphas&&o.enable(11),U.vertexUv1s&&o.enable(12),U.vertexUv2s&&o.enable(13),U.vertexUv3s&&o.enable(14),U.vertexTangents&&o.enable(15),U.anisotropy&&o.enable(16),U.alphaHash&&o.enable(17),U.batching&&o.enable(18),U.dispersion&&o.enable(19),U.retroreflection&&o.enable(24),U.batchingColor&&o.enable(20),U.gradientMap&&o.enable(21),U.packedNormalMap&&o.enable(22),U.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),U.fog&&o.enable(0),U.useFog&&o.enable(1),U.flatShading&&o.enable(2),U.logarithmicDepthBuffer&&o.enable(3),U.reversedDepthBuffer&&o.enable(4),U.skinning&&o.enable(5),U.morphTargets&&o.enable(6),U.morphNormals&&o.enable(7),U.morphColors&&o.enable(8),U.premultipliedAlpha&&o.enable(9),U.shadowMapEnabled&&o.enable(10),U.doubleSided&&o.enable(11),U.flipSided&&o.enable(12),U.useDepthPacking&&o.enable(13),U.dithering&&o.enable(14),U.transmission&&o.enable(15),U.sheen&&o.enable(16),U.opaque&&o.enable(17),U.pointsUvs&&o.enable(18),U.decodeVideoTexture&&o.enable(19),U.decodeVideoTextureEmissive&&o.enable(20),U.alphaToCoverage&&o.enable(21),U.numLightProbeGrids>0&&o.enable(22),U.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function z(S){let U=v[S.type],V;if(U){let X=bi[U];V=Gd.clone(X.uniforms)}else V=S.uniforms;return V}function E(S,U){let V=m.get(U);return V!==void 0?++V.usedTimes:(V=new cx(i,U,S,s),u.push(V),m.set(U,V)),V}function I(S){if(--S.usedTimes===0){let U=u.indexOf(S);u[U]=u[u.length-1],u.pop(),m.delete(S.cacheKey),S.destroy()}}function L(S){c.remove(S)}function F(){c.dispose()}return{getParameters:P,getProgramCacheKey:M,getUniforms:z,acquireProgram:E,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:F}}function fx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,h){i.get(o)[c]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function px(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function cf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let v=0;return f.isInstancedMesh&&(v+=2),f.isSkinnedMesh&&(v+=1),v}function c(f,v,b,P,M,p){let N=i[t];return N===void 0?(N={id:f.id,object:f,geometry:v,material:b,materialVariant:o(f),groupOrder:P,renderOrder:f.renderOrder,z:M,group:p},i[t]=N):(N.id=f.id,N.object=f,N.geometry=v,N.material=b,N.materialVariant=o(f),N.groupOrder=P,N.renderOrder=f.renderOrder,N.z=M,N.group=p),t++,N}function h(f,v,b,P,M,p,N){N.reversedDepth===!0&&(M=-M);let z=c(f,v,b,P,M,p);b.transmission>0?n.push(z):b.transparent===!0?s.push(z):e.push(z)}function u(f,v,b,P,M,p){let N=c(f,v,b,P,M,p);b.transmission>0?n.unshift(N):b.transparent===!0?s.unshift(N):e.unshift(N)}function m(f,v){e.length>1&&e.sort(f||px),n.length>1&&n.sort(v||cf),s.length>1&&s.sort(v||cf)}function x(){for(let f=t,v=i.length;f<v;f++){let b=i[f];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:x,sort:m}}function mx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new hf,i.set(n,[o])):s>=r.length?(o=new hf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function gx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new et,color:new pe};break;case"SpotLight":e={position:new et,direction:new et,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new et,halfWidth:new et,halfHeight:new et};break}return i[t.id]=e,e}}}function _x(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var xx=0;function vx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yx(i){let t=new gx,e=_x(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new et);let s=new et,r=new He,o=new He;function c(u){let m=0,x=0,f=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let v=0,b=0,P=0,M=0,p=0,N=0,z=0,E=0,I=0,L=0,F=0,S=0,U=0,V=0;u.sort(vx);for(let j=0,Y=u.length;j<Y;j++){let W=u[j],Q=W.color,lt=W.intensity,rt=W.distance,dt=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===hs?dt=W.shadow.map.texture:dt=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)m+=Q.r*lt,x+=Q.g*lt,f+=Q.b*lt;else if(W.isLightProbe){for(let st=0;st<9;st++)n.probe[st].addScaledVector(W.sh.coefficients[st],lt);V++}else if(W.isSunLight){let st=t.get(W);if(st.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let at=W.shadow,ft=e.get(W);ft.shadowIntensity=at.intensity,ft.shadowBias=at.bias,ft.shadowNormalBias=at.normalBias,ft.shadowRadius=at.radius,ft.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),n.sunShadow[b]=ft,n.sunShadowMap[b]=dt;let Zt=at.getViewportCount();for(let Xt=0;Xt<Zt;Xt++)n.sunShadowMatrix[P+Xt]=at.getMatrix(Xt),n.sunShadowCascade[P+Xt]=at._cascadeData[Xt];P+=Zt,b++}n.sun[v]=st,v++}else if(W.isDirectionalLight){let st=t.get(W);if(st.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let at=W.shadow,ft=e.get(W);ft.shadowIntensity=at.intensity,ft.shadowBias=at.bias,ft.shadowNormalBias=at.normalBias,ft.shadowRadius=at.radius,ft.shadowMapSize=at.mapSize,n.directionalShadow[M]=ft,n.directionalShadowMap[M]=dt,n.directionalShadowMatrix[M]=W.shadow.matrix,I++}n.directional[M]=st,M++}else if(W.isSpotLight){let st=t.get(W);st.position.setFromMatrixPosition(W.matrixWorld),st.color.copy(Q).multiplyScalar(lt),st.distance=rt,st.coneCos=Math.cos(W.angle),st.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),st.decay=W.decay,n.spot[N]=st;let at=W.shadow;if(W.map&&(n.spotLightMap[S]=W.map,S++,at.updateMatrices(W),W.castShadow&&U++),n.spotLightMatrix[N]=at.matrix,W.castShadow){let ft=e.get(W);ft.shadowIntensity=at.intensity,ft.shadowBias=at.bias,ft.shadowNormalBias=at.normalBias,ft.shadowRadius=at.radius,ft.shadowMapSize=at.mapSize,n.spotShadow[N]=ft,n.spotShadowMap[N]=dt,F++}N++}else if(W.isRectAreaLight){let st=t.get(W);st.color.copy(Q).multiplyScalar(lt),st.halfWidth.set(W.width*.5,0,0),st.halfHeight.set(0,W.height*.5,0),n.rectArea[z]=st,z++}else if(W.isPointLight){let st=t.get(W);if(st.color.copy(W.color).multiplyScalar(W.intensity),st.distance=W.distance,st.decay=W.decay,W.castShadow){let at=W.shadow,ft=e.get(W);ft.shadowIntensity=at.intensity,ft.shadowBias=at.bias,ft.shadowNormalBias=at.normalBias,ft.shadowRadius=at.radius,ft.shadowMapSize=at.mapSize,ft.shadowCameraNear=at.camera.near,ft.shadowCameraFar=at.camera.far,n.pointShadow[p]=ft,n.pointShadowMap[p]=dt,n.pointShadowMatrix[p]=W.shadow.matrix,L++}n.point[p]=st,p++}else if(W.isHemisphereLight){let st=t.get(W);st.skyColor.copy(W.color).multiplyScalar(lt),st.groundColor.copy(W.groundColor).multiplyScalar(lt),n.hemi[E]=st,E++}}z>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=x,n.ambient[2]=f;let X=n.hash;(X.sunLength!==v||X.directionalLength!==M||X.pointLength!==p||X.spotLength!==N||X.rectAreaLength!==z||X.hemiLength!==E||X.numSunShadows!==b||X.numDirectionalShadows!==I||X.numPointShadows!==L||X.numSpotShadows!==F||X.numSpotMaps!==S||X.numLightProbes!==V)&&(n.sun.length=v,n.directional.length=M,n.spot.length=N,n.rectArea.length=z,n.point.length=p,n.hemi.length=E,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=L,n.pointShadowMap.length=L,n.pointShadowMatrix.length=L,n.spotShadow.length=F,n.spotShadowMap.length=F,n.spotLightMatrix.length=F+S-U,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=V,X.sunLength=v,X.directionalLength=M,X.pointLength=p,X.spotLength=N,X.rectAreaLength=z,X.hemiLength=E,X.numSunShadows=b,X.numDirectionalShadows=I,X.numPointShadows=L,X.numSpotShadows=F,X.numSpotMaps=S,X.numLightProbes=V,n.version=xx++)}function h(u,m){let x=0,f=0,v=0,b=0,P=0,M=0,p=m.matrixWorldInverse;for(let N=0,z=u.length;N<z;N++){let E=u[N];if(E.isSunLight){let I=n.sun[x];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(p),x++}else if(E.isDirectionalLight){let I=n.directional[f];I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(p),f++}else if(E.isSpotLight){let I=n.spot[b];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(p),b++}else if(E.isRectAreaLight){let I=n.rectArea[P];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),P++}else if(E.isPointLight){let I=n.point[v];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(p),v++}else if(E.isHemisphereLight){let I=n.hemi[M];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(p),M++}}}return{setup:c,setupView:h,state:n}}function uf(i){let t=new yx(i),e=[],n=[],s=[];function r(f){x.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function c(f){n.push(f)}function h(f){s.push(f)}function u(){t.setup(e)}function m(f){t.setupView(e,f)}let x={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:x,setupLights:u,setupLightsView:m,pushLight:o,pushShadow:c,pushLightProbeGrid:h}}function Mx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),c;return o===void 0?(c=new uf(i),t.set(s,[c])):r>=o.length?(c=new uf(i),o.push(c)):c=o[r],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
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
}`,Tx=[new et(1,0,0),new et(-1,0,0),new et(0,1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1)],wx=[new et(0,-1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1),new et(0,-1,0),new et(0,-1,0)],df=new He,Va=new et,Wh=new et;function Ax(i,t,e){let n=new xr,s=new Ee,r=new Ee,o=new qe,c=new $o,h=new jo,u={},m=e.maxTextureSize,x={[as]:mn,[mn]:as,[yi]:yi},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Sx,fragmentShader:bx}),v=f.clone();v.defines.HORIZONTAL_PASS=1;let b=new kn;b.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Mn(b,f),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ra;let p=this.type;this.render=function(L,F,S){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===dl&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ra);let U=i.getRenderTarget(),V=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Mi),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let Y=p!==this.type;Y&&F.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Q=>Q.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Q=L.length;W<Q;W++){let lt=L[W],rt=lt.shadow;if(rt===void 0){ie("WebGLShadowMap:",lt,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);let dt=rt.getFrameExtents();s.multiply(dt),r.copy(rt.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/dt.x),s.x=r.x*dt.x,rt.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/dt.y),s.y=r.y*dt.y,rt.mapSize.y=r.y));let st=i.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=st,rt.map===null||Y===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===Mr){if(lt.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new Dn(s.x,s.y,{format:hs,type:oi,minFilter:pn,magFilter:pn,generateMipmaps:!1}),rt.map.texture.name=lt.name+".shadowMap",rt.map.depthTexture=new ns(s.x,s.y,Jn),rt.map.depthTexture.name=lt.name+".shadowMapDepth",rt.map.depthTexture.format=gi,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=je,rt.map.depthTexture.magFilter=je}else lt.isPointLight?(rt.map=new sc(s.x),rt.map.depthTexture=new Zo(s.x,ai)):(rt.map=new Dn(s.x,s.y),rt.map.depthTexture=new ns(s.x,s.y,ai)),rt.map.depthTexture.name=lt.name+".shadowMap",rt.map.depthTexture.format=gi,this.type===Ra?(rt.map.depthTexture.compareFunction=st?tc:Ql,rt.map.depthTexture.minFilter=pn,rt.map.depthTexture.magFilter=pn):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=je,rt.map.depthTexture.magFilter=je);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==s.x||rt.map.height!==s.y)&&rt.map.setSize(s.x,s.y);let at=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();lt.isPointLight!==!0&&rt.updateMatrices(lt,S);for(let ft=0;ft<at;ft++){let Zt=rt.getCamera(ft);if(lt.isPointLight){let Xt=rt.camera,Be=rt.matrix,xe=lt.distance||Xt.far;xe!==Xt.far&&(Xt.far=xe,Xt.updateProjectionMatrix()),Va.setFromMatrixPosition(lt.matrixWorld),Xt.position.copy(Va),Wh.copy(Xt.position),Wh.add(Tx[ft]),Xt.up.copy(wx[ft]),Xt.lookAt(Wh),Xt.updateMatrixWorld(),Be.makeTranslation(-Va.x,-Va.y,-Va.z),df.multiplyMatrices(Xt.projectionMatrix,Xt.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(df,Xt.coordinateSystem,Xt.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)i.setRenderTarget(rt.map,ft),i.clear();else{ft===0&&(i.setRenderTarget(rt.map),i.clear());let Xt=rt.getViewport(ft);o.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),j.viewport(o)}n=rt.getFrustum(ft),E(F,S,Zt,lt,this.type)}rt.isPointLightShadow!==!0&&this.type===Mr&&N(rt,S),rt.needsUpdate=!1}p=this.type,M.needsUpdate=!1,i.setRenderTarget(U,V,X)};function N(L,F){let S=t.update(P);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null?L.mapPass=new Dn(s.x,s.y,{format:hs,type:oi}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),f.uniforms.shadow_pass.value=L.map.depthTexture,f.uniforms.resolution.value.set(L.map.width,L.map.height),f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(F,null,S,f,P,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value.set(L.map.width,L.map.height),v.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(F,null,S,v,P,null)}function z(L,F,S,U){let V=null,X=S.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(X!==void 0)V=X;else if(V=S.isPointLight===!0?h:c,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let j=V.uuid,Y=F.uuid,W=u[j];W===void 0&&(W={},u[j]=W);let Q=W[Y];Q===void 0&&(Q=V.clone(),W[Y]=Q,F.addEventListener("dispose",I)),V=Q}if(V.visible=F.visible,V.wireframe=F.wireframe,U===Mr?V.side=F.shadowSide!==null?F.shadowSide:F.side:V.side=F.shadowSide!==null?F.shadowSide:x[F.side],V.alphaMap=F.alphaMap,V.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,V.map=F.map,V.clipShadows=F.clipShadows,V.clippingPlanes=F.clippingPlanes,V.clipIntersection=F.clipIntersection,V.displacementMap=F.displacementMap,V.displacementScale=F.displacementScale,V.displacementBias=F.displacementBias,V.wireframeLinewidth=F.wireframeLinewidth,V.linewidth=F.linewidth,S.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let j=i.properties.get(V);j.light=S}return V}function E(L,F,S,U,V){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&V===Mr)&&(!L.frustumCulled||L.intersectsFrustum(n))){L.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,L.matrixWorld);let Y=t.update(L),W=L.material;if(Array.isArray(W)){let Q=Y.groups;for(let lt=0,rt=Q.length;lt<rt;lt++){let dt=Q[lt],st=W[dt.materialIndex];if(st&&st.visible){let at=z(L,st,U,V);L.onBeforeShadow(i,L,F,S,Y,at,dt),i.renderBufferDirect(S,null,Y,at,L,dt),L.onAfterShadow(i,L,F,S,Y,at,dt)}}}else if(W.visible){let Q=z(L,W,U,V);L.onBeforeShadow(i,L,F,S,Y,Q,null),i.renderBufferDirect(S,null,Y,Q,L,null),L.onAfterShadow(i,L,F,S,Y,Q,null)}}let j=L.children;for(let Y=0,W=j.length;Y<W;Y++)E(j[Y],F,S,U,V)}function I(L){L.target.removeEventListener("dispose",I);for(let S in u){let U=u[S],V=L.target.uuid;V in U&&(U[V].dispose(),delete U[V])}}}function Ex(i,t){function e(){let G=!1,bt=new qe,mt=null,Rt=new qe(0,0,0,0);return{setMask:function(Dt){mt!==Dt&&!G&&(i.colorMask(Dt,Dt,Dt,Dt),mt=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,St,$t,Yt,ke){ke===!0&&(Dt*=Yt,St*=Yt,$t*=Yt),bt.set(Dt,St,$t,Yt),Rt.equals(bt)===!1&&(i.clearColor(Dt,St,$t,Yt),Rt.copy(bt))},reset:function(){G=!1,mt=null,Rt.set(-1,0,0,0)}}}function n(){let G=!1,bt=!1,mt=null,Rt=null,Dt=null;return{setReversed:function(St){if(bt!==St){let $t=t.get("EXT_clip_control");St?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),bt=St;let Yt=Dt;Dt=null,this.setClear(Yt)}},getReversed:function(){return bt},setTest:function(St){St?xt(i.DEPTH_TEST):qt(i.DEPTH_TEST)},setMask:function(St){mt!==St&&!G&&(i.depthMask(St),mt=St)},setFunc:function(St){if(bt&&(St=kd[St]),Rt!==St){switch(St){case No:i.depthFunc(i.NEVER);break;case Uo:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case Oo:i.depthFunc(i.EQUAL);break;case Bo:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=St}},setLocked:function(St){G=St},setClear:function(St){Dt!==St&&(Dt=St,bt&&(St=1-St),i.clearDepth(St))},reset:function(){G=!1,mt=null,Rt=null,Dt=null,bt=!1}}}function s(){let G=!1,bt=null,mt=null,Rt=null,Dt=null,St=null,$t=null,Yt=null,ke=null;return{setTest:function(Re){G||(Re?xt(i.STENCIL_TEST):qt(i.STENCIL_TEST))},setMask:function(Re){bt!==Re&&!G&&(i.stencilMask(Re),bt=Re)},setFunc:function(Re,Un,bn){(mt!==Re||Rt!==Un||Dt!==bn)&&(i.stencilFunc(Re,Un,bn),mt=Re,Rt=Un,Dt=bn)},setOp:function(Re,Un,bn){(St!==Re||$t!==Un||Yt!==bn)&&(i.stencilOp(Re,Un,bn),St=Re,$t=Un,Yt=bn)},setLocked:function(Re){G=Re},setClear:function(Re){ke!==Re&&(i.clearStencil(Re),ke=Re)},reset:function(){G=!1,bt=null,mt=null,Rt=null,Dt=null,St=null,$t=null,Yt=null,ke=null}}}let r=new e,o=new n,c=new s,h=new WeakMap,u=new WeakMap,m={},x={},f={},v=new WeakMap,b=[],P=null,M=!1,p=null,N=null,z=null,E=null,I=null,L=null,F=null,S=new pe(0,0,0),U=0,V=!1,X=null,j=null,Y=null,W=null,Q=null,lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,dt=0,st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(st)[1]),rt=dt>=1):st.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),rt=dt>=2);let at=null,ft={},Zt=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),Be=new qe().fromArray(Zt),xe=new qe().fromArray(Xt);function ve(G,bt,mt,Rt){let Dt=new Uint8Array(4),St=i.createTexture();i.bindTexture(G,St),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<mt;$t++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(bt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return St}let ht={};ht[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),xt(i.DEPTH_TEST),o.setFunc(fr),ne(!1),ue(dh),xt(i.CULL_FACE),Ce(Mi);function xt(G){m[G]!==!0&&(i.enable(G),m[G]=!0)}function qt(G){m[G]!==!1&&(i.disable(G),m[G]=!1)}function le(G,bt){return f[G]!==bt?(i.bindFramebuffer(G,bt),f[G]=bt,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=bt),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Vt(G,bt){let mt=b,Rt=!1;if(G){mt=v.get(bt),mt===void 0&&(mt=[],v.set(bt,mt));let Dt=G.textures;if(mt.length!==Dt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let St=0,$t=Dt.length;St<$t;St++)mt[St]=i.COLOR_ATTACHMENT0+St;mt.length=Dt.length,Rt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(mt)}function me(G){return P!==G?(i.useProgram(G),P=G,!0):!1}let Je={[Is]:i.FUNC_ADD,[od]:i.FUNC_SUBTRACT,[ld]:i.FUNC_REVERSE_SUBTRACT};Je[cd]=i.MIN,Je[hd]=i.MAX;let ye={[ud]:i.ZERO,[dd]:i.ONE,[fd]:i.SRC_COLOR,[gh]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[_d]:i.DST_COLOR,[md]:i.DST_ALPHA,[pd]:i.ONE_MINUS_SRC_COLOR,[_h]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[gd]:i.ONE_MINUS_DST_ALPHA,[yd]:i.CONSTANT_COLOR,[Md]:i.ONE_MINUS_CONSTANT_COLOR,[Sd]:i.CONSTANT_ALPHA,[bd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ce(G,bt,mt,Rt,Dt,St,$t,Yt,ke,Re){if(G===Mi){M===!0&&(qt(i.BLEND),M=!1);return}if(M===!1&&(xt(i.BLEND),M=!0),G!==ad){if(G!==p||Re!==V){if((N!==Is||I!==Is)&&(i.blendEquation(i.FUNC_ADD),N=Is,I=Is),Re)switch(G){case Sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFunc(i.ONE,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",G);break}else switch(G){case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ph:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",G);break}z=null,E=null,L=null,F=null,S.set(0,0,0),U=0,p=G,V=Re}return}Dt=Dt||bt,St=St||mt,$t=$t||Rt,(bt!==N||Dt!==I)&&(i.blendEquationSeparate(Je[bt],Je[Dt]),N=bt,I=Dt),(mt!==z||Rt!==E||St!==L||$t!==F)&&(i.blendFuncSeparate(ye[mt],ye[Rt],ye[St],ye[$t]),z=mt,E=Rt,L=St,F=$t),(Yt.equals(S)===!1||ke!==U)&&(i.blendColor(Yt.r,Yt.g,Yt.b,ke),S.copy(Yt),U=ke),p=G,V=!1}function ze(G,bt){G.side===yi?qt(i.CULL_FACE):xt(i.CULL_FACE);let mt=G.side===mn;bt&&(mt=!mt),ne(mt),G.blending===Sr&&G.transparent===!1?Ce(Mi):Ce(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Rt=G.stencilWrite;c.setTest(Rt),Rt&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Le(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):qt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(G){X!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),X=G)}function ue(G){G!==sd?(xt(i.CULL_FACE),G!==j&&(G===dh?i.cullFace(i.BACK):G===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qt(i.CULL_FACE),j=G}function Qe(G){G!==Y&&(rt&&i.lineWidth(G),Y=G)}function Le(G,bt,mt){G?(xt(i.POLYGON_OFFSET_FILL),(W!==bt||Q!==mt)&&(W=bt,Q=mt,o.getReversed()&&(bt=-bt),i.polygonOffset(bt,mt))):qt(i.POLYGON_OFFSET_FILL)}function Se(G){G?xt(i.SCISSOR_TEST):qt(i.SCISSOR_TEST)}function Ke(G){G===void 0&&(G=i.TEXTURE0+lt-1),at!==G&&(i.activeTexture(G),at=G)}function H(G,bt,mt){mt===void 0&&(at===null?mt=i.TEXTURE0+lt-1:mt=at);let Rt=ft[mt];Rt===void 0&&(Rt={type:void 0,texture:void 0},ft[mt]=Rt),(Rt.type!==G||Rt.texture!==bt)&&(at!==mt&&(i.activeTexture(mt),at=mt),i.bindTexture(G,bt||ht[G]),Rt.type=G,Rt.texture=bt)}function oe(){let G=ft[at];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pt(){try{i.compressedTexImage2D(...arguments)}catch(G){ae("WebGLState:",G)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(G){ae("WebGLState:",G)}}function y(){try{i.texSubImage2D(...arguments)}catch(G){ae("WebGLState:",G)}}function q(){try{i.texSubImage3D(...arguments)}catch(G){ae("WebGLState:",G)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(G){ae("WebGLState:",G)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(G){ae("WebGLState:",G)}}function Ct(){try{i.texStorage2D(...arguments)}catch(G){ae("WebGLState:",G)}}function wt(){try{i.texStorage3D(...arguments)}catch(G){ae("WebGLState:",G)}}function $(){try{i.texImage2D(...arguments)}catch(G){ae("WebGLState:",G)}}function gt(){try{i.texImage3D(...arguments)}catch(G){ae("WebGLState:",G)}}function Tt(G){return x[G]!==void 0?x[G]:i.getParameter(G)}function zt(G,bt){x[G]!==bt&&(i.pixelStorei(G,bt),x[G]=bt)}function Et(G){Be.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Be.copy(G))}function Pt(G){xe.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),xe.copy(G))}function Kt(G,bt){let mt=u.get(bt);mt===void 0&&(mt=new WeakMap,u.set(bt,mt));let Rt=mt.get(G);Rt===void 0&&(Rt=i.getUniformBlockIndex(bt,G.name),mt.set(G,Rt))}function Qt(G,bt){let Rt=u.get(bt).get(G);h.get(bt)!==Rt&&(i.uniformBlockBinding(bt,Rt,G.__bindingPointIndex),h.set(bt,Rt))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},x={},at=null,ft={},f={},v=new WeakMap,b=[],P=null,M=!1,p=null,N=null,z=null,E=null,I=null,L=null,F=null,S=new pe(0,0,0),U=0,V=!1,X=null,j=null,Y=null,W=null,Q=null,Be.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:xt,disable:qt,bindFramebuffer:le,drawBuffers:Vt,useProgram:me,setBlending:Ce,setMaterial:ze,setFlipSided:ne,setCullFace:ue,setLineWidth:Qe,setPolygonOffset:Le,setScissorTest:Se,activeTexture:Ke,bindTexture:H,unbindTexture:oe,compressedTexImage2D:pt,compressedTexImage3D:C,texImage2D:$,texImage3D:gt,pixelStorei:zt,getParameter:Tt,updateUBOMapping:Kt,uniformBlockBinding:Qt,texStorage2D:Ct,texStorage3D:wt,texSubImage2D:y,texSubImage3D:q,compressedTexSubImage2D:nt,compressedTexSubImage3D:ct,scissor:Et,viewport:Pt,reset:ce}}function Cx(i,t,e,n,s,r,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ee,m=new WeakMap,x=new Set,f,v=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(C,y){return b?new OffscreenCanvas(C,y):ca("canvas")}function M(C,y,q){let nt=1,ct=pt(C);if((ct.width>q||ct.height>q)&&(nt=q/Math.max(ct.width,ct.height)),nt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Ct=Math.floor(nt*ct.width),wt=Math.floor(nt*ct.height);f===void 0&&(f=P(Ct,wt));let $=y?P(Ct,wt):f;return $.width=Ct,$.height=wt,$.getContext("2d").drawImage(C,0,0,Ct,wt),ie("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+Ct+"x"+wt+")."),$}else return"data"in C&&ie("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),C;return C}function p(C){return C.generateMipmaps}function N(C){i.generateMipmap(C)}function z(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,y,q,nt,ct,Ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let wt;nt&&(wt=t.get("EXT_texture_norm16"),wt||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===i.RED&&(q===i.FLOAT&&($=i.R32F),q===i.HALF_FLOAT&&($=i.R16F),q===i.UNSIGNED_BYTE&&($=i.R8),q===i.UNSIGNED_SHORT&&wt&&($=wt.R16_EXT),q===i.SHORT&&wt&&($=wt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.R8UI),q===i.UNSIGNED_SHORT&&($=i.R16UI),q===i.UNSIGNED_INT&&($=i.R32UI),q===i.BYTE&&($=i.R8I),q===i.SHORT&&($=i.R16I),q===i.INT&&($=i.R32I)),y===i.RG&&(q===i.FLOAT&&($=i.RG32F),q===i.HALF_FLOAT&&($=i.RG16F),q===i.UNSIGNED_BYTE&&($=i.RG8),q===i.UNSIGNED_SHORT&&wt&&($=wt.RG16_EXT),q===i.SHORT&&wt&&($=wt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RG8UI),q===i.UNSIGNED_SHORT&&($=i.RG16UI),q===i.UNSIGNED_INT&&($=i.RG32UI),q===i.BYTE&&($=i.RG8I),q===i.SHORT&&($=i.RG16I),q===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RGB8UI),q===i.UNSIGNED_SHORT&&($=i.RGB16UI),q===i.UNSIGNED_INT&&($=i.RGB32UI),q===i.BYTE&&($=i.RGB8I),q===i.SHORT&&($=i.RGB16I),q===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RGBA8UI),q===i.UNSIGNED_SHORT&&($=i.RGBA16UI),q===i.UNSIGNED_INT&&($=i.RGBA32UI),q===i.BYTE&&($=i.RGBA8I),q===i.SHORT&&($=i.RGBA16I),q===i.INT&&($=i.RGBA32I)),y===i.RGB&&(q===i.UNSIGNED_SHORT&&wt&&($=wt.RGB16_EXT),q===i.SHORT&&wt&&($=wt.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),y===i.RGBA){let gt=Ct?la:we.getTransfer(ct);q===i.FLOAT&&($=i.RGBA32F),q===i.HALF_FLOAT&&($=i.RGBA16F),q===i.UNSIGNED_BYTE&&($=gt===Oe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&wt&&($=wt.RGBA16_EXT),q===i.SHORT&&wt&&($=wt.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function I(C,y){let q;return C?y===null||y===ai||y===Tr?q=i.DEPTH24_STENCIL8:y===Jn?q=i.DEPTH32F_STENCIL8:y===br&&(q=i.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ai||y===Tr?q=i.DEPTH_COMPONENT24:y===Jn?q=i.DEPTH_COMPONENT32F:y===br&&(q=i.DEPTH_COMPONENT16),q}function L(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==je&&C.minFilter!==pn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function F(C){let y=C.target;y.removeEventListener("dispose",F),U(y),y.isVideoTexture&&m.delete(y),y.isHTMLTexture&&x.delete(y)}function S(C){let y=C.target;y.removeEventListener("dispose",S),X(y)}function U(C){let y=n.get(C);if(y.__webglInit===void 0)return;let q=C.source,nt=v.get(q);if(nt){let ct=nt[y.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&V(C),Object.keys(nt).length===0&&v.delete(q)}n.remove(C)}function V(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let q=C.source,nt=v.get(q);delete nt[y.__cacheKey],o.memory.textures--}function X(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(y.__webglFramebuffer[nt]))for(let ct=0;ct<y.__webglFramebuffer[nt].length;ct++)i.deleteFramebuffer(y.__webglFramebuffer[nt][ct]);else i.deleteFramebuffer(y.__webglFramebuffer[nt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[nt])}else{if(Array.isArray(y.__webglFramebuffer))for(let nt=0;nt<y.__webglFramebuffer.length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[nt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let nt=0;nt<y.__webglColorRenderbuffer.length;nt++)y.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[nt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let q=C.textures;for(let nt=0,ct=q.length;nt<ct;nt++){let Ct=n.get(q[nt]);Ct.__webglTexture&&(i.deleteTexture(Ct.__webglTexture),o.memory.textures--),n.remove(q[nt])}n.remove(C)}let j=0;function Y(){j=0}function W(){return j}function Q(C){j=C}function lt(){let C=j;return C>=s.maxTextures&&ie("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),j+=1,C}function rt(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function dt(C,y){let q=n.get(C);if(C.isVideoTexture&&H(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){let nt=C.image;if(nt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{qt(q,C,y);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function st(C,y){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){qt(q,C,y);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function at(C,y){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){qt(q,C,y);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function ft(C,y){let q=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&q.__version!==C.version){le(q,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}let Zt={[Vo]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},Xt={[je]:i.NEAREST,[Ad]:i.NEAREST_MIPMAP_NEAREST,[La]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[ml]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},Be={[Pd]:i.NEVER,[Ud]:i.ALWAYS,[Id]:i.LESS,[Ql]:i.LEQUAL,[Ld]:i.EQUAL,[tc]:i.GEQUAL,[Dd]:i.GREATER,[Nd]:i.NOTEQUAL};function xe(C,y){if(y.type===Jn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===pn||y.magFilter===ml||y.magFilter===La||y.magFilter===ls||y.minFilter===pn||y.minFilter===ml||y.minFilter===La||y.minFilter===ls)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Zt[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Zt[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Zt[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Xt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Xt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Be[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===je||y.minFilter!==La&&y.minFilter!==ls||y.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ve(C,y){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",F));let nt=y.source,ct=v.get(nt);ct===void 0&&(ct={},v.set(nt,ct));let Ct=rt(y);if(Ct!==C.__cacheKey){ct[Ct]===void 0&&(ct[Ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ct[Ct].usedTimes++;let wt=ct[C.__cacheKey];wt!==void 0&&(ct[C.__cacheKey].usedTimes--,wt.usedTimes===0&&V(y)),C.__cacheKey=Ct,C.__webglTexture=ct[Ct].texture}return q}function ht(C,y,q){return Math.floor(Math.floor(C/q)/y)}function xt(C,y,q,nt){let Ct=C.updateRanges;if(Ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,q,nt,y.data);else{Ct.sort((zt,Et)=>zt.start-Et.start);let wt=0;for(let zt=1;zt<Ct.length;zt++){let Et=Ct[wt],Pt=Ct[zt],Kt=Et.start+Et.count,Qt=ht(Pt.start,y.width,4),ce=ht(Et.start,y.width,4);Pt.start<=Kt+1&&Qt===ce&&ht(Pt.start+Pt.count-1,y.width,4)===Qt?Et.count=Math.max(Et.count,Pt.start+Pt.count-Et.start):(++wt,Ct[wt]=Pt)}Ct.length=wt+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),gt=e.getParameter(i.UNPACK_SKIP_PIXELS),Tt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let zt=0,Et=Ct.length;zt<Et;zt++){let Pt=Ct[zt],Kt=Math.floor(Pt.start/4),Qt=Math.ceil(Pt.count/4),ce=Kt%y.width,G=Math.floor(Kt/y.width),bt=Qt,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,ce,G,bt,mt,q,nt,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function qt(C,y,q){let nt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=i.TEXTURE_3D);let ct=ve(C,y),Ct=y.source;e.bindTexture(nt,C.__webglTexture,i.TEXTURE0+q);let wt=n.get(Ct);if(Ct.version!==wt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let mt=we.getPrimaries(we.workingColorSpace),Rt=y.colorSpace===Fi?null:we.getPrimaries(y.colorSpace),Dt=y.colorSpace===Fi||mt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let gt=M(y.image,!1,s.maxTextureSize);gt=oe(y,gt);let Tt=r.convert(y.format,y.colorSpace),zt=r.convert(y.type),Et=E(y.internalFormat,Tt,zt,y.normalized,y.colorSpace,y.isVideoTexture);xe(nt,y);let Pt,Kt=y.mipmaps,Qt=y.isVideoTexture!==!0,ce=wt.__version===void 0||ct===!0,G=Ct.dataReady,bt=L(y,gt);if(y.isDepthTexture)Et=I(y.format===cs,y.type),ce&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Et,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Et,gt.width,gt.height,0,Tt,zt,null));else if(y.isDataTexture)if(Kt.length>0){Qt&&ce&&e.texStorage2D(i.TEXTURE_2D,bt,Et,Kt[0].width,Kt[0].height);for(let mt=0,Rt=Kt.length;mt<Rt;mt++)Pt=Kt[mt],Qt?G&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Pt.width,Pt.height,Tt,zt,Pt.data):e.texImage2D(i.TEXTURE_2D,mt,Et,Pt.width,Pt.height,0,Tt,zt,Pt.data);y.generateMipmaps=!1}else Qt?(ce&&e.texStorage2D(i.TEXTURE_2D,bt,Et,gt.width,gt.height),G&&xt(y,gt,Tt,zt)):e.texImage2D(i.TEXTURE_2D,0,Et,gt.width,gt.height,0,Tt,zt,gt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Et,Kt[0].width,Kt[0].height,gt.depth);for(let mt=0,Rt=Kt.length;mt<Rt;mt++)if(Pt=Kt[mt],y.format!==Zn)if(Tt!==null)if(Qt){if(G)if(y.layerUpdates.size>0){let Dt=Bh(Pt.width,Pt.height,y.format,y.type);for(let St of y.layerUpdates){let $t=Pt.data.subarray(St*Dt/Pt.data.BYTES_PER_ELEMENT,(St+1)*Dt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,St,Pt.width,Pt.height,1,Tt,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Pt.width,Pt.height,gt.depth,Tt,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Et,Pt.width,Pt.height,gt.depth,0,Pt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Pt.width,Pt.height,gt.depth,Tt,zt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Et,Pt.width,Pt.height,gt.depth,0,Tt,zt,Pt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Qt&&ce&&e.texStorage2D(i.TEXTURE_2D,bt,Et,Kt[0].width,Kt[0].height);for(let mt=0,Rt=Kt.length;mt<Rt;mt++)Pt=Kt[mt],y.format!==Zn?Tt!==null?Qt?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Pt.width,Pt.height,Tt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Et,Pt.width,Pt.height,0,Pt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?G&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Pt.width,Pt.height,Tt,zt,Pt.data):e.texImage2D(i.TEXTURE_2D,mt,Et,Pt.width,Pt.height,0,Tt,zt,Pt.data)}else if(y.isDataArrayTexture)if(Qt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Et,gt.width,gt.height,gt.depth),G)if(y.layerUpdates.size>0){let mt=Bh(gt.width,gt.height,y.format,y.type);for(let Rt of y.layerUpdates){let Dt=gt.data.subarray(Rt*mt/gt.data.BYTES_PER_ELEMENT,(Rt+1)*mt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,gt.width,gt.height,1,Tt,zt,Dt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Tt,zt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,gt.width,gt.height,gt.depth,0,Tt,zt,gt.data);else if(y.isData3DTexture)Qt?(ce&&e.texStorage3D(i.TEXTURE_3D,bt,Et,gt.width,gt.height,gt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Tt,zt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Et,gt.width,gt.height,gt.depth,0,Tt,zt,gt.data);else if(y.isFramebufferTexture){if(ce)if(Qt)e.texStorage2D(i.TEXTURE_2D,bt,Et,gt.width,gt.height);else{let mt=gt.width,Rt=gt.height;for(let Dt=0;Dt<bt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Et,mt,Rt,0,Tt,zt,null),mt>>=1,Rt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),gt.parentNode!==mt){mt.appendChild(gt),x.add(y),mt.onpaint=Rt=>{let Dt=Rt.changedElements;for(let St of x)Dt.includes(St.image)&&(St.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,gt);else{let Dt=i.RGBA,St=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Dt,St,$t,gt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Kt.length>0){if(Qt&&ce){let mt=pt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,bt,Et,mt.width,mt.height)}for(let mt=0,Rt=Kt.length;mt<Rt;mt++)Pt=Kt[mt],Qt?G&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Tt,zt,Pt):e.texImage2D(i.TEXTURE_2D,mt,Et,Tt,zt,Pt);y.generateMipmaps=!1}else if(Qt){if(ce){let mt=pt(gt);e.texStorage2D(i.TEXTURE_2D,bt,Et,mt.width,mt.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,zt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Et,Tt,zt,gt);p(y)&&N(nt),wt.__version=Ct.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function le(C,y,q){if(y.image.length!==6)return;let nt=ve(C,y),ct=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let Ct=n.get(ct);if(ct.version!==Ct.__version||nt===!0){e.activeTexture(i.TEXTURE0+q);let wt=we.getPrimaries(we.workingColorSpace),$=y.colorSpace===Fi?null:we.getPrimaries(y.colorSpace),gt=y.colorSpace===Fi||wt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Tt=y.isCompressedTexture||y.image[0].isCompressedTexture,zt=y.image[0]&&y.image[0].isDataTexture,Et=[];for(let St=0;St<6;St++)!Tt&&!zt?Et[St]=M(y.image[St],!0,s.maxCubemapSize):Et[St]=zt?y.image[St].image:y.image[St],Et[St]=oe(y,Et[St]);let Pt=Et[0],Kt=r.convert(y.format,y.colorSpace),Qt=r.convert(y.type),ce=E(y.internalFormat,Kt,Qt,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,bt=Ct.__version===void 0||nt===!0,mt=ct.dataReady,Rt=L(y,Pt);xe(i.TEXTURE_CUBE_MAP,y);let Dt;if(Tt){G&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,ce,Pt.width,Pt.height);for(let St=0;St<6;St++){Dt=Et[St].mipmaps;for(let $t=0;$t<Dt.length;$t++){let Yt=Dt[$t];y.format!==Zn?Kt!==null?G?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t,0,0,Yt.width,Yt.height,Kt,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t,ce,Yt.width,Yt.height,0,Yt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t,0,0,Yt.width,Yt.height,Kt,Qt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t,ce,Yt.width,Yt.height,0,Kt,Qt,Yt.data)}}}else{if(Dt=y.mipmaps,G&&bt){Dt.length>0&&Rt++;let St=pt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,ce,St.width,St.height)}for(let St=0;St<6;St++)if(zt){G?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Et[St].width,Et[St].height,Kt,Qt,Et[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,Et[St].width,Et[St].height,0,Kt,Qt,Et[St].data);for(let $t=0;$t<Dt.length;$t++){let ke=Dt[$t].image[St].image;G?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t+1,0,0,ke.width,ke.height,Kt,Qt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t+1,ce,ke.width,ke.height,0,Kt,Qt,ke.data)}}else{G?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Kt,Qt,Et[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,Kt,Qt,Et[St]);for(let $t=0;$t<Dt.length;$t++){let Yt=Dt[$t];G?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t+1,0,0,Kt,Qt,Yt.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t+1,ce,Kt,Qt,Yt.image[St])}}}p(y)&&N(i.TEXTURE_CUBE_MAP),Ct.__version=ct.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Vt(C,y,q,nt,ct,Ct){let wt=r.convert(q.format,q.colorSpace),$=r.convert(q.type),gt=E(q.internalFormat,wt,$,q.normalized,q.colorSpace),Tt=n.get(y),zt=n.get(q);if(zt.__renderTarget=y,!Tt.__hasExternalTextures){let Et=Math.max(1,y.width>>Ct),Pt=Math.max(1,y.height>>Ct);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,Ct,gt,Et,Pt,y.depth,0,wt,$,null):e.texImage2D(ct,Ct,gt,Et,Pt,0,wt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Ke(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ct,zt.__webglTexture,0,Se(y)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ct,zt.__webglTexture,Ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(C,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let nt=y.depthTexture,ct=nt&&nt.isDepthTexture?nt.type:null,Ct=I(y.stencilBuffer,ct),wt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ke(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(y),Ct,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(y),Ct,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,C)}else{let nt=y.textures;for(let ct=0;ct<nt.length;ct++){let Ct=nt[ct],wt=r.convert(Ct.format,Ct.colorSpace),$=r.convert(Ct.type),gt=E(Ct.internalFormat,wt,$,Ct.normalized,Ct.colorSpace);Ke(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(y),gt,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(y),gt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,gt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(C,y,q){let nt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(y.depthTexture);if(ct.__renderTarget=y,(!ct.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),nt){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),xe(i.TEXTURE_CUBE_MAP,y.depthTexture);let Tt=r.convert(y.depthTexture.format),zt=r.convert(y.depthTexture.type),Et;y.depthTexture.format===gi?Et=i.DEPTH_COMPONENT24:y.depthTexture.format===cs&&(Et=i.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Et,y.width,y.height,0,Tt,zt,null)}}else dt(y.depthTexture,0);let Ct=ct.__webglTexture,wt=Se(y),$=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,gt=y.depthTexture.format===cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===gi)Ke(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,$,Ct,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,gt,$,Ct,0);else if(y.depthTexture.format===cs)Ke(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,$,Ct,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,gt,$,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(C){let y=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let nt=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){let ct=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",ct)};nt.addEventListener("dispose",ct),y.__depthDisposeCallback=ct}y.__boundDepthTexture=nt}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let nt=0;nt<6;nt++)Je(y.__webglFramebuffer[nt],C,nt);else{let nt=C.texture.mipmaps;nt&&nt.length>0?Je(y.__webglFramebuffer[0],C,0):Je(y.__webglFramebuffer,C,0)}else if(q){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=i.createRenderbuffer(),me(y.__webglDepthbuffer[nt],C,!1);else{let ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=y.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Ct)}}else{let nt=C.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),me(y.__webglDepthbuffer,C,!1);else{let ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(C,y,q){let nt=n.get(C);y!==void 0&&Vt(nt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ye(C)}function ze(C){let y=C.texture,q=n.get(C),nt=n.get(y);C.addEventListener("dispose",S);let ct=C.textures,Ct=C.isWebGLCubeRenderTarget===!0,wt=ct.length>1;if(wt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=y.version,o.memory.textures++),Ct){q.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[$]=[];for(let gt=0;gt<y.mipmaps.length;gt++)q.__webglFramebuffer[$][gt]=i.createFramebuffer()}else q.__webglFramebuffer[$]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)q.__webglFramebuffer[$]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(wt)for(let $=0,gt=ct.length;$<gt;$++){let Tt=n.get(ct[$]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ke(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let $=0;$<ct.length;$++){let gt=ct[$];q.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[$]);let Tt=r.convert(gt.format,gt.colorSpace),zt=r.convert(gt.type),Et=E(gt.internalFormat,Tt,zt,gt.normalized,gt.colorSpace,C.isXRRenderTarget===!0),Pt=Se(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Et,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,q.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),me(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ct){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),xe(i.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)Vt(q.__webglFramebuffer[$][gt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt);else Vt(q.__webglFramebuffer[$],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(y)&&N(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let $=0,gt=ct.length;$<gt;$++){let Tt=ct[$],zt=n.get(Tt),Et=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Et=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,zt.__webglTexture),xe(Et,Tt),Vt(q.__webglFramebuffer,C,Tt,i.COLOR_ATTACHMENT0+$,Et,0),p(Tt)&&N(Et)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,nt.__webglTexture),xe($,y),y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)Vt(q.__webglFramebuffer[gt],C,y,i.COLOR_ATTACHMENT0,$,gt);else Vt(q.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,$,0);p(y)&&N($),e.unbindTexture()}C.depthBuffer&&ye(C)}function ne(C){let y=C.textures;for(let q=0,nt=y.length;q<nt;q++){let ct=y[q];if(p(ct)){let Ct=z(C),wt=n.get(ct).__webglTexture;e.bindTexture(Ct,wt),N(Ct),e.unbindTexture()}}}let ue=[],Qe=[];function Le(C){if(C.samples>0){if(Ke(C)===!1){let y=C.textures,q=C.width,nt=C.height,ct=i.COLOR_BUFFER_BIT,Ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(C),$=y.length>1;if($)for(let Tt=0;Tt<y.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let gt=C.texture.mipmaps;gt&&gt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Tt=0;Tt<y.length;Tt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);let zt=n.get(y[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,q,nt,0,0,q,nt,ct,i.NEAREST),h===!0&&(ue.length=0,Qe.length=0,ue.push(i.COLOR_ATTACHMENT0+Tt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ue.push(Ct),Qe.push(Ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let Tt=0;Tt<y.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);let zt=n.get(y[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&h){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Se(C){return Math.min(s.maxSamples,C.samples)}function Ke(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function H(C){let y=o.render.frame;m.get(C)!==y&&(m.set(C,y),C.update())}function oe(C,y){let q=C.colorSpace,nt=C.format,ct=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==oa&&q!==Fi&&(we.getTransfer(q)===Oe?(nt!==Zn||ct!==Nn)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",q)),y}function pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=lt,this.resetTextureUnits=Y,this.getTextureUnits=W,this.setTextureUnits=Q,this.setTexture2D=dt,this.setTexture2DArray=st,this.setTexture3D=at,this.setTextureCube=ft,this.rebindTextures=Ce,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Rx(i,t){function e(n,s=Fi){let r,o=we.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ah)return i.BYTE;if(n===Eh)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===Ph)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Zn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===wr)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===Da||n===Na||n===Ua||n===Fa)if(o===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===bl||n===Tl||n===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===El||n===Cl||n===Rl||n===Pl||n===Oa||n===Il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===El)return o===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rl)return r.COMPRESSED_R11_EAC;if(n===Pl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Oa)return r.COMPRESSED_RG11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ll)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ql||n===Yl||n===Jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ql)return o===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Kl||n===Ba||n===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ix=`
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

}`,jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ya(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Rn({vertexShader:Px,fragmentShader:Ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mn(new Ma(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qh=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,o=null,c="local-floor",h=1,u=null,m=null,x=null,f=null,v=null,b=null,P=typeof XRWebGLBinding<"u",M=new jh,p={},N=e.getContextAttributes(),z=null,E=null,I=[],L=[],F=new Ee,S=null,U=null,V=new vn;V.viewport=new qe;let X=new vn;X.viewport=new qe;let j=[V,X],Y=new ul,W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ht){let xt=I[ht];return xt===void 0&&(xt=new _r,I[ht]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(ht){let xt=I[ht];return xt===void 0&&(xt=new _r,I[ht]=xt),xt.getGripSpace()},this.getHand=function(ht){let xt=I[ht];return xt===void 0&&(xt=new _r,I[ht]=xt),xt.getHandSpace()};function lt(ht){let xt=L.indexOf(ht.inputSource);if(xt===-1)return;let qt=I[xt];qt!==void 0&&(qt.update(ht.inputSource,ht.frame,u||o),qt.dispatchEvent({type:ht.type,data:ht.inputSource}))}function rt(){s.removeEventListener("select",lt),s.removeEventListener("selectstart",lt),s.removeEventListener("selectend",lt),s.removeEventListener("squeeze",lt),s.removeEventListener("squeezestart",lt),s.removeEventListener("squeezeend",lt),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",dt);for(let ht=0;ht<I.length;ht++){let xt=L[ht];xt!==null&&(L[ht]=null,I[ht].disconnect(xt))}W=null,Q=null,M.reset();for(let ht in p)delete p[ht];if(t.setRenderTarget(z),v=null,f=null,x=null,s=null,E=null,ve.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(F.width,F.height,!1),U!==null){let ht=U.camera;ht.fov=U.fov,ht.zoom=U.zoom,ht.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ht){r=ht,n.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ht){c=ht,n.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ht){u=ht},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return x===null&&P&&(x=new XRWebGLBinding(s,e)),x},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(ht){if(s=ht,s!==null){if(z=t.getRenderTarget(),s.addEventListener("select",lt),s.addEventListener("selectstart",lt),s.addEventListener("selectend",lt),s.addEventListener("squeeze",lt),s.addEventListener("squeezestart",lt),s.addEventListener("squeezeend",lt),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",dt),N.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(F),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let qt=null,le=null,Vt=null;N.depth&&(Vt=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,qt=N.stencil?cs:gi,le=N.stencil?Tr:ai);let me={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:r};x=this.getBinding(),f=x.createProjectionLayer(me),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Dn(f.textureWidth,f.textureHeight,{format:Zn,type:Nn,depthTexture:new ns(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,qt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let qt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(s,e,qt),s.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),E=new Dn(v.framebufferWidth,v.framebufferHeight,{format:Zn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await s.requestReferenceSpace(c),ve.setContext(s),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function dt(ht){for(let xt=0;xt<ht.removed.length;xt++){let qt=ht.removed[xt],le=L.indexOf(qt);le>=0&&(L[le]=null,I[le].disconnect(qt))}for(let xt=0;xt<ht.added.length;xt++){let qt=ht.added[xt],le=L.indexOf(qt);if(le===-1){for(let me=0;me<I.length;me++)if(me>=L.length){L.push(qt),le=me;break}else if(L[me]===null){L[me]=qt,le=me;break}if(le===-1)break}let Vt=I[le];Vt&&Vt.connect(qt)}}let st=new et,at=new et;function ft(ht,xt,qt){st.setFromMatrixPosition(xt.matrixWorld),at.setFromMatrixPosition(qt.matrixWorld);let le=st.distanceTo(at),Vt=xt.projectionMatrix.elements,me=qt.projectionMatrix.elements,Je=Vt[14]/(Vt[10]-1),ye=Vt[14]/(Vt[10]+1),Ce=(Vt[9]+1)/Vt[5],ze=(Vt[9]-1)/Vt[5],ne=(Vt[8]-1)/Vt[0],ue=(me[8]+1)/me[0],Qe=Je*ne,Le=Je*ue,Se=le/(-ne+ue),Ke=Se*-ne;if(xt.matrixWorld.decompose(ht.position,ht.quaternion,ht.scale),ht.translateX(Ke),ht.translateZ(Se),ht.matrixWorld.compose(ht.position,ht.quaternion,ht.scale),ht.matrixWorldInverse.copy(ht.matrixWorld).invert(),Vt[10]===-1)ht.projectionMatrix.copy(xt.projectionMatrix),ht.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{let H=Je+Se,oe=ye+Se,pt=Qe-Ke,C=Le+(le-Ke),y=Ce*ye/oe*H,q=ze*ye/oe*H;ht.projectionMatrix.makePerspective(pt,C,y,q,H,oe),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert()}}function Zt(ht,xt){xt===null?ht.matrixWorld.copy(ht.matrix):ht.matrixWorld.multiplyMatrices(xt.matrixWorld,ht.matrix),ht.matrixWorldInverse.copy(ht.matrixWorld).invert()}this.updateCamera=function(ht){if(s===null)return;let xt=ht.near,qt=ht.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(qt=M.depthFar)),Y.near=X.near=V.near=xt,Y.far=X.far=V.far=qt,(W!==Y.near||Q!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),W=Y.near,Q=Y.far),Y.layers.mask=ht.layers.mask|6,V.layers.mask=Y.layers.mask&-5,X.layers.mask=Y.layers.mask&-3;let le=ht.parent,Vt=Y.cameras;Zt(Y,le);for(let me=0;me<Vt.length;me++)Zt(Vt[me],le);Vt.length===2?ft(Y,V,X):Y.projectionMatrix.copy(V.projectionMatrix),U===null&&ht.isPerspectiveCamera&&(U={camera:ht,fov:ht.fov,zoom:ht.zoom}),Xt(ht,Y,le)};function Xt(ht,xt,qt){qt===null?ht.matrix.copy(xt.matrixWorld):(ht.matrix.copy(qt.matrixWorld),ht.matrix.invert(),ht.matrix.multiply(xt.matrixWorld)),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.updateMatrixWorld(!0),ht.projectionMatrix.copy(xt.projectionMatrix),ht.projectionMatrixInverse.copy(xt.projectionMatrixInverse),ht.isPerspectiveCamera&&(ht.fov=Wo*2*Math.atan(1/ht.projectionMatrix.elements[5]),ht.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(f===null&&v===null))return h},this.setFoveation=function(ht){h=ht,f!==null&&(f.fixedFoveation=ht),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ht)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(ht){return p[ht]};let Be=null;function xe(ht,xt){if(m=xt.getViewerPose(u||o),b=xt,m!==null){let qt=m.views;v!==null&&(t.setRenderTargetFramebuffer(E,v.framebuffer),t.setRenderTarget(E));let le=!1;qt.length!==Y.cameras.length&&(Y.cameras.length=0,le=!0);for(let ye=0;ye<qt.length;ye++){let Ce=qt[ye],ze=null;if(v!==null)ze=v.getViewport(Ce);else{let ue=x.getViewSubImage(f,Ce);ze=ue.viewport,ye===0&&(t.setRenderTargetTextures(E,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(E))}let ne=j[ye];ne===void 0&&(ne=new vn,ne.layers.enable(ye),ne.viewport=new qe,j[ye]=ne),ne.matrix.fromArray(Ce.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Ce.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ze.x,ze.y,ze.width,ze.height),ye===0&&(Y.matrix.copy(ne.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),le===!0&&Y.cameras.push(ne)}let Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){x=n.getBinding();let ye=x.getDepthInformation(qt[0]);ye&&ye.isValid&&ye.texture&&M.init(ye,s.renderState)}if(Vt&&Vt.includes("camera-access")&&P){t.state.unbindTexture(),x=n.getBinding();for(let ye=0;ye<qt.length;ye++){let Ce=qt[ye].camera;if(Ce){let ze=p[Ce];ze||(ze=new ya,p[Ce]=ze);let ne=x.getCameraImage(Ce);ze.sourceTexture=ne}}}}for(let qt=0;qt<I.length;qt++){let le=L[qt],Vt=I[qt];le!==null&&Vt!==void 0&&Vt.update(le,xt,u||o)}Be&&Be(ht,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),b=null}let ve=new ff;ve.setAnimationLoop(xe),this.setAnimationLoop=function(ht){Be=ht},this.dispose=function(){}}},Lx=new He,vf=new he;vf.set(-1,0,0,0,1,0,0,0,1);function Dx(i,t){function e(M,p){M.matrixAutoUpdate===!0&&M.updateMatrix(),p.value.copy(M.matrix)}function n(M,p){p.color.getRGB(M.fogColor.value,Uh(i)),p.isFog?(M.fogNear.value=p.near,M.fogFar.value=p.far):p.isFogExp2&&(M.fogDensity.value=p.density)}function s(M,p,N,z,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(M,p):p.isMeshLambertMaterial?(r(M,p),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(M,p),x(M,p)):p.isMeshPhongMaterial?(r(M,p),m(M,p),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(M,p),f(M,p),p.isMeshPhysicalMaterial&&v(M,p,E)):p.isMeshMatcapMaterial?(r(M,p),b(M,p)):p.isMeshDepthMaterial?r(M,p):p.isMeshDistanceMaterial?(r(M,p),P(M,p)):p.isMeshNormalMaterial?r(M,p):p.isLineBasicMaterial?(o(M,p),p.isLineDashedMaterial&&c(M,p)):p.isPointsMaterial?h(M,p,N,z):p.isSpriteMaterial?u(M,p):p.isShadowMaterial?(M.color.value.copy(p.color),M.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(M,p){M.opacity.value=p.opacity,p.color&&M.diffuse.value.copy(p.color),p.emissive&&M.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(M.map.value=p.map,e(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,e(p.alphaMap,M.alphaMapTransform)),p.bumpMap&&(M.bumpMap.value=p.bumpMap,e(p.bumpMap,M.bumpMapTransform),M.bumpScale.value=p.bumpScale,p.side===mn&&(M.bumpScale.value*=-1)),p.normalMap&&(M.normalMap.value=p.normalMap,e(p.normalMap,M.normalMapTransform),M.normalScale.value.copy(p.normalScale),p.side===mn&&M.normalScale.value.negate()),p.displacementMap&&(M.displacementMap.value=p.displacementMap,e(p.displacementMap,M.displacementMapTransform),M.displacementScale.value=p.displacementScale,M.displacementBias.value=p.displacementBias),p.emissiveMap&&(M.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,M.emissiveMapTransform)),p.specularMap&&(M.specularMap.value=p.specularMap,e(p.specularMap,M.specularMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest);let N=t.get(p),z=N.envMap,E=N.envMapRotation;z&&(M.envMap.value=z,M.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(E)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(vf),M.reflectivity.value=p.reflectivity,M.ior.value=p.ior,M.refractionRatio.value=p.refractionRatio),p.lightMap&&(M.lightMap.value=p.lightMap,M.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,M.lightMapTransform)),p.aoMap&&(M.aoMap.value=p.aoMap,M.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,M.aoMapTransform))}function o(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,p.map&&(M.map.value=p.map,e(p.map,M.mapTransform))}function c(M,p){M.dashSize.value=p.dashSize,M.totalSize.value=p.dashSize+p.gapSize,M.scale.value=p.scale}function h(M,p,N,z){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.size.value=p.size*N,M.scale.value=z*.5,p.map&&(M.map.value=p.map,e(p.map,M.uvTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,e(p.alphaMap,M.alphaMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function u(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.rotation.value=p.rotation,p.map&&(M.map.value=p.map,e(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,e(p.alphaMap,M.alphaMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function m(M,p){M.specular.value.copy(p.specular),M.shininess.value=Math.max(p.shininess,1e-4)}function x(M,p){p.gradientMap&&(M.gradientMap.value=p.gradientMap)}function f(M,p){M.metalness.value=p.metalness,p.metalnessMap&&(M.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,M.metalnessMapTransform)),M.roughness.value=p.roughness,p.roughnessMap&&(M.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,M.roughnessMapTransform)),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)}function v(M,p,N){M.ior.value=p.ior,p.sheen>0&&(M.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),M.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(M.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,M.sheenColorMapTransform)),p.sheenRoughnessMap&&(M.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,M.sheenRoughnessMapTransform))),p.clearcoat>0&&(M.clearcoat.value=p.clearcoat,M.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(M.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,M.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(M.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&M.clearcoatNormalScale.value.negate())),p.dispersion>0&&(M.dispersion.value=p.dispersion),p.retroreflectivity>0&&(M.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(M.iridescence.value=p.iridescence,M.iridescenceIOR.value=p.iridescenceIOR,M.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(M.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,M.iridescenceMapTransform)),p.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),p.transmission>0&&(M.transmission.value=p.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),p.transmissionMap&&(M.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,M.transmissionMapTransform)),M.thickness.value=p.thickness,p.thicknessMap&&(M.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=p.attenuationDistance,M.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(M.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(M.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=p.specularIntensity,M.specularColor.value.copy(p.specularColor),p.specularColorMap&&(M.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,M.specularColorMapTransform)),p.specularIntensityMap&&(M.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,p){p.matcap&&(M.matcap.value=p.matcap)}function P(M,p){let N=t.get(p).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nx(i,t,e,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(E,I){let L=I.program;n.uniformBlockBinding(E,L)}function u(E,I){let L=s[E.id];L===void 0&&(M(E),L=m(E),s[E.id]=L,E.addEventListener("dispose",N));let F=I.program;n.updateUBOMapping(E,F);let S=t.render.frame;r[E.id]!==S&&(f(E),r[E.id]=S)}function m(E){let I=x();E.__bindingPointIndex=I;let L=i.createBuffer(),F=E.__size,S=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,F,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,L),L}function x(){for(let E=0;E<c;E++)if(o.indexOf(E)===-1)return o.push(E),E;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let I=s[E.id],L=E.uniforms,F=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let S=0,U=L.length;S<U;S++){let V=L[S];if(Array.isArray(V))for(let X=0,j=V.length;X<j;X++)v(V[X],S,X,F);else v(V,S,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(E,I,L,F){if(P(E,I,L,F)===!0){let S=E.__offset,U=E.value;if(Array.isArray(U)){let V=0;for(let X=0;X<U.length;X++){let j=U[X],Y=p(j);b(j,E.__data,V),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(U,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,E.__data)}}function b(E,I,L){typeof E=="number"||typeof E=="boolean"?I[0]=E:E.isMatrix3?(I[0]=E.elements[0],I[1]=E.elements[1],I[2]=E.elements[2],I[3]=0,I[4]=E.elements[3],I[5]=E.elements[4],I[6]=E.elements[5],I[7]=0,I[8]=E.elements[6],I[9]=E.elements[7],I[10]=E.elements[8],I[11]=0):ArrayBuffer.isView(E)?I.set(new E.constructor(E.buffer,E.byteOffset,I.length)):E.toArray(I,L)}function P(E,I,L,F){let S=E.value,U=I+"_"+L;if(F[U]===void 0)return typeof S=="number"||typeof S=="boolean"?F[U]=S:ArrayBuffer.isView(S)?F[U]=S.slice():F[U]=S.clone(),!0;{let V=F[U];if(typeof S=="number"||typeof S=="boolean"){if(V!==S)return F[U]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(V.equals(S)===!1)return V.copy(S),!0}}return!1}function M(E){let I=E.uniforms,L=0,F=16;for(let U=0,V=I.length;U<V;U++){let X=Array.isArray(I[U])?I[U]:[I[U]];for(let j=0,Y=X.length;j<Y;j++){let W=X[j],Q=Array.isArray(W.value)?W.value:[W.value];for(let lt=0,rt=Q.length;lt<rt;lt++){let dt=Q[lt],st=p(dt),at=L%F,ft=at%st.boundary,Zt=at+ft;L+=ft,Zt!==0&&F-Zt<st.storage&&(L+=F-Zt),W.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=L,L+=st.storage}}}let S=L%F;return S>0&&(L+=F-S),E.__size=L,E.__cache={},this}function p(E){let I={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(I.boundary=4,I.storage=4):E.isVector2?(I.boundary=8,I.storage=8):E.isVector3||E.isColor?(I.boundary=16,I.storage=12):E.isVector4?(I.boundary=16,I.storage=16):E.isMatrix3?(I.boundary=48,I.storage=48):E.isMatrix4?(I.boundary=64,I.storage=64):E.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(I.boundary=16,I.storage=E.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",E),I}function N(E){let I=E.target;I.removeEventListener("dispose",N);let L=o.indexOf(I.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function z(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:h,update:u,dispose:z}}var Ux=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function Fx(){return Si===null&&(Si=new Ps(Ux,16,16,hs,oi),Si.name="DFG_LUT",Si.minFilter=pn,Si.magFilter=pn,Si.wrapS=mi,Si.wrapT=mi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var rc=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:f=!1,outputBufferType:v=Nn}=t;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=o;let P=v,M=new Set([Ml,yl,vl]),p=new Set([Nn,ai,br,Tr,_l,xl]),N=new Uint32Array(4),z=new Int32Array(4),E=new et,I=null,L=null,F=[],S=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,X=!1,j=null,Y=null,W=null,Q=null;this._outputColorSpace=Cn;let lt=0,rt=0,dt=null,st=-1,at=null,ft=new qe,Zt=new qe,Xt=null,Be=new pe(0),xe=0,ve=e.width,ht=e.height,xt=1,qt=null,le=null,Vt=new qe(0,0,ve,ht),me=new qe(0,0,ve,ht),Je=!1,ye=new xr,Ce=!1,ze=!1,ne=new He,ue=new et,Qe=new qe,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ke(){return dt===null?xt:1}let H=n;function oe(w,k){return e.getContext(w,k)}let pt,C,y,q,nt,ct,Ct,wt,$,gt,Tt,zt,Et,Pt,Kt,Qt,ce,G,bt,mt,Rt,Dt,St;try{let w={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",Un,!1),H===null){let k="webgl2";if(H=oe(k,w),H===null)throw oe(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(w){throw e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),ae("WebGLRenderer: "+w.message),w}function $t(){pt=new Hg(H),pt.init(),Rt=new Rx(H,pt),C=new Dg(H,pt,t,Rt),y=new Ex(H,pt),C.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),Y=H.createFramebuffer(),W=H.createFramebuffer(),Q=H.createFramebuffer(),q=new qg(H),nt=new fx,ct=new Cx(H,pt,y,nt,C,Rt,q),Ct=new Gg(V),wt=new Jp(H),Dt=new Ig(H,wt),$=new Wg(H,wt,q,Dt),gt=new Jg(H,$,wt,Dt,q),G=new Yg(H,C,ct),Kt=new Ng(nt),Tt=new dx(V,Ct,pt,C,Dt,Kt),zt=new Dx(V,nt),Et=new mx,Pt=new Mx(pt),ce=new Pg(V,Ct,y,gt,b,h),Qt=new Ax(V,gt,C),St=new Nx(H,q,C,y),bt=new Lg(H,pt,q),mt=new Xg(H,pt,q),q.programs=Tt.programs,V.capabilities=C,V.extensions=pt,V.properties=nt,V.renderLists=Et,V.shadowMap=Qt,V.state=y,V.info=q}P!==Nn&&(U=new Kg(P,e.width,e.height,c,s,r));let Yt=new Qh(V,H);this.xr=Yt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(w){w!==void 0&&(xt=w,this.setSize(ve,ht,!1))},this.getSize=function(w){return w.set(ve,ht)},this.setSize=function(w,k,tt=!0){if(Yt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=w,ht=k,e.width=Math.floor(w*xt),e.height=Math.floor(k*xt),tt===!0&&(e.style.width=w+"px",e.style.height=k+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(ve*xt,ht*xt).floor()},this.setDrawingBufferSize=function(w,k,tt){ve=w,ht=k,xt=tt,e.width=Math.floor(w*tt),e.height=Math.floor(k*tt),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(P===Nn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ft)},this.getViewport=function(w){return w.copy(Vt)},this.setViewport=function(w,k,tt,J){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,k,tt,J),y.viewport(ft.copy(Vt).multiplyScalar(xt).round())},this.getScissor=function(w){return w.copy(me)},this.setScissor=function(w,k,tt,J){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,k,tt,J),y.scissor(Zt.copy(me).multiplyScalar(xt).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(w){y.setScissorTest(Je=w)},this.setOpaqueSort=function(w){qt=w},this.setTransparentSort=function(w){le=w},this.getClearColor=function(w){return w.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,tt=!0){let J=0;if(w){let K=!1;if(dt!==null){let Nt=dt.texture.format;K=M.has(Nt)}if(K){let Nt=dt.texture.type,kt=p.has(Nt),Ut=ce.getClearColor(),Gt=ce.getClearAlpha(),Jt=Ut.r,fe=Ut.g,se=Ut.b;kt?(N[0]=Jt,N[1]=fe,N[2]=se,N[3]=Gt,H.clearBufferuiv(H.COLOR,0,N)):(z[0]=Jt,z[1]=fe,z[2]=se,z[3]=Gt,H.clearBufferiv(H.COLOR,0,z))}else J|=H.COLOR_BUFFER_BIT}k&&(J|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),j=w},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),ce.dispose(),Et.dispose(),Pt.dispose(),nt.dispose(),Ct.dispose(),gt.dispose(),Dt.dispose(),St.dispose(),Tt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Lr),Yt.removeEventListener("sessionend",Dr),Ti.stop()};function ke(w){w.preventDefault(),Nh("WebGLRenderer: Context Lost."),X=!0}function Re(){Nh("WebGLRenderer: Context Restored."),X=!1;let w=q.autoReset,k=Qt.enabled,tt=Qt.autoUpdate,J=Qt.needsUpdate,K=Qt.type;$t(),q.autoReset=w,Qt.enabled=k,Qt.autoUpdate=tt,Qt.needsUpdate=J,Qt.type=K}function Un(w){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function bn(w){let k=w.target;k.removeEventListener("dispose",bn),lc(k)}function lc(w){Pr(w),nt.remove(w)}function Pr(w){let k=nt.get(w).programs;k!==void 0&&(k.forEach(function(tt){Tt.releaseProgram(tt)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,tt,J,K,Nt){k===null&&(k=Le);let kt=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ut=Ur(w,k,tt,J,K);y.setMaterial(J,kt);let Gt=tt.index,Jt=1;if(J.wireframe===!0){if(Gt=$.getWireframeAttribute(tt),Gt===void 0)return;Jt=2}let fe=tt.drawRange,se=tt.attributes.position,Wt=fe.start*Jt,Pe=(fe.start+fe.count)*Jt;Nt!==null&&(Wt=Math.max(Wt,Nt.start*Jt),Pe=Math.min(Pe,(Nt.start+Nt.count)*Jt)),Gt!==null?(Wt=Math.max(Wt,0),Pe=Math.min(Pe,Gt.count)):se!=null&&(Wt=Math.max(Wt,0),Pe=Math.min(Pe,se.count));let Ze=Pe-Wt;if(Ze<0||Ze===1/0)return;Dt.setup(K,J,Ut,tt,Gt);let Ve,Ue=bt;if(Gt!==null&&(Ve=wt.get(Gt),Ue=mt,Ue.setIndex(Ve)),K.isMesh)J.wireframe===!0?(y.setLineWidth(J.wireframeLinewidth*Ke()),Ue.setMode(H.LINES)):Ue.setMode(H.TRIANGLES);else if(K.isLine){let cn=J.linewidth;cn===void 0&&(cn=1),y.setLineWidth(cn*Ke()),K.isLineSegments?Ue.setMode(H.LINES):K.isLineLoop?Ue.setMode(H.LINE_LOOP):Ue.setMode(H.LINE_STRIP)}else K.isPoints?Ue.setMode(H.POINTS):K.isSprite&&Ue.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Ue.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let cn=K._multiDrawStarts,Bt=K._multiDrawCounts,hn=K._multiDrawCount,Me=Gt?wt.get(Gt).bytesPerElement:1,Pn=nt.get(J).currentProgram.getUniforms();for(let Hn=0;Hn<hn;Hn++)Pn.setValue(H,"_gl_DrawID",Hn),Ue.render(cn[Hn]/Me,Bt[Hn])}else if(K.isInstancedMesh)Ue.renderInstances(Wt,Ze,K.count);else if(tt.isInstancedBufferGeometry){let cn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Bt=Math.min(tt.instanceCount,cn);Ue.renderInstances(Wt,Ze,Bt)}else Ue.render(Wt,Ze)};function Us(w,k,tt,J){j!==null&&w.isNodeMaterial&&j.setObject(J,w),Ce===!0&&Kt.setState(w,tt,!1),w.transparent===!0&&w.side===yi&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,ds(w,k,J),w.side=as,w.needsUpdate=!0,ds(w,k,J),w.side=yi):ds(w,k,J)}this.compile=function(w,k,tt=null){tt===null&&(tt=w),j!==null&&j.renderStart(w,k,tt),L=Pt.get(tt),L.init(k),S.push(L),tt.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(L.pushLight(K),K.castShadow&&L.pushShadow(K))}),w!==tt&&w.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(L.pushLight(K),K.castShadow&&L.pushShadow(K))}),L.setupLights(),j!==null&&j.updateLights(L.state.lightsArray),ze=this.localClippingEnabled,Ce=Kt.init(this.clippingPlanes,ze),Ce===!0&&Kt.setGlobalState(this.clippingPlanes,k),j!==null&&Qt.render(L.state.shadowsArray,tt,k);let J=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Nt=K.material;if(Nt)if(Array.isArray(Nt))for(let kt=0;kt<Nt.length;kt++){let Ut=Nt[kt];Us(Ut,tt,k,K),J.add(Ut)}else Us(Nt,tt,k,K),J.add(Nt)}),L=S.pop(),j!==null&&j.renderEnd(),J},this.compileAsync=function(w,k,tt=null){let J=this.compile(w,k,tt);return new Promise(K=>{function Nt(){if(J.forEach(function(kt){let Gt=nt.get(kt).currentProgram;(Gt===void 0||Gt.isReady())&&J.delete(kt)}),J.size===0){K(w);return}setTimeout(Nt,10)}pt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Kn=null;function Ir(w){Kn&&Kn(w)}function Lr(){Ti.stop()}function Dr(){Ti.start()}let Ti=new ff;Ti.setAnimationLoop(Ir),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(w){Kn=w,Yt.setAnimationLoop(w),w===null?Ti.stop():Ti.start()},Yt.addEventListener("sessionstart",Lr),Yt.addEventListener("sessionend",Dr),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;j!==null&&j.renderStart(w,k);let tt=Yt.enabled===!0&&Yt.isPresenting===!0,J=U!==null&&(dt===null||tt)&&U.begin(V,dt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(k),k=Yt.getCamera()),w.isScene===!0&&w.onBeforeRender(V,w,k,dt),L=Pt.get(w,S.length),L.init(k),L.state.textureUnits=ct.getTextureUnits(),S.push(L),ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ye.setFromProjectionMatrix(ne,si,k.reversedDepth),ze=this.localClippingEnabled,Ce=Kt.init(this.clippingPlanes,ze),I=Et.get(w,F.length),I.init(),F.push(I),Yt.enabled===!0&&Yt.isPresenting===!0){let kt=V.xr.getDepthSensingMesh();kt!==null&&Nr(kt,k,-1/0,V.sortObjects)}Nr(w,k,0,V.sortObjects),I.finish(),j!==null&&j.updateLights(L.state.lightsArray),V.sortObjects===!0&&I.sort(qt,le),Se=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1,Se&&ce.addToRenderList(I,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&Kt.beginShadows();let K=L.state.shadowsArray;if(Qt.render(K,w,k),Ce===!0&&Kt.endShadows(),(J&&U.hasRenderPass())===!1){let kt=I.opaque,Ut=I.transmissive;if(L.setupLights(),k.isArrayCamera){let Gt=k.cameras;if(Ut.length>0)for(let Jt=0,fe=Gt.length;Jt<fe;Jt++){let se=Gt[Jt];Ha(kt,Ut,w,se)}Se&&ce.render(w);for(let Jt=0,fe=Gt.length;Jt<fe;Jt++){let se=Gt[Jt];us(I,w,se,se.viewport)}}else Ut.length>0&&Ha(kt,Ut,w,k),Se&&ce.render(w),us(I,w,k)}dt!==null&&rt===0&&(ct.updateMultisampleRenderTarget(dt),ct.updateRenderTargetMipmap(dt)),J&&U.end(V),w.isScene===!0&&w.onAfterRender(V,w,k),Dt.resetDefaultState(),st=-1,at=null,S.pop(),S.length>0?(L=S[S.length-1],ct.setTextureUnits(L.state.textureUnits),Ce===!0&&Kt.setGlobalState(V.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?I=F[F.length-1]:I=null,j!==null&&j.renderEnd()};function Nr(w,k,tt,J){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)tt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ye)){J&&Qe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ne);let kt=gt.update(w),Ut=w.material;Ut.visible&&I.push(w,kt,Ut,tt,Qe.z,null,k)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ye))){let kt=gt.update(w),Ut=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Qe.copy(w.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Qe.copy(kt.boundingSphere.center)),Qe.applyMatrix4(w.matrixWorld).applyMatrix4(ne)),Array.isArray(Ut)){let Gt=kt.groups;for(let Jt=0,fe=Gt.length;Jt<fe;Jt++){let se=Gt[Jt],Wt=Ut[se.materialIndex];Wt&&Wt.visible&&I.push(w,kt,Wt,tt,Qe.z,se,k)}}else Ut.visible&&I.push(w,kt,Ut,tt,Qe.z,null,k)}}let Nt=w.children;for(let kt=0,Ut=Nt.length;kt<Ut;kt++)Nr(Nt[kt],k,tt,J)}function us(w,k,tt,J){let{opaque:K,transmissive:Nt,transparent:kt}=w;L.setupLightsView(tt),Ce===!0&&Kt.setGlobalState(V.clippingPlanes,tt),J&&y.viewport(ft.copy(J)),K.length>0&&jt(K,k,tt),Nt.length>0&&jt(Nt,k,tt),kt.length>0&&jt(kt,k,tt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Ha(w,k,tt,J){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[J.id]===void 0){let Wt=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[J.id]=new Dn(1,1,{generateMipmaps:!0,type:Wt?oi:Nn,minFilter:ls,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:we.workingColorSpace})}let Nt=L.state.transmissionRenderTarget[J.id],kt=J.viewport||ft;Nt.setSize(kt.z*V.transmissionResolutionScale,kt.w*V.transmissionResolutionScale);let Ut=V.getRenderTarget(),Gt=V.getActiveCubeFace(),Jt=V.getActiveMipmapLevel();V.setRenderTarget(Nt),V.getClearColor(Be),xe=V.getClearAlpha(),xe<1&&V.setClearColor(16777215,.5),V.clear(),Se&&ce.render(tt);let fe=V.toneMapping;V.toneMapping=ri;let se=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),L.setupLightsView(J),Ce===!0&&Kt.setGlobalState(V.clippingPlanes,J),jt(w,tt,J),ct.updateMultisampleRenderTarget(Nt),ct.updateRenderTargetMipmap(Nt),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Pe=0,Ze=k.length;Pe<Ze;Pe++){let Ve=k[Pe],{object:Ue,geometry:cn,material:Bt,group:hn}=Ve;if(Bt.side===yi&&Ue.layers.test(J.layers)){let Me=Bt.side;Bt.side=mn,Bt.needsUpdate=!0,tn(Ue,tt,J,cn,Bt,hn),Bt.side=Me,Bt.needsUpdate=!0,Wt=!0}}Wt===!0&&(ct.updateMultisampleRenderTarget(Nt),ct.updateRenderTargetMipmap(Nt))}V.setRenderTarget(Ut,Gt,Jt),V.setClearColor(Be,xe),se!==void 0&&(J.viewport=se),V.toneMapping=fe}function jt(w,k,tt){let J=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Nt=w.length;K<Nt;K++){let kt=w[K],{object:Ut,geometry:Gt,group:Jt}=kt,fe=kt.material;fe.allowOverride===!0&&J!==null&&(fe=J),Ut.layers.test(tt.layers)&&tn(Ut,k,tt,Gt,fe,Jt)}}function tn(w,k,tt,J,K,Nt){j!==null&&K.isNodeMaterial&&j.setObject(w,K),w.onBeforeRender(V,k,tt,J,K,Nt),w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(V,k,tt,J,w,Nt),K.transparent===!0&&K.side===yi&&K.forceSinglePass===!1?(K.side=mn,K.needsUpdate=!0,V.renderBufferDirect(tt,k,J,K,w,Nt),K.side=as,K.needsUpdate=!0,V.renderBufferDirect(tt,k,J,K,w,Nt),K.side=yi):V.renderBufferDirect(tt,k,J,K,w,Nt),w.onAfterRender(V,k,tt,J,K,Nt)}function ds(w,k,tt){k.isScene!==!0&&(k=Le);let J=nt.get(w),K=L.state.lights,Nt=L.state.shadowsArray,kt=K.state.version,Ut=Tt.getParameters(w,K.state,Nt,k,tt,L.state.lightProbeGridArray),Gt=Tt.getProgramCacheKey(Ut),Jt=J.programs;J.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,J.fog=k.fog;let fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;J.envMap=Ct.get(w.envMap||J.environment,fe),J.envMapRotation=J.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Jt===void 0&&(w.addEventListener("dispose",bn),Jt=new Map,J.programs=Jt);let se=Jt.get(Gt);if(se!==void 0){if(J.currentProgram===se&&J.lightsStateVersion===kt)return fn(w,Ut),se}else Ut.uniforms=Tt.getUniforms(w),j!==null&&w.isNodeMaterial&&j.build(w,tt,Ut),w.onBeforeCompile(Ut,V),se=Tt.acquireProgram(Ut,Gt),Jt.set(Gt,se),J.uniforms=Ut.uniforms;let Wt=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Wt.clippingPlanes=Kt.uniform),fn(w,Ut),J.needsLights=Oi(w),J.lightsStateVersion=kt,J.needsLights&&(Wt.ambientLightColor.value=K.state.ambient,Wt.lightProbe.value=K.state.probe,Wt.sunLights.value=K.state.sun,Wt.sunLightShadows.value=K.state.sunShadow,Wt.directionalLights.value=K.state.directional,Wt.directionalLightShadows.value=K.state.directionalShadow,Wt.spotLights.value=K.state.spot,Wt.spotLightShadows.value=K.state.spotShadow,Wt.rectAreaLights.value=K.state.rectArea,Wt.ltc_1.value=K.state.rectAreaLTC1,Wt.ltc_2.value=K.state.rectAreaLTC2,Wt.pointLights.value=K.state.point,Wt.pointLightShadows.value=K.state.pointShadow,Wt.hemisphereLights.value=K.state.hemi,Wt.sunShadowMatrix.value=K.state.sunShadowMatrix,Wt.sunShadowCascade.value=K.state.sunShadowCascade,Wt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Wt.spotLightMatrix.value=K.state.spotLightMatrix,Wt.spotLightMap.value=K.state.spotLightMap,Wt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=L.state.lightProbeGridArray.length>0,J.currentProgram=se,J.uniformsList=null,se}function Gn(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=Cr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function fn(w,k){let tt=nt.get(w);tt.outputColorSpace=k.outputColorSpace,tt.batching=k.batching,tt.batchingColor=k.batchingColor,tt.instancing=k.instancing,tt.instancingColor=k.instancingColor,tt.instancingMorph=k.instancingMorph,tt.skinning=k.skinning,tt.morphTargets=k.morphTargets,tt.morphNormals=k.morphNormals,tt.morphColors=k.morphColors,tt.morphTargetsCount=k.morphTargetsCount,tt.numClippingPlanes=k.numClippingPlanes,tt.numIntersection=k.numClipIntersection,tt.vertexAlphas=k.vertexAlphas,tt.vertexTangents=k.vertexTangents,tt.toneMapping=k.toneMapping}function De(w,k){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;E.setFromMatrixPosition(k.matrixWorld);for(let tt=0,J=w.length;tt<J;tt++){let K=w[tt];if(K.texture!==null&&K.boundingBox.containsPoint(E))return K}return null}function Ur(w,k,tt,J,K){k.isScene!==!0&&(k=Le),ct.resetTextureUnits();let Nt=k.fog,kt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?k.environment:null,Ut=dt===null?V.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:we.workingColorSpace,Gt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Jt=Ct.get(J.envMap||kt,Gt),fe=J.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,se=!!tt.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Wt=!!tt.morphAttributes.position,Pe=!!tt.morphAttributes.normal,Ze=!!tt.morphAttributes.color,Ve=ri;J.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Ve=V.toneMapping);let Ue=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,cn=Ue!==void 0?Ue.length:0,Bt=nt.get(J),hn=L.state.lights;if(Ce===!0&&(ze===!0||w!==at)){let Ge=w===at&&J.id===st;Kt.setState(J,w,Ge)}let Me=!1;J.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==hn.state.version||Bt.outputColorSpace!==Ut||K.isBatchedMesh&&Bt.batching===!1||!K.isBatchedMesh&&Bt.batching===!0||K.isBatchedMesh&&Bt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Bt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Bt.instancing===!1||!K.isInstancedMesh&&Bt.instancing===!0||K.isSkinnedMesh&&Bt.skinning===!1||!K.isSkinnedMesh&&Bt.skinning===!0||K.isInstancedMesh&&Bt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Bt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Bt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Bt.instancingMorph===!1&&K.morphTexture!==null||Bt.envMap!==Jt||J.fog===!0&&Bt.fog!==Nt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Kt.numPlanes||Bt.numIntersection!==Kt.numIntersection)||Bt.vertexAlphas!==fe||Bt.vertexTangents!==se||Bt.morphTargets!==Wt||Bt.morphNormals!==Pe||Bt.morphColors!==Ze||Bt.toneMapping!==Ve||Bt.morphTargetsCount!==cn||!!Bt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Bt.__version=J.version);let Pn=Bt.currentProgram;Me===!0&&(Pn=ds(J,k,K),j&&J.isNodeMaterial&&j.onUpdateProgram(J,Pn,Bt));let Hn=!1,li=!1,Bi=!1,Fe=Pn.getUniforms(),Ye=Bt.uniforms;if(y.useProgram(Pn.program)&&(Hn=!0,li=!0,Bi=!0),J.id!==st&&(st=J.id,li=!0),Bt.needsLights){let Ge=De(L.state.lightProbeGridArray,K);Bt.lightProbeGrid!==Ge&&(Bt.lightProbeGrid=Ge,li=!0)}if(Hn||at!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Fe.setValue(H,"projectionMatrix",w.projectionMatrix),Fe.setValue(H,"viewMatrix",w.matrixWorldInverse);let hi=Fe.map.cameraPosition;hi!==void 0&&hi.setValue(H,ue.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Fe.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Fe.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),at!==w&&(at=w,li=!0,Bi=!0)}if(Bt.needsLights&&(hn.state.sunShadowMap.length>0&&Fe.setValue(H,"sunShadowMap",hn.state.sunShadowMap,ct),hn.state.directionalShadowMap.length>0&&Fe.setValue(H,"directionalShadowMap",hn.state.directionalShadowMap,ct),hn.state.spotShadowMap.length>0&&Fe.setValue(H,"spotShadowMap",hn.state.spotShadowMap,ct),hn.state.pointShadowMap.length>0&&Fe.setValue(H,"pointShadowMap",hn.state.pointShadowMap,ct)),K.isSkinnedMesh){Fe.setOptional(H,K,"bindMatrix"),Fe.setOptional(H,K,"bindMatrixInverse");let Ge=K.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Fe.setValue(H,"boneTexture",Ge.boneTexture,ct))}K.isBatchedMesh&&(Fe.setOptional(H,K,"batchingTexture"),Fe.setValue(H,"batchingTexture",K._matricesTexture,ct),Fe.setOptional(H,K,"batchingIdTexture"),Fe.setValue(H,"batchingIdTexture",K._indirectTexture,ct),Fe.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Fe.setValue(H,"batchingColorTexture",K._colorsTexture,ct));let ci=tt.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&G.update(K,tt,Pn),(li||Bt.receiveShadow!==K.receiveShadow)&&(Bt.receiveShadow=K.receiveShadow,Fe.setValue(H,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&k.environment!==null&&(Ye.envMapIntensity.value=k.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=Fx()),li){if(Fe.setValue(H,"toneMappingExposure",V.toneMappingExposure),Bt.needsLights&&en(Ye,Bi),Nt&&J.fog===!0&&zt.refreshFogUniforms(Ye,Nt),zt.refreshMaterialUniforms(Ye,J,xt,ht,L.state.transmissionRenderTarget[w.id]),Bt.needsLights&&Bt.lightProbeGrid){let Ge=Bt.lightProbeGrid;Ye.probesSH.value=Ge.texture,Ye.probesMin.value.copy(Ge.boundingBox.min),Ye.probesMax.value.copy(Ge.boundingBox.max),Ye.probesResolution.value.copy(Ge.resolution)}Cr.upload(H,Gn(Bt),Ye,ct)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Cr.upload(H,Gn(Bt),Ye,ct),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Fe.setValue(H,"center",K.center),Fe.setValue(H,"modelViewMatrix",K.modelViewMatrix),Fe.setValue(H,"normalMatrix",K.normalMatrix),Fe.setValue(H,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let Ge=J.uniformsGroups;for(let hi=0,zi=Ge.length;hi<zi;hi++){let Wa=Ge[hi];St.update(Wa,Pn),St.bind(Wa,Pn)}}return Pn}function en(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Oi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return dt},this.setRenderTargetTextures=function(w,k,tt){let J=nt.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),nt.get(w.texture).__webglTexture=k,nt.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:tt,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let tt=nt.get(w);tt.__webglFramebuffer=k,tt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,tt=0){dt=w,lt=k,rt=tt;let J=null,K=!1,Nt=!1;if(w){let Ut=nt.get(w);if(Ut.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(H.FRAMEBUFFER,Ut.__webglFramebuffer),ft.copy(w.viewport),Zt.copy(w.scissor),Xt=w.scissorTest,y.viewport(ft),y.scissor(Zt),y.setScissorTest(Xt),st=-1;return}else if(Ut.__webglFramebuffer===void 0)ct.setupRenderTarget(w);else if(Ut.__hasExternalTextures)ct.rebindTextures(w,nt.get(w.texture).__webglTexture,nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let fe=w.depthTexture;if(Ut.__boundDepthTexture!==fe){if(fe!==null&&nt.has(fe)&&(w.width!==fe.image.width||w.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(w)}}let Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Nt=!0);let Jt=nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Jt[k])?J=Jt[k][tt]:J=Jt[k],K=!0):w.samples>0&&ct.useMultisampledRTT(w)===!1?J=nt.get(w).__webglMultisampledFramebuffer:Array.isArray(Jt)?J=Jt[tt]:J=Jt,ft.copy(w.viewport),Zt.copy(w.scissor),Xt=w.scissorTest}else ft.copy(Vt).multiplyScalar(xt).floor(),Zt.copy(me).multiplyScalar(xt).floor(),Xt=Je;if(tt!==0&&(J=Y),y.bindFramebuffer(H.FRAMEBUFFER,J)&&y.drawBuffers(w,J),y.viewport(ft),y.scissor(Zt),y.setScissorTest(Xt),K){let Ut=nt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ut.__webglTexture,tt)}else if(Nt){let Ut=k;for(let Gt=0;Gt<w.textures.length;Gt++){let Jt=nt.get(w.textures[Gt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Gt,Jt.__webglTexture,tt,Ut)}}else if(w!==null&&tt!==0){let Ut=nt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ut.__webglTexture,tt)}st=-1};function Fs(w){let k=nt.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=C.textureFormatReadable(w.format),k.__typeReadable=C.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,tt,J,K,Nt,kt,Ut=0){if(!(w&&w.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&(Gt=Gt[kt]),Gt){y.bindFramebuffer(H.FRAMEBUFFER,Gt);try{let Jt=w.textures[Ut],fe=Jt.format,se=Jt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ut);let Wt=Fs(Jt);if(Wt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-J&&tt>=0&&tt<=w.height-K&&H.readPixels(k,tt,J,K,Rt.convert(fe),Rt.convert(se),Nt)}finally{let Jt=dt!==null?nt.get(dt).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(w,k,tt,J,K,Nt,kt,Ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&(Gt=Gt[kt]),Gt)if(k>=0&&k<=w.width-J&&tt>=0&&tt<=w.height-K){y.bindFramebuffer(H.FRAMEBUFFER,Gt);let Jt=w.textures[Ut],fe=Jt.format,se=Jt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ut);let Wt=Fs(Jt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Pe),H.bufferData(H.PIXEL_PACK_BUFFER,Nt.byteLength,H.STREAM_READ),H.readPixels(k,tt,J,K,Rt.convert(fe),Rt.convert(se),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ze=dt!==null?nt.get(dt).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Ze);let Ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await zd(H,Ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Pe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Nt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Pe),H.deleteSync(Ve),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,tt=0){let J=Math.pow(2,-tt),K=Math.floor(w.image.width*J),Nt=Math.floor(w.image.height*J),kt=k!==null?k.x:0,Ut=k!==null?k.y:0;ct.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,tt,0,0,kt,Ut,K,Nt),y.unbindTexture()},this.copyTextureToTexture=function(w,k,tt=null,J=null,K=0,Nt=0){let kt,Ut,Gt,Jt,fe,se,Wt,Pe,Ze,Ve=w.isCompressedTexture?w.mipmaps[Nt]:w.image;if(tt!==null)kt=tt.max.x-tt.min.x,Ut=tt.max.y-tt.min.y,Gt=tt.isBox3?tt.max.z-tt.min.z:1,Jt=tt.min.x,fe=tt.min.y,se=tt.isBox3?tt.min.z:0;else{let Ye=Math.pow(2,-K);kt=Math.floor(Ve.width*Ye),Ut=Math.floor(Ve.height*Ye),w.isDataArrayTexture?Gt=Ve.depth:w.isData3DTexture?Gt=Math.floor(Ve.depth*Ye):Gt=1,Jt=0,fe=0,se=0}J!==null?(Wt=J.x,Pe=J.y,Ze=J.z):(Wt=0,Pe=0,Ze=0);let Ue=Rt.convert(k.format),cn=Rt.convert(k.type),Bt;k.isData3DTexture?(ct.setTexture3D(k,0),Bt=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ct.setTexture2DArray(k,0),Bt=H.TEXTURE_2D_ARRAY):(ct.setTexture2D(k,0),Bt=H.TEXTURE_2D),y.activeTexture(H.TEXTURE0),y.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let hn=y.getParameter(H.UNPACK_ROW_LENGTH),Me=y.getParameter(H.UNPACK_IMAGE_HEIGHT),Pn=y.getParameter(H.UNPACK_SKIP_PIXELS),Hn=y.getParameter(H.UNPACK_SKIP_ROWS),li=y.getParameter(H.UNPACK_SKIP_IMAGES);y.pixelStorei(H.UNPACK_ROW_LENGTH,Ve.width),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ve.height),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Jt),y.pixelStorei(H.UNPACK_SKIP_ROWS,fe),y.pixelStorei(H.UNPACK_SKIP_IMAGES,se);let Bi=w.isDataArrayTexture||w.isData3DTexture,Fe=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let Ye=nt.get(w),ci=nt.get(k),Ge=nt.get(Ye.__renderTarget),hi=nt.get(ci.__renderTarget);y.bindFramebuffer(H.READ_FRAMEBUFFER,Ge.__webglFramebuffer),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let zi=0;zi<Gt;zi++)Bi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nt.get(w).__webglTexture,K,se+zi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nt.get(k).__webglTexture,Nt,Ze+zi)),H.blitFramebuffer(Jt,fe,kt,Ut,Wt,Pe,kt,Ut,H.DEPTH_BUFFER_BIT,H.NEAREST);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||nt.has(w)){let Ye=nt.get(w),ci=nt.get(k);y.bindFramebuffer(H.READ_FRAMEBUFFER,W),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,Q);for(let Ge=0;Ge<Gt;Ge++)Bi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.__webglTexture,K,se+Ge):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ye.__webglTexture,K),Fe?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ci.__webglTexture,Nt,Ze+Ge):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ci.__webglTexture,Nt),K!==0?H.blitFramebuffer(Jt,fe,kt,Ut,Wt,Pe,kt,Ut,H.COLOR_BUFFER_BIT,H.NEAREST):Fe?H.copyTexSubImage3D(Bt,Nt,Wt,Pe,Ze+Ge,Jt,fe,kt,Ut):H.copyTexSubImage2D(Bt,Nt,Wt,Pe,Jt,fe,kt,Ut);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Fe?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Bt,Nt,Wt,Pe,Ze,kt,Ut,Gt,Ue,cn,Ve.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(Bt,Nt,Wt,Pe,Ze,kt,Ut,Gt,Ue,Ve.data):H.texSubImage3D(Bt,Nt,Wt,Pe,Ze,kt,Ut,Gt,Ue,cn,Ve):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Nt,Wt,Pe,kt,Ut,Ue,cn,Ve.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Nt,Wt,Pe,Ve.width,Ve.height,Ue,Ve.data):H.texSubImage2D(H.TEXTURE_2D,Nt,Wt,Pe,kt,Ut,Ue,cn,Ve);y.pixelStorei(H.UNPACK_ROW_LENGTH,hn),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Me),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Pn),y.pixelStorei(H.UNPACK_SKIP_ROWS,Hn),y.pixelStorei(H.UNPACK_SKIP_IMAGES,li),Nt===0&&k.generateMipmaps&&H.generateMipmap(Bt),y.unbindTexture()},this.initRenderTarget=function(w){nt.get(w).__webglFramebuffer===void 0&&ct.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ct.setTextureCube(w,0):w.isData3DTexture?ct.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ct.setTexture2DArray(w,0):ct.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){lt=0,rt=0,dt=null,y.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};function yf(i){let t;try{let S=i.getContext("webgl2",{antialias:!0,alpha:!1});if(!S)return null;t=new rc({canvas:i,context:S,antialias:!0,alpha:!1,powerPreference:"default"})}catch{return null}t.outputColorSpace=Cn,t.toneMapping=Pa,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=dl,t.setPixelRatio(Math.min(devicePixelRatio||1,1.5));let e=new fa;e.fog=new da("#cbddec",125,460);let n=new vn(62,1,.12,850),s=new Aa("#e7f4ff","#a08ba5",2.2),r=new Ca("#fff0de",2.4);r.position.set(-30,60,25),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-55,right:55,top:45,bottom:-45,near:1,far:160}),r.shadow.bias=-4e-4,e.add(s,r,r.target);let o=new Ps(new Uint8Array([95,145,195,245]),4,1,wr);o.minFilter=je,o.magFilter=je,o.needsUpdate=!0;let c=new Map,h=new He,u=new Map,m=new Map,x=new Mn(new Sa(650,16,8),new Rn({side:mn,depthWrite:!1,uniforms:{top:{value:new pe("#8fbee6")},bottom:{value:new pe("#f0e8f0")}},vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vDirection;uniform vec3 top,bottom;void main(){float h=smoothstep(-.05,.8,normalize(vDirection).y);gl_FragColor=vec4(mix(bottom,top,h),1.0);}"}));x.renderOrder=-100,e.add(x);let f=1,v=0,b=0,P=0,M=0,p=16.7,N=0,z=0,E=2,I=["low","medium","high"];function L(S,U){S.renderId||(S.renderId=f++);let V=S.renderId+":"+(S.paintable&&U?U:"");if(m.has(V))return m.get(V);let X=S.sourceData,j=[],Y=[],W=[],Q=U?new pe(U):null;for(let rt=0;rt<X.length;rt+=10){j.push(X[rt],X[rt+1],X[rt+2]),Y.push(X[rt+3],X[rt+4],X[rt+5]);let dt=X[rt+6],st=X[rt+7],at=X[rt+8],ft=S.paintable&&Q&&st-dt>.14&&at-dt>.2;W.push(ft?Q.r:dt,ft?Q.g:st,ft?Q.b:at)}let lt=new kn;return lt.setAttribute("position",new an(j,3)),lt.setAttribute("normal",new an(Y,3)),lt.setAttribute("color",new an(W,3)),lt.setIndex(Array.from(S.sourceIndices)),lt.computeBoundingSphere(),m.set(V,lt),S.onDispose=()=>{for(let[rt,dt]of m)if(rt.startsWith(S.renderId+":")){for(let[st,at]of c)at.geometry===dt&&(e.remove(at),at.dispose(),c.delete(st));dt.dispose(),m.delete(rt)}},lt}function F(S,U,V,X,j,Y={}){let W=performance.now();if(M){let dt=W-M;dt<100&&(p+=(dt-p)*.035)}M=W,Y.quality==="auto"&&(p>23?(N++,z=0):p<16.9?(z++,N=0):(N=0,z=0),N>90&&E>0&&(E--,N=0),z>360&&E<2&&(E++,z=0));let Q=Y.quality==="auto"?I[E]:Y.quality,lt=Q==="low"?1:Q==="medium"?1.2:Math.min(devicePixelRatio||1,1.5);lt!==P&&(t.setPixelRatio(lt),P=lt),(V!==v||X!==b)&&(t.setSize(V,X,!1),v=V,b=X),n.aspect=V/X,n.fov=j,n.updateProjectionMatrix(),n.position.fromArray(U.eye),n.lookAt(new et(...U.target)),x.position.copy(n.position);let rt=new Map;for(let dt of S){if(!dt.mesh.sourceIndices.length)continue;let st=L(dt.mesh,dt.tint),at=dt.opacity??1,ft=st.uuid+":"+dt.shadow+":"+at,Zt=rt.get(ft);Zt||(Zt={geometry:st,shadow:dt.shadow,opacity:at,items:[]},rt.set(ft,Zt)),Zt.items.push(dt)}for(let dt of c.values())dt.visible=!1;for(let[dt,st]of rt){let at=c.get(dt);if(!at||at.instanceMatrix.count<st.items.length){at&&(e.remove(at),at.dispose());let ft=u.get(st.opacity);ft||(ft=new ba({vertexColors:!0,gradientMap:o,transparent:st.opacity<1,opacity:st.opacity,depthWrite:st.opacity>=1}),u.set(st.opacity,ft)),at=new xa(st.geometry,ft,Math.max(4,st.items.length+8)),at.instanceMatrix.setUsage(Lh),at.frustumCulled=!0,at.receiveShadow=st.opacity>=1,e.add(at),c.set(dt,at)}at.count=st.items.length,at.castShadow=st.shadow&&Q!=="low",at.visible=!0;for(let ft=0;ft<st.items.length;ft++)h.fromArray(st.items[ft].m),at.setMatrixAt(ft,h);at.instanceMatrix.needsUpdate=!0,at.computeBoundingSphere()}return t.shadowMap.enabled=Q!=="low",t.render(e,n),{drawCalls:t.info.render.calls,triangles:t.info.render.triangles,effectiveQuality:Q}}return{render:F,renderer:t,scene:e}}function Mf(i,t){for(let e of i.querySelectorAll("#trackPicker [data-track]")){let n=t[e.dataset.track];if(!n||e.querySelector(".course-art"))continue;let s=i.createElement("img");s.className="course-art",s.alt="",s.setAttribute("aria-hidden","true"),s.draggable=!1,s.decoding="async",s.hidden=!0,s.width=512,s.height=256,s.onload=()=>{s.hidden=!1,e.dataset.art="ready"},s.onerror=()=>{s.remove(),delete e.dataset.art},e.prepend(s),s.src=n}}(()=>{"use strict";let i=document.getElementById("scene"),t=document.getElementById("error"),e=document.getElementById("loading");function n(h){t.hidden=!1,document.getElementById("error-text").textContent=h,e.classList.add("done")}let s={light:"/assets/impact-audio/rail-light-v2.e9daa5ac2bd3.wav",medium:"/assets/impact-audio/rail-medium-v2.9e322b68b6d0.wav"},r=yf(i),o=!r,c=o?i.getContext("2d"):null;try{let h=function(a,l,d){let g=[];if(d){let T=(a%l+l)%l;for(let A=0;A<l;A+=40){let R=A-T;R-=Math.round(R/l)*l,R>=-40&&R<210&&g.push({s:A,ds:R})}}else for(let T=Math.ceil((a-40)/40)*40;T<a+210;T+=40)g.push({s:T,ds:T-a});return g},u=function(a){let l=c,d=i.width,g=i.height;l.setTransform(1,0,0,1,0,0);let T=l.createLinearGradient(0,0,0,g);T.addColorStop(0,"#96c8ee"),T.addColorStop(.62,"#f2e6ee"),T.addColorStop(.63,"#cbd8c1"),T.addColorStop(1,"#bdcdb8"),l.fillStyle=T,l.fillRect(0,0,d,g);let A=a.eye,R=a.target,O=z(b(R,A)),B=z(p(O,[0,1,0])),Z=p(B,O),ot=g/(2*Math.tan(zs*Math.PI/360)),yt=_t=>{let vt=b(_t,A),It=M(vt,O);return It<.25?null:[d/2+M(vt,B)*ot/It,g/2-M(vt,Z)*ot/It,It,ot/It]},ut=(_t,vt)=>{let It=_t.map(yt);It.some(Ht=>!Ht)||(l.fillStyle=vt,l.beginPath(),It.forEach((Ht,Ot)=>Ot?l.lineTo(Ht[0],Ht[1]):l.moveTo(Ht[0],Ht[1])),l.closePath(),l.fill())},Mt=_t=>b(_t,a.origin),At=[];for(let _t=-40;_t<240;_t+=5){let vt=_.s+_t,It=be(vt),Ht=be(vt+5);At.push({d:_t,a:It,b:Ht})}for(let _t of At.reverse()){let vt=(It,Ht,Ot)=>Mt(v(v(It.p,P(It.R,Ht)),[0,Ot,0]));if(ut([vt(_t.a,-10,0),vt(_t.a,10,0),vt(_t.b,10,0),vt(_t.b,-10,0)],"#e3dce5"),ut([vt(_t.a,-7,.05),vt(_t.a,7,.05),vt(_t.b,7,.05),vt(_t.b,-7,.05)],"#7b829a"),Math.floor(_t.d/5)%2===0)for(let It of[-2.3,2.3])ut([vt(_t.a,It-.04,.06),vt(_t.a,It+.04,.06),vt(_t.b,It+.04,.06),vt(_t.b,It-.04,.06)],"#e9edf1");for(let It of[-1,1])ut([vt(_t.a,It*8.1,.4),vt(_t.a,It*8.1,.8),vt(_t.b,It*8.1,.8),vt(_t.b,It*8.1,.4)],"#c0cfe2")}let Lt=[];for(let _t=0;_t<210;_t+=20)for(let vt of[-1,1]){let It=Ne(Math.floor((_.s+_t)/20)*20,vt*12,0),Ht=yt(Mt(It));Ht&&Lt.push({q:Ht,side:vt,ds:_t,pos:It,kind:"tree"})}for(let _t of h(_.s,De,jt==="circuit"))for(let vt of[-1,1]){let It=yt(Mt(Ne(_t.s,vt*20,0)));It&&Lt.push({q:It,kind:"house"})}for(let _t of Lt.sort((vt,It)=>It.q[2]-vt.q[2])){let[vt,It,,Ht]=_t.q;if(_t.kind==="tree"){l.fillStyle="#a78a95",l.fillRect(vt-Ht*.12,It-Ht*3.5,Ht*.24,Ht*3.5);for(let Ot=0;Ot<4;Ot++)l.fillStyle=Ot%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(vt+Math.sin(Ot*2)*Ht,It-Ht*(3.3+Ot*.3),Ht*1.6,Ht*1.1,0,0,x),l.fill()}else{let Ot=_t.q;l.fillStyle="#f3e9dc",l.fillRect(Ot[0]-Ot[3]*3,Ot[1]-Ot[3]*5,Ot[3]*6,Ot[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(Ot[0]-Ot[3]*3.5,Ot[1]-Ot[3]*5),l.lineTo(Ot[0],Ot[1]-Ot[3]*6.3),l.lineTo(Ot[0]+Ot[3]*3.5,Ot[1]-Ot[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let de=0;de<3;de++)l.fillRect(Ot[0]+(de-1.2)*Ot[3]*1.5,Ot[1]-Ot[3]*3.9,Ot[3],Ot[3]*1.2)}}for(let _t of ms)if(_t.life>0){let vt=yt(Mt(_t.p));vt&&(l.fillStyle="#414957",l.fillRect(vt[0],vt[1],Math.max(1,vt[3]*.12),Math.max(2,vt[3]*_t.length)))}for(let _t of un.values())for(let vt of _t.entities){if(Math.abs(tt(vt.s,_.s))>170)continue;let It=yt(Mt(Ne(vt.s+(vt.ds||0),vt.l+(vt.dl||0),.2)));if(!It||vt.kind==="coin"&&vt.hitLap===Math.max(0,Math.floor(_.s/De)))continue;let[Ht,Ot,,de]=It;if(vt.kind==="coin")l.fillStyle="#ffe2a0",l.beginPath(),l.ellipse(Ht,Ot-de*.8,de*.25,de*.38,0,0,x),l.fill();else if(vt.kind==="pad"){let An=be(vt.s),We=(En,$e)=>Mt(Ne(vt.s+En,vt.l+$e,.07));ut([We(-1.2,-1.5),We(1.2,-1.5),We(1.2,1.5),We(-1.2,1.5)],"#92e3e5")}else if(vt.kind==="ramp"){let An=(We,En,$e)=>Mt(Ne(vt.s+We,vt.l+En,$e));ut([An(-1.4,-1.5,.08),An(1.4,-1.5,.85),An(1.4,1.5,.85),An(-1.4,1.5,.08)],"#bfa9e3")}else vt.kind==="cone"?(l.fillStyle="#eebd92",l.beginPath(),l.moveTo(Ht,Ot-de*.8),l.lineTo(Ht-de*.35,Ot),l.lineTo(Ht+de*.35,Ot),l.fill()):vt.kind==="barrier"&&(l.fillStyle="#edacbb",l.fillRect(Ht-de,Ot-de*.7,de*2,de*.7))}let ge=(_t,vt,It,Ht,Ot,de=1)=>{let An=be(_t),We=Ne(_t,vt,.05+Ht),En=yt(Mt(We));if(!En)return;l.globalAlpha=de;let $e=(Ks,$s,qi)=>Mt(v(We,v(P(An.T,Ks*Math.cos(It)-qi*Math.sin(It)),v(P(An.R,Ks*Math.sin(It)+qi*Math.cos(It)),[0,$s,0]))));ut([$e(-1.6,.3,-.8),$e(1.6,.3,-.8),$e(1.6,.7,.8),$e(-1.6,.7,.8)],Ot),ut([$e(-1.6,.65,-.8),$e(1.6,.65,-.8),$e(1.6,.65,.8),$e(-1.6,.65,.8)],"#eef1f7");for(let Ks of[-1,1])for(let $s of[-.87,.87]){let qi=yt($e(Ks,.35,$s));qi&&(l.fillStyle="#3c4357",l.beginPath(),l.ellipse(qi[0],qi[1],En[3]*.24,En[3]*.34,0,0,x),l.fill())}let bs=yt($e(-.3,1.6,0));bs&&(l.fillStyle="#f3d2be",l.beginPath(),l.arc(bs[0],bs[1],En[3]*.33,0,x),l.fill(),l.fillStyle="#a9abe4",l.beginPath(),l.ellipse(bs[0],bs[1]-En[3]*.18,En[3]*.36,En[3]*.2,0,Math.PI,x),l.fill()),l.globalAlpha=1};if(rn.line&&ee==="running")for(let _t=8;_t>=0;_t--){let vt=_.s+12+_t*9,It=be(vt),Ht=E(It.curv*80,-2.1,2.1),Ot=(de,An)=>Mt(Ne(vt+de,Ht+An,.09));ut([Ot(-.6,-.4),Ot(.3,0),Ot(-.6,.4),Ot(-.2,0)],Math.abs(It.curv)*_.speed>.95?"#f0b7c3":"#a5dbe6")}if(Ci&&Ei?.points?.length&&ee==="running"){let _t=Ei.points[Ms];_t&&ge(_t[1],_t[2],_t[3],_t[4],"#b8e9e6",.35)}if(typeof qn<"u")for(let _t of qn)ge(_t.s,_t.l,_t.yaw||0,0,_t.color);if(typeof it<"u"&&it.room)for(let _t of it.peers.values())_t.position&&ge(_t.position.s,_t.position.l,_t.position.yaw,_t.position.jump,"#eab5ce");if(_.mini>0||_.nitroTime>0||_.pad>0){let _t=be(_.s),vt=yt(Mt(Ne(_.s-2,_.l,.4+_.jump)));vt&&(l.fillStyle=_.nitroTime>0?"#bcb2ff99":"#95edff99",l.beginPath(),l.ellipse(vt[0],vt[1],vt[3]*.7,vt[3]*.45,0,0,x),l.fill())}ge(_.s,_.l,_.yaw,_.jump,typeof nn<"u"?nn.paint:"#8ccde4")},F=function(a,l){let d=new Float32Array(16);for(let g=0;g<4;g++)for(let T=0;T<4;T++)d[g*4+T]=a[T]*l[g*4]+a[4+T]*l[g*4+1]+a[8+T]*l[g*4+2]+a[12+T]*l[g*4+3];return d},S=function(a,l,d){let g=L();return g[12]=a,g[13]=l,g[14]=d,g},U=function(a,l,d){let g=L();return g[0]=a,g[5]=l,g[10]=d,g},V=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([1,0,0,0,0,l,d,0,0,-d,l,0,0,0,0,1])},X=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,0,-d,0,0,1,0,0,d,0,l,0,0,0,0,1])},j=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,d,0,0,-d,l,0,0,0,0,1,0,0,0,0,1])},Y=function(a=[0,0,0],l=[1,1,1],d=[0,0,0]){return F(S(...a),F(X(d[1]),F(V(d[0]),F(j(d[2]),U(...l)))))},W=function(a,l){return[a[0]*l[0]+a[4]*l[1]+a[8]*l[2]+a[12],a[1]*l[0]+a[5]*l[1]+a[9]*l[2]+a[13],a[2]*l[0]+a[6]*l[1]+a[10]*l[2]+a[14]]},Q=function(a){let l=[a[0],a[1],a[2]],d=[a[4],a[5],a[6]],g=[a[8],a[9],a[10]],T=p(d,g),A=p(g,l),R=p(l,d),O=M(l,T)||1;return new Float32Array([...P(T,1/O),...P(A,1/O),...P(R,1/O)])},lt=function(a,l){return z([a[0]*l[0]+a[3]*l[1]+a[6]*l[2],a[1]*l[0]+a[4]*l[1]+a[7]*l[2],a[2]*l[0]+a[5]*l[1]+a[8]*l[2]])},rt=function(a,l,d=[0,1,0]){let g=z(b(a,l)),T=z(p(d,g)),A=p(g,T);return new Float32Array([T[0],A[0],g[0],0,T[1],A[1],g[1],0,T[2],A[2],g[2],0,-M(T,a),-M(A,a),-M(g,a),1])},dt=function(a,l,d,g){let T=1/Math.tan(a/2),A=1/(d-g);return new Float32Array([T/l,0,0,0,0,T,0,0,0,0,(g+d)*A,-1,0,0,2*g*d*A,0])},st=function(a,l,d,g,T,A){return new Float32Array([2/(l-a),0,0,0,0,2/(g-d),0,0,0,0,-2/(A-T),0,-(l+a)/(l-a),-(g+d)/(g-d),-(A+T)/(A-T),1])},at=function(a,l,d,g=d){let T=b(l,a),A=z(T),R=z(p(Math.abs(A[2])<.95?[0,0,1]:[1,0,0],A)),O=p(R,A),B=P(v(a,l),.5),Z=N(T);return new Float32Array([R[0]*d,R[1]*d,R[2]*d,0,A[0]*Z,A[1]*Z,A[2]*Z,0,O[0]*g,O[1]*g,O[2]*g,0,...B,1])},ft=function(a){let l=parseInt(a.replace("#",""),16);return[l>>16&255,l>>8&255,l&255].map(d=>Math.pow(d/255,2.2))},Xt=function(a,l,d){return{p:a,n:l,i:d}},Be=function(a=20,l=12){let d=[],g=[],T=[];for(let A=0;A<=l;A++){let R=A*m/l;for(let O=0;O<=a;O++){let B=O*x/a,Z=[Math.sin(R)*Math.cos(B),Math.cos(R),Math.sin(R)*Math.sin(B)];d.push(...Z),g.push(...Z)}}for(let A=0;A<l;A++)for(let R=0;R<a;R++){let O=A*(a+1)+R,B=O+a+1;T.push(O,O+1,B,O+1,B+1,B)}return Xt(d,g,T)},xe=function(a=16,l=1){let d=[],g=[],T=[];for(let A=0;A<2;A++)for(let R=0;R<=a;R++){let O=R*x/a,B=A?l:1,Z=z([Math.cos(O),1-l,Math.sin(O)]);d.push(B*Math.cos(O),A-.5,B*Math.sin(O)),g.push(...Z)}for(let A=0;A<a;A++){let R=A,O=A+a+1;T.push(R,O,R+1,R+1,O,O+1)}for(let A=0;A<2;A++){let R=d.length/3,O=A-.5,B=A?l:1;d.push(0,O,0),g.push(0,A?1:-1,0);for(let Z=0;Z<=a;Z++){let ot=Z*x/a;d.push(B*Math.cos(ot),O,B*Math.sin(ot)),g.push(0,A?1:-1,0)}for(let Z=0;Z<a;Z++)T.push(R,R+Z+(A?2:1),R+Z+(A?1:2))}return Xt(d,g,T)},ve=function(a,l,d=48,g=10,T=0,A=x){let R=[],O=[],B=[];for(let Z=0;Z<=d;Z++){let ot=T+A*Z/d;for(let yt=0;yt<=g;yt++){let ut=yt*x/g,Mt=Math.cos(ut),At=Math.sin(ut);R.push((a+l*Mt)*Math.cos(ot),(a+l*Mt)*Math.sin(ot),l*At),O.push(Mt*Math.cos(ot),Mt*Math.sin(ot),At)}}for(let Z=0;Z<d;Z++)for(let ot=0;ot<g;ot++){let yt=Z*(g+1)+ot,ut=yt+g+1;B.push(yt,ut,yt+1,ut,ut+1,yt+1)}return Xt(R,O,B)},xt=function(a,l,d,g=.07){let T=[a,l,d,g].join(",");if(ht.has(T))return ht.get(T);g=Math.min(g,a/2*.95,l/2*.95,d/2*.95);let A=[],R=[],O=[],B=[a/2,l/2,d/2],Z=[[[0,0,d/2],[1,0,0],[0,1,0],a,l],[[0,0,-d/2],[-1,0,0],[0,1,0],a,l],[[a/2,0,0],[0,0,-1],[0,1,0],d,l],[[-a/2,0,0],[0,0,1],[0,1,0],d,l],[[0,l/2,0],[1,0,0],[0,0,-1],a,d],[[0,-l/2,0],[1,0,0],[0,0,1],a,d]];for(let[yt,ut,Mt,At,Lt]of Z){let ge=Ht=>[-Ht/2,-Ht/2+g*.28,-Ht/2+g,Ht/2-g,Ht/2-g*.28,Ht/2],_t=ge(At),vt=ge(Lt),It=A.length/3;for(let Ht of vt)for(let Ot of _t){let de=v(yt,v(P(ut,Ot),P(Mt,Ht))),An=de.map((En,$e)=>E(En,-B[$e]+g,B[$e]-g)),We=z(b(de,An));A.push(...v(An,P(We,g))),R.push(...We)}for(let Ht=0;Ht<5;Ht++)for(let Ot=0;Ot<5;Ot++){let de=It+Ht*6+Ot;O.push(de,de+1,de+6,de+1,de+7,de+6)}}let ot=Xt(A,R,O);return ht.set(T,ot),ot},qt=function(a,l=.04,d=8){let g=[],T=[],A=[];for(let R=0;R<a.length;R++){let O=z(b(a[Math.min(R+1,a.length-1)],a[Math.max(R-1,0)])),B=z(p(O,Math.abs(O[1])<.9?[0,1,0]:[0,0,1])),Z=p(O,B);for(let ot=0;ot<=d;ot++){let yt=ot*x/d,ut=v(P(B,Math.cos(yt)),P(Z,Math.sin(yt)));g.push(...v(a[R],P(ut,l))),T.push(...ut)}}for(let R=0;R<a.length-1;R++)for(let O=0;O<d;O++){let B=R*(d+1)+O,Z=B+d+1;A.push(B,B+1,Z,B+1,Z+1,Z)}return Xt(g,T,A)},le=function(a,l,d,g){let T=[],A=[],R=[];for(let B=0;B<=144;B++){let Z=B*x/144;for(let ot of[-1,1])T.push((a+ot*d)*Math.cos(Z),g,(l+ot*d)*Math.sin(Z)),A.push(0,1,0)}for(let B=0;B<144;B++){let Z=B*2;R.push(Z,Z+2,Z+1,Z+1,Z+2,Z+3)}return Xt(T,A,R)},oe=function(a,l,d,g=Zt.green,T=!1,A=.13){a.add(T?me:Vt,Y(l,d),g,A)},pt=function(a,l,d,g,T=.06,A=[0,0,0],R=.12){a.add(xt(...d,T),Y(l,[1,1,1],A),g,R)},C=function(a,l,d,g,T,A=.2,R=!1){a.add(ye,at(l,d,g),T,A),R&&(oe(a,l,[g,g,g],T,!0,A),oe(a,d,[g,g,g],T,!0,A))},y=function(a,l,d,g,T=[0,0,0],A=!1){a.add(A?ze:Ce,Y(l,d,T),g)},q=function(a,l,d,g,T=.15){a.add(qt(l,d),ne,g,T)},nt=function(a,l,d,g=100){return Array.from({length:g+1},(T,A)=>[a*Math.cos(A*x/g),d,l*Math.sin(A*x/g)])},Ct=function(){return ct=ct*1664525+1013904223>>>0,ct/4294967296},Ha=function(a,l,d){let g=-d*Math.min(.09,_.speed*.003),T=Math.sin(a*18)*Math.min(.012,_.speed*5e-4);G.local=Y([0,T,0],[1,1,1],[g,0,0]),mt.local=Y([-.31,1.57+T,0],[1,1,1],[-g*.5,-d*.13,0]);for(let A of Rt)A.n.local=F(S(A.x,.41,A.z),F(X(A.front?-(_.drifting?d*.12-Tn(_.yaw-_.velocityYaw)*.62:d*.26):0),j(gc)));for(let A of Dt){let R=_.boostActive?1.25+.17*Math.sin(a*38+A.side):_.pad>0?1+.12*Math.sin(a*36):_.mini>0?.65+.12*Math.sin(a*42+A.side):.001;A.n.local=Y([-1.9,.43,A.side*.34],[R,Math.max(.01,R),Math.max(.01,R)])}},en=function(){return Gn[tn]},Oi=function(){return De*en().laps},Fs=function(a){let l=en().points,d=l.length,g=(a%d+d)%d,T=Math.floor(g),A=g-T,R=l[(T+d-1)%d],O=l[T],B=l[(T+1)%d],Z=l[(T+2)%d];return O.map((ot,yt)=>.5*(2*ot+(-R[yt]+B[yt])*A+(2*R[yt]-5*ot+4*B[yt]-Z[yt])*A*A+(-R[yt]+3*ot-3*B[yt]+Z[yt])*A*A*A))},w=function(){ds=tn,fn=[],De=0;let a=en().points.length*120;for(let g=0;g<=a;g++){let T=g*en().points.length/a,A=Fs(T);g&&(De+=N(b(A,fn[g-1].p)));let R=b(Fs(T+1e-4),Fs(T-1e-4));fn.push({s:De,p:A,h:Math.atan2(R[2],R[0])})}let l=fn.map(g=>g.p[0]),d=fn.map(g=>g.p[2]);Ur={minX:Math.min(...l),maxX:Math.max(...l),minZ:Math.min(...d),maxZ:Math.max(...d)}},k=function(a){let l=(a%De+De)%De,d=0,g=fn.length-1;for(;d+1<g;){let Z=d+g>>1;fn[Z].s<=l?d=Z:g=Z}let T=fn[d],A=fn[g],R=(l-T.s)/(A.s-T.s||1),O=Math.atan2(Math.sin(A.h-T.h),Math.cos(A.h-T.h)),B=T.h+O*R;return{p:T.p.map((Z,ot)=>I(Z,A.p[ot],R)),h:B,T:[Math.cos(B),0,Math.sin(B)],R:[-Math.sin(B),0,Math.cos(B)],curv:O/(A.s-T.s),slope:(A.p[1]-T.p[1])/(A.s-T.s)}},tt=function(a,l){let d=a-l;return jt==="circuit"&&(d-=Math.round(d/De)*De),d},J=function(){return di+(_.timePenalty||0)},K=function(a){let l=Math.floor(a/60),d=a-l*60;return String(l).padStart(2,"0")+":"+d.toFixed(2).padStart(5,"0")},Nt=function(a,l){if(jt!=="circuit")return!0;let d=v(k(a).p,P(k(a).R,l));for(let g=0;g<fn.length;g+=20){let T=fn[g];if(Math.abs(tt(T.s,a))>35&&Math.hypot(T.p[0]-d[0],T.p[2]-d[2])<15)return!1}return!0},Pe=function(){return[[Math.cos(_.yaw),Math.sin(_.yaw)],[-Math.sin(_.yaw),Math.cos(_.yaw)]]},Ze=function(a){let l=Pe(),d=a.angle||0,g=[[Math.cos(d),Math.sin(d)],[-Math.sin(d),Math.cos(d)]],T=[tt(_.s,a.s+(a.ds||0)),_.l-a.l-(a.dl||0)],A=a.kind==="cone"?[.39,.39]:[.35,1.1],R=1/0,O=null;for(let B of[l[0],l[1],g[0],g[1]]){let Z=Math.abs(se(l[0],B))*Gt+Math.abs(se(l[1],B))*Jt,ot=Math.abs(se(g[0],B))*A[0]+Math.abs(se(g[1],B))*A[1],yt=Z+ot-Math.abs(se(T,B));if(yt<=0)return null;if(yt<R){R=yt;let ut=se(T,B)>=0?1:-1;O=B.map(Mt=>Mt*ut)}}return{normal:O,pen:R}},Ve=function(a,l,d=null){let g=1/kt,T=1/Ut,A=d?d.kind==="cone"?9:85:1/0,R=d?1/A:0,O=d?[tt(_.s+l[0],d.s+(d.ds||0)),_.l+l[1]-d.l-(d.dl||0)]:[0,0],B=d?1/(A*(d.kind==="cone"?.09:.48)):0,Z=[_.vS-_.spin*l[1],_.vL+_.spin*l[0]],ot=d?[(d.vS||0)-(d.omega||0)*O[1],(d.vL||0)+(d.omega||0)*O[0]]:[0,0],yt=[Z[0]-ot[0],Z[1]-ot[1]],ut=se(yt,a);if(ut>=0)return 0;let Mt=Wt(l,a),At=Wt(O,a),Lt=d?.13:.035,ge=-(1+Lt)*ut/(g+R+Mt*Mt*T+At*At*B);_.vS+=a[0]*ge*g,_.vL+=a[1]*ge*g,_.spin=E(_.spin+Mt*ge*T,-2.3,2.3);let _t=[-a[1],a[0]],vt=Wt(l,_t),It=Wt(O,_t),Ht=se(yt,_t),Ot=d?.22:.1,de=E(-Ht/(g+R+vt*vt*T+It*It*B),-Ot*ge,Ot*ge);return _.vS+=_t[0]*de*g,_.vL+=_t[1]*de*g,_.spin=E(_.spin+vt*de*T,-2.3,2.3),d&&(d.vS=(d.vS||0)-(a[0]*ge+_t[0]*de)*R,d.vL=(d.vL||0)-(a[1]*ge+_t[1]*de)*R,d.omega=E((d.omega||0)-(At*ge+It*de)*B,-7,7),d.kind==="cone"&&(d.tilt=Math.min(1.35,(d.tilt||0)+Math.abs(ge)*R*.015))),Math.abs(ut)},Ue=function(a,l){a<.7||_.contactSound>0||(_.contactSound=.16,cu(Ne(_.s,_.l,.45),Math.min(14,Math.ceil(a)),[0,1,0]),Rf(l,a),a>5&&(zr=Math.min(.25,a*.012),_.driftCharge*=.5))},cn=function(a){_.contactSound=Math.max(0,_.contactSound-a);for(let l of un.values())for(let d of l.entities)(d.kind==="cone"||d.kind==="barrier")&&(d.vS=(d.vS||0)*Math.exp(-a*2.4),d.vL=(d.vL||0)*Math.exp(-a*2.4),d.ds=E((d.ds||0)+d.vS*a,-18,18),d.dl=E((d.dl||0)+d.vL*a,-7.4-d.l,7.4-d.l),d.angle=(d.angle||0)+(d.omega||0)*a,d.omega=(d.omega||0)*Math.exp(-a*2));for(let l=0;l<3;l++){let d=Pe(),g=Math.abs(d[0][1])*Gt+Math.abs(d[1][1])*Jt,T=fe-g;if(Math.abs(_.l)>T){let A=Math.sign(_.l),R=[0,-A];_.l=A*(T-.015);let O=[A*(Math.sign(d[0][1])*Gt*d[0][0]+Math.sign(d[1][1])*Jt*d[1][0]),A*g],B=Ve(R,O);Ue(B,"rail"),B>4&&(qa(!1),_.turnRate*=.4,Qa=!1)}if(!(_.jump>.85))for(let A of un.values())for(let R of A.entities){if(R.kind!=="cone"&&R.kind!=="barrier"||Math.abs(tt(R.s+(R.ds||0),_.s))>4.5||Math.abs(R.l+(R.dl||0)-_.l)>4)continue;let O=Ze(R);if(!O)continue;let B=R.kind==="cone"?9:85,Z=B/(B+kt),ot=Math.max(0,O.pen-.008)*.82;_.s+=O.normal[0]*ot*Z,_.l+=O.normal[1]*ot*Z,R.ds=(R.ds||0)-O.normal[0]*ot*(1-Z),R.dl=(R.dl||0)-O.normal[1]*ot*(1-Z);let yt=Pe(),ut=[tt(R.s+(R.ds||0),_.s),R.l+(R.dl||0)-_.l],Mt=E(se(ut,yt[0]),-Gt,Gt),At=E(se(ut,yt[1]),-Jt,Jt),Lt=[yt[0][0]*Mt+yt[1][0]*At,yt[0][1]*Mt+yt[1][1]*At],ge=Ve(O.normal,Lt,R);Ue(ge,R.kind)}}_.speed=Math.hypot(_.vS,_.vL),_.velocityYaw=Math.atan2(_.vL,_.vS),_.lateralSpeed=_.vL},hn=function(a,l){if(!Bt.has(a)){let d=new ue;l(d),Bt.set(a,d.finish())}return Bt.get(a)},Me=function(a,l,d,g,T="#627596"){let A=[-l/2,g,-d/2],R=[l/2,g,-d/2],O=[l/2,g,d/2],B=[-l/2,g,d/2],Z=[-l/2,g+1.3,0],ot=[l/2,g+1.3,0];jn(a,A,R,ot,Z,T),jn(a,Z,ot,O,B,T),jn(a,A,Z,B,B,"#e9e1d2"),jn(a,R,O,ot,ot,"#e9e1d2");for(let yt=0;yt<9;yt++){let ut=-l/2+yt*l/8;q(a,[[ut,g,-d/2],[ut,g+1.3,0],[ut,g,d/2]],.025,"#8797b0")}C(a,[-l/2-.15,g+1.33,0],[l/2+.15,g+1.33,0],.08,T)},Pn=function(a,l=0){let d=["#fff0db","#e9eafa","#f9dbe2","#e0f1ec"][l%4],g=["#7190b6","#9a82b3","#be8f98","#6c9a9a"][l%4];pt(a,[0,2.65,0],[6,5.3,4.8],d,.08),pt(a,[0,.12,0],[6.4,.24,5.1],"#b9b7c5",.035),Me(a,6.7,5.8,5.3,g);for(let T of[-1,1])for(let A of[-1.9,0,1.9])for(let R of[1.4,3.85])pt(a,[A,R,T*2.425],[1.2,1.35,.055],g,.025),pt(a,[A,R,T*2.46],[1.05,1.18,.03],"#b8dfe8",.01,[0,0,0],.45),C(a,[A,R-.58,T*2.49],[A,R+.58,T*2.49],.025,"#f4f7fa"),pt(a,[A,R-.72,T*2.55],[1.35,.12,.28],g,.015);pt(a,[0,1.03,2.5],[1.04,2.05,.1],"#798c9c",.025),pt(a,[.34,1.03,2.57],[.05,.12,.04],"#f7d5a4",.01);for(let T of[-1,1])pt(a,[T*2.65,.48,2.9],[.65,.9,.7],"#b9c9b0",.035),oe(a,[T*2.65,1.14,2.9],[.6,.55,.5],"#88ba9a",!0)},Hn=function(a,l=0){let d=["#ef9ba5","#88bfc9","#a6a0d5"][l%3];pt(a,[0,2,0],[7,4,4.8],"#fff1dd",.06),Me(a,7.7,5.8,4,"#6f7d98");for(let g of[-2.05,0,2.05])pt(a,[g,1.4,2.45],[1.8,2.15,.06],"#88afb9",.02),pt(a,[g,1.45,2.5],[1.54,1.92,.025],"#c2e4e8",.015),pt(a,[g,1.45,2.54],[.045,1.92,.02],"#edf6ee",.005);pt(a,[0,3.03,2.65],[7.4,.7,.55],d,.035);for(let g=0;g<12;g++)pt(a,[-3.35+g*.61,2.62,2.95],[.59,.24,1.15],g%2?"#fff6e3":d,.025,[.12,0,0]);for(let g of[-1,1])C(a,[g*3.3,0,3.35],[g*3.3,2.6,3.35],.055,d);for(let g of[-1.9,0,1.9])pt(a,[g,3.04,2.96],[.45,.34,.025],"#fff6e6",.02),pt(a,[g+.28,3.04,2.97],[.065,.22,.02],"#fff6e6",.01);for(let g of[-2.6,2.7]){pt(a,[g,.35,3.35],[.75,.7,.65],"#cda883",.035);for(let T of[-.14,.14])pt(a,[g,.52,3.35+T],[.6,.035,.035],"#ecd3a5",.005)}pt(a,[1.4,.72,3.5],[.6,1.3,.12],"#7e8f9c",.03,[.08,0,0]);for(let g=0;g<4;g++)pt(a,[1.4,.38+g*.2,3.58],[.38,.025,.025],"#e9f1e8",.005)},li=function(a,l=0){let d="#997786",g=["#f8c6dc","#f6b8d5","#ffdfeb"];C(a,[0,0,0],[l?.35:-.25,3.4,0],.18,d),C(a,[0,1.9,0],[-1.55,3.55,.2],.11,d),C(a,[.1,2.2,0],[1.55,3.8,-.25],.1,d);let A=[[-1.4,3.9,.1,1.5],[0,4.6,0,1.8],[1.6,4.05,-.2,1.5],[-.4,4,1.35,1.45],[.4,4.1,-1.3,1.5]];for(let R=0;R<A.length;R++){let[O,B,Z,ot]=A[R];oe(a,[O,B,Z],[ot,ot*.7,ot*.86],g[(R+l)%3],!0,.02),oe(a,[O+.2,B+.6,Z+.15],[ot*.6,ot*.28,ot*.52],"#ffe8f1",!0,.01)}for(let R=0;R<12;R++){let O=R*2.399,B=.6+R%4*.38;pt(a,[Math.cos(O)*B,.045,Math.sin(O)*B],[.12,.015,.065],g[R%3],.012,[0,O,0])}},Bi=function(a){C(a,[0,0,0],[0,4.2,0],.14,"#9c8c84");for(let l=0;l<3;l++)oe(a,[(l-1)*.45,2.7+l*.82,0],[1.9-l*.35,.78,1.25-l*.16],["#7cb5aa","#8fc9b5","#a6d7ba"][l],!0,.02)},Fe=function(a){pt(a,[0,.1,0],[.55,.2,.55],"#9da8b9",.025),C(a,[0,.15,0],[0,5.6,0],.065,"#7e8da8"),q(a,[[0,5.4,0],[0,5.8,.3],[0,5.8,1.3],[0,5.5,1.55]],.055,"#7e8da8"),pt(a,[0,5.46,1.55],[.65,.16,.9],"#e5edee",.05),pt(a,[0,5.36,1.55],[.5,.025,.72],"#fff0b3",.025,[0,0,0],.1)},Ye=function(a){for(let l of[-4,4])C(a,[l,0,0],[l*.94,6.3,0],.29,"#d98085"),C(a,[l,0,0],[l,.75,0],.31,"#66728c"),C(a,[l*.95,4.65,0],[l*.95,6.65,0],.32,"#dc8d91");pt(a,[0,5,0],[9.8,.36,.48],"#d68183",.06),q(a,[[-5.65,6.55,0],[-4.5,6.3,0],[0,6.2,0],[4.5,6.3,0],[5.65,6.55,0]],.25,"#6d7089"),C(a,[0,5,0],[0,6.15,0],.13,"#d68183"),pt(a,[0,5.65,.31],[.9,1.12,.15],"#55677e",.02),pt(a,[0,5.65,.4],[.5,.69,.025],"#edcf9d",.01)},ci=function(a){pt(a,[0,.25,0],[13,.5,6.8],"#c6c4ce",.04);for(let l of[-5,0,5])for(let d of[-2.2,2.2])C(a,[l,.5,d],[l,4.1,d],.1,"#8fa2ad");Me(a,14,7.8,4.1,"#73849c");for(let l=0;l<12;l++)pt(a,[-5.8+l*1.05,.53,3],[.8,.025,.2],"#f6dfa0",.008);pt(a,[0,3.2,2.6],[4,.9,.22],"#eef5ed",.04),pt(a,[-1.55,3.2,2.75],[.45,.45,.04],"#8ec9c5",.03);for(let l=0;l<6;l++)pt(a,[-.8+l*.45,3.2,2.75],[.19,.24,.03],"#8294a8",.01);for(let l of[-3.5,3.5]){pt(a,[l,1.02,0],[2.7,.15,.65],"#c2a38c",.02);for(let d of[-.95,.95])C(a,[l+d,.5,0],[l+d,.95,0],.06,"#8c91a3")}},Ge=function(a){for(let l of[-1.16,1.16])pt(a,[0,.05,l],[20,.1,.09],"#81929f",.015);for(let l=0;l<20;l++)pt(a,[-9.5+l,.005,0],[.23,.07,3.4],"#bea58d",.015);pt(a,[0,1.65,0],[13,2.7,3],"#edf5dc",.25),pt(a,[0,1.25,0],[13.15,.38,3.06],"#83bcb6",.04),pt(a,[0,3.08,0],[12.5,.25,3.1],"#b3bfc6",.12);for(let l of[-1,1]){for(let d=0;d<7;d++){let g=-5.2+d*1.73;pt(a,[g,2,l*1.52],[1.35,1.05,.06],"#769ba8",.04),pt(a,[g,2.1,l*1.56],[1.16,.8,.025],"#bbdfe6",.03)}for(let d of[-4.3,4.3])oe(a,[d,.45,l*1.16],[.49,.49,.13],"#596980",!0),pt(a,[d,.48,l*1.31],[.19,.19,.03],"#bfccd1",.03)}for(let l of[-6.55,6.55]){pt(a,[l,2.1,0],[.06,1.05,2.1],"#acd2dd",.05);for(let d of[-.9,.9])oe(a,[l,1.25,d],[.05,.13,.13],"#fff4ba",!0)}q(a,[[-1.5,3.25,0],[0,4.3,0],[1.5,3.25,0]],.055,"#718699"),C(a,[-.65,4.3,0],[.65,4.3,0],.07,"#718699")},hi=function(a){pt(a,[0,4.8,0],[24,9.6,7],"#f4eedf",.06),Me(a,25.2,8.2,9.6,"#8095ad"),pt(a,[0,6.1,3.7],[4.8,12.2,2],"#e6eaf0",.06),Me(a,5.4,3.1,12.2,"#879bb4");for(let l of[-10,-7,-4,4,7,10])for(let d of[2,4.8,7.6])pt(a,[l,d,3.56],[1.9,1.65,.06],"#8da6b8",.025),pt(a,[l,d,3.61],[1.64,1.41,.025],"#c7e9eb",.015),pt(a,[l,d,3.65],[.045,1.41,.025],"#f6f5ed",.005);pt(a,[0,1.5,4.75],[3.2,2.8,.06],"#9cbdcd",.025);for(let l of[-.75,.75])pt(a,[l,1.5,4.81],[.035,2.7,.025],"#f7eee4",.005);oe(a,[0,10.2,4.77],[.9,.9,.06],"#fff7df",!0,.02),a.add(ve(.89,.045,28,7),S(0,10.2,4.84),"#7f91a8",.08),C(a,[0,10.2,4.91],[0,10.8,4.91],.03,"#697e98"),C(a,[0,10.2,4.92],[.43,10.4,4.92],.03,"#697e98"),pt(a,[0,-.02,7.5],[23,.1,12],"#e2e1db",.03);for(let l of[-5.5,5.5])pt(a,[l,1.5,12.1],[.8,3,.8],"#e8dbc7",.04),pt(a,[l,3.06,12.1],[1,.2,1],"#a1acb9",.025);for(let l of[-1,1])for(let d=0;d<8;d++){let g=l*(6.4+d*.65);C(a,[g,0,12],[g,1.8,12],.025,"#9cacc0")}for(let l of[-1,1])C(a,[l*6,1.65,12],[l*11.5,1.65,12],.035,"#9cacc0")},zi=function(a){pt(a,[0,1.25,0],[1.2,2.5,.82],"#f3a4ad",.09),pt(a,[-.13,1.55,.43],[.82,1.35,.05],"#b6e0e9",.03);for(let l=0;l<3;l++)for(let d=0;d<3;d++)pt(a,[-.4+d*.27,1.12+l*.4,.48],[.13,.23,.06],["#f9e2ad","#a3d2cc","#d3c5ec"][d],.025),pt(a,[-.4+d*.27,.94+l*.4,.49],[.1,.04,.02],"#fff0c7",.005);pt(a,[0,.47,.44],[.75,.24,.055],"#738698",.03),pt(a,[.43,1.3,.45],[.13,.18,.04],"#fff0b8",.02)},Wa=function(a){C(a,[0,0,0],[0,2.6,0],.08,"#8c7e8a"),pt(a,[0,2.55,0],[.55,.16,.55],"#877d92",.025),pt(a,[0,2.22,0],[.41,.52,.41],"#ffe4ad",.04),pt(a,[0,1.93,0],[.52,.12,.52],"#a19caa",.025);for(let l of[-.2,.2])for(let d of[-.2,.2])C(a,[l,1.98,d],[l,2.49,d],.018,"#927f8d")},Sf=function(a,l){let d=l==="left"?-1:1;C(a,[0,0,0],[0,2.4,0],.055,"#8499b0"),pt(a,[0,2.28,0],[2.9,.78,.18],"#f3eacb",.04);for(let g=0;g<3;g++){let T=-.86+g*.86;C(a,[T-d*.25,2.02,.12],[T+d*.15,2.28,.12],.055,"#bd8faf"),C(a,[T+d*.15,2.28,.12],[T-d*.25,2.54,.12],.055,"#bd8faf")}},bf=function(a){return hn(a,l=>{a.startsWith("house")?Pn(l,Number(a.slice(-1))):a.startsWith("shop")?Hn(l,Number(a.slice(-1))):a.startsWith("cherry")?li(l,Number(a.slice(-1))):a==="pine"?Bi(l):a==="lamp"?Fe(l):a==="torii"?Ye(l):a==="station"?ci(l):a==="tram"?Ge(l):a==="vending"?zi(l):a==="school"?hi(l):a==="lantern"?Wa(l):(a==="left"||a==="right")&&Sf(l,a)})},Tf=function(a){let l=(a%De+De)%De/De,d=en().sectors,g=d[0];for(let T of d)l>=T.at&&(g=T);return g},wf=function(a,l,d){let g=new Le,T=a*40,A=(B,Z,ot,yt=1,ut=0)=>{if(jt==="circuit"&&Z>=De||!Nt(Z,ot))return null;let Mt=be(Z),At=Ne(Z,ot,-.05),Lt=-Mt.h+(ot>0?m:0)+ut,ge=new Le(bf(B),Y(b(At,l),[yt,yt,yt],[0,Lt,0]));return g.add(ge),ge},R=jt==="circuit"&&en().biome===1;for(let B of[-1,1]){A("lamp",T+7,B*9.65);for(let Z=0;Z<2;Z++)A("cherry"+(a+Z)%2,T+10+Z*20,B*(R?11.3:12.5),R?1.12:.92);(a%2===0||R)&&a%3!==1&&!(a===2&&B<0)&&!(R&&a===0&&B>0)&&A("house"+(a+(B>0?1:0))%4,T+19,B*(16.5+d()*2),.9+d()*.25),a%3===1&&!(a===2&&B<0)&&A("shop"+a%3,T+18,B*17.5),a%5===0&&A("vending",T+9,B*10.1),a%3===0&&A("pine",T+32,B*22,1.5)}let O=Tn(be(T+37).h-be(T+7).h);if(Math.abs(O)>.25&&A(O>0?"right":"left",T+5,(O>0?-1:1)*9.4,1,O>0?-m/2:m/2),jt==="circuit"){let B=(T+20)/De;if(R&&a===0&&A("school",T+21,28),a===2&&(A("station",T+17,-20,1),A("tram",T+17,-27,1),A("vending",T+9,-12.8)),B>.66&&B<.74&&a%2===0){A("torii",T+22,-16);for(let Z of[-1,1])A("lantern",T+9,Z*10)}}return g},Ef=function(){ui&&ui.mesh.dispose(),ui&&(ui.mesh.dispose(),ui=null);let a=new ue,l=Ur,d=[(l.minX+l.maxX)*.5,0,(l.minZ+l.maxZ)*.5],g=l.maxX-l.minX,T=l.maxZ-l.minZ;if(en().biome===0)for(let[R,O,B,Z]of[[g*.82,T*.89,-.43,"#eadfce"],[g*.78,T*.85,-.3,"#c7d9b4"]]){let ot=[d[0],B,d[2]],yt=[0,1,0],ut=[];for(let Mt=0;Mt<=96;Mt++){let At=Mt*x/96,Lt=1+.025*Math.sin(At*5);ot.push(d[0]+Math.cos(At)*R*Lt,B,d[2]+Math.sin(At)*O*Lt),yt.push(0,1,0),Mt&&ut.push(0,Mt,Mt+1)}a.add(Xt(ot,yt,ut),ne,Z,.02)}for(let R=0;R<12;R++){let O=R*x/12,B=320+R%3*36,Z=d[0]+Math.cos(O)*B,ot=d[2]+Math.sin(O)*B,yt=40+R%4*18;y(a,[Z,yt*.5-5,ot],[70,yt,60],["#b5c4de","#a6bfd8","#c6cfdf"][R%3],[0,O,0],!0),R%3===0&&y(a,[Z,yt*.85-5,ot],[25,yt*.3,22],"#e5e5f0",[0,O,0],!0)}for(let R=0;R<10;R++){let O=R*x/10,B=[d[0]+Math.cos(O)*260,57+R%3*14,d[2]+Math.sin(O)*250];for(let Z=0;Z<4;Z++)oe(a,v(B,[(Z-1.5)*12,Math.sin(Z*2)*4,0]),[17,7+Z%2*3,10],"#fff5f3",!0,.01)}ui=new Le(a.finish()),ui.shadow=!1,tu=tn,cc=Array.from({length:24},(R,O)=>({phase:O*2.399,node:new Le(Af)}));for(let R of cc)R.node.shadow=!1},Cf=function(a,l){if(jt!=="circuit")return;(tu!==tn||!ui)&&Ef(),ui.local=S(-a[0],-a[1],-a[2]),Se.add(ui);let d=be(_.s);for(let g of cc){let T=g.phase,A=(T*13+l*1.7)%55-10,R=Math.sin(T*7)*10+Math.sin(l*.6+T)*2,O=1+((T*2-l*.65)%7+7)%7,B=v(Ne(_.s+A,R,O),[Math.sin(l+T)*.25,0,0]);g.node.local=Y(b(B,a),[1,1,1],[l*.8+T,T,l]),Se.add(g.node)}},Xa=function(){if(!Te)try{let yt=function(Lt,ge){let _t=a.createBufferSource(),vt=a.createBiquadFilter(),It=a.createGain();return _t.buffer=Z,_t.loop=!0,vt.type=Lt,vt.frequency.value=ge,It.gain.value=0,_t.connect(vt),vt.connect(It),It.connect(l),_t.start(),{source:_t,filter:vt,gain:It}},a=new(window.AudioContext||window.webkitAudioContext),l=a.createGain(),d=a.createDynamicsCompressor();l.gain.value=Fn?.48:0,l.connect(d),d.threshold.value=-18,d.ratio.value=4,d.connect(a.destination);let g=a.createGain(),T=a.createBiquadFilter();T.type="lowpass",T.frequency.value=1e3,g.gain.value=0,T.connect(g),g.connect(l);let A=a.createOscillator(),R=a.createOscillator(),O=a.createOscillator(),B=a.createGain();A.type="sawtooth",R.type="triangle",O.type="sine",R.detune.value=9,B.gain.value=.6;for(let Lt of[A,R])Lt.connect(T),Lt.start();O.connect(B),B.connect(T),O.start();let Z=a.createBuffer(1,a.sampleRate*2,a.sampleRate),ot=Z.getChannelData(0);for(let Lt=0;Lt<ot.length;Lt++)ot[Lt]=Math.random()*2-1;let ut=yt("lowpass",1100),Mt=yt("bandpass",1800),At=yt("highpass",2200);Mt.filter.Q.value=3.5,Te={ctx:a,master:l,engine1:A,engine2:R,sub:O,engineGain:g,engineFilter:T,noise:Z,wind:ut,tire:Mt,turbo:At,oldSpeed:0,oldBoost:!1,gear:0},Te.rail=Nu(a,l,s),Te.rail.load()}catch{}},ki=function(a=620,l=.1){if(!Fn||!Te)return;let{ctx:d,master:g}=Te,T=d.createOscillator(),A=d.createGain();T.type="sine",T.frequency.setValueAtTime(a,d.currentTime),T.frequency.exponentialRampToValueAtTime(a*1.28,d.currentTime+l),A.gain.setValueAtTime(.07,d.currentTime),A.gain.exponentialRampToValueAtTime(.001,d.currentTime+l),T.connect(A),A.connect(g),T.start(),T.stop(d.currentTime+l+.02)},Rf=function(a,l){if(!Fn||!Te||a==="rail"&&Te.rail?.play(l))return;let{ctx:d,master:g,noise:T}=Te,A=d.createBufferSource(),R=d.createBiquadFilter(),O=d.createGain(),B=d.currentTime;if(A.buffer=T,R.type="bandpass",R.frequency.value=a==="rail"?1400:a==="cone"?450:700,R.Q.value=a==="rail"?1.5:.6,O.gain.setValueAtTime(Math.min(.3,.035+l*.018),B),O.gain.exponentialRampToValueAtTime(.001,B+.16),A.connect(R),R.connect(O),O.connect(g),A.start(),A.stop(B+.2),a==="rail"){let Z=d.createOscillator(),ot=d.createGain();Z.type="triangle",Z.frequency.setValueAtTime(330,B),Z.frequency.exponentialRampToValueAtTime(140,B+.15),ot.gain.setValueAtTime(.07,B),ot.gain.exponentialRampToValueAtTime(.001,B+.2),Z.connect(ot),ot.connect(g),Z.start(),Z.stop(B+.21)}},Pf=function(){if(!Te)return;let a=Te,l=a.ctx.currentTime,d=ee==="running",g=_.speed,T=Math.min(5,Math.floor(g/9)),A=48+g*2.2+g%9*5;(!d||!Fn||wn.sfxVolume<=0)&&a.rail?.stop(),a.master.gain.setTargetAtTime(Fn?.48*wn.sfxVolume:0,l,.05);let R=d?.012+Math.min(.04,g*7e-4)+(Ie.gas?.013:0):0;a.engineGain.gain.setTargetAtTime(R,l,.07),a.engineFilter.frequency.setTargetAtTime(550+g*25+(Ie.gas?500:0),l,.12);let O=T!==a.gear?.8:1;a.gear=T,a.engine1.frequency.setTargetAtTime(A*O,l,.045),a.engine2.frequency.setTargetAtTime(A*1.5*O,l,.065),a.sub.frequency.setTargetAtTime(A*.5,l,.07),a.wind.gain.gain.setTargetAtTime(d?Math.pow(g/65,2)*.12:0,l,.15),a.wind.filter.frequency.setTargetAtTime(700+g*25,l,.12);let B=Math.abs(Tn(_.yaw-_.velocityYaw)),Z=Ie.brake&&g>5,ot=_.jump<.1?Math.min(1,(_.drifting?B*1.8:Math.max(0,B-.18)*2)+(Z?.55:0)):0;a.tire.gain.gain.setTargetAtTime(d?ot*.075:0,l,.045),a.tire.filter.frequency.setTargetAtTime(1300+g*24+Math.sin(Vs*40)*90,l,.05),a.turbo.gain.gain.setTargetAtTime(d?_.boostBlend*.075:0,l,.1),a.turbo.filter.frequency.setTargetAtTime(1600+_.boostBlend*2400,l,.12),d&&_.boostActive&&!a.oldBoost&&ki(340,.17),a.oldBoost=_.boostActive,a.oldSpeed=g},Os=function(a){if(!Fn||!Te)return;let{ctx:l,master:d,noise:g}=Te,T=l.currentTime,A=l.createBufferSource(),R=l.createBiquadFilter(),O=l.createGain(),B=a==="nitro"||a==="combo",Z=B?.48:a==="drift"?.12:.23;A.buffer=g,R.type=a==="land"?"lowpass":"bandpass",R.Q.value=.75,R.frequency.setValueAtTime(a==="land"?300:B?650:1500,T),R.frequency.exponentialRampToValueAtTime(B?5500:700,T+Z),O.gain.setValueAtTime(.001,T),O.gain.linearRampToValueAtTime(B?.19:.1,T+.025),O.gain.exponentialRampToValueAtTime(.001,T+Z),A.connect(R),R.connect(O),O.connect(d),A.start(),A.stop(T+Z+.03),(a==="combo"||a==="small")&&ki(a==="combo"?1080:820,.08)},eu=function(a){if(_.nitro>=2){_.energy=Math.min(99,_.energy+a);return}for(_.energy+=a;_.energy>=100&&_.nitro<2;)_.energy-=100,_.nitro++,gn("NITRO READY","\u6C2E\u6C14\u5DF2\u88C5\u74F6 \xB7 E \u91CA\u653E 3.2 \u79D2",1.2),ki(1050,.09)},nu=function(a){_.jetHistory.push({kind:a,t:di}),_.jetHistory=_.jetHistory.filter(d=>di-d.t<2.5).slice(-3);let l=_.jetHistory.map(d=>d.kind).join("");(l==="CWW"||l==="WCW")&&(_.combo=l,_.comboTimer=1.3,_.mini=Math.max(_.mini,.88),l==="WCW"&&(_.nitroTime+=.35),gn(l+" \u55B7",l==="CWW"?"\u6C2E\u6C14 \u2192 \u5C0F\u55B7 \u2192 \u5C0F\u55B7 \xB7 \u9AD8\u901F\u51FA\u5F2F":"\u5C0F\u55B7 \u2192 \u6C2E\u6C14 \u2192 \u5C0F\u55B7 \xB7 \u5EF6\u957F\u55B7\u5C04",1.35),Os("combo"))},Lf=function(){ee!=="running"||_.nitro<1||_.nitroTime>0||(_.nitro--,_.nitroTime=3.2,gn("NITRO","\u6C2E\u6C14\u55B7\u5C04 \xB7 3.2 \u79D2",.8),nu("C"),Os("nitro"))},Df=function(){ee!=="running"||_.smallJets<1||_.smallWindow<=0||_.jetCooldown>0||(_.smallJets--,_.jetCooldown=.18,_.mini=.72,_.smallWindow=_.smallJets?1.15:0,_.smallCount++,nu("W"),Os("small"),_.comboTimer<=0&&gn(_.smallCount>1?"DOUBLE BOOST":"MINI BOOST",_.smallCount>1?"\u53CC\u55B7 \xB7 \u8FDE\u7EED\u51FA\u5F2F\u52A0\u901F":"\u5C0F\u55B7 \xB7 \u53CA\u65F6\u63A5\u4E0B\u4E00\u55B7",.75))},hc=function(a=2,l="\u5C0F\u55B7\u5DF2\u5C31\u7EEA"){_.smallJets=Math.max(_.smallJets,a),_.smallWindow=1.5,_.smallCount=0,gn(l,"\u70B9 \u7A7A\u683C / Q\uFF0C\u6216\u91CD\u65B0\u6309 W \xB7 \u8FDE\u70B9\u4E24\u6B21\u53CC\u55B7",1.1),ki(760,.06)},uc=function(){_.driftRewarded||_.driftCharge<.1||_.driftDuration<.11||(_.driftRewarded=!0,hc(_.driftCharge>.35?2:1,_.driftCharge>.35?"\u53CC\u55B7\u5DF2\u5C31\u7EEA":"\u5C0F\u55B7\u5DF2\u5C31\u7EEA"))},qa=function(a=!0){_.drifting&&(a&&uc(),_.drifting=!1,_.driftPhase="exit",_.exitTime=.45,_.exitFromGrip=_.tireGrip||3.6,_.exitFromLimit=_.tireLimit||38,_.driftCharge=0,_.driftDuration=0,_.driftSide=0,_.driftReleasing=!1)},Nf=function(a){_.drifting=!0,_.driftSide=a,_.driftCharge=0,_.driftDuration=0,_.driftPhase="entry",_.driftRewarded=!1,_.driftReleasing=!1,_.releaseAge=0,_.driftLatch=!0,_.driftCooldown=.16,_.exitTime=0,_.turnRate+=a*.38,_.gripRecovery=0,Os("drift")},Uf=function(a){_.prevPose={s:_.s,l:_.l,yaw:_.yaw,jump:_.jump};let l=be(_.s),d=_.s,g=typeof Xi=="number"?Xi:(Ie.right?1:0)-(Ie.left?1:0);_.speed=Math.hypot(_.vS,_.vL);for(let It of["pad","mini","nitroTime","smallWindow","jetCooldown","comboTimer","exitTime","driftCooldown","driftBuffer","lastSteerTime","jetInputBuffer","boostInputBuffer"])_[It]=Math.max(0,_[It]-a);_.smallWindow===0&&(_.smallJets=0),Gs=I(Gs,g,1-Math.exp(-a*(g?26:20)));let T=Wn.drift>0||Ie.drift&&!_.prevDrift,A=g&&g!==_.prevSteer;Wn.drift=0,Ie.drift||(_.driftLatch=!1),T&&(_.driftBuffer=.26),g&&(_.lastSteer=Math.sign(g),_.lastSteerTime=.2);let R=_.jump<.12,O=_.speed>.4?Math.atan2(_.vL,_.vS):_.yaw,B=Tn(_.yaw-O),Z=(Math.abs(g)>.12?Math.sign(g):0)||(_.lastSteerTime>0?_.lastSteer:Math.abs(B)>.07?Math.sign(B):0);if(!_.drifting&&_.driftCooldown===0&&R&&_.speed>5&&Z&&(Ie.drift&&(!_.driftLatch||A&&Z!==_.lastDriftSide)||_.driftBuffer>0)?(Nf(Z),_.lastDriftSide=Z,_.driftBuffer=0):_.drifting&&T&&_.driftDuration>.18&&(g*_.driftSide<0||_.driftReleasing)&&(uc(),_.driftReleasing=!0,_.releaseAge=Math.max(.18,_.releaseAge),_.driftBuffer=0),_.drifting){_.driftDuration+=a;let It=g*_.driftSide<0;_.speed<3.5||!R?qa(!1):(!Ie.drift&&_.driftDuration>.14&&(_.driftReleasing=!0),_.driftReleasing&&(_.releaseAge+=a),_.driftPhase=_.driftReleasing?"release":It?"counter":_.driftDuration<.18?"entry":"hold",(It||_.driftReleasing)&&Math.abs(B)<.75&&uc(),(_.driftReleasing&&(_.releaseAge>.55||Math.abs(B)<.065&&_.releaseAge>.16)||It&&Math.abs(B)<.075&&_.driftDuration>.22)&&qa(!0))}(Wn.boost>0||Ie.boost&&!_.prevBoost)&&(_.boostInputBuffer=.15),(Wn.small>0||Ie.small&&!_.prevSmall||Ie.gas&&!_.prevGas)&&(_.jetInputBuffer=.15),Wn.boost=0,Wn.small=0,_.boostInputBuffer>0&&_.nitro>0&&_.nitroTime<=0&&(Lf(),_.boostInputBuffer=0),_.jetInputBuffer>0&&_.smallJets>0&&_.jetCooldown<=0&&(Df(),_.jetInputBuffer=0);let ot=If.step(_,{steer:typeof Xi=="number"?Xi:g,gas:Ie.gas||rn.autoGas&&!Ie.brake||Wi&&!Ie.brake,brake:Ie.brake},a,{sensitivity:rn.sensitivity});Gs=_.steering,_.boostActive=_.nitroTime>0,_.boostBlend=I(_.boostBlend,ot.boost?1:0,1-Math.exp(-a*7));let yt=E(1-l.curv*_.l,.45,1.55),ut=_.vS/yt*a;_.s=Math.max(-8,_.s+ut),_.l+=_.vL*a;let Mt=be(_.s),At=Tn(Mt.h-l.h),Lt=_.vS,ge=_.vL;_.vS=Lt*Math.cos(At)+ge*Math.sin(At),_.vL=-Lt*Math.sin(At)+ge*Math.cos(At),_.yaw=Tn(_.yaw-At);let _t=_.jump>0;(_t||_.vy>0)&&(_.vy-=17*a,_.jump=Math.max(0,_.jump+_.vy*a),_.jump<=0&&(_.vy=0,_t&&(hc(1,"\u843D\u5730\u55B7\u5DF2\u5C31\u7EEA"),Os("land")))),cn(a),gc-=_.vS*a/.4,di+=a,Vs+=a,_.score+=Math.max(0,ut)*.85;let vt=Math.abs(Tn(_.yaw-_.velocityYaw));if(_.drifting&&vt>.035&&_.speed>5&&Math.abs(_.l)<7){let It=a*E((vt+.025)*_.speed*.11,0,3);_.driftCharge+=It,eu(It*42),_.score+=a*35}Qa=_.drifting,(Ie.gas||rn.autoGas)&&!Ie.brake&&_.speed<.7&&Math.abs(_.l)>5.8?_.stuckTime+=a:_.stuckTime=0,_.stuckTime>1.6&&vc(!0);for(let It of un.values())for(let Ht of It.entities){if(Ht.kind==="cone"||Ht.kind==="barrier")continue;let Ot=Ht.s;jt==="circuit"&&(Ot+=Math.round((_.s-Ot)/De)*De);let de=jt==="circuit"?Math.max(0,Math.floor(Ot/De)):0;Ht.hitLap===de||Ot<Math.min(d,_.s)-1.4||Ot>Math.max(d,_.s)+1.4||Math.abs(_.l-Ht.l)>Ht.width||(Ht.kind==="coin"?(Ht.hitLap=de,Ht.hit=!0,_.coins++,eu(3),_.score+=50,ki(700+_.coins%5*80,.04)):Ht.kind==="pad"?(Ht.hitLap=de,_.pad=1.55,gn("BOOST STRIP","\u52A0\u901F\u5E26 \xB7 \u4FDD\u6301\u8DEF\u7EBF",1),Os("nitro")):Ht.kind==="ramp"&&_.vS>7&&(Ht.hitLap=de,_.vy=8,_.jump=.1,_.score+=120,hc(1,"\u7A7A\u55B7\u5DF2\u5C31\u7EEA")))}_.s>=_.checkpoint&&(_.checkpoint+=500,_.score+=500,gn("CHECKPOINT",Math.floor(_.s/500)*500+" m",1)),_.prevSteer=g,_.prevDrift=Ie.drift,_.prevBoost=Ie.boost,_.prevSmall=Ie.small,_.prevGas=Ie.gas,zf(a),lu(),ep(a),jt==="circuit"&&_.s>=Oi()&&xc()},Bs=function(){let a={...Ie};for(let l in Ie)Ie[l]=!1;for(let l of Ya)eo[l]&&(Ie[eo[l]]=!0);for(let l of Ja.values())Ie[l]=!0;for(let l in Wn)Ie[l]&&!a[l]&&Wn[l]++},ru=function(){return Ka=Math.imul(Ka,1664525)+1013904223>>>0,Ka/4294967296},Bf=function(a){let l=(Math.imul(a+419,2654435761)^ks)>>>0;return()=>(l=Math.imul(l,1664525)+1013904223>>>0,l/4294967296)},au=function(a){return 1.7*Math.sin(a*.005)+.65*Math.sin(a*.017)},_c=function(a){if(jt!=="circuit")for(;$n[$n.length-1].s<a+8;){let l=$n[$n.length-1],d=l.s+4;d>mc&&(pc=-m/2+(ru()-.5)*2.15,mc=d+90+ru()*130);let g=E((pc-l.h)*.022,-.0175,.0175);$a=I($a,g,.15);let T=l.h+$a*4;$n.push({s:d,p:[l.p[0]+Math.cos((T+l.h)*.5)*4,au(d),l.p[2]+Math.sin((T+l.h)*.5)*4],h:T})}},be=function(a){if(jt==="circuit")return k(a);_c(a);let l=Math.floor((a+80)/4),d=E(l-Or,0,$n.length-2),g=$n[d],T=$n[d+1],A=E((a-g.s)/4,0,1),R=I(g.h,T.h,A);return{p:g.p.map((B,Z)=>I(B,T.p[Z],A)),h:R,T:[Math.cos(R),0,Math.sin(R)],R:[-Math.sin(R),0,Math.cos(R)],curv:(T.h-g.h)/4,slope:(T.p[1]-g.p[1])/4}},Ne=function(a,l=0,d=0){let g=be(a);return v(v(g.p,P(g.R,l)),[0,d,0])},jn=function(a,l,d,g,T,A){let R=z(p(b(d,l),b(T,l)));R[1]<0&&(R=P(R,-1)),a.add(Xt([...l,...d,...g,...T],[...R,...R,...R,...R],[0,1,2,0,2,3]),ne,A,.06)},ou=function(a){let l=a*40,d=be(l).p,g=new ue,T=Bf(a),A=jt==="circuit"?dc[en().biome]:dc[(Math.floor(Math.max(0,l)/1e3)%3+3)%3],R=ot=>b(ot,d);for(let ot=0;ot<10;ot++){let yt=l+ot*4;if(jt==="circuit"&&yt>=De)break;let ut=be(yt),Mt=be(jt==="circuit"?Math.min(yt+4,De):yt+4),At=(Lt,ge,_t)=>R(v(v(Lt.p,P(Lt.R,ge)),[0,_t,0]));jn(g,At(ut,-7,.04),At(ut,7,.04),At(Mt,7,.04),At(Mt,-7,.04),"#69728e");for(let Lt of[-1,1])jn(g,At(ut,Lt*7,.06),At(ut,Lt*7.65,.06),At(Mt,Lt*7.65,.06),At(Mt,Lt*7,.06),(a*10+ot)%2?"#d1b5e0":"#f4eced"),jn(g,At(ut,Lt*7.65,-.02),At(ut,Lt*(jt==="circuit"?11:64),-.08),At(Mt,Lt*(jt==="circuit"?11:64),-.08),At(Mt,Lt*7.65,-.02),A.ground);if(jt==="circuit")for(let Lt of[-1,1])jn(g,At(ut,Lt*8.6,.06),At(ut,Lt*11,.06),At(Mt,Lt*11,.06),At(Mt,Lt*8.6,.06),"#d9d9e4"),jn(g,At(ut,Lt*11,.06),At(ut,Lt*11,-1.25-ut.p[1]),At(Mt,Lt*11,-1.25-Mt.p[1]),At(Mt,Lt*11,.06),"#b5bbcb");if(jt==="circuit")for(let Lt of[-1,1])Nt(yt+2,Lt*20)&&(jn(g,At(ut,Lt*11,-.12),At(ut,Lt*28,-.12),At(Mt,Lt*28,-.12),At(Mt,Lt*11,-.12),A.ground),jn(g,At(ut,Lt*28,-.12),At(ut,Lt*28,-1.25-ut.p[1]),At(Mt,Lt*28,-1.25-Mt.p[1]),At(Mt,Lt*28,-.12),"#bdc4c7"));if(ot%3===0)for(let Lt of[-2.33,2.33]){let ge=Ne(yt+1.5,Lt,.061);g.add(xt(2.2,.015,.07,.004),Y(R(ge),[1,1,1],[0,-ut.h,0]),"#e0e4e8")}}for(let ot of[-1,1]){let yt=Array.from({length:11},(ut,Mt)=>R(Ne(l+Mt*4,ot*8.1,.72)));q(g,yt,.07,"#b7c6d9"),q(g,Array.from({length:11},(ut,Mt)=>R(Ne(l+Mt*4,ot*8.1,.4))),.045,"#c7d5e2");for(let ut=0;ut<5;ut++){let Mt=l+3+ut*8;if(jt==="circuit"&&Mt>De)break;let At=R(Ne(Mt,ot*8.1,0));C(g,At,v(At,[0,.84,0]),.055,"#9caec2"),pt(g,v(At,[0,.75,0]),[.12,.15,.19],ut%2?"#f7bbcf":"#fff1b9",.02)}}let O=[];function B(ot,yt,ut){if(jt==="circuit"&&yt>De-20)return;let Mt=ot==="coin"?Un:ot==="pad"?lc:ot==="ramp"?Ti:ot==="cone"?ke:$t;O.push({kind:ot,s:yt,l:ut,node:new Le(Mt),hit:!1,width:ot==="barrier"?1.5:ot==="cone"?.85:ot==="coin"?1.12:1.9})}if(a>=2){let ot=Math.floor(T()*3),yt=[-4.2,0,4.2],ut=jt==="circuit"?Math.abs(be(l+22).curv)<.013?.42:.12:a<7?.55:.85;if(T()<ut){let Mt=(ot+1+Math.floor(T()*2))%3;B(T()<.75?"cone":"barrier",l+22,jt==="circuit"?Mt===1?-5.5:Math.sign(yt[Mt])*5.5:yt[Mt]),jt==="endless"&&a>10&&T()<.28&&B("cone",l+22,yt[3-ot-Mt])}for(let Mt=0;Mt<4;Mt++)B("coin",l+7+Mt*7,yt[ot]);a%4===0?B("pad",l+14,yt[ot]):a>8&&a%7===0&&B("ramp",l+14,yt[ot])}if(a===0){for(let ut=0;ut<12;ut++){let Mt=Ne(0,-7+ut*1.16,.075),At=be(0);g.add(xt(.9,.015,1.12,.003),Y(R(Mt),[1,1,1],[0,-At.h,0]),ut%2?"#e8e7ed":"#424b66")}for(let ut of[-1,1]){let Mt=R(Ne(0,ut*7.75,0));C(g,Mt,v(Mt,[0,5,0]),.12,zt)}let ot=R(Ne(0,-7.75,5)),yt=R(Ne(0,7.75,5));C(g,ot,yt,.16,zt);for(let ut=0;ut<7;ut++)oe(g,R(Ne(0,-4.5+ut*1.5,5)),[.24,.24,.24],ut%2?"#f9d997":"#bfd9f4",!0)}let Z=new Le(g.finish());return Z.add(wf(a,d,T)),{k:a,origin:d,node:Z,entities:O}},lu=function(){if(jt==="circuit"){let g=Math.ceil(De/40);for(let T=0;T<g;T++)un.has(T)||un.set(T,ou(T));return}let a=Math.max(-2,Math.floor(_.s/40)-3),l=Math.floor(_.s/40)+9;_c((l+1)*40);for(let g=a;g<=l;g++)un.has(g)||un.set(g,ou(g));for(let[g,T]of un)g<a&&(T.node.mesh.dispose(),un.delete(g));let d=Math.floor((_.s-210+80)/4);if(d>Or){let g=Math.min(d-Or,$n.length-10);$n.splice(0,g),Or+=g}},gs=function(){Ya.clear(),Ja.clear();for(let a in Wn)Wn[a]=0;for(let a in Ie)Ie[a]=!1;for(let a of document.querySelectorAll(".touch button"))a.classList.remove("held")},Qn=function(a=!1){if(jt==="circuit"?(w(),ks=tn==="coast-reborn"?73121:95276):a&&(ks=(Date.now()>>>0)%999999||72319),fc&&un.size)iu.set(fc,un);else for(let l of un.values())l.node.mesh.dispose();un=jt==="circuit"?iu.get(tn)||new Map:new Map,fc=jt==="circuit"?tn:null;for(let l of un.values())for(let d of l.entities){d.hit=!1,delete d.hitLap;for(let g of["ds","dl","vS","vL","angle","omega","tilt"])d[g]=0}$n=[{s:-80,p:[0,au(-80),80],h:-m/2}],Or=0,pc=-m/2,mc=115,$a=0,Ka=ks,Object.assign(_,{s:0,l:0,speed:0,steering:0,vS:0,vL:0,spin:0,contactSound:0,yaw:0,velocityYaw:0,energy:0,nitro:1,nitroTime:0,turnRate:0,driftDuration:0,driftLatch:!1,driftRewarded:!1,driftReleasing:!1,releaseAge:0,gripRecovery:0,driftCooldown:0,driftBuffer:0,lastSteer:0,lastSteerTime:0,prevSteer:0,lastDriftSide:0,jetInputBuffer:0,boostInputBuffer:0,tireGrip:10.5,tireLimit:68,exitFromGrip:3.6,exitFromLimit:38,driftPhase:"grip",exitTime:0,smallJets:0,smallWindow:0,smallCount:0,jetCooldown:0,jetHistory:[],combo:"",comboTimer:0,prevDrift:!1,prevBoost:!1,prevSmall:!1,prevGas:!1,coins:0,score:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,stuckTime:0,timePenalty:0}),gc=0,di=0,Vs=0,Qa=!1,Gs=0,fs=0,zs=60,ps=null,Fr=0;for(let l of ms)l.life=0;for(let l of us)l.life=0;gs(),_c(420),lu(),Ws=null,Vr=null,_s=null,_.prevPose=null,D("seedText").textContent=String(ks).padStart(6,"0"),D("bestText").textContent=kr.toLocaleString(),D("rerollBtn").hidden=jt==="circuit",D("endRunBtn").hidden=jt==="circuit",D("uploadStatus").textContent="",zr=0,Br=0,D("toast").classList.remove("show"),D("drift").classList.remove("on"),D("modeDistance").textContent=Math.round(De)+" m / \u5708 \xB7 "+en().laps+" \u5708"},gn=function(a,l="",d=2){D("toastTitle").textContent=a,D("toastSub").textContent=l,D("toast").classList.add("show"),Br=d,D("status").textContent=a+" "+l},Hs=function(a=!1){if(Wi=!1,typeof it<"u"&&it.room){Zr();return}Qn(a),ee="countdown",Gi=3.05,D("welcome").hidden=!0,D("finished").hidden=!0,D("paused").hidden=!0,D("helpPanel").hidden=!0,D("musicPanel").hidden=!0,D("rankPanel").hidden=!0,Vi.classList.remove("menu-open"),D("countdown").hidden=!1,D("countdown").textContent="3",Xa(),Te&&Te.ctx.resume().catch(()=>{}),Eu(),D("status").textContent="\u51C6\u5907\u8D77\u8DD1\u3002W \u52A0\u901F\uFF0CAD \u8F6C\u5411\uFF0CShift \u6F02\u79FB\uFF0C\u7A7A\u683C\u5C0F\u55B7\uFF0CE \u6C2E\u6C14\u3002"},Hi=function(){if(typeof it<"u"&&it.room&&ee==="running"){gs(),gn("\u5728\u7EBF\u6BD4\u8D5B\u7EE7\u7EED\u8FDB\u884C","\u8054\u673A\u4E0D\u6682\u505C \xB7 \u70B9\u51FB\u623F\u95F4\u53EF\u9000\u51FA",1.5);return}ee==="running"?(ee="paused",gs(),D("paused").hidden=!1,D("status").textContent="\u6E38\u620F\u5DF2\u6682\u505C\u3002"):ee==="paused"&&(ee="running",D("paused").hidden=!0,ja=performance.now())},xc=function(){if(ee!=="finished"){ee="finished",gs(),kr=Math.max(kr,Math.floor(_.s)),to=Math.max(to,Math.floor(_.score));try{localStorage.setItem("star-rush-best-distance",String(kr)),localStorage.setItem("star-rush-best-score",String(to))}catch{}D("resultDistance").textContent=jt==="circuit"?K(J()):Math.floor(_.s).toLocaleString()+" m",D("resultMainLabel").textContent=jt==="circuit"?en().laps+" \u5708\u7528\u65F6":"\u672C\u6B21\u91CC\u7A0B",D("resultScore").textContent=Math.floor(_.score).toLocaleString(),D("resultBest").textContent=_.coins+" \u679A",D("resultBestLabel").textContent="\u6536\u96C6\u91D1\u5E01",D("resultNote").textContent=jt==="circuit"?"\u51B2\u7EBF\u5B8C\u6210\uFF01\u53EF\u4EE5\u4E0A\u4F20\u6210\u7EE9\uFF0C\u548C\u670B\u53CB\u6BD4\u8F83\u5F53\u524D\u8D5B\u9053\u7684\u5B8C\u8D5B\u7528\u65F6\u3002":"\u672C\u6B21\u81EA\u7531\u8DD1\u5DF2\u7ED3\u7B97\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u91CC\u7A0B\u6210\u7EE9\u3002",D("finished").hidden=!1,Vi.classList.add("menu-open"),D("status").textContent="\u672C\u5C40\u7ED3\u675F\u3002",Wr={id:crypto.randomUUID(),mode:jt,track:jt==="circuit"?ds:"endless-reborn",seed:ks,distance:Math.round(Math.max(0,_.s)),timeMs:Math.round(J()*1e3),score:Math.floor(_.score)},Kr||Xf(Wr),D("submitRun").disabled=!1,D("submitRun").textContent="\u4E0A\u4F20\u672C\u6B21\u6210\u7EE9",np(),ki(1100,.3)}},cu=function(a,l=5,d=[0,1,0]){let g=0;for(let T of us)T.life<=0&&g++<l&&(T.life=.35+Math.random()*.4,T.p=[...a],T.v=v(d,[(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3]),T.size=.04+Math.random()*.08)},vc=function(a=!1){if(ee!=="running"&&ee!=="paused")return;let l=[0,-3.7,3.7],d=0;for(let g of l){let T=!0;for(let A of un.values())for(let R of A.entities)(R.kind==="cone"||R.kind==="barrier")&&Math.abs(tt(R.s,_.s))<7&&Math.abs(R.l-g)<R.width+1.1&&(T=!1);if(T){d=g;break}}_.prevPose=null,_.l=d,_.yaw=0,_.turnRate=0,_.velocityYaw=0,_.lateralSpeed=0,_.speed=E(_.speed,2,12),_.vS=_.speed,_.vL=0,_.spin=0,_.stuckTime=0,_.timePenalty=(_.timePenalty||0)+2,_.jump=0,_.vy=0,_.drifting=!1,_.driftSide=0,_.driftCharge=0,_.exitTime=0,_.driftReleasing=!1,_.driftBuffer=0,Qa=!1,ps=null,gn(a?"\u5DF2\u81EA\u52A8\u8131\u56F0":"\u8D5B\u8F66\u5DF2\u56DE\u6B63","\u7EE7\u7EED\u6309 W \u52A0\u901F \xB7 \u56DE\u6B63\u8BA1\u65F6 +2 \u79D2",1.5)},zf=function(a){for(let R of ms)R.life=Math.max(0,R.life-a);let l=Math.abs(Tn(_.yaw-_.velocityYaw));if(!_.drifting&&!(_.exitTime>0&&l>.06)||_.speed<4||_.jump>.08){ps=null,Fr=0;return}if(Fr+=a,Fr<.025)return;Fr=0;let d=be(_.s),g=Ne(_.s,_.l,.085),T=Y(g,[.97,.97,.97],[0,-d.h-_.yaw,Math.atan(d.slope)]),A=[-1,1].map(R=>W(T,[-1.02,0,R*.83]));if(ps)for(let R=0;R<2;R++){let O=b(A[R],ps[R]),B=Math.hypot(O[0],O[2]);if(B>.05&&B<3){let Z=ms[Of++%ms.length];Z.p=P(v(A[R],ps[R]),.5),Z.length=B+.035,Z.angle=-Math.atan2(O[2],O[0]),Z.life=2.5}}ps=A,l>.15&&cu(Ne(_.s-1,_.l,.2),1,P(d.T,-1.5))},kf=function(a,l){for(let d of us)d.life<=0||(d.life-=a,d.v[1]-=a*5,d.p=v(d.p,P(d.v,a)),d.node.local=Y(b(d.p,l),[d.size,d.size,d.size]),Se.add(d.node))},Vf=function(a,l){let d=ee==="running"&&_.prevPose?E(fs/Za,0,1):1,g=_.prevPose||_,T=I(g.s,_.s,d),A=I(g.l,_.l,d),R=g.yaw+Tn(_.yaw-g.yaw)*d,O=I(g.jump,_.jump,d),B=be(T),Z=B.p,ot=Ne(T,A,.06+O),yt=b(ot,Z),ut=Math.atan(B.slope);wt.tint=nn.paint,wt.local=Y(yt,[.97,.97,.97],[0,-B.h-R,ut]),Se.children=[wt],Cf(Z,a),jt==="circuit"&&(no.mesh=Wf[en().biome],no.local=S(-Z[0],-.9-Z[1],-Z[2]),no.shadow=!1,Se.add(no));for(let _t of un.values())if(!(jt==="circuit"&&Math.abs(tt(_t.k*40,_.s))>265)){_t.node.local=S(...b(_t.origin,Z)),_t.node.shadow=Math.abs(tt(_t.k*40,_.s))<90,Se.add(_t.node);for(let vt of _t.entities){if(vt.kind==="coin"&&vt.hitLap===Math.max(0,Math.floor(_.s/De)))continue;let It=be(vt.s+(vt.ds||0)),Ht=Ne(vt.s+(vt.ds||0),vt.l+(vt.dl||0),vt.kind==="coin"?1.05+.12*Math.sin(a*3+vt.s):.08),Ot=Y(b(Ht,Z),[1,1,1],[0,-It.h+(vt.kind==="coin"?a*2:-(vt.angle||0)),Math.atan(It.slope)]);vt.node.local=vt.kind==="cone"&&vt.tilt?F(Ot,F(S(0,.34,0),F(V(vt.tilt),S(0,-.25,0)))):Ot,vt.node.shadow=Math.abs(tt(vt.s,_.s))<65,Se.add(vt.node)}}Ha(a,l,Gs),kf(ee==="running"?l:0,Z);for(let _t of ms)_t.life>0&&(_t.node.local=Y(b(_t.p,Z),[_t.length,1,Math.min(1,_t.life)*1.2],[0,_t.angle,0]),Se.add(_t.node));let Mt=ee==="ready"||ee==="finished",At,Lt;if(Mt){let _t=.15*Math.sin(a*.16);At=v(ot,v(P(B.T,5.6+_t),v(P(B.R,7.1),[0,3.5,0]))),Lt=v(ot,v(P(B.R,-1.25),[0,.8,0]))}else{let _t=Xn===1?12.5:Xn===2?5.8:8.5,vt=Xn===1?9:Xn===2?2.9:4.5,It=B.h+_.velocityYaw;_s===null?_s=It:_s+=Tn(It-_s)*(1-Math.exp(-l*8));let Ht=[Math.cos(_s),0,Math.sin(_s)],Ot=v(P(B.T,_.vS/18),P(B.R,_.vL/18));At=v(v(ot,Ot),v(P(Ht,-_t),[0,vt,0])),Lt=v(v(ot,Ot),v(P(Ht,10),[0,1+O*.2,0]))}let ge=1-Math.exp(-l*(Mt?2.6:18));return Ws?(Ws=Ws.map((_t,vt)=>I(_t,At[vt],ge)),Vr=Vr.map((_t,vt)=>I(_t,Lt[vt],ge))):(Ws=At,Vr=Lt),{eye:b(Ws,Z),target:b(Vr,Z),origin:Z}},Gf=function(){if(!te)return;let a=yc.width,l=yc.height,d=be(_.s),g=.86;if(jt==="circuit"){te.clearRect(0,0,a,l);let O=Ur,B=Math.min((a-45)/(O.maxX-O.minX),(l-30)/(O.maxZ-O.minZ)),Z=ut=>[a*.5+(ut[0]-(O.minX+O.maxX)*.5)*B,l*.5+(ut[2]-(O.minZ+O.maxZ)*.5)*B];te.lineJoin="round";for(let[ut,Mt]of[["#737e9d",13],["#dfe8f3",8]]){te.strokeStyle=ut,te.lineWidth=Mt,te.beginPath();for(let At=0;At<fn.length;At+=6){let Lt=Z(fn[At].p);At?te.lineTo(...Lt):te.moveTo(...Lt)}te.closePath(),te.stroke()}if(typeof qn<"u")for(let ut of qn){let Mt=Z(be(ut.s).p);te.fillStyle=ut.color,te.beginPath(),te.arc(Mt[0],Mt[1],3.4,0,x),te.fill()}if(typeof it<"u"&&it.room){let ut=0;for(let Mt of it.peers.values())if(Mt.position){let At=Z(be(Mt.position.s).p);te.fillStyle=ro[ut++%ro.length],te.beginPath(),te.arc(At[0],At[1],4.5,0,x),te.fill()}}let ot=Z(d.p),yt=Z(fn[0].p);te.fillStyle="#fff7dc",te.fillRect(yt[0]-3,yt[1]-5,6,10),te.save(),te.translate(...ot),te.rotate(d.h+Math.PI/2),te.fillStyle="#ffe68b",te.beginPath(),te.moveTo(0,-8),te.lineTo(-5,5),te.lineTo(5,5),te.closePath(),te.fill(),te.restore();return}te.clearRect(0,0,a,l),te.strokeStyle="#c0d7e91c",te.lineWidth=1;for(let O=20;O<a;O+=30)te.beginPath(),te.moveTo(O,0),te.lineTo(O,l),te.stroke();for(let O=15;O<l;O+=30)te.beginPath(),te.moveTo(0,O),te.lineTo(a,O),te.stroke();let T=[];for(let O=-15;O<=205;O+=4){let B=b(be(_.s+O).p,d.p);T.push([a*.5+M(B,d.R)*g,l*.88-M(B,d.T)*g])}for(let[O,B]of[["#7a85a3",15],["#dce8f0",10]]){te.strokeStyle=O,te.lineWidth=B,te.lineJoin="round",te.beginPath();for(let Z=0;Z<T.length;Z++)Z?te.lineTo(...T[Z]):te.moveTo(...T[Z]);te.stroke()}te.fillStyle="#ffe68b",te.beginPath();let A=a*.5+_.l*g,R=l*.88;te.moveTo(A,R-10),te.lineTo(A-7,R+7),te.lineTo(A+7,R+7),te.closePath(),te.fill()},Hf=function(a){if(Mc+=a,Mc<.06)return;Mc=0,fi.distance.textContent=Math.floor(_.s).toLocaleString(),fi.score.textContent=String(Math.floor(_.score)).padStart(5,"0"),fi.coins.textContent=String(_.coins).padStart(2,"0"),fi.speed.textContent=Math.round(_.speed*3.6),D("speedbar").style.width=Math.min(100,_.speed/83*100)+"%",fi.energyText.textContent=_.nitro+" \u74F6 / 2 \xB7 "+(_.nitroTime>0?_.nitroTime.toFixed(1)+"s":Math.floor(_.energy)+"%"),D("energyBar").style.width=_.energy+"%";let l=_.boostActive||_.pad>0||_.mini>0;fi.gear.textContent=l?"NITRO / BOOST":_.jump>0?"AIR TIME":_.drifting?"DRIFT MODE":_.speed<1?"READY TO RUSH":"SPORT / "+Math.max(1,Math.min(6,Math.ceil(_.speed/8))),D("boostfx").classList.toggle("on",l),D("raceTime").textContent=K(J()),D("lapLabel").textContent=jt==="circuit"?"LAP "+Math.min(en().laps,Math.floor(Math.max(0,_.s)/De)+1)+" / "+en().laps+" \xB7 \u5269\u4F59 "+Math.max(0,Math.ceil(Oi()-_.s))+" m":"\u65E0\u5C3D\u6A21\u5F0F \xB7 \u81EA\u7531\u7ADE\u901F",D("drift").classList.toggle("on",_.drifting||_.smallJets>0),D("driftBar").style.width=(_.smallJets>0?Math.min(100,_.smallWindow/1.5*100):Math.min(100,_.driftCharge/.55*100))+"%",fi.driftText.textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets:_.driftPhase==="entry"?"\u8F7B\u70B9\u8D77\u6F02":_.driftPhase==="counter"?"\u53CD\u6253\u6536\u8F66":_.driftPhase==="release"?"\u60EF\u6027\u6536\u6F02":"\u6F02\u79FB\u96C6\u6C14";for(let g of document.querySelectorAll("[data-key=small]"))g.classList.toggle("smalljet-ready",_.smallJets>0);D("jetCount").textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets+" \xB7 "+_.smallWindow.toFixed(1)+"s":_.drifting?"\u6F02\u79FB\u96C6\u6C14\u4E2D":"\u7A7A\u683C / Q \u5C0F\u55B7";let d=Cu(_.s);fi.turnText.textContent=d.direction===0?"\u524D\u65B9\u76F4\u9053":d.direction>0?"\u524D\u65B9\u53F3\u5F2F":"\u524D\u65B9\u5DE6\u5F2F",fi.turnArrowPath.setAttribute("d",d.direction===0?"M12 21V3M5 10L12 3L19 10":d.direction>0?"M5 21V8H21M14 1L21 8L14 15":"M19 21V8H3M10 1L3 8L10 15"),Ri==="practice"&&!it.room&&Ru(d),fi.biome.textContent=jt==="circuit"?Tf(_.s).name:dc[(Math.floor(_.s/1e3)%3+3)%3].name,Gf()},hu=function(a,l=ne,d=!0,g=null,T=1){a.world=F(l,a.local);let A=d&&a.shadow,R=a.tint||g,O=a.opacity??T;a.mesh&&Sc.push({mesh:a.mesh,m:a.world,shadow:A,tint:R,opacity:O});for(let B of a.children)hu(B,a.world,A,R,O)},uu=function(){Gr=Math.max(1,i.clientWidth),Hr=Math.max(1,i.clientHeight);let a=Math.min(devicePixelRatio||1,1.5),l=Math.round(Gr*a),d=Math.round(Hr*a);(i.width!==l||i.height!==d)&&(i.width=l,i.height=d)},du=function(a){if(!o&&r.renderer.getContext().isContextLost())return;let l=Math.min(.1,Math.max(0,(a-ja)/1e3));if(ja=a,ee==="countdown"){Gi=typeof it<"u"&&it.room&&it.startAt?(it.startAt-(Date.now()+it.offset))/1e3:Gi-l;let T=Gi>.05?String(Math.ceil(Gi)):"GO!";D("countdown").textContent!==T&&(D("countdown").textContent=T,ki(Gi>.05?400:900,.12)),Gi<=0&&(D("countdown").hidden=!0,ee="running",di=typeof it<"u"&&it.room&&it.startAt?Math.max(0,(Date.now()+it.offset-it.startAt)/1e3):0,gn("LET\u2019S RUSH!","W \u52A0\u901F \xB7 SHIFT \u6F02\u79FB \xB7 \u7A7A\u683C\u5C0F\u55B7 \xB7 E \u6C2E\u6C14",2))}if(typeof Mu=="function"&&Mu(a,l),rp(l),ee==="running"){fs+=l;let T=0;for(;fs>=Za&&ee==="running"&&T++<12;)Uf(Za),fs-=Za;T>=12&&(fs=0)}else fs=0;(ee==="ready"||ee==="finished")&&(Vs+=l*.25);let d=Vf(Vs,l);ip(d.origin,l),typeof Su=="function"&&Su(d.origin,l),Br>0&&(Br-=l,Br<=0&&D("toast").classList.remove("show")),zr=Math.max(0,zr-l),D("hitflash").style.opacity=Math.min(.24,zr*.6),Pf(),typeof _u=="function"&&_u(),Sc.length=0,hu(Se),zs=I(zs,ee==="ready"||ee==="finished"?45:rn.fov+_.boostBlend*3,1-Math.exp(-l*4));let g=F(dt(zs*m/180,Gr/Hr,.12,850),rt(d.eye,d.target));jf(g),o?u(d):Rc=r.render(Sc,d,Gr,Hr,zs,rn),sp(a,l),Hf(l),su||(su=!0,e.classList.add("done")),requestAnimationFrame(du)},fu=function(){try{return JSON.parse(localStorage.getItem("star-rush-runs-reborn")||"[]")}catch{return[]}},Xf=function(a){try{let l=fu();l.push({...a,name:localStorage.getItem("star-rush-name")||"\u672C\u673A\u8F66\u624B"}),localStorage.setItem("star-rush-runs-reborn",JSON.stringify(l.slice(-100)))}catch{}},qf=function(a,l){let d=document.createElement("tr"),g=l.mode==="circuit"?K(l.timeMs/1e3):l.distance.toLocaleString()+" m";for(let T of[String(a+1).padStart(2,"0"),l.name,g,Math.round(l.score).toLocaleString()]){let A=document.createElement("td");A.textContent=T,d.appendChild(A)}return d},Yf=function(){xs=tn,D("rankTrack")&&(D("rankTrack").value=xs),wi=jt,Ai=!1,qs("rankPanel"),Xr()},pu=function(a){jt=a;for(let[l,d]of[["circuitMode","circuit"],["endlessMode","endless"]])D(l).classList.toggle("selected",a===d),D(l).setAttribute("aria-pressed",String(a===d));Qn(!0),D("trackPicker").hidden=a!=="circuit",D("trackDescription").hidden=a!=="circuit"},mu=function(a){if(Gn[a]){if(typeof it<"u"&&it.room){gn("\u5DF2\u5728\u8054\u673A\u623F\u95F4","\u9000\u51FA\u623F\u95F4\u540E\u53EF\u66F4\u6362\u5730\u56FE",1.5);return}tn=a,Qn(!1),qr()}},qr=function(){for(let a of document.querySelectorAll("[data-track]"))a.classList.toggle("selected",a.dataset.track===tn),a.setAttribute("aria-pressed",String(a.dataset.track===tn));D("trackDescription").textContent=en().description,D("modeDistance").textContent=Math.round(De)+" m / \u5708 \xB7 "+en().laps+" \u5708"},Tc=function(){try{localStorage.setItem("star-rush-audio",JSON.stringify(wn))}catch{}},Yr=function(){if(Xa(),!Te)return!1;if(Te.ctx.state==="suspended"&&Te.ctx.resume().catch(()=>{}),re.bus)return!0;re.bus=Te.ctx.createGain();let a=Te.ctx.createDynamicsCompressor();return a.threshold.value=-18,a.ratio.value=3,re.bus.connect(a),a.connect(Te.ctx.destination),re.next=Te.ctx.currentTime+.08,!0},vs=function(a,l,d,g,T,A=0){let R=Te.ctx,O=R.createOscillator(),B=R.createGain();O.type=g,O.frequency.setValueAtTime(a,l),A&&O.frequency.exponentialRampToValueAtTime(A,l+d),B.gain.setValueAtTime(.001,l),B.gain.exponentialRampToValueAtTime(T,l+.008),B.gain.exponentialRampToValueAtTime(.001,l+d),O.connect(B),B.connect(re.bus),O.start(l),O.stop(l+d+.02)},gu=function(a,l,d,g){let T=Te.ctx,A=T.createBufferSource(),R=T.createBiquadFilter(),O=T.createGain();A.buffer=Te.noise,R.type="highpass",R.frequency.value=d,O.gain.setValueAtTime(g,a),O.gain.exponentialRampToValueAtTime(.001,a+l),A.connect(R),R.connect(O),O.connect(re.bus),A.start(a),A.stop(a+l+.02)},Jf=function(a,l){let d=.10135135135135136,g=Math.floor(a/16),T=a%16,A=[45,41,48,43],R=A[Math.floor(g/2)%4],O=ot=>440*Math.pow(2,(ot-69)/12);if(T%4===0&&vs(135,l,.18,"sine",.38,42),(T===4||T===12)&&(gu(l,.13,1200,.12),vs(180,l,.07,"triangle",.1,70)),T%2===0&&gu(l,.035,7500,T%4===2?.065:.04),T%2===0){let ot=R+(T===14?12:0);vs(O(ot-12),l,d*1.5,"sawtooth",.045),vs(O(ot-12),l,d*1.5,"sine",.1)}let B=[0,7,12,15,12,7,10,7],Z=B[Math.floor(T/2)%8];if(T%2===1&&vs(O(R+24+Z),l,.16,"triangle",.045),T===0)for(let ot of[0,3,7])vs(O(R+12+ot),l,d*12,"triangle",.018);if(g%4>=2&&T%4===2){let ot=[12,15,19,22,19,15,14,10][Math.floor(T/4)+4*(g%2)];vs(O(R+24+ot),l,d*2.5,"sine",.055)}},_u=function(){if(!Te||!Yr())return;let a=wn.enabled&&Fn&&!document.hidden&&re.mode!=="classic",l=Te.ctx.currentTime;if(re.bus.gain.setTargetAtTime(a?wn.volume*.42:0,l,.07),re.mode==="synth"&&a){re.next<l-.15&&(re.next=l+.05);let d=0;for(;re.next<l+.18&&d++<8;)Jf(re.step++,re.next),re.next+=60/148/4}re.element&&(a&&re.mode==="local"?re.element.paused&&re.element.play().catch(()=>{}):re.element.paused||re.element.pause())},io=function(a){re.mode=a,Yr(),D("synthMusic").classList.toggle("selected",a==="synth"),D("classicMusic").classList.toggle("selected",a==="classic"),D("classicPlayer").hidden=a!=="classic",D("localMusicControls").hidden=a!=="local",D("musicToggle").hidden=a==="classic",a==="classic"?(D("spotifyPlayer").src||(D("spotifyPlayer").src="https://open.spotify.com/embed/track/"+D("classicTrack").value+"?utm_source=generator&theme=0"),D("nowPlaying").textContent="\u7ECF\u5178\u5916\u8BED\u6B4C\u5355 \xB7 \u5728\u4E0B\u65B9\u64AD\u653E\u5668\u70B9\u51FB\u64AD\u653E"):(D("spotifyPlayer").removeAttribute("src"),D("nowPlaying").textContent=a==="local"?re.files[re.index]?.name||"\u8BF7\u9009\u62E9\u97F3\u4E50\u6587\u4EF6":"STARLINE \xB7 \u539F\u521B\u7535\u5B50\u7ADE\u901F\u914D\u4E50")},so=function(a){!re.files.length||!Yr()||(re.index=(a+re.files.length)%re.files.length,re.element||(re.element=new Audio,re.element.preload="auto",Te.ctx.createMediaElementSource(re.element).connect(re.bus),re.element.onended=()=>so(re.index+1),re.element.onerror=()=>{D("nowPlaying").textContent="\u6B64\u97F3\u9891\u65E0\u6CD5\u89E3\u7801\uFF0C\u8BF7\u6362\u4E00\u9996 MP3 / OGG / WAV"}),re.element.pause(),re.url&&URL.revokeObjectURL(re.url),re.url=URL.createObjectURL(re.files[re.index]),re.element.src=re.url,wn.enabled=!0,io("local"),re.element.play().catch(()=>{D("nowPlaying").textContent="\u70B9\u51FB\u201C\u64AD\u653E\u97F3\u4E50\u201D\u540E\u7EE7\u7EED"}),D("musicToggle").textContent="\u6682\u505C\u97F3\u4E50")},qs=function(a){let l=ee==="running"&&!(typeof it<"u"&&it.room);Jr=Jr||l,l&&Hi();for(let d of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])d!==a&&(D(d).hidden=!0);gs(),D(a).hidden=!1},ys=function(a){D(a).hidden=!0,Jr&&ee==="paused"&&Hi(),Jr=!1},wc=function(a){function l(T){let A=new Le(T.mesh);A.local=new Float32Array(T.local),A.shadow=T.shadow;for(let R of T.children)A.add(l(R));return A}let d=l(wt),g=d.add(new Le(Zf[a%4]));return{root:d,marker:g,spin:0}},Kf=function(){return{s:_.s,l:_.l,vS:_.vS,vL:_.vL,yaw:_.yaw,jump:_.jump,mini:_.mini,nitroTime:_.nitroTime,paint:nn.paint,time:J(),finished:ee==="finished"}},xu=function(){for(let a of it.peers.values())a.label.remove();it.peers.clear()},Ec=function(a){let l=it.room?.status;it.room=a.room,it.members=a.members,it.ready=!!a.members.find(g=>g.id===it.id)?.ready,it.errors=0;let d=new Set(a.members.map(g=>g.id));for(let[g,T]of it.peers)d.has(g)||(T.label.remove(),it.peers.delete(g));for(let g of a.members){if(g.id===it.id)continue;let T=it.peers.get(g.id);if(!T){let R=document.createElement("div");R.className="peer-label",R.textContent=g.name,Vi.appendChild(R),T={...wc(it.peers.size),label:R,name:g.name,history:[],position:null,lastStamp:0},it.peers.set(g.id,T)}T.label.textContent=g.name,T.name=g.name;let A=g.snapshot;A&&Number.isFinite(A.s)&&g.updatedAt>T.lastStamp&&(T.lastStamp=g.updatedAt,T.history.push({...A,t:g.updatedAt}),T.history.length>12&&T.history.shift())}if(it.room.status==="racing"&&it.room.startAt!==it.runTag){it.runTag=it.room.startAt,it.startAt=it.room.startAt,tn=it.room.track,jt="circuit",Qn(!1),qr(),Eu();for(let T of it.peers.values())T.history=[],T.position=null;let g=a.members.findIndex(T=>T.id===it.id);_.l=(g%2?1:-1)*1.9,_.s=-Math.floor(g/2)*3.8,ee="countdown",Gi=(it.startAt-(Date.now()+it.offset))/1e3,D("welcome").hidden=!0,D("finished").hidden=!0,D("paused").hidden=!0,D("roomPanel").hidden=!0,D("rankPanel").hidden=!0,Vi.classList.remove("menu-open"),D("countdown").hidden=!1,Xa(),Te&&Te.ctx.resume().catch(()=>{})}if(it.room.status==="lobby"&&l&&l!=="lobby"){it.startAt=0,it.runTag=0,ee="ready",tn=it.room.track,jt="circuit",Qn(!1),qr(),D("countdown").hidden=!0,D("finished").hidden=!0,D("welcome").hidden=!1,Vi.classList.add("menu-open");for(let g of it.peers.values())g.history=[]}Cc(),ee==="finished"&&Pu()},Cc=function(){let a=!!it.room;if(D("roomActions").hidden=!a,D("networkHud").hidden=!a,D("createRoom").disabled=a,D("joinRoom").disabled=a,D("roomCode").disabled=a,D("circuitMode").disabled=a,D("endlessMode").disabled=a,D("roomName").disabled=a&&it.room.status==="racing",D("startBtn").textContent=a?"\u56DE\u5230\u8054\u673A\u623F\u95F4":"\u5F00\u59CB\u7ADE\u901F\u3000\u2197",!a){D("roomTitle").textContent="\u540C\u4E00\u6761\u8D5B\u9053\uFF0C\u4E00\u8D77\u51FA\u53D1\u3002",D("roomMembers").replaceChildren(),D("roomStatus").textContent="\u6700\u591A 4 \u4EBA \xB7 \u4F7F\u7528\u5F53\u524D\u9009\u62E9\u7684\u8DD1\u5708\u5730\u56FE";return}D("roomCode").value=it.room.code,D("roomTitle").textContent="ROOM "+it.room.code+" \xB7 "+Gn[it.room.track].name,D("roomStatus").textContent=(it.room.status==="racing"?"\u6BD4\u8D5B\u8FDB\u884C\u4E2D":it.room.status==="finished"?"\u6BD4\u8D5B\u5DF2\u7ED3\u675F":"\u5019\u573A\u4E2D")+" \xB7 "+it.members.length+" / 4 \u4EBA \xB7 "+Math.round(it.rtt)+" ms \u5F80\u8FD4",D("roomMembers").replaceChildren();for(let T of it.members){let A=document.createElement("div");A.className="room-member";let R=document.createElement("span");R.textContent=T.name+(T.id===it.id?"\uFF08\u4F60\uFF09":"")+(T.id===it.room.hostId?" \xB7 \u623F\u4E3B":"");let O=document.createElement("b");O.textContent=T.snapshot?.finished?"\u5B8C\u8D5B "+K(T.snapshot.time||0):it.room.status==="racing"?"\u6BD4\u8D5B\u4E2D":T.ready?"\u5DF2\u51C6\u5907":"\u7B49\u5F85\u51C6\u5907",A.append(R,O),D("roomMembers").appendChild(A)}let l=it.room.hostId===it.id,d=it.room.status!=="lobby";D("startRoom").hidden=!l,D("startRoom").disabled=!d&&it.members.some(T=>!T.ready),D("startRoom").textContent=d?"\u7ED3\u675F\u672C\u5C40 \xB7 \u8FD4\u56DE\u5019\u573A":"\u5168\u5458\u5C31\u7EEA \xB7 \u5F00\u59CB\u7ADE\u901F",D("readyRoom").hidden=d,D("readyRoom").textContent=it.ready?"\u53D6\u6D88\u51C6\u5907":"\u51C6\u5907",D("connectionText").textContent=it.errors?"\u8FDE\u63A5\u6062\u590D\u4E2D\u2026":"ROOM "+it.room.code+" \xB7 "+Math.round(it.rtt)+" ms";let g=it.members.map(T=>({id:T.id,s:T.id===it.id?_.s:T.snapshot?.s||0,finished:T.id===it.id?ee==="finished":!!T.snapshot?.finished,time:T.id===it.id?J():T.snapshot?.time||0})).sort((T,A)=>T.finished&&A.finished?T.time-A.time:A.finished-T.finished||A.s-T.s);D("racePosition").textContent="POS "+(g.findIndex(T=>T.id===it.id)+1)+" / "+it.members.length},Zr=function(){qs("roomPanel"),Cc()},Mu=function(a){if(!it.room||it.busy||document.hidden||a-it.lastSync<(it.room.status==="racing"?125:850))return;it.lastSync=a,it.busy=!0;let l=it.session;Ac("poll",{snapshot:it.room.status!=="lobby"?Kf():{}}).then(d=>{it.room&&it.session===l&&Ec(d)}).catch(d=>{it.room&&it.session===l&&(it.errors++,D("connectionText").textContent="\u8FDE\u63A5\u6062\u590D\u4E2D \xB7 "+d.message,D("roomStatus").textContent=d.message)}).finally(()=>{it.busy=!1})},Su=function(a,l){if(!it.room)return;let d=Date.now()+it.offset-E(it.rtt*1.1,170,350);for(let g of it.peers.values()){let T=g.history;if(!T.length){g.label.hidden=!0;continue}let A=T[0],R=A;for(let ut=1;ut<T.length&&(R=T[ut],!(R.t>=d));ut++)A=R;let O=A.t===R.t?0:E((d-A.t)/(R.t-A.t),0,1),B={};for(let ut of["s","l","vS","vL","jump"])B[ut]=I(A[ut]||0,R[ut]||0,O);B.yaw=(A.yaw||0)+Tn((R.yaw||0)-(A.yaw||0))*O;let Z=E((d-R.t)/1e3,0,.12);if(B.s+=(R.vS||0)*Z,B.l+=(R.vL||0)*Z,g.position&&Math.abs(B.s-g.position.s)<15){let ut=1-Math.exp(-l*24);B.s=I(g.position.s,B.s,ut),B.l=I(g.position.l,B.l,ut)}g.position=B;let ot=be(B.s),yt=Ne(B.s,B.l,.06+B.jump);g.worldPos=b(v(yt,[0,3,0]),a),g.root.tint=typeof R.paint=="string"?R.paint:ro[0],g.root.local=Y(b(yt,a),[.97,.97,.97],[0,-ot.h-B.yaw,Math.atan(ot.slope)]),g.root.shadow=N(b(yt,Ne(_.s,_.l)))<70,Se.add(g.root),g.spin-=(B.vS||0)*l/.4;for(let ut=0;ut<Rt.length;ut++){let Mt=Rt[ut];g.root.children[2+ut].local=F(S(Mt.x,.41,Mt.z),j(g.spin))}for(let ut=0;ut<Dt.length;ut++){let Mt=Dt[ut],At=R.nitroTime>0||R.mini>0,Lt=At?.85+.16*Math.sin(Vs*38+Mt.side):.001;g.root.children[6+ut].local=Y([-1.9,.43,Mt.side*.34],[Lt,Lt,Lt])}}},jf=function(a){for(let l of it.peers.values()){if(!l.worldPos||!it.room||ee==="ready"){l.label.hidden=!0;continue}let d=l.worldPos,g=d[0],T=d[1],A=d[2],R=a[3]*g+a[7]*T+a[11]*A+a[15],O=(a[0]*g+a[4]*T+a[8]*A+a[12])/R,B=(a[1]*g+a[5]*T+a[9]*A+a[13])/R;l.label.hidden=R<=0||Math.abs(O)>1.1||Math.abs(B)>1.1,l.label.hidden||(l.label.style.left=(O*.5+.5)*Gr+"px",l.label.style.top=(-B*.5+.5)*Hr+"px")}},Au=function(){return"star-rush-best-reborn-"+tn},tp=function(){try{return JSON.parse(localStorage.getItem(Au())||"null")}catch{return null}},Eu=function(){if(qn=[],Kr=!1,Js=null,Ei=tp(),Ms=0,ao=[],oo=0,lo=[],Ys=[],Ss=1,$r=1,co=0,D("resultGrid").replaceChildren(),D("splitLabel").textContent="SECTOR 1 / 3",D("splitDelta").textContent="",D("lapTimeLabel").textContent="",D("coach").hidden=Ri!=="practice",jt==="circuit"&&Ri==="race"&&!it.room){_.l=-1.8;for(let a=0;a<3;a++){let l=wc(a);l.root.tint=Tu[a],qn.push({s:-3.8*Math.floor((a+1)/2),l:(a%2?1:-1)*1.9,speed:0,yaw:0,color:Tu[a],name:Qf[a],node:l.root,finishAt:null,index:a})}}Ei&&rn.ghost&&jt==="circuit"&&Ri==="timeTrial"&&!it.room?(Ci=wc(3).root,Ci.tint="#b8e9e6",Ci.opacity=.27):Ci=null,Ic(),Ri==="practice"&&!it.room&&Ru()},ep=function(a){for(let l of qn){if(l.finishAt!==null)continue;let d=0;for(let O=15;O<=65;O+=10)d=Math.max(d,Math.abs(be(l.s+O).curv));let g=E(Math.sqrt(24/Math.max(.004,d)),24,53)*(1-l.index*.028);l.speed=I(l.speed,g,1-Math.exp(-a*(l.speed>g?3:1.2)));let T=be(l.s+20).curv,A=Math.sign(T)*1.6+Math.sin(l.s*.012+l.index)*.45;for(let O of un.values())for(let B of O.entities)(B.kind==="barrier"||B.kind==="cone")&&tt(B.s,l.s)>0&&tt(B.s,l.s)<28&&Math.abs(A-B.l)<2.1&&(A=B.l>0?-2.8:2.8);let R=l.l;l.l=I(l.l,A,1-Math.exp(-a*2.3)),l.yaw=Math.atan2((l.l-R)/a,Math.max(5,l.speed))+E(T*12,-.4,.4),l.s+=l.speed*a,l.s>=Oi()&&(l.s=Oi(),l.finishAt=di,Js??=di)}if(jt==="circuit"&&!it.room&&(oo+=a,oo>=.1&&(oo=0,ao.push([Number(J().toFixed(3)),Number(_.s.toFixed(3)),Number(_.l.toFixed(3)),Number(_.yaw.toFixed(4)),Number(_.jump.toFixed(3))]))),jt==="circuit"){for(;_.s>=Ss*De/3&&Ss<=en().laps*3;){lo.push(J());let l=Ei?.splits?.[Ss-1];if(D("splitLabel").textContent="SECTOR "+((Ss-1)%3+1)+" / 3",l){let d=J()-l;D("splitDelta").textContent=(d>0?"+":"\u2212")+Math.abs(d).toFixed(2)+" s",D("splitDelta").style.color=d>0?"#f1b8c6":"#b9edcf"}else D("splitDelta").textContent="\u5206\u6BB5 "+K(J()-(lo[Ss-2]||0));Ss++}if(_.s>=$r*De){let l=Ys.reduce((d,g)=>d+g,0);Ys.push(J()-l),D("lapTimeLabel").textContent="\u4E0A\u4E00\u5708 "+K(Ys.at(-1)),$r<en().laps&&gn("LAP "+($r+1),"\u4E0A\u4E00\u5708 "+K(Ys.at(-1)),1.5),$r++}}if(Js!==null&&di-Js>30&&_.s<Oi()){Kr=!0,xc();return}co+=a,co>.18&&(co=0,Ic())},Ic=function(){if(it.room){D("localPosition").textContent="ONLINE",D("eventLabel").textContent="\u597D\u53CB\u623F\u95F4 \xB7 "+it.room.code;return}let a=1+qn.filter(l=>l.s>_.s).length;D("localPosition").textContent=qn.length?"POS "+a+" / 4":Ri==="practice"?"PRACTICE":"TIME ATTACK",D("eventLabel").textContent=Js!==null?"\u5B8C\u8D5B\u5012\u8BA1\u65F6 "+Math.max(0,30-Math.floor(di-Js))+" s":jt==="endless"?"\u65E0\u5C3D\u5DE1\u6E38":en().name},Cu=function(a){let l=Tn(be(a+62).h-be(a+32).h);return{turn:l,direction:Math.abs(l)<.05?0:Math.sign(l),currentCurve:be(a).curv}},Ru=function(a=Cu(_.s)){let l=a.direction>0?"\u53F3\u5F2F":a.direction<0?"\u5DE6\u5F2F":"",d=_.smallJets>0&&_.smallWindow>0,g="W / \u2191 \u52A0\u901F\uFF0C\u89C2\u5BDF\u524D\u65B9\u5F2F\u9053\u3002";_.drifting&&_.driftPhase==="counter"?g="\u53CD\u6253\u6536\u8F66\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\u3002":""):_.drifting&&_.driftPhase==="release"||_.driftPhase==="exit"&&_.exitTime>0?g="\u6536\u6F02\u4E2D\uFF1A\u5148\u7A33\u4F4F\u65B9\u5411\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\uFF0C\u8F66\u5934\u7A33\u5B9A\u540E\u8854\u63A5\u3002":""):_.drifting?g=_.driftPhase==="entry"?"\u8D77\u6F02\u4E2D\uFF1A\u5C0F\u5E45\u8F6C\u5411\uFF0C\u51C6\u5907\u53CD\u6253\u6536\u8F66\u3002":"\u6F02\u79FB\u4E2D\uFF1A\u53CD\u6309\u65B9\u5411\u6536\u8F66\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002":d?g="\u5C0F\u55B7 \xD7"+_.smallJets+"\uFF1A\u8F66\u5934\u7A33\u5B9A\u540E\u70B9\u7A7A\u683C / Q\u3002"+(_.smallJets>1?"\u8FDE\u7EED\u4E24\u6B21\u53EF\u53CC\u55B7\u3002":""):_.nitroTime>0?g="\u6C2E\u6C14\u55B7\u5C04\u4E2D\uFF1A"+(l?"\u524D\u65B9"+l+"\uFF0C\u7A33\u4F4F\u65B9\u5411\u3002":"\u4FDD\u6301\u8DEF\u7EBF\uFF0C\u65E0\u9700\u91CD\u590D\u6309 E / C\u3002"):_.speed>10&&(l?g="\u524D\u65B9"+l+"\uFF1A\u5148\u6536\u6CB9\u63A7\u901F\uFF0C\u5E73\u987A\u8F6C\u5411\u3002":_.nitro>0&&_.speed>15&&Math.abs(a.currentCurve)<.006?g="\u524D\u65B9\u76F4\u9053\uFF1A\u8F66\u8EAB\u7A33\u5B9A\u540E\uFF0C\u53EF\u9009 E / C \u6C2E\u6C14\u3002":g="\u524D\u65B9\u76F4\u9053\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u7559\u610F\u4E0B\u4E00\u5F2F\u3002"),D("coach").textContent=g},Pu=function(){let a=it.room?it.members.filter(l=>l.id!==it.id).map(l=>({name:l.name,time:l.snapshot?.finished?l.snapshot.time:null,s:l.snapshot?.s||0})):qn.map(l=>({name:l.name,time:l.finishAt,s:l.s}));if(a.push({name:nn.name+"\uFF08\u4F60\uFF09",time:Kr?null:J(),s:_.s}),a.sort((l,d)=>l.time===null&&d.time===null?d.s-l.s:l.time===null?1:d.time===null?-1:l.time-d.time),D("resultGrid").replaceChildren(),a.length>1)for(let l=0;l<a.length;l++){let d=document.createElement("div");d.className="result-row";let g=document.createElement("span"),T=document.createElement("b");g.textContent=l+1+". "+a[l].name,T.textContent=a[l].time===null?it.room?.status==="racing"?"\u6BD4\u8D5B\u4E2D":"\u672A\u5B8C\u8D5B":K(a[l].time),d.append(g,T),D("resultGrid").appendChild(d)}},np=function(){if(Wi=!1,Pu(),Kr)D("resultDistance").textContent="DNF",D("resultNote").textContent="\u672C\u5C40\u672A\u80FD\u5728\u5012\u8BA1\u65F6\u7ED3\u675F\u524D\u5B8C\u8D5B\uFF0C\u53EF\u4EE5\u518D\u6311\u6218\u4E00\u6B21\u3002",D("submitRun").disabled=!0,Wr=null;else if(!it.room&&jt==="circuit"&&ao.length>10&&(!Ei||J()<Ei.time))try{localStorage.setItem(Au(),JSON.stringify({time:J(),points:ao,splits:lo,laps:Ys,date:Date.now()})),D("resultNote").textContent="\u5237\u65B0\u672C\u673A\u6700\u4F73\uFF01\u5DF2\u4FDD\u5B58\u5E7D\u7075\uFF0C\u53EF\u5728\u8BA1\u65F6\u6311\u6218\u4E2D\u8FFD\u9010\u81EA\u5DF1\u3002"}catch{}D("coach").hidden=!0},ip=function(a,l){for(let d of qn){let g=be(d.s);d.node.local=Y(b(Ne(d.s,d.l,.07),a),[.97,.97,.97],[0,-g.h-d.yaw,Math.atan(g.slope)]),Se.add(d.node);for(let T=0;T<Rt.length;T++){let A=Rt[T];d.node.children[2+T].local=F(S(A.x,.41,A.z),j(-d.s/.4))}}if(Ci&&Ei?.points?.length&&ee==="running"){let d=Ei.points,g=J();for(;Ms<d.length-2&&d[Ms+1][0]<g;)Ms++;let T=d[Ms],A=d[Ms+1],R=E((g-T[0])/(A[0]-T[0]||1),0,1),O=I(T[1],A[1],R),B=I(T[2],A[2],R),Z=T[3]+Tn(A[3]-T[3])*R,ot=be(O);Ci.local=Y(b(Ne(O,B,.07+I(T[4],A[4],R)),a),[.97,.97,.97],[0,-ot.h-Z,0]),Se.add(Ci)}if(rn.line&&ee==="running")for(let d=0;d<Pc.length;d++){let g=_.s+12+d*9,T=be(g),A=E(T.curv*80,-2.1,2.1),R=Pc[d];R.mesh=wu[Math.abs(T.curv)*_.speed>.95?1:0],R.local=Y(b(Ne(g,A,.085),a),[1,1,1],[0,-T.h,0]),Se.add(R)}},sp=function(a,l){let d=a-Iu;if(Iu=a,d>0&&d<1e3&&Zs.push(d),Zs.length>180&&Zs.shift(),Lc+=l,Lc<.25)return;Lc=0;let g=Zs.reduce((R,O)=>R+O,0)/(Zs.length||1),T=[...Zs].sort((R,O)=>R-O),A=T[Math.floor(T.length*.95)]||0;D("diagnostics").textContent="REBORN / "+(o?"Canvas compatibility":"Three.js WebGL 2")+`
FPS `+Math.round(1e3/(g||16.7))+" | frame p95 "+A.toFixed(1)+` ms
Draw `+Rc.drawCalls+" | triangles "+Rc.triangles+`
State `+ee+" | event "+Ri+`
s `+_.s.toFixed(1)+" / "+Oi().toFixed(1)+" | l "+_.l.toFixed(2)+`
speed `+(_.speed*3.6).toFixed(1)+` km/h
steer `+Gs.toFixed(2)+" | slip "+(Tn(_.yaw-_.velocityYaw)*180/Math.PI).toFixed(1)+`\xB0
drift `+_.driftPhase+" | small "+_.smallJets+" | nitro "+_.nitro+`
ready `+(it.ready?"yes":"no")+" | peers "+it.peers.size+(Te?.rail?`
rail `+Object.values(Te.rail.status().states).join("/")+" | "+Te.rail.status().last+" #"+Te.rail.status().played:"")},rp=function(a){if(Xi=null,Wi&&ee==="running"){let T=0;for(let yt=15;yt<=90;yt+=10)T=Math.max(T,Math.abs(be(_.s+yt).curv));let A=E(.85/Math.max(.012,T),14,48),R=be(_.s),O=Ne(_.s+E(_.speed*.45,12,26),0,0),B=b(O,Ne(_.s,_.l,0)),Z=Math.atan2(M(B,R.R),M(B,R.T)),ot=Tn(Z-_.velocityYaw);Xi=E((ot*3+be(_.s+12).curv*_.speed)/1.04,-1,1),Ie.brake=_.speed>A+1.5,Ie.gas=!Ie.brake;return}let l=navigator.getGamepads?.()[0];if(!l){Nc&&(Bs(),Dc={},Nc=!1);return}Nc=!0,Bs();let d=Math.abs(l.axes[0]||0)>.13?l.axes[0]:0;d&&(Xi=d);let g={gas:l.buttons[7]?.value>.13,brake:l.buttons[6]?.value>.13,drift:!!l.buttons[2]?.pressed,small:!!l.buttons[0]?.pressed,boost:!!l.buttons[1]?.pressed};for(let[T,A]of Object.entries(g))Ie[T]||=A,A&&!Dc[T]&&T in Wn&&Wn[T]++;Dc=g},jr=function(){try{localStorage.setItem("star-rush-settings-reborn",JSON.stringify(rn))}catch{}},ho=function(){nn.name=D("profileName").value.trim().slice(0,16)||nn.name;try{localStorage.setItem("star-rush-profile",JSON.stringify(nn)),localStorage.setItem("star-rush-name",nn.name)}catch{}D("carName").textContent=nn.car;for(let a of["roomName","racerName","profileName"])D(a).value=nn.name;D("profileStatus").textContent="\u5DF2\u4FDD\u5B58 \xB7 "+nn.name,wt.tint=nn.paint},Uc=function(){for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])D(a).checked=!!rn[l];D("qualitySetting").value=rn.quality,D("steeringSetting").value=rn.sensitivity*100,D("fovSetting").value=rn.fov,D("settingsStatus").textContent=o?"\u5F53\u524D\u6D4F\u89C8\u5668\u4F7F\u7528\u517C\u5BB9\u663E\u793A\u6A21\u5F0F\uFF0C\u6BD4\u8D5B\u903B\u8F91\u548C\u64CD\u4F5C\u4FDD\u6301\u4E00\u81F4\u3002":"Three.js 3D \u6E32\u67D3 \xB7 \u8BBE\u7F6E\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5728\u6B64\u8BBE\u5907\u3002"},Du=function(){if(it.room){Zr();return}Wi=!1,ee="ready",Qn(!1),qn=[],Ci=null,gs(),D("welcome").hidden=!1,D("paused").hidden=!0,D("finished").hidden=!0,D("coach").hidden=!0,Vi.classList.add("menu-open"),D("countdown").hidden=!0},op=function(){for(let a of document.querySelectorAll("[data-track]")){let l=Gn[a.dataset.track],d=a.querySelector("svg");if(!l||!d)continue;let g=l.points.map(Mt=>Mt[0]),T=l.points.map(Mt=>Mt[2]),A=Math.min(...g),R=Math.max(...g),O=Math.min(...T),B=Math.max(...T),Z=Math.min(140/(R-A),54/(B-O)),ot=l.points.map(Mt=>[80+(Mt[0]-(A+R)/2)*Z,35+(Mt[2]-(O+B)/2)*Z]),yt=document.createElementNS("http://www.w3.org/2000/svg","path");yt.setAttribute("d",ot.map((Mt,At)=>(At?"L":"M")+Mt.join(",")).join(" ")+"Z"),yt.setAttribute("fill","none"),yt.setAttribute("stroke",l.biome?"#eabfd8":"#a9d8ec"),yt.setAttribute("stroke-width","3"),yt.setAttribute("stroke-linejoin","round"),d.replaceChildren(yt);let ut=document.createElementNS("http://www.w3.org/2000/svg","circle");ut.setAttribute("cx",ot[0][0]),ut.setAttribute("cy",ot[0][1]),ut.setAttribute("r","3"),ut.setAttribute("fill","#ffe2ac"),d.appendChild(ut)}},m=Math.PI,x=m*2,f=(a=0,l=0,d=0)=>[a,l,d],v=(a,l)=>a.map((d,g)=>d+l[g]),b=(a,l)=>a.map((d,g)=>d-l[g]),P=(a,l)=>a.map(d=>d*l),M=(a,l)=>a[0]*l[0]+a[1]*l[1]+a[2]*l[2],p=(a,l)=>[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],N=a=>Math.hypot(...a),z=a=>P(a,1/(N(a)||1)),E=(a,l,d)=>Math.min(d,Math.max(l,a)),I=(a,l,d)=>a+(l-a)*d,L=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Zt={green:"#7fb86c",light:"#a7d27d",dark:"#407750",spine:"#4c8056",belly:"#dfdb96",eye:"#fff2cf",iris:"#325f43",coral:"#df8064",rim:"#f2be8e",rubber:"#344b42",metal:"#b7c8b1",wood:"#b78c57",gold:"#d6b471",cream:"#f1ead2",grass:"#b7cc90",white:"#fff4d7",earth:"#b4976d",water:"#91c6b8",leaf:"#85ad74"},ht=new Map,Vt=Be(),me=Be(12,8),Je=xe(),ye=xe(8),Ce=xe(10,0),ze=xe(4,0),ne=L();class ue{constructor(){this.data=[],this.indices=[]}add(l,d=ne,g=Zt.green,T=.13){let A=typeof g=="string"?ft(g):g,R=Q(d),O=this.data.length/10;for(let B=0;B<l.p.length;B+=3){let Z=W(d,l.p.slice(B,B+3)),ot=lt(R,l.n.slice(B,B+3));this.data.push(...Z,...ot,...A,T)}for(let B of l.i)this.indices.push(O+B);return this}finish(l=!1){return new Qe(this.data,this.indices,l)}}class Qe{constructor(l,d){this.sourceData=new Float32Array(l),this.sourceIndices=new Uint32Array(d),this.count=d.length}update(l){this.sourceData=new Float32Array(l)}dispose(){this.onDispose&&this.onDispose()}}class Le{constructor(l=null,d=ne){this.mesh=l,this.local=d,this.children=[],this.shadow=!0,this.world=ne}add(l){return this.children.push(l),l}}let Se=new Le,Ke=new ue,H=new ue,ct=73121,wt=Se.add(new Le),$=new ue,gt="#83cde4",Tt="#eff0f6",zt="#9c8ad5",Et="#343952",Pt="#ed94bd",Kt="#f8d1b5",Qt="#a3a9e5",ce="#7479b7";pt($,[0,.47,0],[3.15,.43,1.42],gt,.16),pt($,[.9,.68,0],[1.4,.27,1.42],Tt,.13,[0,0,-.065],.5),pt($,[.96,.83,0],[1.08,.035,.14],zt,.015,[0,0,-.065],.5),pt($,[0,.38,0],[3.3,.15,1.48],Et,.07),pt($,[1.53,.31,0],[.5,.075,1.9],zt,.035),pt($,[-1.4,.39,0],[.45,.22,1.55],zt,.07);for(let a of[-.7,.7]){pt($,[-.15,.64,a],[2.55,.35,.29],gt,.12,[0,0,0],.45),pt($,[.1,.81,a],[1.55,.05,.2],Tt,.02),pt($,[-.17,.69,a*1.19],[.62,.19,.032],Et,.02,[0,0,-.12]);for(let l=0;l<4;l++)pt($,[-.38+l*.12,.69,a*1.22],[.035,.13,.015],"#758ab5",.007,[0,0,-.15]);pt($,[1.54,.66,a*.75],[.055,.14,.33],"#fff0b9",.035,[0,0,-.1],.65),pt($,[-1.57,.62,a*.79],[.035,.12,.28],Pt,.035,[0,0,0],.6),pt($,[-1.32,.85,a*.83],[.07,.55,.07],Et,.02),pt($,[-1.38,1.13,a*1.34],[.43,.16,.055],zt,.025)}pt($,[1.6,.44,0],[.04,.15,.67],Et,.03);for(let a=0;a<5;a++)pt($,[1.63,.44,(a-2)*.115],[.014,.1,.024],"#6d7990",.006);pt($,[-1.37,1.12,0],[.38,.065,1.94],Tt,.03),pt($,[-1.37,1.16,0],[.18,.018,1.68],zt,.007),pt($,[-.42,.77,0],[1.05,.08,.94],Et,.05),pt($,[-.69,1,0],[.18,.53,.64],Et,.08,[0,0,-.12]),pt($,[-.6,1.23,0],[.18,.15,.5],zt,.05),pt($,[.28,.94,0],[.075,.26,.91],"#bedde9",.025,[0,0,-.33],.6);for(let a of[-.75,.75])C($,[.22,.91,a*.84],[.31,1.04,a*1.1],.018,Et),oe($,[.31,1.04,a*1.11],[.13,.055,.09],Tt,!0,.6);C($,[.35,.82,0],[.1,1.08,0],.035,Et),$.add(ve(.16,.025,28,8),Y([.1,1.08,0],[1,1,1],[0,m/2,-.35]),Et,.2);for(let a of[-.34,.34])$.add(Je,Y([-1.64,.43,a],[.085,.2,.085],[0,0,m/2]),"#9babc2",.75);oe($,[-.42,1.04,0],[.24,.29,.22],zt),oe($,[-.36,1.29,0],[.095,.1,.09],Kt,!0);for(let a of[-1,1]){let l=[-.38,1.17,a*.22],d=[-.13,1.02,a*.29],g=[.09,1.09,a*.14];C($,l,d,.075,zt,.14,!0),C($,d,g,.06,zt,.14,!0),oe($,g,[.085,.065,.065],Tt,!0)}pt($,[-.18,1.08,0],[.05,.31,.08],Tt,.01);let G=wt.add(new Le($.finish()));G.mesh.paintable=!0;let bt=new ue;oe(bt,[0,0,0],[.335,.355,.3],Kt),oe(bt,[-.19,-.01,0],[.2,.35,.32],ce),oe(bt,[-.025,.19,0],[.37,.255,.33],Qt);for(let a of[-1,1])oe(bt,[-.035,-.04,a*.29],[.13,.28,.095],Qt),oe(bt,[.308,.025,a*.13],[.02,.1,.067],Tt,!0),oe(bt,[.326,.023,a*.13],[.012,.075,.043],"#5c72a5",!0,.4),oe(bt,[.338,.015,a*.13],[.008,.048,.027],"#303c65",!0),oe(bt,[.347,.058,a*.135],[.008,.02,.018],"#fffaf1",!0,.6),oe(bt,[.296,-.1,a*.2],[.014,.038,.045],"#e9a6ab",!0),q(bt,[[.32,.132,a*.075],[.322,.148,a*.13],[.31,.132,a*.19]],.011,ce),y(bt,[.215,.165,a*.18],[.1,.24,.085],Qt,[0,0,m+.2]),bt.add(ve(.084,.014,24,7),Y([.33,.24,a*.125],[1,1,1],[0,m/2,0]),"#e8c58c",.6),oe(bt,[.335,.24,a*.125],[.012,.064,.066],"#a0d8e8",!0,.6);q(bt,[[.317,-.148,-.037],[.326,-.16,0],[.317,-.148,.037]],.009,"#b77787"),bt.add(ve(.313,.02,40,7),Y([-.025,.225,0],[1.05,1,1],[m/2,0,0]),Et),y(bt,[.26,.17,-.04],[.1,.25,.08],Qt,[0,0,m+.25]);let mt=wt.add(new Le(bt.finish())),Rt=[];for(let a of[-1.02,1.06])for(let l of[-1,1]){let d=new ue;d.add(ve(.315,.095,40,12),ne,"#343b4c",.22),d.add(ve(.255,.027,32,8),S(0,0,l*.075),"#e4e6ef",.7),d.add(Je,Y([0,0,l*.07],[.238,.07,.238],[m/2,0,0]),"#4d5576",.35);for(let T=0;T<5;T++){let A=T*x/5;C(d,[0,0,l*.116],[.23*Math.cos(A),.23*Math.sin(A),l*.116],.025,Tt,.65)}oe(d,[0,0,l*.14],[.075,.075,.022],zt,!0,.6);let g=wt.add(new Le(d.finish()));Rt.push({n:g,x:a,z:l*.83,front:a>0})}let Dt=[];for(let a of[-1,1]){let l=new ue;oe(l,[0,0,0],[.65,.105,.105],"#a6f4ff",!0,.8),oe(l,[-.3,0,0],[.35,.065,.065],"#e9d1ff",!0,.7);let d=wt.add(new Le(l.finish()));d.shadow=!1,Dt.push({n:d,side:a})}let St=new ue;pt(St,[0,.36,0],[.6,.72,2.1],"#ef97aa",.08),pt(St,[0,.78,0],[.69,.16,2.2],Tt,.035);for(let a=0;a<5;a++)pt(St,[.312,.4,(a-2)*.38],[.018,.29,.16],"#fff0c7",.015,[.28,0,0]);for(let a of[-.85,.85])C(St,[0,.05,a],[0,.77,a],.045,"#636986");let $t=St.finish(),Yt=new ue;pt(Yt,[0,.07,0],[.8,.12,.8],Et,.04),y(Yt,[0,.49,0],[.28,.78,.28],"#e4b281"),y(Yt,[0,.53,0],[.2,.16,.2],Tt);let ke=Yt.finish(),Re=new ue;Re.add(ve(.34,.068,28,8),Y([0,0,0],[1,1,1],[0,m/2,0]),"#f0d085",.7),oe(Re,[0,0,0],[.04,.22,.22],"#ffe7a7",!0,.55);let Un=Re.finish(),bn=new ue;pt(bn,[0,.025,0],[5.5,.045,3],"#7ecadc",.02);for(let a=0;a<3;a++){let l=-1.8+a*1.6;C(bn,[l-.45,.075,-.9],[l+.35,.075,0],.055,"#eef9d0",.3),C(bn,[l+.35,.075,0],[l-.45,.075,.9],.055,"#eef9d0",.3)}let lc=bn.finish(),Pr=new ue,Us=[-2.5,0,-1.6,2.5,0,-1.6,2.5,1,-1.6,-2.5,0,1.6,2.5,0,1.6,2.5,1,1.6],Kn=[0,1,2,3,5,4,0,2,5,0,5,3,1,4,5,1,5,2],Ir=[],Lr=[],Dr=[];for(let a=0;a<Kn.length;a+=3){let l=Us.slice(Kn[a]*3,Kn[a]*3+3),d=Us.slice(Kn[a+1]*3,Kn[a+1]*3+3),g=Us.slice(Kn[a+2]*3,Kn[a+2]*3+3),T=z(p(b(d,l),b(g,l))),A=Ir.length/3;Ir.push(...l,...d,...g),Lr.push(...T,...T,...T),Dr.push(A,A+1,A+2)}Pr.add(Xt(Ir,Lr,Dr),ne,"#d9b1e0");for(let a of[-1.4,1.4])C(Pr,[-2.5,.06,a],[2.5,1.06,a],.045,Tt);let Ti=Pr.finish(),Nr=new ue().add(me,ne,"#b4eaff",.2).finish(),us=Array.from({length:45},()=>({life:0,p:[0,0,0],v:[0,0,0],size:.1,node:new Le(Nr)}));for(let a of us)a.node.shadow=!1;let jt="circuit",tn="coast-reborn",ds="coast-reborn",Gn={"coast-reborn":{name:"\u6C50\u89C1\u6D77\u5CB8",laps:1,biome:0,difficulty:"\u5165\u95E8 \xB7 \u9AD8\u901F\u7EC4\u5408\u5F2F",description:"\u6C50\u89C1\u7AD9\u524D \u2192 \u6D77\u6EE8\u5546\u5E97\u8857 \u2192 \u795E\u793E\u5C71\u9053 \u2192 \u6E2F\u6E7E S \u5F2F",sectors:[{at:0,name:"\u6C50\u89C1\u7AD9\u524D"},{at:.22,name:"\u6D77\u6EE8\u5546\u5E97\u8857"},{at:.48,name:"\u6E2F\u6E7E S \u5F2F"},{at:.66,name:"\u795E\u793E\u5C71\u9053"},{at:.82,name:"\u6D77\u98CE\u5927\u9053"}],points:[[-155,0,70],[-80,0,70],[0,.2,70],[85,.7,65],[135,1.2,30],[130,1.6,-20],[75,2,-28],[38,1.8,0],[0,1.5,-10],[8,.8,-58],[65,.2,-80],[115,0,-85],[130,.4,-125],[75,1,-150],[0,1.6,-145],[-60,2,-100],[-110,1.2,-135],[-155,.5,-100],[-200,0,-25],[-218,0,28],[-215,0,70]]},"sakura-reborn":{name:"\u82B1\u89C1\u5742",laps:2,biome:1,difficulty:"\u8FDB\u9636 \xB7 \u8FDE\u7EED\u53CD\u5411\u5F2F",description:"\u6A31\u82B1\u6821\u95E8 \u2192 \u82B1\u89C1\u5742\u5546\u5E97\u8857 \u2192 \u795E\u793E\u53C2\u9053 \u2192 \u6CB3\u5CB8\u56DE\u73AF",sectors:[{at:0,name:"\u6A31\u82B1\u7AD9\u524D"},{at:.22,name:"\u82B1\u89C1\u5742\u5546\u5E97\u8857"},{at:.47,name:"\u6CB3\u5CB8\u56DE\u73AF"},{at:.66,name:"\u795E\u793E\u53C2\u9053"},{at:.83,name:"\u6A31\u82B1\u5927\u9053"}],points:[[-180,0,70],[-95,0,70],[0,0,70],[95,.4,62],[170,1,16],[160,1.6,-45],[100,2,-70],[55,2.2,-30],[5,2,-55],[-16,1,-110],[-80,.5,-130],[-145,0,-104],[-220,0,-45],[-230,0,25],[-230,0,70]]}};Gn["academy-reborn"]={name:"\u661F\u8DC3\u8BAD\u7EC3\u573A",laps:1,biome:1,difficulty:"\u57FA\u7840\u9A7E\u9A76",description:"\u5BBD\u7F13\u5F2F\u9053 \xB7 \u6E05\u6670\u89C6\u91CE \xB7 \u7EC3\u4E60\u8D77\u6F02\u3001\u53CD\u6253\u4E0E\u51FA\u5F2F\u55B7\u5C04",sectors:[{at:0,name:"\u57FA\u7840\u76F4\u9053"},{at:.33,name:"\u6F02\u79FB\u5F27\u7EBF"},{at:.66,name:"\u51FA\u5F2F\u52A0\u901F"}],points:[[-100,0,65],[0,0,65],[100,0,65],[145,.3,25],[145,.4,-25],[100,.2,-65],[0,0,-65],[-100,0,-65],[-145,.1,-25],[-145,.1,25]]};for(let[a,l]of Object.entries(Gn)){let d=a==="coast-reborn"?1.45:a==="sakura-reborn"?1.5:1.2;l.points=l.points.map(g=>[g[0]*d,g[1],g[2]*d])}let fn=[],De=0,Ur={};w();let kt=220,Ut=245,Gt=1.57,Jt=.91,fe=8.045,se=(a,l)=>a[0]*l[0]+a[1]*l[1],Wt=(a,l)=>a[0]*l[1]-a[1]*l[0],Bt=new Map,ui=null,tu=null,cc=[],Af=hn("petal",a=>pt(a,[0,0,0],[.12,.025,.075],"#ffd2e8",.025)),Te=null,Fn=!0,If=(()=>{let a=(A,R,O)=>Math.min(O,Math.max(R,A)),l=(A,R,O)=>A+(R-A)*O,d=A=>Math.atan2(Math.sin(A),Math.cos(A)),g=Object.freeze({cruise:52,mini:63,nitro:76,combo:83,normalTurn:1.04,driftTurn:1.8,driveAcceleration:27,jetAcceleration:36});function T(A,R,O,B={}){let Z=Math.hypot(A.vS,A.vL),ot=Z>.05?Math.atan2(A.vL,A.vS):A.yaw,yt=a(Number(R.steer)||0,-1,1),ut=B.sensitivity||1,Mt=A.vS*Math.cos(A.yaw)+A.vL*Math.sin(A.yaw)<-.05;A.steering=l(A.steering||0,yt,1-Math.exp(-O*26));let At=!!A.drifting,Lt=A.driftSide||Math.sign(yt)||1,ge=At&&yt*Lt<-.1,_t=At&&A.driftReleasing,vt=A.steering*g.normalTurn*ut*a(Z/8,0,1)*(Mt?-1:1);if(At){let lp=Math.max(0,A.steering*Lt),cp=Lt*(ge?.4:.52+lp*(g.driftTurn-.52)),hp=_t?a((A.releaseAge||0)/.38,0,1):0;vt=l(cp,vt,hp)*a(Z/9,0,1)}A.jump>.2&&(vt*=.35),A.turnRate=l(A.turnRate||0,vt,1-Math.exp(-O*(At?13:19)));let It=d(ot+A.turnRate*O),Ht=d(ot-(Mt?Math.PI:0)),Ot=d(A.yaw-Ht),de=At?Lt*(ge?.015:_t?.12:.22+.38*Math.max(0,yt*Lt)):A.steering*.025;_t&&(de*=1-a((A.releaseAge||0)/.45,0,1));let An=ge?13:At?9:8;Ot=l(Ot,de,1-Math.exp(-O*An)),A.yaw=d(It-(Mt?Math.PI:0)+Ot+(A.spin||0)*O),A.spin=(A.spin||0)*Math.exp(-O*6);let We=Z,En=.7+Z*.018+Z*Z*45e-5,$e=A.nitroTime>0||A.mini>0||A.pad>0,bs=A.nitroTime>0?A.comboTimer>0?g.combo:g.nitro:A.pad>0?73:A.mini>0?g.mini:g.cruise,Ks=R.gas&&!R.brake?a((g.cruise-We)*2.8,0,g.driveAcceleration):0,$s=$e&&!R.brake?a((bs-We)*2.8,0,g.jetAcceleration):0,qi=At?(ge?1.3:3.3)*Math.abs(Ot):0;return We=Math.max(0,We+(Ks+$s-En-qi)*O),!$e&&We>g.cruise&&(We=Math.max(g.cruise,We-Math.min(8,(We-g.cruise)*.7)*O)),R.brake&&(We=Math.max(0,We-36*O)),Mt&&R.gas&&(We=Math.max(0,We-32*O)),R.brake&&!R.gas&&(Z<1.3||Mt)?(A.vS=l(A.vS,-Math.cos(A.yaw)*5,1-Math.exp(-O*5)),A.vL=l(A.vL,-Math.sin(A.yaw)*5,1-Math.exp(-O*5))):(A.vS=Math.cos(It)*We,A.vL=Math.sin(It)*We),A.speed=Math.hypot(A.vS,A.vL),A.velocityYaw=It,A.lateralSpeed=A.vL,{slip:Ot,counter:ge,thrust:$s,boost:$e,speed:A.speed}}return{step:T,config:g,wrap:d}})(),Tn=a=>Math.atan2(Math.sin(a),Math.cos(a)),D=a=>document.getElementById(a),Vi=D("game"),Ie={gas:!1,brake:!1,left:!1,right:!1,drift:!1,boost:!1,small:!1},Ya=new Set,Ja=new Map,Wn={drift:0,boost:0,small:0},dc=[{name:"\u6C50\u89C1\u6D77\u5CB8",ground:"#cbdcbd",tree:"#b9d5bb",accent:"#afc8e4",fog:"#c8deef"},{name:"\u82B1\u89C1\u5742",ground:"#d9d7c7",tree:"#f0bfd5",accent:"#c9c1e5",fog:"#dcdff1"},{name:"\u661F\u5149\u5CE1\u8C37",ground:"#c4b8c3",tree:"#a7a5d3",accent:"#d8b4d8",fog:"#dbdce8"}],_={s:0,l:0,speed:0,yaw:0,velocityYaw:0,energy:0,coins:0,score:0,inv:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,wallRecover:0,wallSide:0,stuckTime:0},Za=1/120,Bx=7.02,iu=new Map,fc=null,fs=0,zs=60,Fr=0,ps=null,Ff=new ue().add(xt(1,.009,.12,.003),ne,"#414957",.01).finish(),ms=Array.from({length:160},()=>({life:0,p:[0,0,0],angle:0,length:1,node:new Le(Ff)}));for(let a of ms)a.node.shadow=!1;let Of=0,ee="ready",ks=(Date.now()>>>0)%999999||24681,Ka=1,$n=[],Or=0,pc=-m/2,mc=100,$a=0,un=new Map,gc=0,di=0,Vs=0,ja=performance.now(),Gi=3,Xn=0,Gs=0,Br=0,zr=0,su=!1,Qa=!1,kr=0,to=0;try{kr=Number(localStorage.getItem("star-rush-best-distance")||0),to=Number(localStorage.getItem("star-rush-best-score")||0)}catch{}let fi=Object.fromEntries(["distance","score","coins","speed","gear","energyText","biome","turnText","turnArrowPath","driftText"].map(a=>[a,D(a)])),Ws=null,Vr=null,_s=null,yc=D("minimap"),te=yc.getContext("2d"),Mc=0,eo={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"small",KeyQ:"small",ShiftLeft:"drift",ShiftRight:"drift",KeyE:"boost",KeyC:"boost"};window.addEventListener("keydown",a=>{if(!a.target.closest("input,select,textarea")){if(a.code==="Escape"){for(let l of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])if(!D(l).hidden){ys(l);return}}if(!["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!D(l).hidden)){if(eo[a.code]&&(a.preventDefault(),Ya.add(a.code),Bs()),a.code==="Backspace"){a.preventDefault(),a.repeat||vc(!1);return}a.repeat||(a.code==="F2"&&(a.preventDefault(),D("diagnostics").hidden=!D("diagnostics").hidden),(a.code==="KeyP"||a.code==="Escape")&&Hi(),a.code==="KeyV"&&(Xn=(Xn+1)%3,gn("CAMERA "+(Xn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Xn],1)),a.code==="KeyR"&&Hs(!1),a.code==="Enter"&&(ee==="ready"||ee==="finished"?Hs(!1):ee==="paused"&&Hi()))}}}),window.addEventListener("keyup",a=>{["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!D(l).hidden)||eo[a.code]&&(a.preventDefault(),Ya.delete(a.code),Bs())}),window.addEventListener("blur",()=>{gs(),ee==="running"&&Hi()});for(let a of document.querySelectorAll("[data-key]")){a.addEventListener("pointerdown",d=>{d.preventDefault(),a.setPointerCapture(d.pointerId),Ja.set(d.pointerId,a.dataset.key),Bs(),a.classList.add("held")});let l=d=>{Ja.delete(d.pointerId),Bs(),a.classList.remove("held")};for(let d of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(d,l)}D("endRunBtn").onclick=()=>{jt==="endless"&&(ee==="running"||ee==="paused")&&(D("paused").hidden=!0,xc())},D("recoverBtn").onclick=()=>vc(!1),D("startBtn").onclick=()=>Hs(!1),D("retryBtn").onclick=()=>Hs(!1),D("newRouteBtn").onclick=()=>{if(typeof it<"u"&&it.room){Zr();return}ee="ready",Qn(!0),D("finished").hidden=!0,D("welcome").hidden=!1},D("rerollBtn").onclick=()=>Qn(!0),D("pauseBtn").onclick=Hi,D("resumeBtn").onclick=Hi,D("restartPause").onclick=()=>Hs(!1),D("viewBtn").onclick=()=>{Xn=(Xn+1)%3,gn("CAMERA "+(Xn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Xn],1)},D("soundBtn").onclick=()=>{Xa(),Fn=!Fn,Te&&Te.ctx.resume().catch(()=>{}),D("soundBtn").textContent=Fn?"\u266B":"\u266A",D("soundBtn").setAttribute("aria-label",Fn?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),D("soundBtn").title=Fn?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED",Fn&&ki(600)};let Wf=["#a1cddd","#c2d4bc"].map(a=>new ue().add(xt(1100,.16,1100,.04),ne,a,.02).finish()),no=new Le,Sc=[],Gr=1,Hr=1;new ResizeObserver(uu).observe(i),uu(),Qn(!1),i.addEventListener("webglcontextlost",a=>{a.preventDefault(),n("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u6E38\u620F\u3002")}),document.addEventListener("visibilitychange",()=>{document.hidden&&ee==="running"&&Hi(),ja=performance.now()}),requestAnimationFrame(du);let xs=tn,Wr=null,wi="circuit",Ai=!1,bc=0;async function Xr(){let a=++bc,l=D("rankRows");D("rankTrack")&&(D("rankTrack").hidden=wi!=="circuit"),l.replaceChildren(),D("rankStatus").textContent=Ai?"\u672C\u673A\u8BB0\u5F55":"\u6B63\u5728\u83B7\u53D6\u5728\u7EBF\u6210\u7EE9\u2026";for(let[d,g]of[["boardCircuit","circuit"],["boardEndless","endless"]])D(d).classList.toggle("selected",!Ai&&wi===g);D("boardLocal").classList.toggle("selected",Ai);try{let d;if(Ai)d=fu().filter(g=>g.mode===wi&&(g.mode==="endless"||g.track===xs)).sort((g,T)=>wi==="circuit"?g.timeMs-T.timeMs:T.distance-g.distance).slice(0,20);else{let g=await fetch("/api/leaderboard?mode="+wi+"&track="+encodeURIComponent(xs));if(!g.ok)throw new Error("\u699C\u5355\u670D\u52A1\u6682\u4E0D\u53EF\u7528");d=(await g.json()).runs}if(a!==bc)return;for(let g=0;g<d.length;g++)l.appendChild(qf(g,d[g]));D("rankStatus").textContent=d.length?(Ai?"\u5F53\u524D\u8BBE\u5907 \xB7 ":"\u5728\u7EBF \xB7 ")+(wi==="circuit"?Gn[xs].name+" / "+Gn[xs].laps+" \u5708 / \u6309\u6700\u5FEB\u7528\u65F6":"\u65E0\u5C3D\u6A21\u5F0F / \u6309\u6700\u8FDC\u91CC\u7A0B"):"\u8FD8\u6CA1\u6709\u6210\u7EE9\uFF0C\u6765\u8DD1\u7B2C\u4E00\u5708\u3002"}catch{if(a!==bc)return;D("rankStatus").textContent="\u5728\u7EBF\u699C\u6682\u65F6\u672A\u80FD\u52A0\u8F7D\uFF0C\u53EF\u5207\u6362\u201C\u672C\u673A\u8BB0\u5F55\u201D\u3002"}}D("rankBtn").onclick=Yf,D("closeRank").onclick=()=>ys("rankPanel"),D("boardCircuit").onclick=()=>{wi="circuit",Ai=!1,Xr()},D("boardEndless").onclick=()=>{wi="endless",Ai=!1,Xr()},D("boardLocal").onclick=()=>{Ai=!0,Xr()},D("circuitMode").onclick=()=>pu("circuit"),D("endlessMode").onclick=()=>pu("endless");try{D("racerName").value=localStorage.getItem("star-rush-name")||""}catch{}D("submitRun").onclick=async()=>{if(!Wr)return;let a=D("racerName").value.trim().slice(0,16)||"\u533F\u540D\u8F66\u624B";try{localStorage.setItem("star-rush-name",a)}catch{}D("submitRun").disabled=!0,D("uploadStatus").textContent="\u6B63\u5728\u4E0A\u4F20\u6210\u7EE9\u2026";try{if(!(await fetch("/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...Wr,name:a})})).ok)throw new Error;D("submitRun").textContent="\u5DF2\u4E0A\u4F20",D("uploadStatus").textContent="\u4E0A\u4F20\u6210\u529F\uFF01\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u699C\u201D\u67E5\u770B\u548C\u670B\u53CB\u7684\u6392\u540D\u3002"}catch{D("submitRun").disabled=!1,D("uploadStatus").textContent="\u6682\u65F6\u672A\u80FD\u4E0A\u4F20\uFF0C\u672C\u673A\u6210\u7EE9\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u91CD\u8BD5\u3002"}};for(let a of document.querySelectorAll("[data-track]"))a.onclick=()=>mu(a.dataset.track);qr();let Xs=document.createElement("select");Xs.id="rankTrack",Xs.setAttribute("aria-label","\u6392\u884C\u699C\u8D5B\u9053");for(let[a,l]of Object.entries(Gn)){let d=document.createElement("option");d.value=a,d.textContent=l.name,Xs.appendChild(d)}D("rankStatus").before(Xs),Xs.onchange=()=>{xs=Xs.value,Xr()};let wn={enabled:!0,volume:.4,sfxVolume:.75};try{Object.assign(wn,JSON.parse(localStorage.getItem("star-rush-audio")||"{}"))}catch{}let re={mode:"synth",bus:null,step:0,next:0,files:[],index:0,url:null,element:null},Jr=!1;D("musicBtn").onclick=()=>{Yr(),qs("musicPanel")},D("closeMusic").onclick=()=>ys("musicPanel"),D("helpBtn").onclick=D("welcomeHelp").onclick=()=>qs("helpPanel"),D("closeHelp").onclick=()=>ys("helpPanel"),D("synthMusic").onclick=()=>io("synth"),D("classicMusic").onclick=()=>io("classic"),D("musicFiles").onchange=a=>{re.files=Array.from(a.target.files||[]),so(0)},D("nextSong").onclick=()=>so(re.index+1),D("previousSong").onclick=()=>so(re.index-1),D("musicToggle").onclick=()=>{Yr(),wn.enabled=!wn.enabled,D("musicToggle").textContent=wn.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",Tc()},D("musicVolume").value=Math.round(wn.volume*100),D("sfxVolume").value=Math.round(wn.sfxVolume*100),D("musicToggle").textContent=wn.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",D("musicVolume").oninput=a=>{wn.volume=Number(a.target.value)/100,Tc()},D("sfxVolume").oninput=a=>{wn.sfxVolume=Number(a.target.value)/100,Tc()},D("classicTrack").onchange=()=>{io("classic"),D("spotifyPlayer").src="https://open.spotify.com/embed/track/"+D("classicTrack").value+"?utm_source=generator&theme=0"};let it={id:crypto.randomUUID(),room:null,members:[],ready:!1,busy:!1,lastSync:0,offset:0,startAt:0,runTag:0,peers:new Map,errors:0,rtt:0,session:0},ro=["#f6aec9","#ffd88b","#baafff","#a8efce"],Zf=ro.map(a=>{let l=new ue;return y(l,[0,2.55,0],[.14,.28,.14],a,[0,0,m]),l.finish()});async function Ac(a,l={}){let d=Date.now(),g=await fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:a,id:it.id,code:it.room?.code||D("roomCode").value.trim(),name:D("roomName").value.trim()||"\u533F\u540D\u8F66\u624B",track:tn,...l}),signal:AbortSignal.timeout(4e3)}),T=await g.json();if(!g.ok)throw new Error(T.error||"\u623F\u95F4\u8BF7\u6C42\u5931\u8D25");if(it.rtt=Date.now()-d,T.serverTime){let A=T.serverTime-(d+Date.now())/2;it.offset=it.room?I(it.offset,A,.25):A}return T}async function vu(a){if(!it.busy){it.busy=!0,D("roomStatus").textContent="\u6B63\u5728\u8FDE\u63A5\u623F\u95F4\u2026";try{let l=await Ac(a);it.session++,xu(),tn=l.room.track,jt="circuit",Qn(!1),qr(),Ec(l),ee="ready",Jr=!1,D("paused").hidden=!0,D("finished").hidden=!0,D("welcome").hidden=!1,Vi.classList.add("menu-open");try{localStorage.setItem("star-rush-name",D("roomName").value.trim())}catch{}}catch(l){D("roomStatus").textContent=l.message}finally{it.busy=!1}}}async function yu(a,l={}){if(it.busy)return;it.busy=!0;let d=it.session;try{let g=await Ac(a,l);d===it.session&&it.room&&Ec(g)}catch(g){D("roomStatus").textContent=g.message}finally{it.busy=!1}}async function $f(){if(!it.room)return;let a={action:"leave",id:it.id,code:it.room.code,name:D("roomName").value};it.session++,it.room=null,it.startAt=0,it.runTag=0,it.members=[],xu(),ee="ready",Qn(!1),D("finished").hidden=!0,D("paused").hidden=!0,D("countdown").hidden=!0,D("welcome").hidden=!1,Vi.classList.add("menu-open"),Cc(),fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),keepalive:!0}).catch(()=>{})}D("roomBtn").onclick=D("welcomeRoom").onclick=Zr,D("closeRoom").onclick=()=>ys("roomPanel"),D("createRoom").onclick=()=>vu("create"),D("joinRoom").onclick=()=>vu("join"),D("readyRoom").onclick=()=>yu("ready",{ready:!it.ready}),D("startRoom").onclick=()=>yu(it.room?.status!=="lobby"?"reset":"start"),D("leaveRoom").onclick=$f,D("copyRoom").onclick=async()=>{if(!it.room)return;let a=new URL(location.href);a.searchParams.set("room",it.room.code);try{await navigator.clipboard.writeText(a.toString()),D("roomStatus").textContent="\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5373\u53EF\u52A0\u5165"}catch{D("roomStatus").textContent="\u623F\u95F4\u7801 "+it.room.code+" \xB7 \u590D\u5236\u6D4F\u89C8\u5668\u5730\u5740\u5E76\u52A0\u4E0A ?room="+it.room.code}};try{D("roomName").value=localStorage.getItem("star-rush-name")||"\u8F66\u624B"+Math.floor(100+Math.random()*900)}catch{}let bu=new URLSearchParams(location.search).get("room");bu&&(D("roomCode").value=bu.toUpperCase().slice(0,6),Zr()),window.addEventListener("pagehide",()=>{it.room&&navigator.sendBeacon("/api/rooms",new Blob([JSON.stringify({action:"leave",id:it.id,code:it.room.code})],{type:"application/json"}))});let qn=[],Wi=!1,Xi=null,Rc={drawCalls:0,triangles:0},Kr=!1,Ei=null,Ci=null,Ms=0,ao=[],oo=0,lo=[],Ys=[],Ss=1,$r=1,Js=null,co=0,Qf=["Aoi / AI","Haru / AI","Rin / AI"],Tu=["#f0a7c8","#b6a7e6","#f1cd90"],wu=["#a5dbe6","#f0b7c3"].map(a=>{let l=new ue;return C(l,[-.6,.03,-.38],[.1,.03,0],.055,a),C(l,[.1,.03,0],[-.6,.03,.38],.055,a),l.finish()}),Pc=Array.from({length:9},()=>new Le(wu[0]));for(let a of Pc)a.shadow=!1;let Zs=[],Lc=0,Iu=performance.now(),Dc={},Nc=!1,Lu={quality:"auto",sensitivity:1,fov:62,autoGas:!1,line:!0,ghost:!0},rn={...Lu},nn={name:"\u8F66\u624B"+Math.floor(100+Math.random()*900),paint:"#83cde4",car:"Mint Comet"},Ri="race";try{Object.assign(rn,JSON.parse(localStorage.getItem("star-rush-settings-reborn")||"{}")),Object.assign(nn,JSON.parse(localStorage.getItem("star-rush-profile")||"{}")),nn.name=localStorage.getItem("star-rush-name")||nn.name}catch{}let ap=[["Mint Comet","#83cde4","\u8584\u8377\u5F57\u661F"],["Sakura Bloom","#efabc8","\u6A31\u82B1\u7EFD\u653E"],["Violet Hour","#b1a0df","\u66AE\u8272\u7D2B"],["Solar Flare","#edc784","\u65E5\u5149\u91D1"]];D("settingsBtn").onclick=()=>{Uc(),qs("settingsPanel")},D("closeSettings").onclick=()=>ys("settingsPanel");for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])D(a).onchange=d=>{rn[l]=d.target.checked,jr()};D("qualitySetting").onchange=a=>{rn.quality=a.target.value,jr()},D("steeringSetting").oninput=a=>{rn.sensitivity=Number(a.target.value)/100,jr()},D("fovSetting").oninput=a=>{rn.fov=Number(a.target.value),jr()},D("resetSettings").onclick=()=>{rn={...Lu},jr(),Uc()};for(let[a,l,d]of ap){let g=document.createElement("button");g.type="button",g.style.setProperty("--paint",l),g.setAttribute("aria-label",d+"\u6D82\u88C5");let T=document.createElement("i"),A=document.createElement("b"),R=document.createElement("small");A.textContent=a,R.textContent=d,g.append(T,A,R),g.onclick=()=>{nn.paint=l,nn.car=a;for(let O of D("garageGrid").children)O.classList.toggle("selected",O===g);ho()},nn.paint===l&&g.classList.add("selected"),D("garageGrid").appendChild(g)}D("garageBtn").onclick=()=>qs("garagePanel"),D("closeGarage").onclick=()=>ys("garagePanel"),D("saveProfile").onclick=ho,D("profileName").value=nn.name,ho(),D("eventType").onchange=a=>{Ri=a.target.value,Ri==="practice"&&mu("academy-reborn")},D("pauseHome").onclick=Du,D("newRouteBtn").onclick=Du,D("demoBtn").onclick=()=>{Hs(!1),Wi=!0,gn("DEMO DRIVE","\u81EA\u52A8\u8BD5\u9A7E \xB7 \u6309\u4EFB\u610F\u65B9\u5411\u952E\u63A5\u7BA1",2)},window.addEventListener("keydown",a=>{a.target.closest("input,select,textarea")||["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a.code)&&Wi&&(Wi=!1,Xi=null,gn("YOUR TURN","\u5DF2\u63A5\u7BA1\u8D5B\u8F66",1))}),D("compatNotice").hidden=!o,op(),Uc(),Ic();for(let a of["racerName","roomName"])D(a).addEventListener("change",()=>{D("profileName").value=D(a).value,ho()});Mf(document,{"coast-reborn":"/assets/course-art/coast-v2.bd2e4837727f.webp","sakura-reborn":"/assets/course-art/sakura-v1.3b94eedaa6d8.webp","academy-reborn":"/assets/course-art/academy-v1.9c6071e18e14.webp"})}catch(h){console.error(h),n("\u6E38\u620F\u521D\u59CB\u5316\u5F02\u5E38\uFF1A"+h.message)}})();})();
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
