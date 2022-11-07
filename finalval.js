var finalValueAfterOperations = function (operations) {
    let count = 0;
    for (let i = 0; i < operations.length; i++) {
        operations[i].includes("--") ? count-- : count++;
        // if (operations[i].includes('--')){
        //     count--
        // }
        // if (operations[i].includes('++')){
        //     count++
        // }
    }
    return count;
};
