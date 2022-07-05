const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return names;
}
function getLightsaberScores() {
  const scoreTxt = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return scoreTxt;
}
function getStats() {
  const stats = fs.writeFileSync('./data/stats.txt', 'Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82');
  const data = fs.readFileSync('data/stats.txt', 'utf8').split(',');
return data;
}

console.log(getStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
