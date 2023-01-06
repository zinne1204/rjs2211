let sum = 0;
const sumOdd = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum
}


console.log(sumOdd(5));
