function binRota(arr){
    let staff = []
    arr.forEach((array,i) => {
      if (i % 2 === 0){
        array.forEach(person => {
        staff.push(person)
      })
      }
      if (i % 2 !== 0){
        array.reverse().forEach(person => {
          staff.push(person)
        })
      }
      
    })
    return staff
  
  }