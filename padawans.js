const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n').map((item) => item.trim());
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n').map((item) => +item.trim());
}

function getStats() {
  const result = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  padawans.forEach((_, index) => {
    result.push([padawans[index], scores[index]]);
  });
  return result;
}

function writeStats() {
  const data = getStats().map((item) => item.join(' ')).join("\n");
  fs.writeFileSync('./data/stats.txt', data);
}