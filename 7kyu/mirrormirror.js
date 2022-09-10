function mirror(data) {
    let smallToBig = data.slice().sort((a,b) => a - b);
    let bigToSmall = data.slice().sort((a,b) => b - a);
    bigToSmall.splice(0,1)
    return smallToBig.concat(bigToSmall)
  }
  