const fs = require('fs');

const getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);

const getLightsaberScores = () => fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(Number);

function getStats() {
  const a = getPadawanNames();
  const b = getLightsaberScores();
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result.push([a[i], b[i]]);
  }
  return result;
}

function writeStats() {
  const x = './data/stats.txt';
  const y = getStats().join('\n').replaceAll(',', ' ');
  return fs.writeFileSync(x, y);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
