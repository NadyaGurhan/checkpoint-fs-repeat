const fs = require('fs')

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8');
  const data =  names.split('\n');
  return data.slice(0, -1)
}


function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8');
  const data2 = scores.split('\n')
  return data2.map(Number)
}

function getStats() {
  const nams = getPadawanNames()
  const scor = getLightsaberScores()
  const full = []
  for (let i = 0; i <nams.length; i++) {
    full.push([nams[i], scor[i]])
  }
  return full
}


function writeStats() {
  const result = getStats().join('\n') // пробелы
  fs.writeFileSync('./data/stats.txt', result, 'utf8')
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
