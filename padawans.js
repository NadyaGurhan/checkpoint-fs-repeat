const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  return data.split('\n').filter(name => name.trim());
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8');
  return data.split('\n')
    .filter(score => score.trim())
    .map(score => parseFloat(score));
}


function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  
  return names.map((name, index) => [name, scores[index]]);
}

function writeStats(stats) {
  const lines = stats.map(([name, score]) => `${name} ${score}`);
  const data = lines.join('\n');
  fs.writeFileSync('data/stats.txt', data, 'utf8');
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
