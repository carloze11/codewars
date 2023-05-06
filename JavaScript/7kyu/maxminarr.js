// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

function solve(arr) {
    let arrCopy = arr.slice().sort((a, b) => a - b);
    let midpoint = Math.floor(arrCopy.length / 2);
    let firstHalf = arrCopy.slice(0, midpoint);
    let secondHalf = arrCopy.slice(midpoint);
    let result = [];

    for (let i = 0; i <= secondHalf.length - 1; i++) {
        result.push(secondHalf[secondHalf.length - 1 - i]);
        if (firstHalf[i]) {
            result.push(firstHalf[i]);
        }
    }
    return result;
}
