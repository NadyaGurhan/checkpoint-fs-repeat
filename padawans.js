const fs = require('fs');

function getPadawanNames() {
  let a = [];
  a = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  delete a[4];
  return a;
}
function getLightsaberScores() {
  let a = [];
  a = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  for (let index = 0; index < a.length; index++) {
    a[index] /= 1;
  }
  return a;
}

function getStats() {
  let all1 = [];
  let a = [];
  a = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  let b = [];
  b = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  for (let index = 0; index < 4; index++) {
    b[index] /= 1;
    all1.push([a[index], b[index]]);
  }
  return all1;
}


function writeStats() {
  let all1 = [];
  let a = [];
  a = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  let b = [];
  b = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  for (let index = 0; index < 4; index++) {
    b[index] /= 1;
    all1.push([a[index], b[index]]);
  }
  return fs.writeFileSync('data/stats.txt', all1.join('\n').split(',').join(' '));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
