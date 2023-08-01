const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padawansArr = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return padawansArr;
}

function getLightsaberScores() {
  const scoresArr = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map((e) => Number(e));
  return scoresArr;
}

function getStats() {
  const padawansArr = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  const scoresArr = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map((e) => Number(e));
  const statsArr = [];
  for (let i = 0; i < padawansArr.length; i += 1) {
    statsArr.push([padawansArr[i], scoresArr[i]]);
  }
  return statsArr;
}

function writeStats() {
  const statsArr = getStats().map((e) => e.join(' '));

  return fs.writeFileSync('./data/stats.txt', statsArr.join('\n'), 'utf-8');
}

writeStats();
