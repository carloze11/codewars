function absentVowel(x) {
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.indexOf(
        vowels.filter((letter) => !x.includes(letter)).join("")
    );
}
