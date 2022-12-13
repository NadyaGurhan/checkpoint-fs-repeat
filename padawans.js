const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
    .map((el) => el.split(','));
  return names.join(',').split(',').slice(0, -1);
}
getPadawanNames();
function getLightsaberScores() {
  const names = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
    .map((el) => el.split(','));
  return names.join(',').split(',').map((el) => Number(el));
}
getLightsaberScores();

function getStats() {
  const stats = [].concat(getPadawanNames(), getLightsaberScores());
return stats
}
getStats()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
