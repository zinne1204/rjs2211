const globalArray = [
    11, 2,234, 1, 45654, 131, 2, 3, 4, 5, 2, 6, 11, 2, 524, 11,11,3, 1235, 76,2,11,11
];
// B21
const SumArray = (pArray) => {
  let sum = 0;
  pArray.forEach((value) => {
    sum += value;
  });

  return sum;
};
console.log(`KQ bài 21: ${SumArray(globalArray)}`);

//B22
const MaxMinElement = (pArray) => {
  let minNumber = pArray[0];
  let maxNumber = pArray[0];
  pArray.forEach((value) => {
    if (minNumber > value) {
      minNumber = value;
    }
    if (maxNumber < value) {
      maxNumber = value;
    }
  });
  return { min: minNumber, max: maxNumber };
};

console.log(`KQ bài 22: ${JSON.stringify(MaxMinElement(globalArray))}`);

//B23

const ArrayUnique = (pArray) => {
  pArray.sort();
  let maxCount = [0, 0];
  let count = 1;
  for (let i = pArray.length - 1; i > 0; --i) {
    if (pArray[i] == pArray[i - 1]) ++count;
    else {
      if (maxCount[1] < count) {
        maxCount[0] = pArray[i];
        maxCount[1] = count;
      }
      count = 1;
    }
  }
  return `Phần tử xuất hiện nhiều nhất là: ${maxCount[0]} với ${maxCount[1]} lần`;
};

console.log(`KQ bài 23: ${ArrayUnique(globalArray)}`);
//B24

function isPrime(n) {
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
    return flag
  }
 
const primeArray = globalArray.filter(function(value){
    if (isPrime(value)) {return true}
    return false
});
 
console.log(`KQ bài 24: ${primeArray}`);

//B25
const PowArray = (pArray) => {
    const newArray = []
    pArray.forEach(value => {
        newArray.push(Math.pow(value, 2))
    });
    return newArray
}

console.log(`KQ bài 25: ${PowArray(globalArray)}`);
