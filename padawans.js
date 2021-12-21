const fs = require('fs');

function getPadawanNames() {
  let a = fs.readFileSync('data/padawans.txt', 'utf-8')
  let arr = a.split("\n")
  arr.pop()
  return arr
}

function getLightsaberScores() {
  let a = fs.readFileSync('data/scores.txt', 'utf-8')
  let arr = a.split("\n")
  return arr.map(item => +item)
}

function getStats() {
  let name = fs.readFileSync('data/padawans.txt', 'utf-8').split("\n")
  let number = fs.readFileSync('data/scores.txt', 'utf-8').split("\n")
  name.pop()
  let arr3 = []
  for (i = 0; i < name.length; ++i) {
    arr3[i] = [name[i], +number[i]]
  }
  fs.writeFileSync('data/stats.txt', arr3.reduce((accum, item) => accum += item + '\n', ""), (err) => {
    if (err) console.log(err)
  })
  return arr3
}

function writeStats() {
  let name = fs.readFileSync('data/padawans.txt', 'utf-8').split("\n")
  let number = fs.readFileSync('data/scores.txt', 'utf-8').split("\n")
  name.pop()
  let arr3 = []
  for (i = 0; i < name.length; ++i) {
    arr3[i] = name[i] + " " + number[i]
  }
  fs.writeFileSync('data/stats.txt', arr3.reduce((accum, item) => accum += item + '\n', ""), (err) => {
    if (err) console.log(err)
  })
}

writeStats()


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
