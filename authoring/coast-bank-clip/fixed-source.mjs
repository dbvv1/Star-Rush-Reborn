/** Load the fixed content-set adapter and road.glb without copying assets into
 * this authoring directory.  Blobs are read from the repository object store;
 * the decoded parts are cached for the test process.
 */
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {mkdtempSync, readFileSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

export const REPO_ROOT = fileURLToPath(new URL('../..', import.meta.url));
export const FIXED_COMMIT = 'ab2655930996b9d81f5fb35469669c72b7be28e1';
export const SIDEBAND_PATH = fileURLToPath(new URL('./bank-triangles.json', import.meta.url));
const ADAPTER = 'asset-pipeline/content-set/adapter.mjs';
const ROAD = 'asset-pipeline/content-set/outputs/base/road.glb';

function gitShow(path) {
  try {
    return execFileSync('git', ['show', `${FIXED_COMMIT}:${path}`], {
      cwd: REPO_ROOT, maxBuffer: 8 * 1024 * 1024,
    });
  } catch (error) {
    throw new Error(`Fixed content-set object ${path} is not available at ${FIXED_COMMIT}: ${error.message}`);
  }
}

let cached;
export async function loadFixedRoad() {
  if (cached) return cached;
  const sideband = JSON.parse(readFileSync(SIDEBAND_PATH, 'utf8'));
  const adapterBytes = gitShow(ADAPTER);
  const roadBytes = gitShow(ROAD);
  const adapterSha = createHash('sha256').update(adapterBytes).digest('hex');
  const roadSha = createHash('sha256').update(roadBytes).digest('hex');
  if (adapterSha !== sideband.source.adapter.sha256) throw new Error('Fixed adapter hash drift');
  if (roadSha !== sideband.source.roadOutputGlb.sha256) throw new Error('Fixed road.glb hash drift');
  const directory = mkdtempSync(join(tmpdir(), 'star-bank-clip-source-'));
  const adapterPath = join(directory, 'adapter.mjs');
  writeFileSync(adapterPath, adapterBytes);
  const adapter = await import(pathToFileURL(adapterPath).href);
  const parts = adapter.decodeStandardPart(roadBytes);
  cached = {parts, sideband, adapter, roadBytes};
  return cached;
}

export function cloneParts(parts) {
  return parts.map(part => ({
    ...part,
    pivot: [...part.pivot],
    sourceData: new Float32Array(part.sourceData),
    sourceIndices: new Uint32Array(part.sourceIndices),
  }));
}

export function partWorld(part, vertexId) {
  const offset = vertexId * 10;
  return [
    part.sourceData[offset] + (part.pivot?.[0] ?? 0),
    part.sourceData[offset + 1] + (part.pivot?.[1] ?? 0),
    part.sourceData[offset + 2] + (part.pivot?.[2] ?? 0),
  ];
}

export function triangleWorld(part, triangleId) {
  return [0, 1, 2].map(k => partWorld(part, part.sourceIndices[triangleId * 3 + k]));
}

export function triangleRows(part, triangleId) {
  return [0, 1, 2].map(k => {
    const offset = part.sourceIndices[triangleId * 3 + k] * 10;
    return Array.from(part.sourceData.slice(offset, offset + 10));
  });
}
