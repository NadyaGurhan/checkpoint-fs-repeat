const fs = require('fs');

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return read.split('\n').filter((el) => el !== '');
}
// getPadawanNames();
function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8');
  return read.split('\n').map((el) => Number(el));
}

function getStats() {
  const arr = [];
  const x = getPadawanNames();
  const p = getLightsaberScores();
  for (let i = 0; i < getLightsaberScores().length; i++) {
    arr.push([x[i], p[i]]);
  }
  return arr;
}
// getStats();
function writeStats() {
  const x = getStats().flat();
  fs.writeFileSync('./data/stats.txt', x, 'utf-8');
  return console.log(x);
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
