const fs = require('fs')

function getPadawanNames() {
  const padawansContent = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawans = padawansContent.split('\n')
  return padawans
}

function getLightsaberScores() {
  const scoreContent = fs.readFileSync('./data/scores.txt', 'utf-8');
  const score = scoreContent.split('\n')
  const scoreNum = score.map(score => Number(score))
  return scoreNum
}

function getStats () {
  const stats = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    let padawanScore = []
    padawanScore.push(getPadawanNames()[i], getLightsaberScores()[i])
    stats.push(padawanScore)
  }
  return stats
}

function writeStats() {
  let allStats = ''
  getStats().forEach(item => {
    allStats += `${item}\n`
  })
  fs.writeFileSync('./data/stats.txt', allStats)
} 

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats
};
