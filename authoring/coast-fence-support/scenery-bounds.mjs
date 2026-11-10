import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
const pins={
 'scenery.js':'c5dd2cd662d85ceff0cc8b4c99848698362b0383f5c6febd01e74e0793a265e6',
 'engine.js':'baa90e01c1eee30ba88ee1316a7a390a168415826208f379b2b608c4b89d505a',
 'circuit.js':'3ffe538eb89f13ca2373d001ce152658e52155db8a172ebe75d0e283f16e4147'
};
export function sceneryContext(read=p=>fs.readFileSync(p,'utf8')){
 const sources=Object.fromEntries(Object.keys(pins).map(p=>[p,read(p)]));
 for(const [p,hash] of Object.entries(pins))if(createHash('sha256').update(sources[p]).digest('hex')!==hash)throw Error(`Unproven scenery source: ${p}`);
 // quad has no effect on placement. Use the actual implementation, and hash it in report provenance.
 const quad=read('race.js').split('\n').find(l=>l.startsWith('function quad('));
 if(createHash('sha256').update(quad).digest('hex')!=='c02f929af91f3b79b5365a725c6c8124ba6ba855e9400b949b767bb27870ceb1')throw Error('Unproven quad source');
 const context=vm.createContext({});
 vm.runInContext(`const roadDriving=true;${sources['engine.js']}\n${quad}\n${sources['circuit.js']}\n${sources['scenery.js']}\nactiveTrackId='coast-reborn';rebuildCircuit();function road(s){return circuitRoad(s)}function atRoad(s,l,y=0){const r=road(s);return add(r.p,add(mul(r.R,l),[0,y,0]))}function wrapAngle(a){return Math.atan2(Math.sin(a),Math.cos(a))}sceneryClear=()=>true;this.chunkCount=Math.ceil(CIRCUIT_LENGTH/40);`,context);
 return {context,pins:{...pins,'quad':createHash('sha256').update(quad).digest('hex')}};
}
export function sceneryVertices(context,position,scale){
 if(![position,scale].every(x=>Number.isFinite(x)&&x>=0&&x<=1))throw Error('Random range must be [0,1]');
 return vm.runInContext(`Array.from({length:chunkCount},(_,k)=>{let draw=0;return decorateChunk(k,[0,0,0],()=>draw++%2?${scale}:${position}).children.map(n=>{const a=[];if(Array.from(n.local.slice(0,12)).some(x=>Math.abs(x)>2))throw Error("Matrix envelope exceeded");for(let i=0;i<n.mesh.sourceData.length;i+=10){const v=Array.from(n.mesh.sourceData.slice(i,i+3));if(v.some(x=>Math.abs(x)>30))throw Error("Mesh envelope exceeded");a.push(transform(n.local,v))}return a})})`,context);
}
export function proveSceneryBounds(read){
 const {context,pins}=sceneryContext(read),bounds=[];
 // In the pinned decorateChunk, only houses read rr: lateral offset and uniform
 // scale are independent affine terms. Yaw and s do not depend on either rr.
 // Every transformed vertex is affine in both inputs, so its coordinate extrema
 // lie on these four corners. Disabling sceneryClear retains all potential props;
 // disabling the optional coastal layer retains even replaced original houses.
 for(const p of [0,1])for(const s of [0,1]){
  const chunks=sceneryVertices(context,p,s);
  for(let k=0;k<chunks.length;k++)for(let j=0;j<chunks[k].length;j++){
   const id=`${k}/${j}`;let b=bounds.find(x=>x.id===id);
   if(!b){b={id,minX:Infinity,maxX:-Infinity,minZ:Infinity,maxZ:-Infinity};bounds.push(b)}
   for(const v of chunks[k][j]){if(v.some(x=>!Number.isFinite(x)||Math.abs(x)>2000))throw Error('Numerical envelope exceeded');b.minX=Math.min(b.minX,v[0]);b.maxX=Math.max(b.maxX,v[0]);b.minZ=Math.min(b.minZ,v[2]);b.maxZ=Math.max(b.maxZ,v[2]);}
  }
 }
 // Float32 matrix construction rounds each entry. A 1mm outward pad exceeds
 // float32 error for this pinned < 2km circuit / < 30m mesh envelope.
 for(const b of bounds){for(const key of ['minX','minZ'])b[key]-=.001;for(const key of ['maxX','maxZ'])b[key]+=.001;if(!Object.values(b).slice(1).every(Number.isFinite))throw Error('Nonfinite bound')}
 return {coverage:'complete-conservative',chunkCount:context.chunkCount,pins,bounds};
}
