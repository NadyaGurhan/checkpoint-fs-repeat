const fs = require('fs');

function readFileToArray(filePath) {
  return fs.readFileSync(filePath, 'utf8')
    .trim()
    .split('\n');
}

function getPadawanNames() {
  return readFileToArray('data/padawans.txt');
}

function getLightsaberScores() {
  return readFileToArray('data/scores.txt')
    .map((item) => Number(item));
}

function getStats() {
  const table = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i += 1) {
    table.push([padawans[i], scores[i]]);
  }
  return table;
}

function writeStats() {
  const statsArr = getStats();
  const statrStr = statsArr
    .join('\n')
    .replace(/,/g, ' ');
  fs.writeFileSync('data/stats.txt', `${statrStr}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
