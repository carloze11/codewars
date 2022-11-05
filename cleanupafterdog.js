function crap(x, bags, cap) {
    let crap = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i].includes("D")) {
            return "Dog!!";
        }
        for (let j = 0; j < x.length; j++) {
            if (j[0] === "@") {
                crap++;
            }
        }
        if (x[i].includes("@")) {
            crap++;
        }
    }
    let bagcap = bags * cap;
    return bagcap > crap ? "Clean" : "Cr@p";
}
