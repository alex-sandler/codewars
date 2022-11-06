// Sum Numbers
function sum (numbers) {
    let rsl = 0;
    if (numbers.length == 0) {
      return 0;
    }
    for (let i = 0; i < numbers.length; i++) {
      rsl += numbers[i];
    }
    return rsl;
};