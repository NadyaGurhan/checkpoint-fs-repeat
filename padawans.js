const fs = require('fs');

const padawansText = fs.readFileSync('./data/padawans.txt', 'utf-8');
function getPadawanNames() {
  const resName = padawansText.split('\n');
  const res = resName.slice(0, resName.length - 1);
  return res;
}
const scoresText = fs.readFileSync('./data/scores.txt', 'utf-8');
function getLightsaberScores() {
  const resu = scoresText.split('\n').map((el) => Number(el));
  return resu;
}
const padawans = getPadawanNames();
const scores = getLightsaberScores();
function getStats() {
  const result = [];
  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
}
const stata = getStats();
function writeStats() {
  const arrStats = stata.map((el) => el.join(' '));
  return fs.writeFileSync('./data/stats.txt', arrStats.join('\n'));
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
