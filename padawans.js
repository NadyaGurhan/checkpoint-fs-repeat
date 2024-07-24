const { log } = require('console');
const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames() {

  const padawans = fs.readFileSync('data/padawans.txt', 'utf-8')
  const reTakePadawans = padawans.trim().split('\n')
  return reTakePadawans

};
console.log(getPadawanNames())

function getLightsaberScores() {
  const score = fs.readFileSync('data/scores.txt', 'utf-8')
  const reTakeScore = score.split('\n').map(Number)
  return reTakeScore
};
console.log(getLightsaberScores())

function getStats() {
  const padawansStats = getPadawanNames();
  const scoreStats = getLightsaberScores();

  const allStats = [];
  for (let i = 0; i < padawansStats.length; i++) {
    allStats.push([padawansStats[i], scoreStats[i]]);
  }

  return allStats;
}

console.log(getStats());

function writeStats() {
  const allStats = getStats()
  const formatData = allStats.map(el => el.join('')).join('\n')
  const write = fs.writeFileSync('data/stats.txt', formatData, 'utf8')
  return write
}

console.log(writeStats());