(()=>{var id=0,dh=1,sd=2;var Ea=1,fl=2,Sr=3,as=0,pn=1,yi=2,Mi=0,br=1,fh=2,ph=3,mh=4,rd=5;var Ps=100,ad=101,od=102,ld=103,cd=104,hd=200,ud=201,dd=202,fd=203,gh=204,_h=205,pd=206,md=207,gd=208,_d=209,xd=210,vd=211,yd=212,Md=213,Sd=214,Uo=0,Fo=1,Oo=2,pr=3,Bo=4,zo=5,ko=6,Vo=7,xh=0,bd=1,Td=2,ri=0,vh=1,yh=2,Mh=3,Ca=4,Sh=5,bh=6,Th=7;var wh=300,os=301,Is=302,pl=303,ml=304,Ra=306,Go=1e3,mi=1001,Ho=1002,je=1003,wd=1004;var Pa=1005;var fn=1006,gl=1007;var ls=1008;var Nn=1009,Ah=1010,Eh=1011,Tr=1012,_l=1013,ai=1014,Zn=1015,oi=1016,xl=1017,vl=1018,wr=1020,Ch=35902,Rh=35899,Ph=1021,Ih=1022,Kn=1023,gi=1026,cs=1027,Ar=1028,yl=1029,hs=1030,Ml=1031;var Sl=1033,Ia=33776,La=33777,Da=33778,Na=33779,bl=35840,Tl=35841,wl=35842,Al=35843,El=36196,Cl=37492,Rl=37496,Pl=37488,Il=37489,Ua=37490,Ll=37491,Dl=37808,Nl=37809,Ul=37810,Fl=37811,Ol=37812,Bl=37813,zl=37814,kl=37815,Vl=37816,Gl=37817,Hl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,Jl=36494,Zl=36495,Kl=36283,$l=36284,Fa=36285,jl=36286;var sa=2300,Wo=2301,Do=2302,rh=2303,ah=2400,oh=2401,lh=2402;var Ad=3200;var Ql=0,Ed=1,Fi="",An="srgb",ra="srgb-linear",aa="linear",Be="srgb";var No=7680;var Cd=519,Rd=512,Pd=513,Id=514,tc=515,Ld=516,Dd=517,ec=518,Nd=519,Ud=35044,Lh=35048;var Dh="300 es",si=2e3,mr=2001;function lp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fd(){let i=oa("canvas");return i.style.display="block",i}var Nu={},gr=null;function Nh(...i){let t="THREE."+i.shift();gr?gr("log",t,...i):console.log(t,...i)}function Od(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function se(...i){i=Od(i);let t="THREE."+i.shift();if(gr)gr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=Od(i);let t="THREE."+i.shift();if(gr)gr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cs(...i){let t=i.join(" ");t in Nu||(Nu[t]=!0,se(...i))}function Bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var zd={[Uo]:Fo,[Oo]:ko,[Bo]:Vo,[pr]:zo,[Fo]:Uo,[ko]:Oo,[Vo]:Bo,[zo]:pr},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fc=Math.PI/180,Xo=180/Math.PI;function Oa(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function hp(i,t){return(i%t+t)%t}function Oc(i,t,e){return(1-e)*i+e*t}function $r(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Re=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,c){let u=n[s+0],h=n[s+1],m=n[s+2],g=n[s+3],f=r[o+0],v=r[o+1],w=r[o+2],R=r[o+3];if(g!==R||u!==f||h!==v||m!==w){let M=u*f+h*v+m*w+g*R;M<0&&(f=-f,v=-v,w=-w,R=-R,M=-M);let p=1-c;if(M<.9995){let N=Math.acos(M),z=Math.sin(N);p=Math.sin(p*N)/z,c=Math.sin(c*N)/z,u=u*p+f*c,h=h*p+v*c,m=m*p+w*c,g=g*p+R*c}else{u=u*p+f*c,h=h*p+v*c,m=m*p+w*c,g=g*p+R*c;let N=1/Math.sqrt(u*u+h*h+m*m+g*g);u*=N,h*=N,m*=N,g*=N}}t[e]=u,t[e+1]=h,t[e+2]=m,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,o){let c=n[s],u=n[s+1],h=n[s+2],m=n[s+3],g=r[o],f=r[o+1],v=r[o+2],w=r[o+3];return t[e]=c*w+m*g+u*v-h*f,t[e+1]=u*w+m*f+h*g-c*v,t[e+2]=h*w+m*v+c*f-u*g,t[e+3]=m*w-c*g-u*f-h*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,c=Math.cos,u=Math.sin,h=c(n/2),m=c(s/2),g=c(r/2),f=u(n/2),v=u(s/2),w=u(r/2);switch(o){case"XYZ":this._x=f*m*g+h*v*w,this._y=h*v*g-f*m*w,this._z=h*m*w+f*v*g,this._w=h*m*g-f*v*w;break;case"YXZ":this._x=f*m*g+h*v*w,this._y=h*v*g-f*m*w,this._z=h*m*w-f*v*g,this._w=h*m*g+f*v*w;break;case"ZXY":this._x=f*m*g-h*v*w,this._y=h*v*g+f*m*w,this._z=h*m*w+f*v*g,this._w=h*m*g-f*v*w;break;case"ZYX":this._x=f*m*g-h*v*w,this._y=h*v*g+f*m*w,this._z=h*m*w-f*v*g,this._w=h*m*g+f*v*w;break;case"YZX":this._x=f*m*g+h*v*w,this._y=h*v*g+f*m*w,this._z=h*m*w-f*v*g,this._w=h*m*g-f*v*w;break;case"XZY":this._x=f*m*g-h*v*w,this._y=h*v*g-f*m*w,this._z=h*m*w+f*v*g,this._w=h*m*g+f*v*w;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],c=e[5],u=e[9],h=e[2],m=e[6],g=e[10],f=n+c+g;if(f>0){let v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(m-u)*v,this._y=(r-h)*v,this._z=(o-s)*v}else if(n>c&&n>g){let v=2*Math.sqrt(1+n-c-g);this._w=(m-u)/v,this._x=.25*v,this._y=(s+o)/v,this._z=(r+h)/v}else if(c>g){let v=2*Math.sqrt(1+c-n-g);this._w=(r-h)/v,this._x=(s+o)/v,this._y=.25*v,this._z=(u+m)/v}else{let v=2*Math.sqrt(1+g-n-c);this._w=(o-s)/v,this._x=(r+h)/v,this._y=(u+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=e._x,u=e._y,h=e._z,m=e._w;return this._x=n*m+o*c+s*h-r*u,this._y=s*m+o*u+r*c-n*h,this._z=r*m+o*h+n*u-s*c,this._w=o*m-n*c-s*u-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=this.dot(t);c<0&&(n=-n,s=-s,r=-r,o=-o,c=-c);let u=1-e;if(c<.9995){let h=Math.acos(c),m=Math.sin(h);u=Math.sin(u*h)/m,e=Math.sin(e*h)/m,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Q=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,c=t.z,u=t.w,h=2*(o*s-c*n),m=2*(c*e-r*s),g=2*(r*n-o*e);return this.x=e+u*h+o*g-c*m,this.y=n+u*m+c*h-r*g,this.z=s+u*g+r*m-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,c=e.y,u=e.z;return this.x=s*u-r*c,this.y=r*o-n*u,this.z=n*c-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new Q,Uu=new xi,ue=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,c,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,u,h)}set(t,e,n,s,r,o,c,u,h){let m=this.elements;return m[0]=t,m[1]=s,m[2]=c,m[3]=e,m[4]=r,m[5]=u,m[6]=n,m[7]=o,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],m=n[4],g=n[7],f=n[2],v=n[5],w=n[8],R=s[0],M=s[3],p=s[6],N=s[1],z=s[4],E=s[7],I=s[2],L=s[5],G=s[8];return r[0]=o*R+c*N+u*I,r[3]=o*M+c*z+u*L,r[6]=o*p+c*E+u*G,r[1]=h*R+m*N+g*I,r[4]=h*M+m*z+g*L,r[7]=h*p+m*E+g*G,r[2]=f*R+v*N+w*I,r[5]=f*M+v*z+w*L,r[8]=f*p+v*E+w*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],m=t[8];return e*o*m-e*c*h-n*r*m+n*c*u+s*r*h-s*o*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],m=t[8],g=m*o-c*h,f=c*u-m*r,v=h*r-o*u,w=e*g+n*f+s*v;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/w;return t[0]=g*R,t[1]=(s*h-m*n)*R,t[2]=(c*n-s*o)*R,t[3]=f*R,t[4]=(m*e-s*u)*R,t[5]=(s*r-c*e)*R,t[6]=v*R,t[7]=(n*u-h*e)*R,t[8]=(o*e-n*r)*R,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,c){let u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*o+h*c)+o+t,-s*h,s*u,-s*(-h*o+u*c)+c+e,0,0,1),this}scale(t,e){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(t,e)),this}rotate(t){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-t)),this}translate(t,e){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zc=new ue,Fu=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){let i={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Be&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Be&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ra]:{primaries:t,whitePoint:n,transfer:aa,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:n,transfer:Be,toXYZ:Fu,fromXYZ:Ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}var we=up();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qs,qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qs===void 0&&(Qs=oa("canvas")),Qs.width=t.width,Qs.height=t.height;let s=Qs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Qs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=oa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dp=0,_r=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Oa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(kc(s[o].image)):r.push(kc(s[o]))}else r=kc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function kc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}var fp=0,Vc=new Q,Ln=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=fn,o=ls,c=Kn,u=Nn,h=i.DEFAULT_ANISOTROPY,m=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Oa(),this.name="",this.source=new _r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Go:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Go:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=wh;Ln.DEFAULT_ANISOTROPY=1;var Ye=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,u=t.elements,h=u[0],m=u[4],g=u[8],f=u[1],v=u[5],w=u[9],R=u[2],M=u[6],p=u[10];if(Math.abs(m-f)<.01&&Math.abs(g-R)<.01&&Math.abs(w-M)<.01){if(Math.abs(m+f)<.1&&Math.abs(g+R)<.1&&Math.abs(w+M)<.1&&Math.abs(h+v+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let z=(h+1)/2,E=(v+1)/2,I=(p+1)/2,L=(m+f)/4,G=(g+R)/4,b=(w+M)/4;return z>E&&z>I?z<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(z),s=L/n,r=G/n):E>I?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=L/s,r=b/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=G/r,s=b/r),this.set(n,s,r,e),this}let N=Math.sqrt((M-w)*(M-w)+(g-R)*(g-R)+(f-m)*(f-m));return Math.abs(N)<.001&&(N=1),this.x=(M-w)/N,this.y=(g-R)/N,this.z=(f-m)/N,this.w=Math.acos((h+v+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this.w=Ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this.w=Ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ln(s),o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new _r(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Yo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},la=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ge=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,c,u,h,m,g,f,v,w,R,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,u,h,m,g,f,v,w,R,M)}set(t,e,n,s,r,o,c,u,h,m,g,f,v,w,R,M){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=c,p[13]=u,p[2]=h,p[6]=m,p[10]=g,p[14]=f,p[3]=v,p[7]=w,p[11]=R,p[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/tr.setFromMatrixColumn(t,0).length(),r=1/tr.setFromMatrixColumn(t,1).length(),o=1/tr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s),m=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let f=o*m,v=o*g,w=c*m,R=c*g;e[0]=u*m,e[4]=-u*g,e[8]=h,e[1]=v+w*h,e[5]=f-R*h,e[9]=-c*u,e[2]=R-f*h,e[6]=w+v*h,e[10]=o*u}else if(t.order==="YXZ"){let f=u*m,v=u*g,w=h*m,R=h*g;e[0]=f+R*c,e[4]=w*c-v,e[8]=o*h,e[1]=o*g,e[5]=o*m,e[9]=-c,e[2]=v*c-w,e[6]=R+f*c,e[10]=o*u}else if(t.order==="ZXY"){let f=u*m,v=u*g,w=h*m,R=h*g;e[0]=f-R*c,e[4]=-o*g,e[8]=w+v*c,e[1]=v+w*c,e[5]=o*m,e[9]=R-f*c,e[2]=-o*h,e[6]=c,e[10]=o*u}else if(t.order==="ZYX"){let f=o*m,v=o*g,w=c*m,R=c*g;e[0]=u*m,e[4]=w*h-v,e[8]=f*h+R,e[1]=u*g,e[5]=R*h+f,e[9]=v*h-w,e[2]=-h,e[6]=c*u,e[10]=o*u}else if(t.order==="YZX"){let f=o*u,v=o*h,w=c*u,R=c*h;e[0]=u*m,e[4]=R-f*g,e[8]=w*g+v,e[1]=g,e[5]=o*m,e[9]=-c*m,e[2]=-h*m,e[6]=v*g+w,e[10]=f-R*g}else if(t.order==="XZY"){let f=o*u,v=o*h,w=c*u,R=c*h;e[0]=u*m,e[4]=-g,e[8]=h*m,e[1]=f*g+R,e[5]=o*m,e[9]=v*g-w,e[2]=w*g-v,e[6]=c*m,e[10]=R*g+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pp,t,mp)}lookAt(t,e,n){let s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Yi.crossVectors(n,Fn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Yi.crossVectors(n,Fn)),Yi.normalize(),fo.crossVectors(Fn,Yi),s[0]=Yi.x,s[4]=fo.x,s[8]=Fn.x,s[1]=Yi.y,s[5]=fo.y,s[9]=Fn.y,s[2]=Yi.z,s[6]=fo.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],m=n[1],g=n[5],f=n[9],v=n[13],w=n[2],R=n[6],M=n[10],p=n[14],N=n[3],z=n[7],E=n[11],I=n[15],L=s[0],G=s[4],b=s[8],F=s[12],H=s[1],V=s[5],K=s[9],it=s[13],X=s[2],$=s[6],ct=s[10],st=s[14],mt=s[3],et=s[7],rt=s[11],ht=s[15];return r[0]=o*L+c*H+u*X+h*mt,r[4]=o*G+c*V+u*$+h*et,r[8]=o*b+c*K+u*ct+h*rt,r[12]=o*F+c*it+u*st+h*ht,r[1]=m*L+g*H+f*X+v*mt,r[5]=m*G+g*V+f*$+v*et,r[9]=m*b+g*K+f*ct+v*rt,r[13]=m*F+g*it+f*st+v*ht,r[2]=w*L+R*H+M*X+p*mt,r[6]=w*G+R*V+M*$+p*et,r[10]=w*b+R*K+M*ct+p*rt,r[14]=w*F+R*it+M*st+p*ht,r[3]=N*L+z*H+E*X+I*mt,r[7]=N*G+z*V+E*$+I*et,r[11]=N*b+z*K+E*ct+I*rt,r[15]=N*F+z*it+E*st+I*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],c=t[5],u=t[9],h=t[13],m=t[2],g=t[6],f=t[10],v=t[14],w=t[3],R=t[7],M=t[11],p=t[15],N=u*v-h*f,z=c*v-h*g,E=c*f-u*g,I=o*v-h*m,L=o*f-u*m,G=o*g-c*m;return e*(R*N-M*z+p*E)-n*(w*N-M*I+p*L)+s*(w*z-R*I+p*G)-r*(w*E-R*L+M*G)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],c=t[9],u=t[2],h=t[6],m=t[10];return e*(o*m-c*h)-n*(r*m-c*u)+s*(r*h-o*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],u=t[6],h=t[7],m=t[8],g=t[9],f=t[10],v=t[11],w=t[12],R=t[13],M=t[14],p=t[15],N=e*c-n*o,z=e*u-s*o,E=e*h-r*o,I=n*u-s*c,L=n*h-r*c,G=s*h-r*u,b=m*R-g*w,F=m*M-f*w,H=m*p-v*w,V=g*M-f*R,K=g*p-v*R,it=f*p-v*M,X=N*it-z*K+E*V+I*H-L*F+G*b;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/X;return t[0]=(c*it-u*K+h*V)*$,t[1]=(s*K-n*it-r*V)*$,t[2]=(R*G-M*L+p*I)*$,t[3]=(f*L-g*G-v*I)*$,t[4]=(u*H-o*it-h*F)*$,t[5]=(e*it-s*H+r*F)*$,t[6]=(M*E-w*G-p*z)*$,t[7]=(m*G-f*E+v*z)*$,t[8]=(o*K-c*H+h*b)*$,t[9]=(n*H-e*K-r*b)*$,t[10]=(w*L-R*E+p*N)*$,t[11]=(g*E-m*L-v*N)*$,t[12]=(c*F-o*V-u*b)*$,t[13]=(e*V-n*F+s*b)*$,t[14]=(R*z-w*I-M*N)*$,t[15]=(m*I-g*z+f*N)*$,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,c=t.y,u=t.z,h=r*o,m=r*c;return this.set(h*o+n,h*c-s*u,h*u+s*c,0,h*c+s*u,m*c+n,m*u-s*o,0,h*u-s*c,m*u+s*o,r*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,c=e._z,u=e._w,h=r+r,m=o+o,g=c+c,f=r*h,v=r*m,w=r*g,R=o*m,M=o*g,p=c*g,N=u*h,z=u*m,E=u*g,I=n.x,L=n.y,G=n.z;return s[0]=(1-(R+p))*I,s[1]=(v+E)*I,s[2]=(w-z)*I,s[3]=0,s[4]=(v-E)*L,s[5]=(1-(f+p))*L,s[6]=(M+N)*L,s[7]=0,s[8]=(w+z)*G,s[9]=(M-N)*G,s[10]=(1-(f+R))*G,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=tr.set(s[0],s[1],s[2]).length(),c=tr.set(s[4],s[5],s[6]).length(),u=tr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ti.copy(this);let h=1/o,m=1/c,g=1/u;return ti.elements[0]*=h,ti.elements[1]*=h,ti.elements[2]*=h,ti.elements[4]*=m,ti.elements[5]*=m,ti.elements[6]*=m,ti.elements[8]*=g,ti.elements[9]*=g,ti.elements[10]*=g,e.setFromRotationMatrix(ti),n.x=o,n.y=c,n.z=u,this}makePerspective(t,e,n,s,r,o,c=si,u=!1){let h=this.elements,m=2*r/(e-t),g=2*r/(n-s),f=(e+t)/(e-t),v=(n+s)/(n-s),w,R;if(u)w=r/(o-r),R=o*r/(o-r);else if(c===si)w=-(o+r)/(o-r),R=-2*o*r/(o-r);else if(c===mr)w=-o/(o-r),R=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,c=si,u=!1){let h=this.elements,m=2/(e-t),g=2/(n-s),f=-(e+t)/(e-t),v=-(n+s)/(n-s),w,R;if(u)w=1/(o-r),R=o/(o-r);else if(c===si)w=-2/(o-r),R=-(o+r)/(o-r);else if(c===mr)w=-1/(o-r),R=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=g,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=w,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},tr=new Q,ti=new Ge,pp=new Q(0,0,0),mp=new Q(1,1,1),Yi=new Q,fo=new Q,Fn=new Q,Bu=new Ge,zu=new xi,Qi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],c=s[8],u=s[1],h=s[5],m=s[9],g=s[2],f=s[6],v=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Ce(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-m,v),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zu.setFromEuler(this),this.setFromQuaternion(zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gp=0,ku=new Q,er=new xi,Pi=new Ge,po=new Q,jr=new Q,_p=new Q,xp=new xi,Vu=new Q(1,0,0),Gu=new Q(0,1,0),Hu=new Q(0,0,1),Wu={type:"added"},vp={type:"removed"},nr={type:"childadded",child:null},Gc={type:"childremoved",child:null},vn=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Q,e=new Qi,n=new xi,s=new Q(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new ue}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.multiply(er),this}rotateOnWorldAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.premultiply(er),this}rotateX(t){return this.rotateOnAxis(Vu,t)}rotateY(t){return this.rotateOnAxis(Gu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return ku.copy(t).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vu,t)}translateY(t){return this.translateOnAxis(Gu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?po.copy(t):po.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(jr,po,this.up):Pi.lookAt(po,jr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),er.setFromRotationMatrix(Pi),this.quaternion.premultiply(er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wu),nr.child=t,this.dispatchEvent(nr),nr.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vp),Gc.child=t,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wu),nr.child=t,this.dispatchEvent(nr),nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,_p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let u=c.shapes;if(Array.isArray(u))for(let h=0,m=u.length;h<m;h++){let g=u[h];r(t.shapes,g)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(r(t.materials,this.material[u]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let u=this.animations[c];s.animations.push(r(t.animations,u))}}if(e){let c=o(t.geometries),u=o(t.materials),h=o(t.textures),m=o(t.images),g=o(t.shapes),f=o(t.skeletons),v=o(t.animations),w=o(t.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),f.length>0&&(n.skeletons=f),v.length>0&&(n.animations=v),w.length>0&&(n.nodes=w)}return n.object=s,n;function o(c){let u=[];for(let h in c){let m=c[h];delete m.metadata,u.push(m)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vn.DEFAULT_UP=new Q(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Es=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},yp={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,c=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let R of t.hand.values()){let M=e.getJointPose(R,n),p=this._getHandJoint(h,R);M!==null&&(p.matrix.fromArray(M.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=M.radius),p.visible=M!==null}let m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],f=m.position.distanceTo(g.position),v=.02,w=.005;h.inputState.pinching&&f>v+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=v-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return c!==null&&(c.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Es;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Hc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=we.workingColorSpace){if(t=hp(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hc(o,r,t+1/3),this.g=Hc(o,r,t),this.b=Hc(o,r,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,e=An){function n(r){r!==void 0&&parseFloat(r)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){let n=kd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return we.workingToColorSpace(_n.copy(this),t),Math.round(Ce(_n.r*255,0,255))*65536+Math.round(Ce(_n.g*255,0,255))*256+Math.round(Ce(_n.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(_n.copy(this),e);let n=_n.r,s=_n.g,r=_n.b,o=Math.max(n,s,r),c=Math.min(n,s,r),u,h,m=(c+o)/2;if(c===o)u=0,h=0;else{let g=o-c;switch(h=m<=.5?g/(o+c):g/(2-o-c),o){case n:u=(s-r)/g+(s<r?6:0);break;case s:u=(r-n)/g+2;break;case r:u=(n-s)/g+4;break}u/=6}return t.h=u,t.s=h,t.l=m,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=An){we.workingToColorSpace(_n.copy(this),t);let e=_n.r,n=_n.g,s=_n.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(mo);let n=Oc(Ji.h,mo.h,e),s=Oc(Ji.s,mo.s,e),r=Oc(Ji.l,mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new pe;pe.NAMES=kd;var ha=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ua=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new Q,Ii=new Q,Wc=new Q,Li=new Q,ir=new Q,sr=new Q,Xu=new Q,Xc=new Q,qc=new Q,Yc=new Q,Jc=new Ye,Zc=new Ye,Kc=new Ye,ji=class i{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ei.subVectors(t,e),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ei.subVectors(s,e),Ii.subVectors(n,e),Wc.subVectors(t,e);let o=ei.dot(ei),c=ei.dot(Ii),u=ei.dot(Wc),h=Ii.dot(Ii),m=Ii.dot(Wc),g=o*h-c*c;if(g===0)return r.set(0,0,0),null;let f=1/g,v=(h*u-c*m)*f,w=(o*m-c*u)*f;return r.set(1-v-w,w,v)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,s,r,o,c,u){return this.getBarycoord(t,e,n,s,Li)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Li.x),u.addScaledVector(o,Li.y),u.addScaledVector(c,Li.z),u)}static getInterpolatedAttribute(t,e,n,s,r,o){return Jc.setScalar(0),Zc.setScalar(0),Kc.setScalar(0),Jc.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,n),Kc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Jc,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector(Kc,r.z),o}static isFrontFacing(t,e,n,s){return ei.subVectors(n,e),Ii.subVectors(t,e),ei.cross(Ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ei.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,c;ir.subVectors(s,n),sr.subVectors(r,n),Xc.subVectors(t,n);let u=ir.dot(Xc),h=sr.dot(Xc);if(u<=0&&h<=0)return e.copy(n);qc.subVectors(t,s);let m=ir.dot(qc),g=sr.dot(qc);if(m>=0&&g<=m)return e.copy(s);let f=u*g-m*h;if(f<=0&&u>=0&&m<=0)return o=u/(u-m),e.copy(n).addScaledVector(ir,o);Yc.subVectors(t,r);let v=ir.dot(Yc),w=sr.dot(Yc);if(w>=0&&v<=w)return e.copy(r);let R=v*h-u*w;if(R<=0&&h>=0&&w<=0)return c=h/(h-w),e.copy(n).addScaledVector(sr,c);let M=m*w-v*g;if(M<=0&&g-m>=0&&v-w>=0)return Xu.subVectors(r,s),c=(g-m)/(g-m+(v-w)),e.copy(s).addScaledVector(Xu,c);let p=1/(M+R+f);return o=R*p,c=f*p,e.copy(n).addScaledVector(ir,o).addScaledVector(sr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vi=class{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qr),_o.subVectors(this.max,Qr),rr.subVectors(t.a,Qr),ar.subVectors(t.b,Qr),or.subVectors(t.c,Qr),Zi.subVectors(ar,rr),Ki.subVectors(or,ar),bs.subVectors(rr,or);let e=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-bs.z,bs.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,bs.z,0,-bs.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-bs.y,bs.x,0];return!$c(e,rr,ar,or,_o)||(e=[1,0,0,0,1,0,0,0,1],!$c(e,rr,ar,or,_o))?!1:(xo.crossVectors(Zi,Ki),e=[xo.x,xo.y,xo.z],$c(e,rr,ar,or,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ni=new Q,go=new vi,rr=new Q,ar=new Q,or=new Q,Zi=new Q,Ki=new Q,bs=new Q,Qr=new Q,_o=new Q,xo=new Q,Ts=new Q;function $c(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ts.fromArray(i,r);let c=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),u=t.dot(Ts),h=e.dot(Ts),m=n.dot(Ts);if(Math.max(-Math.max(u,h,m),Math.min(u,h,m))>c)return!1}return!0}var nn=new Q,vo=new Re,Mp=0,Bn=class extends _i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ud,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$r(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$r(e,this.array)),e}setX(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$r(e,this.array)),e}setY(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$r(e,this.array)),e}setZ(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$r(e,this.array)),e}setW(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array),s=In(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array),s=In(s,this.array),r=In(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var da=class extends Bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fa=class extends Bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var on=class extends Bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Sp=new vi,ta=new Q,jc=new Q,ts=class{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ta.subVectors(t,this.center);let e=ta.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ta,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ta.copy(t.center).add(jc)),this.expandByPoint(ta.copy(t.center).sub(jc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bp=0,Jn=new Ge,Qc=new vn,lr=new Q,On=new vi,ea=new vi,un=new Q,zn=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lp(t)?fa:da)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new on(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let c=e[r];ea.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(On.min,ea.min),On.expandByPoint(un),un.addVectors(On.max,ea.max),On.expandByPoint(un)):(On.expandByPoint(ea.min),On.expandByPoint(ea.max))}On.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let c=e[r],u=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)un.fromBufferAttribute(c,h),u&&(lr.fromBufferAttribute(t,h),un.add(lr)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let c=[],u=[];for(let b=0;b<n.count;b++)c[b]=new Q,u[b]=new Q;let h=new Q,m=new Q,g=new Q,f=new Re,v=new Re,w=new Re,R=new Q,M=new Q;function p(b,F,H){h.fromBufferAttribute(n,b),m.fromBufferAttribute(n,F),g.fromBufferAttribute(n,H),f.fromBufferAttribute(r,b),v.fromBufferAttribute(r,F),w.fromBufferAttribute(r,H),m.sub(h),g.sub(h),v.sub(f),w.sub(f);let V=1/(v.x*w.y-w.x*v.y);isFinite(V)&&(R.copy(m).multiplyScalar(w.y).addScaledVector(g,-v.y).multiplyScalar(V),M.copy(g).multiplyScalar(v.x).addScaledVector(m,-w.x).multiplyScalar(V),c[b].add(R),c[F].add(R),c[H].add(R),u[b].add(M),u[F].add(M),u[H].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let b=0,F=N.length;b<F;++b){let H=N[b],V=H.start,K=H.count;for(let it=V,X=V+K;it<X;it+=3)p(t.getX(it+0),t.getX(it+1),t.getX(it+2))}let z=new Q,E=new Q,I=new Q,L=new Q;function G(b){I.fromBufferAttribute(s,b),L.copy(I);let F=c[b];z.copy(F),z.sub(I.multiplyScalar(I.dot(F))).normalize(),E.crossVectors(L,F);let V=E.dot(u[b])<0?-1:1;o.setXYZW(b,z.x,z.y,z.z,V)}for(let b=0,F=N.length;b<F;++b){let H=N[b],V=H.start,K=H.count;for(let it=V,X=V+K;it<X;it+=3)G(t.getX(it+0)),G(t.getX(it+1)),G(t.getX(it+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,v=n.count;f<v;f++)n.setXYZ(f,0,0,0);let s=new Q,r=new Q,o=new Q,c=new Q,u=new Q,h=new Q,m=new Q,g=new Q;if(t)for(let f=0,v=t.count;f<v;f+=3){let w=t.getX(f+0),R=t.getX(f+1),M=t.getX(f+2);s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,R),o.fromBufferAttribute(e,M),m.subVectors(o,r),g.subVectors(s,r),m.cross(g),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),c.add(m),u.add(m),h.add(m),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(R,u.x,u.y,u.z),n.setXYZ(M,h.x,h.y,h.z)}else for(let f=0,v=e.count;f<v;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),m.subVectors(o,r),g.subVectors(s,r),m.cross(g),n.setXYZ(f+0,m.x,m.y,m.z),n.setXYZ(f+1,m.x,m.y,m.z),n.setXYZ(f+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(c,u){let h=c.array,m=c.itemSize,g=c.normalized,f=new h.constructor(u.length*m),v=0,w=0;for(let R=0,M=u.length;R<M;R++){c.isInterleavedBufferAttribute?v=u[R]*c.data.stride+c.offset:v=u[R]*m;for(let p=0;p<m;p++)f[w++]=h[v++]}return new Bn(f,m,g)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let u=s[c],h=t(u,n);e.setAttribute(c,h)}let r=this.morphAttributes;for(let c in r){let u=[],h=r[c];for(let m=0,g=h.length;m<g;m++){let f=h[m],v=t(f,n);u.push(v)}e.morphAttributes[c]=u}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let h=n[u];t.data.attributes[u]=h.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],m=[];for(let g=0,f=h.length;g<f;g++){let v=h[g];m.push(v.toJSON(t.data))}m.length>0&&(s[u]=m,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let m=s[h];this.setAttribute(h,m.clone(e))}let r=t.morphAttributes;for(let h in r){let m=[],g=r[h];for(let f=0,v=g.length;f<v;f++)m.push(g[f].clone(e));this.morphAttributes[h]=m}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,m=o.length;h<m;h++){let g=o[h];this.addGroup(g.start,g.count,g.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var th=new Q,Tp=new Q,wp=new ue,ii=class{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=th.subVectors(n,e).cross(Tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(th),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wp.getNormalMatrix(t),s=this.coplanarPoint(th).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ap=0,es=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=br,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let u=r[c];delete u.metadata,o.push(u)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ni=new Q,eh=new Q,yo=new Q,Mo=new Q,Zo=class{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eh.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),Mo.copy(this.origin).sub(eh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(yo),c=Mo.dot(this.direction),u=-Mo.dot(yo),h=Mo.lengthSq(),m=Math.abs(1-o*o),g,f,v,w;if(m>0)if(g=o*u-c,f=o*c-u,w=r*m,g>=0)if(f>=-w)if(f<=w){let R=1/m;g*=R,f*=R,v=g*(g+o*f+2*c)+f*(o*g+f+2*u)+h}else f=r,g=Math.max(0,-(o*f+c)),v=-g*g+f*(f+2*u)+h;else f=-r,g=Math.max(0,-(o*f+c)),v=-g*g+f*(f+2*u)+h;else f<=-w?(g=Math.max(0,-(-o*r+c)),f=g>0?-r:Math.min(Math.max(-r,-u),r),v=-g*g+f*(f+2*u)+h):f<=w?(g=0,f=Math.min(Math.max(-r,-u),r),v=f*(f+2*u)+h):(g=Math.max(0,-(o*r+c)),f=g>0?r:Math.min(Math.max(-r,-u),r),v=-g*g+f*(f+2*u)+h);else f=o>0?-r:r,g=Math.max(0,-(o*f+c)),v=-g*g+f*(f+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(eh).addScaledVector(yo,f),v}intersectSphere(t,e){if(t.radius<0)return null;Ni.subVectors(t.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,c,u,h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),m>=0?(r=(t.min.y-f.y)*m,o=(t.max.y-f.y)*m):(r=(t.max.y-f.y)*m,o=(t.min.y-f.y)*m),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),g>=0?(c=(t.min.z-f.z)*g,u=(t.max.z-f.z)*g):(c=(t.max.z-f.z)*g,u=(t.min.z-f.z)*g),n>u||c>s)||((c>n||n!==n)&&(n=c),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,c=this.direction,u=c.x,h=c.y,m=c.z,g=t.x-o.x,f=t.y-o.y,v=t.z-o.z,w=e.x-o.x,R=e.y-o.y,M=e.z-o.z,p=n.x-o.x,N=n.y-o.y,z=n.z-o.z,E=Math.abs(u),I=Math.abs(h),L=Math.abs(m),G,b,F,H,V,K,it,X,$,ct,st,mt;if(E>=I&&E>=L?(F=u,K=g,$=w,mt=p,u>=0?(G=h,b=m,H=f,V=v,it=R,X=M,ct=N,st=z):(G=m,b=h,H=v,V=f,it=M,X=R,ct=z,st=N)):I>=L?(F=h,K=f,$=R,mt=N,h>=0?(G=m,b=u,H=v,V=g,it=M,X=w,ct=z,st=p):(G=u,b=m,H=g,V=v,it=w,X=M,ct=p,st=z)):(F=m,K=v,$=M,mt=z,m>=0?(G=u,b=h,H=g,V=f,it=w,X=R,ct=p,st=N):(G=h,b=u,H=f,V=g,it=R,X=w,ct=N,st=p)),F===0)return null;let et=G/F,rt=b/F,ht=1/F,qt=H-et*K,Yt=V-rt*K,Pe=it-et*$,ye=X-rt*$,Se=ct-et*mt,dt=st-rt*mt,yt=Se*ye-dt*Pe,Gt=qt*dt-Yt*Se,oe=Pe*Yt-ye*qt;if(s){if(yt<0||Gt<0||oe<0)return null}else if((yt<0||Gt<0||oe<0)&&(yt>0||Gt>0||oe>0))return null;let kt=yt+Gt+oe;if(kt===0)return null;let ge=ht*(yt*K+Gt*$+oe*mt);return(kt>0?ge<0:ge>0)?null:this.at(ge/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pa=class extends es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qu=new Ge,ws=new Zo,So=new ts,Yu=new Q,bo=new Q,To=new Q,wo=new Q,nh=new Q,Ao=new Q,Ju=new Q,Eo=new Q,yn=class extends vn{constructor(t=new zn,e=new pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){Ao.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let m=c[u],g=r[u];m!==0&&(nh.fromBufferAttribute(g,t),o?Ao.addScaledVector(nh,m):Ao.addScaledVector(nh.sub(e),m))}e.add(Ao)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),ws.copy(t.ray).recast(t.near),!(So.containsPoint(ws.origin)===!1&&(ws.intersectSphere(So,Yu)===null||ws.origin.distanceToSquared(Yu)>(t.far-t.near)**2))&&(qu.copy(r).invert(),ws.copy(t.ray).applyMatrix4(qu),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,c=r.index,u=r.attributes.position,h=r.attributes.uv,m=r.attributes.uv1,g=r.attributes.normal,f=r.groups,v=r.drawRange;if(c!==null)if(Array.isArray(o))for(let w=0,R=f.length;w<R;w++){let M=f[w],p=o[M.materialIndex],N=Math.max(M.start,v.start),z=Math.min(c.count,Math.min(M.start+M.count,v.start+v.count));for(let E=N,I=z;E<I;E+=3){let L=c.getX(E),G=c.getX(E+1),b=c.getX(E+2);s=Co(this,p,t,n,h,m,g,L,G,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=M.materialIndex,e.push(s))}}else{let w=Math.max(0,v.start),R=Math.min(c.count,v.start+v.count);for(let M=w,p=R;M<p;M+=3){let N=c.getX(M),z=c.getX(M+1),E=c.getX(M+2);s=Co(this,o,t,n,h,m,g,N,z,E),s&&(s.faceIndex=Math.floor(M/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let w=0,R=f.length;w<R;w++){let M=f[w],p=o[M.materialIndex],N=Math.max(M.start,v.start),z=Math.min(u.count,Math.min(M.start+M.count,v.start+v.count));for(let E=N,I=z;E<I;E+=3){let L=E,G=E+1,b=E+2;s=Co(this,p,t,n,h,m,g,L,G,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=M.materialIndex,e.push(s))}}else{let w=Math.max(0,v.start),R=Math.min(u.count,v.start+v.count);for(let M=w,p=R;M<p;M+=3){let N=M,z=M+1,E=M+2;s=Co(this,o,t,n,h,m,g,N,z,E),s&&(s.faceIndex=Math.floor(M/3),e.push(s))}}}};function Ep(i,t,e,n,s,r,o,c){let u;if(t.side===pn?u=n.intersectTriangle(o,r,s,!0,c):u=n.intersectTriangle(s,r,o,t.side===as,c),u===null)return null;Eo.copy(c),Eo.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Eo);return h<e.near||h>e.far?null:{distance:h,point:Eo.clone(),object:i}}function Co(i,t,e,n,s,r,o,c,u,h){i.getVertexPosition(c,bo),i.getVertexPosition(u,To),i.getVertexPosition(h,wo);let m=Ep(i,t,e,n,bo,To,wo,Ju);if(m){let g=new Q;ji.getBarycoord(Ju,bo,To,wo,g),s&&(m.uv=ji.getInterpolatedAttribute(s,c,u,h,g,new Re)),r&&(m.uv1=ji.getInterpolatedAttribute(r,c,u,h,g,new Re)),o&&(m.normal=ji.getInterpolatedAttribute(o,c,u,h,g,new Q),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));let f={a:c,b:u,c:h,normal:new Q,materialIndex:0};ji.getNormal(bo,To,wo,f.normal),m.face=f,m.barycoord=g}return m}var Rs=class extends Ln{constructor(t=null,e=1,n=1,s,r,o,c,u,h=je,m=je,g,f){super(null,o,c,u,h,m,s,r,g,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ma=class extends Bn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cr=new Ge,Zu=new Ge,Ro=[],Ku=new vi,Cp=new Ge,na=new yn,ia=new ts,ga=class extends yn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ma(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),Ku.copy(t.boundingBox).applyMatrix4(cr),this.boundingBox.union(Ku)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),ia.copy(t.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(ia)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let c=0;c<n.length;c++)n[c]=s[o+c]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(na.geometry=this.geometry,na.material=this.material,na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(n),t.ray.intersectsSphere(ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),Zu.multiplyMatrices(n,cr),na.matrixWorld=Zu,na.raycast(t,Ro);for(let o=0,c=Ro.length;o<c;o++){let u=Ro[o];u.instanceId=r,u.object=this,e.push(u)}Ro.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ma(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rs(new Float32Array(s*this.count),s,this.count,Ar,Zn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let c=this.geometry.morphTargetsRelative?1:1-o,u=s*t;return r[u]=c,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new ts,Rp=new Re(.5,.5),Po=new Q,vr=class{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si,n=!1){let s=this.planes,r=t.elements,o=r[0],c=r[1],u=r[2],h=r[3],m=r[4],g=r[5],f=r[6],v=r[7],w=r[8],R=r[9],M=r[10],p=r[11],N=r[12],z=r[13],E=r[14],I=r[15];if(s[0].setComponents(h-o,v-m,p-w,I-N).normalize(),s[1].setComponents(h+o,v+m,p+w,I+N).normalize(),s[2].setComponents(h+c,v+g,p+R,I+z).normalize(),s[3].setComponents(h-c,v-g,p-R,I-z).normalize(),n)s[4].setComponents(u,f,M,E).normalize(),s[5].setComponents(h-u,v-f,p-M,I-E).normalize();else if(s[4].setComponents(h-u,v-f,p-M,I-E).normalize(),e===si)s[5].setComponents(h+u,v+f,p+M,I+E).normalize();else if(e===mr)s[5].setComponents(u,f,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=Rp.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _a=class extends Ln{constructor(t=[],e=os,n,s,r,o,c,u,h,m){super(t,e,n,s,r,o,c,u,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ns=class extends Ln{constructor(t,e,n=ai,s,r,o,c=je,u=je,h,m=gi,g=1){if(m!==gi&&m!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:g};super(f,s,r,o,c,u,m,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _r(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ko=class extends ns{constructor(t,e=ai,n=os,s,r,o=je,c=je,u,h=gi){let m={width:t,height:t,depth:1},g=[m,m,m,m,m,m];super(t,t,e,n,s,r,o,c,u,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xa=class extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},yr=class i extends zn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let u=[],h=[],m=[],g=[],f=0,v=0;w("z","y","x",-1,-1,n,e,t,o,r,0),w("z","y","x",1,-1,n,e,-t,o,r,1),w("x","z","y",1,1,t,n,e,s,o,2),w("x","z","y",1,-1,t,n,-e,s,o,3),w("x","y","z",1,-1,t,e,n,s,r,4),w("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new on(h,3)),this.setAttribute("normal",new on(m,3)),this.setAttribute("uv",new on(g,2));function w(R,M,p,N,z,E,I,L,G,b,F){let H=E/G,V=I/b,K=E/2,it=I/2,X=L/2,$=G+1,ct=b+1,st=0,mt=0,et=new Q;for(let rt=0;rt<ct;rt++){let ht=rt*V-it;for(let qt=0;qt<$;qt++){let Yt=qt*H-K;et[R]=Yt*N,et[M]=ht*z,et[p]=X,h.push(et.x,et.y,et.z),et[R]=0,et[M]=0,et[p]=L>0?1:-1,m.push(et.x,et.y,et.z),g.push(qt/G),g.push(1-rt/b),st+=1}}for(let rt=0;rt<b;rt++)for(let ht=0;ht<G;ht++){let qt=f+ht+$*rt,Yt=f+ht+$*(rt+1),Pe=f+(ht+1)+$*(rt+1),ye=f+(ht+1)+$*rt;u.push(qt,Yt,ye),u.push(Yt,Pe,ye),mt+=6}c.addGroup(v,mt,F),v+=mt,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var va=class i extends zn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,c=Math.floor(n),u=Math.floor(s),h=c+1,m=u+1,g=t/c,f=e/u,v=[],w=[],R=[],M=[];for(let p=0;p<m;p++){let N=p*f-o;for(let z=0;z<h;z++){let E=z*g-r;w.push(E,-N,0),R.push(0,0,1),M.push(z/c),M.push(1-p/u)}}for(let p=0;p<u;p++)for(let N=0;N<c;N++){let z=N+h*p,E=N+h*(p+1),I=N+1+h*(p+1),L=N+1+h*p;v.push(z,E,L),v.push(E,I,L)}this.setIndex(v),this.setAttribute("position",new on(w,3)),this.setAttribute("normal",new on(R,3)),this.setAttribute("uv",new on(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ya=class i extends zn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let u=Math.min(o+c,Math.PI),h=0,m=[],g=new Q,f=new Q,v=[],w=[],R=[],M=[];for(let p=0;p<=n;p++){let N=[],z=p/n,E=o+z*c,I=t*Math.cos(E),L=Math.sqrt(t*t-I*I),G=0;p===0&&o===0?G=.5/e:p===n&&u===Math.PI&&(G=-.5/e);for(let b=0;b<=e;b++){let F=b/e,H=s+F*r;g.x=-L*Math.cos(H),g.y=I,g.z=L*Math.sin(H),w.push(g.x,g.y,g.z),f.copy(g).normalize(),R.push(f.x,f.y,f.z),M.push(F+G,1-z),N.push(h++)}m.push(N)}for(let p=0;p<n;p++)for(let N=0;N<e;N++){let z=m[p][N+1],E=m[p][N],I=m[p+1][N],L=m[p+1][N+1];(p!==0||o>0)&&v.push(z,E,L),(p!==n-1||u<Math.PI)&&v.push(E,I,L)}this.setIndex(v),this.setAttribute("position",new on(w,3)),this.setAttribute("normal",new on(R,3)),this.setAttribute("uv",new on(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if($u(s))s.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if($u(s[0])){let r=[];for(let o=0,c=s.length;o<c;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Mn(i){let t={};for(let e=0;e<i.length;e++){let n=Ls(i[e]);for(let s in n)t[s]=n[s]}return t}function $u(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var Vd={clone:Ls,merge:Mn},Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$o=class extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ma=class extends es{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var jo=class extends es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qo=class extends es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ih(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let c=e[1];t<c&&(n=2,r=c);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let c=n+o>>>1;t<e[c]?o=c:n=c+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tl=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,c=s[r],u=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case oh:r=t,c=2*e-n;break;case lh:r=s.length-2,c=e+s[r]-s[r+1];break;default:r=t,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case oh:o=t,u=2*n-e;break;case lh:o=1,u=n+s[1]-s[0];break;default:o=t-1,u=e}let h=(n-e)*.5,m=this.valueSize;this._weightPrev=h/(e-c),this._weightNext=h/(u-n),this._offsetPrev=r*m,this._offsetNext=o*m}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,m=this._offsetPrev,g=this._offsetNext,f=this._weightPrev,v=this._weightNext,w=(n-e)/(s-e),R=w*w,M=R*w,p=-f*M+2*f*R-f*w,N=(1+f)*M+(-1.5-2*f)*R+(-.5+f)*w+1,z=(-1-v)*M+(1.5+v)*R+.5*w,E=v*M-v*R;for(let I=0;I!==c;++I)r[I]=p*o[m+I]+N*o[h+I]+z*o[u+I]+E*o[g+I];return r}},el=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,m=(n-e)/(s-e),g=1-m;for(let f=0;f!==c;++f)r[f]=o[h+f]*g+o[u+f]*m;return r}},nl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},il=class extends is{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=t*c,h=u-c,m=this.inTangents,g=this.outTangents;if(!m||!g){let w=(n-e)/(s-e),R=1-w;for(let M=0;M!==c;++M)r[M]=o[h+M]*R+o[u+M]*w;return r}let f=c*2,v=t-1;for(let w=0;w!==c;++w){let R=o[h+w],M=o[u+w],p=v*f+w*2,N=g[p],z=g[p+1],E=t*f+w*2,I=m[E],L=m[E+1],G=Np(n,e,N,I,s);r[w]=Gd(G,R,z,L,M)}return r}};function Gd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Dp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Np(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let c=Gd(r,t,e,n,s)-i;if(Math.abs(c)<1e-10)break;let u=Dp(r,t,e,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-c/u))}return r}var kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hr(e,this.TimeBufferType),this.values=hr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:hr(t.times,Array),values:hr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ih(t.settings)&&(n.settings={inTangents:hr(t.settings.inTangents,Array),outTangents:hr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new il(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case sa:e=this.InterpolantFactoryMethodDiscrete;break;case Wo:e=this.InterpolantFactoryMethodLinear;break;case Do:e=this.InterpolantFactoryMethodSmooth;break;case rh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return se("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ih(this.settings)&&(ju(this.settings.inTangents,t),ju(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let c=0;c!==r;c++){let u=n[c];if(typeof u=="number"&&isNaN(u)){ae("KeyframeTrack: Time is not a valid number.",this,c,u),t=!1;break}if(o!==null&&o>u){ae("KeyframeTrack: Out of order keys.",this,c,u,o),t=!1;break}o=u}if(s!==void 0&&cp(s))for(let c=0,u=s.length;c!==u;++c){let h=s[c];if(isNaN(h)){ae("KeyframeTrack: Value is not a valid number.",this,c,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Do,r=t.length-1,o=1;for(let c=1;c<r;++c){let u=!1,h=t[c],m=t[c+1];if(h!==m&&(c!==1||h!==t[0]))if(s)u=!0;else{let g=c*n,f=g-n,v=g+n;for(let w=0;w!==n;++w){let R=e[g+w];if(R!==e[f+w]||R!==e[v+w]){u=!0;break}}}if(u){if(c!==o){t[o]=t[c];let g=c*n,f=o*n;for(let v=0;v!==n;++v)e[f+v]=e[g+v]}++o}}if(r>0){t[o]=t[r];for(let c=r*n,u=o*n,h=0;h!==n;++h)e[u+h]=e[c+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ih(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ju(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Wo;var ss=class extends kn{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=sa;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};sl.prototype.ValueTypeName="color";var rl=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};rl.prototype.ValueTypeName="number";var al=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-e)/(s-e),h=t*c;for(let m=h+c;h!==m;h+=4)xi.slerpFlat(r,0,o,h-c,o,h,u);return r}},Sa=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends kn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=sa;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};ol.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,n){let s=this,r=!1,o=0,c=0,u,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(m){c++,r===!1&&s.onStart!==void 0&&s.onStart(m,o,c),r=!0},this.itemEnd=function(m){o++,s.onProgress!==void 0&&s.onProgress(m,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),u?u(m):m},this.setURLModifier=function(m){return u=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){let g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,f=h.length;g<f;g+=2){let v=h[g],w=h[g+1];if(v.global&&(v.lastIndex=0),v.test(m))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hd=new ll,cl=class{constructor(t){this.manager=t!==void 0?t:Hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ba=class extends vn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ta=class extends ba{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},sh=new Ge,Qu=new Q,td=new Q,hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),td.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(td),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,c=s?s.w/r.y:1,u=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===mr||t.reversedDepth?e.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+u,0,.5*c,0,.5*c+h,0,0,.5,.5,0,0,0,1),e.multiply(sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Io=new Q,Lo=new xi,pi=new Q,wa=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Io,Lo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Lo,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Io,Lo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Lo,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new Q,ed=new Re,nd=new Re,xn=class extends wa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,ed,nd),e.subVectors(nd,ed)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/u,e-=o.offsetY*n/h,s*=o.width/u,n*=o.height/h}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Mr=class extends wa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,c=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,c-=m*this.view.offsetY,u=c-m*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ch=class extends hl{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Aa=class extends ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new ch}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ur=-90,dr=1,ul=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(ur,dr,t,e);s.layers=this.layers,this.add(s);let r=new xn(ur,dr,t,e);r.layers=this.layers,this.add(r);let o=new xn(ur,dr,t,e);o.layers=this.layers,this.add(o);let c=new xn(ur,dr,t,e);c.layers=this.layers,this.add(c);let u=new xn(ur,dr,t,e);u.layers=this.layers,this.add(u);let h=new xn(ur,dr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,c,u]=e;for(let h of e)this.remove(h);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,u,h,m]=this.children,g=t.getRenderTarget(),f=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,3,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=R,t.setRenderTarget(n,5,s),M&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(g,f,v),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},dl=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fh="\\[\\]\\.:\\/",Up=new RegExp("["+Fh+"]","g"),Oh="[^"+Fh+"]",Fp="[^"+Fh.replace("\\.","")+"]",Op=/((?:WC+[\/:])*)/.source.replace("WC",Oh),Bp=/(WCOD+)?/.source.replace("WCOD",Fp),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),Vp=new RegExp("^"+Op+Bp+zp+kp+"$"),Gp=["material","materials","bones","map"],hh=class{constructor(t,e,n){let s=n||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Up,"")}static parseTrackName(t){let e=Vp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===e||c.uuid===e)return c;let u=n(c.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===h){h=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=hh;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bx=new Float32Array(1);var uh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Bh(i,t,e,n){let s=Hp(n);switch(e){case Ph:return i*t;case Ar:return i*t/s.components*s.byteLength;case yl:return i*t/s.components*s.byteLength;case hs:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case Ih:return i*t*3/s.components*s.byteLength;case Kn:return i*t*4/s.components*s.byteLength;case Sl:return i*t*4/s.components*s.byteLength;case Ia:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:case Al:return Math.max(i,16)*Math.max(t,8)/4;case bl:case wl:return Math.max(i,8)*Math.max(t,8)/2;case El:case Cl:case Pl:case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rl:case Ua:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yl:case Jl:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kl:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fa:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hp(i){switch(i){case Nn:case Ah:return{byteLength:1,components:1};case Tr:case Eh:case oi:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case ai:case _l:case Zn:return{byteLength:4,components:1};case Ch:case Rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function df(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xp(i){let t=new WeakMap;function e(c,u){let h=c.array,m=c.usage,g=h.byteLength,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,h,m),c.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,u,h){let m=u.array,g=u.updateRanges;if(i.bindBuffer(h,c),g.length===0)i.bufferSubData(h,0,m);else{g.sort((v,w)=>v.start-w.start);let f=0;for(let v=1;v<g.length;v++){let w=g[f],R=g[v];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++f,g[f]=R)}g.length=f+1;for(let v=0,w=g.length;v<w;v++){let R=g[v];i.bufferSubData(h,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=t.get(c);u&&(i.deleteBuffer(u.buffer),t.delete(c))}function o(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let m=t.get(c);(!m||m.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let h=t.get(c);if(h===void 0)t.set(c,e(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:s,remove:r,update:o}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
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
#endif`,Wm=`uniform sampler2D dfgLUT;
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
}`,Xm=`
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n0=`#if defined( USE_POINTS_UV )
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
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
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
#endif`,g0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I0=`float getShadowMask() {
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
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,N0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,F0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
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
}`,tg=`#define DISTANCE
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
}`,eg=`#define DISTANCE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define LAMBERT
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
}`,hg=`#define MATCAP
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
}`,ug=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,fg=`#define NORMAL
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
}`,pg=`#define PHONG
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
}`,mg=`#define PHONG
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
}`,gg=`#define STANDARD
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
}`,_g=`#define STANDARD
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
}`,xg=`#define TOON
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
}`,vg=`#define TOON
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
}`,yg=`uniform float size;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,bg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:Jp,alphamap_pars_fragment:Zp,alphatest_fragment:Kp,alphatest_pars_fragment:$p,aomap_fragment:jp,aomap_pars_fragment:Qp,batching_pars_vertex:tm,batching_vertex:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:am,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:dm,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:_m,displacementmap_pars_vertex:xm,displacementmap_vertex:vm,emissivemap_fragment:ym,emissivemap_pars_fragment:Mm,colorspace_fragment:Sm,colorspace_pars_fragment:bm,envmap_fragment:Tm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Am,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Bm,envmap_vertex:Cm,fog_vertex:Rm,fog_pars_vertex:Pm,fog_fragment:Im,fog_pars_fragment:Lm,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Nm,lights_lambert_fragment:Um,lights_lambert_pars_fragment:Fm,lights_pars_begin:Om,lights_toon_fragment:zm,lights_toon_pars_fragment:km,lights_phong_fragment:Vm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Xm,lights_fragment_maps:qm,lights_fragment_end:Ym,lightprobes_pars_fragment:Jm,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:jm,map_fragment:Qm,map_pars_fragment:t0,map_particle_fragment:e0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:s0,morphinstance_vertex:r0,morphcolor_vertex:a0,morphnormal_vertex:o0,morphtarget_pars_vertex:l0,morphtarget_vertex:c0,normal_fragment_begin:h0,normal_fragment_maps:u0,normal_pars_fragment:d0,normal_pars_vertex:f0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:g0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:v0,opaque_fragment:y0,packing:M0,premultiplied_alpha_fragment:S0,project_vertex:b0,dithering_fragment:T0,dithering_pars_fragment:w0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:C0,shadowmap_pars_vertex:R0,shadowmap_vertex:P0,shadowmask_pars_fragment:I0,skinbase_vertex:L0,skinning_pars_vertex:D0,skinning_vertex:N0,skinnormal_vertex:U0,specularmap_fragment:F0,specularmap_pars_fragment:O0,tonemapping_fragment:B0,tonemapping_pars_fragment:z0,transmission_fragment:k0,transmission_pars_fragment:V0,uv_pars_fragment:G0,uv_pars_vertex:H0,uv_vertex:W0,worldpos_vertex:X0,background_vert:q0,background_frag:Y0,backgroundCube_vert:J0,backgroundCube_frag:Z0,cube_vert:K0,cube_frag:$0,depth_vert:j0,depth_frag:Q0,distance_vert:tg,distance_frag:eg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:sg,linedashed_frag:rg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:_g,meshtoon_vert:xg,meshtoon_frag:vg,points_vert:yg,points_frag:Mg,shadow_vert:Sg,shadow_frag:bg,sprite_vert:Tg,sprite_frag:wg},Nt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},bi={basic:{uniforms:Mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Mn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Mn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Mn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Mn([Nt.points,Nt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Mn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Mn([Nt.common,Nt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Mn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Mn([Nt.sprite,Nt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:Mn([Nt.common,Nt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:Mn([Nt.lights,Nt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};bi.physical={uniforms:Mn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var nc={r:0,b:0,g:0},Ag=new Ge,ff=new ue;ff.set(-1,0,0,0,1,0,0,0,1);function Eg(i,t,e,n,s,r){let o=new pe(0),c=s===!0?0:1,u,h,m=null,g=0,f=null;function v(N){let z=N.isScene===!0?N.background:null;if(z&&z.isTexture){let E=N.backgroundBlurriness>0;z=t.get(z,E)}return z}function w(N){let z=!1,E=v(N);E===null?M(o,c):E&&E.isColor&&(M(E,1),z=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||z)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(N,z){let E=v(z);E&&(E.isCubeTexture||E.mapping===Ra)?(h===void 0&&(h=new yn(new yr(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ls(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,L,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(z.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ff),h.material.toneMapped=we.getTransfer(E.colorSpace)!==Be,(m!==E||g!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,m=E,g=E.version,f=i.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new yn(new va(2,2),new En({name:"BackgroundMaterial",uniforms:Ls(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,u.material.toneMapped=we.getTransfer(E.colorSpace)!==Be,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(m!==E||g!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,m=E,g=E.version,f=i.toneMapping),u.layers.enableAll(),N.unshift(u,u.geometry,u.material,0,0,null))}function M(N,z){N.getRGB(nc,Uh(i)),e.buffers.color.setClear(nc.r,nc.g,nc.b,z,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(N,z=1){o.set(N),c=z,M(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(N){c=N,M(o,c)},render:w,addToRenderList:R,dispose:p}}function Cg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function c(V,K,it,X,$){let ct=!1,st=g(V,X,it,K);r!==st&&(r=st,h(r.object)),ct=v(V,X,it,$),ct&&w(V,X,it,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(ct||o)&&(o=!1,E(V,K,it,X),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function u(){return i.createVertexArray()}function h(V){return i.bindVertexArray(V)}function m(V){return i.deleteVertexArray(V)}function g(V,K,it,X){let $=X.wireframe===!0,ct=n[K.id];ct===void 0&&(ct={},n[K.id]=ct);let st=V.isInstancedMesh===!0?V.id:0,mt=ct[st];mt===void 0&&(mt={},ct[st]=mt);let et=mt[it.id];et===void 0&&(et={},mt[it.id]=et);let rt=et[$];return rt===void 0&&(rt=f(u()),et[$]=rt),rt}function f(V){let K=[],it=[],X=[];for(let $=0;$<e;$++)K[$]=0,it[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:it,attributeDivisors:X,object:V,attributes:{},index:null}}function v(V,K,it,X){let $=r.attributes,ct=K.attributes,st=0,mt=it.getAttributes();for(let et in mt)if(mt[et].location>=0){let ht=$[et],qt=ct[et];if(qt===void 0&&(et==="instanceMatrix"&&V.instanceMatrix&&(qt=V.instanceMatrix),et==="instanceColor"&&V.instanceColor&&(qt=V.instanceColor)),ht===void 0||ht.attribute!==qt||qt&&ht.data!==qt.data)return!0;st++}return r.attributesNum!==st||r.index!==X}function w(V,K,it,X){let $={},ct=K.attributes,st=0,mt=it.getAttributes();for(let et in mt)if(mt[et].location>=0){let ht=ct[et];ht===void 0&&(et==="instanceMatrix"&&V.instanceMatrix&&(ht=V.instanceMatrix),et==="instanceColor"&&V.instanceColor&&(ht=V.instanceColor));let qt={};qt.attribute=ht,ht&&ht.data&&(qt.data=ht.data),$[et]=qt,st++}r.attributes=$,r.attributesNum=st,r.index=X}function R(){let V=r.newAttributes;for(let K=0,it=V.length;K<it;K++)V[K]=0}function M(V){p(V,0)}function p(V,K){let it=r.newAttributes,X=r.enabledAttributes,$=r.attributeDivisors;it[V]=1,X[V]===0&&(i.enableVertexAttribArray(V),X[V]=1),$[V]!==K&&(i.vertexAttribDivisor(V,K),$[V]=K)}function N(){let V=r.newAttributes,K=r.enabledAttributes;for(let it=0,X=K.length;it<X;it++)K[it]!==V[it]&&(i.disableVertexAttribArray(it),K[it]=0)}function z(V,K,it,X,$,ct,st){st===!0?i.vertexAttribIPointer(V,K,it,$,ct):i.vertexAttribPointer(V,K,it,X,$,ct)}function E(V,K,it,X){R();let $=X.attributes,ct=it.getAttributes(),st=K.defaultAttributeValues;for(let mt in ct){let et=ct[mt];if(et.location>=0){let rt=$[mt];if(rt===void 0&&(mt==="instanceMatrix"&&V.instanceMatrix&&(rt=V.instanceMatrix),mt==="instanceColor"&&V.instanceColor&&(rt=V.instanceColor)),rt!==void 0){let ht=rt.normalized,qt=rt.itemSize,Yt=t.get(rt);if(Yt===void 0)continue;let Pe=Yt.buffer,ye=Yt.type,Se=Yt.bytesPerElement,dt=ye===i.INT||ye===i.UNSIGNED_INT||rt.gpuType===_l;if(rt.isInterleavedBufferAttribute){let yt=rt.data,Gt=yt.stride,oe=rt.offset;if(yt.isInstancedInterleavedBuffer){for(let kt=0;kt<et.locationSize;kt++)p(et.location+kt,yt.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let kt=0;kt<et.locationSize;kt++)M(et.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let kt=0;kt<et.locationSize;kt++)z(et.location+kt,qt/et.locationSize,ye,ht,Gt*Se,(oe+qt/et.locationSize*kt)*Se,dt)}else{if(rt.isInstancedBufferAttribute){for(let yt=0;yt<et.locationSize;yt++)p(et.location+yt,rt.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let yt=0;yt<et.locationSize;yt++)M(et.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let yt=0;yt<et.locationSize;yt++)z(et.location+yt,qt/et.locationSize,ye,ht,qt*Se,qt/et.locationSize*yt*Se,dt)}}else if(st!==void 0){let ht=st[mt];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(et.location,ht);break;case 3:i.vertexAttrib3fv(et.location,ht);break;case 4:i.vertexAttrib4fv(et.location,ht);break;default:i.vertexAttrib1fv(et.location,ht)}}}}N()}function I(){F();for(let V in n){let K=n[V];for(let it in K){let X=K[it];for(let $ in X){let ct=X[$];for(let st in ct)m(ct[st].object),delete ct[st];delete X[$]}}delete n[V]}}function L(V){if(n[V.id]===void 0)return;let K=n[V.id];for(let it in K){let X=K[it];for(let $ in X){let ct=X[$];for(let st in ct)m(ct[st].object),delete ct[st];delete X[$]}}delete n[V.id]}function G(V){for(let K in n){let it=n[K];for(let X in it){let $=it[X];if($[V.id]===void 0)continue;let ct=$[V.id];for(let st in ct)m(ct[st].object),delete ct[st];delete $[V.id]}}}function b(V){for(let K in n){let it=n[K],X=V.isInstancedMesh===!0?V.id:0,$=it[X];if($!==void 0){for(let ct in $){let st=$[ct];for(let mt in st)m(st[mt].object),delete st[mt];delete $[ct]}delete it[X],Object.keys(it).length===0&&delete n[K]}}}function F(){H(),o=!0,r!==s&&(r=s,h(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:F,resetDefaultState:H,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:G,initAttributes:R,enableAttribute:M,disableUnusedAttributes:N}}function Rg(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,m){m!==0&&(i.drawArraysInstanced(n,u,h,m),e.update(h,n,m))}function c(u,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,m);let f=0;for(let v=0;v<m;v++)f+=h[v];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c}function Pg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let G=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(G){return!(G!==Kn&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(G){let b=G===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==Nn&&G!==Zn&&!b&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",m=u(h);m!==h&&(se("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);let g=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),z=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:f,maxTextures:v,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:M,maxAttributes:p,maxVertexUniforms:N,maxVaryings:z,maxFragmentUniforms:E,maxSamples:I,samples:L}}function Ig(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ii,c=new ue,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){let v=g.length!==0||f||n!==0||s;return s=f,n=g.length,v},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,f){e=m(g,f,0)},this.setState=function(g,f,v){let w=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,p=i.get(g);if(!s||w===null||w.length===0||r&&!M)r?m(null):h();else{let N=r?0:n,z=N*4,E=p.clippingState||null;u.value=E,E=m(w,f,z,v);for(let I=0;I!==z;++I)E[I]=e[I];p.clippingState=E,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function m(g,f,v,w){let R=g!==null?g.length:0,M=null;if(R!==0){if(M=u.value,w!==!0||M===null){let p=v+R*4,N=f.matrixWorldInverse;c.getNormalMatrix(N),(M===null||M.length<p)&&(M=new Float32Array(p));for(let z=0,E=v;z!==R;++z,E+=4)o.copy(g[z]).applyMatrix4(N,c),o.normal.toArray(M,E),M[E+3]=o.constant}u.value=M,u.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}var Cr=4,Lg=6,Dg=20,Ng=256,Ba=new Mr,Wd=new pe,zh=null,kh=0,Vh=0,Gh=!1,Ug=new Q,Ds=new Q,sc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:c=Ug}=r;zh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,c),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,kh,Vh),this._renderer.xr.enabled=Gh,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:oi,format:Kn,colorSpace:ra,depthBuffer:!1},s=Xd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fg(r)),this._blurMaterial=Bg(r,t,e),this._ggxMaterial=Og(r,t,e)}return s}_compileMaterial(t){let e=new yn(new zn,t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,s,r){let u=new xn(90,1,e,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,f=g.autoClear,v=g.toneMapping;g.getClearColor(Wd),g.toneMapping=ri,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new yr,new pa({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let R=this._backgroundBox,M=R.material,p=!1,N=t.background;N?N.isColor&&(M.color.copy(N),t.background=null,p=!0):(M.color.copy(Wd),p=!0);for(let z=0;z<6;z++){let E=z%3;E===0?(u.up.set(0,h[z],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+m[z],r.y,r.z)):E===1?(u.up.set(0,0,h[z]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+m[z],r.z)):(u.up.set(0,h[z],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+m[z]));let I=this._cubeSize;Er(s,E*I,z>2?I:0,I,I),g.setRenderTarget(s),p&&g.render(R,u),g.render(t,u)}g.toneMapping=v,g.autoClear=f,t.background=N}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let c=r.uniforms;c.envMap.value=t;let u=this._cubeSize;Er(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(o,Ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;let u=o.uniforms,h=n/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),g=Math.sqrt(h*h-m*m),f=h*1.25,v=g*f,{_lodMax:w}=this,R=this._sizeLods[n],M=3*R*(n>w-Cr?n-w+Cr:0),p=4*(this._cubeSize-R);u.envMap.value=t.texture,u.roughness.value=v,u.mipInt.value=w-e,Er(r,M,p,3*R,2*R),s.setRenderTarget(r),s.render(c,Ba),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=w-n,Er(t,M,p,3*R,2*R),s.setRenderTarget(t),s.render(c,Ba)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,c=this._blurMaterial,u=this._lodMeshes[s];u.material=c;let h=c.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let m=this._sizeLods[s],g=3*m*(s>this._lodMax-Cr?s-this._lodMax+Cr:0),f=4*(this._cubeSize-m);Er(e,g,f,3*m,2*m),o.setRenderTarget(e),o.render(u,Ba)}};function Fg(i){let t=[],e=[],n=i,s=i-Cr+1+Lg;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let c=1/(o-2),u=-c,h=1+c,m=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,f=6,v=3,w=new Float32Array(v*f*g),R=new Float32Array(v*f*g);for(let p=0;p<g;p++){let N=p%3*2/3-1,z=p>2?0:-1,E=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];w.set(E,v*f*p);for(let I=0;I<f;I++){let L=m[I*2]*2-1,G=m[I*2+1]*2-1;p===0?Ds.set(1,G,L):p===1?Ds.set(-L,1,-G):p===2?Ds.set(-L,G,1):p===3?Ds.set(-1,G,-L):p===4?Ds.set(-L,-1,G):Ds.set(L,G,-1),Ds.toArray(R,(p*f+I)*v)}}let M=new zn;M.setAttribute("position",new Bn(w,v)),M.setAttribute("outputDirection",new Bn(R,v)),e.push(new yn(M,null)),n>Cr&&n--}return{lodMeshes:e,sizeLods:t}}function Xd(i,t,e){let n=new Dn(i,t,e);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Og(i,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ng,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Bg(i,t,e){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:Dg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function qd(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Yd(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

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
	`}var rc=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _a(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yr(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Mi});r.uniforms.tEquirect.value=e;let o=new yn(s,r),c=e.minFilter;return e.minFilter===ls&&(e.minFilter=fn),new ul(1,10,this).update(t,o),e.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function zg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,v=!1){return f==null?null:v?o(f):r(f)}function r(f){if(f&&f.isTexture){let v=f.mapping;if(v===pl||v===ml)if(t.has(f)){let w=t.get(f).texture;return c(w,f.mapping)}else{let w=f.image;if(w&&w.height>0){let R=new rc(w.height);return R.fromEquirectangularTexture(i,f),t.set(f,R),f.addEventListener("dispose",h),c(R.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let v=f.mapping,w=v===pl||v===ml,R=v===os||v===Is;if(w||R){let M=e.get(f),p=M!==void 0?M.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new sc(i)),M=w?n.fromEquirectangular(f,M):n.fromCubemap(f,M),M.texture.pmremVersion=f.pmremVersion,e.set(f,M),M.texture;if(M!==void 0)return M.texture;{let N=f.image;return w&&N&&N.height>0||R&&N&&u(N)?(n===null&&(n=new sc(i)),M=w?n.fromEquirectangular(f):n.fromCubemap(f),M.texture.pmremVersion=f.pmremVersion,e.set(f,M),f.addEventListener("dispose",m),M.texture):null}}}return f}function c(f,v){return v===pl?f.mapping=os:v===ml&&(f.mapping=Is),f}function u(f){let v=0,w=6;for(let R=0;R<w;R++)f[R]!==void 0&&v++;return v===w}function h(f){let v=f.target;v.removeEventListener("dispose",h);let w=t.get(v);w!==void 0&&(t.delete(v),w.dispose())}function m(f){let v=f.target;v.removeEventListener("dispose",m);let w=e.get(v);w!==void 0&&(e.delete(v),w.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function kg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function Vg(i,t,e,n){let s={},r=new WeakMap;function o(g){let f=g.target;f.index!==null&&t.remove(f.index);for(let w in f.attributes)t.remove(f.attributes[w]);f.removeEventListener("dispose",o),delete s[f.id];let v=r.get(f);v&&(t.remove(v),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(g,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function u(g){let f=g.attributes;for(let v in f)t.update(f[v],i.ARRAY_BUFFER)}function h(g){let f=[],v=g.index,w=g.attributes.position,R=0;if(w===void 0)return;if(v!==null){let N=v.array;R=v.version;for(let z=0,E=N.length;z<E;z+=3){let I=N[z+0],L=N[z+1],G=N[z+2];f.push(I,L,L,G,G,I)}}else{let N=w.array;R=w.version;for(let z=0,E=N.length/3-1;z<E;z+=3){let I=z+0,L=z+1,G=z+2;f.push(I,L,L,G,G,I)}}let M=new(w.count>=65535?fa:da)(f,1);M.version=R;let p=r.get(g);p&&t.remove(p),r.set(g,M)}function m(g){let f=r.get(g);if(f){let v=g.index;v!==null&&f.version<v.version&&h(g)}else h(g);return r.get(g)}return{get:c,update:u,getWireframeAttribute:m}}function Gg(i,t,e){let n;function s(g){n=g}let r,o;function c(g){r=g.type,o=g.bytesPerElement}function u(g,f){i.drawElements(n,f,r,g*o),e.update(f,n,1)}function h(g,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,g*o,v),e.update(f,n,v))}function m(g,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,g,0,v);let R=0;for(let M=0;M<v;M++)R+=f[M];e.update(R,n,1)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=m}function Hg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=c*(r/3);break;case i.LINES:e.lines+=c*(r/2);break;case i.LINE_STRIP:e.lines+=c*(r-1);break;case i.LINE_LOOP:e.lines+=c*r;break;case i.POINTS:e.points+=c*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,t,e){let n=new WeakMap,s=new Ye;function r(o,c,u){let h=o.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0,f=n.get(c);if(f===void 0||f.count!==g){let F=function(){G.dispose(),n.delete(c),c.removeEventListener("dispose",F)};f!==void 0&&f.texture.dispose();let v=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,R=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],N=c.morphAttributes.color||[],z=0;v===!0&&(z=1),w===!0&&(z=2),R===!0&&(z=3);let E=c.attributes.position.count*z,I=1;E>t.maxTextureSize&&(I=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let L=new Float32Array(E*I*4*g),G=new la(L,E,I,g);G.type=Zn,G.needsUpdate=!0;let b=z*4;for(let H=0;H<g;H++){let V=M[H],K=p[H],it=N[H],X=E*I*4*H;for(let $=0;$<V.count;$++){let ct=$*b;v===!0&&(s.fromBufferAttribute(V,$),L[X+ct+0]=s.x,L[X+ct+1]=s.y,L[X+ct+2]=s.z,L[X+ct+3]=0),w===!0&&(s.fromBufferAttribute(K,$),L[X+ct+4]=s.x,L[X+ct+5]=s.y,L[X+ct+6]=s.z,L[X+ct+7]=0),R===!0&&(s.fromBufferAttribute(it,$),L[X+ct+8]=s.x,L[X+ct+9]=s.y,L[X+ct+10]=s.z,L[X+ct+11]=it.itemSize===4?s.w:1)}}f={count:g,texture:G,size:new Re(E,I)},n.set(c,f),c.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let R=0;R<h.length;R++)v+=h[R];let w=c.morphTargetsRelative?1:1-v;u.getUniforms().setValue(i,"morphTargetBaseInfluence",w),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Xg(i,t,e,n,s){let r=new WeakMap;function o(h){let m=s.render.frame,g=h.geometry,f=t.get(h,g);if(r.get(f)!==m&&(t.update(f),r.set(f,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==m&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,m))),h.isSkinnedMesh){let v=h.skeleton;r.get(v)!==m&&(v.update(),r.set(v,m))}return f}function c(){r=new WeakMap}function u(h){let m=h.target;m.removeEventListener("dispose",u),n.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:o,dispose:c}}var qg={[vh]:"LINEAR_TONE_MAPPING",[yh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[Ca]:"ACES_FILMIC_TONE_MAPPING",[bh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function Yg(i,t,e,n,s,r){let o=new Dn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,u=null,h=new zn;h.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new on([0,2,0,0,2,0],2));let m=new $o({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new yn(h,m),f=new Mr(-1,1,1,-1,0,1),v=null,w=null,R=!1,M,p=null,N=[],z=!1;this.setSize=function(E,I){o.setSize(E,I),c!==null&&c.setSize(E,I),u!==null&&u.setSize(E,I);for(let L=0;L<N.length;L++){let G=N[L];G.setSize&&G.setSize(E,I)}},this.setEffects=function(E){N=E,z=N.length>0&&N[0].isRenderPass===!0;let I=o.width,L=o.height;N.length>0&&c===null&&(c=new Dn(I,L,{type:oi,depthBuffer:!1,stencilBuffer:!1}),u=new Dn(I,L,{type:oi,depthBuffer:!1,stencilBuffer:!1}));for(let G=0;G<N.length;G++){let b=N[G];b.setSize&&b.setSize(I,L)}},this.begin=function(E,I){if(R||E.toneMapping===ri&&N.length===0)return!1;if(p=I,I!==null){let L=I.width,G=I.height;(o.width!==L||o.height!==G)&&this.setSize(L,G)}return z===!1&&E.setRenderTarget(o),M=E.toneMapping,E.toneMapping=ri,!0},this.hasRenderPass=function(){return z},this.end=function(E,I){E.toneMapping=M,R=!0;let L=o,G=c;for(let b=0;b<N.length;b++){let F=N[b];F.enabled!==!1&&(F.render(E,G,L,I),F.needsSwap!==!1&&(L=G,G=G===c?u:c))}if(v!==E.outputColorSpace||w!==E.toneMapping){v=E.outputColorSpace,w=E.toneMapping,m.defines={},we.getTransfer(v)===Be&&(m.defines.SRGB_TRANSFER="");let b=qg[w];b&&(m.defines[b]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,E.setRenderTarget(p),E.render(g,f),p=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),u!==null&&u.dispose(),h.dispose(),m.dispose()}}var pf=new Ln,Xh=new ns(1,1),mf=new la,gf=new Jo,_f=new _a,Jd=[],Zd=[],Kd=new Float32Array(16),$d=new Float32Array(9),jd=new Float32Array(4);function Pr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Jd[s];if(r===void 0&&(r=new Float32Array(s),Jd[s]=r),t!==0){n.toArray(r,0);for(let o=1,c=0;o!==t;++o)c+=e,i[o].toArray(r,c)}return r}function ln(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lc(i,t){let e=Zd[t];e===void 0&&(e=new Int32Array(t),Zd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2fv(this.addr,t),cn(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;i.uniform3fv(this.addr,t),cn(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4fv(this.addr,t),cn(e,t)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;jd.set(n),i.uniformMatrix2fv(this.addr,!1,jd),cn(e,n)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;$d.set(n),i.uniformMatrix3fv(this.addr,!1,$d),cn(e,n)}}function t_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Kd.set(n),i.uniformMatrix4fv(this.addr,!1,Kd),cn(e,n)}}function e_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2iv(this.addr,t),cn(e,t)}}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3iv(this.addr,t),cn(e,t)}}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4iv(this.addr,t),cn(e,t)}}function r_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2uiv(this.addr,t),cn(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3uiv(this.addr,t),cn(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4uiv(this.addr,t),cn(e,t)}}function c_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xh.compareFunction=e.isReversedDepthBuffer()?ec:tc,r=Xh):r=pf,e.setTexture2D(t||r,s)}function h_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gf,s)}function u_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_f,s)}function d_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mf,s)}function f_(i){switch(i){case 5126:return Jg;case 35664:return Zg;case 35665:return Kg;case 35666:return $g;case 35674:return jg;case 35675:return Qg;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return a_;case 36295:return o_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}function p_(i,t){i.uniform1fv(this.addr,t)}function m_(i,t){let e=Pr(t,this.size,2);i.uniform2fv(this.addr,e)}function g_(i,t){let e=Pr(t,this.size,3);i.uniform3fv(this.addr,e)}function __(i,t){let e=Pr(t,this.size,4);i.uniform4fv(this.addr,e)}function x_(i,t){let e=Pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v_(i,t){let e=Pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function y_(i,t){let e=Pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M_(i,t){i.uniform1iv(this.addr,t)}function S_(i,t){i.uniform2iv(this.addr,t)}function b_(i,t){i.uniform3iv(this.addr,t)}function T_(i,t){i.uniform4iv(this.addr,t)}function w_(i,t){i.uniform1uiv(this.addr,t)}function A_(i,t){i.uniform2uiv(this.addr,t)}function E_(i,t){i.uniform3uiv(this.addr,t)}function C_(i,t){i.uniform4uiv(this.addr,t)}function R_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Xh:o=pf;for(let c=0;c!==s;++c)e.setTexture2D(t[c]||o,r[c])}function P_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gf,r[o])}function I_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_f,r[o])}function L_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mf,r[o])}function D_(i){switch(i){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return x_;case 35675:return v_;case 35676:return y_;case 5124:case 35670:return M_;case 35667:case 35671:return S_;case 35668:case 35672:return b_;case 35669:case 35673:return T_;case 5125:return w_;case 36294:return A_;case 36295:return E_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return L_}}var qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f_(e.type)}},Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D_(e.type)}},Jh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(t,e[c.id],n)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function Qd(i,t){i.seq.push(t),i.map[t.id]=t}function N_(i,t,e){let n=i.name,s=n.length;for(Hh.lastIndex=0;;){let r=Hh.exec(n),o=Hh.lastIndex,c=r[1],u=r[2]==="]",h=r[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===s){Qd(e,h===void 0?new qh(c,i,t):new Yh(c,i,t));break}else{let g=e.map[c];g===void 0&&(g=new Jh(c),Qd(e,g)),e=g}}}var Rr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let c=t.getActiveUniform(e,o),u=t.getUniformLocation(e,c.name);N_(c,u,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let c=e[r],u=n[c.id];u.needsUpdate!==!1&&c.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function tf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var U_=37297,F_=0;function O_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===t?">":" "} ${c}: ${e[o]}`)}return n.join(`
`)}var ef=new ue;function B_(i){we._getMatrix(ef,we.workingColorSpace,i);let t=`mat3( ${ef.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(i)){case aa:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+O_(i.getShaderSource(t),c)}else return r}function z_(i,t){let e=B_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var k_={[vh]:"Linear",[yh]:"Reinhard",[Mh]:"Cineon",[Ca]:"ACESFilmic",[bh]:"AgX",[Th]:"Neutral",[Sh]:"Custom"};function V_(i,t){let e=k_[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new Q;function G_(){we.getLuminanceCoefficients(ic);let i=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function W_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:c}}return e}function ka(i){return i!==""}function sf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(i){return i.replace(q_,J_)}var Y_=new Map;function J_(i,t){let e=xe[t];if(e===void 0){let n=Y_.get(t);if(n!==void 0)e=xe[n],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zh(e)}var Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(i){return i.replace(Z_,K_)}function K_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function of(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var $_={[Ea]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};function j_(i){return $_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Q_={[os]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE_UV"};function tx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Q_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ex={[Is]:"ENVMAP_MODE_REFRACTION"};function nx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ex[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ix={[xh]:"ENVMAP_BLENDING_MULTIPLY",[bd]:"ENVMAP_BLENDING_MIX",[Td]:"ENVMAP_BLENDING_ADD"};function sx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ix[i.combine]||"ENVMAP_BLENDING_NONE"}function rx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ax(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,c=e.fragmentShader,u=j_(e),h=tx(e),m=nx(e),g=sx(e),f=rx(e),v=H_(e),w=W_(r),R=s.createProgram(),M,p,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(ka).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(ka).join(`
`),p.length>0&&(p+=`
`)):(M=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),p=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMap?"#define "+g:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?xe.tonemapping_pars_fragment:"",e.toneMapping!==ri?V_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,z_("linearToOutputTexel",e.outputColorSpace),G_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ka).join(`
`)),o=Zh(o),o=sf(o,e),o=rf(o,e),c=Zh(c),c=sf(c,e),c=rf(c,e),o=af(o),c=af(c),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let z=N+M+o,E=N+p+c,I=tf(s,s.VERTEX_SHADER,z),L=tf(s,s.FRAGMENT_SHADER,E);s.attachShader(R,I),s.attachShader(R,L),e.index0AttributeName!==void 0?s.bindAttribLocation(R,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(R,0,"position"),s.linkProgram(R);function G(V){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(R)||"",it=s.getShaderInfoLog(I)||"",X=s.getShaderInfoLog(L)||"",$=K.trim(),ct=it.trim(),st=X.trim(),mt=!0,et=!0;if(s.getProgramParameter(R,s.LINK_STATUS)===!1)if(mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,R,I,L);else{let rt=nf(s,I,"vertex"),ht=nf(s,L,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(R,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+rt+`
`+ht)}else $!==""?se("WebGLProgram: Program Info Log:",$):(ct===""||st==="")&&(et=!1);et&&(V.diagnostics={runnable:mt,programLog:$,vertexShader:{log:ct,prefix:M},fragmentShader:{log:st,prefix:p}})}s.deleteShader(I),s.deleteShader(L),b=new Rr(s,R),F=X_(s,R)}let b;this.getUniforms=function(){return b===void 0&&G(this),b};let F;this.getAttributes=function(){return F===void 0&&G(this),F};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(R,U_)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(R),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F_++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=L,this}var ox=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $h(t),e.set(t,n)),n}},$h=class{constructor(t){this.id=ox++,this.code=t,this.usedTimes=0}};function lx(i){return i===hs||i===Ua||i===Fa}function cx(i,t,e,n,s,r){let o=new ca,c=new Kh,u=new Set,h=[],m=new Map,g=n.logarithmicDepthBuffer,f=n.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return u.add(b),b===0?"uv":`uv${b}`}function R(b,F,H,V,K,it){let X=V.fog,$=K.geometry,ct=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,st=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,mt=t.get(b.envMap||ct,st),et=mt&&mt.mapping===Ra?mt.image.height:null,rt=v[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&se("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ht=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,qt=ht!==void 0?ht.length:0,Yt=0;$.morphAttributes.position!==void 0&&(Yt=1),$.morphAttributes.normal!==void 0&&(Yt=2),$.morphAttributes.color!==void 0&&(Yt=3);let Pe,ye,Se,dt;if(rt){let ke=bi[rt];Pe=ke.vertexShader,ye=ke.fragmentShader}else{Pe=b.vertexShader,ye=b.fragmentShader;let ke=c.getVertexShaderStage(b),Ae=c.getFragmentShaderStage(b);c.update(b,ke,Ae),Se=ke.id,dt=Ae.id}let yt=i.getRenderTarget(),Gt=i.state.buffers.depth.getReversed(),oe=K.isInstancedMesh===!0,kt=K.isBatchedMesh===!0,ge=!!b.map,Ke=!!b.matcap,ve=!!mt,ce=!!b.aoMap,le=!!b.lightMap,Me=!!b.bumpMap&&b.wireframe===!1,de=!!b.normalMap,Le=!!b.displacementMap,Sn=!!b.emissiveMap,qe=!!b.metalnessMap,ne=!!b.roughnessMap,P=b.anisotropy>0,Qt=b.clearcoat>0,be=b.dispersion>0,D=b.retroreflectivity>0,y=b.iridescence>0,q=b.sheen>0,tt=b.transmission>0,at=P&&!!b.anisotropyMap,gt=Qt&&!!b.clearcoatMap,Ct=Qt&&!!b.clearcoatNormalMap,ot=Qt&&!!b.clearcoatRoughnessMap,ut=y&&!!b.iridescenceMap,bt=y&&!!b.iridescenceThicknessMap,Kt=q&&!!b.sheenColorMap,Pt=q&&!!b.sheenRoughnessMap,Et=!!b.specularMap,Jt=!!b.specularColorMap,te=!!b.specularIntensityMap,Zt=tt&&!!b.transmissionMap,W=tt&&!!b.thicknessMap,wt=!!b.gradientMap,pt=!!b.alphaMap,At=b.alphaTest>0,Ft=!!b.alphaHash,St=!!b.extensions,$t=ri;b.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&($t=i.toneMapping);let Ht={shaderID:rt,shaderType:b.type,shaderName:b.name,vertexShader:Pe,fragmentShader:ye,defines:b.defines,customVertexShaderID:Se,customFragmentShaderID:dt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:kt,batchingColor:kt&&K._colorsTexture!==null,instancing:oe,instancingColor:oe&&K.instanceColor!==null,instancingMorph:oe&&K.morphTexture!==null,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:we.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ge,matcap:Ke,envMap:ve,envMapMode:ve&&mt.mapping,envMapCubeUVHeight:et,aoMap:ce,lightMap:le,bumpMap:Me,normalMap:de,displacementMap:Le,emissiveMap:Sn,normalMapObjectSpace:de&&b.normalMapType===Ed,normalMapTangentSpace:de&&b.normalMapType===Ql,packedNormalMap:de&&b.normalMapType===Ql&&lx(b.normalMap.format),metalnessMap:qe,roughnessMap:ne,anisotropy:P,anisotropyMap:at,clearcoat:Qt,clearcoatMap:gt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:ot,dispersion:be,retroreflection:D,iridescence:y,iridescenceMap:ut,iridescenceThicknessMap:bt,sheen:q,sheenColorMap:Kt,sheenRoughnessMap:Pt,specularMap:Et,specularColorMap:Jt,specularIntensityMap:te,transmission:tt,transmissionMap:Zt,thicknessMap:W,gradientMap:wt,opaque:b.transparent===!1&&b.blending===br&&b.alphaToCoverage===!1,alphaMap:pt,alphaTest:At,alphaHash:Ft,combine:b.combine,mapUv:ge&&w(b.map.channel),aoMapUv:ce&&w(b.aoMap.channel),lightMapUv:le&&w(b.lightMap.channel),bumpMapUv:Me&&w(b.bumpMap.channel),normalMapUv:de&&w(b.normalMap.channel),displacementMapUv:Le&&w(b.displacementMap.channel),emissiveMapUv:Sn&&w(b.emissiveMap.channel),metalnessMapUv:qe&&w(b.metalnessMap.channel),roughnessMapUv:ne&&w(b.roughnessMap.channel),anisotropyMapUv:at&&w(b.anisotropyMap.channel),clearcoatMapUv:gt&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&w(b.sheenRoughnessMap.channel),specularMapUv:Et&&w(b.specularMap.channel),specularColorMapUv:Jt&&w(b.specularColorMap.channel),specularIntensityMapUv:te&&w(b.specularIntensityMap.channel),transmissionMapUv:Zt&&w(b.transmissionMap.channel),thicknessMapUv:W&&w(b.thicknessMap.channel),alphaMapUv:pt&&w(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(de||P),vertexNormals:!!$.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!$.attributes.uv&&(ge||pt),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||$.attributes.normal===void 0&&de===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Gt,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Yt,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:it.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:ge&&b.map.isVideoTexture===!0&&we.getTransfer(b.map.colorSpace)===Be,decodeVideoTextureEmissive:Sn&&b.emissiveMap.isVideoTexture===!0&&we.getTransfer(b.emissiveMap.colorSpace)===Be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yi,flipSided:b.side===pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:St&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&b.extensions.multiDraw===!0||kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ht.vertexUv1s=u.has(1),Ht.vertexUv2s=u.has(2),Ht.vertexUv3s=u.has(3),u.clear(),Ht}function M(b){let F=[];if(b.shaderID?F.push(b.shaderID):(F.push(b.customVertexShaderID),F.push(b.customFragmentShaderID)),b.defines!==void 0)for(let H in b.defines)F.push(H),F.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(p(F,b),N(F,b),F.push(i.outputColorSpace)),F.push(b.customProgramCacheKey),F.join()}function p(b,F){b.push(F.precision),b.push(F.outputColorSpace),b.push(F.envMapMode),b.push(F.envMapCubeUVHeight),b.push(F.mapUv),b.push(F.alphaMapUv),b.push(F.lightMapUv),b.push(F.aoMapUv),b.push(F.bumpMapUv),b.push(F.normalMapUv),b.push(F.displacementMapUv),b.push(F.emissiveMapUv),b.push(F.metalnessMapUv),b.push(F.roughnessMapUv),b.push(F.anisotropyMapUv),b.push(F.clearcoatMapUv),b.push(F.clearcoatNormalMapUv),b.push(F.clearcoatRoughnessMapUv),b.push(F.iridescenceMapUv),b.push(F.iridescenceThicknessMapUv),b.push(F.sheenColorMapUv),b.push(F.sheenRoughnessMapUv),b.push(F.specularMapUv),b.push(F.specularColorMapUv),b.push(F.specularIntensityMapUv),b.push(F.transmissionMapUv),b.push(F.thicknessMapUv),b.push(F.combine),b.push(F.fogExp2),b.push(F.sizeAttenuation),b.push(F.morphTargetsCount),b.push(F.morphAttributeCount),b.push(F.numSunLights),b.push(F.numDirLights),b.push(F.numPointLights),b.push(F.numSpotLights),b.push(F.numSpotLightMaps),b.push(F.numHemiLights),b.push(F.numRectAreaLights),b.push(F.numSunLightShadows),b.push(F.numDirLightShadows),b.push(F.numPointLightShadows),b.push(F.numSpotLightShadows),b.push(F.numSpotLightShadowsWithMaps),b.push(F.numLightProbes),b.push(F.shadowMapType),b.push(F.toneMapping),b.push(F.numClippingPlanes),b.push(F.numClipIntersection),b.push(F.depthPacking)}function N(b,F){o.disableAll(),F.instancing&&o.enable(0),F.instancingColor&&o.enable(1),F.instancingMorph&&o.enable(2),F.matcap&&o.enable(3),F.envMap&&o.enable(4),F.normalMapObjectSpace&&o.enable(5),F.normalMapTangentSpace&&o.enable(6),F.clearcoat&&o.enable(7),F.iridescence&&o.enable(8),F.alphaTest&&o.enable(9),F.vertexColors&&o.enable(10),F.vertexAlphas&&o.enable(11),F.vertexUv1s&&o.enable(12),F.vertexUv2s&&o.enable(13),F.vertexUv3s&&o.enable(14),F.vertexTangents&&o.enable(15),F.anisotropy&&o.enable(16),F.alphaHash&&o.enable(17),F.batching&&o.enable(18),F.dispersion&&o.enable(19),F.retroreflection&&o.enable(24),F.batchingColor&&o.enable(20),F.gradientMap&&o.enable(21),F.packedNormalMap&&o.enable(22),F.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),F.fog&&o.enable(0),F.useFog&&o.enable(1),F.flatShading&&o.enable(2),F.logarithmicDepthBuffer&&o.enable(3),F.reversedDepthBuffer&&o.enable(4),F.skinning&&o.enable(5),F.morphTargets&&o.enable(6),F.morphNormals&&o.enable(7),F.morphColors&&o.enable(8),F.premultipliedAlpha&&o.enable(9),F.shadowMapEnabled&&o.enable(10),F.doubleSided&&o.enable(11),F.flipSided&&o.enable(12),F.useDepthPacking&&o.enable(13),F.dithering&&o.enable(14),F.transmission&&o.enable(15),F.sheen&&o.enable(16),F.opaque&&o.enable(17),F.pointsUvs&&o.enable(18),F.decodeVideoTexture&&o.enable(19),F.decodeVideoTextureEmissive&&o.enable(20),F.alphaToCoverage&&o.enable(21),F.numLightProbeGrids>0&&o.enable(22),F.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function z(b){let F=v[b.type],H;if(F){let V=bi[F];H=Vd.clone(V.uniforms)}else H=b.uniforms;return H}function E(b,F){let H=m.get(F);return H!==void 0?++H.usedTimes:(H=new ax(i,F,b,s),h.push(H),m.set(F,H)),H}function I(b){if(--b.usedTimes===0){let F=h.indexOf(b);h[F]=h[h.length-1],h.pop(),m.delete(b.cacheKey),b.destroy()}}function L(b){c.remove(b)}function G(){c.dispose()}return{getParameters:R,getProgramCacheKey:M,getUniforms:z,acquireProgram:E,releaseProgram:I,releaseShaderCache:L,programs:h,dispose:G}}function hx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,u){i.get(o)[c]=u}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ux(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function lf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let v=0;return f.isInstancedMesh&&(v+=2),f.isSkinnedMesh&&(v+=1),v}function c(f,v,w,R,M,p){let N=i[t];return N===void 0?(N={id:f.id,object:f,geometry:v,material:w,materialVariant:o(f),groupOrder:R,renderOrder:f.renderOrder,z:M,group:p},i[t]=N):(N.id=f.id,N.object=f,N.geometry=v,N.material=w,N.materialVariant=o(f),N.groupOrder=R,N.renderOrder=f.renderOrder,N.z=M,N.group=p),t++,N}function u(f,v,w,R,M,p,N){N.reversedDepth===!0&&(M=-M);let z=c(f,v,w,R,M,p);w.transmission>0?n.push(z):w.transparent===!0?s.push(z):e.push(z)}function h(f,v,w,R,M,p){let N=c(f,v,w,R,M,p);w.transmission>0?n.unshift(N):w.transparent===!0?s.unshift(N):e.unshift(N)}function m(f,v){e.length>1&&e.sort(f||ux),n.length>1&&n.sort(v||lf),s.length>1&&s.sort(v||lf)}function g(){for(let f=t,v=i.length;f<v;f++){let w=i[f];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:u,unshift:h,finish:g,sort:m}}function dx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new cf,i.set(n,[o])):s>=r.length?(o=new cf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function fx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new pe};break;case"SpotLight":e={position:new Q,direction:new Q,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[t.id]=e,e}}}function px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var mx=0;function gx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _x(i){let t=new fx,e=px(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new Q);let s=new Q,r=new Ge,o=new Ge;function c(h){let m=0,g=0,f=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let v=0,w=0,R=0,M=0,p=0,N=0,z=0,E=0,I=0,L=0,G=0,b=0,F=0,H=0;h.sort(gx);for(let K=0,it=h.length;K<it;K++){let X=h[K],$=X.color,ct=X.intensity,st=X.distance,mt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===hs?mt=X.shadow.map.texture:mt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)m+=$.r*ct,g+=$.g*ct,f+=$.b*ct;else if(X.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(X.sh.coefficients[et],ct);H++}else if(X.isSunLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let rt=X.shadow,ht=e.get(X);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[w]=ht,n.sunShadowMap[w]=mt;let qt=rt.getViewportCount();for(let Yt=0;Yt<qt;Yt++)n.sunShadowMatrix[R+Yt]=rt.getMatrix(Yt),n.sunShadowCascade[R+Yt]=rt._cascadeData[Yt];R+=qt,w++}n.sun[v]=et,v++}else if(X.isDirectionalLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let rt=X.shadow,ht=e.get(X);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize=rt.mapSize,n.directionalShadow[M]=ht,n.directionalShadowMap[M]=mt,n.directionalShadowMatrix[M]=X.shadow.matrix,I++}n.directional[M]=et,M++}else if(X.isSpotLight){let et=t.get(X);et.position.setFromMatrixPosition(X.matrixWorld),et.color.copy($).multiplyScalar(ct),et.distance=st,et.coneCos=Math.cos(X.angle),et.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),et.decay=X.decay,n.spot[N]=et;let rt=X.shadow;if(X.map&&(n.spotLightMap[b]=X.map,b++,rt.updateMatrices(X),X.castShadow&&F++),n.spotLightMatrix[N]=rt.matrix,X.castShadow){let ht=e.get(X);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize=rt.mapSize,n.spotShadow[N]=ht,n.spotShadowMap[N]=mt,G++}N++}else if(X.isRectAreaLight){let et=t.get(X);et.color.copy($).multiplyScalar(ct),et.halfWidth.set(X.width*.5,0,0),et.halfHeight.set(0,X.height*.5,0),n.rectArea[z]=et,z++}else if(X.isPointLight){let et=t.get(X);if(et.color.copy(X.color).multiplyScalar(X.intensity),et.distance=X.distance,et.decay=X.decay,X.castShadow){let rt=X.shadow,ht=e.get(X);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize=rt.mapSize,ht.shadowCameraNear=rt.camera.near,ht.shadowCameraFar=rt.camera.far,n.pointShadow[p]=ht,n.pointShadowMap[p]=mt,n.pointShadowMatrix[p]=X.shadow.matrix,L++}n.point[p]=et,p++}else if(X.isHemisphereLight){let et=t.get(X);et.skyColor.copy(X.color).multiplyScalar(ct),et.groundColor.copy(X.groundColor).multiplyScalar(ct),n.hemi[E]=et,E++}}z>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=f;let V=n.hash;(V.sunLength!==v||V.directionalLength!==M||V.pointLength!==p||V.spotLength!==N||V.rectAreaLength!==z||V.hemiLength!==E||V.numSunShadows!==w||V.numDirectionalShadows!==I||V.numPointShadows!==L||V.numSpotShadows!==G||V.numSpotMaps!==b||V.numLightProbes!==H)&&(n.sun.length=v,n.directional.length=M,n.spot.length=N,n.rectArea.length=z,n.point.length=p,n.hemi.length=E,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=R,n.sunShadowCascade.length=R,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=L,n.pointShadowMap.length=L,n.pointShadowMatrix.length=L,n.spotShadow.length=G,n.spotShadowMap.length=G,n.spotLightMatrix.length=G+b-F,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=H,V.sunLength=v,V.directionalLength=M,V.pointLength=p,V.spotLength=N,V.rectAreaLength=z,V.hemiLength=E,V.numSunShadows=w,V.numDirectionalShadows=I,V.numPointShadows=L,V.numSpotShadows=G,V.numSpotMaps=b,V.numLightProbes=H,n.version=mx++)}function u(h,m){let g=0,f=0,v=0,w=0,R=0,M=0,p=m.matrixWorldInverse;for(let N=0,z=h.length;N<z;N++){let E=h[N];if(E.isSunLight){let I=n.sun[g];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(p),g++}else if(E.isDirectionalLight){let I=n.directional[f];I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(p),f++}else if(E.isSpotLight){let I=n.spot[w];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(p),w++}else if(E.isRectAreaLight){let I=n.rectArea[R];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),R++}else if(E.isPointLight){let I=n.point[v];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(p),v++}else if(E.isHemisphereLight){let I=n.hemi[M];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(p),M++}}}return{setup:c,setupView:u,state:n}}function hf(i){let t=new _x(i),e=[],n=[],s=[];function r(f){g.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function c(f){n.push(f)}function u(f){s.push(f)}function h(){t.setup(e)}function m(f){t.setupView(e,f)}let g={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:h,setupLightsView:m,pushLight:o,pushShadow:c,pushLightProbeGrid:u}}function xx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),c;return o===void 0?(c=new hf(i),t.set(s,[c])):r>=o.length?(c=new hf(i),o.push(c)):c=o[r],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
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
}`,Mx=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],Sx=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],uf=new Ge,za=new Q,Wh=new Q;function bx(i,t,e){let n=new vr,s=new Re,r=new Re,o=new Ye,c=new jo,u=new Qo,h={},m=e.maxTextureSize,g={[as]:pn,[pn]:as,[yi]:yi},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:vx,fragmentShader:yx}),v=f.clone();v.defines.HORIZONTAL_PASS=1;let w=new zn;w.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let R=new yn(w,f),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let p=this.type;this.render=function(L,G,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===fl&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ea);let F=i.getRenderTarget(),H=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Mi),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let it=p!==this.type;it&&G.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach($=>$.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,$=L.length;X<$;X++){let ct=L[X],st=ct.shadow;if(st===void 0){se("WebGLShadowMap:",ct,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);let mt=st.getFrameExtents();s.multiply(mt),r.copy(st.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/mt.x),s.x=r.x*mt.x,st.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/mt.y),s.y=r.y*mt.y,st.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(st.camera._reversedDepth=et,st.map===null||it===!0){if(st.map!==null&&(st.map.depthTexture!==null&&(st.map.depthTexture.dispose(),st.map.depthTexture=null),st.map.dispose()),this.type===Sr){if(ct.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}st.map=new Dn(s.x,s.y,{format:hs,type:oi,minFilter:fn,magFilter:fn,generateMipmaps:!1}),st.map.texture.name=ct.name+".shadowMap",st.map.depthTexture=new ns(s.x,s.y,Zn),st.map.depthTexture.name=ct.name+".shadowMapDepth",st.map.depthTexture.format=gi,st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=je,st.map.depthTexture.magFilter=je}else ct.isPointLight?(st.map=new rc(s.x),st.map.depthTexture=new Ko(s.x,ai)):(st.map=new Dn(s.x,s.y),st.map.depthTexture=new ns(s.x,s.y,ai)),st.map.depthTexture.name=ct.name+".shadowMap",st.map.depthTexture.format=gi,this.type===Ea?(st.map.depthTexture.compareFunction=et?ec:tc,st.map.depthTexture.minFilter=fn,st.map.depthTexture.magFilter=fn):(st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=je,st.map.depthTexture.magFilter=je);st.camera.updateProjectionMatrix()}st.map.isWebGLCubeRenderTarget!==!0&&(st.map.width!==s.x||st.map.height!==s.y)&&st.map.setSize(s.x,s.y);let rt=st.map.isWebGLCubeRenderTarget?6:st.getViewportCount();ct.isPointLight!==!0&&st.updateMatrices(ct,b);for(let ht=0;ht<rt;ht++){let qt=st.getCamera(ht);if(ct.isPointLight){let Yt=st.camera,Pe=st.matrix,ye=ct.distance||Yt.far;ye!==Yt.far&&(Yt.far=ye,Yt.updateProjectionMatrix()),za.setFromMatrixPosition(ct.matrixWorld),Yt.position.copy(za),Wh.copy(Yt.position),Wh.add(Mx[ht]),Yt.up.copy(Sx[ht]),Yt.lookAt(Wh),Yt.updateMatrixWorld(),Pe.makeTranslation(-za.x,-za.y,-za.z),uf.multiplyMatrices(Yt.projectionMatrix,Yt.matrixWorldInverse),st._frustum.setFromProjectionMatrix(uf,Yt.coordinateSystem,Yt.reversedDepth)}if(st.map.isWebGLCubeRenderTarget)i.setRenderTarget(st.map,ht),i.clear();else{ht===0&&(i.setRenderTarget(st.map),i.clear());let Yt=st.getViewport(ht);o.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),K.viewport(o)}n=st.getFrustum(ht),E(G,b,qt,ct,this.type)}st.isPointLightShadow!==!0&&this.type===Sr&&N(st,b),st.needsUpdate=!1}p=this.type,M.needsUpdate=!1,i.setRenderTarget(F,H,V)};function N(L,G){let b=t.update(R);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null?L.mapPass=new Dn(s.x,s.y,{format:hs,type:oi}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),f.uniforms.shadow_pass.value=L.map.depthTexture,f.uniforms.resolution.value.set(L.map.width,L.map.height),f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(G,null,b,f,R,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value.set(L.map.width,L.map.height),v.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(G,null,b,v,R,null)}function z(L,G,b,F){let H=null,V=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)H=V;else if(H=b.isPointLight===!0?u:c,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){let K=H.uuid,it=G.uuid,X=h[K];X===void 0&&(X={},h[K]=X);let $=X[it];$===void 0&&($=H.clone(),X[it]=$,G.addEventListener("dispose",I)),H=$}if(H.visible=G.visible,H.wireframe=G.wireframe,F===Sr?H.side=G.shadowSide!==null?G.shadowSide:G.side:H.side=G.shadowSide!==null?G.shadowSide:g[G.side],H.alphaMap=G.alphaMap,H.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,H.map=G.map,H.clipShadows=G.clipShadows,H.clippingPlanes=G.clippingPlanes,H.clipIntersection=G.clipIntersection,H.displacementMap=G.displacementMap,H.displacementScale=G.displacementScale,H.displacementBias=G.displacementBias,H.wireframeLinewidth=G.wireframeLinewidth,H.linewidth=G.linewidth,b.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let K=i.properties.get(H);K.light=b}return H}function E(L,G,b,F,H){if(L.visible===!1)return;if(L.layers.test(G.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&H===Sr)&&(!L.frustumCulled||L.intersectsFrustum(n))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);let it=t.update(L),X=L.material;if(Array.isArray(X)){let $=it.groups;for(let ct=0,st=$.length;ct<st;ct++){let mt=$[ct],et=X[mt.materialIndex];if(et&&et.visible){let rt=z(L,et,F,H);L.onBeforeShadow(i,L,G,b,it,rt,mt),i.renderBufferDirect(b,null,it,rt,L,mt),L.onAfterShadow(i,L,G,b,it,rt,mt)}}}else if(X.visible){let $=z(L,X,F,H);L.onBeforeShadow(i,L,G,b,it,$,null),i.renderBufferDirect(b,null,it,$,L,null),L.onAfterShadow(i,L,G,b,it,$,null)}}let K=L.children;for(let it=0,X=K.length;it<X;it++)E(K[it],G,b,F,H)}function I(L){L.target.removeEventListener("dispose",I);for(let b in h){let F=h[b],H=L.target.uuid;H in F&&(F[H].dispose(),delete F[H])}}}function Tx(i,t){function e(){let W=!1,wt=new Ye,pt=null,At=new Ye(0,0,0,0);return{setMask:function(Ft){pt!==Ft&&!W&&(i.colorMask(Ft,Ft,Ft,Ft),pt=Ft)},setLocked:function(Ft){W=Ft},setClear:function(Ft,St,$t,Ht,ke){ke===!0&&(Ft*=Ht,St*=Ht,$t*=Ht),wt.set(Ft,St,$t,Ht),At.equals(wt)===!1&&(i.clearColor(Ft,St,$t,Ht),At.copy(wt))},reset:function(){W=!1,pt=null,At.set(-1,0,0,0)}}}function n(){let W=!1,wt=!1,pt=null,At=null,Ft=null;return{setReversed:function(St){if(wt!==St){let $t=t.get("EXT_clip_control");St?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),wt=St;let Ht=Ft;Ft=null,this.setClear(Ht)}},getReversed:function(){return wt},setTest:function(St){St?yt(i.DEPTH_TEST):Gt(i.DEPTH_TEST)},setMask:function(St){pt!==St&&!W&&(i.depthMask(St),pt=St)},setFunc:function(St){if(wt&&(St=zd[St]),At!==St){switch(St){case Uo:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case Bo:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case ko:i.depthFunc(i.GREATER);break;case Vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=St}},setLocked:function(St){W=St},setClear:function(St){Ft!==St&&(Ft=St,wt&&(St=1-St),i.clearDepth(St))},reset:function(){W=!1,pt=null,At=null,Ft=null,wt=!1}}}function s(){let W=!1,wt=null,pt=null,At=null,Ft=null,St=null,$t=null,Ht=null,ke=null;return{setTest:function(Ae){W||(Ae?yt(i.STENCIL_TEST):Gt(i.STENCIL_TEST))},setMask:function(Ae){wt!==Ae&&!W&&(i.stencilMask(Ae),wt=Ae)},setFunc:function(Ae,Un,Cn){(pt!==Ae||At!==Un||Ft!==Cn)&&(i.stencilFunc(Ae,Un,Cn),pt=Ae,At=Un,Ft=Cn)},setOp:function(Ae,Un,Cn){(St!==Ae||$t!==Un||Ht!==Cn)&&(i.stencilOp(Ae,Un,Cn),St=Ae,$t=Un,Ht=Cn)},setLocked:function(Ae){W=Ae},setClear:function(Ae){ke!==Ae&&(i.clearStencil(Ae),ke=Ae)},reset:function(){W=!1,wt=null,pt=null,At=null,Ft=null,St=null,$t=null,Ht=null,ke=null}}}let r=new e,o=new n,c=new s,u=new WeakMap,h=new WeakMap,m={},g={},f={},v=new WeakMap,w=[],R=null,M=!1,p=null,N=null,z=null,E=null,I=null,L=null,G=null,b=new pe(0,0,0),F=0,H=!1,V=null,K=null,it=null,X=null,$=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,mt=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(et)[1]),st=mt>=1):et.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),st=mt>=2);let rt=null,ht={},qt=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),Pe=new Ye().fromArray(qt),ye=new Ye().fromArray(Yt);function Se(W,wt,pt,At){let Ft=new Uint8Array(4),St=i.createTexture();i.bindTexture(W,St),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<pt;$t++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(wt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return St}let dt={};dt[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),yt(i.DEPTH_TEST),o.setFunc(pr),Me(!1),de(dh),yt(i.CULL_FACE),ce(Mi);function yt(W){m[W]!==!0&&(i.enable(W),m[W]=!0)}function Gt(W){m[W]!==!1&&(i.disable(W),m[W]=!1)}function oe(W,wt){return f[W]!==wt?(i.bindFramebuffer(W,wt),f[W]=wt,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=wt),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function kt(W,wt){let pt=w,At=!1;if(W){pt=v.get(wt),pt===void 0&&(pt=[],v.set(wt,pt));let Ft=W.textures;if(pt.length!==Ft.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let St=0,$t=Ft.length;St<$t;St++)pt[St]=i.COLOR_ATTACHMENT0+St;pt.length=Ft.length,At=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,At=!0);At&&i.drawBuffers(pt)}function ge(W){return R!==W?(i.useProgram(W),R=W,!0):!1}let Ke={[Ps]:i.FUNC_ADD,[ad]:i.FUNC_SUBTRACT,[od]:i.FUNC_REVERSE_SUBTRACT};Ke[ld]=i.MIN,Ke[cd]=i.MAX;let ve={[hd]:i.ZERO,[ud]:i.ONE,[dd]:i.SRC_COLOR,[gh]:i.SRC_ALPHA,[xd]:i.SRC_ALPHA_SATURATE,[gd]:i.DST_COLOR,[pd]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[_h]:i.ONE_MINUS_SRC_ALPHA,[_d]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA,[vd]:i.CONSTANT_COLOR,[yd]:i.ONE_MINUS_CONSTANT_COLOR,[Md]:i.CONSTANT_ALPHA,[Sd]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(W,wt,pt,At,Ft,St,$t,Ht,ke,Ae){if(W===Mi){M===!0&&(Gt(i.BLEND),M=!1);return}if(M===!1&&(yt(i.BLEND),M=!0),W!==rd){if(W!==p||Ae!==H){if((N!==Ps||I!==Ps)&&(i.blendEquation(i.FUNC_ADD),N=Ps,I=Ps),Ae)switch(W){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFunc(i.ONE,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",W);break}else switch(W){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ph:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",W);break}z=null,E=null,L=null,G=null,b.set(0,0,0),F=0,p=W,H=Ae}return}Ft=Ft||wt,St=St||pt,$t=$t||At,(wt!==N||Ft!==I)&&(i.blendEquationSeparate(Ke[wt],Ke[Ft]),N=wt,I=Ft),(pt!==z||At!==E||St!==L||$t!==G)&&(i.blendFuncSeparate(ve[pt],ve[At],ve[St],ve[$t]),z=pt,E=At,L=St,G=$t),(Ht.equals(b)===!1||ke!==F)&&(i.blendColor(Ht.r,Ht.g,Ht.b,ke),b.copy(Ht),F=ke),p=W,H=!1}function le(W,wt){W.side===yi?Gt(i.CULL_FACE):yt(i.CULL_FACE);let pt=W.side===pn;wt&&(pt=!pt),Me(pt),W.blending===br&&W.transparent===!1?ce(Mi):ce(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let At=W.stencilWrite;c.setTest(At),At&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Sn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(W){V!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),V=W)}function de(W){W!==id?(yt(i.CULL_FACE),W!==K&&(W===dh?i.cullFace(i.BACK):W===sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Gt(i.CULL_FACE),K=W}function Le(W){W!==it&&(st&&i.lineWidth(W),it=W)}function Sn(W,wt,pt){W?(yt(i.POLYGON_OFFSET_FILL),(X!==wt||$!==pt)&&(X=wt,$=pt,o.getReversed()&&(wt=-wt),i.polygonOffset(wt,pt))):Gt(i.POLYGON_OFFSET_FILL)}function qe(W){W?yt(i.SCISSOR_TEST):Gt(i.SCISSOR_TEST)}function ne(W){W===void 0&&(W=i.TEXTURE0+ct-1),rt!==W&&(i.activeTexture(W),rt=W)}function P(W,wt,pt){pt===void 0&&(rt===null?pt=i.TEXTURE0+ct-1:pt=rt);let At=ht[pt];At===void 0&&(At={type:void 0,texture:void 0},ht[pt]=At),(At.type!==W||At.texture!==wt)&&(rt!==pt&&(i.activeTexture(pt),rt=pt),i.bindTexture(W,wt||dt[W]),At.type=W,At.texture=wt)}function Qt(){let W=ht[rt];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function be(){try{i.compressedTexImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function y(){try{i.texSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function q(){try{i.texSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function gt(){try{i.texStorage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function Ct(){try{i.texStorage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function ot(){try{i.texImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function ut(){try{i.texImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function bt(W){return g[W]!==void 0?g[W]:i.getParameter(W)}function Kt(W,wt){g[W]!==wt&&(i.pixelStorei(W,wt),g[W]=wt)}function Pt(W){Pe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Pe.copy(W))}function Et(W){ye.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ye.copy(W))}function Jt(W,wt){let pt=h.get(wt);pt===void 0&&(pt=new WeakMap,h.set(wt,pt));let At=pt.get(W);At===void 0&&(At=i.getUniformBlockIndex(wt,W.name),pt.set(W,At))}function te(W,wt){let At=h.get(wt).get(W);u.get(wt)!==At&&(i.uniformBlockBinding(wt,At,W.__bindingPointIndex),u.set(wt,At))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},g={},rt=null,ht={},f={},v=new WeakMap,w=[],R=null,M=!1,p=null,N=null,z=null,E=null,I=null,L=null,G=null,b=new pe(0,0,0),F=0,H=!1,V=null,K=null,it=null,X=null,$=null,Pe.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:yt,disable:Gt,bindFramebuffer:oe,drawBuffers:kt,useProgram:ge,setBlending:ce,setMaterial:le,setFlipSided:Me,setCullFace:de,setLineWidth:Le,setPolygonOffset:Sn,setScissorTest:qe,activeTexture:ne,bindTexture:P,unbindTexture:Qt,compressedTexImage2D:be,compressedTexImage3D:D,texImage2D:ot,texImage3D:ut,pixelStorei:Kt,getParameter:bt,updateUBOMapping:Jt,uniformBlockBinding:te,texStorage2D:gt,texStorage3D:Ct,texSubImage2D:y,texSubImage3D:q,compressedTexSubImage2D:tt,compressedTexSubImage3D:at,scissor:Pt,viewport:Et,reset:Zt}}function wx(i,t,e,n,s,r,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Re,m=new WeakMap,g=new Set,f,v=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,y){return w?new OffscreenCanvas(D,y):oa("canvas")}function M(D,y,q){let tt=1,at=be(D);if((at.width>q||at.height>q)&&(tt=q/Math.max(at.width,at.height)),tt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let gt=Math.floor(tt*at.width),Ct=Math.floor(tt*at.height);f===void 0&&(f=R(gt,Ct));let ot=y?R(gt,Ct):f;return ot.width=gt,ot.height=Ct,ot.getContext("2d").drawImage(D,0,0,gt,Ct),se("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+gt+"x"+Ct+")."),ot}else return"data"in D&&se("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),D;return D}function p(D){return D.generateMipmaps}function N(D){i.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(D,y,q,tt,at,gt=!1){if(D!==null){if(i[D]!==void 0)return i[D];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ct;tt&&(Ct=t.get("EXT_texture_norm16"),Ct||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=y;if(y===i.RED&&(q===i.FLOAT&&(ot=i.R32F),q===i.HALF_FLOAT&&(ot=i.R16F),q===i.UNSIGNED_BYTE&&(ot=i.R8),q===i.UNSIGNED_SHORT&&Ct&&(ot=Ct.R16_EXT),q===i.SHORT&&Ct&&(ot=Ct.R16_SNORM_EXT)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.R8UI),q===i.UNSIGNED_SHORT&&(ot=i.R16UI),q===i.UNSIGNED_INT&&(ot=i.R32UI),q===i.BYTE&&(ot=i.R8I),q===i.SHORT&&(ot=i.R16I),q===i.INT&&(ot=i.R32I)),y===i.RG&&(q===i.FLOAT&&(ot=i.RG32F),q===i.HALF_FLOAT&&(ot=i.RG16F),q===i.UNSIGNED_BYTE&&(ot=i.RG8),q===i.UNSIGNED_SHORT&&Ct&&(ot=Ct.RG16_EXT),q===i.SHORT&&Ct&&(ot=Ct.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.RG8UI),q===i.UNSIGNED_SHORT&&(ot=i.RG16UI),q===i.UNSIGNED_INT&&(ot=i.RG32UI),q===i.BYTE&&(ot=i.RG8I),q===i.SHORT&&(ot=i.RG16I),q===i.INT&&(ot=i.RG32I)),y===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),q===i.UNSIGNED_INT&&(ot=i.RGB32UI),q===i.BYTE&&(ot=i.RGB8I),q===i.SHORT&&(ot=i.RGB16I),q===i.INT&&(ot=i.RGB32I)),y===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),q===i.UNSIGNED_INT&&(ot=i.RGBA32UI),q===i.BYTE&&(ot=i.RGBA8I),q===i.SHORT&&(ot=i.RGBA16I),q===i.INT&&(ot=i.RGBA32I)),y===i.RGB&&(q===i.UNSIGNED_SHORT&&Ct&&(ot=Ct.RGB16_EXT),q===i.SHORT&&Ct&&(ot=Ct.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),y===i.RGBA){let ut=gt?aa:we.getTransfer(at);q===i.FLOAT&&(ot=i.RGBA32F),q===i.HALF_FLOAT&&(ot=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ot=ut===Be?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Ct&&(ot=Ct.RGBA16_EXT),q===i.SHORT&&Ct&&(ot=Ct.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function I(D,y){let q;return D?y===null||y===ai||y===wr?q=i.DEPTH24_STENCIL8:y===Zn?q=i.DEPTH32F_STENCIL8:y===Tr&&(q=i.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ai||y===wr?q=i.DEPTH_COMPONENT24:y===Zn?q=i.DEPTH_COMPONENT32F:y===Tr&&(q=i.DEPTH_COMPONENT16),q}function L(D,y){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==je&&D.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function G(D){let y=D.target;y.removeEventListener("dispose",G),F(y),y.isVideoTexture&&m.delete(y),y.isHTMLTexture&&g.delete(y)}function b(D){let y=D.target;y.removeEventListener("dispose",b),V(y)}function F(D){let y=n.get(D);if(y.__webglInit===void 0)return;let q=D.source,tt=v.get(q);if(tt){let at=tt[y.__cacheKey];at.usedTimes--,at.usedTimes===0&&H(D),Object.keys(tt).length===0&&v.delete(q)}n.remove(D)}function H(D){let y=n.get(D);i.deleteTexture(y.__webglTexture);let q=D.source,tt=v.get(q);delete tt[y.__cacheKey],o.memory.textures--}function V(D){let y=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let at=0;at<y.__webglFramebuffer[tt].length;at++)i.deleteFramebuffer(y.__webglFramebuffer[tt][at]);else i.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)i.deleteFramebuffer(y.__webglFramebuffer[tt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let q=D.textures;for(let tt=0,at=q.length;tt<at;tt++){let gt=n.get(q[tt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(q[tt])}n.remove(D)}let K=0;function it(){K=0}function X(){return K}function $(D){K=D}function ct(){let D=K;return D>=s.maxTextures&&se("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,D}function st(D){let y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function mt(D,y){let q=n.get(D);if(D.isVideoTexture&&P(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){let tt=D.image;if(tt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(q,D,y);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function et(D,y){let q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){Gt(q,D,y);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function rt(D,y){let q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){Gt(q,D,y);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function ht(D,y){let q=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){oe(q,D,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}let qt={[Go]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},Yt={[je]:i.NEAREST,[wd]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[gl]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},Pe={[Rd]:i.NEVER,[Nd]:i.ALWAYS,[Pd]:i.LESS,[tc]:i.LEQUAL,[Id]:i.EQUAL,[ec]:i.GEQUAL,[Ld]:i.GREATER,[Dd]:i.NOTEQUAL};function ye(D,y){if(y.type===Zn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===fn||y.magFilter===gl||y.magFilter===Pa||y.magFilter===ls||y.minFilter===fn||y.minFilter===gl||y.minFilter===Pa||y.minFilter===ls)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,qt[y.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,qt[y.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,qt[y.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Yt[y.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Yt[y.minFilter]),y.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Pe[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===je||y.minFilter!==Pa&&y.minFilter!==ls||y.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Se(D,y){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",G));let tt=y.source,at=v.get(tt);at===void 0&&(at={},v.set(tt,at));let gt=st(y);if(gt!==D.__cacheKey){at[gt]===void 0&&(at[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),at[gt].usedTimes++;let Ct=at[D.__cacheKey];Ct!==void 0&&(at[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&H(y)),D.__cacheKey=gt,D.__webglTexture=at[gt].texture}return q}function dt(D,y,q){return Math.floor(Math.floor(D/q)/y)}function yt(D,y,q,tt){let gt=D.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,q,tt,y.data);else{gt.sort((Kt,Pt)=>Kt.start-Pt.start);let Ct=0;for(let Kt=1;Kt<gt.length;Kt++){let Pt=gt[Ct],Et=gt[Kt],Jt=Pt.start+Pt.count,te=dt(Et.start,y.width,4),Zt=dt(Pt.start,y.width,4);Et.start<=Jt+1&&te===Zt&&dt(Et.start+Et.count-1,y.width,4)===te?Pt.count=Math.max(Pt.count,Et.start+Et.count-Pt.start):(++Ct,gt[Ct]=Et)}gt.length=Ct+1;let ot=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Kt=0,Pt=gt.length;Kt<Pt;Kt++){let Et=gt[Kt],Jt=Math.floor(Et.start/4),te=Math.ceil(Et.count/4),Zt=Jt%y.width,W=Math.floor(Jt/y.width),wt=te,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,Zt,W,wt,pt,q,tt,y.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function Gt(D,y,q){let tt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=i.TEXTURE_3D);let at=Se(D,y),gt=y.source;e.bindTexture(tt,D.__webglTexture,i.TEXTURE0+q);let Ct=n.get(gt);if(gt.version!==Ct.__version||at===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let pt=we.getPrimaries(we.workingColorSpace),At=y.colorSpace===Fi?null:we.getPrimaries(y.colorSpace),Ft=y.colorSpace===Fi||pt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ut=M(y.image,!1,s.maxTextureSize);ut=Qt(y,ut);let bt=r.convert(y.format,y.colorSpace),Kt=r.convert(y.type),Pt=E(y.internalFormat,bt,Kt,y.normalized,y.colorSpace,y.isVideoTexture);ye(tt,y);let Et,Jt=y.mipmaps,te=y.isVideoTexture!==!0,Zt=Ct.__version===void 0||at===!0,W=gt.dataReady,wt=L(y,ut);if(y.isDepthTexture)Pt=I(y.format===cs,y.type),Zt&&(te?e.texStorage2D(i.TEXTURE_2D,1,Pt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ut.width,ut.height,0,bt,Kt,null));else if(y.isDataTexture)if(Jt.length>0){te&&Zt&&e.texStorage2D(i.TEXTURE_2D,wt,Pt,Jt[0].width,Jt[0].height);for(let pt=0,At=Jt.length;pt<At;pt++)Et=Jt[pt],te?W&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,bt,Kt,Et.data):e.texImage2D(i.TEXTURE_2D,pt,Pt,Et.width,Et.height,0,bt,Kt,Et.data);y.generateMipmaps=!1}else te?(Zt&&e.texStorage2D(i.TEXTURE_2D,wt,Pt,ut.width,ut.height),W&&yt(y,ut,bt,Kt)):e.texImage2D(i.TEXTURE_2D,0,Pt,ut.width,ut.height,0,bt,Kt,ut.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){te&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Pt,Jt[0].width,Jt[0].height,ut.depth);for(let pt=0,At=Jt.length;pt<At;pt++)if(Et=Jt[pt],y.format!==Kn)if(bt!==null)if(te){if(W)if(y.layerUpdates.size>0){let Ft=Bh(Et.width,Et.height,y.format,y.type);for(let St of y.layerUpdates){let $t=Et.data.subarray(St*Ft/Et.data.BYTES_PER_ELEMENT,(St+1)*Ft/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,St,Et.width,Et.height,1,bt,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Et.width,Et.height,ut.depth,bt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Pt,Et.width,Et.height,ut.depth,0,Et.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Et.width,Et.height,ut.depth,bt,Kt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Pt,Et.width,Et.height,ut.depth,0,bt,Kt,Et.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{te&&Zt&&e.texStorage2D(i.TEXTURE_2D,wt,Pt,Jt[0].width,Jt[0].height);for(let pt=0,At=Jt.length;pt<At;pt++)Et=Jt[pt],y.format!==Kn?bt!==null?te?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Pt,Et.width,Et.height,0,Et.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?W&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,bt,Kt,Et.data):e.texImage2D(i.TEXTURE_2D,pt,Pt,Et.width,Et.height,0,bt,Kt,Et.data)}else if(y.isDataArrayTexture)if(te){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Pt,ut.width,ut.height,ut.depth),W)if(y.layerUpdates.size>0){let pt=Bh(ut.width,ut.height,y.format,y.type);for(let At of y.layerUpdates){let Ft=ut.data.subarray(At*pt/ut.data.BYTES_PER_ELEMENT,(At+1)*pt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,ut.width,ut.height,1,bt,Kt,Ft)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,bt,Kt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ut.width,ut.height,ut.depth,0,bt,Kt,ut.data);else if(y.isData3DTexture)te?(Zt&&e.texStorage3D(i.TEXTURE_3D,wt,Pt,ut.width,ut.height,ut.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,bt,Kt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ut.width,ut.height,ut.depth,0,bt,Kt,ut.data);else if(y.isFramebufferTexture){if(Zt)if(te)e.texStorage2D(i.TEXTURE_2D,wt,Pt,ut.width,ut.height);else{let pt=ut.width,At=ut.height;for(let Ft=0;Ft<wt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Pt,pt,At,0,bt,Kt,null),pt>>=1,At>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ut.parentNode!==pt){pt.appendChild(ut),g.add(y),pt.onpaint=At=>{let Ft=At.changedElements;for(let St of g)Ft.includes(St.image)&&(St.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Ft=i.RGBA,St=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ft,St,$t,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(te&&Zt){let pt=be(Jt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Pt,pt.width,pt.height)}for(let pt=0,At=Jt.length;pt<At;pt++)Et=Jt[pt],te?W&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,bt,Kt,Et):e.texImage2D(i.TEXTURE_2D,pt,Pt,bt,Kt,Et);y.generateMipmaps=!1}else if(te){if(Zt){let pt=be(ut);e.texStorage2D(i.TEXTURE_2D,wt,Pt,pt.width,pt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Kt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Pt,bt,Kt,ut);p(y)&&N(tt),Ct.__version=gt.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function oe(D,y,q){if(y.image.length!==6)return;let tt=Se(D,y),at=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);let gt=n.get(at);if(at.version!==gt.__version||tt===!0){e.activeTexture(i.TEXTURE0+q);let Ct=we.getPrimaries(we.workingColorSpace),ot=y.colorSpace===Fi?null:we.getPrimaries(y.colorSpace),ut=y.colorSpace===Fi||Ct===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let bt=y.isCompressedTexture||y.image[0].isCompressedTexture,Kt=y.image[0]&&y.image[0].isDataTexture,Pt=[];for(let St=0;St<6;St++)!bt&&!Kt?Pt[St]=M(y.image[St],!0,s.maxCubemapSize):Pt[St]=Kt?y.image[St].image:y.image[St],Pt[St]=Qt(y,Pt[St]);let Et=Pt[0],Jt=r.convert(y.format,y.colorSpace),te=r.convert(y.type),Zt=E(y.internalFormat,Jt,te,y.normalized,y.colorSpace),W=y.isVideoTexture!==!0,wt=gt.__version===void 0||tt===!0,pt=at.dataReady,At=L(y,Et);ye(i.TEXTURE_CUBE_MAP,y);let Ft;if(bt){W&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Zt,Et.width,Et.height);for(let St=0;St<6;St++){Ft=Pt[St].mipmaps;for(let $t=0;$t<Ft.length;$t++){let Ht=Ft[$t];y.format!==Kn?Jt!==null?W?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t,0,0,Ht.width,Ht.height,Jt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t,Zt,Ht.width,Ht.height,0,Ht.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t,0,0,Ht.width,Ht.height,Jt,te,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t,Zt,Ht.width,Ht.height,0,Jt,te,Ht.data)}}}else{if(Ft=y.mipmaps,W&&wt){Ft.length>0&&At++;let St=be(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Zt,St.width,St.height)}for(let St=0;St<6;St++)if(Kt){W?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Pt[St].width,Pt[St].height,Jt,te,Pt[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Zt,Pt[St].width,Pt[St].height,0,Jt,te,Pt[St].data);for(let $t=0;$t<Ft.length;$t++){let ke=Ft[$t].image[St].image;W?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t+1,0,0,ke.width,ke.height,Jt,te,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t+1,Zt,ke.width,ke.height,0,Jt,te,ke.data)}}else{W?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Jt,te,Pt[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Zt,Jt,te,Pt[St]);for(let $t=0;$t<Ft.length;$t++){let Ht=Ft[$t];W?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t+1,0,0,Jt,te,Ht.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,$t+1,Zt,Jt,te,Ht.image[St])}}}p(y)&&N(i.TEXTURE_CUBE_MAP),gt.__version=at.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function kt(D,y,q,tt,at,gt){let Ct=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),ut=E(q.internalFormat,Ct,ot,q.normalized,q.colorSpace),bt=n.get(y),Kt=n.get(q);if(Kt.__renderTarget=y,!bt.__hasExternalTextures){let Pt=Math.max(1,y.width>>gt),Et=Math.max(1,y.height>>gt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,gt,ut,Pt,Et,y.depth,0,Ct,ot,null):e.texImage2D(at,gt,ut,Pt,Et,0,Ct,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),ne(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,at,Kt.__webglTexture,0,qe(y)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,at,Kt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(D,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),y.depthBuffer){let tt=y.depthTexture,at=tt&&tt.isDepthTexture?tt.type:null,gt=I(y.stencilBuffer,at),Ct=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ne(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(y),gt,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(y),gt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,gt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,D)}else{let tt=y.textures;for(let at=0;at<tt.length;at++){let gt=tt[at],Ct=r.convert(gt.format,gt.colorSpace),ot=r.convert(gt.type),ut=E(gt.internalFormat,Ct,ot,gt.normalized,gt.colorSpace);ne(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(y),ut,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(y),ut,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ut,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(D,y,q){let tt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=n.get(y.depthTexture);if(at.__renderTarget=y,(!at.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),tt){if(at.__webglInit===void 0&&(at.__webglInit=!0,y.depthTexture.addEventListener("dispose",G)),at.__webglTexture===void 0){at.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),ye(i.TEXTURE_CUBE_MAP,y.depthTexture);let bt=r.convert(y.depthTexture.format),Kt=r.convert(y.depthTexture.type),Pt;y.depthTexture.format===gi?Pt=i.DEPTH_COMPONENT24:y.depthTexture.format===cs&&(Pt=i.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Pt,y.width,y.height,0,bt,Kt,null)}}else mt(y.depthTexture,0);let gt=at.__webglTexture,Ct=qe(y),ot=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ut=y.depthTexture.format===cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===gi)ne(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ot,gt,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ot,gt,0);else if(y.depthTexture.format===cs)ne(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ot,gt,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ot,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(D){let y=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){let tt=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){let at=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",at)};tt.addEventListener("dispose",at),y.__depthDisposeCallback=at}y.__boundDepthTexture=tt}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let tt=0;tt<6;tt++)Ke(y.__webglFramebuffer[tt],D,tt);else{let tt=D.texture.mipmaps;tt&&tt.length>0?Ke(y.__webglFramebuffer[0],D,0):Ke(y.__webglFramebuffer,D,0)}else if(q){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=i.createRenderbuffer(),ge(y.__webglDepthbuffer[tt],D,!1);else{let at=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=y.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,gt)}}else{let tt=D.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ge(y.__webglDepthbuffer,D,!1);else{let at=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(D,y,q){let tt=n.get(D);y!==void 0&&kt(tt.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ve(D)}function le(D){let y=D.texture,q=n.get(D),tt=n.get(y);D.addEventListener("dispose",b);let at=D.textures,gt=D.isWebGLCubeRenderTarget===!0,Ct=at.length>1;if(Ct||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=y.version,o.memory.textures++),gt){q.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[ot]=[];for(let ut=0;ut<y.mipmaps.length;ut++)q.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else q.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)q.__webglFramebuffer[ot]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ot=0,ut=at.length;ot<ut;ot++){let bt=n.get(at[ot]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ne(D)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ot=0;ot<at.length;ot++){let ut=at[ot];q.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ot]);let bt=r.convert(ut.format,ut.colorSpace),Kt=r.convert(ut.type),Pt=E(ut.internalFormat,bt,Kt,ut.normalized,ut.colorSpace,D.isXRRenderTarget===!0),Et=qe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,Pt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,q.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(q.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ye(i.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)kt(q.__webglFramebuffer[ot][ut],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else kt(q.__webglFramebuffer[ot],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(y)&&N(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ot=0,ut=at.length;ot<ut;ot++){let bt=at[ot],Kt=n.get(bt),Pt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Pt,Kt.__webglTexture),ye(Pt,bt),kt(q.__webglFramebuffer,D,bt,i.COLOR_ATTACHMENT0+ot,Pt,0),p(bt)&&N(Pt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ot=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,tt.__webglTexture),ye(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)kt(q.__webglFramebuffer[ut],D,y,i.COLOR_ATTACHMENT0,ot,ut);else kt(q.__webglFramebuffer,D,y,i.COLOR_ATTACHMENT0,ot,0);p(y)&&N(ot),e.unbindTexture()}D.depthBuffer&&ve(D)}function Me(D){let y=D.textures;for(let q=0,tt=y.length;q<tt;q++){let at=y[q];if(p(at)){let gt=z(D),Ct=n.get(at).__webglTexture;e.bindTexture(gt,Ct),N(gt),e.unbindTexture()}}}let de=[],Le=[];function Sn(D){if(D.samples>0){if(ne(D)===!1){let y=D.textures,q=D.width,tt=D.height,at=i.COLOR_BUFFER_BIT,gt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(D),ot=y.length>1;if(ot)for(let bt=0;bt<y.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let ut=D.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let bt=0;bt<y.length;bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);let Kt=n.get(y[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,q,tt,0,0,q,tt,at,i.NEAREST),u===!0&&(de.length=0,Le.length=0,de.push(i.COLOR_ATTACHMENT0+bt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(de.push(gt),Le.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let bt=0;bt<y.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);let Kt=n.get(y[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&u){let y=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function qe(D){return Math.min(s.maxSamples,D.samples)}function ne(D){let y=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function P(D){let y=o.render.frame;m.get(D)!==y&&(m.set(D,y),D.update())}function Qt(D,y){let q=D.colorSpace,tt=D.format,at=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==ra&&q!==Fi&&(we.getTransfer(q)===Be?(tt!==Kn||at!==Nn)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",q)),y}function be(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=ct,this.resetTextureUnits=it,this.getTextureUnits=X,this.setTextureUnits=$,this.setTexture2D=mt,this.setTexture2DArray=et,this.setTexture3D=rt,this.setTextureCube=ht,this.rebindTextures=ce,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ax(i,t){function e(n,s=Fi){let r,o=we.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ah)return i.BYTE;if(n===Eh)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===Ph)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Kn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===Ar)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===Ia||n===La||n===Da||n===Na)if(o===Be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===Tl||n===wl||n===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===Cl||n===Rl||n===Pl||n===Il||n===Ua||n===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===El||n===Cl)return o===Be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return r.COMPRESSED_R11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return r.COMPRESSED_RG11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yl||n===Jl||n===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yl)return o===Be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===$l||n===Fa||n===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
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

}`,jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:Ex,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yn(new va(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qh=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,o=null,c="local-floor",u=1,h=null,m=null,g=null,f=null,v=null,w=null,R=typeof XRWebGLBinding<"u",M=new jh,p={},N=e.getContextAttributes(),z=null,E=null,I=[],L=[],G=new Re,b=null,F=null,H=new xn;H.viewport=new Ye;let V=new xn;V.viewport=new Ye;let K=[H,V],it=new dl,X=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let yt=I[dt];return yt===void 0&&(yt=new xr,I[dt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(dt){let yt=I[dt];return yt===void 0&&(yt=new xr,I[dt]=yt),yt.getGripSpace()},this.getHand=function(dt){let yt=I[dt];return yt===void 0&&(yt=new xr,I[dt]=yt),yt.getHandSpace()};function ct(dt){let yt=L.indexOf(dt.inputSource);if(yt===-1)return;let Gt=I[yt];Gt!==void 0&&(Gt.update(dt.inputSource,dt.frame,h||o),Gt.dispatchEvent({type:dt.type,data:dt.inputSource}))}function st(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",mt);for(let dt=0;dt<I.length;dt++){let yt=L[dt];yt!==null&&(L[dt]=null,I[dt].disconnect(yt))}X=null,$=null,M.reset();for(let dt in p)delete p[dt];if(t.setRenderTarget(z),v=null,f=null,g=null,s=null,E=null,Se.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(G.width,G.height,!1),F!==null){let dt=F.camera;dt.fov=F.fov,dt.zoom=F.zoom,dt.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){r=dt,n.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){c=dt,n.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(dt){h=dt},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(dt){if(s=dt,s!==null){if(z=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",st),s.addEventListener("inputsourceschange",mt),N.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(G),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Gt=null,oe=null,kt=null;N.depth&&(kt=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Gt=N.stencil?cs:gi,oe=N.stencil?wr:ai);let ge={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:r};g=this.getBinding(),f=g.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Dn(f.textureWidth,f.textureHeight,{format:Kn,type:Nn,depthTexture:new ns(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Gt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Gt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(s,e,Gt),s.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),E=new Dn(v.framebufferWidth,v.framebufferHeight,{format:Kn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await s.requestReferenceSpace(c),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function mt(dt){for(let yt=0;yt<dt.removed.length;yt++){let Gt=dt.removed[yt],oe=L.indexOf(Gt);oe>=0&&(L[oe]=null,I[oe].disconnect(Gt))}for(let yt=0;yt<dt.added.length;yt++){let Gt=dt.added[yt],oe=L.indexOf(Gt);if(oe===-1){for(let ge=0;ge<I.length;ge++)if(ge>=L.length){L.push(Gt),oe=ge;break}else if(L[ge]===null){L[ge]=Gt,oe=ge;break}if(oe===-1)break}let kt=I[oe];kt&&kt.connect(Gt)}}let et=new Q,rt=new Q;function ht(dt,yt,Gt){et.setFromMatrixPosition(yt.matrixWorld),rt.setFromMatrixPosition(Gt.matrixWorld);let oe=et.distanceTo(rt),kt=yt.projectionMatrix.elements,ge=Gt.projectionMatrix.elements,Ke=kt[14]/(kt[10]-1),ve=kt[14]/(kt[10]+1),ce=(kt[9]+1)/kt[5],le=(kt[9]-1)/kt[5],Me=(kt[8]-1)/kt[0],de=(ge[8]+1)/ge[0],Le=Ke*Me,Sn=Ke*de,qe=oe/(-Me+de),ne=qe*-Me;if(yt.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(ne),dt.translateZ(qe),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert(),kt[10]===-1)dt.projectionMatrix.copy(yt.projectionMatrix),dt.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{let P=Ke+qe,Qt=ve+qe,be=Le-ne,D=Sn+(oe-ne),y=ce*ve/Qt*P,q=le*ve/Qt*P;dt.projectionMatrix.makePerspective(be,D,y,q,P,Qt),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}}function qt(dt,yt){yt===null?dt.matrixWorld.copy(dt.matrix):dt.matrixWorld.multiplyMatrices(yt.matrixWorld,dt.matrix),dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(s===null)return;let yt=dt.near,Gt=dt.far;M.texture!==null&&(M.depthNear>0&&(yt=M.depthNear),M.depthFar>0&&(Gt=M.depthFar)),it.near=V.near=H.near=yt,it.far=V.far=H.far=Gt,(X!==it.near||$!==it.far)&&(s.updateRenderState({depthNear:it.near,depthFar:it.far}),X=it.near,$=it.far),it.layers.mask=dt.layers.mask|6,H.layers.mask=it.layers.mask&-5,V.layers.mask=it.layers.mask&-3;let oe=dt.parent,kt=it.cameras;qt(it,oe);for(let ge=0;ge<kt.length;ge++)qt(kt[ge],oe);kt.length===2?ht(it,H,V):it.projectionMatrix.copy(H.projectionMatrix),F===null&&dt.isPerspectiveCamera&&(F={camera:dt,fov:dt.fov,zoom:dt.zoom}),Yt(dt,it,oe)};function Yt(dt,yt,Gt){Gt===null?dt.matrix.copy(yt.matrixWorld):(dt.matrix.copy(Gt.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(yt.matrixWorld)),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(yt.projectionMatrix),dt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),dt.isPerspectiveCamera&&(dt.fov=Xo*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(f===null&&v===null))return u},this.setFoveation=function(dt){u=dt,f!==null&&(f.fixedFoveation=dt),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=dt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(it)},this.getCameraTexture=function(dt){return p[dt]};let Pe=null;function ye(dt,yt){if(m=yt.getViewerPose(h||o),w=yt,m!==null){let Gt=m.views;v!==null&&(t.setRenderTargetFramebuffer(E,v.framebuffer),t.setRenderTarget(E));let oe=!1;Gt.length!==it.cameras.length&&(it.cameras.length=0,oe=!0);for(let ve=0;ve<Gt.length;ve++){let ce=Gt[ve],le=null;if(v!==null)le=v.getViewport(ce);else{let de=g.getViewSubImage(f,ce);le=de.viewport,ve===0&&(t.setRenderTargetTextures(E,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(E))}let Me=K[ve];Me===void 0&&(Me=new xn,Me.layers.enable(ve),Me.viewport=new Ye,K[ve]=Me),Me.matrix.fromArray(ce.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ce.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(le.x,le.y,le.width,le.height),ve===0&&(it.matrix.copy(Me.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),oe===!0&&it.cameras.push(Me)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&R){g=n.getBinding();let ve=g.getDepthInformation(Gt[0]);ve&&ve.isValid&&ve.texture&&M.init(ve,s.renderState)}if(kt&&kt.includes("camera-access")&&R){t.state.unbindTexture(),g=n.getBinding();for(let ve=0;ve<Gt.length;ve++){let ce=Gt[ve].camera;if(ce){let le=p[ce];le||(le=new xa,p[ce]=le);let Me=g.getCameraImage(ce);le.sourceTexture=Me}}}}for(let Gt=0;Gt<I.length;Gt++){let oe=L[Gt],kt=I[Gt];oe!==null&&kt!==void 0&&kt.update(oe,yt,h||o)}Pe&&Pe(dt,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),w=null}let Se=new df;Se.setAnimationLoop(ye),this.setAnimationLoop=function(dt){Pe=dt},this.dispose=function(){}}},Rx=new Ge,xf=new ue;xf.set(-1,0,0,0,1,0,0,0,1);function Px(i,t){function e(M,p){M.matrixAutoUpdate===!0&&M.updateMatrix(),p.value.copy(M.matrix)}function n(M,p){p.color.getRGB(M.fogColor.value,Uh(i)),p.isFog?(M.fogNear.value=p.near,M.fogFar.value=p.far):p.isFogExp2&&(M.fogDensity.value=p.density)}function s(M,p,N,z,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(M,p):p.isMeshLambertMaterial?(r(M,p),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(M,p),g(M,p)):p.isMeshPhongMaterial?(r(M,p),m(M,p),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(M,p),f(M,p),p.isMeshPhysicalMaterial&&v(M,p,E)):p.isMeshMatcapMaterial?(r(M,p),w(M,p)):p.isMeshDepthMaterial?r(M,p):p.isMeshDistanceMaterial?(r(M,p),R(M,p)):p.isMeshNormalMaterial?r(M,p):p.isLineBasicMaterial?(o(M,p),p.isLineDashedMaterial&&c(M,p)):p.isPointsMaterial?u(M,p,N,z):p.isSpriteMaterial?h(M,p):p.isShadowMaterial?(M.color.value.copy(p.color),M.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(M,p){M.opacity.value=p.opacity,p.color&&M.diffuse.value.copy(p.color),p.emissive&&M.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(M.map.value=p.map,e(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,e(p.alphaMap,M.alphaMapTransform)),p.bumpMap&&(M.bumpMap.value=p.bumpMap,e(p.bumpMap,M.bumpMapTransform),M.bumpScale.value=p.bumpScale,p.side===pn&&(M.bumpScale.value*=-1)),p.normalMap&&(M.normalMap.value=p.normalMap,e(p.normalMap,M.normalMapTransform),M.normalScale.value.copy(p.normalScale),p.side===pn&&M.normalScale.value.negate()),p.displacementMap&&(M.displacementMap.value=p.displacementMap,e(p.displacementMap,M.displacementMapTransform),M.displacementScale.value=p.displacementScale,M.displacementBias.value=p.displacementBias),p.emissiveMap&&(M.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,M.emissiveMapTransform)),p.specularMap&&(M.specularMap.value=p.specularMap,e(p.specularMap,M.specularMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest);let N=t.get(p),z=N.envMap,E=N.envMapRotation;z&&(M.envMap.value=z,M.envMapRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(E)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(xf),M.reflectivity.value=p.reflectivity,M.ior.value=p.ior,M.refractionRatio.value=p.refractionRatio),p.lightMap&&(M.lightMap.value=p.lightMap,M.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,M.lightMapTransform)),p.aoMap&&(M.aoMap.value=p.aoMap,M.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,M.aoMapTransform))}function o(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,p.map&&(M.map.value=p.map,e(p.map,M.mapTransform))}function c(M,p){M.dashSize.value=p.dashSize,M.totalSize.value=p.dashSize+p.gapSize,M.scale.value=p.scale}function u(M,p,N,z){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.size.value=p.size*N,M.scale.value=z*.5,p.map&&(M.map.value=p.map,e(p.map,M.uvTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,e(p.alphaMap,M.alphaMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function h(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.rotation.value=p.rotation,p.map&&(M.map.value=p.map,e(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,e(p.alphaMap,M.alphaMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function m(M,p){M.specular.value.copy(p.specular),M.shininess.value=Math.max(p.shininess,1e-4)}function g(M,p){p.gradientMap&&(M.gradientMap.value=p.gradientMap)}function f(M,p){M.metalness.value=p.metalness,p.metalnessMap&&(M.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,M.metalnessMapTransform)),M.roughness.value=p.roughness,p.roughnessMap&&(M.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,M.roughnessMapTransform)),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)}function v(M,p,N){M.ior.value=p.ior,p.sheen>0&&(M.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),M.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(M.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,M.sheenColorMapTransform)),p.sheenRoughnessMap&&(M.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,M.sheenRoughnessMapTransform))),p.clearcoat>0&&(M.clearcoat.value=p.clearcoat,M.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(M.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,M.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(M.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&M.clearcoatNormalScale.value.negate())),p.dispersion>0&&(M.dispersion.value=p.dispersion),p.retroreflectivity>0&&(M.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(M.iridescence.value=p.iridescence,M.iridescenceIOR.value=p.iridescenceIOR,M.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(M.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,M.iridescenceMapTransform)),p.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),p.transmission>0&&(M.transmission.value=p.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),p.transmissionMap&&(M.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,M.transmissionMapTransform)),M.thickness.value=p.thickness,p.thicknessMap&&(M.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=p.attenuationDistance,M.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(M.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(M.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=p.specularIntensity,M.specularColor.value.copy(p.specularColor),p.specularColorMap&&(M.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,M.specularColorMapTransform)),p.specularIntensityMap&&(M.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,M.specularIntensityMapTransform))}function w(M,p){p.matcap&&(M.matcap.value=p.matcap)}function R(M,p){let N=t.get(p).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ix(i,t,e,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,I){let L=I.program;n.uniformBlockBinding(E,L)}function h(E,I){let L=s[E.id];L===void 0&&(M(E),L=m(E),s[E.id]=L,E.addEventListener("dispose",N));let G=I.program;n.updateUBOMapping(E,G);let b=t.render.frame;r[E.id]!==b&&(f(E),r[E.id]=b)}function m(E){let I=g();E.__bindingPointIndex=I;let L=i.createBuffer(),G=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,G,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,L),L}function g(){for(let E=0;E<c;E++)if(o.indexOf(E)===-1)return o.push(E),E;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let I=s[E.id],L=E.uniforms,G=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let b=0,F=L.length;b<F;b++){let H=L[b];if(Array.isArray(H))for(let V=0,K=H.length;V<K;V++)v(H[V],b,V,G);else v(H,b,0,G)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(E,I,L,G){if(R(E,I,L,G)===!0){let b=E.__offset,F=E.value;if(Array.isArray(F)){let H=0;for(let V=0;V<F.length;V++){let K=F[V],it=p(K);w(K,E.__data,H),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(F,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,E.__data)}}function w(E,I,L){typeof E=="number"||typeof E=="boolean"?I[0]=E:E.isMatrix3?(I[0]=E.elements[0],I[1]=E.elements[1],I[2]=E.elements[2],I[3]=0,I[4]=E.elements[3],I[5]=E.elements[4],I[6]=E.elements[5],I[7]=0,I[8]=E.elements[6],I[9]=E.elements[7],I[10]=E.elements[8],I[11]=0):ArrayBuffer.isView(E)?I.set(new E.constructor(E.buffer,E.byteOffset,I.length)):E.toArray(I,L)}function R(E,I,L,G){let b=E.value,F=I+"_"+L;if(G[F]===void 0)return typeof b=="number"||typeof b=="boolean"?G[F]=b:ArrayBuffer.isView(b)?G[F]=b.slice():G[F]=b.clone(),!0;{let H=G[F];if(typeof b=="number"||typeof b=="boolean"){if(H!==b)return G[F]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(H.equals(b)===!1)return H.copy(b),!0}}return!1}function M(E){let I=E.uniforms,L=0,G=16;for(let F=0,H=I.length;F<H;F++){let V=Array.isArray(I[F])?I[F]:[I[F]];for(let K=0,it=V.length;K<it;K++){let X=V[K],$=Array.isArray(X.value)?X.value:[X.value];for(let ct=0,st=$.length;ct<st;ct++){let mt=$[ct],et=p(mt),rt=L%G,ht=rt%et.boundary,qt=rt+ht;L+=ht,qt!==0&&G-qt<et.storage&&(L+=G-qt),X.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=L,L+=et.storage}}}let b=L%G;return b>0&&(L+=G-b),E.__size=L,E.__cache={},this}function p(E){let I={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(I.boundary=4,I.storage=4):E.isVector2?(I.boundary=8,I.storage=8):E.isVector3||E.isColor?(I.boundary=16,I.storage=12):E.isVector4?(I.boundary=16,I.storage=16):E.isMatrix3?(I.boundary=48,I.storage=48):E.isMatrix4?(I.boundary=64,I.storage=64):E.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(I.boundary=16,I.storage=E.byteLength):se("WebGLRenderer: Unsupported uniform value type.",E),I}function N(E){let I=E.target;I.removeEventListener("dispose",N);let L=o.indexOf(I.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function z(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:u,update:h,dispose:z}}var Lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function Dx(){return Si===null&&(Si=new Rs(Lx,16,16,hs,oi),Si.name="DFG_LUT",Si.minFilter=fn,Si.magFilter=fn,Si.wrapS=mi,Si.wrapT=mi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var ac=class{constructor(t={}){let{canvas:e=Fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:f=!1,outputBufferType:v=Nn}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=o;let R=v,M=new Set([Sl,Ml,yl]),p=new Set([Nn,ai,Tr,wr,xl,vl]),N=new Uint32Array(4),z=new Int32Array(4),E=new Q,I=null,L=null,G=[],b=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,V=!1,K=null,it=null,X=null,$=null;this._outputColorSpace=An;let ct=0,st=0,mt=null,et=-1,rt=null,ht=new Ye,qt=new Ye,Yt=null,Pe=new pe(0),ye=0,Se=e.width,dt=e.height,yt=1,Gt=null,oe=null,kt=new Ye(0,0,Se,dt),ge=new Ye(0,0,Se,dt),Ke=!1,ve=new vr,ce=!1,le=!1,Me=new Ge,de=new Q,Le=new Ye,Sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function ne(){return mt===null?yt:1}let P=n;function Qt(S,k){return e.getContext(S,k)}let be,D,y,q,tt,at,gt,Ct,ot,ut,bt,Kt,Pt,Et,Jt,te,Zt,W,wt,pt,At,Ft,St;try{let S={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",Un,!1),P===null){let k="webgl2";if(P=Qt(k,S),P===null)throw Qt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(S){throw e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),ae("WebGLRenderer: "+S.message),S}function $t(){be=new kg(P),be.init(),At=new Ax(P,be),D=new Pg(P,be,t,At),y=new Tx(P,be),D.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),it=P.createFramebuffer(),X=P.createFramebuffer(),$=P.createFramebuffer(),q=new Hg(P),tt=new hx,at=new wx(P,be,y,tt,D,At,q),gt=new zg(H),Ct=new Xp(P),Ft=new Cg(P,Ct),ot=new Vg(P,Ct,q,Ft),ut=new Xg(P,ot,Ct,Ft,q),W=new Wg(P,D,at),Jt=new Ig(tt),bt=new cx(H,gt,be,D,Ft,Jt),Kt=new Px(H,tt),Pt=new dx,Et=new xx(be),Zt=new Eg(H,gt,y,ut,w,u),te=new bx(H,ut,D),St=new Ix(P,q,D,y),wt=new Rg(P,be,q),pt=new Gg(P,be,q),q.programs=bt.programs,H.capabilities=D,H.extensions=be,H.properties=tt,H.renderLists=Pt,H.shadowMap=te,H.state=y,H.info=q}R!==Nn&&(F=new Yg(R,e.width,e.height,c,s,r));let Ht=new Qh(H,P);this.xr=Ht,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(S){S!==void 0&&(yt=S,this.setSize(Se,dt,!1))},this.getSize=function(S){return S.set(Se,dt)},this.setSize=function(S,k,j=!0){if(Ht.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=S,dt=k,e.width=Math.floor(S*yt),e.height=Math.floor(k*yt),j===!0&&(e.style.width=S+"px",e.style.height=k+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(Se*yt,dt*yt).floor()},this.setDrawingBufferSize=function(S,k,j){Se=S,dt=k,yt=j,e.width=Math.floor(S*j),e.height=Math.floor(k*j),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(R===Nn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ht)},this.getViewport=function(S){return S.copy(kt)},this.setViewport=function(S,k,j,J){S.isVector4?kt.set(S.x,S.y,S.z,S.w):kt.set(S,k,j,J),y.viewport(ht.copy(kt).multiplyScalar(yt).round())},this.getScissor=function(S){return S.copy(ge)},this.setScissor=function(S,k,j,J){S.isVector4?ge.set(S.x,S.y,S.z,S.w):ge.set(S,k,j,J),y.scissor(qt.copy(ge).multiplyScalar(yt).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){y.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){Gt=S},this.setTransparentSort=function(S){oe=S},this.getClearColor=function(S){return S.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,j=!0){let J=0;if(S){let Z=!1;if(mt!==null){let Dt=mt.texture.format;Z=M.has(Dt)}if(Z){let Dt=mt.texture.type,Bt=p.has(Dt),Rt=Zt.getClearColor(),Wt=Zt.getClearAlpha(),zt=Rt.r,he=Rt.g,me=Rt.b;Bt?(N[0]=zt,N[1]=he,N[2]=me,N[3]=Wt,P.clearBufferuiv(P.COLOR,0,N)):(z[0]=zt,z[1]=he,z[2]=me,z[3]=Wt,P.clearBufferiv(P.COLOR,0,z))}else J|=P.COLOR_BUFFER_BIT}k&&(J|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(J|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&P.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),K=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),Zt.dispose(),Pt.dispose(),Et.dispose(),tt.dispose(),gt.dispose(),ut.dispose(),Ft.dispose(),St.dispose(),bt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Ga),Ht.removeEventListener("sessionend",Ha),Vn.stop()};function ke(S){S.preventDefault(),Nh("WebGLRenderer: Context Lost."),V=!0}function Ae(){Nh("WebGLRenderer: Context Restored."),V=!1;let S=q.autoReset,k=te.enabled,j=te.autoUpdate,J=te.needsUpdate,Z=te.type;$t(),q.autoReset=S,te.enabled=k,te.autoUpdate=j,te.needsUpdate=J,te.type=Z}function Un(S){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Cn(S){let k=S.target;k.removeEventListener("dispose",Cn),Ir(k)}function Ir(S){Ti(S),tt.remove(S)}function Ti(S){let k=tt.get(S).programs;k!==void 0&&(k.forEach(function(j){bt.releaseProgram(j)}),S.isShaderMaterial&&bt.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,j,J,Z,Dt){k===null&&(k=Sn);let Bt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Rt=Oi(S,k,j,J,Z);y.setMaterial(J,Bt);let Wt=j.index,zt=1;if(J.wireframe===!0){if(Wt=ot.getWireframeAttribute(j),Wt===void 0)return;zt=2}let he=j.drawRange,me=j.attributes.position,Xt=he.start*zt,Ne=(he.start+he.count)*zt;Dt!==null&&(Xt=Math.max(Xt,Dt.start*zt),Ne=Math.min(Ne,(Dt.start+Dt.count)*zt)),Wt!==null?(Xt=Math.max(Xt,0),Ne=Math.min(Ne,Wt.count)):me!=null&&(Xt=Math.max(Xt,0),Ne=Math.min(Ne,me.count));let Je=Ne-Xt;if(Je<0||Je===1/0)return;Ft.setup(Z,J,Rt,j,Wt);let He,Ue=wt;if(Wt!==null&&(He=Ct.get(Wt),Ue=pt,Ue.setIndex(He)),Z.isMesh)J.wireframe===!0?(y.setLineWidth(J.wireframeLinewidth*ne()),Ue.setMode(P.LINES)):Ue.setMode(P.TRIANGLES);else if(Z.isLine){let rn=J.linewidth;rn===void 0&&(rn=1),y.setLineWidth(rn*ne()),Z.isLineSegments?Ue.setMode(P.LINES):Z.isLineLoop?Ue.setMode(P.LINE_LOOP):Ue.setMode(P.LINE_STRIP)}else Z.isPoints?Ue.setMode(P.POINTS):Z.isSprite&&Ue.setMode(P.TRIANGLES);if(Z.isBatchedMesh)if(be.get("WEBGL_multi_draw"))Ue.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let rn=Z._multiDrawStarts,Ot=Z._multiDrawCounts,dn=Z._multiDrawCount,Ee=Wt?Ct.get(Wt).bytesPerElement:1,Rn=tt.get(J).currentProgram.getUniforms();for(let Hn=0;Hn<dn;Hn++)Rn.setValue(P,"_gl_DrawID",Hn),Ue.render(rn[Hn]/Ee,Ot[Hn])}else if(Z.isInstancedMesh)Ue.renderInstances(Xt,Je,Z.count);else if(j.isInstancedBufferGeometry){let rn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ot=Math.min(j.instanceCount,rn);Ue.renderInstances(Xt,Je,Ot)}else Ue.render(Xt,Je)};function Ns(S,k,j,J){K!==null&&S.isNodeMaterial&&K.setObject(J,S),ce===!0&&Jt.setState(S,j,!1),S.transparent===!0&&S.side===yi&&S.forceSinglePass===!1?(S.side=pn,S.needsUpdate=!0,sn(S,k,J),S.side=as,S.needsUpdate=!0,sn(S,k,J),S.side=yi):sn(S,k,J)}this.compile=function(S,k,j=null){j===null&&(j=S),K!==null&&K.renderStart(S,k,j),L=Et.get(j),L.init(k),b.push(L),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),S!==j&&S.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),L.setupLights(),K!==null&&K.updateLights(L.state.lightsArray),le=this.localClippingEnabled,ce=Jt.init(this.clippingPlanes,le),ce===!0&&Jt.setGlobalState(this.clippingPlanes,k),K!==null&&te.render(L.state.shadowsArray,j,k);let J=new Set;return S.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Dt=Z.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){let Rt=Dt[Bt];Ns(Rt,j,k,Z),J.add(Rt)}else Ns(Dt,j,k,Z),J.add(Dt)}),L=b.pop(),K!==null&&K.renderEnd(),J},this.compileAsync=function(S,k,j=null){let J=this.compile(S,k,j);return new Promise(Z=>{function Dt(){if(J.forEach(function(Bt){let Wt=tt.get(Bt).currentProgram;(Wt===void 0||Wt.isReady())&&J.delete(Bt)}),J.size===0){Z(S);return}setTimeout(Dt,10)}be.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Us=null;function Va(S){Us&&Us(S)}function Ga(){Vn.stop()}function Ha(){Vn.start()}let Vn=new df;Vn.setAnimationLoop(Va),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(S){Us=S,Ht.setAnimationLoop(S),S===null?Vn.stop():Vn.start()},Ht.addEventListener("sessionstart",Ga),Ht.addEventListener("sessionend",Ha),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;K!==null&&K.renderStart(S,k);let j=Ht.enabled===!0&&Ht.isPresenting===!0,J=F!==null&&(mt===null||j)&&F.begin(H,mt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(k),k=Ht.getCamera()),S.isScene===!0&&S.onBeforeRender(H,S,k,mt),L=Et.get(S,b.length),L.init(k),L.state.textureUnits=at.getTextureUnits(),b.push(L),Me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ve.setFromProjectionMatrix(Me,si,k.reversedDepth),le=this.localClippingEnabled,ce=Jt.init(this.clippingPlanes,le),I=Pt.get(S,G.length),I.init(),G.push(I),Ht.enabled===!0&&Ht.isPresenting===!0){let Bt=H.xr.getDepthSensingMesh();Bt!==null&&Lr(Bt,k,-1/0,H.sortObjects)}Lr(S,k,0,H.sortObjects),I.finish(),K!==null&&K.updateLights(L.state.lightsArray),H.sortObjects===!0&&I.sort(Gt,oe),qe=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,qe&&Zt.addToRenderList(I,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Jt.beginShadows();let Z=L.state.shadowsArray;if(te.render(Z,S,k),ce===!0&&Jt.endShadows(),(J&&F.hasRenderPass())===!1){let Bt=I.opaque,Rt=I.transmissive;if(L.setupLights(),k.isArrayCamera){let Wt=k.cameras;if(Rt.length>0)for(let zt=0,he=Wt.length;zt<he;zt++){let me=Wt[zt];Qe(Bt,Rt,S,me)}qe&&Zt.render(S);for(let zt=0,he=Wt.length;zt<he;zt++){let me=Wt[zt];ee(I,S,me,me.viewport)}}else Rt.length>0&&Qe(Bt,Rt,S,k),qe&&Zt.render(S),ee(I,S,k)}mt!==null&&st===0&&(at.updateMultisampleRenderTarget(mt),at.updateRenderTargetMipmap(mt)),J&&F.end(H),S.isScene===!0&&S.onAfterRender(H,S,k),Ft.resetDefaultState(),et=-1,rt=null,b.pop(),b.length>0?(L=b[b.length-1],at.setTextureUnits(L.state.textureUnits),ce===!0&&Jt.setGlobalState(H.clippingPlanes,L.state.camera)):L=null,G.pop(),G.length>0?I=G[G.length-1]:I=null,K!==null&&K.renderEnd()};function Lr(S,k,j,J){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLightProbeGrid)L.pushLightProbeGrid(S);else if(S.isLight)L.pushLight(S),S.castShadow&&L.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ve)){J&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Me);let Bt=ut.update(S),Rt=S.material;Rt.visible&&I.push(S,Bt,Rt,j,Le.z,null,k)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ve))){let Bt=ut.update(S),Rt=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Le.copy(Bt.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(Me)),Array.isArray(Rt)){let Wt=Bt.groups;for(let zt=0,he=Wt.length;zt<he;zt++){let me=Wt[zt],Xt=Rt[me.materialIndex];Xt&&Xt.visible&&I.push(S,Bt,Xt,j,Le.z,me,k)}}else Rt.visible&&I.push(S,Bt,Rt,j,Le.z,null,k)}}let Dt=S.children;for(let Bt=0,Rt=Dt.length;Bt<Rt;Bt++)Lr(Dt[Bt],k,j,J)}function ee(S,k,j,J){let{opaque:Z,transmissive:Dt,transparent:Bt}=S;L.setupLightsView(j),ce===!0&&Jt.setGlobalState(H.clippingPlanes,j),J&&y.viewport(ht.copy(J)),Z.length>0&&us(Z,k,j),Dt.length>0&&us(Dt,k,j),Bt.length>0&&us(Bt,k,j),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Qe(S,k,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[J.id]===void 0){let Xt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[J.id]=new Dn(1,1,{generateMipmaps:!0,type:Xt?oi:Nn,minFilter:ls,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:we.workingColorSpace})}let Dt=L.state.transmissionRenderTarget[J.id],Bt=J.viewport||ht;Dt.setSize(Bt.z*H.transmissionResolutionScale,Bt.w*H.transmissionResolutionScale);let Rt=H.getRenderTarget(),Wt=H.getActiveCubeFace(),zt=H.getActiveMipmapLevel();H.setRenderTarget(Dt),H.getClearColor(Pe),ye=H.getClearAlpha(),ye<1&&H.setClearColor(16777215,.5),H.clear(),qe&&Zt.render(j);let he=H.toneMapping;H.toneMapping=ri;let me=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),L.setupLightsView(J),ce===!0&&Jt.setGlobalState(H.clippingPlanes,J),us(S,j,J),at.updateMultisampleRenderTarget(Dt),at.updateRenderTargetMipmap(Dt),be.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ne=0,Je=k.length;Ne<Je;Ne++){let He=k[Ne],{object:Ue,geometry:rn,material:Ot,group:dn}=He;if(Ot.side===yi&&Ue.layers.test(J.layers)){let Ee=Ot.side;Ot.side=pn,Ot.needsUpdate=!0,Gn(Ue,j,J,rn,Ot,dn),Ot.side=Ee,Ot.needsUpdate=!0,Xt=!0}}Xt===!0&&(at.updateMultisampleRenderTarget(Dt),at.updateRenderTargetMipmap(Dt))}H.setRenderTarget(Rt,Wt,zt),H.setClearColor(Pe,ye),me!==void 0&&(J.viewport=me),H.toneMapping=he}function us(S,k,j){let J=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Dt=S.length;Z<Dt;Z++){let Bt=S[Z],{object:Rt,geometry:Wt,group:zt}=Bt,he=Bt.material;he.allowOverride===!0&&J!==null&&(he=J),Rt.layers.test(j.layers)&&Gn(Rt,k,j,Wt,he,zt)}}function Gn(S,k,j,J,Z,Dt){K!==null&&Z.isNodeMaterial&&K.setObject(S,Z),S.onBeforeRender(H,k,j,J,Z,Dt),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(H,k,j,J,S,Dt),Z.transparent===!0&&Z.side===yi&&Z.forceSinglePass===!1?(Z.side=pn,Z.needsUpdate=!0,H.renderBufferDirect(j,k,J,Z,S,Dt),Z.side=as,Z.needsUpdate=!0,H.renderBufferDirect(j,k,J,Z,S,Dt),Z.side=yi):H.renderBufferDirect(j,k,J,Z,S,Dt),S.onAfterRender(H,k,j,J,Z,Dt)}function sn(S,k,j){k.isScene!==!0&&(k=Sn);let J=tt.get(S),Z=L.state.lights,Dt=L.state.shadowsArray,Bt=Z.state.version,Rt=bt.getParameters(S,Z.state,Dt,k,j,L.state.lightProbeGridArray),Wt=bt.getProgramCacheKey(Rt),zt=J.programs;J.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,J.fog=k.fog;let he=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;J.envMap=gt.get(S.envMap||J.environment,he),J.envMapRotation=J.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,zt===void 0&&(S.addEventListener("dispose",Cn),zt=new Map,J.programs=zt);let me=zt.get(Wt);if(me!==void 0){if(J.currentProgram===me&&J.lightsStateVersion===Bt)return Fs(S,Rt),me}else Rt.uniforms=bt.getUniforms(S),K!==null&&S.isNodeMaterial&&K.build(S,j,Rt),S.onBeforeCompile(Rt,H),me=bt.acquireProgram(Rt,Wt),zt.set(Wt,me),J.uniforms=Rt.uniforms;let Xt=J.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Xt.clippingPlanes=Jt.uniform),Fs(S,Rt),J.needsLights=Wa(S),J.lightsStateVersion=Bt,J.needsLights&&(Xt.ambientLightColor.value=Z.state.ambient,Xt.lightProbe.value=Z.state.probe,Xt.sunLights.value=Z.state.sun,Xt.sunLightShadows.value=Z.state.sunShadow,Xt.directionalLights.value=Z.state.directional,Xt.directionalLightShadows.value=Z.state.directionalShadow,Xt.spotLights.value=Z.state.spot,Xt.spotLightShadows.value=Z.state.spotShadow,Xt.rectAreaLights.value=Z.state.rectArea,Xt.ltc_1.value=Z.state.rectAreaLTC1,Xt.ltc_2.value=Z.state.rectAreaLTC2,Xt.pointLights.value=Z.state.point,Xt.pointLightShadows.value=Z.state.pointShadow,Xt.hemisphereLights.value=Z.state.hemi,Xt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Xt.sunShadowCascade.value=Z.state.sunShadowCascade,Xt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xt.spotLightMatrix.value=Z.state.spotLightMatrix,Xt.spotLightMap.value=Z.state.spotLightMap,Xt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.lightProbeGrid=L.state.lightProbeGridArray.length>0,J.currentProgram=me,J.uniformsList=null,me}function De(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=Rr.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Fs(S,k){let j=tt.get(S);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function tn(S,k){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;E.setFromMatrixPosition(k.matrixWorld);for(let j=0,J=S.length;j<J;j++){let Z=S[j];if(Z.texture!==null&&Z.boundingBox.containsPoint(E))return Z}return null}function Oi(S,k,j,J,Z){k.isScene!==!0&&(k=Sn),at.resetTextureUnits();let Dt=k.fog,Bt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?k.environment:null,Rt=mt===null?H.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:we.workingColorSpace,Wt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,zt=gt.get(J.envMap||Bt,Wt),he=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,me=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Xt=!!j.morphAttributes.position,Ne=!!j.morphAttributes.normal,Je=!!j.morphAttributes.color,He=ri;J.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(He=H.toneMapping);let Ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,rn=Ue!==void 0?Ue.length:0,Ot=tt.get(J),dn=L.state.lights;if(ce===!0&&(le===!0||S!==rt)){let Ve=S===rt&&J.id===et;Jt.setState(J,S,Ve)}let Ee=!1;J.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==dn.state.version||Ot.outputColorSpace!==Rt||Z.isBatchedMesh&&Ot.batching===!1||!Z.isBatchedMesh&&Ot.batching===!0||Z.isBatchedMesh&&Ot.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ot.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ot.instancing===!1||!Z.isInstancedMesh&&Ot.instancing===!0||Z.isSkinnedMesh&&Ot.skinning===!1||!Z.isSkinnedMesh&&Ot.skinning===!0||Z.isInstancedMesh&&Ot.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ot.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ot.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ot.instancingMorph===!1&&Z.morphTexture!==null||Ot.envMap!==zt||J.fog===!0&&Ot.fog!==Dt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Jt.numPlanes||Ot.numIntersection!==Jt.numIntersection)||Ot.vertexAlphas!==he||Ot.vertexTangents!==me||Ot.morphTargets!==Xt||Ot.morphNormals!==Ne||Ot.morphColors!==Je||Ot.toneMapping!==He||Ot.morphTargetsCount!==rn||!!Ot.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Ee=!0):(Ee=!0,Ot.__version=J.version);let Rn=Ot.currentProgram;Ee===!0&&(Rn=sn(J,k,Z),K&&J.isNodeMaterial&&K.onUpdateProgram(J,Rn,Ot));let Hn=!1,li=!1,Bi=!1,Oe=Rn.getUniforms(),Ze=Ot.uniforms;if(y.useProgram(Rn.program)&&(Hn=!0,li=!0,Bi=!0),J.id!==et&&(et=J.id,li=!0),Ot.needsLights){let Ve=tn(L.state.lightProbeGridArray,Z);Ot.lightProbeGrid!==Ve&&(Ot.lightProbeGrid=Ve,li=!0)}if(Hn||rt!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Oe.setValue(P,"projectionMatrix",S.projectionMatrix),Oe.setValue(P,"viewMatrix",S.matrixWorldInverse);let hi=Oe.map.cameraPosition;hi!==void 0&&hi.setValue(P,de.setFromMatrixPosition(S.matrixWorld)),D.logarithmicDepthBuffer&&Oe.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Oe.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),rt!==S&&(rt=S,li=!0,Bi=!0)}if(Ot.needsLights&&(dn.state.sunShadowMap.length>0&&Oe.setValue(P,"sunShadowMap",dn.state.sunShadowMap,at),dn.state.directionalShadowMap.length>0&&Oe.setValue(P,"directionalShadowMap",dn.state.directionalShadowMap,at),dn.state.spotShadowMap.length>0&&Oe.setValue(P,"spotShadowMap",dn.state.spotShadowMap,at),dn.state.pointShadowMap.length>0&&Oe.setValue(P,"pointShadowMap",dn.state.pointShadowMap,at)),Z.isSkinnedMesh){Oe.setOptional(P,Z,"bindMatrix"),Oe.setOptional(P,Z,"bindMatrixInverse");let Ve=Z.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Oe.setValue(P,"boneTexture",Ve.boneTexture,at))}Z.isBatchedMesh&&(Oe.setOptional(P,Z,"batchingTexture"),Oe.setValue(P,"batchingTexture",Z._matricesTexture,at),Oe.setOptional(P,Z,"batchingIdTexture"),Oe.setValue(P,"batchingIdTexture",Z._indirectTexture,at),Oe.setOptional(P,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Oe.setValue(P,"batchingColorTexture",Z._colorsTexture,at));let ci=j.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&W.update(Z,j,Rn),(li||Ot.receiveShadow!==Z.receiveShadow)&&(Ot.receiveShadow=Z.receiveShadow,Oe.setValue(P,"receiveShadow",Z.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&k.environment!==null&&(Ze.envMapIntensity.value=k.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=Dx()),li){if(Oe.setValue(P,"toneMappingExposure",H.toneMappingExposure),Ot.needsLights&&Dr(Ze,Bi),Dt&&J.fog===!0&&Kt.refreshFogUniforms(Ze,Dt),Kt.refreshMaterialUniforms(Ze,J,yt,dt,L.state.transmissionRenderTarget[S.id]),Ot.needsLights&&Ot.lightProbeGrid){let Ve=Ot.lightProbeGrid;Ze.probesSH.value=Ve.texture,Ze.probesMin.value.copy(Ve.boundingBox.min),Ze.probesMax.value.copy(Ve.boundingBox.max),Ze.probesResolution.value.copy(Ve.resolution)}Rr.upload(P,De(Ot),Ze,at)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Rr.upload(P,De(Ot),Ze,at),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Oe.setValue(P,"center",Z.center),Oe.setValue(P,"modelViewMatrix",Z.modelViewMatrix),Oe.setValue(P,"normalMatrix",Z.normalMatrix),Oe.setValue(P,"modelMatrix",Z.matrixWorld),J.uniformsGroups!==void 0){let Ve=J.uniformsGroups;for(let hi=0,zi=Ve.length;hi<zi;hi++){let Xa=Ve[hi];St.update(Xa,Rn),St.bind(Xa,Rn)}}return Rn}function Dr(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.sunLights.needsUpdate=k,S.sunLightShadows.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Wa(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return mt},this.setRenderTargetTextures=function(S,k,j){let J=tt.get(S);J.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),tt.get(S.texture).__webglTexture=k,tt.get(S.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){let j=tt.get(S);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,j=0){mt=S,ct=k,st=j;let J=null,Z=!1,Dt=!1;if(S){let Rt=tt.get(S);if(Rt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(P.FRAMEBUFFER,Rt.__webglFramebuffer),ht.copy(S.viewport),qt.copy(S.scissor),Yt=S.scissorTest,y.viewport(ht),y.scissor(qt),y.setScissorTest(Yt),et=-1;return}else if(Rt.__webglFramebuffer===void 0)at.setupRenderTarget(S);else if(Rt.__hasExternalTextures)at.rebindTextures(S,tt.get(S.texture).__webglTexture,tt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let he=S.depthTexture;if(Rt.__boundDepthTexture!==he){if(he!==null&&tt.has(he)&&(S.width!==he.image.width||S.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(S)}}let Wt=S.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);let zt=tt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(zt[k])?J=zt[k][j]:J=zt[k],Z=!0):S.samples>0&&at.useMultisampledRTT(S)===!1?J=tt.get(S).__webglMultisampledFramebuffer:Array.isArray(zt)?J=zt[j]:J=zt,ht.copy(S.viewport),qt.copy(S.scissor),Yt=S.scissorTest}else ht.copy(kt).multiplyScalar(yt).floor(),qt.copy(ge).multiplyScalar(yt).floor(),Yt=Ke;if(j!==0&&(J=it),y.bindFramebuffer(P.FRAMEBUFFER,J)&&y.drawBuffers(S,J),y.viewport(ht),y.scissor(qt),y.setScissorTest(Yt),Z){let Rt=tt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,j)}else if(Dt){let Rt=k;for(let Wt=0;Wt<S.textures.length;Wt++){let zt=tt.get(S.textures[Wt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Wt,zt.__webglTexture,j,Rt)}}else if(S!==null&&j!==0){let Rt=tt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rt.__webglTexture,j)}et=-1};function Os(S){let k=tt.get(S);return(k.__readFormat!==S.format||k.__readType!==S.type)&&(k.__readFormat=S.format,k.__readType=S.type,k.__formatReadable=D.textureFormatReadable(S.format),k.__typeReadable=D.textureTypeReadable(S.type)),k}this.readRenderTargetPixels=function(S,k,j,J,Z,Dt,Bt,Rt=0){if(!(S&&S.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Bt!==void 0&&(Wt=Wt[Bt]),Wt){y.bindFramebuffer(P.FRAMEBUFFER,Wt);try{let zt=S.textures[Rt],he=zt.format,me=zt.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Rt);let Xt=Os(zt);if(Xt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-J&&j>=0&&j<=S.height-Z&&P.readPixels(k,j,J,Z,At.convert(he),At.convert(me),Dt)}finally{let zt=mt!==null?tt.get(mt).__webglFramebuffer:null;y.bindFramebuffer(P.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(S,k,j,J,Z,Dt,Bt,Rt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Bt!==void 0&&(Wt=Wt[Bt]),Wt)if(k>=0&&k<=S.width-J&&j>=0&&j<=S.height-Z){y.bindFramebuffer(P.FRAMEBUFFER,Wt);let zt=S.textures[Rt],he=zt.format,me=zt.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Rt);let Xt=Os(zt);if(Xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ne),P.bufferData(P.PIXEL_PACK_BUFFER,Dt.byteLength,P.STREAM_READ),P.readPixels(k,j,J,Z,At.convert(he),At.convert(me),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Je=mt!==null?tt.get(mt).__webglFramebuffer:null;y.bindFramebuffer(P.FRAMEBUFFER,Je);let He=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bd(P,He,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ne),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Dt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Ne),P.deleteSync(He),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,j=0){let J=Math.pow(2,-j),Z=Math.floor(S.image.width*J),Dt=Math.floor(S.image.height*J),Bt=k!==null?k.x:0,Rt=k!==null?k.y:0;at.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,Bt,Rt,Z,Dt),y.unbindTexture()},this.copyTextureToTexture=function(S,k,j=null,J=null,Z=0,Dt=0){let Bt,Rt,Wt,zt,he,me,Xt,Ne,Je,He=S.isCompressedTexture?S.mipmaps[Dt]:S.image;if(j!==null)Bt=j.max.x-j.min.x,Rt=j.max.y-j.min.y,Wt=j.isBox3?j.max.z-j.min.z:1,zt=j.min.x,he=j.min.y,me=j.isBox3?j.min.z:0;else{let Ze=Math.pow(2,-Z);Bt=Math.floor(He.width*Ze),Rt=Math.floor(He.height*Ze),S.isDataArrayTexture?Wt=He.depth:S.isData3DTexture?Wt=Math.floor(He.depth*Ze):Wt=1,zt=0,he=0,me=0}J!==null?(Xt=J.x,Ne=J.y,Je=J.z):(Xt=0,Ne=0,Je=0);let Ue=At.convert(k.format),rn=At.convert(k.type),Ot;k.isData3DTexture?(at.setTexture3D(k,0),Ot=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(at.setTexture2DArray(k,0),Ot=P.TEXTURE_2D_ARRAY):(at.setTexture2D(k,0),Ot=P.TEXTURE_2D),y.activeTexture(P.TEXTURE0),y.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);let dn=y.getParameter(P.UNPACK_ROW_LENGTH),Ee=y.getParameter(P.UNPACK_IMAGE_HEIGHT),Rn=y.getParameter(P.UNPACK_SKIP_PIXELS),Hn=y.getParameter(P.UNPACK_SKIP_ROWS),li=y.getParameter(P.UNPACK_SKIP_IMAGES);y.pixelStorei(P.UNPACK_ROW_LENGTH,He.width),y.pixelStorei(P.UNPACK_IMAGE_HEIGHT,He.height),y.pixelStorei(P.UNPACK_SKIP_PIXELS,zt),y.pixelStorei(P.UNPACK_SKIP_ROWS,he),y.pixelStorei(P.UNPACK_SKIP_IMAGES,me);let Bi=S.isDataArrayTexture||S.isData3DTexture,Oe=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){let Ze=tt.get(S),ci=tt.get(k),Ve=tt.get(Ze.__renderTarget),hi=tt.get(ci.__renderTarget);y.bindFramebuffer(P.READ_FRAMEBUFFER,Ve.__webglFramebuffer),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let zi=0;zi<Wt;zi++)Bi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,tt.get(S).__webglTexture,Z,me+zi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,tt.get(k).__webglTexture,Dt,Je+zi)),P.blitFramebuffer(zt,he,Bt,Rt,Xt,Ne,Bt,Rt,P.DEPTH_BUFFER_BIT,P.NEAREST);y.bindFramebuffer(P.READ_FRAMEBUFFER,null),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Z!==0||S.isRenderTargetTexture||tt.has(S)){let Ze=tt.get(S),ci=tt.get(k);y.bindFramebuffer(P.READ_FRAMEBUFFER,X),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,$);for(let Ve=0;Ve<Wt;Ve++)Bi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ze.__webglTexture,Z,me+Ve):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ze.__webglTexture,Z),Oe?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ci.__webglTexture,Dt,Je+Ve):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ci.__webglTexture,Dt),Z!==0?P.blitFramebuffer(zt,he,Bt,Rt,Xt,Ne,Bt,Rt,P.COLOR_BUFFER_BIT,P.NEAREST):Oe?P.copyTexSubImage3D(Ot,Dt,Xt,Ne,Je+Ve,zt,he,Bt,Rt):P.copyTexSubImage2D(Ot,Dt,Xt,Ne,zt,he,Bt,Rt);y.bindFramebuffer(P.READ_FRAMEBUFFER,null),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Oe?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Ot,Dt,Xt,Ne,Je,Bt,Rt,Wt,Ue,rn,He.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Ot,Dt,Xt,Ne,Je,Bt,Rt,Wt,Ue,He.data):P.texSubImage3D(Ot,Dt,Xt,Ne,Je,Bt,Rt,Wt,Ue,rn,He):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Dt,Xt,Ne,Bt,Rt,Ue,rn,He.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Dt,Xt,Ne,He.width,He.height,Ue,He.data):P.texSubImage2D(P.TEXTURE_2D,Dt,Xt,Ne,Bt,Rt,Ue,rn,He);y.pixelStorei(P.UNPACK_ROW_LENGTH,dn),y.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ee),y.pixelStorei(P.UNPACK_SKIP_PIXELS,Rn),y.pixelStorei(P.UNPACK_SKIP_ROWS,Hn),y.pixelStorei(P.UNPACK_SKIP_IMAGES,li),Dt===0&&k.generateMipmaps&&P.generateMipmap(Ot),y.unbindTexture()},this.initRenderTarget=function(S){tt.get(S).__webglFramebuffer===void 0&&at.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?at.setTextureCube(S,0):S.isData3DTexture?at.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?at.setTexture2DArray(S,0):at.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){ct=0,st=0,mt=null,y.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};function vf(i){let t;try{let b=i.getContext("webgl2",{antialias:!0,alpha:!1});if(!b)return null;t=new ac({canvas:i,context:b,antialias:!0,alpha:!1,powerPreference:"default"})}catch{return null}t.outputColorSpace=An,t.toneMapping=Ca,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=fl,t.setPixelRatio(Math.min(devicePixelRatio||1,1.5));let e=new ua;e.fog=new ha("#cbddec",125,460);let n=new xn(62,1,.12,850),s=new Ta("#e7f4ff","#a08ba5",2.2),r=new Aa("#fff0de",2.4);r.position.set(-30,60,25),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-55,right:55,top:45,bottom:-45,near:1,far:160}),r.shadow.bias=-4e-4,e.add(s,r,r.target);let o=new Rs(new Uint8Array([95,145,195,245]),4,1,Ar);o.minFilter=je,o.magFilter=je,o.needsUpdate=!0;let c=new Map,u=new Ge,h=new Map,m=new Map,g=new yn(new ya(650,16,8),new En({side:pn,depthWrite:!1,uniforms:{top:{value:new pe("#8fbee6")},bottom:{value:new pe("#f0e8f0")}},vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vDirection;uniform vec3 top,bottom;void main(){float h=smoothstep(-.05,.8,normalize(vDirection).y);gl_FragColor=vec4(mix(bottom,top,h),1.0);}"}));g.renderOrder=-100,e.add(g);let f=1,v=0,w=0,R=0,M=0,p=16.7,N=0,z=0,E=2,I=["low","medium","high"];function L(b,F){b.renderId||(b.renderId=f++);let H=b.renderId+":"+(b.paintable&&F?F:"");if(m.has(H))return m.get(H);let V=b.sourceData,K=[],it=[],X=[],$=F?new pe(F):null;for(let st=0;st<V.length;st+=10){K.push(V[st],V[st+1],V[st+2]),it.push(V[st+3],V[st+4],V[st+5]);let mt=V[st+6],et=V[st+7],rt=V[st+8],ht=b.paintable&&$&&et-mt>.14&&rt-mt>.2;X.push(ht?$.r:mt,ht?$.g:et,ht?$.b:rt)}let ct=new zn;return ct.setAttribute("position",new on(K,3)),ct.setAttribute("normal",new on(it,3)),ct.setAttribute("color",new on(X,3)),ct.setIndex(Array.from(b.sourceIndices)),ct.computeBoundingSphere(),m.set(H,ct),b.onDispose=()=>{for(let[st,mt]of m)if(st.startsWith(b.renderId+":")){for(let[et,rt]of c)rt.geometry===mt&&(e.remove(rt),rt.dispose(),c.delete(et));mt.dispose(),m.delete(st)}},ct}function G(b,F,H,V,K,it={}){let X=performance.now();if(M){let mt=X-M;mt<100&&(p+=(mt-p)*.035)}M=X,it.quality==="auto"&&(p>23?(N++,z=0):p<16.9?(z++,N=0):(N=0,z=0),N>90&&E>0&&(E--,N=0),z>360&&E<2&&(E++,z=0));let $=it.quality==="auto"?I[E]:it.quality,ct=$==="low"?1:$==="medium"?1.2:Math.min(devicePixelRatio||1,1.5);ct!==R&&(t.setPixelRatio(ct),R=ct),(H!==v||V!==w)&&(t.setSize(H,V,!1),v=H,w=V),n.aspect=H/V,n.fov=K,n.updateProjectionMatrix(),n.position.fromArray(F.eye),n.lookAt(new Q(...F.target)),g.position.copy(n.position);let st=new Map;for(let mt of b){if(!mt.mesh.sourceIndices.length)continue;let et=L(mt.mesh,mt.tint),rt=mt.opacity??1,ht=et.uuid+":"+mt.shadow+":"+rt,qt=st.get(ht);qt||(qt={geometry:et,shadow:mt.shadow,opacity:rt,items:[]},st.set(ht,qt)),qt.items.push(mt)}for(let mt of c.values())mt.visible=!1;for(let[mt,et]of st){let rt=c.get(mt);if(!rt||rt.instanceMatrix.count<et.items.length){rt&&(e.remove(rt),rt.dispose());let ht=h.get(et.opacity);ht||(ht=new Ma({vertexColors:!0,gradientMap:o,transparent:et.opacity<1,opacity:et.opacity,depthWrite:et.opacity>=1}),h.set(et.opacity,ht)),rt=new ga(et.geometry,ht,Math.max(4,et.items.length+8)),rt.instanceMatrix.setUsage(Lh),rt.frustumCulled=!0,rt.receiveShadow=et.opacity>=1,e.add(rt),c.set(mt,rt)}rt.count=et.items.length,rt.castShadow=et.shadow&&$!=="low",rt.visible=!0;for(let ht=0;ht<et.items.length;ht++)u.fromArray(et.items[ht].m),rt.setMatrixAt(ht,u);rt.instanceMatrix.needsUpdate=!0,rt.computeBoundingSphere()}return t.shadowMap.enabled=$!=="low",t.render(e,n),{drawCalls:t.info.render.calls,triangles:t.info.render.triangles,effectiveQuality:$}}return{render:G,renderer:t,scene:e}}function yf(i,t){for(let e of i.querySelectorAll("#trackPicker [data-track]")){let n=t[e.dataset.track];if(!n||e.querySelector(".course-art"))continue;let s=i.createElement("img");s.className="course-art",s.alt="",s.setAttribute("aria-hidden","true"),s.draggable=!1,s.decoding="async",s.hidden=!0,s.width=512,s.height=256,s.onload=()=>{s.hidden=!1,e.dataset.art="ready"},s.onerror=()=>{s.remove(),delete e.dataset.art},e.prepend(s),s.src=n}}(()=>{"use strict";let i=document.getElementById("scene"),t=document.getElementById("error"),e=document.getElementById("loading");function n(c){t.hidden=!1,document.getElementById("error-text").textContent=c,e.classList.add("done")}let s=vf(i),r=!s,o=r?i.getContext("2d"):null;try{let c=function(a){let l=o,d=i.width,_=i.height;l.setTransform(1,0,0,1,0,0);let T=l.createLinearGradient(0,0,0,_);T.addColorStop(0,"#96c8ee"),T.addColorStop(.62,"#f2e6ee"),T.addColorStop(.63,"#cbd8c1"),T.addColorStop(1,"#bdcdb8"),l.fillStyle=T,l.fillRect(0,0,d,_);let A=a.eye,C=a.target,O=p(f(C,A)),B=p(R(O,[0,1,0])),Y=R(B,O),lt=_/(2*Math.tan(ks*Math.PI/360)),xt=_t=>{let vt=f(_t,A),Lt=w(vt,O);return Lt<.25?null:[d/2+w(vt,B)*lt/Lt,_/2-w(vt,Y)*lt/Lt,Lt,lt/Lt]},ft=(_t,vt)=>{let Lt=_t.map(xt);Lt.some(Vt=>!Vt)||(l.fillStyle=vt,l.beginPath(),Lt.forEach((Vt,Ut)=>Ut?l.lineTo(Vt[0],Vt[1]):l.moveTo(Vt[0],Vt[1])),l.closePath(),l.fill())},Mt=_t=>f(_t,a.origin),Tt=[];for(let _t=-40;_t<240;_t+=5){let vt=x.s+_t,Lt=Te(vt),Vt=Te(vt+5);Tt.push({d:_t,a:Lt,b:Vt})}for(let _t of Tt.reverse()){let vt=(Lt,Vt,Ut)=>Mt(g(g(Lt.p,v(Lt.R,Vt)),[0,Ut,0]));if(ft([vt(_t.a,-10,0),vt(_t.a,10,0),vt(_t.b,10,0),vt(_t.b,-10,0)],"#e3dce5"),ft([vt(_t.a,-7,.05),vt(_t.a,7,.05),vt(_t.b,7,.05),vt(_t.b,-7,.05)],"#7b829a"),Math.floor(_t.d/5)%2===0)for(let Lt of[-2.3,2.3])ft([vt(_t.a,Lt-.04,.06),vt(_t.a,Lt+.04,.06),vt(_t.b,Lt+.04,.06),vt(_t.b,Lt-.04,.06)],"#e9edf1");for(let Lt of[-1,1])ft([vt(_t.a,Lt*8.1,.4),vt(_t.a,Lt*8.1,.8),vt(_t.b,Lt*8.1,.8),vt(_t.b,Lt*8.1,.4)],"#c0cfe2")}let It=[];for(let _t=0;_t<210;_t+=20)for(let vt of[-1,1]){let Lt=Fe(Math.floor((x.s+_t)/20)*20,vt*12,0),Vt=xt(Mt(Lt));Vt&&It.push({q:Vt,side:vt,ds:_t,pos:Lt})}for(let _t of It.sort((vt,Lt)=>Lt.q[2]-vt.q[2])){let[vt,Lt,,Vt]=_t.q;l.fillStyle="#a78a95",l.fillRect(vt-Vt*.12,Lt-Vt*3.5,Vt*.24,Vt*3.5);for(let Ut=0;Ut<4;Ut++)l.fillStyle=Ut%2?"#ffdaeb":"#efbbd4",l.beginPath(),l.ellipse(vt+Math.sin(Ut*2)*Vt,Lt-Vt*(3.3+Ut*.3),Vt*1.6,Vt*1.1,0,0,h),l.fill();if(_t.ds%40===0){let Ut=xt(Mt(Fe(x.s+_t.ds,_t.side*20,0)));if(Ut){l.fillStyle="#f3e9dc",l.fillRect(Ut[0]-Ut[3]*3,Ut[1]-Ut[3]*5,Ut[3]*6,Ut[3]*5),l.fillStyle="#90a1c2",l.beginPath(),l.moveTo(Ut[0]-Ut[3]*3.5,Ut[1]-Ut[3]*5),l.lineTo(Ut[0],Ut[1]-Ut[3]*6.3),l.lineTo(Ut[0]+Ut[3]*3.5,Ut[1]-Ut[3]*5),l.fill(),l.fillStyle="#b1d9e5";for(let fe=0;fe<3;fe++)l.fillRect(Ut[0]+(fe-1.2)*Ut[3]*1.5,Ut[1]-Ut[3]*3.9,Ut[3],Ut[3]*1.2)}}}for(let _t of ps)if(_t.life>0){let vt=xt(Mt(_t.p));vt&&(l.fillStyle="#414957",l.fillRect(vt[0],vt[1],Math.max(1,vt[3]*.12),Math.max(2,vt[3]*_t.length)))}for(let _t of hn.values())for(let vt of _t.entities){if(Math.abs(S(vt.s,x.s))>170)continue;let Lt=xt(Mt(Fe(vt.s+(vt.ds||0),vt.l+(vt.dl||0),.2)));if(!Lt||vt.kind==="coin"&&vt.hitLap===Math.max(0,Math.floor(x.s/De)))continue;let[Vt,Ut,,fe]=Lt;if(vt.kind==="coin")l.fillStyle="#ffe2a0",l.beginPath(),l.ellipse(Vt,Ut-fe*.8,fe*.25,fe*.38,0,0,h),l.fill();else if(vt.kind==="pad"){let Tn=Te(vt.s),We=(wn,$e)=>Mt(Fe(vt.s+wn,vt.l+$e,.07));ft([We(-1.2,-1.5),We(1.2,-1.5),We(1.2,1.5),We(-1.2,1.5)],"#92e3e5")}else if(vt.kind==="ramp"){let Tn=(We,wn,$e)=>Mt(Fe(vt.s+We,vt.l+wn,$e));ft([Tn(-1.4,-1.5,.08),Tn(1.4,-1.5,.85),Tn(1.4,1.5,.85),Tn(-1.4,1.5,.08)],"#bfa9e3")}else vt.kind==="cone"?(l.fillStyle="#eebd92",l.beginPath(),l.moveTo(Vt,Ut-fe*.8),l.lineTo(Vt-fe*.35,Ut),l.lineTo(Vt+fe*.35,Ut),l.fill()):vt.kind==="barrier"&&(l.fillStyle="#edacbb",l.fillRect(Vt-fe,Ut-fe*.7,fe*2,fe*.7))}let _e=(_t,vt,Lt,Vt,Ut,fe=1)=>{let Tn=Te(_t),We=Fe(_t,vt,.05+Vt),wn=xt(Mt(We));if(!wn)return;l.globalAlpha=fe;let $e=($s,js,qi)=>Mt(g(We,g(v(Tn.T,$s*Math.cos(Lt)-qi*Math.sin(Lt)),g(v(Tn.R,$s*Math.sin(Lt)+qi*Math.cos(Lt)),[0,js,0]))));ft([$e(-1.6,.3,-.8),$e(1.6,.3,-.8),$e(1.6,.7,.8),$e(-1.6,.7,.8)],Ut),ft([$e(-1.6,.65,-.8),$e(1.6,.65,-.8),$e(1.6,.65,.8),$e(-1.6,.65,.8)],"#eef1f7");for(let $s of[-1,1])for(let js of[-.87,.87]){let qi=xt($e($s,.35,js));qi&&(l.fillStyle="#3c4357",l.beginPath(),l.ellipse(qi[0],qi[1],wn[3]*.24,wn[3]*.34,0,0,h),l.fill())}let Ss=xt($e(-.3,1.6,0));Ss&&(l.fillStyle="#f3d2be",l.beginPath(),l.arc(Ss[0],Ss[1],wn[3]*.33,0,h),l.fill(),l.fillStyle="#a9abe4",l.beginPath(),l.ellipse(Ss[0],Ss[1]-wn[3]*.18,wn[3]*.36,wn[3]*.2,0,Math.PI,h),l.fill()),l.globalAlpha=1};if(an.line&&ie==="running")for(let _t=8;_t>=0;_t--){let vt=x.s+12+_t*9,Lt=Te(vt),Vt=N(Lt.curv*80,-2.1,2.1),Ut=(fe,Tn)=>Mt(Fe(vt+fe,Vt+Tn,.09));ft([Ut(-.6,-.4),Ut(.3,0),Ut(-.6,.4),Ut(-.2,0)],Math.abs(Lt.curv)*x.speed>.95?"#f0b7c3":"#a5dbe6")}if(Ci&&Ei?.points?.length&&ie==="running"){let _t=Ei.points[ys];_t&&_e(_t[1],_t[2],_t[3],_t[4],"#b8e9e6",.35)}if(typeof Yn<"u")for(let _t of Yn)_e(_t.s,_t.l,_t.yaw||0,0,_t.color);if(typeof nt<"u"&&nt.room)for(let _t of nt.peers.values())_t.position&&_e(_t.position.s,_t.position.l,_t.position.yaw,_t.position.jump,"#eab5ce");if(x.mini>0||x.nitroTime>0||x.pad>0){let _t=Te(x.s),vt=xt(Mt(Fe(x.s-2,x.l,.4+x.jump)));vt&&(l.fillStyle=x.nitroTime>0?"#bcb2ff99":"#95edff99",l.beginPath(),l.ellipse(vt[0],vt[1],vt[3]*.7,vt[3]*.45,0,0,h),l.fill())}_e(x.s,x.l,x.yaw,x.jump,typeof en<"u"?en.paint:"#8ccde4")},I=function(a,l){let d=new Float32Array(16);for(let _=0;_<4;_++)for(let T=0;T<4;T++)d[_*4+T]=a[T]*l[_*4]+a[4+T]*l[_*4+1]+a[8+T]*l[_*4+2]+a[12+T]*l[_*4+3];return d},L=function(a,l,d){let _=E();return _[12]=a,_[13]=l,_[14]=d,_},G=function(a,l,d){let _=E();return _[0]=a,_[5]=l,_[10]=d,_},b=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([1,0,0,0,0,l,d,0,0,-d,l,0,0,0,0,1])},F=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,0,-d,0,0,1,0,0,d,0,l,0,0,0,0,1])},H=function(a){let l=Math.cos(a),d=Math.sin(a);return new Float32Array([l,d,0,0,-d,l,0,0,0,0,1,0,0,0,0,1])},V=function(a=[0,0,0],l=[1,1,1],d=[0,0,0]){return I(L(...a),I(F(d[1]),I(b(d[0]),I(H(d[2]),G(...l)))))},K=function(a,l){return[a[0]*l[0]+a[4]*l[1]+a[8]*l[2]+a[12],a[1]*l[0]+a[5]*l[1]+a[9]*l[2]+a[13],a[2]*l[0]+a[6]*l[1]+a[10]*l[2]+a[14]]},it=function(a){let l=[a[0],a[1],a[2]],d=[a[4],a[5],a[6]],_=[a[8],a[9],a[10]],T=R(d,_),A=R(_,l),C=R(l,d),O=w(l,T)||1;return new Float32Array([...v(T,1/O),...v(A,1/O),...v(C,1/O)])},X=function(a,l){return p([a[0]*l[0]+a[3]*l[1]+a[6]*l[2],a[1]*l[0]+a[4]*l[1]+a[7]*l[2],a[2]*l[0]+a[5]*l[1]+a[8]*l[2]])},$=function(a,l,d=[0,1,0]){let _=p(f(a,l)),T=p(R(d,_)),A=R(_,T);return new Float32Array([T[0],A[0],_[0],0,T[1],A[1],_[1],0,T[2],A[2],_[2],0,-w(T,a),-w(A,a),-w(_,a),1])},ct=function(a,l,d,_){let T=1/Math.tan(a/2),A=1/(d-_);return new Float32Array([T/l,0,0,0,0,T,0,0,0,0,(_+d)*A,-1,0,0,2*_*d*A,0])},st=function(a,l,d,_,T,A){return new Float32Array([2/(l-a),0,0,0,0,2/(_-d),0,0,0,0,-2/(A-T),0,-(l+a)/(l-a),-(_+d)/(_-d),-(A+T)/(A-T),1])},mt=function(a,l,d,_=d){let T=f(l,a),A=p(T),C=p(R(Math.abs(A[2])<.95?[0,0,1]:[1,0,0],A)),O=R(C,A),B=v(g(a,l),.5),Y=M(T);return new Float32Array([C[0]*d,C[1]*d,C[2]*d,0,A[0]*Y,A[1]*Y,A[2]*Y,0,O[0]*_,O[1]*_,O[2]*_,0,...B,1])},et=function(a){let l=parseInt(a.replace("#",""),16);return[l>>16&255,l>>8&255,l&255].map(d=>Math.pow(d/255,2.2))},ht=function(a,l,d){return{p:a,n:l,i:d}},qt=function(a=20,l=12){let d=[],_=[],T=[];for(let A=0;A<=l;A++){let C=A*u/l;for(let O=0;O<=a;O++){let B=O*h/a,Y=[Math.sin(C)*Math.cos(B),Math.cos(C),Math.sin(C)*Math.sin(B)];d.push(...Y),_.push(...Y)}}for(let A=0;A<l;A++)for(let C=0;C<a;C++){let O=A*(a+1)+C,B=O+a+1;T.push(O,O+1,B,O+1,B+1,B)}return ht(d,_,T)},Yt=function(a=16,l=1){let d=[],_=[],T=[];for(let A=0;A<2;A++)for(let C=0;C<=a;C++){let O=C*h/a,B=A?l:1,Y=p([Math.cos(O),1-l,Math.sin(O)]);d.push(B*Math.cos(O),A-.5,B*Math.sin(O)),_.push(...Y)}for(let A=0;A<a;A++){let C=A,O=A+a+1;T.push(C,O,C+1,C+1,O,O+1)}for(let A=0;A<2;A++){let C=d.length/3,O=A-.5,B=A?l:1;d.push(0,O,0),_.push(0,A?1:-1,0);for(let Y=0;Y<=a;Y++){let lt=Y*h/a;d.push(B*Math.cos(lt),O,B*Math.sin(lt)),_.push(0,A?1:-1,0)}for(let Y=0;Y<a;Y++)T.push(C,C+Y+(A?2:1),C+Y+(A?1:2))}return ht(d,_,T)},Pe=function(a,l,d=48,_=10,T=0,A=h){let C=[],O=[],B=[];for(let Y=0;Y<=d;Y++){let lt=T+A*Y/d;for(let xt=0;xt<=_;xt++){let ft=xt*h/_,Mt=Math.cos(ft),Tt=Math.sin(ft);C.push((a+l*Mt)*Math.cos(lt),(a+l*Mt)*Math.sin(lt),l*Tt),O.push(Mt*Math.cos(lt),Mt*Math.sin(lt),Tt)}}for(let Y=0;Y<d;Y++)for(let lt=0;lt<_;lt++){let xt=Y*(_+1)+lt,ft=xt+_+1;B.push(xt,ft,xt+1,ft,ft+1,xt+1)}return ht(C,O,B)},Se=function(a,l,d,_=.07){let T=[a,l,d,_].join(",");if(ye.has(T))return ye.get(T);_=Math.min(_,a/2*.95,l/2*.95,d/2*.95);let A=[],C=[],O=[],B=[a/2,l/2,d/2],Y=[[[0,0,d/2],[1,0,0],[0,1,0],a,l],[[0,0,-d/2],[-1,0,0],[0,1,0],a,l],[[a/2,0,0],[0,0,-1],[0,1,0],d,l],[[-a/2,0,0],[0,0,1],[0,1,0],d,l],[[0,l/2,0],[1,0,0],[0,0,-1],a,d],[[0,-l/2,0],[1,0,0],[0,0,1],a,d]];for(let[xt,ft,Mt,Tt,It]of Y){let _e=Vt=>[-Vt/2,-Vt/2+_*.28,-Vt/2+_,Vt/2-_,Vt/2-_*.28,Vt/2],_t=_e(Tt),vt=_e(It),Lt=A.length/3;for(let Vt of vt)for(let Ut of _t){let fe=g(xt,g(v(ft,Ut),v(Mt,Vt))),Tn=fe.map((wn,$e)=>N(wn,-B[$e]+_,B[$e]-_)),We=p(f(fe,Tn));A.push(...g(Tn,v(We,_))),C.push(...We)}for(let Vt=0;Vt<5;Vt++)for(let Ut=0;Ut<5;Ut++){let fe=Lt+Vt*6+Ut;O.push(fe,fe+1,fe+6,fe+1,fe+7,fe+6)}}let lt=ht(A,C,O);return ye.set(T,lt),lt},dt=function(a,l=.04,d=8){let _=[],T=[],A=[];for(let C=0;C<a.length;C++){let O=p(f(a[Math.min(C+1,a.length-1)],a[Math.max(C-1,0)])),B=p(R(O,Math.abs(O[1])<.9?[0,1,0]:[0,0,1])),Y=R(O,B);for(let lt=0;lt<=d;lt++){let xt=lt*h/d,ft=g(v(B,Math.cos(xt)),v(Y,Math.sin(xt)));_.push(...g(a[C],v(ft,l))),T.push(...ft)}}for(let C=0;C<a.length-1;C++)for(let O=0;O<d;O++){let B=C*(d+1)+O,Y=B+d+1;A.push(B,B+1,Y,B+1,Y+1,Y)}return ht(_,T,A)},yt=function(a,l,d,_){let T=[],A=[],C=[];for(let B=0;B<=144;B++){let Y=B*h/144;for(let lt of[-1,1])T.push((a+lt*d)*Math.cos(Y),_,(l+lt*d)*Math.sin(Y)),A.push(0,1,0)}for(let B=0;B<144;B++){let Y=B*2;C.push(Y,Y+2,Y+1,Y+1,Y+2,Y+3)}return ht(T,A,C)},ne=function(a,l,d,_=rt.green,T=!1,A=.13){a.add(T?oe:Gt,V(l,d),_,A)},P=function(a,l,d,_,T=.06,A=[0,0,0],C=.12){a.add(Se(...d,T),V(l,[1,1,1],A),_,C)},Qt=function(a,l,d,_,T,A=.2,C=!1){a.add(ge,mt(l,d,_),T,A),C&&(ne(a,l,[_,_,_],T,!0,A),ne(a,d,[_,_,_],T,!0,A))},be=function(a,l,d,_,T=[0,0,0],A=!1){a.add(A?ve:Ke,V(l,d,T),_)},D=function(a,l,d,_,T=.15){a.add(dt(l,d),ce,_,T)},y=function(a,l,d,_=100){return Array.from({length:_+1},(T,A)=>[a*Math.cos(A*h/_),d,l*Math.sin(A*h/_)])},tt=function(){return q=q*1664525+1013904223>>>0,q/4294967296},Lr=function(a,l,d){let _=-d*Math.min(.09,x.speed*.003),T=Math.sin(a*18)*Math.min(.012,x.speed*5e-4);te.local=V([0,T,0],[1,1,1],[_,0,0]),W.local=V([-.31,1.57+T,0],[1,1,1],[-_*.5,-d*.13,0]);for(let A of wt)A.n.local=I(L(A.x,.41,A.z),I(F(A.front?-(x.drifting?d*.12-bn(x.yaw-x.velocityYaw)*.62:d*.26):0),H(gc)));for(let A of pt){let C=x.boostActive?1.25+.17*Math.sin(a*38+A.side):x.pad>0?1+.12*Math.sin(a*36):x.mini>0?.65+.12*Math.sin(a*42+A.side):.001;A.n.local=V([-1.9,.43,A.side*.34],[C,Math.max(.01,C),Math.max(.01,C)])}},tn=function(){return Gn[Qe]},Oi=function(){return De*tn().laps},Dr=function(a){let l=tn().points,d=l.length,_=(a%d+d)%d,T=Math.floor(_),A=_-T,C=l[(T+d-1)%d],O=l[T],B=l[(T+1)%d],Y=l[(T+2)%d];return O.map((lt,xt)=>.5*(2*lt+(-C[xt]+B[xt])*A+(2*C[xt]-5*lt+4*B[xt]-Y[xt])*A*A+(-C[xt]+3*lt-3*B[xt]+Y[xt])*A*A*A))},Wa=function(){us=Qe,sn=[],De=0;let a=tn().points.length*120;for(let _=0;_<=a;_++){let T=_*tn().points.length/a,A=Dr(T);_&&(De+=M(f(A,sn[_-1].p)));let C=f(Dr(T+1e-4),Dr(T-1e-4));sn.push({s:De,p:A,h:Math.atan2(C[2],C[0])})}let l=sn.map(_=>_.p[0]),d=sn.map(_=>_.p[2]);Fs={minX:Math.min(...l),maxX:Math.max(...l),minZ:Math.min(...d),maxZ:Math.max(...d)}},Os=function(a){let l=(a%De+De)%De,d=0,_=sn.length-1;for(;d+1<_;){let Y=d+_>>1;sn[Y].s<=l?d=Y:_=Y}let T=sn[d],A=sn[_],C=(l-T.s)/(A.s-T.s||1),O=Math.atan2(Math.sin(A.h-T.h),Math.cos(A.h-T.h)),B=T.h+O*C;return{p:T.p.map((Y,lt)=>z(Y,A.p[lt],C)),h:B,T:[Math.cos(B),0,Math.sin(B)],R:[-Math.sin(B),0,Math.cos(B)],curv:O/(A.s-T.s),slope:(A.p[1]-T.p[1])/(A.s-T.s)}},S=function(a,l){let d=a-l;return ee==="circuit"&&(d-=Math.round(d/De)*De),d},k=function(){return di+(x.timePenalty||0)},j=function(a){let l=Math.floor(a/60),d=a-l*60;return String(l).padStart(2,"0")+":"+d.toFixed(2).padStart(5,"0")},J=function(a,l){if(ee!=="circuit")return!0;let d=g(Os(a).p,v(Os(a).R,l));for(let _=0;_<sn.length;_+=20){let T=sn[_];if(Math.abs(S(T.s,a))>35&&Math.hypot(T.p[0]-d[0],T.p[2]-d[2])<15)return!1}return!0},me=function(){return[[Math.cos(x.yaw),Math.sin(x.yaw)],[-Math.sin(x.yaw),Math.cos(x.yaw)]]},Xt=function(a){let l=me(),d=a.angle||0,_=[[Math.cos(d),Math.sin(d)],[-Math.sin(d),Math.cos(d)]],T=[S(x.s,a.s+(a.ds||0)),x.l-a.l-(a.dl||0)],A=a.kind==="cone"?[.39,.39]:[.35,1.1],C=1/0,O=null;for(let B of[l[0],l[1],_[0],_[1]]){let Y=Math.abs(zt(l[0],B))*Bt+Math.abs(zt(l[1],B))*Rt,lt=Math.abs(zt(_[0],B))*A[0]+Math.abs(zt(_[1],B))*A[1],xt=Y+lt-Math.abs(zt(T,B));if(xt<=0)return null;if(xt<C){C=xt;let ft=zt(T,B)>=0?1:-1;O=B.map(Mt=>Mt*ft)}}return{normal:O,pen:C}},Ne=function(a,l,d=null){let _=1/Z,T=1/Dt,A=d?d.kind==="cone"?9:85:1/0,C=d?1/A:0,O=d?[S(x.s+l[0],d.s+(d.ds||0)),x.l+l[1]-d.l-(d.dl||0)]:[0,0],B=d?1/(A*(d.kind==="cone"?.09:.48)):0,Y=[x.vS-x.spin*l[1],x.vL+x.spin*l[0]],lt=d?[(d.vS||0)-(d.omega||0)*O[1],(d.vL||0)+(d.omega||0)*O[0]]:[0,0],xt=[Y[0]-lt[0],Y[1]-lt[1]],ft=zt(xt,a);if(ft>=0)return 0;let Mt=he(l,a),Tt=he(O,a),It=d?.13:.035,_e=-(1+It)*ft/(_+C+Mt*Mt*T+Tt*Tt*B);x.vS+=a[0]*_e*_,x.vL+=a[1]*_e*_,x.spin=N(x.spin+Mt*_e*T,-2.3,2.3);let _t=[-a[1],a[0]],vt=he(l,_t),Lt=he(O,_t),Vt=zt(xt,_t),Ut=d?.22:.1,fe=N(-Vt/(_+C+vt*vt*T+Lt*Lt*B),-Ut*_e,Ut*_e);return x.vS+=_t[0]*fe*_,x.vL+=_t[1]*fe*_,x.spin=N(x.spin+vt*fe*T,-2.3,2.3),d&&(d.vS=(d.vS||0)-(a[0]*_e+_t[0]*fe)*C,d.vL=(d.vL||0)-(a[1]*_e+_t[1]*fe)*C,d.omega=N((d.omega||0)-(Tt*_e+Lt*fe)*B,-7,7),d.kind==="cone"&&(d.tilt=Math.min(1.35,(d.tilt||0)+Math.abs(_e)*C*.015))),Math.abs(ft)},Je=function(a,l){a<.7||x.contactSound>0||(x.contactSound=.16,cu(Fe(x.s,x.l,.45),Math.min(14,Math.ceil(a)),[0,1,0]),Af(l,a),a>5&&(Or=Math.min(.25,a*.012),x.driftCharge*=.5))},He=function(a){x.contactSound=Math.max(0,x.contactSound-a);for(let l of hn.values())for(let d of l.entities)(d.kind==="cone"||d.kind==="barrier")&&(d.vS=(d.vS||0)*Math.exp(-a*2.4),d.vL=(d.vL||0)*Math.exp(-a*2.4),d.ds=N((d.ds||0)+d.vS*a,-18,18),d.dl=N((d.dl||0)+d.vL*a,-7.4-d.l,7.4-d.l),d.angle=(d.angle||0)+(d.omega||0)*a,d.omega=(d.omega||0)*Math.exp(-a*2));for(let l=0;l<3;l++){let d=me(),_=Math.abs(d[0][1])*Bt+Math.abs(d[1][1])*Rt,T=Wt-_;if(Math.abs(x.l)>T){let A=Math.sign(x.l),C=[0,-A];x.l=A*(T-.015);let O=[A*(Math.sign(d[0][1])*Bt*d[0][0]+Math.sign(d[1][1])*Rt*d[1][0]),A*_],B=Ne(C,O);Je(B,"rail"),B>4&&(Ya(!1),x.turnRate*=.4,to=!1)}if(!(x.jump>.85))for(let A of hn.values())for(let C of A.entities){if(C.kind!=="cone"&&C.kind!=="barrier"||Math.abs(S(C.s+(C.ds||0),x.s))>4.5||Math.abs(C.l+(C.dl||0)-x.l)>4)continue;let O=Xt(C);if(!O)continue;let B=C.kind==="cone"?9:85,Y=B/(B+Z),lt=Math.max(0,O.pen-.008)*.82;x.s+=O.normal[0]*lt*Y,x.l+=O.normal[1]*lt*Y,C.ds=(C.ds||0)-O.normal[0]*lt*(1-Y),C.dl=(C.dl||0)-O.normal[1]*lt*(1-Y);let xt=me(),ft=[S(C.s+(C.ds||0),x.s),C.l+(C.dl||0)-x.l],Mt=N(zt(ft,xt[0]),-Bt,Bt),Tt=N(zt(ft,xt[1]),-Rt,Rt),It=[xt[0][0]*Mt+xt[1][0]*Tt,xt[0][1]*Mt+xt[1][1]*Tt],_e=Ne(O.normal,It,C);Je(_e,C.kind)}}x.speed=Math.hypot(x.vS,x.vL),x.velocityYaw=Math.atan2(x.vL,x.vS),x.lateralSpeed=x.vL},rn=function(a,l){if(!Ue.has(a)){let d=new le;l(d),Ue.set(a,d.finish())}return Ue.get(a)},Ot=function(a,l,d,_,T="#627596"){let A=[-l/2,_,-d/2],C=[l/2,_,-d/2],O=[l/2,_,d/2],B=[-l/2,_,d/2],Y=[-l/2,_+1.3,0],lt=[l/2,_+1.3,0];jn(a,A,C,lt,Y,T),jn(a,Y,lt,O,B,T),jn(a,A,Y,B,B,"#e9e1d2"),jn(a,C,O,lt,lt,"#e9e1d2");for(let xt=0;xt<9;xt++){let ft=-l/2+xt*l/8;D(a,[[ft,_,-d/2],[ft,_+1.3,0],[ft,_,d/2]],.025,"#8797b0")}Qt(a,[-l/2-.15,_+1.33,0],[l/2+.15,_+1.33,0],.08,T)},dn=function(a,l=0){let d=["#fff0db","#e9eafa","#f9dbe2","#e0f1ec"][l%4],_=["#7190b6","#9a82b3","#be8f98","#6c9a9a"][l%4];P(a,[0,2.65,0],[6,5.3,4.8],d,.08),P(a,[0,.12,0],[6.4,.24,5.1],"#b9b7c5",.035),Ot(a,6.7,5.8,5.3,_);for(let T of[-1,1])for(let A of[-1.9,0,1.9])for(let C of[1.4,3.85])P(a,[A,C,T*2.425],[1.2,1.35,.055],_,.025),P(a,[A,C,T*2.46],[1.05,1.18,.03],"#b8dfe8",.01,[0,0,0],.45),Qt(a,[A,C-.58,T*2.49],[A,C+.58,T*2.49],.025,"#f4f7fa"),P(a,[A,C-.72,T*2.55],[1.35,.12,.28],_,.015);P(a,[0,1.03,2.5],[1.04,2.05,.1],"#798c9c",.025),P(a,[.34,1.03,2.57],[.05,.12,.04],"#f7d5a4",.01);for(let T of[-1,1])P(a,[T*2.65,.48,2.9],[.65,.9,.7],"#b9c9b0",.035),ne(a,[T*2.65,1.14,2.9],[.6,.55,.5],"#88ba9a",!0)},Ee=function(a,l=0){let d=["#ef9ba5","#88bfc9","#a6a0d5"][l%3];P(a,[0,2,0],[7,4,4.8],"#fff1dd",.06),Ot(a,7.7,5.8,4,"#6f7d98");for(let _ of[-2.05,0,2.05])P(a,[_,1.4,2.45],[1.8,2.15,.06],"#88afb9",.02),P(a,[_,1.45,2.5],[1.54,1.92,.025],"#c2e4e8",.015),P(a,[_,1.45,2.54],[.045,1.92,.02],"#edf6ee",.005);P(a,[0,3.03,2.65],[7.4,.7,.55],d,.035);for(let _=0;_<12;_++)P(a,[-3.35+_*.61,2.62,2.95],[.59,.24,1.15],_%2?"#fff6e3":d,.025,[.12,0,0]);for(let _ of[-1,1])Qt(a,[_*3.3,0,3.35],[_*3.3,2.6,3.35],.055,d);for(let _ of[-1.9,0,1.9])P(a,[_,3.04,2.96],[.45,.34,.025],"#fff6e6",.02),P(a,[_+.28,3.04,2.97],[.065,.22,.02],"#fff6e6",.01);for(let _ of[-2.6,2.7]){P(a,[_,.35,3.35],[.75,.7,.65],"#cda883",.035);for(let T of[-.14,.14])P(a,[_,.52,3.35+T],[.6,.035,.035],"#ecd3a5",.005)}P(a,[1.4,.72,3.5],[.6,1.3,.12],"#7e8f9c",.03,[.08,0,0]);for(let _=0;_<4;_++)P(a,[1.4,.38+_*.2,3.58],[.38,.025,.025],"#e9f1e8",.005)},Rn=function(a,l=0){let d="#997786",_=["#f8c6dc","#f6b8d5","#ffdfeb"];Qt(a,[0,0,0],[l?.35:-.25,3.4,0],.18,d),Qt(a,[0,1.9,0],[-1.55,3.55,.2],.11,d),Qt(a,[.1,2.2,0],[1.55,3.8,-.25],.1,d);let A=[[-1.4,3.9,.1,1.5],[0,4.6,0,1.8],[1.6,4.05,-.2,1.5],[-.4,4,1.35,1.45],[.4,4.1,-1.3,1.5]];for(let C=0;C<A.length;C++){let[O,B,Y,lt]=A[C];ne(a,[O,B,Y],[lt,lt*.7,lt*.86],_[(C+l)%3],!0,.02),ne(a,[O+.2,B+.6,Y+.15],[lt*.6,lt*.28,lt*.52],"#ffe8f1",!0,.01)}for(let C=0;C<12;C++){let O=C*2.399,B=.6+C%4*.38;P(a,[Math.cos(O)*B,.045,Math.sin(O)*B],[.12,.015,.065],_[C%3],.012,[0,O,0])}},Hn=function(a){Qt(a,[0,0,0],[0,4.2,0],.14,"#9c8c84");for(let l=0;l<3;l++)ne(a,[(l-1)*.45,2.7+l*.82,0],[1.9-l*.35,.78,1.25-l*.16],["#7cb5aa","#8fc9b5","#a6d7ba"][l],!0,.02)},li=function(a){P(a,[0,.1,0],[.55,.2,.55],"#9da8b9",.025),Qt(a,[0,.15,0],[0,5.6,0],.065,"#7e8da8"),D(a,[[0,5.4,0],[0,5.8,.3],[0,5.8,1.3],[0,5.5,1.55]],.055,"#7e8da8"),P(a,[0,5.46,1.55],[.65,.16,.9],"#e5edee",.05),P(a,[0,5.36,1.55],[.5,.025,.72],"#fff0b3",.025,[0,0,0],.1)},Bi=function(a){for(let l of[-4,4])Qt(a,[l,0,0],[l*.94,6.3,0],.29,"#d98085"),Qt(a,[l,0,0],[l,.75,0],.31,"#66728c"),Qt(a,[l*.95,4.65,0],[l*.95,6.65,0],.32,"#dc8d91");P(a,[0,5,0],[9.8,.36,.48],"#d68183",.06),D(a,[[-5.65,6.55,0],[-4.5,6.3,0],[0,6.2,0],[4.5,6.3,0],[5.65,6.55,0]],.25,"#6d7089"),Qt(a,[0,5,0],[0,6.15,0],.13,"#d68183"),P(a,[0,5.65,.31],[.9,1.12,.15],"#55677e",.02),P(a,[0,5.65,.4],[.5,.69,.025],"#edcf9d",.01)},Oe=function(a){P(a,[0,.25,0],[13,.5,6.8],"#c6c4ce",.04);for(let l of[-5,0,5])for(let d of[-2.2,2.2])Qt(a,[l,.5,d],[l,4.1,d],.1,"#8fa2ad");Ot(a,14,7.8,4.1,"#73849c");for(let l=0;l<12;l++)P(a,[-5.8+l*1.05,.53,3],[.8,.025,.2],"#f6dfa0",.008);P(a,[0,3.2,2.6],[4,.9,.22],"#eef5ed",.04),P(a,[-1.55,3.2,2.75],[.45,.45,.04],"#8ec9c5",.03);for(let l=0;l<6;l++)P(a,[-.8+l*.45,3.2,2.75],[.19,.24,.03],"#8294a8",.01);for(let l of[-3.5,3.5]){P(a,[l,1.02,0],[2.7,.15,.65],"#c2a38c",.02);for(let d of[-.95,.95])Qt(a,[l+d,.5,0],[l+d,.95,0],.06,"#8c91a3")}},Ze=function(a){for(let l of[-1.16,1.16])P(a,[0,.05,l],[20,.1,.09],"#81929f",.015);for(let l=0;l<20;l++)P(a,[-9.5+l,.005,0],[.23,.07,3.4],"#bea58d",.015);P(a,[0,1.65,0],[13,2.7,3],"#edf5dc",.25),P(a,[0,1.25,0],[13.15,.38,3.06],"#83bcb6",.04),P(a,[0,3.08,0],[12.5,.25,3.1],"#b3bfc6",.12);for(let l of[-1,1]){for(let d=0;d<7;d++){let _=-5.2+d*1.73;P(a,[_,2,l*1.52],[1.35,1.05,.06],"#769ba8",.04),P(a,[_,2.1,l*1.56],[1.16,.8,.025],"#bbdfe6",.03)}for(let d of[-4.3,4.3])ne(a,[d,.45,l*1.16],[.49,.49,.13],"#596980",!0),P(a,[d,.48,l*1.31],[.19,.19,.03],"#bfccd1",.03)}for(let l of[-6.55,6.55]){P(a,[l,2.1,0],[.06,1.05,2.1],"#acd2dd",.05);for(let d of[-.9,.9])ne(a,[l,1.25,d],[.05,.13,.13],"#fff4ba",!0)}D(a,[[-1.5,3.25,0],[0,4.3,0],[1.5,3.25,0]],.055,"#718699"),Qt(a,[-.65,4.3,0],[.65,4.3,0],.07,"#718699")},ci=function(a){P(a,[0,4.8,0],[24,9.6,7],"#f4eedf",.06),Ot(a,25.2,8.2,9.6,"#8095ad"),P(a,[0,6.1,3.7],[4.8,12.2,2],"#e6eaf0",.06),Ot(a,5.4,3.1,12.2,"#879bb4");for(let l of[-10,-7,-4,4,7,10])for(let d of[2,4.8,7.6])P(a,[l,d,3.56],[1.9,1.65,.06],"#8da6b8",.025),P(a,[l,d,3.61],[1.64,1.41,.025],"#c7e9eb",.015),P(a,[l,d,3.65],[.045,1.41,.025],"#f6f5ed",.005);P(a,[0,1.5,4.75],[3.2,2.8,.06],"#9cbdcd",.025);for(let l of[-.75,.75])P(a,[l,1.5,4.81],[.035,2.7,.025],"#f7eee4",.005);ne(a,[0,10.2,4.77],[.9,.9,.06],"#fff7df",!0,.02),a.add(Pe(.89,.045,28,7),L(0,10.2,4.84),"#7f91a8",.08),Qt(a,[0,10.2,4.91],[0,10.8,4.91],.03,"#697e98"),Qt(a,[0,10.2,4.92],[.43,10.4,4.92],.03,"#697e98"),P(a,[0,-.02,7.5],[23,.1,12],"#e2e1db",.03);for(let l of[-5.5,5.5])P(a,[l,1.5,12.1],[.8,3,.8],"#e8dbc7",.04),P(a,[l,3.06,12.1],[1,.2,1],"#a1acb9",.025);for(let l of[-1,1])for(let d=0;d<8;d++){let _=l*(6.4+d*.65);Qt(a,[_,0,12],[_,1.8,12],.025,"#9cacc0")}for(let l of[-1,1])Qt(a,[l*6,1.65,12],[l*11.5,1.65,12],.035,"#9cacc0")},Ve=function(a){P(a,[0,1.25,0],[1.2,2.5,.82],"#f3a4ad",.09),P(a,[-.13,1.55,.43],[.82,1.35,.05],"#b6e0e9",.03);for(let l=0;l<3;l++)for(let d=0;d<3;d++)P(a,[-.4+d*.27,1.12+l*.4,.48],[.13,.23,.06],["#f9e2ad","#a3d2cc","#d3c5ec"][d],.025),P(a,[-.4+d*.27,.94+l*.4,.49],[.1,.04,.02],"#fff0c7",.005);P(a,[0,.47,.44],[.75,.24,.055],"#738698",.03),P(a,[.43,1.3,.45],[.13,.18,.04],"#fff0b8",.02)},hi=function(a){Qt(a,[0,0,0],[0,2.6,0],.08,"#8c7e8a"),P(a,[0,2.55,0],[.55,.16,.55],"#877d92",.025),P(a,[0,2.22,0],[.41,.52,.41],"#ffe4ad",.04),P(a,[0,1.93,0],[.52,.12,.52],"#a19caa",.025);for(let l of[-.2,.2])for(let d of[-.2,.2])Qt(a,[l,1.98,d],[l,2.49,d],.018,"#927f8d")},zi=function(a,l){let d=l==="left"?-1:1;Qt(a,[0,0,0],[0,2.4,0],.055,"#8499b0"),P(a,[0,2.28,0],[2.9,.78,.18],"#f3eacb",.04);for(let _=0;_<3;_++){let T=-.86+_*.86;Qt(a,[T-d*.25,2.02,.12],[T+d*.15,2.28,.12],.055,"#bd8faf"),Qt(a,[T+d*.15,2.28,.12],[T-d*.25,2.54,.12],.055,"#bd8faf")}},Xa=function(a){return rn(a,l=>{a.startsWith("house")?dn(l,Number(a.slice(-1))):a.startsWith("shop")?Ee(l,Number(a.slice(-1))):a.startsWith("cherry")?Rn(l,Number(a.slice(-1))):a==="pine"?Hn(l):a==="lamp"?li(l):a==="torii"?Bi(l):a==="station"?Oe(l):a==="tram"?Ze(l):a==="vending"?Ve(l):a==="school"?ci(l):a==="lantern"?hi(l):(a==="left"||a==="right")&&zi(l,a)})},Mf=function(a){let l=(a%De+De)%De/De,d=tn().sectors,_=d[0];for(let T of d)l>=T.at&&(_=T);return _},Sf=function(a,l,d){let _=new de,T=a*40,A=(B,Y,lt,xt=1,ft=0)=>{if(ee==="circuit"&&Y>=De||!J(Y,lt))return null;let Mt=Te(Y),Tt=Fe(Y,lt,-.05),It=-Mt.h+(lt>0?u:0)+ft,_e=new de(Xa(B),V(f(Tt,l),[xt,xt,xt],[0,It,0]));return _.add(_e),_e},C=ee==="circuit"&&tn().biome===1;for(let B of[-1,1]){A("lamp",T+7,B*9.65);for(let Y=0;Y<2;Y++)A("cherry"+(a+Y)%2,T+10+Y*20,B*(C?11.3:12.5),C?1.12:.92);(a%2===0||C)&&a%3!==1&&!(a===2&&B<0)&&!(C&&a===0&&B>0)&&A("house"+(a+(B>0?1:0))%4,T+19,B*(16.5+d()*2),.9+d()*.25),a%3===1&&!(a===2&&B<0)&&A("shop"+a%3,T+18,B*17.5),a%5===0&&A("vending",T+9,B*10.1),a%3===0&&A("pine",T+32,B*22,1.5)}let O=bn(Te(T+37).h-Te(T+7).h);if(Math.abs(O)>.25&&A(O>0?"right":"left",T+5,(O>0?-1:1)*9.4,1,O>0?-u/2:u/2),ee==="circuit"){let B=(T+20)/De;if(C&&a===0&&A("school",T+21,28),a===2&&(A("station",T+17,-20,1),A("tram",T+17,-27,1),A("vending",T+9,-12.8)),B>.66&&B<.74&&a%2===0){A("torii",T+22,-16);for(let Y of[-1,1])A("lantern",T+9,Y*10)}}return _},Tf=function(){ui&&ui.mesh.dispose(),ui&&(ui.mesh.dispose(),ui=null);let a=new le,l=Fs,d=[(l.minX+l.maxX)*.5,0,(l.minZ+l.maxZ)*.5],_=l.maxX-l.minX,T=l.maxZ-l.minZ;if(tn().biome===0)for(let[C,O,B,Y]of[[_*.82,T*.89,-.43,"#eadfce"],[_*.78,T*.85,-.3,"#c7d9b4"]]){let lt=[d[0],B,d[2]],xt=[0,1,0],ft=[];for(let Mt=0;Mt<=96;Mt++){let Tt=Mt*h/96,It=1+.025*Math.sin(Tt*5);lt.push(d[0]+Math.cos(Tt)*C*It,B,d[2]+Math.sin(Tt)*O*It),xt.push(0,1,0),Mt&&ft.push(0,Mt,Mt+1)}a.add(ht(lt,xt,ft),ce,Y,.02)}for(let C=0;C<12;C++){let O=C*h/12,B=320+C%3*36,Y=d[0]+Math.cos(O)*B,lt=d[2]+Math.sin(O)*B,xt=40+C%4*18;be(a,[Y,xt*.5-5,lt],[70,xt,60],["#b5c4de","#a6bfd8","#c6cfdf"][C%3],[0,O,0],!0),C%3===0&&be(a,[Y,xt*.85-5,lt],[25,xt*.3,22],"#e5e5f0",[0,O,0],!0)}for(let C=0;C<10;C++){let O=C*h/10,B=[d[0]+Math.cos(O)*260,57+C%3*14,d[2]+Math.sin(O)*250];for(let Y=0;Y<4;Y++)ne(a,g(B,[(Y-1.5)*12,Math.sin(Y*2)*4,0]),[17,7+Y%2*3,10],"#fff5f3",!0,.01)}ui=new de(a.finish()),ui.shadow=!1,tu=Qe,cc=Array.from({length:24},(C,O)=>({phase:O*2.399,node:new de(bf)}));for(let C of cc)C.node.shadow=!1},wf=function(a,l){if(ee!=="circuit")return;(tu!==Qe||!ui)&&Tf(),ui.local=L(-a[0],-a[1],-a[2]),Le.add(ui);let d=Te(x.s);for(let _ of cc){let T=_.phase,A=(T*13+l*1.7)%55-10,C=Math.sin(T*7)*10+Math.sin(l*.6+T)*2,O=1+((T*2-l*.65)%7+7)%7,B=g(Fe(x.s+A,C,O),[Math.sin(l+T)*.25,0,0]);_.node.local=V(f(B,a),[1,1,1],[l*.8+T,T,l]),Le.add(_.node)}},qa=function(){if(!ze)try{let xt=function(It,_e){let _t=a.createBufferSource(),vt=a.createBiquadFilter(),Lt=a.createGain();return _t.buffer=Y,_t.loop=!0,vt.type=It,vt.frequency.value=_e,Lt.gain.value=0,_t.connect(vt),vt.connect(Lt),Lt.connect(l),_t.start(),{source:_t,filter:vt,gain:Lt}},a=new(window.AudioContext||window.webkitAudioContext),l=a.createGain(),d=a.createDynamicsCompressor();l.gain.value=Wn?.48:0,l.connect(d),d.threshold.value=-18,d.ratio.value=4,d.connect(a.destination);let _=a.createGain(),T=a.createBiquadFilter();T.type="lowpass",T.frequency.value=1e3,_.gain.value=0,T.connect(_),_.connect(l);let A=a.createOscillator(),C=a.createOscillator(),O=a.createOscillator(),B=a.createGain();A.type="sawtooth",C.type="triangle",O.type="sine",C.detune.value=9,B.gain.value=.6;for(let It of[A,C])It.connect(T),It.start();O.connect(B),B.connect(T),O.start();let Y=a.createBuffer(1,a.sampleRate*2,a.sampleRate),lt=Y.getChannelData(0);for(let It=0;It<lt.length;It++)lt[It]=Math.random()*2-1;let ft=xt("lowpass",1100),Mt=xt("bandpass",1800),Tt=xt("highpass",2200);Mt.filter.Q.value=3.5,ze={ctx:a,master:l,engine1:A,engine2:C,sub:O,engineGain:_,engineFilter:T,noise:Y,wind:ft,tire:Mt,turbo:Tt,oldSpeed:0,oldBoost:!1,gear:0}}catch{}},ki=function(a=620,l=.1){if(!Wn||!ze)return;let{ctx:d,master:_}=ze,T=d.createOscillator(),A=d.createGain();T.type="sine",T.frequency.setValueAtTime(a,d.currentTime),T.frequency.exponentialRampToValueAtTime(a*1.28,d.currentTime+l),A.gain.setValueAtTime(.07,d.currentTime),A.gain.exponentialRampToValueAtTime(.001,d.currentTime+l),T.connect(A),A.connect(_),T.start(),T.stop(d.currentTime+l+.02)},Af=function(a,l){if(!Wn||!ze)return;let{ctx:d,master:_,noise:T}=ze,A=d.createBufferSource(),C=d.createBiquadFilter(),O=d.createGain(),B=d.currentTime;if(A.buffer=T,C.type="bandpass",C.frequency.value=a==="rail"?1400:a==="cone"?450:700,C.Q.value=a==="rail"?1.5:.6,O.gain.setValueAtTime(Math.min(.3,.035+l*.018),B),O.gain.exponentialRampToValueAtTime(.001,B+.16),A.connect(C),C.connect(O),O.connect(_),A.start(),A.stop(B+.2),a==="rail"){let Y=d.createOscillator(),lt=d.createGain();Y.type="triangle",Y.frequency.setValueAtTime(330,B),Y.frequency.exponentialRampToValueAtTime(140,B+.15),lt.gain.setValueAtTime(.07,B),lt.gain.exponentialRampToValueAtTime(.001,B+.2),Y.connect(lt),lt.connect(_),Y.start(),Y.stop(B+.21)}},Ef=function(){if(!ze)return;let a=ze,l=a.ctx.currentTime,d=ie==="running",_=x.speed,T=Math.min(5,Math.floor(_/9)),A=48+_*2.2+_%9*5;a.master.gain.setTargetAtTime(Wn?.48*Pn.sfxVolume:0,l,.05);let C=d?.012+Math.min(.04,_*7e-4)+(Ie.gas?.013:0):0;a.engineGain.gain.setTargetAtTime(C,l,.07),a.engineFilter.frequency.setTargetAtTime(550+_*25+(Ie.gas?500:0),l,.12);let O=T!==a.gear?.8:1;a.gear=T,a.engine1.frequency.setTargetAtTime(A*O,l,.045),a.engine2.frequency.setTargetAtTime(A*1.5*O,l,.065),a.sub.frequency.setTargetAtTime(A*.5,l,.07),a.wind.gain.gain.setTargetAtTime(d?Math.pow(_/65,2)*.12:0,l,.15),a.wind.filter.frequency.setTargetAtTime(700+_*25,l,.12);let B=Math.abs(bn(x.yaw-x.velocityYaw)),Y=Ie.brake&&_>5,lt=x.jump<.1?Math.min(1,(x.drifting?B*1.8:Math.max(0,B-.18)*2)+(Y?.55:0)):0;a.tire.gain.gain.setTargetAtTime(d?lt*.075:0,l,.045),a.tire.filter.frequency.setTargetAtTime(1300+_*24+Math.sin(Gs*40)*90,l,.05),a.turbo.gain.gain.setTargetAtTime(d?x.boostBlend*.075:0,l,.1),a.turbo.filter.frequency.setTargetAtTime(1600+x.boostBlend*2400,l,.12),d&&x.boostActive&&!a.oldBoost&&ki(340,.17),a.oldBoost=x.boostActive,a.oldSpeed=_},Bs=function(a){if(!Wn||!ze)return;let{ctx:l,master:d,noise:_}=ze,T=l.currentTime,A=l.createBufferSource(),C=l.createBiquadFilter(),O=l.createGain(),B=a==="nitro"||a==="combo",Y=B?.48:a==="drift"?.12:.23;A.buffer=_,C.type=a==="land"?"lowpass":"bandpass",C.Q.value=.75,C.frequency.setValueAtTime(a==="land"?300:B?650:1500,T),C.frequency.exponentialRampToValueAtTime(B?5500:700,T+Y),O.gain.setValueAtTime(.001,T),O.gain.linearRampToValueAtTime(B?.19:.1,T+.025),O.gain.exponentialRampToValueAtTime(.001,T+Y),A.connect(C),C.connect(O),O.connect(d),A.start(),A.stop(T+Y+.03),(a==="combo"||a==="small")&&ki(a==="combo"?1080:820,.08)},eu=function(a){if(x.nitro>=2){x.energy=Math.min(99,x.energy+a);return}for(x.energy+=a;x.energy>=100&&x.nitro<2;)x.energy-=100,x.nitro++,mn("NITRO READY","\u6C2E\u6C14\u5DF2\u88C5\u74F6 \xB7 E \u91CA\u653E 3.2 \u79D2",1.2),ki(1050,.09)},nu=function(a){x.jetHistory.push({kind:a,t:di}),x.jetHistory=x.jetHistory.filter(d=>di-d.t<2.5).slice(-3);let l=x.jetHistory.map(d=>d.kind).join("");(l==="CWW"||l==="WCW")&&(x.combo=l,x.comboTimer=1.3,x.mini=Math.max(x.mini,.88),l==="WCW"&&(x.nitroTime+=.35),mn(l+" \u55B7",l==="CWW"?"\u6C2E\u6C14 \u2192 \u5C0F\u55B7 \u2192 \u5C0F\u55B7 \xB7 \u9AD8\u901F\u51FA\u5F2F":"\u5C0F\u55B7 \u2192 \u6C2E\u6C14 \u2192 \u5C0F\u55B7 \xB7 \u5EF6\u957F\u55B7\u5C04",1.35),Bs("combo"))},Rf=function(){ie!=="running"||x.nitro<1||x.nitroTime>0||(x.nitro--,x.nitroTime=3.2,mn("NITRO","\u6C2E\u6C14\u55B7\u5C04 \xB7 3.2 \u79D2",.8),nu("C"),Bs("nitro"))},Pf=function(){ie!=="running"||x.smallJets<1||x.smallWindow<=0||x.jetCooldown>0||(x.smallJets--,x.jetCooldown=.18,x.mini=.72,x.smallWindow=x.smallJets?1.15:0,x.smallCount++,nu("W"),Bs("small"),x.comboTimer<=0&&mn(x.smallCount>1?"DOUBLE BOOST":"MINI BOOST",x.smallCount>1?"\u53CC\u55B7 \xB7 \u8FDE\u7EED\u51FA\u5F2F\u52A0\u901F":"\u5C0F\u55B7 \xB7 \u53CA\u65F6\u63A5\u4E0B\u4E00\u55B7",.75))},hc=function(a=2,l="\u5C0F\u55B7\u5DF2\u5C31\u7EEA"){x.smallJets=Math.max(x.smallJets,a),x.smallWindow=1.5,x.smallCount=0,mn(l,"\u70B9 \u7A7A\u683C / Q\uFF0C\u6216\u91CD\u65B0\u6309 W \xB7 \u8FDE\u70B9\u4E24\u6B21\u53CC\u55B7",1.1),ki(760,.06)},uc=function(){x.driftRewarded||x.driftCharge<.1||x.driftDuration<.11||(x.driftRewarded=!0,hc(x.driftCharge>.35?2:1,x.driftCharge>.35?"\u53CC\u55B7\u5DF2\u5C31\u7EEA":"\u5C0F\u55B7\u5DF2\u5C31\u7EEA"))},Ya=function(a=!0){x.drifting&&(a&&uc(),x.drifting=!1,x.driftPhase="exit",x.exitTime=.45,x.exitFromGrip=x.tireGrip||3.6,x.exitFromLimit=x.tireLimit||38,x.driftCharge=0,x.driftDuration=0,x.driftSide=0,x.driftReleasing=!1)},If=function(a){x.drifting=!0,x.driftSide=a,x.driftCharge=0,x.driftDuration=0,x.driftPhase="entry",x.driftRewarded=!1,x.driftReleasing=!1,x.releaseAge=0,x.driftLatch=!0,x.driftCooldown=.16,x.exitTime=0,x.turnRate+=a*.38,x.gripRecovery=0,Bs("drift")},Lf=function(a){x.prevPose={s:x.s,l:x.l,yaw:x.yaw,jump:x.jump};let l=Te(x.s),d=x.s,_=typeof Xi=="number"?Xi:(Ie.right?1:0)-(Ie.left?1:0);x.speed=Math.hypot(x.vS,x.vL);for(let Lt of["pad","mini","nitroTime","smallWindow","jetCooldown","comboTimer","exitTime","driftCooldown","driftBuffer","lastSteerTime","jetInputBuffer","boostInputBuffer"])x[Lt]=Math.max(0,x[Lt]-a);x.smallWindow===0&&(x.smallJets=0),Hs=z(Hs,_,1-Math.exp(-a*(_?26:20)));let T=Xn.drift>0||Ie.drift&&!x.prevDrift,A=_&&_!==x.prevSteer;Xn.drift=0,Ie.drift||(x.driftLatch=!1),T&&(x.driftBuffer=.26),_&&(x.lastSteer=Math.sign(_),x.lastSteerTime=.2);let C=x.jump<.12,O=x.speed>.4?Math.atan2(x.vL,x.vS):x.yaw,B=bn(x.yaw-O),Y=(Math.abs(_)>.12?Math.sign(_):0)||(x.lastSteerTime>0?x.lastSteer:Math.abs(B)>.07?Math.sign(B):0);if(!x.drifting&&x.driftCooldown===0&&C&&x.speed>5&&Y&&(Ie.drift&&(!x.driftLatch||A&&Y!==x.lastDriftSide)||x.driftBuffer>0)?(If(Y),x.lastDriftSide=Y,x.driftBuffer=0):x.drifting&&T&&x.driftDuration>.18&&(_*x.driftSide<0||x.driftReleasing)&&(uc(),x.driftReleasing=!0,x.releaseAge=Math.max(.18,x.releaseAge),x.driftBuffer=0),x.drifting){x.driftDuration+=a;let Lt=_*x.driftSide<0;x.speed<3.5||!C?Ya(!1):(!Ie.drift&&x.driftDuration>.14&&(x.driftReleasing=!0),x.driftReleasing&&(x.releaseAge+=a),x.driftPhase=x.driftReleasing?"release":Lt?"counter":x.driftDuration<.18?"entry":"hold",(Lt||x.driftReleasing)&&Math.abs(B)<.75&&uc(),(x.driftReleasing&&(x.releaseAge>.55||Math.abs(B)<.065&&x.releaseAge>.16)||Lt&&Math.abs(B)<.075&&x.driftDuration>.22)&&Ya(!0))}(Xn.boost>0||Ie.boost&&!x.prevBoost)&&(x.boostInputBuffer=.15),(Xn.small>0||Ie.small&&!x.prevSmall||Ie.gas&&!x.prevGas)&&(x.jetInputBuffer=.15),Xn.boost=0,Xn.small=0,x.boostInputBuffer>0&&x.nitro>0&&x.nitroTime<=0&&(Rf(),x.boostInputBuffer=0),x.jetInputBuffer>0&&x.smallJets>0&&x.jetCooldown<=0&&(Pf(),x.jetInputBuffer=0);let lt=Cf.step(x,{steer:typeof Xi=="number"?Xi:_,gas:Ie.gas||an.autoGas&&!Ie.brake||Wi&&!Ie.brake,brake:Ie.brake},a,{sensitivity:an.sensitivity});Hs=x.steering,x.boostActive=x.nitroTime>0,x.boostBlend=z(x.boostBlend,lt.boost?1:0,1-Math.exp(-a*7));let xt=N(1-l.curv*x.l,.45,1.55),ft=x.vS/xt*a;x.s=Math.max(-8,x.s+ft),x.l+=x.vL*a;let Mt=Te(x.s),Tt=bn(Mt.h-l.h),It=x.vS,_e=x.vL;x.vS=It*Math.cos(Tt)+_e*Math.sin(Tt),x.vL=-It*Math.sin(Tt)+_e*Math.cos(Tt),x.yaw=bn(x.yaw-Tt);let _t=x.jump>0;(_t||x.vy>0)&&(x.vy-=17*a,x.jump=Math.max(0,x.jump+x.vy*a),x.jump<=0&&(x.vy=0,_t&&(hc(1,"\u843D\u5730\u55B7\u5DF2\u5C31\u7EEA"),Bs("land")))),He(a),gc-=x.vS*a/.4,di+=a,Gs+=a,x.score+=Math.max(0,ft)*.85;let vt=Math.abs(bn(x.yaw-x.velocityYaw));if(x.drifting&&vt>.035&&x.speed>5&&Math.abs(x.l)<7){let Lt=a*N((vt+.025)*x.speed*.11,0,3);x.driftCharge+=Lt,eu(Lt*42),x.score+=a*35}to=x.drifting,(Ie.gas||an.autoGas)&&!Ie.brake&&x.speed<.7&&Math.abs(x.l)>5.8?x.stuckTime+=a:x.stuckTime=0,x.stuckTime>1.6&&vc(!0);for(let Lt of hn.values())for(let Vt of Lt.entities){if(Vt.kind==="cone"||Vt.kind==="barrier")continue;let Ut=Vt.s;ee==="circuit"&&(Ut+=Math.round((x.s-Ut)/De)*De);let fe=ee==="circuit"?Math.max(0,Math.floor(Ut/De)):0;Vt.hitLap===fe||Ut<Math.min(d,x.s)-1.4||Ut>Math.max(d,x.s)+1.4||Math.abs(x.l-Vt.l)>Vt.width||(Vt.kind==="coin"?(Vt.hitLap=fe,Vt.hit=!0,x.coins++,eu(3),x.score+=50,ki(700+x.coins%5*80,.04)):Vt.kind==="pad"?(Vt.hitLap=fe,x.pad=1.55,mn("BOOST STRIP","\u52A0\u901F\u5E26 \xB7 \u4FDD\u6301\u8DEF\u7EBF",1),Bs("nitro")):Vt.kind==="ramp"&&x.vS>7&&(Vt.hitLap=fe,x.vy=8,x.jump=.1,x.score+=120,hc(1,"\u7A7A\u55B7\u5DF2\u5C31\u7EEA")))}x.s>=x.checkpoint&&(x.checkpoint+=500,x.score+=500,mn("CHECKPOINT",Math.floor(x.s/500)*500+" m",1)),x.prevSteer=_,x.prevDrift=Ie.drift,x.prevBoost=Ie.boost,x.prevSmall=Ie.small,x.prevGas=Ie.gas,Ff(a),lu(),jf(a),ee==="circuit"&&x.s>=Oi()&&xc()},zs=function(){let a={...Ie};for(let l in Ie)Ie[l]=!1;for(let l of Ja)no[l]&&(Ie[no[l]]=!0);for(let l of Za.values())Ie[l]=!0;for(let l in Xn)Ie[l]&&!a[l]&&Xn[l]++},ru=function(){return $a=Math.imul($a,1664525)+1013904223>>>0,$a/4294967296},Uf=function(a){let l=(Math.imul(a+419,2654435761)^Vs)>>>0;return()=>(l=Math.imul(l,1664525)+1013904223>>>0,l/4294967296)},au=function(a){return 1.7*Math.sin(a*.005)+.65*Math.sin(a*.017)},_c=function(a){if(ee!=="circuit")for(;$n[$n.length-1].s<a+8;){let l=$n[$n.length-1],d=l.s+4;d>mc&&(pc=-u/2+(ru()-.5)*2.15,mc=d+90+ru()*130);let _=N((pc-l.h)*.022,-.0175,.0175);ja=z(ja,_,.15);let T=l.h+ja*4;$n.push({s:d,p:[l.p[0]+Math.cos((T+l.h)*.5)*4,au(d),l.p[2]+Math.sin((T+l.h)*.5)*4],h:T})}},Te=function(a){if(ee==="circuit")return Os(a);_c(a);let l=Math.floor((a+80)/4),d=N(l-Ur,0,$n.length-2),_=$n[d],T=$n[d+1],A=N((a-_.s)/4,0,1),C=z(_.h,T.h,A);return{p:_.p.map((B,Y)=>z(B,T.p[Y],A)),h:C,T:[Math.cos(C),0,Math.sin(C)],R:[-Math.sin(C),0,Math.cos(C)],curv:(T.h-_.h)/4,slope:(T.p[1]-_.p[1])/4}},Fe=function(a,l=0,d=0){let _=Te(a);return g(g(_.p,v(_.R,l)),[0,d,0])},jn=function(a,l,d,_,T,A){let C=p(R(f(d,l),f(T,l)));C[1]<0&&(C=v(C,-1)),a.add(ht([...l,...d,..._,...T],[...C,...C,...C,...C],[0,1,2,0,2,3]),ce,A,.06)},ou=function(a){let l=a*40,d=Te(l).p,_=new le,T=Uf(a),A=ee==="circuit"?dc[tn().biome]:dc[(Math.floor(Math.max(0,l)/1e3)%3+3)%3],C=lt=>f(lt,d);for(let lt=0;lt<10;lt++){let xt=l+lt*4;if(ee==="circuit"&&xt>=De)break;let ft=Te(xt),Mt=Te(ee==="circuit"?Math.min(xt+4,De):xt+4),Tt=(It,_e,_t)=>C(g(g(It.p,v(It.R,_e)),[0,_t,0]));jn(_,Tt(ft,-7,.04),Tt(ft,7,.04),Tt(Mt,7,.04),Tt(Mt,-7,.04),"#69728e");for(let It of[-1,1])jn(_,Tt(ft,It*7,.06),Tt(ft,It*7.65,.06),Tt(Mt,It*7.65,.06),Tt(Mt,It*7,.06),(a*10+lt)%2?"#d1b5e0":"#f4eced"),jn(_,Tt(ft,It*7.65,-.02),Tt(ft,It*(ee==="circuit"?11:64),-.08),Tt(Mt,It*(ee==="circuit"?11:64),-.08),Tt(Mt,It*7.65,-.02),A.ground);if(ee==="circuit")for(let It of[-1,1])jn(_,Tt(ft,It*8.6,.06),Tt(ft,It*11,.06),Tt(Mt,It*11,.06),Tt(Mt,It*8.6,.06),"#d9d9e4"),jn(_,Tt(ft,It*11,.06),Tt(ft,It*11,-1.25-ft.p[1]),Tt(Mt,It*11,-1.25-Mt.p[1]),Tt(Mt,It*11,.06),"#b5bbcb");if(ee==="circuit")for(let It of[-1,1])J(xt+2,It*20)&&(jn(_,Tt(ft,It*11,-.12),Tt(ft,It*28,-.12),Tt(Mt,It*28,-.12),Tt(Mt,It*11,-.12),A.ground),jn(_,Tt(ft,It*28,-.12),Tt(ft,It*28,-1.25-ft.p[1]),Tt(Mt,It*28,-1.25-Mt.p[1]),Tt(Mt,It*28,-.12),"#bdc4c7"));if(lt%3===0)for(let It of[-2.33,2.33]){let _e=Fe(xt+1.5,It,.061);_.add(Se(2.2,.015,.07,.004),V(C(_e),[1,1,1],[0,-ft.h,0]),"#e0e4e8")}}for(let lt of[-1,1]){let xt=Array.from({length:11},(ft,Mt)=>C(Fe(l+Mt*4,lt*8.1,.72)));D(_,xt,.07,"#b7c6d9"),D(_,Array.from({length:11},(ft,Mt)=>C(Fe(l+Mt*4,lt*8.1,.4))),.045,"#c7d5e2");for(let ft=0;ft<5;ft++){let Mt=l+3+ft*8;if(ee==="circuit"&&Mt>De)break;let Tt=C(Fe(Mt,lt*8.1,0));Qt(_,Tt,g(Tt,[0,.84,0]),.055,"#9caec2"),P(_,g(Tt,[0,.75,0]),[.12,.15,.19],ft%2?"#f7bbcf":"#fff1b9",.02)}}let O=[];function B(lt,xt,ft){if(ee==="circuit"&&xt>De-20)return;let Mt=lt==="coin"?ke:lt==="pad"?Un:lt==="ramp"?Ga:lt==="cone"?$t:Ft;O.push({kind:lt,s:xt,l:ft,node:new de(Mt),hit:!1,width:lt==="barrier"?1.5:lt==="cone"?.85:lt==="coin"?1.12:1.9})}if(a>=2){let lt=Math.floor(T()*3),xt=[-4.2,0,4.2],ft=ee==="circuit"?Math.abs(Te(l+22).curv)<.013?.42:.12:a<7?.55:.85;if(T()<ft){let Mt=(lt+1+Math.floor(T()*2))%3;B(T()<.75?"cone":"barrier",l+22,ee==="circuit"?Mt===1?-5.5:Math.sign(xt[Mt])*5.5:xt[Mt]),ee==="endless"&&a>10&&T()<.28&&B("cone",l+22,xt[3-lt-Mt])}for(let Mt=0;Mt<4;Mt++)B("coin",l+7+Mt*7,xt[lt]);a%4===0?B("pad",l+14,xt[lt]):a>8&&a%7===0&&B("ramp",l+14,xt[lt])}if(a===0){for(let ft=0;ft<12;ft++){let Mt=Fe(0,-7+ft*1.16,.075),Tt=Te(0);_.add(Se(.9,.015,1.12,.003),V(C(Mt),[1,1,1],[0,-Tt.h,0]),ft%2?"#e8e7ed":"#424b66")}for(let ft of[-1,1]){let Mt=C(Fe(0,ft*7.75,0));Qt(_,Mt,g(Mt,[0,5,0]),.12,ut)}let lt=C(Fe(0,-7.75,5)),xt=C(Fe(0,7.75,5));Qt(_,lt,xt,.16,ut);for(let ft=0;ft<7;ft++)ne(_,C(Fe(0,-4.5+ft*1.5,5)),[.24,.24,.24],ft%2?"#f9d997":"#bfd9f4",!0)}let Y=new de(_.finish());return Y.add(Sf(a,d,T)),{k:a,origin:d,node:Y,entities:O}},lu=function(){if(ee==="circuit"){let _=Math.ceil(De/40);for(let T=0;T<_;T++)hn.has(T)||hn.set(T,ou(T));return}let a=Math.max(-2,Math.floor(x.s/40)-3),l=Math.floor(x.s/40)+9;_c((l+1)*40);for(let _=a;_<=l;_++)hn.has(_)||hn.set(_,ou(_));for(let[_,T]of hn)_<a&&(T.node.mesh.dispose(),hn.delete(_));let d=Math.floor((x.s-210+80)/4);if(d>Ur){let _=Math.min(d-Ur,$n.length-10);$n.splice(0,_),Ur+=_}},ms=function(){Ja.clear(),Za.clear();for(let a in Xn)Xn[a]=0;for(let a in Ie)Ie[a]=!1;for(let a of document.querySelectorAll(".touch button"))a.classList.remove("held")},Qn=function(a=!1){if(ee==="circuit"?(Wa(),Vs=Qe==="coast-reborn"?73121:95276):a&&(Vs=(Date.now()>>>0)%999999||72319),fc&&hn.size)iu.set(fc,hn);else for(let l of hn.values())l.node.mesh.dispose();hn=ee==="circuit"?iu.get(Qe)||new Map:new Map,fc=ee==="circuit"?Qe:null;for(let l of hn.values())for(let d of l.entities){d.hit=!1,delete d.hitLap;for(let _ of["ds","dl","vS","vL","angle","omega","tilt"])d[_]=0}$n=[{s:-80,p:[0,au(-80),80],h:-u/2}],Ur=0,pc=-u/2,mc=115,ja=0,$a=Vs,Object.assign(x,{s:0,l:0,speed:0,steering:0,vS:0,vL:0,spin:0,contactSound:0,yaw:0,velocityYaw:0,energy:0,nitro:1,nitroTime:0,turnRate:0,driftDuration:0,driftLatch:!1,driftRewarded:!1,driftReleasing:!1,releaseAge:0,gripRecovery:0,driftCooldown:0,driftBuffer:0,lastSteer:0,lastSteerTime:0,prevSteer:0,lastDriftSide:0,jetInputBuffer:0,boostInputBuffer:0,tireGrip:10.5,tireLimit:68,exitFromGrip:3.6,exitFromLimit:38,driftPhase:"grip",exitTime:0,smallJets:0,smallWindow:0,smallCount:0,jetCooldown:0,jetHistory:[],combo:"",comboTimer:0,prevDrift:!1,prevBoost:!1,prevSmall:!1,prevGas:!1,coins:0,score:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,stuckTime:0,timePenalty:0}),gc=0,di=0,Gs=0,to=!1,Hs=0,ds=0,ks=60,fs=null,Nr=0;for(let l of ps)l.life=0;for(let l of Vn)l.life=0;ms(),_c(420),lu(),Xs=null,zr=null,gs=null,x.prevPose=null,U("seedText").textContent=String(Vs).padStart(6,"0"),U("bestText").textContent=Br.toLocaleString(),U("rerollBtn").hidden=ee==="circuit",U("endRunBtn").hidden=ee==="circuit",U("uploadStatus").textContent="",Or=0,Fr=0,U("toast").classList.remove("show"),U("drift").classList.remove("on"),U("modeDistance").textContent=Math.round(De)+" m / \u5708 \xB7 "+tn().laps+" \u5708"},mn=function(a,l="",d=2){U("toastTitle").textContent=a,U("toastSub").textContent=l,U("toast").classList.add("show"),Fr=d,U("status").textContent=a+" "+l},Ws=function(a=!1){if(Wi=!1,typeof nt<"u"&&nt.room){Yr();return}Qn(a),ie="countdown",Gi=3.05,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("helpPanel").hidden=!0,U("musicPanel").hidden=!0,U("rankPanel").hidden=!0,Vi.classList.remove("menu-open"),U("countdown").hidden=!1,U("countdown").textContent="3",qa(),ze&&ze.ctx.resume().catch(()=>{}),Eu(),U("status").textContent="\u51C6\u5907\u8D77\u8DD1\u3002W \u52A0\u901F\uFF0CAD \u8F6C\u5411\uFF0CShift \u6F02\u79FB\uFF0C\u7A7A\u683C\u5C0F\u55B7\uFF0CE \u6C2E\u6C14\u3002"},Hi=function(){if(typeof nt<"u"&&nt.room&&ie==="running"){ms(),mn("\u5728\u7EBF\u6BD4\u8D5B\u7EE7\u7EED\u8FDB\u884C","\u8054\u673A\u4E0D\u6682\u505C \xB7 \u70B9\u51FB\u623F\u95F4\u53EF\u9000\u51FA",1.5);return}ie==="running"?(ie="paused",ms(),U("paused").hidden=!1,U("status").textContent="\u6E38\u620F\u5DF2\u6682\u505C\u3002"):ie==="paused"&&(ie="running",U("paused").hidden=!0,Qa=performance.now())},xc=function(){if(ie!=="finished"){ie="finished",ms(),Br=Math.max(Br,Math.floor(x.s)),eo=Math.max(eo,Math.floor(x.score));try{localStorage.setItem("star-rush-best-distance",String(Br)),localStorage.setItem("star-rush-best-score",String(eo))}catch{}U("resultDistance").textContent=ee==="circuit"?j(k()):Math.floor(x.s).toLocaleString()+" m",U("resultMainLabel").textContent=ee==="circuit"?tn().laps+" \u5708\u7528\u65F6":"\u672C\u6B21\u91CC\u7A0B",U("resultScore").textContent=Math.floor(x.score).toLocaleString(),U("resultBest").textContent=x.coins+" \u679A",U("resultBestLabel").textContent="\u6536\u96C6\u91D1\u5E01",U("resultNote").textContent=ee==="circuit"?"\u51B2\u7EBF\u5B8C\u6210\uFF01\u53EF\u4EE5\u4E0A\u4F20\u6210\u7EE9\uFF0C\u548C\u670B\u53CB\u6BD4\u8F83\u5F53\u524D\u8D5B\u9053\u7684\u5B8C\u8D5B\u7528\u65F6\u3002":"\u672C\u6B21\u81EA\u7531\u8DD1\u5DF2\u7ED3\u7B97\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u91CC\u7A0B\u6210\u7EE9\u3002",U("finished").hidden=!1,Vi.classList.add("menu-open"),U("status").textContent="\u672C\u5C40\u7ED3\u675F\u3002",Gr={id:crypto.randomUUID(),mode:ee,track:ee==="circuit"?us:"endless-reborn",seed:Vs,distance:Math.round(Math.max(0,x.s)),timeMs:Math.round(k()*1e3),score:Math.floor(x.score)},Jr||Gf(Gr),U("submitRun").disabled=!1,U("submitRun").textContent="\u4E0A\u4F20\u672C\u6B21\u6210\u7EE9",Qf(),ki(1100,.3)}},cu=function(a,l=5,d=[0,1,0]){let _=0;for(let T of Vn)T.life<=0&&_++<l&&(T.life=.35+Math.random()*.4,T.p=[...a],T.v=g(d,[(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3]),T.size=.04+Math.random()*.08)},vc=function(a=!1){if(ie!=="running"&&ie!=="paused")return;let l=[0,-3.7,3.7],d=0;for(let _ of l){let T=!0;for(let A of hn.values())for(let C of A.entities)(C.kind==="cone"||C.kind==="barrier")&&Math.abs(S(C.s,x.s))<7&&Math.abs(C.l-_)<C.width+1.1&&(T=!1);if(T){d=_;break}}x.prevPose=null,x.l=d,x.yaw=0,x.turnRate=0,x.velocityYaw=0,x.lateralSpeed=0,x.speed=N(x.speed,2,12),x.vS=x.speed,x.vL=0,x.spin=0,x.stuckTime=0,x.timePenalty=(x.timePenalty||0)+2,x.jump=0,x.vy=0,x.drifting=!1,x.driftSide=0,x.driftCharge=0,x.exitTime=0,x.driftReleasing=!1,x.driftBuffer=0,to=!1,fs=null,mn(a?"\u5DF2\u81EA\u52A8\u8131\u56F0":"\u8D5B\u8F66\u5DF2\u56DE\u6B63","\u7EE7\u7EED\u6309 W \u52A0\u901F \xB7 \u56DE\u6B63\u8BA1\u65F6 +2 \u79D2",1.5)},Ff=function(a){for(let C of ps)C.life=Math.max(0,C.life-a);let l=Math.abs(bn(x.yaw-x.velocityYaw));if(!x.drifting&&!(x.exitTime>0&&l>.06)||x.speed<4||x.jump>.08){fs=null,Nr=0;return}if(Nr+=a,Nr<.025)return;Nr=0;let d=Te(x.s),_=Fe(x.s,x.l,.085),T=V(_,[.97,.97,.97],[0,-d.h-x.yaw,Math.atan(d.slope)]),A=[-1,1].map(C=>K(T,[-1.02,0,C*.83]));if(fs)for(let C=0;C<2;C++){let O=f(A[C],fs[C]),B=Math.hypot(O[0],O[2]);if(B>.05&&B<3){let Y=ps[Nf++%ps.length];Y.p=v(g(A[C],fs[C]),.5),Y.length=B+.035,Y.angle=-Math.atan2(O[2],O[0]),Y.life=2.5}}fs=A,l>.15&&cu(Fe(x.s-1,x.l,.2),1,v(d.T,-1.5))},Of=function(a,l){for(let d of Vn)d.life<=0||(d.life-=a,d.v[1]-=a*5,d.p=g(d.p,v(d.v,a)),d.node.local=V(f(d.p,l),[d.size,d.size,d.size]),Le.add(d.node))},Bf=function(a,l){let d=ie==="running"&&x.prevPose?N(ds/Ka,0,1):1,_=x.prevPose||x,T=z(_.s,x.s,d),A=z(_.l,x.l,d),C=_.yaw+bn(x.yaw-_.yaw)*d,O=z(_.jump,x.jump,d),B=Te(T),Y=B.p,lt=Fe(T,A,.06+O),xt=f(lt,Y),ft=Math.atan(B.slope);at.tint=en.paint,at.local=V(xt,[.97,.97,.97],[0,-B.h-C,ft]),Le.children=[at],wf(Y,a),ee==="circuit"&&(io.mesh=Vf[tn().biome],io.local=L(-Y[0],-.9-Y[1],-Y[2]),io.shadow=!1,Le.add(io));for(let _t of hn.values())if(!(ee==="circuit"&&Math.abs(S(_t.k*40,x.s))>265)){_t.node.local=L(...f(_t.origin,Y)),_t.node.shadow=Math.abs(S(_t.k*40,x.s))<90,Le.add(_t.node);for(let vt of _t.entities){if(vt.kind==="coin"&&vt.hitLap===Math.max(0,Math.floor(x.s/De)))continue;let Lt=Te(vt.s+(vt.ds||0)),Vt=Fe(vt.s+(vt.ds||0),vt.l+(vt.dl||0),vt.kind==="coin"?1.05+.12*Math.sin(a*3+vt.s):.08),Ut=V(f(Vt,Y),[1,1,1],[0,-Lt.h+(vt.kind==="coin"?a*2:-(vt.angle||0)),Math.atan(Lt.slope)]);vt.node.local=vt.kind==="cone"&&vt.tilt?I(Ut,I(L(0,.34,0),I(b(vt.tilt),L(0,-.25,0)))):Ut,vt.node.shadow=Math.abs(S(vt.s,x.s))<65,Le.add(vt.node)}}Lr(a,l,Hs),Of(ie==="running"?l:0,Y);for(let _t of ps)_t.life>0&&(_t.node.local=V(f(_t.p,Y),[_t.length,1,Math.min(1,_t.life)*1.2],[0,_t.angle,0]),Le.add(_t.node));let Mt=ie==="ready"||ie==="finished",Tt,It;if(Mt){let _t=.15*Math.sin(a*.16);Tt=g(lt,g(v(B.T,5.6+_t),g(v(B.R,7.1),[0,3.5,0]))),It=g(lt,g(v(B.R,-1.25),[0,.8,0]))}else{let _t=qn===1?12.5:qn===2?5.8:8.5,vt=qn===1?9:qn===2?2.9:4.5,Lt=B.h+x.velocityYaw;gs===null?gs=Lt:gs+=bn(Lt-gs)*(1-Math.exp(-l*8));let Vt=[Math.cos(gs),0,Math.sin(gs)],Ut=g(v(B.T,x.vS/18),v(B.R,x.vL/18));Tt=g(g(lt,Ut),g(v(Vt,-_t),[0,vt,0])),It=g(g(lt,Ut),g(v(Vt,10),[0,1+O*.2,0]))}let _e=1-Math.exp(-l*(Mt?2.6:18));return Xs?(Xs=Xs.map((_t,vt)=>z(_t,Tt[vt],_e)),zr=zr.map((_t,vt)=>z(_t,It[vt],_e))):(Xs=Tt,zr=It),{eye:f(Xs,Y),target:f(zr,Y),origin:Y}},zf=function(){if(!jt)return;let a=yc.width,l=yc.height,d=Te(x.s),_=.86;if(ee==="circuit"){jt.clearRect(0,0,a,l);let O=Fs,B=Math.min((a-45)/(O.maxX-O.minX),(l-30)/(O.maxZ-O.minZ)),Y=ft=>[a*.5+(ft[0]-(O.minX+O.maxX)*.5)*B,l*.5+(ft[2]-(O.minZ+O.maxZ)*.5)*B];jt.lineJoin="round";for(let[ft,Mt]of[["#737e9d",13],["#dfe8f3",8]]){jt.strokeStyle=ft,jt.lineWidth=Mt,jt.beginPath();for(let Tt=0;Tt<sn.length;Tt+=6){let It=Y(sn[Tt].p);Tt?jt.lineTo(...It):jt.moveTo(...It)}jt.closePath(),jt.stroke()}if(typeof Yn<"u")for(let ft of Yn){let Mt=Y(Te(ft.s).p);jt.fillStyle=ft.color,jt.beginPath(),jt.arc(Mt[0],Mt[1],3.4,0,h),jt.fill()}if(typeof nt<"u"&&nt.room){let ft=0;for(let Mt of nt.peers.values())if(Mt.position){let Tt=Y(Te(Mt.position.s).p);jt.fillStyle=ao[ft++%ao.length],jt.beginPath(),jt.arc(Tt[0],Tt[1],4.5,0,h),jt.fill()}}let lt=Y(d.p),xt=Y(sn[0].p);jt.fillStyle="#fff7dc",jt.fillRect(xt[0]-3,xt[1]-5,6,10),jt.save(),jt.translate(...lt),jt.rotate(d.h+Math.PI/2),jt.fillStyle="#ffe68b",jt.beginPath(),jt.moveTo(0,-8),jt.lineTo(-5,5),jt.lineTo(5,5),jt.closePath(),jt.fill(),jt.restore();return}jt.clearRect(0,0,a,l),jt.strokeStyle="#c0d7e91c",jt.lineWidth=1;for(let O=20;O<a;O+=30)jt.beginPath(),jt.moveTo(O,0),jt.lineTo(O,l),jt.stroke();for(let O=15;O<l;O+=30)jt.beginPath(),jt.moveTo(0,O),jt.lineTo(a,O),jt.stroke();let T=[];for(let O=-15;O<=205;O+=4){let B=f(Te(x.s+O).p,d.p);T.push([a*.5+w(B,d.R)*_,l*.88-w(B,d.T)*_])}for(let[O,B]of[["#7a85a3",15],["#dce8f0",10]]){jt.strokeStyle=O,jt.lineWidth=B,jt.lineJoin="round",jt.beginPath();for(let Y=0;Y<T.length;Y++)Y?jt.lineTo(...T[Y]):jt.moveTo(...T[Y]);jt.stroke()}jt.fillStyle="#ffe68b",jt.beginPath();let A=a*.5+x.l*_,C=l*.88;jt.moveTo(A,C-10),jt.lineTo(A-7,C+7),jt.lineTo(A+7,C+7),jt.closePath(),jt.fill()},kf=function(a){if(Mc+=a,Mc<.06)return;Mc=0,fi.distance.textContent=Math.floor(x.s).toLocaleString(),fi.score.textContent=String(Math.floor(x.score)).padStart(5,"0"),fi.coins.textContent=String(x.coins).padStart(2,"0"),fi.speed.textContent=Math.round(x.speed*3.6),U("speedbar").style.width=Math.min(100,x.speed/83*100)+"%",fi.energyText.textContent=x.nitro+" \u74F6 / 2 \xB7 "+(x.nitroTime>0?x.nitroTime.toFixed(1)+"s":Math.floor(x.energy)+"%"),U("energyBar").style.width=x.energy+"%";let l=x.boostActive||x.pad>0||x.mini>0;fi.gear.textContent=l?"NITRO / BOOST":x.jump>0?"AIR TIME":x.drifting?"DRIFT MODE":x.speed<1?"READY TO RUSH":"SPORT / "+Math.max(1,Math.min(6,Math.ceil(x.speed/8))),U("boostfx").classList.toggle("on",l),U("raceTime").textContent=j(k()),U("lapLabel").textContent=ee==="circuit"?"LAP "+Math.min(tn().laps,Math.floor(Math.max(0,x.s)/De)+1)+" / "+tn().laps+" \xB7 \u5269\u4F59 "+Math.max(0,Math.ceil(Oi()-x.s))+" m":"\u65E0\u5C3D\u6A21\u5F0F \xB7 \u81EA\u7531\u7ADE\u901F",U("drift").classList.toggle("on",x.drifting||x.smallJets>0),U("driftBar").style.width=(x.smallJets>0?Math.min(100,x.smallWindow/1.5*100):Math.min(100,x.driftCharge/.55*100))+"%",fi.driftText.textContent=x.smallJets>0?"\u5C0F\u55B7 \xD7"+x.smallJets:x.driftPhase==="entry"?"\u8F7B\u70B9\u8D77\u6F02":x.driftPhase==="counter"?"\u53CD\u6253\u6536\u8F66":x.driftPhase==="release"?"\u60EF\u6027\u6536\u6F02":"\u6F02\u79FB\u96C6\u6C14";for(let _ of document.querySelectorAll("[data-key=small]"))_.classList.toggle("smalljet-ready",x.smallJets>0);U("jetCount").textContent=x.smallJets>0?"\u5C0F\u55B7 \xD7"+x.smallJets+" \xB7 "+x.smallWindow.toFixed(1)+"s":x.drifting?"\u6F02\u79FB\u96C6\u6C14\u4E2D":"\u7A7A\u683C / Q \u5C0F\u55B7";let d=Cu(x.s);fi.turnText.textContent=d.direction===0?"\u524D\u65B9\u76F4\u9053":d.direction>0?"\u524D\u65B9\u53F3\u5F2F":"\u524D\u65B9\u5DE6\u5F2F",fi.turnArrowPath.setAttribute("d",d.direction===0?"M12 21V3M5 10L12 3L19 10":d.direction>0?"M5 21V8H21M14 1L21 8L14 15":"M19 21V8H3M10 1L3 8L10 15"),Ri==="practice"&&!nt.room&&Ru(d),fi.biome.textContent=ee==="circuit"?Mf(x.s).name:dc[(Math.floor(x.s/1e3)%3+3)%3].name,zf()},hu=function(a,l=ce,d=!0,_=null,T=1){a.world=I(l,a.local);let A=d&&a.shadow,C=a.tint||_,O=a.opacity??T;a.mesh&&Sc.push({mesh:a.mesh,m:a.world,shadow:A,tint:C,opacity:O});for(let B of a.children)hu(B,a.world,A,C,O)},uu=function(){kr=Math.max(1,i.clientWidth),Vr=Math.max(1,i.clientHeight);let a=Math.min(devicePixelRatio||1,1.5),l=Math.round(kr*a),d=Math.round(Vr*a);(i.width!==l||i.height!==d)&&(i.width=l,i.height=d)},du=function(a){if(!r&&s.renderer.getContext().isContextLost())return;let l=Math.min(.1,Math.max(0,(a-Qa)/1e3));if(Qa=a,ie==="countdown"){Gi=typeof nt<"u"&&nt.room&&nt.startAt?(nt.startAt-(Date.now()+nt.offset))/1e3:Gi-l;let T=Gi>.05?String(Math.ceil(Gi)):"GO!";U("countdown").textContent!==T&&(U("countdown").textContent=T,ki(Gi>.05?400:900,.12)),Gi<=0&&(U("countdown").hidden=!0,ie="running",di=typeof nt<"u"&&nt.room&&nt.startAt?Math.max(0,(Date.now()+nt.offset-nt.startAt)/1e3):0,mn("LET\u2019S RUSH!","W \u52A0\u901F \xB7 SHIFT \u6F02\u79FB \xB7 \u7A7A\u683C\u5C0F\u55B7 \xB7 E \u6C2E\u6C14",2))}if(typeof Mu=="function"&&Mu(a,l),np(l),ie==="running"){ds+=l;let T=0;for(;ds>=Ka&&ie==="running"&&T++<12;)Lf(Ka),ds-=Ka;T>=12&&(ds=0)}else ds=0;(ie==="ready"||ie==="finished")&&(Gs+=l*.25);let d=Bf(Gs,l);tp(d.origin,l),typeof Su=="function"&&Su(d.origin,l),Fr>0&&(Fr-=l,Fr<=0&&U("toast").classList.remove("show")),Or=Math.max(0,Or-l),U("hitflash").style.opacity=Math.min(.24,Or*.6),Ef(),typeof _u=="function"&&_u(),Sc.length=0,hu(Le),ks=z(ks,ie==="ready"||ie==="finished"?45:an.fov+x.boostBlend*3,1-Math.exp(-l*4));let _=I(ct(ks*u/180,kr/Vr,.12,850),$(d.eye,d.target));Zf(_),r?c(d):Rc=s.render(Sc,d,kr,Vr,ks,an),ep(a,l),kf(l),su||(su=!0,e.classList.add("done")),requestAnimationFrame(du)},fu=function(){try{return JSON.parse(localStorage.getItem("star-rush-runs-reborn")||"[]")}catch{return[]}},Gf=function(a){try{let l=fu();l.push({...a,name:localStorage.getItem("star-rush-name")||"\u672C\u673A\u8F66\u624B"}),localStorage.setItem("star-rush-runs-reborn",JSON.stringify(l.slice(-100)))}catch{}},Hf=function(a,l){let d=document.createElement("tr"),_=l.mode==="circuit"?j(l.timeMs/1e3):l.distance.toLocaleString()+" m";for(let T of[String(a+1).padStart(2,"0"),l.name,_,Math.round(l.score).toLocaleString()]){let A=document.createElement("td");A.textContent=T,d.appendChild(A)}return d},Wf=function(){_s=Qe,U("rankTrack")&&(U("rankTrack").value=_s),wi=ee,Ai=!1,Ys("rankPanel"),Hr()},pu=function(a){ee=a;for(let[l,d]of[["circuitMode","circuit"],["endlessMode","endless"]])U(l).classList.toggle("selected",a===d),U(l).setAttribute("aria-pressed",String(a===d));Qn(!0),U("trackPicker").hidden=a!=="circuit",U("trackDescription").hidden=a!=="circuit"},mu=function(a){if(Gn[a]){if(typeof nt<"u"&&nt.room){mn("\u5DF2\u5728\u8054\u673A\u623F\u95F4","\u9000\u51FA\u623F\u95F4\u540E\u53EF\u66F4\u6362\u5730\u56FE",1.5);return}Qe=a,Qn(!1),Wr()}},Wr=function(){for(let a of document.querySelectorAll("[data-track]"))a.classList.toggle("selected",a.dataset.track===Qe),a.setAttribute("aria-pressed",String(a.dataset.track===Qe));U("trackDescription").textContent=tn().description,U("modeDistance").textContent=Math.round(De)+" m / \u5708 \xB7 "+tn().laps+" \u5708"},Tc=function(){try{localStorage.setItem("star-rush-audio",JSON.stringify(Pn))}catch{}},Xr=function(){if(qa(),!ze)return!1;if(ze.ctx.state==="suspended"&&ze.ctx.resume().catch(()=>{}),re.bus)return!0;re.bus=ze.ctx.createGain();let a=ze.ctx.createDynamicsCompressor();return a.threshold.value=-18,a.ratio.value=3,re.bus.connect(a),a.connect(ze.ctx.destination),re.next=ze.ctx.currentTime+.08,!0},xs=function(a,l,d,_,T,A=0){let C=ze.ctx,O=C.createOscillator(),B=C.createGain();O.type=_,O.frequency.setValueAtTime(a,l),A&&O.frequency.exponentialRampToValueAtTime(A,l+d),B.gain.setValueAtTime(.001,l),B.gain.exponentialRampToValueAtTime(T,l+.008),B.gain.exponentialRampToValueAtTime(.001,l+d),O.connect(B),B.connect(re.bus),O.start(l),O.stop(l+d+.02)},gu=function(a,l,d,_){let T=ze.ctx,A=T.createBufferSource(),C=T.createBiquadFilter(),O=T.createGain();A.buffer=ze.noise,C.type="highpass",C.frequency.value=d,O.gain.setValueAtTime(_,a),O.gain.exponentialRampToValueAtTime(.001,a+l),A.connect(C),C.connect(O),O.connect(re.bus),A.start(a),A.stop(a+l+.02)},Xf=function(a,l){let d=.10135135135135136,_=Math.floor(a/16),T=a%16,A=[45,41,48,43],C=A[Math.floor(_/2)%4],O=lt=>440*Math.pow(2,(lt-69)/12);if(T%4===0&&xs(135,l,.18,"sine",.38,42),(T===4||T===12)&&(gu(l,.13,1200,.12),xs(180,l,.07,"triangle",.1,70)),T%2===0&&gu(l,.035,7500,T%4===2?.065:.04),T%2===0){let lt=C+(T===14?12:0);xs(O(lt-12),l,d*1.5,"sawtooth",.045),xs(O(lt-12),l,d*1.5,"sine",.1)}let B=[0,7,12,15,12,7,10,7],Y=B[Math.floor(T/2)%8];if(T%2===1&&xs(O(C+24+Y),l,.16,"triangle",.045),T===0)for(let lt of[0,3,7])xs(O(C+12+lt),l,d*12,"triangle",.018);if(_%4>=2&&T%4===2){let lt=[12,15,19,22,19,15,14,10][Math.floor(T/4)+4*(_%2)];xs(O(C+24+lt),l,d*2.5,"sine",.055)}},_u=function(){if(!ze||!Xr())return;let a=Pn.enabled&&Wn&&!document.hidden&&re.mode!=="classic",l=ze.ctx.currentTime;if(re.bus.gain.setTargetAtTime(a?Pn.volume*.42:0,l,.07),re.mode==="synth"&&a){re.next<l-.15&&(re.next=l+.05);let d=0;for(;re.next<l+.18&&d++<8;)Xf(re.step++,re.next),re.next+=60/148/4}re.element&&(a&&re.mode==="local"?re.element.paused&&re.element.play().catch(()=>{}):re.element.paused||re.element.pause())},so=function(a){re.mode=a,Xr(),U("synthMusic").classList.toggle("selected",a==="synth"),U("classicMusic").classList.toggle("selected",a==="classic"),U("classicPlayer").hidden=a!=="classic",U("localMusicControls").hidden=a!=="local",U("musicToggle").hidden=a==="classic",a==="classic"?(U("spotifyPlayer").src||(U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"),U("nowPlaying").textContent="\u7ECF\u5178\u5916\u8BED\u6B4C\u5355 \xB7 \u5728\u4E0B\u65B9\u64AD\u653E\u5668\u70B9\u51FB\u64AD\u653E"):(U("spotifyPlayer").removeAttribute("src"),U("nowPlaying").textContent=a==="local"?re.files[re.index]?.name||"\u8BF7\u9009\u62E9\u97F3\u4E50\u6587\u4EF6":"STARLINE \xB7 \u539F\u521B\u7535\u5B50\u7ADE\u901F\u914D\u4E50")},ro=function(a){!re.files.length||!Xr()||(re.index=(a+re.files.length)%re.files.length,re.element||(re.element=new Audio,re.element.preload="auto",ze.ctx.createMediaElementSource(re.element).connect(re.bus),re.element.onended=()=>ro(re.index+1),re.element.onerror=()=>{U("nowPlaying").textContent="\u6B64\u97F3\u9891\u65E0\u6CD5\u89E3\u7801\uFF0C\u8BF7\u6362\u4E00\u9996 MP3 / OGG / WAV"}),re.element.pause(),re.url&&URL.revokeObjectURL(re.url),re.url=URL.createObjectURL(re.files[re.index]),re.element.src=re.url,Pn.enabled=!0,so("local"),re.element.play().catch(()=>{U("nowPlaying").textContent="\u70B9\u51FB\u201C\u64AD\u653E\u97F3\u4E50\u201D\u540E\u7EE7\u7EED"}),U("musicToggle").textContent="\u6682\u505C\u97F3\u4E50")},Ys=function(a){let l=ie==="running"&&!(typeof nt<"u"&&nt.room);qr=qr||l,l&&Hi();for(let d of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])d!==a&&(U(d).hidden=!0);ms(),U(a).hidden=!1},vs=function(a){U(a).hidden=!0,qr&&ie==="paused"&&Hi(),qr=!1},wc=function(a){function l(T){let A=new de(T.mesh);A.local=new Float32Array(T.local),A.shadow=T.shadow;for(let C of T.children)A.add(l(C));return A}let d=l(at),_=d.add(new de(qf[a%4]));return{root:d,marker:_,spin:0}},Yf=function(){return{s:x.s,l:x.l,vS:x.vS,vL:x.vL,yaw:x.yaw,jump:x.jump,mini:x.mini,nitroTime:x.nitroTime,paint:en.paint,time:k(),finished:ie==="finished"}},xu=function(){for(let a of nt.peers.values())a.label.remove();nt.peers.clear()},Ec=function(a){let l=nt.room?.status;nt.room=a.room,nt.members=a.members,nt.ready=!!a.members.find(_=>_.id===nt.id)?.ready,nt.errors=0;let d=new Set(a.members.map(_=>_.id));for(let[_,T]of nt.peers)d.has(_)||(T.label.remove(),nt.peers.delete(_));for(let _ of a.members){if(_.id===nt.id)continue;let T=nt.peers.get(_.id);if(!T){let C=document.createElement("div");C.className="peer-label",C.textContent=_.name,Vi.appendChild(C),T={...wc(nt.peers.size),label:C,name:_.name,history:[],position:null,lastStamp:0},nt.peers.set(_.id,T)}T.label.textContent=_.name,T.name=_.name;let A=_.snapshot;A&&Number.isFinite(A.s)&&_.updatedAt>T.lastStamp&&(T.lastStamp=_.updatedAt,T.history.push({...A,t:_.updatedAt}),T.history.length>12&&T.history.shift())}if(nt.room.status==="racing"&&nt.room.startAt!==nt.runTag){nt.runTag=nt.room.startAt,nt.startAt=nt.room.startAt,Qe=nt.room.track,ee="circuit",Qn(!1),Wr(),Eu();for(let T of nt.peers.values())T.history=[],T.position=null;let _=a.members.findIndex(T=>T.id===nt.id);x.l=(_%2?1:-1)*1.9,x.s=-Math.floor(_/2)*3.8,ie="countdown",Gi=(nt.startAt-(Date.now()+nt.offset))/1e3,U("welcome").hidden=!0,U("finished").hidden=!0,U("paused").hidden=!0,U("roomPanel").hidden=!0,U("rankPanel").hidden=!0,Vi.classList.remove("menu-open"),U("countdown").hidden=!1,qa(),ze&&ze.ctx.resume().catch(()=>{})}if(nt.room.status==="lobby"&&l&&l!=="lobby"){nt.startAt=0,nt.runTag=0,ie="ready",Qe=nt.room.track,ee="circuit",Qn(!1),Wr(),U("countdown").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Vi.classList.add("menu-open");for(let _ of nt.peers.values())_.history=[]}Cc(),ie==="finished"&&Pu()},Cc=function(){let a=!!nt.room;if(U("roomActions").hidden=!a,U("networkHud").hidden=!a,U("createRoom").disabled=a,U("joinRoom").disabled=a,U("roomCode").disabled=a,U("circuitMode").disabled=a,U("endlessMode").disabled=a,U("roomName").disabled=a&&nt.room.status==="racing",U("startBtn").textContent=a?"\u56DE\u5230\u8054\u673A\u623F\u95F4":"\u5F00\u59CB\u7ADE\u901F\u3000\u2197",!a){U("roomTitle").textContent="\u540C\u4E00\u6761\u8D5B\u9053\uFF0C\u4E00\u8D77\u51FA\u53D1\u3002",U("roomMembers").replaceChildren(),U("roomStatus").textContent="\u6700\u591A 4 \u4EBA \xB7 \u4F7F\u7528\u5F53\u524D\u9009\u62E9\u7684\u8DD1\u5708\u5730\u56FE";return}U("roomCode").value=nt.room.code,U("roomTitle").textContent="ROOM "+nt.room.code+" \xB7 "+Gn[nt.room.track].name,U("roomStatus").textContent=(nt.room.status==="racing"?"\u6BD4\u8D5B\u8FDB\u884C\u4E2D":nt.room.status==="finished"?"\u6BD4\u8D5B\u5DF2\u7ED3\u675F":"\u5019\u573A\u4E2D")+" \xB7 "+nt.members.length+" / 4 \u4EBA \xB7 "+Math.round(nt.rtt)+" ms \u5F80\u8FD4",U("roomMembers").replaceChildren();for(let T of nt.members){let A=document.createElement("div");A.className="room-member";let C=document.createElement("span");C.textContent=T.name+(T.id===nt.id?"\uFF08\u4F60\uFF09":"")+(T.id===nt.room.hostId?" \xB7 \u623F\u4E3B":"");let O=document.createElement("b");O.textContent=T.snapshot?.finished?"\u5B8C\u8D5B "+j(T.snapshot.time||0):nt.room.status==="racing"?"\u6BD4\u8D5B\u4E2D":T.ready?"\u5DF2\u51C6\u5907":"\u7B49\u5F85\u51C6\u5907",A.append(C,O),U("roomMembers").appendChild(A)}let l=nt.room.hostId===nt.id,d=nt.room.status!=="lobby";U("startRoom").hidden=!l,U("startRoom").disabled=!d&&nt.members.some(T=>!T.ready),U("startRoom").textContent=d?"\u7ED3\u675F\u672C\u5C40 \xB7 \u8FD4\u56DE\u5019\u573A":"\u5168\u5458\u5C31\u7EEA \xB7 \u5F00\u59CB\u7ADE\u901F",U("readyRoom").hidden=d,U("readyRoom").textContent=nt.ready?"\u53D6\u6D88\u51C6\u5907":"\u51C6\u5907",U("connectionText").textContent=nt.errors?"\u8FDE\u63A5\u6062\u590D\u4E2D\u2026":"ROOM "+nt.room.code+" \xB7 "+Math.round(nt.rtt)+" ms";let _=nt.members.map(T=>({id:T.id,s:T.id===nt.id?x.s:T.snapshot?.s||0,finished:T.id===nt.id?ie==="finished":!!T.snapshot?.finished,time:T.id===nt.id?k():T.snapshot?.time||0})).sort((T,A)=>T.finished&&A.finished?T.time-A.time:A.finished-T.finished||A.s-T.s);U("racePosition").textContent="POS "+(_.findIndex(T=>T.id===nt.id)+1)+" / "+nt.members.length},Yr=function(){Ys("roomPanel"),Cc()},Mu=function(a){if(!nt.room||nt.busy||document.hidden||a-nt.lastSync<(nt.room.status==="racing"?125:850))return;nt.lastSync=a,nt.busy=!0;let l=nt.session;Ac("poll",{snapshot:nt.room.status!=="lobby"?Yf():{}}).then(d=>{nt.room&&nt.session===l&&Ec(d)}).catch(d=>{nt.room&&nt.session===l&&(nt.errors++,U("connectionText").textContent="\u8FDE\u63A5\u6062\u590D\u4E2D \xB7 "+d.message,U("roomStatus").textContent=d.message)}).finally(()=>{nt.busy=!1})},Su=function(a,l){if(!nt.room)return;let d=Date.now()+nt.offset-N(nt.rtt*1.1,170,350);for(let _ of nt.peers.values()){let T=_.history;if(!T.length){_.label.hidden=!0;continue}let A=T[0],C=A;for(let ft=1;ft<T.length&&(C=T[ft],!(C.t>=d));ft++)A=C;let O=A.t===C.t?0:N((d-A.t)/(C.t-A.t),0,1),B={};for(let ft of["s","l","vS","vL","jump"])B[ft]=z(A[ft]||0,C[ft]||0,O);B.yaw=(A.yaw||0)+bn((C.yaw||0)-(A.yaw||0))*O;let Y=N((d-C.t)/1e3,0,.12);if(B.s+=(C.vS||0)*Y,B.l+=(C.vL||0)*Y,_.position&&Math.abs(B.s-_.position.s)<15){let ft=1-Math.exp(-l*24);B.s=z(_.position.s,B.s,ft),B.l=z(_.position.l,B.l,ft)}_.position=B;let lt=Te(B.s),xt=Fe(B.s,B.l,.06+B.jump);_.worldPos=f(g(xt,[0,3,0]),a),_.root.tint=typeof C.paint=="string"?C.paint:ao[0],_.root.local=V(f(xt,a),[.97,.97,.97],[0,-lt.h-B.yaw,Math.atan(lt.slope)]),_.root.shadow=M(f(xt,Fe(x.s,x.l)))<70,Le.add(_.root),_.spin-=(B.vS||0)*l/.4;for(let ft=0;ft<wt.length;ft++){let Mt=wt[ft];_.root.children[2+ft].local=I(L(Mt.x,.41,Mt.z),H(_.spin))}for(let ft=0;ft<pt.length;ft++){let Mt=pt[ft],Tt=C.nitroTime>0||C.mini>0,It=Tt?.85+.16*Math.sin(Gs*38+Mt.side):.001;_.root.children[6+ft].local=V([-1.9,.43,Mt.side*.34],[It,It,It])}}},Zf=function(a){for(let l of nt.peers.values()){if(!l.worldPos||!nt.room||ie==="ready"){l.label.hidden=!0;continue}let d=l.worldPos,_=d[0],T=d[1],A=d[2],C=a[3]*_+a[7]*T+a[11]*A+a[15],O=(a[0]*_+a[4]*T+a[8]*A+a[12])/C,B=(a[1]*_+a[5]*T+a[9]*A+a[13])/C;l.label.hidden=C<=0||Math.abs(O)>1.1||Math.abs(B)>1.1,l.label.hidden||(l.label.style.left=(O*.5+.5)*kr+"px",l.label.style.top=(-B*.5+.5)*Vr+"px")}},Au=function(){return"star-rush-best-reborn-"+Qe},$f=function(){try{return JSON.parse(localStorage.getItem(Au())||"null")}catch{return null}},Eu=function(){if(Yn=[],Jr=!1,Zs=null,Ei=$f(),ys=0,oo=[],lo=0,co=[],Js=[],Ms=1,Zr=1,ho=0,U("resultGrid").replaceChildren(),U("splitLabel").textContent="SECTOR 1 / 3",U("splitDelta").textContent="",U("lapTimeLabel").textContent="",U("coach").hidden=Ri!=="practice",ee==="circuit"&&Ri==="race"&&!nt.room){x.l=-1.8;for(let a=0;a<3;a++){let l=wc(a);l.root.tint=Tu[a],Yn.push({s:-3.8*Math.floor((a+1)/2),l:(a%2?1:-1)*1.9,speed:0,yaw:0,color:Tu[a],name:Kf[a],node:l.root,finishAt:null,index:a})}}Ei&&an.ghost&&ee==="circuit"&&Ri==="timeTrial"&&!nt.room?(Ci=wc(3).root,Ci.tint="#b8e9e6",Ci.opacity=.27):Ci=null,Ic(),Ri==="practice"&&!nt.room&&Ru()},jf=function(a){for(let l of Yn){if(l.finishAt!==null)continue;let d=0;for(let O=15;O<=65;O+=10)d=Math.max(d,Math.abs(Te(l.s+O).curv));let _=N(Math.sqrt(24/Math.max(.004,d)),24,53)*(1-l.index*.028);l.speed=z(l.speed,_,1-Math.exp(-a*(l.speed>_?3:1.2)));let T=Te(l.s+20).curv,A=Math.sign(T)*1.6+Math.sin(l.s*.012+l.index)*.45;for(let O of hn.values())for(let B of O.entities)(B.kind==="barrier"||B.kind==="cone")&&S(B.s,l.s)>0&&S(B.s,l.s)<28&&Math.abs(A-B.l)<2.1&&(A=B.l>0?-2.8:2.8);let C=l.l;l.l=z(l.l,A,1-Math.exp(-a*2.3)),l.yaw=Math.atan2((l.l-C)/a,Math.max(5,l.speed))+N(T*12,-.4,.4),l.s+=l.speed*a,l.s>=Oi()&&(l.s=Oi(),l.finishAt=di,Zs??=di)}if(ee==="circuit"&&!nt.room&&(lo+=a,lo>=.1&&(lo=0,oo.push([Number(k().toFixed(3)),Number(x.s.toFixed(3)),Number(x.l.toFixed(3)),Number(x.yaw.toFixed(4)),Number(x.jump.toFixed(3))]))),ee==="circuit"){for(;x.s>=Ms*De/3&&Ms<=tn().laps*3;){co.push(k());let l=Ei?.splits?.[Ms-1];if(U("splitLabel").textContent="SECTOR "+((Ms-1)%3+1)+" / 3",l){let d=k()-l;U("splitDelta").textContent=(d>0?"+":"\u2212")+Math.abs(d).toFixed(2)+" s",U("splitDelta").style.color=d>0?"#f1b8c6":"#b9edcf"}else U("splitDelta").textContent="\u5206\u6BB5 "+j(k()-(co[Ms-2]||0));Ms++}if(x.s>=Zr*De){let l=Js.reduce((d,_)=>d+_,0);Js.push(k()-l),U("lapTimeLabel").textContent="\u4E0A\u4E00\u5708 "+j(Js.at(-1)),Zr<tn().laps&&mn("LAP "+(Zr+1),"\u4E0A\u4E00\u5708 "+j(Js.at(-1)),1.5),Zr++}}if(Zs!==null&&di-Zs>30&&x.s<Oi()){Jr=!0,xc();return}ho+=a,ho>.18&&(ho=0,Ic())},Ic=function(){if(nt.room){U("localPosition").textContent="ONLINE",U("eventLabel").textContent="\u597D\u53CB\u623F\u95F4 \xB7 "+nt.room.code;return}let a=1+Yn.filter(l=>l.s>x.s).length;U("localPosition").textContent=Yn.length?"POS "+a+" / 4":Ri==="practice"?"PRACTICE":"TIME ATTACK",U("eventLabel").textContent=Zs!==null?"\u5B8C\u8D5B\u5012\u8BA1\u65F6 "+Math.max(0,30-Math.floor(di-Zs))+" s":ee==="endless"?"\u65E0\u5C3D\u5DE1\u6E38":tn().name},Cu=function(a){let l=bn(Te(a+62).h-Te(a+32).h);return{turn:l,direction:Math.abs(l)<.05?0:Math.sign(l),currentCurve:Te(a).curv}},Ru=function(a=Cu(x.s)){let l=a.direction>0?"\u53F3\u5F2F":a.direction<0?"\u5DE6\u5F2F":"",d=x.smallJets>0&&x.smallWindow>0,_="W / \u2191 \u52A0\u901F\uFF0C\u89C2\u5BDF\u524D\u65B9\u5F2F\u9053\u3002";x.drifting&&x.driftPhase==="counter"?_="\u53CD\u6253\u6536\u8F66\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\u3002":""):x.drifting&&x.driftPhase==="release"||x.driftPhase==="exit"&&x.exitTime>0?_="\u6536\u6F02\u4E2D\uFF1A\u5148\u7A33\u4F4F\u65B9\u5411\u3002"+(d?"\u5C0F\u55B7\u5DF2\u5C31\u7EEA\uFF0C\u8F66\u5934\u7A33\u5B9A\u540E\u8854\u63A5\u3002":""):x.drifting?_=x.driftPhase==="entry"?"\u8D77\u6F02\u4E2D\uFF1A\u5C0F\u5E45\u8F6C\u5411\uFF0C\u51C6\u5907\u53CD\u6253\u6536\u8F66\u3002":"\u6F02\u79FB\u4E2D\uFF1A\u53CD\u6309\u65B9\u5411\u6536\u8F66\uFF0C\u677E\u5F00 Shift \u6536\u6F02\u3002":d?_="\u5C0F\u55B7 \xD7"+x.smallJets+"\uFF1A\u8F66\u5934\u7A33\u5B9A\u540E\u70B9\u7A7A\u683C / Q\u3002"+(x.smallJets>1?"\u8FDE\u7EED\u4E24\u6B21\u53EF\u53CC\u55B7\u3002":""):x.nitroTime>0?_="\u6C2E\u6C14\u55B7\u5C04\u4E2D\uFF1A"+(l?"\u524D\u65B9"+l+"\uFF0C\u7A33\u4F4F\u65B9\u5411\u3002":"\u4FDD\u6301\u8DEF\u7EBF\uFF0C\u65E0\u9700\u91CD\u590D\u6309 E / C\u3002"):x.speed>10&&(l?_="\u524D\u65B9"+l+"\uFF1A\u5148\u6536\u6CB9\u63A7\u901F\uFF0C\u5E73\u987A\u8F6C\u5411\u3002":x.nitro>0&&x.speed>15&&Math.abs(a.currentCurve)<.006?_="\u524D\u65B9\u76F4\u9053\uFF1A\u8F66\u8EAB\u7A33\u5B9A\u540E\uFF0C\u53EF\u9009 E / C \u6C2E\u6C14\u3002":_="\u524D\u65B9\u76F4\u9053\uFF1A\u7A33\u4F4F\u65B9\u5411\uFF0C\u7559\u610F\u4E0B\u4E00\u5F2F\u3002"),U("coach").textContent=_},Pu=function(){let a=nt.room?nt.members.filter(l=>l.id!==nt.id).map(l=>({name:l.name,time:l.snapshot?.finished?l.snapshot.time:null,s:l.snapshot?.s||0})):Yn.map(l=>({name:l.name,time:l.finishAt,s:l.s}));if(a.push({name:en.name+"\uFF08\u4F60\uFF09",time:Jr?null:k(),s:x.s}),a.sort((l,d)=>l.time===null&&d.time===null?d.s-l.s:l.time===null?1:d.time===null?-1:l.time-d.time),U("resultGrid").replaceChildren(),a.length>1)for(let l=0;l<a.length;l++){let d=document.createElement("div");d.className="result-row";let _=document.createElement("span"),T=document.createElement("b");_.textContent=l+1+". "+a[l].name,T.textContent=a[l].time===null?nt.room?.status==="racing"?"\u6BD4\u8D5B\u4E2D":"\u672A\u5B8C\u8D5B":j(a[l].time),d.append(_,T),U("resultGrid").appendChild(d)}},Qf=function(){if(Wi=!1,Pu(),Jr)U("resultDistance").textContent="DNF",U("resultNote").textContent="\u672C\u5C40\u672A\u80FD\u5728\u5012\u8BA1\u65F6\u7ED3\u675F\u524D\u5B8C\u8D5B\uFF0C\u53EF\u4EE5\u518D\u6311\u6218\u4E00\u6B21\u3002",U("submitRun").disabled=!0,Gr=null;else if(!nt.room&&ee==="circuit"&&oo.length>10&&(!Ei||k()<Ei.time))try{localStorage.setItem(Au(),JSON.stringify({time:k(),points:oo,splits:co,laps:Js,date:Date.now()})),U("resultNote").textContent="\u5237\u65B0\u672C\u673A\u6700\u4F73\uFF01\u5DF2\u4FDD\u5B58\u5E7D\u7075\uFF0C\u53EF\u5728\u8BA1\u65F6\u6311\u6218\u4E2D\u8FFD\u9010\u81EA\u5DF1\u3002"}catch{}U("coach").hidden=!0},tp=function(a,l){for(let d of Yn){let _=Te(d.s);d.node.local=V(f(Fe(d.s,d.l,.07),a),[.97,.97,.97],[0,-_.h-d.yaw,Math.atan(_.slope)]),Le.add(d.node);for(let T=0;T<wt.length;T++){let A=wt[T];d.node.children[2+T].local=I(L(A.x,.41,A.z),H(-d.s/.4))}}if(Ci&&Ei?.points?.length&&ie==="running"){let d=Ei.points,_=k();for(;ys<d.length-2&&d[ys+1][0]<_;)ys++;let T=d[ys],A=d[ys+1],C=N((_-T[0])/(A[0]-T[0]||1),0,1),O=z(T[1],A[1],C),B=z(T[2],A[2],C),Y=T[3]+bn(A[3]-T[3])*C,lt=Te(O);Ci.local=V(f(Fe(O,B,.07+z(T[4],A[4],C)),a),[.97,.97,.97],[0,-lt.h-Y,0]),Le.add(Ci)}if(an.line&&ie==="running")for(let d=0;d<Pc.length;d++){let _=x.s+12+d*9,T=Te(_),A=N(T.curv*80,-2.1,2.1),C=Pc[d];C.mesh=wu[Math.abs(T.curv)*x.speed>.95?1:0],C.local=V(f(Fe(_,A,.085),a),[1,1,1],[0,-T.h,0]),Le.add(C)}},ep=function(a,l){let d=a-Iu;if(Iu=a,d>0&&d<1e3&&Ks.push(d),Ks.length>180&&Ks.shift(),Lc+=l,Lc<.25)return;Lc=0;let _=Ks.reduce((C,O)=>C+O,0)/(Ks.length||1),T=[...Ks].sort((C,O)=>C-O),A=T[Math.floor(T.length*.95)]||0;U("diagnostics").textContent="REBORN / "+(r?"Canvas compatibility":"Three.js WebGL 2")+`
FPS `+Math.round(1e3/(_||16.7))+" | frame p95 "+A.toFixed(1)+` ms
Draw `+Rc.drawCalls+" | triangles "+Rc.triangles+`
State `+ie+" | event "+Ri+`
s `+x.s.toFixed(1)+" / "+Oi().toFixed(1)+" | l "+x.l.toFixed(2)+`
speed `+(x.speed*3.6).toFixed(1)+` km/h
steer `+Hs.toFixed(2)+" | slip "+(bn(x.yaw-x.velocityYaw)*180/Math.PI).toFixed(1)+`\xB0
drift `+x.driftPhase+" | small "+x.smallJets+" | nitro "+x.nitro+`
ready `+(nt.ready?"yes":"no")+" | peers "+nt.peers.size},np=function(a){if(Xi=null,Wi&&ie==="running"){let T=0;for(let xt=15;xt<=90;xt+=10)T=Math.max(T,Math.abs(Te(x.s+xt).curv));let A=N(.85/Math.max(.012,T),14,48),C=Te(x.s),O=Fe(x.s+N(x.speed*.45,12,26),0,0),B=f(O,Fe(x.s,x.l,0)),Y=Math.atan2(w(B,C.R),w(B,C.T)),lt=bn(Y-x.velocityYaw);Xi=N((lt*3+Te(x.s+12).curv*x.speed)/1.04,-1,1),Ie.brake=x.speed>A+1.5,Ie.gas=!Ie.brake;return}let l=navigator.getGamepads?.()[0];if(!l){Nc&&(zs(),Dc={},Nc=!1);return}Nc=!0,zs();let d=Math.abs(l.axes[0]||0)>.13?l.axes[0]:0;d&&(Xi=d);let _={gas:l.buttons[7]?.value>.13,brake:l.buttons[6]?.value>.13,drift:!!l.buttons[2]?.pressed,small:!!l.buttons[0]?.pressed,boost:!!l.buttons[1]?.pressed};for(let[T,A]of Object.entries(_))Ie[T]||=A,A&&!Dc[T]&&T in Xn&&Xn[T]++;Dc=_},Kr=function(){try{localStorage.setItem("star-rush-settings-reborn",JSON.stringify(an))}catch{}},uo=function(){en.name=U("profileName").value.trim().slice(0,16)||en.name;try{localStorage.setItem("star-rush-profile",JSON.stringify(en)),localStorage.setItem("star-rush-name",en.name)}catch{}U("carName").textContent=en.car;for(let a of["roomName","racerName","profileName"])U(a).value=en.name;U("profileStatus").textContent="\u5DF2\u4FDD\u5B58 \xB7 "+en.name,at.tint=en.paint},Uc=function(){for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).checked=!!an[l];U("qualitySetting").value=an.quality,U("steeringSetting").value=an.sensitivity*100,U("fovSetting").value=an.fov,U("settingsStatus").textContent=r?"\u5F53\u524D\u6D4F\u89C8\u5668\u4F7F\u7528\u517C\u5BB9\u663E\u793A\u6A21\u5F0F\uFF0C\u6BD4\u8D5B\u903B\u8F91\u548C\u64CD\u4F5C\u4FDD\u6301\u4E00\u81F4\u3002":"Three.js 3D \u6E32\u67D3 \xB7 \u8BBE\u7F6E\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5728\u6B64\u8BBE\u5907\u3002"},Du=function(){if(nt.room){Yr();return}Wi=!1,ie="ready",Qn(!1),Yn=[],Ci=null,ms(),U("welcome").hidden=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("coach").hidden=!0,Vi.classList.add("menu-open"),U("countdown").hidden=!0},sp=function(){for(let a of document.querySelectorAll("[data-track]")){let l=Gn[a.dataset.track],d=a.querySelector("svg");if(!l||!d)continue;let _=l.points.map(Mt=>Mt[0]),T=l.points.map(Mt=>Mt[2]),A=Math.min(..._),C=Math.max(..._),O=Math.min(...T),B=Math.max(...T),Y=Math.min(140/(C-A),54/(B-O)),lt=l.points.map(Mt=>[80+(Mt[0]-(A+C)/2)*Y,35+(Mt[2]-(O+B)/2)*Y]),xt=document.createElementNS("http://www.w3.org/2000/svg","path");xt.setAttribute("d",lt.map((Mt,Tt)=>(Tt?"L":"M")+Mt.join(",")).join(" ")+"Z"),xt.setAttribute("fill","none"),xt.setAttribute("stroke",l.biome?"#eabfd8":"#a9d8ec"),xt.setAttribute("stroke-width","3"),xt.setAttribute("stroke-linejoin","round"),d.replaceChildren(xt);let ft=document.createElementNS("http://www.w3.org/2000/svg","circle");ft.setAttribute("cx",lt[0][0]),ft.setAttribute("cy",lt[0][1]),ft.setAttribute("r","3"),ft.setAttribute("fill","#ffe2ac"),d.appendChild(ft)}},u=Math.PI,h=u*2,m=(a=0,l=0,d=0)=>[a,l,d],g=(a,l)=>a.map((d,_)=>d+l[_]),f=(a,l)=>a.map((d,_)=>d-l[_]),v=(a,l)=>a.map(d=>d*l),w=(a,l)=>a[0]*l[0]+a[1]*l[1]+a[2]*l[2],R=(a,l)=>[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],M=a=>Math.hypot(...a),p=a=>v(a,1/(M(a)||1)),N=(a,l,d)=>Math.min(d,Math.max(l,a)),z=(a,l,d)=>a+(l-a)*d,E=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),rt={green:"#7fb86c",light:"#a7d27d",dark:"#407750",spine:"#4c8056",belly:"#dfdb96",eye:"#fff2cf",iris:"#325f43",coral:"#df8064",rim:"#f2be8e",rubber:"#344b42",metal:"#b7c8b1",wood:"#b78c57",gold:"#d6b471",cream:"#f1ead2",grass:"#b7cc90",white:"#fff4d7",earth:"#b4976d",water:"#91c6b8",leaf:"#85ad74"},ye=new Map,Gt=qt(),oe=qt(12,8),kt=Yt(),ge=Yt(8),Ke=Yt(10,0),ve=Yt(4,0),ce=E();class le{constructor(){this.data=[],this.indices=[]}add(l,d=ce,_=rt.green,T=.13){let A=typeof _=="string"?et(_):_,C=it(d),O=this.data.length/10;for(let B=0;B<l.p.length;B+=3){let Y=K(d,l.p.slice(B,B+3)),lt=X(C,l.n.slice(B,B+3));this.data.push(...Y,...lt,...A,T)}for(let B of l.i)this.indices.push(O+B);return this}finish(l=!1){return new Me(this.data,this.indices,l)}}class Me{constructor(l,d){this.sourceData=new Float32Array(l),this.sourceIndices=new Uint32Array(d),this.count=d.length}update(l){this.sourceData=new Float32Array(l)}dispose(){this.onDispose&&this.onDispose()}}class de{constructor(l=null,d=ce){this.mesh=l,this.local=d,this.children=[],this.shadow=!0,this.world=ce}add(l){return this.children.push(l),l}}let Le=new de,Sn=new le,qe=new le,q=73121,at=Le.add(new de),gt=new le,Ct="#83cde4",ot="#eff0f6",ut="#9c8ad5",bt="#343952",Kt="#ed94bd",Pt="#f8d1b5",Et="#a3a9e5",Jt="#7479b7";P(gt,[0,.47,0],[3.15,.43,1.42],Ct,.16),P(gt,[.9,.68,0],[1.4,.27,1.42],ot,.13,[0,0,-.065],.5),P(gt,[.96,.83,0],[1.08,.035,.14],ut,.015,[0,0,-.065],.5),P(gt,[0,.38,0],[3.3,.15,1.48],bt,.07),P(gt,[1.53,.31,0],[.5,.075,1.9],ut,.035),P(gt,[-1.4,.39,0],[.45,.22,1.55],ut,.07);for(let a of[-.7,.7]){P(gt,[-.15,.64,a],[2.55,.35,.29],Ct,.12,[0,0,0],.45),P(gt,[.1,.81,a],[1.55,.05,.2],ot,.02),P(gt,[-.17,.69,a*1.19],[.62,.19,.032],bt,.02,[0,0,-.12]);for(let l=0;l<4;l++)P(gt,[-.38+l*.12,.69,a*1.22],[.035,.13,.015],"#758ab5",.007,[0,0,-.15]);P(gt,[1.54,.66,a*.75],[.055,.14,.33],"#fff0b9",.035,[0,0,-.1],.65),P(gt,[-1.57,.62,a*.79],[.035,.12,.28],Kt,.035,[0,0,0],.6),P(gt,[-1.32,.85,a*.83],[.07,.55,.07],bt,.02),P(gt,[-1.38,1.13,a*1.34],[.43,.16,.055],ut,.025)}P(gt,[1.6,.44,0],[.04,.15,.67],bt,.03);for(let a=0;a<5;a++)P(gt,[1.63,.44,(a-2)*.115],[.014,.1,.024],"#6d7990",.006);P(gt,[-1.37,1.12,0],[.38,.065,1.94],ot,.03),P(gt,[-1.37,1.16,0],[.18,.018,1.68],ut,.007),P(gt,[-.42,.77,0],[1.05,.08,.94],bt,.05),P(gt,[-.69,1,0],[.18,.53,.64],bt,.08,[0,0,-.12]),P(gt,[-.6,1.23,0],[.18,.15,.5],ut,.05),P(gt,[.28,.94,0],[.075,.26,.91],"#bedde9",.025,[0,0,-.33],.6);for(let a of[-.75,.75])Qt(gt,[.22,.91,a*.84],[.31,1.04,a*1.1],.018,bt),ne(gt,[.31,1.04,a*1.11],[.13,.055,.09],ot,!0,.6);Qt(gt,[.35,.82,0],[.1,1.08,0],.035,bt),gt.add(Pe(.16,.025,28,8),V([.1,1.08,0],[1,1,1],[0,u/2,-.35]),bt,.2);for(let a of[-.34,.34])gt.add(kt,V([-1.64,.43,a],[.085,.2,.085],[0,0,u/2]),"#9babc2",.75);ne(gt,[-.42,1.04,0],[.24,.29,.22],ut),ne(gt,[-.36,1.29,0],[.095,.1,.09],Pt,!0);for(let a of[-1,1]){let l=[-.38,1.17,a*.22],d=[-.13,1.02,a*.29],_=[.09,1.09,a*.14];Qt(gt,l,d,.075,ut,.14,!0),Qt(gt,d,_,.06,ut,.14,!0),ne(gt,_,[.085,.065,.065],ot,!0)}P(gt,[-.18,1.08,0],[.05,.31,.08],ot,.01);let te=at.add(new de(gt.finish()));te.mesh.paintable=!0;let Zt=new le;ne(Zt,[0,0,0],[.335,.355,.3],Pt),ne(Zt,[-.19,-.01,0],[.2,.35,.32],Jt),ne(Zt,[-.025,.19,0],[.37,.255,.33],Et);for(let a of[-1,1])ne(Zt,[-.035,-.04,a*.29],[.13,.28,.095],Et),ne(Zt,[.308,.025,a*.13],[.02,.1,.067],ot,!0),ne(Zt,[.326,.023,a*.13],[.012,.075,.043],"#5c72a5",!0,.4),ne(Zt,[.338,.015,a*.13],[.008,.048,.027],"#303c65",!0),ne(Zt,[.347,.058,a*.135],[.008,.02,.018],"#fffaf1",!0,.6),ne(Zt,[.296,-.1,a*.2],[.014,.038,.045],"#e9a6ab",!0),D(Zt,[[.32,.132,a*.075],[.322,.148,a*.13],[.31,.132,a*.19]],.011,Jt),be(Zt,[.215,.165,a*.18],[.1,.24,.085],Et,[0,0,u+.2]),Zt.add(Pe(.084,.014,24,7),V([.33,.24,a*.125],[1,1,1],[0,u/2,0]),"#e8c58c",.6),ne(Zt,[.335,.24,a*.125],[.012,.064,.066],"#a0d8e8",!0,.6);D(Zt,[[.317,-.148,-.037],[.326,-.16,0],[.317,-.148,.037]],.009,"#b77787"),Zt.add(Pe(.313,.02,40,7),V([-.025,.225,0],[1.05,1,1],[u/2,0,0]),bt),be(Zt,[.26,.17,-.04],[.1,.25,.08],Et,[0,0,u+.25]);let W=at.add(new de(Zt.finish())),wt=[];for(let a of[-1.02,1.06])for(let l of[-1,1]){let d=new le;d.add(Pe(.315,.095,40,12),ce,"#343b4c",.22),d.add(Pe(.255,.027,32,8),L(0,0,l*.075),"#e4e6ef",.7),d.add(kt,V([0,0,l*.07],[.238,.07,.238],[u/2,0,0]),"#4d5576",.35);for(let T=0;T<5;T++){let A=T*h/5;Qt(d,[0,0,l*.116],[.23*Math.cos(A),.23*Math.sin(A),l*.116],.025,ot,.65)}ne(d,[0,0,l*.14],[.075,.075,.022],ut,!0,.6);let _=at.add(new de(d.finish()));wt.push({n:_,x:a,z:l*.83,front:a>0})}let pt=[];for(let a of[-1,1]){let l=new le;ne(l,[0,0,0],[.65,.105,.105],"#a6f4ff",!0,.8),ne(l,[-.3,0,0],[.35,.065,.065],"#e9d1ff",!0,.7);let d=at.add(new de(l.finish()));d.shadow=!1,pt.push({n:d,side:a})}let At=new le;P(At,[0,.36,0],[.6,.72,2.1],"#ef97aa",.08),P(At,[0,.78,0],[.69,.16,2.2],ot,.035);for(let a=0;a<5;a++)P(At,[.312,.4,(a-2)*.38],[.018,.29,.16],"#fff0c7",.015,[.28,0,0]);for(let a of[-.85,.85])Qt(At,[0,.05,a],[0,.77,a],.045,"#636986");let Ft=At.finish(),St=new le;P(St,[0,.07,0],[.8,.12,.8],bt,.04),be(St,[0,.49,0],[.28,.78,.28],"#e4b281"),be(St,[0,.53,0],[.2,.16,.2],ot);let $t=St.finish(),Ht=new le;Ht.add(Pe(.34,.068,28,8),V([0,0,0],[1,1,1],[0,u/2,0]),"#f0d085",.7),ne(Ht,[0,0,0],[.04,.22,.22],"#ffe7a7",!0,.55);let ke=Ht.finish(),Ae=new le;P(Ae,[0,.025,0],[5.5,.045,3],"#7ecadc",.02);for(let a=0;a<3;a++){let l=-1.8+a*1.6;Qt(Ae,[l-.45,.075,-.9],[l+.35,.075,0],.055,"#eef9d0",.3),Qt(Ae,[l+.35,.075,0],[l-.45,.075,.9],.055,"#eef9d0",.3)}let Un=Ae.finish(),Cn=new le,Ir=[-2.5,0,-1.6,2.5,0,-1.6,2.5,1,-1.6,-2.5,0,1.6,2.5,0,1.6,2.5,1,1.6],Ti=[0,1,2,3,5,4,0,2,5,0,5,3,1,4,5,1,5,2],Ns=[],Us=[],Va=[];for(let a=0;a<Ti.length;a+=3){let l=Ir.slice(Ti[a]*3,Ti[a]*3+3),d=Ir.slice(Ti[a+1]*3,Ti[a+1]*3+3),_=Ir.slice(Ti[a+2]*3,Ti[a+2]*3+3),T=p(R(f(d,l),f(_,l))),A=Ns.length/3;Ns.push(...l,...d,..._),Us.push(...T,...T,...T),Va.push(A,A+1,A+2)}Cn.add(ht(Ns,Us,Va),ce,"#d9b1e0");for(let a of[-1.4,1.4])Qt(Cn,[-2.5,.06,a],[2.5,1.06,a],.045,ot);let Ga=Cn.finish(),Ha=new le().add(oe,ce,"#b4eaff",.2).finish(),Vn=Array.from({length:45},()=>({life:0,p:[0,0,0],v:[0,0,0],size:.1,node:new de(Ha)}));for(let a of Vn)a.node.shadow=!1;let ee="circuit",Qe="coast-reborn",us="coast-reborn",Gn={"coast-reborn":{name:"\u6C50\u89C1\u6D77\u5CB8",laps:1,biome:0,difficulty:"\u5165\u95E8 \xB7 \u9AD8\u901F\u7EC4\u5408\u5F2F",description:"\u6C50\u89C1\u7AD9\u524D \u2192 \u6D77\u6EE8\u5546\u5E97\u8857 \u2192 \u795E\u793E\u5C71\u9053 \u2192 \u6E2F\u6E7E S \u5F2F",sectors:[{at:0,name:"\u6C50\u89C1\u7AD9\u524D"},{at:.22,name:"\u6D77\u6EE8\u5546\u5E97\u8857"},{at:.48,name:"\u6E2F\u6E7E S \u5F2F"},{at:.66,name:"\u795E\u793E\u5C71\u9053"},{at:.82,name:"\u6D77\u98CE\u5927\u9053"}],points:[[-155,0,70],[-80,0,70],[0,.2,70],[85,.7,65],[135,1.2,30],[130,1.6,-20],[75,2,-28],[38,1.8,0],[0,1.5,-10],[8,.8,-58],[65,.2,-80],[115,0,-85],[130,.4,-125],[75,1,-150],[0,1.6,-145],[-60,2,-100],[-110,1.2,-135],[-155,.5,-100],[-200,0,-25],[-218,0,28],[-215,0,70]]},"sakura-reborn":{name:"\u82B1\u89C1\u5742",laps:2,biome:1,difficulty:"\u8FDB\u9636 \xB7 \u8FDE\u7EED\u53CD\u5411\u5F2F",description:"\u6A31\u82B1\u6821\u95E8 \u2192 \u82B1\u89C1\u5742\u5546\u5E97\u8857 \u2192 \u795E\u793E\u53C2\u9053 \u2192 \u6CB3\u5CB8\u56DE\u73AF",sectors:[{at:0,name:"\u6A31\u82B1\u7AD9\u524D"},{at:.22,name:"\u82B1\u89C1\u5742\u5546\u5E97\u8857"},{at:.47,name:"\u6CB3\u5CB8\u56DE\u73AF"},{at:.66,name:"\u795E\u793E\u53C2\u9053"},{at:.83,name:"\u6A31\u82B1\u5927\u9053"}],points:[[-180,0,70],[-95,0,70],[0,0,70],[95,.4,62],[170,1,16],[160,1.6,-45],[100,2,-70],[55,2.2,-30],[5,2,-55],[-16,1,-110],[-80,.5,-130],[-145,0,-104],[-220,0,-45],[-230,0,25],[-230,0,70]]}};Gn["academy-reborn"]={name:"\u661F\u8DC3\u8BAD\u7EC3\u573A",laps:1,biome:1,difficulty:"\u57FA\u7840\u9A7E\u9A76",description:"\u5BBD\u7F13\u5F2F\u9053 \xB7 \u6E05\u6670\u89C6\u91CE \xB7 \u7EC3\u4E60\u8D77\u6F02\u3001\u53CD\u6253\u4E0E\u51FA\u5F2F\u55B7\u5C04",sectors:[{at:0,name:"\u57FA\u7840\u76F4\u9053"},{at:.33,name:"\u6F02\u79FB\u5F27\u7EBF"},{at:.66,name:"\u51FA\u5F2F\u52A0\u901F"}],points:[[-100,0,65],[0,0,65],[100,0,65],[145,.3,25],[145,.4,-25],[100,.2,-65],[0,0,-65],[-100,0,-65],[-145,.1,-25],[-145,.1,25]]};for(let[a,l]of Object.entries(Gn)){let d=a==="coast-reborn"?1.45:a==="sakura-reborn"?1.5:1.2;l.points=l.points.map(_=>[_[0]*d,_[1],_[2]*d])}let sn=[],De=0,Fs={};Wa();let Z=220,Dt=245,Bt=1.57,Rt=.91,Wt=8.045,zt=(a,l)=>a[0]*l[0]+a[1]*l[1],he=(a,l)=>a[0]*l[1]-a[1]*l[0],Ue=new Map,ui=null,tu=null,cc=[],bf=rn("petal",a=>P(a,[0,0,0],[.12,.025,.075],"#ffd2e8",.025)),ze=null,Wn=!0,Cf=(()=>{let a=(A,C,O)=>Math.min(O,Math.max(C,A)),l=(A,C,O)=>A+(C-A)*O,d=A=>Math.atan2(Math.sin(A),Math.cos(A)),_=Object.freeze({cruise:52,mini:63,nitro:76,combo:83,normalTurn:1.04,driftTurn:1.8,driveAcceleration:27,jetAcceleration:36});function T(A,C,O,B={}){let Y=Math.hypot(A.vS,A.vL),lt=Y>.05?Math.atan2(A.vL,A.vS):A.yaw,xt=a(Number(C.steer)||0,-1,1),ft=B.sensitivity||1,Mt=A.vS*Math.cos(A.yaw)+A.vL*Math.sin(A.yaw)<-.05;A.steering=l(A.steering||0,xt,1-Math.exp(-O*26));let Tt=!!A.drifting,It=A.driftSide||Math.sign(xt)||1,_e=Tt&&xt*It<-.1,_t=Tt&&A.driftReleasing,vt=A.steering*_.normalTurn*ft*a(Y/8,0,1)*(Mt?-1:1);if(Tt){let rp=Math.max(0,A.steering*It),ap=It*(_e?.4:.52+rp*(_.driftTurn-.52)),op=_t?a((A.releaseAge||0)/.38,0,1):0;vt=l(ap,vt,op)*a(Y/9,0,1)}A.jump>.2&&(vt*=.35),A.turnRate=l(A.turnRate||0,vt,1-Math.exp(-O*(Tt?13:19)));let Lt=d(lt+A.turnRate*O),Vt=d(lt-(Mt?Math.PI:0)),Ut=d(A.yaw-Vt),fe=Tt?It*(_e?.015:_t?.12:.22+.38*Math.max(0,xt*It)):A.steering*.025;_t&&(fe*=1-a((A.releaseAge||0)/.45,0,1));let Tn=_e?13:Tt?9:8;Ut=l(Ut,fe,1-Math.exp(-O*Tn)),A.yaw=d(Lt-(Mt?Math.PI:0)+Ut+(A.spin||0)*O),A.spin=(A.spin||0)*Math.exp(-O*6);let We=Y,wn=.7+Y*.018+Y*Y*45e-5,$e=A.nitroTime>0||A.mini>0||A.pad>0,Ss=A.nitroTime>0?A.comboTimer>0?_.combo:_.nitro:A.pad>0?73:A.mini>0?_.mini:_.cruise,$s=C.gas&&!C.brake?a((_.cruise-We)*2.8,0,_.driveAcceleration):0,js=$e&&!C.brake?a((Ss-We)*2.8,0,_.jetAcceleration):0,qi=Tt?(_e?1.3:3.3)*Math.abs(Ut):0;return We=Math.max(0,We+($s+js-wn-qi)*O),!$e&&We>_.cruise&&(We=Math.max(_.cruise,We-Math.min(8,(We-_.cruise)*.7)*O)),C.brake&&(We=Math.max(0,We-36*O)),Mt&&C.gas&&(We=Math.max(0,We-32*O)),C.brake&&!C.gas&&(Y<1.3||Mt)?(A.vS=l(A.vS,-Math.cos(A.yaw)*5,1-Math.exp(-O*5)),A.vL=l(A.vL,-Math.sin(A.yaw)*5,1-Math.exp(-O*5))):(A.vS=Math.cos(Lt)*We,A.vL=Math.sin(Lt)*We),A.speed=Math.hypot(A.vS,A.vL),A.velocityYaw=Lt,A.lateralSpeed=A.vL,{slip:Ut,counter:_e,thrust:js,boost:$e,speed:A.speed}}return{step:T,config:_,wrap:d}})(),bn=a=>Math.atan2(Math.sin(a),Math.cos(a)),U=a=>document.getElementById(a),Vi=U("game"),Ie={gas:!1,brake:!1,left:!1,right:!1,drift:!1,boost:!1,small:!1},Ja=new Set,Za=new Map,Xn={drift:0,boost:0,small:0},dc=[{name:"\u6C50\u89C1\u6D77\u5CB8",ground:"#cbdcbd",tree:"#b9d5bb",accent:"#afc8e4",fog:"#c8deef"},{name:"\u82B1\u89C1\u5742",ground:"#d9d7c7",tree:"#f0bfd5",accent:"#c9c1e5",fog:"#dcdff1"},{name:"\u661F\u5149\u5CE1\u8C37",ground:"#c4b8c3",tree:"#a7a5d3",accent:"#d8b4d8",fog:"#dbdce8"}],x={s:0,l:0,speed:0,yaw:0,velocityYaw:0,energy:0,coins:0,score:0,inv:0,pad:0,mini:0,jump:0,vy:0,driftCharge:0,drifting:!1,boostActive:!1,checkpoint:500,driftSide:0,boostBlend:0,lateralSpeed:0,wallRecover:0,wallSide:0,stuckTime:0},Ka=1/120,Ux=7.02,iu=new Map,fc=null,ds=0,ks=60,Nr=0,fs=null,Df=new le().add(Se(1,.009,.12,.003),ce,"#414957",.01).finish(),ps=Array.from({length:160},()=>({life:0,p:[0,0,0],angle:0,length:1,node:new de(Df)}));for(let a of ps)a.node.shadow=!1;let Nf=0,ie="ready",Vs=(Date.now()>>>0)%999999||24681,$a=1,$n=[],Ur=0,pc=-u/2,mc=100,ja=0,hn=new Map,gc=0,di=0,Gs=0,Qa=performance.now(),Gi=3,qn=0,Hs=0,Fr=0,Or=0,su=!1,to=!1,Br=0,eo=0;try{Br=Number(localStorage.getItem("star-rush-best-distance")||0),eo=Number(localStorage.getItem("star-rush-best-score")||0)}catch{}let fi=Object.fromEntries(["distance","score","coins","speed","gear","energyText","biome","turnText","turnArrowPath","driftText"].map(a=>[a,U(a)])),Xs=null,zr=null,gs=null,yc=U("minimap"),jt=yc.getContext("2d"),Mc=0,no={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"small",KeyQ:"small",ShiftLeft:"drift",ShiftRight:"drift",KeyE:"boost",KeyC:"boost"};window.addEventListener("keydown",a=>{if(!a.target.closest("input,select,textarea")){if(a.code==="Escape"){for(let l of["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"])if(!U(l).hidden){vs(l);return}}if(!["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)){if(no[a.code]&&(a.preventDefault(),Ja.add(a.code),zs()),a.code==="Backspace"){a.preventDefault(),a.repeat||vc(!1);return}a.repeat||(a.code==="F2"&&(a.preventDefault(),U("diagnostics").hidden=!U("diagnostics").hidden),(a.code==="KeyP"||a.code==="Escape")&&Hi(),a.code==="KeyV"&&(qn=(qn+1)%3,mn("CAMERA "+(qn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][qn],1)),a.code==="KeyR"&&Ws(!1),a.code==="Enter"&&(ie==="ready"||ie==="finished"?Ws(!1):ie==="paused"&&Hi()))}}}),window.addEventListener("keyup",a=>{["helpPanel","musicPanel","roomPanel","rankPanel","garagePanel","settingsPanel"].some(l=>!U(l).hidden)||no[a.code]&&(a.preventDefault(),Ja.delete(a.code),zs())}),window.addEventListener("blur",()=>{ms(),ie==="running"&&Hi()});for(let a of document.querySelectorAll("[data-key]")){a.addEventListener("pointerdown",d=>{d.preventDefault(),a.setPointerCapture(d.pointerId),Za.set(d.pointerId,a.dataset.key),zs(),a.classList.add("held")});let l=d=>{Za.delete(d.pointerId),zs(),a.classList.remove("held")};for(let d of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(d,l)}U("endRunBtn").onclick=()=>{ee==="endless"&&(ie==="running"||ie==="paused")&&(U("paused").hidden=!0,xc())},U("recoverBtn").onclick=()=>vc(!1),U("startBtn").onclick=()=>Ws(!1),U("retryBtn").onclick=()=>Ws(!1),U("newRouteBtn").onclick=()=>{if(typeof nt<"u"&&nt.room){Yr();return}ie="ready",Qn(!0),U("finished").hidden=!0,U("welcome").hidden=!1},U("rerollBtn").onclick=()=>Qn(!0),U("pauseBtn").onclick=Hi,U("resumeBtn").onclick=Hi,U("restartPause").onclick=()=>Ws(!1),U("viewBtn").onclick=()=>{qn=(qn+1)%3,mn("CAMERA "+(qn+1),["\u8FFD\u5C3E\u955C\u5934","\u9AD8\u4F4D\u955C\u5934","\u8FD1\u666F\u955C\u5934"][qn],1)},U("soundBtn").onclick=()=>{qa(),Wn=!Wn,ze&&ze.ctx.resume().catch(()=>{}),U("soundBtn").textContent=Wn?"\u266B":"\u266A",U("soundBtn").setAttribute("aria-label",Wn?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"),U("soundBtn").title=Wn?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u58F0\u97F3\u5DF2\u5173\u95ED",Wn&&ki(600)};let Vf=["#a1cddd","#c2d4bc"].map(a=>new le().add(Se(1100,.16,1100,.04),ce,a,.02).finish()),io=new de,Sc=[],kr=1,Vr=1;new ResizeObserver(uu).observe(i),uu(),Qn(!1),i.addEventListener("webglcontextlost",a=>{a.preventDefault(),n("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6062\u590D\u6E38\u620F\u3002")}),document.addEventListener("visibilitychange",()=>{document.hidden&&ie==="running"&&Hi(),Qa=performance.now()}),requestAnimationFrame(du);let _s=Qe,Gr=null,wi="circuit",Ai=!1,bc=0;async function Hr(){let a=++bc,l=U("rankRows");U("rankTrack")&&(U("rankTrack").hidden=wi!=="circuit"),l.replaceChildren(),U("rankStatus").textContent=Ai?"\u672C\u673A\u8BB0\u5F55":"\u6B63\u5728\u83B7\u53D6\u5728\u7EBF\u6210\u7EE9\u2026";for(let[d,_]of[["boardCircuit","circuit"],["boardEndless","endless"]])U(d).classList.toggle("selected",!Ai&&wi===_);U("boardLocal").classList.toggle("selected",Ai);try{let d;if(Ai)d=fu().filter(_=>_.mode===wi&&(_.mode==="endless"||_.track===_s)).sort((_,T)=>wi==="circuit"?_.timeMs-T.timeMs:T.distance-_.distance).slice(0,20);else{let _=await fetch("/api/leaderboard?mode="+wi+"&track="+encodeURIComponent(_s));if(!_.ok)throw new Error("\u699C\u5355\u670D\u52A1\u6682\u4E0D\u53EF\u7528");d=(await _.json()).runs}if(a!==bc)return;for(let _=0;_<d.length;_++)l.appendChild(Hf(_,d[_]));U("rankStatus").textContent=d.length?(Ai?"\u5F53\u524D\u8BBE\u5907 \xB7 ":"\u5728\u7EBF \xB7 ")+(wi==="circuit"?Gn[_s].name+" / "+Gn[_s].laps+" \u5708 / \u6309\u6700\u5FEB\u7528\u65F6":"\u65E0\u5C3D\u6A21\u5F0F / \u6309\u6700\u8FDC\u91CC\u7A0B"):"\u8FD8\u6CA1\u6709\u6210\u7EE9\uFF0C\u6765\u8DD1\u7B2C\u4E00\u5708\u3002"}catch{if(a!==bc)return;U("rankStatus").textContent="\u5728\u7EBF\u699C\u6682\u65F6\u672A\u80FD\u52A0\u8F7D\uFF0C\u53EF\u5207\u6362\u201C\u672C\u673A\u8BB0\u5F55\u201D\u3002"}}U("rankBtn").onclick=Wf,U("closeRank").onclick=()=>vs("rankPanel"),U("boardCircuit").onclick=()=>{wi="circuit",Ai=!1,Hr()},U("boardEndless").onclick=()=>{wi="endless",Ai=!1,Hr()},U("boardLocal").onclick=()=>{Ai=!0,Hr()},U("circuitMode").onclick=()=>pu("circuit"),U("endlessMode").onclick=()=>pu("endless");try{U("racerName").value=localStorage.getItem("star-rush-name")||""}catch{}U("submitRun").onclick=async()=>{if(!Gr)return;let a=U("racerName").value.trim().slice(0,16)||"\u533F\u540D\u8F66\u624B";try{localStorage.setItem("star-rush-name",a)}catch{}U("submitRun").disabled=!0,U("uploadStatus").textContent="\u6B63\u5728\u4E0A\u4F20\u6210\u7EE9\u2026";try{if(!(await fetch("/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...Gr,name:a})})).ok)throw new Error;U("submitRun").textContent="\u5DF2\u4E0A\u4F20",U("uploadStatus").textContent="\u4E0A\u4F20\u6210\u529F\uFF01\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u699C\u201D\u67E5\u770B\u548C\u670B\u53CB\u7684\u6392\u540D\u3002"}catch{U("submitRun").disabled=!1,U("uploadStatus").textContent="\u6682\u65F6\u672A\u80FD\u4E0A\u4F20\uFF0C\u672C\u673A\u6210\u7EE9\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u91CD\u8BD5\u3002"}};for(let a of document.querySelectorAll("[data-track]"))a.onclick=()=>mu(a.dataset.track);Wr();let qs=document.createElement("select");qs.id="rankTrack",qs.setAttribute("aria-label","\u6392\u884C\u699C\u8D5B\u9053");for(let[a,l]of Object.entries(Gn)){let d=document.createElement("option");d.value=a,d.textContent=l.name,qs.appendChild(d)}U("rankStatus").before(qs),qs.onchange=()=>{_s=qs.value,Hr()};let Pn={enabled:!0,volume:.4,sfxVolume:.75};try{Object.assign(Pn,JSON.parse(localStorage.getItem("star-rush-audio")||"{}"))}catch{}let re={mode:"synth",bus:null,step:0,next:0,files:[],index:0,url:null,element:null},qr=!1;U("musicBtn").onclick=()=>{Xr(),Ys("musicPanel")},U("closeMusic").onclick=()=>vs("musicPanel"),U("helpBtn").onclick=U("welcomeHelp").onclick=()=>Ys("helpPanel"),U("closeHelp").onclick=()=>vs("helpPanel"),U("synthMusic").onclick=()=>so("synth"),U("classicMusic").onclick=()=>so("classic"),U("musicFiles").onchange=a=>{re.files=Array.from(a.target.files||[]),ro(0)},U("nextSong").onclick=()=>ro(re.index+1),U("previousSong").onclick=()=>ro(re.index-1),U("musicToggle").onclick=()=>{Xr(),Pn.enabled=!Pn.enabled,U("musicToggle").textContent=Pn.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",Tc()},U("musicVolume").value=Math.round(Pn.volume*100),U("sfxVolume").value=Math.round(Pn.sfxVolume*100),U("musicToggle").textContent=Pn.enabled?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u97F3\u4E50",U("musicVolume").oninput=a=>{Pn.volume=Number(a.target.value)/100,Tc()},U("sfxVolume").oninput=a=>{Pn.sfxVolume=Number(a.target.value)/100,Tc()},U("classicTrack").onchange=()=>{so("classic"),U("spotifyPlayer").src="https://open.spotify.com/embed/track/"+U("classicTrack").value+"?utm_source=generator&theme=0"};let nt={id:crypto.randomUUID(),room:null,members:[],ready:!1,busy:!1,lastSync:0,offset:0,startAt:0,runTag:0,peers:new Map,errors:0,rtt:0,session:0},ao=["#f6aec9","#ffd88b","#baafff","#a8efce"],qf=ao.map(a=>{let l=new le;return be(l,[0,2.55,0],[.14,.28,.14],a,[0,0,u]),l.finish()});async function Ac(a,l={}){let d=Date.now(),_=await fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:a,id:nt.id,code:nt.room?.code||U("roomCode").value.trim(),name:U("roomName").value.trim()||"\u533F\u540D\u8F66\u624B",track:Qe,...l}),signal:AbortSignal.timeout(4e3)}),T=await _.json();if(!_.ok)throw new Error(T.error||"\u623F\u95F4\u8BF7\u6C42\u5931\u8D25");if(nt.rtt=Date.now()-d,T.serverTime){let A=T.serverTime-(d+Date.now())/2;nt.offset=nt.room?z(nt.offset,A,.25):A}return T}async function vu(a){if(!nt.busy){nt.busy=!0,U("roomStatus").textContent="\u6B63\u5728\u8FDE\u63A5\u623F\u95F4\u2026";try{let l=await Ac(a);nt.session++,xu(),Qe=l.room.track,ee="circuit",Qn(!1),Wr(),Ec(l),ie="ready",qr=!1,U("paused").hidden=!0,U("finished").hidden=!0,U("welcome").hidden=!1,Vi.classList.add("menu-open");try{localStorage.setItem("star-rush-name",U("roomName").value.trim())}catch{}}catch(l){U("roomStatus").textContent=l.message}finally{nt.busy=!1}}}async function yu(a,l={}){if(nt.busy)return;nt.busy=!0;let d=nt.session;try{let _=await Ac(a,l);d===nt.session&&nt.room&&Ec(_)}catch(_){U("roomStatus").textContent=_.message}finally{nt.busy=!1}}async function Jf(){if(!nt.room)return;let a={action:"leave",id:nt.id,code:nt.room.code,name:U("roomName").value};nt.session++,nt.room=null,nt.startAt=0,nt.runTag=0,nt.members=[],xu(),ie="ready",Qn(!1),U("finished").hidden=!0,U("paused").hidden=!0,U("countdown").hidden=!0,U("welcome").hidden=!1,Vi.classList.add("menu-open"),Cc(),fetch("/api/rooms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),keepalive:!0}).catch(()=>{})}U("roomBtn").onclick=U("welcomeRoom").onclick=Yr,U("closeRoom").onclick=()=>vs("roomPanel"),U("createRoom").onclick=()=>vu("create"),U("joinRoom").onclick=()=>vu("join"),U("readyRoom").onclick=()=>yu("ready",{ready:!nt.ready}),U("startRoom").onclick=()=>yu(nt.room?.status!=="lobby"?"reset":"start"),U("leaveRoom").onclick=Jf,U("copyRoom").onclick=async()=>{if(!nt.room)return;let a=new URL(location.href);a.searchParams.set("room",nt.room.code);try{await navigator.clipboard.writeText(a.toString()),U("roomStatus").textContent="\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53D1\u7ED9\u670B\u53CB\u5373\u53EF\u52A0\u5165"}catch{U("roomStatus").textContent="\u623F\u95F4\u7801 "+nt.room.code+" \xB7 \u590D\u5236\u6D4F\u89C8\u5668\u5730\u5740\u5E76\u52A0\u4E0A ?room="+nt.room.code}};try{U("roomName").value=localStorage.getItem("star-rush-name")||"\u8F66\u624B"+Math.floor(100+Math.random()*900)}catch{}let bu=new URLSearchParams(location.search).get("room");bu&&(U("roomCode").value=bu.toUpperCase().slice(0,6),Yr()),window.addEventListener("pagehide",()=>{nt.room&&navigator.sendBeacon("/api/rooms",new Blob([JSON.stringify({action:"leave",id:nt.id,code:nt.room.code})],{type:"application/json"}))});let Yn=[],Wi=!1,Xi=null,Rc={drawCalls:0,triangles:0},Jr=!1,Ei=null,Ci=null,ys=0,oo=[],lo=0,co=[],Js=[],Ms=1,Zr=1,Zs=null,ho=0,Kf=["Aoi / AI","Haru / AI","Rin / AI"],Tu=["#f0a7c8","#b6a7e6","#f1cd90"],wu=["#a5dbe6","#f0b7c3"].map(a=>{let l=new le;return Qt(l,[-.6,.03,-.38],[.1,.03,0],.055,a),Qt(l,[.1,.03,0],[-.6,.03,.38],.055,a),l.finish()}),Pc=Array.from({length:9},()=>new de(wu[0]));for(let a of Pc)a.shadow=!1;let Ks=[],Lc=0,Iu=performance.now(),Dc={},Nc=!1,Lu={quality:"auto",sensitivity:1,fov:62,autoGas:!1,line:!0,ghost:!0},an={...Lu},en={name:"\u8F66\u624B"+Math.floor(100+Math.random()*900),paint:"#83cde4",car:"Mint Comet"},Ri="race";try{Object.assign(an,JSON.parse(localStorage.getItem("star-rush-settings-reborn")||"{}")),Object.assign(en,JSON.parse(localStorage.getItem("star-rush-profile")||"{}")),en.name=localStorage.getItem("star-rush-name")||en.name}catch{}let ip=[["Mint Comet","#83cde4","\u8584\u8377\u5F57\u661F"],["Sakura Bloom","#efabc8","\u6A31\u82B1\u7EFD\u653E"],["Violet Hour","#b1a0df","\u66AE\u8272\u7D2B"],["Solar Flare","#edc784","\u65E5\u5149\u91D1"]];U("settingsBtn").onclick=()=>{Uc(),Ys("settingsPanel")},U("closeSettings").onclick=()=>vs("settingsPanel");for(let[a,l]of[["autoGasSetting","autoGas"],["lineSetting","line"],["ghostSetting","ghost"]])U(a).onchange=d=>{an[l]=d.target.checked,Kr()};U("qualitySetting").onchange=a=>{an.quality=a.target.value,Kr()},U("steeringSetting").oninput=a=>{an.sensitivity=Number(a.target.value)/100,Kr()},U("fovSetting").oninput=a=>{an.fov=Number(a.target.value),Kr()},U("resetSettings").onclick=()=>{an={...Lu},Kr(),Uc()};for(let[a,l,d]of ip){let _=document.createElement("button");_.type="button",_.style.setProperty("--paint",l),_.setAttribute("aria-label",d+"\u6D82\u88C5");let T=document.createElement("i"),A=document.createElement("b"),C=document.createElement("small");A.textContent=a,C.textContent=d,_.append(T,A,C),_.onclick=()=>{en.paint=l,en.car=a;for(let O of U("garageGrid").children)O.classList.toggle("selected",O===_);uo()},en.paint===l&&_.classList.add("selected"),U("garageGrid").appendChild(_)}U("garageBtn").onclick=()=>Ys("garagePanel"),U("closeGarage").onclick=()=>vs("garagePanel"),U("saveProfile").onclick=uo,U("profileName").value=en.name,uo(),U("eventType").onchange=a=>{Ri=a.target.value,Ri==="practice"&&mu("academy-reborn")},U("pauseHome").onclick=Du,U("newRouteBtn").onclick=Du,U("demoBtn").onclick=()=>{Ws(!1),Wi=!0,mn("DEMO DRIVE","\u81EA\u52A8\u8BD5\u9A7E \xB7 \u6309\u4EFB\u610F\u65B9\u5411\u952E\u63A5\u7BA1",2)},window.addEventListener("keydown",a=>{a.target.closest("input,select,textarea")||["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a.code)&&Wi&&(Wi=!1,Xi=null,mn("YOUR TURN","\u5DF2\u63A5\u7BA1\u8D5B\u8F66",1))}),U("compatNotice").hidden=!r,sp(),Uc(),Ic();for(let a of["racerName","roomName"])U(a).addEventListener("change",()=>{U("profileName").value=U(a).value,uo()});yf(document,{"coast-reborn":"/assets/course-art/coast-v2.bd2e4837727f.webp","sakura-reborn":"/assets/course-art/sakura-v1.3b94eedaa6d8.webp","academy-reborn":"/assets/course-art/academy-v1.9c6071e18e14.webp"})}catch(c){console.error(c),n("\u6E38\u620F\u521D\u59CB\u5316\u5F02\u5E38\uFF1A"+c.message)}})();})();
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
