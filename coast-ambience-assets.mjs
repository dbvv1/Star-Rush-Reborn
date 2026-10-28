import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';

// Opt-in coastal ambience for the /road coast circuit only. The disabled
// profile adds no audio bytes and no fetch; unknown names fail the build.
export function loadCoastAmbienceAssets(directory = 'assets/coast-ambience', profile = 'off') {
  if (!['off', 'coast-v1'].includes(profile)) throw Error('Unknown coast ambience profile: ' + profile);
  const client = {profile, url: null}, assets = {};
  if (profile === 'off') return {client, assets};

  const manifest = JSON.parse(readFileSync(join(directory, 'manifest.json'), 'utf8'));
  const clip = manifest?.clip;
  if (manifest?.profile !== 'coast-v1' || !clip || clip.file !== 'coast-breeze-v1.wav') throw Error('Invalid coast ambience manifest');
  const bytes = readFileSync(join(directory, 'runtime', clip.file));
  const hash = createHash('sha256').update(bytes).digest('hex');
  const stereo16 = bytes.length >= 44 && bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WAVE' &&
    bytes.readUInt16LE(20) === 1 && bytes.readUInt16LE(22) === 2 && bytes.readUInt32LE(24) === 48000 && bytes.readUInt16LE(34) === 16;
  if (!stereo16 || hash !== clip.sha256 || bytes.length !== clip.bytes || bytes.length > 4000000) throw Error('Invalid coast ambience clip');
  client.url = '/assets/impact-audio/coast-ambience-' + hash.slice(0, 12) + '.wav';
  assets[client.url] = bytes.toString('base64');
  return {client, assets};
}
