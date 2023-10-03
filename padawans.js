const fs = require('fs')

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1)
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map(elem => Number(elem))
}

const padawanNames = getPadawanNames();
const marksList = getLightsaberScores();

function getStats() {
  const arr = [];
  for (let index = 0; index < 4; index++) {
    arr.push([padawanNames[index], marksList[index]])
  }

  return arr
}

function writeStats(stats) {
  let newFile = fs.writeFileSync('./data/stats.txt', 'utf8');
  fs.writeFileSync('./data/stats.txt', `${stats.map(elem => (String(elem[0]) + String(elem[1])).split(',')).join('\n')}`)
}

writeStats(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
