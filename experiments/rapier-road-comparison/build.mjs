import {build} from 'esbuild';
import {readFileSync,writeFileSync,mkdirSync,copyFileSync,rmSync} from 'node:fs';
import {generate} from './generate.mjs';
import {loadSkyAssets} from '../../sky-assets.mjs';
import {fileURLToPath} from 'node:url';
const hashes=generate();
// Preserve the real sky consumer's immutable /assets/sky/ URL contract.
const sky=loadSkyAssets(fileURLToPath(new URL('../../assets/sky/',import.meta.url)));
writeFileSync(new URL('.generated/sky.json',import.meta.url),JSON.stringify(sky.client));
if(!process.argv.includes('--prepare-only')) {
  const out=new URL('dist/',import.meta.url);mkdirSync(out,{recursive:true});
  await build({absWorkingDir:new URL('.',import.meta.url).pathname,entryPoints:['app.mjs'],bundle:true,format:'esm',target:'es2022',outfile:new URL('comparison.js',out).pathname,
    alias:{three:new URL('node_modules/three/build/three.module.js',import.meta.url).pathname},legalComments:'eof',sourcemap:true});
  copyFileSync(new URL('index.html',import.meta.url),new URL('index.html',out));
  mkdirSync(new URL('assets/sky/',out),{recursive:true});
  for(const [url,base64] of Object.entries(sky.assets))writeFileSync(new URL(url.slice(1),out),Buffer.from(base64,'base64'));
  rmSync(new URL('day.webp',out),{force:true});
  const licenses=readFileSync(new URL('THIRD_PARTY_NOTICES.md',import.meta.url),'utf8');writeFileSync(new URL('THIRD_PARTY_NOTICES.txt',out),licenses);
  writeFileSync(new URL('build-receipt.json',out),JSON.stringify({status:'unadopted',base:'1dd89d3931196cb08f7b9a00541a54a6715dfe1d',rapier:'0.21.0',three:'0.186.0',sources:hashes,physicsHz:120},null,2)+'\n');
  console.log('Built isolated dist only; production routes and deployment untouched.');
}
