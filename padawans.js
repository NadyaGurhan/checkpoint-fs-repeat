const fs = require('fs');

const padawans = fs.readFileSync(__dirname + '/data/padawans.txt', 'utf-8');
const scores = fs.readFileSync(__dirname + '/data/scores.txt', 'utf-8');

function getPadawanNames() {
  const arrOfPads = padawans.split('\n');
  const correctPads = [];

  arrOfPads.forEach((els) => {
    if (els) correctPads.push(els);
  });
  return correctPads;
}

const getLightsaberScores = () => (scores.split('\n').map((num) => +num));

function getStats() {
  const correctPads = getPadawanNames();
  const correctScores = getLightsaberScores();
  const gettedStats = [];
  for (let i = 0; i < correctPads.length; i++) {
    gettedStats.push([correctPads[i], correctScores[i]]);
  }
  return gettedStats;
}

function writeStats() {
  let stats = getStats();
  stats = stats.map((els) => els.join(' ')).join('\n')
  fs.writeFileSync(__dirname + '/data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}