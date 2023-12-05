const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return names;
}
getPadawanNames();
// console.log(getPadawanNames());

function getLightsaberScores() {
  const scoresString = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
  const scores = scoresString.map(Number);
  return scores;
}
getLightsaberScores();
// console.log(getLightsaberScores());

function getStats() {
  const name = getPadawanNames();
  const score = getLightsaberScores();
  let resArr = [];
  const result = [];
  for (let i = 0; i < name.length; i += 1) {
    resArr.push(name[i], score[i]);
    result.push(resArr);
    resArr = [];
  }
  return result;
}
// console.log(getStats());

function writeStats() {
  fs.writeFileSync('./data/stats.txt', getStats().join('\n').split(',').join(' '));
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
