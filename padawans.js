const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const newPadawans = [];
  for (let i = 0; i < padawans.length; i++) {
    if (padawans[i] !== '') {
      newPadawans.push(padawans[i]);
    }
  }
  return newPadawans;
}
getPadawanNames();

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const result = scores.map((el) => Number(el));
  return result;
}
getLightsaberScores();

function getStats() {
  const names = getPadawanNames();
  const score = getLightsaberScores();
  const newArr = [];
  for (let i = 0; i < names.length; i++) {
    newArr.push([names[i], score[i]]);
  }
  return newArr;
}
getStats();

function writeStats() {
  const stats = getStats()
  return stats.join('\\n').split(',').join(' ')
}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
