function removeRotten(bagOfFruits){
    // use map to iterate through the array
    if (bagOfFruits == null) return [];
    return bagOfFruits.map(x => x.slice(0, 6) === 'rotten' ? x.slice(6).toLowerCase() : x);
    // if slice of first six letters equals rotten, return slice of the rest in lowercase
  }
  