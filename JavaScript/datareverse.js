function dataReverse(data) {
    let newArr = [];
    for (let i = 0; i < data.length; i += 8) {
        newArr.push(data.slice(i, i + 8));
    }
    return newArr.reverse().reduce((a, c) => a.concat(c), []);
}
