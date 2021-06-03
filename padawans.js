const fs = require('fs')

function getPadawanNames(){
  let data = fs.readFileSync('data/padawans.txt', 'utf-8')
  return data.split('\n').slice(0,4)
}

function getLightsaberScores() {
  let data = fs.readFileSync('data/scores.txt', 'utf-8')
  return data.split('\n').map((el) => Number(el))
}

function getStats () {
  let stats = []
  let key = getPadawanNames()
  let value = getLightsaberScores()
  for (let i = 0; i < key.length; i++){
    stats.push([key[i],value[i]])
  }
  return stats
}

function writeStats(stats){
  let newStats = stats.join('\n').split(',').join(' ')
  fs.writeFileSync('data/stats.txt', newStats)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
