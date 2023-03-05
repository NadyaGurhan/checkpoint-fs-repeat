const fs = require('fs');

const padawansNames = fs
  .readFileSync('./data/padawans.txt', 'utf-8')
  .split('\n');
// padawansNames.push(data);

function getPadawanNames() {
  return padawansNames.slice(0, -1);
}

function getLightsaberScores() {
  const padawansScores = fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n');
  return padawansScores.map((elem) => Number(elem));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const res = [];
  for (let index = 0; index < names.length; index++) {
    res.push([names[index], scores[index]]);
  }
  return res;
}

function writeStats() {
  const regExp = /,/g;
  const stats = getStats().join('\n').replace(regExp, ' ');
  fs.writeFileSync('./data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
