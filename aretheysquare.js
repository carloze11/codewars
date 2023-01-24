// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

var isSquare = function (arr) {
    if (!arr.length) {
        return undefined;
    }

    return arr.every((num) => Math.sqrt(num) % 1 === 0);
};
