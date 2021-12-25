const fs = require('fs');
const AllPadawansString = fs
  .readFileSync(__dirname + '/data/padawans.txt', 'utf8')
  .trim();
const AllScoresString = fs
  .readFileSync(__dirname + '/data/scores.txt', 'utf8')
  .trim();

function getPadawanNames() {
  return AllPadawansString.split('\n');
}

function getLightsaberScores() {
  return AllScoresString.split('\n').map((el) => Number(el));
}

function getStats() {
  let Arr = [];
  for (let i = 0; i < getPadawanNames().length; i += 1) {
    // Arr.push([].push(getPadawanNames()[i], getLightsaberScores()[i]));
    let mas = [];
    mas.push(getPadawanNames()[i], getLightsaberScores()[i]);
    Arr.push(mas);
  }
  return Arr;
}

function writeStats() {
  let Dan = getStats();
  let pass = Dan.reduce((acc, el) => {
    acc += `${el.join(' ')}\n`;
    return acc;
  }, '');
  fs.writeFileSync(__dirname + '/data/stats.txt', pass.trim(), 'utf8');
  return pass;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// console.log(AllPadawans)
