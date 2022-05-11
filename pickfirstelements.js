//pick a set of first elements

// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];



function first(arr, n) {
    let newArr = []
    if (n > 0){
      for (let i = 0; i < n; i++){
        newArr.push(arr[i])
      }
    } else if (n === 0) {
      return newArr
    } else {
      newArr.push(arr[0])
    }
    return newArr.filter(x => x !== undefined)
  }