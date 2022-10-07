function tea42(input) {
    return input.toString().split('').map(char => {
      if (char == '2'){
        char = 't'
      }
      return char
    }).join('')
  };