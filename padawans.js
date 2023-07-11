const fs = require('fs');

function getPadawanNames() {
  const str = fs.readFileSync('./data/padawans.txt', { encoding: 'utf8' });
  const eol = /\r?\n/;
  const arr = str.split(eol);
  arr.pop();
  return arr;
}

function getLightsaberScores() {
  const str = fs.readFileSync('./data/scores.txt', { encoding: 'utf8' });
  const eol = /\r?\n/;
  const arr = str.split(eol);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  return arr;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  result.length = padawans.length;
  for (let i = 0; i < result.length; i++) {
    result[i] = [];
    result[i].push(padawans[i]);
    result[i].push(scores[i]);
  }
  return result;
}
function writeStats() {
  const arr = getStats();
  console.log(`${arr[0][0]} ${arr[0][1]}\n`);
  let strFromArr = '';
  for (let i = 0; i < arr.length; i++) {
    strFromArr += `${arr[i][0]} ${arr[i][1]}`;
    if (i < arr.length - 1) { strFromArr += '\n'; }
  }
  fs.writeFileSync('data/stats.txt', strFromArr);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
