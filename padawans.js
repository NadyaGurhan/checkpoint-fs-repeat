const fs = require('fs')

function getPadawanNames(){
  const names = fs.readFileSync('data/padawans.txt', 'utf8').split('\n')
  names.pop()
  return names
}
console.log(getPadawanNames())
function getLightsaberScores(){
  const stat = fs.readFileSync('data/scores.txt', 'utf8').split('\n')
  let result = stat.map(e => Number(e))
  return result
}

function getStats(){
  const name = getPadawanNames()
  const stat = getLightsaberScores()
  let result = name.map((e, i) => [e, stat[i]])
  return result
}

function writeStats(){
  const stat = getStats().join('\n').split(',').join(' ')
  fs.writeFileSync('data/stats.txt', stat)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
