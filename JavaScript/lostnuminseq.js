function findDeletedNumber(arr, mixArr) {
    mixArr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== mixArr[i]) {
            return arr[i];
        }
    }
    return 0;
}
