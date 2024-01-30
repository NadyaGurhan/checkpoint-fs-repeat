const fs = require('fs')

function getPadawanNames() {
let readFile = fs.readFileSync('./data/padawans.txt', 'utf8')
let res = readFile.split('\n')
res.pop()
return res
}

function getLightsaberScores() {
  let readFile = fs.readFileSync('./data/scores.txt', 'utf8')
let splittedNum = readFile.split('\n')
let res = splittedNum.map ( (el) => Number(el))
return res
}

function getStats() {
let names = getPadawanNames();
let scores = getLightsaberScores();
let res = names.map ( (el1, el2) => [el1, scores[el2]] )
return res
}

function writeStats() {
  let names = getStats()
  let strNames = names.join('\n')
  let res = strNames.replaceAll(',',' ')
  let writeFile = fs.writeFileSync('data/stats.txt', res, 'utf8')
  return writeFile
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
