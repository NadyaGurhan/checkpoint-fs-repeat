const fs = require('fs')

function getPadawanNames() {
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let padawansName = padawans.split('\r\n')
  let padawansList = []
  for (let i = 0; i < padawansName.length - 1; i++){
  padawansList.push(padawansName[i])
  }
  return padawansList
}

function getLightsaberScores() {
  let lightSaber = fs.readFileSync('./data/scores.txt', 'utf-8')
  let lightSaberSc = lightSaber.split('\r\n')
  let LSS = []
  for (let i = 0; i < lightSaberSc.length ; i++){
  LSS[i] = Number(lightSaberSc[i])

  }
  return LSS
}

function getStats() {
  let jediName = getPadawanNames()
  let score = getLightsaberScores()
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
