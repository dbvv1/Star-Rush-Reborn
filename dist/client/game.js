(()=>{function Nu(i,t,e,{fetchImpl:n=globalThis.fetch,timeoutMs:s=5e3}={}){let r=new Map,o={light:"idle",medium:"idle"},c=new Set,u=null,h=!1,p="none",M=0,d=new Set;function x(){return u||(u=Promise.all(["light","medium"].map(async m=>{if(h)return;o[m]="loading";let D=new AbortController;d.add(D);let F;try{let E=(async()=>{if(typeof e[m]!="string"||!e[m].startsWith("/assets/impact-audio/"))throw Error("Missing rail asset");let R=await n(e[m],{signal:D.signal});if(!R.ok)throw Error("Rail asset HTTP error");let B=await R.arrayBuffer();if(B.byteLength>5e4)throw Error("Rail asset oversized");let b=await i.decodeAudioData(B);if(!(b.duration>0&&b.duration<=1)||b.numberOfChannels!==1)throw Error("Invalid rail clip");return b})(),I=await Promise.race([E,new Promise((R,B)=>{F=setTimeout(()=>{D.abort(),B(Error("Rail asset timeout"))},s)})]);h||(r.set(m,I),o[m]="ready")}catch{h||(o[m]="fallback")}finally{clearTimeout(F),d.delete(D)}})),u)}function S(){for(let m of[...c]){try{m.source.stop()}catch{}m.cleanup()}}function P(m){if(h||i.state!=="running"||!Number.isFinite(m)||m<.7)return!1;let D=m>5?"medium":"light",F=r.get(D);if(!F)return p=D+" fallback",!1;if(c.size>=4){let B=c.values().next().value;try{B.source.stop()}catch{}B.cleanup()}let E,I,R;try{return E=i.createBufferSource(),I=i.createGain(),E.buffer=F,I.gain.value=.15,E.connect(I),I.connect(t),R={source:E,cleanup(){c.delete(R),E.onended=null,E.disconnect(),I.disconnect()}},E.onended=()=>R.cleanup(),c.add(R),E.start(),E.stop(i.currentTime+F.duration+.02),p=D,M++,!0}catch{return R?R.cleanup():(E?.disconnect(),I?.disconnect()),p=D+" fallback",!1}}function y(){h=!0;for(let m of d)m.abort();S(),r.clear()}return{load:x,play:P,stop:S,dispose:y,status:()=>({states:{...o},active:c.size,last:p,played:M})}}var sd=0,dh=1,rd=2;var Ca=1,fl=2,vr=3,os=0,mn=1,yi=2,Mi=0,yr=1,fh=2,ph=3,mh=4,ad=5;var Is=100,od=101,ld=102,cd=103,hd=104,ud=200,dd=201,fd=202,pd=203,gh=204,_h=205,md=206,gd=207,_d=208,xd=209,vd=210,yd=211,Md=212,Sd=213,bd=214,Uo=0,Fo=1,Oo=2,ur=3,Bo=4,zo=5,ko=6,Vo=7,xh=0,Td=1,wd=2,si=0,vh=1,yh=2,Mh=3,Ra=4,Sh=5,bh=6,Th=7;var wh=300,ls=301,Ls=302,pl=303,ml=304,Pa=306,Go=1e3,mi=1001,Ho=1002,en=1003,Ad=1004;var Ia=1005;var pn=1006,gl=1007;var cs=1008;var Un=1009,Ah=1010,Eh=1011,Mr=1012,_l=1013,ri=1014,Jn=1015,ai=1016,xl=1017,vl=1018,Sr=1020,Ch=35902,Rh=35899,Ph=1021,Ih=1022,Zn=1023,gi=1026,hs=1027,br=1028,yl=1029,us=1030,Ml=1031;var Sl=1033,La=33776,Da=33777,Na=33778,Ua=33779,bl=35840,Tl=35841,wl=35842,Al=35843,El=36196,Cl=37492,Rl=37496,Pl=37488,Il=37489,Fa=37490,Ll=37491,Dl=37808,Nl=37809,Ul=37810,Fl=37811,Ol=37812,Bl=37813,zl=37814,kl=37815,Vl=37816,Gl=37817,Hl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,Jl=36494,Zl=36495,Kl=36283,$l=36284,Oa=36285,jl=36286;var ra=2300,Wo=2301,Do=2302,rh=2303,ah=2400,oh=2401,lh=2402;var Ed=3200;var Ql=0,Cd=1,Fi="",Cn="srgb",aa="srgb-linear",oa="linear",Oe="srgb";var No=7680;var Rd=519,Pd=512,Id=513,Ld=514,tc=515,Dd=516,Nd=517,ec=518,Ud=519,Fd=35044,Lh=35048;var Dh="300 es",ii=2e3,dr=2001;function hp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=la("canvas");return i.style.display="block",i}var Uu={},fr=null;function Nh(...i){let t="THREE."+i.shift();fr?fr("log",t,...i):console.log(t,...i)}function Bd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function re(...i){i=Bd(i);let t="THREE."+i.shift();if(fr)fr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function oe(...i){i=Bd(i);let t="THREE."+i.shift();if(fr)fr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Rs(...i){let t=i.join(" ");t in Uu||(Uu[t]=!0,re(...i))}function zd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kd={[Uo]:Fo,[Oo]:ko,[Bo]:Vo,[ur]:zo,[Fo]:Uo,[ko]:Oo,[Vo]:Bo,[zo]:ur},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fc=Math.PI/180,Xo=180/Math.PI;function Ba(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function dp(i,t){return(i%t+t)%t}function Oc(i,t,e){return(1-e)*i+e*t}function jr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ee=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,c){let u=n[s+0],h=n[s+1],p=n[s+2],M=n[s+3],d=r[o+0],x=r[o+1],S=r[o+2],P=r[o+3];if(M!==P||u!==d||h!==x||p!==S){let y=u*d+h*x+p*S+M*P;y<0&&(d=-d,x=-x,S=-S,P=-P,y=-y);let m=1-c;if(y<.9995){let D=Math.acos(y),F=Math.sin(D);m=Math.sin(m*D)/F,c=Math.sin(c*D)/F,u=u*m+d*c,h=h*m+x*c,p=p*m+S*c,M=M*m+P*c}else{u=u*m+d*c,h=h*m+x*c,p=p*m+S*c,M=M*m+P*c;let D=1/Math.sqrt(u*u+h*h+p*p+M*M);u*=D,h*=D,p*=D,M*=D}}t[e]=u,t[e+1]=h,t[e+2]=p,t[e+3]=M}static multiplyQuaternionsFlat(t,e,n,s,r,o){let c=n[s],u=n[s+1],h=n[s+2],p=n[s+3],M=r[o],d=r[o+1],x=r[o+2],S=r[o+3];return t[e]=c*S+p*M+u*x-h*d,t[e+1]=u*S+p*d+h*M-c*x,t[e+2]=h*S+p*x+c*d-u*M,t[e+3]=p*S-c*M-u*d-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,c=Math.cos,u=Math.sin,h=c(n/2),p=c(s/2),M=c(r/2),d=u(n/2),x=u(s/2),S=u(r/2);switch(o){case"XYZ":this._x=d*p*M+h*x*S,this._y=h*x*M-d*p*S,this._z=h*p*S+d*x*M,this._w=h*p*M-d*x*S;break;case"YXZ":this._x=d*p*M+h*x*S,this._y=h*x*M-d*p*S,this._z=h*p*S-d*x*M,this._w=h*p*M+d*x*S;break;case"ZXY":this._x=d*p*M-h*x*S,this._y=h*x*M+d*p*S,this._z=h*p*S+d*x*M,this._w=h*p*M-d*x*S;break;case"ZYX":this._x=d*p*M-h*x*S,this._y=h*x*M+d*p*S,this._z=h*p*S-d*x*M,this._w=h*p*M+d*x*S;break;case"YZX":this._x=d*p*M+h*x*S,this._y=h*x*M+d*p*S,this._z=h*p*S-d*x*M,this._w=h*p*M-d*x*S;break;case"XZY":this._x=d*p*M-h*x*S,this._y=h*x*M-d*p*S,this._z=h*p*S+d*x*M,this._w=h*p*M+d*x*S;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],c=e[5],u=e[9],h=e[2],p=e[6],M=e[10],d=n+c+M;if(d>0){let x=.5/Math.sqrt(d+1);this._w=.25/x,this._x=(p-u)*x,this._y=(r-h)*x,this._z=(o-s)*x}else if(n>c&&n>M){let x=2*Math.sqrt(1+n-c-M);this._w=(p-u)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+h)/x}else if(c>M){let x=2*Math.sqrt(1+c-n-M);this._w=(r-h)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(u+p)/x}else{let x=2*Math.sqrt(1+M-n-c);this._w=(o-s)/x,this._x=(r+h)/x,this._y=(u+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=e._x,u=e._y,h=e._z,p=e._w;return this._x=n*p+o*c+s*h-r*u,this._y=s*p+o*u+r*c-n*h,this._z=r*p+o*h+n*u-s*c,this._w=o*p-n*c-s*u-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=this.dot(t);c<0&&(n=-n,s=-s,r=-r,o=-o,c=-c);let u=1-e;if(c<.9995){let h=Math.acos(c),p=Math.sin(h);u=Math.sin(u*h)/p,e=Math.sin(e*h)/p,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},tt=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,c=t.z,u=t.w,h=2*(o*s-c*n),p=2*(c*e-r*s),M=2*(r*n-o*e);return this.x=e+u*h+o*M-c*p,this.y=n+u*p+c*h-r*M,this.z=s+u*M+r*p-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,c=e.y,u=e.z;return this.x=s*u-r*c,this.y=r*o-n*u,this.z=n*c-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new tt,Fu=new xi,he=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,c,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,u,h)}set(t,e,n,s,r,o,c,u,h){let p=this.elements;return p[0]=t,p[1]=s,p[2]=c,p[3]=e,p[4]=r,p[5]=u,p[6]=n,p[7]=o,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],p=n[4],M=n[7],d=n[2],x=n[5],S=n[8],P=s[0],y=s[3],m=s[6],D=s[1],F=s[4],E=s[7],I=s[2],R=s[5],B=s[8];return r[0]=o*P+c*D+u*I,r[3]=o*y+c*F+u*R,r[6]=o*m+c*E+u*B,r[1]=h*P+p*D+M*I,r[4]=h*y+p*F+M*R,r[7]=h*m+p*E+M*B,r[2]=d*P+x*D+S*I,r[5]=d*y+x*F+S*R,r[8]=d*m+x*E+S*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],p=t[8];return e*o*p-e*c*h-n*r*p+n*c*u+s*r*h-s*o*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],p=t[8],M=p*o-c*h,d=c*u-p*r,x=h*r-o*u,S=e*M+n*d+s*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/S;return t[0]=M*P,t[1]=(s*h-p*n)*P,t[2]=(c*n-s*o)*P,t[3]=d*P,t[4]=(p*e-s*u)*P,t[5]=(s*r-c*e)*P,t[6]=x*P,t[7]=(n*u-h*e)*P,t[8]=(o*e-n*r)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,c){let u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*o+h*c)+o+t,-s*h,s*u,-s*(-h*o+u*c)+c+e,0,0,1),this}scale(t,e){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(t,e)),this}rotate(t){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-t)),this}translate(t,e){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zc=new he,Ou=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fp(){let i={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Oe&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Oe&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[aa]:{primaries:t,whitePoint:n,transfer:oa,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:Oe,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),i}var be=fp();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ks,qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ks===void 0&&(Ks=la("canvas")),Ks.width=t.width,Ks.height=t.height;let s=Ks.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ks}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=la("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pp=0,pr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ba(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(kc(s[o].image)):r.push(kc(s[o]))}else r=kc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function kc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}var mp=0,Vc=new tt,Dn=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=pn,o=cs,c=Zn,u=Un,h=i.DEFAULT_ANISOTROPY,p=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ba(),this.name="",this.source=new pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Go:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Go:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=wh;Dn.DEFAULT_ANISOTROPY=1;var Ye=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,u=t.elements,h=u[0],p=u[4],M=u[8],d=u[1],x=u[5],S=u[9],P=u[2],y=u[6],m=u[10];if(Math.abs(p-d)<.01&&Math.abs(M-P)<.01&&Math.abs(S-y)<.01){if(Math.abs(p+d)<.1&&Math.abs(M+P)<.1&&Math.abs(S+y)<.1&&Math.abs(h+x+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(h+1)/2,E=(x+1)/2,I=(m+1)/2,R=(p+d)/4,B=(M+P)/4,b=(S+y)/4;return F>E&&F>I?F<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(F),s=R/n,r=B/n):E>I?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=R/s,r=b/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=B/r,s=b/r),this.set(n,s,r,e),this}let D=Math.sqrt((y-S)*(y-S)+(M-P)*(M-P)+(d-p)*(d-p));return Math.abs(D)<.001&&(D=1),this.x=(y-S)/D,this.y=(M-P)/D,this.z=(d-p)/D,this.w=Math.acos((h+x+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this.w=Ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this.w=Ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Dn(s),o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new pr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Yo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ca=class extends Dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends Dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ge=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,c,u,h,p,M,d,x,S,P,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,u,h,p,M,d,x,S,P,y)}set(t,e,n,s,r,o,c,u,h,p,M,d,x,S,P,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=c,m[13]=u,m[2]=h,m[6]=p,m[10]=M,m[14]=d,m[3]=x,m[7]=S,m[11]=P,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$s.setFromMatrixColumn(t,0).length(),r=1/$s.setFromMatrixColumn(t,1).length(),o=1/$s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s),p=Math.cos(r),M=Math.sin(r);if(t.order==="XYZ"){let d=o*p,x=o*M,S=c*p,P=c*M;e[0]=u*p,e[4]=-u*M,e[8]=h,e[1]=x+S*h,e[5]=d-P*h,e[9]=-c*u,e[2]=P-d*h,e[6]=S+x*h,e[10]=o*u}else if(t.order==="YXZ"){let d=u*p,x=u*M,S=h*p,P=h*M;e[0]=d+P*c,e[4]=S*c-x,e[8]=o*h,e[1]=o*M,e[5]=o*p,e[9]=-c,e[2]=x*c-S,e[6]=P+d*c,e[10]=o*u}else if(t.order==="ZXY"){let d=u*p,x=u*M,S=h*p,P=h*M;e[0]=d-P*c,e[4]=-o*M,e[8]=S+x*c,e[1]=x+S*c,e[5]=o*p,e[9]=P-d*c,e[2]=-o*h,e[6]=c,e[10]=o*u}else if(t.order==="ZYX"){let d=o*p,x=o*M,S=c*p,P=c*M;e[0]=u*p,e[4]=S*h-x,e[8]=d*h+P,e[1]=u*M,e[5]=P*h+d,e[9]=x*h-S,e[2]=-h,e[6]=c*u,e[10]=o*u}else if(t.order==="YZX"){let d=o*u,x=o*h,S=c*u,P=c*h;e[0]=u*p,e[4]=P-d*M,e[8]=S*M+x,e[1]=M,e[5]=o*p,e[9]=-c*p,e[2]=-h*p,e[6]=x*M+S,e[10]=d-P*M}else if(t.order==="XZY"){let d=o*u,x=o*h,S=c*u,P=c*h;e[0]=u*p,e[4]=-M,e[8]=h*p,e[1]=d*M+P,e[5]=o*p,e[9]=x*M-S,e[2]=S*M-x,e[6]=c*p,e[10]=P*M+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gp,t,_p)}lookAt(t,e,n){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Ji.crossVectors(n,On),Ji.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Ji.crossVectors(n,On)),Ji.normalize(),fo.crossVectors(On,Ji),s[0]=Ji.x,s[4]=fo.x,s[8]=On.x,s[1]=Ji.y,s[5]=fo.y,s[9]=On.y,s[2]=Ji.z,s[6]=fo.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],p=n[1],M=n[5],d=n[9],x=n[13],S=n[2],P=n[6],y=n[10],m=n[14],D=n[3],F=n[7],E=n[11],I=n[15],R=s[0],B=s[4],b=s[8],U=s[12],H=s[1],W=s[5],q=s[9],it=s[13],X=s[2],j=s[6],ot=s[10],st=s[14],mt=s[3],et=s[7],rt=s[11],pt=s[15];return r[0]=o*R+c*H+u*X+h*mt,r[4]=o*B+c*W+u*j+h*et,r[8]=o*b+c*q+u*ot+h*rt,r[12]=o*U+c*it+u*st+h*pt,r[1]=p*R+M*H+d*X+x*mt,r[5]=p*B+M*W+d*j+x*et,r[9]=p*b+M*q+d*ot+x*rt,r[13]=p*U+M*it+d*st+x*pt,r[2]=S*R+P*H+y*X+m*mt,r[6]=S*B+P*W+y*j+m*et,r[10]=S*b+P*q+y*ot+m*rt,r[14]=S*U+P*it+y*st+m*pt,r[3]=D*R+F*H+E*X+I*mt,r[7]=D*B+F*W+E*j+I*et,r[11]=D*b+F*q+E*ot+I*rt,r[15]=D*U+F*it+E*st+I*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],c=t[5],u=t[9],h=t[13],p=t[2],M=t[6],d=t[10],x=t[14],S=t[3],P=t[7],y=t[11],m=t[15],D=u*x-h*d,F=c*x-h*M,E=c*d-u*M,I=o*x-h*p,R=o*d-u*p,B=o*M-c*p;return e*(P*D-y*F+m*E)-n*(S*D-y*I+m*R)+s*(S*F-P*I+m*B)-r*(S*E-P*R+y*B)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],c=t[9],u=t[2],h=t[6],p=t[10];return e*(o*p-c*h)-n*(r*p-c*u)+s*(r*h-o*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],p=t[8],M=t[9],d=t[10],x=t[11],S=t[12],P=t[13],y=t[14],m=t[15],D=e*c-n*o,F=e*u-s*o,E=e*h-r*o,I=n*u-s*c,R=n*h-r*c,B=s*h-r*u,b=p*P-M*S,U=p*y-d*S,H=p*m-x*S,W=M*y-d*P,q=M*m-x*P,it=d*m-x*y,X=D*it-F*q+E*W+I*H-R*U+B*b;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/X;return t[0]=(c*it-u*q+h*W)*j,t[1]=(s*q-n*it-r*W)*j,t[2]=(P*B-y*R+m*I)*j,t[3]=(d*R-M*B-x*I)*j,t[4]=(u*H-o*it-h*U)*j,t[5]=(e*it-s*H+r*U)*j,t[6]=(y*E-S*B-m*F)*j,t[7]=(p*B-d*E+x*F)*j,t[8]=(o*q-c*H+h*b)*j,t[9]=(n*H-e*q-r*b)*j,t[10]=(S*R-P*E+m*D)*j,t[11]=(M*E-p*R-x*D)*j,t[12]=(c*U-o*W-u*b)*j,t[13]=(e*W-n*U+s*b)*j,t[14]=(P*F-S*I-y*D)*j,t[15]=(p*I-M*F+d*D)*j,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,c=t.y,u=t.z,h=r*o,p=r*c;return this.set(h*o+n,h*c-s*u,h*u+s*c,0,h*c+s*u,p*c+n,p*u-s*o,0,h*u-s*c,p*u+s*o,r*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,c=e._z,u=e._w,h=r+r,p=o+o,M=c+c,d=r*h,x=r*p,S=r*M,P=o*p,y=o*M,m=c*M,D=u*h,F=u*p,E=u*M,I=n.x,R=n.y,B=n.z;return s[0]=(1-(P+m))*I,s[1]=(x+E)*I,s[2]=(S-F)*I,s[3]=0,s[4]=(x-E)*R,s[5]=(1-(d+m))*R,s[6]=(y+D)*R,s[7]=0,s[8]=(S+F)*B,s[9]=(y-D)*B,s[10]=(1-(d+P))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=$s.set(s[0],s[1],s[2]).length(),c=$s.set(s[4],s[5],s[6]).length(),u=$s.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qn.copy(this);let h=1/o,p=1/c,M=1/u;return Qn.elements[0]*=h,Qn.elements[1]*=h,Qn.elements[2]*=h,Qn.elements[4]*=p,Qn.elements[5]*=p,Qn.elements[6]*=p,Qn.elements[8]*=M,Qn.elements[9]*=M,Qn.elements[10]*=M,e.setFromRotationMatrix(Qn),n.x=o,n.y=c,n.z=u,this}makePerspective(t,e,n,s,r,o,c=ii,u=!1){let h=this.elements,p=2*r/(e-t),M=2*r/(n-s),d=(e+t)/(e-t),x=(n+s)/(n-s),S,P;if(u)S=r/(o-r),P=o*r/(o-r);else if(c===ii)S=-(o+r)/(o-r),P=-2*o*r/(o-r);else if(c===dr)S=-o/(o-r),P=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=M,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,c=ii,u=!1){let h=this.elements,p=2/(e-t),M=2/(n-s),d=-(e+t)/(e-t),x=-(n+s)/(n-s),S,P;if(u)S=1/(o-r),P=o/(o-r);else if(c===ii)S=-2/(o-r),P=-(o+r)/(o-r);else if(c===dr)S=-1/(o-r),P=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=M,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=S,h[14]=P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$s=new tt,Qn=new Ge,gp=new tt(0,0,0),_p=new tt(1,1,1),Ji=new tt,fo=new tt,On=new tt,zu=new Ge,ku=new xi,ts=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],c=s[8],u=s[1],h=s[5],p=s[9],M=s[2],d=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-M,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-M,x),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Ae(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(d,x),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-M,r)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-p,x),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ku.setFromEuler(this),this.setFromQuaternion(ku,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ts.DEFAULT_ORDER="XYZ";var ha=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xp=0,Vu=new tt,js=new xi,Pi=new Ge,po=new tt,Qr=new tt,vp=new tt,yp=new xi,Gu=new tt(1,0,0),Hu=new tt(0,1,0),Wu=new tt(0,0,1),Xu={type:"added"},Mp={type:"removed"},Qs={type:"childadded",child:null},Gc={type:"childremoved",child:null},Mn=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new tt,e=new ts,n=new xi,s=new tt(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new he}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(Gu,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Wu,t)}translateOnAxis(t,e){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gu,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?po.copy(t):po.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Qr,po,this.up):Pi.lookAt(po,Qr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Pi),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mp),Gc.child=t,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let u=c.shapes;if(Array.isArray(u))for(let h=0,p=u.length;h<p;h++){let M=u[h];r(t.shapes,M)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(r(t.materials,this.material[u]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let u=this.animations[c];s.animations.push(r(t.animations,u))}}if(e){let c=o(t.geometries),u=o(t.materials),h=o(t.textures),p=o(t.images),M=o(t.shapes),d=o(t.skeletons),x=o(t.animations),S=o(t.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),M.length>0&&(n.shapes=M),d.length>0&&(n.skeletons=d),x.length>0&&(n.animations=x),S.length>0&&(n.nodes=S)}return n.object=s,n;function o(c){let u=[];for(let h in c){let p=c[h];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new tt(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cs=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sp={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,c=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let P of t.hand.values()){let y=e.getJointPose(P,n),m=this._getHandJoint(h,P);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let p=h.joints["index-finger-tip"],M=h.joints["thumb-tip"],d=p.position.distanceTo(M.position),x=.02,S=.005;h.inputState.pinching&&d>x+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=x-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return c!==null&&(c.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Cs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Hc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=dp(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hc(o,r,t+1/3),this.g=Hc(o,r,t),this.b=Hc(o,r,t-1/3)}return be.colorSpaceToWorking(this,s),this}setStyle(t,e=Cn){function n(r){r!==void 0&&parseFloat(r)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){let n=Vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return be.workingToColorSpace(vn.copy(this),t),Math.round(Ae(vn.r*255,0,255))*65536+Math.round(Ae(vn.g*255,0,255))*256+Math.round(Ae(vn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(vn.copy(this),e);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),c=Math.min(n,s,r),u,h,p=(c+o)/2;if(c===o)u=0,h=0;else{let M=o-c;switch(h=p<=.5?M/(o+c):M/(2-o-c),o){case n:u=(s-r)/M+(s<r?6:0);break;case s:u=(r-n)/M+2;break;case r:u=(n-s)/M+4;break}u/=6}return t.h=u,t.s=h,t.l=p,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=Cn){be.workingToColorSpace(vn.copy(this),t);let e=vn.r,n=vn.g,s=vn.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(mo);let n=Oc(Zi.h,mo.h,e),s=Oc(Zi.s,mo.s,e),r=Oc(Zi.l,mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new pe;pe.NAMES=Vd;var ua=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},da=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ti=new tt,Ii=new tt,Wc=new tt,Li=new tt,tr=new tt,er=new tt,qu=new tt,Xc=new tt,qc=new tt,Yc=new tt,Jc=new Ye,Zc=new Ye,Kc=new Ye,Qi=class i{constructor(t=new tt,e=new tt,n=new tt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ti.subVectors(t,e),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ti.subVectors(s,e),Ii.subVectors(n,e),Wc.subVectors(t,e);let o=ti.dot(ti),c=ti.dot(Ii),u=ti.dot(Wc),h=Ii.dot(Ii),p=Ii.dot(Wc),M=o*h-c*c;if(M===0)return r.set(0,0,0),null;let d=1/M,x=(h*u-c*p)*d,S=(o*p-c*u)*d;return r.set(1-x-S,S,x)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,s,r,o,c,u){return this.getBarycoord(t,e,n,s,Li)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Li.x),u.addScaledVector(o,Li.y),u.addScaledVector(c,Li.z),u)}static getInterpolatedAttribute(t,e,n,s,r,o){return Jc.setScalar(0),Zc.setScalar(0),Kc.setScalar(0),Jc.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,n),Kc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Jc,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector(Kc,r.z),o}static isFrontFacing(t,e,n,s){return ti.subVectors(n,e),Ii.subVectors(t,e),ti.cross(Ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ti.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,c;tr.subVectors(s,n),er.subVectors(r,n),Xc.subVectors(t,n);let u=tr.dot(Xc),h=er.dot(Xc);if(u<=0&&h<=0)return e.copy(n);qc.subVectors(t,s);let p=tr.dot(qc),M=er.dot(qc);if(p>=0&&M<=p)return e.copy(s);let d=u*M-p*h;if(d<=0&&u>=0&&p<=0)return o=u/(u-p),e.copy(n).addScaledVector(tr,o);Yc.subVectors(t,r);let x=tr.dot(Yc),S=er.dot(Yc);if(S>=0&&x<=S)return e.copy(r);let P=x*h-u*S;if(P<=0&&h>=0&&S<=0)return c=h/(h-S),e.copy(n).addScaledVector(er,c);let y=p*S-x*M;if(y<=0&&M-p>=0&&x-S>=0)return qu.subVectors(r,s),c=(M-p)/(M-p+(x-S)),e.copy(s).addScaledVector(qu,c);let m=1/(y+P+d);return o=P*m,c=d*m,e.copy(n).addScaledVector(tr,o).addScaledVector(er,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vi=class{constructor(t=new tt(1/0,1/0,1/0),e=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)t.isMesh===!0?t.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ta),_o.subVectors(this.max,ta),nr.subVectors(t.a,ta),ir.subVectors(t.b,ta),sr.subVectors(t.c,ta),Ki.subVectors(ir,nr),$i.subVectors(sr,ir),Ts.subVectors(nr,sr);let e=[0,-Ki.z,Ki.y,0,-$i.z,$i.y,0,-Ts.z,Ts.y,Ki.z,0,-Ki.x,$i.z,0,-$i.x,Ts.z,0,-Ts.x,-Ki.y,Ki.x,0,-$i.y,$i.x,0,-Ts.y,Ts.x,0];return!$c(e,nr,ir,sr,_o)||(e=[1,0,0,0,1,0,0,0,1],!$c(e,nr,ir,sr,_o))?!1:(xo.crossVectors(Ki,$i),e=[xo.x,xo.y,xo.z],$c(e,nr,ir,sr,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],ei=new tt,go=new vi,nr=new tt,ir=new tt,sr=new tt,Ki=new tt,$i=new tt,Ts=new tt,ta=new tt,_o=new tt,xo=new tt,ws=new tt;function $c(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);let c=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),u=t.dot(ws),h=e.dot(ws),p=n.dot(ws);if(Math.max(-Math.max(u,h,p),Math.min(u,h,p))>c)return!1}return!0}var an=new tt,vo=new Ee,bp=0,zn=class extends _i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fd,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array),s=Ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array),s=Ln(s,this.array),r=Ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var fa=class extends zn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pa=class extends zn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ln=class extends zn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tp=new vi,ea=new tt,jc=new tt,es=class{constructor(t=new tt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ea.subVectors(t,this.center);let e=ea.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ea,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ea.copy(t.center).add(jc)),this.expandByPoint(ea.copy(t.center).sub(jc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wp=0,Yn=new Ge,Qc=new Mn,rr=new tt,Bn=new vi,na=new vi,dn=new tt,kn=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hp(t)?pa:fa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let c=e[r];na.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(Bn.min,na.min),Bn.expandByPoint(dn),dn.addVectors(Bn.max,na.max),Bn.expandByPoint(dn)):(Bn.expandByPoint(na.min),Bn.expandByPoint(na.max))}Bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){let c=e[r],u=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)dn.fromBufferAttribute(c,h),u&&(rr.fromBufferAttribute(t,h),dn.add(rr)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new zn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let c=[],u=[];for(let b=0;b<n.count;b++)c[b]=new tt,u[b]=new tt;let h=new tt,p=new tt,M=new tt,d=new Ee,x=new Ee,S=new Ee,P=new tt,y=new tt;function m(b,U,H){h.fromBufferAttribute(n,b),p.fromBufferAttribute(n,U),M.fromBufferAttribute(n,H),d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,U),S.fromBufferAttribute(r,H),p.sub(h),M.sub(h),x.sub(d),S.sub(d);let W=1/(x.x*S.y-S.x*x.y);isFinite(W)&&(P.copy(p).multiplyScalar(S.y).addScaledVector(M,-x.y).multiplyScalar(W),y.copy(M).multiplyScalar(x.x).addScaledVector(p,-S.x).multiplyScalar(W),c[b].add(P),c[U].add(P),c[H].add(P),u[b].add(y),u[U].add(y),u[H].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let b=0,U=D.length;b<U;++b){let H=D[b],W=H.start,q=H.count;for(let it=W,X=W+q;it<X;it+=3)m(t.getX(it+0),t.getX(it+1),t.getX(it+2))}let F=new tt,E=new tt,I=new tt,R=new tt;function B(b){I.fromBufferAttribute(s,b),R.copy(I);let U=c[b];F.copy(U),F.sub(I.multiplyScalar(I.dot(U))).normalize(),E.crossVectors(R,U);let W=E.dot(u[b])<0?-1:1;o.setXYZW(b,F.x,F.y,F.z,W)}for(let b=0,U=D.length;b<U;++b){let H=D[b],W=H.start,q=H.count;for(let it=W,X=W+q;it<X;it+=3)B(t.getX(it+0)),B(t.getX(it+1)),B(t.getX(it+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,x=n.count;d<x;d++)n.setXYZ(d,0,0,0);let s=new tt,r=new tt,o=new tt,c=new tt,u=new tt,h=new tt,p=new tt,M=new tt;if(t)for(let d=0,x=t.count;d<x;d+=3){let S=t.getX(d+0),P=t.getX(d+1),y=t.getX(d+2);s.fromBufferAttribute(e,S),r.fromBufferAttribute(e,P),o.fromBufferAttribute(e,y),p.subVectors(o,r),M.subVectors(s,r),p.cross(M),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,y),c.add(p),u.add(p),h.add(p),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(P,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let d=0,x=e.count;d<x;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),p.subVectors(o,r),M.subVectors(s,r),p.cross(M),n.setXYZ(d+0,p.x,p.y,p.z),n.setXYZ(d+1,p.x,p.y,p.z),n.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(c,u){let h=c.array,p=c.itemSize,M=c.normalized,d=new h.constructor(u.length*p),x=0,S=0;for(let P=0,y=u.length;P<y;P++){c.isInterleavedBufferAttribute?x=u[P]*c.data.stride+c.offset:x=u[P]*p;for(let m=0;m<p;m++)d[S++]=h[x++]}return new zn(d,p,M)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let u=s[c],h=t(u,n);e.setAttribute(c,h)}let r=this.morphAttributes;for(let c in r){let u=[],h=r[c];for(let p=0,M=h.length;p<M;p++){let d=h[p],x=t(d,n);u.push(x)}e.morphAttributes[c]=u}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let h=n[u];t.data.attributes[u]=h.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],p=[];for(let M=0,d=h.length;M<d;M++){let x=h[M];p.push(x.toJSON(t.data))}p.length>0&&(s[u]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let p=s[h];this.setAttribute(h,p.clone(e))}let r=t.morphAttributes;for(let h in r){let p=[],M=r[h];for(let d=0,x=M.length;d<x;d++)p.push(M[d].clone(e));this.morphAttributes[h]=p}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,p=o.length;h<p;h++){let M=o[h];this.addGroup(M.start,M.count,M.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var th=new tt,Ap=new tt,Ep=new he,ni=class{constructor(t=new tt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=th.subVectors(n,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(th),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ep.getNormalMatrix(t),s=this.coplanarPoint(th).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cp=0,ns=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=yr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let u=r[c];delete u.metadata,o.push(u)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ni=new tt,eh=new tt,yo=new tt,Mo=new tt,Zo=class{constructor(t=new tt,e=new tt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eh.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),Mo.copy(this.origin).sub(eh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(yo),c=Mo.dot(this.direction),u=-Mo.dot(yo),h=Mo.lengthSq(),p=Math.abs(1-o*o),M,d,x,S;if(p>0)if(M=o*u-c,d=o*c-u,S=r*p,M>=0)if(d>=-S)if(d<=S){let P=1/p;M*=P,d*=P,x=M*(M+o*d+2*c)+d*(o*M+d+2*u)+h}else d=r,M=Math.max(0,-(o*d+c)),x=-M*M+d*(d+2*u)+h;else d=-r,M=Math.max(0,-(o*d+c)),x=-M*M+d*(d+2*u)+h;else d<=-S?(M=Math.max(0,-(-o*r+c)),d=M>0?-r:Math.min(Math.max(-r,-u),r),x=-M*M+d*(d+2*u)+h):d<=S?(M=0,d=Math.min(Math.max(-r,-u),r),x=d*(d+2*u)+h):(M=Math.max(0,-(o*r+c)),d=M>0?r:Math.min(Math.max(-r,-u),r),x=-M*M+d*(d+2*u)+h);else d=o>0?-r:r,M=Math.max(0,-(o*d+c)),x=-M*M+d*(d+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,M),s&&s.copy(eh).addScaledVector(yo,d),x}intersectSphere(t,e){if(t.radius<0)return null;Ni.subVectors(t.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,c,u,h=1/this.direction.x,p=1/this.direction.y,M=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),p>=0?(r=(t.min.y-d.y)*p,o=(t.max.y-d.y)*p):(r=(t.max.y-d.y)*p,o=(t.min.y-d.y)*p),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),M>=0?(c=(t.min.z-d.z)*M,u=(t.max.z-d.z)*M):(c=(t.max.z-d.z)*M,u=(t.min.z-d.z)*M),n>u||c>s)||((c>n||n!==n)&&(n=c),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,c=this.direction,u=c.x,h=c.y,p=c.z,M=t.x-o.x,d=t.y-o.y,x=t.z-o.z,S=e.x-o.x,P=e.y-o.y,y=e.z-o.z,m=n.x-o.x,D=n.y-o.y,F=n.z-o.z,E=Math.abs(u),I=Math.abs(h),R=Math.abs(p),B,b,U,H,W,q,it,X,j,ot,st,mt;if(E>=I&&E>=R?(U=u,q=M,j=S,mt=m,u>=0?(B=h,b=p,H=d,W=x,it=P,X=y,ot=D,st=F):(B=p,b=h,H=x,W=d,it=y,X=P,ot=F,st=D)):I>=R?(U=h,q=d,j=P,mt=D,h>=0?(B=p,b=u,H=x,W=M,it=y,X=S,ot=F,st=m):(B=u,b=p,H=M,W=x,it=S,X=y,ot=m,st=F)):(U=p,q=x,j=y,mt=F,p>=0?(B=u,b=h,H=M,W=d,it=S,X=P,ot=m,st=D):(B=h,b=u,H=d,W=M,it=P,X=S,ot=D,st=m)),U===0)return null;let et=B/U,rt=b/U,pt=1/U,Vt=H-et*q,jt=W-rt*q,De=it-et*j,de=X-rt*j,Te=ot-et*mt,lt=st-rt*mt,_t=Te*de-lt*De,Yt=Vt*lt-jt*Te,le=De*jt-de*Vt;if(s){if(_t<0||Yt<0||le<0)return null}else if((_t<0||Yt<0||le<0)&&(_t>0||Yt>0||le>0))return null;let zt=_t+Yt+le;if(zt===0)return null;let me=pt*(_t*q+Yt*j+le*mt);return(zt>0?me<0:me>0)?null:this.at(me/zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ma=class extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yu=new Ge,As=new Zo,So=new es,Ju=new tt,bo=new tt,To=new tt,wo=new tt,nh=new tt,Ao=new tt,Zu=new tt,Eo=new tt,Sn=class extends Mn{constructor(t=new kn,e=new ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){Ao.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let p=c[u],M=r[u];p!==0&&(nh.fromBufferAttribute(M,t),o?Ao.addScaledVector(nh,p):Ao.addScaledVector(nh.sub(e),p))}e.add(Ao)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),As.copy(t.ray).recast(t.near),!(So.containsPoint(As.origin)===!1&&(As.intersectSphere(So,Ju)===null||As.origin.distanceToSquared(Ju)>(t.far-t.near)**2))&&(Yu.copy(r).invert(),As.copy(t.ray).applyMatrix4(Yu),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,c=r.index,u=r.attributes.position,h=r.attributes.uv,p=r.attributes.uv1,M=r.attributes.normal,d=r.groups,x=r.drawRange;if(c!==null)if(Array.isArray(o))for(let S=0,P=d.length;S<P;S++){let y=d[S],m=o[y.materialIndex],D=Math.max(y.start,x.start),F=Math.min(c.count,Math.min(y.start+y.count,x.start+x.count));for(let E=D,I=F;E<I;E+=3){let R=c.getX(E),B=c.getX(E+1),b=c.getX(E+2);s=Co(this,m,t,n,h,p,M,R,B,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let S=Math.max(0,x.start),P=Math.min(c.count,x.start+x.count);for(let y=S,m=P;y<m;y+=3){let D=c.getX(y),F=c.getX(y+1),E=c.getX(y+2);s=Co(this,o,t,n,h,p,M,D,F,E),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let S=0,P=d.length;S<P;S++){let y=d[S],m=o[y.materialIndex],D=Math.max(y.start,x.start),F=Math.min(u.count,Math.min(y.start+y.count,x.start+x.count));for(let E=D,I=F;E<I;E+=3){let R=E,B=E+1,b=E+2;s=Co(this,m,t,n,h,p,M,R,B,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let S=Math.max(0,x.start),P=Math.min(u.count,x.start+x.count);for(let y=S,m=P;y<m;y+=3){let D=y,F=y+1,E=y+2;s=Co(this,o,t,n,h,p,M,D,F,E),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function Rp(i,t,e,n,s,r,o,c){let u;if(t.side===mn?u=n.intersectTriangle(o,r,s,!0,c):u=n.intersectTriangle(s,r,o,t.side===os,c),u===null)return null;Eo.copy(c),Eo.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Eo);return h<e.near||h>e.far?null:{distance:h,point:Eo.clone(),object:i}}function Co(i,t,e,n,s,r,o,c,u,h){i.getVertexPosition(c,bo),i.getVertexPosition(u,To),i.getVertexPosition(h,wo);let p=Rp(i,t,e,n,bo,To,wo,Zu);if(p){let M=new tt;Qi.getBarycoord(Zu,bo,To,wo,M),s&&(p.uv=Qi.getInterpolatedAttribute(s,c,u,h,M,new Ee)),r&&(p.uv1=Qi.getInterpolatedAttribute(r,c,u,h,M,new Ee)),o&&(p.normal=Qi.getInterpolatedAttribute(o,c,u,h,M,new tt),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let d={a:c,b:u,c:h,normal:new tt,materialIndex:0};Qi.getNormal(bo,To,wo,d.normal),p.face=d,p.barycoord=M}return p}var Ps=class extends Dn{constructor(t=null,e=1,n=1,s,r,o,c,u,h=en,p=en,M,d){super(null,o,c,u,h,p,s,r,M,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ga=class extends zn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ar=new Ge,Ku=new Ge,Ro=[],$u=new vi,Pp=new Ge,ia=new Sn,sa=new es,_a=class extends Sn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ar),$u.copy(t.boundingBox).applyMatrix4(ar),this.boundingBox.union($u)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ar),sa.copy(t.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(sa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let c=0;c<n.length;c++)n[c]=s[o+c]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),t.ray.intersectsSphere(sa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),Ku.multiplyMatrices(n,ar),ia.matrixWorld=Ku,ia.raycast(t,Ro);for(let o=0,c=Ro.length;o<c;o++){let u=Ro[o];u.instanceId=r,u.object=this,e.push(u)}Ro.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ps(new Float32Array(s*this.count),s,this.count,br,Jn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let c=this.geometry.morphTargetsRelative?1:1-o,u=s*t;return r[u]=c,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Es=new es,Ip=new Ee(.5,.5),Po=new tt,gr=class{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){let s=this.planes,r=t.elements,o=r[0],c=r[1],u=r[2],h=r[3],p=r[4],M=r[5],d=r[6],x=r[7],S=r[8],P=r[9],y=r[10],m=r[11],D=r[12],F=r[13],E=r[14],I=r[15];if(s[0].setComponents(h-o,x-p,m-S,I-D).normalize(),s[1].setComponents(h+o,x+p,m+S,I+D).normalize(),s[2].setComponents(h+c,x+M,m+P,I+F).normalize(),s[3].setComponents(h-c,x-M,m-P,I-F).normalize(),n)s[4].setComponents(u,d,y,E).normalize(),s[5].setComponents(h-u,x-d,m-y,I-E).normalize();else if(s[4].setComponents(h-u,x-d,m-y,I-E).normalize(),e===ii)s[5].setComponents(h+u,x+d,m+y,I+E).normalize();else if(e===dr)s[5].setComponents(u,d,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);let e=Ip.distanceTo(t.center);return Es.radius=.7071067811865476+e,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xa=class extends Dn{constructor(t=[],e=ls,n,s,r,o,c,u,h,p){super(t,e,n,s,r,o,c,u,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var is=class extends Dn{constructor(t,e,n=ri,s,r,o,c=en,u=en,h,p=gi,M=1){if(p!==gi&&p!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:M};super(d,s,r,o,c,u,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ko=class extends is{constructor(t,e=ri,n=ls,s,r,o=en,c=en,u,h=gi){let p={width:t,height:t,depth:1},M=[p,p,p,p,p,p];super(t,t,e,n,s,r,o,c,u,h),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},va=class extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_r=class i extends kn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let u=[],h=[],p=[],M=[],d=0,x=0;S("z","y","x",-1,-1,n,e,t,o,r,0),S("z","y","x",1,-1,n,e,-t,o,r,1),S("x","z","y",1,1,t,n,e,s,o,2),S("x","z","y",1,-1,t,n,-e,s,o,3),S("x","y","z",1,-1,t,e,n,s,r,4),S("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new ln(h,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(M,2));function S(P,y,m,D,F,E,I,R,B,b,U){let H=E/B,W=I/b,q=E/2,it=I/2,X=R/2,j=B+1,ot=b+1,st=0,mt=0,et=new tt;for(let rt=0;rt<ot;rt++){let pt=rt*W-it;for(let Vt=0;Vt<j;Vt++){let jt=Vt*H-q;et[P]=jt*D,et[y]=pt*F,et[m]=X,h.push(et.x,et.y,et.z),et[P]=0,et[y]=0,et[m]=R>0?1:-1,p.push(et.x,et.y,et.z),M.push(Vt/B),M.push(1-rt/b),st+=1}}for(let rt=0;rt<b;rt++)for(let pt=0;pt<B;pt++){let Vt=d+pt+j*rt,jt=d+pt+j*(rt+1),De=d+(pt+1)+j*(rt+1),de=d+(pt+1)+j*rt;u.push(Vt,jt,de),u.push(jt,De,de),mt+=6}c.addGroup(x,mt,U),x+=mt,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ya=class i extends kn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,c=Math.floor(n),u=Math.floor(s),h=c+1,p=u+1,M=t/c,d=e/u,x=[],S=[],P=[],y=[];for(let m=0;m<p;m++){let D=m*d-o;for(let F=0;F<h;F++){let E=F*M-r;S.push(E,-D,0),P.push(0,0,1),y.push(F/c),y.push(1-m/u)}}for(let m=0;m<u;m++)for(let D=0;D<c;D++){let F=D+h*m,E=D+h*(m+1),I=D+1+h*(m+1),R=D+1+h*m;x.push(F,E,R),x.push(E,I,R)}this.setIndex(x),this.setAttribute("position",new ln(S,3)),this.setAttribute("normal",new ln(P,3)),this.setAttribute("uv",new ln(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ma=class i extends kn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let u=Math.min(o+c,Math.PI),h=0,p=[],M=new tt,d=new tt,x=[],S=[],P=[],y=[];for(let m=0;m<=n;m++){let D=[],F=m/n,E=o+F*c,I=t*Math.cos(E),R=Math.sqrt(t*t-I*I),B=0;m===0&&o===0?B=.5/e:m===n&&u===Math.PI&&(B=-.5/e);for(let b=0;b<=e;b++){let U=b/e,H=s+U*r;M.x=-R*Math.cos(H),M.y=I,M.z=R*Math.sin(H),S.push(M.x,M.y,M.z),d.copy(M).normalize(),P.push(d.x,d.y,d.z),y.push(U+B,1-F),D.push(h++)}p.push(D)}for(let m=0;m<n;m++)for(let D=0;D<e;D++){let F=p[m][D+1],E=p[m][D],I=p[m+1][D],R=p[m+1][D+1];(m!==0||o>0)&&x.push(F,E,R),(m!==n-1||u<Math.PI)&&x.push(E,I,R)}this.setIndex(x),this.setAttribute("position",new ln(S,3)),this.setAttribute("normal",new ln(P,3)),this.setAttribute("uv",new ln(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ju(s))s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ju(s[0])){let r=[];for(let o=0,c=s.length;o<c;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function bn(i){let t={};for(let e=0;e<i.length;e++){let n=Ds(i[e]);for(let s in n)t[s]=n[s]}return t}function ju(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var Gd={clone:Ds,merge:bn},Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new he().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$o=class extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Sa=class extends ns{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var jo=class extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qo=class extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function or(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ih(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ss=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let c=e[1];t<c&&(n=2,r=c);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let c=n+o>>>1;t<e[c]?o=c:n=c+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tl=class extends ss{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,c=s[r],u=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case oh:r=t,c=2*e-n;break;case lh:r=s.length-2,c=e+s[r]-s[r+1];break;default:r=t,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case oh:o=t,u=2*n-e;break;case lh:o=1,u=n+s[1]-s[0];break;default:o=t-1,u=e}let h=(n-e)*.5,p=this.valueSize;this._weightPrev=h/(e-c),this._weightNext=h/(u-n),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,p=this._offsetPrev,M=this._offsetNext,d=this._weightPrev,x=this._weightNext,S=(n-e)/(s-e),P=S*S,y=P*S,m=-d*y+2*d*P-d*S,D=(1+d)*y+(-1.5-2*d)*P+(-.5+d)*S+1,F=(-1-x)*y+(1.5+x)*P+.5*S,E=x*y-x*P;for(let I=0;I!==c;++I)r[I]=m*o[p+I]+D*o[h+I]+F*o[u+I]+E*o[M+I];return r}},el=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,p=(n-e)/(s-e),M=1-p;for(let d=0;d!==c;++d)r[d]=o[h+d]*M+o[u+d]*p;return r}},nl=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},il=class extends ss{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,p=this.inTangents,M=this.outTangents;if(!p||!M){let S=(n-e)/(s-e),P=1-S;for(let y=0;y!==c;++y)r[y]=o[h+y]*P+o[u+y]*S;return r}let d=c*2,x=t-1;for(let S=0;S!==c;++S){let P=o[h+S],y=o[u+S],m=x*d+S*2,D=M[m],F=M[m+1],E=t*d+S*2,I=p[E],R=p[E+1],B=Fp(n,e,D,I,s);r[S]=Hd(B,P,F,R,y)}return r}};function Hd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Up(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Fp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let c=Hd(r,t,e,n,s)-i;if(Math.abs(c)<1e-10)break;let u=Up(r,t,e,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-c/u))}return r}var Vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ih(t.settings)&&(n.settings={inTangents:or(t.settings.inTangents,Array),outTangents:or(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new il(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case Wo:e=this.InterpolantFactoryMethodLinear;break;case Do:e=this.InterpolantFactoryMethodSmooth;break;case rh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ih(this.settings)&&(Qu(this.settings.inTangents,t),Qu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(oe("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let c=0;c!==r;c++){let u=n[c];if(typeof u=="number"&&isNaN(u)){oe("KeyframeTrack: Time is not a valid number.",this,c,u),t=!1;break}if(o!==null&&o>u){oe("KeyframeTrack: Out of order keys.",this,c,u,o),t=!1;break}o=u}if(s!==void 0&&up(s))for(let c=0,u=s.length;c!==u;++c){let h=s[c];if(isNaN(h)){oe("KeyframeTrack: Value is not a valid number.",this,c,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Do,r=t.length-1,o=1;for(let c=1;c<r;++c){let u=!1,h=t[c],p=t[c+1];if(h!==p&&(c!==1||h!==t[0]))if(s)u=!0;else{let M=c*n,d=M-n,x=M+n;for(let S=0;S!==n;++S){let P=e[M+S];if(P!==e[d+S]||P!==e[x+S]){u=!0;break}}}if(u){if(c!==o){t[o]=t[c];let M=c*n,d=o*n;for(let x=0;x!==n;++x)e[d+x]=e[M+x]}++o}}if(r>0){t[o]=t[r];for(let c=r*n,u=o*n,h=0;h!==n;++h)e[u+h]=e[c+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ih(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Wo;var rs=class extends Vn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=ra;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};sl.prototype.ValueTypeName="color";var rl=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};rl.prototype.ValueTypeName="number";var al=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-e)/(s-e),h=t*c;for(let p=h+c;h!==p;h+=4)xi.slerpFlat(r,0,o,h-c,o,h,u);return r}},ba=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Vn{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ra;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}};ol.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,n){let s=this,r=!1,o=0,c=0,u,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(p){c++,r===!1&&s.onStart!==void 0&&s.onStart(p,o,c),r=!0},this.itemEnd=function(p){o++,s.onProgress!==void 0&&s.onProgress(p,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,M){return h.push(p,M),this},this.removeHandler=function(p){let M=h.indexOf(p);return M!==-1&&h.splice(M,2),this},this.getHandler=function(p){for(let M=0,d=h.length;M<d;M+=2){let x=h[M],S=h[M+1];if(x.global&&(x.lastIndex=0),x.test(p))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wd=new ll,cl=class{constructor(t){this.manager=t!==void 0?t:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ta=class extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},wa=class extends Ta{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},sh=new Ge,td=new tt,ed=new tt,hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;td.setFromMatrixPosition(t.matrixWorld),e.position.copy(td),ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ed),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,c=s?s.w/r.y:1,u=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===dr||t.reversedDepth?e.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,.5,.5,0,0,0,1),e.multiply(sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Io=new tt,Lo=new xi,pi=new tt,Aa=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Io,Lo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Lo,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Io,Lo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Lo,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new tt,nd=new Ee,id=new Ee,yn=class extends Aa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,nd,id),e.subVectors(id,nd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/u,e-=o.offsetY*n/h,s*=o.width/u,n*=o.height/h}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xr=class extends Aa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,c=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,c-=p*this.view.offsetY,u=c-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ch=class extends hl{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends Ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new ch}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var lr=-90,cr=1,ul=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(lr,cr,t,e);s.layers=this.layers,this.add(s);let r=new yn(lr,cr,t,e);r.layers=this.layers,this.add(r);let o=new yn(lr,cr,t,e);o.layers=this.layers,this.add(o);let c=new yn(lr,cr,t,e);c.layers=this.layers,this.add(c);let u=new yn(lr,cr,t,e);u.layers=this.layers,this.add(u);let h=new yn(lr,cr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,c,u]=e;for(let h of e)this.remove(h);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,u,h,p]=this.children,M=t.getRenderTarget(),d=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;let P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=P,t.setRenderTarget(n,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(M,d,x),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},dl=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fh="\\[\\]\\.:\\/",Op=new RegExp("["+Fh+"]","g"),Oh="[^"+Fh+"]",Bp="[^"+Fh.replace("\\.","")+"]",zp=/((?:WC+[\/:])*)/.source.replace("WC",Oh),kp=/(WCOD+)?/.source.replace("WCOD",Bp),Vp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),Gp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),Hp=new RegExp("^"+zp+kp+Vp+Gp+"$"),Wp=["material","materials","bones","map"],hh=class{constructor(t,e,n){let s=n||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Op,"")}static parseTrackName(t){let e=Hp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===e||c.uuid===e)return c;let u=n(c.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===h){h=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;oe("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=hh;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vx=new Float32Array(1);var uh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Bh(i,t,e,n){let s=Xp(n);switch(e){case Ph:return i*t;case br:return i*t/s.components*s.byteLength;case yl:return i*t/s.components*s.byteLength;case us:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case Ih:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case Sl:return i*t*4/s.components*s.byteLength;case La:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:case Al:return Math.max(i,16)*Math.max(t,8)/4;case bl:case wl:return Math.max(i,8)*Math.max(t,8)/2;case El:case Cl:case Pl:case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rl:case Fa:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yl:case Jl:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kl:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oa:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xp(i){switch(i){case Un:case Ah:return{byteLength:1,components:1};case Mr:case Eh:case ai:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case ri:case _l:case Jn:return{byteLength:4,components:1};case Ch:case Rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ff(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yp(i){let t=new WeakMap;function e(c,u){let h=c.array,p=c.usage,M=h.byteLength,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,p),c.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:M}}function n(c,u,h){let p=u.array,M=u.updateRanges;if(i.bindBuffer(h,c),M.length===0)i.bufferSubData(h,0,p);else{M.sort((x,S)=>x.start-S.start);let d=0;for(let x=1;x<M.length;x++){let S=M[d],P=M[x];P.start<=S.start+S.count+1?S.count=Math.max(S.count,P.start+P.count-S.start):(++d,M[d]=P)}M.length=d+1;for(let x=0,S=M.length;x<S;x++){let P=M[x];i.bufferSubData(h,P.start*p.BYTES_PER_ELEMENT,p,P.start,P.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=t.get(c);u&&(i.deleteBuffer(u.buffer),t.delete(c))}function o(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let p=t.get(c);(!p||p.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let h=t.get(c);if(h===void 0)t.set(c,e(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:s,remove:r,update:o}}var Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
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
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_m=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vm=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,km=`#ifdef USE_ENVMAP
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
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,qm=`uniform sampler2D dfgLUT;
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
}`,Ym=`
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s0=`#if defined( USE_POINTS_UV )
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
#endif`,r0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
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
#endif`,u0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z0=`uniform sampler2D t2D;
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
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
}`,eg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define MATCAP
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
}`,fg=`#define MATCAP
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
}`,pg=`#define NORMAL
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
}`,mg=`#define NORMAL
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
}`,gg=`#define PHONG
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
}`,_g=`#define PHONG
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
}`,xg=`#define STANDARD
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
}`,vg=`#define STANDARD
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
}`,yg=`#define TOON
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
}`,Mg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:Jp,alphahash_pars_fragment:Zp,alphamap_fragment:Kp,alphamap_pars_fragment:$p,alphatest_fragment:jp,alphatest_pars_fragment:Qp,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:am,iridescence_fragment:om,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:_m,cube_uv_reflection_fragment:xm,defaultnormal_vertex:vm,displacementmap_pars_vertex:ym,displacementmap_vertex:Mm,emissivemap_fragment:Sm,emissivemap_pars_fragment:bm,colorspace_fragment:Tm,colorspace_pars_fragment:wm,envmap_fragment:Am,envmap_common_pars_fragment:Em,envmap_pars_fragment:Cm,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:km,envmap_vertex:Pm,fog_vertex:Im,fog_pars_vertex:Lm,fog_fragment:Dm,fog_pars_fragment:Nm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Fm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Bm,lights_pars_begin:zm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:Jm,lights_fragment_end:Zm,lightprobes_pars_fragment:Km,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:t0,map_fragment:e0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:s0,metalnessmap_fragment:r0,metalnessmap_pars_fragment:a0,morphinstance_vertex:o0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:h0,morphtarget_vertex:u0,normal_fragment_begin:d0,normal_fragment_maps:f0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:M0,opaque_fragment:S0,packing:b0,premultiplied_alpha_fragment:T0,project_vertex:w0,dithering_fragment:A0,dithering_pars_fragment:E0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:R0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:I0,shadowmap_vertex:L0,shadowmask_pars_fragment:D0,skinbase_vertex:N0,skinning_pars_vertex:U0,skinning_vertex:F0,skinnormal_vertex:O0,specularmap_fragment:B0,specularmap_pars_fragment:z0,tonemapping_fragment:k0,tonemapping_pars_fragment:V0,transmission_fragment:G0,transmission_pars_fragment:H0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:q0,worldpos_vertex:Y0,background_vert:J0,background_frag:Z0,backgroundCube_vert:K0,backgroundCube_frag:$0,cube_vert:j0,cube_frag:Q0,depth_vert:tg,depth_frag:eg,distance_vert:ng,distance_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:ag,linedashed_frag:og,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:hg,meshlambert_frag:ug,meshmatcap_vert:dg,meshmatcap_frag:fg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:_g,meshphysical_vert:xg,meshphysical_frag:vg,meshtoon_vert:yg,meshtoon_frag:Mg,points_vert:Sg,points_frag:bg,shadow_vert:Tg,shadow_frag:wg,sprite_vert:Ag,sprite_frag:Eg},Ft={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new tt},probesMax:{value:new tt},probesResolution:{value:new tt}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},bi={basic:{uniforms:bn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:bn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:bn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:bn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:bn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:bn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:bn([Ft.points,Ft.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:bn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:bn([Ft.common,Ft.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:bn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:bn([Ft.sprite,Ft.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:bn([Ft.common,Ft.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:bn([Ft.lights,Ft.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};bi.physical={uniforms:bn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var nc={r:0,b:0,g:0},Cg=new Ge,pf=new he;pf.set(-1,0,0,0,1,0,0,0,1);function Rg(i,t,e,n,s,r){let o=new pe(0),c=s===!0?0:1,u,h,p=null,M=0,d=null;function x(D){let F=D.isScene===!0?D.background:null;if(F&&F.isTexture){let E=D.backgroundBlurriness>0;F=t.get(F,E)}return F}function S(D){let F=!1,E=x(D);E===null?y(o,c):E&&E.isColor&&(y(E,1),F=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(D,F){let E=x(F);E&&(E.isCubeTexture||E.mapping===Pa)?(h===void 0&&(h=new Sn(new _r(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Ds(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(F.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(pf),h.material.toneMapped=be.getTransfer(E.colorSpace)!==Oe,(p!==E||M!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,p=E,M=E.version,d=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Sn(new ya(2,2),new Rn({name:"BackgroundMaterial",uniforms:Ds(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,u.material.toneMapped=be.getTransfer(E.colorSpace)!==Oe,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||M!==E.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,p=E,M=E.version,d=i.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null))}function y(D,F){D.getRGB(nc,Uh(i)),e.buffers.color.setClear(nc.r,nc.g,nc.b,F,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(D,F=1){o.set(D),c=F,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(D){c=D,y(o,c)},render:S,addToRenderList:P,dispose:m}}function Pg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function c(W,q,it,X,j){let ot=!1,st=M(W,X,it,q);r!==st&&(r=st,h(r.object)),ot=x(W,X,it,j),ot&&S(W,X,it,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,E(W,q,it,X),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function u(){return i.createVertexArray()}function h(W){return i.bindVertexArray(W)}function p(W){return i.deleteVertexArray(W)}function M(W,q,it,X){let j=X.wireframe===!0,ot=n[q.id];ot===void 0&&(ot={},n[q.id]=ot);let st=W.isInstancedMesh===!0?W.id:0,mt=ot[st];mt===void 0&&(mt={},ot[st]=mt);let et=mt[it.id];et===void 0&&(et={},mt[it.id]=et);let rt=et[j];return rt===void 0&&(rt=d(u()),et[j]=rt),rt}function d(W){let q=[],it=[],X=[];for(let j=0;j<e;j++)q[j]=0,it[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:it,attributeDivisors:X,object:W,attributes:{},index:null}}function x(W,q,it,X){let j=r.attributes,ot=q.attributes,st=0,mt=it.getAttributes();for(let et in mt)if(mt[et].location>=0){let pt=j[et],Vt=ot[et];if(Vt===void 0&&(et==="instanceMatrix"&&W.instanceMatrix&&(Vt=W.instanceMatrix),et==="instanceColor"&&W.instanceColor&&(Vt=W.instanceColor)),pt===void 0||pt.attribute!==Vt||Vt&&pt.data!==Vt.data)return!0;st++}return r.attributesNum!==st||r.index!==X}function S(W,q,it,X){let j={},ot=q.attributes,st=0,mt=it.getAttributes();for(let et in mt)if(mt[et].location>=0){let pt=ot[et];pt===void 0&&(et==="instanceMatrix"&&W.instanceMatrix&&(pt=W.instanceMatrix),et==="instanceColor"&&W.instanceColor&&(pt=W.instanceColor));let Vt={};Vt.attribute=pt,pt&&pt.data&&(Vt.data=pt.data),j[et]=Vt,st++}r.attributes=j,r.attributesNum=st,r.index=X}function P(){let W=r.newAttributes;for(let q=0,it=W.length;q<it;q++)W[q]=0}function y(W){m(W,0)}function m(W,q){let it=r.newAttributes,X=r.enabledAttributes,j=r.attributeDivisors;it[W]=1,X[W]===0&&(i.enableVertexAttribArray(W),X[W]=1),j[W]!==q&&(i.vertexAttribDivisor(W,q),j[W]=q)}function D(){let W=r.newAttributes,q=r.enabledAttributes;for(let it=0,X=q.length;it<X;it++)q[it]!==W[it]&&(i.disableVertexAttribArray(it),q[it]=0)}function F(W,q,it,X,j,ot,st){st===!0?i.vertexAttribIPointer(W,q,it,j,ot):i.vertexAttribPointer(W,q,it,X,j,ot)}function E(W,q,it,X){P();let j=X.attributes,ot=it.getAttributes(),st=q.defaultAttributeValues;for(let mt in ot){let et=ot[mt];if(et.location>=0){let rt=j[mt];if(rt===void 0&&(mt==="instanceMatrix"&&W.instanceMatrix&&(rt=W.instanceMatrix),mt==="instanceColor"&&W.instanceColor&&(rt=W.instanceColor)),rt!==void 0){let pt=rt.normalized,Vt=rt.itemSize,jt=t.get(rt);if(jt===void 0)continue;let De=jt.buffer,de=jt.type,Te=jt.bytesPerElement,lt=de===i.INT||de===i.UNSIGNED_INT||rt.gpuType===_l;if(rt.isInterleavedBufferAttribute){let _t=rt.data,Yt=_t.stride,le=rt.offset;if(_t.isInstancedInterleavedBuffer){for(let zt=0;zt<et.locationSize;zt++)m(et.location+zt,_t.meshPerAttribute);W.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let zt=0;zt<et.locationSize;zt++)y(et.location+zt);i.bindBuffer(i.ARRAY_BUFFER,De);for(let zt=0;zt<et.locationSize;zt++)F(et.location+zt,Vt/et.locationSize,de,pt,Yt*Te,(le+Vt/et.locationSize*zt)*Te,lt)}else{if(rt.isInstancedBufferAttribute){for(let _t=0;_t<et.locationSize;_t++)m(et.location+_t,rt.meshPerAttribute);W.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let _t=0;_t<et.locationSize;_t++)y(et.location+_t);i.bindBuffer(i.ARRAY_BUFFER,De);for(let _t=0;_t<et.locationSize;_t++)F(et.location+_t,Vt/et.locationSize,de,pt,Vt*Te,Vt/et.locationSize*_t*Te,lt)}}else if(st!==void 0){let pt=st[mt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(et.location,pt);break;case 3:i.vertexAttrib3fv(et.location,pt);break;case 4:i.vertexAttrib4fv(et.location,pt);break;default:i.vertexAttrib1fv(et.location,pt)}}}}D()}function I(){U();for(let W in n){let q=n[W];for(let it in q){let X=q[it];for(let j in X){let ot=X[j];for(let st in ot)p(ot[st].object),delete ot[st];delete X[j]}}delete n[W]}}function R(W){if(n[W.id]===void 0)return;let q=n[W.id];for(let it in q){let X=q[it];for(let j in X){let ot=X[j];for(let st in ot)p(ot[st].object),delete ot[st];delete X[j]}}delete n[W.id]}function B(W){for(let q in n){let it=n[q];for(let X in it){let j=it[X];if(j[W.id]===void 0)continue;let ot=j[W.id];for(let st in ot)p(ot[st].object),delete ot[st];delete j[W.id]}}}function b(W){for(let q in n){let it=n[q],X=W.isInstancedMesh===!0?W.id:0,j=it[X];if(j!==void 0){for(let ot in j){let st=j[ot];for(let mt in st)p(st[mt].object),delete st[mt];delete j[ot]}delete it[X],Object.keys(it).length===0&&delete n[q]}}}function U(){H(),o=!0,r!==s&&(r=s,h(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:U,resetDefaultState:H,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:B,initAttributes:P,enableAttribute:y,disableUnusedAttributes:D}}function Ig(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,p){p!==0&&(i.drawArraysInstanced(n,u,h,p),e.update(h,n,p))}function c(u,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,p);let d=0;for(let x=0;x<p;x++)d+=h[x];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c}function Lg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let B=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(B){return!(B!==Zn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(B){let b=B===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Un&&B!==Jn&&!b&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",p=u(h);p!==h&&(re("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);let M=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:M,reversedDepthBuffer:d,maxTextures:x,maxVertexTextures:S,maxTextureSize:P,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:E,maxSamples:I,samples:R}}function Dg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ni,c=new he,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(M,d){let x=M.length!==0||d||n!==0||s;return s=d,n=M.length,x},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(M,d){e=p(M,d,0)},this.setState=function(M,d,x){let S=M.clippingPlanes,P=M.clipIntersection,y=M.clipShadows,m=i.get(M);if(!s||S===null||S.length===0||r&&!y)r?p(null):h();else{let D=r?0:n,F=D*4,E=m.clippingState||null;u.value=E,E=p(S,d,F,x);for(let I=0;I!==F;++I)E[I]=e[I];m.clippingState=E,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=D}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(M,d,x,S){let P=M!==null?M.length:0,y=null;if(P!==0){if(y=u.value,S!==!0||y===null){let m=x+P*4,D=d.matrixWorldInverse;c.getNormalMatrix(D),(y===null||y.length<m)&&(y=new Float32Array(m));for(let F=0,E=x;F!==P;++F,E+=4)o.copy(M[F]).applyMatrix4(D,c),o.normal.toArray(y,E),y[E+3]=o.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,y}}var wr=4,Ng=6,Ug=20,Fg=256,za=new xr,Xd=new pe,zh=null,kh=0,Vh=0,Gh=!1,Og=new tt,Ns=new tt,sc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:c=Og}=r;zh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,c),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,kh,Vh),this._renderer.xr.enabled=Gh,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ai,format:Zn,colorSpace:aa,depthBuffer:!1},s=qd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Bg(r)),this._blurMaterial=kg(r,t,e),this._ggxMaterial=zg(r,t,e)}return s}_compileMaterial(t){let e=new Sn(new kn,t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,s,r){let u=new yn(90,1,e,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],M=this._renderer,d=M.autoClear,x=M.toneMapping;M.getClearColor(Xd),M.toneMapping=si,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(s),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new _r,new ma({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,y=P.material,m=!1,D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,m=!0):(y.color.copy(Xd),m=!0);for(let F=0;F<6;F++){let E=F%3;E===0?(u.up.set(0,h[F],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+p[F],r.y,r.z)):E===1?(u.up.set(0,0,h[F]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+p[F],r.z)):(u.up.set(0,h[F],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+p[F]));let I=this._cubeSize;Tr(s,E*I,F>2?I:0,I,I),M.setRenderTarget(s),m&&M.render(P,u),M.render(t,u)}M.toneMapping=x,M.autoClear=d,t.background=D}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ls||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let c=r.uniforms;c.envMap.value=t;let u=this._cubeSize;Tr(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(o,za)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;let u=o.uniforms,h=n/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),M=Math.sqrt(h*h-p*p),d=h*1.25,x=M*d,{_lodMax:S}=this,P=this._sizeLods[n],y=3*P*(n>S-wr?n-S+wr:0),m=4*(this._cubeSize-P);u.envMap.value=t.texture,u.roughness.value=x,u.mipInt.value=S-e,Tr(r,y,m,3*P,2*P),s.setRenderTarget(r),s.render(c,za),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=S-n,Tr(t,y,m,3*P,2*P),s.setRenderTarget(t),s.render(c,za)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,c=this._blurMaterial,u=this._lodMeshes[s];u.material=c;let h=c.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let p=this._sizeLods[s],M=3*p*(s>this._lodMax-wr?s-this._lodMax+wr:0),d=4*(this._cubeSize-p);Tr(e,M,d,3*p,2*p),o.setRenderTarget(e),o.render(u,za)}};function Bg(i){let t=[],e=[],n=i,s=i-wr+1+Ng;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let c=1/(o-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],M=6,d=6,x=3,S=new Float32Array(x*d*M),P=new Float32Array(x*d*M);for(let m=0;m<M;m++){let D=m%3*2/3-1,F=m>2?0:-1,E=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];S.set(E,x*d*m);for(let I=0;I<d;I++){let R=p[I*2]*2-1,B=p[I*2+1]*2-1;m===0?Ns.set(1,B,R):m===1?Ns.set(-R,1,-B):m===2?Ns.set(-R,B,1):m===3?Ns.set(-1,B,-R):m===4?Ns.set(-R,-1,B):Ns.set(R,B,-1),Ns.toArray(P,(m*d+I)*x)}}let y=new kn;y.setAttribute("position",new zn(S,x)),y.setAttribute("outputDirection",new zn(P,x)),e.push(new Sn(y,null)),n>wr&&n--}return{lodMeshes:e,sizeLods:t}}function qd(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zg(i,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function kg(i,t,e){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ug,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Yd(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Jd(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

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
	`}var rc=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _r(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Mi});r.uniforms.tEquirect.value=e;let o=new Sn(s,r),c=e.minFilter;return e.minFilter===cs&&(e.minFilter=pn),new ul(1,10,this).update(t,o),e.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Vg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,x=!1){return d==null?null:x?o(d):r(d)}function r(d){if(d&&d.isTexture){let x=d.mapping;if(x===pl||x===ml)if(t.has(d)){let S=t.get(d).texture;return c(S,d.mapping)}else{let S=d.image;if(S&&S.height>0){let P=new rc(S.height);return P.fromEquirectangularTexture(i,d),t.set(d,P),d.addEventListener("dispose",h),c(P.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let x=d.mapping,S=x===pl||x===ml,P=x===ls||x===Ls;if(S||P){let y=e.get(d),m=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new sc(i)),y=S?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{let D=d.image;return S&&D&&D.height>0||P&&D&&u(D)?(n===null&&(n=new sc(i)),y=S?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",p),y.texture):null}}}return d}function c(d,x){return x===pl?d.mapping=ls:x===ml&&(d.mapping=Ls),d}function u(d){let x=0,S=6;for(let P=0;P<S;P++)d[P]!==void 0&&x++;return x===S}function h(d){let x=d.target;x.removeEventListener("dispose",h);let S=t.get(x);S!==void 0&&(t.delete(x),S.dispose())}function p(d){let x=d.target;x.removeEventListener("dispose",p);let S=e.get(x);S!==void 0&&(e.delete(x),S.dispose())}function M(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:M}}function Gg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Rs("WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,t,e,n){let s={},r=new WeakMap;function o(M){let d=M.target;d.index!==null&&t.remove(d.index);for(let S in d.attributes)t.remove(d.attributes[S]);d.removeEventListener("dispose",o),delete s[d.id];let x=r.get(d);x&&(t.remove(x),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function c(M,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function u(M){let d=M.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER)}function h(M){let d=[],x=M.index,S=M.attributes.position,P=0;if(S===void 0)return;if(x!==null){let D=x.array;P=x.version;for(let F=0,E=D.length;F<E;F+=3){let I=D[F+0],R=D[F+1],B=D[F+2];d.push(I,R,R,B,B,I)}}else{let D=S.array;P=S.version;for(let F=0,E=D.length/3-1;F<E;F+=3){let I=F+0,R=F+1,B=F+2;d.push(I,R,R,B,B,I)}}let y=new(S.count>=65535?pa:fa)(d,1);y.version=P;let m=r.get(M);m&&t.remove(m),r.set(M,y)}function p(M){let d=r.get(M);if(d){let x=M.index;x!==null&&d.version<x.version&&h(M)}else h(M);return r.get(M)}return{get:c,update:u,getWireframeAttribute:p}}function Wg(i,t,e){let n;function s(M){n=M}let r,o;function c(M){r=M.type,o=M.bytesPerElement}function u(M,d){i.drawElements(n,d,r,M*o),e.update(d,n,1)}function h(M,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,M*o,x),e.update(d,n,x))}function p(M,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,M,0,x);let P=0;for(let y=0;y<x;y++)P+=d[y];e.update(P,n,1)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function Xg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=c*(r/3);break;case i.LINES:e.lines+=c*(r/2);break;case i.LINE_STRIP:e.lines+=c*(r-1);break;case i.LINE_LOOP:e.lines+=c*r;break;case i.POINTS:e.points+=c*r;break;default:oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qg(i,t,e){let n=new WeakMap,s=new Ye;function r(o,c,u){let h=o.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,M=p!==void 0?p.length:0,d=n.get(c);if(d===void 0||d.count!==M){let U=function(){B.dispose(),n.delete(c),c.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let x=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,P=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],D=c.morphAttributes.color||[],F=0;x===!0&&(F=1),S===!0&&(F=2),P===!0&&(F=3);let E=c.attributes.position.count*F,I=1;E>t.maxTextureSize&&(I=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let R=new Float32Array(E*I*4*M),B=new ca(R,E,I,M);B.type=Jn,B.needsUpdate=!0;let b=F*4;for(let H=0;H<M;H++){let W=y[H],q=m[H],it=D[H],X=E*I*4*H;for(let j=0;j<W.count;j++){let ot=j*b;x===!0&&(s.fromBufferAttribute(W,j),R[X+ot+0]=s.x,R[X+ot+1]=s.y,R[X+ot+2]=s.z,R[X+ot+3]=0),S===!0&&(s.fromBufferAttribute(q,j),R[X+ot+4]=s.x,R[X+ot+5]=s.y,R[X+ot+6]=s.z,R[X+ot+7]=0),P===!0&&(s.fromBufferAttribute(it,j),R[X+ot+8]=s.x,R[X+ot+9]=s.y,R[X+ot+10]=s.z,R[X+ot+11]=it.itemSize===4?s.w:1)}}d={count:M,texture:B,size:new Ee(E,I)},n.set(c,d),c.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let P=0;P<h.length;P++)x+=h[P];let S=c.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Yg(i,t,e,n,s){let r=new WeakMap;function o(h){let p=s.render.frame,M=h.geometry,d=t.get(h,M);if(r.get(d)!==p&&(t.update(d),r.set(d,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==p&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,p))),h.isSkinnedMesh){let x=h.skeleton;r.get(x)!==p&&(x.update(),r.set(x,p))}return d}function c(){r=new WeakMap}function u(h){let p=h.target;p.removeEventListener("dispose",u),n.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:o,dispose:c}}var Jg={[vh]:"LINEAR_TONE_MAPPING",[yh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[Ra]:"ACES_FILMIC_TONE_MAPPING",[bh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function Zg(i,t,e,n,s,r){let o=new Nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,u=null,h=new kn;h.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ln([0,2,0,0,2,0],2));let p=new $o({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),M=new Sn(h,p),d=new xr(-1,1,1,-1,0,1),x=null,S=null,P=!1,y,m=null,D=[],F=!1;this.setSize=function(E,I){o.setSize(E,I),c!==null&&c.setSize(E,I),u!==null&&u.setSize(E,I);for(let R=0;R<D.length;R++){let B=D[R];B.setSize&&B.setSize(E,I)}},this.setEffects=function(E){D=E,F=D.length>0&&D[0].isRenderPass===!0;let I=o.width,R=o.height;D.length>0&&c===null&&(c=new Nn(I,R,{type:ai,depthBuffer:!1,stencilBuffer:!1}),u=new Nn(I,R,{type:ai,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<D.length;B++){let b=D[B];b.setSize&&b.setSize(I,R)}},this.begin=function(E,I){if(P||E.toneMapping===si&&D.length===0)return!1;if(m=I,I!==null){let R=I.width,B=I.height;(o.width!==R||o.height!==B)&&this.setSize(R,B)}return F===!1&&E.setRenderTarget(o),y=E.toneMapping,E.toneMapping=si,!0},this.hasRenderPass=function(){return F},this.end=function(E,I){E.toneMapping=y,P=!0;let R=o,B=c;for(let b=0;b<D.length;b++){let U=D[b];U.enabled!==!1&&(U.render(E,B,R,I),U.needsSwap!==!1&&(R=B,B=B===c?u:c))}if(x!==E.outputColorSpace||S!==E.toneMapping){x=E.outputColorSpace,S=E.toneMapping,p.defines={},be.getTransfer(x)===Oe&&(p.defines.SRGB_TRANSFER="");let b=Jg[S];b&&(p.defines[b]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=R.texture,E.setRenderTarget(m),E.render(M,d),m=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),u!==null&&u.dispose(),h.dispose(),p.dispose()}}var mf=new Dn,Xh=new is(1,1),gf=new ca,_f=new Jo,xf=new xa,Zd=[],Kd=[],$d=new Float32Array(16),jd=new Float32Array(9),Qd=new Float32Array(4);function Er(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zd[s];if(r===void 0&&(r=new Float32Array(s),Zd[s]=r),t!==0){n.toArray(r,0);for(let o=1,c=0;o!==t;++o)c+=e,i[o].toArray(r,c)}return r}function cn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function hn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lc(i,t){let e=Kd[t];e===void 0&&(e=new Int32Array(t),Kd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2fv(this.addr,t),hn(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;i.uniform3fv(this.addr,t),hn(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4fv(this.addr,t),hn(e,t)}}function t_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;Qd.set(n),i.uniformMatrix2fv(this.addr,!1,Qd),hn(e,n)}}function e_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;jd.set(n),i.uniformMatrix3fv(this.addr,!1,jd),hn(e,n)}}function n_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;$d.set(n),i.uniformMatrix4fv(this.addr,!1,$d),hn(e,n)}}function i_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2iv(this.addr,t),hn(e,t)}}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3iv(this.addr,t),hn(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4iv(this.addr,t),hn(e,t)}}function o_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2uiv(this.addr,t),hn(e,t)}}function c_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3uiv(this.addr,t),hn(e,t)}}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4uiv(this.addr,t),hn(e,t)}}function u_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xh.compareFunction=e.isReversedDepthBuffer()?ec:tc,r=Xh):r=mf,e.setTexture2D(t||r,s)}function d_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_f,s)}function f_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xf,s)}function p_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gf,s)}function m_(i){switch(i){case 5126:return Kg;case 35664:return $g;case 35665:return jg;case 35666:return Qg;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}function g_(i,t){i.uniform1fv(this.addr,t)}function __(i,t){let e=Er(t,this.size,2);i.uniform2fv(this.addr,e)}function x_(i,t){let e=Er(t,this.size,3);i.uniform3fv(this.addr,e)}function v_(i,t){let e=Er(t,this.size,4);i.uniform4fv(this.addr,e)}function y_(i,t){let e=Er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function M_(i,t){let e=Er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function S_(i,t){let e=Er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function b_(i,t){i.uniform1iv(this.addr,t)}function T_(i,t){i.uniform2iv(this.addr,t)}function w_(i,t){i.uniform3iv(this.addr,t)}function A_(i,t){i.uniform4iv(this.addr,t)}function E_(i,t){i.uniform1uiv(this.addr,t)}function C_(i,t){i.uniform2uiv(this.addr,t)}function R_(i,t){i.uniform3uiv(this.addr,t)}function P_(i,t){i.uniform4uiv(this.addr,t)}function I_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Xh:o=mf;for(let c=0;c!==s;++c)e.setTexture2D(t[c]||o,r[c])}function L_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_f,r[o])}function D_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xf,r[o])}function N_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gf,r[o])}function U_(i){switch(i){case 5126:return g_;case 35664:return __;case 35665:return x_;case 35666:return v_;case 35674:return y_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return b_;case 35667:case 35671:return T_;case 35668:case 35672:return w_;case 35669:case 35673:return A_;case 5125:return E_;case 36294:return C_;case 36295:return R_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}var qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=m_(e.type)}},Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U_(e.type)}},Jh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(t,e[c.id],n)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function tf(i,t){i.seq.push(t),i.map[t.id]=t}function F_(i,t,e){let n=i.name,s=n.length;for(Hh.lastIndex=0;;){let r=Hh.exec(n),o=Hh.lastIndex,c=r[1],u=r[2]==="]",h=r[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===s){tf(e,h===void 0?new qh(c,i,t):new Yh(c,i,t));break}else{let M=e.map[c];M===void 0&&(M=new Jh(c),tf(e,M)),e=M}}}var Ar=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let c=t.getActiveUniform(e,o),u=t.getUniformLocation(e,c.name);F_(c,u,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let c=e[r],u=n[c.id];u.needsUpdate!==!1&&c.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ef(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var O_=37297,B_=0;function z_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===t?">":" "} ${c}: ${e[o]}`)}return n.join(`
`)}var nf=new he;function k_(i){be._getMatrix(nf,be.workingColorSpace,i);let t=`mat3( ${nf.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(i)){case oa:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+z_(i.getShaderSource(t),c)}else return r}function V_(i,t){let e=k_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var G_={[vh]:"Linear",[yh]:"Reinhard",[Mh]:"Cineon",[Ra]:"ACESFilmic",[bh]:"AgX",[Th]:"Neutral",[Sh]:"Custom"};function H_(i,t){let e=G_[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new tt;function W_(){be.getLuminanceCoefficients(ic);let i=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function q_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:c}}return e}function Va(i){return i!==""}function rf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function af(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(i){return i.replace(J_,K_)}var Z_=new Map;function K_(i,t){let e=_e[t];if(e===void 0){let n=Z_.get(t);if(n!==void 0)e=_e[n],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zh(e)}var $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(i){return i.replace($_,j_)}function j_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Q_={[Ca]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function tx(i){return Q_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ex={[ls]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE_UV"};function nx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ex[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ix={[Ls]:"ENVMAP_MODE_REFRACTION"};function sx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ix[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rx={[xh]:"ENVMAP_BLENDING_MULTIPLY",[Td]:"ENVMAP_BLENDING_MIX",[wd]:"ENVMAP_BLENDING_ADD"};function ax(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":rx[i.combine]||"ENVMAP_BLENDING_NONE"}function ox(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,c=e.fragmentShader,u=tx(e),h=nx(e),p=sx(e),M=ax(e),d=ox(e),x=X_(e),S=q_(r),P=s.createProgram(),y,m,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Va).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Va).join(`
`),m.length>0&&(m+=`
`)):(y=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),m=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMap?"#define "+M:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?_e.tonemapping_pars_fragment:"",e.toneMapping!==si?H_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,V_("linearToOutputTexel",e.outputColorSpace),W_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Va).join(`
`)),o=Zh(o),o=rf(o,e),o=af(o,e),c=Zh(c),c=rf(c,e),c=af(c,e),o=of(o),c=of(c),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let F=D+y+o,E=D+m+c,I=ef(s,s.VERTEX_SHADER,F),R=ef(s,s.FRAGMENT_SHADER,E);s.attachShader(P,I),s.attachShader(P,R),e.index0AttributeName!==void 0?s.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function B(W){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(P)||"",it=s.getShaderInfoLog(I)||"",X=s.getShaderInfoLog(R)||"",j=q.trim(),ot=it.trim(),st=X.trim(),mt=!0,et=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,I,R);else{let rt=sf(s,I,"vertex"),pt=sf(s,R,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+j+`
`+rt+`
`+pt)}else j!==""?re("WebGLProgram: Program Info Log:",j):(ot===""||st==="")&&(et=!1);et&&(W.diagnostics={runnable:mt,programLog:j,vertexShader:{log:ot,prefix:y},fragmentShader:{log:st,prefix:m}})}s.deleteShader(I),s.deleteShader(R),b=new Ar(s,P),U=Y_(s,P)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(P,O_)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B_++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=I,this.fragmentShader=R,this}var cx=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $h(t),e.set(t,n)),n}},$h=class{constructor(t){this.id=cx++,this.code=t,this.usedTimes=0}};function hx(i){return i===us||i===Fa||i===Oa}function ux(i,t,e,n,s,r){let o=new ha,c=new Kh,u=new Set,h=[],p=new Map,M=n.logarithmicDepthBuffer,d=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return u.add(b),b===0?"uv":`uv${b}`}function P(b,U,H,W,q,it){let X=W.fog,j=q.geometry,ot=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?W.environment:null,st=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,mt=t.get(b.envMap||ot,st),et=mt&&mt.mapping===Pa?mt.image.height:null,rt=x[b.type];b.precision!==null&&(d=n.getMaxPrecision(b.precision),d!==b.precision&&re("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Vt=pt!==void 0?pt.length:0,jt=0;j.morphAttributes.position!==void 0&&(jt=1),j.morphAttributes.normal!==void 0&&(jt=2),j.morphAttributes.color!==void 0&&(jt=3);let De,de,Te,lt;if(rt){let Ue=bi[rt];De=Ue.vertexShader,de=Ue.fragmentShader}else{De=b.vertexShader,de=b.fragmentShader;let Ue=c.getVertexShaderStage(b),Ie=c.getFragmentShaderStage(b);c.update(b,Ue,Ie),Te=Ue.id,lt=Ie.id}let _t=i.getRenderTarget(),Yt=i.state.buffers.depth.getReversed(),le=q.isInstancedMesh===!0,zt=q.isBatchedMesh===!0,me=!!b.map,$e=!!b.matcap,xe=!!mt,Ce=!!b.aoMap,ve=!!b.lightMap,Qt=!!b.bumpMap&&b.wireframe===!1,We=!!b.normalMap,ye=!!b.displacementMap,Be=!!b.emissiveMap,qe=!!b.metalnessMap,je=!!b.roughnessMap,z=b.anisotropy>0,St=b.clearcoat>0,Gt=b.dispersion>0,L=b.retroreflectivity>0,v=b.iridescence>0,J=b.sheen>0,Q=b.transmission>0,ct=z&&!!b.anisotropyMap,Tt=St&&!!b.clearcoatMap,yt=St&&!!b.clearcoatNormalMap,ht=St&&!!b.clearcoatRoughnessMap,ut=v&&!!b.iridescenceMap,wt=v&&!!b.iridescenceThicknessMap,kt=J&&!!b.sheenColorMap,It=J&&!!b.sheenRoughnessMap,Ct=!!b.specularMap,Jt=!!b.specularColorMap,ee=!!b.specularIntensityMap,ce=Q&&!!b.transmissionMap,V=Q&&!!b.thicknessMap,Pt=!!b.gradientMap,dt=!!b.alphaMap,Et=b.alphaTest>0,Lt=!!b.alphaHash,bt=!!b.extensions,Kt=si;b.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Kt=i.toneMapping);let Zt={shaderID:rt,shaderType:b.type,shaderName:b.name,vertexShader:De,fragmentShader:de,defines:b.defines,customVertexShaderID:Te,customFragmentShaderID:lt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:zt,batchingColor:zt&&q._colorsTexture!==null,instancing:le,instancingColor:le&&q.instanceColor!==null,instancingMorph:le&&q.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:me,matcap:$e,envMap:xe,envMapMode:xe&&mt.mapping,envMapCubeUVHeight:et,aoMap:Ce,lightMap:ve,bumpMap:Qt,normalMap:We,displacementMap:ye,emissiveMap:Be,normalMapObjectSpace:We&&b.normalMapType===Cd,normalMapTangentSpace:We&&b.normalMapType===Ql,packedNormalMap:We&&b.normalMapType===Ql&&hx(b.normalMap.format),metalnessMap:qe,roughnessMap:je,anisotropy:z,anisotropyMap:ct,clearcoat:St,clearcoatMap:Tt,clearcoatNormalMap:yt,clearcoatRoughnessMap:ht,dispersion:Gt,retroreflection:L,iridescence:v,iridescenceMap:ut,iridescenceThicknessMap:wt,sheen:J,sheenColorMap:kt,sheenRoughnessMap:It,specularMap:Ct,specularColorMap:Jt,specularIntensityMap:ee,transmission:Q,transmissionMap:ce,thicknessMap:V,gradientMap:Pt,opaque:b.transparent===!1&&b.blending===yr&&b.alphaToCoverage===!1,alphaMap:dt,alphaTest:Et,alphaHash:Lt,combine:b.combine,mapUv:me&&S(b.map.channel),aoMapUv:Ce&&S(b.aoMap.channel),lightMapUv:ve&&S(b.lightMap.channel),bumpMapUv:Qt&&S(b.bumpMap.channel),normalMapUv:We&&S(b.normalMap.channel),displacementMapUv:ye&&S(b.displacementMap.channel),emissiveMapUv:Be&&S(b.emissiveMap.channel),metalnessMapUv:qe&&S(b.metalnessMap.channel),roughnessMapUv:je&&S(b.roughnessMap.channel),anisotropyMapUv:ct&&S(b.anisotropyMap.channel),clearcoatMapUv:Tt&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:yt&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:It&&S(b.sheenRoughnessMap.channel),specularMapUv:Ct&&S(b.specularMap.channel),specularColorMapUv:Jt&&S(b.specularColorMap.channel),specularIntensityMapUv:ee&&S(b.specularIntensityMap.channel),transmissionMapUv:ce&&S(b.transmissionMap.channel),thicknessMapUv:V&&S(b.thicknessMap.channel),alphaMapUv:dt&&S(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(We||z),vertexNormals:!!j.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!j.attributes.uv&&(me||dt),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||j.attributes.normal===void 0&&We===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Yt,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:jt,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:it.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:me&&b.map.isVideoTexture===!0&&be.getTransfer(b.map.colorSpace)===Oe,decodeVideoTextureEmissive:Be&&b.emissiveMap.isVideoTexture===!0&&be.getTransfer(b.emissiveMap.colorSpace)===Oe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yi,flipSided:b.side===mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&b.extensions.multiDraw===!0||zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=u.has(1),Zt.vertexUv2s=u.has(2),Zt.vertexUv3s=u.has(3),u.clear(),Zt}function y(b){let U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(let H in b.defines)U.push(H),U.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(m(U,b),D(U,b),U.push(i.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function m(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numSunLights),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numSunLightShadows),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function D(b,U){o.disableAll(),U.instancing&&o.enable(0),U.instancingColor&&o.enable(1),U.instancingMorph&&o.enable(2),U.matcap&&o.enable(3),U.envMap&&o.enable(4),U.normalMapObjectSpace&&o.enable(5),U.normalMapTangentSpace&&o.enable(6),U.clearcoat&&o.enable(7),U.iridescence&&o.enable(8),U.alphaTest&&o.enable(9),U.vertexColors&&o.enable(10),U.vertexAlphas&&o.enable(11),U.vertexUv1s&&o.enable(12),U.vertexUv2s&&o.enable(13),U.vertexUv3s&&o.enable(14),U.vertexTangents&&o.enable(15),U.anisotropy&&o.enable(16),U.alphaHash&&o.enable(17),U.batching&&o.enable(18),U.dispersion&&o.enable(19),U.retroreflection&&o.enable(24),U.batchingColor&&o.enable(20),U.gradientMap&&o.enable(21),U.packedNormalMap&&o.enable(22),U.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),U.fog&&o.enable(0),U.useFog&&o.enable(1),U.flatShading&&o.enable(2),U.logarithmicDepthBuffer&&o.enable(3),U.reversedDepthBuffer&&o.enable(4),U.skinning&&o.enable(5),U.morphTargets&&o.enable(6),U.morphNormals&&o.enable(7),U.morphColors&&o.enable(8),U.premultipliedAlpha&&o.enable(9),U.shadowMapEnabled&&o.enable(10),U.doubleSided&&o.enable(11),U.flipSided&&o.enable(12),U.useDepthPacking&&o.enable(13),U.dithering&&o.enable(14),U.transmission&&o.enable(15),U.sheen&&o.enable(16),U.opaque&&o.enable(17),U.pointsUvs&&o.enable(18),U.decodeVideoTexture&&o.enable(19),U.decodeVideoTextureEmissive&&o.enable(20),U.alphaToCoverage&&o.enable(21),U.numLightProbeGrids>0&&o.enable(22),U.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function F(b){let U=x[b.type],H;if(U){let W=bi[U];H=Gd.clone(W.uniforms)}else H=b.uniforms;return H}function E(b,U){let H=p.get(U);return H!==void 0?++H.usedTimes:(H=new lx(i,U,b,s),h.push(H),p.set(U,H)),H}function I(b){if(--b.usedTimes===0){let U=h.indexOf(b);h[U]=h[h.length-1],h.pop(),p.delete(b.cacheKey),b.destroy()}}function R(b){c.remove(b)}function B(){c.dispose()}return{getParameters:P,getProgramCacheKey:y,getUniforms:F,acquireProgram:E,releaseProgram:I,releaseShaderCache:R,programs:h,dispose:B}}function dx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,u){i.get(o)[c]=u}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function cf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let x=0;return d.isInstancedMesh&&(x+=2),d.isSkinnedMesh&&(x+=1),x}function c(d,x,S,P,y,m){let D=i[t];return D===void 0?(D={id:d.id,object:d,geometry:x,material:S,materialVariant:o(d),groupOrder:P,renderOrder:d.renderOrder,z:y,group:m},i[t]=D):(D.id=d.id,D.object=d,D.geometry=x,D.material=S,D.materialVariant=o(d),D.groupOrder=P,D.renderOrder=d.renderOrder,D.z=y,D.group=m),t++,D}function u(d,x,S,P,y,m,D){D.reversedDepth===!0&&(y=-y);let F=c(d,x,S,P,y,m);S.transmission>0?n.push(F):S.transparent===!0?s.push(F):e.push(F)}function h(d,x,S,P,y,m){let D=c(d,x,S,P,y,m);S.transmission>0?n.unshift(D):S.transparent===!0?s.unshift(D):e.unshift(D)}function p(d,x){e.length>1&&e.sort(d||fx),n.length>1&&n.sort(x||cf),s.length>1&&s.sort(x||cf)}function M(){for(let d=t,x=i.length;d<x;d++){let S=i[d];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:u,unshift:h,finish:M,sort:p}}function px(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new hf,i.set(n,[o])):s>=r.length?(o=new hf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function mx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new tt,color:new pe};break;case"SpotLight":e={position:new tt,direction:new tt,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new tt,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new tt,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return i[t.id]=e,e}}}function gx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _x=0;function xx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vx(i){let t=new mx,e=gx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new tt);let s=new tt,r=new Ge,o=new Ge;function c(h){let p=0,M=0,d=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let x=0,S=0,P=0,y=0,m=0,D=0,F=0,E=0,I=0,R=0,B=0,b=0,U=0,H=0;h.sort(xx);for(let q=0,it=h.length;q<it;q++){let X=h[q],j=X.color,ot=X.intensity,st=X.distance,mt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===us?mt=X.shadow.map.texture:mt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)p+=j.r*ot,M+=j.g*ot,d+=j.b*ot;else if(X.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(X.sh.coefficients[et],ot);H++}else if(X.isSunLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let rt=X.shadow,pt=e.get(X);pt.shadowIntensity=rt.intensity,pt.shadowBias=rt.bias,pt.shadowNormalBias=rt.normalBias,pt.shadowRadius=rt.radius,pt.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[S]=pt,n.sunShadowMap[S]=mt;let Vt=rt.getViewportCount();for(let jt=0;jt<Vt;jt++)n.sunShadowMatrix[P+jt]=rt.getMatrix(jt),n.sunShadowCascade[P+jt]=rt._cascadeData[jt];P+=Vt,S++}n.sun[x]=et,x++}else if(X.isDirectionalLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let rt=X.shadow,pt=e.get(X);pt.shadowIntensity=rt.intensity,pt.shadowBias=rt.bias,pt.shadowNormalBias=rt.normalBias,pt.shadowRadius=rt.radius,pt.shadowMapSize=rt.mapSize,n.directionalShadow[y]=pt,n.directionalShadowMap[y]=mt,n.directionalShadowMatrix[y]=X.shadow.matrix,I++}n.directional[y]=et,y++}else if(X.isSpotLight){let et=t.get(X);et.position.setFromMatrixPosition(X.matrixWorld),et.color.copy(j).multiplyScalar(ot),et.distance=st,et.coneCos=Math.cos(X.angle),et.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),et.decay=X.decay,n.spot[D]=et;let rt=X.shadow;if(X.map&&(n.spotLightMap[b]=X.map,b++,rt.updateMatrices(X),X.castShadow&&U++),n.spotLightMatrix[D]=rt.matrix,X.castShadow){let pt=e.get(X);pt.shadowIntensity=rt.intensity,pt.shadowBias=rt.bias,pt.shadowNormalBias=rt.normalBias,pt.shadowRadius=rt.radius,pt.shadowMapSize=rt.mapSize,n.spotShadow[D]=pt,n.spotShadowMap[D]=mt,B++}D++}else if(X.isRectAreaLight){let et=t.get(X);et.color.copy(j).multiplyScalar(ot),et.halfWidth.set(X.width*.5,0,0),et.halfHeight.set(0,X.height*.5,0),n.rectArea[F]=et,F++}else if(X.isPointLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),et.distance=X.distance,et.decay=X.decay,X.castShadow){let rt=X.shadow,pt=e.get(X);pt.shadowIntensity=rt.intensity,pt.shadowBias=rt.bias,pt.shadowNormalBias=rt.normalBias,pt.shadowRadius=rt.radius,pt.shadowMapSize=rt.mapSize,pt.shadowCameraNear=rt.camera.near,pt.shadowCameraFar=rt.camera.far,n.pointShadow[m]=pt,n.pointShadowMap[m]=mt,n.pointShadowMatrix[m]=X.shadow.matrix,R++}n.point[m]=et,m++}else if(X.isHemisphereLight){let et=t.get(X);et.skyColor.copy(X.color).multiplyScalar(ot),et.groundColor.copy(X.groundColor).multiplyScalar(ot),n.hemi[E]=et,E++}}F>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=M,n.ambient[2]=d;let W=n.hash;(W.sunLength!==x||W.directionalLength!==y||W.pointLength!==m||W.spotLength!==D||W.rectAreaLength!==F||W.hemiLength!==E||W.numSunShadows!==S||W.numDirectionalShadows!==I||W.numPointShadows!==R||W.numSpotShadows!==B||W.numSpotMaps!==b||W.numLightProbes!==H)&&(n.sun.length=x,n.directional.length=y,n.spot.length=D,n.rectArea.length=F,n.point.length=m,n.hemi.length=E,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=B,n.spotShadowMap.length=B,n.spotLightMatrix.length=B+b-U,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=H,W.sunLength=x,W.directionalLength=y,W.pointLength=m,W.spotLength=D,W.rectAreaLength=F,W.hemiLength=E,W.numSunShadows=S,W.numDirectionalShadows=I,W.numPointShadows=R,W.numSpotShadows=B,W.numSpotMaps=b,W.numLightProbes=H,n.version=_x++)}function u(h,p){let M=0,d=0,x=0,S=0,P=0,y=0,m=p.matrixWorldInverse;for(let D=0,F=h.length;D<F;D++){let E=h[D];if(E.isSunLight){let I=n.sun[M];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(m),M++}else if(E.isDirectionalLight){let I=n.directional[d];I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),d++}else if(E.isSpotLight){let I=n.spot[S];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),S++}else if(E.isRectAreaLight){let I=n.rectArea[P];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),P++}else if(E.isPointLight){let I=n.point[x];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),x++}else if(E.isHemisphereLight){let I=n.hemi[y];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(m),y++}}}return{setup:c,setupView:u,state:n}}function uf(i){let t=new vx(i),e=[],n=[],s=[];function r(d){M.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function c(d){n.push(d)}function u(d){s.push(d)}function h(){t.setup(e)}function p(d){t.setupView(e,d)}let M={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:M,setupLights:h,setupLightsView:p,pushLight:o,pushShadow:c,pushLightProbeGrid:u}}function yx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),c;return o===void 0?(c=new uf(i),t.set(s,[c])):r>=o.length?(c=new uf(i),o.push(c)):c=o[r],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
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
}`,bx=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],Tx=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],df=new Ge,ka=new tt,Wh=new tt;function wx(i,t,e){let n=new gr,s=new Ee,r=new Ee,o=new Ye,c=new jo,u=new Qo,h={},p=e.maxTextureSize,M={[os]:mn,[mn]:os,[yi]:yi},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Mx,fragmentShader:Sx}),x=d.clone();x.defines.HORIZONTAL_PASS=1;let S=new kn;S.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Sn(S,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca;let m=this.type;this.render=function(R,B,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||R.length===0)return;this.type===fl&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ca);let U=i.getRenderTarget(),H=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Mi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let it=m!==this.type;it&&B.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(j=>j.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,j=R.length;X<j;X++){let ot=R[X],st=ot.shadow;if(st===void 0){re("WebGLShadowMap:",ot,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);let mt=st.getFrameExtents();s.multiply(mt),r.copy(st.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/mt.x),s.x=r.x*mt.x,st.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/mt.y),s.y=r.y*mt.y,st.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(st.camera._reversedDepth=et,st.map===null||it===!0){if(st.map!==null&&(st.map.depthTexture!==null&&(st.map.depthTexture.dispose(),st.map.depthTexture=null),st.map.dispose()),this.type===vr){if(ot.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}st.map=new Nn(s.x,s.y,{format:us,type:ai,minFilter:pn,magFilter:pn,generateMipmaps:!1}),st.map.texture.name=ot.name+".shadowMap",st.map.depthTexture=new is(s.x,s.y,Jn),st.map.depthTexture.name=ot.name+".shadowMapDepth",st.map.depthTexture.format=gi,st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=en,st.map.depthTexture.magFilter=en}else ot.isPointLight?(st.map=new rc(s.x),st.map.depthTexture=new Ko(s.x,ri)):(st.map=new Nn(s.x,s.y),st.map.depthTexture=new is(s.x,s.y,ri)),st.map.depthTexture.name=ot.name+".shadowMap",st.map.depthTexture.format=gi,this.type===Ca?(st.map.depthTexture.compareFunction=et?ec:tc,st.map.depthTexture.minFilter=pn,st.map.depthTexture.magFilter=pn):(st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=en,st.map.depthTexture.magFilter=en);st.camera.updateProjectionMatrix()}st.map.isWebGLCubeRenderTarget!==!0&&(st.map.width!==s.x||st.map.height!==s.y)&&st.map.setSize(s.x,s.y);let rt=st.map.isWebGLCubeRenderTarget?6:st.getViewportCount();ot.isPointLight!==!0&&st.updateMatrices(ot,b);for(let pt=0;pt<rt;pt++){let Vt=st.getCamera(pt);if(ot.isPointLight){let jt=st.camera,De=st.matrix,de=ot.distance||jt.far;de!==jt.far&&(jt.far=de,jt.updateProjectionMatrix()),ka.setFromMatrixPosition(ot.matrixWorld),jt.position.copy(ka),Wh.copy(jt.position),Wh.add(bx[pt]),jt.up.copy(Tx[pt]),jt.lookAt(Wh),jt.updateMatrixWorld(),De.makeTranslation(-ka.x,-ka.y,-ka.z),df.multiplyMatrices(jt.projectionMatrix,jt.matrixWorldInverse),st._frustum.setFromProjectionMatrix(df,jt.coordinateSystem,jt.reversedDepth)}if(st.map.isWebGLCubeRenderTarget)i.setRenderTarget(st.map,pt),i.clear();else{pt===0&&(i.setRenderTarget(st.map),i.clear());let jt=st.getViewport(pt);o.set(r.x*jt.x,r.y*jt.y,r.x*jt.z,r.y*jt.w),q.viewport(o)}n=st.getFrustum(pt),E(B,b,Vt,ot,this.type)}st.isPointLightShadow!==!0&&this.type===vr&&D(st,b),st.needsUpdate=!1}m=this.type,y.needsUpdate=!1,i.setRenderTarget(U,H,W)};function D(R,B){let b=t.update(P);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,x.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,x.needsUpdate=!0),R.mapPass===null?R.mapPass=new Nn(s.x,s.y,{format:us,type:ai}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(B,null,b,d,P,null),x.uniforms.shadow_pass.value=R.mapPass.texture,x.uniforms.resolution.value.set(R.map.width,R.map.height),x.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(B,null,b,x,P,null)}function F(R,B,b,U){let H=null,W=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(W!==void 0)H=W;else if(H=b.isPointLight===!0?u:c,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){let q=H.uuid,it=B.uuid,X=h[q];X===void 0&&(X={},h[q]=X);let j=X[it];j===void 0&&(j=H.clone(),X[it]=j,B.addEventListener("dispose",I)),H=j}if(H.visible=B.visible,H.wireframe=B.wireframe,U===vr?H.side=B.shadowSide!==null?B.shadowSide:B.side:H.side=B.shadowSide!==null?B.shadowSide:M[B.side],H.alphaMap=B.alphaMap,H.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,H.map=B.map,H.clipShadows=B.clipShadows,H.clippingPlanes=B.clippingPlanes,H.clipIntersection=B.clipIntersection,H.displacementMap=B.displacementMap,H.displacementScale=B.displacementScale,H.displacementBias=B.displacementBias,H.wireframeLinewidth=B.wireframeLinewidth,H.linewidth=B.linewidth,b.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let q=i.properties.get(H);q.light=b}return H}function E(R,B,b,U,H){if(R.visible===!1)return;if(R.layers.test(B.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&H===vr)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);let it=t.update(R),X=R.material;if(Array.isArray(X)){let j=it.groups;for(let ot=0,st=j.length;ot<st;ot++){let mt=j[ot],et=X[mt.materialIndex];if(et&&et.visible){let rt=F(R,et,U,H);R.onBeforeShadow(i,R,B,b,it,rt,mt),i.renderBufferDirect(b,null,it,rt,R,mt),R.onAfterShadow(i,R,B,b,it,rt,mt)}}}else if(X.visible){let j=F(R,X,U,H);R.onBeforeShadow(i,R,B,b,it,j,null),i.renderBufferDirect(b,null,it,j,R,null),R.onAfterShadow(i,R,B,b,it,j,null)}}let q=R.children;for(let it=0,X=q.length;it<X;it++)E(q[it],B,b,U,H)}function I(R){R.target.removeEventListener("dispose",I);for(let b in h){let U=h[b],H=R.target.uuid;H in U&&(U[H].dispose(),delete U[H])}}}function Ax(i,t){function e(){let V=!1,Pt=new Ye,dt=null,Et=new Ye(0,0,0,0);return{setMask:function(Lt){dt!==Lt&&!V&&(i.colorMask(Lt,Lt,Lt,Lt),dt=Lt)},setLocked:function(Lt){V=Lt},setClear:function(Lt,bt,Kt,Zt,Ue){Ue===!0&&(Lt*=Zt,bt*=Zt,Kt*=Zt),Pt.set(Lt,bt,Kt,Zt),Et.equals(Pt)===!1&&(i.clearColor(Lt,bt,Kt,Zt),Et.copy(Pt))},reset:function(){V=!1,dt=null,Et.set(-1,0,0,0)}}}function n(){let V=!1,Pt=!1,dt=null,Et=null,Lt=null;return{setReversed:function(bt){if(Pt!==bt){let Kt=t.get("EXT_clip_control");bt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Pt=bt;let Zt=Lt;Lt=null,this.setClear(Zt)}},getReversed:function(){return Pt},setTest:function(bt){bt?_t(i.DEPTH_TEST):Yt(i.DEPTH_TEST)},setMask:function(bt){dt!==bt&&!V&&(i.depthMask(bt),dt=bt)},setFunc:function(bt){if(Pt&&(bt=kd[bt]),Et!==bt){switch(bt){case Uo:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case Bo:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case ko:i.depthFunc(i.GREATER);break;case Vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=bt}},setLocked:function(bt){V=bt},setClear:function(bt){Lt!==bt&&(Lt=bt,Pt&&(bt=1-bt),i.clearDepth(bt))},reset:function(){V=!1,dt=null,Et=null,Lt=null,Pt=!1}}}function s(){let V=!1,Pt=null,dt=null,Et=null,Lt=null,bt=null,Kt=null,Zt=null,Ue=null;return{setTest:function(Ie){V||(Ie?_t(i.STENCIL_TEST):Yt(i.STENCIL_TEST))},setMask:function(Ie){Pt!==Ie&&!V&&(i.stencilMask(Ie),Pt=Ie)},setFunc:function(Ie,gn,Gn){(dt!==Ie||Et!==gn||Lt!==Gn)&&(i.stencilFunc(Ie,gn,Gn),dt=Ie,Et=gn,Lt=Gn)},setOp:function(Ie,gn,Gn){(bt!==Ie||Kt!==gn||Zt!==Gn)&&(i.stencilOp(Ie,gn,Gn),bt=Ie,Kt=gn,Zt=Gn)},setLocked:function(Ie){V=Ie},setClear:function(Ie){Ue!==Ie&&(i.clearStencil(Ie),Ue=Ie)},reset:function(){V=!1,Pt=null,dt=null,Et=null,Lt=null,bt=null,Kt=null,Zt=null,Ue=null}}}let r=new e,o=new n,c=new s,u=new WeakMap,h=new WeakMap,p={},M={},d={},x=new WeakMap,S=[],P=null,y=!1,m=null,D=null,F=null,E=null,I=null,R=null,B=null,b=new pe(0,0,0),U=0,H=!1,W=null,q=null,it=null,X=null,j=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,mt=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(et)[1]),st=mt>=1):et.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),st=mt>=2);let rt=null,pt={},Vt=i.getParameter(i.SCISSOR_BOX),jt=i.getParameter(i.VIEWPORT),De=new Ye().fromArray(Vt),de=new Ye().fromArray(jt);function Te(V,Pt,dt,Et){let Lt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(V,bt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<dt;Kt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(Pt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return bt}let lt={};lt[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),_t(i.DEPTH_TEST),o.setFunc(ur),Qt(!1),We(dh),_t(i.CULL_FACE),Ce(Mi);function _t(V){p[V]!==!0&&(i.enable(V),p[V]=!0)}function Yt(V){p[V]!==!1&&(i.disable(V),p[V]=!1)}function le(V,Pt){return d[V]!==Pt?(i.bindFramebuffer(V,Pt),d[V]=Pt,V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Pt),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function zt(V,Pt){let dt=S,Et=!1;if(V){dt=x.get(Pt),dt===void 0&&(dt=[],x.set(Pt,dt));let Lt=V.textures;if(dt.length!==Lt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Kt=Lt.length;bt<Kt;bt++)dt[bt]=i.COLOR_ATTACHMENT0+bt;dt.length=Lt.length,Et=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(dt)}function me(V){return P!==V?(i.useProgram(V),P=V,!0):!1}let $e={[Is]:i.FUNC_ADD,[od]:i.FUNC_SUBTRACT,[ld]:i.FUNC_REVERSE_SUBTRACT};$e[cd]=i.MIN,$e[hd]=i.MAX;let xe={[ud]:i.ZERO,[dd]:i.ONE,[fd]:i.SRC_COLOR,[gh]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[_d]:i.DST_COLOR,[md]:i.DST_ALPHA,[pd]:i.ONE_MINUS_SRC_COLOR,[_h]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[gd]:i.ONE_MINUS_DST_ALPHA,[yd]:i.CONSTANT_COLOR,[Md]:i.ONE_MINUS_CONSTANT_COLOR,[Sd]:i.CONSTANT_ALPHA,[bd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ce(V,Pt,dt,Et,Lt,bt,Kt,Zt,Ue,Ie){if(V===Mi){y===!0&&(Yt(i.BLEND),y=!1);return}if(y===!1&&(_t(i.BLEND),y=!0),V!==ad){if(V!==m||Ie!==H){if((D!==Is||I!==Is)&&(i.blendEquation(i.FUNC_ADD),D=Is,I=Is),Ie)switch(V){case yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFunc(i.ONE,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:oe("WebGLState: Invalid blending: ",V);break}else switch(V){case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ph:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mh:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",V);break}F=null,E=null,R=null,B=null,b.set(0,0,0),U=0,m=V,H=Ie}return}Lt=Lt||Pt,bt=bt||dt,Kt=Kt||Et,(Pt!==D||Lt!==I)&&(i.blendEquationSeparate($e[Pt],$e[Lt]),D=Pt,I=Lt),(dt!==F||Et!==E||bt!==R||Kt!==B)&&(i.blendFuncSeparate(xe[dt],xe[Et],xe[bt],xe[Kt]),F=dt,E=Et,R=bt,B=Kt),(Zt.equals(b)===!1||Ue!==U)&&(i.blendColor(Zt.r,Zt.g,Zt.b,Ue),b.copy(Zt),U=Ue),m=V,H=!1}function ve(V,Pt){V.side===yi?Yt(i.CULL_FACE):_t(i.CULL_FACE);let dt=V.side===mn;Pt&&(dt=!dt),Qt(dt),V.blending===yr&&V.transparent===!1?Ce(Mi):Ce(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Et=V.stencilWrite;c.setTest(Et),Et&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Be(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(V){W!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),W=V)}function We(V){V!==sd?(_t(i.CULL_FACE),V!==q&&(V===dh?i.cullFace(i.BACK):V===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Yt(i.CULL_FACE),q=V}function ye(V){V!==it&&(st&&i.lineWidth(V),it=V)}function Be(V,Pt,dt){V?(_t(i.POLYGON_OFFSET_FILL),(X!==Pt||j!==dt)&&(X=Pt,j=dt,o.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,dt))):Yt(i.POLYGON_OFFSET_FILL)}function qe(V){V?_t(i.SCISSOR_TEST):Yt(i.SCISSOR_TEST)}function je(V){V===void 0&&(V=i.TEXTURE0+ot-1),rt!==V&&(i.activeTexture(V),rt=V)}function z(V,Pt,dt){dt===void 0&&(rt===null?dt=i.TEXTURE0+ot-1:dt=rt);let Et=pt[dt];Et===void 0&&(Et={type:void 0,texture:void 0},pt[dt]=Et),(Et.type!==V||Et.texture!==Pt)&&(rt!==dt&&(i.activeTexture(dt),rt=dt),i.bindTexture(V,Pt||lt[V]),Et.type=V,Et.texture=Pt)}function St(){let V=pt[rt];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Gt(){try{i.compressedTexImage2D(...arguments)}catch(V){oe("WebGLState:",V)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(V){oe("WebGLState:",V)}}function v(){try{i.texSubImage2D(...arguments)}catch(V){oe("WebGLState:",V)}}function J(){try{i.texSubImage3D(...arguments)}catch(V){oe("WebGLState:",V)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(V){oe("WebGLState:",V)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(V){oe("WebGLState:",V)}}function Tt(){try{i.texStorage2D(...arguments)}catch(V){oe("WebGLState:",V)}}function yt(){try{i.texStorage3D(...arguments)}catch(V){oe("WebGLState:",V)}}function ht(){try{i.texImage2D(...arguments)}catch(V){oe("WebGLState:",V)}}function ut(){try{i.texImage3D(...arguments)}catch(V){oe("WebGLState:",V)}}function wt(V){return M[V]!==void 0?M[V]:i.getParameter(V)}function kt(V,Pt){M[V]!==Pt&&(i.pixelStorei(V,Pt),M[V]=Pt)}function It(V){De.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),De.copy(V))}function Ct(V){de.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),de.copy(V))}function Jt(V,Pt){let dt=h.get(Pt);dt===void 0&&(dt=new WeakMap,h.set(Pt,dt));let Et=dt.get(V);Et===void 0&&(Et=i.getUniformBlockIndex(Pt,V.name),dt.set(V,Et))}function ee(V,Pt){let Et=h.get(Pt).get(V);u.get(Pt)!==Et&&(i.uniformBlockBinding(Pt,Et,V.__bindingPointIndex),u.set(Pt,Et))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},M={},rt=null,pt={},d={},x=new WeakMap,S=[],P=null,y=!1,m=null,D=null,F=null,E=null,I=null,R=null,B=null,b=new pe(0,0,0),U=0,H=!1,W=null,q=null,it=null,X=null,j=null,De.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:_t,disable:Yt,bindFramebuffer:le,drawBuffers:zt,useProgram:me,setBlending:Ce,setMaterial:ve,setFlipSided:Qt,setCullFace:We,setLineWidth:ye,setPolygonOffset:Be,setScissorTest:qe,activeTexture:je,bindTexture:z,unbindTexture:St,compressedTexImage2D:Gt,compressedTexImage3D:L,texImage2D:ht,texImage3D:ut,pixelStorei:kt,getParameter:wt,updateUBOMapping:Jt,uniformBlockBinding:ee,texStorage2D:Tt,texStorage3D:yt,texSubImage2D:v,texSubImage3D:J,compressedTexSubImage2D:Q,compressedTexSubImage3D:ct,scissor:It,viewport:Ct,reset:ce}}function Ex(i,t,e,n,s,r,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,p=new WeakMap,M=new Set,d,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(L,v){return S?new OffscreenCanvas(L,v):la("canvas")}function y(L,v,J){let Q=1,ct=Gt(L);if((ct.width>J||ct.height>J)&&(Q=J/Math.max(ct.width,ct.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Tt=Math.floor(Q*ct.width),yt=Math.floor(Q*ct.height);d===void 0&&(d=P(Tt,yt));let ht=v?P(Tt,yt):d;return ht.width=Tt,ht.height=yt,ht.getContext("2d").drawImage(L,0,0,Tt,yt),re("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+Tt+"x"+yt+")."),ht}else return"data"in L&&re("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),L;return L}function m(L){return L.generateMipmaps}function D(L){i.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(L,v,J,Q,ct,Tt=!1){if(L!==null){if(i[L]!==void 0)return i[L];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let yt;Q&&(yt=t.get("EXT_texture_norm16"),yt||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=v;if(v===i.RED&&(J===i.FLOAT&&(ht=i.R32F),J===i.HALF_FLOAT&&(ht=i.R16F),J===i.UNSIGNED_BYTE&&(ht=i.R8),J===i.UNSIGNED_SHORT&&yt&&(ht=yt.R16_EXT),J===i.SHORT&&yt&&(ht=yt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ht=i.R8UI),J===i.UNSIGNED_SHORT&&(ht=i.R16UI),J===i.UNSIGNED_INT&&(ht=i.R32UI),J===i.BYTE&&(ht=i.R8I),J===i.SHORT&&(ht=i.R16I),J===i.INT&&(ht=i.R32I)),v===i.RG&&(J===i.FLOAT&&(ht=i.RG32F),J===i.HALF_FLOAT&&(ht=i.RG16F),J===i.UNSIGNED_BYTE&&(ht=i.RG8),J===i.UNSIGNED_SHORT&&yt&&(ht=yt.RG16_EXT),J===i.SHORT&&yt&&(ht=yt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ht=i.RG8UI),J===i.UNSIGNED_SHORT&&(ht=i.RG16UI),J===i.UNSIGNED_INT&&(ht=i.RG32UI),J===i.BYTE&&(ht=i.RG8I),J===i.SHORT&&(ht=i.RG16I),J===i.INT&&(ht=i.RG32I)),v===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),J===i.UNSIGNED_INT&&(ht=i.RGB32UI),J===i.BYTE&&(ht=i.RGB8I),J===i.SHORT&&(ht=i.RGB16I),J===i.INT&&(ht=i.RGB32I)),v===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),J===i.UNSIGNED_INT&&(ht=i.RGBA32UI),J===i.BYTE&&(ht=i.RGBA8I),J===i.SHORT&&(ht=i.RGBA16I),J===i.INT&&(ht=i.RGBA32I)),v===i.RGB&&(J===i.UNSIGNED_SHORT&&yt&&(ht=yt.RGB16_EXT),J===i.SHORT&&yt&&(ht=yt.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ht=i.R11F_G11F_B10F)),v===i.RGBA){let ut=Tt?oa:be.getTransfer(ct);J===i.FLOAT&&(ht=i.RGBA32F),J===i.HALF_FLOAT&&(ht=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ht=ut===Oe?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&yt&&(ht=yt.RGBA16_EXT),J===i.SHORT&&yt&&(ht=yt.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function I(L,v){let J;return L?v===null||v===ri||v===Sr?J=i.DEPTH24_STENCIL8:v===Jn?J=i.DEPTH32F_STENCIL8:v===Mr&&(J=i.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ri||v===Sr?J=i.DEPTH_COMPONENT24:v===Jn?J=i.DEPTH_COMPONENT32F:v===Mr&&(J=i.DEPTH_COMPONENT16),J}function R(L,v){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==en&&L.minFilter!==pn?Math.log2(Math.max(v.width,v.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?v.mipmaps.length:1}function B(L){let v=L.target;v.removeEventListener("dispose",B),U(v),v.isVideoTexture&&p.delete(v),v.isHTMLTexture&&M.delete(v)}function b(L){let v=L.target;v.removeEventListener("dispose",b),W(v)}function U(L){let v=n.get(L);if(v.__webglInit===void 0)return;let J=L.source,Q=x.get(J);if(Q){let ct=Q[v.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&H(L),Object.keys(Q).length===0&&x.delete(J)}n.remove(L)}function H(L){let v=n.get(L);i.deleteTexture(v.__webglTexture);let J=L.source,Q=x.get(J);delete Q[v.__cacheKey],o.memory.textures--}function W(L){let v=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let ct=0;ct<v.__webglFramebuffer[Q].length;ct++)i.deleteFramebuffer(v.__webglFramebuffer[Q][ct]);else i.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let J=L.textures;for(let Q=0,ct=J.length;Q<ct;Q++){let Tt=n.get(J[Q]);Tt.__webglTexture&&(i.deleteTexture(Tt.__webglTexture),o.memory.textures--),n.remove(J[Q])}n.remove(L)}let q=0;function it(){q=0}function X(){return q}function j(L){q=L}function ot(){let L=q;return L>=s.maxTextures&&re("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,L}function st(L){let v=[];return v.push(L.wrapS),v.push(L.wrapT),v.push(L.wrapR||0),v.push(L.magFilter),v.push(L.minFilter),v.push(L.anisotropy),v.push(L.internalFormat),v.push(L.format),v.push(L.type),v.push(L.generateMipmaps),v.push(L.premultiplyAlpha),v.push(L.flipY),v.push(L.unpackAlignment),v.push(L.colorSpace),v.join()}function mt(L,v){let J=n.get(L);if(L.isVideoTexture&&z(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){let Q=L.image;if(Q===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(J,L,v);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+v)}function et(L,v){let J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Yt(J,L,v);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+v)}function rt(L,v){let J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Yt(J,L,v);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+v)}function pt(L,v){let J=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){le(J,L,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+v)}let Vt={[Go]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},jt={[en]:i.NEAREST,[Ad]:i.NEAREST_MIPMAP_NEAREST,[Ia]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[gl]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},De={[Pd]:i.NEVER,[Ud]:i.ALWAYS,[Id]:i.LESS,[tc]:i.LEQUAL,[Ld]:i.EQUAL,[ec]:i.GEQUAL,[Dd]:i.GREATER,[Nd]:i.NOTEQUAL};function de(L,v){if(v.type===Jn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===pn||v.magFilter===gl||v.magFilter===Ia||v.magFilter===cs||v.minFilter===pn||v.minFilter===gl||v.minFilter===Ia||v.minFilter===cs)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Vt[v.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Vt[v.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Vt[v.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,jt[v.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,jt[v.minFilter]),v.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,De[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==Ia&&v.minFilter!==cs||v.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Te(L,v){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,v.addEventListener("dispose",B));let Q=v.source,ct=x.get(Q);ct===void 0&&(ct={},x.set(Q,ct));let Tt=st(v);if(Tt!==L.__cacheKey){ct[Tt]===void 0&&(ct[Tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ct[Tt].usedTimes++;let yt=ct[L.__cacheKey];yt!==void 0&&(ct[L.__cacheKey].usedTimes--,yt.usedTimes===0&&H(v)),L.__cacheKey=Tt,L.__webglTexture=ct[Tt].texture}return J}function lt(L,v,J){return Math.floor(Math.floor(L/J)/v)}function _t(L,v,J,Q){let Tt=L.updateRanges;if(Tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,J,Q,v.data);else{Tt.sort((kt,It)=>kt.start-It.start);let yt=0;for(let kt=1;kt<Tt.length;kt++){let It=Tt[yt],Ct=Tt[kt],Jt=It.start+It.count,ee=lt(Ct.start,v.width,4),ce=lt(It.start,v.width,4);Ct.start<=Jt+1&&ee===ce&&lt(Ct.start+Ct.count-1,v.width,4)===ee?It.count=Math.max(It.count,Ct.start+Ct.count-It.start):(++yt,Tt[yt]=Ct)}Tt.length=yt+1;let ht=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),wt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let kt=0,It=Tt.length;kt<It;kt++){let Ct=Tt[kt],Jt=Math.floor(Ct.start/4),ee=Math.ceil(Ct.count/4),ce=Jt%v.width,V=Math.floor(Jt/v.width),Pt=ee,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,ce,V,Pt,dt,J,Q,v.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ht),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt)}}function Yt(L,v,J){let Q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=i.TEXTURE_3D);let ct=Te(L,v),Tt=v.source;e.bindTexture(Q,L.__webglTexture,i.TEXTURE0+J);let yt=n.get(Tt);if(Tt.version!==yt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let dt=be.getPrimaries(be.workingColorSpace),Et=v.colorSpace===Fi?null:be.getPrimaries(v.colorSpace),Lt=v.colorSpace===Fi||dt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ut=y(v.image,!1,s.maxTextureSize);ut=St(v,ut);let wt=r.convert(v.format,v.colorSpace),kt=r.convert(v.type),It=E(v.internalFormat,wt,kt,v.normalized,v.colorSpace,v.isVideoTexture);de(Q,v);let Ct,Jt=v.mipmaps,ee=v.isVideoTexture!==!0,ce=yt.__version===void 0||ct===!0,V=Tt.dataReady,Pt=R(v,ut);if(v.isDepthTexture)It=I(v.format===hs,v.type),ce&&(ee?e.texStorage2D(i.TEXTURE_2D,1,It,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,It,ut.width,ut.height,0,wt,kt,null));else if(v.isDataTexture)if(Jt.length>0){ee&&ce&&e.texStorage2D(i.TEXTURE_2D,Pt,It,Jt[0].width,Jt[0].height);for(let dt=0,Et=Jt.length;dt<Et;dt++)Ct=Jt[dt],ee?V&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,wt,kt,Ct.data):e.texImage2D(i.TEXTURE_2D,dt,It,Ct.width,Ct.height,0,wt,kt,Ct.data);v.generateMipmaps=!1}else ee?(ce&&e.texStorage2D(i.TEXTURE_2D,Pt,It,ut.width,ut.height),V&&_t(v,ut,wt,kt)):e.texImage2D(i.TEXTURE_2D,0,It,ut.width,ut.height,0,wt,kt,ut.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ee&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,It,Jt[0].width,Jt[0].height,ut.depth);for(let dt=0,Et=Jt.length;dt<Et;dt++)if(Ct=Jt[dt],v.format!==Zn)if(wt!==null)if(ee){if(V)if(v.layerUpdates.size>0){let Lt=Bh(Ct.width,Ct.height,v.format,v.type);for(let bt of v.layerUpdates){let Kt=Ct.data.subarray(bt*Lt/Ct.data.BYTES_PER_ELEMENT,(bt+1)*Lt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,bt,Ct.width,Ct.height,1,wt,Kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Ct.width,Ct.height,ut.depth,wt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,It,Ct.width,Ct.height,ut.depth,0,Ct.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Ct.width,Ct.height,ut.depth,wt,kt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,It,Ct.width,Ct.height,ut.depth,0,wt,kt,Ct.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ee&&ce&&e.texStorage2D(i.TEXTURE_2D,Pt,It,Jt[0].width,Jt[0].height);for(let dt=0,Et=Jt.length;dt<Et;dt++)Ct=Jt[dt],v.format!==Zn?wt!==null?ee?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,wt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,It,Ct.width,Ct.height,0,Ct.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?V&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,wt,kt,Ct.data):e.texImage2D(i.TEXTURE_2D,dt,It,Ct.width,Ct.height,0,wt,kt,Ct.data)}else if(v.isDataArrayTexture)if(ee){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,It,ut.width,ut.height,ut.depth),V)if(v.layerUpdates.size>0){let dt=Bh(ut.width,ut.height,v.format,v.type);for(let Et of v.layerUpdates){let Lt=ut.data.subarray(Et*dt/ut.data.BYTES_PER_ELEMENT,(Et+1)*dt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,ut.width,ut.height,1,wt,kt,Lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,wt,kt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,ut.width,ut.height,ut.depth,0,wt,kt,ut.data);else if(v.isData3DTexture)ee?(ce&&e.texStorage3D(i.TEXTURE_3D,Pt,It,ut.width,ut.height,ut.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,wt,kt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,It,ut.width,ut.height,ut.depth,0,wt,kt,ut.data);else if(v.isFramebufferTexture){if(ce)if(ee)e.texStorage2D(i.TEXTURE_2D,Pt,It,ut.width,ut.height);else{let dt=ut.width,Et=ut.height;for(let Lt=0;Lt<Pt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,It,dt,Et,0,wt,kt,null),dt>>=1,Et>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),ut.parentNode!==dt){dt.appendChild(ut),M.add(v),dt.onpaint=Et=>{let Lt=Et.changedElements;for(let bt of M)Lt.includes(bt.image)&&(bt.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Lt=i.RGBA,bt=i.RGBA,Kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Lt,bt,Kt,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(ee&&ce){let dt=Gt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,It,dt.width,dt.height)}for(let dt=0,Et=Jt.length;dt<Et;dt++)Ct=Jt[dt],ee?V&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,wt,kt,Ct):e.texImage2D(i.TEXTURE_2D,dt,It,wt,kt,Ct);v.generateMipmaps=!1}else if(ee){if(ce){let dt=Gt(ut);e.texStorage2D(i.TEXTURE_2D,Pt,It,dt.width,dt.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,kt,ut)}else e.texImage2D(i.TEXTURE_2D,0,It,wt,kt,ut);m(v)&&D(Q),yt.__version=Tt.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function le(L,v,J){if(v.image.length!==6)return;let Q=Te(L,v),ct=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);let Tt=n.get(ct);if(ct.version!==Tt.__version||Q===!0){e.activeTexture(i.TEXTURE0+J);let yt=be.getPrimaries(be.workingColorSpace),ht=v.colorSpace===Fi?null:be.getPrimaries(v.colorSpace),ut=v.colorSpace===Fi||yt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let wt=v.isCompressedTexture||v.image[0].isCompressedTexture,kt=v.image[0]&&v.image[0].isDataTexture,It=[];for(let bt=0;bt<6;bt++)!wt&&!kt?It[bt]=y(v.image[bt],!0,s.maxCubemapSize):It[bt]=kt?v.image[bt].image:v.image[bt],It[bt]=St(v,It[bt]);let Ct=It[0],Jt=r.convert(v.format,v.colorSpace),ee=r.convert(v.type),ce=E(v.internalFormat,Jt,ee,v.normalized,v.colorSpace),V=v.isVideoTexture!==!0,Pt=Tt.__version===void 0||Q===!0,dt=ct.dataReady,Et=R(v,Ct);de(i.TEXTURE_CUBE_MAP,v);let Lt;if(wt){V&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ce,Ct.width,Ct.height);for(let bt=0;bt<6;bt++){Lt=It[bt].mipmaps;for(let Kt=0;Kt<Lt.length;Kt++){let Zt=Lt[Kt];v.format!==Zn?Jt!==null?V?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Kt,0,0,Zt.width,Zt.height,Jt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Kt,ce,Zt.width,Zt.height,0,Zt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Kt,0,0,Zt.width,Zt.height,Jt,ee,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Kt,ce,Zt.width,Zt.height,0,Jt,ee,Zt.data)}}}else{if(Lt=v.mipmaps,V&&Pt){Lt.length>0&&Et++;let bt=Gt(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ce,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(kt){V?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,It[bt].width,It[bt].height,Jt,ee,It[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ce,It[bt].width,It[bt].height,0,Jt,ee,It[bt].data);for(let Kt=0;Kt<Lt.length;Kt++){let Ue=Lt[Kt].image[bt].image;V?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Kt+1,0,0,Ue.width,Ue.height,Jt,ee,Ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Kt+1,ce,Ue.width,Ue.height,0,Jt,ee,Ue.data)}}else{V?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Jt,ee,It[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ce,Jt,ee,It[bt]);for(let Kt=0;Kt<Lt.length;Kt++){let Zt=Lt[Kt];V?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Kt+1,0,0,Jt,ee,Zt.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Kt+1,ce,Jt,ee,Zt.image[bt])}}}m(v)&&D(i.TEXTURE_CUBE_MAP),Tt.__version=ct.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function zt(L,v,J,Q,ct,Tt){let yt=r.convert(J.format,J.colorSpace),ht=r.convert(J.type),ut=E(J.internalFormat,yt,ht,J.normalized,J.colorSpace),wt=n.get(v),kt=n.get(J);if(kt.__renderTarget=v,!wt.__hasExternalTextures){let It=Math.max(1,v.width>>Tt),Ct=Math.max(1,v.height>>Tt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,Tt,ut,It,Ct,v.depth,0,yt,ht,null):e.texImage2D(ct,Tt,ut,It,Ct,0,yt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),je(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ct,kt.__webglTexture,0,qe(v)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ct,kt.__webglTexture,Tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(L,v,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),v.depthBuffer){let Q=v.depthTexture,ct=Q&&Q.isDepthTexture?Q.type:null,Tt=I(v.stencilBuffer,ct),yt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;je(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(v),Tt,v.width,v.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(v),Tt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,L)}else{let Q=v.textures;for(let ct=0;ct<Q.length;ct++){let Tt=Q[ct],yt=r.convert(Tt.format,Tt.colorSpace),ht=r.convert(Tt.type),ut=E(Tt.internalFormat,yt,ht,Tt.normalized,Tt.colorSpace);je(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(v),ut,v.width,v.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(v),ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $e(L,v,J){let Q=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(v.depthTexture);if(ct.__renderTarget=v,(!ct.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,v.depthTexture.addEventListener("dispose",B)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),de(i.TEXTURE_CUBE_MAP,v.depthTexture);let wt=r.convert(v.depthTexture.format),kt=r.convert(v.depthTexture.type),It;v.depthTexture.format===gi?It=i.DEPTH_COMPONENT24:v.depthTexture.format===hs&&(It=i.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,It,v.width,v.height,0,wt,kt,null)}}else mt(v.depthTexture,0);let Tt=ct.__webglTexture,yt=qe(v),ht=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,ut=v.depthTexture.format===hs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===gi)je(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ht,Tt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ht,Tt,0);else if(v.depthTexture.format===hs)je(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ht,Tt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ht,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xe(L){let v=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==L.depthTexture){let Q=L.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Q){let ct=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Q.removeEventListener("dispose",ct)};Q.addEventListener("dispose",ct),v.__depthDisposeCallback=ct}v.__boundDepthTexture=Q}if(L.depthTexture&&!v.__autoAllocateDepthBuffer)if(J)for(let Q=0;Q<6;Q++)$e(v.__webglFramebuffer[Q],L,Q);else{let Q=L.texture.mipmaps;Q&&Q.length>0?$e(v.__webglFramebuffer[0],L,0):$e(v.__webglFramebuffer,L,0)}else if(J){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]===void 0)v.__webglDepthbuffer[Q]=i.createRenderbuffer(),me(v.__webglDepthbuffer[Q],L,!1);else{let ct=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=v.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Tt)}}else{let Q=L.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),me(v.__webglDepthbuffer,L,!1);else{let ct=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(L,v,J){let Q=n.get(L);v!==void 0&&zt(Q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&xe(L)}function ve(L){let v=L.texture,J=n.get(L),Q=n.get(v);L.addEventListener("dispose",b);let ct=L.textures,Tt=L.isWebGLCubeRenderTarget===!0,yt=ct.length>1;if(yt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=v.version,o.memory.textures++),Tt){J.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer[ht]=[];for(let ut=0;ut<v.mipmaps.length;ut++)J.__webglFramebuffer[ht][ut]=i.createFramebuffer()}else J.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)J.__webglFramebuffer[ht]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ht=0,ut=ct.length;ht<ut;ht++){let wt=n.get(ct[ht]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&je(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ht=0;ht<ct.length;ht++){let ut=ct[ht];J.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ht]);let wt=r.convert(ut.format,ut.colorSpace),kt=r.convert(ut.type),It=E(ut.internalFormat,wt,kt,ut.normalized,ut.colorSpace,L.isXRRenderTarget===!0),Ct=qe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,It,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,J.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),me(J.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Tt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),de(i.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)zt(J.__webglFramebuffer[ht][ut],L,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut);else zt(J.__webglFramebuffer[ht],L,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(v)&&D(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ht=0,ut=ct.length;ht<ut;ht++){let wt=ct[ht],kt=n.get(wt),It=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(It=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(It,kt.__webglTexture),de(It,wt),zt(J.__webglFramebuffer,L,wt,i.COLOR_ATTACHMENT0+ht,It,0),m(wt)&&D(It)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ht=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Q.__webglTexture),de(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)zt(J.__webglFramebuffer[ut],L,v,i.COLOR_ATTACHMENT0,ht,ut);else zt(J.__webglFramebuffer,L,v,i.COLOR_ATTACHMENT0,ht,0);m(v)&&D(ht),e.unbindTexture()}L.depthBuffer&&xe(L)}function Qt(L){let v=L.textures;for(let J=0,Q=v.length;J<Q;J++){let ct=v[J];if(m(ct)){let Tt=F(L),yt=n.get(ct).__webglTexture;e.bindTexture(Tt,yt),D(Tt),e.unbindTexture()}}}let We=[],ye=[];function Be(L){if(L.samples>0){if(je(L)===!1){let v=L.textures,J=L.width,Q=L.height,ct=i.COLOR_BUFFER_BIT,Tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(L),ht=v.length>1;if(ht)for(let wt=0;wt<v.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let ut=L.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let wt=0;wt<v.length;wt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[wt]);let kt=n.get(v[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,J,Q,0,0,J,Q,ct,i.NEAREST),u===!0&&(We.length=0,ye.length=0,We.push(i.COLOR_ATTACHMENT0+wt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(We.push(Tt),ye.push(Tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let wt=0;wt<v.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[wt]);let kt=n.get(v[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&u){let v=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function qe(L){return Math.min(s.maxSamples,L.samples)}function je(L){let v=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function z(L){let v=o.render.frame;p.get(L)!==v&&(p.set(L,v),L.update())}function St(L,v){let J=L.colorSpace,Q=L.format,ct=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==aa&&J!==Fi&&(be.getTransfer(J)===Oe?(Q!==Zn||ct!==Un)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",J)),v}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ot,this.resetTextureUnits=it,this.getTextureUnits=X,this.setTextureUnits=j,this.setTexture2D=mt,this.setTexture2DArray=et,this.setTexture3D=rt,this.setTextureCube=pt,this.rebindTextures=Ce,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Cx(i,t){function e(n,s=Fi){let r,o=be.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ah)return i.BYTE;if(n===Eh)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===Ph)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Zn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===br)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===us)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===La||n===Da||n===Na||n===Ua)if(o===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===Tl||n===wl||n===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===Cl||n===Rl||n===Pl||n===Il||n===Fa||n===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===El||n===Cl)return o===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return r.COMPRESSED_R11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fa)return r.COMPRESSED_RG11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yl||n===Jl||n===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yl)return o===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===$l||n===Oa||n===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Px=`
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

}`,jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new va(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Rn({vertexShader:Rx,fragmentShader:Px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sn(new ya(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qh=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,o=null,c="local-floor",u=1,h=null,p=null,M=null,d=null,x=null,S=null,P=typeof XRWebGLBinding<"u",y=new jh,m={},D=e.getContextAttributes(),F=null,E=null,I=[],R=[],B=new Ee,b=null,U=null,H=new yn;H.viewport=new Ye;let W=new yn;W.viewport=new Ye;let q=[H,W],it=new dl,X=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let _t=I[lt];return _t===void 0&&(_t=new mr,I[lt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(lt){let _t=I[lt];return _t===void 0&&(_t=new mr,I[lt]=_t),_t.getGripSpace()},this.getHand=function(lt){let _t=I[lt];return _t===void 0&&(_t=new mr,I[lt]=_t),_t.getHandSpace()};function ot(lt){let _t=R.indexOf(lt.inputSource);if(_t===-1)return;let Yt=I[_t];Yt!==void 0&&(Yt.update(lt.inputSource,lt.frame,h||o),Yt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function st(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",mt);for(let lt=0;lt<I.length;lt++){let _t=R[lt];_t!==null&&(R[lt]=null,I[lt].disconnect(_t))}X=null,j=null,y.reset();for(let lt in m)delete m[lt];if(t.setRenderTarget(F),x=null,d=null,M=null,s=null,E=null,Te.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(B.width,B.height,!1),U!==null){let lt=U.camera;lt.fov=U.fov,lt.zoom=U.zoom,lt.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){c=lt,n.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(lt){h=lt},this.getBaseLayer=function(){return d!==null?d:x},this.getBinding=function(){return M===null&&P&&(M=new XRWebGLBinding(s,e)),M},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",st),s.addEventListener("inputsourceschange",mt),D.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(B),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Yt=null,le=null,zt=null;D.depth&&(zt=D.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Yt=D.stencil?hs:gi,le=D.stencil?Sr:ri);let me={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:r};M=this.getBinding(),d=M.createProjectionLayer(me),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Nn(d.textureWidth,d.textureHeight,{format:Zn,type:Un,depthTexture:new is(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Yt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Yt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,e,Yt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),E=new Nn(x.framebufferWidth,x.framebufferHeight,{format:Zn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await s.requestReferenceSpace(c),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function mt(lt){for(let _t=0;_t<lt.removed.length;_t++){let Yt=lt.removed[_t],le=R.indexOf(Yt);le>=0&&(R[le]=null,I[le].disconnect(Yt))}for(let _t=0;_t<lt.added.length;_t++){let Yt=lt.added[_t],le=R.indexOf(Yt);if(le===-1){for(let me=0;me<I.length;me++)if(me>=R.length){R.push(Yt),le=me;break}else if(R[me]===null){R[me]=Yt,le=me;break}if(le===-1)break}let zt=I[le];zt&&zt.connect(Yt)}}let et=new tt,rt=new tt;function pt(lt,_t,Yt){et.setFromMatrixPosition(_t.matrixWorld),rt.setFromMatrixPosition(Yt.matrixWorld);let le=et.distanceTo(rt),zt=_t.projectionMatrix.elements,me=Yt.projectionMatrix.elements,$e=zt[14]/(zt[10]-1),xe=zt[14]/(zt[10]+1),Ce=(zt[9]+1)/zt[5],ve=(zt[9]-1)/zt[5],Qt=(zt[8]-1)/zt[0],We=(me[8]+1)/me[0],ye=$e*Qt,Be=$e*We,qe=le/(-Qt+We),je=qe*-Qt;if(_t.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(je),lt.translateZ(qe),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),zt[10]===-1)lt.projectionMatrix.copy(_t.projectionMatrix),lt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{let z=$e+qe,St=xe+qe,Gt=ye-je,L=Be+(le-je),v=Ce*xe/St*z,J=ve*xe/St*z;lt.projectionMatrix.makePerspective(Gt,L,v,J,z,St),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function Vt(lt,_t){_t===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(_t.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let _t=lt.near,Yt=lt.far;y.texture!==null&&(y.depthNear>0&&(_t=y.depthNear),y.depthFar>0&&(Yt=y.depthFar)),it.near=W.near=H.near=_t,it.far=W.far=H.far=Yt,(X!==it.near||j!==it.far)&&(s.updateRenderState({depthNear:it.near,depthFar:it.far}),X=it.near,j=it.far),it.layers.mask=lt.layers.mask|6,H.layers.mask=it.layers.mask&-5,W.layers.mask=it.layers.mask&-3;let le=lt.parent,zt=it.cameras;Vt(it,le);for(let me=0;me<zt.length;me++)Vt(zt[me],le);zt.length===2?pt(it,H,W):it.projectionMatrix.copy(H.projectionMatrix),U===null&&lt.isPerspectiveCamera&&(U={camera:lt,fov:lt.fov,zoom:lt.zoom}),jt(lt,it,le)};function jt(lt,_t,Yt){Yt===null?lt.matrix.copy(_t.matrixWorld):(lt.matrix.copy(Yt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(_t.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(_t.projectionMatrix),lt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Xo*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(d===null&&x===null))return u},this.setFoveation=function(lt){u=lt,d!==null&&(d.fixedFoveation=lt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=lt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(it)},this.getCameraTexture=function(lt){return m[lt]};let De=null;function de(lt,_t){if(p=_t.getViewerPose(h||o),S=_t,p!==null){let Yt=p.views;x!==null&&(t.setRenderTargetFramebuffer(E,x.framebuffer),t.setRenderTarget(E));let le=!1;Yt.length!==it.cameras.length&&(it.cameras.length=0,le=!0);for(let xe=0;xe<Yt.length;xe++){let Ce=Yt[xe],ve=null;if(x!==null)ve=x.getViewport(Ce);else{let We=M.getViewSubImage(d,Ce);ve=We.viewport,xe===0&&(t.setRenderTargetTextures(E,We.colorTexture,We.depthStencilTexture),t.setRenderTarget(E))}let Qt=q[xe];Qt===void 0&&(Qt=new yn,Qt.layers.enable(xe),Qt.viewport=new Ye,q[xe]=Qt),Qt.matrix.fromArray(Ce.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Ce.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ve.x,ve.y,ve.width,ve.height),xe===0&&(it.matrix.copy(Qt.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),le===!0&&it.cameras.push(Qt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){M=n.getBinding();let xe=M.getDepthInformation(Yt[0]);xe&&xe.isValid&&xe.texture&&y.init(xe,s.renderState)}if(zt&&zt.includes("camera-access")&&P){t.state.unbindTexture(),M=n.getBinding();for(let xe=0;xe<Yt.length;xe++){let Ce=Yt[xe].camera;if(Ce){let ve=m[Ce];ve||(ve=new va,m[Ce]=ve);let Qt=M.getCameraImage(Ce);ve.sourceTexture=Qt}}}}for(let Yt=0;Yt<I.length;Yt++){let le=R[Yt],zt=I[Yt];le!==null&&zt!==void 0&&zt.update(le,_t,h||o)}De&&De(lt,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),S=null}let Te=new ff;Te.setAnimationLoop(de),this.setAnimationLoop=function(lt){De=lt},this.dispose=function(){}}},Ix=new Ge,vf=new he;vf.set(-1,0,0,0,1,0,0,0,1);function Lx(i,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function n(y,m){m.color.getRGB(y.fogColor.value,Uh(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function s(y,m,D,F,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(y,m):m.isMeshLambertMaterial?(r(y,m),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(y,m),M(y,m)):m.isMeshPhongMaterial?(r(y,m),p(y,m),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(y,m),d(y,m),m.isMeshPhysicalMaterial&&x(y,m,E)):m.isMeshMatcapMaterial?(r(y,m),S(y,m)):m.isMeshDepthMaterial?r(y,m):m.isMeshDistanceMaterial?(r(y,m),P(y,m)):m.isMeshNormalMaterial?r(y,m):m.isLineBasicMaterial?(o(y,m),m.isLineDashedMaterial&&c(y,m)):m.isPointsMaterial?u(y,m,D,F):m.isSpriteMaterial?h(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===mn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===mn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let D=t.get(m),F=D.envMap,E=D.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(E)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(vf),y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function o(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function c(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function u(y,m,D,F){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*D,y.scale.value=F*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function h(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function p(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function M(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function d(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function x(y,m,D){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.retroreflectivity>0&&(y.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,m){m.matcap&&(y.matcap.value=m.matcap)}function P(y,m){let D=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dx(i,t,e,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,I){let R=I.program;n.uniformBlockBinding(E,R)}function h(E,I){let R=s[E.id];R===void 0&&(y(E),R=p(E),s[E.id]=R,E.addEventListener("dispose",D));let B=I.program;n.updateUBOMapping(E,B);let b=t.render.frame;r[E.id]!==b&&(d(E),r[E.id]=b)}function p(E){let I=M();E.__bindingPointIndex=I;let R=i.createBuffer(),B=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,B,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,R),R}function M(){for(let E=0;E<c;E++)if(o.indexOf(E)===-1)return o.push(E),E;return oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let I=s[E.id],R=E.uniforms,B=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let b=0,U=R.length;b<U;b++){let H=R[b];if(Array.isArray(H))for(let W=0,q=H.length;W<q;W++)x(H[W],b,W,B);else x(H,b,0,B)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(E,I,R,B){if(P(E,I,R,B)===!0){let b=E.__offset,U=E.value;if(Array.isArray(U)){let H=0;for(let W=0;W<U.length;W++){let q=U[W],it=m(q);S(q,E.__data,H),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(U,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,E.__data)}}function S(E,I,R){typeof E=="number"||typeof E=="boolean"?I[0]=E:E.isMatrix3?(I[0]=E.elements[0],I[1]=E.elements[1],I[2]=E.elements[2],I[3]=0,I[4]=E.elements[3],I[5]=E.elements[4],I[6]=E.elements[5],I[7]=0,I[8]=E.elements[6],I[9]=E.elements[7],I[10]=E.elements[8],I[11]=0):ArrayBuffer.isView(E)?I.set(new E.constructor(E.buffer,E.byteOffset,I.length)):E.toArray(I,R)}function P(E,I,R,B){let b=E.value,U=I+"_"+R;if(B[U]===void 0)return typeof b=="number"||typeof b=="boolean"?B[U]=b:ArrayBuffer.isView(b)?B[U]=b.slice():B[U]=b.clone(),!0;{let H=B[U];if(typeof b=="number"||typeof b=="boolean"){if(H!==b)return B[U]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(H.equals(b)===!1)return H.copy(b),!0}}return!1}function y(E){let I=E.uniforms,R=0,B=16;for(let U=0,H=I.length;U<H;U++){let W=Array.isArray(I[U])?I[U]:[I[U]];for(let q=0,it=W.length;q<it;q++){let X=W[q],j=Array.isArray(X.value)?X.value:[X.value];for(let ot=0,st=j.length;ot<st;ot++){let mt=j[ot],et=m(mt),rt=R%B,pt=rt%et.boundary,Vt=rt+pt;R+=pt,Vt!==0&&B-Vt<et.storage&&(R+=B-Vt),X.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=R,R+=et.storage}}}let b=R%B;return b>0&&(R+=B-b),E.__size=R,E.__cache={},this}function m(E){let I={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(I.boundary=4,I.storage=4):E.isVector2?(I.boundary=8,I.storage=8):E.isVector3||E.isColor?(I.boundary=16,I.storage=12):E.isVector4?(I.boundary=16,I.storage=16):E.isMatrix3?(I.boundary=48,I.storage=48):E.isMatrix4?(I.boundary=64,I.storage=64):E.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(I.boundary=16,I.storage=E.byteLength):re("WebGLRenderer: Unsupported uniform value type.",E),I}function D(E){let I=E.target;I.removeEventListener("dispose",D);let R=o.indexOf(I.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function F(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:u,update:h,dispose:F}}var Nx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function Ux(){return Si===null&&(Si=new Ps(Nx,16,16,us,ai),Si.name="DFG_LUT",Si.minFilter=pn,Si.magFilter=pn,Si.wrapS=mi,Si.wrapT=mi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var ac=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:d=!1,outputBufferType:x=Un}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=o;let P=x,y=new Set([Sl,Ml,yl]),m=new Set([Un,ri,Mr,Sr,xl,vl]),D=new Uint32Array(4),F=new Int32Array(4),E=new tt,I=null,R=null,B=[],b=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,W=!1,q=null,it=null,X=null,j=null;this._outputColorSpace=Cn;let ot=0,st=0,mt=null,et=-1,rt=null,pt=new Ye,Vt=new Ye,jt=null,De=new pe(0),de=0,Te=e.width,lt=e.height,_t=1,Yt=null,le=null,zt=new Ye(0,0,Te,lt),me=new Ye(0,0,Te,lt),$e=!1,xe=new gr,Ce=!1,ve=!1,Qt=new Ge,We=new tt,ye=new Ye,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function je(){return mt===null?_t:1}let z=n;function St(w,G){return e.getContext(w,G)}let Gt,L,v,J,Q,ct,Tt,yt,ht,ut,wt,kt,It,Ct,Jt,ee,ce,V,Pt,dt,Et,Lt,bt;try{let w={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:M};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ue,!1),e.addEventListener("webglcontextrestored",Ie,!1),e.addEventListener("webglcontextcreationerror",gn,!1),z===null){let G="webgl2";if(z=St(G,w),z===null)throw St(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(w){throw e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",Ie,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),oe("WebGLRenderer: "+w.message),w}function Kt(){Gt=new Gg(z),Gt.init(),Et=new Cx(z,Gt),L=new Lg(z,Gt,t,Et),v=new Ax(z,Gt),L.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),it=z.createFramebuffer(),X=z.createFramebuffer(),j=z.createFramebuffer(),J=new Xg(z),Q=new dx,ct=new Ex(z,Gt,v,Q,L,Et,J),Tt=new Vg(H),yt=new Yp(z),Lt=new Pg(z,yt),ht=new Hg(z,yt,J,Lt),ut=new Yg(z,ht,yt,Lt,J),V=new qg(z,L,ct),Jt=new Dg(Q),wt=new ux(H,Tt,Gt,L,Lt,Jt),kt=new Lx(H,Q),It=new px,Ct=new yx(Gt),ce=new Rg(H,Tt,v,ut,S,u),ee=new wx(H,ut,L),bt=new Dx(z,J,L,v),Pt=new Ig(z,Gt,J),dt=new Wg(z,Gt,J),J.programs=wt.programs,H.capabilities=L,H.extensions=Gt,H.properties=Q,H.renderLists=It,H.shadowMap=ee,H.state=v,H.info=J}P!==Un&&(U=new Zg(P,e.width,e.height,c,s,r));let Zt=new Qh(H,z);this.xr=Zt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=Gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(Te,lt,!1))},this.getSize=function(w){return w.set(Te,lt)},this.setSize=function(w,G,$=!0){if(Zt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=w,lt=G,e.width=Math.floor(w*_t),e.height=Math.floor(G*_t),$===!0&&(e.style.width=w+"px",e.style.height=G+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(Te*_t,lt*_t).floor()},this.setDrawingBufferSize=function(w,G,$){Te=w,lt=G,_t=$,e.width=Math.floor(w*$),e.height=Math.floor(G*$),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(P===Un){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(pt)},this.getViewport=function(w){return w.copy(zt)},this.setViewport=function(w,G,$,Z){w.isVector4?zt.set(w.x,w.y,w.z,w.w):zt.set(w,G,$,Z),v.viewport(pt.copy(zt).multiplyScalar(_t).round())},this.getScissor=function(w){return w.copy(me)},this.setScissor=function(w,G,$,Z){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,G,$,Z),v.scissor(Vt.copy(me).multiplyScalar(_t).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(w){v.setScissorTest($e=w)},this.setOpaqueSort=function(w){Yt=w},this.setTransparentSort=function(w){le=w},this.getClearColor=function(w){return w.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,$=!0){let Z=0;if(w){let K=!1;if(mt!==null){let Dt=mt.texture.format;K=y.has(Dt)}if(K){let Dt=mt.texture.type,Ht=m.has(Dt),Rt=ce.getClearColor(),Wt=ce.getClearAlpha(),$t=Rt.r,ie=Rt.g,fe=Rt.b;Ht?(D[0]=$t,D[1]=ie,D[2]=fe,D[3]=Wt,z.clearBufferuiv(z.COLOR,0,D)):(F[0]=$t,F[1]=ie,F[2]=fe,F[3]=Wt,z.clearBufferiv(z.COLOR,0,F))}else Z|=z.COLOR_BUFFER_BIT}G&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),q=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",Ie,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),ce.dispose(),It.dispose(),Ct.dispose(),Q.dispose(),Tt.dispose(),ut.dispose(),Lt.dispose(),bt.dispose(),wt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Pr),Zt.removeEventListener("sessionend",Ha),Ti.stop()};function Ue(w){w.preventDefault(),Nh("WebGLRenderer: Context Lost."),W=!0}function Ie(){Nh("WebGLRenderer: Context Restored."),W=!1;let w=J.autoReset,G=ee.enabled,$=ee.autoUpdate,Z=ee.needsUpdate,K=ee.type;Kt(),J.autoReset=w,ee.enabled=G,ee.autoUpdate=$,ee.needsUpdate=Z,ee.type=K}function gn(w){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Gn(w){let G=w.target;G.removeEventListener("dispose",Gn),Cr(G)}function Cr(w){Rr(w),Q.remove(w)}function Rr(w){let G=Q.get(w).programs;G!==void 0&&(G.forEach(function($){wt.releaseProgram($)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,$,Z,K,Dt){G===null&&(G=Be);let Ht=K.isMesh&&K.matrixWorld.determinantAffine()<0,Rt=nn(w,G,$,Z,K);v.setMaterial(Z,Ht);let Wt=$.index,$t=1;if(Z.wireframe===!0){if(Wt=ht.getWireframeAttribute($),Wt===void 0)return;$t=2}let ie=$.drawRange,fe=$.attributes.position,qt=ie.start*$t,Le=(ie.start+ie.count)*$t;Dt!==null&&(qt=Math.max(qt,Dt.start*$t),Le=Math.min(Le,(Dt.start+Dt.count)*$t)),Wt!==null?(qt=Math.max(qt,0),Le=Math.min(Le,Wt.count)):fe!=null&&(qt=Math.max(qt,0),Le=Math.min(Le,fe.count));let Je=Le-qt;if(Je<0||Je===1/0)return;Lt.setup(K,Z,Rt,$,Wt);let ke,ze=Pt;if(Wt!==null&&(ke=yt.get(Wt),ze=dt,ze.setIndex(ke)),K.isMesh)Z.wireframe===!0?(v.setLineWidth(Z.wireframeLinewidth*je()),ze.setMode(z.LINES)):ze.setMode(z.TRIANGLES);else if(K.isLine){let sn=Z.linewidth;sn===void 0&&(sn=1),v.setLineWidth(sn*je()),K.isLineSegments?ze.setMode(z.LINES):K.isLineLoop?ze.setMode(z.LINE_LOOP):ze.setMode(z.LINE_STRIP)}else K.isPoints?ze.setMode(z.POINTS):K.isSprite&&ze.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))ze.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let sn=K._multiDrawStarts,Bt=K._multiDrawCounts,Qe=K._multiDrawCount,we=Wt?yt.get(Wt).bytesPerElement:1,In=Q.get(Z).currentProgram.getUniforms();for(let Hn=0;Hn<Qe;Hn++)In.setValue(z,"_gl_DrawID",Hn),ze.render(sn[Hn]/we,Bt[Hn])}else if(K.isInstancedMesh)ze.renderInstances(qt,Je,K.count);else if($.isInstancedBufferGeometry){let sn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Bt=Math.min($.instanceCount,sn);ze.renderInstances(qt,Je,Bt)}else ze.render(qt,Je)};function oi(w,G,$,Z){q!==null&&w.isNodeMaterial&&q.setObject(Z,w),Ce===!0&&Jt.setState(w,$,!1),w.transparent===!0&&w.side===yi&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,Pn(w,G,Z),w.side=os,w.needsUpdate=!0,Pn(w,G,Z),w.side=yi):Pn(w,G,Z)}this.compile=function(w,G,$=null){$===null&&($=w),q!==null&&q.renderStart(w,G,$),R=Ct.get($),R.init(G),b.push(R),$.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(R.pushLight(K),K.castShadow&&R.pushShadow(K))}),w!==$&&w.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(R.pushLight(K),K.castShadow&&R.pushShadow(K))}),R.setupLights(),q!==null&&q.updateLights(R.state.lightsArray),ve=this.localClippingEnabled,Ce=Jt.init(this.clippingPlanes,ve),Ce===!0&&Jt.setGlobalState(this.clippingPlanes,G),q!==null&&ee.render(R.state.shadowsArray,$,G);let Z=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let Ht=0;Ht<Dt.length;Ht++){let Rt=Dt[Ht];oi(Rt,$,G,K),Z.add(Rt)}else oi(Dt,$,G,K),Z.add(Dt)}),R=b.pop(),q!==null&&q.renderEnd(),Z},this.compileAsync=function(w,G,$=null){let Z=this.compile(w,G,$);return new Promise(K=>{function Dt(){if(Z.forEach(function(Ht){let Wt=Q.get(Ht).currentProgram;(Wt===void 0||Wt.isReady())&&Z.delete(Ht)}),Z.size===0){K(w);return}setTimeout(Dt,10)}Gt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let ds=null;function Ga(w){ds&&ds(w)}function Pr(){Ti.stop()}function Ha(){Ti.start()}let Ti=new ff;Ti.setAnimationLoop(Ga),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(w){ds=w,Zt.setAnimationLoop(w),w===null?Ti.stop():Ti.start()},Zt.addEventListener("sessionstart",Pr),Zt.addEventListener("sessionend",Ha),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;q!==null&&q.renderStart(w,G);let $=Zt.enabled===!0&&Zt.isPresenting===!0,Z=U!==null&&(mt===null||$)&&U.begin(H,mt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(G),G=Zt.getCamera()),w.isScene===!0&&w.onBeforeRender(H,w,G,mt),R=Ct.get(w,b.length),R.init(G),R.state.textureUnits=ct.getTextureUnits(),b.push(R),Qt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),xe.setFromProjectionMatrix(Qt,ii,G.reversedDepth),ve=this.localClippingEnabled,Ce=Jt.init(this.clippingPlanes,ve),I=It.get(w,B.length),I.init(),B.push(I),Zt.enabled===!0&&Zt.isPresenting===!0){let Ht=H.xr.getDepthSensingMesh();Ht!==null&&Oi(Ht,G,-1/0,H.sortObjects)}Oi(w,G,0,H.sortObjects),I.finish(),q!==null&&q.updateLights(R.state.lightsArray),H.sortObjects===!0&&I.sort(Yt,le),qe=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,qe&&ce.addToRenderList(I,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&Jt.beginShadows();let K=R.state.shadowsArray;if(ee.render(K,w,G),Ce===!0&&Jt.endShadows(),(Z&&U.hasRenderPass())===!1){let Ht=I.opaque,Rt=I.transmissive;if(R.setupLights(),G.isArrayCamera){let Wt=G.cameras;if(Rt.length>0)for(let $t=0,ie=Wt.length;$t<ie;$t++){let fe=Wt[$t];ne(Ht,Rt,w,fe)}qe&&ce.render(w);for(let $t=0,ie=Wt.length;$t<ie;$t++){let fe=Wt[$t];Wa(I,w,fe,fe.viewport)}}else Rt.length>0&&ne(Ht,Rt,w,G),qe&&ce.render(w),Wa(I,w,G)}mt!==null&&st===0&&(ct.updateMultisampleRenderTarget(mt),ct.updateRenderTargetMipmap(mt)),Z&&U.end(H),w.isScene===!0&&w.onAfterRender(H,w,G),Lt.resetDefaultState(),et=-1,rt=null,b.pop(),b.length>0?(R=b[b.length-1],ct.setTextureUnits(R.state.textureUnits),Ce===!0&&Jt.setGlobalState(H.clippingPlanes,R.state.camera)):R=null,B.pop(),B.length>0?I=B[B.length-1]:I=null,q!==null&&q.renderEnd()};function Oi(w,G,$,Z){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)R.pushLightProbeGrid(w);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(xe)){Z&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Qt);let Ht=ut.update(w),Rt=w.material;Rt.visible&&I.push(w,Ht,Rt,$,ye.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(xe))){let Ht=ut.update(w),Rt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ye.copy(w.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),ye.copy(Ht.boundingSphere.center)),ye.applyMatrix4(w.matrixWorld).applyMatrix4(Qt)),Array.isArray(Rt)){let Wt=Ht.groups;for(let $t=0,ie=Wt.length;$t<ie;$t++){let fe=Wt[$t],qt=Rt[fe.materialIndex];qt&&qt.visible&&I.push(w,Ht,qt,$,ye.z,fe,G)}}else Rt.visible&&I.push(w,Ht,Rt,$,ye.z,null,G)}}let Dt=w.children;for(let Ht=0,Rt=Dt.length;Ht<Rt;Ht++)Oi(Dt[Ht],G,$,Z)}function Wa(w,G,$,Z){let{opaque:K,transmissive:Dt,transparent:Ht}=w;R.setupLightsView($),Ce===!0&&Jt.setGlobalState(H.clippingPlanes,$),Z&&v.viewport(pt.copy(Z)),K.length>0&&Ke(K,G,$),Dt.length>0&&Ke(Dt,G,$),Ht.length>0&&Ke(Ht,G,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ne(w,G,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Z.id]===void 0){let qt=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Z.id]=new Nn(1,1,{generateMipmaps:!0,type:qt?ai:Un,minFilter:cs,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}let Dt=R.state.transmissionRenderTarget[Z.id],Ht=Z.viewport||pt;Dt.setSize(Ht.z*H.transmissionResolutionScale,Ht.w*H.transmissionResolutionScale);let Rt=H.getRenderTarget(),Wt=H.getActiveCubeFace(),$t=H.getActiveMipmapLevel();H.setRenderTarget(Dt),H.getClearColor(De),de=H.getClearAlpha(),de<1&&H.setClearColor(16777215,.5),H.clear(),qe&&ce.render($);let ie=H.toneMapping;H.toneMapping=si;let fe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),R.setupLightsView(Z),Ce===!0&&Jt.setGlobalState(H.clippingPlanes,Z),Ke(w,$,Z),ct.updateMultisampleRenderTarget(Dt),ct.updateRenderTargetMipmap(Dt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Le=0,Je=G.length;Le<Je;Le++){let ke=G[Le],{object:ze,geometry:sn,material:Bt,group:Qe}=ke;if(Bt.side===yi&&ze.layers.test(Z.layers)){let we=Bt.side;Bt.side=mn,Bt.needsUpdate=!0,Ir(ze,$,Z,sn,Bt,Qe),Bt.side=we,Bt.needsUpdate=!0,qt=!0}}qt===!0&&(ct.updateMultisampleRenderTarget(Dt),ct.updateRenderTargetMipmap(Dt))}H.setRenderTarget(Rt,Wt,$t),H.setClearColor(De,de),fe!==void 0&&(Z.viewport=fe),H.toneMapping=ie}function Ke(w,G,$){let Z=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Dt=w.length;K<Dt;K++){let Ht=w[K],{object:Rt,geometry:Wt,group:$t}=Ht,ie=Ht.material;ie.allowOverride===!0&&Z!==null&&(ie=Z),Rt.layers.test($.layers)&&Ir(Rt,G,$,Wt,ie,$t)}}function Ir(w,G,$,Z,K,Dt){q!==null&&K.isNodeMaterial&&q.setObject(w,K),w.onBeforeRender(H,G,$,Z,K,Dt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(H,G,$,Z,w,Dt),K.transparent===!0&&K.side===yi&&K.forceSinglePass===!1?(K.side=mn,K.needsUpdate=!0,H.renderBufferDirect($,G,Z,K,w,Dt),K.side=os,K.needsUpdate=!0,H.renderBufferDirect($,G,Z,K,w,Dt),K.side=yi):H.renderBufferDirect($,G,Z,K,w,Dt),w.onAfterRender(H,G,$,Z,K,Dt)}function Pn(w,G,$){G.isScene!==!0&&(G=Be);let Z=Q.get(w),K=R.state.lights,Dt=R.state.shadowsArray,Ht=K.state.version,Rt=wt.getParameters(w,K.state,Dt,G,$,R.state.lightProbeGridArray),Wt=wt.getProgramCacheKey(Rt),$t=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;let ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=Tt.get(w.envMap||Z.environment,ie),Z.envMapRotation=Z.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",Gn),$t=new Map,Z.programs=$t);let fe=$t.get(Wt);if(fe!==void 0){if(Z.currentProgram===fe&&Z.lightsStateVersion===Ht)return Pe(w,Rt),fe}else Rt.uniforms=wt.getUniforms(w),q!==null&&w.isNodeMaterial&&q.build(w,$,Rt),w.onBeforeCompile(Rt,H),fe=wt.acquireProgram(Rt,Wt),$t.set(Wt,fe),Z.uniforms=Rt.uniforms;let qt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=Jt.uniform),Pe(w,Rt),Z.needsLights=Dr(w),Z.lightsStateVersion=Ht,Z.needsLights&&(qt.ambientLightColor.value=K.state.ambient,qt.lightProbe.value=K.state.probe,qt.sunLights.value=K.state.sun,qt.sunLightShadows.value=K.state.sunShadow,qt.directionalLights.value=K.state.directional,qt.directionalLightShadows.value=K.state.directionalShadow,qt.spotLights.value=K.state.spot,qt.spotLightShadows.value=K.state.spotShadow,qt.rectAreaLights.value=K.state.rectArea,qt.ltc_1.value=K.state.rectAreaLTC1,qt.ltc_2.value=K.state.rectAreaLTC2,qt.pointLights.value=K.state.point,qt.pointLightShadows.value=K.state.pointShadow,qt.hemisphereLights.value=K.state.hemi,qt.sunShadowMatrix.value=K.state.sunShadowMatrix,qt.sunShadowCascade.value=K.state.sunShadowCascade,qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qt.spotLightMatrix.value=K.state.spotLightMatrix,qt.spotLightMap.value=K.state.spotLightMap,qt.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.lightProbeGrid=R.state.lightProbeGridArray.length>0,Z.currentProgram=fe,Z.uniformsList=null,fe}function fn(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=Ar.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Pe(w,G){let $=Q.get(w);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Lr(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;E.setFromMatrixPosition(G.matrixWorld);for(let $=0,Z=w.length;$<Z;$++){let K=w[$];if(K.texture!==null&&K.boundingBox.containsPoint(E))return K}return null}function nn(w,G,$,Z,K){G.isScene!==!0&&(G=Be),ct.resetTextureUnits();let Dt=G.fog,Ht=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,Rt=mt===null?H.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:be.workingColorSpace,Wt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,$t=Tt.get(Z.envMap||Ht,Wt),ie=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,fe=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qt=!!$.morphAttributes.position,Le=!!$.morphAttributes.normal,Je=!!$.morphAttributes.color,ke=si;Z.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ke=H.toneMapping);let ze=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,sn=ze!==void 0?ze.length:0,Bt=Q.get(Z),Qe=R.state.lights;if(Ce===!0&&(ve===!0||w!==rt)){let Ve=w===rt&&Z.id===et;Jt.setState(Z,w,Ve)}let we=!1;Z.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Qe.state.version||Bt.outputColorSpace!==Rt||K.isBatchedMesh&&Bt.batching===!1||!K.isBatchedMesh&&Bt.batching===!0||K.isBatchedMesh&&Bt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Bt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Bt.instancing===!1||!K.isInstancedMesh&&Bt.instancing===!0||K.isSkinnedMesh&&Bt.skinning===!1||!K.isSkinnedMesh&&Bt.skinning===!0||K.isInstancedMesh&&Bt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Bt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Bt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Bt.instancingMorph===!1&&K.morphTexture!==null||Bt.envMap!==$t||Z.fog===!0&&Bt.fog!==Dt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Jt.numPlanes||Bt.numIntersection!==Jt.numIntersection)||Bt.vertexAlphas!==ie||Bt.vertexTangents!==fe||Bt.morphTargets!==qt||Bt.morphNormals!==Le||Bt.morphColors!==Je||Bt.toneMapping!==ke||Bt.morphTargetsCount!==sn||!!Bt.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Bt.__version=Z.version);let In=Bt.currentProgram;we===!0&&(In=Pn(Z,G,K),q&&Z.isNodeMaterial&&q.onUpdateProgram(Z,In,Bt));let Hn=!1,li=!1,zi=!1,Fe=In.getUniforms(),Ze=Bt.uniforms;if(v.useProgram(In.program)&&(Hn=!0,li=!0,zi=!0),Z.id!==et&&(et=Z.id,li=!0),Bt.needsLights){let Ve=Lr(R.state.lightProbeGridArray,K);Bt.lightProbeGrid!==Ve&&(Bt.lightProbeGrid=Ve,li=!0)}if(Hn||rt!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Fe.setValue(z,"projectionMatrix",w.projectionMatrix),Fe.setValue(z,"viewMatrix",w.matrixWorldInverse);let hi=Fe.map.cameraPosition;hi!==void 0&&hi.setValue(z,We.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&Fe.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Fe.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),rt!==w&&(rt=w,li=!0,zi=!0)}if(Bt.needsLights&&(Qe.state.sunShadowMap.length>0&&Fe.setValue(z,"sunShadowMap",Qe.state.sunShadowMap,ct),Qe.state.directionalShadowMap.length>0&&Fe.setValue(z,"directionalShadowMap",Qe.state.directionalShadowMap,ct),Qe.state.spotShadowMap.length>0&&Fe.setValue(z,"spotShadowMap",Qe.state.spotShadowMap,ct),Qe.state.pointShadowMap.length>0&&Fe.setValue(z,"pointShadowMap",Qe.state.pointShadowMap,ct)),K.isSkinnedMesh){Fe.setOptional(z,K,"bindMatrix"),Fe.setOptional(z,K,"bindMatrixInverse");let Ve=K.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Fe.setValue(z,"boneTexture",Ve.boneTexture,ct))}K.isBatchedMesh&&(Fe.setOptional(z,K,"batchingTexture"),Fe.setValue(z,"batchingTexture",K._matricesTexture,ct),Fe.setOptional(z,K,"batchingIdTexture"),Fe.setValue(z,"batchingIdTexture",K._indirectTexture,ct),Fe.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Fe.setValue(z,"batchingColorTexture",K._colorsTexture,ct));let ci=$.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&V.update(K,$,In),(li||Bt.receiveShadow!==K.receiveShadow)&&(Bt.receiveShadow=K.receiveShadow,Fe.setValue(z,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(Ze.envMapIntensity.value=G.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=Ux()),li){if(Fe.setValue(z,"toneMappingExposure",H.toneMappingExposure),Bt.needsLights&&Bi(Ze,zi),Dt&&Z.fog===!0&&kt.refreshFogUniforms(Ze,Dt),kt.refreshMaterialUniforms(Ze,Z,_t,lt,R.state.transmissionRenderTarget[w.id]),Bt.needsLights&&Bt.lightProbeGrid){let Ve=Bt.lightProbeGrid;Ze.probesSH.value=Ve.texture,Ze.probesMin.value.copy(Ve.boundingBox.min),Ze.probesMax.value.copy(Ve.boundingBox.max),Ze.probesResolution.value.copy(Ve.resolution)}Ar.upload(z,fn(Bt),Ze,ct)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ar.upload(z,fn(Bt),Ze,ct),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Fe.setValue(z,"center",K.center),Fe.setValue(z,"modelViewMatrix",K.modelViewMatrix),Fe.setValue(z,"normalMatrix",K.normalMatrix),Fe.setValue(z,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Ve=Z.uniformsGroups;for(let hi=0,ki=Ve.length;hi<ki;hi++){let Xa=Ve[hi];bt.update(Xa,In),bt.bind(Xa,In)}}return In}function Bi(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Dr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return mt},this.setRenderTargetTextures=function(w,G,$){let Z=Q.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Q.get(w.texture).__webglTexture=G,Q.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:$,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let $=Q.get(w);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,$=0){mt=w,ot=G,st=$;let Z=null,K=!1,Dt=!1;if(w){let Rt=Q.get(w);if(Rt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(z.FRAMEBUFFER,Rt.__webglFramebuffer),pt.copy(w.viewport),Vt.copy(w.scissor),jt=w.scissorTest,v.viewport(pt),v.scissor(Vt),v.setScissorTest(jt),et=-1;return}else if(Rt.__webglFramebuffer===void 0)ct.setupRenderTarget(w);else if(Rt.__hasExternalTextures)ct.rebindTextures(w,Q.get(w.texture).__webglTexture,Q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ie=w.depthTexture;if(Rt.__boundDepthTexture!==ie){if(ie!==null&&Q.has(ie)&&(w.width!==ie.image.width||w.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(w)}}let Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);let $t=Q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($t[G])?Z=$t[G][$]:Z=$t[G],K=!0):w.samples>0&&ct.useMultisampledRTT(w)===!1?Z=Q.get(w).__webglMultisampledFramebuffer:Array.isArray($t)?Z=$t[$]:Z=$t,pt.copy(w.viewport),Vt.copy(w.scissor),jt=w.scissorTest}else pt.copy(zt).multiplyScalar(_t).floor(),Vt.copy(me).multiplyScalar(_t).floor(),jt=$e;if($!==0&&(Z=it),v.bindFramebuffer(z.FRAMEBUFFER,Z)&&v.drawBuffers(w,Z),v.viewport(pt),v.scissor(Vt),v.setScissorTest(jt),K){let Rt=Q.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Rt.__webglTexture,$)}else if(Dt){let Rt=G;for(let Wt=0;Wt<w.textures.length;Wt++){let $t=Q.get(w.textures[Wt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Wt,$t.__webglTexture,$,Rt)}}else if(w!==null&&$!==0){let Rt=Q.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Rt.__webglTexture,$)}et=-1};function Nr(w){let G=Q.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=L.textureFormatReadable(w.format),G.__typeReadable=L.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,$,Z,K,Dt,Ht,Rt=0){if(!(w&&w.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Wt=Wt[Ht]),Wt){v.bindFramebuffer(z.FRAMEBUFFER,Wt);try{let $t=w.textures[Rt],ie=$t.format,fe=$t.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt);let qt=Nr($t);if(qt.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-Z&&$>=0&&$<=w.height-K&&z.readPixels(G,$,Z,K,Et.convert(ie),Et.convert(fe),Dt)}finally{let $t=mt!==null?Q.get(mt).__webglFramebuffer:null;v.bindFramebuffer(z.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(w,G,$,Z,K,Dt,Ht,Rt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Wt=Wt[Ht]),Wt)if(G>=0&&G<=w.width-Z&&$>=0&&$<=w.height-K){v.bindFramebuffer(z.FRAMEBUFFER,Wt);let $t=w.textures[Rt],ie=$t.format,fe=$t.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt);let qt=Nr($t);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Le),z.bufferData(z.PIXEL_PACK_BUFFER,Dt.byteLength,z.STREAM_READ),z.readPixels(G,$,Z,K,Et.convert(ie),Et.convert(fe),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Je=mt!==null?Q.get(mt).__webglFramebuffer:null;v.bindFramebuffer(z.FRAMEBUFFER,Je);let ke=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await zd(z,ke,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Le),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Dt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Le),z.deleteSync(ke),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,$=0){let Z=Math.pow(2,-$),K=Math.floor(w.image.width*Z),Dt=Math.floor(w.image.height*Z),Ht=G!==null?G.x:0,Rt=G!==null?G.y:0;ct.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,Ht,Rt,K,Dt),v.unbindTexture()},this.copyTextureToTexture=function(w,G,$=null,Z=null,K=0,Dt=0){let Ht,Rt,Wt,$t,ie,fe,qt,Le,Je,ke=w.isCompressedTexture?w.mipmaps[Dt]:w.image;if($!==null)Ht=$.max.x-$.min.x,Rt=$.max.y-$.min.y,Wt=$.isBox3?$.max.z-$.min.z:1,$t=$.min.x,ie=$.min.y,fe=$.isBox3?$.min.z:0;else{let Ze=Math.pow(2,-K);Ht=Math.floor(ke.width*Ze),Rt=Math.floor(ke.height*Ze),w.isDataArrayTexture?Wt=ke.depth:w.isData3DTexture?Wt=Math.floor(ke.depth*Ze):Wt=1,$t=0,ie=0,fe=0}Z!==null?(qt=Z.x,Le=Z.y,Je=Z.z):(qt=0,Le=0,Je=0);let ze=Et.convert(G.format),sn=Et.convert(G.type),Bt;G.isData3DTexture?(ct.setTexture3D(G,0),Bt=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ct.setTexture2DArray(G,0),Bt=z.TEXTURE_2D_ARRAY):(ct.setTexture2D(G,0),Bt=z.TEXTURE_2D),v.activeTexture(z.TEXTURE0),v.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),v.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),v.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);let Qe=v.getParameter(z.UNPACK_ROW_LENGTH),we=v.getParameter(z.UNPACK_IMAGE_HEIGHT),In=v.getParameter(z.UNPACK_SKIP_PIXELS),Hn=v.getParameter(z.UNPACK_SKIP_ROWS),li=v.getParameter(z.UNPACK_SKIP_IMAGES);v.pixelStorei(z.UNPACK_ROW_LENGTH,ke.width),v.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ke.height),v.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),v.pixelStorei(z.UNPACK_SKIP_ROWS,ie),v.pixelStorei(z.UNPACK_SKIP_IMAGES,fe);let zi=w.isDataArrayTexture||w.isData3DTexture,Fe=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let Ze=Q.get(w),ci=Q.get(G),Ve=Q.get(Ze.__renderTarget),hi=Q.get(ci.__renderTarget);v.bindFramebuffer(z.READ_FRAMEBUFFER,Ve.__webglFramebuffer),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ki=0;ki<Wt;ki++)zi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Q.get(w).__webglTexture,K,fe+ki),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Q.get(G).__webglTexture,Dt,Je+ki)),z.blitFramebuffer($t,ie,Ht,Rt,qt,Le,Ht,Rt,z.DEPTH_BUFFER_BIT,z.NEAREST);v.bindFramebuffer(z.READ_FRAMEBUFFER,null),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||Q.has(w)){let Ze=Q.get(w),ci=Q.get(G);v.bindFramebuffer(z.READ_FRAMEBUFFER,X),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,j);for(let Ve=0;Ve<Wt;Ve++)zi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ze.__webglTexture,K,fe+Ve):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ze.__webglTexture,K),Fe?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ci.__webglTexture,Dt,Je+Ve):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ci.__webglTexture,Dt),K!==0?z.blitFramebuffer($t,ie,Ht,Rt,qt,Le,Ht,Rt,z.COLOR_BUFFER_BIT,z.NEAREST):Fe?z.copyTexSubImage3D(Bt,Dt,qt,Le,Je+Ve,$t,ie,Ht,Rt):z.copyTexSubImage2D(Bt,Dt,qt,Le,$t,ie,Ht,Rt);v.bindFramebuffer(z.READ_FRAMEBUFFER,null),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Fe?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Bt,Dt,qt,Le,Je,Ht,Rt,Wt,ze,sn,ke.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(Bt,Dt,qt,Le,Je,Ht,Rt,Wt,ze,ke.data):z.texSubImage3D(Bt,Dt,qt,Le,Je,Ht,Rt,Wt,ze,sn,ke):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Dt,qt,Le,Ht,Rt,ze,sn,ke.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Dt,qt,Le,ke.width,ke.height,ze,ke.data):z.texSubImage2D(z.TEXTURE_2D,Dt,qt,Le,Ht,Rt,ze,sn,ke);v.pixelStorei(z.UNPACK_ROW_LENGTH,Qe),v.pixelStorei(z.UNPACK_IMAGE_HEIGHT,we),v.pixelStorei(z.UNPACK_SKIP_PIXELS,In),v.pixelStorei(z.UNPACK_SKIP_ROWS,Hn),v.pixelStorei(z.UNPACK_SKIP_IMAGES,li),Dt===0&&G.generateMipmaps&&z.generateMipmap(Bt),v.unbindTexture()},this.initRenderTarget=function(w){Q.get(w).__webglFramebuffer===void 0&&ct.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ct.setTextureCube(w,0):w.isData3DTexture?ct.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ct.setTexture2DArray(w,0):ct.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){ot=0,st=0,mt=null,v.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};function yf(i){let t;try{let b=i.getContext("webgl2",{antialias:!0,alpha:!1});if(!b)return null;t=new ac({canvas:i,context:b,antialias:!0,alpha:!1,powerPreference:"default"})}catch{return null}t.outputColorSpace=Cn,t.toneMapping=Ra,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=fl,t.setPixelRatio(Math.min(devicePixelRatio||1,1.5));let e=new da;e.fog=new ua("#cbddec",125,460);let n=new yn(62,1,.12,850),s=new wa("#e7f4ff","#a08ba5",2.2),r=new Ea("#fff0de",2.4);r.position.set(-30,60,25),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-55,right:55,top:45,bottom:-45,near:1,far:160}),r.shadow.bias=-4e-4,e.add(s,r,r.target);let o=new Ps(new Uint8Array([95,145,195,245]),4,1,br);o.minFilter=en,o.magFilter=en,o.needsUpdate=!0;let c=new Map,u=new Ge,h=new Map,p=new Map,M=new Sn(new Ma(650,16,8),new Rn({side:mn,depthWrite:!1,uniforms:{top:{value:new pe("#8fbee6")},bottom:{value:new pe("#f0e8f0")}},vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vDirection;uniform vec3 top,bottom;void main(){float h=smoothstep(-.05,.8,normalize(vDirection).y);gl_FragColor=vec4(mix(bottom,top,h),1.0);}"}));M.renderOrder=-100,e.add(M);let d=1,x=0,S=0,P=0,y=0,m=16.7,D=0,F=0,E=2,I=["low","medium","high"];function R(b,U){b.renderId||(b.renderId=d++);let H=b.renderId+":"+(b.paintable&&U?U:"");if(p.has(H))return p.get(H);let W=b.sourceData,q=[],it=[],X=[],j=U?new pe(U):null;for(let st=0;st<W.length;st+=10){q.push(W[st],W[st+1],W[st+2]),it.push(W[st+3],W[st+4],W[st+5]);let mt=W[st+6],et=W[st+7],rt=W[st+8],pt=b.paintable&&j&&et-mt>.14&&rt-mt>.2;X.push(pt?j.r:mt,pt?j.g:et,pt?j.b:rt)}let ot=new kn;return ot.setAttribute("position",new ln(q,3)),ot.setAttribute("normal",new ln(it,3)),ot.setAttribute("color",new ln(X,3)),ot.setIndex(Array.from(b.sourceIndices)),ot.computeBoundingSphere(),p.set(H,ot),b.onDispose=()=>{for(let[st,mt]of p)if(st.startsWith(b.renderId+":")){for(let[et,rt]of c)rt.geometry===mt&&(e.remove(rt),rt.dispose(),c.delete(et));mt.dispose(),p.delete(st)}},ot}function B(b,U,H,W,q,it={}){let X=performance.now();if(y){let mt=X-y;mt<100&&(m+=(mt-m)*.035)}y=X,it.quality==="auto"&&(m>23?(D++,F=0):m<16.9?(F++,D=0):(D=0,F=0),D>90&&E>0&&(E--,D=0),F>360&&E<2&&(E++,F=0));let j=it.quality==="auto"?I[E]:it.quality,ot=j==="low"?1:j==="medium"?1.2:Math.min(devicePixelRatio||1,1.5);ot!==P&&(t.setPixelRatio(ot),P=ot),(H!==x||W!==S)&&(t.setSize(H,W,!1),x=H,S=W),n.aspect=H/W,n.fov=q,n.updateProjectionMatrix(),n.position.fromArray(U.eye),n.lookAt(new tt(...U.target)),M.position.copy(n.position);let st=new Map;for(let mt of b){if(!mt.mesh.sourceIndices.length)continue;let et=R(mt.mesh,mt.tint),rt=mt.opacity??1,pt=et.uuid+":"+mt.shadow+":"+rt,Vt=st.get(pt);Vt||(Vt={geometry:et,shadow:mt.shadow,opacity:rt,items:[]},st.set(pt,Vt)),Vt.items.push(mt)}for(let mt of c.values())mt.visible=!1;for(let[mt,et]of st){let rt=c.get(mt);if(!rt||rt.instanceMatrix.count<et.items.length){rt&&(e.remove(rt),rt.dispose());let pt=h.get(et.opacity);pt||(pt=new Sa({vertexColors:!0,gradientMap:o,transparent:et.opacity<1,opacity:et.opacity,depthWrite:et.opacity>=1}),h.set(et.opacity,pt)),rt=new _a(et.geometry,pt,Math.max(4,et.items.length+8)),rt.instanceMatrix.setUsage(Lh),rt.frustumCulled=!0,rt.receiveShadow=et.opacity>=1,e.add(rt),c.set(mt,rt)}rt.count=et.items.length,rt.castShadow=et.shadow&&j!=="low",rt.visible=!0;for(let pt=0;pt<et.items.length;pt++)u.fromArray(et.items[pt].m),rt.setMatrixAt(pt,u);rt.instanceMatrix.needsUpdate=!0,rt.computeBoundingSphere()}return t.shadowMap.enabled=j!=="low",t.render(e,n),{drawCalls:t.info.render.calls,triangles:t.info.render.triangles,effectiveQuality:j}}return{render:B,renderer:t,scene:e}}function Mf(i,t){for(let e of i.querySelectorAll("#trackPicker [data-track]")){let n=t[e.dataset.track];if(!n||e.querySelector(".course-art"))continue;let s=i.createElement("img");s.className="course-art",s.alt="",s.setAttribute("aria-hidden","true"),s.draggable=!1,s.decoding="async",s.hidden=!0,s.width=512,s.height=256,s.onload=()=>{s.hidden=!1,e.dataset.art="ready"},s.onerror=()=>{s.remove(),delete e.dataset.art},e.prepend(s),s.src=n}}(()=>{"use strict";let i=document.getElementById("scene"),t=document.getElementById("error"),e=document.getElementById("loading");function n(u){t.hidden=!1,document.getElementById("error-text").textContent=u,e.classList.add("done")}let s={light:"/assets/impact-audio/rail-light-v2.e9daa5ac2bd3.wav",medium:"/assets/impact-audio/rail-medium-v2.9e322b68b6d0.wav"},r=yf(i),o=!r,c=o?i.getContext("2d"):null;try{let u=function(a){let l=c,f=i.width,g=i.height;l.setTransform(1,0,0,1,0,0);let T=l.createLinearGradient(0,0,0,g);T.addColorStop(0,"#96c8ee"),T.addColorStop(.62,"#f2e6ee"),T.addColorStop(.63,"#cbd8c1"),T.addColorStop(1,"#bdcdb8"),l.fillStyle=T,l.fillRect(0,0,f,g);let A=a.eye,C=a.target,O=D(x(C,A)),k=D(y(O,[0,1,0])),Y=y(k,O),at=g/(2*Math.tan(Os*Math.PI/360)),xt=gt=>{let vt=x(gt,A),Ut=P(vt,O);return Ut<.25?null:[f/2+P(vt,k)*at/Ut,g/2-P(vt,Y)*at/Ut,Ut,at/Ut]},ft=(gt,vt)=>{let Ut=gt.map(xt);Ut.some(Xt=>!Xt)||(l.fillStyle=vt,l.beginPath(),Ut.forEach((Xt,Ot)=>Ot?l.lineTo(Xt[0],Xt[1]):l.moveTo(Xt[0],Xt[1])),l.closePath(),l.fill())},Mt=gt=>x(gt,a.origin),At=[];for(let gt=-40;gt<240;gt+=5){let vt=_.s+gt,Ut=Me(vt),Xt=Me(vt+5);At.push({d:gt,a:Ut,b:Xt})}for(let gt of At.reverse()){let vt=(Ut,Xt,Ot)=>Mt(d(d(Ut.p,S(Ut.R,Xt)),[0,Ot,0]));if(ft([vt(gt.a,-10,0),vt(gt.a,10,0),vt(gt.b,10,0),vt(gt.b,-10,0)],"#e3dce5"),ft([vt(gt.a,-7,.05),vt(gt.a,7,.05),vt(gt.b,7,.05),vt(gt.b,-7,.05)],"#7b829a"),Math.floor(gt.d/5)%2===0)for(let Ut of[-2.3,2.3])ft([vt(gt.a,Ut-.04,.06),vt(gt.a,Ut+.04,.06),vt(gt.b,Ut+.04,.06),vt(gt.b,Ut-.04,.06)],"#e9edf1");for(let Ut of[-1,1])ft([vt(gt.a,Ut*8.1,.4),vt(gt.a,Ut*8.1,.8),vt(gt.b,Ut*8.1,.8),vt(gt.b,Ut*8.1,.4)],"#c0cfe2")}let Nt=[];for(let gt=0;gt<210;gt+=20)for(let vt of[-1,1]){let Ut=Ne(Math.floor((_.s+gt)/20)*20,vt*12,0),Xt=xt(Mt(Ut));Xt&&Nt.push({q:Xt,side:vt,ds:gt,pos:Ut})}for(let gt of Nt.sort((vt,Ut)=>Ut.q[2]-vt.q[2])){let[vt,Ut,,Xt]=gt.q;l.fillStyle="#a78a95",l.fillRect(vt-Xt*.12,Ut-Xt*3.5,Xt*.24,Xt*3.5);for(let Ot=0;Ot<4;Ot++)l.fillStyle=Ot%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(vt+Math.sin(Ot*2)*Xt,Ut-Xt*(3.3+Ot*.3),Xt*1.6,Xt*1.1,0,0,p),l.fill();if(gt.ds%40===0){let Ot=xt(Mt(Ne(_.s+gt.ds,gt.side*20,0)));if(Ot){l.fillStyle="#f3e9dc",l.fillRect(Ot[0]-Ot[3]*3,Ot[1]-Ot[3]*5,Ot[3]*6,Ot[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(Ot[0]-Ot[3]*3.5,Ot[1]-Ot[3]*5),l.lineTo(Ot[0],Ot[1]-Ot[3]*6.3),l.lineTo(Ot[0]+Ot[3]*3.5,Ot[1]-Ot[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let ue=0;ue<3;ue++)l.fillRect(Ot[0]+(ue-1.2)*Ot[3]*1.5,Ot[1]-Ot[3]*3.9,Ot[3],Ot[3]*1.2)}}}for(let gt of ms)if(gt.life>0){let vt=xt(Mt(gt.p));vt&&(l.fillStyle="#414957",l.fillRect(vt[0],vt[1],Math.max(1,vt[3]*.12),Math.max(2,vt[3]*gt.length)))}for(let gt of un.values())for(let vt of gt.entities){if(Math.abs(G(vt.s,_.s))>170)continue;let Ut=xt(Mt(Ne(vt.s+(vt.ds||0),vt.l+(vt.dl||0),.2)));if(!Ut||vt.kind==="coin"&&vt.hitLap===Math.max(0,Math.floor(_.s/Pe)))continue;let[Xt,Ot,,ue]=Ut;if(vt.kind==="coin")l.fillStyle="#ffe2a0",l.beginPath(),l.ellipse(Xt,Ot-ue*.8,ue*.25,ue*.38,0,0,p),l.fill();else if(vt.kind==="pad"){let An=Me(vt.s),He=(En,tn)=>Mt(Ne(vt.s+En,vt.l+tn,.07));ft([He(-1.2,-1.5),He(1.2,-1.5),He(1.2,1.5),He(-1.2,1.5)],"#92e3e5")}else if(vt.kind==="ramp"){let An=(He,En,tn)=>Mt(Ne(vt.s+He,vt.l+En,tn));ft([An(-1.4,-1.5,.08),An(1.4,-1.5,.85),An(1.4,1.5,.85),An(-1.4,1.5,.08)],"#bfa9e3")}else vt.kind==="cone"?(l.fillStyle="#eebd92",l.beginPath(),l.moveTo(Xt,Ot-ue*.8),l.lineTo(Xt-ue*.35,Ot),l.lineTo(Xt+ue*.35,Ot),l.fill()):vt.kind==="barrier"&&(l.fillStyle="#edacbb",l.fillRect(Xt-ue,Ot-ue*.7,ue*2,ue*.7))}let ge=(gt,vt,Ut,Xt,Ot,ue=1)=>{let An=Me(gt),He=Ne(gt,vt,.05+Xt),En=xt(Mt(He));if(!En)return;l.globalAlpha=ue;let tn=(Js,Zs,Yi)=>Mt(d(He,d(S(An.T,Js*Math.cos(Ut)-Yi*Math.sin(Ut)),d(S(An.R,Js*Math.sin(Ut)+Yi*Math.cos(Ut)),[0,Zs,0]))));ft([tn(-1.6,.3,-.8),tn(1.6,.3,-.8),tn(1.6,.7,.8),tn(-1.6,.7,.8)],Ot),ft([tn(-1.6,.65,-.8),tn(1.6,.65,-.8),tn(1.6,.65,.8),tn(-1.6,.65,.8)],"#eef1f7");for(let Js of[-1,1])for(let Zs of[-.87,.87]){let Yi=xt(tn(Js,.35,Zs));Yi&&(l.fillStyle="#3c4357",l.beginPath(),l.ellipse(Yi[0],Yi[1],En[3]*.24,En[3]*.34,0,0,p),l.fill())}let bs=xt(tn(-.3,1.6,0));bs&&(l.fillStyle="#f3d2be",l.beginPath(),l.arc(bs[0],bs[1],En[3]*.33,0,p),l.fill(),l.fillStyle="#a9abe4",l.beginPath(),l.ellipse(bs[0],bs[1]-En[3]*.18,En[3]*.36,En[3]*.2,0,Math.PI,p),l.fill()),l.globalAlpha=1};if(on.line&&se==="running")for(let gt=8;gt>=0;gt--){let vt=_.s+12+gt*9,Ut=Me(vt),Xt=F(Ut.curv*80,-2.1,2.1),Ot=(ue,An)=>Mt(Ne(vt+ue,Xt+An,.09));ft([Ot(-.6,-.4),Ot(.3,0),Ot(-.6,.4),Ot(-.2,0)],Math.abs(Ut.curv)*_.speed>.95?"#f0b7c3":"#a5dbe6")}if(Ci&&Ei?.points?.length&&se==="running"){let gt=Ei.points[Ms];gt&&ge(gt[1],gt[2],gt[3],gt[4],"#b8e9e6",.35)}if(typeof qn<"u")for(let gt of qn)ge(gt.s,gt.l,gt.yaw||0,0,gt.color);if(typeof nt<"u"&&nt.room)for(let gt of nt.peers.values())gt.position&&ge(gt.position.s,gt.position.l,gt.position.yaw,gt.position.jump,"#eab5ce");if(_.mini>0||_.nitroTime>0||_.pad>0){let gt=Me(_.s),vt=xt(Mt(Ne(_.s-2,_.l,.4+_.jump)));vt&&(l.fillStyle=_.nitroTime>0?"#bcb2ff99":"#95edff99",l.beginPath(),l.ellipse(vt[0],vt[1],vt[3]*.7,vt[3]*.45,0,0,p),l.fill())}ge(_.s,_.l,_.yaw,_.jump,typeof rn<"u"?rn.paint:"#8ccde4")},R=function(a,l){let f=new Float32Array(16);for(let g=0;g<4;g++)for(let T=0;T<4;T++)f[g*4+T]=a[T]*l[g*4]+a[4+T]*l[g*4+1]+a[8+T]*l[g*4+2]+a[12+T]*l[g*4+3];return f},B=function(a,l,f){let g=I();return g[12]=a,g[13]=l,g[14]=f,g},b=function(a,l,f){let g=I();return g[0]=a,g[5]=l,g[10]=f,g},U=function(a){let l=Math.cos(a),f=Math.sin(a);return new Float32Array([1,0,0,0,0,l,f,0,0,-f,l,0,0,0,0,1])},H=function(a){let l=Math.cos(a),f=Math.sin(a);return new Float32Array([l,0,-f,0,0,1,0,0,f,0,l,0,0,0,0,1])},W=function(a){let l=Math.cos(a),f=Math.sin(a);return new Float32Array([l,f,0,0,-f,l,0,0,0,0,1,0,0,0,0,1])},q=function(a=[0,0,0],l=[1,1,1],f=[0,0,0]){return R(B(...a),R(H(f[1]),R(U(f[0]),R(W(f[2]),b(...l)))))},it=function(a,l){return[a[0]*l[0]+a[4]*l[1]+a[8]*l[2]+a[12],a[1]*l[0]+a[5]*l[1]+a[9]*l[2]+a[13],a[2]*l[0]+a[6]*l[1]+a[10]*l[2]+a[14]]},X=function(a){let l=[a[0],a[1],a[2]],f=[a[4],a[5],a[6]],g=[a[8],a[9],a[10]],T=y(f,g),A=y(g,l),C=y(l,f),O=P(l,T)||1;return new Float32Array([...S(T,1/O),...S(A,1/O),...S(C,1/O)])},j=function(a,l){return D([a[0]*l[0]+a[3]*l[1]+a[6]*l[2],a[1]*l[0]+a[4]*l[1]+a[7]*l[2],a[2]*l[0]+a[5]*l[1]+a[8]*l[2]])},ot=function(a,l,f=[0,1,0]){let g=D(x(a,l)),T=D(y(f,g)),A=y(g,T);return new Float32Array([T[0],A[0],g[0],0,T[1],A[1],g[1],0,T[2],A[2],g[2],0,-P(T,a),-P(A,a),-P(g,a),1])},st=function(a,l,f,g){let T=1/Math.tan(a/2),A=1/(f-g);return new Float32Array([T/l,0,0,0,0,T,0,0,0,0,(g+f)*A,-1,0,0,2*g*f*A,0])},mt=function(a,l,f,g,T,A){return new Float32Array([2/(l-a),0,0,0,0,2/(g-f),0,0,0,0,-2/(A-T),0,-(l+a)/(l-a),-(g+f)/(g-f),-(A+T)/(A-T),1])},et=function(a,l,f,g=f){let T=x(l,a),A=D(T),C=D(y(Math.abs(A[2])<.95?[0,0,1]:[1,0,0],A)),O=y(C,A),k=S(d(a,l),.5),Y=m(T);return new Float32Array([C[0]*f,C[1]*f,C[2]*f,0,A[0]*Y,A[1]*Y,A[2]*Y,0,O[0]*g,O[1]*g,O[2]*g,0,...k,1])},rt=function(a){let l=parseInt(a.replace("#",""),16);return[l>>16&255,l>>8&255,l&255].map(f=>Math.pow(f/255,2.2))},Vt=function(a,l,f){return{p:a,n:l,i:f}},jt=function(a=20,l=12){let f=[],g=[],T=[];for(let A=0;A<=l;A++){let C=A*h/l;for(let O=0;O<=a;O++){let k=O*p/a,Y=[Math.sin(C)*Math.cos(k),Math.cos(C),Math.sin(C)*Math.sin(k)];f.push(...Y),g.push(...Y)}}for(let A=0;A<l;A++)for(let C=0;C<a;C++){let O=A*(a+1)+C,k=O+a+1;T.push(O,O+1,k,O+1,k+1,k)}return Vt(f,g,T)},De=function(a=16,l=1){let f=[],g=[],T=[];for(let A=0;A<2;A++)for(let C=0;C<=a;C++){let O=C*p/a,k=A?l:1,Y=D([Math.cos(O),1-l,Math.sin(O)]);f.push(k*Math.cos(O),A-.5,k*Math.sin(O)),g.push(...Y)}for(let A=0;A<a;A++){let C=A,O=A+a+1;T.push(C,O,C+1,C+1,O,O+1)}for(let A=0;A<2;A++){let C=f.length/3,O=A-.5,k=A?l:1;f.push(0,O,0),g.push(0,A?1:-1,0);for(let Y=0;Y<=a;Y++){let at=Y*p/a;f.push(k*Math.cos(at),O,k*Math.sin(at)),g.push(0,A?1:-1,0)}for(let Y=0;Y<a;Y++)T.push(C,C+Y+(A?2:1),C+Y+(A?1:2))}return Vt(f,g,T)},de=function(a,l,f=48,g=10,T=0,A=p){let C=[],O=[],k=[];for(let Y=0;Y<=f;Y++){let at=T+A*Y/f;for(let xt=0;xt<=g;xt++){let ft=xt*p/g,Mt=Math.cos(ft),At=Math.sin(ft);C.push((a+l*Mt)*Math.cos(at),(a+l*Mt)*Math.sin(at),l*At),O.push(Mt*Math.cos(at),Mt*Math.sin(at),At)}}for(let Y=0;Y<f;Y++)for(let at=0;at<g;at++){let xt=Y*(g+1)+at,ft=xt+g+1;k.push(xt,ft,xt+1,ft,ft+1,xt+1)}return Vt(C,O,k)},lt=function(a,l,f,g=.07){let T=[a,l,f,g].join(",");if(Te.has(T))return Te.get(T);g=Math.min(g,a/2*.95,l/2*.95,f/2*.95);let A=[],C=[],O=[],k=[a/2,l/2,f/2],Y=[[[0,0,f/2],[1,0,0],[0,1,0],a,l],[[0,0,-f/2],[-1,0,0],[0,1,0],a,l],[[a/2,0,0],[0,0,-1],[0,1,0],f,l],[[-a/2,0,0],[0,0,1],[0,1,0],f,l],[[0,l/2,0],[1,0,0],[0,0,-1],a,f],[[0,-l/2,0],[1,0,0],[0,0,1],a,f]];for(let[xt,ft,Mt,At,Nt]of Y){let ge=Xt=>[-Xt/2,-Xt/2+g*.28,-Xt/2+g,Xt/2-g,Xt/2-g*.28,Xt/2],gt=ge(At),vt=ge(Nt),Ut=A.length/3;for(let Xt of vt)for(let Ot of gt){let ue=d(xt,d(S(ft,Ot),S(Mt,Xt))),An=ue.map((En,tn)=>F(En,-k[tn]+g,k[tn]-g)),He=D(x(ue,An));A.push(...d(An,S(He,g))),C.push(...He)}for(let Xt=0;Xt<5;Xt++)for(let Ot=0;Ot<5;Ot++){let ue=Ut+Xt*6+Ot;O.push(ue,ue+1,ue+6,ue+1,ue+7,ue+6)}}let at=Vt(A,C,O);return Te.set(T,at),at},_t=function(a,l=.04,f=8){let g=[],T=[],A=[];for(let C=0;C<a.length;C++){let O=D(x(a[Math.min(C+1,a.length-1)],a[Math.max(C-1,0)])),k=D(y(O,Math.abs(O[1])<.9?[0,1,0]:[0,0,1])),Y=y(O,k);for(let at=0;at<=f;at++){let xt=at*p/f,ft=d(S(k,Math.cos(xt)),S(Y,Math.sin(xt)));g.push(...d(a[C],S(ft,l))),T.push(...ft)}}for(let C=0;C<a.length-1;C++)for(let O=0;O<f;O++){let k=C*(f+1)+O,Y=k+f+1;A.push(k,k+1,Y,k+1,Y+1,Y)}return Vt(g,T,A)},Yt=function(a,l,f,g){let T=[],A=[],C=[];for(let k=0;k<=144;k++){let Y=k*p/144;for(let at of[-1,1])T.push((a+at*f)*Math.cos(Y),g,(l+at*f)*Math.sin(Y)),A.push(0,1,0)}for(let k=0;k<144;k++){let Y=k*2;C.push(Y,Y+2,Y+1,Y+1,Y+2,Y+3)}return Vt(T,A,C)},z=function(a,l,f,g=pt.green,T=!1,A=.13){a.add(T?zt:le,q(l,f),g,A)},St=function(a,l,f,g,T=.06,A=[0,0,0],C=.12){a.add(lt(...f,T),q(l,[1,1,1],A),g,C)},Gt=function(a,l,f,g,T,A=.2,C=!1){a.add($e,et(l,f,g),T,A),C&&(z(a,l,[g,g,g],T,!0,A),z(a,f,[g,g,g],T,!0,A))},L=function(a,l,f,g,T=[0,0,0],A=!1){a.add(A?Ce:xe,q(l,f,T),g)},v=function(a,l,f,g,T=.15){a.add(_t(l,f),ve,g,T)},J=function(a,l,f,g=100){return Array.from({length:g+1},(T,A)=>[a*Math.cos(A*p/g),f,l*Math.sin(A*p/g)])},ct=function(){return Q=Q*1664525+1013904223>>>0,Q/4294967296},Wa=function(a,l,f){let g=-f*Math.min(.09,_.speed*.003),T=Math.sin(a*18)*Math.min(.012,_.speed*5e-4);ce.local=q([0,T,0],[1,1,1],[g,0,0]),Pt.local=q([-.31,1.57+T,0],[1,1,1],[-g*.5,-f*.13,0]);for(let A of dt)A.n.local=R(B(A.x,.41,A.z),R(H(A.front?-(_.drifting?f*.12-Tn(_.yaw-_.velocityYaw)*.62:f*.26):0),W(gc)));for(let A of Et){let C=_.boostActive?1.25+.17*Math.sin(a*38+A.side):_.pad>0?1+.12*Math.sin(a*36):_.mini>0?.65+.12*Math.sin(a*42+A.side):.001;A.n.local=q([-1.9,.43,A.side*.34],[C,Math.max(.01,C),Math.max(.01,C)])}},nn=function(){return Pn[Ke]},Bi=function(){return Pe*nn().laps},Dr=function(a){let l=nn().points,f=l.length,g=(a%f+f)%f,T=Math.floor(g),A=g-T,C=l[(T+f-1)%f],O=l[T],k=l[(T+1)%f],Y=l[(T+2)%f];return O.map((at,xt)=>.5*(2*at+(-C[xt]+k[xt])*A+(2*C[xt]-5*at+4*k[xt]-Y[xt])*A*A+(-C[xt]+3*at-3*k[xt]+Y[xt])*A*A*A))},Nr=function(){Ir=Ke,fn=[],Pe=0;let a=nn().points.length*120;for(let g=0;g<=a;g++){let T=g*nn().points.length/a,A=Dr(T);g&&(Pe+=m(x(A,fn[g-1].p)));let C=x(Dr(T+1e-4),Dr(T-1e-4));fn.push({s:Pe,p:A,h:Math.atan2(C[2],C[0])})}let l=fn.map(g=>g.p[0]),f=fn.map(g=>g.p[2]);Lr={minX:Math.min(...l),maxX:Math.max(...l),minZ:Math.min(...f),maxZ:Math.max(...f)}},w=function(a){let l=(a%Pe+Pe)%Pe,f=0,g=fn.length-1;for(;f+1<g;){let Y=f+g>>1;fn[Y].s<=l?f=Y:g=Y}let T=fn[f],A=fn[g],C=(l-T.s)/(A.s-T.s||1),O=Math.atan2(Math.sin(A.h-T.h),Math.cos(A.h-T.h)),k=T.h+O*C;return{p:T.p.map((Y,at)=>E(Y,A.p[at],C)),h:k,T:[Math.cos(k),0,Math.sin(k)],R:[-Math.sin(k),0,Math.cos(k)],curv:O/(A.s-T.s),slope:(A.p[1]-T.p[1])/(A.s-T.s)}},G=function(a,l){let f=a-l;return ne==="circuit"&&(f-=Math.round(f/Pe)*Pe),f},$=function(){return di+(_.timePenalty||0)},Z=function(a){let l=Math.floor(a/60),f=a-l*60;return String(l).padStart(2,"0")+":"+f.toFixed(2).padStart(5,"0")},K=function(a,l){if(ne!=="circuit")return!0;let f=d(w(a).p,S(w(a).R,l));for(let g=0;g<fn.length;g+=20){let T=fn[g];if(Math.abs(G(T.s,a))>35&&Math.hypot(T.p[0]-f[0],T.p[2]-f[2])<15)return!1}return!0},qt=function(){return[[Math.cos(_.yaw),Math.sin(_.yaw)],[-Math.sin(_.yaw),Math.cos(_.yaw)]]},Le=function(a){let l=qt(),f=a.angle||0,g=[[Math.cos(f),Math.sin(f)],[-Math.sin(f),Math.cos(f)]],T=[G(_.s,a.s+(a.ds||0)),_.l-a.l-(a.dl||0)],A=a.kind==="cone"?[.39,.39]:[.35,1.1],C=1/0,O=null;for(let k of[l[0],l[1],g[0],g[1]]){let Y=Math.abs(ie(l[0],k))*Rt+Math.abs(ie(l[1],k))*Wt,at=Math.abs(ie(g[0],k))*A[0]+Math.abs(ie(g[1],k))*A[1],xt=Y+at-Math.abs(ie(T,k));if(xt<=0)return null;if(xt<C){C=xt;let ft=ie(T,k)>=0?1:-1;O=k.map(Mt=>Mt*ft)}}return{normal:O,pen:C}},Je=function(a,l,f=null){let g=1/Dt,T=1/Ht,A=f?f.kind==="cone"?9:85:1/0,C=f?1/A:0,O=f?[G(_.s+l[0],f.s+(f.ds||0)),_.l+l[1]-f.l-(f.dl||0)]:[0,0],k=f?1/(A*(f.kind==="cone"?.09:.48)):0,Y=[_.vS-_.spin*l[1],_.vL+_.spin*l[0]],at=f?[(f.vS||0)-(f.omega||0)*O[1],(f.vL||0)+(f.omega||0)*O[0]]:[0,0],xt=[Y[0]-at[0],Y[1]-at[1]],ft=ie(xt,a);if(ft>=0)return 0;let Mt=fe(l,a),At=fe(O,a),Nt=f?.13:.035,ge=-(1+Nt)*ft/(g+C+Mt*Mt*T+At*At*k);_.vS+=a[0]*ge*g,_.vL+=a[1]*ge*g,_.spin=F(_.spin+Mt*ge*T,-2.3,2.3);let gt=[-a[1],a[0]],vt=fe(l,gt),Ut=fe(O,gt),Xt=ie(xt,gt),Ot=f?.22:.1,ue=F(-Xt/(g+C+vt*vt*T+Ut*Ut*k),-Ot*ge,Ot*ge);return _.vS+=gt[0]*ue*g,_.vL+=gt[1]*ue*g,_.spin=F(_.spin+vt*ue*T,-2.3,2.3),f&&(f.vS=(f.vS||0)-(a[0]*ge+gt[0]*ue)*C,f.vL=(f.vL||0)-(a[1]*ge+gt[1]*ue)*C,f.omega=F((f.omega||0)-(At*ge+Ut*ue)*k,-7,7),f.kind==="cone"&&(f.tilt=Math.min(1.35,(f.tilt||0)+Math.abs(ge)*C*.015))),Math.abs(ft)},ke=function(a,l){a<.7||_.contactSound>0||(_.contactSound=.16,cu(Ne(_.s,_.l,.45),Math.min(14,Math.ceil(a)),[0,1,0]),Cf(l,a),a>5&&(Br=Math.min(.25,a*.012),_.driftCharge*=.5))},ze=function(a){_.contactSound=Math.max(0,_.contactSound-a);for(let l of un.values())for(let f of l.entities)(f.kind==="cone"||f.kind==="barrier")&&(f.vS=(f.vS||0)*Math.exp(-a*2.4),f.vL=(f.vL||0)*Math.exp(-a*2.4),f.ds=F((f.ds||0)+f.vS*a,-18,18),f.dl=F((f.dl||0)+f.vL*a,-7.4-f.l,7.4-f.l),f.angle=(f.angle||0)+(f.omega||0)*a,f.omega=(f.omega||0)*Math.exp(-a*2));for(let l=0;l<3;l++){let f=qt(),g=Math.abs(f[0][1])*Rt+Math.abs(f[1][1])*Wt,T=$t-g;if(Math.abs(_.l)>T){let A=Math.sign(_.l),C=[0,-A];_.l=A*(T-.015);let O=[A*(Math.sign(f[0][1])*Rt*f[0][0]+Math.sign(f[1][1])*Wt*f[1][0]),A*g],k=Je(C,O);ke(k,"rail"),k>4&&(Ya(!1),_.turnRate*=.4,to=!1)}if(!(_.jump>.85))for(let A of un.values())for(let C of A.entities){if(C.kind!=="cone"&&C.kind!=="barrier"||Math.abs(G(C.s+(C.ds||0),_.s))>4.5||Math.abs(C.l+(C.dl||0)-_.l)>4)continue;let O=Le(C);if(!O)continue;let k=C.kind==="cone"?9:85,Y=k/(k+Dt),at=Math.max(0,O.pen-.008)*.82;_.s+=O.normal[0]*at*Y,_.l+=O.normal[1]*at*Y,C.ds=(C.ds||0)-O.normal[0]*at*(1-Y),C.dl=(C.dl||0)-O.normal[1]*at*(1-Y);let xt=qt(),ft=[G(C.s+(C.ds||0),_.s),C.l+(C.dl||0)-_.l],Mt=F(ie(ft,xt[0]),-Rt,Rt),At=F(ie(ft,xt[1]),-Wt,Wt),Nt=[xt[0][0]*Mt+xt[1][0]*At,xt[0][1]*Mt+xt[1][1]*At],ge=Je(O.normal,Nt,C);ke(ge,C.kind)}}_.speed=Math.hypot(_.vS,_.vL),_.velocityYaw=Math.atan2(_.vL,_.vS),_.lateralSpeed=_.vL},Bt=function(a,l){if(!sn.has(a)){let f=new Qt;l(f),sn.set(a,f.finish())}return sn.get(a)},Qe=function(a,l,f,g,T="#627596"){let A=[-l/2,g,-f/2],C=[l/2,g,-f/2],O=[l/2,g,f/2],k=[-l/2,g,f/2],Y=[-l/2,g+1.3,0],at=[l/2,g+1.3,0];$n(a,A,C,at,Y,T),$n(a,Y,at,O,k,T),$n(a,A,Y,k,k,"#e9e1d2"),$n(a,C,O,at,at,"#e9e1d2");for(let xt=0;xt<9;xt++){let ft=-l/2+xt*l/8;v(a,[[ft,g,-f/2],[ft,g+1.3,0],[ft,g,f/2]],.025,"#8797b0")}Gt(a,[-l/2-.15,g+1.33,0],[l/2+.15,g+1.33,0],.08,T)},we=function(a,l=0){let f=["#fff0db","#e9eafa","#f9dbe2","#e0f1ec"][l%4],g=["#7190b6","#9a82b3","#be8f98","#6c9a9a"][l%4];St(a,[0,2.65,0],[6,5.3,4.8],f,.08),St(a,[0,.12,0],[6.4,.24,5.1],"#b9b7c5",.035),Qe(a,6.7,5.8,5.3,g);for(let T of[-1,1])for(let A of[-1.9,0,1.9])for(let C of[1.4,3.85])St(a,[A,C,T*2.425],[1.2,1.35,.055],g,.025),St(a,[A,C,T*2.46],[1.05,1.18,.03],"#b8dfe8",.01,[0,0,0],.45),Gt(a,[A,C-.58,T*2.49],[A,C+.58,T*2.49],.025,"#f4f7fa"),St(a,[A,C-.72,T*2.55],[1.35,.12,.28],g,.015);St(a,[0,1.03,2.5],[1.04,2.05,.1],"#798c9c",.025),St(a,[.34,1.03,2.57],[.05,.12,.04],"#f7d5a4",.01);for(let T of[-1,1])St(a,[T*2.65,.48,2.9],[.65,.9,.7],"#b9c9b0",.035),z(a,[T*2.65,1.14,2.9],[.6,.55,.5],"#88ba9a",!0)},In=function(a,l=0){let f=["#ef9ba5","#88bfc9","#a6a0d5"][l%3];St(a,[0,2,0],[7,4,4.8],"#fff1dd",.06),Qe(a,7.7,5.8,4,"#6f7d98");for(let g of[-2.05,0,2.05])St(a,[g,1.4,2.45],[1.8,2.15,.06],"#88afb9",.02),St(a,[g,1.45,2.5],[1.54,1.92,.025],"#c2e4e8",.015),St(a,[g,1.45,2.54],[.045,1.92,.02],"#edf6ee",.005);St(a,[0,3.03,2.65],[7.4,.7,.55],f,.035);for(let g=0;g<12;g++)St(a,[-3.35+g*.61,2.62,2.95],[.59,.24,1.15],g%2?"#fff6e3":f,.025,[.12,0,0]);for(let g of[-1,1])Gt(a,[g*3.3,0,3.35],[g*3.3,2.6,3.35],.055,f);for(let g of[-1.9,0,1.9])St(a,[g,3.04,2.96],[.45,.34,.025],"#fff6e6",.02),St(a,[g+.28,3.04,2.97],[.065,.22,.02],"#fff6e6",.01);for(let g of[-2.6,2.7]){St(a,[g,.35,3.35],[.75,.7,.65],"#cda883",.035);for(let T of[-.14,.14])St(a,[g,.52,3.35+T],[.6,.035,.035],"#ecd3a5",.005)}St(a,[1.4,.72,3.5],[.6,1.3,.12],"#7e8f9c",.03,[.08,0,0]);for(let g=0;g<4;g++)St(a,[1.4,.38+g*.2,3.58],[.38,.025,.025],"#e9f1e8",.005)},Hn=function(a,l=0){let f="#997786",g=["#f8c6dc","#f6b8d5","#ffdfeb"];Gt(a,[0,0,0],[l?.35:-.25,3.4,0],.18,f),Gt(a,[0,1.9,0],[-1.55,3.55,.2],.11,f),Gt(a,[.1,2.2,0],[1.55,3.8,-.25],.1,f);let A=[[-1.4,3.9,.1,1.5],[0,4.6,0,1.8],[1.6,4.05,-.2,1.5],[-.4,4,1.35,1.45],[.4,4.1,-1.3,1.5]];for(let C=0;C<A.length;C++){let[O,k,Y,at]=A[C];z(a,[O,k,Y],[at,at*.7,at*.86],g[(C+l)%3],!0,.02),z(a,[O+.2,k+.6,Y+.15],[at*.6,at*.28,at*.52],"#ffe8f1",!0,.01)}for(let C=0;C<12;C++){let O=C*2.399,k=.6+C%4*.38;St(a,[Math.cos(O)*k,.045,Math.sin(O)*k],[.12,.015,.065],g[C%3],.012,[0,O,0])}},li=function(a){Gt(a,[0,0,0],[0,4.2,0],.14,"#9c8c84");for(let l=0;l<3;l++)z(a,[(l-1)*.45,2.7+l*.82,0],[1.9-l*.35,.78,1.25-l*.16],["#7cb5aa","#8fc9b5","#a6d7ba"][l],!0,.02)},zi=function(a){St(a,[0,.1,0],[.55,.2,.55],"#9da8b9",.025),Gt(a,[0,.15,0],[0,5.6,0],.065,"#7e8da8"),v(a,[[0,5.4,0],[0,5.8,.3],[0,5.8,1.3],[0,5.5,1.55]],.055,"#7e8da8"),St(a,[0,5.46,1.55],[.65,.16,.9],"#e5edee",.05),St(a,[0,5.36,1.55],[.5,.025,.72],"#fff0b3",.025,[0,0,0],.1)},Fe=function(a){for(let l of[-4,4])Gt(a,[l,0,0],[l*.94,6.3,0],.29,"#d98085"),Gt(a,[l,0,0],[l,.75,0],.31,"#66728c"),Gt(a,[l*.95,4.65,0],[l*.95,6.65,0],.32,"#dc8d91");St(a,[0,5,0],[9.8,.36,.48],"#d68183",.06),v(a,[[-5.65,6.55,0],[-4.5,6.3,0],[0,6.2,0],[4.5,6.3,0],[5.65,6.55,0]],.25,"#6d7089"),Gt(a,[0,5,0],[0,6.15,0],.13,"#d68183"),St(a,[0,5.65,.31],[.9,1.12,.15],"#55677e",.02),St(a,[0,5.65,.4],[.5,.69,.025],"#edcf9d",.01)},Ze=function(a){St(a,[0,.25,0],[13,.5,6.8],"#c6c4ce",.04);for(let l of[-5,0,5])for(let f of[-2.2,2.2])Gt(a,[l,.5,f],[l,4.1,f],.1,"#8fa2ad");Qe(a,14,7.8,4.1,"#73849c");for(let l=0;l<12;l++)St(a,[-5.8+l*1.05,.53,3],[.8,.025,.2],"#f6dfa0",.008);St(a,[0,3.2,2.6],[4,.9,.22],"#eef5ed",.04),St(a,[-1.55,3.2,2.75],[.45,.45,.04],"#8ec9c5",.03);for(let l=0;l<6;l++)St(a,[-.8+l*.45,3.2,2.75],[.19,.24,.03],"#8294a8",.01);for(let l of[-3.5,3.5]){St(a,[l,1.02,0],[2.7,.15,.65],"#c2a38c",.02);for(let f of[-.95,.95])Gt(a,[l+f,.5,0],[l+f,.95,0],.06,"#8c91a3")}},ci=function(a){for(let l of[-1.16,1.16])St(a,[0,.05,l],[20,.1,.09],"#81929f",.015);for(let l=0;l<20;l++)St(a,[-9.5+l,.005,0],[.23,.07,3.4],"#bea58d",.015);St(a,[0,1.65,0],[13,2.7,3],"#edf5dc",.25),St(a,[0,1.25,0],[13.15,.38,3.06],"#83bcb6",.04),St(a,[0,3.08,0],[12.5,.25,3.1],"#b3bfc6",.12);for(let l of[-1,1]){for(let f=0;f<7;f++){let g=-5.2+f*1.73;St(a,[g,2,l*1.52],[1.35,1.05,.06],"#769ba8",.04),St(a,[g,2.1,l*1.56],[1.16,.8,.025],"#bbdfe6",.03)}for(let f of[-4.3,4.3])z(a,[f,.45,l*1.16],[.49,.49,.13],"#596980",!0),St(a,[f,.48,l*1.31],[.19,.19,.03],"#bfccd1",.03)}for(let l of[-6.55,6.55]){St(a,[l,2.1,0],[.06,1.05,2.1],"#acd2dd",.05);for(let f of[-.9,.9])z(a,[l,1.25,f],[.05,.13,.13],"#fff4ba",!0)}v(a,[[-1.5,3.25,0],[0,4.3,0],[1.5,3.25,0]],.055,"#718699"),Gt(a,[-.65,4.3,0],[.65,4.3,0],.07,"#718699")},Ve=function(a){St(a,[0,4.8,0],[24,9.6,7],"#f4eedf",.06),Qe(a,25.2,8.2,9.6,"#8095ad"),St(a,[0,6.1,3.7],[4.8,12.2,2],"#e6eaf0",.06),Qe(a,5.4,3.1,12.2,"#879bb4");for(let l of[-10,-7,-4,4,7,10])for(let f of[2,4.8,7.6])St(a,[l,f,3.56],[1.9,1.65,.06],"#8da6b8",.025),St(a,[l,f,3.61],[1.64,1.41,.025],"#c7e9eb",.015),St(a,[l,f,3.65],[.045,1.41,.025],"#f6f5ed",.005);St(a,[0,1.5,4.75],[3.2,2.8,.06],"#9cbdcd",.025);for(let l of[-.75,.75])St(a,[l,1.5,4.81],[.035,2.7,.025],"#f7eee4",.005);z(a,[0,10.2,4.77],[.9,.9,.06],"#fff7df",!0,.02),a.add(de(.89,.045,28,7),B(0,10.2,4.84),"#7f91a8",.08),Gt(a,[0,10.2,4.91],[0,10.8,4.91],.03,"#697e98"),Gt(a,[0,10.2,4.92],[.43,10.4,4.92],.03,"#697e98"),St(a,[0,-.02,7.5],[23,.1,12],"#e2e1db",.03);for(let l of[-5.5,5.5])St(a,[l,1.5,12.1],[.8,3,.8],"#e8dbc7",.04),St(a,[l,3.06,12.1],[1,.2,1],"#a1acb9",.025);for(let l of[-1,1])for(let f=0;f<8;f++){let g=l*(6.4+f*.65);Gt(a,[g,0,12],[g,1.8,12],.025,"#9cacc0")}for(let l of[-1,1])Gt(a,[l*6,1.65,12],[l*11.5,1.65,12],.035,"#9cacc0")},hi=function(a){St(a,[0,1.25,0],[1.2,2.5,.82],"#f3a4ad",.09),St(a,[-.13,1.55,.43],[.82,1.35,.05],"#b6e0e9",.03);for(let l=0;l<3;l++)for(let f=0;f<3;f++)St(a,[-.4+f*.27,1.12+l*.4,.48],[.13,.23,.06],["#f9e2ad","#a3d2cc","#d3c5ec"][f],.025),St(a,[-.4+f*.27,.94+l*.4,.49],[.1,.04,.02],"#fff0c7",.005);St(a,[0,.47,.44],[.75,.24,.055],"#738698",.03),St(a,[.43,1.3,.45],[.13,.18,.04],"#fff0b8",.02)},ki=function(a){Gt(a,[0,0,0],[0,2.6,0],.08,"#8c7e8a"),St(a,[0,2.55,0],[.55,.16,.55],"#877d92",.025),St(a,[0,2.22,0],[.41,.52,.41],"#ffe4ad",.04),St(a,[0,1.93,0],[.52,.12,.52],"#a19caa",.025);for(let l of[-.2,.2])for(let f of[-.2,.2])Gt(a,[l,1.98,f],[l,2.49,f],.018,"#927f8d")},Xa=function(a,l){let f=l==="left"?-1:1;Gt(a,[0,0,0],[0,2.4,0],.055,"#8499b0"),St(a,[0,2.28,0],[2.9,.78,.18],"#f3eacb",.04);for(let g=0;g<3;g++){let T=-.86+g*.86;Gt(a,[T-f*.25,2.02,.12],[T+f*.15,2.28,.12],.055,"#bd8faf"),Gt(a,[T+f*.15,2.28,.12],[T-f*.25,2.54,.12],.055,"#bd8faf")}},Sf=function(a){return Bt(a,l=>{a.startsWith("house")?we(l,Number(a.slice(-1))):a.startsWith("shop")?In(l,Number(a.slice(-1))):a.startsWith("cherry")?Hn(l,Number(a.slice(-1))):a==="pine"?li(l):a==="lamp"?zi(l):a==="torii"?Fe(l):a==="station"?Ze(l):a==="tram"?ci(l):a==="vending"?hi(l):a==="school"?Ve(l):a==="lantern"?ki(l):(a==="left"||a==="right")&&Xa(l,a)})},bf=function(a){let l=(a%Pe+Pe)%Pe/Pe,f=nn().sectors,g=f[0];for(let T of f)l>=T.at&&(g=T);return g},Tf=function(a,l,f){let g=new ye,T=a*40,A=(k,Y,at,xt=1,ft=0)=>{if(ne==="circuit"&&Y>=Pe||!K(Y,at))return null;let Mt=Me(Y),At=Ne(Y,at,-.05),Nt=-Mt.h+(at>0?h:0)+ft,ge=new ye(Sf(k),q(x(At,l),[xt,xt,xt],[0,Nt,0]));return g.add(ge),ge},C=ne==="circuit"&&nn().biome===1;for(let k of[-1,1]){A("lamp",T+7,k*9.65);for(let Y=0;Y<2;Y++)A("cherry"+(a+Y)%2,T+10+Y*20,k*(C?11.3:12.5),C?1.12:.92);(a%2===0||C)&&a%3!==1&&!(a===2&&k<0)&&!(C&&a===0&&k>0)&&A("house"+(a+(k>0?1:0))%4,T+19,k*(16.5+f()*2),.9+f()*.25),a%3===1&&!(a===2&&k<0)&&A("shop"+a%3,T+18,k*17.5),a%5===0&&A("vending",T+9,k*10.1),a%3===0&&A("pine",T+32,k*22,1.5)}let O=Tn(Me(T+37).h-Me(T+7).h);if(Math.abs(O)>.25&&A(O>0?"right":"left",T+5,(O>0?-1:1)*9.4,1,O>0?-h/2:h/2),ne==="circuit"){let k=(T+20)/Pe;if(C&&a===0&&A("school",T+21,28),a===2&&(A("station",T+17,-20,1),A("tram",T+17,-27,1),A("vending",T+9,-12.8)),k>.66&&k<.74&&a%2===0){A("torii",T+22,-16);for(let Y of[-1,1])A("lantern",T+9,Y*10)}}return g},Af=function(){ui&&ui.mesh.dispose(),ui&&(ui.mesh.dispose(),ui=null);let a=new Qt,l=Lr,f=[(l.minX+l.maxX)*.5,0,(l.minZ+l.maxZ)*.5],g=l.maxX-l.minX,T=l.maxZ-l.minZ;if(nn().biome===0)for(let[C,O,k,Y]of[[g*.82,T*.89,-.43,"#eadfce"],[g*.78,T*.85,-.3,"#c7d9b4"]]){let at=[f[0],k,f[2]],xt=[0,1,0],ft=[];for(let Mt=0;Mt<=96;Mt++){let At=Mt*p/96,Nt=1+.025*Math.sin(At*5);at.push(f[0]+Math.cos(At)*C*Nt,k,f[2]+Math.sin(At)*O*Nt),xt.push(0,1,0),Mt&&ft.push(0,Mt,Mt+1)}a.add(Vt(at,xt,ft),ve,Y,.02)}for(let C=0;C<12;C++){let O=C*p/12,k=320+C%3*36,Y=f[0]+Math.cos(O)*k,at=f[2]+Math.sin(O)*k,xt=40+C%4*18;L(a,[Y,xt*.5-5,at],[70,xt,60],["#b5c4de","#a6bfd8","#c6cfdf"][C%3],[0,O,0],!0),C%3===0&&L(a,[Y,xt*.85-5,at],[25,xt*.3,22],"#e5e5f0",[0,O,0],!0)}for(let C=0;C<10;C++){let O=C*p/10,k=[f[0]+Math.cos(O)*260,57+C%3*14,f[2]+Math.sin(O)*250];for(let Y=0;Y<4;Y++)z(a,d(k,[(Y-1.5)*12,Math.sin(Y*2)*4,0]),[17,7+Y%2*3,10],"#fff5f3",!0,.01)}ui=new ye(a.finish()),ui.shadow=!1,tu=Ke,cc=Array.from({length:24},(C,O)=>({phase:O*2.399,node:new ye(wf)}));for(let C of cc)C.node.shadow=!1},Ef=function(a,l){if(ne!=="circuit")return;(tu!==Ke||!ui)&&Af(),ui.local=B(-a[0],-a[1],-a[2]),Be.add(ui);let f=Me(_.s);for(let g of cc){let T=g.phase,A=(T*13+l*1.7)%55-10,C=Math.sin(T*7)*10+Math.sin(l*.6+T)*2,O=1+((T*2-l*.65)%7+7)%7,k=d(Ne(_.s+A,C,O),[Math.sin(l+T)*.25,0,0]);g.node.local=q(x(k,a),[1,1,1],[l*.8+T,T,l]),Be.add(g.node)}},qa=function(){if(!Se)try{let xt=function(Nt,ge){let gt=a.createBufferSource(),vt=a.createBiquadFilter(),Ut=a.createGain();return gt.buffer=Y,gt.loop=!0,vt.type=Nt,vt.frequency.value=ge,Ut.gain.value=0,gt.connect(vt),vt.connect(Ut),Ut.connect(l),gt.start(),{source:gt,filter:vt,gain:Ut}},a=new(window.AudioContext||window.webkitAudioContext),l=a.createGain(),f=a.createDynamicsCompressor();l.gain.value=Fn?.48:0,l.connect(f),f.threshold.value=-18,f.ratio.value=4,f.connect(a.destination);let g=a.createGain(),T=a.createBiquadFilter();T.type="lowpass",T.frequency.value=1e3,g.gain.value=0,T.connect(g),g.connect(l);let A=a.createOscillator(),C=a.createOscillator(),O=a.createOscillator(),k=a.createGain();A.type="sawtooth",C.type="triangle",O.type="sine",C.detune.value=9,k.gain.value=.6;for(let Nt of[A,C])Nt.connect(T),Nt.start();O.connect(k),k.connect(T),O.start();let Y=a.createBuffer(1,a.sampleRate*2,a.sampleRate),at=Y.getChannelData(0);for(let Nt=0;Nt<at.length;Nt++)at[Nt]=Math.random()*2-1;let ft=xt("lowpass",1100),Mt=xt("bandpass",1800),At=xt("highpass",2200);Mt.filter.Q.value=3.5,Se={ctx:a,master:l,engine1:A,engine2:C,sub:O,engineGain:g,engineFilter:T,noise:Y,wind:ft,tire:Mt,turbo:At,oldSpeed:0,oldBoost:!1,gear:0},Se.rail=Nu(a,l,s),Se.rail.load()}catch{}},Vi=function(a=620,l=.1){if(!Fn||!Se)return;let{ctx:f,master:g}=Se,T=f.createOscillator(),A=f.createGain();T.type="sine",T.frequency.setValueAtTime(a,f.currentTime),T.frequency.exponentialRampToValueAtTime(a*1.28,f.currentTime+l),A.gain.setValueAtTime(.07,f.currentTime),A.gain.exponentialRampToValueAtTime(.001,f.currentTime+l),T.connect(A),A.connect(g),T.start(),T.stop(f.currentTime+l+.02)},Cf=function(a,l){if(!Fn||!Se||a==="rail"&&Se.rail?.play(l))return;let{ctx:f,master:g,noise:T}=Se,A=f.createBufferSource(),C=f.createBiquadFilter(),O=f.createGain(),k=f.currentTime;if(A.buffer=T,C.type="bandpass",C.frequency.value=a==="rail"?1400:a==="cone"?450:700,C.Q.value=a==="rail"?1.5:.6,O.gain.setValueAtTime(Math.min(.3,.035+l*.018),k),O.gain.exponentialRampToValueAtTime(.001,k+.16),A.connect(C),C.connect(O),O.connect(g),A.start(),A.stop(k+.2),a==="rail"){let Y=f.createOscillator(),at=f.createGain();Y.type="triangle",Y.frequency.setValueAtTime(330,k),Y.frequency.exponentialRampToValueAtTime(140,k+.15),at.gain.setValueAtTime(.07,k),at.gain.exponentialRampToValueAtTime(.001,k+.2),Y.connect(at),at.connect(g),Y.start(),Y.stop(k+.21)}},Rf=function(){if(!Se)return;let a=Se,l=a.ctx.currentTime,f=se==="running",g=_.speed,T=Math.min(5,Math.floor(g/9)),A=48+g*2.2+g%9*5;(!f||!Fn||wn.sfxVolume<=0)&&a.rail?.stop(),a.master.gain.setTargetAtTime(Fn?.48*wn.sfxVolume:0,l,.05);let C=f?.012+Math.min(.04,g*7e-4)+(Re.gas?.013:0):0;a.engineGain.gain.setTargetAtTime(C,l,.07),a.engineFilter.frequency.setTargetAtTime(550+g*25+(Re.gas?500:0),l,.12);let O=T!==a.gear?.8:1;a.gear=T,a.engine1.frequency.setTargetAtTime(A*O,l,.045),a.engine2.frequency.setTargetAtTime(A*1.5*O,l,.065),a.sub.frequency.setTargetAtTime(A*.5,l,.07),a.wind.gain.gain.setTargetAtTime(f?Math.pow(g/65,2)*.12:0,l,.15),a.wind.filter.frequency.setTargetAtTime(700+g*25,l,.12);let k=Math.abs(Tn(_.yaw-_.velocityYaw)),Y=Re.brake&&g>5,at=_.jump<.1?Math.min(1,(_.drifting?k*1.8:Math.max(0,k-.18)*2)+(Y?.55:0)):0;a.tire.gain.gain.setTargetAtTime(f?at*.075:0,l,.045),a.tire.filter.frequency.setTargetAtTime(1300+g*24+Math.sin(zs*40)*90,l,.05),a.turbo.gain.gain.setTargetAtTime(f?_.boostBlend*.075:0,l,.1),a.turbo.filter.frequency.setTargetAtTime(1600+_.boostBlend*2400,l,.12),f&&_.boostActive&&!a.oldBoost&&Vi(340,.17),a.oldBoost=_.boostActive,a.oldSpeed=g},Us=function(a){if(!Fn||!Se)return;let{ctx:l,master:f,noise:g}=Se,T=l.currentTime,A=l.createBufferSource(),C=l.createBiquadFilter(),O=l.createGain(),k=a==="nitro"||a==="combo",Y=k?.48:a==="drift"?.12:.23;A.buffer=g,C.type=a==="land"?"lowpass":"bandpass",C.Q.value=.75,C.frequency.setValueAtTime(a==="land"?300:k?650:1500,T),C.frequency.exponentialRampToValueAtTime(k?5500:700,T+Y),O.gain.setValueAtTime(.001,T),O.gain.linearRampToValueAtTime(k?.19:.1,T+.025),O.gain.exponentialRampToValueAtTime(.001,T+Y),A.connect(C),C.connect(O),O.connect(f),A.start(),A.stop(T+Y+.03),(a==="combo"||a==="small")&&Vi(a==="combo"?1080:820,.08)},eu=function(a){if(_.nitro>=2){_.energy=Math.min(99,_.energy+a);return}for(_.energy+=a;_.energy>=100&&_.nitro<2;)_.energy-=100,_.nitro++,_n("NITRO READY","\u6C2E\u6C14\u5DF2\u88C5\u74F6 \xB7 E \u91CA\u653E 3.2 \u79D2",1.2),Vi(1050,.09)},nu=function(a){_.jetHistory.push({kind:a,t:di}),_.jetHistory=_.jetHistory.filter(f=>di-f.t<2.5).slice(-3);let l=_.jetHistory.map(f=>f.kind).join("");(l==="CWW"||l==="WCW")&&(_.combo=l,_.comboTimer=1.3,_.mini=Math.max(_.mini,.88),l==="WCW"&&(_.nitroTime+=.35),_n(l+" \u55B7",l==="CWW"?"\u6C2E\u6C14 \u2192 \u5C0F\u55B7 \u2192 \u5C0F\u55B7 \xB7 \u9AD8\u901F\u51FA\u5F2F":"\u5C0F\u55B7 \u2192 \u6C2E\u6C14 \u2192 \u5C0F\u55B7 \xB7 \u5EF6\u957F\u55B7\u5C04",1.35),Us("combo"))},If=function(){se!=="running"||_.nitro<1||_.nitroTime>0||(_.nitro--,_.nitroTime=3.2,_n("NITRO","\u6C2E\u6C14\u55B7\u5C04 \xB7 3.2 \u79D2",.8),nu("C"),Us("nitro"))},Lf=function(){se!=="running"||_.smallJets<1||_.smallWindow<=0||_.jetCooldown>0||(_.smallJets--,_.jetCooldown=.18,_.mini=.72,_.smallWindow=_.smallJets?1.15:0,_.smallCount++,nu("W"),Us("small"),_.comboTimer<=0&&_n(_.smallCount>1?"DOUBLE BOOST":"MINI BOOST",_.smallCount>1?"\u53CC\u55B7 \xB7 \u8FDE\u7EED\u51FA\u5F2F\u52A0\u901F":"\u5C0F\u55B7 \xB7 \u53CA\u65F6\u63A5\u4E0B\u4E00\u55B7",.75))},hc=function(a=2,l="\u5C0F\u55B7\u5DF2\u5C31\u7EEA"){_.smallJets=Math.max(_.smallJets,a),_.smallWindow=1.5,_.smallCount=0,_n(l,"\u70B9 \u7A7A\u683C / Q\uFF0C\u6216\u91CD\u65B0\u6309 W \xB7 \u8FDE\u70B9\u4E24\u6B21\u53CC\u55B7",1.1),Vi(760,.06)},uc=function(){_.driftRewarded||_.driftCharge<.1||_.driftDuration<.11||(_.driftRewarded=!0,hc(_.driftCharge>.35?2:1,_.driftCharge>.35?"\u53CC\u55B7\u5DF2\u5C31\u7EEA":"\u5C0F\u55B7\u5DF2\u5C31\u7EEA"))},Ya=function(a=!0){_.drifting&&(a&&uc(),_.drifting=!1,_.driftPhase="exit",_.exitTime=.45,_.exitFromGrip=_.tireGrip||3.6,_.exitFromLimit=_.tireLimit||38,_.driftCharge=0,_.driftDuration=0,_.driftSide=0,_.driftReleasing=!1)},Df=function(a){_.drifting=!0,_.driftSide=a,_.driftCharge=0,_.driftDuration=0,_.driftPhase="entry",_.driftRewarded=!1,_.driftReleasing=!1,_.releaseAge=0,_.driftLatch=!0,_.driftCooldown=.16,_.exitTime=0,_.turnRate+=a*.38,_.gripRecovery=0,Us("drift")},Nf=function(a){_.prevPose={s:_.s,l:_.l,yaw:_.yaw,jump:_.jump};let l=Me(_.s),f=_.s,g=typeof qi=="number"?qi:(Re.right?1:0)-(Re.left?1:0);_.speed=Math.hypot(_.vS,_.vL);for(let Ut of["pad","mini","nitroTime","smallWindow","jetCooldown","comboTimer","exitTime","driftCooldown","driftBuffer","lastSteerTime","jetInputBuffer","boostInputBuffer"])_[Ut]=Math.max(0,_[Ut]-a);_.smallWindow===0&&(_.smallJets=0),ks=E(ks,g,1-Math.exp(-a*(g?26:20)));let T=Wn.drift>0||Re.drift&&!_.prevDrift,A=g&&g!==_.prevSteer;Wn.drift=0,Re.drift||(_.driftLatch=!1),T&&(_.driftBuffer=.26),g&&(_.lastSteer=Math.sign(g),_.lastSteerTime=.2);let C=_.jump<.12,O=_.speed>.4?Math.atan2(_.vL,_.vS):_.yaw,k=Tn(_.yaw-O),Y=(Math.abs(g)>.12?Math.sign(g):0)||(_.lastSteerTime>0?_.lastSteer:Math.abs(k)>.07?Math.sign(k):0);if(!_.drifting&&_.driftCooldown===0&&C&&_.speed>5&&Y&&(Re.drift&&(!_.driftLatch||A&&Y!==_.lastDriftSide)||_.driftBuffer>0)?(Df(Y),_.lastDriftSide=Y,_.driftBuffer=0):_.drifting&&T&&_.driftDuration>.18&&(g*_.driftSide<0||_.driftReleasing)&&(uc(),_.driftReleasing=!0,_.releaseAge=Math.max(.18,_.releaseAge),_.driftBuffer=0),_.drifting){_.driftDuration+=a;let Ut=g*_.driftSide<0;_.speed<3.5||!C?Ya(!1):(!Re.drift&&_.driftDuration>.14&&(_.driftReleasing=!0),_.driftReleasing&&(_.releaseAge+=a),_.driftPhase=_.driftReleasing?"release":Ut?"counter":_.driftDuration<.18?"entry":"hold",(Ut||_.driftReleasing)&&Math.abs(k)<.75&&uc(),(_.driftReleasing&&(_.releaseAge>.55||Math.abs(k)<.065&&_.releaseAge>.16)||Ut&&Math.abs(k)<.075&&_.driftDuration>.22)&&Ya(!0))}(Wn.boost>0||Re.boost&&!_.prevBoost)&&(_.boostInputBuffer=.15),(Wn.small>0||Re.small&&!_.prevSmall||Re.gas&&!_.prevGas)&&(_.jetInputBuffer=.15),Wn.boost=0,Wn.small=0,_.boostInputBuffer>0&&_.nitro>0&&_.nitroTime<=0&&(If(),_.boostInputBuffer=0),_.jetInputBuffer>0&&_.smallJets>0&&_.jetCooldown<=0&&(Lf(),_.jetInputBuffer=0);let at=Pf.step(_,{steer:typeof qi=="number"?qi:g,gas:Re.gas||on.autoGas&&!Re.brake||Xi&&!Re.brake,brake:Re.brake},a,{sensitivity:on.sensitivity});ks=_.steering,_.boostActive=_.nitroTime>0,_.boostBlend=E(_.boostBlend,at.boost?1:0,1-Math.exp(-a*7));let xt=F(1-l.curv*_.l,.45,1.55),ft=_.vS/xt*a;_.s=Math.max(-8,_.s+ft),_.l+=_.vL*a;let Mt=Me(_.s),At=Tn(Mt.h-l.h),Nt=_.vS,ge=_.vL;_.vS=Nt*Math.cos(At)+ge*Math.sin(At),_.vL=-Nt*Math.sin(At)+ge*Math.cos(At),_.yaw=Tn(_.yaw-At);let gt=_.jump>0;(gt||_.vy>0)&&(_.vy-=17*a,_.jump=Math.max(0,_.jump+_.vy*a),_.jump<=0&&(_.vy=0,gt&&(hc(1,"\u843D\u5730\u55B7\u5DF2\u5C31\u7EEA"),Us("land")))),ze(a),gc-=_.vS*a/.4,di+=a,zs+=a,_.score+=Math.max(0,ft)*.85;let vt=Math.abs(Tn(_.yaw-_.velocityYaw));if(_.drifting&&vt>.035&&_.speed>5&&Math.abs(_.l)<7){let Ut=a*F((vt+.025)*_.speed*.11,0,3);_.driftCharge+=Ut,eu(Ut*42),_.score+=a*35}to=_.drifting,(Re.gas||on.autoGas)&&!Re.brake&&_.speed<.7&&Math.abs(_.l)>5.8?_.stuckTime+=a:_.stuckTime=0,_.stuckTime>1.6&&vc(!0);for(let Ut of un.values())for(let Xt of Ut.entities){if(Xt.kind==="cone"||Xt.kind==="barrier")continue;let Ot=Xt.s;ne==="circuit"&&(Ot+=Math.round((_.s-Ot)/Pe)*Pe);let ue=ne==="circuit"?Math.max(0,Math.floor(Ot/Pe)):0;Xt.hitLap===ue||Ot<Math.min(f,_.s)-1.4||Ot>Math.max(f,_.s)+1.4||Math.abs(_.l-Xt.l)>Xt.width||(Xt.kind==="coin"?(Xt.hitLap=ue,Xt.hit=!0,_.coins++,eu(3),_.score+=50,Vi(700+_.coins%5*80,.04)):Xt.kind==="pad"?(Xt.hitLap=ue,_.pad=1.55,_n("BOOST STRIP","\u52A0\u901F\u5E26 \xB7 \u4FDD\u6301\u8DEF\u7EBF",1),Us("nitro")):Xt.kind==="ramp"&&_.vS>7&&(Xt.hitLap=ue,_.vy=8,_.jump=.1,_.score+=120,hc(1,"\u7A7A\u55B7\u5DF2\u5C31\u7EEA")))}_.s>=_.checkpoint&&(_.checkpoint+=500,_.score+=500,_n("CHECKPOINT",Math.floor(_.s/500)*500+" m",1)),_.prevSteer=g,_.prevDrift=Re.drift,_.prevBoost=Re.boost,_.prevSmall=Re.small,_.prevGas=Re.gas,Bf(a),lu(),tp(a),ne==="circuit"&&_.s>=Bi()&&xc()},Fs=function(){let a={...Re};for(let l in Re)Re[l]=!1;for(let l of Ja)no[l]&&(Re[no[l]]=!0);for(let l of Za.values())Re[l]=!0;for(let l in Wn)Re[l]&&!a[l]&&Wn[l]++},ru=function(){return $a=Math.imul($a,1664525)+1013904223>>>0,$a/4294967296},Of=function(a){let l=(Math.imul(a+419,2654435761)^Bs)>>>0;return()=>(l=Math.imul(l,1664525)+1013904223>>>0,l/4294967296)},au=function(a){return 1.7*Math.sin(a*.005)+.65*Math.sin(a*.017)},_c=function(a){if(ne!=="circuit")for(;Kn[Kn.length-1].s<a+8;){let l=Kn[Kn.length-1],f=l.s+4;f>mc&&(pc=-h/2+(ru()-.5)*2.15,mc=f+90+ru()*130);let g=F((pc-l.h)*.022,-.0175,.0175);ja=E(ja,g,.15);let T=l.h+ja*4;Kn.push({s:f,p:[l.p[0]+Math.cos((T+l.h)*.5)*4,au(f),l.p[2]+Math.sin((T+l.h)*.5)*4],h:T})}},Me=function(a){if(ne==="circuit")return w(a);_c(a);let l=Math.floor((a+80)/4),f=F(l-Fr,0,Kn.length-2),g=Kn[f],T=Kn[f+1],A=F((a-g.s)/4,0,1),C=E(g.h,T.h,A);return{p:g.p.map((k,Y)=>E(k,T.p[Y],A)),h:C,T:[Math.cos(C),0,Math.sin(C)],R:[-Math.sin(C),0,Math.cos(C)],curv:(T.h-g.h)/4,slope:(T.p[1]-g.p[1])/4}},Ne=function(a,l=0,f=0){let g=Me(a);return d(d(g.p,S(g.R,l)),[0,f,0])},$n=function(a,l,f,g,T,A){let C=D(y(x(f,l),x(T,l)));C[1]<0&&(C=S(C,-1)),a.add(Vt([...l,...f,...g,...T],[...C,...C,...C,...C],[0,1,2,0,2,3]),ve,A,.06)},ou=function(a){let l=a*40,f=Me(l).p,g=new Qt,T=Of(a),A=ne==="circuit"?dc[nn().biome]:dc[(Math.floor(Math.max(0,l)/1e3)%3+3)%3],C=at=>x(at,f);for(let at=0;at<10;at++){let xt=l+at*4;if(ne==="circuit"&&xt>=Pe)break;let ft=Me(xt),Mt=Me(ne==="circuit"?Math.min(xt+4,Pe):xt+4),At=(Nt,ge,gt)=>C(d(d(Nt.p,S(Nt.R,ge)),[0,gt,0]));$n(g,At(ft,-7,.04),At(ft,7,.04),At(Mt,7,.04),At(Mt,-7,.04),"#69728e");for(let Nt of[-1,1])$n(g,At(ft,Nt*7,.06),At(ft,Nt*7.65,.06),At(Mt,Nt*7.65,.06),At(Mt,Nt*7,.06),(a*10+at)%2?"#d1b5e0":"#f4eced"),$n(g,At(ft,Nt*7.65,-.02),At(ft,Nt*(ne==="circuit"?11:64),-.08),At(Mt,Nt*(ne==="circuit"?11:64),-.08),At(Mt,Nt*7.65,-.02),A.ground);if(ne==="circuit")for(let Nt of[-1,1])$n(g,At(ft,Nt*8.6,.06),At(ft,Nt*11,.06),At(Mt,Nt*11,.06),At(Mt,Nt*8.6,.06),"#d9d9e4"),$n(g,At(ft,Nt*11,.06),At(ft,Nt*11,-1.25-ft.p[1]),At(Mt,Nt*11,-1.25-Mt.p[1]),At(Mt,Nt*11,.06),"#b5bbcb");if(ne==="circuit")for(let Nt of[-1,1])K(xt+2,Nt*20)&&($n(g,At(ft,Nt*11,-.12),At(ft,Nt*28,-.12),At(Mt,Nt*28,-.12),At(Mt,Nt*11,-.12),A.ground),$n(g,At(ft,Nt*28,-.12),At(ft,Nt*28,-1.25-ft.p[1]),At(Mt,Nt*28,-1.25-Mt.p[1]),At(Mt,Nt*28,-.12),"#bdc4c7"));if(at%3===0)for(let Nt of[-2.33,2.33]){let ge=Ne(xt+1.5,Nt,.061);g.add(lt(2.2,.015,.07,.004),q(C(ge),[1,1,1],[0,-ft.h,0]),"#e0e4e8")}}for(let at of[-1,1]){let xt=Array.from({length:11},(ft,Mt)=>C(Ne(l+Mt*4,at*8.1,.72)));v(g,xt,.07,"#b7c6d9"),v(g,Array.from({length:11},(ft,Mt)=>C(Ne(l+Mt*4,at*8.1,.4))),.045,"#c7d5e2");for(let ft=0;ft<5;ft++){let Mt=l+3+ft*8;if(ne==="circuit"&&Mt>Pe)break;let At=C(Ne(Mt,at*8.1,0));Gt(g,At,d(At,[0,.84,0]),.055,"#9caec2"),St(g,d(At,[0,.75,0]),[.12,.15,.19],ft%2?"#f7bbcf":"#fff1b9",.02)}}let O=[];function k(at,xt,ft){if(ne==="circuit"&&xt>Pe-20)return;let Mt=at==="coin"?Ie:at==="pad"?Gn:at==="ramp"?Ha:at==="cone"?Zt:bt;O.push({kind:at,s:xt,l:ft,node:new ye(Mt),hit:!1,width:at==="barrier"?1.5:at==="cone"?.85:at==="coin"?1.12:1.9})}if(a>=2){let at=Math.floor(T()*3),xt=[-4.2,0,4.2],ft=ne==="circuit"?Math.abs(Me(l+22).curv)<.013?.42:.12:a<7?.55:.85;if(T()<ft){let Mt=(at+1+Math.floor(T()*2))%3;k(T()<.75?"cone":"barrier",l+22,ne==="circuit"?Mt===1?-5.5:Math.sign(xt[Mt])*5.5:xt[Mt]),ne==="endless"&&a>10&&T()<.28&&k("cone",l+22,xt[3-at-Mt])}for(let Mt=0;Mt<4;Mt++)k("coin",l+7+Mt*7,xt[at]);a%4===0?k("pad",l+14,xt[at]):a>8&&a%7===0&&k("ramp",l+14,xt[at])}if(a===0){for(let ft=0;ft<12;ft++){let Mt=Ne(0,-7+ft*1.16,.075),At=Me(0);g.add(lt(.9,.015,1.12,.003),q(C(Mt),[1,1,1],[0,-At.h,0]),ft%2?"#e8e7ed":"#424b66")}for(let ft of[-1,1]){let Mt=C(Ne(0,ft*7.75,0));Gt(g,Mt,d(Mt,[0,5,0]),.12,wt)}let at=C(Ne(0,-7.75,5)),xt=C(Ne(0,7.75,5));Gt(g,at,xt,.16,wt);for(let ft=0;ft<7;ft++)z(g,C(Ne(0,-4.5+ft*1.5,5)),[.24,.24,.24],ft%2?"#f9d997":"#bfd9f4",!0)}let Y=new ye(g.finish());return Y.add(Tf(a,f,T)),{k:a,origin:f,node:Y,entities:O}},lu=function(){if(ne==="circuit"){let g=Math.ceil(Pe/40);for(let T=0;T<g;T++)un.has(T)||un.set(T,ou(T));return}let a=Math.max(-2,Math.floor(_.s/40)-3),l=Math.floor(_.s/40)+9;_c((l+1)*40);for(let g=a;g<=l;g++)un.has(g)||un.set(g,ou(g));for(let[g,T]of un)g<a&&(T.node.mesh.dispose(),un.delete(g));let f=Math.floor((_.s-210+80)/4);if(f>Fr){let g=Math.min(f-Fr,Kn.length-10);Kn.splice(0,g),Fr+=g}},gs=function(){Ja.clear(),Za.clear();for(let a in Wn)Wn[a]=0;for(let a in Re)Re[a]=!1;for(let a of document.querySelectorAll(".touch button"))a.classList.remove("held")},jn=function(a=!1){if(ne==="circuit"?(Nr(),Bs=Ke==="coast-reborn"?73121:95276):a&&(Bs=(Date.now()>>>0)%999999||72319),fc&&un.size)iu.set(fc,un);else for(let l of un.values())l.node.mesh.dispose();un=ne==="circuit"?iu.get(Ke)||new Map:new Map,fc=ne==="circuit"?Ke:null;for(let l of un.values())for(let f of l.entities){f.hit=!1,delete f.hitLap;for(let g of["ds","dl","vS","vL","angle","omega","tilt"])f[g]=0}Kn=[{s:-80,p:[0,au(-80),80],h:-h/2}],Fr=0,pc=-h/2,mc=115,ja=0,$a=Bs,Object.assign(_,{s:0,l:0,speed:0,steering:0,vS:0,vL:0,spin:0,contactSound:0,yaw:0,velocityYaw:0,energy:0,nitro:1,nitroTime:0,turnRate:0,driftDuration:0,driftLatch:!1,driftRewarded:!1,driftReleasing:!1,releaseAge:0,gripRecovery:0,driftCooldown:0,driftBuffer:0,lastSteer:0,lastSteerTime:0,prevSteer:0,lastDriftSide:0,jetInputBuffer:0,boostInputBuffer:0,tireGrip:10.5,tireLimit:68,exitFromGrip:3.6,exitFromLimit:38,driftPhase:"grip",exitTime:0,smallJets:0,smallWindow:0,smallCount:0,jetCooldown:0,jetHistory:[],combo:"",comboTimer:0,prevDrift:!1,prevBoost:!1,prevSmall:!1,prevGas:!1,coins:0,score:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,stuckTime:0,timePenalty:0}),gc=0,di=0,zs=0,to=!1,ks=0,fs=0,Os=60,ps=null,Ur=0;for(let l of ms)l.life=0;for(let l of Oi)l.life=0;gs(),_c(420),lu(),Gs=null,kr=null,_s=null,_.prevPose=null,N("seedText").textContent=String(Bs).padStart(6,"0"),N("bestText").textContent=zr.toLocaleString(),N("rerollBtn").hidden=ne==="circuit",N("endRunBtn").hidden=ne==="circuit",N("uploadStatus").textContent="",Br=0,Or=0,N("toast").classList.remove("show"),N("drift").classList.remove("on"),N("modeDistance").textContent=Math.round(Pe)+" m / \u5708 \xB7 "+nn().laps+" \u5708"},_n=function(a,l="",f=2){N("toastTitle").textContent=a,N("toastSub").textContent=l,N("toast").classList.add("show"),Or=f,N("status").textContent=a+" "+l},Vs=function(a=!1){if(Xi=!1,typeof nt<"u"&&nt.room){Jr();return}jn(a),se="countdown",Hi=3.05,N("welcome").hidden=!0,N("finished").hidden=!0,N("paused").hidden=!0,N("helpPanel").hidden=!0,N("musicPanel").hidden=!0,N("rankPanel").hidden=!0,Gi.classList.remove("menu-open"),N("countdown").hidden=!1,N("countdown").textContent="3",qa(),Se&&Se.ctx.resume().catch(()=>{}),Eu(),N("status").textContent="\u51C6\u5907\u8D77\u8DD1\u3002W \u52A0\u901F\uFF0CAD \u8F6C\u5411\uFF0CShift \u6F02\u79FB\uFF0C\u7A7A\u683C\u5C0F\u55B7\uFF0CE \u6C2E\u6C14\u3002"},Wi=function(){if(typeof nt<"u"&&nt.room&&se==="running"){gs(),_n("\u5728\u7EBF\u6BD4\u8D5B\u7EE7\u7EED\u8FDB\u884C","\u8054\u673A\u4E0D\u6682\u505C \xB7 \u70B9\u51FB\u623F\u95F4\u53EF\u9000\u51FA",1.5);return}se==="running"?(se="paused",gs(),N("paused").hidden=!1,N("status").textContent="\u6E38\u620F\u5DF2\u6682\u505C\u3002"):se==="paused"&&(se="running",N("paused").hidden=!0,Qa=performance.now())},xc=function(){if(se!=="finished"){se="finished",gs(),zr=Math.max(zr,Math.floor(_.s)),eo=Math.max(eo,Math.floor(_.score));try{localStorage.setItem("star-rush-best-distance",String(zr)),localStorage.setItem("star-rush-best-score",String(eo))}catch{}N("resultDistance").textContent=ne==="circuit"?Z($()):Math.floor(_.s).toLocaleString()+" m",N("resultMainLabel").textContent=ne==="circuit"?nn().laps+" \u5708\u7528\u65F6":"\u672C\u6B21\u91CC\u7A0B",N("resultScore").textContent=Math.floor(_.score).toLocaleString(),N("resultBest").textContent=_.coins+" \u679A",N("resultBestLabel").textContent="\u6536\u96C6\u91D1\u5E01",N("resultNote").textContent=ne==="circuit"?"\u51B2\u7EBF\u5B8C\u6210\uFF01\u53EF\u4EE5\u4E0A\u4F20\u6210\u7EE9\uFF0C\u548C\u670B\u53CB\u6BD4\u8F83\u5F53\u524D\u8D5B\u9053\u7684\u5B8C\u8D5B\u7528\u65F6\u3002":"\u672C\u6B21\u81EA\u7531\u8DD1\u5DF2\u7ED3\u7B97\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u91CC\u7A0B\u6210\u7EE9\u3002",N("finished").hidden=!1,Gi.classList.add("menu-open"),N("status").textContent="\u672C\u5C40\u7ED3\u675F\u3002",Hr={id:crypto.randomUUID(),mode:ne,track:ne==="circuit"?Ir:"endless-reborn",seed:Bs,distance:Math.round(Math.max(0,_.s)),timeMs:Math.round($()*1e3),score:Math.floor(_.score)},Zr||Wf(Hr),N("submitRun").disabled=!1,N("submitRun").textContent="\u4E0A\u4F20\u672C\u6B21\u6210\u7EE9",ep(),Vi(1100,.3)}},cu=function(a,l=5,f=[0,1,0]){let g=0;for(let T of Oi)T.life<=0&&g++<l&&(T.life=.35+Math.random()*.4,T.p=[...a],T.v=d(f,[(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3]),T.size=.04+Math.random()*.08)},vc=function(a=!1){if(se!=="running"&&se!=="paused")return;let l=[0,-3.7,3.7],f=0;for(let g of l){let T=!0;for(let A of un.values())for(let C of A.entities)(C.kind==="cone"||C.kind==="barrier")&&Math.abs(G(C.s,_.s))<7&&Math.abs(C.l-g)<C.width+1.1&&(T=!1);if(T){f=g;break}}_.prevPose=null,_.l=f,_.yaw=0,_.turnRate=0,_.velocityYaw=0,_.lateralSpeed=0,_.speed=F(_.speed,2,12),_.vS=_.speed,_.vL=0,_.spin=0,_.stuckTime=0,_.timePenalty=(_.timePenalty||0)+2,_.jump=0,_.vy=0,_.drifting=!1,_.driftSide=0,_.driftCharge=0,_.exitTime=0,_.driftReleasing=!1,_.driftBuffer=0,to=!1,ps=null,_n(a?"\u5DF2\u81EA\u52A8\u8131\u56F0":"\u8D5B\u8F66\u5DF2\u56DE\u6B63","\u7EE7\u7EED\u6309 W \u52A0\u901F \xB7 \u56DE\u6B63\u8BA1\u65F6 +2 \u79D2",1.5)},Bf=function(a){for(let C of ms)C.life=Math.max(0,C.life-a);let l=Math.abs(Tn(_.yaw-_.velocityYaw));if(!_.drifting&&!(_.exitTime>0&&l>.06)||_.speed<4||_.jump>.08){ps=null,Ur=0;return}if(Ur+=a,Ur<.025)return;Ur=0;let f=Me(_.s),g=Ne(_.s,_.l,.085),T=q(g,[.97,.97,.97],[0,-f.h-_.yaw,Math.atan(f.slope)]),A=[-1,1].map(C=>it(T,[-1.02,0,C*.83]));if(ps)for(let C=0;C<2;C++){let O=x(A[C],ps[C]),k=Math.hypot(O[0],O[2]);if(k>.05&&k<3){let Y=ms[Ff++%ms.length];Y.p=S(d(A[C],ps[C]),.5),Y.length=k+.035,Y.angle=-Math.atan2(O[2],O[0]),Y.life=2.5}}ps=A,l>.15&&cu(Ne(_.s-1,_.l,.2),1,S(f.T,-1.5))},zf=function(a,l){for(let f of Oi)f.life<=0||(f.life-=a,f.v[1]-=a*5,f.p=d(f.p,S(f.v,a)),f.node.local=q(x(f.p,l),[f.size,f.size,f.size]),Be.add(f.node))},kf=function(a,l){let f=se==="running"&&_.prevPose?F(fs/Ka,0,1):1,g=_.prevPose||_,T=E(g.s,_.s,f),A=E(g.l,_.l,f),C=g.yaw+Tn(_.yaw-g.yaw)*f,O=E(g.jump,_.jump,f),k=Me(T),Y=k.p,at=Ne(T,A,.06+O),xt=x(at,Y),ft=Math.atan(k.slope);Tt.tint=rn.paint,Tt.local=q(xt,[.97,.97,.97],[0,-k.h-C,ft]),Be.children=[Tt],Ef(Y,a),ne==="circuit"&&(io.mesh=Hf[nn().biome],io.local=B(-Y[0],-.9-Y[1],-Y[2]),io.shadow=!1,Be.add(io));for(let gt of un.values())if(!(ne==="circuit"&&Math.abs(G(gt.k*40,_.s))>265)){gt.node.local=B(...x(gt.origin,Y)),gt.node.shadow=Math.abs(G(gt.k*40,_.s))<90,Be.add(gt.node);for(let vt of gt.entities){if(vt.kind==="coin"&&vt.hitLap===Math.max(0,Math.floor(_.s/Pe)))continue;let Ut=Me(vt.s+(vt.ds||0)),Xt=Ne(vt.s+(vt.ds||0),vt.l+(vt.dl||0),vt.kind==="coin"?1.05+.12*Math.sin(a*3+vt.s):.08),Ot=q(x(Xt,Y),[1,1,1],[0,-Ut.h+(vt.kind==="coin"?a*2:-(vt.angle||0)),Math.atan(Ut.slope)]);vt.node.local=vt.kind==="cone"&&vt.tilt?R(Ot,R(B(0,.34,0),R(U(vt.tilt),B(0,-.25,0)))):Ot,vt.node.shadow=Math.abs(G(vt.s,_.s))<65,Be.add(vt.node)}}Wa(a,l,ks),zf(se==="running"?l:0,Y);for(let gt of ms)gt.life>0&&(gt.node.local=q(x(gt.p,Y),[gt.length,1,Math.min(1,gt.life)*1.2],[0,gt.angle,0]),Be.add(gt.node));let Mt=se==="ready"||se==="finished",At,Nt;if(Mt){let gt=.15*Math.sin(a*.16);At=d(at,d(S(k.T,5.6+gt),d(S(k.R,7.1),[0,3.5,0]))),Nt=d(at,d(S(k.R,-1.25),[0,.8,0]))}else{let gt=Xn===1?12.5:Xn===2?5.8:8.5,vt=Xn===1?9:Xn===2?2.9:4.5,Ut=k.h+_.velocityYaw;_s===null?_s=Ut:_s+=Tn(Ut-_s)*(1-Math.exp(-l*8));let Xt=[Math.cos(_s),0,Math.sin(_s)],Ot=d(S(k.T,_.vS/18),S(k.R,_.vL/18));At=d(d(at,Ot),d(S(Xt,-gt),[0,vt,0])),Nt=d(d(at,Ot),d(S(Xt,10),[0,1+O*.2,0]))}let ge=1-Math.exp(-l*(Mt?2.6:18));return Gs?(Gs=Gs.map((gt,vt)=>E(gt,At[vt],ge)),kr=kr.map((gt,vt)=>E(gt,Nt[vt],ge))):(Gs=At,kr=Nt),{eye:x(Gs,Y),target:x(kr,Y),origin:Y}},Vf=function(){if(!te)return;let a=yc.width,l=yc.height,f=Me(_.s),g=.86;if(ne==="circuit"){te.clearRect(0,0,a,l);let O=Lr,k=Math.min((a-45)/(O.maxX-O.minX),(l-30)/(O.maxZ-O.minZ)),Y=ft=>[a*.5+(ft[0]-(O.minX+O.maxX)*.5)*k,l*.5+(ft[2]-(O.minZ+O.maxZ)*.5)*k];te.lineJoin="round";for(let[ft,Mt]of[["#737e9d",13],["#dfe8f3",8]]){te.strokeStyle=ft,te.lineWidth=Mt,te.beginPath();for(let At=0;At<fn.length;At+=6){let Nt=Y(fn[At].p);At?te.lineTo(...Nt):te.moveTo(...Nt)}te.closePath(),te.stroke()}if(typeof qn<"u")for(let ft of qn){let Mt=Y(Me(ft.s).p);te.fillStyle=ft.color,te.beginPath(),te.arc(Mt[0],Mt[1],3.4,0,p),te.fill()}if(typeof nt<"u"&&nt.room){let ft=0;for(let Mt of nt.peers.values())if(Mt.position){let At=Y(Me(Mt.position.s).p);te.fillStyle=ao[ft++%ao.length],te.beginPath(),te.arc(At[0],At[1],4.5,0,p),te.fill()}}let at=Y(f.p),xt=Y(fn[0].p);te.fillStyle="#fff7dc",te.fillRect(xt[0]-3,xt[1]-5,6,10),te.save(),te.translate(...at),te.rotate(f.h+Math.PI/2),te.fillStyle="#ffe68b",te.beginPath(),te.moveTo(0,-8),te.lineTo(-5,5),te.lineTo(5,5),te.closePath(),te.fill(),te.restore();return}te.clearRect(0,0,a,l),te.strokeStyle="#c0d7e91c",te.lineWidth=1;for(let O=20;O<a;O+=30)te.beginPath(),te.moveTo(O,0),te.lineTo(O,l),te.stroke();for(let O=15;O<l;O+=30)te.beginPath(),te.moveTo(0,O),te.lineTo(a,O),te.stroke();let T=[];for(let O=-15;O<=205;O+=4){let k=x(Me(_.s+O).p,f.p);T.push([a*.5+P(k,f.R)*g,l*.88-P(k,f.T)*g])}for(let[O,k]of[["#7a85a3",15],["#dce8f0",10]]){te.strokeStyle=O,te.lineWidth=k,te.lineJoin="round",te.beginPath();for(let Y=0;Y<T.length;Y++)Y?te.lineTo(...T[Y]):te.moveTo(...T[Y]);te.stroke()}te.fillStyle="#ffe68b",te.beginPath();let A=a*.5+_.l*g,C=l*.88;te.moveTo(A,C-10),te.lineTo(A-7,C+7),te.lineTo(A+7,C+7),te.closePath(),te.fill()},Gf=function(a){if(Mc+=a,Mc<.06)return;Mc=0,fi.distance.textContent=Math.floor(_.s).toLocaleString(),fi.score.textContent=String(Math.floor(_.score)).padStart(5,"0"),fi.coins.textContent=String(_.coins).padStart(2,"0"),fi.speed.textContent=Math.round(_.speed*3.6),N("speedbar").style.width=Math.min(100,_.speed/83*100)+"%",fi.energyText.textContent=_.nitro+" \u74F6 / 2 \xB7 "+(_.nitroTime>0?_.nitroTime.toFixed(1)+"s":Math.floor(_.energy)+"%"),N("energyBar").style.width=_.energy+"%";let l=_.boostActive||_.pad>0||_.mini>0;fi.gear.textContent=l?"NITRO / BOOST":_.jump>0?"AIR TIME":_.drifting?"DRIFT MODE":_.speed<1?"READY TO RUSH":"SPORT / "+Math.max(1,Math.min(6,Math.ceil(_.speed/8))),N("boostfx").classList.toggle("on",l),N("raceTime").textContent=Z($()),N("lapLabel").textContent=ne==="circuit"?"LAP "+Math.min(nn().laps,Math.floor(Math.max(0,_.s)/Pe)+1)+" / "+nn().laps+" \xB7 \u5269\u4F59 "+Math.max(0,Math.ceil(Bi()-_.s))+" m":"\u65E0\u5C3D\u6A21\u5F0F \xB7 \u81EA\u7531\u7ADE\u901F",N("drift").classList.toggle("on",_.drifting||_.smallJets>0),N("driftBar").style.width=(_.smallJets>0?Math.min(100,_.smallWindow/1.5*100):Math.min(100,_.driftCharge/.55*100))+"%",fi.driftText.textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets:_.driftPhase==="entry"?"\u8F7B\u70B9\u8D77\u6F02":_.driftPhase==="counter"?"\u53CD\u6253\u6536\u8F66":_.driftPhase==="release"?"\u60EF\u6027\u6536\u6F02":"\u6F02\u79FB\u96C6\u6C14";for(let g of document.querySelectorAll("[data-key=small]"))g.classList.toggle("smalljet-ready",_.smallJets>0);N("jetCount").textContent=_.smallJets>0?"\u5C0F\u55B7 \xD7"+_.smallJets+" \xB7 "+_.smallWindow.toFixed(1)+"s":_.drifting?"\u6F02\u79FB\u96C6\u6C14\u4E2D":"\u7A7A\u683C / Q \u5C0F\u55B7";let f=Cu(_.s);fi.turnText.textContent=f.direction===0?"\u524D\u65B9\u76F4\u9053":f.direction>0?"\u524D\u65B9\u53F3\u5F2F":"\u524D\u65B9\u5DE6\u5F2F",fi.turnArrowPath.setAttribute("d",f.direction===0?"M12 21V3M5 10L12 3L19 10":f.direction>0?"M5 21V8H21M14 1L21 8L14 15":"M19 21V8H3M10 1L3 8L10 15"),Ri==="practice"&&!nt.room&&Ru(f),fi.biome.textContent=ne==="circuit"?bf(_.s).name:dc[(Math.floor(_.s/1e3)%3+3)%3].name,Vf()},hu=function(a,l=ve,f=!0,g=null,T=1){a.world=R(l,a.local);let A=f&&a.shadow,C=a.tint||g,O=a.opacity??T;a.mesh&&Sc.push({mesh:a.mesh,m:a.world,shadow:A,tint:C,opacity:O});for(let k of a.children)hu(k,a.world,A,C,O)},uu=function(){Vr=Math.max(1,i.clientWidth),Gr=Math.max(1,i.clientHeight);let a=Math.min(devicePixelRatio||1,1.5),l=Math.round(Vr*a),f=Math.round(Gr*a);(i.width!==l||i.height!==f)&&(i.width=l,i.height=f)},du=function(a){if(!o&&r.renderer.getContext().isContextLost())return;let l=Math.min(.1,Math.max(0,(a-Qa)/1e3));if(Qa=a,se==="countdown"){Hi=typeof nt<"u"&&nt.room&&nt.startAt?(nt.startAt-(Date.now()+nt.offset))/1e3:Hi-l;let T=Hi>.05?String(Math.ceil(Hi)):"GO!";N("countdown").textContent!==T&&(N("countdown").textContent=T,Vi(Hi>.05?400:900,.12)),Hi<=0&&(N("countdown").hidden=!0,se="running",di=typeof nt<"u"&&nt.room&&nt.startAt?Math.max(0,(Date.now()+nt.offset-nt.startAt)/1e3):0,_n("LET\u2019S RUSH!","W \u52A0\u901F \xB7 SHIFT \u6F02\u79FB \xB7 \u7A7A\u683C\u5C0F\u55B7 \xB7 E \u6C2E\u6C14",2))}if(typeof Mu=="function"&&Mu(a,l),sp(l),se==="running"){fs+=l;let T=0;for(;fs>=Ka&&se==="running"&&T++<12;)Nf(Ka),fs-=Ka;T>=12&&(fs=0)}else fs=0;(se==="ready"||se==="finished")&&(zs+=l*.25);let f=kf(zs,l);np(f.origin,l),typeof Su=="function"&&Su(f.origin,l),Or>0&&(Or-=l,Or<=0&&N("toast").classList.remove("show")),Br=Math.max(0,Br-l),N("hitflash").style.opacity=Math.min(.24,Br*.6),Rf(),typeof _u=="function"&&_u(),Sc.length=0,hu(Be),Os=E(Os,se==="ready"||se==="finished"?45:on.fov+_.boostBlend*3,1-Math.exp(-l*4));let g=R(st(Os*h/180,Vr/Gr,.12,850),ot(f.eye,f.target));$f(g),o?u(f):Rc=r.render(Sc,f,Vr,Gr,Os,on),ip(a,l),Gf(l),su||(su=!0,e.classList.add("done")),requestAnimationFrame(du)},fu=function(){try{return JSON.parse(localStorage.getItem("star-rush-runs-reborn")||"[]")}catch{return[]}},Wf=function(a){try{let l=fu();l.push({...a,name:localStorage.getItem("star-rush-name")||"\u672C\u673A\u8F66\u624B"}),localStorage.setItem("star-rush-runs-reborn",JSON.stringify(l.slice(-100)))}catch{}},Xf=function(a,l){let f=document.createElement("tr"),g=l.mode==="circuit"?Z(l.timeMs/1e3):l.distance.toLocaleString()+" m";for(let T of[String(a+1).padStart(2,"0"),l.name,g,Math.round(l.score).toLocaleString()]){let A=document.createElement("td");A.textContent=T,f.appendChild(A)}return f},qf=function(){xs=Ke,N("rankTrack")&&(N("rankTrack").value=xs),wi=ne,Ai=!1,Ws("rankPanel"),Wr()},pu=function(a){ne=a;for(let[l,f]of[["circuitMode","circuit"],["endlessMode","endless"]])N(l).classList.toggle("selected",a===f),N(l).setAttribute("aria-pressed",String(a===f));jn(!0),N("trackPicker").hidden=a!=="circuit",N("trackDescription").hidden=a!=="circuit"},mu=function(a){if(Pn[a]){if(typeof nt<"u"&&nt.room){_n("\u5DF2\u5728\u8054\u673A\u623F\u95F4","\u9000\u51FA\u623F\u95F4\u540E\u53EF\u66F4\u6362\u5730\u56FE",1.5);return}Ke=a,jn(!1),Xr()}},Xr=function(){for(let a of document.querySelectorAll("[data-track]"))a.classList.toggle("selected",a.dataset.track===Ke),a.setAttribute("aria-pressed",String(a.dataset.track===Ke));N("trackDescription").textContent=nn().description,N("modeDistance").textContent=Math.round(Pe)+" m / \u5708 \xB7 "+nn().laps+" \u5708"},Tc=function(){try{localStorage.setItem("star-rush-audio",JSON.stringify(wn))}catch{}},qr=function(){if(qa(),!Se)return!1;if(Se.ctx.state==="suspended"&&Se.ctx.resume().catch(()=>{}),ae.bus)return!0;ae.bus=Se.ctx.createGain();let a=Se.ctx.createDynamicsCompressor();return a.threshold.value=-18,a.ratio.value=3,ae.bus.connect(a),a.connect(Se.ctx.destination),ae.next=Se.ctx.currentTime+.08,!0},vs=function(a,l,f,g,T,A=0){let C=Se.ctx,O=C.createOscillator(),k=C.createGain();O.type=g,O.frequency.setValueAtTime(a,l),A&&O.frequency.exponentialRampToValueAtTime(A,l+f),k.gain.setValueAtTime(.001,l),k.gain.exponentialRampToValueAtTime(T,l+.008),k.gain.exponentialRampToValueAtTime(.001,l+f),O.connect(k),k.connect(ae.bus),O.start(l),O.stop(l+f+.02)},gu=function(a,l,f,g){let T=Se.ctx,A=T.createBufferSource(),C=T.createBiquadFilter(),O=T.createGain();A.buffer=Se.noise,C.type="highpass",C.frequency.value=f,O.gain.setValueAtTime(g,a),O.gain.exponentialRampToValueAtTime(.001,a+l),A.connect(C),C.connect(O),O.connect(ae.bus),A.start(a),A.stop(a+l+.02)},Yf=function(a,l){let f=.10135135135135136,g=Math.floor(a/16),T=a%16,A=[45,41,48,43],C=A[Math.floor(g/2)%4],O=at=>440*Math.pow(2,(at-69)/12);if(T%4===0&&vs(135,l,.18,"sine",.38,42),(T===4||T===12)&&(gu(l,.13,1200,.12),vs(180,l,.07,"triangle",.1,70)),T%2===0&&gu(l,.035,7500,T%4===2?.065:.04),T%2===0){let at=C+(T===14?12:0);vs(O(at-12),l,f*1.5,"sawtooth",.045),vs(O(at-12),l,f*1.5,"sine",.1)}let k=[0,7,12,15,12,7,10,7],Y=k[Math.floor(T/2)%8];if(T%2===1&&vs(O(C+24+Y),l,.16,"triangle",.045),T===0)for(let at of[0,3,7])vs(O(C+12+at),l,f*12,"triangle",.018);if(g%4>=2&&T%4===2){let at=[12,15,19,22,19,15,14,10][Math.floor(T/4)+4*(g%2)];vs(O(C+24+at),l,f*2.5,"sine",.055)}},_u=function(){if(!Se||!qr())return;let a=wn.enabled&&Fn&&!document.hidden&&ae.mode!=="classic",l=Se.ctx.currentTime;if(ae.bus.gain.setTargetAtTime(a?wn.volume*.42:0,l,.07),ae.mode==="synth"&&a){ae.next<l-.15&&(ae.next=l+.05);let f=0;for(;ae.next<l+.18&&f++<8;)Yf(ae.step++,ae.next),ae.next+=60/148/4}ae.element&&(a&&ae.mode==="local"?ae.element.paused&&ae.element.play().catch(()=>{}):ae.element.paused||ae.element.pause())},so=function(a){ae.mode=a,qr(),N("synthMusic").classList.toggle("selected",a==="synth"),N("classicMusic").classList.toggle("selected",a==="classic"),N("classicPlayer").hidden=a!=="classic",N("localMusicControls").hidden=a!=="local",N("musicToggle").hidden=a==="classic",a==="classic"?(N("spotifyPlayer").src||(N("spotifyPlayer").src="https://open.spotify.com/embed/track/"+N("classicTrack").value+"?utm_source=generator&theme=0"),N("nowPlaying").textContent="\u7ECF\u5178\u5916\u8BED\u6B4C\u5355 \xB7 \u5728\u4E0B\u65B9\u64AD\u653E\u5668\u70B9\u51FB\u64AD\u653E"):(N("spotifyPlayer").removeAttribute("src"),N("nowPlaying").textContent=a==="local"?ae.files[ae.index]?.name||"\u8BF7\u9009\u62E9\u97F3\u4E50\u6587\u4EF6":"STARLINE \xB7 \u539F\u521B\u7535\u5B50\u7ADE\u901F\u914D\u4E50")},ro=function(a){!ae.files.length||!qr()||(ae.index=(a+ae.files.length)%ae.files.length,ae.element||(ae.element=new Audio,ae.element.preload="auto",Se.ctx.createMediaElementSource(ae.element).connect(ae.bus),ae.element.onended=()=>ro(ae.index+1),ae.element.onerror=()=>{N("nowPlaying").textContent="\u6B64\u97F3\u9891\u65E0\u6CD5\u89E3\u7801\uFF0C\u8BF7\u6362\u4E00\u9996 MP3 / OGG / WAV"}),ae.element.pause(),ae.url&&URL.revokeObjectURL(ae.url),ae.url=URL.createObjectURL(ae.files[ae.index]),ae.element.src=ae.url,wn.enabled=!0,so("local"),ae.element.play().catch(()=>{N("nowPlaying").textContent="\u70B9\u51FB\u201C\u64AD\u653E\u97F3\u4E50\u201D\u540E\u7EE7\u7EED"}),N("musicToggle").textContent="\u6682\u505C\u97F3\u4E50")},Ws=function(a){let l=se==="running"&&!(typeof nt<"u"&&nt.room);Yr=Yr||l,l&&Wi();for(let f of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])f!==a&&(N(f).hidden=!0);gs(),N(a).hidden=!1},ys=function(a){N(a).hidden=!0,Yr&&se==="paused"&&Wi(),Yr=!1},wc=function(a){function l(T){let A=new ye(T.mesh);A.local=new Float32Array(T.local),A.shadow=T.shadow;for(let C of T.children)A.add(l(C));return A}let f=l(Tt),g=f.add(new ye(Jf[a%4]));return{root:f,marker:g,spin:0}},Zf=function(){return{s:_.s,l:_.l,vS:_.vS,vL:_.vL,yaw:_.yaw,jump:_.jump,mini:_.mini,nitroTime:_.nitroTime,paint:rn.paint,time:$(),finished:se==="finished"}},xu=function(){for(let a of nt.peers.values())a.label.remove();nt.peers.clear()},Ec=function(a){let l=nt.room?.status;nt.room=a.room,nt.members=a.members,nt.ready=!!a.members.find(g=>g.id===nt.id)?.ready,nt.errors=0;let f=new Set(a.members.map(g=>g.id));for(let[g,T]of nt.peers)f.has(g)||(T.label.remove(),nt.peers.delete(g));for(let g of a.members){if(g.id===nt.id)continue;let T=nt.peers.get(g.id);if(!T){let C=document.createElement("div");C.className="peer-label",C.textContent=g.name,Gi.appendChild(C),T={...wc(nt.peers.size),label:C,name:g.name,history:[],position:null,lastStamp:0},nt.peers.set(g.id,T)}T.label.textContent=g.name,T.name=g.name;let A=g.snapshot;A&&Number.isFinite(A.s)&&g.updatedAt>T.lastStamp&&(T.lastStamp=g.updatedAt,T.history.push({...A,t:g.updatedAt}),T.history.length>12&&T.history.shift())}if(nt.room.status==="racing"&&nt.room.startAt!==nt.runTag){nt.runTag=nt.room.startAt,nt.startAt=nt.room.startAt,Ke=nt.room.track,ne="circuit",jn(!1),Xr(),Eu();for(let T of nt.peers.values())T.history=[],T.position=null;let g=a.members.findIndex(T=>T.id===nt.id);_.l=(g%2?1:-1)*1.9,_.s=-Math.floor(g/2)*3.8,se="countdown",Hi=(nt.startAt-(Date.now()+nt.offset))/1e3,N("welcome").hidden=!0,N("finished").hidden=!0,N("paused").hidden=!0,N("roomPanel").hidden=!0,N("rankPanel").hidden=!0,Gi.classList.remove("menu-open"),N("countdown").hidden=!1,qa(),Se&&Se.ctx.resume().catch(()=>{})}if(nt.room.status==="lobby"&&l&&l!=="lobby"){nt.startAt=0,nt.runTag=0,se="ready",Ke=nt.room.track,ne="circuit",jn(!1),Xr(),N("countdown").hidden=!0,N("finished").hidden=!0,N("welcome").hidden=!1,Gi.classList.add("menu-open");for(let g of nt.peers.values())g.history=[]}Cc(),se==="finished"&&Pu()},Cc=function(){let a=!!nt.room;if(N("roomActions").hidden=!a,N("networkHud").hidden=!a,N("createRoom").disabled=a,N("joinRoom").disabled=a,N("roomCode").disabled=a,N("circuitMode").disabled=a,N("endlessMode").disabled=a,N("roomName").disabled=a&&nt.room.status==="racing",N("startBtn").textContent=a?"\u56DE\u5230\u8054\u673A\u623F\u95F4":"\u5F00\u59CB\u7ADE\u901F\u3000\u2197",!a){N("roomTitle").textContent="\u540C\u4E00\u6761\u8D5B\u9053\uFF0C\u4E00\u8D77\u51FA\u53D1\u3002",N("roomMembers").replaceChildren(),N("roomStatus").textContent="\u6700\u591A 4 \u4EBA \xB7 \u4F7F\u7528\u5F53\u524D\u9009\u62E9\u7684\u8DD1\u5708\u5730\u56FE";return}N("roomCode").value=nt.room.code,N("roomTitle").textContent="ROOM "+nt.room.code+" \xB7 "+Pn[nt.room.track].name,N("roomStatus").textContent=(nt.room.status==="racing"?"\u6BD4\u8D5B\u8FDB\u884C\u4E2D":nt.room.status==="finished"?"\u6BD4\u8D5B\u5DF2\u7ED3\u675F":"\u5019\u573A\u4E2D")+" \xB7 "+nt.members.length+" / 4 \u4EBA \xB7 "+Math.round(nt.rtt)+" ms \u5F80\u8FD4",N("roomMembers").replaceChildren();for(let T of nt.members){let A=document.createElement("div");A.className="room-member";let C=document.createElement("span");C.textContent=T.name+(T.id===nt.id?"\uFF08\u4F60\uFF09":"")+(T.id===nt.room.hostId?" \xB7 \u623F\u4E3B":"");let O=document.createElement("b");O.textContent=T.snapshot?.finished?"\u5B8C\u8D5B "+Z(T.snapshot.time||0):nt.room.status==="racing"?"\u6BD4\u8D5B\u4E2D":T.ready?"\u5DF2\u51C6\u5907":"\u7B49\u5F85\u51C6\u5907",A.append(C,O),N("roomMembers").appendChild(A)}let l=nt.room.hostId===nt.id,f=nt.room.status!=="lobby";N("startRoom").hidden=!l,N("startRoom").disabled=!f&&nt.members.some(T=>!T.ready),N("startRoom").textContent=f?"\u7ED3\u675F\u672C\u5C40 \xB7 \u8FD4\u56DE\u5019\u573A":"\u5168\u5458\u5C31\u7EEA \xB7 \u5F00\u59CB\u7ADE\u901F",N("readyRoom").hidden=f,N("readyRoom").textContent=nt.ready?"\u53D6\u6D88\u51C6\u5907":"\u51C6\u5907",N("connectionText").textContent=nt.errors?"\u8FDE\u63A5\u6062\u590D\u4E2D\u2026":"ROOM "+nt.room.code+" \xB7 "+Math.round(nt.rtt)+" ms";let g=nt.members.map(T=>({id:T.id,s:T.id===nt.id?_.s:T.snapshot?.s||0,finished:T.id===nt.id?se==="finished":!!T.snapshot?.finished,time:T.id===nt.id?$():T.snapshot?.time||0})).sort((T,A)=>T.finished&&A.finished?T.time-A.time:A.finished-T.finished||A.s-T.s);N("racePosition").textContent="POS "+(g.findIndex(T=>T.id===nt.id)+1)+" / "+nt.members.length},Jr=function(){Ws("roomPanel"),Cc()},Mu=function(a){if(!nt.room||nt.busy||document.hidden||a-nt.lastSync<(nt.room.status==="racing"?125:850))return;nt.lastSync=a,nt.busy=!0;let l=nt.session;Ac("poll",{snapshot:nt.room.status!=="lobby"?Zf():{}}).then(f=>{nt.room&&nt.session===l&&Ec(f)}).catch(f=>{nt.room&&nt.session===l&&(nt.errors++,N("connectionText").textContent="\u8FDE\u63A5\u6062\u590D\u4E2D \xB7 "+f.message,N("roomStatus").textContent=f.message)}).finally(()=>{nt.busy=!1})},Su=function(a,l){if(!nt.room)return;let f=Date.now()+nt.offset-F(nt.rtt*1.1,170,350);for(let g of nt.peers.values()){let T=g.history;if(!T.length){g.label.hidden=!0;continue}let A=T[0],C=A;for(let ft=1;ft<T.length&&(C=T[ft],!(C.t>=f));ft++)A=C;let O=A.t===C.t?0:F((f-A.t)/(C.t-A.t),0,1),k={};for(let ft of["s","l","vS","vL","jump"])k[ft]=E(A[ft]||0,C[ft]||0,O);k.yaw=(A.yaw||0)+Tn((C.yaw||0)-(A.yaw||0))*O;let Y=F((f-C.t)/1e3,0,.12);if(k.s+=(C.vS||0)*Y,k.l+=(C.vL||0)*Y,g.position&&Math.abs(k.s-g.position.s)<15){let ft=1-Math.exp(-l*24);k.s=E(g.position.s,k.s,ft),k.l=E(g.position.l,k.l,ft)}g.position=k;let at=Me(k.s),xt=Ne(k.s,k.l,.06+k.jump);g.worldPos=x(d(xt,[0,3,0]),a),g.root.tint=typeof C.paint=="string"?C.paint:ao[0],g.root.local=q(x(xt,a),[.97,.97,.97],[0,-at.h-k.yaw,Math.atan(at.slope)]),g.root.shadow=m(x(xt,Ne(_.s,_.l)))<70,Be.add(g.root),g.spin-=(k.vS||0)*l/.4;for(let ft=0;ft<dt.length;ft++){let Mt=dt[ft];g.root.children[2+ft].local=R(B(Mt.x,.41,Mt.z),W(g.spin))}for(let ft=0;ft<Et.length;ft++){let Mt=Et[ft],At=C.nitroTime>0||C.mini>0,Nt=At?.85+.16*Math.sin(zs*38+Mt.side):.001;g.root.children[6+ft].local=q([-1.9,.43,Mt.side*.34],[Nt,Nt,Nt])}}},$f=function(a){for(let l of nt.peers.values()){if(!l.worldPos||!nt.room||se==="ready"){l.label.hidden=!0;continue}let f=l.worldPos,g=f[0],T=f[1],A=f[2],C=a[3]*g+a[7]*T+a[11]*A+a[15],O=(a[0]*g+a[4]*T+a[8]*A+a[12])/C,k=(a[1]*g+a[5]*T+a[9]*A+a[13])/C;l.label.hidden=C<=0||Math.abs(O)>1.1||Math.abs(k)>1.1,l.label.hidden||(l.label.style.left=(O*.5+.5)*Vr+"px",l.label.style.top=(-k*.5+.5)*Gr+"px")}},Au=function(){return"star-rush-best-reborn-"+Ke},Qf=function(){try{return JSON.parse(localStorage.getItem(Au())||"null")}catch{return null}},Eu=function(){if(qn=[],Zr=!1,qs=null,Ei=Qf(),Ms=0,oo=[],lo=0,co=[],Xs=[],Ss=1,Kr=1,ho=0,N("resultGrid").replaceChildren(),N("splitLabel").textContent="SECTOR 1 / 3",N("splitDelta").textContent="",N("lapTimeLabel").textContent="",N("coach").hidden=Ri!=="practice",ne==="circuit"&&Ri==="race"&&!nt.room){_.l=-1.8;for(let a=0;a<3;a++){let l=wc(a);l.root.tint=Tu[a],qn.push({s:-3.8*Math.floor((a+1)/2),l:(a%2?1:-1)*1.9,speed:0,yaw:0,color:Tu[a],name:jf[a],node:l.root,finishAt:null,index:a})}}Ei&&on.ghost&&ne==="circuit"&&Ri==="timeTrial"&&!nt.room?(Ci=wc(3).root,Ci.tint="#b8e9e6",Ci.opacity=.27):Ci=null,Ic(),Ri==="practice"&&!nt.room&&Ru()},tp=function(a){for(let l of qn){if(l.finishAt!==null)continue;let f=0;for(let O=15;O<=65;O+=10)f=Math.max(f,Math.abs(Me(l.s+O).curv));let g=F(Math.sqrt(24/Math.max(.004,f)),24,53)*(1-l.index*.028);l.speed=E(l.speed,g,1-Math.exp(-a*(l.speed>g?3:1.2)));let T=Me(l.s+20).curv,A=Math.sign(T)*1.6+Math.sin(l.s*.012+l.index)*.45;for(let O of un.values())for(let k of O.entities)(k.kind==="barrier"||k.kind==="cone")&&G(k.s,l.s)>0&&G(k.s,l.s)<28&&Math.abs(A-k.l)<2.1&&(A=k.l>0?-2.8:2.8);let C=l.l;l.l=E(l.l,A,1-Math.exp(-a*2.3)),l.yaw=Math.atan2((l.l-C)/a,Math.max(5,l.speed))+F(T*12,-.4,.4),l.s+=l.speed*a,l.s>=Bi()&&(l.s=Bi(),l.finishAt=di,qs??=di)}if(ne==="circuit"&&!nt.room&&(lo+=a,lo>=.1&&(lo=0,oo.push([Number($().toFixed(3)),Number(_.s.toFixed(3)),Number(_.l.toFixed(3)),Number(_.yaw.toFixed(4)),Number(_.jump.toFixed(3))]))),ne==="circuit"){for(;_.s>=Ss*Pe/3&&Ss<=nn().laps*3;){co.push($());let l=Ei?.splits?.[Ss-1];if(N("splitLabel").textContent="SECTOR "+((Ss-1)%3+1)+" / 3",l){let f=$()-l;N("splitDelta").textContent=(f>0?"+":"\u2212")+Math.abs(f).toFixed(2)+" s",N("splitDelta").style.color=f>0?"#f1b8c6":"#b9edcf"}else N("splitDelta").textContent="\u5206\u6BB5 "+Z($()-(co[Ss-2]||0));Ss++}if(_.s>=Kr*Pe){let l=Xs.reduce((f,g)=>f+g,0);Xs.push($()-l),N("lapTimeLabel").textContent="\u4E0A\u4E00\u5708 "+Z(Xs.at(-1)),Kr<nn().laps&&_n("LAP "+(Kr+1),"\u4E0A\u4E00\u5708 "+Z(Xs.at(-1)),1.5),Kr++}}if(qs!==null&&di-qs>30&&_.s<Bi()){Zr=!0,xc();return}ho+=a,ho>.18&&(ho=0,Ic())},Ic=function(){if(nt.room){N("localPosition").textContent="ONLINE",N("eventLabel").textContent="\u597D\u53CB\u623F\u95F4 \xB7 "+nt.room.code;return}let a=1+qn.filter(l=>l.s>_.s).length;N("localPosition").textContent=qn.length?"POS "+a+" / 4":Ri==="practice"?"PRACTICE":"TIME ATTACK",N("eventLabel").textContent=qs!==null?"\u5B8C\u8D5B\u5012\u8BA1\u65F6 "+Math.max(0,30-Math.floor(di-qs))+" s":ne==="endless"?"\u65E0\u5C3D\u5DE1\u6E38":nn().name},Cu=function(a){let l=Tn(Me(a+62).h-Me(a+32).h);return{turn:l,direction:Math.abs(l)<.05?0:Math.sign(l),currentCurve:Me(a).curv}},Ru=function(a=Cu(_.s)){let l=a.direction>0?"\u53F3\u5F2F":a.direction<0?"\u5DE6\u5F2F":"",f=_.smallJets>0&&_.smallWindow>0,g="W / \u2191 \u52A0\u901F\uFF0C\u89C2\u5BDF\u524D\u65B9\u5F2F\u9053\u3002";_.drifting&&_.driftPhase==="counter"?g="\u53CD\u6253\u6536\u8F66\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002"+(f?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\u3002":""):_.drifting&&_.driftPhase==="release"||_.driftPhase==="exit"&&_.exitTime>0?g="\u6536\u6F02\u4E2D\uFF1A\u5148\u7A33\u4F4F\u65B9\u5411\u3002"+(f?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\uFF0C\u8F66\u5934\u7A33\u5B9A\u540E\u8854\u63A5\u3002":""):_.drifting?g=_.driftPhase==="entry"?"\u8D77\u6F02\u4E2D\uFF1A\u5C0F\u5E45\u8F6C\u5411\uFF0C\u51C6\u5907\u53CD\u6253\u6536\u8F66\u3002":"\u6F02\u79FB\u4E2D\uFF1A\u53CD\u6309\u65B9\u5411\u6536\u8F66\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002":f?g="\u5C0F\u55B7 \xD7"+_.smallJets+"\uFF1A\u8F66\u5934\u7A33\u5B9A\u540E\u70B9\u7A7A\u683C / Q\u3002"+(_.smallJets>1?"\u8FDE\u7EED\u4E24\u6B21\u53EF\u53CC\u55B7\u3002":""):_.nitroTime>0?g="\u6C2E\u6C14\u55B7\u5C04\u4E2D\uFF1A"+(l?"\u524D\u65B9"+l+"\uFF0C\u7A33\u4F4F\u65B9\u5411\u3002":"\u4FDD\u6301\u8DEF\u7EBF\uFF0C\u65E0\u9700\u91CD\u590D\u6309 E / C\u3002"):_.speed>10&&(l?g="\u524D\u65B9"+l+"\uFF1A\u5148\u6536\u6CB9\u63A7\u901F\uFF0C\u5E73\u987A\u8F6C\u5411\u3002":_.nitro>0&&_.speed>15&&Math.abs(a.currentCurve)<.006?g="\u524D\u65B9\u76F4\u9053\uFF1A\u8F66\u8EAB\u7A33\u5B9A\u540E\uFF0C\u53EF\u9009 E / C \u6C2E\u6C14\u3002":g="\u524D\u65B9\u76F4\u9053\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u7559\u610F\u4E0B\u4E00\u5F2F\u3002"),N("coach").textContent=g},Pu=function(){let a=nt.room?nt.members.filter(l=>l.id!==nt.id).map(l=>({name:l.name,time:l.snapshot?.finished?l.snapshot.time:null,s:l.snapshot?.s||0})):qn.map(l=>({name:l.name,time:l.finishAt,s:l.s}));if(a.push({name:rn.name+"\uFF08\u4F60\uFF09",time:Zr?null:$(),s:_.s}),a.sort((l,f)=>l.time===null&&f.time===null?f.s-l.s:l.time===null?1:f.time===null?-1:l.time-f.time),N("resultGrid").replaceChildren(),a.length>1)for(let l=0;l<a.length;l++){let f=document.createElement("div");f.className="result-row";let g=document.createElement("span"),T=document.createElement("b");g.textContent=l+1+". "+a[l].name,T.textContent=a[l].time===null?nt.room?.status==="racing"?"\u6BD4\u8D5B\u4E2D":"\u672A\u5B8C\u8D5B":Z(a[l].time),f.append(g,T),N("resultGrid").appendChild(f)}},ep=function(){if(Xi=!1,Pu(),Zr)N("resultDistance").textContent="DNF",N("resultNote").textContent="\u672C\u5C40\u672A\u80FD\u5728\u5012\u8BA1\u65F6\u7ED3\u675F\u524D\u5B8C\u8D5B\uFF0C\u53EF\u4EE5\u518D\u6311\u6218\u4E00\u6B21\u3002",N("submitRun").disabled=!0,Hr=null;else if(!nt.room&&ne==="circuit"&&oo.length>10&&(!Ei||$()<Ei.time))try{localStorage.setItem(Au(),JSON.stringify({time:$(),points:oo,splits:co,laps:Xs,date:Date.now()})),N("resultNote").textContent="\u5237\u65B0\u672C\u673A\u6700\u4F73\uFF01\u5DF2\u4FDD\u5B58\u5E7D\u7075\uFF0C\u53EF\u5728\u8BA1\u65F6\u6311\u6218\u4E2D\u8FFD\u9010\u81EA\u5DF1\u3002"}catch{}N("coach").hidden=!0},np=function(a,l){for(let f of qn){let g=Me(f.s);f.node.local=q(x(Ne(f.s,f.l,.07),a),[.97,.97,.97],[0,-g.h-f.yaw,Math.atan(g.slope)]),Be.add(f.node);for(let T=0;T<dt.length;T++){let A=dt[T];f.node.children[2+T].local=R(B(A.x,.41,A.z),W(-f.s/.4))}}if(Ci&&Ei?.points?.length&&se==="running"){let f=Ei.points,g=$();for(;Ms<f.length-2&&f[Ms+1][0]<g;)Ms++;let T=f[Ms],A=f[Ms+1],C=F((g-T[0])/(A[0]-T[0]||1),0,1),O=E(T[1],A[1],C),k=E(T[2],A[2],C),Y=T[3]+Tn(A[3]-T[3])*C,at=Me(O);Ci.local=q(x(Ne(O,k,.07+E(T[4],A[4],C)),a),[.97,.97,.97],[0,-at.h-Y,0]),Be.add(Ci)}if(on.line&&se==="running")for(let f=0;f<Pc.length;f++){let g=_.s+12+f*9,T=Me(g),A=F(T.curv*80,-2.1,2.1),C=Pc[f];C.mesh=wu[Math.abs(T.curv)*_.speed>.95?1:0],C.local=q(x(Ne(g,A,.085),a),[1,1,1],[0,-T.h,0]),Be.add(C)}},ip=function(a,l){let f=a-Iu;if(Iu=a,f>0&&f<1e3&&Ys.push(f),Ys.length>180&&Ys.shift(),Lc+=l,Lc<.25)return;Lc=0;let g=Ys.reduce((C,O)=>C+O,0)/(Ys.length||1),T=[...Ys].sort((C,O)=>C-O),A=T[Math.floor(T.length*.95)]||0;N("diagnostics").textContent="REBORN / "+(o?"Canvas compatibility":"Three.js WebGL 2")+`
FPS `+Math.round(1e3/(g||16.7))+" | frame p95 "+A.toFixed(1)+` ms
Draw `+Rc.drawCalls+" | triangles "+Rc.triangles+`
State `+se+" | event "+Ri+`
s `+_.s.toFixed(1)+" / "+Bi().toFixed(1)+" | l "+_.l.toFixed(2)+`
speed `+(_.speed*3.6).toFixed(1)+` km/h
steer `+ks.toFixed(2)+" | slip "+(Tn(_.yaw-_.velocityYaw)*180/Math.PI).toFixed(1)+`\xB0
drift `+_.driftPhase+" | small "+_.smallJets+" | nitro "+_.nitro+`
ready `+(nt.ready?"yes":"no")+" | peers "+nt.peers.size+(Se?.rail?`
rail `+Object.values(Se.rail.status().states).join("/")+" | "+Se.rail.status().last+" #"+Se.rail.status().played:"")},sp=function(a){if(qi=null,Xi&&se==="running"){let T=0;for(let xt=15;xt<=90;xt+=10)T=Math.max(T,Math.abs(Me(_.s+xt).curv));let A=F(.85/Math.max(.012,T),14,48),C=Me(_.s),O=Ne(_.s+F(_.speed*.45,12,26),0,0),k=x(O,Ne(_.s,_.l,0)),Y=Math.atan2(P(k,C.R),P(k,C.T)),at=Tn(Y-_.velocityYaw);qi=F((at*3+Me(_.s+12).curv*_.speed)/1.04,-1,1),Re.brake=_.speed>A+1.5,Re.gas=!Re.brake;return}let l=navigator.getGamepads?.()[0];if(!l){Nc&&(Fs(),Dc={},Nc=!1);return}Nc=!0,Fs();let f=Math.abs(l.axes[0]||0)>.13?l.axes[0]:0;f&&(qi=f);let g={gas:l.buttons[7]?.value>.13,brake:l.buttons[6]?.value>.13,drift:!!l.buttons[2]?.pressed,small:!!l.buttons[0]?.pressed,boost:!!l.buttons[1]?.pressed};for(let[T,A]of Object.entries(g))Re[T]||=A,A&&!Dc[T]&&T in Wn&&Wn[T]++;Dc=g},$r=function(){try{localStorage.setItem("star-rush-settings-reborn",JSON.stringify(on))}catch{}},uo=function(){rn.name=N("profileName").value.trim().slice(0,16)||rn.name;try{localStorage.setItem("star-rush-profile",JSON.stringify(rn)),localStorage.setItem("star-rush-name",rn.name)}catch{}N("carName").textContent=rn.car;for(let a of["roomName","racerName","profileName"])N(a).value=rn.name;N("profileStatus").textContent="\u5DF2\u4FDD\u5B58 \xB7 "+rn.name,Tt.tint=rn.paint},Uc=function(){for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])N(a).checked=!!on[l];N("qualitySetting").value=on.quality,N("steeringSetting").value=on.sensitivity*100,N("fovSetting").value=on.fov,N("settingsStatus").textContent=o?"\u5F53\u524D\u6D4F\u89C8\u5668\u4F7F\u7528\u517C\u5BB9\u663E\u793A\u6A21\u5F0F\uFF0C\u6BD4\u8D5B\u903B\u8F91\u548C\u64CD\u4F5C\u4FDD\u6301\u4E00\u81F4\u3002":"Three.js 3D \u6E32\u67D3 \xB7 \u8BBE\u7F6E\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5728\u6B64\u8BBE\u5907\u3002"},Du=function(){if(nt.room){Jr();return}Xi=!1,se="ready",jn(!1),qn=[],Ci=null,gs(),N("welcome").hidden=!1,N("paused").hidden=!0,N("finished").hidden=!0,N("coach").hidden=!0,Gi.classList.add("menu-open"),N("countdown").hidden=!0},ap=function(){for(let a of document.querySelectorAll("[data-track]")){let l=Pn[a.dataset.track],f=a.querySelector("svg");if(!l||!f)continue;let g=l.points.map(Mt=>Mt[0]),T=l.points.map(Mt=>Mt[2]),A=Math.min(...g),C=Math.max(...g),O=Math.min(...T),k=Math.max(...T),Y=Math.min(140/(C-A),54/(k-O)),at=l.points.map(Mt=>[80+(Mt[0]-(A+C)/2)*Y,35+(Mt[2]-(O+k)/2)*Y]),xt=document.createElementNS("http://www.w3.org/2000/svg","path");xt.setAttribute("d",at.map((Mt,At)=>(At?"L":"M")+Mt.join(",")).join(" ")+"Z"),xt.setAttribute("fill","none"),xt.setAttribute("stroke",l.biome?"#eabfd8":"#a9d8ec"),xt.setAttribute("stroke-width","3"),xt.setAttribute("stroke-linejoin","round"),f.replaceChildren(xt);let ft=document.createElementNS("http://www.w3.org/2000/svg","circle");ft.setAttribute("cx",at[0][0]),ft.setAttribute("cy",at[0][1]),ft.setAttribute("r","3"),ft.setAttribute("fill","#ffe2ac"),f.appendChild(ft)}},h=Math.PI,p=h*2,M=(a=0,l=0,f=0)=>[a,l,f],d=(a,l)=>a.map((f,g)=>f+l[g]),x=(a,l)=>a.map((f,g)=>f-l[g]),S=(a,l)=>a.map(f=>f*l),P=(a,l)=>a[0]*l[0]+a[1]*l[1]+a[2]*l[2],y=(a,l)=>[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],m=a=>Math.hypot(...a),D=a=>S(a,1/(m(a)||1)),F=(a,l,f)=>Math.min(f,Math.max(l,a)),E=(a,l,f)=>a+(l-a)*f,I=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),pt={green:"#7fb86c",light:"#a7d27d",dark:"#407750",spine:"#4c8056",belly:"#dfdb96",eye:"#fff2cf",iris:"#325f43",coral:"#df8064",rim:"#f2be8e",rubber:"#344b42",metal:"#b7c8b1",wood:"#b78c57",gold:"#d6b471",cream:"#f1ead2",grass:"#b7cc90",white:"#fff4d7",earth:"#b4976d",water:"#91c6b8",leaf:"#85ad74"},Te=new Map,le=jt(),zt=jt(12,8),me=De(),$e=De(8),xe=De(10,0),Ce=De(4,0),ve=I();class Qt{constructor(){this.data=[],this.indices=[]}add(l,f=ve,g=pt.green,T=.13){let A=typeof g=="string"?rt(g):g,C=X(f),O=this.data.length/10;for(let k=0;k<l.p.length;k+=3){let Y=it(f,l.p.slice(k,k+3)),at=j(C,l.n.slice(k,k+3));this.data.push(...Y,...at,...A,T)}for(let k of l.i)this.indices.push(O+k);return this}finish(l=!1){return new We(this.data,this.indices,l)}}class We{constructor(l,f){this.sourceData=new Float32Array(l),this.sourceIndices=new Uint32Array(f),this.count=f.length}update(l){this.sourceData=new Float32Array(l)}dispose(){this.onDispose&&this.onDispose()}}class ye{constructor(l=null,f=ve){this.mesh=l,this.local=f,this.children=[],this.shadow=!0,this.world=ve}add(l){return this.children.push(l),l}}let Be=new ye,qe=new Qt,je=new Qt,Q=73121,Tt=Be.add(new ye),yt=new Qt,ht="#83cde4",ut="#eff0f6",wt="#9c8ad5",kt="#343952",It="#ed94bd",Ct="#f8d1b5",Jt="#a3a9e5",ee="#7479b7";St(yt,[0,.47,0],[3.15,.43,1.42],ht,.16),St(yt,[.9,.68,0],[1.4,.27,1.42],ut,.13,[0,0,-.065],.5),St(yt,[.96,.83,0],[1.08,.035,.14],wt,.015,[0,0,-.065],.5),St(yt,[0,.38,0],[3.3,.15,1.48],kt,.07),St(yt,[1.53,.31,0],[.5,.075,1.9],wt,.035),St(yt,[-1.4,.39,0],[.45,.22,1.55],wt,.07);for(let a of[-.7,.7]){St(yt,[-.15,.64,a],[2.55,.35,.29],ht,.12,[0,0,0],.45),St(yt,[.1,.81,a],[1.55,.05,.2],ut,.02),St(yt,[-.17,.69,a*1.19],[.62,.19,.032],kt,.02,[0,0,-.12]);for(let l=0;l<4;l++)St(yt,[-.38+l*.12,.69,a*1.22],[.035,.13,.015],"#758ab5",.007,[0,0,-.15]);St(yt,[1.54,.66,a*.75],[.055,.14,.33],"#fff0b9",.035,[0,0,-.1],.65),St(yt,[-1.57,.62,a*.79],[.035,.12,.28],It,.035,[0,0,0],.6),St(yt,[-1.32,.85,a*.83],[.07,.55,.07],kt,.02),St(yt,[-1.38,1.13,a*1.34],[.43,.16,.055],wt,.025)}St(yt,[1.6,.44,0],[.04,.15,.67],kt,.03);for(let a=0;a<5;a++)St(yt,[1.63,.44,(a-2)*.115],[.014,.1,.024],"#6d7990",.006);St(yt,[-1.37,1.12,0],[.38,.065,1.94],ut,.03),St(yt,[-1.37,1.16,0],[.18,.018,1.68],wt,.007),St(yt,[-.42,.77,0],[1.05,.08,.94],kt,.05),St(yt,[-.69,1,0],[.18,.53,.64],kt,.08,[0,0,-.12]),St(yt,[-.6,1.23,0],[.18,.15,.5],wt,.05),St(yt,[.28,.94,0],[.075,.26,.91],"#bedde9",.025,[0,0,-.33],.6);for(let a of[-.75,.75])Gt(yt,[.22,.91,a*.84],[.31,1.04,a*1.1],.018,kt),z(yt,[.31,1.04,a*1.11],[.13,.055,.09],ut,!0,.6);Gt(yt,[.35,.82,0],[.1,1.08,0],.035,kt),yt.add(de(.16,.025,28,8),q([.1,1.08,0],[1,1,1],[0,h/2,-.35]),kt,.2);for(let a of[-.34,.34])yt.add(me,q([-1.64,.43,a],[.085,.2,.085],[0,0,h/2]),"#9babc2",.75);z(yt,[-.42,1.04,0],[.24,.29,.22],wt),z(yt,[-.36,1.29,0],[.095,.1,.09],Ct,!0);for(let a of[-1,1]){let l=[-.38,1.17,a*.22],f=[-.13,1.02,a*.29],g=[.09,1.09,a*.14];Gt(yt,l,f,.075,wt,.14,!0),Gt(yt,f,g,.06,wt,.14,!0),z(yt,g,[.085,.065,.065],ut,!0)}St(yt,[-.18,1.08,0],[.05,.31,.08],ut,.01);let ce=Tt.add(new ye(yt.finish()));ce.mesh.paintable=!0;let V=new Qt;z(V,[0,0,0],[.335,.355,.3],Ct),z(V,[-.19,-.01,0],[.2,.35,.32],ee),z(V,[-.025,.19,0],[.37,.255,.33],Jt);for(let a of[-1,1])z(V,[-.035,-.04,a*.29],[.13,.28,.095],Jt),z(V,[.308,.025,a*.13],[.02,.1,.067],ut,!0),z(V,[.326,.023,a*.13],[.012,.075,.043],"#5c72a5",!0,.4),z(V,[.338,.015,a*.13],[.008,.048,.027],"#303c65",!0),z(V,[.347,.058,a*.135],[.008,.02,.018],"#fffaf1",!0,.6),z(V,[.296,-.1,a*.2],[.014,.038,.045],"#e9a6ab",!0),v(V,[[.32,.132,a*.075],[.322,.148,a*.13],[.31,.132,a*.19]],.011,ee),L(V,[.215,.165,a*.18],[.1,.24,.085],Jt,[0,0,h+.2]),V.add(de(.084,.014,24,7),q([.33,.24,a*.125],[1,1,1],[0,h/2,0]),"#e8c58c",.6),z(V,[.335,.24,a*.125],[.012,.064,.066],"#a0d8e8",!0,.6);v(V,[[.317,-.148,-.037],[.326,-.16,0],[.317,-.148,.037]],.009,"#b77787"),V.add(de(.313,.02,40,7),q([-.025,.225,0],[1.05,1,1],[h/2,0,0]),kt),L(V,[.26,.17,-.04],[.1,.25,.08],Jt,[0,0,h+.25]);let Pt=Tt.add(new ye(V.finish())),dt=[];for(let a of[-1.02,1.06])for(let l of[-1,1]){let f=new Qt;f.add(de(.315,.095,40,12),ve,"#343b4c",.22),f.add(de(.255,.027,32,8),B(0,0,l*.075),"#e4e6ef",.7),f.add(me,q([0,0,l*.07],[.238,.07,.238],[h/2,0,0]),"#4d5576",.35);for(let T=0;T<5;T++){let A=T*p/5;Gt(f,[0,0,l*.116],[.23*Math.cos(A),.23*Math.sin(A),l*.116],.025,ut,.65)}z(f,[0,0,l*.14],[.075,.075,.022],wt,!0,.6);let g=Tt.add(new ye(f.finish()));dt.push({n:g,x:a,z:l*.83,front:a>0})}let Et=[];for(let a of[-1,1]){let l=new Qt;z(l,[0,0,0],[.65,.105,.105],"#a6f4ff",!0,.8),z(l,[-.3,0,0],[.35,.065,.065],"#e9d1ff",!0,.7);let f=Tt.add(new ye(l.finish()));f.shadow=!1,Et.push({n:f,side:a})}let Lt=new Qt;St(Lt,[0,.36,0],[.6,.72,2.1],"#ef97aa",.08),St(Lt,[0,.78,0],[.69,.16,2.2],ut,.035);for(let a=0;a<5;a++)St(Lt,[.312,.4,(a-2)*.38],[.018,.29,.16],"#fff0c7",.015,[.28,0,0]);for(let a of[-.85,.85])Gt(Lt,[0,.05,a],[0,.77,a],.045,"#636986");let bt=Lt.finish(),Kt=new Qt;St(Kt,[0,.07,0],[.8,.12,.8],kt,.04),L(Kt,[0,.49,0],[.28,.78,.28],"#e4b281"),L(Kt,[0,.53,0],[.2,.16,.2],ut);let Zt=Kt.finish(),Ue=new Qt;Ue.add(de(.34,.068,28,8),q([0,0,0],[1,1,1],[0,h/2,0]),"#f0d085",.7),z(Ue,[0,0,0],[.04,.22,.22],"#ffe7a7",!0,.55);let Ie=Ue.finish(),gn=new Qt;St(gn,[0,.025,0],[5.5,.045,3],"#7ecadc",.02);for(let a=0;a<3;a++){let l=-1.8+a*1.6;Gt(gn,[l-.45,.075,-.9],[l+.35,.075,0],.055,"#eef9d0",.3),Gt(gn,[l+.35,.075,0],[l-.45,.075,.9],.055,"#eef9d0",.3)}let Gn=gn.finish(),Cr=new Qt,Rr=[-2.5,0,-1.6,2.5,0,-1.6,2.5,1,-1.6,-2.5,0,1.6,2.5,0,1.6,2.5,1,1.6],oi=[0,1,2,3,5,4,0,2,5,0,5,3,1,4,5,1,5,2],ds=[],Ga=[],Pr=[];for(let a=0;a<oi.length;a+=3){let l=Rr.slice(oi[a]*3,oi[a]*3+3),f=Rr.slice(oi[a+1]*3,oi[a+1]*3+3),g=Rr.slice(oi[a+2]*3,oi[a+2]*3+3),T=D(y(x(f,l),x(g,l))),A=ds.length/3;ds.push(...l,...f,...g),Ga.push(...T,...T,...T),Pr.push(A,A+1,A+2)}Cr.add(Vt(ds,Ga,Pr),ve,"#d9b1e0");for(let a of[-1.4,1.4])Gt(Cr,[-2.5,.06,a],[2.5,1.06,a],.045,ut);let Ha=Cr.finish(),Ti=new Qt().add(zt,ve,"#b4eaff",.2).finish(),Oi=Array.from({length:45},()=>({life:0,p:[0,0,0],v:[0,0,0],size:.1,node:new ye(Ti)}));for(let a of Oi)a.node.shadow=!1;let ne="circuit",Ke="coast-reborn",Ir="coast-reborn",Pn={"coast-reborn":{name:"\u6C50\u89C1\u6D77\u5CB8",laps:1,biome:0,difficulty:"\u5165\u95E8 \xB7 \u9AD8\u901F\u7EC4\u5408\u5F2F",description:"\u6C50\u89C1\u7AD9\u524D \u2192 \u6D77\u6EE8\u5546\u5E97\u8857 \u2192 \u795E\u793E\u5C71\u9053 \u2192 \u6E2F\u6E7E S \u5F2F",sectors:[{at:0,name:"\u6C50\u89C1\u7AD9\u524D"},{at:.22,name:"\u6D77\u6EE8\u5546\u5E97\u8857"},{at:.48,name:"\u6E2F\u6E7E S \u5F2F"},{at:.66,name:"\u795E\u793E\u5C71\u9053"},{at:.82,name:"\u6D77\u98CE\u5927\u9053"}],points:[[-155,0,70],[-80,0,70],[0,.2,70],[85,.7,65],[135,1.2,30],[130,1.6,-20],[75,2,-28],[38,1.8,0],[0,1.5,-10],[8,.8,-58],[65,.2,-80],[115,0,-85],[130,.4,-125],[75,1,-150],[0,1.6,-145],[-60,2,-100],[-110,1.2,-135],[-155,.5,-100],[-200,0,-25],[-218,0,28],[-215,0,70]]},"sakura-reborn":{name:"\u82B1\u89C1\u5742",laps:2,biome:1,difficulty:"\u8FDB\u9636 \xB7 \u8FDE\u7EED\u53CD\u5411\u5F2F",description:"\u6A31\u82B1\u6821\u95E8 \u2192 \u82B1\u89C1\u5742\u5546\u5E97\u8857 \u2192 \u795E\u793E\u53C2\u9053 \u2192 \u6CB3\u5CB8\u56DE\u73AF",sectors:[{at:0,name:"\u6A31\u82B1\u7AD9\u524D"},{at:.22,name:"\u82B1\u89C1\u5742\u5546\u5E97\u8857"},{at:.47,name:"\u6CB3\u5CB8\u56DE\u73AF"},{at:.66,name:"\u795E\u793E\u53C2\u9053"},{at:.83,name:"\u6A31\u82B1\u5927\u9053"}],points:[[-180,0,70],[-95,0,70],[0,0,70],[95,.4,62],[170,1,16],[160,1.6,-45],[100,2,-70],[55,2.2,-30],[5,2,-55],[-16,1,-110],[-80,.5,-130],[-145,0,-104],[-220,0,-45],[-230,0,25],[-230,0,70]]}};Pn["academy-reborn"]={name:"\u661F\u8DC3\u8BAD\u7EC3\u573A",laps:1,biome:1,difficulty:"\u57FA\u7840\u9A7E\u9A76",description:"\u5BBD\u7F13\u5F2F\u9053 \xB7 \u6E05\u6670\u89C6\u91CE \xB7 \u7EC3\u4E60\u8D77\u6F02\u3001\u53CD\u6253\u4E0E\u51FA\u5F2F\u55B7\u5C04",sectors:[{at:0,name:"\u57FA\u7840\u76F4\u9053"},{at:.33,name:"\u6F02\u79FB\u5F27\u7EBF"},{at:.66,name:"\u51FA\u5F2F\u52A0\u901F"}],points:[[-100,0,65],[0,0,65],[100,0,65],[145,.3,25],[145,.4,-25],[100,.2,-65],[0,0,-65],[-100,0,-65],[-145,.1,-25],[-145,.1,25]]};for(let[a,l]of Object.entries(Pn)){let f=a==="coast-reborn"?1.45:a==="sakura-reborn"?1.5:1.2;l.points=l.points.map(g=>[g[0]*f,g[1],g[2]*f])}let fn=[],Pe=0,Lr={};Nr();let Dt=220,Ht=245,Rt=1.57,Wt=.91,$t=8.045,ie=(a,l)=>a[0]*l[0]+a[1]*l[1],fe=(a,l)=>a[0]*l[1]-a[1]*l[0],sn=new Map,ui=null,tu=null,cc=[],wf=Bt("petal",a=>St(a,[0,0,0],[.12,.025,.075],"#ffd2e8",.025)),Se=null,Fn=!0,Pf=(()=>{let a=(A,C,O)=>Math.min(O,Math.max(C,A)),l=(A,C,O)=>A+(C-A)*O,f=A=>Math.atan2(Math.sin(A),Math.cos(A)),g=Object.freeze({cruise:52,mini:63,nitro:76,combo:83,normalTurn:1.04,driftTurn:1.8,driveAcceleration:27,jetAcceleration:36});function T(A,C,O,k={}){let Y=Math.hypot(A.vS,A.vL),at=Y>.05?Math.atan2(A.vL,A.vS):A.yaw,xt=a(Number(C.steer)||0,-1,1),ft=k.sensitivity||1,Mt=A.vS*Math.cos(A.yaw)+A.vL*Math.sin(A.yaw)<-.05;A.steering=l(A.steering||0,xt,1-Math.exp(-O*26));let At=!!A.drifting,Nt=A.driftSide||Math.sign(xt)||1,ge=At&&xt*Nt<-.1,gt=At&&A.driftReleasing,vt=A.steering*g.normalTurn*ft*a(Y/8,0,1)*(Mt?-1:1);if(At){let op=Math.max(0,A.steering*Nt),lp=Nt*(ge?.4:.52+op*(g.driftTurn-.52)),cp=gt?a((A.releaseAge||0)/.38,0,1):0;vt=l(lp,vt,cp)*a(Y/9,0,1)}A.jump>.2&&(vt*=.35),A.turnRate=l(A.turnRate||0,vt,1-Math.exp(-O*(At?13:19)));let Ut=f(at+A.turnRate*O),Xt=f(at-(Mt?Math.PI:0)),Ot=f(A.yaw-Xt),ue=At?Nt*(ge?.015:gt?.12:.22+.38*Math.max(0,xt*Nt)):A.steering*.025;gt&&(ue*=1-a((A.releaseAge||0)/.45,0,1));let An=ge?13:At?9:8;Ot=l(Ot,ue,1-Math.exp(-O*An)),A.yaw=f(Ut-(Mt?Math.PI:0)+Ot+(A.spin||0)*O),A.spin=(A.spin||0)*Math.exp(-O*6);let He=Y,En=.7+Y*.018+Y*Y*45e-5,tn=A.nitroTime>0||A.mini>0||A.pad>0,bs=A.nitroTime>0?A.comboTimer>0?g.combo:g.nitro:A.pad>0?73:A.mini>0?g.mini:g.cruise,Js=C.gas&&!C.brake?a((g.cruise-He)*2.8,0,g.driveAcceleration):0,Zs=tn&&!C.brake?a((bs-He)*2.8,0,g.jetAcceleration):0,Yi=At?(ge?1.3:3.3)*Math.abs(Ot):0;return He=Math.max(0,He+(Js+Zs-En-Yi)*O),!tn&&He>g.cruise&&(He=Math.max(g.cruise,He-Math.min(8,(He-g.cruise)*.7)*O)),C.brake&&(He=Math.max(0,He-36*O)),Mt&&C.gas&&(He=Math.max(0,He-32*O)),C.brake&&!C.gas&&(Y<1.3||Mt)?(A.vS=l(A.vS,-Math.cos(A.yaw)*5,1-Math.exp(-O*5)),A.vL=l(A.vL,-Math.sin(A.yaw)*5,1-Math.exp(-O*5))):(A.vS=Math.cos(Ut)*He,A.vL=Math.sin(Ut)*He),A.speed=Math.hypot(A.vS,A.vL),A.velocityYaw=Ut,A.lateralSpeed=A.vL,{slip:Ot,counter:ge,thrust:Zs,boost:tn,speed:A.speed}}return{step:T,config:g,wrap:f}})(),Tn=a=>Math.atan2(Math.sin(a),Math.cos(a)),N=a=>document.getElementById(a),Gi=N("game"),Re={gas:!1,brake:!1,left:!1,right:!1,drift:!1,boost:!1,small:!1},Ja=new Set,Za=new Map,Wn={drift:0,boost:0,small:0},dc=[{name:"\u6C50\u89C1\u6D77\u5CB8",ground:"#cbdcbd",tree:"#b9d5bb",accent:"#afc8e4",fog:"#c8deef"},{name:"\u82B1\u89C1\u5742",ground:"#d9d7c7",tree:"#f0bfd5",accent:"#c9c1e5",fog:"#dcdff1"},{name:"\u661F\u5149\u5CE1\u8C37",ground:"#c4b8c3",tree:"#a7a5d3",accent:"#d8b4d8",fog:"#dbdce8"}],_={s:0,l:0,speed:0,yaw:0,velocityYaw:0,energy:0,coins:0,score:0,inv:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,wallRecover:0,wallSide:0,stuckTime:0},Ka=1/120,Ox=7.02,iu=new Map,fc=null,fs=0,Os=60,Ur=0,ps=null,Uf=new Qt().add(lt(1,.009,.12,.003),ve,"#414957",.01).finish(),ms=Array.from({length:160},()=>({life:0,p:[0,0,0],angle:0,length:1,node:new ye(Uf)}));for(let a of ms)a.node.shadow=!1;let Ff=0,se="ready",Bs=(Date.now()>>>0)%999999||24681,$a=1,Kn=[],Fr=0,pc=-h/2,mc=100,ja=0,un=new Map,gc=0,di=0,zs=0,Qa=performance.now(),Hi=3,Xn=0,ks=0,Or=0,Br=0,su=!1,to=!1,zr=0,eo=0;try{zr=Number(localStorage.getItem("star-rush-best-distance")||0),eo=Number(localStorage.getItem("star-rush-best-score")||0)}catch{}let fi=Object.fromEntries(["distance","score","coins","speed","gear","energyText","biome","turnText","turnArrowPath","driftText"].map(a=>[a,N(a)])),Gs=null,kr=null,_s=null,yc=N("minimap"),te=yc.getContext("2d"),Mc=0,no={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"small",KeyQ:"small",ShiftLeft:"drift",ShiftRight:"drift",KeyE:"boost",KeyC:"boost"};window.addEventListener("keydown",a=>{if(!a.target.closest("input,select,textarea")){if(a.code==="Escape"){for(let l of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])if(!N(l).hidden){ys(l);return}}if(!["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!N(l).hidden)){if(no[a.code]&&(a.preventDefault(),Ja.add(a.code),Fs()),a.code==="Backspace"){a.preventDefault(),a.repeat||vc(!1);return}a.repeat||(a.code==="F2"&&(a.preventDefault(),N("diagnostics").hidden=!N("diagnostics").hidden),(a.code==="KeyP"||a.code==="Escape")&&Wi(),a.code==="KeyV"&&(Xn=(Xn+1)%3,_n("CAMERA "+(Xn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Xn],1)),a.code==="KeyR"&&Vs(!1),a.code==="Enter"&&(se==="ready"||se==="finished"?Vs(!1):se==="paused"&&Wi()))}}}),window.addEventListener("keyup",a=>{["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!N(l).hidden)||no[a.code]&&(a.preventDefault(),Ja.delete(a.code),Fs())}),window.addEventListener("blur",()=>{gs(),se==="running"&&Wi()});for(let a of document.querySelectorAll("[data-key]")){a.addEventListener("pointerdown",f=>{f.preventDefault(),a.setPointerCapture(f.pointerId),Za.set(f.pointerId,a.dataset.key),Fs(),a.classList.add("held")});let l=f=>{Za.delete(f.pointerId),Fs(),a.classList.remove("held")};for(let f of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(f,l)}N("endRunBtn").onclick=()=>{ne==="endless"&&(se==="running"||se==="paused")&&(N("paused").hidden=!0,xc())},N("recoverBtn").onclick=()=>vc(!1),N("startBtn").onclick=()=>Vs(!1),N("retryBtn").onclick=()=>Vs(!1),N("newRouteBtn").onclick=()=>{if(typeof nt<"u"&&nt.room){Jr();return}se="ready",jn(!0),N("finished").hidden=!0,N("welcome").hidden=!1},N("rerollBtn").onclick=()=>jn(!0),N("pauseBtn").onclick=Wi,N("resumeBtn").onclick=Wi,N("restartPause").onclick=()=>Vs(!1),N("viewBtn").onclick=()=>{Xn=(Xn+1)%3,_n("CAMERA "+(Xn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][Xn],1)},N("soundBtn").onclick=()=>{qa(),Fn=!Fn,Se&&Se.ctx.resume().catch(()=>{}),N("soundBtn").textContent=Fn?"\u266B":"\u266A",N("soundBtn").setAttribute("aria-label",Fn?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),N("soundBtn").title=Fn?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED",Fn&&Vi(600)};let Hf=["#a1cddd","#c2d4bc"].map(a=>new Qt().add(lt(1100,.16,1100,.04),ve,a,.02).finish()),io=new ye,Sc=[],Vr=1,Gr=1;new ResizeObserver(uu).observe(i),uu(),jn(!1),i.addEventListener("webglcontextlost",a=>{a.preventDefault(),n("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u6E38\u620F\u3002")}),document.addEventListener("visibilitychange",()=>{document.hidden&&se==="running"&&Wi(),Qa=performance.now()}),requestAnimationFrame(du);let xs=Ke,Hr=null,wi="circuit",Ai=!1,bc=0;async function Wr(){let a=++bc,l=N("rankRows");N("rankTrack")&&(N("rankTrack").hidden=wi!=="circuit"),l.replaceChildren(),N("rankStatus").textContent=Ai?"\u672C\u673A\u8BB0\u5F55":"\u6B63\u5728\u83B7\u53D6\u5728\u7EBF\u6210\u7EE9\u2026";for(let[f,g]of[["boardCircuit","circuit"],["boardEndless","endless"]])N(f).classList.toggle("selected",!Ai&&wi===g);N("boardLocal").classList.toggle("selected",Ai);try{let f;if(Ai)f=fu().filter(g=>g.mode===wi&&(g.mode==="endless"||g.track===xs)).sort((g,T)=>wi==="circuit"?g.timeMs-T.timeMs:T.distance-g.distance).slice(0,20);else{let g=await fetch("/api/leaderboard?mode="+wi+"&track="+encodeURIComponent(xs));if(!g.ok)throw new Error("\u699C\u5355\u670D\u52A1\u6682\u4E0D\u53EF\u7528");f=(await g.json()).runs}if(a!==bc)return;for(let g=0;g<f.length;g++)l.appendChild(Xf(g,f[g]));N("rankStatus").textContent=f.length?(Ai?"\u5F53\u524D\u8BBE\u5907 \xB7 ":"\u5728\u7EBF \xB7 ")+(wi==="circuit"?Pn[xs].name+" / "+Pn[xs].laps+" \u5708 / \u6309\u6700\u5FEB\u7528\u65F6":"\u65E0\u5C3D\u6A21\u5F0F / \u6309\u6700\u8FDC\u91CC\u7A0B"):"\u8FD8\u6CA1\u6709\u6210\u7EE9\uFF0C\u6765\u8DD1\u7B2C\u4E00\u5708\u3002"}catch{if(a!==bc)return;N("rankStatus").textContent="\u5728\u7EBF\u699C\u6682\u65F6\u672A\u80FD\u52A0\u8F7D\uFF0C\u53EF\u5207\u6362\u201C\u672C\u673A\u8BB0\u5F55\u201D\u3002"}}N("rankBtn").onclick=qf,N("closeRank").onclick=()=>ys("rankPanel"),N("boardCircuit").onclick=()=>{wi="circuit",Ai=!1,Wr()},N("boardEndless").onclick=()=>{wi="endless",Ai=!1,Wr()},N("boardLocal").onclick=()=>{Ai=!0,Wr()},N("circuitMode").onclick=()=>pu("circuit"),N("endlessMode").onclick=()=>pu("endless");try{N("racerName").value=localStorage.getItem("star-rush-name")||""}catch{}N("submitRun").onclick=async()=>{if(!Hr)return;let a=N("racerName").value.trim().slice(0,16)||"\u533F\u540D\u8F66\u624B";try{localStorage.setItem("star-rush-name",a)}catch{}N("submitRun").disabled=!0,N("uploadStatus").textContent="\u6B63\u5728\u4E0A\u4F20\u6210\u7EE9\u2026";try{if(!(await fetch("/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...Hr,name:a})})).ok)throw new Error;N("submitRun").textContent="\u5DF2\u4E0A\u4F20",N("uploadStatus").textContent="\u4E0A\u4F20\u6210\u529F\uFF01\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u699C\u201D\u67E5\u770B\u548C\u670B\u53CB\u7684\u6392\u540D\u3002"}catch{N("submitRun").disabled=!1,N("uploadStatus").textContent="\u6682\u65F6\u672A\u80FD\u4E0A\u4F20\uFF0C\u672C\u673A\u6210\u7EE9\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u91CD\u8BD5\u3002"}};for(let a of document.querySelectorAll("[data-track]"))a.onclick=()=>mu(a.dataset.track);Xr();let Hs=document.createElement("select");Hs.id="rankTrack",Hs.setAttribute("aria-label","\u6392\u884C\u699C\u8D5B\u9053");for(let[a,l]of Object.entries(Pn)){let f=document.createElement("option");f.value=a,f.textContent=l.name,Hs.appendChild(f)}N("rankStatus").before(Hs),Hs.onchange=()=>{xs=Hs.value,Wr()};let wn={enabled:!0,volume:.4,sfxVolume:.75};try{Object.assign(wn,JSON.parse(localStorage.getItem("star-rush-audio")||"{}"))}catch{}let ae={mode:"synth",bus:null,step:0,next:0,files:[],index:0,url:null,element:null},Yr=!1;N("musicBtn").onclick=()=>{qr(),Ws("musicPanel")},N("closeMusic").onclick=()=>ys("musicPanel"),N("helpBtn").onclick=N("welcomeHelp").onclick=()=>Ws("helpPanel"),N("closeHelp").onclick=()=>ys("helpPanel"),N("synthMusic").onclick=()=>so("synth"),N("classicMusic").onclick=()=>so("classic"),N("musicFiles").onchange=a=>{ae.files=Array.from(a.target.files||[]),ro(0)},N("nextSong").onclick=()=>ro(ae.index+1),N("previousSong").onclick=()=>ro(ae.index-1),N("musicToggle").onclick=()=>{qr(),wn.enabled=!wn.enabled,N("musicToggle").textContent=wn.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",Tc()},N("musicVolume").value=Math.round(wn.volume*100),N("sfxVolume").value=Math.round(wn.sfxVolume*100),N("musicToggle").textContent=wn.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",N("musicVolume").oninput=a=>{wn.volume=Number(a.target.value)/100,Tc()},N("sfxVolume").oninput=a=>{wn.sfxVolume=Number(a.target.value)/100,Tc()},N("classicTrack").onchange=()=>{so("classic"),N("spotifyPlayer").src="https://open.spotify.com/embed/track/"+N("classicTrack").value+"?utm_source=generator&theme=0"};let nt={id:crypto.randomUUID(),room:null,members:[],ready:!1,busy:!1,lastSync:0,offset:0,startAt:0,runTag:0,peers:new Map,errors:0,rtt:0,session:0},ao=["#f6aec9","#ffd88b","#baafff","#a8efce"],Jf=ao.map(a=>{let l=new Qt;return L(l,[0,2.55,0],[.14,.28,.14],a,[0,0,h]),l.finish()});async function Ac(a,l={}){let f=Date.now(),g=await fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:a,id:nt.id,code:nt.room?.code||N("roomCode").value.trim(),name:N("roomName").value.trim()||"\u533F\u540D\u8F66\u624B",track:Ke,...l}),signal:AbortSignal.timeout(4e3)}),T=await g.json();if(!g.ok)throw new Error(T.error||"\u623F\u95F4\u8BF7\u6C42\u5931\u8D25");if(nt.rtt=Date.now()-f,T.serverTime){let A=T.serverTime-(f+Date.now())/2;nt.offset=nt.room?E(nt.offset,A,.25):A}return T}async function vu(a){if(!nt.busy){nt.busy=!0,N("roomStatus").textContent="\u6B63\u5728\u8FDE\u63A5\u623F\u95F4\u2026";try{let l=await Ac(a);nt.session++,xu(),Ke=l.room.track,ne="circuit",jn(!1),Xr(),Ec(l),se="ready",Yr=!1,N("paused").hidden=!0,N("finished").hidden=!0,N("welcome").hidden=!1,Gi.classList.add("menu-open");try{localStorage.setItem("star-rush-name",N("roomName").value.trim())}catch{}}catch(l){N("roomStatus").textContent=l.message}finally{nt.busy=!1}}}async function yu(a,l={}){if(nt.busy)return;nt.busy=!0;let f=nt.session;try{let g=await Ac(a,l);f===nt.session&&nt.room&&Ec(g)}catch(g){N("roomStatus").textContent=g.message}finally{nt.busy=!1}}async function Kf(){if(!nt.room)return;let a={action:"leave",id:nt.id,code:nt.room.code,name:N("roomName").value};nt.session++,nt.room=null,nt.startAt=0,nt.runTag=0,nt.members=[],xu(),se="ready",jn(!1),N("finished").hidden=!0,N("paused").hidden=!0,N("countdown").hidden=!0,N("welcome").hidden=!1,Gi.classList.add("menu-open"),Cc(),fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),keepalive:!0}).catch(()=>{})}N("roomBtn").onclick=N("welcomeRoom").onclick=Jr,N("closeRoom").onclick=()=>ys("roomPanel"),N("createRoom").onclick=()=>vu("create"),N("joinRoom").onclick=()=>vu("join"),N("readyRoom").onclick=()=>yu("ready",{ready:!nt.ready}),N("startRoom").onclick=()=>yu(nt.room?.status!=="lobby"?"reset":"start"),N("leaveRoom").onclick=Kf,N("copyRoom").onclick=async()=>{if(!nt.room)return;let a=new URL(location.href);a.searchParams.set("room",nt.room.code);try{await navigator.clipboard.writeText(a.toString()),N("roomStatus").textContent="\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5373\u53EF\u52A0\u5165"}catch{N("roomStatus").textContent="\u623F\u95F4\u7801 "+nt.room.code+" \xB7 \u590D\u5236\u6D4F\u89C8\u5668\u5730\u5740\u5E76\u52A0\u4E0A ?room="+nt.room.code}};try{N("roomName").value=localStorage.getItem("star-rush-name")||"\u8F66\u624B"+Math.floor(100+Math.random()*900)}catch{}let bu=new URLSearchParams(location.search).get("room");bu&&(N("roomCode").value=bu.toUpperCase().slice(0,6),Jr()),window.addEventListener("pagehide",()=>{nt.room&&navigator.sendBeacon("/api/rooms",new Blob([JSON.stringify({action:"leave",id:nt.id,code:nt.room.code})],{type:"application/json"}))});let qn=[],Xi=!1,qi=null,Rc={drawCalls:0,triangles:0},Zr=!1,Ei=null,Ci=null,Ms=0,oo=[],lo=0,co=[],Xs=[],Ss=1,Kr=1,qs=null,ho=0,jf=["Aoi / AI","Haru / AI","Rin / AI"],Tu=["#f0a7c8","#b6a7e6","#f1cd90"],wu=["#a5dbe6","#f0b7c3"].map(a=>{let l=new Qt;return Gt(l,[-.6,.03,-.38],[.1,.03,0],.055,a),Gt(l,[.1,.03,0],[-.6,.03,.38],.055,a),l.finish()}),Pc=Array.from({length:9},()=>new ye(wu[0]));for(let a of Pc)a.shadow=!1;let Ys=[],Lc=0,Iu=performance.now(),Dc={},Nc=!1,Lu={quality:"auto",sensitivity:1,fov:62,autoGas:!1,line:!0,ghost:!0},on={...Lu},rn={name:"\u8F66\u624B"+Math.floor(100+Math.random()*900),paint:"#83cde4",car:"Mint Comet"},Ri="race";try{Object.assign(on,JSON.parse(localStorage.getItem("star-rush-settings-reborn")||"{}")),Object.assign(rn,JSON.parse(localStorage.getItem("star-rush-profile")||"{}")),rn.name=localStorage.getItem("star-rush-name")||rn.name}catch{}let rp=[["Mint Comet","#83cde4","\u8584\u8377\u5F57\u661F"],["Sakura Bloom","#efabc8","\u6A31\u82B1\u7EFD\u653E"],["Violet Hour","#b1a0df","\u66AE\u8272\u7D2B"],["Solar Flare","#edc784","\u65E5\u5149\u91D1"]];N("settingsBtn").onclick=()=>{Uc(),Ws("settingsPanel")},N("closeSettings").onclick=()=>ys("settingsPanel");for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])N(a).onchange=f=>{on[l]=f.target.checked,$r()};N("qualitySetting").onchange=a=>{on.quality=a.target.value,$r()},N("steeringSetting").oninput=a=>{on.sensitivity=Number(a.target.value)/100,$r()},N("fovSetting").oninput=a=>{on.fov=Number(a.target.value),$r()},N("resetSettings").onclick=()=>{on={...Lu},$r(),Uc()};for(let[a,l,f]of rp){let g=document.createElement("button");g.type="button",g.style.setProperty("--paint",l),g.setAttribute("aria-label",f+"\u6D82\u88C5");let T=document.createElement("i"),A=document.createElement("b"),C=document.createElement("small");A.textContent=a,C.textContent=f,g.append(T,A,C),g.onclick=()=>{rn.paint=l,rn.car=a;for(let O of N("garageGrid").children)O.classList.toggle("selected",O===g);uo()},rn.paint===l&&g.classList.add("selected"),N("garageGrid").appendChild(g)}N("garageBtn").onclick=()=>Ws("garagePanel"),N("closeGarage").onclick=()=>ys("garagePanel"),N("saveProfile").onclick=uo,N("profileName").value=rn.name,uo(),N("eventType").onchange=a=>{Ri=a.target.value,Ri==="practice"&&mu("academy-reborn")},N("pauseHome").onclick=Du,N("newRouteBtn").onclick=Du,N("demoBtn").onclick=()=>{Vs(!1),Xi=!0,_n("DEMO DRIVE","\u81EA\u52A8\u8BD5\u9A7E \xB7 \u6309\u4EFB\u610F\u65B9\u5411\u952E\u63A5\u7BA1",2)},window.addEventListener("keydown",a=>{a.target.closest("input,select,textarea")||["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a.code)&&Xi&&(Xi=!1,qi=null,_n("YOUR TURN","\u5DF2\u63A5\u7BA1\u8D5B\u8F66",1))}),N("compatNotice").hidden=!o,ap(),Uc(),Ic();for(let a of["racerName","roomName"])N(a).addEventListener("change",()=>{N("profileName").value=N(a).value,uo()});Mf(document,{"coast-reborn":"/assets/course-art/coast-v2.bd2e4837727f.webp","sakura-reborn":"/assets/course-art/sakura-v1.3b94eedaa6d8.webp","academy-reborn":"/assets/course-art/academy-v1.9c6071e18e14.webp"})}catch(u){console.error(u),n("\u6E38\u620F\u521D\u59CB\u5316\u5F02\u5E38\uFF1A"+u.message)}})();})();
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
