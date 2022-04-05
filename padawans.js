const fs = require('fs');

function getFileContent(path, file) {
  return fs.readFileSync(`${path}/${file}`, 'utf8');
}

function getPadawanNames() {
  return getFileContent('./data', 'padawans.txt').split('\n').filter((x) => (x));
}

function getLightsaberScores() {
  return getFileContent('./data', 'scores.txt').split('\n').filter((x) => (x)).map((x) => +x);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const scoreTable = padawans.map((x, i) => [x, scores[i]]);
  return scoreTable;
}

function writeStats() {
  fs.writeFileSync('./data/stats.txt', getStats().map((x) => x.join(' ')).join('\n'));
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
