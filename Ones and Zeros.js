const binaryArrayToNumber = arr => {
    return arr.reduce((acc,cur,index)=>{
      return acc + cur*Math.pow(2, arr.length-1-index)
    },0)
  };

  