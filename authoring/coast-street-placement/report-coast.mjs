// CPU-only placement and clearance report for the current coast 320..680 m
// sample segment. Produces explicit house ids and matrices plus the mandated
// setback 4 m -> 6 m second pass. No renderer, screenshot or scene integration.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {placeStreet, shiftSetback} from './adapter.mjs';
import {loadCoastFrameSample, verifyFixedSource} from './fixed-source-contract.mjs';
import {createFixtureSampleRoad} from './sample-road.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT_FILE = path.join(HERE, 'out', 'coast-320-680.json');
const RANGE = {from: 320, to: 680, step: 40};
const SIDES = [1, -1];
const SETBACK = 4;
const SECOND_DELTA = 2;

export function buildCoastReport() {
  const {contract, parts} = verifyFixedSource();
  const sample = loadCoastFrameSample();
  const sampleRoad = createFixtureSampleRoad(sample.frames);
  const rows = [];
  for (let centerS = RANGE.from; centerS <= RANGE.to; centerS += RANGE.step) {
    for (const side of SIDES) {
      const primary = placeStreet(parts, sampleRoad, centerS, side, SETBACK);
      const second = shiftSetback(primary, sampleRoad, SECOND_DELTA);
      const rotationPreserved = primary.placements.every((placement, index) => {
        const shifted = second.placements[index];
        return placement.id === shifted.id &&
          [0, 1, 2, 4, 5, 6, 8, 9, 10].every(k => Object.is(placement.matrix[k], shifted.matrix[k]));
      });
      rows.push({
        centerS,
        side,
        curvature: sampleRoad(centerS).curv,
        setback4: {
          requiredClearance: primary.requiredClearance,
          nominalBaseOffset: primary.nominalBaseOffset,
          baseOffset: primary.baseOffset,
          clearance: primary.clearance,
          ok: primary.ok,
          violations: primary.violations,
          placements: primary.placements.map(placement => ({
            id: placement.id,
            station: placement.station,
            pivot: placement.pivot,
            matrix: placement.matrix,
            bbox: placement.bbox,
            clearance: placement.clearance,
            clearanceAt: placement.clearanceAt,
            frontDotRoad: placement.frontDotRoad,
          })),
        },
        setback6: {
          derivedBy: 'shiftSetback: pure R-axis translation, rotations/sizes unchanged',
          deltaM: SECOND_DELTA,
          rotationPreserved,
          requiredClearance: second.requiredClearance,
          baseOffset: second.baseOffset,
          clearance: second.clearance,
          ok: second.ok,
          violations: second.violations,
          placements: second.placements.map(placement => ({
            id: placement.id,
            station: placement.station,
            pivot: placement.pivot,
            matrix: placement.matrix,
            bbox: placement.bbox,
            clearance: placement.clearance,
            clearanceAt: placement.clearanceAt,
            frontDotRoad: placement.frontDotRoad,
          })),
        },
      });
    }
  }

  const all4 = rows.map(row => row.setback4);
  const all6 = rows.map(row => row.setback6);
  return {
    schema: 1,
    kind: 'coast-street-placement-cpu-report',
    sceneIntegration: 'none; placements and clearance are CPU contract results only',
    render: 'none; no screenshot, GPU, browser or scene adoption',
    source: {
      track: 'coast-reborn',
      circuitFrameSample: 'fixed-source/coast-280-720.frames.json',
      circuitFrameSampleSha256: contract.source.files.coast_frame_sample.sha256,
      fixedSourceCommit: contract.source.commit,
      baseRef: sample.source.base_ref,
      circuitSha256: sample.source.sha256,
      circuitLengthM: sample.circuit_length_m,
    },
    range: {...RANGE, sides: SIDES, setbackM: SETBACK, secondPassDeltaM: SECOND_DELTA},
    summary: {
      rows: rows.length,
      stations: [...new Set(rows.map(row => row.centerS))],
      allOk4m: all4.every(row => row.ok),
      allOk6m: all6.every(row => row.ok),
      minClearance4m: Math.min(...all4.map(row => row.clearance)),
      minClearance6m: Math.min(...all6.map(row => row.clearance)),
      requiredClearance4m: 8 + SETBACK,
      requiredClearance6m: 8 + SETBACK + SECOND_DELTA,
      maxBaseOffset4m: Math.max(...all4.map(row => row.baseOffset)),
      rotationsPreserved6m: all6.every(row => row.rotationPreserved),
    },
    rows,
  };
}

function main() {
  const report = buildCoastReport();
  fs.mkdirSync(path.dirname(OUT_FILE), {recursive: true});
  fs.writeFileSync(OUT_FILE, `${JSON.stringify(report, null, 2)}\n`);
  const {summary} = report;
  console.log(`Wrote ${path.relative(HERE, OUT_FILE)}: ${summary.rows} rows, ` +
    `min clearance 4 m = ${summary.minClearance4m.toFixed(3)} m, ` +
    `6 m = ${summary.minClearance6m.toFixed(3)} m, ok4=${summary.allOk4m}, ok6=${summary.allOk6m}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
