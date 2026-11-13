import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {assertCaseUrl} from './smoke-launch.mjs';
import {parseCaptureOptions} from '../capture-mode.mjs';

export function parseCaptureCli(argv){
 const [base,output,shot='coast-chase',...args]=argv;
 if(!base||!output)throw Error('Usage: capture.mjs BASE NEW_OUTPUT SHOT [--commit FULL_SHA] [--query key=value] [--repeat] [--software] [--seed n] [--t seconds] [--frames n] [--input name]');
 const url=assertCaseUrl(base);
 for(const key of new Set(url.searchParams.keys()))assert.equal(url.searchParams.getAll(key).length,1,'Duplicate base query parameter: '+key);
 if(url.searchParams.has('shot'))assert.equal(url.searchParams.get('shot'),shot,'Base shot conflicts with positional shot');
 url.searchParams.set('shot',shot);
 let repeat=false,software=true,headful=false,hardwareEvidencePath=null,expectedCommit=null;
 const seen=new Set();
 for(let index=0;index<args.length;index++){
  const arg=args[index];
  if(arg==='--repeat')repeat=true;
  else if(arg==='--software')software=true;
  else if(arg==='--headful')headful=true;
  else if(['--seed','--t','--frames','--input','--hardware-evidence','--commit','--query'].includes(arg)){
   const value=args[++index];if(value===undefined||value.startsWith('--'))throw Error('Missing '+arg+' value');
   if(seen.has(arg)&&arg!=='--query')throw Error('Duplicate '+arg);seen.add(arg);
   if(arg==='--hardware-evidence')hardwareEvidencePath=value;
   else if(arg==='--commit'){
    assert(/^[0-9a-f]{40}$/.test(value),'--commit requires a full lowercase commit SHA');expectedCommit=value;
   }else if(arg==='--query'){
    const query=new URLSearchParams(value.startsWith('?')?value.slice(1):value);
    assert([...query].length>0,'Empty --query');
    for(const [key,item] of query){
     assert(!['shot','seed','t','frames','input'].includes(key),'Use capture options, not --query, for '+key);
     assert(!url.searchParams.has(key),'Duplicate query parameter: '+key);url.searchParams.append(key,item);
    }
   }else url.searchParams.set(arg.slice(2),value);
  }else throw Error('Unknown argument: '+arg);
 }
 return {url,output,shot,repeat,software,headful,hardwareEvidencePath,expectedCommit,options:parseCaptureOptions(url.search)};
}

export function captureSourceEvidence(root,expectedCommit){
 const git=(...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8',windowsHide:true}).trim();
 const commit=git('rev-parse','HEAD');
 if(expectedCommit)assert.equal(commit,expectedCommit,'Capture source HEAD differs from --commit');
 return {commit,tree:git('rev-parse','HEAD^{tree}'),dirty:Boolean(git('status','--porcelain','--untracked-files=no'))};
}
