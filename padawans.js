const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
  // const data = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1);
  // console.log(data);
  return data;
}
function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  return data;
}

function getStats() {
  const stats = getLightsaberScores();
  const names = getPadawanNames();
  return names.map((el, i) => [el, stats[i]]);
}

function writeStats() {
  const stats = getStats().join('\n').split(',').join(' ');
  // console.log(stats);
  fs.writeFileSync('./data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
