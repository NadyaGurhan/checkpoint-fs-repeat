const fs = require('fs');


const getPadawanNames = () => {
  const getNames = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n')
  return getNames
}

const getLightsaberScores = () => {
  const score = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => +el)
  return score
}
const getStats = () => {
  const names = getPadawanNames()
  const getScore = getLightsaberScores()
  const stat = []
  for (let i = 0; i < names.length; i++){
    stat.push([names[i], getScore[i]])
  }
  return stat
}
getStats()

const writeStats = () => {
  const data = getStats()
  const write = fs.writeFileSync('./data/stats.txt', data).join('\n')

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


