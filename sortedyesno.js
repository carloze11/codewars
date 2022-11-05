// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    console.log(array)
    let arr1 = array.slice()
    arr1.sort((a,b) => a - b)
    console.log(arr1)
    let arr2 = array.slice()
    arr2.sort((a,b) => b - a)
    console.log(arr2)
    
    if (array.join('') === arr1.join('')) {
      return 'yes, ascending'
    } else if (array.join('') === arr2.join('')) {
      return 'yes, descending'
    } else {
      return 'no'
    }
  }