const fs = require('fs')


function getPadawanNames() {
  let name = fs.readFileSync('./padawans.txt', 'utf-8')
  const result = name.split('\n')
  result.pop()
  console.log(result);
  return result
}

function getLightsaberScores() {
  let score = fs.readFileSync('./scores.txt', 'utf-8')
  const result = score.split('\n')
  result.pop()
  let res = []
  for (let i = 0; i < result.length; i++) {
    res.push(+result[i])
  }
  return res
}

function getStats() {
  let score = fs.readFileSync('./scores.txt', 'utf-8')
  const resultScores = score.split('\n')
  let name = fs.readFileSync('./padawans.txt', 'utf-8')
  const resultPadawans = name.split('\n')
  let res = []
  for (let i = 0; i < resultPadawans.length; i++) {
    res.push([resultPadawans[i], +resultScores[i]])
  }
  res.pop()
  console.log(res);
}
console.log(getStats());

function writeStats(file){
  return fs.writeFileSync('data/stats.txt', file)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
