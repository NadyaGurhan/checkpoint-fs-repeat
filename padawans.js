const fs = require('fs')

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8').trim()
  const names = data.split('\r\n')
  return names
}

function getLightsaberScores(){
  const data = fs.readFileSync('data/scores.txt', 'utf-8').trim()
  const scores = data.split('\r\n')
  const names = scores.map(Number)
  return names
}

function getStats (){
  const data = fs.readFileSync('data/padawans.txt', 'utf-8').

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
