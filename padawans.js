const { log } = require('console');
const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split(EOL);
  return padawans;
  // console.log(padawans);
}
getPadawanNames();

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split(EOL);
  const result = scores.map((el) => Number(el));
  return result;
}
getLightsaberScores();

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores()
  const stats = [];
  for (let i=0; i<4; i++) {
    stats.push(padawans, scores);
  }
  return stats
}
getStats();

function writeStats() {
  const stats = getStats();
  return fs.writeFileSync('./data/stats.txt', stats.join(EOL));
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
