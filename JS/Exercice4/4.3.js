function rand10(){
    return 1 + Math.floor(Math.random() * 10)
  }
  
  function multiLists(n){
    const randList = []
  
    for(let i=0; i<n; i++){
      randList.push(rand10())
    }
  
    return randList
  }
  
  console.log( multiLists(5) )