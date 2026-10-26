(()=>{function Du(i,t,e,{fetchImpl:n=globalThis.fetch,timeoutMs:s=5e3}={}){let r=new Map,o={light:"idle",medium:"idle"},c=new Set,u=null,h=!1,m="none",v=0,f=new Set;function M(){return u||(u=Promise.all(["light","medium"].map(async p=>{if(h)return;o[p]="loading";let N=new AbortController;f.add(N);let k;try{let C=(async()=>{if(typeof e[p]!="string"||!e[p].startsWith("/assets/impact-audio/"))throw Error("Missing rail asset");let L=await n(e[p],{signal:N.signal});if(!L.ok)throw Error("Rail asset HTTP error");let O=await L.arrayBuffer();if(O.byteLength>5e4)throw Error("Rail asset oversized");let T=await i.decodeAudioData(O);if(!(T.duration>0&&T.duration<=1)||T.numberOfChannels!==1)throw Error("Invalid rail clip");return T})(),P=await Promise.race([C,new Promise((L,O)=>{k=setTimeout(()=>{N.abort(),O(Error("Rail asset timeout"))},s)})]);h||(r.set(p,P),o[p]="ready")}catch{h||(o[p]="fallback")}finally{clearTimeout(k),f.delete(N)}})),u)}function S(){for(let p of[...c]){try{p.source.stop()}catch{}p.cleanup()}}function R(p){if(h||i.state!=="running"||!Number.isFinite(p)||p<.7)return!1;let N=p>5?"medium":"light",k=r.get(N);if(!k)return m=N+" fallback",!1;if(c.size>=4){let O=c.values().next().value;try{O.source.stop()}catch{}O.cleanup()}let C,P,L;try{return C=i.createBufferSource(),P=i.createGain(),C.buffer=k,P.gain.value=.15,C.connect(P),P.connect(t),L={source:C,cleanup(){c.delete(L),C.onended=null,C.disconnect(),P.disconnect()}},C.onended=()=>L.cleanup(),c.add(L),C.start(),C.stop(i.currentTime+k.duration+.02),m=N,v++,!0}catch{return L?L.cleanup():(C?.disconnect(),P?.disconnect()),m=N+" fallback",!1}}function y(){h=!0;for(let p of f)p.abort();S(),r.clear()}return{load:M,play:R,stop:S,dispose:y,status:()=>({states:{...o},active:c.size,last:m,played:v})}}var id=0,uh=1,sd=2;var Ca=1,ul=2,Mr=3,as=0,pn=1,yi=2,Mi=0,Sr=1,dh=2,fh=3,ph=4,rd=5;var Ps=100,ad=101,od=102,ld=103,cd=104,hd=200,ud=201,dd=202,fd=203,mh=204,gh=205,pd=206,md=207,gd=208,_d=209,xd=210,vd=211,yd=212,Md=213,Sd=214,Do=0,No=1,Uo=2,fr=3,Fo=4,Oo=5,Bo=6,zo=7,_h=0,bd=1,Td=2,si=0,xh=1,vh=2,yh=3,Ra=4,Mh=5,Sh=6,bh=7;var Th=300,os=301,Is=302,dl=303,fl=304,Pa=306,ko=1e3,mi=1001,Vo=1002,$e=1003,wd=1004;var Ia=1005;var fn=1006,pl=1007;var ls=1008;var Dn=1009,wh=1010,Ah=1011,br=1012,ml=1013,ri=1014,Jn=1015,ai=1016,gl=1017,_l=1018,Tr=1020,Eh=35902,Ch=35899,Rh=1021,Ph=1022,Zn=1023,gi=1026,cs=1027,wr=1028,xl=1029,hs=1030,vl=1031;var yl=1033,La=33776,Da=33777,Na=33778,Ua=33779,Ml=35840,Sl=35841,bl=35842,Tl=35843,wl=36196,Al=37492,El=37496,Cl=37488,Rl=37489,Fa=37490,Pl=37491,Il=37808,Ll=37809,Dl=37810,Nl=37811,Ul=37812,Fl=37813,Ol=37814,Bl=37815,zl=37816,kl=37817,Vl=37818,Gl=37819,Hl=37820,Wl=37821,Xl=36492,ql=36494,Yl=36495,Jl=36283,Zl=36284,Oa=36285,Kl=36286;var ra=2300,Go=2301,Io=2302,sh=2303,rh=2400,ah=2401,oh=2402;var Ad=3200;var $l=0,Ed=1,Bi="",En="srgb",aa="srgb-linear",oa="linear",ze="srgb";var Lo=7680;var Cd=519,Rd=512,Pd=513,Id=514,jl=515,Ld=516,Dd=517,Ql=518,Nd=519,Ud=35044,Ih=35048;var Lh="300 es",ii=2e3,pr=2001;function dp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fd(){let i=la("canvas");return i.style.display="block",i}var Nu={},mr=null;function Dh(...i){let t="THREE."+i.shift();mr?mr("log",t,...i):console.log(t,...i)}function Od(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ie(...i){i=Od(i);let t="THREE."+i.shift();if(mr)mr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function re(...i){i=Od(i);let t="THREE."+i.shift();if(mr)mr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cs(...i){let t=i.join(" ");t in Nu||(Nu[t]=!0,ie(...i))}function Bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var zd={[Do]:No,[Uo]:Bo,[Fo]:zo,[fr]:Oo,[No]:Do,[Bo]:Uo,[zo]:Fo,[Oo]:fr},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Uc=Math.PI/180,Ho=180/Math.PI;function Ba(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function pp(i,t){return(i%t+t)%t}function Fc(i,t,e){return(1-e)*i+e*t}function jr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pe=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,c){let u=n[s+0],h=n[s+1],m=n[s+2],v=n[s+3],f=r[o+0],M=r[o+1],S=r[o+2],R=r[o+3];if(v!==R||u!==f||h!==M||m!==S){let y=u*f+h*M+m*S+v*R;y<0&&(f=-f,M=-M,S=-S,R=-R,y=-y);let p=1-c;if(y<.9995){let N=Math.acos(y),k=Math.sin(N);p=Math.sin(p*N)/k,c=Math.sin(c*N)/k,u=u*p+f*c,h=h*p+M*c,m=m*p+S*c,v=v*p+R*c}else{u=u*p+f*c,h=h*p+M*c,m=m*p+S*c,v=v*p+R*c;let N=1/Math.sqrt(u*u+h*h+m*m+v*v);u*=N,h*=N,m*=N,v*=N}}t[e]=u,t[e+1]=h,t[e+2]=m,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,o){let c=n[s],u=n[s+1],h=n[s+2],m=n[s+3],v=r[o],f=r[o+1],M=r[o+2],S=r[o+3];return t[e]=c*S+m*v+u*M-h*f,t[e+1]=u*S+m*f+h*v-c*M,t[e+2]=h*S+m*M+c*f-u*v,t[e+3]=m*S-c*v-u*f-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,c=Math.cos,u=Math.sin,h=c(n/2),m=c(s/2),v=c(r/2),f=u(n/2),M=u(s/2),S=u(r/2);switch(o){case"XYZ":this._x=f*m*v+h*M*S,this._y=h*M*v-f*m*S,this._z=h*m*S+f*M*v,this._w=h*m*v-f*M*S;break;case"YXZ":this._x=f*m*v+h*M*S,this._y=h*M*v-f*m*S,this._z=h*m*S-f*M*v,this._w=h*m*v+f*M*S;break;case"ZXY":this._x=f*m*v-h*M*S,this._y=h*M*v+f*m*S,this._z=h*m*S+f*M*v,this._w=h*m*v-f*M*S;break;case"ZYX":this._x=f*m*v-h*M*S,this._y=h*M*v+f*m*S,this._z=h*m*S-f*M*v,this._w=h*m*v+f*M*S;break;case"YZX":this._x=f*m*v+h*M*S,this._y=h*M*v+f*m*S,this._z=h*m*S-f*M*v,this._w=h*m*v-f*M*S;break;case"XZY":this._x=f*m*v-h*M*S,this._y=h*M*v-f*m*S,this._z=h*m*S+f*M*v,this._w=h*m*v+f*M*S;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],c=e[5],u=e[9],h=e[2],m=e[6],v=e[10],f=n+c+v;if(f>0){let M=.5/Math.sqrt(f+1);this._w=.25/M,this._x=(m-u)*M,this._y=(r-h)*M,this._z=(o-s)*M}else if(n>c&&n>v){let M=2*Math.sqrt(1+n-c-v);this._w=(m-u)/M,this._x=.25*M,this._y=(s+o)/M,this._z=(r+h)/M}else if(c>v){let M=2*Math.sqrt(1+c-n-v);this._w=(r-h)/M,this._x=(s+o)/M,this._y=.25*M,this._z=(u+m)/M}else{let M=2*Math.sqrt(1+v-n-c);this._w=(o-s)/M,this._x=(r+h)/M,this._y=(u+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=e._x,u=e._y,h=e._z,m=e._w;return this._x=n*m+o*c+s*h-r*u,this._y=s*m+o*u+r*c-n*h,this._z=r*m+o*h+n*u-s*c,this._w=o*m-n*c-s*u-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=this.dot(t);c<0&&(n=-n,s=-s,r=-r,o=-o,c=-c);let u=1-e;if(c<.9995){let h=Math.acos(c),m=Math.sin(h);u=Math.sin(u*h)/m,e=Math.sin(e*h)/m,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Q=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,c=t.z,u=t.w,h=2*(o*s-c*n),m=2*(c*e-r*s),v=2*(r*n-o*e);return this.x=e+u*h+o*v-c*m,this.y=n+u*m+c*h-r*v,this.z=s+u*v+r*m-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,c=e.y,u=e.z;return this.x=s*u-r*c,this.y=r*o-n*u,this.z=n*c-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oc.copy(this).projectOnVector(t),this.sub(Oc)}reflect(t){return this.sub(Oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new Q,Uu=new xi,ce=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,c,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,u,h)}set(t,e,n,s,r,o,c,u,h){let m=this.elements;return m[0]=t,m[1]=s,m[2]=c,m[3]=e,m[4]=r,m[5]=u,m[6]=n,m[7]=o,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],m=n[4],v=n[7],f=n[2],M=n[5],S=n[8],R=s[0],y=s[3],p=s[6],N=s[1],k=s[4],C=s[7],P=s[2],L=s[5],O=s[8];return r[0]=o*R+c*N+u*P,r[3]=o*y+c*k+u*L,r[6]=o*p+c*C+u*O,r[1]=h*R+m*N+v*P,r[4]=h*y+m*k+v*L,r[7]=h*p+m*C+v*O,r[2]=f*R+M*N+S*P,r[5]=f*y+M*k+S*L,r[8]=f*p+M*C+S*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],m=t[8];return e*o*m-e*c*h-n*r*m+n*c*u+s*r*h-s*o*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],m=t[8],v=m*o-c*h,f=c*u-m*r,M=h*r-o*u,S=e*v+n*f+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/S;return t[0]=v*R,t[1]=(s*h-m*n)*R,t[2]=(c*n-s*o)*R,t[3]=f*R,t[4]=(m*e-s*u)*R,t[5]=(s*r-c*e)*R,t[6]=M*R,t[7]=(n*u-h*e)*R,t[8]=(o*e-n*r)*R,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,c){let u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*o+h*c)+o+t,-s*h,s*u,-s*(-h*o+u*c)+c+e,0,0,1),this}scale(t,e){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bc.makeScale(t,e)),this}rotate(t){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bc.makeRotation(-t)),this}translate(t,e){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bc=new ce,Fu=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mp(){let i={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ze&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ze&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[aa]:{primaries:t,whitePoint:n,transfer:oa,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:n,transfer:ze,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}var Ae=mp();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var js,Wo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{js===void 0&&(js=la("canvas")),js.width=t.width,js.height=t.height;let s=js.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=js}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=la("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gp=0,gr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Ba(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(zc(s[o].image)):r.push(zc(s[o]))}else r=zc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function zc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}var _p=0,kc=new Q,In=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=fn,o=ls,c=Zn,u=Dn,h=i.DEFAULT_ANISOTROPY,m=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Ba(),this.name="",this.source=new gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ko:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ko:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Th;In.DEFAULT_ANISOTROPY=1;var Ye=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,u=t.elements,h=u[0],m=u[4],v=u[8],f=u[1],M=u[5],S=u[9],R=u[2],y=u[6],p=u[10];if(Math.abs(m-f)<.01&&Math.abs(v-R)<.01&&Math.abs(S-y)<.01){if(Math.abs(m+f)<.1&&Math.abs(v+R)<.1&&Math.abs(S+y)<.1&&Math.abs(h+M+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let k=(h+1)/2,C=(M+1)/2,P=(p+1)/2,L=(m+f)/4,O=(v+R)/4,T=(S+y)/4;return k>C&&k>P?k<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(k),s=L/n,r=O/n):C>P?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=L/s,r=T/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=O/r,s=T/r),this.set(n,s,r,e),this}let N=Math.sqrt((y-S)*(y-S)+(v-R)*(v-R)+(f-m)*(f-m));return Math.abs(N)<.001&&(N=1),this.x=(y-S)/N,this.y=(v-R)/N,this.z=(f-m)/N,this.w=Math.acos((h+M+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this.w=Re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this.w=Re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xo=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new In(s),o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Xo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ca=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qo=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var He=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,c,u,h,m,v,f,M,S,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,u,h,m,v,f,M,S,R,y)}set(t,e,n,s,r,o,c,u,h,m,v,f,M,S,R,y){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=c,p[13]=u,p[2]=h,p[6]=m,p[10]=v,p[14]=f,p[3]=M,p[7]=S,p[11]=R,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Qs.setFromMatrixColumn(t,0).length(),r=1/Qs.setFromMatrixColumn(t,1).length(),o=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s),m=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let f=o*m,M=o*v,S=c*m,R=c*v;e[0]=u*m,e[4]=-u*v,e[8]=h,e[1]=M+S*h,e[5]=f-R*h,e[9]=-c*u,e[2]=R-f*h,e[6]=S+M*h,e[10]=o*u}else if(t.order==="YXZ"){let f=u*m,M=u*v,S=h*m,R=h*v;e[0]=f+R*c,e[4]=S*c-M,e[8]=o*h,e[1]=o*v,e[5]=o*m,e[9]=-c,e[2]=M*c-S,e[6]=R+f*c,e[10]=o*u}else if(t.order==="ZXY"){let f=u*m,M=u*v,S=h*m,R=h*v;e[0]=f-R*c,e[4]=-o*v,e[8]=S+M*c,e[1]=M+S*c,e[5]=o*m,e[9]=R-f*c,e[2]=-o*h,e[6]=c,e[10]=o*u}else if(t.order==="ZYX"){let f=o*m,M=o*v,S=c*m,R=c*v;e[0]=u*m,e[4]=S*h-M,e[8]=f*h+R,e[1]=u*v,e[5]=R*h+f,e[9]=M*h-S,e[2]=-h,e[6]=c*u,e[10]=o*u}else if(t.order==="YZX"){let f=o*u,M=o*h,S=c*u,R=c*h;e[0]=u*m,e[4]=R-f*v,e[8]=S*v+M,e[1]=v,e[5]=o*m,e[9]=-c*m,e[2]=-h*m,e[6]=M*v+S,e[10]=f-R*v}else if(t.order==="XZY"){let f=o*u,M=o*h,S=c*u,R=c*h;e[0]=u*m,e[4]=-v,e[8]=h*m,e[1]=f*v+R,e[5]=o*m,e[9]=M*v-S,e[2]=S*v-M,e[6]=c*m,e[10]=R*v+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xp,t,vp)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Yi.crossVectors(n,Un),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Yi.crossVectors(n,Un)),Yi.normalize(),ho.crossVectors(Un,Yi),s[0]=Yi.x,s[4]=ho.x,s[8]=Un.x,s[1]=Yi.y,s[5]=ho.y,s[9]=Un.y,s[2]=Yi.z,s[6]=ho.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],m=n[1],v=n[5],f=n[9],M=n[13],S=n[2],R=n[6],y=n[10],p=n[14],N=n[3],k=n[7],C=n[11],P=n[15],L=s[0],O=s[4],T=s[8],D=s[12],H=s[1],X=s[5],K=s[9],it=s[13],z=s[2],j=s[6],dt=s[10],rt=s[14],gt=s[3],tt=s[7],ht=s[11],ut=s[15];return r[0]=o*L+c*H+u*z+h*gt,r[4]=o*O+c*X+u*j+h*tt,r[8]=o*T+c*K+u*dt+h*ht,r[12]=o*D+c*it+u*rt+h*ut,r[1]=m*L+v*H+f*z+M*gt,r[5]=m*O+v*X+f*j+M*tt,r[9]=m*T+v*K+f*dt+M*ht,r[13]=m*D+v*it+f*rt+M*ut,r[2]=S*L+R*H+y*z+p*gt,r[6]=S*O+R*X+y*j+p*tt,r[10]=S*T+R*K+y*dt+p*ht,r[14]=S*D+R*it+y*rt+p*ut,r[3]=N*L+k*H+C*z+P*gt,r[7]=N*O+k*X+C*j+P*tt,r[11]=N*T+k*K+C*dt+P*ht,r[15]=N*D+k*it+C*rt+P*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],c=t[5],u=t[9],h=t[13],m=t[2],v=t[6],f=t[10],M=t[14],S=t[3],R=t[7],y=t[11],p=t[15],N=u*M-h*f,k=c*M-h*v,C=c*f-u*v,P=o*M-h*m,L=o*f-u*m,O=o*v-c*m;return e*(R*N-y*k+p*C)-n*(S*N-y*P+p*L)+s*(S*k-R*P+p*O)-r*(S*C-R*L+y*O)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],c=t[9],u=t[2],h=t[6],m=t[10];return e*(o*m-c*h)-n*(r*m-c*u)+s*(r*h-o*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],m=t[8],v=t[9],f=t[10],M=t[11],S=t[12],R=t[13],y=t[14],p=t[15],N=e*c-n*o,k=e*u-s*o,C=e*h-r*o,P=n*u-s*c,L=n*h-r*c,O=s*h-r*u,T=m*R-v*S,D=m*y-f*S,H=m*p-M*S,X=v*y-f*R,K=v*p-M*R,it=f*p-M*y,z=N*it-k*K+C*X+P*H-L*D+O*T;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/z;return t[0]=(c*it-u*K+h*X)*j,t[1]=(s*K-n*it-r*X)*j,t[2]=(R*O-y*L+p*P)*j,t[3]=(f*L-v*O-M*P)*j,t[4]=(u*H-o*it-h*D)*j,t[5]=(e*it-s*H+r*D)*j,t[6]=(y*C-S*O-p*k)*j,t[7]=(m*O-f*C+M*k)*j,t[8]=(o*K-c*H+h*T)*j,t[9]=(n*H-e*K-r*T)*j,t[10]=(S*L-R*C+p*N)*j,t[11]=(v*C-m*L-M*N)*j,t[12]=(c*D-o*X-u*T)*j,t[13]=(e*X-n*D+s*T)*j,t[14]=(R*k-S*P-y*N)*j,t[15]=(m*P-v*k+f*N)*j,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,c=t.y,u=t.z,h=r*o,m=r*c;return this.set(h*o+n,h*c-s*u,h*u+s*c,0,h*c+s*u,m*c+n,m*u-s*o,0,h*u-s*c,m*u+s*o,r*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,c=e._z,u=e._w,h=r+r,m=o+o,v=c+c,f=r*h,M=r*m,S=r*v,R=o*m,y=o*v,p=c*v,N=u*h,k=u*m,C=u*v,P=n.x,L=n.y,O=n.z;return s[0]=(1-(R+p))*P,s[1]=(M+C)*P,s[2]=(S-k)*P,s[3]=0,s[4]=(M-C)*L,s[5]=(1-(f+p))*L,s[6]=(y+N)*L,s[7]=0,s[8]=(S+k)*O,s[9]=(y-N)*O,s[10]=(1-(f+R))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Qs.set(s[0],s[1],s[2]).length(),c=Qs.set(s[4],s[5],s[6]).length(),u=Qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qn.copy(this);let h=1/o,m=1/c,v=1/u;return Qn.elements[0]*=h,Qn.elements[1]*=h,Qn.elements[2]*=h,Qn.elements[4]*=m,Qn.elements[5]*=m,Qn.elements[6]*=m,Qn.elements[8]*=v,Qn.elements[9]*=v,Qn.elements[10]*=v,e.setFromRotationMatrix(Qn),n.x=o,n.y=c,n.z=u,this}makePerspective(t,e,n,s,r,o,c=ii,u=!1){let h=this.elements,m=2*r/(e-t),v=2*r/(n-s),f=(e+t)/(e-t),M=(n+s)/(n-s),S,R;if(u)S=r/(o-r),R=o*r/(o-r);else if(c===ii)S=-(o+r)/(o-r),R=-2*o*r/(o-r);else if(c===pr)S=-o/(o-r),R=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,c=ii,u=!1){let h=this.elements,m=2/(e-t),v=2/(n-s),f=-(e+t)/(e-t),M=-(n+s)/(n-s),S,R;if(u)S=1/(o-r),R=o/(o-r);else if(c===ii)S=-2/(o-r),R=-(o+r)/(o-r);else if(c===pr)S=-1/(o-r),R=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=S,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qs=new Q,Qn=new He,xp=new Q(0,0,0),vp=new Q(1,1,1),Yi=new Q,ho=new Q,Un=new Q,Bu=new He,zu=new xi,Qi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],c=s[8],u=s[1],h=s[5],m=s[9],v=s[2],f=s[6],M=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(f,M),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-m,M),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zu.setFromEuler(this),this.setFromQuaternion(zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";var ha=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yp=0,ku=new Q,tr=new xi,Li=new He,uo=new Q,Qr=new Q,Mp=new Q,Sp=new xi,Vu=new Q(1,0,0),Gu=new Q(0,1,0),Hu=new Q(0,0,1),Wu={type:"added"},bp={type:"removed"},er={type:"childadded",child:null},Vc={type:"childremoved",child:null},Mn=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Q,e=new Qi,n=new xi,s=new Q(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new ce}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(Vu,t)}rotateY(t){return this.rotateOnAxis(Gu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return ku.copy(t).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vu,t)}translateY(t){return this.translateOnAxis(Gu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Qr,uo,this.up):Li.lookAt(uo,Qr,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Li),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wu),er.child=t,this.dispatchEvent(er),er.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bp),Vc.child=t,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wu),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,Mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let u=c.shapes;if(Array.isArray(u))for(let h=0,m=u.length;h<m;h++){let v=u[h];r(t.shapes,v)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(r(t.materials,this.material[u]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let u=this.animations[c];s.animations.push(r(t.animations,u))}}if(e){let c=o(t.geometries),u=o(t.materials),h=o(t.textures),m=o(t.images),v=o(t.shapes),f=o(t.skeletons),M=o(t.animations),S=o(t.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),v.length>0&&(n.shapes=v),f.length>0&&(n.skeletons=f),M.length>0&&(n.animations=M),S.length>0&&(n.nodes=S)}return n.object=s,n;function o(c){let u=[];for(let h in c){let m=c[h];delete m.metadata,u.push(m)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new Q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Es=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tp={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,c=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let R of t.hand.values()){let y=e.getJointPose(R,n),p=this._getHandJoint(h,R);y!==null&&(p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=y.radius),p.visible=y!==null}let m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],f=m.position.distanceTo(v.position),M=.02,S=.005;h.inputState.pinching&&f>M+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=M-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return c!==null&&(c.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Es;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Gc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var de=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ae.workingColorSpace){if(t=pp(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Gc(o,r,t+1/3),this.g=Gc(o,r,t),this.b=Gc(o,r,t-1/3)}return Ae.colorSpaceToWorking(this,s),this}setStyle(t,e=En){function n(r){r!==void 0&&parseFloat(r)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){let n=kd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return Ae.workingToColorSpace(vn.copy(this),t),Math.round(Re(vn.r*255,0,255))*65536+Math.round(Re(vn.g*255,0,255))*256+Math.round(Re(vn.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.workingToColorSpace(vn.copy(this),e);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),c=Math.min(n,s,r),u,h,m=(c+o)/2;if(c===o)u=0,h=0;else{let v=o-c;switch(h=m<=.5?v/(o+c):v/(2-o-c),o){case n:u=(s-r)/v+(s<r?6:0);break;case s:u=(r-n)/v+2;break;case r:u=(n-s)/v+4;break}u/=6}return t.h=u,t.s=h,t.l=m,t}getRGB(t,e=Ae.workingColorSpace){return Ae.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=En){Ae.workingToColorSpace(vn.copy(this),t);let e=vn.r,n=vn.g,s=vn.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(fo);let n=Fc(Ji.h,fo.h,e),s=Fc(Ji.s,fo.s,e),r=Fc(Ji.l,fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new de;de.NAMES=kd;var ua=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},da=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ti=new Q,Di=new Q,Hc=new Q,Ni=new Q,nr=new Q,ir=new Q,Xu=new Q,Wc=new Q,Xc=new Q,qc=new Q,Yc=new Ye,Jc=new Ye,Zc=new Ye,ji=class i{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ti.subVectors(t,e),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ti.subVectors(s,e),Di.subVectors(n,e),Hc.subVectors(t,e);let o=ti.dot(ti),c=ti.dot(Di),u=ti.dot(Hc),h=Di.dot(Di),m=Di.dot(Hc),v=o*h-c*c;if(v===0)return r.set(0,0,0),null;let f=1/v,M=(h*u-c*m)*f,S=(o*m-c*u)*f;return r.set(1-M-S,S,M)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,s,r,o,c,u){return this.getBarycoord(t,e,n,s,Ni)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Ni.x),u.addScaledVector(o,Ni.y),u.addScaledVector(c,Ni.z),u)}static getInterpolatedAttribute(t,e,n,s,r,o){return Yc.setScalar(0),Jc.setScalar(0),Zc.setScalar(0),Yc.fromBufferAttribute(t,e),Jc.fromBufferAttribute(t,n),Zc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Yc,r.x),o.addScaledVector(Jc,r.y),o.addScaledVector(Zc,r.z),o}static isFrontFacing(t,e,n,s){return ti.subVectors(n,e),Di.subVectors(t,e),ti.cross(Di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ti.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,c;nr.subVectors(s,n),ir.subVectors(r,n),Wc.subVectors(t,n);let u=nr.dot(Wc),h=ir.dot(Wc);if(u<=0&&h<=0)return e.copy(n);Xc.subVectors(t,s);let m=nr.dot(Xc),v=ir.dot(Xc);if(m>=0&&v<=m)return e.copy(s);let f=u*v-m*h;if(f<=0&&u>=0&&m<=0)return o=u/(u-m),e.copy(n).addScaledVector(nr,o);qc.subVectors(t,r);let M=nr.dot(qc),S=ir.dot(qc);if(S>=0&&M<=S)return e.copy(r);let R=M*h-u*S;if(R<=0&&h>=0&&S<=0)return c=h/(h-S),e.copy(n).addScaledVector(ir,c);let y=m*S-M*v;if(y<=0&&v-m>=0&&M-S>=0)return Xu.subVectors(r,s),c=(v-m)/(v-m+(M-S)),e.copy(s).addScaledVector(Xu,c);let p=1/(y+R+f);return o=R*p,c=f*p,e.copy(n).addScaledVector(nr,o).addScaledVector(ir,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vi=class{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)t.isMesh===!0?t.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ta),mo.subVectors(this.max,ta),sr.subVectors(t.a,ta),rr.subVectors(t.b,ta),ar.subVectors(t.c,ta),Zi.subVectors(rr,sr),Ki.subVectors(ar,rr),bs.subVectors(sr,ar);let e=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-bs.z,bs.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,bs.z,0,-bs.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-bs.y,bs.x,0];return!Kc(e,sr,rr,ar,mo)||(e=[1,0,0,0,1,0,0,0,1],!Kc(e,sr,rr,ar,mo))?!1:(go.crossVectors(Zi,Ki),e=[go.x,go.y,go.z],Kc(e,sr,rr,ar,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ui=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ei=new Q,po=new vi,sr=new Q,rr=new Q,ar=new Q,Zi=new Q,Ki=new Q,bs=new Q,ta=new Q,mo=new Q,go=new Q,Ts=new Q;function Kc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ts.fromArray(i,r);let c=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),u=t.dot(Ts),h=e.dot(Ts),m=n.dot(Ts);if(Math.max(-Math.max(u,h,m),Math.min(u,h,m))>c)return!1}return!0}var tn=new Q,_o=new Pe,wp=0,On=class extends _i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ud,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),s=Pn(s,this.array),r=Pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var fa=class extends On{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pa=class extends On{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var rn=class extends On{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ap=new vi,ea=new Q,$c=new Q,ts=class{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ap.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ea.subVectors(t,this.center);let e=ea.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ea,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ea.copy(t.center).add($c)),this.expandByPoint(ea.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ep=0,Yn=new He,jc=new Mn,or=new Q,Fn=new vi,na=new vi,un=new Q,Bn=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dp(t)?pa:fa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return jc.lookAt(t),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let c=e[r];na.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(Fn.min,na.min),Fn.expandByPoint(un),un.addVectors(Fn.max,na.max),Fn.expandByPoint(un)):(Fn.expandByPoint(na.min),Fn.expandByPoint(na.max))}Fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let c=e[r],u=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)un.fromBufferAttribute(c,h),u&&(or.fromBufferAttribute(t,h),un.add(or)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new On(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let c=[],u=[];for(let T=0;T<n.count;T++)c[T]=new Q,u[T]=new Q;let h=new Q,m=new Q,v=new Q,f=new Pe,M=new Pe,S=new Pe,R=new Q,y=new Q;function p(T,D,H){h.fromBufferAttribute(n,T),m.fromBufferAttribute(n,D),v.fromBufferAttribute(n,H),f.fromBufferAttribute(r,T),M.fromBufferAttribute(r,D),S.fromBufferAttribute(r,H),m.sub(h),v.sub(h),M.sub(f),S.sub(f);let X=1/(M.x*S.y-S.x*M.y);isFinite(X)&&(R.copy(m).multiplyScalar(S.y).addScaledVector(v,-M.y).multiplyScalar(X),y.copy(v).multiplyScalar(M.x).addScaledVector(m,-S.x).multiplyScalar(X),c[T].add(R),c[D].add(R),c[H].add(R),u[T].add(y),u[D].add(y),u[H].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let T=0,D=N.length;T<D;++T){let H=N[T],X=H.start,K=H.count;for(let it=X,z=X+K;it<z;it+=3)p(t.getX(it+0),t.getX(it+1),t.getX(it+2))}let k=new Q,C=new Q,P=new Q,L=new Q;function O(T){P.fromBufferAttribute(s,T),L.copy(P);let D=c[T];k.copy(D),k.sub(P.multiplyScalar(P.dot(D))).normalize(),C.crossVectors(L,D);let X=C.dot(u[T])<0?-1:1;o.setXYZW(T,k.x,k.y,k.z,X)}for(let T=0,D=N.length;T<D;++T){let H=N[T],X=H.start,K=H.count;for(let it=X,z=X+K;it<z;it+=3)O(t.getX(it+0)),O(t.getX(it+1)),O(t.getX(it+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,M=n.count;f<M;f++)n.setXYZ(f,0,0,0);let s=new Q,r=new Q,o=new Q,c=new Q,u=new Q,h=new Q,m=new Q,v=new Q;if(t)for(let f=0,M=t.count;f<M;f+=3){let S=t.getX(f+0),R=t.getX(f+1),y=t.getX(f+2);s.fromBufferAttribute(e,S),r.fromBufferAttribute(e,R),o.fromBufferAttribute(e,y),m.subVectors(o,r),v.subVectors(s,r),m.cross(v),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),c.add(m),u.add(m),h.add(m),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(R,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let f=0,M=e.count;f<M;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),m.subVectors(o,r),v.subVectors(s,r),m.cross(v),n.setXYZ(f+0,m.x,m.y,m.z),n.setXYZ(f+1,m.x,m.y,m.z),n.setXYZ(f+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(c,u){let h=c.array,m=c.itemSize,v=c.normalized,f=new h.constructor(u.length*m),M=0,S=0;for(let R=0,y=u.length;R<y;R++){c.isInterleavedBufferAttribute?M=u[R]*c.data.stride+c.offset:M=u[R]*m;for(let p=0;p<m;p++)f[S++]=h[M++]}return new On(f,m,v)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let u=s[c],h=t(u,n);e.setAttribute(c,h)}let r=this.morphAttributes;for(let c in r){let u=[],h=r[c];for(let m=0,v=h.length;m<v;m++){let f=h[m],M=t(f,n);u.push(M)}e.morphAttributes[c]=u}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let h=n[u];t.data.attributes[u]=h.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],m=[];for(let v=0,f=h.length;v<f;v++){let M=h[v];m.push(M.toJSON(t.data))}m.length>0&&(s[u]=m,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let m=s[h];this.setAttribute(h,m.clone(e))}let r=t.morphAttributes;for(let h in r){let m=[],v=r[h];for(let f=0,M=v.length;f<M;f++)m.push(v[f].clone(e));this.morphAttributes[h]=m}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,m=o.length;h<m;h++){let v=o[h];this.addGroup(v.start,v.count,v.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Qc=new Q,Cp=new Q,Rp=new ce,ni=class{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qc.subVectors(n,e).cross(Cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Qc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rp.getNormalMatrix(t),s=this.coplanarPoint(Qc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pp=0,es=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=Sr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let u=r[c];delete u.metadata,o.push(u)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fi=new Q,th=new Q,xo=new Q,vo=new Q,Yo=class{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){th.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),vo.copy(this.origin).sub(th);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xo),c=vo.dot(this.direction),u=-vo.dot(xo),h=vo.lengthSq(),m=Math.abs(1-o*o),v,f,M,S;if(m>0)if(v=o*u-c,f=o*c-u,S=r*m,v>=0)if(f>=-S)if(f<=S){let R=1/m;v*=R,f*=R,M=v*(v+o*f+2*c)+f*(o*v+f+2*u)+h}else f=r,v=Math.max(0,-(o*f+c)),M=-v*v+f*(f+2*u)+h;else f=-r,v=Math.max(0,-(o*f+c)),M=-v*v+f*(f+2*u)+h;else f<=-S?(v=Math.max(0,-(-o*r+c)),f=v>0?-r:Math.min(Math.max(-r,-u),r),M=-v*v+f*(f+2*u)+h):f<=S?(v=0,f=Math.min(Math.max(-r,-u),r),M=f*(f+2*u)+h):(v=Math.max(0,-(o*r+c)),f=v>0?r:Math.min(Math.max(-r,-u),r),M=-v*v+f*(f+2*u)+h);else f=o>0?-r:r,v=Math.max(0,-(o*f+c)),M=-v*v+f*(f+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(th).addScaledVector(xo,f),M}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,c,u,h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),m>=0?(r=(t.min.y-f.y)*m,o=(t.max.y-f.y)*m):(r=(t.max.y-f.y)*m,o=(t.min.y-f.y)*m),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),v>=0?(c=(t.min.z-f.z)*v,u=(t.max.z-f.z)*v):(c=(t.max.z-f.z)*v,u=(t.min.z-f.z)*v),n>u||c>s)||((c>n||n!==n)&&(n=c),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,c=this.direction,u=c.x,h=c.y,m=c.z,v=t.x-o.x,f=t.y-o.y,M=t.z-o.z,S=e.x-o.x,R=e.y-o.y,y=e.z-o.z,p=n.x-o.x,N=n.y-o.y,k=n.z-o.z,C=Math.abs(u),P=Math.abs(h),L=Math.abs(m),O,T,D,H,X,K,it,z,j,dt,rt,gt;if(C>=P&&C>=L?(D=u,K=v,j=S,gt=p,u>=0?(O=h,T=m,H=f,X=M,it=R,z=y,dt=N,rt=k):(O=m,T=h,H=M,X=f,it=y,z=R,dt=k,rt=N)):P>=L?(D=h,K=f,j=R,gt=N,h>=0?(O=m,T=u,H=M,X=v,it=y,z=S,dt=k,rt=p):(O=u,T=m,H=v,X=M,it=S,z=y,dt=p,rt=k)):(D=m,K=M,j=y,gt=k,m>=0?(O=u,T=h,H=v,X=f,it=S,z=R,dt=p,rt=N):(O=h,T=u,H=f,X=v,it=R,z=S,dt=N,rt=p)),D===0)return null;let tt=O/D,ht=T/D,ut=1/D,kt=H-tt*K,Yt=X-ht*K,Se=it-tt*j,ve=z-ht*j,be=dt-tt*gt,ct=rt-ht*gt,_t=be*ve-ct*Se,Vt=kt*ct-Yt*be,oe=Se*Yt-ve*kt;if(s){if(_t<0||Vt<0||oe<0)return null}else if((_t<0||Vt<0||oe<0)&&(_t>0||Vt>0||oe>0))return null;let Xt=_t+Vt+oe;if(Xt===0)return null;let fe=ut*(_t*K+Vt*j+oe*gt);return(Xt>0?fe<0:fe>0)?null:this.at(fe/Xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ma=class extends es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qu=new He,ws=new Yo,yo=new ts,Yu=new Q,Mo=new Q,So=new Q,bo=new Q,eh=new Q,To=new Q,Ju=new Q,wo=new Q,Sn=class extends Mn{constructor(t=new Bn,e=new ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){To.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let m=c[u],v=r[u];m!==0&&(eh.fromBufferAttribute(v,t),o?To.addScaledVector(eh,m):To.addScaledVector(eh.sub(e),m))}e.add(To)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),ws.copy(t.ray).recast(t.near),!(yo.containsPoint(ws.origin)===!1&&(ws.intersectSphere(yo,Yu)===null||ws.origin.distanceToSquared(Yu)>(t.far-t.near)**2))&&(qu.copy(r).invert(),ws.copy(t.ray).applyMatrix4(qu),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,c=r.index,u=r.attributes.position,h=r.attributes.uv,m=r.attributes.uv1,v=r.attributes.normal,f=r.groups,M=r.drawRange;if(c!==null)if(Array.isArray(o))for(let S=0,R=f.length;S<R;S++){let y=f[S],p=o[y.materialIndex],N=Math.max(y.start,M.start),k=Math.min(c.count,Math.min(y.start+y.count,M.start+M.count));for(let C=N,P=k;C<P;C+=3){let L=c.getX(C),O=c.getX(C+1),T=c.getX(C+2);s=Ao(this,p,t,n,h,m,v,L,O,T),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let S=Math.max(0,M.start),R=Math.min(c.count,M.start+M.count);for(let y=S,p=R;y<p;y+=3){let N=c.getX(y),k=c.getX(y+1),C=c.getX(y+2);s=Ao(this,o,t,n,h,m,v,N,k,C),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let S=0,R=f.length;S<R;S++){let y=f[S],p=o[y.materialIndex],N=Math.max(y.start,M.start),k=Math.min(u.count,Math.min(y.start+y.count,M.start+M.count));for(let C=N,P=k;C<P;C+=3){let L=C,O=C+1,T=C+2;s=Ao(this,p,t,n,h,m,v,L,O,T),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let S=Math.max(0,M.start),R=Math.min(u.count,M.start+M.count);for(let y=S,p=R;y<p;y+=3){let N=y,k=y+1,C=y+2;s=Ao(this,o,t,n,h,m,v,N,k,C),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function Ip(i,t,e,n,s,r,o,c){let u;if(t.side===pn?u=n.intersectTriangle(o,r,s,!0,c):u=n.intersectTriangle(s,r,o,t.side===as,c),u===null)return null;wo.copy(c),wo.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(wo);return h<e.near||h>e.far?null:{distance:h,point:wo.clone(),object:i}}function Ao(i,t,e,n,s,r,o,c,u,h){i.getVertexPosition(c,Mo),i.getVertexPosition(u,So),i.getVertexPosition(h,bo);let m=Ip(i,t,e,n,Mo,So,bo,Ju);if(m){let v=new Q;ji.getBarycoord(Ju,Mo,So,bo,v),s&&(m.uv=ji.getInterpolatedAttribute(s,c,u,h,v,new Pe)),r&&(m.uv1=ji.getInterpolatedAttribute(r,c,u,h,v,new Pe)),o&&(m.normal=ji.getInterpolatedAttribute(o,c,u,h,v,new Q),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));let f={a:c,b:u,c:h,normal:new Q,materialIndex:0};ji.getNormal(Mo,So,bo,f.normal),m.face=f,m.barycoord=v}return m}var Rs=class extends In{constructor(t=null,e=1,n=1,s,r,o,c,u,h=$e,m=$e,v,f){super(null,o,c,u,h,m,s,r,v,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ga=class extends On{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},lr=new He,Zu=new He,Eo=[],Ku=new vi,Lp=new He,ia=new Sn,sa=new ts,_a=class extends Sn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lr),Ku.copy(t.boundingBox).applyMatrix4(lr),this.boundingBox.union(Ku)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lr),sa.copy(t.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(sa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let c=0;c<n.length;c++)n[c]=s[o+c]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),t.ray.intersectsSphere(sa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lr),Zu.multiplyMatrices(n,lr),ia.matrixWorld=Zu,ia.raycast(t,Eo);for(let o=0,c=Eo.length;o<c;o++){let u=Eo[o];u.instanceId=r,u.object=this,e.push(u)}Eo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rs(new Float32Array(s*this.count),s,this.count,wr,Jn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let c=this.geometry.morphTargetsRelative?1:1-o,u=s*t;return r[u]=c,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new ts,Dp=new Pe(.5,.5),Co=new Q,xr=class{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){let s=this.planes,r=t.elements,o=r[0],c=r[1],u=r[2],h=r[3],m=r[4],v=r[5],f=r[6],M=r[7],S=r[8],R=r[9],y=r[10],p=r[11],N=r[12],k=r[13],C=r[14],P=r[15];if(s[0].setComponents(h-o,M-m,p-S,P-N).normalize(),s[1].setComponents(h+o,M+m,p+S,P+N).normalize(),s[2].setComponents(h+c,M+v,p+R,P+k).normalize(),s[3].setComponents(h-c,M-v,p-R,P-k).normalize(),n)s[4].setComponents(u,f,y,C).normalize(),s[5].setComponents(h-u,M-f,p-y,P-C).normalize();else if(s[4].setComponents(h-u,M-f,p-y,P-C).normalize(),e===ii)s[5].setComponents(h+u,M+f,p+y,P+C).normalize();else if(e===pr)s[5].setComponents(u,f,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=Dp.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Co.x=s.normal.x>0?t.max.x:t.min.x,Co.y=s.normal.y>0?t.max.y:t.min.y,Co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xa=class extends In{constructor(t=[],e=os,n,s,r,o,c,u,h,m){super(t,e,n,s,r,o,c,u,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ns=class extends In{constructor(t,e,n=ri,s,r,o,c=$e,u=$e,h,m=gi,v=1){if(m!==gi&&m!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:v};super(f,s,r,o,c,u,m,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Jo=class extends ns{constructor(t,e=ri,n=os,s,r,o=$e,c=$e,u,h=gi){let m={width:t,height:t,depth:1},v=[m,m,m,m,m,m];super(t,t,e,n,s,r,o,c,u,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},va=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vr=class i extends Bn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let u=[],h=[],m=[],v=[],f=0,M=0;S("z","y","x",-1,-1,n,e,t,o,r,0),S("z","y","x",1,-1,n,e,-t,o,r,1),S("x","z","y",1,1,t,n,e,s,o,2),S("x","z","y",1,-1,t,n,-e,s,o,3),S("x","y","z",1,-1,t,e,n,s,r,4),S("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new rn(h,3)),this.setAttribute("normal",new rn(m,3)),this.setAttribute("uv",new rn(v,2));function S(R,y,p,N,k,C,P,L,O,T,D){let H=C/O,X=P/T,K=C/2,it=P/2,z=L/2,j=O+1,dt=T+1,rt=0,gt=0,tt=new Q;for(let ht=0;ht<dt;ht++){let ut=ht*X-it;for(let kt=0;kt<j;kt++){let Yt=kt*H-K;tt[R]=Yt*N,tt[y]=ut*k,tt[p]=z,h.push(tt.x,tt.y,tt.z),tt[R]=0,tt[y]=0,tt[p]=L>0?1:-1,m.push(tt.x,tt.y,tt.z),v.push(kt/O),v.push(1-ht/T),rt+=1}}for(let ht=0;ht<T;ht++)for(let ut=0;ut<O;ut++){let kt=f+ut+j*ht,Yt=f+ut+j*(ht+1),Se=f+(ut+1)+j*(ht+1),ve=f+(ut+1)+j*ht;u.push(kt,Yt,ve),u.push(Yt,Se,ve),gt+=6}c.addGroup(M,gt,D),M+=gt,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ya=class i extends Bn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,c=Math.floor(n),u=Math.floor(s),h=c+1,m=u+1,v=t/c,f=e/u,M=[],S=[],R=[],y=[];for(let p=0;p<m;p++){let N=p*f-o;for(let k=0;k<h;k++){let C=k*v-r;S.push(C,-N,0),R.push(0,0,1),y.push(k/c),y.push(1-p/u)}}for(let p=0;p<u;p++)for(let N=0;N<c;N++){let k=N+h*p,C=N+h*(p+1),P=N+1+h*(p+1),L=N+1+h*p;M.push(k,C,L),M.push(C,P,L)}this.setIndex(M),this.setAttribute("position",new rn(S,3)),this.setAttribute("normal",new rn(R,3)),this.setAttribute("uv",new rn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ma=class i extends Bn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let u=Math.min(o+c,Math.PI),h=0,m=[],v=new Q,f=new Q,M=[],S=[],R=[],y=[];for(let p=0;p<=n;p++){let N=[],k=p/n,C=o+k*c,P=t*Math.cos(C),L=Math.sqrt(t*t-P*P),O=0;p===0&&o===0?O=.5/e:p===n&&u===Math.PI&&(O=-.5/e);for(let T=0;T<=e;T++){let D=T/e,H=s+D*r;v.x=-L*Math.cos(H),v.y=P,v.z=L*Math.sin(H),S.push(v.x,v.y,v.z),f.copy(v).normalize(),R.push(f.x,f.y,f.z),y.push(D+O,1-k),N.push(h++)}m.push(N)}for(let p=0;p<n;p++)for(let N=0;N<e;N++){let k=m[p][N+1],C=m[p][N],P=m[p+1][N],L=m[p+1][N+1];(p!==0||o>0)&&M.push(k,C,L),(p!==n-1||u<Math.PI)&&M.push(C,P,L)}this.setIndex(M),this.setAttribute("position",new rn(S,3)),this.setAttribute("normal",new rn(R,3)),this.setAttribute("uv",new rn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if($u(s))s.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if($u(s[0])){let r=[];for(let o=0,c=s.length;o<c;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function bn(i){let t={};for(let e=0;e<i.length;e++){let n=Ls(i[e]);for(let s in n)t[s]=n[s]}return t}function $u(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Np(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}var Vd={clone:Ls,merge:bn},Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=Np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Zo=class extends Cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Sa=class extends es{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ko=class extends es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$o=class extends es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function cr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let c=e[1];t<c&&(n=2,r=c);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let c=n+o>>>1;t<e[c]?o=c:n=c+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jo=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,c=s[r],u=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case ah:r=t,c=2*e-n;break;case oh:r=s.length-2,c=e+s[r]-s[r+1];break;default:r=t,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case ah:o=t,u=2*n-e;break;case oh:o=1,u=n+s[1]-s[0];break;default:o=t-1,u=e}let h=(n-e)*.5,m=this.valueSize;this._weightPrev=h/(e-c),this._weightNext=h/(u-n),this._offsetPrev=r*m,this._offsetNext=o*m}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,m=this._offsetPrev,v=this._offsetNext,f=this._weightPrev,M=this._weightNext,S=(n-e)/(s-e),R=S*S,y=R*S,p=-f*y+2*f*R-f*S,N=(1+f)*y+(-1.5-2*f)*R+(-.5+f)*S+1,k=(-1-M)*y+(1.5+M)*R+.5*S,C=M*y-M*R;for(let P=0;P!==c;++P)r[P]=p*o[m+P]+N*o[h+P]+k*o[u+P]+C*o[v+P];return r}},Qo=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,m=(n-e)/(s-e),v=1-m;for(let f=0;f!==c;++f)r[f]=o[h+f]*v+o[u+f]*m;return r}},tl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},el=class extends is{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,m=this.inTangents,v=this.outTangents;if(!m||!v){let S=(n-e)/(s-e),R=1-S;for(let y=0;y!==c;++y)r[y]=o[h+y]*R+o[u+y]*S;return r}let f=c*2,M=t-1;for(let S=0;S!==c;++S){let R=o[h+S],y=o[u+S],p=M*f+S*2,N=v[p],k=v[p+1],C=t*f+S*2,P=m[C],L=m[C+1],O=Bp(n,e,N,P,s);r[S]=Gd(O,R,k,L,y)}return r}};function Gd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Op(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Bp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let c=Gd(r,t,e,n,s)-i;if(Math.abs(c)<1e-10)break;let u=Op(r,t,e,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-c/u))}return r}var zn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cr(e,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cr(t.times,Array),values:cr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),nh(t.settings)&&(n.settings={inTangents:cr(t.settings.inTangents,Array),outTangents:cr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new el(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case Go:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break;case sh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ie("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;nh(this.settings)&&(ju(this.settings.inTangents,t),ju(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(re("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(re("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let c=0;c!==r;c++){let u=n[c];if(typeof u=="number"&&isNaN(u)){re("KeyframeTrack: Time is not a valid number.",this,c,u),t=!1;break}if(o!==null&&o>u){re("KeyframeTrack: Out of order keys.",this,c,u,o),t=!1;break}o=u}if(s!==void 0&&fp(s))for(let c=0,u=s.length;c!==u;++c){let h=s[c];if(isNaN(h)){re("KeyframeTrack: Value is not a valid number.",this,c,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,o=1;for(let c=1;c<r;++c){let u=!1,h=t[c],m=t[c+1];if(h!==m&&(c!==1||h!==t[0]))if(s)u=!0;else{let v=c*n,f=v-n,M=v+n;for(let S=0;S!==n;++S){let R=e[v+S];if(R!==e[f+S]||R!==e[M+S]){u=!0;break}}}if(u){if(c!==o){t[o]=t[c];let v=c*n,f=o*n;for(let M=0;M!==n;++M)e[f+M]=e[v+M]}++o}}if(r>0){t[o]=t[r];for(let c=r*n,u=o*n,h=0;h!==n;++h)e[u+h]=e[c+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,nh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ju(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Go;var ss=class extends zn{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=ra;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends zn{constructor(t,e,n,s){super(t,e,n,s)}};nl.prototype.ValueTypeName="color";var il=class extends zn{constructor(t,e,n,s){super(t,e,n,s)}};il.prototype.ValueTypeName="number";var sl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-e)/(s-e),h=t*c;for(let m=h+c;h!==m;h+=4)xi.slerpFlat(r,0,o,h-c,o,h,u);return r}},ba=class extends zn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends zn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=ra;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends zn{constructor(t,e,n,s){super(t,e,n,s)}};rl.prototype.ValueTypeName="vector";var al=class{constructor(t,e,n){let s=this,r=!1,o=0,c=0,u,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(m){c++,r===!1&&s.onStart!==void 0&&s.onStart(m,o,c),r=!0},this.itemEnd=function(m){o++,s.onProgress!==void 0&&s.onProgress(m,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),u?u(m):m},this.setURLModifier=function(m){return u=m,this},this.addHandler=function(m,v){return h.push(m,v),this},this.removeHandler=function(m){let v=h.indexOf(m);return v!==-1&&h.splice(v,2),this},this.getHandler=function(m){for(let v=0,f=h.length;v<f;v+=2){let M=h[v],S=h[v+1];if(M.global&&(M.lastIndex=0),M.test(m))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hd=new al,ol=class{constructor(t){this.manager=t!==void 0?t:Hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ta=class extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},wa=class extends Ta{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ih=new He,Qu=new Q,td=new Q,ll=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),td.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(td),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ih,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,c=s?s.w/r.y:1,u=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===pr||t.reversedDepth?e.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,.5,.5,0,0,0,1),e.multiply(ih)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ro=new Q,Po=new xi,pi=new Q,Aa=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ro,Po,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ro,Po,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new Q,ed=new Pe,nd=new Pe,yn=class extends Aa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,ed,nd),e.subVectors(nd,ed)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Uc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/u,e-=o.offsetY*n/h,s*=o.width/u,n*=o.height/h}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var yr=class extends Aa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,c=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,c-=m*this.view.offsetY,u=c-m*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lh=class extends ll{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends Ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new lh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var hr=-90,ur=1,cl=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(hr,ur,t,e);s.layers=this.layers,this.add(s);let r=new yn(hr,ur,t,e);r.layers=this.layers,this.add(r);let o=new yn(hr,ur,t,e);o.layers=this.layers,this.add(o);let c=new yn(hr,ur,t,e);c.layers=this.layers,this.add(c);let u=new yn(hr,ur,t,e);u.layers=this.layers,this.add(u);let h=new yn(hr,ur,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,c,u]=e;for(let h of e)this.remove(h);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,u,h,m]=this.children,v=t.getRenderTarget(),f=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;let R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=R,t.setRenderTarget(n,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(v,f,M),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},hl=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Uh="\\[\\]\\.:\\/",zp=new RegExp("["+Uh+"]","g"),Fh="[^"+Uh+"]",kp="[^"+Uh.replace("\\.","")+"]",Vp=/((?:WC+[\/:])*)/.source.replace("WC",Fh),Gp=/(WCOD+)?/.source.replace("WCOD",kp),Hp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),Wp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),Xp=new RegExp("^"+Vp+Gp+Hp+Wp+"$"),qp=["material","materials","bones","map"],ch=class{constructor(t,e,n){let s=n||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zp,"")}static parseTrackName(t){let e=Xp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===e||c.uuid===e)return c;let u=n(c.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===h){h=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;re("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=ch;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hx=new Float32Array(1);var hh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Oh(i,t,e,n){let s=Yp(n);switch(e){case Rh:return i*t;case wr:return i*t/s.components*s.byteLength;case xl:return i*t/s.components*s.byteLength;case hs:return i*t*2/s.components*s.byteLength;case vl:return i*t*2/s.components*s.byteLength;case Ph:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case yl:return i*t*4/s.components*s.byteLength;case La:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:case Tl:return Math.max(i,16)*Math.max(t,8)/4;case Ml:case bl:return Math.max(i,8)*Math.max(t,8)/2;case wl:case Al:case Cl:case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case El:case Fa:case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xl:case ql:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jl:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oa:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yp(i){switch(i){case Dn:case wh:return{byteLength:1,components:1};case br:case Ah:case ai:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case ri:case ml:case Jn:return{byteLength:4,components:1};case Eh:case Ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function df(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zp(i){let t=new WeakMap;function e(c,u){let h=c.array,m=c.usage,v=h.byteLength,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,h,m),c.onUploadCallback();let M;if(h instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=i.SHORT;else if(h instanceof Uint32Array)M=i.UNSIGNED_INT;else if(h instanceof Int32Array)M=i.INT;else if(h instanceof Int8Array)M=i.BYTE;else if(h instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:v}}function n(c,u,h){let m=u.array,v=u.updateRanges;if(i.bindBuffer(h,c),v.length===0)i.bufferSubData(h,0,m);else{v.sort((M,S)=>M.start-S.start);let f=0;for(let M=1;M<v.length;M++){let S=v[f],R=v[M];R.start<=S.start+S.count+1?S.count=Math.max(S.count,R.start+R.count-S.start):(++f,v[f]=R)}v.length=f+1;for(let M=0,S=v.length;M<S;M++){let R=v[M];i.bufferSubData(h,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=t.get(c);u&&(i.deleteBuffer(u.buffer),t.delete(c))}function o(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let m=t.get(c);(!m||m.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let h=t.get(c);if(h===void 0)t.set(c,e(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:s,remove:r,update:o}}var Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
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
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
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
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cm=`#ifdef USE_IRIDESCENCE
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
#endif`,hm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vm=`#define PI 3.141592653589793
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
} // validated`,ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mm=`vec3 transformedNormal = objectNormal;
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
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Om=`#ifdef USE_GRADIENTMAP
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
}`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ym=`PhysicalMaterial material;
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
#endif`,Jm=`uniform sampler2D dfgLUT;
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
}`,Zm=`
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a0=`#if defined( USE_POINTS_UV )
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
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,v0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U0=`float getShadowMask() {
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
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,_g=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,vg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
}`,Sg=`#define TOON
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
}`,bg=`#define TOON
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
}`,Tg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,Cg=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Kp,alphahash_pars_fragment:$p,alphamap_fragment:jp,alphamap_pars_fragment:Qp,alphatest_fragment:tm,alphatest_pars_fragment:em,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:sm,batching_vertex:rm,begin_vertex:am,beginnormal_vertex:om,bsdfs:lm,iridescence_fragment:cm,bumpmap_pars_fragment:hm,clipping_planes_fragment:um,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:_m,color_vertex:xm,common:vm,cube_uv_reflection_fragment:ym,defaultnormal_vertex:Mm,displacementmap_pars_vertex:Sm,displacementmap_vertex:bm,emissivemap_fragment:Tm,emissivemap_pars_fragment:wm,colorspace_fragment:Am,colorspace_pars_fragment:Em,envmap_fragment:Cm,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Pm,envmap_pars_vertex:Im,envmap_physical_pars_fragment:Gm,envmap_vertex:Lm,fog_vertex:Dm,fog_pars_vertex:Nm,fog_fragment:Um,fog_pars_fragment:Fm,gradientmap_pars_fragment:Om,lightmap_pars_fragment:Bm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:km,lights_pars_begin:Vm,lights_toon_fragment:Hm,lights_toon_pars_fragment:Wm,lights_phong_fragment:Xm,lights_phong_pars_fragment:qm,lights_physical_fragment:Ym,lights_physical_pars_fragment:Jm,lights_fragment_begin:Zm,lights_fragment_maps:Km,lights_fragment_end:$m,lightprobes_pars_fragment:jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:a0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:_0,normal_vertex:x0,normalmap_pars_fragment:v0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:b0,opaque_fragment:T0,packing:w0,premultiplied_alpha_fragment:A0,project_vertex:E0,dithering_fragment:C0,dithering_pars_fragment:R0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:D0,shadowmap_vertex:N0,shadowmask_pars_fragment:U0,skinbase_vertex:F0,skinning_pars_vertex:O0,skinning_vertex:B0,skinnormal_vertex:z0,specularmap_fragment:k0,specularmap_pars_fragment:V0,tonemapping_fragment:G0,tonemapping_pars_fragment:H0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:q0,uv_pars_vertex:Y0,uv_vertex:J0,worldpos_vertex:Z0,background_vert:K0,background_frag:$0,backgroundCube_vert:j0,backgroundCube_frag:Q0,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distance_vert:sg,distance_frag:rg,equirect_vert:ag,equirect_frag:og,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:xg,meshphong_frag:vg,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:Sg,meshtoon_frag:bg,points_vert:Tg,points_frag:wg,shadow_vert:Ag,shadow_frag:Eg,sprite_vert:Cg,sprite_frag:Rg},Ot={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},bi={basic:{uniforms:bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:bn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:bn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new de(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:bn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:bn([Ot.points,Ot.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:bn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:bn([Ot.common,Ot.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:bn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:bn([Ot.sprite,Ot.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:bn([Ot.common,Ot.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:bn([Ot.lights,Ot.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};bi.physical={uniforms:bn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var tc={r:0,b:0,g:0},Pg=new He,ff=new ce;ff.set(-1,0,0,0,1,0,0,0,1);function Ig(i,t,e,n,s,r){let o=new de(0),c=s===!0?0:1,u,h,m=null,v=0,f=null;function M(N){let k=N.isScene===!0?N.background:null;if(k&&k.isTexture){let C=N.backgroundBlurriness>0;k=t.get(k,C)}return k}function S(N){let k=!1,C=M(N);C===null?y(o,c):C&&C.isColor&&(y(C,1),k=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||k)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(N,k){let C=M(k);C&&(C.isCubeTexture||C.mapping===Pa)?(h===void 0&&(h=new Sn(new vr(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ls(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(k.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ff),h.material.toneMapped=Ae.getTransfer(C.colorSpace)!==ze,(m!==C||v!==C.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,m=C,v=C.version,f=i.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new Sn(new ya(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ls(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,u.material.toneMapped=Ae.getTransfer(C.colorSpace)!==ze,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||v!==C.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,m=C,v=C.version,f=i.toneMapping),u.layers.enableAll(),N.unshift(u,u.geometry,u.material,0,0,null))}function y(N,k){N.getRGB(tc,Nh(i)),e.buffers.color.setClear(tc.r,tc.g,tc.b,k,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(N,k=1){o.set(N),c=k,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(N){c=N,y(o,c)},render:S,addToRenderList:R,dispose:p}}function Lg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function c(X,K,it,z,j){let dt=!1,rt=v(X,z,it,K);r!==rt&&(r=rt,h(r.object)),dt=M(X,z,it,j),dt&&S(X,z,it,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(dt||o)&&(o=!1,C(X,K,it,z),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function u(){return i.createVertexArray()}function h(X){return i.bindVertexArray(X)}function m(X){return i.deleteVertexArray(X)}function v(X,K,it,z){let j=z.wireframe===!0,dt=n[K.id];dt===void 0&&(dt={},n[K.id]=dt);let rt=X.isInstancedMesh===!0?X.id:0,gt=dt[rt];gt===void 0&&(gt={},dt[rt]=gt);let tt=gt[it.id];tt===void 0&&(tt={},gt[it.id]=tt);let ht=tt[j];return ht===void 0&&(ht=f(u()),tt[j]=ht),ht}function f(X){let K=[],it=[],z=[];for(let j=0;j<e;j++)K[j]=0,it[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:it,attributeDivisors:z,object:X,attributes:{},index:null}}function M(X,K,it,z){let j=r.attributes,dt=K.attributes,rt=0,gt=it.getAttributes();for(let tt in gt)if(gt[tt].location>=0){let ut=j[tt],kt=dt[tt];if(kt===void 0&&(tt==="instanceMatrix"&&X.instanceMatrix&&(kt=X.instanceMatrix),tt==="instanceColor"&&X.instanceColor&&(kt=X.instanceColor)),ut===void 0||ut.attribute!==kt||kt&&ut.data!==kt.data)return!0;rt++}return r.attributesNum!==rt||r.index!==z}function S(X,K,it,z){let j={},dt=K.attributes,rt=0,gt=it.getAttributes();for(let tt in gt)if(gt[tt].location>=0){let ut=dt[tt];ut===void 0&&(tt==="instanceMatrix"&&X.instanceMatrix&&(ut=X.instanceMatrix),tt==="instanceColor"&&X.instanceColor&&(ut=X.instanceColor));let kt={};kt.attribute=ut,ut&&ut.data&&(kt.data=ut.data),j[tt]=kt,rt++}r.attributes=j,r.attributesNum=rt,r.index=z}function R(){let X=r.newAttributes;for(let K=0,it=X.length;K<it;K++)X[K]=0}function y(X){p(X,0)}function p(X,K){let it=r.newAttributes,z=r.enabledAttributes,j=r.attributeDivisors;it[X]=1,z[X]===0&&(i.enableVertexAttribArray(X),z[X]=1),j[X]!==K&&(i.vertexAttribDivisor(X,K),j[X]=K)}function N(){let X=r.newAttributes,K=r.enabledAttributes;for(let it=0,z=K.length;it<z;it++)K[it]!==X[it]&&(i.disableVertexAttribArray(it),K[it]=0)}function k(X,K,it,z,j,dt,rt){rt===!0?i.vertexAttribIPointer(X,K,it,j,dt):i.vertexAttribPointer(X,K,it,z,j,dt)}function C(X,K,it,z){R();let j=z.attributes,dt=it.getAttributes(),rt=K.defaultAttributeValues;for(let gt in dt){let tt=dt[gt];if(tt.location>=0){let ht=j[gt];if(ht===void 0&&(gt==="instanceMatrix"&&X.instanceMatrix&&(ht=X.instanceMatrix),gt==="instanceColor"&&X.instanceColor&&(ht=X.instanceColor)),ht!==void 0){let ut=ht.normalized,kt=ht.itemSize,Yt=t.get(ht);if(Yt===void 0)continue;let Se=Yt.buffer,ve=Yt.type,be=Yt.bytesPerElement,ct=ve===i.INT||ve===i.UNSIGNED_INT||ht.gpuType===ml;if(ht.isInterleavedBufferAttribute){let _t=ht.data,Vt=_t.stride,oe=ht.offset;if(_t.isInstancedInterleavedBuffer){for(let Xt=0;Xt<tt.locationSize;Xt++)p(tt.location+Xt,_t.meshPerAttribute);X.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Xt=0;Xt<tt.locationSize;Xt++)y(tt.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Xt=0;Xt<tt.locationSize;Xt++)k(tt.location+Xt,kt/tt.locationSize,ve,ut,Vt*be,(oe+kt/tt.locationSize*Xt)*be,ct)}else{if(ht.isInstancedBufferAttribute){for(let _t=0;_t<tt.locationSize;_t++)p(tt.location+_t,ht.meshPerAttribute);X.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let _t=0;_t<tt.locationSize;_t++)y(tt.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let _t=0;_t<tt.locationSize;_t++)k(tt.location+_t,kt/tt.locationSize,ve,ut,kt*be,kt/tt.locationSize*_t*be,ct)}}else if(rt!==void 0){let ut=rt[gt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(tt.location,ut);break;case 3:i.vertexAttrib3fv(tt.location,ut);break;case 4:i.vertexAttrib4fv(tt.location,ut);break;default:i.vertexAttrib1fv(tt.location,ut)}}}}N()}function P(){D();for(let X in n){let K=n[X];for(let it in K){let z=K[it];for(let j in z){let dt=z[j];for(let rt in dt)m(dt[rt].object),delete dt[rt];delete z[j]}}delete n[X]}}function L(X){if(n[X.id]===void 0)return;let K=n[X.id];for(let it in K){let z=K[it];for(let j in z){let dt=z[j];for(let rt in dt)m(dt[rt].object),delete dt[rt];delete z[j]}}delete n[X.id]}function O(X){for(let K in n){let it=n[K];for(let z in it){let j=it[z];if(j[X.id]===void 0)continue;let dt=j[X.id];for(let rt in dt)m(dt[rt].object),delete dt[rt];delete j[X.id]}}}function T(X){for(let K in n){let it=n[K],z=X.isInstancedMesh===!0?X.id:0,j=it[z];if(j!==void 0){for(let dt in j){let rt=j[dt];for(let gt in rt)m(rt[gt].object),delete rt[gt];delete j[dt]}delete it[z],Object.keys(it).length===0&&delete n[K]}}}function D(){H(),o=!0,r!==s&&(r=s,h(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:D,resetDefaultState:H,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:y,disableUnusedAttributes:N}}function Dg(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,m){m!==0&&(i.drawArraysInstanced(n,u,h,m),e.update(h,n,m))}function c(u,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,m);let f=0;for(let M=0;M<m;M++)f+=h[M];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c}function Ng(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(O){return!(O!==Zn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(O){let T=O===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Dn&&O!==Jn&&!T&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",m=u(h);m!==h&&(ie("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);let v=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:f,maxTextures:M,maxVertexTextures:S,maxTextureSize:R,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:N,maxVaryings:k,maxFragmentUniforms:C,maxSamples:P,samples:L}}function Ug(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ni,c=new ce,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(v,f){let M=v.length!==0||f||n!==0||s;return s=f,n=v.length,M},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,f){e=m(v,f,0)},this.setState=function(v,f,M){let S=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,p=i.get(v);if(!s||S===null||S.length===0||r&&!y)r?m(null):h();else{let N=r?0:n,k=N*4,C=p.clippingState||null;u.value=C,C=m(S,f,k,M);for(let P=0;P!==k;++P)C[P]=e[P];p.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function m(v,f,M,S){let R=v!==null?v.length:0,y=null;if(R!==0){if(y=u.value,S!==!0||y===null){let p=M+R*4,N=f.matrixWorldInverse;c.getNormalMatrix(N),(y===null||y.length<p)&&(y=new Float32Array(p));for(let k=0,C=M;k!==R;++k,C+=4)o.copy(v[k]).applyMatrix4(N,c),o.normal.toArray(y,C),y[C+3]=o.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}var Er=4,Fg=6,Og=20,Bg=256,za=new yr,Wd=new de,Bh=null,zh=0,kh=0,Vh=!1,zg=new Q,Ds=new Q,nc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:c=zg}=r;Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,c),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bh,zh,kh),this._renderer.xr.enabled=Vh,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ai,format:Zn,colorSpace:aa,depthBuffer:!1},s=Xd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kg(r)),this._blurMaterial=Gg(r,t,e),this._ggxMaterial=Vg(r,t,e)}return s}_compileMaterial(t){let e=new Sn(new Bn,t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,s,r){let u=new yn(90,1,e,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,f=v.autoClear,M=v.toneMapping;v.getClearColor(Wd),v.toneMapping=si,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new vr,new ma({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let R=this._backgroundBox,y=R.material,p=!1,N=t.background;N?N.isColor&&(y.color.copy(N),t.background=null,p=!0):(y.color.copy(Wd),p=!0);for(let k=0;k<6;k++){let C=k%3;C===0?(u.up.set(0,h[k],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+m[k],r.y,r.z)):C===1?(u.up.set(0,0,h[k]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+m[k],r.z)):(u.up.set(0,h[k],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+m[k]));let P=this._cubeSize;Ar(s,C*P,k>2?P:0,P,P),v.setRenderTarget(s),p&&v.render(R,u),v.render(t,u)}v.toneMapping=M,v.autoClear=f,t.background=N}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let c=r.uniforms;c.envMap.value=t;let u=this._cubeSize;Ar(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(o,za)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;let u=o.uniforms,h=n/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),f=h*1.25,M=v*f,{_lodMax:S}=this,R=this._sizeLods[n],y=3*R*(n>S-Er?n-S+Er:0),p=4*(this._cubeSize-R);u.envMap.value=t.texture,u.roughness.value=M,u.mipInt.value=S-e,Ar(r,y,p,3*R,2*R),s.setRenderTarget(r),s.render(c,za),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=S-n,Ar(t,y,p,3*R,2*R),s.setRenderTarget(t),s.render(c,za)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,c=this._blurMaterial,u=this._lodMeshes[s];u.material=c;let h=c.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let m=this._sizeLods[s],v=3*m*(s>this._lodMax-Er?s-this._lodMax+Er:0),f=4*(this._cubeSize-m);Ar(e,v,f,3*m,2*m),o.setRenderTarget(e),o.render(u,za)}};function kg(i){let t=[],e=[],n=i,s=i-Er+1+Fg;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let c=1/(o-2),u=-c,h=1+c,m=[u,u,h,u,h,h,u,u,h,h,u,h],v=6,f=6,M=3,S=new Float32Array(M*f*v),R=new Float32Array(M*f*v);for(let p=0;p<v;p++){let N=p%3*2/3-1,k=p>2?0:-1,C=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];S.set(C,M*f*p);for(let P=0;P<f;P++){let L=m[P*2]*2-1,O=m[P*2+1]*2-1;p===0?Ds.set(1,O,L):p===1?Ds.set(-L,1,-O):p===2?Ds.set(-L,O,1):p===3?Ds.set(-1,O,-L):p===4?Ds.set(-L,-1,O):Ds.set(L,O,-1),Ds.toArray(R,(p*f+P)*M)}}let y=new Bn;y.setAttribute("position",new On(S,M)),y.setAttribute("outputDirection",new On(R,M)),e.push(new Sn(y,null)),n>Er&&n--}return{lodMeshes:e,sizeLods:t}}function Xd(i,t,e){let n=new Ln(i,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vg(i,t,e){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Gg(i,t,e){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:Og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function qd(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Yd(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ic=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vr(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Mi});r.uniforms.tEquirect.value=e;let o=new Sn(s,r),c=e.minFilter;return e.minFilter===ls&&(e.minFilter=fn),new cl(1,10,this).update(t,o),e.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Hg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,M=!1){return f==null?null:M?o(f):r(f)}function r(f){if(f&&f.isTexture){let M=f.mapping;if(M===dl||M===fl)if(t.has(f)){let S=t.get(f).texture;return c(S,f.mapping)}else{let S=f.image;if(S&&S.height>0){let R=new ic(S.height);return R.fromEquirectangularTexture(i,f),t.set(f,R),f.addEventListener("dispose",h),c(R.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let M=f.mapping,S=M===dl||M===fl,R=M===os||M===Is;if(S||R){let y=e.get(f),p=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new nc(i)),y=S?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{let N=f.image;return S&&N&&N.height>0||R&&N&&u(N)?(n===null&&(n=new nc(i)),y=S?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",m),y.texture):null}}}return f}function c(f,M){return M===dl?f.mapping=os:M===fl&&(f.mapping=Is),f}function u(f){let M=0,S=6;for(let R=0;R<S;R++)f[R]!==void 0&&M++;return M===S}function h(f){let M=f.target;M.removeEventListener("dispose",h);let S=t.get(M);S!==void 0&&(t.delete(M),S.dispose())}function m(f){let M=f.target;M.removeEventListener("dispose",m);let S=e.get(M);S!==void 0&&(e.delete(M),S.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function Wg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function Xg(i,t,e,n){let s={},r=new WeakMap;function o(v){let f=v.target;f.index!==null&&t.remove(f.index);for(let S in f.attributes)t.remove(f.attributes[S]);f.removeEventListener("dispose",o),delete s[f.id];let M=r.get(f);M&&(t.remove(M),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(v,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function u(v){let f=v.attributes;for(let M in f)t.update(f[M],i.ARRAY_BUFFER)}function h(v){let f=[],M=v.index,S=v.attributes.position,R=0;if(S===void 0)return;if(M!==null){let N=M.array;R=M.version;for(let k=0,C=N.length;k<C;k+=3){let P=N[k+0],L=N[k+1],O=N[k+2];f.push(P,L,L,O,O,P)}}else{let N=S.array;R=S.version;for(let k=0,C=N.length/3-1;k<C;k+=3){let P=k+0,L=k+1,O=k+2;f.push(P,L,L,O,O,P)}}let y=new(S.count>=65535?pa:fa)(f,1);y.version=R;let p=r.get(v);p&&t.remove(p),r.set(v,y)}function m(v){let f=r.get(v);if(f){let M=v.index;M!==null&&f.version<M.version&&h(v)}else h(v);return r.get(v)}return{get:c,update:u,getWireframeAttribute:m}}function qg(i,t,e){let n;function s(v){n=v}let r,o;function c(v){r=v.type,o=v.bytesPerElement}function u(v,f){i.drawElements(n,f,r,v*o),e.update(f,n,1)}function h(v,f,M){M!==0&&(i.drawElementsInstanced(n,f,r,v*o,M),e.update(f,n,M))}function m(v,f,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,v,0,M);let R=0;for(let y=0;y<M;y++)R+=f[y];e.update(R,n,1)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=m}function Yg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=c*(r/3);break;case i.LINES:e.lines+=c*(r/2);break;case i.LINE_STRIP:e.lines+=c*(r-1);break;case i.LINE_LOOP:e.lines+=c*r;break;case i.POINTS:e.points+=c*r;break;default:re("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jg(i,t,e){let n=new WeakMap,s=new Ye;function r(o,c,u){let h=o.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=m!==void 0?m.length:0,f=n.get(c);if(f===void 0||f.count!==v){let D=function(){O.dispose(),n.delete(c),c.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let M=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,R=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],N=c.morphAttributes.color||[],k=0;M===!0&&(k=1),S===!0&&(k=2),R===!0&&(k=3);let C=c.attributes.position.count*k,P=1;C>t.maxTextureSize&&(P=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let L=new Float32Array(C*P*4*v),O=new ca(L,C,P,v);O.type=Jn,O.needsUpdate=!0;let T=k*4;for(let H=0;H<v;H++){let X=y[H],K=p[H],it=N[H],z=C*P*4*H;for(let j=0;j<X.count;j++){let dt=j*T;M===!0&&(s.fromBufferAttribute(X,j),L[z+dt+0]=s.x,L[z+dt+1]=s.y,L[z+dt+2]=s.z,L[z+dt+3]=0),S===!0&&(s.fromBufferAttribute(K,j),L[z+dt+4]=s.x,L[z+dt+5]=s.y,L[z+dt+6]=s.z,L[z+dt+7]=0),R===!0&&(s.fromBufferAttribute(it,j),L[z+dt+8]=s.x,L[z+dt+9]=s.y,L[z+dt+10]=s.z,L[z+dt+11]=it.itemSize===4?s.w:1)}}f={count:v,texture:O,size:new Pe(C,P)},n.set(c,f),c.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let M=0;for(let R=0;R<h.length;R++)M+=h[R];let S=c.morphTargetsRelative?1:1-M;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Zg(i,t,e,n,s){let r=new WeakMap;function o(h){let m=s.render.frame,v=h.geometry,f=t.get(h,v);if(r.get(f)!==m&&(t.update(f),r.set(f,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==m&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,m))),h.isSkinnedMesh){let M=h.skeleton;r.get(M)!==m&&(M.update(),r.set(M,m))}return f}function c(){r=new WeakMap}function u(h){let m=h.target;m.removeEventListener("dispose",u),n.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:o,dispose:c}}var Kg={[xh]:"LINEAR_TONE_MAPPING",[vh]:"REINHARD_TONE_MAPPING",[yh]:"CINEON_TONE_MAPPING",[Ra]:"ACES_FILMIC_TONE_MAPPING",[Sh]:"AGX_TONE_MAPPING",[bh]:"NEUTRAL_TONE_MAPPING",[Mh]:"CUSTOM_TONE_MAPPING"};function $g(i,t,e,n,s,r){let o=new Ln(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,u=null,h=new Bn;h.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new rn([0,2,0,0,2,0],2));let m=new Zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Sn(h,m),f=new yr(-1,1,1,-1,0,1),M=null,S=null,R=!1,y,p=null,N=[],k=!1;this.setSize=function(C,P){o.setSize(C,P),c!==null&&c.setSize(C,P),u!==null&&u.setSize(C,P);for(let L=0;L<N.length;L++){let O=N[L];O.setSize&&O.setSize(C,P)}},this.setEffects=function(C){N=C,k=N.length>0&&N[0].isRenderPass===!0;let P=o.width,L=o.height;N.length>0&&c===null&&(c=new Ln(P,L,{type:ai,depthBuffer:!1,stencilBuffer:!1}),u=new Ln(P,L,{type:ai,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<N.length;O++){let T=N[O];T.setSize&&T.setSize(P,L)}},this.begin=function(C,P){if(R||C.toneMapping===si&&N.length===0)return!1;if(p=P,P!==null){let L=P.width,O=P.height;(o.width!==L||o.height!==O)&&this.setSize(L,O)}return k===!1&&C.setRenderTarget(o),y=C.toneMapping,C.toneMapping=si,!0},this.hasRenderPass=function(){return k},this.end=function(C,P){C.toneMapping=y,R=!0;let L=o,O=c;for(let T=0;T<N.length;T++){let D=N[T];D.enabled!==!1&&(D.render(C,O,L,P),D.needsSwap!==!1&&(L=O,O=O===c?u:c))}if(M!==C.outputColorSpace||S!==C.toneMapping){M=C.outputColorSpace,S=C.toneMapping,m.defines={},Ae.getTransfer(M)===ze&&(m.defines.SRGB_TRANSFER="");let T=Kg[S];T&&(m.defines[T]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(p),C.render(v,f),p=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),u!==null&&u.dispose(),h.dispose(),m.dispose()}}var pf=new In,Wh=new ns(1,1),mf=new ca,gf=new qo,_f=new xa,Jd=[],Zd=[],Kd=new Float32Array(16),$d=new Float32Array(9),jd=new Float32Array(4);function Rr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Jd[s];if(r===void 0&&(r=new Float32Array(s),Jd[s]=r),t!==0){n.toArray(r,0);for(let o=1,c=0;o!==t;++o)c+=e,i[o].toArray(r,c)}return r}function an(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ac(i,t){let e=Zd[t];e===void 0&&(e=new Int32Array(t),Zd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function n_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;jd.set(n),i.uniformMatrix2fv(this.addr,!1,jd),on(e,n)}}function i_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;$d.set(n),i.uniformMatrix3fv(this.addr,!1,$d),on(e,n)}}function s_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;Kd.set(n),i.uniformMatrix4fv(this.addr,!1,Kd),on(e,n)}}function r_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function c_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function f_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wh.compareFunction=e.isReversedDepthBuffer()?Ql:jl,r=Wh):r=pf,e.setTexture2D(t||r,s)}function p_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gf,s)}function m_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_f,s)}function g_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mf,s)}function __(i){switch(i){case 5126:return jg;case 35664:return Qg;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function x_(i,t){i.uniform1fv(this.addr,t)}function v_(i,t){let e=Rr(t,this.size,2);i.uniform2fv(this.addr,e)}function y_(i,t){let e=Rr(t,this.size,3);i.uniform3fv(this.addr,e)}function M_(i,t){let e=Rr(t,this.size,4);i.uniform4fv(this.addr,e)}function S_(i,t){let e=Rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b_(i,t){let e=Rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function T_(i,t){let e=Rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function w_(i,t){i.uniform1iv(this.addr,t)}function A_(i,t){i.uniform2iv(this.addr,t)}function E_(i,t){i.uniform3iv(this.addr,t)}function C_(i,t){i.uniform4iv(this.addr,t)}function R_(i,t){i.uniform1uiv(this.addr,t)}function P_(i,t){i.uniform2uiv(this.addr,t)}function I_(i,t){i.uniform3uiv(this.addr,t)}function L_(i,t){i.uniform4uiv(this.addr,t)}function D_(i,t,e){let n=this.cache,s=t.length,r=ac(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Wh:o=pf;for(let c=0;c!==s;++c)e.setTexture2D(t[c]||o,r[c])}function N_(i,t,e){let n=this.cache,s=t.length,r=ac(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gf,r[o])}function U_(i,t,e){let n=this.cache,s=t.length,r=ac(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_f,r[o])}function F_(i,t,e){let n=this.cache,s=t.length,r=ac(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mf,r[o])}function O_(i){switch(i){case 5126:return x_;case 35664:return v_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return b_;case 35676:return T_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return E_;case 35669:case 35673:return C_;case 5125:return R_;case 36294:return P_;case 36295:return I_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}var Xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=__(e.type)}},qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}},Yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(t,e[c.id],n)}}},Gh=/(\w+)(\])?(\[|\.)?/g;function Qd(i,t){i.seq.push(t),i.map[t.id]=t}function B_(i,t,e){let n=i.name,s=n.length;for(Gh.lastIndex=0;;){let r=Gh.exec(n),o=Gh.lastIndex,c=r[1],u=r[2]==="]",h=r[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===s){Qd(e,h===void 0?new Xh(c,i,t):new qh(c,i,t));break}else{let v=e.map[c];v===void 0&&(v=new Yh(c),Qd(e,v)),e=v}}}var Cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let c=t.getActiveUniform(e,o),u=t.getUniformLocation(e,c.name);B_(c,u,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let c=e[r],u=n[c.id];u.needsUpdate!==!1&&c.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function tf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var z_=37297,k_=0;function V_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===t?">":" "} ${c}: ${e[o]}`)}return n.join(`
`)}var ef=new ce;function G_(i){Ae._getMatrix(ef,Ae.workingColorSpace,i);let t=`mat3( ${ef.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(i)){case oa:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+V_(i.getShaderSource(t),c)}else return r}function H_(i,t){let e=G_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var W_={[xh]:"Linear",[vh]:"Reinhard",[yh]:"Cineon",[Ra]:"ACESFilmic",[Sh]:"AgX",[bh]:"Neutral",[Mh]:"Custom"};function X_(i,t){let e=W_[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ec=new Q;function q_(){Ae.getLuminanceCoefficients(ec);let i=ec.x.toFixed(4),t=ec.y.toFixed(4),e=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function J_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Z_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:c}}return e}function Va(i){return i!==""}function sf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(i){return i.replace(K_,j_)}var $_=new Map;function j_(i,t){let e=me[t];if(e===void 0){let n=$_.get(t);if(n!==void 0)e=me[n],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Jh(e)}var Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(i){return i.replace(Q_,tx)}function tx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function of(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var ex={[Ca]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function nx(i){return ex[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ix={[os]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE_UV"};function sx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ix[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var rx={[Is]:"ENVMAP_MODE_REFRACTION"};function ax(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ox={[_h]:"ENVMAP_BLENDING_MULTIPLY",[bd]:"ENVMAP_BLENDING_MIX",[Td]:"ENVMAP_BLENDING_ADD"};function lx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ox[i.combine]||"ENVMAP_BLENDING_NONE"}function cx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,c=e.fragmentShader,u=nx(e),h=sx(e),m=ax(e),v=lx(e),f=cx(e),M=Y_(e),S=J_(r),R=s.createProgram(),y,p,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Va).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Va).join(`
`),p.length>0&&(p+=`
`)):(y=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),p=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMap?"#define "+v:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?me.tonemapping_pars_fragment:"",e.toneMapping!==si?X_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,H_("linearToOutputTexel",e.outputColorSpace),q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Va).join(`
`)),o=Jh(o),o=sf(o,e),o=rf(o,e),c=Jh(c),c=sf(c,e),c=rf(c,e),o=af(o),c=af(c),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let k=N+y+o,C=N+p+c,P=tf(s,s.VERTEX_SHADER,k),L=tf(s,s.FRAGMENT_SHADER,C);s.attachShader(R,P),s.attachShader(R,L),e.index0AttributeName!==void 0?s.bindAttribLocation(R,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(R,0,"position"),s.linkProgram(R);function O(X){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(R)||"",it=s.getShaderInfoLog(P)||"",z=s.getShaderInfoLog(L)||"",j=K.trim(),dt=it.trim(),rt=z.trim(),gt=!0,tt=!0;if(s.getProgramParameter(R,s.LINK_STATUS)===!1)if(gt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,R,P,L);else{let ht=nf(s,P,"vertex"),ut=nf(s,L,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(R,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+j+`
`+ht+`
`+ut)}else j!==""?ie("WebGLProgram: Program Info Log:",j):(dt===""||rt==="")&&(tt=!1);tt&&(X.diagnostics={runnable:gt,programLog:j,vertexShader:{log:dt,prefix:y},fragmentShader:{log:rt,prefix:p}})}s.deleteShader(P),s.deleteShader(L),T=new Cr(s,R),D=Z_(s,R)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(R,z_)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(R),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k_++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=P,this.fragmentShader=L,this}var ux=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kh(t),e.set(t,n)),n}},Kh=class{constructor(t){this.id=ux++,this.code=t,this.usedTimes=0}};function dx(i){return i===hs||i===Fa||i===Oa}function fx(i,t,e,n,s,r){let o=new ha,c=new Zh,u=new Set,h=[],m=new Map,v=n.logarithmicDepthBuffer,f=n.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return u.add(T),T===0?"uv":`uv${T}`}function R(T,D,H,X,K,it){let z=X.fog,j=K.geometry,dt=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,rt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,gt=t.get(T.envMap||dt,rt),tt=gt&&gt.mapping===Pa?gt.image.height:null,ht=M[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&ie("WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,kt=ut!==void 0?ut.length:0,Yt=0;j.morphAttributes.position!==void 0&&(Yt=1),j.morphAttributes.normal!==void 0&&(Yt=2),j.morphAttributes.color!==void 0&&(Yt=3);let Se,ve,be,ct;if(ht){let Fe=bi[ht];Se=Fe.vertexShader,ve=Fe.fragmentShader}else{Se=T.vertexShader,ve=T.fragmentShader;let Fe=c.getVertexShaderStage(T),Ue=c.getFragmentShaderStage(T);c.update(T,Fe,Ue),be=Fe.id,ct=Ue.id}let _t=i.getRenderTarget(),Vt=i.state.buffers.depth.getReversed(),oe=K.isInstancedMesh===!0,Xt=K.isBatchedMesh===!0,fe=!!T.map,Ze=!!T.matcap,pe=!!gt,Ie=!!T.aoMap,Ve=!!T.lightMap,_e=!!T.bumpMap&&T.wireframe===!1,ye=!!T.normalMap,xe=!!T.displacementMap,mn=!!T.emissiveMap,ue=!!T.metalnessMap,Ee=!!T.roughnessMap,W=T.anisotropy>0,dn=T.clearcoat>0,$t=T.dispersion>0,A=T.retroreflectivity>0,g=T.iridescence>0,q=T.sheen>0,$=T.transmission>0,ft=W&&!!T.anisotropyMap,Tt=dn&&!!T.clearcoatMap,It=dn&&!!T.clearcoatNormalMap,ot=dn&&!!T.clearcoatRoughnessMap,et=g&&!!T.iridescenceMap,Rt=g&&!!T.iridescenceThicknessMap,Gt=q&&!!T.sheenColorMap,At=q&&!!T.sheenRoughnessMap,wt=!!T.specularMap,jt=!!T.specularColorMap,ee=!!T.specularIntensityMap,ae=$&&!!T.transmissionMap,G=$&&!!T.thicknessMap,Pt=!!T.gradientMap,at=!!T.alphaMap,Lt=T.alphaTest>0,Dt=!!T.alphaHash,yt=!!T.extensions,Zt=si;T.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Kt={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:Se,fragmentShader:ve,defines:T.defines,customVertexShaderID:be,customFragmentShaderID:ct,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&K._colorsTexture!==null,instancing:oe,instancingColor:oe&&K.instanceColor!==null,instancingMorph:oe&&K.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ae.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:fe,matcap:Ze,envMap:pe,envMapMode:pe&&gt.mapping,envMapCubeUVHeight:tt,aoMap:Ie,lightMap:Ve,bumpMap:_e,normalMap:ye,displacementMap:xe,emissiveMap:mn,normalMapObjectSpace:ye&&T.normalMapType===Ed,normalMapTangentSpace:ye&&T.normalMapType===$l,packedNormalMap:ye&&T.normalMapType===$l&&dx(T.normalMap.format),metalnessMap:ue,roughnessMap:Ee,anisotropy:W,anisotropyMap:ft,clearcoat:dn,clearcoatMap:Tt,clearcoatNormalMap:It,clearcoatRoughnessMap:ot,dispersion:$t,retroreflection:A,iridescence:g,iridescenceMap:et,iridescenceThicknessMap:Rt,sheen:q,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:wt,specularColorMap:jt,specularIntensityMap:ee,transmission:$,transmissionMap:ae,thicknessMap:G,gradientMap:Pt,opaque:T.transparent===!1&&T.blending===Sr&&T.alphaToCoverage===!1,alphaMap:at,alphaTest:Lt,alphaHash:Dt,combine:T.combine,mapUv:fe&&S(T.map.channel),aoMapUv:Ie&&S(T.aoMap.channel),lightMapUv:Ve&&S(T.lightMap.channel),bumpMapUv:_e&&S(T.bumpMap.channel),normalMapUv:ye&&S(T.normalMap.channel),displacementMapUv:xe&&S(T.displacementMap.channel),emissiveMapUv:mn&&S(T.emissiveMap.channel),metalnessMapUv:ue&&S(T.metalnessMap.channel),roughnessMapUv:Ee&&S(T.roughnessMap.channel),anisotropyMapUv:ft&&S(T.anisotropyMap.channel),clearcoatMapUv:Tt&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:It&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:At&&S(T.sheenRoughnessMap.channel),specularMapUv:wt&&S(T.specularMap.channel),specularColorMapUv:jt&&S(T.specularColorMap.channel),specularIntensityMapUv:ee&&S(T.specularIntensityMap.channel),transmissionMapUv:ae&&S(T.transmissionMap.channel),thicknessMapUv:G&&S(T.thicknessMap.channel),alphaMapUv:at&&S(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ye||W),vertexNormals:!!j.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!j.attributes.uv&&(fe||at),fog:!!z,useFog:T.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||j.attributes.normal===void 0&&ye===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Vt,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:Yt,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:it.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:fe&&T.map.isVideoTexture===!0&&Ae.getTransfer(T.map.colorSpace)===ze,decodeVideoTextureEmissive:mn&&T.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(T.emissiveMap.colorSpace)===ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===yi,flipSided:T.side===pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:yt&&T.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&T.extensions.multiDraw===!0||Xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Kt.vertexUv1s=u.has(1),Kt.vertexUv2s=u.has(2),Kt.vertexUv3s=u.has(3),u.clear(),Kt}function y(T){let D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(let H in T.defines)D.push(H),D.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(p(D,T),N(D,T),D.push(i.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function p(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numSunLights),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numSunLightShadows),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function N(T,D){o.disableAll(),D.instancing&&o.enable(0),D.instancingColor&&o.enable(1),D.instancingMorph&&o.enable(2),D.matcap&&o.enable(3),D.envMap&&o.enable(4),D.normalMapObjectSpace&&o.enable(5),D.normalMapTangentSpace&&o.enable(6),D.clearcoat&&o.enable(7),D.iridescence&&o.enable(8),D.alphaTest&&o.enable(9),D.vertexColors&&o.enable(10),D.vertexAlphas&&o.enable(11),D.vertexUv1s&&o.enable(12),D.vertexUv2s&&o.enable(13),D.vertexUv3s&&o.enable(14),D.vertexTangents&&o.enable(15),D.anisotropy&&o.enable(16),D.alphaHash&&o.enable(17),D.batching&&o.enable(18),D.dispersion&&o.enable(19),D.retroreflection&&o.enable(24),D.batchingColor&&o.enable(20),D.gradientMap&&o.enable(21),D.packedNormalMap&&o.enable(22),D.vertexNormals&&o.enable(23),T.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.reversedDepthBuffer&&o.enable(4),D.skinning&&o.enable(5),D.morphTargets&&o.enable(6),D.morphNormals&&o.enable(7),D.morphColors&&o.enable(8),D.premultipliedAlpha&&o.enable(9),D.shadowMapEnabled&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),D.decodeVideoTexture&&o.enable(19),D.decodeVideoTextureEmissive&&o.enable(20),D.alphaToCoverage&&o.enable(21),D.numLightProbeGrids>0&&o.enable(22),D.hasPositionAttribute&&o.enable(23),T.push(o.mask)}function k(T){let D=M[T.type],H;if(D){let X=bi[D];H=Vd.clone(X.uniforms)}else H=T.uniforms;return H}function C(T,D){let H=m.get(D);return H!==void 0?++H.usedTimes:(H=new hx(i,D,T,s),h.push(H),m.set(D,H)),H}function P(T){if(--T.usedTimes===0){let D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),m.delete(T.cacheKey),T.destroy()}}function L(T){c.remove(T)}function O(){c.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:k,acquireProgram:C,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:O}}function px(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,u){i.get(o)[c]=u}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function mx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function lf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let M=0;return f.isInstancedMesh&&(M+=2),f.isSkinnedMesh&&(M+=1),M}function c(f,M,S,R,y,p){let N=i[t];return N===void 0?(N={id:f.id,object:f,geometry:M,material:S,materialVariant:o(f),groupOrder:R,renderOrder:f.renderOrder,z:y,group:p},i[t]=N):(N.id=f.id,N.object=f,N.geometry=M,N.material=S,N.materialVariant=o(f),N.groupOrder=R,N.renderOrder=f.renderOrder,N.z=y,N.group=p),t++,N}function u(f,M,S,R,y,p,N){N.reversedDepth===!0&&(y=-y);let k=c(f,M,S,R,y,p);S.transmission>0?n.push(k):S.transparent===!0?s.push(k):e.push(k)}function h(f,M,S,R,y,p){let N=c(f,M,S,R,y,p);S.transmission>0?n.unshift(N):S.transparent===!0?s.unshift(N):e.unshift(N)}function m(f,M){e.length>1&&e.sort(f||mx),n.length>1&&n.sort(M||lf),s.length>1&&s.sort(M||lf)}function v(){for(let f=t,M=i.length;f<M;f++){let S=i[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:u,unshift:h,finish:v,sort:m}}function gx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new cf,i.set(n,[o])):s>=r.length?(o=new cf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function _x(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new de};break;case"SpotLight":e={position:new Q,direction:new Q,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[t.id]=e,e}}}function xx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vx=0;function yx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mx(i){let t=new _x,e=xx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new Q);let s=new Q,r=new He,o=new He;function c(h){let m=0,v=0,f=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let M=0,S=0,R=0,y=0,p=0,N=0,k=0,C=0,P=0,L=0,O=0,T=0,D=0,H=0;h.sort(yx);for(let K=0,it=h.length;K<it;K++){let z=h[K],j=z.color,dt=z.intensity,rt=z.distance,gt=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===hs?gt=z.shadow.map.texture:gt=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)m+=j.r*dt,v+=j.g*dt,f+=j.b*dt;else if(z.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(z.sh.coefficients[tt],dt);H++}else if(z.isSunLight){let tt=t.get(z);if(tt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ht=z.shadow,ut=e.get(z);ut.shadowIntensity=ht.intensity,ut.shadowBias=ht.bias,ut.shadowNormalBias=ht.normalBias,ut.shadowRadius=ht.radius,ut.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[S]=ut,n.sunShadowMap[S]=gt;let kt=ht.getViewportCount();for(let Yt=0;Yt<kt;Yt++)n.sunShadowMatrix[R+Yt]=ht.getMatrix(Yt),n.sunShadowCascade[R+Yt]=ht._cascadeData[Yt];R+=kt,S++}n.sun[M]=tt,M++}else if(z.isDirectionalLight){let tt=t.get(z);if(tt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ht=z.shadow,ut=e.get(z);ut.shadowIntensity=ht.intensity,ut.shadowBias=ht.bias,ut.shadowNormalBias=ht.normalBias,ut.shadowRadius=ht.radius,ut.shadowMapSize=ht.mapSize,n.directionalShadow[y]=ut,n.directionalShadowMap[y]=gt,n.directionalShadowMatrix[y]=z.shadow.matrix,P++}n.directional[y]=tt,y++}else if(z.isSpotLight){let tt=t.get(z);tt.position.setFromMatrixPosition(z.matrixWorld),tt.color.copy(j).multiplyScalar(dt),tt.distance=rt,tt.coneCos=Math.cos(z.angle),tt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),tt.decay=z.decay,n.spot[N]=tt;let ht=z.shadow;if(z.map&&(n.spotLightMap[T]=z.map,T++,ht.updateMatrices(z),z.castShadow&&D++),n.spotLightMatrix[N]=ht.matrix,z.castShadow){let ut=e.get(z);ut.shadowIntensity=ht.intensity,ut.shadowBias=ht.bias,ut.shadowNormalBias=ht.normalBias,ut.shadowRadius=ht.radius,ut.shadowMapSize=ht.mapSize,n.spotShadow[N]=ut,n.spotShadowMap[N]=gt,O++}N++}else if(z.isRectAreaLight){let tt=t.get(z);tt.color.copy(j).multiplyScalar(dt),tt.halfWidth.set(z.width*.5,0,0),tt.halfHeight.set(0,z.height*.5,0),n.rectArea[k]=tt,k++}else if(z.isPointLight){let tt=t.get(z);if(tt.color.copy(z.color).multiplyScalar(z.intensity),tt.distance=z.distance,tt.decay=z.decay,z.castShadow){let ht=z.shadow,ut=e.get(z);ut.shadowIntensity=ht.intensity,ut.shadowBias=ht.bias,ut.shadowNormalBias=ht.normalBias,ut.shadowRadius=ht.radius,ut.shadowMapSize=ht.mapSize,ut.shadowCameraNear=ht.camera.near,ut.shadowCameraFar=ht.camera.far,n.pointShadow[p]=ut,n.pointShadowMap[p]=gt,n.pointShadowMatrix[p]=z.shadow.matrix,L++}n.point[p]=tt,p++}else if(z.isHemisphereLight){let tt=t.get(z);tt.skyColor.copy(z.color).multiplyScalar(dt),tt.groundColor.copy(z.groundColor).multiplyScalar(dt),n.hemi[C]=tt,C++}}k>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=v,n.ambient[2]=f;let X=n.hash;(X.sunLength!==M||X.directionalLength!==y||X.pointLength!==p||X.spotLength!==N||X.rectAreaLength!==k||X.hemiLength!==C||X.numSunShadows!==S||X.numDirectionalShadows!==P||X.numPointShadows!==L||X.numSpotShadows!==O||X.numSpotMaps!==T||X.numLightProbes!==H)&&(n.sun.length=M,n.directional.length=y,n.spot.length=N,n.rectArea.length=k,n.point.length=p,n.hemi.length=C,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=R,n.sunShadowCascade.length=R,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=L,n.pointShadowMap.length=L,n.pointShadowMatrix.length=L,n.spotShadow.length=O,n.spotShadowMap.length=O,n.spotLightMatrix.length=O+T-D,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=H,X.sunLength=M,X.directionalLength=y,X.pointLength=p,X.spotLength=N,X.rectAreaLength=k,X.hemiLength=C,X.numSunShadows=S,X.numDirectionalShadows=P,X.numPointShadows=L,X.numSpotShadows=O,X.numSpotMaps=T,X.numLightProbes=H,n.version=vx++)}function u(h,m){let v=0,f=0,M=0,S=0,R=0,y=0,p=m.matrixWorldInverse;for(let N=0,k=h.length;N<k;N++){let C=h[N];if(C.isSunLight){let P=n.sun[v];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(p),v++}else if(C.isDirectionalLight){let P=n.directional[f];P.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),f++}else if(C.isSpotLight){let P=n.spot[S];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),S++}else if(C.isRectAreaLight){let P=n.rectArea[R];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(p),o.identity(),r.copy(C.matrixWorld),r.premultiply(p),o.extractRotation(r),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),R++}else if(C.isPointLight){let P=n.point[M];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(p),M++}else if(C.isHemisphereLight){let P=n.hemi[y];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(p),y++}}}return{setup:c,setupView:u,state:n}}function hf(i){let t=new Mx(i),e=[],n=[],s=[];function r(f){v.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function c(f){n.push(f)}function u(f){s.push(f)}function h(){t.setup(e)}function m(f){t.setupView(e,f)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:h,setupLightsView:m,pushLight:o,pushShadow:c,pushLightProbeGrid:u}}function Sx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),c;return o===void 0?(c=new hf(i),t.set(s,[c])):r>=o.length?(c=new hf(i),o.push(c)):c=o[r],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
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
}`,wx=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],Ax=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],uf=new He,ka=new Q,Hh=new Q;function Ex(i,t,e){let n=new xr,s=new Pe,r=new Pe,o=new Ye,c=new Ko,u=new $o,h={},m=e.maxTextureSize,v={[as]:pn,[pn]:as,[yi]:yi},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:bx,fragmentShader:Tx}),M=f.clone();M.defines.HORIZONTAL_PASS=1;let S=new Bn;S.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let R=new Sn(S,f),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca;let p=this.type;this.render=function(L,O,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===ul&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ca);let D=i.getRenderTarget(),H=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Mi),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let it=p!==this.type;it&&O.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(j=>j.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,j=L.length;z<j;z++){let dt=L[z],rt=dt.shadow;if(rt===void 0){ie("WebGLShadowMap:",dt,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);let gt=rt.getFrameExtents();s.multiply(gt),r.copy(rt.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/gt.x),s.x=r.x*gt.x,rt.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/gt.y),s.y=r.y*gt.y,rt.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=tt,rt.map===null||it===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===Mr){if(dt.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new Ln(s.x,s.y,{format:hs,type:ai,minFilter:fn,magFilter:fn,generateMipmaps:!1}),rt.map.texture.name=dt.name+".shadowMap",rt.map.depthTexture=new ns(s.x,s.y,Jn),rt.map.depthTexture.name=dt.name+".shadowMapDepth",rt.map.depthTexture.format=gi,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=$e,rt.map.depthTexture.magFilter=$e}else dt.isPointLight?(rt.map=new ic(s.x),rt.map.depthTexture=new Jo(s.x,ri)):(rt.map=new Ln(s.x,s.y),rt.map.depthTexture=new ns(s.x,s.y,ri)),rt.map.depthTexture.name=dt.name+".shadowMap",rt.map.depthTexture.format=gi,this.type===Ca?(rt.map.depthTexture.compareFunction=tt?Ql:jl,rt.map.depthTexture.minFilter=fn,rt.map.depthTexture.magFilter=fn):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=$e,rt.map.depthTexture.magFilter=$e);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==s.x||rt.map.height!==s.y)&&rt.map.setSize(s.x,s.y);let ht=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();dt.isPointLight!==!0&&rt.updateMatrices(dt,T);for(let ut=0;ut<ht;ut++){let kt=rt.getCamera(ut);if(dt.isPointLight){let Yt=rt.camera,Se=rt.matrix,ve=dt.distance||Yt.far;ve!==Yt.far&&(Yt.far=ve,Yt.updateProjectionMatrix()),ka.setFromMatrixPosition(dt.matrixWorld),Yt.position.copy(ka),Hh.copy(Yt.position),Hh.add(wx[ut]),Yt.up.copy(Ax[ut]),Yt.lookAt(Hh),Yt.updateMatrixWorld(),Se.makeTranslation(-ka.x,-ka.y,-ka.z),uf.multiplyMatrices(Yt.projectionMatrix,Yt.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(uf,Yt.coordinateSystem,Yt.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)i.setRenderTarget(rt.map,ut),i.clear();else{ut===0&&(i.setRenderTarget(rt.map),i.clear());let Yt=rt.getViewport(ut);o.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),K.viewport(o)}n=rt.getFrustum(ut),C(O,T,kt,dt,this.type)}rt.isPointLightShadow!==!0&&this.type===Mr&&N(rt,T),rt.needsUpdate=!1}p=this.type,y.needsUpdate=!1,i.setRenderTarget(D,H,X)};function N(L,O){let T=t.update(R);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null?L.mapPass=new Ln(s.x,s.y,{format:hs,type:ai}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),f.uniforms.shadow_pass.value=L.map.depthTexture,f.uniforms.resolution.value.set(L.map.width,L.map.height),f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(O,null,T,f,R,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value.set(L.map.width,L.map.height),M.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(O,null,T,M,R,null)}function k(L,O,T,D){let H=null,X=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(X!==void 0)H=X;else if(H=T.isPointLight===!0?u:c,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let K=H.uuid,it=O.uuid,z=h[K];z===void 0&&(z={},h[K]=z);let j=z[it];j===void 0&&(j=H.clone(),z[it]=j,O.addEventListener("dispose",P)),H=j}if(H.visible=O.visible,H.wireframe=O.wireframe,D===Mr?H.side=O.shadowSide!==null?O.shadowSide:O.side:H.side=O.shadowSide!==null?O.shadowSide:v[O.side],H.alphaMap=O.alphaMap,H.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,H.map=O.map,H.clipShadows=O.clipShadows,H.clippingPlanes=O.clippingPlanes,H.clipIntersection=O.clipIntersection,H.displacementMap=O.displacementMap,H.displacementScale=O.displacementScale,H.displacementBias=O.displacementBias,H.wireframeLinewidth=O.wireframeLinewidth,H.linewidth=O.linewidth,T.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let K=i.properties.get(H);K.light=T}return H}function C(L,O,T,D,H){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&H===Mr)&&(!L.frustumCulled||L.intersectsFrustum(n))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);let it=t.update(L),z=L.material;if(Array.isArray(z)){let j=it.groups;for(let dt=0,rt=j.length;dt<rt;dt++){let gt=j[dt],tt=z[gt.materialIndex];if(tt&&tt.visible){let ht=k(L,tt,D,H);L.onBeforeShadow(i,L,O,T,it,ht,gt),i.renderBufferDirect(T,null,it,ht,L,gt),L.onAfterShadow(i,L,O,T,it,ht,gt)}}}else if(z.visible){let j=k(L,z,D,H);L.onBeforeShadow(i,L,O,T,it,j,null),i.renderBufferDirect(T,null,it,j,L,null),L.onAfterShadow(i,L,O,T,it,j,null)}}let K=L.children;for(let it=0,z=K.length;it<z;it++)C(K[it],O,T,D,H)}function P(L){L.target.removeEventListener("dispose",P);for(let T in h){let D=h[T],H=L.target.uuid;H in D&&(D[H].dispose(),delete D[H])}}}function Cx(i,t){function e(){let G=!1,Pt=new Ye,at=null,Lt=new Ye(0,0,0,0);return{setMask:function(Dt){at!==Dt&&!G&&(i.colorMask(Dt,Dt,Dt,Dt),at=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,yt,Zt,Kt,Fe){Fe===!0&&(Dt*=Kt,yt*=Kt,Zt*=Kt),Pt.set(Dt,yt,Zt,Kt),Lt.equals(Pt)===!1&&(i.clearColor(Dt,yt,Zt,Kt),Lt.copy(Pt))},reset:function(){G=!1,at=null,Lt.set(-1,0,0,0)}}}function n(){let G=!1,Pt=!1,at=null,Lt=null,Dt=null;return{setReversed:function(yt){if(Pt!==yt){let Zt=t.get("EXT_clip_control");yt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Pt=yt;let Kt=Dt;Dt=null,this.setClear(Kt)}},getReversed:function(){return Pt},setTest:function(yt){yt?_t(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(yt){at!==yt&&!G&&(i.depthMask(yt),at=yt)},setFunc:function(yt){if(Pt&&(yt=zd[yt]),Lt!==yt){switch(yt){case Do:i.depthFunc(i.NEVER);break;case No:i.depthFunc(i.ALWAYS);break;case Uo:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=yt}},setLocked:function(yt){G=yt},setClear:function(yt){Dt!==yt&&(Dt=yt,Pt&&(yt=1-yt),i.clearDepth(yt))},reset:function(){G=!1,at=null,Lt=null,Dt=null,Pt=!1}}}function s(){let G=!1,Pt=null,at=null,Lt=null,Dt=null,yt=null,Zt=null,Kt=null,Fe=null;return{setTest:function(Ue){G||(Ue?_t(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(Ue){Pt!==Ue&&!G&&(i.stencilMask(Ue),Pt=Ue)},setFunc:function(Ue,Tn,kn){(at!==Ue||Lt!==Tn||Dt!==kn)&&(i.stencilFunc(Ue,Tn,kn),at=Ue,Lt=Tn,Dt=kn)},setOp:function(Ue,Tn,kn){(yt!==Ue||Zt!==Tn||Kt!==kn)&&(i.stencilOp(Ue,Tn,kn),yt=Ue,Zt=Tn,Kt=kn)},setLocked:function(Ue){G=Ue},setClear:function(Ue){Fe!==Ue&&(i.clearStencil(Ue),Fe=Ue)},reset:function(){G=!1,Pt=null,at=null,Lt=null,Dt=null,yt=null,Zt=null,Kt=null,Fe=null}}}let r=new e,o=new n,c=new s,u=new WeakMap,h=new WeakMap,m={},v={},f={},M=new WeakMap,S=[],R=null,y=!1,p=null,N=null,k=null,C=null,P=null,L=null,O=null,T=new de(0,0,0),D=0,H=!1,X=null,K=null,it=null,z=null,j=null,dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,gt=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(tt)[1]),rt=gt>=1):tt.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),rt=gt>=2);let ht=null,ut={},kt=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),Se=new Ye().fromArray(kt),ve=new Ye().fromArray(Yt);function be(G,Pt,at,Lt){let Dt=new Uint8Array(4),yt=i.createTexture();i.bindTexture(G,yt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<at;Zt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Pt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return yt}let ct={};ct[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),_t(i.DEPTH_TEST),o.setFunc(fr),_e(!1),ye(uh),_t(i.CULL_FACE),Ie(Mi);function _t(G){m[G]!==!0&&(i.enable(G),m[G]=!0)}function Vt(G){m[G]!==!1&&(i.disable(G),m[G]=!1)}function oe(G,Pt){return f[G]!==Pt?(i.bindFramebuffer(G,Pt),f[G]=Pt,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Pt),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Xt(G,Pt){let at=S,Lt=!1;if(G){at=M.get(Pt),at===void 0&&(at=[],M.set(Pt,at));let Dt=G.textures;if(at.length!==Dt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Zt=Dt.length;yt<Zt;yt++)at[yt]=i.COLOR_ATTACHMENT0+yt;at.length=Dt.length,Lt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(at)}function fe(G){return R!==G?(i.useProgram(G),R=G,!0):!1}let Ze={[Ps]:i.FUNC_ADD,[ad]:i.FUNC_SUBTRACT,[od]:i.FUNC_REVERSE_SUBTRACT};Ze[ld]=i.MIN,Ze[cd]=i.MAX;let pe={[hd]:i.ZERO,[ud]:i.ONE,[dd]:i.SRC_COLOR,[mh]:i.SRC_ALPHA,[xd]:i.SRC_ALPHA_SATURATE,[gd]:i.DST_COLOR,[pd]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[gh]:i.ONE_MINUS_SRC_ALPHA,[_d]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA,[vd]:i.CONSTANT_COLOR,[yd]:i.ONE_MINUS_CONSTANT_COLOR,[Md]:i.CONSTANT_ALPHA,[Sd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ie(G,Pt,at,Lt,Dt,yt,Zt,Kt,Fe,Ue){if(G===Mi){y===!0&&(Vt(i.BLEND),y=!1);return}if(y===!1&&(_t(i.BLEND),y=!0),G!==rd){if(G!==p||Ue!==H){if((N!==Ps||P!==Ps)&&(i.blendEquation(i.FUNC_ADD),N=Ps,P=Ps),Ue)switch(G){case Sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dh:i.blendFunc(i.ONE,i.ONE);break;case fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ph:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:re("WebGLState: Invalid blending: ",G);break}else switch(G){case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fh:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",G);break}k=null,C=null,L=null,O=null,T.set(0,0,0),D=0,p=G,H=Ue}return}Dt=Dt||Pt,yt=yt||at,Zt=Zt||Lt,(Pt!==N||Dt!==P)&&(i.blendEquationSeparate(Ze[Pt],Ze[Dt]),N=Pt,P=Dt),(at!==k||Lt!==C||yt!==L||Zt!==O)&&(i.blendFuncSeparate(pe[at],pe[Lt],pe[yt],pe[Zt]),k=at,C=Lt,L=yt,O=Zt),(Kt.equals(T)===!1||Fe!==D)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Fe),T.copy(Kt),D=Fe),p=G,H=!1}function Ve(G,Pt){G.side===yi?Vt(i.CULL_FACE):_t(i.CULL_FACE);let at=G.side===pn;Pt&&(at=!at),_e(at),G.blending===Sr&&G.transparent===!1?Ie(Mi):Ie(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Lt=G.stencilWrite;c.setTest(Lt),Lt&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),mn(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(G){X!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),X=G)}function ye(G){G!==id?(_t(i.CULL_FACE),G!==K&&(G===uh?i.cullFace(i.BACK):G===sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),K=G}function xe(G){G!==it&&(rt&&i.lineWidth(G),it=G)}function mn(G,Pt,at){G?(_t(i.POLYGON_OFFSET_FILL),(z!==Pt||j!==at)&&(z=Pt,j=at,o.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,at))):Vt(i.POLYGON_OFFSET_FILL)}function ue(G){G?_t(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function Ee(G){G===void 0&&(G=i.TEXTURE0+dt-1),ht!==G&&(i.activeTexture(G),ht=G)}function W(G,Pt,at){at===void 0&&(ht===null?at=i.TEXTURE0+dt-1:at=ht);let Lt=ut[at];Lt===void 0&&(Lt={type:void 0,texture:void 0},ut[at]=Lt),(Lt.type!==G||Lt.texture!==Pt)&&(ht!==at&&(i.activeTexture(at),ht=at),i.bindTexture(G,Pt||ct[G]),Lt.type=G,Lt.texture=Pt)}function dn(){let G=ut[ht];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function g(){try{i.texSubImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function q(){try{i.texSubImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function ft(){try{i.compressedTexSubImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function Tt(){try{i.texStorage2D(...arguments)}catch(G){re("WebGLState:",G)}}function It(){try{i.texStorage3D(...arguments)}catch(G){re("WebGLState:",G)}}function ot(){try{i.texImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function et(){try{i.texImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function Rt(G){return v[G]!==void 0?v[G]:i.getParameter(G)}function Gt(G,Pt){v[G]!==Pt&&(i.pixelStorei(G,Pt),v[G]=Pt)}function At(G){Se.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Se.copy(G))}function wt(G){ve.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ve.copy(G))}function jt(G,Pt){let at=h.get(Pt);at===void 0&&(at=new WeakMap,h.set(Pt,at));let Lt=at.get(G);Lt===void 0&&(Lt=i.getUniformBlockIndex(Pt,G.name),at.set(G,Lt))}function ee(G,Pt){let Lt=h.get(Pt).get(G);u.get(Pt)!==Lt&&(i.uniformBlockBinding(Pt,Lt,G.__bindingPointIndex),u.set(Pt,Lt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},v={},ht=null,ut={},f={},M=new WeakMap,S=[],R=null,y=!1,p=null,N=null,k=null,C=null,P=null,L=null,O=null,T=new de(0,0,0),D=0,H=!1,X=null,K=null,it=null,z=null,j=null,Se.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:_t,disable:Vt,bindFramebuffer:oe,drawBuffers:Xt,useProgram:fe,setBlending:Ie,setMaterial:Ve,setFlipSided:_e,setCullFace:ye,setLineWidth:xe,setPolygonOffset:mn,setScissorTest:ue,activeTexture:Ee,bindTexture:W,unbindTexture:dn,compressedTexImage2D:$t,compressedTexImage3D:A,texImage2D:ot,texImage3D:et,pixelStorei:Gt,getParameter:Rt,updateUBOMapping:jt,uniformBlockBinding:ee,texStorage2D:Tt,texStorage3D:It,texSubImage2D:g,texSubImage3D:q,compressedTexSubImage2D:$,compressedTexSubImage3D:ft,scissor:At,viewport:wt,reset:ae}}function Rx(i,t,e,n,s,r,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pe,m=new WeakMap,v=new Set,f,M=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(A,g){return S?new OffscreenCanvas(A,g):la("canvas")}function y(A,g,q){let $=1,ft=$t(A);if((ft.width>q||ft.height>q)&&($=q/Math.max(ft.width,ft.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Tt=Math.floor($*ft.width),It=Math.floor($*ft.height);f===void 0&&(f=R(Tt,It));let ot=g?R(Tt,It):f;return ot.width=Tt,ot.height=It,ot.getContext("2d").drawImage(A,0,0,Tt,It),ie("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+Tt+"x"+It+")."),ot}else return"data"in A&&ie("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),A;return A}function p(A){return A.generateMipmaps}function N(A){i.generateMipmap(A)}function k(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(A,g,q,$,ft,Tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let It;$&&(It=t.get("EXT_texture_norm16"),It||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=g;if(g===i.RED&&(q===i.FLOAT&&(ot=i.R32F),q===i.HALF_FLOAT&&(ot=i.R16F),q===i.UNSIGNED_BYTE&&(ot=i.R8),q===i.UNSIGNED_SHORT&&It&&(ot=It.R16_EXT),q===i.SHORT&&It&&(ot=It.R16_SNORM_EXT)),g===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.R8UI),q===i.UNSIGNED_SHORT&&(ot=i.R16UI),q===i.UNSIGNED_INT&&(ot=i.R32UI),q===i.BYTE&&(ot=i.R8I),q===i.SHORT&&(ot=i.R16I),q===i.INT&&(ot=i.R32I)),g===i.RG&&(q===i.FLOAT&&(ot=i.RG32F),q===i.HALF_FLOAT&&(ot=i.RG16F),q===i.UNSIGNED_BYTE&&(ot=i.RG8),q===i.UNSIGNED_SHORT&&It&&(ot=It.RG16_EXT),q===i.SHORT&&It&&(ot=It.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.RG8UI),q===i.UNSIGNED_SHORT&&(ot=i.RG16UI),q===i.UNSIGNED_INT&&(ot=i.RG32UI),q===i.BYTE&&(ot=i.RG8I),q===i.SHORT&&(ot=i.RG16I),q===i.INT&&(ot=i.RG32I)),g===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),q===i.UNSIGNED_INT&&(ot=i.RGB32UI),q===i.BYTE&&(ot=i.RGB8I),q===i.SHORT&&(ot=i.RGB16I),q===i.INT&&(ot=i.RGB32I)),g===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),q===i.UNSIGNED_INT&&(ot=i.RGBA32UI),q===i.BYTE&&(ot=i.RGBA8I),q===i.SHORT&&(ot=i.RGBA16I),q===i.INT&&(ot=i.RGBA32I)),g===i.RGB&&(q===i.UNSIGNED_SHORT&&It&&(ot=It.RGB16_EXT),q===i.SHORT&&It&&(ot=It.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),g===i.RGBA){let et=Tt?oa:Ae.getTransfer(ft);q===i.FLOAT&&(ot=i.RGBA32F),q===i.HALF_FLOAT&&(ot=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ot=et===ze?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&It&&(ot=It.RGBA16_EXT),q===i.SHORT&&It&&(ot=It.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function P(A,g){let q;return A?g===null||g===ri||g===Tr?q=i.DEPTH24_STENCIL8:g===Jn?q=i.DEPTH32F_STENCIL8:g===br&&(q=i.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ri||g===Tr?q=i.DEPTH_COMPONENT24:g===Jn?q=i.DEPTH_COMPONENT32F:g===br&&(q=i.DEPTH_COMPONENT16),q}function L(A,g){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==fn?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function O(A){let g=A.target;g.removeEventListener("dispose",O),D(g),g.isVideoTexture&&m.delete(g),g.isHTMLTexture&&v.delete(g)}function T(A){let g=A.target;g.removeEventListener("dispose",T),X(g)}function D(A){let g=n.get(A);if(g.__webglInit===void 0)return;let q=A.source,$=M.get(q);if($){let ft=$[g.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&H(A),Object.keys($).length===0&&M.delete(q)}n.remove(A)}function H(A){let g=n.get(A);i.deleteTexture(g.__webglTexture);let q=A.source,$=M.get(q);delete $[g.__cacheKey],o.memory.textures--}function X(A){let g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let ft=0;ft<g.__webglFramebuffer[$].length;ft++)i.deleteFramebuffer(g.__webglFramebuffer[$][ft]);else i.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)i.deleteFramebuffer(g.__webglFramebuffer[$]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let q=A.textures;for(let $=0,ft=q.length;$<ft;$++){let Tt=n.get(q[$]);Tt.__webglTexture&&(i.deleteTexture(Tt.__webglTexture),o.memory.textures--),n.remove(q[$])}n.remove(A)}let K=0;function it(){K=0}function z(){return K}function j(A){K=A}function dt(){let A=K;return A>=s.maxTextures&&ie("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,A}function rt(A){let g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function gt(A,g){let q=n.get(A);if(A.isVideoTexture&&W(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&q.__version!==A.version){let $=A.image;if($===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(q,A,g);return}}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+g)}function tt(A,g){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){Vt(q,A,g);return}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+g)}function ht(A,g){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){Vt(q,A,g);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+g)}function ut(A,g){let q=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&q.__version!==A.version){oe(q,A,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+g)}let kt={[ko]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Vo]:i.MIRRORED_REPEAT},Yt={[$e]:i.NEAREST,[wd]:i.NEAREST_MIPMAP_NEAREST,[Ia]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[pl]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},Se={[Rd]:i.NEVER,[Nd]:i.ALWAYS,[Pd]:i.LESS,[jl]:i.LEQUAL,[Id]:i.EQUAL,[Ql]:i.GEQUAL,[Ld]:i.GREATER,[Dd]:i.NOTEQUAL};function ve(A,g){if(g.type===Jn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===fn||g.magFilter===pl||g.magFilter===Ia||g.magFilter===ls||g.minFilter===fn||g.minFilter===pl||g.minFilter===Ia||g.minFilter===ls)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,kt[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,kt[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,kt[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Yt[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Yt[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===$e||g.minFilter!==Ia&&g.minFilter!==ls||g.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function be(A,g){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",O));let $=g.source,ft=M.get($);ft===void 0&&(ft={},M.set($,ft));let Tt=rt(g);if(Tt!==A.__cacheKey){ft[Tt]===void 0&&(ft[Tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ft[Tt].usedTimes++;let It=ft[A.__cacheKey];It!==void 0&&(ft[A.__cacheKey].usedTimes--,It.usedTimes===0&&H(g)),A.__cacheKey=Tt,A.__webglTexture=ft[Tt].texture}return q}function ct(A,g,q){return Math.floor(Math.floor(A/q)/g)}function _t(A,g,q,$){let Tt=A.updateRanges;if(Tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,q,$,g.data);else{Tt.sort((Gt,At)=>Gt.start-At.start);let It=0;for(let Gt=1;Gt<Tt.length;Gt++){let At=Tt[It],wt=Tt[Gt],jt=At.start+At.count,ee=ct(wt.start,g.width,4),ae=ct(At.start,g.width,4);wt.start<=jt+1&&ee===ae&&ct(wt.start+wt.count-1,g.width,4)===ee?At.count=Math.max(At.count,wt.start+wt.count-At.start):(++It,Tt[It]=wt)}Tt.length=It+1;let ot=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),Rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Gt=0,At=Tt.length;Gt<At;Gt++){let wt=Tt[Gt],jt=Math.floor(wt.start/4),ee=Math.ceil(wt.count/4),ae=jt%g.width,G=Math.floor(jt/g.width),Pt=ee,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,ae,G,Pt,at,q,$,g.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function Vt(A,g,q){let $=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=i.TEXTURE_3D);let ft=be(A,g),Tt=g.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+q);let It=n.get(Tt);if(Tt.version!==It.__version||ft===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let at=Ae.getPrimaries(Ae.workingColorSpace),Lt=g.colorSpace===Bi?null:Ae.getPrimaries(g.colorSpace),Dt=g.colorSpace===Bi||at===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let et=y(g.image,!1,s.maxTextureSize);et=dn(g,et);let Rt=r.convert(g.format,g.colorSpace),Gt=r.convert(g.type),At=C(g.internalFormat,Rt,Gt,g.normalized,g.colorSpace,g.isVideoTexture);ve($,g);let wt,jt=g.mipmaps,ee=g.isVideoTexture!==!0,ae=It.__version===void 0||ft===!0,G=Tt.dataReady,Pt=L(g,et);if(g.isDepthTexture)At=P(g.format===cs,g.type),ae&&(ee?e.texStorage2D(i.TEXTURE_2D,1,At,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,At,et.width,et.height,0,Rt,Gt,null));else if(g.isDataTexture)if(jt.length>0){ee&&ae&&e.texStorage2D(i.TEXTURE_2D,Pt,At,jt[0].width,jt[0].height);for(let at=0,Lt=jt.length;at<Lt;at++)wt=jt[at],ee?G&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,Rt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,at,At,wt.width,wt.height,0,Rt,Gt,wt.data);g.generateMipmaps=!1}else ee?(ae&&e.texStorage2D(i.TEXTURE_2D,Pt,At,et.width,et.height),G&&_t(g,et,Rt,Gt)):e.texImage2D(i.TEXTURE_2D,0,At,et.width,et.height,0,Rt,Gt,et.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ee&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,At,jt[0].width,jt[0].height,et.depth);for(let at=0,Lt=jt.length;at<Lt;at++)if(wt=jt[at],g.format!==Zn)if(Rt!==null)if(ee){if(G)if(g.layerUpdates.size>0){let Dt=Oh(wt.width,wt.height,g.format,g.type);for(let yt of g.layerUpdates){let Zt=wt.data.subarray(yt*Dt/wt.data.BYTES_PER_ELEMENT,(yt+1)*Dt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,yt,wt.width,wt.height,1,Rt,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,et.depth,Rt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,At,wt.width,wt.height,et.depth,0,wt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,et.depth,Rt,Gt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,At,wt.width,wt.height,et.depth,0,Rt,Gt,wt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{ee&&ae&&e.texStorage2D(i.TEXTURE_2D,Pt,At,jt[0].width,jt[0].height);for(let at=0,Lt=jt.length;at<Lt;at++)wt=jt[at],g.format!==Zn?Rt!==null?ee?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,Rt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,At,wt.width,wt.height,0,wt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?G&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,Rt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,at,At,wt.width,wt.height,0,Rt,Gt,wt.data)}else if(g.isDataArrayTexture)if(ee){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,At,et.width,et.height,et.depth),G)if(g.layerUpdates.size>0){let at=Oh(et.width,et.height,g.format,g.type);for(let Lt of g.layerUpdates){let Dt=et.data.subarray(Lt*at/et.data.BYTES_PER_ELEMENT,(Lt+1)*at/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,et.width,et.height,1,Rt,Gt,Dt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Rt,Gt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,et.width,et.height,et.depth,0,Rt,Gt,et.data);else if(g.isData3DTexture)ee?(ae&&e.texStorage3D(i.TEXTURE_3D,Pt,At,et.width,et.height,et.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Rt,Gt,et.data)):e.texImage3D(i.TEXTURE_3D,0,At,et.width,et.height,et.depth,0,Rt,Gt,et.data);else if(g.isFramebufferTexture){if(ae)if(ee)e.texStorage2D(i.TEXTURE_2D,Pt,At,et.width,et.height);else{let at=et.width,Lt=et.height;for(let Dt=0;Dt<Pt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,At,at,Lt,0,Rt,Gt,null),at>>=1,Lt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),et.parentNode!==at){at.appendChild(et),v.add(g),at.onpaint=Lt=>{let Dt=Lt.changedElements;for(let yt of v)Dt.includes(yt.image)&&(yt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let Dt=i.RGBA,yt=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Dt,yt,Zt,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(jt.length>0){if(ee&&ae){let at=$t(jt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,At,at.width,at.height)}for(let at=0,Lt=jt.length;at<Lt;at++)wt=jt[at],ee?G&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Rt,Gt,wt):e.texImage2D(i.TEXTURE_2D,at,At,Rt,Gt,wt);g.generateMipmaps=!1}else if(ee){if(ae){let at=$t(et);e.texStorage2D(i.TEXTURE_2D,Pt,At,at.width,at.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Gt,et)}else e.texImage2D(i.TEXTURE_2D,0,At,Rt,Gt,et);p(g)&&N($),It.__version=Tt.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function oe(A,g,q){if(g.image.length!==6)return;let $=be(A,g),ft=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);let Tt=n.get(ft);if(ft.version!==Tt.__version||$===!0){e.activeTexture(i.TEXTURE0+q);let It=Ae.getPrimaries(Ae.workingColorSpace),ot=g.colorSpace===Bi?null:Ae.getPrimaries(g.colorSpace),et=g.colorSpace===Bi||It===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Rt=g.isCompressedTexture||g.image[0].isCompressedTexture,Gt=g.image[0]&&g.image[0].isDataTexture,At=[];for(let yt=0;yt<6;yt++)!Rt&&!Gt?At[yt]=y(g.image[yt],!0,s.maxCubemapSize):At[yt]=Gt?g.image[yt].image:g.image[yt],At[yt]=dn(g,At[yt]);let wt=At[0],jt=r.convert(g.format,g.colorSpace),ee=r.convert(g.type),ae=C(g.internalFormat,jt,ee,g.normalized,g.colorSpace),G=g.isVideoTexture!==!0,Pt=Tt.__version===void 0||$===!0,at=ft.dataReady,Lt=L(g,wt);ve(i.TEXTURE_CUBE_MAP,g);let Dt;if(Rt){G&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ae,wt.width,wt.height);for(let yt=0;yt<6;yt++){Dt=At[yt].mipmaps;for(let Zt=0;Zt<Dt.length;Zt++){let Kt=Dt[Zt];g.format!==Zn?jt!==null?G?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Zt,0,0,Kt.width,Kt.height,jt,Kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Zt,ae,Kt.width,Kt.height,0,Kt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Zt,0,0,Kt.width,Kt.height,jt,ee,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Zt,ae,Kt.width,Kt.height,0,jt,ee,Kt.data)}}}else{if(Dt=g.mipmaps,G&&Pt){Dt.length>0&&Lt++;let yt=$t(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ae,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Gt){G?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,At[yt].width,At[yt].height,jt,ee,At[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ae,At[yt].width,At[yt].height,0,jt,ee,At[yt].data);for(let Zt=0;Zt<Dt.length;Zt++){let Fe=Dt[Zt].image[yt].image;G?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Zt+1,0,0,Fe.width,Fe.height,jt,ee,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Zt+1,ae,Fe.width,Fe.height,0,jt,ee,Fe.data)}}else{G?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,jt,ee,At[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ae,jt,ee,At[yt]);for(let Zt=0;Zt<Dt.length;Zt++){let Kt=Dt[Zt];G?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Zt+1,0,0,jt,ee,Kt.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Zt+1,ae,jt,ee,Kt.image[yt])}}}p(g)&&N(i.TEXTURE_CUBE_MAP),Tt.__version=ft.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Xt(A,g,q,$,ft,Tt){let It=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),et=C(q.internalFormat,It,ot,q.normalized,q.colorSpace),Rt=n.get(g),Gt=n.get(q);if(Gt.__renderTarget=g,!Rt.__hasExternalTextures){let At=Math.max(1,g.width>>Tt),wt=Math.max(1,g.height>>Tt);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,Tt,et,At,wt,g.depth,0,It,ot,null):e.texImage2D(ft,Tt,et,At,wt,0,It,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ee(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ft,Gt.__webglTexture,0,ue(g)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ft,Gt.__webglTexture,Tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(A,g,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){let $=g.depthTexture,ft=$&&$.isDepthTexture?$.type:null,Tt=P(g.stencilBuffer,ft),It=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ee(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(g),Tt,g.width,g.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(g),Tt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,A)}else{let $=g.textures;for(let ft=0;ft<$.length;ft++){let Tt=$[ft],It=r.convert(Tt.format,Tt.colorSpace),ot=r.convert(Tt.type),et=C(Tt.internalFormat,It,ot,Tt.normalized,Tt.colorSpace);Ee(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(g),et,g.width,g.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(g),et,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,et,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ze(A,g,q){let $=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ft=n.get(g.depthTexture);if(ft.__renderTarget=g,(!ft.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,g.depthTexture.addEventListener("dispose",O)),ft.__webglTexture===void 0){ft.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),ve(i.TEXTURE_CUBE_MAP,g.depthTexture);let Rt=r.convert(g.depthTexture.format),Gt=r.convert(g.depthTexture.type),At;g.depthTexture.format===gi?At=i.DEPTH_COMPONENT24:g.depthTexture.format===cs&&(At=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,At,g.width,g.height,0,Rt,Gt,null)}}else gt(g.depthTexture,0);let Tt=ft.__webglTexture,It=ue(g),ot=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,et=g.depthTexture.format===cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===gi)Ee(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ot,Tt,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,et,ot,Tt,0);else if(g.depthTexture.format===cs)Ee(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ot,Tt,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,et,ot,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(A){let g=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){let ft=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",ft)};$.addEventListener("dispose",ft),g.__depthDisposeCallback=ft}g.__boundDepthTexture=$}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(q)for(let $=0;$<6;$++)Ze(g.__webglFramebuffer[$],A,$);else{let $=A.texture.mipmaps;$&&$.length>0?Ze(g.__webglFramebuffer[0],A,0):Ze(g.__webglFramebuffer,A,0)}else if(q){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=i.createRenderbuffer(),fe(g.__webglDepthbuffer[$],A,!1);else{let ft=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=g.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,Tt)}}else{let $=A.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),fe(g.__webglDepthbuffer,A,!1);else{let ft=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,Tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(A,g,q){let $=n.get(A);g!==void 0&&Xt($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&pe(A)}function Ve(A){let g=A.texture,q=n.get(A),$=n.get(g);A.addEventListener("dispose",T);let ft=A.textures,Tt=A.isWebGLCubeRenderTarget===!0,It=ft.length>1;if(It||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=g.version,o.memory.textures++),Tt){q.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(g.mipmaps&&g.mipmaps.length>0){q.__webglFramebuffer[ot]=[];for(let et=0;et<g.mipmaps.length;et++)q.__webglFramebuffer[ot][et]=i.createFramebuffer()}else q.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){q.__webglFramebuffer=[];for(let ot=0;ot<g.mipmaps.length;ot++)q.__webglFramebuffer[ot]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(It)for(let ot=0,et=ft.length;ot<et;ot++){let Rt=n.get(ft[ot]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ee(A)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ot=0;ot<ft.length;ot++){let et=ft[ot];q.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ot]);let Rt=r.convert(et.format,et.colorSpace),Gt=r.convert(et.type),At=C(et.internalFormat,Rt,Gt,et.normalized,et.colorSpace,A.isXRRenderTarget===!0),wt=ue(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,At,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,q.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Tt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ve(i.TEXTURE_CUBE_MAP,g);for(let ot=0;ot<6;ot++)if(g.mipmaps&&g.mipmaps.length>0)for(let et=0;et<g.mipmaps.length;et++)Xt(q.__webglFramebuffer[ot][et],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,et);else Xt(q.__webglFramebuffer[ot],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(g)&&N(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ot=0,et=ft.length;ot<et;ot++){let Rt=ft[ot],Gt=n.get(Rt),At=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(At=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Gt.__webglTexture),ve(At,Rt),Xt(q.__webglFramebuffer,A,Rt,i.COLOR_ATTACHMENT0+ot,At,0),p(Rt)&&N(At)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),ve(ot,g),g.mipmaps&&g.mipmaps.length>0)for(let et=0;et<g.mipmaps.length;et++)Xt(q.__webglFramebuffer[et],A,g,i.COLOR_ATTACHMENT0,ot,et);else Xt(q.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,ot,0);p(g)&&N(ot),e.unbindTexture()}A.depthBuffer&&pe(A)}function _e(A){let g=A.textures;for(let q=0,$=g.length;q<$;q++){let ft=g[q];if(p(ft)){let Tt=k(A),It=n.get(ft).__webglTexture;e.bindTexture(Tt,It),N(Tt),e.unbindTexture()}}}let ye=[],xe=[];function mn(A){if(A.samples>0){if(Ee(A)===!1){let g=A.textures,q=A.width,$=A.height,ft=i.COLOR_BUFFER_BIT,Tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(A),ot=g.length>1;if(ot)for(let Rt=0;Rt<g.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let et=A.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Rt=0;Rt<g.length;Rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);let Gt=n.get(g[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,q,$,0,0,q,$,ft,i.NEAREST),u===!0&&(ye.length=0,xe.length=0,ye.push(i.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ye.push(Tt),xe.push(Tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let Rt=0;Rt<g.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);let Gt=n.get(g[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&u){let g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ue(A){return Math.min(s.maxSamples,A.samples)}function Ee(A){let g=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function W(A){let g=o.render.frame;m.get(A)!==g&&(m.set(A,g),A.update())}function dn(A,g){let q=A.colorSpace,$=A.format,ft=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==aa&&q!==Bi&&(Ae.getTransfer(q)===ze?($!==Zn||ft!==Dn)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",q)),g}function $t(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=dt,this.resetTextureUnits=it,this.getTextureUnits=z,this.setTextureUnits=j,this.setTexture2D=gt,this.setTexture2DArray=tt,this.setTexture3D=ht,this.setTextureCube=ut,this.rebindTextures=Ie,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Px(i,t){function e(n,s=Bi){let r,o=Ae.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return i.BYTE;if(n===Ah)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ph)return i.RGB;if(n===Zn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===wr)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===La||n===Da||n===Na||n===Ua)if(o===ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===Sl||n===bl||n===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Al||n===El||n===Cl||n===Rl||n===Fa||n===Pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===Al)return o===ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cl)return r.COMPRESSED_R11_EAC;if(n===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fa)return r.COMPRESSED_RG11_EAC;if(n===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Il||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Il)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nl)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vl)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===ql||n===Yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xl)return o===ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jl||n===Zl||n===Oa||n===Kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
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

}`,$h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new va(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Cn({vertexShader:Ix,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sn(new ya(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jh=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,o=null,c="local-floor",u=1,h=null,m=null,v=null,f=null,M=null,S=null,R=typeof XRWebGLBinding<"u",y=new $h,p={},N=e.getContextAttributes(),k=null,C=null,P=[],L=[],O=new Pe,T=null,D=null,H=new yn;H.viewport=new Ye;let X=new yn;X.viewport=new Ye;let K=[H,X],it=new hl,z=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let _t=P[ct];return _t===void 0&&(_t=new _r,P[ct]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(ct){let _t=P[ct];return _t===void 0&&(_t=new _r,P[ct]=_t),_t.getGripSpace()},this.getHand=function(ct){let _t=P[ct];return _t===void 0&&(_t=new _r,P[ct]=_t),_t.getHandSpace()};function dt(ct){let _t=L.indexOf(ct.inputSource);if(_t===-1)return;let Vt=P[_t];Vt!==void 0&&(Vt.update(ct.inputSource,ct.frame,h||o),Vt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function rt(){s.removeEventListener("select",dt),s.removeEventListener("selectstart",dt),s.removeEventListener("selectend",dt),s.removeEventListener("squeeze",dt),s.removeEventListener("squeezestart",dt),s.removeEventListener("squeezeend",dt),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",gt);for(let ct=0;ct<P.length;ct++){let _t=L[ct];_t!==null&&(L[ct]=null,P[ct].disconnect(_t))}z=null,j=null,y.reset();for(let ct in p)delete p[ct];if(t.setRenderTarget(k),M=null,f=null,v=null,s=null,C=null,be.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(O.width,O.height,!1),D!==null){let ct=D.camera;ct.fov=D.fov,ct.zoom=D.zoom,ct.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){r=ct,n.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){c=ct,n.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(ct){h=ct},this.getBaseLayer=function(){return f!==null?f:M},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(k=t.getRenderTarget(),s.addEventListener("select",dt),s.addEventListener("selectstart",dt),s.addEventListener("selectend",dt),s.addEventListener("squeeze",dt),s.addEventListener("squeezestart",dt),s.addEventListener("squeezeend",dt),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",gt),N.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Vt=null,oe=null,Xt=null;N.depth&&(Xt=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Vt=N.stencil?cs:gi,oe=N.stencil?Tr:ri);let fe={colorFormat:e.RGBA8,depthFormat:Xt,scaleFactor:r};v=this.getBinding(),f=v.createProjectionLayer(fe),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),C=new Ln(f.textureWidth,f.textureHeight,{format:Zn,type:Dn,depthTexture:new ns(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Vt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Vt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:r};M=new XRWebGLLayer(s,e,Vt),s.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Ln(M.framebufferWidth,M.framebufferHeight,{format:Zn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await s.requestReferenceSpace(c),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function gt(ct){for(let _t=0;_t<ct.removed.length;_t++){let Vt=ct.removed[_t],oe=L.indexOf(Vt);oe>=0&&(L[oe]=null,P[oe].disconnect(Vt))}for(let _t=0;_t<ct.added.length;_t++){let Vt=ct.added[_t],oe=L.indexOf(Vt);if(oe===-1){for(let fe=0;fe<P.length;fe++)if(fe>=L.length){L.push(Vt),oe=fe;break}else if(L[fe]===null){L[fe]=Vt,oe=fe;break}if(oe===-1)break}let Xt=P[oe];Xt&&Xt.connect(Vt)}}let tt=new Q,ht=new Q;function ut(ct,_t,Vt){tt.setFromMatrixPosition(_t.matrixWorld),ht.setFromMatrixPosition(Vt.matrixWorld);let oe=tt.distanceTo(ht),Xt=_t.projectionMatrix.elements,fe=Vt.projectionMatrix.elements,Ze=Xt[14]/(Xt[10]-1),pe=Xt[14]/(Xt[10]+1),Ie=(Xt[9]+1)/Xt[5],Ve=(Xt[9]-1)/Xt[5],_e=(Xt[8]-1)/Xt[0],ye=(fe[8]+1)/fe[0],xe=Ze*_e,mn=Ze*ye,ue=oe/(-_e+ye),Ee=ue*-_e;if(_t.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(Ee),ct.translateZ(ue),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Xt[10]===-1)ct.projectionMatrix.copy(_t.projectionMatrix),ct.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{let W=Ze+ue,dn=pe+ue,$t=xe-Ee,A=mn+(oe-Ee),g=Ie*pe/dn*W,q=Ve*pe/dn*W;ct.projectionMatrix.makePerspective($t,A,g,q,W,dn),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function kt(ct,_t){_t===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(_t.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let _t=ct.near,Vt=ct.far;y.texture!==null&&(y.depthNear>0&&(_t=y.depthNear),y.depthFar>0&&(Vt=y.depthFar)),it.near=X.near=H.near=_t,it.far=X.far=H.far=Vt,(z!==it.near||j!==it.far)&&(s.updateRenderState({depthNear:it.near,depthFar:it.far}),z=it.near,j=it.far),it.layers.mask=ct.layers.mask|6,H.layers.mask=it.layers.mask&-5,X.layers.mask=it.layers.mask&-3;let oe=ct.parent,Xt=it.cameras;kt(it,oe);for(let fe=0;fe<Xt.length;fe++)kt(Xt[fe],oe);Xt.length===2?ut(it,H,X):it.projectionMatrix.copy(H.projectionMatrix),D===null&&ct.isPerspectiveCamera&&(D={camera:ct,fov:ct.fov,zoom:ct.zoom}),Yt(ct,it,oe)};function Yt(ct,_t,Vt){Vt===null?ct.matrix.copy(_t.matrixWorld):(ct.matrix.copy(Vt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(_t.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(_t.projectionMatrix),ct.projectionMatrixInverse.copy(_t.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Ho*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(f===null&&M===null))return u},this.setFoveation=function(ct){u=ct,f!==null&&(f.fixedFoveation=ct),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ct)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(it)},this.getCameraTexture=function(ct){return p[ct]};let Se=null;function ve(ct,_t){if(m=_t.getViewerPose(h||o),S=_t,m!==null){let Vt=m.views;M!==null&&(t.setRenderTargetFramebuffer(C,M.framebuffer),t.setRenderTarget(C));let oe=!1;Vt.length!==it.cameras.length&&(it.cameras.length=0,oe=!0);for(let pe=0;pe<Vt.length;pe++){let Ie=Vt[pe],Ve=null;if(M!==null)Ve=M.getViewport(Ie);else{let ye=v.getViewSubImage(f,Ie);Ve=ye.viewport,pe===0&&(t.setRenderTargetTextures(C,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(C))}let _e=K[pe];_e===void 0&&(_e=new yn,_e.layers.enable(pe),_e.viewport=new Ye,K[pe]=_e),_e.matrix.fromArray(Ie.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Ie.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),pe===0&&(it.matrix.copy(_e.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),oe===!0&&it.cameras.push(_e)}let Xt=s.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&R){v=n.getBinding();let pe=v.getDepthInformation(Vt[0]);pe&&pe.isValid&&pe.texture&&y.init(pe,s.renderState)}if(Xt&&Xt.includes("camera-access")&&R){t.state.unbindTexture(),v=n.getBinding();for(let pe=0;pe<Vt.length;pe++){let Ie=Vt[pe].camera;if(Ie){let Ve=p[Ie];Ve||(Ve=new va,p[Ie]=Ve);let _e=v.getCameraImage(Ie);Ve.sourceTexture=_e}}}}for(let Vt=0;Vt<P.length;Vt++){let oe=L[Vt],Xt=P[Vt];oe!==null&&Xt!==void 0&&Xt.update(oe,_t,h||o)}Se&&Se(ct,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),S=null}let be=new df;be.setAnimationLoop(ve),this.setAnimationLoop=function(ct){Se=ct},this.dispose=function(){}}},Dx=new He,xf=new ce;xf.set(-1,0,0,0,1,0,0,0,1);function Nx(i,t){function e(y,p){y.matrixAutoUpdate===!0&&y.updateMatrix(),p.value.copy(y.matrix)}function n(y,p){p.color.getRGB(y.fogColor.value,Nh(i)),p.isFog?(y.fogNear.value=p.near,y.fogFar.value=p.far):p.isFogExp2&&(y.fogDensity.value=p.density)}function s(y,p,N,k,C){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(y,p):p.isMeshLambertMaterial?(r(y,p),p.envMap&&(y.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(y,p),v(y,p)):p.isMeshPhongMaterial?(r(y,p),m(y,p),p.envMap&&(y.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(y,p),f(y,p),p.isMeshPhysicalMaterial&&M(y,p,C)):p.isMeshMatcapMaterial?(r(y,p),S(y,p)):p.isMeshDepthMaterial?r(y,p):p.isMeshDistanceMaterial?(r(y,p),R(y,p)):p.isMeshNormalMaterial?r(y,p):p.isLineBasicMaterial?(o(y,p),p.isLineDashedMaterial&&c(y,p)):p.isPointsMaterial?u(y,p,N,k):p.isSpriteMaterial?h(y,p):p.isShadowMaterial?(y.color.value.copy(p.color),y.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(y,p){y.opacity.value=p.opacity,p.color&&y.diffuse.value.copy(p.color),p.emissive&&y.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(y.map.value=p.map,e(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.bumpMap&&(y.bumpMap.value=p.bumpMap,e(p.bumpMap,y.bumpMapTransform),y.bumpScale.value=p.bumpScale,p.side===pn&&(y.bumpScale.value*=-1)),p.normalMap&&(y.normalMap.value=p.normalMap,e(p.normalMap,y.normalMapTransform),y.normalScale.value.copy(p.normalScale),p.side===pn&&y.normalScale.value.negate()),p.displacementMap&&(y.displacementMap.value=p.displacementMap,e(p.displacementMap,y.displacementMapTransform),y.displacementScale.value=p.displacementScale,y.displacementBias.value=p.displacementBias),p.emissiveMap&&(y.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,y.emissiveMapTransform)),p.specularMap&&(y.specularMap.value=p.specularMap,e(p.specularMap,y.specularMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest);let N=t.get(p),k=N.envMap,C=N.envMapRotation;k&&(y.envMap.value=k,y.envMapRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(C)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(xf),y.reflectivity.value=p.reflectivity,y.ior.value=p.ior,y.refractionRatio.value=p.refractionRatio),p.lightMap&&(y.lightMap.value=p.lightMap,y.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,y.lightMapTransform)),p.aoMap&&(y.aoMap.value=p.aoMap,y.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,y.aoMapTransform))}function o(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,p.map&&(y.map.value=p.map,e(p.map,y.mapTransform))}function c(y,p){y.dashSize.value=p.dashSize,y.totalSize.value=p.dashSize+p.gapSize,y.scale.value=p.scale}function u(y,p,N,k){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.size.value=p.size*N,y.scale.value=k*.5,p.map&&(y.map.value=p.map,e(p.map,y.uvTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function h(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.rotation.value=p.rotation,p.map&&(y.map.value=p.map,e(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function m(y,p){y.specular.value.copy(p.specular),y.shininess.value=Math.max(p.shininess,1e-4)}function v(y,p){p.gradientMap&&(y.gradientMap.value=p.gradientMap)}function f(y,p){y.metalness.value=p.metalness,p.metalnessMap&&(y.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,y.metalnessMapTransform)),y.roughness.value=p.roughness,p.roughnessMap&&(y.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,y.roughnessMapTransform)),p.envMap&&(y.envMapIntensity.value=p.envMapIntensity)}function M(y,p,N){y.ior.value=p.ior,p.sheen>0&&(y.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),y.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(y.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,y.sheenColorMapTransform)),p.sheenRoughnessMap&&(y.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,y.sheenRoughnessMapTransform))),p.clearcoat>0&&(y.clearcoat.value=p.clearcoat,y.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(y.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,y.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(y.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&y.clearcoatNormalScale.value.negate())),p.dispersion>0&&(y.dispersion.value=p.dispersion),p.retroreflectivity>0&&(y.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(y.iridescence.value=p.iridescence,y.iridescenceIOR.value=p.iridescenceIOR,y.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(y.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,y.iridescenceMapTransform)),p.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),p.transmission>0&&(y.transmission.value=p.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),p.transmissionMap&&(y.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,y.transmissionMapTransform)),y.thickness.value=p.thickness,p.thicknessMap&&(y.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=p.attenuationDistance,y.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(y.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(y.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=p.specularIntensity,y.specularColor.value.copy(p.specularColor),p.specularColorMap&&(y.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,y.specularColorMapTransform)),p.specularIntensityMap&&(y.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,p){p.matcap&&(y.matcap.value=p.matcap)}function R(y,p){let N=t.get(p).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ux(i,t,e,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(C,P){let L=P.program;n.uniformBlockBinding(C,L)}function h(C,P){let L=s[C.id];L===void 0&&(y(C),L=m(C),s[C.id]=L,C.addEventListener("dispose",N));let O=P.program;n.updateUBOMapping(C,O);let T=t.render.frame;r[C.id]!==T&&(f(C),r[C.id]=T)}function m(C){let P=v();C.__bindingPointIndex=P;let L=i.createBuffer(),O=C.__size,T=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,O,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,L),L}function v(){for(let C=0;C<c;C++)if(o.indexOf(C)===-1)return o.push(C),C;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){let P=s[C.id],L=C.uniforms,O=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let T=0,D=L.length;T<D;T++){let H=L[T];if(Array.isArray(H))for(let X=0,K=H.length;X<K;X++)M(H[X],T,X,O);else M(H,T,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(C,P,L,O){if(R(C,P,L,O)===!0){let T=C.__offset,D=C.value;if(Array.isArray(D)){let H=0;for(let X=0;X<D.length;X++){let K=D[X],it=p(K);S(K,C.__data,H),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(D,C.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,C.__data)}}function S(C,P,L){typeof C=="number"||typeof C=="boolean"?P[0]=C:C.isMatrix3?(P[0]=C.elements[0],P[1]=C.elements[1],P[2]=C.elements[2],P[3]=0,P[4]=C.elements[3],P[5]=C.elements[4],P[6]=C.elements[5],P[7]=0,P[8]=C.elements[6],P[9]=C.elements[7],P[10]=C.elements[8],P[11]=0):ArrayBuffer.isView(C)?P.set(new C.constructor(C.buffer,C.byteOffset,P.length)):C.toArray(P,L)}function R(C,P,L,O){let T=C.value,D=P+"_"+L;if(O[D]===void 0)return typeof T=="number"||typeof T=="boolean"?O[D]=T:ArrayBuffer.isView(T)?O[D]=T.slice():O[D]=T.clone(),!0;{let H=O[D];if(typeof T=="number"||typeof T=="boolean"){if(H!==T)return O[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(H.equals(T)===!1)return H.copy(T),!0}}return!1}function y(C){let P=C.uniforms,L=0,O=16;for(let D=0,H=P.length;D<H;D++){let X=Array.isArray(P[D])?P[D]:[P[D]];for(let K=0,it=X.length;K<it;K++){let z=X[K],j=Array.isArray(z.value)?z.value:[z.value];for(let dt=0,rt=j.length;dt<rt;dt++){let gt=j[dt],tt=p(gt),ht=L%O,ut=ht%tt.boundary,kt=ht+ut;L+=ut,kt!==0&&O-kt<tt.storage&&(L+=O-kt),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=L,L+=tt.storage}}}let T=L%O;return T>0&&(L+=O-T),C.__size=L,C.__cache={},this}function p(C){let P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",C),P}function N(C){let P=C.target;P.removeEventListener("dispose",N);let L=o.indexOf(P.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}function k(){for(let C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:u,update:h,dispose:k}}var Fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function Ox(){return Si===null&&(Si=new Rs(Fx,16,16,hs,ai),Si.name="DFG_LUT",Si.minFilter=fn,Si.magFilter=fn,Si.wrapS=mi,Si.wrapT=mi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var sc=class{constructor(t={}){let{canvas:e=Fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:f=!1,outputBufferType:M=Dn}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=o;let R=M,y=new Set([yl,vl,xl]),p=new Set([Dn,ri,br,Tr,gl,_l]),N=new Uint32Array(4),k=new Int32Array(4),C=new Q,P=null,L=null,O=[],T=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,X=!1,K=null,it=null,z=null,j=null;this._outputColorSpace=En;let dt=0,rt=0,gt=null,tt=-1,ht=null,ut=new Ye,kt=new Ye,Yt=null,Se=new de(0),ve=0,be=e.width,ct=e.height,_t=1,Vt=null,oe=null,Xt=new Ye(0,0,be,ct),fe=new Ye(0,0,be,ct),Ze=!1,pe=new xr,Ie=!1,Ve=!1,_e=new He,ye=new Q,xe=new Ye,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function Ee(){return gt===null?_t:1}let W=n;function dn(w,V){return e.getContext(w,V)}let $t,A,g,q,$,ft,Tt,It,ot,et,Rt,Gt,At,wt,jt,ee,ae,G,Pt,at,Lt,Dt,yt;try{let w={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Ue,!1),e.addEventListener("webglcontextcreationerror",Tn,!1),W===null){let V="webgl2";if(W=dn(V,w),W===null)throw dn(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(w){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Ue,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),re("WebGLRenderer: "+w.message),w}function Zt(){$t=new Wg(W),$t.init(),Lt=new Px(W,$t),A=new Ng(W,$t,t,Lt),g=new Cx(W,$t),A.reversedDepthBuffer&&f&&g.buffers.depth.setReversed(!0),it=W.createFramebuffer(),z=W.createFramebuffer(),j=W.createFramebuffer(),q=new Yg(W),$=new px,ft=new Rx(W,$t,g,$,A,Lt,q),Tt=new Hg(H),It=new Zp(W),Dt=new Lg(W,It),ot=new Xg(W,It,q,Dt),et=new Zg(W,ot,It,Dt,q),G=new Jg(W,A,ft),jt=new Ug($),Rt=new fx(H,Tt,$t,A,Dt,jt),Gt=new Nx(H,$),At=new gx,wt=new Sx($t),ae=new Ig(H,Tt,g,et,S,u),ee=new Ex(H,et,A),yt=new Ux(W,q,A,g),Pt=new Dg(W,$t,q),at=new qg(W,$t,q),q.programs=Rt.programs,H.capabilities=A,H.extensions=$t,H.properties=$,H.renderLists=At,H.shadowMap=ee,H.state=g,H.info=q}R!==Dn&&(D=new $g(R,e.width,e.height,c,s,r));let Kt=new jh(H,W);this.xr=Kt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let w=$t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=$t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(be,ct,!1))},this.getSize=function(w){return w.set(be,ct)},this.setSize=function(w,V,st=!0){if(Kt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}be=w,ct=V,e.width=Math.floor(w*_t),e.height=Math.floor(V*_t),st===!0&&(e.style.width=w+"px",e.style.height=V+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(be*_t,ct*_t).floor()},this.setDrawingBufferSize=function(w,V,st){be=w,ct=V,_t=st,e.width=Math.floor(w*st),e.height=Math.floor(V*st),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(R===Dn){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ut)},this.getViewport=function(w){return w.copy(Xt)},this.setViewport=function(w,V,st,Z){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,V,st,Z),g.viewport(ut.copy(Xt).multiplyScalar(_t).round())},this.getScissor=function(w){return w.copy(fe)},this.setScissor=function(w,V,st,Z){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,V,st,Z),g.scissor(kt.copy(fe).multiplyScalar(_t).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(w){g.setScissorTest(Ze=w)},this.setOpaqueSort=function(w){Vt=w},this.setTransparentSort=function(w){oe=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,st=!0){let Z=0;if(w){let Y=!1;if(gt!==null){let Ct=gt.texture.format;Y=y.has(Ct)}if(Y){let Ct=gt.texture.type,Ht=p.has(Ct),Ut=ae.getClearColor(),Jt=ae.getClearAlpha(),qt=Ut.r,le=Ut.g,ge=Ut.b;Ht?(N[0]=qt,N[1]=le,N[2]=ge,N[3]=Jt,W.clearBufferuiv(W.COLOR,0,N)):(k[0]=qt,k[1]=le,k[2]=ge,k[3]=Jt,W.clearBufferiv(W.COLOR,0,k))}else Z|=W.COLOR_BUFFER_BIT}V&&(Z|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(Z|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&W.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),K=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Ue,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),ae.dispose(),At.dispose(),wt.dispose(),$.dispose(),Tt.dispose(),et.dispose(),Dt.dispose(),yt.dispose(),Rt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Fs),Kt.removeEventListener("sessionend",Pr),oi.stop()};function Fe(w){w.preventDefault(),Dh("WebGLRenderer: Context Lost."),X=!0}function Ue(){Dh("WebGLRenderer: Context Restored."),X=!1;let w=q.autoReset,V=ee.enabled,st=ee.autoUpdate,Z=ee.needsUpdate,Y=ee.type;Zt(),q.autoReset=w,ee.enabled=V,ee.autoUpdate=st,ee.needsUpdate=Z,ee.type=Y}function Tn(w){re("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kn(w){let V=w.target;V.removeEventListener("dispose",kn),Ns(V)}function Ns(w){oc(w),$.remove(w)}function oc(w){let V=$.get(w).programs;V!==void 0&&(V.forEach(function(st){Rt.releaseProgram(st)}),w.isShaderMaterial&&Rt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,st,Z,Y,Ct){V===null&&(V=mn);let Ht=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ut=De(w,V,st,Z,Y);g.setMaterial(Z,Ht);let Jt=st.index,qt=1;if(Z.wireframe===!0){if(Jt=ot.getWireframeAttribute(st),Jt===void 0)return;qt=2}let le=st.drawRange,ge=st.attributes.position,Bt=le.start*qt,Ce=(le.start+le.count)*qt;Ct!==null&&(Bt=Math.max(Bt,Ct.start*qt),Ce=Math.min(Ce,(Ct.start+Ct.count)*qt)),Jt!==null?(Bt=Math.max(Bt,0),Ce=Math.min(Ce,Jt.count)):ge!=null&&(Bt=Math.max(Bt,0),Ce=Math.min(Ce,ge.count));let qe=Ce-Bt;if(qe<0||qe===1/0)return;Dt.setup(Y,Z,Ut,st,Jt);let We,Oe=Pt;if(Jt!==null&&(We=It.get(Jt),Oe=at,Oe.setIndex(We)),Y.isMesh)Z.wireframe===!0?(g.setLineWidth(Z.wireframeLinewidth*Ee()),Oe.setMode(W.LINES)):Oe.setMode(W.TRIANGLES);else if(Y.isLine){let en=Z.linewidth;en===void 0&&(en=1),g.setLineWidth(en*Ee()),Y.isLineSegments?Oe.setMode(W.LINES):Y.isLineLoop?Oe.setMode(W.LINE_LOOP):Oe.setMode(W.LINE_STRIP)}else Y.isPoints?Oe.setMode(W.POINTS):Y.isSprite&&Oe.setMode(W.TRIANGLES);if(Y.isBatchedMesh)if($t.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let en=Y._multiDrawStarts,Wt=Y._multiDrawCounts,nn=Y._multiDrawCount,Te=Jt?It.get(Jt).bytesPerElement:1,ln=$.get(Z).currentProgram.getUniforms();for(let Gn=0;Gn<nn;Gn++)ln.setValue(W,"_gl_DrawID",Gn),Oe.render(en[Gn]/Te,Wt[Gn])}else if(Y.isInstancedMesh)Oe.renderInstances(Bt,qe,Y.count);else if(st.isInstancedBufferGeometry){let en=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Wt=Math.min(st.instanceCount,en);Oe.renderInstances(Bt,qe,Wt)}else Oe.render(Bt,qe)};function Us(w,V,st,Z){K!==null&&w.isNodeMaterial&&K.setObject(Z,w),Ie===!0&&jt.setState(w,st,!1),w.transparent===!0&&w.side===yi&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,Ke(w,V,Z),w.side=as,w.needsUpdate=!0,Ke(w,V,Z),w.side=yi):Ke(w,V,Z)}this.compile=function(w,V,st=null){st===null&&(st=w),K!==null&&K.renderStart(w,V,st),L=wt.get(st),L.init(V),T.push(L),st.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(L.pushLight(Y),Y.castShadow&&L.pushShadow(Y))}),w!==st&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(L.pushLight(Y),Y.castShadow&&L.pushShadow(Y))}),L.setupLights(),K!==null&&K.updateLights(L.state.lightsArray),Ve=this.localClippingEnabled,Ie=jt.init(this.clippingPlanes,Ve),Ie===!0&&jt.setGlobalState(this.clippingPlanes,V),K!==null&&ee.render(L.state.shadowsArray,st,V);let Z=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ct=Y.material;if(Ct)if(Array.isArray(Ct))for(let Ht=0;Ht<Ct.length;Ht++){let Ut=Ct[Ht];Us(Ut,st,V,Y),Z.add(Ut)}else Us(Ct,st,V,Y),Z.add(Ct)}),L=T.pop(),K!==null&&K.renderEnd(),Z},this.compileAsync=function(w,V,st=null){let Z=this.compile(w,V,st);return new Promise(Y=>{function Ct(){if(Z.forEach(function(Ht){let Jt=$.get(Ht).currentProgram;(Jt===void 0||Jt.isReady())&&Z.delete(Ht)}),Z.size===0){Y(w);return}setTimeout(Ct,10)}$t.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let us=null;function Ti(w){us&&us(w)}function Fs(){oi.stop()}function Pr(){oi.start()}let oi=new df;oi.setAnimationLoop(Ti),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(w){us=w,Kt.setAnimationLoop(w),w===null?oi.stop():oi.start()},Kt.addEventListener("sessionstart",Fs),Kt.addEventListener("sessionend",Pr),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;K!==null&&K.renderStart(w,V);let st=Kt.enabled===!0&&Kt.isPresenting===!0,Z=D!==null&&(gt===null||st)&&D.begin(H,gt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(V),V=Kt.getCamera()),w.isScene===!0&&w.onBeforeRender(H,w,V,gt),L=wt.get(w,T.length),L.init(V),L.state.textureUnits=ft.getTextureUnits(),T.push(L),_e.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),pe.setFromProjectionMatrix(_e,ii,V.reversedDepth),Ve=this.localClippingEnabled,Ie=jt.init(this.clippingPlanes,Ve),P=At.get(w,O.length),P.init(),O.push(P),Kt.enabled===!0&&Kt.isPresenting===!0){let Ht=H.xr.getDepthSensingMesh();Ht!==null&&Ir(Ht,V,-1/0,H.sortObjects)}Ir(w,V,0,H.sortObjects),P.finish(),K!==null&&K.updateLights(L.state.lightsArray),H.sortObjects===!0&&P.sort(Vt,oe),ue=Kt.enabled===!1||Kt.isPresenting===!1||Kt.hasDepthSensing()===!1,ue&&ae.addToRenderList(P,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ie===!0&&jt.beginShadows();let Y=L.state.shadowsArray;if(ee.render(Y,w,V),Ie===!0&&jt.endShadows(),(Z&&D.hasRenderPass())===!1){let Ht=P.opaque,Ut=P.transmissive;if(L.setupLights(),V.isArrayCamera){let Jt=V.cameras;if(Ut.length>0)for(let qt=0,le=Jt.length;qt<le;qt++){let ge=Jt[qt];ds(Ht,Ut,w,ge)}ue&&ae.render(w);for(let qt=0,le=Jt.length;qt<le;qt++){let ge=Jt[qt];Ga(P,w,ge,ge.viewport)}}else Ut.length>0&&ds(Ht,Ut,w,V),ue&&ae.render(w),Ga(P,w,V)}gt!==null&&rt===0&&(ft.updateMultisampleRenderTarget(gt),ft.updateRenderTargetMipmap(gt)),Z&&D.end(H),w.isScene===!0&&w.onAfterRender(H,w,V),Dt.resetDefaultState(),tt=-1,ht=null,T.pop(),T.length>0?(L=T[T.length-1],ft.setTextureUnits(L.state.textureUnits),Ie===!0&&jt.setGlobalState(H.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?P=O[O.length-1]:P=null,K!==null&&K.renderEnd()};function Ir(w,V,st,Z){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)st=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(pe)){Z&&xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);let Ht=et.update(w),Ut=w.material;Ut.visible&&P.push(w,Ht,Ut,st,xe.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(pe))){let Ht=et.update(w),Ut=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xe.copy(w.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),xe.copy(Ht.boundingSphere.center)),xe.applyMatrix4(w.matrixWorld).applyMatrix4(_e)),Array.isArray(Ut)){let Jt=Ht.groups;for(let qt=0,le=Jt.length;qt<le;qt++){let ge=Jt[qt],Bt=Ut[ge.materialIndex];Bt&&Bt.visible&&P.push(w,Ht,Bt,st,xe.z,ge,V)}}else Ut.visible&&P.push(w,Ht,Ut,st,xe.z,null,V)}}let Ct=w.children;for(let Ht=0,Ut=Ct.length;Ht<Ut;Ht++)Ir(Ct[Ht],V,st,Z)}function Ga(w,V,st,Z){let{opaque:Y,transmissive:Ct,transparent:Ht}=w;L.setupLightsView(st),Ie===!0&&jt.setGlobalState(H.clippingPlanes,st),Z&&g.viewport(ut.copy(Z)),Y.length>0&&Os(Y,V,st),Ct.length>0&&Os(Ct,V,st),Ht.length>0&&Os(Ht,V,st),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ds(w,V,st,Z){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[Z.id]===void 0){let Bt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[Z.id]=new Ln(1,1,{generateMipmaps:!0,type:Bt?ai:Dn,minFilter:ls,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}let Ct=L.state.transmissionRenderTarget[Z.id],Ht=Z.viewport||ut;Ct.setSize(Ht.z*H.transmissionResolutionScale,Ht.w*H.transmissionResolutionScale);let Ut=H.getRenderTarget(),Jt=H.getActiveCubeFace(),qt=H.getActiveMipmapLevel();H.setRenderTarget(Ct),H.getClearColor(Se),ve=H.getClearAlpha(),ve<1&&H.setClearColor(16777215,.5),H.clear(),ue&&ae.render(st);let le=H.toneMapping;H.toneMapping=si;let ge=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),L.setupLightsView(Z),Ie===!0&&jt.setGlobalState(H.clippingPlanes,Z),Os(w,st,Z),ft.updateMultisampleRenderTarget(Ct),ft.updateRenderTargetMipmap(Ct),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Ce=0,qe=V.length;Ce<qe;Ce++){let We=V[Ce],{object:Oe,geometry:en,material:Wt,group:nn}=We;if(Wt.side===yi&&Oe.layers.test(Z.layers)){let Te=Wt.side;Wt.side=pn,Wt.needsUpdate=!0,te(Oe,st,Z,en,Wt,nn),Wt.side=Te,Wt.needsUpdate=!0,Bt=!0}}Bt===!0&&(ft.updateMultisampleRenderTarget(Ct),ft.updateRenderTargetMipmap(Ct))}H.setRenderTarget(Ut,Jt,qt),H.setClearColor(Se,ve),ge!==void 0&&(Z.viewport=ge),H.toneMapping=le}function Os(w,V,st){let Z=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Ct=w.length;Y<Ct;Y++){let Ht=w[Y],{object:Ut,geometry:Jt,group:qt}=Ht,le=Ht.material;le.allowOverride===!0&&Z!==null&&(le=Z),Ut.layers.test(st.layers)&&te(Ut,V,st,Jt,le,qt)}}function te(w,V,st,Z,Y,Ct){K!==null&&Y.isNodeMaterial&&K.setObject(w,Y),w.onBeforeRender(H,V,st,Z,Y,Ct),w.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(H,V,st,Z,w,Ct),Y.transparent===!0&&Y.side===yi&&Y.forceSinglePass===!1?(Y.side=pn,Y.needsUpdate=!0,H.renderBufferDirect(st,V,Z,Y,w,Ct),Y.side=as,Y.needsUpdate=!0,H.renderBufferDirect(st,V,Z,Y,w,Ct),Y.side=yi):H.renderBufferDirect(st,V,Z,Y,w,Ct),w.onAfterRender(H,V,st,Z,Y,Ct)}function Ke(w,V,st){V.isScene!==!0&&(V=mn);let Z=$.get(w),Y=L.state.lights,Ct=L.state.shadowsArray,Ht=Y.state.version,Ut=Rt.getParameters(w,Y.state,Ct,V,st,L.state.lightProbeGridArray),Jt=Rt.getProgramCacheKey(Ut),qt=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;let le=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=Tt.get(w.envMap||Z.environment,le),Z.envMapRotation=Z.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,qt===void 0&&(w.addEventListener("dispose",kn),qt=new Map,Z.programs=qt);let ge=qt.get(Jt);if(ge!==void 0){if(Z.currentProgram===ge&&Z.lightsStateVersion===Ht)return Vn(w,Ut),ge}else Ut.uniforms=Rt.getUniforms(w),K!==null&&w.isNodeMaterial&&K.build(w,st,Ut),w.onBeforeCompile(Ut,H),ge=Rt.acquireProgram(Ut,Jt),qt.set(Jt,ge),Z.uniforms=Ut.uniforms;let Bt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=jt.uniform),Vn(w,Ut),Z.needsLights=je(w),Z.lightsStateVersion=Ht,Z.needsLights&&(Bt.ambientLightColor.value=Y.state.ambient,Bt.lightProbe.value=Y.state.probe,Bt.sunLights.value=Y.state.sun,Bt.sunLightShadows.value=Y.state.sunShadow,Bt.directionalLights.value=Y.state.directional,Bt.directionalLightShadows.value=Y.state.directionalShadow,Bt.spotLights.value=Y.state.spot,Bt.spotLightShadows.value=Y.state.spotShadow,Bt.rectAreaLights.value=Y.state.rectArea,Bt.ltc_1.value=Y.state.rectAreaLTC1,Bt.ltc_2.value=Y.state.rectAreaLTC2,Bt.pointLights.value=Y.state.point,Bt.pointLightShadows.value=Y.state.pointShadow,Bt.hemisphereLights.value=Y.state.hemi,Bt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Bt.sunShadowCascade.value=Y.state.sunShadowCascade,Bt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Bt.spotLightMatrix.value=Y.state.spotLightMatrix,Bt.spotLightMap.value=Y.state.spotLightMap,Bt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.lightProbeGrid=L.state.lightProbeGridArray.length>0,Z.currentProgram=ge,Z.uniformsList=null,ge}function Lr(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=Cr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Vn(w,V){let st=$.get(w);st.outputColorSpace=V.outputColorSpace,st.batching=V.batching,st.batchingColor=V.batchingColor,st.instancing=V.instancing,st.instancingColor=V.instancingColor,st.instancingMorph=V.instancingMorph,st.skinning=V.skinning,st.morphTargets=V.morphTargets,st.morphNormals=V.morphNormals,st.morphColors=V.morphColors,st.morphTargetsCount=V.morphTargetsCount,st.numClippingPlanes=V.numClippingPlanes,st.numIntersection=V.numClipIntersection,st.vertexAlphas=V.vertexAlphas,st.vertexTangents=V.vertexTangents,st.toneMapping=V.toneMapping}function gn(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;C.setFromMatrixPosition(V.matrixWorld);for(let st=0,Z=w.length;st<Z;st++){let Y=w[st];if(Y.texture!==null&&Y.boundingBox.containsPoint(C))return Y}return null}function De(w,V,st,Z,Y){V.isScene!==!0&&(V=mn),ft.resetTextureUnits();let Ct=V.fog,Ht=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,Ut=gt===null?H.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Ae.workingColorSpace,Jt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,qt=Tt.get(Z.envMap||Ht,Jt),le=Z.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ge=!!st.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Bt=!!st.morphAttributes.position,Ce=!!st.morphAttributes.normal,qe=!!st.morphAttributes.color,We=si;Z.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(We=H.toneMapping);let Oe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,en=Oe!==void 0?Oe.length:0,Wt=$.get(Z),nn=L.state.lights;if(Ie===!0&&(Ve===!0||w!==ht)){let Ge=w===ht&&Z.id===tt;jt.setState(Z,w,Ge)}let Te=!1;Z.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==nn.state.version||Wt.outputColorSpace!==Ut||Y.isBatchedMesh&&Wt.batching===!1||!Y.isBatchedMesh&&Wt.batching===!0||Y.isBatchedMesh&&Wt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Wt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Wt.instancing===!1||!Y.isInstancedMesh&&Wt.instancing===!0||Y.isSkinnedMesh&&Wt.skinning===!1||!Y.isSkinnedMesh&&Wt.skinning===!0||Y.isInstancedMesh&&Wt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Wt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Wt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Wt.instancingMorph===!1&&Y.morphTexture!==null||Wt.envMap!==qt||Z.fog===!0&&Wt.fog!==Ct||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==jt.numPlanes||Wt.numIntersection!==jt.numIntersection)||Wt.vertexAlphas!==le||Wt.vertexTangents!==ge||Wt.morphTargets!==Bt||Wt.morphNormals!==Ce||Wt.morphColors!==qe||Wt.toneMapping!==We||Wt.morphTargetsCount!==en||!!Wt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Te=!0):(Te=!0,Wt.__version=Z.version);let ln=Wt.currentProgram;Te===!0&&(ln=Ke(Z,V,Y),K&&Z.isNodeMaterial&&K.onUpdateProgram(Z,ln,Wt));let Gn=!1,li=!1,zi=!1,Be=ln.getUniforms(),Je=Wt.uniforms;if(g.useProgram(ln.program)&&(Gn=!0,li=!0,zi=!0),Z.id!==tt&&(tt=Z.id,li=!0),Wt.needsLights){let Ge=gn(L.state.lightProbeGridArray,Y);Wt.lightProbeGrid!==Ge&&(Wt.lightProbeGrid=Ge,li=!0)}if(Gn||ht!==w){g.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Be.setValue(W,"projectionMatrix",w.projectionMatrix),Be.setValue(W,"viewMatrix",w.matrixWorldInverse);let hi=Be.map.cameraPosition;hi!==void 0&&hi.setValue(W,ye.setFromMatrixPosition(w.matrixWorld)),A.logarithmicDepthBuffer&&Be.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Be.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),ht!==w&&(ht=w,li=!0,zi=!0)}if(Wt.needsLights&&(nn.state.sunShadowMap.length>0&&Be.setValue(W,"sunShadowMap",nn.state.sunShadowMap,ft),nn.state.directionalShadowMap.length>0&&Be.setValue(W,"directionalShadowMap",nn.state.directionalShadowMap,ft),nn.state.spotShadowMap.length>0&&Be.setValue(W,"spotShadowMap",nn.state.spotShadowMap,ft),nn.state.pointShadowMap.length>0&&Be.setValue(W,"pointShadowMap",nn.state.pointShadowMap,ft)),Y.isSkinnedMesh){Be.setOptional(W,Y,"bindMatrix"),Be.setOptional(W,Y,"bindMatrixInverse");let Ge=Y.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Be.setValue(W,"boneTexture",Ge.boneTexture,ft))}Y.isBatchedMesh&&(Be.setOptional(W,Y,"batchingTexture"),Be.setValue(W,"batchingTexture",Y._matricesTexture,ft),Be.setOptional(W,Y,"batchingIdTexture"),Be.setValue(W,"batchingIdTexture",Y._indirectTexture,ft),Be.setOptional(W,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Be.setValue(W,"batchingColorTexture",Y._colorsTexture,ft));let ci=st.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&G.update(Y,st,ln),(li||Wt.receiveShadow!==Y.receiveShadow)&&(Wt.receiveShadow=Y.receiveShadow,Be.setValue(W,"receiveShadow",Y.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(Je.envMapIntensity.value=V.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=Ox()),li){if(Be.setValue(W,"toneMappingExposure",H.toneMappingExposure),Wt.needsLights&&Dr(Je,zi),Ct&&Z.fog===!0&&Gt.refreshFogUniforms(Je,Ct),Gt.refreshMaterialUniforms(Je,Z,_t,ct,L.state.transmissionRenderTarget[w.id]),Wt.needsLights&&Wt.lightProbeGrid){let Ge=Wt.lightProbeGrid;Je.probesSH.value=Ge.texture,Je.probesMin.value.copy(Ge.boundingBox.min),Je.probesMax.value.copy(Ge.boundingBox.max),Je.probesResolution.value.copy(Ge.resolution)}Cr.upload(W,Lr(Wt),Je,ft)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Cr.upload(W,Lr(Wt),Je,ft),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Be.setValue(W,"center",Y.center),Be.setValue(W,"modelViewMatrix",Y.modelViewMatrix),Be.setValue(W,"normalMatrix",Y.normalMatrix),Be.setValue(W,"modelMatrix",Y.matrixWorld),Z.uniformsGroups!==void 0){let Ge=Z.uniformsGroups;for(let hi=0,ki=Ge.length;hi<ki;hi++){let Ha=Ge[hi];yt.update(Ha,ln),yt.bind(Ha,ln)}}return ln}function Dr(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function je(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return dt},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return gt},this.setRenderTargetTextures=function(w,V,st){let Z=$.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),$.get(w.texture).__webglTexture=V,$.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:st,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let st=$.get(w);st.__webglFramebuffer=V,st.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,st=0){gt=w,dt=V,rt=st;let Z=null,Y=!1,Ct=!1;if(w){let Ut=$.get(w);if(Ut.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(W.FRAMEBUFFER,Ut.__webglFramebuffer),ut.copy(w.viewport),kt.copy(w.scissor),Yt=w.scissorTest,g.viewport(ut),g.scissor(kt),g.setScissorTest(Yt),tt=-1;return}else if(Ut.__webglFramebuffer===void 0)ft.setupRenderTarget(w);else if(Ut.__hasExternalTextures)ft.rebindTextures(w,$.get(w.texture).__webglTexture,$.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let le=w.depthTexture;if(Ut.__boundDepthTexture!==le){if(le!==null&&$.has(le)&&(w.width!==le.image.width||w.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(w)}}let Jt=w.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ct=!0);let qt=$.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[V])?Z=qt[V][st]:Z=qt[V],Y=!0):w.samples>0&&ft.useMultisampledRTT(w)===!1?Z=$.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?Z=qt[st]:Z=qt,ut.copy(w.viewport),kt.copy(w.scissor),Yt=w.scissorTest}else ut.copy(Xt).multiplyScalar(_t).floor(),kt.copy(fe).multiplyScalar(_t).floor(),Yt=Ze;if(st!==0&&(Z=it),g.bindFramebuffer(W.FRAMEBUFFER,Z)&&g.drawBuffers(w,Z),g.viewport(ut),g.scissor(kt),g.setScissorTest(Yt),Y){let Ut=$.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ut.__webglTexture,st)}else if(Ct){let Ut=V;for(let Jt=0;Jt<w.textures.length;Jt++){let qt=$.get(w.textures[Jt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Jt,qt.__webglTexture,st,Ut)}}else if(w!==null&&st!==0){let Ut=$.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ut.__webglTexture,st)}tt=-1};function wi(w){let V=$.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=A.textureFormatReadable(w.format),V.__typeReadable=A.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,st,Z,Y,Ct,Ht,Ut=0){if(!(w&&w.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Jt=Jt[Ht]),Jt){g.bindFramebuffer(W.FRAMEBUFFER,Jt);try{let qt=w.textures[Ut],le=qt.format,ge=qt.type;w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ut);let Bt=wi(qt);if(Bt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Z&&st>=0&&st<=w.height-Y&&W.readPixels(V,st,Z,Y,Lt.convert(le),Lt.convert(ge),Ct)}finally{let qt=gt!==null?$.get(gt).__webglFramebuffer:null;g.bindFramebuffer(W.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(w,V,st,Z,Y,Ct,Ht,Ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Jt=Jt[Ht]),Jt)if(V>=0&&V<=w.width-Z&&st>=0&&st<=w.height-Y){g.bindFramebuffer(W.FRAMEBUFFER,Jt);let qt=w.textures[Ut],le=qt.format,ge=qt.type;w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ut);let Bt=wi(qt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ce),W.bufferData(W.PIXEL_PACK_BUFFER,Ct.byteLength,W.STREAM_READ),W.readPixels(V,st,Z,Y,Lt.convert(le),Lt.convert(ge),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let qe=gt!==null?$.get(gt).__webglFramebuffer:null;g.bindFramebuffer(W.FRAMEBUFFER,qe);let We=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Bd(W,We,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ce),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ct),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Ce),W.deleteSync(We),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,st=0){let Z=Math.pow(2,-st),Y=Math.floor(w.image.width*Z),Ct=Math.floor(w.image.height*Z),Ht=V!==null?V.x:0,Ut=V!==null?V.y:0;ft.setTexture2D(w,0),W.copyTexSubImage2D(W.TEXTURE_2D,st,0,0,Ht,Ut,Y,Ct),g.unbindTexture()},this.copyTextureToTexture=function(w,V,st=null,Z=null,Y=0,Ct=0){let Ht,Ut,Jt,qt,le,ge,Bt,Ce,qe,We=w.isCompressedTexture?w.mipmaps[Ct]:w.image;if(st!==null)Ht=st.max.x-st.min.x,Ut=st.max.y-st.min.y,Jt=st.isBox3?st.max.z-st.min.z:1,qt=st.min.x,le=st.min.y,ge=st.isBox3?st.min.z:0;else{let Je=Math.pow(2,-Y);Ht=Math.floor(We.width*Je),Ut=Math.floor(We.height*Je),w.isDataArrayTexture?Jt=We.depth:w.isData3DTexture?Jt=Math.floor(We.depth*Je):Jt=1,qt=0,le=0,ge=0}Z!==null?(Bt=Z.x,Ce=Z.y,qe=Z.z):(Bt=0,Ce=0,qe=0);let Oe=Lt.convert(V.format),en=Lt.convert(V.type),Wt;V.isData3DTexture?(ft.setTexture3D(V,0),Wt=W.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ft.setTexture2DArray(V,0),Wt=W.TEXTURE_2D_ARRAY):(ft.setTexture2D(V,0),Wt=W.TEXTURE_2D),g.activeTexture(W.TEXTURE0),g.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),g.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),g.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);let nn=g.getParameter(W.UNPACK_ROW_LENGTH),Te=g.getParameter(W.UNPACK_IMAGE_HEIGHT),ln=g.getParameter(W.UNPACK_SKIP_PIXELS),Gn=g.getParameter(W.UNPACK_SKIP_ROWS),li=g.getParameter(W.UNPACK_SKIP_IMAGES);g.pixelStorei(W.UNPACK_ROW_LENGTH,We.width),g.pixelStorei(W.UNPACK_IMAGE_HEIGHT,We.height),g.pixelStorei(W.UNPACK_SKIP_PIXELS,qt),g.pixelStorei(W.UNPACK_SKIP_ROWS,le),g.pixelStorei(W.UNPACK_SKIP_IMAGES,ge);let zi=w.isDataArrayTexture||w.isData3DTexture,Be=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let Je=$.get(w),ci=$.get(V),Ge=$.get(Je.__renderTarget),hi=$.get(ci.__renderTarget);g.bindFramebuffer(W.READ_FRAMEBUFFER,Ge.__webglFramebuffer),g.bindFramebuffer(W.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ki=0;ki<Jt;ki++)zi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$.get(w).__webglTexture,Y,ge+ki),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$.get(V).__webglTexture,Ct,qe+ki)),W.blitFramebuffer(qt,le,Ht,Ut,Bt,Ce,Ht,Ut,W.DEPTH_BUFFER_BIT,W.NEAREST);g.bindFramebuffer(W.READ_FRAMEBUFFER,null),g.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||$.has(w)){let Je=$.get(w),ci=$.get(V);g.bindFramebuffer(W.READ_FRAMEBUFFER,z),g.bindFramebuffer(W.DRAW_FRAMEBUFFER,j);for(let Ge=0;Ge<Jt;Ge++)zi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Je.__webglTexture,Y,ge+Ge):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Je.__webglTexture,Y),Be?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ci.__webglTexture,Ct,qe+Ge):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ci.__webglTexture,Ct),Y!==0?W.blitFramebuffer(qt,le,Ht,Ut,Bt,Ce,Ht,Ut,W.COLOR_BUFFER_BIT,W.NEAREST):Be?W.copyTexSubImage3D(Wt,Ct,Bt,Ce,qe+Ge,qt,le,Ht,Ut):W.copyTexSubImage2D(Wt,Ct,Bt,Ce,qt,le,Ht,Ut);g.bindFramebuffer(W.READ_FRAMEBUFFER,null),g.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Be?w.isDataTexture||w.isData3DTexture?W.texSubImage3D(Wt,Ct,Bt,Ce,qe,Ht,Ut,Jt,Oe,en,We.data):V.isCompressedArrayTexture?W.compressedTexSubImage3D(Wt,Ct,Bt,Ce,qe,Ht,Ut,Jt,Oe,We.data):W.texSubImage3D(Wt,Ct,Bt,Ce,qe,Ht,Ut,Jt,Oe,en,We):w.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ct,Bt,Ce,Ht,Ut,Oe,en,We.data):w.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ct,Bt,Ce,We.width,We.height,Oe,We.data):W.texSubImage2D(W.TEXTURE_2D,Ct,Bt,Ce,Ht,Ut,Oe,en,We);g.pixelStorei(W.UNPACK_ROW_LENGTH,nn),g.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Te),g.pixelStorei(W.UNPACK_SKIP_PIXELS,ln),g.pixelStorei(W.UNPACK_SKIP_ROWS,Gn),g.pixelStorei(W.UNPACK_SKIP_IMAGES,li),Ct===0&&V.generateMipmaps&&W.generateMipmap(Wt),g.unbindTexture()},this.initRenderTarget=function(w){$.get(w).__webglFramebuffer===void 0&&ft.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ft.setTextureCube(w,0):w.isData3DTexture?ft.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ft.setTexture2DArray(w,0):ft.setTexture2D(w,0),g.unbindTexture()},this.resetState=function(){dt=0,rt=0,gt=null,g.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}};function vf(i){let t,e="context";try{let D=i.getContext("webgl2",{antialias:!0,alpha:!1});if(!D)return console.warn("[Star Rush WebGL] webgl2 context unavailable; returning null for fallback handling"),null;e="renderer",t=new sc({canvas:i,context:D,antialias:!0,alpha:!1,powerPreference:"default"})}catch(D){return console.warn("[Star Rush WebGL] "+e+" initialization failed; returning null for fallback handling:",D?.message||String(D)),null}t.outputColorSpace=En,t.toneMapping=Ra,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=ul,t.setPixelRatio(Math.min(devicePixelRatio||1,1.5));let n=new da;n.fog=new ua("#cbddec",125,460);let s=new yn(62,1,.12,850),r=new wa("#e7f4ff","#a08ba5",2.2),o=new Ea("#fff0de",2.4);o.position.set(-30,60,25),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-55,right:55,top:45,bottom:-45,near:1,far:160}),o.shadow.bias=-4e-4,n.add(r,o,o.target);let c=new Rs(new Uint8Array([95,145,195,245]),4,1,wr);c.minFilter=$e,c.magFilter=$e,c.needsUpdate=!0;let u=new Map,h=new He,m=new Map,v=new Map,f=new Sn(new Ma(650,16,8),new Cn({side:pn,depthWrite:!1,uniforms:{top:{value:new de("#8fbee6")},bottom:{value:new de("#f0e8f0")}},vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vDirection;uniform vec3 top,bottom;void main(){float h=smoothstep(-.05,.8,normalize(vDirection).y);gl_FragColor=vec4(mix(bottom,top,h),1.0);}"}));f.renderOrder=-100,n.add(f);let M=1,S=0,R=0,y=0,p=0,N=16.7,k=0,C=0,P=2,L=["low","medium","high"];function O(D,H){D.renderId||(D.renderId=M++);let X=D.renderId+":"+(D.paintable&&H?H:"");if(v.has(X))return v.get(X);let K=D.sourceData,it=[],z=[],j=[],dt=H?new de(H):null;for(let gt=0;gt<K.length;gt+=10){it.push(K[gt],K[gt+1],K[gt+2]),z.push(K[gt+3],K[gt+4],K[gt+5]);let tt=K[gt+6],ht=K[gt+7],ut=K[gt+8],kt=D.paintable&&dt&&ht-tt>.14&&ut-tt>.2;j.push(kt?dt.r:tt,kt?dt.g:ht,kt?dt.b:ut)}let rt=new Bn;return rt.setAttribute("position",new rn(it,3)),rt.setAttribute("normal",new rn(z,3)),rt.setAttribute("color",new rn(j,3)),rt.setIndex(Array.from(D.sourceIndices)),rt.computeBoundingSphere(),v.set(X,rt),D.onDispose=()=>{for(let[gt,tt]of v)if(gt.startsWith(D.renderId+":")){for(let[ht,ut]of u)ut.geometry===tt&&(n.remove(ut),ut.dispose(),u.delete(ht));tt.dispose(),v.delete(gt)}},rt}function T(D,H,X,K,it,z={}){let j=performance.now();if(p){let tt=j-p;tt<100&&(N+=(tt-N)*.035)}p=j,z.quality==="auto"&&(N>23?(k++,C=0):N<16.9?(C++,k=0):(k=0,C=0),k>90&&P>0&&(P--,k=0),C>360&&P<2&&(P++,C=0));let dt=z.quality==="auto"?L[P]:z.quality,rt=dt==="low"?1:dt==="medium"?1.2:Math.min(devicePixelRatio||1,1.5);rt!==y&&(t.setPixelRatio(rt),y=rt),(X!==S||K!==R)&&(t.setSize(X,K,!1),S=X,R=K),s.aspect=X/K,s.fov=it,s.updateProjectionMatrix(),s.position.fromArray(H.eye),s.lookAt(new Q(...H.target)),f.position.copy(s.position);let gt=new Map;for(let tt of D){if(!tt.mesh.sourceIndices.length)continue;let ht=O(tt.mesh,tt.tint),ut=tt.opacity??1,kt=ht.uuid+":"+tt.shadow+":"+ut,Yt=gt.get(kt);Yt||(Yt={geometry:ht,shadow:tt.shadow,opacity:ut,items:[]},gt.set(kt,Yt)),Yt.items.push(tt)}for(let tt of u.values())tt.visible=!1;for(let[tt,ht]of gt){let ut=u.get(tt);if(!ut||ut.instanceMatrix.count<ht.items.length){ut&&(n.remove(ut),ut.dispose());let kt=m.get(ht.opacity);kt||(kt=new Sa({vertexColors:!0,gradientMap:c,transparent:ht.opacity<1,opacity:ht.opacity,depthWrite:ht.opacity>=1}),m.set(ht.opacity,kt)),ut=new _a(ht.geometry,kt,Math.max(4,ht.items.length+8)),ut.instanceMatrix.setUsage(Ih),ut.frustumCulled=!0,ut.receiveShadow=ht.opacity>=1,n.add(ut),u.set(tt,ut)}ut.count=ht.items.length,ut.castShadow=ht.shadow&&dt!=="low",ut.visible=!0;for(let kt=0;kt<ht.items.length;kt++)h.fromArray(ht.items[kt].m),ut.setMatrixAt(kt,h);ut.instanceMatrix.needsUpdate=!0,ut.computeBoundingSphere()}return t.shadowMap.enabled=dt!=="low",t.render(n,s),{drawCalls:t.info.render.calls,triangles:t.info.render.triangles,effectiveQuality:dt}}return{render:T,renderer:t,scene:n}}function yf(i,t){for(let e of i.querySelectorAll("#trackPicker [data-track]")){let n=t[e.dataset.track];if(!n||e.querySelector(".course-art"))continue;let s=i.createElement("img");s.className="course-art",s.alt="",s.setAttribute("aria-hidden","true"),s.draggable=!1,s.decoding="async",s.hidden=!0,s.width=512,s.height=256,s.onload=()=>{s.hidden=!1,e.dataset.art="ready"},s.onerror=()=>{s.remove(),delete e.dataset.art},e.prepend(s),s.src=n}}(()=>{"use strict";let i=document.getElementById("scene"),t=document.getElementById("error"),e=document.getElementById("loading");function n(h){t.hidden=!1,document.getElementById("error-text").textContent=h,e.classList.add("done")}let s={light:"/assets/impact-audio/rail-light-v2.e9daa5ac2bd3.wav",medium:"/assets/impact-audio/rail-medium-v2.9e322b68b6d0.wav"},r=!1,o=vf(i),c=!o,u=c?i.getContext("2d"):null;try{let h=function(a,l,d){let _=[];if(d){let b=(a%l+l)%l;for(let E=0;E<l;E+=40){let I=E-b;I-=Math.round(I/l)*l,I>=-40&&I<210&&_.push({s:E,ds:I})}}else for(let b=Math.ceil((a-40)/40)*40;b<a+210;b+=40)_.push({s:b,ds:b-a});return _},m=function(a){let l=u,d=i.width,_=i.height;l.setTransform(1,0,0,1,0,0);let b=l.createLinearGradient(0,0,0,_);b.addColorStop(0,"#96c8ee"),b.addColorStop(.62,"#f2e6ee"),b.addColorStop(.63,"#cbd8c1"),b.addColorStop(1,"#bdcdb8"),l.fillStyle=b,l.fillRect(0,0,d,_);let E=a.eye,I=a.target,F=C(R(I,E)),B=C(N(F,[0,1,0])),J=N(B,F),lt=_/(2*Math.tan(ks*Math.PI/360)),xt=Mt=>{let pt=R(Mt,E),bt=p(pt,F);return bt<.25?null:[d/2+p(pt,B)*lt/bt,_/2-p(pt,J)*lt/bt,bt,lt/bt]},mt=(Mt,pt)=>{let bt=Mt.map(xt);bt.some(zt=>!zt)||(l.fillStyle=pt,l.beginPath(),bt.forEach((zt,Ft)=>Ft?l.lineTo(zt[0],zt[1]):l.moveTo(zt[0],zt[1])),l.closePath(),l.fill())},vt=Mt=>R(Mt,a.origin),Et=[];for(let Mt=-40;Mt<240;Mt+=5){let pt=x.s+Mt,bt=Me(pt),zt=Me(pt+5);Et.push({d:Mt,a:bt,b:zt})}for(let Mt of Et.reverse()){let pt=(bt,zt,Ft)=>vt(S(S(bt.p,y(bt.R,zt)),[0,Ft,0]));if(mt([pt(Mt.a,-10,0),pt(Mt.a,10,0),pt(Mt.b,10,0),pt(Mt.b,-10,0)],"#e3dce5"),mt([pt(Mt.a,-7,.05),pt(Mt.a,7,.05),pt(Mt.b,7,.05),pt(Mt.b,-7,.05)],"#7b829a"),Math.floor(Mt.d/5)%2===0)for(let bt of[-2.3,2.3])mt([pt(Mt.a,bt-.04,.06),pt(Mt.a,bt+.04,.06),pt(Mt.b,bt+.04,.06),pt(Mt.b,bt-.04,.06)],"#e9edf1");for(let bt of[-1,1])mt([pt(Mt.a,bt*8.1,.4),pt(Mt.a,bt*8.1,.8),pt(Mt.b,bt*8.1,.8),pt(Mt.b,bt*8.1,.4)],"#c0cfe2")}if(typeof r<"u"&&r){let Mt=[];for(let pt=0;pt<210;pt+=20)for(let bt of[-1,1]){let zt=Ne(Math.floor((x.s+pt)/20)*20,bt*12,0),Ft=xt(vt(zt));Ft&&Mt.push({q:Ft,side:bt,ds:pt,pos:zt,kind:"tree"})}for(let pt of h(x.s,De,te==="circuit"))for(let bt of[-1,1]){let zt=xt(vt(Ne(pt.s,bt*20,0)));zt&&Mt.push({q:zt,kind:"house"})}for(let pt of Mt.sort((bt,zt)=>zt.q[2]-bt.q[2])){let[bt,zt,,Ft]=pt.q;if(pt.kind==="tree"){l.fillStyle="#a78a95",l.fillRect(bt-Ft*.12,zt-Ft*3.5,Ft*.24,Ft*3.5);for(let St=0;St<4;St++)l.fillStyle=St%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(bt+Math.sin(St*2)*Ft,zt-Ft*(3.3+St*.3),Ft*1.6,Ft*1.1,0,0,f),l.fill()}else{let St=pt.q;l.fillStyle="#f3e9dc",l.fillRect(St[0]-St[3]*3,St[1]-St[3]*5,St[3]*6,St[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(St[0]-St[3]*3.5,St[1]-St[3]*5),l.lineTo(St[0],St[1]-St[3]*6.3),l.lineTo(St[0]+St[3]*3.5,St[1]-St[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let he=0;he<3;he++)l.fillRect(St[0]+(he-1.2)*St[3]*1.5,St[1]-St[3]*3.9,St[3],St[3]*1.2)}}}else{let Mt=[];for(let pt=0;pt<210;pt+=20)for(let bt of[-1,1]){let zt=Ne(Math.floor((x.s+pt)/20)*20,bt*12,0),Ft=xt(vt(zt));Ft&&Mt.push({q:Ft,side:bt,ds:pt,pos:zt})}for(let pt of Mt.sort((bt,zt)=>zt.q[2]-bt.q[2])){let[bt,zt,,Ft]=pt.q;l.fillStyle="#a78a95",l.fillRect(bt-Ft*.12,zt-Ft*3.5,Ft*.24,Ft*3.5);for(let St=0;St<4;St++)l.fillStyle=St%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(bt+Math.sin(St*2)*Ft,zt-Ft*(3.3+St*.3),Ft*1.6,Ft*1.1,0,0,f),l.fill();if(pt.ds%40===0){let St=xt(vt(Ne(x.s+pt.ds,pt.side*20,0)));if(St){l.fillStyle="#f3e9dc",l.fillRect(St[0]-St[3]*3,St[1]-St[3]*5,St[3]*6,St[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(St[0]-St[3]*3.5,St[1]-St[3]*5),l.lineTo(St[0],St[1]-St[3]*6.3),l.lineTo(St[0]+St[3]*3.5,St[1]-St[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let he=0;he<3;he++)l.fillRect(St[0]+(he-1.2)*St[3]*1.5,St[1]-St[3]*3.9,St[3],St[3]*1.2)}}}}for(let Mt of ms)if(Mt.life>0){let pt=xt(vt(Mt.p));pt&&(l.fillStyle="#414957",l.fillRect(pt[0],pt[1],Math.max(1,pt[3]*.12),Math.max(2,pt[3]*Mt.length)))}for(let Mt of cn.values())for(let pt of Mt.entities){if(Math.abs(Z(pt.s,x.s))>170)continue;let bt=xt(vt(Ne(pt.s+(pt.ds||0),pt.l+(pt.dl||0),.2)));if(!bt||pt.kind==="coin"&&pt.hitLap===Math.max(0,Math.floor(x.s/De)))continue;let[zt,Ft,,St]=bt;if(pt.kind==="coin")l.fillStyle="#ffe2a0",l.beginPath(),l.ellipse(zt,Ft-St*.8,St*.25,St*.38,0,0,f),l.fill();else if(pt.kind==="pad"){let he=Me(pt.s),Rn=(ke,hn)=>vt(Ne(pt.s+ke,pt.l+hn,.07));mt([Rn(-1.2,-1.5),Rn(1.2,-1.5),Rn(1.2,1.5),Rn(-1.2,1.5)],"#92e3e5")}else if(pt.kind==="ramp"){let he=(Rn,ke,hn)=>vt(Ne(pt.s+Rn,pt.l+ke,hn));mt([he(-1.4,-1.5,.08),he(1.4,-1.5,.85),he(1.4,1.5,.85),he(-1.4,1.5,.08)],"#bfa9e3")}else pt.kind==="cone"?(l.fillStyle="#eebd92",l.beginPath(),l.moveTo(zt,Ft-St*.8),l.lineTo(zt-St*.35,Ft),l.lineTo(zt+St*.35,Ft),l.fill()):pt.kind==="barrier"&&(l.fillStyle="#edacbb",l.fillRect(zt-St,Ft-St*.7,St*2,St*.7))}let Nt=(Mt,pt,bt,zt,Ft,St=1)=>{let he=Me(Mt),Rn=Ne(Mt,pt,.05+zt),ke=xt(vt(Rn));if(!ke)return;l.globalAlpha=St;let hn=($s,$r,Ii)=>vt(S(Rn,S(y(he.T,$s*Math.cos(bt)-Ii*Math.sin(bt)),S(y(he.R,$s*Math.sin(bt)+Ii*Math.cos(bt)),[0,$r,0]))));mt([hn(-1.6,.3,-.8),hn(1.6,.3,-.8),hn(1.6,.7,.8),hn(-1.6,.7,.8)],Ft),mt([hn(-1.6,.65,-.8),hn(1.6,.65,-.8),hn(1.6,.65,.8),hn(-1.6,.65,.8)],"#eef1f7");for(let $s of[-1,1])for(let $r of[-.87,.87]){let Ii=xt(hn($s,.35,$r));Ii&&(l.fillStyle="#3c4357",l.beginPath(),l.ellipse(Ii[0],Ii[1],ke[3]*.24,ke[3]*.34,0,0,f),l.fill())}let qn=xt(hn(-.3,1.6,0));qn&&(l.fillStyle="#f3d2be",l.beginPath(),l.arc(qn[0],qn[1],ke[3]*.33,0,f),l.fill(),l.fillStyle="#a9abe4",l.beginPath(),l.ellipse(qn[0],qn[1]-ke[3]*.18,ke[3]*.36,ke[3]*.2,0,Math.PI,f),l.fill()),l.globalAlpha=1};if(sn.line&&ne==="running")for(let Mt=8;Mt>=0;Mt--){let pt=x.s+12+Mt*9,bt=Me(pt),zt=P(bt.curv*80,-2.1,2.1),Ft=(St,he)=>vt(Ne(pt+St,zt+he,.09));mt([Ft(-.6,-.4),Ft(.3,0),Ft(-.6,.4),Ft(-.2,0)],Math.abs(bt.curv)*x.speed>.95?"#f0b7c3":"#a5dbe6")}if(Ri&&Ci?.points?.length&&ne==="running"){let Mt=Ci.points[Ms];Mt&&Nt(Mt[1],Mt[2],Mt[3],Mt[4],"#b8e9e6",.35)}if(typeof Xn<"u")for(let Mt of Xn)Nt(Mt.s,Mt.l,Mt.yaw||0,0,Mt.color);if(typeof nt<"u"&&nt.room)for(let Mt of nt.peers.values())Mt.position&&Nt(Mt.position.s,Mt.position.l,Mt.position.yaw,Mt.position.jump,"#eab5ce");if(x.mini>0||x.nitroTime>0||x.pad>0){let Mt=Me(x.s),pt=xt(vt(Ne(x.s-2,x.l,.4+x.jump)));pt&&(l.fillStyle=x.nitroTime>0?"#bcb2ff99":"#95edff99",l.beginPath(),l.ellipse(pt[0],pt[1],pt[3]*.7,pt[3]*.45,0,0,f),l.fill())}Nt(x.s,x.l,x.yaw,x.jump,typeof Qe<"u"?Qe.paint:"#8ccde4")},T=function(a,l){let d=new Float32Array(16);for(let _=0;_<4;_++)for(let b=0;b<4;b++)d[_*4+b]=a[b]*l[_*4]+a[4+b]*l[_*4+1]+a[8+b]*l[_*4+2]+a[12+b]*l[_*4+3];return d},D=function(a,l,d){let _=O();return _[12]=a,_[13]=l,_[14]=d,_},H=function(a,l,d){let _=O();return _[0]=a,_[5]=l,_[10]=d,_},X=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([1,0,0,0,0,l,d,0,0,-d,l,0,0,0,0,1])},K=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,0,-d,0,0,1,0,0,d,0,l,0,0,0,0,1])},it=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,d,0,0,-d,l,0,0,0,0,1,0,0,0,0,1])},z=function(a=[0,0,0],l=[1,1,1],d=[0,0,0]){return T(D(...a),T(K(d[1]),T(X(d[0]),T(it(d[2]),H(...l)))))},j=function(a,l){return[a[0]*l[0]+a[4]*l[1]+a[8]*l[2]+a[12],a[1]*l[0]+a[5]*l[1]+a[9]*l[2]+a[13],a[2]*l[0]+a[6]*l[1]+a[10]*l[2]+a[14]]},dt=function(a){let l=[a[0],a[1],a[2]],d=[a[4],a[5],a[6]],_=[a[8],a[9],a[10]],b=N(d,_),E=N(_,l),I=N(l,d),F=p(l,b)||1;return new Float32Array([...y(b,1/F),...y(E,1/F),...y(I,1/F)])},rt=function(a,l){return C([a[0]*l[0]+a[3]*l[1]+a[6]*l[2],a[1]*l[0]+a[4]*l[1]+a[7]*l[2],a[2]*l[0]+a[5]*l[1]+a[8]*l[2]])},gt=function(a,l,d=[0,1,0]){let _=C(R(a,l)),b=C(N(d,_)),E=N(_,b);return new Float32Array([b[0],E[0],_[0],0,b[1],E[1],_[1],0,b[2],E[2],_[2],0,-p(b,a),-p(E,a),-p(_,a),1])},tt=function(a,l,d,_){let b=1/Math.tan(a/2),E=1/(d-_);return new Float32Array([b/l,0,0,0,0,b,0,0,0,0,(_+d)*E,-1,0,0,2*_*d*E,0])},ht=function(a,l,d,_,b,E){return new Float32Array([2/(l-a),0,0,0,0,2/(_-d),0,0,0,0,-2/(E-b),0,-(l+a)/(l-a),-(_+d)/(_-d),-(E+b)/(E-b),1])},ut=function(a,l,d,_=d){let b=R(l,a),E=C(b),I=C(N(Math.abs(E[2])<.95?[0,0,1]:[1,0,0],E)),F=N(I,E),B=y(S(a,l),.5),J=k(b);return new Float32Array([I[0]*d,I[1]*d,I[2]*d,0,E[0]*J,E[1]*J,E[2]*J,0,F[0]*_,F[1]*_,F[2]*_,0,...B,1])},kt=function(a){let l=parseInt(a.replace("#",""),16);return[l>>16&255,l>>8&255,l&255].map(d=>Math.pow(d/255,2.2))},Se=function(a,l,d){return{p:a,n:l,i:d}},ve=function(a=20,l=12){let d=[],_=[],b=[];for(let E=0;E<=l;E++){let I=E*v/l;for(let F=0;F<=a;F++){let B=F*f/a,J=[Math.sin(I)*Math.cos(B),Math.cos(I),Math.sin(I)*Math.sin(B)];d.push(...J),_.push(...J)}}for(let E=0;E<l;E++)for(let I=0;I<a;I++){let F=E*(a+1)+I,B=F+a+1;b.push(F,F+1,B,F+1,B+1,B)}return Se(d,_,b)},be=function(a=16,l=1){let d=[],_=[],b=[];for(let E=0;E<2;E++)for(let I=0;I<=a;I++){let F=I*f/a,B=E?l:1,J=C([Math.cos(F),1-l,Math.sin(F)]);d.push(B*Math.cos(F),E-.5,B*Math.sin(F)),_.push(...J)}for(let E=0;E<a;E++){let I=E,F=E+a+1;b.push(I,F,I+1,I+1,F,F+1)}for(let E=0;E<2;E++){let I=d.length/3,F=E-.5,B=E?l:1;d.push(0,F,0),_.push(0,E?1:-1,0);for(let J=0;J<=a;J++){let lt=J*f/a;d.push(B*Math.cos(lt),F,B*Math.sin(lt)),_.push(0,E?1:-1,0)}for(let J=0;J<a;J++)b.push(I,I+J+(E?2:1),I+J+(E?1:2))}return Se(d,_,b)},ct=function(a,l,d=48,_=10,b=0,E=f){let I=[],F=[],B=[];for(let J=0;J<=d;J++){let lt=b+E*J/d;for(let xt=0;xt<=_;xt++){let mt=xt*f/_,vt=Math.cos(mt),Et=Math.sin(mt);I.push((a+l*vt)*Math.cos(lt),(a+l*vt)*Math.sin(lt),l*Et),F.push(vt*Math.cos(lt),vt*Math.sin(lt),Et)}}for(let J=0;J<d;J++)for(let lt=0;lt<_;lt++){let xt=J*(_+1)+lt,mt=xt+_+1;B.push(xt,mt,xt+1,mt,mt+1,xt+1)}return Se(I,F,B)},Vt=function(a,l,d,_=.07){let b=[a,l,d,_].join(",");if(_t.has(b))return _t.get(b);_=Math.min(_,a/2*.95,l/2*.95,d/2*.95);let E=[],I=[],F=[],B=[a/2,l/2,d/2],J=[[[0,0,d/2],[1,0,0],[0,1,0],a,l],[[0,0,-d/2],[-1,0,0],[0,1,0],a,l],[[a/2,0,0],[0,0,-1],[0,1,0],d,l],[[-a/2,0,0],[0,0,1],[0,1,0],d,l],[[0,l/2,0],[1,0,0],[0,0,-1],a,d],[[0,-l/2,0],[1,0,0],[0,0,1],a,d]];for(let[xt,mt,vt,Et,Nt]of J){let Mt=Ft=>[-Ft/2,-Ft/2+_*.28,-Ft/2+_,Ft/2-_,Ft/2-_*.28,Ft/2],pt=Mt(Et),bt=Mt(Nt),zt=E.length/3;for(let Ft of bt)for(let St of pt){let he=S(xt,S(y(mt,St),y(vt,Ft))),Rn=he.map((hn,qn)=>P(hn,-B[qn]+_,B[qn]-_)),ke=C(R(he,Rn));E.push(...S(Rn,y(ke,_))),I.push(...ke)}for(let Ft=0;Ft<5;Ft++)for(let St=0;St<5;St++){let he=zt+Ft*6+St;F.push(he,he+1,he+6,he+1,he+7,he+6)}}let lt=Se(E,I,F);return _t.set(b,lt),lt},oe=function(a,l=.04,d=8){let _=[],b=[],E=[];for(let I=0;I<a.length;I++){let F=C(R(a[Math.min(I+1,a.length-1)],a[Math.max(I-1,0)])),B=C(N(F,Math.abs(F[1])<.9?[0,1,0]:[0,0,1])),J=N(F,B);for(let lt=0;lt<=d;lt++){let xt=lt*f/d,mt=S(y(B,Math.cos(xt)),y(J,Math.sin(xt)));_.push(...S(a[I],y(mt,l))),b.push(...mt)}}for(let I=0;I<a.length-1;I++)for(let F=0;F<d;F++){let B=I*(d+1)+F,J=B+d+1;E.push(B,B+1,J,B+1,J+1,J)}return Se(_,b,E)},Xt=function(a,l,d,_){let b=[],E=[],I=[];for(let B=0;B<=144;B++){let J=B*f/144;for(let lt of[-1,1])b.push((a+lt*d)*Math.cos(J),_,(l+lt*d)*Math.sin(J)),E.push(0,1,0)}for(let B=0;B<144;B++){let J=B*2;I.push(J,J+2,J+1,J+1,J+2,J+3)}return Se(b,E,I)},$t=function(a,l,d,_=Yt.green,b=!1,E=.13){a.add(b?Ze:fe,z(l,d),_,E)},A=function(a,l,d,_,b=.06,E=[0,0,0],I=.12){a.add(Vt(...d,b),z(l,[1,1,1],E),_,I)},g=function(a,l,d,_,b,E=.2,I=!1){a.add(Ie,ut(l,d,_),b,E),I&&($t(a,l,[_,_,_],b,!0,E),$t(a,d,[_,_,_],b,!0,E))},q=function(a,l,d,_,b=[0,0,0],E=!1){a.add(E?_e:Ve,z(l,d,b),_)},$=function(a,l,d,_,b=.15){a.add(oe(l,d),ye,_,b)},ft=function(a,l,d,_=100){return Array.from({length:_+1},(b,E)=>[a*Math.cos(E*f/_),d,l*Math.sin(E*f/_)])},It=function(){return Tt=Tt*1664525+1013904223>>>0,Tt/4294967296},Os=function(a,l,d){let _=-d*Math.min(.09,x.speed*.003),b=Math.sin(a*18)*Math.min(.012,x.speed*5e-4);Pt.local=z([0,b,0],[1,1,1],[_,0,0]),Lt.local=z([-.31,1.57+b,0],[1,1,1],[-_*.5,-d*.13,0]);for(let E of Dt)E.n.local=T(D(E.x,.41,E.z),T(K(E.front?-(x.drifting?d*.12-wn(x.yaw-x.velocityYaw)*.62:d*.26):0),it(mc)));for(let E of yt){let I=x.boostActive?1.25+.17*Math.sin(a*38+E.side):x.pad>0?1+.12*Math.sin(a*36):x.mini>0?.65+.12*Math.sin(a*42+E.side):.001;E.n.local=z([-1.9,.43,E.side*.34],[I,Math.max(.01,I),Math.max(.01,I)])}},je=function(){return Vn[Ke]},wi=function(){return De*je().laps},w=function(a){let l=je().points,d=l.length,_=(a%d+d)%d,b=Math.floor(_),E=_-b,I=l[(b+d-1)%d],F=l[b],B=l[(b+1)%d],J=l[(b+2)%d];return F.map((lt,xt)=>.5*(2*lt+(-I[xt]+B[xt])*E+(2*I[xt]-5*lt+4*B[xt]-J[xt])*E*E+(-I[xt]+3*lt-3*B[xt]+J[xt])*E*E*E))},V=function(){Lr=Ke,gn=[],De=0;let a=je().points.length*120;for(let _=0;_<=a;_++){let b=_*je().points.length/a,E=w(b);_&&(De+=k(R(E,gn[_-1].p)));let I=R(w(b+1e-4),w(b-1e-4));gn.push({s:De,p:E,h:Math.atan2(I[2],I[0])})}let l=gn.map(_=>_.p[0]),d=gn.map(_=>_.p[2]);Dr={minX:Math.min(...l),maxX:Math.max(...l),minZ:Math.min(...d),maxZ:Math.max(...d)}},st=function(a){let l=(a%De+De)%De,d=0,_=gn.length-1;for(;d+1<_;){let J=d+_>>1;gn[J].s<=l?d=J:_=J}let b=gn[d],E=gn[_],I=(l-b.s)/(E.s-b.s||1),F=Math.atan2(Math.sin(E.h-b.h),Math.cos(E.h-b.h)),B=b.h+F*I;return{p:b.p.map((J,lt)=>L(J,E.p[lt],I)),h:B,T:[Math.cos(B),0,Math.sin(B)],R:[-Math.sin(B),0,Math.cos(B)],curv:F/(E.s-b.s),slope:(E.p[1]-b.p[1])/(E.s-b.s)}},Z=function(a,l){let d=a-l;return te==="circuit"&&(d-=Math.round(d/De)*De),d},Y=function(){return di+(x.timePenalty||0)},Ct=function(a){let l=Math.floor(a/60),d=a-l*60;return String(l).padStart(2,"0")+":"+d.toFixed(2).padStart(5,"0")},Ht=function(a,l){if(te!=="circuit")return!0;let d=S(st(a).p,y(st(a).R,l));for(let _=0;_<gn.length;_+=20){let b=gn[_];if(Math.abs(Z(b.s,a))>35&&Math.hypot(b.p[0]-d[0],b.p[2]-d[2])<15)return!1}return!0},qe=function(){return[[Math.cos(x.yaw),Math.sin(x.yaw)],[-Math.sin(x.yaw),Math.cos(x.yaw)]]},We=function(a){let l=qe(),d=a.angle||0,_=[[Math.cos(d),Math.sin(d)],[-Math.sin(d),Math.cos(d)]],b=[Z(x.s,a.s+(a.ds||0)),x.l-a.l-(a.dl||0)],E=a.kind==="cone"?[.39,.39]:[.35,1.1],I=1/0,F=null;for(let B of[l[0],l[1],_[0],_[1]]){let J=Math.abs(Bt(l[0],B))*qt+Math.abs(Bt(l[1],B))*le,lt=Math.abs(Bt(_[0],B))*E[0]+Math.abs(Bt(_[1],B))*E[1],xt=J+lt-Math.abs(Bt(b,B));if(xt<=0)return null;if(xt<I){I=xt;let mt=Bt(b,B)>=0?1:-1;F=B.map(vt=>vt*mt)}}return{normal:F,pen:I}},Oe=function(a,l,d=null){let _=1/Ut,b=1/Jt,E=d?d.kind==="cone"?9:85:1/0,I=d?1/E:0,F=d?[Z(x.s+l[0],d.s+(d.ds||0)),x.l+l[1]-d.l-(d.dl||0)]:[0,0],B=d?1/(E*(d.kind==="cone"?.09:.48)):0,J=[x.vS-x.spin*l[1],x.vL+x.spin*l[0]],lt=d?[(d.vS||0)-(d.omega||0)*F[1],(d.vL||0)+(d.omega||0)*F[0]]:[0,0],xt=[J[0]-lt[0],J[1]-lt[1]],mt=Bt(xt,a);if(mt>=0)return 0;let vt=Ce(l,a),Et=Ce(F,a),Nt=d?.13:.035,Mt=-(1+Nt)*mt/(_+I+vt*vt*b+Et*Et*B);x.vS+=a[0]*Mt*_,x.vL+=a[1]*Mt*_,x.spin=P(x.spin+vt*Mt*b,-2.3,2.3);let pt=[-a[1],a[0]],bt=Ce(l,pt),zt=Ce(F,pt),Ft=Bt(xt,pt),St=d?.22:.1,he=P(-Ft/(_+I+bt*bt*b+zt*zt*B),-St*Mt,St*Mt);return x.vS+=pt[0]*he*_,x.vL+=pt[1]*he*_,x.spin=P(x.spin+bt*he*b,-2.3,2.3),d&&(d.vS=(d.vS||0)-(a[0]*Mt+pt[0]*he)*I,d.vL=(d.vL||0)-(a[1]*Mt+pt[1]*he)*I,d.omega=P((d.omega||0)-(Et*Mt+zt*he)*B,-7,7),d.kind==="cone"&&(d.tilt=Math.min(1.35,(d.tilt||0)+Math.abs(Mt)*I*.015))),Math.abs(mt)},en=function(a,l){a<.7||x.contactSound>0||(x.contactSound=.16,lu(Ne(x.s,x.l,.45),Math.min(14,Math.ceil(a)),[0,1,0]),Rf(l,a),a>5&&(Or=Math.min(.25,a*.012),x.driftCharge*=.5))},Wt=function(a){x.contactSound=Math.max(0,x.contactSound-a);for(let l of cn.values())for(let d of l.entities)(d.kind==="cone"||d.kind==="barrier")&&(d.vS=(d.vS||0)*Math.exp(-a*2.4),d.vL=(d.vL||0)*Math.exp(-a*2.4),d.ds=P((d.ds||0)+d.vS*a,-18,18),d.dl=P((d.dl||0)+d.vL*a,-7.4-d.l,7.4-d.l),d.angle=(d.angle||0)+(d.omega||0)*a,d.omega=(d.omega||0)*Math.exp(-a*2));for(let l=0;l<3;l++){let d=qe(),_=Math.abs(d[0][1])*qt+Math.abs(d[1][1])*le,b=ge-_;if(Math.abs(x.l)>b){let E=Math.sign(x.l),I=[0,-E];x.l=E*(b-.015);let F=[E*(Math.sign(d[0][1])*qt*d[0][0]+Math.sign(d[1][1])*le*d[1][0]),E*_],B=Oe(I,F);en(B,"rail"),B>4&&(Xa(!1),x.turnRate*=.4,ja=!1)}if(!(x.jump>.85))for(let E of cn.values())for(let I of E.entities){if(I.kind!=="cone"&&I.kind!=="barrier"||Math.abs(Z(I.s+(I.ds||0),x.s))>4.5||Math.abs(I.l+(I.dl||0)-x.l)>4)continue;let F=We(I);if(!F)continue;let B=I.kind==="cone"?9:85,J=B/(B+Ut),lt=Math.max(0,F.pen-.008)*.82;x.s+=F.normal[0]*lt*J,x.l+=F.normal[1]*lt*J,I.ds=(I.ds||0)-F.normal[0]*lt*(1-J),I.dl=(I.dl||0)-F.normal[1]*lt*(1-J);let xt=qe(),mt=[Z(I.s+(I.ds||0),x.s),I.l+(I.dl||0)-x.l],vt=P(Bt(mt,xt[0]),-qt,qt),Et=P(Bt(mt,xt[1]),-le,le),Nt=[xt[0][0]*vt+xt[1][0]*Et,xt[0][1]*vt+xt[1][1]*Et],Mt=Oe(F.normal,Nt,I);en(Mt,I.kind)}}x.speed=Math.hypot(x.vS,x.vL),x.velocityYaw=Math.atan2(x.vL,x.vS),x.lateralSpeed=x.vL},Te=function(a,l){if(!nn.has(a)){let d=new xe;l(d),nn.set(a,d.finish())}return nn.get(a)},ln=function(a,l,d,_,b="#627596"){let E=[-l/2,_,-d/2],I=[l/2,_,-d/2],F=[l/2,_,d/2],B=[-l/2,_,d/2],J=[-l/2,_+1.3,0],lt=[l/2,_+1.3,0];$n(a,E,I,lt,J,b),$n(a,J,lt,F,B,b),$n(a,E,J,B,B,"#e9e1d2"),$n(a,I,F,lt,lt,"#e9e1d2");for(let xt=0;xt<9;xt++){let mt=-l/2+xt*l/8;$(a,[[mt,_,-d/2],[mt,_+1.3,0],[mt,_,d/2]],.025,"#8797b0")}g(a,[-l/2-.15,_+1.33,0],[l/2+.15,_+1.33,0],.08,b)},Gn=function(a,l=0){let d=["#fff0db","#e9eafa","#f9dbe2","#e0f1ec"][l%4],_=["#7190b6","#9a82b3","#be8f98","#6c9a9a"][l%4];A(a,[0,2.65,0],[6,5.3,4.8],d,.08),A(a,[0,.12,0],[6.4,.24,5.1],"#b9b7c5",.035),ln(a,6.7,5.8,5.3,_);for(let b of[-1,1])for(let E of[-1.9,0,1.9])for(let I of[1.4,3.85])A(a,[E,I,b*2.425],[1.2,1.35,.055],_,.025),A(a,[E,I,b*2.46],[1.05,1.18,.03],"#b8dfe8",.01,[0,0,0],.45),g(a,[E,I-.58,b*2.49],[E,I+.58,b*2.49],.025,"#f4f7fa"),A(a,[E,I-.72,b*2.55],[1.35,.12,.28],_,.015);A(a,[0,1.03,2.5],[1.04,2.05,.1],"#798c9c",.025),A(a,[.34,1.03,2.57],[.05,.12,.04],"#f7d5a4",.01);for(let b of[-1,1])A(a,[b*2.65,.48,2.9],[.65,.9,.7],"#b9c9b0",.035),$t(a,[b*2.65,1.14,2.9],[.6,.55,.5],"#88ba9a",!0)},li=function(a,l=0){let d=["#ef9ba5","#88bfc9","#a6a0d5"][l%3];A(a,[0,2,0],[7,4,4.8],"#fff1dd",.06),ln(a,7.7,5.8,4,"#6f7d98");for(let _ of[-2.05,0,2.05])A(a,[_,1.4,2.45],[1.8,2.15,.06],"#88afb9",.02),A(a,[_,1.45,2.5],[1.54,1.92,.025],"#c2e4e8",.015),A(a,[_,1.45,2.54],[.045,1.92,.02],"#edf6ee",.005);A(a,[0,3.03,2.65],[7.4,.7,.55],d,.035);for(let _=0;_<12;_++)A(a,[-3.35+_*.61,2.62,2.95],[.59,.24,1.15],_%2?"#fff6e3":d,.025,[.12,0,0]);for(let _ of[-1,1])g(a,[_*3.3,0,3.35],[_*3.3,2.6,3.35],.055,d);for(let _ of[-1.9,0,1.9])A(a,[_,3.04,2.96],[.45,.34,.025],"#fff6e6",.02),A(a,[_+.28,3.04,2.97],[.065,.22,.02],"#fff6e6",.01);for(let _ of[-2.6,2.7]){A(a,[_,.35,3.35],[.75,.7,.65],"#cda883",.035);for(let b of[-.14,.14])A(a,[_,.52,3.35+b],[.6,.035,.035],"#ecd3a5",.005)}A(a,[1.4,.72,3.5],[.6,1.3,.12],"#7e8f9c",.03,[.08,0,0]);for(let _=0;_<4;_++)A(a,[1.4,.38+_*.2,3.58],[.38,.025,.025],"#e9f1e8",.005)},zi=function(a,l=0){let d="#997786",_=["#f8c6dc","#f6b8d5","#ffdfeb"];g(a,[0,0,0],[l?.35:-.25,3.4,0],.18,d),g(a,[0,1.9,0],[-1.55,3.55,.2],.11,d),g(a,[.1,2.2,0],[1.55,3.8,-.25],.1,d);let E=[[-1.4,3.9,.1,1.5],[0,4.6,0,1.8],[1.6,4.05,-.2,1.5],[-.4,4,1.35,1.45],[.4,4.1,-1.3,1.5]];for(let I=0;I<E.length;I++){let[F,B,J,lt]=E[I];$t(a,[F,B,J],[lt,lt*.7,lt*.86],_[(I+l)%3],!0,.02),$t(a,[F+.2,B+.6,J+.15],[lt*.6,lt*.28,lt*.52],"#ffe8f1",!0,.01)}for(let I=0;I<12;I++){let F=I*2.399,B=.6+I%4*.38;A(a,[Math.cos(F)*B,.045,Math.sin(F)*B],[.12,.015,.065],_[I%3],.012,[0,F,0])}},Be=function(a){g(a,[0,0,0],[0,4.2,0],.14,"#9c8c84");for(let l=0;l<3;l++)$t(a,[(l-1)*.45,2.7+l*.82,0],[1.9-l*.35,.78,1.25-l*.16],["#7cb5aa","#8fc9b5","#a6d7ba"][l],!0,.02)},Je=function(a){A(a,[0,.1,0],[.55,.2,.55],"#9da8b9",.025),g(a,[0,.15,0],[0,5.6,0],.065,"#7e8da8"),$(a,[[0,5.4,0],[0,5.8,.3],[0,5.8,1.3],[0,5.5,1.55]],.055,"#7e8da8"),A(a,[0,5.46,1.55],[.65,.16,.9],"#e5edee",.05),A(a,[0,5.36,1.55],[.5,.025,.72],"#fff0b3",.025,[0,0,0],.1)},ci=function(a){for(let l of[-4,4])g(a,[l,0,0],[l*.94,6.3,0],.29,"#d98085"),g(a,[l,0,0],[l,.75,0],.31,"#66728c"),g(a,[l*.95,4.65,0],[l*.95,6.65,0],.32,"#dc8d91");A(a,[0,5,0],[9.8,.36,.48],"#d68183",.06),$(a,[[-5.65,6.55,0],[-4.5,6.3,0],[0,6.2,0],[4.5,6.3,0],[5.65,6.55,0]],.25,"#6d7089"),g(a,[0,5,0],[0,6.15,0],.13,"#d68183"),A(a,[0,5.65,.31],[.9,1.12,.15],"#55677e",.02),A(a,[0,5.65,.4],[.5,.69,.025],"#edcf9d",.01)},Ge=function(a){A(a,[0,.25,0],[13,.5,6.8],"#c6c4ce",.04);for(let l of[-5,0,5])for(let d of[-2.2,2.2])g(a,[l,.5,d],[l,4.1,d],.1,"#8fa2ad");ln(a,14,7.8,4.1,"#73849c");for(let l=0;l<12;l++)A(a,[-5.8+l*1.05,.53,3],[.8,.025,.2],"#f6dfa0",.008);A(a,[0,3.2,2.6],[4,.9,.22],"#eef5ed",.04),A(a,[-1.55,3.2,2.75],[.45,.45,.04],"#8ec9c5",.03);for(let l=0;l<6;l++)A(a,[-.8+l*.45,3.2,2.75],[.19,.24,.03],"#8294a8",.01);for(let l of[-3.5,3.5]){A(a,[l,1.02,0],[2.7,.15,.65],"#c2a38c",.02);for(let d of[-.95,.95])g(a,[l+d,.5,0],[l+d,.95,0],.06,"#8c91a3")}},hi=function(a){for(let l of[-1.16,1.16])A(a,[0,.05,l],[20,.1,.09],"#81929f",.015);for(let l=0;l<20;l++)A(a,[-9.5+l,.005,0],[.23,.07,3.4],"#bea58d",.015);A(a,[0,1.65,0],[13,2.7,3],"#edf5dc",.25),A(a,[0,1.25,0],[13.15,.38,3.06],"#83bcb6",.04),A(a,[0,3.08,0],[12.5,.25,3.1],"#b3bfc6",.12);for(let l of[-1,1]){for(let d=0;d<7;d++){let _=-5.2+d*1.73;A(a,[_,2,l*1.52],[1.35,1.05,.06],"#769ba8",.04),A(a,[_,2.1,l*1.56],[1.16,.8,.025],"#bbdfe6",.03)}for(let d of[-4.3,4.3])$t(a,[d,.45,l*1.16],[.49,.49,.13],"#596980",!0),A(a,[d,.48,l*1.31],[.19,.19,.03],"#bfccd1",.03)}for(let l of[-6.55,6.55]){A(a,[l,2.1,0],[.06,1.05,2.1],"#acd2dd",.05);for(let d of[-.9,.9])$t(a,[l,1.25,d],[.05,.13,.13],"#fff4ba",!0)}$(a,[[-1.5,3.25,0],[0,4.3,0],[1.5,3.25,0]],.055,"#718699"),g(a,[-.65,4.3,0],[.65,4.3,0],.07,"#718699")},ki=function(a){A(a,[0,4.8,0],[24,9.6,7],"#f4eedf",.06),ln(a,25.2,8.2,9.6,"#8095ad"),A(a,[0,6.1,3.7],[4.8,12.2,2],"#e6eaf0",.06),ln(a,5.4,3.1,12.2,"#879bb4");for(let l of[-10,-7,-4,4,7,10])for(let d of[2,4.8,7.6])A(a,[l,d,3.56],[1.9,1.65,.06],"#8da6b8",.025),A(a,[l,d,3.61],[1.64,1.41,.025],"#c7e9eb",.015),A(a,[l,d,3.65],[.045,1.41,.025],"#f6f5ed",.005);A(a,[0,1.5,4.75],[3.2,2.8,.06],"#9cbdcd",.025);for(let l of[-.75,.75])A(a,[l,1.5,4.81],[.035,2.7,.025],"#f7eee4",.005);$t(a,[0,10.2,4.77],[.9,.9,.06],"#fff7df",!0,.02),a.add(ct(.89,.045,28,7),D(0,10.2,4.84),"#7f91a8",.08),g(a,[0,10.2,4.91],[0,10.8,4.91],.03,"#697e98"),g(a,[0,10.2,4.92],[.43,10.4,4.92],.03,"#697e98"),A(a,[0,-.02,7.5],[23,.1,12],"#e2e1db",.03);for(let l of[-5.5,5.5])A(a,[l,1.5,12.1],[.8,3,.8],"#e8dbc7",.04),A(a,[l,3.06,12.1],[1,.2,1],"#a1acb9",.025);for(let l of[-1,1])for(let d=0;d<8;d++){let _=l*(6.4+d*.65);g(a,[_,0,12],[_,1.8,12],.025,"#9cacc0")}for(let l of[-1,1])g(a,[l*6,1.65,12],[l*11.5,1.65,12],.035,"#9cacc0")},Ha=function(a){A(a,[0,1.25,0],[1.2,2.5,.82],"#f3a4ad",.09),A(a,[-.13,1.55,.43],[.82,1.35,.05],"#b6e0e9",.03);for(let l=0;l<3;l++)for(let d=0;d<3;d++)A(a,[-.4+d*.27,1.12+l*.4,.48],[.13,.23,.06],["#f9e2ad","#a3d2cc","#d3c5ec"][d],.025),A(a,[-.4+d*.27,.94+l*.4,.49],[.1,.04,.02],"#fff0c7",.005);A(a,[0,.47,.44],[.75,.24,.055],"#738698",.03),A(a,[.43,1.3,.45],[.13,.18,.04],"#fff0b8",.02)},Mf=function(a){g(a,[0,0,0],[0,2.6,0],.08,"#8c7e8a"),A(a,[0,2.55,0],[.55,.16,.55],"#877d92",.025),A(a,[0,2.22,0],[.41,.52,.41],"#ffe4ad",.04),A(a,[0,1.93,0],[.52,.12,.52],"#a19caa",.025);for(let l of[-.2,.2])for(let d of[-.2,.2])g(a,[l,1.98,d],[l,2.49,d],.018,"#927f8d")},Sf=function(a,l){let d=l==="left"?-1:1;g(a,[0,0,0],[0,2.4,0],.055,"#8499b0"),A(a,[0,2.28,0],[2.9,.78,.18],"#f3eacb",.04);for(let _=0;_<3;_++){let b=-.86+_*.86;g(a,[b-d*.25,2.02,.12],[b+d*.15,2.28,.12],.055,"#bd8faf"),g(a,[b+d*.15,2.28,.12],[b-d*.25,2.54,.12],.055,"#bd8faf")}},bf=function(a){return Te(a,l=>{a.startsWith("house")?Gn(l,Number(a.slice(-1))):a.startsWith("shop")?li(l,Number(a.slice(-1))):a.startsWith("cherry")?zi(l,Number(a.slice(-1))):a==="pine"?Be(l):a==="lamp"?Je(l):a==="torii"?ci(l):a==="station"?Ge(l):a==="tram"?hi(l):a==="vending"?Ha(l):a==="school"?ki(l):a==="lantern"?Mf(l):(a==="left"||a==="right")&&Sf(l,a)})},Tf=function(a){let l=(a%De+De)%De/De,d=je().sectors,_=d[0];for(let b of d)l>=b.at&&(_=b);return _},wf=function(a,l,d){let _=new ue,b=a*40,E=(B,J,lt,xt=1,mt=0)=>{if(te==="circuit"&&J>=De||!Ht(J,lt))return null;let vt=Me(J),Et=Ne(J,lt,-.05),Nt=-vt.h+(lt>0?v:0)+mt,Mt=new ue(bf(B),z(R(Et,l),[xt,xt,xt],[0,Nt,0]));return _.add(Mt),Mt},I=te==="circuit"&&je().biome===1;for(let B of[-1,1]){E("lamp",b+7,B*9.65);for(let J=0;J<2;J++)E("cherry"+(a+J)%2,b+10+J*20,B*(I?11.3:12.5),I?1.12:.92);(a%2===0||I)&&a%3!==1&&!(a===2&&B<0)&&!(I&&a===0&&B>0)&&E("house"+(a+(B>0?1:0))%4,b+19,B*(16.5+d()*2),.9+d()*.25),a%3===1&&!(a===2&&B<0)&&E("shop"+a%3,b+18,B*17.5),a%5===0&&E("vending",b+9,B*10.1),a%3===0&&E("pine",b+32,B*22,1.5)}let F=wn(Me(b+37).h-Me(b+7).h);if(Math.abs(F)>.25&&E(F>0?"right":"left",b+5,(F>0?-1:1)*9.4,1,F>0?-v/2:v/2),te==="circuit"){let B=(b+20)/De;if(I&&a===0&&E("school",b+21,28),a===2&&(E("station",b+17,-20,1),E("tram",b+17,-27,1),E("vending",b+9,-12.8)),B>.66&&B<.74&&a%2===0){E("torii",b+22,-16);for(let J of[-1,1])E("lantern",b+9,J*10)}}return _},Ef=function(){ui&&ui.mesh.dispose(),ui&&(ui.mesh.dispose(),ui=null);let a=new xe,l=Dr,d=[(l.minX+l.maxX)*.5,0,(l.minZ+l.maxZ)*.5],_=l.maxX-l.minX,b=l.maxZ-l.minZ;if(je().biome===0)for(let[I,F,B,J]of[[_*.82,b*.89,-.43,"#eadfce"],[_*.78,b*.85,-.3,"#c7d9b4"]]){let lt=[d[0],B,d[2]],xt=[0,1,0],mt=[];for(let vt=0;vt<=96;vt++){let Et=vt*f/96,Nt=1+.025*Math.sin(Et*5);lt.push(d[0]+Math.cos(Et)*I*Nt,B,d[2]+Math.sin(Et)*F*Nt),xt.push(0,1,0),vt&&mt.push(0,vt,vt+1)}a.add(Se(lt,xt,mt),ye,J,.02)}for(let I=0;I<12;I++){let F=I*f/12,B=320+I%3*36,J=d[0]+Math.cos(F)*B,lt=d[2]+Math.sin(F)*B,xt=40+I%4*18;q(a,[J,xt*.5-5,lt],[70,xt,60],["#b5c4de","#a6bfd8","#c6cfdf"][I%3],[0,F,0],!0),I%3===0&&q(a,[J,xt*.85-5,lt],[25,xt*.3,22],"#e5e5f0",[0,F,0],!0)}for(let I=0;I<10;I++){let F=I*f/10,B=[d[0]+Math.cos(F)*260,57+I%3*14,d[2]+Math.sin(F)*250];for(let J=0;J<4;J++)$t(a,S(B,[(J-1.5)*12,Math.sin(J*2)*4,0]),[17,7+J%2*3,10],"#fff5f3",!0,.01)}ui=new ue(a.finish()),ui.shadow=!1,Qh=Ke,lc=Array.from({length:24},(I,F)=>({phase:F*2.399,node:new ue(Af)}));for(let I of lc)I.node.shadow=!1},Cf=function(a,l){if(te!=="circuit")return;(Qh!==Ke||!ui)&&Ef(),ui.local=D(-a[0],-a[1],-a[2]),Ee.add(ui);let d=Me(x.s);for(let _ of lc){let b=_.phase,E=(b*13+l*1.7)%55-10,I=Math.sin(b*7)*10+Math.sin(l*.6+b)*2,F=1+((b*2-l*.65)%7+7)%7,B=S(Ne(x.s+E,I,F),[Math.sin(l+b)*.25,0,0]);_.node.local=z(R(B,a),[1,1,1],[l*.8+b,b,l]),Ee.add(_.node)}},Wa=function(){if(!we)try{let xt=function(Nt,Mt){let pt=a.createBufferSource(),bt=a.createBiquadFilter(),zt=a.createGain();return pt.buffer=J,pt.loop=!0,bt.type=Nt,bt.frequency.value=Mt,zt.gain.value=0,pt.connect(bt),bt.connect(zt),zt.connect(l),pt.start(),{source:pt,filter:bt,gain:zt}},a=new(window.AudioContext||window.webkitAudioContext),l=a.createGain(),d=a.createDynamicsCompressor();l.gain.value=Nn?.48:0,l.connect(d),d.threshold.value=-18,d.ratio.value=4,d.connect(a.destination);let _=a.createGain(),b=a.createBiquadFilter();b.type="lowpass",b.frequency.value=1e3,_.gain.value=0,b.connect(_),_.connect(l);let E=a.createOscillator(),I=a.createOscillator(),F=a.createOscillator(),B=a.createGain();E.type="sawtooth",I.type="triangle",F.type="sine",I.detune.value=9,B.gain.value=.6;for(let Nt of[E,I])Nt.connect(b),Nt.start();F.connect(B),B.connect(b),F.start();let J=a.createBuffer(1,a.sampleRate*2,a.sampleRate),lt=J.getChannelData(0);for(let Nt=0;Nt<lt.length;Nt++)lt[Nt]=Math.random()*2-1;let mt=xt("lowpass",1100),vt=xt("bandpass",1800),Et=xt("highpass",2200);vt.filter.Q.value=3.5,we={ctx:a,master:l,engine1:E,engine2:I,sub:F,engineGain:_,engineFilter:b,noise:J,wind:mt,tire:vt,turbo:Et,oldSpeed:0,oldBoost:!1,gear:0},Object.keys(s).length&&(we.rail=Du(a,l,s),we.rail.load())}catch{}},Vi=function(a=620,l=.1){if(!Nn||!we)return;let{ctx:d,master:_}=we,b=d.createOscillator(),E=d.createGain();b.type="sine",b.frequency.setValueAtTime(a,d.currentTime),b.frequency.exponentialRampToValueAtTime(a*1.28,d.currentTime+l),E.gain.setValueAtTime(.07,d.currentTime),E.gain.exponentialRampToValueAtTime(.001,d.currentTime+l),b.connect(E),E.connect(_),b.start(),b.stop(d.currentTime+l+.02)},Rf=function(a,l){if(!Nn||!we||a==="rail"&&we.rail?.play(l))return;let{ctx:d,master:_,noise:b}=we,E=d.createBufferSource(),I=d.createBiquadFilter(),F=d.createGain(),B=d.currentTime;if(E.buffer=b,I.type="bandpass",I.frequency.value=a==="rail"?1400:a==="cone"?450:700,I.Q.value=a==="rail"?1.5:.6,F.gain.setValueAtTime(Math.min(.3,.035+l*.018),B),F.gain.exponentialRampToValueAtTime(.001,B+.16),E.connect(I),I.connect(F),F.connect(_),E.start(),E.stop(B+.2),a==="rail"){let J=d.createOscillator(),lt=d.createGain();J.type="triangle",J.frequency.setValueAtTime(330,B),J.frequency.exponentialRampToValueAtTime(140,B+.15),lt.gain.setValueAtTime(.07,B),lt.gain.exponentialRampToValueAtTime(.001,B+.2),J.connect(lt),lt.connect(_),J.start(),J.stop(B+.21)}},Pf=function(){if(!we)return;let a=we,l=a.ctx.currentTime,d=ne==="running",_=x.speed,b=Math.min(5,Math.floor(_/9)),E=48+_*2.2+_%9*5;(!d||!Nn||An.sfxVolume<=0)&&a.rail?.stop(),a.master.gain.setTargetAtTime(Nn?.48*An.sfxVolume:0,l,.05);let I=d?.012+Math.min(.04,_*7e-4)+(Le.gas?.013:0):0;a.engineGain.gain.setTargetAtTime(I,l,.07),a.engineFilter.frequency.setTargetAtTime(550+_*25+(Le.gas?500:0),l,.12);let F=b!==a.gear?.8:1;a.gear=b,a.engine1.frequency.setTargetAtTime(E*F,l,.045),a.engine2.frequency.setTargetAtTime(E*1.5*F,l,.065),a.sub.frequency.setTargetAtTime(E*.5,l,.07),a.wind.gain.gain.setTargetAtTime(d?Math.pow(_/65,2)*.12:0,l,.15),a.wind.filter.frequency.setTargetAtTime(700+_*25,l,.12);let B=Math.abs(wn(x.yaw-x.velocityYaw)),J=Le.brake&&_>5,lt=x.jump<.1?Math.min(1,(x.drifting?B*1.8:Math.max(0,B-.18)*2)+(J?.55:0)):0;a.tire.gain.gain.setTargetAtTime(d?lt*.075:0,l,.045),a.tire.filter.frequency.setTargetAtTime(1300+_*24+Math.sin(Gs*40)*90,l,.05),a.turbo.gain.gain.setTargetAtTime(d?x.boostBlend*.075:0,l,.1),a.turbo.filter.frequency.setTargetAtTime(1600+x.boostBlend*2400,l,.12),d&&x.boostActive&&!a.oldBoost&&Vi(340,.17),a.oldBoost=x.boostActive,a.oldSpeed=_},Bs=function(a){if(!Nn||!we)return;let{ctx:l,master:d,noise:_}=we,b=l.currentTime,E=l.createBufferSource(),I=l.createBiquadFilter(),F=l.createGain(),B=a==="nitro"||a==="combo",J=B?.48:a==="drift"?.12:.23;E.buffer=_,I.type=a==="land"?"lowpass":"bandpass",I.Q.value=.75,I.frequency.setValueAtTime(a==="land"?300:B?650:1500,b),I.frequency.exponentialRampToValueAtTime(B?5500:700,b+J),F.gain.setValueAtTime(.001,b),F.gain.linearRampToValueAtTime(B?.19:.1,b+.025),F.gain.exponentialRampToValueAtTime(.001,b+J),E.connect(I),I.connect(F),F.connect(d),E.start(),E.stop(b+J+.03),(a==="combo"||a==="small")&&Vi(a==="combo"?1080:820,.08)},tu=function(a){if(x.nitro>=2){x.energy=Math.min(99,x.energy+a);return}for(x.energy+=a;x.energy>=100&&x.nitro<2;)x.energy-=100,x.nitro++,_n("NITRO READY","\u6C2E\u6C14\u5DF2\u88C5\u74F6 \xB7 E \u91CA\u653E 3.2 \u79D2",1.2),Vi(1050,.09)},eu=function(a){x.jetHistory.push({kind:a,t:di}),x.jetHistory=x.jetHistory.filter(d=>di-d.t<2.5).slice(-3);let l=x.jetHistory.map(d=>d.kind).join("");(l==="CWW"||l==="WCW")&&(x.combo=l,x.comboTimer=1.3,x.mini=Math.max(x.mini,.88),l==="WCW"&&(x.nitroTime+=.35),_n(l+" \u55B7",l==="CWW"?"\u6C2E\u6C14 \u2192 \u5C0F\u55B7 \u2192 \u5C0F\u55B7 \xB7 \u9AD8\u901F\u51FA\u5F2F":"\u5C0F\u55B7 \u2192 \u6C2E\u6C14 \u2192 \u5C0F\u55B7 \xB7 \u5EF6\u957F\u55B7\u5C04",1.35),Bs("combo"))},Lf=function(){ne!=="running"||x.nitro<1||x.nitroTime>0||(x.nitro--,x.nitroTime=3.2,_n("NITRO","\u6C2E\u6C14\u55B7\u5C04 \xB7 3.2 \u79D2",.8),eu("C"),Bs("nitro"))},Df=function(){ne!=="running"||x.smallJets<1||x.smallWindow<=0||x.jetCooldown>0||(x.smallJets--,x.jetCooldown=.18,x.mini=.72,x.smallWindow=x.smallJets?1.15:0,x.smallCount++,eu("W"),Bs("small"),x.comboTimer<=0&&_n(x.smallCount>1?"DOUBLE BOOST":"MINI BOOST",x.smallCount>1?"\u53CC\u55B7 \xB7 \u8FDE\u7EED\u51FA\u5F2F\u52A0\u901F":"\u5C0F\u55B7 \xB7 \u53CA\u65F6\u63A5\u4E0B\u4E00\u55B7",.75))},cc=function(a=2,l="\u5C0F\u55B7\u5DF2\u5C31\u7EEA"){x.smallJets=Math.max(x.smallJets,a),x.smallWindow=1.5,x.smallCount=0,_n(l,"\u70B9 \u7A7A\u683C / Q\uFF0C\u6216\u91CD\u65B0\u6309 W \xB7 \u8FDE\u70B9\u4E24\u6B21\u53CC\u55B7",1.1),Vi(760,.06)},hc=function(){x.driftRewarded||x.driftCharge<.1||x.driftDuration<.11||(x.driftRewarded=!0,cc(x.driftCharge>.35?2:1,x.driftCharge>.35?"\u53CC\u55B7\u5DF2\u5C31\u7EEA":"\u5C0F\u55B7\u5DF2\u5C31\u7EEA"))},Xa=function(a=!0){x.drifting&&(a&&hc(),x.drifting=!1,x.driftPhase="exit",x.exitTime=.45,x.exitFromGrip=x.tireGrip||3.6,x.exitFromLimit=x.tireLimit||38,x.driftCharge=0,x.driftDuration=0,x.driftSide=0,x.driftReleasing=!1)},Nf=function(a){x.drifting=!0,x.driftSide=a,x.driftCharge=0,x.driftDuration=0,x.driftPhase="entry",x.driftRewarded=!1,x.driftReleasing=!1,x.releaseAge=0,x.driftLatch=!0,x.driftCooldown=.16,x.exitTime=0,x.turnRate+=a*.38,x.gripRecovery=0,Bs("drift")},Uf=function(a){x.prevPose={s:x.s,l:x.l,yaw:x.yaw,jump:x.jump};let l=Me(x.s),d=x.s,_=typeof qi=="number"?qi:(Le.right?1:0)-(Le.left?1:0);x.speed=Math.hypot(x.vS,x.vL);for(let zt of["pad","mini","nitroTime","smallWindow","jetCooldown","comboTimer","exitTime","driftCooldown","driftBuffer","lastSteerTime","jetInputBuffer","boostInputBuffer"])x[zt]=Math.max(0,x[zt]-a);x.smallWindow===0&&(x.smallJets=0),Hs=L(Hs,_,1-Math.exp(-a*(_?26:20)));let b=Hn.drift>0||Le.drift&&!x.prevDrift,E=_&&_!==x.prevSteer;Hn.drift=0,Le.drift||(x.driftLatch=!1),b&&(x.driftBuffer=.26),_&&(x.lastSteer=Math.sign(_),x.lastSteerTime=.2);let I=x.jump<.12,F=x.speed>.4?Math.atan2(x.vL,x.vS):x.yaw,B=wn(x.yaw-F),J=(Math.abs(_)>.12?Math.sign(_):0)||(x.lastSteerTime>0?x.lastSteer:Math.abs(B)>.07?Math.sign(B):0);if(!x.drifting&&x.driftCooldown===0&&I&&x.speed>5&&J&&(Le.drift&&(!x.driftLatch||E&&J!==x.lastDriftSide)||x.driftBuffer>0)?(Nf(J),x.lastDriftSide=J,x.driftBuffer=0):x.drifting&&b&&x.driftDuration>.18&&(_*x.driftSide<0||x.driftReleasing)&&(hc(),x.driftReleasing=!0,x.releaseAge=Math.max(.18,x.releaseAge),x.driftBuffer=0),x.drifting){x.driftDuration+=a;let zt=_*x.driftSide<0;x.speed<3.5||!I?Xa(!1):(!Le.drift&&x.driftDuration>.14&&(x.driftReleasing=!0),x.driftReleasing&&(x.releaseAge+=a),x.driftPhase=x.driftReleasing?"release":zt?"counter":x.driftDuration<.18?"entry":"hold",(zt||x.driftReleasing)&&Math.abs(B)<.75&&hc(),(x.driftReleasing&&(x.releaseAge>.55||Math.abs(B)<.065&&x.releaseAge>.16)||zt&&Math.abs(B)<.075&&x.driftDuration>.22)&&Xa(!0))}(Hn.boost>0||Le.boost&&!x.prevBoost)&&(x.boostInputBuffer=.15),(Hn.small>0||Le.small&&!x.prevSmall||Le.gas&&!x.prevGas)&&(x.jetInputBuffer=.15),Hn.boost=0,Hn.small=0,x.boostInputBuffer>0&&x.nitro>0&&x.nitroTime<=0&&(Lf(),x.boostInputBuffer=0),x.jetInputBuffer>0&&x.smallJets>0&&x.jetCooldown<=0&&(Df(),x.jetInputBuffer=0);let lt=If.step(x,{steer:typeof qi=="number"?qi:_,gas:Le.gas||sn.autoGas&&!Le.brake||Xi&&!Le.brake,brake:Le.brake},a,{sensitivity:sn.sensitivity});Hs=x.steering,x.boostActive=x.nitroTime>0,x.boostBlend=L(x.boostBlend,lt.boost?1:0,1-Math.exp(-a*7));let xt=P(1-l.curv*x.l,.45,1.55),mt=x.vS/xt*a;x.s=Math.max(-8,x.s+mt),x.l+=x.vL*a;let vt=Me(x.s),Et=wn(vt.h-l.h),Nt=x.vS,Mt=x.vL;x.vS=Nt*Math.cos(Et)+Mt*Math.sin(Et),x.vL=-Nt*Math.sin(Et)+Mt*Math.cos(Et),x.yaw=wn(x.yaw-Et);let pt=x.jump>0;(pt||x.vy>0)&&(x.vy-=17*a,x.jump=Math.max(0,x.jump+x.vy*a),x.jump<=0&&(x.vy=0,pt&&(cc(1,"\u843D\u5730\u55B7\u5DF2\u5C31\u7EEA"),Bs("land")))),Wt(a),mc-=x.vS*a/.4,di+=a,Gs+=a,x.score+=Math.max(0,mt)*.85;let bt=Math.abs(wn(x.yaw-x.velocityYaw));if(x.drifting&&bt>.035&&x.speed>5&&Math.abs(x.l)<7){let zt=a*P((bt+.025)*x.speed*.11,0,3);x.driftCharge+=zt,tu(zt*42),x.score+=a*35}ja=x.drifting,(Le.gas||sn.autoGas)&&!Le.brake&&x.speed<.7&&Math.abs(x.l)>5.8?x.stuckTime+=a:x.stuckTime=0,x.stuckTime>1.6&&xc(!0);for(let zt of cn.values())for(let Ft of zt.entities){if(Ft.kind==="cone"||Ft.kind==="barrier")continue;let St=Ft.s;te==="circuit"&&(St+=Math.round((x.s-St)/De)*De);let he=te==="circuit"?Math.max(0,Math.floor(St/De)):0;Ft.hitLap===he||St<Math.min(d,x.s)-1.4||St>Math.max(d,x.s)+1.4||Math.abs(x.l-Ft.l)>Ft.width||(Ft.kind==="coin"?(Ft.hitLap=he,Ft.hit=!0,x.coins++,tu(3),x.score+=50,Vi(700+x.coins%5*80,.04)):Ft.kind==="pad"?(Ft.hitLap=he,x.pad=1.55,_n("BOOST STRIP","\u52A0\u901F\u5E26 \xB7 \u4FDD\u6301\u8DEF\u7EBF",1),Bs("nitro")):Ft.kind==="ramp"&&x.vS>7&&(Ft.hitLap=he,x.vy=8,x.jump=.1,x.score+=120,cc(1,"\u7A7A\u55B7\u5DF2\u5C31\u7EEA")))}x.s>=x.checkpoint&&(x.checkpoint+=500,x.score+=500,_n("CHECKPOINT",Math.floor(x.s/500)*500+" m",1)),x.prevSteer=_,x.prevDrift=Le.drift,x.prevBoost=Le.boost,x.prevSmall=Le.small,x.prevGas=Le.gas,zf(a),ou(),ep(a),te==="circuit"&&x.s>=wi()&&_c()},zs=function(){let a={...Le};for(let l in Le)Le[l]=!1;for(let l of qa)to[l]&&(Le[to[l]]=!0);for(let l of Ya.values())Le[l]=!0;for(let l in Hn)Le[l]&&!a[l]&&Hn[l]++},su=function(){return Za=Math.imul(Za,1664525)+1013904223>>>0,Za/4294967296},Bf=function(a){let l=(Math.imul(a+419,2654435761)^Vs)>>>0;return()=>(l=Math.imul(l,1664525)+1013904223>>>0,l/4294967296)},ru=function(a){return 1.7*Math.sin(a*.005)+.65*Math.sin(a*.017)},gc=function(a){if(te!=="circuit")for(;Kn[Kn.length-1].s<a+8;){let l=Kn[Kn.length-1],d=l.s+4;d>pc&&(fc=-v/2+(su()-.5)*2.15,pc=d+90+su()*130);let _=P((fc-l.h)*.022,-.0175,.0175);Ka=L(Ka,_,.15);let b=l.h+Ka*4;Kn.push({s:d,p:[l.p[0]+Math.cos((b+l.h)*.5)*4,ru(d),l.p[2]+Math.sin((b+l.h)*.5)*4],h:b})}},Me=function(a){if(te==="circuit")return st(a);gc(a);let l=Math.floor((a+80)/4),d=P(l-Ur,0,Kn.length-2),_=Kn[d],b=Kn[d+1],E=P((a-_.s)/4,0,1),I=L(_.h,b.h,E);return{p:_.p.map((B,J)=>L(B,b.p[J],E)),h:I,T:[Math.cos(I),0,Math.sin(I)],R:[-Math.sin(I),0,Math.cos(I)],curv:(b.h-_.h)/4,slope:(b.p[1]-_.p[1])/4}},Ne=function(a,l=0,d=0){let _=Me(a);return S(S(_.p,y(_.R,l)),[0,d,0])},$n=function(a,l,d,_,b,E){let I=C(N(R(d,l),R(b,l)));I[1]<0&&(I=y(I,-1)),a.add(Se([...l,...d,..._,...b],[...I,...I,...I,...I],[0,1,2,0,2,3]),ye,E,.06)},au=function(a){let l=a*40,d=Me(l).p,_=new xe,b=Bf(a),E=te==="circuit"?uc[je().biome]:uc[(Math.floor(Math.max(0,l)/1e3)%3+3)%3],I=lt=>R(lt,d);for(let lt=0;lt<10;lt++){let xt=l+lt*4;if(te==="circuit"&&xt>=De)break;let mt=Me(xt),vt=Me(te==="circuit"?Math.min(xt+4,De):xt+4),Et=(Nt,Mt,pt)=>I(S(S(Nt.p,y(Nt.R,Mt)),[0,pt,0]));$n(_,Et(mt,-7,.04),Et(mt,7,.04),Et(vt,7,.04),Et(vt,-7,.04),"#69728e");for(let Nt of[-1,1])$n(_,Et(mt,Nt*7,.06),Et(mt,Nt*7.65,.06),Et(vt,Nt*7.65,.06),Et(vt,Nt*7,.06),(a*10+lt)%2?"#d1b5e0":"#f4eced"),$n(_,Et(mt,Nt*7.65,-.02),Et(mt,Nt*(te==="circuit"?11:64),-.08),Et(vt,Nt*(te==="circuit"?11:64),-.08),Et(vt,Nt*7.65,-.02),E.ground);if(te==="circuit")for(let Nt of[-1,1])$n(_,Et(mt,Nt*8.6,.06),Et(mt,Nt*11,.06),Et(vt,Nt*11,.06),Et(vt,Nt*8.6,.06),"#d9d9e4"),$n(_,Et(mt,Nt*11,.06),Et(mt,Nt*11,-1.25-mt.p[1]),Et(vt,Nt*11,-1.25-vt.p[1]),Et(vt,Nt*11,.06),"#b5bbcb");if(te==="circuit")for(let Nt of[-1,1])Ht(xt+2,Nt*20)&&($n(_,Et(mt,Nt*11,-.12),Et(mt,Nt*28,-.12),Et(vt,Nt*28,-.12),Et(vt,Nt*11,-.12),E.ground),$n(_,Et(mt,Nt*28,-.12),Et(mt,Nt*28,-1.25-mt.p[1]),Et(vt,Nt*28,-1.25-vt.p[1]),Et(vt,Nt*28,-.12),"#bdc4c7"));if(lt%3===0)for(let Nt of[-2.33,2.33]){let Mt=Ne(xt+1.5,Nt,.061);_.add(Vt(2.2,.015,.07,.004),z(I(Mt),[1,1,1],[0,-mt.h,0]),"#e0e4e8")}}for(let lt of[-1,1]){let xt=Array.from({length:11},(mt,vt)=>I(Ne(l+vt*4,lt*8.1,.72)));$(_,xt,.07,"#b7c6d9"),$(_,Array.from({length:11},(mt,vt)=>I(Ne(l+vt*4,lt*8.1,.4))),.045,"#c7d5e2");for(let mt=0;mt<5;mt++){let vt=l+3+mt*8;if(te==="circuit"&&vt>De)break;let Et=I(Ne(vt,lt*8.1,0));g(_,Et,S(Et,[0,.84,0]),.055,"#9caec2"),A(_,S(Et,[0,.75,0]),[.12,.15,.19],mt%2?"#f7bbcf":"#fff1b9",.02)}}let F=[];function B(lt,xt,mt){if(te==="circuit"&&xt>De-20)return;let vt=lt==="coin"?kn:lt==="pad"?oc:lt==="ramp"?Ir:lt==="cone"?Ue:Kt;F.push({kind:lt,s:xt,l:mt,node:new ue(vt),hit:!1,width:lt==="barrier"?1.5:lt==="cone"?.85:lt==="coin"?1.12:1.9})}if(a>=2){let lt=Math.floor(b()*3),xt=[-4.2,0,4.2],mt=te==="circuit"?Math.abs(Me(l+22).curv)<.013?.42:.12:a<7?.55:.85;if(b()<mt){let vt=(lt+1+Math.floor(b()*2))%3;B(b()<.75?"cone":"barrier",l+22,te==="circuit"?vt===1?-5.5:Math.sign(xt[vt])*5.5:xt[vt]),te==="endless"&&a>10&&b()<.28&&B("cone",l+22,xt[3-lt-vt])}for(let vt=0;vt<4;vt++)B("coin",l+7+vt*7,xt[lt]);a%4===0?B("pad",l+14,xt[lt]):a>8&&a%7===0&&B("ramp",l+14,xt[lt])}if(a===0){for(let mt=0;mt<12;mt++){let vt=Ne(0,-7+mt*1.16,.075),Et=Me(0);_.add(Vt(.9,.015,1.12,.003),z(I(vt),[1,1,1],[0,-Et.h,0]),mt%2?"#e8e7ed":"#424b66")}for(let mt of[-1,1]){let vt=I(Ne(0,mt*7.75,0));g(_,vt,S(vt,[0,5,0]),.12,At)}let lt=I(Ne(0,-7.75,5)),xt=I(Ne(0,7.75,5));g(_,lt,xt,.16,At);for(let mt=0;mt<7;mt++)$t(_,I(Ne(0,-4.5+mt*1.5,5)),[.24,.24,.24],mt%2?"#f9d997":"#bfd9f4",!0)}let J=new ue(_.finish());return J.add(wf(a,d,b)),{k:a,origin:d,node:J,entities:F}},ou=function(){if(te==="circuit"){let _=Math.ceil(De/40);for(let b=0;b<_;b++)cn.has(b)||cn.set(b,au(b));return}let a=Math.max(-2,Math.floor(x.s/40)-3),l=Math.floor(x.s/40)+9;gc((l+1)*40);for(let _=a;_<=l;_++)cn.has(_)||cn.set(_,au(_));for(let[_,b]of cn)_<a&&(b.node.mesh.dispose(),cn.delete(_));let d=Math.floor((x.s-210+80)/4);if(d>Ur){let _=Math.min(d-Ur,Kn.length-10);Kn.splice(0,_),Ur+=_}},gs=function(){qa.clear(),Ya.clear();for(let a in Hn)Hn[a]=0;for(let a in Le)Le[a]=!1;for(let a of document.querySelectorAll(".touch button"))a.classList.remove("held")},jn=function(a=!1){if(te==="circuit"?(V(),Vs=Ke==="coast-reborn"?73121:95276):a&&(Vs=(Date.now()>>>0)%999999||72319),dc&&cn.size)nu.set(dc,cn);else for(let l of cn.values())l.node.mesh.dispose();cn=te==="circuit"?nu.get(Ke)||new Map:new Map,dc=te==="circuit"?Ke:null;for(let l of cn.values())for(let d of l.entities){d.hit=!1,delete d.hitLap;for(let _ of["ds","dl","vS","vL","angle","omega","tilt"])d[_]=0}Kn=[{s:-80,p:[0,ru(-80),80],h:-v/2}],Ur=0,fc=-v/2,pc=115,Ka=0,Za=Vs,Object.assign(x,{s:0,l:0,speed:0,steering:0,vS:0,vL:0,spin:0,contactSound:0,yaw:0,velocityYaw:0,energy:0,nitro:1,nitroTime:0,turnRate:0,driftDuration:0,driftLatch:!1,driftRewarded:!1,driftReleasing:!1,releaseAge:0,gripRecovery:0,driftCooldown:0,driftBuffer:0,lastSteer:0,lastSteerTime:0,prevSteer:0,lastDriftSide:0,jetInputBuffer:0,boostInputBuffer:0,tireGrip:10.5,tireLimit:68,exitFromGrip:3.6,exitFromLimit:38,driftPhase:"grip",exitTime:0,smallJets:0,smallWindow:0,smallCount:0,jetCooldown:0,jetHistory:[],combo:"",comboTimer:0,prevDrift:!1,prevBoost:!1,prevSmall:!1,prevGas:!1,coins:0,score:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,stuckTime:0,timePenalty:0}),mc=0,di=0,Gs=0,ja=!1,Hs=0,fs=0,ks=60,ps=null,Nr=0;for(let l of ms)l.life=0;for(let l of ds)l.life=0;gs(),gc(420),ou(),Xs=null,zr=null,_s=null,x.prevPose=null,U("seedText").textContent=String(Vs).padStart(6,"0"),U("bestText").textContent=Br.toLocaleString(),U("rerollBtn").hidden=te==="circuit",U("endRunBtn").hidden=te==="circuit",U("uploadStatus").textContent="",Or=0,Fr=0,U("toast").classList.remove("show"),U("drift").classList.remove("on"),U("modeDistance").textContent=Math.round(De)+" m / \u5708 \xB7 "+je().laps+" \u5708"},_n=function(a,l="",d=2){U("toastTitle").textContent=a,U("toastSub").textContent=l,U("toast").classList.add("show"),Fr=d,U("status").textContent=a+" "+l},Ws=function(a=!1){if(Xi=!1,typeof nt<"u"&&nt.room){Yr();return}jn(a),ne="countdown",Hi=3.05,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("helpPanel").hidden=!0,U("musicPanel").hidden=!0,U("rankPanel").hidden=!0,Gi.classList.remove("menu-open"),U("countdown").hidden=!1,U("countdown").textContent="3",Wa(),we&&we.ctx.resume().catch(()=>{}),Au(),U("status").textContent="\u51C6\u5907\u8D77\u8DD1\u3002W \u52A0\u901F\uFF0CAD \u8F6C\u5411\uFF0CShift \u6F02\u79FB\uFF0C\u7A7A\u683C\u5C0F\u55B7\uFF0CE \u6C2E\u6C14\u3002"},Wi=function(){if(typeof nt<"u"&&nt.room&&ne==="running"){gs(),_n("\u5728\u7EBF\u6BD4\u8D5B\u7EE7\u7EED\u8FDB\u884C","\u8054\u673A\u4E0D\u6682\u505C \xB7 \u70B9\u51FB\u623F\u95F4\u53EF\u9000\u51FA",1.5);return}ne==="running"?(ne="paused",gs(),U("paused").hidden=!1,U("status").textContent="\u6E38\u620F\u5DF2\u6682\u505C\u3002"):ne==="paused"&&(ne="running",U("paused").hidden=!0,$a=performance.now())},_c=function(){if(ne!=="finished"){ne="finished",gs(),Br=Math.max(Br,Math.floor(x.s)),Qa=Math.max(Qa,Math.floor(x.score));try{localStorage.setItem("star-rush-best-distance",String(Br)),localStorage.setItem("star-rush-best-score",String(Qa))}catch{}U("resultDistance").textContent=te==="circuit"?Ct(Y()):Math.floor(x.s).toLocaleString()+" m",U("resultMainLabel").textContent=te==="circuit"?je().laps+" \u5708\u7528\u65F6":"\u672C\u6B21\u91CC\u7A0B",U("resultScore").textContent=Math.floor(x.score).toLocaleString(),U("resultBest").textContent=x.coins+" \u679A",U("resultBestLabel").textContent="\u6536\u96C6\u91D1\u5E01",U("resultNote").textContent=te==="circuit"?"\u51B2\u7EBF\u5B8C\u6210\uFF01\u53EF\u4EE5\u4E0A\u4F20\u6210\u7EE9\uFF0C\u548C\u670B\u53CB\u6BD4\u8F83\u5F53\u524D\u8D5B\u9053\u7684\u5B8C\u8D5B\u7528\u65F6\u3002":"\u672C\u6B21\u81EA\u7531\u8DD1\u5DF2\u7ED3\u7B97\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u91CC\u7A0B\u6210\u7EE9\u3002",U("finished").hidden=!1,Gi.classList.add("menu-open"),U("status").textContent="\u672C\u5C40\u7ED3\u675F\u3002",Gr={id:crypto.randomUUID(),mode:te,track:te==="circuit"?Lr:"endless-reborn",seed:Vs,distance:Math.round(Math.max(0,x.s)),timeMs:Math.round(Y()*1e3),score:Math.floor(x.score)},Jr||Xf(Gr),U("submitRun").disabled=!1,U("submitRun").textContent="\u4E0A\u4F20\u672C\u6B21\u6210\u7EE9",np(),Vi(1100,.3)}},lu=function(a,l=5,d=[0,1,0]){let _=0;for(let b of ds)b.life<=0&&_++<l&&(b.life=.35+Math.random()*.4,b.p=[...a],b.v=S(d,[(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3]),b.size=.04+Math.random()*.08)},xc=function(a=!1){if(ne!=="running"&&ne!=="paused")return;let l=[0,-3.7,3.7],d=0;for(let _ of l){let b=!0;for(let E of cn.values())for(let I of E.entities)(I.kind==="cone"||I.kind==="barrier")&&Math.abs(Z(I.s,x.s))<7&&Math.abs(I.l-_)<I.width+1.1&&(b=!1);if(b){d=_;break}}x.prevPose=null,x.l=d,x.yaw=0,x.turnRate=0,x.velocityYaw=0,x.lateralSpeed=0,x.speed=P(x.speed,2,12),x.vS=x.speed,x.vL=0,x.spin=0,x.stuckTime=0,x.timePenalty=(x.timePenalty||0)+2,x.jump=0,x.vy=0,x.drifting=!1,x.driftSide=0,x.driftCharge=0,x.exitTime=0,x.driftReleasing=!1,x.driftBuffer=0,ja=!1,ps=null,_n(a?"\u5DF2\u81EA\u52A8\u8131\u56F0":"\u8D5B\u8F66\u5DF2\u56DE\u6B63","\u7EE7\u7EED\u6309 W \u52A0\u901F \xB7 \u56DE\u6B63\u8BA1\u65F6 +2 \u79D2",1.5)},zf=function(a){for(let I of ms)I.life=Math.max(0,I.life-a);let l=Math.abs(wn(x.yaw-x.velocityYaw));if(!x.drifting&&!(x.exitTime>0&&l>.06)||x.speed<4||x.jump>.08){ps=null,Nr=0;return}if(Nr+=a,Nr<.025)return;Nr=0;let d=Me(x.s),_=Ne(x.s,x.l,.085),b=z(_,[.97,.97,.97],[0,-d.h-x.yaw,Math.atan(d.slope)]),E=[-1,1].map(I=>j(b,[-1.02,0,I*.83]));if(ps)for(let I=0;I<2;I++){let F=R(E[I],ps[I]),B=Math.hypot(F[0],F[2]);if(B>.05&&B<3){let J=ms[Of++%ms.length];J.p=y(S(E[I],ps[I]),.5),J.length=B+.035,J.angle=-Math.atan2(F[2],F[0]),J.life=2.5}}ps=E,l>.15&&lu(Ne(x.s-1,x.l,.2),1,y(d.T,-1.5))},kf=function(a,l){for(let d of ds)d.life<=0||(d.life-=a,d.v[1]-=a*5,d.p=S(d.p,y(d.v,a)),d.node.local=z(R(d.p,l),[d.size,d.size,d.size]),Ee.add(d.node))},Vf=function(a,l){let d=ne==="running"&&x.prevPose?P(fs/Ja,0,1):1,_=x.prevPose||x,b=L(_.s,x.s,d),E=L(_.l,x.l,d),I=_.yaw+wn(x.yaw-_.yaw)*d,F=L(_.jump,x.jump,d),B=Me(b),J=B.p,lt=Ne(b,E,.06+F),xt=R(lt,J),mt=Math.atan(B.slope);ot.tint=Qe.paint,ot.local=z(xt,[.97,.97,.97],[0,-B.h-I,mt]),Ee.children=[ot],Cf(J,a),te==="circuit"&&(eo.mesh=Wf[je().biome],eo.local=D(-J[0],-.9-J[1],-J[2]),eo.shadow=!1,Ee.add(eo));for(let pt of cn.values())if(!(te==="circuit"&&Math.abs(Z(pt.k*40,x.s))>265)){pt.node.local=D(...R(pt.origin,J)),pt.node.shadow=Math.abs(Z(pt.k*40,x.s))<90,Ee.add(pt.node);for(let bt of pt.entities){if(bt.kind==="coin"&&bt.hitLap===Math.max(0,Math.floor(x.s/De)))continue;let zt=Me(bt.s+(bt.ds||0)),Ft=Ne(bt.s+(bt.ds||0),bt.l+(bt.dl||0),bt.kind==="coin"?1.05+.12*Math.sin(a*3+bt.s):.08),St=z(R(Ft,J),[1,1,1],[0,-zt.h+(bt.kind==="coin"?a*2:-(bt.angle||0)),Math.atan(zt.slope)]);bt.node.local=bt.kind==="cone"&&bt.tilt?T(St,T(D(0,.34,0),T(X(bt.tilt),D(0,-.25,0)))):St,bt.node.shadow=Math.abs(Z(bt.s,x.s))<65,Ee.add(bt.node)}}Os(a,l,Hs),kf(ne==="running"?l:0,J);for(let pt of ms)pt.life>0&&(pt.node.local=z(R(pt.p,J),[pt.length,1,Math.min(1,pt.life)*1.2],[0,pt.angle,0]),Ee.add(pt.node));let vt=ne==="ready"||ne==="finished",Et,Nt;if(vt){let pt=.15*Math.sin(a*.16);Et=S(lt,S(y(B.T,5.6+pt),S(y(B.R,7.1),[0,3.5,0]))),Nt=S(lt,S(y(B.R,-1.25),[0,.8,0]))}else{let pt=Wn===1?12.5:Wn===2?5.8:8.5,bt=Wn===1?9:Wn===2?2.9:4.5,zt=B.h+x.velocityYaw;_s===null?_s=zt:_s+=wn(zt-_s)*(1-Math.exp(-l*8));let Ft=[Math.cos(_s),0,Math.sin(_s)],St=S(y(B.T,x.vS/18),y(B.R,x.vL/18));Et=S(S(lt,St),S(y(Ft,-pt),[0,bt,0])),Nt=S(S(lt,St),S(y(Ft,10),[0,1+F*.2,0]))}let Mt=1-Math.exp(-l*(vt?2.6:18));return Xs?(Xs=Xs.map((pt,bt)=>L(pt,Et[bt],Mt)),zr=zr.map((pt,bt)=>L(pt,Nt[bt],Mt))):(Xs=Et,zr=Nt),{eye:R(Xs,J),target:R(zr,J),origin:J}},Gf=function(){if(!Qt)return;let a=vc.width,l=vc.height,d=Me(x.s),_=.86;if(te==="circuit"){Qt.clearRect(0,0,a,l);let F=Dr,B=Math.min((a-45)/(F.maxX-F.minX),(l-30)/(F.maxZ-F.minZ)),J=mt=>[a*.5+(mt[0]-(F.minX+F.maxX)*.5)*B,l*.5+(mt[2]-(F.minZ+F.maxZ)*.5)*B];Qt.lineJoin="round";for(let[mt,vt]of[["#737e9d",13],["#dfe8f3",8]]){Qt.strokeStyle=mt,Qt.lineWidth=vt,Qt.beginPath();for(let Et=0;Et<gn.length;Et+=6){let Nt=J(gn[Et].p);Et?Qt.lineTo(...Nt):Qt.moveTo(...Nt)}Qt.closePath(),Qt.stroke()}if(typeof Xn<"u")for(let mt of Xn){let vt=J(Me(mt.s).p);Qt.fillStyle=mt.color,Qt.beginPath(),Qt.arc(vt[0],vt[1],3.4,0,f),Qt.fill()}if(typeof nt<"u"&&nt.room){let mt=0;for(let vt of nt.peers.values())if(vt.position){let Et=J(Me(vt.position.s).p);Qt.fillStyle=so[mt++%so.length],Qt.beginPath(),Qt.arc(Et[0],Et[1],4.5,0,f),Qt.fill()}}let lt=J(d.p),xt=J(gn[0].p);Qt.fillStyle="#fff7dc",Qt.fillRect(xt[0]-3,xt[1]-5,6,10),Qt.save(),Qt.translate(...lt),Qt.rotate(d.h+Math.PI/2),Qt.fillStyle="#ffe68b",Qt.beginPath(),Qt.moveTo(0,-8),Qt.lineTo(-5,5),Qt.lineTo(5,5),Qt.closePath(),Qt.fill(),Qt.restore();return}Qt.clearRect(0,0,a,l),Qt.strokeStyle="#c0d7e91c",Qt.lineWidth=1;for(let F=20;F<a;F+=30)Qt.beginPath(),Qt.moveTo(F,0),Qt.lineTo(F,l),Qt.stroke();for(let F=15;F<l;F+=30)Qt.beginPath(),Qt.moveTo(0,F),Qt.lineTo(a,F),Qt.stroke();let b=[];for(let F=-15;F<=205;F+=4){let B=R(Me(x.s+F).p,d.p);b.push([a*.5+p(B,d.R)*_,l*.88-p(B,d.T)*_])}for(let[F,B]of[["#7a85a3",15],["#dce8f0",10]]){Qt.strokeStyle=F,Qt.lineWidth=B,Qt.lineJoin="round",Qt.beginPath();for(let J=0;J<b.length;J++)J?Qt.lineTo(...b[J]):Qt.moveTo(...b[J]);Qt.stroke()}Qt.fillStyle="#ffe68b",Qt.beginPath();let E=a*.5+x.l*_,I=l*.88;Qt.moveTo(E,I-10),Qt.lineTo(E-7,I+7),Qt.lineTo(E+7,I+7),Qt.closePath(),Qt.fill()},Hf=function(a){if(yc+=a,yc<.06)return;yc=0,fi.distance.textContent=Math.floor(x.s).toLocaleString(),fi.score.textContent=String(Math.floor(x.score)).padStart(5,"0"),fi.coins.textContent=String(x.coins).padStart(2,"0"),fi.speed.textContent=Math.round(x.speed*3.6),U("speedbar").style.width=Math.min(100,x.speed/83*100)+"%",fi.energyText.textContent=x.nitro+" \u74F6 / 2 \xB7 "+(x.nitroTime>0?x.nitroTime.toFixed(1)+"s":Math.floor(x.energy)+"%"),U("energyBar").style.width=x.energy+"%";let l=x.boostActive||x.pad>0||x.mini>0;fi.gear.textContent=l?"NITRO / BOOST":x.jump>0?"AIR TIME":x.drifting?"DRIFT MODE":x.speed<1?"READY TO RUSH":"SPORT / "+Math.max(1,Math.min(6,Math.ceil(x.speed/8))),U("boostfx").classList.toggle("on",l),U("raceTime").textContent=Ct(Y()),U("lapLabel").textContent=te==="circuit"?"LAP "+Math.min(je().laps,Math.floor(Math.max(0,x.s)/De)+1)+" / "+je().laps+" \xB7 \u5269\u4F59 "+Math.max(0,Math.ceil(wi()-x.s))+" m":"\u65E0\u5C3D\u6A21\u5F0F \xB7 \u81EA\u7531\u7ADE\u901F",U("drift").classList.toggle("on",x.drifting||x.smallJets>0),U("driftBar").style.width=(x.smallJets>0?Math.min(100,x.smallWindow/1.5*100):Math.min(100,x.driftCharge/.55*100))+"%",fi.driftText.textContent=x.smallJets>0?"\u5C0F\u55B7 \xD7"+x.smallJets:x.driftPhase==="entry"?"\u8F7B\u70B9\u8D77\u6F02":x.driftPhase==="counter"?"\u53CD\u6253\u6536\u8F66":x.driftPhase==="release"?"\u60EF\u6027\u6536\u6F02":"\u6F02\u79FB\u96C6\u6C14";for(let _ of document.querySelectorAll("[data-key=small]"))_.classList.toggle("smalljet-ready",x.smallJets>0);U("jetCount").textContent=x.smallJets>0?"\u5C0F\u55B7 \xD7"+x.smallJets+" \xB7 "+x.smallWindow.toFixed(1)+"s":x.drifting?"\u6F02\u79FB\u96C6\u6C14\u4E2D":"\u7A7A\u683C / Q \u5C0F\u55B7";let d=Eu(x.s);fi.turnText.textContent=d.direction===0?"\u524D\u65B9\u76F4\u9053":d.direction>0?"\u524D\u65B9\u53F3\u5F2F":"\u524D\u65B9\u5DE6\u5F2F",fi.turnArrowPath.setAttribute("d",d.direction===0?"M12 21V3M5 10L12 3L19 10":d.direction>0?"M5 21V8H21M14 1L21 8L14 15":"M19 21V8H3M10 1L3 8L10 15"),Pi==="practice"&&!nt.room&&Cu(d),fi.biome.textContent=te==="circuit"?Tf(x.s).name:uc[(Math.floor(x.s/1e3)%3+3)%3].name,Gf()},cu=function(a,l=ye,d=!0,_=null,b=1){a.world=T(l,a.local);let E=d&&a.shadow,I=a.tint||_,F=a.opacity??b;a.mesh&&Mc.push({mesh:a.mesh,m:a.world,shadow:E,tint:I,opacity:F});for(let B of a.children)cu(B,a.world,E,I,F)},hu=function(){kr=Math.max(1,i.clientWidth),Vr=Math.max(1,i.clientHeight);let a=Math.min(devicePixelRatio||1,1.5),l=Math.round(kr*a),d=Math.round(Vr*a);(i.width!==l||i.height!==d)&&(i.width=l,i.height=d)},uu=function(a){if(!c&&o.renderer.getContext().isContextLost())return;let l=Math.min(.1,Math.max(0,(a-$a)/1e3));if($a=a,ne==="countdown"){Hi=typeof nt<"u"&&nt.room&&nt.startAt?(nt.startAt-(Date.now()+nt.offset))/1e3:Hi-l;let b=Hi>.05?String(Math.ceil(Hi)):"GO!";U("countdown").textContent!==b&&(U("countdown").textContent=b,Vi(Hi>.05?400:900,.12)),Hi<=0&&(U("countdown").hidden=!0,ne="running",di=typeof nt<"u"&&nt.room&&nt.startAt?Math.max(0,(Date.now()+nt.offset-nt.startAt)/1e3):0,_n("LET\u2019S RUSH!","W \u52A0\u901F \xB7 SHIFT \u6F02\u79FB \xB7 \u7A7A\u683C\u5C0F\u55B7 \xB7 E \u6C2E\u6C14",2))}if(typeof yu=="function"&&yu(a,l),rp(l),ne==="running"){fs+=l;let b=0;for(;fs>=Ja&&ne==="running"&&b++<12;)Uf(Ja),fs-=Ja;b>=12&&(fs=0)}else fs=0;(ne==="ready"||ne==="finished")&&(Gs+=l*.25);let d=Vf(Gs,l);ip(d.origin,l),typeof Mu=="function"&&Mu(d.origin,l),Fr>0&&(Fr-=l,Fr<=0&&U("toast").classList.remove("show")),Or=Math.max(0,Or-l),U("hitflash").style.opacity=Math.min(.24,Or*.6),Pf(),typeof gu=="function"&&gu(),Mc.length=0,cu(Ee),ks=L(ks,ne==="ready"||ne==="finished"?45:sn.fov+x.boostBlend*3,1-Math.exp(-l*4));let _=T(tt(ks*v/180,kr/Vr,.12,850),gt(d.eye,d.target));jf(_),c?m(d):Cc=o.render(Mc,d,kr,Vr,ks,sn),sp(a,l),Hf(l),iu||(iu=!0,e.classList.add("done")),requestAnimationFrame(uu)},du=function(){try{return JSON.parse(localStorage.getItem("star-rush-runs-reborn")||"[]")}catch{return[]}},Xf=function(a){try{let l=du();l.push({...a,name:localStorage.getItem("star-rush-name")||"\u672C\u673A\u8F66\u624B"}),localStorage.setItem("star-rush-runs-reborn",JSON.stringify(l.slice(-100)))}catch{}},qf=function(a,l){let d=document.createElement("tr"),_=l.mode==="circuit"?Ct(l.timeMs/1e3):l.distance.toLocaleString()+" m";for(let b of[String(a+1).padStart(2,"0"),l.name,_,Math.round(l.score).toLocaleString()]){let E=document.createElement("td");E.textContent=b,d.appendChild(E)}return d},Yf=function(){xs=Ke,U("rankTrack")&&(U("rankTrack").value=xs),Ai=te,Ei=!1,Ys("rankPanel"),Hr()},fu=function(a){te=a;for(let[l,d]of[["circuitMode","circuit"],["endlessMode","endless"]])U(l).classList.toggle("selected",a===d),U(l).setAttribute("aria-pressed",String(a===d));jn(!0),U("trackPicker").hidden=a!=="circuit",U("trackDescription").hidden=a!=="circuit"},pu=function(a){if(Vn[a]){if(typeof nt<"u"&&nt.room){_n("\u5DF2\u5728\u8054\u673A\u623F\u95F4","\u9000\u51FA\u623F\u95F4\u540E\u53EF\u66F4\u6362\u5730\u56FE",1.5);return}Ke=a,jn(!1),Wr()}},Wr=function(){for(let a of document.querySelectorAll("[data-track]"))a.classList.toggle("selected",a.dataset.track===Ke),a.setAttribute("aria-pressed",String(a.dataset.track===Ke));U("trackDescription").textContent=je().description,U("modeDistance").textContent=Math.round(De)+" m / \u5708 \xB7 "+je().laps+" \u5708"},bc=function(){try{localStorage.setItem("star-rush-audio",JSON.stringify(An))}catch{}},Xr=function(){if(Wa(),!we)return!1;if(we.ctx.state==="suspended"&&we.ctx.resume().catch(()=>{}),se.bus)return!0;se.bus=we.ctx.createGain();let a=we.ctx.createDynamicsCompressor();return a.threshold.value=-18,a.ratio.value=3,se.bus.connect(a),a.connect(we.ctx.destination),se.next=we.ctx.currentTime+.08,!0},vs=function(a,l,d,_,b,E=0){let I=we.ctx,F=I.createOscillator(),B=I.createGain();F.type=_,F.frequency.setValueAtTime(a,l),E&&F.frequency.exponentialRampToValueAtTime(E,l+d),B.gain.setValueAtTime(.001,l),B.gain.exponentialRampToValueAtTime(b,l+.008),B.gain.exponentialRampToValueAtTime(.001,l+d),F.connect(B),B.connect(se.bus),F.start(l),F.stop(l+d+.02)},mu=function(a,l,d,_){let b=we.ctx,E=b.createBufferSource(),I=b.createBiquadFilter(),F=b.createGain();E.buffer=we.noise,I.type="highpass",I.frequency.value=d,F.gain.setValueAtTime(_,a),F.gain.exponentialRampToValueAtTime(.001,a+l),E.connect(I),I.connect(F),F.connect(se.bus),E.start(a),E.stop(a+l+.02)},Jf=function(a,l){let d=.10135135135135136,_=Math.floor(a/16),b=a%16,E=[45,41,48,43],I=E[Math.floor(_/2)%4],F=lt=>440*Math.pow(2,(lt-69)/12);if(b%4===0&&vs(135,l,.18,"sine",.38,42),(b===4||b===12)&&(mu(l,.13,1200,.12),vs(180,l,.07,"triangle",.1,70)),b%2===0&&mu(l,.035,7500,b%4===2?.065:.04),b%2===0){let lt=I+(b===14?12:0);vs(F(lt-12),l,d*1.5,"sawtooth",.045),vs(F(lt-12),l,d*1.5,"sine",.1)}let B=[0,7,12,15,12,7,10,7],J=B[Math.floor(b/2)%8];if(b%2===1&&vs(F(I+24+J),l,.16,"triangle",.045),b===0)for(let lt of[0,3,7])vs(F(I+12+lt),l,d*12,"triangle",.018);if(_%4>=2&&b%4===2){let lt=[12,15,19,22,19,15,14,10][Math.floor(b/4)+4*(_%2)];vs(F(I+24+lt),l,d*2.5,"sine",.055)}},gu=function(){if(!we||!Xr())return;let a=An.enabled&&Nn&&!document.hidden&&se.mode!=="classic",l=we.ctx.currentTime;if(se.bus.gain.setTargetAtTime(a?An.volume*.42:0,l,.07),se.mode==="synth"&&a){se.next<l-.15&&(se.next=l+.05);let d=0;for(;se.next<l+.18&&d++<8;)Jf(se.step++,se.next),se.next+=60/148/4}se.element&&(a&&se.mode==="local"?se.element.paused&&se.element.play().catch(()=>{}):se.element.paused||se.element.pause())},no=function(a){se.mode=a,Xr(),U("synthMusic").classList.toggle("selected",a==="synth"),U("classicMusic").classList.toggle("selected",a==="classic"),U("classicPlayer").hidden=a!=="classic",U("localMusicControls").hidden=a!=="local",U("musicToggle").hidden=a==="classic",a==="classic"?(U("spotifyPlayer").src||(U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"),U("nowPlaying").textContent="\u7ECF\u5178\u5916\u8BED\u6B4C\u5355 \xB7 \u5728\u4E0B\u65B9\u64AD\u653E\u5668\u70B9\u51FB\u64AD\u653E"):(U("spotifyPlayer").removeAttribute("src"),U("nowPlaying").textContent=a==="local"?se.files[se.index]?.name||"\u8BF7\u9009\u62E9\u97F3\u4E50\u6587\u4EF6":"STARLINE \xB7 \u539F\u521B\u7535\u5B50\u7ADE\u901F\u914D\u4E50")},io=function(a){!se.files.length||!Xr()||(se.index=(a+se.files.length)%se.files.length,se.element||(se.element=new Audio,se.element.preload="auto",we.ctx.createMediaElementSource(se.element).connect(se.bus),se.element.onended=()=>io(se.index+1),se.element.onerror=()=>{U("nowPlaying").textContent="\u6B64\u97F3\u9891\u65E0\u6CD5\u89E3\u7801\uFF0C\u8BF7\u6362\u4E00\u9996 MP3 / OGG / WAV"}),se.element.pause(),se.url&&URL.revokeObjectURL(se.url),se.url=URL.createObjectURL(se.files[se.index]),se.element.src=se.url,An.enabled=!0,no("local"),se.element.play().catch(()=>{U("nowPlaying").textContent="\u70B9\u51FB\u201C\u64AD\u653E\u97F3\u4E50\u201D\u540E\u7EE7\u7EED"}),U("musicToggle").textContent="\u6682\u505C\u97F3\u4E50")},Ys=function(a){let l=ne==="running"&&!(typeof nt<"u"&&nt.room);qr=qr||l,l&&Wi();for(let d of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])d!==a&&(U(d).hidden=!0);gs(),U(a).hidden=!1},ys=function(a){U(a).hidden=!0,qr&&ne==="paused"&&Wi(),qr=!1},Tc=function(a){function l(b){let E=new ue(b.mesh);E.local=new Float32Array(b.local),E.shadow=b.shadow;for(let I of b.children)E.add(l(I));return E}let d=l(ot),_=d.add(new ue(Zf[a%4]));return{root:d,marker:_,spin:0}},Kf=function(){return{s:x.s,l:x.l,vS:x.vS,vL:x.vL,yaw:x.yaw,jump:x.jump,mini:x.mini,nitroTime:x.nitroTime,paint:Qe.paint,time:Y(),finished:ne==="finished"}},_u=function(){for(let a of nt.peers.values())a.label.remove();nt.peers.clear()},Ac=function(a){let l=nt.room?.status;nt.room=a.room,nt.members=a.members,nt.ready=!!a.members.find(_=>_.id===nt.id)?.ready,nt.errors=0;let d=new Set(a.members.map(_=>_.id));for(let[_,b]of nt.peers)d.has(_)||(b.label.remove(),nt.peers.delete(_));for(let _ of a.members){if(_.id===nt.id)continue;let b=nt.peers.get(_.id);if(!b){let I=document.createElement("div");I.className="peer-label",I.textContent=_.name,Gi.appendChild(I),b={...Tc(nt.peers.size),label:I,name:_.name,history:[],position:null,lastStamp:0},nt.peers.set(_.id,b)}b.label.textContent=_.name,b.name=_.name;let E=_.snapshot;E&&Number.isFinite(E.s)&&_.updatedAt>b.lastStamp&&(b.lastStamp=_.updatedAt,b.history.push({...E,t:_.updatedAt}),b.history.length>12&&b.history.shift())}if(nt.room.status==="racing"&&nt.room.startAt!==nt.runTag){nt.runTag=nt.room.startAt,nt.startAt=nt.room.startAt,Ke=nt.room.track,te="circuit",jn(!1),Wr(),Au();for(let b of nt.peers.values())b.history=[],b.position=null;let _=a.members.findIndex(b=>b.id===nt.id);x.l=(_%2?1:-1)*1.9,x.s=-Math.floor(_/2)*3.8,ne="countdown",Hi=(nt.startAt-(Date.now()+nt.offset))/1e3,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("roomPanel").hidden=!0,U("rankPanel").hidden=!0,Gi.classList.remove("menu-open"),U("countdown").hidden=!1,Wa(),we&&we.ctx.resume().catch(()=>{})}if(nt.room.status==="lobby"&&l&&l!=="lobby"){nt.startAt=0,nt.runTag=0,ne="ready",Ke=nt.room.track,te="circuit",jn(!1),Wr(),U("countdown").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Gi.classList.add("menu-open");for(let _ of nt.peers.values())_.history=[]}Ec(),ne==="finished"&&Ru()},Ec=function(){let a=!!nt.room;if(U("roomActions").hidden=!a,U("networkHud").hidden=!a,U("createRoom").disabled=a,U("joinRoom").disabled=a,U("roomCode").disabled=a,U("circuitMode").disabled=a,U("endlessMode").disabled=a,U("roomName").disabled=a&&nt.room.status==="racing",U("startBtn").textContent=a?"\u56DE\u5230\u8054\u673A\u623F\u95F4":"\u5F00\u59CB\u7ADE\u901F\u3000\u2197",!a){U("roomTitle").textContent="\u540C\u4E00\u6761\u8D5B\u9053\uFF0C\u4E00\u8D77\u51FA\u53D1\u3002",U("roomMembers").replaceChildren(),U("roomStatus").textContent="\u6700\u591A 4 \u4EBA \xB7 \u4F7F\u7528\u5F53\u524D\u9009\u62E9\u7684\u8DD1\u5708\u5730\u56FE";return}U("roomCode").value=nt.room.code,U("roomTitle").textContent="ROOM "+nt.room.code+" \xB7 "+Vn[nt.room.track].name,U("roomStatus").textContent=(nt.room.status==="racing"?"\u6BD4\u8D5B\u8FDB\u884C\u4E2D":nt.room.status==="finished"?"\u6BD4\u8D5B\u5DF2\u7ED3\u675F":"\u5019\u573A\u4E2D")+" \xB7 "+nt.members.length+" / 4 \u4EBA \xB7 "+Math.round(nt.rtt)+" ms \u5F80\u8FD4",U("roomMembers").replaceChildren();for(let b of nt.members){let E=document.createElement("div");E.className="room-member";let I=document.createElement("span");I.textContent=b.name+(b.id===nt.id?"\uFF08\u4F60\uFF09":"")+(b.id===nt.room.hostId?" \xB7 \u623F\u4E3B":"");let F=document.createElement("b");F.textContent=b.snapshot?.finished?"\u5B8C\u8D5B "+Ct(b.snapshot.time||0):nt.room.status==="racing"?"\u6BD4\u8D5B\u4E2D":b.ready?"\u5DF2\u51C6\u5907":"\u7B49\u5F85\u51C6\u5907",E.append(I,F),U("roomMembers").appendChild(E)}let l=nt.room.hostId===nt.id,d=nt.room.status!=="lobby";U("startRoom").hidden=!l,U("startRoom").disabled=!d&&nt.members.some(b=>!b.ready),U("startRoom").textContent=d?"\u7ED3\u675F\u672C\u5C40 \xB7 \u8FD4\u56DE\u5019\u573A":"\u5168\u5458\u5C31\u7EEA \xB7 \u5F00\u59CB\u7ADE\u901F",U("readyRoom").hidden=d,U("readyRoom").textContent=nt.ready?"\u53D6\u6D88\u51C6\u5907":"\u51C6\u5907",U("connectionText").textContent=nt.errors?"\u8FDE\u63A5\u6062\u590D\u4E2D\u2026":"ROOM "+nt.room.code+" \xB7 "+Math.round(nt.rtt)+" ms";let _=nt.members.map(b=>({id:b.id,s:b.id===nt.id?x.s:b.snapshot?.s||0,finished:b.id===nt.id?ne==="finished":!!b.snapshot?.finished,time:b.id===nt.id?Y():b.snapshot?.time||0})).sort((b,E)=>b.finished&&E.finished?b.time-E.time:E.finished-b.finished||E.s-b.s);U("racePosition").textContent="POS "+(_.findIndex(b=>b.id===nt.id)+1)+" / "+nt.members.length},Yr=function(){Ys("roomPanel"),Ec()},yu=function(a){if(!nt.room||nt.busy||document.hidden||a-nt.lastSync<(nt.room.status==="racing"?125:850))return;nt.lastSync=a,nt.busy=!0;let l=nt.session;wc("poll",{snapshot:nt.room.status!=="lobby"?Kf():{}}).then(d=>{nt.room&&nt.session===l&&Ac(d)}).catch(d=>{nt.room&&nt.session===l&&(nt.errors++,U("connectionText").textContent="\u8FDE\u63A5\u6062\u590D\u4E2D \xB7 "+d.message,U("roomStatus").textContent=d.message)}).finally(()=>{nt.busy=!1})},Mu=function(a,l){if(!nt.room)return;let d=Date.now()+nt.offset-P(nt.rtt*1.1,170,350);for(let _ of nt.peers.values()){let b=_.history;if(!b.length){_.label.hidden=!0;continue}let E=b[0],I=E;for(let mt=1;mt<b.length&&(I=b[mt],!(I.t>=d));mt++)E=I;let F=E.t===I.t?0:P((d-E.t)/(I.t-E.t),0,1),B={};for(let mt of["s","l","vS","vL","jump"])B[mt]=L(E[mt]||0,I[mt]||0,F);B.yaw=(E.yaw||0)+wn((I.yaw||0)-(E.yaw||0))*F;let J=P((d-I.t)/1e3,0,.12);if(B.s+=(I.vS||0)*J,B.l+=(I.vL||0)*J,_.position&&Math.abs(B.s-_.position.s)<15){let mt=1-Math.exp(-l*24);B.s=L(_.position.s,B.s,mt),B.l=L(_.position.l,B.l,mt)}_.position=B;let lt=Me(B.s),xt=Ne(B.s,B.l,.06+B.jump);_.worldPos=R(S(xt,[0,3,0]),a),_.root.tint=typeof I.paint=="string"?I.paint:so[0],_.root.local=z(R(xt,a),[.97,.97,.97],[0,-lt.h-B.yaw,Math.atan(lt.slope)]),_.root.shadow=k(R(xt,Ne(x.s,x.l)))<70,Ee.add(_.root),_.spin-=(B.vS||0)*l/.4;for(let mt=0;mt<Dt.length;mt++){let vt=Dt[mt];_.root.children[2+mt].local=T(D(vt.x,.41,vt.z),it(_.spin))}for(let mt=0;mt<yt.length;mt++){let vt=yt[mt],Et=I.nitroTime>0||I.mini>0,Nt=Et?.85+.16*Math.sin(Gs*38+vt.side):.001;_.root.children[6+mt].local=z([-1.9,.43,vt.side*.34],[Nt,Nt,Nt])}}},jf=function(a){for(let l of nt.peers.values()){if(!l.worldPos||!nt.room||ne==="ready"){l.label.hidden=!0;continue}let d=l.worldPos,_=d[0],b=d[1],E=d[2],I=a[3]*_+a[7]*b+a[11]*E+a[15],F=(a[0]*_+a[4]*b+a[8]*E+a[12])/I,B=(a[1]*_+a[5]*b+a[9]*E+a[13])/I;l.label.hidden=I<=0||Math.abs(F)>1.1||Math.abs(B)>1.1,l.label.hidden||(l.label.style.left=(F*.5+.5)*kr+"px",l.label.style.top=(-B*.5+.5)*Vr+"px")}},wu=function(){return"star-rush-best-reborn-"+Ke},tp=function(){try{return JSON.parse(localStorage.getItem(wu())||"null")}catch{return null}},Au=function(){if(Xn=[],Jr=!1,Zs=null,Ci=tp(),Ms=0,ro=[],ao=0,oo=[],Js=[],Ss=1,Zr=1,lo=0,U("resultGrid").replaceChildren(),U("splitLabel").textContent="SECTOR 1 / 3",U("splitDelta").textContent="",U("lapTimeLabel").textContent="",U("coach").hidden=Pi!=="practice",te==="circuit"&&Pi==="race"&&!nt.room){x.l=-1.8;for(let a=0;a<3;a++){let l=Tc(a);l.root.tint=bu[a],Xn.push({s:-3.8*Math.floor((a+1)/2),l:(a%2?1:-1)*1.9,speed:0,yaw:0,color:bu[a],name:Qf[a],node:l.root,finishAt:null,index:a})}}Ci&&sn.ghost&&te==="circuit"&&Pi==="timeTrial"&&!nt.room?(Ri=Tc(3).root,Ri.tint="#b8e9e6",Ri.opacity=.27):Ri=null,Pc(),Pi==="practice"&&!nt.room&&Cu()},ep=function(a){for(let l of Xn){if(l.finishAt!==null)continue;let d=0;for(let F=15;F<=65;F+=10)d=Math.max(d,Math.abs(Me(l.s+F).curv));let _=P(Math.sqrt(24/Math.max(.004,d)),24,53)*(1-l.index*.028);l.speed=L(l.speed,_,1-Math.exp(-a*(l.speed>_?3:1.2)));let b=Me(l.s+20).curv,E=Math.sign(b)*1.6+Math.sin(l.s*.012+l.index)*.45;for(let F of cn.values())for(let B of F.entities)(B.kind==="barrier"||B.kind==="cone")&&Z(B.s,l.s)>0&&Z(B.s,l.s)<28&&Math.abs(E-B.l)<2.1&&(E=B.l>0?-2.8:2.8);let I=l.l;l.l=L(l.l,E,1-Math.exp(-a*2.3)),l.yaw=Math.atan2((l.l-I)/a,Math.max(5,l.speed))+P(b*12,-.4,.4),l.s+=l.speed*a,l.s>=wi()&&(l.s=wi(),l.finishAt=di,Zs??=di)}if(te==="circuit"&&!nt.room&&(ao+=a,ao>=.1&&(ao=0,ro.push([Number(Y().toFixed(3)),Number(x.s.toFixed(3)),Number(x.l.toFixed(3)),Number(x.yaw.toFixed(4)),Number(x.jump.toFixed(3))]))),te==="circuit"){for(;x.s>=Ss*De/3&&Ss<=je().laps*3;){oo.push(Y());let l=Ci?.splits?.[Ss-1];if(U("splitLabel").textContent="SECTOR "+((Ss-1)%3+1)+" / 3",l){let d=Y()-l;U("splitDelta").textContent=(d>0?"+":"\u2212")+Math.abs(d).toFixed(2)+" s",U("splitDelta").style.color=d>0?"#f1b8c6":"#b9edcf"}else U("splitDelta").textContent="\u5206\u6BB5 "+Ct(Y()-(oo[Ss-2]||0));Ss++}if(x.s>=Zr*De){let l=Js.reduce((d,_)=>d+_,0);Js.push(Y()-l),U("lapTimeLabel").textContent="\u4E0A\u4E00\u5708 "+Ct(Js.at(-1)),Zr<je().laps&&_n("LAP "+(Zr+1),"\u4E0A\u4E00\u5708 "+Ct(Js.at(-1)),1.5),Zr++}}if(Zs!==null&&di-Zs>30&&x.s<wi()){Jr=!0,_c();return}lo+=a,lo>.18&&(lo=0,Pc())},Pc=function(){if(nt.room){U("localPosition").textContent="ONLINE",U("eventLabel").textContent="\u597D\u53CB\u623F\u95F4 \xB7 "+nt.room.code;return}let a=1+Xn.filter(l=>l.s>x.s).length;U("localPosition").textContent=Xn.length?"POS "+a+" / 4":Pi==="practice"?"PRACTICE":"TIME ATTACK",U("eventLabel").textContent=Zs!==null?"\u5B8C\u8D5B\u5012\u8BA1\u65F6 "+Math.max(0,30-Math.floor(di-Zs))+" s":te==="endless"?"\u65E0\u5C3D\u5DE1\u6E38":je().name},Eu=function(a){let l=wn(Me(a+62).h-Me(a+32).h);return{turn:l,direction:Math.abs(l)<.05?0:Math.sign(l),currentCurve:Me(a).curv}},Cu=function(a=Eu(x.s)){let l=a.direction>0?"\u53F3\u5F2F":a.direction<0?"\u5DE6\u5F2F":"",d=x.smallJets>0&&x.smallWindow>0,_="W / \u2191 \u52A0\u901F\uFF0C\u89C2\u5BDF\u524D\u65B9\u5F2F\u9053\u3002";x.drifting&&x.driftPhase==="counter"?_="\u53CD\u6253\u6536\u8F66\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\u3002":""):x.drifting&&x.driftPhase==="release"||x.driftPhase==="exit"&&x.exitTime>0?_="\u6536\u6F02\u4E2D\uFF1A\u5148\u7A33\u4F4F\u65B9\u5411\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\uFF0C\u8F66\u5934\u7A33\u5B9A\u540E\u8854\u63A5\u3002":""):x.drifting?_=x.driftPhase==="entry"?"\u8D77\u6F02\u4E2D\uFF1A\u5C0F\u5E45\u8F6C\u5411\uFF0C\u51C6\u5907\u53CD\u6253\u6536\u8F66\u3002":"\u6F02\u79FB\u4E2D\uFF1A\u53CD\u6309\u65B9\u5411\u6536\u8F66\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002":d?_="\u5C0F\u55B7 \xD7"+x.smallJets+"\uFF1A\u8F66\u5934\u7A33\u5B9A\u540E\u70B9\u7A7A\u683C / Q\u3002"+(x.smallJets>1?"\u8FDE\u7EED\u4E24\u6B21\u53EF\u53CC\u55B7\u3002":""):x.nitroTime>0?_="\u6C2E\u6C14\u55B7\u5C04\u4E2D\uFF1A"+(l?"\u524D\u65B9"+l+"\uFF0C\u7A33\u4F4F\u65B9\u5411\u3002":"\u4FDD\u6301\u8DEF\u7EBF\uFF0C\u65E0\u9700\u91CD\u590D\u6309 E / C\u3002"):x.speed>10&&(l?_="\u524D\u65B9"+l+"\uFF1A\u5148\u6536\u6CB9\u63A7\u901F\uFF0C\u5E73\u987A\u8F6C\u5411\u3002":x.nitro>0&&x.speed>15&&Math.abs(a.currentCurve)<.006?_="\u524D\u65B9\u76F4\u9053\uFF1A\u8F66\u8EAB\u7A33\u5B9A\u540E\uFF0C\u53EF\u9009 E / C \u6C2E\u6C14\u3002":_="\u524D\u65B9\u76F4\u9053\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u7559\u610F\u4E0B\u4E00\u5F2F\u3002"),U("coach").textContent=_},Ru=function(){let a=nt.room?nt.members.filter(l=>l.id!==nt.id).map(l=>({name:l.name,time:l.snapshot?.finished?l.snapshot.time:null,s:l.snapshot?.s||0})):Xn.map(l=>({name:l.name,time:l.finishAt,s:l.s}));if(a.push({name:Qe.name+"\uFF08\u4F60\uFF09",time:Jr?null:Y(),s:x.s}),a.sort((l,d)=>l.time===null&&d.time===null?d.s-l.s:l.time===null?1:d.time===null?-1:l.time-d.time),U("resultGrid").replaceChildren(),a.length>1)for(let l=0;l<a.length;l++){let d=document.createElement("div");d.className="result-row";let _=document.createElement("span"),b=document.createElement("b");_.textContent=l+1+". "+a[l].name,b.textContent=a[l].time===null?nt.room?.status==="racing"?"\u6BD4\u8D5B\u4E2D":"\u672A\u5B8C\u8D5B":Ct(a[l].time),d.append(_,b),U("resultGrid").appendChild(d)}},np=function(){if(Xi=!1,Ru(),Jr)U("resultDistance").textContent="DNF",U("resultNote").textContent="\u672C\u5C40\u672A\u80FD\u5728\u5012\u8BA1\u65F6\u7ED3\u675F\u524D\u5B8C\u8D5B\uFF0C\u53EF\u4EE5\u518D\u6311\u6218\u4E00\u6B21\u3002",U("submitRun").disabled=!0,Gr=null;else if(!nt.room&&te==="circuit"&&ro.length>10&&(!Ci||Y()<Ci.time))try{localStorage.setItem(wu(),JSON.stringify({time:Y(),points:ro,splits:oo,laps:Js,date:Date.now()})),U("resultNote").textContent="\u5237\u65B0\u672C\u673A\u6700\u4F73\uFF01\u5DF2\u4FDD\u5B58\u5E7D\u7075\uFF0C\u53EF\u5728\u8BA1\u65F6\u6311\u6218\u4E2D\u8FFD\u9010\u81EA\u5DF1\u3002"}catch{}U("coach").hidden=!0},ip=function(a,l){for(let d of Xn){let _=Me(d.s);d.node.local=z(R(Ne(d.s,d.l,.07),a),[.97,.97,.97],[0,-_.h-d.yaw,Math.atan(_.slope)]),Ee.add(d.node);for(let b=0;b<Dt.length;b++){let E=Dt[b];d.node.children[2+b].local=T(D(E.x,.41,E.z),it(-d.s/.4))}}if(Ri&&Ci?.points?.length&&ne==="running"){let d=Ci.points,_=Y();for(;Ms<d.length-2&&d[Ms+1][0]<_;)Ms++;let b=d[Ms],E=d[Ms+1],I=P((_-b[0])/(E[0]-b[0]||1),0,1),F=L(b[1],E[1],I),B=L(b[2],E[2],I),J=b[3]+wn(E[3]-b[3])*I,lt=Me(F);Ri.local=z(R(Ne(F,B,.07+L(b[4],E[4],I)),a),[.97,.97,.97],[0,-lt.h-J,0]),Ee.add(Ri)}if(sn.line&&ne==="running")for(let d=0;d<Rc.length;d++){let _=x.s+12+d*9,b=Me(_),E=P(b.curv*80,-2.1,2.1),I=Rc[d];I.mesh=Tu[Math.abs(b.curv)*x.speed>.95?1:0],I.local=z(R(Ne(_,E,.085),a),[1,1,1],[0,-b.h,0]),Ee.add(I)}},sp=function(a,l){let d=a-Pu;if(Pu=a,d>0&&d<1e3&&Ks.push(d),Ks.length>180&&Ks.shift(),Ic+=l,Ic<.25)return;Ic=0;let _=Ks.reduce((I,F)=>I+F,0)/(Ks.length||1),b=[...Ks].sort((I,F)=>I-F),E=b[Math.floor(b.length*.95)]||0;U("diagnostics").textContent="REBORN / "+(c?"Canvas compatibility":"Three.js WebGL 2")+`
FPS `+Math.round(1e3/(_||16.7))+" | frame p95 "+E.toFixed(1)+` ms
Draw `+Cc.drawCalls+" | triangles "+Cc.triangles+`
State `+ne+" | event "+Pi+`
s `+x.s.toFixed(1)+" / "+wi().toFixed(1)+" | l "+x.l.toFixed(2)+`
speed `+(x.speed*3.6).toFixed(1)+` km/h
steer `+Hs.toFixed(2)+" | slip "+(wn(x.yaw-x.velocityYaw)*180/Math.PI).toFixed(1)+`\xB0
drift `+x.driftPhase+" | small "+x.smallJets+" | nitro "+x.nitro+`
ready `+(nt.ready?"yes":"no")+" | peers "+nt.peers.size+(we?.rail?`
rail `+Object.values(we.rail.status().states).join("/")+" | "+we.rail.status().last+" #"+we.rail.status().played:"")},rp=function(a){if(qi=null,Xi&&ne==="running"){let b=0;for(let xt=15;xt<=90;xt+=10)b=Math.max(b,Math.abs(Me(x.s+xt).curv));let E=P(.85/Math.max(.012,b),14,48),I=Me(x.s),F=Ne(x.s+P(x.speed*.45,12,26),0,0),B=R(F,Ne(x.s,x.l,0)),J=Math.atan2(p(B,I.R),p(B,I.T)),lt=wn(J-x.velocityYaw);qi=P((lt*3+Me(x.s+12).curv*x.speed)/1.04,-1,1),Le.brake=x.speed>E+1.5,Le.gas=!Le.brake;return}let l=navigator.getGamepads?.()[0];if(!l){Dc&&(zs(),Lc={},Dc=!1);return}Dc=!0,zs();let d=Math.abs(l.axes[0]||0)>.13?l.axes[0]:0;d&&(qi=d);let _={gas:l.buttons[7]?.value>.13,brake:l.buttons[6]?.value>.13,drift:!!l.buttons[2]?.pressed,small:!!l.buttons[0]?.pressed,boost:!!l.buttons[1]?.pressed};for(let[b,E]of Object.entries(_))Le[b]||=E,E&&!Lc[b]&&b in Hn&&Hn[b]++;Lc=_},Kr=function(){try{localStorage.setItem("star-rush-settings-reborn",JSON.stringify(sn))}catch{}},co=function(){Qe.name=U("profileName").value.trim().slice(0,16)||Qe.name;try{localStorage.setItem("star-rush-profile",JSON.stringify(Qe)),localStorage.setItem("star-rush-name",Qe.name)}catch{}U("carName").textContent=Qe.car;for(let a of["roomName","racerName","profileName"])U(a).value=Qe.name;U("profileStatus").textContent="\u5DF2\u4FDD\u5B58 \xB7 "+Qe.name,ot.tint=Qe.paint},Nc=function(){for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).checked=!!sn[l];U("qualitySetting").value=sn.quality,U("steeringSetting").value=sn.sensitivity*100,U("fovSetting").value=sn.fov,U("settingsStatus").textContent=c?"\u5F53\u524D\u6D4F\u89C8\u5668\u4F7F\u7528\u517C\u5BB9\u663E\u793A\u6A21\u5F0F\uFF0C\u6BD4\u8D5B\u903B\u8F91\u548C\u64CD\u4F5C\u4FDD\u6301\u4E00\u81F4\u3002":"Three.js 3D \u6E32\u67D3 \xB7 \u8BBE\u7F6E\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5728\u6B64\u8BBE\u5907\u3002"},Lu=function(){if(nt.room){Yr();return}Xi=!1,ne="ready",jn(!1),Xn=[],Ri=null,gs(),U("welcome").hidden=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("coach").hidden=!0,Gi.classList.add("menu-open"),U("countdown").hidden=!0},op=function(){for(let a of document.querySelectorAll("[data-track]")){let l=Vn[a.dataset.track],d=a.querySelector("svg");if(!l||!d)continue;let _=l.points.map(vt=>vt[0]),b=l.points.map(vt=>vt[2]),E=Math.min(..._),I=Math.max(..._),F=Math.min(...b),B=Math.max(...b),J=Math.min(140/(I-E),54/(B-F)),lt=l.points.map(vt=>[80+(vt[0]-(E+I)/2)*J,35+(vt[2]-(F+B)/2)*J]),xt=document.createElementNS("http://www.w3.org/2000/svg","path");xt.setAttribute("d",lt.map((vt,Et)=>(Et?"L":"M")+vt.join(",")).join(" ")+"Z"),xt.setAttribute("fill","none"),xt.setAttribute("stroke",l.biome?"#eabfd8":"#a9d8ec"),xt.setAttribute("stroke-width","3"),xt.setAttribute("stroke-linejoin","round"),d.replaceChildren(xt);let mt=document.createElementNS("http://www.w3.org/2000/svg","circle");mt.setAttribute("cx",lt[0][0]),mt.setAttribute("cy",lt[0][1]),mt.setAttribute("r","3"),mt.setAttribute("fill","#ffe2ac"),d.appendChild(mt)}},v=Math.PI,f=v*2,M=(a=0,l=0,d=0)=>[a,l,d],S=(a,l)=>a.map((d,_)=>d+l[_]),R=(a,l)=>a.map((d,_)=>d-l[_]),y=(a,l)=>a.map(d=>d*l),p=(a,l)=>a[0]*l[0]+a[1]*l[1]+a[2]*l[2],N=(a,l)=>[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],k=a=>Math.hypot(...a),C=a=>y(a,1/(k(a)||1)),P=(a,l,d)=>Math.min(d,Math.max(l,a)),L=(a,l,d)=>a+(l-a)*d,O=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Yt={green:"#7fb86c",light:"#a7d27d",dark:"#407750",spine:"#4c8056",belly:"#dfdb96",eye:"#fff2cf",iris:"#325f43",coral:"#df8064",rim:"#f2be8e",rubber:"#344b42",metal:"#b7c8b1",wood:"#b78c57",gold:"#d6b471",cream:"#f1ead2",grass:"#b7cc90",white:"#fff4d7",earth:"#b4976d",water:"#91c6b8",leaf:"#85ad74"},_t=new Map,fe=ve(),Ze=ve(12,8),pe=be(),Ie=be(8),Ve=be(10,0),_e=be(4,0),ye=O();class xe{constructor(){this.data=[],this.indices=[]}add(l,d=ye,_=Yt.green,b=.13){let E=typeof _=="string"?kt(_):_,I=dt(d),F=this.data.length/10;for(let B=0;B<l.p.length;B+=3){let J=j(d,l.p.slice(B,B+3)),lt=rt(I,l.n.slice(B,B+3));this.data.push(...J,...lt,...E,b)}for(let B of l.i)this.indices.push(F+B);return this}finish(l=!1){return new mn(this.data,this.indices,l)}}class mn{constructor(l,d){this.sourceData=new Float32Array(l),this.sourceIndices=new Uint32Array(d),this.count=d.length}update(l){this.sourceData=new Float32Array(l)}dispose(){this.onDispose&&this.onDispose()}}class ue{constructor(l=null,d=ye){this.mesh=l,this.local=d,this.children=[],this.shadow=!0,this.world=ye}add(l){return this.children.push(l),l}}let Ee=new ue,W=new xe,dn=new xe,Tt=73121,ot=Ee.add(new ue),et=new xe,Rt="#83cde4",Gt="#eff0f6",At="#9c8ad5",wt="#343952",jt="#ed94bd",ee="#f8d1b5",ae="#a3a9e5",G="#7479b7";A(et,[0,.47,0],[3.15,.43,1.42],Rt,.16),A(et,[.9,.68,0],[1.4,.27,1.42],Gt,.13,[0,0,-.065],.5),A(et,[.96,.83,0],[1.08,.035,.14],At,.015,[0,0,-.065],.5),A(et,[0,.38,0],[3.3,.15,1.48],wt,.07),A(et,[1.53,.31,0],[.5,.075,1.9],At,.035),A(et,[-1.4,.39,0],[.45,.22,1.55],At,.07);for(let a of[-.7,.7]){A(et,[-.15,.64,a],[2.55,.35,.29],Rt,.12,[0,0,0],.45),A(et,[.1,.81,a],[1.55,.05,.2],Gt,.02),A(et,[-.17,.69,a*1.19],[.62,.19,.032],wt,.02,[0,0,-.12]);for(let l=0;l<4;l++)A(et,[-.38+l*.12,.69,a*1.22],[.035,.13,.015],"#758ab5",.007,[0,0,-.15]);A(et,[1.54,.66,a*.75],[.055,.14,.33],"#fff0b9",.035,[0,0,-.1],.65),A(et,[-1.57,.62,a*.79],[.035,.12,.28],jt,.035,[0,0,0],.6),A(et,[-1.32,.85,a*.83],[.07,.55,.07],wt,.02),A(et,[-1.38,1.13,a*1.34],[.43,.16,.055],At,.025)}A(et,[1.6,.44,0],[.04,.15,.67],wt,.03);for(let a=0;a<5;a++)A(et,[1.63,.44,(a-2)*.115],[.014,.1,.024],"#6d7990",.006);A(et,[-1.37,1.12,0],[.38,.065,1.94],Gt,.03),A(et,[-1.37,1.16,0],[.18,.018,1.68],At,.007),A(et,[-.42,.77,0],[1.05,.08,.94],wt,.05),A(et,[-.69,1,0],[.18,.53,.64],wt,.08,[0,0,-.12]),A(et,[-.6,1.23,0],[.18,.15,.5],At,.05),A(et,[.28,.94,0],[.075,.26,.91],"#bedde9",.025,[0,0,-.33],.6);for(let a of[-.75,.75])g(et,[.22,.91,a*.84],[.31,1.04,a*1.1],.018,wt),$t(et,[.31,1.04,a*1.11],[.13,.055,.09],Gt,!0,.6);g(et,[.35,.82,0],[.1,1.08,0],.035,wt),et.add(ct(.16,.025,28,8),z([.1,1.08,0],[1,1,1],[0,v/2,-.35]),wt,.2);for(let a of[-.34,.34])et.add(pe,z([-1.64,.43,a],[.085,.2,.085],[0,0,v/2]),"#9babc2",.75);$t(et,[-.42,1.04,0],[.24,.29,.22],At),$t(et,[-.36,1.29,0],[.095,.1,.09],ee,!0);for(let a of[-1,1]){let l=[-.38,1.17,a*.22],d=[-.13,1.02,a*.29],_=[.09,1.09,a*.14];g(et,l,d,.075,At,.14,!0),g(et,d,_,.06,At,.14,!0),$t(et,_,[.085,.065,.065],Gt,!0)}A(et,[-.18,1.08,0],[.05,.31,.08],Gt,.01);let Pt=ot.add(new ue(et.finish()));Pt.mesh.paintable=!0;let at=new xe;$t(at,[0,0,0],[.335,.355,.3],ee),$t(at,[-.19,-.01,0],[.2,.35,.32],G),$t(at,[-.025,.19,0],[.37,.255,.33],ae);for(let a of[-1,1])$t(at,[-.035,-.04,a*.29],[.13,.28,.095],ae),$t(at,[.308,.025,a*.13],[.02,.1,.067],Gt,!0),$t(at,[.326,.023,a*.13],[.012,.075,.043],"#5c72a5",!0,.4),$t(at,[.338,.015,a*.13],[.008,.048,.027],"#303c65",!0),$t(at,[.347,.058,a*.135],[.008,.02,.018],"#fffaf1",!0,.6),$t(at,[.296,-.1,a*.2],[.014,.038,.045],"#e9a6ab",!0),$(at,[[.32,.132,a*.075],[.322,.148,a*.13],[.31,.132,a*.19]],.011,G),q(at,[.215,.165,a*.18],[.1,.24,.085],ae,[0,0,v+.2]),at.add(ct(.084,.014,24,7),z([.33,.24,a*.125],[1,1,1],[0,v/2,0]),"#e8c58c",.6),$t(at,[.335,.24,a*.125],[.012,.064,.066],"#a0d8e8",!0,.6);$(at,[[.317,-.148,-.037],[.326,-.16,0],[.317,-.148,.037]],.009,"#b77787"),at.add(ct(.313,.02,40,7),z([-.025,.225,0],[1.05,1,1],[v/2,0,0]),wt),q(at,[.26,.17,-.04],[.1,.25,.08],ae,[0,0,v+.25]);let Lt=ot.add(new ue(at.finish())),Dt=[];for(let a of[-1.02,1.06])for(let l of[-1,1]){let d=new xe;d.add(ct(.315,.095,40,12),ye,"#343b4c",.22),d.add(ct(.255,.027,32,8),D(0,0,l*.075),"#e4e6ef",.7),d.add(pe,z([0,0,l*.07],[.238,.07,.238],[v/2,0,0]),"#4d5576",.35);for(let b=0;b<5;b++){let E=b*f/5;g(d,[0,0,l*.116],[.23*Math.cos(E),.23*Math.sin(E),l*.116],.025,Gt,.65)}$t(d,[0,0,l*.14],[.075,.075,.022],At,!0,.6);let _=ot.add(new ue(d.finish()));Dt.push({n:_,x:a,z:l*.83,front:a>0})}let yt=[];for(let a of[-1,1]){let l=new xe;$t(l,[0,0,0],[.65,.105,.105],"#a6f4ff",!0,.8),$t(l,[-.3,0,0],[.35,.065,.065],"#e9d1ff",!0,.7);let d=ot.add(new ue(l.finish()));d.shadow=!1,yt.push({n:d,side:a})}let Zt=new xe;A(Zt,[0,.36,0],[.6,.72,2.1],"#ef97aa",.08),A(Zt,[0,.78,0],[.69,.16,2.2],Gt,.035);for(let a=0;a<5;a++)A(Zt,[.312,.4,(a-2)*.38],[.018,.29,.16],"#fff0c7",.015,[.28,0,0]);for(let a of[-.85,.85])g(Zt,[0,.05,a],[0,.77,a],.045,"#636986");let Kt=Zt.finish(),Fe=new xe;A(Fe,[0,.07,0],[.8,.12,.8],wt,.04),q(Fe,[0,.49,0],[.28,.78,.28],"#e4b281"),q(Fe,[0,.53,0],[.2,.16,.2],Gt);let Ue=Fe.finish(),Tn=new xe;Tn.add(ct(.34,.068,28,8),z([0,0,0],[1,1,1],[0,v/2,0]),"#f0d085",.7),$t(Tn,[0,0,0],[.04,.22,.22],"#ffe7a7",!0,.55);let kn=Tn.finish(),Ns=new xe;A(Ns,[0,.025,0],[5.5,.045,3],"#7ecadc",.02);for(let a=0;a<3;a++){let l=-1.8+a*1.6;g(Ns,[l-.45,.075,-.9],[l+.35,.075,0],.055,"#eef9d0",.3),g(Ns,[l+.35,.075,0],[l-.45,.075,.9],.055,"#eef9d0",.3)}let oc=Ns.finish(),Us=new xe,us=[-2.5,0,-1.6,2.5,0,-1.6,2.5,1,-1.6,-2.5,0,1.6,2.5,0,1.6,2.5,1,1.6],Ti=[0,1,2,3,5,4,0,2,5,0,5,3,1,4,5,1,5,2],Fs=[],Pr=[],oi=[];for(let a=0;a<Ti.length;a+=3){let l=us.slice(Ti[a]*3,Ti[a]*3+3),d=us.slice(Ti[a+1]*3,Ti[a+1]*3+3),_=us.slice(Ti[a+2]*3,Ti[a+2]*3+3),b=C(N(R(d,l),R(_,l))),E=Fs.length/3;Fs.push(...l,...d,..._),Pr.push(...b,...b,...b),oi.push(E,E+1,E+2)}Us.add(Se(Fs,Pr,oi),ye,"#d9b1e0");for(let a of[-1.4,1.4])g(Us,[-2.5,.06,a],[2.5,1.06,a],.045,Gt);let Ir=Us.finish(),Ga=new xe().add(Ze,ye,"#b4eaff",.2).finish(),ds=Array.from({length:45},()=>({life:0,p:[0,0,0],v:[0,0,0],size:.1,node:new ue(Ga)}));for(let a of ds)a.node.shadow=!1;let te="circuit",Ke="coast-reborn",Lr="coast-reborn",Vn={"coast-reborn":{name:"\u6C50\u89C1\u6D77\u5CB8",laps:1,biome:0,difficulty:"\u5165\u95E8 \xB7 \u9AD8\u901F\u7EC4\u5408\u5F2F",description:"\u6C50\u89C1\u7AD9\u524D \u2192 \u6D77\u6EE8\u5546\u5E97\u8857 \u2192 \u795E\u793E\u5C71\u9053 \u2192 \u6E2F\u6E7E S \u5F2F",sectors:[{at:0,name:"\u6C50\u89C1\u7AD9\u524D"},{at:.22,name:"\u6D77\u6EE8\u5546\u5E97\u8857"},{at:.48,name:"\u6E2F\u6E7E S \u5F2F"},{at:.66,name:"\u795E\u793E\u5C71\u9053"},{at:.82,name:"\u6D77\u98CE\u5927\u9053"}],points:[[-155,0,70],[-80,0,70],[0,.2,70],[85,.7,65],[135,1.2,30],[130,1.6,-20],[75,2,-28],[38,1.8,0],[0,1.5,-10],[8,.8,-58],[65,.2,-80],[115,0,-85],[130,.4,-125],[75,1,-150],[0,1.6,-145],[-60,2,-100],[-110,1.2,-135],[-155,.5,-100],[-200,0,-25],[-218,0,28],[-215,0,70]]},"sakura-reborn":{name:"\u82B1\u89C1\u5742",laps:2,biome:1,difficulty:"\u8FDB\u9636 \xB7 \u8FDE\u7EED\u53CD\u5411\u5F2F",description:"\u6A31\u82B1\u6821\u95E8 \u2192 \u82B1\u89C1\u5742\u5546\u5E97\u8857 \u2192 \u795E\u793E\u53C2\u9053 \u2192 \u6CB3\u5CB8\u56DE\u73AF",sectors:[{at:0,name:"\u6A31\u82B1\u7AD9\u524D"},{at:.22,name:"\u82B1\u89C1\u5742\u5546\u5E97\u8857"},{at:.47,name:"\u6CB3\u5CB8\u56DE\u73AF"},{at:.66,name:"\u795E\u793E\u53C2\u9053"},{at:.83,name:"\u6A31\u82B1\u5927\u9053"}],points:[[-180,0,70],[-95,0,70],[0,0,70],[95,.4,62],[170,1,16],[160,1.6,-45],[100,2,-70],[55,2.2,-30],[5,2,-55],[-16,1,-110],[-80,.5,-130],[-145,0,-104],[-220,0,-45],[-230,0,25],[-230,0,70]]}};Vn["academy-reborn"]={name:"\u661F\u8DC3\u8BAD\u7EC3\u573A",laps:1,biome:1,difficulty:"\u57FA\u7840\u9A7E\u9A76",description:"\u5BBD\u7F13\u5F2F\u9053 \xB7 \u6E05\u6670\u89C6\u91CE \xB7 \u7EC3\u4E60\u8D77\u6F02\u3001\u53CD\u6253\u4E0E\u51FA\u5F2F\u55B7\u5C04",sectors:[{at:0,name:"\u57FA\u7840\u76F4\u9053"},{at:.33,name:"\u6F02\u79FB\u5F27\u7EBF"},{at:.66,name:"\u51FA\u5F2F\u52A0\u901F"}],points:[[-100,0,65],[0,0,65],[100,0,65],[145,.3,25],[145,.4,-25],[100,.2,-65],[0,0,-65],[-100,0,-65],[-145,.1,-25],[-145,.1,25]]};for(let[a,l]of Object.entries(Vn)){let d=a==="coast-reborn"?1.45:a==="sakura-reborn"?1.5:1.2;l.points=l.points.map(_=>[_[0]*d,_[1],_[2]*d])}let gn=[],De=0,Dr={};V();let Ut=220,Jt=245,qt=1.57,le=.91,ge=8.045,Bt=(a,l)=>a[0]*l[0]+a[1]*l[1],Ce=(a,l)=>a[0]*l[1]-a[1]*l[0],nn=new Map,ui=null,Qh=null,lc=[],Af=Te("petal",a=>A(a,[0,0,0],[.12,.025,.075],"#ffd2e8",.025)),we=null,Nn=!0,If=(()=>{let a=(E,I,F)=>Math.min(F,Math.max(I,E)),l=(E,I,F)=>E+(I-E)*F,d=E=>Math.atan2(Math.sin(E),Math.cos(E)),_=Object.freeze({cruise:52,mini:63,nitro:76,combo:83,normalTurn:1.04,driftTurn:1.8,driveAcceleration:27,jetAcceleration:36});function b(E,I,F,B={}){let J=Math.hypot(E.vS,E.vL),lt=J>.05?Math.atan2(E.vL,E.vS):E.yaw,xt=a(Number(I.steer)||0,-1,1),mt=B.sensitivity||1,vt=E.vS*Math.cos(E.yaw)+E.vL*Math.sin(E.yaw)<-.05;E.steering=l(E.steering||0,xt,1-Math.exp(-F*26));let Et=!!E.drifting,Nt=E.driftSide||Math.sign(xt)||1,Mt=Et&&xt*Nt<-.1,pt=Et&&E.driftReleasing,bt=E.steering*_.normalTurn*mt*a(J/8,0,1)*(vt?-1:1);if(Et){let cp=Math.max(0,E.steering*Nt),hp=Nt*(Mt?.4:.52+cp*(_.driftTurn-.52)),up=pt?a((E.releaseAge||0)/.38,0,1):0;bt=l(hp,bt,up)*a(J/9,0,1)}E.jump>.2&&(bt*=.35),E.turnRate=l(E.turnRate||0,bt,1-Math.exp(-F*(Et?13:19)));let zt=d(lt+E.turnRate*F),Ft=d(lt-(vt?Math.PI:0)),St=d(E.yaw-Ft),he=Et?Nt*(Mt?.015:pt?.12:.22+.38*Math.max(0,xt*Nt)):E.steering*.025;pt&&(he*=1-a((E.releaseAge||0)/.45,0,1));let Rn=Mt?13:Et?9:8;St=l(St,he,1-Math.exp(-F*Rn)),E.yaw=d(zt-(vt?Math.PI:0)+St+(E.spin||0)*F),E.spin=(E.spin||0)*Math.exp(-F*6);let ke=J,hn=.7+J*.018+J*J*45e-5,qn=E.nitroTime>0||E.mini>0||E.pad>0,$s=E.nitroTime>0?E.comboTimer>0?_.combo:_.nitro:E.pad>0?73:E.mini>0?_.mini:_.cruise,$r=I.gas&&!I.brake?a((_.cruise-ke)*2.8,0,_.driveAcceleration):0,Ii=qn&&!I.brake?a(($s-ke)*2.8,0,_.jetAcceleration):0,lp=Et?(Mt?1.3:3.3)*Math.abs(St):0;return ke=Math.max(0,ke+($r+Ii-hn-lp)*F),!qn&&ke>_.cruise&&(ke=Math.max(_.cruise,ke-Math.min(8,(ke-_.cruise)*.7)*F)),I.brake&&(ke=Math.max(0,ke-36*F)),vt&&I.gas&&(ke=Math.max(0,ke-32*F)),I.brake&&!I.gas&&(J<1.3||vt)?(E.vS=l(E.vS,-Math.cos(E.yaw)*5,1-Math.exp(-F*5)),E.vL=l(E.vL,-Math.sin(E.yaw)*5,1-Math.exp(-F*5))):(E.vS=Math.cos(zt)*ke,E.vL=Math.sin(zt)*ke),E.speed=Math.hypot(E.vS,E.vL),E.velocityYaw=zt,E.lateralSpeed=E.vL,{slip:St,counter:Mt,thrust:Ii,boost:qn,speed:E.speed}}return{step:b,config:_,wrap:d}})(),wn=a=>Math.atan2(Math.sin(a),Math.cos(a)),U=a=>document.getElementById(a),Gi=U("game"),Le={gas:!1,brake:!1,left:!1,right:!1,drift:!1,boost:!1,small:!1},qa=new Set,Ya=new Map,Hn={drift:0,boost:0,small:0},uc=[{name:"\u6C50\u89C1\u6D77\u5CB8",ground:"#cbdcbd",tree:"#b9d5bb",accent:"#afc8e4",fog:"#c8deef"},{name:"\u82B1\u89C1\u5742",ground:"#d9d7c7",tree:"#f0bfd5",accent:"#c9c1e5",fog:"#dcdff1"},{name:"\u661F\u5149\u5CE1\u8C37",ground:"#c4b8c3",tree:"#a7a5d3",accent:"#d8b4d8",fog:"#dbdce8"}],x={s:0,l:0,speed:0,yaw:0,velocityYaw:0,energy:0,coins:0,score:0,inv:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,wallRecover:0,wallSide:0,stuckTime:0},Ja=1/120,zx=7.02,nu=new Map,dc=null,fs=0,ks=60,Nr=0,ps=null,Ff=new xe().add(Vt(1,.009,.12,.003),ye,"#414957",.01).finish(),ms=Array.from({length:160},()=>({life:0,p:[0,0,0],angle:0,length:1,node:new ue(Ff)}));for(let a of ms)a.node.shadow=!1;let Of=0,ne="ready",Vs=(Date.now()>>>0)%999999||24681,Za=1,Kn=[],Ur=0,fc=-v/2,pc=100,Ka=0,cn=new Map,mc=0,di=0,Gs=0,$a=performance.now(),Hi=3,Wn=0,Hs=0,Fr=0,Or=0,iu=!1,ja=!1,Br=0,Qa=0;try{Br=Number(localStorage.getItem("star-rush-best-distance")||0),Qa=Number(localStorage.getItem("star-rush-best-score")||0)}catch{}let fi=Object.fromEntries(["distance","score","coins","speed","gear","energyText","biome","turnText","turnArrowPath","driftText"].map(a=>[a,U(a)])),Xs=null,zr=null,_s=null,vc=U("minimap"),Qt=vc.getContext("2d"),yc=0,to={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"small",KeyQ:"small",ShiftLeft:"drift",ShiftRight:"drift",KeyE:"boost",KeyC:"boost"};window.addEventListener("keydown",a=>{if(!a.target.closest("input,select,textarea")){if(a.code==="Escape"){for(let l of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])if(!U(l).hidden){ys(l);return}}if(!["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)){if(to[a.code]&&(a.preventDefault(),qa.add(a.code),zs()),a.code==="Backspace"){a.preventDefault(),a.repeat||xc(!1);return}a.repeat||(a.code==="F2"&&(a.preventDefault(),U("diagnostics").hidden=!U("diagnostics").hidden),(a.code==="KeyP"||a.code==="Escape")&&Wi(),a.code==="KeyV"&&(Wn=(Wn+1)%3,_n("CAMERA "+(Wn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Wn],1)),a.code==="KeyR"&&Ws(!1),a.code==="Enter"&&(ne==="ready"||ne==="finished"?Ws(!1):ne==="paused"&&Wi()))}}}),window.addEventListener("keyup",a=>{["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)||to[a.code]&&(a.preventDefault(),qa.delete(a.code),zs())}),window.addEventListener("blur",()=>{gs(),ne==="running"&&Wi()});for(let a of document.querySelectorAll("[data-key]")){a.addEventListener("pointerdown",d=>{d.preventDefault(),a.setPointerCapture(d.pointerId),Ya.set(d.pointerId,a.dataset.key),zs(),a.classList.add("held")});let l=d=>{Ya.delete(d.pointerId),zs(),a.classList.remove("held")};for(let d of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(d,l)}U("endRunBtn").onclick=()=>{te==="endless"&&(ne==="running"||ne==="paused")&&(U("paused").hidden=!0,_c())},U("recoverBtn").onclick=()=>xc(!1),U("startBtn").onclick=()=>Ws(!1),U("retryBtn").onclick=()=>Ws(!1),U("newRouteBtn").onclick=()=>{if(typeof nt<"u"&&nt.room){Yr();return}ne="ready",jn(!0),U("finished").hidden=!0,U("welcome").hidden=!1},U("rerollBtn").onclick=()=>jn(!0),U("pauseBtn").onclick=Wi,U("resumeBtn").onclick=Wi,U("restartPause").onclick=()=>Ws(!1),U("viewBtn").onclick=()=>{Wn=(Wn+1)%3,_n("CAMERA "+(Wn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Wn],1)},U("soundBtn").onclick=()=>{Wa(),Nn=!Nn,we&&we.ctx.resume().catch(()=>{}),U("soundBtn").textContent=Nn?"\u266B":"\u266A",U("soundBtn").setAttribute("aria-label",Nn?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),U("soundBtn").title=Nn?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED",Nn&&Vi(600)};let Wf=["#a1cddd","#c2d4bc"].map(a=>new xe().add(Vt(1100,.16,1100,.04),ye,a,.02).finish()),eo=new ue,Mc=[],kr=1,Vr=1;new ResizeObserver(hu).observe(i),hu(),jn(!1),i.addEventListener("webglcontextlost",a=>{a.preventDefault(),n("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u6E38\u620F\u3002")}),document.addEventListener("visibilitychange",()=>{document.hidden&&ne==="running"&&Wi(),$a=performance.now()}),requestAnimationFrame(uu);let xs=Ke,Gr=null,Ai="circuit",Ei=!1,Sc=0;async function Hr(){let a=++Sc,l=U("rankRows");U("rankTrack")&&(U("rankTrack").hidden=Ai!=="circuit"),l.replaceChildren(),U("rankStatus").textContent=Ei?"\u672C\u673A\u8BB0\u5F55":"\u6B63\u5728\u83B7\u53D6\u5728\u7EBF\u6210\u7EE9\u2026";for(let[d,_]of[["boardCircuit","circuit"],["boardEndless","endless"]])U(d).classList.toggle("selected",!Ei&&Ai===_);U("boardLocal").classList.toggle("selected",Ei);try{let d;if(Ei)d=du().filter(_=>_.mode===Ai&&(_.mode==="endless"||_.track===xs)).sort((_,b)=>Ai==="circuit"?_.timeMs-b.timeMs:b.distance-_.distance).slice(0,20);else{let _=await fetch("/api/leaderboard?mode="+Ai+"&track="+encodeURIComponent(xs));if(!_.ok)throw new Error("\u699C\u5355\u670D\u52A1\u6682\u4E0D\u53EF\u7528");d=(await _.json()).runs}if(a!==Sc)return;for(let _=0;_<d.length;_++)l.appendChild(qf(_,d[_]));U("rankStatus").textContent=d.length?(Ei?"\u5F53\u524D\u8BBE\u5907 \xB7 ":"\u5728\u7EBF \xB7 ")+(Ai==="circuit"?Vn[xs].name+" / "+Vn[xs].laps+" \u5708 / \u6309\u6700\u5FEB\u7528\u65F6":"\u65E0\u5C3D\u6A21\u5F0F / \u6309\u6700\u8FDC\u91CC\u7A0B"):"\u8FD8\u6CA1\u6709\u6210\u7EE9\uFF0C\u6765\u8DD1\u7B2C\u4E00\u5708\u3002"}catch{if(a!==Sc)return;U("rankStatus").textContent="\u5728\u7EBF\u699C\u6682\u65F6\u672A\u80FD\u52A0\u8F7D\uFF0C\u53EF\u5207\u6362\u201C\u672C\u673A\u8BB0\u5F55\u201D\u3002"}}U("rankBtn").onclick=Yf,U("closeRank").onclick=()=>ys("rankPanel"),U("boardCircuit").onclick=()=>{Ai="circuit",Ei=!1,Hr()},U("boardEndless").onclick=()=>{Ai="endless",Ei=!1,Hr()},U("boardLocal").onclick=()=>{Ei=!0,Hr()},U("circuitMode").onclick=()=>fu("circuit"),U("endlessMode").onclick=()=>fu("endless");try{U("racerName").value=localStorage.getItem("star-rush-name")||""}catch{}U("submitRun").onclick=async()=>{if(!Gr)return;let a=U("racerName").value.trim().slice(0,16)||"\u533F\u540D\u8F66\u624B";try{localStorage.setItem("star-rush-name",a)}catch{}U("submitRun").disabled=!0,U("uploadStatus").textContent="\u6B63\u5728\u4E0A\u4F20\u6210\u7EE9\u2026";try{if(!(await fetch("/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...Gr,name:a})})).ok)throw new Error;U("submitRun").textContent="\u5DF2\u4E0A\u4F20",U("uploadStatus").textContent="\u4E0A\u4F20\u6210\u529F\uFF01\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u699C\u201D\u67E5\u770B\u548C\u670B\u53CB\u7684\u6392\u540D\u3002"}catch{U("submitRun").disabled=!1,U("uploadStatus").textContent="\u6682\u65F6\u672A\u80FD\u4E0A\u4F20\uFF0C\u672C\u673A\u6210\u7EE9\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u91CD\u8BD5\u3002"}};for(let a of document.querySelectorAll("[data-track]"))a.onclick=()=>pu(a.dataset.track);Wr();let qs=document.createElement("select");qs.id="rankTrack",qs.setAttribute("aria-label","\u6392\u884C\u699C\u8D5B\u9053");for(let[a,l]of Object.entries(Vn)){let d=document.createElement("option");d.value=a,d.textContent=l.name,qs.appendChild(d)}U("rankStatus").before(qs),qs.onchange=()=>{xs=qs.value,Hr()};let An={enabled:!0,volume:.4,sfxVolume:.75};try{Object.assign(An,JSON.parse(localStorage.getItem("star-rush-audio")||"{}"))}catch{}let se={mode:"synth",bus:null,step:0,next:0,files:[],index:0,url:null,element:null},qr=!1;U("musicBtn").onclick=()=>{Xr(),Ys("musicPanel")},U("closeMusic").onclick=()=>ys("musicPanel"),U("helpBtn").onclick=U("welcomeHelp").onclick=()=>Ys("helpPanel"),U("closeHelp").onclick=()=>ys("helpPanel"),U("synthMusic").onclick=()=>no("synth"),U("classicMusic").onclick=()=>no("classic"),U("musicFiles").onchange=a=>{se.files=Array.from(a.target.files||[]),io(0)},U("nextSong").onclick=()=>io(se.index+1),U("previousSong").onclick=()=>io(se.index-1),U("musicToggle").onclick=()=>{Xr(),An.enabled=!An.enabled,U("musicToggle").textContent=An.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",bc()},U("musicVolume").value=Math.round(An.volume*100),U("sfxVolume").value=Math.round(An.sfxVolume*100),U("musicToggle").textContent=An.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",U("musicVolume").oninput=a=>{An.volume=Number(a.target.value)/100,bc()},U("sfxVolume").oninput=a=>{An.sfxVolume=Number(a.target.value)/100,bc()},U("classicTrack").onchange=()=>{no("classic"),U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"};let nt={id:crypto.randomUUID(),room:null,members:[],ready:!1,busy:!1,lastSync:0,offset:0,startAt:0,runTag:0,peers:new Map,errors:0,rtt:0,session:0},so=["#f6aec9","#ffd88b","#baafff","#a8efce"],Zf=so.map(a=>{let l=new xe;return q(l,[0,2.55,0],[.14,.28,.14],a,[0,0,v]),l.finish()});async function wc(a,l={}){let d=Date.now(),_=await fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:a,id:nt.id,code:nt.room?.code||U("roomCode").value.trim(),name:U("roomName").value.trim()||"\u533F\u540D\u8F66\u624B",track:Ke,...l}),signal:AbortSignal.timeout(4e3)}),b=await _.json();if(!_.ok)throw new Error(b.error||"\u623F\u95F4\u8BF7\u6C42\u5931\u8D25");if(nt.rtt=Date.now()-d,b.serverTime){let E=b.serverTime-(d+Date.now())/2;nt.offset=nt.room?L(nt.offset,E,.25):E}return b}async function xu(a){if(!nt.busy){nt.busy=!0,U("roomStatus").textContent="\u6B63\u5728\u8FDE\u63A5\u623F\u95F4\u2026";try{let l=await wc(a);nt.session++,_u(),Ke=l.room.track,te="circuit",jn(!1),Wr(),Ac(l),ne="ready",qr=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Gi.classList.add("menu-open");try{localStorage.setItem("star-rush-name",U("roomName").value.trim())}catch{}}catch(l){U("roomStatus").textContent=l.message}finally{nt.busy=!1}}}async function vu(a,l={}){if(nt.busy)return;nt.busy=!0;let d=nt.session;try{let _=await wc(a,l);d===nt.session&&nt.room&&Ac(_)}catch(_){U("roomStatus").textContent=_.message}finally{nt.busy=!1}}async function $f(){if(!nt.room)return;let a={action:"leave",id:nt.id,code:nt.room.code,name:U("roomName").value};nt.session++,nt.room=null,nt.startAt=0,nt.runTag=0,nt.members=[],_u(),ne="ready",jn(!1),U("finished").hidden=!0,U("paused").hidden=!0,U("countdown").hidden=!0,U("welcome").hidden=!1,Gi.classList.add("menu-open"),Ec(),fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),keepalive:!0}).catch(()=>{})}U("roomBtn").onclick=U("welcomeRoom").onclick=Yr,U("closeRoom").onclick=()=>ys("roomPanel"),U("createRoom").onclick=()=>xu("create"),U("joinRoom").onclick=()=>xu("join"),U("readyRoom").onclick=()=>vu("ready",{ready:!nt.ready}),U("startRoom").onclick=()=>vu(nt.room?.status!=="lobby"?"reset":"start"),U("leaveRoom").onclick=$f,U("copyRoom").onclick=async()=>{if(!nt.room)return;let a=new URL(location.href);a.searchParams.set("room",nt.room.code);try{await navigator.clipboard.writeText(a.toString()),U("roomStatus").textContent="\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5373\u53EF\u52A0\u5165"}catch{U("roomStatus").textContent="\u623F\u95F4\u7801 "+nt.room.code+" \xB7 \u590D\u5236\u6D4F\u89C8\u5668\u5730\u5740\u5E76\u52A0\u4E0A ?room="+nt.room.code}};try{U("roomName").value=localStorage.getItem("star-rush-name")||"\u8F66\u624B"+Math.floor(100+Math.random()*900)}catch{}let Su=new URLSearchParams(location.search).get("room");Su&&(U("roomCode").value=Su.toUpperCase().slice(0,6),Yr()),window.addEventListener("pagehide",()=>{nt.room&&navigator.sendBeacon("/api/rooms",new Blob([JSON.stringify({action:"leave",id:nt.id,code:nt.room.code})],{type:"application/json"}))});let Xn=[],Xi=!1,qi=null,Cc={drawCalls:0,triangles:0},Jr=!1,Ci=null,Ri=null,Ms=0,ro=[],ao=0,oo=[],Js=[],Ss=1,Zr=1,Zs=null,lo=0,Qf=["Aoi / AI","Haru / AI","Rin / AI"],bu=["#f0a7c8","#b6a7e6","#f1cd90"],Tu=["#a5dbe6","#f0b7c3"].map(a=>{let l=new xe;return g(l,[-.6,.03,-.38],[.1,.03,0],.055,a),g(l,[.1,.03,0],[-.6,.03,.38],.055,a),l.finish()}),Rc=Array.from({length:9},()=>new ue(Tu[0]));for(let a of Rc)a.shadow=!1;let Ks=[],Ic=0,Pu=performance.now(),Lc={},Dc=!1,Iu={quality:"auto",sensitivity:1,fov:62,autoGas:!1,line:!0,ghost:!0},sn={...Iu},Qe={name:"\u8F66\u624B"+Math.floor(100+Math.random()*900),paint:"#83cde4",car:"Mint Comet"},Pi="race";try{Object.assign(sn,JSON.parse(localStorage.getItem("star-rush-settings-reborn")||"{}")),Object.assign(Qe,JSON.parse(localStorage.getItem("star-rush-profile")||"{}")),Qe.name=localStorage.getItem("star-rush-name")||Qe.name}catch{}let ap=[["Mint Comet","#83cde4","\u8584\u8377\u5F57\u661F"],["Sakura Bloom","#efabc8","\u6A31\u82B1\u7EFD\u653E"],["Violet Hour","#b1a0df","\u66AE\u8272\u7D2B"],["Solar Flare","#edc784","\u65E5\u5149\u91D1"]];U("settingsBtn").onclick=()=>{Nc(),Ys("settingsPanel")},U("closeSettings").onclick=()=>ys("settingsPanel");for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).onchange=d=>{sn[l]=d.target.checked,Kr()};U("qualitySetting").onchange=a=>{sn.quality=a.target.value,Kr()},U("steeringSetting").oninput=a=>{sn.sensitivity=Number(a.target.value)/100,Kr()},U("fovSetting").oninput=a=>{sn.fov=Number(a.target.value),Kr()},U("resetSettings").onclick=()=>{sn={...Iu},Kr(),Nc()};for(let[a,l,d]of ap){let _=document.createElement("button");_.type="button",_.style.setProperty("--paint",l),_.setAttribute("aria-label",d+"\u6D82\u88C5");let b=document.createElement("i"),E=document.createElement("b"),I=document.createElement("small");E.textContent=a,I.textContent=d,_.append(b,E,I),_.onclick=()=>{Qe.paint=l,Qe.car=a;for(let F of U("garageGrid").children)F.classList.toggle("selected",F===_);co()},Qe.paint===l&&_.classList.add("selected"),U("garageGrid").appendChild(_)}U("garageBtn").onclick=()=>Ys("garagePanel"),U("closeGarage").onclick=()=>ys("garagePanel"),U("saveProfile").onclick=co,U("profileName").value=Qe.name,co(),U("eventType").onchange=a=>{Pi=a.target.value,Pi==="practice"&&pu("academy-reborn")},U("pauseHome").onclick=Lu,U("newRouteBtn").onclick=Lu,U("demoBtn").onclick=()=>{Ws(!1),Xi=!0,_n("DEMO DRIVE","\u81EA\u52A8\u8BD5\u9A7E \xB7 \u6309\u4EFB\u610F\u65B9\u5411\u952E\u63A5\u7BA1",2)},window.addEventListener("keydown",a=>{a.target.closest("input,select,textarea")||["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a.code)&&Xi&&(Xi=!1,qi=null,_n("YOUR TURN","\u5DF2\u63A5\u7BA1\u8D5B\u8F66",1))}),U("compatNotice").hidden=!c,op(),Nc(),Pc();for(let a of["racerName","roomName"])U(a).addEventListener("change",()=>{U("profileName").value=U(a).value,co()});yf(document,{"coast-reborn":"/assets/course-art/coast-v2.bd2e4837727f.webp","sakura-reborn":"/assets/course-art/sakura-v1.3b94eedaa6d8.webp","academy-reborn":"/assets/course-art/academy-v1.9c6071e18e14.webp"})}catch(h){console.error(h),n("\u6E38\u620F\u521D\u59CB\u5316\u5F02\u5E38\uFF1A"+h.message)}})();})();
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
