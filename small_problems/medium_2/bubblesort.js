function bubbleSort(arr) {
    
    while(true) {
        let sorted = false;

        for (let idx = 1; idx < arr.length; idx++) {
            if (arr[idx - 1] <= arr[idx]) {
                continue;
            } else {
                [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
                sorted = true;
            }
        }
        if (!sorted) {
            break;
        }
    }

    return arr;
}

console.log(bubbleSort([6,5,4,3,2,1]));