const fs = require('fs');

function getPadawanNames() {
  const padavanTxt = fs.readFileSync('./data/padawans.txt', 'utf8');
  const arr = padavanTxt.split('\n').slice(0, -1);
  return arr;
}

function getLightsaberScores() {
  const txt = fs.readFileSync('./data/scores.txt', 'utf-8');
  const arr = txt.split('\n');
  for (let i= 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  return arr;
  console.log(arr);
}
console.log(getLightsaberScores());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  /* getStats,
  writeStats, */
};
