const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  const name1 = names.pop();
  return names;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  return scores.map((el) => +el);
}

function getStats() {
  const arr = getPadawanNames();
  const newArr = getLightsaberScores();
  const stats = [];

  for (let i = 0; i < arr.length; i++) {
    stats.push([arr[i], newArr[i]]);
  }
  return stats;
}

function writeStats(arr) {
  
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
