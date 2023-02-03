// Write a function groupIn10s which takes any number of arguments, groups them into tens, and sorts each group in ascending order.

// The return value should be an array of arrays, so that numbers between 0 and9 inclusive are in position 0, numbers between 10 and 19 are in position 1, etc.

function groupIn10s(...args) {
    const result = [];
    for (const num of args) {
        const index = Math.floor(num / 10);
        if (!result[index]) {
            result[index] = [];
        }
        result[index].push(num);
    }
    return result.map((group) => group.sort((a, b) => a - b));
}
