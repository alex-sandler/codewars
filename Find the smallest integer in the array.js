class SmallestIntegerFinder {
    findSmallestInt(mas) {
      let rsl = Number.MAX_SAFE_INTEGER;
      for(let i = 0; i < mas.length; i++) {
        if (mas[i] < rsl) {
          rsl = mas[i];
        }
      }
      return rsl;
    }
  }