function getAverageAge(list) {
    return Math.round(((list.reduce((acc, curr) =>  acc + curr.age, 0))/list.length))
  }