const fs = require('fs')
function getPadawanNames () {
  const readPadawans = fs.readFileSync('.data/padawans.txt', 'utf-8');
  const padawans = readPadawans.split('\n').slice(0,-1);
  return padawans   
}
function getLightsaberScores () {
  const readScores = fs.readFileSync('.data/scores.txt', 'utf-8');
  const scores = readScores.split('\n').map((scores) => Number(scores));
  return scores
}

function getStats () {
  const names = getPadawanNames()
  const scores = getLightsaberScores()
  const stats = []
  const stat = names.map((el,i) => stats.push(el, scores(i)))
  return stats
}
function writeStats (){
  
}
console.log(getStats())
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
