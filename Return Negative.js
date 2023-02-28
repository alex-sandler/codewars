function makeNegative(num) {
    if  (Math.sign(num) > 0) {
    return ~num + 1;
    } else if (Math.sign(num) < 0) {
    return num;
    } else if (Math.sign(num) == 0) {
    return 0;
    }
  };
  
  
  function makeNegative(num) {
    if ( num > 0 ) {
          return -num;
      }
      else {
          return num;
      }
  }
  
  
  function makeNegative(num) {
    return num < 0 ? num : -num;
  }
  
  
  makeNegative(-5)