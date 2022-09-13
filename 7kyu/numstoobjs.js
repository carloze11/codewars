function numObj(s){
    let result = [];
    s.forEach(num => {
      let strNum = num.toString();
      let char = String.fromCharCode(num);
      result.push({[strNum]: char})
    })
  return result
  }