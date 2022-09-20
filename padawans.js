const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  let result = padawans.filter((el) => el);
  return result;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  let result = scores.map((el) => {
    if (+el) {
      return +el;
    }
  });
  return result;
}

function getStats() {
  const result = [];
  const parawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < parawans.length; i++) {
    let padawanScore = [];
    padawanScore.push(parawans[i], scores[i]);
    result.push(padawanScore);
  }
  return result;
}

function writeStats() {
  let stats = getStats();
  let statsStr = '';
  for (let i = 0; i < stats.length; i++) {
    if (i < stats.length - 1) {
      statsStr = statsStr + `${stats[i][0]} ${stats[i][1]}\n`;
    } else {
      statsStr = statsStr + `${stats[i][0]} ${stats[i][1]}`;
    }
  }
  fs.appendFileSync('data/stats.txt', statsStr);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
