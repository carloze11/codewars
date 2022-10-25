function nthChar(words){
    let result = []
    words.forEach( (word, i) => result.push(word.charAt(i)) )
    return result.join('')
  }