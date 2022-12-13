const fs = require('fs');

// console.log(getPadawanNames)
// let padawansArr = padawans.split('\n')
// console.log(padawansArr)
function getPadawanNames() {
  const padawans = fs.readFileSync("data/padawans.txt", 'utf8');
  let arrPadawans = padawans.split('\n')
console.log(arrPadawans)
}
getPadawanNames()
// let getPadawanNames = 'data/padawans.txt';

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};