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

function splitString(string, separator) {
  //base
  if (!string.includes(separator)) {
    return [string];
  }
  console.log(string)
  //recursive
  const sepIndex = string.indexOf(separator);
  const stringSegment = string.slice(0, sepIndex);
  return [stringSegment, ...splitString(string.slice(sepIndex + 1), separator)];
}

console.log(splitString('02/20/2020', '/'));

function fib(n) {
  if (n === 1) return [1];
  if (n === 2) return [1, 1];

  return [...fib(n-1), fib(n-1)[fib(n-1).length-1] + fib(n-2)[fib(n-2).length-1]]
}

console.log(fib(7));

