// Find the longest substring in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// If there are multiple solutions, return the one that appears first.

function longest(str) {
    let results = [];
    let current = [];
    str.split("").forEach((char, i) => {
        if (!current.length) {
            current.push(char);
        } else if (
            char.charCodeAt(0) >= current[current.length - 1].charCodeAt(0)
        ) {
            current.push(char);
        } else {
            results.push(current.join(""));
            current = [char];
        }
    });
    results.push(current.join(""));
    return results.sort((a, b) => b.length - a.length)[0];
}
