function fireFight(s) {
    return s
        .split(" ")
        .map((word) => {
            if (word !== "Fire") {
                return word;
            }
            return "~~";
        })
        .join(" ");
}
