const isPrime = (n) => {
  let flag = true;
  if (n < 2) {
    flag = false;
  } else {
    for (let i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}

const result = isPrime(2) 
console.log(result? " YES" : " NO");
