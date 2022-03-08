const fs = require('fs');

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawanNames.trim().split('\r\n');
  // console.log(padawanNames.trim().split('\n'));
}

// getPadawanNames();

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf-8');
  return scores.trim().split('\r\n').map(Number);
  // console.log(scores.trim().split('\r\n').map(Number));
}
// getLightsaberScores();

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];

  for (let i = 0; i < names.length; i += 1) {
    result.push([names[i], scores[i]]);
  }
  return result;
  // console.log(result);
}
// getStats();

function writeStats(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i].join(' '));
  }
  // console.log(result.join('\n'));
  fs.appendFileSync('data/stats.txt', result.join('\n'));
}
// writeStats(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
