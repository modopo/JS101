function intToStr(input) {

    const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    let result = '';

    do {
        let ones = input % 10;
        input = (input - (ones)) / 10;

        result = DIGITS[ones] + result;
    } while (input > 0);

    return result;
}

console.log(intToStr(123456));