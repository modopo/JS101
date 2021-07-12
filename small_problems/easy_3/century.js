function century(input) {
    let century = 0;

    if (input % 100 === 0) {
        century = input % 100;
    } else {
        century = (input / 100) + 1;
    }

    return century;
}

console.log(century(2001));