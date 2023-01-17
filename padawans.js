const fs = require('fs')

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
const getPadawanNames = () => padawans
const getLightsaberScores = () => scores.map(el => +el)

const getStats = () => {
  let result = []
  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], +scores[i]])
  }
  return result
}
const writeStats = () => {
  const text = getStats().join('\n').replace(/,/g, ' ')
  return fs.writeFileSync('./data/stats.txt', text)
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
