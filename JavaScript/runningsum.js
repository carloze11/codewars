var runningSum = function (nums) {
    let result = [];
    nums.forEach((x, i) => {
        return i === 0 ? result.push(x) : result.push(result[i - 1] + x);
    });
    return result;
};
