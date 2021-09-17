function centerOf(string) {
    let halfway = string.length / 2

    if (halfway < 1) {
        return string;
    } else if (halfway % 2 === 0) {
        return string[halfway - 1] + string[halfway];
    } else {
        return string[halfway + 0.5];
    }
}

console.log(centerOf('test'));
console.log(centerOf('x'));