function sevenAte9(str) {
    let arr = str.split('')
    let result = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === '9' && arr[i-1] === '7' && arr[i+1] === '7'){
        continue
      } else {
        result.push(arr[i])
      }
    }
    return result.join('')
  }