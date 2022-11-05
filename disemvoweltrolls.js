function disemvowel(str) {
    return str.split('').map(char => {
      if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
        char = ''
      }
      return char
    }).join('')
  }