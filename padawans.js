const fs = require('fs')

const getPadawanNames = () => {
  let res = fs.readFileSync('./data/padawans.txt','utf-8')
 return res.split('\n')

}
const getLightsaberScores = () => fs.readFileSync('./data/scores.txt','utf-8')
const getStats = (getPadawanNames,getLightsaberScores) => {
  const newNames = getPadawanNames.split('\n')
  const newScore = getLightsaberScores.split('\n')
  res = []
  for (let i = 0 ; i < newNames ; i++ ) {
    res.push(newNames[i],newScore[i])
  }
}

const writeStats = (res) => {
  fs.writeFileSync('./data/stats.txt',res)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};