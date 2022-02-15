const fs = require('fs');
const padawanNames = fs.readFileSync('./data/padawans.txt', 'UTF-8');
const saberScore = fs.readFileSync('./data/scores.txt', 'UTF-8');

function getPadawanNames() {
  const colNames = padawanNames.split('\n');
  colNames.pop()
  return colNames
};

function getLightsaberScores() {
  const colScore = saberScore.split(', ');
  colScore.push()
return colScore
}

console.log(getLightsaberScores());
// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };
