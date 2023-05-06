function count(string) {
    return string.split("").reduce((allLetters, letter) => {
        if (allLetters[letter]) {
            allLetters[letter] += 1;
        } else {
            allLetters[letter] = 1;
        }
        return allLetters;
    }, {});
}
