const fs = require('fs');

const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const padawans = names.split('\n').slice(0, -1);
  return padawans;
}

function getLightsaberScores() {
  const sabers = scores.split('\n').map((el) => Number(el));
  return sabers;
}

function getStats() {
  getPadawansNames().
  return stat;
}

function writeStats() {
  fs.appendFileSync(`/data/stats.txt`, `${getStats()[i]}\n`)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
