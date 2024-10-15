const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawans.split('\r\n').splice(0, 4);
}

function getLightsaberScores() {
  return scores
    .split('\r\n')
    .splice(0, 4)
    .map((item) => +item);
}

function getStats() {
  const padawan = getPadawanNames();
  const score = getLightsaberScores();
  const result = [];
  for (let i = 0; i < padawan.length; i++) {
    const item = [];
    item.push(padawan[i]);
    item.push(score[i]);
    result.push(item);
  }
  return result;
}
const stats = getStats();
function writeStats() {
  fs.writeFileSync('./data/stats.txt', stats.map((item) => item.join(' ')).join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
