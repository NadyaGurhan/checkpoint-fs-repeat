const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const { EOL } = require('os');

function getPadawanNames() {
  return fs.readFileSync("./data/padawans.txt", 'utf8').trim().split(`${ EOL }`)
  }

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').split(`${ EOL }`).map((el) => Number(el))
}

function getStats() {
  const padawans = getPadawanNames()
  const scores = getLightsaberScores()

  newArr = []
  for (let i = 0; i < 4; i++) {
    newArr.push([padawans[i],scores[i]])
  }
  return newArr
}

function writeStats() {
  fs.writeFileSync('./data/stats.txt', `${getStats()[0].join(' ')}\n${getStats()[1].join(' ')}\n${getStats()[2].join(' ')}\n${getStats()[3].join(' ')}`)
}

writeStats()