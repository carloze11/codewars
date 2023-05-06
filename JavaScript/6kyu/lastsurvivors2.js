// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

// "aa" => "b", "bb" => "c", .. "zz" => "a".
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:

// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"

function lastSurvivors(str) {
    let arr = str.split("");

    function getNextChar(char) {
        if (char === "z") return "a";
        let charCode = char.charCodeAt(0);
        return String.fromCharCode(charCode + 1);
    }

    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] === arr[j]) {
                arr[i] = getNextChar(arr[i]);
                arr.splice(j, 1);
                i = -1;
                break;
            }
        }
    }

    return arr.join("");
}
