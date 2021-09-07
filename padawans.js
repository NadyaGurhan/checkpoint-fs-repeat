const fs = require('fs');

function getPadawanNames() {
  const padNamesStr = fs.readFileSync(
    './data/padawans.txt',
    'utf-8',
  );
  const padNamesArr = padNamesStr.split('\n').slice(0, -1);
  return padNamesArr;
}

function getLightsaberScores() {
  const padScoresStr = fs.readFileSync(
    './data/scores.txt',
    'utf-8',
  );
  const padScoresArr = padScoresStr.split('\n');
  const padScores = padScoresArr.map((el) => +el);
  return padScores;
}

function getStats() {
  const padScores = getLightsaberScores();
  const padNames = getPadawanNames();

  const statsArr = [];

  for (let i = 0; i < padScores.length; i += 1) {
    const el1 = padNames[i];
    const el2 = padScores[i];
    statsArr.push(el1);
    statsArr.push(el2);
  }
  console.log(`statsArr: ${Array.isArray(statsArr)}`); // not working as inteded

  const statsNestedArr = [];

  for (let i = 0; i < statsArr.length; i += 1) {
    statsNestedArr.push(statsArr[i].split());
  }

  return statsNestedArr;
}

function writeStats() {
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
