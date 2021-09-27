function sum(number) {
    return String(number).split('').reduce((number, accum) => {
        return Number(number) + Number(accum);
    })
}

console.log(sum(123456789));