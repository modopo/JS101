function halvsies(arr) {
    let half = Math.ceil(arr.length / 2);

    return [arr.slice(0, half), arr.slice(half)];
}

console.log(halvsies([1, 2, 3, 4, 5]));