function sheepJump(sheep) {
  if (sheep === 0) {
    return console.log('All sheep jumped over the fence');
  }
  console.log(`${sheep}: Another sheep jumps over the fence`);
  sheepJump(sheep - 1);
}
sheepJump(3);

function powerCalc(base, exp) {
  if (exp <= 0) return -1;
  //base
  if (exp === 1) return base;

  //recursion
  return base * (powerCalc(base, exp-1));
}
console.log(powerCalc(2, 2));


