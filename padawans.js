const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawans.split('\n').filter((elem => elem !== ''));
}
const padawansArray = getPadawanNames();
console.table(padawansArray);

function getLightsaberScores() {
  return scores.split('\n');
}
const scoresArray = getLightsaberScores()

function getStats() {
  return padawansArray.map((e, i) => (e + scoresArray[i]));
}
const getStatsArr = getStats()

function writeStats() {
  for (let i = 0; i < getStatsArr.length; i += 1) {
    fs.appendFileSync('./data/stats.txt', `${getStatsArr[i]}\n`);
  }
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
