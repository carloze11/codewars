/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
    let count = 0;
    let jug = capacity;
    for (let i = 0; i < plants.length; i++) {
        if (jug >= plants[i]) {
            count++;
            jug -= plants[i];
        } else {
            count += i * 2 + 1;
            jug = capacity - plants[i];
        }
    }
    return count;
};
