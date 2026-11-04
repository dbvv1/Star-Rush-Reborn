/** Candidate-only adapter for engine.js Mesh stride 10. Does not fetch or patch the game. */
export function decodeStandardPart(bytes) {
  const u = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const d = new DataView(u.buffer, u.byteOffset, u.byteLength);
  if (u.byteLength < 28 || d.getUint32(0, true) !== 0x46546c67 || d.getUint32(4, true) !== 2 || d.getUint32(8, true) !== u.byteLength) throw new Error('Invalid GLB');
  const jl = d.getUint32(12, true), bo = 20 + jl;
  if (jl % 4 || bo + 8 > u.length || d.getUint32(16, true) !== 0x4e4f534a || d.getUint32(bo + 4, true) !== 0x004e4942) throw new Error('Invalid GLB chunks');
  const bl = d.getUint32(bo, true), base = bo + 8;
  if (base + bl !== u.length) throw new Error('Invalid binary length');
  const g = JSON.parse(new TextDecoder().decode(u.subarray(20, bo)));
  if (g.asset?.version !== '2.0' || g.buffers?.length !== 1 || g.buffers[0].uri || g.buffers[0].byteLength > bl || g.images || g.textures || g.animations || g.skins || g.extensionsRequired?.length) throw new Error('Unsupported standard-part contract');
  function values(i, type, width) {
    const a = g.accessors?.[i], v = g.bufferViews?.[a?.bufferView];
    if (!a || !v || a.componentType !== type || a.type !== (width === 1 ? 'SCALAR' : 'VEC3') || a.sparse || a.normalized || v.buffer !== 0) throw new Error('Unsupported accessor');
    const off = (v.byteOffset || 0) + (a.byteOffset || 0), stride = v.byteStride || width * 4;
    if (!Number.isInteger(a.count) || a.count < 1 || off % 4 || stride % 4 || stride < width * 4 || off < 0 || off + (a.count - 1) * stride + width * 4 > g.buffers[0].byteLength || (a.byteOffset || 0) + (a.count - 1) * stride + width * 4 > v.byteLength) throw new Error('Accessor bounds or alignment');
    return Array.from({length: a.count}, (_, j) => Array.from({length: width}, (_, k) => type === 5126 ? d.getFloat32(base + off + j * stride + k * 4, true) : d.getUint32(base + off + j * stride + k * 4, true)));
  }
  const roots = g.scenes?.[g.scene || 0]?.nodes;
  if (!roots?.length || roots.length !== g.nodes.length || new Set(roots).size !== roots.length) throw new Error('Unsupported node hierarchy');
  const names = new Set();
  return roots.map(i => {
    const n = g.nodes[i], m = g.meshes?.[n?.mesh];
    if (!n?.name || names.has(n.name) || !m?.primitives?.length || n.children || n.matrix || n.rotation || n.scale) throw new Error('Unsupported node');
    names.add(n.name);
    const pivot = n.translation || [0, 0, 0];
    if (pivot.length !== 3 || !pivot.every(Number.isFinite)) throw new Error('Invalid pivot');
    const data = [], indices = [];
    for (const pr of m.primitives) {
      if ((pr.mode ?? 4) !== 4) throw new Error('Nontriangle primitive');
      const p = values(pr.attributes.POSITION, 5126, 3), normal = values(pr.attributes.NORMAL, 5126, 3), colors = values(pr.attributes.COLOR_0, 5126, 3), ix = values(pr.indices, 5125, 1);
      if (p.length !== normal.length || p.length !== colors.length || ix.length % 3) throw new Error('Mismatched geometry');
      const first = data.length / 10;
      for (let j = 0; j < p.length; j++) {
        if (![...p[j], ...normal[j], ...colors[j]].every(Number.isFinite) || Math.abs(Math.hypot(...normal[j]) - 1) > 0.0001 || colors[j].some(v => v < 0 || v > 1)) throw new Error('Invalid vertex');
        // Legacy gloss slot is preserved. Current Three renderer ignores it.
        data.push(...p[j], ...normal[j], ...colors[j], 0.12);
      }
      for (const [index] of ix) {
        if (index >= p.length) throw new Error('Index outside primitive');
        indices.push(first + index);
      }
    }
    return {name: n.name, pivot: [...pivot], action: n.extras?.action || 'static', sourceData: new Float32Array(data), sourceIndices: new Uint32Array(indices)};
  });
}

export function instantiateForStar(parts, api) {
  const {Mesh, Node, translation} = api;
  const root = new Node(), byName = new Map();
  for (const part of parts) {
    const mesh = new Mesh(part.sourceData, part.sourceIndices), node = root.add(new Node(mesh));
    node.local = translation(...part.pivot);
    byName.set(part.name, {part, node, mesh});
  }
  let disposed = false;
  return {root, byName, dispose() {if (!disposed) {disposed = true; root.children.length = 0; for (const {mesh, node} of byName.values()) {node.mesh = null; mesh.dispose();} byName.clear();}}};
}

export function poseCar(instance, {steer = 0, wheelSpin = 0, roll = 0, bob = 0} = {}, api) {
  if (![steer, wheelSpin, roll, bob].every(Number.isFinite)) throw new Error('Nonfinite vehicle pose');
  const expected = {'body':'body-roll-x_bob-y','wheel-front-left':'front-steer-y_then-roll-z','wheel-front-right':'front-steer-y_then-roll-z','wheel-back-left':'roll-z','wheel-back-right':'roll-z'};
  if (instance.byName.size !== 5 || Object.entries(expected).some(([name, action]) => instance.byName.get(name)?.part.action !== action)) throw new Error('Expected complete five-part car identities/actions');
  const {translation, mm, ry, rz, trs} = api;
  for (const [name, {part, node}] of instance.byName) {
    if (name === 'body') node.local = trs([0, bob, 0], [1, 1, 1], [roll, 0, 0]);
    else node.local = mm(translation(...part.pivot), mm(ry(name.includes('front') ? -steer : 0), rz(wheelSpin)));
  }
}

/** Offline/once-per-chunk transport into circuitRoad(s).
 * centerS covers centerS - 12 to centerS + 12. Road surface bends; 6 m rail panels
 * remain affine rigid/chord pieces between sampled endpoints to avoid thin-triangle flips.
 * Caller still clips overlapping banks against nearby road segments.
 */
export function bendRoadParts(parts, sample, centerS) {
  if (!Number.isFinite(centerS)) throw new Error('Invalid center station');
  const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0);
  const sub=(a,b)=>a.map((v,i)=>v-b[i]);
  const frame=s=>{
    const f=sample(s);
    if (!f || ![f.p,f.T,f.R].every(v=>Array.isArray(v)&&v.length===3&&v.every(Number.isFinite))) throw new Error('Invalid circuit frame vectors');
    const curve=f.curv??0,slope=f.slope??0;
    if (![curve,slope].every(Number.isFinite)||Math.abs(Math.hypot(...f.T)-1)>1e-4||Math.abs(Math.hypot(...f.R)-1)>1e-4||Math.abs(dot(f.T,f.R))>1e-4||Math.abs(f.T[1])+Math.abs(f.R[1])>1e-5||f.T[0]*f.R[2]-f.T[2]*f.R[0]<.9999) throw new Error('Invalid circuit frame basis');
    return {...f,curve,slope};
  };
  return parts.map(part=>{
    const rail=part.name.startsWith('rail-');
    if (!rail&&part.name!=='road-and-graded-shoulder') throw new Error('Not a road standard');
    const data=new Float32Array(part.sourceData);let affine;
    if(rail){
      const xs=[];for(let i=0;i<data.length;i+=10)xs.push(data[i]);
      const min=Math.min(...xs),max=Math.max(...xs),span=max-min;
      if(span<=0)throw new Error('Degenerate rail panel');
      const left=frame(centerS+part.pivot[0]+min),right=frame(centerS+part.pivot[0]+max),mid=frame(centerS+part.pivot[0]);
      for(const f of [left,right,mid])if(1-f.curve*part.pivot[2]<=.2)throw new Error('Invalid or folded rail frame');
      const endpoint=f=>f.p.map((v,k)=>v+part.pivot[2]*f.R[k]);
      const a=endpoint(left),b=endpoint(right),tx=sub(b,a).map(v=>v/span),up=[0,1,0],side=mid.R;
      const reciprocal=[cross(up,side),cross(side,tx),cross(tx,up)],det=dot(tx,reciprocal[0]);
      if(det<=.2)throw new Error('Folded rail chord');
      affine={origin:a.map((v,k)=>v-min*tx[k]),tx,side,reciprocal,det};
    }
    for(let i=0;i<data.length;i+=10){
      const lx=data[i],ly=data[i+1]+part.pivot[1],lz=data[i+2];let normal;
      if(affine){
        for(let k=0;k<3;k++)data[i+k]=affine.origin[k]+lx*affine.tx[k]+ly*(k===1?1:0)+lz*affine.side[k];
        const n=[data[i+3],data[i+4],data[i+5]];
        normal=[0,1,2].map(k=>n.reduce((s,v,j)=>s+v*affine.reciprocal[j][k],0)/affine.det);
      }else{
        const x=lx+part.pivot[0],z=lz+part.pivot[2],f=frame(centerS+x),j=1-f.curve*z;
        if(j<=.2)throw new Error('Invalid or folded circuit frame');
        const nx=(data[i+3]-f.slope*data[i+4])/j,ny=data[i+4],nz=data[i+5];
        normal=[nx*f.T[0]+nz*f.R[0],ny,nx*f.T[2]+nz*f.R[2]];
        data[i]=f.p[0]+z*f.R[0];data[i+1]=f.p[1]+ly;data[i+2]=f.p[2]+z*f.R[2];
      }
      const nl=Math.hypot(...normal);if(!Number.isFinite(nl)||nl<1e-12)throw new Error('Invalid transported normal');
      for(let k=0;k<3;k++)data[i+3+k]=normal[k]/nl;
    }
    // Local Jacobians alone do not prove the final discrete triangles remain valid.
    for(let i=0;i<part.sourceIndices.length;i+=3){
      const ids=Array.from(part.sourceIndices.slice(i,i+3)),p=ids.map(j=>Array.from(data.slice(j*10,j*10+3)));
      const face=cross(sub(p[1],p[0]),sub(p[2],p[0])),area=Math.hypot(...face);
      const original=ids.map(j=>Array.from(part.sourceData.slice(j*10,j*10+3))),oldArea=Math.hypot(...cross(sub(original[1],original[0]),sub(original[2],original[0])));
      if(!Number.isFinite(area)||area<oldArea*.01||ids.some(j=>dot(face,Array.from(data.slice(j*10+3,j*10+6)))<=0))throw new Error('Transported triangle folded or collapsed');
    }
    return {...part,pivot:[0,0,0],sourceData:data,sourceIndices:new Uint32Array(part.sourceIndices)};
  });
}
