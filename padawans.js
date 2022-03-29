const fs = require('fs')
const padawans = fs.readFileSync('data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('data/scores.txt', 'utf-8')


function getPadawanNames() {
  let result = padawans.split('\n')
  return result.slice(0, result.length - 1)
}


function getLightsaberScores() {
  let result = scores.split('\n')
  let finalResult = result
  return finalResult.map((el) => Number(el))
}

function getStats() {
  let firstResult = padawans.split('\n')
  let requiredFirst = firstResult.slice(0, firstResult.length - 1)
  let secondResult = scores.split('\n')
  let requiredSecond = secondResult.map((el) => Number(el))
  let final = []
  let finalRes = []
  for (let i = 0; i < requiredFirst.length; i++) {
    final.push(firstResult[i], secondResult[i])

    // здесь не успел, но мысль - делим массив на подмассивы по правилу "взять по два элемента и сделать новым массив"

    return final
  }



  console.log(getStats())





  module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    // writeStats,
  };
