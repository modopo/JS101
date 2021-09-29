function sum(number) {
    return String(number).split('').reduce((accum, number) => {
        return Number(accum) + Number(number);
    })
}

console.log(sum(123456789));