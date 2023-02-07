const fs = require('fs')


function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
}

function getLightsaberScores() {
  let result = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map((el) => Number(el))
  return result
}

function getStats() {
  let padawan = getPadawanNames()
  let scoreDamage = getLightsaberScores()
  let result = []
  for (let i = 0; i < padawan.length; i++) {
    if (padawan[i] == padawan[i]) {
      result.push([padawan[i] + `, ` + scoreDamage[i]])
    }
  }
  // return result
  console.log(result)
}

function writeStats() {
  // let score = fs.readFileSync('data/stats.txt', 'utf8')
  // console.log(score)

}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
