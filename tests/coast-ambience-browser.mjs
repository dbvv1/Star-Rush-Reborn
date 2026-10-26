// Real-browser acceptance for the opt-in /road coast bed, plus real-time mix
// capture. Opt-in: it builds twice and demo-drives a lap, so it is not part of
// `npm test`. Listening quality is still a human judgement; this only proves
// the asset fetch, decode, loop start and clean runtime path in Chromium.
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdir, writeFile} from 'node:fs/promises';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
import {chromium} from 'playwright';
import {startSmokeServer} from './smoke-server.mjs';
import {smokeLaunchOptions} from './smoke-launch.mjs';
import {cleanupSmoke} from './smoke-cleanup.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = new URL('../outputs/coast-ambience/', import.meta.url);
await mkdir(output, {recursive: true});
process.chdir(root);

// Pin every build switch to its default so the final `off` build really is the
// legacy/default artifact even when the caller exports other profiles.
const build = profile => execFileSync(process.execPath, ['build.mjs'], {
  cwd: root, stdio: 'pipe',
  env: {
    ...process.env,
    STAR_RUSH_COAST_AMBIENCE: profile,
    STAR_RUSH_DRIVING_MODEL: 'legacy',
    STAR_RUSH_COAST_FLOW: 'baseline',
    STAR_RUSH_SIGNBOARD_VARIANT: 'baseline',
    STAR_RUSH_RAIL_SOURCE: 'kenney',
    STAR_RUSH_DRIVING_AUDIO: 'procedural',
    STAR_RUSH_CANVAS_HOUSE_ANCHORS: 'off',
  },
});

// Page-side instrumentation only observes the real production client: it
// counts the coast request, decode result, looping source and master-bus
// output. It does not replace audio nodes, add gain, or replay anything.
function probe() {
  const p = window.__coastProbe = {requests: [], decodes: [], coastStarts: 0, errors: [], records: []};
  const fetch0 = window.fetch;
  window.fetch = function (input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    const hit = url.includes('/coast-ambience-');
    if (hit) p.requests.push(url);
    return fetch0.call(this, input, init).then(r => {
      if (hit) { p.status = r.status; p.ok = r.ok; }
      return r;
    }, e => { if (hit) p.errors.push('fetch:' + e.message); throw e; });
  };
  const proto = (window.AudioContext || window.webkitAudioContext).prototype;
  const decode0 = proto.decodeAudioData;
  proto.decodeAudioData = function (...args) {
    const result = decode0.apply(this, args);
    if (result && typeof result.then === 'function') result.then(
      b => p.decodes.push({channels: b.numberOfChannels, duration: b.duration}),
      e => p.errors.push('decode:' + e.message));
    return result;
  };
  const start0 = AudioBufferSourceNode.prototype.start;
  AudioBufferSourceNode.prototype.start = function (...args) {
    const b = this.buffer;
    if (b && this.loop && b.numberOfChannels === 2 && b.duration > 8 && b.duration < 11) p.coastStarts++;
    return start0.apply(this, args);
  };
  // Attach one MediaStreamDestination beside the real master output so the
  // saved WebM is the live game mix, not a separately re-synthesised render.
  const connect0 = AudioNode.prototype.connect;
  AudioNode.prototype.connect = function (target, ...rest) {
    const result = connect0.call(this, target, ...rest);
    try {
      if (target === this.context.destination && !this.context.__coastRecorder) {
        const dest = this.context.createMediaStreamDestination();
        this.context.__coastRecorder = dest;
        connect0.call(this, dest, ...rest);
        const rec = new MediaRecorder(dest.stream, {mimeType: 'audio/webm;codecs=opus'});
        p.recorder = rec;
        rec.ondataavailable = e => { if (e.data.size) p.records.push(e.data); };
        rec.onstop = () => {
          const blob = new Blob(p.records, {type: rec.mimeType || 'audio/webm'});
          const reader = new FileReader();
          reader.onload = () => { p.audioDataUrl = reader.result; p.audioBytes = blob.size; };
          reader.readAsDataURL(blob);
        };
        rec.start(1000);
        // Capture-time origin for the saved WebM; the race clock is not it.
        p.recorderStartedAt = performance.now();
      }
    } catch (e) { p.errors.push('record:' + e.message); }
    return result;
  };
}

async function driveThroughCorner(page, report, tag) {
  await page.goto(new URL('/road', report.origin).href, {waitUntil: 'networkidle'});
  await page.locator('#loading.done').waitFor({state: 'attached'});
  assert.equal(await page.locator('#error').isVisible(), false, 'initialization error');
  assert.equal(await page.locator('#compatNotice').isVisible(), false, 'Canvas fallback is not browser acceptance');
  report.webgl2 = await page.locator('#scene').evaluate(canvas => {
    const gl = canvas.getContext('webgl2');
    return gl && !gl.isContextLost() ? {version: gl.getParameter(gl.VERSION), renderer: gl.getParameter(gl.RENDERER)} : null;
  });
  assert.ok(report.webgl2, 'live WebGL2 context required');
  assert.equal(await page.locator('#trackPicker [data-track="coast-reborn"]').evaluate(el => el.classList.contains('selected')), true);
  report.probeBeforeStart = await page.evaluate(() => window.__coastProbe.requests.length);
  assert.equal(report.probeBeforeStart, 0, 'the entry itself must not fetch the clip before the coast countdown');
  await page.selectOption('#eventType', 'timeTrial');
  await page.locator('#demoBtn').click();
  await page.waitForFunction(() => document.querySelector('#welcome').hidden && document.querySelector('#countdown').hidden, null, {timeout: 60000});
  await page.keyboard.press('F2');
  await page.waitForFunction(() => !document.querySelector('#diagnostics').hidden, null, {timeout: 10000});
  const readS = () => page.evaluate(() => {
    const m = document.querySelector('#diagnostics').textContent.match(/\ns ([\d.]+)/);
    return m ? Number(m[1]) : -1;
  });
  const waitS = (target, timeout = 240000) => page.waitForFunction(want => {
    const m = document.querySelector('#diagnostics').textContent.match(/\ns ([\d.]+)/);
    return m && Number(m[1]) >= want;
  }, target, {timeout});
  // Record WebM-relative seconds for the bed boundaries. These are not the
  // in-game race clock: the capture runs on real time and includes the slow
  // software-WebGL frame rate.
  const captureMark = async target => {
    const captureSeconds = await page.evaluate(() => {
      const p = window.__coastProbe;
      return typeof p.recorderStartedAt === 'number' ? (performance.now() - p.recorderStartedAt) / 1000 : null;
    });
    return {s: target, captureSeconds};
  };
  report.captureMarks = [];
  await waitS(380);
  report.captureMarks.push(await captureMark(380));
  await waitS(400);
  report.sAtScreenshot = await readS();
  report.probeDuringCorner = await page.evaluate(() => ({
    requests: window.__coastProbe.requests.length,
    decodes: window.__coastProbe.decodes.length,
    coastStarts: window.__coastProbe.coastStarts,
    recording: !!window.__coastProbe.recorder,
    errors: [...window.__coastProbe.errors],
  }));
  await page.screenshot({path: fileURLToPath(new URL(`coast-corner-${tag}.png`, output))});
  for (const target of [420, 620, 660]) {
    await waitS(target);
    report.captureMarks.push(await captureMark(target));
  }
  await waitS(680);
  report.reachedS = await readS();
  const dataUrl = await page.evaluate(() => new Promise((resolve, reject) => {
    const p = window.__coastProbe;
    if (!p.recorder) return resolve(null);
    const timer = setInterval(() => {
      if (p.audioDataUrl) { clearInterval(timer); resolve(p.audioDataUrl); }
    }, 200);
    setTimeout(() => { clearInterval(timer); reject(Error('recording timeout')); }, 30000);
    p.recorder.stop();
  }));
  if (dataUrl) {
    const bytes = Buffer.from(dataUrl.split(',')[1], 'base64');
    await writeFile(new URL(`ride-mix-${tag}.webm`, output), bytes);
    report.recording = {file: `ride-mix-${tag}.webm`, bytes: bytes.length};
  }
  report.probeFinal = await page.evaluate(() => ({
    requests: window.__coastProbe.requests,
    status: window.__coastProbe.status,
    ok: window.__coastProbe.ok,
    decodes: window.__coastProbe.decodes,
    coastStarts: window.__coastProbe.coastStarts,
    errors: [...window.__coastProbe.errors],
  }));
  return report;
}

async function run(profile, tag) {
  build(profile);
  const workerUrl = pathToFileURL(resolve('dist/server/index.js')).href + '?coast=' + tag + '-' + Date.now();
  const worker = (await import(workerUrl)).default;
  const resources = await startSmokeServer(worker);
  const report = {profile, tag, origin: resources.origin, consoleErrors: [], pageErrors: [], requestFailures: [], httpErrors: []};
  let browser;
  try {
    browser = await chromium.launch(smokeLaunchOptions());
    const page = await browser.newPage({viewport: {width: 1280, height: 720}});
    page.setDefaultTimeout(60000);
    page.on('console', m => { if (m.type() === 'error') report.consoleErrors.push(m.text()); });
    page.on('pageerror', e => report.pageErrors.push(String(e)));
    page.on('requestfailed', r => report.requestFailures.push({url: r.url(), error: r.failure()?.errorText}));
    page.on('response', r => { if (r.status() >= 400) report.httpErrors.push({url: r.url(), status: r.status()}); });
    await page.route('**/*', route => new URL(route.request().url()).origin === resources.origin ? route.continue() : route.abort('blockedbyclient'));
    await page.addInitScript(probe);
    await driveThroughCorner(page, report, tag);
  } finally {
    report.cleanupErrors = await cleanupSmoke({browser, server: resources.server, db: resources.db});
    await writeFile(new URL(`browser-${tag}.json`, output), JSON.stringify(report, null, 2) + '\n');
  }
  const coastDecodes = report.probeFinal.decodes.filter(d => d.channels === 2 && d.duration > 8 && d.duration < 11);
  if (tag === 'on') {
    assert.equal(report.probeFinal.requests.length, 1, 'one lazy fetch for the selected coast circuit');
    assert.equal(report.probeFinal.status, 200);
    assert.equal(report.probeFinal.ok, true);
    assert.equal(coastDecodes.length, 1, 'the clip decoded as 2-channel ~9.25 s');
    assert.equal(report.probeFinal.coastStarts, 1, 'one looping source started');
  } else {
    assert.equal(report.probeFinal.requests.length, 0, 'the off profile never fetches the clip');
    assert.equal(coastDecodes.length, 0);
    assert.equal(report.probeFinal.coastStarts, 0);
  }
  assert.deepEqual(report.probeFinal.errors, [], 'no probe-side fetch/decode/record errors');
  assert.equal(report.probeDuringCorner.recording, true, 'the live mix tap is active before the corner');
  assert.equal(report.captureMarks.length, 4, 'capture marks cover 380/420/620/660 m');
  assert.ok(report.captureMarks.every(m => Number.isFinite(m.captureSeconds)), 'capture-time marks recorded');
  assert.ok(report.reachedS >= 660, `the demo must pass the end of the bed (reached ${report.reachedS} m)`);
  assert.ok(report.recording && report.recording.bytes > 100000, 'a real-time mixed capture was saved');
  for (const key of ['consoleErrors', 'pageErrors', 'requestFailures', 'httpErrors', 'cleanupErrors']) {
    assert.deepEqual(report[key], [], key);
  }
  return report;
}

const runs = [['coast-v1', 'on'], ['off', 'off']];
const results = [];
try {
  for (const [profile, tag] of runs) results.push(await run(profile, tag));
} finally {
  // Tracked build artifacts must always return to the default, off, legacy bundle.
  build('off');
}
await writeFile(new URL('browser-check.json', output), JSON.stringify(Object.fromEntries(results.map(r => [r.tag, r])), null, 2) + '\n');
const on = results.find(r => r.tag === 'on'), off = results.find(r => r.tag === 'off');
console.log(`Coast ambience browser: on 1 fetch/200, 2-channel 9.25 s decode, 1 loop source, reached ${on.reachedS} m, mix ${on.recording.bytes} B; off 0 fetches/sources, reached ${off.reachedS} m, mix ${off.recording.bytes} B. Listening not judged; captures in outputs/coast-ambience/.`);
