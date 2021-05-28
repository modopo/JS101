function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

console.log(isOdd(-17));

function oddNumbers(number) {
  for (let index = 0; index <= number; index++) {
    if (index % 2 === 1) {
      console.log(index);
    }
  }
}

oddNumbers(99);

function evenNumbers(number) {
  for (let index = 1; index <= number; index++) {
    if (index % 2 === 0) {
      console.log(index);
    }
  }
}

evenNumbers(99);