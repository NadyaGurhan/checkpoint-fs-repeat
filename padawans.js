const fs = require('fs')


function getPadawanNames() {
  const filePath = 'data/padawans.txt'
  const arr = []
  let data = fs.readFileSync(filePath, 'utf-8')
  arr.push(data)
    return arr
}

function getLightsaberScores() {
  const filePath = 'data/scores.txt'
  const arr = []
  let data =
}

function getStats() {

}

function writeStats() {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};