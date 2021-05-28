function isLeapYear(year) {
  //if the year is divisible by 100 and NOT divisible by 400
  if (year % 100 === 0 && !(year % 400 === 0)) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
  return false;
}

function julianLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && !(year % 400 === 0)) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
  return false;
}


console.log(julianLeapYear(2016));
console.log(julianLeapYear(5));
console.log(julianLeapYear(1900));
console.log(julianLeapYear(400));
console.log(julianLeapYear(2015));
console.log(julianLeapYear(1700));
console.log(julianLeapYear(1752));
