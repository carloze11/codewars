function findEvenIndex(arr) {
    let result = -1;
    arr.forEach((num, i, arr) => {
        let leftSide = arr.slice(0, i);
        let rightSide = arr.slice(i + 1);
        if (
            leftSide.reduce((a, c) => a + c, 0) ===
            rightSide.reduce((a, c) => a + c, 0)
        ) {
            result = i;
        }
    });
    return result;
}
