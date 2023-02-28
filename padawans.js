const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
const popped = padawans.pop();
// console.log(popped);
// console.log(scores);
// console.log(padawans);

function getPadawanNames() {
  return padawans.filter((el) => el);
}
// console.log(getPadawanNames());

function getLightsaberScores() {
  return scores.map((el) => +el);
}
// console.log(getLightsaberScores());

function getStats() {
  const res = [];
  for (i = 0; i < scores.length; i++) {
    res.push([padawans[i], +scores[i]]);
  }
  return res;
}
// console.log(getStats());

// console.log(ultraRes);
// console.log(finalRes);
function writeStats() {
  const finalRes = getStats();
  const resRes = finalRes.map((el) => el.join(' '));
  const ultraRes = resRes.join('\n');
  fs.writeFileSync('./data/stats.txt', ultraRes, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
