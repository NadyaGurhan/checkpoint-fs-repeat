const fs = require(‘fs’);
const padavans = fs.readFileSync(‘./data/padawans.txt’, ‘utf-8’);
const scores = fs.readFileSync(‘./data/scores.txt’, ‘utf-8’);
function getPadawanNames() {
  return padavans.trim().split(‘\n’);
}
function getLightsaberScores() {
  return scores.split(‘\n’).map((el) => Number(el));
}
function getStats() {
  const padavan = getPadawanNames();
  const score = getLightsaberScores();
  const result = padavan.map((el, i) => [el, score[i]]);
  return result;
}
const result1 = getStats();
function writeStats() {
  const itog = result1.join(‘\n’).split(‘,’).join(' ’)
  fs.writeFileSync(‘data/stats.txt’, itog);
}
console.log(writeStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
