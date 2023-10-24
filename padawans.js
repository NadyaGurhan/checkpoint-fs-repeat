const fs = require('fs')

function getPadawanNames(){
  const file = fs.readFileSync('./data/padawans.txt', 'utf8')
  return file.split('\n')
}

function getLightsaberScores(){
  const file = fs.readFileSync('./data/scores.txt', 'utf8')
  const arr = file.split('\n')
  return arr.map((el) => Number(el))
}

function getStats(){
  const file1 = getPadawanNames()
  const file2 = getLightsaberScores()
  const arr = []
  for(let i = 0; i < file1.length; i++){
    arr.push([file1[i], file2[i]])
  }
  return arr
}

function writeStats(){
  const stats = getStats()
  fs.writeFileSync('./data/stats.txt',stats.join('\n').replaceAll(',', ' '),  'utf8')
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
   writeStats,
};
