const fs = require('fs')
const {EOL} = require('os')

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').trim().split(EOL);
}

function getLightsaberScores() {
  const result = fs.readFileSync('./data/scores.txt', 'utf8').trim().split(EOL);
  return result.map(el => Number(el))
}

function getStats() {
const total = [] 
for (let i = 0; i < getPadawanNames().length; i++) {
  const result = []
  result.push(getPadawanNames()[i], getLightsaberScores()[i])
  total.push(result)
}
return total
}

function writeStats() {
  const result = getStats().join(EOL).replace(/,/g, ' ')
  return fs.writeFileSync('data/stats.txt', result)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
