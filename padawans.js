const fun = require('fs')
// const padawans = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/padawans.txt', 'utf8').split('\n').slice(0, -1)
// console.log(padawans)


function getPadawanNames() {
  const padawans = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/padawans.txt', 'utf8').split('\n').slice(0, -1)
  return padawans
}
getPadawanNames()

function getLightsaberScores() {
  const scores = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/scores.txt', 'utf8').split('\n').map((el) => Number(el))
  return scores
}
getLightsaberScores()

// function getStats() {
//   const padawans = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/padawans.txt', 'utf8').split('\n').slice(0, -1)
//   const scores = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/scores.txt', 'utf8').split('\n').map((el) => Number(el))
// console.log(padawans)
// }

// const padawans = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/padawans.txt', 'utf8').split('\n').slice(0, -1)
// const scores = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/scores.txt', 'utf8').split('\n').map((el) => Number(el))

// console.log(padawans, scores, sum)
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};



