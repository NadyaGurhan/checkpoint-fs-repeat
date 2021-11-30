const fs = require('fs');
const data = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  let arr = data.split('\n');
  let last = arr.pop();
  return arr;
}
function getLightsaberScores() {
  return scores.split('\n').map((el) => +el);
}

function getStats() {
  const stats = [];
  const names = data.split('\n');
  const score = scores.split('\n');

  for (let index = 0; index < names.length; index += 1) {
    stats.push([names[index], +score[index]]);
  }

  let last = stats.pop();
  return stats;
}

function writeStats() {
  const data = getStats().join('\n').replaceAll(',', ' ');
  return fs.writeFileSync('data/stats.txt', data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
