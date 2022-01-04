function unlucky(year) {
    let thirteenth = [];

    for(let month = 0; month < 12; month++) {
        thirteenth.push(new Date(year, month, 13));
    }

    return thirteenth.reduce((count, day) => {
        if (day.getDay() === 5) {
            return count + 1;
        } else {
            return count;
        }
    }, 0)

}

console.log(unlucky(1986));