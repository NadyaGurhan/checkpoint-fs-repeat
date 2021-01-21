const fs = require('fs');

function getPadawanNames() {
  return fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n')
    .filter((el) => el.length > 0);
}

function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .filter((el) => el.length > 0)
    .map((el) => parseFloat(el));
}
function getStats() {
  const padawans = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n')
    .filter((el) => el.length > 0);

  const lightSaber = fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .filter((el) => el.length > 0)
    .map((el) => parseFloat(el));

  const hash = {};
  for (let i = 0; i < padawans.length; i++) {
    hash[padawans[i]] = lightSaber[i];
  }
  // console.log(Object.entries(hash).join('\n').replace(/\,/g, ' '));
  return Object.entries(hash);
}
function writeStats(getStatistic) {
  const str = getStatistic.join('\n').replace(/\,/g, ' ');
  return fs.writeFileSync('./data/stats.txt', str, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

console.log(getStats());
