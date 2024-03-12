const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const names = fs.readFileSync(
    path.join(__dirname, './data/padawans.txt'),
    'utf-8'
  );
  return names.split('\n');
}

function getLightsaberScores() {
  const names = fs.readFileSync(
    path.join(__dirname, './data/scores.txt'),
    'utf-8'
  );
  arrNames = names.split('\n');
  arr = [];

  for (let i = 0; i < arrNames.length; i++) {
    arr.push(+arrNames[i]);
  }
  return arr;
}

function getStats() {
  const names = fs.readFileSync(
    path.join(__dirname, './data/padawans.txt'),
    'utf-8'
  );
  const arrNames = names.split('\n');

  const scores = fs.readFileSync(
    path.join(__dirname, './data/scores.txt'),
    'utf-8'
  );
  const arrScores = scores.split('\n');

  arr = [];
  let length =
    arrNames.length >= arrScores.length ? arrNames.length : arrScores.length;
  for (let i = 0; i < length; i++) {
    if (arrNames[i]) {
      arr.push(arrNames[i]);
    }
    if (arrScores[i]) {
      arr.push(+arrScores[i]);
    }
  }
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push([arr[i], arr[i + 1]]);
  }
  return result;
}
console.log(getStats());

function writeStats() {
  fs.writeFileSync(
    path.join(__dirname, './data/stats.txt'),
    getStats().join('\n').replaceAll(',', ' '),
    'utf-8'
  );
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
