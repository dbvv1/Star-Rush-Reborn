import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {applySignboardStyle,loadSignboardStyles} from '../signboard-assets.mjs';
function fixture(variant='baseline'){
 const scenery=applySignboardStyle(readFileSync('scenery.js','utf8'),loadSignboardStyles()[variant]);
 const sign=scenery.slice(scenery.indexOf('function signBoard('),scenery.indexOf('function scenicProp('));
 const scope={};vm.createContext(scope);
 vm.runInContext(readFileSync('engine.js','utf8')+'\n'+sign+'\n'+readFileSync('software-renderer.js','utf8')+`\nconst left=new Collector(),right=new Collector();signBoard(left,'left');signBoard(right,'right');api={left:left.finish(),right:right.finish(),translation,softwareSignboards,drawSoftwareSign,norm,cross,sub,dot};`,scope);
 return scope.api;
}
const project=p=>p[2]+20<.25?null:[400+p[0]*10,300-p[1]*10,p[2]+20,10];
test('Canvas consumes the original left/right vertices, indices and authored colors',()=>{
 for(const variant of ['baseline','navy-v1','navy-v2']){
  const q=fixture(variant),meshes=[q.left,q.right];
  const signs=q.softwareSignboards(meshes.map((mesh,i)=>({mesh,m:q.translation(i*4,0,30)})),meshes,project,800,600,[0,0,-20]);
  assert.equal(signs.length,2);
  for(let side=0;side<2;side++){
   const sign=signs[side],mesh=meshes[side];assert.equal(sign.triangles.length,524);
   const expected=[];for(let i=0;i<mesh.sourceIndices.length;i+=3){
    const p=Array.from(mesh.sourceIndices.slice(i,i+3),index=>project([mesh.sourceData[index*10]+side*4,mesh.sourceData[index*10+1],mesh.sourceData[index*10+2]+30]));
    expected.push(p);
   }
   const normalize=values=>values.map(v=>JSON.stringify(v)).sort();
   assert.deepEqual(normalize(Array.from(sign.triangles,t=>Array.from(t.p,p=>Array.from(p)))),normalize(expected));
   const color=variant==='baseline'?'rgb(189,143,175)':'rgb(65,88,115)';assert(sign.triangles.some(t=>t.color===color));
   let fills=0;const ctx={beginPath(){},moveTo(){},lineTo(){},closePath(){},fill(){fills++}};q.drawSoftwareSign(ctx,sign);assert.equal(fills,524);
  }
  assert.notDeepEqual(Array.from(q.left.sourceData),Array.from(q.right.sourceData));
 }
});
test('bounded visible consumers use actual transforms, depth order and existing near clipping',()=>{
 const q=fixture(),items=Array.from({length:9},(_,i)=>({mesh:q.left,m:q.translation(0,0,i*10)}));
 items.push({mesh:{},m:q.translation(0,0,0)},{mesh:q.left,m:q.translation(1000,0,20)},{mesh:q.left,m:q.translation(0,0,200)});
 const signs=q.softwareSignboards(items,[q.left,q.right],project,800,600,[0,0,-20]);
 assert.equal(signs.length,6);assert(signs.reduce((n,s)=>n+s.triangles.length,0)<=6*524);
 assert.deepEqual(Array.from(signs,s=>s.q[2]),[20,30,40,50,60,70]);
 for(const s of signs)assert(s.triangles.every((t,i)=>i===0||t.layer>s.triangles[i-1].layer||t.layer===s.triangles[i-1].layer&&t.depth<=s.triangles[i-1].depth));
 assert.equal(q.softwareSignboards([{mesh:q.left,m:q.translation(0,0,-30)}],[q.left],project,800,600,[0,0,-20]).length,0);
 const before=q.softwareSignboards([items[1]],[q.left],project,800,600,[0,0,-20])[0];
 const after=q.softwareSignboards([items[1]],[q.left],p=>project([p[0]-1,p[1],p[2]-2]),800,600,[1,0,-18])[0];
 assert.equal(after.q[0],before.q[0]-10);assert.equal(after.q[2],before.q[2]-2);
});
test('fixed sign parts keep all six arrow arms visible from front and behind panel from back',()=>{
 const inside=(point,tri)=>{
  const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
  const sides=[cross(tri[0],tri[1],point),cross(tri[1],tri[2],point),cross(tri[2],tri[0],point)];
  return sides.every(x=>x>=-1e-7)||sides.every(x=>x<=1e-7);
 };
 for(const variant of ['baseline','navy-v1','navy-v2'])for(const direction of ['left','right']){
  const q=fixture(variant),mesh=q[direction],style=loadSignboardStyles()[variant],side=direction==='left'?-1:1;
  for(const x of [-6,-3,0,3,6])for(const zEye of [-12,12]){
   const eye=[x,3,zEye],z=q.norm(q.sub([0,2.28,0],eye)),right=q.norm(q.cross(z,[0,1,0])),up=q.cross(right,z);
   const project=p=>{const d=q.sub(p,eye),depth=q.dot(d,z);return depth<.25?null:[400+q.dot(d,right)*600/depth,300-q.dot(d,up)*600/depth,depth,600/depth]};
   const sign=q.softwareSignboards([{mesh,m:q.translation(0,0,0)}],[mesh],project,800,600,eye)[0];
   const arrow=variant==='baseline'?'rgb(189,143,175)':'rgb(65,88,115)';
   for(let j=0;j<3;j++)for(const y of [2.15,2.41]){
    const point=project([-.86+j*.86-side*.05,y,.12+style.radius]);let painted=null;
    for(const tri of sign.triangles)if(inside(point,tri.p))painted=tri.color;
    assert.equal(painted,zEye>0?arrow:'rgb(243,234,203)',`${variant} ${direction} eye ${eye}, arrow ${j} arm ${y}`);
   }
  }
 }
});
