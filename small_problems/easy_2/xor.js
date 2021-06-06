function xor(arr1, arr2) {
    return ((arr1 && !arr2) || (!arr1 && arr2));
}

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));