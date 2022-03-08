const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')


function getPadawanNames() {
 return padawans.filter(el => el !== '')
}

function getLightsaberScores() {
  return scores.filter(el => el !== '').map(el => Number(el))
}

function getStats() {
  let name = getPadawanNames()
  let stat = getLightsaberScores()
  let arr = []

  for (let i = 0; i < name.length; i++) {
    arr.push([name[i], stat[i]])
  }
  return arr
}

function writeStats() {
  let result = getStats().map(el => `${el[0]} ${el[1]}`)
  return result.join('\n')
}
fs.writeFileSync('data/stats.txt', writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
