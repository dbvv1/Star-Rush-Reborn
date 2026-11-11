let coastCarConsumer=null;
// Reuse the original torso mesh and head, never the legacy car shell or wheels.
const coastDriverBodyNode=new Node(driverBodyNode.mesh);
// Wrap the existing animation, not the driving model or simulation state.
const animateLegacyCar=animateCar;
animateCar=function(t,dt,steer){
 animateLegacyCar(t,dt,steer);
 if(typeof createCoastCarConsumer==='undefined')return;
 coastDriverBodyNode.local=bodyNode.local;
 if(!coastCarConsumer)coastCarConsumer=createCoastCarConsumer(car,coastCarSource,{Mesh,Node,translation,mm,ry,rz,trs},()=>disableCoastalSpace(),[coastDriverBodyNode,headNode]);
 coastCarConsumer.update(coastalSpaceEnabled(),{steer:player.roadSteer||0,wheelSpin,roll:-steer*Math.min(.09,player.speed*.003),bob:Math.sin(t*18)*Math.min(.012,player.speed*.0005)});
};
