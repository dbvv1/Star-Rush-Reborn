#!/usr/bin/env node
// CPU-only reader probe: wire the fixed car standard part into the original
// engine.js Mesh/Node path and the current road-vehicle state.
//
// No browser, no WebGLRenderer, no GPU, no network. The fixed fixture is copied
// to an independent temp directory before the existing adapter is imported; the
// production tree (engine.js, racer.js, road-vehicle-core.js, handling.js,
// vehicle-core.js) is read only.
//
// Run: node authoring/car-standard-reader/run.mjs
// Output: authoring/car-standard-reader/states.json (deterministic apart from
// the temp directory name, which is not written out).

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import {fileURLToPath, pathToFileURL} from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '../..');
const fixtureDir = path.join(here, 'fixture');
const outFile = path.join(here, 'states.json');

const FIXED_COMMIT = 'ab2655930996b9d81f5fb35469669c72b7be28e1';
const FIXTURE_FILES = ['adapter.mjs', 'car.glb', 'manifest.json'];

const sha256 = (bytes) => crypto.createHash('sha256').update(bytes).digest('hex');
const readSha = (p) => sha256(fs.readFileSync(p));
const round = (v, digits = 9) => Number(v.toFixed(digits));
const roundArray = (a, digits = 9) => Array.from(a, (v) => round(v, digits));
const assert = (ok, message) => { if (!ok) throw new Error(message); };
const maxDiff = (a, b) => {
  assert(a.length === b.length, 'matrix length mismatch');
  let worst = 0;
  for (let i = 0; i < a.length; i++) worst = Math.max(worst, Math.abs(a[i] - b[i]));
  return worst;
};

// 1. Independent temp copy of the fixed fixture, then import that copy.
const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'star-car-standard-reader-'));
// Remove the independent copy even if a contract assertion throws.
process.on('exit', () => { try { fs.rmSync(tempRoot, {recursive: true, force: true}); } catch {} });
for (const name of FIXTURE_FILES) fs.copyFileSync(path.join(fixtureDir, name), path.join(tempRoot, name));
const adapter = await import(pathToFileURL(path.join(tempRoot, 'adapter.mjs')).href);
const {decodeStandardPart, instantiateForStar, poseCar} = adapter;

// 2. Original engine.js CPU path, exactly the classes/functions adapter needs.
//    engine.js has no exports; the fixed public consumer test also evaluates it
//    in a vm context. Nothing here creates a renderer.
const enginePath = path.join(repo, 'engine.js');
const engineSource = fs.readFileSync(enginePath, 'utf8');
const engine = vm.runInNewContext(
  `${engineSource};({Mesh,Node,translation,mm,ry,rz,trs,transform})`
);
for (const name of ['Mesh', 'Node', 'translation', 'mm', 'ry', 'rz', 'trs', 'transform']) {
  assert(typeof engine[name] === 'function', `engine.js is missing ${name}`);
}

// 3. Current road-vehicle state, read only (includes the current power-tire
//    candidate; the default branch is exercised here).
const {VehicleModel} = await import(pathToFileURL(path.join(repo, 'vehicle-core.js')).href);
const {RoadVehicleModel} = await import(pathToFileURL(path.join(repo, 'road-vehicle-core.js')).href);

const manifest = JSON.parse(fs.readFileSync(path.join(tempRoot, 'manifest.json'), 'utf8'));
const carRow = manifest.assets.find((a) => a.id === 'car');
assert(carRow, 'manifest has no car asset');

const carBytes = fs.readFileSync(path.join(tempRoot, 'car.glb'));
assert(sha256(carBytes) === carRow.sha256, 'car.glb SHA-256 differs from manifest');
assert(carBytes.byteLength === carRow.bytes, 'car.glb byte length differs from manifest');

const parts = decodeStandardPart(carBytes);
assert(parts.length === 5, `expected 5 car parts, got ${parts.length}`);
assert(parts.reduce((n, p) => n + p.sourceIndices.length / 3, 0) === carRow.triangles,
  'triangle count differs from manifest');

// 4. Geometry identity: pivots/actions against the manifest, local bounds and
//    the per-wheel rolling radius / contact offset actually present in the GLB.
function bounds(data) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < data.length; i += 10) {
    for (let k = 0; k < 3; k++) {
      lo[k] = Math.min(lo[k], data[i + k]);
      hi[k] = Math.max(hi[k], data[i + k]);
    }
  }
  return {min: lo, max: hi};
}

const manifestParts = new Map(carRow.parts.map((p) => [p.name, p]));
const geometry = {};
for (const part of parts) {
  const row = manifestParts.get(part.name);
  assert(row, `manifest has no part ${part.name}`);
  assert(row.action === part.action, `action drift for ${part.name}`);
  assert(row.pivot_m.every((v, i) => Math.abs(v - part.pivot[i]) < 1e-9), `pivot drift for ${part.name}`);
  const b = bounds(part.sourceData);
  geometry[part.name] = {
    pivot: part.pivot,
    action: part.action,
    triangles: part.sourceIndices.length / 3,
    localMin: b.min.map((v) => round(v, 6)),
    localMax: b.max.map((v) => round(v, 6)),
    localSize: b.max.map((v, i) => round(v - b.min[i], 6)),
    localMid: b.max.map((v, i) => round((v + b.min[i]) / 2, 6)),
  };
}
for (const name of ['wheel-front-left', 'wheel-front-right', 'wheel-back-left', 'wheel-back-right']) {
  const g = geometry[name];
  assert(Math.abs(g.localSize[0] - 0.78) < 1e-6, `${name} X diameter is not 0.78`);
  assert(Math.abs(g.localSize[1] - 0.78) < 1e-6, `${name} Y diameter is not 0.78`);
  assert(Math.abs(g.localMin[1] + 0.39) < 1e-6 && Math.abs(g.localMax[1] - 0.39) < 1e-6,
    `${name} local Y is not centred at 0`);
  assert(Math.abs(g.localMid[0]) < 1e-6, `${name} local X is not centred at 0`);
}

const wheelRadius = 0.39; // local X/Y half-extent; confirmed by the bounds above
const frontPivotX = geometry['wheel-front-left'].pivot[0];
const backPivotX = geometry['wheel-back-left'].pivot[0];
const wheelPivotY = geometry['wheel-front-left'].pivot[1];
assert(frontPivotX > 0 && backPivotX < 0, 'front wheels are not at +X');
assert(Math.abs(wheelPivotY - wheelRadius) < 1e-9, 'wheel pivot Y is not equal to radius');
const wheelHalfWidth = geometry['wheel-front-left'].localSize[2] / 2;
const wheelLocalZMid = geometry['wheel-front-left'].localMid[2];
const wheelCentreZ = Math.abs(geometry['wheel-front-left'].pivot[2] + wheelLocalZMid);
assert(wheelCentreZ > Math.abs(geometry['wheel-front-left'].pivot[2]),
  'wheel mesh is not offset outboard of its pivot');
const wheelOuterZ = Math.max(
  Math.abs(geometry['wheel-front-left'].pivot[2] + geometry['wheel-front-left'].localMin[2]),
  geometry['wheel-front-right'].pivot[2] + geometry['wheel-front-right'].localMax[2]
);

// 5. Fixed public test fixture (tests/road-vehicle.test.mjs at the fixed
//    commit) replayed against the current road-vehicle model.
const DT = 1 / 120;
const freshCar = (extra = {}) => ({vS: 0, vL: 0, yaw: 0, spin: 0, speed: 0, roadSteer: 0, steering: 0, ...extra});
const drive = (base, seconds, controls) => {
  const p = freshCar(base);
  let wheelSpin = 0;
  let t = 0;
  const steps = Math.round(seconds / DT);
  for (let i = 0; i < steps; i++) {
    VehicleModel.step(p, controls, DT, {road: true});
    // handling.js:81  wheelSpin -= player.vS*dt/.4
    wheelSpin -= p.vS * DT / 0.4;
    t += DT;
    for (const [k, v] of Object.entries(p)) {
      if (typeof v === 'number') assert(Number.isFinite(v), `nonfinite ${k} in the road fixture`);
    }
  }
  return {p, wheelSpin, t, seconds, controls};
};

const fixtureStates = {
  // Positive steer is +Z / right in this project's frame (T=+X, R=+Z).
  straight: drive({vS: 20}, 1, {gas: true}),
  right: drive({vS: 20}, 1, {gas: true, steer: 1}),
  left: drive({vS: 20}, 1, {gas: true, steer: -1}),
  // reset() clears roadSteer/steering/speed and wheelSpin; the road model was
  // not stepped, so the pose input is exactly zero.
  reset: {p: freshCar(), wheelSpin: 0, t: 0, seconds: 0, controls: null},
};

// racer.js::animateCar formulas (current master, unchanged since the fixed
// commit): roll = -steer*min(.09, speed*.003) where steer is player.steering
// (normalised), bob = sin(t*18)*min(.012, speed*.0005).
function poseFromState(state) {
  const speed = state.p.speed || 0;
  const steerRad = state.p.roadSteer || 0;
  const steerNorm = state.p.steering || 0;
  return {
    steer: steerRad,
    wheelSpin: state.wheelSpin,
    roll: -steerNorm * Math.min(.09, speed * .003),
    bob: Math.sin(state.t * 18) * Math.min(.012, speed * .0005),
  };
}

// 6. One instance, re-posed per state; capture node matrices and the lowest
//    transformed vertex of each wheel (the physical contact point on y=0).
const instance = instantiateForStar(parts, engine);
assert(instance.byName.size === 5, 'instantiateForStar did not produce 5 named parts');

function lowestVertex(part, matrix) {
  let best = {y: Infinity, point: null};
  for (let i = 0; i < part.sourceData.length; i += 10) {
    const p = engine.transform(matrix, [part.sourceData[i], part.sourceData[i + 1], part.sourceData[i + 2]]);
    if (p[1] < best.y) best = {y: p[1], point: p};
  }
  return best;
}

const statesOut = {};
const rawMatrices = {};
const checks = {};
for (const [name, state] of Object.entries(fixtureStates)) {
  const pose = poseFromState(state);
  poseCar(instance, pose, engine);

  const nodes = {};
  const contacts = {};
  rawMatrices[name] = {};
  let rearYaw = 0;
  for (const [partName, {part, node}] of instance.byName) {
    rawMatrices[name][partName] = Array.from(node.local);
    nodes[partName] = {
      action: part.action,
      pivot: part.pivot,
      local: roundArray(node.local),
      // The top-left 3x3 block of a pure Z roll has zero Y-coupling terms.
      yCoupling: roundArray([node.local[2], node.local[6], node.local[8], node.local[9]]),
    };
    if (partName !== 'body') {
      const low = lowestVertex(part, node.local);
      // The tyre is a circle in local X-Y centred at (0,0); the mesh is offset
      // outboard in Z, so the contact-patch centre is the transformed centre of
      // the tyre width at local Z = localMid, less the rolling radius.
      const centre = engine.transform(node.local, [0, 0, geometry[partName].localMid[2]]);
      contacts[partName] = {
        analyticContact: [round(centre[0], 7), round(centre[1] - wheelRadius, 9), round(centre[2], 7)],
        lowestVertex: low.point.map((v) => round(v, 6)),
        lowestVertexY: round(low.y, 9),
        // Vertex-only sampling of a tessellated circle can miss the tangent by
        // a fraction of a millimetre; this is not a hover.
        tessellationGapMm: round((low.y - (centre[1] - wheelRadius)) * 1000, 6),
      };
      if (partName.includes('back')) rearYaw = Math.max(rearYaw, ...nodes[partName].yCoupling.map(Math.abs));
    }
  }

  // Contract checks against adapter.mjs's own expected pose.
  let worst = 0;
  for (const [partName, {part, node}] of instance.byName) {
    const expected = partName === 'body'
      ? engine.trs([0, pose.bob, 0], [1, 1, 1], [pose.roll, 0, 0])
      : engine.mm(engine.translation(...part.pivot),
          engine.mm(engine.ry(partName.includes('front') ? -pose.steer : 0), engine.rz(pose.wheelSpin)));
    worst = Math.max(worst, maxDiff(node.local, expected));
  }

  statesOut[name] = {
    input: state.controls,
    simulated: {
      speed: round(state.p.speed || 0, 9),
      vS: round(state.p.vS || 0, 9),
      vL: round(state.p.vL || 0, 9),
      yaw: round(state.p.yaw || 0, 9),
      spin: round(state.p.spin || 0, 9),
      roadSteer: round(state.p.roadSteer || 0, 9),
      roadSteerDeg: round((state.p.roadSteer || 0) * 180 / Math.PI, 6),
      steeringNormalised: round(state.p.steering || 0, 9),
      wheelSpin: round(state.wheelSpin, 9),
      fixtureTime: round(state.t, 9),
    },
    pose,
    nodes,
    contacts,
    maxMatrixDiffVsAdapterContract: worst,
  };
  checks[name] = {
    matricesMatchContract: worst < 1e-6,
    analyticContactsOnGround: Object.values(contacts).every((c) => Math.abs(c.analyticContact[1]) < 1e-6),
    maxVertexTessellationGapMm: round(Math.max(...Object.values(contacts).map((c) => c.tessellationGapMm)), 6),
    rearWheelsDoNotSteer: rearYaw < 1e-12,
  };
}

// Rest TRS after reset: body identity, each wheel exactly its pivot translation.
const rest = rawMatrices.reset;
const identity = engine.trs([0, 0, 0], [1, 1, 1], [0, 0, 0]);
let restBodyDiff = maxDiff(rest.body, identity);
let restWheelDiff = 0;
for (const name of ['wheel-front-left', 'wheel-front-right', 'wheel-back-left', 'wheel-back-right']) {
  restWheelDiff = Math.max(restWheelDiff,
    maxDiff(rest[name], engine.translation(...geometry[name].pivot)));
}
checks.resetRestTRS = {
  bodyIsIdentity: restBodyDiff < 1e-9,
  wheelsArePivotTranslations: restWheelDiff < 1e-9,
  maxDiff: Math.max(restBodyDiff, restWheelDiff),
};

// Front wheels steer, rear wheels never do, at a non-zero state.
checks.frontOnlySteer = {
  frontLeftDiffersFromRollOnly: maxDiff(
    rawMatrices.right['wheel-front-left'],
    engine.mm(engine.translation(...geometry['wheel-front-left'].pivot), engine.rz(fixtureStates.right.wheelSpin))
  ) > 1e-3,
  rearYawCoupling: Math.max(...['wheel-back-left', 'wheel-back-right'].map((name) =>
    Math.max(Math.abs(rawMatrices.right[name][2]), Math.abs(rawMatrices.right[name][6]),
      Math.abs(rawMatrices.right[name][8])))),
};
assert(checks.frontOnlySteer.frontLeftDiffersFromRollOnly, 'front wheel did not steer');
assert(checks.frontOnlySteer.rearYawCoupling < 1e-12, 'a rear wheel picked up Y rotation');

// 7. Current vehicle: physics axles, collision body, and the procedural wheels
//    in racer.js (parsed from the current, unchanged file).
const racerSource = fs.readFileSync(path.join(repo, 'racer.js'), 'utf8');
const axleMatch = racerSource.match(/for\(const x of \[(-?[\d.]+),(-?[\d.]+)\]\)for\(const side of \[-1,1\]\)/);
const wheelZMatch = racerSource.match(/tires\.push\(\{n,x,z:side\*(-?[\d.]+),front:x>0\}\)/);
const wheelYMatch = racerSource.match(/mm\(translation\(w\.x,([\d.]+),w\.z\)/);
const torusMatch = racerSource.match(/wc\.add\(torus\(([\d.]+),([\d.]+),40,12\)/);
assert(axleMatch && wheelZMatch && wheelYMatch && torusMatch, 'racer.js wheel layout changed');
const currentWheels = {
  x: [Number(axleMatch[1]), Number(axleMatch[2])],
  z: Number(wheelZMatch[1]),
  centreY: Number(wheelYMatch[1]),
  tyreOuterRadius: Number(torusMatch[1]) + Number(torusMatch[2]),
  torusRadius: Number(torusMatch[1]),
  torusTube: Number(torusMatch[2]),
};
currentWheels.contactY = round(currentWheels.centreY - currentWheels.tyreOuterRadius, 9);
currentWheels.wheelbase = round(currentWheels.x[1] - currentWheels.x[0], 9);
currentWheels.track = round(2 * currentWheels.z, 9);

const physics = {
  frontAxle: RoadVehicleModel.config.frontAxle,
  rearAxleMagnitude: RoadVehicleModel.config.rearAxle,
  rearAxleCoordinate: -RoadVehicleModel.config.rearAxle,
  wheelbase: round(RoadVehicleModel.config.frontAxle + RoadVehicleModel.config.rearAxle, 9),
  // circuit.js:31 collision/rail OBB half extents (not changed by this probe).
  collisionHalfLength: 1.57,
  collisionHalfWidth: 0.91,
};

const render = {
  frontAxle: round(frontPivotX, 9),
  rearAxle: round(backPivotX, 9),
  wheelbase: round(frontPivotX - backPivotX, 9),
  wheelRadius,
  wheelPivotY,
  wheelCentreZ: round(wheelCentreZ, 9),
  trackAtWheelCentre: round(2 * wheelCentreZ, 9),
  wheelHalfWidth: round(wheelHalfWidth, 9),
  wheelOuterZ: round(wheelOuterZ, 9),
};

const comparison = {
  physics,
  currentRender: currentWheels,
  standardRender: render,
  deltas: {
    frontAxlePhysicsMinusStandard: round(physics.frontAxle - render.frontAxle, 9),
    rearAxlePhysicsMinusStandard: round(physics.rearAxleCoordinate - render.rearAxle, 9),
    wheelbasePhysicsMinusStandard: round(physics.wheelbase - render.wheelbase, 9),
    wheelbaseRatio: round(physics.wheelbase / render.wheelbase, 6),
    wheelRadiusCurrentMinusStandard: round(currentWheels.tyreOuterRadius - render.wheelRadius, 9),
    trackCurrentMinusStandard: round(currentWheels.track - render.trackAtWheelCentre, 9),
    reuseCurrentWheelYHover: round(currentWheels.centreY - render.wheelRadius, 9),
    reuseCurrentRadiusSink: round(render.wheelPivotY - currentWheels.tyreOuterRadius, 9),
  },
};

// 8. Report.
const report = {
  fixedCommit: FIXED_COMMIT,
  fixture: Object.fromEntries(FIXTURE_FILES.map((name) => [name, readSha(path.join(tempRoot, name))])),
  code: {
    head: (await import('node:child_process')).execFileSync('git', ['rev-parse', 'HEAD'], {cwd: repo}).toString().trim(),
    engine: readSha(path.join(repo, 'engine.js')),
    racer: readSha(path.join(repo, 'racer.js')),
    roadVehicleCore: readSha(path.join(repo, 'road-vehicle-core.js')),
    vehicleCore: readSha(path.join(repo, 'vehicle-core.js')),
    handling: readSha(path.join(repo, 'handling.js')),
  },
  manifestContract: {
    units: manifest.units,
    axes: manifest.axes,
    dimensions_m: carRow.dimensions_m,
    bounds_m: carRow.bounds_m,
    declaredAxles: carRow.parts
      .filter((p) => p.name.startsWith('wheel-'))
      .map((p) => ({name: p.name, pivot_m: p.pivot_m, action: p.action})),
  },
  geometry,
  fixture: {
    source: `tests/road-vehicle.test.mjs @ ${FIXED_COMMIT}`,
    dt: DT,
    note: 'car({vS:20}) + 1 s gas, gas+steer:1 (right), gas+steer:-1 (left); reset is reset() zero state',
  },
  states: statesOut,
  checks,
  currentVehicle: currentWheels,
  comparison,
};

fs.writeFileSync(outFile, `${JSON.stringify(report, null, 2)}\n`);

// Fail loudly if the wiring contract is broken.
for (const [name, c] of Object.entries(checks)) {
  if (typeof c !== 'object' || c === null) continue;
  assert(!('matricesMatchContract' in c) || c.matricesMatchContract, `${name}: matrices do not match adapter contract`);
  assert(!('analyticContactsOnGround' in c) || c.analyticContactsOnGround, `${name}: a wheel contact is off the ground`);
  assert(!('maxVertexTessellationGapMm' in c) || c.maxVertexTessellationGapMm < 5, `${name}: wheel contact is not tessellation-only`);
  assert(!('rearWheelsDoNotSteer' in c) || c.rearWheelsDoNotSteer, `${name}: a rear wheel yaws`);
}
assert(checks.resetRestTRS.bodyIsIdentity && checks.resetRestTRS.wheelsArePivotTranslations, 'reset rest TRS is not clean');

console.log(`wrote ${path.relative(repo, outFile)}`);
console.log(`states: ${Object.keys(statesOut).join(', ')}`);
console.log(`standard render wheelbase ${render.wheelbase} m vs physics ${physics.wheelbase} m`);
console.log(`wheel contact y: ${Object.entries(statesOut).map(([n, s]) => `${n}=${Object.values(s.contacts).map((c) => c.analyticContact[1]).join('/')}`).join(' ')}`);
console.log(`wheel vertex tessellation gap max: ${Object.entries(checks).filter(([, c]) => c && c.maxVertexTessellationGapMm != null).map(([n, c]) => `${n}=${c.maxVertexTessellationGapMm}mm`).join(' ')}`);

instance.dispose();
fs.rmSync(tempRoot, {recursive: true, force: true});
