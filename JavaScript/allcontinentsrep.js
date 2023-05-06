function allContinents(list) {
    let continents = list.reduce((allObjs, obj) => {
        if (!allObjs[obj.continent]) {
            allObjs[obj.continent] = 1;
        }
        return allObjs;
    }, {});
    if (Object.keys(continents).length === 5) {
        return true;
    }
    return false;
}
