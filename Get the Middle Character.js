function isOdd(num) {
    return num % 2 === 1;
  }
  
  function getMiddle(str) {
    if (isOdd(str.length)) {
      return str[((str.length + 1) / 2) - 1];
    } else {
      return str[(str.length / 2) - 1] + str[str.length / 2];
    }
  }
  console.log(getMiddle(`the`));
  console.log(getMiddle(`root`));