// DESCRIPTION:
// Define a function that generates medial values between two coordinates and returns them in an array from start to target. For example, if the starting point is [1,1] and the target point is [3,2] then the shortest route from start to target would be [[1,1], [2,2], [3,2]]. The route should go only through integral coordinates.

// Note: you should move diagonally until the path from your current position to the target can be represented as a fully horizontal/vertical line.

function tickToward(start, end) {
    let currCoordinate = [...start];
    let finalDest = [start];

    while (currCoordinate.join("") !== end.join("")) {
        if (currCoordinate[0] < end[0]) {
            currCoordinate[0] += 1;
        } else if (currCoordinate[0] > end[0]) {
            currCoordinate[0] -= 1;
        }

        if (currCoordinate[1] < end[1]) {
            currCoordinate[1] += 1;
        } else if (currCoordinate[1] > end[1]) {
            currCoordinate[1] -= 1;
        }

        finalDest.push([...currCoordinate]);
    }

    return finalDest;
}
