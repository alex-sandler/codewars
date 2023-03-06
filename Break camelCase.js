function solution(string) {
    let splitStr = string.split("");
    let newStr = "";
    splitStr.forEach(e =>{
        if(e === e.toUpperCase()) newStr +=" "+e;
        else newStr += e;
    });
    return newStr;
  }
  
  console.log(solution('camelCasing'));//success = "camel Casing"
  console.log(solution('camelCasingTest'));
  

  