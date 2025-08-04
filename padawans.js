const fs = require('fs')
const { EOL } = require('os');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  return data.split(EOL).filter(name => name.trim() !== '');
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8');
  return data.split(EOL)
    .filter(score => score.trim() !== '')
    .map(score => parseFloat(score));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, index) => [name, scores[index]]);
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

