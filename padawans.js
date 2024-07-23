const { log } = require('console');
const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const data = fs.readFileSync(path.join(__dirname, './data/padawans.txt'), 'utf-8');
  return data
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '');
}

console.log(getPadawanNames());

function getLightsaberScores() {
  const data = fs.readFileSync(path.join(__dirname, './data/scores.txt'), 'utf-8');
  return data.split('\n').map((line) => +line);
}
console.log(getLightsaberScores());

function getStats() {
  const padawaName = getPadawanNames();
  const ligthSaber = getLightsaberScores();
  return padawaName.map((name, index) => [name, ligthSaber[index]]);
}
console.log(getStats());

function writeStats(stats) {
  fs.writeFileSync('./data/stats.txt', `${(stats.join('\n')).replace(',', ' ')}`, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
