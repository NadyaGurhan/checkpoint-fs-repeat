const fs = require('fs')


function getPadawanNames() {
  let padawansList = fs.readFileSync('data/padawans.txt', 'utf8')
  return padawansList.split('\n')
}

function getLightsaberScores() {
  let lightsaberScores = fs.readFileSync('data/scores.txt', 'utf8')
  return lightsaberScores.split('\n')
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

