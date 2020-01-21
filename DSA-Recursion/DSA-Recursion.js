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


// function factorialize(num) {
//   if (num === 1) {
//     return 1;
//   }

//   return num * factorialize(num - 1);
// }
// console.log(factorialize(3));


//////////////////////////////////////
// const maze = [
//   [' ', ' ', ' ', '*', ' ', ' ', ' '],
//   ['*', '*', ' ', '*', ' ', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', '*', '*', '*', '*', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];

// function escape(maze, str='') {
//   console.log(str);
//   const rs = str.split('').filter(c => c === 'R').length;
//   const ls = str.split('').filter(c => c === 'L').length;
//   const us = str.split('').filter(c => c === 'U').length;
//   const ds = str.split('').filter(c => c === 'D').length;
//   const x = rs - ls;
//   const y = ds - us;

//   let up;
//   let right;
//   let down;
//   let left;
//   if (maze[y - 1]) up = maze[y - 1][x];
//   right = maze[y][x + 1];
//   if (maze[y + 1]) down = maze[y + 1][x];
//   left = maze[y][x-1];

//   //base
//   if ( // if no possible moves
//     (up === undefined || up === '*') &&
//     (right === undefined || right === '*') &&
//     (down === undefined || down === '*') &&
//     (left === undefined || left === '*')
//   ) {console.log('nope'); return;}
//   // if exit is found;
//   if (up === 'e') return str + 'U';
//   if (right === 'e') return str + 'R';
//   if (down === 'e') return str + 'D';
//   if (left === 'e') return str + 'L';

//   //recursive
//   if (up && up !== '*') {
//     const newMaze = [...maze].map(line => [...line]);
//     newMaze[y][x] = '*';
//     return escape(newMaze, str + 'U');
//   }
//   if (right && right !== '*') {
//     const newMaze = [...maze].map(line => [...line]);
//     newMaze[y][x] = '*';
//     return escape(newMaze, str + 'R');
//   }
//   if (down && down !== '*') {
//     const newMaze = [...maze].map(line => [...line]);
//     newMaze[y][x] = '*';
//     return escape(newMaze, str + 'D');
//   }
//   if (left && left !== '*') {
//     const newMaze = [...maze].map(line => [...line]);
//     newMaze[y][x] = '*';
//     return escape(newMaze, str + 'L');
//   }
// }

// console.log(escape(maze));


/////////

// const maze = [
//   [' ', ' ', ' ', '*', ' ', ' ', ' '],
//   ['*', '*', ' ', '*', ' ', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', '*', '*', '*', '*', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];

// function escape(maze, str = '') {
//   // console.log(str);
//   const rs = str.split('').filter(c => c === 'R').length;
//   const ls = str.split('').filter(c => c === 'L').length;
//   const us = str.split('').filter(c => c === 'U').length;
//   const ds = str.split('').filter(c => c === 'D').length;
//   const x = rs - ls;
//   const y = ds - us;

//   let up;
//   let right;
//   let down;
//   let left;
//   if (maze[y - 1]) up = maze[y - 1][x];
//   right = maze[y][x + 1];
//   if (maze[y + 1]) down = maze[y + 1][x];
//   left = maze[y][x - 1];

//   //base
//   if ( // if no possible moves
//     (up === undefined || up === '*') &&
//     (right === undefined || right === '*') &&
//     (down === undefined || down === '*') &&
//     (left === undefined || left === '*')
//   ) { return; }
//   // if exit is found;
//   if (up === 'e') console.log(str + 'U');
//   if (right === 'e') console.log(str + 'R');
//   if (down === 'e') console.log(str + 'D');
//   if (left === 'e') console.log(str + 'L');

//   //recursive
//   if (up && up !== '*') {
//     const newMaze = [...maze].map(line => [...line]);
//     newMaze[y][x] = '*';
//     escape(newMaze, str + 'U');
//   }
//   if (right && right !== '*') {
//     const newMaze = [...maze].map(line => [...line]);
//     newMaze[y][x] = '*';
//     escape(newMaze, str + 'R');
//   }
//   if (down && down !== '*') {
//     const newMaze = [...maze].map(line => [...line]);
//     newMaze[y][x] = '*';
//     escape(newMaze, str + 'D');
//   }
//   if (left && left !== '*') {
//     const newMaze = [...maze].map(line => [...line]);
//     newMaze[y][x] = '*';
//     escape(newMaze, str + 'L');
//   }
// }

// escape(maze);

/////////

function anagramCreator(string) {
  if (string.length === 0) {
    return [];
  }

  let anagramArr = [];
  for (let word of anagramCreator(string.slice(1))) {
    for (let i = 0; i <= word.length; i++) {
      anagramArr.push(word.slice(0, i) + string[0] + word.slice(i, word.length - 1))
    }

  }
  return anagramArr;


}

console.log(anagramCreator('east'));


// ----------SOLUTIONS FROM TAUHIDA-----------

/*/*=================================================================================
8. Find a way out of the maze
You have entered a Maze and need to find your way out of it. There are more than one possible exit from the Maze. Write a recursive function that will help you find a possible exit though the maze
You can use the following as your maze.
let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
The Maze is represented as a NM matrix (in the above case, a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by ``. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.
For the above maze, a possible exit can be RRDDLLDDRRRRRR
*/

const maze = function (labyrinth, position = 0, row, col, direction = 'S', path) {
  if (col < 0 || row < 0) {
    return;
  }
  if (col >= labyrinth[0].length || row >= labyrinth.length) {
    return;
  }

  path[position] = direction;
  position++;

  if (labyrinth[row][col] === 'e') {
    PrintPath(path, 1, position - 1);
    return;
  }
  if (labyrinth[row][col] === ' ') {
    // The current cell is free. Mark it as visited
    labyrinth[row][col] = 's';
    // Invoke recursion to explore all possible directions
    maze(labyrinth, position, row, col - 1, 'L', path); // left
    maze(labyrinth, position, row - 1, col, 'U', path); // up
    maze(labyrinth, position, row, col + 1, 'R', path); // right
    maze(labyrinth, position, row + 1, col, 'D', path); // down
    // Mark back the current cell as free
    //lab[row][col] = ' ';
  }
  // Remove the last direction from the path
  position--;

}
const PrintPath = function (path, startPos, endPos) {
  console.log('Found path to the exit: ');
  console.log(path);
}




/*/*=================================================================================
9. Find ALL the ways out of the maze
Use the above maze and modify your solution so it finds All the possible exits through the Maze. To find all possible exit through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?
Notice that this maze has 3 exits. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:
Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD
*/

const mazeAll = function (labyrinth, position = 0, row, col, direction = 'S', path) {
  if (col < 0 || row < 0) {
    return;
  }
  if (col >= labyrinth[0].length || row >= labyrinth.length) {
    return;
  }

  path[position] = direction;
  position++;

  if (labyrinth[row][col] === 'e') {
    PrintPath(path, 1, position - 1);
    return;
  }
  if (labyrinth[row][col] === ' ') {
    // The current cell is free. Mark it as visited
    labyrinth[row][col] = 's';
    // Invoke recursion to explore all possible directions
    mazeAll(labyrinth, position, row, col - 1, 'L', path); // left
    mazeAll(labyrinth, position, row - 1, col, 'U', path); // up
    mazeAll(labyrinth, position, row, col + 1, 'R', path); // right
    mazeAll(labyrinth, position, row + 1, col, 'D', path); // down
    // Mark back the current cell as free
    labyrinth[row][col] = ' ';
  }
  // Remove the last direction from the path
  position--;

}

/*=================================================================================
Exercise 9 - Anagrams
An anagram is any word or phrase that exactly reproduces the letters in another order. 
Write a program that creates an anagram (listing all the rearrangements of a word) of a given word. 
For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, 
and non-words like tsae.
Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
For example, given east, use e as a prefix and you would place e in front of all six permutations of ast 
— ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. 
Continue this way until you find all the anagrams for east. There should be 24 of them.
Input: 
Output: 
*/

function anagrams(prefix, str) {
  if (str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let currentLetter = str.substring(i, i + 1);
      let previousLetters = str.substring(0, i);
      let afterLetters = str.substring(i + 1);
      anagrams(prefix + currentLetter, previousLetters + afterLetters);
    }
  }
}
function printAnagram(word) {
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

/*=================================================================================*/
/*
Exercise 11: Organization Chart
Write a recursive function that prints the following organization chart. 
Your output should be as shown below with proper indentation to show the hierarchy.
let organization = {
"Zuckerberg": {		
  "Schroepfer": {
    "Bosworth": {
      "Steve":{},
      "Kyle":{},
      "Andra":{}
    },
    "Zhao": {
      "Richie":{},
      "Sofia":{},
      "Jen":{}
    },
    "Badros": {
      "John":{},
      "Mike":{},
      "Pat":{}
    },
    "Parikh": {
      "Zach":{},
      "Ryan":{},
      "Tes":{}
    }
  },
  "Schrage": {
    "VanDyck": {
      "Sabrina":{},
      "Michelle":{},
      "Josh":{}
    },
    "Swain": {
      "Blanch":{},
      "Tom":{},
      "Joe":{}
    },
    "Frankovsky": {
      "Jasee":{},
      "Brian":{},
      "Margaret":{}
    }
  },
  "Sandberg": {
    "Goler": {
      "Eddie":{},
      "Julie":{},
      "Annie":{}
    },
    "Hernandez": {
      "Rowi":{},
      "Inga":{},
      "Morgan":{}
    },
    "Moissinac": {
      "Amy":{},
      "Chuck":{},
      "Vinni":{}
    },
    "Kelley": {
      "Eric":{},
      "Ana":{},
      "Wes":{}
    }
}}};
*/
function traverseA(data, depth = 0) {
  let indent = " ".repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    traverseA(data[key], depth + 1)
  });
}
//another version of the solution
function traverseB(node, indent = 0) {
  for (var key in node) {
    console.log(" ".repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}

//Write a recursive function that prints out the binary representation of a given number.
// input: 5
//output: 101

function binaryRep(input) {
  if (input <= 0) {
    return '';
  }
  let binary = Math.floor(input % 2);
  return binaryRep(Math.floor(input / 2)) + binary

}