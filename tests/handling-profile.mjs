import assert from 'node:assert/strict';
// Actual client inputs and contact solver; no rendering/subjective claims.
export function checkHandlingProfile(q,profile){
 const candidate=profile==='arcade-ab';
 const clean=()=>{q.choose('academy-reborn');q.event='practice';q.start();q.state='running';q.demo=false;q.assisted=null;for(const k in q.input)q.input[k]=false};
 const step=(n=1)=>{for(let i=0;i<n;i++)q.physics(1/120)};
 clean();
 // Inventory fixture isolates input ownership; drift earning is exercised by
 // the existing real-client drift/countersteer test, not fabricated here.
 Object.assign(q.player,{smallJets:2,smallWindow:1.5,vS:20,speed:20});
 q.input.gas=true;step();assert.equal(q.player.smallJets,candidate?2:1);
 q.input.gas=false;step(24);q.input.gas=true;step();
 assert.equal(q.player.smallJets,candidate?2:0,'throttle re-press policy');
 if(candidate){q.input.small=true;step();assert.equal(q.player.smallJets,1);step(24);assert.equal(q.player.smallJets,1,'held Q must not double-fire');q.input.small=false;step();q.input.small=true;step();assert.equal(q.player.smallJets,0)}
 clean();Object.assign(q.player,{l:8,vS:40,vL:8,yaw:.15,turnRate:.6,steering:1});
 q.resolveContacts(1/120);assert(q.player.vS>30,'glancing contact retains travel');
 if(candidate)assert.equal(q.player.railSide,1);
 q.reset(false);assert.equal(q.player.railSide,0,'new run clears wall marker');
 for(const speed of [20,52,76]){
  const base={vS:speed,vL:0,yaw:0,steering:1,turnRate:0,jump:0};
  const a={...base},b={...base};
  q.VehicleModel.step(a,{steer:1},1/120);
  q.VehicleModel.step(b,{steer:1},1/120,{arcadeCandidate:true});
  assert.equal(b.turnRate,a.turnRate,'full steering authority is unchanged');
  const startA={...base,steering:0},startB={...base,steering:0};
  q.VehicleModel.step(startA,{steer:1},1/120);q.VehicleModel.step(startB,{steer:1},1/120,{arcadeCandidate:true});
  assert(speed<=30?startA.turnRate===startB.turnRate:startB.turnRate<startA.turnRate);
  const releaseA={...base},releaseB={...base};
  q.VehicleModel.step(releaseA,{steer:0},1/120);q.VehicleModel.step(releaseB,{steer:0},1/120,{arcadeCandidate:true});
  assert.equal(releaseA.turnRate,releaseB.turnRate,'release response remains fast');
 }
 // Steering away from contact immediately permits acceleration, without
 // teleporting the trajectory or resetting angular velocity.
 const body={vS:30,vL:0,yaw:0,steering:-1,turnRate:0,railSide:1,jump:0};
 q.VehicleModel.step(body,{steer:-1,gas:true},1/120,{arcadeCandidate:true});
 assert(body.speed>30);assert(body.vL<0);
 console.log('Handling profile client checks:',profile);
}
