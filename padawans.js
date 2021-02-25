const fs = require('fs');

function getPadawanNames() {
    const data = fs.readFileSync('./data/padawans.txt', 'utf8')
    return data.trim()
               .split('\n')
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf8')
  return data.split('\n')
             .map((el) => Number(el))
}

function getStats() {
  const names = getPadawanNames()
  const scores = getLightsaberScores()
  return names.map((el, i) => [el, scores[i]])
}

function writeStats() {
  const data = getStats().map((el) => el
                         .join(' '))
                         .join('\n')
  fs.writeFileSync('./data/stats.txt', data)
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
