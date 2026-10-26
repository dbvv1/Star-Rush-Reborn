# Coast ambience: coast-v1

Opt-in sea breeze and distant surf for the `/road` coast circuit. The default
build stays silent here: `STAR_RUSH_COAST_AMBIENCE` is `off` unless a build
explicitly selects `coast-v1`. Only `/road` creates the layer, it is audible
only around the 380–660 m coast corner, and it connects to the existing SFX
master rather than changing engine, tire, impact or music levels.

This is generated source plus a reproducible processing recipe and an
engineering candidate, not listening approval. Subjective quality and the
actual in-race mix are **not verified** yet.

## Sound source

- Model: **MOSS-SoundEffect v2.0** (1.3B DiT, flow matching, DAC VAE, Qwen3 text encoder).
- Weights: `modelscope openmoss/MOSS-SoundEffect-v2.0` (Apache-2.0). ModelScope
  is the vendor's own repository; the public model is also published by
  `OpenMOSS-Team` on Hugging Face. All 17 weight/config files were verified by
  size and SHA256 before use; per-file revisions are in `source-metadata.json`.
- Inference source: `OpenMOSS/MOSS-TTS` commit
  `934d6826b084c46a0d033402174d5f8ac4ed2519`, `moss_soundeffect_v2/`.
- Prompt, seed and parameters: `manifest.json`.
- Raw model output: `source/seed0-10s.wav` (48 kHz mono float32) and
  `source/seed1-10s.wav` for the alternative seed. Neither raw file is edited.
  Seed 0 was selected because it kept more 200–2000 Hz presence (29.8% vs
  5.3% band energy) while still being quiet; seed 1 is archived, not used.
  This was a numeric choice, not a listening choice.

## Runtime clip

`runtime/coast-breeze-v1.wav` is derived from the selected raw seed by
`prepare.py`: 25 Hz high-pass, equal-power last/first 0.75 s loop seam, fixed
RMS with a peak ceiling, then dual-mono 48 kHz PCM16. Exact hashes, sizes,
duration and gains are in `manifest.json`. The model emits mono, so the
stereo file intentionally has identical channels; no fake stereo widening
was added.

Rebuild after replacing `source/seed0-10s.wav`:

```bash
python3 assets/coast-ambience/prepare.py
```

Requires Python 3 and ffmpeg; no Python packages are needed.

To regenerate the raw outputs, point `infer_moss.py` at a checkout of the
pinned MOSS source and at separately downloaded weights (weights are not in
this repository):

```bash
python3 assets/coast-ambience/infer_moss.py \
  --source-dir /path/to/MOSS-TTS \
  --model-dir /path/to/MOSS-SoundEffect-v2.0 \
  --prompt "$(python3 -c 'import json;print(json.load(open("assets/coast-ambience/manifest.json"))["prompt"])')" \
  --seeds 0,1 --out-dir /tmp/coast-raw
```

The script includes the two source-side adaptations described in
`CREDITS.txt`. It writes float32 mono WAVs plus per-seed JSON metadata.

## Integration and build switch

```bash
STAR_RUSH_COAST_AMBIENCE=coast-v1 npm run build   # candidate
npm run build                                      # default, no bytes/fetch
```

`coast-ambience-assets.mjs` validates the manifest, PCM header, stereo/48 kHz
format, exact byte count and SHA256, and reuses the existing inline
`/assets/impact-audio/` worker route. Only the `/road` entry receives the URL;
the `/` entry never does, including when `STAR_RUSH_DRIVING_MODEL=road` serves
the same road-driving simulation at both routes. `audio.js` additionally
checks the actual pathname before creating the layer, so a stray shared bundle
cannot fetch it from `/`. `audio.js` creates one looping
`AudioBufferSourceNode` per `AudioContext`; loading is coalesced.
Missing/malformed/decode-failed/timeout assets leave the layer silent. Pause,
finish, mute and SFX volume drive its gain to zero; restart reuses the same
source, so repeated starts do not accumulate layers.

Mix: the clip is sent at a fixed 0.05 through its own gain into the existing
master (the same master that already applies mute/SFX volume). The region uses
40 m smooth fades at 380–420 m and 620–660 m. Other tracks and the default `/`
entry neither create nor fetch it. No global loudness increase is used.

## Verification status

- Ran on RTX 5070 12 GB: PyTorch 2.9.0+cu128, CUDA 12.8, bfloat16, batch 1,
  100 steps, 30 s latent → 10 s output. Load took 46 s; peak allocated VRAM
  9.895 GB, peak reserved 12.803 GB. No OOM, but reservation exceeded the
  12.2 GB of dedicated memory via shared-memory oversubscription while the
  desktop GPU was in use, so 12 GB headroom is marginal rather than proven.
  Seed 0 generation took 446.5 s (cold/contended), seed 1 153.2 s (warm).
- Numeric checks: raw clips are quiet (seed 0 RMS 0.0153, peak 0.0833),
  no clipping, and the processed 9.25 s loop has a seam step (0.0094) close
  to neighbouring sample steps (0.006–0.007) after the equal-power blend.
  Runtime RMS is 0.080, peak 0.370, half-second RMS varies ~6.8 dB.
- Asset format, build isolation and lifecycle are covered by
  `tests/coast-ambience.mjs` and `tests/coast-ambience-source-choice.mjs`.
- **Not verified:** human listening of the isolated clip, comparison with the
  ambience-off mix, loop-seam audibility, and an actual in-game mixed recording.
  Do not treat engineering checks or numeric seam continuity as listening
  approval.
