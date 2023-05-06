function maxGap (numbers){
    let posNums = numbers.slice()
    let gaps = []
    posNums.sort((a,b) => a - b)
    for (let i = 0; i < posNums.length; i++){
      if (posNums[i] + 1 !== posNums[i + 1]){
        console.log(posNums[i])
        gaps.push(posNums[i+1] - posNums[i])
      }
    }
    gaps.sort((a,b) => b - a)
    return gaps[0]
  }