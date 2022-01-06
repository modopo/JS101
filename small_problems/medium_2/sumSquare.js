function sumSquareDifference(number) {
    let sumSquare = 0;
    let squareSum = 0;


    for (let i = 1; i <= number; i++) {
        sumSquare += i;
        squareSum += Math.pow(i, 2);
    }

    return Math.pow(sumSquare, 2) - squareSum;

}

console.log(sumSquareDifference(3));