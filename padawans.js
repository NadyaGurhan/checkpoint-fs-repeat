const fs = require('fs');
const padawans = fs.readFileSync('data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('data/scores.txt', 'utf-8');

function getPadawanNames() {
  const padawansArr = padawans.trim().split('\n');
  return padawansArr;
}


function getLightsaberScores () {
  const padawanScores = scores.trim().split('\n');
  return padawanScores.map(elem => {
    return elem*1;
  });
}

function getStats () {
  const padawansArr = padawans.trim().split('\n');
  const padawanScores = scores.trim().split('\n');
  const newPadawanScores = padawanScores.map(elem => {
    return elem*1;
  });
  const padawanStats = []
    for (let i = 0; i < padawansArr.length; i++) {
      padawanStats[i] = [padawansArr[i], newPadawanScores[i]];
    }
    return padawanStats;
}

function writeStats() {
  const fs = require('fs');
  const mas1 = getPadawanNames();
  const mas2 = getLightsaberScores();
  for (let i = 0; i < mas1.length; i += 1) {
    if (i === mas1.length - 1) {
      fs.appendFileSync('data/stats.txt', `${mas1[i]} ${mas2[i]}`, 'utf8');
      continue;
    }
    fs.appendFileSync('data/stats.txt', `${mas1[i]} ${mas2[i]}\n`, 'utf8');
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
