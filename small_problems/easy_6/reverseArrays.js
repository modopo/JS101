function reverse(arr) {
    let front = 0;
    let back = arr.length - 1;

    while (front < back) {
        [arr[front], arr[back]] = [arr[back], arr[front]]

        front++;
        back--;
    }

    return arr;
}

let list = [1, 2, 3, 4, 5, 6, 7, 8];
let result = reverse(list);
console.log(result);
console.log(list === result);