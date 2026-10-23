import http from 'node:http';
import {DatabaseSync} from 'node:sqlite';
import {readFileSync,readdirSync,statSync,mkdirSync} from 'node:fs';
mkdirSync('.wrangler',{recursive:true});
const db=new DatabaseSync('.wrangler/preview.sqlite');
db.exec('CREATE TABLE IF NOT EXISTS preview_migrations (name TEXT PRIMARY KEY)');
for(const name of readdirSync('drizzle').filter(x=>x.endsWith('.sql')).sort())if(!db.prepare('SELECT name FROM preview_migrations WHERE name=?').get(name)){db.exec(readFileSync('drizzle/'+name,'utf8'));db.prepare('INSERT INTO preview_migrations VALUES (?)').run(name)}
class Statement{constructor(sql,args=[]){this.sql=sql;this.args=args}bind(...args){return new Statement(this.sql,args)}async first(){return db.prepare(this.sql).get(...this.args)||null}async all(){return {results:db.prepare(this.sql).all(...this.args)}}async run(){return {success:true,meta:db.prepare(this.sql).run(...this.args)}}}
const DB={prepare:sql=>new Statement(sql),batch:async statements=>{db.exec('BEGIN');try{const result=[];for(const s of statements)result.push(await s.run());db.exec('COMMIT');return result}catch(e){db.exec('ROLLBACK');throw e}}};
http.createServer(async(req,res)=>{try{const data=[];for await(const chunk of req)data.push(chunk);const body=Buffer.concat(data),stamp=statSync('dist/server/index.js').mtimeMs;const worker=(await import('./dist/server/index.js?v='+stamp)).default;const request=new Request('http://'+req.headers.host+req.url,{method:req.method,headers:req.headers,...(body.length?{body}: {})});const response=await worker.fetch(request,{DB});res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()))}catch(e){console.error(e);res.writeHead(500);res.end(String(e))}}).listen(Number(process.env.PORT||4173),'0.0.0.0',()=>console.log('Star Rush preview ready'));
