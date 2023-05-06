function findOddNames(list) {
    return list.reduce((oddDevs, dev) => {
        let nameArr = dev.firstName
            .split("")
            .map((letter, i, arr) => Number(letter.charCodeAt(0)));
        let nameNum = nameArr.reduce((arr, cur) => arr + cur, 0);
        if (nameNum % 2 !== 0) {
            return oddDevs.concat(dev);
        }
        return oddDevs;
    }, []);
}
