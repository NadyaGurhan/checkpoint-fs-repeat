const fs = require('fs')
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores.map(el => +el);
}

function getStats() {
  let stats = [];
  for(let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], +scores[i]])
  }
  return stats;
}

function writeStats() {
  let stats = getStats().map(el => el.join(' '))
  // console.log(stats)
  fs.writeFileSync('./data/stats.txt', stats.join('\n'))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
