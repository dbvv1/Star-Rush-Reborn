// Regenerate fixed-source/coast-280-720.frames.json from the current master
// circuit.js. Reads engine.js/circuit.js only; writes one fixture inside this
// authoring directory. Not part of the game build.
//
// Provenance: base_ref is the git commit that contains the recorded circuit.js,
// resolved from HEAD (or from --base-ref <rev>) and written into the sample.
// The tracked working tree must be clean, so HEAD really describes the source
// used for the frames. Untracked files (this authoring directory before it is
// committed) are allowed. Re-record only after an intentional circuit.js change
// is committed.
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {COAST_CIRCUIT_LENGTH, coastRoad, loadMasterCircuit} from './sample-road.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '../..');
const outFile = path.join(here, 'fixed-source', 'coast-280-720.frames.json');
// The report samples 320..680 m. Each house clearance window now includes the
// required 8 m + setback distance in station space, so the capture needs a
// wider margin than the old 20 m: 280..720 covers setback 4 m and the 6 m
// second pass on both ends.
const FROM = 280, TO = 720, STEP = 1;

function git(args, options = {}) {
  return execFileSync('git', ['-C', repoRoot, ...args], {encoding: 'utf8', ...options}).trim();
}

function parseBaseRef(argv) {
  let baseRef = null;
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--base-ref') {
      if (i + 1 >= argv.length) throw new Error('--base-ref requires a commit-ish argument');
      baseRef = argv[++i];
    } else if (arg.startsWith('--base-ref=')) {
      baseRef = arg.slice('--base-ref='.length);
    } else {
      throw new Error(`Unknown argument ${arg}`);
    }
  }
  if (baseRef !== null && !baseRef) throw new Error('--base-ref requires a non-empty commit-ish');
  return baseRef;
}

const requestedRef = parseBaseRef(process.argv.slice(2));
const dirty = git(['status', '--porcelain', '--untracked-files=no']);
if (dirty) {
  throw new Error(`Refusing to record frames: tracked working tree is not clean. Commit the intended circuit.js change first.\n${dirty}`);
}
const baseRef = git(['rev-parse', '--verify', `${requestedRef ?? 'HEAD'}^{commit}`]);
try {
  execFileSync('git', ['-C', repoRoot, 'diff', '--quiet', baseRef, '--', 'circuit.js'], {stdio: 'ignore'});
} catch {
  throw new Error(`circuit.js differs between ${baseRef} and the working tree; the recorded base_ref would not describe the frames`);
}

const {circuitRoad, circuitLength} = loadMasterCircuit(repoRoot);
if (Math.abs(COAST_CIRCUIT_LENGTH - circuitLength) > 1e-9) {
  throw new Error(`Replica length ${COAST_CIRCUIT_LENGTH} does not match master ${circuitLength}; ` +
    'update COAST_POINTS/TRACK_SCALE in sample-road.mjs (the hand-written circuit.js replica)');
}

const frames = [];
for (let s = FROM; s <= TO; s += STEP) {
  const frame = circuitRoad(s);
  const replica = coastRoad(s);
  const replicaHint = 'update the hand-written COAST_POINTS/coastRoad replica in sample-road.mjs to match circuit.js';
  for (const key of ['p', 'T', 'R']) {
    if (!frame[key].every((v, i) => Object.is(v, replica[key][i]))) {
      throw new Error(`Replica ${key} drift at station ${s}; ${replicaHint}`);
    }
  }
  for (const key of ['h', 'curv', 'slope']) {
    if (!Object.is(frame[key], replica[key])) {
      throw new Error(`Replica ${key} drift at station ${s}; ${replicaHint}`);
    }
  }
  frames.push({
    s,
    p: frame.p,
    h: frame.h,
    T: frame.T,
    R: frame.R,
    curv: frame.curv,
    slope: frame.slope,
  });
}

const circuitSource = fs.readFileSync(path.join(repoRoot, 'circuit.js'));
const document = {
  schema: 1,
  kind: 'circuit-road-frame-sample',
  source: {
    file: 'circuit.js',
    base_ref: baseRef,
    sha256: crypto.createHash('sha256').update(circuitSource).digest('hex'),
  },
  track: 'coast-reborn',
  units: 'metres',
  circuit_length_m: circuitLength,
  range: {from: FROM, to: TO, step: STEP},
  frame_fields: ['p', 'h', 'T', 'R', 'curv', 'slope'],
  frames,
};

fs.writeFileSync(outFile, `${JSON.stringify(document, null, 2)}\n`);
console.log(`Wrote ${frames.length} frames to ${path.relative(repoRoot, outFile)} (base_ref ${baseRef})`);
