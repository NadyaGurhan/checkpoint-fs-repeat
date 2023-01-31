const fs = require('fs');

function getPadawanNames() {
  return fs
    .readFileSync('./data/padawans.txt', 'utf8')
    .split('\n')
    .slice(0, -1);
}
// console.log(getPadawanNames());

function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf8')
    .split('\n')
    .map((el) => +el);
}
// console.log(getLightsaberScores());
function getStats() {
  const output = [];
  const padawan = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawan.length; i++) {
    const tmp = [];
    tmp.push(padawan[i], scores[i]);
    output.push(tmp);
  }
  return output;
}
// console.log(getStats());
function writeStats() {
  let stat = getStats()
    .map((el) => el.join(' '))
    .join('\n');
  fs.writeFileSync(`./data/stats.txt`, stat);
}
// console.log(writeStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
