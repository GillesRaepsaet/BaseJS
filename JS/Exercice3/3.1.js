const listArray1 = [1, 2, 3, 4, 5]
const listArray2 = [100, 101, 102]

let listSum1 = 0
let listSum2 = 0

for(let element of listArray1){
  listSum1 += element
}
console.log(listSum1 === 15) // should output true

for(let element of listArray2){
  listSum2 += element
}
console.log(listSum2 === 303) 