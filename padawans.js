const fs = require('fs');

function getPadawanNames() {
  const infoPadawan = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return infoPadawan;
}

console.log(`getPadawanNames() = ${getPadawanNames()}`);

function getLightsaberScores() {
  const infoScores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
  return infoScores.map(Number);
}

console.log(`getLightsaberScores() = ${getLightsaberScores()}`);

function getStats() {
  infoPadawan = getPadawanNames();
  infoScores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < infoPadawan.length; i++) {
    stats.push([]);
    stats[i].push(infoPadawan[i]);
    stats[i].push(infoScores[i]);
  }
  return stats;
}

console.log(getStats());

function writeStats() {
  const txt = getStats();
  fs.writeFileSync('./data/stats.txt', txt.join('\n').replace('/,/g', ' '));
}

console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
