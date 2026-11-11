import {decodeStandardPart,poseCar} from './authoring/coast-street-placement/fixed-source/upstream-adapter.mjs';
export function decodeCoastCarSource(base64){
 const bytes=Uint8Array.from(atob(base64),c=>c.charCodeAt(0)),parts=decodeStandardPart(bytes);
 const length=new DataView(bytes.buffer).getUint32(12,true),g=JSON.parse(new TextDecoder().decode(bytes.subarray(20,20+length)));
 for(const part of parts){const node=g.nodes.find(n=>n.name===part.name);let start=0;part.paintMask=[];
  for(const primitive of g.meshes[node.mesh].primitives){const count=g.accessors[primitive.attributes.POSITION].count;
   for(let i=0;i<count;i++)part.paintMask[start+i]=g.materials[primitive.material].name==='paint';start+=count;
  }
 }return parts;
}
// Presentation-only, lazy, transactional replacement of the existing car.
// Keep the original nodes alive: track changes and failures restore them verbatim.
export function createCoastCarConsumer(car,source,api,onFailure,retainedNodes=[]){
 const baseline=car.children.slice();let instance=null,failed=false;
 function dispose(){if(instance){for(const {mesh} of instance.byName.values())mesh.dispose();instance=null;}}
 return {update(enabled,pose){
  if(!enabled||failed){car.children=baseline;dispose();return false;}
  try{
   if(!instance){
    instance={byName:new Map()};
    const parts=source();
    // Validate identities and pose before allocating any renderer resources.
    const probe={byName:new Map(parts.map(part=>[part.name,{part,node:{}}]))};
    if(parts.length!==5)throw Error('Expected five car parts');
    poseCar(probe,pose,api);
    for(const part of parts){const mesh=new api.Mesh(part.sourceData,part.sourceIndices);mesh.paintMask=part.paintMask;mesh.paintable=true;const entry={part,mesh,node:null};instance.byName.set(part.name,entry);entry.node=new api.Node(mesh);}
   }
   poseCar(instance,pose,api);
   car.children=[...Array.from(instance.byName.values(),entry=>entry.node),...retainedNodes];
   return true;
  }catch(error){car.children=baseline;dispose();failed=true;onFailure(error);return false;}
 },dispose(){car.children=baseline;dispose();}};
}
