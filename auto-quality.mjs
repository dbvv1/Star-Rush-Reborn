// Opt-in foreground Auto policy. Explicit quality and fixed captures bypass it.
const tiers=['low','medium','high'];
const longFrameMs=100, severeWindowMs=4000, severeBudgetMs=1000, maxSampleMs=500, minSevereFrames=3;

export function createVisibleAutoQualityGovernor(visibility){
 let tier=2,lastAt,average,slow,fast,severeMs;
 const severe=[];
 const clearSevere=()=>{severe.length=0;severeMs=0};
 const resetSamples=()=>{lastAt=null;average=16.7;slow=fast=0;clearSevere()};
 resetSamples();
 visibility?.addEventListener('visibilitychange',resetSamples);
 return {
  update(requested,now){
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
     tier=Math.max(0,tier-1);clearSevere();slow=0;average=16.7;
    }
    return tiers[tier];
   }
   average+=(interval-average)*.035;
   if(average>23){slow++;fast=0}else if(average<16.9){fast=severe.length?0:fast+1;slow=0}else slow=fast=0;
   if(slow>90&&tier>0){tier--;slow=0}
   if(fast>360&&tier<2){tier++;fast=0}
   return tiers[tier];
  },
  pixelRatio(quality,dpr){
   const high=Math.min(Number.isFinite(dpr)&&dpr>0?dpr:1,1.5);
   return quality==='low'?Math.min(1,high):quality==='medium'?Math.min(1.2,high):high;
  },
  dispose(){visibility?.removeEventListener('visibilitychange',resetSamples)}
 };
}
