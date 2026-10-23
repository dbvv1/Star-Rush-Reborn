const jsonReply=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
const trackIds=new Set(['coast-reborn','sakura-reborn','academy-reborn']);
const cleanName=value=>String(value||'匿名车手').replace(/[\u0000-\u001f]/g,'').trim().slice(0,16)||'匿名车手';
async function roomApi(request,env){
 if(request.method!=='POST')return jsonReply({error:'请使用 POST'},405);
 if(!env.DB)return jsonReply({error:'房间服务尚未就绪'},503);
 try{
  const text=await request.text();if(text.length>6000)return jsonReply({error:'请求过大'},413);
  const data=JSON.parse(text),action=data.action,id=String(data.id||''),name=cleanName(data.name),now=Date.now();
  if(!/^[a-zA-Z0-9-]{8,80}$/.test(id))return jsonReply({error:'车手标识无效'},400);
  let code=String(data.code||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,6);
  if(action==='create'){
   await env.DB.batch([env.DB.prepare('DELETE FROM race_members WHERE updated_at<?').bind(now-86400000),env.DB.prepare('DELETE FROM race_rooms WHERE touched_at<?').bind(now-86400000)]);
   const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',random=crypto.getRandomValues(new Uint8Array(6));code=Array.from(random,x=>alphabet[x%alphabet.length]).join('');
   const track=trackIds.has(data.track)?data.track:'coast-reborn';
   await env.DB.batch([env.DB.prepare('DELETE FROM race_members WHERE id=?').bind(id),env.DB.prepare('INSERT INTO race_rooms (code,host_id,track,status,start_at,created_at,touched_at) VALUES (?,?,?,\'lobby\',0,?,?)').bind(code,id,track,now,now),env.DB.prepare('INSERT INTO race_members (id,room,name,ready,snapshot,updated_at) VALUES (?,?,?,0,\'{}\',?)').bind(id,code,name,now)]);
  }
  let room=await env.DB.prepare('SELECT code,host_id AS hostId,track,status,start_at AS startAt FROM race_rooms WHERE code=?').bind(code).first();
  if(!room)return jsonReply({error:'房间不存在或已关闭'},404);if(!trackIds.has(room.track))return jsonReply({error:'房间来自旧版本，请刷新后创建新房间'},409);
  if(action==='join'){
   if(room.status!=='lobby')return jsonReply({error:'此房间正在比赛，请等待房主回到候场'},409);
   await env.DB.prepare('DELETE FROM race_members WHERE room=? AND updated_at<?').bind(code,now-120000).run();
   await env.DB.prepare('INSERT INTO race_members (id,room,name,ready,snapshot,updated_at) SELECT ?,?,?,0,\'{}\',? WHERE (SELECT COUNT(*) FROM race_members WHERE room=?)<4 ON CONFLICT(id) DO UPDATE SET room=excluded.room,name=excluded.name,ready=0,snapshot=\'{}\',updated_at=excluded.updated_at').bind(id,code,name,now,code).run();
  }
  let member=await env.DB.prepare('SELECT id FROM race_members WHERE id=? AND room=?').bind(id,code).first();
  if(!member)return jsonReply({error:'房间已满，或你已离开房间'},409);
  if(action==='leave'){
   await env.DB.prepare('DELETE FROM race_members WHERE id=? AND room=?').bind(id,code).run();
   const next=await env.DB.prepare('SELECT id FROM race_members WHERE room=? ORDER BY updated_at DESC LIMIT 1').bind(code).first();
   if(!next)await env.DB.prepare('DELETE FROM race_rooms WHERE code=?').bind(code).run();
   else if(room.hostId===id)await env.DB.prepare('UPDATE race_rooms SET host_id=? WHERE code=?').bind(next.id,code).run();
   return jsonReply({ok:true});
  }
  const snapshot={};if(data.snapshot&&typeof data.snapshot==='object'){
   for(const k of ['s','l','vS','vL','yaw','jump','time','mini','nitroTime']){const v=Number(data.snapshot[k]);if(Number.isFinite(v))snapshot[k]=v}
   snapshot.finished=!!data.snapshot.finished;if(/^#[0-9a-fA-F]{6}$/.test(data.snapshot.paint||''))snapshot.paint=data.snapshot.paint;
  }
  if(action==='poll')await env.DB.prepare('UPDATE race_members SET name=?,snapshot=?,updated_at=? WHERE id=? AND room=?').bind(name,JSON.stringify(snapshot),now,id,code).run();
  else await env.DB.prepare('UPDATE race_members SET name=?,updated_at=? WHERE id=? AND room=?').bind(name,now,id,code).run();
  if(action==='ready'&&room.status==='lobby')await env.DB.prepare('UPDATE race_members SET ready=? WHERE id=? AND room=?').bind(data.ready?1:0,id,code).run();
  let members=(await env.DB.prepare('SELECT id,name,ready,snapshot,updated_at AS updatedAt FROM race_members WHERE room=? AND updated_at>? ORDER BY id').bind(code,now-120000).all()).results||[];
  if(!members.some(m=>m.id===room.hostId)&&members.length){room.hostId=members[0].id;await env.DB.prepare('UPDATE race_rooms SET host_id=? WHERE code=?').bind(room.hostId,code).run()}
  if(action==='start'){
   if(id!==room.hostId)return jsonReply({error:'请由房主发车'},403);
   if(room.status!=='lobby'||members.some(m=>!m.ready))return jsonReply({error:'请等待每位车手准备'},409);
   room.startAt=Date.now()+4000;room.status='racing';await env.DB.prepare('UPDATE race_rooms SET status=?,start_at=? WHERE code=?').bind(room.status,room.startAt,code).run();
  }
  if(action==='reset'){
   if(id!==room.hostId)return jsonReply({error:'请由房主返回候场'},403);
   room.status='lobby';room.startAt=0;await env.DB.batch([env.DB.prepare('UPDATE race_rooms SET status=\'lobby\',start_at=0 WHERE code=?').bind(code),env.DB.prepare('UPDATE race_members SET ready=0,snapshot=\'{}\' WHERE room=?').bind(code)]);
   members=members.map(m=>({...m,ready:0,snapshot:'{}'}));
  }
  await env.DB.prepare('UPDATE race_rooms SET touched_at=? WHERE code=?').bind(now,code).run();
  for(const m of members){try{m.snapshot=JSON.parse(m.snapshot)}catch(e){m.snapshot={}}}
  if(room.status==='racing'&&Date.now()>room.startAt&&members.length&&members.every(m=>m.snapshot.finished)){room.status='finished';await env.DB.prepare("UPDATE race_rooms SET status='finished' WHERE code=?").bind(code).run()}
  return jsonReply({room,members,serverTime:Date.now()});
 }catch(e){return jsonReply({error:'房间连接暂时失败，请重试'},503)}
}
