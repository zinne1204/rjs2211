function isReverse(n) {
  let numToString = n.toString();
  let reverseStr = "";
  let flag = false;
  for (let i = numToString.length - 1; i >= 0; i--) {
    reverseStr += numToString[i];
  }
  if (reverseStr === numToString) {
    flag = true;
  }
  return flag ? "YES" : "NO";
}
console.log(isReverse(12343621));
