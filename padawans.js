const fun = require('fs')



function getPadawanNames() {
  const padawans = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/padawans.txt', 'utf8').split('\n').slice(0, -1)
  return padawans
}


function getLightsaberScores() {
  const scores = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/scores.txt', 'utf8').split('\n').map((el) => Number(el))
  return scores
}


function getStats() {
  const padawans = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/padawans.txt', 'utf8').split('\n').slice(0, -1)
  const scores = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/scores.txt', 'utf8').split('\n').map((el) => Number(el))
  const list = padawans.map((el, ind) => [el, scores[ind]])
  return list

}
// console.log(getStats())

function writeStats() {
  const padawans = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/padawans.txt', 'utf8').split('\n').slice(0, -1)
  const scores = fun.readFileSync('/Users/a1/Desktop/ElbrusBootcamp/checkpoint-fs/data/scores.txt', 'utf8').split('\n').map((el) => Number(el))
  const list = padawans.map((el, ind) => `${el} ${scores[ind]}`)
  return fun.writeFileSync('data/stats.txt', list.join('\n'))
}
// writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};



