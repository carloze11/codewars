function reverse(str) {
    let result = [];
    let wordArr = str.split(" ");
    wordArr.forEach((word, i) => {
        if (i % 2 !== 0) {
            return result.push(word.split("").reverse().join(""));
        }
        return result.push(word);
    });
    return result.join(" ").trim();
}
