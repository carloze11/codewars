var numberOfBeams = function (bank) {
    let newArr = [];
    let product = 0;
    for (let i = 0; i < bank.length; i++) {
        if (bank[i].includes("1")) {
            newArr.push(bank[i].split("").filter((num) => num === "1").length);
        }
    }
    for (let i = 0; i < newArr.length - 1; i++) {
        product += newArr[i] * newArr[i + 1];
    }
    return product;
};
