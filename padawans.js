const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync("data/padawans.txt", 'utf-8');
  const result = data.split('\n');
  result.pop();
  return result;
}

function getLightsaberScores() {
  const data = fs.readFileSync("data/scores.txt", 'utf-8');
  const result = data.split('\n').map((elem) => +elem);
  return result;
}
function getStats() {
  const arrLightsaberScores = getLightsaberScores();
  return getPadawanNames().map( (elem, index) => [elem, arrLightsaberScores[index]]);
}
function writeStats() {
  fs.writeFileSync('data/stats.txt', getStats().map((elem) => elem.join(' ')).join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
