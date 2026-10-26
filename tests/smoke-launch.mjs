import {isAbsolute} from 'node:path';

// Overrides are opt-in; never retry another executable or disable sandbox automatically.
export function smokeLaunchOptions(env = process.env) {
  const executablePath = env.STAR_RUSH_SMOKE_CHROMIUM;
  if (executablePath && !isAbsolute(executablePath)) throw Error('STAR_RUSH_SMOKE_CHROMIUM must be an absolute path');
  const noSandbox = env.STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX;
  if (noSandbox !== undefined && noSandbox !== '1') throw Error('STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX must be unset or 1');
  return {headless: true, chromiumSandbox: noSandbox !== '1',
    // Playwright itself adds this flag; removing it from args is insufficient.
    ignoreDefaultArgs: ['--enable-unsafe-swiftshader'],
    args: ['--use-angle=swiftshader'], timeout: 30000,
    ...(executablePath ? {executablePath} : {})};
}
