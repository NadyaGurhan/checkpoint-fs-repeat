const fs = require('fs')

function getPadawanNames() {
  let result = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
  return result.filter(el => el !== '')
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(el => +el)
}

function getStats() {
  let padawans = getPadawanNames();
  let scores = getLightsaberScores();
  return padawans.map((el, i) => [el, scores[i]])
}


function writeStats(){
  let list = getStats()
  let result = list.map(el => el.join(' '))
  result.forEach(el => fs.appendFileSync('data/stats.txt', `${el}\n`))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
