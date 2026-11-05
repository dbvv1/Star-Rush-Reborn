// CPU-only layout report for the coast 320..680 m sample segment.
//
// Uses the recorded 1 m frame sample and the real master circuit.js
// `circuitRoad` (loaded read-only in a bare VM) to cross-check the mandated
// 20 rows (every 40 m, both sides). Runs the conservative footprint filter at
// setback 4 m and 6 m, then separately shifts the 4 m placeStreet results by
// +2 m on the R axis and re-checks the whole batch. Also records the 510/-1
// road regression and the named same-row / adjacent-row intersections without
// relying on final accepted sets.
//
// No renderer, screenshot, scene integration, GPU or browser work.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {placeStreet, shiftSetback} from '../coast-street-placement/adapter.mjs';
import {loadCoastFrameSample, verifyFixedSource} from '../coast-street-placement/fixed-source-contract.mjs';
import {
  createFixtureSampleRoad,
  loadMasterCircuit,
} from '../coast-street-placement/sample-road.mjs';
import {
  DEFAULT_MIN_GAP_M,
  checkPlacedStreetRows,
  inspectStreetRowPairs,
  planStreetRows,
} from './layout.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, '../..');
const OUT_FILE = path.join(HERE, 'out', 'coast-layout-320-680.json');
const RANGE = {from: 320, to: 680, step: 40};
const SIDES = [-1, 1];
const SETBACK = 4;
const SECOND_DELTA = 2;
const MIN_GAP = DEFAULT_MIN_GAP_M;
const ROAD_REGRESSION = {centerS: 510, side: -1};

const rowKey = row => `${row.centerS}/${row.side}`;
const keysOf = items => items.map(item => rowKey(item.row));

function sortRows(rows) {
  return rows.slice().sort((a, b) => a.centerS - b.centerS || a.side - b.side);
}

function gridRows(setback) {
  const rows = [];
  for (let centerS = RANGE.from; centerS <= RANGE.to; centerS += RANGE.step) {
    for (const side of SIDES) rows.push({centerS, side, setback});
  }
  return rows;
}

function summarize(plan) {
  const reasonCounts = {};
  for (const item of plan.rejected) {
    for (const reason of item.reasons) {
      reasonCounts[reason.code] = (reasonCounts[reason.code] ?? 0) + 1;
    }
  }
  return {
    rows: plan.accepted.length + plan.rejected.length,
    acceptedRows: plan.accepted.length,
    rejectedRows: plan.rejected.length,
    acceptedKeys: keysOf(plan.accepted),
    rejectedKeys: keysOf(plan.rejected),
    rejectedReasons: plan.rejected.map(item => ({
      row: item.row,
      codes: [...new Set(item.reasons.map(reason => reason.code))],
    })),
    reasonCounts,
    minAcceptedClearance: plan.accepted.length
      ? Math.min(...plan.accepted.map(item => item.clearance))
      : null,
    maxAcceptedBaseOffset: plan.accepted.length
      ? Math.max(...plan.accepted.map(item => item.baseOffset))
      : null,
  };
}

function pickRoadFields(result) {
  return {
    ok: result.ok,
    clearance: result.clearance,
    requiredClearance: result.requiredClearance,
    baseOffset: result.baseOffset,
    violations: result.violations,
  };
}

// The fixture returns the recorded integer frames byte-for-byte; the live
// source is the real master `circuitRoad` from circuit.js. Every station
// queried by placeStreet on this grid is an integer, so both sources must
// produce the same plan. The report states the result instead of assuming it.
function planWithBothSources(parts, fixtureRoad, liveRoad, rows) {
  const fixturePlan = planStreetRows(parts, fixtureRoad, rows, MIN_GAP);
  const livePlan = planStreetRows(parts, liveRoad, rows, MIN_GAP);
  return {
    fixturePlan,
    livePlan,
    identical: JSON.stringify(fixturePlan) === JSON.stringify(livePlan),
  };
}

function buildShiftedBatch(parts, sampleRoad, rows) {
  const ordered = sortRows(rows);
  const placed = ordered.map(row =>
    placeStreet(parts, sampleRoad, row.centerS, row.side, row.setback));
  const shifted = placed.map(result => shiftSetback(result, sampleRoad, SECOND_DELTA));
  return {
    ordered,
    placed,
    shifted,
    rows: ordered.map((row, index) => ({
      row,
      roadOkBeforeShift: placed[index].ok,
      roadOkAfterShift: shifted[index].ok,
      clearanceBeforeShift: placed[index].clearance,
      clearanceAfterShift: shifted[index].clearance,
      requiredClearanceAfterShift: shifted[index].requiredClearance,
      violationsAfterShift: shifted[index].violations,
      rotationsPreserved: placed[index].placements.every((placement, houseIndex) => {
        const next = shifted[index].placements[houseIndex];
        return placement.id === next.id &&
          [0, 1, 2, 4, 5, 6, 8, 9, 10].every(k => Object.is(placement.matrix[k], next.matrix[k])) &&
          Math.abs(next.matrix[12] - placement.matrix[12] - SECOND_DELTA * placement.matrix[8]) < 1e-9 &&
          Math.abs(next.matrix[14] - placement.matrix[14] - SECOND_DELTA * placement.matrix[10]) < 1e-9;
      }),
    })),
  };
}

function publicPair(pair) {
  return {
    sameRow: pair.sameRow,
    rows: pair.rows,
    houseIds: pair.houseIds,
    overlap: pair.overlap,
    overlapDepth: pair.overlapDepth,
    boundaryContact: pair.boundaryContact,
    distance: pair.distance,
    minGap: pair.minGap,
    pass: pair.pass,
    code: pair.code,
    measured: pair.measured,
    required: pair.required,
  };
}

function inspectPlacedRows(parts, placed, sameRowWanted) {
  const inspection = inspectStreetRowPairs(parts, placed, MIN_GAP);
  return {
    rows: inspection.rows,
    pairs: inspection.pairs
      .filter(pair => pair.sameRow === sameRowWanted)
      .map(publicPair),
  };
}

function inspectNamedRows(parts, sampleRoad, rowSpecs, sameRowWanted) {
  const placed = rowSpecs.map(row =>
    placeStreet(parts, sampleRoad, row.centerS, row.side, row.setback));
  return inspectPlacedRows(parts, placed, sameRowWanted);
}

function shiftedSingleRow(parts, sampleRoad, row) {
  const placed = placeStreet(parts, sampleRoad, row.centerS, row.side, row.setback);
  return shiftSetback(placed, sampleRoad, SECOND_DELTA);
}

export function buildCoastLayoutReport() {
  const {contract, parts} = verifyFixedSource();
  const sample = loadCoastFrameSample();
  const fixtureRoad = createFixtureSampleRoad(sample.frames);
  const liveRoad = loadMasterCircuit(REPO_ROOT).circuitRoad;

  const rows4 = gridRows(SETBACK);
  const rows6 = gridRows(SETBACK + SECOND_DELTA);

  const check4 = planWithBothSources(parts, fixtureRoad, liveRoad, rows4);
  const check6 = planWithBothSources(parts, fixtureRoad, liveRoad, rows6);
  const plan4 = check4.fixturePlan;
  const plan6 = check6.fixturePlan;

  const shiftedBatch = buildShiftedBatch(parts, fixtureRoad, rows4);
  const shiftedPlan = checkPlacedStreetRows(parts, shiftedBatch.shifted, MIN_GAP);

  // Named rows are inspected directly from their own placeStreet results, not
  // from a final accepted set. 640/+1 and 680/+1 can each fail their own
  // same-row check, so an accepted-set-only cross-row check would miss them.
  const row600 = {centerS: 600, side: -1, setback: SETBACK};
  const row640 = {centerS: 640, side: 1, setback: SETBACK};
  const row680 = {centerS: 680, side: 1, setback: SETBACK};
  const row600At6 = {...row600, setback: SETBACK + SECOND_DELTA};
  const row640At6 = {...row640, setback: SETBACK + SECOND_DELTA};
  const row680At6 = {...row680, setback: SETBACK + SECOND_DELTA};

  const shifted600 = shiftedSingleRow(parts, fixtureRoad, row600);
  const shifted640 = shiftedSingleRow(parts, fixtureRoad, row640);
  const shifted680 = shiftedSingleRow(parts, fixtureRoad, row680);

  const inspected600Shifted = inspectPlacedRows(parts, [shifted600], true).pairs;
  const inspected640680Shifted = inspectPlacedRows(parts, [shifted640, shifted680], false).pairs;

  const road510Primary = placeStreet(parts, fixtureRoad, ROAD_REGRESSION.centerS, ROAD_REGRESSION.side, SETBACK);
  const road510Shifted = shiftSetback(road510Primary, fixtureRoad, SECOND_DELTA);
  const live510Primary = placeStreet(parts, liveRoad, ROAD_REGRESSION.centerS, ROAD_REGRESSION.side, SETBACK);
  const live510Shifted = shiftSetback(live510Primary, liveRoad, SECOND_DELTA);

  const summary4 = summarize(plan4);
  const summary6 = summarize(plan6);
  const summaryShifted = summarize(shiftedPlan);
  const accepted4 = summary4.acceptedKeys;
  const accepted6 = summary6.acceptedKeys;
  const acceptedShifted = summaryShifted.acceptedKeys;

  const pair600 = {
    setback4: inspectNamedRows(parts, fixtureRoad, [row600], true),
    setback6: inspectNamedRows(parts, fixtureRoad, [row600At6], true),
    shifted4to6: {rows: [{row: row600, roadOk: shifted600.ok}], pairs: inspected600Shifted},
  };
  const pair640680 = {
    setback4: inspectNamedRows(parts, fixtureRoad, [row640, row680], false),
    setback6: inspectNamedRows(parts, fixtureRoad, [row640At6, row680At6], false),
    shifted4to6: {rows: [{row: row640, roadOk: shifted640.ok}, {row: row680, roadOk: shifted680.ok}], pairs: inspected640680Shifted},
  };

  const acceptStatus = {
    setback4: {
      '600/-1': accepted4.includes('600/-1'),
      '640/+1': accepted4.includes('640/+1'),
      '680/+1': accepted4.includes('680/+1'),
    },
    setback6: {
      '600/-1': accepted6.includes('600/-1'),
      '640/+1': accepted6.includes('640/+1'),
      '680/+1': accepted6.includes('680/+1'),
    },
    shifted4to6: {
      '600/-1': acceptedShifted.includes('600/-1'),
      '640/+1': acceptedShifted.includes('640/+1'),
      '680/+1': acceptedShifted.includes('680/+1'),
    },
  };

  return {
    schema: 1,
    kind: 'coast-street-layout-cpu-report',
    sceneIntegration: 'none; conservative XZ footprint filtering of CPU placements only',
    render: 'none; no screenshot, GPU, browser or scene adoption',
    contract: {
      minGapM: MIN_GAP,
      rowOrder: 'centerS ascending, side -1 before +1, stable',
      footprint: 'world XZ convex hull of the real localXZHull points transformed by the original placement 4x4 matrix',
      rejection: 'any footprint intersection, containment or boundary contact, or shortest all-edge distance below minGap',
      notCovered: 'full 3D triangle collision, terrain, roadside width or visual quality',
    },
    source: {
      track: 'coast-reborn',
      circuitFrameSample: 'authoring/coast-street-placement/fixed-source/coast-280-720.frames.json',
      circuitFrameSampleSha256: contract.source.files.coast_frame_sample.sha256,
      fixedSourceCommit: contract.source.commit,
      baseRef: sample.source.base_ref,
      circuitSha256: sample.source.sha256,
      circuitLengthM: sample.circuit_length_m,
      layoutModule: 'authoring/coast-street-layout/layout.mjs',
    },
    range: {...RANGE, sides: SIDES, rows: rows4.length, setbackM: SETBACK, secondDeltaM: SECOND_DELTA},
    crossCheck: {
      fixture: 'recorded 1 m frame sample (createFixtureSampleRoad)',
      live: 'real master circuit.js circuitRoad loaded read-only in a bare VM (loadMasterCircuit)',
      stationsAreIntegers: rows4.every(row => Number.isInteger(row.centerS)) &&
        parts.every(part => Number.isInteger(part.pivot[0])),
      setback4: {
        identical: check4.identical,
        fixtureAcceptedKeys: keysOf(plan4.accepted),
        liveAcceptedKeys: keysOf(check4.livePlan.accepted),
        fixtureRejectedKeys: keysOf(plan4.rejected),
        liveRejectedKeys: keysOf(check4.livePlan.rejected),
      },
      setback6: {
        identical: check6.identical,
        fixtureAcceptedKeys: keysOf(plan6.accepted),
        liveAcceptedKeys: keysOf(check6.livePlan.accepted),
        fixtureRejectedKeys: keysOf(plan6.rejected),
        liveRejectedKeys: keysOf(check6.livePlan.rejected),
      },
      identical: check4.identical && check6.identical,
    },
    setback4: {
      derivedBy: 'planStreetRows -> placeStreet at setback 4 m, then checkPlacedStreetRows',
      summary: summary4,
      accepted: plan4.accepted,
      rejected: plan4.rejected,
    },
    setback6: {
      derivedBy: 'planStreetRows -> placeStreet at setback 6 m directly (re-placed, not shifted)',
      summary: summary6,
      accepted: plan6.accepted,
      rejected: plan6.rejected,
    },
    shifted4to6: {
      derivedBy: 'all 20 rows placed at setback 4 m, each shifted by shiftSetback(+2 m) on the same R axis, then the whole batch re-checked',
      rotationPreserved: shiftedBatch.rows.every(row => row.rotationsPreserved),
      rowsRoadOkBeforeShift: shiftedBatch.rows.filter(row => row.roadOkBeforeShift).length,
      rowsRoadOkAfterShift: shiftedBatch.rows.filter(row => row.roadOkAfterShift).length,
      rowsWithRoadViolationsAfterShift: shiftedBatch.rows
        .filter(row => !row.roadOkAfterShift)
        .map(row => ({row: row.row, violations: row.violationsAfterShift})),
      summary: summaryShifted,
      accepted: shiftedPlan.accepted,
      rejected: shiftedPlan.rejected,
      rows: shiftedBatch.rows.map(row => ({
        row: row.row,
        roadOkBeforeShift: row.roadOkBeforeShift,
        roadOkAfterShift: row.roadOkAfterShift,
        clearanceBeforeShift: row.clearanceBeforeShift,
        clearanceAfterShift: row.clearanceAfterShift,
        requiredClearanceAfterShift: row.requiredClearanceAfterShift,
        rotationsPreserved: row.rotationsPreserved,
      })),
    },
    setComparison: {
      acceptedKeys4: accepted4,
      acceptedKeys6: accepted6,
      acceptedKeysShifted4to6: acceptedShifted,
      setback6EqualsShiftedAcceptedSet: JSON.stringify(accepted6) === JSON.stringify(acceptedShifted),
      acceptedOnlyAt4: accepted4.filter(key => !accepted6.includes(key)),
      acceptedOnlyAt6: accepted6.filter(key => !accepted4.includes(key)),
      acceptedOnlyAfterShift: acceptedShifted.filter(key => !accepted4.includes(key)),
      acceptedOnlyAt4NotShifted: accepted4.filter(key => !acceptedShifted.includes(key)),
      note: 'The 4 m, 6 m and shifted batches are three independent filters. Equal or different accepted sets do not prove that a pure R translation preserves every footprint; only each batch\'s own accepted set is asserted.',
    },
    roadRegression510: {
      centerS: ROAD_REGRESSION.centerS,
      side: ROAD_REGRESSION.side,
      onGrid: false,
      note: '510/-1 is not on the 40 m grid; this is an independent road-clearance regression for the 4 m -> 6 m pure shift.',
      fixture: {
        setback4: pickRoadFields(road510Primary),
        shiftedTo6: {
          ...pickRoadFields(road510Shifted),
          shiftedFromSetbackM: road510Shifted.shiftedFrom?.setback,
          deltaM: road510Shifted.shiftedFrom?.delta,
        },
      },
      live: {
        setback4: pickRoadFields(live510Primary),
        shiftedTo6: {
          ...pickRoadFields(live510Shifted),
          shiftedFromSetbackM: live510Shifted.shiftedFrom?.setback,
          deltaM: live510Shifted.shiftedFrom?.delta,
        },
      },
      fixtureMatchesLive: JSON.stringify({
        primary: pickRoadFields(road510Primary),
        shifted: pickRoadFields(road510Shifted),
      }) === JSON.stringify({
        primary: pickRoadFields(live510Primary),
        shifted: pickRoadFields(live510Shifted),
      }),
    },
    specificPairs: {
      note: 'Inspected directly from each row\'s own placeStreet result, independent of the final accepted sets. A row rejected by its same-row check would otherwise never reach a cross-row accepted-set check.',
      row600SideMinus1SameRow: pair600,
      row640And680SidePlus1Adjacent: pair640680,
      acceptedInFilter: acceptStatus,
    },
    summary: {
      rowsPerPlan: rows4.length,
      minGapM: MIN_GAP,
      crossCheckIdentical: check4.identical && check6.identical,
      setback4: {
        accepted: summary4.acceptedRows,
        rejected: summary4.rejectedRows,
        acceptedKeys: summary4.acceptedKeys,
        minAcceptedClearance: summary4.minAcceptedClearance,
      },
      setback6: {
        accepted: summary6.acceptedRows,
        rejected: summary6.rejectedRows,
        acceptedKeys: summary6.acceptedKeys,
        minAcceptedClearance: summary6.minAcceptedClearance,
      },
      shifted4to6: {
        accepted: summaryShifted.acceptedRows,
        rejected: summaryShifted.rejectedRows,
        acceptedKeys: summaryShifted.acceptedKeys,
        minAcceptedClearance: summaryShifted.minAcceptedClearance,
        allRowsRoadOk: shiftedBatch.rows.every(row => row.roadOkAfterShift),
      },
      nonEmptyAcceptedSet: plan4.accepted.length > 0 && plan6.accepted.length > 0 && shiftedPlan.accepted.length > 0,
      row600SameRowOverlap: {
        setback4: pair600.setback4.pairs.some(pair => pair.overlap),
        setback6: pair600.setback6.pairs.some(pair => pair.overlap),
        shifted4to6: pair600.shifted4to6.pairs.some(pair => pair.overlap),
      },
      row640And680AdjacentCrossRow: {
        setback4AnyOverlap: pair640680.setback4.pairs.some(pair => pair.overlap),
        setback6AnyOverlap: pair640680.setback6.pairs.some(pair => pair.overlap),
        shifted4to6AnyOverlap: pair640680.shifted4to6.pairs.some(pair => pair.overlap),
        setback4MinDistance: Math.min(...pair640680.setback4.pairs.map(pair => pair.distance)),
        setback6MinDistance: Math.min(...pair640680.setback6.pairs.map(pair => pair.distance)),
        shifted4to6MinDistance: Math.min(...pair640680.shifted4to6.pairs.map(pair => pair.distance)),
      },
      roadRegression510ShiftOk: road510Shifted.ok,
      roadRegression510Violation: road510Shifted.violations[0] ?? null,
    },
  };
}

function main() {
  const report = buildCoastLayoutReport();
  fs.mkdirSync(path.dirname(OUT_FILE), {recursive: true});
  fs.writeFileSync(OUT_FILE, `${JSON.stringify(report, null, 2)}\n`);
  const {summary} = report;
  console.log(`Wrote ${path.relative(HERE, OUT_FILE)}: ` +
    `4 m accepted ${summary.setback4.accepted}/${summary.rowsPerPlan}, ` +
    `6 m accepted ${summary.setback6.accepted}/${summary.rowsPerPlan}, ` +
    `shifted accepted ${summary.shifted4to6.accepted}/${summary.rowsPerPlan}, ` +
    `cross-check=${summary.crossCheckIdentical}, 510/-1 shift ok=${summary.roadRegression510ShiftOk}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
