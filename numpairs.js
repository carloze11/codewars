function getLargerNumbers(a, b) {
    let newArr = [];
    for (let i = 0; i < a.length; i++) {
        a[i] > b[i] ? newArr.push(a[i]) : newArr.push(b[i]);
    }
    return newArr;
}
