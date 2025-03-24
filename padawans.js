const fs = require('fs')
const { EOL } = require('os')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8')
  return names.split(EOL)
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8')
  return scores.split(EOL).map(Number)
}

function getStats() {
  let result = []
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL)
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split(EOL)
  for (let i = 0; i < names.length; i++) {
    result.push(`${names[i]}, ${scores[i]}`)
  }
  return result
}

function writeStats() {

}

