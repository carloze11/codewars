// You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

// Your task is to return either:

// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
// false otherwise.

function isLanguageDiverse(list) {
    let languages = list.reduce((allLangs, dev) => {
        if (allLangs[dev.language]) {
            allLangs[dev.language]++;
        } else {
            allLangs[dev.language] = 1;
        }
        return allLangs;
    }, {});

    let occurrences = [];

    for (let key in languages) {
        occurrences.push(languages[key]);
    }

    return Math.max(...occurrences) > Math.min(...occurrences) * 2
        ? false
        : true;
}
