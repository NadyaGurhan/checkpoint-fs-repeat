const fs = require('fs');

function getPadawanNames() {
  let data = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let arrData = data.split('\n');
  arrData.pop()
  return arrData
}

function getLightsaberScores() {
  let data = fs.readFileSync('./data/scores.txt', 'utf-8')
  let arrData = data.split('\n').map(element => +element)
  return arrData
}

function getStats() {
  let padawan = getPadawanNames();
  let lightsaberScores = getLightsaberScores();
  let stats = [];
  padawan.forEach((elem, index) => {
    stats.push([elem,lightsaberScores[index]])
  })
  return stats
}


function writeStats() {
  let stats = getStats()
  let newStats = stats.map(el => el.join(' ')).join('\n')

  fs.writeFileSync('./data/stats.txt', newStats)
}
console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
