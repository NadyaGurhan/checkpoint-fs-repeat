const fs = require('fs');
const path = require('path');

const getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');

const getLightsaberScores = () => fs.readFileSync('./data/scores.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((el) => +el);

const getStats = () => {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, i) => [name, scores[i]]);
};

function writeStats(stats) {
  const data = stats.map(([name, score]) => `${name} ${score}`).join('\n');
  fs.writeFileSync(path.join(__dirname, 'stats.txt'), data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
