function stantonMeasure(arr) {
    const numInstance = arr.reduce((allNums, num) => {
        const currCount = allNums[num] ?? 0;
        return {
            ...allNums,
            [num]: currCount + 1,
        };
    }, {});

    return numInstance[numInstance[1]] ?? 0;
}
