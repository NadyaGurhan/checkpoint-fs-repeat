const fs = require('fs')


const names = fs.readFileSync('data/padawans.txt')
function getPadawanNames(arr){
   arrNew = [];
   for(let i = 0; i < arr.length; i++){
    arrNew += arr[i]
   }
   return arrNew
}

const stats = fs.readFileSync('data/scores.txt')
function getLightsaberScores(arr){
  arrNew = [];
   for(let i = 0; i < arr.length; i++){
    arrNew += arr[i]
   }
   return arrNew
}

// const getStats = fs.readFile('data/scores.txt')
// function getStats(){
  
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};