const fs = require('fs')
function getPadawanNames(){
  return fs.readFileSync('./data/padawans.txt','utf-8').trim().split('\n')
}

function getLightsaberScores(){
 return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(el => Number(el) )
}

function getStats(){
  let arr  = []
  let name = getPadawanNames()
  let score = getLightsaberScores()
  for (let i = 0; i < name.length; i++) {
    let res = []
    res.push(name[i],score[i])
    arr.push(res)
  }
return arr
}

function writeStats(){
   let add = getStats()
  fs.writeFileSync('./data/stats.txt',add.join('\n').replace(/,/g, ' '))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
