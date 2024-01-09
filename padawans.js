const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.split('\n');
}

function getLightsaberScores() {
  const stat = fs.readFileSync('./data/scores.txt', 'utf-8')
  return stat.split('\n')

}

function getStats() {

}
function writeStats() {

}

console.log(getLightsaberScores());