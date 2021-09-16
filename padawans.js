const fs = require('fs');
const path = require('path');

function names() {
  return fs
    .readFileSync(
      path.join(__dirname, 'data/padawans.txt'),
      'utf8',
    )
    .split('\n');
}
function scores() {
  return fs
    .readFileSync(
      path.join(__dirname, 'data/scores.txt'),
      'utf8',
    )
    .split('\n');
}
function getPadawanNames() {
  const newNames = names();
  newNames.splice(-2);
  return newNames;
}

function getLightsaberScores() {
  const newScores = scores()
    .map((num) => (Number(num)));
  return newScores;
}

function getStats() {
  const newNames = names();
  newNames.splice(-2);
  const newScores = scores()
    .map((num) => (Number(num)));
  const newArr = [
    [newNames[0], Number(newScores[0])],
    [newNames[1], Number(newScores[1])],
    [newNames[2], Number(newScores[2])],
    [newNames[3], Number(newScores[3])],
  ];
  return newArr;
}
// console.log(getStats());

function writeStats() {
  const newNames = names();
  newNames.splice(-2);
  const newScores = scores()
    .map((num) => (Number(num)));
  const text = [
    [newNames[0].concat(' ', Number(newScores[0]))],
    [newNames[1].concat(' ', Number(newScores[1]))],
    [newNames[2].concat(' ', Number(newScores[2]))],
    [newNames[3].concat(' ', Number(newScores[3]))],
  ];
  fs.writeFileSync('data/stats.txt', text.join('\n'));
}

console.log(writeStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
