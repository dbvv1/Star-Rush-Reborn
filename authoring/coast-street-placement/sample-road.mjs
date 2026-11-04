// Read-only replica of the current master `circuitRoad(s)` frame source for the
// coast-reborn track. Kept in this authoring directory so placement tests never
// import or modify circuit.js at runtime. `loadMasterCircuit()` loads the real
// browser scripts in a bare VM context only to prove the replica still matches.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const TRACK_SCALE = 1.45;
const COAST_POINTS = [
  [-155, 0, 70], [-80, 0, 70], [0, .2, 70], [85, .7, 65], [135, 1.2, 30],
  [130, 1.6, -20], [75, 2, -28], [38, 1.8, 0], [0, 1.5, -10], [8, .8, -58],
  [65, .2, -80], [115, 0, -85], [130, .4, -125], [75, 1, -150], [0, 1.6, -145],
  [-60, 2, -100], [-110, 1.2, -135], [-155, .5, -100], [-200, 0, -25],
  [-218, 0, 28], [-215, 0, 70],
];

export const COAST_TRACK_ID = 'coast-reborn';
export const COAST_TRACK_SCALE = TRACK_SCALE;
export const COAST_POINTS_SCALED = COAST_POINTS.map(p => [p[0] * TRACK_SCALE, p[1], p[2] * TRACK_SCALE]);

const sub = (a, b) => a.map((x, i) => x - b[i]);
const length = a => Math.hypot(...a);
const mix = (a, b, t) => a + (b - a) * t;

function circuitPosition(u) {
  const pts = COAST_POINTS_SCALED, n = pts.length, x = ((u % n) + n) % n;
  const i = Math.floor(x), t = x - i;
  const a = pts[(i + n - 1) % n], b = pts[i], c = pts[(i + 1) % n], d = pts[(i + 2) % n];
  return b.map((v, j) => .5 * ((2 * v) + (-a[j] + c[j]) * t + (2 * a[j] - 5 * v + 4 * c[j] - d[j]) * t * t + (-a[j] + 3 * v - 3 * c[j] + d[j]) * t * t * t));
}

function buildSamples() {
  const samples = [];
  let total = 0;
  const steps = COAST_POINTS_SCALED.length * 120;
  for (let i = 0; i <= steps; i++) {
    const t = i * COAST_POINTS_SCALED.length / steps, p = circuitPosition(t);
    if (i) total += length(sub(p, samples[i - 1].p));
    const tangent = sub(circuitPosition(t + .0001), circuitPosition(t - .0001));
    samples.push({s: total, p, h: Math.atan2(tangent[2], tangent[0])});
  }
  return {samples, total};
}

const {samples: COAST_SAMPLES, total: COAST_LENGTH} = buildSamples();

export const COAST_CIRCUIT_LENGTH = COAST_LENGTH;

/** Exact replica of master circuit.js `circuitRoad(s)` for coast-reborn. */
export function coastRoad(s) {
  const u = ((s % COAST_LENGTH) + COAST_LENGTH) % COAST_LENGTH;
  let lo = 0, hi = COAST_SAMPLES.length - 1;
  while (lo + 1 < hi) {
    const m = (lo + hi) >> 1;
    if (COAST_SAMPLES[m].s <= u) lo = m; else hi = m;
  }
  const a = COAST_SAMPLES[lo], b = COAST_SAMPLES[hi];
  const t = (u - a.s) / (b.s - a.s || 1);
  const dh = Math.atan2(Math.sin(b.h - a.h), Math.cos(b.h - a.h));
  const h = a.h + dh * t;
  return {
    p: a.p.map((v, i) => mix(v, b.p[i], t)),
    h,
    T: [Math.cos(h), 0, Math.sin(h)],
    R: [-Math.sin(h), 0, Math.cos(h)],
    curv: dh / (b.s - a.s),
    slope: (b.p[1] - a.p[1]) / (b.s - a.s),
  };
}

/**
 * Load the real engine.js + circuit.js in a bare VM context. Used only by
 * tests and the fixture capture to prove the replica/fixture are still tied
 * to the current master source. The scripts are read, never written.
 */
export function loadMasterCircuit(repoRoot) {
  if (typeof repoRoot !== 'string' || !repoRoot) throw new Error('repoRoot is required');
  const context = vm.createContext({console, Math, roadDriving: true});
  for (const file of ['engine.js', 'circuit.js']) {
    vm.runInContext(fs.readFileSync(path.join(repoRoot, file), 'utf8'), context, {filename: file});
  }
  if (typeof context.circuitRoad !== 'function') throw new Error('circuit.js did not expose circuitRoad');
  const circuitLength = vm.runInContext('CIRCUIT_LENGTH', context);
  return {circuitRoad: context.circuitRoad, circuitLength};
}

/**
 * Build a sampleRoad(s) from a recorded 1 m frame table. Integer stations are
 * returned exactly as recorded; fractional stations use straight line and
 * shortest-arc heading interpolation for contract inspection only.
 */
export function createFixtureSampleRoad(frames) {
  const byStation = new Map();
  for (const frame of frames) {
    if (!Number.isInteger(frame.s)) throw new Error(`Frame station ${frame.s} is not an integer`);
    if (byStation.has(frame.s)) throw new Error(`Duplicate frame station ${frame.s}`);
    byStation.set(frame.s, frame);
  }
  const stations = [...byStation.keys()].sort((a, b) => a - b);
  const min = stations[0], max = stations[stations.length - 1];
  return function sampleRoad(s) {
    if (Number.isInteger(s) && byStation.has(s)) return byStation.get(s);
    const lo = Math.floor(s), hi = Math.ceil(s);
    const a = byStation.get(lo), b = byStation.get(hi);
    if (!a || !b) throw new Error(`Station ${s} is outside fixture range ${min}..${max}`);
    const t = s - lo;
    const dh = Math.atan2(Math.sin(b.h - a.h), Math.cos(b.h - a.h));
    const h = a.h + dh * t;
    return {
      p: a.p.map((v, i) => mix(v, b.p[i], t)),
      h,
      T: [Math.cos(h), 0, Math.sin(h)],
      R: [-Math.sin(h), 0, Math.cos(h)],
      curv: mix(a.curv, b.curv, t),
      slope: mix(a.slope, b.slope, t),
    };
  };
}

/** Synthetic straight road frame helper for unit tests. */
export function straightRoad({height = 0, heading = 0} = {}) {
  return function sampleRoad(s) {
    const T = [Math.cos(heading), 0, Math.sin(heading)];
    const R = [-Math.sin(heading), 0, Math.cos(heading)];
    return {p: [s * T[0], height, s * T[2]], h: heading, T, R, curv: 0, slope: 0};
  };
}
