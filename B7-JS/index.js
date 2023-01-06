let number = 123;
let text1 = 'abc';
let text2 = 'ABC';
let text3 = `xyz`;
let car = {
    name: 'Supra',
    brand: 'Toyota',
    price: 100000,
    year: 2000
}
function run() {
    console.log('This is function 1');
}

let run2 = () => {
    console.log('This is function 2');
}

run2()

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x);
}
console.log(x);
