const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// const arrInDataP = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
// const arrInDataS = fs.readFileSync('./data/scores.txt`', 'utf-8').split('\n');
// 1
function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\r\n');
}
// console.log(getPadawanNames())

// 2
function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\r\n').map(el => +el);
}
// console.log(getLightsaberScores());

// 3
function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  return padawans
    .map((el, index) => [padawans[index], scores[index]]);
};
// console.log(getStats());

// 4
function writeStats() {
const stats = getStats().map(el => el.join(' ')).join('\n');
return fs.writeFileSync('data/stats.txt', stats);
};
