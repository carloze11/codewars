// Task
// You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
// Rules
// 1. There are always exactly three reels

// 2. Each reel has 10 different items.

// 3. The three reel inputs may be different.

// 4. The spin array represents the index of where the reels finish.

// 5. The three spin inputs may be different

// 6. Three of the same is worth more than two of the same

// 7. Two of the same plus one "Wild" is double the score.

// 8. No matching items returns 0.

function fruit(reels, spins) {
    const scoreboard = {
        Wild: 100,
        Star: 90,
        Bell: 80,
        Shell: 70,
        Seven: 60,
        Cherry: 50,
        Bar: 40,
        King: 30,
        Queen: 20,
        Jack: 10,
    };

    let items = reels.map((reel, i) => reel[spins[i]]);
    let dups = items.reduce((allItems, item) => {
        if (allItems[item]) {
            allItems[item]++;
        } else {
            allItems[item] = 1;
        }
        return allItems;
    }, {});

    let finalScore = 0;

    for (let val in dups) {
        if (dups[val] === 3) {
            finalScore = scoreboard[val];
        } else if (
            dups[val] === 2 &&
            items.includes("Wild") &&
            val !== "Wild"
        ) {
            finalScore = scoreboard[val] / 5;
        } else if (dups[val] === 2) {
            finalScore = scoreboard[val] / 10;
        }
    }
    return finalScore;
}
