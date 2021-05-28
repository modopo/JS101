function multisum(int) {
  let result = 0;
  for (let index = 1; index <= int; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      result += index;
    }
  }
  return result;
}

console.log(multisum(1000));