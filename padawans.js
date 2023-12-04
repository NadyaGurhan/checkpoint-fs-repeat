const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
   const readFile = fs.readFileSync('data/padawans.txt', 'utf8').split('\n')
   return readFile.slice(0, -1)
}
function getLightsaberScores() {
  const readFile = fs.readFileSync('data/scores.txt', 'utf8').split('\n')
  const newArr= readFile.map(el => +el);
  return newArr
}
function getStats() {
  const readFile1 = getPadawanNames()
  const readFile2 = getLightsaberScores() 
  const newArr = []
  for (let i = 0; i < readFile1.length; i++) {
    newArr.push([readFile1[i], readFile2[i]]);
  }
  return newArr
}
function writeStats() {
  fs.writeFileSync('data/stats.txt', getStats().join('\n'), 'utf8')

}