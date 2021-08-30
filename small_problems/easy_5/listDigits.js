function digitList(number) {
    let numberString = String(number).split('');

    return numberString.map(number => {
        return Number(number);
    })
}

console.log(digitList(12345));