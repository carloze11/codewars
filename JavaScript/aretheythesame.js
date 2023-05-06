function comp(array1, array2) {
    if (!array1 || !array2) return false;
    let arr1 = [...array1].sort((a, b) => a - b);
    let arr2 = [...array2].sort((a, b) => a - b);

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== Math.sqrt(arr2[i])) {
            return false;
        }
    }
    return true;
}
