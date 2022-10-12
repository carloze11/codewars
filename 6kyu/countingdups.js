function duplicateCount(text){
    let arr = [];
    let distinctArr = []
    text.split('').forEach((char, i, text) => {
      char = char.toLowerCase()
      if (!arr.includes(char)){
        return arr.push(char)
      }
      if (arr.includes(char) && !distinctArr.includes(char) && text[i] !== text[i+1]){
        return distinctArr.push(char)
      }
    })
    return distinctArr.length
  }
   