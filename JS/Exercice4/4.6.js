function factorial(n){
    if(n === 0)
      return 1
    
    return n * factorial(n - 1)
  }
  
  

  const fac = n => n === 0 ? 1 : n * fac(n - 1)