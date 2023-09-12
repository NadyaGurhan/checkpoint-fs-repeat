const fs = require('fs');

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return read;
}

function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  return read;
}

function getStats() {
  const readPad = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const readScore = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  console.log(readPad, readScore);

  const readArr = readPad.map((el, i) => [el, readScore[i]]);
  console.log(readArr);
  return readArr;
}

function writeStats() {
  const readPad = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const readScore = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  const readArr = readPad.map((el, i) => [el, readScore[i]]).join('\n').replaceAll(',', ' ');

  fs.writeFileSync('./data/stats.txt', readArr, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
