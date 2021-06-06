function square(input) {
    return multiply(input, input);
}

function multiply(var1, var2) {
    return var1 * var2;
}

console.log(square(5) === 25);
console.log(square(-8) === 64);
