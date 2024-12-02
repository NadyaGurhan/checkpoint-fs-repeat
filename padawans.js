const fs = require('fs')
const { EOL } = require('os')

function getPadawanNames(){
  const names = fs.readFileSync("./data/padawans.txt", 'utf-8').split(EOL).splice(0,4)
  return names
}

function getLightsaberScores(){
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL).map(Number)
  return scores
}

function getStats(){
  const name = getPadawanNames()
  const score = getLightsaberScores()
  const result = name.map((el, i) => [el, score[i]])
  return result
}
const stats = getStats()

function writeStats(stats){
  const data = stats.map((el) => el.join(' ')).join(EOL)
  fs.writeFileSync('data/stats.txt', data)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
