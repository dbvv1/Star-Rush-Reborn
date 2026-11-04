// Hash and metadata checks for the pinned fixed source. Reads the vendored
// street.glb/manifest/upstream adapter, parses the three real parts and proves
// they still match the recorded contract before any placement is trusted.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {localBounds, parseStreetStandard} from './adapter.mjs';

export const FIXED_SOURCE_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixed-source');

export function fixedSourcePath(name) {
  return path.join(FIXED_SOURCE_DIR, name);
}

export function readFixedSource(name) {
  return fs.readFileSync(fixedSourcePath(name));
}

export function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex');
}

export function loadContract() {
  return JSON.parse(readFixedSource('contract.json'));
}

export function loadManifest() {
  return JSON.parse(readFixedSource('manifest.json'));
}

/** Deterministic little-endian bytes for a stride-10 mesh and its triangles. */
export function canonicalMeshBytes(part) {
  const bytes = new Uint8Array(part.sourceData.length * 4 + part.sourceIndices.length * 4);
  const view = new DataView(bytes.buffer);
  let offset = 0;
  for (let i = 0; i < part.sourceData.length; i++) {
    view.setFloat32(offset, part.sourceData[i], true);
    offset += 4;
  }
  for (let i = 0; i < part.sourceIndices.length; i++) {
    view.setUint32(offset, part.sourceIndices[i], true);
    offset += 4;
  }
  return bytes;
}

export function meshDigest(part) {
  return sha256(canonicalMeshBytes(part));
}

function near(a, b, tolerance = 1e-5) {
  return Math.abs(a - b) <= tolerance;
}

function expect(condition, message) {
  if (!condition) throw new Error(`Fixed-source contract mismatch: ${message}`);
}

function mergedPartBounds(parts) {
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (const part of parts) {
    const b = localBounds(part);
    for (let k = 0; k < 3; k++) {
      min[k] = Math.min(min[k], part.pivot[k] + b.min[k]);
      max[k] = Math.max(max[k], part.pivot[k] + b.max[k]);
    }
  }
  return {min, max};
}

/**
 * Verify every pinned byte and every recorded part metric. Throws on drift.
 * Returns the parsed parts so callers never parse twice.
 */
export function verifyFixedSource() {
  const contract = loadContract();
  const manifest = loadManifest();
  const fileHashes = {};

  for (const [key, entry] of Object.entries(contract.source.files)) {
    const bytes = readFixedSource(entry.path);
    const digest = sha256(bytes);
    fileHashes[key] = digest;
    expect(bytes.length === entry.bytes, `${entry.path} size ${bytes.length} != ${entry.bytes}`);
    expect(digest === entry.sha256, `${entry.path} sha256 ${digest} != ${entry.sha256}`);
  }
  if (contract.source.license) {
    const bytes = readFixedSource(contract.source.license.path);
    expect(bytes.length === contract.source.license.bytes, 'license size differs');
    expect(sha256(bytes) === contract.source.license.sha256, 'license sha256 differs');
    fileHashes.license = contract.source.license.sha256;
  }

  const streetEntry = manifest.assets?.find(asset => asset.id === 'street');
  expect(streetEntry, 'manifest has no street asset');
  expect(streetEntry.file === contract.asset.file, 'manifest street file differs from contract');
  expect(streetEntry.sha256 === contract.asset.sha256, 'manifest street sha256 differs from contract');
  expect(streetEntry.bytes === contract.asset.bytes, 'manifest street bytes differ from contract');
  expect(streetEntry.triangles === contract.asset.triangles, 'manifest street triangles differ from contract');
  expect(manifest.units === contract.asset.units, 'manifest units differ from contract');

  const parts = parseStreetStandard(readFixedSource('street.glb'));
  expect(parts.length === 3, `expected 3 street parts, parsed ${parts.length}`);
  expect(parts.length === contract.parts.length, 'contract part count differs');
  expect(parts.length === streetEntry.parts.length, 'manifest part count differs');

  const byName = new Map(parts.map(part => [part.name, part]));
  for (const expected of contract.parts) {
    const part = byName.get(expected.name);
    expect(part, `missing part ${expected.name}`);
    expect(part.action === expected.action, `${expected.name} action ${part.action} != ${expected.action}`);
    expect(part.sourceData.length / 10 === expected.vertices,
      `${expected.name} vertices ${part.sourceData.length / 10} != ${expected.vertices}`);
    expect(part.sourceIndices.length / 3 === expected.triangles,
      `${expected.name} triangles ${part.sourceIndices.length / 3} != ${expected.triangles}`);
    for (let k = 0; k < 3; k++) {
      expect(near(part.pivot[k], expected.pivot_m[k], 0),
        `${expected.name} pivot[${k}] ${part.pivot[k]} != ${expected.pivot_m[k]}`);
    }
    const digest = meshDigest(part);
    expect(digest === expected.mesh_sha256, `${expected.name} mesh hash ${digest} != ${expected.mesh_sha256}`);
    const bounds = localBounds(part);
    for (let k = 0; k < 3; k++) {
      expect(near(bounds.min[k], expected.local_bounds_m.min[k], 1e-12),
        `${expected.name} local min[${k}] ${bounds.min[k]} != ${expected.local_bounds_m.min[k]}`);
      expect(near(bounds.max[k], expected.local_bounds_m.max[k], 1e-12),
        `${expected.name} local max[${k}] ${bounds.max[k]} != ${expected.local_bounds_m.max[k]}`);
    }
    const manifestPart = streetEntry.parts.find(entry => entry.name === expected.name);
    expect(manifestPart, `manifest missing part ${expected.name}`);
    for (let k = 0; k < 3; k++) {
      expect(near(part.pivot[k], manifestPart.pivot_m[k], 0),
        `${expected.name} manifest pivot[${k}] differs`);
    }
    expect(manifestPart.triangles === expected.triangles, `${expected.name} manifest triangles differ`);
    expect(JSON.stringify(manifestPart.material_families) === JSON.stringify(expected.material_families),
      `${expected.name} material families differ`);
  }

  const merged = mergedPartBounds(parts);
  for (let k = 0; k < 3; k++) {
    expect(near(merged.min[k], streetEntry.bounds_m.min[k], 1e-5),
      `merged street min[${k}] ${merged.min[k]} != manifest ${streetEntry.bounds_m.min[k]}`);
    expect(near(merged.max[k], streetEntry.bounds_m.max[k], 1e-5),
      `merged street max[${k}] ${merged.max[k]} != manifest ${streetEntry.bounds_m.max[k]}`);
  }

  return {contract, manifest, parts, fileHashes, mergedBounds: merged};
}

/** Load the recorded 1 m coast frame sample (280..720 m; report uses 320..680). */
export function loadCoastFrameSample() {
  const sample = JSON.parse(readFixedSource('coast-280-720.frames.json'));
  expect(sample.schema === 1, 'frame sample schema differs');
  expect(sample.kind === 'circuit-road-frame-sample', 'frame sample kind differs');
  expect(sample.track === 'coast-reborn', 'frame sample track differs');
  expect(Array.isArray(sample.frames) && sample.frames.length === 441,
    `frame sample should contain 441 frames, got ${sample.frames?.length}`);
  expect(sample.range?.from === 280 && sample.range?.to === 720 && sample.range?.step === 1,
    'frame sample range differs');
  return sample;
}
