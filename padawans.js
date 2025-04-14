const fs = require('fs')
const {EOL} = require('os')

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8')
  return names.split(EOL).filter(name => name !== '');
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8')
  return scores.split(EOL).map(score => Number(score))
}

function getStats() {
  const arrNames = getPadawanNames();
  const arrScores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < arrNames.length; i++) {
      stats.push([arrNames[i], arrScores[i]])
  }
 return stats;
}

function writeStats() {
  const filePath = './data/stats.txt';
  const stats = getStats();
  const data = stats.map(stat => stat.join(' ')).join('\n') // С EOL тест не проходит
  fs.writeFileSync(filePath, data)
}
writeStats()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
