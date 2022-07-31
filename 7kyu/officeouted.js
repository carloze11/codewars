function outed(meet, boss){
    let numOfPeople = Object.keys(meet).length;
    let totalScore = 0;
    for (let person in meet){
      person === boss ? totalScore += meet[person] * 2 : totalScore += meet[person];
    }
    return totalScore/numOfPeople <= 5 ? "Get Out Now!" : "Nice Work Champ!";
  }