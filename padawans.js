const fs = require('fs');
const { EOL } = require('os');
function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf8');
  return data
    .trim()
    .split(EOL)
    .map((name) => name);
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf8');
  return data.split(EOL).map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, score) => [name, scores[score]]);
}

function writeStats(stats) {
  const data = stats.map(([name, score]) => `${name} ${score}`).join(EOL);
  return fs.writeFileSync('./data/stats.txt', data, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
