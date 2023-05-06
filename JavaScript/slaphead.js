function bald(x) {
    let count = 0;
    let shavedHead = x
        .split("")
        .map((hair) => {
            if (hair === "/") {
                count++;
            }
            return "-";
        })
        .join("");
    let result =
        count === 0
            ? "Clean!"
            : count === 1
            ? "Unicorn!"
            : count === 2
            ? "Homer!"
            : count === 3 || count === 4 || count === 5
            ? "Careless!"
            : count > 5
            ? "Hobo!"
            : null;
    return [shavedHead, result];
}
