const fs = require('fs');
const EOL = require('os');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n').filter(Boolean);
}
// console.log(getPadawanNames());


function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(Number);
}
function getStats() {
  const padawansArr = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n').filter(Boolean);
  const scoresArr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(Number);
  const unitedArr = padawansArr.map((el, index) => `${el}, ${scoresArr[index]}`);
  console.log(unitedArr);
  return unitedArr
  
}
console.log(typeof getStats());


function writeStats(params) {}
