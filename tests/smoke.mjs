// Browser acceptance of the production build, not a visual-quality judgement.
import assert from 'node:assert/strict';
import {mkdir, writeFile, rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {chromium} from 'playwright';
import {PNG} from 'pngjs';
import worker from '../dist/server/index.js';
import {cleanupSmoke} from './smoke-cleanup.mjs';
import {smokeLaunchOptions} from './smoke-launch.mjs';
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
  resources = await startSmokeServer(worker);
  const {origin} = resources;
  const launchOptions = smokeLaunchOptions();
  report.sandbox = launchOptions.chromiumSandbox;
  report.args = [...launchOptions.args];
  report.executablePath = launchOptions.executablePath || 'playwright-bundled';
  browser = await chromium.launch(launchOptions);
  report.browserVersion = browser.version();
  const page = await browser.newPage({viewport: {width: 1280, height: 720}});
  page.setDefaultTimeout(30000);
  page.on('console', message => {
    if (message.type() === 'error') report.consoleErrors.push(message.text());
    if (message.type() === 'warning') report.warnings.push(message.text());
  });
  page.on('pageerror', error => report.pageErrors.push(String(error)));
  page.on('requestfailed', request => report.requestFailures.push({url: request.url(), error: request.failure()?.errorText}));
  page.on('response', response => { if (response.status() >= 400) report.httpErrors.push({url: response.url(), status: response.status()}); });
  // This test has no need for production services or third-party resources.
  await page.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort('blockedbyclient'));
  await page.goto(origin, {waitUntil: 'networkidle'});
  await page.locator('#loading.done').waitFor({state: 'attached'});
  assert.equal(await page.locator('#error').isVisible(), false, 'initialization error');
  assert.equal(await page.locator('#compatNotice').isVisible(), false, 'Canvas fallback is not WebGL acceptance');
  report.webgl2 = await page.locator('#scene').evaluate(canvas => {
    const gl = canvas.getContext('webgl2');
    return gl && !gl.isContextLost() ? {version: gl.getParameter(gl.VERSION), renderer: gl.getParameter(gl.RENDERER)} : null;
  });
  assert.ok(report.webgl2, 'live WebGL2 context required');
  await page.locator('#startBtn').click();
  await page.waitForFunction(() => document.querySelector('#welcome').hidden && document.querySelector('#countdown').hidden);
  await page.keyboard.down('KeyW');
  try { await page.waitForFunction(() => Number(document.querySelector('#speed').textContent) > 5); }
  finally { await page.keyboard.up('KeyW'); }
  const before = await page.locator('#raceTime').textContent();
  await page.waitForFunction(value => document.querySelector('#raceTime').textContent !== value, before);
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
