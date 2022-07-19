/* eslint-disable no-plusplus */
const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const padawansDataPath = path.resolve(__dirname, 'data', 'padawans.txt');
  const padawansData = fs.readFileSync(padawansDataPath, 'utf-8');
  const padawans = padawansData.split('\n').filter((el) => el !== '');
  return padawans;
}

function getLightsaberScores() {
  const scoresDataPath = path.resolve(__dirname, 'data', 'scores.txt');
  const scoresData = fs.readFileSync(scoresDataPath, 'utf-8');
  const scores = scoresData.split('\n').filter((el) => el !== '').map((el) => Number(el));
  return scores;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < Math.min(padawans.length, scores.length); i++) {
    stats.push([padawans[i], scores[i]]);
  }
  return stats;
}

function writeStats() {
  const stats = getStats();
  const statsData = stats.map((stat) => stat.join(' ')).join('\n');
  fs.writeFileSync(`${__dirname}/data/stats.txt`, statsData);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
