import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');

// The existing immutable WebP route also serves this single decorative image.
export function loadSkyAssets(directory='assets/sky'){
 const manifest=JSON.parse(readFileSync(join(directory,'manifest.json'),'utf8'));
 if(manifest.file!=='day.webp'||manifest.source!=='source/kenney-day.png'||manifest.width!==2048||manifest.height!==1024||manifest.colorSpace!=='srgb'||manifest.range!=='LDR'||manifest.lighting!==false||!Number.isFinite(manifest.yaw))throw Error('Invalid sky manifest');
 const bytes=readFileSync(join(directory,manifest.file));
 if(hash(bytes)!==manifest.sha256||hash(readFileSync(join(directory,manifest.source)))!==manifest.sourceSha256||hash(readFileSync(join(directory,'recipe.json')))!==manifest.recipeSha256)throw Error('Sky source or export fingerprint changed');
 const chunk=bytes.toString('ascii',12,16),size=bytes.length>=20?bytes.readUInt32LE(16):0;
 if(bytes.length!==manifest.bytes||bytes.length<30||bytes.length>180000||bytes.toString('ascii',0,4)!=='RIFF'||bytes.toString('ascii',8,12)!=='WEBP'||bytes.readUInt32LE(4)+8!==bytes.length||chunk!=='VP8 '||size+20+(size%2)!==bytes.length||bytes.toString('hex',23,26)!=='9d012a')throw Error('Invalid sky WebP');
 if((bytes.readUInt16LE(26)&0x3fff)!==manifest.width||(bytes.readUInt16LE(28)&0x3fff)!==manifest.height)throw Error('Sky dimensions changed');
 const url='/assets/sky/day.'+manifest.sha256.slice(0,12)+'.webp';
 return {client:{url,width:manifest.width,height:manifest.height,yaw:manifest.yaw},assets:{[url]:bytes.toString('base64')}};
}
