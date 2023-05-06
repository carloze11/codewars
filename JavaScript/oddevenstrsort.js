function sortMyString(S) {
    let odds = [];
    let evens = [];
    S.split("").forEach((letter, i, arr) => {
        i % 2 === 0 ? evens.push(letter) : odds.push(letter);
    });
    return `${evens.join("")} ${odds.join("")}`;
}
