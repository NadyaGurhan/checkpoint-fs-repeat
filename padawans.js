const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores.map((el) => Number(el));
}

function getStats() {
  const newArr = [padawans, getLightsaberScores()];
  const result = [];
  for (let i = 0; i < newArr[0].length; i += 1) {
    result[i] = [];
    for (let k = 0; k < newArr.length; k += 1) {
      result[i][k] = newArr[k][i];
    }
  }
  return result;
}

function writeStats() {
  const stats = getStats();
  fs.writeFileSync('./data/stats.txt', `${stats.join('\n').split(',').join(' ')}`, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
