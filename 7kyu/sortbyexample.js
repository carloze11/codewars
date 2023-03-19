// Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.

// Assume Example Array catalogs all elements possibly seen in the input Array. However, the input Array does not necessarily have to have all elements seen in the Example.

function exampleSort(arr, exampleArr) {
    let result = [];

    exampleArr.forEach((val) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                result.push(arr[i]);
            }
        }
    });

    return result;
}
