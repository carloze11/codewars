// Input: String which consists of two positive numbers (doubles) and exactly one operator like +, -, * or / always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles), and to calculate the result which has to be rounded to an integer and converted to a string at the end.

function calculateString(st) {
    let op = st.includes("+")
        ? "+"
        : st.includes("-")
        ? "-"
        : st.includes("*")
        ? "*"
        : st.includes("/")
        ? "/"
        : null;
    let stArr = st.split(op);
    console.log(stArr);
    console.log(op);
    let firstNum = stArr[0]
        .split("")
        .filter((char) => parseInt(char) || char === "." || char === "0")
        .join("");
    console.log(firstNum);
    let secondNum = stArr[1]
        .split("")
        .filter((char) => parseInt(char) || char === "." || char === "0")
        .join("");
    console.log(secondNum);
    return Math.round(eval(`${firstNum} ${op} ${secondNum}`)).toString();
}
