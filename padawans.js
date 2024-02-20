const fs = require('fs')
const names = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8').split('\n')
const sabersString = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8').split('\n')
const sabers = sabersString.map((saber) => parseFloat(saber))

function getPadawanNames() {
  return names
}

function getLightsaberScores() {
  return sabers
}

function getStats() {
  return scores
}

const scoresArray = names.map((x) => x.split(','))

console.log(scores)

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
