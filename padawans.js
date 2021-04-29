const fs = require('fs');

function getPadawanNames() {
  const name = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .trim()
    .split('\n');
  return name;
}

function getLightsaberScores() {
  const score = fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .trim()
    .split('\n')
    .map((el) => +el);
  return score;
}

function getStats() {
  let padawan = getPadawanNames();
  let score = getLightsaberScores();
  let stats = [];
  for (let i = 0; i < padawan.length; i++) {
    stats.push([padawan[i],score[i]]);
    // stats.push(score[i]);
  }
  return stats;
}

function writeStats() {
  let stats = getStats();
  const write = stats.map(el => el.join(' ')).join('\n')
  fs.writeFileSync('./data/stats.txt', write);

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
