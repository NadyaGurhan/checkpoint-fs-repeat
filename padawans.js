const fs = require('fs');

function getPadawanNames() {
  const result = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return result;
}

function getLightsaberScores() {
  const result = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => +el);
  return result;
}

function getStats() {
  const result = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    result.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return result;
}
function writeStats(stats) {
  const result = stats.map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', result, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
