function triangle(input) {
    let spaces = input - 1;
    let stars = 1;

    while (input > 0) {
        console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
        spaces -= 1;
        stars += 1;
        input -= 1;
    }
}

triangle(10);