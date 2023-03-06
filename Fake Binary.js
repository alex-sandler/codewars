function fakeBin(x) {
    var output = '';
    let i;
    for (i = 0; i<x.length; i++) {
      x[i] < 5 ? output += '0' : output += '1';
    }
    return output;
  }

  