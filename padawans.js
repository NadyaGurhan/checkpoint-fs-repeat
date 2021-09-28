const fs = require('fs');

function getPadawanNames() {
  const padawansNames = fs.readFileSync('./data/padawans.txt', 'utf-8');

  return padawansNames.trim().split('\n');
}

function getLightsaberScores() {
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const result = lightsaberScores.trim().split('\n')
  const resultNum = []
  for (let i = 0; i < result.length; i++) {
    resultNum.push(Number(result[i]));
    
  }
  return resultNum;
}

function getStats() {
  const stats = [];
  const padawansNames = getPadawanNames();
  const lightsaberScores = getLightsaberScores();

  for (let i = 0; i < padawansNames.length; i++) {
    stats.push([padawansNames[i], lightsaberScores[i]]);
  }
  return stats;
}

function writeStats() {
  const stats = getStats();
  for (let i = 0; i < stats.length; i++) {
    fs.appendFileSync('data/stats.txt', `${stats[i]}\n`, 'utf8');
  }
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
