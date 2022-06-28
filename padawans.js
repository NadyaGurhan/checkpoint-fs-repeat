const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
}
function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < scores.length; i++) {
    scores[i] = Number(scores[i]);
  }
  return scores;
}
function getStats() {
  const scores = getLightsaberScores();
  const names = getPadawanNames();
  const arr = [];
  for (let i = 0; i < scores.length; i++) {
    arr.push([names[i], Number(scores[i])]);
  }
  return arr;
}
function writeStats() {
  const arr = getStats();
  for (let i = 0; i < arr.length - 1; i++) {
    fs.appendFileSync('./data/stats.txt', `${arr[i][0]} ${arr[i][1]}\n`);
  }
  fs.appendFileSync('./data/stats.txt', `${arr[arr.length - 1][0]} ${arr[arr.length - 1][1]}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
