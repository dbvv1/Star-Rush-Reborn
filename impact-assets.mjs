// Exact two-file PCM package; source OGGs and provenance stay out of runtime.
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
export function loadImpactAssets(directory='assets/impact-audio'){
 const manifest=JSON.parse(readFileSync(join(directory,'manifest.json'),'utf8')),client={},assets={};
 if(manifest.version!==2||manifest.license!=='CC0-1.0')throw Error('Invalid impact manifest');
 for(const key of ['light','medium']){
  const entry=manifest.clips?.[key];if(entry?.file!==`rail-${key}-v2.wav`)throw Error('Unexpected impact file');
  const bytes=readFileSync(join(directory,'runtime',entry.file)),hash=createHash('sha256').update(bytes).digest('hex');
  // Recipe emits a canonical 44-byte RIFF PCM header (no tags/extra chunks).
  if(bytes.length<46||bytes.length>50000||bytes.toString('ascii',0,4)!=='RIFF'||bytes.readUInt32LE(4)+8!==bytes.length||bytes.toString('ascii',8,16)!=='WAVEfmt '||bytes.readUInt32LE(16)!==16||bytes.readUInt16LE(20)!==1||bytes.readUInt16LE(22)!==1||bytes.readUInt32LE(24)!==22050||bytes.readUInt32LE(28)!==44100||bytes.readUInt16LE(32)!==2||bytes.readUInt16LE(34)!==16||bytes.toString('ascii',36,40)!=='data'||bytes.readUInt32LE(40)!==bytes.length-44||(bytes.length-44)%2||hash!==entry.sha256||bytes.length!==entry.bytes)throw Error('Invalid impact PCM: '+key);
  const url='/assets/impact-audio/'+entry.file.replace('.wav','.'+hash.slice(0,12)+'.wav');client[key]=url;assets[url]=bytes.toString('base64');
 }
 return {client,assets};
}
