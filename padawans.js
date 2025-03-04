const fs = require('fs')

function getPadawanNames(){
  const list = (fs.readFileSync('data/padawans.txt', 'utf-8')).trim()
  const arr = list.split('\r\n')
  return arr
}

function getLightsaberScores(){
  const list = (fs.readFileSync('data/scores.txt', 'utf-8')).trim()
  const arr = list.split('\r\n')
  const newArr = arr.map((el) => Number(el))
  return newArr
}

function getStats(){
const names = getPadawanNames()
const scores = getLightsaberScores()
let result = []
for (let i = 0; i < 4; i++){
  result.push([names[i], scores[i]])
}
return result
}

function writeStats(){
  const data = getStats().join(',')
  data.replace(/,\s*$/, ' ')
  const file = fs.writeFileSync('data/stats.txt', data )
  const stat = fs.statSync('data/stats.txt')
  return stat
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
