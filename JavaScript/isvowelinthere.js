const isVow = (a) => {
    return a.map(x => {
   if (x === 97) {
     x = 'a'
   } else if (x === 101){
     x = 'e'
   } else if (x === 105){
     x = 'i'
   } else if (x === 111){
     x = 'o'
   } else if (x === 117){
     x = 'u'
   }
      return x
 })
 }