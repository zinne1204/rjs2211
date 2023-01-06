let n = 1234321;
let numToString = n.toString();
let reverseStr = "";
function isReverse() {
  let flag = false;
  for (let i = numToString.length - 1; i >= 0; i--) {
    reverseStr += numToString[i];
  }
  if (reverseStr === numToString) {
    flag = true;
  }
  return flag ? "YES" : "NO";
}
console.log(isReverse());
