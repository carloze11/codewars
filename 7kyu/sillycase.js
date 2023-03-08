// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase.

function sillycase(silly) {
    const midpoint = Math.ceil(silly.length / 2 - 1);

    return (
        silly.substring(0, midpoint + 1).toLowerCase() +
        silly.substring(midpoint + 1).toUpperCase()
    );
}
