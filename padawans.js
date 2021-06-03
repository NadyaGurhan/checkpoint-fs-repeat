const fs = require('fs')

const filePath = 'data/padawans.txt'
const data = fs.readFileSync(filePath, 'utf-8')
const filePath2 = 'data/scores.txt'
const data2 = fs.readFileSync(filePath2, 'utf-8')

function getPadawanNames(){
    return data.substring(0,data.length - 1).split('\n')
}
function getLightsaberScores(){
  return data2.split('\n').map(el => (+el))
}
function getStats(){
  let arrname = getPadawanNames()
  let arrstat = getLightsaberScores()
  let tabel = arrname.map((el, i) => ([el,arrstat[i]]) )
  return tabel
}
function writeStats(){
  let asd = getStats().join('\n')
  let result = ''
  result = asd.replace(/,/g, ' ')
  fs.writeFileSync('data/stats.txt', result)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
