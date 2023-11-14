const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\r\n');
}

function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf8')
    .trim()
    .split('\r\n')
    .map((el) => {
      return Number(el);
    });
}

function getStats() {
  const padawans = getPadawanNames();
  const lightsaber = getLightsaberScores();
  const newArr = [];
  for (let i = 0; i < padawans.length; i++) {
    newArr.push([padawans[i], lightsaber[i]]);
  }
  return newArr;
}

function writeStats(stats) {
  const newStats = stats
    .join('\n')
    .replace(',', ' ')
    .replace(',', ' ')
    .replace(',', ' ')
    .replace(',', ' ');
  fs.writeFileSync('./data/stats.txt', newStats);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
