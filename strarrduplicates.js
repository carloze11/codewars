function dup(s) {
    return s.map((word) => {
        let newWord = "";
        word.split("").forEach((letter, i) =>
            newWord[newWord.length - 1] === letter ? null : (newWord += letter)
        );
        return newWord;
    });
}
