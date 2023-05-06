function DNAStrand(dna){
    let compl = []
    dna.split('').forEach(base => {
      if (base === 'A') compl.push('T');
      if (base === 'T') compl.push('A');
      if (base === 'G') compl.push('C');
      if (base === 'C') compl.push('G');
    })
    return compl.join('')
    
  }