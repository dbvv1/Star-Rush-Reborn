import assert from 'node:assert/strict';
import {DatabaseSync} from 'node:sqlite';
import {readFileSync,readdirSync} from 'node:fs';
import worker from '../dist/server/index.js';
const db=new DatabaseSync(':memory:');for(const f of readdirSync('drizzle').filter(f=>f.endsWith('.sql')).sort())db.exec(readFileSync('drizzle/'+f,'utf8'));
class Statement{constructor(sql,args=[]){this.sql=sql;this.args=args}bind(...a){return new Statement(this.sql,a)}async first(){return db.prepare(this.sql).get(...this.args)||null}async all(){return {results:db.prepare(this.sql).all(...this.args)}}async run(){db.prepare(this.sql).run(...this.args);return {success:true}}}
const DB={prepare:s=>new Statement(s),batch:async ss=>{db.exec('BEGIN');try{const r=[];for(const s of ss)r.push(await s.run());db.exec('COMMIT');return r}catch(e){db.exec('ROLLBACK');throw e}}};
const call=async(path,data)=>{const r=await worker.fetch(new Request('https://race.test'+path,data?{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)}:{}),{DB});return {status:r.status,data:await r.json()}};
const req=async(data,status=200)=>{const r=await call('/api/rooms',data);assert.equal(r.status,status,JSON.stringify(r));return r.data};
const host='qa-host-001',guest='qa-guest-002';let r=await req({action:'create',id:host,name:'QA Host',track:'academy-reborn'});const code=r.room.code;assert.equal(r.members.length,1);
r=await req({action:'join',id:guest,name:'QA Guest',code});assert.equal(r.members.length,2);await req({action:'start',id:host,code},409);await req({action:'ready',id:host,code,ready:true});await req({action:'ready',id:guest,code,ready:true});await req({action:'start',id:guest,code},403);
r=await req({action:'start',id:host,code});assert.equal(r.room.status,'racing');assert(r.room.startAt>Date.now());await req({action:'join',id:'qa-late-003',code},409);
// Advance the room clock in the isolated test DB, then exchange both snapshots.
db.prepare('UPDATE race_rooms SET start_at=? WHERE code=?').run(Date.now()-1000,code);
await req({action:'poll',id:host,code,snapshot:{s:950,l:1,yaw:.4,time:24.2,finished:true,paint:'#efabc8'}});r=await req({action:'poll',id:guest,code,snapshot:{s:950,l:-1,time:25.2,finished:true}});assert.equal(r.room.status,'finished');assert.equal(r.members.find(m=>m.id===host).snapshot.paint,'#efabc8');
r=await req({action:'reset',id:host,code});assert.equal(r.room.status,'lobby');assert(r.members.every(m=>!m.ready&&!m.snapshot.finished));await req({action:'leave',id:host,code});r=await req({action:'poll',id:guest,code});assert.equal(r.room.hostId,guest);await req({action:'leave',id:guest,code});await req({action:'poll',id:host,code},404);
// Capacity is four independent players.
r=await req({action:'create',id:host,track:'coast-reborn'});for(let i=0;i<3;i++)await req({action:'join',id:'qa-member-00'+i,code:r.room.code});await req({action:'join',id:'qa-member-over',code:r.room.code},409);
for(const [id,track,timeMs] of [['qa-run-1','coast-reborn',75000],['qa-run-2','coast-reborn',70000],['qa-run-3','sakura-reborn',65000]]){const a=await call('/api/leaderboard',{id,name:'QA Driver',mode:'circuit',track,seed:1,distance:2000,timeMs,score:100});assert.equal(a.status,200)}
r=await call('/api/leaderboard?mode=circuit&track=coast-reborn');assert.deepEqual(r.data.runs.map(r=>r.timeMs),[70000,75000]);r=await call('/api/leaderboard?mode=circuit&track=sakura-reborn');assert.equal(r.data.runs.length,1);
assert.equal((await call('/api/leaderboard',{distance:-1,timeMs:0,score:0,seed:1})).status,400);assert.equal((await worker.fetch(new Request('https://race.test/game.js'),{DB})).status,200);assert.equal((await worker.fetch(new Request('https://race.test/'),{DB})).status,200);
console.log('API integration passed: room create/join/capacity/ready/start/snapshots/finish/reset/host transfer/leave + track-isolated ranking + assets');db.close();
