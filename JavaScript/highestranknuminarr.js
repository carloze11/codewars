function highestRank(arr) {
    let repeats = arr.reduce((allNums, num) => {
        if (!allNums[num]) {
            allNums[num] = 1;
        } else {
            allNums[num]++;
        }
        return allNums;
    }, {});
    let maxVal = 0;
    let maxKey = 0;
    for (const key in repeats) {
        if (repeats[key] > maxVal) {
            maxVal = repeats[key];
            maxKey = +key;
        }
        repeats[key] === maxVal && key > maxKey ? (maxKey = +key) : maxKey;
    }
    return maxKey;
}
