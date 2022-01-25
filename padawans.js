const fs = require('fs')

function getPadawanNames(){
   const a = fs.readFileSync('./data/padawans.txt', 'utf8')
   let arr = a.split('\n')
   arr.pop()
   return arr
}

function getLightsaberScores(){
 const b = fs.readFileSync('./data/scores.txt', 'utf8')
 let arr1 = b.split('\n')
 arr1.pop()
 for(let i = 0; i < arr1.length; i++){
   arr1[i] = + arr1[i]
 }
 return arr1
}

function getStats(){
  let arrName = arr
  let arrScore = arr1
  for (let i = 0; i < arrName.length; i++){
  
  }
}


module.exports = {
  getPadawanNames,  
  getLightsaberScores,
  getStats,
 // writeStats,
};
