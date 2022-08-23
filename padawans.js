const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const nums = fs.readFileSync('./data/scores.txt', 'utf-8');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  const result = [];
  let padw = padawans;
  padw = padw.split('\n');
  for (let i = 0; i < padw.length - 1; i += 1) {
    // console.log(padw[i]);
    result.push(padw[i]);
  }
  // console.log(result);
  return result;
}

// getPadawanNames();

function getLightsaberScores() {
  const result = [];
  let score = nums;
  score = score.split('\n');
  for (let i = 0; i < score.length; i += 1) {
    // console.log(padw[i]);
    result.push(+score[i]);
  }
  // console.log(result);
  return result;
}
