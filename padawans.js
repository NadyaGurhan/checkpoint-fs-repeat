const fs = require('fs');

function getPadawanNames() {
  let a = fs.readFileSync('data/padawans.txt', 'utf-8')
  let arr = a.split("\n")
  arr.pop()
  return arr
}
function getLightsaberScores() {
  let a = fs.readFileSync('data/scores.txt', 'utf-8')
  let arr = a.split("\n")
  return arr.map(item => +item)

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  /*getStats,
  writeStats,*/
};
