const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const padawans = fs.readFileSync('data/padawans.txt', 'utf8');
const scores = fs.readFileSync('data/scores.txt', 'utf8');

function getPadawanNames() {
  return padawans.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  return scores.split('\n').map((el) => Number(el));
}

function getStats() {
  const arr = getPadawanNames();
  const arr2 = getLightsaberScores();
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push([arr[i], arr2[i]]);
  }
  return result;
}

function writeStats() {
  const arr = getStats();
  const arr1 = arr.map((el) => el.join(' '));
  fs.writeFileSync('data/stats.txt', `${arr1.join('\n')}`);
}
