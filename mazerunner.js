// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.

function mazeRunner(maze, directions) {
    // get current position
    let currentPos = [];
    maze.forEach((arr, i) => {
        if (arr.includes(2)) {
            currentPos.push(i);
            currentPos.push(arr.indexOf(2));
        }
    });

    let result = "Lost";

    // change current position based on direction given
    directions.forEach((dir) => {
        switch (dir) {
            case "N":
                currentPos[0] -= 1;
                break;
            case "S":
                currentPos[0] += 1;
                break;
            case "W":
                currentPos[1] -= 1;
                break;
            case "E":
                currentPos[1] += 1;
                break;
        }
        if (result === "Lost") {
            if (
                maze[currentPos[0]] === undefined ||
                maze[currentPos[0]][currentPos[1]] === undefined
            ) {
                result = "Dead";
            } else if (maze[currentPos[0]][currentPos[1]] === 1) {
                result = "Dead";
            } else if (maze[currentPos[0]][currentPos[1]] === 3) {
                result = "Finish";
            }
        }
    });
    return result;
}
