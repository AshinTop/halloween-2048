import test from 'node:test';
import assert from 'node:assert/strict';
import {slide,createGame,createTrial,move,moonSwap,status,TRIALS,validateSaved} from '../engine.js';
test('merges once per tile and respects direction',()=>{
  const b=[2,2,2,2,...Array(12).fill(0)];
  assert.deepEqual(slide(b,'left').board.slice(0,4),[4,4,0,0]);
  assert.equal(slide(b,'left').gained,8);
  assert.deepEqual(slide([4,2,2,0,...Array(12).fill(0)],'right').board.slice(0,4),[0,0,4,4]);
});
test('no-op never consumes a turn or creates a tile',()=>{
  const s={...createGame(12),board:[2,0,0,0,...Array(12).fill(0)]};
  const r=move(s,'left');assert.equal(r.changed,false);assert.equal(r.state,s);
});
test('seeded play is reproducible and generated mass is valid',()=>{
  let a=createGame(519),b=createGame(519);assert.deepEqual(a,b);
  for(const d of ['left','down','right','up','left']){a=move(a,d).state;b=move(b,d).state;}
  assert.deepEqual(a,b);assert.equal(validateSaved(a),true);
});
test('a full board with a possible adjacent merge is not game over',()=>{
  const s={...createGame(1),board:[2,4,2,4,4,2,4,2,2,4,2,4,4,2,4,4]};assert.equal(status(s),'playing');
  s.board[15]=2;assert.equal(status(s),'lost');
});
test('moon swap consumes one turn and only one charge',()=>{
  let s=createTrial(0);let r=moonSwap(s,0,2);assert.equal(r.changed,true);assert.equal(r.state.moves,1);assert.equal(r.state.board[0],16);
  assert.equal(moonSwap(r.state,0,2).changed,false);assert.equal(moonSwap(s,0,1).changed,false);
});
test('trial boards preserve mass and each has a verified solution',()=>{
  // A breadth-first search validates the positional goal within its move limit.
  for(let i=0;i<TRIALS.length;i++) {
    const initial=createTrial(i),queue=[initial],seen=new Set([initial.board.join(',')]);let solved=null;
    for(let head=0;head<queue.length && !solved;head++){
      const s=queue[head];if(status(s)==='won'){solved=s;break;}if(s.moves>=TRIALS[i].limit)continue;
      for(const d of ['left','right','up','down']){const n=move(s,d);if(!n.changed)continue;assert.equal(n.state.board.reduce((a,b)=>a+b,0),initial.board.reduce((a,b)=>a+b,0));const key=n.state.board.join(',');if(!seen.has(key)){seen.add(key);queue.push(n.state);}}
    }
    assert.ok(solved,`Trial ${i+1} is solvable without the optional spell`);
  }
});
