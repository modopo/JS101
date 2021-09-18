function isBalanced(string) {
    let result = string.split('').filter(char => {
        if (char === '(' || char === ')') {
            return char;
        }
    });

    let full = 0;
    for (let index = 0; index < result.length; index++) {
        if (result[index] === "(") {
            full += 1;
        } else if (result[index] === ")") {
            full -= 1;
        }

        if (full < 0) {
            return false;
        }

        return full === 0;
    };
}

console.log(isBalanced('a(d()()()()bjlkdjfkl(0b a0s)'));