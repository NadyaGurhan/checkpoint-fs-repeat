
  const fs = require("fs")
  const score = fs.readFileSync("data/scores.txt")
  const padavan = fs.readFileSync("data/padawans.txt")
  const names = padavan.split('\n')
  const scorees = score.split('\n')
function getPadawanNames () {
 let myArr = []
 for (let i = 0; i < names.length;i++) {
   myArr.push(names)
 }
}
function getLightsaberScores () {
  const newArr = []
  for (let i = 0 ; i < score; i++);{
    
  }
}




  module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
