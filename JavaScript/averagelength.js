function averageLength(arr) {
    let lengthSum = 0;
    arr.forEach((el) => (lengthSum += el.length));
    let averageLength = Math.round(lengthSum / arr.length);
    return arr.map((el) => el[0].repeat(averageLength));
}
