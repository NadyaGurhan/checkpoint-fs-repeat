const fs = require('fs')
module.exports = {
  getPadawanNames,
   getLightsaberScores,
   getStats,
   writeStats,
};
const txt = fs.readFileSync ('./data/padawans.txt', 'utf-8')
console.log(txt)
function getPadawanNames (txt) {
  let arr = []
  for(let i =0; i < txt; i++){
    arr.push(txt[i])
  }
  return arr
  }
 


const num = fs.readFileSync ('./data/scores.txt')
function getLightsaberScores (num) {

}
