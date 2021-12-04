const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').filter(a => a !== '');
}

function getLightsaberScores() {
  return fs.readFileSync('data/scores.txt', 'utf-8').split('\n').filter(a => a !== '').map(a => +a);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const padawansScores = padawans.reduce((acc, item, index) => {
    acc.push([item, scores[index]]);
    return acc;
  }, []);
  return padawansScores;
}

function writeStats() {
  const stats = getStats();
  for(let item of stats) {
    fs.appendFileSync('data/stats.txt', `${item.join(' ')}\n`)
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
