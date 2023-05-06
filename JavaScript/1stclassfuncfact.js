function factory(x) {
    return function (arr) {
        return arr.map((num) => num * x);
    };
}
