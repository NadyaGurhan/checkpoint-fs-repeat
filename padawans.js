const fs = require('fs');

function getPadawanNames (filename = 'data/padawans.txt') {
const padawans  = fs.readFileSync(filename, 'utf-8').trim().split('\n')
return padawans
}
 function getLightsaberScores (filename = 'data/scores.txt') {
const padawansScores = fs.readFileSync(filename, 'utf-8').trim().split('\n').map(el => +el)
return padawansScores
}
 function getStats () {
   let padawansInfo = []
   let arr = getPadawanNames()
   let arrScore = getLightsaberScores()
for (let i = 0; i < arr.length; i++) {
  padawansInfo.push([arr[i], arrScore[i]])
}
return padawansInfo
}
 function  writeStats () {
let info = getStats()
let textInfo = fs.writeFileSync(`data/stats.txt`, info.map(el => el.join(' ')).join('\n'))

return textInfo
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
