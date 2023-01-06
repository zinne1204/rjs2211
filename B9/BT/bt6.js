let sum = 0;
const sumPrime = (n) => {
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum
}

console.log(sumPrime(3));
