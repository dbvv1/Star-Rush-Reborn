"""Rebuild two narrow CC0 rail-impact derivatives (requires ffmpeg, no download)."""
from pathlib import Path
import subprocess, hashlib, json, wave
root=Path(__file__).resolve().parent/'assets/impact-audio'
items={}
for key,source in [('light','impactMetal_light_000.ogg'),('medium','impactMetal_medium_000.ogg')]:
    target=root/'runtime'/f'rail-{key}-v2.wav'
    subprocess.run(['ffmpeg','-v','error','-y','-i',str(root/'source'/source),'-map_metadata','-1','-af','volume=0.5','-ac','1','-ar','22050','-c:a','pcm_s16le','-fflags','+bitexact','-flags:a','+bitexact',str(target)],check=True)
    with wave.open(str(target)) as w: duration=w.getnframes()/w.getframerate()
    items[key]={'file':target.name,'source':source,'sourceSha256':hashlib.sha256((root/'source'/source).read_bytes()).hexdigest(),'sha256':hashlib.sha256(target.read_bytes()).hexdigest(),'bytes':target.stat().st_size,'durationSeconds':duration,'sampleRate':22050,'channels':1,'bits':16}
(root/'manifest.json').write_text(json.dumps({'version':2,'license':'CC0-1.0','sourceUrl':'https://kenney.nl/assets/impact-sounds','clips':items},ensure_ascii=False,indent=2)+'\n')
