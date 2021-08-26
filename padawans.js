const fs = require('fs');

function getPadawanNames() {
  let padNames = fs.readFileSync('data/padawans.txt', 'utf-8');
  const namesArr = padNames.split('\n');
  namesArr.pop();
  return namesArr;
}

function getLightsaberScores() {
  let scores = fs.readFileSync('data/scores.txt', 'utf-8');
  const scoresArr = scores.split('\n');
  const numsArr = scoresArr.map((el) => Number(el));
  return numsArr;
}
function getStats() {
  let numsArr = getLightsaberScores();
  let namesArr = getPadawanNames();
  let statsArr = new Array(namesArr.length).fill([]);
  for (let i = 0; i < namesArr.length; i++) {
    statsArr[i] = [namesArr[i], numsArr[i]];
  }
  return statsArr;
}

function writeStats() {
  let statsArr = getStats();
  console.log(statsArr);
  let statsString = statsArr.join('\n').replaceAll(',', ' ');

  console.log(statsString);
  fs.writeFileSync('data/stats.txt', statsString);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
