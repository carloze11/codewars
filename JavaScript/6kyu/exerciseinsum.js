// Your task is to finish two functions, minimumSum and maximumSum, that take 2 parameters:

// values: an array of integers with an arbitrary length; may be positive and negative
// n: how many integers should be summed; always 0 or bigger
// Example:
// var values = [5, 4, 3, 2, 1];
// minimumSum(values, 2); // should return 1+2 = 3
// maximumSum(values, 3); // should return 3+4+5 = 12
// All values given to the functions will be integers. Also take care of the following special cases:

// if values is empty, both functions should return 0
// if n is 0, both functions should also return 0
// if n is larger than values's length, use the length instead.

function minimumSum(values, n) {
    // sum the n smallest integers in the array values (not necessarily ordered)
    // sort the values from small -> big
    // create a var to hold sum
    // loop for as many times as n
    // each loop, add current val
    // return sum
    if (n === 0) return 0;
    if (!values.length) return 0;
    if (n > values.length) {
        n = values.length;
    }
    const sortedVal = values.slice().sort((a, b) => a - b);
    let minSum = 0;
    for (let i = 0; i < n; i++) {
        minSum += sortedVal[i];
    }
    return minSum;
}

function maximumSum(values, n) {
    // sum the n largest integers in the array values (not necessarily ordered)
    if (n === 0) return 0;
    if (!values.length) return 0;
    if (n > values.length) {
        n = values.length;
    }
    const sortedVal = values.slice().sort((a, b) => b - a);
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += sortedVal[i];
    }
    return maxSum;
}
