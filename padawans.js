const fs = require('fs');
const os = require('os');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split(os.EOL);
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split(os.EOL).map((el) => Number(el));
}

function getStats() {
  const res = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i += 1) {
    res.push([padawans[i], scores[i]]);
  }
  return res;
}

function writeStats() {
  const data = getStats().map(el => el.join(' ')).join('\n')
  fs.writeFileSync('./data/stats.txt', data)
}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
