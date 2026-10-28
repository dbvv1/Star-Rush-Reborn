// Build-time bridge only: consume the frozen project's actual spline/car mesh.
// No race loop, legacy contacts, AI, storage, network or globals are executed.
import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
const root = new URL('../../', import.meta.url);
const read = name => readFileSync(new URL(name, root), 'utf8');
const take = (source, marker) => {
  const i = source.indexOf(marker);
  if (i < 0) throw Error('Frozen source bridge marker missing: ' + marker);
  return source.slice(0, i);
};
export function generate() {
  const engine = read('engine.js'), circuit = read('circuit.js'), racer = read('racer.js');
  mkdirSync(new URL('.generated/', import.meta.url), {recursive:true});
  writeFileSync(new URL('.generated/project.mjs', import.meta.url),
    engine + '\nconst roadDriving=true;\n' + take(circuit, '// 2D rigid-body contacts') + '\n' +
    take(racer, 'const flames=') + '\nexport {circuitRoad,CIRCUIT_LENGTH,car,bodyNode,headNode,tires,world,mm,trs,translation,ry,rz};\n');
  const hashes = Object.fromEntries(['engine.js','circuit.js','racer.js','race.js'].map(name =>
    [name,createHash('sha256').update(read(name)).digest('hex')]));
  writeFileSync(new URL('.generated/sources.json', import.meta.url), JSON.stringify(hashes,null,2)+'\n');
  return hashes;
}
