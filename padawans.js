const fs = require('fs')
function getPadawanNames(){
  const getPadawan = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
  return getPadawan
}
// console.log(getPadawanNames())
function getLightsaberScores(){
  const getScores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n')
  return getScores.map(parseFloat)
 
}

function getStats(){
const padawan = getPadawanNames()
const scores = getLightsaberScores()
let result = []
for (let i = 0; i < padawan.length; i++){
  result.push([padawan[i], scores[i]])
}
return result
}

function writeStats (data) {
  data = getStats()
  return fs.writeFileSync('./data/stats.txt',data.join('\n').replace(/,/g, ' '));
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}

