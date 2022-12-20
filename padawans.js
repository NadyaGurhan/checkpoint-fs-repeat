const fs = require('fs');

const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8');
const padawanList = padawan.trim().split('\n');

const score = fs.readFileSync('./data/scores.txt', 'utf-8');
const scoreList = score.trim().split('\n');

function getPadawanNames() {
  return padawanList;
}

function getLightsaberScores() {
  const result = scoreList.map((a) => Number(a));
  return result;
}

function getStats() {
  const result = [];
  const numbersList = getLightsaberScores();
  for (let i = 0; i < padawanList.length; i += 1) {
    result.push([padawanList[i], numbersList[i]]);
  }
  return result;
}

function writeStats() {
  const stats = getStats();
  fs.writeFileSync('./data/stats.txt', stats.join('\n').replaceAll(',', ' '));
}

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

