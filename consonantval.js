function solve(s) {
    let alph = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    };
    let vowels = ["a", "e", "i", "o", "u"];
    let consonants = s
        .split("")
        .map((letter) =>
            vowels.includes(letter) ? (letter = " ") : alph[letter]
        )
        .join(" ");
    let substr = consonants.split(" ");
    let maxScore = 0;
    let scores = [];

    substr.forEach((val, i) => {
        if (val !== "") {
            maxScore += +val;
            scores.push(maxScore);
        } else {
            scores.push(maxScore);
            maxScore = 0;
        }
    });

    scores.sort((a, b) => b - a);
    return scores[0];
}
