const fs = require('fs');

const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
function getPadawanNames() {
  const arr = padawan.split('\n');
  arr.pop();
  return arr;
}

function getLightsaberScores() {
  const arr = scores.split('\n');
  return arr.map((el) => (Number(el)));
}
function getStats() {
return padawan.map((name, i)=> )
}
function writeStats() {
  fs.writeFileSync('./data/stats.txt', getStats().join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
