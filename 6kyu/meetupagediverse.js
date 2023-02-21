// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.

function isAgeDiverse(list) {
    const ageGroups = {
        teens: 0,
        twenties: 0,
        thirties: 0,
        forties: 0,
        fifties: 0,
        sixties: 0,
        seventies: 0,
        eighties: 0,
        nineties: 0,
        centenarian: 0,
    };

    list.forEach((obj) => {
        if (obj.age < 20) return (ageGroups.teens += 1);
        if (obj.age < 30) return (ageGroups.twenties += 1);
        if (obj.age < 40) return (ageGroups.thirties += 1);
        if (obj.age < 50) return (ageGroups.forties += 1);
        if (obj.age < 60) return (ageGroups.fifties += 1);
        if (obj.age < 70) return (ageGroups.sixties += 1);
        if (obj.age < 80) return (ageGroups.seventies += 1);
        if (obj.age < 90) return (ageGroups.eighties += 1);
        if (obj.age < 100) return (ageGroups.nineties += 1);
        return (ageGroups.centenarian += 1);
    });

    for (let key in ageGroups) {
        if (ageGroups[key] === 0) return false;
    }
    return true;
}
