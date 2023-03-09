function accum(s) {
  
    let sArray = s.split('')
    result = []
    let b = 0
   for(let i = 0 ; i < sArray.length ; i++){
     b = sArray[i].toUpperCase()+sArray[i].toLowerCase().repeat(i).trim()
     result.push(b)
     
     
   } 
    return result.join('-')
    // your code
  }

  