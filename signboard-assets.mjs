import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';

export function loadSignboardStyles(path='assets/signboard/styles.json') {
  const styles=JSON.parse(readFileSync(path,'utf8'));
  assert.deepEqual(Object.keys(styles).sort(),['baseline','navy-v1','navy-v2']);
  for(const style of Object.values(styles)) {
    assert.deepEqual(Object.keys(style).sort(),['arrow','radius']);
    assert.match(style.arrow,/^#[0-9a-f]{6}$/);
    assert.ok(Number.isFinite(style.radius)&&style.radius>=.03&&style.radius<=.10,'Invalid signboard arrow radius');
  }
  assert.deepEqual(styles.baseline,{arrow:'#bd8faf',radius:.055},'Baseline must preserve the original scene');
  return styles;
}

// Keep the original procedural source pinned for existing scene-authoring tools.
// The normal production assembler and offline exporter use this same narrow recipe.
export function applySignboardStyle(scenery,style) {
  const begin=scenery.indexOf('function signBoard('),end=scenery.indexOf('function scenicProp(');
  assert.ok(begin>=0&&end>begin,'Missing signboard source boundaries');
  const original=scenery.slice(begin,end);
  assert.equal(createHash('sha256').update(original).digest('hex'),'10e0b7908dc656ca6c55e05ce5f48b089c30984138c9e267456b016f4f483bb6','Signboard source drift');
  const needle=".055,'#bd8faf'";
  assert.equal(original.split(needle).length,3,'Expected exactly two arrow segments');
  if(style.radius===.055&&style.arrow==='#bd8faf')return scenery;
  const modified=original.replaceAll(needle,`${style.radius},'${style.arrow}'`);
  return scenery.slice(0,begin)+modified+scenery.slice(end);
}

export function selectedSignboardStyle(styles,variant='baseline') {
  assert.ok(Object.hasOwn(styles,variant),'Unknown signboard variant: '+variant);
  return styles[variant];
}
