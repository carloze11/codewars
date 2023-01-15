// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s) {
    return s
        .split("")
        .map((char, i) => {
            let result = s.charCodeAt(i) - 96;
            if (result + 10 > 26) {
                return String.fromCharCode(96 + (result - 16));
            } else {
                return String.fromCharCode(result + 106);
            }
        })
        .join("");
}
