//Find the difference in  age between oldest and youngest family members

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
    let ageDif = []
    ages.sort((a,b) => a - b)
    ageDif.push(ages[0])
    ageDif.push(ages[ages.length-1])
    ageDif.push(ageDif[1] - ageDif[0] )
    return ageDif
    
  }

  
  // top solution
  function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}