const fs = require('fs');

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const nothing = read.pop();
  return read;
}

function getLightsaberScores() {
  const read = fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => Number(el));
  return read;
}
function getStats() {
  const names = getPadawanNames();
  const stats = getLightsaberScores();
  return names.map((el, ind) => [names[ind], stats[ind]]);
}
function writeStats(stats) {
  const arr = getStats();
  arr.map((el) => {
    if (!fs.existsSync('./data/stats.txt')) {
      return fs.writeFileSync('./data/stats.txt', `${el[0]} ${el[1]}`);
    }
    fs.appendFileSync('./data/stats.txt', `\n${el[0]} ${el[1]}`);
  });
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
