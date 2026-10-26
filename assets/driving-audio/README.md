# Driving audio profile: sample-v1

One reversible, opt-in voice for the existing Star driving loop. Default remains `procedural`; no handling, course, collision rules or boost events change. This is integrated audio code plus licensed source/derived assets, not proof of better sound. Listening and reference-level quality remain **unknown**.

## What changes

The original saw/triangle engine becomes a recorded loop, with 16% of the old sub retained; throttle release reduces playback rate to 85%, smoothed over 90 ms. Original engine volume/filter laws still apply. The tire loop follows the existing slip/brake envelope and a 3500-Hz low-pass. Wind, jets, boost-on tone and Kenney rail impacts are unchanged. No added beeps or new vehicle systems.

Each loop loads independently at first audio init. Until ready, or if HTTP/decode/timeout fails, that layer keeps its original procedural sound. Loading never queues old one-shots. Ready engine crossfades in over 130 ms; tire uses the existing 45-ms response. Pause/mute/SFX-zero drive candidate gain to zero through the same master. A disposed load cannot create a late loop.

## Sources and attribution — keep with redistributed derivatives

- **Engine:** “racing car engine sound loops” by **domasx2**, [source](https://opengameart.org/content/racing-car-engine-sound-loops), [exact loop_0.wav](https://opengameart.org/sites/default/files/loop_0.wav), [CC0](https://creativecommons.org/publicdomain/zero/1.0/). Author declares it remade from a public-domain pdsounds sample; historical underlying source not independently verified. The six versions differ only by pitch, so this profile uses one, not six redundant layers.
- **Tire:** “Car tire squeal skid loop” by **audible-edge (Tom Haigh)**, loop edit/submission by **qubodup**, [source](https://opengameart.org/content/car-tire-squeal-skid-loop), [exact tires_squal_loop.wav](https://opengameart.org/sites/default/files/tires_squal_loop.wav), **[CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)**. Changes: mono/48-kHz conversion, DC removal, 20-ms loop overlap, RMS scaling, peak safety scaling, low-pass and gameplay envelopes. No endorsement implied. This source is not CC0 despite some collections/search snippets.
- Existing Kenney impacts are not replaced; see [their source and CC0 license](../impact-audio/README.md).
- Project processing/code is not represented as CC0 or AI-generated audio. AI selected, processed, implemented and tested these human-authored samples; neither listening quality nor time saved has been established.

## Rebuild and edit

`python3 assets/driving-audio/prepare.py` uses installed Python NumPy/SciPy and ffmpeg. Raw originals stay in `source/`; derived PCM16 mono/48-kHz loops in `runtime/`; source/derived hashes and exact byte counts in `manifest.json`.

Recipe: remove DC; blend last and first 20 ms with equal-power sin/cos curves, shortening the loop by 20 ms; engine RMS target .45, tire .30; fixed peak safety ceiling .95 before PCM16. Engine needs no safety attenuation, tire multiplier is 0.8314665476. Runtime total is 367,200 bytes. This is an asset size, not a performance claim.

## Comparison reference and biggest gaps

[Trigger Rally Online Edition](https://github.com/CodeArtemis/TriggerRally) is a comparable small public browser arcade racer, not an AAA production target. Its [actual car audio code](https://github.com/CodeArtemis/TriggerRally/blob/gh-pages/server/public/scripts/client/car.js) separates engine, transmission, wind, skid and crash; engine level depends on throttle, pitch on engine angular speed, skid on skid level, crash on contact level. This is **source inspection**, not a listening comparison or a claim that Star now matches its quality. No reference assets or code copied.

| Dimension | Current Star gap / chosen action | Acceptance still needed |
|---|---|---|
| Load | Original pitch almost purely speed-based; candidate adds off-throttle distinction and recorded texture | Audible but not implausible gas/coast change |
| Traction | Original narrow-band white noise; one recorded tire material follows existing slip | Smooth onset/release, no shrill constant layer |
| Layers | Engine/tire/wind/boost compete; preserve boost/rail to isolate the candidate | Tires remain readable during boost; impact not masked |
| Completeness | Isolated SFX trace, no music/reference listening yet | Normal complete corner with music, author + non-author review |

Do not expand the sample set before this one combination is evaluated. If its recorded timbre is wrong for the stylized car, reject/rework it rather than count implementation as higher quality.

## Actual WebAudio audition

Run `node tests/driving-audio-server.mjs`, open its printed localhost URL in a normal browser, click **Render baseline + sample-v1**. The page calls real `audioInit`, `updateAudio`, `impactSound`, `jetSound` and the real sample loaders using native `OfflineAudioContext`; it saves two 28-second WAVs plus a report into `audio-audition-output/`. The fixture adapts the clock for scheduled calls and supplies deterministic authored input, not recorded driving. Native filters/oscillators/compressor run unchanged. Default SFX volume is 75%, so effective master is .36 in both; **no post-render gain** in the current fixture. No music.

Timeline: 0–6 accelerate; 6–8 throttle held at 34; 8–10 coast at 34 to isolate load; 10–16 drift; 17/18 light/medium rail; 20–24 boost; 24–28 brake/coast. UI audio controls and download links make the result directly auditionable. Earlier Python reconstruction and RMS-matched audition are superseded, not evidence for this version's quality.

## Build-owner handoff

`build.mjs` remains owned by the complete-corner worker. After importing `loadDrivingAudioAssets` from `./driving-audio-assets.mjs`, add immediately after `impactArtwork` creation:

```js
const drivingArtwork=loadDrivingAudioAssets('assets/driving-audio',process.env.STAR_RUSH_DRIVING_AUDIO??'procedural');
Object.assign(impactArtwork.assets,drivingArtwork.assets);
```

Then inject `const drivingAudioConfig=${JSON.stringify(drivingArtwork.client)};` into the existing generated setup string. This reuses the existing exact-hash PCM asset route and avoids a broad new static route. `STAR_RUSH_DRIVING_AUDIO=sample-v1` opts in; `procedural` contains no new asset bytes/requests. Unknown names fail the build. Add `tests/driving-audio.mjs` to the existing aggregate test script when wiring. Full game profile packaging must be checked after those owner-controlled lines are connected; the fixture alone does not prove production packaging.
