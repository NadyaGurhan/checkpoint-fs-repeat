const fs = require('fs')

const padawansFile = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scoresFile = fs.readFileSync('./data/scores.txt', 'utf-8');

// console.log(padawansFile)

function getPadawanNames() {
  const padawansArr = padawansFile.split('\n');
  padawansNewArr = padawansArr.splice(0, padawansArr.length-1)
  // console.log(padawansNewArr);
  return padawansNewArr;
}

function getLightsaberScores() {
  const scoresArr = scoresFile.split('\n');
  // console.log(scoresArr);
  return scoresArr
}

const getPadawans = getPadawanNames();
const getScore = getLightsaberScores();

function getStats() {

  return result
}

const result = getStats();

function writeStats() {
  fs.writeFileSync('./data/stats.txt', result)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
