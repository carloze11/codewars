function countLanguages(list) {
    return list.reduce((allLangs, dev) => {
      if (dev.language in allLangs) {
        allLangs[dev.language]++;
        } else {
          allLangs[dev.language] = 1;
          };
      return allLangs;
    }, {})
  }