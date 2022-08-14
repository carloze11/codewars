var seqlist = function(first,c,l){
    let list = [];
    for (let i = first; list.length < l; i += c){
      list.push(i)
    }
    return list;
  }