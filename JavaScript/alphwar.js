function alphabetWar(fight) {
    let leftside = ["s", "b", "p", "w"];
    let leftscore = 0;
    let rightside = ["z", "d", "q", "m"];
    let rightscore = 0;
    fight.split("").forEach((letter) => {
        if (leftside.includes(letter)) {
            leftscore += leftside.indexOf(letter) + 1;
        } else if (rightside.includes(letter)) {
            rightscore += rightside.indexOf(letter) + 1;
        }
    });
    if (leftscore > rightscore) return "Left side wins!";
    if (rightscore > leftscore) return "Right side wins!";
    return "Let's fight again!";
}
