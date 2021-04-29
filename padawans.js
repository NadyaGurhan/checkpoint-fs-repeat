const fs = require('fs')

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1)
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(el => +el)
}

function getStats() {
  const names = getPadawanNames()
  const scores = getLightsaberScores()
  let stats = names.map((name, index) => [name, scores[index]])
  return stats
}

function writeStats(stats) {
  const string = stats.map(arr => arr.join(' ')).join('\n')
  fs.writeFileSync('data/stats.txt', string)
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
