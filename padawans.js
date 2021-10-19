const fs = require('fs');
let padawan = fs.readFileSync('./data/padawans.txt', 'utf-8');
let stats = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  padawan = padawan.split('\n')
  padawan.pop()
  return padawan
}

function getLightsaberScores() {
  stats = stats.split('\n')
  for (let i=0; i< stats.length;i++) {
    stats[i] = String(stats[i])
  }
  return stats
}



// console.log(getLightsaberScores())
getStats = 0
writeStats = 0

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
