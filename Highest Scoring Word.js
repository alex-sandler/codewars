function high(x){
    return x.split(" ").reduce(function(a,b,index){
      return getScore(a) >= getScore(b)?a:b;
    });
  }
  
  function getScore(a){
    var sum = 0;
    for(var i=0;i<a.length;i++){
        sum += a[i].charCodeAt() - 96;
      }
      console.log(a,sum);
      return sum;
  }