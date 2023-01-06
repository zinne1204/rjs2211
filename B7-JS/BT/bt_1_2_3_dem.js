const n = 20

 //in từ 1 = n
for(var i = 1; i <= n; i++) {
    console.log(`In từ một tới n: ${i}`);
}

 //in từ 1 = n (lẻ)
for(var i = 1; i <= n; i++) {
    if(i%2!==0) {
        console.log(`In ra số lẻ từ 1 - n: ${i}`);
    }
}

 //in từ 1 = n (chẳn)
for(var i = 1; i <= n; i++) {
    if(i%2===0) {
        console.log(`In ra số chẳn từ 1 - n: ${i}`);
    }
}
