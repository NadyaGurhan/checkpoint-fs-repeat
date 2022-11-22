const fs = require('fs')


const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8')

function getPadawanNames() {
 return padawans.split('\n').filter(el => el != 0)
}

function getLightsaberScores() {
  let newArr = scores.split('\n')
  let result = []
  for(let i = 0; i < newArr.length; i++) {
    result.push(+newArr[i])
  }
  return result
}

function getStats() {
  let result = []
  const names = padawans.split('\n').filter(el => el != 0)
  const scores2 = getLightsaberScores()
  for (let i = 0; i < names.length; i++) {
    let padawan = new Set([`${names[i]} ${+scores2[i]}`])
    result.push(Array.from(padawan))
  }
  return result
}

console.log(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
