// *************************
// *  Create a frame!      *
// *           __     __   *
// *          /  \~~~/  \  *
// *    ,----(     ..    ) *
// *   /      \__     __/  *
// *  /|         (\  |(    *
// * ^  \  /___\  /\ |     *
// *    |__|   |__|-..     *
// *************************
// Given an array of strings and a character to be used as border, output the frame with the content inside.

// Notes:

// Always keep a space between the input string and the left and right borders.
// The biggest string inside the array should always fit in the frame.
// The input array is never empty.

const frame = (text, char) => {
    const largeCharLength = text
        .slice()
        .sort((a, b) => b.length - a.length)[0].length;
    const border = char.repeat(largeCharLength + 4);
    const space = " ";
    const equalLengths = text.map((str) =>
        str.length === largeCharLength
            ? str
            : str + space.repeat(largeCharLength - str.length)
    );

    const art = equalLengths.map((str) => {
        return "\n" + char + " " + str + " " + char;
    });
    return border + art.join("") + "\n" + border;
};
