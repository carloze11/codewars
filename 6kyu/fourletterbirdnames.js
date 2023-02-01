// In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:

// If the bird's name has only one word, the code takes the first four letters of that word.
// If the name is made up of two words, the code takes the first two letters of each word.
// If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
// If the name is four words long, the code uses the first letter from all the words.
// (There are other ways that codes are created, but this Kata will only use the four rules listed above)

// Complete the function that takes an array of strings of common bird names from North America, and create the codes for those names based on the rules above. The function should return an array of the codes in the same order in which the input names were presented.

// Additional considertations:

// The four-letter codes in the returned array should be in UPPER CASE.
// If a common name has a hyphen/dash, it should be considered a space.

function birdCode(arr) {
    let result = [];

    arr.forEach((name) => {
        while (name.includes("-")) {
            name = name.replace("-", " ");
        }

        let nameArr = name.split(" ");

        if (nameArr.length === 1) {
            result.push(nameArr[0].substring(0, 4).toUpperCase());
        } else if (nameArr.length === 2) {
            result.push(
                nameArr[0].substring(0, 2).toUpperCase() +
                    nameArr[1].substring(0, 2).toUpperCase()
            );
        } else if (nameArr.length === 3) {
            const firstTwo =
                nameArr[0].substring(0, 1).toUpperCase() +
                nameArr[1].substring(0, 1).toUpperCase();
            result.push(firstTwo + nameArr[2].substring(0, 2).toUpperCase());
        } else if (nameArr.length === 4) {
            const firstTwo =
                nameArr[0][0].toUpperCase() + nameArr[1][0].toUpperCase();
            const lastTwo =
                nameArr[2][0].toUpperCase() + nameArr[3][0].toUpperCase();
            result.push(firstTwo + lastTwo);
        }
    });

    return result;
}

// Hindsight: should have used a switch/case statement
