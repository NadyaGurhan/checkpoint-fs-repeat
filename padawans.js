const fs = require('fs')

function getPadawanNames() {
  return fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').splice(0, 4)
}

function getLightsaberScores(){
  return fs.readFileSync('data/scores.txt', 'utf-8').split('\n').map((el) => Number(el))
}


function getStats(){
  const LightsaberScores = getLightsaberScores();
  const PadawanNames = getPadawanNames();
  const arr = [];
  for (let i = 0; i < PadawanNames.length; i++) {
   arr.push([PadawanNames[i], LightsaberScores[i]])
  }
  return arr
}


function writeStats(){
  const stats = getStats()
  const writeFile = fs.writeFileSync('data/stats.txt', 'getStats', 'utf-8')
  return writeFile.join("\n")
}









module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
