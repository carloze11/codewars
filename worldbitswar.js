// Variation of this nice kata, the war has expanded and become dirtier and meaner; both even and odd numbers will fight with their pointy 1s. And negative integers are coming into play as well, with, ça va sans dire, a negative contribution (think of them as spies or saboteurs).

// A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.

// The side with the largest cumulated strength wins.

// Again, three possible outcomes: odds win, evens win and tie.

function bitsWar(numbers) {
    let odds = [];
    let evens = [];

    numbers.forEach((num) => {
        if (num % 2 === 0) {
            evens.push(num.toString(2));
        } else {
            odds.push(num.toString(2));
        }
    });

    let evensBinArray = evens.map((digit) => Number(digit));
    let oddsBinArray = odds.map((digit) => Number(digit));
    let evensStr = 0;
    let oddsStr = 0;

    evensBinArray.forEach((num) => {
        if (num > 0) {
            num.toString()
                .split("")
                .forEach((digit) => (digit === "1" ? evensStr++ : null));
        } else if (num < 0) {
            num.toString()
                .split("")
                .forEach((digit) => (digit === "1" ? evensStr-- : null));
        }
    });

    oddsBinArray.forEach((num) => {
        if (num > 0) {
            num.toString()
                .split("")
                .forEach((digit) => (digit === "1" ? oddsStr++ : null));
        } else if (num < 0) {
            num.toString()
                .split("")
                .forEach((digit) => (digit === "1" ? oddsStr-- : null));
        }
    });

    if (oddsStr > evensStr) {
        return "odds win";
    } else if (evensStr > oddsStr) {
        return "evens win";
    } else {
        return "tie";
    }
}
