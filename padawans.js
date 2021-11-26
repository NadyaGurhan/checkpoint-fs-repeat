const fs = require('fs');

function getPadawanNames () {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}

function getLightsaberScores () {
  const arr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return arr.map((el) => +el)
}

function getStats () {
  let result = []
  const padawan = getPadawanNames()
  const scores = getLightsaberScores()
  for (let i = 0; i < padawan.length; i++) {
  result.push([padawan[i], scores[i]])
  
  }
  return result
}

function writeStats (data) {
  data = getStats()
  return fs.writeFileSync('./data/stats.txt',data.join('\n').replace(/,/g, ' '));
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
