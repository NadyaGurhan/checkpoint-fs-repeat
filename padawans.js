const fs = require('fs')
let padawans = fs.readFileSync('./data/padawans.txt', 'utf8')
let scores = fs.readFileSync('./data/scores.txt', 'utf8')

function getPadawanNames() {
  let result = padawans.split('\n') //проебразуем в массив
  result.pop() //
  return result
}
// console.log(getPadawanNames())

function getLightsaberScores() {
  let result = scores.split('\n').map((el) => +el) // из строки массива делам массив чисел
  return result
}
// console.log(getLightsaberScores())

function getStats() {
  let scores = getLightsaberScores()
  let padawans = getPadawanNames()
  let main = []
  let result = []
  for (let i = 0; i < padawans.length; i++) {
    result = [padawans[i], scores[i]]
    main.push(result)
  }
  return main
}
// console.log(getStats())

function writeStats() {
  let stats1 = getStats()
  const stats = stats1.map((item) => item.join(' ')).join('\n')
  let statsFile = fs.writeFileSync('data/stats.txt', stats)
  const data = fs.readFileSync('data/stats.txt', 'utf8') // храним в этом файле наш результат
  return data
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}
