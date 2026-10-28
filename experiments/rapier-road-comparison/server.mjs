import {createServer} from 'node:http';
import {readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,sep} from 'node:path';
const root=resolve(fileURLToPath(new URL('dist/',import.meta.url))),port=Number(process.env.PORT??4187);
if(!existsSync(resolve(root,'index.html')))throw Error('Run npm run build first');
const server=createServer((request,response)=>{
  const url=new URL(request.url,'http://localhost');
  if(!['GET','HEAD'].includes(request.method)){response.writeHead(405);response.end();return;}
  let path;try{path=resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));}catch{response.writeHead(400);response.end();return;}
  if(!path.startsWith(root+sep)){response.writeHead(403);response.end();return;}
  try{const data=readFileSync(path),type=path.endsWith('.html')?'text/html; charset=utf-8':path.endsWith('.js')?'text/javascript; charset=utf-8':path.endsWith('.webp')?'image/webp':'text/plain; charset=utf-8';
    response.writeHead(200,{'Content-Type':type,'Cache-Control':'no-store'});response.end(request.method==='HEAD'?undefined:data);
  }catch{response.writeHead(404);response.end('Not in the isolated comparison.');}
});
server.listen(port,'127.0.0.1',()=>console.log(`Unadopted comparison: http://127.0.0.1:${server.address().port}/`));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.close(()=>process.exit(0)));
