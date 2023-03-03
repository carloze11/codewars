//Create reverse function for the String prototype without reverse method
String.prototype.reverse = function () {
    let reversedStr = "";
    for (let i = 1; i <= this.length; i++) {
        reversedStr += this[this.length - i];
    }
    return reversedStr;
};
