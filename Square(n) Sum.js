function squareSum(numbers){
    let rsl = 0;
    for(let i = 0; i < numbers.length; i++) {
      rsl += Math.pow(numbers[i], 2);
    } 
    return rsl;
  }