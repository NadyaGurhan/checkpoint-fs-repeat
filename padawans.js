const fs = require('fs')

function getPadawanNames() {
  const padawansArr = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawansArr;
}
getPadawanNames()

function getLightsaberScores() {
  const scoreArr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  let newScore = [];
  scoreArr.forEach((el) => newScore.push(Number(el)))
  return newScore;

}
getLightsaberScores()

function getStats() { 
  let arr = getPadawanNames();
  let arr2 = getLightsaberScores();
  let newStat = [];
  for (let i = 0; i < arr.length; i += 1) {
    newStat.push([arr[i], arr2[i]])
  }
  return newStat;
}
getStats()

function writeStats(){
  const stat = getStats().flat().join('\n')
  fs.writeFileSync('./data/stats.txt', `${stat}`)
}
writeStats()


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
