const fs = require ('fs')


function getPadawanNames () {
  const text = fs.readFileSync('./data/padawans.txt', 'utf8')
return text.trim().split('\n')

}


function getLightsaberScores () {
  const score = fs.readFileSync(`./data/scores.txt`, 'utf8')
  return Number(score)
  // let arr = []
  // arr.push(score)
  // let num = Number(arr)
  // return num
//  return score.trim().split('\n')
}

function getStats () {
  // let arr = []
  // let arr2 = []
  // const names = getPadawanNames()
  // const scores = getLightsaberScores()
  // arr.push(names)
  // arr2.push(scores)
  // return names + scores
 
}

getStats()


function writeStats () {
  fs.writeFileSync(`data/stats.txt`)
}







module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


