const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawansArr = padawans.trim().split('\n');
  return padawansArr;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scoresArr = scores.trim().split('\n');
  const finalArr = [];
  for (let i = 0; i < scoresArr.length; i += 1) {
    finalArr.push(parseFloat(scoresArr[i]));
  }
  return finalArr;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
