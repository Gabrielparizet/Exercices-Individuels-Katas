

function powerFunc(num, power){
    let result = num;
    for (i = 1; i < power; i++){
        result *= num
    }
    return result
}
console.log(powerFunc(3, 4));