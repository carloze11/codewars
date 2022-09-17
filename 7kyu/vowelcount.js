function getCount(str) {
    let sum = 0;
    str.split('').forEach(char => {
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        sum ++
      }
    })
    return sum;
  }