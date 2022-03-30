const fs = require('fs');

const padawanText = fs.readFileSync('./data/padawans.txt', 'utf8');
const scoreText = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  return padawanText.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  return scoreText.split('\n').map((el) => +el);
}

function getStats() {
  const pada = getPadawanNames();
  const sc = getLightsaberScores();
  const arr = [];
  for (let i = 0; i < pada.length; i++) {
    arr.push([pada[i]]);
  }
  for (let i = 0; i < sc.length; i++) {
    arr[i].push(sc[i]);
  }
  return arr;
}

function writeStats() {
  return fs.writeFileSync('data/stats.txt', `${getStats().map((el) => el.join(' ')).join('\n')}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
