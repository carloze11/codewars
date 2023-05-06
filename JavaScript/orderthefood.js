function orderFood(list) {
    return list.reduce((acc, obj) => {
        if (acc[obj.meal]) {
            acc[obj.meal]++;
        } else {
            acc[obj.meal] = 1;
        }
        return acc;
    }, {});
}
