const fs = require('fs');
// const data = fs.readFileSync('checkpoint-fs/data/padawans.txt', 'utf8');
// console.log(data)

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt', 'utf8')
  return names.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  const names = fs.readFileSync('data/scores.txt', 'utf8')
  return names.split('\n').slice(0, -1).map(item => +item)
}

function getStats() {
  const names = getPadawanNames()
  const scores = getLightsaberScores()
  let array = []
  for (let i = 0; i < names.length; i++) {
    let tmp = [a, b] = [names[i], scores[i]]
    array.push(tmp)
  }
  return array
}

function writeStats() {
  let array = getStats()
  const res = array.join('\n').replace(/,/g, ' ')
  return fs.writeFileSync('data/stats.txt', res)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
