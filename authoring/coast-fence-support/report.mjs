// Build and write the fixed-input coastal fence support report.
//
// Only CPU/Node.js: the real coastal-space model is constructed by loading the
// existing game scripts in a bare VM context, exactly like the coastal runtime
// tests. Nothing is rendered, no browser, GPU or capture slot is touched.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {createCoastVergePlan, decodeCoastVergeSource} from '../../coast-verge-runtime.mjs';
import {coastWallData, createCoastStreetPlan, decodeCoastStreetSource} from '../../coast-street-runtime.mjs';
import {meshDigest} from '../coast-street-placement/fixed-source-contract.mjs';
import {
  FENCE_SOURCE_BYTES,
  FENCE_SOURCE_SHA256,
  decodeFenceParts,
  planFenceSupports,
} from './plan.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const SOURCE_PATH = 'assets/coast-verge/verge.glb';
const OUT_FILE = 'authoring/coast-fence-support/out/coast-fence-320-680.json';

export const FIXED_ROWS = Object.freeze(Array.from({length: 10}, (_, index) =>
  [-1, 1].map(side => Object.freeze({s: 320 + index * 40, side, setback: 24}))).flat());

function read(relative) {
  return fs.readFileSync(path.join(ROOT, relative), 'utf8');
}

function loadStreetParts() {
  return decodeCoastStreetSource(
    fs.readFileSync(path.join(ROOT, 'authoring/coast-street-placement/fixed-source/street.glb')).toString('base64'));
}

/**
 * Construct the actual full coastal-space model once, through the unchanged
 * game scripts and the existing street/verge consumers. Returns the model and
 * the real road frame/sample sources the planner must check.
 */
export function loadCoastalModel({enabled = true} = {}) {
  const streetParts = loadStreetParts();
  const context = {
    console,
    createCoastVergePlan,
    coastVergeSource: () => decodeCoastVergeSource(
      fs.readFileSync(path.join(ROOT, SOURCE_PATH)).toString('base64')),
    createCoastStreetPlan,
    coastWallData,
    coastStreetSource: () => streetParts,
  };
  const script = [
    `const roadDriving=${enabled};let coastalSpaceCandidate=${enabled};`,
    read('engine.js'),
    read('race.js').split('\n').find(line => line.startsWith('function quad(')),
    read('circuit.js'),
    read('assets/landscape/coastal-rocks.js'),
    read('coastal-space.js'),
    read('scenery.js'),
    "activeTrackId='coast-reborn';rebuildCircuit();",
    'function road(s){return circuitRoad(s)}',
    'function atRoad(s,l,y=0){const r=road(s);return add(r.p,add(mul(r.R,l),[0,y,0]))}',
    'function wrapAngle(a){return Math.atan2(Math.sin(a),Math.cos(a))}',
    'this.model=coastalSpaceModel;this.active=coastalSpaceEnabled;this.road=circuitRoad;' +
      'this.samples=()=>circuitSamples;this.run=s=>eval(s);',
  ].join('\n');
  vm.runInNewContext(script, context);
  const model = context.model();
  if (!context.active()) throw new Error('Coastal space model did not activate');
  return {model, sampleRoad: context.road, samples: context.samples()};
}

function sourceIdentity(bytes, parts) {
  const license = fs.readFileSync(path.join(ROOT, 'assets/coast-verge/FENCE-LICENSE.txt'));
  return {
    path: SOURCE_PATH,
    sha256: crypto.createHash('sha256').update(bytes).digest('hex'),
    bytes: bytes.length,
    license: {
      path: 'assets/coast-verge/FENCE-LICENSE.txt',
      sha256: crypto.createHash('sha256').update(license).digest('hex'),
    },
    parts: parts.map(part => ({
      name: part.name,
      vertices: part.sourceData.length / 10,
      triangles: part.sourceIndices.length / 3,
      meshSha256: meshDigest(part),
    })),
  };
}

/** Run the fixed 320-680 m candidate search and return the report object. */
export function buildCoastFenceReport(options = {}) {
  const bytes = fs.readFileSync(path.join(ROOT, SOURCE_PATH));
  const sha256 = crypto.createHash('sha256').update(bytes).digest('hex');
  if (sha256 !== FENCE_SOURCE_SHA256 || bytes.length !== FENCE_SOURCE_BYTES) {
    throw new Error(`Fixed verge source drifted: sha256=${sha256} bytes=${bytes.length}`);
  }
  const parts = decodeFenceParts(new Uint8Array(bytes));
  const {model, sampleRoad, samples} = loadCoastalModel(options);
  const plan = planFenceSupports(parts, model, sampleRoad, samples, FIXED_ROWS);
  const roadSamples = samples.length;
  return {
    schema: 1,
    generator: 'authoring/coast-fence-support/report.mjs',
    source: sourceIdentity(bytes, parts),
    inputs: {
      rows: FIXED_ROWS.map(row => ({...row})),
      roadSamples,
      terrainGrid: {
        x0: model.bounds.x0, x1: model.bounds.x1,
        z0: model.bounds.z0, z1: model.bounds.z1, step: model.bounds.step,
      },
      existingStreetInstances: model.street.instances.length,
      existingVergeInstances: model.verge.instances.length,
    },
    plan,
    notes: [
      'CPU-only conservative candidate search; no browser, GPU, screenshot, smoke run or blind review.',
      'A row is accepted only when every source mesh footprint passes road, house, fence, bush and whole-cell terrain bounds.',
      'Rejected rows are reported as-is; thresholds were not relaxed and no existing prop was moved or deleted.',
      'The fixed rows are candidate samples 40 m apart, not a continuous fence layout.',
    ],
  };
}

/** Deterministic JSON with a trailing newline. */
export function serializeReport(report) {
  return `${JSON.stringify(report, null, 2)}\n`;
}

function main() {
  const report = buildCoastFenceReport();
  const outPath = path.join(ROOT, OUT_FILE);
  fs.mkdirSync(path.dirname(outPath), {recursive: true});
  const text = serializeReport(report);
  fs.writeFileSync(outPath, text);
  const {summary} = report.plan;
  console.log(`wrote ${OUT_FILE}`);
  console.log(`source ${report.source.sha256}`);
  console.log(`rows ${summary.rows}, accepted ${summary.accepted}, rejected ${summary.rejected}`);
  const reasons = new Map();
  for (const item of report.plan.rejected) reasons.set(item.reason, (reasons.get(item.reason) ?? 0) + 1);
  console.log(`rejection reasons ${JSON.stringify([...reasons].sort())}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
