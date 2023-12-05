const fs = require('fs');

const readPadawansScores = fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n');
const readPadawansNames = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');

function getPadawanNames() {
  return readPadawansNames;
}

function getLightsaberScores() {
  return readPadawansScores.map((el) => Number(el));
}

function getStats() {
  const PADAWANS_STATS = [];
  for (let i = 0; i < readPadawansNames.length; i += 1) {
    PADAWANS_STATS.push([readPadawansNames[i], Number(readPadawansScores[i])]);
  }
  return PADAWANS_STATS;
}

function writeStats(padawanStats) {
  const writeStats = padawanStats.join('\n').replace(/,/g, ' ');
  fs.writeFileSync('./data/stats.txt', writeStats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
