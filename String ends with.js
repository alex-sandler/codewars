function solution(str, ending){
    return str.split('').filter((_, i) => i >= str.length - ending.length).join('') == ending ? true : false;
  }
  
  console.log(solution("longword", "word"));

  