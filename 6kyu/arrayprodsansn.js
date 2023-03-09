// Note: Node 10 has now been enabled, and you can now use its BigInt capabilities if you wish, though your resulting array must still contain strings (e.g. "99999999999", not 9999999999n)

// Pre-node 10: You will need to use the BigNumber.js library! Please use .toFixed(0) or .toPrecision() to round instead of .toString(10), as the latter is very slow

// This is an adaptation of a problem I came across on LeetCode.

// Given an array of numbers, your task is to return a new array where each index (new_array[i]) is equal to the product of the original array, except for the number at that index (array[i]).

// Two things to keep in mind:

// Zeroes will be making their way into some of the arrays you are given
// O(n^2) solutions will not pass.

const productSansN = (n) => {
    if (n.indexOf(0) != n.lastIndexOf(0)) return n.map((a) => "0");
    if (!n.includes(0)) {
        const prod = n.reduce((a, b) => a * BigInt(b), 1n);
        return n.map((a) => "" + prod / BigInt(a));
    } else {
        const prod = n.reduce((a, b) => a * (b ? BigInt(b) : 1n), 1n);
        const idx = n.indexOf(0);
        return n.map((_, i) => (i == idx ? "" + prod : "0"));
    }
};
