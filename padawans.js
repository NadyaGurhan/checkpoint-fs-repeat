const fs = require('fs');

function getPadawanNames() {
  const filePadawan = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const namesArr = filePadawan.split('\r\n');
  namesArr.pop();

  return namesArr;
}
getPadawanNames();

function getLightsaberScores() {
  const fileScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scoresArr = fileScores.split(/\s+/)
  const numArr = scoresArr.map(Number)
  return numArr
}
getLightsaberScores();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
