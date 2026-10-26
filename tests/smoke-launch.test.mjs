import test from 'node:test';
import assert from 'node:assert/strict';
import {smokeLaunchOptions} from './smoke-launch.mjs';
test('smoke keeps bundled Chromium and sandbox by default', () => {
  const options = smokeLaunchOptions({});
  assert.equal(options.chromiumSandbox, true);
  assert.equal(options.executablePath, undefined);
  assert.deepEqual(options.args, ['--use-angle=swiftshader']);
});
test('explicit installed executable does not disable sandbox', () => {
  assert.equal(smokeLaunchOptions({STAR_RUSH_SMOKE_CHROMIUM: '/usr/bin/chromium'}).chromiumSandbox, true);
  assert.throws(() => smokeLaunchOptions({STAR_RUSH_SMOKE_CHROMIUM: 'chromium'}), /absolute path/);
});
test('only explicit cloud override disables sandbox; typos fail closed', () => {
  assert.equal(smokeLaunchOptions({STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX: '1'}).chromiumSandbox, false);
  for (const value of ['', '0', 'true']) assert.throws(() => smokeLaunchOptions({STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX: value}), /unset or 1/);
});
