export default {
 async fetch(request,env){
  const url=new URL(request.url);if(url.pathname==='/game.js')return new Response(GAME,{headers:{'content-type':'text/javascript; charset=utf-8','cache-control':'no-cache'}});if(url.pathname==='/api/rooms')return roomApi(request,env);
  if(Object.hasOwn(COURSE_ARTWORK,url.pathname)){
   if(request.method!=='GET'&&request.method!=='HEAD')return new Response('Method not allowed',{status:405,headers:{allow:'GET, HEAD'}});
   const bytes=Uint8Array.from(atob(COURSE_ARTWORK[url.pathname]),char=>char.charCodeAt(0));
   return new Response(request.method==='HEAD'?null:bytes,{headers:{'content-type':'image/webp','content-length':String(bytes.length),'cache-control':'public, max-age=31536000, immutable','x-content-type-options':'nosniff'}});
  }
  if(Object.hasOwn(IMPACT_AUDIO,url.pathname)){
   if(request.method!=='GET'&&request.method!=='HEAD')return new Response('Method not allowed',{status:405,headers:{allow:'GET, HEAD'}});
   const bytes=Uint8Array.from(atob(IMPACT_AUDIO[url.pathname]),char=>char.charCodeAt(0));
   return new Response(request.method==='HEAD'?null:bytes,{headers:{'content-type':'audio/wav','content-length':String(bytes.length),'cache-control':'public, max-age=31536000, immutable','x-content-type-options':'nosniff'}});
  }
  if(url.pathname==='/api/leaderboard'){
   const reply=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
   if(!env.DB)return reply({error:'排行榜尚未就绪'},503);
   try{
    if(request.method==='GET'){
     const mode=url.searchParams.get('mode')==='endless'?'endless':'circuit',track=mode==='circuit'?(trackIds.has(url.searchParams.get('track'))?url.searchParams.get('track'):'coast-reborn'):'endless-reborn';
     const sql=mode==='circuit'?'SELECT name, mode, distance, time_ms AS timeMs, score FROM race_runs WHERE mode=? AND track=? ORDER BY time_ms ASC, created_at ASC LIMIT 20':'SELECT name, mode, distance, time_ms AS timeMs, score FROM race_runs WHERE mode=? AND track=? ORDER BY distance DESC, created_at ASC LIMIT 20';
     const result=await env.DB.prepare(sql).bind(mode,track).all();return reply({runs:result.results||[]});
    }
    if(request.method==='POST'){
     if(Number(request.headers.get('content-length')||0)>4096)return reply({error:'请求过大'},413);
     const raw=await request.text();if(raw.length>4096)return reply({error:'请求过大'},413);
     const r=JSON.parse(raw),mode=r.mode==='endless'?'endless':'circuit',track=mode==='circuit'?(trackIds.has(r.track)?r.track:'coast-reborn'):'endless-reborn';
     const name=String(r.name||'匿名车手').replace(/[\u0000-\u001f]/g,'').trim().slice(0,16)||'匿名车手';
     const values=[r.distance,r.timeMs,r.score,r.seed].map(Number);if(values.some(x=>!Number.isFinite(x)||x<0))return reply({error:'成绩格式无效'},400);
     const id=typeof r.id==='string'&&r.id.length<=80?r.id:crypto.randomUUID();
     await env.DB.prepare('INSERT OR IGNORE INTO race_runs (id,name,mode,track,seed,distance,time_ms,score,created_at) VALUES (?,?,?,?,?,?,?,?,?)').bind(id,name,mode,track,Math.round(values[3]),Math.round(values[0]),Math.round(values[1]),Math.round(values[2]),Date.now()).run();
     return reply({ok:true});
    }
    return reply({error:'不支持此方法'},405);
   }catch(e){return reply({error:'排行榜暂不可用'},503)}
  }
  if(url.pathname==='/'||url.pathname==='/index.html')return new Response(PAGE,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-cache'}});
  return new Response('Not found',{status:404});
 }
};
