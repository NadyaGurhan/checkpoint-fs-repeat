const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawanArr = padawans.split('\n');
  return (padawanArr.slice(0, padawanArr.length - 1));
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scoresArr = scores.split('\n');
  for (let i = 0; i < scoresArr.length; i++) {
    console.log(scoresArr[i]);
    scoresArr[i] = Number(scoresArr[i]);
  }
  return (scoresArr);
}

getLightsaberScores();

function getStats() {
  const padawanArr = getPadawanNames();
  const scoresArr = getLightsaberScores();
  const finalArr = [];
  let tempArr = [];
  for (let i = 0; i < padawanArr.length; i++) {
    tempArr.push(padawanArr[i]);
    tempArr.push(scoresArr[i]);
    finalArr.push(tempArr);
    tempArr = [];
  }
  return (finalArr);
}

function writeStats() {
  const arr = getStats();
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].join(' '));
  }
  const data = newArr.join('\n');
  fs.writeFileSync('./data/stats.txt', data);
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
