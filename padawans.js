const fs = require('fs');
const path = require('path');

const getPadawanNames = () => padawans = (fs.readFileSync('./data/padawans.txt', 'utf-8')).split('\r\n').slice(0, 4);

const getLightsaberScores = () => {
  const arr = [];
  const scores = (fs.readFileSync('./data/scores.txt', 'utf-8')).split('\r\n');
  for (let i = 0; i < scores.length; i++) {
    arr.push(Number(scores[i]));
  }
  return arr;
};

function getStats() {
  const stats = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i++) { stats.push([padawans[i], scores[i]]); }
  return stats;
}

function writeStats() {
  const stats = getStats();
  const data = fs.writeFileSync('./data/stats.txt', stats.join('\n').replaceAll(',', ' '), 'utf-8');
  return data;
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
