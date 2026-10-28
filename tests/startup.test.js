import test from 'node:test';
import assert from 'node:assert/strict';
import {parsePreferences,parseLevelIndex} from '../startup.js';
import {TRIALS,createTrial} from '../engine.js';

test('null, scalar, array and malformed preferences safely fall back to an object',()=>{
  for(const raw of [null,undefined,'null','[]','[1,2]','true','false','0','42','"zh"','', '{broken']){
    const prefs=parsePreferences(raw);
    assert.deepEqual(prefs,{},String(raw));
    assert.equal(prefs.lang,undefined);
  }
  assert.deepEqual(parsePreferences('{"lang":"zh","muted":true,"best":128}'),{lang:'zh',muted:true,best:128});
});

test('trial query accepts only integer levels in range before constructing a game',()=>{
  for(const raw of [null,undefined,'','0','-1','1.5','2.999','4','Infinity','NaN','abc','9007199254740993']){
    assert.equal(parseLevelIndex(raw,TRIALS.length),null,String(raw));
  }
  for(let level=1;level<=TRIALS.length;level++){
    const query=new URLSearchParams(`trial=${level}`);
    const index=parseLevelIndex(query.get('trial'),TRIALS.length);
    assert.equal(index,level-1);
    assert.equal(createTrial(index).trialIndex,index);
  }
});
