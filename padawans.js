const fs = require('fs');
let padawanNames;
let lightsaberScores;
let tableScores = [];
let strtableScores = '';

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  padawanNames = data.split('\n');
  for (let i = 0; i < padawanNames.length; i++) {
    if (padawanNames[i] === '') padawanNames.splice(i, 1);
  }
  return padawanNames;
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8');
  const dataArr = data.split('\n');
  for (let i = 0; i < dataArr.length; i++) {
    if (dataArr[i] === '') dataArr.splice(i, 1);
  }
  lightsaberScores = dataArr.map((item) => (item = Number(item)));
  return lightsaberScores;
}

function getStats() {
  for (let i = 0; i < padawanNames.length; i++) {
    let nameAndScore = [];
    nameAndScore.push(padawanNames[i]);
    nameAndScore.push(lightsaberScores[i]);
    tableScores.push(nameAndScore);
  }
  for (let item of tableScores) {
    strtableScores = strtableScores.concat(item.toString(), '\n');
  }
  strtableScores = strtableScores.replaceAll(',', ' ');
  fs.writeFileSync('data/stats.txt', strtableScores);
  return tableScores;
}

function writeStats() {
  for (let item of tableScores) {
    strtableScores = strtableScores.concat(item.toString(), '\n');
  }
  strtableScores = strtableScores.replaceAll(',', ' ');
  fs.writeFileSync('data/stats.txt', strtableScores);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// console.log(getPadawanNames());
// console.log(getLightsaberScores());
// // console.log(getStats());
// console.log(writeStats());
