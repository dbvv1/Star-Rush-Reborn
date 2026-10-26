import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {loadSignboardStyles,selectedSignboardStyle,applySignboardStyle} from '../signboard-assets.mjs';
const source=readFileSync('scenery.js','utf8'),styles=loadSignboardStyles();
test('baseline preserves source byte-for-byte; candidates change only two arrow recipes',()=>{
  assert.equal(applySignboardStyle(source,styles.baseline),source);
  for(const id of ['navy-v1','navy-v2']) {
    const s=styles[id],result=applySignboardStyle(source,s);
    assert.equal(result,source.replaceAll(".055,'#bd8faf'",`${s.radius},'${s.arrow}'`));
  }
});
test('unknown variant and original source drift fail closed',()=>{
  assert.throws(()=>selectedSignboardStyle(styles,'navy'),/Unknown signboard variant/);
  assert.throws(()=>selectedSignboardStyle(styles,'toString'),/Unknown signboard variant/);
  assert.throws(()=>applySignboardStyle(source.replace(".055,'#bd8faf'",".2,'#bd8faf'"),styles.baseline),/Signboard source drift/);
});
test('invalid editable styles and changed baseline are rejected',t=>{
  const dir=mkdtempSync(join(tmpdir(),'signboard-assets-')),path=join(dir,'styles.json');
  t.after(()=>rmSync(dir,{recursive:true,force:true}));
  for(const mutate of [s=>s['navy-v2'].radius=1,s=>s['navy-v1'].arrow='red',s=>s.baseline.radius=.07,s=>s.extra={},s=>s['navy-v2'].position=1]){
    const s=structuredClone(styles);mutate(s);writeFileSync(path,JSON.stringify(s));assert.throws(()=>loadSignboardStyles(path));
  }
});
