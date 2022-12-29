const fs = require('fs');

const padawansFile = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scoresFile = fs.readFileSync('./data/scores.txt', 'utf-8');

// console.log(padawansFile)

function getPadawanNames() {
  const padawansArr = padawansFile.split('\n');
  padawansNewArr = padawansArr.splice(0, padawansArr.length - 1);
  // console.log(padawansNewArr);
  return padawansNewArr;
}

function getLightsaberScores() {
  const scoresArr = scoresFile.split('\n');
  // console.log(scoresArr);
  return scoresArr.map(Number);
}

const getPadawans = getPadawanNames();
const getScore = getLightsaberScores();

function getStats() {
  const arr = [];
  for (let i = 0; i < getPadawans.length; i += 1) {
    arr.push([getPadawans[i], getScore[i]]);
  }
  return arr;
}

function writeStats() {
  const data = getStats().join('\n').split(', ');
  const result = data[0].replaceAll(',', ' ');
  fs.writeFileSync('./data/stats.txt', result);
}

writeStats(); // ?

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
