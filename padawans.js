const fs = require('fs');

function getPadawanNames () {
  let names = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').slice(0,4);
  return names
} 


function getLightsaberScores () {
  let names = fs.readFileSync('data/scores.txt', 'utf-8').split('\n').slice(0,4)
  return names.map(Number)
}
console.log(getLightsaberScores())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
//   getStats,
//   writeStats,
};
