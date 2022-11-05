//returns the test score
function scoreTest(str, right, omit, wrong){
    let score = 0;
    str.forEach(ans => {
      if (ans === 0){
        score += right;
      }
      if (ans === 1){
        score += omit
      }
      if (ans === 2){
        score -= wrong
      }
    })
    return score;
  }