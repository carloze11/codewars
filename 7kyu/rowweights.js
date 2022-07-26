function rowWeights(array){
    let team1 = array.filter((x,i) => i % 2 === 0).reduce((a,b) => a + b,0)
    let team2 = array.filter((x,i) => i % 2 !== 0).reduce((a, b) => a + b,0)
    return [team1,team2]
  }