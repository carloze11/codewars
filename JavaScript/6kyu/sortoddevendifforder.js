// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

// Note that zero is an even number. If you have an empty array, you need to return it.

function sortArray(array) {
    let odds = [];
    let evens = [];
    let result = [];

    array.forEach((val) => (val % 2 === 0 ? evens.push(val) : odds.push(val)));

    odds.sort((a, b) => b - a);
    evens.sort((a, b) => a - b);

    array.forEach((val) =>
        val % 2 === 0 ? result.push(evens.pop()) : result.push(odds.pop())
    );

    return result;
}
