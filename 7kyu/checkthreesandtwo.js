function checkThreeAndTwo(array) {
    let a = 0;
    let b = 0;
    let c = 0;
    array.forEach(char => {
      if (char === 'a'){
        a++
      } 
      if (char === 'b'){
        b++
      }
      if (char === 'c'){
        c++
      }
    })
    
    if ((a === 2 || b === 2 || c === 2) && (a===3 || b === 3 || c === 3)){
      return true
    }
    return false;
  }