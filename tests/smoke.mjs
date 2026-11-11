// Browser acceptance of the production build, not a visual-quality judgement.
import assert from 'node:assert/strict';
import {mkdir, writeFile, rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {chromium} from 'playwright';
import {PNG} from 'pngjs';
import {parseSmokeArgs,runFullRace,verifyRaceRestart} from './smoke-full-race.mjs';
import {createHash} from 'node:crypto';
import {readFile} from 'node:fs/promises';
import worker from '../dist/server/index.js';
import {cleanupSmoke} from './smoke-cleanup.mjs';
import {smokeLaunchOptions,assertArgv,restrictCaseContext} from './smoke-launch.mjs';
import {startSmokeServer} from './smoke-server.mjs';

const output = new URL('../outputs/smoke/', import.meta.url);
await mkdir(output, {recursive: true});
for (const name of ['race.png', 'canvas.png']) await rm(new URL(name, output), {force: true});
const report = {startedAt: new Date().toISOString(), passed: false, browser: 'Chromium', sandbox: true,
  args: ['--use-angle=swiftshader'],
  consoleErrors: [], pageErrors: [], requestFailures: [], httpErrors: [], warnings: []};
await writeFile(new URL('report.json', output), JSON.stringify(report, null, 2) + '\n');
let browser, resources;
try {
  const options=parseSmokeArgs(process.argv.slice(2));
  report.scope=options.fullRace?'full-race':'startup-only';report.options=options;
  report.viewport={width:1280,height:720,dpr:1};
  resources = await startSmokeServer(worker);
  const {origin} = resources;
  const launchOptions = smokeLaunchOptions();
  report.sandbox = launchOptions.chromiumSandbox;
  report.args = [...launchOptions.args];
  report.playwrightDefaultsPreserved = launchOptions.ignoreDefaultArgs === undefined;
  report.argumentScope = 'requested launch options, not the full Chromium command line';
  report.executablePath = launchOptions.executablePath || 'playwright-bundled';
  browser = await chromium.launch(launchOptions);
  report.browserVersion = browser.version();
  const session=await browser.newBrowserCDPSession();assertArgv((await session.send('Browser.getBrowserCommandLine')).arguments);await session.detach();report.actualArgvVerified=true;
  const page = await browser.newPage({viewport: {width: 1280, height: 720},deviceScaleFactor:1,serviceWorkers:'block'});
  page.setDefaultTimeout(30000);
  page.on('console', message => {
    if (message.type() === 'error') report.consoleErrors.push(message.text());
    if (message.type() === 'warning') report.warnings.push(message.text());
  });
  page.on('pageerror', error => report.pageErrors.push(String(error)));
  page.on('requestfailed', request => report.requestFailures.push({url: request.url(), error: request.failure()?.errorText}));
  page.on('response', response => { if (response.status() >= 400) report.httpErrors.push({url: response.url(), status: response.status()}); });
  // This test has no need for production services or third-party resources.
  await restrictCaseContext(page.context(),origin);
  await page.goto(origin+options.path, {waitUntil: 'networkidle'});
  if(options.fullRace) {
  const script=await page.locator('script[src]').last().getAttribute('src');
  const served=await page.request.get(new URL(script,origin).href);
  assert.equal(served.status(),200);
  const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
  report.servedBundleSha256=hash(await served.body());
  assert.equal(report.servedBundleSha256,hash(await readFile(new URL('../dist/client/road/game.js',import.meta.url))));
  }
  await page.locator('#loading.done').waitFor({state: 'attached'});
  assert.equal(await page.locator('#error').isVisible(), false, 'initialization error');
  assert.equal(await page.locator('#compatNotice').isVisible(), false, 'Canvas fallback is not WebGL acceptance');
  report.webgl2 = await page.locator('#scene').evaluate(canvas => {
    const gl = canvas.getContext('webgl2');
    const ext=gl?.getExtension('WEBGL_debug_renderer_info');
    return gl && !gl.isContextLost() ? {version: gl.getParameter(gl.VERSION), renderer: gl.getParameter(gl.RENDERER),rawRenderer:ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):null} : null;
  });
  assert.ok(report.webgl2, 'live WebGL2 context required');
  if(options.fullRace) await runFullRace(page,options,report);
  else {
  await page.locator('#startBtn').click();
  await page.waitForFunction(() => document.querySelector('#welcome').hidden && document.querySelector('#countdown').hidden);
  await page.keyboard.down('KeyW');
  try { await page.waitForFunction(() => Number(document.querySelector('#speed').textContent) > 5); }
  finally { await page.keyboard.up('KeyW'); }
  const before = await page.locator('#raceTime').textContent();
  await page.waitForFunction(value => document.querySelector('#raceTime').textContent !== value, before);
  }
  await page.screenshot({path: fileURLToPath(new URL('race.png', output))});
  // Hide siblings only for the canvas capture: HUD text cannot satisfy pixel checks.
  const bytes = await page.locator('#scene').screenshot({path: fileURLToPath(new URL('canvas.png', output)),
    style: '#game > :not(#scene) { visibility: hidden !important; }'});
  const png = PNG.sync.read(bytes), colors = new Map();
  for (let i = 0; i < png.data.length; i += 4) {
    const key = `${png.data[i] >> 3},${png.data[i + 1] >> 3},${png.data[i + 2] >> 3}`;
    colors.set(key, (colors.get(key) || 0) + 1);
  }
  report.pixels = {width: png.width, height: png.height, quantizedColors: colors.size,
    dominantFraction: Math.max(...colors.values()) / (png.width * png.height)};
  assert.ok(colors.size > 100 && report.pixels.dominantFraction < 0.99, 'canvas must contain non-background scene pixels');
  assert.equal(await page.locator('#error').isVisible(), false, 'runtime error overlay');
  for (const key of ['consoleErrors', 'pageErrors', 'requestFailures', 'httpErrors']) assert.deepEqual(report[key], [], key);
  if(options.fullRace) await verifyRaceRestart(page,report);
  for (const key of ['consoleErrors', 'pageErrors', 'requestFailures', 'httpErrors']) assert.deepEqual(report[key], [], key);
  report.passed = true;
} catch (error) {
  report.failure = error.stack || String(error);
  process.exitCode = 1;
} finally {
  report.cleanupErrors = await cleanupSmoke({browser, server:resources?.server || {listening:false}, db:resources?.db || {close(){}}});
  if (report.cleanupErrors.length) { report.passed = false; process.exitCode = 1; }
  report.finishedAt = new Date().toISOString();
  await writeFile(new URL('report.json', output), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
}
