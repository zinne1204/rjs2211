const n = 135
let strN = n.toString()
function isNumberFullOdd() {
    let flag = false
    for (let i = 0; i <= strN.length - 1; i++) {
        if (strN[i]%2 !== 0) {
            flag = true
            break
        }
    }
    return flag? 'YES':'NO'
}

console.log(isNumberFullOdd());