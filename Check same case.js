function sameCase(a, b) {
  if (!a.match(/[a-z]/i) || !b.match(/[a-z]/i)){
    return -1
  }
  if (a === a.toUpperCase()&& b === b.toUpperCase()){
    return 1
  }
  if (a === a.toLowerCase() && b === b.toLowerCase()){
    return 1
  } else {
    return 0
  }
}