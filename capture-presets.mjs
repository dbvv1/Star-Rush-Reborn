// Road coordinates are metres along the existing spline, lateral metres, height.
// These are project baselines, not claimed measurements of a Forza camera.
export const CAPTURE_PRESETS = Object.freeze({
  'coast-chase': Object.freeze({
    track: 'coast-reborn', seed: 73121, t: 28, input: 'road-tour',
    width: 1280, height: 720, fov: 62, camera: 'gameplay',
    purpose: 'Normal production chase camera, approaching the coastal bend.',
  }),
  'coast-full-bend': Object.freeze({
    track: 'coast-reborn', seed: 73121, t: 28, input: 'road-tour',
    width: 1280, height: 720, fov: 58, camera: 'road-fixed',
    eye: Object.freeze([480, 130, 100]), target: Object.freeze([460, -55, 0]),
    purpose: 'Survey the complete coastal bend and road-to-terrain transition.',
  }),
  'academy-depth': Object.freeze({
    track: 'academy-reborn', seed: 95276, t: 14, input: 'road-tour',
    width: 1280, height: 720, fov: 62, camera: 'gameplay',
    purpose: 'Weak-depth baseline: flat training ground and distant silhouette.',
  }),
});
export const CAPTURE_INPUTS = Object.freeze(['road-tour', 'idle', 'accelerate-brake']);
export const CAPTURE_HZ = 60;
export const CAPTURE_WARMUP_FRAMES = 12;
