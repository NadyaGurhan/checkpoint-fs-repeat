const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
const data = fs.readFileSync('./data/padawans.txt', 'utf8');
return data.trim().split('\n');
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf8');
  return data.trim().split('\n').map(score => parseFloat(score));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  return names.map((name, index) => [name, scores[index]]);
}
