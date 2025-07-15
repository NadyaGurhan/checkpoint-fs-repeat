const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return read.trim().split('\n');
}
getPadawanNames();

function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8');
  const nums = read.split('\n');
  return nums.map(Number);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
}

function writeStats(stats) {


  const data = stats.map((el) => el.join(' '));
  console.log(data.join(EOL));

  return fs.writeFileSync('./data/stats.txt', data.join(EOL) + EOL);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
