const fs = require('fs');

function getPadawanNames() {
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  padawans = padawans.split('\n');
  padawans.pop();
  return padawans;
}

function getLightsaberScores() {
  let lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  lightsaberScores = lightsaberScores.split('\n');
  for (let i = 0; i < lightsaberScores.length; i += 1) {
    lightsaberScores[i] = Number(lightsaberScores[i]);
  }
  return lightsaberScores;
}

function getStats() {
  const padawans = getPadawanNames();
  const lightsaberScores = getLightsaberScores();

  const stats = [];
  for (let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], lightsaberScores[i]]);
  }
  return stats;
}

function writeStats() {
  const stats = getStats();
  for (let i = 0; i < stats.length; i += 1) {
    if (i < stats.length - 1) {
      fs.appendFileSync('./data/stats.txt', `${stats[i].join(' ')}\n`);
    } else {
      fs.appendFileSync('./data/stats.txt', `${stats[i].join(' ')}`);
    }
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
