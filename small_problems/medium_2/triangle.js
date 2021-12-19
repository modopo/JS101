function triangle(side1, side2, side3) {
    let perimeter = side1 + side2 + side3;
    let shortest = Math.min(side1, side2, side3);
    let longest = Math.max(side1, side2, side3);
    let middle = perimeter - shortest - longest;

    if (shortest < 0 || (shortest + middle) < longest) {
        return 'invalid';
    } else if (side1 === side2 && side2 === side3) {
        return 'equilateral';
    } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        return 'isosceles';
    } else {
        return 'scalene';
    }

}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));