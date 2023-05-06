// Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.

function redarr(arr) {
    let uniqueArr = [];
    arr.forEach((str) =>
        !uniqueArr.includes(str) ? uniqueArr.push(str) : null
    );
    return uniqueArr.sort().reduce((allStr, str, i) => {
        if (!Object.values(allStr).includes(str)) {
            allStr[i] = str;
        }
        return allStr;
    }, {});
}
