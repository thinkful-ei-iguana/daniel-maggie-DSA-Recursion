// function sheepJump(sheep) {
//   if (sheep === 0) {
//     return console.log('All sheep jumped over the fence');
//   }
//   console.log(`${sheep}: Another sheep jumps over the fence`);
//   sheepJump(sheep - 1);
// }
// sheepJump(3);

// function powerCalc(base, exp) {
//   if (exp <= 0) return -1;
//   //base
//   if (exp === 1) return base;

//   //recursion
//   return base * (powerCalc(base, exp-1));
// }
// console.log(powerCalc(2, 2));

////////

// function reverseString(string) {
//   if (!string.length) {
//     return '';
//   }
//   const letter = string[0];
//   return reverseString(string.slice(1)) + letter;
// }

// console.log(reverseString('pizza'));

///////////////////

// function trian(n) {
//   //base 
//   if (n === 1) return 1; 
//   // recursive
//   return n + trian(n-1)
// }
// console.log(trian(7));

/////////////////

// function splitString(string, separator) {
//   //base
//   if (!string.includes(separator)) {
//     return [string];
//   }
//   console.log(string)
//   //recursive
//   const sepIndex = string.indexOf(separator);
//   const stringSegment = string.slice(0, sepIndex);
//   return [stringSegment, ...splitString(string.slice(sepIndex + 1), separator)];
// }

// console.log(splitString('02/20/2020', '/'));

//////////////////
// const fibMemo = {}
// function fib(n) {
//   //base 
//   if (n === 1 || n ===2) {
//     if (!fibMemo[n]) {
//       fibMemo[n] = 1;
//       console.log(1);
//     }
//     return 1;
//   }

//   if (!fibMemo[n]) {
//     fibMemo[n] = fib(n-1) + fib(n-2)
//     console.log(fibMemo[n]);
//   }
//   //recursive

//   return fibMemo[n]
// }
// fib(7);

///////////


function factorialize(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorialize(num - 1);
}
console.log(factorialize(3));


//////////////////////////////////////
const maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function escape(maze, str='') {
  console.log(str);
  const rs = str.split('').filter(c => c === 'R').length;
  const ls = str.split('').filter(c => c === 'L').length;
  const us = str.split('').filter(c => c === 'U').length;
  const ds = str.split('').filter(c => c === 'D').length;
  const x = rs - ls;
  const y = ds - us;

  let up;
  let right;
  let down;
  let left;
  if (maze[y - 1]) up = maze[y - 1][x];
  right = maze[y][x + 1];
  if (maze[y + 1]) down = maze[y + 1][x];
  left = maze[y][x-1];

  //base
  if ( // if no possible moves
    (up === undefined || up === '*') &&
    (right === undefined || right === '*') &&
    (down === undefined || down === '*') &&
    (left === undefined || left === '*')
  ) {console.log('nope'); return;}
  // if exit is found;
  if (up === 'e') return str + 'U';
  if (right === 'e') return str + 'R';
  if (down === 'e') return str + 'D';
  if (left === 'e') return str + 'L';

  //recursive
  if (up && up !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    return escape(newMaze, str + 'U');
  }
  if (right && right !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    return escape(newMaze, str + 'R');
  }
  if (down && down !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    return escape(newMaze, str + 'D');
  }
  if (left && left !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    return escape(newMaze, str + 'L');
  }
}

console.log(escape(maze));