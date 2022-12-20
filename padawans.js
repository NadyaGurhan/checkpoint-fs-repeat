const fs = require('fs');

const name = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
const scor = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');
function getPadawanNames() {
  return name.split('\n').slice(0, 4);
}
function getLightsaberScores() {
  return scor.split('\n').map((el) => +el);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((el, i) => [el, scores[i]], 0);
}
function writeStats() {
  const stats = getStats().join('\n').split(',').join(' ');
  fs.writeFileSync(`${__dirname}/data/stats.txt`, stats);
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
