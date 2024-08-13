const fs = require('fs')

const arr = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
const sword = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n')

function getPadawanNames(){
  
  return arr
}

function getLightsaberScores() {
  const bestSword = sword.sort((a, b) => b - a).map((el) => Number(el))
  console.log(bestSword)
  return bestSword
}

function getStats() {
  const array = []
  for(let i = 0; i < arr.length; i++){
    array.push([arr[i], +sword[i]])
  }
  return array
}

function writeStats() {
  const data = getStats()
  let newFile = data.map((el) => el.join(' '))
  return fs.writeFileSync('./data/stats.txt', newFile.join('\n'))
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
