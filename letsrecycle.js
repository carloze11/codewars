// Task
// You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

// Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

function recycle(array) {
    let bins = [[], [], [], []];
    array.forEach((obj) => {
        if (obj.material === "paper" || obj.secondMaterial === "paper")
            bins[0].push(obj.type);
        if (obj.material === "glass" || obj.secondMaterial === "glass")
            bins[1].push(obj.type);
        if (obj.material === "organic" || obj.secondMaterial === "organic")
            bins[2].push(obj.type);
        if (obj.material === "plastic" || obj.secondMaterial === "plastic")
            bins[3].push(obj.type);
    });
    return bins;
}
