function insertDash(num) {
    return num
        .toString()
        .split("")
        .map((int, i, arr) => {
            return int % 2 !== 0 &&
                arr[i + 1] % 2 !== 0 &&
                arr[i + 1] !== undefined
                ? int + "-"
                : int;
        })
        .join("");
}
