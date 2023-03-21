const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
const pop = padawans.pop();
console.log(padawans);
function getPadawanNames() {
  return padawans.filter((el) => el);
}

function getLightsaberScores() {
  return scores.map((el) => +el);
}

function getStats() {
  const result = getPadawanNames().map((el, index) => [el, getLightsaberScores()[index]]);
  return result;
}

function writeStats() {
  fs.writeFileSync('./data/stats.txt', getStats().map((el) => el.join(' ')).join('\n'), 'utf8');
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
