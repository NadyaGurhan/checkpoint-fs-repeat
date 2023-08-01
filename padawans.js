const fs = require('fs');

function getPadawanNames() {
  const newArr = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');

  return newArr;
}

function getLightsaberScores() {
  const newArr = fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n');

  return newArr;
}

function getStats() {
  const stats = [];

  const newArr1 = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
  const newArr2 = fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n');
  for (let i = 0; i < newArr1.length; i += 1) {
    stats.push([newArr1[i], newArr2[i]]);
  }
  return stats;
}

function writeStats() {
  const statsArr = getStats().map((e) => e.join(' '));
  return fs.writeFileSync('./data/stats.txt', statsArr.join('\n'), 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
