//Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
    let sum = 0
    if (numbers.length < 1){
      return sum
    }
    numbers.forEach((x,i) => i % 2 === 0 ? sum += x : null)
    return sum * numbers[numbers.length - 1]
  }