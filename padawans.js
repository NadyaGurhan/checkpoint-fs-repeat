const fs = require('fs')


function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawans.pop();
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  scores.pop();
  return scores;
}


function getStats () {
  const newArr = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i++) {
    newArr.push(padawans[i], scores[i])
  }
  return arr
}

 function writeStats() {
  const stats = getStats()
  return fs.readFileSync(('./data/stats.txt', 'utf8').split('\n')
 }


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}