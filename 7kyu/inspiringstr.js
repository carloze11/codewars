function longestWord(stringOfWords){
    let finalWord = '';
    stringOfWords.split(' ').forEach(word => {
      if (word.length >= finalWord.length) {
       finalWord = word 
      }
    })
    return finalWord
  }