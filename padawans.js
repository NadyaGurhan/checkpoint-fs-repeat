const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const fileRead = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const name = fileRead.split("\n")
  return name.pop()
  
};

function getLightsaberScores() {
const fileRead = fs.readFileSync('./data/scores.txt', 'utf-8');
}
