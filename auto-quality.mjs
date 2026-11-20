// Opt-in foreground Auto policy. Explicit quality and fixed captures bypass it.
const tiers=['low','medium','high'];
const longFrameMs=100, severeWindowMs=4000, severeBudgetMs=1000, maxSampleMs=500, minSevereFrames=3;
const recoveryCadenceRatio=.90,recoveryPixelRatio=.80;

function pixelRatio(quality,dpr){
 const high=Math.min(Number.isFinite(dpr)&&dpr>0?dpr:1,1.5);
 return quality==='low'?Math.min(1,high):quality==='medium'?Math.min(1.2,high):high;
}
function bufferArea(tier,width,height,dpr){
 if(!Number.isFinite(width)||width<=0||!Number.isFinite(height)||height<=0)return 0;
 const ratio=pixelRatio(tiers[tier],dpr),area=Math.floor(width*ratio)*Math.floor(height*ratio);
 return Number.isFinite(area)?area:0;
}

export function createVisibleAutoQualityGovernor(visibility){
 let tier=2,lastAt,average,slow,fast,severeMs;
 let trialFrom=-1,trialCadence=0;
 const rejectedCadence=[0,0],rejectedArea=[0,0];
 const severe=[];
 const clearSevere=()=>{severe.length=0;severeMs=0};
 const resetSamples=()=>{lastAt=null;average=16.7;slow=fast=0;clearSevere()};
 function downshift(width,height,dpr){
  if(tier===0)return;
  const next=tier-1;
  if(trialFrom===next){rejectedCadence[next]=trialCadence;rejectedArea[next]=bufferArea(tier,width,height,dpr)}
  trialFrom=-1;tier=next;
 }
 function recoveryAllowed(width,height,dpr){
  if(tier===2||severe.length)return false;
  if(!rejectedCadence[tier]||average<=rejectedCadence[tier]*recoveryCadenceRatio)return true;
  const area=bufferArea(tier+1,width,height,dpr);
  return area>0&&rejectedArea[tier]>0&&area<=rejectedArea[tier]*recoveryPixelRatio;
 }
 resetSamples();
 visibility?.addEventListener('visibilitychange',resetSamples);
 return {
  update(requested,now,width,height,dpr){
   if(requested!=='auto'){resetSamples();return requested}
   if(visibility?.hidden||!Number.isFinite(now)){resetSamples();return tiers[tier]}
   const interval=lastAt===null?0:now-lastAt;lastAt=now;
   // No frame for an entire evidence window is a new sampling epoch.
   if(interval<0||interval>severeWindowMs){resetSamples();lastAt=now;return tiers[tier]}
   if(interval===0)return tiers[tier];
   while(severe.length&&now-severe[0][0]>severeWindowMs)severeMs-=severe.shift()[1];
   if(interval>=longFrameMs){
    // Quick frames between long samples do not erase foreground pressure.
    // Expiry plus capped credit and corroboration reject a lone suspension.
    const credit=Math.min(interval,maxSampleMs);
    fast=0;severe.push([now,credit]);severeMs+=credit;
    if(severe.length>=minSevereFrames&&severeMs>=severeBudgetMs){
     downshift(width,height,dpr);clearSevere();slow=0;average=16.7;
    }
    return tiers[tier];
   }
   average+=(interval-average)*.035;
   if(average>23){slow++;fast=0}else if(average<16.9){fast=recoveryAllowed(width,height,dpr)?fast+1:0;slow=0}else slow=fast=0;
   if(slow>90&&tier>0){downshift(width,height,dpr);slow=0}
   // A failed trial stays latched across sample epochs. Raising one tier
   // does not prove headroom for the next; judge each edge independently.
   if(fast>360&&tier<2){trialFrom=tier;trialCadence=average;rejectedCadence[tier]=rejectedArea[tier]=0;tier++;fast=0}
   return tiers[tier];
  },
  pixelRatio,
  dispose(){visibility?.removeEventListener('visibilitychange',resetSamples)}
 };
}
