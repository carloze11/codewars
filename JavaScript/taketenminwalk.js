function isValidWalk(walk) {
    if (walk.length !== 10 || walk.length === 0) return false;
    let x = 0;
    let y = 0;
    walk.forEach((step) => {
        if (step === "w") return x++;
        if (step === "n") return y++;
        if (step === "e") return x--;
        if (step === "s") return y--;
    });
    return (x === 0) & (y === 0) ? true : false;
}
