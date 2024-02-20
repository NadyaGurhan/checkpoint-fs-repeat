const fs = require('fs');
const path = require('path');

const getPadawanNames = () => {
  const data = fs.readFileSync(path.join(__dirname, './data/padawans.txt'), 'utf-8').trim().split('\n');
  return data;
};

const getLightsaberScores = () => {
  const data = fs.readFileSync(path.join(__dirname, './data/scores.txt'), 'utf-8').trim().split('\n');
  return data.map((item) => Number(item));
};

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, index) => [name, scores[index]]);
}

function writeStats(stats) {
  const data = stats.map(([name, score]) => `${name},${score}`).join('\n');
  fs.writeFileSync(path.join(__dirname, './stats.txt', data));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
