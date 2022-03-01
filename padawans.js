let fs = require('fs');
let call = fs.readFileSync('./data/padawans.txt', 'utf-8');
function getPadawanNames() {
  let res = '';

  for (let i = 0; i < call.length - 1; i++) {
    res += call[i];
  }
  return res.split('\n');
};

let nam = getPadawanNames();
// console.log(getPadawanNames());

let scores = fs.readFileSync('./data/scores.txt', 'utf-8');
function getLightsaberScores() {
  let res = '';

  for (let i = 0; i < scores.length; i++) {
    res += scores[i];
  }
  return res.split('\n');
}

let scr = getLightsaberScores();

// console.log(getLightsaberScores());

function getStats() {
  let res = [];
  for (let i = 0; i < nam.length - 1; i++) {
    let arr = [];
    arr.push(nam[i], +scr[i]);
    res.push(arr);
  }
  return res;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
