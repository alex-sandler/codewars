function positiveSum(arr) {
    let rsl = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        rsl += arr[i];
      }
    }
    return rsl;
  }