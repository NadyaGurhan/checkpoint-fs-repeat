const fs = require('fs');
const arrName = fs.readFileSync('./data/padawans.txt', 'utf-8');
const arrNumber = fs.readFileSync('./data/scores.txt', "utf-8");

function getPadawanNames() {
  return arrName.trim().split('\n');
}

function getLightsaberScores() {
  return arrNumber.split('\n').map(Number);
}

function getStats() {
  return getPadawanNames().map((el, i) => [el, getLightsaberScores()[i]]);
}

function writeStats() {
  return fs.writeFileSync('./data/stats.txt',
  getStats()
  .map((el) => el.join(" "))
  .join('\n')
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
