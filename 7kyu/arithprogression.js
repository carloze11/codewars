function arithmeticSequenceElements(a, d, n) {
    let result = [];
    for (let i = a; result.length < n; i += d) {
        result.push(i);
    }
    return result.join(", ");
}
