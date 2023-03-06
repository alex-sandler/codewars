function duplicateEncode(word) {
    return word.toLowerCase().split('').map(function (_char, i, arr) {
      return (arr.filter((item) => item === _char).length - 1) ? ')' : '(';
    }).join('');
  }

  