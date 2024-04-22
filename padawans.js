const fs = require('fs');

const Padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
const Scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');

function getPadawanNames() {
  const padawansArr = Padawans.trim().split('\n');
  return padawansArr;
}

function getLightsaberScores() {
  const scoresarr = Scores.trim().split('\n');
  const arr = [];
  for (let i = 0; i < scoresarr.length; i += 1) {
    arr.push(Number(scoresarr[i]));
  }
  return arr;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const newArr = [];
  for (let i = 0; i < names.length; i += 1) {
    newArr.push([names[i], scores[i]]);
  }
  return newArr;
}

function writeStats() {
  const stats = getStats();
  fs.writeFileSync(
    `${__dirname}/data/stats.txt`,
    stats.map((el) => el.join(' ')).join('\n')
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
