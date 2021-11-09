const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  let padawanNames = [];
  for (let i = 0; i < padawans.length; i++) {
    padawanNames.push(padawans[i]);
  }
  padawanNames.pop()
  return padawanNames;
}
// console.log(getPadawanNames());


function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  let lightsaberScores = [];
  for (let i = 0; i < scores.length; i++) {
    lightsaberScores.push(+scores[i]);
  }
  return lightsaberScores;
}
// console.log(getLightsaberScores())

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  const stats = [];
  for (let i = 0; i < padawans.length; i++) {
    stats.push([padawans[i], +scores[i]])
  }
  stats.pop();
  return stats
}
console.log(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
