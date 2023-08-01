const fs = require('fs');

function getPadawanNames() {
  const pad = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
  return pad;
}

function getLightsaberScores() {
  const num = fs.readFileSync('data/scores.txt', 'utf-8').split('\n').map((el) => +el);
  return num;
}

function getStats() {
  pad = getPadawanNames();
  num = getLightsaberScores();
  const concat = pad.map((el, i) => [el, num[i]]);
  return concat;
}
function writeStats() {
  const write = getStats().join('\n').replace(/[,]/g, ' '); // array
  const result = fs.writeFileSync('data/stats.txt', write); // <--- string?
  console.log(write);
  return result;
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
