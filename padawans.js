const fs = require('fs')

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt').toString().split('\n').filter(el => el != '')
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt').toString().split('\n').filter(el => el != '').map(el => +el)
}


function getStats() {
  let arr1 = getPadawanNames()
  let arr2 = getLightsaberScores()
  return arr1.map((el,index) => {
    return [el, arr2[index]]
  })
}

function writeStats() {
  let arr1 = getPadawanNames()
  let arr2 = getLightsaberScores()
  let arr3 = arr1.map((el,index) => {
    return [`${el} ${arr2[index]}`]
  })
  fs.writeFileSync('./data/stats.txt', `${arr3.join('\n')}`) 
}

writeStats()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
