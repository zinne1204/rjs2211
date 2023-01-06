// let str = "  NGuYen ThAc tUnG  ";
// let strConvert = str.trim().toLowerCase();
// for (i = 0; i <= strConvert.length; i++) {
//   if (i === 0 || strConvert.charAt(i - 1) === ' ') {
//     strConvert = strConvert.slice(0, i) + strConvert.charAt(i).toUpperCase() + strConvert.slice(i + 1)
//   }
// }
// console.log(strConvert);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInt(1,10));    

console.log(parseFloat('19.123'));