function pluck(objs, name) {
    return objs.map (x => `${name}` in x ? x[name] : undefined)
  }