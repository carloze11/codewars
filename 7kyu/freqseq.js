// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

function freqSeq(str, sep) {
    let occurs = str.split("").reduce((allStr, str) => {
        if (allStr[str]) {
            allStr[str]++;
        } else {
            allStr[str] = 1;
        }
        return allStr;
    }, {});

    let result = [];

    for (let i = 0; i < str.length; i++) {
        result.push(occurs[str[i]]);
    }

    return result.join(sep);
}
