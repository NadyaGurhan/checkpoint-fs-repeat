const fs = require('fs');

const padawans = fs.readFileSync('/Users/makedonskyy/Desktop/phase-1-repeate/w1d2/checkpoint-fs/data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('/Users/makedonskyy/Desktop/phase-1-repeate/w1d2/checkpoint-fs/data/scores.txt', 'utf-8');

function getPadawanNames() {
  const res = padawans.split('\n');
  return res;
}


function getLightsaberScores () {
  const res = scores.split('\n');
  const final = res.map(Number);
  return final;
}

function getStats() {
  const resPad = padawans.split('\n');
  const resArr = scores.split('\n');
  const resScores = resArr.map(Number);
  const res = resPad.map((item, i) => [item, resScores[i]]);
  return res;
}
getStats()
// console.log(getStats());

function writeStats() {
  // const stat = getStats();
  // // let res = stat.flat().slice(0, 1).join('')
  // const res = stat.join('\n').split(',').join(' ');
  // fs.appendFileSync('./data/stats.txt', res, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
