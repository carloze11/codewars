function switcheroo(x){
    return x.split('').map(x => {
      if (x === 'a'){
        return x = 'b'
      }
      if (x === 'b'){
       return x = 'a'
      }
      return x
    }).join('')
  }