function buyFruit(fruitList) {
    let result = [];

    fruitList.forEach(fruit => {
        for (let repeat = 0; repeat < fruit[1]; repeat++) {
            result.push(fruit[0])
        };
    });

    return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));