const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
}
getPadawanNames();

function getLightsaberScores() {
  const data = fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => Number(el));
  return data;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const stat = [];
  for (let i=0; i<padawans.length; i++){
    stat.push([padawans[i], scores[i]])
  }
  // console.log(stat);
  return stat;
}
getStats()

function writeStats() {
const data = getStats().join('\n').split(',').join(' ');
console.log(data);
fs.writeFileSync('./data/stats.txt', data)
}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
