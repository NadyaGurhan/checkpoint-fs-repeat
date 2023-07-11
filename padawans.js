const fs = require('fs')
let filePath = './data/padawans.txt'
let utf = 'utf8'
let fileScores = './data/scores.txt'

function getPadawanNames() {
  let data = fs.readFileSync(filePath, utf)
  let padawan = data.split('\n')
  padawan.pop()
  return padawan
}

function getLightsaberScores() {
  let data = fs.readFileSync(fileScores, utf) 
  let scores = data.split('\n')
  let score = scores.map(el => Number(el))
  return score
}

function getStats() {
  let padawans = fs.readFileSync(filePath, utf) 
  let scores = fs.readFileSync(fileScores, utf)  
  let padawan = padawans.split('\n')
  padawan.pop()
  let scoresPadawan = scores.split('\n')
  let score = scoresPadawan.map(el => Number(el))
  let array = []
  for (let i = 0; i < padawan.length; i++ ) {
    let arr = []
    arr.push(padawan[i], score[i])
    array.push(arr)
  }
  return array
}

function writeStats() {
  let padawans = fs.readFileSync(filePath, utf) 
  let scores = fs.readFileSync(fileScores, utf)  
  let padawan = padawans.split('\n')
  padawan.pop()
  let scoresPadawan = scores.split('\n')
  let score = scoresPadawan.map(el => Number(el))
  let result = ''
  for (let i = 0; i < padawan.length; i++ ) {
    result += `${padawan[i]} ${score[i]}\n`
  }
  let padawanScores = result.slice(0, result.length - 1)
  fs.appendFileSync('./data/stats.txt', padawanScores)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

