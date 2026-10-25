import http from 'node:http';
import {once} from 'node:events';
import {readFile,readdir} from 'node:fs/promises';
import {DatabaseSync} from 'node:sqlite';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';

export async function startSmokeServer(worker, migrationDirectory='drizzle') {
const db = new DatabaseSync(':memory:');
class Statement {
  constructor(sql, args = []) { this.sql = sql; this.args = args; }
  bind(...args) { return new Statement(this.sql, args); }
  async first() { return db.prepare(this.sql).get(...this.args) || null; }
  async all() { return {results: db.prepare(this.sql).all(...this.args)}; }
  async run() { db.prepare(this.sql).run(...this.args); return {success: true}; }
}
const DB = {prepare: sql => new Statement(sql), batch: async statements => {
  db.exec('BEGIN');
  try { const result = []; for (const s of statements) result.push(await s.run()); db.exec('COMMIT'); return result; }
  catch (error) { db.exec('ROLLBACK'); throw error; }
}};
const server = http.createServer(async (req, res) => {
  try {
    const chunks = []; for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks);
    const response = await worker.fetch(new Request(`http://${req.headers.host}${req.url}`, {
      method: req.method, headers: req.headers, ...(body.length ? {body} : {})
    }), {DB});
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) { res.writeHead(500); res.end(String(error)); }
});
try {
  for (const file of (await readdir(migrationDirectory)).filter(f=>f.endsWith('.sql')).sort()) db.exec(await readFile(`${migrationDirectory}/${file}`,'utf8'));
  server.listen(0,'127.0.0.1'); await once(server,'listening');
  return {server, db, origin: `http://127.0.0.1:${server.address().port}`};
} catch (error) {
  if (server.listening) {server.closeAllConnections(); await new Promise(resolve=>server.close(resolve));}
  db.close(); throw error;
}
}

if (process.argv[1] && import.meta.url===pathToFileURL(resolve(process.argv[1])).href) {
  const {default:worker}=await import('../dist/server/index.js');
  const {cleanupSmoke}=await import('./smoke-cleanup.mjs');
  const resources=await startSmokeServer(worker);
  console.log(`STAR_SMOKE_LOOPBACK=${resources.origin}`);
  console.log('Production Worker, in-memory SQLite; Ctrl+C closes the temporary server. No browser is launched.');
  let closing=false;
  const close=async()=>{if(closing)return;closing=true;const errors=await cleanupSmoke(resources);if(errors.length){console.error(errors);process.exitCode=1;}};
  process.on('SIGINT',close);process.on('SIGTERM',close);
}
