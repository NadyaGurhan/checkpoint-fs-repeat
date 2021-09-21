const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')


function getPadawanNames() {
  let result = [];
  for (let i = 0; i < padawans.length; i += 1) {
    if (padawans[i] !== '')
    result.push(padawans[i])
  }
  return result
}

function getLightsaberScores() {
  let result = [];
  for (let i = 0; i < scores.length; i += 1) {
    if (scores[i] !== '')
    result.push(+scores[i])
  }
  return result

}

function getStats() {
  let pada = getPadawanNames()
  let scor = getLightsaberScores()
  let result = []

  result = pada.map(el => el.split(', '))

  for (let i = 0; i < result.length; i += 1) {
    result[i].push(scor[i])
  }

  return result
}

function writeStats() {
  let write = getStats()
  let result = write.map(el => `${el.join(' ')}`).join('\n')

  fs.writeFileSync('data/stats.txt', result);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
