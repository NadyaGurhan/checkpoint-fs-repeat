const fs = require('fs');

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n').slice(0, -1);
  const names = [];
  names.push(read);
  return names.flat();
}

getPadawanNames();

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\r\n').map((el) => Number(el));
  return score;
}

getLightsaberScores();

function getStats() {
  const padawans = getPadawanNames();
  const lightsaberScores = getLightsaberScores();

  const stats = [];
  for (let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], lightsaberScores[i]]);
  }
  return stats;
}

getStats();

function writeStats() {
  const data = getStats().join('\n').replace(/[,]/g, ' ');
  console.log(data);
  fs.writeFileSync('data/stats.txt', data);
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
