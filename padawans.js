const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}

function getLightsaberScores() {
  const res = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return res.map((el) => Number(el));
}

function getStats() {
  const arr = [];
  const pad = getPadawanNames();
  const score = getLightsaberScores();
  for (let i = 0; i < score.length; i += 1) {
    arr.push([pad[i], score[i]]);
  }
  return arr;
}

function writeStats() {
  const stat = getStats();
  return fs.writeFileSync('./data/stats.txt', stat);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
