function capitalize(s){
    let result = [];
    let a1 = s.split('').map((char, i) => {
      if (i % 2 === 0) {
        return char.toUpperCase()
      } else {
        return char
      }
    }).join('')
    let a2 = s.split('').map((char, i) => {
      if (i % 2 !== 0) {
        return char.toUpperCase()
      } else {
        return char
      }
    }).join('')
    return [a1, a2]
  };