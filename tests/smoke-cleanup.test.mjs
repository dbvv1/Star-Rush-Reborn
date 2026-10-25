import test from 'node:test';
import assert from 'node:assert/strict';
import {cleanupSmoke} from './smoke-cleanup.mjs';
test('cleanup continues through browser, server and database failures', async () => {
  const called = [];
  const errors = await cleanupSmoke({
    browser: {async close() { called.push('browser'); throw Error('browser failed'); }},
    server: {listening: true, closeAllConnections() { called.push('connections'); }, close(cb) { called.push('server'); cb(Error('server failed')); }},
    db: {close() { called.push('db'); throw Error('db failed'); }}
  });
  assert.deepEqual(called, ['browser', 'connections', 'server', 'db']);
  assert.deepEqual(errors, ['browser: browser failed', 'server: server failed', 'database: db failed']);
});
test('cleanup handles a browser that never launched and an unbound server', async () => {
  let closed = false;
  assert.deepEqual(await cleanupSmoke({server: {listening: false}, db: {close() { closed = true; }}}), []);
  assert.equal(closed, true);
});
