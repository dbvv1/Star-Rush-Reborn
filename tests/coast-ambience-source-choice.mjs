import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFileSync, readdirSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
import {loadCoastAmbienceAssets} from '../coast-ambience-assets.mjs';

const selected = loadCoastAmbienceAssets('assets/coast-ambience', 'coast-v1');
const build = (profile, drivingModel = 'legacy') => execFileSync(process.execPath, ['build.mjs'], {stdio: 'pipe', env: {...process.env, STAR_RUSH_COAST_AMBIENCE: profile, STAR_RUSH_DRIVING_MODEL: drivingModel}});
const coastFiles = () => readdirSync('dist/client/assets/impact-audio').filter(f => f.startsWith('coast-ambience-'));
const ambientUrl = /\/assets\/impact-audio\/coast-ambience-[0-9a-f]{12}\.wav/;
let baseline;
try {
  // The road driving model serves the same simulation logic at both `/` and
  // `/road`; the ambience must still be attached only to the /road entry.
  for (const model of ['legacy', 'road']) {
    for (const profile of ['off']) {
      build(profile, model);
      const worker = (await import(pathToFileURL(process.cwd() + '/dist/server/index.js').href + '?coast=' + model + '-' + profile)).default;
      const roadGame = await (await worker.fetch(new Request('https://test.invalid/road/game.js'), {})).text();
      const entryGame = await (await worker.fetch(new Request('https://test.invalid/game.js'), {})).text();
      if (profile === 'off') {
        if (model === 'legacy') baseline = readFileSync('dist/server/index.js');
        assert.equal(coastFiles().length, 0);
        assert.doesNotMatch(roadGame, ambientUrl, model + ' disabled profile adds no ambient fetch');
        assert.doesNotMatch(entryGame, ambientUrl, model + ' disabled profile leaves / without ambient fetch');
      } else {
        assert.equal(coastFiles().length, 1);
        assert.equal(Object.keys(selected.assets).length, 1);
        for (const [url, encoded] of Object.entries(selected.assets)) {
          assert(roadGame.includes(url), model + ' road entry carries the selected ambience URL');
          assert(!entryGame.includes(url), model + ' / entry never carries or fetches the ambience URL');
          const response = await worker.fetch(new Request('https://test.invalid' + url), {});
          assert.equal(response.status, 200);
          assert.match(response.headers.get('content-type'), /audio\/wav/);
          assert.deepEqual(Buffer.from(await response.arrayBuffer()), Buffer.from(encoded, 'base64'));
        }
      }
    }
  }
  for(const model of ['legacy','road'])assert.throws(()=>build('coast-v1',model),/candidate retired/);
  assert.equal(Object.keys(selected.assets).length,1,'retired source remains recoverable');
} finally {
  build('off');
}
assert.deepEqual(readFileSync('dist/server/index.js'), baseline, 'default artifact restored exactly');
console.log('Coast ambience build: off excludes bytes/fetch, retired candidate rejected in both models, source PCM preserved, default restored (not listening).');
