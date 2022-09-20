const fs = require('fs')



 const names = fs.readFileSync('data/padawans.txt', 'utf8')
 console.log(names)

// function getPadawanNames(){
//   let arrNames = []
//   for (i = 0; i < names; i++){
//    arrNames.push(names)
//   }
//   return arrNames
// }
// console.log(getPadawanNames())

arrNames=names.split("")
console.log(arrNames)
