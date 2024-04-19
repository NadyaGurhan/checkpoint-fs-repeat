const fs = require('fs');
const path = require('path');
const { EOL } = require('os');

const currentPath = path.join(__dirname);
const padawans = fs.readFileSync(`${currentPath}/data/padawans.txt`, 'utf-8').trim().split(EOL);
const scores = fs.readFileSync(`${currentPath}/data/scores.txt`, 'utf-8').trim().split(EOL).map((el) => Number(el));

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores;
}

function getStats() {
  const stats = [];
  for (let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], scores[i]]);
  }
  return stats;
}

function writeStats() {
  const stats = getStats();
  for (let i = 0; i < stats.length; i += 1) {
    if (i === stats.length - 1) {
      fs.appendFileSync(`${currentPath}/data/stats.txt`, `${stats[i].join(' ')}`);
    } else {
      fs.appendFileSync(`${currentPath}/data/stats.txt`, `${stats[i].join(' ')}${EOL}`);
    }
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
