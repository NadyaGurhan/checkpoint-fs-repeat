const fs = require('fs');

const padawansRaw = fs.readFileSync('./data/padawans.txt', 'utf-8');
const padawans = Array.from(padawansRaw.split(/\n/));
const removed = padawans.splice(4, 1);
const scoresRaw = fs.readFileSync('./data/scores.txt', 'utf-8');
const scores = Array.from(scoresRaw.split(/\n/));
const scoresNumbers = scores.map((str) => Number(str));

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scoresNumbers;
}

function getStats() {
  const stats = new Array(4).fill([]);
  for (let i = 0; i < padawans.length; i += 1) {
    stats[i][0].push = padawans[i];
  }
  for (let j = 0; j < scoresNumbers.length; j += 1) {
    stats[i][1].push = scoresNumbers[i];
  }
  return stats;
}

function writeStats() {
  fs.appendFileSync('./data/stats.txt');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
