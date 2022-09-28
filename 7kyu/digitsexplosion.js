function explode(s) {
    return s.split('').map(x => x.repeat(Number(x))).join('')
  }