const fs = require('fs');
const os = require('os');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split(os.EOL).filter(string => string.trim() !== '');
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split(os.EOL).map(score => Number(score))
}

function getStats() {
  const names = getPadawanNames()
  const score = getLightsaberScores()
  
  return names.map((name, index) => [name, score[index]])
}

function writeStats() {
  const stats = getStats();
  
  return fs.writeFileSync('./data/stats.txt', stats)
  // не сделал
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
