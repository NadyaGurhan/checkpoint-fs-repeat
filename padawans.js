const fs = require('fs')
function getPadawanNames(){
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8').trim()
  return padawan.split('\r\n')
}

function getLightsaberScores(){
  const scores = fs.readFileSync('./data/scores.txt','utf-8').trim()
  return scores.split('\r\n').map((el) => Number(el))
}

function getStats(){
  const padawan = getPadawanNames()
  const scores = getLightsaberScores()
  const result = []
  for(let i = 0; i < padawan.length; i ++)
    result.push([padawan[i], scores[i]]) 
  return result
}

function writeStats(){
  const result = getStats()
  const data = result.map((el) => el.join(' '))
  .join('\r\n') + '\r\n'
  fs.writeFileSync('data/stats.txt', data)
}


getPadawanNames()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
