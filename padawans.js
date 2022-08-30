const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
}

function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const res = read.map((el) => Number(el));
  console.log(res);
  return res;
}

function getStats() {
  const padawans = getPadawanNames();
  const score = getLightsaberScores();
  const res = padawans.map((el, index) => `${el}``+${score[index]}`);
  console.log(res);
  return res;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
