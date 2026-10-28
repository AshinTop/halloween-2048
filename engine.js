export const SIZE = 4;
export const DIRECTIONS = ['left', 'right', 'up', 'down'];
export const TRIALS = [
  {id:'first-light', name:['First light','第一盏灯'], target:128, targetIndex:0, limit:8, board:[32,32,16,16,16,8,8,0,0,0,0,0,0,0,0,0]},
  {id:'moon-gate', name:['Moon gate','月光之门'], target:256, targetIndex:15, limit:10, board:[0,32,64,32,32,0,32,0,0,0,32,16,0,0,8,8]},
  {id:'king-awakes', name:['The king awakes','南瓜王苏醒'], target:512, targetIndex:3, limit:12, board:[64,128,0,64,32,64,32,0,0,32,0,32,16,0,32,16]}
];

export function random(state) {
  let x = (state >>> 0) || 0x9e3779b9;
  x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
  return {state:x >>> 0, value:(x >>> 0) / 4294967296};
}

export function addTile(board, seed) {
  const empty = board.map((v,i)=>v ? -1 : i).filter(i=>i >= 0);
  if (!empty.length) return {board:[...board], seed, spawned:-1};
  let r = random(seed); const index = empty[Math.floor(r.value * empty.length)];
  r = random(r.state); const next = [...board]; next[index] = r.value < .9 ? 2 : 4;
  return {board:next, seed:r.state, spawned:index};
}

export function slide(board, direction) {
  if (!DIRECTIONS.includes(direction)) throw new Error('Unknown direction');
  const next = [...board], merged=[]; let gained = 0;
  for (let line=0; line<4; line++) {
    const indices = Array.from({length:4},(_,n)=>direction==='left' ? line*4+n : direction==='right' ? line*4+3-n : direction==='up' ? n*4+line : (3-n)*4+line);
    const values=indices.map(i=>board[i]).filter(Boolean), out=[];
    for (let i=0;i<values.length;i++) {
      if (values[i]===values[i+1]) { const value=values[i]*2; out.push(value); gained+=value; merged.push(indices[out.length-1]); i++; }
      else out.push(values[i]);
    }
    indices.forEach((index,i)=>{next[index]=out[i]||0;});
  }
  return {board:next, gained, merged, changed:next.some((v,i)=>v!==board[i])};
}

export function canMove(board) { return DIRECTIONS.some(d=>slide(board,d).changed); }
export function createGame(seed=1) {
  let first=addTile(Array(16).fill(0),seed), second=addTile(first.board,first.seed);
  return {mode:'classic', board:second.board, seed:second.seed, score:0, moves:0, swapUsed:false};
}
export function createTrial(index=0) {
  const trial=TRIALS[index]; if(!trial) throw new Error('Unknown trial');
  return {mode:'trial', trialIndex:index, board:[...trial.board], seed:1, score:0, moves:0, swapUsed:false};
}
export function trialWon(state) { const t=TRIALS[state.trialIndex]; return state.mode==='trial' && state.board[t.targetIndex]>=t.target; }
export function status(state) {
  if(state.mode==='trial') {
    if(trialWon(state)) return 'won';
    if(state.moves>=TRIALS[state.trialIndex].limit) return 'lost';
    if(!canMove(state.board) && (state.swapUsed || state.board.filter(Boolean).length<2)) return 'lost';
    return 'playing';
  }
  return canMove(state.board) ? 'playing' : 'lost';
}
export function move(state,direction) {
  if(status(state)!=='playing') return {state, changed:false, merged:[]};
  const result=slide(state.board,direction);
  if(!result.changed) return {state,changed:false,merged:[]};
  let next={...state,board:result.board,score:state.score+result.gained,moves:state.moves+1};
  let spawned=-1;
  if(state.mode==='classic') { const r=addTile(next.board,next.seed); next.board=r.board;next.seed=r.seed;spawned=r.spawned; }
  return {state:next,changed:true,merged:result.merged,spawned,gained:result.gained};
}
export function moonSwap(state,a,b) {
  if(state.mode!=='trial'||status(state)!=='playing'||state.swapUsed||a===b||!state.board[a]||!state.board[b]||a<0||b<0||a>15||b>15) return {state,changed:false};
  const board=[...state.board];[board[a],board[b]]=[board[b],board[a]];
  if(board.every((v,i)=>v===state.board[i])) return {state,changed:false};
  return {state:{...state,board,moves:state.moves+1,swapUsed:true},changed:true};
}

export function validateSaved(value) {
  return Boolean(value && value.mode==='classic' && Array.isArray(value.board) && value.board.length===16 && value.board.every(n=>n===0||(Number.isSafeInteger(n)&&n>=2&&Number.isInteger(Math.log2(n)))) && Number.isInteger(value.seed) && Number.isFinite(value.score) && value.score>=0 && Number.isInteger(value.moves) && value.moves>=0);
}
