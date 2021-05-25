const fs = require('fs')

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').trimEnd().split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').trimEnd().split('\n').map((elem) => Number(elem));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  let x = [];
  for (let i = 0; i < 4; i++) {
    x.push([names[i], scores[i]])
  }
  return x;
}

function writeStats() {
  stats = getStats().map((elem) => elem.join(',').replace(',', ' ')).join('\n')
  fs.appendFileSync('data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
