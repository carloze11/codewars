function gordon(a){
    return a.toUpperCase().split('').map(x => {
      if (x === 'A') {
        x = '@'
      };
      if (x === 'E' || x === 'I' || x === 'O' || x === 'U') {
        x = '*'
      }
      return x
      }).join('').split(' ').map(x => x + '!!!!').join(' ')
  }