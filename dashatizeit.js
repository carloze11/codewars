function dashatize(num) {
    if (!isNaN(num)) {
        let arr = num.toString().split("");
        if (arr[0] === "-") {
            arr = arr.slice(1);
        }
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (
                (arr[i + 1] % 2 !== 0 && arr[i + 1] !== undefined) ||
                (arr[i] % 2 !== 0 && arr[i + 1] !== undefined)
            ) {
                result.push(arr[i] + "-");
            } else {
                result.push(arr[i]);
            }
        }
        return result.slice(0, result.length).join("");
    }
    return "NaN";
}
