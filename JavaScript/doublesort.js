function dbSort(a){
    let nums = []; 
    let strings = [];
    a.forEach(el => {
      if (typeof el === 'number') {
        nums.push(el)
      }
      if (typeof el === 'string') {
        strings.push(el)
      }
    });
    nums.sort((a,b) => a - b)
    strings.sort()
    return nums.concat(strings)
  }