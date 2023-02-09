// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

function arraySum(arr) {
    return arr.flat(Infinity).reduce((allNums, num) => {
        if (Number(num)) {
            allNums += num;
        }
        return allNums;
    }, 0);
}
