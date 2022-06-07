const fs = require('fs')


function getPadawanNames () { 
  const names = fs.readFileSync('.data/padawans.txt', 'utf8').trim().split('\n')
  return names
  }
  console.log(getPadawanNames())



function getLightsaberScores () { 
  const scores = fs.readFileSync('.data/scores.txt', 'utf8').trim().split('\n')
  return scores
}
console.log(getLightsaberScores());



function getStats () {
  let stats = []
  const scores = fs.readFileSync('.data/scores.txt', 'utf8').trim().split('\n')
  const names = fs.readFileSync('.data/padawans.txt', 'utf8').trim().split('\n')
  for (i = 0; i <= names.length; i ++) {
    stats.push (names[i] + scores[i])
  }
  return stats
 }
console.log(getStats())




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};


