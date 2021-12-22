const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padavans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').filter(String);
  return padavans;
}

function getLightsaberScores() {
  const score = [];
  const scoreStrArr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').filter(Number);
  for (let i = 0; i < scoreStrArr.length; i += 1) {
    score.push(+scoreStrArr[i]);
  }
  return score;
}

function getStats() {
  const getStat = [];
  const padavans = getPadawanNames();
  const score = getLightsaberScores();
  for (let i = 0; i < padavans.length; i += 1) {
    const arr = [padavans[i], score[i]];
    getStat.push(arr);
  }
  return getStat;
}

function writeStats() {
  const stat = getStats();
  const newStat = stat.join('\n').split(',').join(' ');
  fs.writeFileSync('./data/stats.txt', newStat);
}


