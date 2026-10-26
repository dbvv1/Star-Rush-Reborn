# Coast ambience: coast-v1

Opt-in sea breeze and distant surf for the `/road` coast circuit. The default
build stays silent here: `STAR_RUSH_COAST_AMBIENCE` is `off` unless a build
explicitly selects `coast-v1`. Only `/road` creates the layer, the clip is
fetched only once the 汐见海岸 (`coast-reborn`) circuit is selected and its
countdown starts, it is audible only around the 380–660 m coast corner, and it
connects to the existing SFX master rather than changing engine, tire, impact
or music levels.

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
  Seed 0 was selected because it kept more 200–2000 Hz band share (23.50% vs
  6.35%) and had lower full-band RMS (0.0153 vs 0.0247); seed 1 is archived,
  not used. This was a numeric choice, not a listening choice. The exact
  measurement definition and output are below and in
  `source/seed-band-analysis.json`.

## Seed selection measurement

`measure_seed_bands.py` measures the two archived raw clips with ffmpeg only:

```bash
python3 assets/coast-ambience/measure_seed_bands.py
```

For each seed it reads full-band RMS and the RMS after the fixed chain
`highpass=f=200:poles=2,lowpass=f=2000:poles=2` (both from ffmpeg `astats`,
dBFS) and computes `bandShare = 10^((bandRmsDb - fullRmsDb)/10) * 100`.
The result is written to `source/seed-band-analysis.json`: seed 0 is 23.50%,
seed 1 is 6.35%. The source SHA256 values and filter chain are recorded in the
same file, so the numbers can be re-derived from the archived WAVs. This is a
filter-defined numeric comparison, not perceptual loudness or listening
approval; seed 0 was picked for the higher share plus its lower overall RMS.

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
cannot fetch it from `/`. The clip is not requested at audio init: `/road`
creates the layer object, but `updateAudio` calls `load()` only once the coast
circuit (`coast-reborn`) is selected and its countdown or running state is
active. Selecting 花见坂 or 星跃训练场 on `/road` never fetches the bytes.
`load()` makes at most one attempt, so a failed or timed-out asset is not
refetched on every frame, and it creates one looping `AudioBufferSourceNode`
per `AudioContext`; concurrent loading is coalesced.
Missing/malformed/decode-failed/timeout assets leave the layer silent. Pause,
finish, mute and SFX volume drive its gain to zero; restart reuses the same
source, so repeated starts do not accumulate layers.

Mix: the clip is sent at a fixed 0.05 through its own gain into the existing
master (the same master that already applies mute/SFX volume). The region uses
40 m smooth fades at 380–420 m and 620–660 m. Other circuits, non-circuit
modes and the default `/` entry never fetch it. No global loudness increase is
used.

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
  Runtime RMS is 0.080, peak 0.370, half-second RMS varies ~6.8 dB. The
  manifest's seed band shares (23.50% vs 6.35%) are reproduced by
  `measure_seed_bands.py`; the source hashes and filter chain are in
  `source/seed-band-analysis.json`.
- Asset format, build isolation, lazy per-track loading and lifecycle are
  covered by `tests/coast-ambience.mjs` and
  `tests/coast-ambience-source-choice.mjs`.
- Real browser (`node tests/coast-ambience-browser.mjs`; prepare with
  `npm ci && npx playwright install chromium`, see `docs/browser-smoke.md`):
  headless Chromium with software WebGL. A demo lap drives through the
  380–660 m corner and past 680 m on `/road`.
  With `coast-v1` the clip is fetched once (HTTP 200), decoded as one
  2-channel 9.25 s buffer and started as one looping source; with `off` no
  request or source appears. Both runs render without console, page, request or
  HTTP errors. The script saves corner screenshots and real-time mixed WebM
  captures under the ignored `outputs/coast-ambience/` directory. The capture
  is the live browser master bus, not an offline replay.
- The saved WebMs are for listening, not a settled level measurement. The
  previous attempt read the on-screen race clock (about 19–34 s) as capture
  time; on the WebM timeline the 380–660 m window is much later, so that
  segment lies before the 380 m fade-in and cannot show the layer. The report
  now records `captureMarks` in `browser-on.json` (WebM-relative seconds for
  380/420/620/660 m, kept separate from the race clock) so the real corner can
  be selected for a later in-band measurement. The layer gain is fixed at
  0.05 and the captures exist; audibility is still a listening question.
- **Not verified:** human listening of the isolated clip or the browser
  captures, subjective comparison with the ambience-off mix, and loop-seam
  audibility. Do not treat engineering checks, numeric seam continuity or the
  existence of a capture as listening approval.
