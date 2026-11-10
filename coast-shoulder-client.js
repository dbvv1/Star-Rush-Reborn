// Coastal shoulder palette consumer. It extends the existing coastal-space
// switch; surface identity comes from the original shoulder draw statements,
// never from sampling the final vertex RGB. Only cached source colors change.
const COAST_SHOULDER_MIN=300,COAST_SHOULDER_MAX=710;
const COAST_SHOULDER_SURFACE='#c4b99f',COAST_SHOULDER_WALL='#a59f89';
const coastShoulderMeshes=new Map(),coastShoulderPending=new WeakMap();

function coastShoulderActive(s){
 return s>=COAST_SHOULDER_MIN&&s<=COAST_SHOULDER_MAX&&typeof coastalSpaceEnabled==='function'&&coastalSpaceEnabled()&&roadDriving&&raceMode==='circuit'&&activeTrackId==='coast-reborn';
}
// `draw` is the unchanged original quad statement, so positions, normals,
// indices and the random stream are untouched. The pre-change color range is
// retained per collector for an exact cached-chunk rollback.
function coastShoulderQuad(c,surface,s,base,draw){
 if(!coastShoulderActive(s)){draw(base);return}
 const after=surface==='wall'?COAST_SHOULDER_WALL:COAST_SHOULDER_SURFACE,offset=c.data.length/10;
 draw(after);
 const count=c.data.length/10-offset,ranges=coastShoulderPending.get(c)||[];
 ranges.push({offset,count,from:new Float32Array(color(base))});
 coastShoulderPending.set(c,ranges);
}
function coastShoulderCommit(mesh,c){
 const ranges=coastShoulderPending.get(c);if(!ranges)return;
 coastShoulderPending.delete(c);
 const original=new Float32Array(mesh.sourceData);
 for(const {offset,count,from} of ranges)for(let v=offset;v<offset+count;v++)for(let i=0;i<3;i++)original[v*10+6+i]=from[i];
 coastShoulderMeshes.set(mesh,original);
}
// Existing Mesh consumer contract: drop the stale GPU geometry first, then
// replace only sourceData. Nodes, sourceIndices, materials and transforms stay.
function coastShoulderDisable(){
 for(const [mesh,original] of coastShoulderMeshes){mesh.dispose();mesh.update(original)}
 coastShoulderMeshes.clear();
}
