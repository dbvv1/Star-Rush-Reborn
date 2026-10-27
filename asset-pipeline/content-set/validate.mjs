import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import validator from 'gltf-validator';
const root = path.dirname(fileURLToPath(import.meta.url));
const dirs = process.argv.slice(2).length ? process.argv.slice(2) : ['outputs/base', 'outputs/warm'];
let failed = false;
for (const dir of dirs) {
  const directory = path.resolve(root, dir);
  const manifest = JSON.parse(await fs.readFile(path.join(directory, 'manifest.json')));
  const reports = [];
  for (const asset of manifest.assets) {
    const bytes = await fs.readFile(path.join(directory, asset.file));
    const actualSha = crypto.createHash('sha256').update(bytes).digest('hex');
    if (actualSha !== asset.sha256 || bytes.length !== asset.bytes) throw new Error('Asset identity drift: '+asset.file);
    const r = await validator.validateBytes(new Uint8Array(bytes), {uri: asset.file, maxIssues: 10000, writeTimestamp: false});
    if (r.info.totalTriangleCount !== asset.triangles) throw new Error('Triangle count drift: '+asset.file);
    reports.push({file:asset.file,sha256:actualSha,bytes:bytes.length,validator:validator.version(),issues:r.issues,info:r.info});
    console.log(dir, asset.file, JSON.stringify({errors:r.issues.numErrors,warnings:r.issues.numWarnings,infos:r.issues.numInfos}));
    failed ||= !!(r.issues.numErrors || r.issues.numWarnings);
  }
  await fs.writeFile(path.join(directory, 'gltf-validation.json'), JSON.stringify(reports, null, 2)+'\n');
}
if (failed) process.exitCode = 1;
