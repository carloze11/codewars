/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    stones
        .split("")
        .forEach((stone) => (jewels.includes(stone) ? count++ : count));
    return count;
};
