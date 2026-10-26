import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
// Candidate opt-in only. A disabled profile has zero audio fetches/assets.
export function loadDrivingAudioAssets(directory='assets/driving-audio',profile='procedural'){
 if(!['procedural','sample-v1'].includes(profile))throw Error('Unknown driving audio profile: '+profile);
 const client={profile,urls:{}},assets={};
 if(profile==='procedural')return {client,assets};
 const manifest=JSON.parse(readFileSync(join(directory,'manifest.json'),'utf8'));
 for(const key of ['engine','tire']){
  const entry=manifest.clips[key],file=key+'-v1.wav';if(entry.file!==file)throw Error('Invalid driving clip name');
  const bytes=readFileSync(join(directory,'runtime',file)),hash=createHash('sha256').update(bytes).digest('hex');
  if(hash!==entry.sha256||bytes.length!==entry.bytes||bytes.length>350000||bytes.toString('ascii',0,4)!=='RIFF'||bytes.toString('ascii',8,12)!=='WAVE'||bytes.readUInt16LE(20)!==1||bytes.readUInt16LE(22)!==1||bytes.readUInt32LE(24)!==48000||bytes.readUInt16LE(34)!==16)throw Error('Invalid driving clip');
  const url='/assets/impact-audio/driving-'+key+'.'+hash.slice(0,12)+'.wav';client.urls[key]=url;assets[url]=bytes.toString('base64');
 }
 return {client,assets};
}
