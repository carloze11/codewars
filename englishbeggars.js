function beggars(values, n) {
    let copy = [...values];
    let obj = [];
    for (let i = 0; i < n; i++) {
        obj.push(0);
        for (let j = i; j < values.length; j += n) {
            obj[i] += copy[j];
        }
    }
    return obj;
}
// Awful time complexity :(
