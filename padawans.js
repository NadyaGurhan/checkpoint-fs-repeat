const fs = require('fs');



function getPadawanNames() {
  let resultName = fs.readFileSync('data/padawans.txt', 'utf8').split('\n')
  return resultName
}



function getLightsaberScores() {

  resultNum = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => Number(el))
  return resultNum
}




function getStats() {
  let padawan = getPadawanNames()
  let scores = getLightsaberScores()
  resultStat = []
  for (let i = 0; i < padawan.length; i++) {
    resultStat.push([padawan[i], scores[i]])
  }
  return resultStat
}
let stats=getStats()

function writeStats (){
  let stats=getStats().join('\n').split(',').join(' ').trim()
  let stat=fs.writeFileSync ('data/stats.txt', stats,'utf8')
  // return stats
  }
  // console.log(writeStats())

 


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
