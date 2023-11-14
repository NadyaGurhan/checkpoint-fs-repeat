const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const res = read.split('\n');
  const result = res.pop();
  return res;
}

function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const result = read.map((el) => Number(el));
  return result;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const output = new Array(padawans.length);
  for (let i = 0; i < padawans.length; i++) {
    output[i] = new Array(2);
    output[i][0] = padawans[i];
    output[i][1] = scores[i];
  }
  return output;
}

function writeStats(stats, path) {
  path = 'data/stats.txt';
  const statsString = new Array(stats.length);
  for (let i = 0; i < stats.length; i++) {
    statsString[i] = stats[i].join(' ');
  }
  console.log(statsString);
  fs.writeFileSync('./data/stats.txt', statsString.join('\n'));
}
