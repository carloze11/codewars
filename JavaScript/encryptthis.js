// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

var encryptThis = function (text) {
    let words = text.split(" ");

    let convertedWords = words.map((word) => {
        if (word.length < 2) {
            return word[0].charCodeAt(0);
        } else if (word.length === 2) {
            return word[0].charCodeAt(0) + word[1];
        } else if (word.length === 3) {
            return word[0].charCodeAt(0) + word[2] + word[1];
        } else {
            let firstChar = word[0].charCodeAt(0);
            let secondChar = word[word.length - 1];
            let middleChars = word.slice(2, word.length - 1);
            let lastChar = word[1];

            return firstChar + secondChar + middleChars + lastChar;
        }
    });

    return convertedWords.join(" ");
};
