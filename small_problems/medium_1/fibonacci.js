function fibonacci(nth) {
    if (nth <= 2) {
        return 1;
    }

    return fibonacci(nth - 1) + fibonacci(nth - 2);
}

function procedural(nth) {
    let previous = [1, 1];

    for (let index = 3; index <= nth; index++) {
        previous = [previous[1], previous[0] + previous[1]];
    }

    return previous[1];
}

let mem = {};
function memory(nth) {
    if (nth <= 2) {
        return 1;
    } else if (mem[nth]) {
        return mem[nth];
    } else {
        mem[nth] = memory(nth - 1) + memory(nth - 2);
        return mem[nth];
    }
}

console.log(procedural(5));
console.log(fibonacci(5));