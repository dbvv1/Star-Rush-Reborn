// Clear stale acceptance before build or browser-module loading can fail.
import {mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {pathToFileURL, fileURLToPath} from 'node:url';

export async function runSmoke({output, build, browser}) {
  await mkdir(output, {recursive:true});
  // Invalidate the old pass first, even if removing an old screenshot fails.
  const report = {startedAt:new Date().toISOString(), passed:false, phase:'prepare'};
  const receipt = new URL('report.json', output);
  const save = () => writeFile(receipt, JSON.stringify(report, null, 2)+'\n');
  await save();
  try {
    for (const name of ['race.png','canvas.png']) await rm(new URL(name, output), {force:true});
    report.phase='build'; await save();
    await build();
    report.phase='browser'; await save();
    await browser();
    // The browser owns its assertions and final receipt. Never manufacture a pass.
    const result = JSON.parse(await readFile(receipt, 'utf8'));
    return result.passed === true ? 0 : 1;
  } catch (error) {
    report.failure=error.stack || String(error);
    report.finishedAt=new Date().toISOString();
    await save();
    console.error(report.failure);
    return 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const root = fileURLToPath(new URL('../', import.meta.url));
  process.exitCode = await runSmoke({
    output:new URL('../outputs/smoke/', import.meta.url),
    build:() => new Promise((resolve,reject) => {
      // Same Node build used by assemble.py; inherit the caller's build options.
      const child=spawn(process.execPath, ['build.mjs'], {cwd:root, stdio:'inherit'});
      child.once('error',reject);
      child.once('exit',(code,signal) => code===0 ? resolve() : reject(new Error(`Build failed (${signal || code})`)));
    }),
    browser:() => import('./smoke.mjs')
  });
}
