const fs = require('fs');
const {EOL} = require('os')

function getPadawanNames() {
  const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
  const padawansArr = padawans.split(EOL).slice(0, -1)
  return padawansArr;
}
getPadawanNames();

function getLightsaberScores() {
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');
  const scoresArr = scores.split(EOL).map(el => Number(el))
return scoresArr
}
getLightsaberScores()

function getStats() {
  const padawans = getPadawanNames()
  const scores = getLightsaberScores() 
  const stats = padawans.map((name, index) => [name, scores[index]])
 
return stats
}
getStats() 

function writeStats() {
  const stat = getStats()
  const statArr = stat.map(line => line.join(' '))
  const statStr = statArr.join('\n')
  const statsData = fs.writeFileSync(`${__dirname}/data/stats.txt`, statStr)
}

writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
