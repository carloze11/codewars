Array.prototype.square = function () {
    let arr = [...this];
    return arr.map((num) => num ** 2);
};
Array.prototype.cube = function () {
    let arr = [...this];
    return arr.map((num) => num ** 3);
};
Array.prototype.average = function () {
    let arr = [...this];
    if (arr < 1) return NaN;
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};
Array.prototype.sum = function () {
    let arr = [...this];
    return arr.reduce((acc, cur) => acc + cur, 0);
};
Array.prototype.even = function () {
    let arr = [...this];
    return arr.filter((num) => num % 2 === 0);
};
Array.prototype.odd = function () {
    let arr = [...this];
    return arr.filter((num) => num % 2 !== 0);
};
