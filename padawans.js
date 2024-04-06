const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// TODO прочитать файл и вернуть полученные данные ( падаванов )
function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return padawanNames;
}

function getLightsaberScores() {
  const scores = [];
  const saberScores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
  saberScores.map((el) => scores.push(+el));

  return scores;
}

function getStats() {
  const stats = [];
  const pNames = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  const sScores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
  for (let i = 0; i < pNames.length; i++) {
    stats.push([pNames[i], +sScores[i]]);
  }
  return stats;
}

function writeStats(stats) {
  const newStat = stats.join('\n').replaceAll(',', ' ');
  fs.writeFileSync('./data/stats.txt', newStat, 'utf-8');
}
writeStats(getStats());
console.log(getStats());
