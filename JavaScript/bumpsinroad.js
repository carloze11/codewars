function bump(x) {
    let count = 0;
    let xArr = x.split("");
    for (let i = 0; i < xArr.length; i++) {
        xArr[i] === "n" ? count++ : null;
    }
    return count <= 15 ? "Woohoo!" : "Car Dead";
}
