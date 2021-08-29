function findDup(arr) {
    arr = arr.filter((number, index) => {
        return arr.indexOf(number) !== index;
    })

    return arr[0];
}

console.log(findDup([1, 5, 3, 1]));