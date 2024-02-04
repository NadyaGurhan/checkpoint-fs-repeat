const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8').trim();
  const names = data.split('\n');

  return names.map((name) => name.trim());
}
// console.log(getPadawanNames());

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8').trim();
  const scores = data.split('\n').map((score) => parseFloat(score));

  return scores;
}
// console.log(getLightsaberScores());

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const table = [
    [padawans[0], scores[0]],
    [padawans[1], scores[1]],
    [padawans[2], scores[2]],
    [padawans[3], scores[3]],
  ];

  return table;
}
// console.log(getStats());

function writeStats() {
  const stats = getStats();
  const statsString = JSON.stringify(stats);
  fs.writeFileSync('data/stats.txt', statsString);

  const fileContent = fs.readFileSync('data/stats.txt', 'utf8').trim().split('\n');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
