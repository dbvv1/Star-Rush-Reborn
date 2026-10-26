import test from 'node:test';
import assert from 'node:assert/strict';
import {createThreeBackend} from '../render-three.js';

test('unavailable WebGL2 keeps null fallback and identifies context failure',t=>{
  const warn=t.mock.method(console,'warn',()=>{});let calls=0;
  assert.equal(createThreeBackend({getContext(type,options){calls++;assert.equal(type,'webgl2');assert.deepEqual(options,{antialias:true,alpha:false});return null;}}),null);
  assert.equal(calls,1);assert.equal(warn.mock.calls.length,1);
  assert.match(warn.mock.calls[0].arguments[0],/webgl2 context unavailable/);
});
test('throwing context request is distinguished without retrying',t=>{
  const warn=t.mock.method(console,'warn',()=>{});let calls=0;
  assert.equal(createThreeBackend({getContext(){calls++;throw Error('synthetic context failure');}}),null);
  assert.equal(calls,1);assert.match(warn.mock.calls[0].arguments[0],/context initialization failed/);
  assert.equal(warn.mock.calls[0].arguments[1],'synthetic context failure');
});
test('renderer construction failure is distinguished from context creation',t=>{
  const warn=t.mock.method(console,'warn',()=>{});t.mock.method(console,'error',()=>{});
  assert.equal(createThreeBackend({getContext(){return {};}}),null);
  assert.equal(warn.mock.calls.length,1);assert.match(warn.mock.calls[0].arguments[0],/renderer initialization failed/);
});
