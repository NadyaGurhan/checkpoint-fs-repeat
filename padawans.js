const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  const readPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawans = readPadawans.split('\n').slice(0, -1);
  return padawans;
}

function getLightsaberScores() {
  const rScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scores = rScores.split('\n').map((score) => Number(score));
  return scores;
}
 function getStats() {
      const arr = []
      const scores = getLightsaberScores()
      const padawans = getPadawanNames()
      for (i = 0; i < scores.length; i++) {
        const stat = (scores[i] + padawans[i])
        arr.push(stat)
      }
    }
 function writeStats() {
      const dir = './data/scores.txt'
      const statistic = getStats().join('\n').replace(/,/g, ' ');
      fs.writeFileSync('dir', statistic)
    }
// есть некоторые пробелы со связкой и мапом) так же с jest, по задачам вроде нормально, но не могу связать из-за пробелов