function cleanString(s) {
    let result = [];
    s.split("").forEach((char) =>
        char === "#" ? result.pop() : result.push(char)
    );
    return result.join("");
}
