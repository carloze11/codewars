function queueTime(customers, n) {
    if (!customers.length) return 0;
    if (n === 1) {
        return customers.reduce((a, c) => a + c, 0);
    }
    if (n > customers.length) return Math.max(...customers);

    let tills = [];
    for (let i = 0; i < n; i++) {
        tills[i] = 0;
    }
    customers.forEach((customer) => {
        tills[tills.indexOf(Math.min(...tills))] += customer;
    });
    return Math.max(...tills);
}
