import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {loadCoastAmbienceAssets} from '../coast-ambience-assets.mjs';

const source = readFileSync('audio.js', 'utf8');
const {createCoastAmbience, coastFade, isRoadEntry} = new Function(source + ';return {createCoastAmbience,coastFade,isRoadEntry}')();

function fixture(fetchImpl = async () => ({ok: true, arrayBuffer: async () => new ArrayBuffer(100)}), decoded = {numberOfChannels: 2, duration: 8}) {
  const nodes = [], gains = [];
  const param = () => ({value: 0, setTargetAtTime(v) { this.target = v; }});
  const ctx = {
    currentTime: 1,
    decodeAudioData: async () => decoded,
    createBufferSource() {
      const n = {loop: false, playbackRate: param(), connect() {}, disconnect() { this.disconnected = true; },
        start() { this.started = true; }, stop() { this.stopped = true; }};
      nodes.push(n); return n;
    },
    createGain() { const n = {gain: param(), connect() {}, disconnect() {}}; gains.push(n); return n; },
  };
  const p = createCoastAmbience(ctx, {}, {profile: 'coast-v1', url: '/assets/impact-audio/coast-ambience-abc.wav'}, {fetchImpl, timeoutMs: 10});
  return {p, nodes, gains};
}

test('ambience is disabled by default and candidate exposes one checked clip', () => {
  assert.deepEqual(loadCoastAmbienceAssets(), {client: {profile: 'off', url: null}, assets: {}});
  const x = loadCoastAmbienceAssets('assets/coast-ambience', 'coast-v1');
  assert.equal(x.client.profile, 'coast-v1');
  const entries = Object.entries(x.assets);
  assert.equal(entries.length, 1);
  assert.match(entries[0][0], /^\/assets\/impact-audio\/coast-ambience-[0-9a-f]{12}\.wav$/);
  const bytes = Buffer.from(entries[0][1], 'base64');
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.readUInt16LE(22), 2);
  assert.equal(bytes.readUInt32LE(24), 48000);
  assert.equal(bytes.readUInt16LE(34), 16);
  assert.throws(() => loadCoastAmbienceAssets('assets/coast-ambience', 'oops'));
});

test('one looping source follows the corner mix and stops on pause or dispose', async () => {
  const {p, nodes, gains} = fixture();
  const a = p.load();
  assert.equal(a, p.load(), 'concurrent load callers share one request');
  await a;
  assert.equal(nodes.length, 1);
  await p.load();
  assert.equal(nodes.length, 1, 'a ready layer never starts a second source');
  assert(nodes[0].loop && nodes[0].started);
  p.update({running: true, mix: .04});
  assert.equal(gains[0].gain.target, .04);
  p.update({running: false, mix: .04});
  assert.equal(gains[0].gain.target, 0);
  p.dispose();
  assert(nodes[0].stopped && nodes[0].disconnected);
  assert.equal(gains[0].gain.target, 0);
});

test('HTTP, format, timeout and disposed loads never leave a source behind', async () => {
  const bad = fixture(async () => ({ok: false, arrayBuffer: async () => new ArrayBuffer(4)}));
  await bad.p.load();
  assert.equal(bad.nodes.length, 0);
  assert.equal(bad.p.status().status, 'fallback');

  const mono = fixture(undefined, {numberOfChannels: 1, duration: 8});
  await mono.p.load();
  assert.equal(mono.nodes.length, 0);
  assert.equal(mono.p.status().status, 'fallback');

  const slow = fixture(() => new Promise(() => {}));
  await slow.p.load();
  assert.equal(slow.nodes.length, 0);
  assert.equal(slow.p.status().status, 'fallback');

  const f = fixture();
  f.p.dispose();
  await f.p.load();
  assert.equal(f.nodes.length, 0);
});

test('the layer is limited to the /road entry even when both routes share a driving model', () => {
  const original = globalThis.location;
  try {
    for (const pathname of ['/road', '/road/', '/road/index.html']) {
      globalThis.location = {pathname};
      assert.equal(isRoadEntry(), true, pathname);
    }
    for (const pathname of ['/', '/index.html', '/roadside', '/ROAD']) {
      globalThis.location = {pathname};
      assert.equal(isRoadEntry(), false, pathname);
    }
    delete globalThis.location;
    assert.equal(isRoadEntry(), false, 'a missing location never enables the layer');
  } finally {
    if (original === undefined) delete globalThis.location;
    else globalThis.location = original;
  }
});

test('mix wiring is limited to the /road coast corner and preserves existing layers', () => {
  assert.match(source, /roadDriving&&isRoadEntry\(\)&&typeof coastAmbienceConfig!=='undefined'&&coastAmbienceConfig\.profile==='coast-v1'/);
  assert.match(source, /a\.coast\.update\(\{running:active,mix:fade\*\.05\}\)/);
  assert.match(source, /active=running&&sound&&musicSettings\.sfxVolume>0&&raceMode==='circuit'&&activeTrackId==='coast-reborn'&&isRoadEntry\(\)/);
  assert.match(source, /coastFade\(\(player\.s-380\)\/40\),coastFade\(\(660-player\.s\)\/40\)/);
  assert.match(source, /a\.wind\.gain\.gain\.setTargetAtTime/);
  assert.match(source, /a\.tire\.gain\.gain\.setTargetAtTime/);
  assert.equal(coastFade(0), 0);
  assert.equal(coastFade(1), 1);
  assert.equal(coastFade(-1), 0);
  assert.equal(coastFade(2), 1);
  const mixAt = m => Math.min(coastFade((m - 380) / 40), coastFade((660 - m) / 40));
  assert.equal(mixAt(370), 0);
  assert.equal(mixAt(400), 0.5);
  assert.equal(mixAt(500), 1);
  assert.equal(mixAt(640), 0.5);
  assert.equal(mixAt(670), 0);
});
