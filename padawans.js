const fs = require('fs');

const padawansArray = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
const padawansArr = padawansArray.slice(0, padawansArray.length - 1);

function getPadawanNames() {
  return padawansArr;
}

const scoresArray = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
const scoresArr = scoresArray.map((el) => Number(el));

function getLightsaberScores() {
  return scoresArr;
}

function getStats() {
  const stat = [];
  for (let i = 0; i < padawansArr.length; i += 1) {
    stat[i] = [padawansArr[i], scoresArr[i]];
  }
  return stat;
}

const statsArr = [];
for (let i = 0; i < padawansArr.length; i += 1) {
  statsArr[i] = `${padawansArr[i]} ${scoresArray[i]}`;
}
const statsStr = statsArr.join('\n');

function writeStats() {
  return fs.writeFileSync('./data/stats.txt', statsStr);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
