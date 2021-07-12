function twice(number) {
    if (isDouble(number)) {
        return number;
    } else {
        return number * 2;
    }
}

function isDouble(number) {
    let stringNum = String(number);
    let center = Math.floor(stringNum.length / 2);
    let left = stringNum.substring(0, center);
    let right = stringNum.substring(center);

    return left === right;
}

console.log(twice(35));
console.log(twice(112233332211));
console.log(twice(44));
console.log(twice(103103));