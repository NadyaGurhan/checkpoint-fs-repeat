const fs = require('fs');
const { EOL } = require('os');
function getPadawanNames() {
  const afterRead = fs.readFileSync('data/padawans.txt', 'utf-8');
  const newArray = afterRead.split(EOL).filter((name) => name.trim());
  return newArray;
}
function getLightsaberScores() {
  const afterRead = fs.readFileSync('data/scores.txt', 'utf-8');
  const newArray = afterRead.split(EOL).map((el) => Number(el));
  return newArray;
}
function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  return names.map((name, id) => [name, scores[id]]);
}

function writeStats(stats) {
  const newContent = stats.map((stat) => stat.join(' ')).join(EOL) + EOL;
  fs.writeFileSync('data/stats.txt', newContent);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
