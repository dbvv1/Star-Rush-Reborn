from pathlib import Path
import subprocess,hashlib,json
import numpy as np
from scipy.io import wavfile
p=Path(__file__).parent
clips={}
for name,target in [('engine',.45),('tire',.30)]:
 src=p/'source'/f'{name}-loop.wav'
 x=np.frombuffer(subprocess.check_output(['ffmpeg','-v','error','-i',str(src),'-f','f32le','-ac','1','-ar','48000','-']),dtype='<f4').astype(float)
 x-=x.mean();n=960;a=np.linspace(0,np.pi/2,n)
 x=np.r_[x[-n:]*np.cos(a)+x[:n]*np.sin(a),x[n:-n]]
 x*=target/np.sqrt(np.mean(x*x))
 # Fixed peak ceiling for safe integer delivery; no dynamic compression.
 scale=min(1,.95/max(abs(x)));x*=scale
 f=p/'runtime'/f'{name}-v1.wav';wavfile.write(f,48000,(x*32767).astype('<i2'))
 clips[name]={'file':f.name,'sourceSha256':hashlib.sha256(src.read_bytes()).hexdigest(),'sha256':hashlib.sha256(f.read_bytes()).hexdigest(),'bytes':f.stat().st_size,'duration':len(x)/48000,'rmsTarget':target,'peakSafetyScale':float(scale)}
(p/'manifest.json').write_text(json.dumps({'profile':'sample-v1','clips':clips},indent=2)+'\n')
