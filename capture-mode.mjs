import {CAPTURE_PRESETS, CAPTURE_INPUTS, CAPTURE_HZ, CAPTURE_WARMUP_FRAMES} from './capture-presets.mjs';

export function parseCaptureOptions(search = '') {
  const query = new URLSearchParams(search);
  if (query.has('feel')) {
    if(query.getAll('feel').length!==1||query.get('feel')!=='accelerate-brake'||query.getAll('shot').length!==1||query.get('shot')!=='academy-depth')throw Error('Feel replay requires academy-depth and accelerate-brake');
    for(const key of query.keys())if(!['shot','feel'].includes(key))throw Error('Feel replay has fixed parameters');
    return Object.freeze({shot:'academy-depth',preset:CAPTURE_PRESETS['academy-depth'],seed:95276,input:'idle',ticks:186,t:3.1,requestedTime:3.1,frames:91,dt:1/60,feel:'accelerate-brake'});
  }
  if (!query.has('shot')) return null; // Ordinary play ignores capture-only parameters.
  for (const key of ['shot', 'seed', 't', 'input', 'frames']) {
    if (query.getAll(key).length > 1) throw Error('Duplicate capture parameter: ' + key);
  }
  const shot = query.get('shot'), preset = CAPTURE_PRESETS[shot];
  if (!Object.hasOwn(CAPTURE_PRESETS, shot)) throw Error('Unknown capture shot: ' + shot);
  const number = (key, fallback, max, integer = false) => {
    if (!query.has(key)) return fallback;
    const raw = query.get(key);
    if (!/^\d+(?:\.\d+)?$/.test(raw)) throw Error('Invalid capture ' + key);
    const value = Number(raw);
    if (!Number.isFinite(value) || value < 0 || value > max || (integer && !Number.isInteger(value))) throw Error('Invalid capture ' + key);
    return value;
  };
  const seed = number('seed', preset.seed, 0xffffffff, true);
  const requestedTime = number('t', preset.t, 120);
  const ticks = Math.round(requestedTime * CAPTURE_HZ);
  const frames = number('frames', 1, 600, true);
  if (frames < 1) throw Error('Invalid capture frames');
  if (ticks + frames - 1 > 120 * CAPTURE_HZ) throw Error('Capture sequence exceeds 120 seconds');
  const input = query.get('input') ?? preset.input;
  if (!CAPTURE_INPUTS.includes(input)) throw Error('Unknown capture input: ' + input);
  return Object.freeze({shot, preset, seed, input, ticks, t: ticks / CAPTURE_HZ, requestedTime, frames, dt: 1 / CAPTURE_HZ});
}

export function createMemoryStorage() {
  const entries = new Map();
  return {getItem: key => entries.get(String(key)) ?? null,
    setItem: (key, value) => { entries.set(String(key), String(value)); },
    removeItem: key => { entries.delete(String(key)); }, clear: () => entries.clear(),
    key: index => [...entries.keys()][index] ?? null, get length() { return entries.size; }};
}

export function createCaptureRuntime(search, host = globalThis) {
  const options = parseCaptureOptions(search), active = Boolean(options);
  let tick = 0, randomState = options?.seed ?? 0;
  const memory = active ? createMemoryStorage() : null;
  // Do not access the normal browser storage getter until a caller's try/catch.
  const storage = memory ?? {
    getItem: key => host.localStorage.getItem(key),
    setItem: (key, value) => host.localStorage.setItem(key, value),
    removeItem: key => host.localStorage.removeItem(key),
  };
  const clock = {now: () => active ? tick * 1000 / CAPTURE_HZ : host.performance.now(),
    wallNow: () => active ? 1700000000000 + tick * 1000 / CAPTURE_HZ : Date.now(),
    advance() { if (!active) throw Error('Cannot step the real clock'); return ++tick * 1000 / CAPTURE_HZ; },
    get tick() { return tick; }};
  const random = () => {
    if (!active) return Math.random();
    randomState = (Math.imul(randomState, 1664525) + 1013904223) >>> 0;
    return randomState / 4294967296;
  };
  return {active, options, clock, storage, random};
}

export function classifyRenderer(renderer, {canvas = false, hardwareVerified = false} = {}) {
  if (canvas || /swiftshader|llvmpipe|softpipe|software|swrast|lavapipe|microsoft basic render|gdi generic/i.test(renderer ?? '')) return 'software';
  // A vendor/model string is evidence, not proof of a hardware-backed context.
  return hardwareVerified && renderer ? 'gpu' : 'unknown';
}

export function readRendererInfo(gl) {
  if (!gl) return {api: 'canvas2d', renderer: 'Canvas 2D', maskedRenderer: null, vendor: null, classification: 'software'};
  let renderer = null, vendor = null, maskedRenderer = null, version = null;
  try {
    maskedRenderer = gl.getParameter(gl.RENDERER); version = gl.getParameter(gl.VERSION);
    const debug = gl.getExtension('WEBGL_debug_renderer_info');
    if (debug) { renderer = gl.getParameter(debug.UNMASKED_RENDERER_WEBGL); vendor = gl.getParameter(debug.UNMASKED_VENDOR_WEBGL); }
  } catch { /* Restricted debug extension is unknown, never guessed as GPU. */ }
  return {api: 'webgl2', renderer, maskedRenderer, vendor, version, classification: classifyRenderer(renderer || maskedRenderer)};
}

export function exitCaptureUrl(href) {
  const url = new URL(href);
  for (const key of ['shot', 'seed', 't', 'input', 'frames', 'feel']) url.searchParams.delete(key);
  return url.href;
}

// Acknowledge each frame explicitly; elapsed wall time never advances the game.
export function createCaptureController({runtime, step, render, snapshot, ready = async () => {}, yieldTask = () => new Promise(resolve => setTimeout(resolve, 0))}) {
  const {options, clock} = runtime;
  if (!options) throw Error('Capture controller requires an explicit shot');
  let disposed = false, busy = false, started = false, frame = 0, published = null;
  const check = () => { if (disposed) throw Error('Capture disposed'); };
  const draw = async () => {
    for (let i = 0; i < CAPTURE_WARMUP_FRAMES; i++) { check(); render(); await yieldTask(); }
    check(); published = {...snapshot(), ready: true, frame, t: clock.tick / CAPTURE_HZ, tick: clock.tick,
      dt: options.dt, seed: options.seed, shot: options.shot, input: options.input, frames: options.frames,
      done: frame === options.frames - 1, warmupFrames: CAPTURE_WARMUP_FRAMES};
    return published;
  };
  return {
    async start() {
      if (started) throw Error('Capture already started'); started = true; busy = true;
      try {
        await ready(); check();
        for (let tick = 0; tick < options.ticks; tick++) {
          check(); step(clock.advance(), options.dt);
          if (tick % 60 === 59) await yieldTask();
        }
        return await draw();
      } finally { busy = false; }
    },
    async next() {
      if (busy) throw Error('Capture frame is still being prepared');
      check(); if (!published) throw Error('Capture not ready');
      if (frame >= options.frames - 1) return published;
      busy = true; published = null;
      try { frame++; step(clock.advance(), options.dt); return await draw(); }
      finally { busy = false; }
    },
    dispose() { disposed = true; published = null; },
  };
}
