function expandedForm(num) {
    let strNum = num.toString().split("");
    return strNum
        .reduce((nums, num, i) => {
            if (+num > 0) {
                nums.push(num.padEnd(strNum.length - i, "0"));
            }
            return nums;
        }, [])
        .join(" + ");
}
