function binarySearch(arr, term) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === term) {
            return mid;
        } else if (arr[mid] < term) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));