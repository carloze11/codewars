function findUniq(arr) {
    let newArr = [...arr];
    newArr.sort((a, b) => a - b);
    return newArr[0] !== newArr[newArr.length - 2]
        ? newArr[0]
        : newArr[newArr.length - 1];
}
