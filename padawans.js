const fs = require('fs')

getPadawanNames = () => {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n')
  return names.slice(0, names.length - 1)
}

getLightsaberScores = () => {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n')
  return scores.map(Number)
}

getStats = () => {
  const namesArr = getPadawanNames()
  const scoresArr = getLightsaberScores()
  const newArr = []
  namesArr.forEach((el, i) => {
    newArr.push([namesArr[i], scoresArr[i]])
  });
  return newArr
}

writeStats = () => {
  fs.appendFileSync('./data/stats.txt', getStats().map((el) => el.join(' ')).join('\n'))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
