const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
  const score = scores.map((el) => +el);
  return score;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = padawans.map((el, i) => {
    const arr = []
    arr.push(el, scores[i]);
    return arr;
  });
  return stats;
}

function writeStats() {
  let data = getStats();
  data = data.map((el) => el.join(',')).join('\n').replace(/,/gm, ' ');
  console.log(data);
  fs.writeFileSync('./data/stats.txt', data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
