const fs = require('fs');

const getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf8').split('\n', 4);

function getLightsaberScores() {
  const scoreTxt = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  const getPadawanScores = [];
  for (let i = 0; i < scoreTxt.length; i++) {
    getPadawanScores.push(+scoreTxt[i]);
  }
  return getPadawanScores;
}

function getStats() {
  const padawanNames = getPadawanNames();
  const padawanScores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < padawanNames.length; i++) {
    stats.push([padawanNames[i], padawanScores[i]]);
  }
  return stats;
}

function writeStats(stats) {
  const statsJoin = [];
  for (let i = 0; i < stats.length; i++) {
    statsJoin.push(stats[i].join(' ').split());
  }
  return fs.writeFileSync('./data/stats.txt', statsJoin.join('\n'))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
