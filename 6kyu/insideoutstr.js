// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(words) {
    let result = [];
    words.split(" ").forEach((x) => {
        if (x.length % 2 !== 0) {
            let midpoint = Math.floor(x.length / 2);
            let firstHalf = x
                .substring(0, midpoint)
                .split("")
                .reverse()
                .join("");
            let secondHalf = x
                .substring(midpoint + 1)
                .split("")
                .reverse()
                .join("");
            result.push(firstHalf + x[midpoint] + secondHalf);
        }
        if (x.length % 2 === 0) {
            let firstHalf = x
                .substring(0, x.length / 2)
                .split("")
                .reverse()
                .join("");
            let secondHalf = x
                .substring(x.length / 2)
                .split("")
                .reverse()
                .join("");
            result.push(firstHalf + secondHalf);
        }
    });
    return result.join(" ");
}
