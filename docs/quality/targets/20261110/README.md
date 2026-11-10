# Star coastal material target, 2026-11-10

These are generated design images, NOT game captures. Source: our own `7e87d4c3/coast-full-bend/coast-full-bend-run1.png`. Built-in image generation created two 16:9 alternatives and a 1–5 anchor sheet. No commercial image was used.

## Independent selection

A nonauthor reviewer inspected the actual source and all three generated files and selected **target-b.png**: it retains the U-bend and existing repetitive houses/trees sufficiently to scope a coherent ground/coastal slope material pass. A changes houses, tree silhouettes, lighthouse foundation and shore detail across too many layers; retain it only as an aspirational alternative.

B still has generated geometry/camera drift (shore, road width, house details). It is an art direction reference, not a pixel acceptance target. The anchor sheet has changing objects/framing and is illustrative, not calibrated real samples. Neither image nor anchor numbering establishes a measured game score. Mechanical repetition remains unresolved in B.

## Actual implementation candidate

`coastal-space.js` reuses the existing coast-terrain-loop candidate's complete terrain pass (shared area-weighted normals, deterministic broad ground colors and protected low-frequency relief), rather than starting a duplicate. Its ground/earth/shore palette now aligns with the authored ground/shoulder family from content batch 0a1b965. Existing road, water-crossing triangles, street matrices and support cells remain protected. That initial terrain pass did not repaint walls. The later wall revisions are described below; neither pass changes the default switch, adds a public candidate, or changes world light or simulation.

This is an implementation candidate. Its tests/build establish engineering checks only. Hardware GPU before/after same-camera images, browser validation and independent blind review are still required. No measured score or coverage increase is claimed.

## Prompts and next acceptance

A: exact original aerial U-bend composition, achievable 3/5, cohesive organic ground/shore, clustered house/tree variation, no UI or new roads. B: preserve existing assets and layout, only continuous restrained grass/sand/limestone/shoulder material plus readable soft shading, no cinematic/photo treatment. Anchors: generated five-column BLOCKOUT / REPETITIVE / COHERENT / POLISHED / DISTINCTIVE progression, explicitly labeled GENERATED ANCHORS.

Next: freeze candidate SHA, capture original fixed camera at 1280×720 DPR1 on genuine hardware renderer before and after, then two nonauthor blind reviews. Require at least one real 2→3 improvement without road readability regression before score/default changes.

## Engineering review

Nonauthor code review found no blocker to retaining this candidate, but highlighted silhouette faceting is not fixed by smooth normals; relief can form local humps; added initialization loops need browser timing; fixed historical hashes are engineering guards, not visual proof. Specialized tests: 9/9 pass. Build: exit 0 after installing the locked experimental dependencies with a writable npm cache. Full suite is tracked separately; no browser validation claimed.

## Unified wall family

The same coastal candidate now recolors only explicitly named `wall` primitives from the pinned street GLB to three neighboring plaster tones by broad street group, converted once to the renderer's linear RGB convention. Roof/glass, geometry, placement, source buffers and legacy gloss remain unchanged. No additional switch or default change. Missing classification fails through the existing coastal fallback. This connects walls to the continuous ground/shoulder family; no visual acceptance or coverage credit is claimed. All 30 houses, original placement matrices and foundations remain intact. Rows 320–400 and 520–600 use the original `#d9d0bc`; 440–480 use warmer `#d2c5ad`; 640–680 use cooler `#c9c9bd`. Each complete row shares its tone, with no per-house RNG or repeating A/B/C cycle. Cache identity includes the source part and palette, so nine meshes at most are shared across the 30 houses; the same vertex buffers feed Three and Canvas, and existing fallback disposes every variant.

This candidate addresses only color repetition. It does not fix repeated silhouettes, equal spacing or empty ground. A nonauthor inspected the old actual full-bend image and target B, and rejected deleting rows because that could worsen the empty terrain and disturb accepted-layout assumptions. The proposed colors are uncalibrated starting values, not a visual acceptance. Keep the previous SHA for the hardware-GPU before/after comparison; revert this layer if both independent reviewers cannot identify a worthwhile improvement without reduced road readability. No default change, new side candidate or deployment.
