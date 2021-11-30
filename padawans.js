const fs = require('fs');


function getPadawanNames(){
 return fs.readFileSync('data/padawans.txt', 'utf-8').trim ().split('\n')
// console.log(a)
}
// getPadawanNames()

function getLightsaberScores(){
  const getScores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n')
  return getScores.map(parseFloat)
}
// getLightsaberScores()

function getStats(){
  const padawan = getPadawanNames()
  const score = getLightsaberScores()
  let result = []

  for (let i = 0; i < padawan.length; i++){
    result.push([padawan[i] , score[i]])
  }
  // console.log(result)
  return result

}
function 
// getStats()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
