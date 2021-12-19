function angles(angle1, angle2, angle3) {
    let angles = [angle1, angle2, angle3];

    let triSum = angles.reduce((total, angle) => total + angle);
    let nonZero = angles.every(angle => angle > 0);

    if (!nonZero || triSum !== 180) {
        return 'invalid';
    } else if (angles.some(angle => angle === 90)) {
        return 'right';
    } else if (angles.every(angle => angle < 90)) {
        return 'acute';
    } else {
        return 'obtuse';
    }
}

console.log(angles(60, 70, 50));
console.log(angles(30, 90, 60));
console.log(angles(120, 50, 10));
console.log(angles(0, 70, 50));
console.log(angles(10, 70, 10));