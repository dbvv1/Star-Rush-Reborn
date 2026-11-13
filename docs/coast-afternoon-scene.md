# Coast afternoon scene

Review entry: `/?scene=coast-afternoon-v1`. The player menu has no candidate link. Omit `scene` to retain the released coast appearance; `environment=baseline` also disables this profile's live lighting/surfaces/audio. Legacy and other circuits keep their original appearance.

## Player-facing target

A sunlit, readable coastal road rather than a uniformly pale island: warm direct light against cool skylight, turquoise water with restrained moving highlights, broad grass variation rather than repeated noise, lightly aged plaster, and a quiet low-frequency coast bed that yields to driving speed. This is one coordinated scene treatment, not a new driving model or weather mode. The existing land footprint, collision, buildings, route, camera and simulation remain unchanged.

The treatment uses the existing instanced geometry and adds no screen-sized postprocess pass or image download. World coordinates include the floating origin so patterns do not swim as chunks move. Only explicitly tagged sea/landscape/street meshes receive surface detail. A failed candidate shader removes the shader modifications, restores the released light/sky path, mutes its bed, and shows a fallback notice. The afternoon gradient replaces the panorama only while this scene is active; other courses restore it.

The audio bed reuses the original noise buffer through one low-pass/gain chain, bounded to gain 0.025 before the existing SFX bus. It fades out on pause, mute, non-coast and renderer fallback, and ducks with speed. This numeric bound is not a mixed-output loudness or clipping measurement.

## Verification boundary

CPU tests can verify shader injection, world-origin uniforms, scene scoping, fallback and bounded audio gain. They cannot establish a compiled WebGL image, perceptual improvement, performance or heard audio. Before adoption: compare the current default and this entry at the existing named cameras on the local receiver, complete full-match smoke with frame cost, and apply the two non-author blind-choice rule. The same-machine 1280×720 Redrock reference comparison is still owed. No picture, score, coverage or website improvement is claimed from this source change.

This first treatment does not solve repeated building silhouettes, sparse scene dressing or all the gap to the reference. Those remain scene-design work, not something a new colour grade proves complete.
