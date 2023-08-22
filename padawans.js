const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.split('\n');
}
function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores.split('\n').map(Number);
}
function getStats() {
  const names1 = getPadawanNames();
  const scores1 = getLightsaberScores();
  const stats = names1.map(scores1.push(scores1));
}
function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
