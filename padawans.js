const fs = require('fs');

function getPadawanNames() {
  const readPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawans = readPadawans.split('\n').slice(0, -1);
  return padawans;
}

function getLightsaberScores() {
  const readScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scores = readScores.split('\n').map((score) => Number(score));
  return scores;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
const stats = [];
const stat = names.map((el, i) => stats.push([el, scores[i]]))
return stats
}
console.log(getStats())

function writeStats () {
  const stats = getStats().join('\n').replace(/,/g, ' ');
  if(!fs.existsSync('data/stats.txt')) {
    fs.writeFileSync('data/stats.txt', stats)
  }
}

console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
