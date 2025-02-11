function fib():number[] {
  const fibs:number[] = [0, 1];
  let i:number = 2;
  while (i < 50) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
    i++;
  }
  return fibs;
}

function numsToString(): string {
  return fib().join(', ');
}

function numEvenNums(): number {
  return fib().filter(num => num % 2 === 0).length;
}

console.log(fib());
console.log(numsToString());
console.log(numEvenNums());
